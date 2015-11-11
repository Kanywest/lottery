<!DOCTYPE HTML>
<html>
<head>
<title>Lottery</title>
<canvas id="myCanvas" width="680" height="200" style="border:5px solid #09F;"></canvas>
<div>
<button onclick="startGame();return true;">Start Game</button>
<button onclick="showStrokeText();return true;">Order Balls</button>
<button onclick="Clear_myCanvas();return true;">Reset Game</button>
</div>
</div>


<script>
	var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var ball = { 
      radius:35,
      x:0,
      y:150,
      color:"#00FFFF",
	  number:0,
      draw:function(cx, cy, rn, col) {
		this.x = cx;
		this.y = cy;
		this.color=col;
		this.number = rn;
        var arcStartAngle=0;
        var arcEndAngle=2*Math.PI;

        ctx.fillStyle=this.color
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,arcStartAngle,arcEndAngle);
        ctx.fill();
		ctx.fillStyle= "#000000";
		ctx.fillText(this.number, this.x, this.y);
	  }
    
	}
		
	var balls = new Array(6);  // Duplicate balls
	var n; 
	 for (var i = 0 ; i < balls.length ; i++ )  
	{
		do	// Loop to check for duplicate balls
   n = Math.floor(Math.random()*49 + 1);  // Put a random number into the array
   while(balls.indexOf(i) !== -1)
   balls[i] = n;
   
	}
	
	

//ball.draw(200);
//var bonusBall = Math.floor(Math.random()*49 + 1);  // Put a random number into the array
	
	/**var centreX = 50;
	var centreY = 150;
	for( var i = 0; i < 6; i++)
	{
		ball.draw(centreX, centreY, balls[i]);
		centreX += 90;
	}
	ball.draw(centreX, centreY, bonusBall);
	*/
	balls.sort(function(a, b){return a-b});
drawBalls();

function drawBalls()
{
var bonusBall = Math.floor(Math.random()*49 + 1); 
	var centreX = 50;
	var centreY = 150;
	for( var i = 0; i < 6; i++)
	{

		ball.draw(centreX, centreY, balls[i], "#F00");
		centreX += 90;
	}
	ball.draw(centreX, centreY, bonusBall, "yellow");
}



	function Clear_myCanvas() {
 	cxt.clearRect(1, 1, 600, 300);
} 
ctx.font = "15px Arial";
ctx.fillText("THE LOTTERY",230,50);
ctx.fillText("Ball 01",25,100);
ctx.fillText("Ball 02",120,100);
ctx.fillText("Ball 03",210,100);
ctx.fillText("Ball 04",300,100);
ctx.fillText("Ball 05",385,100);
ctx.fillText("Ball 06",470,100);
ctx.fillText("Bonus Ball",560,100);
</script>

</head>
<body on load ="startGame();">

  <canvas id="myCanvas" width="600" height="200">
    Your browser does not support the HTML5 Canvas element.
  </canvas>


</body>
</html>

