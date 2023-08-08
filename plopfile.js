const requireField = fieldName => {
    return value => {
        if (String(value).length === 0) {
            return fieldName + " is required";
        }
        return true;
    };
};

module.exports = plop => {
    plop.setGenerator("component", {
        description: "Create a custom react component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your component name?",
                validate: requireField("name"),
            },
            {
                type: "input",
                name: "summary",
                message: "Description of your component",
                validate: requireField("summary"),
            },
            {
                type: "input",
                name: "purpose",
                message: "Purpose of your component",
                validate: requireField("purpose"),
            },
            {
                type: "input",
                name: "figmaLink",
                message: "Figma Link of your component",
                validate: requireField("figmaLink"),
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/components/{{name}}/ComponentSummary.mdx",
                templateFile: "plop-templates/componentSummary.mdx.hbs",
            },
            {
                type: "add",
                path: "src/components/{{name}}/{{name}}.tsx",
                templateFile: "plop-templates/component.tsx.hbs",
            },
            {
                type: "add",
                path: "src/components/{{name}}/index.ts",
                templateFile: "plop-templates/index.ts.hbs",
            },
            {
                type: "add",
                path: "src/components/{{name}}/{{name}}.stories.tsx",
                templateFile: "plop-templates/stories.tsx.hbs",
            },
            {
                type: "add",
                path: "src/components/{{name}}/{{name}}.styles.ts",
                templateFile: "plop-templates/styles.ts.hbs",
            },
            {
                type: "add",
                path: "src/components/{{name}}/{{name}}.test.tsx",
                templateFile: "plop-templates/test.tsx.hbs",
            },
            {
                type: 'append',
                path: "src/components/index.ts",
                pattern: /[;]/,
                template: 'export { default as {{name}} } from "./{{name}}";'
            },
        ],
    });
};
