// require('cat-picture')
var remote = require('electron').remote
var fs = require('fs')
var picture = require('cat-picture')
var src = picture.src
picture.remove()
var image = require('lightning-image-poly')
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})
