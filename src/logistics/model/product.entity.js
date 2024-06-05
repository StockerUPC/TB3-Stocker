export class Product{
    constructor({id="", name="", category="", photoUrl="", price=0.00, quantity=0, expiryDate="", available=true}) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.photoUrl = photoUrl;
        this.price = price;
        this.quantity = quantity;
        this.expiryDate = expiryDate;
        this.available = available;
    }
}
