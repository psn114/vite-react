// src/App.tsx — PSN114 Landing Page
export default function App() {
  const kakaoUrl = "https://open.kakao.com/o/sZvu7dZh";
  const handleApply = () => {
    window.open(kakaoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-200 via-rose-400 to-rose-600" />
            <div className="leading-tight">
              <div className="text-xl font-semibold tracking-wider">PSN</div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-rose-300/80">Privacy Secret Number</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#why" className="hover:text-white">왜 PSN인가</a>
            <a href="#features" className="hover:text-white">주요 기능</a>
            <a href="#steps" className="hover:text-white">신청 방법</a>
            <a href="#scenarios" className="hover:text-white">활용 시나리오</a>
            <a href="#pricing" className="hover:text-white">요금</a>
          </nav>
          <button onClick={handleApply} className="rounded-2xl px-4 py-2 text-sm font-medium bg-white text-black hover:bg-white/90">
            안심번호 신청하기
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          노출 없는 안전한 연결,<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-200 via-rose-400 to-rose-600">PSN이 시작합니다</span>
        </h1>
        <p className="mt-6 text-white/70 text-lg max-w-2xl">
          차량 주차 연락용부터 개인 거래, 영업 대표번호까지. 내 번호는 감추고 필요한 연락만 안전하게 받으세요.
        </p>
        <div className="mt-8 flex gap-3">
          <button onClick={handleApply} className="rounded-2xl px-6 py-3 font-medium bg-white text-black hover:bg-white/90">
            안심번호 신청하기
          </button>
          <a href="#why" className="rounded-2xl px-6 py-3 font-medium border border-white/20 hover:border-white/40">더 알아보기</a>
        </div>
      </main>
    </div>
  );
}
