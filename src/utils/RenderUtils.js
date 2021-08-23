"use strict";

function drawHead(ctx, punkBlockSize, outline, bg_color, skinColor, beardColor) {
    for (var i = 0; i < outline.length; i++) {
        for (var j = 0; j < outline[0].length; j++) {
            var color = outline[i][j].color;
            if (color === "rgb(___, ___, ___)") {
                drawBlock(ctx, punkBlockSize, j * punkBlockSize, i * punkBlockSize, bg_color);
            } 
            else if (color === "skin") {
                drawBlock(ctx, punkBlockSize, j * punkBlockSize, i * punkBlockSize, skinColor);
            } else if (color === "beard") {
                drawBlock(ctx, punkBlockSize, j * punkBlockSize, i * punkBlockSize, beardColor);
            } else {
                drawBlock(ctx, punkBlockSize, j * punkBlockSize, i * punkBlockSize, color);
            }
        }
    }
}

function drawAccessory(ctx, punkBlockSize, outline) {
    for (var i = 0; i < outline.length; i++) {
        for (var j = 0; j < outline[0].length; j++) {
            var color = outline[i][j].color;
            if (color !== "rgb(___, ___, ___)") {
                drawBlock(ctx, punkBlockSize, j * punkBlockSize, i * punkBlockSize, color);
            }
        }
    }
}

function drawBlock(ctx, punkBlockSize, x, y, color) {
    ctx.fillStyle = color
    ctx.beginPath();
    ctx.fillRect(x, y, punkBlockSize, punkBlockSize);
    ctx.stroke();
}

export {drawHead, drawAccessory, drawBlock};