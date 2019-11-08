const main = require('./index')
main('yoko0180').then(names => {
  console.log('yoko0180=================')
  console.log(names)
}).then( () => {
  main('jeffcarp').then(names => {
    console.log('jeffcarp=================')
    console.log(names)
  })
})