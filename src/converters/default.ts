import { Pool } from "../types/pool";
import { Converter } from "./converterInterface";

export const defaultConverter : Converter = {
    generatePools(pools: any[]): Pool[] {
        return pools
    }
}