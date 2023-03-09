import { camelCaseKeys } from "../helpers/utils";
import { Pool } from "../types/pool";
import { Converter } from "./converterInterface";

export const osmosisConverter : Converter = {
    generatePools(pools: any[]): Pool[] {
        // do your conversion here
        const refinedPools : Pool[] = []
        pools.forEach((pool) => refinedPools.push(camelCaseKeys(pool) as Pool))
        return refinedPools
    }
}