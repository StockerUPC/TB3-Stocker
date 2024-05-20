export class Supplier{
    constructor({name = "", product ="", number ="", email ="", type ="", deliveryDays=""}) {
        this.name = name;
        this.product = product;
        this.number = number;
        this.email = email;
        this.type = type;
        this.deliveryDays = deliveryDays;
    }
}