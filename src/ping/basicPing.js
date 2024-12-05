const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong and latency.'),
    async execute(interaction) {
        await interaction.reply(`Pong! Latency is \`${interaction.client.ws.ping} ms\``);
    },
};