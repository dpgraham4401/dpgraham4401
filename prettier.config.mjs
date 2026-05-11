/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    singleQuote: true,
    semi: true,
    trailingComma: 'all',
    arrowParens: 'always',
    bracketSpacing: true,
    overrides: [
        {
            files: '*.astro',
            options: { parser: 'astro' },
        },
    ],
};
