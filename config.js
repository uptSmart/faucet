
import { stringToPath } from '@cosmjs/crypto'

export default {
    port: 8088, // http port 
    db: {
        path: "./db/faucet.db" // save request states 
    },
    project: {
        name: "Game of NFT",
        logo: "https://interchainnfts.dev/assets/img/banner.e3623744.png",
        deployer: `<a href="#">Ping.pub</a>`
    },
    blockchains: [
        {
            type: 'Ethermint',
            ids: {
                chainId: 1170,
                cosmosChainId: 'Uptick Origin',
            },
            name: "Uptick Origin",
            endpoint: {
                // make sure that CORS is enabled in rpc section in config.toml
                // cors_allowed_origins = ["*"]
                rpc_endpoint: "https://rpc.origin.uptick.network/",
                evm_endpoint: "https://json-rpc.origin.uptick.network/",
            },
            sender: {
                mnemonic: "surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put",
                option: {
                    hdPaths: [stringToPath("m/44'/60/0'/0/0")],
                    prefix: "uoc"
                }
            },
            tx: {
                amount: {
                    denom: "auoc",
                    amount: "5000000000000000000"
                },
                fee: {
                    amount: [
                        {
                            amount: "100000",
                            denom: "auoc"
                        }
                    ],
                    gas: "10000000000000"
                },
            },
            limit: {
                // how many times each wallet address is allowed in a window(24h)
                address: 1, 
                // how many times each ip is allowed in a window(24h),
                // if you use proxy, double check if the req.ip is return client's ip.
                ip: 10 
            }
        },


    ]    
}