import { client } from "./pgsql";

/**
 * Find Fish function interface
 *
 * @param params The fish ID to find in the database
 */
type Find = (
    params: {
        /**
         * The fish id to delete
         */
        id: string,
    }
) => Promise<void>

/**
 * A function to find a fish based on the provided ID.
 *
 * @param {object} params - The parameters object containing the ID of the fish to find.
 */
const find: Find = async (params) => {
    if (params && !isNaN(Number(params.id))) {
        const preparedStatement = `SELECT * FROM fish WHERE id = $1;`;
        const response = await client.query(preparedStatement, [params.id]);
        if (response.rowCount === 1) {
            console.log(response.rows[0])
        } else {
            console.log("No results found.")
        }
    } else {
        console.log("Invalid Parameters. Required: --id=<number>")
    }
}


export default find
