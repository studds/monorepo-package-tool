const precinct = require('precinct');
export function inspectCodeForDependencies(paths: string[]) {
    return paths.reduce<string[]>((acc, path) => {
        // Pass in a file's content or an AST
        const pathDeps: string[] = precinct.paperwork(path, {
            includeCore: false
        });
        pathDeps.forEach(dep => {
            if (!dep.startsWith('.') && acc.indexOf(dep) === -1) {
                acc.push(dep);
            }
        });
        return acc;
    }, []);
}
