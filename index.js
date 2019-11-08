var request = require('request');
const fs = require('fs')
const {
  JSDOM
} = require('jsdom')


module.exports = username => {
  let url = `https://www.npmjs.com/~` + username

  return new Promise((resolve, reject) => {
    request({url}, (err, httpResponse, body) => {
      if (err) throw err
    
      try {
        const dom = new JSDOM(body)
        const h3list = dom.window.document.querySelectorAll('main h3')
        const names = Array.from(h3list).map( h3 => h3.textContent.trim() )
        resolve(names)
      } catch (e) {
        reject(e)
      } 
    })
  })
}
