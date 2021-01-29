"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var string_length_1 = __importDefault(require("string-length"));
var PrettyBox = (function () {
    function PrettyBox(_hasMargin) {
        if (_hasMargin === void 0) { _hasMargin = false; }
        this._hasMargin = _hasMargin;
        this._lines = [];
        this._paddingHorizontal = 4;
        this._paddingVertical = 1;
    }
    PrettyBox.prototype.addLine = function (content) {
        this._lines.push(content);
    };
    PrettyBox.prototype.setHorizontalPadding = function (value) {
        this.checkPaddingValue(value);
        this._paddingHorizontal = value;
    };
    PrettyBox.prototype.setVerticalPadding = function (value) {
        this.checkPaddingValue(value);
        this._paddingVertical = value;
    };
    PrettyBox.prototype.print = function () {
        var _this = this;
        if (this._hasMargin) {
            console.log();
        }
        var maxLen = this.getMaxLength();
        console.log('┌'.concat('─'.repeat(maxLen + this._paddingHorizontal * 2)).concat('┐'));
        for (var i = 0; i < this._paddingVertical; i++) {
            this.printEmpty(maxLen);
        }
        this._lines.forEach(function (string) {
            if (typeof string === 'undefined') {
                _this.printEmpty(maxLen);
                return;
            }
            var toPrint = '│'.concat(' '.repeat(_this._paddingHorizontal)).concat(string);
            if (string_length_1.default(string) < maxLen) {
                toPrint = toPrint.concat(' '.repeat(maxLen - string_length_1.default(string)));
            }
            toPrint = toPrint.concat(' '.repeat(_this._paddingHorizontal)).concat('│');
            console.log(toPrint);
        });
        for (var i = 0; i < this._paddingVertical; i++) {
            this.printEmpty(maxLen);
        }
        console.log('└'.concat('─'.repeat(maxLen + this._paddingHorizontal * 2)).concat('┘'));
        if (this._hasMargin) {
            console.log();
        }
    };
    PrettyBox.prototype.printEmpty = function (len) {
        console.log('│'.concat(' '.repeat(len + (this._paddingHorizontal * 2))).concat('│'));
    };
    PrettyBox.prototype.getMaxLength = function () {
        var lines = this._lines.filter(function (string) { return typeof string === 'string'; });
        return string_length_1.default(lines.reduce(function (accumulator, value) { return (string_length_1.default(value) > string_length_1.default(accumulator) ? value : accumulator); }, this._lines[0] || ''));
    };
    PrettyBox.prototype.checkPaddingValue = function (number) {
        if (typeof number !== 'number') {
            throw new Error('The size of a padding must be a number');
        }
        if (!Number.isInteger(number)) {
            throw new Error('The size of a padding must be an integer');
        }
        if (number < 0) {
            throw new Error('The size of a padding must be a positive number');
        }
    };
    return PrettyBox;
}());
exports.default = PrettyBox;
