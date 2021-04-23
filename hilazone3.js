(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"hilazone3_atlas_1", frames: [[0,0,982,604],[984,0,958,538],[984,540,830,512],[1816,540,228,265],[1734,1074,226,265],[0,1220,226,265],[1462,1316,224,265],[595,1234,226,265],[1816,807,228,265],[823,1234,226,265],[228,1241,226,265],[1051,1324,224,265],[1688,1341,224,265],[0,606,284,612],[286,894,307,345],[227,1508,205,165],[681,1501,205,167],[0,1487,225,209],[456,1501,223,209],[1944,0,47,75],[1462,1054,270,260],[1150,1054,310,268],[788,606,189,70],[595,1054,553,178],[286,606,500,286]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_46 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(img.CachedBmp_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5118,561);


(lib.CachedBmp_21 = function() {
	this.initialize(img.CachedBmp_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5133,1456);


(lib.CachedBmp_20 = function() {
	this.initialize(img.CachedBmp_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5118,561);


(lib.CachedBmp_19 = function() {
	this.initialize(img.CachedBmp_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5133,1456);


(lib.CachedBmp_18 = function() {
	this.initialize(img.CachedBmp_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5118,560);


(lib.CachedBmp_17 = function() {
	this.initialize(img.CachedBmp_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5133,1456);


(lib.CachedBmp_16 = function() {
	this.initialize(img.CachedBmp_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5118,560);


(lib.CachedBmp_15 = function() {
	this.initialize(img.CachedBmp_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5133,1456);


(lib.CachedBmp_14 = function() {
	this.initialize(img.CachedBmp_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5118,560);


(lib.CachedBmp_13 = function() {
	this.initialize(img.CachedBmp_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5133,1456);


(lib.CachedBmp_12 = function() {
	this.initialize(img.CachedBmp_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5118,560);


(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5133,1456);


(lib.CachedBmp_10 = function() {
	this.initialize(img.CachedBmp_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5118,560);


(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5133,1456);


(lib.CachedBmp_8 = function() {
	this.initialize(img.CachedBmp_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5118,560);


(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5133,1456);


(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5118,560);


(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5133,1456);


(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5118,560);


(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5133,1456);


(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5118,561);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5133,1456);


(lib.claod = function() {
	this.initialize(ss["hilazone3_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.theend2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("End", "normal 700 30px 'Arimo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 69;
	this.text.alpha = 0.97254902;
	this.text.parent = this;
	this.text.setTransform(100.7,261.85,0.6281,0.9289,0,-50.5505,-62.3561);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text);
	}

	this.text_1 = new cjs.Text("The ", "normal 700 30px 'Arimo'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 45;
	this.text_1.lineWidth = 182;
	this.text_1.alpha = 0.97254902;
	this.text_1.parent = this;
	this.text_1.setTransform(56.25,84.15,0.7461,1,58.9272);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text_1);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.973)").s().p("AJsWsIAAk2IAVgwIAAqJIBCAAIAAIYIgBAAIAAHXgAJsG9IALAAIgLAAgArCjDIAAzoIAaAAIAAKFIA9BvIAAH0g");
	this.shape.setTransform(72.825,145.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,0,0,0.973)").s().p("AGRXwQgRgOgXgGQgEAAgBgBIgEgFIgDgPQgBgFgDgCQgCgDgHgBQgZgHgXgLQgGgCgDgEQgEgDgEgOQgGgNgEgEQgEgDgJgCIgWgDQgPAAgIgFQgGgDgLgKQgQgQgOgSIgGgCIHBvKIAFgBIAKAAIALAAIALAAIAAKJIgWAvIiwF/IgBgBIgjBBgAKuEeIAAACIgBABIABgDgApxr7Ig8hvIAAqFIBJAAIJpR0QggAIgeAMIgSAJQgHAFgJAOIgSAfQgGAMgGADQgGADgKgDQgNgDgDAAQgLAAgQAOQgZAagLAPQgEAHgFAEQgFADgHgCIgNgFQgGgBgEABQgDABgEAGQgPAWgWAQIgDAEg");
	this.shape_1.setTransform(73.4,152.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.theend2, new cjs.Rectangle(-18,0,161.5,308.6), null);


(lib.theend = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The End", "normal 700 35px 'Arimo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 361;
	this.text.alpha = 0.97254902;
	this.text.parent = this;
	this.text.setTransform(1.6366,97.7744,0.6524,0.9995,50.9626);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,0,0,0.973)").s().p("AJtRwIzs5HIhDhUIAAmbIAAi2IWEcJIgHAzIhEG9g");
	this.shape.setTransform(-5.65,115.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.973)").s().p("AJ3VOIAAplIAKAMIBEm8IAIAAIAAQVgArMk5IAAwUIAUAAIAAGbIBDBUIAAIlg");
	this.shape_1.setTransform(-6.65,154.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.theend, new cjs.Rectangle(-113.8,0.2,192,289.8), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#391602").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAGAGABAIQgBAJgGAGQgGAGgJABQgIgBgGgGg");
	this.shape.setTransform(2.15,2.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,4.3,4.3), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_46();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,491,302), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0033").s().p("AABAZQgDABgGgEQgHgFgGgKQgGgJgBgJQAAgJAFgDQAEgCAIAFQAHAEAEAJQAFgJAHgFQAIgFAFACQAEADgBAJQAAAJgGAJIgBACIAAABIgBABIgBABIgBABIAAABIgCABIgEAFIgCABIAAABIgBAAIAAAAIgEAEIgDABIgBgBg");
	this.shape.setTransform(2.8568,2.5667);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,5.7,5.1), null);


(lib.startBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("START\nTHE RACE", "normal 700 55px 'Arimo'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 337;
	this.text.parent = this;
	this.text.setTransform(-75.5,-64.6);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000099").ss(3,1,1).p("EAgMAAAQAAIMpbFyQpbFztWAAQtVAApblzQpblyAAoMQAAoLJblzQJblyNVAAQNWAAJbFyQJbFzAAILg");
	this.shape.setTransform(-77,13.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("A2wN+QpblyAAoMQAAoLJblyQJblzNVAAQNWAAJbFzQJbFyAAILQAAIMpbFyQpbFztWAAQtVAApblzg");
	this.shape_1.setTransform(-77,13.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("A2wN+QpblyAAoMQAAoLJblyQJblzNVAAQNWAAJbFzQJbFyAAILQAAIMpbFyQpbFztWAAQtVAApblzg");
	this.shape_2.setTransform(-77,13.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCCCC").s().p("A2wN+QpblyAAoMQAAoLJblyQJblzNVAAQNWAAJbFzQJbFyAAILQAAIMpbFyQpbFztWAAQtVAApblzg");
	this.shape_3.setTransform(-77,13.55);

	this.instance = new lib.CachedBmp_45();
	this.instance.setTransform(-309.5,-126.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_44();
	this.instance_1.setTransform(-284.5,-114.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:-64.6,lineHeight:80.75,x:-75.5}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text,p:{y:-58.6,lineHeight:65.65,x:-75.5}}]},1).to({state:[{t:this.shape_3},{t:this.shape},{t:this.text,p:{y:-58.6,lineHeight:65.65,x:-75.5}}]},1).to({state:[{t:this.instance_1},{t:this.text,p:{y:-58.6,lineHeight:65.65,x:-76.5}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.5,-126.4,479,361.1);


(lib.spark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF33CC").s().p("AAgAQQgGgHAAgJQAAgJAGgGQAGgHAJAAQAJAAAGAHQAHAGAAAJQAAAJgHAHQgGAHgJAAQgJAAgGgHgAg9AQQgHgHABgJQgBgJAHgGQAHgHAJAAQALAAAGAHQAHAGAAAJQAAAJgHAHQgGAHgLAAQgJAAgHgHg");
	this.shape.setTransform(33.45,39.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AguALQgFgEAAgHQAAgFAFgFQAFgFAGAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgFgFgAAZALQgFgFAAgGQAAgGAFgFQAFgEAGAAQAGAAAFAEQAFAFAAAGQAAAGgFAFQgFAFgGAAQgGAAgFgFg");
	this.shape_1.setTransform(33.15,27.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC33").s().p("AB5AQQgGgGgBgKQABgJAGgHQAGgGAJAAQAJAAAGAGQAHAHAAAJQAAAKgHAGQgGAHgJAAQgJAAgGgHgAiWAQQgGgGAAgKQAAgJAGgHQAHgGAJAAQAKAAAHAGQAHAHAAAJQAAAKgHAGQgHAHgKAAQgJAAgHgHg");
	this.shape_2.setTransform(33.1,27.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6633FF").s().p("ADQASQgHgIAAgKQAAgJAHgHQAGgIAKAAQAJAAAHAIQAHAHAAAJQAAAKgHAIQgHAGgJABQgKgBgGgGgAjvASQgHgIAAgKQAAgJAHgHQAIgIAKAAQAKAAAHAIQAIAHAAAJQAAAKgIAIQgHAGgKABQgKgBgIgGg");
	this.shape_3.setTransform(32.775,15.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3333").s().p("ABjAOQgEgFAAgHQAAgGAEgEQAGgFAHAAQAGAAAFAFQAFAEgBAGQABAHgFAFQgFAFgGAAQgHAAgGgFgAh5AMQgFgFgBgHQABgHAFgGQAGgFAHAAQAIAAAFAFQAFAGAAAHQAAAHgFAFQgFAGgIAAQgHAAgGgGg");
	this.shape_4.setTransform(33.45,17.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF33").s().p("Ai8APQgGgGAAgIQAAgHAGgHQAGgFAIAAQAIAAAGAFQAGAHAAAHQAAAIgGAGQgGAGgIAAQgIAAgGgGgACjANQgFgGAAgHQAAgIAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAIQAAAIgFAFQgGAHgHAAQgIAAgGgHg");
	this.shape_5.setTransform(32.425,4.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF33FF").s().p("AEbASQgHgHAAgLQAAgKAHgIQAHgHALAAQAKAAAHAHQAHAIAAAKQAAALgHAHQgHAIgKAAQgLAAgHgIgAk8ASQgIgHAAgLQAAgKAIgIQAHgHALAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAQgLAAgHgIg");
	this.shape_6.setTransform(32.475,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF33CC").s().p("AiKAdQgHgGAAgKQAAgKAHgGQAGgGAKAAQAKAAAGAGQAHAGAAAKQAAAKgHAGQgGAHgKAAQgKAAgGgHgABtADQgFgGAAgJQAAgKAFgHQAHgGAJAAQAIAAAHAGQAGAHAAAJQAAALgGAFQgHAHgIAAQgJAAgHgHg");
	this.shape_7.setTransform(34.8,28.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFFF").s().p("ABSALQgEgFAAgGQAAgFAEgGQAFgEAHAAQAGAAAFAEQAFAGAAAFQAAAGgFAFQgFAFgGAAQgHAAgFgFgAhpALQgEgFAAgGQAAgFAEgGQAGgEAGAAQAGAAAFAEQAFAGAAAFQAAAGgFAFQgFAFgGAAQgGAAgGgFg");
	this.shape_8.setTransform(34.15,17.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC33").s().p("ADMAQQgHgGABgKQgBgJAHgHQAGgGAJAAQAJAAAHAGQAFAHAAAJQAAAKgFAGQgHAHgJAAQgJAAgGgHgAjpAQQgGgGgBgKQABgJAGgHQAHgGAKAAQAJAAAHAGQAHAHAAAJQAAAKgHAGQgHAHgJAAQgKAAgHgHg");
	this.shape_9.setTransform(36.2,18.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6633FF").s().p("AEYARQgHgGAAgLQAAgJAHgHQAGgIAKABQAJgBAHAIQAHAHAAAJQAAALgHAGQgHAIgJgBQgKABgGgIgAk3ARQgHgGAAgLQAAgJAHgHQAIgIAKABQAKgBAHAIQAIAHAAAJQAAALgIAGQgHAIgKgBQgKABgIgIg");
	this.shape_10.setTransform(35.175,7.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF3333").s().p("ACfAQQgFgEAAgHQAAgGAFgEQAFgFAHAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAGgHAAQgHAAgFgGgAi0AKQgGgFAAgIQAAgHAGgFQAFgGAIAAQAHAAAGAGQAFAFAAAIQAAAGgFAGQgGAFgHAAQgIAAgFgFg");
	this.shape_11.setTransform(34.175,6.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66FF33").s().p("ADwAOQgGgGAAgIQAAgHAGgGQAFgGAIAAQAIAAAFAGQAGAGgBAHQABAIgGAGQgFAGgIAAQgIAAgFgGgAkIAOQgHgGABgIQgBgHAHgGQAGgGAHAAQAJAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgJAAQgHAAgGgGg");
	this.shape_12.setTransform(34.25,-4.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF33FF").s().p("AFnATQgHgIAAgLQAAgKAHgHQAHgIALAAQAKAAAHAIQAHAHAAAKQAAALgHAIQgHAHgKAAQgLAAgHgHgAmIATQgIgIAAgLQAAgKAIgHQAHgIALAAQALAAAIAIQAHAHAAAKQAAALgHAIQgIAHgLAAQgLAAgHgHg");
	this.shape_13.setTransform(35.275,-4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF33CC").s().p("AkKAXQgHgHAAgJQAAgJAHgGQAGgHAKAAQAKAAAGAHQAHAGAAAJQAAAJgHAHQgGAHgKAAQgKAAgGgHgADuAJQgHgHABgIQgBgKAHgHQAFgGAKAAQAJAAAGAGQAGAHAAAJQAAAKgGAGQgGAHgJAAQgKAAgFgHg");
	this.shape_14.setTransform(35.8,24.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC33").s().p("AFHAQQgHgGAAgKQAAgJAHgHQAGgGAKAAQAIAAAHAGQAFAHAAAJQAAAKgFAGQgHAHgIAAQgKAAgGgHgAlkAQQgHgGAAgKQAAgJAHgHQAHgGAJAAQALAAAGAGQAHAHAAAJQAAAKgHAGQgGAHgLAAQgJAAgHgHg");
	this.shape_15.setTransform(36.3,15.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00FFFF").s().p("ADgALQgFgFAAgGQAAgFAFgGQAEgEAHAAQAHAAAEAEQAFAGAAAFQAAAGgFAFQgEAFgHAAQgHAAgEgFgAj1ALQgFgFAAgGQAAgFAFgGQAFgEAGAAQAGAAAFAEQAFAGAAAFQAAAGgFAFQgFAFgGAAQgGAAgFgFg");
	this.shape_16.setTransform(36.05,11.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF3333").s().p("AlgANQgFgFAAgIQAAgHAFgFQAGgFAHAAQAIAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAQgHAAgGgFgAFKAJQgEgEAAgGQAAgHAEgFQAFgEAHAAQAHAAAFAEQAEAFAAAHQAAAGgEAEQgFAFgHAAQgHAAgFgFg");
	this.shape_17.setTransform(36.825,0.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6633FF").s().p("AGdARQgHgGAAgLQAAgJAHgHQAHgIAJABQAKgBAHAIQAGAHAAAJQAAALgGAGQgHAIgKgBQgJABgHgIgAm8ARQgHgGAAgLQAAgJAHgHQAHgIAKABQALgBAHAIQAHAHAAAJQAAALgHAGQgHAIgLgBQgKABgHgIg");
	this.shape_18.setTransform(36.175,7.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF33FF").s().p("AoFAYQgIgHAAgLQAAgKAIgIQAHgHALAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAQgLAAgHgIgAHkANQgHgIAAgKQAAgLAHgHQAHgIALAAQAKAAAHAIQAHAHAAALQAAAKgHAIQgHAHgKAAQgLAAgHgHg");
	this.shape_19.setTransform(36.575,-4.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66FF33").s().p("AmOAUQgFgGgBgJQABgHAFgFQAHgHAIAAQAIAAAGAHQAGAFAAAIQAAAIgGAGQgGAGgIAAQgIAAgHgGgAF1AJQgGgHAAgHQAAgIAGgGQAFgGAIAAQAHAAAGAGQAGAGgBAIQABAHgGAHQgGAFgHAAQgIAAgFgFg");
	this.shape_20.setTransform(36.35,-9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00FFFF").s().p("AFeALQgEgEAAgHQAAgFAEgGQAFgEAHAAQAGAAAFAEQAFAGAAAFQAAAHgFAEQgFAFgGAAQgHAAgFgFgAl0ALQgFgEAAgHQAAgFAFgGQAFgEAGAAQAHAAAEAEQAFAGAAAFQAAAHgFAEQgEAFgHAAQgGAAgFgFg");
	this.shape_21.setTransform(28.575,25.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF33CC").s().p("Ak+AQQgHgGAAgKQAAgJAHgGQAHgHAJAAQAKAAAHAHQAGAGAAAJQAAAKgGAGQgHAHgKAAQgJAAgHgHgAEiAQQgHgHABgJQgBgJAHgHQAFgGAKAAQAIAAAHAGQAGAHAAAJQAAAJgGAHQgHAHgIAAQgKAAgFgHg");
	this.shape_22.setTransform(29.6,33.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC33").s().p("AmUAQQgHgGABgKQgBgIAHgIQAHgGAJAAQAKAAAHAGQAHAIAAAIQAAAKgHAGQgHAIgKAAQgJAAgHgIgAF3AQQgHgGAAgKQAAgJAHgHQAGgHAKABQAIgBAGAHQAHAHgBAJQABAKgHAGQgGAHgIAAQgKAAgGgHg");
	this.shape_23.setTransform(30.5,33.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6633FF").s().p("AHlAcQgHgHAAgLQAAgKAHgGQAGgHAKAAQAJAAAHAHQAHAGAAAKQAAALgHAHQgHAHgJAAQgKAAgGgHgAoEAHQgHgHAAgJQAAgKAHgIQAIgHAKAAQAKAAAHAHQAIAIAAAKQAAAJgIAHQgHAHgKAAQgKAAgIgHg");
	this.shape_24.setTransform(30.925,27.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF33FF").s().p("AJSAyQgHgHAAgLQAAgLAHgIQAHgHALAAQAKAAAHAHQAHAIAAALQAAALgHAHQgHAIgKAAQgLAAgHgIgApzgMQgIgIAAgLQAAgLAIgHQAHgIALAAQALAAAIAIQAHAHAAALQAAALgHAIQgIAHgLAAQgLAAgHgHg");
	this.shape_25.setTransform(30.375,26.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#66FF33").s().p("AIdA4QgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAFAGAAAIQAAAIgFAGQgGAGgIAAQgHAAgGgGgAo2gbQgGgGAAgIQAAgIAGgGQAGgGAIAAQAJAAAFAGQAGAGABAIQgBAIgGAGQgFAGgJAAQgIAAgGgGg");
	this.shape_26.setTransform(31.8,17.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF3333").s().p("AG7AdQgEgFAAgGQAAgHAEgFQAGgEAHgBQAGABAFAEQAFAFgBAHQABAGgFAFQgFAFgGAAQgHAAgGgFgAnRgCQgGgFABgIQgBgHAGgGQAGgFAHAAQAHAAAGAFQAFAGABAHQgBAIgFAFQgGAFgHgBQgHABgGgFg");
	this.shape_27.setTransform(31.55,20.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},3).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-12.2,127.2,53.8);


(lib.POWERLINE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_33();
	this.instance.setTransform(5.65,5.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_32();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.POWERLINE, new cjs.Rectangle(0,0,153.5,311.2), null);


(lib.playagainBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("N", "normal 700 55px 'Arimo'", "#FF99CC");
	this.text.lineHeight = 79;
	this.text.parent = this;
	this.text.setTransform(-190.1,-81.7,0.8814,0.8814);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text);
	}

	this.text_1 = new cjs.Text("I", "normal 700 55px 'Arimo'", "#FF6666");
	this.text_1.lineHeight = 79;
	this.text_1.parent = this;
	this.text_1.setTransform(-205.25,-81.7,0.8814,0.8814);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("A", "normal 700 55px 'Arimo'", "#3366FF");
	this.text_2.lineHeight = 79;
	this.text_2.parent = this;
	this.text_2.setTransform(-240.1,-81.7,0.8814,0.8814);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("G", "normal 700 55px 'Arimo'", "#FF6699");
	this.text_3.lineHeight = 79;
	this.text_3.parent = this;
	this.text_3.setTransform(-278.5,-81.7,0.8814,0.8814);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("A", "normal 700 55px 'Arimo'", "#FF9900");
	this.text_4.lineHeight = 79;
	this.text_4.parent = this;
	this.text_4.setTransform(-313.35,-81.7,0.8814,0.8814);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("Y", "normal 700 55px 'Arimo'", "#66CCFF");
	this.text_5.lineHeight = 79;
	this.text_5.parent = this;
	this.text_5.setTransform(-200.25,-139.55,0.8814,0.8814);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("A", "normal 700 55px 'Arimo'", "#FF00FF");
	this.text_6.lineHeight = 79;
	this.text_6.parent = this;
	this.text_6.setTransform(-231.1,-139.55,0.8814,0.8814);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("L", "normal 700 55px 'Arimo'", "#00FF00");
	this.text_7.lineHeight = 79;
	this.text_7.parent = this;
	this.text_7.setTransform(-264.35,-139.55,0.8814,0.8814);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("P", "normal 700 55px 'Arimo'", "#FFFF00");
	this.text_8.lineHeight = 79;
	this.text_8.parent = this;
	this.text_8.setTransform(-296.7,-139.55,0.8814,0.8814);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text_8);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6666").ss(3,1,1).p("AVvAAQAAFimXD6Qj6Cak5A7QjGAmjfAAQjeAAjFgmQk6g7j6iaQmXj6AAliQAAlhGXj6QGYj6I/AAQJBAAGXD6QGXD6AAFhg");
	this.shape.setTransform(-231.825,-72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AmjMxQk6g7j6iaQmXj6AAliQAAlhGXj6QGYj6I/gBQJBABGXD6QGXD6AAFhQAAFimXD6Qj6Cak5A7QjGAmjfAAQjeAAjFgmg");
	this.shape_1.setTransform(-231.825,-72.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmjMxQk6g7j6iaQmXj6AAliQAAlhGXj6QGYj6I/gBQJBABGXD6QGXD6AAFhQAAFimXD6Qj6Cak5A7QjGAmjfAAQjeAAjFgmg");
	this.shape_2.setTransform(-231.825,-72.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCCFF").s().p("AmjMxQk6g7j6iaQmXj6AAliQAAlhGXj6QGYj6I/gBQJBABGXD6QGXD6AAFhQAAFimXD6Qj6Cak5A7QjGAmjfAAQjeAAjFgmg");
	this.shape_3.setTransform(-231.825,-72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]},1).to({state:[{t:this.shape_3},{t:this.shape},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-372.4,-159.4,281.2,173.9);


(lib.legs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F3A0F").s().p("AgrCZIgBgBIgEAAQgPADgPgDIgBAAQgegBgTgDQgLgCgEgFQgDgEgCgIQgEgQgCgSQgFgRgCgYIgChKIgDgXQAAgNACgKIABAAIgBgIIAAgDIAAgDIAAgHQgBgGAAgKIABgPIAAgCIAAgFIABgBIABgOIAAgNICFAAIAAAQIAAADIAAAIIAAAGIAAACIAAAAIABADIAAABIgBACIgCAlQgCASABAYIABAGIgBADIABABIgDAbQgCAaABANQABAJADAHIAIACQAEACADACIAFAGIAAgjIgBgDQgBgeAAghIABgzIgBglIgBgCIAAgGIgBgFIgCgWICAAAIgBAPIAAAEIgBAIIAAAGIAAACIAAABQAAAggBAKIgCAjIAAABIAAABIgBAAIAAAHIAAACIAAABIAAADIAAAFIAAAIIAAAFIABAAIgBAJIgBAGQAAAFADADIAAABQABAEAHAFQANAJAOAIIAFADIAKAOIAGAHIAAABIAAACIAAABIAAACIAAAAIABABIAAABIAAABIAAAAIAAABIABABIAAABIAAAAIAAABIAAABIAAAAIAAABIABABIAAAAIAAABIAAABIAAABIABAJIAAAJQAAAEgDAEIgFAHIgDAGQgDAFgLAFIgCACQgFADgFAAIgIAAIgBAAIgFABIgBAAQgGACgNAAIgEgBIgDABQgKABgVgCIgcgDQgKgBgEgDQgEgEgBgIQgBgLgBgDIgBAAIAAABIACAHIAAAQIAAABIAAAGIgBABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIgHADIgKAEIgFABIgIACIgCAAIgBAAIgMABIgFgBg");
	this.shape.setTransform(18.9458,23.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F3A0F").s().p("AgsCZIAAgBIgFAAQgOADgQgDIAAAAQgfgBgSgDQgLgCgEgFQgEgEgCgIQgEgQgBgSQgFgRgCgYIgDhKIgCgXQgBgNADgKIAAAAIAAgIIAAgDIAAgDIAAgHQgCgGAAgKIABgPIAAgCIABgFIAAgBIACgOIAAgNICEAAIAAAQIAAADIABAIIAAAGIAAACIAAAAIAAADIAAABIAAACIgCAlQgCASABAYIAAAGIAAADIAAABIgDAbQgCAaABANQABAJADAHIAIACQAFACADACIAFAGIgBgjIAAgDQgCgeAAghIABgzIgBglIAAgCIgBgGIAAgFIgDgWICBAAIgCAPIAAAEIAAAIIAAAGIAAACIAAABQAAAggBAKIgCAjIgBABIAAABIAAAAIAAAHIAAACIAAABIAAADIAAAFIAAAIIAAAFIAAAAIAAAJIgBAGQAAAFADADIAAABIAAABIAEACQAEACAIAAQAJABAHAFIAFAEIAGACIAFAGIAIAKQAEAKAAALIgBAIIABANIAAADIAAACIAAAGIgCADIgCABIAAAAIgBABQgNACgTgBIghgBIgRAAIgLACIgOgBIgPgBQgRABgEgBQgHgCgCACIgBACIgBgBIAAAAIAAABIAAACIAAADIACAHIAAALIAAABIgBAGIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIgHADIgKAEIgFABIgJACIgBAAIgBAAIgNABIgFgBg");
	this.shape_1.setTransform(19.2208,24.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F3A0F").s().p("AgsCZIAAgBIgFAAQgOADgQgDIAAAAQgfgBgSgDQgLgCgEgFQgEgEgCgIQgEgQgBgSQgFgRgCgYIgDhKIgCgXQgBgNADgKIAAAAIAAgIIAAgDIAAgDIAAgHQgCgGAAgKIABgPIAAgCIABgFIAAgBIACgOIAAgNICEAAIAAAQIAAADIABAIIAAAGIAAACIAAAAIAAADIAAABIAAACIgCAlQgCASABAYIAAAGIAAADIAAABIgDAbQgCAaABANQABAJADAHIACAAIABABIALAJIAFAFIAQAbIAFALIAAACIAAABIACAHIAAALIAAABIgBAGIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIgHADIgKAEIgFABIgJACIgBAAIgBAAIgNABIgFgBgABQBdIgOAAIgTAAQgMABgJgCQgNgDgJgKIgBgBIgJgOIgEgFIgBgEIgBgTIAAgDIABgFIAAgBIAAgBIABgBIAAgBIAAgBIAAgHIABgBIAAgBIACgHIAAgDIAAgEIACgEQAGgigDghQgBgJgCgJIgCgJIAAgIIgBAAIgBgFIAAAAQAAgEgCgCIgBgCIgCgFIAAAAIAAgBIgBgBIAAgFIgDgWICBAAIgCAPIAAAEIAAACIABADIABAIIAAABIABALIAAAAIADAKIABAKIAAACQABAFAAAJQAAARgDAIIgCAGIgDAHIgCAFIgBADQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIAAAFIAAAIIAAAFIABAAIABAAIAAABIABAAIABAAIABABIABAAIACABIABAAIACABIABABIABAAIABAAIAAABIABAAIABAAIAAABIABAAIABAAIABAAIABAAIABABIAAAAIABABIABABIAAAAIABAAIAAAAIABABIAAAAIAAAAIABAAIAAABIABAAIABAAIAAABIABAAIAAAAIABABIABAAIAAABIABAAIAAAAIABAAIAAABIABAAIAAAAIABABIABABIABAAIABABIABAAIAAABIACABIABABIABABIACACIABABIACACIAAAAIAAAAIAAABIABAAIAAABIAAAAIAAAAIABAAIAAABIABABIABACIABABIABABIABACIAAAAIACADIABADIABADIABAEIAAAEIAAAEIAAACIAAAAIAAABIAAACQACAHAAAHIgBAIIABAFIgCABIgGAGQgCACgKABIg3ACg");
	this.shape_2.setTransform(19.2208,24.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8F3A0F").s().p("AguCZIgBgBIgEAAQgPADgPgDIgBAAQgegBgTgDQgLgCgEgFQgDgEgCgIQgEgQgCgSQgFgRgCgYIgChKIgDgXQAAgNACgKIABAAIgBgIIAAgDIAAgDIAAgHQgBgGAAgKIABgPIAAgCIAAgFIABgBIABgOIAAgNICFAAIAAAQIAAADIAAAIIAAAGIAAACIAAAAIABADIAAABIgBACIgCAlQgCASABAYIABAGIgBADIABABIgDAbQgCAaABANQABAJADAHIABAAIABABIALAJIAFAFIAQAbIAFALIABACIAAABIABAHIAAALIAAABIAAAGIgBABQgBAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAIgGADIgLAEIgFABIgIACIgCAAIgBAAIgMABIgFgBgAALBMIgBAAIgEgFIgDgNIAAgGIAAgJIABgSIAAgCIABgBIAAgBIAJgbQAFgQABgQIgBgLIgCgOQgDgMgKgRQgMgWgDgGIgBgFQgGgGgCgVIBzAAQADgCAEABIAGAEIAFAFIABACIAFAGQAEAEADAIIACAGIAAAKIgBAEIgBACIAAAAIAAAOIgDASIgHAaQgEAPgBALIgBAGIAAABIABAAIAEAAIAEAAIADAAIACABIADAAIADAAIACABIADAAIABABIACAAIACABIACAAIABABIACABIAAAAIABAAIABABIAAAAIABAAIABABIAAAAIABAAIABABIABABIABAAIABABIACAAIABABIABABIABABIABABIABABIABABIABACIABABIAEAHQACAFAAAFIAAAKIAAAJIAAAAIAAAEIAAAEIAAACIAAAAIAAABIAAABIgBADQgBACgDABIgKAFIgBAAQgDADgFABIgDAAIgIADIgWACIgWABIgSABIgUABQgYAAgSgEg");
	this.shape_3.setTransform(19.4958,24.1083);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8F3A0F").s().p("AgxCZIgBgBIgEAAQgPADgPgDIgBAAQgegBgTgDQgLgCgEgFQgDgEgCgIQgEgQgCgSQgFgRgCgYIgChKIgDgXQAAgNACgKIABAAIgBgIIAAgDIAAgDIAAgHQgBgGAAgKIABgPIAAgCIAAgFIABgBIABgOIAAgNICFAAIAAAQIAAADIAAAIIAAAGIAAACIAAAAIABADIAAABIgBACIgCAlQgCASABAYIABAGIgBADIABABIgDAbQgCAaABANQABAJADAHIABAAIABABIALAJIAFAFIARAbIAEALIABACIAAABIABAHIAAALIAAABIAAAGIgBABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABIgGADIgLAEIgFABIgIACIgCAAIgBAAIgMABIgFgBgAAPBVQgGgEAAgFIgBgEIAAgCIgDgNIAAgGIAAgJIAAgSIABgCIAAgBIAAgeQgCgWAIgsQgFgTgEgHIgXg0IB8AAIAHAPIAKAJQAEALAAAGIgBALIgBAFIABAPIAAACQAAALgGAXQgEAMgBAJIgBAEIgCAMIAAAEQABACAGAAIARABQAFAAAEABIAHACIAGACQAEACAEAGIADAFIACAGIADAJIAAADIgBAJIAAAAIAAAEIAAAEIAAACIABAAIAAABIAAABIAAABIABAFQABAHgFAFIgHADQgIADgUADQgXADggABIgyABQgJAAgFgDg");
	this.shape_4.setTransform(19.7799,24.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8F3A0F").s().p("AgzCZIgBgBIgEAAQgPADgPgDIgBAAQgegBgTgDQgLgCgEgFQgDgEgCgIQgEgQgCgSQgFgRgCgYIgChKIgDgXQAAgNACgKIABAAIgBgIIAAgDIAAgDIAAgHQgBgGAAgKIABgPIAAgCIAAgFIABgBIABgOIAAgNICDAAIACAJIAAAHIAAADIAAAIIAAAGIAAACIAAAAIABADIAAABIgBACIgCAlQgCASABAYIABAGIgBADIABABIgDAbQgCAaABANQABAJADAHIABAAIABABIALAJIAFAFIARAbIAEALIABACIAAABIABAHIAAALIAAABIAAAGIgBABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgHADIgLAEIgFABIgIACIgCAAIgBAAIgMABIgFgBgAA/BhIgagBQgLgBgEgDQgFgDgDgFQgCgDgBgCQgDgGAAgGIAAgDIgBgGIAAgFIAAgJIAAgSIABgDIAAgBIAAgeQgCgVADgTQACgUgEgOIgCgFIgCgDIgDgLIgHgPIgCgEIgFgOIgCgEIAAgGIgCgJIALABIAFAAIABABIBhAAQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQADAAACAHIAEAOIADAFIAEANQAFAWgDAZIAAAXIgBABIAAAEIgBADIgCALIgBAFIgCALIAAAEIABABIAAABIAAABQgBADADACIAFABIAMAAIABAAIANADIALAFIADACIAKAOQgBAFADACIACAHIgBABIAAABIAAAEIAAADIAAACIABAAIAAACIAAABIAAABIABAEIAAAHIAAACQABAKgGAGQgFAFgPACQgVACgqAAg");
	this.shape_5.setTransform(19.9833,24.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8F3A0F").s().p("Ag1CZIAAgBIgFAAQgOADgQgDIAAAAQgfgBgSgDQgLgCgEgFQgEgEgCgIQgEgQgBgSQgFgRgCgYIgDhKIgCgXQgBgNADgKIAAAAIAAgIIAAgDIAAgDIAAgHQgCgGAAgKIABgPIAAgCIABgFIAAgBIACgOIAAgNICEAAIAAAQIAAADIABAIIAAAGIAAACIAAAAIAAADIAAABIAAACIgCAlQgCASABAYIAAAGIAAADIAAABIgDAbQgCAaABANQABAJADAHIACAAIABABIALAJIAFAFIARAbIAFALIAAACIAAABIABAHIAAALIAAABIgBAGIAAABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIgIADIgKAEIgFABIgJACIgBAAIgBAAIgNABIgFgBgAAnBmQgLgCgFgDQgFgDgFgKQgCgGABgDQgCgFAAgEIAAgDIgCgGIAAgFIAAgJIABgSIAAgDIABgBIAAgeQgCgVACgTIgCgMQgFgZgFgPIgJgTIgDgLIgFgIIAAgDQgEgFgBgEIAMgBIAKgBIABAAIAAABIBaAAIABABIABgBQADgBAEACQADABACAEIAHASQAGAMAAAXIAAADIACAqQgBAGACAEIgCAOIgCAFIgCALIAAAFQAAAIACACIABABQACAEAFABIAIACIALAAIALACQAHACAGAHIAEAEIACAFIADAJIAAABIAAAEIAAADIAAACIAAAAIAAACIAAABIAAABIABAEIAAAHIAAACQABAFgCAEQAAAGgEAGQgHAJgJABIgPABQgMgBgWACIgVABQgWAAgYgDg");
	this.shape_6.setTransform(20.1333,24.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8F3A0F").s().p("AgzCZIgBgBIgEAAQgPADgPgDIgBAAQgegBgTgDQgLgCgEgFQgDgEgCgIQgEgQgCgSQgFgRgCgYIgChKIgDgXQAAgNACgKIABAAIgBgIIAAgDIAAgDIAAgHQgBgGAAgKIABgPIAAgCIAAgFIABgBIABgOIAAgNICFAAIAAAQIAAADIAAAIIAAAGIAAACIAAAAIABADIAAABIgBACIgCAlQgCASABAYIABAGIgBADIABABIgDAbQgCAaABANQABAJADAHIABAAIABABIALAJIAFAFIARAbIAEALIABACIAAABIABAHIAAALIAAABIAAAGIgBABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgHADIgLAEIgFABIgIACIgCAAIgBAAIgMABIgFgBgABDByQgJABgHgCIgNgDQgJAAgEgCQgIgEgCgLIgCgEIgBgDIgCgGIAAAAIgDgKIgBgMIABgFIAAgCIAAgJIAAgSIABgCIAAgBIAAgeIgBgTIgBgEIgBgpIgBgFIAAgIIgBgBIAAgCIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIgCgDIgQgrIgFgJIAiAAIAEgCIBMAAIACADIAJAbIAEANIAFAWIAFAeIAAAIIAAAFIgDAVIgBAEIgCAMIAAAEIAAADQgBABAAAEQABAGACADIABAEQACADADACQAEACAHABIAKABIAPAGIAEACIACADIALASIABABIAAAAIAAABIABAFIAAAGIAAADQAAAFgBAEIgCAHIAAAEIgGAIIAAABIgDADIgBACQgDAFgIACQgGACgHAAIgYACg");
	this.shape_7.setTransform(19.9833,24.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8F3A0F").s().p("Ag1CZIAAgBIgFAAQgOADgQgDIAAAAQgfgBgSgDQgLgCgEgFQgEgEgCgIQgEgQgBgSQgFgRgCgYIgDhKIgCgXQgBgNADgKIAAAAIAAgIIAAgDIAAgDIAAgHQgCgGAAgKIABgPIAAgCIABgFIAAgBIACgOIAAgNICDAAIgBAEIAAAJIAAADIABADIAAAEIACAJIAAABIAAACIAAAAIAAADIAAABIAAACIgCAlQgCASABAYIAAAGIAAADIAAABIgDAbQgCAaABANQABAJADAHIACAAIABABIALAJIAFAFIARAbIAFALIAAACIAAABIABAHIAAALIAAABIgBAGIAAABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIgIADIgKAEIgFABIgJACIgBAAIgBAAIgNABIgFgBgABVCSIgigCIgEAAIgCgBIgGAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBgBIgEgDIgDgFIAAAAIgEgBQgDgBgDgEIgKgQQgDgFgCgMQgBgMAAgNIAAgCQgBgHABgIQgCgXABgqIAAgJIAAgDIAAgMIgBgIQgCgDgBgHIgLhDIgBgFQAAgKgFgSIAOAAIABAAIANABQAHABAEgCIBHAAIACAFIAMAeQAEAJADAVIAHArIgBASIgCAhIAAAFIAAAHQAAAJACAFIABAEIAAABIABACIAAAAIABADIAAAAIACAEIACADIAAAAIADADIAEAFIAGADIAEABIADABIACABIADAAIABAAIABAAIACABIACABIAEACIAEAEIABACIADADIADADIADAGQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIABAHIABACIAAATIgCAEIAAADIgBADIgCADQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgCACIAAABIgCADQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIgFACIAAAAQgEADgFACIgKAAg");
	this.shape_8.setTransform(20.1208,24.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8F3A0F").s().p("ABVCWIgigBIgDgBIgCAAIgGgBQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEgEIgDgEIAAgBIgEgBQgEgBgDgEIgJgQQgDgFgCgMQgBgMAAgNIAAgCQgBgHABgHQgCgYABgqIgBgJIABgDIAAgKIgCgKIgEgdIgGgUIgCgGIgLg3QAHgBADABIAJABIANABQAGABAFgCIBHAAIACAEIAMAeQAEAJADAVIAHAsIgBASIgDAgIABAFIAAAIQAAAIABAFIACAEIAAACIABABIAAAAIABADIAAAAIABAFIACACIABAAIADADIADAFIAHADIADABIADACIADAAIACAAIACABIABAAIABABIADABIADABIAFAEIABACIADADIADAEIADAFQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAAAGIACACIgBAUIgBADIAAADIgBADIgCADQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIgCACIAAACIgCACQAAABgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgFACIgBAAQgDADgGACIgJABgAh6CXIgBgBIACABgAgeCNIgDAAIgHAAIgCAAIgCAAIgDAAIgBAAIgMgBIgWgCIgLAAIgogGIgIAAIgOgFIgHgDQgEgDgBgEQgGgIgBgKIgBgHIAEggIgBgCIgBhFIABAAIABgNIAAgQIABgBQABgOgDgPIAAgBIgBgEIgBAAIAAgEIAAAAIAAgDIAAgBQgCgFAAgJIAAgDIABgOIAAgCIABgFIAAgBIABgPIAAgMICFAAIAAADIAAACIAAALIAAADIAAAIIAAAGIAAABIAAABIABADIAAABIgBABIAAAHIABADIABAmIAAALIAAAEIgBAPIgBACIgBAGIgBABIAAADIgDAbQgCAaABANQABAJADAGIACABIAAABIALAJIAGAFIARAbIAEAKIAAAAIAAABIABACIAAABIAAAEIAAAAIAAAJIgBABIgBACQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgDACIgFACIgBABIgCAAIgBAAQgBABgHAAg");
	this.shape_9.setTransform(20.25,23.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8F3A0F").s().p("ABSCWIgigCIgDAAIgDgBIgBAAIAAAAIgFAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgEgDIgCgDQgGgFgBgIIAAgLIgEgIIgCgFIAAACIABADIgBgBIAAAJIgBAEIgBACIgCACQgDACgDAAIAAAAQgHADgQgCIgkgFQgVgDgQAAQgYAAgJgEQgHgFgFgBIgHgEIgDgGQgFgLABgFIAAgGIAAgCIABgDIACgEIABgHIAEgXIADggQABgTgBgKIgEgYIgBgCIgBgGIgBgBIAAgDIAAgCIgBgBIAAgCIgCgIIgBgHIgDgJIgBgDIAAgBIgEgJIgFgMIgFgQQgEgLADgFQACgDAFgBIAEAAIABAAIADAAIADgBIAEAAIBdAAQADgBADABIACAAIABAAIAAABQAGACABAGIABAHIACAFQAAAHABABIABACQABAIAGANIADAJIAEAKIADAJIAAADIABABQABAFAAAMIAAAAIACABIgBAJIgBAGIgBADIAAABIgBAGIgBABIAAABIgBABIgBAIIgCAGIgBABIgBAMQgCAYABANIAAACIABAAIABADIABAAQAAABAAAAQAAABAAAAQAAAAAAAAQABABAAAAIAEACIADABIAGABIADACIABABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABIAAgFQgCgXABgqIAAgJIAAgDIAAgLIABgDIAAgEIgBgJIAAgPIgDgLIgCgEIgBgFIgGgQIgEgNIgCgEIAAgDIAAAAIgHgfIAKABIAEAAIAHAAIAGgCIA7AAQAEACAHABIAVAAIACAEIAJAWIAFAPQABAFgBAIQAAAJAGASIAAALIABACIAAAdIgDAhIABAFIAAAHQAAAJABAFIACAEIAAABIAAACIABAAIAAADIABAAIABAEIACADIABAAIACADIAEAFIAGADIAEABIADABIACABIADAAIACAAIABAAIABABIACABIAEACIAFAEIABACIADADIADADIADAGQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIABAHIACACIgBATIgBAEIAAADIgCADIgCADQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgCACIAAABIgCADQgBAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAABIgEACIgBAAQgEADgFACIgJAAgAh6CWIgBAAIADAAgAAACJIAAABIgBABIABgCg");
	this.shape_10.setTransform(20.1933,23.6667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8F3A0F").s().p("ABQCWIgigCIgCAAIgEAAIgKAAIgIgEIgJgGIgCgDIgCgHIAAgDIgCgNIAAgIIgEABIgCAAIAAABIgBAAIgEABQgKADgUgBIgfgCQgngCgVgGQgNgEgFgHQgEgFgBgLQgBgLABgMIACgKIADggIABgbIACgdIgFgNIgGgPIgKgiIgGgNQgEgIAAgFQAAgFADgDQAEgDAHAAIADAAIAAgBIBLAAIAVAAQAHAAADABQAGAEACAKIAEATIACADIAHAJQACACABAFQAGAEACAIIAAABIAEAHIAAAMIABAEIACAAQABARgDAKIgEAKIgEAIQgDAGgCAHIgDAMIgBAJIABABIADAEIAFAIIAMALIADAEQgBgVABghIAAgJIAAgDIAAgLIABgDIAAgEIgBgJIAAgSIgBgCIgCgXIgPgrIAAgQIAPAAIAAgBIBQAAIACACIACgBQAGAAAEAEIACADIABAAIABACIACAHIADAJIAEANIAHAYIAAAKIACAJIABAEIAAAAIACAEIAAATIAAARIgDAhIABAFIAAAHQAAAJABAFIACAEIAAABIAAACIABAAIAAADIABAAIABAEIACADIABAAIACADIAEAFIAGADIAEABIADABIACABIADAAIACAAIABAAIABABIACABIAEACIAFAEIABACIADADIADADIADAGQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIABAHIACACIgBATIgBAEIAAADIgCADIgCADQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIgCACIAAABIgCADQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABIgEACIgBAAQgEADgFACIgJAAgAh6CWIgBAAIADAAg");
	this.shape_11.setTransform(20.175,23.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8F3A0F").s().p("ABQCWIgigCIgCAAIgEAAIgKAAIgIgFIgJgFIgCgEIgCgGIAAgEIgCgMIAAgIIgBAAIAAABIgGAJIgEADIgCABIgKAEQgPADgHgBIgMgCQgJgCgZAAQgWgBgNgDIgBgBIgDAAQgGAAgGgEQgFgFgEgKIgCgFIgBgLIAAgFIgBgEIAAgOIgBgCIAAgEIAAgWIACgWIAAgCIABgCIAAgMIABg5IgBgBQgHgRgCgIIgCgJIgFgLIgHgTQgCgFABgDQABgIAGgBIADAAQADgBADACIAAgCIBcAAIABACQAFgEAGAFIAFAKIAHAOIAKAUIADAHQACAEAAAFIADASIAAAAQADAAAAAPIABgGIgBAEIgBAMIgBAMIgCAMIgBADIAAABIAAABIgBABIgDAPIAAAEIgBAEIgBAGIAAABIAAAJIAAACIAAACIABACIABACIAAABIABAAIABADIAKAHIAAABIAEACIAFABIAAgFIABgCQgBgUABgdIAAgJIAAgDIAAgLIABgDIAAgFIgBgIIgBgfIgKgiIABgBIgEgNIgCgDQgCgDgDgIQgDgJACACIABAAIgBAAIACAAIAGAAIAKAAIABAAIBegDIAAABIABAIIAEANQAFAMAHAaIAAABIABAEIAAACQAAADABADIACAEIAAAEIAAALIADASIAAAKIABAFIAAABIgDAhIABAFIAAAHQAAAJABAEIACAFIAAABIAAABIABAAIAAADIABAAIABAFIACADIABAAIACACIAEAFIAGADIAEABIADACIACABIADAAIACAAIABAAIABABIACABIAEABIAFAFIABACIADACIADAEIADAFQAAABAAABQAAABAAAAQAAABAAAAQABABAAAAIABAGIACADIgBATIgBADIAAADIgCAEIgCACQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIgCABIAAACIgCADQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIgEACIgBAAQgEAEgFACIgJAAg");
	this.shape_12.setTransform(20.195,23.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8F3A0F").s().p("ABPCVIgigBIgCgBIgFABIgJgBIgJgDIgJgHIgBgCIgDgHIAAgDIgCgOIAAgDIgCAIQAAACgDADQgEAEgFADQgDAAgLAAQgRADgIAAIgWgCQgPgEgIAAQgLAAgGAAIgDgBIgHgBIgKgCQgDgBgGgEIgBgDQgCgCgBgDIAAgBIgCgGIgBgCIAAgCIgCgGIgBgLIAAgFIAAgDIgBgQIAAgBIgBgFIABgVIABgVIABgEIABgCIAAgKIAAg7IAAgCQgFgQgEgIIgEgGIgFgMQgEgLAAgLIAAgFIAAgBIACgEQABgDAEgBIADgBIACAAIABAAIAAgBIBkAAIAEAFIADAIIAFAHIATAnQADAFAAADIABACIAAAEIABAKIAAACIACACIAAACIAAAFIgBANIgBAKIgDAOIgBACIAAABIAAABIgBABIgDAPIAAAEIgBAEIAAAGIgBABIAAAJIABACIgBADQAAAHADAEIADAEIAFACIAGACIAAAAIABAAIACAAIADgBIABAAIAAgBIAAAAIABgCIgBgCIABgCQgBgUABgdIgBgJIABgDIAAgLIAAgDIAAgEIgBgJIAAgPIABAAIgJgkIgGgTIAAAAIgBgFIgKgaIAegCIBXAAQgBAEAEAMIABADQACAEACAFIAIAXIADAIQABAFAAAFIADANIABAQIgBALIgCAKIAAAQIgBAGQACANgBAJQAAAMABADIABABIABAGIABADIAAACIABACIAAAAIABADIAAAAIACAEIACADIAAAAIADACIAEAGIAGADIAEAAIADACIACAAIADAAIABABIABAAIACABIACABIAEACIAEADIABACIADAEIADADIADAGQAAAAAAABQABABAAAAQAAABAAAAQAAABABAAIABAHIABABIAAAUIgCAEIAAADIgBACIgCAEQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAIgCABIAAACIgCADQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgFACIAAAAQgEADgFABIgKABgAh7CWIgBAAIACAAg");
	this.shape_13.setTransform(20.3125,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:18.9458}}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape,p:{x:19.4458}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,8.6,35.7,31);


(lib.hilazonhands = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3D072").s().p("AiLD/QgSgIgEgVQgFgVAGgKQAGgLAGgFIANgLIANgMIANgMIANgMIANgLIADgDIABgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABgCIABgBIABgCIABgBIACgCIABgBIAAgBIACgBIAAgCIABgBIACgBIABgDIABgBIACgBIABgCIABAAIABgCIADgGIADgFIADgFIAFgFIAEgFIADgDIAKgPIALgOIAMgPIANgNIARgOIAFgFQAFgOAMgMIADgBIATgfQAKgOAIgKIglACIgDADIgKALIgMAKIgKAJIgHAGIgGAIIgFAHIgGAIIgGAKIgGAIIgEAEIgCAEIgDAFIgDAEIgDAFQgCABgBADIgFAEIgBABIAAACIgCABIAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgCACIgBABIgBABIgBABIgBACQgOASgTAPIgXAUQgUAUgZAQQgEADgGACQgUAFgSgIQgSgIgFgVQgEgVAFgKQAHgLAGgFIAMgLIANgMIANgMIAOgLIANgLIADgDIABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABgCIABgBIACgCIABgBIABgCIACgBIAAgBIABgBIABgCIABgBIACgBIAAgDIABgBIACgBIABgCIACAAIABgCIACgGIADgFIADgFIAFgFIAFgFIADgDIAJgPIALgOIANgPIANgNIASgPIAEgFQAFgOAMgMIADgBIATgfQALgQAJgLIADgEIACgBIABgBIAQgRQAHgGAGACIAEABIAFAEQAEAEgBAGIgHALIgIAMIAGgBIALgGIAMgEIABgBIAPgFQAGAAACACIADADQADABABAEQADAFgDAEIgGAGIgLAHIgGAEIgHAHQAUgHASgEIADgCIABABIAJgDIAHAAQAHABABAHIAAAFQgBAFgDADQgDADgGADQgLAGgKADIgSAKIgBACIAFgCIAFAAIARgFIAPgDIABABIACgCQAGgBAEAEIABABQAGACACAGQACAJgHAEIgFACIgIABIgFACIgNACIgDABQgGACgHAEIgFADIAEAAIAWAFQAGACACACIABADQAEAIgGAIIgHACIgDABIAAAAIgJAMIAHgBIALgGIAMgEIAAgBIAQgFQAFAAADACIADADQADABABAEQACAFgCAEIgGAGIgMAHIgGAEIgHAHQAUgHASgEIAEgCIAAABIAJgDIAHAAQAIABABAHIgBAFQgBAFgCADQgDADgGADQgLAGgLADIgRAKIgCACIAGgCIAFAAIARgFIAPgDIAAABIADgCQAFgBAFAEIAAABQAGACACAGQADAJgHAEIgGACIgIABIgFACIgMACIgEABQgFACgHAEIgFACIAEAAIAVAFQAHACABACIACADQADAIgGAIIgGACIgHABIgFgBIgBAAIgEABIgDgBIgXAEQgXADgSAAIgCADIgKALIgMAKIgLAJIgGAGIgHAIIgGAHIgGAIIgFAKIgHAIIgEAEIgCAEIgDAFIgCAFIgDAFQgDABgBADIgEAEIgCABIAAACIgBABIgBABQAAAAAAAAQAAAAAAABQgBAAABAAQAAABAAAAIgDACIAAABIgCABIgBABIgBACQgMASgTAPIgXAUQgVAUgYAQQgEADgGACQgIACgIAAQgMAAgLgFg");
	this.shape.setTransform(-31.4184,25.9845);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3D072").s().p("Ah6EGQgSgGgGgVQgGgUAFgLQAGgLAFgGIALgMIAMgMIANgNIAMgOIAMgMIADgDIABgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAIABgBIABgCIACgCIABgBIABgCIABgBIAAgBIACgCIAAgCIABgBIACgBIAAgCIABgBIACgCIABgCIABAAIABgCIACgGQACgCABgDIADgGIAEgFQABgDADgCIADgDIAIgQIAKgPIAMgQIALgNIARgQIAEgFQAEgOAKgNIADgCIASggQAIgPAIgLIglAGIgDACIgIAMIgMALIgKAKIgGAGIgFAJIgFAIIgFAIIgFAKQgCAEgEAEIgEAFQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIgDAFIgCAEIgDAGQgCABgBADIgEAEIgCABIAAACIgBABIAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIgCACIgBABIgBACIgBABIgBABQgMAUgSAQIgVAWQgTAVgXASQgEAEgGACQgTAHgUgIQgSgGgGgUQgGgVAEgLQAGgLAGgGIALgMIANgMIAMgNIAMgNIANgLIACgDIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBgBAAIABgBIABgCIABgCIABgBIACgCIABgBIAAgBIABgBIABgCIABgBIACgBIAAgDIABgBIACgCIABgBIABgBIABgCIACgGIADgFIACgGIAFgFIAEgFIADgDIAIgQIAKgPIALgQIANgNIAQgRIAFgFQAEgOALgNIADgCIARggIARgdIADgDIABgBIABgCIAPgSQAGgHAHACIADABIAGAEQAEADgBAGIgFAMIgIANIAHgCIAKgHIAMgFIAAgBIAPgGQAGgBACACIAEADQADABABAEQADAEgCAFIgGAGQgHAHgEABIgGAEIgGAIQATgJASgFQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAAABIAJgDQAFgCACABQAHAAACAHIAAAGQgBAFgCACQgDAEgGADQgKAHgKAEIgRALIgCABIAGgBIAFgBIAQgGIAPgEIABABIACgCQAGgCAEAEIABABQAGABADAGQADAJgHAFIgNAEIgFABIgMAEIgEABQgFACgHAFIgFADIAEAAIAWAEQAHABABACIACADQAEAIgFAHIgJAEIgBABIgIAMQAEAAADgBQAEgCAGgFIAMgFIABgBIAPgHQAFAAADACIADADQADABABADQADAFgCAFIgFAGIgLAIIgGAEIgHAIQAUgJASgFIADgCIAAABIAJgEIAHgBQAIABABAHIAAAFQAAAFgDADQgCAEgGADQgLAHgKAEIgRALIgBACIAFgCIAFgBIARgGIAPgEIAAABIACgCQAGgCAFAEIAAABQAGACACAFQAEAJgHAFIgFACIgIACIgFACIgMADIgEABIgMAHIgEADIAEAAIAVAEQAHABACACIABADQAFAGgGAIIgGADIgHABIgFAAIgBAAIgEABIgDAAIgWAFQgYAFgRABIgCADIgKAMIgLALIgKAKIgGAGIgGAIIgFAIIgGAJIgEAKIgGAIIgEAEIgBAFIgDAFIgCAFIgDAFQgCACgBADIgEAEIgBABIAAACIgCABIAAABQAAAAAAABQgBAAAAAAQAAABABAAQAAAAAAABIgDABIAAABIgCACIgBABIAAACQgNATgQARIgWAVQgTAVgXASQgEADgGACQgKAEgJAAQgKAAgKgEg");
	this.shape_1.setTransform(-32.4881,24.8368);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3D072").s().p("AiiDxQgRgJgCgVQgDgVAHgKQAIgLAGgEIAOgKIAOgKIAOgKIAPgLIAOgKIADgCIABgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgCIABgBIACgCIABgBIABgBIACgBIAAgBIACgBIABgCIABgBIACgBIAAgCIACgBIACgCIABgBIABAAIACgCIADgFIADgFIAEgFIAFgFIAFgEIAEgCIALgOIAMgNIAOgOIAOgLIATgNIAFgEQAGgNANgLIAEgBIAWgdIAUgWIglgBIgDACIgLAKIgNAJIgLAIIgIAFIgHAHIgHAHIgFAHIgGAJIgIAHIgEAEIgDAEIgDAFIgDADIgEAFQgCABgCACIgFAEIgBABIAAACIgCABIgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgDABIgBABIgBACIgBAAIgBACQgQARgUAMIgZASQgXARgaAOQgEADgGABQgVADgRgKQgRgKgCgVQgDgWAHgJQAHgKAHgFIAOgJIANgKIAPgKIAOgLIAOgKIAEgDIABAAIABgBIABgCIABgBIACgCIABgBIABgBIACgBIAAgBIACgBIAAgCIABgBIADgBIAAgCIABgBIADgBIABgCIABAAIACgCIADgFIADgFIAEgFIAFgEQACgDADgCIADgCIALgOIANgOIAOgNIAOgLIAUgOIAEgEQAHgNAMgLIADgBIAXgdQAMgOALgKIADgEIACAAIABgCIASgPQAHgFAHACIADACIAFAFQADAEgBAGIgIAKIgKALIAHAAQAEgBAHgEIAMgDIABAAIAQgEQAGAAACADIACADQADACABADQACAGgDAEIgHAEIgMAGIgGADIgIAHQAVgFASgCIAEgCIAAABIAKgCQAFAAACABQAHABAAAHIgBAGQgBAFgDACQgDADgHADIgWAGIgTAJIgBABIAFgBIAFAAIASgDIAPgCIABABIACgBQAGgBAEAFIAAABQAGADABAGQACAJgHAEIgGABIgIAAIgFABIgNABIgEABQgFABgIADIgFADIAEAAIAVAIQAGADABACIACACQACAJgHAHIgJACIgBAAIgKALQAEABADgBQAEgBAIgFIAMgCIABgBIAQgEQAFABACACIADAEQACABABAEQACAFgDAEIgGAFIgMAHIgHADIgHAGQAUgFASgCQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAAABIAKgBIAHAAQAHACAAAHIgBAFQgBAFgDACQgDADgHADQgLAEgLADIgSAIIgCABIAGgBIAFAAIARgCIAPgCIABABIACgCQAGgBAEAFIAAABQAGADACAGQABAIgHADIgGACIgIAAIgFABIgNABIgEABIgNAEIgEACIAEABIAUAIQAGACACACIABAEQACAIgGAHIgHACIgHgBIgFgBIgBAAIgEAAIgDAAIgXABQgXAAgSgBIgDACIgLAKQgGAFgHADIgLAJIgHAFIgHAHIgHAHIgHAHIgGAJIgIAHIgEAEIgDAEIgDAFIgDAEIgEAFQgCABgBADQgDABgCACIgCABIAAACIgCABIAAAAIgBADIgCABIAAABIgCABIgBABIgBACQgQARgUANIgZARQgWASgbANQgEADgGABIgJAAQgPAAgOgIg");
	this.shape_2.setTransform(-31.7222,27.9193);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-1.7,46.6,54.6);


(lib.hilazoneyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF9").s().p("AAAAOIgBAAIgBAAQgFgCgBgEQgDgCAAgEIABgEIABgDIAAgBIABgBIACgDIABgBIAFgCIAAAAQAGAAADAFIABACQACADAAAEIgBABIAAADQAAADgDAEIgDABIgBABIgBAAIgCAAIgBAAg");
	this.shape.setTransform(2.3,3.8939);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBF8E2").s().p("AgBAxIAAgBQgEgEgFgDQgFgDgHgCIgBAAIAAgBQgfgPALgqIAAgBIABAAQAFgMAKgHIAAgBIAHgEIAAAAIAAABIABAAQAfgFARAPQANAKAEAXQADAzgyABgAgdgZIgCACIAAABIgCACIgBADIgBADIAAADIAAABIAAABIAAACIAAADIAAABIAAABIAAACIABABIAAADQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAAACIACADIAAACIABAAQAFALAMADIAAABIAAAAIACABIADAAIACAAIAEgBIACgBIADgCIABgBIACgCIABgBIABgBIAAAAIAAgBIABAAIACgFIABgBIAAAAIAAAAIAAgCIABgBIAAgFIABgDIAAgDIgBgDIAAgDIgBgDIgCgGIgCgDQgGgJgLgEIgBAAIgEAAIgDAAIAAAAIgBAAIgCABIgCAAIgCABIgBABIAAABIgBAAIgBACIgBAAIAAAAIgBABg");
	this.shape_1.setTransform(4.6521,4.8875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#391602").s().p("AACAfIgCAAIgBgBIgBAAIAAgBQgLgDgGgLIAAAAIgBgCIgCgDIAAgCIAAAAIgBgCIAAgDIgBgCIAAgBIAAgBIAAgBIAAgDIAAgCIAAgBIAAgBIAAgDIABgDIABgDIADgCIAAgBIACgCIAAgBIAAAAIABAAIABgCIABAAIAAgBIABgBIACgBIACAAIACgBIABAAIAAAAIAEAAIACAAIABAAQAMAEAGAJIACADIADAGIABADIAAADIAAACIAAAEIAAADIgBAFIAAABIAAACIgBAAIAAAAIgBABIgCAFIgBAAIAAABIAAABIgBABIAAAAIgCACIgCABIgEACIgBABIgFABIgCAAgAgSgSIgCADIgBABIgBABIAAAAIgBADIgBAFQAAAEADABQACAFAEABIABAAIABAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIABAAIAAAAIADgCQADgEABgCIAAgDIAAgBQAAgFgCgDIAAgCQgDgFgGAAIgBAAIgFABIAAAAgAgVAGIAAgBIgBAAg");
	this.shape_2.setTransform(3.55,4.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBF8E2").s().p("AgBAxIAAgBQgEgEgFgDQgFgDgHgCIgBAAIAAgBQgfgPALgqIAAgBIABAAQAFgMAKgHIAAgBIAHgEIAAAAIAAABIABAAQAfgFARAPQANAKAEAXQADAzgyABgAgdgZIgCACIAAABIgCACIgBADIgBADIAAADIAAABIAAABIAAACIAAADIAAABIAAABIAAACIABABIAAADQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAAACIACADIAAACIABAAQAFALAMADIAAABIAAAAIABAAIACgCIABgBIACgCQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAAAIACgEIADgKIAAgNQAAgKgIgGIgHgDIgHgDIgBAAIgBAAIgBABIAAABIgBAAIgBACIgBAAIAAAAIgBABg");
	this.shape_3.setTransform(4.6521,4.8875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#391602").s().p("AAFAdIgBAAIAAAAQgKgEgGgKIAAgBIgBgCIgBgDIAAgBIAAgBIgCgCIAAgDIgBgCIAAAAIAAgBIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIABgDIACgEIACgCIAAgBIACgBIAAgBIABAAIAAgBIACgCIAAAAIABgBIABAAIAAgBIACABIAGACIAGAEQAJAGAAAKIgBANIgCAJIgCAFIgBAAQAAAAAAABQAAAAAAAAQAAABgBABQAAAAAAABIgDACIgBABIgBACIgBgBgAgLgSIgCACIgBACIAAAAIAAABIgBACIgBAFQAAAFADABQABAEAEABIABAAIABAAQABAAAAABQABAAABAAQAAAAABAAQABgBAAAAIABAAIAAAAIACgCQAEgDAAgDIAAgCIABgCQAAgFgCgCIgBgCQgDgFgFAAIgBAAIgEABIgBAAgAgOAFIAAgBIAAAAg");
	this.shape_4.setTransform(2.825,4.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFAF9").s().p("AAAAOIAAAAIgBAAQgFgCgBgEQgDgCAAgEIABgEIABgDIAAgBIABgBIACgDIABgBIAEgCIABAAQAEAAACACIACAEIAAACIABAIIABACIAAADIgCAEIgDABIgBABIgBAAIgCAAIgCAAg");
	this.shape_5.setTransform(2.2,3.8939);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#391602").s().p("AgFAQIgBAAIAAgCIgCgDIAAgCIAAAAIgBgCIAAgDIgBgCIAAgCIAAAAIAAgBIAAgDIAAgCIAAgBIAAgBIAAgDIABgDIABgDIACgCIAAgBIACgCIABgBIAAAAIABAAIABgCIABAAIAAgBIAAgBIABAAIABAAIABAAQADAEABAEIAAAAIAAABQgCgCgEAAIgBAAIgDABIAAAAIgBACIgDADIgBABIAAABIAAAAIgBADIgBAFQAAAEADABQACAEAEACIABAAIAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAIAAAAIABgBIADgBIACgEIAAAGIAAAAIgBALIgCAFIgCADIAAACQgHgEgEgIgAgHAHIAAgBIgBAAg");
	this.shape_6.setTransform(2.175,4.5875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBF8E2").s().p("AgBAxIAAgBQgEgEgFgDQgFgDgHgCIgBAAIAAgBQgfgPALgqIAAgBIABAAQAFgMAKgHIAAgBIAHgEIAAAAIAAABIABAAQAfgFARAPQANAKAEAXQADAzgyABgAgdgZIgCACIAAABIgCACIgBADIgBADIAAADIAAABIAAABIAAACIAAADIAAABIAAABIAAACIABABIAAADQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAAACIACADIAAACIABAAQAEAIAIAEIAAgCIACgDIACgFIABgLIAAAAIAAgFIAAgDIgBgCIAAgJIgBgCIgBgEIgBgBIAAAAQgBgEgDgEIgBAAIgBAAIgBAAIgBABIAAABIgBAAIgBACIgBAAIAAAAIgBABg");
	this.shape_7.setTransform(4.6521,4.8875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBF8E2").s().p("AgBAxIAAgBQgEgEgFgDQgFgDgHgCIgBAAIAAgBQgfgPALgqIAAgBIABAAQAFgMAKgHIAAgBIAHgEIAAAAIAAABIABAAQAfgFARAPQANAKAEAXQADAzgyABg");
	this.shape_8.setTransform(4.6521,4.8875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape}]},7).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,9.8);


(lib.dogtail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F3A0F").s().p("AArEvQgSgEgVgHQgYgKgTgLIgBgEIgKgIQgOgJgRgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQgOgJgQgIQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgUgRgKggIgBgFQgFgQgKgLIgBgFQgHgYgNgSQAbABgThMIgDAAIAAgFQADgagOgKQAmAUAEgUIABgGIAAgFQgCgbgJgVIAGAAIAFAAQAWADAEgoIAAgGIAAgEQANgJABgOQAAgKACAAIABgCQAEgEADgPQADgPAIgbIADAAQARAnARgVIAOgTQApgSAkgaQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAOgGABAGIABAFQAFAQAQgHIAFgCIAHgCQARgIAMgEIARgIQAZgIASgLIAAADQAIAVgDAgIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQg4AvgsA7IgDAEIgRAYQgmA4gdA/IgCAJIgBADIgCAJIgCANQgFA8ARAoQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQASAqAuAOIAFAEIACAEIADAJIAAAHIAAACIgEAFIgLAvQgDANgCADIgCADIgEABIgIABIgFACIAAgCg");
	this.shape.setTransform(-53.4202,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F3A0F").s().p("AA2E4QgagGgVgJIgBgEIgKgFQgPgIgSgDQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQgQgHgRgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgWgOgPgeIgBgFQgHgPgMgJIgBgFQgLgXgPgRQAbgCgehIIgCAAIgBgGQgBgagPgJQAoAPACgVIgBgFIAAgFQgGgZgMgUIAGgBIAFgBQAWABgBgpIAAgFIgBgFQALgLgBgNQgBgLABABIABgCQADgGABgPQABgPAFgbIADgBQAWAkAOgXIAMgUQAmgYAfgeIABgEQANgIACAGIABAFQAIAOAPgIIAFgCIAFgDQAQgLAMgGIAIgGIADgCIAFgDIACAAIACgDQAFgFAEgDIARgKIAIgGIAJgHQAHgEAEAAIABABQAFgBADACQAEAEAAAHIAAAIIABAKQAAANgEAIIgCACIAAAAIgEAKIgHAMIgHAHQgtA0giA+IgDAEIgNAaQgfA9gTBDIgDAJIAAADIgBAJQgBAHABAGQAEA8AXAlQAAAAAAAAQAAAAABABQAAAAABAAQAAAAABAAQAYAmAvAIQAEABABACIADADIgSA2IgJAfIgBAGIgDAFQgPgCgRgEg");
	this.shape_1.setTransform(-56.625,6.2225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F3A0F").s().p("AB4FXIgdAAIgGAAIgEgBQgRgEgTACQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBgBgBAAQgSgDgTgCIgDgEQgZgIgYgdIgCgEQgMgOgOgGIgDgGQgRgUgUgOQAagKgyhFIgDABIgCgFQgIgbgSgGQAtAFgEgXIgCgFIgCgFQgOgagRgSIAGgCIAEgDQAXgFgMgqIgDgGIgCgEQAJgPgGgNQgEgLACAAIAAgCQACgHgEgRIgGguIADgBQAhAgAIgcIAFgZQAggkAYgoQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQALgNAEAGIACAGQAMANAMgOIAFgDIAEgFQANgQAKgJIAHgIIACgEIAEgEIACgBIABgDQADgHAEgEIAPgPIAFgJIAIgJQAGgHADAAIACAAQAEgCAEABQAFADACAHIACAJIAEAKQAEAOgCAKIgBACIgBAMIgEAOQgBAEgEAFQgfBEgQBKIgCAGQgEAPgCAQQgOBJAABLIAAAKIAAAEIACAKIADAOQAWA+AhAgQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAVAUAaAHIADABIALAFIAGABIAAABIACACQADACACAAIABAAIAFADIgKAqIgBALIgLAsQgLgCgSAAg");
	this.shape_2.setTransform(-62.1375,3.5304);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8F3A0F").s().p("ACuFcQhDAAgggGQgXgDghgKIg1gQIgLgDQAAgUg8gpIgCACIgFgGQgTgYgSABQArgMgOgWQgBgDgDgCIgEgEQgYgWgXgMIAEgEIADgEQATgOgdgoIgGgFIgDgEQABgSgLgMQgIgKABAAIAAgCQgCgIgKgQQgKgPgQgdIACgCQAtAUgFggIgGgcQAOgxAFgzQAAAAAAgBQAAAAgBAAQAAgBAAgBQgBAAgBgBQAGgRAGAFIAEAFQARAJAGgTIACgFIACgHQAFgVAGgOIADgLIABgFIACgFIAAgCIAAgEQABgJABgFIAHgVIABgLIAEgNQACgJADgCIABAAQAEgEAEAAQAGABAFAGIAFAJIAJAJQAJANACAKIABADIAEANIACAQQABAFgCAGQABBSARBSIABAHQADASAFARQASBPAfBOIAFALIACAEIAHAJIAIANQAvA3AsAVQABAAAAAAQAAABABAAQAAAAABgBQAAAAAAAAIAOAFIAHAFIAMAGIANADIAxAIIAAAAIABAAIAEABIABAAIAEAAIADACIACADIABACIAAAFIAAADIAAAGIgBAAIAAADIgFAaIAAAHQAAAIgCAIIgFASQgCAFgDACQgFADgEgCIAAABg");
	this.shape_3.setTransform(-69.65,3.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},4).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.9,-31.5,59.400000000000006,69.6);


(lib.dogrighteye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#284296").s().p("AgSAIIAAgGQAQADgFgSIAAgFIAJgEIAGgBQAMAOgCAbIAAAGIgFAAIgGAAQgUAAgFgQg");
	this.shape.setTransform(-46.0417,10.3149);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2D4D").s().p("AgDAXQgJgSACgcQARABAAAVIADAAIABADQAEATgPgDIAAAGQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_1.setTransform(-47.8601,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#667BBE").s().p("AAAANQAAgTgSgBIAAgFQAaAAAJAPQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIgGABIgKAEg");
	this.shape_2.setTransform(-47.125,7.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3EFEB").s().p("AANAwQABgcgMgPQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgJgQgaAAIAAgFIAAgLQAHgTAZgCIAEAAQA7A0gtA0QAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIAAgFg");
	this.shape_3.setTransform(-45.4514,7.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9C631C").s().p("AgSAHIAAgJQAHgIALgBQAFgBAHABIAGABIABACIgGABQgXACgIASIAAgGg");
	this.shape_4.setTransform(-47.125,2.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2D2D4D").s().p("AgDAXQgJgTACgbQARABAAAUIADAAIABAFQAEASgPgCIAAAFQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_5.setTransform(-47.8601,8.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3EFEB").s().p("AANAwQABgcgMgPQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgJgQgaAAIAAgFQAXADAaABQAQAAgJgOQAeApgkApQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIAAgFgAACg0IAAAAIAOANIgOgNg");
	this.shape_6.setTransform(-45.4511,7.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9C631C").s().p("AAUAUQgaAAgXgEIAAgLIAAgFIAAgKQAGgHALgCQAGgBAFACIAHACQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAAIAOAOIAGAHQAJAOgQAAIAAAAg");
	this.shape_7.setTransform(-45.9646,3.6664);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#284296").s().p("AgSAHIAAgGQAQADgFgSIAAgFIAHgDIAIAAIABAAQALAOgCAZIAAAGIgFAAIgGAAQgUAAgFgQg");
	this.shape_8.setTransform(-46.0418,10.4649);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D2D4D").s().p("AgCARQgJgSAAgPQAEgBADACQADACAJABIAAAEIADAAIAAAFQAFARgQgCIAAAGQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_9.setTransform(-47.9007,9.3998);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#667BBE").s().p("AgEACIAAgDIABABQABAAABAAQAAAAABAAQAAAAAAgBQAAAAABAAIAAAAIACABIACAAIgGACg");
	this.shape_10.setTransform(-46.6262,8.2875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3EFEB").s().p("AgFAwQABgagKgPIABAAQAcABABgLQAGAbgYAcQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIAAgFgAgQg0IAAAAIAOANIgOgNg");
	this.shape_11.setTransform(-43.5925,7.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9C631C").s().p("AgOAgIgBAAQgJgBgDgCQgEgCgDAAIABgSIAAgPIAAgGIAAgKQAGgIALgBQAGgBAFABIAHACQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAAAIAOAOIAGAIQAHAJAEAKIABAGIAAABQAAAMgdgBIgCAAIAAAAIgIAAIgCAAIgDAAIAAAAIgDABIgCgBg");
	this.shape_12.setTransform(-45.5578,4.9131);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D2D4D").s().p("AACAFIgEgKIABACIABADIAAABIABAAIABACIAAABIABACIgBgBg");
	this.shape_13.setTransform(-48.4,10.5625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3EFEB").s().p("AgGgGIAAAAIANANIgNgNg");
	this.shape_14.setTransform(-44.5875,2.7875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9C631C").s().p("AgWArIgCgDIgBgBIAAgBIgBgBIgBgCIgBgBIAAgBIgCgDIgBgCIgBgCIgBgFIAAgBIgBgBIAAgCIgBgDIAAgFIAAgFIABgRIAAgQIAAgGIAAgKQAHgIALgBQAGgBAFABIAGACQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIgBAAIAOAOIAHAIQAHAKADAKIACAGIAAABQAGAbgYAcQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgFAAIgGABQgSAAgGgNg");
	this.shape_15.setTransform(-45.5137,7.2187);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{y:2.875}},{t:this.shape_3,p:{y:7.375}},{t:this.shape_2,p:{y:7.125}},{t:this.shape_1},{t:this.shape,p:{y:10.3149}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_2,p:{y:7.175}},{t:this.shape_5},{t:this.shape,p:{y:10.3649}}]},15).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_2,p:{y:7.175}},{t:this.shape_5},{t:this.shape,p:{y:10.3649}}]},2).to({state:[{t:this.shape_4,p:{y:2.925}},{t:this.shape_3,p:{y:7.425}},{t:this.shape_2,p:{y:7.175}},{t:this.shape_5},{t:this.shape,p:{y:10.3649}}]},2).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,1.6,7.200000000000003,11.200000000000001);


(lib.dogmouthlove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E14565").s().p("AgNAYIgBAAIgCgBIgBgBIgCgCQgJgJgHgKIgLgPIgCgFQgEgHgCgIIAAgBIAAgCIAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIADABIAIACIAdAHIAEABIADABIAFABIAIAEIABABQAiAKAMAgIABAFIgEABQgPANgQAAQgRAAgRgQg");
	this.shape.setTransform(5.5875,3.9826);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E14565").s().p("AAMArIgBgBIgDAAIgCAAIgDgCIgDgDIgBgBIgCgCIgBgBIgBgBIgKgLIAAAAIgBgBIgBgCIgCgBQgJgKgHgIIgLgQIgCgFQgEgHgCgJIAAAAIAAgCIAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIADABIAIACIAdAHIAEABIADABIAFABIAIAEIABAAQAiALAMAfIABAGIgBAAIAAADQgBAFgEAFIgCABIgEACIgLADIgNABg");
	this.shape_1.setTransform(5.5875,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E14565").s().p("AAWAwIgGgBIgEgDQgJgGgHgKIgJgKIgEgCIgGgFQgGgFgGgIIgHgKIgIgNIgFgPQgCgEADgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIACAAIABABIABAAIAGACIAeAHIADAAIAEABIAEACIAJAEIAAAAQAiALANAfIAAAEIABAGIAAAGIgBADIAAABIgBAEIgDAGIgCADIgEACQgGABgIAAIgKAAg");
	this.shape_2.setTransform(5.7194,4.8281);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E14565").s().p("AAQA1IgKgDIgEgCIgBAAIgDgBIgFgEQgGgGgEgJIgCgCIgDgGIgVgmIgCgFIgFgIIgFgPQgCgDADgCQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAIACABIABAAIABABIAGABIAeAHIADABIAEABIAEABIAJAEIAAABQAiAKANAgIAAADIABAHIAAAJIAAABIAAAHIgBAEIgBABQgBAEgCACIgEAEQgDADgMABIgBAAIgGABg");
	this.shape_3.setTransform(5.7194,5.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_1}]},6).to({state:[{t:this.shape}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.4,10.8);


(lib.DOGeye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#090F31").s().p("AgCAMQgDgCgDgFIAAgBIAAgBIAAgEIAAgGIAAAAIAKgFQACgCADAAIACAAIAAABIAAAOQgCAOgFAAQgCAAgCgDg");
	this.shape.setTransform(60.725,12.9397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A358A").s().p("AgJAPIgDgFIgBgDIAAgBIABgDIAAgDIAAgBIAAgCIAAgDIAAgBIABAAIACgBIABgBIAAgCIACgCIABgBIABgBIAAAAIADgDIACgBIACAAIABAAIACAAIADgBIAAAAIABAAIABABIgBAAIgBAAIgDACIgBABIAAAAIgBABIgDADIgBADIAAACQAAAGAEABIACAAIAGAAIABAAIAAACQgCAAgCACIgLAEIAAABIAAAGIAAAFIAAABQgDAAgEgGg");
	this.shape_1.setTransform(60.05,11.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#576FBB").s().p("AACAJIgBAAIgFAAIgDAAQgEgBAAgHIAAgBIABgCIADgEIABgBIAAAAIACgBIABAAIACAAIAAAAIADAAIAHABQADACAAADIAAABQABACgHAGIgBABIAAAAIgBABIgCAAg");
	this.shape_2.setTransform(61.2492,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#203D97").s().p("AgBApIgHgBIgFgDQgGgDgDgHIAAgBIAAgBIAAgBIgBgBIAAAAIgCgEIgDgJIgBgGQgBgKABgGIADgGIABgCIABgCIAGgKIAAAAIABgCIABgBIAEgCIADgBIAAAAIABAAIAFgBIAEAAIACABIABAAIACABQALAHAGAIQAFAGACAIQABAGgBAGQgCAJgGAKIgCACIgLAMIgBACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAgAgQgSIAAADIAAADIAAABIAAADIgBAEIAAABIABACIADAFQAEAFADAAIAAABQADAFADACQAJAJACgTIABgPIAAgBIgDAAIAAgBIABAAIACgBIABgBIAAAAIAAgBQAHgGAAgDIAAgBQgBgDgDgCIgGgBIgEAAIgBAAIAAAAIAAAAIgBAAIAAAAIgBAAIgBAAIACgBIABAAIABAAIgBgBIAAAAIgBAAIgCABIgCAAIAAAAIgCAAIgDABIgDACIAAAAIgBABIgBABIgCADIAAACIgBAAIgCABIgBAAg");
	this.shape_3.setTransform(60.4875,12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9C631C").s().p("AgfAMIAAgDIAAgMQAPgMAgABQAGAAAGABIADABIABABIAAACIgKAAQgoADgNAVIAAgDg");
	this.shape_4.setTransform(60.875,5.692);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7F6F7").s().p("AgTBCIgFAAQgHgDgGgJQgMgUgDggQgBgKADgIQAAgIAFgJIAGgJIAAADQAMgWApgDIAJAAIAAgCIAFACIADABIAAAAIACACIABABIAAACQAZA3gIAdQgBAIgDAGQgFAKgHAFIgGAEIgHAEIgGACQgMACgKAAIgNgBgAgZgZIgEADIgBABIgBABIgIAOIgDAGQgBAFABALIABAGQACAIADAFIAAAAIABACIAAABIAAABIAAAAQAEAKALADIAGABIAGAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIACgBIAJgNIACgCQAGgKACgJQACgHgCgGQgBgGgGgHQgGgIgKgHIgCgBIAAAAIgDgBIgFAAIAAAAIgFABIgBAAIAAAAIgDABg");
	this.shape_5.setTransform(61.7327,11.1614);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7F6F7").s().p("AgTBBIgFAAQgHgDgGgJQgMgUgDggQgBgKADgIQAAgIAFgJIAAAAIABADQABABAEAAIAOgGQAVgIAMACIAQAHIAIAFIAEAFQAGAEACgFQACgCgBgDIgBgEQANAlgGAXQgBAIgDAGQgFAKgHAFIgGAEIgHAEIgGACQgMACgKAAIgNgBgAgZgaIgEADIgBABIgBABIgIAOIgDAGQgBAFABALIABAGQACAIADAFIAAAAIABACIAAABIAAABIAAAAQAEAKALADIAGABIAGAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIACgBIAJgNIACgCQAGgKACgJQACgHgCgGQgBgGgGgHQgGgIgKgHIgCgBIAAAAIgDgBIgFAAIAAAAIgFABIgBAAIAAAAIgDABgAAhg8IgCgBIAAgBIgBgBIgBgBIgCgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIADABIAAAAIACACIABABIAAACIAAAAg");
	this.shape_6.setTransform(61.7329,11.2541);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9C631C").s().p("AAlAWIgFgFIgHgGIgQgGQgNgDgUAJIgOAGQgEAAgBgCIgCgCIACgGIABgEIAEgOQAPgNAgACQAGgBAGACIAAAAIADAAIABABIAAABIABAAIACACIABABIABAAIABABIABABIACABIABACIADADIAAAAIABADIABABIAAABIABAAIAAADIAEAMIAAADQABADgBACQgBABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgEgBg");
	this.shape_7.setTransform(61.682,6.514);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#576FBB").s().p("AACAIIgBAAIgFAAIgDAAQgEgCAAgGIAAgBIABgDIACgDIATABIABACIAAABQABADgHAFIgBABIAAAAIgBABIgCABg");
	this.shape_8.setTransform(61.2492,10.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1A358A").s().p("AgJAMIgDgFIgBgDIAAAAIABgEIAAgDIAAgBIAAgCIAAgDIAAgBIABAAIACgBIABgBIAAgBIACgDIABgBIAAAAIAHAAIABAAIgCACIgBAEIAAABQAAAHAEABIACAAIAGAAIABAAIAAACQgCAAgCABIgLAFIAAAAIAAAGIAAAFIAAABQgDAAgEgGg");
	this.shape_9.setTransform(60.05,11.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#203D97").s().p("AgBAiIgHgBIgFgCQgGgEgDgHIAAAAIAAgBIAAgBIgBgCIAAAAIgCgEIgDgJIgBgFQgBgLABgGIADgGIABgCIABgCIAOgDIABgBIAAABIgBAAIgCADIAAACIgBABIgCABIgBgBIAAABIAAADIAAADIAAABIAAAEIgBADIAAABIABADIADAFQAEAFADAAIAAAAQADAFADADQAJAJACgUIABgOIAAgBIgDAAIAAgCIABAAIACgBIABgBIAAAAIAAgBQAHgGAAgDIAAgBIgBgCIABAAIADADQAFAHACAHQABAGgBAHQgCAIgGAKIgCACIgLANIgBABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_10.setTransform(60.4875,13.0875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7F6F7").s().p("AgTBBIgFAAQgHgDgGgJQgMgUgDggQgBgKADgIQAAgIAFgJIAAAAIAAABIAAABIgBACIgBADIAAABIgBAAIAAACIAAAAQAAACgCAEIAAACIABADIABABIABAAIADABQACABAFgBIgCAEIgDAGQgBAFABALIABAGQACAIADAFIAAAAIABACIAAABIAAABIAAAAQAEAKALADIAGABIAGAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIACgBIAJgNIACgCQAGgKACgJQACgHgCgGQgBgGgGgHIgCgDIAfABQAGABACgBIACgCQAAgCgBgDIAAgBIgDgJIAAgBIgBgEQANAlgGAXQgBAIgDAGQgFAKgHAFIgGAEIgHAEIgGACQgMACgKAAIgNgBgAAhg8IgCgBIAAgBIgBgBIgBgBIgCgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIADABIAAAAIACACIABABIAAACIAAAAg");
	this.shape_11.setTransform(61.7329,11.2541);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9C631C").s().p("AgrAdIgDgBIgBAAIgBgBIgBgDIAAgCQACgEAAgCIAAAAIAAgCIABAAIAAgBIABgDIABgCIAAgBIAAgBIABgFIACgEIAEgPQAPgMAfABQAGAAAGABIABABIACAAIABABIAAAAIACABIABABIACABIABABIABABIAAABIACABIABABIADAEIABAAIABACIABABIAAABIAAAAIAAAEIAEALIABAEIAAABIADAJIAAABQABADAAACIgCACQgCABgGgBIgfgBIgCAAIgTgBIgBAAIgHABIgBAAIgPADIAAAAIgFABIgCgBg");
	this.shape_12.setTransform(61.6302,7.167);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#090F31").s().p("AgEAAIAAAAIACAAIAEAAIADgBQgCADgDAAQgBAAgDgCg");
	this.shape_13.setTransform(60.875,14.1886);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#203D97").s().p("AgCANIgGAAIgGgDQgFgDgDgHIAAAAIgBgBIAAgBIgBgBIAAgBIAAgBIAKgBIAOgDIAAAAQAGAHADgJIADgBIAGAAIAHACIgEAGIgBADIgLALIgBACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_14.setTransform(60.5,15.1375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7F6F7").s().p("AgTBBIgFAAQgHgDgGgJQgHgLgEgPIABAAIAAABIADAEIAEABIADAAIABABIAAAAIABACIAAABIAAABIAAAAQAEAKALADIAGABIAGAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBIACgBIAJgNIACgCIAEgHIAbAFQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAIAEgBQACgBABgDIgDAJQgFAKgHAFIgGAEIgHAEIgGACQgMACgKAAIgNgBgAg0ABQgBgKADgIIAAABIAAALIgBAKIABALIAAACIgCgRgAA0gGIgCgGQAAgDgBgDIAAAAIgBgCIAAgBIgDgJIAAgBIgBgEQAIAXABAQgAAhg8IgCgBIAAgBIgBgBIgBgBIgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIADABIAAAAIACACIABABIAAACIABAAg");
	this.shape_15.setTransform(61.7232,11.2541);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C631C").s().p("AAoAyIgcgFIgHgBIgFAAIgDABIgEABIgEAAIgCAAIgOAEIgKABIgBAAIgCAAIgFgBIgDgEIAAgBIAAAAIgBgEIAAgBIgCgEIAAAAIAAgCIgBgLIABgLIAAgLIAAgBQAAgLAGgOIAEgIIACgIQAPgMAfABQAGAAAGABIABABIADAAIABABIAAAAIABABIACABIABABIABABIABABIABABIACABIABABIACAEIABAAIABACIABABIAAABIABAAIAAAEIAEAMIAAAEIAAABIADAJIAAABIABACIAAAAQACACAAADIABAGIABALIAAABIAAAIQAAAHgCAHIAAADQgCADgCABIgDABQgBAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_16.setTransform(61.8,9.467);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#203D97").s().p("AAAAAIAAAAIAAAAg");
	this.shape_17.setTransform(60.9875,15.7875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7F6F7").s().p("AgTBBIgFAAQgHgDgGgJQgFgIgDgKIAAABQADAGAHAIIAEAGIABABIAAABIAEAEIAGABIAGAAIABAAQADACAHAAIADAAIABgBQAJAAALgEIAEgBIABAAIADgCIABgBIADgBIgEADIgHAEIgGACQgMACgKAAIgNgBgAAmAzQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAIACgCIABgBIgGAGQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAgAAuAnIACgFIABgCIABgCIgDAJIgBABgAgwAbIABAAIAAABIgBgBgAg0ABQgBgKADgIIAAABIAAALIgBAKIABALIAAACIgCgRgAA0gGIgCgGQAAgDgBgDIAAAAIgBgCIAAgBIgDgJIAAgBIgBgEQAIAXABAQgAAhg8IgCgBIAAgBIgBgBIgBgBIgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIADABIAAAAIACACIABABIAAACIABAAg");
	this.shape_18.setTransform(61.7232,11.2541);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9C631C").s().p("AgDBEQgIAAgDgCIgBAAIgFAAIgHgBIgDgEIgBgBIgBgBIgEgGQgGgIgEgGIAAgBQgCgDAAgDIAAgBIAAgBIAAAAIgBgEIAAgBIgCgEIAAAAIAAgCIgBgLIABgKIAAgLIAAgBQAAgMAGgOIAEgIIACgIQAPgMAfABQAGAAAGABIABABIADAAIABABIAAAAIABABIACABIABABIABABIABABIABABIACABIABABIACAEIABAAIABACIABABIAAABIABAAIAAAEIAEAMIAAAEIAAABIADAJIAAABIABACIAAAAQACADAAADIABAGIABAKIAAABIAAAIQAAAHgCAHIAAADIgCACIgBACIgCAFIAAABIAAABIgBADIgBAAIgBACIgBABIgCACQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBACIAAAAIgCABIgEABIgBABIgDACIgBAAIgEABQgLAEgJAAIgBABgAgIAwIABAAIAAAAg");
	this.shape_19.setTransform(61.8,10.967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_3},{t:this.shape_1},{t:this.shape_2},{t:this.shape}]},15).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_3},{t:this.shape_1},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.4,4.2,10.699999999999996,13.7);


(lib.crumb2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACAHIgIgFQgDgCAAgCQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQADgBADAAQADAAACABQADACABAEQABAEgBADQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgEgBg");
	this.shape.setTransform(0.97,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.crumb2, new cjs.Rectangle(0,0,2,1.7), null);


(lib.BoomText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("", "normal 700 100px 'Arimo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 145;
	this.text.lineWidth = 100;
	this.text.alpha = 0.97254902;
	this.text.parent = this;
	this.text.setTransform(475,-384.25);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text);
	}

	this.text_1 = new cjs.Text("Boom", "normal 700 100px 'Arimo'", "#FF0000");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 145;
	this.text_1.lineWidth = 360;
	this.text_1.parent = this;
	this.text_1.setTransform(247.6,-228.55);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BoomText, new cjs.Rectangle(65.6,-386.2,461.4,302.9), null);


(lib.bone_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bone_1, new cjs.Rectangle(0,0,155,134), null);


(lib.birdeyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4F5F6").s().p("AghAgIgBgBIgCgDIgCgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBgCQgEgOgDgOIAAgHIABgEQADgLAIgLIABgBIAFgFIAAAAIACgBQARgQAgAAIAGAAIABAAIAFAAIAGABQAHABACACQAEAEgBAEIAAABQgKgEgKAAQgXAAgPAQQgQARAAAWIAAABQABAVAPAQIACACQALALAPADIAAADQgBAIgGAAQgNAAghghg");
	this.shape.setTransform(5.0188,6.5389);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#391602").s().p("AgJA2QgOgDgNgKIgCgCQgPgQgBgWIAAgBQAAgVAQgRQAQgQAWAAQAKAAAKADQALAFAIAIQAQARAAAVQAAAKgDAJQgFALgIAJIgIAGQgOAKgRAAIgJgBg");
	this.shape_1.setTransform(8,6.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4F5F6").s().p("AghAgIgBgBIgCgDIgCgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBgCQgEgOgDgOIAAgHIABgEQADgLAIgLIABgBIAFgFIAAAAIACgBQARgQAgAAIAGAAIABAAIAFAAIAGABQAHABACACQAEAEgBAEIAAABQgKgEgKAAIgCAAQgVADgLANQgMANgCAOQgDANAAALQABAKAHAJIAHAJQALALAPADIAAAAIAAADQgBAIgGAAQgNAAghghg");
	this.shape_2.setTransform(5.4688,6.5389);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#391602").s().p("AgIA3IAAgBQgPgDgMgKIgIgJQgHgJAAgKQAAgLACgNQADgOAMgNQALgNAVgDQAJAAAIADQALAFAIAIQAQARAAAVQAAAKgDAJQgEALgJAJIgIAGQgOAKgQAAIgFAAg");
	this.shape_3.setTransform(8.3973,6.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E4F5F6").s().p("AghAgIgBgBIgCgDIgCgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBgCQgEgOgDgOIAAgHIABgEQADgLAIgLIABgBIAFgFIAAAAIACgBQARgQAgAAIAGAAIABAAIAFAAIAGABQAHABACACQAEAEgBAEIgBAAIgDABQgHAAgDACQgIADgKAGQgKAHgGAHQgGAGgDAJQgCAIAAAKQAAALAEAGIAJAPQAGAIAKAHIAAAAIAAADQgBAIgGAAQgNAAghghgAAxg0IABAAIAAABIgBgBgAAyg0g");
	this.shape_4.setTransform(5.4688,6.5389);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#391602").s().p("AgOA1IAAAAQgKgHgGgIIgKgOQgEgHAAgLQAAgKACgIQADgIAHgHQAGgGAKgHQAKgHAHgDQADgBAHgBIADAAIABAAIAAAAIAOAMQAQARAAAXQAAAJgDAJQgEAKgJAJIgIAHQgOAKgQAAIgFgBg");
	this.shape_5.setTransform(8.974,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E4F5F6").s().p("AgjAgIgBgBIgCgDIgCgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBgCQgEgOgDgOIAAgHIABgEQADgLAIgLIABgBIAFgFIAAAAIACgBQARgQAgAAIAGAAIABAAIAFAAIAGABQAHABACACQADAEAAADIADAEIAAAAQADAFgDAFIgJAKQgKAQgCAGIgDAHIgDAXIAAAIIACAHQABAGgCAFIgDAFIgEADIAAAAQgBAIgGAAQgMAAgighg");
	this.shape_6.setTransform(5.6992,6.5389);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#391602").s().p("AgbA0IADgFQACgFgBgHIgDgGIAAgIIAEgYIACgHQACgFALgQIAIgKQADgFgDgFIALAKQAQARAAAWQAAAJgDAJQgFALgIAJIgIAGQgNAKgRAAIgBAAg");
	this.shape_7.setTransform(10.7,6.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#391602").s().p("AgPAqIAEgNQADgWADgKIAHgYQAEgNgCgIIAFAEQAQARAAAXQAAAJgDAJQgEAKgJAJIgIAHQgLAIgOACQAFgDAEgFg");
	this.shape_8.setTransform(11.075,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E4F5F6").s().p("AgmAgIgBgBIgCgDIgCgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBgCQgEgOgDgOIAAgHIABgEQADgLAIgLIABgBIAFgFIAAAAIACgBQARgQAgAAIAGAAIABAAIAFAAIAGABQAHABACACIACADIADACQAFADABAFIABADQACAJgEANIgIAWQgDALgDAXIgEAMQgEAGgFACIgBAAIgFABIgEACQgBAIgGAAQgLAAgjghg");
	this.shape_9.setTransform(6.0583,6.5389);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E4F5F6").s().p("AgwAgIgBgBIgCgDIgCgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBgCQgEgOgDgOIAAgHIABgEQADgLAIgLIABgBIAFgFIAAAAIACgBQARgQAgAAIAGAAIABAAIAFAAIAGABQAHABACACIACADIADACQAFADABAFIABADIAFAFQAQARAAAWQAAAKgDAJQgEAKgJAJIgIAHQgMAIgOABIgBAAQgDABgDAAIgDACIAAAAQgBAIgFAAQgNAAgighg");
	this.shape_10.setTransform(6.975,6.5389);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#391602").s().p("AgPAqIAEgNQADgWADgKIAHgYQAEgNgCgIIAFAFQAQAQAAAXQAAAJgDAJQgEALgJAJIgIAGQgLAIgOABQAFgCAEgFg");
	this.shape_11.setTransform(10.975,6.9875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E4F5F6").s().p("AgmAgIgBgBIgCgDIgCgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBgCQgEgOgDgOIAAgHIABgEQADgLAIgLIABgBIAFgFIAAAAIACgBQARgQAgAAIAGAAIABAAIAFAAIAGABQAHABACACIACADIADACQAFADABAFIABADQACAJgEANIgIAWQgDALgDAXIgEAMQgEAGgFACIgBAAQgDABgCAAIgEACIAAAAQgBAIgGAAQgLAAgjghg");
	this.shape_12.setTransform(5.9542,6.5389);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},11).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.6,13.1);


(lib.BirdsrightWings = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("AhSBqQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQhagQglhEQAlg6AngrIACgBQAzAaBNARIADAAIADAAQBogcBDgvIABABQAFAxgNAgIgCAAQAGAQAjgbQAMgOgLAPQg7BSAyACIACAAQgvBJiFAAQgtAAg4gJg");
	this.shape.setTransform(243.4325,104.5033);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AhUBhQhegPglhGQAlg8AogsIADgBQA0AbAmAKQAlAKADADQADAEA/ACQBBACA0hbIACAAQAFAzgOAhIgCAAQAHAQAjgbQAQgGghA8QggA8ApgcIACAAQgsBehqAAQg7AAhQgeg");
	this.shape_1.setTransform(243.7639,105.6957);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AhRBkQg+gfhHhBQAlg7AogsIADgBQA0AbAWAPQAXAPAWARQAUARA/gGQA/gFAuhxQACAAgDA1QgCAfgBAFQAKAFAbgVQAQgGghA8QggA7AqgbIABAAQg8BshlAAQg3AAhFgigACrgtIgBgEIgCAAIADAEg");
	this.shape_2.setTransform(243.8139,106.5331);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("ABsB+QgWgBgtgJQgtgJgUgCQg+gFgrgmQgZgWgxhDQAkg5AkgoIADgBQAxAaAUANQATAMAXASQASAPANAIQAaAPAZAEIBDAHQAvABATgRQgBATgbARIgaAPQAGADATAAQAXgBALgJQACgBgbAdIgEAEIgFAKQgOAZAMgBQAIgBAZgQQgRA4hCAAIgJAAg");
	this.shape_3.setTransform(242.704,109.6875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AApB5IhEgIQhAgFgtgoQgZgVgyhFQAlg8AlgpIADgBQAyAbAVAOQATAMAXATQANAKAUAJQAaAKAcAEQAcADAogIQAvgJAVgSQgBATgcAhIgcAgQAFADAYgMQAYgMAOgLQACAAgiA3IgDAEIgGAJQgNAYAOgJIAlgbQgTA/hPAEIgNABQgYAAghgEg");
	this.shape_4.setTransform(243.9282,109.2173);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgbB1QhBgFgtgoQgZgWgzhFQAlg8AmgpIADgBQAyAaAVAOQAUANAXASQAIAHAXABQAqACAJABQAbADAugLQAygLAVgUQgBAUgaAhIgaAdQAEACAXgJQAWgKANgKQABgBgRApIgJAWQgDAIgIAKQgBABAAABQgBAAAAABQAAAAAAABQABAAABAAQAPgFASgLQgUBAhPAMQgMABgUAAQgnAAhEgFg");
	this.shape_5.setTransform(244.0278,109.3279);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AgeBxQg9gFgrglQgYgVgxhCQAkg5AkgoIACgBQAxAaAUANQASAMAXASQAIAHAYgGQAPgDAlgLQAngLAXgJQAqgPATgSQgBATgUAjIgUAhQAFADATgIQAUgIAMgKIgFASQgGAUgIARIgGALIgHAKIAOgBIAbgPQgUA/hQAZQgtAOg2AAQgSAAgVgCg");
	this.shape_6.setTransform(243.375,108.6845);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AhNBjIAAgCQhVgOgihAQAig2AkgoIADgBQAvAYBIAQIADAAIACAAQBigaA+gsIACAAQAEAugNAeIgBAAQAGAPAggZQALgNgKAOQg3BMAvACIACAAQgsBEh9AAQgpAAg1gIg");
	this.shape_7.setTransform(242.3576,104.8284);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(222.2,93,43.30000000000001,29.299999999999997);


(lib.BirdsleftWings = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("AgJE2QiFhogDjnQBMBSgMjwQgBgcAHAcQAiA5AHgsIAAgGQgIhdAugmQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAkDOBmCnQACACAAADQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQhlBagwCQIAAAFQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape.setTransform(14.575,31.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AAKEcQhQhAgng6Qg2hSgChpQAoArAPgVQAQgagGhzQAAgLAPAPQAVAVAJACIAQAGQAFAAAEgNQgXg/gGggQgEgWAJgYQAEgMAFgHQBGB6AlA2QAfAtBHBiQACACAAAEQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQhlBbgxCPIAAAGQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_1.setTransform(12.575,33.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AAeEIQhhhBgqgoQhLhHgBhiQArAuASgZQAVgcgkhpQgEgKAaAQQAkAYAVgHQAGgCAGAFQADACADgLIgRgnQgOgfgEgYQgEgWAFgYIAGgTQBlBjAlA1QAIAMAoAnQAqApAbAkQABACAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQhlBbgxCPIAAAGQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_2.setTransform(10.525,35.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,0,37.3,62.3);


(lib.birdwings2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("AgWGQQAmhairAzQhAATA1gcQBGgug1gQIAAABIgGgCIgUACIAAABQg0gGgxghIgFgDQBog+BXhsQAdglAagqIgLk3IgGgmICggXIAPgEIA6gQQAUgGAKgFIABADIADAEIABACIACADIAAADIADADIACAEIACADIACAEIAAABIADAEIACAFIABADIABADIABAEIAAABIAAABIABABIABACIABACIAAACIAAACIABABIACABIAAACIABACIAAABIABACIABABIABACIAAAAIgBAAIAAABIABgBIAAACIABABIAAABIAAABIABACIABABIABABIAAABIAEAIIAEAQQANAgAHAjQAMBIgOBVIAAAHIgCAaIgDAQIgCALIAAACIgDAJIgRA3QgPA0hDB6QhDB6h6A1g");
	this.shape.setTransform(13.8394,43.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.birdwings2, new cjs.Rectangle(-14.4,3.6,56.5,80.60000000000001), null);


(lib.bird = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_24();
	this.instance.setTransform(28.35,49.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_23();
	this.instance_1.setTransform(-148.65,31.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bird, new cjs.Rectangle(-148.6,31.5,276.5,89), null);


(lib.allclaod = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.claod();
	this.instance.setTransform(0,28,0.367,0.2734);

	this.instance_1 = new lib.claod();
	this.instance_1.setTransform(304,151,0.3864,0.4451);

	this.instance_2 = new lib.claod();
	this.instance_2.setTransform(533,24,0.4382,0.2878);

	this.instance_3 = new lib.claod();
	this.instance_3.setTransform(741,134,0.7495,0.4147);

	this.instance_4 = new lib.claod();
	this.instance_4.setTransform(1223,0,0.4658,0.4658);

	this.instance_5 = new lib.claod();
	this.instance_5.setTransform(2492,24,0.3864,0.4451);

	this.instance_6 = new lib.claod();
	this.instance_6.setTransform(1959,134,0.4382,0.2878);

	this.instance_7 = new lib.claod();
	this.instance_7.setTransform(2205,47,0.4703,0.3955);

	this.instance_8 = new lib.claod();
	this.instance_8.setTransform(1495,99,0.367,0.2734);

	this.instance_9 = new lib.claod();
	this.instance_9.setTransform(1707,24,0.613,0.3413);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.allclaod, new cjs.Rectangle(0,0,2685.2,278.3), null);


(lib._3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("3", "normal 700 300px 'Arimo'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 432;
	this.text.lineWidth = 226;
	this.text.parent = this;
	this.text.setTransform(114.85,1.5704,1,0.7819);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._3, new cjs.Rectangle(0,0,229.8,339.1), null);


(lib._2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("2", "normal 700 300px 'Arimo'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 432;
	this.text.parent = this;
	this.text.setTransform(61.5,2);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._2, new cjs.Rectangle(-24,0,171,433.7), null);


(lib._1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("1", "normal 700 300px 'Arimo'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 432;
	this.text.parent = this;
	this.text.setTransform(61.5,2);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._1, new cjs.Rectangle(-24,0,171,474.7), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.sparks = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.sparks = new lib.spark();
	this.sparks.name = "sparks";
	this.sparks.setTransform(32.5,20.8,1,1,0,0,0,32.5,20.8);

	this.timeline.addTween(cjs.Tween.get(this.sparks).wait(1).to({regX:30.4,regY:14.7,x:30.4,y:14.7},0).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,41.6);


(lib.Scene_1_Replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Replay
	this.start = new lib.startBTN();
	this.start.name = "start";
	this.start.setTransform(721.3,332.75);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.startBTN(), 3);

	this.replay = new lib.playagainBTN();
	this.replay.name = "replay";
	this.replay.setTransform(2283.35,510.95);
	new cjs.ButtonHelper(this.replay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start}]}).to({state:[]},2).to({state:[{t:this.replay}]},626).to({state:[{t:this.replay}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_nambers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nambers
	this.instance = new lib._3();
	this.instance.setTransform(658.95,412.4,1,1,0,0,0,114.9,150);

	this.instance_1 = new lib._2();
	this.instance_1.setTransform(651.8,432.75,1,1,0,0,0,61.5,167.8);
	this.instance_1._off = true;

	this.instance_2 = new lib._1();
	this.instance_2.setTransform(639.3,472,1,1,0,0,0,61.5,193.7);
	this.instance_2._off = true;

	this.text = new cjs.Text("GO", "normal 700 100px 'Arimo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 145;
	this.text.lineWidth = 262;
	this.text.parent = this;
	this.text.setTransform(645.95,354.25);
	if(!lib.properties.webfonts['Arimo']) {
		lib.webFontTxtInst['Arimo'] = lib.webFontTxtInst['Arimo'] || [];
		lib.webFontTxtInst['Arimo'].push(this.text);
	}
	this.text._off = true;

	this.instance_3 = new lib.BoomText();
	this.instance_3.setTransform(1008.05,434.2,0.9998,0.9998,0,0,0,-74.8,-73.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:169.5,scaleX:0.9716,scaleY:0.9716,y:431.35},0).wait(1).to({scaleX:0.9432,scaleY:0.9432,x:658.9,y:430.75},0).wait(1).to({scaleX:0.9148,scaleY:0.9148,y:430.2},0).wait(1).to({scaleX:0.8864,scaleY:0.8864,x:658.95,y:429.65},0).wait(1).to({scaleX:0.858,scaleY:0.858,y:429.1},0).wait(1).to({scaleX:0.8296,scaleY:0.8296,x:658.9,y:428.55},0).wait(1).to({scaleX:0.8012,scaleY:0.8012,y:428},0).wait(1).to({scaleX:0.7727,scaleY:0.7727,x:658.95,y:427.45},0).wait(1).to({scaleX:0.7443,scaleY:0.7443,x:658.9,y:426.85},0).wait(1).to({scaleX:0.7159,scaleY:0.7159,y:426.35},0).wait(1).to({scaleX:0.6875,scaleY:0.6875,y:425.8},0).wait(1).to({scaleX:0.6591,scaleY:0.6591,x:658.95,y:425.2},0).wait(1).to({scaleX:0.6285,scaleY:0.6285,x:658.9,y:424.6},0).wait(1).to({scaleX:0.5978,scaleY:0.5978,y:424.05},0).wait(1).to({scaleX:0.5671,scaleY:0.5671,y:423.45},0).wait(1).to({scaleX:0.5365,scaleY:0.5365,y:422.85},0).wait(1).to({scaleX:0.5058,scaleY:0.5058,y:422.25},0).wait(1).to({scaleX:0.4752,scaleY:0.4752,y:421.65},0).wait(1).to({scaleX:0.4445,scaleY:0.4445,x:658.85,y:421.05},0).wait(1).to({scaleX:0.4139,scaleY:0.4139,x:658.9,y:420.45},0).wait(1).to({scaleX:0.3832,scaleY:0.3832,y:419.85},0).wait(1).to({scaleX:0.3525,scaleY:0.3525,y:419.25},0).wait(1).to({scaleX:0.3219,scaleY:0.3219,y:418.65},0).wait(1).to({scaleX:0.2912,scaleY:0.2912,y:418.05},0).wait(1).to({_off:true},1).wait(234));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).wait(1).to({regY:186.5,scaleX:0.9573,scaleY:0.9573,y:450.65},0).wait(1).to({scaleX:0.9147,scaleY:0.9147,x:651.75,y:449.85},0).wait(1).to({scaleX:0.872,scaleY:0.872,x:651.8,y:449.05},0).wait(1).to({scaleX:0.8294,scaleY:0.8294,x:651.75,y:448.2},0).wait(1).to({scaleX:0.7867,scaleY:0.7867,x:651.8,y:447.45},0).wait(1).to({scaleX:0.744,scaleY:0.744,x:651.75,y:446.65},0).wait(1).to({scaleX:0.7014,scaleY:0.7014,x:651.8,y:445.85},0).wait(1).to({scaleX:0.6587,scaleY:0.6587,x:651.75,y:445.05},0).wait(1).to({scaleX:0.616,scaleY:0.616,x:651.8,y:444.25},0).wait(1).to({scaleX:0.5734,scaleY:0.5734,x:651.75,y:443.5},0).wait(1).to({scaleX:0.5307,scaleY:0.5307,x:651.8,y:442.7},0).wait(1).to({scaleX:0.4881,scaleY:0.4881,x:651.75,y:441.85},0).wait(1).to({scaleX:0.4454,scaleY:0.4454,x:651.8,y:441.05},0).wait(1).to({scaleX:0.4027,scaleY:0.4027,x:651.75,y:440.25},0).wait(1).to({scaleX:0.3601,scaleY:0.3601,x:651.8,y:439.5},0).wait(1).to({scaleX:0.3174,scaleY:0.3174,x:651.75,y:438.7},0).wait(1).to({scaleX:0.2748,scaleY:0.2748,x:651.8,y:437.9},0).wait(1).to({scaleX:0.2321,scaleY:0.2321,x:651.75,y:437.1},0).wait(1).to({scaleX:0.1894,scaleY:0.1894,y:436.35},0).to({_off:true},1).wait(214));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).wait(1).to({regY:186.5,scaleX:0.9523,scaleY:0.9523,x:639.25,y:465.1},0).wait(1).to({scaleX:0.9045,scaleY:0.9045,x:639.3,y:465.45},0).wait(1).to({scaleX:0.8568,scaleY:0.8568,y:465.8},0).wait(1).to({scaleX:0.8091,scaleY:0.8091,x:639.25,y:466.15},0).wait(1).to({scaleX:0.7614,scaleY:0.7614,y:466.5},0).wait(1).to({scaleX:0.7136,scaleY:0.7136,x:639.3,y:466.85},0).wait(1).to({scaleX:0.6659,scaleY:0.6659,x:639.25,y:467.2},0).wait(1).to({scaleX:0.6182,scaleY:0.6182,y:467.55},0).wait(1).to({scaleX:0.5704,scaleY:0.5704,x:639.3,y:467.9},0).wait(1).to({scaleX:0.5227,scaleY:0.5227,y:468.25},0).wait(1).to({scaleX:0.475,scaleY:0.475,x:639.25,y:468.55},0).wait(1).to({scaleX:0.4273,scaleY:0.4273,x:639.3,y:468.9},0).wait(1).to({scaleX:0.3795,scaleY:0.3795,y:469.25},0).wait(1).to({scaleX:0.3318,scaleY:0.3318,x:639.25,y:469.6},0).wait(1).to({scaleX:0.2841,scaleY:0.2841,y:469.95},0).wait(1).to({scaleX:0.2363,scaleY:0.2363,x:639.3,y:470.3},0).wait(1).to({scaleX:0.1886,scaleY:0.1886,y:470.65},0).wait(1).to({_off:true},1).wait(195));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(65).to({_off:false},0).wait(1).to({scaleX:0.9615,scaleY:0.9615,x:645.9449,y:356.4778},0).wait(1).to({scaleX:0.923,scaleY:0.923,x:645.9397,y:358.7056},0).wait(1).to({scaleX:0.8845,scaleY:0.8845,x:645.9346,y:360.9335},0).wait(1).to({scaleX:0.846,scaleY:0.846,x:645.9294,y:363.1613},0).wait(1).to({scaleX:0.8074,scaleY:0.8074,x:645.9243,y:365.3891},0).wait(1).to({scaleX:0.7689,scaleY:0.7689,x:645.9691,y:367.6169},0).wait(1).to({scaleX:0.7304,scaleY:0.7304,x:645.964,y:369.8448},0).wait(1).to({scaleX:0.6919,scaleY:0.6919,x:645.9588,y:372.0726},0).wait(1).to({scaleX:0.6534,scaleY:0.6534,x:645.9537,y:374.3004},0).wait(1).to({scaleX:0.6149,scaleY:0.6149,x:645.9485,y:376.5282},0).wait(1).to({scaleX:0.5764,scaleY:0.5764,x:645.9434,y:378.756},0).wait(1).to({scaleX:0.5379,scaleY:0.5379,x:645.9382,y:380.9839},0).wait(1).to({scaleX:0.4994,scaleY:0.4994,x:645.9331,y:383.2117},0).wait(1).to({scaleX:0.4609,scaleY:0.4609,x:645.9279,y:385.4395},0).wait(1).to({scaleX:0.4223,scaleY:0.4223,x:645.9728,y:387.6673},0).wait(1).to({scaleX:0.3838,scaleY:0.3838,x:645.9676,y:389.8951},0).to({_off:true},1).wait(178));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240).to({_off:false},0).wait(1).to({regX:296.3,regY:-234.8,scaleX:0.9629,scaleY:0.9629,x:1376.9,y:276.4},0).wait(1).to({scaleX:0.9261,scaleY:0.9261,x:1374.8,y:279.85},0).wait(1).to({scaleX:0.8892,scaleY:0.8892,x:1372.65,y:283.35},0).wait(1).to({scaleX:0.8523,scaleY:0.8523,x:1370.55,y:286.85},0).wait(1).to({scaleX:0.8155,scaleY:0.8155,x:1368.4,y:290.3},0).wait(1).to({scaleX:0.7786,scaleY:0.7786,x:1366.3,y:293.8},0).wait(1).to({scaleX:0.7417,scaleY:0.7417,x:1364.15,y:297.25},0).wait(1).to({scaleX:0.7048,scaleY:0.7048,x:1362.05,y:300.7},0).wait(1).to({scaleX:0.668,scaleY:0.668,x:1359.9,y:304.2},0).wait(1).to({scaleX:0.6311,scaleY:0.6311,x:1357.8,y:307.65},0).wait(1).to({scaleX:0.5942,scaleY:0.5942,x:1355.65,y:311.2},0).wait(1).to({scaleX:0.5574,scaleY:0.5574,x:1353.55,y:314.65},0).wait(1).to({scaleX:0.5205,scaleY:0.5205,x:1351.4,y:318.1},0).wait(1).to({scaleX:0.4836,scaleY:0.4836,x:1349.3,y:321.6},0).wait(1).to({scaleX:0.4468,scaleY:0.4468,x:1347.1,y:325.05},0).wait(1).to({scaleX:0.4099,scaleY:0.4099,x:1345,y:328.5},0).wait(1).to({scaleX:0.373,scaleY:0.373,x:1342.85,y:332},0).wait(1).to({scaleX:0.3361,scaleY:0.3361,x:1340.75,y:335.5},0).wait(1).to({scaleX:0.2993,scaleY:0.2993,x:1338.6,y:338.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_claod_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// claod_
	this.instance = new lib.allclaod();
	this.instance.setTransform(-136,139.2,1,1,0,0,0,1342.6,139.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:139.1,x:-133.6,y:139.1},0).wait(1).to({x:-131.2},0).wait(1).to({x:-128.8},0).wait(1).to({x:-126.4},0).wait(1).to({x:-124},0).wait(1).to({x:-121.6},0).wait(1).to({x:-119.2},0).wait(1).to({x:-116.8},0).wait(1).to({x:-114.4},0).wait(1).to({x:-112},0).wait(1).to({x:-109.6},0).wait(1).to({x:-107.2},0).wait(1).to({x:-104.85},0).wait(1).to({x:-102.45},0).wait(1).to({x:-100.05},0).wait(1).to({x:-97.65},0).wait(1).to({x:-95.25},0).wait(1).to({x:-92.85},0).wait(1).to({x:-90.45},0).wait(1).to({x:-88.05},0).wait(1).to({x:-85.65},0).wait(1).to({x:-83.25},0).wait(1).to({x:-80.85},0).wait(1).to({x:-78.45},0).wait(1).to({x:-76.05},0).wait(1).to({x:-73.7},0).wait(1).to({x:-71.3},0).wait(1).to({x:-68.9},0).wait(1).to({x:-66.5},0).wait(1).to({x:-64.1},0).wait(1).to({x:-61.7},0).wait(1).to({x:-59.3},0).wait(1).to({x:-56.9},0).wait(1).to({x:-54.5},0).wait(1).to({x:-52.1},0).wait(1).to({x:-49.7},0).wait(1).to({x:-47.3},0).wait(1).to({x:-44.9},0).wait(1).to({x:-42.55},0).wait(1).to({x:-40.15},0).wait(1).to({x:-37.75},0).wait(1).to({x:-35.35},0).wait(1).to({x:-32.95},0).wait(1).to({x:-30.55},0).wait(1).to({x:-28.15},0).wait(1).to({x:-25.75},0).wait(1).to({x:-23.35},0).wait(1).to({x:-20.95},0).wait(1).to({x:-18.55},0).wait(1).to({x:-16.15},0).wait(1).to({x:-13.75},0).wait(1).to({x:-11.4},0).wait(1).to({x:-9},0).wait(1).to({x:-6.6},0).wait(1).to({x:-4.2},0).wait(1).to({x:-1.8},0).wait(1).to({x:0.6},0).wait(1).to({x:3},0).wait(1).to({x:5.4},0).wait(1).to({x:7.8},0).wait(1).to({x:10.2},0).wait(1).to({x:12.6},0).wait(1).to({x:15},0).wait(1).to({x:17.35},0).wait(1).to({x:19.75},0).wait(1).to({x:22.15},0).wait(1).to({x:24.55},0).wait(1).to({x:26.95},0).wait(1).to({x:29.35},0).wait(1).to({x:31.75},0).wait(1).to({x:34.15},0).wait(1).to({x:36.55},0).wait(1).to({x:38.95},0).wait(1).to({x:41.35},0).wait(1).to({x:43.75},0).wait(1).to({x:46.15},0).wait(1).to({x:48.5},0).wait(1).to({x:50.9},0).wait(1).to({x:53.3},0).wait(1).to({x:55.7},0).wait(1).to({x:58.1},0).wait(1).to({x:60.5},0).wait(1).to({x:62.9},0).wait(1).to({x:65.3},0).wait(1).to({x:67.7},0).wait(1).to({x:70.1},0).wait(1).to({x:72.5},0).wait(1).to({x:74.9},0).wait(1).to({x:77.3},0).wait(1).to({x:79.65},0).wait(1).to({x:82.05},0).wait(1).to({x:84.45},0).wait(1).to({x:86.85},0).wait(1).to({x:89.25},0).wait(1).to({x:91.65},0).wait(1).to({x:94.05},0).wait(1).to({x:96.45},0).wait(1).to({x:98.85},0).wait(1).to({x:101.25},0).wait(1).to({x:103.65},0).wait(1).to({x:106.05},0).wait(1).to({x:108.45},0).wait(1).to({x:110.8},0).wait(1).to({x:113.2},0).wait(1).to({x:115.6},0).wait(1).to({x:118},0).wait(1).to({x:120.4},0).wait(1).to({x:122.8},0).wait(1).to({x:125.2},0).wait(1).to({x:127.6},0).wait(1).to({x:130},0).wait(1).to({x:132.4},0).wait(1).to({x:134.8},0).wait(1).to({x:137.2},0).wait(1).to({x:139.6},0).wait(1).to({x:141.95},0).wait(1).to({x:144.35},0).wait(1).to({x:146.75},0).wait(1).to({x:149.15},0).wait(1).to({x:151.55},0).wait(1).to({x:153.95},0).wait(1).to({x:156.35},0).wait(1).to({x:158.75},0).wait(1).to({x:161.15},0).wait(1).to({x:163.55},0).wait(1).to({x:165.95},0).wait(1).to({x:168.35},0).wait(1).to({x:170.7},0).wait(1).to({x:173.1},0).wait(1).to({x:175.5},0).wait(1).to({x:177.9},0).wait(1).to({x:180.3},0).wait(1).to({x:182.7},0).wait(1).to({x:185.1},0).wait(1).to({x:187.5},0).wait(1).to({x:189.9},0).wait(1).to({x:192.3},0).wait(1).to({x:194.7},0).wait(1).to({x:197.1},0).wait(1).to({x:199.5},0).wait(1).to({x:201.85},0).wait(1).to({x:204.25},0).wait(1).to({x:206.65},0).wait(1).to({x:209.05},0).wait(1).to({x:211.45},0).wait(1).to({x:213.85},0).wait(1).to({x:216.25},0).wait(1).to({x:218.65},0).wait(1).to({x:221.05},0).wait(1).to({x:223.45},0).wait(1).to({x:225.85},0).wait(1).to({x:228.25},0).wait(1).to({x:230.65},0).wait(1).to({x:233},0).wait(1).to({x:235.4},0).wait(1).to({x:237.8},0).wait(1).to({x:240.2},0).wait(1).to({x:242.6},0).wait(1).to({x:245},0).wait(1).to({x:247.4},0).wait(1).to({x:249.8},0).wait(1).to({x:252.2},0).wait(1).to({x:254.6},0).wait(1).to({x:257},0).wait(1).to({x:259.4},0).wait(1).to({x:261.8},0).wait(1).to({x:264.15},0).wait(1).to({x:266.55},0).wait(1).to({x:268.95},0).wait(1).to({x:271.35},0).wait(1).to({x:273.75},0).wait(1).to({x:276.15},0).wait(1).to({x:278.55},0).wait(1).to({x:280.95},0).wait(1).to({x:283.35},0).wait(1).to({x:285.75},0).wait(1).to({x:288.15},0).wait(1).to({x:290.55},0).wait(1).to({x:292.95},0).wait(1).to({x:295.3},0).wait(1).to({x:297.7},0).wait(1).to({x:300.1},0).wait(1).to({x:302.5},0).wait(1).to({x:304.9},0).wait(1).to({x:307.3},0).wait(1).to({x:309.7},0).wait(1).to({x:312.1},0).wait(1).to({x:314.5},0).wait(1).to({x:316.9},0).wait(1).to({x:319.3},0).wait(1).to({x:321.7},0).wait(1).to({x:324.05},0).wait(1).to({x:326.45},0).wait(1).to({x:328.85},0).wait(1).to({x:331.25},0).wait(1).to({x:333.65},0).wait(1).to({x:336.05},0).wait(1).to({x:338.45},0).wait(1).to({x:340.85},0).wait(1).to({x:343.25},0).wait(1).to({x:345.65},0).wait(1).to({x:348.05},0).wait(1).to({x:350.45},0).wait(1).to({x:352.85},0).wait(1).to({x:355.2},0).wait(1).to({x:357.6},0).wait(1).to({x:360},0).wait(1).to({x:362.4},0).wait(1).to({x:364.8},0).wait(1).to({x:367.2},0).wait(1).to({x:369.6},0).wait(1).to({x:372},0).wait(1).to({x:374.4},0).wait(1).to({x:376.8},0).wait(1).to({x:379.2},0).wait(1).to({x:381.6},0).wait(1).to({x:384},0).wait(1).to({x:386.35},0).wait(1).to({x:388.75},0).wait(1).to({x:391.15},0).wait(1).to({x:393.55},0).wait(1).to({x:395.95},0).wait(1).to({x:398.35},0).wait(1).to({x:400.75},0).wait(1).to({x:403.15},0).wait(1).to({x:405.55},0).wait(1).to({x:407.95},0).wait(1).to({x:410.35},0).wait(1).to({x:412.75},0).wait(1).to({x:415.15},0).wait(1).to({x:417.5},0).wait(1).to({x:419.9},0).wait(1).to({x:422.3},0).wait(1).to({x:424.7},0).wait(1).to({x:427.1},0).wait(1).to({x:429.5},0).wait(1).to({x:431.9},0).wait(1).to({x:434.3},0).wait(1).to({x:436.7},0).wait(1).to({x:439.1},0).wait(1).to({x:441.5},0).wait(1).to({x:443.9},0).wait(1).to({x:446.3},0).wait(1).to({x:448.65},0).wait(1).to({x:451.05},0).wait(1).to({x:453.45},0).wait(1).to({x:455.85},0).wait(1).to({x:458.25},0).wait(1).to({x:460.65},0).wait(1).to({x:463.05},0).wait(1).to({x:465.45},0).wait(1).to({x:467.85},0).wait(1).to({x:470.25},0).wait(1).to({x:472.65},0).wait(1).to({x:475.05},0).wait(1).to({x:477.4},0).wait(1).to({x:479.8},0).wait(1).to({x:482.2},0).wait(1).to({x:484.6},0).wait(1).to({x:487},0).wait(1).to({x:489.4},0).wait(1).to({x:491.8},0).wait(1).to({x:494.2},0).wait(1).to({x:496.6},0).wait(1).to({x:499},0).wait(1).to({x:501.4},0).wait(1).to({x:503.8},0).wait(1).to({x:506.2},0).wait(1).to({x:508.55},0).wait(1).to({x:510.95},0).wait(1).to({x:513.35},0).wait(1).to({x:515.75},0).wait(1).to({x:518.15},0).wait(1).to({x:520.55},0).wait(1).to({x:522.95},0).wait(1).to({x:525.35},0).wait(1).to({x:527.75},0).wait(1).to({x:530.15},0).wait(1).to({x:532.55},0).wait(1).to({x:534.95},0).wait(1).to({x:537.35},0).wait(1).to({x:539.7},0).wait(1).to({x:542.1},0).wait(1).to({x:544.5},0).wait(1).to({x:546.9},0).wait(1).to({x:549.3},0).wait(1).to({x:551.7},0).wait(1).to({x:554.1},0).wait(1).to({x:556.5},0).wait(1).to({x:558.9},0).wait(1).to({x:561.3},0).wait(1).to({x:563.7},0).wait(1).to({x:566.1},0).wait(1).to({x:568.5},0).wait(1).to({x:570.85},0).wait(1).to({x:573.25},0).wait(1).to({x:575.65},0).wait(1).to({x:578.05},0).wait(1).to({x:580.45},0).wait(1).to({x:582.85},0).wait(1).to({x:585.25},0).wait(1).to({x:587.65},0).wait(1).to({x:590.05},0).wait(1).to({x:592.45},0).wait(1).to({x:594.85},0).wait(1).to({x:597.25},0).wait(1).to({x:599.65},0).wait(1).to({x:602},0).wait(1).to({x:604.4},0).wait(1).to({x:606.8},0).wait(1).to({x:609.2},0).wait(1).to({x:611.6},0).wait(1).to({x:614},0).wait(1).to({x:616.4},0).wait(1).to({x:618.8},0).wait(1).to({x:621.2},0).wait(1).to({x:623.6},0).wait(1).to({x:626},0).wait(1).to({x:628.4},0).wait(1).to({x:630.75},0).wait(1).to({x:633.15},0).wait(1).to({x:635.55},0).wait(1).to({x:637.95},0).wait(1).to({x:640.35},0).wait(1).to({x:642.75},0).wait(1).to({x:645.15},0).wait(1).to({x:647.55},0).wait(1).to({x:649.95},0).wait(1).to({x:652.35},0).wait(1).to({x:654.75},0).wait(1).to({x:657.15},0).wait(1).to({x:659.55},0).wait(1).to({x:661.9},0).wait(1).to({x:664.3},0).wait(1).to({x:666.7},0).wait(1).to({x:669.1},0).wait(1).to({x:671.5},0).wait(1).to({x:673.9},0).wait(1).to({x:676.3},0).wait(1).to({x:678.7},0).wait(1).to({x:681.1},0).wait(1).to({x:683.5},0).wait(1).to({x:685.9},0).wait(1).to({x:688.3},0).wait(1).to({x:690.7},0).wait(1).to({x:693.05},0).wait(1).to({x:695.45},0).wait(1).to({x:697.85},0).wait(1).to({x:700.25},0).wait(1).to({x:702.65},0).wait(1).to({x:705.05},0).wait(1).to({x:707.45},0).wait(1).to({x:709.85},0).wait(1).to({x:712.25},0).wait(1).to({x:714.65},0).wait(1).to({x:717.05},0).wait(1).to({x:719.45},0).wait(1).to({x:721.85},0).wait(1).to({x:724.2},0).wait(1).to({x:726.6},0).wait(1).to({x:729},0).wait(1).to({x:731.4},0).wait(1).to({x:733.8},0).wait(1).to({x:736.2},0).wait(1).to({x:738.6},0).wait(1).to({x:741},0).wait(1).to({x:743.4},0).wait(1).to({x:745.8},0).wait(1).to({x:748.2},0).wait(1).to({x:750.6},0).wait(1).to({x:753},0).wait(1).to({x:755.35},0).wait(1).to({x:757.75},0).wait(1).to({x:760.15},0).wait(1).to({x:762.55},0).wait(1).to({x:764.95},0).wait(1).to({x:767.35},0).wait(1).to({x:769.75},0).wait(1).to({x:772.15},0).wait(1).to({x:774.55},0).wait(1).to({x:776.95},0).wait(1).to({x:779.35},0).wait(1).to({x:781.75},0).wait(1).to({x:784.1},0).wait(1).to({x:786.5},0).wait(1).to({x:788.9},0).wait(1).to({x:791.3},0).wait(1).to({x:793.7},0).wait(1).to({x:796.1},0).wait(1).to({x:798.5},0).wait(1).to({x:800.9},0).wait(1).to({x:803.3},0).wait(1).to({x:805.7},0).wait(1).to({x:808.1},0).wait(1).to({x:810.5},0).wait(1).to({x:812.9},0).wait(1).to({x:815.25},0).wait(1).to({x:817.65},0).wait(1).to({x:820.05},0).wait(1).to({x:822.45},0).wait(1).to({x:824.85},0).wait(1).to({x:827.25},0).wait(1).to({x:829.65},0).wait(1).to({x:832.05},0).wait(1).to({x:834.45},0).wait(1).to({x:836.85},0).wait(1).to({x:839.25},0).wait(1).to({x:841.65},0).wait(1).to({x:844.05},0).wait(1).to({x:846.4},0).wait(1).to({x:848.8},0).wait(1).to({x:851.2},0).wait(1).to({x:853.6},0).wait(1).to({x:856},0).wait(1).to({x:858.4},0).wait(1).to({x:860.8},0).wait(1).to({x:863.2},0).wait(1).to({x:865.6},0).wait(1).to({x:868},0).wait(1).to({x:870.4},0).wait(1).to({x:872.8},0).wait(1).to({x:875.2},0).wait(1).to({x:877.55},0).wait(1).to({x:879.95},0).wait(1).to({x:882.35},0).wait(1).to({x:884.75},0).wait(1).to({x:887.15},0).wait(1).to({x:889.55},0).wait(1).to({x:891.95},0).wait(1).to({x:894.35},0).wait(1).to({x:896.75},0).wait(1).to({x:899.15},0).wait(1).to({x:901.55},0).wait(1).to({x:903.95},0).wait(1).to({x:906.35},0).wait(1).to({x:908.7},0).wait(1).to({x:911.1},0).wait(1).to({x:913.5},0).wait(1).to({x:915.9},0).wait(1).to({x:918.3},0).wait(1).to({x:920.7},0).wait(1).to({x:923.1},0).wait(1).to({x:925.5},0).wait(1).to({x:927.9},0).wait(1).to({x:930.3},0).wait(1).to({x:932.7},0).wait(1).to({x:935.1},0).wait(1).to({x:937.45},0).wait(1).to({x:939.85},0).wait(1).to({x:942.25},0).wait(1).to({x:944.65},0).wait(1).to({x:947.05},0).wait(1).to({x:949.45},0).wait(1).to({x:951.85},0).wait(1).to({x:954.25},0).wait(1).to({x:956.65},0).wait(1).to({x:959.05},0).wait(1).to({x:961.45},0).wait(1).to({x:963.85},0).wait(1).to({x:966.25},0).wait(1).to({x:968.6},0).wait(1).to({x:971},0).wait(1).to({x:973.4},0).wait(1).to({x:975.8},0).wait(1).to({x:978.2},0).wait(1).to({x:980.6},0).wait(1).to({x:983},0).wait(1).to({x:985.4},0).wait(1).to({x:987.8},0).wait(1).to({x:990.2},0).wait(1).to({x:992.6},0).wait(1).to({x:995},0).wait(1).to({x:997.4},0).wait(1).to({x:999.75},0).wait(1).to({x:1002.15},0).wait(1).to({x:1004.55},0).wait(1).to({x:1006.95},0).wait(1).to({x:1009.35},0).wait(1).to({x:1011.75},0).wait(1).to({x:1014.15},0).wait(1).to({x:1016.55},0).wait(1).to({x:1018.95},0).wait(1).to({x:1021.35},0).wait(1).to({x:1023.75},0).wait(1).to({x:1026.15},0).wait(1).to({x:1028.55},0).wait(1).to({x:1030.9},0).wait(1).to({x:1033.3},0).wait(1).to({x:1035.7},0).wait(1).to({x:1038.1},0).wait(1).to({x:1040.5},0).wait(1).to({x:1042.9},0).wait(1).to({x:1045.3},0).wait(1).to({x:1047.7},0).wait(1).to({x:1050.1},0).wait(1).to({x:1052.5},0).wait(1).to({x:1054.9},0).wait(1).to({x:1057.3},0).wait(1).to({x:1059.7},0).wait(1).to({x:1062.05},0).wait(1).to({x:1064.45},0).wait(1).to({x:1066.85},0).wait(1).to({x:1069.25},0).wait(1).to({x:1071.65},0).wait(1).to({x:1074.05},0).wait(1).to({x:1076.45},0).wait(1).to({x:1078.85},0).wait(1).to({x:1081.25},0).wait(1).to({x:1083.65},0).wait(1).to({x:1086.05},0).wait(1).to({x:1088.45},0).wait(1).to({x:1090.8},0).wait(1).to({x:1093.2},0).wait(1).to({x:1095.6},0).wait(1).to({x:1098},0).wait(1).to({x:1100.4},0).wait(1).to({x:1102.8},0).wait(1).to({x:1105.2},0).wait(1).to({x:1107.6},0).wait(1).to({x:1110},0).wait(1).to({x:1112.4},0).wait(1).to({x:1114.8},0).wait(1).to({x:1117.2},0).wait(1).to({x:1119.6},0).wait(1).to({x:1121.95},0).wait(1).to({x:1124.35},0).wait(1).to({x:1126.75},0).wait(1).to({x:1129.15},0).wait(1).to({x:1131.55},0).wait(1).to({x:1133.95},0).wait(1).to({x:1136.35},0).wait(1).to({x:1138.75},0).wait(1).to({x:1141.15},0).wait(1).to({x:1143.55},0).wait(1).to({x:1145.95},0).wait(1).to({x:1148.35},0).wait(1).to({x:1150.75},0).wait(1).to({x:1153.1},0).wait(1).to({x:1155.5},0).wait(1).to({x:1157.9},0).wait(1).to({x:1160.3},0).wait(1).to({x:1162.7},0).wait(1).to({x:1165.1},0).wait(1).to({x:1167.5},0).wait(1).to({x:1169.9},0).wait(1).to({x:1172.3},0).wait(1).to({x:1174.7},0).wait(1).to({x:1177.1},0).wait(1).to({x:1179.5},0).wait(1).to({x:1181.9},0).wait(1).to({x:1184.25},0).wait(1).to({x:1186.65},0).wait(1).to({x:1189.05},0).wait(1).to({x:1191.45},0).wait(1).to({x:1193.85},0).wait(1).to({x:1196.25},0).wait(1).to({x:1198.65},0).wait(1).to({x:1201.05},0).wait(1).to({x:1203.45},0).wait(1).to({x:1205.85},0).wait(1).to({x:1208.25},0).wait(1).to({x:1210.65},0).wait(1).to({x:1213.05},0).wait(1).to({x:1215.4},0).wait(1).to({x:1217.8},0).wait(1).to({x:1220.2},0).wait(1).to({x:1222.6},0).wait(1).to({x:1225},0).wait(1).to({x:1227.4},0).wait(1).to({x:1229.8},0).wait(1).to({x:1232.2},0).wait(1).to({x:1234.6},0).wait(1).to({x:1237},0).wait(1).to({x:1239.4},0).wait(1).to({x:1241.8},0).wait(1).to({x:1244.15},0).wait(1).to({x:1246.55},0).wait(1).to({x:1248.95},0).wait(1).to({x:1251.35},0).wait(1).to({x:1253.75},0).wait(1).to({x:1256.15},0).wait(1).to({x:1258.55},0).wait(1).to({x:1260.95},0).wait(1).to({x:1263.35},0).wait(1).to({x:1265.75},0).wait(1).to({x:1268.15},0).wait(1).to({x:1270.55},0).wait(1).to({x:1272.95},0).wait(1).to({x:1275.3},0).wait(1).to({x:1277.7},0).wait(1).to({x:1280.1},0).wait(1).to({x:1282.5},0).wait(1).to({x:1284.9},0).wait(1).to({x:1287.3},0).wait(1).to({x:1289.7},0).wait(1).to({x:1292.1},0).wait(1).to({x:1294.5},0).wait(1).to({x:1296.9},0).wait(1).to({x:1299.3},0).wait(1).to({x:1301.7},0).wait(1).to({x:1304.1},0).wait(1).to({x:1306.45},0).wait(1).to({x:1308.85},0).wait(1).to({x:1311.25},0).wait(1).to({x:1313.65},0).wait(1).to({x:1316.05},0).wait(1).to({x:1318.45},0).wait(1).to({x:1320.85},0).wait(1).to({x:1323.25},0).wait(1).to({x:1325.65},0).wait(1).to({x:1328.05},0).wait(1).to({x:1330.45},0).wait(1).to({x:1332.85},0).wait(1).to({x:1335.25},0).wait(1).to({x:1337.6},0).wait(1).to({x:1340},0).wait(1).to({x:1342.4},0).wait(1).to({x:1344.75},0).wait(1).to({x:1347.15},0).wait(1).to({x:1349.55},0).wait(1).to({x:1351.95},0).wait(1).to({x:1354.35},0).wait(1).to({x:1356.75},0).wait(1).to({x:1359.15},0).wait(1).to({x:1361.55},0).wait(1).to({x:1363.95},0).wait(1).to({x:1366.35},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.love = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(14.3,-2.5,0.8627,0.8627,0,0,0,2.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:2.6,scaleX:0.8017,scaleY:0.8017,y:-2.25},0).wait(1).to({scaleX:0.7407,scaleY:0.7407,x:14.25},0).wait(1).to({scaleX:0.6797,scaleY:0.6797,y:-2.3},0).wait(1).to({scaleX:0.6187,scaleY:0.6187},0).wait(1).to({scaleX:0.5577,scaleY:0.5577},0).wait(1).to({scaleX:0.4967,scaleY:0.4967,y:-2.35},0).wait(1).to({scaleX:0.4357,scaleY:0.4357},0).wait(1).to({scaleX:0.3747,scaleY:0.3747,y:-2.4},0).wait(1).to({scaleX:0.3137,scaleY:0.3137},0).wait(1).to({scaleX:0.3725,scaleY:0.3725},0).wait(1).to({scaleX:0.4313,scaleY:0.4313},0).wait(1).to({scaleX:0.4901,scaleY:0.4901,y:-2.35},0).wait(1).to({scaleX:0.5488,scaleY:0.5488,y:-2.3},0).wait(1).to({scaleX:0.6076,scaleY:0.6076},0).wait(1).to({scaleX:0.6664,scaleY:0.6664,x:14.3,y:-2.25},0).wait(1).to({scaleX:0.7252,scaleY:0.7252,x:14.25},0).wait(1).to({scaleX:0.7839,scaleY:0.7839},0).wait(1).to({scaleX:0.8427,scaleY:0.8427,x:14.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.8,-4.4,4.899999999999999,4.4);


(lib.hilazonsmaile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hilazonhands();
	this.instance.setTransform(-5.8,-8.35,1,1,0,0,0,-31.4,25.9);

	this.instance_1 = new lib.hilazoneyes();
	this.instance_1.setTransform(-27.3,-30.65,1,1,0,0,0,4.7,4.9);

	this.instance_2 = new lib.hilazoneyes();
	this.instance_2.setTransform(-17.55,-30.65,1,1,0,0,0,4.7,4.9);

	this.instance_3 = new lib.CachedBmp_31();
	this.instance_3.setTransform(-113.9,-53.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hilazonsmaile, new cjs.Rectangle(-113.9,-53.6,131,82.5), null);


(lib.hilazon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hilazoneyes();
	this.instance.setTransform(96.5,23.05,1,1,0,0,0,4.7,4.9);

	this.instance_1 = new lib.hilazoneyes();
	this.instance_1.setTransform(86.6,23,1,1,0,0,0,4.7,4.9);

	this.instance_2 = new lib.CachedBmp_30();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hilazon, new cjs.Rectangle(0,0,102.5,83.5), null);


(lib.fallingbirdeye2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(2.1,2.1,1,1,0,0,0,2.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:65.4545,x:1.8,y:3.45},0).wait(1).to({rotation:130.9091,x:1.5,y:4.95},0).wait(1).to({rotation:196.3636,x:0.7,y:5.35},0).wait(1).to({rotation:261.8182,x:-0.15,y:5.6},0).wait(1).to({rotation:327.2727,x:-1.05,y:5.85},0).wait(1).to({rotation:392.7273,x:-1.7,y:5},0).wait(1).to({rotation:458.1818,x:-2.35,y:4.2},0).wait(1).to({rotation:523.6364,x:-1.7,y:3.1},0).wait(1).to({rotation:589.0909,x:-1.15,y:1.85},0).wait(1).to({rotation:654.5455,x:0.95},0).wait(1).to({rotation:720,y:1.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-0.3,8.8,8.4);


(lib.fallingbirdeye1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fallingbirdeye2();
	this.instance.setTransform(50.05,-1.95,1,1,0,0,0,2.1,2.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnAnQgQgQAAgXQAAgWAQgRQARgQAWAAQAXAAAQAQQARARAAAWQAAAXgRAQQgQARgXAAQgWAAgRgRg");
	this.shape.setTransform(47.9,-0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AghAgIgBgBIgCgDIgCgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBgCQgEgOgDgOIAAgHIABgEQADgLAIgLIABgBIAFgFIAAAAIACgBQARgQAgAAIAGAAIABAAIAFAAIAGABQAHABACACQAEAEgBAEIAAABQgKgEgKAAQgXAAgPAQQgQARAAAWIAAABQABAVAPAQIACACQALALAPADIAAADQgBAIgGAAQgNAAghghg");
	this.shape_1.setTransform(45.2688,0.0389);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fallingbirdeye1, new cjs.Rectangle(40.3,-6.5,13.200000000000003,13.1), null);


(lib.dogears = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A94534").s().p("AA9BUQhegwgghtQAIgCAEgIQABAAAAAAQAAgBAAAAQABAAAAAAQABAAABAAQAxBZBBBMQAAAAABAAQAAABAAAAQAAABAAABQABAAAAABIgGgBg");
	this.shape.setTransform(47.4,-40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D75C46").s().p("AA5BYQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQhAhMgzhYIAAgGQBcArAbCEg");
	this.shape_1.setTransform(48.325,-40.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F3A0F").s().p("AlVDZIAAgBIgCAAQgDgBgGgEQgHgGgEgFQgEgFgDgJIgEgIIgBgEIgCgEIgDgJIgHgUQgEgTgBgSIAAAAIgCgKIAAgCQgCgNAAgYQAAgeACgWQADgPAEgOIAJgUIALgUQABgGAEgFIAIgOQAIgRAOgPQALgLAMgHIABAAIABgBIAAAAIADgCIAFgCIACgBIABgBIALgFIADAAIAGgBIAGgBQAEgBAFAAIAKAAIALABIAmAAQANgCALABIAWACIADABIACABIACACQgBAEAAAJQABAIgDARIgEAUIgCALIgDAiQgEAOgCAOIgCAIQgBAKgBAKIgBAFQgDANgJAWIgBACIgCAFIgCABQAAADgCACIgEAHQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIgBABIgDAEIAAABQAAAAgBABQAAABAAAAQgBABAAAAQAAABAAAAIgCACIAAABIgGANIgQAiIgEAEIgBACIgDAEQgFAHgTAkQgTAhgkAAQgMAAgNgDgAFZBCIgEgBIgCAAIgBAAIgCgBIgBAAIgBAAIAAAAIgCgBIgCAAIgBAAIgCgBIgCgBIgBAAIgCgCQgOgEgRgLQgHgEgLgIIgEgDIgngcQgJgHgCgFIAAAAIgDgEIAAAAIgDgDIAAgCIgog+IgEgMIgGgMIgNgSIgaggIgJgUIgCgKIgEghIArABIAIgBIABABIAAgBIAPABIAMgBIALABIAbAFIAZALIADABIAFABIACABIACABIAJAEIADABIAKAIIAMAHIAfATIACABIABABIABAAIABABIAAABIAGADIADAEIACACIADADIAPAXIAEAHIACAEIAFAJQAEAHAEANQAQAwAAAjIAAAAIAAACIgBAIIAAACIAAAJQAAAEgCAEIgBAFIgDAFIgEAIQgDAEgGACIgJAEIAAAAIgCABIgDABIgBABIgBABIgBAAIgBAAIgBAAIgCABIgBAAIgDAAIgDABIgEAAgAC5iqQgBAAgBAAQAAAAgBABQAAAAAAAAQAAAAgBAAQgEAIgIACQAgBvBfAvIAGABIACAAQgbiFhcgqIAAAFg");
	this.shape_2.setTransform(23.9,-31.631);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A94534").s().p("ABDBQQhhgogqhrQAJgCADgJIADgBQA6BUBGBGQACACAAADIgGAAg");
	this.shape_3.setTransform(48.35,-41.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D75C46").s().p("AA+BOQhFhGg6hUIgBgGQBgAjAlCBIgDABQAAgDgCgCg");
	this.shape_4.setTransform(49.225,-41.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8F3A0F").s().p("Al8DPIAAAAIgCgBQgDgBgFgFQgGgGgEgFQgDgGgCgJIgDgJIAAgFIgCgEIgCgJIgEgVQgCgTACgSIAAAAIgBgKIABgCQgBgOADgXQAEgeAFgUQAEgQAGgNIAMgTIANgSQACgGAEgEIAKgOQAKgQAQgMQANgKAMgFIABgBIABAAIAAAAIAEgCIAFgBIABgBIACgBIAMgDIADAAQACgBAEAAIAGABQADgBAGAAIAKACIALACIAlAFQAOgBAKADIAWAFIADABIACABIABACQgCAFAAAIIgBAJIAAABIgBABIAAABIAAACIgBAEIAAACIAAADIgBAGIAAAAIgBACIgBADIAAACIgBACIgGAzIgEAQQgCAIgIALIgGAKIgGAIIAAABIgDAFQgFAMgLAVIgBACIgDAEIgCABQAAADgDACIgFAHQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgBACIgCABIgCADIgBABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIgCABIAAACIgIAMIgUAfIgEAEIgBACIgEADQgHAHgXAhQgTAageAAQgPAAgTgHgAFyA5IgEAAIgDAAIgBAAIgBgBIgBABIgBgBIgBAAIgCAAIgCgBIgBABIgBgBIgDgBIgBAAIgCgBQgPgDgRgKQgIgEgKgHIgFgCIgpgYQgHgEgDgEIgBgBIgLgJIgOgOIgHgMQgEgHgRgUQgIgJgEgIIgBAAIgtg7IgEgEQgCgDAAgDQgCgDgBgEIAAgCIgCgDIgBgDIAAgCIgBgEIAAgHIgBgCIAAgDIgEgUIArgDIAIgBIABABIABgBIAOgBIAYgBIAcADIAZAIIAEABIAEABIACAAIACABIAKAEIACAAIALAHQADACAKAEIAfARIADABIABABIAAAAIACAAIABABIAFADIAEAEIACABIADADIASAWIAEAGIACAEIAFAIIALAUQAUAvADAkIAAAAIgBACIABAHIAAACIABAIIgCAJIgBAEIgCAGQgBAEgDAEQgDAEgFADIgJAEIAAABIgCABIgCABIgBABIgBABIgBAAIgBABIgCAAIgCAAIAAAAIgDABIgDABIgEAAgAC+ikIgDABQgDAJgJACQAqBsBiAoIAGAAIACAAQgliDhggjIAAAGg");
	this.shape_5.setTransform(23.575,-32.8165);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A94534").s().p("AhTg1QAIgEACgJIADgCQBHBKBQA6QADABAAADIgFABQhngYg7hig");
	this.shape_6.setTransform(50.475,-43.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D75C46").s().p("ABKBDQhPg6hIhKIgBgFQBjASA6B6IgCABQgBgDgCgBg");
	this.shape_7.setTransform(51.2,-43.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8F3A0F").s().p("AmuDFIAAgBQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgDgBgEgGIgIgNIgDgPIgBgKIABgEIgBgEIgBgKIAAgVQABgTAFgRIgBgBIABgKIABgCQACgNAHgXQAJgcAIgTQAHgQAHgMIAPgRIARgPQACgFAFgEIAMgMQAMgOASgKQAOgHAOgDIAAgBIABAAIABAAIADgBIAGAAIABgBIABAAIANgCIADABIAGAAIAGACQADgBAGACIAJADIALAEIAkALQAOABAJAFIAVAIIADACIACABIABACQgDAFgBAIIAAABIgBAHIgGAyIgCAKQgCAFgGAGIgKAIIgEAFIgEAIQgDAHgKALIgIAJIgGAGIgBACIgDAEIgWAeIgBABIgEAEIgCABQgBADgDABIgFAGQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIgBABIgCABIgEADQAAAAgBABQgBAAAAABQAAAAgBABQAAAAAAABIgCABIAAABIgKALIgZAcIgFADIgBACIgFACQgHAFgcAdQgUATgXAAQgUAAgWgNgAGSAgIAAAAIgCAAIgCAAIgBABIgCgBIgDAAIAAAAIgDgBQgPgBgSgGQgJgDgLgFIgFgBIgtgRIgLgGIgBgBIgNgHQgLgHgEgFIgKgKQgFgGgUgSQgJgHgGgHIAAAAIg3gzIgEgDIgCgDIgBgBIgFgEQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgHgEgCgGIgCgYIgBgDQgDgDADgDIgBgDIAqgJIAHgCIACAAIAAgBIANgDIAYgGIAcgBIAaAEIAEAAIAEABIACgBIADABIALACIACAAIALAFQAEACAKABIAiAMIACABIABABIABgBIABABIACAAIAGADIAEADIACABIADACIAVASIAGAGIACADIAHAHIANATQAcAqAJAjIAAABIAAABIACAIIAAACIACAIIAAAJIgBAFIAAAFQgBAEgCAEQgDAFgEADIgIAGIAAABIgCABIgBABIgBABIgBABIgBABIgBABIgCAAIgBABIgBAAIgDABIgDACIgDABIgEAAIgDAAIgBAAIgCAAIgBABIgBgBgADIidIgDACQgCAJgJADQA8BkBoAXIAFAAIACgBQg6h7hlgTIACAGg");
	this.shape_8.setTransform(23.425,-34.5056);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A94534").s().p("ABEBQQhhgogrhrQAJgCAEgJIACgBQA6BUBGBGQACACAAADIgFAAg");
	this.shape_9.setTransform(48.5,-41.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D75C46").s().p("AA+BOQhFhGg6hVIgBgFQBgAjAlCBIgDABQAAgDgCgCg");
	this.shape_10.setTransform(49.375,-41.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8F3A0F").s().p("Al8DNIAAgBIgCgBQgEAAgEgGQgHgGgDgFQgEgGgCgJIgCgJIgBgEIgBgEIgDgKIgDgUQgCgUACgRIgBgBIAAgKIAAgBQgBgOADgYQAEgeAFgTQAFgRAFgNIAMgTIANgSQADgFADgFIALgNQAKgQAPgNQANgKAMgFIABAAIABgBIABAAIADgBIAFgBIACgCIABAAIAMgEIADAAQACgBAEABIAGAAQADgBAGABIAKACIALACIAlAFQAOgBAKADIAWAFIADABIACABIABACQgCAEAAAJIgBAJIAAABIAAABIAAABIgBABIAAAEIgBACIAAAEIAAAFIgBAAIgBADIgBADIAAABIgBACIgGAzIgEARQgCAIgIALIgGAKIgFAHIgBACIgDAFQgEAMgMAVIgBABIgDAFIgBABQgBADgDABIgFAHQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIgCABIgCABIgCAEIgBAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIgCACIAAABIgHAMIgVAgIgEAEIgBACIgEADQgHAGgXAhQgTAbgeAAQgPAAgSgHgAFzA8IgEgBIgDAAIgBAAIgCAAIgBAAIgBgBIAAAAIgCAAIgCAAIgBAAIgCgBIgDAAIAAgBIgCgBQgPgDgRgJQgJgEgKgHIgEgCIgqgZQgGgFgDgDIgBgBIgLgJIgOgNIgIgNQgEgGgRgUQgHgJgEgIIgBgBIgtg7IgFgEQgBgDAAgDQgCgCgBgFIAAgCIgDgDIAAgCIAAgDIgBgEIgBgGIAAgDIAAgDIgEgUIArgCIAHgBIACAAIAAgBIAOAAIAZgCIAcAEIAZAIIAEAAIADACIADgBIACABIAKAEIACABIAKAGQAEADAKADIAfARIADABIABABIAAAAIABABIABAAIAGAEIAEADIABACIAEADIASAVIADAHIACADIAGAJIAKAUQAUAuAEAkIAAABIgBABIABAHIAAADIABAIIgCAIIgCAFIgBAFQgBAEgDAEQgEAFgEACIgJAFIAAAAIgCABIgCABIgBABIgBABIgCAAIgBABIgBAAIgCABIAAAAIgEABIgCABIgEAAgAC/iiIgDACQgEAIgIACQAqBsBiAoIAFABIADgBQgliChhgjIABAFg");
	this.shape_11.setTransform(23.65,-32.8165);

	this.instance = new lib.dogtail();
	this.instance.setTransform(-68.25,4.6,1,1,0,0,0,-53.5,7.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A94534").s().p("AA9BUQhdgwgihtQAJgCAFgIQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAABAAQAyBZBABMQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABIgFgBg");
	this.shape_12.setTransform(46,-40.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8F3A0F").s().p("AlVDZIAAgBIgDAAQgDgBgFgEQgHgGgEgFQgEgFgEgJIgDgIIgBgEIgCgEIgEgJIgGgUQgEgTAAgSIgBAAIgBgKIAAgCQgDgNAAgYQAAgeADgWQACgPAEgOIAJgUIALgUQABgGADgFIAJgOQAIgRAOgPQAMgLALgHIAAAAIABgBIABAAIAEgCIAEgCIABgBIACgBIAMgFIACAAIAGgBIAGgBQADgBAGAAIALAAIALABIAlAAQANgCALABIAWACIADABIADABIABACQgBAEABAJQAAAIgDARIgFAUIAAALIgDAiQgFAOgCAOIgCAIQgCAKAAAKIgBAFQgDANgJAWIAAACIgDAFIgCABQAAADgDACIgDAHQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIgCABIgBAEIgBABQgBAAAAABQAAABgBAAQAAABAAAAQAAABAAAAIgCACIAAABIgGANIgQAiIgDAEIgCACIgDAEQgFAHgUAkQgSAhgkAAQgMAAgNgDgAFaBCIgFgBIgDAAIAAAAIgBgBIgBAAIgBAAIgBAAIgCgBIgCAAIgBAAIgBgBIgDgBIgBAAIgDgCQgOgEgPgLQgJgEgJgIIgFgDIgngcQgJgHgCgFIgCgEIgBAAIgDgDIAAgCIgog+IgEgMIgGgMIgOgSIgZggIgJgUIgCgKIgEghIArABIAHgBIACABIAAgBIAOABIAMgBIANABIAbAFIAYALIAEABIADABIACABIADABIAKAEIACABIAKAIIAMAHIAfATIACABIABABIAAAAIACABIABABIAEADIAFAEIABACIADADIAQAXIADAHIABAEIAGAJQAEAHAFANQAPAwAAAjIAAAAIAAACIAAAIIAAACIAAAJQgBAEgCAEIgCAFIgBAFIgFAIQgEAEgFACIgJAEIgBAAIgBABIgCABIgBABIgBABIgCAAIgBAAIgCAAIgCABIAAAAIgDAAIgDABIgDAAgAC5iqQgBAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgFAIgJACQAiBvBeAvIAFABIADAAQgaiFhdgqIAAAFg");
	this.shape_13.setTransform(22.5,-31.631);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{x:48.325}},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},7).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_2},{t:this.shape_1,p:{x:48.325}},{t:this.shape}]},2).to({state:[{t:this.shape_13},{t:this.shape_1,p:{x:46.925}},{t:this.shape_12},{t:this.instance}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-55.5,155.8,90.6);


(lib.Dogwalks = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dogears();
	this.instance.setTransform(86.9,27.95,1,1,0,0,0,22.8,-29.8);

	this.instance_1 = new lib.dogtail();
	this.instance_1.setTransform(1.75,58.15,1,1,0,0,0,-53.5,7.2);

	this.instance_2 = new lib.DOGeye();
	this.instance_2.setTransform(87.65,25.85,1,1,0,0,0,61.7,11);

	this.instance_3 = new lib.dogrighteye();
	this.instance_3.setTransform(152.55,21.5,1,1,0,0,0,3.6,5.5);

	this.instance_4 = new lib.CachedBmp_28();
	this.instance_4.setTransform(3.4,4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dogwalks, new cjs.Rectangle(-17,4,144.7,104.5), null);


(lib.dog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dogrighteye();
	this.instance.setTransform(112.8,19.1,1,1,0,0,0,-45.5,7.2);

	this.instance_1 = new lib.DOGeye();
	this.instance_1.setTransform(40.45,17.85,1,1,0,0,0,5.3,6.8);

	this.instance_2 = new lib.CachedBmp_27();
	this.instance_2.setTransform(57.65,6.4,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_26();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dog, new cjs.Rectangle(0,0,135,130), null);


(lib.crumbs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.crumb2();
	this.instance.setTransform(1,0.8,1,1,0,0,0,1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:0.05,y:0.7},0).wait(1).to({x:-0.85,y:0.65},0).wait(1).to({x:-1.75,y:0.8},0).wait(1).to({x:-2.6,y:1},0).wait(1).to({x:-3.4,y:1.4},0).wait(1).to({x:-4.15,y:1.9},0).wait(1).to({x:-4.9,y:2.55},0).wait(1).to({x:-5.6,y:3.35},0).wait(1).to({x:-6.3,y:4.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-0.1,9.3,5.3);


(lib.boom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(778.5,-190,1,1,0,0,0,245.5,151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0695,scaleY:1.0695,x:778.45,y:-189.95,alpha:0.9613},0).wait(1).to({scaleX:1.139,scaleY:1.139,x:778.5,alpha:0.9225},0).wait(1).to({scaleX:1.2086,scaleY:1.2086,x:778.45,alpha:0.8838},0).wait(1).to({scaleX:1.2781,scaleY:1.2781,alpha:0.845},0).wait(1).to({scaleX:1.3476,scaleY:1.3476,x:778.5,alpha:0.8062},0).wait(1).to({scaleX:1.4171,scaleY:1.4171,x:778.45,alpha:0.7675},0).wait(1).to({scaleX:1.4866,scaleY:1.4866,alpha:0.7287},0).wait(1).to({scaleX:1.5561,scaleY:1.5561,x:778.5,alpha:0.69},0).wait(1).to({scaleX:1.6257,scaleY:1.6257,x:778.45,y:-190,alpha:0.6513},0).wait(1).to({scaleX:1.6952,scaleY:1.6952,alpha:0.6125},0).wait(1).to({scaleX:1.7647,scaleY:1.7647,x:778.5,alpha:0.5738},0).wait(1).to({scaleX:1.8342,scaleY:1.8342,x:778.45,alpha:0.535},0).wait(1).to({scaleX:1.9037,scaleY:1.9037,alpha:0.4963},0).wait(1).to({scaleX:1.9733,scaleY:1.9733,x:778.5,alpha:0.4575},0).wait(1).to({scaleX:2.0428,scaleY:2.0428,x:778.45,alpha:0.4187},0).wait(1).to({alpha:0.38},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(277,-498.4,1003,616.9);


(lib.allthebird = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.birdeyes();
	this.instance.setTransform(332.55,37.95,1,1,0,0,0,6.8,6.5);

	this.instance_1 = new lib.BirdsleftWings();
	this.instance_1.setTransform(288.15,18.35,1,1,0,0,0,14.6,31.2);

	this.instance_2 = new lib.BirdsrightWings();
	this.instance_2.setTransform(352.2,68.35,1.5425,1.6627,0,0,0,243,104.4);

	this.instance_3 = new lib.bird();
	this.instance_3.setTransform(297.6,63.05,1,1,0,0,0,63.8,76);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3366CC").s().p("AhTC3QgJgFgGgJQgFgHgCgJIgBgGIgMACQgPACgNgIQgKgFgGgJQgIgLAAgOIgBgEQgNgNgBgRQgCgQACgPQABgQACgQQACgNAIgNIANgTIADgGIADgDIADgFIAEgDIAEgCIABgBIAAAAIABgBIABAAIABgBIABAAIABgBIACAAIABgBQABgGADgFIAHgJIAGgHIAHgIIAEgFIAGgKIAGgMIAGgJIAHgJIAEgGQADgIAGgGQAHgHAJgEQAKgFAMAAQAJAAAJAEQAHAEAFAGIAGAIIABAAIABABIACABIABAAIACABQAEgCAGgBIAKgCIAIAAIAJACIAEABIAIgFQAFgDAFgCIAJgCIAJAAIAIABIABgBIABAAQAGgJAKgGQAKgFALAAQALgBAKAFQAJAFAGAHQAGAIADAKIAAADQAEAIAAAJIAAAPIAAAOIgBAOIgBAJIAAAGIgBAHIgCAHIgCAEIgCAFIgBADIgCADIgCADIgBADIgDAEIgCADIgBADIgCADIgCACIgCADIgBADIgCADIgBADIgCADIgBACIgCAEIgBAEIgDAGIgCAFIgDAEIgBAAIAAACIgBABIgBACIgBACIAAABIgBACIgBABIgBACIgCACIgCADIgCACIgDADIgCADIgBACIgBABIgBACIgDACIgBABIgCACIgBACIgCADIgDACIgDAEIgBACIgBADIgBABIgCACIgCADIgBABIgBABIgBADIgCADIgCACIgCADIgCACIgBACIAAABIgBACIgBABIgBABIAAABIgBABIAAABIgCAHIgDAGIgEAGIgDAEIgDADIgDAFIgCACIgDAEIgEADIgCACIgBABIgBACIgBABIgBABIgBABIgBAAIAAACIgBABIgCAEIgDAEIgDADIgEADIgCABIgCABIgBABIgCABIgCAAIgCABIgCABIgBABIgCAAIgCAAIgCABIgEADIgGADIgGABIgFABIgFABIgBAAIgOgCIgFgCQgFAFgGADQgKAFgLAAQgLgBgJgFgAA7CEIABgBIgBAAg");
	this.shape.setTransform(336.0875,70.9977);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.allthebird, new cjs.Rectangle(85.2,-12.8,300.3,120.3), null);


(lib.allbird2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fallingbirdeye1();
	this.instance.setTransform(98.8,55.35,1.0833,1.0833,0,0,0,46.9,0.1);

	this.instance_1 = new lib.birdwings2();
	this.instance_1.setTransform(119.2,78.6,0.7253,0.7253,-29.9973,0,0,39.9,21.3);

	this.instance_2 = new lib.bird();
	this.instance_2.setTransform(63.9,80.3,1,1,0,0,0,63.9,76);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3366CC").s().p("AApCsIgBgBIgEgBQgEgBgCgEIAAgEIAAgBIgDADQgJAIgMAAQgGAAgEgCIgEABIgIACIgIgBIgIgDIgBAAIgBgBIAAAAIgBgBIgBAAIgBgBIAAAAIgBgBIAAAAIgBgBIgCgBIgDgBIgCgBIgCgBIgCgCIgBgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAAAIgBgBIgBgBIAAgCIgBgBIgBgCIAAgCIgBgBIgDACIgDABIgDABIgEABIgDABIgBAAQgCAHgFAFQgEAGgGADQgGADgHgBQgHAAgGgDQgFgDgEgFIgDgDIAAgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIAAgBQgCgHABgGIADgOIACgNIAFgMIACgGIgCAAIgBgBIgCAAIgCAAIgCgBIgBAAIgBgBQgNABgJgJQgIgJAAgLQABgNADgNIACgMQAEgNAFgLIALgYIACgHIACgIIACgIIADgHIADgFIACgEIAEgEIAEgDIAFgCIAFgBIACgBIAAAAIABgBIABAAIABgBIABAAIAAgBIABgBIABAAIADgDIADgDIADgCIAEgBIAEgBIABgBQAGgMAIgKIAQgTQAJgJAKgIIAKgIQAFgDAGgCQAJgCAIACIAIAEIAFAEIAFAGIADAHIACAGIAAAFIAAAAIADAAIAEgBIAFAAIAEAAIAEABIAEABIAGgCIAIgBIAHABIAGACIAFADIAAABIACgDIACgCIABgDIACgCIABgDIABgBQgCgKAEgIQAEgIAHgFQAJgGALACQAKABAHAIQAHAIACAKQABAFgBAFQAEAEACAFQACAFAAAFIABAKIgBAMQAAAGgCAFIgBABIAAABIgBACIAAACIgBABIgBACIAAABIgBABIAAABIgBACIgBABIAAACIgBACIgBABIgBACIAAACIgBACIgBACIgBACIgCACIgBACIAAABIgBACIAAABIgBACIgBACIgBABIgBACIAAABIgBACIgBABIgBACIAAABIgBABIgBABIgBACIAAABIgBACIgBACIgBACIgBABIAAACIgBACIgBABIgBACIgBABIgBACIAAAAIgBACIAAACIgBACIgBABIgBACIgBABIAAAAIgBAAIAAABIAAABIgBABIAAACIgBACIgBABIgBACIAAABIgBACIgBABIAAACIgBACIgBABIgBACIAAABIgBABIAAACIgBACIgBABIAAACIgBACIgBABIAAABIAAABIAAABIAAACIgBABIAAACIgBACIgBACIAAAAIgBABIAAABIAAABIgBAAIAAABIAAAAIgBABIgBAEIgBADIgBADIgCADIgCADIgCACIAAABIgBABIgBACIgBABIgBABIgBABIgDAEIgDAEIgDAEIgDADIgDACIgBABIAAAAIgCACIgBABIgBAAIAAABIgCABIgBACIgCACIgCACIgCACIgBABIAAABIAGAEIAKADIAJACIADgEQACgCAHACIAIACIAGgBQAEAAACAEQACADgCADQgBACgEACIgGAEIgCADIgEADIgCACIgXATQgLAIgEACIgEADQgCACgCAAQgDAAgDgCg");
	this.shape.setTransform(101.3736,87.603);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.allbird2, new cjs.Rectangle(-148.6,35.8,292,101.89999999999999), null);


(lib.Standingdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dogears();
	this.instance.setTransform(97.25,22.05,1,1,0,0,0,23.9,-31.7);

	this.instance_1 = new lib.dogtail();
	this.instance_1.setTransform(7.75,59.3,1,1,0,0,0,-53.5,7.2);

	this.instance_2 = new lib.dogrighteye();
	this.instance_2.setTransform(112.8,19.15,1,1,0,0,0,-45.5,7.2);

	this.instance_3 = new lib.DOGeye();
	this.instance_3.setTransform(97,21.95,1,1,0,0,0,61.7,11);

	this.instance_4 = new lib.CachedBmp_34();
	this.instance_4.setTransform(12.4,0,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_35();
	this.instance_5.setTransform(12.15,0,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_36();
	this.instance_6.setTransform(11.2,0,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_37();
	this.instance_7.setTransform(11.6,0,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_38();
	this.instance_8.setTransform(10.4,0,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_39();
	this.instance_9.setTransform(11.6,0,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_40();
	this.instance_10.setTransform(12.15,0,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_41();
	this.instance_11.setTransform(11.2,0,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_42();
	this.instance_12.setTransform(11.6,0,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_43();
	this.instance_13.setTransform(10.4,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3,p:{y:21.95}},{t:this.instance_2,p:{x:112.8}},{t:this.instance_1,p:{y:59.3,x:7.75}},{t:this.instance,p:{x:97.25,y:22.05}}]}).to({state:[{t:this.instance_5},{t:this.instance,p:{x:97.45,y:22.05}},{t:this.instance_1,p:{y:59.05,x:7.75}},{t:this.instance_3,p:{y:21.85}},{t:this.instance_2,p:{x:112.55}}]},1).to({state:[{t:this.instance_6},{t:this.instance,p:{x:97.7,y:21.95}},{t:this.instance_1,p:{y:59.05,x:7.75}},{t:this.instance_2,p:{x:112.8}},{t:this.instance_3,p:{y:21.85}}]},1).to({state:[{t:this.instance_7},{t:this.instance_3,p:{y:21.85}},{t:this.instance_2,p:{x:112.8}},{t:this.instance,p:{x:99.25,y:21.95}},{t:this.instance_1,p:{y:59.2,x:8.15}}]},1).to({state:[{t:this.instance_8},{t:this.instance,p:{x:98.6,y:21.95}},{t:this.instance_3,p:{y:21.95}},{t:this.instance_2,p:{x:112.8}},{t:this.instance_1,p:{y:59.05,x:7.75}}]},1).to({state:[{t:this.instance_9},{t:this.instance_3,p:{y:21.85}},{t:this.instance_2,p:{x:112.8}},{t:this.instance,p:{x:99.25,y:21.95}},{t:this.instance_1,p:{y:59.2,x:8.15}}]},1).to({state:[{t:this.instance_10},{t:this.instance,p:{x:97.45,y:22.05}},{t:this.instance_1,p:{y:59.05,x:7.75}},{t:this.instance_3,p:{y:21.85}},{t:this.instance_2,p:{x:112.55}}]},1).to({state:[{t:this.instance_11},{t:this.instance,p:{x:97.7,y:21.95}},{t:this.instance_1,p:{y:59.05,x:7.75}},{t:this.instance_2,p:{x:112.8}},{t:this.instance_3,p:{y:21.85}}]},1).to({state:[{t:this.instance_12},{t:this.instance_3,p:{y:21.85}},{t:this.instance_2,p:{x:112.8}},{t:this.instance,p:{x:99.25,y:21.95}},{t:this.instance_1,p:{y:59.2,x:8.15}}]},1).to({state:[{t:this.instance_13},{t:this.instance,p:{x:98.6,y:21.95}},{t:this.instance_3,p:{y:21.95}},{t:this.instance_2,p:{x:112.8}},{t:this.instance_1,p:{y:59.05,x:7.75}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,0,150,132.5);


(lib.Scene_1_hilazon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hilazon
	this.instance = new lib.hilazon();
	this.instance.setTransform(108.35,650.5,1,1,0,0,0,51.2,41.8);

	this.instance_1 = new lib.hilazonsmaile();
	this.instance_1.setTransform(2113.8,568.05,0.9999,0.9999,0,0,0,-46.1,-9.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({x:107.35},0).wait(1).to({x:111.15},0).wait(1).to({x:114.95},0).wait(1).to({x:118.8},0).wait(1).to({x:122.6},0).wait(1).to({x:126.4},0).wait(1).to({x:130.25},0).wait(1).to({x:134.05},0).wait(1).to({x:137.85},0).wait(1).to({x:141.7},0).wait(1).to({x:145.5},0).wait(1).to({x:149.3},0).wait(1).to({x:153.15},0).wait(1).to({x:156.95},0).wait(1).to({x:160.75},0).wait(1).to({x:164.6},0).wait(1).to({x:168.4},0).wait(1).to({x:172.2},0).wait(1).to({x:176.05},0).wait(1).to({x:179.85},0).wait(1).to({x:183.65},0).wait(1).to({x:187.5},0).wait(1).to({x:191.3},0).wait(1).to({x:195.1},0).wait(1).to({x:198.95},0).wait(1).to({x:202.75},0).wait(1).to({x:206.55},0).wait(1).to({x:210.4},0).wait(1).to({x:214.2},0).wait(1).to({x:218},0).wait(1).to({x:221.85},0).wait(1).to({x:225.65},0).wait(1).to({x:229.45},0).wait(1).to({x:233.3},0).wait(1).to({x:237.1},0).wait(1).to({x:240.9},0).wait(1).to({x:244.75},0).wait(1).to({x:248.55},0).wait(1).to({x:252.4},0).wait(1).to({x:256.2},0).wait(1).to({x:260},0).wait(1).to({x:263.85},0).wait(1).to({x:267.65},0).wait(1).to({x:271.45},0).wait(1).to({x:275.3},0).wait(1).to({x:279.1},0).wait(1).to({x:282.9},0).wait(1).to({x:286.75},0).wait(1).to({x:290.55},0).wait(1).to({x:294.35},0).wait(1).to({x:298.2},0).wait(1).to({x:302},0).wait(1).to({x:305.8},0).wait(1).to({x:309.65},0).wait(1).to({x:313.45},0).wait(1).to({x:317.25},0).wait(1).to({x:321.1},0).wait(1).to({x:324.9},0).wait(1).to({x:328.7},0).wait(1).to({x:332.55},0).wait(1).to({x:336.35},0).wait(1).to({x:340.15},0).wait(1).to({x:344},0).wait(1).to({x:347.8},0).wait(1).to({x:351.6},0).wait(1).to({x:355.45},0).wait(1).to({x:359.25},0).wait(1).to({x:363.05},0).wait(1).to({x:366.9},0).wait(1).to({x:370.7},0).wait(1).to({x:374.5},0).wait(1).to({x:378.35},0).wait(1).to({x:382.15},0).wait(1).to({x:385.95},0).wait(1).to({x:389.8},0).wait(1).to({x:393.6},0).wait(1).to({x:397.45},0).wait(1).to({x:400.8},0).wait(1).to({x:404.15},0).wait(1).to({x:407.5},0).wait(1).to({x:410.9},0).wait(1).to({x:414.25},0).wait(1).to({x:417.6},0).wait(1).to({x:421},0).wait(1).to({x:424.35},0).wait(1).to({x:427.7},0).wait(1).to({x:431.05},0).wait(1).to({x:434.45},0).wait(1).to({x:437.8},0).wait(1).to({x:441.15},0).wait(1).to({x:444.55},0).wait(1).to({x:447.9},0).wait(1).to({x:451.25},0).wait(1).to({x:454.6},0).wait(1).to({x:458},0).wait(1).to({x:461.35},0).wait(1).to({x:464.7},0).wait(1).to({x:468.1},0).wait(1).to({x:471.45},0).wait(1).to({x:474.8},0).wait(1).to({x:478.2},0).wait(1).to({x:481.55},0).wait(1).to({x:484.9},0).wait(1).to({x:488.25},0).wait(1).to({x:491.65},0).wait(1).to({x:495},0).wait(1).to({x:498.35},0).wait(1).to({x:501.75},0).wait(1).to({x:505.1},0).wait(1).to({x:508.45},0).wait(1).to({x:511.8},0).wait(1).to({x:515.2},0).wait(1).to({x:518.55},0).wait(1).to({x:521.9},0).wait(1).to({x:525.3},0).wait(1).to({x:528.65},0).wait(1).to({x:532},0).wait(1).to({x:535.4},0).wait(1).to({x:538.75},0).wait(1).to({x:542.1},0).wait(1).to({x:545.45},0).wait(1).to({x:548.85},0).wait(1).to({x:552.2},0).wait(1).to({x:555.55},0).wait(1).to({x:558.95},0).wait(1).to({x:562.3},0).wait(1).to({x:565.65},0).wait(1).to({x:569},0).wait(1).to({x:572.4},0).wait(1).to({x:575.75},0).wait(1).to({x:579.1},0).wait(1).to({x:582.5},0).wait(1).to({x:585.85},0).wait(1).to({x:589.2},0).wait(1).to({x:592.6},0).wait(1).to({x:595.95},0).wait(1).to({x:599.3},0).wait(1).to({x:602.65},0).wait(1).to({x:606.05},0).wait(1).to({x:609.4},0).wait(1).to({x:612.75},0).wait(1).to({x:616.15},0).wait(1).to({x:619.5},0).wait(1).to({x:622.85},0).wait(1).to({x:626.2},0).wait(1).to({x:629.6},0).wait(1).to({x:632.95},0).wait(1).to({x:636.3},0).wait(1).to({x:639.7},0).wait(1).to({x:643.05},0).wait(1).to({x:646.4},0).wait(1).to({x:649.8},0).wait(1).to({x:652.65,y:650.45},0).wait(1).to({x:655.5},0).wait(1).to({x:658.35,y:650.4},0).wait(1).to({x:661.2},0).wait(1).to({x:664.05,y:650.35},0).wait(1).to({x:666.95},0).wait(1).to({x:669.8,y:650.3},0).wait(1).to({x:672.65},0).wait(1).to({x:675.5,y:650.25},0).wait(1).to({x:678.35},0).wait(1).to({x:681.25,y:650.2},0).wait(1).to({x:684.1},0).wait(1).to({x:686.95},0).wait(1).to({x:689.8,y:650.15},0).wait(1).to({x:692.65},0).wait(1).to({x:695.5,y:650.1},0).wait(1).to({x:698.4},0).wait(1).to({x:701.25,y:650.05},0).wait(1).to({x:704.1},0).wait(1).to({x:706.95,y:650},0).wait(1).to({x:709.8},0).wait(1).to({x:712.7,y:649.95},0).wait(1).to({x:715.55},0).wait(1).to({x:718.4,y:649.9},0).wait(1).to({x:721.25},0).wait(1).to({x:724.1},0).wait(1).to({x:726.95,y:649.85},0).wait(1).to({x:729.85},0).wait(1).to({x:732.7,y:649.8},0).wait(1).to({x:735.55},0).wait(1).to({x:738.4,y:649.75},0).wait(1).to({x:741.25},0).wait(1).to({x:744.15,y:649.7},0).wait(1).to({x:747},0).wait(1).to({x:749.85,y:649.65},0).wait(1).to({x:752.7},0).wait(1).to({x:755.55,y:649.6},0).wait(1).to({x:758.45},0).wait(1).to({x:761.3},0).wait(1).to({x:764.15,y:649.55},0).wait(1).to({x:767},0).wait(1).to({x:769.85,y:649.5},0).wait(1).to({x:772.7},0).wait(1).to({x:775.6,y:649.45},0).wait(1).to({x:778.45},0).wait(1).to({x:781.3,y:649.4},0).wait(1).to({x:784.15},0).wait(1).to({x:787,y:649.35},0).wait(1).to({x:789.9},0).wait(1).to({x:792.75,y:649.3},0).wait(1).to({x:795.6},0).wait(1).to({x:798.45},0).wait(1).to({x:801.3,y:649.25},0).wait(1).to({x:804.15},0).wait(1).to({x:807.05,y:649.2},0).wait(1).to({x:809.9},0).wait(1).to({x:812.75,y:649.15},0).wait(1).to({x:815.6},0).wait(1).to({x:818.45,y:649.1},0).wait(1).to({x:821.35},0).wait(1).to({x:824.2,y:649.05},0).wait(1).to({x:827.05},0).wait(1).to({x:829.9,y:649},0).wait(1).to({x:832.75},0).wait(1).to({x:835.65},0).wait(1).to({x:838.15},0).wait(1).to({x:840.7},0).wait(1).to({x:843.25},0).wait(1).to({x:845.8},0).wait(1).to({x:848.3},0).wait(1).to({x:850.85},0).wait(1).to({x:853.4},0).wait(1).to({x:855.95},0).wait(1).to({x:858.45},0).wait(1).to({x:861},0).wait(1).to({x:863.55},0).wait(1).to({x:866.1},0).wait(1).to({x:868.6},0).wait(1).to({x:871.15},0).wait(1).to({x:873.7},0).wait(1).to({x:876.25},0).wait(1).to({x:878.75},0).wait(1).to({x:881.3},0).wait(1).to({x:883.85},0).wait(1).to({x:886.4},0).wait(1).to({x:888.9},0).wait(1).to({x:891.45},0).wait(1).to({x:894},0).wait(1).to({x:896.55},0).wait(1).to({x:899.05},0).wait(1).to({x:901.6},0).wait(1).to({x:904.15},0).wait(1).to({x:906.7},0).wait(1).to({x:909.2},0).wait(1).to({x:911.75},0).wait(1).to({x:914.3},0).wait(1).to({x:916.85},0).wait(1).to({x:919.35},0).wait(1).to({x:921.9},0).wait(1).to({x:924.45},0).wait(1).to({x:927},0).wait(1).to({x:929.5},0).wait(1).to({x:932.05},0).wait(1).to({x:934.6},0).wait(1).to({x:937.15},0).wait(1).to({x:939.65},0).wait(1).to({x:942.2},0).wait(1).to({x:944.75},0).wait(1).to({x:947.3},0).wait(1).to({x:949.8},0).wait(1).to({x:952.35},0).wait(1).to({x:954.9},0).wait(1).to({x:957.45},0).wait(1).to({x:959.95},0).wait(1).to({x:962.5},0).wait(1).to({x:965.05},0).wait(1).to({x:967.6},0).wait(1).to({x:970.1},0).wait(1).to({x:972.65},0).wait(1).to({x:975.2},0).wait(1).to({x:977.75},0).wait(1).to({x:980.25},0).wait(1).to({x:982.8},0).wait(1).to({x:985.35},0).wait(1).to({x:987.9},0).wait(1).to({x:990.4},0).wait(1).to({x:992.95},0).wait(1).to({x:995.5},0).wait(1).to({x:998.05},0).wait(1).to({x:1000.6},0).wait(1).to({x:1003.25},0).wait(1).to({x:1005.9},0).wait(1).to({x:1008.6},0).wait(1).to({x:1011.25},0).wait(1).to({x:1013.9},0).wait(1).to({x:1016.6},0).wait(1).to({x:1019.25},0).wait(1).to({x:1021.9},0).wait(1).to({x:1024.6},0).wait(1).to({x:1027.25},0).wait(1).to({x:1029.9},0).wait(1).to({x:1032.6},0).wait(1).to({x:1035.25},0).wait(1).to({x:1037.95},0).wait(1).to({x:1040.6},0).wait(1).to({x:1043.25},0).wait(1).to({x:1045.95},0).wait(1).to({x:1048.6},0).wait(1).to({x:1051.25},0).wait(1).to({x:1053.95},0).wait(1).to({x:1056.6},0).wait(1).to({x:1059.25},0).wait(1).to({x:1061.95},0).wait(1).to({x:1064.6},0).wait(1).to({x:1067.25},0).wait(1).to({x:1069.95},0).wait(1).to({x:1072.6},0).wait(1).to({x:1075.3},0).wait(1).to({x:1077.95},0).wait(1).to({x:1080.6},0).wait(1).to({x:1083.3},0).wait(1).to({x:1085.95},0).wait(1).to({x:1088.6},0).wait(1).to({x:1091.3},0).wait(1).to({x:1093.95},0).wait(1).to({x:1096.6},0).wait(1).to({x:1099.3},0).wait(1).to({x:1101.95},0).wait(1).to({x:1104.6},0).wait(1).to({x:1107.3},0).wait(1).to({x:1109.95},0).wait(1).to({x:1112.65},0).wait(1).to({x:1115.3},0).wait(1).to({x:1117.95},0).wait(1).to({x:1120.65},0).wait(1).to({x:1123.3},0).wait(1).to({x:1125.95},0).wait(1).to({x:1128.65},0).wait(1).to({x:1131.3},0).wait(1).to({x:1133.95},0).wait(1).to({x:1136.65},0).wait(1).to({x:1139.3},0).wait(1).to({x:1141.95},0).wait(1).to({x:1144.65},0).wait(1).to({x:1147.3},0).wait(1).to({x:1150},0).wait(1).to({x:1152.65},0).wait(1).to({x:1155.3},0).wait(1).to({x:1158},0).wait(1).to({x:1160.65},0).wait(1).to({x:1163.3},0).wait(1).to({x:1166},0).wait(1).to({x:1168.65},0).wait(1).to({x:1171.3},0).wait(1).to({x:1174},0).wait(1).to({x:1176.65},0).wait(1).to({x:1179.3},0).wait(1).to({x:1182},0).wait(1).to({x:1184.65},0).wait(1).to({x:1187.35},0).wait(1).to({x:1191.25},0).wait(1).to({x:1195.15},0).wait(1).to({x:1199.05},0).wait(1).to({x:1203},0).wait(1).to({x:1206.9},0).wait(1).to({x:1210.8},0).wait(1).to({x:1214.75},0).wait(1).to({x:1218.65},0).wait(1).to({x:1222.55},0).wait(1).to({x:1226.5},0).wait(1).to({x:1230.4},0).wait(1).to({x:1234.3},0).wait(1).to({x:1238.2},0).wait(1).to({x:1242.15},0).wait(1).to({x:1246.05},0).wait(1).to({x:1249.95},0).wait(1).to({x:1253.9},0).wait(1).to({x:1257.8},0).wait(1).to({x:1261.7},0).wait(1).to({x:1265.65},0).wait(1).to({x:1269.55},0).wait(1).to({x:1273.45},0).wait(1).to({x:1277.4},0).wait(1).to({x:1281.3},0).wait(1).to({x:1285.2},0).wait(1).to({x:1289.1},0).wait(1).to({x:1293.05},0).wait(1).to({x:1296.95},0).wait(1).to({x:1300.85},0).wait(1).to({x:1304.8},0).wait(1).to({x:1308.7},0).wait(1).to({x:1312.6},0).wait(1).to({x:1316.55},0).wait(1).to({x:1320.45},0).wait(1).to({x:1324.35},0).wait(1).to({x:1328.3},0).wait(1).to({x:1332.2},0).wait(1).to({x:1336.1},0).wait(1).to({x:1340},0).wait(1).to({x:1343.95},0).wait(1).to({x:1347.85},0).wait(1).to({x:1351.75},0).wait(1).to({x:1355.7},0).wait(1).to({x:1359.6},0).wait(1).to({x:1363.5},0).wait(1).to({x:1367.45},0).wait(1).to({x:1371.35},0).wait(1).to({x:1375.25},0).wait(1).to({x:1379.2},0).wait(1).to({x:1383.1},0).wait(1).to({x:1387},0).wait(1).to({x:1390.9},0).wait(1).to({x:1394.85},0).wait(1).to({x:1398.75},0).wait(1).to({x:1402.65},0).wait(1).to({x:1406.6},0).wait(1).to({x:1410.5},0).wait(1).to({x:1414.4},0).wait(1).to({x:1418.35},0).wait(1).to({x:1422.25},0).wait(1).to({x:1426.15},0).wait(1).to({x:1430.1},0).wait(1).to({x:1444.25},0).wait(1).to({x:1458.45},0).wait(1).to({x:1472.65},0).wait(1).to({x:1486.85},0).wait(1).to({x:1501.05},0).wait(1).to({x:1515.25},0).wait(1).to({x:1529.45},0).wait(1).to({x:1543.65},0).wait(1).to({x:1557.85},0).wait(1).to({x:1572.05},0).wait(1).to({x:1586.2},0).wait(1).to({x:1600.4},0).wait(1).to({x:1614.6},0).wait(1).to({x:1628.8},0).wait(1).to({x:1643},0).wait(1).to({x:1657.2},0).wait(1).to({x:1671.4},0).wait(1).to({x:1685.6},0).wait(1).to({x:1699.8},0).wait(1).to({x:1714},0).wait(1).to({x:1718.95,y:647.9},0).wait(1).to({x:1723.95,y:646.8},0).wait(1).to({x:1728.95,y:645.75},0).wait(1).to({x:1733.95,y:644.65},0).wait(1).to({x:1738.95,y:643.6},0).wait(1).to({x:1743.95,y:642.5},0).wait(1).to({x:1748.95,y:641.4},0).wait(1).to({x:1753.95,y:640.35},0).wait(1).to({x:1758.9,y:639.25},0).wait(1).to({x:1763.9,y:638.2},0).wait(1).to({x:1768.9,y:637.1},0).wait(1).to({x:1773.9,y:636},0).wait(1).to({x:1778.9,y:634.95},0).wait(1).to({x:1783.9,y:633.85},0).wait(1).to({x:1788.9,y:632.8},0).wait(1).to({x:1793.9,y:631.7},0).wait(1).to({x:1798.9,y:630.65},0).wait(1).to({x:1803.85,y:629.55},0).wait(1).to({x:1808.85,y:628.45},0).wait(1).to({x:1813.85,y:627.4},0).wait(1).to({x:1818.85,y:626.3},0).wait(1).to({x:1823.85,y:625.25},0).wait(1).to({x:1828.85,y:624.15},0).wait(1).to({x:1833.85,y:623.05},0).wait(1).to({x:1838.85,y:622},0).wait(1).to({x:1843.8,y:620.9},0).wait(1).to({x:1848.8,y:619.85},0).wait(1).to({x:1853.8,y:618.75},0).wait(1).to({x:1858.8,y:617.7},0).wait(1).to({x:1863.8,y:616.6},0).wait(1).to({x:1868.8,y:615.5},0).wait(1).to({x:1873.8,y:614.45},0).wait(1).to({x:1878.8,y:613.35},0).wait(1).to({x:1883.8,y:612.3},0).wait(1).to({x:1888.75,y:611.2},0).wait(1).to({x:1893.75,y:610.1},0).wait(1).to({x:1898.75,y:609.05},0).wait(1).to({x:1903.75,y:607.95},0).wait(1).to({x:1908.75,y:606.9},0).wait(1).to({x:1913.75,y:605.8},0).wait(1).to({x:1918.75,y:604.75},0).wait(1).to({x:1923.75,y:603.65},0).wait(1).to({x:1928.7,y:602.55},0).wait(1).to({x:1933.7,y:601.5},0).wait(1).to({x:1938.7,y:600.4},0).wait(1).to({x:1943.7,y:599.35},0).wait(1).to({x:1948.7,y:598.25},0).wait(1).to({x:1953.7,y:597.15},0).wait(1).to({x:1958.7,y:596.1},0).wait(1).to({x:1963.7,y:595},0).wait(1).to({x:1968.7,y:593.95},0).wait(1).to({x:1973.65,y:592.85},0).wait(1).to({x:1978.65,y:591.8},0).wait(1).to({x:1983.65,y:590.7},0).wait(1).to({x:1988.65,y:589.6},0).wait(1).to({x:1993.65,y:588.55},0).wait(1).to({x:1998.65,y:587.45},0).wait(1).to({x:2003.65,y:586.4},0).wait(1).to({x:2008.65,y:585.3},0).wait(1).to({x:2013.6,y:584.2},0).wait(1).to({x:2018.6,y:583.15},0).wait(1).to({x:2023.6,y:582.05},0).wait(1).to({x:2028.6,y:581},0).wait(1).to({x:2033.6,y:579.9},0).wait(1).to({x:2038.6,y:578.85},0).wait(1).to({x:2043.6,y:577.75},0).wait(1).to({x:2048.6,y:576.65},0).wait(1).to({x:2053.6,y:575.6},0).wait(1).to({x:2058.55,y:574.5},0).wait(1).to({x:2063.55,y:573.45},0).wait(1).to({x:2068.55,y:572.35},0).wait(1).to({x:2073.55,y:571.25},0).wait(1).to({x:2078.55,y:570.2},0).wait(1).to({x:2083.55,y:569.1},0).wait(1).to({x:2088.55,y:568.05},0).wait(1).to({x:2093.55,y:566.95},0).wait(1).to({x:2098.55,y:565.9},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(579).to({_off:false},0).wait(1).to({regX:-48.4,regY:-12.4,scaleX:1,scaleY:1,x:2116.4,y:564.35},0).wait(1).to({x:2121.35,y:563.25},0).wait(1).to({x:2126.3,y:562.15},0).wait(1).to({x:2131.25,y:561.1},0).wait(1).to({x:2136.2,y:560},0).wait(1).to({x:2141.15,y:558.9},0).wait(1).to({x:2146.05,y:557.85},0).wait(1).to({x:2151,y:556.75},0).wait(1).to({x:2155.95,y:555.65},0).wait(1).to({x:2160.9,y:554.6},0).wait(1).to({x:2165.85,y:553.5},0).wait(1).to({x:2170.8,y:552.4},0).wait(1).to({x:2175.7,y:551.3},0).wait(1).to({x:2180.65,y:550.25},0).wait(1).to({x:2185.6,y:549.15},0).wait(1).to({x:2190.55,y:548.05},0).wait(1).to({x:2195.5,y:547},0).wait(1).to({x:2200.45,y:545.9},0).wait(1).to({x:2205.35,y:544.8},0).wait(1).to({x:2210.3,y:543.75},0).wait(1).to({x:2215.25,y:542.65},0).wait(1).to({x:2220.2,y:541.55},0).wait(1).to({x:2225.15,y:540.5},0).wait(1).to({x:2230.1,y:539.4},0).wait(1).to({x:2235,y:538.3},0).wait(1).to({x:2239.95,y:537.2},0).wait(1).to({x:2244.9,y:536.15},0).wait(1).to({x:2249.85,y:535.05},0).wait(1).to({x:2254.8,y:533.95},0).wait(1).to({x:2259.75,y:532.9},0).wait(1).to({x:2264.65,y:531.8},0).wait(1).to({x:2269.6,y:530.7},0).wait(1).to({x:2274.55,y:529.65},0).wait(1).to({x:2279.5,y:528.55},0).wait(1).to({x:2284.45,y:527.45},0).wait(1).to({x:2289.4,y:526.4},0).wait(1).to({x:2294.3,y:525.3},0).wait(1).to({x:2299.25,y:524.2},0).wait(1).to({x:2304.2,y:523.1},0).wait(1).to({x:2309.15,y:522.05},0).wait(1).to({x:2314.1,y:520.95},0).wait(1).to({x:2319.05,y:519.85},0).wait(1).to({x:2323.95,y:518.8},0).wait(1).to({x:2328.9,y:517.7},0).wait(1).to({x:2333.85,y:516.6},0).wait(1).to({x:2338.8,y:515.55},0).wait(1).to({x:2343.75,y:514.45},0).wait(1).to({x:2348.7,y:513.35},0).wait(1).to({x:2353.65,y:512.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bird = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bird
	this.instance = new lib.allthebird();
	this.instance.setTransform(-175.25,275.1,1,1,0,0,0,19,60.6);

	this.instance_1 = new lib.allbird2();
	this.instance_1.setTransform(1325.85,143.85,0.9999,0.9999,0,0,0,76,53.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66).to({x:-169.65},0).wait(1).to({regX:236,regY:47.3,x:55.35,y:263},0).wait(1).to({x:63.5,y:264.2},0).wait(1).to({x:71.5,y:265.3},0).wait(1).to({x:79.7,y:266.3},0).wait(1).to({x:87.8,y:267.25},0).wait(1).to({x:95.9,y:268.1},0).wait(1).to({x:104,y:268.85},0).wait(1).to({x:112.15,y:269.55},0).wait(1).to({x:120.25,y:270.2},0).wait(1).to({x:128.4,y:270.8},0).wait(1).to({x:136.55,y:271.3},0).wait(1).to({x:144.7,y:271.75},0).wait(1).to({x:152.85,y:272.1},0).wait(1).to({x:161,y:272.45},0).wait(1).to({x:169.15,y:272.7},0).wait(1).to({x:177.3,y:272.9},0).wait(1).to({x:185.45,y:273.05},0).wait(1).to({x:193.6,y:273.15},0).wait(1).to({x:201.75,y:273.2},0).wait(1).to({x:209.95},0).wait(1).to({x:218.1,y:273.15},0).wait(1).to({x:226.25,y:273},0).wait(1).to({x:234.4,y:272.85},0).wait(1).to({x:242.5,y:272.6},0).wait(1).to({x:250.65,y:272.35},0).wait(1).to({x:258.8,y:272},0).wait(1).to({x:266.95,y:271.65},0).wait(1).to({x:275.1,y:271.2},0).wait(1).to({x:286.35,y:270.5},0).wait(1).to({x:291.25,y:270.2},0).wait(1).to({x:299.45,y:269.65},0).wait(1).to({x:307.65,y:269.1},0).wait(1).to({x:315.8,y:268.55},0).wait(1).to({x:323.95,y:268.05},0).wait(1).to({x:332.1,y:267.5},0).wait(1).to({x:340.2,y:266.95},0).wait(1).to({x:348.35,y:266.4},0).wait(1).to({x:356.5,y:265.9},0).wait(1).to({x:364.65,y:265.35},0).wait(1).to({x:372.75,y:264.8},0).wait(1).to({x:380.9,y:264.25},0).wait(1).to({x:389.05,y:263.75},0).wait(1).to({x:397.2,y:263.2},0).wait(1).to({x:405.35,y:262.65},0).wait(1).to({x:413.45,y:262.1},0).wait(1).to({x:421.6,y:261.55},0).wait(1).to({x:429.75,y:261.05},0).wait(1).to({x:437.9,y:260.5},0).wait(1).to({x:446,y:259.95},0).wait(1).to({x:454.15,y:259.4},0).wait(1).to({x:462.3,y:258.9},0).wait(1).to({x:470.45,y:258.35},0).wait(1).to({x:478.6,y:257.8},0).wait(1).to({x:486.7,y:257.25},0).wait(1).to({x:494.85,y:256.75},0).wait(1).to({x:503,y:256.2},0).wait(1).to({x:511.15,y:255.65},0).wait(1).to({x:519.25,y:255.1},0).wait(1).to({x:527.4,y:254.55},0).wait(1).to({x:535.55,y:254.05},0).wait(1).to({x:543.7,y:253.5},0).wait(1).to({x:551.85,y:252.95},0).wait(1).to({x:559.95,y:252.4},0).wait(1).to({x:568.1,y:251.9},0).wait(1).to({x:576.25,y:251.35},0).wait(1).to({x:584.4,y:250.8},0).wait(1).to({x:592.5,y:250.25},0).wait(1).to({x:600.65,y:249.7},0).wait(1).to({x:608.8,y:249.2},0).wait(1).to({x:616.95,y:248.65},0).wait(1).to({x:625.1,y:248.1},0).wait(1).to({x:633.25,y:247.55},0).wait(1).to({x:641.35,y:247.05},0).wait(1).to({x:649.5,y:246.5},0).wait(1).to({x:657.7,y:245.95},0).wait(1).to({x:665.8,y:245.4},0).wait(1).to({x:673.95,y:244.9},0).wait(1).to({x:679.25,y:244.1},0).wait(1).to({x:684.6,y:243.35},0).wait(1).to({x:689.9,y:242.55},0).wait(1).to({x:695.25,y:241.8},0).wait(1).to({x:700.6,y:241.05},0).wait(1).to({x:705.9,y:240.25},0).wait(1).to({x:711.25,y:239.5},0).wait(1).to({x:716.55,y:238.75},0).wait(1).to({x:721.9,y:237.95},0).wait(1).to({x:727.25,y:237.2},0).wait(1).to({x:732.55,y:236.4},0).wait(1).to({x:737.9,y:235.65},0).wait(1).to({x:743.25,y:234.9},0).wait(1).to({x:748.55,y:234.1},0).wait(1).to({x:753.9,y:233.35},0).wait(1).to({x:759.25,y:232.6},0).wait(1).to({x:764.55,y:231.85},0).wait(1).to({x:769.9,y:231.05},0).wait(1).to({x:775.2,y:230.3},0).wait(1).to({x:780.55,y:229.55},0).wait(1).to({x:785.9,y:228.75},0).wait(1).to({x:791.2,y:228},0).wait(1).to({x:796.55,y:227.25},0).wait(1).to({x:801.85,y:226.45},0).wait(1).to({x:807.2,y:225.7},0).wait(1).to({x:812.55,y:224.95},0).wait(1).to({x:817.85,y:224.2},0).wait(1).to({x:823.2,y:223.4},0).wait(1).to({x:828.55,y:222.65},0).wait(1).to({x:833.85,y:221.9},0).wait(1).to({x:839.2,y:221.15},0).wait(1).to({x:844.55,y:220.35},0).wait(1).to({x:849.85,y:219.6},0).wait(1).to({x:855.2,y:218.85},0).wait(1).to({x:860.55,y:218.1},0).wait(1).to({x:865.85,y:217.35},0).wait(1).to({x:871.2,y:216.55},0).wait(1).to({x:876.55,y:215.8},0).wait(1).to({x:881.85,y:215.05},0).wait(1).to({x:887.2,y:214.3},0).wait(1).to({x:892.5,y:213.55},0).wait(1).to({x:897.85,y:212.75},0).wait(1).to({x:903.2,y:212},0).wait(1).to({x:908.5,y:211.25},0).wait(1).to({x:913.85,y:210.5},0).wait(1).to({x:919.2,y:209.75},0).wait(1).to({x:924.55,y:209},0).wait(1).to({x:929.85,y:208.25},0).wait(1).to({x:935.2,y:207.5},0).wait(1).to({x:940.5,y:206.75},0).wait(1).to({x:945.85,y:205.95},0).wait(1).to({x:951.2,y:205.2},0).wait(1).to({x:956.55,y:204.45},0).wait(1).to({x:961.85,y:203.7},0).wait(1).to({x:967.2,y:202.95},0).wait(1).to({x:972.55,y:202.2},0).wait(1).to({x:977.85,y:201.45},0).wait(1).to({x:983.2,y:200.75},0).wait(1).to({x:988.55,y:200},0).wait(1).to({x:993.85,y:199.25},0).wait(1).to({x:999.2,y:198.5},0).wait(1).to({x:1004.55,y:197.75},0).wait(1).to({x:1009.9,y:197},0).wait(1).to({x:1015.2,y:196.3},0).wait(1).to({x:1020.55,y:195.55},0).wait(1).to({x:1025.9,y:194.8},0).wait(1).to({x:1031.25,y:194.1},0).wait(1).to({x:1036.55,y:193.35},0).wait(1).to({x:1041.9,y:192.65},0).wait(1).to({x:1047.25,y:191.9},0).wait(1).to({x:1052.6,y:191.2},0).wait(1).to({x:1057.9,y:190.5},0).wait(1).to({x:1063.25,y:189.8},0).wait(1).to({x:1068.6,y:189.15},0).wait(1).to({x:1073.95,y:188.65},0).wait(1).to({x:1082.05,y:186.35},0).wait(1).to({x:1090.1,y:184.05},0).wait(1).to({x:1098.15,y:181.8},0).wait(1).to({x:1106.25,y:179.5},0).wait(1).to({x:1114.3,y:177.25},0).wait(1).to({x:1122.4,y:175},0).wait(1).to({x:1130.45,y:172.75},0).wait(1).to({x:1138.55,y:170.5},0).wait(1).to({x:1146.65,y:168.25},0).wait(1).to({x:1154.75,y:166},0).wait(1).to({x:1162.85,y:163.8},0).wait(1).to({x:1170.9,y:161.6},0).wait(1).to({x:1179,y:159.4},0).wait(1).to({x:1187.1,y:157.2},0).wait(1).to({x:1195.2,y:155.05},0).wait(1).to({x:1203.35,y:152.9},0).wait(1).to({x:1211.45,y:150.75},0).wait(1).to({x:1219.65,y:148.65},0).wait(1).to({x:1227.75,y:146.6},0).wait(1).to({x:1235.9,y:144.65},0).wait(1).to({x:1244.05,y:142.8},0).wait(1).to({x:1252.3,y:141.4},0).to({_off:true},1).wait(388));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(241).to({_off:false},0).wait(1).to({regX:-2.6,regY:86.7,scaleX:1,scaleY:1,rotation:17.1429,x:1235.35,y:154.8},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:34.2857,x:1231.05,y:132.4},0).wait(1).to({rotation:51.4286,x:1234.3,y:111.6},0).wait(1).to({rotation:68.5714,x:1244.25,y:94.75},0).wait(1).to({scaleX:1,scaleY:1,rotation:85.7143,x:1259.55,y:83.45},0).wait(1).to({rotation:102.8571,x:1278.35,y:79.05},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:120,x:1298.45,y:82.35},0).wait(1).to({rotation:137.1429,x:1317.8,y:93.3},0).wait(1).to({rotation:154.2857,x:1334,y:111.25},0).wait(1).to({scaleX:1,scaleY:1,rotation:171.4286,x:1345.25,y:135},0).wait(1).to({rotation:188.5714,x:1350.1,y:162.95},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:205.7143,x:1347.75,y:192.9},0).wait(1).to({rotation:222.8571,x:1337.85,y:222.5},0).wait(1).to({rotation:240,x:1321,y:249.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:257.1429,x:1298.15,y:272.5},0).wait(1).to({rotation:274.2857,x:1270.95,y:289.3},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:291.4286,x:1241.5,y:298.95},0).wait(1).to({rotation:308.5714,x:1211.95,y:301.35},0).wait(1).to({rotation:325.7143,x:1184.5,y:296.55},0).wait(1).to({scaleX:1,scaleY:1,rotation:342.8571,x:1161.25,y:285.5},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:360,x:1143.95,y:269.85},0).wait(1).to({scaleX:1,scaleY:1,rotation:377.1429,x:1133.7,y:251.35},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:394.2857,x:1131.05,y:232.3},0).wait(1).to({rotation:411.4286,x:1135.9,y:214.85},0).wait(1).to({rotation:428.5714,x:1147.4,y:201.25},0).wait(1).to({scaleX:1,scaleY:1,rotation:445.7143,x:1164.3,y:193.2},0).wait(1).to({rotation:462.8571,x:1184.75,y:192},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:480,x:1206.45,y:198.4},0).wait(1).to({rotation:497.1429,x:1227.35,y:212.5},0).wait(1).to({rotation:514.2857,x:1245.2,y:233.55},0).wait(1).to({scaleX:1,scaleY:1,rotation:531.4286,x:1258.05,y:260.4},0).wait(1).to({rotation:548.5714,x:1264.5,y:291.35},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:565.7143,x:1263.75,y:324.25},0).wait(1).to({rotation:582.8571,x:1255.45,y:356.85},0).wait(1).to({rotation:600,x:1240.2,y:386.95},0).wait(1).to({scaleX:1,scaleY:1,rotation:617.1429,x:1218.95,y:412.65},0).wait(1).to({rotation:634.2857,x:1193.35,y:432.3},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:651.4286,x:1165.5,y:444.75},0).wait(1).to({rotation:668.5714,x:1137.55,y:449.9},0).wait(1).to({rotation:685.7143,x:1111.75,y:447.85},0).wait(1).to({scaleX:1,scaleY:1,rotation:702.8571,x:1090.1,y:439.55},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:720,x:1074.35,y:426.5},0).wait(1).to({regX:77.5,regY:58.2,scaleX:0.9998,scaleY:0.9998,x:1154.7,y:392.45},0).wait(345));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.instance = new lib.theend();
	this.instance.setTransform(2262.4,524.6,1,1,0,0,0,92.3,145);

	this.instance_1 = new lib.POWERLINE();
	this.instance_1.setTransform(2144.45,279.65,1,1,0,0,0,76.7,155.6);

	this.instance_2 = new lib.POWERLINE();
	this.instance_2.setTransform(1444.9,279.65,1,1,0,0,0,76.7,155.6);

	this.instance_3 = new lib.CachedBmp_2();
	this.instance_3.setTransform(0,440.75,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(0,-9.15,0.5,0.5);

	this.instance_5 = new lib.boom();
	this.instance_5.setTransform(1339.3,155.35,0.9999,0.9999,0,0,0,778.6,-189.9);

	this.instance_6 = new lib.CachedBmp_4();
	this.instance_6.setTransform(0,440.75,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_3();
	this.instance_7.setTransform(0,-9.15,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_6();
	this.instance_8.setTransform(0,440.75,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_5();
	this.instance_9.setTransform(0,-9.15,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_8();
	this.instance_10.setTransform(0,440.75,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_7();
	this.instance_11.setTransform(0,-9.15,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_10();
	this.instance_12.setTransform(0,440.75,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_9();
	this.instance_13.setTransform(0,-9.15,0.5,0.5);

	this.instance_14 = new lib.bone_1();
	this.instance_14.setTransform(1924.7,468.8,0.5568,0.5568,-149.9973,0,0,125.4,21.2);

	this.instance_15 = new lib.bone_1();
	this.instance_15.setTransform(1914.2,441.25,0.5269,0.5269,0,0,0,77.8,67.4);

	this.instance_16 = new lib.CachedBmp_12();
	this.instance_16.setTransform(0,440.75,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_11();
	this.instance_17.setTransform(0,-9.15,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_14();
	this.instance_18.setTransform(0,440.75,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_13();
	this.instance_19.setTransform(0,-9.15,0.5,0.5);

	this.instance_20 = new lib.theend2();
	this.instance_20.setTransform(2106.15,522.25,0.9999,0.9999,0,0,0,67,142.6);

	this.instance_21 = new lib.CachedBmp_16();
	this.instance_21.setTransform(0,440.75,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_15();
	this.instance_22.setTransform(0,-9.15,0.5,0.5);

	this.instance_23 = new lib.sparks();
	this.instance_23.setTransform(2135.7,384.95,0.9999,0.9999,0,0,0,32.5,20.9);

	this.instance_24 = new lib.sparks();
	this.instance_24.setTransform(2482.6,308.4,1,1,0,0,0,32.5,20.8);

	this.instance_25 = new lib.sparks();
	this.instance_25.setTransform(2352.7,324.55,1,1,0,0,0,32.5,20.8);

	this.instance_26 = new lib.sparks();
	this.instance_26.setTransform(2470.75,631.9,1,1,0,0,0,32.5,20.8);

	this.instance_27 = new lib.sparks();
	this.instance_27.setTransform(2462.85,493.1,1,1,0,0,0,32.5,20.8);

	this.instance_28 = new lib.sparks();
	this.instance_28.setTransform(2273,396.3,0.9999,0.9999,0,0,0,32.5,20.9);

	this.instance_29 = new lib.sparks();
	this.instance_29.setTransform(2308.35,623.2,1,1,0,0,0,32.5,20.8);

	this.instance_30 = new lib.sparks();
	this.instance_30.setTransform(2355.1,472.6,0.9999,0.9999,0,0,0,32.5,20.9);

	this.instance_31 = new lib.sparks();
	this.instance_31.setTransform(2405.9,576.1,1,1,0,0,0,32.5,20.8);

	this.instance_32 = new lib.sparks();
	this.instance_32.setTransform(2417.75,400.55,0.9999,0.9999,0,0,0,32.5,20.9);

	this.instance_33 = new lib.sparks();
	this.instance_33.setTransform(2223.2,462.1,0.9999,0.9999,0,0,0,32.5,20.9);

	this.instance_34 = new lib.sparks();
	this.instance_34.setTransform(2290.25,534.6,1,1,0,0,0,32.5,20.8);

	this.instance_35 = new lib.CachedBmp_18();
	this.instance_35.setTransform(0,440.75,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_17();
	this.instance_36.setTransform(0,-9.15,0.5,0.5);

	this.sparks = new lib.sparks();
	this.sparks.name = "sparks";
	this.sparks.setTransform(2470.75,631.9,1,1,0,0,0,32.5,20.8);

	this.sparks_1 = new lib.sparks();
	this.sparks_1.name = "sparks_1";
	this.sparks_1.setTransform(2462.85,493.1,1,1,0,0,0,32.5,20.8);

	this.sparks_2 = new lib.sparks();
	this.sparks_2.name = "sparks_2";
	this.sparks_2.setTransform(2273,396.3,0.9999,0.9999,0,0,0,32.5,20.9);

	this.sparks_3 = new lib.sparks();
	this.sparks_3.name = "sparks_3";
	this.sparks_3.setTransform(2308.35,623.2,1,1,0,0,0,32.5,20.8);

	this.sparks_4 = new lib.sparks();
	this.sparks_4.name = "sparks_4";
	this.sparks_4.setTransform(2355.1,472.6,0.9999,0.9999,0,0,0,32.5,20.9);

	this.sparks_5 = new lib.sparks();
	this.sparks_5.name = "sparks_5";
	this.sparks_5.setTransform(2405.9,576.1,1,1,0,0,0,32.5,20.8);

	this.sparks_6 = new lib.sparks();
	this.sparks_6.name = "sparks_6";
	this.sparks_6.setTransform(2417.75,400.55,0.9999,0.9999,0,0,0,32.5,20.9);

	this.sparks_7 = new lib.sparks();
	this.sparks_7.name = "sparks_7";
	this.sparks_7.setTransform(2223.2,462.1,0.9999,0.9999,0,0,0,32.5,20.9);

	this.instance_37 = new lib.CachedBmp_20();
	this.instance_37.setTransform(0,440.75,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_19();
	this.instance_38.setTransform(0,-9.15,0.5,0.5);

	this.sparks1 = new lib.sparks();
	this.sparks1.name = "sparks1";
	this.sparks1.setTransform(2417.75,400.55,0.9999,0.9999,0,0,0,32.5,20.9);

	this.instance_39 = new lib.CachedBmp_22();
	this.instance_39.setTransform(0,440.75,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_21();
	this.instance_40.setTransform(0,-9.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{regX:92.3,regY:145,scaleX:1,scaleY:1,x:2262.4,y:524.6}}]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_2},{t:this.instance_1},{t:this.instance_5}]},240).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_2},{t:this.instance_1},{t:this.instance_5}]},14).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_2},{t:this.instance_1},{t:this.instance_5}]},4).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_2},{t:this.instance_1},{t:this.instance_15},{t:this.instance_14},{t:this.instance,p:{regX:-18.1,regY:145.2,scaleX:0.9998,scaleY:0.9998,x:2097,y:524.95}}]},95).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_2},{t:this.instance_1},{t:this.instance_15},{t:this.instance_14},{t:this.instance,p:{regX:92.4,regY:145.1,scaleX:0.9999,scaleY:0.9999,x:2209,y:524.75}}]},221).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_2},{t:this.instance_1},{t:this.instance_15},{t:this.instance_14},{t:this.instance_20,p:{regY:142.6,x:2106.15,y:522.25,regX:67,scaleX:0.9999,scaleY:0.9999}}]},13).to({state:[{t:this.instance_36},{t:this.instance_35},{t:this.instance_2},{t:this.instance_1},{t:this.instance_15},{t:this.instance_14},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_20,p:{regY:148.1,x:2102.85,y:533.35,regX:67,scaleX:0.9999,scaleY:0.9999}}]},10).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_2},{t:this.instance_1},{t:this.instance_15},{t:this.instance_14},{t:this.sparks_7},{t:this.sparks_6,p:{x:2417.75,y:400.55}},{t:this.sparks_5},{t:this.sparks_4},{t:this.sparks_3},{t:this.sparks_2},{t:this.sparks_1},{t:this.sparks},{t:this.instance_23},{t:this.instance_20,p:{regY:148.6,x:2102.3,y:531.85,regX:67.5,scaleX:0.9996,scaleY:0.9996}}]},11).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_2},{t:this.instance_1},{t:this.instance_15},{t:this.instance_14},{t:this.sparks_6,p:{x:2223.2,y:462.1}},{t:this.sparks1},{t:this.sparks_5},{t:this.sparks_4},{t:this.sparks_3},{t:this.sparks_2},{t:this.sparks_1},{t:this.sparks},{t:this.instance_23},{t:this.instance_20,p:{regY:148.6,x:2102.3,y:531.85,regX:67.5,scaleX:0.9996,scaleY:0.9996}}]},19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.dogran2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.legs();
	this.instance.setTransform(40.25,117.5,1,1,0,0,0,19.2,24.6);

	this.instance_1 = new lib.legs();
	this.instance_1.setTransform(100.9,114.45,1,1,0,0,0,19.2,24.6);

	this.instance_2 = new lib.Dogwalks();
	this.instance_2.setTransform(81.95,68.3,1,1,0,0,0,62.2,72.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dogran2, new cjs.Rectangle(2.7,0,144.8,132.3), null);


(lib.dogran = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dogran2();
	this.instance.setTransform(72.6,67,1,1,0,0,0,72.6,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dogran, new cjs.Rectangle(2.7,0,144.8,132.3), null);


(lib.doginloved = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dogears();
	this.instance.setTransform(162.7,94.65,1,1,0,0,0,23.9,-31.7);

	this.instance_1 = new lib.dogtail();
	this.instance_1.setTransform(73.05,131.4,1,1,0,0,0,-53.5,7.2);

	this.instance_2 = new lib.love();
	this.instance_2.setTransform(179.25,92.3,1.2128,1.2128,0,0,0,15.1,-2.2);

	this.instance_3 = new lib.love();
	this.instance_3.setTransform(162.4,95.55,1.5989,1.5989,0,0,0,14.3,-2.2);

	this.instance_4 = new lib.dogmouthlove();
	this.instance_4.setTransform(170.65,120.85,1,1,0,0,0,5.5,4);

	this.instance_5 = new lib.legs();
	this.instance_5.setTransform(94.95,189.05,1,1,0,0,0,18.9,23.9);

	this.instance_6 = new lib.legs();
	this.instance_6.setTransform(155.8,185.95,1,1,0,0,0,18.9,23.9);

	this.instance_7 = new lib.CachedBmp_29();
	this.instance_7.setTransform(78.05,72.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.doginloved, new cjs.Rectangle(54.3,72.7,148.10000000000002,131.8), null);


(lib.Scene_1_Dog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Dog
	this.instance = new lib.dog();
	this.instance.setTransform(114.85,537.9,1,1,0,0,0,67.4,65.1);

	this.instance_1 = new lib.dogran();
	this.instance_1.setTransform(136.25,526.2,1,1,0,0,0,72.6,67);
	this.instance_1._off = true;

	this.instance_2 = new lib.doginloved();
	this.instance_2.setTransform(1468.5,521.35,0.9999,0.9999,0,0,0,127.6,138.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.crumbs();
	this.instance_3.setTransform(1848.75,451.55,0.9999,0.9999,0,0,0,-2,2.4);

	this.instance_4 = new lib.crumbs();
	this.instance_4.setTransform(1850.7,448.1,0.9999,0.9999,0,0,0,-2,2.4);

	this.instance_5 = new lib.crumbs();
	this.instance_5.setTransform(1745,437.25,1,1,0,0,0,-2.2,2.2);

	this.instance_6 = new lib.crumbs();
	this.instance_6.setTransform(1852.7,451.55,0.9999,0.9999,0,0,0,-2,2.4);

	this.instance_7 = new lib.Standingdog();
	this.instance_7.setTransform(1822.1,472.15,0.9998,0.9998,0,0,0,62.4,66.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},69).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},128).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).wait(1).to({regX:63.9,regY:65.4,x:134.5,y:524.5},0).wait(1).to({x:141.5,y:524.45},0).wait(1).to({x:148.5,y:524.4},0).wait(1).to({x:155.5,y:524.35},0).wait(1).to({x:162.45,y:524.3},0).wait(1).to({x:169.45,y:524.25},0).wait(1).to({x:176.45,y:524.2},0).wait(1).to({x:183.45,y:524.15},0).wait(1).to({x:190.4,y:524.1},0).wait(1).to({x:197.4,y:524.05},0).wait(1).to({x:204.4,y:524},0).wait(1).to({x:211.4,y:523.95},0).wait(1).to({x:218.4,y:523.85},0).wait(1).to({x:225.35,y:523.8},0).wait(1).to({x:232.35,y:523.75},0).wait(1).to({x:239.35,y:523.7},0).wait(1).to({x:246.35,y:523.65},0).wait(1).to({x:253.3,y:523.6},0).wait(1).to({x:260.3,y:523.55},0).wait(1).to({x:267.3,y:523.5},0).wait(1).to({x:274.3,y:523.45},0).wait(1).to({x:281.25,y:523.4},0).wait(1).to({x:288.25,y:523.35},0).wait(1).to({x:295.25,y:523.3},0).wait(1).to({x:302.25,y:523.2},0).wait(1).to({x:309.25,y:523.15},0).wait(1).to({x:316.2,y:523.1},0).wait(1).to({x:323.2,y:523.05},0).wait(1).to({x:330.2,y:523},0).wait(1).to({x:337.2,y:522.95},0).wait(1).to({x:344.15,y:522.9},0).wait(1).to({x:351.15,y:522.85},0).wait(1).to({x:358.15,y:522.8},0).wait(1).to({x:365.15,y:522.75},0).wait(1).to({x:372.1,y:522.7},0).wait(1).to({x:379.1,y:522.65},0).wait(1).to({x:386.1,y:522.6},0).wait(1).to({x:393.1,y:522.5},0).wait(1).to({x:400.1,y:522.45},0).wait(1).to({x:407.05,y:522.4},0).wait(1).to({x:414.05,y:522.35},0).wait(1).to({x:421.05,y:522.3},0).wait(1).to({x:428.05,y:522.25},0).wait(1).to({x:435,y:522.2},0).wait(1).to({x:442,y:522.15},0).wait(1).to({x:449,y:522.1},0).wait(1).to({x:456,y:522.05},0).wait(1).to({x:462.95,y:522},0).wait(1).to({x:469.95,y:521.95},0).wait(1).to({x:476.95,y:521.85},0).wait(1).to({x:483.95,y:521.8},0).wait(1).to({x:490.95,y:521.75},0).wait(1).to({x:497.9,y:521.7},0).wait(1).to({x:504.9,y:521.65},0).wait(1).to({x:511.9,y:521.6},0).wait(1).to({x:518.9,y:521.55},0).wait(1).to({x:525.85,y:521.5},0).wait(1).to({x:532.85,y:521.45},0).wait(1).to({x:539.85,y:521.4},0).wait(1).to({x:546.85,y:521.35},0).wait(1).to({x:553.8,y:521.3},0).wait(1).to({x:560.8,y:521.2},0).wait(1).to({x:567.8,y:521.15},0).wait(1).to({x:574.8,y:521.1},0).wait(1).to({x:581.8,y:521.05},0).wait(1).to({x:588.75,y:521},0).wait(1).to({x:595.75,y:520.95},0).wait(1).to({x:602.75,y:520.9},0).wait(1).to({x:609.75,y:520.85},0).wait(1).to({x:616.7,y:520.8},0).wait(1).to({x:623.7,y:520.75},0).wait(1).to({x:630.7,y:520.7},0).wait(1).to({x:637.7,y:520.65},0).wait(1).to({x:644.7,y:520.6},0).wait(1).to({x:647.95},0).wait(1).to({x:651.2},0).wait(1).to({x:654.5},0).wait(1).to({x:657.75},0).wait(1).to({x:661.05},0).wait(1).to({x:664.3},0).wait(1).to({x:667.6},0).wait(1).to({x:670.85},0).wait(1).to({x:674.15},0).wait(1).to({x:677.4},0).wait(1).to({x:680.7},0).wait(1).to({x:683.95},0).wait(1).to({x:687.25},0).wait(1).to({x:690.5},0).wait(1).to({x:693.75},0).wait(1).to({x:697.05},0).wait(1).to({x:700.3},0).wait(1).to({x:703.6},0).wait(1).to({x:706.85},0).wait(1).to({x:710.15},0).wait(1).to({x:713.4},0).wait(1).to({x:716.7},0).wait(1).to({x:719.95},0).wait(1).to({x:723.25},0).wait(1).to({x:726.5},0).wait(1).to({x:729.8},0).wait(1).to({x:733.05},0).wait(1).to({x:736.3},0).wait(1).to({x:739.6},0).wait(1).to({x:742.85},0).wait(1).to({x:746.15},0).wait(1).to({x:749.4},0).wait(1).to({x:752.7},0).wait(1).to({x:755.95},0).wait(1).to({x:759.25},0).wait(1).to({x:762.5},0).wait(1).to({x:765.8},0).wait(1).to({x:769.05},0).wait(1).to({x:772.35},0).wait(1).to({x:775.6},0).wait(1).to({x:778.85},0).wait(1).to({x:782.15},0).wait(1).to({x:785.4},0).wait(1).to({x:788.7},0).wait(1).to({x:791.95},0).wait(1).to({x:795.25},0).wait(1).to({x:798.5},0).wait(1).to({x:801.8},0).wait(1).to({x:805.05},0).wait(1).to({x:808.35},0).wait(1).to({x:811.6},0).wait(1).to({x:814.9},0).wait(1).to({x:818.15},0).wait(1).to({x:821.4},0).wait(1).to({x:824.7},0).wait(1).to({x:827.95},0).wait(1).to({x:831.25},0).wait(1).to({x:834.5},0).wait(1).to({x:837.8},0).wait(1).to({x:841.05},0).wait(1).to({x:844.35},0).wait(1).to({x:847.6},0).wait(1).to({x:850.9},0).wait(1).to({x:854.15},0).wait(1).to({x:857.45},0).wait(1).to({x:860.7},0).wait(1).to({x:863.95},0).wait(1).to({x:867.25},0).wait(1).to({x:870.5},0).wait(1).to({x:873.8},0).wait(1).to({x:877.05},0).wait(1).to({x:880.35},0).wait(1).to({x:883.6},0).wait(1).to({x:886.9},0).wait(1).to({x:890.15},0).wait(1).to({x:893.05,y:520.65},0).wait(1).to({x:896,y:520.7},0).wait(1).to({x:898.9,y:520.75},0).wait(1).to({x:901.8,y:520.8},0).wait(1).to({x:904.7,y:520.85},0).wait(1).to({x:907.6,y:520.9},0).wait(1).to({x:910.5,y:521},0).wait(1).to({x:913.45,y:521.05},0).wait(1).to({x:916.35,y:521.1},0).wait(1).to({x:919.25,y:521.15},0).wait(1).to({x:922.15,y:521.2},0).wait(1).to({x:925.05,y:521.25},0).wait(1).to({x:928,y:521.3},0).wait(1).to({x:930.9,y:521.4},0).wait(1).to({x:933.8,y:521.45},0).wait(1).to({x:936.7,y:521.5},0).wait(1).to({x:939.6,y:521.55},0).wait(1).to({x:942.55,y:521.6},0).wait(1).to({x:945.45,y:521.65},0).wait(1).to({x:948.35,y:521.75},0).wait(1).to({x:951.25,y:521.8},0).wait(1).to({x:954.15,y:521.85},0).wait(1).to({x:957.05,y:521.9},0).wait(1).to({x:960,y:521.95},0).wait(1).to({x:962.9,y:522},0).wait(1).to({x:965.8,y:522.05},0).wait(1).to({x:968.7,y:522.15},0).wait(1).to({x:971.6,y:522.2},0).wait(1).to({x:974.55,y:522.25},0).wait(1).to({x:977.45,y:522.3},0).wait(1).to({x:980.35,y:522.35},0).wait(1).to({x:983.25,y:522.4},0).wait(1).to({x:986.15,y:522.5},0).wait(1).to({x:989.1,y:522.55},0).wait(1).to({x:992,y:522.6},0).wait(1).to({x:994.9,y:522.65},0).wait(1).to({x:997.8,y:522.7},0).wait(1).to({x:1000.7,y:522.75},0).wait(1).to({x:1003.6,y:522.8},0).wait(1).to({x:1006.55,y:522.9},0).wait(1).to({x:1009.45,y:522.95},0).wait(1).to({x:1012.35,y:523},0).wait(1).to({x:1015.25,y:523.05},0).wait(1).to({x:1018.15,y:523.1},0).wait(1).to({x:1021.1,y:523.15},0).wait(1).to({x:1024,y:523.25},0).wait(1).to({x:1026.9,y:523.3},0).wait(1).to({x:1029.8,y:523.35},0).wait(1).to({x:1032.7,y:523.4},0).wait(1).to({x:1035.65,y:523.45},0).wait(1).to({x:1038.55,y:523.5},0).wait(1).to({x:1041.45,y:523.55},0).wait(1).to({x:1044.35,y:523.65},0).wait(1).to({x:1047.25,y:523.7},0).wait(1).to({x:1050.15,y:523.75},0).wait(1).to({x:1053.1,y:523.8},0).wait(1).to({x:1056,y:523.85},0).wait(1).to({x:1058.9,y:523.9},0).wait(1).to({x:1061.8,y:524},0).wait(1).to({x:1064.7,y:524.05},0).wait(1).to({x:1067.65,y:524.1},0).wait(1).to({x:1070.55,y:524.15},0).wait(1).to({x:1073.45,y:524.2},0).wait(1).to({x:1076.35,y:524.25},0).wait(1).to({x:1079.25,y:524.3},0).wait(1).to({x:1082.2,y:524.4},0).wait(1).to({x:1085.1,y:524.45},0).wait(1).to({x:1088,y:524.5},0).wait(1).to({x:1090.9,y:524.55},0).wait(1).to({x:1093.8,y:524.6},0).wait(1).to({x:1096.7,y:524.65},0).wait(1).to({x:1099.65,y:524.7},0).wait(1).to({x:1102.55,y:524.8},0).wait(1).to({x:1105.45,y:524.85},0).wait(1).to({x:1108.35,y:524.9},0).wait(1).to({x:1111.25,y:524.95},0).wait(1).to({x:1114.2,y:525},0).wait(1).to({x:1117.1,y:525.05},0).wait(1).to({x:1120,y:525.15},0).wait(1).to({x:1122.9,y:525.2},0).wait(1).to({x:1125.8,y:525.25},0).wait(1).to({x:1128.75,y:525.3},0).wait(1).to({x:1131.65,y:525.35},0).wait(1).to({x:1134.55,y:525.4},0).wait(1).to({x:1137.45,y:525.45},0).wait(1).to({x:1140.35,y:525.55},0).wait(1).to({x:1143.25,y:525.6},0).wait(1).to({x:1146.2,y:525.65},0).wait(1).to({x:1149.1,y:525.7},0).wait(1).to({x:1152,y:525.75},0).wait(1).to({x:1154.9,y:525.8},0).wait(1).to({x:1157.8,y:525.9},0).wait(1).to({x:1160.75,y:525.95},0).wait(1).to({x:1163.65,y:526},0).wait(1).to({x:1166.55,y:526.05},0).wait(1).to({x:1169.45,y:526.1},0).wait(1).to({x:1172.35,y:526.15},0).wait(1).to({x:1175.3,y:526.2},0).wait(1).to({x:1178.2,y:526.3},0).wait(1).to({x:1181.1,y:526.35},0).wait(1).to({x:1184,y:526.4},0).wait(1).to({x:1186.9,y:526.45},0).wait(1).to({x:1189.8,y:526.5},0).wait(1).to({x:1192.75,y:526.55},0).wait(1).to({x:1195.65,y:526.65},0).wait(1).to({x:1198.55,y:526.7},0).wait(1).to({x:1201.45,y:526.75},0).wait(1).to({x:1204.35,y:526.8},0).wait(1).to({x:1207.3,y:526.85},0).wait(1).to({x:1210.2,y:526.9},0).wait(1).to({x:1213.1,y:526.95},0).wait(1).to({x:1216,y:527.05},0).wait(1).to({x:1218.9,y:527.1},0).wait(1).to({x:1221.85,y:527.15},0).wait(1).to({x:1224.75,y:527.2},0).wait(1).to({x:1227.65,y:527.25},0).wait(1).to({x:1230.55,y:527.3},0).wait(1).to({x:1233.45,y:527.4},0).wait(1).to({x:1236.35,y:527.45},0).wait(1).to({x:1239.3,y:527.5},0).wait(1).to({x:1242.2,y:527.55},0).wait(1).to({x:1245.1,y:527.6},0).wait(1).to({x:1248,y:527.65},0).wait(1).to({x:1250.9,y:527.7},0).wait(1).to({x:1253.85,y:527.8},0).wait(1).to({x:1256.75,y:527.85},0).wait(1).to({x:1259.65,y:527.9},0).wait(1).to({x:1262.55,y:527.95},0).wait(1).to({x:1265.45,y:528},0).wait(1).to({x:1268.4,y:528.05},0).wait(1).to({x:1271.3,y:528.15},0).wait(1).to({x:1274.05,y:528},0).wait(1).to({x:1276.8,y:527.9},0).wait(1).to({x:1279.55,y:527.8},0).wait(1).to({x:1282.3,y:527.7},0).wait(1).to({x:1285.05,y:527.6},0).wait(1).to({x:1287.8,y:527.45},0).wait(1).to({x:1290.55,y:527.35},0).wait(1).to({x:1293.3,y:527.25},0).wait(1).to({x:1296.05,y:527.15},0).wait(1).to({x:1298.8,y:527.05},0).wait(1).to({x:1301.55,y:526.9},0).wait(1).to({x:1304.3,y:526.8},0).wait(1).to({x:1307.05,y:526.7},0).wait(1).to({x:1309.8,y:526.6},0).wait(1).to({x:1312.6,y:526.5},0).wait(1).to({x:1315.35,y:526.35},0).wait(1).to({x:1318.1,y:526.25},0).wait(1).to({x:1320.85,y:526.15},0).wait(1).to({x:1323.6,y:526.05},0).wait(1).to({x:1326.35,y:525.95},0).wait(1).to({x:1329.1,y:525.85},0).wait(1).to({x:1331.85,y:525.7},0).wait(1).to({x:1334.6,y:525.6},0).wait(1).to({x:1337.35,y:525.5},0).wait(1).to({x:1340.1,y:525.4},0).wait(1).to({x:1342.85,y:525.3},0).wait(1).to({x:1345.6,y:525.15},0).wait(1).to({x:1348.35,y:525.05},0).wait(1).to({x:1351.1,y:524.95},0).wait(1).to({x:1353.85,y:524.85},0).wait(1).to({x:1356.6,y:524.75},0).wait(1).to({x:1359.35,y:524.6},0).wait(1).to({x:1362.15,y:524.5},0).wait(1).to({x:1364.9,y:524.4},0).wait(1).to({x:1367.65,y:524.3},0).wait(1).to({x:1370.4,y:524.2},0).wait(1).to({x:1373.15,y:524.1},0).wait(1).to({x:1375.9,y:523.95},0).wait(1).to({x:1378.65,y:523.85},0).wait(1).to({x:1381.4,y:523.75},0).wait(1).to({x:1384.15,y:523.65},0).wait(1).to({x:1386.9,y:523.55},0).wait(1).to({x:1389.65,y:523.4},0).wait(1).to({x:1392.4,y:523.3},0).wait(1).to({x:1395.15,y:523.2},0).wait(1).to({x:1397.9,y:523.1},0).wait(1).to({x:1400.65,y:523},0).wait(1).to({x:1403.4,y:522.85},0).wait(1).to({x:1406.15,y:522.75},0).wait(1).to({x:1408.9,y:522.65},0).wait(1).to({x:1411.7,y:522.55},0).wait(1).to({x:1414.45,y:522.45},0).wait(1).to({x:1417.2,y:522.35},0).wait(1).to({x:1419.95,y:522.2},0).wait(1).to({x:1422.7,y:522.1},0).wait(1).to({x:1425.45,y:522},0).wait(1).to({x:1428.2,y:521.9},0).wait(1).to({x:1430.95,y:521.8},0).wait(1).to({x:1433.7,y:521.65},0).wait(1).to({x:1436.45,y:521.55},0).wait(1).to({x:1439.2,y:521.45},0).wait(1).to({x:1441.95,y:521.35},0).wait(1).to({x:1444.7,y:521.25},0).wait(1).to({x:1447.45,y:521.1},0).wait(1).to({x:1450.2,y:521},0).wait(1).to({x:1452.95,y:520.9},0).wait(1).to({x:1455.7,y:520.8},0).wait(1).to({x:1458.45,y:520.7},0).wait(1).to({x:1461.25,y:520.6},0).to({_off:true},1).wait(210));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(419).to({_off:false},0).wait(1).to({regX:118.8,regY:137.8,x:1464.1,y:519.7},0).wait(1).to({x:1468.5,y:519.1},0).wait(1).to({x:1472.9,y:518.45},0).wait(1).to({x:1477.3,y:517.85},0).wait(1).to({x:1481.7,y:517.25},0).wait(1).to({x:1486.15,y:516.6},0).wait(1).to({x:1490.55,y:516},0).wait(1).to({x:1494.95,y:515.4},0).wait(1).to({x:1499.35,y:514.75},0).wait(1).to({x:1503.75,y:514.15},0).wait(1).to({x:1508.2,y:513.55},0).wait(1).to({x:1512.6,y:512.9},0).wait(1).to({x:1517,y:512.3},0).wait(1).to({x:1521.4,y:511.7},0).wait(1).to({x:1525.8,y:511.05},0).wait(1).to({x:1530.2,y:510.45},0).wait(1).to({x:1534.65,y:509.85},0).wait(1).to({x:1539.05,y:509.2},0).wait(1).to({x:1543.45,y:508.6},0).wait(1).to({x:1547.85,y:507.95},0).wait(1).to({x:1552.25,y:507.35},0).wait(1).to({x:1556.7,y:506.75},0).wait(1).to({x:1561.1,y:506.1},0).wait(1).to({x:1565.5,y:505.5},0).wait(1).to({x:1569.9,y:504.9},0).wait(1).to({x:1574.3,y:504.25},0).wait(1).to({x:1578.75,y:503.65},0).wait(1).to({x:1583.15,y:503.05},0).wait(1).to({x:1587.55,y:502.4},0).wait(1).to({x:1591.95,y:501.8},0).wait(1).to({x:1596.35,y:501.2},0).wait(1).to({x:1600.75,y:500.55},0).wait(1).to({x:1605.2,y:499.95},0).wait(1).to({x:1609.6,y:499.35},0).wait(1).to({x:1614,y:498.7},0).wait(1).to({x:1618.4,y:498.1},0).wait(1).to({x:1622.8,y:497.5},0).wait(1).to({x:1627.25,y:496.85},0).wait(1).to({x:1631.65,y:496.25},0).wait(1).to({x:1636.05,y:495.6},0).wait(1).to({x:1640.45,y:495},0).wait(1).to({x:1644.85,y:494.4},0).wait(1).to({x:1649.3,y:493.75},0).wait(1).to({x:1653.7,y:493.15},0).wait(1).to({x:1658.1,y:492.55},0).wait(1).to({x:1662.5,y:491.9},0).wait(1).to({x:1666.9,y:491.3},0).wait(1).to({x:1671.3,y:490.7},0).wait(1).to({x:1675.75,y:490.05},0).wait(1).to({x:1680.15,y:489.45},0).wait(1).to({x:1684.55,y:488.85},0).wait(1).to({x:1688.95,y:488.2},0).wait(1).to({x:1693.35,y:487.6},0).wait(1).to({x:1697.8,y:487},0).wait(1).to({x:1702.2,y:486.35},0).wait(1).to({x:1706.6,y:485.75},0).wait(1).to({x:1711,y:485.15},0).wait(1).to({x:1715.4,y:484.5},0).wait(1).to({x:1719.85,y:483.9},0).wait(1).to({x:1724.25,y:483.25},0).wait(1).to({x:1728.65,y:482.65},0).wait(1).to({x:1733.05,y:482.05},0).wait(1).to({x:1737.45,y:481.4},0).wait(1).to({x:1741.85,y:480.8},0).wait(1).to({x:1746.3,y:480.2},0).wait(1).to({x:1750.7,y:479.55},0).wait(1).to({x:1755.1,y:478.95},0).wait(1).to({x:1759.5,y:478.35},0).wait(1).to({x:1763.9,y:477.7},0).wait(1).to({x:1768.35,y:477.1},0).wait(1).to({x:1772.75,y:476.5},0).wait(1).to({x:1777.15,y:475.85},0).wait(1).to({x:1781.55,y:475.25},0).wait(1).to({x:1785.95,y:474.65},0).wait(1).to({x:1790.4,y:474},0).wait(1).to({x:1794.8,y:473.4},0).wait(1).to({x:1799.2,y:472.8},0).wait(1).to({x:1803.6,y:472.15},0).wait(1).to({x:1808,y:471.55},0).wait(1).to({x:1812.4,y:470.9},0).to({_off:true},1).wait(129));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.hilazone3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,240,500,578,609,628,629];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start = this.Replay.start;
		var self = this;
		self.stop();
		
		self.start.addEventListener("click",startPlaying);
		
		function startPlaying(){
			self.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		playSound("TheRaceSong");
	}
	this.frame_2 = function() {
		this.start = undefined;
	}
	this.frame_240 = function() {
		playSound("boombird");
	}
	this.frame_500 = function() {
		playSound("bone");
	}
	this.frame_578 = function() {
		playSound("TheWinner");
	}
	this.frame_609 = function() {
		this.sparks = this.background.sparks;
		this.sparks = this.background.sparks;
		this.sparks = this.background.sparks;
		this.sparks = this.background.sparks;
		this.sparks = this.background.sparks;
		this.sparks = this.background.sparks;
		this.sparks = this.background.sparks;
		this.sparks = this.background.sparks;
	}
	this.frame_628 = function() {
		this.sparks = undefined;this.sparks = undefined;this.sparks = undefined;this.sparks = undefined;this.sparks = undefined;this.sparks = undefined;this.sparks = undefined;this.sparks = undefined;this.replay = this.Replay.replay;
		this.sparks = this.background.sparks;
		this.sparks1 = this.background.sparks1;
		this.sparks = this.background.sparks;
		this.sparks = this.background.sparks;
		this.sparks = this.background.sparks;
		this.sparks = this.background.sparks;
		this.sparks = this.background.sparks;
		this.sparks = this.background.sparks;
		var self = this;
		self.stop();
		
		self.replay.addEventListener("click",PlayAgain);
		
		function PlayAgain(){
		createjs.Sound.stop();	
			self.gotoAndPlay (1);
		}
	}
	this.frame_629 = function() {
		this.replay = undefined;this.replay = this.Replay.replay;
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(238).call(this.frame_240).wait(260).call(this.frame_500).wait(78).call(this.frame_578).wait(31).call(this.frame_609).wait(19).call(this.frame_628).wait(1).call(this.frame_629).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(85).to({scaleX:1.0001,scaleY:1.0001,x:641.0814,y:359.9932},0).wait(1).to({x:642.1627,y:359.9864},0).wait(1).to({scaleX:1.0002,scaleY:1.0002,x:643.2441,y:359.9797},0).wait(1).to({x:644.3254,y:359.9729},0).wait(1).to({scaleX:1.0003,scaleY:1.0003,x:645.4068,y:359.9661},0).wait(1).to({x:646.4881,y:359.9593},0).wait(1).to({scaleX:1.0004,scaleY:1.0004,x:647.5695,y:359.9525},0).wait(1).to({x:648.6509,y:359.9458},0).wait(1).to({scaleX:1.0005,scaleY:1.0005,x:649.7322,y:359.939},0).wait(1).to({x:650.8136,y:359.9322},0).wait(1).to({scaleX:1.0006,scaleY:1.0006,x:651.8949,y:359.9254},0).wait(1).to({scaleX:1.0007,scaleY:1.0007,x:652.9763,y:359.9186},0).wait(1).to({x:654.0576,y:359.9119},0).wait(1).to({scaleX:1.0008,scaleY:1.0008,x:655.139,y:359.9051},0).wait(1).to({x:656.2203,y:359.8983},0).wait(1).to({scaleX:1.0009,scaleY:1.0009,x:657.3017,y:359.8915},0).wait(1).to({x:658.3831,y:359.8848},0).wait(1).to({scaleX:1.001,scaleY:1.001,x:659.4644,y:359.878},0).wait(1).to({x:660.5458,y:359.8712},0).wait(1).to({scaleX:1.0011,scaleY:1.0011,x:661.6271,y:359.8644},0).wait(1).to({x:662.7085,y:359.8576},0).wait(1).to({scaleX:1.0012,scaleY:1.0012,x:663.7898,y:359.8509},0).wait(1).to({scaleX:1.0013,scaleY:1.0013,x:664.8712,y:359.8441},0).wait(1).to({x:665.9525,y:359.8373},0).wait(1).to({scaleX:1.0014,scaleY:1.0014,x:667.0339,y:359.8305},0).wait(1).to({x:668.1152,y:359.8237},0).wait(1).to({scaleX:1.0015,scaleY:1.0015,x:669.1966,y:359.817},0).wait(1).to({x:670.278,y:359.8102},0).wait(1).to({scaleX:1.0016,scaleY:1.0016,x:671.3593,y:359.8034},0).wait(1).to({x:672.4407,y:359.7966},0).wait(1).to({scaleX:1.0017,scaleY:1.0017,x:673.522,y:359.7898},0).wait(1).to({scaleX:1.0018,scaleY:1.0018,x:674.6034,y:359.7831},0).wait(1).to({x:675.6848,y:359.7763},0).wait(1).to({scaleX:1.0019,scaleY:1.0019,x:676.7661,y:359.7695},0).wait(1).to({x:677.8475,y:359.7627},0).wait(1).to({scaleX:1.002,scaleY:1.002,x:678.9288,y:359.7559},0).wait(1).to({x:680.0102,y:359.7492},0).wait(1).to({scaleX:1.0021,scaleY:1.0021,x:681.0915,y:359.7424},0).wait(1).to({x:682.1729,y:359.7356},0).wait(1).to({scaleX:1.0022,scaleY:1.0022,x:683.2542,y:359.7288},0).wait(1).to({x:684.3356,y:359.722},0).wait(1).to({scaleX:1.0023,scaleY:1.0023,x:685.417,y:359.7153},0).wait(1).to({scaleX:1.0024,scaleY:1.0024,x:686.4983,y:359.7085},0).wait(1).to({x:687.5797,y:359.7017},0).wait(1).to({scaleX:1.0025,scaleY:1.0025,x:688.661,y:359.6949},0).wait(1).to({x:689.7424,y:359.6881},0).wait(1).to({scaleX:1.0026,scaleY:1.0026,x:690.8237,y:359.6814},0).wait(1).to({x:691.9051,y:359.6746},0).wait(1).to({scaleX:1.0027,scaleY:1.0027,x:692.9864,y:359.6678},0).wait(1).to({x:694.0678,y:359.661},0).wait(1).to({scaleX:1.0028,scaleY:1.0028,x:695.1492,y:359.6542},0).wait(1).to({x:696.2305,y:359.6475},0).wait(1).to({scaleX:1.0029,scaleY:1.0029,x:697.3119,y:359.6407},0).wait(1).to({scaleX:1.003,scaleY:1.003,x:698.3932,y:359.6339},0).wait(1).to({x:699.4746,y:359.6271},0).wait(1).to({scaleX:1.0031,scaleY:1.0031,x:700.5559,y:359.6203},0).wait(1).to({x:701.6373,y:359.6136},0).wait(1).to({scaleX:1.0032,scaleY:1.0032,x:702.7186,y:359.6068},0).wait(1).to({x:703.8,y:359.6},0).wait(1).to({scaleX:1.0031,scaleY:1.0031,x:709.6179,y:359.6194},0).wait(1).to({scaleX:1.0029,scaleY:1.0029,x:715.4358,y:359.6387},0).wait(1).to({scaleX:1.0028,scaleY:1.0028,x:721.2537,y:359.6581},0).wait(1).to({scaleX:1.0026,scaleY:1.0026,x:727.0716,y:359.6775},0).wait(1).to({scaleX:1.0025,scaleY:1.0025,x:732.8895,y:359.6968},0).wait(1).to({scaleX:1.0023,scaleY:1.0023,x:738.7074,y:359.7162},0).wait(1).to({scaleX:1.0022,scaleY:1.0022,x:744.5253,y:359.7356},0).wait(1).to({scaleX:1.002,scaleY:1.002,x:750.3432,y:359.755},0).wait(1).to({scaleX:1.0018,scaleY:1.0018,x:756.1611,y:359.7743},0).wait(1).to({scaleX:1.0017,scaleY:1.0017,x:761.979,y:359.7937},0).wait(1).to({scaleX:1.0015,scaleY:1.0015,x:767.7968,y:359.813},0).wait(1).to({scaleX:1.0014,scaleY:1.0014,x:773.6147,y:359.8324},0).wait(1).to({scaleX:1.0012,scaleY:1.0012,x:779.4326,y:359.8518},0).wait(1).to({scaleX:1.0011,scaleY:1.0011,x:785.2505,y:359.8712},0).wait(1).to({scaleX:1.0009,scaleY:1.0009,x:791.0684,y:359.8905},0).wait(1).to({scaleX:1.0008,scaleY:1.0008,x:796.8863,y:359.9099},0).wait(1).to({scaleX:1.0006,scaleY:1.0006,x:802.7042,y:359.9293},0).wait(1).to({scaleX:1.0005,scaleY:1.0005,x:808.5221,y:359.9486},0).wait(1).to({scaleX:1.0003,scaleY:1.0003,x:814.34,y:359.968},0).wait(1).to({scaleX:1.0002,scaleY:1.0002,x:820.1579,y:359.9874},0).wait(1).to({scaleX:1,scaleY:1,x:825.9758,y:360.0067},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,x:831.7937,y:360.0261},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:837.6116,y:360.0455},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:843.4295,y:360.0648},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,x:849.2474,y:360.0842},0).wait(1).to({scaleX:0.9992,scaleY:0.9992,x:855.0653,y:360.1036},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,x:860.8832,y:360.123},0).wait(1).to({scaleX:0.9989,scaleY:0.9989,x:866.7011,y:360.1423},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,x:872.519,y:360.1617},0).wait(1).to({scaleX:0.9986,scaleY:0.9986,x:878.3368,y:360.1811},0).wait(1).to({scaleX:0.9985,scaleY:0.9985,x:884.1547,y:360.2004},0).wait(1).to({scaleX:0.9983,scaleY:0.9983,x:889.9726,y:360.2198},0).wait(1).to({scaleX:0.9982,scaleY:0.9982,x:895.7905,y:360.2392},0).wait(1).to({scaleX:0.998,scaleY:0.998,x:901.6084,y:360.2585},0).wait(1).to({scaleX:0.9978,scaleY:0.9978,x:907.4263,y:360.2779},0).wait(1).to({scaleX:0.9977,scaleY:0.9977,x:913.2442,y:360.2973},0).wait(1).to({scaleX:0.9975,scaleY:0.9975,x:919.0621,y:360.3166},0).wait(1).to({scaleX:0.9974,scaleY:0.9974,x:924.88,y:360.336},0).wait(1).to({scaleX:0.9972,scaleY:0.9972,x:930.6979,y:360.3554},0).wait(1).to({scaleX:0.9971,scaleY:0.9971,x:936.5158,y:360.3747},0).wait(1).to({scaleX:0.9969,scaleY:0.9969,x:942.3337,y:360.3941},0).wait(1).to({scaleX:0.9968,scaleY:0.9968,x:948.1516,y:360.4135},0).wait(1).to({scaleX:0.9966,scaleY:0.9966,x:953.9695,y:360.4328},0).wait(1).to({scaleX:0.9965,scaleY:0.9965,x:959.7874,y:360.4522},0).wait(1).to({scaleX:0.9963,scaleY:0.9963,x:965.6053,y:360.4716},0).wait(1).to({scaleX:0.9961,scaleY:0.9961,x:971.4232,y:360.491},0).wait(1).to({scaleX:0.996,scaleY:0.996,x:977.2411,y:360.5103},0).wait(1).to({scaleX:0.9958,scaleY:0.9958,x:983.059,y:360.5297},0).wait(1).to({scaleX:0.9957,scaleY:0.9957,x:988.8768,y:360.5491},0).wait(1).to({scaleX:0.9955,scaleY:0.9955,x:994.6947,y:360.5684},0).wait(1).to({scaleX:0.9954,scaleY:0.9954,x:1000.5126,y:360.5878},0).wait(1).to({scaleX:0.9952,scaleY:0.9952,x:1006.3305,y:360.6072},0).wait(1).to({scaleX:0.9951,scaleY:0.9951,x:1012.1484,y:360.6265},0).wait(1).to({scaleX:0.9949,scaleY:0.9949,x:1017.9663,y:360.6459},0).wait(1).to({scaleX:0.9948,scaleY:0.9948,x:1023.7842,y:360.6653},0).wait(1).to({scaleX:0.9946,scaleY:0.9946,x:1029.6021,y:360.6846},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,x:1035.42,y:360.704},0).wait(1).to({scaleX:0.9943,scaleY:0.9943,x:1041.2379,y:360.7234},0).wait(1).to({scaleX:0.9941,scaleY:0.9941,x:1047.0558,y:360.7427},0).wait(1).to({scaleX:0.994,scaleY:0.994,x:1052.8737,y:360.7621},0).wait(1).to({scaleX:0.9938,scaleY:0.9938,x:1058.6916,y:360.7815},0).wait(1).to({scaleX:0.9937,scaleY:0.9937,x:1064.5095,y:360.8008},0).wait(1).to({scaleX:0.9935,scaleY:0.9935,x:1070.3274,y:360.8202},0).wait(1).to({scaleX:0.9934,scaleY:0.9934,x:1076.1453,y:360.8396},0).wait(1).to({scaleX:0.9932,scaleY:0.9932,x:1081.9632,y:360.859},0).wait(1).to({scaleX:0.9931,scaleY:0.9931,x:1087.7811,y:360.8783},0).wait(1).to({scaleX:0.9929,scaleY:0.9929,x:1093.5989,y:360.8977},0).wait(1).to({scaleX:0.9928,scaleY:0.9928,x:1099.4168,y:360.9171},0).wait(1).to({scaleX:0.9926,scaleY:0.9926,x:1105.2347,y:360.9364},0).wait(1).to({scaleX:0.9925,scaleY:0.9925,x:1111.0526,y:360.9558},0).wait(1).to({scaleX:0.9923,scaleY:0.9923,x:1116.8705,y:360.9752},0).wait(1).to({scaleX:0.9921,scaleY:0.9921,x:1122.6884,y:360.9945},0).wait(1).to({scaleX:0.992,scaleY:0.992,x:1128.5063,y:361.0139},0).wait(1).to({scaleX:0.9918,scaleY:0.9918,x:1134.3242,y:361.0333},0).wait(1).to({scaleX:0.9917,scaleY:0.9917,x:1140.1421,y:361.0526},0).wait(1).to({scaleX:0.9915,scaleY:0.9915,x:1145.96,y:361.072},0).wait(1).to({scaleX:0.985,scaleY:0.985,x:1151.27,y:358.6273},0).wait(1).to({scaleX:0.9785,scaleY:0.9785,x:1156.58,y:356.1827},0).wait(1).to({scaleX:0.972,scaleY:0.972,x:1161.89,y:353.738},0).wait(1).to({scaleX:0.9655,scaleY:0.9655,x:1167.2,y:351.2933},0).wait(1).to({scaleX:0.959,scaleY:0.959,x:1172.51,y:348.8487},0).wait(1).to({scaleX:0.9525,scaleY:0.9525,x:1177.82,y:346.404},0).wait(1).to({scaleX:0.946,scaleY:0.946,x:1183.13,y:343.9593},0).wait(1).to({scaleX:0.9395,scaleY:0.9395,x:1188.44,y:341.5147},0).wait(1).to({scaleX:0.933,scaleY:0.933,x:1193.75,y:339.07},0).wait(1).to({scaleX:0.9265,scaleY:0.9265,x:1199.06,y:336.6253},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1204.37,y:334.1807},0).wait(1).to({scaleX:0.9135,scaleY:0.9135,x:1209.68,y:331.736},0).wait(1).to({scaleX:0.907,scaleY:0.907,x:1214.99,y:329.2913},0).wait(1).to({scaleX:0.9005,scaleY:0.9005,x:1220.3,y:326.8467},0).wait(1).to({scaleX:0.894,scaleY:0.894,x:1225.61,y:324.402},0).wait(1).to({scaleX:0.8875,scaleY:0.8875,x:1230.92,y:321.9573},0).wait(1).to({scaleX:0.881,scaleY:0.881,x:1236.23,y:319.5127},0).wait(1).to({scaleX:0.8744,scaleY:0.8744,x:1241.54,y:317.068},0).wait(1).to({scaleX:0.8679,scaleY:0.8679,x:1246.85,y:314.6233},0).wait(1).to({scaleX:0.8614,scaleY:0.8614,x:1252.16,y:312.1787},0).wait(1).to({scaleX:0.8549,scaleY:0.8549,x:1257.47,y:309.734},0).wait(1).to({scaleX:0.8484,scaleY:0.8484,x:1262.78,y:307.2893},0).wait(1).to({scaleX:0.8419,scaleY:0.8419,x:1268.09,y:304.8447},0).wait(1).to({scaleX:0.8354,scaleY:0.8354,x:1273.4,y:302.4},0).wait(1).to({scaleX:0.8332,scaleY:0.8332,x:1273.4551,y:303.3061},0).wait(1).to({scaleX:0.831,scaleY:0.831,x:1273.5102,y:304.2122},0).wait(1).to({scaleX:0.8288,scaleY:0.8288,x:1273.5653,y:305.1184},0).wait(1).to({scaleX:0.8266,scaleY:0.8266,x:1273.6204,y:306.0245},0).wait(1).to({scaleX:0.8244,scaleY:0.8244,x:1273.6755,y:306.9306},0).wait(1).to({scaleX:0.8222,scaleY:0.8222,x:1273.7306,y:307.8367},0).wait(1).to({scaleX:0.8199,scaleY:0.8199,x:1273.7857,y:308.7429},0).wait(1).to({scaleX:0.8177,scaleY:0.8177,x:1273.8408,y:309.649},0).wait(1).to({scaleX:0.8155,scaleY:0.8155,x:1273.8959,y:310.5551},0).wait(1).to({scaleX:0.8133,scaleY:0.8133,x:1273.951,y:311.4612},0).wait(1).to({scaleX:0.8111,scaleY:0.8111,x:1274.0061,y:312.3674},0).wait(1).to({scaleX:0.8089,scaleY:0.8089,x:1274.0612,y:313.2735},0).wait(1).to({scaleX:0.8067,scaleY:0.8067,x:1274.1163,y:314.1796},0).wait(1).to({scaleX:0.8045,scaleY:0.8045,x:1274.1714,y:315.0857},0).wait(1).to({scaleX:0.8023,scaleY:0.8023,x:1274.2265,y:315.9918},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1274.2816,y:316.898},0).wait(1).to({scaleX:0.7978,scaleY:0.7978,x:1274.3367,y:317.8041},0).wait(1).to({scaleX:0.7956,scaleY:0.7956,x:1274.3918,y:318.7102},0).wait(1).to({scaleX:0.7934,scaleY:0.7934,x:1274.4469,y:319.6163},0).wait(1).to({scaleX:0.7912,scaleY:0.7912,x:1274.502,y:320.5225},0).wait(1).to({scaleX:0.789,scaleY:0.789,x:1274.5571,y:321.4286},0).wait(1).to({scaleX:0.7868,scaleY:0.7868,x:1274.6122,y:322.3347},0).wait(1).to({scaleX:0.7846,scaleY:0.7846,x:1274.6673,y:323.2408},0).wait(1).to({scaleX:0.7824,scaleY:0.7824,x:1274.7224,y:324.1469},0).wait(1).to({scaleX:0.7802,scaleY:0.7802,x:1274.7776,y:325.0531},0).wait(1).to({scaleX:0.7779,scaleY:0.7779,x:1274.8327,y:325.9592},0).wait(1).to({scaleX:0.7757,scaleY:0.7757,x:1274.8878,y:326.8653},0).wait(1).to({scaleX:0.7735,scaleY:0.7735,x:1274.9429,y:327.7714},0).wait(1).to({scaleX:0.7713,scaleY:0.7713,x:1274.998,y:328.6776},0).wait(1).to({scaleX:0.7691,scaleY:0.7691,x:1275.0531,y:329.5837},0).wait(1).to({scaleX:0.7669,scaleY:0.7669,x:1275.1082,y:330.4898},0).wait(1).to({scaleX:0.7647,scaleY:0.7647,x:1275.1633,y:331.3959},0).wait(1).to({scaleX:0.7625,scaleY:0.7625,x:1275.2184,y:332.302},0).wait(1).to({scaleX:0.7603,scaleY:0.7603,x:1275.2735,y:333.2082},0).wait(1).to({scaleX:0.758,scaleY:0.758,x:1275.3286,y:334.1143},0).wait(1).to({scaleX:0.7558,scaleY:0.7558,x:1275.3837,y:335.0204},0).wait(1).to({scaleX:0.7536,scaleY:0.7536,x:1275.4388,y:335.9265},0).wait(1).to({scaleX:0.7514,scaleY:0.7514,x:1275.4939,y:336.8327},0).wait(1).to({scaleX:0.7492,scaleY:0.7492,x:1275.549,y:337.7388},0).wait(1).to({scaleX:0.747,scaleY:0.747,x:1275.6041,y:338.6449},0).wait(1).to({scaleX:0.7448,scaleY:0.7448,x:1275.6592,y:339.551},0).wait(1).to({scaleX:0.7426,scaleY:0.7426,x:1275.7143,y:340.4571},0).wait(1).to({scaleX:0.7404,scaleY:0.7404,x:1275.7694,y:341.3633},0).wait(1).to({scaleX:0.7382,scaleY:0.7382,x:1275.8245,y:342.2694},0).wait(1).to({scaleX:0.7359,scaleY:0.7359,x:1275.8796,y:343.1755},0).wait(1).to({scaleX:0.7337,scaleY:0.7337,x:1275.9347,y:344.0816},0).wait(1).to({scaleX:0.7315,scaleY:0.7315,x:1275.9898,y:344.9878},0).wait(1).to({scaleX:0.7293,scaleY:0.7293,x:1276.0449,y:345.8939},0).wait(1).to({scaleX:0.7271,scaleY:0.7271,x:1276.1,y:346.8},0).wait(1).to({scaleX:0.7296,scaleY:0.7296,x:1275.904,y:347.376},0).wait(1).to({scaleX:0.732,scaleY:0.732,x:1275.708,y:347.952},0).wait(1).to({scaleX:0.7345,scaleY:0.7345,x:1275.512,y:348.528},0).wait(1).to({scaleX:0.737,scaleY:0.737,x:1275.316,y:349.104},0).wait(1).to({scaleX:0.7395,scaleY:0.7395,x:1275.12,y:349.68},0).wait(1).to({scaleX:0.7419,scaleY:0.7419,x:1274.924,y:350.256},0).wait(1).to({scaleX:0.7444,scaleY:0.7444,x:1274.728,y:350.832},0).wait(1).to({scaleX:0.7469,scaleY:0.7469,x:1274.532,y:351.408},0).wait(1).to({scaleX:0.7494,scaleY:0.7494,x:1274.336,y:351.984},0).wait(1).to({scaleX:0.7518,scaleY:0.7518,x:1274.14,y:352.56},0).wait(1).to({scaleX:0.7543,scaleY:0.7543,x:1273.944,y:353.136},0).wait(1).to({scaleX:0.7568,scaleY:0.7568,x:1273.748,y:353.712},0).wait(1).to({scaleX:0.7593,scaleY:0.7593,x:1273.552,y:354.288},0).wait(1).to({scaleX:0.7617,scaleY:0.7617,x:1273.356,y:354.864},0).wait(1).to({scaleX:0.7642,scaleY:0.7642,x:1273.16,y:355.44},0).wait(1).to({scaleX:0.7667,scaleY:0.7667,x:1272.964,y:356.016},0).wait(1).to({scaleX:0.7692,scaleY:0.7692,x:1272.768,y:356.592},0).wait(1).to({scaleX:0.7716,scaleY:0.7716,x:1272.572,y:357.168},0).wait(1).to({scaleX:0.7741,scaleY:0.7741,x:1272.376,y:357.744},0).wait(1).to({scaleX:0.7766,scaleY:0.7766,x:1272.18,y:358.32},0).wait(1).to({scaleX:0.7791,scaleY:0.7791,x:1271.984,y:358.896},0).wait(1).to({scaleX:0.7815,scaleY:0.7815,x:1271.788,y:359.472},0).wait(1).to({scaleX:0.784,scaleY:0.784,x:1271.592,y:360.048},0).wait(1).to({scaleX:0.7865,scaleY:0.7865,x:1271.396,y:360.624},0).wait(1).to({scaleX:0.789,scaleY:0.789,x:1271.2,y:361.2},0).wait(1).to({scaleX:0.7914,scaleY:0.7914,x:1271.004,y:361.776},0).wait(1).to({scaleX:0.7939,scaleY:0.7939,x:1270.808,y:362.352},0).wait(1).to({scaleX:0.7964,scaleY:0.7964,x:1270.612,y:362.928},0).wait(1).to({scaleX:0.7989,scaleY:0.7989,x:1270.416,y:363.504},0).wait(1).to({scaleX:0.8013,scaleY:0.8013,x:1270.22,y:364.08},0).wait(1).to({scaleX:0.8038,scaleY:0.8038,x:1270.024,y:364.656},0).wait(1).to({scaleX:0.8063,scaleY:0.8063,x:1269.828,y:365.232},0).wait(1).to({scaleX:0.8088,scaleY:0.8088,x:1269.632,y:365.808},0).wait(1).to({scaleX:0.8112,scaleY:0.8112,x:1269.436,y:366.384},0).wait(1).to({scaleX:0.8137,scaleY:0.8137,x:1269.24,y:366.96},0).wait(1).to({scaleX:0.8162,scaleY:0.8162,x:1269.044,y:367.536},0).wait(1).to({scaleX:0.8186,scaleY:0.8186,x:1268.848,y:368.112},0).wait(1).to({scaleX:0.8211,scaleY:0.8211,x:1268.652,y:368.688},0).wait(1).to({scaleX:0.8236,scaleY:0.8236,x:1268.456,y:369.264},0).wait(1).to({scaleX:0.8261,scaleY:0.8261,x:1268.26,y:369.84},0).wait(1).to({scaleX:0.8285,scaleY:0.8285,x:1268.064,y:370.416},0).wait(1).to({scaleX:0.831,scaleY:0.831,x:1267.868,y:370.992},0).wait(1).to({scaleX:0.8335,scaleY:0.8335,x:1267.672,y:371.568},0).wait(1).to({scaleX:0.836,scaleY:0.836,x:1267.476,y:372.144},0).wait(1).to({scaleX:0.8384,scaleY:0.8384,x:1267.28,y:372.72},0).wait(1).to({scaleX:0.8409,scaleY:0.8409,x:1267.084,y:373.296},0).wait(1).to({scaleX:0.8434,scaleY:0.8434,x:1266.888,y:373.872},0).wait(1).to({scaleX:0.8459,scaleY:0.8459,x:1266.692,y:374.448},0).wait(1).to({scaleX:0.8483,scaleY:0.8483,x:1266.496,y:375.024},0).wait(1).to({scaleX:0.8508,scaleY:0.8508,x:1266.3,y:375.6},0).wait(1).to({scaleX:0.8533,scaleY:0.8533,x:1266.104,y:376.176},0).wait(1).to({scaleX:0.8558,scaleY:0.8558,x:1265.908,y:376.752},0).wait(1).to({scaleX:0.8582,scaleY:0.8582,x:1265.712,y:377.328},0).wait(1).to({scaleX:0.8607,scaleY:0.8607,x:1265.516,y:377.904},0).wait(1).to({scaleX:0.8632,scaleY:0.8632,x:1265.32,y:378.48},0).wait(1).to({scaleX:0.8657,scaleY:0.8657,x:1265.124,y:379.056},0).wait(1).to({scaleX:0.8681,scaleY:0.8681,x:1264.928,y:379.632},0).wait(1).to({scaleX:0.8706,scaleY:0.8706,x:1264.732,y:380.208},0).wait(1).to({scaleX:0.8731,scaleY:0.8731,x:1264.536,y:380.784},0).wait(1).to({scaleX:0.8756,scaleY:0.8756,x:1264.34,y:381.36},0).wait(1).to({scaleX:0.878,scaleY:0.878,x:1264.144,y:381.936},0).wait(1).to({scaleX:0.8805,scaleY:0.8805,x:1263.948,y:382.512},0).wait(1).to({scaleX:0.883,scaleY:0.883,x:1263.752,y:383.088},0).wait(1).to({scaleX:0.8855,scaleY:0.8855,x:1263.556,y:383.664},0).wait(1).to({scaleX:0.8879,scaleY:0.8879,x:1263.36,y:384.24},0).wait(1).to({scaleX:0.8904,scaleY:0.8904,x:1263.164,y:384.816},0).wait(1).to({scaleX:0.8929,scaleY:0.8929,x:1262.968,y:385.392},0).wait(1).to({scaleX:0.8954,scaleY:0.8954,x:1262.772,y:385.968},0).wait(1).to({scaleX:0.8978,scaleY:0.8978,x:1262.576,y:386.544},0).wait(1).to({scaleX:0.9003,scaleY:0.9003,x:1262.38,y:387.12},0).wait(1).to({scaleX:0.9028,scaleY:0.9028,x:1262.184,y:387.696},0).wait(1).to({scaleX:0.9053,scaleY:0.9053,x:1261.988,y:388.272},0).wait(1).to({scaleX:0.9077,scaleY:0.9077,x:1261.792,y:388.848},0).wait(1).to({scaleX:0.9102,scaleY:0.9102,x:1261.596,y:389.424},0).wait(1).to({scaleX:0.9127,scaleY:0.9127,x:1261.4,y:390},0).wait(1).to({scaleX:0.9131,scaleY:0.9131,x:1264.3765,y:389.9029},0).wait(1).to({scaleX:0.9136,scaleY:0.9136,x:1267.3529,y:389.8059},0).wait(1).to({scaleX:0.9141,scaleY:0.9141,x:1270.3294,y:389.7088},0).wait(1).to({scaleX:0.9146,scaleY:0.9146,x:1273.3059,y:389.6118},0).wait(1).to({scaleX:0.915,scaleY:0.915,x:1276.2824,y:389.5147},0).wait(1).to({scaleX:0.9155,scaleY:0.9155,x:1279.2588,y:389.4177},0).wait(1).to({scaleX:0.916,scaleY:0.916,x:1282.2353,y:389.3206},0).wait(1).to({scaleX:0.9165,scaleY:0.9165,x:1285.2118,y:389.2235},0).wait(1).to({scaleX:0.9169,scaleY:0.9169,x:1288.1882,y:389.1265},0).wait(1).to({scaleX:0.9174,scaleY:0.9174,x:1291.1647,y:389.0294},0).wait(1).to({scaleX:0.9179,scaleY:0.9179,x:1294.1412,y:388.9324},0).wait(1).to({scaleX:0.9184,scaleY:0.9184,x:1297.1176,y:388.8353},0).wait(1).to({scaleX:0.9188,scaleY:0.9188,x:1300.0941,y:388.7382},0).wait(1).to({scaleX:0.9193,scaleY:0.9193,x:1303.0706,y:388.6412},0).wait(1).to({scaleX:0.9198,scaleY:0.9198,x:1306.0471,y:388.5441},0).wait(1).to({scaleX:0.9203,scaleY:0.9203,x:1309.0235,y:388.4471},0).wait(1).to({scaleX:0.9207,scaleY:0.9207,x:1312,y:388.35},0).wait(1).to({scaleX:0.9212,scaleY:0.9212,x:1314.9765,y:388.2529},0).wait(1).to({scaleX:0.9217,scaleY:0.9217,x:1317.9529,y:388.1559},0).wait(1).to({scaleX:0.9222,scaleY:0.9222,x:1320.9294,y:388.0588},0).wait(1).to({scaleX:0.9226,scaleY:0.9226,x:1323.9059,y:387.9618},0).wait(1).to({scaleX:0.9231,scaleY:0.9231,x:1326.8824,y:387.8647},0).wait(1).to({scaleX:0.9236,scaleY:0.9236,x:1329.8588,y:387.7677},0).wait(1).to({scaleX:0.9241,scaleY:0.9241,x:1332.8353,y:387.6706},0).wait(1).to({scaleX:0.9245,scaleY:0.9245,x:1335.8118,y:387.5735},0).wait(1).to({scaleX:0.925,scaleY:0.925,x:1338.7882,y:387.4765},0).wait(1).to({scaleX:0.9255,scaleY:0.9255,x:1341.7647,y:387.3794},0).wait(1).to({scaleX:0.926,scaleY:0.926,x:1344.7412,y:387.2824},0).wait(1).to({scaleX:0.9264,scaleY:0.9264,x:1347.7176,y:387.1853},0).wait(1).to({scaleX:0.9269,scaleY:0.9269,x:1350.6941,y:387.0882},0).wait(1).to({scaleX:0.9274,scaleY:0.9274,x:1353.6706,y:386.9912},0).wait(1).to({scaleX:0.9279,scaleY:0.9279,x:1356.6471,y:386.8941},0).wait(1).to({scaleX:0.9283,scaleY:0.9283,x:1359.6235,y:386.7971},0).wait(1).to({scaleX:0.9288,scaleY:0.9288,x:1362.6,y:386.7},0).wait(1).to({scaleX:0.9293,scaleY:0.9293,x:1365.5765,y:386.6029},0).wait(1).to({scaleX:0.9298,scaleY:0.9298,x:1368.5529,y:386.5059},0).wait(1).to({scaleX:0.9302,scaleY:0.9302,x:1371.5294,y:386.4088},0).wait(1).to({scaleX:0.9307,scaleY:0.9307,x:1374.5059,y:386.3118},0).wait(1).to({scaleX:0.9312,scaleY:0.9312,x:1377.4824,y:386.2147},0).wait(1).to({scaleX:0.9317,scaleY:0.9317,x:1380.4588,y:386.1177},0).wait(1).to({scaleX:0.9321,scaleY:0.9321,x:1383.4353,y:386.0206},0).wait(1).to({scaleX:0.9326,scaleY:0.9326,x:1386.4118,y:385.9235},0).wait(1).to({scaleX:0.9331,scaleY:0.9331,x:1389.3882,y:385.8265},0).wait(1).to({scaleX:0.9336,scaleY:0.9336,x:1392.3647,y:385.7294},0).wait(1).to({scaleX:0.934,scaleY:0.934,x:1395.3412,y:385.6323},0).wait(1).to({scaleX:0.9345,scaleY:0.9345,x:1398.3176,y:385.5353},0).wait(1).to({scaleX:0.935,scaleY:0.935,x:1401.2941,y:385.4382},0).wait(1).to({scaleX:0.9355,scaleY:0.9355,x:1404.2706,y:385.3412},0).wait(1).to({scaleX:0.9359,scaleY:0.9359,x:1407.2471,y:385.2441},0).wait(1).to({scaleX:0.9364,scaleY:0.9364,x:1410.2235,y:385.1471},0).wait(1).to({scaleX:0.9369,scaleY:0.9369,x:1413.2,y:385.05},0).wait(1).to({scaleX:0.9316,scaleY:0.9316,x:1416.8013,y:384.8918},0).wait(1).to({scaleX:0.9263,scaleY:0.9263,x:1420.4025,y:384.7335},0).wait(1).to({scaleX:0.9209,scaleY:0.9209,x:1424.0038,y:384.5753},0).wait(1).to({scaleX:0.9156,scaleY:0.9156,x:1427.6051,y:384.4171},0).wait(1).to({scaleX:0.9103,scaleY:0.9103,x:1431.2063,y:384.2588},0).wait(1).to({scaleX:0.905,scaleY:0.905,x:1434.8076,y:384.1006},0).wait(1).to({scaleX:0.8997,scaleY:0.8997,x:1438.4089,y:383.9424},0).wait(1).to({scaleX:0.8944,scaleY:0.8944,x:1442.0102,y:383.7841},0).wait(1).to({scaleX:0.8891,scaleY:0.8891,x:1445.6114,y:383.6259},0).wait(1).to({scaleX:0.8837,scaleY:0.8837,x:1449.2127,y:383.4677},0).wait(1).to({scaleX:0.8784,scaleY:0.8784,x:1452.814,y:383.3094},0).wait(1).to({scaleX:0.8731,scaleY:0.8731,x:1456.4152,y:383.1512},0).wait(1).to({scaleX:0.8678,scaleY:0.8678,x:1460.0165,y:382.993},0).wait(1).to({scaleX:0.8625,scaleY:0.8625,x:1463.6178,y:382.8347},0).wait(1).to({scaleX:0.8572,scaleY:0.8572,x:1467.219,y:382.6765},0).wait(1).to({scaleX:0.8519,scaleY:0.8519,x:1470.8203,y:382.5183},0).wait(1).to({scaleX:0.8465,scaleY:0.8465,x:1474.4216,y:382.36},0).wait(1).to({scaleX:0.8412,scaleY:0.8412,x:1478.0229,y:382.2018},0).wait(1).to({scaleX:0.8359,scaleY:0.8359,x:1481.6241,y:382.0436},0).wait(1).to({scaleX:0.8306,scaleY:0.8306,x:1485.2254,y:381.8853},0).wait(1).to({scaleX:0.8253,scaleY:0.8253,x:1488.8267,y:381.7271},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:1492.4279,y:381.5689},0).wait(1).to({scaleX:0.8147,scaleY:0.8147,x:1496.0292,y:381.4106},0).wait(1).to({scaleX:0.8093,scaleY:0.8093,x:1499.6305,y:381.2524},0).wait(1).to({scaleX:0.804,scaleY:0.804,x:1503.2317,y:381.0942},0).wait(1).to({scaleX:0.7987,scaleY:0.7987,x:1506.833,y:380.9359},0).wait(1).to({scaleX:0.7934,scaleY:0.7934,x:1510.4343,y:380.7777},0).wait(1).to({scaleX:0.7881,scaleY:0.7881,x:1514.0356,y:380.6195},0).wait(1).to({scaleX:0.7828,scaleY:0.7828,x:1517.6368,y:380.4612},0).wait(1).to({scaleX:0.7775,scaleY:0.7775,x:1521.2381,y:380.303},0).wait(1).to({scaleX:0.7721,scaleY:0.7721,x:1524.8394,y:380.1448},0).wait(1).to({scaleX:0.7668,scaleY:0.7668,x:1528.4406,y:379.9865},0).wait(1).to({scaleX:0.7615,scaleY:0.7615,x:1532.0419,y:379.8283},0).wait(1).to({scaleX:0.7562,scaleY:0.7562,x:1535.6432,y:379.6701},0).wait(1).to({scaleX:0.7509,scaleY:0.7509,x:1539.2444,y:379.5118},0).wait(1).to({scaleX:0.7456,scaleY:0.7456,x:1542.8457,y:379.3536},0).wait(1).to({scaleX:0.7403,scaleY:0.7403,x:1546.447,y:379.1954},0).wait(1).to({scaleX:0.7349,scaleY:0.7349,x:1550.0483,y:379.0371},0).wait(1).to({scaleX:0.7296,scaleY:0.7296,x:1553.6495,y:378.8789},0).wait(1).to({scaleX:0.7243,scaleY:0.7243,x:1557.2508,y:378.7207},0).wait(1).to({scaleX:0.719,scaleY:0.719,x:1560.8521,y:378.5624},0).wait(1).to({scaleX:0.7137,scaleY:0.7137,x:1564.4533,y:378.4042},0).wait(1).to({scaleX:0.7084,scaleY:0.7084,x:1568.0546,y:378.246},0).wait(1).to({scaleX:0.7031,scaleY:0.7031,x:1571.6559,y:378.0877},0).wait(1).to({scaleX:0.6977,scaleY:0.6977,x:1575.2571,y:377.9295},0).wait(1).to({scaleX:0.6924,scaleY:0.6924,x:1578.8584,y:377.7713},0).wait(1).to({scaleX:0.6871,scaleY:0.6871,x:1582.4597,y:377.613},0).wait(1).to({scaleX:0.6818,scaleY:0.6818,x:1586.061,y:377.4548},0).wait(1).to({scaleX:0.6765,scaleY:0.6765,x:1589.6622,y:377.2966},0).wait(1).to({scaleX:0.6712,scaleY:0.6712,x:1593.2635,y:377.1383},0).wait(1).to({scaleX:0.6659,scaleY:0.6659,x:1596.8648,y:376.9801},0).wait(1).to({scaleX:0.6605,scaleY:0.6605,x:1600.466,y:376.8219},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,x:1604.0673,y:376.6636},0).wait(1).to({scaleX:0.6499,scaleY:0.6499,x:1607.6686,y:376.5054},0).wait(1).to({scaleX:0.6446,scaleY:0.6446,x:1611.2698,y:376.3472},0).wait(1).to({scaleX:0.6393,scaleY:0.6393,x:1614.8711,y:376.1889},0).wait(1).to({scaleX:0.634,scaleY:0.634,x:1618.4724,y:376.0307},0).wait(1).to({scaleX:0.6287,scaleY:0.6287,x:1622.0737,y:375.8725},0).wait(1).to({scaleX:0.6233,scaleY:0.6233,x:1625.6749,y:375.7142},0).wait(1).to({scaleX:0.618,scaleY:0.618,x:1629.2762,y:375.556},0).wait(1).to({scaleX:0.6127,scaleY:0.6127,x:1632.8775,y:375.3978},0).wait(1).to({scaleX:0.6074,scaleY:0.6074,x:1636.4787,y:375.2395},0).wait(1).to({scaleX:0.6021,scaleY:0.6021,x:1640.08,y:375.0813},0).wait(1).to({scaleX:0.5998,scaleY:0.5998,x:1641.5735,y:376.5072},0).wait(1).to({scaleX:0.5976,scaleY:0.5976,x:1643.067,y:377.9332},0).wait(1).to({scaleX:0.5953,scaleY:0.5953,x:1644.5605,y:379.3591},0).wait(1).to({scaleX:0.5931,scaleY:0.5931,x:1646.054,y:380.785},0).wait(1).to({scaleX:0.5908,scaleY:0.5908,x:1647.5475,y:382.211},0).wait(1).to({scaleX:0.5886,scaleY:0.5886,x:1649.041,y:383.6369},0).wait(1).to({scaleX:0.5864,scaleY:0.5864,x:1650.5345,y:385.0629},0).wait(1).to({scaleX:0.5841,scaleY:0.5841,x:1652.028,y:386.4888},0).wait(1).to({scaleX:0.5819,scaleY:0.5819,x:1653.5215,y:387.9147},0).wait(1).to({scaleX:0.5796,scaleY:0.5796,x:1655.015,y:389.3407},0).wait(1).to({scaleX:0.5774,scaleY:0.5774,x:1656.5085,y:390.7666},0).wait(1).to({scaleX:0.5751,scaleY:0.5751,x:1658.002,y:392.1925},0).wait(1).to({scaleX:0.5729,scaleY:0.5729,x:1659.4955,y:393.6185},0).wait(1).to({scaleX:0.5706,scaleY:0.5706,x:1660.989,y:395.0444},0).wait(1).to({scaleX:0.5684,scaleY:0.5684,x:1662.4825,y:396.4703},0).wait(1).to({scaleX:0.5661,scaleY:0.5661,x:1663.976,y:397.8963},0).wait(1).to({scaleX:0.5639,scaleY:0.5639,x:1665.4695,y:399.3222},0).wait(1).to({scaleX:0.5616,scaleY:0.5616,x:1666.963,y:400.7481},0).wait(1).to({scaleX:0.5594,scaleY:0.5594,x:1668.4565,y:402.1741},0).wait(1).to({scaleX:0.5571,scaleY:0.5571,x:1669.95,y:403.6},0).wait(1).to({scaleX:0.5609,scaleY:0.5609,x:1672.6199,y:403.1437},0).wait(1).to({scaleX:0.5646,scaleY:0.5646,x:1675.2897,y:402.6875},0).wait(1).to({scaleX:0.5684,scaleY:0.5684,x:1677.9596,y:402.2312},0).wait(1).to({scaleX:0.5721,scaleY:0.5721,x:1680.6295,y:401.7749},0).wait(1).to({scaleX:0.5758,scaleY:0.5758,x:1683.2993,y:401.3186},0).wait(1).to({scaleX:0.5796,scaleY:0.5796,x:1685.9692,y:400.8624},0).wait(1).to({scaleX:0.5833,scaleY:0.5833,x:1688.6391,y:400.4061},0).wait(1).to({scaleX:0.587,scaleY:0.587,x:1691.3089,y:399.9498},0).wait(1).to({scaleX:0.5908,scaleY:0.5908,x:1693.9788,y:399.4936},0).wait(1).to({scaleX:0.5945,scaleY:0.5945,x:1696.6487,y:399.0373},0).wait(1).to({scaleX:0.5982,scaleY:0.5982,x:1699.3185,y:398.581},0).wait(1).to({scaleX:0.602,scaleY:0.602,x:1701.9884,y:398.1247},0).wait(1).to({scaleX:0.6057,scaleY:0.6057,x:1704.6583,y:397.6685},0).wait(1).to({scaleX:0.6095,scaleY:0.6095,x:1707.3281,y:397.2122},0).wait(1).to({scaleX:0.6132,scaleY:0.6132,x:1709.998,y:396.7559},0).wait(1).to({scaleX:0.6169,scaleY:0.6169,x:1712.6679,y:396.2997},0).wait(1).to({scaleX:0.6207,scaleY:0.6207,x:1715.3377,y:395.8434},0).wait(1).to({scaleX:0.6244,scaleY:0.6244,x:1718.0076,y:395.3871},0).wait(1).to({scaleX:0.6281,scaleY:0.6281,x:1720.6775,y:394.9308},0).wait(1).to({scaleX:0.6319,scaleY:0.6319,x:1723.3473,y:394.4746},0).wait(1).to({scaleX:0.6356,scaleY:0.6356,x:1726.0172,y:394.0183},0).wait(1).to({scaleX:0.6393,scaleY:0.6393,x:1728.6871,y:393.562},0).wait(1).to({scaleX:0.6431,scaleY:0.6431,x:1731.3569,y:393.1058},0).wait(1).to({scaleX:0.6468,scaleY:0.6468,x:1734.0268,y:392.6495},0).wait(1).to({scaleX:0.6505,scaleY:0.6505,x:1736.6967,y:392.1932},0).wait(1).to({scaleX:0.6543,scaleY:0.6543,x:1739.3665,y:391.7369},0).wait(1).to({scaleX:0.658,scaleY:0.658,x:1742.0364,y:391.2807},0).wait(1).to({scaleX:0.6618,scaleY:0.6618,x:1744.7063,y:390.8244},0).wait(1).to({scaleX:0.6655,scaleY:0.6655,x:1747.3761,y:390.3681},0).wait(1).to({scaleX:0.6692,scaleY:0.6692,x:1750.046,y:389.9118},0).wait(1).to({scaleX:0.673,scaleY:0.673,x:1752.7159,y:389.4556},0).wait(1).to({scaleX:0.6767,scaleY:0.6767,x:1755.3857,y:388.9993},0).wait(1).to({scaleX:0.6804,scaleY:0.6804,x:1758.0556,y:388.543},0).wait(1).to({scaleX:0.6842,scaleY:0.6842,x:1760.7255,y:388.0868},0).wait(1).to({scaleX:0.6879,scaleY:0.6879,x:1763.3953,y:387.6305},0).wait(1).to({scaleX:0.6916,scaleY:0.6916,x:1766.0652,y:387.1742},0).wait(1).to({scaleX:0.6954,scaleY:0.6954,x:1768.7351,y:386.7179},0).wait(1).to({scaleX:0.6991,scaleY:0.6991,x:1771.4049,y:386.2617},0).wait(1).to({scaleX:0.7029,scaleY:0.7029,x:1774.0748,y:385.8054},0).wait(1).to({scaleX:0.7066,scaleY:0.7066,x:1776.7447,y:385.3491},0).wait(1).to({scaleX:0.7103,scaleY:0.7103,x:1779.4145,y:384.8929},0).wait(1).to({scaleX:0.7141,scaleY:0.7141,x:1782.0844,y:384.4366},0).wait(1).to({scaleX:0.7178,scaleY:0.7178,x:1784.7543,y:383.9803},0).wait(1).to({scaleX:0.7215,scaleY:0.7215,x:1787.4241,y:383.524},0).wait(1).to({scaleX:0.7253,scaleY:0.7253,x:1790.094,y:383.0678},0).wait(1).to({scaleX:0.729,scaleY:0.729,x:1792.7639,y:382.6115},0).wait(1).to({scaleX:0.7327,scaleY:0.7327,x:1795.4337,y:382.1552},0).wait(1).to({scaleX:0.7365,scaleY:0.7365,x:1798.1036,y:381.699},0).wait(1).to({scaleX:0.7402,scaleY:0.7402,x:1800.7735,y:381.2427},0).wait(1).to({scaleX:0.744,scaleY:0.744,x:1803.4433,y:380.7864},0).wait(1).to({scaleX:0.7477,scaleY:0.7477,x:1806.1132,y:380.3301},0).wait(1).to({scaleX:0.7514,scaleY:0.7514,x:1808.7831,y:379.8739},0).wait(1).to({scaleX:0.7552,scaleY:0.7552,x:1811.4529,y:379.4176},0).wait(1).to({scaleX:0.7589,scaleY:0.7589,x:1814.1228,y:378.9613},0).wait(1).to({scaleX:0.7626,scaleY:0.7626,x:1816.7927,y:378.5051},0).wait(1).to({scaleX:0.7664,scaleY:0.7664,x:1819.4625,y:378.0488},0).wait(1).to({scaleX:0.7701,scaleY:0.7701,x:1822.1324,y:377.5925},0).wait(1).to({scaleX:0.7738,scaleY:0.7738,x:1824.8023,y:377.1362},0).wait(1).to({scaleX:0.7776,scaleY:0.7776,x:1827.4721,y:376.68},0).wait(1).to({scaleX:0.7813,scaleY:0.7813,x:1830.142,y:376.2237},0).wait(1).to({scaleX:0.7851,scaleY:0.7851,x:1832.8119,y:375.7674},0).wait(1).to({scaleX:0.7888,scaleY:0.7888,x:1835.4817,y:375.3111},0).wait(1).to({scaleX:0.7925,scaleY:0.7925,x:1838.1516,y:374.8549},0).wait(1).to({scaleX:0.7963,scaleY:0.7963,x:1840.8215,y:374.3986},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1843.4913,y:373.9423},0).wait(1).to({scaleX:0.8037,scaleY:0.8037,x:1846.1612,y:373.4861},0).wait(1).to({scaleX:0.8075,scaleY:0.8075,x:1848.8311,y:373.0298},0).wait(1).to({scaleX:0.8112,scaleY:0.8112,x:1851.5009,y:372.5735},0).wait(1).to({scaleX:0.8149,scaleY:0.8149,x:1854.1708,y:372.1172},0).wait(1).to({scaleX:0.8187,scaleY:0.8187,x:1856.8407,y:371.661},0).wait(1).to({scaleX:0.8224,scaleY:0.8224,x:1859.5105,y:371.2047},0).wait(1).to({scaleX:0.8261,scaleY:0.8261,x:1862.1804,y:370.7484},0).wait(1).to({scaleX:0.8299,scaleY:0.8299,x:1864.8503,y:370.2922},0).wait(1).to({scaleX:0.8336,scaleY:0.8336,x:1867.5201,y:369.8359},0).wait(1).to({scaleX:0.8374,scaleY:0.8374,x:1870.19,y:369.3796},0).wait(1).to({scaleX:0.831,scaleY:0.831,x:1877.2448,y:372.0229},0).wait(1).to({scaleX:0.8247,scaleY:0.8247,x:1884.2996,y:374.6662},0).wait(1).to({scaleX:0.8184,scaleY:0.8184,x:1891.3544,y:377.3094},0).wait(1).to({scaleX:0.812,scaleY:0.812,x:1898.4092,y:379.9527},0).wait(1).to({scaleX:0.8057,scaleY:0.8057,x:1905.464,y:382.596},0).wait(1).to({scaleX:0.7994,scaleY:0.7994,x:1912.5188,y:385.2393},0).wait(1).to({scaleX:0.793,scaleY:0.793,x:1919.5737,y:387.8826},0).wait(1).to({scaleX:0.7867,scaleY:0.7867,x:1926.6285,y:390.5258},0).wait(1).to({scaleX:0.7804,scaleY:0.7804,x:1933.6833,y:393.1691},0).wait(1).to({scaleX:0.774,scaleY:0.774,x:1940.7381,y:395.8124},0).wait(1).to({scaleX:0.7677,scaleY:0.7677,x:1947.7929,y:398.4557},0).wait(1).to({scaleX:0.7614,scaleY:0.7614,x:1954.8477,y:401.0989},0).wait(1).to({scaleX:0.755,scaleY:0.755,x:1961.9025,y:403.7422},0).wait(1).to({scaleX:0.7487,scaleY:0.7487,x:1968.9573,y:406.3855},0).wait(1).to({scaleX:0.7424,scaleY:0.7424,x:1976.0121,y:409.0288},0).wait(1).to({scaleX:0.736,scaleY:0.736,x:1983.0669,y:411.672},0).wait(1).to({scaleX:0.7297,scaleY:0.7297,x:1990.1217,y:414.3153},0).wait(1).to({scaleX:0.7234,scaleY:0.7234,x:1997.1765,y:416.9586},0).wait(1).to({scaleX:0.717,scaleY:0.717,x:2004.2313,y:419.6019},0).wait(1).to({scaleX:0.7107,scaleY:0.7107,x:2011.2862,y:422.2451},0).wait(1).to({scaleX:0.7044,scaleY:0.7044,x:2018.341,y:424.8884},0).wait(1).to({scaleX:0.698,scaleY:0.698,x:2025.3958,y:427.5317},0).wait(1).to({scaleX:0.6917,scaleY:0.6917,x:2032.4506,y:430.175},0).wait(1).to({scaleX:0.6854,scaleY:0.6854,x:2039.5054,y:432.8183},0).wait(1).to({scaleX:0.679,scaleY:0.679,x:2046.5602,y:435.4615},0).wait(1).to({scaleX:0.6727,scaleY:0.6727,x:2053.615,y:438.1048},0).wait(1).to({scaleX:0.6664,scaleY:0.6664,x:2060.6698,y:440.7481},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:2067.7246,y:443.3914},0).wait(1).to({scaleX:0.6537,scaleY:0.6537,x:2074.7794,y:446.0346},0).wait(1).to({scaleX:0.6474,scaleY:0.6474,x:2081.8342,y:448.6779},0).wait(1).to({scaleX:0.641,scaleY:0.641,x:2088.889,y:451.3212},0).wait(1).to({scaleX:0.6347,scaleY:0.6347,x:2095.9438,y:453.9645},0).wait(1).to({scaleX:0.6284,scaleY:0.6284,x:2102.9987,y:456.6077},0).wait(1).to({scaleX:0.622,scaleY:0.622,x:2110.0535,y:459.251},0).wait(1).to({scaleX:0.6157,scaleY:0.6157,x:2117.1083,y:461.8943},0).wait(1).to({scaleX:0.6094,scaleY:0.6094,x:2124.1631,y:464.5376},0).wait(1).to({scaleX:0.603,scaleY:0.603,x:2131.2179,y:467.1809},0).wait(1).to({scaleX:0.5967,scaleY:0.5967,x:2138.2727,y:469.8241},0).wait(1).to({scaleX:0.5904,scaleY:0.5904,x:2145.3275,y:472.4674},0).wait(1).to({scaleX:0.584,scaleY:0.584,x:2152.3823,y:475.1107},0).wait(1).to({scaleX:0.5777,scaleY:0.5777,x:2159.4371,y:477.754},0).wait(1).to({scaleX:0.5714,scaleY:0.5714,x:2166.4919,y:480.3972},0).wait(1).to({scaleX:0.5651,scaleY:0.5651,x:2173.5467,y:483.0405},0).wait(1).to({scaleX:0.5587,scaleY:0.5587,x:2180.6015,y:485.6838},0).wait(1).to({scaleX:0.5524,scaleY:0.5524,x:2187.6563,y:488.3271},0).wait(1).to({scaleX:0.5461,scaleY:0.5461,x:2194.7112,y:490.9703},0).wait(1).to({scaleX:0.5397,scaleY:0.5397,x:2201.766,y:493.6136},0).wait(1).to({scaleX:0.5334,scaleY:0.5334,x:2208.8208,y:496.2569},0).wait(1).to({scaleX:0.5271,scaleY:0.5271,x:2215.8756,y:498.9002},0).wait(1).to({scaleX:0.5207,scaleY:0.5207,x:2222.9304,y:501.5435},0).wait(1).to({scaleX:0.5144,scaleY:0.5144,x:2229.9852,y:504.1867},0).wait(1).to({scaleX:0.5081,scaleY:0.5081,x:2237.04,y:506.83},0).to({_off:true},1).wait(1));

	// Replay_obj_
	this.Replay = new lib.Scene_1_Replay();
	this.Replay.name = "Replay";
	this.Replay.setTransform(644.3,346.3,1,1,0,0,0,644.3,346.3);
	this.Replay.depth = 0;
	this.Replay.isAttachedToCamera = 0
	this.Replay.isAttachedToMask = 0
	this.Replay.layerDepth = 0
	this.Replay.layerIndex = 0
	this.Replay.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Replay).wait(628).to({regX:2239.2,regY:499.9,scaleX:1.9683,scaleY:1.9683,y:346.45},0).wait(1).to({regX:644.3,regY:346.3,scaleX:1,scaleY:1,y:346.3},0).wait(1));

	// hilazon_obj_
	this.hilazon = new lib.Scene_1_hilazon();
	this.hilazon.name = "hilazon";
	this.hilazon.setTransform(108.4,650.5,1,1,0,0,0,108.4,650.5);
	this.hilazon.depth = 0;
	this.hilazon.isAttachedToCamera = 0
	this.hilazon.isAttachedToMask = 0
	this.hilazon.layerDepth = 0
	this.hilazon.layerIndex = 1
	this.hilazon.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.hilazon).wait(69).to({regX:1237.7,regY:581.7,x:1237.7,y:581.7},0).wait(510).to({regX:1456.4,regY:615,scaleX:1.222,scaleY:1.222,x:108.45,y:650.45},0).wait(1).to({regX:1237.7,regY:581.7,scaleX:1,scaleY:1,x:-110.2,y:617.15},0).wait(48).to({_off:true},1).wait(1));

	// Dog_obj_
	this.Dog = new lib.Scene_1_Dog();
	this.Dog.name = "Dog";
	this.Dog.setTransform(115,537.8,1,1,0,0,0,115,537.8);
	this.Dog.depth = 0;
	this.Dog.isAttachedToCamera = 0
	this.Dog.isAttachedToMask = 0
	this.Dog.layerDepth = 0
	this.Dog.layerIndex = 2
	this.Dog.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Dog).wait(70).to({regX:971.3,regY:503.3,x:971.3,y:503.3},0).wait(349).to({regX:927.6,regY:550.5,scaleX:1.0735,scaleY:1.0735,x:114.85,y:537.85},0).wait(1).to({regX:971.3,regY:503.3,scaleX:1,scaleY:1,x:158.6,y:490.65},0).wait(80).to({regX:1374.8,regY:501.7,scaleX:1.7877,scaleY:1.7877,x:115,y:537.9},0).wait(128).to({regX:1970.2,regY:597.1,scaleX:1.9683,scaleY:1.9683,x:114.85,y:537.75},0).to({_off:true},1).wait(1));

	// bird_obj_
	this.bird = new lib.Scene_1_bird();
	this.bird.name = "bird";
	this.bird.setTransform(8,261.8,1,1,0,0,0,8,261.8);
	this.bird.depth = 0;
	this.bird.isAttachedToCamera = 0
	this.bird.isAttachedToMask = 0
	this.bird.layerDepth = 0
	this.bird.layerIndex = 3
	this.bird.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bird).wait(67).to({regX:696.5,regY:262.4,x:696.5,y:262.4},0).wait(174).to({regX:726.6,regY:224,scaleX:1.1786,scaleY:1.1786,x:8,y:261.8},0).wait(1).to({regX:696.5,regY:262.4,scaleX:1,scaleY:1,x:-22.1,y:300.2},0).wait(42).to({regX:804.9,regY:266.5,scaleX:1.3427,scaleY:1.3427,x:7.95,y:261.8},0).to({_off:true},345).wait(1));

	// claod__obj_
	this.claod_ = new lib.Scene_1_claod_();
	this.claod_.name = "claod_";
	this.claod_.setTransform(-136,139.2,1,1,0,0,0,-136,139.2);
	this.claod_.depth = 0;
	this.claod_.isAttachedToCamera = 0
	this.claod_.isAttachedToMask = 0
	this.claod_.layerDepth = 0
	this.claod_.layerIndex = 4
	this.claod_.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.claod_).wait(1).to({regX:615.2,regY:139.1,x:615.2,y:139.1},0).wait(627).to({_off:true},1).wait(1));

	// nambers_obj_
	this.nambers = new lib.Scene_1_nambers();
	this.nambers.name = "nambers";
	this.nambers.setTransform(658.9,431.9,1,1,0,0,0,658.9,431.9);
	this.nambers.depth = 0;
	this.nambers.isAttachedToCamera = 0
	this.nambers.isAttachedToMask = 0
	this.nambers.layerDepth = 0
	this.nambers.layerIndex = 5
	this.nambers.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.nambers).wait(1).to({regX:1061.3,regY:386.4,x:1061.3,y:386.4},0).wait(25).to({regX:658.9,regY:431.9,x:658.9,y:431.9},0).wait(1).to({regX:1061.3,regY:386.4,x:1061.3,y:386.4},0).wait(19).to({regX:658.9,regY:431.9,x:658.9,y:431.9},0).wait(1).to({regX:1061.3,regY:386.4,x:1061.3,y:386.4},0).wait(18).to({regX:658.9,regY:431.9,x:658.9,y:431.9},0).wait(1).to({regX:1061.3,regY:386.4,x:1061.3,y:386.4},0).wait(16).to({regX:658.9,regY:431.9,x:658.9,y:431.9},0).wait(158).to({regX:1273.6,regY:371.2,scaleX:1.1697,scaleY:1.1697,x:658.85},0).wait(1).to({regX:1061.3,regY:386.4,scaleX:1,scaleY:1,x:446.6,y:447.05},0).wait(18).to({_off:true},1).wait(370));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.setTransform(1283.2,356.1,1,1,0,0,0,1283.2,356.1);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 6
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(240).to({regX:1807.4,regY:306.4,scaleX:1.1697,scaleY:1.1697,x:1283.25},0).wait(14).to({regX:1795.8,regY:309.2,scaleX:1.2329,scaleY:1.2329,x:1283.35,y:356},0).wait(4).to({regX:1790.2,regY:312.9,scaleX:1.2465,scaleY:1.2465,x:1283.15,y:356.15},0).wait(1).to({regX:1788.9,regY:313.8,scaleX:1.2499,scaleY:1.2499,x:1283.25},0).wait(95).to({regX:1830.3,regY:379,scaleX:1.1357,scaleY:1.1357,y:356.05},0).wait(221).to({regX:2403.8,regY:366.5,scaleX:1.1996,scaleY:1.1996,x:1283.3},0).wait(13).to({regX:2444.6,regY:398.1,scaleX:1.3134,scaleY:1.3134,x:1283.25,y:356.1},0).wait(10).to({regX:2474.4,regY:424.8,scaleX:1.4326,scaleY:1.4326,x:1283.3},0).wait(11).to({regX:2507.2,regY:454.2,scaleX:1.5914,scaleY:1.5914,y:356.15},0).wait(19).to({regX:2563.8,regY:504.8,scaleX:1.9683,scaleY:1.9683,x:1283.2,y:356.1},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-838.6,288.2,3547.6,464.8);
// library properties:
lib.properties = {
	id: 'F6B60597CC23AF4391C248DA0780F6F2',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_22.png?1619178720489", id:"CachedBmp_22"},
		{src:"images/CachedBmp_21.png?1619178720489", id:"CachedBmp_21"},
		{src:"images/CachedBmp_20.png?1619178720489", id:"CachedBmp_20"},
		{src:"images/CachedBmp_19.png?1619178720489", id:"CachedBmp_19"},
		{src:"images/CachedBmp_18.png?1619178720489", id:"CachedBmp_18"},
		{src:"images/CachedBmp_17.png?1619178720489", id:"CachedBmp_17"},
		{src:"images/CachedBmp_16.png?1619178720489", id:"CachedBmp_16"},
		{src:"images/CachedBmp_15.png?1619178720489", id:"CachedBmp_15"},
		{src:"images/CachedBmp_14.png?1619178720489", id:"CachedBmp_14"},
		{src:"images/CachedBmp_13.png?1619178720489", id:"CachedBmp_13"},
		{src:"images/CachedBmp_12.png?1619178720489", id:"CachedBmp_12"},
		{src:"images/CachedBmp_11.png?1619178720489", id:"CachedBmp_11"},
		{src:"images/CachedBmp_10.png?1619178720489", id:"CachedBmp_10"},
		{src:"images/CachedBmp_9.png?1619178720489", id:"CachedBmp_9"},
		{src:"images/CachedBmp_8.png?1619178720489", id:"CachedBmp_8"},
		{src:"images/CachedBmp_7.png?1619178720489", id:"CachedBmp_7"},
		{src:"images/CachedBmp_6.png?1619178720489", id:"CachedBmp_6"},
		{src:"images/CachedBmp_5.png?1619178720489", id:"CachedBmp_5"},
		{src:"images/CachedBmp_4.png?1619178720489", id:"CachedBmp_4"},
		{src:"images/CachedBmp_3.png?1619178720489", id:"CachedBmp_3"},
		{src:"images/CachedBmp_2.png?1619178720489", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png?1619178720489", id:"CachedBmp_1"},
		{src:"images/hilazone3_atlas_1.png?1619178719479", id:"hilazone3_atlas_1"},
		{src:"sounds/bone.mp3?1619178720489", id:"bone"},
		{src:"sounds/boombird.mp3?1619178720489", id:"boombird"},
		{src:"sounds/TheRaceSong.mp3?1619178720489", id:"TheRaceSong"},
		{src:"sounds/TheWinner.mp3?1619178720489", id:"TheWinner"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F6B60597CC23AF4391C248DA0780F6F2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;