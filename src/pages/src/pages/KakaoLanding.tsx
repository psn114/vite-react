export default function KakaoLanding() {
  const formId =
    "1FAIpQLSf56auH6UzuWTpYhFF_W4gX0xk8SYUY_WovBDuFVi1arR4YCA"; // ← Google Form ID
  const formPage = `https://docs.google.com/forms/d/e/${formId}/viewform`;
  const formEmbed = `${formPage}?embedded=true`;

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold">노출 없는 안전한 연결, PSN이 시작합니다.</h1>
        <p className="mt-2 text-white/70">
          신분증 앞면 + 얼굴 인증은 신청서 내 파일 업로드로 진행됩니다.
        </p>
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <iframe
            title="PSN 온라인 신청서"
            src={formEmbed}
            style={{ width: "100%", minHeight: 1200, border: 0 }}
            allowFullScreen
          />
        </div>
        <div className="mt-3 text-center">
          <a
            href={formPage}
            target="_blank"
            rel="noopener"
            className="underline"
          >
            새 창에서 열기
          </a>
        </div>
      </main>
    </div>
  );
}
