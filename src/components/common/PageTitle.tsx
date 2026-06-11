/* =======================================
 * Highlax 共通ページタイトル
 * URL: /src/components/common/PageTitle.tsx
 * Referenced in: /src/app/works/page.tsx
 * Created: 2026-06-11
 * Last updated: 2026-06-11
 * ======================================= */

import styles from './PageTitle.module.scss';

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <section className={styles.pageTitle} aria-labelledby="page-title">
      <h1 id="page-title">{title}</h1>
    </section>
  );
}
