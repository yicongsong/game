import { DataStore } from "./base/DataStore.js";
import { liwu } from "./play/liwu.js";

/** 舞台类 */
export class Director {
    constructor() {
        this.dataStore = DataStore.getInstance();
        this.timeDown = 60 * 60;
        // 上一秒的时间
        this.pro_sec = 0;
        //　游戏是否开始
        this.gameFlag = true;
        this.startFlag = false;
    }

    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director;
        }
        return Director.instance;
    }

    /** 绘制礼物的方法 */
    createLiwu() {
        this.dataStore.get('liwu').push(new liwu());
    }

    /**
     * 小时级倒计时动画
     * @param  {String} time [服务器时间戳]
     * @param  {String} timeDown [倒计时截至时间]
     */
    _timeAnimation(time, timeDown) {
        let timeTemp, // 临时时间
            remain_sec = 0, // 秒
            remain_minute = 0, // 分钟
            remain_hour = 0, // 小时
            hour = 0, // 最终显示小时
            min = 0, // 最终显示分钟
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
    gameOver() {
        if (this.gameFlag) {
            // this.dataStore.get('startButton').draw();
            cancelAnimationFrame(this.dataStore.get('animationTimer'));
            this.gameFlag = false;
            this.startFlag = false;
            this.dataStore.destroy();
        }

    }

    run() {
        if (this.gameFlag) {
            this.dataStore.get('background').draw();
            this.dataStore.get('timerPlane').draw();
            // this.dataStore.get('tiaowen').draw();

            // this._timeAnimation();
            let timeStr = this._timeAnimation(this.timeDown);
            this.timeDown--;


            this.dataStore.get('timer').draw(timeStr);
            const liwu = this.dataStore.get('liwu');
            if (liwu.length == 0) {
                this.createLiwu();
            } else if (liwu.length < 6 && liwu[liwu.length - 1].level == 2) {
                this.createLiwu();
            }
            if (liwu[0].liwuFlag) {
                liwu.shift();
            }

            this.dataStore.get('liwu').forEach(value => {
                value.draw();
            });
            let animationTimer = requestAnimationFrame(() => this.run());
            this.dataStore.put('animationTimer', animationTimer);
        } else {
            this.gameOver();
        }

    }

}