/**
 * JS one threaded and deterministic
 * But that does not mean its always deterministic.
 * At event ordering level it can be non-deterministic as well page:12
 *
 */

/**
 * The event loop queue is like an amusement park ride: once you fin‐
ish the ride, you have to go to the back of the line to ride again. But
the Job queue is like finishing the ride, cutting in line, and getting
right back on.
 * page 23
 */

/**
 * the function as the individual,
indivisible unit of operations, whereby inside the function, state‐
ments run in predictable order (above the compiler level!), but at
the function-ordering level, events (aka async function invocations)
can happen in a variety of orders.
 */

/**
 * the function is acting as a callback, because it
serves as the target for the event loop to “call back into” the pro‐
gram, whenever that item in the queue is processed.
 */

/**
 *
 *  // A
ajax( "..", function(..){
    // C
    } );
    // B
    // A and // B happen now, under the direct control of the main JS
    program. But // C gets deferred to happen later, and under the con‐
    trol of another party—in this case, the ajax(..) function. In a basic
    sense, that sort of hand-off of control doesn’t regularly cause lots of
    problems for programs.
    But don’t be fooled by its infrequency and assume that this control
    switch isn’t a big deal. In fact, it’s one of the worst (and yet most
    subtle) problems with callback-driven design. It revolves around the
    idea that sometimes ajax(..) (i.e., the party you hand your callback
    continuation to) is not a function that you wrote, or that you
    directly control. Many times it’s a utility provided by some third
    party.
    We call this inversion of control, when you take part of your pro‐
    gram and give over control of its execution to another third party.
 *
*/


/**
 *https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
 * Simply put: A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.

More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions.
Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.
 */