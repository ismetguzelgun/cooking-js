/**
 * First callback hell
 * 
 */
/* psuedo
listen("click", function handler(evt) {
    setTimeout(function request() {
        ajax("http://some.url.1", function response(text) {
            if (text == "hello") {
                handler();
            }
            else if (text == "world") {
                request();
            }
        });
    }, 500);
});

listen("click", handler);

function handler() {
    setTimeout(request, 500);
}
function request() {
    ajax("http://some.url.1", response);
}
function response(text) {
    if (text == "hello") {
        handler();
    }
    else if (text == "world") {
        request();
    }
}
*/

function first(){
    // Simulate a code delay
    setTimeout( function(){
      console.log(1);
    }, 500 );
  }function second(){
    console.log(2);
  }first();
  second();