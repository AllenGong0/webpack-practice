module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module',
		'ecmaFeatures':{
			'impliedStrict': true
		}
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		"@typescript-eslint/no-unused-vars": ["off"],
		"@typescript-eslint/no-explicit-any": ["off"],
		"@typescript-eslint/no-empty-function": ["off"],
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	},
	"overrides": [
		{
		  "files": ["*-test.js","*.spec.js"],
		  "rules": {
			"no-unused-expressions": "off"
		  }
		}
	]
};