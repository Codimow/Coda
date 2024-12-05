const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with latency and shard information.'),
    async execute(interaction) {
        const latency = interaction.client.ws.ping;
        const shardId = interaction.client.shard.ids[0];
        await interaction.reply(`Pong! Latency: \`${latency} ms\` | Shard: \`${shardId}\``);
    },
};