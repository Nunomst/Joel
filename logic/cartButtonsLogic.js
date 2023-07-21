export function decrementCartQuantity(inputQuantity, updateTotalCartPrice) {
    if (inputQuantity.value > 1) {
        inputQuantity.value--;
        updateTotalCartPrice();
    }
}

export function incrementCartQuantity(inputQuantity, item, updateTotalCartPrice) {
    if (inputQuantity.value < item.quantity) {
        inputQuantity.value++;
        updateTotalCartPrice();
    }
}
