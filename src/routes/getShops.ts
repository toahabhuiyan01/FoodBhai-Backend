import { Handler } from "../api/make-api";
import { Shop } from "../types/openapi-client";

const handler: Handler<'getShops'> = async(
    
) => {
    
    return {
        shops: [] as Shop[],
    }
}

export default handler