"use strict";
/*
* To try in Ace editor, copy and paste into the mode creator
* here : http://ace.c9.io/tool/mode_creator.html
*/
Object.defineProperty(exports, "__esModule", { value: true });
const ace = require("ace-builds");
/*
* To try in Ace editor, copy and paste into the mode creator
* here : http://ace.c9.io/tool/mode_creator.html
*/
ace.define("ace/mode/shortcutslang", function (require, exports, module) {
    "use strict";
    const oop = require("../lib/oop");
    const TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    /* --------------------- START ----------------------------- */
    const ScplHighlightRules = function () {
        this.$rules = {
            start: [
                {
                    token: "punctuation",
                    regex: "(\\\")",
                    push: "string__1"
                },
                {
                    token: "punctuation",
                    regex: "(^\\s*\\|\\s*)",
                    push: "barlist__1"
                },
                {
                    token: "variable",
                    regex: "(:(\\b[A-Za-z0-9@._]+))"
                },
                {
                    token: "keyword",
                    regex: "(\\b[A-Za-z0-9@._]+)"
                },
                {
                    token: "comment",
                    regex: "(/\\*)",
                    push: "multi_line_comment__1"
                },
                {
                    token: "comment",
                    regex: "(--\\[)",
                    push: "multi_line_comment__2"
                },
                {
                    token: "comment",
                    regex: "(--.*)"
                },
                {
                    token: "comment",
                    regex: "(#.*)"
                },
                {
                    token: "comment",
                    regex: "(//.*)"
                },
                {
                    token: "punctuation",
                    regex: "(\\()",
                    push: "action__1"
                },
                {
                    token: "punctuation",
                    regex: "(\\[)",
                    push: "action__2"
                },
                {
                    token: "punctuation",
                    regex: "({)",
                    push: "action__3"
                },
                {
                    token: "punctuation",
                    regex: "([\"\\:,;^\\->=])"
                },
                {
                    token: "invalid",
                    regex: "([^\\s])"
                },
                {
                    defaultToken: "text",
                }
            ],
            action__1: [
                {
                    token: "punctuation",
                    regex: "(\\))",
                    next: "pop"
                },
                {
                    token: "punctuation",
                    regex: "(\\\")",
                    push: "string__1"
                },
                {
                    token: "punctuation",
                    regex: "(^\\s*\\|\\s*)",
                    push: "barlist__1"
                },
                {
                    token: "variable",
                    regex: "(:(\\b[A-Za-z0-9@._]+))"
                },
                {
                    token: "keyword",
                    regex: "(\\b[A-Za-z0-9@._]+)"
                },
                {
                    token: "comment",
                    regex: "(/\\*)",
                    push: "multi_line_comment__1"
                },
                {
                    token: "comment",
                    regex: "(--\\[)",
                    push: "multi_line_comment__2"
                },
                {
                    token: "comment",
                    regex: "(--.*)"
                },
                {
                    token: "comment",
                    regex: "(#.*)"
                },
                {
                    token: "comment",
                    regex: "(//.*)"
                },
                {
                    token: "punctuation",
                    regex: "(\\()",
                    push: "action__1"
                },
                {
                    token: "punctuation",
                    regex: "(\\[)",
                    push: "action__2"
                },
                {
                    token: "punctuation",
                    regex: "({)",
                    push: "action__3"
                },
                {
                    token: "punctuation",
                    regex: "([\"\\:,;^\\->=])"
                },
                {
                    token: "invalid",
                    regex: "([^\\s])"
                },
                {
                    defaultToken: "text",
                }
            ],
            action__2: [
                {
                    token: "punctuation",
                    regex: "(\\])",
                    next: "pop"
                },
                {
                    token: "punctuation",
                    regex: "(\\\")",
                    push: "string__1"
                },
                {
                    token: "punctuation",
                    regex: "(^\\s*\\|\\s*)",
                    push: "barlist__1"
                },
                {
                    token: "variable",
                    regex: "(:(\\b[A-Za-z0-9@._]+))"
                },
                {
                    token: "keyword",
                    regex: "(\\b[A-Za-z0-9@._]+)"
                },
                {
                    token: "comment",
                    regex: "(/\\*)",
                    push: "multi_line_comment__1"
                },
                {
                    token: "comment",
                    regex: "(--\\[)",
                    push: "multi_line_comment__2"
                },
                {
                    token: "comment",
                    regex: "(--.*)"
                },
                {
                    token: "comment",
                    regex: "(#.*)"
                },
                {
                    token: "comment",
                    regex: "(//.*)"
                },
                {
                    token: "punctuation",
                    regex: "(\\()",
                    push: "action__1"
                },
                {
                    token: "punctuation",
                    regex: "(\\[)",
                    push: "action__2"
                },
                {
                    token: "punctuation",
                    regex: "({)",
                    push: "action__3"
                },
                {
                    token: "punctuation",
                    regex: "([\"\\:,;^\\->=])"
                },
                {
                    token: "invalid",
                    regex: "([^\\s])"
                },
                {
                    defaultToken: "text",
                }
            ],
            action__3: [
                {
                    token: "punctuation",
                    regex: "(})",
                    next: "pop"
                },
                {
                    token: "punctuation",
                    regex: "(\\\")",
                    push: "string__1"
                },
                {
                    token: "punctuation",
                    regex: "(^\\s*\\|\\s*)",
                    push: "barlist__1"
                },
                {
                    token: "variable",
                    regex: "(:(\\b[A-Za-z0-9@._]+))"
                },
                {
                    token: "keyword",
                    regex: "(\\b[A-Za-z0-9@._]+)"
                },
                {
                    token: "comment",
                    regex: "(/\\*)",
                    push: "multi_line_comment__1"
                },
                {
                    token: "comment",
                    regex: "(--\\[)",
                    push: "multi_line_comment__2"
                },
                {
                    token: "comment",
                    regex: "(--.*)"
                },
                {
                    token: "comment",
                    regex: "(#.*)"
                },
                {
                    token: "comment",
                    regex: "(//.*)"
                },
                {
                    token: "punctuation",
                    regex: "(\\()",
                    push: "action__1"
                },
                {
                    token: "punctuation",
                    regex: "(\\[)",
                    push: "action__2"
                },
                {
                    token: "punctuation",
                    regex: "({)",
                    push: "action__3"
                },
                {
                    token: "punctuation",
                    regex: "([\"\\:,;^\\->=])"
                },
                {
                    token: "invalid",
                    regex: "([^\\s])"
                },
                {
                    defaultToken: "text",
                }
            ],
            barlist__1: [
                {
                    token: "punctuation",
                    regex: "($)",
                    next: "pop"
                },
                {
                    token: "punctuation",
                    regex: "(\\\\[\"'\\\\n])"
                },
                {
                    token: "punctuation",
                    regex: "(\\\\\\()",
                    push: "escape__1"
                },
                {
                    token: "text",
                    regex: "([^\\\\]+)"
                },
                {
                    defaultToken: "text",
                }
            ],
            escape__1: [
                {
                    token: "punctuation",
                    regex: "(\\))",
                    next: "pop"
                },
                {
                    token: "punctuation",
                    regex: "(\\\")",
                    push: "string__1"
                },
                {
                    token: "punctuation",
                    regex: "(^\\s*\\|\\s*)",
                    push: "barlist__1"
                },
                {
                    token: "variable",
                    regex: "(:(\\b[A-Za-z0-9@._]+))"
                },
                {
                    token: "keyword",
                    regex: "(\\b[A-Za-z0-9@._]+)"
                },
                {
                    token: "comment",
                    regex: "(/\\*)",
                    push: "multi_line_comment__1"
                },
                {
                    token: "comment",
                    regex: "(--\\[)",
                    push: "multi_line_comment__2"
                },
                {
                    token: "comment",
                    regex: "(--.*)"
                },
                {
                    token: "comment",
                    regex: "(#.*)"
                },
                {
                    token: "comment",
                    regex: "(//.*)"
                },
                {
                    token: "punctuation",
                    regex: "(\\()",
                    push: "action__1"
                },
                {
                    token: "punctuation",
                    regex: "(\\[)",
                    push: "action__2"
                },
                {
                    token: "punctuation",
                    regex: "({)",
                    push: "action__3"
                },
                {
                    token: "punctuation",
                    regex: "([\"\\:,;^\\->=])"
                },
                {
                    token: "invalid",
                    regex: "([^\\s])"
                },
                {
                    defaultToken: "text",
                }
            ],
            multi_line_comment__1: [
                {
                    token: "comment",
                    regex: "(\\*/)",
                    next: "pop"
                },
                {
                    defaultToken: "comment",
                }
            ],
            multi_line_comment__2: [
                {
                    token: "comment",
                    regex: "(--\\])",
                    next: "pop"
                },
                {
                    defaultToken: "comment",
                }
            ],
            string__1: [
                {
                    token: "punctuation",
                    regex: "(\\\")",
                    next: "pop"
                },
                {
                    token: "punctuation",
                    regex: "(\\\\[\"'\\\\n])"
                },
                {
                    token: "punctuation",
                    regex: "(\\\\\\()",
                    push: "escape__1"
                },
                {
                    token: "text",
                    regex: "([^\"\\\\]+)"
                },
                {
                    defaultToken: "text",
                }
            ]
        };
        this.normalizeRules();
    };
    /* ------------------------ END ------------------------------ */
    oop.inherits(ScplHighlightRules, TextHighlightRules);
    exports.ScplHighlightRules = ScplHighlightRules;
});
