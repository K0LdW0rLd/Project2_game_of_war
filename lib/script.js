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

const deck = new Deck()
console.log(deck.card)

//Shuffle the cards
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(deck.card)
console.log(deck.card)
