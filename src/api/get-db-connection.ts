import { AppDataSource } from '../data-source'

export default async function () {
    if(!AppDataSource.isInitialized) {
        await AppDataSource.initialize()
    }

    return AppDataSource
}