import { fishOrigins } from "../constants";
import { client } from "./pgsql";

/**
 * Add Fish function interface
 * @param params fish data (name, species, origin)
 */
export type AddFish = (
    params: {
        /** fish name */
        name: string;
        /** fish species */
        species: string;
        /** fish origin (Lake, River, Ocean or Sea) */
        origin: string;
    }
) => Promise<void>;


/**
 * Adds a fish to the database
 * @param params fish data (name, species, origin)
 */
const addFish: AddFish = async (params) => {
    const { name, species, origin } = params

    if (typeof name === "string" && typeof species === "string" && typeof origin === "string" && name && species && origin && fishOrigins.includes(origin)) {
        const preparedStatement = 'INSERT INTO fish (name, species, origin) VALUES ($1, $2, $3)';
        const response = await client.query(preparedStatement, [name, species, origin]);
        console.log(response.rowCount === 1 ? `Successfully added ${name} to the database` : `Failed to add ${name} to the database`);
    } else {
        console.log("Invalid Parameters. Required: --name=<name> --species=<species> --origin=<Lake|River|Ocean|Sea>")
    }
}


export default addFish
