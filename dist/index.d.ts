export default class PrettyBox {
    private _hasMargin;
    private readonly _lines;
    private _paddingHorizontal;
    private _paddingVertical;
    constructor(_hasMargin?: boolean);
    addLine(content?: string): void;
    setHorizontalPadding(value: number): void;
    setVerticalPadding(value: number): void;
    print(): void;
    private printEmpty;
    private getMaxLength;
    private checkPaddingValue;
}
