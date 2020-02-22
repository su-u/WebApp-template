# react-template
reactアプリケーションの自分用テンプレート

# 概要
ある程度簡単にreactを利用したWebアプリケーションを開発する雛形。
バックエンドは自由に変更可能。

# システム
## フロント
- react
- redux
- dev-server
- prettier
- eslint
- styled-components
- babel
- linq

### テスト
- jest
- enzyme

## バックエンド
- express

## PCネイティブ
- electron
- webpack

# Firebaseの利用
- Cloud Firestore
    データベース
- Cloud Functions
    バックエンド
- Hosting
    フロントの配信
- Cloud Storage
    バイナリストレージ
- Performance Monitoring
    パフォーマンス特性
- Google Analytics
    分析

## Firebase アウトバウンドネットワークについて
Firebase無料枠ではアウトバウンドネットワークを利用することはできない。
従量課金制のプランに移行する必要がある。

# 事前準備
- node 10.xのインストール(functionが10を利用）
- yarnのインストール
- firebase-toolsのインストール
- git clone
- `yarn run all-install`

# GitHub Actions
Pull Requestに対して動作するテスト。
- node 10.x

# 使用方法

## frontの開発ビルド
```
yarn run build:d
```

## frontの開発サーバーの起動（WebpackServer)
```
yarn run watch
```

## frontの開発サーバーの起動（Docker + WebpackServer)
```
yarn run watch:docker
```

## Firebase deploy方法
```
firebase deploy
```
## Firebase Functions 開発エミュレーター利用時
```
cd api
yarn run serve

yarn run watch
```

## Electron 開発用実行
```
cd electron
yarn run build
yarn run start
```

## Electron バイナリビルド(Windows x64)
```
yarn run build:p
cd electron
yarn run build
yarn run app-build
```
`/build/electron`にバイナリが生成される


# ディレクトリ構成
