import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type ModalName = "login" | "register" | null;

const initialState = {
  activeModal: null as ModalName,
};



const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLogin: (state) => { state.activeModal = "login"; },
    openRegister: (state) => { state.activeModal = "register"; },
    closeModal: (state) => { state.activeModal = null; },
    toggleModal: (state, action: PayloadAction<ModalName>) => {
      state.activeModal = action.payload;
    },
  },
});



export const { openLogin, openRegister, closeModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;

export const selectActiveModal = (state: RootState) => state.modal.activeModal;
export const isLoginOpen = (state: RootState) => state.modal.activeModal === "login";
export const isRegisterOpen = (state: RootState) => state.modal.activeModal === "register";
