[![Build Status](https://beecode.semaphoreci.com/badges/msh-base-frame/branches/main.svg?style=shields)](https://beecode.semaphoreci.com/projects/msh-base-frame)
[![codecov](https://codecov.io/gh/beecode-rs/msh-base-frame/branch/main/graph/badge.svg?token=wOOqEekQfv)](https://codecov.io/gh/beecode-rs/msh-base-frame)
[![GitHub license](https://img.shields.io/github/license/beecode-rs/msh-base-frame)](https://github.com/beecode-rs/msh-base-frame/blob/main/LICENSE)  
[![NPM](https://nodei.co/npm/@beecode/msh-base-frame.png)](https://nodei.co/npm/@beecode/msh-base-frame)

# msh-base-frame

<!-- toc -->

- [Install](#install)
- [Usage](#usage)
- [Using private temp repo (Github only)](#using-private-temp-repo-github-only)

<!-- tocstop -->

## Install

`npm i -g @beecode/msh-base-frame`

## Usage

Follow instruction inside template repo (STARTER_INSTRUCTIONS.md)  
STARTER_INSTRUCTIONS.md example:

```text
# Template file `.base-frame`

//json
{
  "template": {
    "projectName": "msh-project",
    "gitTeam": "beecode-rs",
    "npmPackagePrefix": "@beecode/"
  },
  "gitZipUrl": "https://github.com/beecode-rs/ts-lib-starter/archive/refs/heads/main.zip"
}
```

Create a folder for your project (`my-new-project`)  
Create `.base-frame` file in project folder

```
my-new-project/
 └── .base-frame
```

And replace template data with your data

```json
{
  "template": {
    "projectName": "my-new-project",
    "gitTeam": "awesome-team",
    "npmPackagePrefix": "@awesome-team/"
  },
  "gitZipUrl": "https://github.com/beecode-rs/ts-lib-starter/archive/refs/heads/main.zip"
}
```

Then execute command from the project root

```text
$> msh-base
```

## Using private temp repo (Github only)

If you have a private repo you will need to generate Person Access Token and place it in `.base-frame.user.json` located in your
users home dir (`~/.base-frame.user.json`)

```json
{
  "githubPersonAccessToken": "ghp_JiZ#################################"
}
```

[How to generate Github Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
