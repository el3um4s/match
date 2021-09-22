# @el3um4s/match
Alternative to JavaScript’s switch statement with a functional twist

Based on [Alternative to JavaScript’s switch statement with a functional twist](https://codeburst.io/alternative-to-javascripts-switch-statement-with-a-functional-twist-3f572787ba1c)

NPM: [@el3um4s/match](https://www.npmjs.com/package/@el3um4s/match)
### Install and use the package

To use the package in a project:

```bash
npm i @el3um4s/match
```

and then in a file:

```ts
import match from "@el3um4s/match";

const handleShape = (shape, w) => area(shape,w);

function area (type = "Circle", width = 2) {
  return match(type)
          .on(type => type.toLowerCase() === "circle", () => {
              return Math.PI * (width / 2) ** 2;
            })
          .on(type => type.toLowerCase() === "square", () => width ** 2)
          .otherwise(() => 0);
};

handleShape("Square", 3);
```
