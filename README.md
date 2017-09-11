# Forbid specifying http(s) protocol in URLs. (no-http-protocol)

Use `//my.server.com` instead.

## Install
npm i -D eslint-plugin-no-http-protocol
```js
    "plugins": ["no-http-protocol"],
    "rules": {
        "no-http-protocol/no-http-protocol": ["error"]
    }

```

## Rule Details

This rule aims to keep URLs protocol netural.  The idea is to prevent errors typically when the site is under HTTPS and somewhere there's an HTTP URL left in the code.

Examples of **incorrect** code for this rule:

```js

var invalidVar = 'http://my.server.com';
var invalidVar = 'https://my.server.com';
$.get('http://my.site.com');
$.get('https://my.site.com');
let http = 'http://my.site.com';
let https = 'https://my.site.com';

```

Examples of **correct** code for this rule:

```js

var valid = '//my.server.com';
$.get('//my.site.com');
let https = '//my.site.com';

```

### Options

None

## When Not To Use It

FTP(S) or custom protocols.

## Further Reading

