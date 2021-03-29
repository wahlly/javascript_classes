# Assignment
- Study HOF again
- Create your Higher-Order Function
- Explain the settimeout function with example
- Explain promises with examples
- What are side effects in programming?
- Examples of side effects in JS
- Study classes in JavaScript

## Example Of An Higher Order Function
```js
const breakFast = (food) => {
    return `I will like to take ${food}`
  }


function food(foodName, eatFood) {
  if( foodName === 'Rice'){
   return eatFood(foodName)
  } else {
    return (`Selected food is not available on our menu`)
  }
} 

console.log(food('Rice', breakFast)); // I will like to take rice.
```
The function **food** is a higher order function because, it returns the function **breakFast** when called.

## setTimeOut()
The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds. The setTimeOut() method takes in a callback function and a specified time before the function is called which is calculated in milliseconds. an example is given below;
```js
function userLogin() {
  alert('Hello User');
}

function display() {
     setTimeout(userLogin(), 3000);
}

display(); // this shows an alert box saying 'Hello User' 3 seconds after being called.

```

## Promise
A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.
A “producing code” that does something and takes time. For instance, some code that loads the data over a network.
A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result.
An instance of a code is given below;
```js
const status = new promise((resolve, reject) => {
    let number = 200;
    if(number === 200){
        resolve('Success')
    }   
    else{
        reject('Error')
    }
})

status
.then(function(statusMessage) {
        return statusMessage;
    })
.catch(function(error) {
        return error
    })
```

## Side Effects In Programming
A side effect is any application state change that is observable outside the called function other than its return value. Side effects include:
- Modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)
- Logging to the console
- Writing to the screen
- Writing to a file
- Writing to the network
- Triggering any external process
- Calling any other functions with side-effects
- Side effects are mostly avoided in functional programming, which makes the effects of a program much easier to understand, and much easier to test.