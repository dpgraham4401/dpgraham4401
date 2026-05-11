/** @type {import("prettier").Config} */
export default {
    plugins: ["prettier-plugin-astro"],
    singleQuote: false,
    semi: true,
    trailingComma: "all",
    arrowParens: "always",
    bracketSpacing: true,
    overrides: [
        {
            files: "*.astro",
            options: { parser: "astro" },
        },
        {
            files: "*.md",
            options: {
                printWidth: 100,
                proseWrap: "always",
            },
        },
    ],
};
