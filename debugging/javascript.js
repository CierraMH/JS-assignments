const storeOwners = [
    { charles: 1 },
   { sally: 1 },
  { cassandra: 1 },
    {
         "Danny Shavez": 1,
        location: "in NM",
},
];

const listNumberOfStores = function () {
for (let i = 0; i < storeOwners.length; i++) {
         let totalLocations = totalLocations + i;
  }
 return i;
};
let locations = listNumberOfStores;

function tellMeMyStores() {
console.log("Hey, can you tell me who owns stores?");
    if (locations > 0) {
           console.log("Of course, we have " + totalLocations + " stores");
  }
};

function hasStore() {
for (let i = 0; i < 3; i++) {
          people = Object.keys(storeOwners[i]);
        let person = people.toString();
           console.log("Yes, " + person + " has one");
}
};

tellMeMyStores();
hasStore();

let man = Object.keys(storeOwners[3]);
// console.log(man);
let mister = man[0];

let whereHeLives = storeOwners[3].location;
console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");