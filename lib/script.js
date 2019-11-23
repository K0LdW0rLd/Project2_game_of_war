console.log('I Work!!!')


//Create a class for cards
class Card {
  constructor (rank, suit, value) {
  this.rank = rank
  this.suit = suit
  this.value = value
  }
}

//Create a class for decks
class Deck {
  constructor () {
    this.card = []
    let ranks = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Jack',
      'Queen',
      'King',
      'Ace'
    ]
    let suits = [
      'Heart',
      'Diamond',
      'Spade',
      'Club'
    ]

    ranks.forEach((rank, value) => {
      suits.forEach(suit => this.card.push(new Card(rank, suit, value)))
    }) // End of deck construction
  }
}

//Create a class for games
class Game {
  constructor (gameName) {
    let newName = gameName[0].toUpperCase() + gameName.slice(1);
    this.gameName = newName
    this.player1 = []
    this.player2 = []
    this.deck = []
  }
  addDeck(newCards){
    this.deck.push(newCards)
  }
}

//Create a class for Players
class Player {
  constructor (playerName) {
    let newName = playerName[0].toUpperCase() + playerName.slice(1);
    this.playerName = newName
    this.playerDeck = [] //Possibly delete may be redundant
  }
}

// Create Object Game for War
const war = new Game('card war')
console.log(war); //Just So I can see

// Create Deck
const deck = new Deck()
console.log(deck.card) //Just So I can see

// Create player1
const playerOne = new player1('playerOne')
console.log(playerOne) //Just so I can see

// Create player2
const playerTwo = new player2('playerTwo')
console.log(playerTwo) //Just so I can see

//Shuffle the cards
/* function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(deck.card) */
//console.log(deck.card) //just so I can see
