---
title: Hack that Linter
date: 2019-08-01
description: "When Typescript and linters don't play nice."
slug: hack-that-linter
tags: ["linter", "eslint", "tslint", "typescript"]
---

This story starts out in a repo like many others...it was born a lowly ES6 application, and wanted to grow up to be a Typescript app just like all the cool kids. So, like most other engineers that enjoy converting their applications to new versions of JavaScript every 12 months, we started converting this baby to Typescript. 

A couple months after some of the conversion, we finally setup our existing `eslint` file to use the [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint), and of course see some lint errors in our Typescript. Most of them were pretty easy to understand and fix. 

However, this one was strange:

```js
abstract class Provider {
    // The following line was complaining about "unused-vars"
    getDataStuff(data: Object): Object {
        return {};
    }
}
```

We had a method on our abstract class, which we didn't want to force everyone to implement. By default, we want to return an empty object. But we wanted implementations of the function to be able to take a `data` parameter and use that to construct the object they return.

Okay, cool.
Execpt that eslint didn't like this. 

Here was our eslint setup:
```json
// .eslintrc
{
  ...
  "plugins": ["react", "jest", "@typescript-eslint"],
  "parser": "@typescript-eslint/parser",
  ...
  "rules": {
  ...
    
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/no-unused-vars": [
          2, { "args": "none" }
        ]
      }
    }
  ]
}
```

Now, it wasn't triggering the `@typescript-eslint/no-unused-vars` error, but we were still getting the regular eslint `no-unused-vars` error:

So after some handy-dandy googling and reading [the docs](https://eslint.org/docs/rules/no-unused-vars#argsignorepattern) (such a crazy idea, I know), this is how we solved it. Or well, worked around it really.

We used the fancy ignore pattern for this particular rule: `"argsIgnorePattern": "^_"`. This tells it to ignore any args that start with `_`. (Note: this doesn't apply to variables though! That's a [different config option](https://eslint.org/docs/rules/no-unused-vars#varsignorepattern).)

So we added this to the `"rules"` section of our `.eslintrc`:
```json
// .eslintrc
{
  ...
  "rules": {
    "no-unused-vars": ["error", {
        "argsIgnorePattern": "^_"
      }]
    },
    ...
  }
}
```

And updated our code to make use of this underscore hack:
```js
abstract class Provider {
    getDataStuff(_data: Object): Object {
        return {};
    }
}
```
And voilà! It works. 

Ideas if I had more time and motivation to learn about linters:
* Dig into why eslint is linting the .ts files in the first place
* Maybe put in a PR somewhere fixing this issue!