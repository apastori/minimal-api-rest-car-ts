import { readFileSync } from "fs";

const jsonStringEnv = readFileSync('../env.json', 'utf-8');

const data: any = JSON.parse(jsonStringEnv);




