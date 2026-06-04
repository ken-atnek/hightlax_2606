# SEO初期設定メモ

このファイルは、新規サイト立ち上げ時のSEO設計メモです。  
コンテンツ未確定のため、まずは必要項目の枠だけ用意します。

---

## サイト基本情報

- サイト名:
- ドメイン:
- 公開URL:
- 公開ステータス:

---

## ページ別メタ情報

### トップページ `/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 下層ページ1

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 下層ページ2

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

---

## 初期実装で必要なSEO項目

- `metadata`
- `robots.ts`
- `sitemap.ts`
- OGP画像の管理方針
- canonical設計

---

## 注意点

- 仮公開中は `noindex` を検討
- 本番URL確定前に canonical を仮置きしすぎない
- title / description は後から差し替え前提でOK
