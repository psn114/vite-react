// src/App.tsx — minimal working version
import React from "react";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: "24px" }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
        PSN114
      </h1>
      <p style={{ opacity: 0.8, marginBottom: 16 }}>
        온라인 신청서는 아래 링크에서 열립니다.
      </p>
      <a
        href="/kakao"
        style={{ color: "#9cf", textDecoration: "underline" }}
      >
        /kakao 바로가기
      </a>
    </div>
  );
}

