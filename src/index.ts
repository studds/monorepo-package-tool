import { readFileSync } from 'fs';
import { sync as glob } from 'globby';
import { copyPackage } from './copyPackage';

export function populatePackageJson(
    rootModuleDir: string,
    destDir: string,
    options: { scopeDepsArePeers: boolean }
) {
    const pack = JSON.parse(readFileSync('./package.json', 'utf-8'));
    const moduleGlob = `**/package.json`;
    const packagePaths = glob(moduleGlob, {
        cwd: rootModuleDir,
        absolute: true,
    });
    packagePaths.forEach((path) => {
        copyPackage(rootModuleDir, path, pack, destDir, options);
    });
}
