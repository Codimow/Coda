const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Displays bot latency with a visual graph.'),
    async execute(interaction) {
        const latency = interaction.client.ws.ping;
        const bar = Math.floor(latency / 10).toString().padStart(10, '▬').slice(0, 10);
        const embed = new EmbedBuilder()
            .setTitle('Latency Graph')
            .setDescription(`Latency: \`${latency} ms\`\n\`[${bar}]\``)
            .setColor(latency < 100 ? '#00FF00' : latency < 200 ? '#FFA500' : '#FF0000');
        await interaction.reply({ embeds: [embed] });
    },
};