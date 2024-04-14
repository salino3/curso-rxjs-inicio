// video 18
import { Observable, Observer, Subscription, interval } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Next:", value),
  error: (error) => console.warn("Error:", error),
  complete: () => console.info("Completed"),
};

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

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  //  'return' is called with unsubscribe() or with complete()
  //  good practice after complete() execute unsubscribe() too, save resources
  return () => {
    clearInterval(interval);
    console.log("Interval destroyed");
  };
});

// const subscription = interval$.subscribe((num) => console.log("Num:", num));
const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

// subs1.add(subs2)

const subscription = new Subscription();
subscription.add(subs1);
subscription.add(subs2);
subscription.add(subs3);

setTimeout(() => {
  //   subs1.unsubscribe();
  //   subs2.unsubscribe();
  //   subs3.unsubscribe();
  subscription.unsubscribe();
  console.log("Completed timeout");
}, 5000);
