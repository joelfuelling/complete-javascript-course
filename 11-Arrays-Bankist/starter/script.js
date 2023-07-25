'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Very common way of organizing Js data, an array of objects.

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//1 - For each movement, we want 1 element shown on the page.

//% The insertAdjacentHTML() method - https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
// Does not reparse the element it is being used on (containerMovements), and thus it does not corrupt the existing elements inside that element. This avoids the extra step of serialization, making it MUCH FASTER than direct innerHTML manipulation.
//    <!-- beforebegin -->
//    <p>
//      <!-- afterbegin -->
//      foo
//      <!-- beforeend -->
//    </p>
//    <!-- afterend -->

// innerHTML vs. innerText - Well, HTML includes all the HTML elements including the text, where as innerText is just the text.

const displayMovements = function (movements) {
  // First empty the container of its default stuff.

  containerMovements.innerHTML = ''; // HTML returns all the HTML tags along with the text. We're using it as a setter here.
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">
      ${i + 1}
    </div>
    <div class="movements__date">24/01/2037</div>
    <div class="movements__value">${mov}</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html); // This accepts 2 arguments. The 1st is the position in which we want to attach the HTML, the 2nd is ACTUAL HTML CONTENT we want to insert.
  });
};
displayMovements(account1.movements);

// Receive the movements as an input, an returns a balance based on the movements array.
// Set the DOM element text content to the reduced account balance
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov, i, arr) => (acc += mov), 0);
  labelBalance.textContent = `${balance} USD`;
};
calcDisplayBalance(account1.movements);

// afterbegin - new elements, will appear BEFORE the previously existing elments
// beforeend - new elements will appear AFTER... You can see why afterbegin is preferable.

//* We want to get the initials of ALL users names in lowercase into a the accounts array.

//# My coded version. it works, but it doesn't create the username forEach and add it to each object like Jonas did, which is super DRY.
// const createUserInitialsArray = accounts.map((user, i) => {
//   let accounts = user.owner.toLowerCase().split(' ');
//   accounts.forEach((n, i) => {
//     accounts[i] = n[0];
//   });
//   accounts = accounts.join('');
//   return accounts;
// });
// console.log(createUserInitialsArray); // ['js', 'jd', 'stw', 'ss']

//# Jonas/code along version
// Here, we're not returning anything, we're creating a "Side Effeect" to happen to the original accounts array, adding the username to each.
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0]) //% returning each 'name' as the first letter [0] of each name with map.
      .join('');
  });
};
createUserNames(accounts);
