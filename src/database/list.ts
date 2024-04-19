import { fishOrigins } from "../constants";
import { client } from "./pgsql";

/**
 * List Fish function interface
 * @param params Optional parameters to filter the list of fish by.
 *               Valid options are: name, species, and origin. All 
 *               except origin are case-insensitive and can use a 
 *               SQL "LIKE" wildcard (%). origin can be one of the
 *               following: "Lake", "River", "Ocean", or "Sea".
 */
type List = (
    params?: {
        name?: string,
        species?: string,
        origin?: string
    }
) => Promise<void>

/**
 * A function that lists fish based on the provided parameters.
 *
 * @param {Object} params - Optional parameters to filter the list of fish by.
 *                         Valid options are: name, species, and origin. All
 *                         except origin are case-insensitive and can use a
 *                         SQL "LIKE" wildcard (%). origin can be one of the
 *                         following: "Lake", "River", "Ocean", or "Sea".
 */
const list: List = async (params) => {
    if (typeof params?.name === 'boolean' || typeof params?.species === 'boolean' || typeof params?.origin === 'boolean' || (params?.origin && !fishOrigins.includes(params?.origin))) {
        console.log("Invalid Parameters. Required: --name=<name> --species=<species> --origin=<Lake|River|Ocean|Sea>")
    } else {
        const preparedStatement = `
        SELECT *
        FROM fish
        WHERE (
            $1::text IS NULL OR name LIKE  '%' || $1 || '%'
          ) AND (
            $2::text IS NULL OR species LIKE '%' || $2 || '%'
          ) AND (
            $3::origin_type IS NULL OR origin = $3
          );
        `;
        const values = [params?.name || null, params?.species || null, params?.origin || null]
        console.log({ values })
        const response = await client.query(preparedStatement, values);
        console.log(response.rows)
    }
}


export default list
