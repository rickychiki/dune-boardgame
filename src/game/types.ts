/**
 * Core type definitions for Dune Imperium Uprising game state
 * These interfaces define the shape of all game data and player state
 */

/**
 * Player resource pool: the three currencies in Dune
 * - water: Essential resource for survival
 * - spice: Trade commodity and victory point source
 * - solari: Sun currency for market purchases
 */
export interface PlayerResources {
  water: number;
  spice: number;
  solari: number;
}

/**
 * Location slot on the board where players can place agents
 * Part of the worker-placement mechanism
 */
export interface LocationSlot {
  /** Unique identifier for this location slot */
  locationId: string;

  /** Index of this slot within the location (0+ if multiple slots per location) */
  slotIndex: number;

  /** Player ID currently occupying this slot, or null if empty */
  occupiedBy: string | null;

  /** Type of action this slot grants (e.g., "gain-water", "trade-spice") */
  actionType: string;
}

/**
 * Board representation containing all location slots
 */
export interface Board {
  /** Array of all location slots on the board */
  locations: LocationSlot[];
}

/**
 * Complete player state, including resources, agents, and personal data
 */
export interface PlayerState {
  /** Unique player identifier */
  playerId: string;

  /** Player's display name */
  name: string;

  /** Player's resource pool */
  resources: PlayerResources;

  /** Number of agents currently available to place */
  agentsAvailable: number;

  /** Number of agents currently on the board */
  agentsOnBoard: number;

  /** Player's hand of cards (card IDs) */
  hand: string[];

  /** Player's influence tokens in various factions */
  influence: Record<string, number>;

  /** Player's score */
  score: number;
}

/**
 * Complete game state compatible with boardgame.io
 * This is the central source of truth for all game data
 */
export interface GameState {
  /** Array of all players in turn order */
  players: PlayerState[];

  /** The board with all location slots */
  board: Board;

  /** Current player index (index into players array) */
  currentPlayer: number;

  /** Current game phase (e.g., "setup", "revival", "deployment", "combat") */
  currentPhase: string;

  /** Current round number (1-indexed) */
  round: number;

  /** Deck of cards available for purchase/drawing */
  deck: string[];

  /** Cards currently in the market/empire row */
  market: string[];

  /** Discard pile */
  discard: string[];

  /** Tracks which players have recalled agents (used in recall phase tracking) */
  hasRecalled: Set<string>;

  /** Game metadata and configuration */
  metadata?: {
    /** Game variant or rule set name */
    variant?: string;

    /** Seed for reproducible random generation */
    seed?: number;

    /** Timestamp when game was created */
    createdAt?: number;
  };
}

/**
 * Move payload interface for type-safe move handlers
 * Extend this for specific move types
 */
export interface MovePayload {
  /** The player ID making the move */
  playerId: string;

  /** Timestamp of the move */
  timestamp: number;
}

/**
 * Agent placement move payload
 */
export interface PlaceAgentMove extends MovePayload {
  /** Location ID where agent is being placed */
  locationId: string;

  /** Slot index within that location */
  slotIndex: number;
}

/**
 * Card market purchase move payload
 */
export interface BuyCardMove extends MovePayload {
  /** Index of card in the market (0-based) */
  marketIndex: number;

  /** Type of currency used to pay (water, spice, or solari) */
  currencyType: "water" | "spice" | "solari";
}
