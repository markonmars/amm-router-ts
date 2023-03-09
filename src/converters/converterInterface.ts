import { Pool } from "../types/pool";

export interface Converter {

    generatePools(pools: any[]) : Pool[]
}