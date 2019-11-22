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
      '10'
      'Jack',
      'Queen',
      'King''
    ]
    let suits = [
      'Hearts',
      'Diamonds',
      'Spade',
      'Club'
    ]
    for (let i = 0; i < ranks.length; i++) {
      for (let j = 0; j < suits.length; j++) {
        let rank = ranks[i]
        let suit = suits[j]
        let value = i

        this.cards.push(new Card(rank, suit, value))
      }
    }
  }
}
