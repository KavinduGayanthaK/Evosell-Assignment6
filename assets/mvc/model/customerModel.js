
export default class CustomerModel{

    constructor(customerId,customerName,customerAddress,customerEmail,customerNic) {
        this._customerId = customerId;
        this._customerName = customerName;
        this._customerAddress = customerAddress;
        this._customerEmail = customerEmail;
        this._customerNic = customerNic;
    }


    get customerID() {
        return this._customerId;
    }

    set customerID(value) {
        this._customerId = value;
    }

    get customerName(){
        return  this._customerName;
    }

    set customerName(value){
        this._customerName = value;
    }


    get customerAddress() {
        return this._customerAddress;
    }

    set customerAddress(value) {
        this._customerAddress = value;
    }

    get customerEmail() {
        return this._customerEmail;
    }

    set customerEmail(value) {
        this._customerEmail = value;
    }

    get customerNic() {
        return this._customerNic;
    }

    set customerNic(value) {
        this._customerNic = value;
    }
}