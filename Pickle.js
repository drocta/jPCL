/* global window */

/* jslint adsafe: false, bitwise: false, browser: false, cap: false, css: false, debug: false, devel: false, eqeqeq: true, evil: false, forin: false, fragment: false, immed: true, indent: 4, laxbreak: false, maxerr: 100, maxlen: 80, newcap: true, nomen: false, on: true, onevar: false, passfail: false, plusplus: false, regexp: false, rhino: false, safe: false, sidebar: false, strict: false, sub: false, undef: true, white: false, widget: false */
//This is an attempt to translate PCL to javascript.
//It should be jslint compliant.
function echo(textecho) {
	document.getElementById("jPCLout").innerHTML = document.getElementById("jPCLout").innerHTML + textecho;
	return true;
}
function pick(arg, def) {
	return (typeof arg == 'undefined' ? def : arg);
}
function time () {
    // http://kevin.vanzonneveld.net
    // +   original by: GeekFG (http://geekfg.blogspot.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net) ,metjay, HKM
    return Math.floor(new Date().getTime() / 1000);
}
function array_key_exists(key, array) {
	return (key in array);
	/*if (key in array) {
		return true;
	} else {
		return false;
	}*/
}
function array_shift (inputArr) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Martijn Wieringa
    // %        note 1: Currently does not handle objects
    // *     example 1: array_shift(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'Kevin'
    var props = false,
        shift = undefined,
        pr = '',
        allDigits = /^\d$/,
        int_ct = -1,
        _checkToUpIndices = function (arr, ct, key) {
            // Deal with situation, e.g., if encounter index 4 and try to set it to 0, but 0 exists later in loop (need to
            // increment all subsequent (skipping current key, since we need its value below) until find unused)
            if (arr[ct] !== undefined) {
                var tmp = ct;
                ct += 1;
                if (ct === key) {
                    ct += 1;
                }
                ct = _checkToUpIndices(arr, ct, key);
                arr[ct] = arr[tmp];
                delete arr[tmp];
            }
            return ct;
        };


    if (inputArr.length === 0) {
        return null;
    }
    if (inputArr.length > 0) {
        return inputArr.shift();
    }

/*
    UNFINISHED FOR HANDLING OBJECTS
    php.js has a work in progress part of this, commented out. I am not including it to save space.
    */
}
function explode (delimiter, string, limit) {

    if ( arguments.length < 2 || typeof delimiter == 'undefined' || typeof string == 'undefined' ) {
        return null;
    }
	if ( delimiter === '' || delimiter === false || delimiter === null) {
		return false;
	}
	if ( typeof delimiter == 'function' || typeof delimiter == 'object' || typeof string == 'function' || typeof string == 'object'){
		return { 0: '' };
	}
	if ( delimiter === true ) {
		delimiter = '1';
	}
	
	// Here we go...
	delimiter += '';
	string += '';
	
	var s = string.split( delimiter );
	

	if ( typeof limit === 'undefined' ) {
		return s;
	}
	
	// Support for limit
	if ( limit === 0 ) {
		limit = 1;
	}
	
	// Positive limit
	if ( limit > 0 ){
		if ( limit >= s.length ) {
			return s;
		}
		return s.slice( 0, limit - 1 ).concat( [ s.slice( limit - 1 ).join( delimiter ) ] );
	}

	// Negative limit
	if ( -limit >= s.length ) {
		return [];
	}
	
	s.splice( s.length + limit );
	return s;
}
function ord(string) {
    //found on phpjs.org
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   input by: incidence
    // *     example 1: ord('K');
    // *     returns 1: 75
    // *     example 2: ord('\uD800\uDC00'); // surrogate pair to create a single Unicode character
    // *     returns 2: 65536
    var str = string + '',
        code = str.charCodeAt(0);
    if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
        var hi = code;
        if (str.length === 1) {
            return code; // This is just a high surrogate with no following low surrogate, so we return its value;
            // we could also throw an error as it is not a complete character, but someone may want to know
        }
        var low = str.charCodeAt(1);
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
        return code; // This is just a low surrogate with no preceding high surrogate, so we return its value;
        // we could also throw an error as it is not a complete character, but someone may want to know
    }
    return code;
}
function is_numeric (mixed_var) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: David
    // +   improved by: taith
    // +   bugfixed by: Tim de Koning
    // +   bugfixed by: WebDevHobo (http://webdevhobo.blogspot.com/)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    //retreived from php.js
    return (typeof(mixed_var) === 'number' || typeof(mixed_var) === 'string') && mixed_var !== '' && !isNaN(mixed_var);
}
/*
the long file unpacking thing is here. We are going to do that some other way, not a direct translation
*/
/*
get the list of rooms and servers and emoticons and stuff
*/
//interesting lines start on line # 14248

//get the ini file contents and parse them

/*
 *
 * The Player class
 *
 * This is the Player class of PCL.
 * Made by Test for the Penguin Client Library, which can be found at http://penguinclientsystem.com/
 *
 * @author Test
 * @version 0.0.2
*/
//turns out javascript has a really strange thing for making classes...
//class Player {
function Player() {
	// Private members
	//javascript doesnt support the private tag, and I don't see the problem in removing them, so here goes.
	//var 
	this.intID = 0;
	this.strUsername = "";
	this.intColor = 0;
	this.intHead = 0;
	this.intFace = 0;
	this.intNeck = 0;
	this.intBody = 0;
	this.intHand = 0;
	this.intFeet = 0;
	this.intFlag = 0;
	this.intPhoto = 0;
	this.intX = 0;
	this.intY = 0;
	this.f12 = 0;
	this.blnIsMember = false;
	this.intMemberDays = 0;
	this.blnIsAproved = 0;
	this.intFrame = 0;
	this.intAge = -1;
	this.intCoins = -1;
	this.intMemberRemaining = -1;
	this.intMinutesPlayed = -1;
	this.intTimeZoneOffset = -1;
	//jslint wanted me to combine all the declarations.
	//end variables that said private before them. the private is removed because javascript. Might have to undo that...
	// Constructor method
	this.__construct = function (data2, blnIsMe, packet) {
		blnIsMe = (typeof blnIsMe === "undefined") ? false  : blnIsMe;
		packet = (typeof packet === "undefined") ? false : packet;
		if (is_numeric(data2)) {
			return {"id": data2};
		}//array('id' => data2);//TODO this might be a problem, depending on things.
			//alternatively use
			/*var returnthis = new Array();
			returnthis['id']=data2;
			return returnthis;*/
		var data = explode('|', data2);
		if (!blnIsMe) {
			this.intID = data[0];
			this.strUsername = data[1];
			// [2] isn't saved for now
			this.intColor = data[3];
			this.intHead = data[4];
			this.intFace = data[5];
			this.intNeck = data[6];
			this.intBody = data[7];
			this.intHand = data[8];
			this.intFeet = data[9];
			this.intFlag = data[10];
			this.intPhoto = data[11];
			this.intX = data[12];
			this.intY = data[13];
			this.f12 = data[14];
			this.blnIsMember = !!data[15];
			this.intMemberDays = data[16];
		} else {
			this.intID = data[0];
			this.strUsername = data[1];
			 // [2] isn't saved for now
			this.intColor = data[3];
			this.intHead = data[4];
			this.intFace = data[5];
			this.intNeck = data[6];
			this.intBody = data[7];
			this.intHand = data[8];
			this.intFeet = data[9];
			this.intFlag = data[10];
			this.intPhoto = data[11];
			this.intX = data[12];
			this.intY = data[13];
			this.f12 = data[14];
			this.blnIsMember = !!data[15];
			this.intMemberDays = data[16];
			if(packet !== false){
				array_shift(packet);
				this.intAge = packet[6];
				this.intCoins = packet[2];
				this.intMemberRemaining = packet[9];
				this.intMinutesPlayed = packet[8];
				this.intTimeZoneOffset = packet[10];
			}
		}
	};
	
	// Accesor methods
	this.getID = function() {
		return this.intID;	
	};
	
	this.getUsername = function() {
		return this.strUsername;	
	};
	
	this.getAge = function() {
		return this.intAge;	
	};
	
	this.getCoins = function() {
		return this.intCoins;	
	};
	
	this.isMember = function() {
		return this.blnIsMember;
	};
	
	this.getMemberDays = function() {
		return this.intMemberDays;
	};
		
	this.getMemberRemaining = function() {
		return this.intMemberRemaining;	
	};
	
	this.isApproved = function() {
		return this.blnIsAproved;
	};
	
	this.getPositionX = function() {
		return this.intX;	
	};
	
	this.getPositionY = function() {
		return this.intY;	
	};
	
	this.getColor = function() {
		return this.intColor;	
	};
	
	this.getHeadItem = function() {
		return this.intHead;	
	};

	this.getFaceItem = function() {
		return this.intFace;   
	};
	
	this.getNeckItem = function() {
		return this.intNeck;	
	};
	
	this.getBodyItem = function() {
		return this.intBody;	
	};
		
	this.getFeetItem = function() {
		return this.intFeet;	
	};

	this.getHandItem = function() {
		return this.intHand;	
	};

	this.getFlagItem = function() {
		return this.intFlag;	
	};
	
	this.getPhoto = function() {
		return this.intPhoto;	
	};
	
	this.getFrame = function() {
		return this.intFrame;	
	};
	
	this.getTimeZoneOffset = function() {
		return this.intTimeZoneOffset;	
	};
	
	this.getMinutesPlayed = function() {
		return this.intMinutesPlayed;
	};
	
}

/*
player class copied directly from pcl, but with 
$ removed
-> changed to .
its possible more should be changed but I don't know javascript very well, and I don't have internet connection right now.
*/
//I don't think the php fork class is neccisarry for this, so I will ignore it for now.

//Util functions start

//function stribet(){}//replaces with between as defined below
//function strbet(){}
String.prototype.between = function(prefix, suffix){
	var s=this;
	var i = s.indexOf(prefix);
	if(i >= 0){
		s=s.substring(i + prefix.length);
	}
	else {
		return '';
	}
	if (suffix) {
		i=s.indexOf(suffix);
		if (i >= 0) {
			s = s.substring(0, i);
		}
		else {
			return '';
		}
	}
	return s;
};

//end util functions

//start library.inc
/*
//some of these are neccisary, some are not.
define('SERVER_ZONE', 'w1');
define('LOGIN_ZONE', 'w1');
define('API_VERSION', '153');
define('PCL_VERSION', '2.11');
define('READ_LEN', 32768);
define('VERSION_URL', 'http://pcl.clubpenguinphp.info/version.txt');
*/
//PHP PCL checks for newer versions here. because this is to be embedded in webpages, that would be kind of silly, and so it is not done here.
echo("you are using a javascript port of PCL5. PCL5 was made by andyh2, Mike, Charles, StaticABC and Test. The javascript version came from the ether.");
//start of PCL class:
var pclconfig, globservers, globrooms, globitems, globsafechat, globerrors;
//abstract class PCL {
function PCL(){
	//TODO: can javascript classes even be abstract?
	//Public members
	this.config = [];
	this.emotes;
	this.error = -1;
	this.errort = "No error has ocurred\n";
	this.itemlist = [];
	this.key = '';
	this.objPlayer; // Object of the Player class
	this.arrPlayers = []; // Array containing Player objects
	this.room = 0;
	this.roomlist;
	this.safelist;
	this.server = -1;
	this.servers;
	this.sock;
	this.x = 0;
	this.y = 0;

	//Private members
	this._ticks = 0;
	this._events = [];

	// Constructor of the Pickle Class. It Parses the ini files, and initialises input streams
	this.__construct() = function() {
			
			
			// Sets array pointers.
			// So that there is only one actual array if you have multiple instances of PCL class.
			// Saves memory.
			//TODO see how to do the & thing php has in javascript/
			//& is like a derefference thing. it makes it so the one thing uses the value of the other thing, always.
			this.config = pclconfig;
			this.servers = globservers;
			this.roomlist = globrooms;
			this.itemlist = globitems;
			this.safelist = globsafechat;
			this.errors = globerrors;
			this.emotes = globemotes;
			// Stops fread(STDIN, 8192) from freezing PCL if used on the web
			//stream_set_blocking(STDIN, false);//TODO this function will have to be changed or removed becuase it is not in javascript probably
			// register_tick_function(array(&this, 'tickHandler'), true);
	};
	this.__construct();
	this.tickHandler = function() {
		echo("called " + this.ticks++ + "\n");
	};
	//is tickshandler even used anymore?
	
	// @param ticktime: set to -1 to tick on every loop
	this.start = function(block, ticktime) {
		pick=pick(block,true);
		ticktime=pick(ticktime,1);
		if (block) {
			time = time() + ticktime;
			while (this.run) {
				this.process_packets();
				if (time() >= time) {
						time = time() + ticktime;
						this.raiseEvent('tick', []);
				}
			}
			fclose(this.sock);
		}
	};
	
	this.serverId = function(strName) {
		foreach (this.servers as value => server) {
			if (server['name'] == strName) {
				return value;
			}
		}
		return -1;
	};
	
	this.serverName = function(intId) {
		if (array_key_exists(intId, this.servers)) {
			return this.servers[intId]['name'] + "";
		}
		return "-1";
	};
	
	this.printServerData = function() {
		foreach (this.serverlist as key => serverobject) {
			if (this.serverName(key) == -1) {
				if (serverobject < 2)
					echo("Server: " + key + " is " + serverobject + " sixth full.\n");
				else
					echo("Server: " + key + " is " + serverobject + " sixths full.\n");
			} else {
				if (serverobject < 2)
					echo("Server: \"" + this.serverName(key) + "\" is " + serverobject + " sixth full.\n");
				else
					echo("Server: \"" + this.serverName(key) + "\" is " + serverobject + " sixths full.\n");
			}
		}
	};
	
	// Function to find the correct login port by the username strUsername
	this.loginPort = function(strUsername) {
		strUsername = strtoupper(strUsername);
		return(ord(strUsername) % 2) ? 3724 : 6112;
	};
	
	// Generates the key to athenticate with the server
	this.generateKey = function(password, rand_key, isLogin = false) {
		if (isLogin) {
			global pclkey;
			stringtoencode = 'http://pcl.clubpenguinphp.info/pclkey.php?PCLKEY=' + urlencode(pclkey) + '&PASSWORD=' + urlencode(password) + '&RANDKEY=' + urlencode(rand_key);
			key = file_get_contents(stringtoencode);
			if (!stripos(key, 'RROR:')) {
				//key = strigbet(key, '<K \>', '<EK \>');
				key=key.between('<K \>', '<EK \>');
				return key;
			} else {
				die('ERROR: ' + key);
			}
		} else {
			Key = this.encryptPassword(password + rand_key) + password;//This time, password is actually the loginkey from the login server
			return Key;
		}
	};
	
	// Returns the md5 hash strPassword, with two halves reversed.
	this.encryptPassword = function(strPassword) {
		strHash = md5(strPassword);
		strHash = substr(strHash, 16, 16) + substr(strHash, 0, 16);
		return strHash;
	};
	
	// Initialises the connection
	this.initCon = function(strIp = "204.75.167.6", intPort = NULL){
		if(intPort === NULL) intPort = this.loginPort(this.username);
		sock = fsockopen(strIp, intPort);
		fwrite(sock, '<policy-file-request/>' + chr(0));
		fwrite(sock, '<msg t=\'sys\'><body action=\'verChk\' r=\'0\'><ver v=\''. API_VERSION + '\' /></body></msg>' + chr(0));
		fwrite(sock, '<msg t=\'sys\'><body action=\'rndK\' r=\'-1\'></body></msg>' + chr(0));
		stream_set_timeout(sock, 10);
		data = fread(sock, READ_LEN);
		while (!(stripos(data, '</k>'))) {
			data .= fread(sock, READ_LEN);
			info = stream_get_meta_data(sock);
			if (info['timed_out']) {
				echo('Connection timed out!');
				fclose(sock);
				sock = fsockopen(strIp, intPort);
				fwrite(sock, '<policy-file-request/>' + chr(0));
				usleep(70000);
				fwrite(sock, '<msg t=\'sys\'><body action=\'verChk\' r=\'0\'><ver v=\''. API_VERSION + '\' /></body></msg>' + chr(0));
				usleep(70000);
				fwrite(sock, '<msg t=\'sys\'><body action=\'rndK\' r=\'-1\'></body></msg>' + chr(0));
				usleep(70000);
				stream_set_timeout(sock, 10);
				echo("/" + chr(8));
				data .= fread(sock, READ_LEN);
			}
		}
		this.sock =& sock;
		return data;
	};
	this.packetInArray = function(type, a, pisarray = true, retarray = false){
		foreach(a as p){
			if(p[0] == type){
				return p;
			}
		}
		return -1;
	};
	this.connect = function(username, password, server = -1, debug = false) {
		this.username = username;
		if (server != null)
		    this.server = server;
		if (!is_numeric(this.server)) {
			this.servername = this.server;
			this.server = this.serverId(this.server);
		} else {
			this.servername = this.serverName(this.server);
		}
		if (this.server < 0) return 1;

		echo('|' , chr(8));
		data = this.initCon();
		//randKey = strigbet(data, '<k>', '</k>');
		randKey = data.between('<k>', '</k>');
		echo('/' , chr(8));
		key = this.generateKey(password, randKey, true);
		fwrite(this.sock, '<msg t=\'sys\'><body action=\'login\' r=\'0\'><login z=\'' + LOGIN_ZONE + '\'><nick><![CDATA[' + strtolower(username) + ']]></nick><pword><![CDATA[' + key + ']]></pword></login></body></msg>' + chr(0));

		data = this.readPacket();
		echo('\\' + chr(8));
		if (stripos(data, 'xt%e')) {
			//this.error = strigbet(data, '%xt%e%-1%', '%');
			this.error = data.between('%xt%e%-1%', '%');
			this.errort = this.errors[this.error];
			this.run = false;
			echo('Error ID ', this.error, ': ', this.errort, "\n");
			return  this.error;
		}

		data = str_replace('|%', '%', data);
		packet = (this.decodePacket(data));
		packet = packet[0];
		servlist = packet[7];
		servlist = explode("|", servlist);
		this.serverlist = [];
		foreach (servlist as server) {
			dataserv = explode(",", server);
			this.serverlist[dataserv[0]] = dataserv[1];
		}
		unset(server);
		this.PlayerID = data.between('%xt%l%-1%', '%');
		strUnkown = data.between('%xt%l%-1%' + this.PlayerID + '%', '%');
		lkey = data.between('%xt%l%-1%' + this.PlayerID + '%' + strUnkown + '%', '%');
		fclose(this.sock);
		echo('|' + chr(8));

		data = this.initCon(this.servers[this.server]['ip'], this.servers[this.server]['port']);
		randKey = data.between('<k>', '</k>');
		key = this.generateKey(lkey, randKey);
		echo('/' + chr(8));
		fwrite(this.sock, '<msg t=\'sys\'><body action=\'login\' r=\'0\'><login z=\'' + SERVER_ZONE + '\'><nick><![CDATA[' + strtolower(username) + ']]></nick><pword><![CDATA[' + key + ']]></pword></login></body></msg>' + chr(0));
		fwrite(this.sock, '%xt%s%j#js%-1%' + this.PlayerID + '%' + lkey + '%en%' + chr(0));
		data = this.readPacket();
		while (stripos(data, '%xt%jr%') == false && stripos(data, '%xt%lp') == false)
			data .= this.readPacket();
		packets = this.decodePacket(data);
		packet = this.packetInArray('lp', packets);
		this.objPlayer = this.loadPlayer(packet[2], true, packet);
		packet = this.packetInArray('jr', packets);
		this.intRoomID = packet[1];
		this.extRoomID = packet[2];
		this.arrPlayers = [];
		this.room = [];
		this.room[this.extRoomID] = [];
		foreach (packet as key => player) {
			if (!(key <= 4)) {
				id = '|' + player;
				id = id.between('|', '|');
				try {
					this.arrPlayers[id] = this.loadPlayer(player);
					this.room[this.extRoomID][id] = this.arrPlayers[id];
				}
				catch (PCLException e) {
					echo(e);
				}
			}
		}
		echo("-" + chr(8));
		fwrite(this.sock, '%xt%s%i#gi%-1%' + chr(0));
		fwrite(this.sock, '%xt%s%b#gb%-1%' + chr(0));
		fwrite(this.sock, '%xt%s%n#gn%-1%' + chr(0));
		fwrite(this.sock, '%xt%s%l#mst%-1%' + chr(0));
		fwrite(this.sock, '%xt%s%p#pgu%-1%' + chr(0));
		fwrite(this.sock, '%xt%s%u#glr%-1%' + chr(0));
		echo('\\' + chr(8));
		echo('Successfully connected to ' , this.servername , "\n");
		this.run = true;
		return -1;
	};
	
	this.loadPlayer = function(data2, blnIsMe = false, packet = false) {
	    // Supress errors and warnings on invalid packets
	    // These warnings can occur when sending and receiving packets
	    // too fast
		return new Player(data2, blnIsMe, packet);
	};
	
	//					 //
	// Utility functions //
	//					 //
	this.sendPacket = function(data = NULL) {
		if(func_num_args() == 0)
			return -1;
		if(func_num_args != 1)
			data = func_get_args();
		data = '%xt%' + implode('%', data) + '%' + chr(0);
		fwrite(this.sock, data);
		return 0;
	};
	this.sendRawPacket = function(strData = NULL){
		if(func_num_args() > 1){
			strData = '%xt%' + implode('%', func_get_args()) + '%';
		}
		fwrite(this.sock, strData + chr(0));
	};
	this.decodePacket = function(data = null, old = false){
		if(data == null){
			data = this.readPacket();
		}
		packets = explode(chr(0), data);
		foreach(packets as key => data){
			if(data == NULL)
				continue;
			array[key] = explode('%', data);
			if (array[key][1] != 'xt')
				return false;
			unset(array[key][0]);
			unset(array[key][1]);
			array[key] = array_values(array[key]);
			final = count(array[key]) - 1;
			if(!array[key][final])
				unset(array[key][final]);
			array[key] = array_values(array[key]);
		}
		//exit();
		return array;
	};
	
	this.waitForPacket = function(strPart) {
	    do strData = this.readRawPacket();
	    while(stripos(strData, strPart) === false);
	    return strData;
	};
	
	this.readRawPacket = function(length = READ_LEN) {
		return this.readPacket(length);
	};
	this.readPacket = function(length = READ_LEN){
		do{
			data = fread(this.sock, length);
			if(!(strlen(data) -1 < 0)){
				while (data[strlen(data) - 1] != chr(0)) {
					data .= fread(this.sock, length);
				}
			}
		} while(strlen(data) -1 < 0);
		return data;
	};
	this.attachEvent = function(event, function) {
		this._events[event][] = function;
	};
	this.raiseEvent = function(event, data) {
		if (!isset(this._events[event]))
			return false;
			
			
		foreach (this._events[event] as event) {
			call_user_func_array(event, array_merge(new Array(this), data));
		}
	};
	public this.__call = function(function, args) {
			args = implode(', ', args);
			echo('Call to nonexistent method:', function, '() with args "', args, "\" failed!\nCheck that you haven't misspelt a function name.\n");
			sleep(5);
	};
}
//end of PCL class

//add package function 
//run package function 
//remove package function
//those are not neccisary, and wouldnt make sense becuase you can't install something in your probswe window.

//start Pickle class
class Pickle extends PCL {
	
	function sendMessage(strMessage) {
		this.sendRawPacket('%xt%s%m#sm%' + this.intRoomID + '%' + this.PlayerID + '%' + strMessage + '%');
	}
	
	function sendBlocked(strMessage) {
		this.sendRawPacket('%xt%s%m#mm%' + this.intRoomID + '%' + this.PlayerID + '%' + strMessage + '%');
	}
	
	function sendEmote(mixEmoteId){
	    if(!is_numeric(mixEmoteId)) mixEmoteId = array_search(mixEmoteId, this.emotes);
	    if(mixEmoteId === false) return false;
		this.sendRawPacket('%xt%s%u#se%' + this.intRoomID + '%' + mixEmoteId + '%');
		return true;
	}
	
	function sendJoke(mixJokeId){
	    if(!is_numeric(mixJokeId)) mixJokeId = array_search(mixJokeId, this.jokes);
	    if(mixJokeId === false) return false;
		this.sendRawPacket('%xt%s%u#sj%' + this.intRoomID + '%' + mixJokeId + '%');
		return true;
	}
	
	function sendSafe(mixMsgId){
		if(!is_numeric(mixMsgId)) mixMsgId = array_search(mixMsgId, this.safelist);
		if(mixMsgId === false) return false;
		this.sendRawPacket('%xt%s%u#ss%' + this.intRoomID + '%' + mixMsgId + '%');
		return true;
	}
	
	function sendLine(intMessageID){
		this.sendRawPacket('%xt%s%u#sl%' + this.intRoomID + '%' + intMessageID + '%');
	}
	
	function sendQuick(intMessageID){
		this.sendRawPacket('%xt%s%u#sq%' + this.intRoomID + '%' + intMessageID + '%');
	}
	
	function sendGuide(intMessageID){
		this.sendRawPacket('%xt%s%u#sg%' + this.intRoomID + '%' + intMessageID + '%');
	}
	
	function sendPosition(intX, intY){
		this.sendRawPacket('%xt%s%u#sp%' + this.intRoomID + '%' + intX + '%' + intY + '%');
	}
	
	function snowBall(intX, intY){
		this.sendRawPacket('%xt%s%u#sb%' + this.intRoomID + '%' + intX + '%' + intY + '%');
	}
	
	function sendAction(actionID){
		this.sendRawPacket('%xt%s%u#sa%' + this.intRoomID + '%' + actionID + '%');
	}
	
	function sendFrame(frameID){
		this.sendRawPacket('%xt%s%u#sf%' + this.intRoomID + '%' + frameID + '%');
	}
	
	function sendMail(penguinID, cardID){
		this.sendRawPacket('%xt%s%l#ms%' + this.intRoomID + '%' + penguinID + '%' + cardID + '%');
	}
	
	function buddyRequest(penguinID){
		this.sendRawPacket('%xt%s%b#br%' + this.intRoomID + '%' + penguinID + '%');
	}
	
	function buddyAccept(penguinID){
		this.sendRawPacket('%xt%s%b#ba%' + this.intRoomID + '%' + penguinID + '%');
	}
	
	function removeBuddy(penguinID){
		this.sendRawPacket('%xt%s%b#rb%' + this.intRoomID + '%' + penguinID + '%');
	}
	
	function findBuddy(penguinID){
		this.sendRawPacket('%xt%s%u#bf%' + this.intRoomID + '%' + penguinID + '%');
	}
	
	function buddyCheat(penguinID){
		this.sendRawPacket('%xt%s%b#br%' + this.intRoomID + '%' + penguinID + '%');
		this.sendRawPacket('%xt%s%b#ba%' + this.intRoomID + '%' + penguinID + '%');
	}
	
	function addIgnore(penguinID){
		this.sendRawPacket('%xt%s%n#an%' + this.intRoomID + '%' + penguinID + '%');
	}
	
	function removeIgnore(penguinID){
		this.sendRawPacket('%xt%s%n#rn%' + this.intRoomID + '%' + penguinID + '%');
	}
	
	function addItem(intItemId){
		this.sendRawPacket('%xt%s%i#ai%' + this.intRoomID + '%' + intItemId + '%');
	}
	
	function addStamp(intId){
    	this.sendRawPacket('%xt%s%st#sse%' + this.intRoomID + '%' + intId + '%');
	}
	
	function updateColor(itemID){
		this.sendRawPacket('%xt%s%s#upc%' + this.intRoomID + '%' + itemID + '%');
	}
	
	function updateHead(itemID){
		this.sendRawPacket('%xt%s%s#uph%' + this.intRoomID + '%' + itemID + '%');
	}
	
	function updateFace(itemID){
		this.sendRawPacket('%xt%s%s#upf%' + this.intRoomID + '%' + itemID + '%');
	}
	
	function updateNeck(itemID){
		this.sendRawPacket('%xt%s%s#upn%' + this.intRoomID + '%' + itemID + '%');
	}
	
	function updateBody(itemID){
		this.sendRawPacket('%xt%s%s#upb%' + this.intRoomID + '%' + itemID + '%');
	}
	
	function updateHand(itemID){
		this.sendRawPacket('%xt%s%s#upa%' + this.intRoomID + '%' + itemID + '%');
	}
	
	function updateFeet(itemID){
		this.sendRawPacket('%xt%s%s#upe%' + this.intRoomID + '%' + itemID + '%');
	}
	
	function updateFlag(itemID){
		this.sendRawPacket('%xt%s%s#upl%' + this.intRoomID + '%' + itemID + '%');
	}
	
	function updatePhoto(itemID){
		this.sendRawPacket('%xt%s%s#upp%' + this.intRoomID + '%' + itemID + '%');
	}
	
	function updateRemove(itemID){
		this.sendRawPacket('%xt%s%s#upr%' + this.intRoomID + '%' + itemID + '%');
	}
	
	function joinIgloo(penguinID){
		if(this.extRoomID == penguinID) return true;
		this.sendRawPacket('%xt%s%g#gm%' + this.intRoomID + '%' + penguinID + '%');
		this.sendRawPacket('%xt%s%p#pg%' + this.intRoomID + '%' + penguinID + '%');
		this.sendRawPacket('%xt%s%j#jp%' + this.intRoomID + '%' + penguinID + '%');
		data = this.readRawPacket();
		retry = 0;
		while (!(stripos(data, 'xt%jr%'))) {
		    if(stripos(data, 'xt%e%' && retry < 10)) {
			    this.sendRawPacket('%xt%s%j#jp%' + this.intRoomID + '%' + penguinID + 1000 + '%');
			    retry++;
			}
			data = this.readRawPacket();
		}
		this.intRoomID = data.between('%xt%jr%', '%');
		this.extRoomID = data.between('%xt%jr%' + this.intRoomID + '%', '%');
	}
	
	function openNewspaper(){
		this.sendRawPacket('%xt%s%t#at%'. this.intRoomID + '%1%1%');
	}
	
	function closeNewspaper(){
		this.sendRawPacket('%xt%s%t#rt%'. this.intRoomID + '%1%');
	}
	
	function getCoins(amount){
		this.sendRawPacket('%xt%z%zo%' + this.intRoomID + '%' + amount + '%');
	}
	
	function getPlayer(penguinID){
		this.sendRawPacket('%xt%s%u#gp%'. this.intRoomID + '%' + penguinID + '%');
	}
	
	function buyPuffle(puffleID, name){
		this.sendRawPacket('%xt%s%p#pn%' + this.intRoomID + '%' + puffleID + '%' + name + '%');
	}
	
	function joinGame(roomID) {
			this.sendRawPacket('%xt%s%j#jr%' + this.intRoomID + '%' + roomID + '%0%0%');
			data = this.waitForPacket('xt%jg%');
			this.intRoomID = data.between('%xt%jg%', '%');
			this.extRoomID = data.between('%xt%jg%' + this.intRoomID + '%', '%');
	}
	
	function messageRape(room, message, mail = 105) {
		packet = this.grabRoom(room);
		if (room != 320) {
			this.joinRoom(320);
		} else
			this.joinRoom(321);
		this.joinRoom(room);
		penguins = explode('%', packet);
		foreach (penguins as data) {
			if (!(stripos(data, this.PlayerID)) && (stripos(data, '|'))) {
				info = explode('|', data);
				id = info[0];
				echo(room + ' ' + message + ': ' + id + "\n");
				this.privateMessage(id, message, mail);
				sleep(4);
			}
		}
	}
		
	function privateMessage(penguinID, message, mail) {
	    this.sendRawPacket('sl#ms', this.intRoomID, penguinID, mail, message);
	}
	
	function joinRoom(roomID, x = 0, y = 0) {
		/*if(roomID > 900 && roomID <- 999 ){
				return this.joinGame(roomID);
		}*/
		if(!is_numeric(roomID)){
		    roomWas = true;
		    roomIDWas = roomID;
		    foreach(this.roomlist as idroom => roomarr){
		        if(roomarr['name'] == roomID){
			        roomID = idroom;
			        break 2;
			    }
		    }
		}
		if(roomWas == true && roomIDWas == roomID){
				return false;
		}
		if (this.extRoomID != roomID){
			this.sendRawPacket('%xt%s%j#jr%' + this.intRoomID + '%' + roomID + '%' + x + '%' + y + '%');
			data = fread(this.sock, READ_LEN);
			retry = 0;
			while (stripos(data, 'xt%jr') === false && stripos(data, 'xt%jg') === false) {
				if(stripos(data, 'xt%e%') && retry < 15) {
					this.sendRawPacket('%xt%s%j#jr%' + this.intRoomID + '%' + roomID + '%' + x + '%' + y + '%');
					retry++;
					pusleep(500000);
				}
				elseif(stripos(data, 'xt%e%')){
					return;
				}
				data = fread(this.sock, READ_LEN);
			}
				data = str_replace('%' + chr(0) + '%', 'lol%%lol%%', data);
				data = str_replace('%' + chr(0), '', data);
				data = str_replace('lol%%lol%%', '%' + chr(0) + '%', data);
				packets = explode(chr(0), data);
				foreach(packets as packet){
					if(stripos(packet, 'xt%jr') !== false || stripos(packet, 'xt%jg') !== false){
						packet = explode('%', packet);
						this.intRoomID = packet[3];
						this.extRoomID = packet[4];
						foreach(packet as key => player){
							if(!(key <= 4)){
								id = '|' + player;
								id = id.between('|', '|');
								try{
									this.arrPlayers[id] = this.loadPlayer(player);
									this.room[this.extRoomID][id] = this.arrPlayers[id].getID();
								}
								catch(PCLException e){
								echo(e);
								}
							}
						}
				}
			}
		}
	}

	function grabRoom(roomID){
		if (this.extRoomID != roomID){
			this.sendRawPacket('%xt%s%j#jr%' + this.intRoomID + '%' + roomID + '%0%0%');
			data = fread(this.sock, READ_LEN);
			while (!(stripos(data, 'xt%jr%'))) {
				if(stripos(data, 'xt%e%')) {
					return 0;
				}
				data = fread(this.sock, READ_LEN);
			}
			this.intRoomID = data.between('xt%jr%', '%');
			this.extRoomID = data.between('xt%jr%' + this.intRoomID + '%', '%');
			return data;
		}
	}
	
	function grabId(roomID, name){
		packet = this.grabRoom(roomID);
		if (stripos(packet, name)){
			penguins = explode('%', packet);
			foreach(penguins as data){
				if(stripos(data, name)){
					info = explode('|', data);
					id = info[0];
				}
			}
			return id;
		} else echo(name + " was not found in this room\n\n");
	}
	
	function buddyRape(room){
		packet = this.grabRoom(room);
		this.joinRoom(320);
		this.joinRoom(room, 440, 380);
		psleep(3);
		this.sendFrame(26);
		penguins = explode('%', packet);
		foreach(penguins as data) {
			if(!(stripos(data, this.PlayerID)) && (stripos(data, '|'))) {
				info= explode('|', data);
				id = info[0];
				this.buddyCheat(id);
			}
		}
	}
	
	function disconnect() {
		fclose(this.sock);
	}
	function readPack() {
		data = this.readRawPacket();
		if(stripos(data, 'xt%e%')){
			error = data.between('%xt%e%-1%', '%');
			ret = [];
			ret[] = data;
			ret[] = DEFAULT_ERROR;
			ret[] = error;
			return ret;
		}
	}
}
