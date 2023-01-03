//Mixed Messages Generator 

// create a function
const messageGenerator = () => {

    //create an array
    const messages = [
        {Matt: ' The TV doesnt work'},
        {Alex: 'Im tired'},
        {Thomas: ' The dog ate my cookies'},
            ]

    let randomIndex =Math.floor((Math.random()*messages.length));

    let messageObject = messages[randomIndex];

    for(const [key, value] of Object.enteries(messageObject)) {
        let output = `Whats the matter: ${key}, ${value}`;
        return output;
    }
}
console.log(messageGenerator());