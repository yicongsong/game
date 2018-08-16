"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.win = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Sprite2 = require("../base/Sprite.js");

var _DataStore = require("../base/DataStore.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var win = exports.win = function (_Sprite) {
    _inherits(win, _Sprite);

    function win() {
        _classCallCheck(this, win);

        var image = _Sprite2.Sprite.getImage("lijuan");

        // this.dataStore = DataStore.getInstance();
        // this.top = top;
        // 移动速度
        var _this = _possibleConstructorReturn(this, (win.__proto__ || Object.getPrototypeOf(win)).call(this, image, 0, 0, image.width, image.height, 100, 300, image.width * 0.5, image.height * 0.5));

        _this.moveSpace = 1;
        // 判断阶段
        _this.level = 1.1;
        // 判断礼物是否消失
        _this.winFlag = false;
        _this.proportionX = _this.dataStore.canvas.width / 375;
        _this.proportionY = _this.dataStore.canvas.height / 665;
        return _this;
    }

    /** 传入当前位置 */


    _createClass(win, [{
        key: "draw",
        value: function draw(x, y) {
            this.x += this.moveSpace;

            this.level -= 1 / 86;
            this.y = (2200 * this.proportionX * this.proportionY + 322 * this.proportionY * this.x) / (100 * this.proportionX);
            if (this.x > 200 || this.y > 622) {
                this.winFlag = true;
                this.level = 0;
                this.ctx.globalAlpha = 0;
                _get(win.prototype.__proto__ || Object.getPrototypeOf(win.prototype), "draw", this).call(this, this.img, 0, 0, this.img.width, this.img.height, this.x, this.y - this.img.height * 0.5, this.width, this.height);
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
            _get(win.prototype.__proto__ || Object.getPrototypeOf(win.prototype), "draw", this).call(this, this.img, 0, 0, this.img.width, this.img.height, this.x, this.y - this.img.height * 0.5, this.width, this.height);
            this.ctx.restore();
        }
    }]);

    return win;
}(_Sprite2.Sprite);