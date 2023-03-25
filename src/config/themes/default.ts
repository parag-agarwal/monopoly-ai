import type Board from '../board'

const board: Board = {
  currencySymbol: '$',
  initialStartingMoney: 200,
  maxHouses: 32,
  maxHousesPerProperty: 4,
  maxHotels: 12,
  maxHotelsPerProperty: 1,
  tiles: [
    {
      name: 'GO',
      description: 'COLLECT $200 SALARY AS YOU PASS.'
    },
    {
      name: 'Mediterranean Avenue',
      description: '$60',
      housePrice: 50,
      groupId: 'brown',
      rent0: 2,
      rent1: 10,
      rent2: 30,
      rent3: 90,
      rent4: 160,
      rent5: 250,
      price: 60
    },
    { name: 'Community Chest', description: 'FOLLOW INSTRUCTIONS ON TOP CARD' },
    {
      name: 'Baltic Avenue',
      description: '$60',
      housePrice: 50,
      groupId: 'brown',
      rent0: 4,
      rent1: 20,
      rent2: 60,
      rent3: 180,
      rent4: 320,
      rent5: 450,
      price: 60
    },
    { name: 'City Tax', description: 'Pay $200' },
    { name: 'Reading Railroad', description: '$200', price: 200 },
    {
      name: 'Oriental Avenue',
      description: '$100',
      housePrice: 50,
      groupId: 'pale-blue',
      rent0: 6,
      rent1: 30,
      rent2: 90,
      rent3: 270,
      rent4: 400,
      rent5: 550,
      price: 100
    },
    { name: 'Chance', description: 'FOLLOW INSTRUCTIONS ON TOP CARD' },
    {
      name: 'Vermont Avenue',
      description: '$100',
      housePrice: 50,
      groupId: 'pale-blue',
      rent0: 6,
      rent1: 30,
      rent2: 90,
      rent3: 270,
      rent4: 400,
      rent5: 550,
      price: 100
    },
    {
      name: 'Connecticut Avenue',
      description: '$120',
      housePrice: 50,
      groupId: 'pale-blue',
      rent0: 8,
      rent1: 40,
      rent2: 100,
      rent3: 300,
      rent4: 450,
      rent5: 600,
      price: 120
    },
    { name: 'Just Visiting' },
    {
      name: 'St. Charles Place',
      description: '$140',
      rent0: 10,
      rent1: 50,
      rent2: 150,
      rent3: 450,
      rent4: 625,
      rent5: 750,
      price: 140
    },
    { name: 'Electric Company', description: '$150', price: 150 },
    {
      name: 'States Avenue',
      description: '$140',
      rent0: 10,
      rent1: 50,
      rent2: 150,
      rent3: 450,
      rent4: 625,
      rent5: 750,
      price: 140
    },
    {
      name: 'Virginia Avenue',
      description: '$160',
      rent0: 12,
      rent1: 60,
      rent2: 180,
      rent3: 500,
      rent4: 700,
      rent5: 900,
      price: 160
    },
    { name: 'Pennsylvania Railroad', description: '$200', price: 200 },
    {
      name: 'St. James Place',
      description: '$180',
      rent0: 14,
      rent1: 70,
      rent2: 200,
      rent3: 550,
      rent4: 750,
      rent5: 950,
      price: 180
    },
    { name: 'Community Chest', description: 'FOLLOW INSTRUCTIONS ON TOP CARD' },
    {
      name: 'Tennessee Avenue',
      description: '$180',
      rent0: 14,
      rent1: 70,
      rent2: 200,
      rent3: 550,
      rent4: 750,
      rent5: 950,
      price: 180
    },
    {
      name: 'New York Avenue',
      description: '$200',
      rent0: 16,
      rent1: 80,
      rent2: 220,
      rent3: 600,
      rent4: 800,
      rent5: 1000,
      price: 200
    },
    { name: 'Free Parking' },
    {
      name: 'Kentucky Avenue',
      description: '$220',
      rent0: 18,
      rent1: 90,
      rent2: 250,
      rent3: 700,
      rent4: 875,
      rent5: 1050,
      price: 220
    },
    { name: 'Chance', description: 'FOLLOW INSTRUCTIONS ON TOP CARD' },
    {
      name: 'Indiana Avenue',
      description: '$220',
      rent0: 18,
      rent1: 90,
      rent2: 250,
      rent3: 700,
      rent4: 875,
      rent5: 1050,
      price: 220
    },
    {
      name: 'Illinois Avenue',
      description: '$240',
      rent0: 20,
      rent1: 100,
      rent2: 300,
      rent3: 750,
      rent4: 925,
      rent5: 1100,
      price: 240
    },
    { name: 'B&O Railroad', description: '$200', price: 200 },
    {
      name: 'Atlantic Avenue',
      description: '$260',
      rent0: 22,
      rent1: 110,
      rent2: 330,
      rent3: 800,
      rent4: 975,
      rent5: 1150,
      price: 260
    },
    {
      name: 'Ventnor Avenue',
      description: '$260',
      rent0: 22,
      rent1: 110,
      rent2: 330,
      rent3: 800,
      rent4: 975,
      rent5: 1150,
      price: 260
    },
    { name: 'Water Works', description: '$150', price: 150 },
    {
      name: 'Marvin Gardens',
      description: '$280',
      rent0: 24,
      rent1: 120,
      rent2: 360,
      rent3: 850,
      rent4: 1025,
      rent5: 1200,
      price: 280
    },
    {
      name: 'Go to Jail',
      description: 'Go directly to Jail. Do not pass GO. Do not collect $200.'
    },
    {
      name: 'Pacific Avenue',
      description: '$300',
      rent0: 26,
      rent1: 130,
      rent2: 390,
      rent3: 900,
      rent4: 1100,
      rent5: 1275,
      price: 300
    },
    {
      name: 'North Carolina Avenue',
      description: '$300',
      rent0: 26,
      rent1: 130,
      rent2: 390,
      rent3: 900,
      rent4: 1100,
      rent5: 1275,
      price: 300
    },
    { name: 'Community Chest', description: 'FOLLOW INSTRUCTIONS ON TOP CARD' },
    {
      name: 'Pennsylvania Avenue',
      description: '$320',
      rent0: 28,
      rent1: 150,
      rent2: 450,
      rent3: 1000,
      rent4: 1200,
      rent5: 1400,
      price: 320
    },
    { name: 'Short Line', description: '$200', price: 200 },
    { name: 'Chance', description: 'FOLLOW INSTRUCTIONS ON TOP CARD' },
    {
      name: 'Park Place',
      description: '$350',
      rent0: 35,
      rent1: 175,
      rent2: 500,
      rent3: 1100,
      rent4: 1300,
      rent5: 1500,
      price: 350
    },
    { name: 'LUXURY TAX', description: 'Pay $100' },
    {
      name: 'Boardwalk',
      description: '$400',
      rent0: 50,
      rent1: 200,
      rent2: 600,
      rent3: 1400,
      rent4: 1700,
      rent5: 2000,
      price: 400
    }
  ],
  chanceCards: [
    {
      title: 'Advance to Go (Collect $200)',
      action: 'move',
      moveToTileId: 'go'
    },
    {
      title: 'Advance to Illinois Avenue - If you pass Go, collect $200',
      action: 'move',
      moveToTileId: 'illinoiseave'
    },
    {
      title: 'Advance to St. Charles Place - If you pass Go, collect $200',
      action: 'move',
      moveToTileId: 'stcharlesplace'
    },
    {
      title:
        'Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times the amount thrown.',
      action: 'movenearest',
      moveToFirstOfGroupId: 'utility',
      rentMultiplier: 10
    },
    {
      title:
        'Advance token to the nearest Railroad and pay owner twice the rental to which he/she is otherwise entitled. If Railroad is unowned, you may buy it from the Bank.',
      action: 'movenearest',
      moveToFirstOfGroupId: 'railroad',
      rentMultiplier: 2
    },
    {
      title: 'Bank pays you dividend of $50',
      action: 'addfunds',
      amount: 50
    },
    {
      title: 'Get out of Jail Free - This card may be kept until needed, or traded/sold',
      action: 'jail',
      jailAction: 'getout'
    },
    {
      title: 'Go Back 3 Spaces',
      action: 'move',
      moveCount: -3
    },
    {
      title: 'Go to Jail - Go directly to Jail - Do not pass Go, do not collect $200',
      action: 'jail',
      jailAction: 'goto'
    },
    {
      title:
        'Make general repairs on all your property - For each house pay $25 - For each hotel $100',
      action: 'propertycharges',
      houseCharges: 25,
      hotelCharges: 100
    },
    {
      title: 'Pay poor tax of $15',
      action: 'removefunds',
      amount: 15
    },
    {
      title: 'Take a trip to Reading Railroad - If you pass Go, collect $200',
      action: 'move',
      moveToTileId: 'readingrailroad'
    },
    {
      title: 'Take a walk on the Boardwalk - Advance token to Boardwalk',
      action: 'move',
      moveToTileId: 'boardwalk'
    },
    {
      title: 'You have been elected Chairman of the Board - Pay each player $50',
      action: 'removefundstoplayers',
      amount: 50
    },
    {
      title: 'Your building loan matures - Collect $150',
      action: 'addfunds',
      amount: 50
    }
  ],
  communityCards: [
    {
      title: 'Advance to Go (Collect $200)',
      action: 'move',
      moveToTileId: 'go'
    },
    {
      title: 'Bank error in your favor - Collect $200 ',
      action: 'addfunds',
      amount: 200
    },
    {
      title: 'Doctor fee - Pay $50',
      action: 'removefunds',
      amount: 50
    },
    {
      title: 'From sale of stock you get $50',
      action: 'addfunds',
      amount: 50
    },
    {
      title: 'Get Out of Jail Free',
      action: 'jail',
      jailAction: 'getout'
    },
    {
      title: 'Go to Jail - Go directly to jail - Do not pass Go - Do not collect $200',
      action: 'jail',
      jailAction: 'goto'
    },
    {
      title: 'Grand Opera Night - Collect $50 from every player for opening night seats',
      action: 'addfundsfromplayers',
      amount: 50
    },
    {
      title: 'Holiday Fund matures - Receive $100',
      action: 'addfunds',
      amount: 100
    },
    {
      title: 'Income tax refund - Collect $20',
      action: 'addfunds',
      amount: 20
    },
    {
      title: 'Life insurance matures - Collect $100',
      action: 'addfunds',
      amount: 100
    },
    {
      title: 'Pay hospital fees of $100',
      action: 'removefunds',
      amount: 100
    },
    {
      title: 'Pay school fees of $150',
      action: 'removefunds',
      amount: 150
    },
    {
      title: 'Receive $25 consultancy fee',
      action: 'addfunds',
      amount: 25
    },
    {
      title: 'You are assessed for street repairs - $40 per house - $115 per hotel',
      action: 'propertycharges',
      houseCharges: 40,
      hotelCharges: 115
    },
    {
      title: 'You have won second prize in a beauty contest - Collect $10',
      action: 'addfunds',
      amount: 10
    },
    {
      title: 'You inherit $100',
      action: 'addfunds',
      amount: 100
    }
  ]
}

export default board
