// Setup the Processing Canvas
void setup() {
	doResize();
	frameRate(60);
}

int maxColor = 255;
int minColor = 100;
int step = 1;

int bg_r = maxColor; // Values
int bg_g = minColor;
int bg_b = minColor;
int bgd_r = 0; // Deltas
int bgd_g = 0;
int bgd_b = 0;

// Main draw loop
void draw() {
	rotateColor();
	background(bg_r, bg_g, bg_b);

	color left = color(255,100,100);
	color right = color(100,100,255);
	
	// Set fill-color to blue
	/* beginShape(POLYGON);
	    fill(left); vertex(0, 0);
	    fill(right); vertex(width, 0);
	    fill(right); vertex(width, height);
	    fill(left); vertex(0, height);
    endShape(CLOSE); */
}

int rotateColor() {
	if (bg_r == maxColor && bg_g == minColor && bg_b == minColor) {
	    bgd_r = 0;
	    bgd_g = step;
		bgd_b = 0;
	}
	else if (bg_r == maxColor && bg_g == maxColor && bg_b == minColor) {
	    bgd_r = -1 * step;
	    bgd_g = 0;
		bgd_b = 0;
	}
	else if (bg_r == minColor && bg_g == maxColor && bg_b == minColor) {
        bgd_r = 0;
		bgd_g = 0;
	   	bgd_b = step;
	}
	else if (bg_r == minColor && bg_g == maxColor && bg_b == maxColor) {
	    bgd_r = 0;
	   	bgd_g = -1 * step;
	    bgd_b = 0;
	}
	else if (bg_r == minColor && bg_g == minColor && bg_b == maxColor) {
	    bgd_r = step;
		bgd_g = 0;
	    bgd_b = 0;
	}
	else if (bg_r == maxColor && bg_g == minColor && bg_b == maxColor) {
	    bgd_r = 0;
	    bgd_g = 0;
	    bgd_b = -1 * step;
	}

	bg_r += bgd_r;
	bg_g += bgd_g;
	bg_b += bgd_b;

	console.log(bg_r, bg_g, bg_b);
}

var _$doc = $(document);
var _$window = $(window);
function doResize() {
    var setupHeight = Math.max(_$doc.height(), _$window.height());
    $('#Background').width(_$window.width());
    $('#Background').height(setupHeight);
    size(_$window.width(), setupHeight);
}

_$window.resize(doResize);
