export interface FoodItem {
    id: string;
    name: string;
    quantity: number;
    expirationDate: Date;
    isExpired(): boolean;
}

export interface WasteAnalysis {
    totalWaste: number;
    wastePercentage: number;
    suggestions: string[];
}