let appData = {
    name: "Gmail",
    mailboxes: [
        "inbox",
        "starred",
        "important",
        "sent",
        "drafts",
    ],
    emails: [
        {Folder:"inbox", to:"Cierra", from: "Quora Digest", subject:"Top Stories For Cierra", body:"Top 10 foods that will help whitten your teeth"},
        {Folder:"inbox", to:"Cierra", from: "Micro Center", subject:"Your receipt from Micro Center", body:"Your Sales Information"},
        {Folder:"drafts", to:"Serina", from: "Cierra", subject:"My phone number", body:"This is my new number 469-234-7091"}
    ],
    categories: [
        "social",
        "updates",
        "promotions",
        "spam",
        "trash",
    ],
    chats: [
        {name: "Chris", lastChat: "Come pick me up; when you can"},
        {name: "Michael", lastChat: "Love you! See you soon!!"}
    ],
    
}

console.log(appData.mailboxes.join(","));
console.log()
appData.emails.forEach(email => {
    console.log(email.to +" "+ email.from  +" "+ email.subject +" "+ email.body);
})
console.log()
let email = appData.emails[1]
console.log(email.body);
console.log()
appData.emails[2].Folder = "sent"
appData.emails.push(
    {Folder: "drafts", to: "Chris", from:"Cierra", subject:"Meeting", body:"Meeting at 1:00pm EST"}
)
console.log(appData.emails)