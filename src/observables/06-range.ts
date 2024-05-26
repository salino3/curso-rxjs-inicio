import {asyncScheduler, of, range} from 'rxjs';

/**
 * with 'asyncScheduler' convert it in asynchronous
 * 
 */

// second parametr means execute it 'n' times
const src$ = range(-2,5, asyncScheduler);

console.log("start")

src$.subscribe(console.log)


console.log("end")

