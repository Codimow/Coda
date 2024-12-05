const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with an animated ping-pong effect.'),
    async execute(interaction) {
        await interaction.reply('🏓 Ping!');
        await new Promise(r => setTimeout(r, interaction.client.ws.ping));
        await interaction.editReply('🏓 Pong!');
    },
};