import type Card from './card'
import type Tile from './tile'

/**
 * Represents an empty board, does not make any assumptions on the number of players, or current player states.
 */
export default class Board {
  currencySymbol: String = '$'
  initialStartingMoney: Number = 0
  maxHouses: Number = 0
  maxHousesPerProperty = 0
  maxHotels: Number = 0
  maxHotelsPerProperty: Number = 0

  tiles: Tile[] = new Array()
  chanceCards: Card[] = new Array()
  communityCards: Card[] = new Array()
}
