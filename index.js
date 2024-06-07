const config = require("./config.json")
const Discord = require("discord.js-selfbot-v13")
const client = new Discord.Client()

client.on("ready", async () => {
    console.log(`Conectado em ${client.user.username} (${client.user.id})`)
    const guild = client.guilds.cache.get(config.guild_id)
    for (const member of guild.members.cache.values()) {
        const flags = await member.user.fetchFlags()
        if (flags.has(config.house_ballance)) {
            console.log(`User: ${member.user.username} (${member.user.id})`)
        }
    }
})

client.login(config.token)