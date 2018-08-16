import { Sprite } from "../base/Sprite.js";

export class fail extends Sprite {

    constructor() {
        const image = Sprite.getImage("qipao");
        super(image, 0, 0, image.width, image.height, 100, 300, image.width * 0.5, image.height * 0.5);
        this.flag = false;

        this.level = 1;
        this.proportionX = this.dataStore.canvas.width / 375;
        this.proportionY = this.dataStore.canvas.height / 665;
    }

    /** 传入当前位置 */
    draw(x, y) {
        super.draw(this.img, 0, 0, this.img.width, this.img.height, x + this.img.width * 0.2, y - this.img.height * 0.7, this.width, this.height);
    }
}