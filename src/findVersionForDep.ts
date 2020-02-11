export function findVersionForDep(
    dep: string,
    dependencies: Record<string, string | undefined> = {}
) {
    if (dependencies[dep]) {
        return dependencies[dep];
    }
    const parts = dep.split('/');
    while (parts.pop() && !dependencies[dep]) {
        dep = parts.join('/');
    }
    if (dependencies[dep]) {
        return dependencies[dep];
    }
    return;
}
