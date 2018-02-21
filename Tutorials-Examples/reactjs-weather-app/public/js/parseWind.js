var parseWind = function(deg){
  var angle = deg;
  var wind = {
    direction: "",
    compassClass: ""
  };

  if(angle >= 0 && angle <= 22.5 || angle > 337.5 && angle <= 360){
    // North
    wind.direction = "NORTH";
    wind.compassClass = "wi wi-wind wi-from-n";
  } else if(angle > 22.5 && angle <= 67.5){
    // North East
    wind.direction = "NORTH EAST";
    wind.compassClass = "wi wi-wind wi-from-ne";
  } else if(angle > 67.5 && angle <= 112.5){
    // East
    wind.direction = "EAST";
    wind.compassClass = "wi wi-wind wi-from-e";
  } else if(angle > 112.5 && angle <= 157.5){
    // South East
    wind.direction = "SOUTH EAST";
    wind.compassClass = "wi wi-wind wi-from-se";
  } else if(angle > 157.5 && angle <= 202.5){
    // South
    wind.direction = "SOUTH";
    wind.compassClass = "wi wi-wind wi-from-s";
  } else if(angle > 202.5 && angle <= 247.5){
    // South West
    wind.direction = "SOUTH WEST";
    wind.compassClass = "wi wi-wind wi-from-sw";
  } else if(angle > 247.5 && angle <= 292.5){
    // West
    wind.direction = "WEST";
    wind.compassClass = "wi wi-wind wi-from-w";
  } else if(angle > 292.5 && angle <= 337.5){
    // North West
    wind.direction = "NORTH WEST";
    wind.compassClass = "wi wi-wind wi-from-nw";
  }

  return wind;
};
