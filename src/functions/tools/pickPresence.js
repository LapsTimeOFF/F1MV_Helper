const { ActivityType, PresenceUpdateStatus } = require("discord.js");

module.exports = (client) => {
    client.pickPresence = async () => {
        const options = [
            {
                type: ActivityType.Watching,
                text: "you.",
                status: PresenceUpdateStatus.Online,
            }
        ];

        function randomNumber() {
            var result = "";
            var characters = "012";
            var charactersLength = characters.length;
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength),
            );
            return result;
        }

        const option = 0; //randomNumber();

        try {
            await client.user.setPresence({
                activities: [
                    {
                        name: options[option].text,
                        type: options[option].type,
                        
                    },
                ],
                status: options[option].status,
            });
        } catch (err) {
            console.error(err);
        }
    };
};
