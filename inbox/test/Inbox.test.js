const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor
const web3 = new Web3(ganache.provider()); // instance
const { interface, bytecode } = require('../compile');

// Web3 v0.x.x - "primitive" interface - only callbacks for async code
// Web3 v1.x.x - support for promises + async/await

let accounts;
let inbox;

beforeEach(async() => {
    // Get a list of all accounts
    // Almost every web3 function is asynchronous - returns a promise
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface)) // javascript representation of a contract
        .deploy({ data: bytecode, arguments: ['Salut, tout le monde!'] })
        .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    });
})





















































// Test class Car
/* class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

let car;

beforeEach(() => {
    car = new Car();
})

describe('Car', () => {
    it('can park', () => {
        assert.equal(car.park(), 'stopped');
    });

    it('can drive', () => {
        assert.equal(car.drive(), 'vroom');
    })
}); */