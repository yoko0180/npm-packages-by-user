# Get NPM Packages by user name
Specify a user name to get a Array of NPM package names.

# Example
```js
const npmPkgByUser = require('@yoko0180/npm-packages-by-user')
npmPkgByUser('yoko0180').then(names => {
  console.log(names) // e.g. [ 'foo', 'baa', '@yoko0180/one', '@yoko0180/two']
})

```