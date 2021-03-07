import { CLOSE_MODAL, OPEN_MODAL } from "./modalConstants";

const initialState = null;

var modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      return { modalType: payload.modalType, modalProps: payload.modalProps };
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default modalReducer;
