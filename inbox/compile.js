const path = require('path');
const fs = require('fs'); // file system
const solc = require('solc'); // solidity compiler

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];