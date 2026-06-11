# ページ構成メモ

参照スクリーンショット:

- `docs/screenshot/01_Top.jpg`
- `docs/screenshot/02_Service.jpg`
- `docs/screenshot/03_Works.jpg`

---

## 想定ページ一覧

| ページ | パス | 状態 |
|---|---|---|
| トップページ | `/` | 構成確認済み |
| Service | `/service/` | 構成確認済み |
| Works | `/works/` | 構成確認済み |
| 404 | `/not-found` | 未定 |

---

## トップページ `/`

| # | セクション | 内容 |
|---|---|---|
| 1 | Header | ロゴ、`SERVICE`、`WORKS`、`CONTACT` |
| 2 | Hero | 背景写真 + 中央ロゴ |
| 3 | About Us | セクションラベル、見出し、説明文、右側ビジュアル |
| 4 | Service Intro | 背景写真 + 大きいコピー |
| 5 | Service List | 3サービス一覧、サービス名、補足文、画像、`VIEW SERVICES` |
| 6 | Works Intro | セクションラベル、導入文、`ALL WORKS` |
| 7 | Works Gallery | 横並びの作品画像 + キャッチコピー |
| 8 | Contact CTA | 背景写真 + 問い合わせ導線 |
| 9 | Footer | ロゴ、著作表記 |

---

## 下層ページメモ

### Service `/service/`

- 目的: 提供サービスの紹介
- 主な内容:
  - ページタイトル
  - サービスカテゴリ切り替え
  - 各サービス詳細
  - Works導線
  - Contact CTA
  - Footer
- 必要セクション:
  - Header
  - Page Title
  - Service Navigation
  - Service Detail 01
  - Service Detail 02
  - Service Detail 03
  - Contact CTA
  - Footer

### Works `/works/`

- 目的: 制作実績の一覧表示
- 主な内容:
  - ページタイトル
  - カテゴリ絞り込み
  - 作品カード一覧
  - Contact CTA
  - Footer
- 必要セクション:
  - Header
  - Page Title
  - Category Filter
  - Works Grid
  - Contact CTA
  - Footer

---

## 実装前に決める項目

- サイト名
- ドメイン
- トップページのセクション数
- CTAの目的
- メインカラー
- フォント
  - 日本語: `IBM Plex Sans`
  - 欧文: `Radio Canada Big`
- 画像素材の有無
- Works詳細ページの有無
- Service詳細の切り替え方法

---

## メモ

- 最初はトップページ優先
- 共通パーツは `Header` `Contact CTA` `Footer` を先に意識する
- TOPの余白設計と見出し設計を基準に下層へ展開する
- まずは見た目優先で組み、その後に共通化する
