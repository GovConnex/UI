# GovConnex UI — Tailwind Theme

[![npm](https://img.shields.io/npm/v/@govconnex/ui-tailwind)](https://www.npmjs.com/package/@govconnex/ui-tailwind)

This project is a utility for generating a [Tailwind CSS](https://tailwindcss.com/) configuration object based on the GovConnex Figma token theme objects. Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. This utility is suitable for use in non-React projects, such as static HTML sites where want to use the same theme tokens as in the UI library.

## Prerequisites

You need to have Node.js and npm installed on your machine.

## Installing

```sh
npm i --save-dev @govconnex/ui-tailwind tailwindcss
```

## Usage

In the CLI:

```sh
npx tailwindcss -c node_modules/@govconnex/ui-tailwind/tailwind.config.js -i node_modules/@govconnex/ui-tailwind/tailwind-theme.css 
```

## Guidelines

### Rem/em/px guidelines

- Border width (`px`)
- Icon size (`em`) - Inline with text.
- Margin for typography (`rem`)
- Padding for typography (`em`)
- Font size (`rem` or `%`)
- Line height (`em` or `rem`)

https://www.youtube.com/watch?v=vy-lRUMpEOs
