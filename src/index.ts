// video 17
import { Observable, Observer, interval } from "rxjs";

// const observer: Observer<any> = {
//   next: (value) => console.log("Next:", value),
//   error: (error) => console.warn("Error:", error),
//   complete: () => console.info("Completed"),
// };

// const source = interval(1000);
// const subscribe = source.subscribe((val) => console.log(val));

const interval$ = new Observable<number>((subscriber) => {
  // Create Counter - 1,2,3,4,5,...
  let count = 0;

  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
    console.log("counting");
  }, 1000);

  //  'return' is called with unsubscribe()
  return () => {
    clearInterval(interval);
    console.log("Interval destroyed");
  };
});

const subscription = interval$.subscribe((num) => console.log("Num:", num));
const subs2 = interval$.subscribe((num) => console.log("Num:", num));
const subs3 = interval$.subscribe((num) => console.log("Num:", num));

setTimeout(() => {
  subscription.unsubscribe();
  subs2.unsubscribe();
  subs3.unsubscribe();
  console.log("Completed timeout");
}, 5000);
