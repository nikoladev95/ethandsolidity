const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'six such deny arm bone gold print jazz february shrug shoulder spell',
    'https://goerli.infura.io/v3/401b1968ff20401589e24ada5e572b85'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account: ', accounts[0]);
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Salut, tout le monde!'] })
        .send({ gas: '1000000', from: accounts[0] });
    console.log('Contract deployed to: ', result.options.address);
    provider.engine.stop(); // prevents a hanging contract deployment
};

deploy();