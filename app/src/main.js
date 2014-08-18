define(function(require, exports, module) {
    'use strict';
  // import dependencies
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Modifier = require('famous/core/Modifier');
  var Transform = require('famous/core/Transform');
  var ImageSurface = require('famous/surfaces/ImageSurface');



  var mainContext = Engine.createContext();

  var initialTime = Date.now();

  var text = new Surface({
      size : [200, 200],
      properties : {}
  });

    var stars = new ImageSurface({
      size: [1500, 1500],
      content: 'stars_1.png',
  });

    var stars2 = new ImageSurface({
      size: [1500, 1500],
      content: 'star_2.png',
  });

    var stars3 = new ImageSurface({
      size: [1500, 1500],
      content: 'stars_3.png',
  });

  var centerSpinModifier = new Modifier({
      origin: [0.4, 0.5],
      transform : function(){
          return Transform.rotateZ(.00015 * (Date.now() - initialTime));
      }
  });

  var centerSpinModifier2 = new Modifier({
      origin: [0.5, 0.5],
      transform : function(){
          return Transform.rotateZ(.0001 * (Date.now() - initialTime));
      }
  });

  var centerSpinModifier3 = new Modifier({
      origin: [0.5, 0.5],
      transform : function(){
          return Transform.rotateZ(.00005 * (Date.now() - initialTime));
      }
  });

mainContext.add(centerSpinModifier).add(stars);
mainContext.add(centerSpinModifier2).add(stars2);
mainContext.add(centerSpinModifier3).add(stars3);

});
