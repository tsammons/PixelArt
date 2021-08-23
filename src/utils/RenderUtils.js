"use strict";

var punkBlockSize = 18;

function drawHead(ctx, outline, bg_color, skinColor, beardColor) {
    for (var i = 0; i < outline.length; i++) {
        for (var j = 0; j < outline[0].length; j++) {
            var color = outline[i][j].color;
            if (color === "rgb(___, ___, ___)") {
                drawBlock(ctx, j * punkBlockSize, i * punkBlockSize, bg_color);
            } 
            else if (color === "skin") {
                drawBlock(ctx, j * punkBlockSize, i * punkBlockSize, skinColor);
            } else if (color === "beard") {
                drawBlock(ctx, j * punkBlockSize, i * punkBlockSize, beardColor);
            } else {
                drawBlock(ctx, j * punkBlockSize, i * punkBlockSize, color);
            }
        }
    }
}

function drawAccessory(ctx, outline) {
    for (var i = 0; i < outline.length; i++) {
        for (var j = 0; j < outline[0].length; j++) {
            var color = outline[i][j].color;
            if (color !== "rgb(___, ___, ___)") {
                drawBlock(ctx, j * punkBlockSize, i * punkBlockSize, color);
            }
        }
    }
}

function drawBlock(ctx, x, y, color) {
    ctx.fillStyle = color
    ctx.beginPath();
    ctx.fillRect(x, y, punkBlockSize, punkBlockSize);
    ctx.stroke();
}

export {drawHead, drawAccessory, drawBlock};