const Discord = require('discord.js');
const client = new Discord.Client();
const user = new Discord.User();
var fs = require('fs'),
    request = require('request'),
os = require('os');

var emotes = {
    "emote": [
        {
        "name": "kappa",
        "url": "https://cdn.discordapp.com/emojis/341536265688186891.png"
	},{
        "name": "dafuq",
        "url": "https://a.deviantart.net/avatars/g/l/glarefaceplz.png"
	},{
	"name": "ummm",
	"url": "https://cdn.meme.am/cache/images/folder215/50x50/16131215.jpg"
	},{
	"name": "morty1",
	"url": "http://www.dizibox1.com/wp-content/uploads/afisler/rick-and-morty-50x50.jpg"
	},{
	"name": "PuTea",
	"url": "https://gibranali.com/assets/images/content/1505337703.jpg"
	},{
	"name": "morty2",
	"url": "https://gibranali.com/assets/images/content/1505337852.jpg"
	},{
	"name": "supsexy",
	"url": "https://gibranali.com/assets/images/content/1505340443.jpg"
	},{
	"name": "shoob",
	"url": "https://gibranali.com/assets/images/content/1505341673.jpg"
	},{
	"name": "confused",
	"url": "https://orig03.deviantart.net/b9a8/f/2016/017/1/4/confused_john_travolta_meme__comment_chat_emoticon_by_gold94chica-d9ocibb.gif"
	},{
	"name": "trump",
	"url": "https://gibranali.com/assets/images/content/1505417401.jpg"
	},{
	"name": "welcome",
	"url": "http://wla.fun/emoji/welcome.gif"
	},{
	"name": "?",
	"url": "http://wla.fun/emoji/084.jpg"
	},{
	"name": "conceit",
	"url": "http://wla.fun/emoji/conceit.jpg"
	},{
	"name": "smart",
	"url": "http://wla.fun/emoji/smart_.jpg"
	},{
	"name": "blink",
	"url": "http://wla.fun/emoji/blink.jpg"
	},{
	"name": "lol",
	"url": "http://wla.fun/emoji/lol.jpg"
	},{
	"name": "lenny",
	"url": "http://wla.fun/emoji/lenny.jpg"
	},{
	"name": "eggplant",
	"url": "http://wla.fun/emoji/thing.png"
	}
    ]
};


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {

if(message.content === ">emotes"){
var str = '```Available Emotes ' + os.EOL+ '' + os.EOL+ '```';
str = str.concat(os.EOL+''+os.EOL);
for(var i = 0; i < emotes.emote.length; i++) { 
	str = str.concat("`>"+emotes.emote[i].name+"`\t-\t`"+emotes.emote[i].url+"`" + os.EOL);
}

message.delete().then(
	message.author.send(str)
)


}


if(message.content.startsWith('>') && message.content != ">emotes"){

var content = message.content.replace('>','');
//make content an array

var extra = content.split(/ (.+)/)[1];

var command = content.split(/ (.+)/)[0];

var name = message.member.nickname;

if(name === null){
name = message.member.user.username;
}

if(!extra){
extra = ' ';
} else {
extra = '*'+extra+'*';
}




for(var i = 0; i < emotes.emote.length; i++) { 
	if (emotes.emote[i].name == command) {
        	message.delete().then(
		message.channel.send('`'+name+':` '+extra, {
    			file: emotes.emote[i].url // Or replace with FileOptions object
		})
		)
	}
}
}

});


client.login('BOT TOKEN HERE');
