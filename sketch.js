let state = 0
let slider1Data = 0.5;
let slider2Data = 0.5;
let slider3Data = 0.5;
let slider4Data = 0.5;
let knob1Data = 0.5
let knob2Data = 0.5
let knob3Data = 0.5
let knob4Data = 0.5
function setup() {
  createCanvas(innerWidth, innerHeight);
  setupController()
}

function draw() {
  background(0, (1 - knob1Data) * 250+ 5);
  let size
  switch (state) {
    case 0:
      setCenter(width/2, height/2);
  
      // polarLines( number, radius, distance, [callback] )
      stroke(255, 255, 255, (slider1Data * 100) +25)
      strokeWeight(map(slider1Data, 0, 1, 100, 0.3));
      polarLines(ceil(slider1Data * 500), slider2Data * height * 0.9, 0);
      
      noStroke();
      
      // // polarHexagon( angle, radius, [distance] )
      fill(175, knob3Data * 200, knob4Data * 255, 180);
      polarHexagon(slider3Data * 360, 10 + slider4Data * width * 0.45, 0);
      
      // // polarEllipse( angle, widthRadius, heightRadius, [distance] )
      fill(knob2Data * 255, 248, knob4Data * 200, 160);
      size = (1 - slider3Data) * 75 * slider2Data
      polarEllipses(ceil(slider3Data * 36), size, size, slider2Data * width * 0.2);
      fill(238, knob3Data * 175, knob4Data *170, 140);
      size *= 1.5
      polarEllipses(ceil(slider3Data * 48), size, size, slider2Data * width * 0.4);
      fill(knob2Data *152, 148, knob4Data *100, 120);
      size *= 1.5
      polarEllipses(ceil(slider3Data * 60), size, size, slider2Data * width * 0.6);
      break
    case 1:
      setCenter(width/2, height/2);
      strokeWeight(1)
      noFill();
      
      // polarEllipses( number, widthRadius, heightRadius, distance, [callback] )
      polarEllipses(ceil(slider1Data * 50) + 5, 0, 0, 0, function(...args) {
        stroke(args[0]*10);
        fill(args[0]*knob2Data * 5, args[0]*knob3Data *4, args[0]*knob4Data *3, 30);
          args[2] = args[0]*slider2Data * 20
          args[3] = args[0]*slider3Data * 20
          args[4] = args[0]*map(slider4Data, 0, 1, -10, 10)
          return args;
      });
      break
    case 2:
      setCenter(width/2, height/2);
  
      // polarLines( number, radius, distance, [callback] )
      noFill();
      stroke('#ccc');
      strokeWeight(0.5);
      polarLines(slider1Data * 100, slider3Data * width * 0.2, 0);
      polarLines(slider1Data * 50, slider3Data * width * 0.3, 20);
      
      // polarEllipses( number, widthRadius, heightRadius, distance, [callback] )
      noStroke();
      fill(13, knob3Data * 146, knob4Data*185, 110);
      polarEllipses(floor(slider4Data * 10), 50, 50, 70);
      fill(252, knob3Data*248, knob4Data*200, 120);
      polarEllipses(floor(slider4Data * 5), 36, 36, 32);
      fill(178, knob3Data*216, knob4Data*178, 120);
      polarEllipses(floor(slider4Data * 10), 30, 30, 70);
      polarEllipses(floor(slider4Data * 10), slider3Data*60, 30, slider2Data * 120 + 120);
      fill(238, knob3Data*175, knob4Data*170);
      polarEllipses(floor(slider4Data * 12), 8, 8, slider2Data * 40 + 40);
      fill(252, knob3Data*248, knob4Data*200, 120);
      polarEllipses(floor(slider4Data * 5), 16, 16, slider2Data * 32 + 32);
      fill(13, knob3Data*146, knob4Data*185, 110);
      polarEllipses(floor(slider4Data * 14), slider3Data*100, 50, slider2Data * 155 + 155);
      
      noStroke();
      
      fill(knob2Data*100+155, knob3Data*100, knob4Data*100, 150);
      // polarTriangles( number, radius, distance, [callback] )
      size = slider2Data * 50
      polarTriangles(floor(slider1Data * 10), size, slider3Data * width * 0.25);
      polarTriangles(floor(slider1Data * 20), size * 1.5, 140);
      // polarSquares( number, radius, distance, [callback] )
      size = (1 - slider2Data) * 50
      polarSquares(floor(slider1Data * 24), size, (1 - slider3Data) * width * 0.4);
      polarSquares(4, 4, 120);
      break
    case 3:
      setCenter(width/2, height/2);
      // noFill()
      
      strokeWeight(1);
      
      stroke(255, 100, 0, 200);
      fill(255, 100, 0, 50 * knob2Data)
      // polarPolygon( number, angle, radius, [distance] )
      polarPolygon(3+slider1Data*10, 0, 50 + slider4Data * 100);
      // polarPentagons( number, radius, distance, [callback] )
      polarPentagons(3+slider1Data*6, 60 + slider4Data * 120, 60);
      
      // polarTriangles( number, radius, distance, [callback] )
      stroke(100, 255, 0, 200);
      fill(100, 255, 0, 50 * knob3Data)
      polarTriangles(2+slider2Data *16, 125 + slider4Data * 250, 150);
      
      strokeWeight(1);
      stroke(245, 50, 10, 200);
      fill(245, 50, 10, knob4Data * 50)
      polarTriangles(2+slider3Data*20, 150, 150);
  }
}



/**
 * React to inputs from the control change sliders in the Midi controller
 * @param {Event} e 
 */
function allCC(e) {
  // console.log('controller:', e.controller.number,'value:',  e.value);
  switch (e.controller.number) {
    case 32: {
      knob1Data = e.value
      break;
    }
    case 33: {
      knob2Data = e.value
      break;
    }
    case 34: {
      knob3Data = e.value
      break;
    }
    case 35: {
      knob4Data = e.value
      break;
    }
    case 36: {
      slider1Data = e.value
      break;
    }
    case 37: {
      slider2Data = e.value
      break;
    }
    case 38: {
      slider3Data = e.value
      break;
    }
    case 39: {
      slider4Data = e.value
      break;
    }
  }
}

/**
 * React to inputs from the bottom buttons on the controller
 * @param {Event} e 
 */
function allNoteOn(e) {
  console.log('controller:', e.data[1],'value:',  e.value);
  switch (e.data[1]) {
    case 40: {
      if (e.value) {
        state = 0
      } else {
      }
      break;
    }
    case 41: {
      if (e.value) {
        state = 1
      } else {
      }
      break;
    }
    case 42: {
      if (e.value) {
        state = 2
      } else {
      }
      break;
    }
    case 43: {
      if (e.value) {
        state = 3
      } else {
      }
      break;
    }
  }
}
