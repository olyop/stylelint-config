"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-sass-guidelines",
    ],
    plugins: [
        "stylelint-declaration-block-no-ignored-properties",
        "stylelint-scss",
    ],
    overrides: [{
            files: ["**/*.scss"],
            customSyntax: "postcss-scss",
        }],
    rules: {
        "indentation": "tab",
        "selector-max-id": 1,
        "max-line-length": 200,
        "property-case": "lower",
        "string-quotes": "double",
        "max-nesting-depth": null,
        "no-eol-whitespace": true,
        "selector-id-pattern": null,
        "at-rule-name-case": "lower",
        "selector-type-case": "lower",
        "rule-empty-line-before": null,
        "value-no-vendor-prefix": null,
        "selector-class-pattern": null,
        "at-rule-empty-line-before": null,
        "selector-pseudo-class-case": "lower",
        "declaration-empty-line-before": "never",
        "no-missing-end-of-source-newline": null,
        "custom-property-empty-line-before": null,
        "block-closing-brace-newline-before": null,
        "order/properties-alphabetical-order": null,
        "block-closing-brace-space-before": "always",
        "scss/double-slash-comment-empty-line-before": null,
        "function-parentheses-space-inside": "never-single-line",
        "scss/dollar-variable-colon-space-after": "always-single-line",
    },
};
exports.default = config;
