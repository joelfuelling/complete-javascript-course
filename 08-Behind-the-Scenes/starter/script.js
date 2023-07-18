'use strict';

//? Use to structure high level sections
//* Sections of high level sections
//! Specific #'d sections. Used for NEED-TO-KNOW and contextually important notes.
//# INTERESTING notes/1 level above dark green
//% IMPORTANT notes/2 levels above dark green


//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? Highlevel overview
//? Highlevel overview
//? Highlevel overview

// High level, OOP, multi-paradigm programming language.
// or, if you REALLY want to get specific.
// # Javascript is a high-level, protoype-based object-oriented, mutli-paradigm, interpreted or JUST-IN-TIME complied, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model... 🧐🤯



//* High level 
//Javascript/Python, we do not have to manage resources, everything happens automaticlly.
    // However, programs like JS/Python will never be as fast as a language like C.


//* Garbage-collected
// Automatic algorithm within JavaScript engine which automatically removes all unused objects from the computer memory.
    // Like a cleaning guy, so we don't have to do it.


//* Inerpreted, or Just-In-Time  
// Computer only understand 0s and 1s.
    // Machine Code (0s and 1s) - Not practical at all! JavaScript is an abstraction that complies our written code into a 1/0 format the computer can understand.


//* Multi-paradigm language
    // Paradigm: Approach and mindset of structuring code, which will direct your coding style and technique.
    // 3 most popular paradigms are.
        //* Procedural Programming < JavaScript in a "linear" form (what we've been doing so far)
        //* Object-oriented Programming (OOP)
        //* Functional programming(FP)
    // Many languages are only one fo the 3 above, but JavaScript is all 3!
    // Impertiave vs. Declarative.


//* Prototype-based object-oriented
    const arr = [1,2,3]
    arr.push(4)
    const hasZero = arr.indexOf(0) > -1
    // Our array inhertis methods from prototype (push, indexOf) //# <<< This is an over simplification


//* First-class functions
    // In a language with first-class function, functions are simply treated as variables. 
    //# We can pass them into other functions, and return them from functions.
    //% For example.
    // const closeModal = () => {
    //     modal.classList.add('hidden')
    //     overlay.classList.add('hidden')
    // }
    // overlay.addEventListener('click', closeModal) //% passing a function, first-class functions!


//* Dynamic language (ie., dynamically typed)
    // Dynamic: We don't assign data types to variables.
    // # Some see this as a disadvantage of JavaScript, but it does make it more efficient to type and declare variables.
    // Other langueges, C, Java, Rails, TypeScript, all require variable type declaration

//* Non-blocking event loop
    //* Concurrency model: how the JavaScript engine handles multiple tasks happening at the same time.
        // Why do we need that?
    // JavaScript runs in one single thread, so... 
        //# it can only do one thing at a time.
    // What about a long-running task? Does everything else just wait?
    //* We want non-blocking behavior for that, and to that we use an event loop.
        // Event loop: Takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished.

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻





//? JavaScrtip Engine and Runtime
//? JavaScrtip Engine and Runtime
//? JavaScrtip Engine and Runtime

// Google Chromes V8
//% Containts 2 things, a CALL STACK, and a HEAP

// JAVASCRIPT ENGINE (Call Stack and Heap are located in the engine)

    //% Call stack:
    // 1 - Where our code is executed
    // 2 - The execution content

    //% Heap:
    // Where objects are stored
    // Object stored in memory

//! Compilation vs. interpretation vs. Just-In-Time

//! Compilation:
    //% Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer. For example.
    //* Source Code: Step 1 - Compilation ▻▻ PORTABLE FILE: machine code ▻▻ Step 2: Execution (can happen WAY after compilation) ▻▻ Program running.

    //% CHAT GPT DETAILED BREAKDOWN OF COMPILATION.
    // Compilation is a process in which source code written in a high-level programming language is translated into machine code or bytecode before it is executed. The key steps involved in compilation are as follows:
    // Preprocessing: In this step, the source code is processed to handle preprocessor directives, such as including header files and macro expansions.
    // Parsing: The source code is parsed to form an abstract syntax tree (AST), which represents the structure and semantics of the code (shown below).
    // Semantic analysis: The compiler performs various checks on the AST to ensure type correctness, scope rules, and other language-specific rules.
    // Code generation: The compiler generates equivalent machine code or bytecode from the AST.
    // Optimization: Optional step where the generated code is optimized for performance, size, or other criteria.

    //# Compilation produces an executable file or a binary that can be directly executed by the target platform. 
    // Notable differences of compilation include:
    // Compilation typically involves a separate compilation phase before the program is run.
    // The resulting binary is usually platform-specific and can be executed independently.
    //# Compilation can potentially provide better overall performance since the code is optimized before execution.
    // If changes are made to the source code, recompilation is required to reflect those changes in the binary.


//! Interpretation:
    //% Interpreter runs through the source code and executes in line by line at runtime.
    //* Source code: Step 1 - Execution line by line (converted to machine code, line by line) ▻▻ Program running (pretty "straight forward" actually)
    //# Interpretation runs much slower than Compilation. Imagine using Google Maps and every time you dragged to a new spot it took 1-2 seconds...

    //% CHAT GPT DETAILED BREAKDOWN OF INTERPRETATION.
    //# Interpretation is an alternative approach where the source code is not translated into machine code before execution. Instead, an interpreter reads and executes the code line by line. The key characteristics of interpretation are:
    // Parsing and execution are performed simultaneously.
    // The source code is not transformed into an independent executable form.
    // The interpreter typically checks and executes each line or statement in sequence.
    //# The interpreter directly interacts with the runtime environment, which allows for dynamic and flexible behavior.
    // Differences of interpretation compared to compilation include:

    // Interpreted code is not compiled into a binary, making it platform-independent.
    // The interpreter analyzes and executes the code at runtime, which can result in slower performance compared to compiled code.
    // Changes made to the source code are immediately reflected during subsequent executions.
    // % Interpreted languages often provide greater flexibility and dynamic features, as they can adapt to runtime conditions more easily.

//! Just-in-time (JIT) Compilation:
    //% Entire code is converted into machine code at once, then executed immediately.
    //* Source code: Step 1 - Compilation ▻▻ NOT A portable file: Machine code ▻▻ Step 2 - Execution (happens IMMEDIATELY) ▻▻ Program running.
    //* or more visually...
    // Step 1 - As a piece of code enters the engine it first gets parsed.
    //% Parsed: "To read the code".
    // The CODE is parsed into a data structure called the...
    //% Abstract Syntax Tree (AST)
        //# Checks for any syntax errors.
        //# Each line of code is broken up into meaningful pieces to the language, const, function, etc., All these pieces are then saved to the tree in a structure way (below). 

        //! 1 - Parsing the AST ▼ 
        // const x = 23 
        //%VariableDeclaration {
        //     start: 0
        //     end: 13
        //   - declarations: [
        //     - VariableDeclarator {
        //         start: 6
        //         end: 12
        //       - id: Identifier {
        //             start: 6
        //             end: 7
        //%            name: "x"
        //        }
        //       - init: Literal = $node {
        //             start: 10
        //             end: 12
        //%            value: 23
        //             raw: "23"
        //       }
        //     }
        //   ]
        //%  kind: const
        // }
        

        //! 2 - Compiling the AST ▼
            // Loads of machine code 00001010101010110110110101010...

        //! 3 - Executing the AST ▼
            // Happens in the call stack.

        //! 4 - Optimiatizing the AST ▼
            // Modern JS engines have clever optimization strategies.
            //% First, an unoptimized version is created in the beginning so it can start executing as fast as possbile. In the background it's being optimized and recomplied constantly during execution.
            // This all takes within separate threads in the code that we cannot access.


//* Runtimes in the browser. 
    // The JS engine alone is not enough...
    // % It needs access to the web APIs: Functionalities provided to the engine, accessible on the window object. NOT part of the JavaScript language itself.
    // These are however part of the runtime, their just part of what we need.
        //# (DOM, Timers, Fetch API, etc.). 
    // #These are accessed by the global 'window' object. 
    
    //* Callback queue
    // this is a data structure that contains all the callback fucntion that are ready to be executed.
    // % For example, an 'click' event listener.
        //% When the element is clicked, the callback function will be called.
    // 1 - The callback function is put in the Call Stack queue.
    // 2 - When the call stack is empty, the callback function is passed to the stack so that it can be executed (JIT).
    //#% - THIS IS THE EVENT LOOP IN PLAY! 
    //! SEE DIAGRAM HERE: "complete-javascript-course/08-Behind-the-Scenes/starter/Runtime-Diagram.jpg"
    
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻





//? Execution Contexts and the Call Stack
//? Execution Contexts and the Call Stack
//? Execution Contexts and the Call Stack

//* EXECUTION CONTEXT is an abstract concept
    //% Environment in which a piece of JavaScript is executed.
    //% Stores all the necessary information for some code to be executed.
    //# Exacltly ONE global execution context (EC)
        // default context, where top-level code will execute.

    // Image ordering a pizza... Pizza is the JS code to be executed, and the pizza box is the execution context. Eating pizza happens "within the box".
    // The box also contains cutlery, napkins, sauces, and all things necessary to eat the pizza/execute the code.

//* What is an execution context?
// After compiliation, //# only the code outside of functions will be executed.
    // Functions should only be executed when they are called.
        //% PIG GAME - When we made our Init() function, which initializes the whole game, we needed to call it immediately in our top level code.
    //* Another example below.
        //# (below) 'name' is top level code, and therefore will be executed in the global execution context.
        // Then, we have a declarative function, and an expression function. These will also be declared so they can be called later. //# The code inside will only be executed when the functions are called.

    //% One execution context PER FUNCTION
        // For each function call, a new execution context (pizza box) is created.
        //% ALL OF THESE TOGETHER MAKE UP THE CALL STACK (stacks of pizza boxes)
        //% ALL OF THESE TOGETHER MAKE UP THE CALL STACK (stacks of pizza boxes)
        //% ALL OF THESE TOGETHER MAKE UP THE CALL STACK (stacks of pizza boxes)

        // const name = 'Joel'

        // const first = () => {
        //     let a = 1
        //     const b = second()
        //     a = a + b
        //     return a
        // }

        // function second() {
        //     var c = 2
        //     return c
        // }

    
//* What is inside Execution Context? // "WHAT'S IN THE FU**ING BOX!??!" 🤑
    //# 1 - VARIABLE ENVIRONMENT
        // Let, const, and var declarations
        // functions
        //% arguments object.
    //# 2 - SCOPE CHAIN
    //# 3 - THIS KEYWORD

    // These 3 things are generated in the so called "creation" phase right before execution.
    //% Exeuction contexts belonging to arrow functions DO NOT get their own arguments keyword, nor do they get the 'this' keywork.
        //% Instead, they can use the arguemnts object and the 'this' keyword from their CLOSEST REGULAR PARENT function.

//# How does it keep track of the order? And how does it know where it is?
        //% THE CALL STACK!

    // Call stack is where execution contexts get stacked on top of each other so we know where we are.
    // At the top, the currently running "function" will be taken out when it completes. The next "function" down will then be executed when called/if already invoked waiting in line for the function above it to finish.
/* 
//# GLOBAL (visual representation)
//* name = 'Jonas'
//* first = <function>
//* second = <function>
//* x = <unknown>
    //% <function> = LITERALLY the function code
    // x = <unknown> because it is a result of a function that hasn't been run yet.
    // None of these values become known during creation, but only during the execution phase.

    const name = 'Joel' 
    const first = () => {
        let a = 1
        const b = second(7, 9)
        a = a + b
        return a
    }
    
    function second(x, y) {
        var c = 2
        return c
    }
    
    const x = first()

    //# Call Stack In Order...
        //% 1 - Once compiled, top-level code will start execution
        //% 2 - Then, Global Execution Context is created for top-level code 
        //! (stack #1, bottom to top!)
            //% The code OUTSIDE ANY FUNCTION (global)
                //# 2.1 Get's PLACED in the call stack 1st.
                    // name = 'Jonas'
        //% 3 - first() and second() are declared, in that order.
            //# 3.1 context is created for each.
        //% 4 x = first() - RUNS EXECUTION CONTEXT - Placed in call stack on top of global context, making it the NEW/CURRENT execution context!
        //! 'Global' has been "paused" since it's no longer at the top of the stack.
        //! first() is stack #2, bottom to top!
            // 4.1 let a = 1
            //% 4.2 const b = second(7,9) - RUNS EXECUTION CONTEXT - placed on top of "first()" function, making it the NEW/CURRENT execution context!
            //! first() has been "paused" since it's no longer at the top of the stack.
            //! second() is (stack #3, bottom to top!
                //4.2.1 x = 7, y = 9
                //4.2.2 second(7,9) {
                //     var c = 2
                //     return c
                // }
                //! stack #3 is completed, funcion will pop() off of the stack and be "removed" from current memory. Previous, first() function, will become the current execution once again.
            // 5   a = a + b
            // 5.5 return a
            // 6 return a
            // 6.1 The returned value is finally assigned to X.
            //%  ("const x = first()") = "3"
            console.log(x)
        //% 
        // c = 2
            // arguments = [7,0] //% Array of passed arguments. Available in "all" regular functions (not arrow)

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
    




//? Scope and the Scope Chain
//? Scope and the Scope Chain
//? Scope and the Scope Chain


//* Scoping - How our program's variables are organized and accessed.
    // # Where to variables live? Where can we access variabe, and where not?

//* Lexical Scoping - Scoping is controlled by placement and blocks in the code.

//* Scope - Space or environment in which a certain variable is declared (variable environment in case of functions). 

    // There are 3 different scopes.

    //# Global
    // Outside of any function or block
    // Variables declared in global scope are accessible everywhere.
    const my = 'Joel'
    const job = 'Learning!'
    const year = 1989


    //# Function/local 
    function calcAge(birthYear1) {
        const now = 2023
        const age = now - birthYear1
        return age
    }
    // console.log(now) //! REFERENCE ERROR - Not in the same scope.
    // Variables are accessible ONLY inside the function, NOT outside
    // Also called local scope.

    //% creating variables with var. Var is function scoped.


    //# Block (ES6)
    //% Block: everything between curly braces
    // variables are only accessibly inside block (block scoped)
    //% Only applies to let and const. 
    // functions are also block scoped (only in strict mode)
    if (year >= 1981 && year <= 1996 ) {
        const millenial = true
        const food = 'Acocado toast'
    } //% Example: if block, for loop block, etc


    // RECAP
    // Let, const, and functions, are all block-scoped.
    // Function scopes are a bit weird (go compare them!), which is block scope was introduced with ES6.
    



//* Scope of a variable: Region of code where a certain variable can be acessed.

// Below, we have a nested structure with one scope inside the other, inside the other.
    // However, the console.log calls for myName and age, which are both not in that scope, then ow does the JS engine know the values?
    //! Every scope has access to the variables in the parent scopes, they get passed "up" the stack essentially, this is called 'Variable lookup in scope chain.
    //% So, the console log has access to the variables since they were declared in a parents scope.

//# Global scope
// myName = 'Joel'

//# first() scope
// myName = 'Joel
// age = 33
//! var millenial = true. Why? blockscope DOES NOT apply to var. Var is function scoped, therefore contained within first()

//# if block scope
// const decade = 3
// age = 33
// millenail = true
// myName = 'Joel

    //% if and second() do not get access from each others variables due to lexical scoping (see above). They are "sibling" scopes, children of the first() function.
    //! The scope chain only works upwards (the stack!), and not sideways or downwards.

//# second() scope
// myName = 'Joel'
// age = 33
// job = 'Learner
// console.log(...)
//% var millenial = true 



const myName = 'Joel'

function firstX() {
    const age = 33

    if (age >=30){
        const decade = 3
        var millenial = true
    }

    function second(){
        const job = 'Learner'
        console.log(`${myName} is a ${age}-old ${job}`)
    }
    second()
}

firstX()

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
    





//? Scope chain vs. call stack
//? Scope chain vs. call stack
//? Scope chain vs. call stack


const z = 'Joel'
firstZ()

function firstZ() {
    const b = 'Hello!'
    second()

    function second() {
        const c = 'Hi'
        third()
    }
}

function third() {
    const d = 'Hey!'
    //!! console.log(d+c+b+z) - error
}


//! ▼▼▼▼▼▼ CALL STACK - BOTTOM TO TOP ▼▼▼▼▼▼▼ !//

//# third() EC
// d = 'Hey'

//# second() EC
// c = 'Hi'

//# firstZ() EC
// b = 'Hello'
// second = <function>

//# Global EC - Variable environment.
// z = 'Joel'
// firstZ = <function>
// third = <function>



//% SCOPE CHAIN
    //% Has nothing to do with the order in which fucntions are called. Or, the order of the execution context in the call stack.


//# Global scope/variable enviromnment (VE)
// z = 'Joel'
// firstZ = <function>
// third = <function>

//# firstZ()
// b = hello,
// second = <function>
    //% + the parent scope - Global
    // z = 'Joel'
    // first = <function>
    // third = <function>

//# second()
// c = 'hi!'
    //% + parent scope - firstZ()
    // b = 'hello!'
    // second = <function>
        //% + parents parents scope - Global
        // z = 'Joel'
        // first = <function>
        // third = <function> //! This is a global EV, so accessible everywhere.

//# third()
// d = 'Hey'!
    //% + parent scope - Global
    // z = 'Joel'
    // first = <function>
    // third = <function> 


// So, (looking back at code), what about that console log?
    // d is locally scoped in the third() fucntion, so that's easy
    // c is not in the local scope, so the JS engine does a variable look up.
        //# But, it's not there!
        //# c is defined within the second() function, and there's no way third() can access it, even though second() is calling the third() function.
    // b
        //# The same goes for b
    // z is a global variable.

//! RECAP

//% 1 - Scoping asks the question "where do variables live?" or "where can we access a certain variable, and where not?"
//% 2 - There are 3 types of scope in JavaScript:'
    // Global
    // Function
    // blocks
//% 3 - Only let and const variables are block-scoped. 
    //# Variables declared with var end up in the closest function scope.
//% 4 - In JavaScript, we have LEXICAL scoping, so the rules of where we can access variables are based on exactly WHERE in the code functions and blocks are writtin.
//% 5 - Every scope always has access to all the variables from all its outer scopes
    //! This is the scope chain!
//% - 6 When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable its looking for
    //! This is variable look up.
//% - 7 The scope chain is a one-way street.    
    //# A scope will never, ever have access to the variables on an inner scope.
//% 8 - The scope chain in a certain scope is equal to add∫ing all the variable environments of all the parents copes
//% 9 - The scope chain has nothing to do with the order in which functions are called. 
    //# It does not affect the scope chain at all!

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻






//? Scoping in Practice -
//? Scoping in Practice -
//? Scoping in Practice -

function calcAge(birthYear) {
    const age = 2023 - birthYear
    //% console.log(firstName)
    return age
}

const firstName = 'Joel'
calcAge(1989)

// Above, when the console.log(firstName) is called within calcAge, a variable lookup is performed. Where it looks up the chain, into the parent scope, where it can be used.
    

function calcAge2(birthYear) {
    var age = 2023 - birthYear

    function printAge() {
        let output = `${firstName}. You are ${age}, born in ${birthYear}`
        //% console.log(output)
        
        if (birthYear >= 1989 && birthYear <= 1996){
            var millenial = true

            // Creating NEW variable with same name as variable created in outer scopes...
            //% JavaScript always LOOKS FOR the VARIABLE name WITHIN the CURRENT SCOPE. firstName is defined within this scope so it's used. Before, a variable lookup was needed to go get fristName from the global scope.
            const firstName = 'Josh'

            // Reassigning outer scope's variable...
            output = 'NEW OUTPUT!'
   
            const str = `Oh, and you're a millenial, ${firstName}`
            //% console.log(str)

            function add(a,b) {
                return a + b
            }
        }
        //! console.log(str) - ERROR - Only avaialble inside the block that it was created (const).
        console.log(millenial) //% VAR is only function scoped, not block scoped!
        //! add(2,3) - ERROR - Functions are block scoped. So, add() is only available within the block it was created (the 'if' block above)
        console.log(output) //%
    } 
    printAge()
    return age
}
calcAge2(1989)

//! console.log(age) - ERROR. age is not an accessible EV.
//! printAge() - ERROR. same thing...

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻






//? Variable Environment: Hoisting and the TDZ
//? Variable Environment: Hoisting and the TDZ
//? Variable Environment: Hoisting and the TDZ

// EC always has 3 parts.
    // Variable environment
    // Scope Chain
    // This keywork

// Hoisting: Makes some types of variables accessible/usable in the code before they are actully declared. 
    //# "Variable lifted to the top of their scope"
    // ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼
    //# No, Behind-The-Scenes...
    //% Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the VARIABLE ENVIRONMENT OBJECT.

// Does not work the same for all variable types.

//*                                  Hoisted?            Initial value           Scope
// Function delcarations             Yes                 Actual function         Block
// # We can use these before they are declared in the code, because they are stored in the variable environment object even before the code starts executing.
// Var variables                     Yes                 Undefined               Function
// # Var is also hoisted, but unlike functions var is undefined. It's weird, you'd expect an error or to get the actual value but not undefined. It's just weird, and not really useful and is a...
//! BIG SOURCE OF VAR BUGS!!!!     
// let and const variables           No                  <uninitialized>, TDZ    Block
// # Technically they're hoisted, but the value is set to <uninitialized> and palced in the TEMPORAL DEAD ZONE, so they can't be accessed between the beginning of the scope, and where they are declared in the code (<<< I've done this so many times... SEE BELOW!)
//% This is why let and const were introduced!
// Function expression/arrow fn's.      Depends if using var or let/cosnt(arrow functions are just variables). Made with Var? Hoisted as 'undefined'. Made with let/const? Hoisted as <uninitialized>

const theName = 'Joel'

if (theName === 'Joel'){
    // console.log(`Joel is a ${job}`) //! reference error: cannot access 'job' before initializiation. It know's it's out there because it was read and set to <uninitialized>, but that's it.
    const age = 2023-1989
    console.log(age)
    //% The 3 lines above this are the TDZ for the job variable.
    const job = 'learner'
    console.log(x) //! reference error: x is not defined.
}


//Why TDZ?
//# Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided.
// Makes const variables actually work!

//Why Hoisting?

//# Basically, so we can use function declarations before actual declarations
    // Mutual recursion
    // More readable code
    // Also works for var, since it's the only way it could work (at the time!)

    //? Hoisting and TDZ in practice   
    //? Hoisting and TDZ in practice
    //? Hoisting and TDZ in practice   

//% Hoisting with variables

console.log(me)
//! console.log(jobz)
//! console.log(yearz)

var me = 'Joel' // Actually hoisted, so undefined is logged.
// let jobz = 'learner' // Not hoisted, so //! error: cannot access 'jobz' before initializtion. 'jobz' is still in the TDZ from the console log down to where it is defined
// const yearz = 1989 // Not hoisted, so //! error: cannot access 'yearz' before initializtion. 'yearz' is still in the TDZ from the console log down to where it is defined



//% Hoisting with functions

console.log(addDecl(2,3))
// console.log(addExpr(2,3)) //% Const variable, so it's in the TDZ
// console.log(addArrow(2,3))
console.log(addArrow)

function addDecl(a,b){ //# Can be used (logged above) before declaring it! 
    return a + b
}

const addExpr = function(a,b){
    return a + b
}
var addArrow = (a,b) => a + b // Get's hoisted as undefined()... So above, we're calling undefined(2,3), //! which is error: undefined is "not a function"


// YES, ANOTHER example of why Var is bad :

if(!numProducts) deleteShoppingCart()

var numProducts = 10 //! ONCE AGAIN, numProducts is being hoisted up to as 'undefined', which is a falsy value (baaaad combo above!), so the deleteShoppingCart function is called! WHOOPS!

function deleteShoppingCart() {
    console.log('All products deleted')
}

var xx = 1
let y = 2
const zz = 3

// console.log(xx === window.xx) //# True in dev tools console.
// var shows up in the window object, where as let and const do not create properties on the window object.
// console.log(y === window.y)
// console.log(zz === window.zz)

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻






//? The 'this' keyword
//? The 'this' keyword
//? The 'this' keyword

//% this - special variable that is created for every execution context (every function).
// Takes the value of (points to) the "owner" of the function in which the this keyword is used.
    // 3rd piece of the each execution context, along with variable environment, and scope chain.

//% this - is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.
    // What does this mean?

//# Lets look at the 4 ways a function can be called:

    //# 1 - Method 👉 this = <Object that is calling the method>
    const Joel = {
        name: 'Joel',
        year: 1989,
        calcAge: function() { //% calcAge is the method
            return 2023 - this.year //% this = Joel, the object calling the method.
        }
    }

    //# 2 - Simple function call 👉 this = undefined. However, only valid for strict mode. If not, it will be the global object. Window for the browser, which can cause big issues!

    //# 3 - Arrow functions 👉 this = <this of surrounding function (lexical this, or, picked up from outer scope/parent function)>
    //% Arrow functions do not get their own this!

    //# 4 - Event Listener 👉 this = <DOM elemnt that the handler is attached to>

    //* 5 - Also... new, call, apply, bind 👉 <Later in the course...🕰️>

//! this - Will NEVER point to the function in which we are using it
//! this - Will NEVER point to the variable environment of the current function.




//? The 'this' keyword in practice.
//? The 'this' keyword in practice.
//? The 'this' keyword in practice.

console.log(this) //# The browser window, returned as {}

const calcAgeX = function(birthYear){
    console.log(2023-birthYear)
    console.log(this) //% points to 'udnefined'
}
calcAgeX(1989)

// For an arrow function.
const calcAgeArrow = birthYear => {
    console.log(2023-birthYear)
    console.log(this) //! points to 'window' now. Remember, arrow function does not it's own 'this', it instead uses the this of the parent scope, or the window.
}
calcAgeArrow(1976)

const joelz = {
    year: 1989,
    calcAge: function() {
        console.log(this) //% This object calling the joelz object, the 'Owner' of the method.
        console.log(2023 - this.year)
    }
}
joelz.calcAge()



//* What if we're calling a method FROM OUTSIDE the object we're currently in?
const catherine = {
    year: 1991,
}

catherine.calcAge = joelz.calcAge //! Here, we simply copy the method. Remember, functions are just values and can be duplicated, removed, shared, etc.,
catherine.calcAge() // 'this' always points to the object calling the method, catherine, and not joelz as it was when it was joelz.calcAge()

// const f = joelz.calcAge //% Saving the method function into a variable.
// f()     //! This is undefined, cannot read property 'year' of undefined. f is just a regular function call, not attached to an object
    //% f() has no owner, thus the 'this' keyword is undefined.



var firstNameZ = 'Catherine' // Adding this variable with the console log below, "console.log(this)", logs Catherine now.

const joel2 = {
    firstName: 'Joel',
    year: 1989,
    calcAge: function() {
        console.log(this) //% This object calling the method, or the joelz object, the 'Owner' of the method.
        console.log(2023 - this.year)
    },
    
    greet: () => {
        console.log(this) // Window object.
        console.log(`Hey ${this.firstNameZ}`)
        console.log(`Hey ${this.firstName}`)  // Window.firstName = undefined.  
    }
    //! hovering over 'this.firstName' reveals that the 'this' is the global 'this', therefore undefined.
    // The parent scope of "greet: () => console.log(`Hey ${this.firstName}`)" is the global scope, sicne it is within the joel2 scope, which is only 1 down from global.
    // var fistNameZ = 'Catherine' at the global level allows "console.log(`Hey ${this.firstNameZ}`)" to successfully locate the var
}
joel2.greet()



//* What if we have a function inside a method?

// isMillenial scope within calcAge scope.
//% INITIALLY,  console.log(this) = undefined. Why?
    // this isMillenial() is a regular function call even though it happens inside a method.
    //! RULE: Inside a regular function call, the this keyword must be undefined.
    //! RULE: Inside a regular function call, the this keyword must be undefined.
    //! RULE: Inside a regular function call, the this keyword must be undefined.

//* Solution #1: Use a separate variable called 'self' outside of the function assigning 'this' to it

//* Solution #2: Using an arrow function

const joel3 = {
    firstName: 'Joel',
    year: 1989,
    calcAge: function() {
        console.log(this) // this = Joel object.
        console.log(2023 - this.year)

        //* Solution #1: grabbing the 'jonas' object and saving it to the 'self' variable.
        // const self = this 
        // const isMillenial = function() {
        //     console.log(self)
        //     console.log(self.year >= 1981 && self.year <= 1996) //! self = undefined (see RULE above).
        //     console.log(this.year >= 1981 && this.year <= 1996)
        // }
        
        //* Solution #2: Use an arrow function.
        //! Grabs the this from it's parent scope (calcAge, which 'this' = 'joel3')
        const isMillenial = () => {
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1996)
        }
        isMillenial()

    },
    
    greet: () => {
        console.log(this) 
        console.log(`Hey ${this.firstName}`)    
    }
}

joel3.greet()
joel3.calcAge()

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻



//? Arguments keyword
//? Arguments keyword
//? Arguments keyword


//* Declarative and Expression functions have access to the arguments object.
//% Arrow functions DO NOT.

    //* Declarative
    const addExpr = function(a,b){
        console.log(arguments) //% parameters/arguments passed in. Output: 'Arguments(2) [a,b]
        return a + b
    }

    //* Expression
    function stuff(y,z){
        console.log(arguments) // save as above
        return y + z
    }

stuff(2,4)
addExpr(2,5)
addExpr(2,5,4, 'beth') // It is possible to add more arguments than what the function declares as initial arguments. They don't have a name, but they exist.
//# For example, we could have a loop that adds all the numbers together.

    //* Arrow 
    var addArrow = (a,b) => {
        //! console.log(arguments) // "arguments is not defined". Arrow function does not access to arguments object.
        return a + b
    }

addArrow(2,5,8)

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻






//? Primitives vs. Objects in Practice
//? Primitives vs. Objects in Practice
//? Primitives vs. Objects in Practice

// Primitive date types: 
Number
String
Boolean
undefined
null
Symbol
BigInt
// Everything else (REFERENCE TYPES) is objects: 
Object
Array
Function
//# and more!



//? Primitive values example:

// Call stack - Where functions are executed
// Heap - Where objects are stored (REFERENCE TYPES)

//* Call Stack:
// Below, age creates the memory address 0001 (30)
//      identifier          Memory Address  Value
//      age           //!↘  0001            33
//      oldAge           ↗  0002        //! 28

let age = 33 // Memory Value 0001 is created.
let oldAge = age // oldAge is assigned to Memory Address 0001.
age = 28 // Memory Value 0002 is created.

// Above, age points to 0002, and oldAge points to 0001 after the redeclaration. 
    //% The identifier actually points to the address, and NOT THE VALUE ITSELF.
    console.log(age) // Output: 28 
    console.log(oldAge) // Output: //! 33. oldAge was assigned (let oldAge = age) to 0001.



//? Let's keep going......

// 'me' creates a new 0003 address in the stack, and the value is stored as an object in the heap with a reference of D30F.

const me = {
    name: 'Joel',
    age: 33,
}

//* Call stack(continued):
//      identifier          Memory Address  Value
//      age              ↘  0001            28
//      oldAge           ↗  0002            33
//      me               →  0003        //% D30F

//* Heap:
//      Address             Value
//    //% D30F              {name: 'Joel', age: 31 }
//% Pieces of memory in the call stack have reference to the piece in the heap  (Address: D30F, value: {name: 'Joel', age: 33})



//? Let's keep going......

const friend = me 

//* Call stack (continued):
//      identifier          Memory Address  Value
//      age              ↘  0001            30
//      oldAge           ↗  0002            31
//      me               →  0003        //% D30F
//      friend       //! ↗ (0003)  // This is why the console log for friend is the same as me. They both point to D30F.

//* Heap (continued):
//      Address           Value
//%     D30F              {name: 'Joel', age: 33 }



//? Let's keep going......

friend.age = 28

//* Call stack (continued):
//      identifier          Memory Address  Value
//      age              ↘  0001            30
//      oldAge           ↗  0002            31
//      me               →  0003        //% D30F
//      friend           ↗  

//* Heap (continued):
//      Address           Value
//      D30F              {name: 'Joel', age: 28 } //! age is 28 now (friend.age = 28)

console.log('Friend', friend)   //% {name: 'Joel', age: 28}
console.log('Me', me)   //% {name: 'Joel', age: 28}
//! Even though it wasn't changed directly, me.age = 28 now because me and friend both point to 0003 memory address, which both have the same D30F object reference, therefore they are reading the same variable stored in the heap.
    // EVEN THOUGH the object was made with const!




//* Primitives types
let lastName = 'Fuelling'
// What if they get married :) We want to remember the old name as well!
let oldLastName = lastName
lastName = 'Zedell' // Saved the lastName in a new variable, and reassigned lastname to the new name
console.log(lastName, oldLastName) // Zedell Fuelling



//* The same thing with an ojbect/reference value

//* Reference types
// Objects
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}
// Arrays
let array = [[23, 'this', Number]]
// functions
const xTimes2 = (x) => {return x * 2}

const marriedJessica = jessica //% "copying" the ojbect. Actually, just the reference which points to the same object
marriedJessica.lastName = 'Davis'
console.log('Before Marriage:', jessica)
console.log('After Marriage: ', marriedJessica)
// Similar with age before, when we copied the original in only referenced the same object (jessica.lastName = 'Williams'),  which was changed with "marriedJessica.lastName = 'Davis'"
    //% In the stack, they both have the same memory address reference
    //% any property changed on marriedJessica will change on jessica itself
        // Two different naems for the same thing.
    //% Even though const was used for marriedJessica...
    //! What needs to be constant is the value in the stack. That value holds the reference, which we are not actually changing.
    //! We're only change the underlying object stored in the heap, which has nothing to do with const or let.



//? Let's keep going......

//! marriedJessica = {}
// This new object would be stored at a different position in memeory, therefore the reference would have to change and that does not work since it's trying to change a const in the stack.
    //! If we had 'let' instead of 'const' then we could change it to {}

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻


*/


//? Copying Objects
//? Copying Objects
//? Copying Objects

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Serano', 'Tucker']
}
// # console.log(jessica2)

//% Use Object.assign()
const jessicaCopy = Object.assign({}, jessica2) // This merges the new object with jessica2
//# Jessica get's married, changes last name to Davis.
jessicaCopy.lastName = 'Davis'
console.log(jessica2)
console.log(jessicaCopy) 
//! a NEW shallow copy, with the same properties! 
    // A NEW object {} was created in the heap
    // jessicaCopy is pointing to that object.

//! HOWEVER - This only works on the first level.
//! If we have an object inside the object, then the inner obejct will still be the same (the [] in 'family'). It will point to the same place in memory.

//% Object.assign() creates a SHALLOW COPY, only copies the property in the 1st level.
//% A deep clone will copy everything.



//* So, if we want to change the array in jessicaCopy

    //! Now, were manipulating the array object which is WITHIN the jessicaCopy object.
    // As we save it, it still looks the same
jessicaCopy.family.push('Cody') //% manipulating an object within an object
jessicaCopy.family.push('Steve')
//! family is a deeply nested property (object in object). Therefore, Object.assign() did not copy it to the new object.
console.log('Before Marriage', jessica2) //% Williams was preserved since it's in the 1st level, Object.assign() took care of the the property
console.log('After Marriage', jessicaCopy) 
    //! both jessica1, and jessicaCopy have a property called family which points at the same object in the meory heap.
    // So, before and after marriage, the family has all 5 names in the array.

    