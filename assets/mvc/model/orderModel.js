export default class OrderModel {
    constructor(orderId, customerNic, customerName, itemCode, itemName, qty, total,discount,netTotal, date) {
        this._orderId = orderId;
        this._customerNic = customerNic;
        this._customerName = customerName;
        this._itemCode = itemCode;
        this._itemName = itemName;
        this._qty = qty;
        this._total = total;
        this._discount = discount;
        this._netTotal = netTotal;
        this._date = date;


    }

    get orderId() {
        return this._orderId;
    }

    set orderId(value) {
        this._orderId = value;
    }

    get customerNic() {
        return this._customerNic;
    }

    set customerNic(value) {
        this._customerNic = value;
    }

    get customerName() {
        return this._customerName;
    }

    set customerName(value) {
        this._customerName = value;
    }

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }


    get discount() {
        return this._discount;
    }

    set discount(value) {
        this._discount = value;
    }

    get netTotal() {
        return this._netTotal;
    }

    set netTotal(value) {
        this._netTotal = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }
}