// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Store } from '@ngrx/store';
// import { of } from 'rxjs';
// import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';


// @Injectable()
// export class ThemeEffects {
//   // درخواست برای ذخیره تم در localStorage
//   saveTheme$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(themeActions.setTheme),
//       withLatestFrom(this.store),
//       switchMap(([action, state]) => {
//         this.themeService.setTheme(state.theme.currentTheme); // ذخیره در localStorage
//         return of(themeActions.saveThemeSuccess());
//       }),
//       catchError((error) => of(themeActions.saveThemeFailure({ error })))
//     )
//   );

//   constructor(
//     private actions$: Actions,
//     private store: Store,
//     private themeService: ThemeService
//   ) {}
// }
