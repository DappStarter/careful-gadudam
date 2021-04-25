require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth outside clutch install cart forget gas'; 
let testAccounts = [
"0x48ec4afdbb18b3e41206696aa20e78d1008ae65de2c798c17db5557f0d308238",
"0x910ff7174d2f0c23adfa9901e34948d7d4eda252c5eaed101a4fd0a37e2ed9d4",
"0x0a8071ca41218d6d81757cdacbdab4b5103135a438fae05eff731506d69646f8",
"0x0c824376b54c8afab49f39e7a328b261342e90b098d7ebeee4d321f1b4c1f653",
"0x16eb9e5e02361969d946779dcc37af93f89f8fb952c416dada6ac4e4f64e4710",
"0xe29f3d0b1f6641b1b8f3b617391552d7f2172dc9f7bc332a2d8b4b26bb6b1ed4",
"0x592890297c0c33c21badb723c8d7fb8e1c8a6135a1073abf6fdc322f62fab3ce",
"0x230edc267117e20eca76d86fa33a3fe53d07e94cd5d85c24b823b1a50012dd08",
"0xa56efc0b42e8e9ae727a5651928f729aaf44e38211f29b5fd6e336e02358bb2d",
"0xa6b209cf571d61e3a73f3d6a18e835017633daf1a94bda7b02a4260302ece2b4"
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
            version: '^0.5.11'
        }
    }
};
