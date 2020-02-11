import { existsSync, readFileSync } from 'fs';
import { resolve, relative } from 'path';

export function findDestDirFromTsConfig(
    moduleDir: string,
    rootModuleDir: string,
    rootDestDir: string | undefined
) {
    try {
        const typescript = require('typescript');
        const { findConfigFile, readConfigFile } = typescript;
        const configPath = findConfigFile(moduleDir, existsSync);
        if (!configPath) {
            throw new Error(`Did not find tsconfig.json in ${moduleDir}`);
        }
        const tsConfig = readConfigFile(configPath, (path: string) =>
            readFileSync(path, 'utf-8')
        );
        const destDir = resolve(
            moduleDir,
            tsConfig.config.compilerOptions.outDir
        );
        return destDir;
    } catch (err) {
        if (!rootDestDir) {
            throw err;
        }
        const rel = relative(rootModuleDir, moduleDir);
        return resolve(rootDestDir, rel);
    }
}
