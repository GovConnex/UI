import fs from "fs";
import path from "path";

/**
 * Generates a Tailwind CSS configuration object based on a Figma token theme object.
 * Tailwind CSS is a utility-first CSS framework for rapidly building web sites and apps.
 * This is suitable for use in non-React projects, such as static HTML sites, where we'd like to
 * use the GovConnex theme.
 *
 * https://tailwindcss.com/docs/installation
 *
 * The return of this function can be used generate a Tailwind CSS file via the tailwindcss CLI tool.
 * The output CSS can then be included in HTML to use the utility classes defined in the configuration.
 *
 * Example usage:
 * npx tailwindcss -c ../../UI/src/theming/tailwind.config.js -i ../../UI/src/theming/tailwind.config.js -o ./styles.css --watch --content ./*.html
 *
 * TIP; You can run npx http-server to serve static files for testing / development.
 *
 * @param {Object} theme - The theme object (merge of global and light Figma token JSON files).
 * @returns {Object} The Tailwind CSS configuration object, which can be passed into the CLI.
 */
function generateTailwindConfig(theme) {
  const widths = {
    article: "800px",
    aside: "300px",
    "40px": "40px",
    "32px": "32px",
    "24px": "24px",
    "16px": "16px",
    "14px": "14px",
  };

  const heights = {
    "40px": "40px",
    "32px": "32px",
    "24px": "24px",
    "16px": "16px",
    "14px": "14px",
  };

  const mapWeightLabel = {
    Medium: "500",
    Bold: "700",
    "Semi Bold": "600",
    Regular: "400",
  };

  const tailwindConfig = {
    content: ["./*.html"],
    theme: {
      extend: {
        colors: {
          ...theme.primary,
          ...theme.foundation,
          ...theme.core.background,
          ...theme.core.content,
          ...theme.core.border,
          ...theme.extended,
        },
        spacing: theme.spacing,
        fontFamily: {
          sans: [theme.typography.display.lg.fontFamily, "sans-serif"],
        },
        fontSize: {
          xs: theme.typography.body.xs.fontSize,
          sm: theme.typography.body.sm.fontSize,
          md: theme.typography.body.md.fontSize,
          lg: theme.typography.body.lg.fontSize,
          xl: theme.typography.body.xl.fontSize,
          // Plus the heights
          ...heights,
        },
        fontWeight: {
          light: mapWeightLabel[theme.typography.display.lg.fontWeight],
          medium: mapWeightLabel[theme.typography.display.md.fontWeight],
          bold: mapWeightLabel[theme.typography.display.xl.fontWeight],
        },
        lineHeight: {
          none: theme.typography.display.lg.lineHeight,
          tight: theme.typography.display.md.lineHeight,
          normal: theme.typography.display.sm.lineHeight,
          loose: theme.typography.display.xl.lineHeight,
        },
        letterSpacing: {
          tighter: theme.typography.display.lg.letterSpacing,
          tight: theme.typography.display.md.letterSpacing,
          normal: theme.typography.display.sm.letterSpacing,
          wide: theme.typography.display.xl.letterSpacing,
        },
        borderRadius: theme.borderRadius,
        borderWidth: theme.borderWidth,
        outlineWidth: theme.borderWidth,
        outlineOffset: theme.borderWidth,
        boxShadow: Object.entries(theme.boxShadow).reduce((acc, [key, value]) => {
          const {x, y, blur, spread, color} = value;
          const shadowString = `${x}px ${y}px ${blur}px ${spread}px ${color}`;
          return {...acc, [key]: shadowString};
        }, {}),
        width: widths,
        maxWidth: widths,
        minWidth: widths,
        height: heights,
        maxHeight: heights,
        minHeight: heights,
      },
    },
    variants: {},
    plugins: [
      function ({addUtilities}) {
        const typoSizes = ["xl", "lg", "md", "sm", "xs"];
        const typoNames = ["display", "heading", "body", "label"];

        // Add typography utilities
        const newUtilities = {};
        typoNames.forEach((name) => {
          typoSizes.forEach((size) => {
            if (!theme.typography[name][size]) return;

            newUtilities[`.typo-${name}-${size}`] = {
              fontSize: theme.typography[name][size].fontSize,
              fontWeight: mapWeightLabel[theme.typography[name][size].fontWeight],
              lineHeight: theme.typography[name][size].lineHeight,
              letterSpacing: theme.typography[name][size].letterSpacing,
            };
          });
        });

        addUtilities(newUtilities);
      },
    ],
  };

  return tailwindConfig;
}

const globalTokens = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "tokens-output", "global.json"), "utf-8")
);
const lightTokens = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "tokens-output", "light.json"), "utf-8")
);

const mergedTheme = {...globalTokens, ...lightTokens};
const tailwindConfigContent = generateTailwindConfig(mergedTheme);

if (process.env.NODE_ENV === "development") {
  fs.writeFileSync(
    path.resolve(__dirname, "tailwind-config.json"),
    JSON.stringify(tailwindConfigContent, null, 2)
  );
} else {
  module.exports = tailwindConfigContent;
}
