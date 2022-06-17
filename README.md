## UI Utility/Comonent Library
A dynamic Uitity/Component library developed with React/Typescript distributing both CommonJS and ESM. Components are tested with the JEST testing framework and documented with an interactive Storybook server. This repo is a WIP and is not stable or production ready at this stage.

- React
- React-dom
- @types
- TypeScript
- Prettier
- Storybook
- JEST
- Syntatically Awesome StyleSheets
    - Sass was the chosen pre-processor for numerous reasons, but mainly the syntax, nesting, and variable capabilities. Structure and best practices will be an area of focus in future development of this library.
- Cascading StyleSheets 
    - Auto-generated with the script `sass --watch input.sass : output.css`.
- Package Minification

## Scripts
```
build:
```
```
test:
```
```
relase:
```
```
storybook:
```

## Publishing & Consumption

## Contribution
### Create a Branch:
```
git checkout -b { utility || component } / { change }
```

### Make a Commit:
- ` Feat: ` for adding net new (or fully redesigned) features into the codebase
- ` Fix: ` for bug fixes, refactors, and optimizations to the existing codebase
- ` Chore: ` for making minor changes to the casebase (i.e. versioning, migrations, etc.)
- ` Misc: ` for everything else -- last resort tag
Use ` --no-verify ` to skip linting ONLY if needed.
