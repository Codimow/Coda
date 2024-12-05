const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with detailed ping information in an embed.'),
    async execute(interaction) {
        const latency = interaction.client.ws.ping;
        const uptime = interaction.client.uptime;
        const serverCount = interaction.client.guilds.cache.size;
        const shardId = interaction.client.shard ? interaction.client.shard.ids[0] : 'N/A';

        const embed = new EmbedBuilder()
            .setTitle('Ping Response')
            .addFields(
                { name: 'Latency', value: `${latency} ms`, inline: true },
                { name: 'Uptime', value: msToTime(uptime), inline: true },
                { name: 'Server Count', value: serverCount.toString(), inline: true },
                { name: 'Shard ID', value: shardId.toString(), inline: true }
            )
            .setColor('#00FF00')
            .setThumbnail(interaction.client.user.displayAvatarURL())
            .setFooter({ text: 'Requested by ' + interaction.user.tag })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};

function msToTime(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}