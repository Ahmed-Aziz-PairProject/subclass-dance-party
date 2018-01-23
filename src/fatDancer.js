var FatDancer = function(top, left, timeBetweenSteps, multiplier) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = 500;
  this.multiplier = multiplier || 2;
  this.embiggened = false; 
  this.step();
};

FatDancer.prototype = Object.create(Dancer.prototype);
FatDancer.prototype.constructor = FatDancer;

FatDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // var oldBorder = this.$node.css(['border-width', 'border-color', 'border-radius']);
  // console.log(oldBorder['border-width']);  

  if ( this.embiggened ) {
    this.$node.css({ 
      'top': this.top + 5,
      'left': this.left + 5,
      'border-color': 'purple',
      'border-width': '10px',
      'border-radius': '10px'
    });
  } else { 
    this.$node.css({
      'top': this.top - 5,
      'left': this.left - 5,
      'border-color': 'purple',
      'border-width': `${10 * this.multiplier}px`,
      'border-radius': `${10 * this.multiplier}px`
    });
  }
  this.embiggened = this.embiggened ? false : true;
  // Increase size to double
  // Decrease size back to original 
};