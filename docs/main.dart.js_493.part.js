((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={bZ5:function bZ5(){},aYX:function aYX(){},bjV:function bjV(d,e){this.a=d
this.b=e},
imj(d){var w,v,u,t,s
try{w="data:text/calendar;charset=utf-8,"+A.hQ(2,d,B.ce,!1)
if(J.ad(w)<15e5){u=A.ng(null)
u.href=w
u.type="text/calendar"
v=u
t=document.body
if(t!=null)t.appendChild(v).toString
J.HX(v)
J.m2(v)
return!0}}catch(s){}return!1},
imk(d){var w,v,u,t,s,r
try{w=A.i3([d],"text/calendar;charset=utf-8")
t=(self.URL||self.webkitURL).createObjectURL(w)
t.toString
v=t
s=A.ng(null)
s.href=v
s.type="text/calendar"
u=s
t=document.body
if(t!=null)t.appendChild(u).toString
J.HX(u)
J.m2(u)
A.bL(B.OZ,new C.fE3(v),x.H)
return!0}catch(r){return!1}},
fWs(d,e,f){return C.iw5(d,e,f)},
iw5(d,e,f){var w=0,v=A.j(x.N),u,t,s,r,q,p,o,n,m,l
var $async$fWs=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:n=B.ce.cG(0,d)
m=window.navigator.userAgent.toLowerCase()
l=!0
if(!B.a.q(m,"iphone"))if(!B.a.q(m,"ipad")){if(!B.a.q(m,"ipod"))q=B.a.q(m,"macintosh")&&B.a.q(m,"mobile")
else q=l
l=q}if(C.imj(n)){u=l?y.k:"Open the calendar invite to add the event."
w=1
break}if(C.imk(d)){u=l?y.k:"Calendar invite ready \u2014 confirm to add the event."
w=1
break}q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=A.aL(e,q,"_")
t=B.a.c7(p,".ics")?p:p+".ics"
try{s=A.i3([d],"text/calendar")
q=(self.URL||self.webkitURL).createObjectURL(s)
q.toString
r=q
q=A.ng(r)
q.download=t
q.click();(self.URL||self.webkitURL).revokeObjectURL(r)
u="Calendar file downloaded \u2014 open it to add the event."
w=1
break}catch(k){}u="Could not open Calendar. Tap Add to Calendar again."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fWs,v)},
hq7(d){return C.iyd(d)},
iyd(d){var w=0,v=A.j(x.N),u,t
var $async$hq7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:try{window.location.assign(d)
u="Opening Google Calendar to save the event."
w=1
break}catch(s){u="Could not open Calendar."
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$hq7,v)},
fE3:function fE3(d){this.a=d},
hMD(d,e,f,g,h,i,j){var w,v="BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//NGMY//Helper AI//EN\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nBEGIN:VEVENT\n"+("UID:"+("ngmy-"+1000*Date.now()+"@ngmy.org")+"\n")+("DTSTAMP:"+C.ijK(new A.W(Date.now(),0,!1).aa())+"\n")+("DTSTART:"+C.hHv(i)+"\n")+("DTEND:"+C.hHv(f)+"\n")+("SUMMARY:"+C.fxt(j)+"\n")
if(h!=null&&B.a.i(h).length!==0)v+="DESCRIPTION:"+C.fxt(B.a.i(h))+"\n"
if(g!=null&&B.a.i(g).length!==0)v+="LOCATION:"+C.fxt(B.a.i(g))+"\n"
if(d||e>0){w=e<=0?"-PT0M":"-PT"+e+"M"
v=v+"BEGIN:VALARM\n"+("TRIGGER:"+w+"\n")+"ACTION:DISPLAY\n"+("DESCRIPTION:"+C.fxt(j)+"\n")+"END:VALARM\n"}v+="END:VEVENT\nEND:VCALENDAR\n"
return new Uint8Array(A.cb(B.e2.aK(v.charCodeAt(0)==0?v:v)))},
hHv(d){var w=d.bU(),v=new C.fze()
return""+A.bD(w)+A.v(v.$1(A.bN(w)))+A.v(v.$1(A.bW(w)))+"T"+A.v(v.$1(A.d5(w)))+A.v(v.$1(A.fE(w)))+A.v(v.$1(A.G5(w)))},
ijK(d){var w=new C.fzf()
return""+A.bD(d)+A.v(w.$1(A.bN(d)))+A.v(w.$1(A.bW(d)))+"T"+A.v(w.$1(A.d5(d)))+A.v(w.$1(A.fE(d)))+A.v(w.$1(A.G5(d)))+"Z"},
fxt(d){var w=A.aL(d,"\\","\\\\")
w=A.aL(w,"\n","\\n")
w=A.aL(w,",","\\,")
return A.aL(w,";","\\;")},
fze:function fze(){},
fzf:function fzf(){},
asA(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$asA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.a9g(d),$async$asA)
case 2:r=g
q=J.cI(r)
q.bq(r,new C.cim(e))
q.I(r,e)
q.b0(r,new C.cin())
w=3
return A.b(A.aB(),$async$asA)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.km(r,40)
s=q.$ti.k("O<aj.E,a9<m,@>>")
q=A.B(new A.O(q,new C.cio(),s),s.k("aj.E"))
w=4
return A.b(u.aB("String","ngmy_helper_alarm_v1_"+t,B.U.au(q,null)),$async$asA)
case 4:return A.h(null,v)}})
return A.i($async$asA,v)},
cim:function cim(d){this.a=d},
cin:function cin(){},
cio:function cio(){},
ajp(d,e,f,g){return C.izl(d,e,f,g)},
izl(d,e,f,g){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$ajp=A.e(function(h,a0){if(h===1){s.push(a0)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bHy(),$async$ajp)
case 3:if(!a0){u=null
w=1
break}w=4
return A.b(A.T3(),$async$ajp)
case 4:q=a0
w=!q?5:7
break
case 5:w=8
return A.b(A.Mk(),$async$ajp)
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
return A.b(C.ahW(n,d,p,o),$async$ajp)
case 13:o=g.bU()
m=B.o.F(A.d5(o),12)===0?12:B.o.F(A.d5(o),12)
l=A.d5(o)>=12?"PM":"AM"
k=B.a.b_(B.o.v(A.fE(o)),2,"0")
u=""+A.bN(o)+"/"+A.bW(o)+" at "+m+":"+k+" "+l
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
return A.i($async$ajp,v)},
ahW(d,e,f,g){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahW=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:n=window.navigator.serviceWorker
if(n==null)throw A.Y(A.bc("no service worker"))
r=new C.fGo(e,g,f,d)
t=4
p=n.ready
p.toString
w=7
return A.b(A.em(p,x.U).de(0,B.em),$async$ahW)
case 7:q=i
w=8
return A.b(r.$1(q),$async$ahW)
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
return A.b(A.em(p,x.U).de(0,B.em),$async$ahW)
case 10:w=9
return A.b(l.$1(i),$async$ahW)
case 9:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahW,v)},
fGo:function fGo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ifY(d){var w
switch(d){case"calendar":w=B.aN
break
case"alarm":w=B.c8
break
case"call":w=B.bp
break
case"sms":w=B.aC
break
case"whatsapp":w=B.te
break
case"email":w=B.fK
break
case"maps":w=B.ju
break
default:w=B.aN
break}return w},
ijx(d){var w
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
ipR(d){var w
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
ino(d){var w
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
ii_(d,e,f){var w,v,u,t,s,r,q,p=null,o=d.a
A:{if("call"===o||"sms"===o||"whatsapp"===o){w=d.gua()
break A}w=d.gua()
break A}v=f?B.aw:B.aS
u=A.n(16)
t=A.K(e.j(0.28),B.r,1)
s=e.j(0.14)
r=A.n(12)
r=A.p(p,A.V(d.gaoN(0),e,p,p,p,22),B.f,p,p,new A.o(s,p,p,r,p,p,B.m),p,42,p,p,p,p,p,42)
s=o!=="call"
q=!s||o==="sms"?18:15
s=!s||o==="sms"?0.3:0
return A.p(p,A.A(A.a([r,B.bc,A.E(A.c(w,p,p,p,p,p,p,A.l(p,p,f?B.c:B.a_,p,p,p,p,p,p,p,p,q,p,p,B.P,p,1.25,!0,p,s,p,p,p,p,p,p),p,p,p),1)],x.p),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.m),p,p,p,p,B.jB,p,p,1/0)},
aTu(d,e){var w=0,v=A.j(x.y),u
var $async$aTu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bU(B.L,null,new C.h1F(A.Q(e).ax.a===B.I,C.ifY(d.a),d),e,!0,!0,!0,null,!1,!1,x.y),$async$aTu)
case 3:u=g===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aTu,v)},
h1F:function h1F(d,e,f){this.a=d
this.b=e
this.c=f},
h1D:function h1D(d){this.a=d},
h1E:function h1E(d){this.a=d},
i6X(d){var w,v,u,t,s=d.h(0,"phones"),r=A.a([],x.s)
if(x.j.b(s))for(w=J.aR(s);w.C();){v=B.a.i(J.k(w.gP(w)))
if(v.length!==0)r.push(v)}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"name")
u=B.a.i(J.k(u==null?"":u))
t=d.h(0,"source")
return new C.lr(w,u,r,J.k(t==null?"local":t))},
atv(d){var w=0,v=A.j(x.S),u,t,s,r,q,p,o,n
var $async$atv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.I)
w=1
break}w=3
return A.b(A.aB(),$async$atv)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aV(J.t(q.a,"ngmy_phone_contacts_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.I)
w=1
break}try{s=B.U.aP(0,t,null)
if(!x.j.b(s)){p=A.a([],x.I)
u=p
w=1
break}p=J.cQ(s,x.f)
p=A.cA(p,new C.clX(),p.$ti.k("M.E"),x.B)
o=A.a3(p).k("X<M.E>")
p=A.B(new A.X(p,new C.clY(),o),o.k("M.E"))
u=p
w=1
break}catch(m){r=A.ac(m)
$.am.$1("[contacts] load error: "+A.v(r))
p=A.a([],x.I)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$atv,v)},
b4A(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$b4A=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=3
return A.b(A.aB(),$async$b4A)
case 3:t=g
s=A.U(e).k("O<1,a9<m,@>>")
s=A.B(new A.O(e,new C.cm_(),s),s.k("aj.E"))
r=B.U.au(s,null)
w=4
return A.b(t.aB("String","ngmy_phone_contacts_v1_"+B.a.i(d.toLowerCase()),r),$async$b4A)
case 4:case 1:return A.h(u,v)}})
return A.i($async$b4A,v)},
a9V(d,e){var w=0,v=A.j(x.S),u,t
var $async$a9V=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.atv(d),$async$a9V)
case 3:t=g
w=J.cv(t)&&e.length!==0?4:5
break
case 4:t=C.i7_(t,e)
w=6
return A.b(C.b4A(d,t),$async$a9V)
case 6:case 5:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a9V,v)},
i7_(d,e){var w,v,u,t,s,r,q,p,o,n=A.S(x.N,x.B)
for(w=J.aR(d);w.C();){v=w.gP(w)
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
n.n(0,o,new C.lr("ngmy_"+B.a.gZ(J.k(u==null?p:u)),p,A.a([q],v),"ngmy"))}w=n.$ti.k("ba<2>")
w=A.B(new A.ba(n,w),w.k("M.E"))
B.d.b0(w,new C.clZ())
return w},
i6Y(d,e){var w,v=A.ag("\\s+",!0,!1,!1,!1),u=B.a.i(A.aL(d.toLowerCase(),v," "))
v=A.ag("\\s+",!0,!1,!1,!1)
w=B.a.i(A.aL(e.b.toLowerCase(),v," "))
if(w===u)return 100
if(B.a.Y(w,u))return 80
if(B.d.aR(A.a(w.split(" "),x.s),new C.clW(u)))return 75
if(B.a.q(w,u))return 60
if(B.a.q(u,w))return 50
return 0},
hAp(d,e){var w,v,u,t,s=B.a.i(e)
if(s.length===0)return A.a([],x.I)
w=A.a([],x.P)
for(v=J.aR(d);v.C();){u=v.gP(v)
t=C.i6Y(s,u)
if(t>0)w.push(new A.bsy(u,t))}B.d.b0(w,new C.cm0())
v=x.E
v=A.B(new A.O(w,new C.cm1(),v),v.k("aj.E"))
return v},
lr:function lr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clX:function clX(){},
clY:function clY(){},
cm_:function cm_(){},
clZ:function clZ(){},
clW:function clW(d){this.a=d},
cm0:function cm0(){},
cm1:function cm1(){},
clU(d){var w,v=d.h(0,"type"),u=B.a.i(J.k(v==null?"":v)).toLowerCase()
if(u.length===0)return null
v=x.N
w=A.S(v,v)
d.bP(0,new C.clV(w))
return new C.kb(u,w)},
hO0(d){var w,v,u,t,s,r=B.a.i(d),q=A.a([],x.t),p=new C.h_O(q),o=A.ag("\\[\\[NGMY_PHONE_ACTIONS\\]\\]\\s*([\\s\\S]*?)\\s*\\[\\[/NGMY_PHONE_ACTIONS\\]\\]",!0,!1,!0,!1),n=o.cI(d)
if(n!=null){r=B.a.i(B.a.eq(d,o,""))
w=n.b[1]
w.toString
p.$1(B.a.i(w))
return new A.afY(q,r)}v=A.ag("```(?:json)?\\s*(\\[[\\s\\S]*?\\])\\s*```",!0,!1,!0,!1)
u=v.cI(d)
if(u!=null&&B.a.q(d,'"type"')){r=B.a.i(B.a.eq(d,v,""))
w=u.b[1]
w.toString
p.$1(w)
if(q.length!==0)return new A.afY(q,r)}t=A.ag('(\\[\\s*\\{[\\s\\S]*?"type"\\s*:\\s*"(?:calendar|alarm|maps|call|sms|whatsapp|email|send_email|messenger|facebook|instagram|telegram|open_url|open_tool|app_lookup)"[\\s\\S]*?\\}\\s*\\])',!0,!1,!1,!1)
s=t.cI(d)
if(s!=null){r=B.a.i(B.a.eq(d,t,""))
w=s.b[1]
w.toString
p.$1(w)}return new A.afY(q,r)},
hH7(d){var w=B.o.F(A.d5(d),12)===0?12:B.o.F(A.d5(d),12),v=A.d5(d)>=12?"PM":"AM",u=B.a.b_(B.o.v(A.fE(d)),2,"0")
return B.ix[A.bN(d)-1]+" "+A.bW(d)+", "+w+":"+u+" "+v},
bER(d){var w,v
if(d==null||B.a.i(d).length===0)return null
try{w=A.nk(B.a.i(d)).bU()
return w}catch(v){return null}},
ijr(d,e,f,g,h){var w=new C.fyI(),v=x.N,u=A.J(["action","TEMPLATE","text",h,"dates",A.v(w.$1(g))+"/"+A.v(w.$1(d))],v,v)
if(f!=null&&B.a.i(f).length!==0)u.n(0,"details",B.a.i(f))
if(e!=null&&B.a.i(e).length!==0)u.n(0,"location",B.a.i(e))
return C.ifi("https","calendar.google.com","/calendar/render",u).goQ()},
zi(d){var w=B.fw
return C.iki(d)},
iki(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$zi=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=B.fw
t=4
w=9
return A.b(A.q9(d),$async$zi)
case 9:w=f?7:8
break
case 7:w=10
return A.b(A.j2(d,o,null),$async$zi)
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
return A.i($async$zi,v)},
HN(d,e,f,g,h,i){var w=0,v=A.j(x.T),u,t
var $async$HN=A.e(function(j,k){if(j===1)return A.f(k,v)
for(;;)A:switch(w){case 0:t=d.a
w=(t==="calendar"||t==="call"||t==="sms"||t==="whatsapp"||t==="email"||t==="send_email"||t==="messenger"||t==="facebook"||t==="instagram"||t==="telegram")&&f!=null&&f.e!=null&&!h?3:4
break
case 3:w=5
return A.b(C.aTu(d,f),$async$HN)
case 5:if(!k){u="Cancelled."
w=1
break}case 4:switch(t){case"calendar":u=C.fHw(d)
w=1
break A
case"alarm":u=C.hnz(d,i)
w=1
break A
case"maps":u=C.fHB(d)
w=1
break A
case"call":u=C.fHx(d)
w=1
break A
case"sms":u=C.fHE(d)
w=1
break A
case"whatsapp":u=C.fHG(d)
w=1
break A
case"email":u=C.fHy(d)
w=1
break A
case"send_email":u=C.aRI(d,e,g,i,"","")
w=1
break A
case"messenger":u=C.fHC(d)
w=1
break A
case"facebook":u=C.fHz(d)
w=1
break A
case"instagram":u=C.fHA(d)
w=1
break A
case"telegram":u=C.fHF(d)
w=1
break A
case"open_url":u=C.fHD(d)
w=1
break A
case"open_tool":u=C.hnA(d)
w=1
break A
default:u="Unknown action type: "+t
w=1
break A}case 1:return A.h(u,v)}})
return A.i($async$HN,v)},
fHw(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$fHw=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:j=d.b
i=J.a2(j)
h=i.h(j,"title")
g=B.a.i(h==null?"NGMY Event":h)
f=C.bER(i.h(j,"start"))
if(f==null){u="Could not read the event date."
w=1
break}l=C.bER(i.h(j,"end"))
r=l==null?f.bL(36e8):l
q=i.h(j,"notes")
p=i.h(j,"location")
t=4
o=C.hMD(!1,15,r,p,q,f,g)
j=A.ag("[^\\w]+",!0,!1,!1,!1)
w=7
return A.b(C.fWs(o,A.aL(g,j,"_")+".ics",g),$async$fHw)
case 7:n=a1
if(!J.d9(n,"Could not")){u=n
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
case 6:u=C.hq7(C.ijr(r,p,q,f,g))
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fHw,v)},
hnz(d,e){var w=0,v=A.j(x.T),u,t,s,r,q,p
var $async$hnz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=d.b
s=J.a2(t)
r=s.h(t,"title")
q=B.a.i(r==null?"Wake up":r)
p=C.bER(s.h(t,"start"))
if(p==null){u="Could not read the alarm time."
w=1
break}if(B.a.i(e).length===0){u="Sign in to save wake alarms to your NGMY account on this device."
w=1
break}u=C.aTt(s.h(t,"notes"),q,e,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hnz,v)},
fHB(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fHB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=d.b
o=J.a2(p)
n=o.h(p,"query")
p=n==null?o.h(p,"address"):n
t=B.a.i(p==null?"":p)
if(t.length===0){u="No address or place was provided."
w=1
break}s=A.hQ(2,t,B.ce,!1)
r=[A.cH("https://maps.apple.com/?q="+s,0,null),A.cH("geo:0,0?q="+s,0,null),A.cH("https://www.google.com/maps/search/?api=1&query="+s,0,null)]
q=0
case 3:if(!(q<3)){w=5
break}w=6
return A.b(C.zi(r[q]),$async$fHB)
case 6:if(f){u='Opening Maps for "'+t+'".'
w=1
break}case 4:++q
w=3
break
case 5:u="Could not open Maps."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHB,v)},
fHx(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fHx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=d.b
o=J.a2(p)
n=o.h(p,"phone")
if(n==null)n=""
t=A.ag("[^\\d+]+",!0,!1,!1,!1)
s=A.aL(n,t,"")
if(s.length===0){u=y.p
w=1
break}w=3
return A.b(C.zi(A.cH("tel:"+s,0,null)),$async$fHx)
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
return A.i($async$fHx,v)},
fHE(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fHE=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.zi(s.length===0?A.cH(p,0,null):A.cH(p+"?body="+A.hQ(2,s,B.ce,!1),0,null)),$async$fHE)
case 3:if(f)p=r.length!==0?"Opening Messages to "+r+"\u2026":"Opening Messages\u2026"
else p="Could not open Messages."
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHE,v)},
fHG(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k
var $async$fHG=A.e(function(e,f){if(e===1)return A.f(f,v)
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
q=k?"?text="+A.hQ(2,r,B.ce,!1):""
t=A.cH("https://wa.me/"+s+q,0,null)
k=k?"&text="+A.hQ(2,r,B.ce,!1):""
p=[t,A.cH("whatsapp://send?phone="+s+k,0,null)]
o=0
case 3:if(!(o<2)){w=5
break}w=6
return A.b(C.zi(p[o]),$async$fHG)
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
return A.i($async$fHG,v)},
fHy(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fHy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"to")
n=B.a.i(o==null?"":o)
if(n.length===0){u="No email address provided."
w=1
break}o=x.N
t=A.S(o,o)
o=p.h(q,"subject")
s=o==null?null:B.a.i(o)
q=p.h(q,"body")
r=q==null?null:B.a.i(q)
if(s!=null&&s.length!==0)t.n(0,"subject",s)
if(r!=null&&r.length!==0)t.n(0,"body",r)
w=3
return A.b(C.zi(A.zc(null,null,n,null,null,null,t.a===0?null:t,"mailto",null)),$async$fHy)
case 3:u=f?"Opening Mail\u2026":"Could not open Mail."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHy,v)},
aRI(d,e,f,g,h,a0){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aRI=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
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
return A.b(C.cmL(e),$async$aRI)
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
return A.b(C.cmM(e),$async$aRI)
case 11:case 9:w=7
return A.b(k.cmN(j,i,a2,g,p,q),$async$aRI)
case 7:l=a2
if(!l.c){t=l.a
u=t==null?"Email could not be sent.":t
w=1
break}l.b
u="Email sent to "+q+"."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aRI,v)},
fHC(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fHC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"url")
n=B.a.i(o==null?"":o)
o=p.h(q,"username")
q=o==null?p.h(q,"page"):o
t=B.a.i(B.a.eq(B.a.i(q==null?"":q),A.ag("^@+",!0,!1,!1,!1),""))
s=A.a([],x.A)
if(n.length!==0)s.push(A.cH(B.a.Y(n,"http")?n:"https://"+n,0,null))
if(t.length!==0){s.push(A.cH("fb-messenger://user-thread/"+t,0,null))
s.push(A.cH("https://m.me/"+t,0,null))}s.push(A.cH("https://www.messenger.com/",0,null))
q=s.length,r=0
case 3:if(!(r<s.length)){w=5
break}w=6
return A.b(C.zi(s[r]),$async$fHC)
case 6:if(f){u="Opening Messenger\u2026"
w=1
break}case 4:s.length===q||(0,A.I)(s),++r
w=3
break
case 5:u="Could not open Messenger."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHC,v)},
fHz(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fHz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"url")
n=B.a.i(o==null?"":o)
o=p.h(q,"username")
q=o==null?p.h(q,"page"):o
t=B.a.i(B.a.eq(B.a.i(q==null?"":q),A.ag("^@+",!0,!1,!1,!1),""))
s=A.a([],x.A)
if(n.length!==0)s.push(A.cH(B.a.Y(n,"http")?n:"https://"+n,0,null))
if(t.length!==0){s.push(A.cH("fb://profile/"+t,0,null))
s.push(A.cH("https://www.facebook.com/"+t,0,null))}s.push(A.cH("fb://feed",0,null))
s.push(A.cH("https://www.facebook.com/",0,null))
q=s.length,r=0
case 3:if(!(r<s.length)){w=5
break}w=6
return A.b(C.zi(s[r]),$async$fHz)
case 6:if(f){u="Opening Facebook\u2026"
w=1
break}case 4:s.length===q||(0,A.I)(s),++r
w=3
break
case 5:u="Could not open Facebook."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHz,v)},
fHA(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fHA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"url")
n=B.a.i(o==null?"":o)
q=p.h(q,"username")
t=B.a.i(B.a.eq(B.a.i(q==null?"":q),A.ag("^@+",!0,!1,!1,!1),""))
s=A.a([],x.A)
if(n.length!==0)s.push(A.cH(B.a.Y(n,"http")?n:"https://"+n,0,null))
if(t.length!==0){s.push(A.cH("instagram://user?username="+t,0,null))
s.push(A.cH("https://www.instagram.com/"+t+"/",0,null))}s.push(A.cH("https://www.instagram.com/",0,null))
q=s.length,r=0
case 3:if(!(r<s.length)){w=5
break}w=6
return A.b(C.zi(s[r]),$async$fHA)
case 6:if(f){u="Opening Instagram\u2026"
w=1
break}case 4:s.length===q||(0,A.I)(s),++r
w=3
break
case 5:u="Could not open Instagram."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHA,v)},
fHF(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fHF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"url")
n=B.a.i(o==null?"":o)
q=p.h(q,"username")
t=B.a.i(B.a.eq(B.a.i(q==null?"":q),A.ag("^@+",!0,!1,!1,!1),""))
s=A.a([],x.A)
if(n.length!==0)s.push(A.cH(B.a.Y(n,"http")?n:"https://"+n,0,null))
if(t.length!==0){s.push(A.cH("tg://resolve?domain="+t,0,null))
s.push(A.cH("https://t.me/"+t,0,null))}s.push(A.cH("https://web.telegram.org/",0,null))
q=s.length,r=0
case 3:if(!(r<s.length)){w=5
break}w=6
return A.b(C.zi(s[r]),$async$fHF)
case 6:if(f){u="Opening Telegram\u2026"
w=1
break}case 4:s.length===q||(0,A.I)(s),++r
w=3
break
case 5:u="Could not open Telegram."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHF,v)},
fHD(d){var w=0,v=A.j(x.T),u,t,s
var $async$fHD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J.t(d.b,"url")
s=B.a.i(t==null?"":t)
if(s.length===0){u="No link provided."
w=1
break}w=3
return A.b(C.zi(A.cH(!B.a.Y(s,"http://")&&!B.a.Y(s,"https://")?"https://"+s:s,0,null)),$async$fHD)
case 3:u=f?"Opening link\u2026":"Could not open that link."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHD,v)},
hnA(d){var w=0,v=A.j(x.T),u,t,s,r,q,p
var $async$hnA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=d.b
q=J.a2(r)
p=q.h(r,"tool")
q=p==null?q.h(r,"app"):p
t=B.a.i(q==null?"":q).toLowerCase()
if(t.length===0){u="No NGMY tool was specified."
w=1
break}q=x.N
s=A.a0(r,q,q)
s.X(0,"tool")
s.X(0,"app")
u=C.hgX(t,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hnA,v)},
hO5(d,e,f){var w,v,u,t,s,r,q,p=null
if(d.length===0)return B.bK
w=A.a([],x.p)
for(v=d.length,u=0;u<d.length;d.length===v||(0,A.I)(d),++u){t=d[u]
s=A.V(t.gaoN(0),B.aN,p,p,p,16)
r=A.c(t.gua(),p,p,p,p,p,p,B.acY,p,p,p)
q=e?D.a0i:D.btq
w.push(A.mR(s,q,r,p,new C.h09(f,t),p,p,new A.ax(B.aN.j(0.45),1,B.r,-1),p))}return new A.D(F.a2k,A.bZ(B.bI,w,B.br,p,6,6),p)},
kb:function kb(d,e){this.a=d
this.b=e},
clV:function clV(d){this.a=d},
h_O:function h_O(d){this.a=d},
fyI:function fyI(){},
fyJ:function fyJ(){},
h09:function h09(d,e){this.a=d
this.b=e},
b5O(){var w=0,v=A.j(x.H),u
var $async$b5O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.h3B(),$async$b5O)
case 3:w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b5O,v)},
i8c(d){var w=d==null?"":d,v=w.toLowerCase()
if(B.a.q(v,"not-allowed")||B.a.q(v,"permission"))return"Microphone blocked. On iPhone: Settings \u2192 Safari \u2192 Microphone \u2192 Allow, or tap \u201caA\u201d in the address bar \u2192 Website Settings \u2192 Microphone \u2192 Allow, then reload NGMY."
if(B.a.q(v,"not-supported")||B.a.q(v,"speech_not_supported"))return"Voice input needs a browser with speech recognition. On iPhone, use Safari and allow microphone for this site."
if(B.a.q(v,"network"))return"Voice needs internet. Check your connection and try again."
if(B.a.q(v,"no-speech")||B.a.q(v,"no_match"))return"No speech heard. Tap the mic and speak clearly."
if(B.a.q(v,"aborted"))return"Voice input stopped."
return"Could not start voice. Allow microphone for NGMY in browser settings, reload, and try again."},
K0:function K0(d,e,f){this.c=d
this.d=e
this.a=f},
aHM:function aHM(){var _=this
_.d=!1
_.e=""
_.c=_.a=null},
f0m:function f0m(d){this.a=d},
f0n:function f0n(d){this.a=d},
f0l:function f0l(){},
f0o:function f0o(d,e){this.a=d
this.b=e},
ifi(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=e.length,l="",k=n
if(m!==0){v=0
for(;;){if(!(v<m)){w=0
break}if(e.charCodeAt(v)===64){l=B.a.aw(e,0,v)
w=v+1
break}++v}if(w<m&&e.charCodeAt(w)===91){for(u=w,t=-1;u<m;++u){s=e.charCodeAt(u)
if(s===37&&t<0){r=B.a.j0(e,"25",u+1)?u+2:u
t=u
u=r}else if(s===93)break}if(u===m)throw A.Y(A.fS("Invalid IPv6 host entry.",e,w))
q=t<0?u:t
A.hDq(e,w+1,q);++u
if(u!==m&&e.charCodeAt(u)!==58)throw A.Y(A.fS("Invalid end of authority",e,u))}else u=w
for(;u<m;++u)if(e.charCodeAt(u)===58){p=B.a.aY(e,u+1)
k=p.length!==0?A.jd(p,n,n):n
break}o=B.a.aw(e,w,u)}else o=n
return A.zc(n,o,n,A.a(f.split("/"),x.s),k,n,g,d,l)},
i1c(){var w,v=$.hgW,u=v==null?null:v.$0()
if(u!=null&&u.e!=null)return u
v=$.hxf
w=v==null?null:v.$0()
if(w!=null&&w.e!=null)return w
return null},
hgX(d,e){var w=0,v=A.j(x.T),u,t,s,r,q,p
var $async$hgX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=C.i1c()
if(p==null){u="Open NGMY on your phone first, then ask the AI again."
w=1
break}t=B.a.i(d).toLowerCase()
s=$.Ob.h(0,t)
if(s!=null){u=s.c.$2(p,e)
w=1
break}r=$.VW.h(0,t)
if(r==null){q=A.d3(new A.cr($.VW,A.a3($.VW).k("cr<1>")),x.N)
q.u(0,new A.cr($.Ob,A.a3($.Ob).k("cr<1>")))
q=A.B(q,A.a3(q).k("cg.E"))
B.d.fd(q)
u='Unknown place "'+d+'". Try: '+B.d.aL(q,", ")+"."
w=1
break}u=r.$1(p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hgX,v)},
aqe(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aqe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:h=B.a.i(d)
if(h.length===0){w=1
break}t=new A.W(Date.now(),0,!1)
s=t.bL(-2592e9)
r=A.a([],x.X)
for(q=J.aR(e),p=x.N,o=x.z;q.C();){n=q.gP(q)
m=J.a2(n)
l=m.h(n,"role")
k=J.k(l==null?"":l)
l=m.h(n,"text")
j=B.a.i(J.k(l==null?"":l))
if(j.length===0)continue
n=m.h(n,"at")
i=A.bg(J.k(n==null?"":n))
if(i==null)i=t
n=i.a
if(n>=s.gbr())n=n===s.gbr()&&i.b<s.gcE()
else n=!0
if(n)continue
r.push(A.J(["role",k,"text",j,"at",i.aa().ag()],p,o))}while(r.length>120)B.d.cJ(r,0)
w=3
return A.b(A.aqd(h,r),$async$aqe)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aqe,v)},
aTt(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r,q,p,o
var $async$aTt=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:o=g.bU()
if(o.cW(new A.W(Date.now(),0,!1).bL(2e7))){u="That time already passed \u2014 pick a future time for your alarm."
w=1
break}t="alarm_"+1000*Date.now()
s=B.a.i(e)
if(s.length===0)s="Wake up"
w=3
return A.b(C.asA(f,new A.p5(t,s,o,d)),$async$aTt)
case 3:w=4
return A.b(C.ajp(t,d,s,o),$async$aTt)
case 4:r=i
if(r!=null){q=B.o.F(A.d5(o),12)===0?12:B.o.F(A.d5(o),12)
p=A.d5(o)>=12?"PM":"AM"
u="Phone alarm set for "+r+". Your iPhone will ring on the lock screen \u2014 you can close NGMY. Tip: also add "+(""+q+":"+B.a.b_(B.o.v(A.fE(o)),2,"0")+" "+p)+" in Clock \u2192 Alarm for a backup buzz."
w=1
break}w=5
return A.b(C.fYJ(!0,d,s,o),$async$aTt)
case 5:u=i
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aTt,v)},
fYJ(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r,q,p,o,n,m,l
var $async$fYJ=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:m=g.bU()
l=B.a.i(f)
if(l.length===0)l="Wake up \u2014 NGMY"
t=B.o.F(A.d5(m),12)===0?12:B.o.F(A.d5(m),12)
s=A.d5(m)>=12?"PM":"AM"
r=B.a.b_(B.o.v(A.fE(m)),2,"0")
q=B.o.F(A.d5(m),12)===0?12:B.o.F(A.d5(m),12)
p=A.d5(m)>=12?"PM":"AM"
o=B.a.b_(B.o.v(A.fE(m)),2,"0")
w=3
return A.b(C.fWs(C.hMD(!0,0,m.bL(6e7),null,e,m,l),"ngmy-wake-alarm.ics",l),$async$fYJ)
case 3:n=i
u="Phone alert set for "+(""+A.bN(m)+"/"+A.bW(m)+" at "+t+":"+r+" "+s)+". Tap Allow on the iPhone prompt \u2014 your phone will ring at that time even with NGMY closed. "+n+" Also add "+(""+q+":"+o+" "+p)+" in Clock \u2192 Alarm as a backup."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fYJ,v)},
iz7(d,e){var w,v,u,t,s,r,q,p="username",o="fullName",n=B.a.i(e).toLowerCase()
if(n.length===0)return null
for(w=d.length,v=0;u=d.length,v<u;d.length===w||(0,A.I)(d),++v){t=d[v]
u=J.a2(t)
s=u.h(t,"email")
r=B.a.i(J.k(s==null?"":s))
if(!A.cY(r,"@",0))continue
s=u.h(t,p)
s=B.a.i(J.k(s==null?"":s))
u=u.h(t,o)
u=B.a.i(J.k(u==null?"":u))
if(s.toLowerCase()===n||u.toLowerCase()===n||r.toLowerCase()===n)return r}for(v=0;v<d.length;d.length===u||(0,A.I)(d),++v){t=d[v]
w=J.a2(t)
s=w.h(t,"email")
r=B.a.i(J.k(s==null?"":s))
if(!A.cY(r,"@",0))continue
s=w.h(t,p)
s=B.a.i(J.k(s==null?"":s))
w=w.h(t,o)
w=B.a.i(J.k(w==null?"":w))
q=!0
if(!A.cY(s.toLowerCase(),n,0))if(!A.cY(w.toLowerCase(),n,0))w=A.cY(r.toLowerCase(),n,0)
else w=q
else w=q
if(w)return r}return null},
hp2(d){var w=0,v=A.j(x.h),u
var $async$hp2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d.length===0){u=null
w=1
break}u=B.d.gG(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hp2,v)},
bDO(d,e,f){var w=0,v=A.j(x.S),u
var $async$bDO=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(C.a9V(d,f),$async$bDO)
case 3:u=C.atv(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDO,v)},
ajo(d,e,a0,a1){var w=0,v=A.j(x.x),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ajo=A.e(function(a2,a3){if(a2===1)return A.f(a3,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bDO(a1,!0,a0),$async$ajo)
case 3:g=a3
f=A.a([],x.t)
t=J.aR(d),s=x.N
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
l=C.iz7(a0,m)
if(l!=null){k=A.a0(p,s,s)
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
break}i=C.hAp(g,m)
w=i.length===0?6:7
break
case 6:w=8
return A.b(C.bDO(a1,!0,a0),$async$ajo)
case 8:g=a3
i=C.hAp(g,m)
case 7:w=9
return A.b(C.hp2(i),$async$ajo)
case 9:h=a3
if(h!=null){k=A.a0(p,s,s)
r=h.c
k.n(0,"phone",r.length!==0?B.d.gG(r):"")
k.n(0,"contactName",h.b)
f.push(new C.kb(q,k))}else f.push(r)
w=4
break
case 5:u=f
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ajo,v)},
hNr(d){var w,v,u=B.a.i(d).toLowerCase()
if(u.length===0)return D.j8
w=A.ag("\\b(open|launch|start|show|take me to|go to)\\b",!0,!1,!1,!1)
if(!w.b.test(u))return D.j8
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
if(w.b.test(u))return D.j8
v=null}}}}}}}}}if(v==null)return D.j8
w=x.N
return A.a([new C.kb("open_tool",A.J(["tool",v],w,w))],x.t)},
cmL(d){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m
var $async$cmL=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d!=null){q=d.y
q=B.a.i(q)
p=A.ag("[\\r\\n\\t]",!0,!1,!1,!1)
o=A.aL(q,p,"")}else o=""
if(o.length!==0){u=o
w=1
break}t=4
w=7
return A.b(A.aB(),$async$cmL)
case 7:r=f
q=A.aV(J.t(r.a,"ngmy_resend_api_key_v1"))
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
return A.i($async$cmL,v)},
cmM(d){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cmM=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d!=null){p=B.a.i(d.z)
o=p}else o=""
if(o.length!==0){u=o
w=1
break}t=4
w=7
return A.b(A.aB(),$async$cmM)
case 7:r=f
p=A.aV(J.t(r.a,"ngmy_resend_from_email_v1"))
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
return A.i($async$cmM,v)},
cmN(d,e,f,g,h,i){var w=0,v=A.j(x.F),u,t,s,r,q,p,o
var $async$cmN=A.e(function(j,k){if(j===1)return A.f(k,v)
for(;;)switch(w){case 0:r=B.a.i(d)
q=A.ag("[\\r\\n\\t]",!0,!1,!1,!1)
p=A.aL(r,q,"")
o=B.a.i(i)
r=B.a.i(e)
t=r.length===0?"<p></p>":C.i7c(r)
if(p.length===0){u=new A.z7("Email is not available right now. Please try again later.",null,!1)
w=1
break}if(o.length===0||!B.a.q(o,"@")){u=new A.z7("No valid recipient email was provided.",null,!1)
w=1
break}r=B.a.i(f)
if(r.length===0)r="NGMY <noreply@ngmy.org>"
q=B.a.i(h)
w=3
return A.b(C.cmK(p,r,t,g,q.length===0?"Message from NGMY":q,o),$async$cmN)
case 3:s=k
if(s.c){u=s
w=1
break}u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cmN,v)},
i7c(d){var w
if(B.a.q(d,"<")&&B.a.q(d,">"))return d
w=D.bdy.aK(d)
return"<p>"+A.aL(w,"\n","<br/>")+"</p>"},
cmK(d,e,f,g,h,i){var w=0,v=A.j(x.F),u,t=2,s=[],r,q,p,o,n,m
var $async$cmK=A.e(function(j,k){if(j===1){s.push(k)
w=t}for(;;)switch(w){case 0:n=A.J(["action","resendEmail","apiKey",d,"from",e,"to",i,"subject",h,"html",f,"requesterEmail",g],x.N,x.z)
t=4
w=7
return A.b(A.fP(n,!1,!1,!1,!1,D.bDZ),$async$cmK)
case 7:r=k
if(r!=null){p=J.z(J.t(r,"ok"),!0)?200:400
p=C.i7d(p,r)
u=p
w=1
break}u=new A.z7("Email proxy unavailable.",null,!1)
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
q=A.ac(m)
p=C.hiv(J.k(q))
u=new A.z7(p,null,!1)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$cmK,v)},
i7d(d,e){var w,v,u=null
if(d===200){w=J.a2(e)
if(J.z(w.h(e,"ok"),!0)){w=w.h(e,"id")
return new A.z7(u,w==null?u:J.k(w),!0)}w=w.h(e,"error")
v=w==null?u:J.k(w)
if(v!=null&&v.length!==0)return new A.z7(C.hiv(v),u,!1)}if(d===403)return new A.z7(y.c,u,!1)
if(d===404)return new A.z7("Email proxy not deployed yet. Admin: redeploy Supabase function bright-handler.",u,!1)
w=J.t(e,"error")
v=w==null?u:J.k(w)
if(v!=null&&v.length!==0)return new A.z7(C.hiv(v),u,!1)
return new A.z7("Email proxy HTTP "+d,u,!1)},
hiv(d){var w,v=B.a.i(d)
if(v.length===0)return null
w=d.toLowerCase()
if(B.a.q(w,"domain")&&B.a.q(w,"verify"))return"Resend needs your sending domain verified. Set a verified From address in NGMY AI settings."
if(B.a.q(w,"invalid")&&B.a.q(w,"key"))return"Resend rejected this API key. Copy it again from resend.com \u2192 API Keys, then Save AI Settings."
if(d.length>180)return B.a.aw(d,0,177)+"\u2026"
return d}},D,F,G
J=c[1]
A=c[0]
B=c[2]
E=c[285]
C=a.updateHolder(c[38],C)
D=c[123]
F=c[166]
G=c[255]
C.bZ5.prototype={
v(d){return"unknown"}}
C.aYX.prototype={
aK(d){var w=this.aU0(d,0,d.length)
return w==null?d:w},
aU0(d,e,f){var w,v,u,t
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
default:u=null}if(u!=null){if(v==null)v=new A.fl("")
if(w>e)v.a+=B.a.aw(d,e,w)
v.a+=u
e=w+1}}if(v==null)return null
if(f>e){t=B.a.aw(d,e,f)
v.a+=t}t=v.a
return t.charCodeAt(0)==0?t:t},
mM(d){return new C.bjV(this,x.e.b(d)?d:new A.RH(d))}}
C.bjV.prototype={
jN(d,e,f,g){var w=this.a.aU0(d,e,f),v=this.b
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
gaoN(d){var w
switch(this.a){case"calendar":w=B.Ag
break
case"alarm":w=G.a3U
break
case"maps":w=B.ly
break
case"call":w=B.j5
break
case"sms":w=B.A9
break
case"whatsapp":w=B.vp
break
case"email":w=B.DA
break
case"send_email":w=D.bVa
break
case"messenger":w=B.xk
break
case"facebook":w=B.arE
break
case"instagram":w=B.Ii
break
case"telegram":w=B.m4
break
case"open_url":w=B.tK
break
case"open_tool":w=B.zS
break
default:w=D.bVw
break}return w},
gua(){var w,v,u,t,s,r,q,p=this,o=p.a
switch(o){case"calendar":o=p.b
w=J.a2(o)
v=w.h(o,"title")
if(v==null)v="Event"
u=C.bER(w.h(o,"start"))
if(u!=null)return v+" \xb7 "+C.hH7(u)
return v
case"alarm":o=p.b
w=J.a2(o)
v=w.h(o,"title")
if(v==null)v="Wake up"
u=C.bER(w.h(o,"start"))
if(u!=null)return v+" \xb7 "+C.hH7(u)
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
C.K0.prototype={
R(){return new C.aHM()}}
C.aHM.prototype={
a10(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a10=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.d?3:4
break
case 3:w=5
return A.b(C.b5O(),$async$a10)
case 5:if(t.c!=null)t.l(new C.f0m(t))
w=1
break
case 4:t.e=B.a.i(t.a.c.a.a)
w=6
return A.b(A.auW(new C.f0n(t)),$async$a10)
case 6:s=e
if(t.c!=null)t.l(new C.f0o(t,s))
if(!s&&t.c!=null){r=t.c.K(x.q).f
q=$.b5N
r.T(A.b3(null,null,null,null,null,B.t,null,A.c(C.i8c(q==null?$.S0:q),null,null,null,null,null,null,null,null,null,null),null,B.kg,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(u,v)}})
return A.i($async$a10,v)},
t(){if(this.d)C.b5O()
this.a2()},
B(d){var w,v,u,t=null,s=this.a.d
if(s==null)s=A.Q(d).ax.b
w=this.d
v=w?"Stop recording":"Voice input"
u=w?B.asu:B.oY
return A.aI(t,t,t,t,A.V(u,w?B.dV:s,t,t,t,t),t,t,t,this.gchd(),t,t,t,t,v,t)}}
var z=a.updateTypes(["lr(a9<@,@>)","P(lr)","a9<m,@>(lr)","F(lr,lr)","F(+c,s(lr,F),+c,s(lr,F))","lr(+c,s(lr,F))","ay<~>()"])
C.fE3.prototype={
$0(){var w
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(w){}},
$S:12}
C.fze.prototype={
$1(d){return B.a.b_(B.o.v(d),2,"0")},
$S:76}
C.fzf.prototype={
$1(d){return B.a.b_(B.o.v(d),2,"0")},
$S:76}
C.cim.prototype={
$1(d){return d.a===this.a.a},
$S:1666}
C.cin.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:563}
C.cio.prototype={
$1(d){return d.ak()},
$S:1667}
C.fGo.prototype={
bq5(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=d.active
s=t==null?d.installing:t
if(s==null)s=d.waiting
if(s!=null){t=x.N
B.fq5.d2h(s,A.J(["type","SCHEDULE_ALARM","id",u.a,"at",u.b.aa().ag(),"title",u.c,"body",u.d],t,t))}return A.h(null,v)}})
return A.i($async$$1,v)},
$1(d){return this.bq5(d)},
$S:1668}
C.h1F.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=A.aF(d,B.f0,x.w).w,m=this.a,l=m?D.a0i:B.c,k=A.n(24),j=x.V,i=A.a([new A.aa(0,B.H,B.v.j(0.18),B.eU,28)],j),h=m?B.aT:B.bn
h=A.p(o,o,B.f,o,o,new A.o(h,o,o,A.n(99),o,o,B.m),o,4,o,o,o,o,o,40)
w=this.b
v=x.O
u=A.a([w,w.j(0.72)],v)
t=A.n(20)
s=A.a([new A.aa(0,B.H,w.j(0.35),B.cy,16)],j)
r=this.c
u=A.p(o,A.V(r.gaoN(0),B.c,o,o,o,30),B.f,o,o,new A.o(o,o,o,t,s,new A.a8(B.ay,B.aD,B.x,u,o,o),B.m),o,64,o,o,o,o,o,64)
s=C.ijx(r)
t=A.c(s,o,o,o,o,o,o,A.l(o,o,m?B.c:B.a_,o,o,o,o,o,o,o,o,20,o,o,B.E,o,o,!0,o,o,o,o,o,o,o,o),B.K,o,o)
s=C.ipR(r)
s=A.c(s,o,o,o,o,o,o,A.l(o,o,m?B.aR:B.an,o,o,o,o,o,o,o,o,13,o,o,o,o,1.4,!0,o,o,o,o,o,o,o,o),B.K,o,o)
q=C.ii_(r,w,m)
v=A.a([w,w.j(0.85)],v)
p=A.n(14)
j=A.a([new A.aa(0,B.H,w.j(0.32),B.cO,12)],j)
w=x.p
r=A.aG(!1,B.a3,!0,o,A.aM(!1,A.n(14),!0,new A.D(B.zj,A.A(A.a([A.V(r.gaoN(0),B.c,o,o,o,20),B.aa,A.c(C.ino(r),o,o,o,o,o,o,B.nw,o,o,o)],w),B.l,o,B.ba,B.h,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.h1D(d),o,o,o,o,o,o,o),B.f,B.L,0,o,o,o,o,o,B.ai)
return new A.D(new A.R(0,0,0,n.f.d),A.p(o,A.bo(!0,new A.D(D.bJe,A.x(A.a([h,B.by,u,B.aO,t,B.N,s,B.by,q,B.dh,new A.a5(1/0,o,new A.bQ(new A.o(o,o,o,p,j,new A.a8(B.a5,B.a9,B.x,v,o,o),B.m),B.bm,r,o),o),B.ak,A.bM(!1,A.c("Not now",o,o,o,o,o,o,A.l(o,o,m?B.aF:B.bP,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,o,o,new C.h1E(d),o,o)],w),B.l,o,B.e,B.M,0,B.p),o),!0,!1,B.ag,!0,!1),B.f,o,o,new A.o(l,o,o,k,i,o,B.m),o,o,o,E.tw,o,o,o,o),o)},
$S:63}
C.h1D.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.h1E.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.clX.prototype={
$1(d){return C.i6X(A.a0(d,x.N,x.z))},
$S:z+0}
C.clY.prototype={
$1(d){return d.b.length!==0&&d.c.length!==0},
$S:z+1}
C.cm_.prototype={
$1(d){return d.ak()},
$S:z+2}
C.clZ.prototype={
$2(d,e){return B.a.aQ(d.b.toLowerCase(),e.b.toLowerCase())},
$S:z+3}
C.clW.prototype={
$1(d){return d===this.a},
$S:3}
C.cm0.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:z+4}
C.cm1.prototype={
$1(d){return d.a},
$S:z+5}
C.clV.prototype={
$2(d,e){if(d==="type"||e==null)return
this.a.n(0,d,J.k(e))},
$S:92}
C.h_O.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m
try{w=B.U.aP(0,d,null)
if(x.j.b(w))for(r=J.aR(w),q=x.f,p=x.N,o=x.z,n=this.a;r.C();){v=r.gP(r)
if(q.b(v)){u=C.clU(A.a0(v,p,o))
if(u!=null)n.push(u)}}else if(x.f.b(w)){t=C.clU(A.a0(w,x.N,x.z))
if(t!=null)this.a.push(t)}}catch(m){s=A.ac(m)
$.am.$1("[phone] action parse error: "+A.v(s))}},
$S:2}
C.fyI.prototype={
$1(d){var w=d.aa(),v=new C.fyJ()
return""+A.bD(w)+A.v(v.$1(A.bN(w)))+A.v(v.$1(A.bW(w)))+"T"+A.v(v.$1(A.d5(w)))+A.v(v.$1(A.fE(w)))+A.v(v.$1(A.G5(w)))+"Z"},
$S:375}
C.fyJ.prototype={
$1(d){return B.a.b_(B.o.v(d),2,"0")},
$S:76}
C.h09.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f0m.prototype={
$0(){return this.a.d=!1},
$S:0}
C.f0n.prototype={
$2$isFinal(d,e){var w,v,u,t=this.a
if(t.c==null)return
w=B.a.i(d)
if(w.length===0)return
v=t.a.c
u=t.e
v.sb1(0,u.length===0?w:u+" "+w)
v=t.a.c
v.su1(A.hw(B.bD,v.a.a.length))
if(t.c!=null)t.l(new C.f0l())},
$1(d){return this.$2$isFinal(d,!1)},
$S:551}
C.f0l.prototype={
$0(){},
$S:0}
C.f0o.prototype={
$0(){return this.a.d=this.b},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.aHM.prototype,"gchd","a10",6)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.aE,[C.bZ5,C.lr,C.kb])
v(C.aYX,A.fV)
v(C.bjV,A.x2)
w(A.hS,[C.fE3,C.h1D,C.h1E,C.h09,C.f0m,C.f0l,C.f0o])
w(A.fR,[C.fze,C.fzf,C.cim,C.cio,C.fGo,C.h1F,C.clX,C.clY,C.cm_,C.clW,C.cm1,C.h_O,C.fyI,C.fyJ,C.f0n])
w(A.ie,[C.cin,C.clZ,C.cm0,C.clV])
v(C.K0,A.af)
v(C.aHM,A.ah)})()
A.i0(b.typeUniverse,JSON.parse('{"aYX":{"fV":["m","m"],"fV.S":"m","fV.T":"m"},"bjV":{"x2":[]},"K0":{"af":[],"w":[]},"aHM":{"ah":["K0"]}}'))
var y={k:"Allow the ngmy.org calendar invite on the next prompt.",p:"Could not find a phone number for that name.",d:"Could not find a phone number or email for that contact.",c:"Only NGMY admins can send direct emails from the AI."}
var x=(function rtii(){var w=A.ar
return{V:w("N<aa>"),O:w("N<u>"),X:w("N<a9<m,@>>"),t:w("N<kb>"),I:w("N<lr>"),P:w("N<+c,s(lr,F)>"),s:w("N<m>"),A:w("N<GA>"),p:w("N<w>"),x:w("ai<kb>"),S:w("ai<lr>"),j:w("ai<@>"),f:w("a9<@,@>"),E:w("O<+c,s(lr,F),lr>"),w:w("hW"),B:w("lr"),F:w("+error,messageId,ok(m?,m?,P)"),U:w("Q9"),N:w("m"),e:w("x2"),q:w("ky"),y:w("P"),z:w("@"),h:w("lr?"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.hXf=new C.bZ5()
D.bdy=new C.aYX()
D.btq=new A.u(1,0.9098039215686274,0.9725490196078431,0.9372549019607843,B.q)
D.a0i=new A.u(1,0.10980392156862745,0.1411764705882353,0.2,B.q)
D.bDZ=new A.bh(35e6)
D.bJe=new A.R(22,10,22,20)
D.arA=new A.a_(63202,"MaterialIcons",!1)
D.bVa=new A.a_(63655,"MaterialIcons",!1)
D.bVw=new A.a_(983176,"MaterialIcons",!1)
D.j8=w([],x.t)
D.aFj=w([B.bs,B.aM],x.O)
D.aZi=new A.C("Restore QR",null,B.cJ,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["pT4ONTiGB2IsL533yqsAuGuf4eM="]=a.current})($__dart_deferred_initializers__);