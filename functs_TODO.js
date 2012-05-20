funcsundefined{
//a bunch of variables need to be defined with var
define();
array();//probably mostly done.
differences in foreach()
stream_set_blocking();
//time()done
this.process_packets();
//array_key_exists()//done*
strtoupper();
//ord()//done*
urlencode()
file_get_contents();
stripos() 
die();
this.encryptPassword()
md5(); 
substr()
fsockopen();
fwrite()
chr()
stream_set_timeout();
stream_get_meta_data(); 
usleep();
strtolower()
str_replace();
//explode();//done*
unset()
func_num_args()
func_get_args()
implode()
array_values()
count()
isset()
call_user_func_array()
array_merge()
array_search()
pusleep();
this.arrPlayers[id].getID();
psleep();
fclose();
//is_numeric()//done
//array_shift();//done
}
//
funcsdefined{ 
function echo(text)
function __construct(data2, blnIsMe  false) 
function getID() 
function getUsername() 
function getAge() 
function getCoins() 
function isMember() 
function getMemberDays() 
function getMemberRemaining() 
function isApproved() 
function getPositionX() 
function getPositionY() 
function getColor() 
function getHeadItem() 
function getFaceItem() 
function getNeckItem() 
function getBodyItem() 
function getFeetItem() 
function getHandItem() 
function getFlagItem() 
function getPhoto() 
function getFrame() 
function getTimeZoneOffset() 
function getMinutesPlayed() 
function strigbet()
function strgbet()
function tickHandler()
function start(block  1) 
function serverId(strName) 
function printServerData() 
function loginPort(strUsername) 
function serverName(intId) 
function generateKey()
function __construct()
function initCon()
function packetInArray()
function connect()
function sendPacket()
function loadPlayer(data2, blnIsMe  false)
function sendRawPacket(strData func_num_args() > 1)
function decodePacket(data  false)
function waitForPacket(strPart)
function readRawPacket()
function readPacket()
function attachEvent(event, function)
function raiseEvent(event, data)
function __call(function, args)
function sendMessage(strMessage)
function sendBlocked(strMessage)
function sendEmote(mixEmoteId)
function sendJoke(mixJokeId)
function sendSafe(mixMsgId)
function sendLine(intMessageID)
function sendQuick(intMessageID)
function sendGuide(intMessageID)
function sendPosition(intX, intY)
function snowBall(intX, intY)
function sendAction(actionID)
function sendFrame(frameID)
function sendMail(penguinID, cardID)
function buddyRequest(penguinID)
function buddyAccept(penguinID)
function removeBuddy(penguinID)
function findBuddy(penguinID)
function buddyCheat(penguinID)
function addIgnore(penguinID)
function removeIgnore(penguinID)
function addItem(intItemId)
function addStamp(intId)
function updateColor(itemID)
function updateHead(itemID)
function updateFace(itemID)
function updateNeck(itemID)
function updateBody(itemID)
function updateHand(itemID)
function updateFeet(itemID)
function updateFlag(itemID)
function updatePhoto(itemID)
function updateRemove(itemID)
function joinIgloo(penguinID)
function openNewspaper()
function closeNewspaper()
function getCoins(amount)
function getPlayer(penguinID)
function buyPuffle(puffleID, name)
function joinGame(roomID)
function privateMessage(penguinID, message, mail)
function joinRoom(roomID, x  0)
function grabRoom(roomID)
function grabId(roomID, name)
function disconnect()
function readPack()
function messageRape()
function buddyRape(room)
}
funcsused{
define();
array();
stream_set_blocking(STDIN, false);
time()
this.process_packets();
this.raiseEvent();
fclose(this.sock); 
array_key_exists(intId, this.servers)
this.serverName(key)
strtoupper(strUsername);
ord(strUsername)
urlencode(pclkey)
file_get_contents(stringtoencode);
stripos(key, 'RROR:') 
die('ERROR: ' + key);
this.encryptPassword(password + rand_key)
md5(strPassword); 
substr(strHash, 16, 16)
this.loginPort(this.username);
fsockopen(strIp, intPort);
fwrite()
chr()
stream_set_timeout(sock, 10);
stream_get_meta_data(sock);
fclose(sock); 
usleep(70000);
is_numeric();
this.serverId(this.server); 
this.serverName(this.server);
this.initCon();
this.generateKey(password, randKey, true);
strtolower(username)
this.readPacket();
str_replace('|%', , data);
this.decodePacket(data)
explode("|", servlist);
array();
unset(server)
fclose(this.sock);
this.initCon();
this.generateKey(lkey, randKey);
this.packetInArray(, packets);
this.loadPlayer();
catch (PCLException e)
func_num_args()
func_get_args()
implode()
array_values()
count()
this.readRawPacket();
isset()
call_user_func_array()
array_merge()
this.sendRawPacket()
array_search()
this.waitForPacket();
this.privateMessage(id, message, mail);
pusleep(500000);
this.arrPlayers[id].getID();
this.grabRoom(roomID);
this.joinRoom(320);
psleep(3);
this.sendFrame(26);
this.buddyCheat(id);
fclose(this.sock);
is_numeric(data2)
array_shift(packet);
}
