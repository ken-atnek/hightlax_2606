## コーディング規約

### CSS方針

- Tailwind CSS は使用しない
- スタイルは SCSS で実装する
- モバイルファーストの新規実装では、文字サイズは `fs-fluid()` を優先する
- `fz()` は既存コード互換（レガシー）として扱い、新規では原則使わない
- 同階層のセレクタやネストブロック間には、意味のない空白行を入れない
- 空白行はセクションの切れ目やコメント区切りがある時だけ使う
- `npm run lint:style` はチェック専用として扱い、自動整形は `npm run lint:style:fix` を明示実行する
- `lint:style:fix` 実行後も、ネスト内に不要な空白行が残っていれば手で詰める
- `scss` 生成時は、依頼があるまでスマホ用の記述は追加しない
- `@include sp` などのモバイル向け分岐は、必要になった段階で追記する

### フォント実装方針

- フォント指定は `src/styles/foundation/_typography.scss` に集約する
- `globals.scss` にはフォント名を直書きしない
- `mixin` 名は役割名ではなく実フォント名ベースで付ける
- `next/font/google` の `variable` 名も実フォント名ベースで統一する

#### 例

```scss
@mixin ibm-plex-sans-jp {
    font-family: var(--font-ibm-plex-sans-jp), "IBM Plex Sans JP", sans-serif;
}

@mixin radio-canada-big {
    font-family: var(--font-radio-canada-big), "Radio Canada Big", sans-serif;
}
```

#### 補足

- 全体の基本フォントは `body` にだけ指定する
- 個別パーツで別フォントを使う場合は各 `module.scss` 側で `@include` する
- 未使用のフォント定義・フォント用ユーティリティクラスは残さない

### リンク実装方針

- 生の `a` タグは使わない
- 内部遷移は `Link` を使う
- 外部遷移は `ExternalLink` を使う

#### 共通配置

```text
src/components/common/ExternalLink.tsx
```

#### 方針

- `ExternalLink` で `target="_blank"` と `rel="noopener noreferrer"` を共通化する
- 外部リンクの属性指定を各コンポーネントに分散させない

### 画像実装方針

- TSX では生の `img` タグは原則使わず、`next/image` の `Image` を使う

### 改行データ方針

- 改行が必要な文言は文字列配列で管理し、1要素を1行として描画する
- 句読点（`、` `。`）を使った自動改行は行わない

### ファイル種別ごとの命名規則

| ファイル | 命名規則          | 例                                                   |
| -------- | ----------------- | ---------------------------------------------------- |
| `.scss`  | ケバブケース      | `.my-button`, `$primary-color`, `@mixin flex-center` |
| `.tsx`   | キャメル/パスカル | `MyComponent`, `useState`, `handleClick`             |

**理由**: SCSSとTSXで命名規則を混在させない（可読性・保守性向上）

### コンポーネントとSCSSの配置ルール

- コンポーネントの `tsx` と `module.scss` は同階層に置く
- 部品単位でファイルをまとめ、関連ファイルを分散させない
- 共通パーツは `src/components/common/` 配下に配置する
- ページ専用パーツは `src/components/{page}/` 配下にまとめる
- ページ専用パーツのファイル名は、どのページ用か分かる名前を先頭に付ける
- 汎用名だけの `Hero` `Intro` `Section` は避け、`TopHero` のように用途を明示する

#### 例

```text
src/components/common/Header.tsx
src/components/common/Header.module.scss
src/components/common/Footer.tsx
src/components/common/Footer.module.scss
src/components/top/TopHero.tsx
src/components/top/TopHero.module.scss
```

#### ページ専用コンポーネント命名例

- TOPページ: `TopHero`, `TopAbout`, `TopServiceList`
- Serviceページ: `ServicePageHero`, `ServiceCategoryNav`
- Worksページ: `WorksPageHero`, `WorksGallery`

### SVG実装方針

- 共通ロゴや共通アイコンを `svg sprite` で使う場合は `public/svg/object.svg` にまとめる
- `src/components/SvgDefs.tsx` で `object.svg` を読み込み、`layout.tsx` で全ページ共通読み込みにする
- コンポーネント側では `<use href="#svgId" />` で参照する

### Rootsコンポーネントのクラス命名

- `src/components/roots` 配下では、親ラッパークラスを `root` にしない
- 親ラッパーはコンポーネント名ベースのキャメルケースに統一する
- 例: `RootsHero.tsx` は `styles.rootsHero`、SCSS側は `.rootsHero {}`
