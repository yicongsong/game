'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // 主要的基类


var _ResourceLoader = require('./base/ResourceLoader.js');

var _DataStore = require('./base/DataStore.js');

var _BackGround = require('./runtime/BackGround.js');

var _Director = require('./Director.js');

var _liwu = require('./play/liwu.js');

var _timer = require('./play/timer.js');

var _timerPlane = require('./play/timerPlane.js');

var _tiaowen = require('./play/tiaowen.js');

var _win2 = require('./play/win.js');

var _fail3 = require('./play/fail.js');

var _liwuopen = require('./play/liwuopen.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
    function Main() {
        var _this = this;

        _classCallCheck(this, Main);

        this.getWindowsWidthOrHeight();
        document.getElementById('game_canvas').width = this.htmlWidth;
        document.getElementById('game_canvas').height = this.htmlHeight;
        // document.getElementById('game_canvas').width = 375;
        // document.getElementById('game_canvas').height = 665;
        this.failToFalse = false;
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = _DataStore.DataStore.getInstance();
        this.director = _Director.Director.getInstance();
        var loader = _ResourceLoader.ResourceLoader.create();
        loader.onLoaded(function (map) {
            return _this.onResourceFirstLoaded(map);
        });
    }

    /** 获取手机屏幕宽 */


    _createClass(Main, [{
        key: 'getWindowsWidthOrHeight',
        value: function getWindowsWidthOrHeight() {
            //得到手机屏幕的宽度
            this.htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
            this.htmlHeight = document.documentElement.clientHeight || document.body.clientHeight;
        }

        /** 资源加载 */

    }, {
        key: 'onResourceFirstLoaded',
        value: function onResourceFirstLoaded(map) {
            this.dataStore.canvas = this.canvas;
            this.dataStore.moveSpace = 5;
            this.dataStore.ctx = this.ctx;
            this.dataStore.res = map;
            // this.createBackgroundMusic();
            this.init();
        }

        /** 初始化 */

    }, {
        key: 'init',
        value: function init() {
            var _this2 = this;

            // 事件绑定关键

            document.getElementById('start').onclick = function () {
                if (!_this2.director.startFlag) {
                    _this2.director.run();
                    _this2.director.gameFlag = true;
                }
                _this2.director.startFlag = true;
            };

            //首先重置游戏是没有结束的
            // this.director.isGameOver = false;
            this.dataStore.put('background', _BackGround.BackGround).put('liwu', []).put('timer', _timer.timer).put('timerPlane', _timerPlane.timerPlane).put('tiaowen', _tiaowen.tiaowen).put('win', _win2.win).put('fail', _fail3.fail);
            this.registerEvent();
            this.dataStore.get('background').draw();
            // this.director.run();
        }

        /** 处理点击事件 */

    }, {
        key: 'registerEvent',
        value: function registerEvent() {
            var _this3 = this;

            this.canvas.addEventListener('touchstart', function (e) {
                //阻止事件冒泡
                e.preventDefault();
                if (_this3.director.gameFlag) {
                    var i = _this3.isLiwuTouch(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                    //这里出发点击事件 , i 代表第几个礼物s
                    var list = _this3.dataStore.get('liwu');

                    _this3.clickLogic(i, list);
                }
            });
        }

        /** 处理逻辑 */

    }, {
        key: 'clickLogic',
        value: function clickLogic(i, list) {
            if (i != 0) {
                // this.director.gameOver();

                var _win = this.dataStore.get('win');
                var _fail2 = this.dataStore.get('fail');
                var newList = [];
                var x = 0;
                var y = 0;
                for (var j = 0; j < list.length; j++) {
                    if (j == i - 1) {
                        x = list[j].x;
                        y = list[j].y;
                        var liwus = new _liwuopen.liwuopen(list[j].src, x, y, list[j].level);
                        newList[j] = liwus;
                        continue;
                    }
                    newList[j] = list[j];
                }
                // 失败的步骤
                this.fail(_fail2, newList, x, y, i, list);
                // 成功的步骤
                // this.success(win,newList,i,list);
            }
        }

        /** 失败操作 */

    }, {
        key: 'fail',
        value: function fail(_fail) {
            var newList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var x = arguments[2];
            var y = arguments[3];

            var _this4 = this;

            var i = arguments[4];
            var list = arguments[5];

            this.director.gameOver();
            if (!_fail.flag) {
                this.restUI();
                newList.forEach(function (value) {
                    value.draw();
                });
                this.ctx.save();
                _fail.draw(x, y);
                var animationFail = requestAnimationFrame(function () {
                    return _this4.clickLogic(i, list);
                });
                this.dataStore.put('animationFail', animationFail);
                if (!this.failToFalse) {
                    console.log("--" + this.failToFalse);
                    setTimeout(function () {
                        // 两秒后消失
                        _fail.flag = true;
                    }, 200);
                }
                this.failToFalse = true;
            } else {
                this.failToFalse = false;
                _fail.flag = false;
                this.dataStore.put('fail', _fail);
                this.restUI();
                newList.forEach(function (value) {
                    value.draw();
                });
                this.restGame(newList);
                cancelAnimationFrame(this.dataStore.get('animationFail'));
            }

            // this.restUI();
            // newList.forEach(value => {
            //     value.draw();
            // });
            // this.ctx.save();

            // this.dataStore.get('fail').draw(x,y);
            // setTimeout(()=>{
            //     // 两秒后消失
            //     this.restUI();
            //     newList.forEach(value => {
            //         value.draw();
            //     });
            //     this.restGame(newList);
            // },2000);
        }

        /** 恢复游戏 */

    }, {
        key: 'restGame',
        value: function restGame() {
            var newList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            // 关闭动画
            // this.director.gameOver();
            console.log(newList);
            this.director.gameFlag = true;
            this.dataStore.put('liwu', newList);
            this.director.run();
        }

        /** 成功操作 */

    }, {
        key: 'success',
        value: function success(win) {
            var newList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            var _this5 = this;

            var i = arguments[2];
            var list = arguments[3];

            this.director.gameOver();
            if (!win.winFlag) {
                this.restUI();
                newList.forEach(function (value) {
                    value.draw();
                });
                this.ctx.save();
                win.draw();
                var animationWin = requestAnimationFrame(function () {
                    return _this5.clickLogic(i, list);
                });
                this.dataStore.put('animationWin', animationWin);
            } else {
                this.ctx.globalAlpha = 1;
                win.winFlag = false;
                win.x = 100;
                win.y = 300;
                win.level = 1.1;
                this.dataStore.put('win', win);
                this.restUI();
                newList.forEach(function (value) {
                    value.draw();
                });
                cancelAnimationFrame(this.dataStore.get('animationWin'));
                this.restGame(newList);
            }
            // if (!win.winFlag) {
            //     this.restUI();
            //     newList.forEach(value => {
            //         value.draw();
            //     });
            //     this.ctx.save();
            //     win.draw();
            //     let animationWin = requestAnimationFrame(() => this.clickLogic(i, list));
            //     this.dataStore.put('animationWin', animationWin);
            // } else {
            //     this.ctx.globalAlpha = 1;
            //     win.winFlag = false;
            //     win.x = 100;
            //     win.y = 300;
            //     win.level = 1.1;
            //     this.dataStore.put('win',win);
            //     this.restUI();
            //     newList.forEach(value => {
            //         value.draw();
            //     });
            //     cancelAnimationFrame(this.dataStore.get('animationWin'));
            //     this.restGame(newList);
            // }
        }

        /** 复原现场 */

    }, {
        key: 'restUI',
        value: function restUI() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.dataStore.get('background').draw();
            this.dataStore.get('timerPlane').draw();
            var timeStr = this.director._timeAnimation(this.director.timeDown);
            this.dataStore.get('timer').draw(timeStr);
        }

        /** 判断礼物是否触摸 */

    }, {
        key: 'isLiwuTouch',
        value: function isLiwuTouch(x, y) {
            var i = 0;
            var liwu = this.dataStore.get('liwu');
            for (var j = 0; j < liwu.length; j++) {
                if (x >= liwu[j].x && x <= liwu[j].x + liwu[j].width && y <= liwu[j].y && y >= liwu[j].y - liwu[j].height && !liwu[j].openFlag) {
                    i = j + 1;
                    break;
                }
            }
            return i;
        }
    }, {
        key: 'getEventPosition',
        value: function getEventPosition(ev) {
            var x, y;
            if (ev.layerX || ev.layerX == 0) {
                x = ev.layerX;
                y = ev.layerY;
            } else if (ev.offsetX || ev.offsetX == 0) {
                // Opera
                x = ev.offsetX;
                y = ev.offsetY;
            }
            return { x: x, y: y };
        }
    }]);

    return Main;
}();

exports.Main = Main;