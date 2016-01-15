view CanvasMation {
  <canvas />

  on.mount(() => {
    var c = view.element('canvas'),
    ctx = c.getContext('2d');

    c.width = window.innerWidth;
    c.height = window.innerHeight;


    var w = c.width, h = c.height,
        cx = Math.floor(w * 0.5),
        cy = Math.floor(h * 0.5);

    var clock = 0.0,
        clockSpeed = 0.1,
        hexControl = 0,
        hexIncrement = 0.1,
        sizeControl = 0,
        sizeIncrement = 1.05,
        rotateControl = 0,
        rotateIncrement = 5,
        startSize = 20,
        stopSize = 1500,
        hexThikness = 1;

    var u = 0.0;

    var startColor = {r:0, g:0, b:0};  // red
    var endColor   = {r:255, g:255, b:255};  // dark turquoise

    var iteration = 0;

    function loop() {
      clock += clockSpeed;
      requestAnimationFrame(loop);
      draw();
    }

    function draw() {
      if(clock >= hexControl){
        if((startSize + sizeControl) <= stopSize){
          drawHexagon(cx, cy, startSize + sizeControl, hexThikness);
        }

        startSize = startSize * sizeIncrement;
      	rotateControl = rotateIncrement;
        hexControl += hexIncrement;
      }
    }

    function loopColor(){
        drawHexagon(cx, cy, startSize + sizeControl, hexThikness);

        if(iteration > 50){
          iteration = 0;
          startSize = startSize;
          rotateControl = 0;
          hexControl = 0;
          startColor = {r:randomIntFromInterval(0,255), g:randomIntFromInterval(0,255), b:randomIntFromInterval(0,255)};
          endColor = {r:randomIntFromInterval(0,255), g:randomIntFromInterval(0,255), b:randomIntFromInterval(0,255)};
        }else{
          iteration++;
          startSize = startSize * sizeIncrement;
      	rotateControl = rotateIncrement;
        hexControl += hexIncrement;
        }

        requestAnimationFrame(loopColor);
    }

    function drawOnce(){
      for(var i = 0; i < 50; i++){

      }
    }

    function drawHexagon(x , y, size, thikness){

      var s = size;
      var h = Math.sqrt(3) * s;
      var d = 2 * s;

      var p = [
        [x - s / 2, y - h / 2],
        [x + s / 2, y - h / 2],
        [x + d / 2, y],
        [x + (s / 2), y + (h / 2)],
        [x - s / 2, y + h / 2],
        [x - d / 2, y]
      ];

      ctx.translate(cx, cy);
      ctx.rotate(-rotateControl * Math.PI/180);
      ctx.translate(-cx, -cy);

      ctx.beginPath();
      ctx.moveTo(p[0][0], p[0][1]);
      ctx.lineWidth = thikness;
      p.forEach(function(coord) {
        ctx.lineTo(coord[0], coord[1]);
      });
      ctx.lineTo(p[0][0], p[0][1]);
      ctx.strokeStyle = getColorStep(startColor, endColor, 1500);
      ctx.stroke();
    }

    function getColorStep(start, end, duration){
      var interval = 50;
      var steps = duration/interval;
      var step_u = 1.0/steps;

      var r = parseInt(lerp(start.r, end.r, u));
      var g = parseInt(lerp(start.g, end.g, u));
      var b = parseInt(lerp(start.b, end.b, u));
      var colorname = 'rgb('+r+','+g+','+b+')';
      u += step_u;

      return colorname;
    }

    function lerp(a,b,u) {
      return (1-u) * a + u * b;
    };

    function randomIntFromInterval(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    setTimeout(function(){
      //loop();
      drawOnce();

      loopColor();
    },1000);



  })
}
