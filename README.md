# TypeScript Tutorial

Running through a TypeScript tutorial to fill in gaps.

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

## With React

1. Create a directory for the project (can only use dashes, underscores, and lower case letters in directory name)
2. From that directory, run this command: `create-react-app . --scripts-version=react-scripts-ts`
