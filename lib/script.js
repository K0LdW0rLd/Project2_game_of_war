console.log('I Work!!!')

//Create a class for Player
class Player {
  constructor (playerName) {
    let newName = playerName[0].toUpperCase() + playerName.slice(1);
    this.playerName = newName
    this.playerDeck = [] //Possibly delete may be redundant
  }
}

//Create a class for card
class Card {
  constructor (rank, suit, value) {
  this.rank = rank
  this.suit = suit
  this.value = value
  }
}
//Create a class for deck
class Deck {
  constructor () {
    this.card = []
    const ranks = [
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
    const suits = [
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
//Create a class for game
class Game {
  constructor (gameName) {
    let newName = gameName[0].toUpperCase() + gameName.slice(1);
    this.gameName = newName
    this.player = []
    this.deck = []
  }
  addDeck(newCards){
    this.deck.push(newCards)
  }
  //Insert add player method
  addPlayer(newPlayer) {
    if (this.player.length >= 2){
      console.log('There are already 2 players');
    }
    else {
      this.player.push(newPlayer)
    }
  }
  //Shuffle the cards
  shuffle(cards) {
    cards.sort(() => Math.random() - 0.5);
    console.log ('Shuffled')
    let init = true
    if(init = true){
      console.log('Pass the Cards')
    } else {
      console.log('Shuffle the deck')
    }
  }
   passCardsOne() {
     console.log('Player One Ready')
  }
   passCardsTwo(data) {
      console.log('Player Two Ready')
  }
}

// Create Object Game for War
const war = new Game('card war')
console.log(war); //Just So I can see

// Create Deck
const deck = new Deck()
// console.log(deck.card) //Just So I can see

// Create players
const playerOne = new Player('playerOne')
const playerTwo = new Player('playerTwo')

// Add players to game
war.addPlayer(playerOne); //add player one to game
war.addPlayer(playerTwo); //add player two to game

// Add deck to war
war.addDeck(deck); //add deck to game

// Shuffle the deck
war.shuffle(deck.card)

const playerOneDeck = war.deck[0].card.splice(0, 26) // Draft cards
const playerTwoDeck = war.deck[0].card // Draft cards
playerOne.playerDeck.push(playerOneDeck)
playerTwo.playerDeck.push(playerTwoDeck)

//Event Listener
document.addEventListener('Pass the Cards', war.passCardsOne()) //Trying to get it to splice the new cards but it is not working
document.addEventListener('Player One Ready', war.passCardsTwo())

console.log(playerOne)
console.log(playerTwo)
