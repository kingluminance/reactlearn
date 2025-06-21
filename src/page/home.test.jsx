import React from "react"; // React import 추가
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./home.jsx"; // Home 컴포넌트 import

// 첫 번째 테스트: Home 컴포넌트가 제목과 버튼을 렌더링해야 함
test("Home 컴포넌트가 제목과 버튼을 렌더링해야 함", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // 제목이 있는지 확인
  expect(getByText("Home Page")).toBeInTheDocument(); // 여기서 'Home Page'는 실제 제목으로 바꿔주세요

  // 버튼이 있는지 확인
  expect(getByText("Go to Next Page")).toBeInTheDocument(); // 'Go to Next Page'는 버튼 텍스트로 바꿔주세요
});

// 두 번째 테스트: 버튼 클릭 시 navigate 함수가 호출되어야 함
test("버튼 클릭 시 navigate 함수가 호출되어야 함", () => {
  const mockNavigate = jest.fn();
  const { getByText } = render(
    <MemoryRouter>
      <Home navigate={mockNavigate} />
    </MemoryRouter>
  );

  // 버튼 클릭 이벤트 발생
  fireEvent.click(getByText("Go to Next Page")); // 'Go to Next Page'는 버튼 텍스트로 바꿔주세요

  // navigate 함수가 한 번 호출되었는지 확인
  expect(mockNavigate).toHaveBeenCalledTimes(1);
});
