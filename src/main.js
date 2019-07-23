const consoContainer = document.getElementById('consoContainer');
const depositContainer = document.getElementById('depositContainer');
const template = document.getElementById('template');

function formatPrice(price) {
  return price + ' €';
}

// Tous les prix sont **avec** consigne.
const bar = {
  totalEl: document.getElementById('total'),
  paidInputEl: document.getElementById('paidInput'),
  toReturnEl: document.getElementById('toReturn'),
  consos: [
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
    },
    {
      name: 'Portion frites',
      price: 2.5,
      deposit: false
    },
    {
      name: 'Sauce',
      price: 0.5,
      deposit: false
    },
    {
      name: 'Fricandelle',
      price: 1.5,
      deposit: false
    },
    {
      name: 'Cervelas',
      price: 1.5,
      deposit: false
    }
  ],
  deposits: [
    {
      name: 'Gobelet',
      price: 1.0
    },
    {
      name: 'Plateau metal',
      price: 10.0
    },
    {
      name: 'Plateau',
      price: 5.0
    }
  ],
  _resetQty: function(array) {
    array.forEach(e => {
      e.qty = 0;
    });
  },
  _resetAllQties: function() {
    this._resetQty(this.consos);
    this._resetQty(this.deposits);
  },
  initialize: function() {
    this._resetAllQties();
    this.allInputs = document.querySelectorAll('.row input');
  },
  updatePrices: function() {
    // Compute and display prices:
    const totalPrice = this.consos.reduce(
      (acc, c) => acc += c.qty * c.price, 
    0);
    const depositPrice = this.deposits.reduce(
      (acc, c) => acc += c.qty * c.price,
    0);
    const finalPrice = totalPrice - depositPrice;
    this.totalEl.textContent = formatPrice(finalPrice);
    const paid = Number(this.paidInputEl.value);
    if (!isNaN(paid)) {
      this.toReturnEl.textContent = formatPrice(
        paid > finalPrice ? paid - finalPrice : 0
      );
    } else {
      this.toReturnEl.textContent = formatPrice(0);
    }
  },
  reset: function() {
    this._resetAllQties();
    if (this.allInputs) {
      this.allInputs.forEach(i => i.value = '0');
    }
    // Put 0 on totals fields as well:
    this.toReturnEl.textContent = formatPrice(0);
    this.totalEl.textContent = formatPrice(0);
    this.paidInputEl.value = '0';
  }
};

const generateItem = c => {
  const line = template.cloneNode(true);
  line.style.display = '';
  line.querySelector('label').textContent = c.name;
  line.removeAttribute('id');
  line.querySelector('span').textContent = formatPrice(c.price);
  const input = line.querySelector('input');
  line.querySelector('[data-btn-plus]').addEventListener('click', () => {
    input.value = ++c.qty;
    bar.updatePrices();
  });
  line.querySelector('[data-btn-minus]').addEventListener('click', () => {
    if (c.qty !== 0) {
      input.value = --c.qty;
      bar.updatePrices();
    }
  });
  input.addEventListener('input', (e) => {
    const newQty = Number(e.currentTarget.value);
    if (!isNaN(newQty)) {
      c.qty = newQty;
      bar.updatePrices();
    }
  });
  return line;
};

// Display the forms:
bar.consos.forEach(c => consoContainer.appendChild(generateItem(c)));
bar.deposits.forEach(c => depositContainer.appendChild(generateItem(c)));

bar.initialize();

bar.paidInputEl.addEventListener('input', () => {
  bar.updatePrices();
});

document.getElementById('resetBtn').addEventListener('click', () => {
  window.scrollTo(0, 0);
  bar.reset();
});

document.getElementById('goTotalsBtn').addEventListener('click', () => 
  window.scrollTo(0, document.body.scrollHeight)
);