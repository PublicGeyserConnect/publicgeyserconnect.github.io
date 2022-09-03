$.getJSON("https://api.mcsrvstat.us/bedrock/2/eu.geyserconnect.net", (status) => {
            if (status.debug.query === true) {
                document.querySelector('span.player-count').innerHTML = status.players.online + " Players Online";
            }
})