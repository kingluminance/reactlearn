import React from "react";
import { useNavigate } from "react-router-dom";

export default function AvatarDetail() {
  let navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-Background flex flex-col">
      <div className="flex-1 "></div>
      <button
        className="h-14 bg-white flex justify-around items-center shadow text-black"
        onClick={() => navigate("/avatar/signup")}
      >
        카카오로그인
      </button>
    </div>
  );
}
