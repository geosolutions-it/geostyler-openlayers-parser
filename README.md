# Fork info
This repo has been forked because we needed to add [this](https://github.com/geosolutions-it/geostyler-openlayers-parser/tree/3fb52b86e0636540d54d8d58be03aea97787a74e) fix
We are going to publish the **release** branch on npm GeoSolutions registry


# geostyler-openlayers-parser


[![Greenkeeper badge](https://badges.greenkeeper.io/terrestris/geostyler-openlayers-parser.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/terrestris/geostyler-openlayers-parser.svg?branch=master)](https://travis-ci.org/terrestris/geostyler-openlayers-parser)
[![Coverage Status](https://coveralls.io/repos/github/terrestris/geostyler-openlayers-parser/badge.svg?branch=master)](https://coveralls.io/github/terrestris/geostyler-openlayers-parser?branch=master)

[GeoStyler Style](https://github.com/terrestris/geostyler) Parser implementation for OpenLayers styles

### Issues
Please provide related issues here https://github.com/terrestris/geostyler/issues

### How to use

ES6:
```js
import OpenLayersParser from "geostyler-openlayers-parser";
import OlLayerVector from "ol/layer/Vector";

const pointSimplePoint = {
  name: "OL Style",
  rules: [
    {
      name: "OL Style Rule 0",
      symbolizers: [
        {
          kind: "Mark",
          wellKnownName: "Circle",
          color: "#FF0000",
          radius: 6
        }
      ]
    }
  ]
};

const parser = new OpenLayersParser();
const layer = new OlLayerVector();

parser
  .writeStyle(pointSimplePoint)
  .then(olStyle => layer.setStyle(olStyle))
  .catch(error => console.log(error));
```

Browser:

```js
var pointSimplePoint = {
  name: "OL Style", rules: [{
    name: "OL Style Rule 0",
    symbolizers: [{
      kind: "Mark",
      wellKnownName: "Circle",
      color: "#FF0000",
      radius: 6
    }]
  }]
};
var vectorLayer = new ol.layer.Vector();
var parser = new GeoStylerOpenlayersParser.OlStyleParser(ol);
parser.writeStyle(geostyle)
.then(function(style) {
 vectorLayer.setStyle(style);
});
```
