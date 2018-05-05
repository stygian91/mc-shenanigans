require('promise.prototype.finally').shim();
require('dotenv').config();

const App = require('./src/app');
const ArgumentParser = require('argparse').ArgumentParser;

const parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
});

parser.addArgument(
    ['-p'],
    {
        required: false,
        defaultValue: 3000,
        type: 'int',
        help: 'The port that the webserver will listen to. Default is 3000.'
    }
);
const args = parser.parseArgs();

new App(args.p).start();
