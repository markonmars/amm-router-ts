import Long from "long"
import { osmosisConverter } from "../../src/converters/osmosis"

describe('Osmosis Converter Tests', () => {
    test('Can convert osmosis lcd pools', () => {
        const convertedPools = osmosisConverter.generatePools(pools)
        const pool0 = convertedPools[0]

        // Identifiers
        expect(pool0.address === pool0Address)
        expect(pool0.id === new Long(Number(pool0Id)))

        //pool tokens
        //
        //denoms
        expect(pool0.poolAssets[0].token.denom === pool0Denom0)
        expect(pool0.poolAssets[1].token.denom === pool0Denom1)
        // amounts
        expect(pool0.poolAssets[0].token.amount === pool0Amount0)
        expect(pool0.poolAssets[1].token.amount === pool0Amount1)
        // fees
        expect(pool0.swapFee === pool0Fee)
    })
})
const pool0Address = "osmo1mw0ac6rwlp5r8wapwk3zs6g29h8fcscxqakdzw9emkne6c8wjp9q0t3v8t"
const pool0Id = "1"
const pool0Denom0 = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
const pool0Amount0 = "2445095022659"
const pool0Fee = "0.002000000000000000"
const pool0Denom1 = "uosmo"
const pool0Amount1 = "33231240037966"
const pools : any = [
    {
        "@type": "/osmosis.gamm.v1beta1.Pool",
        "address": pool0Address,
        "id": pool0Id,
        "pool_params": {
          "swap_fee": pool0Fee,
          "exit_fee": "0.000000000000000000",
          "smooth_weight_change_params": null
        },
        "future_pool_governor": "24h",
        "total_shares": {
          "denom": "gamm/pool/1",
          "amount": "238259570640506699981527906"
        },
        "pool_assets": [
          {
            "token": {
              "denom": pool0Denom0,
              "amount": pool0Amount0
            },
            "weight": "536870912000000"
          },
          {
            "token": {
              "denom": pool0Denom1,
              "amount": pool0Amount1
            },
            "weight": "536870912000000"
          }
        ],
        "total_weight": "1073741824000000"
      },
      {
        "@type": "/osmosis.gamm.v1beta1.Pool",
        "address": "osmo1500hy75krs9e8t50aav6fahk8sxhajn9ctp40qwvvn8tcprkk6wszun4a5",
        "id": "2",
        "pool_params": {
          "swap_fee": "0.005000000000000000",
          "exit_fee": "0.000000000000000000",
          "smooth_weight_change_params": null
        },
        "future_pool_governor": "24h",
        "total_shares": {
          "denom": "gamm/pool/2",
          "amount": "273819297044372582340570024"
        },
        "pool_assets": [
          {
            "token": {
              "denom": "uion",
              "amount": "637623101"
            },
            "weight": "858993459200000"
          },
          {
            "token": {
              "denom": "uosmo",
              "amount": "180486655677"
            },
            "weight": "214748364800000"
          }
        ],
        "total_weight": "1073741824000000"
      }
]