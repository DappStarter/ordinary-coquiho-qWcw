require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain hospital imitate prize foam ten'; 
let testAccounts = [
"0xa72197c17a77ee979ae9e03628b517102ea9f0df21fc7b23e3e65b118f528a1f",
"0x94fbfa8be827b03d2953c0de26df9baa59e9f5f56b4e2ae0d4a5221e3d8965f5",
"0xf3ffd4228e7773e270849767fc16633740f611ac970d6690ff2bc2523deba7b3",
"0xc7871c1c80ef73273fd242e3704b131a39d3e5abc1b08a52aaf59562493cca20",
"0xe72ee931f7c5b0173d97b78e5909bc6119b8ee29724debf4831ec3e3c4679d66",
"0x3c3b37dd4ccb71170785fc2656ca8b90bfb93beb6b07f92d668a7830b6efb7da",
"0xf32ff18894f463532a794d9dcb85ebf44fb7429b9aa6ad14d0bc96f6e249df33",
"0xec97d6dcd7c7f082e33a628866c4c8dc92b41e3c33f73ce1818f4bb1ea745e2e",
"0x3c0243f56be65e4373ab56686258fa4375659cbdafe8ec9736ff2dcc5da082e0",
"0x81880bde2e50d2f236bbfe6d129acb24403da8af5bb47403291506104c8bda56"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

