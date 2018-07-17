// var stage = new createjs.Stage('gameView');
// var gameView = new createjs.Container();
// stage.addChild(gameView);
// var s = new.createjs.Shape();
// s.graphis.beginFill('#ff0000');
// s.graphis.drawRect(0, 0, 100, 100);
// s.graphis.endFill();

// gameView.addChild(s);
// createjs.Ticker.setFPS(30);
// createjs.Ticker.addEventListener('tick', stage);
var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener('tick', stage);
var gameView = new createjs.Container();
stage.addChild(gameView);

var n = 2;

function addRect() {
  var colors = parseInt(Math.random() * 1000000);
  // var color = `#${colors}`;
  var color = "#" + colors;
  var x = parseInt(Math.random() * n);
  var y = parseInt(Math.random() * n);
  for (var indexX = 0; indexX < n; indexX++) {
    for (var indexY = 0; indexY < n; indexY++) {
      var r = new Rect(n, color);
      gameView.addChild(r);
      r.x = indexX;
      r.y = indexY;
      if (r.x == x && r.y == y) {
        r.setRectType(2);
      }
      r.x = indexX * (400 / n);
      r.y = indexY * (400 / n);
      if (r.getRectType() == 2) {
        // 给type值为2的使用不同的颜色
        var onlyColor = color.substring(0, 3) + "5367";
        r.setColor(onlyColor);
        r.addEventListener('click', function () {
          if (n < 7) {
            ++n;
          }
          gameView.removeAllChildren();
          addRect();
        })
      }
    }
  }
}

addRect();