
import { Router } from "express";
import { readdirSync } from "fs";

const router: Router = Router();

const PATH_ROUTER = `${__dirname}`;

const cleanFileName = (filename: string): string => {
    const file: string = filename.split('.').shift()!;
    return file;
}

readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanFile: string = cleanFileName(filename);
    if (cleanFile !== 'index') {
        import(`./${cleanFile}`).then((moduleRouter) => {
            console.log("loading routes")
            router.use(`/${cleanFile}`, moduleRouter.router)
        })
    }
});

export { router }