import ComingFromback from "../animation/ComingFromback";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimationCard({ children }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div>
      <ComingFromback>
        <div className="flex justify-center items-center h-screen">
          <motion.div
            className="relative w-64 h-96 cursor-grab" //커서 손 모양으로 바꾸기
            style={{ perspective: "1000px" }} //3D 효과(회전, 플립 등)를 위한 CSS 속성
            drag="x" //drag: 드래그(끌기) 기능 활성화 "x": x축(가로) 방향으로만 드래그 허용
            dragConstraints={{ left: -200, right: 200 }} //드래그로 이동할 수 있는 범위 제한
            onDragStart={() => setIsDragging(true)} //드래그가 시작될 때 실행되는 콜백
            onDragEnd={() => setIsDragging(false)} //드래그가 끝날 때 실행되는 콜백
            whileDrag={{ scale: 1.05 }} //드래그 중일 때 적용되는 애니메이션
          >
            <motion.div
              className="absolute w-full h-full bg-blue-500 rounded-lg flex items-center justify-center"
              animate={{
                rotateY: !isDragging ? 0 : isFlipped ? 0 : 180,
              }}
              transition={{ duration: 0.6 }}
              style={{ backfaceVisibility: "hidden" }} //3D로 돌렸을때 뒷면 안보이게
              onClick={() => !isDragging && setIsFlipped(!isFlipped)}
            >
              <span className="text-white text-xl">앞면</span>
            </motion.div>
            <motion.div
              className="absolute w-full h-full bg-red-500 rounded-lg flex items-center justify-center"
              animate={{
                rotateY: !isDragging ? 180 : isFlipped ? 180 : 0,
              }}
              transition={{ duration: 0.6 }}
              style={{ backfaceVisibility: "hidden", rotateY: 180 }}
            >
              <span className="text-white text-xl">뒷면</span>
            </motion.div>
          </motion.div>
        </div>
      </ComingFromback>
    </div>
  );
}
