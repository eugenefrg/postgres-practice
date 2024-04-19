import { fishOrigins } from "../constants";
import find from "./find";
import { client } from "./pgsql";

/**
 * Update Fish function interface
 * @param params Contains the fish data to update.
 *               Required: ID of the fish to update.
 *               Optional: New name, species, and origin of the fish.
 *               If not specified, the existing value for that field
 *               will be preserved.
 */
type Update = (
    params: {
        id: string,
        name?: string,
        species?: string,
        origin?: string
    }
) => Promise<void>

/**
 * Updates a fish in the database based on the provided parameters.
 *
 * @param {Object} params - The parameters for updating the fish.
 *                         Required: id (number), Optional: name (string), species (string), origin (string).
 *                         If origin is provided, it must be one of the following: "Lake", "River", "Ocean", or "Sea".
 */
const update: Update = async (params) => {
    if (isNaN(Number(params.id)) || typeof params?.name === 'boolean' || typeof params?.species === 'boolean' || typeof params?.origin === 'boolean' || (params?.origin && !fishOrigins.includes(params?.origin))) {
        console.log("Invalid Parameters. Required: --id=<number>, Optional: --name=<name> --species=<species> --origin=<Lake|River|Ocean|Sea>")
    } else {
        const preparedStatement = `
            UPDATE fish
            SET (name, species, origin) = (COALESCE($2, name), COALESCE($3, species), COALESCE($4, origin))
            WHERE id = $1
        `
        const response = await client.query(preparedStatement, [params.id, params?.name || null, params?.species || null, params?.origin || null]);
        if (response.rowCount) {
            console.log(`Successfully updated ${params.id} in the database`)
        } else {
            console.log(`Failed to update ${params.id} in the database`)
        }
        find({ id: params.id })
    }
}


export default update
