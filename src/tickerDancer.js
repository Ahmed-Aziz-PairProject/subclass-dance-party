var TickerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.colors = ['red', 'blue', 'green'];
  this.colorState = 0;
  this.$node.addClass('ticker');
  this.step();
};

TickerDancer.prototype = Object.create(Dancer.prototype);
TickerDancer.prototype.constructor = TickerDancer;

TickerDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if (this.colorState + 1 > this.colors.length - 1) {
    this.colorState = 0;
  } else {
    this.colorState++;
  }
  this.$node.css({'border-color': this.colors[this.colorState]});
};