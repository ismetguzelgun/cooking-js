//Closures and modules

function User(){
    let username,password;
    //The inner doLogin() function has a closure over username and password
    function doLogin(user,pw){
        username=user;
        password=pw;
        
        //this.username=user;
        //this.password=pw;
    }

    let publicApi={
        login:doLogin
    };

    return publicApi;
};

/**
 * We are not callling new User() here, on pur‐
pose, despite the fact that probably seems more
common to most readers. User() is just a func‐
tion, not a class to be instantiated, so it’s just
called normally. Using new would be inappropri‐
ate and actually waste resources.
 */

let fred=User();

console.log(typeof fred);
fred.login("fred","12313");

//without this keyword console can not log username "fred"
console.log(fred.username);