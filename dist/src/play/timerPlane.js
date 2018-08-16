"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timerPlane = undefined;

var _Sprite2 = require("../base/Sprite.js");

var _DataStore = require("../base/DataStore.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 背景类
var timerPlane = exports.timerPlane = function (_Sprite) {
    _inherits(timerPlane, _Sprite);

    function timerPlane() {
        _classCallCheck(this, timerPlane);

        var image = _Sprite2.Sprite.getImage('second');
        return _possibleConstructorReturn(this, (timerPlane.__proto__ || Object.getPrototypeOf(timerPlane)).call(this, image, 0, 0, image.width, image.height, 30, 20, image.width * 0.5, image.height * 0.5));
    }

    return timerPlane;
}(_Sprite2.Sprite);