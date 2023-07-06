const { ActivityType } = require('discord.js');

module.exports = (client) => {

// .on is a Listener (if ___ occurs, do ___)
    console.log(`${client.user.tag} up and growing!`)
    setInterval(()=>{
        let random = Math.floor(Math.random()*status.length);
        client.user.setActivity(status[random]);
    }, 600000 );

// Possible statuses for Rosemi
let status = [
    {
    name: 'birds chirping',
    type: ActivityType.Listening ,
    },
    {
        name: '=help',
        type: ActivityType.Listening ,
        },
    {
    name: 'funny Podcasts',
    type: ActivityType.Listening ,
    },
    {
    name: 'over Rosebuds',
    type: ActivityType.Watching ,
    },
    {
        name: 'out for =help',
        type: ActivityType.Watching ,
        },
    {
    name: 'hamsters running around',
    type: ActivityType.Watching ,
    },
]

    client.user.setActivity(status[1]);
};