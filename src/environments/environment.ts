// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDXs3DfGH5OPn0MJwpyQvuTK6xWnDcCLII",
    authDomain: "ng-mat.firebaseapp.com",
    databaseURL: "https://ng-mat.firebaseio.com",
    projectId: "ng-mat",
    storageBucket: "",
    messagingSenderId: "125941499475"
  }
};
