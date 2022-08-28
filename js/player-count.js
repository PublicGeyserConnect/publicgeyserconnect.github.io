$.getJSON("https://api.mcsrvstat.us/bedrock/2/geyserconnect.net", (status) => {
            if (status.debug.query === true) {
                document.querySelector('span.player-count').innerHTML = status.players.online + " Players Online";
            }
})