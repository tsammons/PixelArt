import {drawHead, drawAccessory} from '../utils/RenderUtils.js';
import {v2Frames} from '../frmaes/punksV2Frames.js';

var punkBlockSize = 18;

function init() {
    canvas = document.getElementById('myCanvas');
    ctx = myCanvas.getContext('2d');
    canvas.width = male_head_outline_1[0].length * punkBlockSize;
    canvas.height = male_head_outline_1.length * punkBlockSize;

    drawFace();
    //drawMale();
    //drawMale2();
    //drawFemale();
    //drawCustomMale();
    //drawClouds();
}

function drawFemale() {
    drawHead(v2Frames.female_head_outline_1, "rgb(99,133,150)", "rgb(113,62,29)", null); //"rgb(255,20,147)"
    drawAccessory(v2Frames.female_hair_1);
    drawAccessory(v2Frames.sunglasses_2);
    drawAccessory(v2Frames.female_mouth_and_nose_1);
    drawAccessory(v2Frames.female_cig);
    animateFemaleCig();
}

function drawMale() {
    drawHead(v2Frames.male_head_outline_1, "rgb(99,133,150)", "rgb(234,218,217)", "rgb(166,110,44)");
    drawAccessory(v2Frames.mouth_and_nose_1);
    drawAccessory(v2Frames.sunglasses_1);
    drawAccessory(v2Frames.headband_blue);
    drawAccessory(v2Frames.ciggy_1);
    animateCig();
}

function drawMale2() {
    drawHead(v2Frames.male_head_outline_2, "rgb(99,133,150)", "rgb(174,139,96)", "rgb(166,110,44)");
    drawAccessory(v2Frames.sunglasses_1);
    drawAccessory(v2Frames.male_features_2);
    //drawAccessory(v2Frames.headband_blue);
    drawAccessory(v2Frames.ciggy_1);
    animateCig();
}

function drawFace() {
    drawHead(v2Frames.face, "rgb(99,133,150)", "rgb(174,139,96)", "rgb(166,110,44)");
    drawTearAndBlink();
}

function drawTearAndBlink() {
    blink();
    var tear_counter = 0;
    var tear_frames = [v2Frames.tear_0, v2Frames.tear_0, v2Frames.tear_0, v2Frames.tear_1, v2Frames.tear_2, v2Frames.tear_3, v2Frames.tear_4];
    var tearInterval = setInterval(() => {
        var i_tear = tear_counter % tear_frames.length;
        drawAccessory(tear_frames[i_tear]);
        tear_counter++;
    }, 300);   
}

function blink() {
    var blink_frames = [v2Frames.blink_0, v2Frames.blink_1, v2Frames.blink_2, v2Frames.blink_1, v2Frames.blink_0];
    setTimeout(() => {
        var blink_counter = 0;
        var blink_movement = setInterval(() => {
            if (blink_counter >= blink_frames.length) {
                clearInterval(blink_movement);
                blink();
            }

            var i_blink = blink_counter % blink_frames.length;
            drawAccessory(blink_frames[i_blink]);
            blink_counter ++;
        }, 150);
    }, Math.random() * 10000);
}

function drawCustomMale() {
    drawHead(v2Frames.customMale, "rgb(204,0,204)", "rgb(113,62,29)", "rgb(166,110,44)");
}

function drawClouds() {
    drawAccessory(v2Frames.clouds_1);
}

function animateCig() {
    var counter = 0;
    var cig_frames = [v2Frames.animated_cig_1, v2Frames.animated_cig_1, v2Frames.animated_cig_1, v2Frames.animated_cig_2, v2Frames.animated_cig_3, v2Frames.animated_cig_4, v2Frames.animated_cig_5, v2Frames.animated_cig_6, v2Frames.animated_cig_7];

    var cigInterval = setInterval(() => {
        var i = counter % cig_frames.length;
        drawAccessory(cig_frames[i]);
        counter++;
    }, 300);
}

function animateFemaleCig() {
    var counter = 0;
    var cig_frames = [v2Frames.female_cig_animated_1, v2Frames.female_cig_animated_1, v2Frames.female_cig_animated_1, v2Frames.female_cig_animated_2, v2Frames.female_cig_animated_3, v2Frames.female_cig_animated_4, v2Frames.female_cig_animated_5, v2Frames.female_cig_animated_6, v2Frames.female_cig_animated_7];

    var cigInterval = setInterval(() => {
        var i = counter % cig_frames.length;
        drawAccessory(cig_frames[i]);
        counter++;
    }, 300); 
}

init();