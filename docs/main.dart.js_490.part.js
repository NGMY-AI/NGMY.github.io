((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={bYZ:function bYZ(){},aYS:function aYS(){},bjP:function bjP(d,e){this.a=d
this.b=e},
iln(d){var w,v,u,t,s
try{w="data:text/calendar;charset=utf-8,"+A.hP(2,d,B.cb,!1)
if(J.ad(w)<15e5){u=A.nf(null)
u.href=w
u.type="text/calendar"
v=u
t=document.body
if(t!=null)t.appendChild(v).toString
J.HW(v)
J.m2(v)
return!0}}catch(s){}return!1},
ilo(d){var w,v,u,t,s,r
try{w=A.i3([d],"text/calendar;charset=utf-8")
t=(self.URL||self.webkitURL).createObjectURL(w)
t.toString
v=t
s=A.nf(null)
s.href=v
s.type="text/calendar"
u=s
t=document.body
if(t!=null)t.appendChild(u).toString
J.HW(u)
J.m2(u)
A.bL(B.OT,new C.fD8(v),x.H)
return!0}catch(r){return!1}},
fVw(d,e,f){return C.iv8(d,e,f)},
iv8(d,e,f){var w=0,v=A.j(x.N),u,t,s,r,q,p,o,n,m,l
var $async$fVw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:n=B.cb.cG(0,d)
m=window.navigator.userAgent.toLowerCase()
l=!0
if(!B.a.q(m,"iphone"))if(!B.a.q(m,"ipad")){if(!B.a.q(m,"ipod"))q=B.a.q(m,"macintosh")&&B.a.q(m,"mobile")
else q=l
l=q}if(C.iln(n)){u=l?y.k:"Open the calendar invite to add the event."
w=1
break}if(C.ilo(d)){u=l?y.k:"Calendar invite ready \u2014 confirm to add the event."
w=1
break}q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=A.aL(e,q,"_")
t=B.a.c7(p,".ics")?p:p+".ics"
try{s=A.i3([d],"text/calendar")
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
return A.i($async$fVw,v)},
hpb(d){return C.ixg(d)},
ixg(d){var w=0,v=A.j(x.N),u,t
var $async$hpb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:try{window.location.assign(d)
u="Opening Google Calendar to save the event."
w=1
break}catch(s){u="Could not open Calendar."
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$hpb,v)},
fD8:function fD8(d){this.a=d},
hLH(d,e,f,g,h,i,j){var w,v="BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//NGMY//Helper AI//EN\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nBEGIN:VEVENT\n"+("UID:"+("ngmy-"+1000*Date.now()+"@ngmy.org")+"\n")+("DTSTAMP:"+C.iiO(new A.V(Date.now(),0,!1).ab())+"\n")+("DTSTART:"+C.hGA(i)+"\n")+("DTEND:"+C.hGA(f)+"\n")+("SUMMARY:"+C.fwy(j)+"\n")
if(h!=null&&B.a.i(h).length!==0)v+="DESCRIPTION:"+C.fwy(B.a.i(h))+"\n"
if(g!=null&&B.a.i(g).length!==0)v+="LOCATION:"+C.fwy(B.a.i(g))+"\n"
if(d||e>0){w=e<=0?"-PT0M":"-PT"+e+"M"
v=v+"BEGIN:VALARM\n"+("TRIGGER:"+w+"\n")+"ACTION:DISPLAY\n"+("DESCRIPTION:"+C.fwy(j)+"\n")+"END:VALARM\n"}v+="END:VEVENT\nEND:VCALENDAR\n"
return new Uint8Array(A.ca(B.dZ.aK(v.charCodeAt(0)==0?v:v)))},
hGA(d){var w=d.bU(),v=new C.fyj()
return""+A.bD(w)+A.v(v.$1(A.bM(w)))+A.v(v.$1(A.bW(w)))+"T"+A.v(v.$1(A.d6(w)))+A.v(v.$1(A.fG(w)))+A.v(v.$1(A.G4(w)))},
iiO(d){var w=new C.fyk()
return""+A.bD(d)+A.v(w.$1(A.bM(d)))+A.v(w.$1(A.bW(d)))+"T"+A.v(w.$1(A.d6(d)))+A.v(w.$1(A.fG(d)))+A.v(w.$1(A.G4(d)))+"Z"},
fwy(d){var w=A.aL(d,"\\","\\\\")
w=A.aL(w,"\n","\\n")
w=A.aL(w,",","\\,")
return A.aL(w,";","\\;")},
fyj:function fyj(){},
fyk:function fyk(){},
asx(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$asx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.a9b(d),$async$asx)
case 2:r=g
q=J.cH(r)
q.bq(r,new C.cie(e))
q.I(r,e)
q.b_(r,new C.cif())
w=3
return A.b(A.aB(),$async$asx)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.km(r,40)
s=q.$ti.k("O<ak.E,a9<m,@>>")
q=A.B(new A.O(q,new C.cig(),s),s.k("ak.E"))
w=4
return A.b(u.aE("String","ngmy_helper_alarm_v1_"+t,B.V.au(q,null)),$async$asx)
case 4:return A.h(null,v)}})
return A.i($async$asx,v)},
cie:function cie(d){this.a=d},
cif:function cif(){},
cig:function cig(){},
ajm(d,e,f,g){return C.iyo(d,e,f,g)},
iyo(d,e,f,g){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$ajm=A.e(function(h,a0){if(h===1){s.push(a0)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bHq(),$async$ajm)
case 3:if(!a0){u=null
w=1
break}w=4
return A.b(A.SZ(),$async$ajm)
case 4:q=a0
w=!q?5:7
break
case 5:w=8
return A.b(A.Mi(),$async$ajm)
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
return A.b(C.ahS(n,d,p,o),$async$ajm)
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
return A.i($async$ajm,v)},
ahS(d,e,f,g){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahS=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:n=window.navigator.serviceWorker
if(n==null)throw A.Y(A.bb("no service worker"))
r=new C.fFt(e,g,f,d)
t=4
p=n.ready
p.toString
w=7
return A.b(A.ek(p,x.U).de(0,B.en),$async$ahS)
case 7:q=i
w=8
return A.b(r.$1(q),$async$ahS)
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
return A.b(A.ek(p,x.U).de(0,B.en),$async$ahS)
case 10:w=9
return A.b(l.$1(i),$async$ahS)
case 9:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahS,v)},
fFt:function fFt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
if0(d){var w
switch(d){case"calendar":w=B.aN
break
case"alarm":w=B.c7
break
case"call":w=B.bp
break
case"sms":w=B.aD
break
case"whatsapp":w=B.t7
break
case"email":w=B.fK
break
case"maps":w=B.js
break
default:w=B.aN
break}return w},
iiB(d){var w
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
ioV(d){var w
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
ims(d){var w
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
ih2(d,e,f){var w,v,u,t,s,r,q,p=null,o=d.a
A:{if("call"===o||"sms"===o||"whatsapp"===o){w=d.gua()
break A}w=d.gua()
break A}v=f?B.aw:B.aS
u=A.n(16)
t=A.K(e.j(0.28),B.r,1)
s=e.j(0.14)
r=A.n(12)
r=A.p(p,A.W(d.gaoI(0),e,p,p,p,22),B.f,p,p,new A.o(s,p,p,r,p,p,B.m),p,42,p,p,p,p,p,42)
s=o!=="call"
q=!s||o==="sms"?18:15
s=!s||o==="sms"?0.3:0
return A.p(p,A.A(A.a([r,B.bb,A.E(A.c(w,p,p,p,p,p,p,A.l(p,p,f?B.c:B.a_,p,p,p,p,p,p,p,p,q,p,p,B.P,p,1.25,!0,p,s,p,p,p,p,p,p),p,p,p),1)],x.p),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.m),p,p,p,p,B.jz,p,p,1/0)},
aTq(d,e){var w=0,v=A.j(x.y),u
var $async$aTq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bU(B.L,null,new C.h0J(A.Q(e).ax.a===B.I,C.if0(d.a),d),e,!0,!0,!0,null,!1,!1,x.y),$async$aTq)
case 3:u=g===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aTq,v)},
h0J:function h0J(d,e,f){this.a=d
this.b=e
this.c=f},
h0H:function h0H(d){this.a=d},
h0I:function h0I(d){this.a=d},
i60(d){var w,v,u,t,s=d.h(0,"phones"),r=A.a([],x.s)
if(x.j.b(s))for(w=J.aS(s);w.C();){v=B.a.i(J.k(w.gP(w)))
if(v.length!==0)r.push(v)}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"name")
u=B.a.i(J.k(u==null?"":u))
t=d.h(0,"source")
return new C.lr(w,u,r,J.k(t==null?"local":t))},
ats(d){var w=0,v=A.j(x.S),u,t,s,r,q,p,o,n
var $async$ats=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.I)
w=1
break}w=3
return A.b(A.aB(),$async$ats)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aW(J.t(q.a,"ngmy_phone_contacts_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.I)
w=1
break}try{s=B.V.aP(0,t,null)
if(!x.j.b(s)){p=A.a([],x.I)
u=p
w=1
break}p=J.cZ(s,x.f)
p=A.cF(p,new C.clP(),p.$ti.k("M.E"),x.B)
o=A.a5(p).k("X<M.E>")
p=A.B(new A.X(p,new C.clQ(),o),o.k("M.E"))
u=p
w=1
break}catch(m){r=A.ac(m)
$.am.$1("[contacts] load error: "+A.v(r))
p=A.a([],x.I)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$ats,v)},
b4v(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$b4v=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=3
return A.b(A.aB(),$async$b4v)
case 3:t=g
s=A.U(e).k("O<1,a9<m,@>>")
s=A.B(new A.O(e,new C.clS(),s),s.k("ak.E"))
r=B.V.au(s,null)
w=4
return A.b(t.aE("String","ngmy_phone_contacts_v1_"+B.a.i(d.toLowerCase()),r),$async$b4v)
case 4:case 1:return A.h(u,v)}})
return A.i($async$b4v,v)},
a9Q(d,e){var w=0,v=A.j(x.S),u,t
var $async$a9Q=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ats(d),$async$a9Q)
case 3:t=g
w=J.cv(t)&&e.length!==0?4:5
break
case 4:t=C.i63(t,e)
w=6
return A.b(C.b4v(d,t),$async$a9Q)
case 6:case 5:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a9Q,v)},
i63(d,e){var w,v,u,t,s,r,q,p,o,n=A.S(x.N,x.B)
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
B.d.b_(w,new C.clR())
return w},
i61(d,e){var w,v=A.ag("\\s+",!0,!1,!1,!1),u=B.a.i(A.aL(d.toLowerCase(),v," "))
v=A.ag("\\s+",!0,!1,!1,!1)
w=B.a.i(A.aL(e.b.toLowerCase(),v," "))
if(w===u)return 100
if(B.a.Y(w,u))return 80
if(B.d.aR(A.a(w.split(" "),x.s),new C.clO(u)))return 75
if(B.a.q(w,u))return 60
if(B.a.q(u,w))return 50
return 0},
hzu(d,e){var w,v,u,t,s=B.a.i(e)
if(s.length===0)return A.a([],x.I)
w=A.a([],x.P)
for(v=J.aS(d);v.C();){u=v.gP(v)
t=C.i61(s,u)
if(t>0)w.push(new A.bss(u,t))}B.d.b_(w,new C.clT())
v=x.E
v=A.B(new A.O(w,new C.clU(),v),v.k("ak.E"))
return v},
lr:function lr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clP:function clP(){},
clQ:function clQ(){},
clS:function clS(){},
clR:function clR(){},
clO:function clO(d){this.a=d},
clT:function clT(){},
clU:function clU(){},
clM(d){var w,v=d.h(0,"type"),u=B.a.i(J.k(v==null?"":v)).toLowerCase()
if(u.length===0)return null
v=x.N
w=A.S(v,v)
d.bP(0,new C.clN(w))
return new C.ka(u,w)},
hN4(d){var w,v,u,t,s,r=B.a.i(d),q=A.a([],x.t),p=new C.fZS(q),o=A.ag("\\[\\[NGMY_PHONE_ACTIONS\\]\\]\\s*([\\s\\S]*?)\\s*\\[\\[/NGMY_PHONE_ACTIONS\\]\\]",!0,!1,!0,!1),n=o.cI(d)
if(n!=null){r=B.a.i(B.a.eq(d,o,""))
w=n.b[1]
w.toString
p.$1(B.a.i(w))
return new A.afU(q,r)}v=A.ag("```(?:json)?\\s*(\\[[\\s\\S]*?\\])\\s*```",!0,!1,!0,!1)
u=v.cI(d)
if(u!=null&&B.a.q(d,'"type"')){r=B.a.i(B.a.eq(d,v,""))
w=u.b[1]
w.toString
p.$1(w)
if(q.length!==0)return new A.afU(q,r)}t=A.ag('(\\[\\s*\\{[\\s\\S]*?"type"\\s*:\\s*"(?:calendar|alarm|maps|call|sms|whatsapp|email|send_email|messenger|facebook|instagram|telegram|open_url|open_tool|app_lookup)"[\\s\\S]*?\\}\\s*\\])',!0,!1,!1,!1)
s=t.cI(d)
if(s!=null){r=B.a.i(B.a.eq(d,t,""))
w=s.b[1]
w.toString
p.$1(w)}return new A.afU(q,r)},
hGc(d){var w=B.o.F(A.d6(d),12)===0?12:B.o.F(A.d6(d),12),v=A.d6(d)>=12?"PM":"AM",u=B.a.b0(B.o.v(A.fG(d)),2,"0")
return B.iw[A.bM(d)-1]+" "+A.bW(d)+", "+w+":"+u+" "+v},
bEJ(d){var w,v
if(d==null||B.a.i(d).length===0)return null
try{w=A.nj(B.a.i(d)).bU()
return w}catch(v){return null}},
iiv(d,e,f,g,h){var w=new C.fxN(),v=x.N,u=A.J(["action","TEMPLATE","text",h,"dates",A.v(w.$1(g))+"/"+A.v(w.$1(d))],v,v)
if(f!=null&&B.a.i(f).length!==0)u.n(0,"details",B.a.i(f))
if(e!=null&&B.a.i(e).length!==0)u.n(0,"location",B.a.i(e))
return C.iel("https","calendar.google.com","/calendar/render",u).goQ()},
zi(d){var w=B.fu
return C.ijm(d)},
ijm(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$zi=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=B.fu
t=4
w=9
return A.b(A.q9(d),$async$zi)
case 9:w=f?7:8
break
case 7:w=10
return A.b(A.j1(d,o,null),$async$zi)
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
HM(d,e,f,g,h,i){var w=0,v=A.j(x.T),u,t
var $async$HM=A.e(function(j,k){if(j===1)return A.f(k,v)
for(;;)A:switch(w){case 0:t=d.a
w=(t==="calendar"||t==="call"||t==="sms"||t==="whatsapp"||t==="email"||t==="send_email"||t==="messenger"||t==="facebook"||t==="instagram"||t==="telegram")&&f!=null&&f.e!=null&&!h?3:4
break
case 3:w=5
return A.b(C.aTq(d,f),$async$HM)
case 5:if(!k){u="Cancelled."
w=1
break}case 4:switch(t){case"calendar":u=C.fGB(d)
w=1
break A
case"alarm":u=C.hmD(d,i)
w=1
break A
case"maps":u=C.fGG(d)
w=1
break A
case"call":u=C.fGC(d)
w=1
break A
case"sms":u=C.fGJ(d)
w=1
break A
case"whatsapp":u=C.fGL(d)
w=1
break A
case"email":u=C.fGD(d)
w=1
break A
case"send_email":u=C.aRE(d,e,g,i,"","")
w=1
break A
case"messenger":u=C.fGH(d)
w=1
break A
case"facebook":u=C.fGE(d)
w=1
break A
case"instagram":u=C.fGF(d)
w=1
break A
case"telegram":u=C.fGK(d)
w=1
break A
case"open_url":u=C.fGI(d)
w=1
break A
case"open_tool":u=C.hmE(d)
w=1
break A
default:u="Unknown action type: "+t
w=1
break A}case 1:return A.h(u,v)}})
return A.i($async$HM,v)},
fGB(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$fGB=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:j=d.b
i=J.a2(j)
h=i.h(j,"title")
g=B.a.i(h==null?"NGMY Event":h)
f=C.bEJ(i.h(j,"start"))
if(f==null){u="Could not read the event date."
w=1
break}l=C.bEJ(i.h(j,"end"))
r=l==null?f.bM(36e8):l
q=i.h(j,"notes")
p=i.h(j,"location")
t=4
o=C.hLH(!1,15,r,p,q,f,g)
j=A.ag("[^\\w]+",!0,!1,!1,!1)
w=7
return A.b(C.fVw(o,A.aL(g,j,"_")+".ics",g),$async$fGB)
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
case 6:u=C.hpb(C.iiv(r,p,q,f,g))
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fGB,v)},
hmD(d,e){var w=0,v=A.j(x.T),u,t,s,r,q,p
var $async$hmD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=d.b
s=J.a2(t)
r=s.h(t,"title")
q=B.a.i(r==null?"Wake up":r)
p=C.bEJ(s.h(t,"start"))
if(p==null){u="Could not read the alarm time."
w=1
break}if(B.a.i(e).length===0){u="Sign in to save wake alarms to your NGMY account on this device."
w=1
break}u=C.aTp(s.h(t,"notes"),q,e,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hmD,v)},
fGG(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=d.b
o=J.a2(p)
n=o.h(p,"query")
p=n==null?o.h(p,"address"):n
t=B.a.i(p==null?"":p)
if(t.length===0){u="No address or place was provided."
w=1
break}s=A.hP(2,t,B.cb,!1)
r=[A.cG("https://maps.apple.com/?q="+s,0,null),A.cG("geo:0,0?q="+s,0,null),A.cG("https://www.google.com/maps/search/?api=1&query="+s,0,null)]
q=0
case 3:if(!(q<3)){w=5
break}w=6
return A.b(C.zi(r[q]),$async$fGG)
case 6:if(f){u='Opening Maps for "'+t+'".'
w=1
break}case 4:++q
w=3
break
case 5:u="Could not open Maps."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGG,v)},
fGC(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=d.b
o=J.a2(p)
n=o.h(p,"phone")
if(n==null)n=""
t=A.ag("[^\\d+]+",!0,!1,!1,!1)
s=A.aL(n,t,"")
if(s.length===0){u=y.p
w=1
break}w=3
return A.b(C.zi(A.cG("tel:"+s,0,null)),$async$fGC)
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
return A.i($async$fGC,v)},
fGJ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGJ=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.zi(s.length===0?A.cG(p,0,null):A.cG(p+"?body="+A.hP(2,s,B.cb,!1),0,null)),$async$fGJ)
case 3:if(f)p=r.length!==0?"Opening Messages to "+r+"\u2026":"Opening Messages\u2026"
else p="Could not open Messages."
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGJ,v)},
fGL(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k
var $async$fGL=A.e(function(e,f){if(e===1)return A.f(f,v)
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
q=k?"?text="+A.hP(2,r,B.cb,!1):""
t=A.cG("https://wa.me/"+s+q,0,null)
k=k?"&text="+A.hP(2,r,B.cb,!1):""
p=[t,A.cG("whatsapp://send?phone="+s+k,0,null)]
o=0
case 3:if(!(o<2)){w=5
break}w=6
return A.b(C.zi(p[o]),$async$fGL)
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
return A.i($async$fGL,v)},
fGD(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGD=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.zi(A.zc(null,null,n,null,null,null,t.a===0?null:t,"mailto",null)),$async$fGD)
case 3:u=f?"Opening Mail\u2026":"Could not open Mail."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGD,v)},
aRE(d,e,f,g,h,a0){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aRE=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
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
return A.b(C.cmD(e),$async$aRE)
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
return A.b(C.cmE(e),$async$aRE)
case 11:case 9:w=7
return A.b(k.cmF(j,i,a2,g,p,q),$async$aRE)
case 7:l=a2
if(!l.c){t=l.a
u=t==null?"Email could not be sent.":t
w=1
break}l.b
u="Email sent to "+q+"."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aRE,v)},
fGH(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"url")
n=B.a.i(o==null?"":o)
o=p.h(q,"username")
q=o==null?p.h(q,"page"):o
t=B.a.i(B.a.eq(B.a.i(q==null?"":q),A.ag("^@+",!0,!1,!1,!1),""))
s=A.a([],x.A)
if(n.length!==0)s.push(A.cG(B.a.Y(n,"http")?n:"https://"+n,0,null))
if(t.length!==0){s.push(A.cG("fb-messenger://user-thread/"+t,0,null))
s.push(A.cG("https://m.me/"+t,0,null))}s.push(A.cG("https://www.messenger.com/",0,null))
q=s.length,r=0
case 3:if(!(r<s.length)){w=5
break}w=6
return A.b(C.zi(s[r]),$async$fGH)
case 6:if(f){u="Opening Messenger\u2026"
w=1
break}case 4:s.length===q||(0,A.I)(s),++r
w=3
break
case 5:u="Could not open Messenger."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGH,v)},
fGE(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"url")
n=B.a.i(o==null?"":o)
o=p.h(q,"username")
q=o==null?p.h(q,"page"):o
t=B.a.i(B.a.eq(B.a.i(q==null?"":q),A.ag("^@+",!0,!1,!1,!1),""))
s=A.a([],x.A)
if(n.length!==0)s.push(A.cG(B.a.Y(n,"http")?n:"https://"+n,0,null))
if(t.length!==0){s.push(A.cG("fb://profile/"+t,0,null))
s.push(A.cG("https://www.facebook.com/"+t,0,null))}s.push(A.cG("fb://feed",0,null))
s.push(A.cG("https://www.facebook.com/",0,null))
q=s.length,r=0
case 3:if(!(r<s.length)){w=5
break}w=6
return A.b(C.zi(s[r]),$async$fGE)
case 6:if(f){u="Opening Facebook\u2026"
w=1
break}case 4:s.length===q||(0,A.I)(s),++r
w=3
break
case 5:u="Could not open Facebook."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGE,v)},
fGF(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"url")
n=B.a.i(o==null?"":o)
q=p.h(q,"username")
t=B.a.i(B.a.eq(B.a.i(q==null?"":q),A.ag("^@+",!0,!1,!1,!1),""))
s=A.a([],x.A)
if(n.length!==0)s.push(A.cG(B.a.Y(n,"http")?n:"https://"+n,0,null))
if(t.length!==0){s.push(A.cG("instagram://user?username="+t,0,null))
s.push(A.cG("https://www.instagram.com/"+t+"/",0,null))}s.push(A.cG("https://www.instagram.com/",0,null))
q=s.length,r=0
case 3:if(!(r<s.length)){w=5
break}w=6
return A.b(C.zi(s[r]),$async$fGF)
case 6:if(f){u="Opening Instagram\u2026"
w=1
break}case 4:s.length===q||(0,A.I)(s),++r
w=3
break
case 5:u="Could not open Instagram."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGF,v)},
fGK(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$fGK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=d.b
p=J.a2(q)
o=p.h(q,"url")
n=B.a.i(o==null?"":o)
q=p.h(q,"username")
t=B.a.i(B.a.eq(B.a.i(q==null?"":q),A.ag("^@+",!0,!1,!1,!1),""))
s=A.a([],x.A)
if(n.length!==0)s.push(A.cG(B.a.Y(n,"http")?n:"https://"+n,0,null))
if(t.length!==0){s.push(A.cG("tg://resolve?domain="+t,0,null))
s.push(A.cG("https://t.me/"+t,0,null))}s.push(A.cG("https://web.telegram.org/",0,null))
q=s.length,r=0
case 3:if(!(r<s.length)){w=5
break}w=6
return A.b(C.zi(s[r]),$async$fGK)
case 6:if(f){u="Opening Telegram\u2026"
w=1
break}case 4:s.length===q||(0,A.I)(s),++r
w=3
break
case 5:u="Could not open Telegram."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGK,v)},
fGI(d){var w=0,v=A.j(x.T),u,t,s
var $async$fGI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J.t(d.b,"url")
s=B.a.i(t==null?"":t)
if(s.length===0){u="No link provided."
w=1
break}w=3
return A.b(C.zi(A.cG(!B.a.Y(s,"http://")&&!B.a.Y(s,"https://")?"https://"+s:s,0,null)),$async$fGI)
case 3:u=f?"Opening link\u2026":"Could not open that link."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGI,v)},
hmE(d){var w=0,v=A.j(x.T),u,t,s,r,q,p
var $async$hmE=A.e(function(e,f){if(e===1)return A.f(f,v)
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
u=C.hg0(t,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hmE,v)},
hN9(d,e,f){var w,v,u,t,s,r,q,p=null
if(d.length===0)return B.bL
w=A.a([],x.p)
for(v=d.length,u=0;u<d.length;d.length===v||(0,A.I)(d),++u){t=d[u]
s=A.W(t.gaoI(0),B.aN,p,p,p,16)
r=A.c(t.gua(),p,p,p,p,p,p,B.acY,p,p,p)
q=e?D.a0f:D.btm
w.push(A.mR(s,q,r,p,new C.h_d(f,t),p,p,new A.ax(B.aN.j(0.45),1,B.r,-1),p))}return new A.D(F.a2i,A.bZ(B.bI,w,B.br,p,6,6),p)},
ka:function ka(d,e){this.a=d
this.b=e},
clN:function clN(d){this.a=d},
fZS:function fZS(d){this.a=d},
fxN:function fxN(){},
fxO:function fxO(){},
h_d:function h_d(d,e){this.a=d
this.b=e},
b5J(){var w=0,v=A.j(x.H),u
var $async$b5J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.h2F(),$async$b5J)
case 3:w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b5J,v)},
i7f(d){var w=d==null?"":d,v=w.toLowerCase()
if(B.a.q(v,"not-allowed")||B.a.q(v,"permission"))return"Microphone blocked. On iPhone: Settings \u2192 Safari \u2192 Microphone \u2192 Allow, or tap \u201caA\u201d in the address bar \u2192 Website Settings \u2192 Microphone \u2192 Allow, then reload NGMY."
if(B.a.q(v,"not-supported")||B.a.q(v,"speech_not_supported"))return"Voice input needs a browser with speech recognition. On iPhone, use Safari and allow microphone for this site."
if(B.a.q(v,"network"))return"Voice needs internet. Check your connection and try again."
if(B.a.q(v,"no-speech")||B.a.q(v,"no_match"))return"No speech heard. Tap the mic and speak clearly."
if(B.a.q(v,"aborted"))return"Voice input stopped."
return"Could not start voice. Allow microphone for NGMY in browser settings, reload, and try again."},
K_:function K_(d,e,f){this.c=d
this.d=e
this.a=f},
aHH:function aHH(){var _=this
_.d=!1
_.e=""
_.c=_.a=null},
f_u:function f_u(d){this.a=d},
f_v:function f_v(d){this.a=d},
f_t:function f_t(){},
f_w:function f_w(d,e){this.a=d
this.b=e},
iel(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=e.length,l="",k=n
if(m!==0){v=0
for(;;){if(!(v<m)){w=0
break}if(e.charCodeAt(v)===64){l=B.a.aw(e,0,v)
w=v+1
break}++v}if(w<m&&e.charCodeAt(w)===91){for(u=w,t=-1;u<m;++u){s=e.charCodeAt(u)
if(s===37&&t<0){r=B.a.j0(e,"25",u+1)?u+2:u
t=u
u=r}else if(s===93)break}if(u===m)throw A.Y(A.fP("Invalid IPv6 host entry.",e,w))
q=t<0?u:t
A.hCv(e,w+1,q);++u
if(u!==m&&e.charCodeAt(u)!==58)throw A.Y(A.fP("Invalid end of authority",e,u))}else u=w
for(;u<m;++u)if(e.charCodeAt(u)===58){p=B.a.aY(e,u+1)
k=p.length!==0?A.jd(p,n,n):n
break}o=B.a.aw(e,w,u)}else o=n
return A.zc(n,o,n,A.a(f.split("/"),x.s),k,n,g,d,l)},
i0g(){var w,v=$.hg_,u=v==null?null:v.$0()
if(u!=null&&u.e!=null)return u
v=$.hwk
w=v==null?null:v.$0()
if(w!=null&&w.e!=null)return w
return null},
hg0(d,e){var w=0,v=A.j(x.T),u,t,s,r,q,p
var $async$hg0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=C.i0g()
if(p==null){u="Open NGMY on your phone first, then ask the AI again."
w=1
break}t=B.a.i(d).toLowerCase()
s=$.O7.h(0,t)
if(s!=null){u=s.c.$2(p,e)
w=1
break}r=$.VS.h(0,t)
if(r==null){q=A.d_(new A.cq($.VS,A.a5($.VS).k("cq<1>")),x.N)
q.u(0,new A.cq($.O7,A.a5($.O7).k("cq<1>")))
q=A.B(q,A.a5(q).k("ci.E"))
B.d.fc(q)
u='Unknown place "'+d+'". Try: '+B.d.aL(q,", ")+"."
w=1
break}u=r.$1(p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hg0,v)},
aqb(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aqb=A.e(function(f,g){if(f===1)return A.f(g,v)
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
return A.b(A.aqa(h,r),$async$aqb)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aqb,v)},
aTp(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r,q,p,o
var $async$aTp=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:o=g.bU()
if(o.cW(new A.V(Date.now(),0,!1).bM(2e7))){u="That time already passed \u2014 pick a future time for your alarm."
w=1
break}t="alarm_"+1000*Date.now()
s=B.a.i(e)
if(s.length===0)s="Wake up"
w=3
return A.b(C.asx(f,new A.p4(t,s,o,d)),$async$aTp)
case 3:w=4
return A.b(C.ajm(t,d,s,o),$async$aTp)
case 4:r=i
if(r!=null){q=B.o.F(A.d6(o),12)===0?12:B.o.F(A.d6(o),12)
p=A.d6(o)>=12?"PM":"AM"
u="Phone alarm set for "+r+". Your iPhone will ring on the lock screen \u2014 you can close NGMY. Tip: also add "+(""+q+":"+B.a.b0(B.o.v(A.fG(o)),2,"0")+" "+p)+" in Clock \u2192 Alarm for a backup buzz."
w=1
break}w=5
return A.b(C.fXN(!0,d,s,o),$async$aTp)
case 5:u=i
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aTp,v)},
fXN(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r,q,p,o,n,m,l
var $async$fXN=A.e(function(h,i){if(h===1)return A.f(i,v)
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
return A.b(C.fVw(C.hLH(!0,0,m.bM(6e7),null,e,m,l),"ngmy-wake-alarm.ics",l),$async$fXN)
case 3:n=i
u="Phone alert set for "+(""+A.bM(m)+"/"+A.bW(m)+" at "+t+":"+r+" "+s)+". Tap Allow on the iPhone prompt \u2014 your phone will ring at that time even with NGMY closed. "+n+" Also add "+(""+q+":"+o+" "+p)+" in Clock \u2192 Alarm as a backup."
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fXN,v)},
iya(d,e){var w,v,u,t,s,r,q,p="username",o="fullName",n=B.a.i(e).toLowerCase()
if(n.length===0)return null
for(w=d.length,v=0;u=d.length,v<u;d.length===w||(0,A.I)(d),++v){t=d[v]
u=J.a2(t)
s=u.h(t,"email")
r=B.a.i(J.k(s==null?"":s))
if(!A.cW(r,"@",0))continue
s=u.h(t,p)
s=B.a.i(J.k(s==null?"":s))
u=u.h(t,o)
u=B.a.i(J.k(u==null?"":u))
if(s.toLowerCase()===n||u.toLowerCase()===n||r.toLowerCase()===n)return r}for(v=0;v<d.length;d.length===u||(0,A.I)(d),++v){t=d[v]
w=J.a2(t)
s=w.h(t,"email")
r=B.a.i(J.k(s==null?"":s))
if(!A.cW(r,"@",0))continue
s=w.h(t,p)
s=B.a.i(J.k(s==null?"":s))
w=w.h(t,o)
w=B.a.i(J.k(w==null?"":w))
q=!0
if(!A.cW(s.toLowerCase(),n,0))if(!A.cW(w.toLowerCase(),n,0))w=A.cW(r.toLowerCase(),n,0)
else w=q
else w=q
if(w)return r}return null},
ho6(d){var w=0,v=A.j(x.h),u
var $async$ho6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d.length===0){u=null
w=1
break}u=B.d.gH(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ho6,v)},
bDG(d,e,f){var w=0,v=A.j(x.S),u
var $async$bDG=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(C.a9Q(d,f),$async$bDG)
case 3:u=C.ats(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDG,v)},
ajl(d,e,a0,a1){var w=0,v=A.j(x.x),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ajl=A.e(function(a2,a3){if(a2===1)return A.f(a3,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bDG(a1,!0,a0),$async$ajl)
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
l=C.iya(a0,m)
if(l!=null){k=A.a1(p,s,s)
k.n(0,"to",l)
if(m.length!==0)k.n(0,"contactName",m)
f.push(new C.ka(q,k))
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
break}i=C.hzu(g,m)
w=i.length===0?6:7
break
case 6:w=8
return A.b(C.bDG(a1,!0,a0),$async$ajl)
case 8:g=a3
i=C.hzu(g,m)
case 7:w=9
return A.b(C.ho6(i),$async$ajl)
case 9:h=a3
if(h!=null){k=A.a1(p,s,s)
r=h.c
k.n(0,"phone",r.length!==0?B.d.gH(r):"")
k.n(0,"contactName",h.b)
f.push(new C.ka(q,k))}else f.push(r)
w=4
break
case 5:u=f
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ajl,v)},
hMv(d){var w,v,u=B.a.i(d).toLowerCase()
if(u.length===0)return D.j5
w=A.ag("\\b(open|launch|start|show|take me to|go to)\\b",!0,!1,!1,!1)
if(!w.b.test(u))return D.j5
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
if(w.b.test(u))return D.j5
v=null}}}}}}}}}if(v==null)return D.j5
w=x.N
return A.a([new C.ka("open_tool",A.J(["tool",v],w,w))],x.t)},
cmD(d){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m
var $async$cmD=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d!=null){q=d.y
q=B.a.i(q)
p=A.ag("[\\r\\n\\t]",!0,!1,!1,!1)
o=A.aL(q,p,"")}else o=""
if(o.length!==0){u=o
w=1
break}t=4
w=7
return A.b(A.aB(),$async$cmD)
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
return A.i($async$cmD,v)},
cmE(d){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cmE=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d!=null){p=B.a.i(d.z)
o=p}else o=""
if(o.length!==0){u=o
w=1
break}t=4
w=7
return A.b(A.aB(),$async$cmE)
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
return A.i($async$cmE,v)},
cmF(d,e,f,g,h,i){var w=0,v=A.j(x.F),u,t,s,r,q,p,o
var $async$cmF=A.e(function(j,k){if(j===1)return A.f(k,v)
for(;;)switch(w){case 0:r=B.a.i(d)
q=A.ag("[\\r\\n\\t]",!0,!1,!1,!1)
p=A.aL(r,q,"")
o=B.a.i(i)
r=B.a.i(e)
t=r.length===0?"<p></p>":C.i6g(r)
if(p.length===0){u=new A.z7("Email is not available right now. Please try again later.",null,!1)
w=1
break}if(o.length===0||!B.a.q(o,"@")){u=new A.z7("No valid recipient email was provided.",null,!1)
w=1
break}r=B.a.i(f)
if(r.length===0)r="NGMY <noreply@ngmy.org>"
q=B.a.i(h)
w=3
return A.b(C.cmC(p,r,t,g,q.length===0?"Message from NGMY":q,o),$async$cmF)
case 3:s=k
if(s.c){u=s
w=1
break}u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cmF,v)},
i6g(d){var w
if(B.a.q(d,"<")&&B.a.q(d,">"))return d
w=D.bdu.aK(d)
return"<p>"+A.aL(w,"\n","<br/>")+"</p>"},
cmC(d,e,f,g,h,i){var w=0,v=A.j(x.F),u,t=2,s=[],r,q,p,o,n,m
var $async$cmC=A.e(function(j,k){if(j===1){s.push(k)
w=t}for(;;)switch(w){case 0:n=A.J(["action","resendEmail","apiKey",d,"from",e,"to",i,"subject",h,"html",f,"requesterEmail",g],x.N,x.z)
t=4
w=7
return A.b(A.h1(n,!1,!1,!1,!1,D.bDV),$async$cmC)
case 7:r=k
if(r!=null){p=J.z(J.t(r,"ok"),!0)?200:400
p=C.i6h(p,r)
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
p=C.hhz(J.k(q))
u=new A.z7(p,null,!1)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$cmC,v)},
i6h(d,e){var w,v,u=null
if(d===200){w=J.a2(e)
if(J.z(w.h(e,"ok"),!0)){w=w.h(e,"id")
return new A.z7(u,w==null?u:J.k(w),!0)}w=w.h(e,"error")
v=w==null?u:J.k(w)
if(v!=null&&v.length!==0)return new A.z7(C.hhz(v),u,!1)}if(d===403)return new A.z7(y.c,u,!1)
if(d===404)return new A.z7("Email proxy not deployed yet. Admin: redeploy Supabase function bright-handler.",u,!1)
w=J.t(e,"error")
v=w==null?u:J.k(w)
if(v!=null&&v.length!==0)return new A.z7(C.hhz(v),u,!1)
return new A.z7("Email proxy HTTP "+d,u,!1)},
hhz(d){var w,v=B.a.i(d)
if(v.length===0)return null
w=d.toLowerCase()
if(B.a.q(w,"domain")&&B.a.q(w,"verify"))return"Resend needs your sending domain verified. Set a verified From address in NGMY AI settings."
if(B.a.q(w,"invalid")&&B.a.q(w,"key"))return"Resend rejected this API key. Copy it again from resend.com \u2192 API Keys, then Save AI Settings."
if(d.length>180)return B.a.aw(d,0,177)+"\u2026"
return d}},D,F,G
J=c[1]
A=c[0]
B=c[2]
E=c[284]
C=a.updateHolder(c[38],C)
D=c[123]
F=c[166]
G=c[254]
C.bYZ.prototype={
v(d){return"unknown"}}
C.aYS.prototype={
aK(d){var w=this.aTS(d,0,d.length)
return w==null?d:w},
aTS(d,e,f){var w,v,u,t
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
default:u=null}if(u!=null){if(v==null)v=new A.fj("")
if(w>e)v.a+=B.a.aw(d,e,w)
v.a+=u
e=w+1}}if(v==null)return null
if(f>e){t=B.a.aw(d,e,f)
v.a+=t}t=v.a
return t.charCodeAt(0)==0?t:t},
mM(d){return new C.bjP(this,x.e.b(d)?d:new A.RD(d))}}
C.bjP.prototype={
jN(d,e,f,g){var w=this.a.aTS(d,e,f),v=this.b
if(w==null)v.jN(d,e,f,g)
else{v.I(0,w)
if(g)v.bI(0)}},
bI(d){this.b.bI(0)}}
C.lr.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"phones",w.c,"source",w.d],x.N,x.z)}}
C.ka.prototype={
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
gaoI(d){var w
switch(this.a){case"calendar":w=B.Ad
break
case"alarm":w=G.a3S
break
case"maps":w=B.ly
break
case"call":w=B.j2
break
case"sms":w=B.A6
break
case"whatsapp":w=B.vh
break
case"email":w=B.Dx
break
case"send_email":w=D.bVb
break
case"messenger":w=B.xd
break
case"facebook":w=B.arA
break
case"instagram":w=B.If
break
case"telegram":w=B.m3
break
case"open_url":w=B.tE
break
case"open_tool":w=B.zP
break
default:w=D.bVx
break}return w},
gua(){var w,v,u,t,s,r,q,p=this,o=p.a
switch(o){case"calendar":o=p.b
w=J.a2(o)
v=w.h(o,"title")
if(v==null)v="Event"
u=C.bEJ(w.h(o,"start"))
if(u!=null)return v+" \xb7 "+C.hGc(u)
return v
case"alarm":o=p.b
w=J.a2(o)
v=w.h(o,"title")
if(v==null)v="Wake up"
u=C.bEJ(w.h(o,"start"))
if(u!=null)return v+" \xb7 "+C.hGc(u)
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
C.K_.prototype={
S(){return new C.aHH()}}
C.aHH.prototype={
a0U(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.d?3:4
break
case 3:w=5
return A.b(C.b5J(),$async$a0U)
case 5:if(t.c!=null)t.l(new C.f_u(t))
w=1
break
case 4:t.e=B.a.i(t.a.c.a.a)
w=6
return A.b(A.auS(new C.f_v(t)),$async$a0U)
case 6:s=e
if(t.c!=null)t.l(new C.f_w(t,s))
if(!s&&t.c!=null){r=t.c.K(x.q).f
q=$.b5I
r.T(A.b2(null,null,null,null,null,B.t,null,A.c(C.i7f(q==null?$.RW:q),null,null,null,null,null,null,null,null,null,null),null,B.ke,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(u,v)}})
return A.i($async$a0U,v)},
t(){if(this.d)C.b5J()
this.a2()},
B(d){var w,v,u,t=null,s=this.a.d
if(s==null)s=A.Q(d).ax.b
w=this.d
v=w?"Stop recording":"Voice input"
u=w?B.asq:B.oV
return A.aI(t,t,t,t,A.W(u,w?B.dT:s,t,t,t,t),t,t,t,this.gcgX(),t,t,t,t,v,t)}}
var z=a.updateTypes(["lr(a9<@,@>)","P(lr)","a9<m,@>(lr)","F(lr,lr)","F(+c,s(lr,F),+c,s(lr,F))","lr(+c,s(lr,F))","ay<~>()"])
C.fD8.prototype={
$0(){var w
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(w){}},
$S:12}
C.fyj.prototype={
$1(d){return B.a.b0(B.o.v(d),2,"0")},
$S:76}
C.fyk.prototype={
$1(d){return B.a.b0(B.o.v(d),2,"0")},
$S:76}
C.cie.prototype={
$1(d){return d.a===this.a.a},
$S:1666}
C.cif.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:563}
C.cig.prototype={
$1(d){return d.ak()},
$S:1667}
C.fFt.prototype={
bpU(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=d.active
s=t==null?d.installing:t
if(s==null)s=d.waiting
if(s!=null){t=x.N
B.fq2.d1Q(s,A.J(["type","SCHEDULE_ALARM","id",u.a,"at",u.b.ab().ag(),"title",u.c,"body",u.d],t,t))}return A.h(null,v)}})
return A.i($async$$1,v)},
$1(d){return this.bpU(d)},
$S:1668}
C.h0J.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=A.aF(d,B.f_,x.w).w,m=this.a,l=m?D.a0f:B.c,k=A.n(24),j=x.V,i=A.a([new A.aa(0,B.H,B.v.j(0.18),B.eT,28)],j),h=m?B.aT:B.bn
h=A.p(o,o,B.f,o,o,new A.o(h,o,o,A.n(99),o,o,B.m),o,4,o,o,o,o,o,40)
w=this.b
v=x.O
u=A.a([w,w.j(0.72)],v)
t=A.n(20)
s=A.a([new A.aa(0,B.H,w.j(0.35),B.cy,16)],j)
r=this.c
u=A.p(o,A.W(r.gaoI(0),B.c,o,o,o,30),B.f,o,o,new A.o(o,o,o,t,s,new A.a7(B.ay,B.aC,B.x,u,o,o),B.m),o,64,o,o,o,o,o,64)
s=C.iiB(r)
t=A.c(s,o,o,o,o,o,o,A.l(o,o,m?B.c:B.a_,o,o,o,o,o,o,o,o,20,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),B.K,o,o)
s=C.ioV(r)
s=A.c(s,o,o,o,o,o,o,A.l(o,o,m?B.aR:B.an,o,o,o,o,o,o,o,o,13,o,o,o,o,1.4,!0,o,o,o,o,o,o,o,o),B.K,o,o)
q=C.ih2(r,w,m)
v=A.a([w,w.j(0.85)],v)
p=A.n(14)
j=A.a([new A.aa(0,B.H,w.j(0.32),B.cO,12)],j)
w=x.p
r=A.aG(!1,B.a3,!0,o,A.aM(!1,A.n(14),!0,new A.D(B.zf,A.A(A.a([A.W(r.gaoI(0),B.c,o,o,o,20),B.aa,A.c(C.ims(r),o,o,o,o,o,o,B.nt,o,o,o)],w),B.l,o,B.b9,B.h,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.h0H(d),o,o,o,o,o,o,o),B.f,B.L,0,o,o,o,o,o,B.ai)
return new A.D(new A.R(0,0,0,n.f.d),A.p(o,A.bo(!0,new A.D(D.bJa,A.x(A.a([h,B.bx,u,B.aO,t,B.O,s,B.bx,q,B.dc,new A.a6(1/0,o,new A.bP(new A.o(o,o,o,p,j,new A.a7(B.a5,B.a9,B.x,v,o,o),B.m),B.bm,r,o),o),B.al,A.bN(!1,A.c("Not now",o,o,o,o,o,o,A.l(o,o,m?B.aF:B.bP,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,o,o,new C.h0I(d),o,o)],w),B.l,o,B.e,B.M,0,B.p),o),!0,!1,B.ag,!0,!1),B.f,o,o,new A.o(l,o,o,k,i,o,B.m),o,o,o,E.tp,o,o,o,o),o)},
$S:62}
C.h0H.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.h0I.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.clP.prototype={
$1(d){return C.i60(A.a1(d,x.N,x.z))},
$S:z+0}
C.clQ.prototype={
$1(d){return d.b.length!==0&&d.c.length!==0},
$S:z+1}
C.clS.prototype={
$1(d){return d.ak()},
$S:z+2}
C.clR.prototype={
$2(d,e){return B.a.aQ(d.b.toLowerCase(),e.b.toLowerCase())},
$S:z+3}
C.clO.prototype={
$1(d){return d===this.a},
$S:3}
C.clT.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:z+4}
C.clU.prototype={
$1(d){return d.a},
$S:z+5}
C.clN.prototype={
$2(d,e){if(d==="type"||e==null)return
this.a.n(0,d,J.k(e))},
$S:93}
C.fZS.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m
try{w=B.V.aP(0,d,null)
if(x.j.b(w))for(r=J.aS(w),q=x.f,p=x.N,o=x.z,n=this.a;r.C();){v=r.gP(r)
if(q.b(v)){u=C.clM(A.a1(v,p,o))
if(u!=null)n.push(u)}}else if(x.f.b(w)){t=C.clM(A.a1(w,x.N,x.z))
if(t!=null)this.a.push(t)}}catch(m){s=A.ac(m)
$.am.$1("[phone] action parse error: "+A.v(s))}},
$S:2}
C.fxN.prototype={
$1(d){var w=d.ab(),v=new C.fxO()
return""+A.bD(w)+A.v(v.$1(A.bM(w)))+A.v(v.$1(A.bW(w)))+"T"+A.v(v.$1(A.d6(w)))+A.v(v.$1(A.fG(w)))+A.v(v.$1(A.G4(w)))+"Z"},
$S:364}
C.fxO.prototype={
$1(d){return B.a.b0(B.o.v(d),2,"0")},
$S:76}
C.h_d.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f_u.prototype={
$0(){return this.a.d=!1},
$S:0}
C.f_v.prototype={
$2$isFinal(d,e){var w,v,u,t=this.a
if(t.c==null)return
w=B.a.i(d)
if(w.length===0)return
v=t.a.c
u=t.e
v.sb1(0,u.length===0?w:u+" "+w)
v=t.a.c
v.su1(A.hv(B.bD,v.a.a.length))
if(t.c!=null)t.l(new C.f_t())},
$1(d){return this.$2$isFinal(d,!1)},
$S:551}
C.f_t.prototype={
$0(){},
$S:0}
C.f_w.prototype={
$0(){return this.a.d=this.b},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.aHH.prototype,"gcgX","a0U",6)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.aE,[C.bYZ,C.lr,C.ka])
v(C.aYS,A.fT)
v(C.bjP,A.x2)
w(A.hR,[C.fD8,C.h0H,C.h0I,C.h_d,C.f_u,C.f_t,C.f_w])
w(A.fO,[C.fyj,C.fyk,C.cie,C.cig,C.fFt,C.h0J,C.clP,C.clQ,C.clS,C.clO,C.clU,C.fZS,C.fxN,C.fxO,C.f_v])
w(A.ie,[C.cif,C.clR,C.clT,C.clN])
v(C.K_,A.af)
v(C.aHH,A.ah)})()
A.i0(b.typeUniverse,JSON.parse('{"aYS":{"fT":["m","m"],"fT.S":"m","fT.T":"m"},"bjP":{"x2":[]},"K_":{"af":[],"w":[]},"aHH":{"ah":["K_"]}}'))
var y={k:"Allow the ngmy.org calendar invite on the next prompt.",p:"Could not find a phone number for that name.",d:"Could not find a phone number or email for that contact.",c:"Only NGMY admins can send direct emails from the AI."}
var x=(function rtii(){var w=A.ar
return{V:w("N<aa>"),O:w("N<u>"),X:w("N<a9<m,@>>"),t:w("N<ka>"),I:w("N<lr>"),P:w("N<+c,s(lr,F)>"),s:w("N<m>"),A:w("N<Gz>"),p:w("N<w>"),x:w("ai<ka>"),S:w("ai<lr>"),j:w("ai<@>"),f:w("a9<@,@>"),E:w("O<+c,s(lr,F),lr>"),w:w("hW"),B:w("lr"),F:w("+error,messageId,ok(m?,m?,P)"),U:w("Q7"),N:w("m"),e:w("x2"),q:w("kx"),y:w("P"),z:w("@"),h:w("lr?"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.hX2=new C.bYZ()
D.bdu=new C.aYS()
D.btm=new A.u(1,0.9098039215686274,0.9725490196078431,0.9372549019607843,B.q)
D.a0f=new A.u(1,0.10980392156862745,0.1411764705882353,0.2,B.q)
D.bDV=new A.bg(35e6)
D.bJa=new A.R(22,10,22,20)
D.arw=new A.a_(63202,"MaterialIcons",!1)
D.bVb=new A.a_(63655,"MaterialIcons",!1)
D.bVx=new A.a_(983176,"MaterialIcons",!1)
D.j5=w([],x.t)
D.aFg=w([B.bs,B.aM],x.O)
D.aZe=new A.C("Restore QR",null,B.cG,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["cLxh+y85TCh9fa0c5SpTH8OPv4M="]=a.current})($__dart_deferred_initializers__);