---
title: Abstract Class
date: 2019-08-01
description: ''
slug: abstract-class
---

```js
abstract class Provider {
    getDataStuff(data: Object): Object {
        return {};
    }
}
```

We had a method on our abstract class, which we didn't want to force everyone to implement. By default, we want to return an empty object. But we wanted implementations of the function to be able to take a `data` parameter and use that to construct the object they return.

Okay, cool.
Execpt that eslint didn't like this. 

Here was our eslint setup (configured to handle typescript as well):
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

When running eslint, it wasn't triggering the `@typescript-eslint/no-unused-vars` error (because typescript knows what to do here, I guess), but we were still getting the regular eslint `no-unused-vars` error. Honestly, I'm not sure why it was even getting triggered, when we had the `overrides` section set to handle .ts files differently. BUT, in any case, this is what we saw:
```bash
/path/to/file/provider.ts
  25:19  error  'data' is defined but never used  no-unused-vars
```

So after some handy-dandy googling and reading [the docs](https://eslint.org/docs/rules/no-unused-vars#argsignorepattern) (What! crazy idea, I know, this is how we solved it. 

We used the fancy ignore pattern for this particular rule: `"argsIgnorePattern": "^_"`. This tells it to ignore any args that start with `_`. (Note: this doesn't apply to variables though! That's a [different config option](https://eslint.org/docs/rules/no-unused-vars#varsignorepattern).)
So we added this to the `"rules"` section of our `.eslintrc`:
```json
// .eslintrc
{
  ...
  "rules": {
  ...,
  "no-unused-vars": ["error", {
      "argsIgnorePattern": "^_"
    }]
  },
  ...
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

My big TODO: figure out why eslint didn't just let the typescript plugin handle this?? I have so much to learn about linters. 🤦🏻‍♀️