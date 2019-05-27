module.exports = {
	// http://eslint.org/docs/rules/
	//"parser": "esprima",
	// "parser": "espree",
	parser: "@typescript-eslint/parser",
	/*"ecmaFeatures": {
    "binaryLiterals": true,                    // enable binary literals
    "blockBindings": true,                     // enable let and const (aka block bindings)
    "defaultParams": true,                     // enable default function parameters
    "forOf": true,                             // enable for-of loops
    "generators": true,                        // enable generators
    "objectLiteralComputedProperties": true,   // enable computed object literal property names
    "objectLiteralDuplicateProperties": true,  // enable duplicate object literal properties in strict mode
    "objectLiteralShorthandMethods": true,     // enable object literal shorthand methods
    "objectLiteralShorthandProperties": true,  // enable object literal shorthand properties
	"experimentalObjectRestSpread": true, // enable {...a}
    "octalLiterals": true,                     // enable octal literals
    "regexUFlag": true,                        // enable the regular expression u flag
    "regexYFlag": true,                        // enable the regular expression y flag
    "templateStrings": true,                   // enable template strings
    "unicodeCodePointEscapes": true,           // enable code point escapes
    "jsx": true,                               // enable JSX
    "es6": true,
    "ecmascript6": true
  },*/
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
			modules: true
		}
	},

	env: {
		browser: true, // browser global variables.
		node: true, // Node.js global variables and Node.js-specific rules.
		amd: false, // defines require() and define() as global variables as per the amd spec.
		mocha: false, // adds all of the Mocha testing global variables.
		jasmine: false, // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
		phantomjs: false, // phantomjs global variables.
		jquery: false, // jquery global variables.
		prototypejs: false, // prototypejs global variables.
		shelljs: false, // shelljs global variables.
		es6: true
	},

	globals: {
		// e.g. "angular": true
	},

	plugins: [
		// e.g. "react" (must run `npm install eslint-plugin-react` first)
		"@typescript-eslint"
	],
	extends: ["eslint:recommended"],

	rules: {
		////////// Possible Errors //////////

		//"comma-dangle": 2,            // disallow trailing commas in object literals
		"no-cond-assign": 0, // disallow assignment in conditional expressions
		"no-console": 1, // disallow use of console (off by default in the node environment)
		"no-constant-condition": 0, // disallow use of constant expressions in conditions
		"no-control-regex": 0, // disallow control characters in regular expressions
		"no-debugger": 0, // disallow use of debugger
		"no-dupe-keys": 0, // disallow duplicate keys when creating object literals
		"no-empty": 0, // disallow empty statements
		"no-empty-class": 0, // disallow the use of empty character classes in regular expressions
		"no-ex-assign": 0, // disallow assigning to the exception in a catch block
		"no-extra-boolean-cast": 0, // disallow double-negation boolean casts in a boolean context
		"no-extra-parens": 0, // disallow unnecessary parentheses (off by default)
		"no-extra-semi": 1, // disallow unnecessary semicolons
		"no-func-assign": 2, // disallow overwriting functions written as function declarations
		"no-inner-declarations": 0, // disallow function or variable declarations in nested blocks
		"no-invalid-regexp": 1, // disallow invalid regular expression strings in the RegExp constructor
		"no-irregular-whitespace": 1, // disallow irregular whitespace outside of strings and comments
		"no-negated-in-lhs": 2, // disallow negation of the left operand of an in expression
		"no-obj-calls": 0, // disallow the use of object properties of the global object (Math and JSON) as functions
		"no-regex-spaces": 0, // disallow multiple spaces in a regular expression literal
		"no-sparse-arrays": 0, // disallow sparse arrays
		"no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
		"use-isnan": 0, // disallow comparisons with the value NaN
		"valid-jsdoc": 0, // Ensure JSDoc comments are valid (off by default)
		"valid-typeof": 0, // Ensure that the results of typeof are compared against a valid string

		////////// Best Practices //////////

		"block-scoped-var": 0, // treat var statements as if they were block scoped (off by default)
		complexity: 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
		"consistent-return": 0, // require return statements to either always or never specify values
		curly: [1], // specify curly brace conventions for all control statements
		"default-case": 1, // require default case in switch statements (off by default)
		"dot-notation": 1, // encourages use of dot notation whenever possible
		eqeqeq: ["error", "always", { null: "never" }], // require the use of === and !==
		"guard-for-in": 0, // make sure for-in loops have an if statement (off by default)
		"no-alert": 0, // disallow the use of alert, confirm, and prompt
		"no-caller": 0, // disallow use of arguments.caller or arguments.callee
		"no-div-regex": 0, // disallow division operators explicitly at beginning of regular expression (off by default)
		"no-else-return": 2, // disallow else after a return in an if (off by default)
		"no-empty-label": 0, // disallow use of labels for anything other then loops and switches
		"no-eq-null": 2, // disallow comparisons to null without a type-checking operator (off by default)
		"no-eval": 2, // disallow use of eval()
		"no-extend-native": 0, // disallow adding to native types
		"no-extra-bind": 0, // disallow unnecessary function binding
		"no-fallthrough": 2, // disallow fallthrough of case statements
		"no-floating-decimal": 0, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
		"no-implied-eval": 2, // disallow use of eval()-like methods
		"no-iterator": 0, // disallow usage of __iterator__ property
		"no-labels": 0, // disallow use of labeled statements
		"no-lone-blocks": 2, // disallow unnecessary nested blocks
		"no-loop-func": 0, // disallow creation of functions within loops
		"no-multi-spaces": 0, // disallow use of multiple spaces
		"no-multi-str": 0, // disallow use of multiline strings
		"no-native-reassign": 2, // disallow reassignments of native objects
		"no-new": 2, // disallow use of new operator when not part of the assignment or comparison
		"no-new-func": 2, // disallow use of new operator for Function object
		"no-new-wrappers": 2, // disallows creating new instances of String, Number, and Boolean
		"no-octal": 0, // disallow use of octal literals
		"no-octal-escape": 0, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
		"no-process-env": 0, // disallow use of process.env (off by default)
		"no-proto": 0, // disallow usage of __proto__ property
		"no-redeclare": 2, // disallow declaring the same variable more then once
		"no-return-assign": 0, // disallow use of assignment in return statement
		"no-script-url": 0, // disallow use of javascript: urls.
		"no-self-compare": 0, // disallow comparisons where both sides are exactly the same (off by default)
		"no-sequences": 0, // disallow use of comma operator
		"no-unused-expressions": 0, // disallow usage of expressions in statement position
		"no-void": 0, // disallow use of void operator (off by default)
		"no-warning-comments": 0, // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
		"no-with": 0, // disallow use of the with statement
		radix: 2, // require use of the second argument for parseInt() (off by default)
		"vars-on-top": 0, // requires to declare all vars on top of their containing scope (off by default)
		"wrap-iife": 2, // require immediate function invocation to be wrapped in parentheses (off by default)
		yoda: 1, // require or disallow Yoda conditions

		// "max-len": 1, // there is no fixer for this

		////////// Strict Mode //////////

		"global-strict": 0, // (deprecated) require or disallow the "use strict" pragma in the global scope (off by default in the node environment)
		"no-extra-strict": 0, // (deprecated) disallow unnecessary use of "use strict"; when already in strict mode
		strict: 0, // controls location of Use Strict Directives

		////////// Variables //////////

		"no-catch-shadow": 2, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
		"no-delete-var": 2, // disallow deletion of variables
		"no-label-var": 1, // disallow labels that share a name with a variable
		"no-shadow": 0, // disallow declaration of variables already declared in the outer scope
		"no-shadow-restricted-names": 2, // disallow shadowing of names such as arguments
		"no-undef": 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
		"no-undef-init": 1, // disallow use of undefined when initializing variables
		"no-undefined": 0, // disallow use of undefined variable (off by default)
		"no-unused-vars": 0, // disallow declaration of variables that are not used in the code
		"no-use-before-define": 0, // disallow use of variables before they are defined

		////////// Node.js //////////

		"handle-callback-err": 1, // enforces error handling in callbacks (off by default) (on by default in the node environment)
		"no-mixed-requires": [1, { grouping: true, allowCall: true }], // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
		"no-new-require": 0, // disallow use of new operator with the require function (off by default) (on by default in the node environment)
		"no-path-concat": 2, // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
		"no-process-exit": 0, // disallow process.exit() (on by default in the node environment)
		"no-restricted-modules": 0, // restrict usage of specified node modules (off by default)
		"no-sync": 0, // disallow use of synchronous methods (off by default)

		////////// Stylistic Issues //////////

		//"brace-style": [1, "1tbs", {"allowSingleLine": true}],               // enforce one true brace style (off by default)
		//"camelcase": 1,                 // require camel case names
		"comma-spacing": [1, { before: false, after: true }], // enforce spacing before and after comma
		"comma-style": 0, // enforce one true comma style (off by default)
		"consistent-this": 0, // enforces consistent naming when capturing the current execution context (off by default)
		"eol-last": 0, // enforce newline at the end of file, with no multiple empty lines
		"func-names": [0, "as-needed"], // require function expressions to have a name (off by default)
		"func-style": 0, // enforces use of function declarations or expressions (off by default)
		"key-spacing": [
			1,
			{ beforeColon: false, afterColon: true, mode: "strict" }
		], // enforces spacing between keys and values in object literal properties
		"max-nested-callbacks": 0, // specify the maximum depth callbacks can be nested (off by default)
		// "new-cap": 1,                   // require a capital letter for constructors // Disabled because it applies to modules as well -.-
		"new-cap": 0,
		// "new-parens": 2,
		"new-parens": 0, // disallow the omission of parentheses when invoking a constructor with no arguments
		"no-array-constructor": 2, // disallow use of the Array constructor
		"no-inline-comments": 0, // disallow comments inline after code (off by default)
		"no-lonely-if": 1, // disallow if as the only statement in an else block (off by default)
		"no-mixed-spaces-and-tabs": 0, // disallow mixed spaces and tabs for indentation
		"no-multiple-empty-lines": 0, // disallow multiple empty lines (off by default)
		"no-nested-ternary": 0, // disallow nested ternary expressions (off by default)
		"no-new-object": 1, // disallow use of the Object constructor
		"semi-spacing": [1, { before: false, after: true }], // disallow space before semicolon
		"no-spaced-func": 1, // disallow space between function identifier and application
		"no-ternary": 0, // disallow the use of ternary operators (off by default)
		"no-trailing-spaces": 0, // disallow trailing whitespace at the end of lines
		"no-underscore-dangle": 0, // disallow dangling underscores in identifiers
		"one-var": 0, // allow just one var statement per function (off by default)
		"operator-assignment": 2, // require assignment operator shorthand where possible or prohibit it entirely (off by default)
		"padded-blocks": [1, "never"], // enforce padding within blocks (off by default)
		"quote-props": [1, "as-needed"], // require quotes around object literal property names (off by default)
		quotes: [
			1,
			"double",
			{ avoidEscape: true, allowTemplateLiterals: true }
		], // specify whether double or single quotes should be used
		"prefer-template": 1, // prefer template strings
		semi: [1, "always"], // require or disallow use of semicolons instead of ASI
		"sort-vars": 0, // sort variables within the same declaration block (off by default)
		"space-before-function-paren": [1, "never"], // require a space after certain keywords (off by default)
		"space-before-blocks": [1, "always"], // require or disallow space before blocks (off by default)
		"space-in-parens": 0, // require or disallow spaces inside parentheses (off by default)
		"space-unary-ops": 0, // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
		"prefer-const": 1,
		complexity: 1,
		"no-dupe-class-members": 0,

		////////// ECMAScript 6 //////////

		"no-var": 2, // require let or const instead of var (off by default)
		"generator-star-spacing": ["error", { before: true, after: false }] // enforce the position of the * in generator functions (off by default)
	}
};
