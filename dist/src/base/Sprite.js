"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sprite = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // 精灵的基类，负责初始化精灵加载的资源和大小以及位置


var _DataStore = require("./DataStore.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = exports.Sprite = function () {
    function Sprite() {
        var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var srcX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var srcY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var srcW = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var srcH = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var x = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var y = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
        var width = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
        var height = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;

        _classCallCheck(this, Sprite);

        this.dataStore = _DataStore.DataStore.getInstance();
        this.ctx = this.dataStore.ctx;
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    _createClass(Sprite, [{
        key: "draw",


        /**
         * img 传入 Image 对象
         * srcX 要剪裁的起始X坐标
         * srcY 要剪裁的起始Y坐标
         * srcW 剪裁的宽度
         * srcH 剪裁的高度
         * x 放置的x坐标
         * y 放置的Y坐标
         * width 要使用的宽度
         * height 要使用的高度
         */
        value: function draw() {
            var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.img;
            var srcX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.srcX;
            var srcY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.srcY;
            var srcW = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.srcW;
            var srcH = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.srcH;
            var x = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.x;
            var y = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : this.y;
            var width = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : this.width;
            var height = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : this.height;

            this.ctx.drawImage(img, srcX, srcY, srcW, srcH, x, y, width, height);
        }
    }], [{
        key: "getImage",
        value: function getImage(key) {
            return _DataStore.DataStore.getInstance().res.get(key);
        }
    }]);

    return Sprite;
}();