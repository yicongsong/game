import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";

// 背景类
export class timerPlane extends Sprite {

    constructor() {
        const image = Sprite.getImage('second');
        super(image, 0, 0, image.width, image.height, 30, 20, image.width * 0.5, image.height * 0.5);
    }
}