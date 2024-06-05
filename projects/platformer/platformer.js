$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

     for (let i = 100; i < canvas.width; i += 100) {
       createPlatform(i, canvas.height, -1, -canvas.height);
     }
     for (let i = 100; i < canvas.height; i += 100) {
       createPlatform(canvas.width, i, -canvas.width, -1);
     }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(200,680,80,20)
    createPlatform(350,570,80,20)
    createPlatform(550,460,80,20)
    createPlatform(1325,300,80,20)
    createPlatform(850,500,80,20)
    createPlatform(1090,420,300,20)
    createPlatform(900,190,310,20)
    createPlatform(750,190,50,20)
    createPlatform(600,190,50,20)
    createPlatform(195,290,310,20)
    createPlatform(140,160,50,20)
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable('heart', 570, 400, 0.1, 1)
    createCollectable('heart', 1225, 345, 0.1, 1)
    createCollectable('heart', 145, 100, 0.1, 1)
    createCollectable('heart', 605, 100, 0.1, 1)
    createCollectable('heart', 755, 100, 0.1, 1)
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon('bottom', 640, 1500, 30, 30)
    createCannon('top', 410, 1500, 30, 30)
    createCannon('top', 1110, 1500, 30, 30)

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
