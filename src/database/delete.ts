import { client } from "./pgsql";

/**
 * Delete Fish function interface
 * @param params contains the fish id to delete
 */
export type DeleteFish = (
    params: {
        /**
         * The fish id to delete
         */
        id: string,
    }
) => Promise<void>;



/**
 * Deletes a fish from the database based on the provided parameters.
 * @param {string} params.id - The ID of the fish to delete.
 */
const deleteFish: DeleteFish = async (params) => {
    if (params && !isNaN(Number(params.id)) && typeof params.id !== 'boolean') {
        const preparedStatement = `DELETE FROM fish WHERE id = $1;`;
        const response = await client.query(preparedStatement, [params.id]);
        if (response.rowCount === 1) {
            console.log(`Successfully deleted Fish with ID ${params.id} from the database`)
        } else {
            console.log("No fish deleted.")
        }
    } else {
        console.log("Invalid Parameters. Required: --id=<number>")
    }
}


export default deleteFish
