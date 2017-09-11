/**
 * @fileoverview Forbid specifying http(s) protocol in URLs.
 * @author Stephen Wille
 * @contact p.stephenwille@gmail.com
 */
'use strict';

var rule = require('../../../lib/rules/no-http-protocol'),

    RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
var errorMessage = [
    {
        message: 'HTTP(S) is not allowed.  "Use //my.server.com" instead.',
        type: 'Literal',
    }];

var ruleTester = new RuleTester({parserOptions: {ecmaVersion: 2015}});
ruleTester.run('no-http-protocol', rule, {

    valid: [
        {code: `var validVar = '//my.server.com'`},
        {code: `$.get('//my.site.com')`},
        {code: `let http = '//my.site.com'`},
        {code: `let https = '//my.site.com'`},
    ],

    invalid: [
        {
            code: `var invalidVar = 'http://my.server.com'`,
            errors: errorMessage,
        }, {
            code: `var invalidVar = 'https://my.server.com'`,
            errors: errorMessage,
        },
        {
            code: `$.get('http://my.site.com')`,
            errors: errorMessage,
        }, {
            code: `$.get('https://my.site.com')`,
            errors: errorMessage,
        },
        {
            code: `let http = 'http://my.site.com'`,
            errors: errorMessage,
        },
        {
            code: `let https = 'https://my.site.com'`,
            errors: errorMessage,
        },

    ],
});
