const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with a message and adds a reaction.'),
    async execute(interaction) {
        await interaction.reply('Pong!');
        await interaction.message.react('🏓');
    },
};