var TickerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.colors = ['red', 'blue', 'green', 'yellow', 'orange'];
  this.colorState = 0;
  this.$inner.addClass('ticker');
  this.$inner.addClass(this.colors[this.colorState]);
  this.$inner.on('click', this.spin.bind(this));
  this.step();
};

TickerDancer.prototype = Object.create(Dancer.prototype);
TickerDancer.prototype.constructor = TickerDancer;

TickerDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.cycle();
};

TickerDancer.prototype.cycle = function() {
  this.$inner.removeClass(this.colors[this.colorState]);
  if (this.colorState + 1 > this.colors.length - 1) {
    this.colorState = 0;
  } else {
    this.colorState++;
  }
  this.$inner.addClass(this.colors[this.colorState]);
};

TickerDancer.prototype.spin = function() {
  this.$inner.addClass('square');
  setTimeout(this.$inner.removeClass.bind(this.$inner, 'square'), 1500);
};