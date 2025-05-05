export class FoodItem {
    id: number;
    name: string;
    quantity: number;
    expirationDate: Date;

    constructor(id: number, name: string, quantity: number, expirationDate: Date) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.expirationDate = expirationDate;
    }

    isExpired(): boolean {
        const today = new Date();
        return this.expirationDate < today;
    }
}