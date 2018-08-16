"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fail = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Sprite2 = require("../base/Sprite.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fail = exports.fail = function (_Sprite) {
    _inherits(fail, _Sprite);

    function fail() {
        _classCallCheck(this, fail);

        var image = _Sprite2.Sprite.getImage("qipao");

        var _this = _possibleConstructorReturn(this, (fail.__proto__ || Object.getPrototypeOf(fail)).call(this, image, 0, 0, image.width, image.height, 100, 300, image.width * 0.5, image.height * 0.5));

        _this.flag = false;

        _this.level = 1;
        _this.proportionX = _this.dataStore.canvas.width / 375;
        _this.proportionY = _this.dataStore.canvas.height / 665;
        return _this;
    }

    /** 传入当前位置 */


    _createClass(fail, [{
        key: "draw",
        value: function draw(x, y) {
            _get(fail.prototype.__proto__ || Object.getPrototypeOf(fail.prototype), "draw", this).call(this, this.img, 0, 0, this.img.width, this.img.height, x + this.img.width * 0.2, y - this.img.height * 0.7, this.width, this.height);
        }
    }]);

    return fail;
}(_Sprite2.Sprite);