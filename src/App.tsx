import { useEffect, useState } from "react";

// 단일 파일로 라우팅(해시 기반) + 홈페이지 섹션 + 신청서 페이지까지 포함한 버전
// - 홈:    https://www.psn114.com/#/
// - 신청:  https://www.psn114.com/#/apply

export default function App() {
  const [route, setRoute] = useState<string>(() => parseRoute());

  useEffect(() => {
    const onHash = () => setRoute(parseRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route === "apply" ? <ApplyPage /> : <HomePage />;
}

function parseRoute() {
  const h = (window.location.hash || "#/" ).replace("#", "");
  if (h.startsWith("/apply")) return "apply";
  return "/";
}

// ===== 공통 리소스 =====
const KAKAO_URL = "https://open.kakao.com/o/sZvu7dZh";
const TEL = "tel:15337528";
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdEnMV74BzJ8FcFjbEtKtfbhVZ5x0Y61oizrJ8fVuevgJ1Arw/viewform?embedded=true";

function Header({ onApply }: { onApply?: () => void }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between text-white">
        <a href="#/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-pink-500/80" />
          <span className="text-sm sm:text-base font-semibold">PSN | Privacy Secret Number</span>
        </a>
        <nav className="hidden sm:flex items-center gap-4 text-sm opacity-90">
          <a href="#services" className="hover:opacity-100">서비스</a>
          <a href="#products" className="hover:opacity-100">상품</a>
          <a href="#faq" className="hover:opacity-100">FAQ</a>
          <a href="#contact" className="hover:opacity-100">고객센터</a>
        </nav>
        <a
          href="#/apply"
          onClick={onApply}
          className="px-3 sm:px-4 py-2 rounded-2xl bg-pink-500/85 hover:bg-pink-500 transition text-sm sm:text-base"
        >
          온라인 신청
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-4 py-10 text-white/70 text-xs">
      <div className="grid sm:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold text-white">PSN | Privacy Secret Number</div>
          <div className="mt-2">노출 없는 안전한 연결</div>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <div className="mt-2">카카오 오픈채팅: <a className="underline" href={KAKAO_URL} target="_blank" rel="noreferrer noopener">바로가기</a></div>
          <div className="mt-1 font-semibold text-pink-400">
            대표번호: <a href={TEL} className="underline">1533-7528</a>
          </div>
        </div>
        <div>
          <div className="font-semibold text-white">Address</div>
          <div className="mt-2">서울 금천구 가산디지털1로 196, 407호</div>
        </div>
      </div>
      <div className="mt-8 opacity-60">© PSN | Privacy Secret Number</div>
    </footer>
  );
}

// ===== 모바일 하단 고정 액션(카카오 + 전화) =====
function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:hidden flex flex-col items-end gap-3">
      <a
        href={KAKAO_URL}
        className="flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-3 rounded-full shadow-lg hover:bg-white/25 transition"
        aria-label="카카오로 상담"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 3C6.477 3 2 6.686 2 11c0 2.466 1.39 4.67 3.57 6.137-.12.76-.54 2.174-1.56 3.563 0 0 2.086-.206 3.94-1.383A12.9 12.9 0 0012 19c5.523 0 10-3.686 10-8s-4.477-8-10-8z" />
        </svg>
        <span className="text-sm font-semibold text-white">카카오 상담</span>
      </a>
      <a
        href={TEL}
        className="flex items-center gap-2 bg-pink-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-pink-400 transition"
        aria-label="전화하기"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.09l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a.75.75 0 01-.82.267 12.035 12.035 0 01-7.143-7.143.75.75 0 01.267-.82l1.293-.97a1.125 1.125 0 00.417-1.173L6.962 3.102a1.125 1.125 0 00-1.09-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        <span className="text-sm font-semibold">전화하기</span>
      </a>
    </div>
  );
}

// ===== 홈페이지(회사 소개) =====
function HomePage() {
  const openKakao = () => window.open(KAKAO_URL, "_blank", "noopener,noreferrer");

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              노출 없는 안전한 연결,<br />
              <span className="text-pink-400">PSN</span>이 시작합니다
            </h1>
            <p className="mt-4 text-white/80">
              차량 주차연락부터 개인 프라이버시, 대표번호까지.
              실제 번호를 숨기고도 필요한 연락만 받도록 돕는 가상번호 서비스.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="#/apply" className="px-5 py-3 rounded-2xl bg-pink-500/90 hover:bg-pink-500 transition font-semibold">온라인 신청</a>
              <button onClick={openKakao} className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 transition">카카오로 상담</button>
              <a href={TEL} className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 transition">전화 연결 (1533-7528)</a>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-white/10 to-pink-500/10 p-8">
            <ul className="grid sm:grid-cols-2 gap-4 text-sm">
              <li className="rounded-2xl bg-white/5 p-4">
                <div className="font-semibold">차량용 안심번호</div>
                <div className="mt-1 opacity-80">주차 시 번호 노출 없이 연락 수신</div>
              </li>
              <li className="rounded-2xl bg-white/5 p-4">
                <div className="font-semibold">개인 프라이버시</div>
                <div className="mt-1 opacity-80">거래·모임·공유 시 안전한 연락</div>
              </li>
              <li className="rounded-2xl bg-white/5 p-4">
                <div className="font-semibold">대표번호(사업용)</div>
                <div className="mt-1 opacity-80">대표번호: 1533-7528</div>
              </li>
              <li className="rounded-2xl bg-white/5 p-4">
                <div className="font-semibold">스팸/야간 차단</div>
                <div className="mt-1 opacity-80">시간대·수신 정책 맞춤 설정</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 모바일 하단 액션 */}
      <FloatingActions />

      <Footer />
    </div>
  );
}

// ===== 신청서 페이지 =====
function ApplyPage() {
  const openKakao = () => window.open(KAKAO_URL, "_blank", "noopener,noreferrer");

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <section className="space-y-2">
          <a href="#/" className="text-xs opacity-70 hover:opacity-100">← 홈페이지로 돌아가기</a>
          <h2 className="text-2xl font-bold">온라인 가입신청서</h2>
          <p className="text-sm opacity-80">차량용/개인용 안심번호를 신청하시려면 아래 폼을 작성해주세요.</p>
        </section>

        <div className="rounded-2xl overflow-hidden bg-white">
          <iframe
            title="PSN 온라인 가입신청서"
            src={FORM_URL}
            width="100%"
            height="1700"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
          >
            로드 중…
          </iframe>
        </div>

        <section className="space-y-3">
          <button
            onClick={openKakao}
            className="w-full py-3 rounded-2xl bg-pink-500/85 hover:bg-pink-500 transition text-white font-medium"
          >
            문의는 카카오 오픈채팅으로
          </button>
          <a href={TEL} className="block text-center py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition font-medium text-white">
            전화 연결 (1533-7528)
          </a>
          <p className="text-xs opacity-70 text-center">폼 작성이 어려우시면 전화나 카카오로 간단 접수 도와드려요.</p>
        </section>
      </main>

      {/* 모바일 하단 액션 */}
      <FloatingActions />

      <Footer />
    </div>
  );
}


/* ===============================
   ADD/REPLACE THESE FILES TOO
   =============================== */

/* ---- /index.html (Vite 기본 템플릿, 직접 iframe 넣지 마세요) ---- */
/*
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PSN | Privacy Secret Number</title>
  </head>
  <body class="bg-black">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
*/

/* ---- /src/main.tsx (App 마운트) ---- */
/*
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind 사용중이면 유지

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
