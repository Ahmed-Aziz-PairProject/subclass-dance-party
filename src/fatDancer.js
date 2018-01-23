var FatDancer = function(top, left, timeBetweenSteps, multiplier) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = 500;
  this.multiplier = 2;
  this.embiggened = false; 
  this.$node.addClass('fat');
  this.$inner = $('<span class="inner"></span>');
  this.$node.append($inner);
  this.$innerDancer = this.$node.children[0];
  this.step();
};

FatDancer.prototype = Object.create(Dancer.prototype);
FatDancer.prototype.constructor = FatDancer;

FatDancer.prototype.step = function() {
  
  // var currentPos = this.$node.css(['top', 'left']);
  // // console.log(currentPos['top'], currentPos['left']);
  // var currentTop = currentPos['top'].split('').slice(0, currentPos['top'].length - 2).join('');
  // var currentLeft = currentPos['left'].split('').slice(0, currentPos['left'].length - 2).join('');
  // console.log(currentTop);
  // console.log(oldBorder['border-width']);  
  
  Dancer.prototype.step.call(this);
  if ( this.embiggened ) {
    this.$inner.css({ 
      'top': this.top + 5,
      'left': this.left + 5,
      'border-color': 'purple',
      'border-width': '10px',
      'border-radius': '10px'
    });
  } else { 
    this.$inner.css({
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