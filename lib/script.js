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
      'Hearts',
      'Diamonds',
      'Spades',
      'Clubs'
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
  passCardsTwo() {
    console.log('Player Two Ready')
  }
  // Creating function to play game
  playGame() {
    for (let i = 0; i < playerOneDeck.length && i < playerTwoDeck.length; i++) {

      if(playerOneDeck[0].length == 0) {
        console.log('Player two wins!')
        return ('Player two wins')
      } else if(playerTwoDeck[0].length == 0) {
        console.log('Player one wins')
        return ('Player one wins')
      } else if(playerOneDeck[0]['value'] > playerTwoDeck[0]['value']) {
        console.log('Player one pulls ' + playerOneDeck[0]['rank'] + ' of '+ playerOneDeck[0]['suit'] + ' ' + 'Player two pulls ' + playerTwoDeck[0]['rank']+ ' of '+ playerTwoDeck[0]['suit'])
        playerOneDeck.push(playerTwoDeck.shift())
        playerOneDeck.push(playerOneDeck.shift())
        console.log(playerOneDeck)
        console.log(playerTwoDeck)
        console.log('Player one wins the round')
        return this.playGame() // Trying to get it to rerun function
      } else if(playerOneDeck[0]['value'] < playerTwoDeck[0]['value']) {
        console.log('Player one pulls ' + playerOneDeck[0]['rank'] + ' of '+ playerOneDeck[0]['suit'] + ' ' + 'Player two pulls ' + playerTwoDeck[0]['rank']+ ' of '+ playerTwoDeck[0]['suit'])
        playerTwoDeck.push(playerOneDeck.shift())
        playerTwoDeck.push(playerTwoDeck.shift())
        console.log('Player two wins the round')
        return this.playGame() // Trying to get it to rerun function
      } else if (playerOneDeck[0]['value'] === playerTwoDeck[0]['value']) {
        console.log('Player one pulls ' + playerOneDeck[0]['rank'] + ' of '+ playerOneDeck[0]['suit'] + ' ' + 'Player two pulls ' + playerTwoDeck[0]['rank']+ ' of '+ playerTwoDeck[0]['suit'])
        playerTwoDeck.push(playerTwoDeck.shift())
        playerOneDeck.push(playerOneDeck.shift())
        console.log('Draw')
        return this.playGame() // Trying to get it to rerun function
      }
     }
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

console.log(playerOne.playerDeck[0].length)
console.log(playerTwo.playerDeck[0].length)
//Event Listener
document.addEventListener('Pass the Cards', war.passCardsOne())
document.addEventListener('Player One Ready', war.passCardsTwo())
document.addEventListener('Player Two Ready', war.playGame())
