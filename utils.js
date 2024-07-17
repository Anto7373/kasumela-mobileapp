export const loanTypes = [
    {
        value: "PERSONAL",
        label: "Personal Loan"
    },
    {
        value: "BUSINESS",
        label: "Business Loan"
    },
    {
        value: "HOUSE",
        label: "Home Loan"
    },
    {
        value: "PROPERTY",
        label: "Loan against property"
    },
    {
        value: "OVERDRAFT",
        label: "Over Draft"
    },
    {
        value: "CAR",
        label: "Car Loan"
    }
]

export const getFormattedAmount = (amount) => {
    if(amount)
    {
        return parseInt(amount).toLocaleString('en-IN');
    }
    else
    {
        return amount;
    }
}