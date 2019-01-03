# TypeScript Tutorial

Running through a TypeScript tutorial to fill in gaps.

- [Looking Around TypeScript](./1_LookingAround)
- [Setting Up A Workspace](./2_Setup)

## TypeScript Compiling:

### To compile a single TypeScript file:

1. Navigate to directory that stores the .ts file
1. Run `tsc <filename>`
1. This will create a compiled .js file of the same name

### To have TypeScript watch all files in a directory

1. Navigate to the directory via command line
1. Run `tsc --init`

- This will create a tsconfig.json file and watch all TypeScript files in the directory

1. When ready to compile, run `tsc` in the command line

## To Run

Each directory is its own project.

1. Navigate to the directory in the command line
1. Run `npm install`
1. Run `npm start`
