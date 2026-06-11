/* =======================================
 * Highlax SvgDefs
 * URL: /src/components/SvgDefs.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-06-09
 * Last updated: 2026-06-09
 * ======================================= */

'use client';

import { useEffect, useState } from 'react';

export default function SvgDefs() {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    fetch('/svg/object.svg')
      .then((response) => response.text())
      .then((text) => setSvgContent(text));
  }, []);

  return (
    <div
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      aria-hidden="true"
    />
  );
}
