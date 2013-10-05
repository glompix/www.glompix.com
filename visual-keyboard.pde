// Setup the Processing Canvas
void setup() {
    doResize();
    frameRate(30);
}
var _$doc = $(document);
var _$window = $(window);
var _blooms = [];
var _maxBlooms = 10;

// Plant seeds
for (var i = 0; i < _maxBlooms; i++) {
    randomBloom();
}

void mouseClicked() {
    var b = new LightBloom(mouseX, mouseY);
    _blooms.push(b);
    trimBlooms();
}

function randomBloom() {
    var x = Math.random() * _$window.width();
    var y = Math.random() * _$window.height();
    var b = new LightBloom(x, y);
    _blooms.push(b);
    trimBlooms();
}

function trimBlooms() {
    while (_blooms.length > _maxBlooms) {
	_blooms.shift();
    }
}


// Main draw loop
void draw() {
    background(45, 45, 45);
    for(var i = 0; i < _blooms.length; i++) {
	var b = _blooms[i];
	b.draw(frameCount);
    }
}

// Classes
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

function ColorRotator(color, min, max) {
    this.color = color;
    this.delta = new Color(0, 0, 0); // Contains offsets, so may be negative
    this.min = min;
    this.max = max;
    this.step = 1;
}

ColorRotator.prototype.rotate = function rotateColor() {
    if (this.color.r == this.max && this.color.g == this.min && this.color.b == this.min) {
	this.delta.r = 0;
	this.delta.g = this.step;
	this.delta.b = 0;
    }
    else if (this.color.r == this.max && this.color.g == this.max && this.color.b == this.min) {
	this.delta.r = -1 * this.step;
	this.delta.g = 0;
	this.delta.b = 0;
    }
    else if (this.color.r == this.min && this.color.g == this.max && this.color.b == this.min) {
        this.delta.r = 0;
	this.delta.g = 0;
	this.delta.b = this.step;
    }
    else if (this.color.r == this.min && this.color.g == this.max && this.color.b == this.max) {
	this.delta.r = 0;
	this.delta.g = -1 * this.step;
	this.delta.b = 0;
    }
    else if (this.color.r == this.min && this.color.g == this.min && this.color.b == this.max) {
	this.delta.r = this.step;
	this.delta.g = 0;
	this.delta.b = 0;
    }
    else if (this.color.r == this.max && this.color.g == this.min && this.color.b == this.max) {
	this.delta.r = 0;
	this.delta.g = 0;
	this.delta.b = -1 * this.step;
    }
    
    this.color.r += this.delta.r;
    this.color.g += this.delta.g;
    this.color.b += this.delta.b;
    
    return this.color;
}

function LightBloom(x, y) {
    this.x = x;
    this.y = y;
    
    var rand = Math.floor(Math.random() * 3);
    var r = 100;
    var g = 100;
    var b = 100;
    if (rand == 0) {
	r = 200;
    }
    else if (rand == 1) {
	g = 200
    }
    else {
	b = 200;
    }
    this.rotator = new ColorRotator(new Color(r, g, b), 100, 200);
    this.radius = 10;
    
    var w = _$window.width();
    var b1 = 150 + Math.random() * w / 3;
    var b2 = 150 + Math.random() * w / 3;
    this.maxRadius = Math.max(b1, b2);
    this.minRadius = Math.min(b1, b2);
    this.radiusStep = 1 + Math.random() * 3;
    
}

LightBloom.prototype.draw = function(frm) {
    var c = this.rotator.rotate();
    
    fill(c.r, c.g, c.b);
    ellipse(this.x, this.y, this.radius, this.radius);
    this.radius += this.radiusStep;
    
    if (this.radius > this.maxRadius && this.radiusStep > 0) {
	this.radiusStep *= -1;
    }
    else if (this.radius < this.minRadius && this.radiusStep < 0) {
	this.radiusStep *= -1;
    }
    
}

function doResize() {
    var setupHeight = Math.max(_$doc.height(), _$window.height());
    $('#Background').width(_$window.width());
    $('#Background').height(setupHeight);
    size(_$window.width(), setupHeight);
}

_$window.resize(doResize);
