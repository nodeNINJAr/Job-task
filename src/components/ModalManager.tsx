
"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import LoginModal from "./auth/LoginModal";
import RegisterModal from "./auth/RegisterModal";
import { closeModal, selectActiveModal } from "@/redux/features/modal/modalSlice";


export default function ModalManager() {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectActiveModal);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => dispatch(closeModal())}
      />

      {/* modal container */}
      <div className="relative z-10 w-full max-w-md mx-4 sm:mx-0 max-h-[90vh] overflow-y-auto p-6 bg-white rounded shadow">
        {active === "login" && <LoginModal />}
        {active === "register" && <RegisterModal />}
      </div>
    </div>
  );
}
