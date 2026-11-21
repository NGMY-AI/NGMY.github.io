((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={bYD:function bYD(){},aYK:function aYK(){},bjC:function bjC(d,e){this.a=d
this.b=e},
ikw(d){var w,v,u,t,s
try{w="data:text/calendar;charset=utf-8,"+A.hO(2,d,B.cd,!1)
if(J.ad(w)<15e5){u=A.nf(null)
u.href=w
u.type="text/calendar"
v=u
t=document.body
if(t!=null)t.appendChild(v).toString
J.HT(v)
J.m1(v)
return!0}}catch(s){}return!1},
ikx(d){var w,v,u,t,s,r
try{w=A.i1([d],"text/calendar;charset=utf-8")
t=(self.URL||self.webkitURL).createObjectURL(w)
t.toString
v=t
s=A.nf(null)
s.href=v
s.type="text/calendar"
u=s
t=document.body
if(t!=null)t.appendChild(u).toString
J.HT(u)
J.m1(u)
A.bL(B.OS,new C.fCF(v),x.H)
return!0}catch(r){return!1}},
fUZ(d,e,f){return C.iub(d,e,f)},
iub(d,e,f){var w=0,v=A.j(x.N),u,t,s,r,q,p,o,n,m,l
var $async$fUZ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:n=B.cd.cG(0,d)
m=window.navigator.userAgent.toLowerCase()
l=!0
if(!B.a.q(m,"iphone"))if(!B.a.q(m,"ipad")){if(!B.a.q(m,"ipod"))q=B.a.q(m,"macintosh")&&B.a.q(m,"mobile")
else q=l
l=q}if(C.ikw(n)){u=l?y.k:"Open the calendar invite to add the event."
w=1
break}if(C.ikx(d)){u=l?y.k:"Calendar invite ready \u2014 confirm to add the event."
w=1
break}q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=A.aL(e,q,"_")
t=B.a.c7(p,".ics")?p:p+".ics"
try{s=A.i1([d],"text/calendar")
q=(self.URL||self.webkitURL).createObjectURL(s)
q.toString
r=q
q=A.nf(r)
q.download=t
q.click();(self.URL||self.webkitURL).revokeObjectURL(r)
u="Calendar file downloaded \u2014 open it to add the event."
w=1
break}catch(k){}u="Could not open Calendar. Tap Add to Calendar again."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fUZ,v)},
hoB(d){return C.iwj(d)},
iwj(d){var w=0,v=A.j(x.N),u,t
var $async$hoB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:try{window.location.assign(d)
u="Opening Google Calendar to save the event."
w=1
break}catch(s){u="Could not open Calendar."
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$hoB,v)},
fCF:function fCF(d){this.a=d},
hL5(d,e,f,g,h,i,j){var w,v="BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//NGMY//Helper AI//EN\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nBEGIN:VEVENT\n"+("UID:"+("ngmy-"+1000*Date.now()+"@ngmy.org")+"\n")+("DTSTAMP:"+C.ihX(new A.V(Date.now(),0,!1).ab())+"\n")+("DTSTART:"+C.hFZ(i)+"\n")+("DTEND:"+C.hFZ(f)+"\n")+("SUMMARY:"+C.fw5(j)+"\n")
if(h!=null&&B.a.i(h).length!==0)v+="DESCRIPTION:"+C.fw5(B.a.i(h))+"\n"
if(g!=null&&B.a.i(g).length!==0)v+="LOCATION:"+C.fw5(B.a.i(g))+"\n"
if(d||e>0){w=e<=0?"-PT0M":"-PT"+e+"M"
v=v+"BEGIN:VALARM\n"+("TRIGGER:"+w+"\n")+"ACTION:DISPLAY\n"+("DESCRIPTION:"+C.fw5(j)+"\n")+"END:VALARM\n"}v+="END:VEVENT\nEND:VCALENDAR\n"
return new Uint8Array(A.cb(B.e_.aK(v.charCodeAt(0)==0?v:v)))},
hFZ(d){var w=d.bU(),v=new C.fxR()
return""+A.bD(w)+A.v(v.$1(A.bM(w)))+A.v(v.$1(A.bW(w)))+"T"+A.v(v.$1(A.d6(w)))+A.v(v.$1(A.fG(w)))+A.v(v.$1(A.G1(w)))},
ihX(d){var w=new C.fxS()
return""+A.bD(d)+A.v(w.$1(A.bM(d)))+A.v(w.$1(A.bW(d)))+"T"+A.v(w.$1(A.d6(d)))+A.v(w.$1(A.fG(d)))+A.v(w.$1(A.G1(d)))+"Z"},
fw5(d){var w=A.aL(d,"\\","\\\\")
w=A.aL(w,"\n","\\n")
w=A.aL(w,",","\\,")
return A.aL(w,";","\\;")},
fxR:function fxR(){},
fxS:function fxS(){},
ass(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$ass=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.a97(d),$async$ass)
case 2:r=g
q=J.cH(r)
q.bq(r,new C.chV(e))
q.I(r,e)
q.b_(r,new C.chW())
w=3
return A.b(A.aB(),$async$ass)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.km(r,40)
s=q.$ti.k("O<aj.E,a9<m,@>>")
q=A.B(new A.O(q,new C.chX(),s),s.k("aj.E"))
w=4
return A.b(u.aE("String","ngmy_helper_alarm_v1_"+t,B.V.au(q,null)),$async$ass)
case 4:return A.h(null,v)}})
return A.i($async$ass,v)},
chV:function chV(d){this.a=d},
chW:function chW(){},
chX:function chX(){},
aji(d,e,f,g){return C.ixr(d,e,f,g)},
ixr(d,e,f,g){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aji=A.e(function(h,a0){if(h===1){s.push(a0)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bH8(),$async$aji)
case 3:if(!a0){u=null
w=1
break}w=4
return A.b(A.SX(),$async$aji)
case 4:q=a0
w=!q?5:7
break
case 5:w=8
return A.b(A.Mf(),$async$aji)
case 8:w=6
break
case 7:a0=q
case 6:if(!a0){u=null
w=1
break}t=10
p=B.a.i(f)
if(p.length===0)p="Wake up"
o=g.bU()
if((e==null?null:B.a.i(e).length!==0)===!0){e.toString
n=B.a.i(e)}else n="Your NGMY wake alarm"
w=13
return A.b(C.ahO(n,d,p,o),$async$aji)
case 13:o=g.bU()
m=B.o.F(A.d6(o),12)===0?12:B.o.F(A.d6(o),12)
l=A.d6(o)>=12?"PM":"AM"
k=B.a.b0(B.o.v(A.fG(o)),2,"0")
u=""+A.bM(o)+"/"+A.bW(o)+" at "+m+":"+k+" "+l
w=1
break
t=2
w=12
break
case 10:t=9
i=s.pop()
r=A.ac(i)
$.am.$1("[helper-alarm] web schedule failed: "+A.v(r))
u=null
w=1
break
w=12
break
case 9:w=2
break
case 12:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aji,v)},
ahO(d,e,f,g){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahO=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:n=window.navigator.serviceWorker
if(n==null)throw A.Y(A.bc("no service worker"))
r=new C.fF_(e,g,f,d)
t=4
p=n.ready
p.toString
w=7
return A.b(A.ek(p,x.U).de(0,B.en),$async$ahO)
case 7:q=i
w=8
return A.b(r.$1(q),$async$ahO)
case 8:w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
w=6
break
case 3:w=2
break
case 6:p=n.register("/ngmy_service_worker.js",null)
p.toString
l=r
w=10
return A.b(A.ek(p,x.U).de(0,B.en),$async$ahO)
case 10:w=9
return A.b(l.$1(i),$async$ahO)
case 9:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahO,v)},
fF_:function fF_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iea(d){var w
switch(d){case"calendar":w=B.aN
break
case"alarm":w=B.c9
break
case"call":w=B.bp
break
case"sms":w=B.aD
break
case"whatsapp":w=B.t6
break
case"email":w=B.fK
break
case"maps":w=B.jt
break
default:w=B.aN
break}return w},
ihK(d){var w
switch(d.a){case"calendar":w="Add to iPhone Calendar"
break
case"alarm":w="Set wake-up alarm"
break
case"call":w="Place a phone call"
break
case"sms":w="Send iMessage / text"
break
case"whatsapp":w="Send WhatsApp message"
break
case"email":w="Compose an email"
break
case"maps":w="Open in Maps"
break
case"open_url":w="Open link"
break
default:w=d.grj(0)
break}return w},
io_(d){var w
switch(d.a){case"calendar":w="Tap continue \u2014 iPhone will ask if ngmy.org may show a calendar invite. Tap Allow, then Add."
break
case"alarm":w="NGMY opens your Calendar with a ringing alert at the wake time. On iPhone tap Allow / Add on the calendar prompt (Apple does not allow apps to write inside the Clock app). On Android, Clock may open too."
break
case"call":w="Opens your Phone app to call this contact."
break
case"sms":w="Opens Messages / iMessage with this person."
break
case"whatsapp":w="Opens WhatsApp with this person and your message."
break
case"email":w="This opens Mail with the address filled in."
break
case"maps":w="This opens Maps for this location."
break
case"open_url":w="This opens the link in your browser."
break
default:w="Continue to connect with an app on your phone."
break}return w},
ilA(d){var w
switch(d.a){case"calendar":w="Show calendar invite"
break
case"alarm":w="Set wake alarm"
break
case"call":w="Call now"
break
case"sms":w="Open Messages"
break
case"whatsapp":w="Open WhatsApp"
break
case"email":w="Open Mail"
break
case"maps":w="Open Maps"
break
case"open_url":w="Open link"
break
default:w="Continue"
break}return w},
igc(d,e,f){var w,v,u,t,s,r,q,p=null,o=d.a
A:{if("call"===o||"sms"===o||"whatsapp"===o){w=d.gua()
break A}w=d.gua()
break A}v=f?B.aw:B.aS
u=A.n(16)
t=A.K(e.j(0.28),B.r,1)
s=e.j(0.14)
r=A.n(12)
r=A.p(p,A.W(d.gaoH(0),e,p,p,p,22),B.f,p,p,new A.o(s,p,p,r,p,p,B.m),p,42,p,p,p,p,p,42)
s=o!=="call"
q=!s||o==="sms"?18:15
s=!s||o==="sms"?0.3:0
return A.p(p,A.A(A.a([r,B.bb,A.E(A.c(w,p,p,p,p,p,p,A.l(p,p,f?B.c:B.a_,p,p,p,p,p,p,p,p,q,p,p,B.O,p,1.25,!0,p,s,p,p,p,p,p,p),p,p,p),1)],x.p),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.m),p,p,p,p,B.jz,p,p,1/0)},
aTk(d,e){var w=0,v=A.j(x.y),u
var $async$aTk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bU(B.L,null,new C.h0b(A.Q(e).ax.a===B.I,C.iea(d.a),d),e,!0,!0,!0,null,!1,!1,x.y),$async$aTk)
case 3:u=g===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aTk,v)},
h0b:function h0b(d,e,f){this.a=d
this.b=e
this.c=f},
h09:function h09(d){this.a=d},
h0a:function h0a(d){this.a=d},
i5c(d){var w,v,u,t,s=d.h(0,"phones"),r=A.a([],x.s)
if(x.j.b(s))for(w=J.aS(s);w.C();){v=B.a.i(J.k(w.gP(w)))
if(v.length!==0)r.push(v)}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"name")
u=B.a.i(J.k(u==null?"":u))
t=d.h(0,"source")
return new C.lr(w,u,r,J.k(t==null?"local":t))},
atn(d){var w=0,v=A.j(x.S),u,t,s,r,q,p,o,n
var $async$atn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.I)
w=1
break}w=3
return A.b(A.aB(),$async$atn)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aW(J.t(q.a,"ngmy_phone_contacts_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.I)
w=1
break}try{s=B.V.aP(0,t,null)
if(!x.j.b(s)){p=A.a([],x.I)
u=p
w=1
break}p=J.d_(s,x.f)
p=A.cE(p,new C.clv(),p.$ti.k("M.E"),x.B)
o=A.a5(p).k("X<M.E>")
p=A.B(new A.X(p,new C.clw(),o),o.k("M.E"))
u=p
w=1
break}catch(m){r=A.ac(m)
$.am.$1("[contacts] load error: "+A.v(r))
p=A.a([],x.I)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$atn,v)},
b4m(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$b4m=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=3
return A.b(A.aB(),$async$b4m)
case 3:t=g
s=A.U(e).k("O<1,a9<m,@>>")
s=A.B(new A.O(e,new C.cly(),s),s.k("aj.E"))
r=B.V.au(s,null)
w=4
return A.b(t.aE("String","ngmy_phone_contacts_v1_"+B.a.i(d.toLowerCase()),r),$async$b4m)
case 4:case 1:return A.h(u,v)}})
return A.i($async$b4m,v)},
a9M(d,e){var w=0,v=A.j(x.S),u,t
var $async$a9M=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.atn(d),$async$a9M)
case 3:t=g
w=J.cv(t)&&e.length!==0?4:5
break
case 4:t=C.i5f(t,e)
w=6
return A.b(C.b4m(d,t),$async$a9M)
case 6:case 5:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a9M,v)},
i5f(d,e){var w,v,u,t,s,r,q,p,o,n=A.T(x.N,x.B)
for(w=J.aS(d);w.C();){v=w.gP(w)
u=v.b
t=A.ag("\\s+",!0,!1,!1,!1)
n.n(0,B.a.i(A.aL(u.toLowerCase(),t," ")),v)}for(w=e.length,v=x.s,s=0;s<e.length;e.length===w||(0,A.I)(e),++s){r=e[s]
u=J.a2(r)
t=u.h(r,"phone")
q=B.a.i(J.k(t==null?"":t))
if(q.length===0)continue
t=u.h(r,"fullName")
if(t==null)t=u.h(r,"username")
if(t==null)t=u.h(r,"email")
p=B.a.i(J.k(t==null?"":t))
if(p.length===0)continue
t=A.ag("\\s+",!0,!1,!1,!1)
o=B.a.i(A.aL(p.toLowerCase(),t," "))
if(n.am(0,o))continue
u=u.h(r,"email")
n.n(0,o,new C.lr("ngmy_"+B.a.gZ(J.k(u==null?p:u)),p,A.a([q],v),"ngmy"))}w=n.$ti.k("b9<2>")
w=A.B(new A.b9(n,w),w.k("M.E"))
B.d.b_(w,new C.clx())
return w},
i5d(d,e){var w,v=A.ag("\\s+",!0,!1,!1,!1),u=B.a.i(A.aL(d.toLowerCase(),v," "))
v=A.ag("\\s+",!0,!1,!1,!1)
w=B.a.i(A.aL(e.b.toLowerCase(),v," "))
if(w===u)return 100
if(B.a.Y(w,u))return 80
if(B.d.aR(A.a(w.split(" "),x.s),new C.clu(u)))return 75
if(B.a.q(w,u))return 60
if(B.a.q(u,w))return 50
return 0},
hyV(d,e){var w,v,u,t,s=B.a.i(e)
if(s.length===0)return A.a([],x.I)
w=A.a([],x.P)
for(v=J.aS(d);v.C();){u=v.gP(v)
t=C.i5d(s,u)
if(t>0)w.push(new A.bse(u,t))}B.d.b_(w,new C.clz())
v=x.E
v=A.B(new A.O(w,new C.clA(),v),v.k("aj.E"))
return v},
lr:function lr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clv:function clv(){},
clw:function clw(){},
cly:function cly(){},
clx:function clx(){},
clu:function clu(d){this.a=d},
clz:function clz(){},
clA:function clA(){},
cls(d){var w,v=d.h(0,"type"),u=B.a.i(J.k(v==null?"":v)).toLowerCase()
if(u.length===0)return null
v=x.N
w=A.T(v,v)
d.bP(0,new C.clt(w))
return new C.kb(u,w)},
hMt(d){var w,v,u,t,s,r=B.a.i(d),q=A.a([],x.t),p=new C.fZk(q),o=A.ag("\\[\\[NGMY_PHONE_ACTIONS\\]\\]\\s*([\\s\\S]*?)\\s*\\[\\[/NGMY_PHONE_ACTIONS\\]\\]",!0,!1,!0,!1),n=o.cI(d)
if(n!=null){r=B.a.i(B.a.er(d,o,""))
w=n.b[1]
w.toString
p.$1(B.a.i(w))
return new A.afQ(q,r)}v=A.ag("```(?:json)?\\s*(\\[[\\s\\S]*?\\])\\s*```",!0,!1,!0,!1)
u=v.cI(d)
if(u!=null&&B.a.q(d,'"type"')){r=B.a.i(B.a.er(d,v,""))
w=u.b[1]
w.toString
p.$1(w)
if(q.length!==0)return new A.afQ(q,r)}t=A.ag('(\\[\\s*\\{[\\s\\S]*?"type"\\s*:\\s*"(?:calendar|alarm|maps|call|sms|whatsapp|email|send_email|messenger|facebook|instagram|telegram|open_url|open_tool|app_lookup)"[\\s\\S]*?\\}\\s*\\])',!0,!1,!1,!1)
s=t.cI(d)
if(s!=null){r=B.a.i(B.a.er(d,t,""))
w=s.b[1]
w.toString
p.$1(w)}return new A.afQ(q,r)},
hFB(d){var w=B.o.F(A.d6(d),12)===0?12:B.o.F(A.d6(d),12),v=A.d6(d)>=12?"PM":"AM",u=B.a.b0(B.o.v(A.fG(d)),2,"0")
return B.iK[A.bM(d)-1]+" "+A.bW(d)+", "+w+":"+u+" "+v},
bEt(d){var w,v
if(d==null||B.a.i(d).length===0)return null
try{w=A.nj(B.a.i(d)).bU()
return w}catch(v){return null}},
ihE(d,e,f,g,h){var w=new C.fxk(),v=x.N,u=A.J(["action","TEMPLATE","text",h,"dates",A.v(w.$1(g))+"/"+A.v(w.$1(d))],v,v)
if(f!=null&&B.a.i(f).length!==0)u.n(0,"details",B.a.i(f))
if(e!=null&&B.a.i(e).length!==0)u.n(0,"location",B.a.i(e))
return C.idw("https","calendar.google.com","/calendar/render",u).goP()},
zg(d){var w=B.fu
return C.iiv(d)},
iiv(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$zg=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=B.fu
t=4
w=9
return A.b(A.q8(d),$async$zg)
case 9:w=f?7:8
break
case 7:w=10
return A.b(A.j1(d,o,null),$async$zg)
case 10:q=f
u=q
w=1
break
case 8:t=2
w=6
break
case 4:t=3
n=s.pop()
r=A.ac(n)
$.am.$1("[phone] launch error: "+A.v(r))
w=6
break
case 3:w=2
break
case 6:u=!1
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zg,v)},
HJ(d,e,f,g,h,i){var w=0,v=A.j(x.T),u,t
var $async$HJ=A.e(function(j,k){if(j===1)return A.f(k,v)
for(;;)A:switch(w){case 0:t=d.a
w=(t==="calendar"||t==="call"||t==="sms"||t==="whatsapp"||t==="email"||t==="send_email"||t==="messenger"||t==="facebook"||t==="instagram"||t==="telegram")&&f!=null&&f.e!=null&&!h?3:4
break
case 3:w=5
return A.b(C.aTk(d,f),$async$HJ)
case 5:if(!k){u="Cancelled."
w=1
break}case 4:switch(t){case"calendar":u=C.fG7(d)
w=1
break A
case"alarm":u=C.hm3(d,i)
w=1
break A
case"maps":u=C.fGc(d)
w=1
break A
case"call":u=C.fG8(d)
w=1
break A
case"sms":u=C.fGf(d)
w=1
break A
case"whatsapp":u=C.fGh(d)
w=1
break A
case"email":u=C.fG9(d)
w=1
break A
case"send_email":u=C.aRy(d,e,g,i,"","")
w=1
break A
case"messenger":u=C.fGd(d)
w=1
break A
case"facebook":u=C.fGa(d)
w=1
break A
case"instagram":u=C.fGb(d)
w=1
break A
case"telegram":u=C.fGg(d)
w=1
break A
case"open_url":u=C.fGe(d)
w=1
break A
case"open_tool":u=C.hm4(d)
w=1
break A
default:u="Unknown action type: "+t
w=1
break A}case 1:return A.h(u,v)}})
return A.i($async$HJ,v)},
fG7(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$fG7=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:j=d.b
i=J.a2(j)
h=i.h(j,"title")
g=B.a.i(h==null?"NGMY Event":h)
f=C.bEt(i.h(j,"start"))
if(f==null){u="Could not read the event date."
w=1
break}l=C.bEt(i.h(j,"end"))
r=l==null?f.bM(36e8):l
q=i.h(j,"notes")
p=i.h(j,"location")
t=4
o=C.hL5(!1,15,r,p,q,f,g)
j=A.ag("[^\\w]+",!0,!1,!1,!1)
w=7
return A.b(C.fUZ(o,A.aL(g,j,"_")+".ics",g),$async$fG7)
case 7:n=a1
if(!J.d8(n,"Could not")){u=n
w=1
break}t=2
w=6
break
case 4:t=3
e=s.pop()
m=A.ac(e)
$.am.$1("[phone] ics open error: "+A.v(m))
w=6
break
case 3:w=2
break
case 6:u=C.hoB(C.ihE(r,p,q,f,g))
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fG7,v)},
hm3(d,e){var w=0,v=A.j(x.T),u,t,s,r,q,p
var $async$hm3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=d.b
s=J.a2(t)
r=s.h(t,"title")
q=B.a.i(r==null?"Wake up":r)
p=C.bEt(s.h(t,"start"))
if(p==null){u="Could not read the alarm time."
w=1
break}if(B.a.i(e).length===0){u="Sign in to save wake alarms to your NGMY account on this device."
w=1
break}u=C.aTj(s.h(t,"notes"),q,e,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hm3,v)},
fGc(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=d.b
o=J.a2(p)
n=o.h(p,"query")
p=n==null?o.h(p,"address"):n
t=B.a.i(p==null?"":p)
if(t.length===0){u="No address or place was provided."
w=1
break}s=A.hO(2,t,B.cd,!1)
r=[A.cF("https://maps.apple.com/?q="+s,0,null),A.cF("geo:0,0?q="+s,0,null),A.cF("https://www.google.com/maps/search/?api=1&query="+s,0,null)]
q=0
case 3:if(!(q<3)){w=5
break}w=6
return A.b(C.zg(r[q]),$async$fGc)
case 6:if(f){u='Opening Maps for "'+t+'".'
w=1
break}case 4:++q
w=3
break
case 5:u="Could not open Maps."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGc,v)},
fG8(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fG8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=d.b
o=J.a2(p)
n=o.h(p,"phone")
if(n==null)n=""
t=A.ag("[^\\d+]+",!0,!1,!1,!1)
s=A.aL(n,t,"")
if(s.length===0){u=y.p
w=1
break}w=3
return A.b(C.zg(A.cF("tel:"+s,0,null)),$async$fG8)
case 3:r=f
n=o.h(p,"contactName")
q=n==null?o.h(p,"name"):n
if(q==null)q=""
if(r)p=q.length!==0?"Calling "+q+"\u2026":"Opening Phone\u2026"
else p="Could not start a call."
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fG8,v)},
fGf(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=d.b
o=J.a2(p)
n=o.h(p,"phone")
if(n==null)n=o.h(p,"email")
t=B.a.i(n==null?"":n)
if(t.length===0){u=y.d
w=1
break}n=o.h(p,"body")
s=n==null?null:B.a.i(n)
if(s==null)s=""
n=o.h(p,"contactName")
r=n==null?o.h(p,"name"):n
if(r==null)r=""
p=A.ag("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(p.b.test(t))q=t.toLowerCase()
else{p=A.ag("[^\\d+]",!0,!1,!1,!1)
q=A.aL(t,p,"")}if(q.length===0){u=y.d
w=1
break}p="sms:"+q
w=3
return A.b(C.zg(s.length===0?A.cF(p,0,null):A.cF(p+"?body="+A.hO(2,s,B.cd,!1),0,null)),$async$fGf)
case 3:if(f)p=r.length!==0?"Opening Messages to "+r+"\u2026":"Opening Messages\u2026"
else p="Could not open Messages."
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGf,v)},
fGh(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k
var $async$fGh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m=d.b
l=J.a2(m)
k=l.h(m,"phone")
if(k==null)k=""
t=A.ag("[^\\d]",!0,!1,!1,!1)
s=A.aL(k,t,"")
if(s.length===0){u=y.p
w=1
break}k=l.h(m,"body")
r=k==null?null:B.a.i(k)
if(r==null)r=""
k=r.length!==0
q=k?"?text="+A.hO(2,r,B.cd,!1):""
t=A.cF("https://wa.me/"+s+q,0,null)
k=k?"&text="+A.hO(2,r,B.cd,!1):""
p=[t,A.cF("whatsapp://send?phone="+s+k,0,null)]
o=0
case 3:if(!(o<2)){w=5
break}w=6
return A.b(C.zg(p[o]),$async$fGh)
case 6:if(f){k=l.h(m,"contactName")
n=k==null?l.h(m,"name"):k
if(n==null)n=""
u=n.length!==0?"Opening WhatsApp to "+n+"\u2026":"Opening WhatsApp\u2026"
w=1
break}case 4:++o
w=3
break
case 5:u="Could not open WhatsApp."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGh,v)},
fG9(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fG9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"to")
n=B.a.i(o==null?"":o)
if(n.length===0){u="No email address provided."
w=1
break}o=x.N
t=A.T(o,o)
o=p.h(q,"subject")
s=o==null?null:B.a.i(o)
q=p.h(q,"body")
r=q==null?null:B.a.i(q)
if(s!=null&&s.length!==0)t.n(0,"subject",s)
if(r!=null&&r.length!==0)t.n(0,"body",r)
w=3
return A.b(C.zg(A.za(null,null,n,null,null,null,t.a===0?null:t,"mailto",null)),$async$fG9)
case 3:u=f?"Opening Mail\u2026":"Could not open Mail."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fG9,v)},
aRy(d,e,f,g,h,a0){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aRy=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:if(!f){u=y.c
w=1
break}t=d.b
s=J.a2(t)
r=s.h(t,"to")
q=B.a.i(r==null?"":r)
if(q.length===0){u="No email address provided."
w=1
break}r=s.h(t,"subject")
p=B.a.i(r==null?"Message from NGMY":r)
r=s.h(t,"body")
if(r==null)r=s.h(t,"html")
t=r==null?s.h(t,"message"):r
o=B.a.i(t==null?"":t)
if(o.length===0){u="No email message body was provided."
w=1
break}n=B.a.i(h)
w=n.length!==0?3:5
break
case 3:a2=n
w=4
break
case 5:w=6
return A.b(C.cmj(e),$async$aRy)
case 6:case 4:n=a2
m=B.a.i(a0)
k=C
j=n
i=o
w=m.length!==0?8:10
break
case 8:a2=m
w=9
break
case 10:w=11
return A.b(C.cmk(e),$async$aRy)
case 11:case 9:w=7
return A.b(k.cml(j,i,a2,g,p,q),$async$aRy)
case 7:l=a2
if(!l.c){t=l.a
u=t==null?"Email could not be sent.":t
w=1
break}l.b
u="Email sent to "+q+"."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aRy,v)},
fGd(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"url")
n=B.a.i(o==null?"":o)
o=p.h(q,"username")
q=o==null?p.h(q,"page"):o
t=B.a.i(B.a.er(B.a.i(q==null?"":q),A.ag("^@+",!0,!1,!1,!1),""))
s=A.a([],x.A)
if(n.length!==0)s.push(A.cF(B.a.Y(n,"http")?n:"https://"+n,0,null))
if(t.length!==0){s.push(A.cF("fb-messenger://user-thread/"+t,0,null))
s.push(A.cF("https://m.me/"+t,0,null))}s.push(A.cF("https://www.messenger.com/",0,null))
q=s.length,r=0
case 3:if(!(r<s.length)){w=5
break}w=6
return A.b(C.zg(s[r]),$async$fGd)
case 6:if(f){u="Opening Messenger\u2026"
w=1
break}case 4:s.length===q||(0,A.I)(s),++r
w=3
break
case 5:u="Could not open Messenger."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGd,v)},
fGa(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"url")
n=B.a.i(o==null?"":o)
o=p.h(q,"username")
q=o==null?p.h(q,"page"):o
t=B.a.i(B.a.er(B.a.i(q==null?"":q),A.ag("^@+",!0,!1,!1,!1),""))
s=A.a([],x.A)
if(n.length!==0)s.push(A.cF(B.a.Y(n,"http")?n:"https://"+n,0,null))
if(t.length!==0){s.push(A.cF("fb://profile/"+t,0,null))
s.push(A.cF("https://www.facebook.com/"+t,0,null))}s.push(A.cF("fb://feed",0,null))
s.push(A.cF("https://www.facebook.com/",0,null))
q=s.length,r=0
case 3:if(!(r<s.length)){w=5
break}w=6
return A.b(C.zg(s[r]),$async$fGa)
case 6:if(f){u="Opening Facebook\u2026"
w=1
break}case 4:s.length===q||(0,A.I)(s),++r
w=3
break
case 5:u="Could not open Facebook."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGa,v)},
fGb(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"url")
n=B.a.i(o==null?"":o)
q=p.h(q,"username")
t=B.a.i(B.a.er(B.a.i(q==null?"":q),A.ag("^@+",!0,!1,!1,!1),""))
s=A.a([],x.A)
if(n.length!==0)s.push(A.cF(B.a.Y(n,"http")?n:"https://"+n,0,null))
if(t.length!==0){s.push(A.cF("instagram://user?username="+t,0,null))
s.push(A.cF("https://www.instagram.com/"+t+"/",0,null))}s.push(A.cF("https://www.instagram.com/",0,null))
q=s.length,r=0
case 3:if(!(r<s.length)){w=5
break}w=6
return A.b(C.zg(s[r]),$async$fGb)
case 6:if(f){u="Opening Instagram\u2026"
w=1
break}case 4:s.length===q||(0,A.I)(s),++r
w=3
break
case 5:u="Could not open Instagram."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGb,v)},
fGg(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"url")
n=B.a.i(o==null?"":o)
q=p.h(q,"username")
t=B.a.i(B.a.er(B.a.i(q==null?"":q),A.ag("^@+",!0,!1,!1,!1),""))
s=A.a([],x.A)
if(n.length!==0)s.push(A.cF(B.a.Y(n,"http")?n:"https://"+n,0,null))
if(t.length!==0){s.push(A.cF("tg://resolve?domain="+t,0,null))
s.push(A.cF("https://t.me/"+t,0,null))}s.push(A.cF("https://web.telegram.org/",0,null))
q=s.length,r=0
case 3:if(!(r<s.length)){w=5
break}w=6
return A.b(C.zg(s[r]),$async$fGg)
case 6:if(f){u="Opening Telegram\u2026"
w=1
break}case 4:s.length===q||(0,A.I)(s),++r
w=3
break
case 5:u="Could not open Telegram."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGg,v)},
fGe(d){var w=0,v=A.j(x.T),u,t,s
var $async$fGe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J.t(d.b,"url")
s=B.a.i(t==null?"":t)
if(s.length===0){u="No link provided."
w=1
break}w=3
return A.b(C.zg(A.cF(!B.a.Y(s,"http://")&&!B.a.Y(s,"https://")?"https://"+s:s,0,null)),$async$fGe)
case 3:u=f?"Opening link\u2026":"Could not open that link."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGe,v)},
hm4(d){var w=0,v=A.j(x.T),u,t,s,r,q,p
var $async$hm4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=d.b
q=J.a2(r)
p=q.h(r,"tool")
q=p==null?q.h(r,"app"):p
t=B.a.i(q==null?"":q).toLowerCase()
if(t.length===0){u="No NGMY tool was specified."
w=1
break}q=x.N
s=A.a1(r,q,q)
s.X(0,"tool")
s.X(0,"app")
u=C.hft(t,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hm4,v)},
hMy(d,e,f){var w,v,u,t,s,r,q,p=null
if(d.length===0)return B.bL
w=A.a([],x.p)
for(v=d.length,u=0;u<d.length;d.length===v||(0,A.I)(d),++u){t=d[u]
s=A.W(t.gaoH(0),B.aN,p,p,p,16)
r=A.c(t.gua(),p,p,p,p,p,p,B.acY,p,p,p)
q=e?D.a0f:D.btk
w.push(A.mR(s,q,r,p,new C.fZG(f,t),p,p,new A.ax(B.aN.j(0.45),1,B.r,-1),p))}return new A.D(F.a2i,A.bZ(B.bI,w,B.br,p,6,6),p)},
kb:function kb(d,e){this.a=d
this.b=e},
clt:function clt(d){this.a=d},
fZk:function fZk(d){this.a=d},
fxk:function fxk(){},
fxl:function fxl(){},
fZG:function fZG(d,e){this.a=d
this.b=e},
b5A(){var w=0,v=A.j(x.H),u
var $async$b5A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.h27(),$async$b5A)
case 3:w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b5A,v)},
i6r(d){var w=d==null?"":d,v=w.toLowerCase()
if(B.a.q(v,"not-allowed")||B.a.q(v,"permission"))return"Microphone blocked. On iPhone: Settings \u2192 Safari \u2192 Microphone \u2192 Allow, or tap \u201caA\u201d in the address bar \u2192 Website Settings \u2192 Microphone \u2192 Allow, then reload NGMY."
if(B.a.q(v,"not-supported")||B.a.q(v,"speech_not_supported"))return"Voice input needs a browser with speech recognition. On iPhone, use Safari and allow microphone for this site."
if(B.a.q(v,"network"))return"Voice needs internet. Check your connection and try again."
if(B.a.q(v,"no-speech")||B.a.q(v,"no_match"))return"No speech heard. Tap the mic and speak clearly."
if(B.a.q(v,"aborted"))return"Voice input stopped."
return"Could not start voice. Allow microphone for NGMY in browser settings, reload, and try again."},
JY:function JY(d,e,f){this.c=d
this.d=e
this.a=f},
aHC:function aHC(){var _=this
_.d=!1
_.e=""
_.c=_.a=null},
f_2:function f_2(d){this.a=d},
f_3:function f_3(d){this.a=d},
f_1:function f_1(){},
f_4:function f_4(d,e){this.a=d
this.b=e},
idw(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=e.length,l="",k=n
if(m!==0){v=0
for(;;){if(!(v<m)){w=0
break}if(e.charCodeAt(v)===64){l=B.a.aw(e,0,v)
w=v+1
break}++v}if(w<m&&e.charCodeAt(w)===91){for(u=w,t=-1;u<m;++u){s=e.charCodeAt(u)
if(s===37&&t<0){r=B.a.j0(e,"25",u+1)?u+2:u
t=u
u=r}else if(s===93)break}if(u===m)throw A.Y(A.fP("Invalid IPv6 host entry.",e,w))
q=t<0?u:t
A.hBX(e,w+1,q);++u
if(u!==m&&e.charCodeAt(u)!==58)throw A.Y(A.fP("Invalid end of authority",e,u))}else u=w
for(;u<m;++u)if(e.charCodeAt(u)===58){p=B.a.aY(e,u+1)
k=p.length!==0?A.jb(p,n,n):n
break}o=B.a.aw(e,w,u)}else o=n
return A.za(n,o,n,A.a(f.split("/"),x.s),k,n,g,d,l)},
i_s(){var w,v=$.hfs,u=v==null?null:v.$0()
if(u!=null&&u.e!=null)return u
v=$.hvL
w=v==null?null:v.$0()
if(w!=null&&w.e!=null)return w
return null},
hft(d,e){var w=0,v=A.j(x.T),u,t,s,r,q,p
var $async$hft=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=C.i_s()
if(p==null){u="Open NGMY on your phone first, then ask the AI again."
w=1
break}t=B.a.i(d).toLowerCase()
s=$.O4.h(0,t)
if(s!=null){u=s.c.$2(p,e)
w=1
break}r=$.VQ.h(0,t)
if(r==null){q=A.d0(new A.ct($.VQ,A.a5($.VQ).k("ct<1>")),x.N)
q.u(0,new A.ct($.O4,A.a5($.O4).k("ct<1>")))
q=A.B(q,A.a5(q).k("ci.E"))
B.d.fi(q)
u='Unknown place "'+d+'". Try: '+B.d.aL(q,", ")+"."
w=1
break}u=r.$1(p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hft,v)},
aq6(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aq6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:h=B.a.i(d)
if(h.length===0){w=1
break}t=new A.V(Date.now(),0,!1)
s=t.bM(-2592e9)
r=A.a([],x.X)
for(q=J.aS(e),p=x.N,o=x.z;q.C();){n=q.gP(q)
m=J.a2(n)
l=m.h(n,"role")
k=J.k(l==null?"":l)
l=m.h(n,"text")
j=B.a.i(J.k(l==null?"":l))
if(j.length===0)continue
n=m.h(n,"at")
i=A.bi(J.k(n==null?"":n))
if(i==null)i=t
n=i.a
if(n>=s.gbr())n=n===s.gbr()&&i.b<s.gcE()
else n=!0
if(n)continue
r.push(A.J(["role",k,"text",j,"at",i.ab().ag()],p,o))}while(r.length>120)B.d.cJ(r,0)
w=3
return A.b(A.aq5(h,r),$async$aq6)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aq6,v)},
aTj(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r,q,p,o
var $async$aTj=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:o=g.bU()
if(o.cW(new A.V(Date.now(),0,!1).bM(2e7))){u="That time already passed \u2014 pick a future time for your alarm."
w=1
break}t="alarm_"+1000*Date.now()
s=B.a.i(e)
if(s.length===0)s="Wake up"
w=3
return A.b(C.ass(f,new A.p0(t,s,o,d)),$async$aTj)
case 3:w=4
return A.b(C.aji(t,d,s,o),$async$aTj)
case 4:r=i
if(r!=null){q=B.o.F(A.d6(o),12)===0?12:B.o.F(A.d6(o),12)
p=A.d6(o)>=12?"PM":"AM"
u="Phone alarm set for "+r+". Your iPhone will ring on the lock screen \u2014 you can close NGMY. Tip: also add "+(""+q+":"+B.a.b0(B.o.v(A.fG(o)),2,"0")+" "+p)+" in Clock \u2192 Alarm for a backup buzz."
w=1
break}w=5
return A.b(C.fXf(!0,d,s,o),$async$aTj)
case 5:u=i
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aTj,v)},
fXf(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r,q,p,o,n,m,l
var $async$fXf=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:m=g.bU()
l=B.a.i(f)
if(l.length===0)l="Wake up \u2014 NGMY"
t=B.o.F(A.d6(m),12)===0?12:B.o.F(A.d6(m),12)
s=A.d6(m)>=12?"PM":"AM"
r=B.a.b0(B.o.v(A.fG(m)),2,"0")
q=B.o.F(A.d6(m),12)===0?12:B.o.F(A.d6(m),12)
p=A.d6(m)>=12?"PM":"AM"
o=B.a.b0(B.o.v(A.fG(m)),2,"0")
w=3
return A.b(C.fUZ(C.hL5(!0,0,m.bM(6e7),null,e,m,l),"ngmy-wake-alarm.ics",l),$async$fXf)
case 3:n=i
u="Phone alert set for "+(""+A.bM(m)+"/"+A.bW(m)+" at "+t+":"+r+" "+s)+". Tap Allow on the iPhone prompt \u2014 your phone will ring at that time even with NGMY closed. "+n+" Also add "+(""+q+":"+o+" "+p)+" in Clock \u2192 Alarm as a backup."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fXf,v)},
ixd(d,e){var w,v,u,t,s,r,q,p="username",o="fullName",n=B.a.i(e).toLowerCase()
if(n.length===0)return null
for(w=d.length,v=0;u=d.length,v<u;d.length===w||(0,A.I)(d),++v){t=d[v]
u=J.a2(t)
s=u.h(t,"email")
r=B.a.i(J.k(s==null?"":s))
if(!A.cX(r,"@",0))continue
s=u.h(t,p)
s=B.a.i(J.k(s==null?"":s))
u=u.h(t,o)
u=B.a.i(J.k(u==null?"":u))
if(s.toLowerCase()===n||u.toLowerCase()===n||r.toLowerCase()===n)return r}for(v=0;v<d.length;d.length===u||(0,A.I)(d),++v){t=d[v]
w=J.a2(t)
s=w.h(t,"email")
r=B.a.i(J.k(s==null?"":s))
if(!A.cX(r,"@",0))continue
s=w.h(t,p)
s=B.a.i(J.k(s==null?"":s))
w=w.h(t,o)
w=B.a.i(J.k(w==null?"":w))
q=!0
if(!A.cX(s.toLowerCase(),n,0))if(!A.cX(w.toLowerCase(),n,0))w=A.cX(r.toLowerCase(),n,0)
else w=q
else w=q
if(w)return r}return null},
hnv(d){var w=0,v=A.j(x.h),u
var $async$hnv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d.length===0){u=null
w=1
break}u=B.d.gH(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hnv,v)},
bDs(d,e,f){var w=0,v=A.j(x.S),u
var $async$bDs=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(C.a9M(d,f),$async$bDs)
case 3:u=C.atn(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDs,v)},
ajh(d,e,a0,a1){var w=0,v=A.j(x.x),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ajh=A.e(function(a2,a3){if(a2===1)return A.f(a3,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bDs(a1,!0,a0),$async$ajh)
case 3:g=a3
f=A.a([],x.t)
t=J.aS(d),s=x.N
case 4:if(!t.C()){w=5
break}r=t.gP(t)
q=r.a
if(q==="send_email"){p=J.t(r.b,"to")
p=B.a.i(p==null?"":p).length===0}else p=!1
if(p){p=r.b
o=J.a2(p)
n=o.h(p,"name")
if(n==null)n=o.h(p,"contact")
o=n==null?o.h(p,"username"):n
m=B.a.i(o==null?"":o)
l=C.ixd(a0,m)
if(l!=null){k=A.a1(p,s,s)
k.n(0,"to",l)
if(m.length!==0)k.n(0,"contactName",m)
f.push(new C.kb(q,k))
w=4
break}}if(!(q==="call"||q==="sms"||q==="whatsapp")){f.push(r)
w=4
break}p=r.b
o=J.a2(p)
n=o.h(p,"phone")
j=B.a.i(n==null?"":n)
n=o.h(p,"name")
o=n==null?o.h(p,"contact"):n
m=B.a.i(o==null?"":o)
if(j.length!==0){f.push(r)
w=4
break}if(m.length===0){f.push(r)
w=4
break}i=C.hyV(g,m)
w=i.length===0?6:7
break
case 6:w=8
return A.b(C.bDs(a1,!0,a0),$async$ajh)
case 8:g=a3
i=C.hyV(g,m)
case 7:w=9
return A.b(C.hnv(i),$async$ajh)
case 9:h=a3
if(h!=null){k=A.a1(p,s,s)
r=h.c
k.n(0,"phone",r.length!==0?B.d.gH(r):"")
k.n(0,"contactName",h.b)
f.push(new C.kb(q,k))}else f.push(r)
w=4
break
case 5:u=f
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ajh,v)},
hLU(d){var w,v,u=B.a.i(d).toLowerCase()
if(u.length===0)return D.j4
w=A.ag("\\b(open|launch|start|show|take me to|go to)\\b",!0,!1,!1,!1)
if(!w.b.test(u))return D.j4
w=A.ag("\\b(video studio|edit video|template video)\\b",!0,!1,!1,!1)
if(w.b.test(u))v="video_studio"
else{w=A.ag("\\b(phone unlock|google lock|frp|factory reset protection|account locked|unlock phone|virtual device|virtual phone)\\b",!0,!1,!1,!1)
v="swahili_school"
if(w.b.test(u))v="phone_unlock"
else{w=A.ag("\\b(swahili|kiswahili|learn swahili|swahili school)\\b",!0,!1,!1,!1)
if(!w.b.test(u)){w=A.ag("\\b(mechanic lab|3d mechanic|car mechanic)\\b",!0,!1,!1,!1)
if(!w.b.test(u)){w=A.ag("\\b(recorder studio|voice memo|record video|record audio|take photo|photo studio)\\b",!0,!1,!1,!1)
if(w.b.test(u))v="recorder_studio"
else{w=A.ag("\\b(qr generator|qr code|make qr)\\b",!0,!1,!1,!1)
if(w.b.test(u))v="qr_generator"
else{w=A.ag("\\b(quote calc|pick two|invoice|estimate)\\b",!0,!1,!1,!1)
if(w.b.test(u))v="quote_calc"
else{w=A.ag("\\b(doc share|share file|upload file)\\b",!0,!1,!1,!1)
if(w.b.test(u))v="doc_share"
else{w=A.ag("\\b(play zone|fun games|fun break|love match|riddles|fortune|confidence quote)\\b",!0,!1,!1,!1)
if(w.b.test(u))v="spark_lounge"
else{w=A.ag("\\b(creator toolkit|tool hub|studio hub)\\b",!0,!1,!1,!1)
if(w.b.test(u))return D.j4
v=null}}}}}}}}}if(v==null)return D.j4
w=x.N
return A.a([new C.kb("open_tool",A.J(["tool",v],w,w))],x.t)},
cmj(d){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m
var $async$cmj=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d!=null){q=d.y
q=B.a.i(q)
p=A.ag("[\\r\\n\\t]",!0,!1,!1,!1)
o=A.aL(q,p,"")}else o=""
if(o.length!==0){u=o
w=1
break}t=4
w=7
return A.b(A.aB(),$async$cmj)
case 7:r=f
q=A.aW(J.t(r.a,"ngmy_resend_api_key_v1"))
q=B.a.i(q==null?"":q)
p=A.ag("[\\r\\n\\t]",!0,!1,!1,!1)
q=A.aL(q,p,"")
u=q
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=""
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$cmj,v)},
cmk(d){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cmk=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d!=null){p=B.a.i(d.z)
o=p}else o=""
if(o.length!==0){u=o
w=1
break}t=4
w=7
return A.b(A.aB(),$async$cmk)
case 7:r=f
p=A.aW(J.t(r.a,"ngmy_resend_from_email_v1"))
n=p==null?null:B.a.i(p)
q=n==null?"":n
p=J.ad(q)!==0?q:"NGMY <noreply@ngmy.org>"
u=p
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u="NGMY <noreply@ngmy.org>"
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$cmk,v)},
cml(d,e,f,g,h,i){var w=0,v=A.j(x.F),u,t,s,r,q,p,o
var $async$cml=A.e(function(j,k){if(j===1)return A.f(k,v)
for(;;)switch(w){case 0:r=B.a.i(d)
q=A.ag("[\\r\\n\\t]",!0,!1,!1,!1)
p=A.aL(r,q,"")
o=B.a.i(i)
r=B.a.i(e)
t=r.length===0?"<p></p>":C.i5s(r)
if(p.length===0){u=new A.z5("Email is not available right now. Please try again later.",null,!1)
w=1
break}if(o.length===0||!B.a.q(o,"@")){u=new A.z5("No valid recipient email was provided.",null,!1)
w=1
break}r=B.a.i(f)
if(r.length===0)r="NGMY <noreply@ngmy.org>"
q=B.a.i(h)
w=3
return A.b(C.cmi(p,r,t,g,q.length===0?"Message from NGMY":q,o),$async$cml)
case 3:s=k
if(s.c){u=s
w=1
break}u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cml,v)},
i5s(d){var w
if(B.a.q(d,"<")&&B.a.q(d,">"))return d
w=D.bds.aK(d)
return"<p>"+A.aL(w,"\n","<br/>")+"</p>"},
cmi(d,e,f,g,h,i){var w=0,v=A.j(x.F),u,t=2,s=[],r,q,p,o,n,m
var $async$cmi=A.e(function(j,k){if(j===1){s.push(k)
w=t}for(;;)switch(w){case 0:n=A.J(["action","resendEmail","apiKey",d,"from",e,"to",i,"subject",h,"html",f,"requesterEmail",g],x.N,x.z)
t=4
w=7
return A.b(A.h0(n,!1,!1,!1,!1,D.bDT),$async$cmi)
case 7:r=k
if(r!=null){p=J.z(J.t(r,"ok"),!0)?200:400
p=C.i5t(p,r)
u=p
w=1
break}u=new A.z5("Email proxy unavailable.",null,!1)
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
q=A.ac(m)
p=C.hh1(J.k(q))
u=new A.z5(p,null,!1)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$cmi,v)},
i5t(d,e){var w,v,u=null
if(d===200){w=J.a2(e)
if(J.z(w.h(e,"ok"),!0)){w=w.h(e,"id")
return new A.z5(u,w==null?u:J.k(w),!0)}w=w.h(e,"error")
v=w==null?u:J.k(w)
if(v!=null&&v.length!==0)return new A.z5(C.hh1(v),u,!1)}if(d===403)return new A.z5(y.c,u,!1)
if(d===404)return new A.z5("Email proxy not deployed yet. Admin: redeploy Supabase function bright-handler.",u,!1)
w=J.t(e,"error")
v=w==null?u:J.k(w)
if(v!=null&&v.length!==0)return new A.z5(C.hh1(v),u,!1)
return new A.z5("Email proxy HTTP "+d,u,!1)},
hh1(d){var w,v=B.a.i(d)
if(v.length===0)return null
w=d.toLowerCase()
if(B.a.q(w,"domain")&&B.a.q(w,"verify"))return"Resend needs your sending domain verified. Set a verified From address in NGMY AI settings."
if(B.a.q(w,"invalid")&&B.a.q(w,"key"))return"Resend rejected this API key. Copy it again from resend.com \u2192 API Keys, then Save AI Settings."
if(d.length>180)return B.a.aw(d,0,177)+"\u2026"
return d}},D,F,G
J=c[1]
A=c[0]
B=c[2]
E=c[282]
C=a.updateHolder(c[37],C)
D=c[122]
F=c[165]
G=c[253]
C.bYD.prototype={
v(d){return"unknown"}}
C.aYK.prototype={
aK(d){var w=this.aTR(d,0,d.length)
return w==null?d:w},
aTR(d,e,f){var w,v,u,t
for(w=e,v=null;w<f;++w){switch(d[w]){case"&":u="&amp;"
break
case'"':u="&quot;"
break
case"'":u="&#39;"
break
case"<":u="&lt;"
break
case">":u="&gt;"
break
case"/":u="&#47;"
break
default:u=null}if(u!=null){if(v==null)v=new A.fi("")
if(w>e)v.a+=B.a.aw(d,e,w)
v.a+=u
e=w+1}}if(v==null)return null
if(f>e){t=B.a.aw(d,e,f)
v.a+=t}t=v.a
return t.charCodeAt(0)==0?t:t},
mL(d){return new C.bjC(this,x.e.b(d)?d:new A.RB(d))}}
C.bjC.prototype={
jN(d,e,f,g){var w=this.a.aTR(d,e,f),v=this.b
if(w==null)v.jN(d,e,f,g)
else{v.I(0,w)
if(g)v.bI(0)}},
bI(d){this.b.bI(0)}}
C.lr.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"phones",w.c,"source",w.d],x.N,x.z)}}
C.kb.prototype={
grj(d){var w
switch(this.a){case"calendar":w="Add to Calendar"
break
case"alarm":w="Set wake alarm"
break
case"maps":w="Open Maps"
break
case"call":w="Call"
break
case"sms":w="Send Text"
break
case"whatsapp":w="WhatsApp"
break
case"email":w="Send Email"
break
case"send_email":w="Send via NGMY"
break
case"messenger":w="Open Messenger"
break
case"facebook":w="Open Facebook"
break
case"instagram":w="Open Instagram"
break
case"telegram":w="Open Telegram"
break
case"open_tool":w="Open NGMY tool"
break
default:w="Run"
break}return w},
gaoH(d){var w
switch(this.a){case"calendar":w=B.Ad
break
case"alarm":w=G.a3S
break
case"maps":w=B.lz
break
case"call":w=B.j1
break
case"sms":w=B.A6
break
case"whatsapp":w=B.vg
break
case"email":w=B.Dx
break
case"send_email":w=D.bVa
break
case"messenger":w=B.xe
break
case"facebook":w=B.arz
break
case"instagram":w=B.Ih
break
case"telegram":w=B.m4
break
case"open_url":w=B.tD
break
case"open_tool":w=B.zP
break
default:w=D.bVw
break}return w},
gua(){var w,v,u,t,s,r,q,p=this,o=p.a
switch(o){case"calendar":o=p.b
w=J.a2(o)
v=w.h(o,"title")
if(v==null)v="Event"
u=C.bEt(w.h(o,"start"))
if(u!=null)return v+" \xb7 "+C.hFB(u)
return v
case"alarm":o=p.b
w=J.a2(o)
v=w.h(o,"title")
if(v==null)v="Wake up"
u=C.bEt(w.h(o,"start"))
if(u!=null)return v+" \xb7 "+C.hFB(u)
return v
case"maps":o=p.b
w=J.a2(o)
t=w.h(o,"query")
o=t==null?w.h(o,"address"):t
return o==null?"Open location":o
case"call":case"sms":case"whatsapp":o=p.b
w=J.a2(o)
t=w.h(o,"contactName")
s=t==null?w.h(o,"name"):t
if(s==null)s=""
r=w.h(o,"phone")
if(r==null)r=""
o=s.length!==0
if(o&&r.length!==0)return s+" \xb7 "+r
if(o)return s
return r
case"email":case"send_email":o=p.b
w=J.a2(o)
t=w.h(o,"to")
o=t==null?w.h(o,"subject"):t
return o==null?"Email":o
case"messenger":case"facebook":case"instagram":case"telegram":o=p.b
w=J.a2(o)
t=w.h(o,"username")
if(t==null)t=w.h(o,"page")
o=t==null?w.h(o,"url"):t
return o==null?p.grj(0):o
case"open_url":q=J.t(p.b,"url")
if(q==null)q=""
return q.length>42?B.a.aw(q,0,39)+"\u2026":q
case"open_tool":o=p.b
w=J.a2(o)
t=w.h(o,"label")
if(t==null)t=w.h(o,"tool")
o=t==null?w.h(o,"app"):t
return o==null?"NGMY tool":o
default:return o}}}
C.JY.prototype={
R(){return new C.aHC()}}
C.aHC.prototype={
a0W(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.d?3:4
break
case 3:w=5
return A.b(C.b5A(),$async$a0W)
case 5:if(t.c!=null)t.l(new C.f_2(t))
w=1
break
case 4:t.e=B.a.i(t.a.c.a.a)
w=6
return A.b(A.auN(new C.f_3(t)),$async$a0W)
case 6:s=e
if(t.c!=null)t.l(new C.f_4(t,s))
if(!s&&t.c!=null){r=t.c.L(x.q).f
q=$.b5z
r.T(A.b2(null,null,null,null,null,B.t,null,A.c(C.i6r(q==null?$.RU:q),null,null,null,null,null,null,null,null,null,null),null,B.ke,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(u,v)}})
return A.i($async$a0W,v)},
t(){if(this.d)C.b5A()
this.a3()},
B(d){var w,v,u,t=null,s=this.a.d
if(s==null)s=A.Q(d).ax.b
w=this.d
v=w?"Stop recording":"Voice input"
u=w?B.asp:B.oV
return A.aI(t,t,t,t,A.W(u,w?B.dU:s,t,t,t,t),t,t,t,this.gcgW(),t,t,t,t,v,t)}}
var z=a.updateTypes(["lr(a9<@,@>)","P(lr)","a9<m,@>(lr)","F(lr,lr)","F(+c,s(lr,F),+c,s(lr,F))","lr(+c,s(lr,F))","ay<~>()"])
C.fCF.prototype={
$0(){var w
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(w){}},
$S:12}
C.fxR.prototype={
$1(d){return B.a.b0(B.o.v(d),2,"0")},
$S:76}
C.fxS.prototype={
$1(d){return B.a.b0(B.o.v(d),2,"0")},
$S:76}
C.chV.prototype={
$1(d){return d.a===this.a.a},
$S:1654}
C.chW.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:661}
C.chX.prototype={
$1(d){return d.ak()},
$S:1655}
C.fF_.prototype={
bpU(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=d.active
s=t==null?d.installing:t
if(s==null)s=d.waiting
if(s!=null){t=x.N
B.fq2.d1O(s,A.J(["type","SCHEDULE_ALARM","id",u.a,"at",u.b.ab().ag(),"title",u.c,"body",u.d],t,t))}return A.h(null,v)}})
return A.i($async$$1,v)},
$1(d){return this.bpU(d)},
$S:1656}
C.h0b.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=A.aF(d,B.f0,x.w).w,m=this.a,l=m?D.a0f:B.c,k=A.n(24),j=x.V,i=A.a([new A.aa(0,B.H,B.v.j(0.18),B.eT,28)],j),h=m?B.aT:B.bn
h=A.p(o,o,B.f,o,o,new A.o(h,o,o,A.n(99),o,o,B.m),o,4,o,o,o,o,o,40)
w=this.b
v=x.O
u=A.a([w,w.j(0.72)],v)
t=A.n(20)
s=A.a([new A.aa(0,B.H,w.j(0.35),B.cz,16)],j)
r=this.c
u=A.p(o,A.W(r.gaoH(0),B.c,o,o,o,30),B.f,o,o,new A.o(o,o,o,t,s,new A.a7(B.ay,B.aC,B.x,u,o,o),B.m),o,64,o,o,o,o,o,64)
s=C.ihK(r)
t=A.c(s,o,o,o,o,o,o,A.l(o,o,m?B.c:B.a_,o,o,o,o,o,o,o,o,20,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),B.K,o,o)
s=C.io_(r)
s=A.c(s,o,o,o,o,o,o,A.l(o,o,m?B.aR:B.an,o,o,o,o,o,o,o,o,13,o,o,o,o,1.4,!0,o,o,o,o,o,o,o,o),B.K,o,o)
q=C.igc(r,w,m)
v=A.a([w,w.j(0.85)],v)
p=A.n(14)
j=A.a([new A.aa(0,B.H,w.j(0.32),B.cP,12)],j)
w=x.p
r=A.aG(!1,B.a3,!0,o,A.aM(!1,A.n(14),!0,new A.D(B.zg,A.A(A.a([A.W(r.gaoH(0),B.c,o,o,o,20),B.aa,A.c(C.ilA(r),o,o,o,o,o,o,B.nt,o,o,o)],w),B.l,o,B.b9,B.h,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.h09(d),o,o,o,o,o,o,o),B.f,B.L,0,o,o,o,o,o,B.ai)
return new A.D(new A.R(0,0,0,n.f.d),A.p(o,A.bo(!0,new A.D(D.bJ9,A.x(A.a([h,B.bx,u,B.aO,t,B.P,s,B.bx,q,B.dc,new A.a6(1/0,o,new A.bP(new A.o(o,o,o,p,j,new A.a7(B.a5,B.a9,B.x,v,o,o),B.m),B.bm,r,o),o),B.ak,A.bO(!1,A.c("Not now",o,o,o,o,o,o,A.l(o,o,m?B.aF:B.bP,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,o,o,new C.h0a(d),o,o)],w),B.l,o,B.e,B.M,0,B.p),o),!0,!1,B.ag,!0,!1),B.f,o,o,new A.o(l,o,o,k,i,o,B.m),o,o,o,E.to,o,o,o,o),o)},
$S:62}
C.h09.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.h0a.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.clv.prototype={
$1(d){return C.i5c(A.a1(d,x.N,x.z))},
$S:z+0}
C.clw.prototype={
$1(d){return d.b.length!==0&&d.c.length!==0},
$S:z+1}
C.cly.prototype={
$1(d){return d.ak()},
$S:z+2}
C.clx.prototype={
$2(d,e){return B.a.aQ(d.b.toLowerCase(),e.b.toLowerCase())},
$S:z+3}
C.clu.prototype={
$1(d){return d===this.a},
$S:3}
C.clz.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:z+4}
C.clA.prototype={
$1(d){return d.a},
$S:z+5}
C.clt.prototype={
$2(d,e){if(d==="type"||e==null)return
this.a.n(0,d,J.k(e))},
$S:93}
C.fZk.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m
try{w=B.V.aP(0,d,null)
if(x.j.b(w))for(r=J.aS(w),q=x.f,p=x.N,o=x.z,n=this.a;r.C();){v=r.gP(r)
if(q.b(v)){u=C.cls(A.a1(v,p,o))
if(u!=null)n.push(u)}}else if(x.f.b(w)){t=C.cls(A.a1(w,x.N,x.z))
if(t!=null)this.a.push(t)}}catch(m){s=A.ac(m)
$.am.$1("[phone] action parse error: "+A.v(s))}},
$S:2}
C.fxk.prototype={
$1(d){var w=d.ab(),v=new C.fxl()
return""+A.bD(w)+A.v(v.$1(A.bM(w)))+A.v(v.$1(A.bW(w)))+"T"+A.v(v.$1(A.d6(w)))+A.v(v.$1(A.fG(w)))+A.v(v.$1(A.G1(w)))+"Z"},
$S:364}
C.fxl.prototype={
$1(d){return B.a.b0(B.o.v(d),2,"0")},
$S:76}
C.fZG.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f_2.prototype={
$0(){return this.a.d=!1},
$S:0}
C.f_3.prototype={
$2$isFinal(d,e){var w,v,u,t=this.a
if(t.c==null)return
w=B.a.i(d)
if(w.length===0)return
v=t.a.c
u=t.e
v.sb1(0,u.length===0?w:u+" "+w)
v=t.a.c
v.su1(A.hv(B.bD,v.a.a.length))
if(t.c!=null)t.l(new C.f_1())},
$1(d){return this.$2$isFinal(d,!1)},
$S:669}
C.f_1.prototype={
$0(){},
$S:0}
C.f_4.prototype={
$0(){return this.a.d=this.b},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.aHC.prototype,"gcgW","a0W",6)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.aE,[C.bYD,C.lr,C.kb])
v(C.aYK,A.fT)
v(C.bjC,A.x1)
w(A.hP,[C.fCF,C.h09,C.h0a,C.fZG,C.f_2,C.f_1,C.f_4])
w(A.fO,[C.fxR,C.fxS,C.chV,C.chX,C.fF_,C.h0b,C.clv,C.clw,C.cly,C.clu,C.clA,C.fZk,C.fxk,C.fxl,C.f_3])
w(A.id,[C.chW,C.clx,C.clz,C.clt])
v(C.JY,A.af)
v(C.aHC,A.ah)})()
A.hZ(b.typeUniverse,JSON.parse('{"aYK":{"fT":["m","m"],"fT.S":"m","fT.T":"m"},"bjC":{"x1":[]},"JY":{"af":[],"w":[]},"aHC":{"ah":["JY"]}}'))
var y={k:"Allow the ngmy.org calendar invite on the next prompt.",p:"Could not find a phone number for that name.",d:"Could not find a phone number or email for that contact.",c:"Only NGMY admins can send direct emails from the AI."}
var x=(function rtii(){var w=A.as
return{V:w("N<aa>"),O:w("N<u>"),X:w("N<a9<m,@>>"),t:w("N<kb>"),I:w("N<lr>"),P:w("N<+c,s(lr,F)>"),s:w("N<m>"),A:w("N<Gw>"),p:w("N<w>"),x:w("ai<kb>"),S:w("ai<lr>"),j:w("ai<@>"),f:w("a9<@,@>"),E:w("O<+c,s(lr,F),lr>"),w:w("hU"),B:w("lr"),F:w("+error,messageId,ok(m?,m?,P)"),U:w("Q5"),N:w("m"),e:w("x1"),q:w("kw"),y:w("P"),z:w("@"),h:w("lr?"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.hWY=new C.bYD()
D.bds=new C.aYK()
D.btk=new A.u(1,0.9098039215686274,0.9725490196078431,0.9372549019607843,B.q)
D.a0f=new A.u(1,0.10980392156862745,0.1411764705882353,0.2,B.q)
D.bDT=new A.bg(35e6)
D.bJ9=new A.R(22,10,22,20)
D.arv=new A.a_(63202,"MaterialIcons",!1)
D.bVa=new A.a_(63655,"MaterialIcons",!1)
D.bVw=new A.a_(983176,"MaterialIcons",!1)
D.j4=w([],x.t)
D.aFf=w([B.bs,B.aM],x.O)
D.aZd=new A.C("Restore QR",null,B.cH,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["k5r6a1DQ3ei80ZGz1funy3NmNOE="]=a.current})($__dart_deferred_initializers__);