import { sync as glob } from 'globby';
import { PackageJson } from './PackageJson';
import { inspectCodeForDependencies } from './inspectCodeForDependencies';
import { getDependenciesForModule } from './getDependenciesForModule';

export function getDependenciesForModulePath(
    modulePath: string,
    pack: PackageJson
) {
    const deps = inspectCodeForDependencies(glob(`${modulePath}/**/*.ts`));
    return getDependenciesForModule(pack, deps);
}
