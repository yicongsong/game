"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.liwuopen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Sprite2 = require("../base/Sprite.js");

var _DataStore = require("../base/DataStore.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var liwuopen = exports.liwuopen = function (_Sprite) {
    _inherits(liwuopen, _Sprite);

    function liwuopen(index, x, y, level) {
        _classCallCheck(this, liwuopen);

        var str = ['liwuopen1', 'liwuopen2', 'liwuopen3'];
        var image = _Sprite2.Sprite.getImage(str[index]);

        var _this = _possibleConstructorReturn(this, (liwuopen.__proto__ || Object.getPrototypeOf(liwuopen)).call(this, image, 0, 0, image.width, image.height, x, y, image.width * 0.5, image.height * 0.5));

        _this.dataStore = _DataStore.DataStore.getInstance();
        _this.top = top;
        // 移动速度
        _this.moveSpace = 1;
        // 判断阶段
        _this.level = level;
        // 判断礼物是否消失
        _this.liwuFlag = false;
        _this.openFlag = true;
        _this.proportionX = _this.dataStore.canvas.width / 375;
        _this.proportionY = _this.dataStore.canvas.height / 665;
        return _this;
    }

    _createClass(liwuopen, [{
        key: "draw",
        value: function draw() {
            if (this.x <= 95 * this.proportionX && this.level == 1) {
                this.x = this.x + this.moveSpace;
                this.y = (19045 * this.proportionX * this.proportionY - 17 * this.proportionY * this.x) / (35 * this.proportionX);
            } else if (this.x <= 210 * this.proportionX && this.level == 1) {
                this.x = this.x + this.moveSpace;
                this.y = (51855 * this.proportionX * this.proportionY + 57 * this.proportionY * this.x) / (115 * this.proportionX);
            } else if (this.x <= 273 * this.proportionX && this.level == 1) {
                this.x = this.x + this.moveSpace;
                this.y = (42735 * this.proportionX * this.proportionY - 37 * this.proportionY * this.x) / (63 * this.proportionX);
                if (this.x >= 273 * this.proportionX) {
                    this.level = 2;
                }
            } else if (this.x >= 58 * this.proportionX && this.level == 2) {
                this.x = this.x - this.moveSpace;
                this.y = (75670 * this.proportionX * this.proportionY + 131 * this.proportionY * this.x) / (215 * this.proportionX);
                if (this.x <= 58 * this.proportionX) {
                    this.level = 3;
                }
            } else if (this.x <= 125 * this.proportionX && this.level == 3) {
                this.x = this.x + this.moveSpace;
                this.y = (28365 * this.proportionX * this.proportionY - 42 * this.proportionY * this.x) / (67 * this.proportionX);
            } else if (this.x <= 208 * this.proportionX && this.level == 3) {
                this.x = this.x + this.moveSpace;
                this.y = (22010 * this.proportionX * this.proportionY + 53 * this.proportionY * this.x) / (83 * this.proportionX);
            } else if (this.x <= 280 * this.proportionX && this.level == 3) {
                this.x = this.x + this.moveSpace;
                this.y = (40512 * this.proportionX * this.proportionY - 57 * this.proportionY * this.x) / (72 * this.proportionX);
                if (this.x >= 280 * this.proportionX) {
                    this.level = 4;
                }
            } else if (this.x >= 40 * this.proportionX && this.level == 4) {
                this.x = this.x - this.moveSpace;
                this.y = (40960 * this.proportionX * this.proportionY + 146 * this.proportionY * this.x) / (240 * this.proportionX);
                if (this.x <= 40 * this.proportionX) {
                    this.level = 5;
                }
            } else if (this.x <= 120 * this.proportionX && this.level == 5) {
                this.x = this.x + this.moveSpace;
                this.y = (17400 * this.proportionX * this.proportionY - 45 * this.proportionY * this.x) / (80 * this.proportionX);
            } else if (this.x <= 160 * this.proportionX && this.level == 5) {
                this.x = this.x + this.moveSpace;
                this.y = (180 * this.proportionX * this.proportionY + this.proportionY * this.x) / (2 * this.proportionX);
            } else if (this.x <= 282 * this.proportionX && this.level == 5) {
                this.x = this.x + this.moveSpace;
                this.y = (30820 * this.proportionX * this.proportionY - 63 * this.proportionY * this.x) / (122 * this.proportionX);
            } else {
                this.level = 6;
                this.liwuFlag = true;
            }
            _get(liwuopen.prototype.__proto__ || Object.getPrototypeOf(liwuopen.prototype), "draw", this).call(this, this.img, 0, 0, this.img.width, this.img.height, this.x, this.y - this.img.height * 0.5, this.width, this.height);
        }
    }]);

    return liwuopen;
}(_Sprite2.Sprite);