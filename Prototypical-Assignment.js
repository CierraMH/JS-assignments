function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods){
    this.firstName = firstName
    this.lastName = lastName
    this.favoriteColor = favoriteColor
    this.favoriteNumber = favoriteNumber
    this.favoriteFoods = favoriteFoods
}
let peter = new Person("Peter", "Oleary", "Green", 42, ["Chicken", "Pasta"]);

Person.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
peter.fullName();
console.log(peter.fullName());

Person.prototype.toString = function(){
    return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}, Favorite Foods: ${this.favoriteFoods}`;
}
peter.toString();
console.log(peter.toString());

//adding a property to the Person object that is an empty array(below)
peter.family = [];

Person.prototype.addToFamily = function(FamilyMember){
    if (FamilyMember instanceof Person) {
        if (!(this.family.includes(FamilyMember))) {
            this.family.push(FamilyMember);
        }
    }
    //Needed (this.) to make sure it worked! on both line 30 &27
    return this.family.length;
}
let Adam = new Person( "Adam", "Sam", "Orange", 24, ["Pizza","Pineapples"]);

console.log(peter.addToFamily(Adam));
console.log(peter.family);