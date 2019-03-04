/*
* To try in Ace editor, copy and paste into the mode creator
* here : http://ace.c9.io/tool/mode_creator.html
*/

ace.define("ace/mode/scpl_highlight_rules", function(require, exports, module) {
"use strict";
var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
/* --------------------- START ----------------------------- */
var ScplHighlightRules = function() {
this.$rules = {
"start" : [
   {
      "token" : "punctuation.operator",
      "regex" : "(\\\")",
      "push" : "string__1"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(^\\s*\\|\\s*)",
      "push" : "barlist__1"
   },
   {
      "token" : "variable",
      "regex" : "(:([A-Za-z0-9@._]+))"
   },
   {
      "token" : "keyword",
      "regex" : "([A-Za-z0-9@._]+)"
   },
   {
      "token" : "comment",
      "regex" : "(/\\*)",
      "push" : "multi_line_comment__1"
   },
   {
      "token" : "comment",
      "regex" : "(--\\[)",
      "push" : "multi_line_comment__2"
   },
   {
      "token" : "comment",
      "regex" : "(--.*)"
   },
   {
      "token" : "comment",
      "regex" : "(#.*)"
   },
   {
      "token" : "comment",
      "regex" : "(//.*)"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\()",
      "push" : "action__1"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\[)",
      "push" : "action__2"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "({)",
      "push" : "action__3"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "([\"\\:,;^\\->=])"
   },
   {
      "token" : "invalid",
      "regex" : "([^\\s])"
   },
   {
      defaultToken : "text",
   }
],
"action__1" : [
   {
      "token" : "punctuation.operator",
      "regex" : "(\\))",
      "next" : "pop"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\\")",
      "push" : "string__1"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(^\\s*\\|\\s*)",
      "push" : "barlist__1"
   },
   {
      "token" : "variable",
      "regex" : "(:([A-Za-z0-9@._]+))"
   },
   {
      "token" : "keyword",
      "regex" : "([A-Za-z0-9@._]+)"
   },
   {
      "token" : "comment",
      "regex" : "(/\\*)",
      "push" : "multi_line_comment__1"
   },
   {
      "token" : "comment",
      "regex" : "(--\\[)",
      "push" : "multi_line_comment__2"
   },
   {
      "token" : "comment",
      "regex" : "(--.*)"
   },
   {
      "token" : "comment",
      "regex" : "(#.*)"
   },
   {
      "token" : "comment",
      "regex" : "(//.*)"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\()",
      "push" : "action__1"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\[)",
      "push" : "action__2"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "({)",
      "push" : "action__3"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "([\"\\:,;^\\->=])"
   },
   {
      "token" : "invalid",
      "regex" : "([^\\s])"
   },
   {
      defaultToken : "text",
   }
],
"action__2" : [
   {
      "token" : "punctuation.operator",
      "regex" : "(\\])",
      "next" : "pop"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\\")",
      "push" : "string__1"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(^\\s*\\|\\s*)",
      "push" : "barlist__1"
   },
   {
      "token" : "variable",
      "regex" : "(:([A-Za-z0-9@._]+))"
   },
   {
      "token" : "keyword",
      "regex" : "([A-Za-z0-9@._]+)"
   },
   {
      "token" : "comment",
      "regex" : "(/\\*)",
      "push" : "multi_line_comment__1"
   },
   {
      "token" : "comment",
      "regex" : "(--\\[)",
      "push" : "multi_line_comment__2"
   },
   {
      "token" : "comment",
      "regex" : "(--.*)"
   },
   {
      "token" : "comment",
      "regex" : "(#.*)"
   },
   {
      "token" : "comment",
      "regex" : "(//.*)"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\()",
      "push" : "action__1"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\[)",
      "push" : "action__2"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "({)",
      "push" : "action__3"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "([\"\\:,;^\\->=])"
   },
   {
      "token" : "invalid",
      "regex" : "([^\\s])"
   },
   {
      defaultToken : "text",
   }
],
"action__3" : [
   {
      "token" : "punctuation.operator",
      "regex" : "(})",
      "next" : "pop"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\\")",
      "push" : "string__1"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(^\\s*\\|\\s*)",
      "push" : "barlist__1"
   },
   {
      "token" : "variable",
      "regex" : "(:([A-Za-z0-9@._]+))"
   },
   {
      "token" : "keyword",
      "regex" : "([A-Za-z0-9@._]+)"
   },
   {
      "token" : "comment",
      "regex" : "(/\\*)",
      "push" : "multi_line_comment__1"
   },
   {
      "token" : "comment",
      "regex" : "(--\\[)",
      "push" : "multi_line_comment__2"
   },
   {
      "token" : "comment",
      "regex" : "(--.*)"
   },
   {
      "token" : "comment",
      "regex" : "(#.*)"
   },
   {
      "token" : "comment",
      "regex" : "(//.*)"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\()",
      "push" : "action__1"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\[)",
      "push" : "action__2"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "({)",
      "push" : "action__3"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "([\"\\:,;^\\->=])"
   },
   {
      "token" : "invalid",
      "regex" : "([^\\s])"
   },
   {
      defaultToken : "text",
   }
],
"barlist__1" : [
   {
      "token" : "punctuation.operator",
      "regex" : "($)",
      "next" : "pop"
   },
   {
      "token" : "constant.language.escape",
      "regex" : "(\\\\[\"'\\\\n])"
   },
   {
      "token" : "constant.language.escape",
      "regex" : "(\\\\\\()",
      "push" : "escape__1"
   },
   {
      "token" : "string",
      "regex" : "([^\\\\]+)"
   },
   {
      defaultToken : "text",
   }
],
"escape__1" : [
   {
      "token" : "constant.language.escape",
      "regex" : "(\\))",
      "next" : "pop"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\\")",
      "push" : "string__1"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(^\\s*\\|\\s*)",
      "push" : "barlist__1"
   },
   {
      "token" : "variable",
      "regex" : "(:([A-Za-z0-9@._]+))"
   },
   {
      "token" : "keyword",
      "regex" : "([A-Za-z0-9@._]+)"
   },
   {
      "token" : "comment",
      "regex" : "(/\\*)",
      "push" : "multi_line_comment__1"
   },
   {
      "token" : "comment",
      "regex" : "(--\\[)",
      "push" : "multi_line_comment__2"
   },
   {
      "token" : "comment",
      "regex" : "(--.*)"
   },
   {
      "token" : "comment",
      "regex" : "(#.*)"
   },
   {
      "token" : "comment",
      "regex" : "(//.*)"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\()",
      "push" : "action__1"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "(\\[)",
      "push" : "action__2"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "({)",
      "push" : "action__3"
   },
   {
      "token" : "punctuation.operator",
      "regex" : "([\"\\:,;^\\->=])"
   },
   {
      "token" : "invalid",
      "regex" : "([^\\s])"
   },
   {
      defaultToken : "text",
   }
],
"multi_line_comment__1" : [
   {
      "token" : "comment",
      "regex" : "(\\*/)",
      "next" : "pop"
   },
   {
      defaultToken : "comment",
   }
],
"multi_line_comment__2" : [
   {
      "token" : "comment",
      "regex" : "(--\\])",
      "next" : "pop"
   },
   {
      defaultToken : "comment",
   }
],
"string__1" : [
   {
      "token" : "punctuation.operator",
      "regex" : "(\\\")",
      "next" : "pop"
   },
   {
      "token" : "constant.language.escape",
      "regex" : "(\\\\[\"'\\\\n])"
   },
   {
      "token" : "constant.language.escape",
      "regex" : "(\\\\\\()",
      "push" : "escape__1"
   },
   {
      "token" : "string",
      "regex" : "([^\"\\\\]+)"
   },
   {
      defaultToken : "text",
   }
]
};
this.normalizeRules();
};
/* ------------------------ END ------------------------------ */
oop.inherits(ScplHighlightRules, TextHighlightRules);
exports.ScplHighlightRules = ScplHighlightRules;
});

ace.define('ace/mode/scpl', ["ace/mode/scpl_highlight_rules"], function(require, exports, module) {

	var oop = require("ace/lib/oop");
	var TextMode = require("ace/mode/text").Mode;
	var ExampleHighlightRules = require("ace/mode/scpl_highlight_rules").ScplHighlightRules;

	var Mode = function() {
		this.HighlightRules = ExampleHighlightRules;
	};
	oop.inherits(Mode, TextMode);

	(function() {
		// Extra logic goes here. (see below)
	}).call(Mode.prototype);

	exports.Mode = Mode;
});
(function() {
	ace.require(["ace/mode/scpl"], function(m) {
		if (typeof module == "object" && typeof exports == "object" && module) {
			module.exports = m;
		}
	});
})();
