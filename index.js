module.exports = {
	plugins: ["stylelint-scss"],
	extends: "stylelint-config-sass-guidelines",
	rules: {
		"indentation": "tab",
		"selector-max-id": 1,
		"string-quotes": "double",
		"max-nesting-depth": null,
		"no-eol-whitespace": true,
		"selector-class-pattern": null,
		"rule-empty-line-before": null,
		"value-no-vendor-prefix": null,
		"no-missing-end-of-source-newline": null,
		"order/properties-alphabetical-order": null,
		"scss/dollar-variable-colon-space-after": "always-single-line"
	}
}