import { Sprite } from "../base/Sprite.js";

export class tiaowen extends Sprite {
    constructor() {
        const image = Sprite.getImage("tiaowen");
        // super(image, 0, 0, image.width, image.height, 38, 500, image.width * 0.31, image.height * 0.31);
        // super(image, 0, 0, image.width, image.height, 56, 490, image.width * 0.31, image.height * 0.31);
        super(image, 0, 0, image.width, image.height, 100, 465, image.width * 0.31, image.height * 0.31);
    }
}