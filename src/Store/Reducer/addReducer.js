const defaultState = {
    title: '',
    priceValue: '',
    type: '' 
}

const initialState = {
    total: 0,
    income: 0,
    expense: 0,
    balanceArr: []
}

export const addReducer = (state=initialState,action) => {
    switch(action.type) {
        case "ADDINCOME":
            console.log('action',action.type,action.payload.expenseon);
            const newObj = {...defaultState};
            newObj.title = action.payload.expenseon;
            newObj.priceValue = action.payload.newPrice;
            newObj.type = "INCOME";
            const newTotal = state.total + action.payload.newPrice;
            const newIncome = state.income + action.payload.newPrice;

            return {...state, 
                balanceArr: [...state.balanceArr,newObj],
                total: newTotal,
                income: newIncome,
            };
        case "ADDEXPENSE":
            const newExpObj = {...defaultState};
            newExpObj.title = action.payload.expenseon;
            newExpObj.priceValue = action.payload.newPrice;
            newExpObj.type = "EXPENSE";
            const newExpTotal = state.total + action.payload.newPrice;
            const newExpense = state.expense - action.payload.newPrice;
            return {...state, 
                balanceArr: [...state.balanceArr,newExpObj],
                total: newExpTotal,
                expense: newExpense,
            };
        default:
            return {...state}
    }
}
