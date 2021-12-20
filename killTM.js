'use strict'

const fs = require('fs')

const l = fs.readdirSync('./')

l.forEach(f => {
  if (f.match(/™/)) {
      fs.renameSync(f,f.replace(/™/,''))
  }
});
