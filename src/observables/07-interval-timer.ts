import {interval, timer} from 'rxjs';

const observer = {
    next: val => console.log("next: ", val),
    complete: () => console.log("complete"),
    error: err => console.log("error: ", err)
};

const interval$ = interval(1000);

const subs = interval$.subscribe(observer);
// const timer$ = timer(12000);

const todayMore5 = new Date();
todayMore5.setSeconds(todayMore5.getSeconds() +  5);

const timer$ = timer(todayMore5);


console.log("Start");
timer$.subscribe(observer);
console.log("End"); 



