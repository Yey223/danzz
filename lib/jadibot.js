// No enc? beli 20k
// Wa.me/6289512545999
const _0xdd11db=_0x5579;(function(_0x3b2db9,_0x53146b){const _0x28fa36=_0x5579,_0x557989=_0x3b2db9();while(!![]){try{const _0x5a0b21=-parseInt(_0x28fa36(0x1ee))/0x1*(parseInt(_0x28fa36(0x1be))/0x2)+parseInt(_0x28fa36(0x1d6))/0x3+-parseInt(_0x28fa36(0x198))/0x4*(-parseInt(_0x28fa36(0x1ad))/0x5)+parseInt(_0x28fa36(0x188))/0x6+-parseInt(_0x28fa36(0x17e))/0x7*(parseInt(_0x28fa36(0x199))/0x8)+-parseInt(_0x28fa36(0x1f6))/0x9+parseInt(_0x28fa36(0x1d9))/0xa;if(_0x5a0b21===_0x53146b)break;else _0x557989['push'](_0x557989['shift']());}catch(_0x2ead05){_0x557989['push'](_0x557989['shift']());}}}(_0x7aad,0x6a71e));const {modul}=require(_0xdd11db(0x192)),{baileys,boom,chalk,fs,figlet,FileType,path,process,PhoneNumber}=modul,{Boom}=boom,{default:makeWaSocket,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,generateWAMessage,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=baileys,{color,bgcolor}=require(_0xdd11db(0x19b)),log=pino=require(_0xdd11db(0x19e)),qrcode=require(_0xdd11db(0x1a2)),rimraf=require(_0xdd11db(0x1ef)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0xdd11db(0x1d1)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep,reSize}=require(_0xdd11db(0x18b)),owner=JSON[_0xdd11db(0x1f1)](fs[_0xdd11db(0x1da)](_0xdd11db(0x1b1))[_0xdd11db(0x1df)]()),store=makeInMemoryStore({'logger':pino()[_0xdd11db(0x1ac)]({'level':_0xdd11db(0x1ec),'stream':_0xdd11db(0x1d0)})});function _0x5579(_0x135b25,_0x2496af){const _0x7aade0=_0x7aad();return _0x5579=function(_0x5579da,_0x37db23){_0x5579da=_0x5579da-0x17e;let _0x448615=_0x7aade0[_0x5579da];return _0x448615;},_0x5579(_0x135b25,_0x2496af);}if(global['conns']instanceof Array)console[_0xdd11db(0x1bc)]();else global['conns']=[];const jadibot=async(_0x1ef7d4,_0x33a1e1,_0xe3ffc7)=>{const _0x3c14e0=_0xdd11db,{sendImage:_0x2f2dc0,sendMessage:_0x2332d3}=_0x1ef7d4,{reply:_0x4ec35a,sender:_0x254095}=_0x33a1e1,{state:_0x4510ba,saveCreds:_0x579fa4}=await useMultiFileAuthState(path[_0x3c14e0(0x185)](__dirname,_0x3c14e0(0x1a4)+_0x254095),log({'level':_0x3c14e0(0x1ec)}));try{async function _0x2f0802(){const _0x13a4dd=_0x3c14e0;let {version:_0x27f650,isLatest:_0x14a755}=await fetchLatestBaileysVersion();const _0x5478b1=await makeWaSocket({'auth':_0x4510ba,'browser':[_0x13a4dd(0x18f),_0x13a4dd(0x19a),_0x13a4dd(0x1de)],'logger':log({'level':'silent'}),'version':_0x27f650});_0x5478b1['ws']['on']('CB:Blocklist',_0x111311=>{const _0x3f384c=_0x13a4dd;if(blocked[_0x3f384c(0x1d4)]>0x2)return;for(let _0xf29526 of _0x111311[0x1]['blocklist']){blocked[_0x3f384c(0x184)](_0xf29526[_0x3f384c(0x1cf)](_0x3f384c(0x189),_0x3f384c(0x18a)));}}),_0x5478b1['ws']['on'](_0x13a4dd(0x1e9),async _0x3bb025=>{const _0x369cb9=_0x13a4dd,_0x291373=_0x3bb025[_0x369cb9(0x1a0)][0x0][_0x369cb9(0x190)][_0x369cb9(0x1ea)],_0x345432=_0x3bb025[_0x369cb9(0x1a0)][0x0][_0x369cb9(0x190)][_0x369cb9(0x1ca)],_0x1b4a67=_0x3bb025['attrs']['id'],_0x59eea0=_0x3bb025[_0x369cb9(0x190)]['t'];_0x5478b1[_0x369cb9(0x1e6)]({'tag':_0x369cb9(0x1b8),'attrs':{'from':_0x369cb9(0x1bd),'id':_0x1b4a67,'t':_0x59eea0},'content':[{'tag':'reject','attrs':{'call-creator':_0x291373,'call-id':_0x345432,'count':'0'},'content':null}]});if(_0x3bb025[_0x369cb9(0x1a0)][0x0][_0x369cb9(0x1c2)]=='offer'){let _0x174579=await _0x5478b1[_0x369cb9(0x17f)](_0x291373,owner);await _0x5478b1[_0x369cb9(0x1c6)](_0x291373,{'text':'Sistem\x20Otomatis\x20Block!!!\x0aJangan\x20Menelpon\x20Bot!!!\x0aSilahkan\x20Hubungi\x20Owner\x20Untuk\x20Dibuka!!!'},{'quoted':_0x174579}),await sleep(0x1f40),await _0x5478b1[_0x369cb9(0x1af)](_0x291373,'block');}}),_0x5478b1['ev']['on'](_0x13a4dd(0x1db),async _0xb1a20b=>{const _0x2351fd=_0x13a4dd;try{kay=_0xb1a20b[_0x2351fd(0x1c9)][0x0];if(!kay[_0x2351fd(0x1f2)])return;kay[_0x2351fd(0x1f2)]=Object[_0x2351fd(0x1e7)](kay[_0x2351fd(0x1f2)])[0x0]===_0x2351fd(0x1f7)?kay[_0x2351fd(0x1f2)][_0x2351fd(0x1f7)][_0x2351fd(0x1f2)]:kay[_0x2351fd(0x1f2)];if(kay[_0x2351fd(0x1d2)]&&kay[_0x2351fd(0x1d2)][_0x2351fd(0x180)]===_0x2351fd(0x186))return;if(!_0x5478b1[_0x2351fd(0x1b7)]&&!kay[_0x2351fd(0x1d2)][_0x2351fd(0x1f3)]&&_0xb1a20b['type']==='notify')return;if(kay[_0x2351fd(0x1d2)]['id'][_0x2351fd(0x1a3)](_0x2351fd(0x182))&&kay[_0x2351fd(0x1d2)]['id'][_0x2351fd(0x1d4)]===0x10)return;_0x33a1e1=smsg(_0x5478b1,kay,store),require(_0x2351fd(0x1d7))(_0x5478b1,_0x33a1e1,_0xb1a20b,store);}catch(_0xd18dd7){console[_0x2351fd(0x1bc)](_0xd18dd7);}}),_0x5478b1[_0x13a4dd(0x1b7)]=!![],store[_0x13a4dd(0x1b2)](_0x5478b1['ev']),_0x5478b1['ev']['on'](_0x13a4dd(0x1b4),_0x579fa4),_0x5478b1['ev']['on'](_0x13a4dd(0x1e2),async _0x1e7754=>{const _0xc47aa1=_0x13a4dd,{lastDisconnect:_0x5325cc,connection:_0x32b992}=_0x1e7754;if(_0x32b992==_0xc47aa1(0x1e1))return;if(_0x32b992){if(_0x32b992!=_0xc47aa1(0x1e1))console['log'](_0xc47aa1(0x19d));}console[_0xc47aa1(0x1bc)](_0x1e7754);if(_0x1e7754['qr'])await _0x2f2dc0(_0xe3ffc7,await qrcode[_0xc47aa1(0x1a8)](_0x1e7754['qr'],{'scale':0x8}),'Scan\x20QR\x20ini\x20untuk\x20jadi\x20bot\x20sementara\x0a\x0a1.\x20Klik\x20titik\x20tiga\x20di\x20pojok\x20kanan\x20atas\x0a2.\x20Ketuk\x20WhatsApp\x20Web\x0a3.\x20Scan\x20QR\x20ini\x20\x0aQR\x20Expired\x20dalam\x2030\x20detik',_0x33a1e1);console[_0xc47aa1(0x1bc)](_0x32b992);_0x32b992==_0xc47aa1(0x1c5)&&(_0x5478b1['id']=_0x5478b1[_0xc47aa1(0x1ed)](_0x5478b1[_0xc47aa1(0x1e8)]['id']),_0x5478b1[_0xc47aa1(0x1f0)]=Date[_0xc47aa1(0x1cc)](),global['conns'][_0xc47aa1(0x184)](_0x5478b1),await _0x33a1e1[_0xc47aa1(0x194)]('*Connected\x20to\x20Whatsapp\x20-\x20Bot*\x0a\x0a*User\x20:*\x0a\x20_*×\x20id\x20:\x20'+_0x5478b1[_0xc47aa1(0x1ed)](_0x5478b1['user']['id'])+'*_'),user=''+_0x5478b1[_0xc47aa1(0x1ed)](_0x5478b1['user']['id']),txt='*Terdeteksi\x20menumpang\x20Jadibot*\x0a\x0a\x20_×\x20User\x20:\x20@'+user[_0xc47aa1(0x1ae)]('@')[0x0]+'_',_0x2332d3('6289512545999@s.whatsapp.net',{'text':txt,'mentions':[user]}));if(_0x32b992==='close'){let _0x119f0a=new Boom(_0x5325cc?.[_0xc47aa1(0x1ba)])?.['output']['statusCode'];if(_0x119f0a===DisconnectReason[_0xc47aa1(0x1b9)])console['log'](_0xc47aa1(0x1f5)),_0x5478b1[_0xc47aa1(0x1f4)]();else{if(_0x119f0a===DisconnectReason[_0xc47aa1(0x1e3)])console[_0xc47aa1(0x1bc)](_0xc47aa1(0x1b6)),_0x2f0802();else{if(_0x119f0a===DisconnectReason[_0xc47aa1(0x191)])console[_0xc47aa1(0x1bc)]('Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),_0x2f0802();else{if(_0x119f0a===DisconnectReason[_0xc47aa1(0x1ce)])console[_0xc47aa1(0x1bc)](_0xc47aa1(0x1cb)),_0x5478b1[_0xc47aa1(0x1f4)]();else{if(_0x119f0a===DisconnectReason[_0xc47aa1(0x1aa)])console[_0xc47aa1(0x1bc)](_0xc47aa1(0x1c3)),_0x5478b1['logout']();else{if(_0x119f0a===DisconnectReason[_0xc47aa1(0x1a7)])console[_0xc47aa1(0x1bc)]('Restart\x20Required,\x20Restarting...'),_0x2f0802();else{if(_0x119f0a===DisconnectReason[_0xc47aa1(0x1e0)])console[_0xc47aa1(0x1bc)](_0xc47aa1(0x1bb)),_0x2f0802();else _0x5478b1[_0xc47aa1(0x1d3)](_0xc47aa1(0x195)+_0x119f0a+'|'+_0x32b992);}}}}}}}}),_0x5478b1[_0x13a4dd(0x1ed)]=_0x3b1e07=>{const _0x565d25=_0x13a4dd;if(!_0x3b1e07)return _0x3b1e07;if(/:\d+@/gi['test'](_0x3b1e07)){let _0x1d57e9=jidDecode(_0x3b1e07)||{};return _0x1d57e9[_0x565d25(0x1e8)]&&_0x1d57e9[_0x565d25(0x1c8)]&&_0x1d57e9[_0x565d25(0x1e8)]+'@'+_0x1d57e9[_0x565d25(0x1c8)]||_0x3b1e07;}else return _0x3b1e07;},_0x5478b1['ev']['on'](_0x13a4dd(0x1a5),_0x559393=>{const _0xbda50d=_0x13a4dd;for(let _0x59d20d of _0x559393){let _0x31d703=_0x5478b1['decodeJid'](_0x59d20d['id']);if(store&&store['contacts'])store[_0xbda50d(0x1a1)][_0x31d703]={'id':_0x31d703,'name':_0x59d20d[_0xbda50d(0x18c)]};}}),_0x5478b1['getName']=(_0x192d02,_0x31a8b6=![])=>{const _0x13307a=_0x13a4dd;id=_0x5478b1[_0x13307a(0x1ed)](_0x192d02),_0x31a8b6=_0x5478b1['withoutContact']||_0x31a8b6;let _0x5d15ce;if(id[_0x13307a(0x1d5)]('@g.us'))return new Promise(async _0x18e86e=>{const _0x15d9c2=_0x13307a;_0x5d15ce=store['contacts'][id]||{};if(!(_0x5d15ce[_0x15d9c2(0x1c1)]||_0x5d15ce[_0x15d9c2(0x1c4)]))_0x5d15ce=_0x5478b1[_0x15d9c2(0x1b3)](id)||{};_0x18e86e(_0x5d15ce[_0x15d9c2(0x1c1)]||_0x5d15ce[_0x15d9c2(0x1c4)]||PhoneNumber('+'+id['replace'](_0x15d9c2(0x1dd),''))[_0x15d9c2(0x196)]('international'));});else _0x5d15ce=id===_0x13307a(0x193)?{'id':id,'name':_0x13307a(0x1b0)}:id===_0x5478b1['decodeJid'](_0x5478b1['user']['id'])?_0x5478b1[_0x13307a(0x1e8)]:store[_0x13307a(0x1a1)][id]||{};return(_0x31a8b6?'':_0x5d15ce[_0x13307a(0x1c1)])||_0x5d15ce['subject']||_0x5d15ce[_0x13307a(0x1a6)]||PhoneNumber('+'+_0x192d02[_0x13307a(0x1cf)](_0x13307a(0x1dd),''))['getNumber'](_0x13307a(0x19f));},_0x5478b1['parseMention']=(_0x4b8e7f='')=>{const _0x57631c=_0x13a4dd;return[..._0x4b8e7f[_0x57631c(0x19c)](/@([0-9]{5,16}|0)/g)]['map'](_0x4569fc=>_0x4569fc[0x1]+'@s.whatsapp.net');},_0x5478b1[_0x13a4dd(0x17f)]=async(_0x4a1868,_0xa6a5e5,_0xc527f7='',_0x3eb324={})=>{const _0x51ca16=_0x13a4dd;let _0x245c3a=[];for(let _0x2d89c9 of _0xa6a5e5){_0x245c3a[_0x51ca16(0x184)]({'displayName':await _0x5478b1[_0x51ca16(0x1a9)](_0x2d89c9+_0x51ca16(0x1dd)),'vcard':'BEGIN:VCARD\x0a\x0aVERSION:3.0\x0a\x0aN:'+await _0x5478b1[_0x51ca16(0x1a9)](_0x2d89c9+_0x51ca16(0x1dd))+'\x0a\x0aFN:'+await _0x5478b1[_0x51ca16(0x1a9)](_0x2d89c9+_0x51ca16(0x1dd))+'\x0a\x0aitem1.TEL;waid='+_0x2d89c9+':'+_0x2d89c9+_0x51ca16(0x1dc)});}_0x5478b1[_0x51ca16(0x1c6)](_0x4a1868,{'contacts':{'displayName':_0x245c3a[_0x51ca16(0x1d4)]+_0x51ca16(0x1bf),'contacts':_0x245c3a},..._0x3eb324},{'quoted':_0xc527f7});},_0x5478b1[_0x13a4dd(0x1d8)]=_0x1ad689=>{const _0x440275=_0x13a4dd;return _0x5478b1[_0x440275(0x1e5)]({'tag':'iq','attrs':{'to':_0x440275(0x1dd),'type':'set','xmlns':_0x440275(0x1c0)},'content':[{'tag':_0x440275(0x1c0),'attrs':{},'content':Buffer[_0x440275(0x181)](_0x1ad689,_0x440275(0x1e4))}]}),_0x1ad689;},_0x5478b1['downloadAndSaveMediaMessage']=async(_0x5143ca,_0x2fd135,_0x159ed3=!![])=>{const _0x4fac5b=_0x13a4dd;let _0x34c217=_0x5143ca[_0x4fac5b(0x1eb)]?_0x5143ca['msg']:_0x5143ca,_0x504a80=(_0x5143ca[_0x4fac5b(0x1eb)]||_0x5143ca)[_0x4fac5b(0x183)]||'',_0x10eb12=_0x5143ca[_0x4fac5b(0x1ab)]?_0x5143ca[_0x4fac5b(0x1ab)][_0x4fac5b(0x1cf)](/Message/gi,''):_0x504a80[_0x4fac5b(0x1ae)]('/')[0x0];const _0x4f4c5b=await downloadContentFromMessage(_0x34c217,_0x10eb12);let _0x2c06d0=Buffer[_0x4fac5b(0x181)]([]);for await(const _0xedc752 of _0x4f4c5b){_0x2c06d0=Buffer[_0x4fac5b(0x18e)]([_0x2c06d0,_0xedc752]);}let _0xdd4e2e=await FileType[_0x4fac5b(0x197)](_0x2c06d0);return trueFileName=_0x159ed3?_0x2fd135+'.'+_0xdd4e2e[_0x4fac5b(0x1b5)]:_0x2fd135,await fs[_0x4fac5b(0x18d)](trueFileName,_0x2c06d0),trueFileName;},_0x5478b1[_0x13a4dd(0x1cd)]=async _0x2dc9e6=>{const _0x4f86d2=_0x13a4dd;let _0x299d52=(_0x2dc9e6[_0x4f86d2(0x1eb)]||_0x2dc9e6)[_0x4f86d2(0x183)]||'',_0x2604a7=_0x2dc9e6[_0x4f86d2(0x1ab)]?_0x2dc9e6[_0x4f86d2(0x1ab)][_0x4f86d2(0x1cf)](/Message/gi,''):_0x299d52['split']('/')[0x0];const _0x499d4f=await downloadContentFromMessage(_0x2dc9e6,_0x2604a7);let _0x1500b9=Buffer[_0x4f86d2(0x181)]([]);for await(const _0x4140af of _0x499d4f){_0x1500b9=Buffer[_0x4f86d2(0x18e)]([_0x1500b9,_0x4140af]);}return _0x1500b9;},_0x5478b1[_0x13a4dd(0x1c7)]=(_0x100b26,_0x193129,_0x16be86='',_0x3ef130)=>_0x5478b1[_0x13a4dd(0x1c6)](_0x100b26,{'text':_0x193129,..._0x3ef130},{'quoted':_0x16be86});}_0x2f0802();}catch(_0x5d077f){console[_0x3c14e0(0x1bc)](_0x5d077f);}};module[_0xdd11db(0x187)]={'jadibot':jadibot,'conns':conns};function _0x7aad(){const _0x190d1e=['6223xJLGyh','sendContact','remoteJid','from','BAE5','mimetype','push','join','status@broadcast','exports','4662732FCCJLr','c.us','s.whatsapp.net','./myfunc','notify','writeFileSync','concat','Jadibot\x20Md\x20By\x20(Danzz\x20Coding)','attrs','connectionLost','./module','0@s.whatsapp.net','reply','Unknown\x20DisconnectReason:\x20','getNumber','fromBuffer','905048VSzoWq','5736SrunPo','Chrome','./color','matchAll','Connecting\x20to\x20jadibot..','pino','international','content','contacts','qrcode','startsWith','./session/jadibot/','contacts.update','verifiedName','restartRequired','toDataURL','getName','loggedOut','mtype','child','10IwCaGM','split','updateBlockStatus','WhatsApp','./database/owner.json','bind','groupMetadata','creds.update','ext','Connection\x20closed,\x20reconnecting....','public','call','badSession','error','Connection\x20TimedOut,\x20Reconnecting...','log','6289512545999@s.whatsapp.net','2LlQzeP','\x20Kontak','status','name','tag','danzzce\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','subject','open','sendMessage','sendText','server','messages','call-id','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','now','downloadMediaMessage','connectionReplaced','replace','store','./exif','key','end','length','endsWith','118950wmyAXx','./danzz','setStatus','9539320zwRxbW','readFileSync','messages.upsert','\x0a\x0aitem1.X-ABLabel:Ponsel\x0a\x0aitem2.EMAIL;type=INTERNET:tesheroku123@gmail.com\x0a\x0aitem2.X-ABLabel:Email\x0a\x0aitem3.URL:https://bit.ly/39Ivus6\x0a\x0aitem3.X-ABLabel:YouTube\x0a\x0aitem4.ADR:;;Indonesia;;;;\x0a\x0aitem4.X-ABLabel:Region\x0a\x0aEND:VCARD','@s.whatsapp.net','3.0.0','toString','timedOut','connecting','connection.update','connectionClosed','utf-8','query','sendNode','keys','user','CB:call','call-creator','msg','silent','decodeJid','452357XlJsxD','rimraf','time','parse','message','fromMe','logout','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','6277140oJcIsk','ephemeralMessage'];_0x7aad=function(){return _0x190d1e;};return _0x7aad();}