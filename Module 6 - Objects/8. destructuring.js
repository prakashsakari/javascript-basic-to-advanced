/**
 * Destructuring Objects
 */

 let obj = {
    name: "Prakash",
    address: {
        state: "MH",
        city: "Mumbai",
        locality: "Santacruz"
    },
    courses: ['html', 'css', 'js', 'reactjs', 'redux'],
}

// let {address: {city}} = obj;
// console.log(city)














const employees = {
    engineers: {
        em1: {
            id: 1,
            name: "Prakash Sakari",
            occupation: "Front End Engineer"
        },
        em2: {
            id: 2,
            name: "Ashish Jangra",
            occupation: "Data Scientist"
        },
    },
    placement: {
        em3: {
            id: 3,
            name: "Sakshi Awasthi",
            occupation: "Sr. Executive",
            achi:{
                first: "",
                second: "",
                third: ""
            }
        }
    },
    youtube: {
        em4: {
            id: 4,
            name: "Jay Paswan",
            occupation: "Youtube Manager"
        },
    }      
}


// let {engineers: {em2: {name, occupation}}} = employees;
// console.log(name, occupation);

let {youtube : {em4: {name, occupation}}} = employees;
console.log(name, occupation);
