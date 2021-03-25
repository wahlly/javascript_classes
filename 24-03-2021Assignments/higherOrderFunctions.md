# HIGHER ORDER FUNCTIONS         

A **Higher Order Function** is a function that either takes a function as an argument or returns a function. Examples of higher order functions include; *map, reduce, filter, forEach, etc.*
 Given below is an example of a higher order function that creates a new array from the given myArray by multiplying every item in the array i.e each item in the new array is twice each item in the old array:

```js
    const myArray = [1, 2, 3];
    const twiceMyArray = myArray.map(item => item * 2);
    console.log(twiceMyArray);  // [2, 4, 6] which is twice each of the item in the old array.
```

## map();    
Suppose we have an array in which we will like to get the sum of items in the array, we may want to use for loop. But, the map method makes it even easier and better with less lines of codes compared to using the for loop.
for example, given an array of objects;
```js
    const footballClubs = [
        {club:'Chelsea', country:'England', coach:'Thomas Tuchel'},
        {club:'Barcelona', country:'Spain', coach:'Ronald Koeman'},
        {club:'Juventus', country:'Italy', coach:'Andreas Pirlo'}
    ];

    let clubCoaches = footballClubs.map(club => club.coach);
        console.log(clubCoaches);   // [thomas tuchel, ronald Koeman, Andreas Pirlo]
```


## reduce();
reduce as the name implies, helps us to sum up a whole array into a single value. Given below is an example that is set up to sum up all digits in the array;

```js
   const arrayOfDigits = [2, 4, 6, 8];
    let sum = arrayOfDigits.reduce((currentValue, nextValue) => {
      return currentValue + nextValue;
    })

    console.log(sum)
```
