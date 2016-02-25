var NUMBER_OF_ROWS = 7;
var NUMBER_OF_COLS = 12;
var BLOCK_SIZE;
var BLOCK_COLOR_1 = "#333333";
var BLOCK_COLOR_2 = "#B2B2B2";

function draw()
{
   

   var canvas = document.getElementById('gameBoard');
   var canvasHdr = document.getElementById('topHeader');
   //var canvasPlayers = document.getElementById('gamePlayers');
   
   var viewportWidth = window.innerWidth;
   var viewportHeight = window.innerHeight;
   
   var canvasWidth = viewportWidth * 0.5;
   var canvasHeight = canvasWidth / 2;
   
   canvas.style.position = "absolute";
   canvas.setAttribute("width", canvasWidth);
   canvas.setAttribute("height", canvasHeight);
   canvas.style.top = (viewportHeight - canvasHeight) / 2.3 + "px";
   canvas.style.left = (viewportWidth - canvasWidth) / 2 + "px";
   
   canvasHdr.style.position = "absolute";
   canvasHdr.setAttribute("width", canvasWidth);
   canvasHdr.setAttribute("height", canvasHeight/4);
   canvasHdr.style.top = (viewportHeight - canvasHeight) / 4 + "px";
   canvasHdr.style.left = (viewportWidth - canvasWidth) / 2 + "px";
   
   //canvasPlayers.style.position = "absolute";
   //canvasPlayers.setAttribute("width", canvasWidth/8);
   //canvasPlayers.setAttribute("height", canvasHeight/4);
   //canvasPlayers.style.top = (viewportHeight - canvasHeight) * 1.75 + "px";
   //canvasPlayers.style.left = (viewportWidth - canvasWidth) / 2 + "px";
   
    if(canvasHdr.getContext)
    {
        ctxHdr = canvasHdr.getContext('2d');
        // Calculate the block size
        BLOCK_SIZE = canvas.height / NUMBER_OF_ROWS
		// Draw the header
        drawHeader();
    }
	
    /* if(canvasPlayers.getContext)
    {
        ctxPlayers = canvasPlayers.getContext('2d');
        // Calculate the block size
        BLOCK_SIZE = canvas.height / NUMBER_OF_ROWS
		// Draw the players section
        drawPlayersSection();
    } */
	
    if(canvas.getContext)
    {
        ctx = canvas.getContext('2d');
        // Calculate the block size
        BLOCK_SIZE = canvas.height / NUMBER_OF_ROWS;
		// Draw the board
        drawBoard();
    }
}

function drawHeader()
{  
	    for(iColCounter = 1; iColCounter < NUMBER_OF_COLS; iColCounter++)
		{
			for(iBlockCounter = 0; iBlockCounter < 1; iBlockCounter++)
			{
				var vText = iColCounter;
				ctxHdr.font = "30px Arial";
				ctxHdr.fillText(vText, iColCounter * BLOCK_SIZE, BLOCK_SIZE);
				ctxHdr.strokeRect(iColCounter * BLOCK_SIZE, iBlockCounter * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
				ctxHdr.stroke(); 
			}
				
		}  
}

function drawPlayersSection()
{  
	    for(iColCounter = 0; iColCounter < 4; iColCounter++)
		{
			for(iBlockCounter = 0; iBlockCounter < 1; iBlockCounter++)
			{
				var vText = '';
				ctxPlayers.font = "30px Arial";
				var PLAYER_BLOCK_SIZE = BLOCK_SIZE * 1.6;
				ctxPlayers.fillText(vText, iColCounter * PLAYER_BLOCK_SIZE, PLAYER_BLOCK_SIZE);
				ctxPlayers.strokeRect(iColCounter * PLAYER_BLOCK_SIZE, iBlockCounter * PLAYER_BLOCK_SIZE, PLAYER_BLOCK_SIZE, PLAYER_BLOCK_SIZE);
				ctxPlayers.stroke(); 
			}
				
		}  
}

function drawBoard()
{  
    for(iColCounter = 0; iColCounter < NUMBER_OF_COLS; iColCounter++)
    {
        drawColumn(iColCounter);
    }  
    // Draw outline around entire board
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, NUMBER_OF_COLS * BLOCK_SIZE, NUMBER_OF_ROWS * BLOCK_SIZE);
    // draw a line
    //ctx.moveTo(0,0);
    //ctx.lineTo(200,100);
    //ctx.stroke();
    // draw a circle
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();

}
function drawColumn(iColCounter)
{
    for(iBlockCounter = 0; iBlockCounter < NUMBER_OF_ROWS; iBlockCounter++)
    {
        drawBlock(iColCounter, iBlockCounter);
    }
}
function drawBlock(iColCounter, iBlockCounter)
{  
    
    if (iColCounter == 0 ) {
		var blockText;
		switch (iBlockCounter) {
			case 1:
				blockText = "A";
				break;
			case 2:
				blockText = "B";
				break;
			case 3:
				blockText = "C";
				break;
			case 4:
				blockText = "D";
				break;
			case 5:
				blockText = "E";
				break;
			case 6:
				blockText = "F";
				break;
			default:
				blockText = "G";
		} 
		ctx.font = "30px Arial";
		if (iBlockCounter == 0) {
			ctx.fillText(blockText,0, 7 * BLOCK_SIZE);
		} else {
			ctx.fillText(blockText,0, iBlockCounter * BLOCK_SIZE);
		}
	} else {
		ctx.fillStyle = getBlockColor(iColCounter, iBlockCounter);
		ctx.fillRect(iColCounter * BLOCK_SIZE, iBlockCounter * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE); 
    }
	ctx.strokeRect(iColCounter * BLOCK_SIZE, iBlockCounter * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    ctx.stroke();  
}

function getBlockColor(iColCounter, iBlockCounter)
{
    var cStartColor;
    // Alternate the block color
    if(iColCounter % 2)
        cStartColor = (iBlockCounter % 2?BLOCK_COLOR_1:BLOCK_COLOR_2);
    else
        cStartColor = (iBlockCounter % 2?BLOCK_COLOR_2:BLOCK_COLOR_1);
    return cStartColor;
}

function cnvs_getCoordinates(e)
{
x=e.clientX;
y=e.clientY;
document.getElementById("xycoordinates").innerHTML="Coordinates: (" + x + "," + y + ")";
}

function cnvs_clearCoordinates()
{
document.getElementById("xycoordinates").innerHTML="";
}

window.onload = window.onresize = draw;

