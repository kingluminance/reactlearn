import React, { useState } from "react";

import FadeOut from "../components/animation/FadeOut";
import AnimationCard from "../components/animationPageComponents/AnimationCard";
import { span } from "framer-motion/client";

export default function AnimationPage() {
  const [showBox, setShowBox] = useState(true);

  return (
    <div>
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
            <AnimationCard>
              <p>hi</p>
            </AnimationCard>
          </span>
        )}
      </div>
    </div>
  );
}
