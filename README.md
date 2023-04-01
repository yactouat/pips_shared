# PIPS shared package

<!-- TOC -->

- [PIPS shared package](#pips-shared-package)
  - [what is this ?](#what-is-this-)
  - [pre requisites](#pre-requisites)
  - [CI/CD](#cicd)

<!-- /TOC -->

## what is this ?

the TS npm package that centralizes all the shared types, DTOs, and functions for the PIPS (Portable Integrated Personal System) project

## pre requisites

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)

## CI/CD

building with tsc and publishing to NPM are automated using the Github Actions listed in the `.github/workflows` folder; the building and publishing to NPM part happens whenever a new release is created on Github

required repository secrets are:

-`NPM_ACCESS_TOKEN` : the access token to the NPM account that will be used to publish the package
