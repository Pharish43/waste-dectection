export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

export const calculateWastePercentage = (initialQuantity: number, wastedQuantity: number): number => {
    if (initialQuantity <= 0) {
        return 0;
    }
    return (wastedQuantity / initialQuantity) * 100;
};