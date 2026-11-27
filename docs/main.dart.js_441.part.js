((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,W,A9,A5,N,Aa,A6,Ab,A7,X,P,Y,Ac,O,Ad,Ae,Af,Ag,Ah,Ai,Z,Aj,Ak,Al,Am,A_,U,An,Q,Ao,A0,R,S,A1,T,A2,Ap,E,I,G,L,Aq,Ar,A8,C={
bFa(d){return C.io2(d)},
io2(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bFa=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.qY(B.nl(""),d,A.i7,null,null).d9(0,At.a1Q),$async$bFa)
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
return B.i($async$bFa,v)},
iAI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.TK[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cX(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.f7(D.TK,new C.fWV())
if(w==null)w=A.d.gH(D.TK)
s=B.S(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.r0().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.amO(w.a,w.b,m,w,s,!1)},
iu6(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.O(D.Ua,new C.fKW(),x.bd).aJ(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iJf(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.c8(b2,"{")
v=A.a.ow(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.T.aN(0,A.a.av(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aN(a6.a(J.t(u,"parts"))),a8=x.i;a7.B();){q=a7.gP(a7)
p=B.v(J.t(q,"kind"))
o=B.v(J.t(q,"id"))
if(!$.r0().am(0,p)||J.eH(s,o)||J.ab(t)>=8)continue
J.bX(s,o)
n=B.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.dJy[a9]
l=J.t(q,m)
if(typeof l=="number")J.aL(n,m,l)}k=A.h.D(typeof J.t(q,"x")=="number"?B.dw(J.t(q,"x")):0.2+A.h.F(r,3)*0.3,0.16,0.84)
j=A.h.D(typeof J.t(q,"y")=="number"?B.dw(J.t(q,"y")):0.25+A.h.ao(r,3)*0.3,0.1,0.9)
J.bX(t,new B.e1([o,p,k,j,n]));++r}if(J.ab(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aN(a6.a(J.t(u,"wires")));a5.B();){h=a5.gP(a5)
g=a6.a(h)
if(J.ab(g)<4)continue
f=B.v(J.t(g,0))
e=B.v(J.t(g,2))
d=A.n.D(A.h.M(B.dw(J.t(g,1))),0,1)
a0=A.n.D(A.h.M(B.dw(J.t(g,3))),0,1)
if(J.eH(s,f)&&J.eH(s,e)&&!J.z(f,e))J.bX(i,new B.b7([f,d,e,a0]))}if(J.ab(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.R.a(J.t(u,"steps"))
a0=J.aN(a0==null?A.bM:a0)
while(a0.B()){a2=a0.gP(a0)
J.bX(a1,B.v(a2))}a3=a1
a0=J.t(u,"title")
a0=B.v(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.nj(a0,B.v(a1==null?"":a1),t,i,A.M)
a0=a4.a
a1=a4.b
d=J.ab(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.v(a5==null?"":a5)
return new C.amO(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
izb(d){var w,v,u=C.hAo()
d.C(u)
for(w=0;w<60;++w)u.wc(0,0.03333333333333333)
v=u.a
return A.d.aR(v,new C.fSV(u))&&!A.d.cD(v,new C.fSW())},
iza(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.r0().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.v(t.e)+" V")
if(p==="resistor")q.push(""+A.h.S(t.r)+" ohms")
if(A.d.q(D.dHA,p))q.push("level "+A.h.S(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.h.S(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aJ(q,", ")+")"
s.push(B.v(p)+n+": "+o+", current "+A.h.a1(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aJ(s,"\n")+"\nWires: "+A.d.aJ(l,"; ")},
imr(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aJ(v,"\n")+"\n\n"}v=A.d.aJ(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
iAH(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.r0().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Ua[u]
if(A.d.aR(w,new C.fWS(s)))if(!B.cX(r,s.b.toLowerCase(),0))v=B.cX(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fWT(e),B.T(w).k("X<1>")).gar(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.h.a1(A.d.cH(w,0,new C.fWU())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.r0().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
amO:function amO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWV:function fWV(){},
fKW:function fKW(){},
fSV:function fSV(d){this.a=d},
fSW:function fSW(){},
fWS:function fWS(d){this.a=d},
fWT:function fWT(d){this.a=d},
fWU:function fWU(){},
XH:function XH(d,e){this.c=d
this.a=e},
bpn:function bpn(d,e,f,g,h){var _=this
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
er1:function er1(d){this.a=d},
er2:function er2(d,e,f){this.a=d
this.b=e
this.c=f},
er3:function er3(d){this.a=d},
ere:function ere(d){this.a=d},
erf:function erf(d,e){this.a=d
this.b=e},
era:function era(d){this.a=d},
er8:function er8(d,e){this.a=d
this.b=e},
er9:function er9(d,e,f){this.a=d
this.b=e
this.c=f},
erb:function erb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
er6:function er6(d){this.a=d},
er7:function er7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erc:function erc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
er5:function er5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erd:function erd(d,e){this.a=d
this.b=e},
er4:function er4(d,e){this.a=d
this.b=e},
eri:function eri(d){this.a=d},
erh:function erh(d){this.a=d},
erj:function erj(d){this.a=d},
erg:function erg(d){this.a=d},
erk:function erk(d,e){this.a=d
this.b=e},
erl:function erl(d,e){this.a=d
this.b=e},
erm:function erm(d,e){this.a=d
this.b=e},
ern:function ern(d,e){this.a=d
this.b=e},
bFx(d,e,f){var w=null
return B.w(B.a([B.c(d,w,w,w,w,w,w,D.fOP,w,w,w),B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hOO(d,e,f,g){var w=null,v=B.n(24),u=B.K(f.j(0.6),A.r,1)
return B.at(B.q(w,B.w(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aj,B.c(e,w,w,w,w,w,w,A.BN,A.K,w,w),A.az,B.bW(A.fX,g,A.bq,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(D.blQ,w,u,v,w,w,A.m),w,w,w,w,A.ad,w,w,w),w,w,w)},
Hs:function Hs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vS:function vS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y4:function Y4(d){this.a=d},
aIa:function aIa(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.hh$=h
_.mn$=i
_.fk$=j
_.hi$=k
_.bw$=l
_.ab$=m
_.c=_.a=null},
eGz:function eGz(){},
eGT:function eGT(d){this.a=d},
eGS:function eGS(d,e){this.a=d
this.b=e},
eGU:function eGU(){},
eGV:function eGV(){},
eGB:function eGB(d,e,f){this.a=d
this.b=e
this.c=f},
eGA:function eGA(d,e){this.a=d
this.b=e},
eGq:function eGq(d){this.a=d},
eGr:function eGr(d){this.a=d},
eGs:function eGs(d){this.a=d},
eGt:function eGt(d){this.a=d},
eGu:function eGu(d){this.a=d},
eGv:function eGv(d){this.a=d},
eGw:function eGw(d){this.a=d},
eGx:function eGx(d){this.a=d},
eGy:function eGy(d){this.a=d},
eGo:function eGo(d){this.a=d},
eGp:function eGp(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGH:function eGH(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGE:function eGE(d){this.a=d},
eGJ:function eGJ(d){this.a=d},
eGD:function eGD(d){this.a=d},
eGK:function eGK(d){this.a=d},
eGL:function eGL(d){this.a=d},
eGC:function eGC(d){this.a=d},
eGN:function eGN(d,e){this.a=d
this.b=e},
eGG:function eGG(d,e){this.a=d
this.b=e},
eGO:function eGO(d){this.a=d},
eGP:function eGP(d){this.a=d},
eGQ:function eGQ(d){this.a=d},
eGR:function eGR(d){this.a=d},
eGF:function eGF(d){this.a=d},
bme:function bme(d,e){this.b=d
this.a=e},
aQj:function aQj(){},
bD8:function bD8(){},
hJu(){var w=$.hJs
return w==null?$.hJs=$.oi().d0Z("assets/data/three.min.js"):w},
hJt(){var w=$.hJr
return w==null?$.hJr=C.cTr():w},
cTr(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cTr=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.oi().ii(0,"assets/data/body3d.bin"),$async$cTr)
case 3:d=a1
$.hJv=J.eC(A.dM.gaS(d),d.byteOffset,d.byteLength)
t=B.U5(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.k1(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dul[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a5H(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b8H))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bf4(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cTr,v)},
caa(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$caa=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.hd(B.a([C.hJt(),C.hJu()],x.D),x.K),$async$caa)
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
return B.i($async$caa,v)},
aWG:function aWG(d,e,f){this.a=d
this.b=e
this.c=f},
a5H:function a5H(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bf4:function bf4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Wu:function Wu(d){this.a=d},
aGA:function aGA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.hh$=s
_.mn$=t
_.fk$=u
_.hi$=v
_.bw$=w
_.ab$=a0
_.c=_.a=null},
dVE:function dVE(d){this.a=d},
dVD:function dVD(d,e){this.a=d
this.b=e},
dVe:function dVe(d){this.a=d},
dVf:function dVf(d,e){this.a=d
this.b=e},
dVg:function dVg(d){this.a=d},
dVh:function dVh(){},
dVF:function dVF(){},
dVi:function dVi(d,e){this.a=d
this.b=e},
dVj:function dVj(d){this.a=d},
dVk:function dVk(){},
dVl:function dVl(d){this.a=d},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVm:function dVm(d){this.a=d},
dVb:function dVb(d,e,f){this.a=d
this.b=e
this.c=f},
dVc:function dVc(d){this.a=d},
dVd:function dVd(d){this.a=d},
dVu:function dVu(d){this.a=d},
dVv:function dVv(d,e){this.a=d
this.b=e},
dVw:function dVw(d,e){this.a=d
this.b=e},
dVx:function dVx(d){this.a=d},
dVt:function dVt(d,e){this.a=d
this.b=e},
dVy:function dVy(d,e){this.a=d
this.b=e},
dVs:function dVs(d,e){this.a=d
this.b=e},
dVz:function dVz(d){this.a=d},
dVr:function dVr(d){this.a=d},
dVA:function dVA(d){this.a=d},
dVq:function dVq(d){this.a=d},
dVB:function dVB(d){this.a=d},
dVp:function dVp(d){this.a=d},
dVC:function dVC(d){this.a=d},
dVo:function dVo(d){this.a=d},
aPn:function aPn(){},
aPo:function aPo(){},
cab:function cab(d){var _=this
_.a=d
_.d=_.c=_.b=null},
cac:function cac(d,e){this.a=d
this.b=e},
cad:function cad(d){this.a=d},
aBQ(d,e,f,g,h){return new C.bfT(d,e,f,g,h)},
hq7(d,e,f,g,h,i){return $.ijC.c0(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.d_C(d,e,f,i,g,h))},
z5:function z5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Du:function Du(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
o7:function o7(d,e,f){this.a=d
this.b=e
this.c=f},
bfT:function bfT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fDX:function fDX(){},
fDY:function fDY(){},
fDZ:function fDZ(){},
fE5:function fE5(){},
fE6:function fE6(){},
fE7:function fE7(){},
WB:function WB(d){this.a=d},
aGC:function aGC(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.hh$=m
_.mn$=n
_.fk$=o
_.hi$=p
_.bw$=q
_.ab$=r
_.c=_.a=null},
dXk:function dXk(d){this.a=d},
dWZ:function dWZ(d,e){this.a=d
this.b=e},
dX1:function dX1(){},
dXl:function dXl(){},
dWX:function dWX(d,e){this.a=d
this.b=e},
dWY:function dWY(d,e){this.a=d
this.b=e},
dX2:function dX2(d,e,f){this.a=d
this.b=e
this.c=f},
dWS:function dWS(){},
dWT:function dWT(){},
dWU:function dWU(d){this.a=d},
dWV:function dWV(d,e){this.a=d
this.b=e},
dWW:function dWW(d,e,f){this.a=d
this.b=e
this.c=f},
dX3:function dX3(){},
dX4:function dX4(d,e){this.a=d
this.b=e},
dX5:function dX5(d){this.a=d},
dX0:function dX0(d,e){this.a=d
this.b=e},
dX_:function dX_(d){this.a=d},
dWR:function dWR(d,e,f){this.a=d
this.b=e
this.c=f},
dXe:function dXe(d){this.a=d},
dXd:function dXd(d){this.a=d},
dXf:function dXf(d){this.a=d},
dXc:function dXc(d){this.a=d},
dXa:function dXa(d){this.a=d},
dXb:function dXb(d){this.a=d},
dX9:function dX9(d){this.a=d},
dX6:function dX6(d){this.a=d},
dX8:function dX8(d){this.a=d},
dXg:function dXg(d,e){this.a=d
this.b=e},
dXh:function dXh(d,e){this.a=d
this.b=e},
dXi:function dXi(d){this.a=d},
dX7:function dX7(d){this.a=d},
dXj:function dXj(d,e){this.a=d
this.b=e},
bga:function bga(d,e){this.b=d
this.a=e},
d_C:function d_C(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aPs:function aPs(){},
bCS:function bCS(){},
ia7(){return new C.OW(null)},
S5(d,e,f,g,h){return new C.byo(d,e,f,g,h)},
bwJ(d,e,f){return A.h.D((d-e)/(f-e),0,1)},
hqF(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
iCK(){return B.iN("construction","")},
OW:function OW(d){this.a=d},
LM:function LM(d,e){this.a=d
this.b=e},
Bu:function Bu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aGT:function aGT(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
e2u:function e2u(d,e){this.a=d
this.b=e},
e2t:function e2t(d){this.a=d},
e2w:function e2w(d,e){this.a=d
this.b=e},
e2v:function e2v(d){this.a=d},
byo:function byo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fEn:function fEn(){},
fEo:function fEo(){},
fEp:function fEp(){},
fEq:function fEq(){},
fEr:function fEr(){},
fEs:function fEs(){},
fEt:function fEt(){},
fEu:function fEu(){},
fEv:function fEv(){},
bwK:function bwK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fjj:function fjj(d){this.a=d},
fji:function fji(d,e){this.a=d
this.b=e},
fjg:function fjg(d){this.a=d},
fjk:function fjk(d){this.a=d},
fjh:function fjh(d,e){this.a=d
this.b=e},
ahy:function ahy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agl:function agl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RZ:function RZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
bxM:function bxM(d,e){this.b=d
this.a=e},
bxh:function bxh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beN:function beN(d,e){this.b=d
this.a=e},
aLj:function aLj(d,e){this.c=d
this.a=e},
aLk:function aLk(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.ch=-1
_.dt$=e
_.bd$=f
_.c=_.a=null},
fj_:function fj_(d){this.a=d},
fiZ:function fiZ(d){this.a=d},
fiP:function fiP(d){this.a=d},
fiQ:function fiQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiR:function fiR(d){this.a=d},
fiO:function fiO(d,e){this.a=d
this.b=e},
fiS:function fiS(d){this.a=d},
fiY:function fiY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiX:function fiX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiV:function fiV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiU:function fiU(d,e,f){this.a=d
this.b=e
this.c=f},
fiW:function fiW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiT:function fiT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fj7:function fj7(d){this.a=d},
fj6:function fj6(d){this.a=d},
fj8:function fj8(d,e){this.a=d
this.b=e},
fj9:function fj9(d,e){this.a=d
this.b=e},
fja:function fja(d,e){this.a=d
this.b=e},
fj5:function fj5(d,e,f){this.a=d
this.b=e
this.c=f},
fjb:function fjb(d,e,f){this.a=d
this.b=e
this.c=f},
fj4:function fj4(d){this.a=d},
fj0:function fj0(d){this.a=d},
fjc:function fjc(d){this.a=d},
fjd:function fjd(d){this.a=d},
fj3:function fj3(d,e){this.a=d
this.b=e},
fje:function fje(d,e){this.a=d
this.b=e},
fj2:function fj2(d,e){this.a=d
this.b=e},
fjf:function fjf(d,e){this.a=d
this.b=e},
fj1:function fj1(d,e){this.a=d
this.b=e},
fiM:function fiM(){},
fiN:function fiN(){},
bwl:function bwl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvK:function bvK(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bft:function bft(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvM:function bvM(d,e,f){this.b=d
this.c=e
this.a=f},
bzS:function bzS(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aR9:function aR9(){},
hQw(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a6(0,new B.m(w,0)),u=e.aI(0,new B.m(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a6(0,v.aM(0,s*t*f)).a6(0,u.aM(0,s*f*f)).a6(0,e.aM(0,f*f*f))},
bmd(d,e,f,g,h,i){return $.ikb.c0(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.dwJ(d,e,f,i,g,h))},
a2I:function a2I(d,e){this.a=d
this.b=e},
qP:function qP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rB:function rB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dy:function Dy(d,e){this.a=d
this.b=e},
a0E:function a0E(d,e){this.a=d
this.b=e},
ahl:function ahl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2V:function a2V(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
DJ:function DJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ae9:function ae9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aer:function aer(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agp:function agp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bmb:function bmb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.W$=0
_.V$=t
_.c5$=_.bU$=0},
dwN:function dwN(d){this.a=d},
dwO:function dwO(d){this.a=d},
dwK:function dwK(d,e){this.a=d
this.b=e},
dwL:function dwL(d){this.a=d},
dwM:function dwM(d){this.a=d},
dwP:function dwP(d){this.a=d},
dwQ:function dwQ(d){this.a=d},
dwR:function dwR(d){this.a=d},
dwS:function dwS(d){this.a=d},
dwT:function dwT(d){this.a=d},
dwU:function dwU(d){this.a=d},
dwV:function dwV(d){this.a=d},
dwW:function dwW(d){this.a=d},
dwX:function dwX(d){this.a=d},
Hd:function Hd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y3:function Y3(d){this.a=d},
aI9:function aI9(d,e,f,g,h,i,j){var _=this
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
_.ab$=j
_.c=_.a=null},
eFU:function eFU(d){this.a=d},
eFJ:function eFJ(d){this.a=d},
eFL:function eFL(){},
eFM:function eFM(){},
eFP:function eFP(){},
eFQ:function eFQ(d,e,f){this.a=d
this.b=e
this.c=f},
eFR:function eFR(d){this.a=d},
eFS:function eFS(d){this.a=d},
eFN:function eFN(){},
eFO:function eFO(d){this.a=d},
eGj:function eGj(d){this.a=d},
eFT:function eFT(){},
eFF:function eFF(d){this.a=d},
eFW:function eFW(d){this.a=d},
eFV:function eFV(d){this.a=d},
eFY:function eFY(){},
eFX:function eFX(d,e){this.a=d
this.b=e},
eFI:function eFI(){},
eFG:function eFG(d){this.a=d},
eFH:function eFH(d){this.a=d},
eGh:function eGh(d){this.a=d},
eGg:function eGg(d){this.a=d},
eGi:function eGi(d){this.a=d},
eG7:function eG7(d,e){this.a=d
this.b=e},
eGf:function eGf(d){this.a=d},
eGd:function eGd(d){this.a=d},
eGe:function eGe(d){this.a=d},
eGc:function eGc(d){this.a=d},
eGb:function eGb(d){this.a=d},
eG8:function eG8(d){this.a=d},
eG9:function eG9(d){this.a=d},
eGa:function eGa(d){this.a=d},
eFK:function eFK(){},
eG3:function eG3(d){this.a=d},
eG4:function eG4(d){this.a=d},
eG2:function eG2(d){this.a=d},
eG5:function eG5(d){this.a=d},
eG1:function eG1(d){this.a=d},
eG6:function eG6(d){this.a=d},
eG0:function eG0(d){this.a=d},
eG_:function eG_(d){this.a=d},
eFZ:function eFZ(d,e){this.a=d
this.b=e},
bmc:function bmc(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dwJ:function dwJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aQh:function aQh(){},
hWv(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aI(0,e).gcF()*0.1
return new B.m((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hAo(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a6P(w,v,u,A.cW,B.S(x.N,x.y))},
i3H(d,e,f){var w=d.c,v=e===0?-1:1
return new B.m(w*f.a+v*C.hAp(d),d.d*f.b)},
hAp(d){return 42+(D.mN.am(0,d.b)?(d.ch-1)*38:0)},
ion(d){var w,v,u,t,s
if(d.A(0,$.hMh))return $.hZD()
w=B.a([],x.n)
for(v=d.a,u=d.b,t=12;t<v;t+=24)for(s=12;s<u;s+=24){w.push(t)
w.push(s)}$.hMh=d
return $.ioo=new Float32Array(B.cd(w))},
es:function es(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
uk:function uk(d,e,f,g){var _=this
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
acN:function acN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
adW:function adW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6P:function a6P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bTq:function bTq(){},
bTB:function bTB(d){this.a=d},
bTw:function bTw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTC:function bTC(d){this.a=d},
bTD:function bTD(d){this.a=d},
bTF:function bTF(d){this.a=d},
bTG:function bTG(d){this.a=d},
bTE:function bTE(d){this.a=d},
bTH:function bTH(d,e,f){this.a=d
this.b=e
this.c=f},
bTI:function bTI(d){this.a=d},
bTs:function bTs(d){this.a=d},
bTt:function bTt(d){this.a=d},
bTr:function bTr(d){this.a=d},
bTu:function bTu(d,e,f){this.a=d
this.b=e
this.c=f},
bTv:function bTv(d){this.a=d},
bTp:function bTp(d){this.a=d},
bTJ:function bTJ(d,e){this.a=d
this.b=e},
bTx:function bTx(d,e){this.a=d
this.b=e},
bTA:function bTA(d){this.a=d},
bTz:function bTz(d){this.a=d},
bTy:function bTy(d){this.a=d},
alz:function alz(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bNL:function bNL(){},
bNM:function bNM(){},
bNK:function bNK(){},
nj:function nj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cxR:function cxR(d){this.a=d},
iJa(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.h9h(),c9=new C.h9j(),d0=new C.h9k(),d1=new C.h9i(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aq(w,d1.$3(new B.a5(w.a,w.b,w.c,w.d),A.cm,A.bQ))
d3.ah(D.eIc,D.eF8,c9.$2(A.e0,1.4))
d3.ah(D.eEO,D.eEM,c9.$2(A.bz,2.4))
d3.ah(D.eEP,U.aP6,c9.$2(A.bz,2.4))
if(c7){d2=c8.$1(A.fC.j(0.5))
d2.y=A.I9
d3.O(D.eEu,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.h.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.m(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aq(d0.$4(-22,-26,44,50),d1.$3(D.aVp,A.aS,A.cG))
d3.O(A.cO,16,c8.$1(A.bz))
d3.O(A.cO,13,c8.$1(c7?A.aH.j(0.85):A.a_))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(0,4)
d3.jA(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.m(Math.cos(t)*11,Math.sin(t)*11),c9.$2(A.ac,3))}d2.restore()
for(d2=d5*0.8,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
d3.O(new B.m(Math.sin(v*2+d5)*9,4-u*12),1.6+u*2,c8.$1(A.c.j(0.8*(1-u))))}}d3.O(D.eI4,2.4,c8.$1(c7?A.bh:A.an))
d3.O(D.aPJ,2.4,c8.$1(A.an))
return!0
case"blender":d3.aq(d0.$5(-14,14,28,12,4),c8.$1(A.cU))
d2=$.U().r
t=x.v
s=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bz())
d3.af(s,c8.$1(A.fC.j(0.35)))
if(c7){d2=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.aZ(-14,-10))
d2.E(new B.aq(14,-10))
d2.E(new B.aq(12,14))
d2.E(new B.aq(-12,14))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.aC.j(0.7)))}d3.af(s,c9.$2(A.ac,1.6))
d2=d3.c
J.bs(d2.save())
d2.translate(0,10)
d3.jA(0,d4.y)
d3.ah(D.aaZ,D.aPt,c9.$2(A.bP,3))
d2.restore()
if(c7)for(d2=d5*9,t=d5*1.6,v=0;v<3;++v)d3.O(new B.m(Math.sin(d2+v*2)*9,-10-A.h.F(t+v*0.33,1)*12),2.4,c8.$1(A.f1))
return!0
case"drone":d3.aq(d0.$5(-10,-4,20,10,4),c8.$1(A.aM))
d3.O(A.hF,3,c8.$1(c7?A.bh:A.an))
r=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.Uo[p]
d3.ah(new B.m(o*0.4,1),new B.m(o,t),c9.$2(A.bz,3))
J.bs(d2.save())
d2.translate(o,q)
d3.ah(D.eHW,D.eET,c9.$2(A.c.j(c7?0.35:0.9),3))
if(c7)d3.c3(B.c1(A.J,6,24+Math.sin(d4.y*3)*4),c8.$1(A.c.j(0.25)))
d2.restore()}return!0
case"drill":w=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bz())
d3.af(w,d1.$3(D.fuI,A.aQ,A.de))
d3.aE(D.ftO,c8.$1(A.d1))
d2=d3.c
J.bs(d2.save())
d2.translate(18,-5)
d3.jA(0,d4.y*2)
d3.ah(A.J,D.eF_,c9.$2(A.bP,2.4))
d3.ah(A.aaU,D.eEZ,c9.$2(A.i0,1))
d2.restore()
if(c7)for(d2=d5*3,t=d5*20,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
d3.O(new B.m(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c8.$1(A.eL.j(1-u)))}return!0
case"torch":if(c7){v=A.h.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,-6))
d2.E(new B.aq(52,-26))
d2.E(new B.aq(52,18))
d2.E(new B.aq(16,4))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.bO.j(0.35*v)))}d3.aq(d0.$5(-26,-6,30,12,3),d1.$3(D.fuO,A.bl,A.cx))
n=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bz())
d3.af(n,c8.$1(A.cU))
d3.O(D.eF4,7,c8.$1(c7?A.c:A.d1))
return!0
case"neon":d3.aq(d0.$5(-30,-14,60,28,6),c8.$1(M.nj))
if(c7)m=d4.ax>0.5||A.n.F(A.h.ba(d5*17),3)!==0
else m=!1
l=m?A.c6:D.bwD
if(m){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c6.j(0.35))
t.y=A.np
d3.aq(d2,t)}d3.aq(d0.$5(-27,-11,54,22,5),c9.$2(l,2.2))
d6.$5(d3,"OPEN",D.eIi,l,17)
return!0
case"microwave":d3.aq(d0.$4(-30,-18,60,38),d1.$3(D.fuV,A.bP,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aq(d2,c8.$1(c7?A.bO.j(0.75):A.ax))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(-7,8)
d3.jA(0,d4.y*0.5)
d3.c3(B.c1(A.J,7,22),c8.$1(A.de))
d2.restore()}d3.aq(d0.$5(15,-14,12,12,2),c8.$1(M.nj))
if(c7)d6.$5(d3,"0:"+A.a.aY(A.n.v(59-A.n.F(A.h.ba(d5),60)),2,"0"),D.eF5,A.bf,6.5)
d3.O(D.eFj,4,c8.$1(A.d1))
return!0
case"doorbell":d3.aq(d0.$5(-16,-26,32,52,8),c8.$1(A.bo))
d3.O(A.KH,10,c8.$1(c7?A.bu:A.bz))
d2=d3.c
J.bs(d2.save())
d2.translate(0,-8)
d3.jA(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eJ0,A.c,16)
d2.restore()
d3.O(A.ky,6,c8.$1(A.di))
d3.O(A.ky,6,c9.$2(A.c,1.6))
if(c7)for(d2=d5*14,v=1;v<=2;++v)d3.cR(B.c0(A.KH,14+v*6+A.h.F(d2,6)),-0.9,1.8,!1,c9.$2(A.bu.j(0.9-v*0.3),1.8))
return!0
case"camera":d3.ah(D.eIh,D.eIU,c9.$2(A.bz,4))
d2=d3.c
J.bs(d2.save())
d3.jA(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aq(d0.$5(-24,-14,46,22,5),d1.$3(D.fuJ,A.bP,A.an))
d3.O(D.aPa,8,c8.$1(A.ax))
d3.O(D.aPa,4.5,c8.$1(c7?A.aH:A.cx))
d3.O(D.eIf,2.2,c8.$1(c7&&A.n.F(A.h.ba(d5*1.6),2)===0?A.aC:A.kK))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eIp,A.aC,9)
return!0
case"console":d3.aq(d0.$5(-28,-22,56,44,8),d1.$3(D.fuR,A.i2,A.fy))
d3.aq(d0.$5(-20,-17,40,22,3),c8.$1(A.e_))
if(c7){d2=d5*2.3
d3.O(new B.m(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aE(new B.a5(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aE(new B.a5(15.6,d2,18,d2+8),c8.$1(A.c6))}d3.O(D.eIa,4,c8.$1(A.bb))
d3.O(D.eF0,2.4,c8.$1(A.aC))
d3.O(D.eFh,2.4,c8.$1(A.bh))
return!0
case"heartmon":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(A.ax))
d3.aq(d0.$5(-26,-18,52,28,3),c8.$1(A.e_))
if(c7){d2=$.U()
t=B.a([],x.v)
k=new B.aJ(d2.r,A.ak,c6,c6,t)
for(d2=d5*0.5,o=-25;o<=25;++o){u=A.h.F((o+25)/50-d2,1)
if(u<0.1)j=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)j=0.6
else{q=u<0.2?-0.4:0
j=q}i=-4+j*11
if(o===-25){q=new B.aZ(o,i)
t.push(q)
h=k.f
if(h!=null)q.aj(h)
k.ac()}else{q=new B.aq(o,i)
t.push(q)
h=k.f
if(h!=null)q.aj(h)
k.ac()}}d3.af(k,c9.$2(A.bf,1.8))
d6.$5(d3,"72",D.eF1,A.hJ,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eIu,A.hJ.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.O(D.eIk,3,c8.$1(c7?A.bh:A.bz))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aq(d2,c8.$1(A.cJ.j(c7?0.5:0.3)))
d3.aq(d0.$5(-26,-20,52,40,4),c9.$2(A.ac,1.6))
d3.aE(D.fuL,c8.$1(F.wW))
if(c7){d2=d5*1.1
t=Math.sin(d2)
q=d3.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.nX(0,-1,1)
d3.c3(B.c1(A.J,8,14),c8.$1(A.cX))
d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,0))
d2.E(new B.aq(-12,-4))
d2.E(new B.aq(-12,4))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.ca))
d3.O(D.eG3,1.2,c8.$1(A.v))
q.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.h.F(d2+v*0.2,1)
d3.O(new B.m(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.n.F(v,2),c9.$2(A.ac,1))}}return!0
case"lighthouse":d2=$.U().r
t=x.v
g=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bz())
d3.af(g,d1.$3(D.fvm,A.c,A.bC))
d3.aE(D.fvi,c8.$1(c7?A.eL:A.bz))
q=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bz())
d3.af(q,c8.$1(A.eE))
if(c7){f=Math.sin(d4.y*0.3)
d2=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.aZ(0,-19))
t=f*34
d2.E(new B.aq(t,-26))
d2.E(new B.aq(t,-12))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.eL.j(0.45)))
d2=c8.$1(A.eL.j(0.35))
d2.y=A.I9
d3.O(D.eEv,14,d2)}return!0
case"discoball":d3.ah(D.eEx,V.aP1,c9.$2(A.d1,1.4))
d3.O(A.J,16,d1.$3(D.fuu,A.aS,A.an))
for(v=0;v<8;++v){d2=-12+v*3.4
d3.ah(new B.m(-16,d2),new B.m(16,d2),c9.$2(A.dH,0.7))}for(v=0;v<5;++v){f=d4.y*0.5+v*1.26
d3.ah(new B.m(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.m(Math.cos(f)*16,0),c9.$2(A.dH,0.7))}if(c7)for(d2=d5*2,t=d5*9,v=0;v<10;++v){f=d2+v*0.63
e=22+A.n.F(v,3)*6
d3.O(new B.m(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c8.$1(D.dvu[A.n.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d3.aq(d0.$5(-14,-4,28,24,5),d1.$3(D.fur,A.cG,A.an))
d3.aq(d0.$5(-12,-26,24,20,5),d1.$3(D.fuj,A.bo,A.bQ))
d3.ah(H.aP3,D.eEz,c9.$2(A.bz,1.6))
d3.O(D.eEA,2.2,c8.$1(c7?A.aC:A.bz))
d=c7&&A.h.F(d5*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a8h[p]
if(c7)d2=d?A.be:A.ey
else d2=A.cx
d3.O(new B.m(o,-17),3.2,c8.$1(d2))}d2=d3.c
J.bs(d2.save())
d2.translate(14,0)
d3.jA(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.ah(A.J,D.aaP,c9.$2(A.bQ,4))
d2.restore()
d3.ah(D.eI2,D.eIn,c9.$2(A.bQ,4))
d3.aE(D.fvh,c8.$1(c7?A.be.j(0.7):A.aM))
return!0
case"toaster":a0=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a0*14,p=0;p<2;++p){t=d0.$5(D.aFE[p]+1,d2,10,14,2)
q=B.ap(A.bO,A.de,a0)
q.toString
d3.aq(t,c8.$1(q))}d3.aq(d0.$5(-24,-6,48,26,8),d1.$3(D.fuK,A.bP,A.bl))
for(p=0;p<2;++p){o=D.aFE[p]
d2=d0.$5(o,-5,12,5,2)
d3.aq(d2,c8.$1(c7?A.fN:A.ax))
if(c7){d2=d0.$5(o,-5,12,5,2)
t=c8.$1(A.cX.j(0.5))
t.y=O.p1
d3.aq(d2,t)}}d3.ah(D.eFr,D.eFM,c9.$2(A.ax,3))
return!0
case"ledstrip":d3.aq(d0.$5(-34,-4,68,10,4),c8.$1(A.cx))
for(d2=d5*90,v=0;v<9;++v){a1=A.h.F(d2+v*40,360)
l=c7?new Aw.pI(1,a1,0.8,1).jo():A.cU
if(c7){t=c8.$1(l.j(0.45))
t.y=O.p1
d3.O(new B.m(-30+v*7.5,1),7,t)}d3.O(new B.m(-30+v*7.5,1),2.6,c8.$1(l))}d3.aq(d0.$5(-40,-2,6,6,1),c8.$1(A.d1))
return!0
case"pump":d3.aq(d0.$5(-16,-2,32,22,6),d1.$3(D.fuA,A.cJ,A.H3))
d3.O(D.eIx,8,c8.$1(A.tp))
d2=d3.c
J.bs(d2.save())
d2.translate(-2,9)
d3.jA(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.m(Math.cos(t)*7,Math.sin(t)*7),c9.$2(A.fC,2.4))}d2.restore()
d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,6))
d2.E(new B.aq(26,6))
d2.E(new B.aq(26,-20))
d2.E(new B.aq(10,-20))
d3.af(d2,c9.$2(A.bQ,4))
if(c7){for(d2=d5*0.9,v=0;v<5;++v)d3.O(new B.m(26,6-A.h.F(d2+v*0.2,1)*26),2.2,c8.$1(A.hn))
d3.O(D.eGI,3.2,c8.$1(A.hn.j(0.7)))}return!0
case"hairdryer":d2=d3.c
J.bs(d2.save())
d3.jA(0,-0.15)
d3.aq(d0.$5(-26,-14,40,22,10),d1.$3(D.fuM,A.hZ,A.v4))
d3.aq(d0.$5(14,-10,12,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-10,6,12,22,4),c8.$1(A.cU))
d2.restore()
if(c7){for(d2=d5*3,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
t=u*18
q=-10+v*5
d3.ah(new B.m(24+t,q),new B.m(32+t,q),c9.$2(A.c.j(1-u),1.8))}d2=c8.$1(A.cX.j(0.4))
d2.y=O.p1
d3.O(D.eFi,8,d2)}return!0
case"headphones":d3.cR(B.c1(A.dP,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bz,4))
for(d2=d5*12,p=0;p<2;++p){o=F.Un[p]
t=o-7
d3.aq(d0.$5(t,0,14,20,6),d1.$3(new B.a5(t,0,t+14,20),A.bk,A.nc))
if(c7)for(t=o<0,v=1;v<=2;++v){q=B.c0(new B.m(o,10),10+v*5+A.h.F(d2,5))
h=t?2.2:-0.9
d3.cR(q,h,1.6,!1,c9.$2(A.eM.j(0.9-v*0.3),1.6))}}if(c7)d6.$5(d3,"\u266a",new B.m(-4,-8-A.h.F(d5*14,8)),A.l4,12)
return!0
case"smartwatch":d3.aq(d0.$5(-8,-30,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-8,14,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-14,-17,28,32,8),d1.$3(D.fuo,A.d1,A.cU))
d3.aq(d0.$5(-11,-14,22,26,6),c8.$1(A.e_))
if(c7){a2=new B.W(Date.now(),0,!1)
d6.$5(d3,A.a.aY(A.n.v(B.cY(a2)),2,"0")+":"+A.a.aY(A.n.v(B.fy(a2)),2,"0"),D.eEG,A.bf,9.5)
j=(Math.sin(d5*9)+1)/2
d2=B.ap(A.GM,A.hJ,j)
d2.toString
d6.$5(d3,"\u2665",new B.m(-8,1),d2,8+j*2)
d6.$5(d3,""+(70+A.n.F(A.h.ba(d5*2),6)),A.dP,A.c,7)}return!0
case"tablet":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(M.nj))
d3.aq(d0.$5(-30,-22,60,44,6),c9.$2(A.bQ,1.6))
a3=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(a3),$.n_(),!0)
d2.translate(-27,-19)
K.MM(d3,D.fBP,d5,!1,c6,c6)
d2.restore()}else d3.aq(a3,c8.$1(D.x1))
return!0
case"buck":a4=d0.$5(-26,-22,52,42,5)
d3.aq(a4,d1.$3(new B.a5(a4.a,a4.b,a4.c,a4.d),A.dV,A.dl))
d3.aq(a4,c9.$2(A.aT,1.2))
d3.O(D.aPC,9,c8.$1(A.ax))
d3.O(D.aPC,6,c9.$2(A.de,2))
d3.aq(d0.$5(4,-2,14,10,2),c8.$1(A.ax))
d3.aq(d0.$5(-22,-19,44,12,2),c8.$1(A.e_))
d2=A.h.a1(d4.db,1)
t=A.h.a1(c7?d4.dx:d4.e,1)
q=c7?A.bf:A.an
d6.$5(d3,d2+"\u2192"+t+"V",D.eGT,q,8.2)
d3.O(D.eF9,2.4,c8.$1(c7?A.bh:A.aM))
d6.$5(d3,"IN",D.eIo,A.ac,6)
d6.$5(d3,"OUT",D.eGy,A.ac,6)
return!0
case"regulator":a5=c7?A.h.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ap(A.bQ,A.aC,a5)
t.toString
d3.aq(d2,c8.$1(t))
d3.O(H.aaN,3,c8.$1(A.aM))
d3.aq(d0.$5(-12,-4,24,18,3),d1.$3(D.fuk,A.cU,A.iq))
d6.$5(d3,"7805",D.aaZ,A.ac,8)
for(p=0;p<3;++p){d2=D.dCD[p]-1
d3.aE(new B.a5(d2,14,d2+2,22),c8.$1(A.dW))}if(a5>0.2)for(d2=d5*0.9,v=0;v<3;++v){u=A.h.F(d2+v*0.33,1)
d3.O(new B.m(-6+v*6,-28-u*12),2+u*2,c8.$1(A.c.j(0.5*(1-u))))}d6.$5(d3,"5V",D.eIX,A.br,9)
return!0
case"diode":d3.ah(D.aPH,D.aPn,c9.$2(A.dW,2.4))
d3.aq(d0.$5(-14,-7,28,14,6),c8.$1(A.as.j(0.85)))
d3.aE(D.fu1,c8.$1(A.br))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.eL.j(0.4))
t.y=A.ld
d3.aq(d2,t)}d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-8,-4))
d2.E(new B.aq(-8,4))
d2.E(new B.aq(-1,0))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.bb))
d6.$5(d3,"one way",D.eId,A.aE,8)
return!0
case"ldr":d3.ah(D.aPH,D.aaZ,c9.$2(A.dW,2.4))
d3.ah(D.aPt,D.aPn,c9.$2(A.dW,2.4))
d3.O(A.J,12,c8.$1(A.de))
d3.O(A.J,12,c9.$2(A.tv,1.6))
d2=$.U()
t=B.a([],x.v)
a6=new B.aJ(d2.r,A.ak,c6,c6,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
q=a6.f
if(q!=null)d2.aj(q)
a6.ac()}d3.af(a6,c9.$2(A.bO,1.4))
d2=B.ap(A.bz,A.eL,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.m(-6,-26),d2,14)
d6.$5(d3,""+A.h.S(20+980*(1-d4.f))+"\u03a9",D.eI3,A.ac,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d2){case"lgtv":t=A.eD
break
case"sonytv":t=A.tf
break
case"appletv":t=A.dW
break
default:t=F.Cw
break}a7=d2==="lgtv"||d2==="appletv"
d3.aq(d0.$5(-36,-24,72,46,6),c8.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=d0.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c7){h=d3.c
J.bs(h.save())
h.clipRRect(B.nn(a3),$.n_(),!0)
h.translate(t,q)
K.h9x(d3,new B.av(a3.c-t,a3.d-q),d4.at,d5,d4.ax,-1,c6,c6)
h.restore()
d3.O(D.eFP,1.6,c8.$1(A.bf))}else{d3.aq(a3,c8.$1(D.x1))
h=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bz())
d3.af(h,c8.$1(A.c.j(0.05)))}if(d2==="appletv"){d2=d3.c
J.bs(d2.save())
d2.translate(0,19.6)
d3.bW(0,3.7)
d2.translate(-0.5,-0.55)
d3.af(K.hSh(),c8.$1(A.cz))
d2.restore()}else{switch(d2){case"lgtv":d2=F.aV_
break
case"sonytv":d2=F.aUO
break
default:d2=F.aUQ
break}a8=B.h2(c6,A.cK,c6,c6,c6,B.cW(c6,c6,c6,c6,c6,c6,c6,c6,c6,B.l(c6,c6,d2.b,c6,c6,c6,c6,c6,c6,c6,c6,3.6,c6,c6,A.C,c6,1,!0,c6,0.25,c6,c6,c6,c6,c6,c6),d2.a),A.a8,A.cb,c6,A.e6,A.cc)
a8.eJ()
d2=a8.b
t=d2.c
d2=d2.a.c
a8.a5(d3,new B.m(-t/2,19.6-d2.gb4(d2)/2))}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mN.h(0,d2)
b0=a9.b===D.Bx
b1=b0?44:30
b2=b0?48:54
t=-b1/2
q=-b2/2
h=b0?5:6.5
w=d0.$5(t,q-2,b1,b2,h)
h=w.a
b3=w.b
b4=w.c
b5=w.d
b6=a9.c
b7=B.ap(b6,A.c,0.35)
b7.toString
d3.aq(w,d1.$3(new B.a5(h,b3,b4,b5),b7,b6))
a3=d0.$5(t+2,q,b1-4,b2-4,3.5)
if(c7){t=d3.c
J.bs(t.save())
t.clipRRect(B.nn(a3),$.n_(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
K.MM(d3,new B.av(a3.c-q,a3.d-h),d5,!1,c6,c6)
t.restore()}else d3.aq(a3,c8.$1(D.x1))
if(b0){t=a3.b
q=a3.d
d3.ah(new B.m(0,t),new B.m(0,q),c9.$2(A.v.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aq(d0.$5(-4,a3.b+1.2,8,2.6,1.3),c8.$1(A.v))
else{d2=b0?b1/2-7:0
d3.O(new B.m(d2,a3.b+3),1.3,c8.$1(A.v))}return!0
case"ereader":d3.aq(d0.$5(-17,-28,34,52,4),c8.$1(A.cU))
d3.aq(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bP))
if(c7){d6.$5(d3,"NGMY",D.eJ3,A.ax,9)
for(v=0;v<9;++v){d2=-9+v*3.6
t=A.n.F(v,4)===3?14:22
d3.aE(new B.a5(-11,d2,-11+t,d2+1.4),c8.$1(A.bl))}d3.O(A.aaL,1.6,c8.$1(A.ax))}return!0
case"laptop":d3.aq(d0.$5(-30,-28,60,42,4),d1.$3(D.fuW,A.cG,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(b8),$.n_(),!0)
t=b8.a
q=b8.b
d2.translate(t,q)
K.MM(d3,new B.av(b8.c-t,b8.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b8,c8.$1(D.x1))
d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-38,16))
d2.E(new B.aq(38,16))
d2.E(new B.aq(34,21))
d2.E(new B.aq(-34,21))
d2.E(new B.bz())
d3.af(d2,c8.$1(D.al3))
d3.aq(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aq(d0.$5(-32,-28,64,46,5),d1.$3(D.fv_,A.cm,A.cG))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(b9),$.n_(),!0)
t=b9.a
q=b9.b
d2.translate(t,q)
K.MM(d3,new B.av(b9.c-t,b9.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b9,c8.$1(D.x1))
d3.O(D.eEi,2,c8.$1(A.bQ))
d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,18))
d2.E(new B.aq(6,18))
d2.E(new B.aq(10,26))
d2.E(new B.aq(-10,26))
d2.E(new B.bz())
d3.af(d2,c8.$1(D.al3))
return!0
case"monitor":d3.aq(d0.$5(-34,-28,68,40,3),c8.$1(A.eD))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(c0),$.n_(),!0)
t=c0.a
q=c0.b
d2.translate(t,q)
K.MM(d3,new B.av(c0.c-t,c0.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(c0,c8.$1(D.x1))
d3.aE(D.fv6,c8.$1(A.bl))
d3.aq(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.d1))
return!0
case"projector":if(c7){d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(14,4))
d2.E(new B.aq(-32,-42))
d2.E(new B.aq(34,-42))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.eL.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(c1),$.n_(),!0)
t=c1.a
q=c1.b
d2.translate(t,q)
K.MM(d3,new B.av(c1.c-t,c1.d-q),d5,!1,c6,c6)
d2.restore()}d3.aq(d0.$5(-26,-4,52,24,6),d1.$3(D.fuN,A.hX,A.d1))
d3.O(D.aP8,7,c8.$1(A.ax))
d3.O(D.aP8,4,c8.$1(c7?A.eL:A.cx))
for(v=0;v<4;++v){d2=-20+v*4
d3.ah(new B.m(d2,2),new B.m(d2,14),c9.$2(A.dH,1))}return!0
case"carscreen":d3.aq(d0.$5(-34,-10,68,32,12),c8.$1(A.ax))
c2=d0.$5(-30,-20,60,28,8)
d3.aq(c2,c8.$1(M.nj))
d3.aq(c2,c9.$2(A.bz,1.2))
if(c7){c3=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
c3.E(new B.aZ(-26,4))
c3.E(new B.cn(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.aq(22,-16))
d3.af(c3,c9.$2(A.aH,2.2))
d2=A.h.F(d5*6,48)
d3.O(new B.m(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.n.F(A.h.ba(d5*2),5)),H.aPs,A.c,10)
d6.$5(d3,"km/h",D.eGG,A.aE,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aq(c4,d1.$3(new B.a5(c4.a,c4.b,c4.c,c4.d),A.d1,A.cU))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(c5),$.n_(),!0)
t=c5.a
q=c5.b
d2.translate(t,q)
K.MM(d3,new B.av(c5.c-t,c5.d-q),d5,!1,c6,c6)
d2.restore()
d2=c8.$1(A.bk.j(0.2))
d2.y=A.np
d3.O(A.J,26,d2)}else d3.aq(c5,c8.$1(A.a_))
d3.ah(D.eIE,D.eIJ,c9.$2(A.bl,4))
d3.ah(D.eFR,D.eG6,c9.$2(A.bl,4))
return!0}return!1},
h9h:function h9h(){},
h9j:function h9j(){},
h9k:function h9k(){},
h9i:function h9i(){},
hze(d,e,f,g){return new C.alx(d,g,f,e)},
GY(d,e,f){return new C.bfU(d,e,f)},
alx:function alx(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aly:function aly(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.hh$=i
_.mn$=j
_.fk$=k
_.hi$=l
_.bw$=m
_.ab$=n
_.c=_.a=null},
bNn:function bNn(d,e){this.a=d
this.b=e},
bNo:function bNo(d){this.a=d},
bNm:function bNm(d){this.a=d},
bNp:function bNp(){},
bNq:function bNq(d){this.a=d},
bNr:function bNr(d,e,f){this.a=d
this.b=e
this.c=f},
bNl:function bNl(d,e){this.a=d
this.b=e},
bNi:function bNi(d,e){this.a=d
this.b=e},
bNj:function bNj(d,e,f){this.a=d
this.b=e
this.c=f},
bNc:function bNc(d,e){this.a=d
this.b=e},
bNd:function bNd(){},
bNk:function bNk(d,e,f){this.a=d
this.b=e
this.c=f},
bNh:function bNh(d,e){this.a=d
this.b=e},
bNe:function bNe(d,e){this.a=d
this.b=e},
bNf:function bNf(d,e){this.a=d
this.b=e},
bNg:function bNg(d){this.a=d},
bNH:function bNH(d){this.a=d},
bNI:function bNI(){},
bMN:function bMN(){},
bNJ:function bNJ(d,e){this.a=d
this.b=e},
bNG:function bNG(d,e){this.a=d
this.b=e},
bNB:function bNB(d){this.a=d},
bNy:function bNy(d,e,f){this.a=d
this.b=e
this.c=f},
bNz:function bNz(d,e){this.a=d
this.b=e},
bNC:function bNC(d){this.a=d},
bNw:function bNw(d,e){this.a=d
this.b=e},
bNx:function bNx(d,e){this.a=d
this.b=e},
bNA:function bNA(d){this.a=d},
bND:function bND(d){this.a=d},
bNt:function bNt(d,e){this.a=d
this.b=e},
bNu:function bNu(d,e){this.a=d
this.b=e},
bNv:function bNv(d,e){this.a=d
this.b=e},
bNE:function bNE(d){this.a=d},
bNs:function bNs(d){this.a=d},
bNF:function bNF(d){this.a=d},
bMO:function bMO(d,e){this.a=d
this.b=e},
bN9:function bN9(d,e){this.a=d
this.b=e},
bNb:function bNb(d,e){this.a=d
this.b=e},
bNa:function bNa(d,e){this.a=d
this.b=e},
bN8:function bN8(){},
bMV:function bMV(d){this.a=d},
bMU:function bMU(d){this.a=d},
bMW:function bMW(d,e){this.a=d
this.b=e},
bMX:function bMX(d){this.a=d},
bMT:function bMT(d){this.a=d},
bN0:function bN0(d,e,f){this.a=d
this.b=e
this.c=f},
bMS:function bMS(d,e){this.a=d
this.b=e},
bN1:function bN1(d,e){this.a=d
this.b=e},
bN2:function bN2(d,e){this.a=d
this.b=e},
bN3:function bN3(d,e){this.a=d
this.b=e},
bN4:function bN4(d,e,f){this.a=d
this.b=e
this.c=f},
bMR:function bMR(d,e){this.a=d
this.b=e},
bN5:function bN5(d,e,f){this.a=d
this.b=e
this.c=f},
bMQ:function bMQ(d,e){this.a=d
this.b=e},
bN6:function bN6(d,e,f){this.a=d
this.b=e
this.c=f},
bMP:function bMP(d,e){this.a=d
this.b=e},
bN7:function bN7(d){this.a=d},
bMY:function bMY(d){this.a=d},
bMZ:function bMZ(d){this.a=d},
bN_:function bN_(d){this.a=d},
bfU:function bfU(d,e,f){this.a=d
this.b=e
this.c=f},
fE8:function fE8(){},
fE9:function fE9(){},
fEa:function fEa(){},
fDW:function fDW(){},
fEb:function fEb(){},
fDV:function fDV(){},
fEc:function fEc(){},
fE_:function fE_(){},
fDU:function fDU(){},
fE0:function fE0(){},
fDT:function fDT(){},
fE1:function fE1(){},
fDS:function fDS(){},
fE2:function fE2(){},
fDQ:function fDQ(){},
fDR:function fDR(){},
fE3:function fE3(){},
fDO:function fDO(){},
fDP:function fDP(){},
fE4:function fE4(){},
fDN:function fDN(){},
Xc:function Xc(d){this.a=d},
aH6:function aH6(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e7G:function e7G(d,e){this.a=d
this.b=e},
e7P:function e7P(d){this.a=d},
e7Q:function e7Q(){},
e7R:function e7R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7S:function e7S(){},
e7F:function e7F(d){this.a=d},
e7E:function e7E(d,e,f){this.a=d
this.b=e
this.c=f},
e7D:function e7D(d,e){this.a=d
this.b=e},
e7B:function e7B(d){this.a=d},
e7C:function e7C(){},
e7O:function e7O(d){this.a=d},
e7N:function e7N(d){this.a=d},
e7L:function e7L(d,e){this.a=d
this.b=e},
e7J:function e7J(d){this.a=d},
e7K:function e7K(){},
e7M:function e7M(d,e,f){this.a=d
this.b=e
this.c=f},
e7H:function e7H(d,e){this.a=d
this.b=e},
e7I:function e7I(){},
e7U:function e7U(d){this.a=d},
e7V:function e7V(d,e){this.a=d
this.b=e},
e7T:function e7T(){},
e7W:function e7W(d,e){this.a=d
this.b=e},
e7X:function e7X(d){this.a=d},
e7Y:function e7Y(d){this.a=d},
aAX:function aAX(d,e){this.c=d
this.a=e},
bdY:function bdY(d,e){var _=this
_.d=$
_.bw$=d
_.ab$=e
_.c=_.a=null},
cPG:function cPG(d){this.a=d},
bdX:function bdX(d,e){this.b=d
this.a=e},
cPF:function cPF(d){this.a=d},
aBh:function aBh(){},
aBi:function aBi(){},
aNP:function aNP(){},
bCV:function bCV(){},
iJb(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.c0(A.wd,23)
$.U()
b8=B.L()
b8.r=A.ax.gp(0)
b9.O(A.wd,25,b8)
b8=B.L()
b8.san(D.eRV.az(0,v))
b9.O(A.wd,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.r=A.br.gp(0)
p.c=A.n.F(u,5)===0?1.8:1
b9.ah(new B.m(b8*17,s*17-2),new B.m(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.h.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.L()
r.r=A.bC.gp(0)
r.c=2
r.d=A.bH
b9.ah(A.wd,new B.m(b8*18,s*18-2),r)
r=B.L()
r.r=A.br.gp(0)
b9.O(A.wd,3,r)
c2.$5(b9,w?"V":"A",D.eIM,A.br,12)
c2.$5(b9,w?A.h.a1(o,1)+" V":""+A.h.S(o*1000)+" mA",D.eI7,A.ax,9.5)
return!0
case"fan":b8=B.bx(D.fug,A.ht)
$.U()
s=B.L()
s.r=A.bz.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aE(D.fv7,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.we,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.c1(A.aP0,18,10)
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=A.hn.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c3(s,r)
b8.restore()}b8=B.L()
b8.r=A.bt.gp(0)
b9.O(H.we,4,b8)
b8=B.L()
b8.b=A.ae
b8.c=2
b8.r=A.cG.gp(0)
b9.O(H.we,22,b8)
b8=B.L()
b8.b=A.ae
b8.c=0.8
b8.r=A.jX.gp(0)
b9.O(H.we,14,b8)
return!0
case"speaker":n=B.bx(D.aVp,A.qx)
$.U()
b8=B.L()
b8.san(D.awd.az(0,new B.a5(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eSh.az(0,B.c0(A.cy,15)))
b9.O(A.cy,14+m,b8)
b8=B.L()
b8.r=A.d1.gp(0)
b9.O(A.cy,5,b8)
b8=B.L()
b8.r=A.bl.gp(0)
b9.O(H.aaM,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.c0(D.eFq,6+u*6+A.h.F(b8,6))
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.b=A.ae
r.c=1.8
r.r=A.c6.j(0.9-u*0.2).gp(0)
b9.cR(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bx(D.fuZ,A.qx)
$.U()
b8=B.L()
b8.san(D.cev.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.aVr,A.jL)
s=B.L()
s.r=A.iq.gp(0)
b9.aq(b8,s)
if(b7){k=new B.W(Date.now(),0,!1)
j=B.Gi(k)<500?":":" "
i=A.a.aY(A.n.v(B.cY(k)),2,"0")
h=A.a.aY(A.n.v(B.fy(k)),2,"0")
b8=B.L()
b8.r=A.bf.j(0.12).gp(0)
b9.aE(D.aVr,b8)
c2.$5(b9,i+j+h,D.eIs,A.bf,21)}b8=B.L()
b8.r=A.cG.gp(0)
b9.O(D.eIq,2.4,b8)
b8=B.L()
b8.r=A.cG.gp(0)
b9.O(D.eFv,2.4,b8)
return!0
case"calculator":l=B.bx(D.fuF,A.iE)
$.U()
b8=B.L()
b8.san(D.awg.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.fuy,A.hG)
s=B.L()
s.r=(b7?A.a0r:D.bxf).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eI6,A.a_4,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bx(new B.a5(r,b8,r+6,s),A.FA)
$.U()
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
q.r=(f===3?A.ca:A.bP).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bx(D.fut,A.iE)
$.U()
b8=B.L()
b8.r=M.nj.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.9
b8.r=D.an3.gp(0)
b9.aq(l,b8)
e=B.bx(D.fui,A.ht)
if(b7){b8=B.L()
b8.san(D.cfT.az(0,new B.a5(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.nn(e),$.n_(),!0)
b8.translate(-12,-25)
K.MM(b9,D.fBr,c1,!1,b6,b6)
b8.restore()
d=A.h.F(c1*0.12,1)
b8=B.bx(D.fuf,A.hG)
s=B.L()
s.r=A.bb.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.bf.gp(0)
b9.aE(new B.a5(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.h.S(d*100)+"%",D.eHe,A.c,6)}else{b8=B.L()
b8.r=D.x1.gp(0)
b9.aq(e,b8)}b8=B.bx(D.fvn,D.eSq)
s=B.L()
s.r=A.v.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bx(D.fuY,A.pp)
$.U()
b8=B.L()
b8.san(D.ceN.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.Un[a0]
b8=a1<0?-4:4
s=new B.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.cx.gp(0)
s.c=4
s.d=A.bH
b9.ah(new B.m(a1,-4),new B.m(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.n.F(A.h.ba(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b8.r=(a2?A.bh:A.aM).gp(0)
b9.O(new B.m(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.c0(H.we,8+u*6+A.h.F(b8,6))
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.b=A.ae
r.c=1.8
r.r=A.fL.j(0.9-u*0.2).gp(0)
b9.cR(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.fuE,A.ht)
s=$.U()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aC.j(0.5*a3).gp(0)
b8.y=A.DB
b9.O(A.wd,34,b8)}a4=new B.aJ(s.r,A.ak,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.cn(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bz())
b8=B.L()
b8.r=B.ap(A.eE,D.bnz,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.bX.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bs(b8.save())
b8.translate(0,-2)
b9.jA(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.aaM,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bs(b8.save())
b8.translate(0,a5)
s=$.U().r
r=x.v
l=new B.aJ(s,A.ak,b6,b6,B.a([],r))
l.E(new B.aZ(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bz())
q=B.L()
q.san(D.ccM.az(0,D.fuQ))
b9.af(l,q)
q=new B.aJ(s,A.ak,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bz())
p=B.L()
p.r=A.fC.gp(0)
b9.af(q,p)
r=new B.aJ(s,A.ak,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bz())
s=B.L()
s.r=A.fC.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aFF[a0]
s=new B.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.ax.gp(0)
b9.O(new B.m(a1,10),7.5,s)
J.bs(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.J,new B.m(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.h.F(b8+u*8,14)
r=-4+u*5
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
q.r=A.aE.gp(0)
q.c=1.6
b9.ah(new B.m(-34-s,r),new B.m(-42-s,r),q)}return!0
case"kettle":b8=$.U().r
s=x.v
l=new B.aJ(b8,A.ak,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.cn(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bz())
r=B.L()
r.san(D.cdU.az(0,D.fuD))
b9.af(l,r)
r=new B.aJ(b8,A.ak,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bz())
q=B.L()
q.r=A.dW.gp(0)
b9.af(r,q)
s=new B.aJ(b8,A.ak,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.cn(-34,-6,-18,12))
b8=B.L()
b8.b=A.ae
b8.c=5
b8.r=A.ax.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cX,A.vc,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cU
b8.r=s.gp(0)
b9.aE(D.fuC,b8)
if(b7){b8=B.L()
b8.r=A.cX.j(0.3).gp(0)
b8.y=A.np
b9.O(A.aaJ,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.h.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.m(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.ax.gp(0)
b9.O(D.eEt,3,b8)
return!0
case"lamp":if(b7){u=A.h.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aJ($.U().r,A.ak,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bz())
s=B.L()
s.r=A.eL.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.eL.j(0.5*u).gp(0)
s.y=A_.PW
b9.O(D.eIy,24,s)}b8=B.bx(D.fvg,A.ht)
s=$.U()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.d1.gp(0)
r.c=3
r.d=A.bH
b9.ah(D.eEJ,D.aPb,r)
r=B.L()
r.r=A.d1.gp(0)
r.c=3
r.d=A.bH
b9.ah(D.aPb,D.eIz,r)
a7=new B.aJ(s.r,A.ak,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bz())
s=B.L()
s.r=(b7?A.aQ:A.kg).gp(0)
b9.af(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bl).gp(0)
b9.O(D.eIC,4,b8)
return!0
case"lights":b8=$.U().r
s=x.v
a8=new B.aJ(b8,A.ak,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.cn(0,22,34,-6))
r=B.L()
r.b=A.ae
r.c=2
r.r=A.hY.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.h.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b1.r=D.a7a[u].j(0.6).gp(0)
b1.y=A.I9
b9.O(new B.m(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aJ(b8,A.ak,b6,b6,b1)
b1.push(new B.aZ(q-3,p))
b2.ac()
b3=new B.aq(q+3,p)
b1.push(b3)
b4=b2.f
if(b4!=null)b3.aj(b4)
b2.ac()
b3=p+11
b4=new B.aq(q+5,b3)
b1.push(b4)
b5=b2.f
if(b5!=null)b4.aj(b5)
b2.ac()
q=new B.cn(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.bz()
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
if(b0)p=D.a7a[u]
else{p=B.ap(D.a7a[u],A.v,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iJa(b9,c0,c1,c2)},
h9:function h9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hua(d){var w=D.mN.h(0,d)
return(w==null?null:w.b)===D.Bv},
iKs(d,e,f){return B.a7(d,!1).ca(B.vK(null,!1,!0,!0,new C.het(e,f),A.f2,null,A.pY,new C.heu(),x.H))},
KK:function KK(d,e){this.a=d
this.b=e},
mv:function mv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
het:function het(d,e){this.a=d
this.b=e},
heu:function heu(){},
WW:function WW(d,e,f){this.c=d
this.d=e
this.a=f},
aGX:function aGX(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bw$=e
_.ab$=f
_.c=_.a=null},
e3C:function e3C(d,e){this.a=d
this.b=e},
e3D:function e3D(d,e,f){this.a=d
this.b=e
this.c=f},
e3N:function e3N(d,e,f){this.a=d
this.b=e
this.c=f},
e3B:function e3B(d,e){this.a=d
this.b=e},
e3A:function e3A(d,e){this.a=d
this.b=e},
e3O:function e3O(d,e){this.a=d
this.b=e},
e3P:function e3P(d){this.a=d},
e3u:function e3u(d,e){this.a=d
this.b=e},
e3t:function e3t(d,e){this.a=d
this.b=e},
e3s:function e3s(d){this.a=d},
e3L:function e3L(){},
e3H:function e3H(d){this.a=d},
e3I:function e3I(d){this.a=d},
e3J:function e3J(d){this.a=d},
e3K:function e3K(d){this.a=d},
e3Q:function e3Q(d){this.a=d},
e3G:function e3G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3E:function e3E(){},
e3F:function e3F(d){this.a=d},
e3M:function e3M(d,e){this.a=d
this.b=e},
e3z:function e3z(d,e){this.a=d
this.b=e},
e3x:function e3x(d){this.a=d},
e3y:function e3y(d){this.a=d},
e3r:function e3r(d){this.a=d},
e3w:function e3w(d,e,f){this.a=d
this.b=e
this.c=f},
e3v:function e3v(d){this.a=d},
bAW:function bAW(d,e,f){this.b=d
this.c=e
this.a=f},
ahe:function ahe(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aPD:function aPD(){},
a3e(d,e,f,g,h,i){return new C.bzI(d,e,f,g,h,i)},
bzI:function bzI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fED:function fED(){},
fEE:function fEE(){},
fEF:function fEF(){},
fEG:function fEG(){},
fEH:function fEH(){},
fEI:function fEI(){},
fEJ:function fEJ(){},
fEK:function fEK(){},
aaM:function aaM(d){this.a=d},
cqK:function cqK(d){this.a=d},
cqL:function cqL(){},
cqJ:function cqJ(d,e){this.a=d
this.b=e},
cqI:function cqI(d){this.a=d},
YC:function YC(d){this.a=d},
aIG:function aIG(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.hh$=f
_.mn$=g
_.fk$=h
_.hi$=i
_.bw$=j
_.ab$=k
_.c=_.a=null},
f4t:function f4t(d){this.a=d},
f4p:function f4p(d){this.a=d},
f4o:function f4o(d,e){this.a=d
this.b=e},
f4r:function f4r(d,e){this.a=d
this.b=e},
f4q:function f4q(d,e){this.a=d
this.b=e},
f4s:function f4s(d){this.a=d},
bB8:function bB8(d,e,f){this.b=d
this.c=e
this.a=f},
Xk:function Xk(d){this.a=d},
boX:function boX(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.hh$=d
_.mn$=e
_.fk$=f
_.hi$=g
_.bw$=h
_.ab$=i
_.c=_.a=null},
ebo:function ebo(){},
ebp:function ebp(){},
ebj:function ebj(d,e){this.a=d
this.b=e},
ebl:function ebl(d,e){this.a=d
this.b=e},
ebm:function ebm(d){this.a=d},
ebk:function ebk(d){this.a=d},
ebn:function ebn(d){this.a=d},
bvL:function bvL(d,e,f){this.b=d
this.c=e
this.a=f},
Wv:function Wv(d){this.a=d},
bov:function bov(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.hh$=d
_.mn$=e
_.fk$=f
_.hi$=g
_.bw$=h
_.ab$=i
_.c=_.a=null},
dVL:function dVL(){},
dVM:function dVM(){},
dVG:function dVG(){},
dVJ:function dVJ(d,e){this.a=d
this.b=e},
dVI:function dVI(d,e){this.a=d
this.b=e},
dVK:function dVK(d){this.a=d},
dVH:function dVH(d){this.a=d},
aMd:function aMd(d,e,f){this.a=d
this.b=e
this.c=f},
Xb:function Xb(d){this.a=d},
boO:function boO(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e7a:function e7a(d,e){this.a=d
this.b=e},
e7b:function e7b(d){this.a=d},
e79:function e79(d,e){this.a=d
this.b=e},
e7c:function e7c(d){this.a=d},
e78:function e78(d,e){this.a=d
this.b=e},
e7d:function e7d(d){this.a=d},
e77:function e77(d,e){this.a=d
this.b=e},
e7e:function e7e(d,e){this.a=d
this.b=e},
e76:function e76(d,e){this.a=d
this.b=e},
e7f:function e7f(d){this.a=d},
e75:function e75(d,e){this.a=d
this.b=e},
e7g:function e7g(d){this.a=d},
e74:function e74(d){this.a=d},
e7h:function e7h(d){this.a=d},
e73:function e73(d){this.a=d},
e7i:function e7i(d){this.a=d},
e7j:function e7j(d){this.a=d},
e72:function e72(d){this.a=d},
bqS:function bqS(d,e,f){this.b=d
this.c=e
this.a=f},
XY:function XY(d){this.a=d},
aHW:function aHW(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ezk:function ezk(d,e){this.a=d
this.b=e},
ezl:function ezl(d,e,f){this.a=d
this.b=e
this.c=f},
ezj:function ezj(d,e,f){this.a=d
this.b=e
this.c=f},
ezm:function ezm(d){this.a=d},
ezi:function ezi(d){this.a=d},
ezq:function ezq(d){this.a=d},
ezp:function ezp(d,e){this.a=d
this.b=e},
ezo:function ezo(d,e){this.a=d
this.b=e},
ezr:function ezr(d,e){this.a=d
this.b=e},
ezn:function ezn(d,e){this.a=d
this.b=e},
ezs:function ezs(d){this.a=d},
Y9:function Y9(d){this.a=d},
aIj:function aIj(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eMs:function eMs(d){this.a=d},
eMt:function eMt(d){this.a=d},
eMq:function eMq(d,e){this.a=d
this.b=e},
eMr:function eMr(d){this.a=d},
eMp:function eMp(d){this.a=d},
eMu:function eMu(d){this.a=d},
eMv:function eMv(d){this.a=d},
eMw:function eMw(d){this.a=d},
eMx:function eMx(d,e){this.a=d
this.b=e},
Yt:function Yt(d){this.a=d},
bq5:function bq5(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
f_P:function f_P(){},
f_Y:function f_Y(){},
f_U:function f_U(d){this.a=d},
f_T:function f_T(){},
f_V:function f_V(d,e){this.a=d
this.b=e},
f_S:function f_S(d,e){this.a=d
this.b=e},
f_W:function f_W(d){this.a=d},
f_R:function f_R(d,e){this.a=d
this.b=e},
f_X:function f_X(d){this.a=d},
f_Q:function f_Q(d){this.a=d},
XX:function XX(d){this.a=d},
bpz:function bpz(d,e,f,g,h,i,j,k){var _=this
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
_.hh$=f
_.mn$=g
_.fk$=h
_.hi$=i
_.bw$=j
_.ab$=k
_.c=_.a=null},
ey_:function ey_(){},
ey0:function ey0(){},
exT:function exT(d){this.a=d},
exS:function exS(d){this.a=d},
exU:function exU(d){this.a=d},
exR:function exR(d){this.a=d},
exV:function exV(d){this.a=d},
exQ:function exQ(d){this.a=d},
exW:function exW(d,e){this.a=d
this.b=e},
exP:function exP(d,e){this.a=d
this.b=e},
exX:function exX(d){this.a=d},
exO:function exO(d,e){this.a=d
this.b=e},
exY:function exY(d){this.a=d},
exN:function exN(d,e){this.a=d
this.b=e},
exZ:function exZ(d){this.a=d},
exM:function exM(d,e){this.a=d
this.b=e},
bij:function bij(d,e,f){this.c=d
this.d=e
this.a=f},
aPp:function aPp(){},
bCR:function bCR(){},
aPK:function aPK(){},
bCX:function bCX(){},
aQa:function aQa(){},
bD6:function bD6(){},
aQD:function aQD(){},
bDf:function bDf(){},
Kg(d,e,f,g){var w,v,u,t,s,r,q,p=$.avl
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mR(d,e[w],f,g)
return}for(p=B.cJ(e,0,B.dy(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bQ(p,p.gI(0),v.k("bQ<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.B();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mR(d,s,f,g)
else B.bM(new B.bh(1000*q),new C.cqG(d,s,f,g),u)}},
co1(d){return C.idf(d)},
idf(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$co1=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aB(),$async$co1)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.S(x.N,x.z)
w=1
break}p=A.T.aN(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a0(p,o,n):B.S(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=B.S(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$co1,v)},
b5N(d,e){return C.idg(d,e)},
idg(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b5N=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$b5N)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.T.au(e,null)),$async$b5N)
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
return B.i($async$b5N,v)},
cqG:function cqG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
izp(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.S(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oS(A.h.a1(p.c,4)),"y",B.oS(A.h.a1(p.d,4)),"v",p.e,"l",B.oS(A.h.a1(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oS(A.h.a1(p.as,3)),"ch",p.at,"vc",B.oS(A.h.a1(p.z,3)),"s",B.oS(A.h.a1(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a3(f).k("cl.E"))
A.d.fi(l)
return A.T.au(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iJA(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.T.aN(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a7(h)
A.d.a7(a6.b)
v=B.a([],x.fs)
g=x.R
f=g.a(J.t(w,"parts"))
f=J.aN(f==null?A.bM:f)
while(f.B()){u=f.gP(f)
t=i.a(u)
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.r0().am(0,s)){J.bX(v,null)
continue}d=s
a0=B.aK(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.uk(a2,d,a0,a1)
a3.auh(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aK(J.t(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aK(J.t(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aK(J.t(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.kn(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.kn(J.t(t,"b"))
r.x=d===!0
d=B.aV(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aK(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aK(J.t(t,"ch"))
r.at=A.h.M(d==null?0:d)
d=B.aK(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aK(J.t(t,"s"))
r.ch=A.h.D(d==null?1:d,1,5.2)
J.bX(v,r)}i=g.a(J.t(w,"wires"))
i=J.aN(i==null?A.bM:i)
h=x.j
while(i.B()){q=i.gP(i)
p=h.a(q)
f=B.aK(J.t(p,0))
o=f==null?a5:A.h.M(f)
f=B.aK(J.t(p,2))
n=f==null?a5:A.h.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ab(v)||n>=J.ab(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.aob(m,A.h.M(B.dw(J.t(p,1))),l,A.h.M(B.dw(J.t(p,3))))}i=B.aK(J.t(w,"challenge"))
i=A.h.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aN(h==null?A.bM:h)
while(h.B()){j=h.gP(h)
J.bX(k,A.h.M(B.dw(j)))}return new B.btQ(i,k)}catch(a4){return a5}},
fWx(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fWx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aB(),$async$fWx)
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
return B.i($async$fWx,v)},
bJT(d){return C.iLi(d)},
iLi(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bJT=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aB(),$async$bJT)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bJT)
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
return B.i($async$bJT,v)},
h2y(d,e,f){var w=0,v=B.j(x.I),u,t,s,r,q,p
var $async$h2y=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(d.c===e&&d.d===f){u=d
w=1
break}$.U()
t=new B.p2(new B.oD())
s=B.va(t,null)
r=B.L()
r.r=A.c8.gp(0)
s.aE(new B.a5(0,0,e,f),r)
s.bjP(0,d,A.J,B.L())
q=t.nc()
w=3
return B.b(q.w1(e,f),$async$h2y)
case 3:p=h
q.t()
d.t()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2y,v)}},D,V,A3,As,K,F,M,H,At,Au,Av,A4,Aw
J=c[1]
B=c[0]
A=c[2]
W=c[143]
A9=c[180]
A5=c[126]
N=c[90]
Aa=c[153]
A6=c[179]
Ab=c[185]
A7=c[184]
X=c[175]
P=c[46]
Y=c[171]
Ac=c[167]
O=c[178]
Ad=c[182]
Ae=c[188]
Af=c[193]
Ag=c[139]
Ah=c[169]
Ai=c[106]
Z=c[107]
Aj=c[186]
Ak=c[92]
Al=c[190]
Am=c[81]
A_=c[173]
U=c[89]
An=c[93]
Q=c[162]
Ao=c[147]
A0=c[158]
R=c[192]
S=c[163]
A1=c[177]
T=c[176]
A2=c[189]
Ap=c[137]
E=c[34]
I=c[3]
G=c[45]
L=c[141]
Aq=c[135]
Ar=c[155]
A8=c[191]
C=a.updateHolder(c[23],C)
D=c[172]
V=c[187]
A3=c[181]
As=c[31]
K=c[33]
F=c[133]
M=c[131]
H=c[174]
At=c[104]
Au=c[121]
Av=c[71]
A4=c[183]
Aw=c[62]
C.amO.prototype={}
C.XH.prototype={
R(){return new C.bpn(B.S(x.N,x.i),new B.au(A.ay,$.ay()),B.a([],x.X),B.a([],x.eZ),B.m2(0,null,null))}}
C.bpn.prototype={
gYn(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
this.ch.t()
this.a3()},
R4(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$R4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aS.bl$.d.c
if(s!=null)s.j8()
p.bN(0,A.ck)
t.l(new C.er1(t))
t.a.toString
p=t.gYn()
w=3
return B.b(C.bFa(C.imr(q,C.iza(p),o,t.ay)),$async$R4)
case 3:s=e
r=s==null?null:J.j_(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.iAH(q,p,o)
if(t.c==null){w=1
break}t.l(new C.er2(t,o,r))
$.aS.U$.push(new C.er3(t))
case 1:return B.h(u,v)}})
return B.i($async$R4,v)},
a_t(d){return this.c74(d)},
b0g(){return this.a_t(null)},
c74(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_t=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aS.bl$.d.c
if(s!=null)s.j8()
t.f.sb1(0,o)
t.l(new C.ere(t))
G.dI(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bFa(C.iu6(o)),$async$a_t)
case 3:r=n.a=m.iJf(f)
p.b=""
if(r!=null&&!C.izb(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iAI(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.amO(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.l(new C.erf(p,t))
t.ccZ(p.a)
case 1:return B.h(u,v)}})
return B.i($async$a_t,v)},
ccZ(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
A.d.a7(w)
w=++m.as
v=m.gYn()
A.d.a7(v.a)
A.d.a7(v.b)
m.e.a7(0)
m.l(new C.era(m))
t=d.d
s=B.S(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.er8(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.erb(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.erc(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.erd(m,d))},
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bk.j(0.1),g=B.n(16),f=B.K(A.bk.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fD_,A.bd,B.E(B.c(m.Q,l,l,l,l,l,l,A.ye,l,l,l),1)],x.p),A.l,l,A.e,A.i,0,l,l)
else if(k==null)j=D.h3C
else{w=B.E(B.c(k.a,l,l,l,l,l,l,A.M3,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.c(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fOb,l,l,l)],v),A.l,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.C(A.rm,B.c(u,l,l,l,l,l,l,D.fR6,l,l,l),l))
w.push(A.cR)
w.push(B.c(k.b,l,l,l,l,l,l,A0.FX,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.n(10)
w.push(B.q(l,B.c(u,l,l,l,l,l,l,D.fTO,l,l,l),A.f,l,l,new B.p(t,l,l,s,l,l,A.m),l,l,l,A.hA,A.ct,l,l,l))}w.push(A.aj)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.c(t,l,l,l,l,l,l,A.mh,l,l,l)
q=u[r]
s=s?A.c:A.aE
w.push(new B.C(A.HP,new B.c_(A.aJ,A.e,A.i,A.B,l,A.p,l,0,B.a([t,A.b7,new B.bu(1,A.b9,B.c(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bk.j(0.3)
s=new B.aQ(12,12)
s=B.q(l,B.c(o.a,l,l,l,l,l,l,A.Xh,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bc(s,s,s,s),l,l,A.m),l,l,l,l,A.h0,l,l,l)
t=A.c.j(0.07)
q=new B.aQ(12,12)
A.d.u(w,B.a([A.N,new B.bH(A.a9,l,l,s,l),A.at,B.q(l,B.c(o.b,l,l,l,l,l,l,D.fZH,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bc(q,q,q,q),l,l,A.m),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.eK5)
j=B.cb(B.w(w,A.B,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.w(B.a([B.akY(B.q(l,j,A.f,l,new B.aX(0,1/0,0,i),new B.p(h,l,f,g,l,l,A.m),l,l,l,D.bHe,A.es,l,l,1/0),A.b1,A.ig),B.E(C.hze(m.gYn(),l,l,m.e),1)],w),A.l,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.e6("Ask about it",i,new C.eri(m),l,A.bk,l),new E.e6("Invent something new",!i,new C.erj(m),l,A.bk,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dFl[p]
i.push(new E.e6(n,!1,new C.erk(m,n),l,A.bk,l))}f.push(new E.fm(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dle[p]
i.push(new E.e6(r,!1,new C.erl(m,r),l,A.bk,l))}f.push(new E.fm(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aO(l,A.M,!1,l,!0,A.t,l,B.aP(),m.f,l,l,l,l,l,2,B.bB(l,new B.b5(4,B.n(16),A.a1),l,A.f3,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.jP,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.am,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.erm(m,k),l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.du,!0,A.a8,l,A.ao,l,A.X5,l,l),1)
h=m.at
v=h&&j?D.bXr:A.e9
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.aa,new E.fN(v,j,new C.ern(m,k),A.bk,l)],w),A.l,l,A.e,A.i,0,l,l))
return E.m3(A.bk,A.fh,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.w(f,A.l,l,A.e,A.P,0,A.p))}}
C.Hs.prototype={}
C.vS.prototype={}
C.Y4.prototype={
R(){return new C.aIa(A.J,A.J,A.aB,B.aR(x.S),$,A.bI,0,B.a([],x.X),null,null)}}
C.aIa.prototype={
gb1C(){var w,v,u,t=this,s=D.Jv[t.cx],r=D.Uq[t.cy],q=D.EB[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e9(w,w.r,B.a3(w).c),v=w.$ti.c;w.B();){u=w.d
p.push(D.aDU[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cH(p,0,new C.eGz())},
ga5h(){return D.Jv[this.cx].d/this.gb1C()},
gaTs(){return 0.1*(D.Jv[this.cx].d/0.9)/D.Uq[this.cy].d},
Z(){this.a4()
this.my()
C.co1("rocket_lander").bB(new C.eGT(this),x.k)},
cd7(){var w=this
w.ay=A.h.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cW.ai()*0.6
w.f=new B.m(0.15+A.cW.ai()*0.7,0.08)
w.r=new B.m((A.cW.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mR(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.l(new C.eGU())
return}w=D.u7[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.h.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.m(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga5h()
v=v.a6(0,new B.m(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaTs())}if(m.dy){t=m.r
v=v.aI(0,t.aM(0,t.gcF()*6*D.aFZ[m.d]))}t=m.r=m.r.a6(0,v.aM(0,d))
s=m.f=m.f.a6(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.m(-t.a*0.4,t.b)
t=new B.m(A.h.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.m(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.EB[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b5N("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.Kg("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga5h()/(D.u7[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.h.a1(m.ga5h()/(D.u7[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dI(80,"",500,0,0.6,"noise")
B.fZ()}}if(m.Q&&m.x>0&&A.n.F(A.h.ba(m.CW*20),2)===0)G.dI(90,"",70,0,0.12,"noise")
m.l(new C.eGV())},
aji(d,e,f,g,h){var w,v=null,u=B.c(d,v,v,v,v,v,v,D.fQB,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.e6(e[w].a,f.$1(w),new C.eGB(this,g,w),v,h,v))
return new B.C(A.ez,B.w(B.a([u,A.cR,B.bW(A.bG,s,A.bq,v,6,6)],t),A.B,v,A.e,A.i,0,A.p),v)},
bLD(d){var w,v,u,t,s=this,r=null,q=s.ga5h()/(D.u7[s.d].b/9.81*0.28)>=1,p=A.h.S(1/s.gaTs()),o=D.aFZ[s.d],n=B.n(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.c("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,B.c(d.d+" Gravity here: "+B.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.adG,r,r,r),A.S,s.aji("ENGINE: "+D.Jv[s.cx].b,D.Jv,new C.eGq(s),new C.eGr(s),A.cX),s.aji("FUEL TANK: "+D.Uq[s.cy].b,D.Uq,new C.eGs(s),new C.eGt(s),A.bf),s.aji("LANDING GEAR: "+D.EB[s.db].b,D.EB,new C.eGu(s),new C.eGv(s),A.aH),s.aji("EXTRAS (tap to add)",D.aDU,new C.eGw(s),new C.eGx(s),A.bk)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.hn1)
o=(q?A.bf:A.c3).j(0.14)
w=B.n(12)
v=A.h.a1(s.gb1C(),2)
u=A.h.a1(s.ga5h()/(D.u7[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.c("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.h.S(D.EB[s.db].d*100)+".",r,r,r,r,r,r,D.fRg,r,r,r),A.f,r,r,new B.p(o,r,r,w,r,r,A.m),r,r,r,A.hA,A.bS,r,r,r))
m.push(A.S)
m.push(new B.bH(A.z,r,r,new E.fN(A.ol,"Launch",new C.eGy(s),A.bf,r),r))
return B.at(B.q(r,B.cb(B.w(m,A.B,r,A.e,A.P,0,A.p),A.t,r,A.y,r,r,A.bR,r,r,A.ah),A.f,r,A.mm,new B.p(D.bwL,r,l,n,r,r,A.m),r,r,r,A.bS,r,r,r,r),r,r,r)},
b2P(d,e,f,g){var w=null,v=f?A.cX:A.c.j(0.1),u=B.n(18),t=B.K(A.aT,A.r,1)
return B.n9(A.j6,B.q(w,B.V(d,A.c,w,w,w,30),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,62,w,w,w,w,w,g),w,new C.eGn(e),new C.eGo(e),w,w,w,w,new C.eGp(e))},
b2O(d,e,f){return this.b2P(d,e,f,74)},
C(d){var w,v,u,t,s=this,r=null,q=B.cg(new C.eGM(s,D.u7[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.u7[w].a:"\ud83d\udd12"
o.push(new E.e6(v,s.d===w,new C.eGN(s,w),r,D.u7[w].c,r))}v=B.a([s.b2O(F.ath,new C.eGO(s),s.y),A.bd,s.b2P(A.vG,new C.eGP(s),s.Q,130),A.bd,s.b2O(A.Rk,new C.eGQ(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.n(18)
A.d.u(v,B.a([A.bd,B.aA(r,B.q(r,D.c0R,A.f,r,r,new B.p(u,r,B.K(A.aT,A.r,1),t,r,r,A.m),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eGR(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.m3(A.cX,A.fh,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.w(B.a([new E.fm(o,"WORLD",r),B.A(v,A.l,r,A.bc,A.i,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.bme.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.u7[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.U(),f=B.L(),e=l.c,d=B.ap(I.a12,e,0.25)
d.toString
f.san(new B.a6(A.aW,A.b0,A.w,B.a([F.ajV,d],x.O),n,n).az(0,new B.a5(0,0,i,h)))
a0.aE(new B.a5(0,0,i,h),f)
w=new B.e7()
w.cW(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.V,A.R,A.X,A.Y,A.W)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.m(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aJ(g.r,A.ak,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e7()
s.cW(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.aj(f)
t.ac()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bz())
h=$.U()
g=B.L()
g.r=B.ap(e,A.v,0.6).gp(0)
a0.af(t,g)
q=B.c1(new B.m(m.ax*k,u+10),8,m.ay*k)
g=B.bx(q,A.jL)
e=B.L()
e.r=A.bh.gp(0)
a0.aq(g,e)
e=B.bx(q.cu(2),A.pp)
g=B.L()
g.b=A.ae
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.aq(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bs(f.save())
f.translate(g.a*k,g.b*j)
a0.jA(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cX.j(0.6).gp(0)
m.y=A_.PW
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aJ(k,A.ak,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bz())
m=B.L()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aJ(k,A.ak,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bz())
m=B.L()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aJ(m,A.ak,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.cn(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.cn(-14,-10,0,-26))
o.E(new B.bz())
k=B.L()
k.san(F.awh.az(0,D.fup))
a0.af(o,k)
k=B.L()
k.r=A.aH.gp(0)
a0.O(H.we,5,k)
k=new B.aJ(m,A.ak,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bz())
j=B.L()
j.r=A.aC.gp(0)
a0.af(k,j)
i=new B.aJ(m,A.ak,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bz())
m=B.L()
m.r=A.aC.gp(0)
a0.af(i,m)
f.restore()},
aD(d){return!0}}
C.aQj.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bD8.prototype={
t(){var w,v,u
for(w=this.hi$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hh$
w===$&&B.d()
w.t()
this.bDp()}}
C.aWG.prototype={}
C.a5H.prototype={}
C.bf4.prototype={}
C.Wu.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eA(["skin"],x.N),o=new Float32Array(0)
return new C.aGA(w,v,u,t,s,r,q,new B.cB(null,x.A),p,D.N8,D.N8,A.aB,A.cW,o,new Int32Array(0),$,A.bI,0,B.a([],x.X),null,null)}}
C.aGA.prototype={
Z(){var w=this
w.a4()
w.my()
w.as=new C.cab(w.gcmB())
new C.dVE(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a2(0)
v.d=null}this.bCs()},
cmC(d){var w,v=this
if(v.c==null)return
w=J.a1(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fh(0,B.J(["t","init","data",$.hJv],x.N,x.z))
v.at=!0
v.ay=""
v.aDm()
break
case"parts":v.l(new C.dVe(v))
break
case"pick":v.l(new C.dVf(v,d))
break
case"shot":v.ala(B.v(w.h(d,"data")))
break
case"error":$.an.$1("[body viewer] "+B.v(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.l(new C.dVg(v))
break}},
aDm(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aBJ[q.cx]
v=new C.dVh()
u=q.ch
u=B.B(u,B.a3(u).k("cl.E"))
A.d.fi(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.v(v.$1(w.b))+B.v(v.$1(w.c))+B.v(v.$1(w.d)),"sel",q.cy,"bpm",A.h.S(q.k4),"spin",q.go],t,x.cK)
r=A.T.au(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.S(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.fh(0,u)}},
ala(d){return this.cEe(d)},
cEe(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ala=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cM.aK(A.a.aV(d,A.a.c8(d,",")+1))
w=6
return B.b(B.ayJ(B.a([B.cKz(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$ala)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.q).f.T(I.aXO)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ala,v)},
aCL(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mR(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.h.ba(w)!==A.h.ba(v.p1)){E.Yv("kick",0,0.4)
v.VX(170,new C.dVF())}v.p1=w
return},
agH(d){var w,v,u,t,s=this
s.l(new C.dVi(s,d))
if(d==null){s.fy=D.N8
s.fr=1
w=s.as
if(w!=null)w.fh(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.T(w).k("X<1>")
u=B.B(new B.X(w,new C.dVj(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.K(0,t)
if(s.CW===2)s.CW=1}s.aDm()
w=s.as
if(w!=null)w.fh(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cGM(t,d)
return},
cGM(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Yv("kick",0,0.8)
this.VX(260,new C.dVk())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dI(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.VX(w*70,new C.dVl(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dI(110,"",360,0.7,0.3,"saw")
else E.hoh("organic",6+A.n.F(e.length,8),200,0.6)
break
case"bone":G.dI(210+e.length*4,"",80,0.6,0.55,"tri")
G.dI(2400,"",20,0,0.3,v)
break
case"muscle":G.dI(70,"",150,1,0.6,"sine")
break
case"vessel":G.dI(300,"",380,0.4,0.22,v)
E.Yv("kick",0,0.3)
break
default:E.hoh("organic",2+A.n.F(e.length,6),200,0.4)}},
cLy(d){this.l(new C.dVn(this,d))},
b37(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aCL(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=B.B(o,o.$ti.k("cl.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
c2K(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.l(new C.dVb(u,w,d))
v=x.t
C.Kg("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.VX(1100,new C.dVc(u))
return}if(d==null){if(u.cy!=null)u.agH(null)
return}u.agH(d)},
c6m(d,e){var w,v=this,u=null,t=B.n(18),s=B.K(A.c6.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.c(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fMv,u,u,u)}else if(d==null||e==null)w=D.h0V
else{w=x.p
w=B.A(B.a([B.E(B.w(B.a([B.c(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hk,u,u,u),A.cR,B.c(e.b,u,u,u,u,u,u,A0.FX,u,u,u)],w),A.B,u,A.e,A.P,0,A.p),1),B.aI(u,u,u,u,D.c3B,u,u,u,new C.dVd(v),u,u,u,u,"Back to the whole body",A.cp)],w),A.B,u,A.e,A.i,0,u,u)}return B.q(u,w,A.f,u,u,new B.p(I.a_e,u,s,t,u,u,A.m),u,u,u,u,X.aox,u,u,u)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dRw.h(0,g)
i.aDm()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dwI
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aCL(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,I.pc,h,h,h,new C.dVu(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bK:B.Cj(h,A.qv,p))}p=i.ax
o=p?0:1
q.push(new B.dn(p,B.xT(B.q(A.z,B.w(D.dH0,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.bb5,h,h,D.hQ_,h,h,h,h,h),A.b1,A.nl,o),h))
q=B.w(B.a([B.E(new B.am(A.a0,h,A.b6,A.t,q,h),1),new B.C(F.aod,i.c6m(g,f),h)],v),A.l,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dn0[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.e6(l,o,new C.dVv(i,n),n.c,A.c6,h))}p=B.a([new E.fm(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.e6(k,k===i.cy,new C.dVw(i,k),h,A.aQ,h))}p.push(new E.fm(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.jh(A.c3,""+A.h.S(o)+" beats/min","Heart rate",180,40,new C.dVx(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.GC(D.aBJ[j],i.cx===j,new C.dVy(i,j),!1,h))
p.push(new E.fm(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.e6("Spin",o,new C.dVz(i),D.asf,A.aH,h),new E.fN(A.mF,"Reset view",new C.dVA(i),A.c,h),new E.e6(l,m,new C.dVB(i),A.IP,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.e6("Heartbeat sound",i.ok,new C.dVC(i),T.pa,A.c3,h))
p.push(new E.fm(v,h,h))
return E.m3(A.c6,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.w(p,A.l,h,A.e,A.P,0,A.p))}}
C.aPn.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.aPo.prototype={
t(){var w,v,u
for(w=this.hi$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hh$
w===$&&B.d()
w.t()
this.bCr()}}
C.cab.prototype={
l0(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aD(e,"</script","<\\/script")
v=$.hQv
$.hQv=v+1
u="ngmy-body-viewer-"+v
$.xP()
$.qi().pC(u,new C.cac(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fJ(v,"message",new C.cad(t),!1,x.gA)
t.b=u},
fh(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Si(w.contentWindow)
if(w!=null)J.akK(w,e,"*")}}catch(v){}}}
C.z5.prototype={}
C.Du.prototype={}
C.o7.prototype={}
C.bfT.prototype={}
C.WB.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aGC(B.S(w,x.a2),B.a([],x.cB),B.S(w,v),B.S(w,v),B.S(w,u),A.aB,A.J,A.J,B.aR(u),$,A.bI,0,B.a([],x.X),null,null)}}
C.aGC.prototype={
Z(){var w=this
w.a4()
w.my()
w.afB()
$.aS.U$.push(new C.dXk(w))},
afB(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$afB=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$afB)
case 6:q=e.nU("ngmy_circuit_passed_v1")
r=q==null?A.M:q
if(s.c!=null)s.l(new C.dWZ(s,r))
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
return B.i($async$afB,v)},
afY(d){return this.caC(d)},
caC(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$afY=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return B.b(B.aB(),$async$afY)
case 6:r=f
q=s.cx
p=B.a3(q).k("ks<cl.E,o>")
q=B.B(new B.ks(q,new C.dX1(),p),p.k("M.E"))
r.aB("StringList","ngmy_circuit_passed_v1",q)
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
return B.i($async$afY,v)},
aBb(d,e,f,g){var w="c"+this.y++,v=new C.Du(w,e,f,g)
this.d.n(0,w,v)
return v},
n6(d,e,f){return this.aBb(0,e,f,0)},
aeV(d,e){var w
if(D.B3.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a6(0,new B.m(-36,w))},
uK(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aXJ(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fk$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.ds(w,w.r,w.e),r=!1;s.B();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.n.ec(m,D.d3O[A.n.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uK(p,0)&&n.uK(p,1)
break
case"or":p=q.a
o=n.uK(p,0)||n.uK(p,1)
break
case"xor":p=q.a
o=n.uK(p,0)!==n.uK(p,1)
break
case"nand":p=q.a
o=!(n.uK(p,0)&&n.uK(p,1))
break
case"nor":p=q.a
o=!(n.uK(p,0)||n.uK(p,1))
break
case"not":o=!n.uK(q.a,0)
break
default:o=n.uK(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bWa(){return this.aXJ(null)},
mR(d){var w,v,u,t,s,r,q,p,o,n=this
n.bWa()
if(!n.ax)return
for(w=n.d,w=new B.ba(w,B.a3(w).k("ba<2>")).gae(0),v=new B.eT(w,new C.dXl()),u=n.f,t=n.w,s=0;v.B();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fk$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fk$)
o=s+1
G.dI(520+90*A.n.F(s,4),"",200,0,0.25,"square")
s=o}}},
aBc(d){var w=this
w.d.a7(0)
A.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
mA(d,e){var w=this.x
return new B.m(d*w.a,e*w.b)},
axj(d){var w=this
if(w.x.A(0,A.aB)){$.aS.U$.push(new C.dWX(w,d))
return}w.l(new C.dWY(w,d))},
cH4(d){this.l(new C.dX2(this,d,$.bKg()[d]))},
cfv(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bKg()[a0]
v=d.d
u=B.a3(v).k("ba<2>")
t=u.k("X<M.E>")
s=t.k("M.E")
r=B.B(new B.X(new B.ba(v,u),new C.dWS(),t),s)
A.d.b_(r,new C.dWT())
q=B.B(new B.X(new B.ba(v,u),new C.dWU(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.l(new C.dWV(d,w))
return}u=d.r
p=B.dE(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.n.dJ(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.n.h6(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aXJ(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lD(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aJ(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a7(0)
u.u(0,p)
d.l(new C.dWW(d,o,a0))},
aCg(d){var w,v,u,t,s=this.d,r=B.a3(s).k("ba<2>")
s=B.B(new B.ba(s,r),r.k("M.E"))
r=B.T(s).k("dp<1>")
s=new B.dp(s,r)
s=new B.bQ(s,s.gI(0),r.k("bQ<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.B()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cpb(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("ba<2>")
r=B.B(new B.ba(r,q),q.k("M.E"))
q=B.T(r).k("dp<1>")
r=new B.dp(r,q)
r=new B.bQ(r,r.gI(0),q.k("bQ<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.B()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c6f(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.B();){r=w.d
q=D.B3.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aeV(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bUV(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aeV(p,o)
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
cfx(d){var w,v,u,t=this,s=t.aCg(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.f4()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
G.dI(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.l(new C.dX3())
return}u=t.bUV(d)
if(u!=null)t.l(new C.dX4(t,u))
else t.l(new C.dX5(t))},
aA_(d){return this.c9z(d)},
c9z(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$aA_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aCg(d)
if(s==null){w=1
break}B.jJ()
t.l(new C.dX0(t,s))
case 1:return B.h(u,v)}})
return B.i($async$aA_,v)},
bHm(d){if(this.x.A(0,A.aB))return
this.l(new C.dWR(this,d,A.cW))
B.f4()},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bKg()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.V(i.ax?T.pa:A1.u2,A.ac,h,h,h,21),h,h,h,new C.dXe(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.cw.j(0.14)
r=B.K(A.cw.j(0.5),A.r,1)
q=B.a([B.c("Challenge: "+w.a,h,h,h,h,h,h,D.fLC,h,h,h),B.c(w.b,h,h,h,h,h,h,A.Xv,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.C(A.kP,B.c(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bf:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.w(q,A.B,h,A.e,A.i,0,A.p),1),B.bI(D.hcN,h,i.gcfu(),B.bp(A.cw,h,h,h,h,h,h,h,h,h,h,A.cp))],g),A.l,h,A.e,A.i,0,h,h),A.f,h,h,new B.p(s,h,r,t,h,h,A.m),h,h,h,U.Px,D.bHY,h,h,1/0))}u.push(B.E(B.cg(new C.dXf(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.c(D.B3.h(0,r).a+": "+D.B3.h(0,r).e,h,h,h,h,h,h,Ak.uF,h,h,h),A.f,h,h,new B.p(s,h,h,t,h,h,A.m),h,h,h,A.a2g,A.bS,h,h,1/0))}u=B.w(u,A.l,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.B3.gdW(D.B3),s=s.gae(s);s.B();){r=s.gP(s)
q=new B.aQ(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.q(h,B.w(B.a([B.V(p.b,o,h,h,h,20),A.bs,B.c(p.a,h,h,h,h,h,h,D.aZU,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.p(n,h,new B.bE(m,m,m,m),new B.bc(q,q,q,q),h,h,A.m),h,h,h,A.eX,A.Df,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dXg(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dBD[l]
s.push(new E.fN(A.Rl,k.b,new C.dXh(i,k),A.cw,h))}s.push(new E.fN(I.xu,"Clear",new C.dXi(i),A.c3,h))
r=B.a([],g)
for(j=0;q=$.bKg(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ea:A.m8
o=i.ay
n=i.cx.q(0,j)?A.bf:A.bu
r.push(new E.e6(q.a,o===j,new C.dXj(i,j),p,n,h))}return E.m3(A.cw,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.w(B.a([new E.fm(t,"PARTS",h),new E.fm(s,"TRY",h),new E.fm(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bga.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.U()
w=B.L()
w.r=D.ai9.gp(0)
a5.aE(new B.a5(0,0,0+a3,0+a4),w)
v=B.L()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.O(new B.m(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.I)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.aeV(l,o.c)
h=s.h(0,n)===!0
n=$.U()
g=B.a([],r)
f=new B.aJ(n.r,A.ak,a2,a2,g)
g.push(new B.aZ(j,k))
f.ac()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.i6(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.aj(n)
f.ac()
if(h){n=new B.ar(A.V,A.R,A.X,A.Y,A.W)
n.b=A.ae
n.c=9
n.r=A.bu.j(0.28).gp(0)
n.y=O.p1
a5.af(f,n)}n=new B.ar(A.V,A.R,A.X,A.Y,A.W)
n.b=A.ae
n.c=3.2
n.d=A.bH
n.r=(h?A.eL:A.bz).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a6(0,D.KJ)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aJ($.U().r,A.ak,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.i6(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.ae
s.c=3
s.r=A.ac.gp(0)
a5.af(r,s)}for(a3=new B.ds(q,q.r,q.e);a3.B();)this.cfw(a5,a3.d)},
cfw(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.B3.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.c1(a0.c,64,64)
s=B.bx(t,A.k6)
r=w.cy===v
q=s.eM(A.cy)
$.U()
p=B.L()
p.r=A.v.j(0.55).gp(0)
p.y=A.np
d.aq(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.san(new B.bV(A.z,0.5,A.w,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).az(0,B.c0(a0.c,52)))
d.O(q,52,p)}q=s.eM(A.cO)
p=B.L()
o=e.c
p.r=B.ap(o,A.v,0.65).gp(0)
d.aq(q,p)
n=u?0.35:0
q=B.L()
p=B.ap(o,A.c,0.1+n)
p.toString
m=B.ap(o,A.v,u?0.2:0.45)
m.toString
q.san(new B.a6(A.aW,A.b0,A.w,B.a([p,m],x.O),g,g).az(0,t))
d.aq(s,q)
q=B.L()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.p8:D.bY0}else l=e.b
k=C.hq7(B.lD(l.a),30,A.c,l.b,g,A.C)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aI(0,new B.m(p/2,q.gb4(q)/2)))
j=C.hq7(e.a,10.5,A.c,g,g,A.C)
j.a5(d,a0.c.a6(0,new B.m(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hq7(f,9,u?A.eL:A.bX,g,g,A.u)
i.a5(d,a0.c.a6(0,new B.m(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b3O(d,w.aeV(a0,h),o)
this.b3O(d,a0.c.a6(0,D.KJ),o)},
b3O(d,e,f){var w
$.U()
w=B.L()
w.r=D.ai9.gp(0)
d.O(e,8.5,w)
w=B.L()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.O(e,8.5,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.2,w)},
aD(d){return!0}}
C.aPs.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bCS.prototype={
t(){var w,v,u
for(w=this.hi$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hh$
w===$&&B.d()
w.t()
this.bCw()}}
C.OW.prototype={
R(){return new C.aGT(B.m2(0,null,null))}}
C.LM.prototype={
a9(){return"_UnfoldStyle."+this.b}}
C.Bu.prototype={}
C.aGT.prototype={
Z(){this.a4()
B.bM(A.pX,C.iIb(),x.H)},
cfD(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcs(0).at
v.toString
w.f=v}w.l(new C.e2u(w,e))},
c8d(){var w=this
w.e.t()
w.e=B.m2(w.f,null,null)
w.l(new C.e2t(w))},
t(){this.e.t()
this.a3()},
C(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.Q(d).ax.a===A.dg?A.c:A.c8
return B.pg(t,B.c6(v,s,t?new C.bwK(w.e,w.gcfC(w),new C.e2v(d),v):new C.aLj(u,new B.b9(u.b,x.W)),v,!1,!1,v,!1),new C.e2w(w,u),x.K)}}
C.byo.prototype={}
C.bwK.prototype={
b3P(d,e,f){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,f?A.bF:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.C(X.a2J,B.w(B.a([v,A.bs,B.c(e,w,w,w,w,w,w,B.l(w,w,f?A.cz:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.B,w,A.e,A.i,0,A.p),w)},
C(d){var w,v,u,t=this,s=null,r=B.Q(d).ax.a===A.dg,q=B.aE(d,A.dL,x.w).w,p=B.aI(s,s,s,s,B.V(A.eI,r?A.bF:A.ac,s,s,s,20),s,s,D.hQs,t.e,s,s,s,s,s,s)
if(r)w=new B.p(A.c,s,s,B.n(14),A.Jy,s,A.m)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.n(14)
w=new B.p(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.ac(0,A.G,A.aH.j(0.22),A.J,8)],x.V),new B.a6(A.aw,A.aD,A.w,w,s,s),A.m)}v=B.c("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bF:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.q(s,B.w(B.a([v,B.c("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cz:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.hQx,s,A6.ap5,s,s,s),s,s,s),1),A.uy],u),A.l,s,A.e,A.i,0,s,s)
v=t.b3P("STUDIOS","Play, make things, and keep what you make",r)
$.bKh()
return B.bm(!1,B.w(B.a([B.E(B.vb(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nB(new B.R(8,q.r.b+6,8,4),new B.l4(w,s),s),new B.l4(v,s),new B.nB(A.ih,B.QG(new B.pj(new C.fjj(d),9,!0,!0,!0,0,B.tJ(),s),D.aXD),s),new B.l4(t.b3P("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nB(D.bI6,B.QG(new B.pj(new C.fjk(t),6,!0,!0,!0,0,B.tJ(),s),D.aXD),s)],u)),1)],u),A.l,s,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!1)}}
C.ahy.prototype={
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.Q(d).ax.a===A.dg){w=B.n(20)
v=(A.n.ao(o.c,3)&1)===0
u=B.a8E(v?A.aH:A.bk,20)
v=v?A.aH:A.bk
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eJ(B.w(B.a([new B.Wz(v,44,m.c,n,n),A.N,B.c(m.a,n,2,A.a2,n,n,n,D.fS0,A.K,n,n),A.cR,B.c(m.b,n,2,A.a2,n,n,n,D.fUV,A.K,n,n)],x.p),A.l,n,A.bc,A.i,0,A.p),n,u,n,A.Dw,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.n(20)
v=B.n(20)
u=B.ap(L.mt,l,0.3)
u.toString
t=x.O
u=B.a([u,D.alv],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ac(-4,A.G,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.v,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ac(0,A.G,l.j(0.5),A.J,12)],r)
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eJ(B.w(B.a([B.q(n,B.V(m.c,A.c,n,n,n,24),A.f,n,n,new B.p(n,n,n,n,r,new B.a6(A.aw,A.aD,A.w,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.N,B.c(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cR,B.c(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.bc,A.i,0,A.p),n,new B.p(n,n,s,v,q,new B.a6(A.aw,A.aD,A.w,u,n,n),A.m),n,A.Dw,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.agl.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.Q(d).ax.a===A.dg,h=(A.n.ao(this.c,3)&1)===0?A.aH:A.bk,g=B.n(20)
if(i)w=B.a8E(h,20)
else{w=B.n(20)
v=B.ap(L.mt,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.alv],x.O)
v=new B.p(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ac(0,A.G,A.v.j(0.4),A.cy,12)],x.V),new B.a6(A.aw,A.aD,A.w,v,l,l),A.m)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aQ(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.WA(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ac(0,A.G,A.v.j(0.45),A.aaW,0)],s)
u.push(B.q(l,B.V(t[q],A.c,l,l,l,11),A.f,l,l,new B.p(l,l,l,new B.bc(o,o,o,o),m,new B.a6(A.a5,A.a9,A.w,n,l,l),A.m),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.w(u,A.l,l,A.e,A.P,0,A.p)
if(i)t=A.bF
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.c(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aG(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eJ(B.w(B.a([new B.a4(58,l,u,l),A.S,t,A.at,B.V(A.E9,i?B.WA(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.bc,A.i,0,A.p),l,w,l,A.Dw,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.RZ.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.v,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bP(new B.p(h,j,j,B.n(22),j,j,A.m),A.bn,j,j),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.v.j(0.55),A.KF,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.n(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.v,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bP(new B.p(j,j,j,j,j,new B.a6(A.aw,A.aD,A.w,B.a([p,o,n,i],m),D.dI4,j),A.m),A.bn,j,j),0,0,0),B.ao(j,new B.bP(new B.p(j,j,j,j,j,new B.a6(A.aW,A.b0,A.w,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.m),A.bn,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b4(j,j,j,new C.bxM(i,j),A.aB),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.q(j,B.V(k.f,A.c,j,j,j,28),A.f,j,j,new B.p(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.c(k.r,j,j,j,j,j,j,D.fO1,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.at,B.c(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.FK)
p.push(B.q(j,j,A.f,j,j,new B.p(A.c.j(0.28),j,j,B.n(3),j,j,A.m),j,5,j,j,j,j,j,w*0.42))
m.push(new B.C(A.hf,B.A(B.a([s,A.eu,B.E(B.w(p,A.B,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.dn(!0,B.en(j,A.v.j(A.h.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.n(22)
m.push(B.bS(0,new B.dn(!0,new B.bP(new B.p(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.m),A.bn,j,j),j),0,0,0))
return new B.a4(w,v,new B.am(A.a0,j,A.ab,A.f,B.a([h,B.bS(0,new B.bP(new B.p(j,j,j,u,r,j,A.m),A.bn,B.bv(q,new B.am(A.a0,j,A.ab,A.t,m,j),A.ap),j),0,0,0)],l),j),j)}}
C.bxM.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a5(r,-10,s,w)
u=d.c
J.bs(u.save())
u.translate(v.gbF().a,v.gbF().b)
d.jA(0,0.35)
t=B.c1(A.J,(w- -10)*1.6,s-r)
$.U()
s=B.L()
s.san(new B.a6(A.a5,A.a9,A.w,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).az(0,t))
d.aE(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.bxh.prototype={
C(d){var w=null,v=B.n(22),u=B.a([D.buA,D.akx],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.v.j(0.5),A.ky,24)],x.V),q=B.n(22),p=A.d.gH(t)
return new B.a4(this.c,this.d,new B.bP(new B.p(w,w,s,v,r,new B.a6(A.aw,A.aD,A.w,u,w,w),A.m),A.bn,B.bv(q,B.b4(B.at(B.V(A.j8,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.beN(p,w),A.aB),A.ap),w),w)}}
C.beN.prototype={
a5(d,e){var w,v,u,t,s,r
$.U()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.m(s,0),new B.m(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.m(0,r),new B.m(u,r),w)
u=e.eq(A.J)
$.U()
t=B.L()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aD(d){return!1}}
C.aLj.prototype={
R(){return new C.aLk(new B.cB(null,x.A),null,null)}}
C.aLk.prototype={
grg(){var w,v=this,u=v.d
if(u===$){w=B.br(null,D.bFl,null,1,null,v)
w.cU(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gKt(){var w,v=this,u=v.e
if(u===$){w=B.br(null,A.fP,null,1,null,v)
w.fs(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaBd(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcfz(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gb_Z(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gb0M(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbd_(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a4()
var w=this.grg()
w.dr()
w.e3$.K(0,this.gcGN())},
cGO(){var w,v,u,t,s,r,q,p=this,o=p.grg().x
o===$&&B.d()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as&&p.ch<0){switch(p.gaBd().a){case 0:w=D.oq
break
case 1:w=D.vZ
break
case 2:w=D.a7d
break
case 3:w=D.oq
break
case 4:w=D.dt0
break
case 5:w=D.vZ
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.afI)r=0.09
else r=s===D.afJ?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dI(260+90*v,"",260,1.6,0.18,"tri")
u=D.chb[v]
E.mR("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.Kg("bell",D.cq3,1400,0.35)}}p.ax=o},
t(){this.grg().t()
this.gKt().t()
this.bEm()},
a0Z(){var w=this
w.grg().d6q(0,B.dx(0,0,0,A.h.S(11e3/w.Q),0,0))
w.l(new C.fj_(w))},
cri(){this.grg().bR(0)
this.l(new C.fiZ(this))},
a0Y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a0Y=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:if(r.ch>=0){w=1
break}j=$.aS.bl$.x.h(0,r.f)
i=j==null?null:j.gbf()
if(!(i instanceof B.oF)||i.fy==null){w=1
break}h=r.as
j=r.grg()
j.bR(0)
g=r.gKt()
g.bR(0)
r.l(new C.fiP(r))
f=i.ga0(0)
e=f.a
d=f.b
q=Math.min(3.5,1600/Math.max(e,d))
p=A.h.ba(e*q)
o=A.h.ba(d*q)
n=A.h.S(11/r.Q*20)
m=null
t=4
w=7
return B.b(E.ajN(24*q,20,new C.fiQ(r,n,q,p,o),n,o,new C.fiR(r),p),$async$a0Y)
case 7:l=a3
if(J.ab(l)===0){e=B.be("empty")
throw B.Y(e)}e=r.a.c
d=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
k=B.aD(e.b.toLowerCase(),d,"_")
w=8
return B.b(E.aUv(l,k),$async$a0Y)
case 8:m=a3?"Your scene is saved (a moving GIF).":"Could not save here. Try another browser."
t=2
w=6
break
case 4:t=3
a1=s.pop()
m="Could not make the GIF. Try again."
w=6
break
case 3:w=2
break
case 6:if(r.c==null){w=1
break}r.l(new C.fiS(r))
g.fs(0,!0)
j.sp(0,0)
if(h)r.a0Z()
r.c.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.c(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0Y,v)},
ah6(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ah6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gb0M(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.bd(q,A.ba,A.aP),$.ay()))}m=B.a([],m)
for(t=u.gbd_(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.bd(p,A.ba,A.aP),$.ay()))}o=B.B(u.gb_Z(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(L.mt,null,new C.fiY(u,l,m,o),t,!0,!0,!0,A.me,!1,!1,x.H),$async$ah6)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.ay()
n.W$=0}return B.h(null,v)}})
return B.i($async$ah6,v)},
C(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gaBd(),e=h.a.c,d=e.b,a0=h.gcfz(),a1=new C.Bu(f,d,e.c,a0,h.gb_Z(),h.gb0M(),h.gbd_())
e=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
e.toString
f=x.p
w=B.a([B.aI(g,g,g,g,B.V(h.at?T.pa:A1.u2,A.ac,g,g,g,21),g,g,g,new C.fj7(h),g,g,g,g,"Sound",g),B.aI(g,g,g,g,D.c7q,g,g,g,h.gcfB(),g,g,g,g,"Edit words and pictures",g),B.aI(g,g,g,g,I.pc,g,g,g,new C.fj8(h,a2),g,g,g,g,"Share",g)],f)
v=B.a([B.ca(h.gKt(),new C.fj9(h,a1),g),B.cg(new C.fja(h,a1))],f)
u=h.as
t=u?h.gcrh():h.gcfE()
u=u?D.bXb:A.u_
s=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
s.toString
t=B.A(B.a([B.aI(g,g,g,g,B.V(u,s,g,g,g,34),g,g,g,t,g,g,g,g,g,A.cp),B.E(B.ca(h.grg(),new C.fjb(h,a2,a1),g),1),B.aI(g,g,g,g,D.c3r,g,g,g,new C.fjc(h),g,g,g,g,"Replay",A.cp)],f),A.l,g,A.e,A.i,0,g,g)
s=h.Q
u=A.h.a1(s,1)
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
s=E.jh(r,u+"x","Speed",2.5,0.4,new C.fjd(h),s)
u=B.a([],f)
for(q=0;q<6;++q){p=D.dET[q]
o=h.r
if(o===$)o=h.r=h.a.c.a
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
u.push(new E.e6(p.b,o===p.a,new C.fje(h,p),p.c,r,g))}r=B.a([],f)
for(n=x.G,q=0;q<10;++q){m=D.chB[q]
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}l=A.d.gH(o).A(0,A.d.gH(m))?34:28
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}k=A.d.gH(o).A(0,A.d.gH(m))?34:28
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}j=A.d.gH(o).A(0,A.d.gH(m))?A.c:A.aT
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}i=new B.ax(j,A.d.gH(o).A(0,A.d.gH(m))?2.5:1,A.r,-1)
r.push(B.aA(g,B.q(g,g,A.f,g,g,new B.p(g,g,new B.bE(i,i,i,i),g,g,new B.a6(A.aw,A.aD,A.w,m,g,g),A.a6),g,k,g,I.ao2,g,g,g,l),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.fjf(h,m),g,g,g,g,g,g,!1,A.a4))}u=B.a([t,s,new E.fm(u,"STYLE",g),new E.fm(r,"THEME",g),A.aj],f)
t=h.ch
if(t>=0){s=B.n(6)
a0=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
a0.toString
u.push(new B.C(A.jZ,B.w(B.a([B.bv(s,B.jK(A.by,g,a0,8,g,t,g),A.ap),A.at,B.c("Making your GIF\u2026 "+A.h.S(h.ch*100)+"%",g,g,g,g,g,g,A.nH,g,g,g)],f),A.l,g,A.e,A.i,0,A.p),g))}else{f=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
f.toString
u.push(new B.a4(1/0,g,B.df(A.om,g,D.hoc,h.gcfA(),B.bp(f,g,g,g,A.v,g,A.kO,g,g,g,g,g)),g))}return E.m3(e,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.ea(new B.am(A.a0,g,A.b6,A.t,v,g),h.f),d,B.w(u,A.l,g,A.e,A.P,0,A.p))},
bGw(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.oq[r]
p=A.h.D((1-A.ek.aA(0,A.h.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.h.D(p/1.5707963267948966,0,1)
q=D.oq[r]
n=q+0.12
m=A.h.D((a0-n)/(q+0.2-n),0,1)
n=D.oq[r]
q=n-0.01
q=A.h.D((a0-q)/(n+0.03-q),0,1)
n=B.dB()
l=n.a
l.$flags&2&&B.ak(l)
l[11]=0.0013
n.kc(p)
l=v[r]
k=u[r]
j=t[r]
i=D.oq[r]
h=i+0.1
if(A.h.D((a0-h)/(i+0.3-h),0,1)>0){i=D.oq[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.oq[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cR(0,r*118,0,f,f,f,new B.l2(q,new B.jb(n,f,A.aW,!0,f,new C.RZ(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.oq[r]
u=v-0.02
g=A.h.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.oq[r]
t=v+0.12
e.push(new B.cR(0,r*118-3-2,0,f,f,4,new B.n3(new C.bwl(u,g,1-A.h.D((a0-t)/(v+0.22-t),0,1),f),f,A.aB,f,f),f))}return new B.a4(a2,358,new B.am(A.a0,f,A.ab,A.f,e,f),f)},
bXM(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vZ[r]
p=A.rg.aA(0,A.h.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vZ[r]
m=q+0.15
l=A.h.D((a0-m)/(q+0.25-m),0,1)
m=D.vZ[r]
q=m-0.03
q=A.h.D((a0-q)/(m+0.01-q),0,1)
m=B.dB()
k=m.a
k.$flags&2&&B.ak(k)
k[11]=0.0011
m.kf(n,n,n,1)
m.fN(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.RZ(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dB()
k.fN(3.141592653589793)
k=new B.jb(k,f,A.z,!0,f,new C.bxh(a2,108,w,f),f)}e.push(new B.cR(0,r*130,0,f,f,f,new B.l2(q,new B.jb(m,f,A.z,!0,f,k,f),f),f))}return new B.a4(a2,378,new B.am(A.a0,f,A.ab,A.f,e,f),f)},
cM1(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a7d[w]
l.push(A.cn.aA(0,A.h.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b4(n,n,n,new C.bzS(d.d,l,D.aDs,m,C.bwJ(e,0.4,0.62),f,C.bwJ(e,0.45,0.7),n),A.aB),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hqF(g,w)
q=D.aDs[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cR(r,s-q*m*p+12,n,n,t,n,new B.l2(o,B.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hqF(g,w)
r=D.a7d[w]
q=r+0.15
v.push(new B.cR(s,l,n,n,t,n,new B.l2(A.h.D((e-q)/(r+0.25-q),0,1),B.c(u[w],n,n,n,n,n,n,A.XF,A.K,n,n),n),n))}return new B.a4(g,m+90,new B.am(A.a0,n,A.ab,A.f,v,n),n)},
bMV(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cn.aA(0,C.bwJ(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.at(B.dQ(B.b4(f,f,f,new C.bvK(A.d.gH(a1),C.bwJ(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eEh),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.h.D((a3-l)/(0.12+m-l),0,1)
j=A.dS.aA(0,A.h.D((o-0.7)/0.3,0,1))
l=B.dB()
m=l.a
m.$flags&2&&B.ak(m)
m[11]=0.001
l.fN(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.kf(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.h.F(r,1):-1
w.push(new B.y(o,new B.cR(0,0,0,0,f,f,new B.cp(A.z,f,f,new B.l2(k*(0.45+0.55*o),B.dQ(new B.jb(l,f,A.z,!0,f,new C.RZ(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.m(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.fiM())
A.d.u(a0,new B.O(w,new C.fiN(),x.fR))
return new B.a4(a5,330,new B.am(A.a0,f,A.ab,A.f,a0,f),f)},
cfy(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vZ[q]
o=A.h.D((a2-p)/(p+0.22-p),0,1)
n=A.n2.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vZ[q]
m=A.h.D((a2-m)/(m+0.02-m),0,1)
l=D.aFC[q]
k=B.dB()
k.ni(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.kf(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vZ[q]
g=h+0.1
g=A.h.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cR(0,0,0,0,e,e,new B.cp(A.z,e,e,new B.l2(m,B.dQ(new B.jb(k,e,A.z,!0,e,new C.RZ(d,92,w,p,j,i,0,g*s,h,e),e),new B.m(0,l)),e),e),e))
l=D.vZ[q]
h=l+0.02
f=A.h.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cR(0,0,0,0,e,e,new B.cp(A.z,e,e,B.dQ(new B.n3(new C.bft(w,f,q,e),e,new B.av(r,212),e,e),new B.m(0,D.aFC[q])),e),e))}return new B.a4(a4,330,new B.am(A.a0,e,A.ab,A.f,a0,e),e)},
bJw(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.m(-b0,-150),new B.m(b0,-40),D.eEm],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.oq[r]
p=A.h.D((a8-q)/(q+0.2-q),0,1)
o=A.cn.aA(0,p)
q=D.aFM[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.oq[r]
f=g+0.2
e=A.h.D((a8-f)/(g+0.3-f),0,1)
f=D.oq[r]
g=f-0.01
g=A.h.D((a8-g)/(f+0.03-g),0,1)
f=B.dB()
d=f.a
d.$flags&2&&B.ak(d)
d[11]=0.001
f.ni(l*h+D.dxL[r]*o)
f.fN(l*0.9)
h=0.55+0.45*o
f.kf(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cR(0,0,0,0,a3,a3,new B.cp(A.z,a3,a3,new B.l2(g,B.dQ(new B.jb(f,a3,A.z,!0,a3,new C.RZ(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.m(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.oq[r]
i=q+0.17
a2=A.h.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aFM[r]
a6.push(new B.cR(0,0,0,0,a3,a3,new B.cp(A.z,a3,a3,B.dQ(new B.n3(new C.bvM(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.m(0,q+48-4)),a3),a3))}}return new B.a4(b0,330,new B.am(A.a0,a3,A.ab,A.f,a6,a3),a3)}}
C.bwl.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a5(w-v,0,w+v,e.b)
q=B.bx(u,A.hG)
$.U()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=O.p1
d.aq(q,t)
t=B.bx(u,A.hG)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.bvK.prototype={
a5(d,e){var w,v,u=this.c,t=B.c1(e.eq(A.J),e.b*u,e.a*u)
$.U()
u=B.L()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=A_.PW
d.c3(t,u)
u=B.L()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c3(t,u)
u=t.cu(-14)
v=B.L()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.c3(u,v)},
aD(d){return!0}}
C.bft.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.eq(A.J),h=this.c,g=A.cn.aA(0,h)
$.U()
w=B.L()
w.b=A.ae
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e7()
t.cW(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.h.D(v,0,1)).gp(0)
d.O(new B.m(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aD(d){return!0}}
C.bvM.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.eq(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.h.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.c1(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.U()
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.b=A.ae
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c3(q,p)}},
aD(d){return d.c!==this.c}}
C.bzS.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a5(0,c9,0+c4,c9+60)
$.U()
c9=B.L()
w=c0.b
v=x.O
c9.san(new B.a6(A.aW,A.b0,A.w,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).az(0,d0))
d1.aE(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.m(0,c3),new B.m(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hqF(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.U()
a3=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a3.r=A.v.j(0.5).gp(0)
a3.y=A.np
d1.c3(new B.a5(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a5(d,a3,a1,a3+a0)
a5=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a6=B.ap(A.d.gH(w),A.c,0.1)
a6.toString
a5.san(new B.a6(A.aW,A.b0,A.w,B.a([a6,A.d.gal(w)],v),c1,c1).az(0,a4))
d1.aE(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aJ(a2,A.ak,c1,c1,a5)
a5.push(new B.aZ(a1,a3))
a7.ac()
a6=a1+c7
a8=a3+c8
a9=new B.aq(a6,a8)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.aj(b0)
a7.ac()
a9=new B.aq(a6,n)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.aj(b0)
a7.ac()
a9=new B.aq(a1,c3)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.aj(b0)
a7.ac()
a9=new B.bz()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.aj(a5)
a7.ac()
a5=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a5.r=B.ap(A.d.gal(w),A.v,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aJ(a2,A.ak,c1,c1,a5)
a5.push(new B.aZ(d,a3))
b1.ac()
a2=new B.aq(d+c7,a8)
a5.push(a2)
a9=b1.f
if(a9!=null)a2.aj(a9)
b1.ac()
a2=new B.aq(a6,a8)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.aj(a6)
b1.ac()
a2=new B.aq(a1,a3)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.aj(a6)
b1.ac()
a2=new B.bz()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.aj(a5)
b1.ac()
a2=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a2.r=B.ap(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b2.b=A.ae
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.aE(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.h.ba(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bx(new B.a5(b7,a6,b7+s,a9),A.hG)
$.U()
b8=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b8.r=(b5?A.c.j(r):A.v.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a5(d,a2,a1,a2+28)
J.bs(g.save())
g.clipRect(B.hS(a4),$.lI()[1],!0)
$.U()
a2=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a2.san(new B.a6(A.aW,A.b0,A.w,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).az(0,b9))
d1.aE(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aR9.prototype={
b0(){this.b8()
this.b6()
this.dV()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdP())
w.bd$=null
w.a3()}}
C.a2I.prototype={
a9(){return"_Role."+this.b}}
C.qP.prototype={}
C.rB.prototype={}
C.Dy.prototype={}
C.a0E.prototype={}
C.ahl.prototype={}
C.a2V.prototype={
ga0(d){return this.d}}
C.DJ.prototype={}
C.ae9.prototype={}
C.aer.prototype={}
C.agp.prototype={}
C.bmb.prototype={
a5r(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dI(d,"",e,g,h,f)},
be8(d,e,f){return this.a5r(d,e,f,0,0.55)},
aGb(d,e,f,g){return this.a5r(d,e,f,0,g)},
be9(d,e,f,g){return this.a5r(d,e,f,g,0.55)},
a7(d){var w=this
w.a.a7(0)
A.d.a7(w.b)
A.d.a7(w.c)
A.d.a7(w.d)
A.d.a7(w.e)
A.d.a7(w.f)
A.d.a7(w.r)
A.d.a7(w.w)
A.d.a7(w.x)
w.y.a7(0)
w.Q.a7(0)
w.as.a7(0)
w.b3()},
anm(d,e,f,g){var w="n"+this.ay++,v=new C.rB(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tG(d,e,f){return this.anm(0,e,f,0)},
X(d,e){var w=this
w.a.X(0,e)
A.d.bs(w.b,new C.dwN(e))
A.d.bs(w.c,new C.dwO(e))
w.b3()},
bi1(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.nw.h(0,v.b).c===D.yJ)return!1
w=this.b
if(A.d.aR(w,new C.dwK(d,e)))return!1
w.push(new C.Dy(d,e))
this.b3()
return!0},
c71(d){var w
if(d.b==="beat")return D.cqf[A.n.F(d.d,4)]
w=this.at
switch(A.n.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aJN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.n.F(w,6)
t=D.aG3[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.DJ(u,t,j.ax,90))
w.push(new C.DJ(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a2V(u,new B.m(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.be8(261.63*Math.pow(2,([0,4,7,12,16,19][A.n.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a2V(u,new B.m(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.DJ(u,t,j.ax,120))
j.aGb(120,200,"noise",0.5)
j.be8(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.DJ(u,t,j.ax,230))
w.push(new C.DJ(u,t,j.ax+160,160))
w.push(new C.DJ(u,t,j.ax+320,100))
j.be9(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.ae9(u,new B.m((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.be9(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.aer(u,u.a6(0,new B.m(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a5r(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fZ()
j.a5r(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.agp(u,D.aFo[v],t,j.ax))
j.aGb(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aGb(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cmj[A.n.F(w,3)]
for(k=1;k<=3;++k)j.cBH(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eT(w,new C.dwL(d));v.B();)j.aED(w.gP(0),j.ax+D.cyO[A.n.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cQh[A.n.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eT(w,new C.dwM(d));v.B();)j.aED(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.ye(w,0,v-700)},
cBH(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a0E(e,"~"+d))},
aED(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ahl(d.a,v,e,w))
u.push(new C.a0E(w,v))},
a9g(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a3(w).k("ba<2>")
w=B.B(new B.ba(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aJN(r)
u.n(0,r,o.ax+o.c71(s))}}w=o.c
v=B.T(w).k("X<1>")
q=B.B(new B.X(w,new C.dwP(o),v),v.k("M.E"))
if(q.length!==0){A.d.bs(w,new C.dwQ(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.aV(u,1)
for(u=A.d.gae(v),r=new B.eT(u,new C.dwR(p));r.B();)o.aED(u.gP(0),o.ax)}else o.aJN(u)}}A.d.bs(o.d,new C.dwS(o))
A.d.bs(o.e,new C.dwT(o))
A.d.bs(o.f,new C.dwU(o))
A.d.bs(o.w,new C.dwV(o))
A.d.bs(o.x,new C.dwW(o))
A.d.bs(o.r,new C.dwX(o))
o.b3()},
wc(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.m(q.a+o*e,q.b+p*e)
r.b=new B.m(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.m(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.m(l,o)
if(o>n){p=m.a=new B.m(l,n)
t=m.b=new B.m(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.m(-t.a*0.8,t.b)}},
ak(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.B)
for(v=this.a,v=new B.ds(v,v.r,v.e),u=x.N,t=x.K;v.B();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.T.au(B.J(["nodes",m,"edges",v],u,x.ew),null)},
VA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.T.aN(0,d,null))
k.a7(0)
for(o=x.j,n=J.aN(o.a(J.t(w,"nodes"))),m=k.a;n.B();){v=n.gP(n)
u=B.v(J.t(v,"k"))
if(!D.nw.am(0,u))continue
t=B.v(J.t(v,"id"))
m.n(0,t,new C.rB(t,u,new B.m(B.dw(J.t(v,"x"))*k.cy.a,B.dw(J.t(v,"y"))*k.cy.b),A.h.M(B.dw(J.t(v,"p")))))
s=B.c9(B.aD(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aN(o.a(J.t(w,"edges"))),n=k.b;o.B();){r=o.gP(o)
q=B.v(J.t(r,0))
p=B.v(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.Dy(q,p))}k.b3()
return!0}catch(l){return!1}},
d0N(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rB(n,r,new B.m(q*p.a,o*p.b),s))
l.b3()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bi1(w[m.a],w[m.b])}},
ga0(d){return this.cy}}
C.Hd.prototype={}
C.Y3.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aI9(new C.bmb(B.S(w,x.f3),v,u,t,s,r,q,p,o,B.S(w,n),B.S(w,n),B.S(w,n),B.S(w,n),A.cW,A.L,A.aB,$.ay()),A.bI,A.J,A.J,A.M,null,null)}}
C.aI9.prototype={
aft(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$aft=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aB(),$async$aft)
case 6:q=n.kn(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.l(new C.eFU(s))
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
return B.i($async$aft,v)},
acl(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$acl=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.l(new C.eFJ(s))
u=3
w=6
return B.b(B.aB(),$async$acl)
case 6:e.aB("Bool","ngmy_core_lab_coach_v1",!0)
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
return B.i($async$acl,v)},
bT1(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("ba<2>")
v=""+n.a+"|"+o.length+"|"+new B.ba(n,w).cH(0,0,new C.eFL())+"|"+A.d.cH(o,0,new C.eFM())
if(v===p.ch)return p.CW
u=new C.eFP()
t=x.s
s=B.a([],t)
r=new C.eFQ(p,s,u)
for(n=new B.ba(n,w).gae(0),w=new B.eT(n,new C.eFN());w.B();){q=n.gP(0)
if(!A.d.aR(o,new C.eFO(q)))s.push(B.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cJ(s,0,B.dy(5,"count",x.S),x.N).de(0)},
Z(){var w,v=this
v.a4()
v.aft()
v.d.db=v.ay
w=v.qm(new C.eGj(v))
w.fV(0)
v.e!==$&&B.aT()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a2(0)
v=w.e
v===$&&B.d()
v.t()
v=w.d
v.V$=$.ay()
v.W$=0
w.bDn()},
aeZ(d){return this.c6s(d)},
c6s(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$aeZ=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aB(),$async$aeZ)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.VA(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.b1e(A.d.gH(D.aEO))
if(s.c!=null)s.l(new C.eFT())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aeZ,v)},
b1e(d){this.d.d0N(0,d.c,d.d)
this.Fz()},
Fz(){var w=this.as
if(w!=null)w.a2(0)
this.as=B.cD(A.m4,new C.eFF(this))},
aBe(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("ba<2>")
s=B.B(new B.ba(s,r),r.k("M.E"))
r=B.T(s).k("dp<1>")
s=new B.dp(s,r)
s=new B.bQ(s,s.gI(0),r.k("bQ<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.B()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cpc(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("ba<2>")
r=B.B(new B.ba(r,q),q.k("M.E"))
q=B.T(r).k("dp<1>")
r=new B.dp(r,q)
r=new B.bQ(r,r.gI(0),q.k("bQ<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.B()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c6g(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.B();){r=w.d
if(D.nw.h(0,r.b).c===D.yJ)continue
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
cfH(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hQw(new B.m(n.a+36,n.b+0),new B.m(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cJD(d){var w,v,u,t,s,r,q=this,p=q.aBe(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f4()
u=v.b
if(u==="button"){w.aJN(p)
return}if(q.r)return
t=D.nw.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.t3)s=6
else s=1
v.d=A.n.F(v.d+1,s)
w.b3()
q.Fz()
return}if(q.r)return
r=q.cfH(d)
if(r!=null){w=q.d
A.d.cP(w.b,r)
w.b3()
q.Fz()}},
cqz(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cpc(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aBe(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aI(0,d)}},
cqA(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.m(A.h.D(d.a+s.y.a,46,t.a-46),A.h.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b6U(){var w,v,u=this
if(u.z!=null){w=u.c6g(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bi1(v,w)}else v=!1
if(v){B.ke()
u.Fz()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.Fz()
u.x=null}},
afI(d){return this.c9A(d)},
c9A(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$afI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aBe(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jJ()
p=t.c
p.toString
w=3
return B.b(B.bU(L.mt,null,new C.eFW(q),p,!0,!0,!1,A.me,!1,!1,x.y),$async$afI)
case 3:if(f===!0){r.X(0,s)
t.Fz()}case 1:return B.h(u,v)}})
return B.i($async$afI,v)},
cfF(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tG(0,d,new B.m(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.f4()
this.Fz()},
ajQ(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ajQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(L.mt,null,new C.eFY(),s,!0,!0,!0,A.me,!1,!1,x.es),$async$ajQ)
case 2:t=e
if(t!=null)u.b1e(t)
return B.h(null,v)}})
return B.i($async$ajQ,v)},
ah7(d){var w=0,v=B.j(x.H),u=this,t
var $async$ah7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.eFI(),t,null,!0,!0,x.y),$async$ah7)
case 2:if(f===!0){u.d.a7(0)
u.Fz()}return B.h(null,v)}})
return B.i($async$ah7,v)},
C(d){var w=this,v=null,u=B.a([B.akY(w.r?new B.bH(A.a5,v,v,new B.C(A.I5,B.hz(D.c18,D.h5h,new C.eGh(w),v),v),v):w.cfI(),A.b1,A.iP),B.E(B.cg(new C.eGi(w)),1)],x.p)
if(!w.r)u.push(w.cEh())
return B.c6(v,A.c8,B.bm(!0,B.w(u,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bOE(){var w=null,v=new C.eFK(),u=A.v.j(0.7),t=B.n(26),s=B.K(A.bw.j(0.5),A.r,1)
return B.bS(0,B.en(B.at(B.q(w,B.cb(B.w(B.a([D.hgY,A.at,D.hp_,A.az,v.$4(A.mG,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(W.E5,A.cw,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kp,A.c6,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.QL,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.hof,new B.bH(A.a9,w,w,B.bK(!1,D.he_,w,w,!0,w,w,w,this.gbOx(),w,w),w)],x.p),A.B,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.Nf,new B.p(L.mt,w,s,t,w,w,A.m),w,w,w,A.f7,A9.apo,w,w,w),w,w,w),u,!0),0,0,0)},
cfI(){var w=this,v=null,u=B.aI(v,v,v,v,Aq.nt,v,v,v,new C.eG3(w),v,v,v,v,v,v),t=w.abM(A.DY,"How it works",new C.eG4(w),!0),s=w.ay?T.pa:A1.u2
return new B.C(D.bMh,B.A(B.a([u,D.bNX,t,w.abM(s,"Sound",new C.eG5(w),!0),w.abM(A.e9,"Ideas",w.gcut(),!0),w.abM(I.xu,"Clear",w.gcfG(w),!0),w.aSL(A.fR,"Show",new C.eG6(w),!0,!0)],x.p),A.l,v,A.e,A.i,0,v,v),v)},
aSL(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.V(d,h?A.v:A.c,w,w,w,20)],x.p)
return new B.C(Am.xl,B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.fW(new B.C(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
abM(d,e,f,g){return this.aSL(d,e,f,g,!1)},
cEh(){var w=null,v=new C.eG_(this),u=A.c.j(0.08)
return B.q(w,B.cb(B.A(B.a([v.$2("START",D.yJ),v.$2("CHANGE",D.Gi),v.$2("REACT",D.t3)],x.p),A.B,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aJ),A.f,w,w,new B.p(L.CO,w,new B.bE(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.m),w,w,w,w,D.bHg,w,w,w)},
cEi(d){var w,v,u,t,s=null,r=D.nw.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.C(A.eX,B.aA(s,B.q(s,B.w(B.a([B.V(r.b,v,s,s,s,22),A.cR,B.c(r.a,s,1,A.a2,s,s,s,D.aZU,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.p(s,s,t,w,s,new B.a6(A.aW,A.b0,A.w,u,s,s),A.m),s,s,s,s,A.hB,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eFZ(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bmc.prototype={
a5(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bs(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.U()
u=B.L()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.O(new B.m(r,s),1,u)
q=b4.CW
if(b5<q){$.U()
p=B.L()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.aE(new B.a5(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){m=w[n]
l=o.h(0,m.a)
k=o.h(0,m.b)
if(l==null||k==null)continue
j=l.c
i=j.a+36
j=j.b+0
h=k.c
g=h.a-36
h=h.b
f=$.U()
e=B.a([],p)
d=new B.aJ(f.r,A.ak,b3,b3,e)
e.push(new B.aZ(i,j))
d.ac()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.i6(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.aj(e)
d.ac()
a1=D.nw.h(0,l.b).d
a2=D.nw.h(0,k.b).d
f=new B.ar(A.V,A.R,A.X,A.Y,A.W)
f.b=A.ae
f.c=3
f.d=A.bH
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rl(new B.m(i,j),new B.m(g,h))
f.san(new B.a6(A.a5,A.a9,A.w,e,b3,b3).az(0,new B.a5(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.h.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hQw(new B.m(j.a+36,j.b+0),new B.m(i.a-36,i.b),a4)
$.U()
i=new B.ar(A.V,A.R,A.X,A.Y,A.W)
i.r=A.c.j(0.35).gp(0)
i.y=O.p1
b7.O(a5,8,i)
i=new B.ar(A.V,A.R,A.X,A.Y,A.W)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a6(0,D.KJ)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aJ($.U().r,A.ak,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.i6(t+a0,p,w-a0,j,w,j))
j=B.L()
j.b=A.ae
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.L()
j.r=A.c.gp(0)
b7.O(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
p=a9.c
v=A.h.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.ed.aA(0,v)
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.b=A.ae
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.h.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.l1(p,j,A.ed.aA(0,v))
i.toString
j=B.l1(p,j,A.ed.aA(0,A.h.D(v-0.35,0,1)))
j.toString
$.U()
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.c=5
p.d=A.bH
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rl(j,i)
p.san(new B.a6(A.a5,A.a9,A.w,g,b3,b3).az(0,new B.a5(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.ld
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.h.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=a3.c.j(1-v).gp(0)
b7.O(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){k=w[n]
p=k.a
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.ld
b7.O(p,11,j)
j=k.a
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.san(new B.bV(Ac.C6,0.5,A.w,b3,0,B.a([A.c,i],q),b3,b3).az(0,B.c0(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.h.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bmd(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.m(t.a-p/2,t.b-(40+60*v+q.gb4(q)/2)))}for(b4=new B.ds(o,o.r,o.e);b4.B();)b2.cq5(b7,b4.d,b5)
b6.restore()},
cq5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.nw.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.h.D(1-(f-w)/520,0,1)
u=B.c1(e.c,64,64)
t=B.bx(u,A.ia)
s=t.eM(A.cy)
$.U()
r=B.L()
r.r=A.v.j(0.55).gp(0)
r.y=A.np
d.aq(s,r)
if(v>0){s=t.cu(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.DB
d.aq(s,r)}s=t.eM(A.cO)
r=B.L()
q=h.d
r.r=B.ap(q,A.v,0.65).gp(0)
d.aq(s,r)
r=B.L()
s=B.ap(q,A.c,0.18+0.4*v)
s.toString
p=B.ap(q,A.v,0.35)
p.toString
r.san(new B.a6(A.aW,A.b0,A.w,B.a([s,p],x.O),j,j).az(0,u))
d.aq(t,r)
r=B.L()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.bmd(B.lD(r.a),30,A.c,r.b,j,A.C)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aI(0,new B.m(s/2,r.gb4(r)/2)))
n=C.bmd(h.a,11,A.c,j,j,A.C)
n.a5(d,e.c.a6(0,new B.m(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.n.F(e.d,r)]
else m=i==="pop"?D.aFo[A.n.F(e.d,6)]:j
h=h.c
if(h===D.t3){s=e.c.a6(0,new B.m(0,62))
r=B.L()
r.r=D.aG3[A.n.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.bmd(m,9.5,A.aE,j,j,A.O)
l.a5(d,e.c.a6(0,new B.m(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bmd(m,9.5,A.aE,j,j,A.O)
l.a5(d,e.c.a6(0,new B.m(-l.b.c/2,54)))}if(k.c)return
if(h!==D.yJ)k.b7J(d,e.c.aI(0,D.KJ),q)
k.b7J(d,e.c.a6(0,D.KJ),q)},
b7J(d,e,f){var w
$.U()
w=B.L()
w.r=A.c8.gp(0)
d.O(e,9,w)
w=B.L()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.O(e,9,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.5,w)},
aD(d){return!0}}
C.aQh.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.es.prototype={}
C.uk.prototype={
auh(d,e,f,g){var w=this
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
C.acN.prototype={}
C.adW.prototype={}
C.a6P.prototype={
bjX(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hd()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.acN(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
cbN(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bTq())},
anm(d,e,f,g){var w="p"+this.c++,v=new C.uk(w,e,f,g)
v.auh(w,e,f,g)
this.a.push(v)
return v},
X(d,e){A.d.X(this.a,e)
A.d.bs(this.b,new C.bTB(e))},
a7(d){A.d.a7(this.a)
A.d.a7(this.b)},
cSE(d,e,f,g,h){return A.d.aR(this.b,new C.bTw(e,f,g,h))},
aob(d,e,f,g){var w
if(d===f||this.cSE(0,d,e,f,g))return null
w=new C.adW(d,e,f,g)
this.b.push(w)
return w},
aFa(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
AY(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aqZ(d){return this.Nt(d)&&!d.x&&d.cx>this.AY(d)},
bc9(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Nt(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cg1(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.B4.h(0,v)
if(w!=null)return w.a
return 100},
wc(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.cbN(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bTC(a2),t).cH(0,0,new C.bTD(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.S(x.N,u)
n=new C.bTF(o)
m=B.a([],x.t)
l=new C.bTE(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.S(u,u)
f=new C.bTH(g,l,n)
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
a2.bc5(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.AY(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.bc5(e,d,w,!0)
a2.bVo(a4)},
bc5(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.S(x.N,b3),b5=new C.bTs(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bTr(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bTu(B.S(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.I)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c4(b7,0,!1,b3)
v=x.Y
k=B.S(v,b3)
j=B.S(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)B.bi(B.dM(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c4(b7,0,!1,b3)
a0=B.c4(b7,0,!1,b3)
k.a7(0)
j.a7(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.bc9(t)*(1+t.CW))
a4=b2.aFa(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cg1(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bYM(e,a0,b8)
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
bYM(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c4(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.c4(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bVo(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aFa(o)/a1.bc9(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.AY(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bNf(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bjX(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uR(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.h.D(o.db-h,0,24)
else o.cy=A.h.D(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.uR(o,"The "+$.r0().h(0,n).b+" got "+A.h.a1(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uR(o,"More than 1.5 amps went through the "+$.r0().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uR(o,"The regulator had to turn "+A.h.a1(o.cy,1)+" V into heat while "+A.h.S(i*1000)+" mA flowed. That is "+A.h.a1(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uR(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.B4.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.r0().h(0,n).b
l=f.b
l=l===A.h.bm(l)?""+A.h.S(l):B.v(l)
g=f.c
g=g===A.h.bm(g)?""+A.h.S(g):B.v(g)
a1.uR(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.h.a1(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fz5.q(0,n)){m=o.fx>0?A.h.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.h.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uR(o,"The bulb got "+A.h.a1(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.h.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uR(o,"The LED had "+A.h.S(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.h.D(j/14,0,1)
break
case"motor":n=A.h.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.h.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uR(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.h.D(i/1,0,1)
if(!o.x&&i>1)a1.uR(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uR(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.h.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uR(o,"The capacitor was charged to "+A.h.a1(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bNf(d){return A.d.aR(this.a,new C.bTp(d))},
uR(d,e){var w
d.x=!0
d.ay=e
this.bjX(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
boC(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a7(0)},
aLA(d){var w=d.b
return D.aWy.q(0,w)||D.B4.am(0,w)||w==="buck"||w==="regulator"},
blr(d){var w,v=!0
if(!this.Nt(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.B4.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
WS(d,e){var w=this.b
return new B.X(w,new C.bTJ(d,e),B.T(w).k("X<1>")).gI(0)},
rP(d){var w,v
if(d.x)return!1
w=d.b
if(D.B4.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bjs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.r0().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aLA(d)||i.rP(d))return null
w=i.WS(d,0)
v=i.WS(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("X<1>")
s=B.B(new B.X(u,i.gd0k(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.h.bm(r)?""+A.h.S(r):B.v(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.h.a1(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.B4.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.NF("battery"),o=J.aN(t.a),t=new B.eT(o,t.b);t.B();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.WS(n,0)+i.WS(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.NF("switch"),o=J.aN(t.a),t=new B.eT(o,t.b);t.B();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.r0().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.AY(k))return"The "+$.r0().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.h.a1(k.cx,2)+" amps, but it can only give about "+A.h.a1(i.AY(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aR(u,new C.bTx(i,d))
h=q.b
h=h===A.h.bm(h)?""+A.h.S(h):B.v(h)
u=A.h.a1(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.h.a1(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.h.a1(Math.abs(d.dy),1)+" V). Try a bigger battery."},
NF(d){var w=this.a
return new B.X(w,new C.bTA(d),B.T(w).k("X<1>"))},
aLb(d){return this.NF(d).aR(0,new C.bTz(0.35))},
qw(d,e){return A.d.aR(this.a,new C.bTy(e))}}
C.alz.prototype={
a5(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.U()
w=B.L()
w.r=F.nV.gp(0)
c0.aE(new B.a5(0,0,b8,b9),w)
w=C.ion(c1)
v=$.hZE()
if(A.n.F(w.length,2)!==0)B.bi(B.dM('"points" must have an even number of values.',b5))
u=c0.b
if(u!=null)u.oA(v)
t=v.nk()
v=c0.c
v.drawPoints($.i_y()[0],w,t)
t.delete()
for(w=b4.b,u=w.b,s=u.length,r=b4.f,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){p=u[q]
o=p.a
n=o.c
m=p.b===0?-1:1
l=D.mN.am(0,o.b)?(o.ch-1)*38:0
o=o.d
k=p.c
j=k.c
i=p.d===0?-1:1
h=D.mN.am(0,k.b)?(k.ch-1)*38:0
b4.cPk(c0,new B.m(n*b6+m*(42+l),o*b7),new B.m(j*b6+i*(42+h),k.d*b7),p,p===r)}u=b4.d
if(u!=null&&b4.e!=null){g=C.i3H(u.a,u.b,c1)
u=b4.e
u.toString
$.U()
s=B.L()
s.r=A.ac.gp(0)
s.c=3
s.d=A.bH
c0.ah(g,u,s)}for(u=w.a,s=u.length,r=b4.c,o=b4.r,n=x.v,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){f=u[q]
m=f.c*b6
l=f.d*b7
if(f.Q>0){k=Math.sin(w.d*30)
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=F.O0.j(A.h.D(f.Q*0.45,0,0.6)).gp(0)
j.y=A.DB
c0.O(new B.m(m,l),46+14*k,j)}e=o.h(0,f.a)
if(e==null)e=1
J.bs(v.save())
v.translate(m,l)
k=A.h.D(A.n2.aA(0,A.h.D(e,0,1)),0.01,1.4)
v.scale(k,k)
b4.cr6(c0,f,f===r)
v.restore()
k=f.b
if((k==="battery"||k==="solar"||k==="crank"||k==="turbine")&&!f.x&&f.cx>w.AY(f)){j=m+0
i=l+-40
h=Math.sin(w.d*10)
d=$.U().r
a0=B.a([],n)
a1=new B.aJ(d,A.ak,b5,b5,a0)
a2=i-13
a0.push(new B.aZ(j,a2))
a1.ac()
a3=j+13
a4=i+10
a5=new B.aq(a3,a4)
a0.push(a5)
a6=a1.f
if(a6!=null)a5.aj(a6)
a1.ac()
a5=j-13
a6=new B.aq(a5,a4)
a0.push(a6)
a7=a1.f
if(a7!=null)a6.aj(a7)
a1.ac()
a6=new B.bz()
a0.push(a6)
a0=a1.f
if(a0!=null)a6.aj(a0)
a1.ac()
a0=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a0.r=A.aC.j(0.65+0.35*h).gp(0)
c0.af(a1,a0)
a0=B.a([],n)
d=new B.aJ(d,A.ak,b5,b5,a0)
a0.push(new B.aZ(j,a2))
d.ac()
h=new B.aq(a3,a4)
a0.push(h)
a1=d.f
if(a1!=null)h.aj(a1)
d.ac()
h=new B.aq(a5,a4)
a0.push(h)
a1=d.f
if(a1!=null)h.aj(a1)
d.ac()
h=new B.bz()
a0.push(h)
a0=d.f
if(a0!=null)h.aj(a0)
d.ac()
h=new B.ar(A.V,A.R,A.X,A.Y,A.W)
h.b=A.ae
h.c=1.6
h.r=A.c.gp(0)
c0.af(d,h)
b4.lN(c0,"!",new B.m(j+-3,i+-8),A.c,14)}if(!f.x)j=(D.aWy.q(0,k)||D.B4.am(0,k)||k==="buck"||k==="regulator")&&!w.rP(f)&&w.WS(f,0)+w.WS(f,1)>0
else j=!1
if(j){m+=0
l+=-40
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=A.as.gp(0)
c0.O(new B.m(m,l),10,j)
b4.lN(c0,"!",new B.m(m+-3,l+-8),A.v,14)}for(a8=0;a8<2;++a8){m=f.c
l=a8===0
j=l?-1:1
i=D.mN.am(0,k)?(f.ch-1)*38:0
i=m*b6+j*(42+i)
j=f.d*b7
a9=new B.m(i,j)
$.U()
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=F.nV.gp(0)
c0.O(a9,7,m)
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.b=A.ae
m.c=2.4
m.r=(l&&w.blr(f)?A.c3:A.ac).gp(0)
c0.O(a9,6,m)
if(l&&w.blr(f))b4.lN(c0,"+",new B.m(i+-4,j+-22),A.c3,13)}}for(v=w.f,s=v.length,q=0;q<v.length;v.length===s||(0,B.I)(v),++q){b0=v[q]
r=b0.a*b6+b0.c
o=b0.b*b7+b0.d
b1=new B.m(r,o)
b2=A.h.D(b0.r/0.8,0,1)
n=B.ap(M.ON,F.a13,b2)
n.toString
m=b0.f
$.U()
l=new B.ar(A.V,A.R,A.X,A.Y,A.W)
l.r=n.gp(0)
l.c=2.4
l.d=A.bH
c0.ah(b1,new B.m(r-b0.e*0.035,o-m*0.035),l)
l=new B.ar(A.V,A.R,A.X,A.Y,A.W)
l.r=n.j(0.35*b2).gp(0)
l.y=A.PX
c0.O(b1,4.5*b2+1,l)}if(A.d.aR(u,new C.bNL())){b3=A.d.cH(u,0,new C.bNM())
$.U()
b7=B.L()
b7.r=D.blz.j(0.05+0.09*b3*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c0.aE(new B.a5(0,0,b8,b9),b7)
b7="short|"+B.v(b6)
a9=$.aRI.h(0,b7)
if(a9==null){a9=B.h2(b5,A.cK,b5,b5,b5,D.fKj,A.a8,A.cb,b5,A.e6,A.cc)
a9.nK(b6-24)
$.aRI.n(0,b7,a9)}a9.a5(c0,new B.m(12,10))}},
lN(d,e,f,g,h){var w,v=null,u=e+"|"+g.m()+"|"+B.v(h)
if($.aRI.a>300)$.aRI.a7(0)
w=$.aRI.h(0,u)
if(w==null){w=B.h2(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,g,v,v,v,v,v,v,v,v,h,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),e),A.a8,A.cb,v,A.e6,A.cc)
w.eJ()
$.aRI.n(0,u,w)}w.a5(d,f)},
cPk(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aJ($.U().r,A.ak,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hWv(a0,a1,a2)
e.E(new B.cn(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.O0,A.h.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ap(A.aH,A.aQ,A.h.D(r*1.2,0,1))
u.toString
o=u}else o=A.bl
u=B.L()
u.b=A.ae
u.c=a3?7:5
u.d=A.bH
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.L()
u.b=A.ae
u.c=2.4
u.d=A.bH
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.ann(new B.ve(B.A_(e),!1,B.a([],x.l))).gH(0)
m=40+A.h.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.jZ()
j=t[u].b
j===$&&B.d()
if(!(k<j.a.length()/22))break
j=s.d
v.jZ()
i=t[u].b
i===$&&B.d()
i=A.h.F(k*22+j*m*l,i.a.length())
v.jZ()
j=t[u].b
j===$&&B.d()
j=j.a.length()
v.jZ()
h=t[u].b
h===$&&B.d()
g=A.h.F(i+j,h.a.length())
v.jZ()
f=t[u].X6(g)
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
a0f(d,e,f,g){var w,v,u,t
$.U()
w=B.L()
v=g?A.aW:A.a5
u=g?A.b0:A.a9
t=B.ap(e,A.v,0.3)
t.toString
w.san(new B.a6(v,u,A.w,B.a([e,f,e,t],x.O),A.Jw,null).az(0,d))
return w},
b1W(d,e,f){return this.a0f(d,e,f,!0)},
cbm(d,e){return this.a0f(d,A.bl,A.hX,e)},
akZ(d,e){var w,v,u
$.U()
w=B.L()
w.san(D.eRN.az(0,B.c0(e,4.2)))
d.O(e,4.2,w)
w=e.a6(0,D.eGW)
v=e.a6(0,D.eH5)
u=B.L()
u.r=A.cU.gp(0)
u.c=1.2
d.ah(w,v,u)},
cr6(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=4294626325,b5=4286331629,b6=4287322667,b7=4293870660,b8=$.U(),b9=B.L()
b9.san(D.ccx.az(0,D.fvd))
b9.c=3.4
b9.d=A.bH
w=B.L()
w.r=A.v.j(0.45).gp(0)
w.y=O.p1
c0.c3(D.fv2,w)
if(c2){w=B.bx(D.fvb,A.k5)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c0.aq(w,v)}u=C.hAp(c1)
c0.ah(new B.m(-u,0),D.eIt,b9)
c0.ah(D.eFA,new B.m(u,0),b9)
t=c1.x
w=c1.b
s=D.mN.am(0,w)&&c1.ch!==1
if(s){J.bs(c0.c.save())
c0.bW(0,c1.ch)}switch(w){case"battery":b2.bJX(c0,c1)
break
case"solar":r=B.bx(D.fv4,A.jL)
c0.aq(r,b2.a0f(new B.a5(r.a,r.b,r.c,r.d),A.d1,A.bP,!1))
b8=B.L()
w=B.ap(D.bpD,A.di,0.25+0.55*c1.f)
w.toString
v=B.ap(D.bzt,A.m1,0.3+0.4*c1.f)
v.toString
b8.san(new B.a6(A.aw,A.aD,A.w,B.a([w,v],x.O),b3,b3).az(0,D.abT))
c0.aE(D.abT,b8)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b8=-34+p*68/6
c0.ah(new B.m(b8,-18),new B.m(b8,18),q)}for(p=1;p<4;++p){b8=-18+p*9
c0.ah(new B.m(-34,b8),new B.m(34,b8),q)}for(p=0;p<6;++p){b8=-34+(p+0.5)*68/6
$.U()
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=A.cG.j(0.5).gp(0)
w.c=0.6
c0.ah(new B.m(b8,-18),new B.m(b8,18),w)}b8=new B.aJ($.U().r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-34,18))
b8.E(new B.aq(-6+40*c1.f,-18))
b8.E(new B.aq(4+40*c1.f,-18))
b8.E(new B.aq(-24,18))
b8.E(new B.bz())
w=B.L()
w.r=A.c.j(0.1+0.22*c1.f).gp(0)
c0.af(b8,w)
w=c1.f
b8=B.L()
b8.r=A.eL.j(0.9).gp(0)
c0.O(D.eFE,4+4*w,b8)
break
case"crank":o=B.bx(D.fuP,A.h5)
c0.aq(o,b2.b1W(new B.a5(o.a,o.b,o.c,o.d),A.bz,A.bQ))
b8=B.L()
b8.san(D.aUB.az(0,B.c0(A.J,12)))
c0.O(A.J,12,b8)
n=new B.m(Math.cos(c1.y)*22,Math.sin(c1.y)*22)
b8=B.L()
b8.r=A.cG.gp(0)
b8.c=5
b8.d=A.bH
c0.ah(A.J,n,b8)
b8=B.L()
b8.san(D.eS9.az(0,B.c0(n,7)))
c0.O(n,7,b8)
b2.akZ(c0,D.eIm)
b2.akZ(c0,D.eFo)
break
case"turbine":b8=b8.r
w=x.v
v=new B.aJ(b8,A.ak,b3,b3,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bz())
m=B.L()
m.r=A.bP.gp(0)
c0.af(v,m)
for(v=c0.c,l=0;l<3;++l){m=c1.y
J.bs(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aJ(b8,A.ak,b3,b3,m)
m.push(new B.aZ(0,-2))
k.ac()
j=new B.cn(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.cn(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.bz()
m.push(j)
m=k.f
if(m!=null)j.aj(m)
k.ac()
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=A.c.gp(0)
c0.af(k,m)
v.restore()}b8=B.L()
b8.san(D.eRQ.az(0,B.c0(A.J,4.5)))
c0.O(A.J,4.5,b8)
break
case"switch":o=B.bx(D.fuX,A.pp)
b8=B.L()
b8.san(D.awd.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,b8)
b2.akZ(c0,D.VP)
b2.akZ(c0,D.aPj)
h=c1.w?D.aPj:H.aP9
b8=B.L()
b8.r=A.ax.gp(0)
b8.c=6
b8.d=A.bH
c0.ah(D.VP,h,b8)
b8=B.L()
b8.r=(c1.w?A.bf:A.bP).gp(0)
b8.c=4
b8.d=A.bH
c0.ah(D.VP,h,b8)
b8=B.l1(D.VP,h,0.85)
b8.toString
w=B.L()
w.r=A.aC.gp(0)
c0.O(b8,5,w)
break
case"fuse":g=B.bx(D.aVq,D.aUG)
b8=B.L()
b8.r=A.fC.j(0.25).gp(0)
c0.aq(g,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.aE.gp(0)
c0.aq(g,b8)
if(!t){b8=B.L()
b8.c=1.6
b8.r=B.ap(A.bP,A.cX,c1.fx).gp(0)
c0.ah(D.aPF,D.aPh,b8)}else{b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.aPF,D.eIR,b8)
b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.eGr,D.aPh,b8)
b8=B.L()
b8.r=A.e0.gp(0)
c0.O(A.J,6,b8)}for(f=0;f<2;++f){e=B.c1(new B.m(M.hs[f]*22,0),20,9)
c0.aq(B.bx(e,A.ht),b2.a0f(e,A.de,A.nP,!0))}break
case"pot":b8=B.L()
b8.san(D.eS0.az(0,B.c0(A.J,21)))
c0.O(A.J,21,b8)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b8=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ar(A.V,A.R,A.X,A.Y,A.W)
k.r=A.aE.gp(0)
k.c=1.2
c0.ah(new B.m(b8*18,w*18),new B.m(v*22,m*22),k)}b8=B.L()
b8.san(D.eRO.az(0,B.c0(A.J,13)))
c0.O(A.J,13,b8)
a0=2.356194490192345+c1.f*3.141592653589793*1.5
b8=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.L()
k.r=A.aQ.gp(0)
k.c=3
k.d=A.bH
c0.ah(new B.m(b8*3,w*3),new B.m(v*12,m*12),k)
break
case"resistor":a1=B.bx(D.aVq,D.aUG)
b8=B.L()
b8.san(D.cg4.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=x.O
a2=B.J([47,B.a([B.b0(b4),B.b0(b5),A.v],b8),100,B.a([B.b0(b6),A.v,B.b0(b6)],b8),220,B.a([B.b0(b7),B.b0(b7),B.b0(b6)],b8),470,B.a([B.b0(b4),B.b0(b5),B.b0(b6)],b8),1000,B.a([B.b0(b6),A.v,B.b0(b7)],b8)],x.i,x.bF)
a3=a2.h(0,c1.r)
if(a3==null){b8=a2.h(0,100)
b8.toString
a3=b8}for(p=0;p<3;++p){b8=-14+p*9
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=a3[p].gp(0)
c0.aE(new B.a5(b8,-9,b8+4.5,9),w)}b8=B.L()
b8.r=A.aQ.gp(0)
c0.aE(D.fvp,b8)
b8=c1.r
b2.lN(c0,b8>=1000?"1k\u03a9":""+A.h.S(b8)+"\u03a9",D.eHS,A.ac,10)
break
case"bulb":w=c1.fx
if(w>0){v=B.L()
v.r=A.eL.j(0.55*w).gp(0)
v.y=A.DB
c0.O(H.we,34,v)}o=B.c1(D.eEj,12,18)
c0.aq(B.bx(o,A.ht),b2.a0f(o,A.bl,A.dW,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.r=A.dH.gp(0)
v.c=1
c0.ah(new B.m(-9,w),new B.m(9,w),v)}w=B.L()
if(t)v=A.GT
else{v=B.ap(A.dW,A.i_,c1.fx)
m=c1.fx
v=v.j(0.25+0.7*m)}if(t)m=A.He
else{m=B.ap(A.d1,A.eL,c1.fx)
m.toString}w.san(new B.bV(A.n0,0.5,A.w,b3,0,B.a([v,m.j(0.18+0.5*c1.fx)],x.O),b3,b3).az(0,B.c0(A.um,17)))
c0.O(A.um,17,w)
w=B.L()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c0.O(A.um,17,w)
b8=b8.r
w=x.v
m=new B.aJ(b8,A.ak,b3,b3,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.cn(-12,-4,-9,0))
v=B.L()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c0.af(m,v)
v=B.L()
v.r=A.cH.gp(0)
v.c=1.4
c0.ah(D.eIL,D.eIN,v)
v=B.L()
v.r=A.cH.gp(0)
v.c=1.4
c0.ah(D.eGk,D.eGn,v)
w=B.a([],w)
a4=new B.aJ(b8,A.ak,b3,b3,w)
a4.E(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b8=(l&1)===0?-6:1
b8=new B.aq(-4+a5*8/6,-2+b8)
w.push(b8)
v=a4.f
if(v!=null)b8.aj(v)
a4.ac()}$.U()
b8=B.L()
b8.b=A.ae
b8.c=1.8
if(t)w=A.bb
else{w=B.ap(A.d1,D.bqN,c1.fx)
w.toString}b8.r=w.gp(0)
c0.af(a4,b8)
break
case"led":w=c1.fx
if(w>0){v=B.L()
v.r=A.aC.j(0.6*w).gp(0)
v.y=D.bNK
c0.O(A.um,30,v)}w=B.L()
w.r=A.dW.gp(0)
w.c=2.4
c0.ah(D.eIT,D.eIS,w)
w=B.L()
w.r=A.dW.gp(0)
w.c=2.4
c0.ah(D.eGt,D.eGs,w)
b8=b8.r
w=x.v
a6=new B.aJ(b8,A.ak,b3,b3,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.cn(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bz())
v=B.L()
if(t)m=A.jB
else{m=B.ap(A.eE,D.bsz,c1.fx)
m.toString}if(t)k=A.l9
else{k=B.ap(A.kK,A.aC,c1.fx)
k.toString}v.san(new B.a6(A.aw,A.aD,A.w,B.a([m,k],x.O),b3,b3).az(0,D.fuh))
c0.af(a6,v)
v=B.L()
v.b=A.ae
v.c=1.2
v.r=A.jX.gp(0)
c0.af(a6,v)
v=B.L()
v.r=A.ex.gp(0)
c0.aE(D.fun,v)
w=new B.aJ(b8,A.ak,b3,b3,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.cn(-6,-12,0,-15))
b8=B.L()
b8.b=A.ae
b8.c=2
b8.r=A.c.j(0.5).gp(0)
c0.af(w,b8)
break
case"motor":a7=new B.a5(-28,-14,20,14)
c0.aq(B.bx(a7,A.iE),b2.b1W(a7,A.an,A.bo))
b8=B.L()
b8.r=A.cx.gp(0)
c0.aE(D.ftP,b8)
b8=B.L()
b8.r=A.cG.gp(0)
c0.aE(D.ftR,b8)
b8=c0.c
J.bs(b8.save())
b8.translate(31,0)
for(l=0;l<3;++l){J.bs(b8.save())
b8.rotate((c1.y+l*2.094)*180/3.141592653589793,0,0)
w=B.c1(H.aP4,15,7)
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.r=A.cX.j(0.9).gp(0)
c0.c3(w,v)
b8.restore()}w=B.L()
w.r=A.ax.gp(0)
c0.O(A.J,3,w)
b8.restore()
b2.lN(c0,"M",D.eIl,A.ax,14)
break
case"buzzer":a8=B.c1(A.J,42,42)
b8=B.L()
b8.san(D.eS4.az(0,a8))
c0.c3(a8,b8)
b8=B.L()
b8.r=A.v.gp(0)
c0.O(A.J,6,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.aT.gp(0)
c0.O(A.J,6,b8)
b2.lN(c0,"+",D.eIe,A.ac,12)
for(b8=b2.b,l=1;l<=3;++l){w=c1.fx
v=w>0?A.h.F(b8.d*14,5):0
v=B.c0(A.J,24+l*5+v)
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.b=A.ae
m.c=2
m.r=A.c6.j(w*(1-l*0.22)).gp(0)
c0.cR(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bx(D.fuT,A.iE)
w=B.L()
w.san(D.cdB.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,w)
w=B.a([],x.v)
a9=new B.aJ(b8.r,A.ak,b3,b3,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b8=(l&1)===0?-10:10
a5=l+1
b8=new B.cn(-24+l*6+3,b8,-24+a5*6,0)
w.push(b8)
v=a9.f
if(v!=null)b8.aj(v)
a9.ac()}b8=c1.fx
if(b8>0.1){$.U()
w=B.L()
w.b=A.ae
w.c=10
w.r=D.bry.j(0.5*b8).gp(0)
w.y=A.ld
c0.af(a9,w)}$.U()
b8=B.L()
b8.b=A.ae
b8.c=3.2
b8.d=A.bH
b8.r=B.ap(A.mq,Ah.zl,c1.fx).gp(0)
c0.af(a9,b8)
break
case"capacitor":a7=new B.a5(-16,-22,16,18)
b8=B.bx(a7,A.iE)
w=B.L()
w.san(D.aw_.az(0,a7))
c0.aq(b8,w)
w=B.L()
w.r=A.bP.gp(0)
c0.aE(D.fux,w)
for(p=0;p<4;++p)b2.lN(c0,"\u2212",new B.m(-14,-18+p*9),A.ax,11)
b0=new B.a5(-16,-24,16,-17)
c0.aq(B.bx(b0,A.ht),b2.cbm(b0,!1))
b8=38*c1.fx
w=18-b8
$.U()
v=B.L()
v.r=A.bf.j(0.5).gp(0)
c0.aE(new B.a5(-3,w,11,w+b8),v)
b2.lN(c0,"1F",H.we,A.c,11)
break
case"radio":a1=B.bx(D.abT,A.h5)
b8=B.L()
b8.san(D.cgj.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.nP.j(0.6).gp(0)
c0.aq(a1,b8)
b8=B.bx(D.fuU,A.jL)
w=B.L()
w.r=A.e7.gp(0)
c0.aq(b8,w)
for(p=0;p<6;++p){b8=-10+p*4.4
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=A.mq.gp(0)
w.c=1.4
c0.ah(new B.m(-27,b8),new B.m(-3,b8),w)}b8=B.L()
b8.r=(c1.fx>0?A.hb:A.oL).gp(0)
c0.aE(D.ftW,b8)
if(c1.fx>0){b8=8+A.h.F(b2.b.d*7,18)
w=B.L()
w.r=A.bC.gp(0)
w.c=1.6
c0.ah(new B.m(b8,-13),new B.m(b8,-3),w)}b8=B.L()
b8.san(D.aUB.az(0,B.c0(D.aaP,6)))
c0.O(D.aaP,6,b8)
b8=B.L()
b8.r=A.nP.gp(0)
c0.O(D.eFz,4,b8)
b8=B.L()
b8.r=A.dW.gp(0)
b8.c=1.8
c0.ah(D.eFu,D.aPo,b8)
if(c1.fx>0)for(b8=b2.b,l=1;l<=2;++l){w=B.c0(D.aPo,4+l*5+A.h.F(b8.d*8,5))
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.b=A.ae
v.c=1.4
v.r=A.oS.j(0.7).gp(0)
c0.cR(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bx(D.fv3,A.iE)
v=B.L()
v.r=M.nj.gp(0)
c0.aq(w,v)
b1=B.bx(D.fv0,A.ht)
if(c1.fx>0&&!c1.x){b8=c0.c
J.bs(b8.save())
b8.clipRRect(B.nn(b1),$.n_(),!0)
b8.translate(-33,-21)
K.h9x(c0,D.fBV,c1.at,b2.b.d,c1.ax,-1,b3,b3)
b8.restore()
b8=B.L()
b8.r=A.bf.gp(0)
c0.O(D.eFL,1.6,b8)}else{w=B.L()
w.r=D.x1.gp(0)
c0.aq(b1,w)
b8=new B.aJ(b8.r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-33,-21))
b8.E(new B.aq(-10,-21))
b8.E(new B.aq(-33,0))
b8.E(new B.bz())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c0.af(b8,w)}b8=B.L()
b8.r=A.bz.gp(0)
c0.aE(D.fum,b8)
break}C.iJb(c0,c1,b2.b.d,b2.gcg2())
if(t)b2.lN(c0,"\u2716",D.eIV,A.aC,14)
if(s)c0.c.restore()},
aTS(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.bNK(),n=e.d,m=e.b,l=n-m,k=e.a,j=m+l*0.06,i=k+l*0.16,h=new B.a5(k,j,i,j+l*0.88)
j=l*0.08
k=B.bx(h,new B.aQ(j,j))
$.U()
w=B.L()
w.san(o.$2(h,D.dki))
d.aq(k,w)
i-=0.5
w=l*0.2
k=e.c-w
v=new B.a5(i,m,k,n)
u=k-i
t=i+u*0.66
s=B.L()
s.san(o.$2(v,D.dJC))
d.aE(new B.a5(i,m,t,n),s)
s=B.L()
s.san(o.$2(v,D.diq))
d.aE(new B.a5(t,m,k,n),s)
k-=0.5
s=m+j
n=l*0.12
r=k+n
q=new B.a5(k,s,r,s+l*0.84)
s=B.L()
s.san(o.$2(q,D.aFs))
d.aE(q,s)
r-=0.5
s=m+l*0.3
p=new B.a5(r,s,r+l*0.1,s+l*0.4)
s=l*0.05
s=B.bx(p,new B.aQ(s,s))
r=B.L()
r.san(o.$2(p,D.aFs))
d.aq(s,r)
r=i+2
s=m+l*0.18
o=B.L()
o.r=A.c.j(0.18).gp(0)
d.aE(new B.a5(r,s,r+(u-4),s+j),o)
if(f){o=l*0.42
this.lN(d,"+",new B.m(t+u*0.08,m+n),A.dl,o)
if(g!=null)this.lN(d,g,new B.m(i+u*0.12,m+w),A.bP,o)}},
bN1(d,e,f){return this.aTS(d,e,!0,f)},
bN0(d,e,f){return this.aTS(d,e,f,null)},
bJX(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a6.e,a4=B.v(a3===A.h.bm(a3)?A.h.S(a3):a3)+"V"
if(a3<=2){a2.bN1(a5,D.fuS,a4)
a2.lN(a5,"\u2212",D.eIv,A.ac,12)
a2.lN(a5,"+",D.eFp,A.aQ,12)
$.U()
w=B.L()
w.r=A.by.gp(0)
a5.aE(D.fuG,w)
w=a6.as
v=B.L()
v.r=B.ap(A.aC,A.bf,w).gp(0)
a5.aE(new B.a5(-22,15,-22+44*w,19),v)
if(a6.as<=0.02)a2.lN(a5,"FLAT",D.eI1,A.c3,9)}else if(a3<=4.5){u=a3>3?3:2
t=u*13+6
w=-t/2
v=w+t
s=new B.a5(-31,w,31,v)
r=B.bx(s,A.jL)
$.U()
q=B.L()
q.san(D.cfJ.az(0,s))
a5.aq(r,q)
for(r=w+3,p=0;p<u;++p){q=r+p*13
a2.bN0(a5,new B.a5(-27,q,25,q+11.5),!1)}for(q=r+(t-6),o=0;o<2;++o){n=D.dik[o]
$.U()
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=A.dW.gp(0)
a5.aE(new B.a5(n,r,n+1.6,q),m)}a2.lN(a5,a4,new B.m(-9,v+1),A.aQ,10)
a2.lN(a5,"+",new B.m(25,w-13),A.aQ,11)}else if(a3<=9){l=new B.a5(-18,-16,18,18)
w=B.bx(l,A.ht)
v=$.U()
r=B.L()
r.san(D.cg0.az(0,l))
a5.aq(w,r)
k=new B.a5(-18,-4,18,18)
r=B.rk(k,A.ht,A.ht,A.bJ,A.bJ)
w=B.L()
w.san(D.aw_.az(0,k))
a5.aq(r,w)
j=new B.a5(-18,-16,18,-11)
w=B.rk(j,A.bJ,A.bJ,A.ht,A.ht)
r=B.L()
r.san(D.cgr.az(0,j))
a5.aq(w,r)
i=B.L()
i.san(D.eSk.az(0,D.fuq))
a5.O(D.aPJ,4,i)
r=B.a([],x.v)
h=new B.aJ(v.r,A.ak,null,null,r)
for(g=0;g<6;++g){f=g*3.141592653589793/3
w=7+Math.cos(f)*5
v=-19+Math.sin(f)*5
if(g===0){w=new B.aZ(w,v)
r.push(w)
v=h.f
if(v!=null)w.aj(v)
h.ac()}else{w=new B.aq(w,v)
r.push(w)
v=h.f
if(v!=null)w.aj(v)
h.ac()}}h.E(new B.bz())
a5.af(h,i)
$.U()
w=B.L()
w.r=A.cz.gp(0)
a5.O(D.eGA,2,w)
a2.lN(a5,"9V",D.eIY,A.c,13)
a2.lN(a5,"+",D.eHY,A.aQ,11)}else{e=new B.a5(-34,-12,34,18)
w=B.bx(e,A.ht)
$.U()
v=B.L()
v.san(D.cdw.az(0,e))
a5.aq(w,v)
d=new B.a5(-36,-18,36,-10)
v=B.bx(d,D.eSs)
w=B.L()
w.san(D.awg.az(0,d))
a5.aq(v,w)
for(g=0;g<6;++g){w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=A.ax.gp(0)
a5.O(new B.m(-14+g*5.6,-14),1.6,w)}w=B.L()
w.r=A.bu.j(0.92).gp(0)
a5.aE(D.fv1,w)
for(o=0;o<2;++o){w=D.cIK[o]
n=w.a
a0=w.b
a1=B.c1(new B.m(n,-21),7,8)
w=B.bx(a1,A.FA)
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.san(D.ce4.az(0,a1))
a5.aq(w,v)
v=B.bx(B.c1(new B.m(n,-24),3.5,9),A.FA)
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=a0.gp(a0)
a5.aq(v,w)}a2.lN(a5,"\u2212",D.eIw,A.ac,11)
a2.lN(a5,"+",D.eFk,A.aC,11)
a2.lN(a5,"12V",H.aPD,A.ax,11)}},
aD(d){return!0}}
C.nj.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a7(k)
A.d.a7(d.b)
w=B.S(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.uk(o,r,q,p)
n.auh(o,r,q,p)
k.push(n)
J.ij(s[4],new C.cxR(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.aob(m,u[1],l,u[3])}}}
C.alx.prototype={
R(){var w=x.N
return new C.aly(B.c3(2000,1,1,0,0,0,0,0),A.J,A.aB,B.S(w,x.gl),B.aR(w),$,A.bI,0,B.a([],x.X),null,null)}}
C.aly.prototype={
ahi(d){var w=this,v=w.ch
if(v!=null)v.a2(0)
w.l(new C.bNn(w,d))
w.ch=B.cD(A.mx,new C.bNo(w))},
t(){var w=this.ch
if(w!=null)w.a2(0)
w=this.db
if(w!=null)w.a2(0)
this.bzt()},
a2z(d,e){return this.coW(d,e)},
b6o(d){return this.a2z(d,!1)},
coW(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a2z=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.o6:A.zv
p=d.b
w=3
return B.b(K.hwP(s,r,p,d.ax<3.2,q,$.r0().h(0,p).b),$async$a2z)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a2z,v)},
cC3(d){var w=this,v=new B.W(Date.now(),0,!1),u=w.CW.c0(0,d.a,new C.bNp()),t=J.cK(u)
t.K(u,v)
t.bs(u,new C.bNq(v))
if(t.gI(u)>=4){t.a7(u)
t=w.db
if(t!=null)t.a2(0)
w.a3W(d)
return}if(t.gI(u)===3){t=w.db
if(t!=null)t.a2(0)
w.db=B.cD(A.j5,new C.bNr(w,u,d))}},
a2d(d){return this.cna(d)},
cna(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2d=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iKs(s,d.b,A.h.S(A.h.F(t.a.c.d*0.12,1)*100)),$async$a2d)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a2d,v)},
a3W(d){return this.czw(d)},
czw(d){var w=0,v=B.j(x.H),u=this,t
var $async$a3W=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bNl(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a3W)
case 2:return B.h(null,v)}})
return B.i($async$a3W,v)},
Z(){this.a4()
this.blB()
this.my()},
blB(){this.a.c.e=new C.bNH(this)},
mR(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.wc(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mN.h(0,s.b)
if((r==null?null:r.b)!==D.Bv)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.K(0,s.a)
q.a2z(s,!0)}}else u.X(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dI(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dI(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cW.ai()<0.5
else u=!1
if(u)G.dI(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dI(900+A.cW.aw(800),"",90,0,0.1,o)
if(A.cW.ai()<0.35)G.dI(300+A.cW.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cW.ai()<0.4
else u=!1
if(u)G.dI(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dI(330+A.n.F(110*A.h.ba(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dI((A.h.ba(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dI(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dI(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cW.ai()<0.5
else u=!1
if(u)G.dI(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dI(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dI(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.l(new C.bNI())},
bdA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.at
l=p.c
k=n===0?-1:1
j=D.mN.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b73(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dp<1>"),w=new B.dp(w,v),w=new B.bQ(w,w.gI(0),v.k("bQ<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.B();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mN.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cPl(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.a
n=this.at
m=o.c
l=p.b===0?-1:1
k=D.mN.am(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.at
m=o.c
j=p.d===0?-1:1
i=D.mN.am(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hWv(new B.m(k,n),new B.m(i,l),p)
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
ahg(){this.a.toString
this.l(new C.bMN())},
bw6(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dm2[v]
if(!A.d.aR(p.a.c.a,new C.bNJ(u,w))){o=new B.m(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A3.Bk:o
s=s?A3.Bk:o
q=t.anm(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dI(1200,"",50,0,0.3,"tri")
p.ahg()},
C(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Ua[v].a)
u=w.length
t=u>8
s=t?A.d.dw(w,0,A.n.ao(u+1,2)):w
r=t?A.d.fF(w,A.n.ao(w.length+1,2)):A.M
q=n.a.d
if(q!=null){w=B.a3(q).k("cv<1>")
w=B.B(new B.cv(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b6T(s,!0))
n.a.toString
if(t)w.push(n.b6T(r,!0))
w.push(B.E(B.cg(new C.bNG(n,q)),1))
return B.w(w,A.l,null,A.e,A.i,0,A.p)},
b6T(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.r0()
s=t.h(0,u).d.j(0.14)
r=new B.aQ(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.q(p,B.w(B.a([B.c(t.h(0,u).c,p,p,p,p,p,p,A.yl,p,p,p),B.c(t.h(0,u).b,p,1,A.a2,p,p,p,A.ox,p,p,p)],n),A.l,p,A.bc,A.i,0,A.p),A.f,p,p,new B.p(s,p,new B.bE(q,q,q,q),new B.bc(r,r,r,r),p,p,A.m),p,p,p,L.p0,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMO(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.cj(m,p,p,A.hp,p,p,A.aJ,!1),A.f,p,p,new B.p(L.CO,p,new B.bE(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.m),p,58,p,p,p,p,p,p)},
cr7(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.r0().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bN9(e,a1)
t=new C.bN8()
s=B.n(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.ac(0,A.G,r.j(0.18),A.cy,16)],x.V)
o=r.j(0.18)
n=B.n(10)
n=B.q(A.z,B.c(a1.c,d,d,d,d,d,d,A.yl,d,d,d),A.f,d,d,new B.p(o,d,d,n,d,d,A.m),d,34,d,d,d,d,d,34)
o=B.E(B.c(a1.b,d,1,A.a2,d,d,d,B.l(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.n(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.aa,o,B.aA(d,B.q(d,B.c(e.f?"Less":"About",d,d,d,d,d,d,A.Xm,d,d,d),A.f,d,d,new B.p(d,d,l,m,d,d,A.m),d,d,d,d,A.oc,d,d,d),A.y,!1,D.hPT,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bMV(e),d,d,d,d,d,d,!1,A.a4),B.aI(d,d,d,d,D.c7W,d,d,d,new C.bMW(e,a2),d,d,d,d,"Remove part",A.cp),B.aI(d,d,d,d,Ad.Eg,d,d,d,new C.bMX(e),d,d,d,d,d,A.cp)],k),A.l,d,A.e,A.i,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.c(a1.e,d,d,d,d,d,d,A.LK,d,d,d),A.cR,B.c("How it is made: "+a1.f,d,d,d,d,d,d,U.aZr,d,d,d)],k))
m.push(A.aj)
if(a2.x)m.push(D.h49)
else m.push(new B.C(A.eX,B.A(B.a([t.$2(A.h.a1(Math.abs(a2.dy),2),"VOLTS"),A.b7,t.$2(A.h.a1(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.b7,t.$2(A.h.a1(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.i,0,d,d),d))
j=e.a.c.bjs(a2)
if(j!=null){a1=(a2.x?A.aC:A.as).j(0.14)
w=B.n(10)
v=B.K((a2.x?A.aC:A.as).j(0.5),A.r,1)
m.push(new B.C(A.hA,B.q(d,B.c((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.h_X,d,d,d),A.f,d,d,new B.p(a1,d,v,w,d,d,A.m),d,d,d,d,A.ct,d,d,d),d))}if(C.hua(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.C(A.eX,new E.e6("CH "+h,a2.at===i,new C.bN0(e,a2,i),d,r,d),d))}a1=B.cb(B.A(a1,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aJ)
if(e.a.c.rP(a2)){w=F.TZ[A.n.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.aj,a1,A.at,B.c(w,d,e.f?4:1,A.a2,d,d,d,N.hI,d,d,d)],k)
if(e.a.c.rP(a2))a1.push(new E.fN(A.xw,"Open big screen",new C.bN1(e,a2),r,d))
A.d.u(m,a1)}if(D.mN.am(0,a0)&&!C.hua(a0)){a1=B.a([A.aj],k)
if(e.f||!e.a.c.rP(a2))a1.push(B.c(e.a.c.rP(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,N.hI,d,d,d))
if(e.a.c.rP(a2))a1.push(new E.fN(A.Rg,"Open the "+$.r0().h(0,a0).b,new C.bN2(e,a2),r,d))
A.d.u(m,a1)}if(D.mN.am(0,a0))A.d.u(m,B.a([A.aj,new E.fN(A.E2,"Make it bigger (or tap it 4 times)",new C.bN3(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.h.a1(a2.db,1)
if(e.a.c.rP(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.aj,B.c("Volts in: "+w+" V   \u2192   Volts out: "+A.h.a1(v,1)+" V",d,d,d,d,d,d,D.fUK,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dGt[g]
w=f===A.h.bm(f)?A.h.S(f):f
a1.push(new E.e6(B.v(w)+" V out",a2.e===f,new C.bN4(e,a2,f),d,r,d))}v.push(new B.C(A.kP,B.bW(A.bG,a1,A.bq,d,0,6),d))}if(a0==="regulator")v.push(D.hjp)
A.d.u(m,v)}if(e.a.c.Nt(a2)&&!a2.x){a1=A.h.a1(a2.cx,2)
w=A.h.a1(e.a.c.AY(a2),2)
v=e.a.c
o=v.aqZ(a2)?"   \u26a0 OVERLOADED":""
a1=B.c("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.l(d,d,v.aqZ(a2)?A.c3:A.ej,d,d,d,d,d,d,d,d,12.5,d,d,A.C,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.n(4)
o=A.h.D(a2.cx/e.a.c.AY(a2),0,1)
v=e.a.c.aqZ(a2)?A.aC:A.bf
m.push(new B.C(A.hA,B.w(B.a([a1,A.cR,B.bv(w,B.jK(A.by,d,d,5,d,o,new B.le(v,x.c)),A.ap)],k),A.B,d,A.e,A.i,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.h.S(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.C(A.hA,B.c("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fO6,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.du2[g]
w=f===1.5?"1.5 V (rechargeable)":B.v(f)+" V"
a1.push(new E.e6(w,a2.e===f,new C.bN5(e,a2,f),d,r,d))}m.push(B.bW(A.bG,a1,A.bq,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.diO[g]
w=f>=1000?"1 k\u03a9":""+A.n.S(f)+" \u03a9"
a1.push(new E.e6(w,a2.r===f,new C.bN6(e,a2,f),d,r,d))}m.push(B.bW(A.bG,a1,A.bq,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bN7(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bMY(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bMZ(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bN_(a2)))
if(a0==="crank")m.push(D.heA)
if(a0==="switch")m.push(B.c(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,N.hI,d,d,d))
return B.q(d,new B.cS(D.baY,B.cb(B.w(m,A.B,d,A.e,A.P,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.p(F.a_2,d,q,s,p,d,A.m),d,d,D.hOZ,d,D.bHV,d,d,d)}}
C.bfU.prototype={}
C.Xc.prototype={
R(){return new C.aH6(C.hAo(),new B.cB(null,x.gJ),B.aR(x.S))}}
C.aH6.prototype={
Z(){this.a4()
$.aS.cT$.push(this)
this.ahh()},
ahh(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fWx(),$async$ahh)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iJA(t.d,r)
if(s!=null){t.l(new C.e7G(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$ahh,v)},
Gn(){var w,v=this
if(!v.as)return
w=C.izp(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bJT(w)},
ji(d){if(d!==A.fY)this.Gn()},
t(){$.aS.hR(this)
this.Gn()
this.a3()},
cg4(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("X<1>")
t=new B.X(v,new C.e7P(q),u).gI(0)
s=new B.X(v,new C.e7Q(),u).gI(0)
r=new B.X(v,w.gd41(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.l(new C.e7R(q,t,s,r))}if(A.n.F(q.w,45)===0)q.Gn()
if(A.n.F(q.w,10)===0){w=q.f
$.akC()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.akC()[q.f].c.$1(q.d)){w.K(0,q.f)
C.Kg("bell",B.a([0,4,7,12],x.t),700,0.45)
q.l(new C.e7S())
q.Gn()
w=q.c
w.toString
w=B.KJ(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.c("\u2705 Challenge done: "+$.akC()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mv,p,p,p,p,p,p,p,p,p,p))}},
akb(){var w=0,v=B.j(x.H),u=this,t
var $async$akb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.e7F(u),t,null,!0,!0,x.H),$async$akb)
case 2:return B.h(null,v)}})
return B.i($async$akb,v)},
b41(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.q(w,B.V(d,f,w,w,w,18),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.fW(new B.a4(40,38,new B.am(A.a0,w,A.ab,A.f,u,w),w),w,e,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b40(d,e,f,g){return this.b41(d,e,f,g,null)},
auZ(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.q(w,B.A(B.a([B.V(d,f,w,w,w,15),A.dU,new B.d_(1,A.c9,B.c(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.bc,A.i,0,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
aiu(){var w=0,v=B.j(x.H),u=this,t
var $async$aiu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a7(t,!1).ca(B.e4(new C.e7B(u),!1,null,x.H)),$async$aiu)
case 2:t=u.e.gbo()
if(t!=null)t.blB()
if(u.c!=null)u.l(new C.e7C())
u.Gn()
return B.h(null,v)}})
return B.i($async$aiu,v)},
bN8(){var w,v,u,t,s=null,r=this.f
$.akC()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bh:A.aC
u=B.n(9)
t=B.K(L.CO,A.r,1.5)
return B.q(s,B.at(B.c(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.yp,s,s,s),s,s,s),A.f,s,D.baO,new B.p(r,s,t,u,s,s,A.m),s,s,s,s,A.fd,s,s,s)},
alj(){var w=0,v=B.j(x.H),u=this,t
var $async$alj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.nh,null,new C.e7O(u),t,!0,!0,!0,A.kA,!1,!1,x.H),$async$alj)
case 2:return B.h(null,v)}})
return B.i($async$alj,v)},
cg5(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.q(r,D.c4t,A.f,r,r,new B.p(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e7U(d),r,r,r,r,r,r,!1,A.a4),o=B.n(11)
o=B.q(r,D.bgN,A.f,r,r,new B.p(A.bt,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.m),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.w(B.a([B.A(B.a([p,A.aa,o,A.aa,B.E(B.w(B.a([D.hhi,B.c(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f1:A.hn,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.B,r,A.e,A.i,0,A.p),1),new C.aAX(s.gcmT(),r),A.ux,s.b40(A.rw,"Construction Lab: real 3D wiring, plumbing and a house",A.cX,new C.e7V(s,d)),s.b41(A.m8,"Challenges",A.aQ,s.gcEK(),s.bN8()),s.b40(A.DY,"How to play",A.aH,new C.e7W(d,e))],v),A.l,r,A.e,A.i,0,r,r),A.aj,B.A(B.a([s.auZ(A.of,"Circuits",A.bk,s.gcxn()),A.b7,s.auZ(A.p5,"Repair",A.aQ,new C.e7X(s)),A.b7,s.auZ(I.xu,"Clear",A.c3,new C.e7Y(s))],v),A.l,r,A.e,A.i,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.p(L.CO,r,new B.bE(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.m),r,r,r,r,D.bN4,r,r,r)},
C(d){var w=this,v=null
$.avl="tech"
return B.c6(v,A.c8,B.bm(!0,B.w(B.a([w.cg5(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hze(w.d,w.e,w.gcg3(),v),1)],x.p),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.aAX.prototype={
R(){return new C.bdY(null,null)}}
C.bdY.prototype={
gaBm(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.Z,null,1,null,v)
w.cU(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaBm().t()
this.bAP()},
C(d){var w=null,v=this.a.c
return B.aA(w,B.fW(new B.a4(42,42,B.ca(this.gaBm(),new C.cPG(this),w),w),w,"AI Inventor: say what you want to make",w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bdX.prototype={
a5(d,e){var w,v,u,t=null,s=e.eq(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.U()
w=B.L()
w.r=A.b2.j(0.25+0.15*o).gp(0)
w.y=O.p1
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eS_.az(0,B.c0(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.ae
v.c=2.2
v.san(new B.hg(A.z,0,6.283185307179586,A.w,D.d8a,t,new B.n7(p)).az(0,B.c0(s,r)))
d.O(s,r,v)
p=new C.cPF(d)
p.$3(s.a6(0,A.um),8+o*1.5,1)
q*=4
p.$3(s.a6(0,D.eGH),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a6(0,D.eJ1),2.6,0.5+0.5*Math.cos(q))
u=B.h2(t,A.cK,t,t,t,D.fKp,A.a8,A.cb,t,A.e6,A.cc)
u.eJ()
u.a5(d,s.a6(0,new B.m(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.aBh.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.aBi.prototype={
t(){var w,v,u
for(w=this.hi$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hh$
w===$&&B.d()
w.t()
this.bzs()}}
C.aNP.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bCV.prototype={}
C.h9.prototype={}
C.KK.prototype={
a9(){return"ScreenStyle."+this.b}}
C.mv.prototype={}
C.WW.prototype={
R(){return new C.aGX(A3.Bk,null,null)}}
C.aGX.prototype={
gacj(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.p_,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gad2(){var w=D.mN.h(0,this.a.c)
return w==null?D.aVJ:w},
t(){if(this.f){P.Dk(Y.LD)
P.bIj()}this.gacj().t()
this.bCH()},
gCm(){var w=this.gacj().y
w=w==null?null:A.n.ao(w.a,1000)
return(w==null?0:w)/1000},
P4(){var w,v=this,u=v.e
if(u==null)return null
w=F.iz[u].e
if(w===-2)return null
if(w===-1)return A.n.F(v.y+A.h.ba(Math.max(0,v.gCm()-v.z)/10),14)
return w},
KN(d){this.l(new C.e3C(this,d))},
b7p(d){this.l(new C.e3D(this,d,14))},
aFq(d){var w=this.P4()
if(w==null)w=d>0?-1:0
return this.b7p(w+d)},
cJP(d,e){if(e.a<=0||e.b<=0||this.P4()==null)return
this.l(new C.e3N(this,d,e))},
afe(){return this.c88()},
c88(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$afe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.P4()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bU(A.L,null,new C.e3B(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$afe)
case 3:if(t.c!=null&&r.a)t.b7p(q)
case 1:return B.h(u,v)}})
return B.i($async$afe,v)},
cLn(){var w=this,v=!w.f
w.l(new C.e3O(w,v))
if(v){P.Dk(Y.ad1)
P.hv1(w.gad2().b===D.y6)}else{P.Dk(Y.LD)
P.bIj()}},
cg8(){var w,v=this
if(!v.f)return
B.jJ()
v.l(new C.e3P(v))
w=v.c.L(x.q).f
w.Nh()
if(v.r)w.T(F.aXR)},
aSd(d){return B.cg(new C.e3u(this,d))},
cqw(d){var w,v=this,u=null,t=v.gCm(),s=t-v.w,r=s<1.4?new K.b1u(v.x,s):u
if(F.iz[d].e===-1){w=Math.max(0,t-v.z)
return new C.ahe(d,w,r,A.n.F(v.y+A.h.ba(w/10),14),u)}return new C.ahe(d,t,r,u,u)},
b0W(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.C(new B.R(u,0,u,0),B.A(B.a([B.V(A.kR,A.ax,w,w,w,d*0.6),new B.a4(d*0.18,w,w,w),B.c("Learn more",w,w,w,w,w,w,B.l(w,w,A.ax,w,w,w,w,w,w,w,w,d*0.48,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,w,w),w),A.nC,!0,w,w,w,w,D.hP0,w,w,w,w,w,w,this.gc87(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.nC,w,w,A.ai)},
b42(d,e,f,g){var w=null,v=B.nu(w,A.bb,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cg7(d,e,f){return this.b42(d,e,f,null)},
cyG(){var w=this,v=null,u=new C.e3L(),t=A.v.j(0.72),s=B.n(22),r=B.K(w.gad2().d.j(0.5),A.r,1),q=u.$3(D.bXI,"AD \u2212",new C.e3H(w)),p=u.$3(A.ato,"AD +",new C.e3I(w)),o=u.$5$color$on(A.kQ,"HOME",new C.e3J(w),w.gad2().d,w.e==null),n=w.e
n=n!=null&&F.iz[n].e===-1
return B.q(v,B.A(B.a([q,p,o,u.$5$color$on(A.A9,"ADS",new C.e3K(w),A.c6,n)],x.p),A.l,v,A.e,A.P,0,v,v),A.f,v,v,new B.p(t,v,r,s,v,v,A.m),v,v,D.hP6,v,A.I6,v,v,v)},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gad2(),l=o.f,k=!l||!o.r
l=l?B.aE(d,A.dL,x.w).w.r.b+26:8
w=o.cg7(A.cC,"Back to the board",new C.e3Q(d))
v=o.f
u=v?Ap.ID:A.xw
v=v?"Leave full screen":"Full screen"
v=o.b42(u,v,o.gbe3(),D.hQ5)
u=B.n(20)
t=o.e
s=m.a
r=x.p
q=new B.C(new B.R(8,l,8,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bH(A.a9,n,n,B.q(n,B.c(t==null?s:s+" \xb7 "+F.iz[t].a,n,1,A.a2,n,n,n,Ar.yf,n,n,n),A.f,n,n,new B.p(A.bb,n,n,u,n,n,A.m),n,n,n,n,A.lF,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,n,n),n)
p=m.b===D.y6?o.bPi(m):o.cu2(m)
l=o.f
w=!l
v=l?o.gb43():n
if(l){l=B.at(p,n,n,n)
u=k?1:0
r=new B.am(A.a0,n,A.b6,A.t,B.a([l,B.ao(n,B.xT(new B.dn(!k,q,n),A.b1,A.ig,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.w(B.a([q,A.aj,o.cyG(),B.E(new B.C(A.cA,B.at(p,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,A.p)
return B.c6(n,A4.a0H,B.bm(w,B.aA(A.c0,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
cg6(d){var w
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
cu2(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.ac1
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.ca(p.gacj(),new C.e3G(p,w,d,m),o)
if(n===D.ac2)v=new B.C2(D.bNJ,v,o)
n=p.cg6(n)
u=p.f?A.hO:Au.a2a
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.v,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.n(w)
r=B.a([new B.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fM(n,B.q(o,B.q(o,v,A.f,o,o,new B.p(A.v,o,o,B.n(w-3),o,o,A.m),o,o,o,o,A7.I7,o,o,o),A.f,o,o,new B.p(o,o,o,s,r,new B.a6(A.aw,A.aD,A.w,q,o,o),A.m),o,o,o,u,new B.R(t,t,t,t),o,o,o),o)},
bcG(d){var w=Date.now(),v=A.n.D(this.a.d+A.h.ba(this.gCm()*0.4),0,100),u=d.b===D.ac1,t=u?34:20,s=u?28:18
return new B.C(new B.R(t,12,s,2),B.cg(new C.e3M(new B.W(w,0,!1),v)),null)},
aza(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.v,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.q(v,B.at(B.c(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.p(v,v,v,u,D.dAQ,new B.a6(A.aw,A.aD,A.w,t,v,v),A.m),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.at,B.c(d.a,v,1,A.a2,v,v,v,D.fR9,v,v,v)],w))
return B.aA(v,B.w(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e3z(this,d),v,v,v,v,v,v,!1,A.a4)},
c5Z(d,e){return this.aza(d,e,!0)},
c5G(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aVK||o===D.Bx,m=d.d,l=B.ap(m,A.v,0.55)
l.toString
m=B.ap(m,A.kc,0.5)
m.toString
m=B.a([l,A.dD,m],x.O)
l=q.bcG(d)
w=n?190:138
v=B.n(24)
u=B.K(A.aT,A.r,1)
w=B.aA(p,B.q(p,B.bv(B.n(23),B.b4(p,p,p,new C.ahe(0,q.gCm(),p,p,p),A.hi),A.ap),A.f,p,p,new B.p(p,p,u,v,p,p,A.m),p,w,p,A.ih,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e3x(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.iz[s]
t.push(new B.cp(A.z,p,p,new B.d7(A.dn,A.z,A.f,q.c5Z(r,n?58:54),p),p))}l=B.a([l,A.aj,w,A.af,B.E(B.lj(0.92,t,v,8,12,A.vp,p,!1),1)],u)
if(o!==D.ac2){o=A.c.j(0.16)
w=B.n(28)
l.push(B.q(p,B.cg(new C.e3y(q)),A.f,p,p,new B.p(o,p,p,w,p,p,A.m),p,p,p,D.bI4,H.aqa,p,p,p))}return B.q(p,B.w(l,A.l,p,A.e,A.i,0,A.p),A.f,p,p,new B.p(p,p,p,p,p,new B.a6(A.aw,A.aD,A.w,m,p,p),A.m),p,p,p,p,p,p,p,p)},
bIx(d,e){var w=this,v=null,u=w.P4(),t=w.bcG(d),s=B.E(w.aSd(e),1),r=x.p,q=B.a([B.bS(0,B.aA(v,B.q(v,B.at(B.c(F.iz[e].a,v,v,v,v,v,v,A.LN,v,v,v),v,v,v),A.f,A.v,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e3r(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.b0W(22),v,v,v,10,8,v))
return B.q(v,B.w(B.a([t,s,new B.a4(v,38,new B.am(A.a0,v,A.ab,A.t,q,v),v)],r),A.l,v,A.e,A.i,0,A.p),A.f,A.v,v,v,v,v,v,v,v,v,v,v)},
aVg(d,e){return B.ca(this.gacj(),new C.e3w(this,e,d),null)},
bPi(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qI(t.aVg(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(q?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fM(1.5384615384615383,B.q(s,B.bv(B.n(q?20:8),t.aVg(d,q),A.ap),A.f,s,s,new B.p(s,s,s,v,u,new B.a6(A.aw,A.aD,A.w,w,s,s),A.m),s,s,s,A.aq4,new B.R(8,8,8,r),s,s,s),s)}}
C.bAW.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.U()
w=B.L()
v=this.c
u=B.ap(v,A.v,0.6)
u.toString
t=B.ap(v,A.kc,0.4)
t.toString
w.san(new B.a6(A.aw,A.aD,A.w,B.a([u,A.dD,t],x.O),null,null).az(0,new B.a5(0,0,p,o)))
d.aE(new B.a5(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ar(A.V,A.R,A.X,A.Y,A.W)
t.r=v.j(0.1).gp(0)
t.y=D.bNO
d.O(new B.m(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.ahe.prototype={
a5(d,e){var w=this
return K.MN(d,e,w.b,w.c,w.e,w.d)},
aD(d){return!0}}
C.aPD.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bzI.prototype={}
C.aaM.prototype={
C(d){var w=null
return B.c6(B.eQ(w,w,w,!0,!0,D.akW,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,I.auX,w,w,w,new C.cqK(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hqv,w,w,w,1,w,!0),D.akW,B.cj(B.a([D.eKy,B.cg(new C.cqL())],x.p),w,w,D.bJa,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.YC.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aIG(w,new B.au(A.ay,$.ay()),$,A.bI,0,B.a([],x.X),null,null)}}
C.aIG.prototype={
Z(){this.a4()
this.my()},
baw(d){var w=this.d.length
return A.n.F(A.h.ba(A.h.F(A.h.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mR(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.baw(v.f)
if(w!==v.x){v.x=w
E.mR("bell",24+A.n.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.l(new C.f4t(v))
C.Kg("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
ci6(){if(this.d.length<2)return
this.l(new C.f4p(this))},
b4H(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.l(new C.f4o(w,v))},
C(d){var w,v,u,t,s=this,r=null,q=s.gci5(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bB8(p,s.f,r),A.hi),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.w(B.a([o,new B.a4(r,40,B.at(B.c(n,r,r,r,r,r,r,D.fZj,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aEU[A.n.F(v,8)].j(0.9)
t=new B.aQ(20,20)
o.push(B.aA(r,B.q(r,B.c(p[v],r,r,r,r,r,r,D.fYv,r,r,r),A.f,r,r,new B.p(u,r,r,new B.bc(t,t,t,t),r,r,A.m),r,r,r,A.eX,A.h1,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.f4r(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.m3(A.aQ,A.fh,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.w(B.a([new E.fm(o,r,r),B.A(B.a([B.E(B.aO(r,A.M,!1,r,!0,A.t,r,B.aP(),s.e,r,r,r,r,r,2,B.bB(r,new B.b5(4,B.n(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.jP,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.am,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.f4s(s),r,!1,r,r,!1,r,!0,r,A.ad,r,r,r,r,r,r,r,r,r,r,r,A.du,!0,A.a8,r,A.ao,r,r,r,r),1),A.aa,new E.fN(A.ii,"Add",s.gci3(s),A.c,r),A.b7,new E.fN(A.oe,"Spin",q,A.bf,r)],w),A.l,r,A.e,A.i,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.bB8.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.m(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.U()
w=B.L()
w.r=D.bnc.gp(0)
d.O(g,i,w)
w=B.L()
w.b=A.ae
w.c=3
w.r=A.aQ.gp(0)
d.O(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.c0(g,f)
o=new B.ar(A.V,A.R,A.X,A.Y,A.W)
o.r=D.aEU[A.n.F(r,8)].gp(0)
d.cR(p,q,u,!0,o)
o=B.c0(g,f)
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.b=A.ae
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cR(o,q,u,!0,p)
J.bs(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.av(p,0,11)+"\u2026"
n=new B.iU(new B.eF(p,l,l,A.cV,l,l,l,l,l,l,D.fLe),A.a8,A.cb,new B.k3(1),l,l,l,l,A.cc,l,A.cK)
n.eJ()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.m(f-o-16,-p.gb4(p)/2))
i.restore()}i=B.L()
i.r=D.akx.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.ae
i.c=3
i.r=A.aQ.gp(0)
d.O(g,20,i)
m=new B.aJ(k.r,A.ak,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bz())
h=B.L()
h.r=A.c.gp(0)
d.af(m,h)
h=B.L()
h.b=A.ae
h.c=2
h.r=A.bb.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.Xk.prototype={
R(){return new C.boX($,A.bI,0,B.a([],x.X),null,null)}}
C.boX.prototype={
Z(){this.a4()
this.my()},
mR(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.Kg("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.VX(900,new C.ebo())}w.l(new C.ebp())},
b4J(d){return this.l(new C.ebj(this,d))},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aY(A.n.v(A.h.ao(m,60)),2,"0")
v=A.a.aY(A.n.v(A.n.F(A.h.cB(m),60)),2,"0")
m=B.b4(n,n,n,new C.bvL(l,A.c3,n),A.aXf)
u=B.c(w+":"+v,n,n,n,n,n,n,D.fQ4,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a4(280,280,new B.am(A.z,n,A.ab,A.t,B.a([m,B.w(B.a([u,B.c(t,n,n,n,n,n,n,D.fOX,n,n,n),A.at,B.c("Sessions done: "+o.r,n,n,n,n,n,n,A.wp,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dxl[r]
u.push(new E.e6(""+q+" min",o.d===q,new C.ebl(o,q),n,A.c3,n))}m=o.f
p=m?Ab.vI:A.fR
m=m?"Pause":"Start"
return E.m3(A.c3,A.fh,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.w(B.a([new E.fm(u,n,n),new E.fm(B.a([new E.fN(p,m,new C.ebm(o),A.bf,n),new E.fN(A.mF,"Reset",new C.ebn(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.bvL.prototype={
a5(d,e){var w,v,u,t,s=e.eq(A.J),r=e.a/2-14
$.U()
w=B.L()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.O(s,r,w)
w=B.c0(s,r)
v=B.L()
v.b=A.ae
v.c=16
v.d=A.bH
u=this.c
t=B.ap(u,A.c,0.4)
t.toString
v.san(new B.hg(A.z,-1.5707963267948966,4.71238898038469,A.w,B.a([u,t,u],x.O),null,null).az(0,B.c0(s,r)))
d.cR(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.Wv.prototype={
R(){return new C.bov($,A.bI,0,B.a([],x.X),null,null)}}
C.bov.prototype={
Z(){this.a4()
this.my()},
mR(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.UT.h(0,p.d)
w.toString
v=A.d.eL(w,new C.dVL())
u=A.h.F(p.f,v)
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
E.mR("flute",D.chd[t]+5,1400,0.35)}p.l(new C.dVM())},
gci9(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Lz("Press Start",0.5)
w=D.UT.h(0,this.d)
w.toString
v=A.d.eL(w,new C.dVG())
u=A.h.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Lz("Breathe in",0.5+0.5*A.dS.aA(0,p))
case 1:return new B.Lz("Hold",1)
case 2:return new B.Lz("Breathe out",1-0.5*A.dS.aA(0,p))
default:return new B.Lz("Hold",0.5)}}}return new B.Lz("",0.5)},
C(d){var w,v,u,t,s,r=this,q=null,p=r.gci9(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fL.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.p(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.fL.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.c(p.a,q,q,q,q,q,q,A.qG,q,q,q))
n.push(B.ao(0,B.c("Breaths: "+r.w,q,q,q,q,q,q,A.jP,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a4(300,340,new B.am(A.z,q,A.ab,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aN(D.UT.geD(D.UT));w.B();){v=w.gP(w)
o.push(new E.e6(v,r.d===v,new C.dVJ(r,v),q,A.fL,q))}w=r.e
v=w?A.vM:A.fR
w=w?"Stop":"Start"
o.push(new E.fN(v,w,new C.dVK(r),A.bf,q))
return E.m3(A.fL,A.fh,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fm(o,q,q))}}
C.aMd.prototype={}
C.Xb.prototype={
R(){return new C.boO(new B.cB(null,x.A),B.a([],x.au),A.ax,A.c)}}
C.boO.prototype={
C(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,I.pc,s,s,s,new C.e7a(t,d),s,s,s,s,"Share",s)],r),p=B.bv(B.n(18),new B.ea(B.aA(s,B.b4(s,s,s,new C.bqS(t.e,t.x,s),A.hi),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e7b(t),new C.e7c(t),s,s,s,s,s,s,s,s,s,new C.e7d(t),s,s,s,s,!1,A.a4),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.d9Z[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.GC(v,u,new C.e7e(t,v),!1,s))}u=t.r
return E.m3(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.C(A.bS,p,s),"DRAW PAD",B.w(B.a([new E.fm(o,s,s),E.jh(A.bE,""+A.h.S(u),"Brush",30,2,new C.e7f(t),u),new E.fm(B.a([new E.e6("Eraser",t.w,new C.e7g(t),A.Aa,A.bE,s),new E.fN(A.qd,"Undo",new C.e7h(t),A.c,s),new E.fN(A.et,"Clear",new C.e7i(t),A.c,s),new E.fN(A.R1,"Paper",new C.e7j(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bqS.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.U()
w=B.L()
w.r=this.c.gp(0)
d.aE(new B.a5(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=$.U()
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bH
q.e=A.dQ
q.b=A.ae
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ar(A.V,A.R,A.X,A.Y,A.W)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aJ(r.r,A.ak,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ac()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.cn(o,r,(o+k.a)/2,(r+k.b)/2)
p.push(k)
r=m.f
if(r!=null)k.aj(r)
m.ac()}r=new B.aq(A.d.gal(n).a,A.d.gal(n).b)
p.push(r)
p=m.f
if(p!=null)r.aj(p)
m.ac()
d.af(m,q)}}},
aD(d){return!0}}
C.XY.prototype={
R(){var w=x.S
return new C.aHW(B.aR(w),B.aR(w))}}
C.aHW.prototype={
Z(){this.a4()
this.awv()},
awv(){var w,v,u=this,t=x.N,s=B.bt(D.dD7,!0,t)
A.d.Eh(s)
w=x.S
v=B.T(s).c
t=B.B(B.cJ(s,0,B.dy(u.d,"count",w),v),t)
A.d.u(t,B.cJ(s,0,B.dy(u.d,"count",w),v))
A.d.Eh(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
ci4(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mR("bell",12+A.n.F(d,9),150,0.35)
s.l(new C.ezk(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.d()
t=x.H
if(w[v]===w[u])B.bM(A.nk,new C.ezl(s,v,u),t)
else{s.x=!0
B.bM(Aj.Dc,new C.ezm(s),t)}}},
C(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.d()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.c("Moves: "+r.w,q,q,q,q,q,q,A.Xt,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.n.ao(p,2)+" / "+o
o=x.p
p=B.w(B.a([new B.C(A.zG,B.A(B.a([u,B.c(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ac,q,q,q,q,q,q,q,q,q,q,q,A.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iB,A.i,0,q,q),q),B.E(B.iC(!0,q,q,A.y,new B.i_(v,8,8,1,q),new C.ezq(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.l,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.dbN[t]
o.push(new E.e6(s.b,r.d===s.a,new C.ezr(r,s),q,A.aH,q))}o.push(new E.fN(I.atn,"New game",new C.ezs(r),A.bf,q))
return E.m3(A.aH,A.fh,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fm(o,q,q))}}
C.Y9.prototype={
R(){return new C.aIj(B.a([],x.t))}}
C.aIj.prototype={
ci8(d){A.d.a7(this.d)
this.w=!0
this.b4I()},
b4I(){this.d.push(A.cW.aw(4))
this.e=0
this.a1v()},
a1v(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1v=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.l(new C.eMs(t))
s=x.H
w=3
return B.b(B.bM(A.m4,null,s),$async$a1v)
case 3:r=t.d,q=B.bt(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aYi(n)
w=7
return B.b(B.bM(new B.bh(1000*Math.max(280,600-r.length*18)),null,s),$async$a1v)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.l(new C.eMt(t))
case 1:return B.h(u,v)}})
return B.i($async$a1v,v)},
aYi(d){this.l(new C.eMq(this,d))
E.mR("marimba",D.chc[d]+5,450,0.55)
B.bM(A.HN,new C.eMr(this),x.H)},
cia(d){var w,v,u=this
if(!u.w||u.r)return
u.aYi(d)
w=u.d
v=u.e
if(w[v]!==d){G.dI(90,"",600,0,0.5,"saw")
u.l(new C.eMu(u))
return}++v
u.e=v
if(v===w.length){u.l(new C.eMv(u))
B.bM(A.hz,new C.eMw(u),x.H)}},
C(d){var w,v,u,t,s,r,q=this,p=null,o=B.c("Best: "+q.x,p,p,p,p,p,p,V.aZX,p,p,p),n=B.c(q.y,p,p,p,p,p,p,D.fZK,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aDL[v]
u=u.j(q.f===v?1:0.35)
t=new B.aQ(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.aDL[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cZ(p,p,p,p,A.b1,new B.p(u,p,new B.bE(r,r,r,r),new B.bc(t,t,t,t),s,p,A.m),A.jC,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eMx(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.C(A.ad,B.w(B.a([o,A.aj,n,A.df,new B.fM(1,B.lj(1,l,2,12,12,p,A.eb,!1),p)],m),A.l,p,A.bc,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.m3(A.bu,A.fh,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fm(B.a([new E.fN(A.fR,n,q.gci7(q),A.bf,p)],m),p,p))}}
C.Yt.prototype={
R(){return new C.bq5(new B.au(A.ay,$.ay()))}}
C.bq5.prototype={
aA6(d){return B.of(A.h.a1(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.f_P(),null)},
C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cA(B.aD(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.f_Y()
l=B.aO(m,A.M,!1,m,!0,A.t,m,B.aP(),l,m,m,m,m,m,2,B.bB(m,m,m,m,m,m,m,m,!0,new B.b5(4,B.n(16),Ae.yP),m,m,m,m,m,m,m,m,m,m,m,new B.b5(4,B.n(16),D.b9i),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.mg,"Bill amount",!0,!0,!1,m,m,m,m,D.fWX,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.am,m,m,m,m,m,A.el,m,m,m,1,m,m,!1,"\u2022",m,new C.f_U(n),m,m,m,!1,m,m,!1,m,!0,m,A.ad,m,m,m,m,m,m,m,m,m,m,m,A.aYU,!0,A.a8,m,A.ao,m,m,m,m)
k=A.bf.j(0.1)
s=B.n(20)
r=B.K(A.bf.j(0.35),A.r,1)
q=x.p
s=B.cj(B.a([l,A.bx,B.q(m,B.w(B.a([t.$2("Tip ("+A.h.S(n.e)+"%)","$"+n.aA6(w)),t.$2("Total","$"+n.aA6(v)),Aa.Pd,t.$3$big("Each of "+n.f+" pays","$"+n.aA6(u),!0)],q),A.l,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(k,m,r,s,m,m,A.m),m,m,m,m,A.bR,m,m,m)],q),m,m,A.f7,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cW5[p]
r.push(new E.e6(""+o+"%",A.h.S(n.e)===o,new C.f_V(n,o),m,A.bf,m))}l=n.f
return E.m3(A.bf,A.fh,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.w(B.a([new E.fm(r,"TIP",m),E.jh(A.aH,""+l,"People",20,1,new C.f_W(n),l),new E.fm(B.a([new E.e6("Round up",n.r,new C.f_X(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.XX.prototype={
R(){var w=B.a([3,5],x.t)
return new C.bpz(w,A.cW,$,A.bI,0,B.a([],x.X),null,null)}}
C.bpz.prototype={
Z(){this.a4()
this.my()},
mR(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.n.F(A.h.ba(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.Yv("snare",0,0.5)}u.l(new C.ey_())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hd()
u.w=t
u.x=t?0:3.141592653589793
E.mR("bell",24,400,0.5)}u.l(new C.ey0())}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bij(v,o.r>0,n))}u=B.aA(n,B.at(B.bW(A.fX,m,A.bq,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.exT(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.h.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.de,A.r,6)
s=B.a([new B.ac(0,A.G,A.aQ.j(0.4),A.J,30)],x.V)
u=B.aA(n,B.at(B.e0(A.z,B.q(A.z,B.c(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fW5,n,n,n),A.f,n,n,new B.p(n,n,v,n,s,D.eS3,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.exU(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.w(B.a([B.c(m===0?"?":""+m,n,n,n,n,n,n,D.fKH,n,n,n),B.c("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.jP,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.exV(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.duh[r]
v.push(new E.e6(q.b,o.d===q.a,new C.exW(o,q),q.c,A.bk,n))}v=B.a([new E.fm(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.jh(A.bk,""+s,"Dice",4,1,new C.exX(o),s))}if(o.d==="num"){s=o.z
s=E.jh(A.bk,""+s,"From",100,1,new C.exY(o),s)
p=o.Q
A.d.u(v,B.a([s,E.jh(A.bk,""+p,"To",1000,2,new C.exZ(o),p)],m))}return E.m3(A.bk,A.fh,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.w(v,A.l,n,A.e,A.P,0,A.p))}}
C.bij.prototype={
C(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cW.ai()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ac(0,A.G,A.v.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dQm.h(0,A.n.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bH(s[q],p,p,B.q(p,p,A.f,p,p,A.Zv,p,18,p,p,p,p,p,18),p))
return B.eN(A.z,w,B.q(p,new B.am(A.a0,p,A.ab,A.t,t,p),A.f,p,p,new B.p(A.c,p,p,v,u,p,A.m),p,100,p,p,A.bD,p,p,100),p)}}
C.aPp.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bCR.prototype={
t(){var w,v,u
for(w=this.hi$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hh$
w===$&&B.d()
w.t()
this.bCt()}}
C.aPK.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bCX.prototype={
t(){var w,v,u
for(w=this.hi$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hh$
w===$&&B.d()
w.t()
this.bCP()}}
C.aQa.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bD6.prototype={
t(){var w,v,u
for(w=this.hi$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hh$
w===$&&B.d()
w.t()
this.bDg()}}
C.aQD.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bDf.prototype={
t(){var w,v,u
for(w=this.hi$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hh$
w===$&&B.d()
w.t()
this.bDJ()}}
var z=a.updateTypes(["P(uk)","~()","P(a6P)","az<~>()","P(Dy)","F(uk,F)","H(H,uk)","P(Du)","P(a0E)","P(adW)","P(a5H)","P(o7)","Yu()","Wu()","aaM()","Y3()","Yi()","Y4()","P(nj)","WB()","ahy(Z,F)","agl(Z,F)","~(a9<@,@>)","F(Du,Du)","o(es)","P(ahl)","P(a2V)","P(DJ)","P(aer)","P(agp)","P(ae9)","F(F,rB)","F(F,Dy)","o(rB)","~(rB,ah<o>,F)","rB?(Dy)","XX()","x(o,a2I)","P(acN)","~(Bu)","Yx()","~(y0,o,m,u,H)","~(o,uk)","Xc()","XH(Z)","OV(Z)","WW(Z,bA<H>,bA<H>)","Js(Z)","YC()","Xk()","Wv()","Xb()","XY()","Y9()","Yt()","P(rB)"])
C.fWV.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fKW.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fSV.prototype={
$1(d){var w
if(!this.a.Nt(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fSW.prototype={
$1(d){return d.x},
$S:z+0}
C.fWS.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fWT.prototype={
$1(d){var w
if(!this.a.Nt(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fWU.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.er1.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.er2.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.er3.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd2(v).Q
v.toString
w.lR(v,A.ed,A.ig)}},
$S:7}
C.ere.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.erf.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.era.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.er8.prototype={
$2(d,e){var w=this.a
w.r.push(B.cD(B.dx(0,0,0,d,0,0),new C.er9(w,this.b,e)))},
$S:1969}
C.er9.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.erb.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gYn().anm(0,u[1],u[2],u[3])
u[4].bP(0,new C.er6(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dI(700+w.e*120,"",80,0,0.25,"square")
v.l(new C.er7(w.a,v,w.f,w.r))},
$S:0}
C.er6.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:208}
C.er7.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.n.D(A.h.ba(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.erc.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gYn().aob(t,u[1],s,u[3])
G.dI(1500,"",45,0,0.25,"tri")
v=w.b
v.l(new C.er5(w.a,v,w.e,w.f))},
$S:0}
C.er5.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.n.D(A.h.ba(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.erd.prototype={
$0(){G.dI(300,"",360,-1.2,0.3,"square")
var w=this.a
w.l(new C.er4(w,this.b))},
$S:0}
C.er4.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eri.prototype={
$0(){var w=this.a
return w.l(new C.erh(w))},
$S:0}
C.erh.prototype={
$0(){return this.a.at=!0},
$S:0}
C.erj.prototype={
$0(){var w=this.a
return w.l(new C.erg(w))},
$S:0}
C.erg.prototype={
$0(){return this.a.at=!1},
$S:0}
C.erk.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.R4()},
$S:0}
C.erl.prototype={
$0(){return this.a.a_t(this.b)},
$S:0}
C.erm.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.R4():w.b0g()},
$S:2}
C.ern.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.R4():w.b0g()},
$S:0}
C.eGz.prototype={
$2(d,e){return d+e},
$S:1970}
C.eGT.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.eGS(w,d))},
$S:576}
C.eGS.prototype={
$0(){var w=B.aK(J.t(this.b,"unlocked"))
w=w==null?null:A.h.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eGU.prototype={
$0(){},
$S:0}
C.eGV.prototype={
$0(){},
$S:0}
C.eGB.prototype={
$0(){return this.a.l(new C.eGA(this.b,this.c))},
$S:0}
C.eGA.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eGq.prototype={
$1(d){return this.a.cx===d},
$S:29}
C.eGr.prototype={
$1(d){return this.a.cx=d},
$S:27}
C.eGs.prototype={
$1(d){return this.a.cy===d},
$S:29}
C.eGt.prototype={
$1(d){return this.a.cy=d},
$S:27}
C.eGu.prototype={
$1(d){return this.a.db===d},
$S:29}
C.eGv.prototype={
$1(d){return this.a.db=d},
$S:27}
C.eGw.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:29}
C.eGx.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.X(0,d):w.K(0,d)},
$S:27}
C.eGy.prototype={
$0(){var w=this.a
return w.l(w.gaAH())},
$S:0}
C.eGo.prototype={
$1(d){return this.a.$1(!0)},
$S:66}
C.eGp.prototype={
$1(d){return this.a.$1(!1)},
$S:119}
C.eGn.prototype={
$1(d){return this.a.$1(!1)},
$S:141}
C.eGM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bme(o,p),n)
w=this.b
v=C.bFx("WORLD",w.a,w.c)
u=C.bFx("GRAVITY",B.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.h.S(t*100)
t=t<0.25?A.c3:A.bf
t=C.bFx("FUEL",""+s+"%",t)
s=o.r.b
r=A.h.S(s*100)
s=s>D.EB[o.db].d?A.c3:A.c
q=x.p
s=B.a([v,u,t,C.bFx("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bFx("HEIGHT",""+A.h.S(A.h.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.iB,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bLD(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.u7[w].a+".":"You landed on every world!"
v=B.a([new E.fN(A.oi,"Again",new C.eGH(o),A.c,p),new E.fN(A.p5,"Rebuild",new C.eGI(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fN(A.jH,"Next world",new C.eGJ(o),A.bf,p))
n.push(C.hOO("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(C.hOO("Crash!",o.at,A.c3,B.a([new E.fN(A.oi,"Try again",new C.eGK(o),A.bf,p),new E.fN(A.p5,"Rebuild",new C.eGL(o),A.aQ,p)],q)))
return new B.am(A.a0,p,A.b6,A.t,n,p)},
$S:62}
C.eGH.prototype={
$0(){var w=this.a
return w.l(w.gaAH())},
$S:0}
C.eGI.prototype={
$0(){var w=this.a
return w.l(new C.eGE(w))},
$S:0}
C.eGE.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eGJ.prototype={
$0(){var w=this.a
return w.l(new C.eGD(w))},
$S:0}
C.eGD.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eGK.prototype={
$0(){var w=this.a
return w.l(w.gaAH())},
$S:0}
C.eGL.prototype={
$0(){var w=this.a
return w.l(new C.eGC(w))},
$S:0}
C.eGC.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eGN.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.l(new C.eGG(v,w))},
$S:0}
C.eGG.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eGO.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eGP.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eGQ.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eGR.prototype={
$0(){var w=this.a
return w.l(new C.eGF(w))},
$S:0}
C.eGF.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dVE.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hd(B.a([C.hJt(),C.hJu()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.l0(0,B.cV(J.t(r,1)))
q.l(new C.dVD(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:40}
C.dVD.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dVe.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dVf.prototype={
$0(){return this.a.c2K(B.aV(J.t(this.b,"group")))},
$S:0}
C.dVg.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dVh.prototype={
$1(d){return A.a.aY(A.n.fu(A.n.D(A.h.S(d*255),0,255),16),2,"0")},
$S:257}
C.dVF.prototype={
$0(){return E.Yv("kick",0,0.25)},
$S:0}
C.dVi.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dVj.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dVk.prototype={
$0(){return E.Yv("kick",0,0.5)},
$S:0}
C.dVl.prototype={
$0(){return G.dI(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dVn.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.CW
if(w===2)w=1
else w=w===1?0:2
u.CW=w}else{w=this.a
v=w.ch
if(v.q(0,u))v.X(0,u)
else{v.K(0,u)
if(w.CW===2)w.CW=1}if(v.a===0&&w.CW===0)w.CW=2
u=w}if(u.cy!=null&&!A.d.aR(u.d.e,new C.dVm(u)))u.cy=null
u.id=0},
$S:0}
C.dVm.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aCL(d)},
$S:z+10}
C.dVb.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dVc.prototype={
$0(){var w=this.a
return w.l(w.gcdI())},
$S:0}
C.dVd.prototype={
$0(){return this.a.agH(null)},
$S:0}
C.dVu.prototype={
$0(){var w=this.a.as
return w==null?null:w.fh(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dVv.prototype={
$0(){return this.a.cLy(this.b.a)},
$S:0}
C.dVw.prototype={
$0(){return this.a.agH(this.b)},
$S:0}
C.dVx.prototype={
$1(d){var w=this.a
return w.l(new C.dVt(w,d))},
$S:6}
C.dVt.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dVy.prototype={
$0(){var w=this.a
return w.l(new C.dVs(w,this.b))},
$S:0}
C.dVs.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dVz.prototype={
$0(){var w=this.a
return w.l(new C.dVr(w))},
$S:0}
C.dVr.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dVA.prototype={
$0(){var w=this.a
return w.l(new C.dVq(w))},
$S:0}
C.dVq.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fh(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.N8},
$S:0}
C.dVB.prototype={
$0(){var w=this.a
return w.l(new C.dVp(w))},
$S:0}
C.dVp.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b37()
else w.p3=null},
$S:0}
C.dVC.prototype={
$0(){var w=this.a
return w.l(new C.dVo(w))},
$S:0}
C.dVo.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.cac.prototype={
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
$S:347}
C.cad.prototype={
$1(d){var w=new B.qO([],[]).ol(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:656}
C.fDX.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)&&w.h(d,1)},
$S:220}
C.fDY.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)||w.h(d,1)},
$S:220}
C.fDZ.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)!==w.h(d,1)},
$S:220}
C.fE5.prototype={
$1(d){return!J.t(d,0)},
$S:220}
C.fE6.prototype={
$1(d){var w=J.a1(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:220}
C.fE7.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:220}
C.dXk.prototype={
$1(d){return this.a.axj(0)},
$S:7}
C.dWZ.prototype={
$0(){var w=this.b
return this.a.cx=new B.O(w,B.iyO(),B.T(w).k("O<1,F>")).fH(0)},
$S:0}
C.dX1.prototype={
$1(d){return""+d},
$S:78}
C.dXl.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dWX.prototype={
$1(d){return this.a.axj(this.b)},
$S:7}
C.dWY.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aBc(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.n6(0,d,a1.mA(0.15,0.3))
u=a1.n6(0,d,a1.mA(0.15,0.62))
t=a1.n6(0,"and",a1.mA(0.48,0.46))
s=a1.n6(0,a0,a1.mA(0.82,0.46))
a1=t.a
w.push(new C.o7(v.a,a1,0))
w.push(new C.o7(u.a,a1,1))
w.push(new C.o7(a1,s.a,0))
break
case 1:v=a1.n6(0,d,a1.mA(0.12,0.25))
u=a1.n6(0,d,a1.mA(0.12,0.65))
r=a1.n6(0,"xor",a1.mA(0.46,0.25))
q=a1.n6(0,"and",a1.mA(0.46,0.65))
p=a1.aBb(0,a0,a1.mA(0.82,0.25),0)
o=a1.aBb(0,a0,a1.mA(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.o7(a1,n,0))
m=u.a
w.push(new C.o7(m,n,1))
l=q.a
w.push(new C.o7(a1,l,0))
w.push(new C.o7(m,l,1))
w.push(new C.o7(n,p.a,0))
w.push(new C.o7(l,o.a,0))
break
case 2:k=a1.n6(0,"clock",a1.mA(0.15,0.4))
j=a1.n6(0,"not",a1.mA(0.45,0.65))
s=a1.n6(0,a0,a1.mA(0.82,0.3))
i=a1.n6(0,"buzzer",a1.mA(0.82,0.65))
a1=k.a
w.push(new C.o7(a1,s.a,0))
n=j.a
w.push(new C.o7(a1,n,0))
w.push(new C.o7(n,i.a,0))
break
default:h=a1.n6(0,d,a1.mA(0.12,0.25))
g=a1.n6(0,d,a1.mA(0.12,0.7))
f=a1.n6(0,"nor",a1.mA(0.5,0.25))
e=a1.n6(0,"nor",a1.mA(0.5,0.7))
s=a1.n6(0,a0,a1.mA(0.86,0.25))
a1=f.a
w.push(new C.o7(g.a,a1,0))
n=e.a
w.push(new C.o7(n,a1,1))
w.push(new C.o7(h.a,n,0))
w.push(new C.o7(a1,n,1))
w.push(new C.o7(a1,s.a,0))}},
$S:0}
C.dX2.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aBc(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Du(p,"switch",new B.m(0.14*q.a,r*q.b),0))}o.n6(0,w.e,o.mA(0.86,0.5))},
$S:0}
C.dWS.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dWT.prototype={
$2(d,e){return A.h.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dWU.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dWV.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dWW.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.afY(this.c)
if(v.ax)C.Kg("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dI(140,"",250,0,0.3,"square")}},
$S:0}
C.dX3.prototype={
$0(){},
$S:0}
C.dX4.prototype={
$0(){return A.d.cP(this.a.e,this.b)},
$S:0}
C.dX5.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dX0.prototype={
$0(){var w=this.a,v=this.b
w.d.X(0,v)
A.d.bs(w.e,new C.dX_(v))
w.cy=null},
$S:0}
C.dX_.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dWR.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.n6(0,this.b,new B.m(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dXe.prototype={
$0(){var w=this.a
return w.l(new C.dXd(w))},
$S:0}
C.dXd.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dXf.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c0,B.jn(B.b4(w,w,w,new C.bga(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dX8(v),w,w,w,new C.dX9(v),new C.dXa(v),new C.dXb(v),w,w,w,w,w,w,w,w,w,w,new C.dXc(v),w,w,w,!1,A.a4)},
$S:37}
C.dXc.prototype={
$1(d){return this.a.cfx(d.b)},
$S:56}
C.dXa.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cpb(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aCg(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aI(0,u)}},
$S:50}
C.dXb.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.m(A.h.D(w.a+u.Q.a,46,u.x.a-46),A.h.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dX9.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c6f(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dX6(w))
u=t.as
u.toString
v.push(new C.o7(u,w.a,w.b))
B.ke()}}t.z=t.as=null},
$S:38}
C.dX6.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dX8.prototype={
$1(d){return this.a.aA_(d.b)},
$S:292}
C.dXg.prototype={
$0(){return this.a.bHm(this.b.a)},
$S:0}
C.dXh.prototype={
$0(){return this.a.axj(this.b.a)},
$S:0}
C.dXi.prototype={
$0(){var w=this.a
return w.l(new C.dX7(w))},
$S:0}
C.dX7.prototype={
$0(){var w=this.a
w.aBc(0)
w.ay=null},
$S:0}
C.dXj.prototype={
$0(){return this.a.cH4(this.b)},
$S:0}
C.d_C.prototype={
$0(){var w=this,v=null,u=B.h2(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a8,A.cb,v,A.e6,A.cc)
u.eJ()
return u},
$S:280}
C.e2u.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2t.prototype={
$0(){return this.a.d=null},
$S:0}
C.e2w.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c8d()},
$S:135}
C.e2v.prototype={
$0(){return B.a7(this.a,!1).i2()},
$S:0}
C.fEn.prototype={
$0(){return I.aOI},
$S:z+40}
C.fEo.prototype={
$0(){return D.e6o},
$S:z+43}
C.fEp.prototype={
$0(){return D.e_p},
$S:z+13}
C.fEq.prototype={
$0(){return D.ey8},
$S:z+14}
C.fEr.prototype={
$0(){return D.eg1},
$S:z+15}
C.fEs.prototype={
$0(){return I.aOz},
$S:z+16}
C.fEt.prototype={
$0(){return D.evV},
$S:z+17}
C.fEu.prototype={
$0(){return I.aOH},
$S:z+12}
C.fEv.prototype={
$0(){return D.e1G},
$S:z+19}
C.fjj.prototype={
$2(d,e){return new C.ahy(e,$.bKh()[e],new C.fji(e,this.a),null)},
$S:z+20}
C.fji.prototype={
$0(){var w=this.a,v=L.aM6.h(0,$.bKh()[w].a)
$.avl=v==null?"music":v
B.a7(this.b,!1).ca(B.e4(new C.fjg(w),!1,null,x.H))},
$S:0}
C.fjg.prototype={
$1(d){return $.bKh()[this.a].e.$0()},
$S:43}
C.fjk.prototype={
$2(d,e){return new C.agl(e,D.aEr[e],new C.fjh(this.a,e),null)},
$S:z+21}
C.fjh.prototype={
$0(){return this.a.d.$1(D.aEr[this.b])},
$S:0}
C.fj_.prototype={
$0(){return this.a.as=!0},
$S:0}
C.fiZ.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fiP.prototype={
$0(){var w=this.a
w.ch=0
w.as=!1},
$S:0}
C.fiQ.prototype={
$1(d){return this.brO(d)},
brO(d){var w=0,v=B.j(x.I),u,t=this,s,r,q
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
r.grg().sp(0,d/t.b)
r.gKt().sp(0,0.5)
w=3
return B.b($.aS.glU(),$async$$1)
case 3:r=$.aS.bl$.x.h(0,r.f)
s=r==null?null:r.gbf()
if(!(s instanceof B.oF))throw B.Y(B.be("closed"))
q=C
w=4
return B.b(s.lF(t.c),$async$$1)
case 4:u=q.h2y(f,t.d,t.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:759}
C.fiR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.fiO(w,d))},
$S:6}
C.fiO.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fiS.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.fiY.prototype={
$1(d){var w=this
return new B.ec(new C.fiX(w.a,w.b,w.c,w.d),null)},
$S:20}
C.fiX.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aE(a3,a0,a1).w
a1=B.aE(a3,a0,a1).w
w=x.p
v=B.a([D.h6z,A.at,D.hds,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.c("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fWp,a0,a0,a0)
m=new B.aQ(12,12)
l=new B.aQ(12,12)
l=B.a([new B.bu(1,A.b9,B.aO(a0,A.M,!1,a0,!0,A.t,a0,B.aP(),r[p],a0,a0,a0,a0,a0,2,new B.ee(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,A.FW,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b5(4,new B.bc(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a8,a0,A.ao,a0,a0,a0,a0),a0),A.aa,new B.bu(2,A.b9,B.aO(a0,A.M,!1,a0,!0,A.t,a0,B.aP(),q[p],a0,a0,a0,a0,a0,2,new B.ee(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,A.FW,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b5(4,new B.bc(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a8,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dLb[k]
i=new B.aQ(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.by
e=new B.ax(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.q(a0,B.V(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.p(g,a0,new B.bE(e,e,e,e),new B.bc(i,i,i,i),a0,a0,A.m),a0,a0,a0,A.eX,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fiV(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.aj,new B.c_(A.aJ,A.e,A.i,A.l,a0,A.p,a0,0,l,a0),A.N,new B.a4(a0,44,B.cj(m,a0,a0,a0,a0,a0,A.aJ,!1),a0),A.az],w))}v.push(B.bI(A.BQ,a0,new C.fiW(t,r,q,u,a3),a0))
return new B.C(new B.R(0,0,0,a2.f.d),B.bm(!0,new B.cS(new B.aX(0,1/0,0,a1.a.b*0.86),B.cj(v,a0,a0,A.xg,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:103}
C.fiV.prototype={
$0(){var w=this
return w.a.$1(new C.fiU(w.b,w.c,w.d))},
$S:0}
C.fiU.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.fiW.prototype={
$0(){var w=this,v=w.a
v.l(new C.fiT(v,w.b,w.c,w.d))
B.a7(w.e,!1).N(null)},
$S:0}
C.fiT.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=B.B(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=B.B(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=B.B(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
C.fj7.prototype={
$0(){var w=this.a
return w.l(new C.fj6(w))},
$S:0}
C.fj6.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.fj8.prototype={
$0(){return E.v_(this.b,this.a.f,"scene")},
$S:0}
C.fj9.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.gKt().x
w===$&&B.d()
return new B.bP(new B.p(v,v,v,v,v,new B.bV(D.b6K,0.9,A.w,v,0,B.a([u.j(0.06+0.03*w),A.c8],x.O),v,v),A.m),A.bn,v,v)},
$S:323}
C.fja.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(new B.d7(A.dn,A.z,A.f,B.ca(new B.hC(B.a([u.grg(),u.gKt()],x.dS)),new C.fj5(u,this.b,v),w),w),w,w,w)},
$S:228}
C.fj5.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.grg().x
r===$&&B.d()
w=r<0.9?1:1-C.bwJ(r,0.9,0.98)
v=s.gKt().x
v===$&&B.d()
u=A.dS.aA(0,v)
switch(s.gaBd().a){case 0:s=s.bGw(t.b,r,u,t.c)
break
case 1:s=s.bXM(t.b,r,u,t.c)
break
case 2:s=s.cM1(t.b,r,u,t.c)
break
case 3:s=s.bJw(t.b,r,u,t.c)
break
case 4:s=s.bMV(t.b,r,u,t.c)
break
case 5:s=s.cfy(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:161}
C.fjb.prototype={
$2(d,e){var w=null,v=B.acA(this.b),u=this.c.d,t=B.ap(A.d.gH(u),A.d.gal(u),0.4)
t.toString
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
u=v.cVa(t,A.by,u,3.5)
t=this.a
v=t.grg().x
v===$&&B.d()
return B.ZV(B.kT(w,w,w,w,1,0,w,new C.fj4(t),A.h.D(v,0,1)),u)},
$S:1974}
C.fj4.prototype={
$1(d){var w=this.a
w.grg().sp(0,d)
if(w.as)w.l(new C.fj0(w))},
$S:6}
C.fj0.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fjc.prototype={
$0(){var w=this.a
w.grg().sp(0,0)
w.a0Z()},
$S:0}
C.fjd.prototype={
$1(d){var w=this.a
w.l(new C.fj3(w,d))
if(w.as)w.a0Z()},
$S:6}
C.fj3.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fje.prototype={
$0(){var w=this.a
w.l(new C.fj2(w,this.b))
w.grg().sp(0,0)
if(w.as)w.a0Z()},
$S:0}
C.fj2.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.fjf.prototype={
$0(){var w=this.a
return w.l(new C.fj1(w,this.b))},
$S:0}
C.fj1.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.fiM.prototype={
$2(d,e){return A.h.aQ(d.a,e.a)},
$S:1975}
C.fiN.prototype={
$1(d){return d.b},
$S:1976}
C.dwN.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dwO.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dwK.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dwL.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dwM.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dwP.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dwQ.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dwR.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dwS.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dwT.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dwU.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dwV.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dwW.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dwX.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eFU.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eFJ.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eFL.prototype={
$2(d,e){return d+e.d*7+A.n.F(A.a.ga_(e.b),97)},
$S:z+31}
C.eFM.prototype={
$2(d,e){return d+A.n.F(A.a.ga_(e.a),31)+A.n.F(A.a.ga_(e.b),17)},
$S:z+32}
C.eFP.prototype={
$1(d){var w=D.nw.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.n.F(d.d,u)]+")":t},
$S:z+33}
C.eFQ.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.B(new B.eh(new B.cP(new B.X(q,new C.eFR(d),p.k("X<1>")),new C.eFS(r),p.k("cP<1,rB?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aJ(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eFR.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eFS.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eFN.prototype={
$1(d){return D.nw.h(0,d.b).c===D.yJ},
$S:z+55}
C.eFO.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eGj.prototype={
$1(d){var w=this.a,v=d.a,u=A.h.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.wc(0,u)
w.a9g(A.n.ao(v,1000))},
$S:7}
C.eFT.prototype={
$0(){},
$S:0}
C.eFF.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$$0)
case 6:e.aB("String","ngmy_core_reaction_lab_v1",s.a.d.ak())
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
C.eFW.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.w(B.a([A.N,B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.V(D.nw.h(0,v).b,D.nw.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.hpo,w,B.c(D.nw.h(0,v).a,w,w,w,w,w,w,A.h6,w,w,w),w,w,w),B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,A2.av0,w,w,w,w,new C.eFV(d),!1,w,w,w,w,w,w,w,D.hgl,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:28}
C.eFV.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eFY.prototype={
$1(d){var w,v,u,t=null,s=B.aE(d,t,x.w).w,r=B.a([D.eKk],x.p)
for(w=0;w<6;++w){v=D.aEO[w]
u=B.c(v.a,t,t,t,t,t,t,A.h6,t,t,t)
r.push(B.dP(!1,t,t,t,!0,t,t,t,!0,t,t,D.c91,t,t,t,t,new C.eFX(d,v),!1,t,t,t,t,t,B.c(v.b,t,t,t,t,t,t,A.mg,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cS(new B.aX(0,1/0,0,s.a.b*0.7),B.cj(r,t,t,D.bMU,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:28}
C.eFX.prototype={
$0(){B.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.eFI.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,A.dy,w,w,!0,w,w,w,new C.eFG(d),w,w),B.bK(!1,A.G0,w,w,!0,w,w,w,new C.eFH(d),w,w)],x.p),w,w,L.mt,D.hdF,w,w,w,w,D.hgG,w)},
$S:18}
C.eFG.prototype={
$0(){B.a7(this.a,!1).N(!1)
return null},
$S:0}
C.eFH.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eGh.prototype={
$0(){var w=this.a
return w.l(new C.eGg(w))},
$S:0}
C.eGg.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eGi.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nK(new C.eG7(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bhH:t
v=B.a([B.b4(u,t,t,new C.bmc(w,v,new C.eG8(r),new C.eG9(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dn(!0,B.ca(w,new C.eGa(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bOE())
return B.aA(A.c0,B.jn(new B.am(A.a0,t,A.b6,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eGb(r),t,r.gcqy(),t,new C.eGc(r),new C.eGd(r),new C.eGe(r),t,t,t,t,t,t,t,t,t,t,new C.eGf(r),t,t,t,!1,A.a4)},
$S:37}
C.eG7.prototype={
$0(){return this.a.aeZ(this.b)},
$S:0}
C.eGf.prototype={
$1(d){return this.a.cJD(d.b)},
$S:56}
C.eGd.prototype={
$1(d){return this.a.cqz(d.b)},
$S:50}
C.eGe.prototype={
$1(d){return this.a.cqA(d.b)},
$S:19}
C.eGc.prototype={
$1(d){return this.a.b6U()},
$S:38}
C.eGb.prototype={
$1(d){return this.a.afI(d.b)},
$S:292}
C.eG8.prototype={
$0(){return this.a.z},
$S:674}
C.eG9.prototype={
$0(){return this.a.Q},
$S:459}
C.eGa.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bT1()
if(p.length===0)return A.bK
w=A.v.j(0.55)
v=B.n(14)
u=B.K(A.by,A.r,1)
t=B.a([D.hb1,A.cR],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.c(p[r],q,2,A.a2,q,q,q,A.aZT,q,q,q))
return B.q(q,B.w(t,A.B,q,A.e,A.P,0,A.p),A.f,q,q,new B.p(w,q,u,v,q,q,A.m),q,q,q,q,A.h1,q,q,q)},
$S:68}
C.eFK.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.C(A.dX,B.A(B.a([B.q(w,B.V(d,e,w,w,w,21),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,38,w,w,w,w,w,38),A.bd,B.E(B.w(B.a([B.c(f,w,w,w,w,w,w,Al.Xo,w,w,w),A.bs,B.c(g,w,w,w,w,w,w,F.adG,w,w,w)],s),A.B,w,A.e,A.i,0,A.p),1)],s),A.B,w,A.e,A.i,0,w,w),w)},
$S:1977}
C.eG3.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).i2()},
$S:0}
C.eG4.prototype={
$0(){var w=this.a
return w.l(new C.eG2(w))},
$S:0}
C.eG2.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eG5.prototype={
$0(){var w=this.a
return w.l(new C.eG1(w))},
$S:0}
C.eG1.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eG6.prototype={
$0(){var w=this.a
return w.l(new C.eG0(w))},
$S:0}
C.eG0.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eG_.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.nw.gdW(D.nw),w=w.gae(w);w.B();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.c(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cEi(p[r]))
return new B.C(A.Pq,B.w(B.a([new B.C(A.apR,w,q),B.A(u,A.l,q,A.e,A.i,0,q,q)],v),A.B,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.eFZ.prototype={
$0(){return this.a.cfF(this.b)},
$S:0}
C.dwJ.prototype={
$0(){var w=this,v=null,u=B.h2(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a8,A.cb,v,A.e6,A.cc)
u.eJ()
return u},
$S:280}
C.bTq.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bTB.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bTw.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bTC.prototype={
$1(d){return this.a.Nt(d)&&!d.x},
$S:z+0}
C.bTD.prototype={
$2(d,e){return Math.max(d,this.a.aFa(e))},
$S:z+6}
C.bTF.prototype={
$2(d,e){var w=this.a
return w.c0(0,d.a+"."+e,new C.bTG(w))},
$S:z+5}
C.bTG.prototype={
$0(){return this.a.a},
$S:91}
C.bTE.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:67}
C.bTH.prototype={
$2(d,e){var w=this.a
return w.c0(0,this.b.$1(this.c.$2(d,e)),new C.bTI(w))},
$S:z+5}
C.bTI.prototype={
$0(){return this.a.a},
$S:91}
C.bTs.prototype={
$2(d,e){var w=this.a
return w.c0(0,d.a+"."+e,new C.bTt(w))},
$S:z+5}
C.bTt.prototype={
$0(){return this.a.a},
$S:91}
C.bTr.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:67}
C.bTu.prototype={
$2(d,e){var w=this.a
return w.c0(0,this.b.$1(this.c.$2(d,e)),new C.bTv(w))},
$S:z+5}
C.bTv.prototype={
$0(){return this.a.a},
$S:91}
C.bTp.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bTJ.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bTx.prototype={
$1(d){return d!==this.b&&this.a.aLA(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bTA.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bTz.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bTy.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bNL.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bNM.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.bNK.prototype={
$2(d,e){return new B.a6(A.aW,A.b0,A.w,e,D.dkd,null).az(0,d)},
$S:1978}
C.cxR.prototype={
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
$S:208}
C.h9h.prototype={
$1(d){var w
$.U()
w=B.L()
w.r=d.gp(0)
return w},
$S:1979}
C.h9j.prototype={
$2(d,e){var w
$.U()
w=B.L()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bH
return w},
$S:1980}
C.h9k.prototype={
$5(d,e,f,g,h){return B.bx(new B.a5(d,e,d+f,e+g),new B.aQ(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1981}
C.h9i.prototype={
$3(d,e,f){var w
$.U()
w=B.L()
w.san(new B.a6(A.aW,A.b0,A.w,B.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1982}
C.bNn.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bNo.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bNm(w))},
$S:0}
C.bNm.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bNp.prototype={
$0(){return B.a([],x.F)},
$S:1983}
C.bNq.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:364}
C.bNr.prototype={
$0(){var w,v,u
J.bKr(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rP(v))if(C.hua(v.b))w.b6o(v)
else w.a2d(v)
else{u=w.a.c.bjs(v)
w.ahi(u==null?"The "+$.r0().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bNl.prototype={
$1(d){return new B.ec(new C.bNi(this.a,this.b),null)},
$S:20}
C.bNi.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bNj(this.a,o,a3),m=$.r0(),l=o.b,k=m.h(0,l).d,j=A.h.S(o.ch/1.04),i=new C.bNk(o,n,k),h=B.n(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ac(0,A.G,k.j(0.25),A.J,26)],f),d=B.q(p,p,A.f,p,p,new B.p(A.aT,p,p,B.n(3),p,p,A.m),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.q(p,B.at(B.c(m.h(0,l).c,p,p,p,p,p,p,A.qE,p,p,p),p,p,p),A.f,p,p,new B.p(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.w(B.a([B.c(m.h(0,l).b,p,1,A.a2,p,p,p,A.jr,p,p,p),D.haQ],a0),A.B,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.n(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bd,w,B.q(p,B.c(""+A.h.S(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(v,p,t,u,p,p,A.m),p,p,p,p,A.lF,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
t=A.v.j(0.35)
v=B.n(18)
w=B.K(A.dA,A.r,1)
a1=30+28*o.ch
s=B.n(8)
r=B.a([k.j(0.85),A.ax],x.O)
q=B.K(A.aE,A.r,2)
f=B.a([new B.ac(0,A.G,k.j(0.5),A.J,14)],f)
v=B.q(p,B.at(B.cZ(p,B.at(new B.d7(A.dE,A.z,A.f,new B.C(A.hO,B.c(m.h(0,l).c,p,p,p,p,p,p,A.mV,p,p,p),p),p),p,p,p),p,p,A.b1,new B.p(p,p,q,s,f,new B.a6(A.aw,A.aD,A.w,r,p,p),A.m),A.eN,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.p(t,p,w,v,p,p,A.m),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.i,0,p,p)
w=B.aI(p,p,p,p,B.V(A.ate,k,p,p,p,30),p,p,p,new C.bNe(n,o),p,p,p,p,p,p)
t=B.acA(a2).biW(k,A.by,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.ZV(B.kT(p,p,p,p,5.2,1,p,n,A.h.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.V(A.a4w,k,p,p,p,30),p,p,p,new C.bNf(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
return B.bm(!0,B.q(p,B.w(B.a([d,A.af,u,A.az,v,A.af,i,A.at,o,B.A(B.a([B.E(B.c(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,N.hI,p,p,p),1),B.bK(!1,A6.b_W,p,p,!0,p,p,p,new C.bNg(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tO,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.i,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.p(p,p,g,h,e,D.cgx,A.m),p,p,p,A.zz,D.bJt,p,p,p),!0,!1,A.ag,!0,!0)},
$S:90}
C.bNj.prototype={
$1(d){var w=this.a
w.l(new C.bNc(this.b,d))
this.c.$1(new C.bNd())
w.a.toString},
$S:6}
C.bNc.prototype={
$0(){return this.a.ch=A.h.D(this.b,1,5.2)},
$S:0}
C.bNd.prototype={
$0(){},
$S:0}
C.bNk.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.n(14),r=u?w.c:A.by
r=B.K(r,A.r,u?2:1)
return B.E(B.aA(v,B.cZ(v,B.at(new B.d7(A.dn,A.z,A.f,B.c(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ac,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b1,new B.p(t,v,r,s,v,v,A.m),A.ho,v,v,v,A.jk,A.rl,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bNh(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:697}
C.bNh.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bNe.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bNf.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bNg.prototype={
$0(){B.a7(this.a,!1).N(null)
return null},
$S:0}
C.bNH.prototype={
$2(d,e){var w
if(d==="short"){G.dI(1800,"",120,0,0.55,"noise")
G.dI(200,"",160,2.2,0.4,"saw")
B.fZ()
w=this.a
if(w.c!=null)w.ahi("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dI(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.ahi("\u26a0 Overloaded! The "+$.r0().h(0,e.b).b+" can only give about "+A.h.a1(w.a.c.AY(e),2)+" amps but your gadgets are asking for "+A.h.a1(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.ahi("Burnt out! "+e.ay)
G.dI(140,"",320,0,0.6,"noise")
G.dI(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bNI.prototype={
$0(){},
$S:0}
C.bMN.prototype={
$0(){},
$S:0}
C.bNJ.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bNG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.aA(A.c0,new B.ea(B.b4(p,p,p,new C.alz(w,v,u,t,s,r==null?A.jK:r,p),n),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bNA(o),new C.bNB(o),new C.bNC(o),p,p,p,p,p,p,p,p,p,p,new C.bND(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bgY)
w=o.ay
if(w!=null){v=B.n(14)
u=B.K(A.cX,A.r,1)
n.push(B.ao(p,B.aA(p,B.q(p,B.A(B.a([D.h0I,B.E(B.c(w,p,p,p,p,p,p,D.fT9,p,p,p),1)],q),A.B,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(D.bn5,p,u,v,p,p,A.m),p,p,p,p,A.o9,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bNE(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bP8,new E.fN(A.Ac,"Cut wire",new C.bNF(o),A.c3,p)],q),A.l,p,A.e,A.i,0,p,p)
w=B.n(18)
n.push(B.ao(8,B.q(p,o,A.f,p,p,new B.p(F.a_2,p,B.K(A.by,A.r,1),w,p,p,A.m),p,p,p,p,F.aou,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cr7(w),p,p,10,10,p,p))}}return B.jn(new B.am(A.a0,p,A.b6,A.t,n,p),A.t,p)},
$S:246}
C.bNB.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bdA(s)
if(r!=null){t.l(new C.bNy(t,r,d))
return}w=t.b73(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.m(v*u.a,w.d*u.b).aI(0,s)
t.l(new C.bNz(t,w))}},
$S:50}
C.bNy.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bNz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bNC.prototype={
$1(d){var w=this.a
if(w.y!=null)w.l(new C.bNw(w,d))
else if(w.Q!=null)w.l(new C.bNx(w,d.b.a6(0,w.as)))},
$S:19}
C.bNw.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bNx.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.h.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.h.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bNA.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bdA(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.aob(u.a,u.b,v.a,v.b)!=null)G.dI(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.ahg()},
$S:38}
C.bND.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b73(u)
if(t!=null){v.l(new C.bNt(v,t))
if(D.mN.am(0,t.b))v.cC3(t)
w=new B.W(Date.now(),0,!1)
if(v.r===t&&w.by(v.w).a<38e4){v.l(new C.bNu(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.l(new C.bNv(v,v.cPl(u)))},
$S:56}
C.bNt.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dI(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dI(200,"",70,0,0.2,"saw")}},
$S:0}
C.bNu.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bNv.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bNE.prototype={
$0(){var w=this.a
return w.l(new C.bNs(w))},
$S:0}
C.bNs.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bNF.prototype={
$0(){var w=this.a
A.d.X(w.a.c.b,w.x)
w.x=null
G.dI(300,"",50,0,0.35,"noise")
w.ahg()},
$S:0}
C.bMO.prototype={
$0(){return this.a.bw6(this.b)},
$S:0}
C.bN9.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.c(d,w,w,w,w,w,w,D.fN1,w,w,w),B.E(B.kT(this.b.d,w,w,w,g,h,w,new C.bNb(this.a,f),A.h.D(e,h,g)),1)],x.p),A.l,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1984}
C.bNb.prototype={
$1(d){var w=this.a
w.l(new C.bNa(this.b,d))
w.a.toString},
$S:6}
C.bNa.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bN8.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.n(10)
return B.E(B.q(w,B.w(B.a([B.c(d,w,w,w,w,w,w,A.adu,w,w,w),B.c(e,w,w,w,w,w,w,D.fPX,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.p(v,w,w,u,w,w,A.m),w,w,w,w,A.vm,w,w,w),1)},
$S:111}
C.bMV.prototype={
$0(){var w=this.a
return w.l(new C.bMU(w))},
$S:0}
C.bMU.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bMW.prototype={
$0(){var w=this.a
w.a.c.X(0,this.b)
w.e=w.d=null
G.dI(260,"",70,0,0.35,"noise")
w.ahg()},
$S:0}
C.bMX.prototype={
$0(){var w=this.a
return w.l(new C.bMT(w))},
$S:0}
C.bMT.prototype={
$0(){return this.a.e=null},
$S:0}
C.bN0.prototype={
$0(){this.a.l(new C.bMS(this.b,this.c))
G.dI(900,"",40,0,0.3,"noise")},
$S:0}
C.bMS.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bN1.prototype={
$0(){return this.a.b6o(this.b)},
$S:0}
C.bN2.prototype={
$0(){return this.a.a2d(this.b)},
$S:0}
C.bN3.prototype={
$0(){return this.a.a3W(this.b)},
$S:0}
C.bN4.prototype={
$0(){var w=this.a
w.l(new C.bMR(this.b,this.c))
w.a.toString},
$S:0}
C.bMR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bN5.prototype={
$0(){var w=this.a
w.l(new C.bMQ(this.b,this.c))
w.a.toString},
$S:0}
C.bMQ.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bN6.prototype={
$0(){var w=this.a
w.l(new C.bMP(this.b,this.c))
w.a.toString},
$S:0}
C.bMP.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bN7.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMY.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMZ.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bN_.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fE8.prototype={
$1(d){return d.aLb("bulb")},
$S:z+2}
C.fE9.prototype={
$1(d){return d.qw(0,"switch")&&d.aLb("bulb")},
$S:z+2}
C.fEa.prototype={
$1(d){return A.d.aR(d.a,new C.fDW())},
$S:z+2}
C.fDW.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fEb.prototype={
$1(d){return d.qw(0,"resistor")&&A.d.aR(d.a,new C.fDV())},
$S:z+2}
C.fDV.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fEc.prototype={
$1(d){return!d.qw(0,"battery")&&d.aLb("bulb")},
$S:z+2}
C.fE_.prototype={
$1(d){return A.d.aR(d.a,new C.fDU())},
$S:z+2}
C.fDU.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fE0.prototype={
$1(d){return A.d.aR(d.a,new C.fDT())},
$S:z+2}
C.fDT.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fE1.prototype={
$1(d){return A.d.aR(d.a,new C.fDS())},
$S:z+2}
C.fDS.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fE2.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fDQ())&&A.d.aR(w,new C.fDR())&&d.qw(0,"buck")},
$S:z+2}
C.fDQ.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fDR.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fE3.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fDO())&&A.d.aR(w,new C.fDP())},
$S:z+2}
C.fDO.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fDP.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fE4.prototype={
$1(d){return A.d.aR(d.a,new C.fDN())},
$S:z+2}
C.fDN.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e7G.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a7(0)
w.u(0,v.b)},
$S:0}
C.e7P.prototype={
$1(d){var w=this.a.d
return w.aLA(d)&&w.rP(d)},
$S:z+0}
C.e7Q.prototype={
$1(d){return d.x},
$S:z+0}
C.e7R.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e7S.prototype={
$0(){},
$S:0}
C.e7F.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.hiK,A.at,D.h2A,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.TK[v]
t=A.c.j(0.06)
s=new B.aQ(14,14)
r=new B.ax(A.by,1,A.r,-1)
n.push(B.aA(q,B.q(q,B.w(B.a([B.c(u.a,q,q,q,q,q,q,A.iY,q,q,q),A.bs,B.c(u.b,q,3,A.a2,q,q,q,D.fTX,q,q,q)],o),A.B,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(t,q,new B.bE(r,r,r,r),new B.bc(s,s,s,s),q,q,A.m),q,q,q,A.cA,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e7E(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eD(q,F.nh,new B.C(A.bR,new B.a4(340,q,B.cj(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.db,q,new B.bb(p,A.a1),q)},
$S:46}
C.e7E.prototype={
$0(){B.a7(this.b,!1).N(null)
var w=this.a
w.l(new C.e7D(w,this.c))
G.dI(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e7D.prototype={
$0(){var w=this.a.d
this.b.C(w)
w.boC()},
$S:0}
C.e7B.prototype={
$1(d){return new C.XH(this.a.d,null)},
$S:z+44}
C.e7C.prototype={
$0(){},
$S:0}
C.e7O.prototype={
$1(d){return new B.ec(new C.e7N(this.a),null)},
$S:20}
C.e7N.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.akC(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bf:A.aH
k=B.aE(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.hfP,A.aY,B.c(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.i,0,m,m),A.N,B.bv(B.n(4),B.jK(A.by,m,m,5,m,w.a/11,new B.le(f,x.c)),A.ap),A.af],v)
if(h)u.push(D.h5V)
else{h=f.j(0.1)
t=B.n(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.c(r+" Now: "+i.a,m,m,m,m,m,m,An.LW,m,m,m)
q=B.c(g?"Well done! You did it.":i.b,m,m,m,m,m,m,A0.FX,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.w(B.a([r,A.at,q,new B.bH(A.a9,m,m,B.bK(!1,B.c(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e7L(l,e),m,m),m)],v),A.B,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(h,m,s,t,m,m,A.m),m,m,m,m,A.bg,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aQ(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.dA,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.c(s,m,m,m,m,m,m,A.adF,m,m,m)
r=j[o]
q=w.q(0,o)?A.aE:A.c
u.push(B.aA(m,B.q(m,new B.c_(A.aJ,A.e,A.i,A.l,m,A.p,m,0,B.a([s,A.ar,new B.bu(1,A.b9,B.c(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.C,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.p(h,m,new B.bE(n,n,n,n),new B.bc(t,t,t,t),m,m,A.m),m,m,m,A.ez,A.o9,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e7M(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cS(new B.aX(0,1/0,0,k.a.b*0.75),B.cj(u,m,m,A.xg,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:90}
C.e7L.prototype={
$0(){var w=this.a
w.l(new C.e7J(w))
this.b.$1(new C.e7K())
w.Gn()},
$S:0}
C.e7J.prototype={
$0(){var w=this.a
$.akC()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e7K.prototype={
$0(){},
$S:0}
C.e7M.prototype={
$0(){var w=this.a
w.l(new C.e7H(w,this.b))
this.c.$1(new C.e7I())
w.Gn()},
$S:0}
C.e7H.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e7I.prototype={
$0(){},
$S:0}
C.e7U.prototype={
$0(){return B.a7(this.a,!1).i2()},
$S:0}
C.e7V.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iN("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a7(t.b,!1).ca(B.e4(new C.e7T(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e7T.prototype={
$1(d){B.jc("construction")
return As.ia6()},
$S:z+45}
C.e7W.prototype={
$0(){return E.hWd(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e7X.prototype={
$0(){var w=this.a
return w.l(w.d.gd6p())},
$S:0}
C.e7Y.prototype={
$0(){var w=this.a,v=w.d
w.l(v.gtJ(v))
w.Gn()},
$S:0}
C.cPG.prototype={
$2(d,e){var w=null,v=this.a.gaBm().x
v===$&&B.d()
return B.b4(w,w,w,new C.bdX(v,w),A.aB)},
$S:52}
C.cPF.prototype={
$3(d,e,f){var w=new B.aJ($.U().r,A.ak,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.cn(v,u,v+e,u))
w.E(new B.cn(v,u,v,u+e))
w.E(new B.cn(v,u,v-e,u))
w.E(new B.cn(v,u,v,t))
w.E(new B.bz())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:452}
C.het.prototype={
$3(d,e,f){return new C.WW(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.heu.prototype={
$4(d,e,f,g){var w=x.a
return new B.de(e,!1,B.iG(A.z,g,null,new B.bk(B.cN(A.cn,e,null),new B.bq(0.85,1,w),w.k("bk<bT.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.e3C.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gCm()},
$S:0}
C.e3D.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.n.F(A.n.F(this.b,w)+w,w)
v.z=v.gCm()},
$S:0}
C.e3N.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.m(v.a/u.a,v.b/u.b)
w.w=w.gCm()},
$S:0}
C.e3B.prototype={
$1(d){return new K.Js(F.Tv[this.b],new C.e3A(this.a,d),null)},
$S:z+47}
C.e3A.prototype={
$0(){this.a.a=!0
B.a7(this.b,!1).dZ()},
$S:0}
C.e3O.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.e3P.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e3u.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb43():w
return B.aA(A.c0,B.b4(w,w,w,v.cqw(this.b),A.hi),A.y,!1,D.hPb,u,w,w,w,new C.e3s(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e3t(v,e),w,w,w,!1,A.a4)},
$S:37}
C.e3t.prototype={
$1(d){var w=this.b
return this.a.cJP(d.b,new B.av(B.aU(1/0,w.a,w.b),B.aU(1/0,w.c,w.d)))},
$S:56}
C.e3s.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.P4()!=null){w=v<0?1:-1
this.a.aFq(w)}},
$S:38}
C.e3L.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.n(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.q(w,B.w(B.a([B.V(d,g,w,w,w,20),A.rW,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,w,w,A.jk,A.jZ,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:679}
C.e3H.prototype={
$0(){return this.a.aFq(-1)},
$S:0}
C.e3I.prototype={
$0(){return this.a.aFq(1)},
$S:0}
C.e3J.prototype={
$0(){return this.a.KN(null)},
$S:0}
C.e3K.prototype={
$0(){return this.a.KN(0)},
$S:0}
C.e3Q.prototype={
$0(){return B.a7(this.a,!1).i2()},
$S:0}
C.e3G.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c5G(o):q.bIx(o,p),m=x.p
p=B.a([B.p0(new B.mn(n,new B.b9(p,x.aC)),A.pY,B.qd(),A.b1,A.b1,new C.e3E())],m)
n=t.d
if(n){w=A.h.F(q.gCm(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.ar],m)
if(w)m.push(D.bOV)
else m.push(A.aY)
m.push(B.q(s,s,A.f,s,s,new B.p(w?A.bf:A.ax,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.ar)
p.push(B.ao(s,B.at(B.cZ(s,B.A(m,A.l,s,A.e,A.i,0,s,s),s,s,A.ek,new B.p(A.v,s,s,u,s,s,A.m),A.nk,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Bw)p.push(B.ao(s,B.at(B.q(s,s,A.f,s,s,A.Nh,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Bx)p.push(B.ao(s,B.q(s,s,A.f,s,s,A.Nh,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.q(s,s,A.f,s,s,new B.p(A.c.j(0.75),s,s,B.n(3),s,s,A.m),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e3F(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bv(r,new B.am(A.a0,s,A.b6,A.t,p,s),A.ap)},
$S:421}
C.e3E.prototype={
$2(d,e){var w=x.a
return new B.de(e,!1,B.iG(A.z,d,null,new B.bk(e,new B.bq(0.92,1,w),w.k("bk<bT.T>"))),null)},
$S:379}
C.e3F.prototype={
$0(){return this.a.KN(null)},
$S:0}
C.e3M.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.c(A.a.aY(A.n.v(B.cY(q)),2,"0")+":"+A.a.aY(A.n.v(B.fy(q)),2,"0"),s,s,s,s,s,s,A.uG,s,s,s),A.aY],x.p)
for(w=0;w<4;++w){v=new B.aQ(1,1)
q.push(B.q(s,s,A.f,s,s,new B.p(A.c,s,s,new B.bc(v,v,v,v),s,s,A.m),s,4+w*2,s,D.bNq,s,s,s,3))}q.push(A.da)
q.push(D.h9P)
q.push(A.b7)
v=B.K(A.ac,A.r,1)
u=B.n(4)
t=this.b
q.push(B.q(s,new B.bH(A.a5,s,s,B.Ch(A.z,B.q(s,s,A.f,s,s,new B.p(A.bf,s,s,B.n(2),s,s,A.m),s,s,s,A7.I7,s,s,s,s),s,t/100),s),A.f,s,s,new B.p(s,s,v,u,s,s,A.m),s,12,s,s,s,s,s,26))
q.push(A.pu)
q.push(B.c(""+t+"%",s,s,s,s,s,s,D.h0j,s,s,s))
return new B.d7(A.dn,A.a5,A.f,new B.a4(r,s,B.A(q,A.l,s,A.e,A.i,0,s,s),s),s)},
$S:287}
C.e3z.prototype={
$0(){return this.a.KN(A.d.c8(F.iz,this.b))},
$S:0}
C.e3x.prototype={
$0(){return this.a.KN(0)},
$S:0}
C.e3y.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cJ(F.iz,0,B.dy(4,"count",x.S),x.gD),v=w.$ti,w=new B.bQ(w,w.gI(0),v.k("bQ<aj.E>")),u=this.a,v=v.k("aj.E");w.B();){t=w.d
q.push(u.aza(t==null?v.a(t):t,50,!1))}return new B.d7(A.dn,A.z,A.f,new B.a4(r,s,B.A(q,A.l,s,A.rK,A.i,0,s,s),s),s)},
$S:287}
C.e3r.prototype={
$0(){return this.a.KN(null)},
$S:0}
C.e3w.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.v.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aE(k,A.bY,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.q(n,B.A(B.a([D.hoM,A.ar,B.E(B.c(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.f6,n,n,n,A.Ma,n,n,n),1),B.c(A.a.aY(A.n.v(B.cY(new B.W(Date.now(),0,!1))),2,"0")+":"+A.a.aY(A.n.v(B.fy(new B.W(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.qF,n,n,n)],w),A.l,n,A.e,A.i,0,n,n),A.f,m,n,n,n,24,n,n,new B.R(j,0,k,0),n,n,n)
j=B.a([B.b4(n,n,n,new C.bAW(l.gCm(),this.c.d,n),A.aB)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aE(m,A.dL,x.w).w.r.b+52}else m=12
v=B.n(10)
u=B.K(A.aT,A.r,1)
t=B.n(10)
s=B.aA(n,B.q(n,n,A.f,n,n,A.ah8,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e3v(l),n,n,n,n,n,n,!1,A.a4)
r=B.q(n,n,A.f,n,n,A.Zu,n,12,n,n,n,n,n,12)
q=B.aA(n,B.q(n,n,A.f,n,n,D.bc2,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbe3(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.dU,r,A.dU,q,A.ar,B.E(B.c(F.iz[p].a,n,1,A.a2,n,n,n,A.Xm,n,n,n),1)],w)
if(l.P4()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.b0W(19))
s=B.q(n,B.A(p,A.l,n,A.e,A.i,0,n,n),A.f,A.cx,n,n,n,26,n,n,A.fD,n,n,n)
r=l.e
r.toString
j.push(B.bS(0,new B.C(new B.R(26,m,26,58),B.q(n,B.bv(t,B.w(B.a([s,B.E(l.aSd(r),1)],w),A.l,n,A.e,A.i,0,A.p),A.ap),A.f,n,n,new B.p(A.v,n,u,v,D.dGX,n,A.m),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.n(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.C(A.jk,l.aza(F.iz[o],34,!1),n))
j.push(B.ao(8,B.at(B.q(n,B.A(t,A.l,n,A.e,A.P,0,n,n),A.f,n,n,new B.p(m,n,u,v,n,n,A.m),n,n,n,n,A.lG,n,n,n),n,n,n),n,n,0,0,n,n))
return B.q(n,B.w(B.a([k,B.E(new B.am(A.a0,n,A.b6,A.t,j,n),1)],w),A.l,n,A.e,A.i,0,A.p),A.f,A4.a0H,n,n,n,n,n,n,n,n,n,n)},
$S:85}
C.e3v.prototype={
$0(){return this.a.KN(null)},
$S:0}
C.fED.prototype={
$0(){return D.eAb},
$S:z+48}
C.fEE.prototype={
$0(){return D.e6X},
$S:z+49}
C.fEF.prototype={
$0(){return D.e_C},
$S:z+50}
C.fEG.prototype={
$0(){return D.e6k},
$S:z+51}
C.fEH.prototype={
$0(){return D.ebP},
$S:z+52}
C.fEI.prototype={
$0(){return D.evY},
$S:z+53}
C.fEJ.prototype={
$0(){return D.ey7},
$S:z+54}
C.fEK.prototype={
$0(){return D.eaS},
$S:z+36}
C.cqK.prototype={
$0(){return B.a7(this.a,!1).i2()},
$S:0}
C.cqL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.i_7(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aQ(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dv,16)],t)
n=B.c(r.c,k,k,k,k,k,k,A.LU,k,k,k)
m=B.c(r.a,k,k,k,k,k,k,D.fZ1,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.q(k,new B.am(A.a0,k,A.ab,A.t,B.a([new B.cR(k,-6,-6,k,k,k,n,k),new B.bH(A.lt,k,k,B.w(B.a([m,A.cR,B.c(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a7,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.B,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.p(k,k,k,new B.bc(q,q,q,q),p,new B.a6(A.aw,A.aD,A.w,o,k,k),A.m),k,v,k,k,A.bD,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cqJ(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bW(A.bG,h,A.bq,k,14,14)},
$S:176}
C.cqJ.prototype={
$0(){return B.a7(this.a,!1).ca(B.e4(new C.cqI(this.b),!1,null,x.H))},
$S:0}
C.cqI.prototype={
$1(d){return this.a.f.$0()},
$S:43}
C.f4t.prototype={
$0(){var w=this.a
return w.w=w.d[w.baw(w.f)]},
$S:0}
C.f4p.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cW.ai()*7},
$S:0}
C.f4o.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bN(0,A.ck)
w.w=""},
$S:0}
C.f4r.prototype={
$0(){var w=this.a
return w.l(new C.f4q(w,this.b))},
$S:0}
C.f4q.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cP(w,this.b)},
$S:0}
C.f4s.prototype={
$1(d){return this.a.b4H(0)},
$S:2}
C.ebo.prototype={
$0(){return C.Kg("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.ebp.prototype={
$0(){},
$S:0}
C.ebj.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.ebl.prototype={
$0(){return this.a.b4J(this.b)},
$S:0}
C.ebm.prototype={
$0(){var w=this.a
return w.l(new C.ebk(w))},
$S:0}
C.ebk.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.ebn.prototype={
$0(){var w=this.a
return w.b4J(w.d)},
$S:0}
C.dVL.prototype={
$2(d,e){return d+e},
$S:84}
C.dVM.prototype={
$0(){},
$S:0}
C.dVG.prototype={
$2(d,e){return d+e},
$S:84}
C.dVJ.prototype={
$0(){var w=this.a
return w.l(new C.dVI(w,this.b))},
$S:0}
C.dVI.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dVK.prototype={
$0(){var w=this.a
return w.l(new C.dVH(w))},
$S:0}
C.dVH.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e7a.prototype={
$0(){return E.v_(this.b,this.a.d,"drawing")},
$S:0}
C.e7b.prototype={
$1(d){var w=this.a
return w.l(new C.e79(w,d))},
$S:50}
C.e79.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aMd(u,v,t))},
$S:0}
C.e7c.prototype={
$1(d){var w=this.a
return w.l(new C.e78(w,d))},
$S:19}
C.e78.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e7d.prototype={
$1(d){var w=this.a
return w.l(new C.e77(w,d))},
$S:24}
C.e77.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aMd(u,v,t))},
$S:0}
C.e7e.prototype={
$0(){var w=this.a
return w.l(new C.e76(w,this.b))},
$S:0}
C.e76.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e7f.prototype={
$1(d){var w=this.a
return w.l(new C.e75(w,d))},
$S:6}
C.e75.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e7g.prototype={
$0(){var w=this.a
return w.l(new C.e74(w))},
$S:0}
C.e74.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e7h.prototype={
$0(){var w=this.a
return w.l(new C.e73(w))},
$S:0}
C.e73.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e7i.prototype={
$0(){var w=this.a
return w.l(A.d.gtJ(w.e))},
$S:0}
C.e7j.prototype={
$0(){var w=this.a
return w.l(new C.e72(w))},
$S:0}
C.e72.prototype={
$0(){var w=this.a
w.x=D.aDD[A.n.F(A.d.c8(D.aDD,w.x)+1,4)]},
$S:0}
C.ezk.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
C.ezl.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.Kg("bell",B.a([0,4,7],w),500,0.45)
u.l(new C.ezj(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.d()
if(v===u.length)C.Kg("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.ezj.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
C.ezm.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.ezi(w))},
$S:12}
C.ezi.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
C.ezq.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.l5(new C.ezo(v,e),w,A.b1,A.pY,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ezp(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:76}
C.ezp.prototype={
$0(){return this.a.ci4(this.b)},
$S:0}
C.ezo.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dB(),m=n.a
m.$flags&2&&B.ak(m)
m[11]=0.001
n.fN(3.141592653589793*e)
m=B.n(16)
w=o?p:D.cfF
if(o)v=q.a.r.q(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bf:A.aT,A.r,1)
if(o){r=B.dB()
r.fN(3.141592653589793)
u=u.e
u===$&&B.d()
r=B.fH(A.z,B.c(u[t],p,p,p,p,p,p,H.adJ,p,p,p),p,r,!0)
u=r}else u=D.hhm
return B.fH(A.z,B.q(A.z,u,A.f,p,p,new B.p(v,p,s,m,p,w,A.m),p,p,p,p,p,p,p,p),p,n,!0)},
$S:107}
C.ezr.prototype={
$0(){var w=this.a
return w.l(new C.ezn(w,this.b))},
$S:0}
C.ezn.prototype={
$0(){var w=this.a
w.d=this.b.a
w.awv()},
$S:0}
C.ezs.prototype={
$0(){var w=this.a
return w.l(w.gbRt())},
$S:0}
C.eMs.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eMt.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eMq.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eMr.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.eMp(w))},
$S:12}
C.eMp.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eMu.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eMv.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eMw.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b4I()},
$S:12}
C.eMx.prototype={
$0(){return this.a.cia(this.b)},
$S:0}
C.f_P.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:58}
C.f_Y.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.c(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.C(A.jZ,B.A(B.a([v,A.aa,new B.d_(1,A.c9,new B.d7(A.dn,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1985}
C.f_U.prototype={
$1(d){return this.a.l(new C.f_T())},
$S:2}
C.f_T.prototype={
$0(){},
$S:0}
C.f_V.prototype={
$0(){var w=this.a
return w.l(new C.f_S(w,this.b))},
$S:0}
C.f_S.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f_W.prototype={
$1(d){var w=this.a
return w.l(new C.f_R(w,d))},
$S:6}
C.f_R.prototype={
$0(){return this.a.f=A.h.S(this.b)},
$S:0}
C.f_X.prototype={
$0(){var w=this.a
return w.l(new C.f_Q(w))},
$S:0}
C.f_Q.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ey_.prototype={
$0(){},
$S:0}
C.ey0.prototype={
$0(){},
$S:0}
C.exT.prototype={
$0(){var w=this.a
return w.l(new C.exS(w))},
$S:0}
C.exS.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c4(u,1,!1,x.S)
w.r=0.9
E.Yv("hat",0,0.6)},
$S:0}
C.exU.prototype={
$0(){var w=this.a
return w.l(new C.exR(w))},
$S:0}
C.exR.prototype={
$0(){this.a.y=1.1
E.mR("bell",36,200,0.4)},
$S:0}
C.exV.prototype={
$0(){var w=this.a
return w.l(new C.exQ(w))},
$S:0}
C.exQ.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mR("bell",12+A.n.F(u,12),500,0.5)},
$S:0}
C.exW.prototype={
$0(){var w=this.a
return w.l(new C.exP(w,this.b))},
$S:0}
C.exP.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.exX.prototype={
$1(d){var w=this.a
return w.l(new C.exO(w,d))},
$S:6}
C.exO.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.h.S(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.exY.prototype={
$1(d){var w=this.a
return w.l(new C.exN(w,d))},
$S:6}
C.exN.prototype={
$0(){return this.a.z=A.h.S(this.b)},
$S:0}
C.exZ.prototype={
$1(d){var w=this.a
return w.l(new C.exM(w,d))},
$S:6}
C.exM.prototype={
$0(){return this.a.Q=A.h.S(this.b)},
$S:0}
C.cqG.prototype={
$0(){var w=this
return E.mR(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aQj.prototype
w.bDp=w.t
w=C.aPn.prototype
w.bCr=w.t
w=C.aPo.prototype
w.bCs=w.t
w=C.aPs.prototype
w.bCw=w.t
w=C.aR9.prototype
w.bEm=w.t
w=C.aQh.prototype
w.bDn=w.t
w=C.aBh.prototype
w.bzs=w.t
w=C.aBi.prototype
w.bzt=w.t
w=C.aNP.prototype
w.bAP=w.t
w=C.aPD.prototype
w.bCH=w.t
w=C.aPp.prototype
w.bCt=w.t
w=C.aPK.prototype
w.bCP=w.t
w=C.aQa.prototype
w.bDg=w.t
w=C.aQD.prototype
w.bDJ=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aIa.prototype,"gaAH","cd7",1)
v(C,"iIb","caa",3)
var q
u(q=C.aGA.prototype,"gcmB","cmC",22)
w(q,"gcdI","b37",1)
w(C.aGC.prototype,"gcfu","cfv",1)
t(C.aGT.prototype,"gcfC","cfD",39)
w(q=C.aLk.prototype,"gcGN","cGO",1)
w(q,"gcfE","a0Z",1)
w(q,"gcrh","cri",1)
w(q,"gcfA","a0Y",3)
w(q,"gcfB","ah6",3)
w(q=C.aI9.prototype,"gbOx","acl",3)
w(q,"gcqy","b6U",1)
w(q,"gcut","ajQ",3)
s(q,"gcfG","ah7",3)
s(q=C.a6P.prototype,"gtJ","a7",1)
u(q,"gd41","aqZ",0)
u(q,"gd0k","Nt",0)
w(q,"gd6p","boC",1)
r(C.alz.prototype,"gcg2",0,5,null,["$5"],["lN"],41,0,0)
w(q=C.aH6.prototype,"gcg3","cg4",1)
w(q,"gcxn","akb",3)
w(q,"gcmT","aiu",3)
w(q,"gcEK","alj",3)
w(q=C.aGX.prototype,"gc87","afe",3)
w(q,"gbe3","cLn",1)
w(q,"gb43","cg8",1)
w(q=C.aIG.prototype,"gci5","ci6",1)
s(q,"gci3","b4H",1)
w(C.aHW.prototype,"gbRt","awv",1)
s(C.aIj.prototype,"gci7","ci8",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aH,[C.amO,C.Hs,C.vS,C.aWG,C.a5H,C.bf4,C.cab,C.z5,C.Du,C.o7,C.bfT,C.Bu,C.byo,C.qP,C.rB,C.Dy,C.a0E,C.ahl,C.a2V,C.DJ,C.ae9,C.aer,C.agp,C.Hd,C.es,C.uk,C.acN,C.adW,C.a6P,C.nj,C.bfU,C.h9,C.mv,C.bzI,C.aMd])
u(B.hr,[C.fWV,C.fKW,C.fSV,C.fSW,C.fWS,C.fWT,C.er3,C.erm,C.eGT,C.eGq,C.eGr,C.eGs,C.eGt,C.eGu,C.eGv,C.eGw,C.eGx,C.eGo,C.eGp,C.eGn,C.eGO,C.eGP,C.eGQ,C.dVh,C.dVj,C.dVm,C.dVx,C.cac,C.cad,C.fDX,C.fDY,C.fDZ,C.fE5,C.fE6,C.fE7,C.dXk,C.dX1,C.dXl,C.dWX,C.dWS,C.dWU,C.dX_,C.dXc,C.dXa,C.dXb,C.dX9,C.dX6,C.dX8,C.fjg,C.fiQ,C.fiR,C.fiY,C.fj4,C.fjd,C.fiN,C.dwN,C.dwO,C.dwK,C.dwL,C.dwM,C.dwP,C.dwQ,C.dwR,C.dwS,C.dwT,C.dwU,C.dwV,C.dwW,C.dwX,C.eFP,C.eFQ,C.eFR,C.eFS,C.eFN,C.eFO,C.eGj,C.eFW,C.eFY,C.eFI,C.eGf,C.eGd,C.eGe,C.eGc,C.eGb,C.eFK,C.bTq,C.bTB,C.bTw,C.bTC,C.bTE,C.bTr,C.bTp,C.bTJ,C.bTx,C.bTA,C.bTz,C.bTy,C.bNL,C.h9h,C.h9k,C.h9i,C.bNq,C.bNl,C.bNj,C.bNJ,C.bNB,C.bNC,C.bNA,C.bND,C.bN9,C.bNb,C.bN7,C.bMY,C.bMZ,C.bN_,C.fE8,C.fE9,C.fEa,C.fDW,C.fEb,C.fDV,C.fEc,C.fE_,C.fDU,C.fE0,C.fDT,C.fE1,C.fDS,C.fE2,C.fDQ,C.fDR,C.fE3,C.fDO,C.fDP,C.fE4,C.fDN,C.e7P,C.e7Q,C.e7F,C.e7B,C.e7O,C.e7T,C.cPF,C.het,C.heu,C.e3B,C.e3t,C.e3s,C.e3L,C.cqI,C.f4s,C.e7b,C.e7c,C.e7d,C.e7f,C.ezo,C.f_P,C.f_Y,C.f_U,C.f_W,C.exX,C.exY,C.exZ])
u(B.j1,[C.fWU,C.er8,C.er6,C.eGz,C.eGM,C.dWT,C.dXf,C.e2w,C.fjj,C.fjk,C.fiX,C.fj9,C.fja,C.fj5,C.fjb,C.fiM,C.eFL,C.eFM,C.eGi,C.eGa,C.eG_,C.bTD,C.bTF,C.bTH,C.bTs,C.bTu,C.bNM,C.bNK,C.cxR,C.h9j,C.bNi,C.bNk,C.bNH,C.bNG,C.bN8,C.e7N,C.cPG,C.e3u,C.e3G,C.e3E,C.e3M,C.e3y,C.e3w,C.cqL,C.dVL,C.dVG,C.ezq])
u(B.af,[C.XH,C.Y4,C.Wu,C.WB,C.OW,C.aLj,C.Y3,C.alx,C.Xc,C.aAX,C.WW,C.YC,C.Xk,C.Wv,C.Xb,C.XY,C.Y9,C.Yt,C.XX])
u(B.ai,[C.bpn,C.aQj,C.aPn,C.aPs,C.aGT,C.aR9,C.aQh,C.aBh,C.bCV,C.aNP,C.aPD,C.aQD,C.aPK,C.aPp,C.boO,C.aHW,C.aIj,C.bq5,C.aQa])
u(B.j0,[C.er1,C.er2,C.ere,C.erf,C.era,C.er9,C.erb,C.er7,C.erc,C.er5,C.erd,C.er4,C.eri,C.erh,C.erj,C.erg,C.erk,C.erl,C.ern,C.eGS,C.eGU,C.eGV,C.eGB,C.eGA,C.eGy,C.eGH,C.eGI,C.eGE,C.eGJ,C.eGD,C.eGK,C.eGL,C.eGC,C.eGN,C.eGG,C.eGR,C.eGF,C.dVE,C.dVD,C.dVe,C.dVf,C.dVg,C.dVF,C.dVi,C.dVk,C.dVl,C.dVn,C.dVb,C.dVc,C.dVd,C.dVu,C.dVv,C.dVw,C.dVt,C.dVy,C.dVs,C.dVz,C.dVr,C.dVA,C.dVq,C.dVB,C.dVp,C.dVC,C.dVo,C.dWZ,C.dWY,C.dX2,C.dWV,C.dWW,C.dX3,C.dX4,C.dX5,C.dX0,C.dWR,C.dXe,C.dXd,C.dXg,C.dXh,C.dXi,C.dX7,C.dXj,C.d_C,C.e2u,C.e2t,C.e2v,C.fEn,C.fEo,C.fEp,C.fEq,C.fEr,C.fEs,C.fEt,C.fEu,C.fEv,C.fji,C.fjh,C.fj_,C.fiZ,C.fiP,C.fiO,C.fiS,C.fiV,C.fiU,C.fiW,C.fiT,C.fj7,C.fj6,C.fj8,C.fj0,C.fjc,C.fj3,C.fje,C.fj2,C.fjf,C.fj1,C.eFU,C.eFJ,C.eFT,C.eFF,C.eFV,C.eFX,C.eFG,C.eFH,C.eGh,C.eGg,C.eG7,C.eG8,C.eG9,C.eG3,C.eG4,C.eG2,C.eG5,C.eG1,C.eG6,C.eG0,C.eFZ,C.dwJ,C.bTG,C.bTI,C.bTt,C.bTv,C.bNn,C.bNo,C.bNm,C.bNp,C.bNr,C.bNc,C.bNd,C.bNh,C.bNe,C.bNf,C.bNg,C.bNI,C.bMN,C.bNy,C.bNz,C.bNw,C.bNx,C.bNt,C.bNu,C.bNv,C.bNE,C.bNs,C.bNF,C.bMO,C.bNa,C.bMV,C.bMU,C.bMW,C.bMX,C.bMT,C.bN0,C.bMS,C.bN1,C.bN2,C.bN3,C.bN4,C.bMR,C.bN5,C.bMQ,C.bN6,C.bMP,C.e7G,C.e7R,C.e7S,C.e7E,C.e7D,C.e7C,C.e7L,C.e7J,C.e7K,C.e7M,C.e7H,C.e7I,C.e7U,C.e7V,C.e7W,C.e7X,C.e7Y,C.e3C,C.e3D,C.e3N,C.e3A,C.e3O,C.e3P,C.e3H,C.e3I,C.e3J,C.e3K,C.e3Q,C.e3F,C.e3z,C.e3x,C.e3r,C.e3v,C.fED,C.fEE,C.fEF,C.fEG,C.fEH,C.fEI,C.fEJ,C.fEK,C.cqK,C.cqJ,C.f4t,C.f4p,C.f4o,C.f4r,C.f4q,C.ebo,C.ebp,C.ebj,C.ebl,C.ebm,C.ebk,C.ebn,C.dVM,C.dVJ,C.dVI,C.dVK,C.dVH,C.e7a,C.e79,C.e78,C.e77,C.e7e,C.e76,C.e75,C.e7g,C.e74,C.e7h,C.e73,C.e7i,C.e7j,C.e72,C.ezk,C.ezl,C.ezj,C.ezm,C.ezi,C.ezp,C.ezr,C.ezn,C.ezs,C.eMs,C.eMt,C.eMq,C.eMr,C.eMp,C.eMu,C.eMv,C.eMw,C.eMx,C.f_T,C.f_V,C.f_S,C.f_R,C.f_X,C.f_Q,C.ey_,C.ey0,C.exT,C.exS,C.exU,C.exR,C.exV,C.exQ,C.exW,C.exP,C.exO,C.exN,C.exM,C.cqG])
t(C.bD8,C.aQj)
t(C.aIa,C.bD8)
u(B.lQ,[C.bme,C.bga,C.bxM,C.beN,C.bwl,C.bvK,C.bft,C.bvM,C.bzS,C.bmc,C.alz,C.bdX,C.bAW,C.ahe,C.bB8,C.bvL,C.bqS])
t(C.aPo,C.aPn)
t(C.aGA,C.aPo)
t(C.bCS,C.aPs)
t(C.aGC,C.bCS)
u(B.ln,[C.LM,C.a2I,C.KK])
u(B.aw,[C.bwK,C.ahy,C.agl,C.RZ,C.bxh,C.aaM,C.bij])
t(C.aLk,C.aR9)
t(C.bmb,B.p1)
t(C.aI9,C.aQh)
t(C.aBi,C.aBh)
t(C.aly,C.aBi)
t(C.aH6,C.bCV)
t(C.bdY,C.aNP)
t(C.aGX,C.aPD)
t(C.bDf,C.aQD)
t(C.aIG,C.bDf)
t(C.bCX,C.aPK)
t(C.boX,C.bCX)
t(C.bCR,C.aPp)
t(C.bov,C.bCR)
t(C.bD6,C.aQa)
t(C.bpz,C.bD6)
w(C.aQj,B.cm)
w(C.bD8,E.o4)
w(C.aPn,B.cm)
w(C.aPo,E.o4)
w(C.aPs,B.cm)
w(C.bCS,E.o4)
w(C.aR9,B.eZ)
w(C.aQh,B.cm)
w(C.aBh,B.cm)
w(C.aBi,E.o4)
w(C.aNP,B.cm)
v(C.bCV,B.eG)
w(C.aPD,B.cm)
w(C.aPp,B.cm)
w(C.bCR,E.o4)
w(C.aPK,B.cm)
w(C.bCX,E.o4)
w(C.aQa,B.cm)
w(C.bD6,E.o4)
w(C.aQD,B.cm)
w(C.bDf,E.o4)})()
B.jj(b.typeUniverse,JSON.parse('{"XH":{"af":[],"x":[]},"bpn":{"ai":["XH"]},"Y4":{"af":[],"x":[]},"aIa":{"ai":["Y4"]},"bme":{"aC":[]},"Wu":{"af":[],"x":[]},"aGA":{"ai":["Wu"]},"WB":{"af":[],"x":[]},"aGC":{"ai":["WB"]},"bga":{"aC":[]},"ahy":{"aw":[],"x":[]},"agl":{"aw":[],"x":[]},"aLj":{"af":[],"x":[]},"OW":{"af":[],"x":[]},"aGT":{"ai":["OW"]},"bwK":{"aw":[],"x":[]},"RZ":{"aw":[],"x":[]},"bxM":{"aC":[]},"bxh":{"aw":[],"x":[]},"beN":{"aC":[]},"aLk":{"ai":["aLj"]},"bwl":{"aC":[]},"bvK":{"aC":[]},"bft":{"aC":[]},"bvM":{"aC":[]},"bzS":{"aC":[]},"Y3":{"af":[],"x":[]},"bmb":{"aC":[]},"aI9":{"ai":["Y3"]},"bmc":{"aC":[]},"alz":{"aC":[]},"alx":{"af":[],"x":[]},"aly":{"ai":["alx"]},"Xc":{"af":[],"x":[]},"aAX":{"af":[],"x":[]},"aH6":{"ai":["Xc"],"eG":[]},"bdY":{"ai":["aAX"]},"bdX":{"aC":[]},"WW":{"af":[],"x":[]},"aGX":{"ai":["WW"]},"bAW":{"aC":[]},"ahe":{"aC":[]},"aaM":{"aw":[],"x":[]},"YC":{"af":[],"x":[]},"Xk":{"af":[],"x":[]},"Wv":{"af":[],"x":[]},"Xb":{"af":[],"x":[]},"XY":{"af":[],"x":[]},"Y9":{"af":[],"x":[]},"Yt":{"af":[],"x":[]},"XX":{"af":[],"x":[]},"aIG":{"ai":["YC"]},"bB8":{"aC":[]},"boX":{"ai":["Xk"]},"bvL":{"aC":[]},"bov":{"ai":["Wv"]},"boO":{"ai":["Xb"]},"bqS":{"aC":[]},"aHW":{"ai":["XY"]},"aIj":{"ai":["Y9"]},"bq5":{"ai":["Yt"]},"bpz":{"ai":["XX"]},"bij":{"aw":[],"x":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("le<u?>"),G:w("u"),J:w("bl<o,H>"),Q:w("dd<o>"),Z:w("a_"),I:w("vp"),M:w("N<dl>"),l:w("N<a5C>"),h:w("N<a5H>"),V:w("N<ac>"),O:w("N<u>"),F:w("N<W>"),D:w("N<az<aH>>"),x:w("N<a_>"),E:w("N<ah<o>>"),b:w("N<ah<H>>"),U:w("N<ah<F?>>"),B:w("N<a9<o,aH>>"),g:w("N<m>"),bz:w("N<uk>"),v:w("N<h1>"),eZ:w("N<+(o,o)>"),fT:w("N<+(H,x)>"),L:w("N<+(F,o)>"),u:w("N<+(F,F)>"),r:w("N<+(o,o,a_)>"),e:w("N<+(o,H,H,F)>"),o:w("N<+(o,F,o,F)>"),d:w("N<+(o,o,H,H,a9<o,H>)>"),_:w("N<vS>"),fQ:w("N<acN>"),s:w("N<o>"),cF:w("N<au>"),X:w("N<L_>"),p:w("N<x>"),bL:w("N<adW>"),fH:w("N<ll>"),a_:w("N<ae9>"),cB:w("N<o7>"),ba:w("N<aer>"),eW:w("N<Dy>"),fY:w("N<a0E>"),ac:w("N<agp>"),cd:w("N<DJ>"),fr:w("N<ahl>"),e4:w("N<a2V>"),au:w("N<aMd>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<F>"),dS:w("N<aC?>"),fs:w("N<uk?>"),bN:w("N<F?>"),gJ:w("cB<aly>"),A:w("cB<ai<af>>"),bF:w("ah<u>"),gl:w("ah<W>"),ew:w("ah<aH>"),j:w("ah<@>"),P:w("a9<o,@>"),f:w("a9<@,@>"),bd:w("O<es,o>"),fR:w("O<+(H,x),x>"),w:w("ip"),gA:w("vt"),gD:w("wR"),k:w("cr"),K:w("aH"),Y:w("uk"),C:w("es"),N:w("o"),bO:w("au"),a:w("bq<H>"),W:w("b9<o>"),aC:w("b9<F?>"),dg:w("eh<rB>"),m:w("bf4"),a2:w("Du"),f3:w("rB"),es:w("Hd"),q:w("l6"),y:w("P"),i:w("H"),z:w("@"),S:w("F"),R:w("ah<@>?"),cK:w("aH?"),T:w("o?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6K=new B.dl(0,0.1)
D.b8H=new C.aWG(0,0,0)
D.N8=new C.aWG(0,0.5,0)
D.b9i=new B.ax(A.bf,1,A.r,-1)
D.baO=new B.aX(16,1/0,16,1/0)
D.baY=new B.aX(0,1/0,0,210)
D.bt5=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dHb=w([D.bt5,Av.alq],x.O)
D.eRW=new B.bV(A.C7,1.1,A.w,null,0,D.dHb,null,null)
D.bb5=new B.p(null,null,null,null,null,D.eRW,A.m)
D.bc2=new B.p(A.bh,null,null,null,null,null,A.a6)
D.fMz=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hqc=new B.D("\u26a1",null,D.fMz,null,null,null,null,null,null,null,null,null)
D.bgN=new B.cp(A.z,null,null,D.hqc,null)
D.aZO=new B.G(!0,A.bX,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hfk=new B.D("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aZO,null,A.K,null,null,null,null,null,null,null)
D.eJZ=new B.C(A.ob,D.hfk,null)
D.bgY=new B.cp(A.z,null,null,D.eJZ,null)
D.h4Z=new B.D("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aZO,null,A.K,null,null,null,null,null,null,null)
D.eKU=new B.C(A.I2,D.h4Z,null)
D.bhH=new B.cp(A.z,null,null,D.eKU,null)
D.ai9=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.blz=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.blQ=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bn5=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bnc=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bnz=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bpD=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bqN=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bry=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.akx=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bsz=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.akW=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.al3=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.buA=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.alv=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bwD=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bwL=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bxf=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.x1=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bzt=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.an3=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bFl=new B.bh(11e6)
D.bHe=new B.R(10,6,10,2)
D.bHg=new B.R(10,8,0,10)
D.bHV=new B.R(12,8,6,10)
D.bHY=new B.R(12,8,8,8)
D.bI4=new B.R(14,0,14,22)
D.bI6=new B.R(14,0,14,30)
D.bJa=new B.R(16,4,16,28)
D.bJt=new B.R(18,10,18,16)
D.bMh=new B.R(4,4,8,2)
D.bMU=new B.R(8,14,8,12)
D.bN4=new B.R(8,6,8,8)
D.bNq=new B.R(0,0,1.5,0)
D.b8t=new B.Ev(26,"saturation")
D.bNJ=new B.vd(A.cH,D.b8t,null,A.ZZ)
D.bNK=new B.h5(A.G,11)
D.bNO=new B.h5(A.G,30)
D.h40=new B.D("REACTION LAB",null,U.b_r,null,null,null,null,A.a2,null,1,null,null)
D.bNX=new B.bu(1,A.b9,D.h40,null)
D.h8b=new B.D("\ud83d\udce2 NGMY Ads",null,A.qF,null,null,null,null,A.f6,null,1,null,null)
D.bOV=new B.bu(1,A.b9,D.h8b,null)
D.h2B=new B.D("Wire selected",null,A.h6,null,null,null,null,null,null,null,null,null)
D.bP8=new B.bu(1,A.b9,D.h2B,null)
D.asf=new B.a_(62712,"MaterialIcons",!1)
D.bVv=new B.a_(62908,"MaterialIcons",!1)
D.bXb=new B.a_(983122,"MaterialIcons",!1)
D.bXr=new B.a_(983247,"MaterialIcons",!1)
D.bXI=new B.a_(983443,"MaterialIcons",!1)
D.bY0=new B.a_(983616,"MaterialIcons",!1)
D.bXa=new B.a_(983117,"MaterialIcons",!1)
D.c0R=new B.ae(D.bXa,28,A.c,null,null,null)
D.c18=new B.ae(A.jm,18,null,null,null,null)
D.c3r=new B.ae(A.oi,null,A.ac,null,null,null)
D.c3B=new B.ae(A.a5s,21,A.ac,null,null,null)
D.c4t=new B.ae(A.eI,17,A.ac,null,null,null)
D.c7q=new B.ae(A.jm,21,A.ac,null,null,null)
D.c7W=new B.ae(A.et,20,A.c3,null,null,null)
D.c91=new B.ae(A.e9,null,A.aQ,null,null,null)
D.dED=w([A.dl,A.di,A.dl],x.O)
D.aw_=new B.a6(A.a5,A.a9,A.w,D.dED,null,null)
D.dd6=w([A.bP,A.bl],x.O)
D.ccx=new B.a6(A.aW,A.b0,A.w,D.dd6,null,null)
D.ccM=new B.a6(A.aW,A.b0,A.w,A.a88,null,null)
D.dzK=w([F.NC,A8.and],x.O)
D.cdw=new B.a6(A.aW,A.b0,A.w,D.dzK,null,null)
D.dam=w([A.pI,A.iJ],x.O)
D.cdB=new B.a6(A.aW,A.b0,A.w,D.dam,null,null)
D.dcO=w([A.cU,A.ax],x.O)
D.awd=new B.a6(A.aW,A.b0,A.w,D.dcO,null,null)
D.dxz=w([A.d1,A.iM,A.bl],x.O)
D.cdU=new B.a6(A.a5,A.a9,A.w,D.dxz,null,null)
D.dK4=w([A.d1,A.bP,A.bl],x.O)
D.ce4=new B.a6(A.a5,A.a9,A.w,D.dK4,null,null)
D.dxH=w([A.cz,A.cx],x.O)
D.awg=new B.a6(A.aW,A.b0,A.w,D.dxH,null,null)
D.aGk=w([A.cU,M.nj],x.O)
D.cev=new B.a6(A.aW,A.b0,A.w,D.aGk,null,null)
D.ceN=new B.a6(A.aW,A.b0,A.w,X.awA,null,null)
D.cfF=new B.a6(A.aw,A.aD,A.w,A.Tw,null,null)
D.byb=new B.u(1,0.16470588235294117,0.16470588235294117,0.1803921568627451,A.q)
D.btl=new B.u(1,0.0392156862745098,0.0392156862745098,0.043137254901960784,A.q)
D.dmT=w([D.byb,D.btl],x.O)
D.cfJ=new B.a6(A.aW,A.b0,A.w,D.dmT,null,null)
D.cfT=new B.a6(A.aW,A.b0,A.w,H.aFB,null,null)
D.amN=new B.u(1,0.043137254901960784,0.043137254901960784,0.047058823529411764,A.q)
D.bxN=new B.u(1,0.22745098039215686,0.22745098039215686,0.23921568627450981,A.q)
D.dGA=w([D.amN,D.bxN,D.amN],x.O)
D.cg0=new B.a6(A.a5,A.a9,A.w,D.dGA,null,null)
D.bx9=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.by4=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cVv=w([A.OL,D.bx9,D.by4],x.O)
D.cg4=new B.a6(A.aW,A.b0,A.w,D.cVv,null,null)
D.cIE=w([A.de,A.j1],x.O)
D.cgj=new B.a6(A.aW,A.b0,A.w,D.cIE,null,null)
D.cWd=w([A.d1,A.hX,A.d1],x.O)
D.cgr=new B.a6(A.a5,A.a9,A.w,D.cWd,null,null)
D.bAV=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cJq=w([F.aih,D.bAV],x.O)
D.cgx=new B.a6(A.aW,A.b0,A.w,D.cJq,null,null)
D.chb=w([0,4,7],x.t)
D.chc=w([0,4,7,12],x.t)
D.chd=w([0,4,7,4],x.t)
D.aFg=w([A.hm,A.tu],x.O)
D.aEK=w([A.fL,A.cY],x.O)
D.aD3=w([A.bk,A.e1],x.O)
D.d3u=w([A.aQ,A.de],x.O)
D.dz9=w([A.c6,A.lX],x.O)
D.aCu=w([A.cX,A.kg],x.O)
D.d8Z=w([A.bQ,A.aM],x.O)
D.chB=w([D.aFg,D.aEK,A.a7j,D.aD3,D.d3u,A.a7f,A.a7w,D.dz9,D.aCu,D.d8Z],B.as("N<ah<u>>"))
D.cmj=w([120,220,380],x.t)
D.cq3=w([12,16,19,24],x.t)
D.cqf=w([1400,800,450,2400],x.t)
D.cyO=w([250,450,900,1500],x.t)
D.bkS=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bxz=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bvf=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bBw=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bum=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aBJ=w([D.bkS,D.bxz,D.bvf,D.bBw,D.bum],x.O)
D.fbT=new B.y(-25,A.ax)
D.f_S=new B.y(25,A.bC)
D.cIK=w([D.fbT,D.f_S],B.as("N<+(H,u)>"))
D.cQh=w([50,25,75],x.t)
D.cW5=w([0,5,10,15,18,20,25],x.t)
D.d3O=w([900,500,250,1600],x.t)
D.d8a=w([A.bk,A.bE,A.be,A.bk],x.O)
D.a7a=w([A.aC,A.bu,A.bh,A.aH,A.oS],x.O)
D.d9Z=w([A.ax,A.aC,A.cX,A.bu,A.bh,A.cJ,A.cj,A.bE,A.a_j],x.O)
D.a7d=w([0.04,0.17,0.3],x.n)
D.fvN=new C.vS("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fvT=new C.vS("Medium engine","A good all-rounder.",0.3,0.9)
D.fvS=new C.vS("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Jv=w([D.fvN,D.fvT,D.fvS],x._)
D.eY0=new B.y(6,"Easy")
D.eYP=new B.y(8,"Medium")
D.eTy=new B.y(10,"Hard")
D.dbN=w([D.eY0,D.eYP,D.eTy],x.L)
D.aDs=w([0.55,0.78,1],x.n)
D.aDD=w([A.c,A.hb,A.pK,A.ax],x.O)
D.aDL=w([A.bh,A.aC,A.bu,A.di],x.O)
D.fvK=new C.vS("Radar","Shows your height above the ground.",0.1,0)
D.fvL=new C.vS("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fvI=new C.vS("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aDU=w([D.fvK,D.fvL,D.fvI],x._)
D.dik=w([-29.5,28.5],x.n)
D.diq=w([A.bl,A.cm,F.O6,A.cz],x.O)
D.diO=w([47,100,220,470,1000],x.n)
D.dkd=w([0,0.32,0.62,1],x.n)
D.dki=w([A.d1,A.hX,A.d1,A.cz],x.O)
D.KE={volts:0}
D.a9b=new B.bl(D.KE,[3],x.J)
D.L6=new B.e1(["b","battery",0.2,0.3,D.a9b])
D.eDJ={on:0}
D.dQx=new B.bl(D.eDJ,[1],x.J)
D.FD=new B.e1(["s","switch",0.5,0.3,D.dQx])
D.ftj=new B.e1(["l","bulb",0.8,0.3,A.jK])
D.ddh=w([D.L6,D.FD,D.ftj],x.d)
D.FB=new B.b7(["b",0,"s",0])
D.fsd=new B.b7(["s",1,"l",0])
D.aVd=new B.b7(["l",1,"b",1])
D.dxP=w([D.FB,D.fsd,D.aVd],x.o)
D.dcC=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eSF=new C.nj("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.ddh,D.dxP,D.dcC)
D.aOT={ohms:0}
D.aMl=new B.bl(D.aOT,[220],x.J)
D.fsI=new B.e1(["r","resistor",0.5,0.3,D.aMl])
D.ftA=new B.e1(["d","led",0.8,0.3,A.jK])
D.dBp=w([D.L6,D.fsI,D.ftA],x.d)
D.frq=new B.b7(["b",0,"r",0])
D.fs7=new B.b7(["r",1,"d",0])
D.frx=new B.b7(["d",1,"b",1])
D.dLT=w([D.frq,D.fs7,D.frx],x.o)
D.dBS=w(["led","diode","indicator"],x.s)
D.eSM=new C.nj("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dBp,D.dLT,D.dBS)
D.aaI={level:0}
D.dPT=new B.bl(D.aaI,[0.2],x.J)
D.fsP=new B.e1(["p","pot",0.5,0.3,D.dPT])
D.fsR=new B.e1(["m","motor",0.8,0.3,A.jK])
D.ddE=w([D.L6,D.fsP,D.fsR],x.d)
D.frp=new B.b7(["b",0,"p",0])
D.fs2=new B.b7(["p",1,"m",0])
D.frY=new B.b7(["m",1,"b",1])
D.dGT=w([D.frp,D.fs2,D.frY],x.o)
D.dxs=w(["fan","motor","spin","dimmer"],x.s)
D.eSD=new C.nj("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.ddE,D.dGT,D.dxs)
D.a97=new B.bl(D.aaI,[0.9],x.J)
D.aVm=new B.e1(["s","solar",0.25,0.3,D.a97])
D.aVl=new B.e1(["l","bulb",0.75,0.3,A.jK])
D.dgR=w([D.aVm,D.aVl],x.d)
D.fsa=new B.b7(["s",0,"l",0])
D.frU=new B.b7(["l",1,"s",1])
D.dey=w([D.fsa,D.frU],x.o)
D.dHF=w(["solar","sun","without battery","no battery","free"],x.s)
D.eSG=new C.nj("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dgR,D.dey,D.dHF)
D.ftF=new B.e1(["c","crank",0.25,0.3,D.a97])
D.dvr=w([D.ftF,D.aVl],x.d)
D.frt=new B.b7(["c",0,"l",0])
D.frT=new B.b7(["l",1,"c",1])
D.dw9=w([D.frt,D.frT],x.o)
D.dvE=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eSC=new C.nj("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dvr,D.dw9,D.dvE)
D.dPS=new B.bl(D.aaI,[0.7],x.J)
D.fsW=new B.e1(["t","turbine",0.25,0.3,D.dPS])
D.fsG=new B.e1(["m","motor",0.75,0.3,A.jK])
D.doS=w([D.fsW,D.fsG],x.d)
D.fsl=new B.b7(["t",0,"m",0])
D.frZ=new B.b7(["m",1,"t",1])
D.dnE=w([D.fsl,D.frZ],x.o)
D.du4=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eSz=new C.nj("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.doS,D.dnE,D.du4)
D.aMi=new B.bl(D.KE,[9],x.J)
D.abR=new B.e1(["b","battery",0.2,0.3,D.aMi])
D.aVj=new B.e1(["r","radio",0.8,0.3,A.jK])
D.dIi=w([D.abR,D.FD,D.aVj],x.d)
D.fsf=new B.b7(["s",1,"r",0])
D.aVf=new B.b7(["r",1,"b",1])
D.cgP=w([D.FB,D.fsf,D.aVf],x.o)
D.dGE=w(["radio","music","listen"],x.s)
D.eSL=new C.nj("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dIi,D.cgP,D.dGE)
D.dQX=new B.bl(D.KE,[12],x.J)
D.aVi=new B.e1(["b","battery",0.2,0.3,D.dQX])
D.ftk=new B.e1(["t","tv",0.8,0.3,A.jK])
D.ddj=w([D.aVi,D.FD,D.ftk],x.d)
D.fsg=new B.b7(["s",1,"t",0])
D.aVg=new B.b7(["t",1,"b",1])
D.dzd=w([D.FB,D.fsg,D.aVg],x.o)
D.dIg=w(["tv","television","screen","watch"],x.s)
D.eSw=new C.nj("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.ddj,D.dzd,D.dIg)
D.ft9=new B.e1(["z","buzzer",0.8,0.3,A.jK])
D.cSG=w([D.L6,D.FD,D.ft9],x.d)
D.fsh=new B.b7(["s",1,"z",0])
D.fsz=new B.b7(["z",1,"b",1])
D.d7b=w([D.FB,D.fsh,D.fsz],x.o)
D.dEL=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eSI=new C.nj("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cSG,D.d7b,D.dEL)
D.fsQ=new B.e1(["h","heater",0.8,0.3,A.jK])
D.dsx=w([D.abR,D.FD,D.fsQ],x.d)
D.fsc=new B.b7(["s",1,"h",0])
D.frG=new B.b7(["h",1,"b",1])
D.d85=w([D.FB,D.fsc,D.frG],x.o)
D.cC8=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eSx=new C.nj("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dsx,D.d85,D.cC8)
D.ftm=new B.e1(["s","solar",0.2,0.25,D.a97])
D.dR1=new B.bl(D.aOT,[100],x.J)
D.ftp=new B.e1(["r","resistor",0.55,0.25,D.dR1])
D.fty=new B.e1(["c","capacitor",0.85,0.25,A.jK])
D.fsM=new B.e1(["q","resistor",0.55,0.6,D.aMl])
D.ftn=new B.e1(["d","led",0.85,0.6,A.jK])
D.dyA=w([D.ftm,D.ftp,D.fty,D.fsM,D.ftn],x.d)
D.fsb=new B.b7(["s",0,"r",0])
D.fs6=new B.b7(["r",1,"c",0])
D.frv=new B.b7(["c",1,"s",1])
D.fru=new B.b7(["c",0,"q",0])
D.fs5=new B.b7(["q",1,"d",0])
D.fry=new B.b7(["d",1,"c",1])
D.dlg=w([D.fsb,D.fs6,D.frv,D.fru,D.fs5,D.fry],x.o)
D.duF=w(["capacitor","store","charge","flash"],x.s)
D.eSK=new C.nj("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dyA,D.dlg,D.duF)
D.fsZ=new B.e1(["b","battery",0.15,0.3,D.a9b])
D.ftH=new B.e1(["l1","bulb",0.5,0.3,A.jK])
D.ft6=new B.e1(["l2","bulb",0.85,0.3,A.jK])
D.db5=w([D.fsZ,D.ftH,D.ft6],x.d)
D.fro=new B.b7(["b",0,"l1",0])
D.frQ=new B.b7(["l1",1,"l2",0])
D.frR=new B.b7(["l2",1,"b",1])
D.dpI=w([D.fro,D.frQ,D.frR],x.o)
D.dI0=w(["series","two bulbs","dim"],x.s)
D.eSA=new C.nj("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.db5,D.dpI,D.dI0)
D.eE5={volts:0,charge:1}
D.dR5=new B.bl(D.eE5,[1.5,0],x.J)
D.ftv=new B.e1(["b","battery",0.75,0.3,D.dR5])
D.dan=w([D.aVm,D.ftv],x.d)
D.fs9=new B.b7(["s",0,"b",0])
D.frs=new B.b7(["b",1,"s",1])
D.dlB=w([D.fs9,D.frs],x.o)
D.duR=w(["charge","rechargeable","flat","recharge"],x.s)
D.eSy=new C.nj("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.dan,D.dlB,D.duR)
D.dQW=new B.bl(D.KE,[4.5],x.J)
D.fsS=new B.e1(["b","battery",0.2,0.3,D.dQW])
D.aVh=new B.e1(["p","phone",0.8,0.3,A.jK])
D.doF=w([D.fsS,D.FD,D.aVh],x.d)
D.fse=new B.b7(["s",1,"p",0])
D.abQ=new B.b7(["p",1,"b",1])
D.dDr=w([D.FB,D.fse,D.abQ],x.o)
D.dFf=w(["phone","charger","usb","mobile"],x.s)
D.eSE=new C.nj("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.doF,D.dDr,D.dFf)
D.fsD=new B.e1(["f","fan",0.8,0.3,A.jK])
D.cu6=w([D.L6,D.fsD],x.d)
D.frn=new B.b7(["b",0,"f",0])
D.frE=new B.b7(["f",1,"b",1])
D.d8J=w([D.frn,D.frE],x.o)
D.dxr=w(["fan","cool","air","wind"],x.s)
D.eSN=new C.nj("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cu6,D.d8J,D.dxr)
D.ftd=new B.e1(["b","battery",0.15,0.2,D.a9b])
D.fsE=new B.e1(["a","ammeter",0.5,0.2,A.jK])
D.fsC=new B.e1(["l","bulb",0.85,0.2,A.jK])
D.ftf=new B.e1(["v","voltmeter",0.5,0.6,A.jK])
D.dvd=w([D.ftd,D.fsE,D.fsC,D.ftf],x.d)
D.frl=new B.b7(["b",0,"a",0])
D.frj=new B.b7(["a",1,"l",0])
D.fsn=new B.b7(["v",0,"l",0])
D.fso=new B.b7(["v",1,"l",1])
D.dls=w([D.frl,D.frj,D.aVd,D.fsn,D.fso],x.o)
D.dLS=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eSJ=new C.nj("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dvd,D.dls,D.dLS)
D.ftK=new B.e1(["b","battery",0.15,0.2,D.aMi])
D.fsY=new B.e1(["t","tv",0.55,0.2,A.jK])
D.aMj=new B.bl(D.KE,[5],x.J)
D.fsJ=new B.e1(["c","buck",0.4,0.5,D.aMj])
D.ft_=new B.e1(["p","phone",0.8,0.5,A.jK])
D.diA=w([D.ftK,D.fsY,D.fsJ,D.ft_],x.d)
D.frr=new B.b7(["b",0,"t",0])
D.aVb=new B.b7(["b",0,"c",0])
D.aVc=new B.b7(["c",1,"p",0])
D.doC=w([D.frr,D.aVg,D.aVb,D.aVc,D.abQ],x.o)
D.dgl=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eSB=new C.nj("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.diA,D.doC,D.dgl)
D.fsL=new B.e1(["c","buck",0.5,0.3,D.aMj])
D.d7S=w([D.aVi,D.fsL,D.aVh],x.d)
D.ddP=w([D.aVb,D.aVc,D.abQ],x.o)
D.cFH=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eSv=new C.nj("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d7S,D.ddP,D.cFH)
D.ft4=new B.e1(["d","diode",0.5,0.3,A.jK])
D.dpY=w([D.abR,D.ft4,D.aVj],x.d)
D.frm=new B.b7(["b",0,"d",0])
D.frz=new B.b7(["d",1,"r",0])
D.cVg=w([D.frm,D.frz,D.aVf],x.o)
D.dfY=w(["diode","protect","backwards","one way"],x.s)
D.eSH=new C.nj("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dpY,D.cVg,D.dfY)
D.TK=w([D.eSF,D.eSM,D.eSD,D.eSG,D.eSC,D.eSz,D.eSL,D.eSw,D.eSI,D.eSx,D.eSK,D.eSA,D.eSy,D.eSE,D.eSN,D.eSJ,D.eSB,D.eSv,D.eSH],B.as("N<nj>"))
D.i4D=new C.Hs("Moon",1.62,A.d1,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.i4B=new C.Hs("Mars",3.71,A.aC,"Mars has about 38 percent of Earth's gravity.")
D.i4E=new C.Hs("Mercury",3.7,A.kJ,"Mercury is small, so its gravity is like Mars.")
D.i4y=new C.Hs("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.i4A=new C.Hs("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.i4C=new C.Hs("Neptune",11.15,A.di,"Neptune pulls a little harder than Earth.")
D.i4z=new C.Hs("Jupiter",24.79,A.cX,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.u7=w([D.i4D,D.i4B,D.i4E,D.i4y,D.i4A,D.i4C,D.i4z],B.as("N<Hs>"))
D.dle=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dm2=w([0.2,0.5,0.8],x.n)
D.b5s=new C.LM(0,"accordion")
D.d96=w([A.k0,A.Ap,A.A9],x.x)
D.dhU=w(["Mail","SMS","Ad"],x.s)
D.d9R=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.i2N=new C.Bu(D.b5s,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aFg,D.d96,D.dhU,D.d9R)
D.afI=new C.LM(1,"flip")
D.duz=w([A.rB,A.Ed,A.rD],x.x)
D.dok=w(["Unlock","Verify","Secure"],x.s)
D.d7N=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.i2M=new C.Bu(D.afI,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aEK,D.duz,D.dok,D.d7N)
D.b5t=new C.LM(2,"towers")
D.dmV=w([A.An,A.mH,A.ix],x.x)
D.dml=w(["Save","Grow","Earn"],x.s)
D.cWj=w(["","",""],x.s)
D.i2O=new C.Bu(D.b5t,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a7j,D.dmV,D.dml,D.cWj)
D.afJ=new C.LM(3,"assemble")
D.dvI=w([A.ol,A.fQ,A.e9],x.x)
D.dh6=w(["Launch","Charge","Shine"],x.s)
D.drs=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.i2Q=new C.Bu(D.afJ,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aD3,D.dvI,D.dh6,D.drs)
D.b5u=new C.LM(4,"carousel")
D.dvs=w([A.be,A.ey],x.O)
D.di4=w([A.nr,A.asD,A.Rq],x.x)
D.dbC=w(["Explore","Discover","Learn"],x.s)
D.doN=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.i2L=new C.Bu(D.b5u,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dvs,D.di4,D.dbC,D.doN)
D.b5v=new C.LM(5,"burst")
D.dmg=w([A.hZ,A.v4],x.O)
D.d9K=w([A.kp,A.m7,A.hQ],x.x)
D.da8=w(["Cheer","Win","Love"],x.s)
D.dcL=w(["Make some noise","First place","Share the joy"],x.s)
D.i2P=new C.Bu(D.b5v,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dmg,D.d9K,D.da8,D.dcL)
D.aEr=w([D.i2N,D.i2M,D.i2O,D.i2Q,D.i2L,D.i2P],B.as("N<Bu>"))
D.flU=new B.b_("skin","Skin",A.a4N)
D.fnF=new B.b_("muscle","Muscles",A.QY)
D.fnh=new B.b_("organ","Organs",A.hQ)
D.bVb=new B.a_(62747,"MaterialIcons",!1)
D.fnr=new B.b_("bone","Skeleton",D.bVb)
D.fnN=new B.b_("vessel","Blood vessels",A.qh)
D.dn0=w([D.flU,D.fnF,D.fnh,D.fnr,D.fnN],x.r)
D.fvM=new C.vS("Simple legs","Light. Land gently.",0.15,0.2)
D.fvO=new C.vS("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fvR=new C.vS("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.EB=w([D.fvM,D.fvO,D.fvR],x._)
D.fqS=new B.b7(["beat",0.18,0.28,0])
D.fsi=new B.b7(["burst",0.7,0.2,0])
D.fst=new B.b7(["delay",0.45,0.5,1])
D.fs0=new B.b7(["ripple",0.75,0.6,3])
D.dgM=w([D.fqS,D.fsi,D.fst,D.fs0],x.e)
D.dtP=w([Q.ln,R.L4,F.Wk],x.u)
D.i_D=new C.Hd("First spark","A clock lights a burst and a ripple",D.dgM,D.dtP)
D.frD=new B.b7(["beat",0.15,0.3,1])
D.fp7=new B.b7(["ripple",0.62,0.15,0])
D.fsp=new B.b7(["delay",0.4,0.45,0])
D.frf=new B.b7(["ripple",0.7,0.45,0])
D.fqM=new B.b7(["delay",0.4,0.7,1])
D.fs3=new B.b7(["shake",0.75,0.75,0])
D.dJi=w([D.frD,D.fp7,D.fsp,D.frf,D.fqM,D.fs3],x.e)
D.eUG=new B.y(2,4)
D.aUM=new B.y(4,5)
D.dl2=w([Q.ln,R.L4,F.Wk,D.eUG,D.aUM],x.u)
D.i_F=new C.Hd("Heartbeat","Two thumps, then a shake",D.dJi,D.dl2)
D.fqY=new B.b7(["dice",0.15,0.7,1])
D.fsv=new B.b7(["echo",0.4,0.7,0])
D.frb=new B.b7(["comet",0.7,0.5,4])
D.fsj=new B.b7(["burst",0.72,0.2,1])
D.frA=new B.b7(["burst",0.3,0.25,0])
D.fqZ=new B.b7(["pop",0.55,0.85,0])
D.cBG=w([D.fqY,D.fsv,D.frb,D.fsj,D.frA,D.fqZ],x.e)
D.eU_=new B.y(1,3)
D.eU0=new B.y(1,4)
D.aUI=new B.y(0,5)
D.dvm=w([Q.ln,S.wk,D.eU_,D.eU0,D.aUI],x.u)
D.i_E=new C.Hd("Fireworks","Dice launch comets that burst in colour",D.cBG,D.dvm)
D.fr5=new B.b7(["beat",0.15,0.2,2])
D.frN=new B.b7(["chance",0.4,0.2,0])
D.fqV=new B.b7(["ball",0.7,0.12,3])
D.fqF=new B.b7(["chance",0.4,0.5,1])
D.fsu=new B.b7(["ball",0.3,0.08,1])
D.fpX=new B.b7(["ripple",0.7,0.55,3])
D.cuB=w([D.fr5,D.frN,D.fqV,D.fqF,D.fsu,D.fpX],x.e)
D.eUH=new B.y(2,5)
D.cSp=w([Q.ln,S.wk,R.abG,F.Wl,D.eUH],x.u)
D.i_C=new C.Hd("Rain","Balls fall at random and splash",D.cuB,D.cSp)
D.frO=new B.b7(["beat",0.12,0.45,2])
D.fsk=new B.b7(["toggle",0.38,0.2,0])
D.fsr=new B.b7(["wash",0.7,0.15,4])
D.fqX=new B.b7(["count3",0.38,0.45,0])
D.fsm=new B.b7(["burst",0.72,0.4,0])
D.frB=new B.b7(["light",0.55,0.7,1])
D.fqG=new B.b7(["pop",0.8,0.8,4])
D.dyy=w([D.frO,D.fsk,D.fsr,D.fqX,D.fsm,D.frB,D.fqG],x.e)
D.eVd=new B.y(3,6)
D.cxO=w([Q.ln,S.wk,R.abG,F.Wl,D.aUI,D.eVd],x.u)
D.i_A=new C.Hd("Disco","A beat drives lights, washes and bursts",D.dyy,D.cxO)
D.fsy=new B.b7(["button",0.12,0.2,0])
D.fqn=new B.b7(["delay",0.34,0.2,1])
D.fsx=new B.b7(["light",0.56,0.2,1])
D.fsq=new B.b7(["delay",0.56,0.45,1])
D.frP=new B.b7(["ball",0.34,0.6,0])
D.fqE=new B.b7(["delay",0.34,0.8,1])
D.foY=new B.b7(["burst",0.7,0.8,5])
D.chE=w([D.fsy,D.fqn,D.fsx,D.fsq,D.frP,D.fqE,D.foY],x.e)
D.eXv=new B.y(5,6)
D.dEW=w([Q.ln,S.wk,F.Wk,F.Wl,D.aUM,D.eXv],x.u)
D.i_B=new C.Hd("Domino","Tap the button and watch it run down the line",D.chE,D.dEW)
D.aEO=w([D.i_D,D.i_F,D.i_E,D.i_C,D.i_A,D.i_B],B.as("N<Hd>"))
D.dt0=w([0.05,0.15,0.25],x.n)
D.du2=w([1.5,3,4.5,9,12],x.n)
D.fk6=new B.b_("dice","Dice",A.oe)
D.flq=new B.b_("coin","Coin",V.Ag)
D.fnI=new B.b_("num","Number",A.xE)
D.duh=w([D.fk6,D.flq,D.fnI],x.r)
D.dul=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aEU=w([A.c3,A.aQ,A.bf,A.aH,A.bk,A.c6,A.cX,A.fL],x.O)
D.dvu=w([A.c6,A.aH,A.eL,A.bf],x.O)
D.dwI=w([],x.h)
D.eLI=new C.es("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eLO=new C.es("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eMs=new C.es("crank","Hand crank","\ud83d\udd04",A.cX,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eM4=new C.es("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eLA=new C.es("buck","Step-down converter","\ud83d\udd3d",A.fL,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eM2=new C.es("regulator","5 V regulator","\ud83e\uddca",A.bQ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eMx=new C.es("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eMe=new C.es("ldr","Light sensor","\ud83c\udf1e",A.eL,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eLT=new C.es("switch","Switch","\ud83c\udf9a\ufe0f",A.bk,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eMu=new C.es("fuse","Fuse","\ud83e\uddef",A.c3,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eLs=new C.es("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fL,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eMf=new C.es("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eMh=new C.es("bulb","Light bulb","\ud83d\udca1",A.eL,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eLQ=new C.es("led","LED","\ud83d\udd34",A.aC,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eLU=new C.es("motor","Motor","\u2699\ufe0f",A.bQ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eMb=new C.es("buzzer","Buzzer","\ud83d\udd14",A.c6,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eLJ=new C.es("heater","Heater","\ud83d\udd25",A.cX,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eM6=new C.es("capacitor","Capacitor","\ud83e\udeab",A.cw,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eLZ=new C.es("radio","Radio","\ud83d\udcfb",A.oS,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eLW=new C.es("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.be,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eLz=new C.es("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eLG=new C.es("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eLM=new C.es("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eMz=new C.es("speaker","Speaker","\ud83d\udd0a",A.c6,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eMo=new C.es("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eM1=new C.es("calculator","Calculator","\ud83e\uddee",A.NF,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eLF=new C.es("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cw,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eMy=new C.es("router","WiFi router","\ud83d\udcf6",A.fL,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eMB=new C.es("siren","Siren","\ud83d\udea8",A.aC,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eLv=new C.es("toycar","Toy car","\ud83d\ude97",A.cX,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eMC=new C.es("kettle","Kettle","\ud83e\uded6",A.nf,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eLD=new C.es("lamp","Desk lamp","\ud83e\ude94",A.eL,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eLP=new C.es("lights","Party lights","\ud83c\udf84",A.oS,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eM_=new C.es("fridge","Fridge","\ud83e\uddca",A.hn,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eLx=new C.es("washer","Washing machine","\ud83e\udee7",A.cw,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eMp=new C.es("blender","Blender","\ud83e\udd64",A.c3,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eLX=new C.es("drone","Drone","\ud83d\ude81",A.bQ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eLC=new C.es("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eM0=new C.es("torch","Torch","\ud83d\udd26",A.bO,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eMm=new C.es("neon","Neon sign","\ud83e\udea7",A.c6,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eLy=new C.es("microwave","Microwave","\ud83c\udf72",A.cX,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eMg=new C.es("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eLL=new C.es("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eMa=new C.es("console","Game console","\ud83c\udfae",A.bk,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eMr=new C.es("heartmon","Heart monitor","\ud83e\ude7a",A.hJ,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eLw=new C.es("aquarium","Aquarium","\ud83d\udc20",A.be,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eM5=new C.es("lighthouse","Lighthouse","\ud83d\uddfc",A.eL,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eMd=new C.es("discoball","Disco ball","\ud83e\udea9",A.oS,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eMw=new C.es("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eLu=new C.es("toaster","Toaster","\ud83c\udf5e",A.ef,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eMA=new C.es("ledstrip","LED strip","\ud83c\udf08",A.c6,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eMl=new C.es("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eM7=new C.es("hairdryer","Hair dryer","\ud83d\udca8",A.hZ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eMj=new C.es("headphones","Headphones","\ud83c\udfa7",A.bk,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eLE=new C.es("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eMv=new C.es("tablet","iPad Pro M5","\ud83d\udcf2",A.cw,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eLr=new C.es("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hJ,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eLY=new C.es("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eLR=new C.es("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eMc=new C.es("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.wW,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eLt=new C.es("iphonefold","iPhone Fold","\ud83d\udcf1",A.b2,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eLH=new C.es("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.di,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eMt=new C.es("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cJ,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eM8=new C.es("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bh,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eM3=new C.es("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ca,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eMk=new C.es("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aC,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eLS=new C.es("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eM9=new C.es("honor","Honor Magic V5","\ud83d\udcf1",A.cw,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eMi=new C.es("vivo","vivo X300 Pro","\ud83d\udcf1",A.cX,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eMn=new C.es("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eLq=new C.es("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cj,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eLV=new C.es("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cJ,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eLN=new C.es("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.be,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eLB=new C.es("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eL,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eLK=new C.es("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aC,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eMq=new C.es("vision","Apple Vision Pro","\ud83e\udd7d",A.bk,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Ua=w([D.eLI,D.eLO,D.eMs,D.eM4,D.eLA,D.eM2,D.eMx,D.eMe,D.eLT,D.eMu,D.eLs,D.eMf,D.eMh,D.eLQ,D.eLU,D.eMb,D.eLJ,D.eM6,D.eLZ,D.eLW,D.eLz,D.eLG,D.eLM,D.eMz,D.eMo,D.eM1,D.eLF,D.eMy,D.eMB,D.eLv,D.eMC,D.eLD,D.eLP,D.eM_,D.eLx,D.eMp,D.eLX,D.eLC,D.eM0,D.eMm,D.eLy,D.eMg,D.eLL,D.eMa,D.eMr,D.eLw,D.eM5,D.eMd,D.eMw,D.eLu,D.eMA,D.eMl,D.eM7,D.eMj,D.eLE,D.eMv,D.eLr,D.eLY,D.eLR,D.eMc,D.eLt,D.eLH,D.eMt,D.eM8,D.eM3,D.eMk,D.eLS,D.eM9,D.eMi,D.eMn,D.eLq,D.eLV,D.eLN,D.eLB,D.eLK,D.eMq],B.as("N<es>"))
D.dxl=w([5,10,15,25,45,60],x.t)
D.dxL=w([-0.045,0.03,-0.015],x.n)
D.aFo=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vZ=w([0.05,0.2,0.35],x.n)
D.aFs=w([A.d1,A.iM,A.v7,A.GT],x.O)
D.bdm=new B.ac(0,A.G,A.i0,A.dP,6)
D.dAQ=w([D.bdm],x.V)
D.eT8=new B.y(0,"AND")
D.eU2=new B.y(1,"Adder")
D.eUI=new B.y(2,"Blinker")
D.eVe=new B.y(3,"Memory")
D.dBD=w([D.eT8,D.eU2,D.eUI,D.eVe],x.L)
D.aFC=w([-104,0,104],x.n)
D.aFE=w([-14,3],x.n)
D.dCD=w([-8,0,8],x.n)
D.aFM=w([-92,0,92],x.n)
D.dD7=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fvJ=new C.vS("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fvQ=new C.vS("Medium tank","Balanced.",0.35,1)
D.fvP=new C.vS("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Uq=w([D.fvJ,D.fvQ,D.fvP],x._)
D.oq=w([0.04,0.2,0.36],x.n)
D.aFZ=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.fnf=new B.b_(D.b5s,"Fold",V.atB)
D.fm9=new B.b_(D.afI,"Flip",A.DU)
D.bVs=new B.a_(62889,"MaterialIcons",!1)
D.fnE=new B.b_(D.b5t,"Rise",D.bVs)
D.atO=new B.a_(983870,"MaterialIcons",!1)
D.fjr=new B.b_(D.afJ,"Assemble",D.atO)
D.fjE=new B.b_(D.b5u,"Spin",D.asf)
D.fjy=new B.b_(D.b5v,"Pop",A.kp)
D.dET=w([D.fnf,D.fm9,D.fnE,D.fjr,D.fjE,D.fjy],B.as("N<+(LM,o,a_)>"))
D.aG3=w([A.c6,A.eL,A.bw,A.aH,A.bk,A.c3],x.O)
D.dFl=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dGt=w([3,4.5,5,6,9],x.n)
D.be1=new B.ac(0,A.G,A.bb,A.J,16)
D.dGX=w([D.be1],x.V)
D.hdy=new B.D("\ud83e\uddcd",null,S.LZ,null,null,null,null,null,null,null,null,null)
D.cgB=new B.Jl(5,null,null,A.by,A.c6,null,null,null,null)
D.fCS=new B.a4(150,null,D.cgB,null)
D.fVq=new B.G(!0,A.ac,null,null,null,null,14,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hgU=new B.D("Getting the body ready...",null,D.fVq,null,null,null,null,null,null,null,null,null)
D.hdB=new B.D("Real 3D anatomy, kept on your phone",null,Ag.yj,null,null,null,null,null,null,null,null,null)
D.dH0=w([D.hdy,A.az,D.fCS,A.af,D.hgU,A.at,D.hdB],x.p)
D.dHA=w(["solar","turbine","crank","pot"],x.s)
D.dI4=w([0,0.35,0.75,1],x.n)
D.dJy=w(["volts","level","ohms","on"],x.s)
D.bpO=new B.u(1,0.23137254901960785,0.43529411764705883,0.8470588235294118,A.q)
D.bAZ=new B.u(1,0.0392156862745098,0.10196078431372549,0.25098039215686274,A.q)
D.dJC=w([A.alu,D.bpO,A.m1,D.bAZ],x.O)
D.dLb=w([A.k0,A.Ap,A.A9,A.rB,A.Ed,A.rD,A.An,A.mH,A.ix,A.ol,A.fQ,A.e9,A.hQ,A.ij,A.m7,A.kQ,A.rC,A.qf,A.lI,A.Iu,A.vL,A.DT,A.DR,A.Rn,A.It,A.E3,A.QY,A.at_,H.atK,A.kp],x.x)
D.eBp={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hSw=new C.z5("Switch",F.p8,A.bu,0,"Tap it to turn it ON or OFF.")
D.hSs=new C.z5("Blinker",A.mG,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hSt=new C.z5("AND",D.atO,A.cw,2,"ON only when BOTH inputs are ON.")
D.bWZ=new B.a_(63671,"MaterialIcons",!1)
D.hSr=new C.z5("OR",D.bWZ,A.bk,2,"ON when EITHER input is ON.")
D.hSu=new C.z5("XOR",A.a4F,A.c6,2,"ON when the inputs are DIFFERENT.")
D.hSo=new C.z5("NAND",A.tT,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bW3=new B.a_(63176,"MaterialIcons",!1)
D.hSp=new C.z5("NOR",D.bW3,A.fL,2,"ON only when BOTH inputs are OFF.")
D.hSq=new C.z5("NOT",W.E5,A.cX,1,"Flips the signal: ON becomes OFF.")
D.hSv=new C.z5("Light",A5.lf,A.eL,1,"Glows when its input is ON.")
D.hSx=new C.z5("Buzzer",T.pa,A.c3,1,"Beeps while its input is ON.")
D.B3=new B.bl(D.eBp,[D.hSw,D.hSs,D.hSt,D.hSr,D.hSu,D.hSo,D.hSp,D.hSq,D.hSv,D.hSx],B.as("bl<o,z5>"))
D.eDe={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.Bv=new C.KK(0,"tv")
D.fxm=new C.mv("Samsung Neo QLED 8K",D.Bv,F.za,A.aH)
D.fxc=new C.mv("LG OLED evo G5",D.Bv,A.eD,A.hJ)
D.fx3=new C.mv("Sony Bravia 9",D.Bv,A.tf,A.bv)
D.fx7=new C.mv("Apple TV 4K",D.Bv,A.dW,A.bP)
D.fx4=new C.mv("Bang and Olufsen Beovision",D.Bv,F.Cw,F.wW)
D.ac1=new C.KK(1,"iphone")
D.aVJ=new C.mv("iPhone 18 Pro Max",D.ac1,D.an3,A.cj)
D.Bx=new C.KK(3,"fold")
D.bBc=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fxh=new C.mv("iPhone Fold",D.Bx,D.bBc,A.b2)
D.Bw=new C.KK(2,"android")
D.fxi=new C.mv("Samsung Galaxy S26 Ultra",D.Bw,F.NC,A.di)
D.btq=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fxa=new C.mv("Samsung Galaxy Z Fold7",D.Bx,D.btq,A.cJ)
D.fx6=new C.mv("Google Pixel 10 Pro XL",D.Bw,A.d1,A.bh)
D.fxe=new C.mv("Xiaomi 16 Ultra",D.Bw,A.iv,A.ca)
D.fx9=new C.mv("Huawei Mate 80 Pro Max",D.Bw,A.ex,A.aC)
D.fx5=new C.mv("OPPO Find X9 Ultra",D.Bw,A.em,A.bf)
D.fxo=new C.mv("Honor Magic V5",D.Bx,A.dl,A.cw)
D.fxb=new C.mv("vivo X300 Pro",D.Bw,A.h_,A.cX)
D.aVK=new C.KK(4,"tablet")
D.fxg=new C.mv("iPad Pro M5",D.aVK,A.d1,A.aH)
D.ac2=new C.KK(5,"reader")
D.fxp=new C.mv("Kindle Scribe",D.ac2,A.cU,A.bv)
D.y6=new C.KK(6,"computer")
D.fxf=new C.mv("MacBook Pro M5 Max",D.y6,A.d1,A.cj)
D.fxl=new C.mv("iMac 32 inch",D.y6,A.bP,A.cJ)
D.fxd=new C.mv("Pro Display XDR 8K",D.y6,A.iv,A.be)
D.fx8=new C.mv("Sony Laser Projector",D.y6,A.cx,A.eL)
D.fxj=new C.mv("Luxury car touchscreen",D.y6,M.nj,A.aC)
D.fxn=new C.mv("Apple Vision Pro",D.y6,A.cz,A.bk)
D.fxk=new C.mv("Apple Watch Ultra",D.Bx,F.Cw,A.bw)
D.mN=new B.bl(D.eDe,[D.fxm,D.fxc,D.fx3,D.fx7,D.fx4,D.aVJ,D.fxh,D.fxi,D.fxa,D.fx6,D.fxe,D.fx9,D.fx5,D.fxo,D.fxb,D.fxg,D.fxp,D.fxf,D.fxl,D.fxd,D.fx8,D.fxj,D.fxn,D.fxk],B.as("bl<o,mv>"))
D.d8o=w([A.z],x.M)
D.d8T=w([A.aw,A.aD],x.M)
D.djY=w([A.aw,A.z,A.aD],x.M)
D.dlI=w([A.aw,A.lV,A.z,A.lt,A.aD],x.M)
D.dBz=w([A.aw,A.lV,A.a5,A.a9,A.lt,A.aD],x.M)
D.dQm=new B.d2([1,D.d8o,2,D.d8T,3,D.djY,4,A.aGF,5,D.dlI,6,D.dBz],B.as("d2<F,ah<dl>>"))
D.eE2={Calm:0,Box:1,Sleep:2}
D.cPJ=w([4,2,6,0],x.n)
D.cPQ=w([4,4,4,4],x.n)
D.cPR=w([4,7,8,0],x.n)
D.UT=new B.bl(D.eE2,[D.cPJ,D.cPQ,D.cPR],B.as("bl<o,ah<H>>"))
D.eBB={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.yJ=new C.a2I(0,"source")
D.dl6=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hZg=new C.qP("Clock",A.mG,D.yJ,A.bw,D.dl6)
D.hZc=new C.qP("Button",A.E8,D.yJ,A.aQ,A.M)
D.dGG=w(["random","quick","slow"],x.s)
D.hZn=new C.qP("Dice",A.oe,D.yJ,A.c6,D.dGG)
D.bWB=new B.a_(63484,"MaterialIcons",!1)
D.Gi=new C.a2I(1,"logic")
D.dM7=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hZj=new C.qP("Delay",D.bWB,D.Gi,A.cw,D.dM7)
D.dxt=w(["fast","mid","slow"],x.s)
D.hZo=new C.qP("Echo",A.atf,D.Gi,A.bk,D.dxt)
D.hZl=new C.qP("Every 2nd",W.E5,D.Gi,A.fL,A.M)
D.bWi=new B.a_(63309,"MaterialIcons",!1)
D.hZi=new C.qP("Every 3rd",D.bWi,D.Gi,A.aH,A.M)
D.cgW=w(["50%","25%","75%"],x.s)
D.hZq=new C.qP("Chance",A8.atQ,D.Gi,A.cX,D.cgW)
D.t3=new C.a2I(2,"out")
D.hZe=new C.qP("Light",A5.lf,D.t3,A.eL,A.M)
D.hZf=new C.qP("Burst",A.kp,D.t3,A.c6,A.M)
D.hZd=new C.qP("Ripple",A.Au,D.t3,A.be,A.M)
D.hZm=new C.qP("Ball",A.ats,D.t3,A.cX,A.M)
D.hZk=new C.qP("Comet",A.ol,D.t3,A.bk,A.M)
D.bY7=new B.a_(983669,"MaterialIcons",!1)
D.hZp=new C.qP("Shake",D.bY7,D.t3,A.c3,A.M)
D.hZr=new C.qP("Pop",A.DQ,D.t3,A.bf,A.M)
D.hZh=new C.qP("Wash",A.R1,D.t3,A.pQ,A.M)
D.nw=new B.bl(D.eBB,[D.hZg,D.hZc,D.hZn,D.hZj,D.hZo,D.hZl,D.hZi,D.hZq,D.hZe,D.hZf,D.hZd,D.hZm,D.hZk,D.hZp,D.hZr,D.hZh],B.as("bl<o,qP>"))
D.eC1={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bE_=new C.h9(20,4,13,!1)
D.bEq=new C.h9(14,5,13.5,!1)
D.bEh=new C.h9(9,2.4,10,!1)
D.bEv=new C.h9(7,5,12.5,!1)
D.bEk=new C.h9(8,3.5,12,!1)
D.bDW=new C.h9(15,2,6,!1)
D.bEt=new C.h9(45,6,13.5,!0)
D.bEb=new C.h9(10,8,13.5,!1)
D.bE3=new C.h9(25,3,12,!0)
D.bE9=new C.h9(35,4,12,!0)
D.bEa=new C.h9(40,4.5,9.5,!0)
D.bEc=new C.h9(55,3,9,!0)
D.bDX=new C.h9(18,3,9,!1)
D.bEs=new C.h9(22,4,13.5,!1)
D.bEl=new C.h9(16,5,13.5,!1)
D.bE7=new C.h9(30,4,9,!0)
D.bEE=new C.h9(5,3.5,13,!1)
D.bEf=new C.h9(25,3,13.5,!0)
D.bEo=new C.h9(14,2.5,9,!1)
D.bEe=new C.h9(6,6,13,!1)
D.bEw=new C.h9(30,1.2,5,!0)
D.bED=new C.h9(35,3,4.5,!0)
D.bEz=new C.h9(20,4.5,7.5,!0)
D.bEd=new C.h9(55,5.5,13.5,!0)
D.bDV=new C.h9(45,5.5,13.5,!0)
D.bEp=new C.h9(40,5.5,13.5,!0)
D.bEC=new C.h9(60,6,13.5,!0)
D.anz=new C.h9(28,4,7,!0)
D.HK=new C.h9(25,4,7,!0)
D.bE6=new C.h9(30,4,7,!0)
D.bE1=new C.h9(22,4,7,!0)
D.bE2=new C.h9(24,4,7,!0)
D.bEg=new C.h9(60,3,5.5,!0)
D.bDY=new C.h9(18,9,14,!0)
D.bE4=new C.h9(25,9,14,!0)
D.anA=new C.h9(30,8,14,!0)
D.bE0=new C.h9(20,8,14,!0)
D.bE8=new C.h9(30,9,14,!0)
D.bEx=new C.h9(22,5,9.5,!0)
D.bDZ=new C.h9(30,2.5,10.5,!0)
D.bEm=new C.h9(50,5.5,13.5,!0)
D.bEB=new C.h9(12,2,9.5,!1)
D.bEj=new C.h9(16,1.3,9.5,!0)
D.bEu=new C.h9(40,2.5,7,!0)
D.bEA=new C.h9(60,1.2,4.8,!0)
D.bEy=new C.h9(18,5,13.5,!0)
D.bEr=new C.h9(8,2,9.5,!1)
D.bEi=new C.h9(12,2.5,8,!1)
D.bE5=new C.h9(20,3.5,13.5,!0)
D.bEn=new C.h9(3.5,3,13,!1)
D.B4=new B.bl(D.eC1,[D.bE_,D.bEq,D.bEh,D.bEv,D.bEk,D.bDW,D.bEt,D.bEb,D.bE3,D.bE9,D.bEa,D.bEc,D.bDX,D.bEs,D.bEl,D.bE7,D.bEE,D.bEf,D.bEo,D.bEe,D.bEw,D.bED,D.bEz,D.bEd,D.bDV,D.bEp,D.bEC,D.anz,D.HK,D.bE6,D.HK,D.bE1,D.HK,D.bE2,D.anz,D.HK,D.bEg,D.bDY,D.bE4,D.anA,D.bE0,D.bE8,D.bEx,D.bDZ,D.bEm,D.bEB,D.bEj,D.bEu,D.bEA,D.HK,D.anA,D.bEy,D.bEr,D.bEi,D.bE5,D.bEn],B.as("bl<o,h9>"))
D.eBy={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.fiV=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eXs=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eXn=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.f9z=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.fax=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.f9v=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eVn=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.f7d=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.fj3=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.faU=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.f00=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eV1=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.f__=new B.y("Movement","They pull your legs together and help you balance.")
D.f11=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eXB=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.fg4=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.fhr=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.f6Y=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.fh9=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.f5p=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.fb1=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eV8=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.f1p=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.faG=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.f5N=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.fhi=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.f8X=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eVl=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.fbF=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ffF=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.fdB=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eTl=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.f8E=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.f8J=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.f2b=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eXT=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.f0O=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.f7r=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.feu=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.fj_=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.faZ=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eT0=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.f7E=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eTV=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.feK=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.fg0=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.f86=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.ff0=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eVa=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.fgN=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eZk=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.fe6=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.f1Q=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.f5H=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.fbk=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.fgY=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.fgP=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.fgT=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.f6g=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.fcj=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.fdy=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.fgu=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.f85=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.f3W=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.f2E=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.f8y=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.fbd=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.f4v=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.f5c=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eZJ=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.ffX=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.f_A=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eTS=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.f2a=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eTN=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eYo=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.f2f=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.f_J=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.fbB=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.f14=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.fiG=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.f2O=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.f68=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.f95=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.f_T=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.f_C=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dRw=new B.bl(D.eBy,[D.fiV,D.eXs,D.eXn,D.f9z,D.fax,D.f9v,D.eVn,D.f7d,D.fj3,D.faU,D.f00,D.eV1,D.f__,D.f11,D.eXB,D.fg4,D.fhr,D.f6Y,D.fh9,D.f5p,D.fb1,D.eV8,D.f1p,D.faG,D.f5N,D.fhi,D.f8X,D.eVl,D.fbF,D.ffF,D.fdB,D.eTl,D.f8E,D.f8J,D.f2b,D.eXT,D.f0O,D.f7r,D.feu,D.fj_,D.faZ,D.eT0,D.f7E,D.eTV,D.feK,D.fg0,D.f86,D.ff0,D.eVa,D.fgN,D.eZk,D.fe6,D.f1Q,D.f5H,D.fbk,D.fgY,D.fgP,D.fgT,D.f6g,D.fcj,D.fdy,D.fgu,D.f85,D.f3W,D.f2E,D.f8y,D.fbd,D.f4v,D.f5c,D.eZJ,D.ffX,D.f_A,D.eTS,D.f2a,D.eTN,D.eYo,D.f2f,D.f_J,D.fbB,D.f14,D.fiG,D.f2O,D.f68,D.f95,D.f_T,D.f_C],B.as("bl<o,+(o,o)>"))
D.e_p=new C.Wu(null)
D.e_C=new C.Wv(null)
D.e1G=new C.WB(null)
D.e6k=new C.Xb(null)
D.e6o=new C.Xc(null)
D.e6X=new C.Xk(null)
D.eaS=new C.XX(null)
D.ebP=new C.XY(null)
D.eg1=new C.Y3(null)
D.evV=new C.Y4(null)
D.evY=new C.Y9(null)
D.ey7=new C.Yt(null)
D.ey8=new C.aaM(null)
D.eAb=new C.YC(null)
D.eEh=new B.m(0,118)
D.eEi=new B.m(0,13)
D.eEj=new B.m(0,17)
D.eEm=new B.m(0,330)
D.eEt=new B.m(0,-17)
D.eEu=new B.m(0,-18)
D.eEv=new B.m(0,-19)
D.eEx=new B.m(0,-28)
D.eEz=new B.m(0,-31)
D.eEA=new B.m(0,-32)
D.eEG=new B.m(-9.5,-11)
D.eEJ=new B.m(10,20)
D.eEM=new B.m(10,-13)
D.eEO=new B.m(10,-22)
D.eEP=new B.m(10,-4)
D.eET=new B.m(11,0)
D.aaP=new B.m(11,8)
D.eEZ=new B.m(12,2)
D.eF_=new B.m(14,0)
D.eF0=new B.m(14,12)
D.aP8=new B.m(14,8)
D.eF1=new B.m(14,-17)
D.aPa=new B.m(14,-3)
D.aPb=new B.m(14,-4)
D.eF4=new B.m(15,0)
D.eF5=new B.m(15,-12)
D.eF8=new B.m(16,-8)
D.eF9=new B.m(18,14)
D.aPh=new B.m(20,0)
D.eFh=new B.m(20,15)
D.eFi=new B.m(20,-3)
D.eFj=new B.m(21,8)
D.eFk=new B.m(21,-36)
D.eFo=new B.m(22,10)
D.aPj=new B.m(22,8)
D.eFp=new B.m(22,-25)
D.eFq=new B.m(24,0)
D.eFr=new B.m(24,2)
D.eFu=new B.m(24,-18)
D.eFv=new B.m(24,-22)
D.eFz=new B.m(25,8)
D.eFA=new B.m(26,0)
D.eFE=new B.m(28,-30)
D.eFL=new B.m(30,18)
D.eFM=new B.m(30,2)
D.eFP=new B.m(31,19)
D.eFR=new B.m(32,0)
D.aPn=new B.m(34,0)
D.aPo=new B.m(34,-32)
D.KJ=new B.m(36,0)
D.eG3=new B.m(3,-1)
D.eG6=new B.m(40,3)
D.eGk=new B.m(4,11)
D.eGn=new B.m(4,-2)
D.eGr=new B.m(5,0)
D.eGs=new B.m(5,17)
D.eGt=new B.m(5,6)
D.eGy=new B.m(6,11)
D.eGA=new B.m(7,-19)
D.eGG=new B.m(8,7)
D.eGH=new B.m(8,-10)
D.eGI=new B.m(8,-14)
D.aPt=new B.m(9,0)
D.eGT=new B.m(-20.5,-17.6)
D.eGW=new B.m(-2.6,-1)
D.eH5=new B.m(2.6,1)
D.eHe=new B.m(-9,12.2)
D.eHS=new B.m(-10,12)
D.aPC=new B.m(-10,4)
D.eHW=new B.m(-11,0)
D.eHY=new B.m(-11,-34)
D.eI1=new B.m(-12,-5)
D.eI2=new B.m(-14,0)
D.eI3=new B.m(-14,13)
D.eI4=new B.m(-14,-19)
D.eI6=new B.m(-14,-23)
D.eI7=new B.m(-15,6)
D.eIa=new B.m(-16,14)
D.eIc=new B.m(-16,-8)
D.eId=new B.m(-17,10)
D.eIe=new B.m(-17,-18)
D.eIf=new B.m(-17,-8)
D.eIh=new B.m(-18,20)
D.eIi=new B.m(-18,-9)
D.aPF=new B.m(-20,0)
D.eIk=new B.m(-20,16)
D.eIl=new B.m(-20,-9)
D.VP=new B.m(-22,8)
D.eIm=new B.m(-22,-10)
D.eIn=new B.m(-24,10)
D.eIo=new B.m(-24,11)
D.eIp=new B.m(-24,14)
D.eIq=new B.m(-24,-22)
D.eIs=new B.m(-25,-11)
D.eIt=new B.m(-26,0)
D.eIu=new B.m(-26,-18)
D.eIv=new B.m(-27,-24)
D.eIw=new B.m(-28,-36)
D.eIx=new B.m(-2,9)
D.eIy=new B.m(-2,-10)
D.eIz=new B.m(-2,-20)
D.eIC=new B.m(-2,-9)
D.eIE=new B.m(-32,0)
D.aPH=new B.m(-34,0)
D.eIJ=new B.m(-40,3)
D.eIL=new B.m(-4,11)
D.eIM=new B.m(-4,-17)
D.eIN=new B.m(-4,-2)
D.eIR=new B.m(-5,0)
D.eIS=new B.m(-5,20)
D.eIT=new B.m(-5,6)
D.eIU=new B.m(-6,6)
D.eIV=new B.m(-6,-42)
D.aPJ=new B.m(-7,-19)
D.eIX=new B.m(-7,-24)
D.eIY=new B.m(-8,-1)
D.eJ0=new B.m(-8,-9)
D.aaZ=new B.m(-9,0)
D.eJ1=new B.m(-9,1)
D.eJ3=new B.m(-9,-23)
D.h4G=new B.D("Thinking\u2026",null,N.hI,null,null,null,null,null,null,null,null,null)
D.eK5=new B.C(A.jE,D.h4G,null)
D.hlS=new B.D("Start from a ready-made board",null,A.fK,null,null,null,null,null,null,null,null,null)
D.eKk=new B.C(A.vp,D.hlS,null)
D.bM4=new B.R(4,0,4,14)
D.h_G=new B.G(!0,A.aE,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5H=new B.D("Games and little helpers for a spare minute.",null,D.h_G,null,null,null,null,null,null,null,null,null)
D.eKy=new B.C(D.bM4,D.h5H,null)
D.dya=w([A.hX,A.bl],x.O)
D.eRN=new B.bV(A.z,0.5,A.w,null,0,D.dya,null,null)
D.eRO=new B.bV(A.z,0.5,A.w,null,0,D.aGk,null,null)
D.dnN=w([A.c,A.bQ],x.O)
D.eRQ=new B.bV(A.z,0.5,A.w,null,0,D.dnN,null,null)
D.dHR=w([A.bP,A.cz],x.O)
D.aUB=new B.bV(A.z,0.5,A.w,null,0,D.dHR,null,null)
D.d_2=w([A.c,A.bP],x.O)
D.eRV=new B.bV(A.n0,0.5,A.w,null,0,D.d_2,null,null)
D.bBg=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dFG=w([A.fy,D.bBg],x.O)
D.eS_=new B.bV(A.n0,0.5,A.w,null,0,D.dFG,null,null)
D.cSX=w([A.d1,A.cx],x.O)
D.eS0=new B.bV(A.z,0.5,A.w,null,0,D.cSX,null,null)
D.d78=w([A.hb,A.aQ,A.de],x.O)
D.eS3=new B.bV(A.n0,0.5,A.w,null,0,D.d78,null,null)
D.dyW=w([A.cz,M.nj],x.O)
D.eS4=new B.bV(A.n0,0.5,A.w,null,0,D.dyW,null,null)
D.eS9=new B.bV(A.z,0.5,A.w,null,0,D.aCu,null,null)
D.dIM=w([A.cz,A.iq],x.O)
D.eSh=new B.bV(A.z,0.5,A.w,null,0,D.dIM,null,null)
D.dhb=w([A.iM,A.bl],x.O)
D.eSk=new B.bV(A.n0,0.5,A.w,null,0,D.dhb,null,null)
D.aUG=new B.aQ(9,9)
D.eSq=new B.aQ(1.4,1.4)
D.eSs=new B.aQ(2.5,2.5)
D.ftO=new B.a5(10,-8,18,-2)
D.ftP=new B.a5(14,-14,20,14)
D.ftR=new B.a5(20,-2,30,2)
D.ftW=new B.a5(4,-13,30,-3)
D.fu1=new B.a5(8,-7,12,7)
D.fuf=new B.a5(-12,12,12,19)
D.fug=new B.a5(-12,14,12,22)
D.fuh=new B.a5(-12,-22,12,8)
D.fui=new B.a5(-12,-25,12,19)
D.fuj=new B.a5(-12,-26,12,-6)
D.fuk=new B.a5(-12,-4,12,14)
D.fum=new B.a5(-14,20,14,24)
D.fun=new B.a5(-14,6,14,10)
D.fuo=new B.a5(-14,-17,14,15)
D.fup=new B.a5(-14,-26,14,18)
D.fuq=new B.a5(-14,-26,14,-14)
D.fur=new B.a5(-14,-4,14,20)
D.fut=new B.a5(-15,-29,15,25)
D.fuu=new B.a5(-16,-16,16,16)
D.fux=new B.a5(-16,-22,-9,18)
D.fuy=new B.a5(-16,-24,16,-10)
D.fuA=new B.a5(-16,-2,16,20)
D.fuC=new B.a5(-18,20,18,24)
D.fuD=new B.a5(-18,-18,18,20)
D.fuE=new B.a5(-20,12,20,22)
D.fuF=new B.a5(-20,-28,20,26)
D.fuG=new B.a5(-22,15,22,19)
D.aVp=new B.a5(-22,-26,22,24)
D.fuI=new B.a5(-24,-12,10,22)
D.fuJ=new B.a5(-24,-14,22,8)
D.fuK=new B.a5(-24,-6,24,20)
D.aVq=new B.a5(-24,-9,24,9)
D.fuL=new B.a5(-25,14,25,19)
D.fuM=new B.a5(-26,-14,14,8)
D.fuN=new B.a5(-26,-4,26,20)
D.fuO=new B.a5(-26,-6,4,6)
D.aVr=new B.a5(-28,-13,28,13)
D.fuP=new B.a5(-28,-16,28,16)
D.fuQ=new B.a5(-28,-16,28,8)
D.fuR=new B.a5(-28,-22,28,22)
D.fuS=new B.a5(-29,-11,29,11)
D.fuT=new B.a5(-30,-12,30,14)
D.fuU=new B.a5(-30,-14,0,14)
D.fuV=new B.a5(-30,-18,30,20)
D.fuW=new B.a5(-30,-28,30,14)
D.fuX=new B.a5(-30,-2,30,18)
D.fuY=new B.a5(-30,-4,30,18)
D.fuZ=new B.a5(-32,-17,32,17)
D.fv_=new B.a5(-32,-28,32,18)
D.fv0=new B.a5(-33,-21,33,17)
D.fv1=new B.a5(-34,0,34,10)
D.fv2=new B.a5(-34,14,34,26)
D.abT=new B.a5(-34,-18,34,18)
D.fv3=new B.a5(-36,-24,36,20)
D.fv4=new B.a5(-38,-22,38,22)
D.fv6=new B.a5(-3,12,3,22)
D.fv7=new B.a5(-3,5,3,15)
D.fvb=new B.a5(-46,-34,46,28)
D.fvd=new B.a5(-48,-3,48,3)
D.fvg=new B.a5(-6,18,24,24)
D.fvh=new B.a5(-6,5,6,12)
D.fvi=new B.a5(-6,-22,6,-15)
D.fvm=new B.a5(-9,-16,9,22)
D.fvn=new B.a5(-4.5,-24,4.5,-21.2)
D.fvp=new B.a5(14,-9,17.5,9)
D.eDo={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aWy=new B.dd(D.eDo,5,x.Q)
D.eCR={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fz5=new B.dd(D.eCR,10,x.Q)
D.fBr=new B.av(24,44)
D.fBP=new B.av(54,38)
D.fBV=new B.av(66,38)
D.biI=new B.fp(2,null,null,null,null,A.bk,null,null,null,null)
D.fD_=new B.a4(16,16,D.biI,null)
D.aXD=new B.i_(3,12,12,0.82,null)
D.fQ0=new B.G(!0,A.wS,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKj=new B.eF("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cV,null,null,null,null,null,null,D.fQ0)
D.fVe=new B.G(!0,A.l4,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKp=new B.eF("AI",null,null,A.cV,null,null,null,null,null,null,D.fVe)
D.fKH=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLe=new B.G(!0,A.br,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLC=new B.G(!0,A.cw,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMv=new B.G(!0,A.c,null,null,null,null,13.5,A.C,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN1=new B.G(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzR=new B.d4(A.i0,A.dP,6)
D.dr8=w([D.fzR],B.as("N<d4>"))
D.fO1=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dr8,null,null,null)
D.fO6=new B.G(!0,A.ej,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOb=new B.G(!0,A.bX,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOP=new B.G(!0,A.bX,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOX=new B.G(!0,A.aE,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPX=new B.G(!0,A.bX,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ4=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQB=new B.G(!0,A.aE,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR6=new B.G(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR9=new B.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aGI,null,null,null)
D.fRg=new B.G(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS0=new B.G(!0,A.bF,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT9=new B.G(!0,A.vc,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTO=new B.G(!0,A.bO,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTX=new B.G(!0,A.aE,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUK=new B.G(!0,A.ms,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUV=new B.G(!0,A.cz,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZU=new B.G(!0,A.c,null,null,null,null,9.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW5=new B.G(!0,A.j1,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWp=new B.G(!0,A.bX,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWX=new B.G(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYv=new B.G(!0,A.v,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ1=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZj=new B.G(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZH=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZK=new B.G(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_X=new B.G(!0,A.vc,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0j=new B.G(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOe=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0I=new B.D("\u26a0\ufe0f ",null,D.fOe,null,null,null,null,null,null,null,null,null)
D.h0V=new B.D("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,Z.yn,null,null,null,null,null,null,null,null,null)
D.h2A=new B.D("Pick one, then change it and see what happens.",null,Z.yn,null,null,null,null,null,null,null,null,null)
D.fPs=new B.G(!0,A.ac,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3C=new B.D("What do you want to invent? Type it below, or tap an idea.",null,D.fPs,null,null,null,null,null,null,null,null,null)
D.fTJ=new B.G(!0,A.c3,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h49=new B.D("Burnt out! Press Repair.",null,D.fTJ,null,null,null,null,null,null,null,null,null)
D.h5h=new B.D("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.h5V=new B.D("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h6,null,null,null,null,null,null,null,null,null)
D.h6z=new B.D("Make it yours",null,A.jr,null,null,null,null,null,null,null,null,null)
D.h9P=new B.D("5G",null,A4.aZd,null,null,null,null,null,null,null,null,null)
D.haQ=new B.D("Pick how big the screen is on the board",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fWH=new B.G(!0,A.bX,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hb1=new B.D("WHAT HAPPENS",null,D.fWH,null,null,null,null,null,null,null,null,null)
D.hcN=new B.D("Check",null,null,null,null,null,null,null,null,null,null,null)
D.hds=new B.D("Change the words and pictures on the three slabs.",null,Z.yn,null,null,null,null,null,null,null,null,null)
D.hdF=new B.D("All the parts and wires will be removed.",null,A.hH,null,null,null,null,null,null,null,null,null)
D.he_=new B.D("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.heA=new B.D("Tap the crank on the board again and again to spin it faster.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.hfP=new B.D("\ud83c\udfaf Challenges",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hgl=new B.D("Remove this part",null,A2.aYO,null,null,null,null,null,null,null,null,null)
D.hgG=new B.D("Clear the board?",null,A.du,null,null,null,null,null,null,null,null,null)
D.fW6=new B.G(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hgY=new B.D("How the Lab works",null,D.fW6,null,null,null,null,null,null,null,null,null)
D.fMI=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hhi=new B.D("Electronics Lab",null,D.fMI,null,null,null,null,A.a2,null,1,null,null)
D.hhm=new B.D("?",null,R.b_q,null,null,null,null,null,null,null,null,null)
D.hiK=new B.D("Ready-made circuits",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hjp=new B.D("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fZo=new B.G(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hn1=new B.D("\u26a0 There is no air here, so a parachute will not work.",null,D.fZo,null,null,null,null,null,null,null,null,null)
D.hoc=new B.D("Download the scene (GIF)",null,A.cL,null,null,null,null,null,null,null,null,null)
D.hof=new B.D("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,A2.aYJ,null,null,null,null,null,null,null,null,null)
D.hoM=new B.D("NGMY",null,A.ws,null,null,null,null,null,null,null,null,null)
D.hp_=new B.D("You build a machine. A little light runs along the wires, and every part it touches does something.",null,Ai.M_,null,null,null,null,null,null,null,null,null)
D.hpo=new B.D("Tap it to change its setting. Drag from the right dot to connect.",null,A.mg,null,null,null,null,null,null,null,null,null)
D.hqv=new B.D("TOOLBOX",null,Af.adg,null,null,null,null,null,null,null,null,null)
D.hOZ=new B.b9("electronics-part-card",x.W)
D.hP0=new B.b9("device-learn-more",x.W)
D.hP6=new B.b9("device-remote",x.W)
D.hPb=new B.b9("device-picture",x.W)
D.hPT=new B.b9("electronics-part-about",x.W)
D.hQ_=new B.b9("body-loading",x.W)
D.hQ5=new B.b9("device-fullscreen",x.W)
D.hQs=new B.b9("core-protocol-back",x.W)
D.hQx=new B.b9("core-protocol-title-frame",x.W)})();(function staticFields(){$.hJv=null
$.hJr=null
$.hJs=null
$.hQv=0
$.ijC=B.S(x.N,B.as("iU"))
$.ikb=B.S(x.N,B.as("iU"))
$.aRI=B.S(x.N,B.as("iU"))
$.hMh=A.aB})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"iT9","bKg",()=>{var u="led"
return B.a([C.aBQ("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fDX(),u),C.aBQ("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fDY(),u),C.aBQ("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fDZ(),u),C.aBQ("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fE5(),u),C.aBQ("Not both","Make the light go OFF only when both switches are ON.",2,new C.fE6(),u),C.aBQ("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fE7(),"buzzer")],B.as("N<bfT>"))})
w($,"iTB","bKh",()=>B.a([C.S5("UNIVERSE","Earth, space and gravity",A.Rq,A.aH,new C.fEn()),C.S5("ELECTRONICS LAB","Batteries, wires, real circuits",Ao.vB,A.aH,new C.fEo()),C.S5("DISCOVERY LAB","Body Explorer: a real 3D human",D.bVv,A.bf,new C.fEp()),C.S5("TOOLBOX","Converter, clock, games",H.asq,A.cX,new C.fEq()),C.S5("REACTION LAB","Wire parts together",A.Ec,A.bw,new C.fEr()),C.S5("SPARK PAINTER","Paint with light",A.Is,A.c6,new C.fEs()),C.S5("ROCKET LANDER","Land softly on the pad",A.ol,A.aH,new C.fEt()),C.S5("TITLE ANIMATOR","Make a moving title",A.xF,A.bu,new C.fEu()),C.S5("CIRCUIT LAB","Connect logic, learn it",A.a52,A.cw,new C.fEv())],B.as("N<byo>")))
w($,"iVp","r0",()=>{var u,t,s=B.S(x.N,x.C)
for(u=0;u<76;++u){t=D.Ua[u]
s.n(0,t.a,t)}return s})
v($,"ioo","hZD",()=>B.aqt(0))
w($,"iSS","hZE",()=>{var u=B.cte()
u.seC(0,A.c.j(0.06))
u.c=2.2
u.d=A.bH
return u})
w($,"iTa","akC",()=>B.a([C.GY("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fE8()),C.GY("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fE9()),C.GY("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fEa()),C.GY("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fEb()),C.GY("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fEc()),C.GY("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fE_()),C.GY("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fE0()),C.GY("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fE1()),C.GY("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fE2()),C.GY("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fE3()),C.GY("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fE4())],B.as("N<bfU>")))
w($,"iTD","i_7",()=>B.a([C.a3e("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.ca,new C.fED()),C.a3e("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c3,A.bC,new C.fEE()),C.a3e("Breathe","Calm down in a minute","\ud83e\udee7",A.fL,A.cJ,new C.fEF()),C.a3e("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b2,new C.fEG()),C.a3e("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.cj,new C.fEH()),C.a3e("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.bh,new C.fEI()),C.a3e("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.b8,new C.fEJ()),C.a3e("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bk,A.aA,new C.fEK())],B.as("N<bzI>")))})()};
(a=>{a["oHSbpRZlCEMVUa9I6RaULKkhHRQ="]=a.current})($__dart_deferred_initializers__);