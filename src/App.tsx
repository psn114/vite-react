export default function App() {
  const kakaoUrl = "https://open.kakao.com/o/sZvu7dZh"; // 카카오 오픈채팅
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdEnMV74BzJ8FcFjbEtKtfbhVZ5x0Y61oizrJ8fVuevgJ1Arw/viewform?embedded=true";

  const openKakao = () =>
    window.open(kakaoUrl, "_blank", "noopener,noreferrer");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-base sm:text-lg font-semibold">
            노출 없는 안전한 연결,
          </h1>
          <button
            onClick={openKakao}
            className="px-3 sm:px-4 py-2 rounded-2xl bg-pink-500/85 hover:bg-pink-500 transition text-sm sm:text-base"
          >
            카카오로 문의
          </button>
        </div>
        <div className="max-w-3xl mx-auto px-4 pb-3">
          <p className="text-xs sm:text-sm opacity-90">PSN이 시작합니다</p>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <section className="space-y-2">
          <h2 className="text-xl font-bold">온라인 가입신청서</h2>
          <p className="text-sm opacity-80">
            차량용/개인용 안심번호를 신청하시려면 아래 폼을 작성해주세요.
          </p>
        </section>

        {/* Google Form Embed */}
        <div className="rounded-2xl overflow-hidden bg-white">
          <iframe
            title="PSN 온라인 가입신청서"
            src={formUrl}
            width="100%"
            height="1650" // 폼이 길어질 경우 1800~2000까지 늘리세요
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
            신청/문의는 카카오 오픈채팅으로
          </button>
          <p className="text-xs opacity-70">
            폼 작성이 어려우시면 카카오 채팅으로 문의 주세요. 간단히 접수 도와드립니다.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-4 py-10 opacity-60 text-xs">
        © PSN | Privacy Secret Number
      </footer>
    </div>
  );
}
