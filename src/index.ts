import stringLength from 'string-length';

export default class PrettyBox {

    private readonly _lines: Array<string | undefined> = [];

    private _paddingHorizontal: number = 4;

    private _paddingVertical: number = 1;

    constructor(private _hasMargin: boolean = false) {
    }

    public addLine(content?: string): void {
        this._lines.push(content);
    }

    public setHorizontalPadding(value: number): void {
        this.checkPaddingValue(value);
        this._paddingHorizontal = value;
    }

    public setVerticalPadding(value: number): void {
        this.checkPaddingValue(value);

        this._paddingVertical = value;
    }

    public print(): void {
        if (this._hasMargin) {
            console.log();
        }

        const maxLen = this.getMaxLength();

        console.log('┌'.concat('─'.repeat(maxLen + this._paddingHorizontal * 2)).concat('┐'));

        for (let i = 0; i < this._paddingVertical; i++) {
            this.printEmpty(maxLen);
        }

        this._lines.forEach((string) => {
            if (typeof string === 'undefined') {
                this.printEmpty(maxLen);
                return;
            }

            let toPrint = '│'.concat(' '.repeat(this._paddingHorizontal)).concat(string);

            if (stringLength(string) < maxLen) {
                toPrint = toPrint.concat(' '.repeat(maxLen - stringLength(string)));
            }

            toPrint = toPrint.concat(' '.repeat(this._paddingHorizontal)).concat('│');

            console.log(toPrint);
        });

        for (let i = 0; i < this._paddingVertical; i++) {
            this.printEmpty(maxLen);
        }

        console.log('└'.concat('─'.repeat(maxLen + this._paddingHorizontal * 2)).concat('┘'));

        if (this._hasMargin) {
            console.log();
        }
    }

    private printEmpty(len: number): void {
        console.log('│'.concat(' '.repeat(len + (this._paddingHorizontal * 2))).concat('│'));
    }

    private getMaxLength(): number {
        const lines = this._lines.filter((string) => typeof string === 'string') as Array<string>

        return stringLength(
            lines.reduce(
                (accumulator, value) => (value.length > accumulator.length ? value : accumulator), this._lines[0] || ''
            )
        );
    }

    private checkPaddingValue(number: number): void | never {
        if (typeof number !== 'number') {
            throw new Error('The size of a padding must be a number');
        }

        if (!Number.isInteger(number)) {
            throw new Error('The size of a padding must be an integer')
        }

        if (number < 0) {
            throw new Error('The size of a padding must be a positive number');
        }
    }

}
