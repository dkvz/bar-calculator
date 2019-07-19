
// Tous les prix sont **avec** consigne.
const consos = [
  {
    name: 'Pills',
    price: 2.5,
    deposit: true
  },
  {
    name: 'Waterloo',
    price: 3.0,
    deposit: true
  },
  {
    name: 'Kriek',
    price: 3.0,
    deposit: true
  },
  {
    name: 'Vin',
    price: 3.0,
    deposit: true
  },
  {
    name: 'Coca',
    price: 2.5,
    deposit: true
  },
  {
    name: 'Fanta',
    price: 2.5,
    deposit: true
  },
  {
    name: 'Eau',
    price: 2.5,
    deposit: true
  },
  {
    name: 'Portion fromage',
    price: 4.0,
    deposit: false
  },
  {
    name: 'Saucisse sèche',
    price: 2.0,
    deposit: false
  },
  {
    name: 'Chips',
    price: 1.0,
    deposit: false
  }
];

const deposits = [
  {
    name: 'Gobelet',
    price: 1.0
  },
  {
    name: 'Plateau',
    price: 10.0
  }
];

const consoContainer = document.getElementById('consoContainer');
const depositContainer = document.getElementById('depositContainer');
const template = document.getElementById('template');
const total = document.getElementById('total');
const paidInput = document.getElementById('paidInput');
const toReturn = document.getElementById('toReturn');

const total = 0;

consos.forEach((c, i) => {

});

document.getElementById('topBtn').addEventListener('click', () => {
  window.scrollTo(0, 0);
});

document.getElementById('resetBtn').addEventListener('click', () => {

});