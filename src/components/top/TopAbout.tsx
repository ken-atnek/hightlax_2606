/* =======================================
 * Highlax TOP About Us セクション
 * URL: /src/components/top/TopAbout.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-06-10
 * Last updated: 2026-06-10
 * ======================================= */

import Image from 'next/image';
import styles from './TopAbout.module.scss';

export default function TopAbout() {
  return (
    <section className={styles.containerAbout}>
      <h2>about us</h2>
      <article>
        <h3>
          Craft something
          <br />
          uniquely yours.
        </h3>
        <div className={styles.itemImage}>
          <Image
            src="/images/top/line-object.webp"
            alt="ワイヤーオブジェクト"
            width={668}
            height={456}
          />
        </div>
        <p>
          LAX PRODUCTIONSは阿蘇を拠点とするデザインスタジオです。
          <br />
          彩りとチカラを与える独創的な創造が、
          <br />
          家具・什器をはじめ住居や商業施設全てを包み込み
          <br />
          空間に唯一無二の価値を与えます。
        </p>
      </article>
    </section>
  );
}
