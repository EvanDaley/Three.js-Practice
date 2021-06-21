import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

let scene;
let camera;
let renderer;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    this.generateColoredBricks()
    const light = createLights();
    scene.add(light);

    const resizer = new Resizer(container, camera, renderer);
  }

  generateColoredBricks() {
    const colors = this.getColors()
    let x = -3;
    let y = 3;
    let i = 0;

    colors.forEach(entry => {
      if (i % 10 == 0) {
        y -= .4
        x = -3
      }

      x += .4
      i += 1

      console.log(entry)
      const cube = createCube(entry, { x, y, z: 1 });
      scene.add(cube)
    })
  }

  getColors() {
    const colors = {
      ALICEBLUE: '#F0F8FF',
      ANTIQUEWHITE: '#FAEBD7',
      AQUA: '#00FFFF',
      AQUAMARINE: '#7FFFD4',
      AZURE: '#F0FFFF',
      BEIGE: '#F5F5DC',
      BISQUE: '#FFE4C4',
      BLACK: '#000000',
      BLANCHEDALMOND: '#FFEBCD',
      BLUE: '#0000FF',
      BLUEVIOLET: '#8A2BE2',
      BROWN: '#A52A2A',
      BURLYWOOD: '#DEB887',
      CADETBLUE: '#5F9EA0',
      CHARTREUSE: '#7FFF00',
      CHOCOLATE: '#D2691E',
      CORAL: '#FF7F50',
      CORNFLOWERBLUE: '#6495ED',
      CORNSILK: '#FFF8DC',
      CRIMSON: '#DC143C',
      CYAN: '#00FFFF',
      DARKBLUE: '#00008B',
      DARKCYAN: '#008B8B',
      DARKGOLDENROD: '#B8860B',
      DARKGRAY: '#A9A9A9',
      DARKGREY: '#A9A9A9',
      DARKGREEN: '#006400',
      DARKKHAKI: '#BDB76B',
      DARKMAGENTA: '#8B008B',
      DARKOLIVEGREEN: '#556B2F',
      DARKORANGE: '#FF8C00',
      DARKORCHID: '#9932CC',
      DARKRED: '#8B0000',
      DARKSALMON: '#E9967A',
      DARKSEAGREEN: '#8FBC8F',
      DARKSLATEBLUE: '#483D8B',
      DARKSLATEGRAY: '#2F4F4F',
      DARKSLATEGREY: '#2F4F4F',
      DARKTURQUOISE: '#00CED1',
      DARKVIOLET: '#9400D3',
      DEEPPINK: '#FF1493',
      DEEPSKYBLUE: '#00BFFF',
      DIMGRAY: '#696969',
      DIMGREY: '#696969',
      DODGERBLUE: '#1E90FF',
      FIREBRICK: '#B22222',
      FLORALWHITE: '#FFFAF0',
      FORESTGREEN: '#228B22',
      FUCHSIA: '#FF00FF',
      GAINSBORO: '#DCDCDC',
      GHOSTWHITE: '#F8F8FF',
      GOLD: '#FFD700',
      GOLDENROD: '#DAA520',
      GRAY: '#808080',
      GREY: '#808080',
      GREEN: '#008000',
      GREENYELLOW: '#ADFF2F',
      HONEYDEW: '#F0FFF0',
      HOTPINK: '#FF69B4',
      INDIANRED: '#CD5C5C',
      INDIGO: '#4B0082',
      IVORY: '#FFFFF0',
      KHAKI: '#F0E68C',
      LAVENDER: '#E6E6FA',
      LAVENDERBLUSH: '#FFF0F5',
      LAWNGREEN: '#7CFC00',
      LEMONCHIFFON: '#FFFACD',
      LIGHTBLUE: '#ADD8E6',
      LIGHTCORAL: '#F08080',
      LIGHTCYAN: '#E0FFFF',
      LIGHTGOLDENRODYELLOW: '#FAFAD2',
      LIGHTGRAY: '#D3D3D3',
      LIGHTGREY: '#D3D3D3',
      LIGHTGREEN: '#90EE90',
      LIGHTPINK: '#FFB6C1',
      LIGHTSALMON: '#FFA07A',
      LIGHTSEAGREEN: '#20B2AA',
      LIGHTSKYBLUE: '#87CEFA',
      LIGHTSLATEGRAY: '#778899',
      LIGHTSLATEGREY: '#778899',
      LIGHTSTEELBLUE: '#B0C4DE',
      LIGHTYELLOW: '#FFFFE0',
      LIME: '#00FF00',
      LIMEGREEN: '#32CD32',
      LINEN: '#FAF0E6',
      MAGENTA: '#FF00FF',
      MAROON: '#800000',
      MEDIUMAQUAMARINE: '#66CDAA',
      MEDIUMBLUE: '#0000CD',
      MEDIUMORCHID: '#BA55D3',
      MEDIUMPURPLE: '#9370DB',
      MEDIUMSEAGREEN: '#3CB371',
      MEDIUMSLATEBLUE: '#7B68EE',
      MEDIUMSPRINGGREEN: '#00FA9A',
      MEDIUMTURQUOISE: '#48D1CC',
      MEDIUMVIOLETRED: '#C71585',
      MIDNIGHTBLUE: '#191970',
      MINTCREAM: '#F5FFFA',
      MISTYROSE: '#FFE4E1',
      MOCCASIN: '#FFE4B5',
      NAVAJOWHITE: '#FFDEAD',
      NAVY: '#000080',
      OLDLACE: '#FDF5E6',
      OLIVE: '#808000',
      OLIVEDRAB: '#6B8E23',
      ORANGE: '#FFA500',
      ORANGERED: '#FF4500',
      ORCHID: '#DA70D6',
      PALEGOLDENROD: '#EEE8AA',
      PALEGREEN: '#98FB98',
      PALETURQUOISE: '#AFEEEE',
      PALEVIOLETRED: '#DB7093',
      PAPAYAWHIP: '#FFEFD5',
      PEACHPUFF: '#FFDAB9',
      PERU: '#CD853F',
      PINK: '#FFC0CB',
      PLUM: '#DDA0DD',
      POWDERBLUE: '#B0E0E6',
      PURPLE: '#800080',
      REBECCAPURPLE: '#663399',
      RED: '#FF0000',
      ROSYBROWN: '#BC8F8F',
      ROYALBLUE: '#4169E1',
      SADDLEBROWN: '#8B4513',
      SALMON: '#FA8072',
      SANDYBROWN: '#F4A460',
      SEAGREEN: '#2E8B57',
      SEASHELL: '#FFF5EE',
      SIENNA: '#A0522D',
      SILVER: '#C0C0C0',
      SKYBLUE: '#87CEEB',
      SLATEBLUE: '#6A5ACD',
      SLATEGRAY: '#708090',
      SLATEGREY: '#708090',
      SNOW: '#FFFAFA',
      SPRINGGREEN: '#00FF7F',
      STEELBLUE: '#4682B4',
      TAN: '#D2B48C',
      TEAL: '#008080',
      THISTLE: '#D8BFD8',
      TOMATO: '#FF6347',
      TURQUOISE: '#40E0D0',
      VIOLET: '#EE82EE',
      WHEAT: '#F5DEB3',
      WHITE: '#FFFFFF',
      WHITESMOKE: '#F5F5F5',
      YELLOW: '#FFFF00',
      YELLOWGREEN: '#9ACD32'
    }

    const values = Object.values(colors)
    return this.sortColors(values)
  }

  colorDistance(color1, color2) {
    // This is actually the square of the distance but
    // this doesn't matter for sorting.
    var result = 0;
    for (var i = 0; i < color1.length; i++)
      result += (color1[i] - color2[i]) * (color1[i] - color2[i]);
    return result;
  }

  sortColors(colors) {
    // Calculate distance between each color
    var distances = [];
    for (var i = 0; i < colors.length; i++) {
        distances[i] = [];
        for (var j = 0; j < i; j++)
            distances.push([colors[i], colors[j], this.colorDistance(colors[i], colors[j])]);
    }
    distances.sort(function(a, b) {
        return a[2] - b[2];
    });

    // Put each color into separate cluster initially
    var colorToCluster = {};
    for (var i = 0; i < colors.length; i++)
        colorToCluster[colors[i]] = [colors[i]];

    // Merge clusters, starting with lowest distances
    var lastCluster;
    for (var i = 0; i < distances.length; i++) {
        var color1 = distances[i][0];
        var color2 = distances[i][1];
        var cluster1 = colorToCluster[color1];
        var cluster2 = colorToCluster[color2];
        if (!cluster1 || !cluster2 || cluster1 == cluster2)
            continue;

        // Make sure color1 is at the end of its cluster and
        // color2 at the beginning.
        if (color1 != cluster1[cluster1.length - 1])
            cluster1.reverse();
        if (color2 != cluster2[0])
            cluster2.reverse();

        // Merge cluster2 into cluster1
        cluster1.push.apply(cluster1, cluster2);
        delete colorToCluster[color1];
        delete colorToCluster[color2];
        colorToCluster[cluster1[0]] = cluster1;
        colorToCluster[cluster1[cluster1.length - 1]] = cluster1;
        lastCluster = cluster1;
    }

    // By now all colors should be in one cluster
    return lastCluster;
}

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
