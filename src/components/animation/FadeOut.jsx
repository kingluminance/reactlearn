import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FadeOut({ children, showBox }) {
  return (
    <AnimatePresence mode="wait">
      {" "}
      {/*전 애니메이션 끝날때까지 기다려줌*/}
      {showBox && (
        <motion.div
          key="fadeBox" //react에서 독립된 트렌지션 단위로써 인식해줌
          initial={{ opacity: 1, y: -20 }} //당연하게도 시작 생김새
          animate={showBox ? { opacity: 1, y: -20 } : { opacity: 0, y: 0 }} //끝 부분
          exit={{ opacity: 0, y: 20 }} //컴포넌트 사라지면 실행됨
          onAnimationComplete={() => console.log("애니메이션 끝났음!")} //애니메이션 끝나면 다음 함수 실행
          transition={{ duration: 1.2, ease: "easeInOut" }} //느렸다가 빨라지는 에니메이션
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
