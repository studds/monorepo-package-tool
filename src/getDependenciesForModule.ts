import { findVersionForDep } from './findVersionForDep';
import { PackageJson } from './PackageJson';
export function getDependenciesForModule(
    pack: PackageJson,
    importNames: string[]
) {
    const scope = pack.name.split('/')[0];
    const dependencies: Record<string, string> = {};
    const peerDependencies: Record<string, string> = {};
    importNames.forEach(importName => {
        const [importScope, packageName] = importName.split('/');
        const dependencyName =
            importScope.startsWith('@') && packageName
                ? `${importScope}/${packageName}`
                : importScope;
        const version = findVersionForDep(dependencyName, pack.dependencies);
        const peerVersion = findVersionForDep(
            dependencyName,
            pack.peerDependencies
        );
        if (scope && dependencyName.startsWith(scope)) {
            dependencies[dependencyName] = pack.version;
        } else if (version) {
            dependencies[dependencyName] = version;
        } else if (peerVersion) {
            dependencies[dependencyName] = peerVersion;
        } else if (findVersionForDep(dependencyName, pack.devDependencies)) {
            console.log(`Ignoring dev dep ${dependencyName}`);
        } else {
            console.warn('Missing dep for ' + dependencyName);
        }
    });
    return { dependencies, peerDependencies };
}
