require('../Common');

var Enemy = require('./types/Enemy');

function LandEnemy(x, y, direction, sprite, leftAnimations, rightAnimations, speed) {
	Enemy.call(this, x, y, direction, sprite, leftAnimations, rightAnimations, speed);

	this.sprite.body.gravity.y = 300;
};

LandEnemy.prototype = {
	update: function() {
		this.handleCollisions();

		this.changeDirectionAtCliff();
		this.moveLaterally();
	},

	changeDirectionAtCliff: function() {
		if((this.currentDirection == 'left' && this.sprite.checkForCliff('left', level.movingPlatforms))
				|| (this.currentDirection == 'right' && this.sprite.checkForCliff('right', level.movingPlatforms))) {
			this.changeDirection();
		}
	}
};

$.extend(LandEnemy.prototype, Enemy.prototype);

// If I wanted to use Object.create instead of extend, I'd do:
// LandDog.prototype = Object.create(Enemy.prototype);
// LandDog.prototype.update = function() {...}
// LandDog.prototype.changeDirectionAtCliff = function() {...}

module.exports = LandEnemy;