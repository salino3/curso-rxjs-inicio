import {of} from 'rxjs';
// method 'of' is synchronous


// const obs$ = of(1,2,3,4,5,6 );
// const obs$ = of(...[1,2,3,4,5,6], 10, "a", "b" );
// const obs$ = of([1, 2], {a:1, b: 2}, function(){}, true , Promise.resolve(true));

// now it doesn't allow type number for this situation
const obs$ = of<any>(...[1, 2, 3, 4, 5, 6], 2, 3, 4);


console.log("start Obs$")



obs$.subscribe(
  next => console.log("next: ", next),
  null,
  () => console.log("finish")
);

console.log("End Obs$")

