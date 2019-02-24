var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'Smug':
            case 'smug':
                bot.sendMessage({
                    to: channelID,
                    message: ReturnSmug()
                });
                
            break;
         }
     }
});

function ReturnSmug(){
    var smugs = [
        "http://37.media.tumblr.com/4dca38ee7250e0d1a9285a8b24b709b0/tumblr_n3voj4gLKg1qejlj8o3_250.gif",
        "https://thumbs.gfycat.com/RipeSlimyChicken-max-1mb.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/316/346/455.gif",
        "https://img.fireden.net/v/image/1450/20/1450207024908.gif",
        "https://media1.tenor.com/images/906bbc85a7820f68a7fc658aeeceb069/tenor.gif?itemid=10195728",
        "https://i.kym-cdn.com/photos/images/original/001/087/562/93c.gif",
        "https://lh3.googleusercontent.com/-Lry3vvmKGus/W3K0p33t76I/AAAAAAAAy6A/_wTQ0uEOYc0k3QD8sN29wo6ScvJtIO-VACJoC/w272-h320-p-rw/gplus657883443.gif",
        "https://thumbs.gfycat.com/BoilingLeanBonobo-size_restricted.gif",
        "https://i.gifer.com/CCOs.gif",
        "http://clipart-library.com/images/BcaEg8Lzi.gif",
        "https://i.imgur.com/SBZXr7z.gif",
        "Chris Is Gay"
    ];

    return smugs[getRandomInteger(0, smugs.length)];
};

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
};


