const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with a customizable ping message.'),
    async execute(interaction) {
        const latency = interaction.client.ws.ping;

        const embed = new EmbedBuilder()
            .setTitle(config.pingTitle)
            .setDescription(`Latency: \`${latency} ms\``)
            .setColor(config.pingColor)
            .setFooter({ text: config.pingFooter })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};