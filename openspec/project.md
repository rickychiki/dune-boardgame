# Project: Dune Imperium Uprising (Web Edition)

## 1. 專案目標
基於 `boardgame.io` 開發《沙丘：崛起》的網頁模擬版。
- **架構**: 完全無後端（Client-side only），利用 Web Worker 運行遊戲邏輯。
- **資產**: 採動態加載模式，由使用者自行上傳圖片/音效，代碼層僅負責邏輯與 ID 映射。
- **擴展性**: 核心機制（Mechanics）需與遊戲內容（Content）解耦，以便未來開發其他桌遊。

## 2. 📁 目錄結構與職責 (Directory Structure)

```text
src/
├── core/                # 【跨遊戲通用機制】(不含任何沙丘特定術語)
│   ├── mechanics/
│   │   ├── worker-placement/  # 通用工放：處理 Slot 狀態、佔位驗證與回收
│   │   ├── deck-building/     # 通用牌庫：提供 Shuffle, Draw, Burn 等原子操作
│   │   └── resource-manager/  # 通用資源：處理代價檢查與加減邏輯
│   └── utils/                 # 純數學或陣列處理工具 (如：洗牌演算法)
│
├── game/                # 【沙丘：崛起專屬實作】
│   ├── ai/              # AI 行為與決策
│   │   ├── index.ts       # 動作枚舉 (enumerate: 列出所有當前合法 Move)
│   │   └── objective.ts   # 評分函數 (Heuristics: 定義資源與分數的權重)
│   ├── data/            # 遊戲配置 (僅存放純資料 Data Object)
│   │   ├── locations.ts     # 具體地點定義 (實作 core 的 Slot 介面)
│   │   ├── cards.ts         # 所有卡牌的數值、標籤與特殊效果描述
│   │   └── leaders.ts       # 領袖角色能力定義
│   ├── moves/           # BGIO Moves (橋接 UI 操作與 core 引擎)
│   │   ├── agent-moves.ts   # 處理特使派遣邏輯
│   │   └── market-moves.ts  # 處理購買卡牌邏輯
│   ├── phases/          # 遊戲階段 (Round, Combat, Recall, Setup)
│   ├── game.ts          # boardgame.io Game Object 定義入口
│   └── types.ts         # 全域 GameState 與 TypeScript Interface 定義
│
├── assets/              # 資產處理系統 (Blob URL 映射與 File Loader)
├── components/          # React UI 組件 (僅負責呈現 G 與發送 Move)
│   ├── Board/           # 地圖主體與格位渲染
│   ├── Hand/            # 玩家手牌與操作介面
│   └── Market/          # 帝國列與卡牌顯示
├── hooks/               # 自定義 React Hooks (如：useGameState, useAsset)
└── App.tsx              # BGIO Client 配置、Lobby 與資產上傳介面