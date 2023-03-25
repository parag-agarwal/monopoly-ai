export default class Card {
  title: String = ''
  action: String = ''

  // move number of steps
  moveCount?: Number

  // move to tile
  moveToTileId?: String

  // move to first of group
  moveToFirstOfGroupId?: String
  rentMultiplier?: Number

  // addFunds, removeFunds, collectFromPlayers
  amount?: Number

  // jail - values: goto, getout
  jailAction?: String

  // property Charges
  houseCharges?: Number
  hotelCharges?: Number
}
