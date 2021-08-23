"use strict";
var ctx, canvas;
var punkBlockSize = 18;
var x_units = 25;
var y_units = 22;
var my_grid = null;
var currentColor = "rgb(0, 0, 0)";
var mouseDown = false;
var cursorLocation = {x: null, y: null};


function init() {
    document.getElementById('generate_button').onclick = generateFormattedMatrix;
    document.getElementById('update_color').onclick = updateColor;
    document.getElementById('new_layer').onclick = newLayer;
    document.getElementById('output').style.height="200px";
    document.getElementById('output').style.width="7000px";
    document.getElementById('output').style.paddingLeft="100px";

    canvas = document.getElementById('myCanvas');
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    ctx = myCanvas.getContext('2d');
    canvas.width = x_units * punkBlockSize;
    canvas.height = y_units * punkBlockSize;
    initGrid();
    drawGrid();
}

function initGrid() {
    my_grid = [];
    for (var i = 0; i < y_units; i++) {
        var row = [];
        for (var j = 0; j < x_units; j ++) {
            row.push({color: "rgb(___, ___, ___)"});
        }
        my_grid.push(row);
    }
}

function drawGrid() {
    for (var i = 0; i <= x_units; i++) {
        drawLine(i * punkBlockSize, 0, i * punkBlockSize, punkBlockSize * y_units);
    }
    for (var i = 0; i <= y_units; i++) {
        drawLine(0, i * punkBlockSize, x_units * punkBlockSize, i * punkBlockSize);
    }
}

function onMouseDown(event) {
    mouseDown = true;
}

function onMouseMove(event) {
    if (mouseDown) {
        var x_click = event.clientX;
        var y_click = event.clientY;
        var x_block = Math.floor(x_click / punkBlockSize);
        var y_block = Math.floor(y_click / punkBlockSize);
        var location = {x: x_block, y: y_block};
        if (location.x !== cursorLocation.x || location.y !== cursorLocation.y) {
            cursorLocation = location;
            updateCell(location);
        }
    }
}

function onMouseUp(event) {
    if (cursorLocation.x === null && cursorLocation.y === null) {
        var x_click = event.clientX;
        var y_click = event.clientY;
        var x_block = Math.floor(x_click / punkBlockSize);
        var y_block = Math.floor(y_click / punkBlockSize);
        var location = {x: x_block, y: y_block};
        updateCell(location);
    }

    cursorLocation = {x: null, y: null};
    mouseDown = false;
}

function updateCell(location) {
    if (my_grid[location.y][location.x].color === "rgb(___, ___, ___)") {

        var drawColor = currentColor;
        if (currentColor === "skin") {
            drawColor = "rgb(234,218,217)";
        }
        if (currentColor === "beard") {
            drawColor = "rgb(166,110,44)";
        }

        my_grid[location.y][location.x].color = currentColor;
        drawRect(location.x * punkBlockSize + 1, location.y * punkBlockSize + 1, punkBlockSize - 2, punkBlockSize - 2, drawColor);
        //drawRect(location.x * punkBlockSize + 0, location.y * punkBlockSize + 0, punkBlockSize - 0, punkBlockSize - 0, drawColor);
    } else {
        my_grid[location.y][location.x].color = "rgb(___, ___, ___)";
        drawRect(location.x * punkBlockSize + 1, location.y * punkBlockSize + 1, punkBlockSize - 2, punkBlockSize - 2, "rgb(255, 255, 255)");
        //drawRect(location.x * punkBlockSize + 0, location.y * punkBlockSize + 0, punkBlockSize - 0, punkBlockSize - 0, "rgb(255, 255, 255)");
    }
}

function generateFormattedMatrix() {
    var default_obj = {color: "rgb(___, ___, ___)"};
    var default_length = JSON.stringify(default_obj).length;

    var my_string = '[\n';
    for (var i = 0; i < my_grid.length; i++) {
        my_string += '['
        for (var j = 0; j < my_grid[0].length; j++) {
            var ind_obj = JSON.stringify(my_grid[i][j]);
            my_string += ind_obj + ', ';
            var length_diff = default_length - ind_obj.length;
            if (length_diff > 0) {
                for (var k = 0; k < length_diff; k++) {
                    my_string += ' ';
                }
            }
        }
        my_string += '],\n'
    }
    my_string += '];';
    document.getElementById('output').value = my_string;
 }

function updateColor() {
    currentColor = document.getElementById("color_input").value;
}

function newLayer() {
    initGrid();
    document.getElementById('output').value = "";
}

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillRect(x, y, w, h);
    ctx.stroke();
}

function drawLine(x1, y1, x2, y2) {
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

init();