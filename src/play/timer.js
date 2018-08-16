import { DataStore } from "../base/DataStore.js";

export class timer {
    constructor() {
        this.ctx = DataStore.getInstance().ctx;
        this.isEnd = false;
    }

    draw(timerStr) {
        this.ctx.font = '24px Arial';
        this.ctx.fillStyle = '#fff';
        // this.ctx.fillText(this.score, DataStore.getInstance().canvas.width / 2, DataStore.getInstance().canvas.height / 18, 800);
        this.ctx.fillText(timerStr, 64, 64, 600);
    }
}