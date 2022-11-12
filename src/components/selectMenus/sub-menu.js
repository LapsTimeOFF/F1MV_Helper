module.exports = {
	data: {
		name: 'sub-menu'
	},
	async execute(interaction, client) {
		if(interaction.values[0] === 'sht') {
			await interaction.channel.send({
				content: `Check https://beta.f1mv.com/docs/troubleshooting/drm-playback-issues#unstable-playback-stuttering-or-excessive-framedrops`
			});
			return;
		}
		if(interaction.values[0] === 'drm') {
			await interaction.channel.send({
				content: `Check https://beta.f1mv.com/docs/troubleshooting/drm-playback-issues#when-i-open-a-stream-the-window-stays-black`
			});
			return;
		}
		if(interaction.values[0] === 'sync') {
			await interaction.channel.send({
				content: `Check https://beta.f1mv.com/docs/usage/syncing-streams#a-word-on-buffer-buffering-and-low-latency-streaming`
			});
			return;
		}
		if(interaction.values[0] === 'free') {
			await interaction.channel.send({
				content: `Check https://beta.f1mv.com/docs/getting-started/faq#can-i-use-multiviewer-for-f1-to-watch-f1tv-for-free-`
			});
			return;
		}
		if(interaction.values[0] === 'signout') {
			await interaction.channel.send({
				content: `Check https://beta.f1mv.com/docs/usage/authentication#sign-out-of-your-account`
			});
			return;
		}
		await interaction.channel.send({
			content: `${interaction.values[0]}`
		});
	}
};