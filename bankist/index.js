/////////////////////////////////////////////////////////////
//Data
const account1 = {
    owner: 'Kevin Wasonga',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111
}

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Jonas Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};


const accounts = [account1, account2, account3, account4];

const appContainer = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
const labelBalance = document.querySelector(".balance__value");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumIn = document.querySelector(".summary__value--in");

const btnLogin = document.querySelector(".login__btn");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const welcomeLabel = document.querySelector(".welcome");
////////////////////////////////////////////
//Function
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  
  const movs = sort ? movements.slice().sort((a, b) => a -b) : movements;

  movs.forEach(function( mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

const calcDisplayBalance = function (acc) {
  //Realtime inst
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
}
 
const calcDisplaySummary = function (acc) {
  //Incomes
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);

  const out = acc.movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(out)}€`;
};


const updateUI = function(acc) {
  //Display movement
  displayMovements(acc.movements);

  //Display balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
}


/////////////////////////////////////////////////
//Event handlers
let currentAccount;


btnLogin.addEventListener('click', function (e) {
    //Prevent form from submitting 
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.owner === inputLoginUsername.value);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        //Display UI and message 
        welcomeLabel.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
        //Clear input fields
        inputLoginPin.value = '';
        inputLoginUsername.value = '';
        inputLoginPin.blur();
         
        //Update UI
        appContainer.style.opacity = 100;


        updateUI(currentAccount);
    }
})