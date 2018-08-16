import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";

export class win extends Sprite {

    constructor() {
        const image = Sprite.getImage("lijuan");
        super(image, 0, 0, image.width, image.height, 100, 300, image.width * 0.5, image.height * 0.5);
        // this.dataStore = DataStore.getInstance();
        // this.top = top;
        // 移动速度
        this.moveSpace = 1;
        // 判断阶段
        this.level = 1.1;
        // 判断礼物是否消失
        this.winFlag = false;
        this.proportionX = this.dataStore.canvas.width / 375;
        this.proportionY = this.dataStore.canvas.height / 665;
    }

    /** 传入当前位置 */
    draw(x, y) {
        this.x += this.moveSpace;

        this.level -= (1 / 86);
        this.y = (2200 * this.proportionX * this.proportionY + 322 * this.proportionY * this.x) / (100 * this.proportionX);
        if (this.x > 200 || this.y > 622) {
            this.winFlag = true;
            this.level = 0;
            this.ctx.globalAlpha = 0;
            super.draw(this.img, 0, 0, this.img.width, this.img.height, this.x, this.y - this.img.height * 0.5, this.width, this.height);
            return;
        }
        if (this.level > 0) {
            this.ctx.globalAlpha = this.level;
        } else {
            this.ctx.globalAlpha = 0;
        }
        // 创建离屏的canvas
        // let  offCanvas = document.createElement("canvas");
        // offCanvas.width=this.img.width;
        // offCanvas.height=this.img.height;
        // let offContext = offCanvas.getContext("2d");
        // offContext.drawImage(this.img, 0, 0, this.img.width, this.img.height, this.x, this.y - this.img.height * 0.5, this.width, this.height);
        // this.ctx.drawImage(offCanvas,0,0);
        super.draw(this.img, 0, 0, this.img.width, this.img.height, this.x, this.y - this.img.height * 0.5, this.width, this.height);
        this.ctx.restore();
    }
}