"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tiaowen = undefined;

var _Sprite2 = require("../base/Sprite.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tiaowen = exports.tiaowen = function (_Sprite) {
    _inherits(tiaowen, _Sprite);

    function tiaowen() {
        _classCallCheck(this, tiaowen);

        var image = _Sprite2.Sprite.getImage("tiaowen");
        // super(image, 0, 0, image.width, image.height, 38, 500, image.width * 0.31, image.height * 0.31);
        // super(image, 0, 0, image.width, image.height, 56, 490, image.width * 0.31, image.height * 0.31);
        return _possibleConstructorReturn(this, (tiaowen.__proto__ || Object.getPrototypeOf(tiaowen)).call(this, image, 0, 0, image.width, image.height, 100, 465, image.width * 0.31, image.height * 0.31));
    }

    return tiaowen;
}(_Sprite2.Sprite);