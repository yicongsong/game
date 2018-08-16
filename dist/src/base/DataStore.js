'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 变量缓存器，方便我们在不同的类中访问和修改变量
var DataStore = exports.DataStore = function () {
    _createClass(DataStore, null, [{
        key: 'getInstance',
        value: function getInstance() {
            if (!DataStore.instance) {
                DataStore.instance = new DataStore();
            }
            return DataStore.instance;
        }
    }]);

    function DataStore() {
        _classCallCheck(this, DataStore);

        this.map = new Map();
    }

    // 保存


    _createClass(DataStore, [{
        key: 'put',
        value: function put(key, value) {
            if (typeof value == 'function') {
                value = new value();
            }
            this.map.set(key, value);
            return this;
        }

        //销毁

    }, {
        key: 'destroy',
        value: function destroy() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.map.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var value = _step.value;

                    value = null;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

        // 取出

    }, {
        key: 'get',
        value: function get(key) {
            return this.map.get(key);
        }
    }]);

    return DataStore;
}();