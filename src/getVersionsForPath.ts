import { globbySync as glob } from 'globby';
import { PackageJson } from './PackageJson';
import { inspectCodeForDependencies } from './inspectCodeForDependencies';
import { getDependenciesForModule } from './getDependenciesForModule';

export function getDependenciesForModulePath(
    modulePath: string,
    pack: PackageJson,
    options: { scopeDepsArePeers: boolean }
) {
    const deps = inspectCodeForDependencies(glob(`${modulePath}/**/*.ts`));
    return getDependenciesForModule(pack, deps, options);
}
