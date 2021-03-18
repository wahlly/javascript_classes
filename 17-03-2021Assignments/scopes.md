## VARIABLE SCOPING IN CONDITIONAL STATEMENTS.
- **Local Scopes in a conditional statement:**
    *These are variables declared inside the block of the function stating the conditions. so, this makes them only accessible inside the block.*
> for (let i = 0; i < 3; i++) { <br>
>  // the variable i is only visible inside this for <br>
>  alert(i); // 0, then 1, then 2.  <br>
> } <br>

*alert(i); // Error, no such variable. this is because, the variable, 'i' is declared inside the for loop and so,this makes it only available for use to conditions made inside inside the loop.*

- **Global Scopes in Conditional statement:**
    These are variables declared outside the function block. these variable scopes are accessible anywhere in the environment: for example;

  > *const name = 'Olawale'* <br>
>
>    if(name === 'Olawale'){<br>
 >       console.log('Welcome to the world')<br>
  >  }
    The variable name here is a global one because, it is not declared inside the condition block. this makes it accessible everywhere even inside the condition block.


## VARIABLE SCOPING IN FUNCTIONS
- ***Local Scopes Using Functions   ***
>const sayMyName = () => {<br>
 >   const name = 'Olawale'<br>
  >  return name;<br>
> }<br>
The variable name as used in this situation cannot be accessed or used anywhere else except from the function block and this makes it a locally scoped variable. when i try to call the variable 'name' anywhere outside the function, it returns *'undefined'*.

- ***Global Scopes Using Functions***
> const name = 'Olawale'<br>
> const sayMyName = () => {<br>
  >  return name;<br>
> }<br>
sayMyName();    //this returns Olawale because, the variable declared outside the function can still be accessed or used inside the function.


## VARIABLE SCOPING IN OBJECTS
>    const callNumbers = () => {<br>
 >       let firstOddNumber = 1;<br>
  >      return secondOddNumber;     // undefined <br>
   >         const oddNumbers = () =>{<br>
    >            let secondOddNumber = 3;<br>
     >           return firstOddNumber + ' ' + secondOddNumber;    // 4<br>
      >      }<br>
    > }<br>
    The 'return secondOddNumber' gives us undefined because, the variable **secondOddNumber** is defined locally in the oddNumber function block, this makes it to only be available for use inside that territory only. 
    the variable 'firstOddNumber' is able to be operated on because it is declared in the first function block which, makes it serve as a global scope inside the block since, the oddNumbers function has being nested inside it. 