import { OpenAPIClientAxios } from 'openapi-client-axios'
import { Client } from '../types/openapi-client'

async function main() {
    const api = new OpenAPIClientAxios({
        definition: 'openapi.json',
        axiosConfigDefaults: {
            baseURL: 'http://localhost:9090'
        }
    })

    api.init()
    const client = await api.getClient<Client>()

    return client
}

main()
export default main