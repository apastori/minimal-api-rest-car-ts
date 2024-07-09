import { IProcessEnv } from './IProcessEnv';

declare global {
    namespace NodeJS {
        interface ProcessEnv extends IProcessEnv {}
    }
}