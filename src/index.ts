/**
 * Observable - Observable
 * Observer - Observador
 * Subscribers
 * Operator
 *
 */
import { Observable, Observer } from "rxjs";

// const obs$ = Observable.create()

const observer: Observer<any> = {
  next: (value) => console.log("Next:", value),
  error: (error) => console.warn("Error:", error),
  complete: () => console.info("Completed"),
};

const hola: string = "Hola";

const obs$ = new Observable<string>((subs) => {
  subs.next(hola);
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // const a = undefined;
  // a.nombre = "Mario";

  subs.complete();

  //   it doesn't execute - after complete
  subs.next("Hola");
  subs.next("Mundo");
});

obs$.subscribe(observer);

// obs$.subscribe((resp) => console.log(resp));
// obs$.subscribe(console.log);

// obs$.subscribe(
//   (value) => console.log("next", value),
//   (error) => console.warn("error", error),
//   () => console.info("Completed")
// );
