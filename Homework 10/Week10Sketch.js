
var x=0
var y=0
var movementx=10
var movementy=7

var size = 22;
var count = 0;
var sizeDirection = 2;

function setup()
            {
                createCanvas(700,700);
            }
            function draw()
            {
                background(200);
                strokeWeight(3.5)
                // FACE
                fill(255, 223, 217);
                circle(x,350,500);
                //GLASSES
                fill(0);
                rect(x,275,110,75);
                fill(255,223,217);
                rect(210,281,90,60);
                fill(0);
                rect(400,275,110,75);
                fill(255,223,217);
                rect(410,281,90,60);
                fill(0);
                rect(300,305,100,10);
                //EYES
                fill(255, 255, 255);
                ellipse(255,310,65,45)
                fill(84, 192, 255);
                circle(255,310,40);
                fill(0);
                circle(255,310,15);
                fill(255, 255, 255);
                ellipse(455,y,65,45)
                fill(84, 192, 255);
                circle(455,310,40);
                fill(0);
                circle(455,310,15);
                //HAIR
                fill(71, 38, 6)
                circle(150,150,200)
                fill(71, 38, 6)
                circle(x,y,200)
                fill(71, 38, 6)
                circle(515,150,200)
                fill(71, 38, 6)
                circle(420,100,150)
                fill(71, 38, 6)
                circle(240,y,150)
                //NOSE
                fill(255, 223, 217)
                triangle(450, 400, 325, 350, 345, 400);
                //MOUTH
                line(325, 500, 400, 500);
                line(400,500,450,471)
                line(325, 500, 280, 471);
                //NOSTRILS
                point(350,397)
                point(400,397)
                //TEXT
                fill(0)
                textSize(size)
                text('-Joshua Johnson', 400, 650);
                textSize(20)
                text('This does not look like me but I tried!', 15,650 )

                fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    };
                //MOVEMENT

                //Movement X
                if(x >= 700)
                    {
                       movementx*=-1;
                    }

                     x += movementx;
                if(x <= 0)
                {
                    movementx *=-1;
                }
                x +=movementx;
                
                //Movement Y
              if(y >= 700)
              {
                movementy*=-1;
              }
              y +=movementy;
              if(y <= 0)
              {
                movementy *=-1;
              }

            }