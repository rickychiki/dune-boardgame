# Tasks: Initialize Dune Game Structure

## 1. Foundation Type System
- [ ] 1.1 Create `src/game/types.ts` with core interfaces
  - [ ] 1.1.1 Define Player resource object (water, spice, solari)
  - [ ] 1.1.2 Define Location slot interface
  - [ ] 1.1.3 Define GameState interface
  - [ ] 1.1.4 Define Player state interface
  - [ ] 1.1.5 Export all types for use across modules

## 2. Game Engine Entry Point
- [ ] 2.1 Create `src/game/game.ts` boardgame.io Game object
  - [ ] 2.1.1 Setup initial game state (players, resources, board)
  - [ ] 2.1.2 Define game phases structure
  - [ ] 2.1.3 Define initial moves (placeholder for future expansion)
  - [ ] 2.1.4 Export Game object for Client configuration

## 3. Validation & Testing
- [ ] 3.1 Run `openspec validate init-dune-structure --strict`
- [ ] 3.2 Verify TypeScript compilation (no errors in types.ts and game.ts)
- [ ] 3.3 Confirm types are importable from game modules
