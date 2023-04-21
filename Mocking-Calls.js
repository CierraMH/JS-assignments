const users = [
    {Id: 1, Name: "Micky", Email: "micky@outlook.com"},
    {Id: 2, Name: "Minnie", Email: "minnie@outlook.com"},
    {Id: 3, Name: "Goofy", Email: "goofy@outlook.com"},
    {Id: 4, Name: "Max", Email: "max@outlook.com"}
];

function fetchUserById(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usersId = users.find((usersId) => usersId.Id === userId)
            if (usersId) {
                resolve(usersId);
            } else {
                reject("No ID");
            }
        }, 1000);        
    });       
};

fetchUserById(1)
.then((usersId) => { console.log(usersId);
return fetchUserById(2)
})
.then((usersId) => { console.log(usersId);
return fetchUserById(0)
})
.catch((error) => {console.error("Error", error)});

