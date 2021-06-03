module.exports = {
	plugins: ["stylelint-scss"],
	extends: "stylelint-config-sass-guidelines",
	rules: {
		"indentation": "tab",
		"selector-max-id": 1,
		"property-case": "lower",
		"string-quotes": "double",
		"max-nesting-depth": null,
		"no-eol-whitespace": true,
		"at-rule-name-case": "lower",
		"selector-type-case": "lower",
		"selector-class-pattern": null,
		"rule-empty-line-before": null,
		"value-no-vendor-prefix": null,
		"media-feature-name-case": "lower",
		"selector-pseudo-class-case": "lower",
		"no-missing-end-of-source-newline": null,
		"order/properties-alphabetical-order": null,
		"block-closing-brace-space-before": "always",
		"selector-class-pattern": "^([A-Z]?[a-z]*)(-[a-z]+)*$",
		"scss/dollar-variable-colon-space-after": "always-single-line"
	}
}