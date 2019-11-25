///objects litrals

// let user = {
//     name: "crystal",
//     age: 20,
//     email:"CRYSTAL@THA.COM",
//     location:"berlin",
//     blogs: ["why man and un rule", "10 things tro dio wak"]
// };

// console.log(user);
// console.log(user.name);

// user.age = 36;
// console.log(user.age);

// console.log(user["name"]);
// user["name"] = "chun-li";

// console.log(user.name);

// console.log(typeof user);

//adding methods to objects

// const blogs = [
//     {titel: "why is mac so nice", likes: 30},
//     {titel: "why am i so nice", likes: 50},
// ];

// console.log(blogs);


// let user = {
//     name: "crystal",
//     age: 20,
//     email:"CRYSTAL@THA.COM",
//     location:"berlin",
//     blogs: [    {titel: "why is mac so nice", likes: 30},
//                     {titel: "why am i so nice", likes: 50}],
//     login: function(){
//         console.log("the user has logged in");
//     },
//     logout(){
//         console.log("The user logged out")
//     },
//     logBlogs:function(){
//         // console.log(this.blogs);
//         console.log("this user has writteen theese blogs");
//         this.blogs.forEach(blog => {
//             console.log(blog.titel, blog.likes);
//         })
//     }
// };


// user.login();
// user.logout();
// user.logBlogs();

// const name = "mario";
// name.toUpperCase();

// math objects

// console.log(Math.PI);
// console.log(Math);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random*100));

// primitive values (stack)

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// refrence values (heap)

// const userOne = {name: "Ryu", age:30};
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.age = 40;
// console.log(userOne, userTwo);