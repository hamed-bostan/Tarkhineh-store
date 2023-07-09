const selectedItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalPrice =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const itemsCounter =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const setItemsFunction = (selectedItems, totalPrice, itemsCounter) => {
  localStorage.setItem("cartItems", JSON.stringify(selectedItems));
  localStorage.setItem("totalAmount", JSON.stringify(totalPrice));
  localStorage.setItem("totalQuantity", JSON.stringify(itemsCounter));
};

const initialState = {
  // selectedItems: [],
  selectedItems: selectedItems,
  // itemsCounter: 0,
  itemsCounter: itemsCounter,
  // totalPrice: 0,
  totalPrice: totalPrice,
  checkout: false,
};

const sumItems = (item) => {
  const itemsCounter = item.reduce((total, currentQuantity) => {
    return total + currentQuantity.quantity;
  }, 0);
  const totalPrice = item
    .reduce((total, currentPrice) => {
      return total + currentPrice.quantity * currentPrice.finalPrice;
    }, 0)
    .toFixed(2);
  return { itemsCounter, totalPrice };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        // ...setItemsFunction(
        //   state.selectedItems.map((item) => item),
        //   state.totalPrice,
        //   state.itemsCounter
        // ),
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };

    case "INCREASE":
      const increaseItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      increaseItem.quantity++;
      return { ...state, ...sumItems(state.selectedItems) };

    case "DECREASE":
      const decreaseItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      if (decreaseItem.quantity > 1) {
        decreaseItem.quantity--;
      }
      return { ...state, ...sumItems(state.selectedItems) };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: true,
      };

    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
