export const addIncome = (typesource,expenseon,newPrice) => {
    console.log('income', typesource,expenseon,newPrice);
    return {
        type: "ADDINCOME",
        payload: {
            typesource,
            expenseon,
            newPrice,
        }
    }
}

export const addExpense = (typesource,expenseon,newPrice) => {
    return {
        type: "ADDEXPENSE",
        payload: {
            typesource,
            expenseon,
            newPrice,
        }
    }
}