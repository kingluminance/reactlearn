import React, { useState, useEffect } from "react";

export default function AuthPage() {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    setStatus("위치 정보를 가져오는 중...");

    if (!navigator.geolocation) {
      setStatus("이 브라우저는 위치 정보를 지원하지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}&language=ko`
          );
          const data = await res.json();

          let city = "";
          let district = "";
          let town = "";
          let road = "";
          let building = "";
          let buildingName = "";

          // 모든 results를 순회하면서 가장 먼저 찾은 값을 사용
          for (const result of data.results) {
            for (const comp of result.address_components) {
              if (!city && comp.types.includes("locality"))
                city = comp.long_name;
              if (
                !district &&
                comp.types.includes("administrative_area_level_2")
              )
                district = comp.long_name;
              if (
                !town &&
                (comp.types.includes("sublocality_level_1") ||
                  comp.types.includes("administrative_area_level_3"))
              )
                town = comp.long_name;
              if (!road && comp.types.includes("route")) road = comp.long_name;
              if (!building && comp.types.includes("street_number"))
                building = comp.long_name;
              if (!buildingName && comp.types.includes("premise"))
                buildingName = comp.long_name;
            }
          }

          // 원하는 형태로 조합
          let customAddress = [city, town, road, building, buildingName]
            .filter(Boolean)
            .join(" ");

          if (!customAddress) {
            customAddress =
              data.results[0]?.formatted_address || "주소를 찾을 수 없음";
          }

          setAddress(customAddress);
          setShowMap(true);
          setStatus("주소를 성공적으로 가져왔습니다.");
        } catch (err) {
          setStatus("주소를 가져오는 데 실패했습니다.");
        }
      },
      (err) => {
        setStatus("위치 정보 접근이 거부되었습니다.");
      }
    );
  }, []);

  return (
    <div className="w-screen h-screen bg-Background flex flex-col">
      <div className="py-7 px-3 flex-low flex">
        <button></button>
        <h2 className="text-xl font-bold ">위치 정보 등록하기</h2>
      </div>
      {address && (
        <div className="mt-4">
          <div className="mb-2 text-sm">{address}</div>
          {showMap && (
            <iframe
              title="지도"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                address
              )}&output=embed`}
            ></iframe>
          )}
          <div className="max-w-md mx-auto p-6 bg-[#C0C0C0C0] text-white rounded-xl shadow-md">
            현재 위치가 '<span className="text-bold text-xl">{address}</span>
            '내에 있어요.
          </div>
        </div>
      )}

      {status && <p className="text-xs text-gray-300">{status}</p>}
    </div>
  );
}
