var paths = require("../paths.js");
exports.run = (bot, message, args, userData, caller, gear, points, skynet) => {
        console.log("paths.ROUNDIFY INVOKED by " + caller + "-------------\n")
        let img = message.author.avatarURL.substr(0, message.author.avatarURL.length - 10)
            // message.channel.sendFile(img)
            //  aImg = Jimp.read(img, function (err, image) {});
        gear.roundify(img, caller)
        setTimeout(function () {
            message.channel.sendFile(`${paths.ROUND}/${caller}.png`)
        }, 2000);
    };
