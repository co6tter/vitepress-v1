# vitepress-v1

## Overview

VitePressを使用した静的サイトジェネレータープロジェクトです。マークダウンファイルから高速で美しいドキュメントサイトを構築できます。Route Rewrites機能を使用してモノレポ構造に対応しています。

## Tech Stack

- **VitePress**: v1.6.3
- **Package Manager**: pnpm@10.6.5
- **Node.js**: Required (LTS version recommended)

## Setup

1. リポジトリをクローン:
```bash
git clone <repository-url>
cd vitepress-v1
```

2. 依存関係をインストール:
```bash
pnpm install
```

## Usage

### 開発サーバーの起動
```bash
pnpm docs:dev
```

### プロダクションビルド
```bash
pnpm docs:build
```

### ビルド結果のプレビュー
```bash
pnpm docs:preview
```

## Directory Structure

```
vitepress-v1/
├── docs/                      # ドキュメントソースファイル
│   ├── .vitepress/            # VitePress設定ディレクトリ
│   │   └── config.mts         # サイト設定ファイル
│   ├── packages/              # モノレポ用パッケージ
│   │   ├── pkg-a/
│   │   │   └── src/
│   │   └── pkg-b/
│   │       └── src/
│   ├── index.md               # ホームページ
│   ├── markdown-examples.md   # Markdownサンプル
│   ├── api-examples.md        # APIサンプル
│   └── more-examples.md       # 追加サンプル
├── package.json               # プロジェクト設定
├── pnpm-lock.yaml             # pnpm依存関係ロックファイル
└── README.md                  # このファイル
```

## License

This repository is for personal/private use only.
