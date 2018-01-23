var lineUp = function(dancers) {
  var topValue = '50%';  
  var leftIncrement = Math.min(100 / (dancers.length + 1));
  var leftValue = leftIncrement;

  if ( window.dancersLinedUp ) {
    dancers.forEach(function(dancer) {
      dancer.setPosition(dancer.top, dancer.left);
    });
    window.dancersLined = false;
    
  } else {
    dancers.forEach(function(dancer) {
      console.log(`Left Spacing = ${leftValue}`);
      dancer.setPosition(topValue, `${leftValue}%`);
      leftValue += leftIncrement;
    });
    window.dancersLinedUp = true;
  }
  
  

  
  // For each object, push to the array
  //    keep track of where they were before the move
  //    stop any positional movement for each object


  // Display array in the center of the screen or to the left side

};