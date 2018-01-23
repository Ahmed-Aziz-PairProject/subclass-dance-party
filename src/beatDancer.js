var BeatDancer = function(top, left, timeBetweenSteps) {
  TickerDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = 250;
  // Store original size
  this.$inner.addClass('beat');
  this.isGrowing = false;
  this.growthStage = 0;
  this.growthFactor = 2;
  this.growthMax = 10;
  this.$inner.on('mouseover', this.enlarge.bind(this));
  this.$inner.on('mouseout', this.shrink.bind(this));
  this.step();
};

BeatDancer.prototype = Object.create(TickerDancer.prototype);
BeatDancer.prototype.constructor = BeatDancer;

BeatDancer.prototype.enlarge = function() {
  this.isGrowing = true;
  this.scale();
};

BeatDancer.prototype.shrink = function() {
  this.isGrowing = false;
  this.$inner.css({'transform': `scale(1.0)`});
  this.growthStage = 0;
};

BeatDancer.prototype.scale = function() {
  if ( this.isGrowing ) {
    this.growthStage = Math.min(this.growthStage + 1, this.growthMax);
    this.$inner.css({ 'transform': `scale(${this.growthStage})` });
    setTimeout(this.scale.bind(this), 100);
  }
};