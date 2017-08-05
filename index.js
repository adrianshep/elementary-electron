// require('cat-picture')
var remote = require('electron').remote
var fs = require('fs')
var picture = require('cat-picture')
var src = picture.src
picture.remove()
var image = require('lightning-image-poly')
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})

// function that will save the current window to a PDF
function save () {
  remote.getCurrentWindow().webContents.printToPDF({
    portrait: true
  }, function (err, data) {
    fs.writeFile('annotation.pdf', data, function (err) {
      if (err) alert('error generating pdf! ' + err.message)
      else alert('pdf saved!')
    })
  })
}

// event listener that will call your save() function when P is pressed
window.addEventListener('keydown', function (e) {
  if (e.keyCode == 80) save()
})
