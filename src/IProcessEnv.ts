import { Environment } from './environmentType'

export interface IProcessEnv {
    PORT: string,
    ENV: Environment,
    DBNAME: string,
    DBPORT: string,
    HOST: string
}