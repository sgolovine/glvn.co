<p align="center">
  <a href="https://glvn.co">
    <img alt="Profile" src="profile.png" width="120" />
  </a>
</p>
<h1 align="center">
  My Personal Website
</h1>

## Installation

Make sure you have NodeJS and yarn installed via NPM. Run `yarn` in the project directory to install dependencies


## Running 

Run `yarn start` to start the site in development mode


## Building for Production

Run `yarn build` to build the site for production. The output will be in the `public/` folder

## Modifying Data

**Adding a project** - To add a project add a value to `src/data/projects.ts`

**Updating Contact Info** - To update contact info add/change values in `src/data/links.ts`

## CI

The site uses Github Actions to perform basic checks to the code before pushing to production. The command `yarn ci` is used in Github actions and does two things:
  
  * Typecheck - `yarn tsc` - checks typescript types
  * Format - `yarn format` - runs prettier on the codebase 