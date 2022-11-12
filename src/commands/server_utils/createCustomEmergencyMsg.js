const { SlashCommandBuilder, ChatInputCommandInteraction, Client } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("create_custom_msg")
        .setDescription("Create custom msg")
        .addStringOption((option) =>
            option.setName("code").setDescription("The code").setRequired(true),
        )
        .addStringOption((option) =>
            option
                .setName("text")
                .setDescription("The text to say")
                .setRequired(true),
        ),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        let code = interaction.options.getString("code");
        let text = interaction.options.getString('text');

        const { customMSG } = client;

        customMSG.set(code, text);

        interaction.reply({
            content: `Message ${code} added.`,
            ephemeral: true
        })
    },
};
