/* =======================================
 * Highlax トップページ
 * URL: /src/app/page.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-06-04
 * Last updated: 2026-06-04
 * ======================================= */

export default function Home() {
  return (
    <main className="top-page">
      <header className="site-header">
        <div className="inner">
          <p className="site-header__logo">HIGH LAX</p>
        </div>
      </header>

      <section className="hero">
        <div className="inner">
          <p className="hero__eyebrow">COMING SOON</p>
          <h1 className="hero__title">サイト準備中</h1>
          <p className="hero__text">
            ここからトップページの構成を固めていきます。
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="inner">
          <h2 className="section-title">PAGE STRUCTURE</h2>
          <p className="section-text">
            `docs/PAGE_STRUCTURE.md` をもとに、各セクションを順番に追加します。
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="inner">
          <p className="site-footer__text">© HIGH LAX</p>
        </div>
      </footer>
    </main>
  );
}
