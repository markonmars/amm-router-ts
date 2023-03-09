#AMM-Router-ts

This library provides route finding for amm pools, by iterating over the available pools and finding the most efficient route, factoring in liquidity/slippage and pool fees.

It does this without querying the chain, so that it is performant.

This is useful for liquidators, arbitraguers and Front Ends.

##Usage

```ts
import { AMMRouter } from "amm-router-ts"

// initiate router
const ammRouter = new AMMRouter()

```

**Importing pools**

To be able to utilise the router you must first load in some pools. You must load the pool data yourself, and pass it to the router by using one of the converters. 

```ts
import { AMMRouter, osmosisConverter } from "amm-router-ts"
// load pools from rest api / contract etc
const pools = ...
ammRouter.setPools(pools, osmosisConverter)
```

If the specific AMM you want to use is not supported, you can implement it yourself.

```ts
const customAMM : ConverterInterface = {
    generatePools(pools: any[]): Pool[] {
        // map your pools here to the `Pool` type 
        return newPools
    }
}
```

**Finding Routes**

Once you have supplied your pool data, you have a few options available to find the best routes:

```ts


const tokenIn = 'usdc'
const tokenOut = 'umars'

// Find best route given the token denom and amount I am supplying
const route : RouteHop[] = ammRouter.getBestRouteGivenInput(tokenIn, tokenOut, '100000000')

// Find best route given the denom of the token that I want to buy and amount I am supplying
const route : RouteHop[] = ammRouter.getBestRouteGivenOutput(tokenIn, tokenOut, '100000000')
```