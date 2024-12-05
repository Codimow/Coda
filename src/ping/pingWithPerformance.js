const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const os = require('os');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with ping information and performance metrics.'),
    async execute(interaction) {
        const latency = interaction.client.ws.ping;
        const cpuUsage = (os.loadavg()[0] / os.cpus().length) * 100;
        const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;

        const embed = new EmbedBuilder()
            .setTitle('Ping Response')
            .addFields(
                { name: 'Latency', value: `${latency} ms`, inline: true },
                { name: 'CPU Usage', value: `${cpuUsage.toFixed(2)}%`, inline: true },
                { name: 'Memory Usage', value: `${memoryUsage.toFixed(2)} MB`, inline: true }
            )
            .setColor('#FFD700')
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};