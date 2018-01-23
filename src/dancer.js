// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<div class="dancer"></div>');
  this.$inner = $('<div class="soul"></div>');
  this.$node.append(this.$inner);
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var positioning = {
    top: top,
    left: left
  };
  this.$node.css(positioning);
};