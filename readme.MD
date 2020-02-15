<h1 align="center">Welcome to monorepo-package-tool 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D6.0.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D10.0.0-blue.svg" />
  <a href="https://github.com/studds/monorepo-package-tool#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/studds/monorepo-package-tool/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/studds/monorepo-package-tool/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/studds/monorepo-package-tool" />
  </a>
</p>

> A wee tool for syncing package.json files in a monorepo with multiple publishable packages, but a single main package.json

### 🏠 [Homepage](https://github.com/studds/monorepo-package-tool#readme)

## Prerequisites

-   npm >=6.0.0
-   node >=10.0.0

## Install

```sh
npm install monorepo-package-tool
```

## Usage

```sh
npx monorepo-package-tool [--rootModuleDir libs] [--destDir dist]
```

Inject dependencies etc into package.json for multiple packages under `./libs`,
and copy to the `./dist/{package-path}` dir:

```sh
npx monorepo-package-tool --rootModuleDir libs
```

Inject dependencies etc into a single package, and copy to `dist/example` dir:

```sh
npx monorepo-package-tool --rootModuleDir libs/example --destDir dist/example
```

### Options

**--rootModuleDir** (default: packages): Path to submodule root directory - will search for package.json files under here
**--destDir** (default: dist): Output dir - if missing, will attempt to derive from tsconfig.json

### Examples

## Author

👤 **Daniel Studds**

-   Website: https://danielstudds.com
-   Github: [@studds](https://github.com/studds)
-   LinkedIn: [@studds](https://linkedin.com/in/studds)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/studds/monorepo-package-tool/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Daniel Studds](https://github.com/studds).<br />
This project is MIT licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
