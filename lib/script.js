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

// Create Object Game for War
const war = new Game('card war')
console.log(war);

// Create Deck
const deck = new Deck()
console.log(deck.card)

// Create player1
const playerOne = new player1('playerOne')
console.log(playerOne)

// Create player2
const playerTwo = new player2('playerTwo')
console.log(playerTwo) 

//Shuffle the cards
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(deck.card)
console.log(deck.card)
