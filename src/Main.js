// 主要的基类
import { ResourceLoader } from './base/ResourceLoader.js';
import { DataStore } from './base/DataStore.js';
import { BackGround } from './runtime/BackGround.js'
import { Director } from './Director.js';
import { liwu } from './play/liwu.js';
import { timer } from './play/timer.js';
import { timerPlane } from './play/timerPlane.js';
import { tiaowen } from './play/tiaowen.js';
import { win } from './play/win.js';
import { fail } from './play/fail.js';
import { liwuopen } from './play/liwuopen.js';

export class Main {
    constructor() {
        this.getWindowsWidthOrHeight();
        document.getElementById('game_canvas').width = this.htmlWidth;
        document.getElementById('game_canvas').height = this.htmlHeight;
        // document.getElementById('game_canvas').width = 375;
        // document.getElementById('game_canvas').height = 665;
        this.failToFalse = false;
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }

    /** 获取手机屏幕宽 */
    getWindowsWidthOrHeight() {
        //得到手机屏幕的宽度
        this.htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
        this.htmlHeight = document.documentElement.clientHeight || document.body.clientHeight;
    }

    /** 资源加载 */
    onResourceFirstLoaded(map) {
        this.dataStore.canvas = this.canvas;
        this.dataStore.moveSpace = 5;
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        // this.createBackgroundMusic();
        this.init();
    }

    /** 初始化 */
    init() {
        // 事件绑定关键

        document.getElementById('start').onclick = () => {
            if (!this.director.startFlag) {
                this.director.run();
                this.director.gameFlag = true;
            }
            this.director.startFlag = true;
        }

        //首先重置游戏是没有结束的
        // this.director.isGameOver = false;
        this.dataStore.put('background', BackGround).put('liwu', []).put('timer', timer).put('timerPlane', timerPlane).put('tiaowen', tiaowen).put('win', win).put('fail',fail);
        this.registerEvent();
        this.dataStore.get('background').draw();
        // this.director.run();
    }

    /** 处理点击事件 */
    registerEvent() {
        this.canvas.addEventListener('touchstart', e => {
            //阻止事件冒泡
            e.preventDefault();
            if (this.director.gameFlag) {
                let i = this.isLiwuTouch(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                //这里出发点击事件 , i 代表第几个礼物s
                const list = this.dataStore.get('liwu');
                
                this.clickLogic(i, list);

            }

        });
    }

    /** 处理逻辑 */
    clickLogic(i, list) {
        if (i != 0) {
            // this.director.gameOver();

            let win = this.dataStore.get('win');
            let fail = this.dataStore.get('fail');
            let newList = [];
            let x = 0;
            let y = 0;
            for (let j = 0; j < list.length; j++) {
                if (j == i - 1) {
                    x = list[j].x;
                    y = list[j].y;
                    let liwus = new liwuopen(list[j].src,x,y,list[j].level);
                    newList[j] = liwus;
                    continue;
                }
                newList[j] = list[j];
            }
            // 失败的步骤
            this.fail(fail,newList,x,y,i,list);
            // 成功的步骤
            // this.success(win,newList,i,list);
        }
    }

    /** 失败操作 */
    fail(fail,newList=[],x,y,i,list){
        this.director.gameOver();
        if (!fail.flag) {
            this.restUI();
            newList.forEach(value => {
                value.draw();
            });
            this.ctx.save();
            fail.draw(x,y);
            let animationFail = requestAnimationFrame(() => this.clickLogic(i, list));
            this.dataStore.put('animationFail', animationFail);
            if(!this.failToFalse){
                setTimeout(()=>{
                    // 两秒后消失
                    fail.flag = true;
                },200);
            }
            this.failToFalse = true;

            
        } else {
            this.failToFalse = false;
            fail.flag = false;
            this.dataStore.put('fail',fail);
            this.restUI();
            newList.forEach(value => {
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
    restGame(newList = []){
        // 关闭动画
        // this.director.gameOver();
        console.log(newList);
        this.director.gameFlag = true;
        this.dataStore.put('liwu',newList);
        this.director.run();
    }

    /** 成功操作 */
    success(win,newList = [],i,list){
        this.director.gameOver();
        if (!win.winFlag) {
            this.restUI();
            newList.forEach(value => {
                value.draw();
            });
            this.ctx.save();
            win.draw();
            let animationWin = requestAnimationFrame(() => this.clickLogic(i, list));
            this.dataStore.put('animationWin', animationWin);
        } else {
            this.ctx.globalAlpha = 1;
            win.winFlag = false;
            win.x = 100;
            win.y = 300;
            win.level = 1.1;
            this.dataStore.put('win',win);
            this.restUI();
            newList.forEach(value => {
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
    restUI() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.dataStore.get('background').draw();
        this.dataStore.get('timerPlane').draw();
        let timeStr = this.director._timeAnimation(this.director.timeDown);
        this.dataStore.get('timer').draw(timeStr);
    }

    /** 判断礼物是否触摸 */
    isLiwuTouch(x, y) {
        let i = 0;
        let liwu = this.dataStore.get('liwu');
        for (let j = 0; j < liwu.length; j++) {
            if (x >= liwu[j].x && x <= liwu[j].x + liwu[j].width && y <= liwu[j].y && y >= liwu[j].y - liwu[j].height && !liwu[j].openFlag) {
                i = j + 1;
                break;
            }
        }
        return i;
    }

    getEventPosition(ev) {
        var x, y;
        if (ev.layerX || ev.layerX == 0) {
            x = ev.layerX;
            y = ev.layerY;
        } else if (ev.offsetX || ev.offsetX == 0) { // Opera
            x = ev.offsetX;
            y = ev.offsetY;
        }
        return { x: x, y: y };
    }

}