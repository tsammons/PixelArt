import {drawHead, drawAccessory} from '../utils/RenderUtils.js';
import {v1Frames} from '../frames/punksV1Frames.js';

var ctx, canvas;
var punkBlockSize = 18;

function init() {
    canvas = document.getElementById('myCanvas');
    ctx = myCanvas.getContext('2d');
    canvas.width = v1Frames.male_head_outline_1[0].length * punkBlockSize;
    canvas.height = v1Frames.male_head_outline_1.length * punkBlockSize;

    drawFemale1();
    //drawMale1();
    //drawAlien();
    //drawMaleUpdate();
    //drawNSwift();
    //drawCock();
    //drawMonkey();
    //newHeadWithRain();
    //drawBigHead();
}

function drawMale1() {
    drawHead(ctx, punkBlockSize, v1Frames.male_head_outline_1, "rgb(99,0,150)", "rgb(234,218,217)", "rgb(166,110,44)");
    drawAccessory(ctx, punkBlockSize, v1Frames.sunglasses_1);
    //drawAccessory(ctx, punkBlockSize, v1Frames.headband_blue);
    drawAccessory(ctx, punkBlockSize, v1Frames.male_nose_mouth_1);
    drawAccessory(ctx, punkBlockSize, v1Frames.ciggy_1);
    animateCig();
}

function drawMaleUpdate() {
    drawHead(ctx, punkBlockSize, v1Frames.male_head_outline_update, "rgb(99,0,150)", "rgb(234,218,217)", "rgb(166,110,44)");
    drawAccessory(ctx, punkBlockSize, v1Frames.male_features_update);
    drawAccessory(ctx, punkBlockSize, v1Frames.sunglasses_update);
    drawAccessory(ctx, punkBlockSize, v1Frames.headband_blue_update);
    drawAccessory(ctx, punkBlockSize, v1Frames.ciggy_update);
}

function drawCock() {
    drawHead(ctx, punkBlockSize, v1Frames.cock, "rgb(255,20,147)", "rgb(113,62,29)", null);
    var ej_colors = [v1Frames.ej_1, v1Frames.ej_2, v1Frames.ej_3];

    var count = 0;
    var int = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var i = count % ej_colors.length;
        drawHead(ctx, punkBlockSize, v1Frames.cock, "rgb(255,20,147)", "rgb(113,62,29)", null);
        drawAccessory(ctx, punkBlockSize, ej_colors[i]);
        count++;
    }, 200);
}

function drawMonkey() {
    drawHead(ctx, punkBlockSize, v1Frames.monkey_head_1, "rgb(99,133,150)", "rgb(132,111,86)", "rgb(52,36,16)");
    drawAccessory(ctx, punkBlockSize, v1Frames.monkey_face);
    drawAccessory(ctx, punkBlockSize, v1Frames.monkey_hat);
}

function drawNSwift() {
    drawHead(ctx, punkBlockSize, v1Frames.n_swift_head, "rgb(99,133,150)", "rgb(234,218,217)", null);
    drawAccessory(ctx, punkBlockSize, v1Frames.n_swift_hair);
    drawAccessory(ctx, punkBlockSize, v1Frames.n_swift_glasses);
    drawAccessory(ctx, punkBlockSize, v1Frames.n_swift_nose_mouth);
}

function drawBigHead() {
    drawHead(ctx, punkBlockSize, v1Frames.big_hed,"rgb(255,20,147)", "rgb(113,62,29)", null); 
}

function drawFemale1() {
    drawHead(ctx, punkBlockSize, v1Frames.female_head_outline_1,"rgb(255,20,147)", "rgb(113,62,29)", null);
    drawAccessory(ctx, punkBlockSize, v1Frames.sunglasses_2);
    drawAccessory(ctx, punkBlockSize, v1Frames.female_nose_mouth_1);
    drawAccessory(ctx, punkBlockSize, v1Frames.ciggy_1)
    animateCig();
}

function drawAlien() {
    drawHead(ctx, punkBlockSize, v1Frames.alien_head_1,"rgb(255,20,147)", "rgb(199,252,251)", null);
    drawAccessory(ctx, punkBlockSize, v1Frames.alien_facial_features);
    drawAccessory(ctx, punkBlockSize, v1Frames.alien_hat);
}

function animateCig() {
    var cig_colors = [v1Frames.cig_smoke_0, v1Frames.cig_smoke_0, v1Frames.cig_smoke_1, v1Frames.cig_smoke_2, v1Frames.cig_smoke_3, v1Frames.cig_smoke_4, v1Frames.cig_smoke_5, v1Frames.cig_smoke_6, v1Frames.cig_smoke_0, v1Frames.cig_smoke_0];

    var count = 0;
    var int = setInterval(() => {
        var i = count % cig_colors.length;
        drawAccessory(ctx, punkBlockSize, cig_colors[i]);
        count++;

    }, 200);
}

function newHeadWithRain() {
    var rains = [v1Frames.rn_1, v1Frames.rn_2, v1Frames.rn_3, v1Frames.rn_4, v1Frames.rn_5, v1Frames.rn_6];
    var count = 0;
    drawHead(ctx, punkBlockSize, v1Frames.red_hed, "rgb(99,133,150)", "rgb(234,218,217)", null);
    setInterval(() => {
        var i = count % rains.length;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawHead(ctx, punkBlockSize, v1Frames.red_hed, "rgb(99,133,150)", "rgb(234,218,217)", null);
        drawAccessory(ctx, punkBlockSize, rains[i]);
        count++;
    }, 250);
}

init();
