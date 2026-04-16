# Change: Initialize Dune Game Structure

## Why
建立 Dune Imperium Uprising 遊戲引擎的基礎架構。專案需要一個清晰的 TypeScript 型別系統來定義玩家狀態、資源和遊戲上下文，以及一個符合 boardgame.io 規範的 Game 物件做為核心邏輯入口。

## What Changes
- 創建 `src/game/types.ts`，定義 GameState 主要 Interface，包含玩家資源（水、香料、太陽幣）、地點格位與其他遊戲狀態
- 創建 `src/game/game.ts`，實作符合 boardgame.io 的 Game 物件定義，包含 setup、phases、moves 等基本結構

## Impact
- **Affected specs**: game-engine（新增規格）
- **Affected code**: `src/game/types.ts`（新增）、`src/game/game.ts`（新增）
- **Breaking changes**: 無
- **Developer impact**: 建立所有遊戲邏輯的基礎，後續模組都將依賴這些型別


## Context
本變更為專案初始化，屬於 Stage 1：Creating Changes。完成後才能進行遊戲機制和特殊規則的實作。
