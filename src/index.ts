// video 18
import { Observable, Observer, Subject, Subscription, interval } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Next:", value),
  error: (error) => console.warn("Error:", error),
  complete: () => console.info("Completed"),
};

const interval$ = new Observable<number>(subs => {

  const intervaleID = setInterval(() => subs.next(Math.random()), 2000)
  return () => {
    clearInterval(intervaleID)
  }
});

// const subs1 = interval$.subscribe( random => console.log("rnd1", random)) 
// const subs2 = interval$.subscribe( random => console.log("rnd2", random)) 

/**
 *  1- Casteo multiple
 * 2- it'e a Observer
 * 3- We can send a subject
 * 4- Next, error and complete
 */

const subject$ = new Subject()
interval$.subscribe(subject$)

const subs1 = subject$.subscribe( random => console.log("rnd1", random)) 
const subs2 = subject$.subscribe( random => console.log("rnd2", random)) 

