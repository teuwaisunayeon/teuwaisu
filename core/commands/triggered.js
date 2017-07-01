const fs = require("fs");
const Jimp = require("jimp");
var gear = require("../gearbox.js");
var paths = require("../paths.js");
var locale = require('../../utils/multilang_b');
var mm = locale.getT();

var cmd = 'profile';

var init = function (message, userDB, DB) {
var Server = message.guild;
var Channel = message.channel;
var Author = message.author;
if (Author.bot) return;
var Member = Server.member(Author);
var Target = message.mentions.users.first() || Author;

var img = Target.displayAvatarURL
Jimp.read(img).then(function (photo) {
    photo.resize(512, 512)
    Jimp.read(paths.BUILD + "trigger.png").then(function (lenna) {

        photo.composite(lenna,0,0)

        console.log("Success".green)
        photo.getBuffer(Jimp.MIME_PNG, function (err, image) {
            message.channel.sendFile(image)
        })

    })
})

}




module.exports = {
    pub: true,
    cmd: cmd,
    perms: 3,
    init: init,
    cat: 'misc'
};
