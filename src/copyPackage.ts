import { readFileSync, writeFileSync } from 'fs';
import { sync as mkdirp } from 'mkdirp';
import { dirname, resolve, relative } from 'path';
import { findDestDirFromTsConfig as findDestDir } from './findDestDirFromTsConfig';
import { getDependenciesForModulePath } from './getVersionsForPath';
import { PackageJson } from './PackageJson';
export function copyPackage(
    rootModuleDir: string,
    packagePath: string,
    pack: PackageJson,
    rootDestDir: string | undefined,
    options: { scopeDepsArePeers: boolean }
) {
    const modulePack = JSON.parse(readFileSync(packagePath, 'utf-8'));
    const moduleDir = dirname(packagePath);
    const { dependencies, peerDependencies } = getDependenciesForModulePath(
        moduleDir,
        pack,
        options
    );
    modulePack.dependencies = dependencies;
    modulePack.peerDependencies = peerDependencies;
    modulePack.version = pack.version;
    const repository = pack.repository;
    if (typeof repository === 'string') {
        modulePack.repository = {
            directory: relative(process.cwd(), moduleDir),
            type: 'git',
            url: repository,
        };
    } else if (repository) {
        modulePack.repository = { ...repository, directory: moduleDir };
    }
    const destDir = findDestDir(moduleDir, rootModuleDir, rootDestDir);
    mkdirp(destDir);
    writeFileSync(
        resolve(destDir, 'package.json'),
        JSON.stringify(modulePack, null, 2),
        'utf-8'
    );
}
