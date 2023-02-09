export const deliveryInitialState = {
  deliverys: [],
}

export const deliveryInitialActionValue = {
  type: '',
  payload: '',
}

export default function deliveryReducer(
  state = deliveryInitialActionValue, action = deliveryInitialActionValue
  ) {
    switch(action.type) {
      default:
        return state;
    }
}