import React, { useState } from "react";

import { FadeOut } from "../components/common/animations";
import AnimationCard from "../components/common/Card";
import { useNavigate } from "react-router-dom";

export default function AnimationPage() {
  let navigate = useNavigate();
  const [showBox, setShowBox] = useState(true);
  var animationList = [
    { name: "fadeIn", description: "fadein 애니메이션을 다루는 페이지입니다" },
    {
      name: "fadeout",
      description: "fadeout 애니메이션을 다루는 페이지 입니다",
    },
  ];

  return (
    <div>
      <button
        className="absolute px-4 py-2 bg-slate-200 text-black font-bold rounded shadow top-20 left-20"
        onClick={() => {
          navigate(-1);
        }}
      >
        <p>뒤로가기</p>
      </button>
      <div className="relative">
        <span>
          <FadeOut showBox={showBox}>Welcome To My Animation Museum</FadeOut>
        </span>
        {showBox && (
          <button onClick={() => setShowBox(!showBox)} className="fixed">
            Ok! Show your List
          </button>
        )}
        {!showBox && (
          <span className="absolute inset-0 flex justify-center items-center">
            {animationList.map((animation, idx) => (
              <AnimationCard
                key={animation.name}
                description={animation.description}
              >
                <p>{animation.name}</p>
                <button>자세히</button>
              </AnimationCard>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}
