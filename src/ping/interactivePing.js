const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with a message and waits for a reaction.'),
    async execute(interaction) {
        await interaction.reply('Pong! React with 🎉 to see more info.');

        const filter = (reaction, user) => reaction.emoji.name === '🎉' && user.id === interaction.user.id;
        const collector = interaction.message.createReactionCollector({ filter, time: 15000 });

        collector.on('collect', async (reaction) => {
            await interaction.followUp('Thank you for reacting! Here’s some additional information.');
        });

        collector.on('end', collected => {
            if (collected.size === 0) {
                interaction.followUp('No reaction received.');
            }
        });
    },
};