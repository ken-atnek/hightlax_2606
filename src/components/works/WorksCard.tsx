/* =======================================
 * Highlax WORKS カード
 * URL: /src/components/works/WorksCard.tsx
 * Referenced in: /src/components/works/WorksArchive.tsx
 * Created: 2026-06-11
 * Last updated: 2026-06-11
 * ======================================= */

import Image from 'next/image';
import styles from './WorksCard.module.scss';
import { worksCategoryLabels, type WorksItem } from '@/data/works';

type WorksCardProps = {
  item: WorksItem;
};

export default function WorksCard({ item }: WorksCardProps) {
  return (
    <li className={styles.worksCard}>
      <div className={styles.imageWrap}>
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          width={420}
          height={520}
        />
      </div>
      <h2>{item.title}</h2>
      <p>{worksCategoryLabels[item.category]}</p>
    </li>
  );
}
