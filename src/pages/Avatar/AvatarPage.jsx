import React from "react";
import { useNavigate } from "react-router-dom";

export default function AvatarPage() {
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/avatar/detail")}>모바일 ui</button>
    </div>
  );
}
