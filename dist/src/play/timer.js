'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataStore = require('../base/DataStore.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var timer = exports.timer = function () {
    function timer() {
        _classCallCheck(this, timer);

        this.ctx = _DataStore.DataStore.getInstance().ctx;
        this.isEnd = false;
    }

    _createClass(timer, [{
        key: 'draw',
        value: function draw(timerStr) {
            this.ctx.font = '24px Arial';
            this.ctx.fillStyle = '#fff';
            // this.ctx.fillText(this.score, DataStore.getInstance().canvas.width / 2, DataStore.getInstance().canvas.height / 18, 800);
            this.ctx.fillText(timerStr, 64, 64, 600);
        }
    }]);

    return timer;
}();