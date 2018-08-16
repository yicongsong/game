import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";

export class liwu extends Sprite {

    constructor() {
        let str = ['liwu1', 'liwu2', 'liwu3'];
        let src = Math.floor(Math.random() * 3);
        const image = Sprite.getImage(str[src]);
        super(image, 0, 0, image.width, image.height, 60, 515, image.width * 0.5, image.height * 0.5);
        this.dataStore = DataStore.getInstance();
        this.src = src;
        
        this.top = top;
        // 移动速度
        this.moveSpace = 1;
        // 判断阶段
        this.openFlag = false;
        this.level = 1;
        // 判断礼物是否消失
        this.liwuFlag = false;
        this.proportionX = this.dataStore.canvas.width / 375;
        this.proportionY = this.dataStore.canvas.height / 665;
    }

    draw() {
        if (this.x <= 95 * this.proportionX && this.level == 1) {
            this.x = (this.x) + this.moveSpace;
            this.y = (19045 * this.proportionX * this.proportionY - 17 * this.proportionY * this.x) / (35 * this.proportionX);
        } else if (this.x <= 210 * this.proportionX && this.level == 1) {
            this.x = (this.x) + this.moveSpace;
            this.y = (51855 * this.proportionX * this.proportionY + 57 * this.proportionY * this.x) / (115 * this.proportionX);
        } else if (this.x <= 273 * this.proportionX && this.level == 1) {
            this.x = (this.x) + this.moveSpace;
            this.y = (42735 * this.proportionX * this.proportionY - 37 * this.proportionY * this.x) / (63 * this.proportionX);
            if (this.x >= 273 * this.proportionX) {
                this.level = 2;
            }
        } else if (this.x >= 58 * this.proportionX && this.level == 2) {
            this.x = (this.x) - this.moveSpace;
            this.y = (75670 * this.proportionX * this.proportionY + 131 * this.proportionY * this.x) / (215 * this.proportionX);
            if (this.x <= 58 * this.proportionX) {
                this.level = 3;
            }
        } else if (this.x <= 125 * this.proportionX && this.level == 3) {
            this.x = (this.x) + this.moveSpace;
            this.y = (28365 * this.proportionX * this.proportionY - 42 * this.proportionY * this.x) / (67 * this.proportionX);
        } else if (this.x <= 208 * this.proportionX && this.level == 3) {
            this.x = (this.x) + this.moveSpace;
            this.y = (22010 * this.proportionX * this.proportionY + 53 * this.proportionY * this.x) / (83 * this.proportionX);
        } else if (this.x <= 280 * this.proportionX && this.level == 3) {
            this.x = (this.x) + this.moveSpace;
            this.y = (40512 * this.proportionX * this.proportionY - 57 * this.proportionY * this.x) / (72 * this.proportionX);
            if (this.x >= 280 * this.proportionX) {
                this.level = 4;
            }
        } else if (this.x >= 40 * this.proportionX && this.level == 4) {
            this.x = (this.x) - this.moveSpace;
            this.y = (40960 * this.proportionX * this.proportionY + 146 * this.proportionY * this.x) / (240 * this.proportionX);
            if (this.x <= 40 * this.proportionX) {
                this.level = 5;
            }
        } else if (this.x <= 120 * this.proportionX && this.level == 5) {
            this.x = (this.x) + this.moveSpace;
            this.y = (17400 * this.proportionX * this.proportionY - 45 * this.proportionY * this.x) / (80 * this.proportionX);
        } else if (this.x <= 160 * this.proportionX && this.level == 5) {
            this.x = (this.x) + this.moveSpace;
            this.y = (180 * this.proportionX * this.proportionY + this.proportionY * this.x) / (2 * this.proportionX);
        } else if (this.x <= 282 * this.proportionX && this.level == 5) {
            this.x = (this.x) + this.moveSpace;
            this.y = (30820 * this.proportionX * this.proportionY - 63 * this.proportionY * this.x) / (122 * this.proportionX);
        } else {
            this.level = 6
            this.liwuFlag = true;
        }
        super.draw(this.img, 0, 0, this.img.width, this.img.height, this.x, this.y - this.img.height * 0.5, this.width, this.height);
    }
}