((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A5,A1,A6,A2,S,O,V,A7,A8,A9,Aa,Ab,A3,N,Ac,Ad,Ae,Af,W,T,Ag,P,Ah,X,Y,Ai,E,I,G,K,Aj,Ak,Al,Am,Q,An,R,Ao,C={
bCy(d){return C.i9i(d)},
i9i(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bCy=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rk(B.np(""),d,A.i1,null,null).dg(0,A.a0x),$async$bCy)
case 7:r=f
q=r.b
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bCy,v)},
ila(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Sr[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cR(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fb(D.Sr,new C.fLP())
if(w==null)w=A.d.gH(D.Sr)
s=B.T(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.qI().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.alq(w.a,w.b,m,w,s,!1)},
ieS(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.SQ,new C.fAv(),x.bd).aM(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
isX(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cn(b2,"{")
v=A.a.pd(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.W.aP(0,A.a.aA(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aT(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gP(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qI().am(0,p)||J.eK(s,o)||J.ad(t)>=8)continue
J.c5(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dAE[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.j.D(typeof J.t(q,"x")=="number"?B.dF(J.t(q,"x")):0.2+A.j.F(r,3)*0.3,0.16,0.84)
j=A.j.D(typeof J.t(q,"y")=="number"?B.dF(J.t(q,"y")):0.25+A.j.ar(r,3)*0.3,0.1,0.9)
J.c5(t,new B.dX([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aT(a6.a(J.t(u,"wires")));a5.C();){h=a5.gP(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.D(A.j.M(B.dF(J.t(g,1))),0,1)
a0=A.o.D(A.j.M(B.dF(J.t(g,3))),0,1)
if(J.eK(s,f)&&J.eK(s,e)&&!J.z(f,e))J.c5(i,new B.ca([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aT(a0==null?A.ct:a0)
while(a0.C()){a2=a0.gP(a0)
J.c5(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.mZ(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.alq(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ijE(d){var w,v,u=C.hnh()
d.B(u)
for(w=0;w<60;++w)u.vO(0,0.03333333333333333)
v=u.a
return A.d.aU(v,new C.fIc(u))&&!A.d.cD(v,new C.fId())},
ijD(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qI().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.j.V(t.r)+" ohms")
if(A.d.q(D.dyN,p))q.push("level "+A.j.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.j.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aM(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.j.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aM(s,"\n")+"\nWires: "+A.d.aM(l,"; ")},
i7P(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aM(v,"\n")+"\n\n"}v=A.d.aM(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
il9(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qI().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.SQ[u]
if(A.d.aU(w,new C.fLM(s)))if(!B.cR(r,s.b.toLowerCase(),0))v=B.cR(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fLN(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.j.ad(A.d.cF(w,0,new C.fLO())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qI().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
alq:function alq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fLP:function fLP(){},
fAv:function fAv(){},
fIc:function fIc(d){this.a=d},
fId:function fId(){},
fLM:function fLM(d){this.a=d},
fLN:function fLN(d){this.a=d},
fLO:function fLO(){},
WS:function WS(d,e){this.c=d
this.a=e},
bmV:function bmV(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=null
_.y=_.x=!1
_.z=0
_.Q=""
_.as=0
_.ax=_.at=!1
_.ay=g
_.ch=h
_.c=_.a=null},
ekc:function ekc(d){this.a=d},
ekd:function ekd(d,e,f){this.a=d
this.b=e
this.c=f},
eke:function eke(d){this.a=d},
ekp:function ekp(d){this.a=d},
ekq:function ekq(d,e){this.a=d
this.b=e},
ekl:function ekl(d){this.a=d},
ekj:function ekj(d,e){this.a=d
this.b=e},
ekk:function ekk(d,e,f){this.a=d
this.b=e
this.c=f},
ekm:function ekm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ekh:function ekh(d){this.a=d},
eki:function eki(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ekn:function ekn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ekg:function ekg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eko:function eko(d,e){this.a=d
this.b=e},
ekf:function ekf(d,e){this.a=d
this.b=e},
ekt:function ekt(d){this.a=d},
eks:function eks(d){this.a=d},
eku:function eku(d){this.a=d},
ekr:function ekr(d){this.a=d},
ekv:function ekv(d,e){this.a=d
this.b=e},
ekw:function ekw(d,e){this.a=d
this.b=e},
ekx:function ekx(d,e){this.a=d
this.b=e},
eky:function eky(d,e){this.a=d
this.b=e},
bCT(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fwd,w,w,w),B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p)},
hBd(d,e,f,g){var w=null,v=B.l(24),u=B.K(f.j(0.6),A.r,1)
return B.as(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.B7,A.K,w,w),A.aB,B.bZ(A.fU,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.o(D.biD,w,u,v,w,w,A.n),w,w,w,w,A.ac,w,w,w),w,w,w)},
GW:function GW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vp:function vp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xe:function Xe(d){this.a=d},
aGA:function aGA(d,e,f,g,h,i,j,k,l,m){var _=this
_.e=_.d=0
_.f=d
_.r=e
_.w=0
_.x=1
_.Q=_.z=_.y=!1
_.as="ready"
_.at=""
_.ax=0.5
_.ay=0.3
_.ch=f
_.CW=0
_.cy=_.cx=1
_.db=0
_.dx=g
_.dy=!1
_.h7$=h
_.m9$=i
_.fa$=j
_.h8$=k
_.bw$=l
_.a9$=m
_.c=_.a=null},
ezx:function ezx(){},
ezR:function ezR(d){this.a=d},
ezQ:function ezQ(d,e){this.a=d
this.b=e},
ezS:function ezS(){},
ezT:function ezT(){},
ezz:function ezz(d,e,f){this.a=d
this.b=e
this.c=f},
ezy:function ezy(d,e){this.a=d
this.b=e},
ezo:function ezo(d){this.a=d},
ezp:function ezp(d){this.a=d},
ezq:function ezq(d){this.a=d},
ezr:function ezr(d){this.a=d},
ezs:function ezs(d){this.a=d},
ezt:function ezt(d){this.a=d},
ezu:function ezu(d){this.a=d},
ezv:function ezv(d){this.a=d},
ezw:function ezw(d){this.a=d},
ezm:function ezm(d){this.a=d},
ezn:function ezn(d){this.a=d},
ezl:function ezl(d){this.a=d},
ezK:function ezK(d,e){this.a=d
this.b=e},
ezF:function ezF(d){this.a=d},
ezG:function ezG(d){this.a=d},
ezC:function ezC(d){this.a=d},
ezH:function ezH(d){this.a=d},
ezB:function ezB(d){this.a=d},
ezI:function ezI(d){this.a=d},
ezJ:function ezJ(d){this.a=d},
ezA:function ezA(d){this.a=d},
ezL:function ezL(d,e){this.a=d
this.b=e},
ezE:function ezE(d,e){this.a=d
this.b=e},
ezM:function ezM(d){this.a=d},
ezN:function ezN(d){this.a=d},
ezO:function ezO(d){this.a=d},
ezP:function ezP(d){this.a=d},
ezD:function ezD(d){this.a=d},
bjP:function bjP(d,e){this.b=d
this.a=e},
aOA:function aOA(){},
bAx:function bAx(){},
hwk(){var w=$.hwi
return w==null?$.hwi=$.qJ().cX5("assets/data/three.min.js"):w},
hwj(){var w=$.hwh
return w==null?$.hwh=C.cPT():w},
cPT(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cPT=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.qJ().jc(0,"assets/data/body3d.bin"),$async$cPT)
case 3:d=a1
$.hwl=J.et(A.dI.gaT(d),d.byteOffset,d.byteLength)
t=B.Ti(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jN(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dmB[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4z(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b5B))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bcN(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cPT,v)},
c7g(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c7g=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.iH(B.a([C.hwj(),C.hwk()],x.D),x.K),$async$c7g)
case 6:u=1
w=5
break
case 3:u=2
r=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$c7g,v)},
aUC:function aUC(d,e,f){this.a=d
this.b=e
this.c=f},
a4z:function a4z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bcN:function bcN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
VI:function VI(d){this.a=d},
aF1:function aF1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
_.d=null
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=null
_.ax=_.at=!1
_.ay=""
_.ch=l
_.CW=2
_.cx=1
_.cy=null
_.db=0.5
_.dx=0.05
_.fr=_.dy=1
_.fx=m
_.fy=n
_.go=!0
_.id=0
_.k1=1
_.k2=o
_.k3=0
_.k4=72
_.ok=!1
_.p1=0
_.p2=!1
_.p3=null
_.p4=0
_.R8=""
_.RG=p
_.rx=q
_.ry=r
_.to=0
_.h7$=s
_.m9$=t
_.fa$=u
_.h8$=v
_.bw$=w
_.a9$=a0
_.c=_.a=null},
dQ9:function dQ9(d){this.a=d},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
dPK:function dPK(d){this.a=d},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPM:function dPM(d){this.a=d},
dPN:function dPN(){},
dQa:function dQa(){},
dPO:function dPO(d,e){this.a=d
this.b=e},
dPP:function dPP(d){this.a=d},
dPQ:function dPQ(){},
dPR:function dPR(d){this.a=d},
dPT:function dPT(d,e){this.a=d
this.b=e},
dPS:function dPS(d){this.a=d},
dPH:function dPH(d,e,f){this.a=d
this.b=e
this.c=f},
dPI:function dPI(d){this.a=d},
dPJ:function dPJ(d){this.a=d},
dQ_:function dQ_(d){this.a=d},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d){this.a=d},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dQ3:function dQ3(d,e){this.a=d
this.b=e},
dPY:function dPY(d,e){this.a=d
this.b=e},
dQ4:function dQ4(d){this.a=d},
dPX:function dPX(d){this.a=d},
dQ5:function dQ5(d){this.a=d},
dPW:function dPW(d){this.a=d},
dQ6:function dQ6(d){this.a=d},
dPV:function dPV(d){this.a=d},
dQ7:function dQ7(d){this.a=d},
dPU:function dPU(d){this.a=d},
aND:function aND(){},
aNE:function aNE(){},
c7h:function c7h(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c7i:function c7i(d,e){this.a=d
this.b=e},
c7j:function c7j(d){this.a=d},
aAp(d,e,f,g,h){return new C.bdy(d,e,f,g,h)},
hdl(d,e,f,g,h,i){return $.i58.c4(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cWP(d,e,f,i,g,h))},
yI:function yI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D1:function D1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nN:function nN(d,e,f){this.a=d
this.b=e
this.c=f},
bdy:function bdy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftN:function ftN(){},
ftO:function ftO(){},
ftP:function ftP(){},
ftW:function ftW(){},
ftX:function ftX(){},
ftY:function ftY(){},
VP:function VP(d){this.a=d},
aF3:function aF3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=0
_.z=null
_.Q=j
_.as=null
_.at=k
_.ax=!0
_.ay=null
_.ch=""
_.CW=!1
_.cx=l
_.cy=null
_.h7$=m
_.m9$=n
_.fa$=o
_.h8$=p
_.bw$=q
_.a9$=r
_.c=_.a=null},
dRP:function dRP(d){this.a=d},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRw:function dRw(){},
dRQ:function dRQ(){},
dRr:function dRr(d,e){this.a=d
this.b=e},
dRs:function dRs(d,e){this.a=d
this.b=e},
dRx:function dRx(d,e,f){this.a=d
this.b=e
this.c=f},
dRm:function dRm(){},
dRn:function dRn(){},
dRo:function dRo(d){this.a=d},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRq:function dRq(d,e,f){this.a=d
this.b=e
this.c=f},
dRy:function dRy(){},
dRz:function dRz(d,e){this.a=d
this.b=e},
dRA:function dRA(d){this.a=d},
dRv:function dRv(d,e){this.a=d
this.b=e},
dRu:function dRu(d){this.a=d},
dRl:function dRl(d,e,f){this.a=d
this.b=e
this.c=f},
dRJ:function dRJ(d){this.a=d},
dRI:function dRI(d){this.a=d},
dRK:function dRK(d){this.a=d},
dRH:function dRH(d){this.a=d},
dRF:function dRF(d){this.a=d},
dRG:function dRG(d){this.a=d},
dRE:function dRE(d){this.a=d},
dRB:function dRB(d){this.a=d},
dRD:function dRD(d){this.a=d},
dRL:function dRL(d,e){this.a=d
this.b=e},
dRM:function dRM(d,e){this.a=d
this.b=e},
dRN:function dRN(d){this.a=d},
dRC:function dRC(d){this.a=d},
dRO:function dRO(d,e){this.a=d
this.b=e},
bdQ:function bdQ(d,e){this.b=d
this.a=e},
cWP:function cWP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNI:function aNI(){},
bAh:function bAh(){},
hWQ(){return new C.Oj(null)},
Rm(d,e,f,g,h){return new C.bvP(d,e,f,g,h)},
bua(d,e,f){return A.j.D((d-e)/(f-e),0,1)},
hdT(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
in6(){return B.kS("construction","")},
Oj:function Oj(d){this.a=d},
Lj:function Lj(d,e){this.a=d
this.b=e},
B5:function B5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aFk:function aFk(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dY0:function dY0(d,e){this.a=d
this.b=e},
dY_:function dY_(d){this.a=d},
dY2:function dY2(d,e){this.a=d
this.b=e},
dY1:function dY1(d){this.a=d},
bvP:function bvP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fud:function fud(){},
fue:function fue(){},
fuf:function fuf(){},
fug:function fug(){},
fuh:function fuh(){},
fui:function fui(){},
fuj:function fuj(){},
fuk:function fuk(){},
ful:function ful(){},
bub:function bub(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f9C:function f9C(d){this.a=d},
f9B:function f9B(d,e){this.a=d
this.b=e},
f9z:function f9z(d){this.a=d},
f9D:function f9D(d){this.a=d},
f9A:function f9A(d,e){this.a=d
this.b=e},
agi:function agi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
af9:function af9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Rf:function Rf(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
bvc:function bvc(d,e){this.b=d
this.a=e},
buI:function buI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcv:function bcv(d,e){this.b=d
this.a=e},
aJC:function aJC(d,e){this.c=d
this.a=e},
aJD:function aJD(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.b8$=f
_.c=_.a=null},
f9i:function f9i(d){this.a=d},
f9h:function f9h(d){this.a=d},
f9g:function f9g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9f:function f9f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9d:function f9d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9c:function f9c(d,e,f){this.a=d
this.b=e
this.c=f},
f9e:function f9e(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9b:function f9b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9q:function f9q(d){this.a=d},
f9p:function f9p(d){this.a=d},
f9r:function f9r(d,e){this.a=d
this.b=e},
f9s:function f9s(d,e){this.a=d
this.b=e},
f9t:function f9t(d,e){this.a=d
this.b=e},
f9o:function f9o(d,e,f){this.a=d
this.b=e
this.c=f},
f9u:function f9u(d,e,f){this.a=d
this.b=e
this.c=f},
f9n:function f9n(d){this.a=d},
f9j:function f9j(d){this.a=d},
f9v:function f9v(d){this.a=d},
f9w:function f9w(d){this.a=d},
f9m:function f9m(d,e){this.a=d
this.b=e},
f9x:function f9x(d,e){this.a=d
this.b=e},
f9l:function f9l(d,e){this.a=d
this.b=e},
f9y:function f9y(d,e){this.a=d
this.b=e},
f9k:function f9k(d,e){this.a=d
this.b=e},
f99:function f99(){},
f9a:function f9a(){},
btN:function btN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btc:function btc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bdb:function bdb(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bte:function bte(d,e,f){this.b=d
this.c=e
this.a=f},
bxi:function bxi(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aPp:function aPp(){},
hCI(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a5(0,new B.r(w,0)),u=e.aJ(0,new B.r(w,0)),t=1-f,s=3*t
return d.aL(0,t*t*t).a5(0,v.aL(0,s*t*f)).a5(0,u.aL(0,s*f*f)).a5(0,e.aL(0,f*f*f))},
bjO(d,e,f,g,h,i){return $.i5H.c4(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.drS(d,e,f,i,g,h))},
a1H:function a1H(d,e){this.a=d
this.b=e},
qx:function qx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
re:function re(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D5:function D5(d,e){this.a=d
this.b=e},
a_G:function a_G(d,e){this.a=d
this.b=e},
ag6:function ag6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1U:function a1U(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Dg:function Dg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acZ:function acZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adf:function adf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afc:function afc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjM:function bjM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.CW=_.ch=_.ay=_.ax=0
_.cx=r
_.cy=s
_.db=!1
_.dx=-1000
_.R$=0
_.U$=t
_.by$=_.bL$=0},
drW:function drW(d){this.a=d},
drX:function drX(d){this.a=d},
drT:function drT(d,e){this.a=d
this.b=e},
drU:function drU(d){this.a=d},
drV:function drV(d){this.a=d},
drY:function drY(d){this.a=d},
drZ:function drZ(d){this.a=d},
ds_:function ds_(d){this.a=d},
ds0:function ds0(d){this.a=d},
ds1:function ds1(d){this.a=d},
ds2:function ds2(d){this.a=d},
ds3:function ds3(d){this.a=d},
ds4:function ds4(d){this.a=d},
ds5:function ds5(d){this.a=d},
GH:function GH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xd:function Xd(d){this.a=d},
aGz:function aGz(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=!1
_.x=null
_.y=f
_.z=null
_.Q=g
_.as=null
_.ax=_.at=!1
_.ay=!0
_.ch=""
_.CW=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
eyS:function eyS(d){this.a=d},
eyH:function eyH(d){this.a=d},
eyJ:function eyJ(){},
eyK:function eyK(){},
eyN:function eyN(){},
eyO:function eyO(d,e,f){this.a=d
this.b=e
this.c=f},
eyP:function eyP(d){this.a=d},
eyQ:function eyQ(d){this.a=d},
eyL:function eyL(){},
eyM:function eyM(d){this.a=d},
ezh:function ezh(d){this.a=d},
eyR:function eyR(){},
eyD:function eyD(d){this.a=d},
eyU:function eyU(d){this.a=d},
eyT:function eyT(d){this.a=d},
eyW:function eyW(){},
eyV:function eyV(d,e){this.a=d
this.b=e},
eyG:function eyG(){},
eyE:function eyE(d){this.a=d},
eyF:function eyF(d){this.a=d},
ezf:function ezf(d){this.a=d},
eze:function eze(d){this.a=d},
ezg:function ezg(d){this.a=d},
ez5:function ez5(d,e){this.a=d
this.b=e},
ezd:function ezd(d){this.a=d},
ezb:function ezb(d){this.a=d},
ezc:function ezc(d){this.a=d},
eza:function eza(d){this.a=d},
ez9:function ez9(d){this.a=d},
ez6:function ez6(d){this.a=d},
ez7:function ez7(d){this.a=d},
ez8:function ez8(d){this.a=d},
eyI:function eyI(){},
ez1:function ez1(d){this.a=d},
ez2:function ez2(d){this.a=d},
ez0:function ez0(d){this.a=d},
ez3:function ez3(d){this.a=d},
ez_:function ez_(d){this.a=d},
ez4:function ez4(d){this.a=d},
eyZ:function eyZ(d){this.a=d},
eyY:function eyY(d){this.a=d},
eyX:function eyX(d,e){this.a=d
this.b=e},
bjN:function bjN(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
drS:function drS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOy:function aOy(){},
hIv(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aJ(0,e).gcJ()*0.1
return new B.r((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hnh(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5H(w,v,u,A.cR,B.T(x.N,x.y))},
hQw(d,e,f){var w=d.c,v=e===0?-1:1
return new B.r(w*f.a+v*C.hni(d),d.d*f.b)},
hni(d){return 42+(D.mu.am(0,d.b)?(d.ch-1)*38:0)},
ei:function ei(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
u0:function u0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=3
_.f=0.5
_.r=100
_.w=!0
_.x=!1
_.Q=_.z=_.y=0
_.as=1
_.ax=_.at=0
_.ay=""
_.ch=1
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=0},
abE:function abE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
acL:function acL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5H:function a5H(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bQw:function bQw(){},
bQH:function bQH(d){this.a=d},
bQC:function bQC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQI:function bQI(d){this.a=d},
bQJ:function bQJ(d){this.a=d},
bQL:function bQL(d){this.a=d},
bQM:function bQM(d){this.a=d},
bQK:function bQK(d){this.a=d},
bQN:function bQN(d,e,f){this.a=d
this.b=e
this.c=f},
bQO:function bQO(d){this.a=d},
bQy:function bQy(d){this.a=d},
bQz:function bQz(d){this.a=d},
bQx:function bQx(d){this.a=d},
bQA:function bQA(d,e,f){this.a=d
this.b=e
this.c=f},
bQB:function bQB(d){this.a=d},
bQv:function bQv(d){this.a=d},
bQP:function bQP(d,e){this.a=d
this.b=e},
bQD:function bQD(d,e){this.a=d
this.b=e},
bQG:function bQG(d){this.a=d},
bQF:function bQF(d){this.a=d},
bQE:function bQE(d){this.a=d},
ake:function ake(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bKS:function bKS(){},
bKT:function bKT(){},
mZ:function mZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cuA:function cuA(d){this.a=d},
isS(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fXL(),c8=new C.fXN(),c9=new C.fXO(),d0=new C.fXM(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.aq(w,d0.$3(new B.a4(w.a,w.b,w.c,w.d),A.ch,A.bP))
d2.ah(D.eum,D.erg,c8.$2(A.dY,1.4))
d2.ah(D.eqW,D.eqU,c8.$2(A.by,2.4))
d2.ah(D.eqX,T.aMG,c8.$2(A.by,2.4))
if(c6){d1=c7.$1(A.ft.j(0.5))
d1.y=A.Hk
d2.O(D.eqC,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.j.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.r(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.aq(c9.$4(-22,-26,44,50),d0.$3(D.aSO,A.aS,A.cA))
d2.O(A.cJ,16,c7.$1(A.by))
d2.O(A.cJ,13,c7.$1(c6?A.aG.j(0.85):A.a_))
if(c6){d1=d2.c
J.br(d1.save())
d1.translate(0,4)
d2.jq(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.r(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.O(new B.r(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.O(D.eue,2.4,c7.$1(c6?A.bg:A.an))
d2.O(D.ev6,2.4,c7.$1(A.an))
return!0
case"blender":d2.aq(c9.$5(-14,14,28,12,4),c7.$1(A.cP))
d1=$.S().r
t=x.v
s=new B.aH(d1,A.aj,c5,c5,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bw())
d2.af(s,c7.$1(A.ft.j(0.35)))
if(c6){d1=new B.aH(d1,A.aj,c5,c5,B.a([],t))
d1.E(new B.aZ(-14,-10))
d1.E(new B.aq(14,-10))
d1.E(new B.aq(12,14))
d1.E(new B.aq(-12,14))
d1.E(new B.bw())
d2.af(d1,c7.$1(A.aA.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.br(d1.save())
d1.translate(0,10)
d2.jq(0,d3.y)
d2.ah(D.a9l,D.aN2,c8.$2(A.bO,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.O(new B.r(Math.sin(d1+v*2)*9,-10-A.j.F(t+v*0.33,1)*12),2.4,c7.$1(A.eZ))
return!0
case"drone":d2.aq(c9.$5(-10,-4,20,10,4),c7.$1(A.aL))
d2.O(A.hr,3,c7.$1(c6?A.bg:A.an))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.IZ[p]
d2.ah(new B.r(o*0.4,1),new B.r(o,t),c8.$2(A.by,3))
J.br(d1.save())
d1.translate(o,q)
d2.ah(D.eu2,D.er0,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.c0(B.bW(A.J,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bw())
d2.af(w,d0.$3(D.fcl,A.aQ,A.d5))
d2.aF(D.fbs,c7.$1(A.cY))
d1=d2.c
J.br(d1.save())
d1.translate(18,-5)
d2.jq(0,d3.y*2)
d2.ah(A.J,D.er7,c8.$2(A.bO,2.4))
d2.ah(A.a9h,D.er6,c8.$2(A.hL,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.O(new B.r(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.ex.j(1-u)))}return!0
case"torch":if(c6){v=A.j.D(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,-6))
d1.E(new B.aq(52,-26))
d1.E(new B.aq(52,18))
d1.E(new B.aq(16,4))
d1.E(new B.bw())
d2.af(d1,c7.$1(A.bL.j(0.35*v)))}d2.aq(c9.$5(-26,-6,30,12,3),d0.$3(D.fcr,A.bh,A.cs))
n=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bw())
d2.af(n,c7.$1(A.cP))
d2.O(D.erc,7,c7.$1(c6?A.c:A.cY))
return!0
case"neon":d2.aq(c9.$5(-30,-14,60,28,6),c7.$1(M.mX))
if(c6)m=d3.ax>0.5||A.o.F(A.j.bg(d4*17),3)!==0
else m=!1
l=m?A.c3:D.bt2
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.c3.j(0.35))
t.y=A.n4
d2.aq(d1,t)}d2.aq(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.eus,l,17)
return!0
case"microwave":d2.aq(c9.$4(-30,-18,60,38),d0.$3(D.fcx,A.bO,A.bh))
d1=c9.$5(-26,-14,38,30,3)
d2.aq(d1,c7.$1(c6?A.bL.j(0.75):A.av))
if(c6){d1=d2.c
J.br(d1.save())
d1.translate(-7,8)
d2.jq(0,d3.y*0.5)
d2.c0(B.bW(A.J,7,22),c7.$1(A.d5))
d1.restore()}d2.aq(c9.$5(15,-14,12,12,2),c7.$1(M.mX))
if(c6)d5.$5(d2,"0:"+A.a.b0(A.o.v(59-A.o.F(A.j.bg(d4),60)),2,"0"),D.erd,A.bc,6.5)
d2.O(D.ert,4,c7.$1(A.cY))
return!0
case"doorbell":d2.aq(c9.$5(-16,-26,32,52,8),c7.$1(A.bl))
d2.O(A.JQ,10,c7.$1(c6?A.bt:A.by))
d1=d2.c
J.br(d1.save())
d1.translate(0,-8)
d2.jq(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.eva,A.c,16)
d1.restore()
d2.O(A.kE,6,c7.$1(A.d8))
d2.O(A.kE,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cQ(B.bV(A.JQ,14+v*6+A.j.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bt.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.eur,D.ev3,c8.$2(A.by,4))
d1=d2.c
J.br(d1.save())
d2.jq(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.aq(c9.$5(-24,-14,46,22,5),d0.$3(D.fcm,A.bO,A.an))
d2.O(D.aMK,8,c7.$1(A.av))
d2.O(D.aMK,4.5,c7.$1(c6?A.aG:A.cs))
d2.O(D.eup,2.2,c7.$1(c6&&A.o.F(A.j.bg(d4*1.6),2)===0?A.aA:A.kx))
d1.restore()
if(c6)d5.$5(d2,"REC",D.euA,A.aA,9)
return!0
case"console":d2.aq(c9.$5(-28,-22,56,44,8),d0.$3(D.fcu,A.j7,A.fA))
d2.aq(c9.$5(-20,-17,40,22,3),c7.$1(A.dQ))
if(c6){d1=d4*2.3
d2.O(new B.r(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.aF(new B.a4(-18,t,-15.6,t+8),c7.$1(A.bc))
d1=-9+Math.sin(d1-0.4)*6
d2.aF(new B.a4(15.6,d1,18,d1+8),c7.$1(A.c3))}d2.O(D.euk,4,c7.$1(A.b5))
d2.O(D.er8,2.4,c7.$1(A.aA))
d2.O(D.erq,2.4,c7.$1(A.bg))
return!0
case"heartmon":d2.aq(c9.$5(-30,-22,60,44,6),c7.$1(A.av))
d2.aq(c9.$5(-26,-18,52,28,3),c7.$1(A.dQ))
if(c6){d1=$.S()
t=B.a([],x.v)
k=new B.aH(d1.r,A.aj,c5,c5,t)
for(d1=d4*0.5,o=-25;o<=25;++o){u=A.j.F((o+25)/50-d1,1)
if(u<0.1)j=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)j=0.6
else{q=u<0.2?-0.4:0
j=q}i=-4+j*11
if(o===-25){q=new B.aZ(o,i)
t.push(q)
h=k.f
if(h!=null)q.ak(h)
k.ab()}else{q=new B.aq(o,i)
t.push(q)
h=k.f
if(h!=null)q.ak(h)
k.ab()}}d2.af(k,c8.$2(A.bc,1.8))
d5.$5(d2,"72",D.er9,A.hv,11)
d1=d4*9
d5.$5(d2,"\u2665",D.euF,A.hv.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.O(D.euu,3,c7.$1(c6?A.bg:A.by))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.aq(d1,c7.$1(A.cG.j(c6?0.5:0.3)))
d2.aq(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.aF(D.fco,c7.$1(F.ul))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.br(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.op(0,-1,1)
d2.c0(B.bW(A.J,8,14),c7.$1(A.cN))
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,0))
d1.E(new B.aq(-12,-4))
d1.E(new B.aq(-12,4))
d1.E(new B.bw())
d2.af(d1,c7.$1(A.c8))
d2.O(D.esb,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.j.F(d1+v*0.2,1)
d2.O(new B.r(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.S().r
t=x.v
g=new B.aH(d1,A.aj,c5,c5,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bw())
d2.af(g,d0.$3(D.fcZ,A.c,A.bD))
d2.aF(D.fcV,c7.$1(c6?A.ex:A.by))
q=new B.aH(d1,A.aj,c5,c5,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bw())
d2.af(q,c7.$1(A.eq))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aH(d1,A.aj,c5,c5,B.a([],t))
d1.E(new B.aZ(0,-19))
t=f*34
d1.E(new B.aq(t,-26))
d1.E(new B.aq(t,-12))
d1.E(new B.bw())
d2.af(d1,c7.$1(A.ex.j(0.45)))
d1=c7.$1(A.ex.j(0.35))
d1.y=A.Hk
d2.O(D.eqD,14,d1)}return!0
case"discoball":d2.ah(D.eqF,U.aMB,c8.$2(A.cY,1.4))
d2.O(A.J,16,d0.$3(D.fc5,A.aS,A.an))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.r(-16,d1),new B.r(16,d1),c8.$2(A.dB,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.r(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.r(Math.cos(f)*16,0),c8.$2(A.dB,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.O(new B.r(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dnF[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.aq(c9.$5(-14,-4,28,24,5),d0.$3(D.fc2,A.cA,A.an))
d2.aq(c9.$5(-12,-26,24,20,5),d0.$3(D.fbW,A.bl,A.bP))
d2.ah(H.aMD,D.eqH,c8.$2(A.by,1.6))
d2.O(D.eqI,2.2,c7.$1(c6?A.aA:A.by))
d=c6&&A.j.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a6U[p]
if(c6)d1=d?A.b9:A.fn
else d1=A.cs
d2.O(new B.r(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.br(d1.save())
d1.translate(14,0)
d2.jq(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.J,D.a9c,c8.$2(A.bP,4))
d1.restore()
d2.ah(D.eua,D.euy,c8.$2(A.bP,4))
d2.aF(D.fcU,c7.$1(c6?A.b9.j(0.7):A.aL))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aDl[p]+1,d1,10,14,2)
q=B.ap(A.bL,A.d5,a0)
q.toString
d2.aq(t,c7.$1(q))}d2.aq(c9.$5(-24,-6,48,26,8),d0.$3(D.fcn,A.bO,A.bh))
for(p=0;p<2;++p){o=D.aDl[p]
d1=c9.$5(o,-5,12,5,2)
d2.aq(d1,c7.$1(c6?A.fK:A.av))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cN.j(0.5))
t.y=N.oA
d2.aq(d1,t)}}d2.ah(D.erz,D.erU,c8.$2(A.av,3))
return!0
case"ledstrip":d2.aq(c9.$5(-34,-4,68,10,4),c7.$1(A.cs))
for(d1=d4*90,v=0;v<9;++v){a1=A.j.F(d1+v*40,360)
l=c6?new Ar.pk(1,a1,0.8,1).je():A.cP
if(c6){t=c7.$1(l.j(0.45))
t.y=N.oA
d2.O(new B.r(-30+v*7.5,1),7,t)}d2.O(new B.r(-30+v*7.5,1),2.6,c7.$1(l))}d2.aq(c9.$5(-40,-2,6,6,1),c7.$1(A.cY))
return!0
case"pump":d2.aq(c9.$5(-16,-2,32,22,6),d0.$3(D.fcb,A.cG,A.Gd))
d2.O(D.euG,8,c7.$1(A.rK))
d1=d2.c
J.br(d1.save())
d1.translate(-2,9)
d2.jq(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.r(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.ft,2.4))}d1.restore()
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,6))
d1.E(new B.aq(26,6))
d1.E(new B.aq(26,-20))
d1.E(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bP,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.O(new B.r(26,6-A.j.F(d1+v*0.2,1)*26),2.2,c7.$1(A.h9))
d2.O(D.esP,3.2,c7.$1(A.h9.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.br(d1.save())
d2.jq(0,-0.15)
d2.aq(c9.$5(-26,-14,40,22,10),d0.$3(D.fcp,A.hJ,A.up))
d2.aq(c9.$5(14,-10,12,14,3),c7.$1(A.cs))
d2.aq(c9.$5(-10,6,12,22,4),c7.$1(A.cP))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.r(24+t,q),new B.r(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cN.j(0.4))
d1.y=N.oA
d2.O(D.ers,8,d1)}return!0
case"headphones":d2.cQ(B.bW(A.dL,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.by,4))
for(d1=d4*12,p=0;p<2;++p){o=F.T2[p]
t=o-7
d2.aq(c9.$5(t,0,14,20,6),d0.$3(new B.a4(t,0,t+14,20),A.bf,A.mR))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bV(new B.r(o,10),10+v*5+A.j.F(d1,5))
h=t?2.2:-0.9
d2.cQ(q,h,1.6,!1,c8.$2(A.ey.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.r(-4,-8-A.j.F(d4*14,8)),A.kN,12)
return!0
case"smartwatch":d2.aq(c9.$5(-8,-30,16,14,3),c7.$1(A.cs))
d2.aq(c9.$5(-8,14,16,14,3),c7.$1(A.cs))
d2.aq(c9.$5(-14,-17,28,32,8),d0.$3(D.fc0,A.cY,A.cP))
d2.aq(c9.$5(-11,-14,22,26,6),c7.$1(A.dQ))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b0(A.o.v(B.df(a2)),2,"0")+":"+A.a.b0(A.o.v(B.fT(a2)),2,"0"),D.eqO,A.bc,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ap(A.FY,A.hv,j)
d1.toString
d5.$5(d2,"\u2665",new B.r(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.j.bg(d4*2),6)),A.dL,A.c,7)}return!0
case"tablet":d2.aq(c9.$5(-30,-22,60,44,6),c7.$1(M.mX))
d2.aq(c9.$5(-30,-22,60,44,6),c8.$2(A.bP,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n3(a3),$.mH(),!0)
d1.translate(-27,-19)
L.Md(d2,D.fjl,d4,!1,c5,c5)
d1.restore()}else d2.aq(a3,c7.$1(D.wo))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.aq(a4,d0.$3(new B.a4(a4.a,a4.b,a4.c,a4.d),A.dW,A.dg))
d2.aq(a4,c8.$2(A.aT,1.2))
d2.O(D.aN9,9,c7.$1(A.av))
d2.O(D.aN9,6,c8.$2(A.d5,2))
d2.aq(c9.$5(4,-2,14,10,2),c7.$1(A.av))
d2.aq(c9.$5(-22,-19,44,12,2),c7.$1(A.dQ))
d1=A.j.ad(d3.db,1)
t=A.j.ad(c6?d3.dx:d3.e,1)
q=c6?A.bc:A.an
d5.$5(d2,d1+"\u2192"+t+"V",D.esZ,q,8.2)
d2.O(D.erh,2.4,c7.$1(c6?A.bg:A.aL))
d5.$5(d2,"IN",D.euz,A.ab,6)
d5.$5(d2,"OUT",D.esG,A.ab,6)
return!0
case"regulator":a5=c6?A.j.D(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ap(A.bP,A.aA,a5)
t.toString
d2.aq(d1,c7.$1(t))
d2.O(H.a9a,3,c7.$1(A.aL))
d2.aq(c9.$5(-12,-4,24,18,3),d0.$3(D.fbX,A.cP,A.i7))
d5.$5(d2,"7805",D.a9l,A.ab,8)
for(p=0;p<3;++p){d1=D.dug[p]-1
d2.aF(new B.a4(d1,14,d1+2,22),c7.$1(A.dX))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.j.F(d1+v*0.33,1)
d2.O(new B.r(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.ev7,A.bp,9)
return!0
case"diode":d2.ah(D.aNd,D.aMX,c8.$2(A.dX,2.4))
d2.aq(c9.$5(-14,-7,28,14,6),c7.$1(A.at.j(0.85)))
d2.aF(D.fbG,c7.$1(A.bp))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.ex.j(0.4))
t.y=A.kX
d2.aq(d1,t)}d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,-4))
d1.E(new B.aq(-8,4))
d1.E(new B.aq(-1,0))
d1.E(new B.bw())
d2.af(d1,c7.$1(A.b5))
d5.$5(d2,"one way",D.eun,A.aF,8)
return!0
case"ldr":d2.ah(D.aNd,D.a9l,c8.$2(A.dX,2.4))
d2.ah(D.aN2,D.aMX,c8.$2(A.dX,2.4))
d2.O(A.J,12,c7.$1(A.d5))
d2.O(A.J,12,c8.$2(A.rQ,1.6))
d1=$.S()
t=B.a([],x.v)
a6=new B.aH(d1.r,A.aj,c5,c5,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.ak(q)
a6.ab()}d2.af(a6,c8.$2(A.bL,1.4))
d1=B.ap(A.by,A.ex,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.r(-6,-26),d1,14)
d5.$5(d2,""+A.j.V(20+980*(1-d3.f))+"\u03a9",D.eub,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.eo
break
case"sonytv":t=A.rB
break
case"appletv":t=A.dX
break
default:t=F.BR
break}a7=d1==="lgtv"||d1==="appletv"
d2.aq(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=c9.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c6){h=d2.c
J.br(h.save())
h.clipRRect(B.n3(a3),$.mH(),!0)
h.translate(t,q)
L.fY0(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1,c5,c5)
h.restore()
d2.O(D.erX,1.6,c7.$1(A.bc))}else{d2.aq(a3,c7.$1(D.wo))
h=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bw())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.aq(c9.$5(-22,19,44,3,1.5),c7.$1(A.cY))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.fO[p]
t=$.S()
q=B.a([],d1)
t=new B.aH(t.r,A.aj,c5,c5,q)
q.push(new B.aZ(o*30,20))
t.ab()
h=new B.aq(o*22,20)
q.push(h)
a8=t.f
if(a8!=null)h.ak(a8)
t.ab()
h=new B.aq(o*26,26)
q.push(h)
a8=t.f
if(a8!=null)h.ak(a8)
t.ab()
h=new B.bw()
q.push(h)
q=t.f
if(q!=null)h.ak(q)
t.ab()
d2.af(t,c7.$1(A.cY))}d5.$5(d2,"SONY",D.etD,A.bO,5.5)
break
case"appletv":d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,18))
d1.E(new B.aq(8,18))
d1.E(new B.aq(12,25))
d1.E(new B.aq(-12,25))
d1.E(new B.bw())
d2.af(d1,c7.$1(D.ZW))
d5.$5(d2,"Apple TV",D.et_,A.by,4.8)
break
default:d2.aq(c9.$5(-34,19,68,7,3),c7.$1(D.bri))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.r(d1,20),new B.r(d1,25),c8.$2(A.dB,0.6))}d5.$5(d2,"B&O",D.ev2,F.ul,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mu.h(0,d1)
b0=a9.b===D.AO
b1=b0?44:30
b2=b0?48:54
t=-b1/2
q=-b2/2
h=b0?5:6.5
w=c9.$5(t,q-2,b1,b2,h)
h=w.a
a8=w.b
b3=w.c
b4=w.d
b5=a9.c
b6=B.ap(b5,A.c,0.35)
b6.toString
d2.aq(w,d0.$3(new B.a4(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.br(t.save())
t.clipRRect(B.n3(a3),$.mH(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.Md(d2,new B.av(a3.c-q,a3.d-h),d4,!1,c5,c5)
t.restore()}else d2.aq(a3,c7.$1(D.wo))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.r(0,t),new B.r(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.aq(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.O(new B.r(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.aq(c9.$5(-17,-28,34,52,4),c7.$1(A.cP))
d2.aq(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bO))
if(c6){d5.$5(d2,"NGMY",D.evd,A.av,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.aF(new B.a4(-11,d1,-11+t,d1+1.4),c7.$1(A.bh))}d2.O(A.a98,1.6,c7.$1(A.av))}return!0
case"laptop":d2.aq(c9.$5(-30,-28,60,42,4),d0.$3(D.fcy,A.cA,A.bh))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n3(b7),$.mH(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.Md(d2,new B.av(b7.c-t,b7.d-q),d4,!1,c5,c5)
d1.restore()}else d2.aq(b7,c7.$1(D.wo))
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-38,16))
d1.E(new B.aq(38,16))
d1.E(new B.aq(34,21))
d1.E(new B.aq(-34,21))
d1.E(new B.bw())
d2.af(d1,c7.$1(D.ZW))
d2.aq(c9.$5(-7,16,14,2,1),c7.$1(A.bh))
return!0
case"imac":d2.aq(c9.$5(-32,-28,64,46,5),d0.$3(D.fcC,A.ch,A.cA))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n3(b8),$.mH(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.Md(d2,new B.av(b8.c-t,b8.d-q),d4,!1,c5,c5)
d1.restore()}else d2.aq(b8,c7.$1(D.wo))
d2.O(D.aMw,2,c7.$1(A.bP))
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,18))
d1.E(new B.aq(6,18))
d1.E(new B.aq(10,26))
d1.E(new B.aq(-10,26))
d1.E(new B.bw())
d2.af(d1,c7.$1(D.ZW))
return!0
case"monitor":d2.aq(c9.$5(-34,-28,68,40,3),c7.$1(A.eo))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n3(b9),$.mH(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.Md(d2,new B.av(b9.c-t,b9.d-q),d4,!1,c5,c5)
d1.restore()}else d2.aq(b9,c7.$1(D.wo))
d2.aF(D.fcJ,c7.$1(A.bh))
d2.aq(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.cY))
return!0
case"projector":if(c6){d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(14,4))
d1.E(new B.aq(-32,-42))
d1.E(new B.aq(34,-42))
d1.E(new B.bw())
d2.af(d1,c7.$1(A.ex.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n3(c0),$.mH(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.Md(d2,new B.av(c0.c-t,c0.d-q),d4,!1,c5,c5)
d1.restore()}d2.aq(c9.$5(-26,-4,52,24,6),d0.$3(D.fcq,A.hY,A.cY))
d2.O(D.aMI,7,c7.$1(A.av))
d2.O(D.aMI,4,c7.$1(c6?A.ex:A.cs))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.r(d1,2),new B.r(d1,14),c8.$2(A.dB,1))}return!0
case"carscreen":d2.aq(c9.$5(-34,-10,68,32,12),c7.$1(A.av))
c1=c9.$5(-30,-20,60,28,8)
d2.aq(c1,c7.$1(M.mX))
d2.aq(c1,c8.$2(A.by,1.2))
if(c6){c2=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
c2.E(new B.aZ(-26,4))
c2.E(new B.ce(-10,-14+Math.sin(d4)*3,6,-6))
c2.E(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aG,2.2))
d1=A.j.F(d4*6,48)
d2.O(new B.r(-26+d1,4-d1*0.1),2.4,c7.$1(A.bc))
d5.$5(d2,""+(88+A.o.F(A.j.bg(d4*2),5)),H.aN1,A.c,10)
d5.$5(d2,"km/h",D.esN,A.aF,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.aq(c3,d0.$3(new B.a4(c3.a,c3.b,c3.c,c3.d),A.cY,A.cP))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n3(c4),$.mH(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.Md(d2,new B.av(c4.c-t,c4.d-q),d4,!1,c5,c5)
d1.restore()
d1=c7.$1(A.bf.j(0.2))
d1.y=A.n4
d2.O(A.J,26,d1)}else d2.aq(c4,c7.$1(A.a_))
d2.ah(D.euN,D.euS,c8.$2(A.bh,4))
d2.ah(D.erZ,D.ese,c8.$2(A.bh,4))
return!0}return!1},
fXL:function fXL(){},
fXN:function fXN(){},
fXO:function fXO(){},
fXM:function fXM(){},
hm8(d,e,f,g){return new C.akc(d,g,f,e)},
Gr(d,e,f){return new C.bdz(d,e,f)},
akc:function akc(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
akd:function akd(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.e=_.d=null
_.f=!1
_.r=null
_.w=d
_.Q=_.z=_.y=_.x=null
_.as=e
_.at=f
_.ax=0
_.ch=_.ay=null
_.CW=g
_.cx=h
_.cy=!1
_.db=null
_.h7$=i
_.m9$=j
_.fa$=k
_.h8$=l
_.bw$=m
_.a9$=n
_.c=_.a=null},
bKv:function bKv(d,e){this.a=d
this.b=e},
bKw:function bKw(d){this.a=d},
bKu:function bKu(d){this.a=d},
bKx:function bKx(){},
bKy:function bKy(d){this.a=d},
bKz:function bKz(d,e,f){this.a=d
this.b=e
this.c=f},
bKt:function bKt(d,e){this.a=d
this.b=e},
bKq:function bKq(d,e){this.a=d
this.b=e},
bKr:function bKr(d,e,f){this.a=d
this.b=e
this.c=f},
bKk:function bKk(d,e){this.a=d
this.b=e},
bKl:function bKl(){},
bKs:function bKs(d,e,f){this.a=d
this.b=e
this.c=f},
bKp:function bKp(d,e){this.a=d
this.b=e},
bKm:function bKm(d,e){this.a=d
this.b=e},
bKn:function bKn(d,e){this.a=d
this.b=e},
bKo:function bKo(d){this.a=d},
bKP:function bKP(d){this.a=d},
bKQ:function bKQ(){},
bJV:function bJV(){},
bKR:function bKR(d,e){this.a=d
this.b=e},
bKO:function bKO(d,e){this.a=d
this.b=e},
bKJ:function bKJ(d){this.a=d},
bKG:function bKG(d,e,f){this.a=d
this.b=e
this.c=f},
bKH:function bKH(d,e){this.a=d
this.b=e},
bKK:function bKK(d){this.a=d},
bKE:function bKE(d,e){this.a=d
this.b=e},
bKF:function bKF(d,e){this.a=d
this.b=e},
bKI:function bKI(d){this.a=d},
bKL:function bKL(d){this.a=d},
bKB:function bKB(d,e){this.a=d
this.b=e},
bKC:function bKC(d,e){this.a=d
this.b=e},
bKD:function bKD(d,e){this.a=d
this.b=e},
bKM:function bKM(d){this.a=d},
bKA:function bKA(d){this.a=d},
bKN:function bKN(d){this.a=d},
bJW:function bJW(d,e){this.a=d
this.b=e},
bKh:function bKh(d,e){this.a=d
this.b=e},
bKj:function bKj(d,e){this.a=d
this.b=e},
bKi:function bKi(d,e){this.a=d
this.b=e},
bKg:function bKg(){},
bK2:function bK2(d){this.a=d},
bK1:function bK1(d){this.a=d},
bK3:function bK3(d,e){this.a=d
this.b=e},
bK4:function bK4(d){this.a=d},
bK0:function bK0(d){this.a=d},
bK8:function bK8(d,e,f){this.a=d
this.b=e
this.c=f},
bK_:function bK_(d,e){this.a=d
this.b=e},
bK9:function bK9(d,e){this.a=d
this.b=e},
bKa:function bKa(d,e){this.a=d
this.b=e},
bKb:function bKb(d,e){this.a=d
this.b=e},
bKc:function bKc(d,e,f){this.a=d
this.b=e
this.c=f},
bJZ:function bJZ(d,e){this.a=d
this.b=e},
bKd:function bKd(d,e,f){this.a=d
this.b=e
this.c=f},
bJY:function bJY(d,e){this.a=d
this.b=e},
bKe:function bKe(d,e,f){this.a=d
this.b=e
this.c=f},
bJX:function bJX(d,e){this.a=d
this.b=e},
bKf:function bKf(d){this.a=d},
bK5:function bK5(d){this.a=d},
bK6:function bK6(d){this.a=d},
bK7:function bK7(d){this.a=d},
bdz:function bdz(d,e,f){this.a=d
this.b=e
this.c=f},
ftZ:function ftZ(){},
fu_:function fu_(){},
fu0:function fu0(){},
ftM:function ftM(){},
fu1:function fu1(){},
ftL:function ftL(){},
fu2:function fu2(){},
ftQ:function ftQ(){},
ftK:function ftK(){},
ftR:function ftR(){},
ftJ:function ftJ(){},
ftS:function ftS(){},
ftI:function ftI(){},
ftT:function ftT(){},
ftG:function ftG(){},
ftH:function ftH(){},
ftU:function ftU(){},
ftE:function ftE(){},
ftF:function ftF(){},
ftV:function ftV(){},
ftD:function ftD(){},
Wq:function Wq(d){this.a=d},
aFx:function aFx(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e20:function e20(d,e){this.a=d
this.b=e},
e29:function e29(d){this.a=d},
e2a:function e2a(){},
e2b:function e2b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2c:function e2c(){},
e2_:function e2_(d){this.a=d},
e1Z:function e1Z(d,e,f){this.a=d
this.b=e
this.c=f},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e1W:function e1W(d){this.a=d},
e1X:function e1X(){},
e28:function e28(d){this.a=d},
e27:function e27(d){this.a=d},
e25:function e25(d,e){this.a=d
this.b=e},
e23:function e23(d){this.a=d},
e24:function e24(){},
e26:function e26(d,e,f){this.a=d
this.b=e
this.c=f},
e21:function e21(d,e){this.a=d
this.b=e},
e22:function e22(){},
e2e:function e2e(d){this.a=d},
e2f:function e2f(d,e){this.a=d
this.b=e},
e2d:function e2d(){},
e2g:function e2g(d,e){this.a=d
this.b=e},
e2h:function e2h(d){this.a=d},
e2i:function e2i(d){this.a=d},
azv:function azv(d,e){this.c=d
this.a=e},
bbH:function bbH(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
cM7:function cM7(d){this.a=d},
bbG:function bbG(d,e){this.b=d
this.a=e},
cM6:function cM6(d){this.a=d},
azQ:function azQ(){},
azR:function azR(){},
aM4:function aM4(){},
bAk:function bAk(){},
isT(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bV(A.vC,23)
$.S()
b8=B.L()
b8.r=A.av.gp(0)
b9.O(A.vC,25,b8)
b8=B.L()
b8.san(D.eDV.aD(0,v))
b9.O(A.vC,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.bp.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.r(b8*17,s*17-2),new B.r(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.j.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.L()
r.r=A.bD.gp(0)
r.c=2
r.d=A.bG
b9.ah(A.vC,new B.r(b8*18,s*18-2),r)
r=B.L()
r.r=A.bp.gp(0)
b9.O(A.vC,3,r)
c2.$5(b9,w?"V":"A",D.euV,A.bp,12)
c2.$5(b9,w?A.j.ad(o,1)+" V":""+A.j.V(o*1000)+" mA",D.euh,A.av,9.5)
return!0
case"fan":b8=B.bx(D.fbT,A.iF)
$.S()
s=B.L()
s.r=A.by.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aF(D.fcK,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.vD,22,s)
for(b8=b9.c,u=0;u<4;++u){J.br(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bW(A.aMA,18,10)
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=A.h9.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c0(s,r)
b8.restore()}b8=B.L()
b8.r=A.bs.gp(0)
b9.O(H.vD,4,b8)
b8=B.L()
b8.b=A.aa
b8.c=2
b8.r=A.cA.gp(0)
b9.O(H.vD,22,b8)
b8=B.L()
b8.b=A.aa
b8.c=0.8
b8.r=A.k0.gp(0)
b9.O(H.vD,14,b8)
return!0
case"speaker":n=B.bx(D.aSO,A.r7)
$.S()
b8=B.L()
b8.san(D.au0.aD(0,new B.a4(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eEh.aD(0,B.bV(A.cz,15)))
b9.O(A.cz,14+m,b8)
b8=B.L()
b8.r=A.cY.gp(0)
b9.O(A.cz,5,b8)
b8=B.L()
b8.r=A.bh.gp(0)
b9.O(H.a99,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bV(D.ery,6+u*6+A.j.F(b8,6))
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.b=A.aa
r.c=1.8
r.r=A.c3.j(0.9-u*0.2).gp(0)
b9.cQ(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bx(D.fcB,A.r7)
$.S()
b8=B.L()
b8.san(D.ca9.aD(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.aSQ,A.jy)
s=B.L()
s.r=A.i7.gp(0)
b9.aq(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FL(k)<500?":":" "
i=A.a.b0(A.o.v(B.df(k)),2,"0")
h=A.a.b0(A.o.v(B.fT(k)),2,"0")
b8=B.L()
b8.r=A.bc.j(0.12).gp(0)
b9.aF(D.aSQ,b8)
c2.$5(b9,i+j+h,D.euD,A.bc,21)}b8=B.L()
b8.r=A.cA.gp(0)
b9.O(D.euB,2.4,b8)
b8=B.L()
b8.r=A.cA.gp(0)
b9.O(D.erD,2.4,b8)
return!0
case"calculator":l=B.bx(D.fcg,A.ir)
$.S()
b8=B.L()
b8.san(D.c9T.aD(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.fc9,A.hD)
s=B.L()
s.r=(b7?A.a_9:D.btF).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eug,A.YM,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bx(new B.a4(r,b8,r+6,s),A.UZ)
$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=(f===3?A.c8:A.bO).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bx(D.fc4,A.ir)
$.S()
b8=B.L()
b8.r=M.mX.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.aa
b8.c=1.9
b8.r=D.ala.gp(0)
b9.aq(l,b8)
e=B.bx(D.fbV,A.iF)
if(b7){b8=B.L()
b8.san(D.cbv.aD(0,new B.a4(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.br(b8.save())
b8.clipRRect(B.n3(e),$.mH(),!0)
b8.translate(-12,-25)
L.Md(b9,D.fiY,c1,!1,b6,b6)
b8.restore()
d=A.j.F(c1*0.12,1)
b8=B.bx(D.fbS,A.hD)
s=B.L()
s.r=A.b5.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.bc.gp(0)
b9.aF(new B.a4(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.j.V(d*100)+"%",D.etj,A.c,6)}else{b8=B.L()
b8.r=D.wo.gp(0)
b9.aq(e,b8)}b8=B.bx(D.fd_,D.eEp)
s=B.L()
s.r=A.w.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bx(D.fcA,A.nZ)
$.S()
b8=B.L()
b8.san(D.car.aD(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.T2[a0]
b8=a1<0?-4:4
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.cs.gp(0)
s.c=4
s.d=A.bG
b9.ah(new B.r(a1,-4),new B.r(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.j.bg(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b8.r=(a2?A.bg:A.aL).gp(0)
b9.O(new B.r(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bV(H.vD,8+u*6+A.j.F(b8,6))
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.b=A.aa
r.c=1.8
r.r=A.fJ.j(0.9-u*0.2).gp(0)
b9.cQ(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.fcf,A.iF)
s=$.S()
r=B.L()
r.r=A.cP.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aA.j(0.5*a3).gp(0)
b8.y=A.CT
b9.O(A.vC,34,b8)}a4=new B.aH(s.r,A.aj,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.ce(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bw())
b8=B.L()
b8.r=B.ap(A.eq,D.bkm,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.aa
b8.c=1.4
b8.r=A.bV.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.br(b8.save())
b8.translate(0,-2)
b9.jq(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.a99,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.br(b8.save())
b8.translate(0,a5)
s=$.S().r
r=x.v
l=new B.aH(s,A.aj,b6,b6,B.a([],r))
l.E(new B.aZ(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bw())
q=B.L()
q.san(D.c8r.aD(0,D.fct))
b9.af(l,q)
q=new B.aH(s,A.aj,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bw())
p=B.L()
p.r=A.ft.gp(0)
b9.af(q,p)
r=new B.aH(s,A.aj,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bw())
s=B.L()
s.r=A.ft.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aDm[a0]
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.av.gp(0)
b9.O(new B.r(a1,10),7.5,s)
J.br(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.bO.gp(0)
q.c=1.6
b9.ah(A.J,new B.r(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.j.F(b8+u*8,14)
r=-4+u*5
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.aF.gp(0)
q.c=1.6
b9.ah(new B.r(-34-s,r),new B.r(-42-s,r),q)}return!0
case"kettle":b8=$.S().r
s=x.v
l=new B.aH(b8,A.aj,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.ce(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bw())
r=B.L()
r.san(D.c9y.aD(0,D.fce))
b9.af(l,r)
r=new B.aH(b8,A.aj,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bw())
q=B.L()
q.r=A.dX.gp(0)
b9.af(r,q)
s=new B.aH(b8,A.aj,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.ce(-34,-6,-18,12))
b8=B.L()
b8.b=A.aa
b8.c=5
b8.r=A.av.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cN,A.ux,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cP
b8.r=s.gp(0)
b9.aF(D.fcd,b8)
if(b7){b8=B.L()
b8.r=A.cN.j(0.3).gp(0)
b8.y=A.n4
b9.O(A.aMy,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.j.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.r(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.av.gp(0)
b9.O(D.eqB,3,b8)
return!0
case"lamp":if(b7){u=A.j.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aH($.S().r,A.aj,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bw())
s=B.L()
s.r=A.ex.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.ex.j(0.5*u).gp(0)
s.y=W.OO
b9.O(D.euH,24,s)}b8=B.bx(D.fcT,A.iF)
s=$.S()
r=B.L()
r.r=A.cP.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.cY.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.eqR,D.aML,r)
r=B.L()
r.r=A.cY.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.aML,D.euI,r)
a7=new B.aH(s.r,A.aj,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bw())
s=B.L()
s.r=(b7?A.aQ:A.k1).gp(0)
b9.af(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bh).gp(0)
b9.O(D.euL,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
a8=new B.aH(b8,A.aj,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.ce(0,22,34,-6))
r=B.L()
r.b=A.aa
r.c=2
r.r=A.hI.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.j.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b1.r=D.a5S[u].j(0.6).gp(0)
b1.y=A.Hk
b9.O(new B.r(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aH(b8,A.aj,b6,b6,b1)
b1.push(new B.aZ(q-3,p))
b2.ab()
b3=new B.aq(q+3,p)
b1.push(b3)
b4=b2.f
if(b4!=null)b3.ak(b4)
b2.ab()
b3=p+11
b4=new B.aq(q+5,b3)
b1.push(b4)
b5=b2.f
if(b5!=null)b4.ak(b5)
b2.ab()
q=new B.ce(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.bw()
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
if(b0)p=D.a5S[u]
else{p=B.ap(D.a5S[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.isS(b9,c0,c1,c2)},
fU:function fU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hha(d){var w=D.mu.h(0,d)
return(w==null?null:w.b)===D.AM},
iu7(d,e,f){return B.a6(d,!1).ce(B.vi(null,!1,!0,!0,new C.h1T(e,f),A.eU,null,A.pu,new C.h1U(),x.H))},
Ki:function Ki(d,e){this.a=d
this.b=e},
m4:function m4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1T:function h1T(d,e){this.a=d
this.b=e},
h1U:function h1U(){},
W9:function W9(d,e,f){this.c=d
this.d=e
this.a=f},
aFn:function aFn(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bw$=e
_.a9$=f
_.c=_.a=null},
dYX:function dYX(d,e){this.a=d
this.b=e},
dYY:function dYY(d,e,f){this.a=d
this.b=e
this.c=f},
dZ7:function dZ7(d,e,f){this.a=d
this.b=e
this.c=f},
dYW:function dYW(d,e){this.a=d
this.b=e},
dYV:function dYV(d,e){this.a=d
this.b=e},
dZ8:function dZ8(d,e){this.a=d
this.b=e},
dZ9:function dZ9(d){this.a=d},
dYP:function dYP(d,e){this.a=d
this.b=e},
dYO:function dYO(d,e){this.a=d
this.b=e},
dYN:function dYN(d){this.a=d},
dZ5:function dZ5(){},
dZ1:function dZ1(d){this.a=d},
dZ2:function dZ2(d){this.a=d},
dZ3:function dZ3(d){this.a=d},
dZ4:function dZ4(d){this.a=d},
dZa:function dZa(d){this.a=d},
dZ0:function dZ0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYZ:function dYZ(){},
dZ_:function dZ_(d){this.a=d},
dZ6:function dZ6(d,e){this.a=d
this.b=e},
dYU:function dYU(d,e){this.a=d
this.b=e},
dYS:function dYS(d){this.a=d},
dYT:function dYT(d){this.a=d},
dYM:function dYM(d){this.a=d},
dYR:function dYR(d,e,f){this.a=d
this.b=e
this.c=f},
dYQ:function dYQ(d){this.a=d},
bym:function bym(d,e,f){this.b=d
this.c=e
this.a=f},
ag_:function ag_(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aNT:function aNT(){},
a2d(d,e,f,g,h,i){return new C.bx8(d,e,f,g,h,i)},
bx8:function bx8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fut:function fut(){},
fuu:function fuu(){},
fuv:function fuv(){},
fuw:function fuw(){},
fux:function fux(){},
fuy:function fuy(){},
fuz:function fuz(){},
fuA:function fuA(){},
a9D:function a9D(d){this.a=d},
cns:function cns(d){this.a=d},
cnt:function cnt(){},
cnr:function cnr(d,e){this.a=d
this.b=e},
cnq:function cnq(d){this.a=d},
XM:function XM(d){this.a=d},
aH2:function aH2(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h7$=f
_.m9$=g
_.fa$=h
_.h8$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
eVU:function eVU(d){this.a=d},
eVQ:function eVQ(d){this.a=d},
eVP:function eVP(d,e){this.a=d
this.b=e},
eVS:function eVS(d,e){this.a=d
this.b=e},
eVR:function eVR(d,e){this.a=d
this.b=e},
eVT:function eVT(d){this.a=d},
byy:function byy(d,e,f){this.b=d
this.c=e
this.a=f},
Wy:function Wy(d){this.a=d},
bmv:function bmv(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h7$=d
_.m9$=e
_.fa$=f
_.h8$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
e5_:function e5_(){},
e50:function e50(){},
e4V:function e4V(d,e){this.a=d
this.b=e},
e4X:function e4X(d,e){this.a=d
this.b=e},
e4Y:function e4Y(d){this.a=d},
e4W:function e4W(d){this.a=d},
e4Z:function e4Z(d){this.a=d},
btd:function btd(d,e,f){this.b=d
this.c=e
this.a=f},
VJ:function VJ(d){this.a=d},
bm4:function bm4(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h7$=d
_.m9$=e
_.fa$=f
_.h8$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
dQg:function dQg(){},
dQh:function dQh(){},
dQb:function dQb(){},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQd:function dQd(d,e){this.a=d
this.b=e},
dQf:function dQf(d){this.a=d},
dQc:function dQc(d){this.a=d},
aKu:function aKu(d,e,f){this.a=d
this.b=e
this.c=f},
Wp:function Wp(d){this.a=d},
bmm:function bmm(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e1v:function e1v(d,e){this.a=d
this.b=e},
e1w:function e1w(d){this.a=d},
e1u:function e1u(d,e){this.a=d
this.b=e},
e1x:function e1x(d){this.a=d},
e1t:function e1t(d,e){this.a=d
this.b=e},
e1y:function e1y(d){this.a=d},
e1s:function e1s(d,e){this.a=d
this.b=e},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1r:function e1r(d,e){this.a=d
this.b=e},
e1A:function e1A(d){this.a=d},
e1q:function e1q(d,e){this.a=d
this.b=e},
e1B:function e1B(d){this.a=d},
e1p:function e1p(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1o:function e1o(d){this.a=d},
e1D:function e1D(d){this.a=d},
e1E:function e1E(d){this.a=d},
e1n:function e1n(d){this.a=d},
boo:function boo(d,e,f){this.b=d
this.c=e
this.a=f},
X8:function X8(d){this.a=d},
aGl:function aGl(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
esr:function esr(d,e){this.a=d
this.b=e},
ess:function ess(d,e,f){this.a=d
this.b=e
this.c=f},
esq:function esq(d,e,f){this.a=d
this.b=e
this.c=f},
est:function est(d){this.a=d},
esp:function esp(d){this.a=d},
esx:function esx(d){this.a=d},
esw:function esw(d,e){this.a=d
this.b=e},
esv:function esv(d,e){this.a=d
this.b=e},
esy:function esy(d,e){this.a=d
this.b=e},
esu:function esu(d,e){this.a=d
this.b=e},
esz:function esz(d){this.a=d},
Xi:function Xi(d){this.a=d},
aGG:function aGG(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eDd:function eDd(d){this.a=d},
eDe:function eDe(d){this.a=d},
eDb:function eDb(d,e){this.a=d
this.b=e},
eDc:function eDc(d){this.a=d},
eDa:function eDa(d){this.a=d},
eDf:function eDf(d){this.a=d},
eDg:function eDg(d){this.a=d},
eDh:function eDh(d){this.a=d},
eDi:function eDi(d,e){this.a=d
this.b=e},
XD:function XD(d){this.a=d},
bnC:function bnC(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eRf:function eRf(){},
eRo:function eRo(){},
eRk:function eRk(d){this.a=d},
eRj:function eRj(){},
eRl:function eRl(d,e){this.a=d
this.b=e},
eRi:function eRi(d,e){this.a=d
this.b=e},
eRm:function eRm(d){this.a=d},
eRh:function eRh(d,e){this.a=d
this.b=e},
eRn:function eRn(d){this.a=d},
eRg:function eRg(d){this.a=d},
X7:function X7(d){this.a=d},
bn6:function bn6(d,e,f,g,h,i,j,k){var _=this
_.d="dice"
_.e=2
_.f=d
_.r=0
_.w=!0
_.y=_.x=0
_.z=1
_.Q=100
_.as=0
_.at=e
_.h7$=f
_.m9$=g
_.fa$=h
_.h8$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
er6:function er6(){},
er7:function er7(){},
er_:function er_(d){this.a=d},
eqZ:function eqZ(d){this.a=d},
er0:function er0(d){this.a=d},
eqY:function eqY(d){this.a=d},
er1:function er1(d){this.a=d},
eqX:function eqX(d){this.a=d},
er2:function er2(d,e){this.a=d
this.b=e},
eqW:function eqW(d,e){this.a=d
this.b=e},
er3:function er3(d){this.a=d},
eqV:function eqV(d,e){this.a=d
this.b=e},
er4:function er4(d){this.a=d},
eqU:function eqU(d,e){this.a=d
this.b=e},
er5:function er5(d){this.a=d},
eqT:function eqT(d,e){this.a=d
this.b=e},
bfX:function bfX(d,e,f){this.c=d
this.d=e
this.a=f},
aNF:function aNF(){},
bAg:function bAg(){},
aO_:function aO_(){},
bAm:function bAm(){},
aOs:function aOs(){},
bAv:function bAv(){},
aOT:function aOT(){},
bAE:function bAE(){},
JO(d,e,f,g){var w,v,u,t,s,r,q,p=$.atQ
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mw(d,e[w],f,g)
return}for(p=B.cX(e,0,B.dD(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bQ(p,p.gJ(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mw(d,s,f,g)
else B.bN(new B.bd(1000*q),new C.cno(d,s,f,g),u)}},
ckX(d){return C.hZT(d)},
hZT(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ckX=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$ckX)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.z)
w=1
break}p=A.W.aP(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a1(p,o,n):B.T(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=B.T(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ckX,v)},
b3D(d,e){return C.hZU(d,e)},
hZU(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b3D=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3D)
case 6:s=g
w=7
return B.b(s.aC("String","ngmy_play_progress_v1_"+d,A.W.av(e,null)),$async$b3D)
case 7:u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$b3D,v)},
cno:function cno(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ijS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.or(A.j.ad(p.c,4)),"y",B.or(A.j.ad(p.d,4)),"v",p.e,"l",B.or(A.j.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.or(A.j.ad(p.as,3)),"ch",p.at,"vc",B.or(A.j.ad(p.z,3)),"s",B.or(A.j.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a3(f).k("ci.E"))
A.d.ff(l)
return A.W.av(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
ith(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.W.aP(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.t(w,"parts"))
f=J.aT(f==null?A.ct:f)
while(f.C()){u=f.gP(f)
t=i.a(u)
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.qI().am(0,s)){J.c5(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u0(a2,d,a0,a1)
a3.ass(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aJ(J.t(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aJ(J.t(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aJ(J.t(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.k6(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k6(J.t(t,"b"))
r.x=d===!0
d=B.aV(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aJ(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aJ(J.t(t,"ch"))
r.at=A.j.M(d==null?0:d)
d=B.aJ(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aJ(J.t(t,"s"))
r.ch=A.j.D(d==null?1:d,1,5.2)
J.c5(v,r)}i=g.a(J.t(w,"wires"))
i=J.aT(i==null?A.ct:i)
h=x.j
while(i.C()){q=i.gP(i)
p=h.a(q)
f=B.aJ(J.t(p,0))
o=f==null?a5:A.j.M(f)
f=B.aJ(J.t(p,2))
n=f==null?a5:A.j.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.amn(m,A.j.M(B.dF(J.t(p,1))),l,A.j.M(B.dF(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.j.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aT(h==null?A.ct:h)
while(h.C()){j=h.gP(h)
J.c5(k,A.j.M(B.dF(j)))}return new B.brl(i,k)}catch(a4){return a5}},
fLr(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fLr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aA(),$async$fLr)
case 7:r=o.aV(n.t(e.a,"ngmy_electronics_lab_v1"))
u=r
w=1
break
t=2
w=6
break
case 4:t=3
p=s.pop()
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fLr,v)},
bH2(d){return C.iuV(d)},
iuV(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bH2=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aA(),$async$bH2)
case 7:w=6
return B.b(f.aC("String","ngmy_electronics_lab_v1",d),$async$bH2)
case 6:u=1
w=5
break
case 3:u=2
r=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$bH2,v)}},D,U,Z,Ap,L,F,M,H,Aq,A_,Ar,A0,A4,As
J=c[1]
B=c[0]
A=c[2]
A5=c[120]
A1=c[146]
A6=c[152]
A2=c[150]
S=c[143]
O=c[41]
V=c[139]
A7=c[135]
A8=c[155]
A9=c[163]
Aa=c[107]
Ab=c[137]
A3=c[119]
N=c[145]
Ac=c[161]
Ad=c[153]
Ae=c[157]
Af=c[76]
W=c[141]
T=c[85]
Ag=c[88]
P=c[130]
Ah=c[114]
X=c[144]
Y=c[156]
Ai=c[105]
E=c[29]
I=c[3]
G=c[38]
K=c[109]
Aj=c[103]
Ak=c[123]
Al=c[162]
Am=c[102]
Q=c[160]
An=c[158]
R=c[131]
Ao=c[159]
C=a.updateHolder(c[18],C)
D=c[140]
U=c[154]
Z=c[148]
Ap=c[26]
L=c[28]
F=c[100]
M=c[98]
H=c[142]
Aq=c[67]
A_=c[149]
Ar=c[57]
A0=c[111]
A4=c[151]
As=c[147]
C.alq.prototype={}
C.WS.prototype={
S(){return new C.bmV(B.T(x.N,x.i),new B.au(A.aw,$.ax()),B.a([],x.X),B.a([],x.eZ),B.n_(0,null,null))}}
C.bmV.prototype={
gXe(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
this.ch.t()
this.a2()},
Q_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Q_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.ap$.d.c
if(s!=null)s.jr()
p.bP(0,A.cf)
t.m(new C.ekc(t))
t.a.toString
p=t.gXe()
w=3
return B.b(C.bCy(C.i7P(q,C.ijD(p),o,t.ay)),$async$Q_)
case 3:s=e
r=s==null?null:J.j_(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=C.il9(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ekd(t,o,r))
$.aU.x1$.push(new C.eke(t))
case 1:return B.h(u,v)}})
return B.i($async$Q_,v)},
Zl(d){return this.c3P(d)},
aYV(){return this.Zl(null)},
c3P(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Zl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.ap$.d.c
if(s!=null)s.jr()
t.f.sb3(0,o)
t.m(new C.ekp(t))
G.dA(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bCy(C.ieS(o)),$async$Zl)
case 3:r=n.a=m.isX(f)
p.b=""
if(r!=null&&!C.ijE(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.ila(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.alq(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ekq(p,t))
t.c9s(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Zl,v)},
c9s(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gXe()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.ekl(m))
t=d.d
s=B.T(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ekj(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ekm(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.ekn(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eko(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bf.j(0.1),g=B.l(16),f=B.K(A.bf.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fkv,A.bb,B.E(B.d(m.Q,l,l,l,l,l,l,A.AZ,l,l,l),1)],x.p),A.l,l,A.e,A.h,0,l,l)
else if(k==null)j=D.fLG
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.L6,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fvC,l,l,l)],v),A.l,l,A.e,A.h,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uG,B.d(u,l,l,l,l,l,l,D.fys,l,l,l),l))
w.push(A.cQ)
w.push(B.d(k.b,l,l,l,l,l,l,K.L9,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.l(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fB2,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.ig,A.cp,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lZ,l,l,l)
q=u[r]
s=s?A.c:A.aF
w.push(new B.D(A.Oe,new B.c7(A.aM,A.e,A.h,A.E,l,A.p,l,0,B.a([t,A.bn,new B.by(1,A.ba,B.d(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bf.j(0.3)
s=new B.aP(12,12)
s=B.p(l,B.d(o.a,l,l,l,l,l,l,A.VX,l,l,l),A.f,l,l,new B.o(t,l,l,new B.be(s,s,s,s),l,l,A.n),l,l,l,l,A.hm,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.u(w,B.a([A.P,new B.bK(A.a8,l,l,s,l),A.ax,B.p(l,B.d(o.b,l,l,l,l,l,l,D.fGS,l,l,l),A.f,l,l,new B.o(t,l,l,new B.be(q,q,q,q),l,l,A.n),l,l,l,l,A.bU,l,l,l)],v))}if(m.ax)w.push(D.ewd)
j=B.c9(B.x(w,A.E,l,A.e,A.h,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.ajD(B.p(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bDu,A.ez,l,l,1/0),A.b0,A.ie),B.E(C.hm8(m.gXe(),l,l,m.e),1)],w),A.l,l,A.e,A.h,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dY("Ask about it",i,new C.ekt(m),l,A.bf,l),new E.dY("Invent something new",!i,new C.eku(m),l,A.bf,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dwE[p]
i.push(new E.dY(n,!1,new C.ekv(m,n),l,A.bf,l))}f.push(new E.fd(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.deg[p]
i.push(new E.dY(r,!1,new C.ekw(m,r),l,A.bf,l))}f.push(new E.fd(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(16),A.a1),l,A.eV,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kp,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ekx(m,k),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.dj,!0,A.a7,l,A.ao,l,A.VM,l,l),1)
h=m.at
v=h&&j?D.bTy:A.e9
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.ae,new E.fD(v,j,new C.eky(m,k),A.bf,l)],w),A.l,l,A.e,A.h,0,l,l))
return E.lE(A.bf,A.f6,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.N,0,A.p))}}
C.GW.prototype={}
C.vp.prototype={}
C.Xe.prototype={
S(){return new C.aGA(A.J,A.J,A.az,B.aR(x.S),$,A.bC,0,B.a([],x.X),null,null)}}
C.aGA.prototype={
gb_e(){var w,v,u,t=this,s=D.II[t.cx],r=D.T4[t.cy],q=D.DS[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dZ(w,w.r,B.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aBD[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cF(p,0,new C.ezx())},
ga3O(){return D.II[this.cx].d/this.gb_e()},
gaR9(){return 0.1*(D.II[this.cx].d/0.9)/D.T4[this.cy].d},
Y(){this.a3()
this.mk()
C.ckX("rocket_lander").bG(new C.ezR(this),x.k)},
c9B(){var w=this
w.ay=A.j.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cR.ai()*0.6
w.f=new B.r(0.15+A.cR.ai()*0.7,0.08)
w.r=new B.r((A.cR.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mE(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.ezS())
return}w=D.tt[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.j.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.r(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3O()
v=v.a5(0,new B.r(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaR9())}if(m.dy){t=m.r
v=v.aJ(0,t.aL(0,t.gcJ()*6*D.aDG[m.d]))}t=m.r=m.r.a5(0,v.aL(0,d))
s=m.f=m.f.a5(0,t.aL(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.r(-t.a*0.4,t.b)
t=new B.r(A.j.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.r(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.DS[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b3D("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.JO("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3O()/(D.tt[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.j.ad(m.ga3O()/(D.tt[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dA(80,"",500,0,0.6,"noise")
B.fN()}}if(m.Q&&m.x>0&&A.o.F(A.j.bg(m.CW*20),2)===0)G.dA(90,"",70,0,0.12,"noise")
m.m(new C.ezT())},
aht(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fxW,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dY(e[w].a,f.$1(w),new C.ezz(this,g,w),v,h,v))
return new B.D(A.eO,B.x(B.a([u,A.cQ,B.bZ(A.bI,s,A.br,v,6,6)],t),A.E,v,A.e,A.h,0,A.p),v)},
bIz(d){var w,v,u,t,s=this,r=null,q=s.ga3O()/(D.tt[s.d].b/9.81*0.28)>=1,p=A.j.V(1/s.gaR9()),o=D.aDG[s.d],n=B.l(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.m(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.ax,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.ac_,r,r,r),A.T,s.aht("ENGINE: "+D.II[s.cx].b,D.II,new C.ezo(s),new C.ezp(s),A.cN),s.aht("FUEL TANK: "+D.T4[s.cy].b,D.T4,new C.ezq(s),new C.ezr(s),A.bc),s.aht("LANDING GEAR: "+D.DS[s.db].b,D.DS,new C.ezs(s),new C.ezt(s),A.aG),s.aht("EXTRAS (tap to add)",D.aBD,new C.ezu(s),new C.ezv(s),A.bf)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.h3G)
o=(q?A.bc:A.bW).j(0.14)
w=B.l(12)
v=A.j.ad(s.gb_e(),2)
u=A.j.ad(s.ga3O()/(D.tt[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.j.V(D.DS[s.db].d*100)+".",r,r,r,r,r,r,D.fyC,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.ig,A.bU,r,r,r))
m.push(A.T)
m.push(new B.bK(A.z,r,r,new E.fD(A.oO,"Launch",new C.ezw(s),A.bc,r),r))
return B.as(B.p(r,B.c9(B.x(m,A.E,r,A.e,A.N,0,A.p),A.t,r,A.y,r,r,A.bS,r,r,A.ah),A.f,r,A.m3,new B.o(D.bta,r,l,n,r,r,A.n),r,r,r,A.bU,r,r,r,r),r,r,r)},
b0q(d,e,f,g){var w=null,v=f?A.cN:A.c.j(0.1),u=B.l(18),t=B.K(A.aT,A.r,1)
return B.mQ(A.iT,B.p(w,B.W(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.ezl(e),new C.ezm(e),w,w,w,w,new C.ezn(e))},
b0p(d,e,f){return this.b0q(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cm(new C.ezK(s,D.tt[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tt[w].a:"\ud83d\udd12"
o.push(new E.dY(v,s.d===w,new C.ezL(s,w),r,D.tt[w].c,r))}v=B.a([s.b0p(F.arb,new C.ezM(s),s.y),A.bb,s.b0q(A.v2,new C.ezN(s),s.Q,130),A.bb,s.b0p(A.Q3,new C.ezO(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aG:A.c.j(0.1)
t=B.l(18)
A.d.u(v,B.a([A.bb,B.az(r,B.p(r,D.bXM,A.f,r,r,new B.o(u,r,B.K(A.aT,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ezP(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lE(A.cN,A.f6,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fd(o,"WORLD",r),B.A(v,A.l,r,A.b8,A.h,0,r,r)],p),A.l,r,A.e,A.N,0,A.p))}}
C.bjP.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tt[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.S(),f=B.L(),e=l.c,d=B.ap(I.a_L,e,0.25)
d.toString
f.san(new B.a7(A.aZ,A.b4,A.x,B.a([F.ai8,d],x.O),n,n).aD(0,new B.a4(0,0,i,h)))
a0.aF(new B.a4(0,0,i,h),f)
w=new B.e_()
w.cU(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.r(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aH(g.r,A.aj,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e_()
s.cU(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.ak(f)
t.ab()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bw())
h=$.S()
g=B.L()
g.r=B.ap(e,A.w,0.6).gp(0)
a0.af(t,g)
q=B.bW(new B.r(m.ax*k,u+10),8,m.ay*k)
g=B.bx(q,A.jy)
e=B.L()
e.r=A.bg.gp(0)
a0.aq(g,e)
e=B.bx(q.cq(2),A.nZ)
g=B.L()
g.b=A.aa
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.aq(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.br(f.save())
f.translate(g.a*k,g.b*j)
a0.jq(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cN.j(0.6).gp(0)
m.y=W.OO
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aH(k,A.aj,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bw())
m=B.L()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aH(k,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bw())
m=B.L()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aH(m,A.aj,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.ce(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.ce(-14,-10,0,-26))
o.E(new B.bw())
k=B.L()
k.san(F.au3.aD(0,D.fc1))
a0.af(o,k)
k=B.L()
k.r=A.aG.gp(0)
a0.O(H.vD,5,k)
k=new B.aH(m,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bw())
j=B.L()
j.r=A.aA.gp(0)
a0.af(k,j)
i=new B.aH(m,A.aj,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bw())
m=B.L()
m.r=A.aA.gp(0)
a0.af(i,m)
f.restore()},
aE(d){return!0}}
C.aOA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAx.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bAt()}}
C.aUC.prototype={}
C.a4z.prototype={}
C.bcN.prototype={}
C.VI.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eu(["skin"],x.N),o=new Float32Array(0)
return new C.aF1(w,v,u,t,s,r,q,new B.cx(null,x.A),p,D.Ma,D.Ma,A.az,A.cR,o,new Int32Array(0),$,A.bC,0,B.a([],x.X),null,null)}}
C.aF1.prototype={
Y(){var w=this
w.a3()
w.mk()
w.as=new C.c7h(w.gciJ())
new C.dQ9(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bzv()},
ciK(d){var w,v=this
if(v.c==null)return
w=J.a8(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f9(0,B.J(["t","init","data",$.hwl],x.N,x.z))
v.at=!0
v.ay=""
v.aBf()
break
case"parts":v.m(new C.dPK(v))
break
case"pick":v.m(new C.dPL(v,d))
break
case"shot":v.ajn(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dPM(v))
break}},
aBf(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.azu[q.cx]
v=new C.dPN()
u=q.ch
u=B.C(u,B.a3(u).k("ci.E"))
A.d.ff(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cy,"bpm",A.j.V(q.k4),"spin",q.go],t,x.cK)
r=A.W.av(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.f9(0,u)}},
ajn(d){return this.czL(d)},
czL(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ajn=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cK.aN(A.a.b4(d,A.a.cn(d,",")+1))
w=6
return B.b(B.axh(B.a([B.cHj(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$ajn)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.q).f.T(I.aVa)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ajn,v)},
aAE(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mE(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.j.bg(w)!==A.j.bg(v.p1)){E.XF("kick",0,0.4)
v.UR(170,new C.dQa())}v.p1=w
return},
aeX(d){var w,v,u,t,s=this
s.m(new C.dPO(s,d))
if(d==null){s.fy=D.Ma
s.fr=1
w=s.as
if(w!=null)w.f9(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dPP(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aBf()
w=s.as
if(w!=null)w.f9(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cCe(t,d)
return},
cCe(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.XF("kick",0,0.8)
this.UR(260,new C.dPQ())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dA(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UR(w*70,new C.dPR(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dA(110,"",360,0.7,0.3,"saw")
else E.hbu("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dA(210+e.length*4,"",80,0.6,0.55,"tri")
G.dA(2400,"",20,0,0.3,v)
break
case"muscle":G.dA(70,"",150,1,0.6,"sine")
break
case"vessel":G.dA(300,"",380,0.4,0.22,v)
E.XF("kick",0,0.3)
break
default:E.hbu("organic",2+A.o.F(e.length,6),200,0.4)}},
cGW(d){this.m(new C.dPT(this,d))},
b0J(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aAE(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.C(o,o.$ti.k("ci.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
c_u(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dPH(u,w,d))
v=x.t
C.JO("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UR(1100,new C.dPI(u))
return}if(d==null){if(u.cy!=null)u.aeX(null)
return}u.aeX(d)},
c36(d,e){var w,v=this,u=null,t=B.l(18),s=B.K(A.c3.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.ftZ,u,u,u)}else if(d==null||e==null)w=D.fJ2
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hu,u,u,u),A.cQ,B.d(e.b,u,u,u,u,u,u,K.L9,u,u,u)],w),A.E,u,A.e,A.N,0,A.p),1),B.aI(u,u,u,u,D.c_o,u,u,u,new C.dPJ(v),u,u,u,u,"Back to the whole body",A.cg)],w),A.E,u,A.e,A.h,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(I.YW,u,s,t,u,u,A.n),u,u,u,u,S.amF,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dI_.h(0,g)
i.aBf()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.doJ
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aAE(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,I.oR,h,h,h,new C.dQ_(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bM:B.BW(h,A.pS,p))}p=i.ax
o=p?0:1
q.push(new B.dt(p,B.xv(B.p(A.z,B.x(D.dyd,A.l,h,A.e,A.N,0,A.p),A.f,h,h,D.b81,h,h,D.hwh,h,h,h,h,h),A.b0,A.n0,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b1,A.t,q,h),1),new B.D(F.amm,i.c36(g,f),h)],v),A.l,h,A.e,A.h,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dfT[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dY(l,o,new C.dQ0(i,n),n.c,A.c3,h))}p=B.a([new E.fd(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.dY(k,k===i.cy,new C.dQ1(i,k),h,A.aQ,h))}p.push(new E.fd(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iT(A.bW,""+A.j.V(o)+" beats/min","Heart rate",180,40,new C.dQ2(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G4(D.azu[j],i.cx===j,new C.dQ3(i,j),!1,h))
p.push(new E.fd(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dY("Spin",o,new C.dQ4(i),D.aq9,A.aG,h),new E.fD(A.oJ,"Reset view",new C.dQ5(i),A.c,h),new E.dY(l,m,new C.dQ6(i),A.I1,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.dY("Heartbeat sound",i.ok,new C.dQ7(i),A.oN,A.bW,h))
p.push(new E.fd(v,h,h))
return E.lE(A.c3,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.N,0,A.p))}}
C.aND.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.aNE.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bzu()}}
C.c7h.prototype={
kW(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hCH
$.hCH=v+1
u="ngmy-body-viewer-"+v
$.xr()
$.q_().pk(u,new C.c7i(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fC(v,"message",new C.c7j(t),!1,x.gA)
t.b=u},
f9(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Ry(w.contentWindow)
if(w!=null)J.ajs(w,e,"*")}}catch(v){}}}
C.yI.prototype={}
C.D1.prototype={}
C.nN.prototype={}
C.bdy.prototype={}
C.VP.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aF3(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.J,A.J,B.aR(u),$,A.bC,0,B.a([],x.X),null,null)}}
C.aF3.prototype={
Y(){var w=this
w.a3()
w.mk()
w.adV()
$.aU.x1$.push(new C.dRP(w))},
adV(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adV=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$adV)
case 6:q=e.tW("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dRt(s,r))
u=1
w=5
break
case 3:u=2
o=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adV,v)},
aeg(d){return this.c78(d)},
c78(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aeg=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aA(),$async$aeg)
case 6:r=f
q=s.cx
p=B.a3(q).k("ka<ci.E,n>")
q=B.C(new B.ka(q,new C.dRw(),p),p.k("M.E"))
r.aC("StringList","ngmy_circuit_passed_v1",q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aeg,v)},
azj(d,e,f,g){var w="c"+this.y++,v=new C.D1(w,e,f,g)
this.d.n(0,w,v)
return v},
mU(d,e,f){return this.azj(0,e,f,0)},
adf(d,e){var w
if(D.Aj.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a5(0,new B.r(-36,w))},
um(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aVl(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fa$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dn(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cZy[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.um(p,0)&&n.um(p,1)
break
case"or":p=q.a
o=n.um(p,0)||n.um(p,1)
break
case"xor":p=q.a
o=n.um(p,0)!==n.um(p,1)
break
case"nand":p=q.a
o=!(n.um(p,0)&&n.um(p,1))
break
case"nor":p=q.a
o=!(n.um(p,0)||n.um(p,1))
break
case"not":o=!n.um(q.a,0)
break
default:o=n.um(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bSY(){return this.aVl(null)},
mE(d){var w,v,u,t,s,r,q,p,o,n=this
n.bSY()
if(!n.ax)return
for(w=n.d,w=new B.b7(w,B.a3(w).k("b7<2>")).gae(0),v=new B.eJ(w,new C.dRQ()),u=n.f,t=n.w,s=0;v.C();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fa$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fa$)
o=s+1
G.dA(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
azk(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
ml(d,e){var w=this.x
return new B.r(d*w.a,e*w.b)},
avt(d){var w=this
if(w.x.A(0,A.az)){$.aU.x1$.push(new C.dRr(w,d))
return}w.m(new C.dRs(w,d))},
cCw(d){this.m(new C.dRx(this,d,$.bHp()[d]))},
cbW(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bHp()[a0]
v=d.d
u=B.a3(v).k("b7<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b7(v,u),new C.dRm(),t),s)
A.d.b_(r,new C.dRn())
q=B.C(new B.Y(new B.b7(v,u),new C.dRo(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dRp(d,w))
return}u=d.r
p=B.dL(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dA(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.hc(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aVl(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lm(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aM(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.u(0,p)
d.m(new C.dRq(d,o,a0))},
aAa(d){var w,v,u,t,s=this.d,r=B.a3(s).k("b7<2>")
s=B.C(new B.b7(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bQ(s,s.gJ(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cla(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("b7<2>")
r=B.C(new B.b7(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bQ(r,r.gJ(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c3_(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dn(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.Aj.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.adf(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bRH(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.adf(p,o)
j=n/24
i=k.a
h=Math.max(40,Math.abs(i-l)*0.5)
k=k.b
g=1-j
f=g*g*g
e=3*g
d=e*g*j
e=e*j*j
j=j*j*j
i=l*f+(l+h)*d+(i-h)*e+i*j-v
j=m*f+(m+0)*d+k*e+k*j-u
if(Math.sqrt(i*i+j*j)<14)return s}}return null},
cbY(d){var w,v,u,t=this,s=t.aAa(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.eZ()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
G.dA(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dRy())
return}u=t.bRH(d)
if(u!=null)t.m(new C.dRz(t,u))
else t.m(new C.dRA(t))},
ay6(d){return this.c67(d)},
c67(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ay6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aAa(d)
if(s==null){w=1
break}B.jr()
t.m(new C.dRv(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ay6,v)},
bEn(d){if(this.x.A(0,A.az))return
this.m(new C.dRl(this,d,A.cR))
B.eZ()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bHp()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.W(i.ax?A.oN:X.tp,A.ab,h,h,h,21),h,h,h,new C.dRJ(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.l(16)
s=A.cr.j(0.14)
r=B.K(A.cr.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.ft7,h,h,h),B.d(w.b,h,h,h,h,h,h,A.Wb,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.ll,B.d(p,h,h,h,h,h,h,B.m(h,h,i.CW?A.bc:A.eZ,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.h,0,A.p),1),B.bI(D.fUI,h,i.gcbV(),B.bo(A.cr,h,h,h,h,h,h,h,h,h,h,A.cg))],g),A.l,h,A.e,A.h,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,T.Om,D.bEc,h,h,1/0))}u.push(B.E(B.cm(new C.dRK(i)),1))
if(f!=null){t=B.l(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.Aj.h(0,r).a+": "+D.Aj.h(0,r).e,h,h,h,h,h,h,A.u0,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a0V,A.bU,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.h,0,A.p)
t=B.a([],g)
for(s=D.Aj.gdP(D.Aj),s=s.gae(s);s.C();){r=s.gP(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.az(h,B.p(h,B.x(B.a([B.W(p.b,o,h,h,h,20),A.bF,B.d(p.a,h,h,h,h,h,h,D.aXb,h,h,h)],g),A.l,h,A.e,A.N,0,A.p),A.f,h,h,new B.o(n,h,new B.bG(m,m,m,m),new B.be(q,q,q,q),h,h,A.n),h,h,h,A.f0,Am.Oj,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dRL(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dti[l]
s.push(new E.fD(A.Q4,k.b,new C.dRM(i,k),A.cr,h))}s.push(new E.fD(I.wR,"Clear",new C.dRN(i),A.bW,h))
r=B.a([],g)
for(j=0;q=$.bHp(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ed:A.lR
o=i.ay
n=i.cx.q(0,j)?A.bc:A.bt
r.push(new E.dY(q.a,o===j,new C.dRO(i,j),p,n,h))}return E.lE(A.cr,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fd(t,"PARTS",h),new E.fd(s,"TRY",h),new E.fd(r,"TASKS",h)],g),A.l,h,A.e,A.N,0,A.p))}}
C.bdQ.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.S()
w=B.L()
w.r=D.ago.gp(0)
a5.aF(new B.a4(0,0,0+a3,0+a4),w)
v=B.L()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.O(new B.r(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.I)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.adf(l,o.c)
h=s.h(0,n)===!0
n=$.S()
g=B.a([],r)
f=new B.aH(n.r,A.aj,a2,a2,g)
g.push(new B.aZ(j,k))
f.ab()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.kn(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.ak(n)
f.ab()
if(h){n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.aa
n.c=9
n.r=A.bt.j(0.28).gp(0)
n.y=N.oA
a5.af(f,n)}n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.aa
n.c=3.2
n.d=A.bG
n.r=(h?A.ex:A.by).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a5(0,D.JS)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aH($.S().r,A.aj,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.kn(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.aa
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dn(q,q.r,q.e);a3.C();)this.cbX(a5,a3.d)},
cbX(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.Aj.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bW(a0.c,64,64)
s=B.bx(t,A.jQ)
r=w.cy===v
q=s.eD(A.cz)
$.S()
p=B.L()
p.r=A.w.j(0.55).gp(0)
p.y=A.n4
d.aq(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.san(new B.bS(A.z,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aD(0,B.bV(a0.c,52)))
d.O(q,52,p)}q=s.eD(A.cJ)
p=B.L()
o=e.c
p.r=B.ap(o,A.w,0.65).gp(0)
d.aq(q,p)
n=u?0.35:0
q=B.L()
p=B.ap(o,A.c,0.1+n)
p.toString
m=B.ap(o,A.w,u?0.2:0.45)
m.toString
q.san(new B.a7(A.aZ,A.b4,A.x,B.a([p,m],x.O),g,g).aD(0,t))
d.aq(s,q)
q=B.L()
q.b=A.aa
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.oL:D.bU5}else l=e.b
k=C.hdl(B.lm(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aJ(0,new B.r(p/2,q.gba(q)/2)))
j=C.hdl(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.a5(0,new B.r(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hdl(f,9,u?A.ex:A.bV,g,g,A.u)
i.a4(d,a0.c.a5(0,new B.r(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b1n(d,w.adf(a0,h),o)
this.b1n(d,a0.c.a5(0,D.JS),o)},
b1n(d,e,f){var w
$.S()
w=B.L()
w.r=D.ago.gp(0)
d.O(e,8.5,w)
w=B.L()
w.b=A.aa
w.c=2.2
w.r=f.gp(0)
d.O(e,8.5,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.2,w)},
aE(d){return!0}}
C.aNI.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAh.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bzz()}}
C.Oj.prototype={
S(){return new C.aFk(B.n_(0,null,null))}}
C.Lj.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.B5.prototype={}
C.aFk.prototype={
Y(){this.a3()
B.bN(A.qA,C.is1(),x.H)},
cc2(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dY0(w,e))},
c4W(){var w=this
w.e.t()
w.e=B.n_(w.f,null,null)
w.m(new C.dY_(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.P(d).ax.a===A.dm?A.c:A.c4
return B.oR(t,B.c4(v,s,t?new C.bub(w.e,w.gcc1(w),new C.dY1(d),v):new C.aJC(u,new B.bf(u.b,x.W)),v,!1,!1,v,!1),new C.dY2(w,u),x.K)}}
C.bvP.prototype={}
C.bub.prototype={
b1o(d,e,f){var w=null,v=B.d(d,w,w,w,w,w,w,B.m(w,w,f?A.bA:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(S.a1j,B.x(B.a([v,A.bF,B.d(e,w,w,w,w,w,w,B.m(w,w,f?A.cy:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.h,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.P(d).ax.a===A.dm,q=B.aE(d,A.dD,x.w).w,p=B.aI(s,s,s,s,B.W(A.eK,r?A.bA:A.ab,s,s,s,20),s,s,D.hwK,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.l(14),A.IL,s,A.n)
else{w=B.a([A.aG.j(0.22),A.aG.j(0.06)],x.O)
v=B.l(14)
w=new B.o(s,s,B.K(A.aG.j(0.75),A.r,1.6),v,B.a([new B.ab(0,A.G,A.aG.j(0.22),A.J,8)],x.V),new B.a7(A.ay,A.aC,A.x,w,s,s),A.n)}v=B.d("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.m(s,s,r?A.bA:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.as(B.p(s,B.x(B.a([v,B.d("Play, make things, keep them.",s,s,s,s,s,s,B.m(s,s,r?A.cy:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.N,0,A.p),A.f,s,s,w,s,s,D.hwP,s,A1.ana,s,s,s),s,s,s),1),A.tT],u),A.l,s,A.e,A.h,0,s,s)
v=t.b1o("STUDIOS","Play, make things, and keep what you make",r)
$.bHq()
return B.bm(!1,B.x(B.a([B.E(B.w5(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nK(new B.Q(8,q.r.b+6,8,4),new B.m6(w,s),s),new B.m6(v,s),new B.nK(A.hZ,B.PY(new B.oU(new C.f9C(d),9,!0,!0,!0,0,B.tr(),s),D.aV_),s),new B.m6(t.b1o("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nK(D.bEl,B.PY(new B.oU(new C.f9D(t),6,!0,!0,!0,0,B.tr(),s),D.aV_),s)],u)),1)],u),A.l,s,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!1)}}
C.agi.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.P(d).ax.a===A.dm){w=B.l(20)
v=(A.o.ar(o.c,3)&1)===0
u=B.a7w(v?A.aG:A.bf,20)
v=v?A.aG:A.bf
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eC(B.x(B.a([new B.VN(v,44,m.c,n,n),A.P,B.d(m.a,n,2,A.a2,n,n,n,D.fzk,A.K,n,n),A.cQ,B.d(m.b,n,2,A.a2,n,n,n,D.fC9,A.K,n,n)],x.p),A.l,n,A.b8,A.h,0,A.p),n,u,n,A.CO,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.l(20)
v=B.l(20)
u=B.ap(K.mc,l,0.3)
u.toString
t=x.O
u=B.a([u,D.ajH],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ab(-4,A.G,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.w,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ab(0,A.G,l.j(0.5),A.J,12)],r)
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eC(B.x(B.a([B.p(n,B.W(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a7(A.ay,A.aC,A.x,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.P,B.d(m.a,n,2,A.a2,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cQ,B.d(m.b,n,2,A.a2,n,n,n,B.m(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.b8,A.h,0,A.p),n,new B.o(n,n,s,v,q,new B.a7(A.ay,A.aC,A.x,u,n,n),A.n),n,A.CO,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.af9.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.P(d).ax.a===A.dm,h=(A.o.ar(this.c,3)&1)===0?A.aG:A.bf,g=B.l(20)
if(i)w=B.a7w(h,20)
else{w=B.l(20)
v=B.ap(K.mc,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.ajH],x.O)
v=new B.o(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ab(0,A.G,A.w.j(0.4),A.cz,12)],x.V),new B.a7(A.ay,A.aC,A.x,v,l,l),A.n)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aP(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.VO(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ab(0,A.G,A.w.j(0.45),A.a9j,0)],s)
u.push(B.p(l,B.W(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.be(o,o,o,o),m,new B.a7(A.a5,A.a8,A.x,n,l,l),A.n),l,17,l,new B.Q(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.N,0,A.p)
if(i)t=A.bA
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.d(k.b,l,2,A.a2,l,l,l,B.m(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aG(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eC(B.x(B.a([new B.a5(58,l,u,l),A.T,t,A.ax,B.W(A.Dt,i?B.VO(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.b8,A.h,0,A.p),l,w,l,A.CO,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.Rf.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bM(new B.o(h,j,j,B.l(22),j,j,A.n),A.bi,j,j),j,j,2,2,8,j)
u=B.l(22)
t=k.y
s=x.V
r=B.a([new B.ab(0,A.G,A.w.j(0.55),A.JP,26),new B.ab(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.l(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bR(0,new B.bM(new B.o(j,j,j,j,j,new B.a7(A.ay,A.aC,A.x,B.a([p,o,n,i],m),D.dzf,j),A.n),A.bi,j,j),0,0,0),B.ao(j,new B.bM(new B.o(j,j,j,j,j,new B.a7(A.aZ,A.b4,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bi,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bR(0,B.b4(j,j,j,new C.bvc(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ab(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.W(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fvs,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.ax,B.d(i,j,1,A.a2,j,j,j,B.m(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a9,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.KG)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.l(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.hc,B.A(B.a([s,A.eu,B.E(B.x(p,A.E,j,A.e,A.N,0,A.p),1)],l),A.l,j,A.e,A.h,0,j,j),j))
i=k.x
if(i>0)m.push(B.bR(0,new B.dt(!0,B.ea(j,A.w.j(A.j.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.l(22)
m.push(B.bR(0,new B.dt(!0,new B.bM(new B.o(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bi,j,j),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bR(0,new B.bM(new B.o(j,j,j,u,r,j,A.n),A.bi,B.bu(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.bvc.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a4(r,-10,s,w)
u=d.c
J.br(u.save())
u.translate(v.gbE().a,v.gbE().b)
d.jq(0,0.35)
t=B.bW(A.J,(w- -10)*1.6,s-r)
$.S()
s=B.L()
s.san(new B.a7(A.a5,A.a8,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aD(0,t))
d.aF(t,s)
u.restore()},
aE(d){return d.b!==this.b}}
C.buI.prototype={
B(d){var w=null,v=B.l(22),u=B.a([D.br0,D.aiL],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ab(0,A.G,A.w.j(0.5),A.kE,24)],x.V),q=B.l(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,new B.bM(new B.o(w,w,s,v,r,new B.a7(A.ay,A.aC,A.x,u,w,w),A.n),A.bi,B.bu(q,B.b4(B.as(B.W(A.jL,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bcv(p,w),A.az),A.aq),w),w)}}
C.bcv.prototype={
a4(d,e){var w,v,u,t,s,r
$.S()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.r(s,0),new B.r(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.r(0,r),new B.r(u,r),w)
u=e.ej(A.J)
$.S()
t=B.L()
t.b=A.aa
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aE(d){return!1}}
C.aJC.prototype={
S(){return new C.aJD(new B.cx(null,x.A),null,null)}}
C.aJD.prototype={
guM(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,D.bBB,null,1,null,v)
w.cK(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
ga_M(){var w,v=this,u=v.e
if(u===$){w=B.bn(null,A.hb,null,1,null,v)
w.f1(0,!0)
v.e!==$&&B.bD()
v.e=w
u=w}return u},
gazl(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcc_(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaYD(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaZq(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gbaj(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a3()
var w=this.guM()
w.dm()
w.dV$.I(0,this.gcCf())},
cCg(){var w,v,u,t,s,r,q,p=this,o=p.guM().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gazl().a){case 0:w=D.nU
break
case 1:w=D.vm
break
case 2:w=D.a5V
break
case 3:w=D.nU
break
case 4:w=D.dlo
break
case 5:w=D.vm
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.ae1)r=0.09
else r=s===D.ae2?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dA(260+90*v,"",260,1.6,0.18,"tri")
u=D.ccF[v]
E.mw("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JO("bell",D.clw,1400,0.35)}}p.ax=o},
t(){this.guM().t()
this.ga_M().t()
this.bBp()},
afn(){var w=this
w.guM().d1t(0,B.dw(0,0,0,A.j.V(11e3/w.Q),0,0))
w.m(new C.f9i(w))},
cnf(){this.guM().bQ(0)
this.m(new C.f9h(this))},
afm(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$afm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaZq(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b6,A.aP),$.ax()))}m=B.a([],m)
for(t=u.gbaj(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b6,A.aP),$.ax()))}o=B.C(u.gaYD(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bT(K.mc,null,new C.f9g(u,l,m,o),t,!0,!0,!0,A.lX,!1,!1,x.H),$async$afm)
case 2:l=B.C(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.ax()
n.R$=0}return B.h(null,v)}})
return B.i($async$afm,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gazl(),f=i.a.c,e=f.b,d=i.gcc_(),a0=new C.B5(g,e,f.c,d,i.gaYD(),i.gaZq(),i.gbaj())
f=B.ap(A.d.gH(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=B.a([B.aI(h,h,h,h,B.W(i.at?A.oN:X.tp,A.ab,h,h,h,21),h,h,h,new C.f9q(i),h,h,h,h,"Sound",h),B.aI(h,h,h,h,D.c35,h,h,h,i.gcc0(),h,h,h,h,"Edit words and pictures",h),B.aI(h,h,h,h,I.oR,h,h,h,new C.f9r(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c6(i.ga_M(),new C.f9s(i,a0),h),B.cm(new C.f9t(i,a0))],g)
u=i.as
t=u?i.gcne():i.gcc3()
u=u?D.bTj:A.tm
s=B.ap(A.d.gH(d),A.d.gal(d),0.4)
s.toString
t=B.A(B.a([B.aI(h,h,h,h,B.W(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cg),B.E(B.c6(i.guM(),new C.f9u(i,a1,a0),h),1),B.aI(h,h,h,h,D.c_e,h,h,h,new C.f9v(i),h,h,h,h,"Replay",A.cg)],g),A.l,h,A.e,A.h,0,h,h)
s=i.Q
u=A.j.ad(s,1)
r=B.ap(A.d.gH(d),A.d.gal(d),0.4)
r.toString
s=E.iT(r,u+"x","Speed",2.5,0.4,new C.f9w(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dwd[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ap(A.d.gH(d),A.d.gal(d),0.4)
r.toString
u.push(new E.dY(p.b,o===p.a,new C.f9x(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.cd4[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gH(o).A(0,A.d.gH(n))?A.c:A.aT
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gH(o).A(0,A.d.gH(n))?2.5:1,A.r,-1)
d.push(B.az(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bG(j,j,j,j),h,h,new B.a7(A.ay,A.aC,A.x,n,h,h),A.a6),h,l,h,I.amb,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f9y(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lE(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.en(new B.an(A.a0,h,A.b1,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fd(u,"STYLE",h),new E.fd(d,"THEME",h)],g),A.l,h,A.e,A.N,0,A.p))},
bDy(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nU[r]
p=A.j.D((1-A.ec.az(0,A.j.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.j.D(p/1.5707963267948966,0,1)
q=D.nU[r]
n=q+0.12
m=A.j.D((a0-n)/(q+0.2-n),0,1)
n=D.nU[r]
q=n-0.01
q=A.j.D((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.k5(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nU[r]
h=i+0.1
if(A.j.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nU[r]
h=i+0.1
h=A.j.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nU[r]
h=i+0.1
h=A.j.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cK(0,r*118,0,f,f,f,new B.kK(q,new B.iV(n,f,A.aZ,!0,f,new C.Rf(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nU[r]
u=v-0.02
g=A.j.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nU[r]
t=v+0.12
e.push(new B.cK(0,r*118-3-2,0,f,f,4,new B.mK(new C.btN(u,g,1-A.j.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bUx(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vm[r]
p=A.qy.az(0,A.j.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vm[r]
m=q+0.15
l=A.j.D((a0-m)/(q+0.25-m),0,1)
m=D.vm[r]
q=m-0.03
q=A.j.D((a0-q)/(m+0.01-q),0,1)
m=B.dr()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.k7(n,n,n,1)
m.fE(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Rf(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fE(3.141592653589793)
k=new B.iV(k,f,A.z,!0,f,new C.buI(a2,108,w,f),f)}e.push(new B.cK(0,r*130,0,f,f,f,new B.kK(q,new B.iV(m,f,A.z,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cHp(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a5V[w]
l.push(A.cj.az(0,A.j.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bR(0,B.b4(n,n,n,new C.bxi(d.d,l,D.aBc,m,C.bua(e,0.4,0.62),f,C.bua(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hdT(g,w)
q=D.aBc[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cK(r,s-q*m*p+12,n,n,t,n,new B.kK(o,B.W(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hdT(g,w)
r=D.a5V[w]
q=r+0.15
v.push(new B.cK(s,l,n,n,t,n,new B.kK(A.j.D((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.Wn,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bJR(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cj.az(0,C.bua(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bR(0,B.as(B.dP(B.b4(f,f,f,new C.btc(A.d.gH(a1),C.bua(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eqq),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.j.D((a3-l)/(0.12+m-l),0,1)
j=A.dH.az(0,A.j.D((o-0.7)/0.3,0,1))
l=B.dr()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fE(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.k7(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.j.F(r,1):-1
w.push(new B.y(o,new B.cK(0,0,0,0,f,f,new B.cj(A.z,f,f,new B.kK(k*(0.45+0.55*o),B.dP(new B.iV(l,f,A.z,!0,f,new C.Rf(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.r(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.f99())
A.d.u(a0,new B.N(w,new C.f9a(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cbZ(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vm[q]
o=A.j.D((a2-p)/(p+0.22-p),0,1)
n=A.nk.az(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vm[q]
m=A.j.D((a2-m)/(m+0.02-m),0,1)
l=D.aDj[q]
k=B.dr()
k.n5(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k7(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vm[q]
g=h+0.1
g=A.j.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cK(0,0,0,0,e,e,new B.cj(A.z,e,e,new B.kK(m,B.dP(new B.iV(k,e,A.z,!0,e,new C.Rf(d,92,w,p,j,i,0,g*s,h,e),e),new B.r(0,l)),e),e),e))
l=D.vm[q]
h=l+0.02
f=A.j.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cK(0,0,0,0,e,e,new B.cj(A.z,e,e,B.dP(new B.mK(new C.bdb(w,f,q,e),e,new B.av(r,212),e,e),new B.r(0,D.aDj[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bGu(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.r(-b0,-150),new B.r(b0,-40),D.equ],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nU[r]
p=A.j.D((a8-q)/(q+0.2-q),0,1)
o=A.cj.az(0,p)
q=D.aDu[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nU[r]
f=g+0.2
e=A.j.D((a8-f)/(g+0.3-f),0,1)
f=D.nU[r]
g=f-0.01
g=A.j.D((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n5(l*h+D.dpK[r]*o)
f.fE(l*0.9)
h=0.55+0.45*o
f.k7(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cK(0,0,0,0,a3,a3,new B.cj(A.z,a3,a3,new B.kK(g,B.dP(new B.iV(f,a3,A.z,!0,a3,new C.Rf(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.r(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nU[r]
i=q+0.17
a2=A.j.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aDu[r]
a6.push(new B.cK(0,0,0,0,a3,a3,new B.cj(A.z,a3,a3,B.dP(new B.mK(new C.bte(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.r(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.btN.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a4(w-v,0,w+v,e.b)
q=B.bx(u,A.hD)
$.S()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.oA
d.aq(q,t)
t=B.bx(u,A.hD)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aE(d){return d.c!==this.c||d.d!==this.d}}
C.btc.prototype={
a4(d,e){var w,v,u=this.c,t=B.bW(e.ej(A.J),e.b*u,e.a*u)
$.S()
u=B.L()
u.b=A.aa
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=W.OO
d.c0(t,u)
u=B.L()
u.b=A.aa
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c0(t,u)
u=t.cq(-14)
v=B.L()
v.b=A.aa
v.c=1
v.r=w.j(0.3).gp(0)
d.c0(u,v)},
aE(d){return!0}}
C.bdb.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ej(A.J),h=this.c,g=A.cj.az(0,h)
$.S()
w=B.L()
w.b=A.aa
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e_()
t.cU(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.j.D(v,0,1)).gp(0)
d.O(new B.r(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aE(d){return!0}}
C.bte.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.ej(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.j.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bW(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.b=A.aa
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c0(q,p)}},
aE(d){return d.c!==this.c}}
C.bxi.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a4(0,c9,0+c4,c9+60)
$.S()
c9=B.L()
w=c0.b
v=x.O
c9.san(new B.a7(A.aZ,A.b4,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aD(0,d0))
d1.aF(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.r(0,c3),new B.r(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hdT(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.S()
a3=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.n4
d1.c0(new B.a4(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a4(d,a3,a1,a3+a0)
a5=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a6=B.ap(A.d.gH(w),A.c,0.1)
a6.toString
a5.san(new B.a7(A.aZ,A.b4,A.x,B.a([a6,A.d.gal(w)],v),c1,c1).aD(0,a4))
d1.aF(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aH(a2,A.aj,c1,c1,a5)
a5.push(new B.aZ(a1,a3))
a7.ab()
a6=a1+c7
a8=a3+c8
a9=new B.aq(a6,a8)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.ak(b0)
a7.ab()
a9=new B.aq(a6,n)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.ak(b0)
a7.ab()
a9=new B.aq(a1,c3)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.ak(b0)
a7.ab()
a9=new B.bw()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.ak(a5)
a7.ab()
a5=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a5.r=B.ap(A.d.gal(w),A.w,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aH(a2,A.aj,c1,c1,a5)
a5.push(new B.aZ(d,a3))
b1.ab()
a2=new B.aq(d+c7,a8)
a5.push(a2)
a9=b1.f
if(a9!=null)a2.ak(a9)
b1.ab()
a2=new B.aq(a6,a8)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.ak(a6)
b1.ab()
a2=new B.aq(a1,a3)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.ak(a6)
b1.ab()
a2=new B.bw()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.ak(a5)
b1.ab()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.r=B.ap(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b2.b=A.aa
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.aF(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.j.bg(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bx(new B.a4(b7,a6,b7+s,a9),A.hD)
$.S()
b8=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a4(d,a2,a1,a2+28)
J.br(g.save())
g.clipRect(B.hY(a4),$.mk()[1],!0)
$.S()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.san(new B.a7(A.aZ,A.b4,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aD(0,b9))
d1.aF(b9,a2)
g.restore()}}},
aE(d){return!0}}
C.aPp.prototype={
aX(){this.b7()
this.b5()
this.dI()},
t(){var w=this,v=w.b8$
if(v!=null)v.a6(0,w.gdC())
w.b8$=null
w.a2()}}
C.a1H.prototype={
a7(){return"_Role."+this.b}}
C.qx.prototype={}
C.re.prototype={}
C.D5.prototype={}
C.a_G.prototype={}
C.ag6.prototype={}
C.a1U.prototype={
gZ(d){return this.d}}
C.Dg.prototype={}
C.acZ.prototype={}
C.adf.prototype={}
C.afc.prototype={}
C.bjM.prototype={
a3X(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dA(d,"",e,g,h,f)},
bbq(d,e,f){return this.a3X(d,e,f,0,0.55)},
aE_(d,e,f,g){return this.a3X(d,e,f,0,g)},
bbr(d,e,f,g){return this.a3X(d,e,f,g,0.55)},
a8(d){var w=this
w.a.a8(0)
A.d.a8(w.b)
A.d.a8(w.c)
A.d.a8(w.d)
A.d.a8(w.e)
A.d.a8(w.f)
A.d.a8(w.r)
A.d.a8(w.w)
A.d.a8(w.x)
w.y.a8(0)
w.Q.a8(0)
w.as.a8(0)
w.b2()},
aly(d,e,f,g){var w="n"+this.ay++,v=new C.re(w,e,f,g)
this.a.n(0,w,v)
this.b2()
return v},
th(d,e,f){return this.aly(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bq(w.b,new C.drW(e))
A.d.bq(w.c,new C.drX(e))
w.b2()},
bfj(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n8.h(0,v.b).c===D.xZ)return!1
w=this.b
if(A.d.aU(w,new C.drT(d,e)))return!1
w.push(new C.D5(d,e))
this.b2()
return!0},
c3M(d){var w
if(d.b==="beat")return D.clG[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aHA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aDL[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Dg(u,t,j.ax,90))
w.push(new C.Dg(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1U(u,new B.r(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bbq(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1U(u,new B.r(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.Dg(u,t,j.ax,120))
j.aE_(120,200,"noise",0.5)
j.bbq(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Dg(u,t,j.ax,230))
w.push(new C.Dg(u,t,j.ax+160,160))
w.push(new C.Dg(u,t,j.ax+320,100))
j.bbr(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.acZ(u,new B.r((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bbr(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.adf(u,u.a5(0,new B.r(Math.cos(q),Math.sin(q)).aL(0,260+w.ai()*200)),t,j.ax))
j.a3X(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fN()
j.a3X(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.afc(u,D.aD7[v],t,j.ax))
j.aE_(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aE_(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.chM[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cxk(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eJ(w,new C.drU(d));v.C();)j.aCu(w.gP(0),j.ax+D.cu7[A.o.F(g.d,4)])
s=!1
break
case"toggle":w=j.as
v=w.h(0,d)
k=(v==null?0:v)+1
w.n(0,d,k)
s=(k&1)===1
break
case"count3":w=j.as
v=w.h(0,d)
k=(v==null?0:v)+1
w.n(0,d,k)
s=k%3===0
break
case"chance":s=j.at.aw(100)<D.cLn[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eJ(w,new C.drV(d));v.C();)j.aCu(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xG(w,0,v-700)},
cxk(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_G(e,"~"+d))},
aCu(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ag6(d.a,v,e,w))
u.push(new C.a_G(w,v))},
a7H(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a3(w).k("b7<2>")
w=B.C(new B.b7(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aHA(r)
u.n(0,r,o.ax+o.c3M(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.drY(o),v),v.k("M.E"))
if(q.length!==0){A.d.bq(w,new C.drZ(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.b4(u,1)
for(u=A.d.gae(v),r=new B.eJ(u,new C.ds_(p));r.C();)o.aCu(u.gP(0),o.ax)}else o.aHA(u)}}A.d.bq(o.d,new C.ds0(o))
A.d.bq(o.e,new C.ds1(o))
A.d.bq(o.f,new C.ds2(o))
A.d.bq(o.w,new C.ds3(o))
A.d.bq(o.x,new C.ds4(o))
A.d.bq(o.r,new C.ds5(o))
o.b2()},
vO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.r(q.a+o*e,q.b+p*e)
r.b=new B.r(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.r(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.r(l,o)
if(o>n){p=m.a=new B.r(l,n)
t=m.b=new B.r(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.r(-t.a*0.8,t.b)}},
aj(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.B)
for(v=this.a,v=new B.dn(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.W.av(B.J(["nodes",m,"edges",v],u,x.ew),null)},
Uu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.W.aP(0,d,null))
k.a8(0)
for(o=x.j,n=J.aT(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gP(n)
u=B.w(J.t(v,"k"))
if(!D.n8.am(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.re(t,u,new B.r(B.dF(J.t(v,"x"))*k.cy.a,B.dF(J.t(v,"y"))*k.cy.b),A.j.M(B.dF(J.t(v,"p")))))
s=B.cb(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aT(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gP(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.D5(q,p))}k.b2()
return!0}catch(l){return!1}},
cWU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.re(n,r,new B.r(q*p.a,o*p.b),s))
l.b2()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bfj(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GH.prototype={}
C.Xd.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aGz(new C.bjM(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cR,A.L,A.az,$.ax()),A.bC,A.J,A.J,A.Z,null,null)}}
C.aGz.prototype={
adO(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adO=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aA(),$async$adO)
case 6:q=n.k6(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.eyS(s))
u=1
w=5
break
case 3:u=2
o=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adO,v)},
aaI(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aaI=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.eyH(s))
u=3
w=6
return B.b(B.aA(),$async$aaI)
case 6:e.aC("Bool","ngmy_core_lab_coach_v1",!0)
u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aaI,v)},
bPP(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("b7<2>")
v=""+n.a+"|"+o.length+"|"+new B.b7(n,w).cF(0,0,new C.eyJ())+"|"+A.d.cF(o,0,new C.eyK())
if(v===p.ch)return p.CW
u=new C.eyN()
t=x.s
s=B.a([],t)
r=new C.eyO(p,s,u)
for(n=new B.b7(n,w).gae(0),w=new B.eJ(n,new C.eyL());w.C();){q=n.gP(0)
if(!A.d.aU(o,new C.eyM(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cX(s,0,B.dD(5,"count",x.S),x.N).dq(0)},
Y(){var w,v=this
v.a3()
v.adO()
v.d.db=v.ay
w=v.q6(new C.ezh(v))
w.fX(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a1(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.U$=$.ax()
v.R$=0
w.bAr()},
adj(d){return this.c3c(d)},
c3c(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$adj=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aA(),$async$adj)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Uu(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZS(A.d.gH(D.aCz))
if(s.c!=null)s.m(new C.eyR())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adj,v)},
aZS(d){this.d.cWU(0,d.c,d.d)
this.EO()},
EO(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cz(A.lL,new C.eyD(this))},
azm(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("b7<2>")
s=B.C(new B.b7(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bQ(s,s.gJ(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
clb(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("b7<2>")
r=B.C(new B.b7(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bQ(r,r.gJ(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c30(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dn(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.n8.h(0,r.b).c===D.xZ)continue
q=r.c
p=v-(q.a-36)
q=u-q.b
q=Math.sqrt(p*p+q*q)
p=r.c
o=v-p.a
p=u-p.b
n=Math.min(q,Math.sqrt(o*o+p*p))
if(n<s){t=r.a
s=n}}return t},
cc6(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hCI(new B.r(n.a+36,n.b+0),new B.r(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cF4(d){var w,v,u,t,s,r,q=this,p=q.azm(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eZ()
u=v.b
if(u==="button"){w.aHA(p)
return}if(q.r)return
t=D.n8.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rp)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b2()
q.EO()
return}if(q.r)return
r=q.cc6(d)
if(r!=null){w=q.d
A.d.cH(w.b,r)
w.b2()
q.EO()}},
cmw(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.clb(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.azm(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aJ(0,d)}},
cmx(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b2()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.r(A.j.D(d.a+s.y.a,46,t.a-46),A.j.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b2()}}},
b4j(){var w,v,u=this
if(u.z!=null){w=u.c30(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bfj(v,w)}else v=!1
if(v){B.jZ()
u.EO()}u.z=null
u.d.b2()}else if(u.x!=null){if(u.at)u.EO()
u.x=null}},
ae0(d){return this.c68(d)},
c68(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ae0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.azm(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jr()
p=t.c
p.toString
w=3
return B.b(B.bT(K.mc,null,new C.eyU(q),p,!0,!0,!1,A.lX,!1,!1,x.y),$async$ae0)
case 3:if(f===!0){r.W(0,s)
t.EO()}case 1:return B.h(u,v)}})
return B.i($async$ae0,v)},
cc4(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.th(0,d,new B.r(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eZ()
this.EO()},
ai0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ai0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(K.mc,null,new C.eyW(),s,!0,!0,!0,A.lX,!1,!1,x.es),$async$ai0)
case 2:t=e
if(t!=null)u.aZS(t)
return B.h(null,v)}})
return B.i($async$ai0,v)},
afo(d){var w=0,v=B.j(x.H),u=this,t
var $async$afo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.eyG(),t,null,!0,!0,x.y),$async$afo)
case 2:if(f===!0){u.d.a8(0)
u.EO()}return B.h(null,v)}})
return B.i($async$afo,v)},
B(d){var w=this,v=null,u=B.a([B.ajD(w.r?new B.bK(A.a5,v,v,new B.D(A.Hh,B.ht(D.bY2,D.fNi,new C.ezf(w),v),v),v):w.cc7(),A.b0,A.iQ),B.E(B.cm(new C.ezg(w)),1)],x.p)
if(!w.r)u.push(w.czO())
return B.c4(v,A.c4,B.bm(!0,B.x(u,A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bLw(){var w=null,v=new C.eyI(),u=A.w.j(0.7),t=B.l(26),s=B.K(A.bv.j(0.5),A.r,1)
return B.bR(0,B.ea(B.as(B.p(w,B.c9(B.x(B.a([D.fYQ,A.ax,D.h5A,A.aB,v.$4(A.oK,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A0.Dp,A.cr,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kc,A.c3,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.PB,A.bt,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.h4S,new B.bK(A.a8,w,w,B.bO(!1,D.fVV,w,w,!0,w,w,w,this.gbLp(),w,w),w)],x.p),A.E,w,A.e,A.N,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.Y8,new B.o(K.mc,w,s,t,w,w,A.n),w,w,w,A.fu,As.ans,w,w,w),w,w,w),u,!0),0,0,0)},
cc7(){var w=this,v=null,u=B.aI(v,v,v,v,Aj.n6,v,v,v,new C.ez1(w),v,v,v,v,v,v),t=w.aa8(A.Df,"How it works",new C.ez2(w),!0),s=w.ay?A.oN:X.tp
return new B.D(D.bIx,B.A(B.a([u,D.bKd,t,w.aa8(s,"Sound",new C.ez3(w),!0),w.aa8(A.e9,"Ideas",w.gcqh(),!0),w.aa8(I.wR,"Clear",w.gcc5(w),!0),w.aQr(A.he,"Show",new C.ez4(w),!0,!0)],x.p),A.l,v,A.e,A.h,0,v,v),v)},
aQr(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=B.l(14),t=B.l(14),s=B.a([B.W(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Af.wI,B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.ha(new B.D(new B.Q(8,8,8,8),B.A(s,A.l,w,A.e,A.N,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
aa8(d,e,f,g){return this.aQr(d,e,f,g,!1)},
czO(){var w=null,v=new C.eyY(this),u=A.c.j(0.08)
return B.p(w,B.c9(B.A(B.a([v.$2("START",D.xZ),v.$2("CHANGE",D.Fv),v.$2("REACT",D.rp)],x.p),A.E,w,A.e,A.h,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aM),A.f,w,w,new B.o(K.C8,w,new B.bG(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bDw,w,w,w)},
czP(d){var w,v,u,t,s=null,r=D.n8.h(0,d)
r.toString
w=B.l(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.D(A.f0,B.az(s,B.p(s,B.x(B.a([B.W(r.b,v,s,s,s,22),A.cQ,B.d(r.a,s,1,A.a2,s,s,s,D.aXb,s,s,s)],x.p),A.l,s,A.e,A.N,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a7(A.aZ,A.b4,A.x,u,s,s),A.n),s,s,s,s,A.hN,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eyX(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bjN.prototype={
a4(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.br(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.S()
u=B.L()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.O(new B.r(r,s),1,u)
q=b4.CW
if(b5<q){$.S()
p=B.L()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.aF(new B.a4(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){m=w[n]
l=o.h(0,m.a)
k=o.h(0,m.b)
if(l==null||k==null)continue
j=l.c
i=j.a+36
j=j.b+0
h=k.c
g=h.a-36
h=h.b
f=$.S()
e=B.a([],p)
d=new B.aH(f.r,A.aj,b3,b3,e)
e.push(new B.aZ(i,j))
d.ab()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.kn(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.ak(e)
d.ab()
a1=D.n8.h(0,l.b).d
a2=D.n8.h(0,k.b).d
f=new B.ar(A.S,A.Q,A.V,A.X,A.U)
f.b=A.aa
f.c=3
f.d=A.bG
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.r0(new B.r(i,j),new B.r(g,h))
f.san(new B.a7(A.a5,A.a8,A.x,e,b3,b3).aD(0,new B.a4(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.j.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hCI(new B.r(j.a+36,j.b+0),new B.r(i.a-36,i.b),a4)
$.S()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=A.c.j(0.35).gp(0)
i.y=N.oA
b7.O(a5,8,i)
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a5(0,D.JS)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aH($.S().r,A.aj,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.kn(t+a0,p,w-a0,j,w,j))
j=B.L()
j.b=A.aa
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.L()
j.r=A.c.gp(0)
b7.O(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
p=a9.c
v=A.j.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.e5.az(0,v)
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.b=A.aa
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.j.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kJ(p,j,A.e5.az(0,v))
i.toString
j=B.kJ(p,j,A.e5.az(0,A.j.D(v-0.35,0,1)))
j.toString
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.c=5
p.d=A.bG
h=b0.c
g=B.a([h.j(0),h],q)
f=B.r0(j,i)
p.san(new B.a7(A.a5,A.a8,A.x,g,b3,b3).aD(0,new B.a4(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kX
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.j.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=a3.c.j(1-v).gp(0)
b7.O(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){k=w[n]
p=k.a
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kX
b7.O(p,11,j)
j=k.a
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.san(new B.bS(A7.Bq,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aD(0,B.bV(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.j.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bjO(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.r(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dn(o,o.r,o.e);b4.C();)b2.cm2(b7,b4.d,b5)
b6.restore()},
cm2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n8.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.j.D(1-(f-w)/520,0,1)
u=B.bW(e.c,64,64)
t=B.bx(u,A.iq)
s=t.eD(A.cz)
$.S()
r=B.L()
r.r=A.w.j(0.55).gp(0)
r.y=A.n4
d.aq(s,r)
if(v>0){s=t.cq(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.CT
d.aq(s,r)}s=t.eD(A.cJ)
r=B.L()
q=h.d
r.r=B.ap(q,A.w,0.65).gp(0)
d.aq(s,r)
r=B.L()
s=B.ap(q,A.c,0.18+0.4*v)
s.toString
p=B.ap(q,A.w,0.35)
p.toString
r.san(new B.a7(A.aZ,A.b4,A.x,B.a([s,p],x.O),j,j).aD(0,u))
d.aq(t,r)
r=B.L()
r.b=A.aa
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.bjO(B.lm(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aJ(0,new B.r(s/2,r.gba(r)/2)))
n=C.bjO(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.a5(0,new B.r(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aD7[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rp){s=e.c.a5(0,new B.r(0,62))
r=B.L()
r.r=D.aDL[A.o.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.bjO(m,9.5,A.aF,j,j,A.O)
l.a4(d,e.c.a5(0,new B.r(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bjO(m,9.5,A.aF,j,j,A.O)
l.a4(d,e.c.a5(0,new B.r(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xZ)k.b57(d,e.c.aJ(0,D.JS),q)
k.b57(d,e.c.a5(0,D.JS),q)},
b57(d,e,f){var w
$.S()
w=B.L()
w.r=A.c4.gp(0)
d.O(e,9,w)
w=B.L()
w.b=A.aa
w.c=2.2
w.r=f.gp(0)
d.O(e,9,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.5,w)},
aE(d){return!0}}
C.aOy.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.ei.prototype={}
C.u0.prototype={
ass(d,e,f,g){var w=this
switch(w.b){case"battery":w.e=3
break
case"solar":w.f=0.8
break
case"turbine":w.f=0.6
break
case"switch":w.w=!1
break
case"resistor":w.r=100
break
case"pot":w.f=0.5
break
case"ldr":w.f=0.5
break
case"buck":w.e=5
break
case"regulator":w.e=5
break}}}
C.abE.prototype={}
C.acL.prototype={}
C.a5H.prototype={
bhb(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h3()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abE(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c8h(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bq(w,new C.bQw())},
aly(d,e,f,g){var w="p"+this.c++,v=new C.u0(w,e,f,g)
v.ass(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bq(this.b,new C.bQH(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cNS(d,e,f,g,h){return A.d.aU(this.b,new C.bQC(e,f,g,h))},
amn(d,e,f,g){var w
if(d===f||this.cNS(0,d,e,f,g))return null
w=new C.acL(d,e,f,g)
this.b.push(w)
return w},
aD0(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Am(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
ap9(d){return this.Mt(d)&&!d.x&&d.cx>this.Am(d)},
b9u(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mt(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
ccr(d){var w,v=d.b
switch(v){case"bulb":return 10
case"motor":return 6
case"buzzer":return 25
case"heater":return 4
case"radio":return 30
case"tv":return 50
case"resistor":return d.r
case"pot":return 1+99*d.f
case"ldr":return 20+980*(1-d.f)
case"voltmeter":return 1e6
case"ammeter":return 0.02}w=D.Ak.h(0,v)
if(w!=null)return w.a
return 100},
vO(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c8h(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bQI(a2),t).cF(0,0,new C.bQJ(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bQL(o)
m=B.a([],x.t)
l=new C.bQK(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bQN(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.I)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b9q(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Am(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b9q(e,d,w,!0)
a2.bSa(a4)},
b9q(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bQy(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bQx(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bQA(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.I)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c1(b7,0,!1,b3)
v=x.Y
k=B.T(v,b3)
j=B.T(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)B.bi(B.dO(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c1(b7,0,!1,b3)
a0=B.c1(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b9u(t)*(1+t.CW))
a4=b2.aD0(t)*a3}else{a5=t.x
a3=1e-9
a4=0
if(!(a5&&a2!=="capacitor"))if(a2==="switch")a3=t.w?100:1e-9
else if(a2==="fuse")a3=20
else{a6=a2==="led"
if(a6||a2==="diode"){a2=v.h(0,t.a)
a7=a2===!0
if(a7)a3=a6?0.06666666666666667:1.25
if(a7)a4=a3*(a6?1.9:0.7)}else if(a2==="buck"||a2==="regulator"){a4=3.3333333333333335*t.cy
a3=3.3333333333333335}else if(a2==="capacitor"){a4=i*t.z
a3=a5?1e-9:i}else a3=1/b2.ccr(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bVx(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
a2=t.b
a5=a2==="led"
if(!a5&&a2!=="diode")continue
a9=l[m.$2(t,0)]-l[m.$2(t,1)]
a2=t.a
a6=v.h(0,a2)
b0=a6===!0
if(b0)b1=a9>(a5?1.8:0.65)
else b1=a9>(a5?1.95:0.75)
if(b1!==b0){v.n(0,a2,b1)
a8=!0}}if(!a8)break;++f
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.I)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
v=l[o]
q=l[n]
t.dy=v-q
h=t.b
if(h==="buck"||h==="regulator"){g=l[b8]
t.db=v-g
t.dx=q-g}v=k.h(0,t)
if(v==null)v=0
q=t.dy
g=j.h(0,t)
if(g==null)g=0
t.fr=v*q-g
if(h==="capacitor"&&!t.x)t.z=t.dy}return!0},
bVx(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c1(d,0,!1,x.i)
u=B.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,B.I)(a0),++r){q=a0[r]
p=B.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,B.I)(a0),++n){m=a0[n]
p.push(a1[q][m])}p.push(a2[q])
u.push(p)}for(l=0;l<v;l=q){for(q=l+1,k=q,j=l;k<v;++k)if(Math.abs(u[k][l])>Math.abs(u[j][l]))j=k
i=u[l]
u[l]=u[j]
u[j]=i
h=u[l][l]
if(Math.abs(h)<1e-14)continue
for(k=0;k<v;++k){if(k===l)continue
g=u[k][l]/h
if(g===0)continue
for(m=l;m<=v;++m){t=u[k]
t[m]=t[m]-g*u[l][m]}}}f=B.c1(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bSa(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aD0(o)/a1.b9u(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Am(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bK9(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bhb(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uu(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.j.D(o.db-h,0,24)
else o.cy=A.j.D(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.uu(o,"The "+$.qI().h(0,n).b+" got "+A.j.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uu(o,"More than 1.5 amps went through the "+$.qI().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uu(o,"The regulator had to turn "+A.j.ad(o.cy,1)+" V into heat while "+A.j.V(i*1000)+" mA flowed. That is "+A.j.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uu(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.Ak.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qI().h(0,n).b
l=f.b
l=l===A.j.fK(l)?""+A.j.V(l):B.w(l)
g=f.c
g=g===A.j.fK(g)?""+A.j.V(g):B.w(g)
a1.uu(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.j.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fgD.q(0,n)){m=o.fx>0?A.j.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.j.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uu(o,"The bulb got "+A.j.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.j.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uu(o,"The LED had "+A.j.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.j.D(j/14,0,1)
break
case"motor":n=A.j.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.j.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uu(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.j.D(i/1,0,1)
if(!o.x&&i>1)a1.uu(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uu(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.j.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uu(o,"The capacitor was charged to "+A.j.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bK9(d){return A.d.aU(this.a,new C.bQv(d))},
uu(d,e){var w
d.x=!0
d.ay=e
this.bhb(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
blQ(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aJm(d){var w=d.b
return D.aTW.q(0,w)||D.Ak.am(0,w)||w==="buck"||w==="regulator"},
biG(d){var w,v=!0
if(!this.Mt(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.Ak.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
VK(d,e){var w=this.b
return new B.Y(w,new C.bQP(d,e),B.U(w).k("Y<1>")).gJ(0)},
rw(d){var w,v
if(d.x)return!1
w=d.b
if(D.Ak.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bgI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qI().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aJm(d)||i.rw(d))return null
w=i.VK(d,0)
v=i.VK(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcWt(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.j.fK(r)?""+A.j.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.j.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.Ak.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.MG("battery"),o=J.aT(t.a),t=new B.eJ(o,t.b);t.C();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.VK(n,0)+i.VK(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.MG("switch"),o=J.aT(t.a),t=new B.eJ(o,t.b);t.C();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qI().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Am(k))return"The "+$.qI().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.j.ad(k.cx,2)+" amps, but it can only give about "+A.j.ad(i.Am(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aU(u,new C.bQD(i,d))
h=q.b
h=h===A.j.fK(h)?""+A.j.V(h):B.w(h)
u=A.j.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.j.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.j.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
MG(d){var w=this.a
return new B.Y(w,new C.bQG(d),B.U(w).k("Y<1>"))},
aIY(d){return this.MG(d).aU(0,new C.bQF(0.35))},
qi(d,e){return A.d.aU(this.a,new C.bQE(e))}}
C.ake.prototype={
a4(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.S()
w=B.L()
w.r=F.nt.gp(0)
c2.aF(new B.a4(0,0,c0,c1),w)
v=B.L()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.O(new B.r(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.I)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.mu.am(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.mu.am(0,j.b)?(j.ch-1)*38:0
b6.cKz(c2,new B.r(m*b8+l*(42+k),n*b9),new B.r(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hQw(s.a,s.b,c3)
s=b6.e
s.toString
$.S()
r=B.L()
r.r=A.ab.gp(0)
r.c=3
r.d=A.bG
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.I)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.S()
h=new B.ar(A.S,A.Q,A.V,A.X,A.U)
h.r=F.MZ.j(A.j.D(e.Q*0.45,0,0.6)).gp(0)
h.y=A.CT
c2.O(new B.r(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.br(n.save())
n.translate(k,j)
i=A.j.D(A.nk.az(0,A.j.D(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.cn3(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Am(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.S().r
a2=B.a([],l)
a3=new B.aH(a1,A.aj,b7,b7,a2)
a4=g-13
a2.push(new B.aZ(h,a4))
a3.ab()
a5=h+13
a6=g+10
a7=new B.aq(a5,a6)
a2.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()
a7=h-13
a8=new B.aq(a7,a6)
a2.push(a8)
a9=a3.f
if(a9!=null)a8.ak(a9)
a3.ab()
a8=new B.bw()
a2.push(a8)
a2=a3.f
if(a2!=null)a8.ak(a2)
a3.ab()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.r=A.aA.j(0.65+0.35*a0).gp(0)
c2.af(a3,a2)
a2=B.a([],l)
a1=new B.aH(a1,A.aj,b7,b7,a2)
a2.push(new B.aZ(h,a4))
a1.ab()
a0=new B.aq(a5,a6)
a2.push(a0)
a3=a1.f
if(a3!=null)a0.ak(a3)
a1.ab()
a0=new B.aq(a7,a6)
a2.push(a0)
a3=a1.f
if(a3!=null)a0.ak(a3)
a1.ab()
a0=new B.bw()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.ak(a2)
a1.ab()
a0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a0.b=A.aa
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iA(new B.eq("!",b7,b7,A.cL,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a7,A.c_,new B.jj(1),b7,b7,b7,b7,A.c0,b7,A.cx)
b0.eo()
b0.a4(c2,new B.r(h+-3,g+-8))}if(!e.x)h=(D.aTW.q(0,i)||D.Ak.am(0,i)||i==="buck"||i==="regulator")&&!w.rw(e)&&w.VK(e,0)+w.VK(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.S()
h=new B.ar(A.S,A.Q,A.V,A.X,A.U)
h.r=A.at.gp(0)
c2.O(new B.r(k,j),10,h)
b0=new B.iA(new B.eq("!",b7,b7,A.cL,b7,b7,b7,b7,b7,b7,new B.G(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a7,A.c_,new B.jj(1),b7,b7,b7,b7,A.c0,b7,A.cx)
b0.eo()
b0.a4(c2,new B.r(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mu.am(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.r(g,h)
$.S()
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.r=F.nt.gp(0)
c2.O(b0,7,k)
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.b=A.aa
k.c=2.4
k.r=(j&&w.biG(e)?A.bW:A.ab).gp(0)
c2.O(b0,6,k)
if(j&&w.biG(e)){b0=new B.iA(new B.eq("+",b7,b7,A.cL,b7,b7,b7,b7,b7,b7,new B.G(!0,A.bW,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a7,A.c_,new B.jj(1),b7,b7,b7,b7,A.c0,b7,A.cx)
b0.eo()
b0.a4(c2,new B.r(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.I)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.r(n,m)
b4=A.j.D(b2.r/0.8,0,1)
l=B.ap(M.NE,F.a_M,b4)
l.toString
k=b2.f
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=l.gp(0)
j.c=2.4
j.d=A.bG
c2.ah(b3,new B.r(n-b2.e*0.035,m-k*0.035),j)
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=l.j(0.35*b4).gp(0)
j.y=A.OP
c2.O(b3,4.5*b4+1,j)}if(A.d.aU(s,new C.bKS())){b5=A.d.cF(s,0,new C.bKT())
$.S()
b9=B.L()
b9.r=D.bim.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.aF(new B.a4(0,0,c0,c1),b9)
b0=B.fE(b7,A.cx,b7,b7,b7,D.frO,A.a7,A.c_,b7,A.dJ,A.c0)
b0.nB(b8-24)
b0.a4(c2,new B.r(12,10))}},
qY(d,e,f,g,h){var w=null,v=B.fE(w,A.cx,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.m(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a7,A.c_,w,A.dJ,A.c0)
v.eo()
v.a4(d,f)},
cKz(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aH($.S().r,A.aj,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hIv(a0,a1,a2)
e.E(new B.ce(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.MZ,A.j.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ap(A.aG,A.aQ,A.j.D(r*1.2,0,1))
u.toString
o=u}else o=A.bh
u=B.L()
u.b=A.aa
u.c=a3?7:5
u.d=A.bG
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.L()
u.b=A.aa
u.c=2.4
u.d=A.bG
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.am_(new B.uR(B.BM(e),!1,B.a([],x.R))).gH(0)
m=40+A.j.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.jP()
j=t[u].b
j===$&&B.c()
if(!(k<j.a.length()/22))break
j=s.d
v.jP()
i=t[u].b
i===$&&B.c()
i=A.j.F(k*22+j*m*l,i.a.length())
v.jP()
j=t[u].b
j===$&&B.c()
j=j.a.length()
v.jP()
h=t[u].b
h===$&&B.c()
g=A.j.F(i+j,h.a.length())
v.jP()
f=t[u].VZ(g)
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
PS(d,e,f,g){var w,v,u,t
$.S()
w=B.L()
v=g?A.aZ:A.a5
u=g?A.b4:A.a8
t=B.ap(e,A.w,0.3)
t.toString
w.san(new B.a7(v,u,A.x,B.a([e,f,e,t],x.O),A.IJ,null).aD(0,d))
return w},
ayw(d,e,f){return this.PS(d,e,f,!0)},
c7R(d,e){return this.PS(d,A.bh,A.hY,e)},
aja(d,e){var w,v,u
$.S()
w=B.L()
w.san(D.aS5.aD(0,B.bV(e,4.2)))
d.O(e,4.2,w)
w=e.a5(0,D.et2)
v=e.a5(0,D.etb)
u=B.L()
u.r=A.cP.gp(0)
u.c=1.2
d.ah(w,v,u)},
cn3(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.L()
c0.san(D.c8d.aD(0,D.fcQ))
c0.c=3.4
c0.d=A.bG
w=B.L()
w.r=A.w.j(0.45).gp(0)
w.y=N.oA
c1.c0(D.fcE,w)
if(c3){w=B.bx(D.fcO,A.jP)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c1.aq(w,v)}u=C.hni(c2)
c1.ah(new B.r(-u,0),D.euE,c0)
c1.ah(D.erI,new B.r(u,0),c0)
t=c2.x
w=c2.b
s=D.mu.am(0,w)&&c2.ch!==1
if(s){J.br(c1.c.save())
c1.bV(0,c2.ch)}switch(w){case"battery":b3.bGU(c1,c2)
break
case"solar":r=B.bx(D.fcH,A.jy)
c1.aq(r,b3.PS(new B.a4(r.a,r.b,r.c,r.d),A.cY,A.bO,!1))
b9=B.L()
w=B.ap(D.bmk,A.d8,0.25+0.55*c2.f)
w.toString
v=B.ap(D.bvO,A.mb,0.3+0.4*c2.f)
v.toString
b9.san(new B.a7(A.ay,A.aC,A.x,B.a([w,v],x.O),b4,b4).aD(0,D.aaf))
c1.aF(D.aaf,b9)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.r(b9,-18),new B.r(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.r(-34,b9),new B.r(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.S()
w=new B.ar(A.S,A.Q,A.V,A.X,A.U)
w.r=A.cA.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.r(b9,-18),new B.r(b9,18),w)}b9=new B.aH($.S().r,A.aj,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-34,18))
b9.E(new B.aq(-6+40*c2.f,-18))
b9.E(new B.aq(4+40*c2.f,-18))
b9.E(new B.aq(-24,18))
b9.E(new B.bw())
w=B.L()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.af(b9,w)
w=c2.f
b9=B.L()
b9.r=A.ex.j(0.9).gp(0)
c1.O(D.erM,4+4*w,b9)
break
case"crank":o=B.bx(D.fcs,A.fR)
c1.aq(o,b3.ayw(new B.a4(o.a,o.b,o.c,o.d),A.by,A.bP))
b9=B.L()
b9.san(D.aS6.aD(0,B.bV(A.J,12)))
c1.O(A.J,12,b9)
n=new B.r(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.L()
b9.r=A.cA.gp(0)
b9.c=5
b9.d=A.bG
c1.ah(A.J,n,b9)
b9=B.L()
b9.san(D.eE9.aD(0,B.bV(n,7)))
c1.O(n,7,b9)
b3.aja(c1,D.euw)
b3.aja(c1,D.erx)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aH(b9,A.aj,b4,b4,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bw())
m=B.L()
m.r=A.bO.gp(0)
c1.af(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.br(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aH(b9,A.aj,b4,b4,m)
m.push(new B.aZ(0,-2))
k.ab()
j=new B.ce(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.ce(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.bw()
m.push(j)
m=k.f
if(m!=null)j.ak(m)
k.ab()
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.L()
b9.san(D.eDQ.aD(0,B.bV(A.J,4.5)))
c1.O(A.J,4.5,b9)
break
case"switch":o=B.bx(D.fcz,A.nZ)
b9=B.L()
b9.san(D.au0.aD(0,new B.a4(o.a,o.b,o.c,o.d)))
c1.aq(o,b9)
b3.aja(c1,D.Uu)
b3.aja(c1,D.aMT)
h=c2.w?D.aMT:H.aMJ
b9=B.L()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.bG
c1.ah(D.Uu,h,b9)
b9=B.L()
b9.r=(c2.w?A.bc:A.bO).gp(0)
b9.c=4
b9.d=A.bG
c1.ah(D.Uu,h,b9)
b9=B.kJ(D.Uu,h,0.85)
b9.toString
w=B.L()
w.r=A.aA.gp(0)
c1.O(b9,5,w)
break
case"fuse":g=B.bx(D.aSP,D.aSb)
b9=B.L()
b9.r=A.ft.j(0.25).gp(0)
c1.aq(g,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.aF.gp(0)
c1.aq(g,b9)
if(!t){b9=B.L()
b9.c=1.6
b9.r=B.ap(A.bO,A.cN,c2.fx).gp(0)
c1.ah(D.aNb,D.aMR,b9)}else{b9=B.L()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.aNb,D.ev_,b9)
b9=B.L()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.esz,D.aMR,b9)
b9=B.L()
b9.r=A.dY.gp(0)
c1.O(A.J,6,b9)}for(f=0;f<2;++f){e=B.bW(new B.r(M.fO[f]*22,0),20,9)
c1.aq(B.bx(e,A.iF),b3.PS(e,A.d5,A.oh,!0))}break
case"pot":b9=B.L()
b9.san(D.eE0.aD(0,B.bV(A.J,21)))
c1.O(A.J,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.r=A.aF.gp(0)
k.c=1.2
c1.ah(new B.r(b9*18,w*18),new B.r(v*22,m*22),k)}b9=B.L()
b9.san(D.eDO.aD(0,B.bV(A.J,13)))
c1.O(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.L()
k.r=A.aQ.gp(0)
k.c=3
k.d=A.bG
c1.ah(new B.r(b9*3,w*3),new B.r(v*12,m*12),k)
break
case"resistor":a1=B.bx(D.aSP,D.aSb)
b9=B.L()
b9.san(D.cbF.aD(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c1.aq(a1,b9)
b9=x.O
a2=B.J([47,B.a([B.b1(b5),B.b1(b6),A.w],b9),100,B.a([B.b1(b7),A.w,B.b1(b7)],b9),220,B.a([B.b1(b8),B.b1(b8),B.b1(b7)],b9),470,B.a([B.b1(b5),B.b1(b6),B.b1(b7)],b9),1000,B.a([B.b1(b7),A.w,B.b1(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ar(A.S,A.Q,A.V,A.X,A.U)
w.r=a3[p].gp(0)
c1.aF(new B.a4(b9,-9,b9+4.5,9),w)}b9=B.L()
b9.r=A.aQ.gp(0)
c1.aF(D.fd1,b9)
b9=c2.r
b3.qY(c1,b9>=1000?"1k\u03a9":""+A.j.V(b9)+"\u03a9",D.etZ,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.L()
v.r=A.ex.j(0.55*w).gp(0)
v.y=A.CT
c1.O(H.vD,34,v)}o=B.bW(D.eqr,12,18)
c1.aq(B.bx(o,A.iF),b3.PS(o,A.bh,A.dX,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
v.r=A.dB.gp(0)
v.c=1
c1.ah(new B.r(-9,w),new B.r(9,w),v)}w=B.L()
if(t)v=A.MP
else{v=B.ap(A.dX,A.hK,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.Gn
else{m=B.ap(A.cY,A.ex,c2.fx)
m.toString}w.san(new B.bS(A.nj,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aD(0,B.bV(A.tI,17)))
c1.O(A.tI,17,w)
w=B.L()
w.b=A.aa
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.O(A.tI,17,w)
b9=b9.r
w=x.v
m=new B.aH(b9,A.aj,b4,b4,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.ce(-12,-4,-9,0))
v=B.L()
v.b=A.aa
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.af(m,v)
v=B.L()
v.r=A.cC.gp(0)
v.c=1.4
c1.ah(D.euU,D.euW,v)
v=B.L()
v.r=A.cC.gp(0)
v.c=1.4
c1.ah(D.ess,D.esv,v)
w=B.a([],w)
a4=new B.aH(b9,A.aj,b4,b4,w)
a4.E(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b9=(l&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.ak(v)
a4.ab()}$.S()
b9=B.L()
b9.b=A.aa
b9.c=1.8
if(t)w=A.b5
else{w=B.ap(A.cY,D.bnm,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.L()
v.r=A.aA.j(0.6*w).gp(0)
v.y=D.bK0
c1.O(A.tI,30,v)}w=B.L()
w.r=A.dX.gp(0)
w.c=2.4
c1.ah(D.ev1,D.ev0,w)
w=B.L()
w.r=A.dX.gp(0)
w.c=2.4
c1.ah(D.esB,D.esA,w)
b9=b9.r
w=x.v
a6=new B.aH(b9,A.aj,b4,b4,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.ce(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bw())
v=B.L()
if(t)m=A.jp
else{m=B.ap(A.eq,D.bp5,c2.fx)
m.toString}if(t)k=A.kS
else{k=B.ap(A.kx,A.aA,c2.fx)
k.toString}v.san(new B.a7(A.ay,A.aC,A.x,B.a([m,k],x.O),b4,b4).aD(0,D.fbU))
c1.af(a6,v)
v=B.L()
v.b=A.aa
v.c=1.2
v.r=A.k0.gp(0)
c1.af(a6,v)
v=B.L()
v.r=A.er.gp(0)
c1.aF(D.fc_,v)
w=new B.aH(b9,A.aj,b4,b4,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.ce(-6,-12,0,-15))
b9=B.L()
b9.b=A.aa
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a4(-28,-14,20,14)
c1.aq(B.bx(a7,A.ir),b3.ayw(a7,A.an,A.bl))
b9=B.L()
b9.r=A.cs.gp(0)
c1.aF(D.fbt,b9)
b9=B.L()
b9.r=A.cA.gp(0)
c1.aF(D.fbv,b9)
b9=c1.c
J.br(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.br(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bW(H.aME,15,7)
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
v.r=A.cN.j(0.9).gp(0)
c1.c0(w,v)
b9.restore()}w=B.L()
w.r=A.av.gp(0)
c1.O(A.J,3,w)
b9.restore()
b3.qY(c1,"M",D.euv,A.av,14)
break
case"buzzer":a8=B.bW(A.J,42,42)
b9=B.L()
b9.san(D.eE4.aD(0,a8))
c1.c0(a8,b9)
b9=B.L()
b9.r=A.w.gp(0)
c1.O(A.J,6,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.aT.gp(0)
c1.O(A.J,6,b9)
b3.qY(c1,"+",D.euo,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.j.F(b9.d*14,5):0
v=B.bV(A.J,24+l*5+v)
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m.b=A.aa
m.c=2
m.r=A.c3.j(w*(1-l*0.22)).gp(0)
c1.cQ(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bx(D.fcv,A.ir)
w=B.L()
w.san(D.c9f.aD(0,new B.a4(o.a,o.b,o.c,o.d)))
c1.aq(o,w)
w=B.a([],x.v)
a9=new B.aH(b9.r,A.aj,b4,b4,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b9=(l&1)===0?-10:10
a5=l+1
b9=new B.ce(-24+l*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.ak(v)
a9.ab()}b9=c2.fx
if(b9>0.1){$.S()
w=B.L()
w.b=A.aa
w.c=10
w.r=D.bo4.j(0.5*b9).gp(0)
w.y=A.kX
c1.af(a9,w)}$.S()
b9=B.L()
b9.b=A.aa
b9.c=3.2
b9.d=A.bG
b9.r=B.ap(A.m9,Ab.yB,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a4(-16,-22,16,18)
b9=B.bx(a7,A.ir)
w=B.L()
w.san(D.c85.aD(0,a7))
c1.aq(b9,w)
w=B.L()
w.r=A.bO.gp(0)
c1.aF(D.fc8,w)
for(p=0;p<4;++p){b0=new B.iA(new B.eq("\u2212",b4,b4,A.cL,b4,b4,b4,b4,b4,b4,new B.G(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a7,A.c_,new B.jj(1),b4,b4,b4,b4,A.c0,b4,A.cx)
b0.eo()
b0.a4(c1,new B.r(-14,-18+p*9))}b1=new B.a4(-16,-24,16,-17)
c1.aq(B.bx(b1,A.iF),b3.c7R(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.L()
v.r=A.bc.j(0.5).gp(0)
c1.aF(new B.a4(-3,w,11,w+b9),v)
b3.qY(c1,"1F",H.vD,A.c,11)
break
case"radio":a1=B.bx(D.aaf,A.fR)
b9=B.L()
b9.san(D.cbT.aD(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c1.aq(a1,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.oh.j(0.6).gp(0)
c1.aq(a1,b9)
b9=B.bx(D.fcw,A.jy)
w=B.L()
w.r=A.dV.gp(0)
c1.aq(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ar(A.S,A.Q,A.V,A.X,A.U)
w.r=A.m9.gp(0)
w.c=1.4
c1.ah(new B.r(-27,b9),new B.r(-3,b9),w)}b9=B.L()
b9.r=(c2.fx>0?A.fZ:A.oj).gp(0)
c1.aF(D.fbA,b9)
if(c2.fx>0){b9=8+A.j.F(b3.b.d*7,18)
w=B.L()
w.r=A.bD.gp(0)
w.c=1.6
c1.ah(new B.r(b9,-13),new B.r(b9,-3),w)}b9=B.L()
b9.san(D.aS6.aD(0,B.bV(D.a9c,6)))
c1.O(D.a9c,6,b9)
b9=B.L()
b9.r=A.oh.gp(0)
c1.O(D.erH,4,b9)
b9=B.L()
b9.r=A.dX.gp(0)
b9.c=1.8
c1.ah(D.erC,D.aMY,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bV(D.aMY,4+l*5+A.j.F(b9.d*8,5))
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
v.b=A.aa
v.c=1.4
v.r=A.oq.j(0.7).gp(0)
c1.cQ(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bx(D.fcG,A.ir)
v=B.L()
v.r=M.mX.gp(0)
c1.aq(w,v)
b2=B.bx(D.fcD,A.iF)
if(c2.fx>0&&!c2.x){b9=c1.c
J.br(b9.save())
b9.clipRRect(B.n3(b2),$.mH(),!0)
b9.translate(-33,-21)
L.fY0(c1,D.fjr,c2.at,b3.b.d,c2.ax,-1,b4,b4)
b9.restore()
b9=B.L()
b9.r=A.bc.gp(0)
c1.O(D.erT,1.6,b9)}else{w=B.L()
w.r=D.wo.gp(0)
c1.aq(b2,w)
b9=new B.aH(b9.r,A.aj,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-33,-21))
b9.E(new B.aq(-10,-21))
b9.E(new B.aq(-33,0))
b9.E(new B.bw())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.L()
b9.r=A.by.gp(0)
c1.aF(D.fbZ,b9)
break}C.isT(c1,c2,b3.b.d,b3.gccs())
if(t)b3.qY(c1,"\u2716",D.ev4,A.aA,14)
if(s)c1.c.restore()},
bGU(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a4(-28,-13,28,13)
d.aq(B.bx(w,A.nZ),o.ayw(w,A.cY,A.iO))
v=new B.a4(-22,-13,22,13)
$.S()
u=B.L()
u.san(D.atT.aD(0,v))
d.aF(v,u)
u=B.L()
u.r=A.e1.gp(0)
d.aF(D.fci,u)
t=new B.a4(28,-5,34,5)
d.aq(B.bx(t,A.hD),o.PS(t,A.cY,A.hY,!0))
o.qY(d,"+",D.eri,A.aQ,11)
o.qY(d,"\u2212",D.eux,A.ab,11)
o.qY(d,B.w(n===A.j.fK(n)?A.j.V(n):n)+"V",D.eud,A.aQ,13)
if(n===1.5){u=B.L()
u.r=A.bw.gp(0)
d.aF(D.fch,u)
u=e.as
s=B.L()
s.r=B.ap(A.aA,A.bc,u).gp(0)
d.aF(new B.a4(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qY(d,"FLAT",D.etY,A.bW,9)}if(n>2){u=B.L()
u.r=A.aT.gp(0)
u.c=1
d.ah(D.eqA,D.aMw,u)
o.qY(d,n>3?"3 cells":"2 cells",D.euc,A.aF,8)}}else if(n<=9){r=new B.a4(-22,-17,22,17)
u=B.bx(r,A.nZ)
$.S()
s=B.L()
s.san(D.cbs.aD(0,r))
d.aq(u,s)
s=B.L()
s.r=A.dn.gp(0)
d.aF(D.fcj,s)
for(q=0;q<2;++q){p=F.aDt[q]
u=p<0?5:3.6
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.san(D.aS5.aD(0,B.bV(new B.r(p,-18),5)))
d.O(new B.r(p,-18),u,s)}o.qY(d,"9V",D.eu5,A.c,16)}else{r=new B.a4(-34,-16,34,16)
u=B.bx(r,A.jy)
$.S()
s=B.L()
s.san(D.atT.aD(0,r))
d.aq(u,s)
s=B.L()
s.r=A.bt.gp(0)
d.aF(D.fcF,s)
for(q=0;q<2;++q){u=B.bx(B.bW(new B.r(F.IZ[q],-20),8,10),A.hD)
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.cA.gp(0)
d.aq(u,s)}o.qY(d,"+",D.err,A.aA,10)
o.qY(d,"12V",D.eu9,A.av,15)}},
aE(d){return!0}}
C.mZ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.T(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.u0(o,r,q,p)
n.ass(o,r,q,p)
k.push(n)
J.iF(s[4],new C.cuA(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.amn(m,u[1],l,u[3])}}}
C.akc.prototype={
S(){var w=x.N
return new C.akd(B.c_(2000,1,1,0,0,0,0,0),A.J,A.az,B.T(w,x.gl),B.aR(w),$,A.bC,0,B.a([],x.X),null,null)}}
C.akd.prototype={
afz(d){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.m(new C.bKv(w,d))
w.ch=B.cz(A.lM,new C.bKw(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
w=this.db
if(w!=null)w.a1(0)
this.bww()},
a1a(d,e){return this.ckX(d,e)},
b3N(d){return this.a1a(d,!1)},
ckX(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a1a=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.t2:A.yL
p=d.b
w=3
return B.b(L.hjD(s,r,p,d.ax<3.2,q,$.qI().h(0,p).b),$async$a1a)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a1a,v)},
cxH(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.CW.c4(0,d.a,new C.bKx()),t=J.cD(u)
t.I(u,v)
t.bq(u,new C.bKy(v))
if(t.gJ(u)>=4){t.a8(u)
t=w.db
if(t!=null)t.a1(0)
w.a2u(d)
return}if(t.gJ(u)===3){t=w.db
if(t!=null)t.a1(0)
w.db=B.cz(A.iR,new C.bKz(w,u,d))}},
a0R(d){return this.cji(d)},
cji(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0R=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iu7(s,d.b,A.j.V(A.j.F(t.a.c.d*0.12,1)*100)),$async$a0R)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a0R,v)},
a2u(d){return this.cvh(d)},
cvh(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2u=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(A.L,null,new C.bKt(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2u)
case 2:return B.h(null,v)}})
return B.i($async$a2u,v)},
Y(){this.a3()
this.biQ()
this.mk()},
biQ(){this.a.c.e=new C.bKP(this)},
mE(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vO(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mu.h(0,s.b)
if((r==null?null:r.b)!==D.AM)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.I(0,s.a)
q.a1a(s,!0)}}else u.W(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dA(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dA(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cR.ai()<0.5
else u=!1
if(u)G.dA(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dA(900+A.cR.aw(800),"",90,0,0.1,o)
if(A.cR.ai()<0.35)G.dA(300+A.cR.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cR.ai()<0.4
else u=!1
if(u)G.dA(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dA(330+A.o.F(110*A.j.bg(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dA((A.j.bg(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dA(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dA(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cR.ai()<0.5
else u=!1
if(u)G.dA(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dA(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dA(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bKQ())},
baS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.at
l=p.c
k=n===0?-1:1
j=D.mu.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b4t(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bQ(w,w.gJ(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mu.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cKA(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.a
n=this.at
m=o.c
l=p.b===0?-1:1
k=D.mu.am(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.at
m=o.c
j=p.d===0?-1:1
i=D.mu.am(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hIv(new B.r(k,n),new B.r(i,l),p)
for(o=h.a,m=h.b,g=1;g<20;++g){f=g/20
j=1-f
e=j*j
j=2*f*j
d=f*f
a0=k*e+o*j+i*d-u
d=n*e+m*j+l*d-t
a1=Math.sqrt(a0*a0+d*d)
if(a1<r){r=a1
s=p}}}return s},
afx(){this.a.toString
this.m(new C.bJV())},
bta(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.df1[v]
if(!A.d.aU(p.a.c.a,new C.bKR(u,w))){o=new B.r(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Z.AA:o
s=s?Z.AA:o
q=t.aly(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dA(1200,"",50,0,0.3,"tri")
p.afx()},
B(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.SQ[v].a)
u=w.length
t=u>8
s=t?A.d.du(w,0,A.o.ar(u+1,2)):w
r=t?A.d.fN(w,A.o.ar(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a3(q).k("cr<1>")
w=B.C(new B.cr(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b4i(s,!0))
n.a.toString
if(t)w.push(n.b4i(r,!0))
w.push(B.E(B.cm(new C.bKO(n,q)),1))
return B.x(w,A.l,null,A.e,A.h,0,A.p)},
b4i(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qI()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.az(p,B.p(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.xC,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.o2,p,p,p)],n),A.l,p,A.b8,A.h,0,A.p),A.f,p,p,new B.o(s,p,new B.bG(q,q,q,q),new B.be(r,r,r,r),p,p,A.n),p,p,p,K.oy,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJW(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.cw(m,p,p,A.hl,p,p,A.aM,!1),A.f,p,p,new B.o(K.C8,p,new B.bG(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
cn4(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qI().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bKh(e,a1)
t=new C.bKg()
s=B.l(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.ab(0,A.G,r.j(0.18),A.cz,16)],x.V)
o=r.j(0.18)
n=B.l(10)
n=B.p(A.z,B.d(a1.c,d,d,d,d,d,d,A.xC,d,d,d),A.f,d,d,new B.o(o,d,d,n,d,d,A.n),d,34,d,d,d,d,d,34)
o=B.E(B.d(a1.b,d,1,A.a2,d,d,d,B.m(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.l(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.ae,o,B.az(d,B.p(d,B.d(e.f?"Less":"About",d,d,d,d,d,d,A.W1,d,d,d),A.f,d,d,new B.o(d,d,l,m,d,d,A.n),d,d,d,d,A.oz,d,d,d),A.y,!1,D.hwa,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bK2(e),d,d,d,d,d,d,!1,A.a4),B.aI(d,d,d,d,D.c3C,d,d,d,new C.bK3(e,a2),d,d,d,d,"Remove part",A.cg),B.aI(d,d,d,d,A.Qk,d,d,d,new C.bK4(e),d,d,d,d,d,A.cg)],k),A.l,d,A.e,A.h,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.d(a1.e,d,d,d,d,d,d,A.KP,d,d,d),A.cQ,B.d("How it is made: "+a1.f,d,d,d,d,d,d,T.aWK,d,d,d)],k))
m.push(A.am)
if(a2.x)m.push(D.fMa)
else m.push(new B.D(A.f0,B.A(B.a([t.$2(A.j.ad(Math.abs(a2.dy),2),"VOLTS"),A.bn,t.$2(A.j.ad(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.bn,t.$2(A.j.ad(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.h,0,d,d),d))
j=e.a.c.bgI(a2)
if(j!=null){a1=(a2.x?A.aA:A.at).j(0.14)
w=B.l(10)
v=B.K((a2.x?A.aA:A.at).j(0.5),A.r,1)
m.push(new B.D(A.ig,B.p(d,B.d((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fI4,d,d,d),A.f,d,d,new B.o(a1,d,v,w,d,d,A.n),d,d,d,d,A.cp,d,d,d),d))}if(C.hha(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.D(A.f0,new E.dY("CH "+h,a2.at===i,new C.bK8(e,a2,i),d,r,d),d))}a1=B.c9(B.A(a1,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aM)
if(e.a.c.rw(a2)){w=F.SE[A.o.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.am,a1,A.ax,B.d(w,d,e.f?4:1,A.a2,d,d,d,A.ht,d,d,d)],k)
if(e.a.c.rw(a2))a1.push(new E.fD(A.wT,"Open big screen",new C.bK9(e,a2),r,d))
A.d.u(m,a1)}if(D.mu.am(0,a0)&&!C.hha(a0)){a1=B.a([A.am],k)
if(e.f||!e.a.c.rw(a2))a1.push(B.d(e.a.c.rw(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,A.ht,d,d,d))
if(e.a.c.rw(a2))a1.push(new E.fD(A.Q2,"Open the "+$.qI().h(0,a0).b,new C.bKa(e,a2),r,d))
A.d.u(m,a1)}if(D.mu.am(0,a0))A.d.u(m,B.a([A.am,new E.fD(A.Dk,"Make it bigger (or tap it 4 times)",new C.bKb(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.j.ad(a2.db,1)
if(e.a.c.rw(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.am,B.d("Volts in: "+w+" V   \u2192   Volts out: "+A.j.ad(v,1)+" V",d,d,d,d,d,d,D.fBZ,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dxI[g]
w=f===A.j.fK(f)?A.j.V(f):f
a1.push(new E.dY(B.w(w)+" V out",a2.e===f,new C.bKc(e,a2,f),d,r,d))}v.push(new B.D(A.ll,B.bZ(A.bI,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.h0c)
A.d.u(m,v)}if(e.a.c.Mt(a2)&&!a2.x){a1=A.j.ad(a2.cx,2)
w=A.j.ad(e.a.c.Am(a2),2)
v=e.a.c
o=v.ap9(a2)?"   \u26a0 OVERLOADED":""
a1=B.d("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.m(d,d,v.ap9(a2)?A.bW:A.ew,d,d,d,d,d,d,d,d,12.5,d,d,A.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.l(4)
o=A.j.D(a2.cx/e.a.c.Am(a2),0,1)
v=e.a.c.ap9(a2)?A.aA:A.bc
m.push(new B.D(A.ig,B.x(B.a([a1,A.cQ,B.bu(w,B.kr(A.bw,d,d,5,d,o,new B.lO(v,x.c)),A.aq)],k),A.E,d,A.e,A.h,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.j.V(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.ig,B.d("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fvx,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dmj[g]
w=f===1.5?"1.5 V (rechargeable)":B.w(f)+" V"
a1.push(new E.dY(w,a2.e===f,new C.bKd(e,a2,f),d,r,d))}m.push(B.bZ(A.bI,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dca[g]
w=f>=1000?"1 k\u03a9":""+A.o.V(f)+" \u03a9"
a1.push(new E.dY(w,a2.r===f,new C.bKe(e,a2,f),d,r,d))}m.push(B.bZ(A.bI,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bKf(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bK5(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bK6(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bK7(a2)))
if(a0==="crank")m.push(D.fWu)
if(a0==="switch")m.push(B.d(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,A.ht,d,d,d))
return B.p(d,new B.cN(D.b7U,B.c9(B.x(m,A.E,d,A.e,A.N,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.o(F.YL,d,q,s,p,d,A.n),d,d,D.hvv,d,D.bE9,d,d,d)}}
C.bdz.prototype={}
C.Wq.prototype={
S(){return new C.aFx(C.hnh(),new B.cx(null,x.gJ),B.aR(x.S))}}
C.aFx.prototype={
Y(){this.a3()
$.aU.bZ$.push(this)
this.afy()},
afy(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fLr(),$async$afy)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.ith(t.d,r)
if(s!=null){t.m(new C.e20(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$afy,v)},
FB(){var w,v=this
if(!v.as)return
w=C.ijS(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bH2(w)},
jn(d){if(d!==A.fW)this.FB()},
t(){$.aU.hZ(this)
this.FB()
this.a2()},
ccu(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e29(q),u).gJ(0)
s=new B.Y(v,new C.e2a(),u).gJ(0)
r=new B.Y(v,w.gd_5(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e2b(q,t,s,r))}if(A.o.F(q.w,45)===0)q.FB()
if(A.o.F(q.w,10)===0){w=q.f
$.aji()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.aji()[q.f].c.$1(q.d)){w.I(0,q.f)
C.JO("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e2c())
q.FB()
w=q.c
w.toString
w=B.Kh(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aji()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mZ,p,p,p,p,p,p,p,p,p,p))}},
aim(){var w=0,v=B.j(x.H),u=this,t
var $async$aim=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.e2_(u),t,null,!0,!0,x.H),$async$aim)
case 2:return B.h(null,v)}})
return B.i($async$aim,v)},
b1A(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.l(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.W(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.az(w,B.ha(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b1z(d,e,f,g){return this.b1A(d,e,f,g,null)},
at8(d,e,f,g){var w=null,v=f.j(0.1),u=B.l(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.az(w,B.p(w,B.A(B.a([B.W(d,f,w,w,w,15),A.e6,new B.di(1,A.cm,B.d(e,w,1,A.a2,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.b8,A.h,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
agH(){var w=0,v=B.j(x.H),u=this,t
var $async$agH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).ce(B.ed(new C.e1W(u),!1,null,x.H)),$async$agH)
case 2:t=u.e.gbl()
if(t!=null)t.biQ()
if(u.c!=null)u.m(new C.e1X())
u.FB()
return B.h(null,v)}})
return B.i($async$agH,v)},
bK2(){var w,v,u,t,s=null,r=this.f
$.aji()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bg:A.aA
u=B.l(9)
t=B.K(K.C8,A.r,1.5)
return B.p(s,B.as(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xF,s,s,s),s,s,s),A.f,s,D.b7K,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.f5,s,s,s)},
ajw(){var w=0,v=B.j(x.H),u=this,t
var $async$ajw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.mW,null,new C.e28(u),t,!0,!0,!0,A.km,!1,!1,x.H),$async$ajw)
case 2:return B.h(null,v)}})
return B.i($async$ajw,v)},
ccv(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.az(r,B.p(r,D.c0f,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2e(d),r,r,r,r,r,r,!1,A.a4),o=B.l(11)
o=B.p(r,D.bdI,A.f,r,r,new B.o(A.bs,r,B.K(A.aG.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.A(B.a([p,A.ae,o,A.ae,B.E(B.x(B.a([D.fZa,B.d(w,r,1,A.a2,r,r,r,B.m(r,r,s.y>0||s.z>0?A.eZ:A.h9,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.h,0,A.p),1),new C.azv(s.gcj0(),r),A.vK,s.b1z(A.qQ,"Construction Lab: real 3D wiring, plumbing and a house",A.cN,new C.e2f(s,d)),s.b1A(A.lR,"Challenges",A.aQ,s.gcAg(),s.bK2()),s.b1z(A.Df,"How to play",A.aG,new C.e2g(d,e))],v),A.l,r,A.e,A.h,0,r,r),A.am,B.A(B.a([s.at8(A.oG,"Circuits",A.bf,s.gct8()),A.bn,s.at8(A.oE,"Repair",A.aQ,new C.e2h(s)),A.bn,s.at8(I.wR,"Clear",A.bW,new C.e2i(s))],v),A.l,r,A.e,A.h,0,r,r)],v),A.l,r,A.e,A.N,0,A.p),A.f,r,r,new B.o(K.C8,r,new B.bG(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bJl,r,r,r)},
B(d){var w=this,v=null
$.atQ="tech"
return B.c4(v,A.c4,B.bm(!0,B.x(B.a([w.ccv(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hm8(w.d,w.e,w.gcct(),v),1)],x.p),A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.azv.prototype={
S(){return new C.bbH(null,null)}}
C.bbH.prototype={
gazt(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.Y,null,1,null,v)
w.cK(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
t(){this.gazt().t()
this.bxS()},
B(d){var w=null,v=this.a.c
return B.az(w,B.ha(new B.a5(42,42,B.c6(this.gazt(),new C.cM7(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bbG.prototype={
a4(d,e){var w,v,u,t=null,s=e.ej(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.L()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.y=N.oA
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eE_.aD(0,B.bV(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.aa
v.c=2.2
v.san(new B.h2(A.z,0,6.283185307179586,A.x,D.d2I,t,new B.mO(p)).aD(0,B.bV(s,r)))
d.O(s,r,v)
p=new C.cM6(d)
p.$3(s.a5(0,A.tI),8+o*1.5,1)
q*=4
p.$3(s.a5(0,D.esO),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a5(0,D.evb),2.6,0.5+0.5*Math.cos(q))
u=B.fE(t,A.cx,t,t,t,D.frU,A.a7,A.c_,t,A.dJ,A.c0)
u.eo()
u.a4(d,s.a5(0,new B.r(-u.b.c/2,5)))},
aE(d){return d.b!==this.b}}
C.azQ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.azR.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bwv()}}
C.aM4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAk.prototype={}
C.fU.prototype={}
C.Ki.prototype={
a7(){return"ScreenStyle."+this.b}}
C.m4.prototype={}
C.W9.prototype={
S(){return new C.aFn(Z.AA,null,null)}}
C.aFn.prototype={
gaaG(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.ox,null,1,null,v)
w.cr(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
gabp(){var w=D.mu.h(0,this.a.c)
return w==null?D.aT6:w},
t(){if(this.f){O.CS(V.KJ)
O.bFv()}this.gaaG().t()
this.bzK()},
gBF(){var w=this.gaaG().y
w=w==null?null:A.o.ar(w.a,1000)
return(w==null?0:w)/1000},
O4(){var w,v=this,u=v.e
if(u==null)return null
w=F.ik[u].e
if(w===-2)return null
if(w===-1)return A.o.F(v.y+A.j.bg(Math.max(0,v.gBF()-v.z)/10),14)
return w},
JO(d){this.m(new C.dYX(this,d))},
b4O(d){this.m(new C.dYY(this,d,14))},
aDh(d){var w=this.O4()
if(w==null)w=d>0?-1:0
return this.b4O(w+d)},
cFg(d,e){if(e.a<=0||e.b<=0||this.O4()==null)return
this.m(new C.dZ7(this,d,e))},
adA(){return this.c4S()},
c4S(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$adA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.O4()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bT(A.L,null,new C.dYW(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$adA)
case 3:if(t.c!=null&&r.a)t.b4O(q)
case 1:return B.h(u,v)}})
return B.i($async$adA,v)},
cGO(){var w=this,v=!w.f
w.m(new C.dZ8(w,v))
if(v){O.CS(V.abo)
O.hhZ(w.gabp().b===D.xq)}else{O.CS(V.KJ)
O.bFv()}},
ccy(){var w,v=this
if(!v.f)return
B.jr()
v.m(new C.dZ9(v))
w=v.c.L(x.q).f
w.Mh()
if(v.r)w.T(F.aVd)},
aPW(d){return B.cm(new C.dYP(this,d))},
cmt(d){var w,v=this,u=null,t=v.gBF(),s=t-v.w,r=s<1.4?new L.b_q(v.x,s):u
if(F.ik[d].e===-1){w=Math.max(0,t-v.z)
return new C.ag_(d,w,r,A.o.F(v.y+A.j.bg(w/10),14),u)}return new C.ag_(d,t,r,u,u)},
aZA(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.D(new B.Q(u,0,u,0),B.A(B.a([B.W(A.kZ,A.av,w,w,w,d*0.6),new B.a5(d*0.18,w,w,w),B.d("Learn more",w,w,w,w,w,w,B.m(w,w,A.av,w,w,w,w,w,w,w,w,d*0.48,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),w),A.o0,!0,w,w,w,w,D.hvx,w,w,w,w,w,w,this.gc4R(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.o0,w,w,A.ai)},
b1B(d,e,f,g){var w=null,v=B.nb(w,A.b5,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.W(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
ccx(d,e,f){return this.b1B(d,e,f,null)},
cur(){var w=this,v=null,u=new C.dZ5(),t=A.w.j(0.72),s=B.l(22),r=B.K(w.gabp().d.j(0.5),A.r,1),q=u.$3(D.bTN,"AD \u2212",new C.dZ1(w)),p=u.$3(A.arh,"AD +",new C.dZ2(w)),o=u.$5$color$on(A.kB,"HOME",new C.dZ3(w),w.gabp().d,w.e==null),n=w.e
n=n!=null&&F.ik[n].e===-1
return B.p(v,B.A(B.a([q,p,o,u.$5$color$on(A.zp,"ADS",new C.dZ4(w),A.c3,n)],x.p),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.n),v,v,D.hvC,v,A.OM,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gabp(),l=o.f,k=!l||!o.r
l=l?B.aE(d,A.dD,x.w).w.r.b+26:8
w=o.ccx(A.cB,"Back to the board",new C.dZa(d))
v=o.f
u=v?Ai.HP:A.wT
v=v?"Leave full screen":"Full screen"
v=o.b1B(u,v,o.gbbl(),D.hwn)
u=B.l(20)
t=o.e
s=m.a
r=x.p
q=new B.D(new B.Q(8,l,8,0),B.A(B.a([w,A.ae,v,A.ae,B.E(new B.bK(A.a8,n,n,B.p(n,B.d(t==null?s:s+" \xb7 "+F.ik[t].a,n,1,A.a2,n,n,n,Ak.xz,n,n,n),A.f,n,n,new B.o(A.b5,n,n,u,n,n,A.n),n,n,n,n,A.lN,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,n,n),n)
p=m.b===D.xq?o.bMa(m):o.cpS(m)
l=o.f
w=!l
v=l?o.gb1C():n
if(l){l=B.as(p,n,n,n)
u=k?1:0
r=new B.an(A.a0,n,A.b1,A.t,B.a([l,B.ao(n,B.xv(new B.dt(!k,q,n),A.b0,A.ie,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.x(B.a([q,A.am,o.cur(),B.E(new B.D(A.cw,B.as(p,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,A.p)
return B.c4(n,A_.a_o,B.bm(w,B.az(A.bX,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
ccw(d){var w
switch(d.a){case 1:w=0.46153846153846156
break
case 2:w=0.45
break
case 3:w=0.9259259259259258
break
case 4:w=0.75
break
default:w=0.7317073170731708
break}return w},
cpS(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aao
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c6(p.gaaG(),new C.dZ0(p,w,d,m),o)
if(n===D.aap)v=new B.BD(D.bK_,v,o)
n=p.ccw(n)
u=p.f?A.hz:A.a0R
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.w,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.l(w)
r=B.a([new B.ab(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fH(n,B.p(o,B.p(o,v,A.f,o,o,new B.o(A.w,o,o,B.l(w-3),o,o,A.n),o,o,o,o,A2.Hi,o,o,o),A.f,o,o,new B.o(o,o,o,s,r,new B.a7(A.ay,A.aC,A.x,q,o,o),A.n),o,o,o,u,new B.Q(t,t,t,t),o,o,o),o)},
ba0(d){var w=Date.now(),v=A.o.D(this.a.d+A.j.bg(this.gBF()*0.4),0,100),u=d.b===D.aao,t=u?34:20,s=u?28:18
return new B.D(new B.Q(t,12,s,2),B.cm(new C.dZ6(new B.V(w,0,!1),v)),null)},
axj(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.l(e*0.26)
w=x.p
t=B.a([B.p(v,B.as(B.d(d.b,v,v,v,v,v,v,B.m(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dsv,new B.a7(A.ay,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.ax,B.d(d.a,v,1,A.a2,v,v,v,D.fyv,v,v,v)],w))
return B.az(v,B.x(t,A.l,v,A.e,A.N,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dYU(this,d),v,v,v,v,v,v,!1,A.a4)},
c2J(d,e){return this.axj(d,e,!0)},
c2q(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aT7||o===D.AO,m=d.d,l=B.ap(m,A.w,0.55)
l.toString
m=B.ap(m,A.jX,0.5)
m.toString
m=B.a([l,A.dA,m],x.O)
l=q.ba0(d)
w=n?190:138
v=B.l(24)
u=B.K(A.aT,A.r,1)
w=B.az(p,B.p(p,B.bu(B.l(23),B.b4(p,p,p,new C.ag_(0,q.gBF(),p,p,p),A.h4),A.aq),A.f,p,p,new B.o(p,p,u,v,p,p,A.n),p,w,p,A.hZ,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dYS(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.ik[s]
t.push(new B.cj(A.z,p,p,new B.dy(A.dM,A.z,A.f,q.c2J(r,n?58:54),p),p))}l=B.a([l,A.am,w,A.af,B.E(B.l_(0.92,t,v,8,12,A4.wC,p,!1),1)],u)
if(o!==D.aap){o=A.c.j(0.16)
w=B.l(28)
l.push(B.p(p,B.cm(new C.dYT(q)),A.f,p,p,new B.o(o,p,p,w,p,p,A.n),p,p,p,D.bEj,H.ao8,p,p,p))}return B.p(p,B.x(l,A.l,p,A.e,A.h,0,A.p),A.f,p,p,new B.o(p,p,p,p,p,new B.a7(A.ay,A.aC,A.x,m,p,p),A.n),p,p,p,p,p,p,p,p)},
bFx(d,e){var w=this,v=null,u=w.O4(),t=w.ba0(d),s=B.E(w.aPW(e),1),r=x.p,q=B.a([B.bR(0,B.az(v,B.p(v,B.as(B.d(F.ik[e].a,v,v,v,v,v,v,A.KR,v,v,v),v,v,v),A.f,A.w,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dYM(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.aZA(22),v,v,v,10,8,v))
return B.p(v,B.x(B.a([t,s,new B.a5(v,38,new B.an(A.a0,v,A.ad,A.t,q,v),v)],r),A.l,v,A.e,A.h,0,A.p),A.f,A.w,v,v,v,v,v,v,v,v,v,v)},
aSX(d,e){return B.c6(this.gaaG(),new C.dYR(this,e,d),null)},
bMa(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qp(t.aSX(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.l(q?26:14)
u=B.a([new B.ab(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fH(1.5384615384615383,B.p(s,B.bu(B.l(q?20:8),t.aSX(d,q),A.aq),A.f,s,s,new B.o(s,s,s,v,u,new B.a7(A.ay,A.aC,A.x,w,s,s),A.n),s,s,s,A.ao2,new B.Q(8,8,8,r),s,s,s),s)}}
C.bym.prototype={
a4(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.S()
w=B.L()
v=this.c
u=B.ap(v,A.w,0.6)
u.toString
t=B.ap(v,A.jX,0.4)
t.toString
w.san(new B.a7(A.ay,A.aC,A.x,B.a([u,A.dA,t],x.O),null,null).aD(0,new B.a4(0,0,p,o)))
d.aF(new B.a4(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ar(A.S,A.Q,A.V,A.X,A.U)
t.r=v.j(0.1).gp(0)
t.y=D.bK4
d.O(new B.r(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aE(d){return!0}}
C.ag_.prototype={
a4(d,e){var w=this
return L.Me(d,e,w.b,w.c,w.e,w.d)},
aE(d){return!0}}
C.aNT.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bx8.prototype={}
C.a9D.prototype={
B(d){var w=null
return B.c4(B.eR(w,w,w,!0,!0,D.aj9,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,I.asO,w,w,w,new C.cns(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h72,w,w,w,1,w,!0),D.aj9,B.cw(B.a([D.ewD,B.cm(new C.cnt())],x.p),w,w,D.bFp,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.XM.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aH2(w,new B.au(A.aw,$.ax()),$,A.bC,0,B.a([],x.X),null,null)}}
C.aH2.prototype={
Y(){this.a3()
this.mk()},
b7T(d){var w=this.d.length
return A.o.F(A.j.bg(A.j.F(A.j.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mE(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b7T(v.f)
if(w!==v.x){v.x=w
E.mw("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eVU(v))
C.JO("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cep(){if(this.d.length<2)return
this.m(new C.eVQ(this))},
b2b(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eVP(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gceo(),p=s.d,o=B.E(B.az(r,B.b4(r,r,r,new C.byy(p,s.f,r),A.h4),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.as(B.d(n,r,r,r,r,r,r,D.fGu,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.h,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aCF[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.az(r,B.p(r,B.d(p[v],r,r,r,r,r,r,D.fFH,r,r,r),A.f,r,r,new B.o(u,r,r,new B.be(t,t,t,t),r,r,A.n),r,r,r,A.f0,A.hn,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eVS(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lE(A.aQ,A.f6,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fd(o,r,r),B.A(B.a([B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bz(r,new B.b6(4,B.l(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kp,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eVT(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,A.dj,!0,A.a7,r,A.ao,r,r,r,r),1),A.ae,new E.fD(A.i_,"Add",s.gcem(s),A.c,r),A.bn,new E.fD(A.nL,"Spin",q,A.bc,r)],w),A.l,r,A.e,A.h,0,r,r)],w),A.l,r,A.e,A.N,0,A.p))}}
C.byy.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.r(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.S()
w=B.L()
w.r=D.bk_.gp(0)
d.O(g,i,w)
w=B.L()
w.b=A.aa
w.c=3
w.r=A.aQ.gp(0)
d.O(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bV(g,f)
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.r=D.aCF[A.o.F(r,8)].gp(0)
d.cQ(p,q,u,!0,o)
o=B.bV(g,f)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.b=A.aa
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cQ(o,q,u,!0,p)
J.br(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aA(p,0,11)+"\u2026"
n=new B.iA(new B.eq(p,l,l,A.cL,l,l,l,l,l,l,D.fsI),A.a7,A.c_,new B.jj(1),l,l,l,l,A.c0,l,A.cx)
n.eo()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.r(f-o-16,-p.gba(p)/2))
i.restore()}i=B.L()
i.r=D.aiL.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.aa
i.c=3
i.r=A.aQ.gp(0)
d.O(g,20,i)
m=new B.aH(k.r,A.aj,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bw())
h=B.L()
h.r=A.c.gp(0)
d.af(m,h)
h=B.L()
h.b=A.aa
h.c=2
h.r=A.b5.gp(0)
d.af(m,h)},
aE(d){return!0}}
C.Wy.prototype={
S(){return new C.bmv($,A.bC,0,B.a([],x.X),null,null)}}
C.bmv.prototype={
Y(){this.a3()
this.mk()},
mE(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JO("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UR(900,new C.e5_())}w.m(new C.e50())},
b2d(d){return this.m(new C.e4V(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b0(A.o.v(A.j.ar(m,60)),2,"0")
v=A.a.b0(A.o.v(A.o.F(A.j.cB(m),60)),2,"0")
m=B.b4(n,n,n,new C.btd(l,A.bW,n),A.aUC)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fxo,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.as(new B.a5(280,280,new B.an(A.z,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fwl,n,n,n),A.ax,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vM,n,n,n)],s),A.l,n,A.e,A.N,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dpm[r]
u.push(new E.dY(""+q+" min",o.d===q,new C.e4X(o,q),n,A.bW,n))}m=o.f
p=m?A6.v5:A.he
m=m?"Pause":"Start"
return E.lE(A.bW,A.f6,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fd(u,n,n),new E.fd(B.a([new E.fD(p,m,new C.e4Y(o),A.bc,n),new E.fD(A.oJ,"Reset",new C.e4Z(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.N,0,A.p))}}
C.btd.prototype={
a4(d,e){var w,v,u,t,s=e.ej(A.J),r=e.a/2-14
$.S()
w=B.L()
w.b=A.aa
w.c=16
w.r=A.c.j(0.08).gp(0)
d.O(s,r,w)
w=B.bV(s,r)
v=B.L()
v.b=A.aa
v.c=16
v.d=A.bG
u=this.c
t=B.ap(u,A.c,0.4)
t.toString
v.san(new B.h2(A.z,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aD(0,B.bV(s,r)))
d.cQ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aE(d){return d.b!==this.b}}
C.VJ.prototype={
S(){return new C.bm4($,A.bC,0,B.a([],x.X),null,null)}}
C.bm4.prototype={
Y(){this.a3()
this.mk()},
mE(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Ty.h(0,p.d)
w.toString
v=A.d.f0(w,new C.dQg())
u=A.j.F(p.f,v)
s=0
r=0
for(;;){if(!(r<4)){t=0
break}s+=w[r]
if(u<s){t=r
break}++r}q=p.r
if(t!==q){if(q!==3)w=q===2&&w[3]===0
else w=!0
if(w)++p.w
p.r=t
E.mw("flute",D.ccH[t]+5,1400,0.35)}p.m(new C.dQh())},
gces(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L6("Press Start",0.5)
w=D.Ty.h(0,this.d)
w.toString
v=A.d.f0(w,new C.dQb())
u=A.j.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L6("Breathe in",0.5+0.5*A.dH.az(0,p))
case 1:return new B.L6("Hold",1)
case 2:return new B.L6("Breathe out",1-0.5*A.dH.az(0,p))
default:return new B.L6("Hold",0.5)}}}return new B.L6("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gces(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fJ.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ab(0,A.G,A.fJ.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.q1,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kp,q,q,q),q,q,q,q,q,q))
n=B.as(new B.a5(300,340,new B.an(A.z,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aT(D.Ty.gew(D.Ty));w.C();){v=w.gP(w)
o.push(new E.dY(v,r.d===v,new C.dQe(r,v),q,A.fJ,q))}w=r.e
v=w?A.zF:A.he
w=w?"Stop":"Start"
o.push(new E.fD(v,w,new C.dQf(r),A.bc,q))
return E.lE(A.fJ,A.f6,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fd(o,q,q))}}
C.aKu.prototype={}
C.Wp.prototype={
S(){return new C.bmm(new B.cx(null,x.A),B.a([],x.au),A.av,A.c)}}
C.bmm.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,I.oR,s,s,s,new C.e1v(t,d),s,s,s,s,"Share",s)],r),p=B.bu(B.l(18),new B.en(B.az(s,B.b4(s,s,s,new C.boo(t.e,t.x,s),A.h4),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e1w(t),new C.e1x(t),s,s,s,s,s,s,s,s,s,new C.e1y(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d4g[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G4(v,u,new C.e1z(t,v),!1,s))}u=t.r
return E.lE(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bU,p,s),"DRAW PAD",B.x(B.a([new E.fd(o,s,s),E.iT(A.bE,""+A.j.V(u),"Brush",30,2,new C.e1A(t),u),new E.fd(B.a([new E.dY("Eraser",t.w,new C.e1B(t),A.zq,A.bE,s),new E.fD(A.pE,"Undo",new C.e1C(t),A.c,s),new E.fD(A.ej,"Clear",new C.e1D(t),A.c,s),new E.fD(A.PQ,"Paper",new C.e1E(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.N,0,A.p))}}
C.boo.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.S()
w=B.L()
w.r=this.c.gp(0)
d.aF(new B.a4(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bG
q.e=A.dP
q.b=A.aa
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aH(r.r,A.aj,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ab()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.ce(o,r,(o+k.a)/2,(r+k.b)/2)
p.push(k)
r=m.f
if(r!=null)k.ak(r)
m.ab()}r=new B.aq(A.d.gal(n).a,A.d.gal(n).b)
p.push(r)
p=m.f
if(p!=null)r.ak(p)
m.ab()
d.af(m,q)}}},
aE(d){return!0}}
C.X8.prototype={
S(){var w=x.S
return new C.aGl(B.aR(w),B.aR(w))}}
C.aGl.prototype={
Y(){this.a3()
this.auE()},
auE(){var w,v,u=this,t=x.N,s=B.bp(D.duG,!0,t)
A.d.Dw(s)
w=x.S
v=B.U(s).c
t=B.C(B.cX(s,0,B.dD(u.d,"count",w),v),t)
A.d.u(t,B.cX(s,0,B.dD(u.d,"count",w),v))
A.d.Dw(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
cen(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mw("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.esr(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bN(A.n_,new C.ess(s,v,u),t)
else{s.x=!0
B.bN(Ad.GZ,new C.est(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.W9,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ar(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yX,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.m(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.j_,A.h,0,q,q),q),B.E(B.it(!0,q,q,A.y,new B.hJ(v,8,8,1,q),new C.esx(r),r.e.length,A.bj,q,A.ah,!1),1)],o),A.l,q,A.e,A.h,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d5S[t]
o.push(new E.dY(s.b,r.d===s.a,new C.esy(r,s),q,A.aG,q))}o.push(new E.fD(I.arg,"New game",new C.esz(r),A.bc,q))
return E.lE(A.aG,A.f6,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fd(o,q,q))}}
C.Xi.prototype={
S(){return new C.aGG(B.a([],x.t))}}
C.aGG.prototype={
cer(d){A.d.a8(this.d)
this.w=!0
this.b2c()},
b2c(){this.d.push(A.cR.aw(4))
this.e=0
this.a0d()},
a0d(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0d=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eDd(t))
s=x.H
w=3
return B.b(B.bN(A.lL,null,s),$async$a0d)
case 3:r=t.d,q=B.bp(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVV(n)
w=7
return B.b(B.bN(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a0d)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eDe(t))
case 1:return B.h(u,v)}})
return B.i($async$a0d,v)},
aVV(d){this.m(new C.eDb(this,d))
E.mw("marimba",D.ccG[d]+5,450,0.55)
B.bN(A.GX,new C.eDc(this),x.H)},
cet(d){var w,v,u=this
if(!u.w||u.r)return
u.aVV(d)
w=u.d
v=u.e
if(w[v]!==d){G.dA(90,"",600,0,0.5,"saw")
u.m(new C.eDf(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eDg(u))
B.bN(A.hM,new C.eDh(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,U.aXe,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fGV,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aBv[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.ab(0,A.G,D.aBv[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.az(p,B.cT(p,p,p,p,A.b0,new B.o(u,p,new B.bG(r,r,r,r),new B.be(t,t,t,t),s,p,A.n),A.jq,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eDi(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.as(new B.D(A.ac,B.x(B.a([o,A.am,n,A.da,new B.fH(1,B.l_(1,l,2,12,12,p,A.e_,!1),p)],m),A.l,p,A.b8,A.h,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lE(A.bt,A.f6,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fd(B.a([new E.fD(A.he,n,q.gceq(q),A.bc,p)],m),p,p))}}
C.XD.prototype={
S(){return new C.bnC(new B.au(A.aw,$.ax()))}}
C.bnC.prototype={
ayd(d){return B.ou(A.j.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eRf(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cW(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eRo()
l=B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bz(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.l(16),A8.y4),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.l(16),D.b6b),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lY,"Bill amount",!0,!0,!1,m,m,m,m,D.fEb,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.ea,m,m,m,1,m,m,!1,"\u2022",m,new C.eRk(n),m,m,m,!1,m,m,!1,m,!0,m,A.ac,m,m,m,m,m,m,m,m,m,m,m,A.aWd,!0,A.a7,m,A.ao,m,m,m,m)
k=A.bc.j(0.1)
s=B.l(20)
r=B.K(A.bc.j(0.35),A.r,1)
q=x.p
s=B.cw(B.a([l,A.bx,B.p(m,B.x(B.a([t.$2("Tip ("+A.j.V(n.e)+"%)","$"+n.ayd(w)),t.$2("Total","$"+n.ayd(v)),A5.O4,t.$3$big("Each of "+n.f+" pays","$"+n.ayd(u),!0)],q),A.l,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bS,m,m,m)],q),m,m,A.fu,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cR3[p]
r.push(new E.dY(""+o+"%",A.j.V(n.e)===o,new C.eRl(n,o),m,A.bc,m))}l=n.f
return E.lE(A.bc,A.f6,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fd(r,"TIP",m),E.iT(A.aG,""+l,"People",20,1,new C.eRm(n),l),new E.fd(B.a([new E.dY("Round up",n.r,new C.eRn(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.N,0,A.p))}}
C.X7.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bn6(w,A.cR,$,A.bC,0,B.a([],x.X),null,null)}}
C.bn6.prototype={
Y(){this.a3()
this.mk()},
mE(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.j.bg(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.XF("snare",0,0.5)}u.m(new C.er6())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h3()
u.w=t
u.x=t?0:3.141592653589793
E.mw("bell",24,400,0.5)}u.m(new C.er7())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bfX(v,o.r>0,n))}u=B.az(n,B.as(B.bZ(A.fU,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.er_(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.j.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.d5,A.r,6)
s=B.a([new B.ab(0,A.G,A.aQ.j(0.4),A.J,30)],x.V)
u=B.az(n,B.as(B.e3(A.z,B.p(A.z,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fDk,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eE3,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.er0(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.az(n,B.as(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fsb,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kp,n,n,n)],x.p),A.l,n,A.e,A.N,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.er1(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dmx[r]
v.push(new E.dY(q.b,o.d===q.a,new C.er2(o,q),q.c,A.bf,n))}v=B.a([new E.fd(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iT(A.bf,""+s,"Dice",4,1,new C.er3(o),s))}if(o.d==="num"){s=o.z
s=E.iT(A.bf,""+s,"From",100,1,new C.er4(o),s)
p=o.Q
A.d.u(v,B.a([s,E.iT(A.bf,""+p,"To",1000,2,new C.er5(o),p)],m))}return E.lE(A.bf,A.f6,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.N,0,A.p))}}
C.bfX.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cR.ai()-0.5)*0.6
else w=0
v=B.l(22)
u=B.a([new B.ab(0,A.G,A.w.j(0.4),A.cz,14)],x.V)
t=B.a([],x.p)
for(s=D.dGT.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.p(p,p,A.f,p,p,A.Yd,p,18,p,p,p,p,p,18),p))
return B.eI(A.z,w,B.p(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bH,p,p,100),p)}}
C.aNF.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAg.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bzw()}}
C.aO_.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAm.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bzS()}}
C.aOs.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAv.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bAl()}}
C.aOT.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAE.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bAM()}}
var z=a.updateTypes(["R(u0)","~()","R(a5H)","aB<~>()","R(D5)","F(u0,F)","H(H,u0)","R(D1)","R(a_G)","R(acL)","R(a4z)","R(nN)","XE()","VI()","a9D()","Xd()","Xs()","Xe()","R(mZ)","VP()","agi(Z,F)","af9(Z,F)","~(a9<@,@>)","F(D1,D1)","n(ei)","R(ag6)","R(a1U)","R(Dg)","R(adf)","R(afc)","R(acZ)","F(F,re)","F(F,D5)","n(re)","~(re,ai<n>,F)","re?(D5)","X7()","v(n,a1H)","R(abE)","~(B5)","XH()","~(xD,n,r,u,H)","~(n,u0)","Wq()","WS(Z)","Oi(Z)","W9(Z,bt<H>,bt<H>)","J0(Z)","XM()","Wy()","VJ()","Wp()","X8()","Xi()","XD()","R(re)"])
C.fLP.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fAv.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fIc.prototype={
$1(d){var w
if(!this.a.Mt(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fId.prototype={
$1(d){return d.x},
$S:z+0}
C.fLM.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fLN.prototype={
$1(d){var w
if(!this.a.Mt(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fLO.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ekc.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ekd.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.eke.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mv(v,A.e5,A.ie)}},
$S:7}
C.ekp.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ekq.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ekl.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ekj.prototype={
$2(d,e){var w=this.a
w.r.push(B.cz(B.dw(0,0,0,d,0,0),new C.ekk(w,this.b,e)))},
$S:1922}
C.ekk.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ekm.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gXe().aly(0,u[1],u[2],u[3])
u[4].bO(0,new C.ekh(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dA(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.eki(w.a,v,w.f,w.r))},
$S:0}
C.ekh.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:201}
C.eki.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.j.bg(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ekn.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gXe().amn(t,u[1],s,u[3])
G.dA(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ekg(w.a,v,w.e,w.f))},
$S:0}
C.ekg.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.j.bg(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eko.prototype={
$0(){G.dA(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ekf(w,this.b))},
$S:0}
C.ekf.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ekt.prototype={
$0(){var w=this.a
return w.m(new C.eks(w))},
$S:0}
C.eks.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eku.prototype={
$0(){var w=this.a
return w.m(new C.ekr(w))},
$S:0}
C.ekr.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ekv.prototype={
$0(){var w=this.a
w.f.sb3(0,this.b)
w.Q_()},
$S:0}
C.ekw.prototype={
$0(){return this.a.Zl(this.b)},
$S:0}
C.ekx.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Q_():w.aYV()},
$S:2}
C.eky.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Q_():w.aYV()},
$S:0}
C.ezx.prototype={
$2(d,e){return d+e},
$S:1923}
C.ezR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ezQ(w,d))},
$S:1924}
C.ezQ.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.j.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.ezS.prototype={
$0(){},
$S:0}
C.ezT.prototype={
$0(){},
$S:0}
C.ezz.prototype={
$0(){return this.a.m(new C.ezy(this.b,this.c))},
$S:0}
C.ezy.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ezo.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.ezp.prototype={
$1(d){return this.a.cx=d},
$S:29}
C.ezq.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.ezr.prototype={
$1(d){return this.a.cy=d},
$S:29}
C.ezs.prototype={
$1(d){return this.a.db===d},
$S:33}
C.ezt.prototype={
$1(d){return this.a.db=d},
$S:29}
C.ezu.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.ezv.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.I(0,d)},
$S:29}
C.ezw.prototype={
$0(){var w=this.a
return w.m(w.gayP())},
$S:0}
C.ezm.prototype={
$1(d){return this.a.$1(!0)},
$S:72}
C.ezn.prototype={
$1(d){return this.a.$1(!1)},
$S:110}
C.ezl.prototype={
$1(d){return this.a.$1(!1)},
$S:136}
C.ezK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bjP(o,p),n)
w=this.b
v=C.bCT("WORLD",w.a,w.c)
u=C.bCT("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.j.V(t*100)
t=t<0.25?A.bW:A.bc
t=C.bCT("FUEL",""+s+"%",t)
s=o.r.b
r=A.j.V(s*100)
s=s>D.DS[o.db].d?A.bW:A.c
q=x.p
s=B.a([v,u,t,C.bCT("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bCT("HEIGHT",""+A.j.V(A.j.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.j_,A.h,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bIz(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tt[w].a+".":"You landed on every world!"
v=B.a([new E.fD(A.nN,"Again",new C.ezF(o),A.c,p),new E.fD(A.oE,"Rebuild",new C.ezG(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fD(A.jt,"Next world",new C.ezH(o),A.bc,p))
n.push(C.hBd("Perfect landing!",w,A.bc,v))}if(o.as==="crashed")n.push(C.hBd("Crash!",o.at,A.bW,B.a([new E.fD(A.nN,"Try again",new C.ezI(o),A.bc,p),new E.fD(A.oE,"Rebuild",new C.ezJ(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b1,A.t,n,p)},
$S:63}
C.ezF.prototype={
$0(){var w=this.a
return w.m(w.gayP())},
$S:0}
C.ezG.prototype={
$0(){var w=this.a
return w.m(new C.ezC(w))},
$S:0}
C.ezC.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ezH.prototype={
$0(){var w=this.a
return w.m(new C.ezB(w))},
$S:0}
C.ezB.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.ezI.prototype={
$0(){var w=this.a
return w.m(w.gayP())},
$S:0}
C.ezJ.prototype={
$0(){var w=this.a
return w.m(new C.ezA(w))},
$S:0}
C.ezA.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ezL.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.ezE(v,w))},
$S:0}
C.ezE.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.ezM.prototype={
$1(d){return this.a.y=d},
$S:9}
C.ezN.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.ezO.prototype={
$1(d){return this.a.z=d},
$S:9}
C.ezP.prototype={
$0(){var w=this.a
return w.m(new C.ezD(w))},
$S:0}
C.ezD.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dQ9.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iH(B.a([C.hwj(),C.hwk()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kW(0,B.cP(J.t(r,1)))
q.m(new C.dQ8(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:52}
C.dQ8.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dPK.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dPL.prototype={
$0(){return this.a.c_u(B.aV(J.t(this.b,"group")))},
$S:0}
C.dPM.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dPN.prototype={
$1(d){return A.a.b0(A.o.ft(A.o.D(A.j.V(d*255),0,255),16),2,"0")},
$S:328}
C.dQa.prototype={
$0(){return E.XF("kick",0,0.25)},
$S:0}
C.dPO.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dPP.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dPQ.prototype={
$0(){return E.XF("kick",0,0.5)},
$S:0}
C.dPR.prototype={
$0(){return G.dA(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dPT.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.CW
if(w===2)w=1
else w=w===1?0:2
u.CW=w}else{w=this.a
v=w.ch
if(v.q(0,u))v.W(0,u)
else{v.I(0,u)
if(w.CW===2)w.CW=1}if(v.a===0&&w.CW===0)w.CW=2
u=w}if(u.cy!=null&&!A.d.aU(u.d.e,new C.dPS(u)))u.cy=null
u.id=0},
$S:0}
C.dPS.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAE(d)},
$S:z+10}
C.dPH.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dPI.prototype={
$0(){var w=this.a
return w.m(w.gcaa())},
$S:0}
C.dPJ.prototype={
$0(){return this.a.aeX(null)},
$S:0}
C.dQ_.prototype={
$0(){var w=this.a.as
return w==null?null:w.f9(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dQ0.prototype={
$0(){return this.a.cGW(this.b.a)},
$S:0}
C.dQ1.prototype={
$0(){return this.a.aeX(this.b)},
$S:0}
C.dQ2.prototype={
$1(d){var w=this.a
return w.m(new C.dPZ(w,d))},
$S:6}
C.dPZ.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dQ3.prototype={
$0(){var w=this.a
return w.m(new C.dPY(w,this.b))},
$S:0}
C.dPY.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dQ4.prototype={
$0(){var w=this.a
return w.m(new C.dPX(w))},
$S:0}
C.dPX.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dQ5.prototype={
$0(){var w=this.a
return w.m(new C.dPW(w))},
$S:0}
C.dPW.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f9(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.Ma},
$S:0}
C.dQ6.prototype={
$0(){var w=this.a
return w.m(new C.dPV(w))},
$S:0}
C.dPV.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b0J()
else w.p3=null},
$S:0}
C.dQ7.prototype={
$0(){var w=this.a
return w.m(new C.dPU(w))},
$S:0}
C.dPU.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c7i.prototype={
$1(d){var w=document.createElement("iframe"),v=w.style
v.border="none"
v=w.style
v.width="100%"
v=w.style
v.height="100%"
v=w.style
v.background="#07080f"
w.setAttribute("sandbox","allow-scripts")
w.srcdoc=this.b
return this.a.c=w},
$S:295}
C.c7j.prototype={
$1(d){var w=new B.qv([],[]).o4(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:379}
C.ftN.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)},
$S:218}
C.ftO.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)||w.h(d,1)},
$S:218}
C.ftP.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)!==w.h(d,1)},
$S:218}
C.ftW.prototype={
$1(d){return!J.t(d,0)},
$S:218}
C.ftX.prototype={
$1(d){var w=J.a8(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:218}
C.ftY.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:218}
C.dRP.prototype={
$1(d){return this.a.avt(0)},
$S:7}
C.dRt.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.ijg(),B.U(w).k("N<1,F>")).fL(0)},
$S:0}
C.dRw.prototype={
$1(d){return""+d},
$S:77}
C.dRQ.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dRr.prototype={
$1(d){return this.a.avt(this.b)},
$S:7}
C.dRs.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.azk(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mU(0,d,a1.ml(0.15,0.3))
u=a1.mU(0,d,a1.ml(0.15,0.62))
t=a1.mU(0,"and",a1.ml(0.48,0.46))
s=a1.mU(0,a0,a1.ml(0.82,0.46))
a1=t.a
w.push(new C.nN(v.a,a1,0))
w.push(new C.nN(u.a,a1,1))
w.push(new C.nN(a1,s.a,0))
break
case 1:v=a1.mU(0,d,a1.ml(0.12,0.25))
u=a1.mU(0,d,a1.ml(0.12,0.65))
r=a1.mU(0,"xor",a1.ml(0.46,0.25))
q=a1.mU(0,"and",a1.ml(0.46,0.65))
p=a1.azj(0,a0,a1.ml(0.82,0.25),0)
o=a1.azj(0,a0,a1.ml(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nN(a1,n,0))
m=u.a
w.push(new C.nN(m,n,1))
l=q.a
w.push(new C.nN(a1,l,0))
w.push(new C.nN(m,l,1))
w.push(new C.nN(n,p.a,0))
w.push(new C.nN(l,o.a,0))
break
case 2:k=a1.mU(0,"clock",a1.ml(0.15,0.4))
j=a1.mU(0,"not",a1.ml(0.45,0.65))
s=a1.mU(0,a0,a1.ml(0.82,0.3))
i=a1.mU(0,"buzzer",a1.ml(0.82,0.65))
a1=k.a
w.push(new C.nN(a1,s.a,0))
n=j.a
w.push(new C.nN(a1,n,0))
w.push(new C.nN(n,i.a,0))
break
default:h=a1.mU(0,d,a1.ml(0.12,0.25))
g=a1.mU(0,d,a1.ml(0.12,0.7))
f=a1.mU(0,"nor",a1.ml(0.5,0.25))
e=a1.mU(0,"nor",a1.ml(0.5,0.7))
s=a1.mU(0,a0,a1.ml(0.86,0.25))
a1=f.a
w.push(new C.nN(g.a,a1,0))
n=e.a
w.push(new C.nN(n,a1,1))
w.push(new C.nN(h.a,n,0))
w.push(new C.nN(a1,n,1))
w.push(new C.nN(a1,s.a,0))}},
$S:0}
C.dRx.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.azk(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.D1(p,"switch",new B.r(0.14*q.a,r*q.b),0))}o.mU(0,w.e,o.ml(0.86,0.5))},
$S:0}
C.dRm.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dRn.prototype={
$2(d,e){return A.j.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dRo.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dRp.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dRq.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aeg(this.c)
if(v.ax)C.JO("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dA(140,"",250,0,0.3,"square")}},
$S:0}
C.dRy.prototype={
$0(){},
$S:0}
C.dRz.prototype={
$0(){return A.d.cH(this.a.e,this.b)},
$S:0}
C.dRA.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dRv.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bq(w.e,new C.dRu(v))
w.cy=null},
$S:0}
C.dRu.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dRl.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mU(0,this.b,new B.r(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dRJ.prototype={
$0(){var w=this.a
return w.m(new C.dRI(w))},
$S:0}
C.dRI.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dRK.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.az(A.bX,B.jo(B.b4(w,w,w,new C.bdQ(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dRD(v),w,w,w,new C.dRE(v),new C.dRF(v),new C.dRG(v),w,w,w,w,w,w,w,w,w,w,new C.dRH(v),w,w,w,!1,A.a4)},
$S:36}
C.dRH.prototype={
$1(d){return this.a.cbY(d.b)},
$S:59}
C.dRF.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cla(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aAa(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aJ(0,u)}},
$S:49}
C.dRG.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.r(A.j.D(w.a+u.Q.a,46,u.x.a-46),A.j.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dRE.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c3_(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bq(v,new C.dRB(w))
u=t.as
u.toString
v.push(new C.nN(u,w.a,w.b))
B.jZ()}}t.z=t.as=null},
$S:37}
C.dRB.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dRD.prototype={
$1(d){return this.a.ay6(d.b)},
$S:289}
C.dRL.prototype={
$0(){return this.a.bEn(this.b.a)},
$S:0}
C.dRM.prototype={
$0(){return this.a.avt(this.b.a)},
$S:0}
C.dRN.prototype={
$0(){var w=this.a
return w.m(new C.dRC(w))},
$S:0}
C.dRC.prototype={
$0(){var w=this.a
w.azk(0)
w.ay=null},
$S:0}
C.dRO.prototype={
$0(){return this.a.cCw(this.b)},
$S:0}
C.cWP.prototype={
$0(){var w=this,v=null,u=B.fE(v,A.cx,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.c_,v,A.dJ,A.c0)
u.eo()
return u},
$S:267}
C.dY0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dY_.prototype={
$0(){return this.a.d=null},
$S:0}
C.dY2.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c4W()},
$S:127}
C.dY1.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.fud.prototype={
$0(){return I.aMg},
$S:z+40}
C.fue.prototype={
$0(){return D.dU1},
$S:z+43}
C.fuf.prototype={
$0(){return D.dQT},
$S:z+13}
C.fug.prototype={
$0(){return D.ekp},
$S:z+14}
C.fuh.prototype={
$0(){return D.e2i},
$S:z+15}
C.fui.prototype={
$0(){return I.aM7},
$S:z+16}
C.fuj.prototype={
$0(){return D.eib},
$S:z+17}
C.fuk.prototype={
$0(){return I.aMf},
$S:z+12}
C.ful.prototype={
$0(){return D.dT9},
$S:z+19}
C.f9C.prototype={
$2(d,e){return new C.agi(e,$.bHq()[e],new C.f9B(e,this.a),null)},
$S:z+20}
C.f9B.prototype={
$0(){var w=this.a,v=K.aJM.h(0,$.bHq()[w].a)
$.atQ=v==null?"music":v
B.a6(this.b,!1).ce(B.ed(new C.f9z(w),!1,null,x.H))},
$S:0}
C.f9z.prototype={
$1(d){return $.bHq()[this.a].e.$0()},
$S:39}
C.f9D.prototype={
$2(d,e){return new C.af9(e,D.aCa[e],new C.f9A(this.a,e),null)},
$S:z+21}
C.f9A.prototype={
$0(){return this.a.d.$1(D.aCa[this.b])},
$S:0}
C.f9i.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f9h.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f9g.prototype={
$1(d){var w=this
return new B.e2(new C.f9f(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f9f.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aE(a3,a0,a1).w
a1=B.aE(a3,a0,a1).w
w=x.p
v=B.a([D.fOy,A.ax,D.fVn,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fDE,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.by(1,A.ba,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.e7(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.F9,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jC,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0),A.ae,new B.by(2,A.ba,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.e7(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.F9,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jC,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dC7[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bw
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.az(a0,B.p(a0,B.W(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bG(e,e,e,e),new B.be(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.f0,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f9d(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.am,new B.c7(A.aM,A.e,A.h,A.l,a0,A.p,a0,0,l,a0),A.P,new B.a5(a0,44,B.cw(m,a0,a0,a0,a0,a0,A.aM,!1),a0),A.aB],w))}v.push(B.bI(A.B9,a0,new C.f9e(t,r,q,u,a3),a0))
return new B.D(new B.Q(0,0,0,a2.f.d),B.bm(!0,new B.cN(new B.aY(0,1/0,0,a1.a.b*0.86),B.cw(v,a0,a0,A3.yY,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:101}
C.f9d.prototype={
$0(){var w=this
return w.a.$1(new C.f9c(w.b,w.c,w.d))},
$S:0}
C.f9c.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f9e.prototype={
$0(){var w=this,v=w.a
v.m(new C.f9b(v,w.b,w.c,w.d))
B.a6(w.e,!1).N(null)},
$S:0}
C.f9b.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=B.C(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=B.C(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=B.C(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
C.f9q.prototype={
$0(){var w=this.a
return w.m(new C.f9p(w))},
$S:0}
C.f9p.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f9r.prototype={
$0(){return E.uH(this.b,this.a.f,"scene")},
$S:0}
C.f9s.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.ga_M().x
w===$&&B.c()
return new B.bM(new B.o(v,v,v,v,v,new B.bS(D.b3G,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c4],x.O),v,v),A.n),A.bi,v,v)},
$S:298}
C.f9t.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.as(new B.dy(A.dM,A.z,A.f,B.c6(new B.hb(B.a([u.guM(),u.ga_M()],x.dS)),new C.f9o(u,this.b,v),w),w),w,w,w)},
$S:238}
C.f9o.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guM().x
r===$&&B.c()
w=r<0.9?1:1-C.bua(r,0.9,0.98)
v=s.ga_M().x
v===$&&B.c()
u=A.dH.az(0,v)
switch(s.gazl().a){case 0:s=s.bDy(t.b,r,u,t.c)
break
case 1:s=s.bUx(t.b,r,u,t.c)
break
case 2:s=s.cHp(t.b,r,u,t.c)
break
case 3:s=s.bGu(t.b,r,u,t.c)
break
case 4:s=s.bJR(t.b,r,u,t.c)
break
case 5:s=s.cbZ(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:197}
C.f9u.prototype={
$2(d,e){var w=B.abr(this.b),v=this.c.d,u=B.ap(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cQn(u,A.bw,v,3.5)
u=this.a
w=u.guM().x
w===$&&B.c()
return B.Z3(B.l0(null,null,null,1,0,new C.f9n(u),A.j.D(w,0,1)),v)},
$S:1926}
C.f9n.prototype={
$1(d){var w=this.a
w.guM().sp(0,d)
if(w.as)w.m(new C.f9j(w))},
$S:6}
C.f9j.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f9v.prototype={
$0(){var w=this.a
w.guM().sp(0,0)
w.afn()},
$S:0}
C.f9w.prototype={
$1(d){var w=this.a
w.m(new C.f9m(w,d))
if(w.as)w.afn()},
$S:6}
C.f9m.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f9x.prototype={
$0(){var w=this.a
w.m(new C.f9l(w,this.b))
w.guM().sp(0,0)
if(w.as)w.afn()},
$S:0}
C.f9l.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f9y.prototype={
$0(){var w=this.a
return w.m(new C.f9k(w,this.b))},
$S:0}
C.f9k.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f99.prototype={
$2(d,e){return A.j.aQ(d.a,e.a)},
$S:1927}
C.f9a.prototype={
$1(d){return d.b},
$S:1928}
C.drW.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.drX.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.drT.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.drU.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drV.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drY.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.drZ.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.ds_.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ds0.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.ds1.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.ds2.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.ds3.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.ds4.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.ds5.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eyS.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eyH.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eyJ.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.eyK.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.eyN.prototype={
$1(d){var w=D.n8.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.eyO.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.eb(new B.cM(new B.Y(q,new C.eyP(d),p.k("Y<1>")),new C.eyQ(r),p.k("cM<1,re?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aM(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eyP.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eyQ.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eyL.prototype={
$1(d){return D.n8.h(0,d.b).c===D.xZ},
$S:z+55}
C.eyM.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ezh.prototype={
$1(d){var w=this.a,v=d.a,u=A.j.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vO(0,u)
w.a7H(A.o.ar(v,1000))},
$S:7}
C.eyR.prototype={
$0(){},
$S:0}
C.eyD.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$$0)
case 6:e.aC("String","ngmy_core_reaction_lab_v1",s.a.d.aj())
u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$$0,v)},
$S:1}
C.eyU.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.P,B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.W(D.n8.h(0,v).b,D.n8.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.h5Z,w,B.d(D.n8.h(0,v).a,w,w,w,w,w,w,A.h6,w,w,w),w,w,w),B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,Y.asS,w,w,w,w,new C.eyT(d),!1,w,w,w,w,w,w,w,D.fYf,w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:26}
C.eyT.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eyW.prototype={
$1(d){var w,v,u,t=null,s=B.aE(d,t,x.w).w,r=B.a([D.ewr],x.p)
for(w=0;w<6;++w){v=D.aCz[w]
u=B.d(v.a,t,t,t,t,t,t,A.h6,t,t,t)
r.push(B.dJ(!1,t,t,t,!0,t,t,t,!0,t,t,D.c4I,t,t,t,t,new C.eyV(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lY,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,s.a.b*0.7),B.cw(r,t,t,D.bJa,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:26}
C.eyV.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.eyG.prototype={
$1(d){var w=null
return B.ek(B.a([B.bO(!1,A.ds,w,w,!0,w,w,w,new C.eyE(d),w,w),B.bO(!1,A.Fd,w,w,!0,w,w,w,new C.eyF(d),w,w)],x.p),w,w,K.mc,D.fVA,w,w,w,w,D.fYy,w)},
$S:18}
C.eyE.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eyF.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ezf.prototype={
$0(){var w=this.a
return w.m(new C.eze(w))},
$S:0}
C.eze.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ezg.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nq(new C.ez5(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.beA:t
v=B.a([B.b4(u,t,t,new C.bjN(w,v,new C.ez6(r),new C.ez7(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dt(!0,B.c6(w,new C.ez8(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bLw())
return B.az(A.bX,B.jo(new B.an(A.a0,t,A.b1,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.ez9(r),t,r.gcmv(),t,new C.eza(r),new C.ezb(r),new C.ezc(r),t,t,t,t,t,t,t,t,t,t,new C.ezd(r),t,t,t,!1,A.a4)},
$S:36}
C.ez5.prototype={
$0(){return this.a.adj(this.b)},
$S:0}
C.ezd.prototype={
$1(d){return this.a.cF4(d.b)},
$S:59}
C.ezb.prototype={
$1(d){return this.a.cmw(d.b)},
$S:49}
C.ezc.prototype={
$1(d){return this.a.cmx(d.b)},
$S:19}
C.eza.prototype={
$1(d){return this.a.b4j()},
$S:37}
C.ez9.prototype={
$1(d){return this.a.ae0(d.b)},
$S:289}
C.ez6.prototype={
$0(){return this.a.z},
$S:704}
C.ez7.prototype={
$0(){return this.a.Q},
$S:756}
C.ez8.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bPP()
if(p.length===0)return A.bM
w=A.w.j(0.55)
v=B.l(14)
u=B.K(A.bw,A.r,1)
t=B.a([D.fSX,A.cQ],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,A.aXa,q,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.N,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.hn,q,q,q)},
$S:67}
C.eyI.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.l(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.D(A.el,B.A(B.a([B.p(w,B.W(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bb,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ae.W3,w,w,w),A.bF,B.d(g,w,w,w,w,w,w,F.ac_,w,w,w)],s),A.E,w,A.e,A.h,0,A.p),1)],s),A.E,w,A.e,A.h,0,w,w),w)},
$S:1930}
C.ez1.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hY()},
$S:0}
C.ez2.prototype={
$0(){var w=this.a
return w.m(new C.ez0(w))},
$S:0}
C.ez0.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ez3.prototype={
$0(){var w=this.a
return w.m(new C.ez_(w))},
$S:0}
C.ez_.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.ez4.prototype={
$0(){var w=this.a
return w.m(new C.eyZ(w))},
$S:0}
C.eyZ.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eyY.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n8.gdP(D.n8),w=w.gae(w);w.C();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.czP(p[r]))
return new B.D(S.am8,B.x(B.a([new B.D(An.anS,w,q),B.A(u,A.l,q,A.e,A.h,0,q,q)],v),A.E,q,A.e,A.h,0,A.p),q)},
$S:z+37}
C.eyX.prototype={
$0(){return this.a.cc4(this.b)},
$S:0}
C.drS.prototype={
$0(){var w=this,v=null,u=B.fE(v,A.cx,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.c_,v,A.dJ,A.c0)
u.eo()
return u},
$S:267}
C.bQw.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bQH.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bQC.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bQI.prototype={
$1(d){return this.a.Mt(d)&&!d.x},
$S:z+0}
C.bQJ.prototype={
$2(d,e){return Math.max(d,this.a.aD0(e))},
$S:z+6}
C.bQL.prototype={
$2(d,e){var w=this.a
return w.c4(0,d.a+"."+e,new C.bQM(w))},
$S:z+5}
C.bQM.prototype={
$0(){return this.a.a},
$S:88}
C.bQK.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bQN.prototype={
$2(d,e){var w=this.a
return w.c4(0,this.b.$1(this.c.$2(d,e)),new C.bQO(w))},
$S:z+5}
C.bQO.prototype={
$0(){return this.a.a},
$S:88}
C.bQy.prototype={
$2(d,e){var w=this.a
return w.c4(0,d.a+"."+e,new C.bQz(w))},
$S:z+5}
C.bQz.prototype={
$0(){return this.a.a},
$S:88}
C.bQx.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bQA.prototype={
$2(d,e){var w=this.a
return w.c4(0,this.b.$1(this.c.$2(d,e)),new C.bQB(w))},
$S:z+5}
C.bQB.prototype={
$0(){return this.a.a},
$S:88}
C.bQv.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bQP.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bQD.prototype={
$1(d){return d!==this.b&&this.a.aJm(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bQG.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bQF.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bQE.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bKS.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bKT.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cuA.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break
case"charge":w.a.as=e
break}},
$S:201}
C.fXL.prototype={
$1(d){var w
$.S()
w=B.L()
w.r=d.gp(0)
return w},
$S:1931}
C.fXN.prototype={
$2(d,e){var w
$.S()
w=B.L()
w.b=A.aa
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:1932}
C.fXO.prototype={
$5(d,e,f,g,h){return B.bx(new B.a4(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1933}
C.fXM.prototype={
$3(d,e,f){var w
$.S()
w=B.L()
w.san(new B.a7(A.aZ,A.b4,A.x,B.a([e,f],x.O),null,null).aD(0,d))
return w},
$S:1934}
C.bKv.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bKw.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bKu(w))},
$S:0}
C.bKu.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bKx.prototype={
$0(){return B.a([],x.l)},
$S:1935}
C.bKy.prototype={
$1(d){return this.a.bB(d).a>15e5},
$S:450}
C.bKz.prototype={
$0(){var w,v,u
J.bHA(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rw(v))if(C.hha(v.b))w.b3N(v)
else w.a0R(v)
else{u=w.a.c.bgI(v)
w.afz(u==null?"The "+$.qI().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bKt.prototype={
$1(d){return new B.e2(new C.bKq(this.a,this.b),null)},
$S:20}
C.bKq.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bKr(this.a,o,a3),m=$.qI(),l=o.b,k=m.h(0,l).d,j=A.j.V(o.ch/1.04),i=new C.bKs(o,n,k),h=B.l(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ab(0,A.G,k.j(0.25),A.J,26)],f),d=B.p(p,p,A.f,p,p,new B.o(A.aT,p,p,B.l(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.p(p,B.as(B.d(m.h(0,l).c,p,p,p,p,p,p,A.q0,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jR,p,p,p),D.fSL],a0),A.E,p,A.e,A.h,0,A.p),1)
v=k.j(0.2)
u=B.l(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bb,w,B.p(p,B.d(""+A.j.V(o.ch*100)+"%",p,p,p,p,p,p,B.m(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.n),p,p,p,p,A.lN,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
t=A.w.j(0.35)
v=B.l(18)
w=B.K(A.dq,A.r,1)
a1=30+28*o.ch
s=B.l(8)
r=B.a([k.j(0.85),A.av],x.O)
q=B.K(A.aF,A.r,2)
f=B.a([new B.ab(0,A.G,k.j(0.5),A.J,14)],f)
v=B.p(p,B.as(B.cT(p,B.as(new B.dy(A.dC,A.z,A.f,new B.D(A.hz,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mD,p,p,p),p),p),p,p,p),p,p,A.b0,new B.o(p,p,q,s,f,new B.a7(A.ay,A.aC,A.x,r,p,p),A.n),A.eH,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.h,0,p,p)
w=B.aI(p,p,p,p,B.W(A.ar8,k,p,p,p,30),p,p,p,new C.bKm(n,o),p,p,p,p,p,p)
t=B.abr(a2).bgb(k,A.bw,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Z3(B.l0(p,p,p,5.2,1,n,A.j.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.W(A.a36,k,p,p,p,30),p,p,p,new C.bKn(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
return B.bm(!0,B.p(p,B.x(B.a([d,A.af,u,A.aB,v,A.af,i,A.ax,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.ht,p,p,p),1),B.bO(!1,A1.aYc,p,p,!0,p,p,p,new C.bKo(a2),p,B.fs(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.t9,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.h,0,p,p)],a0),A.l,p,A.e,A.N,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.cc5,A.n),p,p,p,A.yP,D.bFI,p,p,p),!0,!1,A.ag,!0,!0)},
$S:89}
C.bKr.prototype={
$1(d){var w=this.a
w.m(new C.bKk(this.b,d))
this.c.$1(new C.bKl())
w.a.toString},
$S:6}
C.bKk.prototype={
$0(){return this.a.ch=A.j.D(this.b,1,5.2)},
$S:0}
C.bKl.prototype={
$0(){},
$S:0}
C.bKs.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.l(14),r=u?w.c:A.bw
r=B.K(r,A.r,u?2:1)
return B.E(B.az(v,B.cT(v,B.as(new B.dy(A.dM,A.z,A.f,B.d(d,v,v,v,v,v,v,B.m(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b0,new B.o(t,v,r,s,v,v,A.n),A.ha,v,v,v,A.j9,A.qG,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bKp(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:718}
C.bKp.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bKm.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bKn.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bKo.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.bKP.prototype={
$2(d,e){var w
if(d==="short"){G.dA(1800,"",120,0,0.55,"noise")
G.dA(200,"",160,2.2,0.4,"saw")
B.fN()
w=this.a
if(w.c!=null)w.afz("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dA(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.afz("\u26a0 Overloaded! The "+$.qI().h(0,e.b).b+" can only give about "+A.j.ad(w.a.c.Am(e),2)+" amps but your gadgets are asking for "+A.j.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.afz("Burnt out! "+e.ay)
G.dA(140,"",320,0,0.6,"noise")
G.dA(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bKQ.prototype={
$0(){},
$S:0}
C.bJV.prototype={
$0(){},
$S:0}
C.bKR.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bKO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.az(A.bX,B.b4(p,p,p,new C.ake(w,v,u,t,s,r==null?A.jw:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKI(o),new C.bKJ(o),new C.bKK(o),p,p,p,p,p,p,p,p,p,p,new C.bKL(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bdS)
w=o.ay
if(w!=null){v=B.l(14)
u=B.K(A.cN,A.r,1)
n.push(B.ao(p,B.az(p,B.p(p,B.A(B.a([D.fIQ,B.E(B.d(w,p,p,p,p,p,p,D.fAr,p,p,p),1)],q),A.E,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(D.bjT,p,u,v,p,p,A.n),p,p,p,p,A.nH,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKM(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bLp,new E.fD(A.D7,"Cut wire",new C.bKN(o),A.bW,p)],q),A.l,p,A.e,A.h,0,p,p)
w=B.l(18)
n.push(B.ao(8,B.p(p,o,A.f,p,p,new B.o(F.YL,p,B.K(A.bw,A.r,1),w,p,p,A.n),p,p,p,p,F.amC,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cn4(w),p,p,10,10,p,p))}}return B.jo(new B.an(A.a0,p,A.b1,A.t,n,p),A.t,p)},
$S:304}
C.bKJ.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.baS(s)
if(r!=null){t.m(new C.bKG(t,r,d))
return}w=t.b4t(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.r(v*u.a,w.d*u.b).aJ(0,s)
t.m(new C.bKH(t,w))}},
$S:49}
C.bKG.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bKH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bKK.prototype={
$1(d){var w=this.a
if(w.y!=null)w.m(new C.bKE(w,d))
else if(w.Q!=null)w.m(new C.bKF(w,d.b.a5(0,w.as)))},
$S:19}
C.bKE.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bKF.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.j.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.j.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bKI.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.baS(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.amn(u.a,u.b,v.a,v.b)!=null)G.dA(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.afx()},
$S:37}
C.bKL.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b4t(u)
if(t!=null){v.m(new C.bKB(v,t))
if(D.mu.am(0,t.b))v.cxH(t)
w=new B.V(Date.now(),0,!1)
if(v.r===t&&w.bB(v.w).a<38e4){v.m(new C.bKC(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.m(new C.bKD(v,v.cKA(u)))},
$S:59}
C.bKB.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dA(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dA(200,"",70,0,0.2,"saw")}},
$S:0}
C.bKC.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bKD.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bKM.prototype={
$0(){var w=this.a
return w.m(new C.bKA(w))},
$S:0}
C.bKA.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bKN.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.x)
w.x=null
G.dA(300,"",50,0,0.35,"noise")
w.afx()},
$S:0}
C.bJW.prototype={
$0(){return this.a.bta(this.b)},
$S:0}
C.bKh.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fuu,w,w,w),B.E(B.l0(this.b.d,w,w,g,h,new C.bKj(this.a,f),A.j.D(e,h,g)),1)],x.p),A.l,w,A.e,A.h,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1936}
C.bKj.prototype={
$1(d){var w=this.a
w.m(new C.bKi(this.b,d))
w.a.toString},
$S:6}
C.bKi.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bKg.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.l(10)
return B.E(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,A.abP,w,w,w),B.d(e,w,w,w,w,w,w,D.fxh,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,w,u,w,w,A.n),w,w,w,w,A.wz,w,w,w),1)},
$S:120}
C.bK2.prototype={
$0(){var w=this.a
return w.m(new C.bK1(w))},
$S:0}
C.bK1.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bK3.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.e=w.d=null
G.dA(260,"",70,0,0.35,"noise")
w.afx()},
$S:0}
C.bK4.prototype={
$0(){var w=this.a
return w.m(new C.bK0(w))},
$S:0}
C.bK0.prototype={
$0(){return this.a.e=null},
$S:0}
C.bK8.prototype={
$0(){this.a.m(new C.bK_(this.b,this.c))
G.dA(900,"",40,0,0.3,"noise")},
$S:0}
C.bK_.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bK9.prototype={
$0(){return this.a.b3N(this.b)},
$S:0}
C.bKa.prototype={
$0(){return this.a.a0R(this.b)},
$S:0}
C.bKb.prototype={
$0(){return this.a.a2u(this.b)},
$S:0}
C.bKc.prototype={
$0(){var w=this.a
w.m(new C.bJZ(this.b,this.c))
w.a.toString},
$S:0}
C.bJZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bKd.prototype={
$0(){var w=this.a
w.m(new C.bJY(this.b,this.c))
w.a.toString},
$S:0}
C.bJY.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bKe.prototype={
$0(){var w=this.a
w.m(new C.bJX(this.b,this.c))
w.a.toString},
$S:0}
C.bJX.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bKf.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bK5.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bK6.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bK7.prototype={
$1(d){return this.a.f=d},
$S:6}
C.ftZ.prototype={
$1(d){return d.aIY("bulb")},
$S:z+2}
C.fu_.prototype={
$1(d){return d.qi(0,"switch")&&d.aIY("bulb")},
$S:z+2}
C.fu0.prototype={
$1(d){return A.d.aU(d.a,new C.ftM())},
$S:z+2}
C.ftM.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fu1.prototype={
$1(d){return d.qi(0,"resistor")&&A.d.aU(d.a,new C.ftL())},
$S:z+2}
C.ftL.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fu2.prototype={
$1(d){return!d.qi(0,"battery")&&d.aIY("bulb")},
$S:z+2}
C.ftQ.prototype={
$1(d){return A.d.aU(d.a,new C.ftK())},
$S:z+2}
C.ftK.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.ftR.prototype={
$1(d){return A.d.aU(d.a,new C.ftJ())},
$S:z+2}
C.ftJ.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.ftS.prototype={
$1(d){return A.d.aU(d.a,new C.ftI())},
$S:z+2}
C.ftI.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.ftT.prototype={
$1(d){var w=d.a
return A.d.aU(w,new C.ftG())&&A.d.aU(w,new C.ftH())&&d.qi(0,"buck")},
$S:z+2}
C.ftG.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.ftH.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.ftU.prototype={
$1(d){var w=d.a
return A.d.aU(w,new C.ftE())&&A.d.aU(w,new C.ftF())},
$S:z+2}
C.ftE.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.ftF.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.ftV.prototype={
$1(d){return A.d.aU(d.a,new C.ftD())},
$S:z+2}
C.ftD.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e20.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.u(0,v.b)},
$S:0}
C.e29.prototype={
$1(d){var w=this.a.d
return w.aJm(d)&&w.rw(d)},
$S:z+0}
C.e2a.prototype={
$1(d){return d.x},
$S:z+0}
C.e2b.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e2c.prototype={
$0(){},
$S:0}
C.e2_.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.l(22),o=x.p,n=B.a([D.h_z,A.ax,D.fKG,A.T],o)
for(w=this.a,v=0;v<19;++v){u=D.Sr[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ay(A.bw,1,A.r,-1)
n.push(B.az(q,B.p(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iH,q,q,q),A.bF,B.d(u.b,q,3,A.a2,q,q,q,D.fBb,q,q,q)],o),A.E,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(t,q,new B.bG(r,r,r,r),new B.be(s,s,s,s),q,q,A.n),q,q,q,A.cw,A.bj,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e1Z(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eG(q,F.mW,new B.D(A.bS,new B.a5(340,q,B.cw(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.d6,q,new B.b9(p,A.a1),q)},
$S:46}
C.e1Z.prototype={
$0(){B.a6(this.b,!1).N(null)
var w=this.a
w.m(new C.e1Y(w,this.c))
G.dA(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e1Y.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.blQ()},
$S:0}
C.e1W.prototype={
$1(d){return new C.WS(this.a.d,null)},
$S:z+44}
C.e1X.prototype={
$0(){},
$S:0}
C.e28.prototype={
$1(d){return new B.e2(new C.e27(this.a),null)},
$S:20}
C.e27.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aji(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bc:A.aG
k=B.aE(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fXJ,A.b3,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.h,0,m,m),A.P,B.bu(B.l(4),B.kr(A.bw,m,m,5,m,w.a/11,new B.lO(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fNV)
else{h=f.j(0.1)
t=B.l(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ag.L_,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,K.L9,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.ax,q,new B.bK(A.a8,m,m,B.bO(!1,B.d(p,m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e25(l,e),m,m),m)],v),A.E,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bj,m,m,m))}u.push(A.T)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dq,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.abZ,m,m,m)
r=j[o]
q=w.q(0,o)?A.aF:A.c
u.push(B.az(m,B.p(m,new B.c7(A.aM,A.e,A.h,A.l,m,A.p,m,0,B.a([s,A.as,new B.by(1,A.ba,B.d(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bG(n,n,n,n),new B.be(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.nH,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e26(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,k.a.b*0.75),B.cw(u,m,m,A3.yY,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:89}
C.e25.prototype={
$0(){var w=this.a
w.m(new C.e23(w))
this.b.$1(new C.e24())
w.FB()},
$S:0}
C.e23.prototype={
$0(){var w=this.a
$.aji()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e24.prototype={
$0(){},
$S:0}
C.e26.prototype={
$0(){var w=this.a
w.m(new C.e21(w,this.b))
this.c.$1(new C.e22())
w.FB()},
$S:0}
C.e21.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e22.prototype={
$0(){},
$S:0}
C.e2e.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.e2f.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.kS("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).ce(B.ed(new C.e2d(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e2d.prototype={
$1(d){B.l7("construction")
return Ap.hWP()},
$S:z+45}
C.e2g.prototype={
$0(){return E.hId(this.a,"ELECTRONICS LAB",this.b,A.aG)},
$S:0}
C.e2h.prototype={
$0(){var w=this.a
return w.m(w.d.gd1s())},
$S:0}
C.e2i.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gtk(v))
w.FB()},
$S:0}
C.cM7.prototype={
$2(d,e){var w=null,v=this.a.gazt().x
v===$&&B.c()
return B.b4(w,w,w,new C.bbG(v,w),A.az)},
$S:57}
C.cM6.prototype={
$3(d,e,f){var w=new B.aH($.S().r,A.aj,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.ce(v,u,v+e,u))
w.E(new B.ce(v,u,v,u+e))
w.E(new B.ce(v,u,v-e,u))
w.E(new B.ce(v,u,v,t))
w.E(new B.bw())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:439}
C.h1T.prototype={
$3(d,e,f){return new C.W9(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h1U.prototype={
$4(d,e,f,g){var w=x.a
return new B.d2(e,!1,B.ik(A.z,g,null,new B.bh(B.cG(A.cj,e,null),new B.bq(0.85,1,w),w.k("bh<bP.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dYX.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gBF()},
$S:0}
C.dYY.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.o.F(A.o.F(this.b,w)+w,w)
v.z=v.gBF()},
$S:0}
C.dZ7.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.r(v.a/u.a,v.b/u.b)
w.w=w.gBF()},
$S:0}
C.dYW.prototype={
$1(d){return new L.J0(F.Sc[this.b],new C.dYV(this.a,d),null)},
$S:z+47}
C.dYV.prototype={
$0(){this.a.a=!0
B.a6(this.b,!1).eq()},
$S:0}
C.dZ8.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.dZ9.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dYP.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb1C():w
return B.az(A.bX,B.b4(w,w,w,v.cmt(this.b),A.h4),A.y,!1,D.hvH,u,w,w,w,new C.dYN(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dYO(v,e),w,w,w,!1,A.a4)},
$S:36}
C.dYO.prototype={
$1(d){var w=this.b
return this.a.cFg(d.b,new B.av(B.aS(1/0,w.a,w.b),B.aS(1/0,w.c,w.d)))},
$S:59}
C.dYN.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.O4()!=null){w=v<0?1:-1
this.a.aDh(w)}},
$S:37}
C.dZ5.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.l(14),t=B.K(h?g:A.aT,A.r,1)
return B.az(w,B.p(w,B.x(B.a([B.W(d,g,w,w,w,20),A.tV,B.d(e,w,w,w,w,w,w,B.m(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,A.j9,A.kA,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:755}
C.dZ1.prototype={
$0(){return this.a.aDh(-1)},
$S:0}
C.dZ2.prototype={
$0(){return this.a.aDh(1)},
$S:0}
C.dZ3.prototype={
$0(){return this.a.JO(null)},
$S:0}
C.dZ4.prototype={
$0(){return this.a.JO(0)},
$S:0}
C.dZa.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.dZ0.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.l(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c2q(o):q.bFx(o,p),m=x.p
p=B.a([B.oC(new B.lW(n,new B.bf(p,x.bz)),A.pu,B.pW(),A.b0,A.b0,new C.dYZ())],m)
n=t.d
if(n){w=A.j.F(q.gBF(),12)<4
v=w?150:96
u=B.l(16)
m=B.a([A.as],m)
if(w)m.push(D.bLb)
else m.push(A.b3)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bc:A.av,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ao(s,B.as(B.cT(s,B.A(m,A.l,s,A.e,A.h,0,s,s),s,s,A.ec,new B.o(A.w,s,s,u,s,s,A.n),A.n_,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.AN)p.push(B.ao(s,B.as(B.p(s,s,A.f,s,s,A.Mg,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.AO)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.Mg,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.az(s,B.as(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.l(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dZ_(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bu(r,new B.an(A.a0,s,A.b1,A.t,p,s),A.aq)},
$S:397}
C.dYZ.prototype={
$2(d,e){var w=x.a
return new B.d2(e,!1,B.ik(A.z,d,null,new B.bh(e,new B.bq(0.92,1,w),w.k("bh<bP.T>"))),null)},
$S:388}
C.dZ_.prototype={
$0(){return this.a.JO(null)},
$S:0}
C.dZ6.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.d(A.a.b0(A.o.v(B.df(q)),2,"0")+":"+A.a.b0(A.o.v(B.fT(q)),2,"0"),s,s,s,s,s,s,A.u1,s,s,s),A.b3],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
q.push(B.p(s,s,A.f,s,s,new B.o(A.c,s,s,new B.be(v,v,v,v),s,s,A.n),s,4+w*2,s,D.bJH,s,s,s,3))}q.push(A.de)
q.push(D.fRL)
q.push(A.bn)
v=B.K(A.ab,A.r,1)
u=B.l(4)
t=this.b
q.push(B.p(s,new B.bK(A.a5,s,s,B.BU(A.z,B.p(s,s,A.f,s,s,new B.o(A.bc,s,s,B.l(2),s,s,A.n),s,s,s,A2.Hi,s,s,s,s),s,t/100),s),A.f,s,s,new B.o(s,s,v,u,s,s,A.n),s,12,s,s,s,s,s,26))
q.push(A.rc)
q.push(B.d(""+t+"%",s,s,s,s,s,s,D.fIr,s,s,s))
return new B.dy(A.dM,A.a5,A.f,new B.a5(r,s,B.A(q,A.l,s,A.e,A.h,0,s,s),s),s)},
$S:340}
C.dYU.prototype={
$0(){return this.a.JO(A.d.cn(F.ik,this.b))},
$S:0}
C.dYS.prototype={
$0(){return this.a.JO(0)},
$S:0}
C.dYT.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cX(F.ik,0,B.dD(4,"count",x.S),x.gD),v=w.$ti,w=new B.bQ(w,w.gJ(0),v.k("bQ<ak.E>")),u=this.a,v=v.k("ak.E");w.C();){t=w.d
q.push(u.axj(t==null?v.a(t):t,50,!1))}return new B.dy(A.dM,A.z,A.f,new B.a5(r,s,B.A(q,A.l,s,A.r_,A.h,0,s,s),s),s)},
$S:340}
C.dYM.prototype={
$0(){return this.a.JO(null)},
$S:0}
C.dYR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.w.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aE(k,A.bY,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.p(n,B.A(B.a([D.h5n,A.as,B.E(B.d(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.eS,n,n,n,A.acj,n,n,n),1),B.d(A.a.b0(A.o.v(B.df(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b0(A.o.v(B.fT(new B.V(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.rh,n,n,n)],w),A.l,n,A.e,A.h,0,n,n),A.f,m,n,n,n,24,n,n,new B.Q(j,0,k,0),n,n,n)
j=B.a([B.b4(n,n,n,new C.bym(l.gBF(),this.c.d,n),A.az)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aE(m,A.dD,x.w).w.r.b+52}else m=12
v=B.l(10)
u=B.K(A.aT,A.r,1)
t=B.l(10)
s=B.az(n,B.p(n,n,A.f,n,n,A.afm,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dYQ(l),n,n,n,n,n,n,!1,A.a4)
r=B.p(n,n,A.f,n,n,A.Yc,n,12,n,n,n,n,n,12)
q=B.az(n,B.p(n,n,A.f,n,n,D.b8Y,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbbl(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.e6,r,A.e6,q,A.as,B.E(B.d(F.ik[p].a,n,1,A.a2,n,n,n,A.W1,n,n,n),1)],w)
if(l.O4()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.aZA(19))
s=B.p(n,B.A(p,A.l,n,A.e,A.h,0,n,n),A.f,A.cs,n,n,n,26,n,n,A.fv,n,n,n)
r=l.e
r.toString
j.push(B.bR(0,new B.D(new B.Q(26,m,26,58),B.p(n,B.bu(t,B.x(B.a([s,B.E(l.aPW(r),1)],w),A.l,n,A.e,A.h,0,A.p),A.aq),A.f,n,n,new B.o(A.w,n,u,v,D.dya,n,A.n),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.l(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.D(A.j9,l.axj(F.ik[o],34,!1),n))
j.push(B.ao(8,B.as(B.p(n,B.A(t,A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.o(m,n,u,v,n,n,A.n),n,n,n,n,A.lQ,n,n,n),n,n,n),n,n,0,0,n,n))
return B.p(n,B.x(B.a([k,B.E(new B.an(A.a0,n,A.b1,A.t,j,n),1)],w),A.l,n,A.e,A.h,0,A.p),A.f,A_.a_o,n,n,n,n,n,n,n,n,n,n)},
$S:83}
C.dYQ.prototype={
$0(){return this.a.JO(null)},
$S:0}
C.fut.prototype={
$0(){return D.ems},
$S:z+48}
C.fuu.prototype={
$0(){return D.dUA},
$S:z+49}
C.fuv.prototype={
$0(){return D.dR5},
$S:z+50}
C.fuw.prototype={
$0(){return D.dTY},
$S:z+51}
C.fux.prototype={
$0(){return D.dZ5},
$S:z+52}
C.fuy.prototype={
$0(){return D.eie},
$S:z+53}
C.fuz.prototype={
$0(){return D.eko},
$S:z+54}
C.fuA.prototype={
$0(){return D.dYp},
$S:z+36}
C.cns.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.cnt.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hM1(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ab(0,A.G,p.j(0.4),A.dp,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Ao.KY,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fGd,k,k,k)
l=A.c.j(0.85)
h.push(B.az(k,B.p(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cK(k,-6,-6,k,k,k,n,k),new B.bK(A.lC,k,k,B.x(B.a([m,A.cQ,B.d(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.N,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.be(q,q,q,q),p,new B.a7(A.ay,A.aC,A.x,o,k,k),A.n),k,v,k,k,A.bH,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cnr(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bZ(A.bI,h,A.br,k,14,14)},
$S:175}
C.cnr.prototype={
$0(){return B.a6(this.a,!1).ce(B.ed(new C.cnq(this.b),!1,null,x.H))},
$S:0}
C.cnq.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eVU.prototype={
$0(){var w=this.a
return w.w=w.d[w.b7T(w.f)]},
$S:0}
C.eVQ.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cR.ai()*7},
$S:0}
C.eVP.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cf)
w.w=""},
$S:0}
C.eVS.prototype={
$0(){var w=this.a
return w.m(new C.eVR(w,this.b))},
$S:0}
C.eVR.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cH(w,this.b)},
$S:0}
C.eVT.prototype={
$1(d){return this.a.b2b(0)},
$S:2}
C.e5_.prototype={
$0(){return C.JO("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e50.prototype={
$0(){},
$S:0}
C.e4V.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e4X.prototype={
$0(){return this.a.b2d(this.b)},
$S:0}
C.e4Y.prototype={
$0(){var w=this.a
return w.m(new C.e4W(w))},
$S:0}
C.e4W.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e4Z.prototype={
$0(){var w=this.a
return w.b2d(w.d)},
$S:0}
C.dQg.prototype={
$2(d,e){return d+e},
$S:81}
C.dQh.prototype={
$0(){},
$S:0}
C.dQb.prototype={
$2(d,e){return d+e},
$S:81}
C.dQe.prototype={
$0(){var w=this.a
return w.m(new C.dQd(w,this.b))},
$S:0}
C.dQd.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dQf.prototype={
$0(){var w=this.a
return w.m(new C.dQc(w))},
$S:0}
C.dQc.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e1v.prototype={
$0(){return E.uH(this.b,this.a.d,"drawing")},
$S:0}
C.e1w.prototype={
$1(d){var w=this.a
return w.m(new C.e1u(w,d))},
$S:49}
C.e1u.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKu(u,v,t))},
$S:0}
C.e1x.prototype={
$1(d){var w=this.a
return w.m(new C.e1t(w,d))},
$S:19}
C.e1t.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e1y.prototype={
$1(d){var w=this.a
return w.m(new C.e1s(w,d))},
$S:23}
C.e1s.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKu(u,v,t))},
$S:0}
C.e1z.prototype={
$0(){var w=this.a
return w.m(new C.e1r(w,this.b))},
$S:0}
C.e1r.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e1A.prototype={
$1(d){var w=this.a
return w.m(new C.e1q(w,d))},
$S:6}
C.e1q.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e1B.prototype={
$0(){var w=this.a
return w.m(new C.e1p(w))},
$S:0}
C.e1p.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e1C.prototype={
$0(){var w=this.a
return w.m(new C.e1o(w))},
$S:0}
C.e1o.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e1D.prototype={
$0(){var w=this.a
return w.m(A.d.gtk(w.e))},
$S:0}
C.e1E.prototype={
$0(){var w=this.a
return w.m(new C.e1n(w))},
$S:0}
C.e1n.prototype={
$0(){var w=this.a
w.x=D.aBn[A.o.F(A.d.cn(D.aBn,w.x)+1,4)]},
$S:0}
C.esr.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.ess.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JO("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.esq(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JO("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
C.esq.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.est.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.esp(w))},
$S:11}
C.esp.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.esx.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.az(w,B.lF(new C.esv(v,e),w,A.b0,A.pu,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.esw(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:85}
C.esw.prototype={
$0(){return this.a.cen(this.b)},
$S:0}
C.esv.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fE(3.141592653589793*e)
m=B.l(16)
w=o?p:D.cbh
if(o)v=q.a.r.q(0,q.b)?A.bc.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bc:A.aT,A.r,1)
if(o){r=B.dr()
r.fE(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fA(A.z,B.d(u[t],p,p,p,p,p,p,H.ac2,p,p,p),p,r,!0)
u=r}else u=D.fZe
return B.fA(A.z,B.p(A.z,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:112}
C.esy.prototype={
$0(){var w=this.a
return w.m(new C.esu(w,this.b))},
$S:0}
C.esu.prototype={
$0(){var w=this.a
w.d=this.b.a
w.auE()},
$S:0}
C.esz.prototype={
$0(){var w=this.a
return w.m(w.gbOi())},
$S:0}
C.eDd.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eDe.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eDb.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eDc.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eDa(w))},
$S:11}
C.eDa.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eDf.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eDg.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eDh.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b2c()},
$S:11}
C.eDi.prototype={
$0(){return this.a.cet(this.b)},
$S:0}
C.eRf.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.eRo.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.m(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kA,B.A(B.a([v,A.ae,new B.di(1,A.cm,new B.dy(A.dM,A.z,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1937}
C.eRk.prototype={
$1(d){return this.a.m(new C.eRj())},
$S:2}
C.eRj.prototype={
$0(){},
$S:0}
C.eRl.prototype={
$0(){var w=this.a
return w.m(new C.eRi(w,this.b))},
$S:0}
C.eRi.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eRm.prototype={
$1(d){var w=this.a
return w.m(new C.eRh(w,d))},
$S:6}
C.eRh.prototype={
$0(){return this.a.f=A.j.V(this.b)},
$S:0}
C.eRn.prototype={
$0(){var w=this.a
return w.m(new C.eRg(w))},
$S:0}
C.eRg.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.er6.prototype={
$0(){},
$S:0}
C.er7.prototype={
$0(){},
$S:0}
C.er_.prototype={
$0(){var w=this.a
return w.m(new C.eqZ(w))},
$S:0}
C.eqZ.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c1(u,1,!1,x.S)
w.r=0.9
E.XF("hat",0,0.6)},
$S:0}
C.er0.prototype={
$0(){var w=this.a
return w.m(new C.eqY(w))},
$S:0}
C.eqY.prototype={
$0(){this.a.y=1.1
E.mw("bell",36,200,0.4)},
$S:0}
C.er1.prototype={
$0(){var w=this.a
return w.m(new C.eqX(w))},
$S:0}
C.eqX.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mw("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.er2.prototype={
$0(){var w=this.a
return w.m(new C.eqW(w,this.b))},
$S:0}
C.eqW.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.er3.prototype={
$1(d){var w=this.a
return w.m(new C.eqV(w,d))},
$S:6}
C.eqV.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.j.V(this.b),r=J.e5(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.er4.prototype={
$1(d){var w=this.a
return w.m(new C.eqU(w,d))},
$S:6}
C.eqU.prototype={
$0(){return this.a.z=A.j.V(this.b)},
$S:0}
C.er5.prototype={
$1(d){var w=this.a
return w.m(new C.eqT(w,d))},
$S:6}
C.eqT.prototype={
$0(){return this.a.Q=A.j.V(this.b)},
$S:0}
C.cno.prototype={
$0(){var w=this
return E.mw(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aOA.prototype
w.bAt=w.t
w=C.aND.prototype
w.bzu=w.t
w=C.aNE.prototype
w.bzv=w.t
w=C.aNI.prototype
w.bzz=w.t
w=C.aPp.prototype
w.bBp=w.t
w=C.aOy.prototype
w.bAr=w.t
w=C.azQ.prototype
w.bwv=w.t
w=C.azR.prototype
w.bww=w.t
w=C.aM4.prototype
w.bxS=w.t
w=C.aNT.prototype
w.bzK=w.t
w=C.aNF.prototype
w.bzw=w.t
w=C.aO_.prototype
w.bzS=w.t
w=C.aOs.prototype
w.bAl=w.t
w=C.aOT.prototype
w.bAM=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aGA.prototype,"gayP","c9B",1)
v(C,"is1","c7g",3)
var q
u(q=C.aF1.prototype,"gciJ","ciK",22)
w(q,"gcaa","b0J",1)
w(C.aF3.prototype,"gcbV","cbW",1)
t(C.aFk.prototype,"gcc1","cc2",39)
w(q=C.aJD.prototype,"gcCf","cCg",1)
w(q,"gcc3","afn",1)
w(q,"gcne","cnf",1)
w(q,"gcc0","afm",3)
w(q=C.aGz.prototype,"gbLp","aaI",3)
w(q,"gcmv","b4j",1)
w(q,"gcqh","ai0",3)
s(q,"gcc5","afo",3)
s(q=C.a5H.prototype,"gtk","a8",1)
u(q,"gd_5","ap9",0)
u(q,"gcWt","Mt",0)
w(q,"gd1s","blQ",1)
r(C.ake.prototype,"gccs",0,5,null,["$5"],["qY"],41,0,0)
w(q=C.aFx.prototype,"gcct","ccu",1)
w(q,"gct8","aim",3)
w(q,"gcj0","agH",3)
w(q,"gcAg","ajw",3)
w(q=C.aFn.prototype,"gc4R","adA",3)
w(q,"gbbl","cGO",1)
w(q,"gb1C","ccy",1)
w(q=C.aH2.prototype,"gceo","cep",1)
s(q,"gcem","b2b",1)
w(C.aGl.prototype,"gbOi","auE",1)
s(C.aGG.prototype,"gceq","cer",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aF,[C.alq,C.GW,C.vp,C.aUC,C.a4z,C.bcN,C.c7h,C.yI,C.D1,C.nN,C.bdy,C.B5,C.bvP,C.qx,C.re,C.D5,C.a_G,C.ag6,C.a1U,C.Dg,C.acZ,C.adf,C.afc,C.GH,C.ei,C.u0,C.abE,C.acL,C.a5H,C.mZ,C.bdz,C.fU,C.m4,C.bx8,C.aKu])
u(B.hq,[C.fLP,C.fAv,C.fIc,C.fId,C.fLM,C.fLN,C.eke,C.ekx,C.ezR,C.ezo,C.ezp,C.ezq,C.ezr,C.ezs,C.ezt,C.ezu,C.ezv,C.ezm,C.ezn,C.ezl,C.ezM,C.ezN,C.ezO,C.dPN,C.dPP,C.dPS,C.dQ2,C.c7i,C.c7j,C.ftN,C.ftO,C.ftP,C.ftW,C.ftX,C.ftY,C.dRP,C.dRw,C.dRQ,C.dRr,C.dRm,C.dRo,C.dRu,C.dRH,C.dRF,C.dRG,C.dRE,C.dRB,C.dRD,C.f9z,C.f9g,C.f9n,C.f9w,C.f9a,C.drW,C.drX,C.drT,C.drU,C.drV,C.drY,C.drZ,C.ds_,C.ds0,C.ds1,C.ds2,C.ds3,C.ds4,C.ds5,C.eyN,C.eyO,C.eyP,C.eyQ,C.eyL,C.eyM,C.ezh,C.eyU,C.eyW,C.eyG,C.ezd,C.ezb,C.ezc,C.eza,C.ez9,C.eyI,C.bQw,C.bQH,C.bQC,C.bQI,C.bQK,C.bQx,C.bQv,C.bQP,C.bQD,C.bQG,C.bQF,C.bQE,C.bKS,C.fXL,C.fXO,C.fXM,C.bKy,C.bKt,C.bKr,C.bKR,C.bKJ,C.bKK,C.bKI,C.bKL,C.bKh,C.bKj,C.bKf,C.bK5,C.bK6,C.bK7,C.ftZ,C.fu_,C.fu0,C.ftM,C.fu1,C.ftL,C.fu2,C.ftQ,C.ftK,C.ftR,C.ftJ,C.ftS,C.ftI,C.ftT,C.ftG,C.ftH,C.ftU,C.ftE,C.ftF,C.ftV,C.ftD,C.e29,C.e2a,C.e2_,C.e1W,C.e28,C.e2d,C.cM6,C.h1T,C.h1U,C.dYW,C.dYO,C.dYN,C.dZ5,C.cnq,C.eVT,C.e1w,C.e1x,C.e1y,C.e1A,C.esv,C.eRf,C.eRo,C.eRk,C.eRm,C.er3,C.er4,C.er5])
u(B.jA,[C.fLO,C.ekj,C.ekh,C.ezx,C.ezK,C.dRn,C.dRK,C.dY2,C.f9C,C.f9D,C.f9f,C.f9s,C.f9t,C.f9o,C.f9u,C.f99,C.eyJ,C.eyK,C.ezg,C.ez8,C.eyY,C.bQJ,C.bQL,C.bQN,C.bQy,C.bQA,C.bKT,C.cuA,C.fXN,C.bKq,C.bKs,C.bKP,C.bKO,C.bKg,C.e27,C.cM7,C.dYP,C.dZ0,C.dYZ,C.dZ6,C.dYT,C.dYR,C.cnt,C.dQg,C.dQb,C.esx])
u(B.af,[C.WS,C.Xe,C.VI,C.VP,C.Oj,C.aJC,C.Xd,C.akc,C.Wq,C.azv,C.W9,C.XM,C.Wy,C.VJ,C.Wp,C.X8,C.Xi,C.XD,C.X7])
u(B.ah,[C.bmV,C.aOA,C.aND,C.aNI,C.aFk,C.aPp,C.aOy,C.azQ,C.bAk,C.aM4,C.aNT,C.aOT,C.aO_,C.aNF,C.bmm,C.aGl,C.aGG,C.bnC,C.aOs])
u(B.iO,[C.ekc,C.ekd,C.ekp,C.ekq,C.ekl,C.ekk,C.ekm,C.eki,C.ekn,C.ekg,C.eko,C.ekf,C.ekt,C.eks,C.eku,C.ekr,C.ekv,C.ekw,C.eky,C.ezQ,C.ezS,C.ezT,C.ezz,C.ezy,C.ezw,C.ezF,C.ezG,C.ezC,C.ezH,C.ezB,C.ezI,C.ezJ,C.ezA,C.ezL,C.ezE,C.ezP,C.ezD,C.dQ9,C.dQ8,C.dPK,C.dPL,C.dPM,C.dQa,C.dPO,C.dPQ,C.dPR,C.dPT,C.dPH,C.dPI,C.dPJ,C.dQ_,C.dQ0,C.dQ1,C.dPZ,C.dQ3,C.dPY,C.dQ4,C.dPX,C.dQ5,C.dPW,C.dQ6,C.dPV,C.dQ7,C.dPU,C.dRt,C.dRs,C.dRx,C.dRp,C.dRq,C.dRy,C.dRz,C.dRA,C.dRv,C.dRl,C.dRJ,C.dRI,C.dRL,C.dRM,C.dRN,C.dRC,C.dRO,C.cWP,C.dY0,C.dY_,C.dY1,C.fud,C.fue,C.fuf,C.fug,C.fuh,C.fui,C.fuj,C.fuk,C.ful,C.f9B,C.f9A,C.f9i,C.f9h,C.f9d,C.f9c,C.f9e,C.f9b,C.f9q,C.f9p,C.f9r,C.f9j,C.f9v,C.f9m,C.f9x,C.f9l,C.f9y,C.f9k,C.eyS,C.eyH,C.eyR,C.eyD,C.eyT,C.eyV,C.eyE,C.eyF,C.ezf,C.eze,C.ez5,C.ez6,C.ez7,C.ez1,C.ez2,C.ez0,C.ez3,C.ez_,C.ez4,C.eyZ,C.eyX,C.drS,C.bQM,C.bQO,C.bQz,C.bQB,C.bKv,C.bKw,C.bKu,C.bKx,C.bKz,C.bKk,C.bKl,C.bKp,C.bKm,C.bKn,C.bKo,C.bKQ,C.bJV,C.bKG,C.bKH,C.bKE,C.bKF,C.bKB,C.bKC,C.bKD,C.bKM,C.bKA,C.bKN,C.bJW,C.bKi,C.bK2,C.bK1,C.bK3,C.bK4,C.bK0,C.bK8,C.bK_,C.bK9,C.bKa,C.bKb,C.bKc,C.bJZ,C.bKd,C.bJY,C.bKe,C.bJX,C.e20,C.e2b,C.e2c,C.e1Z,C.e1Y,C.e1X,C.e25,C.e23,C.e24,C.e26,C.e21,C.e22,C.e2e,C.e2f,C.e2g,C.e2h,C.e2i,C.dYX,C.dYY,C.dZ7,C.dYV,C.dZ8,C.dZ9,C.dZ1,C.dZ2,C.dZ3,C.dZ4,C.dZa,C.dZ_,C.dYU,C.dYS,C.dYM,C.dYQ,C.fut,C.fuu,C.fuv,C.fuw,C.fux,C.fuy,C.fuz,C.fuA,C.cns,C.cnr,C.eVU,C.eVQ,C.eVP,C.eVS,C.eVR,C.e5_,C.e50,C.e4V,C.e4X,C.e4Y,C.e4W,C.e4Z,C.dQh,C.dQe,C.dQd,C.dQf,C.dQc,C.e1v,C.e1u,C.e1t,C.e1s,C.e1z,C.e1r,C.e1q,C.e1B,C.e1p,C.e1C,C.e1o,C.e1D,C.e1E,C.e1n,C.esr,C.ess,C.esq,C.est,C.esp,C.esw,C.esy,C.esu,C.esz,C.eDd,C.eDe,C.eDb,C.eDc,C.eDa,C.eDf,C.eDg,C.eDh,C.eDi,C.eRj,C.eRl,C.eRi,C.eRh,C.eRn,C.eRg,C.er6,C.er7,C.er_,C.eqZ,C.er0,C.eqY,C.er1,C.eqX,C.er2,C.eqW,C.eqV,C.eqU,C.eqT,C.cno])
t(C.bAx,C.aOA)
t(C.aGA,C.bAx)
u(B.mq,[C.bjP,C.bdQ,C.bvc,C.bcv,C.btN,C.btc,C.bdb,C.bte,C.bxi,C.bjN,C.ake,C.bbG,C.bym,C.ag_,C.byy,C.btd,C.boo])
t(C.aNE,C.aND)
t(C.aF1,C.aNE)
t(C.bAh,C.aNI)
t(C.aF3,C.bAh)
u(B.l3,[C.Lj,C.a1H,C.Ki])
u(B.aw,[C.bub,C.agi,C.af9,C.Rf,C.buI,C.a9D,C.bfX])
t(C.aJD,C.aPp)
t(C.bjM,B.pg)
t(C.aGz,C.aOy)
t(C.azR,C.azQ)
t(C.akd,C.azR)
t(C.aFx,C.bAk)
t(C.bbH,C.aM4)
t(C.aFn,C.aNT)
t(C.bAE,C.aOT)
t(C.aH2,C.bAE)
t(C.bAm,C.aO_)
t(C.bmv,C.bAm)
t(C.bAg,C.aNF)
t(C.bm4,C.bAg)
t(C.bAv,C.aOs)
t(C.bn6,C.bAv)
w(C.aOA,B.cf)
w(C.bAx,E.nL)
w(C.aND,B.cf)
w(C.aNE,E.nL)
w(C.aNI,B.cf)
w(C.bAh,E.nL)
w(C.aPp,B.eO)
w(C.aOy,B.cf)
w(C.azQ,B.cf)
w(C.azR,E.nL)
w(C.aM4,B.cf)
v(C.bAk,B.eE)
w(C.aNT,B.cf)
w(C.aNF,B.cf)
w(C.bAg,E.nL)
w(C.aO_,B.cf)
w(C.bAm,E.nL)
w(C.aOs,B.cf)
w(C.bAv,E.nL)
w(C.aOT,B.cf)
w(C.bAE,E.nL)})()
B.j6(b.typeUniverse,JSON.parse('{"WS":{"af":[],"v":[]},"bmV":{"ah":["WS"]},"Xe":{"af":[],"v":[]},"aGA":{"ah":["Xe"]},"bjP":{"aC":[]},"VI":{"af":[],"v":[]},"aF1":{"ah":["VI"]},"VP":{"af":[],"v":[]},"aF3":{"ah":["VP"]},"bdQ":{"aC":[]},"agi":{"aw":[],"v":[]},"af9":{"aw":[],"v":[]},"aJC":{"af":[],"v":[]},"Oj":{"af":[],"v":[]},"aFk":{"ah":["Oj"]},"bub":{"aw":[],"v":[]},"Rf":{"aw":[],"v":[]},"bvc":{"aC":[]},"buI":{"aw":[],"v":[]},"bcv":{"aC":[]},"aJD":{"ah":["aJC"]},"btN":{"aC":[]},"btc":{"aC":[]},"bdb":{"aC":[]},"bte":{"aC":[]},"bxi":{"aC":[]},"Xd":{"af":[],"v":[]},"bjM":{"aC":[]},"aGz":{"ah":["Xd"]},"bjN":{"aC":[]},"ake":{"aC":[]},"akc":{"af":[],"v":[]},"akd":{"ah":["akc"]},"Wq":{"af":[],"v":[]},"azv":{"af":[],"v":[]},"aFx":{"ah":["Wq"],"eE":[]},"bbH":{"ah":["azv"]},"bbG":{"aC":[]},"W9":{"af":[],"v":[]},"aFn":{"ah":["W9"]},"bym":{"aC":[]},"ag_":{"aC":[]},"a9D":{"aw":[],"v":[]},"XM":{"af":[],"v":[]},"Wy":{"af":[],"v":[]},"VJ":{"af":[],"v":[]},"Wp":{"af":[],"v":[]},"X8":{"af":[],"v":[]},"Xi":{"af":[],"v":[]},"XD":{"af":[],"v":[]},"X7":{"af":[],"v":[]},"aH2":{"ah":["XM"]},"byy":{"aC":[]},"bmv":{"ah":["Wy"]},"btd":{"aC":[]},"bm4":{"ah":["VJ"]},"bmm":{"ah":["Wp"]},"boo":{"aC":[]},"aGl":{"ah":["X8"]},"aGG":{"ah":["Xi"]},"bnC":{"ah":["XD"]},"bn6":{"ah":["X7"]},"bfX":{"aw":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.at
return{c:w("lO<u?>"),G:w("u"),J:w("bs<n,H>"),Q:w("db<n>"),Z:w("a_"),M:w("O<d7>"),R:w("O<a4u>"),h:w("O<a4z>"),V:w("O<ab>"),O:w("O<u>"),l:w("O<V>"),D:w("O<aB<aF>>"),x:w("O<a_>"),E:w("O<ai<n>>"),b:w("O<ai<H>>"),U:w("O<ai<F?>>"),B:w("O<a9<n,aF>>"),g:w("O<r>"),F:w("O<u0>"),v:w("O<fX>"),eZ:w("O<+(n,n)>"),fT:w("O<+(H,v)>"),I:w("O<+(F,n)>"),u:w("O<+(F,F)>"),r:w("O<+(n,n,a_)>"),e:w("O<+(n,H,H,F)>"),o:w("O<+(n,F,n,F)>"),d:w("O<+(n,n,H,H,a9<n,H>)>"),_:w("O<vp>"),fQ:w("O<abE>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<Gg>"),p:w("O<v>"),bL:w("O<acL>"),fH:w("O<lp>"),a_:w("O<acZ>"),cB:w("O<nN>"),ba:w("O<adf>"),eW:w("O<D5>"),fY:w("O<a_G>"),ac:w("O<afc>"),cd:w("O<Dg>"),fr:w("O<ag6>"),e4:w("O<a1U>"),au:w("O<aKu>"),f7:w("O<R>"),n:w("O<H>"),t:w("O<F>"),dS:w("O<aC?>"),fs:w("O<u0?>"),bN:w("O<F?>"),gJ:w("cx<akd>"),A:w("cx<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aF>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("N<ei,n>"),fR:w("N<+(H,v),v>"),w:w("iw"),gA:w("zQ"),gD:w("wp"),k:w("cu"),K:w("aF"),Y:w("u0"),C:w("ei"),N:w("n"),bO:w("au"),a:w("bq<H>"),W:w("bf<n>"),bz:w("bf<F?>"),dg:w("eb<re>"),m:w("bcN"),a2:w("D1"),f3:w("re"),es:w("GH"),q:w("mc"),y:w("R"),i:w("H"),z:w("@"),S:w("F"),L:w("ai<@>?"),cK:w("aF?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b3G=new B.d7(0,0.1)
D.b5B=new C.aUC(0,0,0)
D.Ma=new C.aUC(0,0.5,0)
D.b6b=new B.ay(A.bc,1,A.r,-1)
D.b7K=new B.aY(16,1/0,16,1/0)
D.b7U=new B.aY(0,1/0,0,210)
D.bpA=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dyn=w([D.bpA,Aq.ajD],x.O)
D.eDW=new B.bS(A.Br,1.1,A.x,null,0,D.dyn,null,null)
D.b81=new B.o(null,null,null,null,null,D.eDW,A.n)
D.b8Y=new B.o(A.bg,null,null,null,null,null,A.a6)
D.fu2=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6M=new B.B("\u26a1",null,D.fu2,null,null,null,null,null,null,null,null,null)
D.bdI=new B.cj(A.z,null,null,D.h6M,null)
D.aX5=new B.G(!0,A.bV,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXe=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aX5,null,A.K,null,null,null,null,null,null,null)
D.ew6=new B.D(A.nK,D.fXe,null)
D.bdS=new B.cj(A.z,null,null,D.ew6,null)
D.fN_=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aX5,null,A.K,null,null,null,null,null,null,null)
D.ewZ=new B.D(A.Hd,D.fN_,null)
D.beA=new B.cj(A.z,null,null,D.ewZ,null)
D.ago=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bim=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.biD=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bjT=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bk_=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bkm=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bmk=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bnm=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bo4=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.aiL=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bp5=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.aj9=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.ZW=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.br0=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bri=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ajH=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bt2=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bta=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.btF=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wo=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bvO=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.ala=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bBB=new B.bd(11e6)
D.bDu=new B.Q(10,6,10,2)
D.bDw=new B.Q(10,8,0,10)
D.bE9=new B.Q(12,8,6,10)
D.bEc=new B.Q(12,8,8,8)
D.bEj=new B.Q(14,0,14,22)
D.bEl=new B.Q(14,0,14,30)
D.bFp=new B.Q(16,4,16,28)
D.bFI=new B.Q(18,10,18,16)
D.bIx=new B.Q(4,4,8,2)
D.bJa=new B.Q(8,14,8,12)
D.bJl=new B.Q(8,6,8,8)
D.bJH=new B.Q(0,0,1.5,0)
D.b5n=new B.HW(26,"saturation")
D.bK_=new B.uQ(A.cC,D.b5n,null,A.YI)
D.bK0=new B.fS(A.G,11)
D.bK4=new B.fS(A.G,30)
D.fM0=new B.B("REACTION LAB",null,T.aXJ,null,null,null,null,A.a2,null,1,null,null)
D.bKd=new B.by(1,A.ba,D.fM0,null)
D.fQ8=new B.B("\ud83d\udce2 NGMY Ads",null,A.rh,null,null,null,null,A.eS,null,1,null,null)
D.bLb=new B.by(1,A.ba,D.fQ8,null)
D.fKH=new B.B("Wire selected",null,A.h6,null,null,null,null,null,null,null,null,null)
D.bLp=new B.by(1,A.ba,D.fKH,null)
D.aq9=new B.a_(62712,"MaterialIcons",!1)
D.bRB=new B.a_(62908,"MaterialIcons",!1)
D.bTj=new B.a_(983122,"MaterialIcons",!1)
D.bTy=new B.a_(983247,"MaterialIcons",!1)
D.bTN=new B.a_(983443,"MaterialIcons",!1)
D.bU5=new B.a_(983616,"MaterialIcons",!1)
D.bTi=new B.a_(983117,"MaterialIcons",!1)
D.bXM=new B.ae(D.bTi,28,A.c,null,null,null)
D.bY2=new B.ae(A.jb,18,null,null,null,null)
D.c_e=new B.ae(A.nN,null,A.ab,null,null,null)
D.c_o=new B.ae(A.a48,21,A.ab,null,null,null)
D.c0f=new B.ae(A.eK,17,A.ab,null,null,null)
D.c35=new B.ae(A.jb,21,A.ab,null,null,null)
D.c3C=new B.ae(A.ej,20,A.bW,null,null,null)
D.c4I=new B.ae(A.e9,null,A.aQ,null,null,null)
D.dw0=w([A.dg,A.d8,A.dg],x.O)
D.c85=new B.a7(A.a5,A.a8,A.x,D.dw0,null,null)
D.d76=w([A.bO,A.bh],x.O)
D.c8d=new B.a7(A.aZ,A.b4,A.x,D.d76,null,null)
D.c8r=new B.a7(A.aZ,A.b4,A.x,A.a6M,null,null)
D.atT=new B.a7(A.aZ,A.b4,A.x,Q.a5X,null,null)
D.d4E=w([A.pg,A.iw],x.O)
D.c9f=new B.a7(A.aZ,A.b4,A.x,D.d4E,null,null)
D.d6Q=w([A.cP,A.av],x.O)
D.au0=new B.a7(A.aZ,A.b4,A.x,D.d6Q,null,null)
D.dpA=w([A.cY,A.iO,A.bh],x.O)
D.c9y=new B.a7(A.a5,A.a8,A.x,D.dpA,null,null)
D.dpG=w([A.cy,A.cs],x.O)
D.c9T=new B.a7(A.aZ,A.b4,A.x,D.dpG,null,null)
D.aE1=w([A.cP,M.mX],x.O)
D.ca9=new B.a7(A.aZ,A.b4,A.x,D.aE1,null,null)
D.car=new B.a7(A.aZ,A.b4,A.x,S.aum,null,null)
D.cbh=new B.a7(A.ay,A.aC,A.x,A.Sd,null,null)
D.dgP=w([A.av,A.w],x.O)
D.cbs=new B.a7(A.aZ,A.b4,A.x,D.dgP,null,null)
D.cbv=new B.a7(A.aZ,A.b4,A.x,H.aDi,null,null)
D.btA=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bur=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cQv=w([A.NC,D.btA,D.bur],x.O)
D.cbF=new B.a7(A.aZ,A.b4,A.x,D.cQv,null,null)
D.cDP=w([A.d5,A.iL],x.O)
D.cbT=new B.a7(A.aZ,A.b4,A.x,D.cDP,null,null)
D.bxb=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cEA=w([F.agw,D.bxb],x.O)
D.cc5=new B.a7(A.aZ,A.b4,A.x,D.cEA,null,null)
D.ccF=w([0,4,7],x.t)
D.ccG=w([0,4,7,12],x.t)
D.ccH=w([0,4,7,4],x.t)
D.aD_=w([A.h8,A.rP],x.O)
D.aCv=w([A.fJ,A.cU],x.O)
D.aAO=w([A.bf,A.dR],x.O)
D.cZe=w([A.aQ,A.d5],x.O)
D.dqY=w([A.c3,A.lE],x.O)
D.aAe=w([A.cN,A.k1],x.O)
D.d3q=w([A.bP,A.aL],x.O)
D.cd4=w([D.aD_,D.aCv,A.a61,D.aAO,D.cZe,A.aB3,A.aC_,D.dqY,D.aAe,D.d3q],B.at("O<ai<u>>"))
D.chM=w([120,220,380],x.t)
D.clw=w([12,16,19,24],x.t)
D.clG=w([1400,800,450,2400],x.t)
D.cu7=w([250,450,900,1500],x.t)
D.bhH=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bu_=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.brJ=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bxL=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bqO=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.azu=w([D.bhH,D.bu_,D.brJ,D.bxL,D.bqO],x.O)
D.cLn=w([50,25,75],x.t)
D.cR3=w([0,5,10,15,18,20,25],x.t)
D.cZy=w([900,500,250,1600],x.t)
D.d2I=w([A.bf,A.bE,A.b9,A.bf],x.O)
D.a5S=w([A.aA,A.bt,A.bg,A.aG,A.oq],x.O)
D.d4g=w([A.av,A.aA,A.cN,A.bt,A.bg,A.cG,A.ci,A.bE,A.Z0],x.O)
D.a5V=w([0.04,0.17,0.3],x.n)
D.fdo=new C.vp("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fdu=new C.vp("Medium engine","A good all-rounder.",0.3,0.9)
D.fdt=new C.vp("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.II=w([D.fdo,D.fdu,D.fdt],x._)
D.eJI=new B.y(6,"Easy")
D.eKt=new B.y(8,"Medium")
D.eFr=new B.y(10,"Hard")
D.d5S=w([D.eJI,D.eKt,D.eFr],x.I)
D.aBc=w([0.55,0.78,1],x.n)
D.aBn=w([A.c,A.fZ,A.pi,A.av],x.O)
D.aBv=w([A.bg,A.aA,A.bt,A.d8],x.O)
D.fdl=new C.vp("Radar","Shows your height above the ground.",0.1,0)
D.fdm=new C.vp("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fdj=new C.vp("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aBD=w([D.fdl,D.fdm,D.fdj],x._)
D.dca=w([47,100,220,470,1000],x.n)
D.JO={volts:0}
D.a7M=new B.bs(D.JO,[3],x.J)
D.Kd=new B.dX(["b","battery",0.2,0.3,D.a7M])
D.epV={on:0}
D.dH3=new B.bs(D.epV,[1],x.J)
D.ER=new B.dX(["s","switch",0.5,0.3,D.dH3])
D.fb2=new B.dX(["l","bulb",0.8,0.3,A.jw])
D.d7f=w([D.Kd,D.ER,D.fb2],x.d)
D.EP=new B.ca(["b",0,"s",0])
D.fa1=new B.ca(["s",1,"l",0])
D.aSC=new B.ca(["l",1,"b",1])
D.dpM=w([D.EP,D.fa1,D.aSC],x.o)
D.d6G=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eED=new C.mZ("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d7f,D.dpM,D.d6G)
D.aMq={ohms:0}
D.aK0=new B.bs(D.aMq,[220],x.J)
D.fav=new B.dX(["r","resistor",0.5,0.3,D.aK0])
D.fbh=new B.dX(["d","led",0.8,0.3,A.jw])
D.dt4=w([D.Kd,D.fav,D.fbh],x.d)
D.f9g=new B.ca(["b",0,"r",0])
D.f9W=new B.ca(["r",1,"d",0])
D.f9n=new B.ca(["d",1,"b",1])
D.dCK=w([D.f9g,D.f9W,D.f9n],x.o)
D.dty=w(["led","diode","indicator"],x.s)
D.eEK=new C.mZ("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dt4,D.dCK,D.dty)
D.a96={level:0}
D.dGq=new B.bs(D.a96,[0.2],x.J)
D.faB=new B.dX(["p","pot",0.5,0.3,D.dGq])
D.faD=new B.dX(["m","motor",0.8,0.3,A.jw])
D.d7A=w([D.Kd,D.faB,D.faD],x.d)
D.f9f=new B.ca(["b",0,"p",0])
D.f9R=new B.ca(["p",1,"m",0])
D.f9N=new B.ca(["m",1,"b",1])
D.dy6=w([D.f9f,D.f9R,D.f9N],x.o)
D.dps=w(["fan","motor","spin","dimmer"],x.s)
D.eEB=new C.mZ("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d7A,D.dy6,D.dps)
D.a7J=new B.bs(D.a96,[0.9],x.J)
D.aSL=new B.dX(["s","solar",0.25,0.3,D.a7J])
D.aSK=new B.dX(["l","bulb",0.75,0.3,A.jw])
D.dau=w([D.aSL,D.aSK],x.d)
D.f9Z=new B.ca(["s",0,"l",0])
D.f9K=new B.ca(["l",1,"s",1])
D.d8p=w([D.f9Z,D.f9K],x.o)
D.dyS=w(["solar","sun","without battery","no battery","free"],x.s)
D.eEE=new C.mZ("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dau,D.d8p,D.dyS)
D.fbk=new B.dX(["c","crank",0.25,0.3,D.a7J])
D.dnD=w([D.fbk,D.aSK],x.d)
D.f9j=new B.ca(["c",0,"l",0])
D.f9J=new B.ca(["l",1,"c",1])
D.dog=w([D.f9j,D.f9J],x.o)
D.dnN=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eEA=new C.mZ("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dnD,D.dog,D.dnN)
D.dGp=new B.bs(D.a96,[0.7],x.J)
D.faG=new B.dX(["t","turbine",0.25,0.3,D.dGp])
D.fat=new B.dX(["m","motor",0.75,0.3,A.jw])
D.dhx=w([D.faG,D.fat],x.d)
D.fa9=new B.ca(["t",0,"m",0])
D.f9O=new B.ca(["m",1,"t",1])
D.dgu=w([D.fa9,D.f9O],x.o)
D.dmk=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eEx=new C.mZ("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dhx,D.dgu,D.dmk)
D.aJY=new B.bs(D.JO,[9],x.J)
D.aad=new B.dX(["b","battery",0.2,0.3,D.aJY])
D.aSI=new B.dX(["r","radio",0.8,0.3,A.jw])
D.dzt=w([D.aad,D.ER,D.aSI],x.d)
D.fa3=new B.ca(["s",1,"r",0])
D.aSE=new B.ca(["r",1,"b",1])
D.ccl=w([D.EP,D.fa3,D.aSE],x.o)
D.dxS=w(["radio","music","listen"],x.s)
D.eEJ=new C.mZ("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dzt,D.ccl,D.dxS)
D.dHt=new B.bs(D.JO,[12],x.J)
D.aSH=new B.dX(["b","battery",0.2,0.3,D.dHt])
D.fb3=new B.dX(["t","tv",0.8,0.3,A.jw])
D.d7h=w([D.aSH,D.ER,D.fb3],x.d)
D.fa4=new B.ca(["s",1,"t",0])
D.aSF=new B.ca(["t",1,"b",1])
D.dr0=w([D.EP,D.fa4,D.aSF],x.o)
D.dzr=w(["tv","television","screen","watch"],x.s)
D.eEu=new C.mZ("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d7h,D.dr0,D.dzr)
D.faU=new B.dX(["z","buzzer",0.8,0.3,A.jw])
D.cNK=w([D.Kd,D.ER,D.faU],x.d)
D.fa5=new B.ca(["s",1,"z",0])
D.fan=new B.ca(["z",1,"b",1])
D.d1S=w([D.EP,D.fa5,D.fan],x.o)
D.dw6=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eEG=new C.mZ("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cNK,D.d1S,D.dw6)
D.faC=new B.dX(["h","heater",0.8,0.3,A.jw])
D.dkX=w([D.aad,D.ER,D.faC],x.d)
D.fa0=new B.ca(["s",1,"h",0])
D.f9w=new B.ca(["h",1,"b",1])
D.d2D=w([D.EP,D.fa0,D.f9w],x.o)
D.cxo=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eEv=new C.mZ("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dkX,D.d2D,D.cxo)
D.fb5=new B.dX(["s","solar",0.2,0.25,D.a7J])
D.dHx=new B.bs(D.aMq,[100],x.J)
D.fb8=new B.dX(["r","resistor",0.55,0.25,D.dHx])
D.fbf=new B.dX(["c","capacitor",0.85,0.25,A.jw])
D.fay=new B.dX(["q","resistor",0.55,0.6,D.aK0])
D.fb6=new B.dX(["d","led",0.85,0.6,A.jw])
D.dqu=w([D.fb5,D.fb8,D.fbf,D.fay,D.fb6],x.d)
D.fa_=new B.ca(["s",0,"r",0])
D.f9V=new B.ca(["r",1,"c",0])
D.f9l=new B.ca(["c",1,"s",1])
D.f9k=new B.ca(["c",0,"q",0])
D.f9U=new B.ca(["q",1,"d",0])
D.f9o=new B.ca(["d",1,"c",1])
D.dei=w([D.fa_,D.f9V,D.f9l,D.f9k,D.f9U,D.f9o],x.o)
D.dmV=w(["capacitor","store","charge","flash"],x.s)
D.eEI=new C.mZ("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dqu,D.dei,D.dmV)
D.faJ=new B.dX(["b","battery",0.15,0.3,D.a7M])
D.fbl=new B.dX(["l1","bulb",0.5,0.3,A.jw])
D.faR=new B.dX(["l2","bulb",0.85,0.3,A.jw])
D.d5h=w([D.faJ,D.fbl,D.faR],x.d)
D.f9e=new B.ca(["b",0,"l1",0])
D.f9G=new B.ca(["l1",1,"l2",0])
D.f9H=new B.ca(["l2",1,"b",1])
D.dik=w([D.f9e,D.f9G,D.f9H],x.o)
D.dzb=w(["series","two bulbs","dim"],x.s)
D.eEy=new C.mZ("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d5h,D.dik,D.dzb)
D.eqf={volts:0,charge:1}
D.dHA=new B.bs(D.eqf,[1.5,0],x.J)
D.fbd=new B.dX(["b","battery",0.75,0.3,D.dHA])
D.d4F=w([D.aSL,D.fbd],x.d)
D.f9Y=new B.ca(["s",0,"b",0])
D.f9i=new B.ca(["b",1,"s",1])
D.deC=w([D.f9Y,D.f9i],x.o)
D.dn4=w(["charge","rechargeable","flat","recharge"],x.s)
D.eEw=new C.mZ("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d4F,D.deC,D.dn4)
D.dHs=new B.bs(D.JO,[4.5],x.J)
D.faE=new B.dX(["b","battery",0.2,0.3,D.dHs])
D.aSG=new B.dX(["p","phone",0.8,0.3,A.jw])
D.dhm=w([D.faE,D.ER,D.aSG],x.d)
D.fa2=new B.ca(["s",1,"p",0])
D.aac=new B.ca(["p",1,"b",1])
D.duY=w([D.EP,D.fa2,D.aac],x.o)
D.dwy=w(["phone","charger","usb","mobile"],x.s)
D.eEC=new C.mZ("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dhm,D.duY,D.dwy)
D.faq=new B.dX(["f","fan",0.8,0.3,A.jw])
D.cpw=w([D.Kd,D.faq],x.d)
D.f9d=new B.ca(["b",0,"f",0])
D.f9u=new B.ca(["f",1,"b",1])
D.d3c=w([D.f9d,D.f9u],x.o)
D.dpr=w(["fan","cool","air","wind"],x.s)
D.eEL=new C.mZ("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cpw,D.d3c,D.dpr)
D.faY=new B.dX(["b","battery",0.15,0.2,D.a7M])
D.far=new B.dX(["a","ammeter",0.5,0.2,A.jw])
D.fap=new B.dX(["l","bulb",0.85,0.2,A.jw])
D.fb_=new B.dX(["v","voltmeter",0.5,0.6,A.jw])
D.dns=w([D.faY,D.far,D.fap,D.fb_],x.d)
D.f9b=new B.ca(["b",0,"a",0])
D.f9a=new B.ca(["a",1,"l",0])
D.fab=new B.ca(["v",0,"l",0])
D.fac=new B.ca(["v",1,"l",1])
D.det=w([D.f9b,D.f9a,D.aSC,D.fab,D.fac],x.o)
D.dCJ=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eEH=new C.mZ("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dns,D.det,D.dCJ)
D.fbo=new B.dX(["b","battery",0.15,0.2,D.aJY])
D.faI=new B.dX(["t","tv",0.55,0.2,A.jw])
D.aJZ=new B.bs(D.JO,[5],x.J)
D.faw=new B.dX(["c","buck",0.4,0.5,D.aJZ])
D.faK=new B.dX(["p","phone",0.8,0.5,A.jw])
D.dbX=w([D.fbo,D.faI,D.faw,D.faK],x.d)
D.f9h=new B.ca(["b",0,"t",0])
D.aSA=new B.ca(["b",0,"c",0])
D.aSB=new B.ca(["c",1,"p",0])
D.dhj=w([D.f9h,D.aSF,D.aSA,D.aSB,D.aac],x.o)
D.da2=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eEz=new C.mZ("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dbX,D.dhj,D.da2)
D.fax=new B.dX(["c","buck",0.5,0.3,D.aJZ])
D.d2r=w([D.aSH,D.fax,D.aSG],x.d)
D.d7L=w([D.aSA,D.aSB,D.aac],x.o)
D.cAU=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eEt=new C.mZ("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d2r,D.d7L,D.cAU)
D.faP=new B.dX(["d","diode",0.5,0.3,A.jw])
D.diz=w([D.aad,D.faP,D.aSI],x.d)
D.f9c=new B.ca(["b",0,"d",0])
D.f9p=new B.ca(["d",1,"r",0])
D.cQi=w([D.f9c,D.f9p,D.aSE],x.o)
D.d9I=w(["diode","protect","backwards","one way"],x.s)
D.eEF=new C.mZ("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.diz,D.cQi,D.d9I)
D.Sr=w([D.eED,D.eEK,D.eEB,D.eEE,D.eEA,D.eEx,D.eEJ,D.eEu,D.eEG,D.eEv,D.eEI,D.eEy,D.eEw,D.eEC,D.eEL,D.eEH,D.eEz,D.eEt,D.eEF],B.at("O<mZ>"))
D.hJm=new C.GW("Moon",1.62,A.cY,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hJk=new C.GW("Mars",3.71,A.aA,"Mars has about 38 percent of Earth's gravity.")
D.hJn=new C.GW("Mercury",3.7,A.kw,"Mercury is small, so its gravity is like Mars.")
D.hJh=new C.GW("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hJj=new C.GW("Earth",9.81,A.aG,"On Earth gravity is strong, and the air also slows you down.")
D.hJl=new C.GW("Neptune",11.15,A.d8,"Neptune pulls a little harder than Earth.")
D.hJi=new C.GW("Jupiter",24.79,A.cN,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tt=w([D.hJm,D.hJk,D.hJn,D.hJh,D.hJj,D.hJl,D.hJi],B.at("O<GW>"))
D.deg=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.df1=w([0.2,0.5,0.8],x.n)
D.b2o=new C.Lj(0,"accordion")
D.d3y=w([A.jM,A.zE,A.zp],x.x)
D.dbm=w(["Mail","SMS","Ad"],x.s)
D.d48=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hHw=new C.B5(D.b2o,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aD_,D.d3y,D.dbm,D.d48)
D.ae1=new C.Lj(1,"flip")
D.dmP=w([A.qT,A.Dx,A.tn],x.x)
D.dh2=w(["Unlock","Verify","Secure"],x.s)
D.d2m=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hHv=new C.B5(D.ae1,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aCv,D.dmP,D.dh2,D.d2m)
D.b2p=new C.Lj(2,"towers")
D.dfN=w([A.zC,A.pD,A.ii],x.x)
D.dfk=w(["Save","Grow","Earn"],x.s)
D.cRd=w(["","",""],x.s)
D.hHx=new C.B5(D.b2p,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a61,D.dfN,D.dfk,D.cRd)
D.ae2=new C.Lj(3,"assemble")
D.dnR=w([A.oO,A.ho,A.e9],x.x)
D.daH=w(["Launch","Charge","Shine"],x.s)
D.djZ=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hHz=new C.B5(D.ae2,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aAO,D.dnR,D.daH,D.djZ)
D.b2q=new C.Lj(4,"carousel")
D.dnE=w([A.b9,A.fn],x.O)
D.dbv=w([A.n5,A.aqx,A.Q9],x.x)
D.d5I=w(["Explore","Discover","Learn"],x.s)
D.dhs=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hHu=new C.B5(D.b2q,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dnE,D.dbv,D.d5I,D.dhs)
D.b2r=new C.Lj(5,"burst")
D.dff=w([A.hJ,A.up],x.O)
D.d42=w([A.kc,A.mk,A.hB],x.x)
D.d4q=w(["Cheer","Win","Love"],x.s)
D.d6O=w(["Make some noise","First place","Share the joy"],x.s)
D.hHy=new C.B5(D.b2r,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dff,D.d42,D.d4q,D.d6O)
D.aCa=w([D.hHw,D.hHv,D.hHx,D.hHz,D.hHu,D.hHy],B.at("O<B5>"))
D.f67=new B.b5("skin","Skin",A.aqy)
D.f7N=new B.b5("muscle","Muscles",A.PM)
D.f7r=new B.b5("organ","Organs",A.hB)
D.bRh=new B.a_(62747,"MaterialIcons",!1)
D.f7z=new B.b5("bone","Skeleton",D.bRh)
D.f7V=new B.b5("vessel","Blood vessels",A.pH)
D.dfT=w([D.f67,D.f7N,D.f7r,D.f7z,D.f7V],x.r)
D.fdn=new C.vp("Simple legs","Light. Land gently.",0.15,0.2)
D.fdp=new C.vp("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fds=new C.vp("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.DS=w([D.fdn,D.fdp,D.fds],x._)
D.f8L=new B.ca(["beat",0.18,0.28,0])
D.fa6=new B.ca(["burst",0.7,0.2,0])
D.fah=new B.ca(["delay",0.45,0.5,1])
D.f9Q=new B.ca(["ripple",0.75,0.6,3])
D.dap=w([D.f8L,D.fa6,D.fah,D.f9Q],x.e)
D.dm7=w([P.lx,Q.Kc,F.V_],x.u)
D.hGs=new C.GH("First spark","A clock lights a burst and a ripple",D.dap,D.dm7)
D.f9t=new B.ca(["beat",0.15,0.3,1])
D.f8o=new B.ca(["ripple",0.62,0.15,0])
D.fad=new B.ca(["delay",0.4,0.45,0])
D.f96=new B.ca(["ripple",0.7,0.45,0])
D.f8G=new B.ca(["delay",0.4,0.7,1])
D.f9S=new B.ca(["shake",0.75,0.75,0])
D.dAp=w([D.f9t,D.f8o,D.fad,D.f96,D.f8G,D.f9S],x.e)
D.eGy=new B.y(2,4)
D.aSh=new B.y(4,5)
D.de5=w([P.lx,Q.Kc,F.V_,D.eGy,D.aSh],x.u)
D.hGu=new C.GH("Heartbeat","Two thumps, then a shake",D.dAp,D.de5)
D.f8R=new B.ca(["dice",0.15,0.7,1])
D.faj=new B.ca(["echo",0.4,0.7,0])
D.f92=new B.ca(["comet",0.7,0.5,4])
D.fa7=new B.ca(["burst",0.72,0.2,1])
D.f9q=new B.ca(["burst",0.3,0.25,0])
D.f8S=new B.ca(["pop",0.55,0.85,0])
D.cwX=w([D.f8R,D.faj,D.f92,D.fa7,D.f9q,D.f8S],x.e)
D.eFT=new B.y(1,3)
D.eFU=new B.y(1,4)
D.aSd=new B.y(0,5)
D.dnz=w([P.lx,R.vH,D.eFT,D.eFU,D.aSd],x.u)
D.hGt=new C.GH("Fireworks","Dice launch comets that burst in colour",D.cwX,D.dnz)
D.f8Z=new B.ca(["beat",0.15,0.2,2])
D.f9D=new B.ca(["chance",0.4,0.2,0])
D.f8O=new B.ca(["ball",0.7,0.12,3])
D.f8z=new B.ca(["chance",0.4,0.5,1])
D.fai=new B.ca(["ball",0.3,0.08,1])
D.f8s=new B.ca(["ripple",0.7,0.55,3])
D.cpZ=w([D.f8Z,D.f9D,D.f8O,D.f8z,D.fai,D.f8s],x.e)
D.eGz=new B.y(2,5)
D.cNu=w([P.lx,R.vH,Q.aa4,F.V0,D.eGz],x.u)
D.hGr=new C.GH("Rain","Balls fall at random and splash",D.cpZ,D.cNu)
D.f9E=new B.ca(["beat",0.12,0.45,2])
D.fa8=new B.ca(["toggle",0.38,0.2,0])
D.faf=new B.ca(["wash",0.7,0.15,4])
D.f8Q=new B.ca(["count3",0.38,0.45,0])
D.faa=new B.ca(["burst",0.72,0.4,0])
D.f9r=new B.ca(["light",0.55,0.7,1])
D.f8A=new B.ca(["pop",0.8,0.8,4])
D.dqs=w([D.f9E,D.fa8,D.faf,D.f8Q,D.faa,D.f9r,D.f8A],x.e)
D.eH5=new B.y(3,6)
D.ct7=w([P.lx,R.vH,Q.aa4,F.V0,D.aSd,D.eH5],x.u)
D.hGp=new C.GH("Disco","A beat drives lights, washes and bursts",D.dqs,D.ct7)
D.fam=new B.ca(["button",0.12,0.2,0])
D.f8u=new B.ca(["delay",0.34,0.2,1])
D.fal=new B.ca(["light",0.56,0.2,1])
D.fae=new B.ca(["delay",0.56,0.45,1])
D.f9F=new B.ca(["ball",0.34,0.6,0])
D.f8y=new B.ca(["delay",0.34,0.8,1])
D.f8n=new B.ca(["burst",0.7,0.8,5])
D.cd7=w([D.fam,D.f8u,D.fal,D.fae,D.f9F,D.f8y,D.f8n],x.e)
D.eJh=new B.y(5,6)
D.dwg=w([P.lx,R.vH,F.V_,F.V0,D.aSh,D.eJh],x.u)
D.hGq=new C.GH("Domino","Tap the button and watch it run down the line",D.cd7,D.dwg)
D.aCz=w([D.hGs,D.hGu,D.hGt,D.hGr,D.hGp,D.hGq],B.at("O<GH>"))
D.dlo=w([0.05,0.15,0.25],x.n)
D.dmj=w([1.5,3,4.5,9,12],x.n)
D.f4r=new B.b5("dice","Dice",A.nL)
D.f5F=new B.b5("coin","Coin",U.zw)
D.f7Q=new B.b5("num","Number",A.x_)
D.dmx=w([D.f4r,D.f5F,D.f7Q],x.r)
D.dmB=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aCF=w([A.bW,A.aQ,A.bc,A.aG,A.bf,A.c3,A.cN,A.fJ],x.O)
D.dnF=w([A.c3,A.aG,A.ex,A.bc],x.O)
D.doJ=w([],x.h)
D.exL=new C.ei("battery","Battery","\ud83d\udd0b",A.bc,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.exR=new C.ei("solar","Solar panel","\u2600\ufe0f",A.bt,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eyv=new C.ei("crank","Hand crank","\ud83d\udd04",A.cN,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.ey7=new C.ei("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aG,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.exD=new C.ei("buck","Step-down converter","\ud83d\udd3d",A.fJ,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.ey5=new C.ei("regulator","5 V regulator","\ud83e\uddca",A.bP,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eyA=new C.ei("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eyh=new C.ei("ldr","Light sensor","\ud83c\udf1e",A.ex,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.exW=new C.ei("switch","Switch","\ud83c\udf9a\ufe0f",A.bf,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eyx=new C.ei("fuse","Fuse","\ud83e\uddef",A.bW,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.exv=new C.ei("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fJ,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eyi=new C.ei("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eyk=new C.ei("bulb","Light bulb","\ud83d\udca1",A.ex,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.exT=new C.ei("led","LED","\ud83d\udd34",A.aA,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.exX=new C.ei("motor","Motor","\u2699\ufe0f",A.bP,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eye=new C.ei("buzzer","Buzzer","\ud83d\udd14",A.c3,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.exM=new C.ei("heater","Heater","\ud83d\udd25",A.cN,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.ey9=new C.ei("capacitor","Capacitor","\ud83e\udeab",A.cr,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.ey1=new C.ei("radio","Radio","\ud83d\udcfb",A.oq,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.exZ=new C.ei("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.exC=new C.ei("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.exJ=new C.ei("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.exP=new C.ei("fan","Fan","\ud83c\udf00",A.aG,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eyC=new C.ei("speaker","Speaker","\ud83d\udd0a",A.c3,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eyr=new C.ei("clock","Digital clock","\u23f0",A.bc,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.ey4=new C.ei("calculator","Calculator","\ud83e\uddee",A.MD,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.exI=new C.ei("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cr,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eyB=new C.ei("router","WiFi router","\ud83d\udcf6",A.fJ,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eyE=new C.ei("siren","Siren","\ud83d\udea8",A.aA,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.exy=new C.ei("toycar","Toy car","\ud83d\ude97",A.cN,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eyF=new C.ei("kettle","Kettle","\ud83e\uded6",A.mV,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.exG=new C.ei("lamp","Desk lamp","\ud83e\ude94",A.ex,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.exS=new C.ei("lights","Party lights","\ud83c\udf84",A.oq,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.ey2=new C.ei("fridge","Fridge","\ud83e\uddca",A.h9,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.exA=new C.ei("washer","Washing machine","\ud83e\udee7",A.cr,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eys=new C.ei("blender","Blender","\ud83e\udd64",A.bW,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.ey_=new C.ei("drone","Drone","\ud83d\ude81",A.bP,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.exF=new C.ei("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.ey3=new C.ei("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eyp=new C.ei("neon","Neon sign","\ud83e\udea7",A.c3,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.exB=new C.ei("microwave","Microwave","\ud83c\udf72",A.cN,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eyj=new C.ei("doorbell","Doorbell","\ud83d\udd14",A.bt,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.exO=new C.ei("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eyd=new C.ei("console","Game console","\ud83c\udfae",A.bf,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eyu=new C.ei("heartmon","Heart monitor","\ud83e\ude7a",A.hv,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.exz=new C.ei("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.ey8=new C.ei("lighthouse","Lighthouse","\ud83d\uddfc",A.ex,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eyg=new C.ei("discoball","Disco ball","\ud83e\udea9",A.oq,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eyz=new C.ei("robot","Robot","\ud83e\udd16",A.aG,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.exx=new C.ei("toaster","Toaster","\ud83c\udf5e",A.e1,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eyD=new C.ei("ledstrip","LED strip","\ud83c\udf08",A.c3,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eyo=new C.ei("pump","Water pump","\ud83d\udeb0",A.aG,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eya=new C.ei("hairdryer","Hair dryer","\ud83d\udca8",A.hJ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eym=new C.ei("headphones","Headphones","\ud83c\udfa7",A.bf,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.exH=new C.ei("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eyy=new C.ei("tablet","iPad Pro M5","\ud83d\udcf2",A.cr,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.exu=new C.ei("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hv,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.ey0=new C.ei("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bu,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.exU=new C.ei("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eyf=new C.ei("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.ul,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.exw=new C.ei("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.exK=new C.ei("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d8,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eyw=new C.ei("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cG,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eyb=new C.ei("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bg,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.ey6=new C.ei("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c8,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eyn=new C.ei("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aA,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.exV=new C.ei("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bc,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eyc=new C.ei("honor","Honor Magic V5","\ud83d\udcf1",A.cr,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eyl=new C.ei("vivo","vivo X300 Pro","\ud83d\udcf1",A.cN,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eyq=new C.ei("ereader","Kindle Scribe","\ud83d\udcd6",A.bu,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ext=new C.ei("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ci,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.exY=new C.ei("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cG,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.exQ=new C.ei("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.exE=new C.ei("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.ex,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.exN=new C.ei("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aA,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eyt=new C.ei("vision","Apple Vision Pro","\ud83e\udd7d",A.bf,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.SQ=w([D.exL,D.exR,D.eyv,D.ey7,D.exD,D.ey5,D.eyA,D.eyh,D.exW,D.eyx,D.exv,D.eyi,D.eyk,D.exT,D.exX,D.eye,D.exM,D.ey9,D.ey1,D.exZ,D.exC,D.exJ,D.exP,D.eyC,D.eyr,D.ey4,D.exI,D.eyB,D.eyE,D.exy,D.eyF,D.exG,D.exS,D.ey2,D.exA,D.eys,D.ey_,D.exF,D.ey3,D.eyp,D.exB,D.eyj,D.exO,D.eyd,D.eyu,D.exz,D.ey8,D.eyg,D.eyz,D.exx,D.eyD,D.eyo,D.eya,D.eym,D.exH,D.eyy,D.exu,D.ey0,D.exU,D.eyf,D.exw,D.exK,D.eyw,D.eyb,D.ey6,D.eyn,D.exV,D.eyc,D.eyl,D.eyq,D.ext,D.exY,D.exQ,D.exE,D.exN,D.eyt],B.at("O<ei>"))
D.dpm=w([5,10,15,25,45,60],x.t)
D.dpK=w([-0.045,0.03,-0.015],x.n)
D.aD7=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vm=w([0.05,0.2,0.35],x.n)
D.bag=new B.ab(0,A.G,A.hL,A.dL,6)
D.dsv=w([D.bag],x.V)
D.eF3=new B.y(0,"AND")
D.eFV=new B.y(1,"Adder")
D.eGA=new B.y(2,"Blinker")
D.eH6=new B.y(3,"Memory")
D.dti=w([D.eF3,D.eFV,D.eGA,D.eH6],x.I)
D.aDj=w([-104,0,104],x.n)
D.aDl=w([-14,3],x.n)
D.dug=w([-8,0,8],x.n)
D.aDu=w([-92,0,92],x.n)
D.duG=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fdk=new C.vp("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fdr=new C.vp("Medium tank","Balanced.",0.35,1)
D.fdq=new C.vp("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.T4=w([D.fdk,D.fdr,D.fdq],x._)
D.nU=w([0.04,0.2,0.36],x.n)
D.aDG=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f7q=new B.b5(D.b2o,"Fold",U.art)
D.f6n=new B.b5(D.ae1,"Flip",A.Db)
D.bRy=new B.a_(62889,"MaterialIcons",!1)
D.f7M=new B.b5(D.b2p,"Rise",D.bRy)
D.arG=new B.a_(983870,"MaterialIcons",!1)
D.f3M=new B.b5(D.ae2,"Assemble",D.arG)
D.f3Z=new B.b5(D.b2q,"Spin",D.aq9)
D.f3T=new B.b5(D.b2r,"Pop",A.kc)
D.dwd=w([D.f7q,D.f6n,D.f7M,D.f3M,D.f3Z,D.f3T],B.at("O<+(Lj,n,a_)>"))
D.aDL=w([A.c3,A.ex,A.bv,A.aG,A.bf,A.bW],x.O)
D.dwE=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dxI=w([3,4.5,5,6,9],x.n)
D.baW=new B.ab(0,A.G,A.b5,A.J,16)
D.dya=w([D.baW],x.V)
D.fVt=new B.B("\ud83e\uddcd",null,R.L2,null,null,null,null,null,null,null,null,null)
D.cc9=new B.IU(5,null,null,A.bw,A.c3,null,null,null,null)
D.fkn=new B.a5(150,null,D.cc9,null)
D.fCF=new B.G(!0,A.ab,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYM=new B.B("Getting the body ready...",null,D.fCF,null,null,null,null,null,null,null,null,null)
D.fVw=new B.B("Real 3D anatomy, kept on your phone",null,Aa.B3,null,null,null,null,null,null,null,null,null)
D.dyd=w([D.fVt,A.aB,D.fkn,A.af,D.fYM,A.ax,D.fVw],x.p)
D.dyN=w(["solar","turbine","crank","pot"],x.s)
D.dzf=w([0,0.35,0.75,1],x.n)
D.dAE=w(["volts","level","ohms","on"],x.s)
D.dC7=w([A.jM,A.zE,A.zp,A.qT,A.Dx,A.tn,A.zC,A.pD,A.ii,A.oO,A.ho,A.e9,A.hB,A.i0,A.mk,A.kB,A.v9,A.qW,A.lp,A.HG,A.v8,A.Da,A.D8,A.Q6,A.HF,A.Dl,A.PM,A.aqV,H.arC,A.kc],x.x)
D.enG={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hyN=new C.yI("Switch",F.oL,A.bt,0,"Tap it to turn it ON or OFF.")
D.hyJ=new C.yI("Blinker",A.oK,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hyK=new C.yI("AND",D.arG,A.cr,2,"ON only when BOTH inputs are ON.")
D.bT5=new B.a_(63671,"MaterialIcons",!1)
D.hyI=new C.yI("OR",D.bT5,A.bf,2,"ON when EITHER input is ON.")
D.hyL=new C.yI("XOR",Ac.a3i,A.c3,2,"ON when the inputs are DIFFERENT.")
D.hyF=new C.yI("NAND",A.uT,A.aG,2,"OFF only when BOTH inputs are ON.")
D.bS9=new B.a_(63176,"MaterialIcons",!1)
D.hyG=new C.yI("NOR",D.bS9,A.fJ,2,"ON only when BOTH inputs are OFF.")
D.hyH=new C.yI("NOT",A0.Dp,A.cN,1,"Flips the signal: ON becomes OFF.")
D.hyM=new C.yI("Light",A.ln,A.ex,1,"Glows when its input is ON.")
D.hyO=new C.yI("Buzzer",A.oN,A.bW,1,"Beeps while its input is ON.")
D.Aj=new B.bs(D.enG,[D.hyN,D.hyJ,D.hyK,D.hyI,D.hyL,D.hyF,D.hyG,D.hyH,D.hyM,D.hyO],B.at("bs<n,yI>"))
D.epr={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.AM=new C.Ki(0,"tv")
D.feV=new C.m4("Samsung Neo QLED 8K",D.AM,F.yp,A.aG)
D.feL=new C.m4("LG OLED evo G5",D.AM,A.eo,A.hv)
D.feC=new C.m4("Sony Bravia 9",D.AM,A.rB,A.bu)
D.feG=new C.m4("Apple TV 4K",D.AM,A.dX,A.bO)
D.feD=new C.m4("Bang and Olufsen Beovision",D.AM,F.BR,F.ul)
D.aao=new C.Ki(1,"iphone")
D.aT6=new C.m4("iPhone 18 Pro Max",D.aao,D.ala,A.ci)
D.AO=new C.Ki(3,"fold")
D.bxs=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.feQ=new C.m4("iPhone Fold",D.AO,D.bxs,A.b7)
D.AN=new C.Ki(2,"android")
D.feR=new C.m4("Samsung Galaxy S26 Ultra",D.AN,F.YN,A.d8)
D.bpT=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.feJ=new C.m4("Samsung Galaxy Z Fold7",D.AO,D.bpT,A.cG)
D.feF=new C.m4("Google Pixel 10 Pro XL",D.AN,A.cY,A.bg)
D.feN=new C.m4("Xiaomi 16 Ultra",D.AN,A.ic,A.c8)
D.feI=new C.m4("Huawei Mate 80 Pro Max",D.AN,A.er,A.aA)
D.feE=new C.m4("OPPO Find X9 Ultra",D.AN,A.eb,A.bc)
D.feX=new C.m4("Honor Magic V5",D.AO,A.dg,A.cr)
D.feK=new C.m4("vivo X300 Pro",D.AN,A.h_,A.cN)
D.aT7=new C.Ki(4,"tablet")
D.feP=new C.m4("iPad Pro M5",D.aT7,A.cY,A.aG)
D.aap=new C.Ki(5,"reader")
D.feY=new C.m4("Kindle Scribe",D.aap,A.cP,A.bu)
D.xq=new C.Ki(6,"computer")
D.feO=new C.m4("MacBook Pro M5 Max",D.xq,A.cY,A.ci)
D.feU=new C.m4("iMac 32 inch",D.xq,A.bO,A.cG)
D.feM=new C.m4("Pro Display XDR 8K",D.xq,A.ic,A.b9)
D.feH=new C.m4("Sony Laser Projector",D.xq,A.cs,A.ex)
D.feS=new C.m4("Luxury car touchscreen",D.xq,M.mX,A.aA)
D.feW=new C.m4("Apple Vision Pro",D.xq,A.cy,A.bf)
D.feT=new C.m4("Apple Watch Ultra",D.AO,F.BR,A.bv)
D.mu=new B.bs(D.epr,[D.feV,D.feL,D.feC,D.feG,D.feD,D.aT6,D.feQ,D.feR,D.feJ,D.feF,D.feN,D.feI,D.feE,D.feX,D.feK,D.feP,D.feY,D.feO,D.feU,D.feM,D.feH,D.feS,D.feW,D.feT],B.at("bs<n,m4>"))
D.d2W=w([A.z],x.M)
D.d3j=w([A.ay,A.aC],x.M)
D.dd5=w([A.ay,A.z,A.aC],x.M)
D.deI=w([A.ay,A.lB,A.z,A.lC,A.aC],x.M)
D.dte=w([A.ay,A.lB,A.a5,A.a8,A.lC,A.aC],x.M)
D.dGT=new B.d_([1,D.d2W,2,D.d3j,3,D.dd5,4,A.aEk,5,D.deI,6,D.dte],B.at("d_<F,ai<d7>>"))
D.eqd={Calm:0,Box:1,Sleep:2}
D.cKR=w([4,2,6,0],x.n)
D.cKY=w([4,4,4,4],x.n)
D.cKZ=w([4,7,8,0],x.n)
D.Ty=new B.bs(D.eqd,[D.cKR,D.cKY,D.cKZ],B.at("bs<n,ai<H>>"))
D.enT={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xZ=new C.a1H(0,"source")
D.de8=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hF5=new C.qx("Clock",A.oK,D.xZ,A.bv,D.de8)
D.hF1=new C.qx("Button",A.Ds,D.xZ,A.aQ,A.Z)
D.dxU=w(["random","quick","slow"],x.s)
D.hFc=new C.qx("Dice",A.nL,D.xZ,A.c3,D.dxU)
D.bSJ=new B.a_(63484,"MaterialIcons",!1)
D.Fv=new C.a1H(1,"logic")
D.dCZ=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hF8=new C.qx("Delay",D.bSJ,D.Fv,A.cr,D.dCZ)
D.dpt=w(["fast","mid","slow"],x.s)
D.hFd=new C.qx("Echo",A.ar9,D.Fv,A.bf,D.dpt)
D.hFa=new C.qx("Every 2nd",A0.Dp,D.Fv,A.fJ,A.Z)
D.bSp=new B.a_(63309,"MaterialIcons",!1)
D.hF7=new C.qx("Every 3rd",D.bSp,D.Fv,A.aG,A.Z)
D.ccs=w(["50%","25%","75%"],x.s)
D.hFf=new C.qx("Chance",Al.arI,D.Fv,A.cN,D.ccs)
D.rp=new C.a1H(2,"out")
D.hF3=new C.qx("Light",A.ln,D.rp,A.ex,A.Z)
D.hF4=new C.qx("Burst",A.kc,D.rp,A.c3,A.Z)
D.hF2=new C.qx("Ripple",A.zJ,D.rp,A.b9,A.Z)
D.hFb=new C.qx("Ball",A.arl,D.rp,A.cN,A.Z)
D.hF9=new C.qx("Comet",A.oO,D.rp,A.bf,A.Z)
D.bUc=new B.a_(983669,"MaterialIcons",!1)
D.hFe=new C.qx("Shake",D.bUc,D.rp,A.bW,A.Z)
D.hFg=new C.qx("Pop",A.D6,D.rp,A.bc,A.Z)
D.hF6=new C.qx("Wash",A.PQ,D.rp,A.pn,A.Z)
D.n8=new B.bs(D.enT,[D.hF5,D.hF1,D.hFc,D.hF8,D.hFd,D.hFa,D.hF7,D.hFf,D.hF3,D.hF4,D.hF2,D.hFb,D.hF9,D.hFe,D.hFg,D.hF6],B.at("bs<n,qx>"))
D.eof={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bAf=new C.fU(20,4,13,!1)
D.bAG=new C.fU(14,5,13.5,!1)
D.bAx=new C.fU(9,2.4,10,!1)
D.bAL=new C.fU(7,5,12.5,!1)
D.bAA=new C.fU(8,3.5,12,!1)
D.bAb=new C.fU(15,2,6,!1)
D.bAJ=new C.fU(45,6,13.5,!0)
D.bAr=new C.fU(10,8,13.5,!1)
D.bAj=new C.fU(25,3,12,!0)
D.bAp=new C.fU(35,4,12,!0)
D.bAq=new C.fU(40,4.5,9.5,!0)
D.bAs=new C.fU(55,3,9,!0)
D.bAc=new C.fU(18,3,9,!1)
D.bAI=new C.fU(22,4,13.5,!1)
D.bAB=new C.fU(16,5,13.5,!1)
D.bAn=new C.fU(30,4,9,!0)
D.bAU=new C.fU(5,3.5,13,!1)
D.bAv=new C.fU(25,3,13.5,!0)
D.bAE=new C.fU(14,2.5,9,!1)
D.bAu=new C.fU(6,6,13,!1)
D.bAM=new C.fU(30,1.2,5,!0)
D.bAT=new C.fU(35,3,4.5,!0)
D.bAP=new C.fU(20,4.5,7.5,!0)
D.bAt=new C.fU(55,5.5,13.5,!0)
D.bAa=new C.fU(45,5.5,13.5,!0)
D.bAF=new C.fU(40,5.5,13.5,!0)
D.bAS=new C.fU(60,6,13.5,!0)
D.alF=new C.fU(28,4,7,!0)
D.GU=new C.fU(25,4,7,!0)
D.bAm=new C.fU(30,4,7,!0)
D.bAh=new C.fU(22,4,7,!0)
D.bAi=new C.fU(24,4,7,!0)
D.bAw=new C.fU(60,3,5.5,!0)
D.bAd=new C.fU(18,9,14,!0)
D.bAk=new C.fU(25,9,14,!0)
D.alG=new C.fU(30,8,14,!0)
D.bAg=new C.fU(20,8,14,!0)
D.bAo=new C.fU(30,9,14,!0)
D.bAN=new C.fU(22,5,9.5,!0)
D.bAe=new C.fU(30,2.5,10.5,!0)
D.bAC=new C.fU(50,5.5,13.5,!0)
D.bAR=new C.fU(12,2,9.5,!1)
D.bAz=new C.fU(16,1.3,9.5,!0)
D.bAK=new C.fU(40,2.5,7,!0)
D.bAQ=new C.fU(60,1.2,4.8,!0)
D.bAO=new C.fU(18,5,13.5,!0)
D.bAH=new C.fU(8,2,9.5,!1)
D.bAy=new C.fU(12,2.5,8,!1)
D.bAl=new C.fU(20,3.5,13.5,!0)
D.bAD=new C.fU(3.5,3,13,!1)
D.Ak=new B.bs(D.eof,[D.bAf,D.bAG,D.bAx,D.bAL,D.bAA,D.bAb,D.bAJ,D.bAr,D.bAj,D.bAp,D.bAq,D.bAs,D.bAc,D.bAI,D.bAB,D.bAn,D.bAU,D.bAv,D.bAE,D.bAu,D.bAM,D.bAT,D.bAP,D.bAt,D.bAa,D.bAF,D.bAS,D.alF,D.GU,D.bAm,D.GU,D.bAh,D.GU,D.bAi,D.alF,D.GU,D.bAw,D.bAd,D.bAk,D.alG,D.bAg,D.bAo,D.bAN,D.bAe,D.bAC,D.bAR,D.bAz,D.bAK,D.bAQ,D.GU,D.alG,D.bAO,D.bAH,D.bAy,D.bAl,D.bAD],B.at("bs<n,fU>"))
D.enQ={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.f3h=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eJe=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eJ9=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eVC=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eWz=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eVy=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eHf=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eTt=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.f3p=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eWV=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eMz=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eGU=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eLB=new B.y("Movement","They pull your legs together and help you balance.")
D.eNx=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eJn=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.f0I=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.f1T=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eTe=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.f1C=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eRP=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eX2=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eH0=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eNV=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eWI=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eSa=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.f1K=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eV2=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eHd=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eXE=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.f0l=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eZr=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eFf=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eUL=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eUP=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eOF=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eJB=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eNl=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eTE=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.f_h=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.f3m=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eX_=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eEY=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eTQ=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eFO=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.f_x=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.f0E=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eUh=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.f_M=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eH2=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.f1g=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eKY=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eZV=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eOj=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eS4=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eXk=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.f1q=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.f1i=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.f1m=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eSC=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eYe=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eZo=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.f12=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eUg=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eQo=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eP6=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eUF=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eXd=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eQV=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eRC=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eLl=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.f0A=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eMa=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eFL=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eOE=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eFG=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eK2=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eOJ=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eMj=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eXA=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eNA=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.f33=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.ePg=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eSv=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eVa=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eMr=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eMc=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dI_=new B.bs(D.enQ,[D.f3h,D.eJe,D.eJ9,D.eVC,D.eWz,D.eVy,D.eHf,D.eTt,D.f3p,D.eWV,D.eMz,D.eGU,D.eLB,D.eNx,D.eJn,D.f0I,D.f1T,D.eTe,D.f1C,D.eRP,D.eX2,D.eH0,D.eNV,D.eWI,D.eSa,D.f1K,D.eV2,D.eHd,D.eXE,D.f0l,D.eZr,D.eFf,D.eUL,D.eUP,D.eOF,D.eJB,D.eNl,D.eTE,D.f_h,D.f3m,D.eX_,D.eEY,D.eTQ,D.eFO,D.f_x,D.f0E,D.eUh,D.f_M,D.eH2,D.f1g,D.eKY,D.eZV,D.eOj,D.eS4,D.eXk,D.f1q,D.f1i,D.f1m,D.eSC,D.eYe,D.eZo,D.f12,D.eUg,D.eQo,D.eP6,D.eUF,D.eXd,D.eQV,D.eRC,D.eLl,D.f0A,D.eMa,D.eFL,D.eOE,D.eFG,D.eK2,D.eOJ,D.eMj,D.eXA,D.eNA,D.f33,D.ePg,D.eSv,D.eVa,D.eMr,D.eMc],B.at("bs<n,+(n,n)>"))
D.dQT=new C.VI(null)
D.dR5=new C.VJ(null)
D.dT9=new C.VP(null)
D.dTY=new C.Wp(null)
D.dU1=new C.Wq(null)
D.dUA=new C.Wy(null)
D.dYp=new C.X7(null)
D.dZ5=new C.X8(null)
D.e2i=new C.Xd(null)
D.eib=new C.Xe(null)
D.eie=new C.Xi(null)
D.eko=new C.XD(null)
D.ekp=new C.a9D(null)
D.ems=new C.XM(null)
D.eqq=new B.r(0,118)
D.aMw=new B.r(0,13)
D.eqr=new B.r(0,17)
D.equ=new B.r(0,330)
D.eqA=new B.r(0,-13)
D.eqB=new B.r(0,-17)
D.eqC=new B.r(0,-18)
D.eqD=new B.r(0,-19)
D.eqF=new B.r(0,-28)
D.eqH=new B.r(0,-31)
D.eqI=new B.r(0,-32)
D.eqO=new B.r(-9.5,-11)
D.eqR=new B.r(10,20)
D.eqU=new B.r(10,-13)
D.eqW=new B.r(10,-22)
D.eqX=new B.r(10,-4)
D.er0=new B.r(11,0)
D.a9c=new B.r(11,8)
D.er6=new B.r(12,2)
D.er7=new B.r(14,0)
D.er8=new B.r(14,12)
D.aMI=new B.r(14,8)
D.er9=new B.r(14,-17)
D.aMK=new B.r(14,-3)
D.aML=new B.r(14,-4)
D.erc=new B.r(15,0)
D.erd=new B.r(15,-12)
D.erg=new B.r(16,-8)
D.erh=new B.r(18,14)
D.eri=new B.r(18,-12)
D.aMR=new B.r(20,0)
D.erq=new B.r(20,15)
D.err=new B.r(20,-17)
D.ers=new B.r(20,-3)
D.ert=new B.r(21,8)
D.erx=new B.r(22,10)
D.aMT=new B.r(22,8)
D.ery=new B.r(24,0)
D.erz=new B.r(24,2)
D.erC=new B.r(24,-18)
D.erD=new B.r(24,-22)
D.erH=new B.r(25,8)
D.erI=new B.r(26,0)
D.erM=new B.r(28,-30)
D.erT=new B.r(30,18)
D.erU=new B.r(30,2)
D.erX=new B.r(31,19)
D.erZ=new B.r(32,0)
D.aMX=new B.r(34,0)
D.aMY=new B.r(34,-32)
D.JS=new B.r(36,0)
D.esb=new B.r(3,-1)
D.ese=new B.r(40,3)
D.ess=new B.r(4,11)
D.esv=new B.r(4,-2)
D.esz=new B.r(5,0)
D.esA=new B.r(5,17)
D.esB=new B.r(5,6)
D.esG=new B.r(6,11)
D.esN=new B.r(8,7)
D.esO=new B.r(8,-10)
D.esP=new B.r(8,-14)
D.aN2=new B.r(9,0)
D.esZ=new B.r(-20.5,-17.6)
D.et_=new B.r(-9,18.5)
D.et2=new B.r(-2.6,-1)
D.etb=new B.r(2.6,1)
D.etj=new B.r(-9,12.2)
D.etD=new B.r(-9,20.5)
D.etY=new B.r(-10,0)
D.etZ=new B.r(-10,12)
D.aN9=new B.r(-10,4)
D.eu2=new B.r(-11,0)
D.eu5=new B.r(-11,-2)
D.eu9=new B.r(-13,-5)
D.eua=new B.r(-14,0)
D.eub=new B.r(-14,13)
D.euc=new B.r(-14,2)
D.eud=new B.r(-14,-12)
D.eue=new B.r(-14,-19)
D.eug=new B.r(-14,-23)
D.euh=new B.r(-15,6)
D.euk=new B.r(-16,14)
D.eum=new B.r(-16,-8)
D.eun=new B.r(-17,10)
D.euo=new B.r(-17,-18)
D.eup=new B.r(-17,-8)
D.eur=new B.r(-18,20)
D.eus=new B.r(-18,-9)
D.aNb=new B.r(-20,0)
D.euu=new B.r(-20,16)
D.euv=new B.r(-20,-9)
D.Uu=new B.r(-22,8)
D.euw=new B.r(-22,-10)
D.eux=new B.r(-22,-11)
D.euy=new B.r(-24,10)
D.euz=new B.r(-24,11)
D.euA=new B.r(-24,14)
D.euB=new B.r(-24,-22)
D.euD=new B.r(-25,-11)
D.euE=new B.r(-26,0)
D.euF=new B.r(-26,-18)
D.euG=new B.r(-2,9)
D.euH=new B.r(-2,-10)
D.euI=new B.r(-2,-20)
D.euL=new B.r(-2,-9)
D.euN=new B.r(-32,0)
D.aNd=new B.r(-34,0)
D.euS=new B.r(-40,3)
D.euU=new B.r(-4,11)
D.euV=new B.r(-4,-17)
D.euW=new B.r(-4,-2)
D.ev_=new B.r(-5,0)
D.ev0=new B.r(-5,20)
D.ev1=new B.r(-5,6)
D.ev2=new B.r(-6,26)
D.ev3=new B.r(-6,6)
D.ev4=new B.r(-6,-42)
D.ev6=new B.r(-7,-19)
D.ev7=new B.r(-7,-24)
D.eva=new B.r(-8,-9)
D.a9l=new B.r(-9,0)
D.evb=new B.r(-9,1)
D.evd=new B.r(-9,-23)
D.fMH=new B.B("Thinking\u2026",null,A.ht,null,null,null,null,null,null,null,null,null)
D.ewd=new B.D(A.jK,D.fMH,null)
D.h2x=new B.B("Start from a ready-made board",null,A.fE,null,null,null,null,null,null,null,null,null)
D.ewr=new B.D(A4.wC,D.h2x,null)
D.bIj=new B.Q(4,0,4,14)
D.fHP=new B.G(!0,A.aF,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNH=new B.B("Games and little helpers for a spare minute.",null,D.fHP,null,null,null,null,null,null,null,null,null)
D.ewD=new B.D(D.bIj,D.fNH,null)
D.dq4=w([A.hY,A.bh],x.O)
D.aS5=new B.bS(A.z,0.5,A.x,null,0,D.dq4,null,null)
D.eDO=new B.bS(A.z,0.5,A.x,null,0,D.aE1,null,null)
D.dgA=w([A.c,A.bP],x.O)
D.eDQ=new B.bS(A.z,0.5,A.x,null,0,D.dgA,null,null)
D.dz2=w([A.bO,A.cy],x.O)
D.aS6=new B.bS(A.z,0.5,A.x,null,0,D.dz2,null,null)
D.cUS=w([A.c,A.bO],x.O)
D.eDV=new B.bS(A.nj,0.5,A.x,null,0,D.cUS,null,null)
D.bxw=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dwY=w([A.fA,D.bxw],x.O)
D.eE_=new B.bS(A.nj,0.5,A.x,null,0,D.dwY,null,null)
D.cO0=w([A.cY,A.cs],x.O)
D.eE0=new B.bS(A.z,0.5,A.x,null,0,D.cO0,null,null)
D.d1Q=w([A.fZ,A.aQ,A.d5],x.O)
D.eE3=new B.bS(A.nj,0.5,A.x,null,0,D.d1Q,null,null)
D.dqM=w([A.cy,M.mX],x.O)
D.eE4=new B.bS(A.nj,0.5,A.x,null,0,D.dqM,null,null)
D.eE9=new B.bS(A.z,0.5,A.x,null,0,D.aAe,null,null)
D.dzV=w([A.cy,A.i7],x.O)
D.eEh=new B.bS(A.z,0.5,A.x,null,0,D.dzV,null,null)
D.aSb=new B.aP(9,9)
D.eEp=new B.aP(1.4,1.4)
D.fbs=new B.a4(10,-8,18,-2)
D.fbt=new B.a4(14,-14,20,14)
D.fbv=new B.a4(20,-2,30,2)
D.fbA=new B.a4(4,-13,30,-3)
D.fbG=new B.a4(8,-7,12,7)
D.fbS=new B.a4(-12,12,12,19)
D.fbT=new B.a4(-12,14,12,22)
D.fbU=new B.a4(-12,-22,12,8)
D.fbV=new B.a4(-12,-25,12,19)
D.fbW=new B.a4(-12,-26,12,-6)
D.fbX=new B.a4(-12,-4,12,14)
D.fbZ=new B.a4(-14,20,14,24)
D.fc_=new B.a4(-14,6,14,10)
D.fc0=new B.a4(-14,-17,14,15)
D.fc1=new B.a4(-14,-26,14,18)
D.fc2=new B.a4(-14,-4,14,20)
D.fc4=new B.a4(-15,-29,15,25)
D.fc5=new B.a4(-16,-16,16,16)
D.fc8=new B.a4(-16,-22,-9,18)
D.fc9=new B.a4(-16,-24,16,-10)
D.fcb=new B.a4(-16,-2,16,20)
D.fcd=new B.a4(-18,20,18,24)
D.fce=new B.a4(-18,-18,18,20)
D.fcf=new B.a4(-20,12,20,22)
D.fcg=new B.a4(-20,-28,20,26)
D.fch=new B.a4(-22,14,22,18)
D.aSO=new B.a4(-22,-26,22,24)
D.fci=new B.a4(-22,-3,22,3)
D.fcj=new B.a4(-22,-4,22,12)
D.fcl=new B.a4(-24,-12,10,22)
D.fcm=new B.a4(-24,-14,22,8)
D.fcn=new B.a4(-24,-6,24,20)
D.aSP=new B.a4(-24,-9,24,9)
D.fco=new B.a4(-25,14,25,19)
D.fcp=new B.a4(-26,-14,14,8)
D.fcq=new B.a4(-26,-4,26,20)
D.fcr=new B.a4(-26,-6,4,6)
D.aSQ=new B.a4(-28,-13,28,13)
D.fcs=new B.a4(-28,-16,28,16)
D.fct=new B.a4(-28,-16,28,8)
D.fcu=new B.a4(-28,-22,28,22)
D.fcv=new B.a4(-30,-12,30,14)
D.fcw=new B.a4(-30,-14,0,14)
D.fcx=new B.a4(-30,-18,30,20)
D.fcy=new B.a4(-30,-28,30,14)
D.fcz=new B.a4(-30,-2,30,18)
D.fcA=new B.a4(-30,-4,30,18)
D.fcB=new B.a4(-32,-17,32,17)
D.fcC=new B.a4(-32,-28,32,18)
D.fcD=new B.a4(-33,-21,33,17)
D.fcE=new B.a4(-34,14,34,26)
D.aaf=new B.a4(-34,-18,34,18)
D.fcF=new B.a4(-34,-4,34,7)
D.fcG=new B.a4(-36,-24,36,20)
D.fcH=new B.a4(-38,-22,38,22)
D.fcJ=new B.a4(-3,12,3,22)
D.fcK=new B.a4(-3,5,3,15)
D.fcO=new B.a4(-46,-34,46,28)
D.fcQ=new B.a4(-48,-3,48,3)
D.fcT=new B.a4(-6,18,24,24)
D.fcU=new B.a4(-6,5,6,12)
D.fcV=new B.a4(-6,-22,6,-15)
D.fcZ=new B.a4(-9,-16,9,22)
D.fd_=new B.a4(-4.5,-24,4.5,-21.2)
D.fd1=new B.a4(14,-9,17.5,9)
D.epB={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aTW=new B.db(D.epB,5,x.Q)
D.ep4={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fgD=new B.db(D.ep4,10,x.Q)
D.fiY=new B.av(24,44)
D.fjl=new B.av(54,38)
D.fjr=new B.av(66,38)
D.bfA=new B.fn(2,null,null,null,null,A.bf,null,null,null,null)
D.fkv=new B.a5(16,16,D.bfA,null)
D.aV_=new B.hJ(3,12,12,0.82,null)
D.fxk=new B.G(!0,A.wf,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frO=new B.eq("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cL,null,null,null,null,null,null,D.fxk)
D.fCt=new B.G(!0,A.kN,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frU=new B.eq("AI",null,null,A.cL,null,null,null,null,null,null,D.fCt)
D.fsb=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsI=new B.G(!0,A.bp,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft7=new B.G(!0,A.cr,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftZ=new B.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuu=new B.G(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhm=new B.cU(A.hL,A.dL,6)
D.djH=w([D.fhm],B.at("O<cU>"))
D.fvs=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.djH,null,null,null)
D.fvx=new B.G(!0,A.ew,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvC=new B.G(!0,A.bV,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwd=new B.G(!0,A.bV,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwl=new B.G(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxh=new B.G(!0,A.bV,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxo=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxW=new B.G(!0,A.aF,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fys=new B.G(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyv=new B.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aEn,null,null,null)
D.fyC=new B.G(!0,A.c,null,null,null,null,12.5,A.a9,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzk=new B.G(!0,A.bA,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAr=new B.G(!0,A.ux,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB2=new B.G(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBb=new B.G(!0,A.aF,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBZ=new B.G(!0,A.mY,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC9=new B.G(!0,A.cy,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXb=new B.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDk=new B.G(!0,A.iL,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDE=new B.G(!0,A.bV,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEb=new B.G(!0,A.bc,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFH=new B.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGd=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGu=new B.G(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGS=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGV=new B.G(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI4=new B.G(!0,A.ux,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIr=new B.G(!0,A.bc,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvF=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIQ=new B.B("\u26a0\ufe0f ",null,D.fvF,null,null,null,null,null,null,null,null,null)
D.fJ2=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.B5,null,null,null,null,null,null,null,null,null)
D.fKG=new B.B("Pick one, then change it and see what happens.",null,A.B5,null,null,null,null,null,null,null,null,null)
D.fwP=new B.G(!0,A.ab,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLG=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fwP,null,null,null,null,null,null,null,null,null)
D.fAY=new B.G(!0,A.bW,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMa=new B.B("Burnt out! Press Repair.",null,D.fAY,null,null,null,null,null,null,null,null,null)
D.fNi=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fNV=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h6,null,null,null,null,null,null,null,null,null)
D.fOy=new B.B("Make it yours",null,A.jR,null,null,null,null,null,null,null,null,null)
D.fRL=new B.B("5G",null,A_.aWw,null,null,null,null,null,null,null,null,null)
D.fSL=new B.B("Pick how big the screen is on the board",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fDW=new B.G(!0,A.bV,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSX=new B.B("WHAT HAPPENS",null,D.fDW,null,null,null,null,null,null,null,null,null)
D.fUI=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fVn=new B.B("Change the words and pictures on the three slabs.",null,A.B5,null,null,null,null,null,null,null,null,null)
D.fVA=new B.B("All the parts and wires will be removed.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fVV=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fWu=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fXJ=new B.B("\ud83c\udfaf Challenges",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fYf=new B.B("Remove this part",null,Y.aW7,null,null,null,null,null,null,null,null,null)
D.fYy=new B.B("Clear the board?",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fDl=new B.G(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYQ=new B.B("How the Lab works",null,D.fDl,null,null,null,null,null,null,null,null,null)
D.fub=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZa=new B.B("Electronics Lab",null,D.fub,null,null,null,null,A.a2,null,1,null,null)
D.fZe=new B.B("?",null,Q.aXI,null,null,null,null,null,null,null,null,null)
D.h_z=new B.B("Ready-made circuits",null,A.dk,null,null,null,null,null,null,null,null,null)
D.h0c=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fGz=new B.G(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3G=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fGz,null,null,null,null,null,null,null,null,null)
D.h4S=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,Y.aW5,null,null,null,null,null,null,null,null,null)
D.h5n=new B.B("NGMY",null,A.vO,null,null,null,null,null,null,null,null,null)
D.h5A=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.We,null,null,null,null,null,null,null,null,null)
D.h5Z=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.lY,null,null,null,null,null,null,null,null,null)
D.h72=new B.B("TOOLBOX",null,A9.abD,null,null,null,null,null,null,null,null,null)
D.hvv=new B.bf("electronics-part-card",x.W)
D.hvx=new B.bf("device-learn-more",x.W)
D.hvC=new B.bf("device-remote",x.W)
D.hvH=new B.bf("device-picture",x.W)
D.hwa=new B.bf("electronics-part-about",x.W)
D.hwh=new B.bf("body-loading",x.W)
D.hwn=new B.bf("device-fullscreen",x.W)
D.hwK=new B.bf("core-protocol-back",x.W)
D.hwP=new B.bf("core-protocol-title-frame",x.W)})();(function staticFields(){$.hwl=null
$.hwh=null
$.hwi=null
$.hCH=0
$.i58=B.T(x.N,B.at("iA"))
$.i5H=B.T(x.N,B.at("iA"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iCH","bHp",()=>{var v="led"
return B.a([C.aAp("Both together","Make the light glow only when BOTH switches are ON.",2,new C.ftN(),v),C.aAp("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.ftO(),v),C.aAp("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.ftP(),v),C.aAp("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.ftW(),v),C.aAp("Not both","Make the light go OFF only when both switches are ON.",2,new C.ftX(),v),C.aAp("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.ftY(),"buzzer")],B.at("O<bdy>"))})
w($,"iD8","bHq",()=>B.a([C.Rm("UNIVERSE","Earth, space and gravity",A.Q9,A.aG,new C.fud()),C.Rm("ELECTRONICS LAB","Batteries, wires, real circuits",Ah.uW,A.aG,new C.fue()),C.Rm("DISCOVERY LAB","Body Explorer: a real 3D human",D.bRB,A.bc,new C.fuf()),C.Rm("TOOLBOX","Converter, clock, games",H.aqm,A.cN,new C.fug()),C.Rm("REACTION LAB","Wire parts together",A.Dw,A.bv,new C.fuh()),C.Rm("SPARK PAINTER","Paint with light",A.HE,A.c3,new C.fui()),C.Rm("ROCKET LANDER","Land softly on the pad",A.oO,A.aG,new C.fuj()),C.Rm("TITLE ANIMATOR","Make a moving title",A.x0,A.bt,new C.fuk()),C.Rm("CIRCUIT LAB","Connect logic, learn it",A.a3G,A.cr,new C.ful())],B.at("O<bvP>")))
w($,"iES","qI",()=>{var v,u,t=B.T(x.N,x.C)
for(v=0;v<76;++v){u=D.SQ[v]
t.n(0,u.a,u)}return t})
w($,"iCI","aji",()=>B.a([C.Gr("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.ftZ()),C.Gr("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fu_()),C.Gr("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fu0()),C.Gr("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fu1()),C.Gr("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fu2()),C.Gr("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.ftQ()),C.Gr("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.ftR()),C.Gr("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.ftS()),C.Gr("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.ftT()),C.Gr("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.ftU()),C.Gr("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.ftV())],B.at("O<bdz>")))
w($,"iDa","hM1",()=>B.a([C.a2d("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c8,new C.fut()),C.a2d("Focus Timer","Work, then rest","\u23f1\ufe0f",A.bW,A.bD,new C.fuu()),C.a2d("Breathe","Calm down in a minute","\ud83e\udee7",A.fJ,A.cG,new C.fuv()),C.a2d("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b7,new C.fuw()),C.a2d("Memory Match","Find the pairs","\ud83c\udccf",A.aG,A.ci,new C.fux()),C.a2d("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bt,A.bg,new C.fuy()),C.a2d("Tip & Split","Share the bill","\ud83e\uddfe",A.bc,A.b2,new C.fuz()),C.a2d("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bf,A.aD,new C.fuA())],B.at("O<bx8>")))})()};
(a=>{a["Ed0XT1Y1Ib36H/4J3o3bIEKxWlA="]=a.current})($__dart_deferred_initializers__);