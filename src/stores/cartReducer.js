export const defaultCart = {
  items: {},
  totalItems: 0,
};

export const cartActions = {
  add: "add",
  remove: "remove",
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActions.add: {
      const currentCount = state.items[action.offerId] ?? 0;
      const newItems = {
        ...state.items,
        [action.offerId]: currentCount + 1,
      };

      return {
        ...state,
        items: newItems,
        totalItems: Object.keys(newItems).length,
      };
    }
    case cartActions.remove: {
      const { [action.offerId]: currentCount = 0, ...oldItems } = state.items;
      const newItems = {
        ...oldItems,
        ...(currentCount > 1 ? { [action.offerId]: currentCount - 1 } : {}),
      };

      return {
        ...state,
        items: newItems,
        totalItems: Object.keys(newItems).length,
      };
    }
    default: {
      return state;
    }
  }
};
