var elapsedTime = 0;
var frameCount = 0;
var lastTime = 0;
var fps = 0;

function drawScene() {
   var now = new Date().getTime();
   frameCount++;
   elapsedTime += (now - lastTime);
   lastTime = now;

   if(elapsedTime >= 1000) {
       fps = frameCount;
       frameCount = 0;
       elapsedTime -= 1000;
       document.getElementById('fps').innerHTML = "FPS: " + fps;
   }
}
lastTime = new Date().getTime();
setInterval(drawScene,1);