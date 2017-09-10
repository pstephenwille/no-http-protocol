/**
 * @fileoverview Forbid specifying http(s) protocol in URLs.
 * @author Stephen Wille
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-http-protocol"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-http-protocol", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "http://my.servier.com",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
