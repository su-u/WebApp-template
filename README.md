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

## バックエンド
- express

## テスト
- jest
- enzyme

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
## Firebase deploy方法
```
firebase deploy
```