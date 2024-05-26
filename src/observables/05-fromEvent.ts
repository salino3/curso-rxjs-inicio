import {fromEvent} from 'rxjs';

/**
 * DOM event
 */

const src1$ = fromEvent<PointerEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => console.log("next", val),
}

src1$.subscribe(({x, y}) => {
  console.log("X:", x)
  console.log("Y:", y)
});

src2$.subscribe(event => {
  console.log(event.key)
});
