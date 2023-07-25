// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokedexBaseUrl: 'https://pokeapi.co/api/v2',
  webSocketStatistics: 'wss://pokemon-statistics-be19c4542f3c.herokuapp.com/',
  firebase: {
    apiKey: 'AIzaSyDmh8fJB9oQhJXSkd_UQH_rXxWJwNfVWeQ',
    authDomain: 'pokemon-pokedex-d4c61.firebaseapp.com',
    projectId: 'pokemon-pokedex-d4c61',
    storageBucket: 'pokemon-pokedex-d4c61.appspot.com',
    messagingSenderId: '348223807799',
    appId: '1:348223807799:web:d8e50ca04d71fe197e3ab2',
    measurementId: 'G-CJVZ13DPQX',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
