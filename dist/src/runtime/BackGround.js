"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BackGround = undefined;

var _Sprite2 = require("../base/Sprite.js");

var _DataStore = require("../base/DataStore.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 背景类
var BackGround = exports.BackGround = function (_Sprite) {
    _inherits(BackGround, _Sprite);

    function BackGround() {
        _classCallCheck(this, BackGround);

        var image = _Sprite2.Sprite.getImage('background');
        return _possibleConstructorReturn(this, (BackGround.__proto__ || Object.getPrototypeOf(BackGround)).call(this, image, 0, 0, image.width, image.height, 0, 0, _DataStore.DataStore.getInstance().canvas.width, _DataStore.DataStore.getInstance().canvas.height));
    }

    return BackGround;
}(_Sprite2.Sprite);