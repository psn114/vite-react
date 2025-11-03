export default function Landing() {
  const kakaoUrl = "https://open.kakao.com/o/sZvu7dZh";
  const handleApply = () => {
    window.open(kakaoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-200 via-rose-400 to-rose-600" />
            <div className="leading-tight">
              <div className="text-xl font-semibold tracking-wider">PSN</div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-rose-300/80">
                Privacy Secret Number
              </div>
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_75%_0%,rgba(244,114,182,0.20),transparent_60%)]"/>
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-rose-300/90 text-sm tracking-widest uppercase mb-4">Privacy • Safety • Ease</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            노출 없는 안전한 연결,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-200 via-rose-400 to-rose-600">PSN이 시작합니다</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">
            차량 주차 연락용부터 개인 거래, 영업 대표번호까지. 내 번호는 감추고 필요한 연락만 안전하게 받으세요.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={handleApply} className="rounded-2xl px-6 py-3 font-medium bg-white text-black hover:bg-white/90">안심번호 신청하기</button>
            <a href="#why" className="rounded-2xl px-6 py-3 font-medium border border-white/20 hover:border-white/40">더 알아보기</a>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/80">
            <Stat k="₩10,000" v="월정액" />
            <Stat k="8자리" v="깔끔한 대표번호" />
            <Stat k="1533-7528" v="대표문의" />
          </div>
        </div>
      </section>

      {/* Why */}
      <Section id="why" title="왜 PSN인가">
        <p className="mt-4 text-white/70">
          개인 휴대폰 번호 노출은 스팸, 스토킹, 사기 연락으로 이어질 수 있습니다. PSN은 주차 연락, 중고거래, 영업문의 등
          일상 속 필요한 연결에만 <span className="text-white">가상 안심번호</span>를 제공합니다.
        </p>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { t: "실번호 노출 차단", d: "개인 번호 대신 안심번호로 안전하게 통화/문자." },
            { t: "원하는 기간만", d: "필요할 때 생성하고, 더 이상 필요 없으면 비활성화." },
            { t: "착신/문자 연동", d: "기존 휴대폰으로 자연스럽게 연결." },
          ].map((i, idx) => (
            <li key={idx} className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <div className="text-lg font-medium">{i.t}</div>
              <div className="mt-1 text-white/70">{i.d}</div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Features */}
      <Section id="features" title="주요 기능">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="대표번호 (1811/1877/1533/1555 등)" desc="보기 좋은 8자리로 부여" />
          <Card title="착신전환 & 통화녹음(선택)" desc="기존 휴대폰으로 자연 연결" />
          <Card title="문자 수신" desc="주차 연락 등 문자 응대" />
          <Card title="음성 안내 커스텀" desc="브랜드/개인 맞춤 인사말" />
        </div>
      </Section>

      {/* Steps */}
      <Section id="steps" title="신청 방법">
        <ol className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { n: 1, t: "카카오에서 신청", d: "아래 버튼을 눌러 오픈채팅으로 문의" },
            { n: 2, t: "번호 발급", d: "안심번호 생성 및 라우팅 설정" },
            { n: 3, t: "바로 사용", d: "주차/거래/영업 문의에 즉시 활용" },
          ].map((s) => (
            <li key={s.n} className="rounded-2xl p-5 border border-white/10 bg-white/5">
              <div className="text-sm text-white/60">STEP {s.n}</div>
              <div className="mt-1 text-lg font-medium">{s.t}</div>
              <div className="mt-1 text-white/70">{s.d}</div>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <button onClick={handleApply} className="rounded-2xl px-6 py-3 font-medium bg-white text-black hover:bg-white/90">
            카카오 오픈채팅으로 신청하기
          </button>
        </div>
      </Section>

      {/* Scenarios */}
      <Section id="scenarios" title="활용 시나리오">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Scenario title="차량 주차 연락" desc="대시보드 번호 노출 없이 연락 수신" />
          <Scenario title="중고거래/택배" desc="거래 끝나면 비활성화로 깔끔하게" />
          <Scenario title="영업 대표번호" desc="매장/직원의 개인번호 노출 방지" />
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" title="요금">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-lg font-medium">개인용</div>
            <div className="mt-2 text-3xl font-semibold">
              ₩10,000<span className="text-base font-normal text-white/60"> / 월</span>
            </div>
            <ul className="mt-3 text-white/70 text-sm list-disc list-inside space-y-1">
              <li>안심번호 1개</li>
              <li>통화 착신, 문자 수신</li>
              <li>기본 안내멘트</li>
            </ul>
            <button onClick={handleApply} className="mt-4 w-full rounded-xl px-4 py-2 bg-white text-black">신청하기</button>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/10 ring-1 ring-rose-500/30">
            <div className="text-lg font-medium">비즈니스</div>
            <div className="mt-2 text-3xl font-semibold">문의</div>
            <ul className="mt-3 text-white/70 text-sm list-disc list-inside space-y-1">
              <li>다수번호/IVR/시간대 라우팅</li>
              <li>브랜드 음성/콜로그</li>
              <li>API/대량 발급</li>
            </ul>
            <button onClick={handleApply} className="mt-4 w-full rounded-xl px-4 py-2 bg-white text-black">상담하기</button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3 text-sm text-white/70">
          <div>
            <div className="text-white font-medium">PSN | Privacy Secret Number</div>
            <div className="mt-2">대표번호 1533-7528</div>
            <div className="mt-1">서울 금천구 가산디지털1로 196, 407호</div>
          </div>
          <div>
            <div className="text-white font-medium">빠른 신청</div>
            <button onClick={handleApply} className="mt-2 rounded-xl px-4 py-2 bg-white text-black">카카오 오픈채팅</button>
            <p className="mt-2 text-xs">버튼을 누르면 새 탭으로 열립니다.</p>
          </div>
          <div>
            <div className="text-white font-medium">이용 안내</div>
            <ul className="mt-2 space-y-1">
              <li>개인정보 비공개, 필요 연락만 안전 수신</li>
              <li>중단/비활성화로 깔끔한 종료</li>
              <li>주차번호판(사은품) 연동 가능</li>
            </ul>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-white/50">© {new Date().getFullYear()} PSN114. All rights reserved.</div>
      </footer>
    </div>
  );
}

const Section = ({ id, title, children }: any) => (
  <section id={id} className="mx-auto max-w-6xl px-4 py-16">
    <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
    {children}
  </section>
);

const Stat = ({ k, v }: any) => (
  <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
    <div className="text-2xl font-semibold">{k}</div>
    <div className="text-white/70">{v}</div>
  </div>
);

const Card = ({ title, desc }: any) => (
  <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
    <div className="text-lg font-medium">{title}</div>
    <div className="mt-1 text-white/70">{desc}</div>
  </div>
);

const Scenario = ({ title, desc }: any) => (
  <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
    <div className="text-lg font-medium">{title}</div>
    <div className="mt-1 text-white/70">{desc}</div>
  </div>
);
