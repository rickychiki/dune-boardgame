# Specification: Game Engine Foundation

## ADDED Requirements

### Requirement: Player Resources
The system SHALL maintain each player's resource pool consisting of three resource types: Water, Spice, and Solari (Sun Currency).

#### Scenario: Initialize player resources
- **WHEN** a game is setup
- **THEN** each player starts with initial allocations: water=0, spice=0, solari=5

#### Scenario: Retrieve player resources
- **WHEN** querying player state
- **THEN** resources are available as a typed object with water, spice, and solari properties


### Requirement: Location Slot Interface
The system SHALL provide a standardized slot interface for all location placements on the board.

#### Scenario: Define location slot properties
- **WHEN** a location is configured
- **THEN** it provides: locationId, slotIndex, occupiedBy (null or playerId), and actionType

#### Scenario: Query slot occupancy
- **WHEN** checking a slot's state
- **THEN** return null if empty or the occupying player's ID if occupied


### Requirement: Game State Container
The system SHALL maintain a complete game state that tracks all players, board positions, and turn progression.

#### Scenario: Initialize complete game state
- **WHEN** game starts
- **THEN** GameState includes players array, board locations, current phase, and whose turn it is

#### Scenario: Access game context from any module
- **WHEN** a module needs current game data
- **THEN** GameState provides a uniform interface accessible to moves, phases, and AI systems


### Requirement: boardgame.io Game Object
The system SHALL provide a Game object that conforms to boardgame.io specifications for Client+BGIO integration.

#### Scenario: Setup game initial state
- **WHEN** Game.setup is invoked
- **THEN** return a complete GameState with all players initialized and ready

#### Scenario: Define game phases
- **WHEN** game runs
- **THEN** phases are defined and transitions are controlled through the phase system

#### Scenario: Register moves
- **WHEN** a player requests an action
- **THEN** the game invokes the appropriate move handler registered in the Game object
