const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with a styled embed containing latency.'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Pong!')
            .setDescription(`Latency: \`${interaction.client.ws.ping} ms\``)
            .setColor('#FF5733')
            .setFooter({ text: 'Responding in real-time' })
            .setTimestamp();
        await interaction.reply({ embeds: [embed] });
    },
};