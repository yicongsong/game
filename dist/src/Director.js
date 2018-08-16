"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Director = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataStore = require("./base/DataStore.js");

var _liwu2 = require("./play/liwu.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 舞台类 */
var Director = exports.Director = function () {
    function Director() {
        _classCallCheck(this, Director);

        this.dataStore = _DataStore.DataStore.getInstance();
        this.timeDown = 60 * 60;
        // 上一秒的时间
        this.pro_sec = 0;
        //　游戏是否开始
        this.gameFlag = true;
        this.startFlag = false;
    }

    _createClass(Director, [{
        key: "createLiwu",


        /** 绘制礼物的方法 */
        value: function createLiwu() {
            this.dataStore.get('liwu').push(new _liwu2.liwu());
        }

        /**
         * 小时级倒计时动画
         * @param  {String} time [服务器时间戳]
         * @param  {String} timeDown [倒计时截至时间]
         */

    }, {
        key: "_timeAnimation",
        value: function _timeAnimation(time, timeDown) {
            var timeTemp = void 0,
                // 临时时间
            remain_sec = 0,
                // 秒
            remain_minute = 0,
                // 分钟
            remain_hour = 0,
                // 小时
            hour = 0,
                // 最终显示小时
            min = 0,
                // 最终显示分钟
            sec = 0; // 最终显示秒
            timeTemp = this.timeDown / 60 + 1;
            remain_sec = parseInt(timeTemp % 60);
            timeTemp = parseInt(timeTemp / 60);

            remain_minute = timeTemp % 60;
            timeTemp = parseInt(timeTemp / 60);
            if (remain_minute <= 0) {
                remain_minute = 0;
            }
            if (remain_sec <= 0) {
                remain_sec = 0;
            }
            if (remain_sec == 0 && remain_minute == 0) {
                this.gameOver();
            }
            // 以下部分做为时间显示时补零
            if (remain_hour < 10) {
                hour = '0' + remain_hour;
            } else {
                hour = remain_hour;
            }
            if (remain_minute < 10) {
                min = '0' + remain_minute;
            } else {
                min = remain_minute;
            }
            if (remain_sec < 10) {
                sec = '0' + remain_sec;
            } else {
                sec = remain_sec;
            }
            return min + ":" + sec;
            // return hour+":"+min+":"+sec;
        }

        /** 游戏结束 */

    }, {
        key: "gameOver",
        value: function gameOver() {
            if (this.gameFlag) {
                // this.dataStore.get('startButton').draw();
                cancelAnimationFrame(this.dataStore.get('animationTimer'));
                this.gameFlag = false;
                this.startFlag = false;
                this.dataStore.destroy();
            }
        }
    }, {
        key: "run",
        value: function run() {
            var _this = this;

            if (this.gameFlag) {
                this.dataStore.get('background').draw();
                this.dataStore.get('timerPlane').draw();
                // this.dataStore.get('tiaowen').draw();

                // this._timeAnimation();
                var timeStr = this._timeAnimation(this.timeDown);
                this.timeDown--;

                this.dataStore.get('timer').draw(timeStr);
                var _liwu = this.dataStore.get('liwu');
                if (_liwu.length == 0) {
                    this.createLiwu();
                } else if (_liwu.length < 6 && _liwu[_liwu.length - 1].level == 2) {
                    this.createLiwu();
                }
                if (_liwu[0].liwuFlag) {
                    _liwu.shift();
                }

                this.dataStore.get('liwu').forEach(function (value) {
                    value.draw();
                });
                var animationTimer = requestAnimationFrame(function () {
                    return _this.run();
                });
                this.dataStore.put('animationTimer', animationTimer);
            } else {
                this.gameOver();
            }
        }
    }], [{
        key: "getInstance",
        value: function getInstance() {
            if (!Director.instance) {
                Director.instance = new Director();
            }
            return Director.instance;
        }
    }]);

    return Director;
}();