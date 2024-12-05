const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with a deferred pong.'),
    async execute(interaction) {
        await interaction.deferReply();
        await interaction.editReply('Pong! Latency is `' + interaction.client.ws.ping + ' ms`');
    },
};