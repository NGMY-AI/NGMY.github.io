((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,W,A9,A5,N,Aa,A6,Ab,A7,X,P,Y,Ac,O,Ad,Ae,Af,Ag,Ah,Ai,Z,Aj,Ak,Al,Am,A_,U,An,Q,Ao,A0,R,S,A1,T,A2,Ap,E,I,G,L,Aq,Ar,A8,C={
bFj(d){return C.ioE(d)},
ioE(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bFj=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.qZ(B.nl(""),d,A.i7,null,null).d9(0,At.a1S),$async$bFj)
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
return B.i($async$bFj,v)},
iBl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.TN[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cX(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.f8(D.TN,new C.fXj())
if(w==null)w=A.d.gH(D.TN)
s=B.S(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.r1().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.amT(w.a,w.b,m,w,s,!1)},
iuG(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.O(D.Ud,new C.fLk(),x.bd).aJ(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iJW(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.c8(b2,"{")
v=A.a.oy(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.T.aN(0,A.a.av(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aN(a6.a(J.t(u,"parts"))),a8=x.i;a7.A();){q=a7.gP(a7)
p=B.v(J.t(q,"kind"))
o=B.v(J.t(q,"id"))
if(!$.r1().am(0,p)||J.eI(s,o)||J.aa(t)>=8)continue
J.bW(s,o)
n=B.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.dJK[a9]
l=J.t(q,m)
if(typeof l=="number")J.aL(n,m,l)}k=A.h.D(typeof J.t(q,"x")=="number"?B.dh(J.t(q,"x")):0.2+A.h.F(r,3)*0.3,0.16,0.84)
j=A.h.D(typeof J.t(q,"y")=="number"?B.dh(J.t(q,"y")):0.25+A.h.ao(r,3)*0.3,0.1,0.9)
J.bW(t,new B.e1([o,p,k,j,n]));++r}if(J.aa(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aN(a6.a(J.t(u,"wires")));a5.A();){h=a5.gP(a5)
g=a6.a(h)
if(J.aa(g)<4)continue
f=B.v(J.t(g,0))
e=B.v(J.t(g,2))
d=A.n.D(A.h.L(B.dh(J.t(g,1))),0,1)
a0=A.n.D(A.h.L(B.dh(J.t(g,3))),0,1)
if(J.eI(s,f)&&J.eI(s,e)&&!J.z(f,e))J.bW(i,new B.b7([f,d,e,a0]))}if(J.aa(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.R.a(J.t(u,"steps"))
a0=J.aN(a0==null?A.bL:a0)
while(a0.A()){a2=a0.gP(a0)
J.bW(a1,B.v(a2))}a3=a1
a0=J.t(u,"title")
a0=B.v(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.nj(a0,B.v(a1==null?"":a1),t,i,A.M)
a0=a4.a
a1=a4.b
d=J.aa(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.v(a5==null?"":a5)
return new C.amT(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
izP(d){var w,v,u=C.hAS()
d.C(u)
for(w=0;w<60;++w)u.wf(0,0.03333333333333333)
v=u.a
return A.d.aR(v,new C.fTj(u))&&!A.d.cE(v,new C.fTk())},
izO(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.r1().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.v(t.e)+" V")
if(p==="resistor")q.push(""+A.h.S(t.r)+" ohms")
if(A.d.q(D.dHJ,p))q.push("level "+A.h.S(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.h.S(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aJ(q,", ")+")"
s.push(B.v(p)+n+": "+o+", current "+A.h.a1(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aJ(s,"\n")+"\nWires: "+A.d.aJ(l,"; ")},
in1(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aJ(v,"\n")+"\n\n"}v=A.d.aJ(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
iBk(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.r1().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Ud[u]
if(A.d.aR(w,new C.fXg(s)))if(!B.cX(r,s.b.toLowerCase(),0))v=B.cX(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fXh(e),B.T(w).k("X<1>")).gar(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.h.a1(A.d.cH(w,0,new C.fXi())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.r1().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
amT:function amT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fXj:function fXj(){},
fLk:function fLk(){},
fTj:function fTj(d){this.a=d},
fTk:function fTk(){},
fXg:function fXg(d){this.a=d},
fXh:function fXh(d){this.a=d},
fXi:function fXi(){},
XJ:function XJ(d,e){this.c=d
this.a=e},
bpu:function bpu(d,e,f,g,h){var _=this
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
erb:function erb(d){this.a=d},
erc:function erc(d,e,f){this.a=d
this.b=e
this.c=f},
erd:function erd(d){this.a=d},
ero:function ero(d){this.a=d},
erp:function erp(d,e){this.a=d
this.b=e},
erk:function erk(d){this.a=d},
eri:function eri(d,e){this.a=d
this.b=e},
erj:function erj(d,e,f){this.a=d
this.b=e
this.c=f},
erl:function erl(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
erg:function erg(d){this.a=d},
erh:function erh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erm:function erm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
erf:function erf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ern:function ern(d,e){this.a=d
this.b=e},
ere:function ere(d,e){this.a=d
this.b=e},
ers:function ers(d){this.a=d},
err:function err(d){this.a=d},
ert:function ert(d){this.a=d},
erq:function erq(d){this.a=d},
eru:function eru(d,e){this.a=d
this.b=e},
erv:function erv(d,e){this.a=d
this.b=e},
erw:function erw(d,e){this.a=d
this.b=e},
erx:function erx(d,e){this.a=d
this.b=e},
bFG(d,e,f){var w=null
return B.w(B.a([B.c(d,w,w,w,w,w,w,D.fPg,w,w,w),B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hPm(d,e,f,g){var w=null,v=B.n(24),u=B.K(f.j(0.6),A.r,1)
return B.at(B.q(w,B.w(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aj,B.c(e,w,w,w,w,w,w,A.BO,A.K,w,w),A.az,B.bX(A.fX,g,A.bq,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(D.blU,w,u,v,w,w,A.m),w,w,w,w,A.ad,w,w,w),w,w,w)},
Hs:function Hs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vT:function vT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y6:function Y6(d){this.a=d},
aIg:function aIg(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.hi$=h
_.mp$=i
_.fl$=j
_.hj$=k
_.bw$=l
_.ab$=m
_.c=_.a=null},
eGJ:function eGJ(){},
eH2:function eH2(d){this.a=d},
eH1:function eH1(d,e){this.a=d
this.b=e},
eH3:function eH3(){},
eH4:function eH4(){},
eGL:function eGL(d,e,f){this.a=d
this.b=e
this.c=f},
eGK:function eGK(d,e){this.a=d
this.b=e},
eGA:function eGA(d){this.a=d},
eGB:function eGB(d){this.a=d},
eGC:function eGC(d){this.a=d},
eGD:function eGD(d){this.a=d},
eGE:function eGE(d){this.a=d},
eGF:function eGF(d){this.a=d},
eGG:function eGG(d){this.a=d},
eGH:function eGH(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGy:function eGy(d){this.a=d},
eGz:function eGz(d){this.a=d},
eGx:function eGx(d){this.a=d},
eGW:function eGW(d,e){this.a=d
this.b=e},
eGR:function eGR(d){this.a=d},
eGS:function eGS(d){this.a=d},
eGO:function eGO(d){this.a=d},
eGT:function eGT(d){this.a=d},
eGN:function eGN(d){this.a=d},
eGU:function eGU(d){this.a=d},
eGV:function eGV(d){this.a=d},
eGM:function eGM(d){this.a=d},
eGX:function eGX(d,e){this.a=d
this.b=e},
eGQ:function eGQ(d,e){this.a=d
this.b=e},
eGY:function eGY(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eH_:function eH_(d){this.a=d},
eH0:function eH0(d){this.a=d},
eGP:function eGP(d){this.a=d},
bml:function bml(d,e){this.b=d
this.a=e},
aQq:function aQq(){},
bDh:function bDh(){},
hJY(){var w=$.hJW
return w==null?$.hJW=$.oi().d13("assets/data/three.min.js"):w},
hJX(){var w=$.hJV
return w==null?$.hJV=C.cTA():w},
cTA(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cTA=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.oi().ii(0,"assets/data/body3d.bin"),$async$cTA)
case 3:d=a1
$.hJZ=J.eD(A.dM.gaS(d),d.byteOffset,d.byteLength)
t=B.U7(d)
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
e=D.dut[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a5K(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b8L))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bfb(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cTA,v)},
caj(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$caj=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.hd(B.a([C.hJX(),C.hJY()],x.D),x.K),$async$caj)
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
return B.i($async$caj,v)},
aWM:function aWM(d,e,f){this.a=d
this.b=e
this.c=f},
a5K:function a5K(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bfb:function bfb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ww:function Ww(d){this.a=d},
aGG:function aGG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.hi$=s
_.mp$=t
_.fl$=u
_.hj$=v
_.bw$=w
_.ab$=a0
_.c=_.a=null},
dVO:function dVO(d){this.a=d},
dVN:function dVN(d,e){this.a=d
this.b=e},
dVo:function dVo(d){this.a=d},
dVp:function dVp(d,e){this.a=d
this.b=e},
dVq:function dVq(d){this.a=d},
dVr:function dVr(){},
dVP:function dVP(){},
dVs:function dVs(d,e){this.a=d
this.b=e},
dVt:function dVt(d){this.a=d},
dVu:function dVu(){},
dVv:function dVv(d){this.a=d},
dVx:function dVx(d,e){this.a=d
this.b=e},
dVw:function dVw(d){this.a=d},
dVl:function dVl(d,e,f){this.a=d
this.b=e
this.c=f},
dVm:function dVm(d){this.a=d},
dVn:function dVn(d){this.a=d},
dVE:function dVE(d){this.a=d},
dVF:function dVF(d,e){this.a=d
this.b=e},
dVG:function dVG(d,e){this.a=d
this.b=e},
dVH:function dVH(d){this.a=d},
dVD:function dVD(d,e){this.a=d
this.b=e},
dVI:function dVI(d,e){this.a=d
this.b=e},
dVC:function dVC(d,e){this.a=d
this.b=e},
dVJ:function dVJ(d){this.a=d},
dVB:function dVB(d){this.a=d},
dVK:function dVK(d){this.a=d},
dVA:function dVA(d){this.a=d},
dVL:function dVL(d){this.a=d},
dVz:function dVz(d){this.a=d},
dVM:function dVM(d){this.a=d},
dVy:function dVy(d){this.a=d},
aPu:function aPu(){},
aPv:function aPv(){},
cak:function cak(d){var _=this
_.a=d
_.d=_.c=_.b=null},
cal:function cal(d,e){this.a=d
this.b=e},
cam:function cam(d){this.a=d},
aBW(d,e,f,g,h){return new C.bg_(d,e,f,g,h)},
hqA(d,e,f,g,h,i){return $.ikc.c0(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.d_L(d,e,f,i,g,h))},
z6:function z6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dv:function Dv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
o7:function o7(d,e,f){this.a=d
this.b=e
this.c=f},
bg_:function bg_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fEl:function fEl(){},
fEm:function fEm(){},
fEn:function fEn(){},
fEu:function fEu(){},
fEv:function fEv(){},
fEw:function fEw(){},
WD:function WD(d){this.a=d},
aGI:function aGI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.hi$=m
_.mp$=n
_.fl$=o
_.hj$=p
_.bw$=q
_.ab$=r
_.c=_.a=null},
dXu:function dXu(d){this.a=d},
dX8:function dX8(d,e){this.a=d
this.b=e},
dXb:function dXb(){},
dXv:function dXv(){},
dX6:function dX6(d,e){this.a=d
this.b=e},
dX7:function dX7(d,e){this.a=d
this.b=e},
dXc:function dXc(d,e,f){this.a=d
this.b=e
this.c=f},
dX1:function dX1(){},
dX2:function dX2(){},
dX3:function dX3(d){this.a=d},
dX4:function dX4(d,e){this.a=d
this.b=e},
dX5:function dX5(d,e,f){this.a=d
this.b=e
this.c=f},
dXd:function dXd(){},
dXe:function dXe(d,e){this.a=d
this.b=e},
dXf:function dXf(d){this.a=d},
dXa:function dXa(d,e){this.a=d
this.b=e},
dX9:function dX9(d){this.a=d},
dX0:function dX0(d,e,f){this.a=d
this.b=e
this.c=f},
dXo:function dXo(d){this.a=d},
dXn:function dXn(d){this.a=d},
dXp:function dXp(d){this.a=d},
dXm:function dXm(d){this.a=d},
dXk:function dXk(d){this.a=d},
dXl:function dXl(d){this.a=d},
dXj:function dXj(d){this.a=d},
dXg:function dXg(d){this.a=d},
dXi:function dXi(d){this.a=d},
dXq:function dXq(d,e){this.a=d
this.b=e},
dXr:function dXr(d,e){this.a=d
this.b=e},
dXs:function dXs(d){this.a=d},
dXh:function dXh(d){this.a=d},
dXt:function dXt(d,e){this.a=d
this.b=e},
bgh:function bgh(d,e){this.b=d
this.a=e},
d_L:function d_L(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aPz:function aPz(){},
bD0:function bD0(){},
iaI(){return new C.OX(null)},
S7(d,e,f,g,h){return new C.byx(d,e,f,g,h)},
bwQ(d,e,f){return A.h.D((d-e)/(f-e),0,1)},
hr7(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
iDn(){return B.iN("construction","")},
OX:function OX(d){this.a=d},
LM:function LM(d,e){this.a=d
this.b=e},
Bv:function Bv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aGZ:function aGZ(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
e2E:function e2E(d,e){this.a=d
this.b=e},
e2D:function e2D(d){this.a=d},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2F:function e2F(d){this.a=d},
byx:function byx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fEM:function fEM(){},
fEN:function fEN(){},
fEO:function fEO(){},
fEP:function fEP(){},
fEQ:function fEQ(){},
fER:function fER(){},
fES:function fES(){},
fET:function fET(){},
fEU:function fEU(){},
bwR:function bwR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fjy:function fjy(d){this.a=d},
fjx:function fjx(d,e){this.a=d
this.b=e},
fjv:function fjv(d){this.a=d},
fjz:function fjz(d){this.a=d},
fjw:function fjw(d,e){this.a=d
this.b=e},
ahB:function ahB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ago:function ago(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
S0:function S0(d,e,f,g,h,i,j,k,l,m){var _=this
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
bxT:function bxT(d,e){this.b=d
this.a=e},
bxo:function bxo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beU:function beU(d,e){this.b=d
this.a=e},
aLq:function aLq(d,e){this.c=d
this.a=e},
aLr:function aLr(d,e,f){var _=this
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
fje:function fje(d){this.a=d},
fjd:function fjd(d){this.a=d},
fj3:function fj3(d){this.a=d},
fj4:function fj4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fj5:function fj5(d){this.a=d},
fj2:function fj2(d,e){this.a=d
this.b=e},
fj6:function fj6(d){this.a=d},
fjc:function fjc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjb:function fjb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fj9:function fj9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fj8:function fj8(d,e,f){this.a=d
this.b=e
this.c=f},
fja:function fja(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fj7:function fj7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjm:function fjm(d){this.a=d},
fjl:function fjl(d){this.a=d},
fjn:function fjn(d,e){this.a=d
this.b=e},
fjo:function fjo(d,e){this.a=d
this.b=e},
fjp:function fjp(d,e){this.a=d
this.b=e},
fjk:function fjk(d,e,f){this.a=d
this.b=e
this.c=f},
fjq:function fjq(d,e,f){this.a=d
this.b=e
this.c=f},
fjj:function fjj(d){this.a=d},
fjf:function fjf(d){this.a=d},
fjr:function fjr(d){this.a=d},
fjs:function fjs(d){this.a=d},
fji:function fji(d,e){this.a=d
this.b=e},
fjt:function fjt(d,e){this.a=d
this.b=e},
fjh:function fjh(d,e){this.a=d
this.b=e},
fju:function fju(d,e){this.a=d
this.b=e},
fjg:function fjg(d,e){this.a=d
this.b=e},
fj0:function fj0(){},
fj1:function fj1(){},
bws:function bws(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvR:function bvR(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bfA:function bfA(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvT:function bvT(d,e,f){this.b=d
this.c=e
this.a=f},
bA0:function bA0(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aRg:function aRg(){},
hR4(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a6(0,new B.m(w,0)),u=e.aI(0,new B.m(w,0)),t=1-f,s=3*t
return d.aK(0,t*t*t).a6(0,v.aK(0,s*t*f)).a6(0,u.aK(0,s*f*f)).a6(0,e.aK(0,f*f*f))},
bmk(d,e,f,g,h,i){return $.ikM.c0(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.dwT(d,e,f,i,g,h))},
a2K:function a2K(d,e){this.a=d
this.b=e},
qQ:function qQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rC:function rC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dz:function Dz(d,e){this.a=d
this.b=e},
a0G:function a0G(d,e){this.a=d
this.b=e},
aho:function aho(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2X:function a2X(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
DK:function DK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aec:function aec(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeu:function aeu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ags:function ags(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bmi:function bmi(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dwX:function dwX(d){this.a=d},
dwY:function dwY(d){this.a=d},
dwU:function dwU(d,e){this.a=d
this.b=e},
dwV:function dwV(d){this.a=d},
dwW:function dwW(d){this.a=d},
dwZ:function dwZ(d){this.a=d},
dx_:function dx_(d){this.a=d},
dx0:function dx0(d){this.a=d},
dx1:function dx1(d){this.a=d},
dx2:function dx2(d){this.a=d},
dx3:function dx3(d){this.a=d},
dx4:function dx4(d){this.a=d},
dx5:function dx5(d){this.a=d},
dx6:function dx6(d){this.a=d},
Hd:function Hd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y5:function Y5(d){this.a=d},
aIf:function aIf(d,e,f,g,h,i,j){var _=this
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
eG3:function eG3(d){this.a=d},
eFT:function eFT(d){this.a=d},
eFV:function eFV(){},
eFW:function eFW(){},
eFZ:function eFZ(){},
eG_:function eG_(d,e,f){this.a=d
this.b=e
this.c=f},
eG0:function eG0(d){this.a=d},
eG1:function eG1(d){this.a=d},
eFX:function eFX(){},
eFY:function eFY(d){this.a=d},
eGt:function eGt(d){this.a=d},
eG2:function eG2(){},
eFP:function eFP(d){this.a=d},
eG5:function eG5(d){this.a=d},
eG4:function eG4(d){this.a=d},
eG7:function eG7(){},
eG6:function eG6(d,e){this.a=d
this.b=e},
eFS:function eFS(){},
eFQ:function eFQ(d){this.a=d},
eFR:function eFR(d){this.a=d},
eGr:function eGr(d){this.a=d},
eGq:function eGq(d){this.a=d},
eGs:function eGs(d){this.a=d},
eGh:function eGh(d,e){this.a=d
this.b=e},
eGp:function eGp(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGo:function eGo(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGl:function eGl(d){this.a=d},
eGi:function eGi(d){this.a=d},
eGj:function eGj(d){this.a=d},
eGk:function eGk(d){this.a=d},
eFU:function eFU(){},
eGd:function eGd(d){this.a=d},
eGe:function eGe(d){this.a=d},
eGc:function eGc(d){this.a=d},
eGf:function eGf(d){this.a=d},
eGb:function eGb(d){this.a=d},
eGg:function eGg(d){this.a=d},
eGa:function eGa(d){this.a=d},
eG9:function eG9(d){this.a=d},
eG8:function eG8(d,e){this.a=d
this.b=e},
bmj:function bmj(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dwT:function dwT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aQo:function aQo(){},
hX5(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aI(0,e).gcD()*0.1
return new B.m((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hAS(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a6S(w,v,u,A.cW,B.S(x.N,x.y))},
i4h(d,e,f){var w=d.c,v=e===0?-1:1
return new B.m(w*f.a+v*C.hAT(d),d.d*f.b)},
hAT(d){return 42+(D.mO.am(0,d.b)?(d.ch-1)*38:0)},
ioZ(d){var w,v,u,t,s
if(d.B(0,$.hMM))return $.i_d()
w=B.a([],x.n)
for(v=d.a,u=d.b,t=12;t<v;t+=24)for(s=12;s<u;s+=24){w.push(t)
w.push(s)}$.hMM=d
return $.ip_=new Float32Array(B.cd(w))},
es:function es(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ul:function ul(d,e,f,g){var _=this
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
acQ:function acQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
adZ:function adZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6S:function a6S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bTz:function bTz(){},
bTK:function bTK(d){this.a=d},
bTF:function bTF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTL:function bTL(d){this.a=d},
bTM:function bTM(d){this.a=d},
bTO:function bTO(d){this.a=d},
bTP:function bTP(d){this.a=d},
bTN:function bTN(d){this.a=d},
bTQ:function bTQ(d,e,f){this.a=d
this.b=e
this.c=f},
bTR:function bTR(d){this.a=d},
bTB:function bTB(d){this.a=d},
bTC:function bTC(d){this.a=d},
bTA:function bTA(d){this.a=d},
bTD:function bTD(d,e,f){this.a=d
this.b=e
this.c=f},
bTE:function bTE(d){this.a=d},
bTy:function bTy(d){this.a=d},
bTS:function bTS(d,e){this.a=d
this.b=e},
bTG:function bTG(d,e){this.a=d
this.b=e},
bTJ:function bTJ(d){this.a=d},
bTI:function bTI(d){this.a=d},
bTH:function bTH(d){this.a=d},
alE:function alE(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bNU:function bNU(){},
bNV:function bNV(){},
bNT:function bNT(){},
nj:function nj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cy_:function cy_(d){this.a=d},
iJR(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.h9J(),c9=new C.h9L(),d0=new C.h9M(),d1=new C.h9K(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aq(w,d1.$3(new B.a5(w.a,w.b,w.c,w.d),A.cm,A.bQ))
d3.ah(D.eID,D.eFz,c9.$2(A.e0,1.4))
d3.ah(D.eFe,D.eFc,c9.$2(A.bz,2.4))
d3.ah(D.eFf,U.aP9,c9.$2(A.bz,2.4))
if(c7){d2=c8.$1(A.fC.j(0.5))
d2.y=A.Ia
d3.O(D.eEV,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.h.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.m(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aq(d0.$4(-22,-26,44,50),d1.$3(D.aVs,A.aS,A.cH))
d3.O(A.cO,16,c8.$1(A.bz))
d3.O(A.cO,13,c8.$1(c7?A.aH.j(0.85):A.a_))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(0,4)
d3.jA(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.m(Math.cos(t)*11,Math.sin(t)*11),c9.$2(A.ab,3))}d2.restore()
for(d2=d5*0.8,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
d3.O(new B.m(Math.sin(v*2+d5)*9,4-u*12),1.6+u*2,c8.$1(A.c.j(0.8*(1-u))))}}d3.O(D.eIv,2.4,c8.$1(c7?A.bh:A.an))
d3.O(D.aPM,2.4,c8.$1(A.an))
return!0
case"blender":d3.aq(d0.$5(-14,14,28,12,4),c8.$1(A.cU))
d2=$.U().r
t=x.v
s=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
s.E(new B.b_(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bz())
d3.af(s,c8.$1(A.fC.j(0.35)))
if(c7){d2=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.b_(-14,-10))
d2.E(new B.aq(14,-10))
d2.E(new B.aq(12,14))
d2.E(new B.aq(-12,14))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.aC.j(0.7)))}d3.af(s,c9.$2(A.ab,1.6))
d2=d3.c
J.bs(d2.save())
d2.translate(0,10)
d3.jA(0,d4.y)
d3.ah(D.ab0,D.aPw,c9.$2(A.bP,3))
d2.restore()
if(c7)for(d2=d5*9,t=d5*1.6,v=0;v<3;++v)d3.O(new B.m(Math.sin(d2+v*2)*9,-10-A.h.F(t+v*0.33,1)*12),2.4,c8.$1(A.f1))
return!0
case"drone":d3.aq(d0.$5(-10,-4,20,10,4),c8.$1(A.aM))
d3.O(A.ht,3,c8.$1(c7?A.bh:A.an))
r=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.Ur[p]
d3.ah(new B.m(o*0.4,1),new B.m(o,t),c9.$2(A.bz,3))
J.bs(d2.save())
d2.translate(o,q)
d3.ah(D.eIm,D.eFj,c9.$2(A.c.j(c7?0.35:0.9),3))
if(c7)d3.c3(B.c1(A.J,6,24+Math.sin(d4.y*3)*4),c8.$1(A.c.j(0.25)))
d2.restore()}return!0
case"drill":w=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
w.E(new B.b_(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bz())
d3.af(w,d1.$3(D.fv7,A.aQ,A.de))
d3.aE(D.fud,c8.$1(A.d1))
d2=d3.c
J.bs(d2.save())
d2.translate(18,-5)
d3.jA(0,d4.y*2)
d3.ah(A.J,D.eFq,c9.$2(A.bP,2.4))
d3.ah(A.aaW,D.eFp,c9.$2(A.i0,1))
d2.restore()
if(c7)for(d2=d5*3,t=d5*20,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
d3.O(new B.m(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c8.$1(A.eL.j(1-u)))}return!0
case"torch":if(c7){v=A.h.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(16,-6))
d2.E(new B.aq(52,-26))
d2.E(new B.aq(52,18))
d2.E(new B.aq(16,4))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.bO.j(0.35*v)))}d3.aq(d0.$5(-26,-6,30,12,3),d1.$3(D.fvd,A.bl,A.cx))
n=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
n.E(new B.b_(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bz())
d3.af(n,c8.$1(A.cU))
d3.O(D.eFv,7,c8.$1(c7?A.c:A.d1))
return!0
case"neon":d3.aq(d0.$5(-30,-14,60,28,6),c8.$1(M.nl))
if(c7)m=d4.ax>0.5||A.n.F(A.h.ba(d5*17),3)!==0
else m=!1
l=m?A.c6:D.bwH
if(m){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c6.j(0.35))
t.y=A.nr
d3.aq(d2,t)}d3.aq(d0.$5(-27,-11,54,22,5),c9.$2(l,2.2))
d6.$5(d3,"OPEN",D.eIJ,l,17)
return!0
case"microwave":d3.aq(d0.$4(-30,-18,60,38),d1.$3(D.fvk,A.bP,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aq(d2,c8.$1(c7?A.bO.j(0.75):A.ax))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(-7,8)
d3.jA(0,d4.y*0.5)
d3.c3(B.c1(A.J,7,22),c8.$1(A.de))
d2.restore()}d3.aq(d0.$5(15,-14,12,12,2),c8.$1(M.nl))
if(c7)d6.$5(d3,"0:"+A.a.aY(A.n.v(59-A.n.F(A.h.ba(d5),60)),2,"0"),D.eFw,A.bf,6.5)
d3.O(D.eFK,4,c8.$1(A.d1))
return!0
case"doorbell":d3.aq(d0.$5(-16,-26,32,52,8),c8.$1(A.bo))
d3.O(A.KJ,10,c8.$1(c7?A.bu:A.bz))
d2=d3.c
J.bs(d2.save())
d2.translate(0,-8)
d3.jA(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eJr,A.c,16)
d2.restore()
d3.O(A.ky,6,c8.$1(A.di))
d3.O(A.ky,6,c9.$2(A.c,1.6))
if(c7)for(d2=d5*14,v=1;v<=2;++v)d3.cR(B.c0(A.KJ,14+v*6+A.h.F(d2,6)),-0.9,1.8,!1,c9.$2(A.bu.j(0.9-v*0.3),1.8))
return!0
case"camera":d3.ah(D.eII,D.eJk,c9.$2(A.bz,4))
d2=d3.c
J.bs(d2.save())
d3.jA(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aq(d0.$5(-24,-14,46,22,5),d1.$3(D.fv8,A.bP,A.an))
d3.O(D.aPd,8,c8.$1(A.ax))
d3.O(D.aPd,4.5,c8.$1(c7?A.aH:A.cx))
d3.O(D.eIG,2.2,c8.$1(c7&&A.n.F(A.h.ba(d5*1.6),2)===0?A.aC:A.kK))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eIQ,A.aC,9)
return!0
case"console":d3.aq(d0.$5(-28,-22,56,44,8),d1.$3(D.fvg,A.i2,A.fy))
d3.aq(d0.$5(-20,-17,40,22,3),c8.$1(A.e_))
if(c7){d2=d5*2.3
d3.O(new B.m(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aE(new B.a5(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aE(new B.a5(15.6,d2,18,d2+8),c8.$1(A.c6))}d3.O(D.eIB,4,c8.$1(A.ba))
d3.O(D.eFr,2.4,c8.$1(A.aC))
d3.O(D.eFI,2.4,c8.$1(A.bh))
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
if(o===-25){q=new B.b_(o,i)
t.push(q)
h=k.f
if(h!=null)q.aj(h)
k.ac()}else{q=new B.aq(o,i)
t.push(q)
h=k.f
if(h!=null)q.aj(h)
k.ac()}}d3.af(k,c9.$2(A.bf,1.8))
d6.$5(d3,"72",D.eFs,A.hK,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eIV,A.hK.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.O(D.eIL,3,c8.$1(c7?A.bh:A.bz))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aq(d2,c8.$1(A.cJ.j(c7?0.5:0.3)))
d3.aq(d0.$5(-26,-20,52,40,4),c9.$2(A.ab,1.6))
d3.aE(D.fva,c8.$1(F.wY))
if(c7){d2=d5*1.1
t=Math.sin(d2)
q=d3.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.nZ(0,-1,1)
d3.c3(B.c1(A.J,8,14),c8.$1(A.cX))
d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(-6,0))
d2.E(new B.aq(-12,-4))
d2.E(new B.aq(-12,4))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.ca))
d3.O(D.eGu,1.2,c8.$1(A.v))
q.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.h.F(d2+v*0.2,1)
d3.O(new B.m(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.n.F(v,2),c9.$2(A.ab,1))}}return!0
case"lighthouse":d2=$.U().r
t=x.v
g=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
g.E(new B.b_(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bz())
d3.af(g,d1.$3(D.fvM,A.c,A.bC))
d3.aE(D.fvI,c8.$1(c7?A.eL:A.bz))
q=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
q.E(new B.b_(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bz())
d3.af(q,c8.$1(A.eE))
if(c7){f=Math.sin(d4.y*0.3)
d2=new B.aJ(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.b_(0,-19))
t=f*34
d2.E(new B.aq(t,-26))
d2.E(new B.aq(t,-12))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.eL.j(0.45)))
d2=c8.$1(A.eL.j(0.35))
d2.y=A.Ia
d3.O(D.eEW,14,d2)}return!0
case"discoball":d3.ah(D.eEY,V.aP4,c9.$2(A.d1,1.4))
d3.O(A.J,16,d1.$3(D.fuU,A.aS,A.an))
for(v=0;v<8;++v){d2=-12+v*3.4
d3.ah(new B.m(-16,d2),new B.m(16,d2),c9.$2(A.dH,0.7))}for(v=0;v<5;++v){f=d4.y*0.5+v*1.26
d3.ah(new B.m(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.m(Math.cos(f)*16,0),c9.$2(A.dH,0.7))}if(c7)for(d2=d5*2,t=d5*9,v=0;v<10;++v){f=d2+v*0.63
e=22+A.n.F(v,3)*6
d3.O(new B.m(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c8.$1(D.dvD[A.n.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d3.aq(d0.$5(-14,-4,28,24,5),d1.$3(D.fuR,A.cH,A.an))
d3.aq(d0.$5(-12,-26,24,20,5),d1.$3(D.fuJ,A.bo,A.bQ))
d3.ah(H.aP6,D.eF_,c9.$2(A.bz,1.6))
d3.O(D.eF0,2.2,c8.$1(c7?A.aC:A.bz))
d=c7&&A.h.F(d5*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a8j[p]
if(c7)d2=d?A.be:A.ey
else d2=A.cx
d3.O(new B.m(o,-17),3.2,c8.$1(d2))}d2=d3.c
J.bs(d2.save())
d2.translate(14,0)
d3.jA(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.ah(A.J,D.aaR,c9.$2(A.bQ,4))
d2.restore()
d3.ah(D.eIt,D.eIO,c9.$2(A.bQ,4))
d3.aE(D.fvH,c8.$1(c7?A.be.j(0.7):A.aM))
return!0
case"toaster":a0=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a0*14,p=0;p<2;++p){t=d0.$5(D.aFH[p]+1,d2,10,14,2)
q=B.ap(A.bO,A.de,a0)
q.toString
d3.aq(t,c8.$1(q))}d3.aq(d0.$5(-24,-6,48,26,8),d1.$3(D.fv9,A.bP,A.bl))
for(p=0;p<2;++p){o=D.aFH[p]
d2=d0.$5(o,-5,12,5,2)
d3.aq(d2,c8.$1(c7?A.fN:A.ax))
if(c7){d2=d0.$5(o,-5,12,5,2)
t=c8.$1(A.cX.j(0.5))
t.y=O.p2
d3.aq(d2,t)}}d3.ah(D.eFS,D.eGc,c9.$2(A.ax,3))
return!0
case"ledstrip":d3.aq(d0.$5(-34,-4,68,10,4),c8.$1(A.cx))
for(d2=d5*90,v=0;v<9;++v){a1=A.h.F(d2+v*40,360)
l=c7?new Aw.pI(1,a1,0.8,1).jo():A.cU
if(c7){t=c8.$1(l.j(0.45))
t.y=O.p2
d3.O(new B.m(-30+v*7.5,1),7,t)}d3.O(new B.m(-30+v*7.5,1),2.6,c8.$1(l))}d3.aq(d0.$5(-40,-2,6,6,1),c8.$1(A.d1))
return!0
case"pump":d3.aq(d0.$5(-16,-2,32,22,6),d1.$3(D.fv_,A.cJ,A.H4))
d3.O(D.eIY,8,c8.$1(A.tq))
d2=d3.c
J.bs(d2.save())
d2.translate(-2,9)
d3.jA(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.m(Math.cos(t)*7,Math.sin(t)*7),c9.$2(A.fC,2.4))}d2.restore()
d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(16,6))
d2.E(new B.aq(26,6))
d2.E(new B.aq(26,-20))
d2.E(new B.aq(10,-20))
d3.af(d2,c9.$2(A.bQ,4))
if(c7){for(d2=d5*0.9,v=0;v<5;++v)d3.O(new B.m(26,6-A.h.F(d2+v*0.2,1)*26),2.2,c8.$1(A.hn))
d3.O(D.eH8,3.2,c8.$1(A.hn.j(0.7)))}return!0
case"hairdryer":d2=d3.c
J.bs(d2.save())
d3.jA(0,-0.15)
d3.aq(d0.$5(-26,-14,40,22,10),d1.$3(D.fvb,A.hZ,A.v4))
d3.aq(d0.$5(14,-10,12,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-10,6,12,22,4),c8.$1(A.cU))
d2.restore()
if(c7){for(d2=d5*3,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
t=u*18
q=-10+v*5
d3.ah(new B.m(24+t,q),new B.m(32+t,q),c9.$2(A.c.j(1-u),1.8))}d2=c8.$1(A.cX.j(0.4))
d2.y=O.p2
d3.O(D.eFJ,8,d2)}return!0
case"headphones":d3.cR(B.c1(A.dP,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bz,4))
for(d2=d5*12,p=0;p<2;++p){o=F.Uq[p]
t=o-7
d3.aq(d0.$5(t,0,14,20,6),d1.$3(new B.a5(t,0,t+14,20),A.bk,A.ne))
if(c7)for(t=o<0,v=1;v<=2;++v){q=B.c0(new B.m(o,10),10+v*5+A.h.F(d2,5))
h=t?2.2:-0.9
d3.cR(q,h,1.6,!1,c9.$2(A.eM.j(0.9-v*0.3),1.6))}}if(c7)d6.$5(d3,"\u266a",new B.m(-4,-8-A.h.F(d5*14,8)),A.l4,12)
return!0
case"smartwatch":d3.aq(d0.$5(-8,-30,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-8,14,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-14,-17,28,32,8),d1.$3(D.fuO,A.d1,A.cU))
d3.aq(d0.$5(-11,-14,22,26,6),c8.$1(A.e_))
if(c7){a2=new B.W(Date.now(),0,!1)
d6.$5(d3,A.a.aY(A.n.v(B.cY(a2)),2,"0")+":"+A.a.aY(A.n.v(B.fy(a2)),2,"0"),D.eF6,A.bf,9.5)
j=(Math.sin(d5*9)+1)/2
d2=B.ap(A.GN,A.hK,j)
d2.toString
d6.$5(d3,"\u2665",new B.m(-8,1),d2,8+j*2)
d6.$5(d3,""+(70+A.n.F(A.h.ba(d5*2),6)),A.dP,A.c,7)}return!0
case"tablet":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(M.nl))
d3.aq(d0.$5(-30,-22,60,44,6),c9.$2(A.bQ,1.6))
a3=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(a3),$.n_(),!0)
d2.translate(-27,-19)
K.MM(d3,D.fCe,d5,!1,c6,c6)
d2.restore()}else d3.aq(a3,c8.$1(D.x3))
return!0
case"buck":a4=d0.$5(-26,-22,52,42,5)
d3.aq(a4,d1.$3(new B.a5(a4.a,a4.b,a4.c,a4.d),A.dV,A.dl))
d3.aq(a4,c9.$2(A.aT,1.2))
d3.O(D.aPF,9,c8.$1(A.ax))
d3.O(D.aPF,6,c9.$2(A.de,2))
d3.aq(d0.$5(4,-2,14,10,2),c8.$1(A.ax))
d3.aq(d0.$5(-22,-19,44,12,2),c8.$1(A.e_))
d2=A.h.a1(d4.db,1)
t=A.h.a1(c7?d4.dx:d4.e,1)
q=c7?A.bf:A.an
d6.$5(d3,d2+"\u2192"+t+"V",D.eHj,q,8.2)
d3.O(D.eFA,2.4,c8.$1(c7?A.bh:A.aM))
d6.$5(d3,"IN",D.eIP,A.ab,6)
d6.$5(d3,"OUT",D.eGZ,A.ab,6)
return!0
case"regulator":a5=c7?A.h.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ap(A.bQ,A.aC,a5)
t.toString
d3.aq(d2,c8.$1(t))
d3.O(H.aaP,3,c8.$1(A.aM))
d3.aq(d0.$5(-12,-4,24,18,3),d1.$3(D.fuK,A.cU,A.iq))
d6.$5(d3,"7805",D.ab0,A.ab,8)
for(p=0;p<3;++p){d2=D.dCM[p]-1
d3.aE(new B.a5(d2,14,d2+2,22),c8.$1(A.dW))}if(a5>0.2)for(d2=d5*0.9,v=0;v<3;++v){u=A.h.F(d2+v*0.33,1)
d3.O(new B.m(-6+v*6,-28-u*12),2+u*2,c8.$1(A.c.j(0.5*(1-u))))}d6.$5(d3,"5V",D.eJn,A.br,9)
return!0
case"diode":d3.ah(D.aPK,D.aPq,c9.$2(A.dW,2.4))
d3.aq(d0.$5(-14,-7,28,14,6),c8.$1(A.as.j(0.85)))
d3.aE(D.fur,c8.$1(A.br))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.eL.j(0.4))
t.y=A.ld
d3.aq(d2,t)}d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(-8,-4))
d2.E(new B.aq(-8,4))
d2.E(new B.aq(-1,0))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.ba))
d6.$5(d3,"one way",D.eIE,A.aE,8)
return!0
case"ldr":d3.ah(D.aPK,D.ab0,c9.$2(A.dW,2.4))
d3.ah(D.aPw,D.aPq,c9.$2(A.dW,2.4))
d3.O(A.J,12,c8.$1(A.de))
d3.O(A.J,12,c9.$2(A.tw,1.6))
d2=$.U()
t=B.a([],x.v)
a6=new B.aJ(d2.r,A.ak,c6,c6,t)
a6.E(new B.b_(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
q=a6.f
if(q!=null)d2.aj(q)
a6.ac()}d3.af(a6,c9.$2(A.bO,1.4))
d2=B.ap(A.bz,A.eL,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.m(-6,-26),d2,14)
d6.$5(d3,""+A.h.S(20+980*(1-d4.f))+"\u03a9",D.eIu,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d2){case"lgtv":t=A.eD
break
case"sonytv":t=A.tg
break
case"appletv":t=A.dW
break
default:t=F.Cx
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
K.h9Z(d3,new B.av(a3.c-t,a3.d-q),d4.at,d5,d4.ax,-1,c6,c6)
h.restore()
d3.O(D.eGf,1.6,c8.$1(A.bf))}else{d3.aq(a3,c8.$1(D.x3))
h=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
h.E(new B.b_(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bz())
d3.af(h,c8.$1(A.c.j(0.05)))}if(d2==="appletv"){d2=d3.c
J.bs(d2.save())
d2.translate(0,19.6)
d3.bW(0,3.7)
d2.translate(-0.5,-0.55)
d3.af(K.hSQ(),c8.$1(A.cz))
d2.restore()}else{switch(d2){case"lgtv":d2=F.aV2
break
case"sonytv":d2=F.aUR
break
default:d2=F.aUT
break}a8=B.h2(c6,A.cK,c6,c6,c6,B.cW(c6,c6,c6,c6,c6,c6,c6,c6,c6,B.l(c6,c6,d2.b,c6,c6,c6,c6,c6,c6,c6,c6,3.6,c6,c6,A.C,c6,1,!0,c6,0.25,c6,c6,c6,c6,c6,c6),d2.a),A.a8,A.cb,c6,A.e6,A.cc)
a8.eL()
d2=a8.b
t=d2.c
d2=d2.a.c
a8.a5(d3,new B.m(-t/2,19.6-d2.gb4(d2)/2))}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mO.h(0,d2)
b0=a9.b===D.By
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
t.restore()}else d3.aq(a3,c8.$1(D.x3))
if(b0){t=a3.b
q=a3.d
d3.ah(new B.m(0,t),new B.m(0,q),c9.$2(A.v.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aq(d0.$5(-4,a3.b+1.2,8,2.6,1.3),c8.$1(A.v))
else{d2=b0?b1/2-7:0
d3.O(new B.m(d2,a3.b+3),1.3,c8.$1(A.v))}return!0
case"ereader":d3.aq(d0.$5(-17,-28,34,52,4),c8.$1(A.cU))
d3.aq(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bP))
if(c7){d6.$5(d3,"NGMY",D.eJu,A.ax,9)
for(v=0;v<9;++v){d2=-9+v*3.6
t=A.n.F(v,4)===3?14:22
d3.aE(new B.a5(-11,d2,-11+t,d2+1.4),c8.$1(A.bl))}d3.O(A.aaN,1.6,c8.$1(A.ax))}return!0
case"laptop":d3.aq(d0.$5(-30,-28,60,42,4),d1.$3(D.fvl,A.cH,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(b8),$.n_(),!0)
t=b8.a
q=b8.b
d2.translate(t,q)
K.MM(d3,new B.av(b8.c-t,b8.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b8,c8.$1(D.x3))
d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(-38,16))
d2.E(new B.aq(38,16))
d2.E(new B.aq(34,21))
d2.E(new B.aq(-34,21))
d2.E(new B.bz())
d3.af(d2,c8.$1(D.al5))
d3.aq(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aq(d0.$5(-32,-28,64,46,5),d1.$3(D.fvp,A.cm,A.cH))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(b9),$.n_(),!0)
t=b9.a
q=b9.b
d2.translate(t,q)
K.MM(d3,new B.av(b9.c-t,b9.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b9,c8.$1(D.x3))
d3.O(D.eEJ,2,c8.$1(A.bQ))
d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(-6,18))
d2.E(new B.aq(6,18))
d2.E(new B.aq(10,26))
d2.E(new B.aq(-10,26))
d2.E(new B.bz())
d3.af(d2,c8.$1(D.al5))
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
d2.restore()}else d3.aq(c0,c8.$1(D.x3))
d3.aE(D.fvw,c8.$1(A.bl))
d3.aq(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.d1))
return!0
case"projector":if(c7){d2=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(14,4))
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
d2.restore()}d3.aq(d0.$5(-26,-4,52,24,6),d1.$3(D.fvc,A.hX,A.d1))
d3.O(D.aPb,7,c8.$1(A.ax))
d3.O(D.aPb,4,c8.$1(c7?A.eL:A.cx))
for(v=0;v<4;++v){d2=-20+v*4
d3.ah(new B.m(d2,2),new B.m(d2,14),c9.$2(A.dH,1))}return!0
case"carscreen":d3.aq(d0.$5(-34,-10,68,32,12),c8.$1(A.ax))
c2=d0.$5(-30,-20,60,28,8)
d3.aq(c2,c8.$1(M.nl))
d3.aq(c2,c9.$2(A.bz,1.2))
if(c7){c3=new B.aJ($.U().r,A.ak,c6,c6,B.a([],x.v))
c3.E(new B.b_(-26,4))
c3.E(new B.cn(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.aq(22,-16))
d3.af(c3,c9.$2(A.aH,2.2))
d2=A.h.F(d5*6,48)
d3.O(new B.m(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.n.F(A.h.ba(d5*2),5)),H.aPv,A.c,10)
d6.$5(d3,"km/h",D.eH6,A.aE,5)}return!0
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
d2.y=A.nr
d3.O(A.J,26,d2)}else d3.aq(c5,c8.$1(A.a_))
d3.ah(D.eJ4,D.eJ9,c9.$2(A.bl,4))
d3.ah(D.eGh,D.eGx,c9.$2(A.bl,4))
return!0}return!1},
h9J:function h9J(){},
h9L:function h9L(){},
h9M:function h9M(){},
h9K:function h9K(){},
hzI(d,e,f,g){return new C.alC(d,g,f,e)},
GY(d,e,f){return new C.bg0(d,e,f)},
alC:function alC(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
alD:function alD(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.hi$=i
_.mp$=j
_.fl$=k
_.hj$=l
_.bw$=m
_.ab$=n
_.c=_.a=null},
bNw:function bNw(d,e){this.a=d
this.b=e},
bNx:function bNx(d){this.a=d},
bNv:function bNv(d){this.a=d},
bNy:function bNy(){},
bNz:function bNz(d){this.a=d},
bNA:function bNA(d,e,f){this.a=d
this.b=e
this.c=f},
bNu:function bNu(d,e){this.a=d
this.b=e},
bNr:function bNr(d,e){this.a=d
this.b=e},
bNs:function bNs(d,e,f){this.a=d
this.b=e
this.c=f},
bNl:function bNl(d,e){this.a=d
this.b=e},
bNm:function bNm(){},
bNt:function bNt(d,e,f){this.a=d
this.b=e
this.c=f},
bNq:function bNq(d,e){this.a=d
this.b=e},
bNn:function bNn(d,e){this.a=d
this.b=e},
bNo:function bNo(d,e){this.a=d
this.b=e},
bNp:function bNp(d){this.a=d},
bNQ:function bNQ(d){this.a=d},
bNR:function bNR(){},
bMW:function bMW(){},
bNS:function bNS(d,e){this.a=d
this.b=e},
bNP:function bNP(d,e){this.a=d
this.b=e},
bNK:function bNK(d){this.a=d},
bNH:function bNH(d,e,f){this.a=d
this.b=e
this.c=f},
bNI:function bNI(d,e){this.a=d
this.b=e},
bNL:function bNL(d){this.a=d},
bNF:function bNF(d,e){this.a=d
this.b=e},
bNG:function bNG(d,e){this.a=d
this.b=e},
bNJ:function bNJ(d){this.a=d},
bNM:function bNM(d){this.a=d},
bNC:function bNC(d,e){this.a=d
this.b=e},
bND:function bND(d,e){this.a=d
this.b=e},
bNE:function bNE(d,e){this.a=d
this.b=e},
bNN:function bNN(d){this.a=d},
bNB:function bNB(d){this.a=d},
bNO:function bNO(d){this.a=d},
bMX:function bMX(d,e){this.a=d
this.b=e},
bNi:function bNi(d,e){this.a=d
this.b=e},
bNk:function bNk(d,e){this.a=d
this.b=e},
bNj:function bNj(d,e){this.a=d
this.b=e},
bNh:function bNh(){},
bN3:function bN3(d){this.a=d},
bN2:function bN2(d){this.a=d},
bN4:function bN4(d,e){this.a=d
this.b=e},
bN5:function bN5(d){this.a=d},
bN1:function bN1(d){this.a=d},
bN9:function bN9(d,e,f){this.a=d
this.b=e
this.c=f},
bN0:function bN0(d,e){this.a=d
this.b=e},
bNa:function bNa(d,e){this.a=d
this.b=e},
bNb:function bNb(d,e){this.a=d
this.b=e},
bNc:function bNc(d,e){this.a=d
this.b=e},
bNd:function bNd(d,e,f){this.a=d
this.b=e
this.c=f},
bN_:function bN_(d,e){this.a=d
this.b=e},
bNe:function bNe(d,e,f){this.a=d
this.b=e
this.c=f},
bMZ:function bMZ(d,e){this.a=d
this.b=e},
bNf:function bNf(d,e,f){this.a=d
this.b=e
this.c=f},
bMY:function bMY(d,e){this.a=d
this.b=e},
bNg:function bNg(d){this.a=d},
bN6:function bN6(d){this.a=d},
bN7:function bN7(d){this.a=d},
bN8:function bN8(d){this.a=d},
bg0:function bg0(d,e,f){this.a=d
this.b=e
this.c=f},
fEx:function fEx(){},
fEy:function fEy(){},
fEz:function fEz(){},
fEk:function fEk(){},
fEA:function fEA(){},
fEj:function fEj(){},
fEB:function fEB(){},
fEo:function fEo(){},
fEi:function fEi(){},
fEp:function fEp(){},
fEh:function fEh(){},
fEq:function fEq(){},
fEg:function fEg(){},
fEr:function fEr(){},
fEe:function fEe(){},
fEf:function fEf(){},
fEs:function fEs(){},
fEc:function fEc(){},
fEd:function fEd(){},
fEt:function fEt(){},
fEb:function fEb(){},
Xe:function Xe(d){this.a=d},
aHc:function aHc(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e7Q:function e7Q(d,e){this.a=d
this.b=e},
e7Z:function e7Z(d){this.a=d},
e8_:function e8_(){},
e80:function e80(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e81:function e81(){},
e7P:function e7P(d){this.a=d},
e7O:function e7O(d,e,f){this.a=d
this.b=e
this.c=f},
e7N:function e7N(d,e){this.a=d
this.b=e},
e7L:function e7L(d){this.a=d},
e7M:function e7M(){},
e7Y:function e7Y(d){this.a=d},
e7X:function e7X(d){this.a=d},
e7V:function e7V(d,e){this.a=d
this.b=e},
e7T:function e7T(d){this.a=d},
e7U:function e7U(){},
e7W:function e7W(d,e,f){this.a=d
this.b=e
this.c=f},
e7R:function e7R(d,e){this.a=d
this.b=e},
e7S:function e7S(){},
e83:function e83(d){this.a=d},
e84:function e84(d,e){this.a=d
this.b=e},
e82:function e82(){},
e85:function e85(d,e){this.a=d
this.b=e},
e86:function e86(d){this.a=d},
e87:function e87(d){this.a=d},
aB2:function aB2(d,e){this.c=d
this.a=e},
be4:function be4(d,e){var _=this
_.d=$
_.bw$=d
_.ab$=e
_.c=_.a=null},
cPP:function cPP(d){this.a=d},
be3:function be3(d,e){this.b=d
this.a=e},
cPO:function cPO(d){this.a=d},
aBn:function aBn(){},
aBo:function aBo(){},
aNW:function aNW(){},
bD3:function bD3(){},
iJS(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.c0(A.we,23)
$.U()
b8=B.L()
b8.r=A.ax.gp(0)
b9.O(A.we,25,b8)
b8=B.L()
b8.san(D.eSk.az(0,v))
b9.O(A.we,23,b8)
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
b9.ah(A.we,new B.m(b8*18,s*18-2),r)
r=B.L()
r.r=A.br.gp(0)
b9.O(A.we,3,r)
c2.$5(b9,w?"V":"A",D.eJc,A.br,12)
c2.$5(b9,w?A.h.a1(o,1)+" V":""+A.h.S(o*1000)+" mA",D.eIy,A.ax,9.5)
return!0
case"fan":b8=B.bx(D.fuG,A.hu)
$.U()
s=B.L()
s.r=A.bz.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aE(D.fvx,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.wf,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.c1(A.aP3,18,10)
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=A.hn.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c3(s,r)
b8.restore()}b8=B.L()
b8.r=A.bt.gp(0)
b9.O(H.wf,4,b8)
b8=B.L()
b8.b=A.ae
b8.c=2
b8.r=A.cH.gp(0)
b9.O(H.wf,22,b8)
b8=B.L()
b8.b=A.ae
b8.c=0.8
b8.r=A.jX.gp(0)
b9.O(H.wf,14,b8)
return!0
case"speaker":n=B.bx(D.aVs,A.qx)
$.U()
b8=B.L()
b8.san(D.awg.az(0,new B.a5(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eSH.az(0,B.c0(A.cy,15)))
b9.O(A.cy,14+m,b8)
b8=B.L()
b8.r=A.d1.gp(0)
b9.O(A.cy,5,b8)
b8=B.L()
b8.r=A.bl.gp(0)
b9.O(H.aaO,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.c0(D.eFR,6+u*6+A.h.F(b8,6))
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.b=A.ae
r.c=1.8
r.r=A.c6.j(0.9-u*0.2).gp(0)
b9.cR(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bx(D.fvo,A.qx)
$.U()
b8=B.L()
b8.san(D.cey.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.aVu,A.jL)
s=B.L()
s.r=A.iq.gp(0)
b9.aq(b8,s)
if(b7){k=new B.W(Date.now(),0,!1)
j=B.Gi(k)<500?":":" "
i=A.a.aY(A.n.v(B.cY(k)),2,"0")
h=A.a.aY(A.n.v(B.fy(k)),2,"0")
b8=B.L()
b8.r=A.bf.j(0.12).gp(0)
b9.aE(D.aVu,b8)
c2.$5(b9,i+j+h,D.eIT,A.bf,21)}b8=B.L()
b8.r=A.cH.gp(0)
b9.O(D.eIR,2.4,b8)
b8=B.L()
b8.r=A.cH.gp(0)
b9.O(D.eFW,2.4,b8)
return!0
case"calculator":l=B.bx(D.fv4,A.iE)
$.U()
b8=B.L()
b8.san(D.awj.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.fuY,A.hH)
s=B.L()
s.r=(b7?A.a0t:D.bxj).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eIx,A.a_7,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bx(new B.a5(r,b8,r+6,s),A.FA)
$.U()
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
q.r=(f===3?A.ca:A.bP).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bx(D.fuT,A.iE)
$.U()
b8=B.L()
b8.r=M.nl.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.9
b8.r=D.an5.gp(0)
b9.aq(l,b8)
e=B.bx(D.fuI,A.hu)
if(b7){b8=B.L()
b8.san(D.cfW.az(0,new B.a5(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.nn(e),$.n_(),!0)
b8.translate(-12,-25)
K.MM(b9,D.fBR,c1,!1,b6,b6)
b8.restore()
d=A.h.F(c1*0.12,1)
b8=B.bx(D.fuF,A.hH)
s=B.L()
s.r=A.ba.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.bf.gp(0)
b9.aE(new B.a5(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.h.S(d*100)+"%",D.eHF,A.c,6)}else{b8=B.L()
b8.r=D.x3.gp(0)
b9.aq(e,b8)}b8=B.bx(D.fvN,D.eSQ)
s=B.L()
s.r=A.v.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bx(D.fvn,A.pq)
$.U()
b8=B.L()
b8.san(D.ceQ.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.Uq[a0]
b8=a1<0?-4:4
s=new B.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.cx.gp(0)
s.c=4
s.d=A.bH
b9.ah(new B.m(a1,-4),new B.m(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.n.F(A.h.ba(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b8.r=(a2?A.bh:A.aM).gp(0)
b9.O(new B.m(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.c0(H.wf,8+u*6+A.h.F(b8,6))
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.b=A.ae
r.c=1.8
r.r=A.fL.j(0.9-u*0.2).gp(0)
b9.cR(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.fv3,A.hu)
s=$.U()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aC.j(0.5*a3).gp(0)
b8.y=A.DB
b9.O(A.we,34,b8)}a4=new B.aJ(s.r,A.ak,b6,b6,B.a([],x.v))
a4.E(new B.b_(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.cn(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bz())
b8=B.L()
b8.r=B.ap(A.eE,D.bnE,a3).gp(0)
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
b9.ah(A.J,H.aaO,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bs(b8.save())
b8.translate(0,a5)
s=$.U().r
r=x.v
l=new B.aJ(s,A.ak,b6,b6,B.a([],r))
l.E(new B.b_(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bz())
q=B.L()
q.san(D.ccP.az(0,D.fvf))
b9.af(l,q)
q=new B.aJ(s,A.ak,b6,b6,B.a([],r))
q.E(new B.b_(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bz())
p=B.L()
p.r=A.fC.gp(0)
b9.af(q,p)
r=new B.aJ(s,A.ak,b6,b6,B.a([],r))
r.E(new B.b_(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bz())
s=B.L()
s.r=A.fC.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aFI[a0]
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
l.E(new B.b_(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.cn(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bz())
r=B.L()
r.san(D.cdX.az(0,D.fv2))
b9.af(l,r)
r=new B.aJ(b8,A.ak,b6,b6,B.a([],s))
r.E(new B.b_(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bz())
q=B.L()
q.r=A.dW.gp(0)
b9.af(r,q)
s=new B.aJ(b8,A.ak,b6,b6,B.a([],s))
s.E(new B.b_(-14,-8))
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
b9.aE(D.fv1,b8)
if(b7){b8=B.L()
b8.r=A.cX.j(0.3).gp(0)
b8.y=A.nr
b9.O(A.aaL,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.h.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.m(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.ax.gp(0)
b9.O(D.eEU,3,b8)
return!0
case"lamp":if(b7){u=A.h.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aJ($.U().r,A.ak,b6,b6,B.a([],x.v))
b8.E(new B.b_(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bz())
s=B.L()
s.r=A.eL.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.eL.j(0.5*u).gp(0)
s.y=A_.PZ
b9.O(D.eIZ,24,s)}b8=B.bx(D.fvG,A.hu)
s=$.U()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.d1.gp(0)
r.c=3
r.d=A.bH
b9.ah(D.eF9,D.aPe,r)
r=B.L()
r.r=A.d1.gp(0)
r.c=3
r.d=A.bH
b9.ah(D.aPe,D.eJ_,r)
a7=new B.aJ(s.r,A.ak,b6,b6,B.a([],x.v))
a7.E(new B.b_(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bz())
s=B.L()
s.r=(b7?A.aQ:A.kg).gp(0)
b9.af(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bl).gp(0)
b9.O(D.eJ2,4,b8)
return!0
case"lights":b8=$.U().r
s=x.v
a8=new B.aJ(b8,A.ak,b6,b6,B.a([],s))
a8.E(new B.b_(-34,-6))
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
b1.r=D.a7c[u].j(0.6).gp(0)
b1.y=A.Ia
b9.O(new B.m(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aJ(b8,A.ak,b6,b6,b1)
b1.push(new B.b_(q-3,p))
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
if(b0)p=D.a7c[u]
else{p=B.ap(D.a7c[u],A.v,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iJR(b9,c0,c1,c2)},
h9:function h9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
huD(d){var w=D.mO.h(0,d)
return(w==null?null:w.b)===D.Bw},
iL9(d,e,f){return B.a7(d,!1).ca(B.vL(null,!1,!0,!0,new C.heW(e,f),A.f2,null,A.pY,new C.heX(),x.H))},
KK:function KK(d,e){this.a=d
this.b=e},
mv:function mv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
heW:function heW(d,e){this.a=d
this.b=e},
heX:function heX(){},
WY:function WY(d,e,f){this.c=d
this.d=e
this.a=f},
aH2:function aH2(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bw$=e
_.ab$=f
_.c=_.a=null},
e3M:function e3M(d,e){this.a=d
this.b=e},
e3N:function e3N(d,e,f){this.a=d
this.b=e
this.c=f},
e3X:function e3X(d,e,f){this.a=d
this.b=e
this.c=f},
e3L:function e3L(d,e){this.a=d
this.b=e},
e3K:function e3K(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d){this.a=d},
e3E:function e3E(d,e){this.a=d
this.b=e},
e3D:function e3D(d,e){this.a=d
this.b=e},
e3C:function e3C(d){this.a=d},
e3V:function e3V(){},
e3R:function e3R(d){this.a=d},
e3S:function e3S(d){this.a=d},
e3T:function e3T(d){this.a=d},
e3U:function e3U(d){this.a=d},
e4_:function e4_(d){this.a=d},
e3Q:function e3Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3O:function e3O(){},
e3P:function e3P(d){this.a=d},
e3W:function e3W(d,e){this.a=d
this.b=e},
e3J:function e3J(d,e){this.a=d
this.b=e},
e3H:function e3H(d){this.a=d},
e3I:function e3I(d){this.a=d},
e3B:function e3B(d){this.a=d},
e3G:function e3G(d,e,f){this.a=d
this.b=e
this.c=f},
e3F:function e3F(d){this.a=d},
bB4:function bB4(d,e,f){this.b=d
this.c=e
this.a=f},
ahh:function ahh(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aPK:function aPK(){},
a3h(d,e,f,g,h,i){return new C.bzR(d,e,f,g,h,i)},
bzR:function bzR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fF1:function fF1(){},
fF2:function fF2(){},
fF3:function fF3(){},
fF4:function fF4(){},
fF5:function fF5(){},
fF6:function fF6(){},
fF7:function fF7(){},
fF8:function fF8(){},
aaP:function aaP(d){this.a=d},
cqT:function cqT(d){this.a=d},
cqU:function cqU(){},
cqS:function cqS(d,e){this.a=d
this.b=e},
cqR:function cqR(d){this.a=d},
YE:function YE(d){this.a=d},
aIM:function aIM(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.hi$=f
_.mp$=g
_.fl$=h
_.hj$=i
_.bw$=j
_.ab$=k
_.c=_.a=null},
f4H:function f4H(d){this.a=d},
f4D:function f4D(d){this.a=d},
f4C:function f4C(d,e){this.a=d
this.b=e},
f4F:function f4F(d,e){this.a=d
this.b=e},
f4E:function f4E(d,e){this.a=d
this.b=e},
f4G:function f4G(d){this.a=d},
bBh:function bBh(d,e,f){this.b=d
this.c=e
this.a=f},
Xm:function Xm(d){this.a=d},
bp3:function bp3(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.hi$=d
_.mp$=e
_.fl$=f
_.hj$=g
_.bw$=h
_.ab$=i
_.c=_.a=null},
eby:function eby(){},
ebz:function ebz(){},
ebt:function ebt(d,e){this.a=d
this.b=e},
ebv:function ebv(d,e){this.a=d
this.b=e},
ebw:function ebw(d){this.a=d},
ebu:function ebu(d){this.a=d},
ebx:function ebx(d){this.a=d},
bvS:function bvS(d,e,f){this.b=d
this.c=e
this.a=f},
Wx:function Wx(d){this.a=d},
boC:function boC(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.hi$=d
_.mp$=e
_.fl$=f
_.hj$=g
_.bw$=h
_.ab$=i
_.c=_.a=null},
dVV:function dVV(){},
dVW:function dVW(){},
dVQ:function dVQ(){},
dVT:function dVT(d,e){this.a=d
this.b=e},
dVS:function dVS(d,e){this.a=d
this.b=e},
dVU:function dVU(d){this.a=d},
dVR:function dVR(d){this.a=d},
aMk:function aMk(d,e,f){this.a=d
this.b=e
this.c=f},
Xd:function Xd(d){this.a=d},
boV:function boV(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e7k:function e7k(d,e){this.a=d
this.b=e},
e7l:function e7l(d){this.a=d},
e7j:function e7j(d,e){this.a=d
this.b=e},
e7m:function e7m(d){this.a=d},
e7i:function e7i(d,e){this.a=d
this.b=e},
e7n:function e7n(d){this.a=d},
e7h:function e7h(d,e){this.a=d
this.b=e},
e7o:function e7o(d,e){this.a=d
this.b=e},
e7g:function e7g(d,e){this.a=d
this.b=e},
e7p:function e7p(d){this.a=d},
e7f:function e7f(d,e){this.a=d
this.b=e},
e7q:function e7q(d){this.a=d},
e7e:function e7e(d){this.a=d},
e7r:function e7r(d){this.a=d},
e7d:function e7d(d){this.a=d},
e7s:function e7s(d){this.a=d},
e7t:function e7t(d){this.a=d},
e7c:function e7c(d){this.a=d},
bqZ:function bqZ(d,e,f){this.b=d
this.c=e
this.a=f},
Y_:function Y_(d){this.a=d},
aI1:function aI1(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ezu:function ezu(d,e){this.a=d
this.b=e},
ezv:function ezv(d,e,f){this.a=d
this.b=e
this.c=f},
ezt:function ezt(d,e,f){this.a=d
this.b=e
this.c=f},
ezw:function ezw(d){this.a=d},
ezs:function ezs(d){this.a=d},
ezA:function ezA(d){this.a=d},
ezz:function ezz(d,e){this.a=d
this.b=e},
ezy:function ezy(d,e){this.a=d
this.b=e},
ezB:function ezB(d,e){this.a=d
this.b=e},
ezx:function ezx(d,e){this.a=d
this.b=e},
ezC:function ezC(d){this.a=d},
Yb:function Yb(d){this.a=d},
aIp:function aIp(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eMC:function eMC(d){this.a=d},
eMD:function eMD(d){this.a=d},
eMA:function eMA(d,e){this.a=d
this.b=e},
eMB:function eMB(d){this.a=d},
eMz:function eMz(d){this.a=d},
eME:function eME(d){this.a=d},
eMF:function eMF(d){this.a=d},
eMG:function eMG(d){this.a=d},
eMH:function eMH(d,e){this.a=d
this.b=e},
Yv:function Yv(d){this.a=d},
bqc:function bqc(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
f02:function f02(){},
f0b:function f0b(){},
f07:function f07(d){this.a=d},
f06:function f06(){},
f08:function f08(d,e){this.a=d
this.b=e},
f05:function f05(d,e){this.a=d
this.b=e},
f09:function f09(d){this.a=d},
f04:function f04(d,e){this.a=d
this.b=e},
f0a:function f0a(d){this.a=d},
f03:function f03(d){this.a=d},
XZ:function XZ(d){this.a=d},
bpG:function bpG(d,e,f,g,h,i,j,k){var _=this
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
_.hi$=f
_.mp$=g
_.fl$=h
_.hj$=i
_.bw$=j
_.ab$=k
_.c=_.a=null},
ey9:function ey9(){},
eya:function eya(){},
ey2:function ey2(d){this.a=d},
ey1:function ey1(d){this.a=d},
ey3:function ey3(d){this.a=d},
ey0:function ey0(d){this.a=d},
ey4:function ey4(d){this.a=d},
ey_:function ey_(d){this.a=d},
ey5:function ey5(d,e){this.a=d
this.b=e},
exZ:function exZ(d,e){this.a=d
this.b=e},
ey6:function ey6(d){this.a=d},
exY:function exY(d,e){this.a=d
this.b=e},
ey7:function ey7(d){this.a=d},
exX:function exX(d,e){this.a=d
this.b=e},
ey8:function ey8(d){this.a=d},
exW:function exW(d,e){this.a=d
this.b=e},
biq:function biq(d,e,f){this.c=d
this.d=e
this.a=f},
aPw:function aPw(){},
bD_:function bD_(){},
aPR:function aPR(){},
bD5:function bD5(){},
aQh:function aQh(){},
bDf:function bDf(){},
aQK:function aQK(){},
bDo:function bDo(){},
Kg(d,e,f,g){var w,v,u,t,s,r,q,p=$.avq
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mR(d,e[w],f,g)
return}for(p=B.cI(e,0,B.dy(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bQ(p,p.gI(0),v.k("bQ<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.A();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mR(d,s,f,g)
else B.bM(new B.bh(1000*q),new C.cqP(d,s,f,g),u)}},
coa(d){return C.idQ(d)},
idQ(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$coa=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aB(),$async$coa)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.S(x.N,x.z)
w=1
break}p=A.T.aN(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a1(p,o,n):B.S(o,n)
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
return B.i($async$coa,v)},
b5V(d,e){return C.idR(d,e)},
idR(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b5V=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$b5V)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.T.au(e,null)),$async$b5V)
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
return B.i($async$b5V,v)},
cqP:function cqP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iA2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.S(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oS(A.h.a1(p.c,4)),"y",B.oS(A.h.a1(p.d,4)),"v",p.e,"l",B.oS(A.h.a1(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oS(A.h.a1(p.as,3)),"ch",p.at,"vc",B.oS(A.h.a1(p.z,3)),"s",B.oS(A.h.a1(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a3(f).k("cl.E"))
A.d.fj(l)
return A.T.au(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iKg(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.T.aN(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a7(h)
A.d.a7(a6.b)
v=B.a([],x.fs)
g=x.R
f=g.a(J.t(w,"parts"))
f=J.aN(f==null?A.bL:f)
while(f.A()){u=f.gP(f)
t=i.a(u)
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.r1().am(0,s)){J.bW(v,null)
continue}d=s
a0=B.aK(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.ul(a2,d,a0,a1)
a3.aun(a2,d,a0,a1)
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
r.at=A.h.L(d==null?0:d)
d=B.aK(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aK(J.t(t,"s"))
r.ch=A.h.D(d==null?1:d,1,5.2)
J.bW(v,r)}i=g.a(J.t(w,"wires"))
i=J.aN(i==null?A.bL:i)
h=x.j
while(i.A()){q=i.gP(i)
p=h.a(q)
f=B.aK(J.t(p,0))
o=f==null?a5:A.h.L(f)
f=B.aK(J.t(p,2))
n=f==null?a5:A.h.L(f)
if(o==null||n==null||o<0||n<0||o>=J.aa(v)||n>=J.aa(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.aoh(m,A.h.L(B.dh(J.t(p,1))),l,A.h.L(B.dh(J.t(p,3))))}i=B.aK(J.t(w,"challenge"))
i=A.h.L(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aN(h==null?A.bL:h)
while(h.A()){j=h.gP(h)
J.bW(k,A.h.L(B.dh(j)))}return new B.btX(i,k)}catch(a4){return a5}},
fWW(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fWW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aB(),$async$fWW)
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
return B.i($async$fWW,v)},
bK1(d){return C.iM_(d)},
iM_(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bK1=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aB(),$async$bK1)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bK1)
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
return B.i($async$bK1,v)},
h3_(d,e,f){var w=0,v=B.j(x.I),u,t,s,r,q,p
var $async$h3_=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(d.c===e&&d.d===f){u=d
w=1
break}$.U()
t=new B.p2(new B.oD())
s=B.vb(t,null)
r=B.L()
r.r=A.c8.gp(0)
s.aE(new B.a5(0,0,e,f),r)
s.bjV(0,d,A.J,B.L())
q=t.ne()
w=3
return B.b(q.w4(e,f),$async$h3_)
case 3:p=h
q.t()
d.t()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h3_,v)}},D,V,A3,As,K,F,M,H,At,Au,Av,A4,Aw
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
C.amT.prototype={}
C.XJ.prototype={
R(){return new C.bpu(B.S(x.N,x.i),new B.au(A.ay,$.ay()),B.a([],x.X),B.a([],x.eZ),B.m2(0,null,null))}}
C.bpu.prototype={
gYs(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
this.ch.t()
this.a3()},
Rb(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Rb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aS.bl$.d.c
if(s!=null)s.j8()
p.bN(0,A.ck)
t.l(new C.erb(t))
t.a.toString
p=t.gYs()
w=3
return B.b(C.bFj(C.in1(q,C.izO(p),o,t.ay)),$async$Rb)
case 3:s=e
r=s==null?null:J.j_(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.iBk(q,p,o)
if(t.c==null){w=1
break}t.l(new C.erc(t,o,r))
$.aS.U$.push(new C.erd(t))
case 1:return B.h(u,v)}})
return B.i($async$Rb,v)},
a_y(d){return this.c79(d)},
b0m(){return this.a_y(null)},
c79(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aS.bl$.d.c
if(s!=null)s.j8()
t.f.sb1(0,o)
t.l(new C.ero(t))
G.dI(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bFj(C.iuG(o)),$async$a_y)
case 3:r=n.a=m.iJW(f)
p.b=""
if(r!=null&&!C.izP(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iBl(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.amT(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.l(new C.erp(p,t))
t.cd3(p.a)
case 1:return B.h(u,v)}})
return B.i($async$a_y,v)},
cd3(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
A.d.a7(w)
w=++m.as
v=m.gYs()
A.d.a7(v.a)
A.d.a7(v.b)
m.e.a7(0)
m.l(new C.erk(m))
t=d.d
s=B.S(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.eri(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.erl(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.erm(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ern(m,d))},
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bk.j(0.1),g=B.n(16),f=B.K(A.bk.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fDp,A.bd,B.E(B.c(m.Q,l,l,l,l,l,l,A.yf,l,l,l),1)],x.p),A.l,l,A.e,A.i,0,l,l)
else if(k==null)j=D.h42
else{w=B.E(B.c(k.a,l,l,l,l,l,l,A.M4,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.c(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fOD,l,l,l)],v),A.l,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.C(A.rm,B.c(u,l,l,l,l,l,l,D.fRy,l,l,l),l))
w.push(A.cR)
w.push(B.c(k.b,l,l,l,l,l,l,A0.FY,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.n(10)
w.push(B.q(l,B.c(u,l,l,l,l,l,l,D.fUe,l,l,l),A.f,l,l,new B.p(t,l,l,s,l,l,A.m),l,l,l,A.hB,A.ct,l,l,l))}w.push(A.aj)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.c(t,l,l,l,l,l,l,A.mh,l,l,l)
q=u[r]
s=s?A.c:A.aE
w.push(new B.C(A.HQ,new B.c_(A.aJ,A.e,A.i,A.B,l,A.p,l,0,B.a([t,A.b6,new B.bu(1,A.b9,B.c(q,l,l,l,l,l,l,new B.H(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bk.j(0.3)
s=new B.aQ(12,12)
s=B.q(l,B.c(o.a,l,l,l,l,l,l,A.Xk,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bc(s,s,s,s),l,l,A.m),l,l,l,l,A.h0,l,l,l)
t=A.c.j(0.07)
q=new B.aQ(12,12)
A.d.u(w,B.a([A.N,new B.bH(A.a9,l,l,s,l),A.at,B.q(l,B.c(o.b,l,l,l,l,l,l,D.h_7,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bc(q,q,q,q),l,l,A.m),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.eKw)
j=B.cb(B.w(w,A.B,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.w(B.a([B.al2(B.q(l,j,A.f,l,new B.aX(0,1/0,0,i),new B.p(h,l,f,g,l,l,A.m),l,l,l,D.bHh,A.es,l,l,1/0),A.b1,A.ig),B.E(C.hzI(m.gYs(),l,l,m.e),1)],w),A.l,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.e6("Ask about it",i,new C.ers(m),l,A.bk,l),new E.e6("Invent something new",!i,new C.ert(m),l,A.bk,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dFu[p]
i.push(new E.e6(n,!1,new C.eru(m,n),l,A.bk,l))}f.push(new E.fm(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dll[p]
i.push(new E.e6(r,!1,new C.erv(m,r),l,A.bk,l))}f.push(new E.fm(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aO(l,A.M,!1,l,!0,A.t,l,B.aP(),m.f,l,l,l,l,l,2,B.bB(l,new B.b5(4,B.n(16),A.a1),l,A.f3,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.jP,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.am,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.erw(m,k),l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.du,!0,A.a8,l,A.ao,l,A.X8,l,l),1)
h=m.at
v=h&&j?D.bXt:A.e9
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.aa,new E.fO(v,j,new C.erx(m,k),A.bk,l)],w),A.l,l,A.e,A.i,0,l,l))
return E.m3(A.bk,A.fh,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.w(f,A.l,l,A.e,A.P,0,A.p))}}
C.Hs.prototype={}
C.vT.prototype={}
C.Y6.prototype={
R(){return new C.aIg(A.J,A.J,A.aA,B.aR(x.S),$,A.bI,0,B.a([],x.X),null,null)}}
C.aIg.prototype={
gb1I(){var w,v,u,t=this,s=D.Jw[t.cx],r=D.Ut[t.cy],q=D.EB[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e9(w,w.r,B.a3(w).c),v=w.$ti.c;w.A();){u=w.d
p.push(D.aDX[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cH(p,0,new C.eGJ())},
ga5m(){return D.Jw[this.cx].d/this.gb1I()},
gaTy(){return 0.1*(D.Jw[this.cx].d/0.9)/D.Ut[this.cy].d},
Z(){this.a4()
this.mA()
C.coa("rocket_lander").bB(new C.eH2(this),x.k)},
cdc(){var w=this
w.ay=A.h.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cW.ai()*0.6
w.f=new B.m(0.15+A.cW.ai()*0.7,0.08)
w.r=new B.m((A.cW.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mT(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.l(new C.eH3())
return}w=D.u8[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.h.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.m(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga5m()
v=v.a6(0,new B.m(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaTy())}if(m.dy){t=m.r
v=v.aI(0,t.aK(0,t.gcD()*6*D.aG1[m.d]))}t=m.r=m.r.a6(0,v.aK(0,d))
s=m.f=m.f.a6(0,t.aK(0,d))
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
C.b5V("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.Kg("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga5m()/(D.u8[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.h.a1(m.ga5m()/(D.u8[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dI(80,"",500,0,0.6,"noise")
B.fZ()}}if(m.Q&&m.x>0&&A.n.F(A.h.ba(m.CW*20),2)===0)G.dI(90,"",70,0,0.12,"noise")
m.l(new C.eH4())},
ajo(d,e,f,g,h){var w,v=null,u=B.c(d,v,v,v,v,v,v,D.fR2,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.e6(e[w].a,f.$1(w),new C.eGL(this,g,w),v,h,v))
return new B.C(A.ez,B.w(B.a([u,A.cR,B.bX(A.bG,s,A.bq,v,6,6)],t),A.B,v,A.e,A.i,0,A.p),v)},
bLI(d){var w,v,u,t,s=this,r=null,q=s.ga5m()/(D.u8[s.d].b/9.81*0.28)>=1,p=A.h.S(1/s.gaTy()),o=D.aG1[s.d],n=B.n(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.c("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,B.c(d.d+" Gravity here: "+B.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.adI,r,r,r),A.S,s.ajo("ENGINE: "+D.Jw[s.cx].b,D.Jw,new C.eGA(s),new C.eGB(s),A.cX),s.ajo("FUEL TANK: "+D.Ut[s.cy].b,D.Ut,new C.eGC(s),new C.eGD(s),A.bf),s.ajo("LANDING GEAR: "+D.EB[s.db].b,D.EB,new C.eGE(s),new C.eGF(s),A.aH),s.ajo("EXTRAS (tap to add)",D.aDX,new C.eGG(s),new C.eGH(s),A.bk)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.hns)
o=(q?A.bf:A.c3).j(0.14)
w=B.n(12)
v=A.h.a1(s.gb1I(),2)
u=A.h.a1(s.ga5m()/(D.u8[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.c("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.h.S(D.EB[s.db].d*100)+".",r,r,r,r,r,r,D.fRI,r,r,r),A.f,r,r,new B.p(o,r,r,w,r,r,A.m),r,r,r,A.hB,A.bS,r,r,r))
m.push(A.S)
m.push(new B.bH(A.z,r,r,new E.fO(A.om,"Launch",new C.eGI(s),A.bf,r),r))
return B.at(B.q(r,B.cb(B.w(m,A.B,r,A.e,A.P,0,A.p),A.t,r,A.y,r,r,A.bR,r,r,A.ah),A.f,r,A.mm,new B.p(D.bwP,r,l,n,r,r,A.m),r,r,r,A.bS,r,r,r,r),r,r,r)},
b2V(d,e,f,g){var w=null,v=f?A.cX:A.c.j(0.1),u=B.n(18),t=B.K(A.aT,A.r,1)
return B.n9(A.j6,B.q(w,B.V(d,A.c,w,w,w,30),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,62,w,w,w,w,w,g),w,new C.eGx(e),new C.eGy(e),w,w,w,w,new C.eGz(e))},
b2U(d,e,f){return this.b2V(d,e,f,74)},
C(d){var w,v,u,t,s=this,r=null,q=B.cg(new C.eGW(s,D.u8[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.u8[w].a:"\ud83d\udd12"
o.push(new E.e6(v,s.d===w,new C.eGX(s,w),r,D.u8[w].c,r))}v=B.a([s.b2U(F.atk,new C.eGY(s),s.y),A.bd,s.b2V(A.vH,new C.eGZ(s),s.Q,130),A.bd,s.b2U(A.Rn,new C.eH_(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.n(18)
A.d.u(v,B.a([A.bd,B.aA(r,B.q(r,D.c0U,A.f,r,r,new B.p(u,r,B.K(A.aT,A.r,1),t,r,r,A.m),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eH0(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.m3(A.cX,A.fh,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.w(B.a([new E.fm(o,"WORLD",r),B.A(v,A.l,r,A.bc,A.i,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.bml.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.u8[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.U(),f=B.L(),e=l.c,d=B.ap(I.a14,e,0.25)
d.toString
f.san(new B.a6(A.aW,A.b0,A.w,B.a([F.ajX,d],x.O),n,n).az(0,new B.a5(0,0,i,h)))
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
t.E(new B.b_(0,u+14))
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
e=B.bx(q.cu(2),A.pq)
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
m.y=A_.PZ
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aJ(k,A.ak,n,n,B.a([],i))
p.E(new B.b_(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bz())
m=B.L()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aJ(k,A.ak,n,n,B.a([],i))
k.E(new B.b_(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bz())
m=B.L()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aJ(m,A.ak,n,n,B.a([],i))
o.E(new B.b_(0,-26))
o.E(new B.cn(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.cn(-14,-10,0,-26))
o.E(new B.bz())
k=B.L()
k.san(F.awk.az(0,D.fuP))
a0.af(o,k)
k=B.L()
k.r=A.aH.gp(0)
a0.O(H.wf,5,k)
k=new B.aJ(m,A.ak,n,n,B.a([],i))
k.E(new B.b_(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bz())
j=B.L()
j.r=A.aC.gp(0)
a0.af(k,j)
i=new B.aJ(m,A.ak,n,n,B.a([],i))
i.E(new B.b_(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bz())
m=B.L()
m.r=A.aC.gp(0)
a0.af(i,m)
f.restore()},
aD(d){return!0}}
C.aQq.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bDh.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bDu()}}
C.aWM.prototype={}
C.a5K.prototype={}
C.bfb.prototype={}
C.Ww.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eA(["skin"],x.N),o=new Float32Array(0)
return new C.aGG(w,v,u,t,s,r,q,new B.cB(null,x.A),p,D.Na,D.Na,A.aA,A.cW,o,new Int32Array(0),$,A.bI,0,B.a([],x.X),null,null)}}
C.aGG.prototype={
Z(){var w=this
w.a4()
w.mA()
w.as=new C.cak(w.gcmG())
new C.dVO(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a2(0)
v.d=null}this.bCx()},
cmH(d){var w,v=this
if(v.c==null)return
w=J.a0(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fi(0,B.J(["t","init","data",$.hJZ],x.N,x.z))
v.at=!0
v.ay=""
v.aDs()
break
case"parts":v.l(new C.dVo(v))
break
case"pick":v.l(new C.dVp(v,d))
break
case"shot":v.alg(B.v(w.h(d,"data")))
break
case"error":$.an.$1("[body viewer] "+B.v(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.l(new C.dVq(v))
break}},
aDs(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aBM[q.cx]
v=new C.dVr()
u=q.ch
u=B.B(u,B.a3(u).k("cl.E"))
A.d.fj(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.v(v.$1(w.b))+B.v(v.$1(w.c))+B.v(v.$1(w.d)),"sel",q.cy,"bpm",A.h.S(q.k4),"spin",q.go],t,x.cK)
r=A.T.au(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.S(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.fi(0,u)}},
alg(d){return this.cEj(d)},
cEj(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$alg=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cM.aL(A.a.aV(d,A.a.c8(d,",")+1))
w=6
return B.b(B.ayO(B.a([B.cKI(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$alg)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.M(x.q).f.T(I.aXR)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$alg,v)},
aCR(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mT(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.h.ba(w)!==A.h.ba(v.p1)){E.Yx("kick",0,0.4)
v.W1(170,new C.dVP())}v.p1=w
return},
agM(d){var w,v,u,t,s=this
s.l(new C.dVs(s,d))
if(d==null){s.fy=D.Na
s.fr=1
w=s.as
if(w!=null)w.fi(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.T(w).k("X<1>")
u=B.B(new B.X(w,new C.dVt(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.K(0,t)
if(s.CW===2)s.CW=1}s.aDs()
w=s.as
if(w!=null)w.fi(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cGR(t,d)
return},
cGR(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Yx("kick",0,0.8)
this.W1(260,new C.dVu())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dI(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.W1(w*70,new C.dVv(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dI(110,"",360,0.7,0.3,"saw")
else E.hoK("organic",6+A.n.F(e.length,8),200,0.6)
break
case"bone":G.dI(210+e.length*4,"",80,0.6,0.55,"tri")
G.dI(2400,"",20,0,0.3,v)
break
case"muscle":G.dI(70,"",150,1,0.6,"sine")
break
case"vessel":G.dI(300,"",380,0.4,0.22,v)
E.Yx("kick",0,0.3)
break
default:E.hoK("organic",2+A.n.F(e.length,6),200,0.4)}},
cLD(d){this.l(new C.dVx(this,d))},
b3d(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aCR(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=B.B(o,o.$ti.k("cl.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
c2P(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.l(new C.dVl(u,w,d))
v=x.t
C.Kg("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.W1(1100,new C.dVm(u))
return}if(d==null){if(u.cy!=null)u.agM(null)
return}u.agM(d)},
c6r(d,e){var w,v=this,u=null,t=B.n(18),s=B.K(A.c6.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.c(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fMW,u,u,u)}else if(d==null||e==null)w=D.h1l
else{w=x.p
w=B.A(B.a([B.E(B.w(B.a([B.c(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hk,u,u,u),A.cR,B.c(e.b,u,u,u,u,u,u,A0.FY,u,u,u)],w),A.B,u,A.e,A.P,0,A.p),1),B.aI(u,u,u,u,D.c3E,u,u,u,new C.dVn(v),u,u,u,u,"Back to the whole body",A.cp)],w),A.B,u,A.e,A.i,0,u,u)}return B.q(u,w,A.f,u,u,new B.p(I.a_h,u,s,t,u,u,A.m),u,u,u,u,X.aoz,u,u,u)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dRL.h(0,g)
i.aDs()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dwR
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aCR(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,I.pd,h,h,h,new C.dVE(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bK:B.Ck(h,A.qv,p))}p=i.ax
o=p?0:1
q.push(new B.dp(p,B.xU(B.q(A.z,B.w(D.dH9,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.bb9,h,h,D.hQs,h,h,h,h,h),A.b1,A.nn,o),h))
q=B.w(B.a([B.E(new B.am(A.a0,h,A.b7,A.t,q,h),1),new B.C(F.aof,i.c6r(g,f),h)],v),A.l,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dn8[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.e6(l,o,new C.dVF(i,n),n.c,A.c6,h))}p=B.a([new E.fm(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.e6(k,k===i.cy,new C.dVG(i,k),h,A.aQ,h))}p.push(new E.fm(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.jh(A.c3,""+A.h.S(o)+" beats/min","Heart rate",180,40,new C.dVH(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.GC(D.aBM[j],i.cx===j,new C.dVI(i,j),!1,h))
p.push(new E.fm(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.e6("Spin",o,new C.dVJ(i),D.asi,A.aH,h),new E.fO(A.mF,"Reset view",new C.dVK(i),A.c,h),new E.e6(l,m,new C.dVL(i),A.IQ,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.e6("Heartbeat sound",i.ok,new C.dVM(i),T.pb,A.c3,h))
p.push(new E.fm(v,h,h))
return E.m3(A.c6,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.w(p,A.l,h,A.e,A.P,0,A.p))}}
C.aPu.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.aPv.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bCw()}}
C.cak.prototype={
l0(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aD(e,"</script","<\\/script")
v=$.hR3
$.hR3=v+1
u="ngmy-body-viewer-"+v
$.xQ()
$.qi().pE(u,new C.cal(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fK(v,"message",new C.cam(t),!1,x.gA)
t.b=u},
fi(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Sk(w.contentWindow)
if(w!=null)J.akP(w,e,"*")}}catch(v){}}}
C.z6.prototype={}
C.Dv.prototype={}
C.o7.prototype={}
C.bg_.prototype={}
C.WD.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aGI(B.S(w,x.a2),B.a([],x.cB),B.S(w,v),B.S(w,v),B.S(w,u),A.aA,A.J,A.J,B.aR(u),$,A.bI,0,B.a([],x.X),null,null)}}
C.aGI.prototype={
Z(){var w=this
w.a4()
w.mA()
w.afG()
$.aS.U$.push(new C.dXu(w))},
afG(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$afG=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$afG)
case 6:q=e.nW("ngmy_circuit_passed_v1")
r=q==null?A.M:q
if(s.c!=null)s.l(new C.dX8(s,r))
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
return B.i($async$afG,v)},
ag2(d){return this.caH(d)},
caH(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ag2=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return B.b(B.aB(),$async$ag2)
case 6:r=f
q=s.cx
p=B.a3(q).k("ks<cl.E,o>")
q=B.B(new B.ks(q,new C.dXb(),p),p.k("M.E"))
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
return B.i($async$ag2,v)},
aBh(d,e,f,g){var w="c"+this.y++,v=new C.Dv(w,e,f,g)
this.d.n(0,w,v)
return v},
n8(d,e,f){return this.aBh(0,e,f,0)},
af_(d,e){var w
if(D.B4.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a6(0,new B.m(-36,w))},
uN(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aXP(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fl$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.ds(w,w.r,w.e),r=!1;s.A();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.n.eb(m,D.d3T[A.n.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uN(p,0)&&n.uN(p,1)
break
case"or":p=q.a
o=n.uN(p,0)||n.uN(p,1)
break
case"xor":p=q.a
o=n.uN(p,0)!==n.uN(p,1)
break
case"nand":p=q.a
o=!(n.uN(p,0)&&n.uN(p,1))
break
case"nor":p=q.a
o=!(n.uN(p,0)||n.uN(p,1))
break
case"not":o=!n.uN(q.a,0)
break
default:o=n.uN(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bWf(){return this.aXP(null)},
mT(d){var w,v,u,t,s,r,q,p,o,n=this
n.bWf()
if(!n.ax)return
for(w=n.d,w=new B.ba(w,B.a3(w).k("ba<2>")).gae(0),v=new B.eB(w,new C.dXv()),u=n.f,t=n.w,s=0;v.A();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fl$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fl$)
o=s+1
G.dI(520+90*A.n.F(s,4),"",200,0,0.25,"square")
s=o}}},
aBi(d){var w=this
w.d.a7(0)
A.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
mC(d,e){var w=this.x
return new B.m(d*w.a,e*w.b)},
axp(d){var w=this
if(w.x.B(0,A.aA)){$.aS.U$.push(new C.dX6(w,d))
return}w.l(new C.dX7(w,d))},
cH9(d){this.l(new C.dXc(this,d,$.bKp()[d]))},
cfA(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bKp()[a0]
v=d.d
u=B.a3(v).k("ba<2>")
t=u.k("X<M.E>")
s=t.k("M.E")
r=B.B(new B.X(new B.ba(v,u),new C.dX1(),t),s)
A.d.b_(r,new C.dX2())
q=B.B(new B.X(new B.ba(v,u),new C.dX3(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.l(new C.dX4(d,w))
return}u=d.r
p=B.dE(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.n.dJ(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.n.h7(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aXP(0)
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
d.l(new C.dX5(d,o,a0))},
aCm(d){var w,v,u,t,s=this.d,r=B.a3(s).k("ba<2>")
s=B.B(new B.ba(s,r),r.k("M.E"))
r=B.T(s).k("dn<1>")
s=new B.dn(s,r)
s=new B.bQ(s,s.gI(0),r.k("bQ<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.A()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cpg(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("ba<2>")
r=B.B(new B.ba(r,q),q.k("M.E"))
q=B.T(r).k("dn<1>")
r=new B.dn(r,q)
r=new B.bQ(r,r.gI(0),q.k("bQ<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.A()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c6k(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.A();){r=w.d
q=D.B4.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.af_(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bV_(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.af_(p,o)
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
cfC(d){var w,v,u,t=this,s=t.aCm(d)
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
t.l(new C.dXd())
return}u=t.bV_(d)
if(u!=null)t.l(new C.dXe(t,u))
else t.l(new C.dXf(t))},
aA5(d){return this.c9E(d)},
c9E(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$aA5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aCm(d)
if(s==null){w=1
break}B.jJ()
t.l(new C.dXa(t,s))
case 1:return B.h(u,v)}})
return B.i($async$aA5,v)},
bHr(d){if(this.x.B(0,A.aA))return
this.l(new C.dX0(this,d,A.cW))
B.f4()},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bKp()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.V(i.ax?T.pb:A1.u3,A.ab,h,h,h,21),h,h,h,new C.dXo(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.cw.j(0.14)
r=B.K(A.cw.j(0.5),A.r,1)
q=B.a([B.c("Challenge: "+w.a,h,h,h,h,h,h,D.fM2,h,h,h),B.c(w.b,h,h,h,h,h,h,A.Xy,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.C(A.kP,B.c(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bf:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.w(q,A.B,h,A.e,A.i,0,A.p),1),B.bI(D.hdd,h,i.gcfz(),B.bp(A.cw,h,h,h,h,h,h,h,h,h,h,A.cp))],g),A.l,h,A.e,A.i,0,h,h),A.f,h,h,new B.p(s,h,r,t,h,h,A.m),h,h,h,U.PA,D.bI0,h,h,1/0))}u.push(B.E(B.cg(new C.dXp(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.c(D.B4.h(0,r).a+": "+D.B4.h(0,r).e,h,h,h,h,h,h,Ak.uF,h,h,h),A.f,h,h,new B.p(s,h,h,t,h,h,A.m),h,h,h,A.a2i,A.bS,h,h,1/0))}u=B.w(u,A.l,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.B4.gdV(D.B4),s=s.gae(s);s.A();){r=s.gP(s)
q=new B.aQ(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.q(h,B.w(B.a([B.V(p.b,o,h,h,h,20),A.bs,B.c(p.a,h,h,h,h,h,h,D.aZY,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.p(n,h,new B.bE(m,m,m,m),new B.bc(q,q,q,q),h,h,A.m),h,h,h,A.eX,A.Dg,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dXq(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dBM[l]
s.push(new E.fO(A.Ro,k.b,new C.dXr(i,k),A.cw,h))}s.push(new E.fO(I.xv,"Clear",new C.dXs(i),A.c3,h))
r=B.a([],g)
for(j=0;q=$.bKp(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ea:A.m8
o=i.ay
n=i.cx.q(0,j)?A.bf:A.bu
r.push(new E.e6(q.a,o===j,new C.dXt(i,j),p,n,h))}return E.m3(A.cw,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.w(B.a([new E.fm(t,"PARTS",h),new E.fm(s,"TRY",h),new E.fm(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bgh.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.U()
w=B.L()
w.r=D.aib.gp(0)
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
i=a3.af_(l,o.c)
h=s.h(0,n)===!0
n=$.U()
g=B.a([],r)
f=new B.aJ(n.r,A.ak,a2,a2,g)
g.push(new B.b_(j,k))
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
n.y=O.p2
a5.af(f,n)}n=new B.ar(A.V,A.R,A.X,A.Y,A.W)
n.b=A.ae
n.c=3.2
n.d=A.bH
n.r=(h?A.eL:A.bz).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a6(0,D.KL)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aJ($.U().r,A.ak,a2,a2,B.a([],r))
w=a1.b
r.E(new B.b_(a4,w))
s=i.b
r.E(new B.i6(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.ae
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.ds(q,q.r,q.e);a3.A();)this.cfB(a5,a3.d)},
cfB(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.B4.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.c1(a0.c,64,64)
s=B.bx(t,A.k6)
r=w.cy===v
q=s.eN(A.cy)
$.U()
p=B.L()
p.r=A.v.j(0.55).gp(0)
p.y=A.nr
d.aq(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.san(new B.bV(A.z,0.5,A.w,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).az(0,B.c0(a0.c,52)))
d.O(q,52,p)}q=s.eN(A.cO)
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
l=v===!0?F.p9:D.bY2}else l=e.b
k=C.hqA(B.lD(l.a),30,A.c,l.b,g,A.C)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aI(0,new B.m(p/2,q.gb4(q)/2)))
j=C.hqA(e.a,10.5,A.c,g,g,A.C)
j.a5(d,a0.c.a6(0,new B.m(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hqA(f,9,u?A.eL:A.bX,g,g,A.u)
i.a5(d,a0.c.a6(0,new B.m(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b3U(d,w.af_(a0,h),o)
this.b3U(d,a0.c.a6(0,D.KL),o)},
b3U(d,e,f){var w
$.U()
w=B.L()
w.r=D.aib.gp(0)
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
C.aPz.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bD0.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bCB()}}
C.OX.prototype={
R(){return new C.aGZ(B.m2(0,null,null))}}
C.LM.prototype={
a9(){return"_UnfoldStyle."+this.b}}
C.Bv.prototype={}
C.aGZ.prototype={
Z(){this.a4()
B.bM(A.pX,C.iIS(),x.H)},
cfI(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcs(0).at
v.toString
w.f=v}w.l(new C.e2E(w,e))},
c8i(){var w=this
w.e.t()
w.e=B.m2(w.f,null,null)
w.l(new C.e2D(w))},
t(){this.e.t()
this.a3()},
C(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.Q(d).ax.a===A.dg?A.c:A.c8
return B.pg(t,B.c6(v,s,t?new C.bwR(w.e,w.gcfH(w),new C.e2F(d),v):new C.aLq(u,new B.b9(u.b,x.W)),v,!1,!1,v,!1),new C.e2G(w,u),x.K)}}
C.byx.prototype={}
C.bwR.prototype={
b3V(d,e,f){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,f?A.bF:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.C(X.a2L,B.w(B.a([v,A.bs,B.c(e,w,w,w,w,w,w,B.l(w,w,f?A.cz:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.B,w,A.e,A.i,0,A.p),w)},
C(d){var w,v,u,t=this,s=null,r=B.Q(d).ax.a===A.dg,q=B.aE(d,A.dL,x.w).w,p=B.aI(s,s,s,s,B.V(A.eI,r?A.bF:A.ab,s,s,s,20),s,s,D.hQV,t.e,s,s,s,s,s,s)
if(r)w=new B.p(A.c,s,s,B.n(14),A.Jz,s,A.m)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.n(14)
w=new B.p(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.ac(0,A.G,A.aH.j(0.22),A.J,8)],x.V),new B.a6(A.aw,A.aD,A.w,w,s,s),A.m)}v=B.c("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bF:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.q(s,B.w(B.a([v,B.c("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cz:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.hR_,s,A6.ap7,s,s,s),s,s,s),1),A.uy],u),A.l,s,A.e,A.i,0,s,s)
v=t.b3V("STUDIOS","Play, make things, and keep what you make",r)
$.bKq()
return B.bm(!1,B.w(B.a([B.E(B.vc(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nB(new B.R(8,q.r.b+6,8,4),new B.l4(w,s),s),new B.l4(v,s),new B.nB(A.ih,B.QH(new B.pj(new C.fjy(d),9,!0,!0,!0,0,B.tK(),s),D.aXG),s),new B.l4(t.b3V("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nB(D.bI9,B.QH(new B.pj(new C.fjz(t),6,!0,!0,!0,0,B.tK(),s),D.aXG),s)],u)),1)],u),A.l,s,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!1)}}
C.ahB.prototype={
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.Q(d).ax.a===A.dg){w=B.n(20)
v=(A.n.ao(o.c,3)&1)===0
u=B.a8H(v?A.aH:A.bk,20)
v=v?A.aH:A.bk
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eK(B.w(B.a([new B.WB(v,44,m.c,n,n),A.N,B.c(m.a,n,2,A.a2,n,n,n,D.fSs,A.K,n,n),A.cR,B.c(m.b,n,2,A.a2,n,n,n,D.fVl,A.K,n,n)],x.p),A.l,n,A.bc,A.i,0,A.p),n,u,n,A.Dw,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.n(20)
v=B.n(20)
u=B.ap(L.mt,l,0.3)
u.toString
t=x.O
u=B.a([u,D.alx],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ac(-4,A.G,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.v,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ac(0,A.G,l.j(0.5),A.J,12)],r)
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eK(B.w(B.a([B.q(n,B.V(m.c,A.c,n,n,n,24),A.f,n,n,new B.p(n,n,n,n,r,new B.a6(A.aw,A.aD,A.w,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.N,B.c(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cR,B.c(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.bc,A.i,0,A.p),n,new B.p(n,n,s,v,q,new B.a6(A.aw,A.aD,A.w,u,n,n),A.m),n,A.Dw,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.ago.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.Q(d).ax.a===A.dg,h=(A.n.ao(this.c,3)&1)===0?A.aH:A.bk,g=B.n(20)
if(i)w=B.a8H(h,20)
else{w=B.n(20)
v=B.ap(L.mt,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.alx],x.O)
v=new B.p(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ac(0,A.G,A.v.j(0.4),A.cy,12)],x.V),new B.a6(A.aw,A.aD,A.w,v,l,l),A.m)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aQ(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.WC(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ac(0,A.G,A.v.j(0.45),A.aaY,0)],s)
u.push(B.q(l,B.V(t[q],A.c,l,l,l,11),A.f,l,l,new B.p(l,l,l,new B.bc(o,o,o,o),m,new B.a6(A.a5,A.a9,A.w,n,l,l),A.m),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.w(u,A.l,l,A.e,A.P,0,A.p)
if(i)t=A.bF
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.c(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aG(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eK(B.w(B.a([new B.a4(58,l,u,l),A.S,t,A.at,B.V(A.E9,i?B.WC(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.bc,A.i,0,A.p),l,w,l,A.Dw,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.S0.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.v,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bP(new B.p(h,j,j,B.n(22),j,j,A.m),A.bn,j,j),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.v.j(0.55),A.KH,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.n(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.v,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bP(new B.p(j,j,j,j,j,new B.a6(A.aw,A.aD,A.w,B.a([p,o,n,i],m),D.dId,j),A.m),A.bn,j,j),0,0,0),B.ao(j,new B.bP(new B.p(j,j,j,j,j,new B.a6(A.aW,A.b0,A.w,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.m),A.bn,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b4(j,j,j,new C.bxT(i,j),A.aA),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.q(j,B.V(k.f,A.c,j,j,j,28),A.f,j,j,new B.p(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.c(k.r,j,j,j,j,j,j,D.fOt,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.at,B.c(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.FL)
p.push(B.q(j,j,A.f,j,j,new B.p(A.c.j(0.28),j,j,B.n(3),j,j,A.m),j,5,j,j,j,j,j,w*0.42))
m.push(new B.C(A.hf,B.A(B.a([s,A.eu,B.E(B.w(p,A.B,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.dp(!0,B.en(j,A.v.j(A.h.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.n(22)
m.push(B.bS(0,new B.dp(!0,new B.bP(new B.p(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.m),A.bn,j,j),j),0,0,0))
return new B.a4(w,v,new B.am(A.a0,j,A.ac,A.f,B.a([h,B.bS(0,new B.bP(new B.p(j,j,j,u,r,j,A.m),A.bn,B.bv(q,new B.am(A.a0,j,A.ac,A.t,m,j),A.ap),j),0,0,0)],l),j),j)}}
C.bxT.prototype={
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
C.bxo.prototype={
C(d){var w=null,v=B.n(22),u=B.a([D.buE,D.akz],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.v.j(0.5),A.ky,24)],x.V),q=B.n(22),p=A.d.gH(t)
return new B.a4(this.c,this.d,new B.bP(new B.p(w,w,s,v,r,new B.a6(A.aw,A.aD,A.w,u,w,w),A.m),A.bn,B.bv(q,B.b4(B.at(B.V(A.j8,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.beU(p,w),A.aA),A.ap),w),w)}}
C.beU.prototype={
a5(d,e){var w,v,u,t,s,r
$.U()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.m(s,0),new B.m(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.m(0,r),new B.m(u,r),w)
u=e.ep(A.J)
$.U()
t=B.L()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aD(d){return!1}}
C.aLq.prototype={
R(){return new C.aLr(new B.cB(null,x.A),null,null)}}
C.aLr.prototype={
gri(){var w,v=this,u=v.d
if(u===$){w=B.br(null,D.bFo,null,1,null,v)
w.cU(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gKB(){var w,v=this,u=v.e
if(u===$){w=B.br(null,A.fP,null,1,null,v)
w.ft(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaBj(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcfE(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gb04(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gb0S(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbd5(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a4()
var w=this.gri()
w.dr()
w.e2$.K(0,this.gcGS())},
cGT(){var w,v,u,t,s,r,q,p=this,o=p.gri().x
o===$&&B.d()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as&&p.ch<0){switch(p.gaBj().a){case 0:w=D.or
break
case 1:w=D.w_
break
case 2:w=D.a7f
break
case 3:w=D.or
break
case 4:w=D.dt8
break
case 5:w=D.w_
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.afK)r=0.09
else r=s===D.afL?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dI(260+90*v,"",260,1.6,0.18,"tri")
u=D.che[v]
E.mR("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.Kg("bell",D.cq6,1400,0.35)}}p.ax=o},
t(){this.gri().t()
this.gKB().t()
this.bEr()},
a13(){var w=this
w.gri().d6x(0,B.dw(0,0,0,A.h.S(11e3/w.Q),0,0))
w.l(new C.fje(w))},
crn(){this.gri().bR(0)
this.l(new C.fjd(this))},
a12(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a12=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:if(r.ch>=0){w=1
break}j=$.aS.bl$.x.h(0,r.f)
i=j==null?null:j.gbf()
if(!(i instanceof B.oF)||i.fy==null){w=1
break}h=r.as
j=r.gri()
j.bR(0)
g=r.gKB()
g.bR(0)
r.l(new C.fj3(r))
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
return B.b(E.ajQ(24*q,20,new C.fj4(r,n,q,p,o),n,o,new C.fj5(r),p),$async$a12)
case 7:l=a3
if(J.aa(l)===0){e=B.be("empty")
throw B.Y(e)}e=r.a.c
d=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
k=B.aD(e.b.toLowerCase(),d,"_")
w=8
return B.b(E.aUB(l,k),$async$a12)
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
break}r.l(new C.fj6(r))
g.ft(0,!0)
j.sp(0,0)
if(h)r.a13()
r.c.M(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.c(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a12,v)},
ahb(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ahb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gb0S(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.bd(q,A.bb,A.aP),$.ay()))}m=B.a([],m)
for(t=u.gbd5(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.bd(p,A.bb,A.aP),$.ay()))}o=B.B(u.gb04(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(L.mt,null,new C.fjc(u,l,m,o),t,!0,!0,!0,A.me,!1,!1,x.H),$async$ahb)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.ay()
n.W$=0}return B.h(null,v)}})
return B.i($async$ahb,v)},
C(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gaBj(),e=h.a.c,d=e.b,a0=h.gcfE(),a1=new C.Bv(f,d,e.c,a0,h.gb04(),h.gb0S(),h.gbd5())
e=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
e.toString
f=x.p
w=B.a([B.aI(g,g,g,g,B.V(h.at?T.pb:A1.u3,A.ab,g,g,g,21),g,g,g,new C.fjm(h),g,g,g,g,"Sound",g),B.aI(g,g,g,g,D.c7t,g,g,g,h.gcfG(),g,g,g,g,"Edit words and pictures",g),B.aI(g,g,g,g,I.pd,g,g,g,new C.fjn(h,a2),g,g,g,g,"Share",g)],f)
v=B.a([B.ca(h.gKB(),new C.fjo(h,a1),g),B.cg(new C.fjp(h,a1))],f)
u=h.as
t=u?h.gcrm():h.gcfJ()
u=u?D.bXd:A.u0
s=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
s.toString
t=B.A(B.a([B.aI(g,g,g,g,B.V(u,s,g,g,g,34),g,g,g,t,g,g,g,g,g,A.cp),B.E(B.ca(h.gri(),new C.fjq(h,a2,a1),g),1),B.aI(g,g,g,g,D.c3u,g,g,g,new C.fjr(h),g,g,g,g,"Replay",A.cp)],f),A.l,g,A.e,A.i,0,g,g)
s=h.Q
u=A.h.a1(s,1)
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
s=E.jh(r,u+"x","Speed",2.5,0.4,new C.fjs(h),s)
u=B.a([],f)
for(q=0;q<6;++q){p=D.dF1[q]
o=h.r
if(o===$)o=h.r=h.a.c.a
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
u.push(new E.e6(p.b,o===p.a,new C.fjt(h,p),p.c,r,g))}r=B.a([],f)
for(n=x.G,q=0;q<10;++q){m=D.chE[q]
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}l=A.d.gH(o).B(0,A.d.gH(m))?34:28
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}k=A.d.gH(o).B(0,A.d.gH(m))?34:28
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}j=A.d.gH(o).B(0,A.d.gH(m))?A.c:A.aT
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}i=new B.ax(j,A.d.gH(o).B(0,A.d.gH(m))?2.5:1,A.r,-1)
r.push(B.aA(g,B.q(g,g,A.f,g,g,new B.p(g,g,new B.bE(i,i,i,i),g,g,new B.a6(A.aw,A.aD,A.w,m,g,g),A.a6),g,k,g,I.ao4,g,g,g,l),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.fju(h,m),g,g,g,g,g,g,!1,A.a4))}u=B.a([t,s,new E.fm(u,"STYLE",g),new E.fm(r,"THEME",g),A.aj],f)
t=h.ch
if(t>=0){s=B.n(6)
a0=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
a0.toString
u.push(new B.C(A.jZ,B.w(B.a([B.bv(s,B.jK(A.by,g,a0,8,g,t,g),A.ap),A.at,B.c("Making your GIF\u2026 "+A.h.S(h.ch*100)+"%",g,g,g,g,g,g,A.nI,g,g,g)],f),A.l,g,A.e,A.i,0,A.p),g))}else{f=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
f.toString
u.push(new B.a4(1/0,g,B.df(A.on,g,D.hoD,h.gcfF(),B.bp(f,g,g,g,A.v,g,A.kO,g,g,g,g,g)),g))}return E.m3(e,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.ea(new B.am(A.a0,g,A.b7,A.t,v,g),h.f),d,B.w(u,A.l,g,A.e,A.P,0,A.p))},
bGB(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.or[r]
p=A.h.D((1-A.ek.aA(0,A.h.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.h.D(p/1.5707963267948966,0,1)
q=D.or[r]
n=q+0.12
m=A.h.D((a0-n)/(q+0.2-n),0,1)
n=D.or[r]
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
i=D.or[r]
h=i+0.1
if(A.h.D((a0-h)/(i+0.3-h),0,1)>0){i=D.or[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.or[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cS(0,r*118,0,f,f,f,new B.l2(q,new B.ja(n,f,A.aW,!0,f,new C.S0(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.or[r]
u=v-0.02
g=A.h.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.or[r]
t=v+0.12
e.push(new B.cS(0,r*118-3-2,0,f,f,4,new B.n3(new C.bws(u,g,1-A.h.D((a0-t)/(v+0.22-t),0,1),f),f,A.aA,f,f),f))}return new B.a4(a2,358,new B.am(A.a0,f,A.ac,A.f,e,f),f)},
bXR(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.w_[r]
p=A.rg.aA(0,A.h.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.w_[r]
m=q+0.15
l=A.h.D((a0-m)/(q+0.25-m),0,1)
m=D.w_[r]
q=m-0.03
q=A.h.D((a0-q)/(m+0.01-q),0,1)
m=B.dB()
k=m.a
k.$flags&2&&B.ak(k)
k[11]=0.0011
m.kf(n,n,n,1)
m.fO(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.S0(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dB()
k.fO(3.141592653589793)
k=new B.ja(k,f,A.z,!0,f,new C.bxo(a2,108,w,f),f)}e.push(new B.cS(0,r*130,0,f,f,f,new B.l2(q,new B.ja(m,f,A.z,!0,f,k,f),f),f))}return new B.a4(a2,378,new B.am(A.a0,f,A.ac,A.f,e,f),f)},
cM6(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a7f[w]
l.push(A.cn.aA(0,A.h.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b4(n,n,n,new C.bA0(d.d,l,D.aDv,m,C.bwQ(e,0.4,0.62),f,C.bwQ(e,0.45,0.7),n),A.aA),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hr7(g,w)
q=D.aDv[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cS(r,s-q*m*p+12,n,n,t,n,new B.l2(o,B.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hr7(g,w)
r=D.a7f[w]
q=r+0.15
v.push(new B.cS(s,l,n,n,t,n,new B.l2(A.h.D((e-q)/(r+0.25-q),0,1),B.c(u[w],n,n,n,n,n,n,A.XI,A.K,n,n),n),n))}return new B.a4(g,m+90,new B.am(A.a0,n,A.ac,A.f,v,n),n)},
bN_(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cn.aA(0,C.bwQ(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.at(B.dQ(B.b4(f,f,f,new C.bvR(A.d.gH(a1),C.bwQ(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eEI),f,f,f),0,0,0))
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
l.fO(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.kf(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.h.F(r,1):-1
w.push(new B.y(o,new B.cS(0,0,0,0,f,f,new B.cp(A.z,f,f,new B.l2(k*(0.45+0.55*o),B.dQ(new B.ja(l,f,A.z,!0,f,new C.S0(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.m(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.fj0())
A.d.u(a0,new B.O(w,new C.fj1(),x.fR))
return new B.a4(a5,330,new B.am(A.a0,f,A.ac,A.f,a0,f),f)},
cfD(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.w_[q]
o=A.h.D((a2-p)/(p+0.22-p),0,1)
n=A.n3.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.w_[q]
m=A.h.D((a2-m)/(m+0.02-m),0,1)
l=D.aFF[q]
k=B.dB()
k.nk(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.kf(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.w_[q]
g=h+0.1
g=A.h.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cS(0,0,0,0,e,e,new B.cp(A.z,e,e,new B.l2(m,B.dQ(new B.ja(k,e,A.z,!0,e,new C.S0(d,92,w,p,j,i,0,g*s,h,e),e),new B.m(0,l)),e),e),e))
l=D.w_[q]
h=l+0.02
f=A.h.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cS(0,0,0,0,e,e,new B.cp(A.z,e,e,B.dQ(new B.n3(new C.bfA(w,f,q,e),e,new B.av(r,212),e,e),new B.m(0,D.aFF[q])),e),e))}return new B.a4(a4,330,new B.am(A.a0,e,A.ac,A.f,a0,e),e)},
bJB(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.m(-b0,-150),new B.m(b0,-40),D.eEN],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.or[r]
p=A.h.D((a8-q)/(q+0.2-q),0,1)
o=A.cn.aA(0,p)
q=D.aFP[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.or[r]
f=g+0.2
e=A.h.D((a8-f)/(g+0.3-f),0,1)
f=D.or[r]
g=f-0.01
g=A.h.D((a8-g)/(f+0.03-g),0,1)
f=B.dB()
d=f.a
d.$flags&2&&B.ak(d)
d[11]=0.001
f.nk(l*h+D.dxU[r]*o)
f.fO(l*0.9)
h=0.55+0.45*o
f.kf(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cS(0,0,0,0,a3,a3,new B.cp(A.z,a3,a3,new B.l2(g,B.dQ(new B.ja(f,a3,A.z,!0,a3,new C.S0(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.m(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.or[r]
i=q+0.17
a2=A.h.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aFP[r]
a6.push(new B.cS(0,0,0,0,a3,a3,new B.cp(A.z,a3,a3,B.dQ(new B.n3(new C.bvT(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.m(0,q+48-4)),a3),a3))}}return new B.a4(b0,330,new B.am(A.a0,a3,A.ac,A.f,a6,a3),a3)}}
C.bws.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a5(w-v,0,w+v,e.b)
q=B.bx(u,A.hH)
$.U()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=O.p2
d.aq(q,t)
t=B.bx(u,A.hH)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.bvR.prototype={
a5(d,e){var w,v,u=this.c,t=B.c1(e.ep(A.J),e.b*u,e.a*u)
$.U()
u=B.L()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=A_.PZ
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
C.bfA.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ep(A.J),h=this.c,g=A.cn.aA(0,h)
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
C.bvT.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.ep(A.J)
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
C.bA0.prototype={
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
d=C.hr7(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.U()
a3=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a3.r=A.v.j(0.5).gp(0)
a3.y=A.nr
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
a5.push(new B.b_(a1,a3))
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
a5.push(new B.b_(d,a3))
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
b0=B.bx(new B.a5(b7,a6,b7+s,a9),A.hH)
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
C.aRg.prototype={
b0(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdP())
w.bd$=null
w.a3()}}
C.a2K.prototype={
a9(){return"_Role."+this.b}}
C.qQ.prototype={}
C.rC.prototype={}
C.Dz.prototype={}
C.a0G.prototype={}
C.aho.prototype={}
C.a2X.prototype={
ga0(d){return this.d}}
C.DK.prototype={}
C.aec.prototype={}
C.aeu.prototype={}
C.ags.prototype={}
C.bmi.prototype={
a5w(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dI(d,"",e,g,h,f)},
bee(d,e,f){return this.a5w(d,e,f,0,0.55)},
aGh(d,e,f,g){return this.a5w(d,e,f,0,g)},
bef(d,e,f,g){return this.a5w(d,e,f,g,0.55)},
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
ans(d,e,f,g){var w="n"+this.ay++,v=new C.rC(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tJ(d,e,f){return this.ans(0,e,f,0)},
X(d,e){var w=this
w.a.X(0,e)
A.d.bs(w.b,new C.dwX(e))
A.d.bs(w.c,new C.dwY(e))
w.b3()},
bi7(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.nx.h(0,v.b).c===D.yK)return!1
w=this.b
if(A.d.aR(w,new C.dwU(d,e)))return!1
w.push(new C.Dz(d,e))
this.b3()
return!0},
c76(d){var w
if(d.b==="beat")return D.cqi[A.n.F(d.d,4)]
w=this.at
switch(A.n.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aJT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.n.F(w,6)
t=D.aG6[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.DK(u,t,j.ax,90))
w.push(new C.DK(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a2X(u,new B.m(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bee(261.63*Math.pow(2,([0,4,7,12,16,19][A.n.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a2X(u,new B.m(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.DK(u,t,j.ax,120))
j.aGh(120,200,"noise",0.5)
j.bee(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.DK(u,t,j.ax,230))
w.push(new C.DK(u,t,j.ax+160,160))
w.push(new C.DK(u,t,j.ax+320,100))
j.bef(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.aec(u,new B.m((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bef(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.aeu(u,u.a6(0,new B.m(Math.cos(q),Math.sin(q)).aK(0,260+w.ai()*200)),t,j.ax))
j.a5w(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fZ()
j.a5w(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.ags(u,D.aFr[v],t,j.ax))
j.aGh(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aGh(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cmm[A.n.F(w,3)]
for(k=1;k<=3;++k)j.cBM(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eB(w,new C.dwV(d));v.A();)j.aEJ(w.gP(0),j.ax+D.cyR[A.n.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cQl[A.n.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eB(w,new C.dwW(d));v.A();)j.aEJ(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.yi(w,0,v-700)},
cBM(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a0G(e,"~"+d))},
aEJ(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.aho(d.a,v,e,w))
u.push(new C.a0G(w,v))},
a9l(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aJT(r)
u.n(0,r,o.ax+o.c76(s))}}w=o.c
v=B.T(w).k("X<1>")
q=B.B(new B.X(w,new C.dwZ(o),v),v.k("M.E"))
if(q.length!==0){A.d.bs(w,new C.dx_(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.aV(u,1)
for(u=A.d.gae(v),r=new B.eB(u,new C.dx0(p));r.A();)o.aEJ(u.gP(0),o.ax)}else o.aJT(u)}}A.d.bs(o.d,new C.dx1(o))
A.d.bs(o.e,new C.dx2(o))
A.d.bs(o.f,new C.dx3(o))
A.d.bs(o.w,new C.dx4(o))
A.d.bs(o.x,new C.dx5(o))
A.d.bs(o.r,new C.dx6(o))
o.b3()},
wf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(v=this.a,v=new B.ds(v,v.r,v.e),u=x.N,t=x.K;v.A();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.T.au(B.J(["nodes",m,"edges",v],u,x.ew),null)},
VF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.T.aN(0,d,null))
k.a7(0)
for(o=x.j,n=J.aN(o.a(J.t(w,"nodes"))),m=k.a;n.A();){v=n.gP(n)
u=B.v(J.t(v,"k"))
if(!D.nx.am(0,u))continue
t=B.v(J.t(v,"id"))
m.n(0,t,new C.rC(t,u,new B.m(B.dh(J.t(v,"x"))*k.cy.a,B.dh(J.t(v,"y"))*k.cy.b),A.h.L(B.dh(J.t(v,"p")))))
s=B.c9(B.aD(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aN(o.a(J.t(w,"edges"))),n=k.b;o.A();){r=o.gP(o)
q=B.v(J.t(r,0))
p=B.v(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.Dz(q,p))}k.b3()
return!0}catch(l){return!1}},
d0S(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rC(n,r,new B.m(q*p.a,o*p.b),s))
l.b3()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bi7(w[m.a],w[m.b])}},
ga0(d){return this.cy}}
C.Hd.prototype={}
C.Y5.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aIf(new C.bmi(B.S(w,x.f3),v,u,t,s,r,q,p,o,B.S(w,n),B.S(w,n),B.S(w,n),B.S(w,n),A.cW,A.L,A.aA,$.ay()),A.bI,A.J,A.J,A.M,null,null)}}
C.aIf.prototype={
afy(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$afy=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aB(),$async$afy)
case 6:q=n.kn(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.l(new C.eG3(s))
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
return B.i($async$afy,v)},
acq(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$acq=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.l(new C.eFT(s))
u=3
w=6
return B.b(B.aB(),$async$acq)
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
return B.i($async$acq,v)},
bT6(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("ba<2>")
v=""+n.a+"|"+o.length+"|"+new B.ba(n,w).cH(0,0,new C.eFV())+"|"+A.d.cH(o,0,new C.eFW())
if(v===p.ch)return p.CW
u=new C.eFZ()
t=x.s
s=B.a([],t)
r=new C.eG_(p,s,u)
for(n=new B.ba(n,w).gae(0),w=new B.eB(n,new C.eFX());w.A();){q=n.gP(0)
if(!A.d.aR(o,new C.eFY(q)))s.push(B.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cI(s,0,B.dy(5,"count",x.S),x.N).de(0)},
Z(){var w,v=this
v.a4()
v.afy()
v.d.db=v.ay
w=v.qo(new C.eGt(v))
w.fW(0)
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
w.bDs()},
af3(d){return this.c6x(d)},
c6x(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$af3=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aB(),$async$af3)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.VF(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.b1k(A.d.gH(D.aER))
if(s.c!=null)s.l(new C.eG2())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$af3,v)},
b1k(d){this.d.d0S(0,d.c,d.d)
this.FG()},
FG(){var w=this.as
if(w!=null)w.a2(0)
this.as=B.cD(A.m4,new C.eFP(this))},
aBk(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("ba<2>")
s=B.B(new B.ba(s,r),r.k("M.E"))
r=B.T(s).k("dn<1>")
s=new B.dn(s,r)
s=new B.bQ(s,s.gI(0),r.k("bQ<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.A()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cph(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("ba<2>")
r=B.B(new B.ba(r,q),q.k("M.E"))
q=B.T(r).k("dn<1>")
r=new B.dn(r,q)
r=new B.bQ(r,r.gI(0),q.k("bQ<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.A()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c6l(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.A();){r=w.d
if(D.nx.h(0,r.b).c===D.yK)continue
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
cfM(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hR4(new B.m(n.a+36,n.b+0),new B.m(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cJI(d){var w,v,u,t,s,r,q=this,p=q.aBk(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f4()
u=v.b
if(u==="button"){w.aJT(p)
return}if(q.r)return
t=D.nx.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.t4)s=6
else s=1
v.d=A.n.F(v.d+1,s)
w.b3()
q.FG()
return}if(q.r)return
r=q.cfM(d)
if(r!=null){w=q.d
A.d.cP(w.b,r)
w.b3()
q.FG()}},
cqE(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cph(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aBk(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aI(0,d)}},
cqF(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.m(A.h.D(d.a+s.y.a,46,t.a-46),A.h.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b7_(){var w,v,u=this
if(u.z!=null){w=u.c6l(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bi7(v,w)}else v=!1
if(v){B.ke()
u.FG()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.FG()
u.x=null}},
afN(d){return this.c9F(d)},
c9F(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$afN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aBk(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jJ()
p=t.c
p.toString
w=3
return B.b(B.bU(L.mt,null,new C.eG5(q),p,!0,!0,!1,A.me,!1,!1,x.y),$async$afN)
case 3:if(f===!0){r.X(0,s)
t.FG()}case 1:return B.h(u,v)}})
return B.i($async$afN,v)},
cfK(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tJ(0,d,new B.m(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.f4()
this.FG()},
ajW(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ajW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(L.mt,null,new C.eG7(),s,!0,!0,!0,A.me,!1,!1,x.es),$async$ajW)
case 2:t=e
if(t!=null)u.b1k(t)
return B.h(null,v)}})
return B.i($async$ajW,v)},
ahc(d){var w=0,v=B.j(x.H),u=this,t
var $async$ahc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.eFS(),t,null,!0,!0,x.y),$async$ahc)
case 2:if(f===!0){u.d.a7(0)
u.FG()}return B.h(null,v)}})
return B.i($async$ahc,v)},
C(d){var w=this,v=null,u=B.a([B.al2(w.r?new B.bH(A.a5,v,v,new B.C(A.I6,B.hz(D.c1b,D.h5I,new C.eGr(w),v),v),v):w.cfN(),A.b1,A.iP),B.E(B.cg(new C.eGs(w)),1)],x.p)
if(!w.r)u.push(w.cEm())
return B.c6(v,A.c8,B.bm(!0,B.w(u,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bOJ(){var w=null,v=new C.eFU(),u=A.v.j(0.7),t=B.n(26),s=B.K(A.bw.j(0.5),A.r,1)
return B.bS(0,B.en(B.at(B.q(w,B.cb(B.w(B.a([D.hho,A.at,D.hpr,A.az,v.$4(A.mG,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(W.E5,A.cw,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kp,A.c6,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.QO,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.hoG,new B.bH(A.a9,w,w,B.bK(!1,D.heq,w,w,!0,w,w,w,this.gbOC(),w,w),w)],x.p),A.B,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.Nh,new B.p(L.mt,w,s,t,w,w,A.m),w,w,w,A.f7,A9.apq,w,w,w),w,w,w),u,!0),0,0,0)},
cfN(){var w=this,v=null,u=B.aI(v,v,v,v,Aq.nv,v,v,v,new C.eGd(w),v,v,v,v,v,v),t=w.abR(A.DY,"How it works",new C.eGe(w),!0),s=w.ay?T.pb:A1.u3
return new B.C(D.bMk,B.A(B.a([u,D.bO_,t,w.abR(s,"Sound",new C.eGf(w),!0),w.abR(A.e9,"Ideas",w.gcuy(),!0),w.abR(I.xv,"Clear",w.gcfL(w),!0),w.aSR(A.fR,"Show",new C.eGg(w),!0,!0)],x.p),A.l,v,A.e,A.i,0,v,v),v)},
aSR(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.V(d,h?A.v:A.c,w,w,w,20)],x.p)
return new B.C(Am.xn,B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.fU(new B.C(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
abR(d,e,f,g){return this.aSR(d,e,f,g,!1)},
cEm(){var w=null,v=new C.eG9(this),u=A.c.j(0.08)
return B.q(w,B.cb(B.A(B.a([v.$2("START",D.yK),v.$2("CHANGE",D.Gj),v.$2("REACT",D.t4)],x.p),A.B,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aJ),A.f,w,w,new B.p(L.CP,w,new B.bE(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.m),w,w,w,w,D.bHj,w,w,w)},
cEn(d){var w,v,u,t,s=null,r=D.nx.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.C(A.eX,B.aA(s,B.q(s,B.w(B.a([B.V(r.b,v,s,s,s,22),A.cR,B.c(r.a,s,1,A.a2,s,s,s,D.aZY,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.p(s,s,t,w,s,new B.a6(A.aW,A.b0,A.w,u,s,s),A.m),s,s,s,s,A.hC,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eG8(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bmj.prototype={
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
e.push(new B.b_(i,j))
d.ac()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.i6(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.aj(e)
d.ac()
a1=D.nx.h(0,l.b).d
a2=D.nx.h(0,k.b).d
f=new B.ar(A.V,A.R,A.X,A.Y,A.W)
f.b=A.ae
f.c=3
f.d=A.bH
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rm(new B.m(i,j),new B.m(g,h))
f.san(new B.a6(A.a5,A.a9,A.w,e,b3,b3).az(0,new B.a5(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.h.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hR4(new B.m(j.a+36,j.b+0),new B.m(i.a-36,i.b),a4)
$.U()
i=new B.ar(A.V,A.R,A.X,A.Y,A.W)
i.r=A.c.j(0.35).gp(0)
i.y=O.p2
b7.O(a5,8,i)
i=new B.ar(A.V,A.R,A.X,A.Y,A.W)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a6(0,D.KL)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aJ($.U().r,A.ak,b3,b3,B.a([],p))
p=a7.b
d.E(new B.b_(t,p))
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
f=B.rm(j,i)
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
p.san(new B.bV(Ac.C7,0.5,A.w,b3,0,B.a([A.c,i],q),b3,b3).az(0,B.c0(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.h.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bmk(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.m(t.a-p/2,t.b-(40+60*v+q.gb4(q)/2)))}for(b4=new B.ds(o,o.r,o.e);b4.A();)b2.cqa(b7,b4.d,b5)
b6.restore()},
cqa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.nx.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.h.D(1-(f-w)/520,0,1)
u=B.c1(e.c,64,64)
t=B.bx(u,A.ia)
s=t.eN(A.cy)
$.U()
r=B.L()
r.r=A.v.j(0.55).gp(0)
r.y=A.nr
d.aq(s,r)
if(v>0){s=t.cu(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.DB
d.aq(s,r)}s=t.eN(A.cO)
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
o=C.bmk(B.lD(r.a),30,A.c,r.b,j,A.C)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aI(0,new B.m(s/2,r.gb4(r)/2)))
n=C.bmk(h.a,11,A.c,j,j,A.C)
n.a5(d,e.c.a6(0,new B.m(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.n.F(e.d,r)]
else m=i==="pop"?D.aFr[A.n.F(e.d,6)]:j
h=h.c
if(h===D.t4){s=e.c.a6(0,new B.m(0,62))
r=B.L()
r.r=D.aG6[A.n.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.bmk(m,9.5,A.aE,j,j,A.O)
l.a5(d,e.c.a6(0,new B.m(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bmk(m,9.5,A.aE,j,j,A.O)
l.a5(d,e.c.a6(0,new B.m(-l.b.c/2,54)))}if(k.c)return
if(h!==D.yK)k.b7P(d,e.c.aI(0,D.KL),q)
k.b7P(d,e.c.a6(0,D.KL),q)},
b7P(d,e,f){var w
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
C.aQo.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.es.prototype={}
C.ul.prototype={
aun(d,e,f,g){var w=this
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
C.acQ.prototype={}
C.adZ.prototype={}
C.a6S.prototype={
bk2(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.he()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.acQ(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
cbS(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bTz())},
ans(d,e,f,g){var w="p"+this.c++,v=new C.ul(w,e,f,g)
v.aun(w,e,f,g)
this.a.push(v)
return v},
X(d,e){A.d.X(this.a,e)
A.d.bs(this.b,new C.bTK(e))},
a7(d){A.d.a7(this.a)
A.d.a7(this.b)},
cSJ(d,e,f,g,h){return A.d.aR(this.b,new C.bTF(e,f,g,h))},
aoh(d,e,f,g){var w
if(d===f||this.cSJ(0,d,e,f,g))return null
w=new C.adZ(d,e,f,g)
this.b.push(w)
return w},
aFg(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
B2(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
ar4(d){return this.NA(d)&&!d.x&&d.cx>this.B2(d)},
bcf(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
NA(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cg6(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.B5.h(0,v)
if(w!=null)return w.a
return 100},
wf(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.cbS(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bTL(a2),t).cH(0,0,new C.bTM(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.S(x.N,u)
n=new C.bTO(o)
m=B.a([],x.t)
l=new C.bTN(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.S(u,u)
f=new C.bTQ(g,l,n)
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
a2.bcb(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.B2(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.bcb(e,d,w,!0)
a2.bVt(a4)},
bcb(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.S(x.N,b3),b5=new C.bTB(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bTA(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bTD(B.S(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.bcf(t)*(1+t.CW))
a4=b2.aFg(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cg6(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bYR(e,a0,b8)
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
bYR(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bVt(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aFg(o)/a1.bcf(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.B2(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bNk(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bk2(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uU(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.uU(o,"The "+$.r1().h(0,n).b+" got "+A.h.a1(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uU(o,"More than 1.5 amps went through the "+$.r1().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uU(o,"The regulator had to turn "+A.h.a1(o.cy,1)+" V into heat while "+A.h.S(i*1000)+" mA flowed. That is "+A.h.a1(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uU(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.B5.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.r1().h(0,n).b
l=f.b
l=l===A.h.bg(l)?""+A.h.S(l):B.v(l)
g=f.c
g=g===A.h.bg(g)?""+A.h.S(g):B.v(g)
a1.uU(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.h.a1(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fzv.q(0,n)){m=o.fx>0?A.h.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.h.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uU(o,"The bulb got "+A.h.a1(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.h.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uU(o,"The LED had "+A.h.S(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.h.D(j/14,0,1)
break
case"motor":n=A.h.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.h.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uU(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.h.D(i/1,0,1)
if(!o.x&&i>1)a1.uU(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uU(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.h.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uU(o,"The capacitor was charged to "+A.h.a1(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bNk(d){return A.d.aR(this.a,new C.bTy(d))},
uU(d,e){var w
d.x=!0
d.ay=e
this.bk2(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
boH(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a7(0)},
aLF(d){var w=d.b
return D.aWB.q(0,w)||D.B5.am(0,w)||w==="buck"||w==="regulator"},
blx(d){var w,v=!0
if(!this.NA(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.B5.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
WX(d,e){var w=this.b
return new B.X(w,new C.bTS(d,e),B.T(w).k("X<1>")).gI(0)},
rR(d){var w,v
if(d.x)return!1
w=d.b
if(D.B5.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bjy(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.r1().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aLF(d)||i.rR(d))return null
w=i.WX(d,0)
v=i.WX(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("X<1>")
s=B.B(new B.X(u,i.gd0p(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.h.bg(r)?""+A.h.S(r):B.v(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.h.a1(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.B5.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.NM("battery"),o=J.aN(t.a),t=new B.eB(o,t.b);t.A();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.WX(n,0)+i.WX(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.NM("switch"),o=J.aN(t.a),t=new B.eB(o,t.b);t.A();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.r1().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.B2(k))return"The "+$.r1().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.h.a1(k.cx,2)+" amps, but it can only give about "+A.h.a1(i.B2(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aR(u,new C.bTG(i,d))
h=q.b
h=h===A.h.bg(h)?""+A.h.S(h):B.v(h)
u=A.h.a1(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.h.a1(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.h.a1(Math.abs(d.dy),1)+" V). Try a bigger battery."},
NM(d){var w=this.a
return new B.X(w,new C.bTJ(d),B.T(w).k("X<1>"))},
aLg(d){return this.NM(d).aR(0,new C.bTI(0.35))},
qy(d,e){return A.d.aR(this.a,new C.bTH(e))}}
C.alE.prototype={
a5(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.U()
w=B.L()
w.r=F.nW.gp(0)
c0.aE(new B.a5(0,0,b8,b9),w)
w=C.ioZ(c1)
v=$.i_e()
if(A.n.F(w.length,2)!==0)B.bi(B.dM('"points" must have an even number of values.',b5))
u=c0.b
if(u!=null)u.oC(v)
t=v.nm()
v=c0.c
v.drawPoints($.i08()[0],w,t)
t.delete()
for(w=b4.b,u=w.b,s=u.length,r=b4.f,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){p=u[q]
o=p.a
n=o.c
m=p.b===0?-1:1
l=D.mO.am(0,o.b)?(o.ch-1)*38:0
o=o.d
k=p.c
j=k.c
i=p.d===0?-1:1
h=D.mO.am(0,k.b)?(k.ch-1)*38:0
b4.cPp(c0,new B.m(n*b6+m*(42+l),o*b7),new B.m(j*b6+i*(42+h),k.d*b7),p,p===r)}u=b4.d
if(u!=null&&b4.e!=null){g=C.i4h(u.a,u.b,c1)
u=b4.e
u.toString
$.U()
s=B.L()
s.r=A.ab.gp(0)
s.c=3
s.d=A.bH
c0.ah(g,u,s)}for(u=w.a,s=u.length,r=b4.c,o=b4.r,n=x.v,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){f=u[q]
m=f.c*b6
l=f.d*b7
if(f.Q>0){k=Math.sin(w.d*30)
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=F.O3.j(A.h.D(f.Q*0.45,0,0.6)).gp(0)
j.y=A.DB
c0.O(new B.m(m,l),46+14*k,j)}e=o.h(0,f.a)
if(e==null)e=1
J.bs(v.save())
v.translate(m,l)
k=A.h.D(A.n3.aA(0,A.h.D(e,0,1)),0.01,1.4)
v.scale(k,k)
b4.crb(c0,f,f===r)
v.restore()
k=f.b
if((k==="battery"||k==="solar"||k==="crank"||k==="turbine")&&!f.x&&f.cx>w.B2(f)){j=m+0
i=l+-40
h=Math.sin(w.d*10)
d=$.U().r
a0=B.a([],n)
a1=new B.aJ(d,A.ak,b5,b5,a0)
a2=i-13
a0.push(new B.b_(j,a2))
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
a0.push(new B.b_(j,a2))
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
b4.lP(c0,"!",new B.m(j+-3,i+-8),A.c,14)}if(!f.x)j=(D.aWB.q(0,k)||D.B5.am(0,k)||k==="buck"||k==="regulator")&&!w.rR(f)&&w.WX(f,0)+w.WX(f,1)>0
else j=!1
if(j){m+=0
l+=-40
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=A.as.gp(0)
c0.O(new B.m(m,l),10,j)
b4.lP(c0,"!",new B.m(m+-3,l+-8),A.v,14)}for(a8=0;a8<2;++a8){m=f.c
l=a8===0
j=l?-1:1
i=D.mO.am(0,k)?(f.ch-1)*38:0
i=m*b6+j*(42+i)
j=f.d*b7
a9=new B.m(i,j)
$.U()
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=F.nW.gp(0)
c0.O(a9,7,m)
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.b=A.ae
m.c=2.4
m.r=(l&&w.blx(f)?A.c3:A.ab).gp(0)
c0.O(a9,6,m)
if(l&&w.blx(f))b4.lP(c0,"+",new B.m(i+-4,j+-22),A.c3,13)}}for(v=w.f,s=v.length,q=0;q<v.length;v.length===s||(0,B.I)(v),++q){b0=v[q]
r=b0.a*b6+b0.c
o=b0.b*b7+b0.d
b1=new B.m(r,o)
b2=A.h.D(b0.r/0.8,0,1)
n=B.ap(M.OQ,F.a15,b2)
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
l.y=A.Q_
c0.O(b1,4.5*b2+1,l)}if(A.d.aR(u,new C.bNU())){b3=A.d.cH(u,0,new C.bNV())
$.U()
b7=B.L()
b7.r=D.blD.j(0.05+0.09*b3*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c0.aE(new B.a5(0,0,b8,b9),b7)
b7="short|"+B.v(b6)
a9=$.aRP.h(0,b7)
if(a9==null){a9=B.h2(b5,A.cK,b5,b5,b5,D.fKK,A.a8,A.cb,b5,A.e6,A.cc)
a9.nM(b6-24)
$.aRP.n(0,b7,a9)}a9.a5(c0,new B.m(12,10))}},
lP(d,e,f,g,h){var w,v=null,u=e+"|"+g.m()+"|"+B.v(h)
if($.aRP.a>300)$.aRP.a7(0)
w=$.aRP.h(0,u)
if(w==null){w=B.h2(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,g,v,v,v,v,v,v,v,v,h,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),e),A.a8,A.cb,v,A.e6,A.cc)
w.eL()
$.aRP.n(0,u,w)}w.a5(d,f)},
cPp(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aJ($.U().r,A.ak,null,null,B.a([],x.v))
e.E(new B.b_(a0.a,a0.b))
w=C.hX5(a0,a1,a2)
e.E(new B.cn(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.O3,A.h.D(p/1.2,0,1))
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
if(q){n=new B.ans(new B.vf(B.A0(e),!1,B.a([],x.l))).gH(0)
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
f=t[u].Xb(g)
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
a0k(d,e,f,g){var w,v,u,t
$.U()
w=B.L()
v=g?A.aW:A.a5
u=g?A.b0:A.a9
t=B.ap(e,A.v,0.3)
t.toString
w.san(new B.a6(v,u,A.w,B.a([e,f,e,t],x.O),A.Jx,null).az(0,d))
return w},
b21(d,e,f){return this.a0k(d,e,f,!0)},
cbr(d,e){return this.a0k(d,A.bl,A.hX,e)},
al4(d,e){var w,v,u
$.U()
w=B.L()
w.san(D.eSc.az(0,B.c0(e,4.2)))
d.O(e,4.2,w)
w=e.a6(0,D.eHm)
v=e.a6(0,D.eHw)
u=B.L()
u.r=A.cU.gp(0)
u.c=1.2
d.ah(w,v,u)},
crb(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=4294626325,b5=4286331629,b6=4287322667,b7=4293870660,b8=$.U(),b9=B.L()
b9.san(D.ccA.az(0,D.fvD))
b9.c=3.4
b9.d=A.bH
w=B.L()
w.r=A.v.j(0.45).gp(0)
w.y=O.p2
c0.c3(D.fvs,w)
if(c2){w=B.bx(D.fvB,A.k5)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c0.aq(w,v)}u=C.hAT(c1)
c0.ah(new B.m(-u,0),D.eIU,b9)
c0.ah(D.eG0,new B.m(u,0),b9)
t=c1.x
w=c1.b
s=D.mO.am(0,w)&&c1.ch!==1
if(s){J.bs(c0.c.save())
c0.bW(0,c1.ch)}switch(w){case"battery":b2.bK1(c0,c1)
break
case"solar":r=B.bx(D.fvu,A.jL)
c0.aq(r,b2.a0k(new B.a5(r.a,r.b,r.c,r.d),A.d1,A.bP,!1))
b8=B.L()
w=B.ap(D.bpI,A.di,0.25+0.55*c1.f)
w.toString
v=B.ap(D.bzw,A.m1,0.3+0.4*c1.f)
v.toString
b8.san(new B.a6(A.aw,A.aD,A.w,B.a([w,v],x.O),b3,b3).az(0,D.abV))
c0.aE(D.abV,b8)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b8=-34+p*68/6
c0.ah(new B.m(b8,-18),new B.m(b8,18),q)}for(p=1;p<4;++p){b8=-18+p*9
c0.ah(new B.m(-34,b8),new B.m(34,b8),q)}for(p=0;p<6;++p){b8=-34+(p+0.5)*68/6
$.U()
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=A.cH.j(0.5).gp(0)
w.c=0.6
c0.ah(new B.m(b8,-18),new B.m(b8,18),w)}b8=new B.aJ($.U().r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.b_(-34,18))
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
c0.O(D.eG4,4+4*w,b8)
break
case"crank":o=B.bx(D.fve,A.h5)
c0.aq(o,b2.b21(new B.a5(o.a,o.b,o.c,o.d),A.bz,A.bQ))
b8=B.L()
b8.san(D.aUE.az(0,B.c0(A.J,12)))
c0.O(A.J,12,b8)
n=new B.m(Math.cos(c1.y)*22,Math.sin(c1.y)*22)
b8=B.L()
b8.r=A.cH.gp(0)
b8.c=5
b8.d=A.bH
c0.ah(A.J,n,b8)
b8=B.L()
b8.san(D.eSz.az(0,B.c0(n,7)))
c0.O(n,7,b8)
b2.al4(c0,D.eIN)
b2.al4(c0,D.eFP)
break
case"turbine":b8=b8.r
w=x.v
v=new B.aJ(b8,A.ak,b3,b3,B.a([],w))
v.E(new B.b_(-3,24))
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
m.push(new B.b_(0,-2))
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
b8.san(D.eSf.az(0,B.c0(A.J,4.5)))
c0.O(A.J,4.5,b8)
break
case"switch":o=B.bx(D.fvm,A.pq)
b8=B.L()
b8.san(D.awg.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,b8)
b2.al4(c0,D.VS)
b2.al4(c0,D.aPm)
h=c1.w?D.aPm:H.aPc
b8=B.L()
b8.r=A.ax.gp(0)
b8.c=6
b8.d=A.bH
c0.ah(D.VS,h,b8)
b8=B.L()
b8.r=(c1.w?A.bf:A.bP).gp(0)
b8.c=4
b8.d=A.bH
c0.ah(D.VS,h,b8)
b8=B.l1(D.VS,h,0.85)
b8.toString
w=B.L()
w.r=A.aC.gp(0)
c0.O(b8,5,w)
break
case"fuse":g=B.bx(D.aVt,D.aUJ)
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
c0.ah(D.aPI,D.aPk,b8)}else{b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.aPI,D.eJh,b8)
b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.eGS,D.aPk,b8)
b8=B.L()
b8.r=A.e0.gp(0)
c0.O(A.J,6,b8)}for(f=0;f<2;++f){e=B.c1(new B.m(M.hs[f]*22,0),20,9)
c0.aq(B.bx(e,A.hu),b2.a0k(e,A.de,A.nQ,!0))}break
case"pot":b8=B.L()
b8.san(D.eSq.az(0,B.c0(A.J,21)))
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
b8.san(D.eSd.az(0,B.c0(A.J,13)))
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
case"resistor":a1=B.bx(D.aVt,D.aUJ)
b8=B.L()
b8.san(D.cg7.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
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
c0.aE(D.fvP,b8)
b8=c1.r
b2.lP(c0,b8>=1000?"1k\u03a9":""+A.h.S(b8)+"\u03a9",D.eIi,A.ab,10)
break
case"bulb":w=c1.fx
if(w>0){v=B.L()
v.r=A.eL.j(0.55*w).gp(0)
v.y=A.DB
c0.O(H.wf,34,v)}o=B.c1(D.eEK,12,18)
c0.aq(B.bx(o,A.hu),b2.a0k(o,A.bl,A.dW,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.r=A.dH.gp(0)
v.c=1
c0.ah(new B.m(-9,w),new B.m(9,w),v)}w=B.L()
if(t)v=A.GU
else{v=B.ap(A.dW,A.i_,c1.fx)
m=c1.fx
v=v.j(0.25+0.7*m)}if(t)m=A.Hf
else{m=B.ap(A.d1,A.eL,c1.fx)
m.toString}w.san(new B.bV(A.n1,0.5,A.w,b3,0,B.a([v,m.j(0.18+0.5*c1.fx)],x.O),b3,b3).az(0,B.c0(A.um,17)))
c0.O(A.um,17,w)
w=B.L()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c0.O(A.um,17,w)
b8=b8.r
w=x.v
m=new B.aJ(b8,A.ak,b3,b3,B.a([],w))
m.E(new B.b_(-9,-12))
m.E(new B.cn(-12,-4,-9,0))
v=B.L()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c0.af(m,v)
v=B.L()
v.r=A.cG.gp(0)
v.c=1.4
c0.ah(D.eJb,D.eJd,v)
v=B.L()
v.r=A.cG.gp(0)
v.c=1.4
c0.ah(D.eGL,D.eGO,v)
w=B.a([],w)
a4=new B.aJ(b8,A.ak,b3,b3,w)
a4.E(new B.b_(-4,-2))
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
if(t)w=A.ba
else{w=B.ap(A.d1,D.bqS,c1.fx)
w.toString}b8.r=w.gp(0)
c0.af(a4,b8)
break
case"led":w=c1.fx
if(w>0){v=B.L()
v.r=A.aC.j(0.6*w).gp(0)
v.y=D.bNN
c0.O(A.um,30,v)}w=B.L()
w.r=A.dW.gp(0)
w.c=2.4
c0.ah(D.eJj,D.eJi,w)
w=B.L()
w.r=A.dW.gp(0)
w.c=2.4
c0.ah(D.eGU,D.eGT,w)
b8=b8.r
w=x.v
a6=new B.aJ(b8,A.ak,b3,b3,B.a([],w))
a6.E(new B.b_(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.cn(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bz())
v=B.L()
if(t)m=A.jB
else{m=B.ap(A.eE,D.bsE,c1.fx)
m.toString}if(t)k=A.l9
else{k=B.ap(A.kK,A.aC,c1.fx)
k.toString}v.san(new B.a6(A.aw,A.aD,A.w,B.a([m,k],x.O),b3,b3).az(0,D.fuH))
c0.af(a6,v)
v=B.L()
v.b=A.ae
v.c=1.2
v.r=A.jX.gp(0)
c0.af(a6,v)
v=B.L()
v.r=A.ex.gp(0)
c0.aE(D.fuN,v)
w=new B.aJ(b8,A.ak,b3,b3,B.a([],w))
w.E(new B.b_(-7,-4))
w.E(new B.cn(-6,-12,0,-15))
b8=B.L()
b8.b=A.ae
b8.c=2
b8.r=A.c.j(0.5).gp(0)
c0.af(w,b8)
break
case"motor":a7=new B.a5(-28,-14,20,14)
c0.aq(B.bx(a7,A.iE),b2.b21(a7,A.an,A.bo))
b8=B.L()
b8.r=A.cx.gp(0)
c0.aE(D.fue,b8)
b8=B.L()
b8.r=A.cH.gp(0)
c0.aE(D.fug,b8)
b8=c0.c
J.bs(b8.save())
b8.translate(31,0)
for(l=0;l<3;++l){J.bs(b8.save())
b8.rotate((c1.y+l*2.094)*180/3.141592653589793,0,0)
w=B.c1(H.aP7,15,7)
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.r=A.cX.j(0.9).gp(0)
c0.c3(w,v)
b8.restore()}w=B.L()
w.r=A.ax.gp(0)
c0.O(A.J,3,w)
b8.restore()
b2.lP(c0,"M",D.eIM,A.ax,14)
break
case"buzzer":a8=B.c1(A.J,42,42)
b8=B.L()
b8.san(D.eSu.az(0,a8))
c0.c3(a8,b8)
b8=B.L()
b8.r=A.v.gp(0)
c0.O(A.J,6,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.aT.gp(0)
c0.O(A.J,6,b8)
b2.lP(c0,"+",D.eIF,A.ab,12)
for(b8=b2.b,l=1;l<=3;++l){w=c1.fx
v=w>0?A.h.F(b8.d*14,5):0
v=B.c0(A.J,24+l*5+v)
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.b=A.ae
m.c=2
m.r=A.c6.j(w*(1-l*0.22)).gp(0)
c0.cR(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bx(D.fvi,A.iE)
w=B.L()
w.san(D.cdE.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,w)
w=B.a([],x.v)
a9=new B.aJ(b8.r,A.ak,b3,b3,w)
a9.E(new B.b_(-24,0))
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
w.r=D.brD.j(0.5*b8).gp(0)
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
w.san(D.aw2.az(0,a7))
c0.aq(b8,w)
w=B.L()
w.r=A.bP.gp(0)
c0.aE(D.fuX,w)
for(p=0;p<4;++p)b2.lP(c0,"\u2212",new B.m(-14,-18+p*9),A.ax,11)
b0=new B.a5(-16,-24,16,-17)
c0.aq(B.bx(b0,A.hu),b2.cbr(b0,!1))
b8=38*c1.fx
w=18-b8
$.U()
v=B.L()
v.r=A.bf.j(0.5).gp(0)
c0.aE(new B.a5(-3,w,11,w+b8),v)
b2.lP(c0,"1F",H.wf,A.c,11)
break
case"radio":a1=B.bx(D.abV,A.h5)
b8=B.L()
b8.san(D.cgm.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.nQ.j(0.6).gp(0)
c0.aq(a1,b8)
b8=B.bx(D.fvj,A.jL)
w=B.L()
w.r=A.e7.gp(0)
c0.aq(b8,w)
for(p=0;p<6;++p){b8=-10+p*4.4
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=A.mq.gp(0)
w.c=1.4
c0.ah(new B.m(-27,b8),new B.m(-3,b8),w)}b8=B.L()
b8.r=(c1.fx>0?A.hb:A.oM).gp(0)
c0.aE(D.ful,b8)
if(c1.fx>0){b8=8+A.h.F(b2.b.d*7,18)
w=B.L()
w.r=A.bC.gp(0)
w.c=1.6
c0.ah(new B.m(b8,-13),new B.m(b8,-3),w)}b8=B.L()
b8.san(D.aUE.az(0,B.c0(D.aaR,6)))
c0.O(D.aaR,6,b8)
b8=B.L()
b8.r=A.nQ.gp(0)
c0.O(D.eG_,4,b8)
b8=B.L()
b8.r=A.dW.gp(0)
b8.c=1.8
c0.ah(D.eFV,D.aPr,b8)
if(c1.fx>0)for(b8=b2.b,l=1;l<=2;++l){w=B.c0(D.aPr,4+l*5+A.h.F(b8.d*8,5))
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.b=A.ae
v.c=1.4
v.r=A.oT.j(0.7).gp(0)
c0.cR(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bx(D.fvt,A.iE)
v=B.L()
v.r=M.nl.gp(0)
c0.aq(w,v)
b1=B.bx(D.fvq,A.hu)
if(c1.fx>0&&!c1.x){b8=c0.c
J.bs(b8.save())
b8.clipRRect(B.nn(b1),$.n_(),!0)
b8.translate(-33,-21)
K.h9Z(c0,D.fCk,c1.at,b2.b.d,c1.ax,-1,b3,b3)
b8.restore()
b8=B.L()
b8.r=A.bf.gp(0)
c0.O(D.eGb,1.6,b8)}else{w=B.L()
w.r=D.x3.gp(0)
c0.aq(b1,w)
b8=new B.aJ(b8.r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.b_(-33,-21))
b8.E(new B.aq(-10,-21))
b8.E(new B.aq(-33,0))
b8.E(new B.bz())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c0.af(b8,w)}b8=B.L()
b8.r=A.bz.gp(0)
c0.aE(D.fuM,b8)
break}C.iJS(c0,c1,b2.b.d,b2.gcg7())
if(t)b2.lP(c0,"\u2716",D.eJl,A.aC,14)
if(s)c0.c.restore()},
aTY(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.bNT(),n=e.d,m=e.b,l=n-m,k=e.a,j=m+l*0.06,i=k+l*0.16,h=new B.a5(k,j,i,j+l*0.88)
j=l*0.08
k=B.bx(h,new B.aQ(j,j))
$.U()
w=B.L()
w.san(o.$2(h,D.dkp))
d.aq(k,w)
i-=0.5
w=l*0.2
k=e.c-w
v=new B.a5(i,m,k,n)
u=k-i
t=i+u*0.66
s=B.L()
s.san(o.$2(v,D.dJO))
d.aE(new B.a5(i,m,t,n),s)
s=B.L()
s.san(o.$2(v,D.diw))
d.aE(new B.a5(t,m,k,n),s)
k-=0.5
s=m+j
n=l*0.12
r=k+n
q=new B.a5(k,s,r,s+l*0.84)
s=B.L()
s.san(o.$2(q,D.aFv))
d.aE(q,s)
r-=0.5
s=m+l*0.3
p=new B.a5(r,s,r+l*0.1,s+l*0.4)
s=l*0.05
s=B.bx(p,new B.aQ(s,s))
r=B.L()
r.san(o.$2(p,D.aFv))
d.aq(s,r)
r=i+2
s=m+l*0.18
o=B.L()
o.r=A.c.j(0.18).gp(0)
d.aE(new B.a5(r,s,r+(u-4),s+j),o)
if(f){o=l*0.42
this.lP(d,"+",new B.m(t+u*0.08,m+n),A.dl,o)
if(g!=null)this.lP(d,g,new B.m(i+u*0.12,m+w),A.bP,o)}},
bN6(d,e,f){return this.aTY(d,e,!0,f)},
bN5(d,e,f){return this.aTY(d,e,f,null)},
bK1(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a6.e,a4=B.v(a3===A.h.bg(a3)?A.h.S(a3):a3)+"V"
if(a3<=2){a2.bN6(a5,D.fvh,a4)
a2.lP(a5,"\u2212",D.eIW,A.ab,12)
a2.lP(a5,"+",D.eFQ,A.aQ,12)
$.U()
w=B.L()
w.r=A.by.gp(0)
a5.aE(D.fv5,w)
w=a6.as
v=B.L()
v.r=B.ap(A.aC,A.bf,w).gp(0)
a5.aE(new B.a5(-22,15,-22+44*w,19),v)
if(a6.as<=0.02)a2.lP(a5,"FLAT",D.eIs,A.c3,9)}else if(a3<=4.5){u=a3>3?3:2
t=u*13+6
w=-t/2
v=w+t
s=new B.a5(-31,w,31,v)
r=B.bx(s,A.jL)
$.U()
q=B.L()
q.san(D.cfM.az(0,s))
a5.aq(r,q)
for(r=w+3,p=0;p<u;++p){q=r+p*13
a2.bN5(a5,new B.a5(-27,q,25,q+11.5),!1)}for(q=r+(t-6),o=0;o<2;++o){n=D.diq[o]
$.U()
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=A.dW.gp(0)
a5.aE(new B.a5(n,r,n+1.6,q),m)}a2.lP(a5,a4,new B.m(-9,v+1),A.aQ,10)
a2.lP(a5,"+",new B.m(25,w-13),A.aQ,11)}else if(a3<=9){l=new B.a5(-18,-16,18,18)
w=B.bx(l,A.hu)
v=$.U()
r=B.L()
r.san(D.cg3.az(0,l))
a5.aq(w,r)
k=new B.a5(-18,-4,18,18)
r=B.rl(k,A.hu,A.hu,A.bJ,A.bJ)
w=B.L()
w.san(D.aw2.az(0,k))
a5.aq(r,w)
j=new B.a5(-18,-16,18,-11)
w=B.rl(j,A.bJ,A.bJ,A.hu,A.hu)
r=B.L()
r.san(D.cgu.az(0,j))
a5.aq(w,r)
i=B.L()
i.san(D.eSK.az(0,D.fuQ))
a5.O(D.aPM,4,i)
r=B.a([],x.v)
h=new B.aJ(v.r,A.ak,null,null,r)
for(g=0;g<6;++g){f=g*3.141592653589793/3
w=7+Math.cos(f)*5
v=-19+Math.sin(f)*5
if(g===0){w=new B.b_(w,v)
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
a5.O(D.eH0,2,w)
a2.lP(a5,"9V",D.eJo,A.c,13)
a2.lP(a5,"+",D.eIo,A.aQ,11)}else{e=new B.a5(-34,-12,34,18)
w=B.bx(e,A.hu)
$.U()
v=B.L()
v.san(D.cdz.az(0,e))
a5.aq(w,v)
d=new B.a5(-36,-18,36,-10)
v=B.bx(d,D.eSS)
w=B.L()
w.san(D.awj.az(0,d))
a5.aq(v,w)
for(g=0;g<6;++g){w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=A.ax.gp(0)
a5.O(new B.m(-14+g*5.6,-14),1.6,w)}w=B.L()
w.r=A.bu.j(0.92).gp(0)
a5.aE(D.fvr,w)
for(o=0;o<2;++o){w=D.cIO[o]
n=w.a
a0=w.b
a1=B.c1(new B.m(n,-21),7,8)
w=B.bx(a1,A.FA)
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.san(D.ce7.az(0,a1))
a5.aq(w,v)
v=B.bx(B.c1(new B.m(n,-24),3.5,9),A.FA)
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=a0.gp(a0)
a5.aq(v,w)}a2.lP(a5,"\u2212",D.eIX,A.ab,11)
a2.lP(a5,"+",D.eFL,A.aC,11)
a2.lP(a5,"12V",H.aPG,A.ax,11)}},
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
n=new C.ul(o,r,q,p)
n.aun(o,r,q,p)
k.push(n)
J.ij(s[4],new C.cy_(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.aoh(m,u[1],l,u[3])}}}
C.alC.prototype={
R(){var w=x.N
return new C.alD(B.c3(2000,1,1,0,0,0,0,0),A.J,A.aA,B.S(w,x.gl),B.aR(w),$,A.bI,0,B.a([],x.X),null,null)}}
C.alD.prototype={
ahn(d){var w=this,v=w.ch
if(v!=null)v.a2(0)
w.l(new C.bNw(w,d))
w.ch=B.cD(A.mx,new C.bNx(w))},
t(){var w=this.ch
if(w!=null)w.a2(0)
w=this.db
if(w!=null)w.a2(0)
this.bzy()},
a2E(d,e){return this.cp0(d,e)},
b6u(d){return this.a2E(d,!1)},
cp0(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a2E=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.o7:A.zv
p=d.b
w=3
return B.b(K.hxi(s,r,p,d.ax<3.2,q,$.r1().h(0,p).b),$async$a2E)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a2E,v)},
cC8(d){var w=this,v=new B.W(Date.now(),0,!1),u=w.CW.c0(0,d.a,new C.bNy()),t=J.cK(u)
t.K(u,v)
t.bs(u,new C.bNz(v))
if(t.gI(u)>=4){t.a7(u)
t=w.db
if(t!=null)t.a2(0)
w.a40(d)
return}if(t.gI(u)===3){t=w.db
if(t!=null)t.a2(0)
w.db=B.cD(A.j5,new C.bNA(w,u,d))}},
a2i(d){return this.cnf(d)},
cnf(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2i=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iL9(s,d.b,A.h.S(A.h.F(t.a.c.d*0.12,1)*100)),$async$a2i)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a2i,v)},
a40(d){return this.czB(d)},
czB(d){var w=0,v=B.j(x.H),u=this,t
var $async$a40=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bNu(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a40)
case 2:return B.h(null,v)}})
return B.i($async$a40,v)},
Z(){this.a4()
this.blH()
this.mA()},
blH(){this.a.c.e=new C.bNQ(this)},
mT(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.wf(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mO.h(0,s.b)
if((r==null?null:r.b)!==D.Bw)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.K(0,s.a)
q.a2E(s,!0)}}else u.X(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
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
q.l(new C.bNR())},
bdG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.at
l=p.c
k=n===0?-1:1
j=D.mO.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b79(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dn<1>"),w=new B.dn(w,v),w=new B.bQ(w,w.gI(0),v.k("bQ<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.A();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mO.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cPq(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.a
n=this.at
m=o.c
l=p.b===0?-1:1
k=D.mO.am(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.at
m=o.c
j=p.d===0?-1:1
i=D.mO.am(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hX5(new B.m(k,n),new B.m(i,l),p)
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
ahl(){this.a.toString
this.l(new C.bMW())},
bwb(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dma[v]
if(!A.d.aR(p.a.c.a,new C.bNS(u,w))){o=new B.m(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A3.Bl:o
s=s?A3.Bl:o
q=t.ans(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dI(1200,"",50,0,0.3,"tri")
p.ahl()},
C(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Ud[v].a)
u=w.length
t=u>8
s=t?A.d.dw(w,0,A.n.ao(u+1,2)):w
r=t?A.d.fG(w,A.n.ao(w.length+1,2)):A.M
q=n.a.d
if(q!=null){w=B.a3(q).k("cv<1>")
w=B.B(new B.cv(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b6Z(s,!0))
n.a.toString
if(t)w.push(n.b6Z(r,!0))
w.push(B.E(B.cg(new C.bNP(n,q)),1))
return B.w(w,A.l,null,A.e,A.i,0,A.p)},
b6Z(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.r1()
s=t.h(0,u).d.j(0.14)
r=new B.aQ(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.q(p,B.w(B.a([B.c(t.h(0,u).c,p,p,p,p,p,p,A.ym,p,p,p),B.c(t.h(0,u).b,p,1,A.a2,p,p,p,A.oy,p,p,p)],n),A.l,p,A.bc,A.i,0,A.p),A.f,p,p,new B.p(s,p,new B.bE(q,q,q,q),new B.bc(r,r,r,r),p,p,A.m),p,p,p,L.p1,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMX(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.cj(m,p,p,A.hp,p,p,A.aJ,!1),A.f,p,p,new B.p(L.CP,p,new B.bE(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.m),p,58,p,p,p,p,p,p)},
crc(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.r1().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bNi(e,a1)
t=new C.bNh()
s=B.n(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.ac(0,A.G,r.j(0.18),A.cy,16)],x.V)
o=r.j(0.18)
n=B.n(10)
n=B.q(A.z,B.c(a1.c,d,d,d,d,d,d,A.ym,d,d,d),A.f,d,d,new B.p(o,d,d,n,d,d,A.m),d,34,d,d,d,d,d,34)
o=B.E(B.c(a1.b,d,1,A.a2,d,d,d,B.l(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.n(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.aa,o,B.aA(d,B.q(d,B.c(e.f?"Less":"About",d,d,d,d,d,d,A.Xp,d,d,d),A.f,d,d,new B.p(d,d,l,m,d,d,A.m),d,d,d,d,A.od,d,d,d),A.y,!1,D.hQl,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bN3(e),d,d,d,d,d,d,!1,A.a4),B.aI(d,d,d,d,D.c7Z,d,d,d,new C.bN4(e,a2),d,d,d,d,"Remove part",A.cp),B.aI(d,d,d,d,Ad.Eg,d,d,d,new C.bN5(e),d,d,d,d,d,A.cp)],k),A.l,d,A.e,A.i,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.c(a1.e,d,d,d,d,d,d,A.LL,d,d,d),A.cR,B.c("How it is made: "+a1.f,d,d,d,d,d,d,U.aZu,d,d,d)],k))
m.push(A.aj)
if(a2.x)m.push(D.h4A)
else m.push(new B.C(A.eX,B.A(B.a([t.$2(A.h.a1(Math.abs(a2.dy),2),"VOLTS"),A.b6,t.$2(A.h.a1(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.b6,t.$2(A.h.a1(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.i,0,d,d),d))
j=e.a.c.bjy(a2)
if(j!=null){a1=(a2.x?A.aC:A.as).j(0.14)
w=B.n(10)
v=B.K((a2.x?A.aC:A.as).j(0.5),A.r,1)
m.push(new B.C(A.hB,B.q(d,B.c((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.h0n,d,d,d),A.f,d,d,new B.p(a1,d,v,w,d,d,A.m),d,d,d,d,A.ct,d,d,d),d))}if(C.huD(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.C(A.eX,new E.e6("CH "+h,a2.at===i,new C.bN9(e,a2,i),d,r,d),d))}a1=B.cb(B.A(a1,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aJ)
if(e.a.c.rR(a2)){w=F.U1[A.n.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.aj,a1,A.at,B.c(w,d,e.f?4:1,A.a2,d,d,d,N.hJ,d,d,d)],k)
if(e.a.c.rR(a2))a1.push(new E.fO(A.xx,"Open big screen",new C.bNa(e,a2),r,d))
A.d.u(m,a1)}if(D.mO.am(0,a0)&&!C.huD(a0)){a1=B.a([A.aj],k)
if(e.f||!e.a.c.rR(a2))a1.push(B.c(e.a.c.rR(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,N.hJ,d,d,d))
if(e.a.c.rR(a2))a1.push(new E.fO(A.Rj,"Open the "+$.r1().h(0,a0).b,new C.bNb(e,a2),r,d))
A.d.u(m,a1)}if(D.mO.am(0,a0))A.d.u(m,B.a([A.aj,new E.fO(A.E2,"Make it bigger (or tap it 4 times)",new C.bNc(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.h.a1(a2.db,1)
if(e.a.c.rR(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.aj,B.c("Volts in: "+w+" V   \u2192   Volts out: "+A.h.a1(v,1)+" V",d,d,d,d,d,d,D.fVa,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dGC[g]
w=f===A.h.bg(f)?A.h.S(f):f
a1.push(new E.e6(B.v(w)+" V out",a2.e===f,new C.bNd(e,a2,f),d,r,d))}v.push(new B.C(A.kP,B.bX(A.bG,a1,A.bq,d,0,6),d))}if(a0==="regulator")v.push(D.hjQ)
A.d.u(m,v)}if(e.a.c.NA(a2)&&!a2.x){a1=A.h.a1(a2.cx,2)
w=A.h.a1(e.a.c.B2(a2),2)
v=e.a.c
o=v.ar4(a2)?"   \u26a0 OVERLOADED":""
a1=B.c("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.l(d,d,v.ar4(a2)?A.c3:A.ej,d,d,d,d,d,d,d,d,12.5,d,d,A.C,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.n(4)
o=A.h.D(a2.cx/e.a.c.B2(a2),0,1)
v=e.a.c.ar4(a2)?A.aC:A.bf
m.push(new B.C(A.hB,B.w(B.a([a1,A.cR,B.bv(w,B.jK(A.by,d,d,5,d,o,new B.le(v,x.c)),A.ap)],k),A.B,d,A.e,A.i,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.h.S(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.C(A.hB,B.c("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fOy,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dua[g]
w=f===1.5?"1.5 V (rechargeable)":B.v(f)+" V"
a1.push(new E.e6(w,a2.e===f,new C.bNe(e,a2,f),d,r,d))}m.push(B.bX(A.bG,a1,A.bq,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.diU[g]
w=f>=1000?"1 k\u03a9":""+A.n.S(f)+" \u03a9"
a1.push(new E.e6(w,a2.r===f,new C.bNf(e,a2,f),d,r,d))}m.push(B.bX(A.bG,a1,A.bq,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bNg(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bN6(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bN7(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bN8(a2)))
if(a0==="crank")m.push(D.hf0)
if(a0==="switch")m.push(B.c(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,N.hJ,d,d,d))
return B.q(d,new B.cR(D.bb1,B.cb(B.w(m,A.B,d,A.e,A.P,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.p(F.a_5,d,q,s,p,d,A.m),d,d,D.hPq,d,D.bHY,d,d,d)}}
C.bg0.prototype={}
C.Xe.prototype={
R(){return new C.aHc(C.hAS(),new B.cB(null,x.gJ),B.aR(x.S))}}
C.aHc.prototype={
Z(){this.a4()
$.aS.cT$.push(this)
this.ahm()},
ahm(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fWW(),$async$ahm)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iKg(t.d,r)
if(s!=null){t.l(new C.e7Q(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$ahm,v)},
Gu(){var w,v=this
if(!v.as)return
w=C.iA2(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bK1(w)},
ji(d){if(d!==A.fY)this.Gu()},
t(){$.aS.hR(this)
this.Gu()
this.a3()},
cg9(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("X<1>")
t=new B.X(v,new C.e7Z(q),u).gI(0)
s=new B.X(v,new C.e8_(),u).gI(0)
r=new B.X(v,w.gd47(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.l(new C.e80(q,t,s,r))}if(A.n.F(q.w,45)===0)q.Gu()
if(A.n.F(q.w,10)===0){w=q.f
$.akH()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.akH()[q.f].c.$1(q.d)){w.K(0,q.f)
C.Kg("bell",B.a([0,4,7,12],x.t),700,0.45)
q.l(new C.e81())
q.Gu()
w=q.c
w.toString
w=B.KJ(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.c("\u2705 Challenge done: "+$.akH()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mv,p,p,p,p,p,p,p,p,p,p))}},
akh(){var w=0,v=B.j(x.H),u=this,t
var $async$akh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.e7P(u),t,null,!0,!0,x.H),$async$akh)
case 2:return B.h(null,v)}})
return B.i($async$akh,v)},
b47(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.q(w,B.V(d,f,w,w,w,18),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.fU(new B.a4(40,38,new B.am(A.a0,w,A.ac,A.f,u,w),w),w,e,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b46(d,e,f,g){return this.b47(d,e,f,g,null)},
av4(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.q(w,B.A(B.a([B.V(d,f,w,w,w,15),A.dU,new B.d_(1,A.c9,B.c(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.bc,A.i,0,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
aiz(){var w=0,v=B.j(x.H),u=this,t
var $async$aiz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a7(t,!1).ca(B.e4(new C.e7L(u),!1,null,x.H)),$async$aiz)
case 2:t=u.e.gbn()
if(t!=null)t.blH()
if(u.c!=null)u.l(new C.e7M())
u.Gu()
return B.h(null,v)}})
return B.i($async$aiz,v)},
bNd(){var w,v,u,t,s=null,r=this.f
$.akH()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bh:A.aC
u=B.n(9)
t=B.K(L.CP,A.r,1.5)
return B.q(s,B.at(B.c(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.yq,s,s,s),s,s,s),A.f,s,D.baS,new B.p(r,s,t,u,s,s,A.m),s,s,s,s,A.fd,s,s,s)},
alq(){var w=0,v=B.j(x.H),u=this,t
var $async$alq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.nj,null,new C.e7Y(u),t,!0,!0,!0,A.kA,!1,!1,x.H),$async$alq)
case 2:return B.h(null,v)}})
return B.i($async$alq,v)},
cga(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.q(r,D.c4w,A.f,r,r,new B.p(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e83(d),r,r,r,r,r,r,!1,A.a4),o=B.n(11)
o=B.q(r,D.bgR,A.f,r,r,new B.p(A.bt,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.m),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.w(B.a([B.A(B.a([p,A.aa,o,A.aa,B.E(B.w(B.a([D.hhJ,B.c(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f1:A.hn,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.B,r,A.e,A.i,0,A.p),1),new C.aB2(s.gcmY(),r),A.ux,s.b46(A.rw,"Construction Lab: real 3D wiring, plumbing and a house",A.cX,new C.e84(s,d)),s.b47(A.m8,"Challenges",A.aQ,s.gcEP(),s.bNd()),s.b46(A.DY,"How to play",A.aH,new C.e85(d,e))],v),A.l,r,A.e,A.i,0,r,r),A.aj,B.A(B.a([s.av4(A.og,"Circuits",A.bk,s.gcxs()),A.b6,s.av4(A.p6,"Repair",A.aQ,new C.e86(s)),A.b6,s.av4(I.xv,"Clear",A.c3,new C.e87(s))],v),A.l,r,A.e,A.i,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.p(L.CP,r,new B.bE(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.m),r,r,r,r,D.bN7,r,r,r)},
C(d){var w=this,v=null
$.avq="tech"
return B.c6(v,A.c8,B.bm(!0,B.w(B.a([w.cga(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hzI(w.d,w.e,w.gcg8(),v),1)],x.p),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.aB2.prototype={
R(){return new C.be4(null,null)}}
C.be4.prototype={
gaBs(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.Z,null,1,null,v)
w.cU(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaBs().t()
this.bAU()},
C(d){var w=null,v=this.a.c
return B.aA(w,B.fU(new B.a4(42,42,B.ca(this.gaBs(),new C.cPP(this),w),w),w,"AI Inventor: say what you want to make",w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.be3.prototype={
a5(d,e){var w,v,u,t=null,s=e.ep(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.U()
w=B.L()
w.r=A.b2.j(0.25+0.15*o).gp(0)
w.y=O.p2
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eSp.az(0,B.c0(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.ae
v.c=2.2
v.san(new B.hg(A.z,0,6.283185307179586,A.w,D.d8g,t,new B.n7(p)).az(0,B.c0(s,r)))
d.O(s,r,v)
p=new C.cPO(d)
p.$3(s.a6(0,A.um),8+o*1.5,1)
q*=4
p.$3(s.a6(0,D.eH7),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a6(0,D.eJs),2.6,0.5+0.5*Math.cos(q))
u=B.h2(t,A.cK,t,t,t,D.fKQ,A.a8,A.cb,t,A.e6,A.cc)
u.eL()
u.a5(d,s.a6(0,new B.m(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.aBn.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.aBo.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bzx()}}
C.aNW.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bD3.prototype={}
C.h9.prototype={}
C.KK.prototype={
a9(){return"ScreenStyle."+this.b}}
C.mv.prototype={}
C.WY.prototype={
R(){return new C.aH2(A3.Bl,null,null)}}
C.aH2.prototype={
gaco(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.p0,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gad7(){var w=D.mO.h(0,this.a.c)
return w==null?D.aVM:w},
t(){if(this.f){P.Dl(Y.LE)
P.bIs()}this.gaco().t()
this.bCM()},
gCr(){var w=this.gaco().y
w=w==null?null:A.n.ao(w.a,1000)
return(w==null?0:w)/1000},
Pa(){var w,v=this,u=v.e
if(u==null)return null
w=F.iz[u].e
if(w===-2)return null
if(w===-1)return A.n.F(v.y+A.h.ba(Math.max(0,v.gCr()-v.z)/10),14)
return w},
KV(d){this.l(new C.e3M(this,d))},
b7v(d){this.l(new C.e3N(this,d,14))},
aFw(d){var w=this.Pa()
if(w==null)w=d>0?-1:0
return this.b7v(w+d)},
cJU(d,e){if(e.a<=0||e.b<=0||this.Pa()==null)return
this.l(new C.e3X(this,d,e))},
afj(){return this.c8d()},
c8d(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$afj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.Pa()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bU(A.L,null,new C.e3L(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$afj)
case 3:if(t.c!=null&&r.a)t.b7v(q)
case 1:return B.h(u,v)}})
return B.i($async$afj,v)},
cLs(){var w=this,v=!w.f
w.l(new C.e3Y(w,v))
if(v){P.Dl(Y.ad3)
P.hvw(w.gad7().b===D.y7)}else{P.Dl(Y.LE)
P.bIs()}},
cgd(){var w,v=this
if(!v.f)return
B.jJ()
v.l(new C.e3Z(v))
w=v.c.M(x.q).f
w.No()
if(v.r)w.T(F.aXU)},
aSj(d){return B.cg(new C.e3E(this,d))},
cqB(d){var w,v=this,u=null,t=v.gCr(),s=t-v.w,r=s<1.4?new K.b1A(v.x,s):u
if(F.iz[d].e===-1){w=Math.max(0,t-v.z)
return new C.ahh(d,w,r,A.n.F(v.y+A.h.ba(w/10),14),u)}return new C.ahh(d,t,r,u,u)},
b11(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.C(new B.R(u,0,u,0),B.A(B.a([B.V(A.kR,A.ax,w,w,w,d*0.6),new B.a4(d*0.18,w,w,w),B.c("Learn more",w,w,w,w,w,w,B.l(w,w,A.ax,w,w,w,w,w,w,w,w,d*0.48,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,w,w),w),A.nD,!0,w,w,w,w,D.hPs,w,w,w,w,w,w,this.gc8c(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.nD,w,w,A.ai)},
b48(d,e,f,g){var w=null,v=B.nu(w,A.ba,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cgc(d,e,f){return this.b48(d,e,f,null)},
cyL(){var w=this,v=null,u=new C.e3V(),t=A.v.j(0.72),s=B.n(22),r=B.K(w.gad7().d.j(0.5),A.r,1),q=u.$3(D.bXK,"AD \u2212",new C.e3R(w)),p=u.$3(A.atr,"AD +",new C.e3S(w)),o=u.$5$color$on(A.kQ,"HOME",new C.e3T(w),w.gad7().d,w.e==null),n=w.e
n=n!=null&&F.iz[n].e===-1
return B.q(v,B.A(B.a([q,p,o,u.$5$color$on(A.Aa,"ADS",new C.e3U(w),A.c6,n)],x.p),A.l,v,A.e,A.P,0,v,v),A.f,v,v,new B.p(t,v,r,s,v,v,A.m),v,v,D.hPy,v,A.I7,v,v,v)},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gad7(),l=o.f,k=!l||!o.r
l=l?B.aE(d,A.dL,x.w).w.r.b+26:8
w=o.cgc(A.cD,"Back to the board",new C.e4_(d))
v=o.f
u=v?Ap.IE:A.xx
v=v?"Leave full screen":"Full screen"
v=o.b48(u,v,o.gbe9(),D.hQy)
u=B.n(20)
t=o.e
s=m.a
r=x.p
q=new B.C(new B.R(8,l,8,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bH(A.a9,n,n,B.q(n,B.c(t==null?s:s+" \xb7 "+F.iz[t].a,n,1,A.a2,n,n,n,Ar.yg,n,n,n),A.f,n,n,new B.p(A.ba,n,n,u,n,n,A.m),n,n,n,n,A.lF,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,n,n),n)
p=m.b===D.y7?o.bPn(m):o.cu7(m)
l=o.f
w=!l
v=l?o.gb49():n
if(l){l=B.at(p,n,n,n)
u=k?1:0
r=new B.am(A.a0,n,A.b7,A.t,B.a([l,B.ao(n,B.xU(new B.dp(!k,q,n),A.b1,A.ig,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.w(B.a([q,A.aj,o.cyL(),B.E(new B.C(A.cA,B.at(p,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,A.p)
return B.c6(n,A4.a0J,B.bm(w,B.aA(A.c0,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
cgb(d){var w
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
cu7(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.ac3
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.ca(p.gaco(),new C.e3Q(p,w,d,m),o)
if(n===D.ac4)v=new B.C3(D.bNM,v,o)
n=p.cgb(n)
u=p.f?A.hD:Au.a2c
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.v,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.n(w)
r=B.a([new B.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fD(n,B.q(o,B.q(o,v,A.f,o,o,new B.p(A.v,o,o,B.n(w-3),o,o,A.m),o,o,o,o,A7.I8,o,o,o),A.f,o,o,new B.p(o,o,o,s,r,new B.a6(A.aw,A.aD,A.w,q,o,o),A.m),o,o,o,u,new B.R(t,t,t,t),o,o,o),o)},
bcM(d){var w=Date.now(),v=A.n.D(this.a.d+A.h.ba(this.gCr()*0.4),0,100),u=d.b===D.ac3,t=u?34:20,s=u?28:18
return new B.C(new B.R(t,12,s,2),B.cg(new C.e3W(new B.W(w,0,!1),v)),null)},
azg(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.v,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.q(v,B.at(B.c(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.p(v,v,v,u,D.dAZ,new B.a6(A.aw,A.aD,A.w,t,v,v),A.m),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.at,B.c(d.a,v,1,A.a2,v,v,v,D.fRB,v,v,v)],w))
return B.aA(v,B.w(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e3J(this,d),v,v,v,v,v,v,!1,A.a4)},
c63(d,e){return this.azg(d,e,!0)},
c5L(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aVN||o===D.By,m=d.d,l=B.ap(m,A.v,0.55)
l.toString
m=B.ap(m,A.kc,0.5)
m.toString
m=B.a([l,A.dD,m],x.O)
l=q.bcM(d)
w=n?190:138
v=B.n(24)
u=B.K(A.aT,A.r,1)
w=B.aA(p,B.q(p,B.bv(B.n(23),B.b4(p,p,p,new C.ahh(0,q.gCr(),p,p,p),A.hi),A.ap),A.f,p,p,new B.p(p,p,u,v,p,p,A.m),p,w,p,A.ih,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e3H(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.iz[s]
t.push(new B.cp(A.z,p,p,new B.d7(A.dn,A.z,A.f,q.c63(r,n?58:54),p),p))}l=B.a([l,A.aj,w,A.af,B.E(B.lj(0.92,t,v,8,12,A.vp,p,!1),1)],u)
if(o!==D.ac4){o=A.c.j(0.16)
w=B.n(28)
l.push(B.q(p,B.cg(new C.e3I(q)),A.f,p,p,new B.p(o,p,p,w,p,p,A.m),p,p,p,D.bI7,H.aqc,p,p,p))}return B.q(p,B.w(l,A.l,p,A.e,A.i,0,A.p),A.f,p,p,new B.p(p,p,p,p,p,new B.a6(A.aw,A.aD,A.w,m,p,p),A.m),p,p,p,p,p,p,p,p)},
bIC(d,e){var w=this,v=null,u=w.Pa(),t=w.bcM(d),s=B.E(w.aSj(e),1),r=x.p,q=B.a([B.bS(0,B.aA(v,B.q(v,B.at(B.c(F.iz[e].a,v,v,v,v,v,v,A.LO,v,v,v),v,v,v),A.f,A.v,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e3B(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.b11(22),v,v,v,10,8,v))
return B.q(v,B.w(B.a([t,s,new B.a4(v,38,new B.am(A.a0,v,A.ac,A.t,q,v),v)],r),A.l,v,A.e,A.i,0,A.p),A.f,A.v,v,v,v,v,v,v,v,v,v,v)},
aVm(d,e){return B.ca(this.gaco(),new C.e3G(this,e,d),null)},
bPn(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qJ(t.aVm(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(q?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fD(1.5384615384615383,B.q(s,B.bv(B.n(q?20:8),t.aVm(d,q),A.ap),A.f,s,s,new B.p(s,s,s,v,u,new B.a6(A.aw,A.aD,A.w,w,s,s),A.m),s,s,s,A.aq6,new B.R(8,8,8,r),s,s,s),s)}}
C.bB4.prototype={
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
t.y=D.bNR
d.O(new B.m(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.ahh.prototype={
a5(d,e){var w=this
return K.MN(d,e,w.b,w.c,w.e,w.d)},
aD(d){return!0}}
C.aPK.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bzR.prototype={}
C.aaP.prototype={
C(d){var w=null
return B.c6(B.eR(w,w,w,!0,!0,D.akY,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,I.av_,w,w,w,new C.cqT(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hqX,w,w,w,1,w,!0),D.akY,B.cj(B.a([D.eKZ,B.cg(new C.cqU())],x.p),w,w,D.bJd,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.YE.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aIM(w,new B.au(A.ay,$.ay()),$,A.bI,0,B.a([],x.X),null,null)}}
C.aIM.prototype={
Z(){this.a4()
this.mA()},
baC(d){var w=this.d.length
return A.n.F(A.h.ba(A.h.F(A.h.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mT(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.baC(v.f)
if(w!==v.x){v.x=w
E.mR("bell",24+A.n.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.l(new C.f4H(v))
C.Kg("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cib(){if(this.d.length<2)return
this.l(new C.f4D(this))},
b4N(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.l(new C.f4C(w,v))},
C(d){var w,v,u,t,s=this,r=null,q=s.gcia(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bBh(p,s.f,r),A.hi),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.w(B.a([o,new B.a4(r,40,B.at(B.c(n,r,r,r,r,r,r,D.fZK,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aEX[A.n.F(v,8)].j(0.9)
t=new B.aQ(20,20)
o.push(B.aA(r,B.q(r,B.c(p[v],r,r,r,r,r,r,D.fYW,r,r,r),A.f,r,r,new B.p(u,r,r,new B.bc(t,t,t,t),r,r,A.m),r,r,r,A.eX,A.h1,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.f4F(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.m3(A.aQ,A.fh,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.w(B.a([new E.fm(o,r,r),B.A(B.a([B.E(B.aO(r,A.M,!1,r,!0,A.t,r,B.aP(),s.e,r,r,r,r,r,2,B.bB(r,new B.b5(4,B.n(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.jP,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.am,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.f4G(s),r,!1,r,r,!1,r,!0,r,A.ad,r,r,r,r,r,r,r,r,r,r,r,A.du,!0,A.a8,r,A.ao,r,r,r,r),1),A.aa,new E.fO(A.ii,"Add",s.gci8(s),A.c,r),A.b6,new E.fO(A.of,"Spin",q,A.bf,r)],w),A.l,r,A.e,A.i,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.bBh.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.m(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.U()
w=B.L()
w.r=D.bng.gp(0)
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
o.r=D.aEX[A.n.F(r,8)].gp(0)
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
n=new B.iU(new B.eG(p,l,l,A.cV,l,l,l,l,l,l,D.fLF),A.a8,A.cb,new B.k3(1),l,l,l,l,A.cc,l,A.cK)
n.eL()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.m(f-o-16,-p.gb4(p)/2))
i.restore()}i=B.L()
i.r=D.akz.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.ae
i.c=3
i.r=A.aQ.gp(0)
d.O(g,20,i)
m=new B.aJ(k.r,A.ak,l,l,B.a([],x.v))
h-=f
m.E(new B.b_(j,h+26))
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
h.r=A.ba.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.Xm.prototype={
R(){return new C.bp3($,A.bI,0,B.a([],x.X),null,null)}}
C.bp3.prototype={
Z(){this.a4()
this.mA()},
mT(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.Kg("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.W1(900,new C.eby())}w.l(new C.ebz())},
b4P(d){return this.l(new C.ebt(this,d))},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aY(A.n.v(A.h.ao(m,60)),2,"0")
v=A.a.aY(A.n.v(A.n.F(A.h.cB(m),60)),2,"0")
m=B.b4(n,n,n,new C.bvS(l,A.c3,n),A.aXi)
u=B.c(w+":"+v,n,n,n,n,n,n,D.fQw,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a4(280,280,new B.am(A.z,n,A.ac,A.t,B.a([m,B.w(B.a([u,B.c(t,n,n,n,n,n,n,D.fPo,n,n,n),A.at,B.c("Sessions done: "+o.r,n,n,n,n,n,n,A.wq,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dxu[r]
u.push(new E.e6(""+q+" min",o.d===q,new C.ebv(o,q),n,A.c3,n))}m=o.f
p=m?Ab.vJ:A.fR
m=m?"Pause":"Start"
return E.m3(A.c3,A.fh,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.w(B.a([new E.fm(u,n,n),new E.fm(B.a([new E.fO(p,m,new C.ebw(o),A.bf,n),new E.fO(A.mF,"Reset",new C.ebx(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.bvS.prototype={
a5(d,e){var w,v,u,t,s=e.ep(A.J),r=e.a/2-14
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
C.Wx.prototype={
R(){return new C.boC($,A.bI,0,B.a([],x.X),null,null)}}
C.boC.prototype={
Z(){this.a4()
this.mA()},
mT(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.UW.h(0,p.d)
w.toString
v=A.d.eJ(w,new C.dVV())
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
E.mR("flute",D.chg[t]+5,1400,0.35)}p.l(new C.dVW())},
gcie(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Lz("Press Start",0.5)
w=D.UW.h(0,this.d)
w.toString
v=A.d.eJ(w,new C.dVQ())
u=A.h.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Lz("Breathe in",0.5+0.5*A.dS.aA(0,p))
case 1:return new B.Lz("Hold",1)
case 2:return new B.Lz("Breathe out",1-0.5*A.dS.aA(0,p))
default:return new B.Lz("Hold",0.5)}}}return new B.Lz("",0.5)},
C(d){var w,v,u,t,s,r=this,q=null,p=r.gcie(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fL.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.p(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.fL.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.c(p.a,q,q,q,q,q,q,A.qG,q,q,q))
n.push(B.ao(0,B.c("Breaths: "+r.w,q,q,q,q,q,q,A.jP,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a4(300,340,new B.am(A.z,q,A.ac,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aN(D.UW.geE(D.UW));w.A();){v=w.gP(w)
o.push(new E.e6(v,r.d===v,new C.dVT(r,v),q,A.fL,q))}w=r.e
v=w?A.vN:A.fR
w=w?"Stop":"Start"
o.push(new E.fO(v,w,new C.dVU(r),A.bf,q))
return E.m3(A.fL,A.fh,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fm(o,q,q))}}
C.aMk.prototype={}
C.Xd.prototype={
R(){return new C.boV(new B.cB(null,x.A),B.a([],x.au),A.ax,A.c)}}
C.boV.prototype={
C(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,I.pd,s,s,s,new C.e7k(t,d),s,s,s,s,"Share",s)],r),p=B.bv(B.n(18),new B.ea(B.aA(s,B.b4(s,s,s,new C.bqZ(t.e,t.x,s),A.hi),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e7l(t),new C.e7m(t),s,s,s,s,s,s,s,s,s,new C.e7n(t),s,s,s,s,!1,A.a4),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.da4[w]
u=!t.w&&t.f.B(0,v)
o.push(new E.GC(v,u,new C.e7o(t,v),!1,s))}u=t.r
return E.m3(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.C(A.bS,p,s),"DRAW PAD",B.w(B.a([new E.fm(o,s,s),E.jh(A.bE,""+A.h.S(u),"Brush",30,2,new C.e7p(t),u),new E.fm(B.a([new E.e6("Eraser",t.w,new C.e7q(t),A.Ab,A.bE,s),new E.fO(A.qd,"Undo",new C.e7r(t),A.c,s),new E.fO(A.et,"Clear",new C.e7s(t),A.c,s),new E.fO(A.R4,"Paper",new C.e7t(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bqZ.prototype={
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
p.push(new B.b_(A.d.gH(n).a,A.d.gH(n).b))
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
C.Y_.prototype={
R(){var w=x.S
return new C.aI1(B.aR(w),B.aR(w))}}
C.aI1.prototype={
Z(){this.a4()
this.awB()},
awB(){var w,v,u=this,t=x.N,s=B.bt(D.dDg,!0,t)
A.d.Eo(s)
w=x.S
v=B.T(s).c
t=B.B(B.cI(s,0,B.dy(u.d,"count",w),v),t)
A.d.u(t,B.cI(s,0,B.dy(u.d,"count",w),v))
A.d.Eo(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
ci9(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mR("bell",12+A.n.F(d,9),150,0.35)
s.l(new C.ezu(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.d()
t=x.H
if(w[v]===w[u])B.bM(A.nm,new C.ezv(s,v,u),t)
else{s.x=!0
B.bM(Aj.Dd,new C.ezw(s),t)}}},
C(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.d()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.c("Moves: "+r.w,q,q,q,q,q,q,A.Xw,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.n.ao(p,2)+" / "+o
o=x.p
p=B.w(B.a([new B.C(A.zG,B.A(B.a([u,B.c(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iB,A.i,0,q,q),q),B.E(B.im(!0,q,q,A.y,new B.i_(v,8,8,1,q),new C.ezA(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.l,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.dbT[t]
o.push(new E.e6(s.b,r.d===s.a,new C.ezB(r,s),q,A.aH,q))}o.push(new E.fO(I.atq,"New game",new C.ezC(r),A.bf,q))
return E.m3(A.aH,A.fh,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fm(o,q,q))}}
C.Yb.prototype={
R(){return new C.aIp(B.a([],x.t))}}
C.aIp.prototype={
cid(d){A.d.a7(this.d)
this.w=!0
this.b4O()},
b4O(){this.d.push(A.cW.aw(4))
this.e=0
this.a1A()},
a1A(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.l(new C.eMC(t))
s=x.H
w=3
return B.b(B.bM(A.m4,null,s),$async$a1A)
case 3:r=t.d,q=B.bt(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aYo(n)
w=7
return B.b(B.bM(new B.bh(1000*Math.max(280,600-r.length*18)),null,s),$async$a1A)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.l(new C.eMD(t))
case 1:return B.h(u,v)}})
return B.i($async$a1A,v)},
aYo(d){this.l(new C.eMA(this,d))
E.mR("marimba",D.chf[d]+5,450,0.55)
B.bM(A.HO,new C.eMB(this),x.H)},
cif(d){var w,v,u=this
if(!u.w||u.r)return
u.aYo(d)
w=u.d
v=u.e
if(w[v]!==d){G.dI(90,"",600,0,0.5,"saw")
u.l(new C.eME(u))
return}++v
u.e=v
if(v===w.length){u.l(new C.eMF(u))
B.bM(A.hA,new C.eMG(u),x.H)}},
C(d){var w,v,u,t,s,r,q=this,p=null,o=B.c("Best: "+q.x,p,p,p,p,p,p,V.b_0,p,p,p),n=B.c(q.y,p,p,p,p,p,p,D.h_a,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aDO[v]
u=u.j(q.f===v?1:0.35)
t=new B.aQ(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.aDO[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cZ(p,p,p,p,A.b1,new B.p(u,p,new B.bE(r,r,r,r),new B.bc(t,t,t,t),s,p,A.m),A.jC,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eMH(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.C(A.ad,B.w(B.a([o,A.aj,n,A.df,new B.fD(1,B.lj(1,l,2,12,12,p,A.eb,!1),p)],m),A.l,p,A.bc,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.m3(A.bu,A.fh,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fm(B.a([new E.fO(A.fR,n,q.gcic(q),A.bf,p)],m),p,p))}}
C.Yv.prototype={
R(){return new C.bqc(new B.au(A.ay,$.ay()))}}
C.bqc.prototype={
aAc(d){return B.of(A.h.a1(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.f02(),null)},
C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cA(B.aD(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.f0b()
l=B.aO(m,A.M,!1,m,!0,A.t,m,B.aP(),l,m,m,m,m,m,2,B.bB(m,m,m,m,m,m,m,m,!0,new B.b5(4,B.n(16),Ae.yQ),m,m,m,m,m,m,m,m,m,m,m,new B.b5(4,B.n(16),D.b9m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.mg,"Bill amount",!0,!0,!1,m,m,m,m,D.fXn,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.am,m,m,m,m,m,A.el,m,m,m,1,m,m,!1,"\u2022",m,new C.f07(n),m,m,m,!1,m,m,!1,m,!0,m,A.ad,m,m,m,m,m,m,m,m,m,m,m,A.aYX,!0,A.a8,m,A.ao,m,m,m,m)
k=A.bf.j(0.1)
s=B.n(20)
r=B.K(A.bf.j(0.35),A.r,1)
q=x.p
s=B.cj(B.a([l,A.bx,B.q(m,B.w(B.a([t.$2("Tip ("+A.h.S(n.e)+"%)","$"+n.aAc(w)),t.$2("Total","$"+n.aAc(v)),Aa.Pg,t.$3$big("Each of "+n.f+" pays","$"+n.aAc(u),!0)],q),A.l,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(k,m,r,s,m,m,A.m),m,m,m,m,A.bR,m,m,m)],q),m,m,A.f7,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cWa[p]
r.push(new E.e6(""+o+"%",A.h.S(n.e)===o,new C.f08(n,o),m,A.bf,m))}l=n.f
return E.m3(A.bf,A.fh,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.w(B.a([new E.fm(r,"TIP",m),E.jh(A.aH,""+l,"People",20,1,new C.f09(n),l),new E.fm(B.a([new E.e6("Round up",n.r,new C.f0a(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.XZ.prototype={
R(){var w=B.a([3,5],x.t)
return new C.bpG(w,A.cW,$,A.bI,0,B.a([],x.X),null,null)}}
C.bpG.prototype={
Z(){this.a4()
this.mA()},
mT(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.n.F(A.h.ba(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.Yx("snare",0,0.5)}u.l(new C.ey9())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.he()
u.w=t
u.x=t?0:3.141592653589793
E.mR("bell",24,400,0.5)}u.l(new C.eya())}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.biq(v,o.r>0,n))}u=B.aA(n,B.at(B.bX(A.fX,m,A.bq,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ey2(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.h.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.de,A.r,6)
s=B.a([new B.ac(0,A.G,A.aQ.j(0.4),A.J,30)],x.V)
u=B.aA(n,B.at(B.e0(A.z,B.q(A.z,B.c(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fWw,n,n,n),A.f,n,n,new B.p(n,n,v,n,s,D.eSt,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ey3(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.w(B.a([B.c(m===0?"?":""+m,n,n,n,n,n,n,D.fL7,n,n,n),B.c("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.jP,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ey4(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dup[r]
v.push(new E.e6(q.b,o.d===q.a,new C.ey5(o,q),q.c,A.bk,n))}v=B.a([new E.fm(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.jh(A.bk,""+s,"Dice",4,1,new C.ey6(o),s))}if(o.d==="num"){s=o.z
s=E.jh(A.bk,""+s,"From",100,1,new C.ey7(o),s)
p=o.Q
A.d.u(v,B.a([s,E.jh(A.bk,""+p,"To",1000,2,new C.ey8(o),p)],m))}return E.m3(A.bk,A.fh,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.w(v,A.l,n,A.e,A.P,0,A.p))}}
C.biq.prototype={
C(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cW.ai()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ac(0,A.G,A.v.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dQB.h(0,A.n.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bH(s[q],p,p,B.q(p,p,A.f,p,p,A.Zy,p,18,p,p,p,p,p,18),p))
return B.eO(A.z,w,B.q(p,new B.am(A.a0,p,A.ac,A.t,t,p),A.f,p,p,new B.p(A.c,p,p,v,u,p,A.m),p,100,p,p,A.bD,p,p,100),p)}}
C.aPw.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bD_.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bCy()}}
C.aPR.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bD5.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bCU()}}
C.aQh.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bDf.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bDl()}}
C.aQK.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bDo.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bDO()}}
var z=a.updateTypes(["P(ul)","~()","P(a6S)","az<~>()","P(Dz)","F(ul,F)","G(G,ul)","P(Dv)","P(a0G)","P(adZ)","P(a5K)","P(o7)","Yw()","Ww()","aaP()","Y5()","Yk()","Y6()","P(nj)","WD()","ahB(Z,F)","ago(Z,F)","~(a9<@,@>)","F(Dv,Dv)","o(es)","P(aho)","P(a2X)","P(DK)","P(aeu)","P(ags)","P(aec)","F(F,rC)","F(F,Dz)","o(rC)","~(rC,ah<o>,F)","rC?(Dz)","XZ()","x(o,a2K)","P(acQ)","~(Bv)","Yz()","~(y1,o,m,u,G)","~(o,ul)","Xe()","XJ(Z)","OW(Z)","WY(Z,bA<G>,bA<G>)","Js(Z)","YE()","Xm()","Wx()","Xd()","Y_()","Yb()","Yv()","P(rC)"])
C.fXj.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fLk.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fTj.prototype={
$1(d){var w
if(!this.a.NA(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fTk.prototype={
$1(d){return d.x},
$S:z+0}
C.fXg.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fXh.prototype={
$1(d){var w
if(!this.a.NA(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fXi.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.erb.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.erc.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.erd.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd3(v).Q
v.toString
w.lT(v,A.ed,A.ig)}},
$S:7}
C.ero.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.erp.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.erk.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.eri.prototype={
$2(d,e){var w=this.a
w.r.push(B.cD(B.dw(0,0,0,d,0,0),new C.erj(w,this.b,e)))},
$S:1970}
C.erj.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.erl.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gYs().ans(0,u[1],u[2],u[3])
u[4].bP(0,new C.erg(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dI(700+w.e*120,"",80,0,0.25,"square")
v.l(new C.erh(w.a,v,w.f,w.r))},
$S:0}
C.erg.prototype={
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
C.erh.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.n.D(A.h.ba(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.erm.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gYs().aoh(t,u[1],s,u[3])
G.dI(1500,"",45,0,0.25,"tri")
v=w.b
v.l(new C.erf(w.a,v,w.e,w.f))},
$S:0}
C.erf.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.n.D(A.h.ba(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ern.prototype={
$0(){G.dI(300,"",360,-1.2,0.3,"square")
var w=this.a
w.l(new C.ere(w,this.b))},
$S:0}
C.ere.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ers.prototype={
$0(){var w=this.a
return w.l(new C.err(w))},
$S:0}
C.err.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ert.prototype={
$0(){var w=this.a
return w.l(new C.erq(w))},
$S:0}
C.erq.prototype={
$0(){return this.a.at=!1},
$S:0}
C.eru.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.Rb()},
$S:0}
C.erv.prototype={
$0(){return this.a.a_y(this.b)},
$S:0}
C.erw.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Rb():w.b0m()},
$S:2}
C.erx.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Rb():w.b0m()},
$S:0}
C.eGJ.prototype={
$2(d,e){return d+e},
$S:1971}
C.eH2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.eH1(w,d))},
$S:672}
C.eH1.prototype={
$0(){var w=B.aK(J.t(this.b,"unlocked"))
w=w==null?null:A.h.L(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eH3.prototype={
$0(){},
$S:0}
C.eH4.prototype={
$0(){},
$S:0}
C.eGL.prototype={
$0(){return this.a.l(new C.eGK(this.b,this.c))},
$S:0}
C.eGK.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eGA.prototype={
$1(d){return this.a.cx===d},
$S:29}
C.eGB.prototype={
$1(d){return this.a.cx=d},
$S:27}
C.eGC.prototype={
$1(d){return this.a.cy===d},
$S:29}
C.eGD.prototype={
$1(d){return this.a.cy=d},
$S:27}
C.eGE.prototype={
$1(d){return this.a.db===d},
$S:29}
C.eGF.prototype={
$1(d){return this.a.db=d},
$S:27}
C.eGG.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:29}
C.eGH.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.X(0,d):w.K(0,d)},
$S:27}
C.eGI.prototype={
$0(){var w=this.a
return w.l(w.gaAN())},
$S:0}
C.eGy.prototype={
$1(d){return this.a.$1(!0)},
$S:66}
C.eGz.prototype={
$1(d){return this.a.$1(!1)},
$S:116}
C.eGx.prototype={
$1(d){return this.a.$1(!1)},
$S:149}
C.eGW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bml(o,p),n)
w=this.b
v=C.bFG("WORLD",w.a,w.c)
u=C.bFG("GRAVITY",B.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.h.S(t*100)
t=t<0.25?A.c3:A.bf
t=C.bFG("FUEL",""+s+"%",t)
s=o.r.b
r=A.h.S(s*100)
s=s>D.EB[o.db].d?A.c3:A.c
q=x.p
s=B.a([v,u,t,C.bFG("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bFG("HEIGHT",""+A.h.S(A.h.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.iB,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bLI(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.u8[w].a+".":"You landed on every world!"
v=B.a([new E.fO(A.oj,"Again",new C.eGR(o),A.c,p),new E.fO(A.p6,"Rebuild",new C.eGS(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fO(A.jH,"Next world",new C.eGT(o),A.bf,p))
n.push(C.hPm("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(C.hPm("Crash!",o.at,A.c3,B.a([new E.fO(A.oj,"Try again",new C.eGU(o),A.bf,p),new E.fO(A.p6,"Rebuild",new C.eGV(o),A.aQ,p)],q)))
return new B.am(A.a0,p,A.b7,A.t,n,p)},
$S:63}
C.eGR.prototype={
$0(){var w=this.a
return w.l(w.gaAN())},
$S:0}
C.eGS.prototype={
$0(){var w=this.a
return w.l(new C.eGO(w))},
$S:0}
C.eGO.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eGT.prototype={
$0(){var w=this.a
return w.l(new C.eGN(w))},
$S:0}
C.eGN.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eGU.prototype={
$0(){var w=this.a
return w.l(w.gaAN())},
$S:0}
C.eGV.prototype={
$0(){var w=this.a
return w.l(new C.eGM(w))},
$S:0}
C.eGM.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eGX.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.l(new C.eGQ(v,w))},
$S:0}
C.eGQ.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eGY.prototype={
$1(d){return this.a.y=d},
$S:8}
C.eGZ.prototype={
$1(d){return this.a.Q=d},
$S:8}
C.eH_.prototype={
$1(d){return this.a.z=d},
$S:8}
C.eH0.prototype={
$0(){var w=this.a
return w.l(new C.eGP(w))},
$S:0}
C.eGP.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dVO.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hd(B.a([C.hJX(),C.hJY()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.l0(0,B.cV(J.t(r,1)))
q.l(new C.dVN(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:40}
C.dVN.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dVo.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dVp.prototype={
$0(){return this.a.c2P(B.aV(J.t(this.b,"group")))},
$S:0}
C.dVq.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dVr.prototype={
$1(d){return A.a.aY(A.n.fv(A.n.D(A.h.S(d*255),0,255),16),2,"0")},
$S:278}
C.dVP.prototype={
$0(){return E.Yx("kick",0,0.25)},
$S:0}
C.dVs.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dVt.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dVu.prototype={
$0(){return E.Yx("kick",0,0.5)},
$S:0}
C.dVv.prototype={
$0(){return G.dI(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dVx.prototype={
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
u=w}if(u.cy!=null&&!A.d.aR(u.d.e,new C.dVw(u)))u.cy=null
u.id=0},
$S:0}
C.dVw.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aCR(d)},
$S:z+10}
C.dVl.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dVm.prototype={
$0(){var w=this.a
return w.l(w.gcdN())},
$S:0}
C.dVn.prototype={
$0(){return this.a.agM(null)},
$S:0}
C.dVE.prototype={
$0(){var w=this.a.as
return w==null?null:w.fi(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dVF.prototype={
$0(){return this.a.cLD(this.b.a)},
$S:0}
C.dVG.prototype={
$0(){return this.a.agM(this.b)},
$S:0}
C.dVH.prototype={
$1(d){var w=this.a
return w.l(new C.dVD(w,d))},
$S:6}
C.dVD.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dVI.prototype={
$0(){var w=this.a
return w.l(new C.dVC(w,this.b))},
$S:0}
C.dVC.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dVJ.prototype={
$0(){var w=this.a
return w.l(new C.dVB(w))},
$S:0}
C.dVB.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dVK.prototype={
$0(){var w=this.a
return w.l(new C.dVA(w))},
$S:0}
C.dVA.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fi(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.Na},
$S:0}
C.dVL.prototype={
$0(){var w=this.a
return w.l(new C.dVz(w))},
$S:0}
C.dVz.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b3d()
else w.p3=null},
$S:0}
C.dVM.prototype={
$0(){var w=this.a
return w.l(new C.dVy(w))},
$S:0}
C.dVy.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.cal.prototype={
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
$S:340}
C.cam.prototype={
$1(d){var w=new B.qP([],[]).on(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:493}
C.fEl.prototype={
$1(d){var w=J.a0(d)
return w.h(d,0)&&w.h(d,1)},
$S:233}
C.fEm.prototype={
$1(d){var w=J.a0(d)
return w.h(d,0)||w.h(d,1)},
$S:233}
C.fEn.prototype={
$1(d){var w=J.a0(d)
return w.h(d,0)!==w.h(d,1)},
$S:233}
C.fEu.prototype={
$1(d){return!J.t(d,0)},
$S:233}
C.fEv.prototype={
$1(d){var w=J.a0(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:233}
C.fEw.prototype={
$1(d){var w=J.a0(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:233}
C.dXu.prototype={
$1(d){return this.a.axp(0)},
$S:7}
C.dX8.prototype={
$0(){var w=this.b
return this.a.cx=new B.O(w,B.izr(),B.T(w).k("O<1,F>")).fI(0)},
$S:0}
C.dXb.prototype={
$1(d){return""+d},
$S:80}
C.dXv.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dX6.prototype={
$1(d){return this.a.axp(this.b)},
$S:7}
C.dX7.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aBi(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.n8(0,d,a1.mC(0.15,0.3))
u=a1.n8(0,d,a1.mC(0.15,0.62))
t=a1.n8(0,"and",a1.mC(0.48,0.46))
s=a1.n8(0,a0,a1.mC(0.82,0.46))
a1=t.a
w.push(new C.o7(v.a,a1,0))
w.push(new C.o7(u.a,a1,1))
w.push(new C.o7(a1,s.a,0))
break
case 1:v=a1.n8(0,d,a1.mC(0.12,0.25))
u=a1.n8(0,d,a1.mC(0.12,0.65))
r=a1.n8(0,"xor",a1.mC(0.46,0.25))
q=a1.n8(0,"and",a1.mC(0.46,0.65))
p=a1.aBh(0,a0,a1.mC(0.82,0.25),0)
o=a1.aBh(0,a0,a1.mC(0.82,0.65),0)
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
case 2:k=a1.n8(0,"clock",a1.mC(0.15,0.4))
j=a1.n8(0,"not",a1.mC(0.45,0.65))
s=a1.n8(0,a0,a1.mC(0.82,0.3))
i=a1.n8(0,"buzzer",a1.mC(0.82,0.65))
a1=k.a
w.push(new C.o7(a1,s.a,0))
n=j.a
w.push(new C.o7(a1,n,0))
w.push(new C.o7(n,i.a,0))
break
default:h=a1.n8(0,d,a1.mC(0.12,0.25))
g=a1.n8(0,d,a1.mC(0.12,0.7))
f=a1.n8(0,"nor",a1.mC(0.5,0.25))
e=a1.n8(0,"nor",a1.mC(0.5,0.7))
s=a1.n8(0,a0,a1.mC(0.86,0.25))
a1=f.a
w.push(new C.o7(g.a,a1,0))
n=e.a
w.push(new C.o7(n,a1,1))
w.push(new C.o7(h.a,n,0))
w.push(new C.o7(a1,n,1))
w.push(new C.o7(a1,s.a,0))}},
$S:0}
C.dXc.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aBi(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Dv(p,"switch",new B.m(0.14*q.a,r*q.b),0))}o.n8(0,w.e,o.mC(0.86,0.5))},
$S:0}
C.dX1.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dX2.prototype={
$2(d,e){return A.h.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dX3.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dX4.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dX5.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.ag2(this.c)
if(v.ax)C.Kg("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dI(140,"",250,0,0.3,"square")}},
$S:0}
C.dXd.prototype={
$0(){},
$S:0}
C.dXe.prototype={
$0(){return A.d.cP(this.a.e,this.b)},
$S:0}
C.dXf.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dXa.prototype={
$0(){var w=this.a,v=this.b
w.d.X(0,v)
A.d.bs(w.e,new C.dX9(v))
w.cy=null},
$S:0}
C.dX9.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dX0.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.n8(0,this.b,new B.m(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dXo.prototype={
$0(){var w=this.a
return w.l(new C.dXn(w))},
$S:0}
C.dXn.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dXp.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c0,B.jn(B.b4(w,w,w,new C.bgh(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dXi(v),w,w,w,new C.dXj(v),new C.dXk(v),new C.dXl(v),w,w,w,w,w,w,w,w,w,w,new C.dXm(v),w,w,w,!1,A.a4)},
$S:35}
C.dXm.prototype={
$1(d){return this.a.cfC(d.b)},
$S:55}
C.dXk.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cpg(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aCm(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aI(0,u)}},
$S:51}
C.dXl.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.m(A.h.D(w.a+u.Q.a,46,u.x.a-46),A.h.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dXj.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c6k(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dXg(w))
u=t.as
u.toString
v.push(new C.o7(u,w.a,w.b))
B.ke()}}t.z=t.as=null},
$S:38}
C.dXg.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dXi.prototype={
$1(d){return this.a.aA5(d.b)},
$S:322}
C.dXq.prototype={
$0(){return this.a.bHr(this.b.a)},
$S:0}
C.dXr.prototype={
$0(){return this.a.axp(this.b.a)},
$S:0}
C.dXs.prototype={
$0(){var w=this.a
return w.l(new C.dXh(w))},
$S:0}
C.dXh.prototype={
$0(){var w=this.a
w.aBi(0)
w.ay=null},
$S:0}
C.dXt.prototype={
$0(){return this.a.cH9(this.b)},
$S:0}
C.d_L.prototype={
$0(){var w=this,v=null,u=B.h2(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a8,A.cb,v,A.e6,A.cc)
u.eL()
return u},
$S:285}
C.e2E.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2D.prototype={
$0(){return this.a.d=null},
$S:0}
C.e2G.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c8i()},
$S:135}
C.e2F.prototype={
$0(){return B.a7(this.a,!1).i2()},
$S:0}
C.fEM.prototype={
$0(){return I.aOL},
$S:z+40}
C.fEN.prototype={
$0(){return D.e6P},
$S:z+43}
C.fEO.prototype={
$0(){return D.e_E},
$S:z+13}
C.fEP.prototype={
$0(){return D.eyz},
$S:z+14}
C.fEQ.prototype={
$0(){return D.egs},
$S:z+15}
C.fER.prototype={
$0(){return I.aOC},
$S:z+16}
C.fES.prototype={
$0(){return D.ewl},
$S:z+17}
C.fET.prototype={
$0(){return I.aOK},
$S:z+12}
C.fEU.prototype={
$0(){return D.e1V},
$S:z+19}
C.fjy.prototype={
$2(d,e){return new C.ahB(e,$.bKq()[e],new C.fjx(e,this.a),null)},
$S:z+20}
C.fjx.prototype={
$0(){var w=this.a,v=L.aM9.h(0,$.bKq()[w].a)
$.avq=v==null?"music":v
B.a7(this.b,!1).ca(B.e4(new C.fjv(w),!1,null,x.H))},
$S:0}
C.fjv.prototype={
$1(d){return $.bKq()[this.a].e.$0()},
$S:43}
C.fjz.prototype={
$2(d,e){return new C.ago(e,D.aEu[e],new C.fjw(this.a,e),null)},
$S:z+21}
C.fjw.prototype={
$0(){return this.a.d.$1(D.aEu[this.b])},
$S:0}
C.fje.prototype={
$0(){return this.a.as=!0},
$S:0}
C.fjd.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fj3.prototype={
$0(){var w=this.a
w.ch=0
w.as=!1},
$S:0}
C.fj4.prototype={
$1(d){return this.brT(d)},
brT(d){var w=0,v=B.j(x.I),u,t=this,s,r,q
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
r.gri().sp(0,d/t.b)
r.gKB().sp(0,0.5)
w=3
return B.b($.aS.glW(),$async$$1)
case 3:r=$.aS.bl$.x.h(0,r.f)
s=r==null?null:r.gbf()
if(!(s instanceof B.oF))throw B.Y(B.be("closed"))
q=C
w=4
return B.b(s.lG(t.c),$async$$1)
case 4:u=q.h3_(f,t.d,t.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:749}
C.fj5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.fj2(w,d))},
$S:6}
C.fj2.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fj6.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.fjc.prototype={
$1(d){var w=this
return new B.ec(new C.fjb(w.a,w.b,w.c,w.d),null)},
$S:20}
C.fjb.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aE(a3,a0,a1).w
a1=B.aE(a3,a0,a1).w
w=x.p
v=B.a([D.h7_,A.at,D.hdT,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.c("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fWQ,a0,a0,a0)
m=new B.aQ(12,12)
l=new B.aQ(12,12)
l=B.a([new B.bu(1,A.b9,B.aO(a0,A.M,!1,a0,!0,A.t,a0,B.aP(),r[p],a0,a0,a0,a0,a0,2,new B.ee(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,A.FX,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b5(4,new B.bc(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a8,a0,A.ao,a0,a0,a0,a0),a0),A.aa,new B.bu(2,A.b9,B.aO(a0,A.M,!1,a0,!0,A.t,a0,B.aP(),q[p],a0,a0,a0,a0,a0,2,new B.ee(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,A.FX,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b5(4,new B.bc(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a8,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dLn[k]
i=new B.aQ(12,12)
if(u[p].B(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].B(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.by
e=new B.ax(f,u[p].B(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.q(a0,B.V(j,u[p].B(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.p(g,a0,new B.bE(e,e,e,e),new B.bc(i,i,i,i),a0,a0,A.m),a0,a0,a0,A.eX,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fj9(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.aj,new B.c_(A.aJ,A.e,A.i,A.l,a0,A.p,a0,0,l,a0),A.N,new B.a4(a0,44,B.cj(m,a0,a0,a0,a0,a0,A.aJ,!1),a0),A.az],w))}v.push(B.bI(A.BR,a0,new C.fja(t,r,q,u,a3),a0))
return new B.C(new B.R(0,0,0,a2.f.d),B.bm(!0,new B.cR(new B.aX(0,1/0,0,a1.a.b*0.86),B.cj(v,a0,a0,A.xi,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:106}
C.fj9.prototype={
$0(){var w=this
return w.a.$1(new C.fj8(w.b,w.c,w.d))},
$S:0}
C.fj8.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.fja.prototype={
$0(){var w=this,v=w.a
v.l(new C.fj7(v,w.b,w.c,w.d))
B.a7(w.e,!1).N(null)},
$S:0}
C.fj7.prototype={
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
C.fjm.prototype={
$0(){var w=this.a
return w.l(new C.fjl(w))},
$S:0}
C.fjl.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.fjn.prototype={
$0(){return E.v0(this.b,this.a.f,"scene")},
$S:0}
C.fjo.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.gKB().x
w===$&&B.d()
return new B.bP(new B.p(v,v,v,v,v,new B.bV(D.b6O,0.9,A.w,v,0,B.a([u.j(0.06+0.03*w),A.c8],x.O),v,v),A.m),A.bn,v,v)},
$S:303}
C.fjp.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(new B.d7(A.dn,A.z,A.f,B.ca(new B.hC(B.a([u.gri(),u.gKB()],x.dS)),new C.fjk(u,this.b,v),w),w),w,w,w)},
$S:242}
C.fjk.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gri().x
r===$&&B.d()
w=r<0.9?1:1-C.bwQ(r,0.9,0.98)
v=s.gKB().x
v===$&&B.d()
u=A.dS.aA(0,v)
switch(s.gaBj().a){case 0:s=s.bGB(t.b,r,u,t.c)
break
case 1:s=s.bXR(t.b,r,u,t.c)
break
case 2:s=s.cM6(t.b,r,u,t.c)
break
case 3:s=s.bJB(t.b,r,u,t.c)
break
case 4:s=s.bN_(t.b,r,u,t.c)
break
case 5:s=s.cfD(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:165}
C.fjq.prototype={
$2(d,e){var w=null,v=B.acD(this.b),u=this.c.d,t=B.ap(A.d.gH(u),A.d.gal(u),0.4)
t.toString
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
u=v.cVf(t,A.by,u,3.5)
t=this.a
v=t.gri().x
v===$&&B.d()
return B.ZX(B.kT(w,w,w,w,1,0,w,new C.fjj(t),A.h.D(v,0,1)),u)},
$S:1975}
C.fjj.prototype={
$1(d){var w=this.a
w.gri().sp(0,d)
if(w.as)w.l(new C.fjf(w))},
$S:6}
C.fjf.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fjr.prototype={
$0(){var w=this.a
w.gri().sp(0,0)
w.a13()},
$S:0}
C.fjs.prototype={
$1(d){var w=this.a
w.l(new C.fji(w,d))
if(w.as)w.a13()},
$S:6}
C.fji.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fjt.prototype={
$0(){var w=this.a
w.l(new C.fjh(w,this.b))
w.gri().sp(0,0)
if(w.as)w.a13()},
$S:0}
C.fjh.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.fju.prototype={
$0(){var w=this.a
return w.l(new C.fjg(w,this.b))},
$S:0}
C.fjg.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.fj0.prototype={
$2(d,e){return A.h.aQ(d.a,e.a)},
$S:1976}
C.fj1.prototype={
$1(d){return d.b},
$S:1977}
C.dwX.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dwY.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dwU.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dwV.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dwW.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dwZ.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dx_.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dx0.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dx1.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dx2.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dx3.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dx4.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dx5.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dx6.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eG3.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eFT.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eFV.prototype={
$2(d,e){return d+e.d*7+A.n.F(A.a.ga_(e.b),97)},
$S:z+31}
C.eFW.prototype={
$2(d,e){return d+A.n.F(A.a.ga_(e.a),31)+A.n.F(A.a.ga_(e.b),17)},
$S:z+32}
C.eFZ.prototype={
$1(d){var w=D.nx.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.n.F(d.d,u)]+")":t},
$S:z+33}
C.eG_.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.B(new B.eh(new B.cP(new B.X(q,new C.eG0(d),p.k("X<1>")),new C.eG1(r),p.k("cP<1,rC?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aJ(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eG0.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eG1.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eFX.prototype={
$1(d){return D.nx.h(0,d.b).c===D.yK},
$S:z+55}
C.eFY.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eGt.prototype={
$1(d){var w=this.a,v=d.a,u=A.h.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.wf(0,u)
w.a9l(A.n.ao(v,1000))},
$S:7}
C.eG2.prototype={
$0(){},
$S:0}
C.eFP.prototype={
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
C.eG5.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.w(B.a([A.N,B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.V(D.nx.h(0,v).b,D.nx.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.hpQ,w,B.c(D.nx.h(0,v).a,w,w,w,w,w,w,A.h6,w,w,w),w,w,w),B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,A2.av3,w,w,w,w,new C.eG4(d),!1,w,w,w,w,w,w,w,D.hgM,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:28}
C.eG4.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eG7.prototype={
$1(d){var w,v,u,t=null,s=B.aE(d,t,x.w).w,r=B.a([D.eKL],x.p)
for(w=0;w<6;++w){v=D.aER[w]
u=B.c(v.a,t,t,t,t,t,t,A.h6,t,t,t)
r.push(B.dP(!1,t,t,t,!0,t,t,t,!0,t,t,D.c94,t,t,t,t,new C.eG6(d,v),!1,t,t,t,t,t,B.c(v.b,t,t,t,t,t,t,A.mg,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cR(new B.aX(0,1/0,0,s.a.b*0.7),B.cj(r,t,t,D.bMX,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:28}
C.eG6.prototype={
$0(){B.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.eFS.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,A.dy,w,w,!0,w,w,w,new C.eFQ(d),w,w),B.bK(!1,A.G1,w,w,!0,w,w,w,new C.eFR(d),w,w)],x.p),w,w,L.mt,D.he5,w,w,w,w,D.hh6,w)},
$S:17}
C.eFQ.prototype={
$0(){B.a7(this.a,!1).N(!1)
return null},
$S:0}
C.eFR.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eGr.prototype={
$0(){var w=this.a
return w.l(new C.eGq(w))},
$S:0}
C.eGq.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eGs.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nK(new C.eGh(r,s))}else{w=r.d
if(!w.cy.B(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bhL:t
v=B.a([B.b4(u,t,t,new C.bmj(w,v,new C.eGi(r),new C.eGj(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dp(!0,B.ca(w,new C.eGk(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bOJ())
return B.aA(A.c0,B.jn(new B.am(A.a0,t,A.b7,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eGl(r),t,r.gcqD(),t,new C.eGm(r),new C.eGn(r),new C.eGo(r),t,t,t,t,t,t,t,t,t,t,new C.eGp(r),t,t,t,!1,A.a4)},
$S:35}
C.eGh.prototype={
$0(){return this.a.af3(this.b)},
$S:0}
C.eGp.prototype={
$1(d){return this.a.cJI(d.b)},
$S:55}
C.eGn.prototype={
$1(d){return this.a.cqE(d.b)},
$S:51}
C.eGo.prototype={
$1(d){return this.a.cqF(d.b)},
$S:19}
C.eGm.prototype={
$1(d){return this.a.b7_()},
$S:38}
C.eGl.prototype={
$1(d){return this.a.afN(d.b)},
$S:322}
C.eGi.prototype={
$0(){return this.a.z},
$S:602}
C.eGj.prototype={
$0(){return this.a.Q},
$S:346}
C.eGk.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bT6()
if(p.length===0)return A.bK
w=A.v.j(0.55)
v=B.n(14)
u=B.K(A.by,A.r,1)
t=B.a([D.hbs,A.cR],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.c(p[r],q,2,A.a2,q,q,q,A.aZX,q,q,q))
return B.q(q,B.w(t,A.B,q,A.e,A.P,0,A.p),A.f,q,q,new B.p(w,q,u,v,q,q,A.m),q,q,q,q,A.h1,q,q,q)},
$S:70}
C.eFU.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.C(A.dX,B.A(B.a([B.q(w,B.V(d,e,w,w,w,21),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,38,w,w,w,w,w,38),A.bd,B.E(B.w(B.a([B.c(f,w,w,w,w,w,w,Al.Xr,w,w,w),A.bs,B.c(g,w,w,w,w,w,w,F.adI,w,w,w)],s),A.B,w,A.e,A.i,0,A.p),1)],s),A.B,w,A.e,A.i,0,w,w),w)},
$S:1978}
C.eGd.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).i2()},
$S:0}
C.eGe.prototype={
$0(){var w=this.a
return w.l(new C.eGc(w))},
$S:0}
C.eGc.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eGf.prototype={
$0(){var w=this.a
return w.l(new C.eGb(w))},
$S:0}
C.eGb.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eGg.prototype={
$0(){var w=this.a
return w.l(new C.eGa(w))},
$S:0}
C.eGa.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eG9.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.nx.gdV(D.nx),w=w.gae(w);w.A();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.c(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cEn(p[r]))
return new B.C(A.Pt,B.w(B.a([new B.C(A.apT,w,q),B.A(u,A.l,q,A.e,A.i,0,q,q)],v),A.B,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.eG8.prototype={
$0(){return this.a.cfK(this.b)},
$S:0}
C.dwT.prototype={
$0(){var w=this,v=null,u=B.h2(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a8,A.cb,v,A.e6,A.cc)
u.eL()
return u},
$S:285}
C.bTz.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bTK.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bTF.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bTL.prototype={
$1(d){return this.a.NA(d)&&!d.x},
$S:z+0}
C.bTM.prototype={
$2(d,e){return Math.max(d,this.a.aFg(e))},
$S:z+6}
C.bTO.prototype={
$2(d,e){var w=this.a
return w.c0(0,d.a+"."+e,new C.bTP(w))},
$S:z+5}
C.bTP.prototype={
$0(){return this.a.a},
$S:91}
C.bTN.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bTQ.prototype={
$2(d,e){var w=this.a
return w.c0(0,this.b.$1(this.c.$2(d,e)),new C.bTR(w))},
$S:z+5}
C.bTR.prototype={
$0(){return this.a.a},
$S:91}
C.bTB.prototype={
$2(d,e){var w=this.a
return w.c0(0,d.a+"."+e,new C.bTC(w))},
$S:z+5}
C.bTC.prototype={
$0(){return this.a.a},
$S:91}
C.bTA.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bTD.prototype={
$2(d,e){var w=this.a
return w.c0(0,this.b.$1(this.c.$2(d,e)),new C.bTE(w))},
$S:z+5}
C.bTE.prototype={
$0(){return this.a.a},
$S:91}
C.bTy.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bTS.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bTG.prototype={
$1(d){return d!==this.b&&this.a.aLF(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bTJ.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bTI.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bTH.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bNU.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bNV.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.bNT.prototype={
$2(d,e){return new B.a6(A.aW,A.b0,A.w,e,D.dkk,null).az(0,d)},
$S:1979}
C.cy_.prototype={
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
C.h9J.prototype={
$1(d){var w
$.U()
w=B.L()
w.r=d.gp(0)
return w},
$S:1980}
C.h9L.prototype={
$2(d,e){var w
$.U()
w=B.L()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bH
return w},
$S:1981}
C.h9M.prototype={
$5(d,e,f,g,h){return B.bx(new B.a5(d,e,d+f,e+g),new B.aQ(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1982}
C.h9K.prototype={
$3(d,e,f){var w
$.U()
w=B.L()
w.san(new B.a6(A.aW,A.b0,A.w,B.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1983}
C.bNw.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bNx.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bNv(w))},
$S:0}
C.bNv.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bNy.prototype={
$0(){return B.a([],x.F)},
$S:1984}
C.bNz.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:441}
C.bNA.prototype={
$0(){var w,v,u
J.bKA(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rR(v))if(C.huD(v.b))w.b6u(v)
else w.a2i(v)
else{u=w.a.c.bjy(v)
w.ahn(u==null?"The "+$.r1().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bNu.prototype={
$1(d){return new B.ec(new C.bNr(this.a,this.b),null)},
$S:20}
C.bNr.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bNs(this.a,o,a3),m=$.r1(),l=o.b,k=m.h(0,l).d,j=A.h.S(o.ch/1.04),i=new C.bNt(o,n,k),h=B.n(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ac(0,A.G,k.j(0.25),A.J,26)],f),d=B.q(p,p,A.f,p,p,new B.p(A.aT,p,p,B.n(3),p,p,A.m),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.q(p,B.at(B.c(m.h(0,l).c,p,p,p,p,p,p,A.qE,p,p,p),p,p,p),A.f,p,p,new B.p(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.w(B.a([B.c(m.h(0,l).b,p,1,A.a2,p,p,p,A.jr,p,p,p),D.hbg],a0),A.B,p,A.e,A.i,0,A.p),1)
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
v=B.q(p,B.at(B.cZ(p,B.at(new B.d7(A.dE,A.z,A.f,new B.C(A.hD,B.c(m.h(0,l).c,p,p,p,p,p,p,A.mW,p,p,p),p),p),p,p,p),p,p,A.b1,new B.p(p,p,q,s,f,new B.a6(A.aw,A.aD,A.w,r,p,p),A.m),A.eN,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.p(t,p,w,v,p,p,A.m),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.i,0,p,p)
w=B.aI(p,p,p,p,B.V(A.ath,k,p,p,p,30),p,p,p,new C.bNn(n,o),p,p,p,p,p,p)
t=B.acD(a2).bj1(k,A.by,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.ZX(B.kT(p,p,p,p,5.2,1,p,n,A.h.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.V(A.a4y,k,p,p,p,30),p,p,p,new C.bNo(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
return B.bm(!0,B.q(p,B.w(B.a([d,A.af,u,A.az,v,A.af,i,A.at,o,B.A(B.a([B.E(B.c(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,N.hJ,p,p,p),1),B.bK(!1,A6.b0_,p,p,!0,p,p,p,new C.bNp(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tP,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.i,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.p(p,p,g,h,e,D.cgA,A.m),p,p,p,A.zz,D.bJw,p,p,p),!0,!1,A.ag,!0,!0)},
$S:88}
C.bNs.prototype={
$1(d){var w=this.a
w.l(new C.bNl(this.b,d))
this.c.$1(new C.bNm())
w.a.toString},
$S:6}
C.bNl.prototype={
$0(){return this.a.ch=A.h.D(this.b,1,5.2)},
$S:0}
C.bNm.prototype={
$0(){},
$S:0}
C.bNt.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.n(14),r=u?w.c:A.by
r=B.K(r,A.r,u?2:1)
return B.E(B.aA(v,B.cZ(v,B.at(new B.d7(A.dn,A.z,A.f,B.c(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b1,new B.p(t,v,r,s,v,v,A.m),A.ho,v,v,v,A.jk,A.rl,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bNq(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:583}
C.bNq.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bNn.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bNo.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bNp.prototype={
$0(){B.a7(this.a,!1).N(null)
return null},
$S:0}
C.bNQ.prototype={
$2(d,e){var w
if(d==="short"){G.dI(1800,"",120,0,0.55,"noise")
G.dI(200,"",160,2.2,0.4,"saw")
B.fZ()
w=this.a
if(w.c!=null)w.ahn("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dI(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.ahn("\u26a0 Overloaded! The "+$.r1().h(0,e.b).b+" can only give about "+A.h.a1(w.a.c.B2(e),2)+" amps but your gadgets are asking for "+A.h.a1(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.ahn("Burnt out! "+e.ay)
G.dI(140,"",320,0,0.6,"noise")
G.dI(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bNR.prototype={
$0(){},
$S:0}
C.bMW.prototype={
$0(){},
$S:0}
C.bNS.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bNP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.aA(A.c0,new B.ea(B.b4(p,p,p,new C.alE(w,v,u,t,s,r==null?A.jK:r,p),n),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bNJ(o),new C.bNK(o),new C.bNL(o),p,p,p,p,p,p,p,p,p,p,new C.bNM(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bh1)
w=o.ay
if(w!=null){v=B.n(14)
u=B.K(A.cX,A.r,1)
n.push(B.ao(p,B.aA(p,B.q(p,B.A(B.a([D.h18,B.E(B.c(w,p,p,p,p,p,p,D.fTA,p,p,p),1)],q),A.B,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(D.bn9,p,u,v,p,p,A.m),p,p,p,p,A.oa,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bNN(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bPb,new E.fO(A.Ad,"Cut wire",new C.bNO(o),A.c3,p)],q),A.l,p,A.e,A.i,0,p,p)
w=B.n(18)
n.push(B.ao(8,B.q(p,o,A.f,p,p,new B.p(F.a_5,p,B.K(A.by,A.r,1),w,p,p,A.m),p,p,p,p,F.aow,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.crc(w),p,p,10,10,p,p))}}return B.jn(new B.am(A.a0,p,A.b7,A.t,n,p),A.t,p)},
$S:265}
C.bNK.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bdG(s)
if(r!=null){t.l(new C.bNH(t,r,d))
return}w=t.b79(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.m(v*u.a,w.d*u.b).aI(0,s)
t.l(new C.bNI(t,w))}},
$S:51}
C.bNH.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bNI.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bNL.prototype={
$1(d){var w=this.a
if(w.y!=null)w.l(new C.bNF(w,d))
else if(w.Q!=null)w.l(new C.bNG(w,d.b.a6(0,w.as)))},
$S:19}
C.bNF.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bNG.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.h.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.h.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bNJ.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bdG(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.aoh(u.a,u.b,v.a,v.b)!=null)G.dI(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.ahl()},
$S:38}
C.bNM.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b79(u)
if(t!=null){v.l(new C.bNC(v,t))
if(D.mO.am(0,t.b))v.cC8(t)
w=new B.W(Date.now(),0,!1)
if(v.r===t&&w.by(v.w).a<38e4){v.l(new C.bND(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.l(new C.bNE(v,v.cPq(u)))},
$S:55}
C.bNC.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dI(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dI(200,"",70,0,0.2,"saw")}},
$S:0}
C.bND.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bNE.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bNN.prototype={
$0(){var w=this.a
return w.l(new C.bNB(w))},
$S:0}
C.bNB.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bNO.prototype={
$0(){var w=this.a
A.d.X(w.a.c.b,w.x)
w.x=null
G.dI(300,"",50,0,0.35,"noise")
w.ahl()},
$S:0}
C.bMX.prototype={
$0(){return this.a.bwb(this.b)},
$S:0}
C.bNi.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.c(d,w,w,w,w,w,w,D.fNs,w,w,w),B.E(B.kT(this.b.d,w,w,w,g,h,w,new C.bNk(this.a,f),A.h.D(e,h,g)),1)],x.p),A.l,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1985}
C.bNk.prototype={
$1(d){var w=this.a
w.l(new C.bNj(this.b,d))
w.a.toString},
$S:6}
C.bNj.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bNh.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.n(10)
return B.E(B.q(w,B.w(B.a([B.c(d,w,w,w,w,w,w,A.adw,w,w,w),B.c(e,w,w,w,w,w,w,D.fQo,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.p(v,w,w,u,w,w,A.m),w,w,w,w,A.vm,w,w,w),1)},
$S:108}
C.bN3.prototype={
$0(){var w=this.a
return w.l(new C.bN2(w))},
$S:0}
C.bN2.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bN4.prototype={
$0(){var w=this.a
w.a.c.X(0,this.b)
w.e=w.d=null
G.dI(260,"",70,0,0.35,"noise")
w.ahl()},
$S:0}
C.bN5.prototype={
$0(){var w=this.a
return w.l(new C.bN1(w))},
$S:0}
C.bN1.prototype={
$0(){return this.a.e=null},
$S:0}
C.bN9.prototype={
$0(){this.a.l(new C.bN0(this.b,this.c))
G.dI(900,"",40,0,0.3,"noise")},
$S:0}
C.bN0.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bNa.prototype={
$0(){return this.a.b6u(this.b)},
$S:0}
C.bNb.prototype={
$0(){return this.a.a2i(this.b)},
$S:0}
C.bNc.prototype={
$0(){return this.a.a40(this.b)},
$S:0}
C.bNd.prototype={
$0(){var w=this.a
w.l(new C.bN_(this.b,this.c))
w.a.toString},
$S:0}
C.bN_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bNe.prototype={
$0(){var w=this.a
w.l(new C.bMZ(this.b,this.c))
w.a.toString},
$S:0}
C.bMZ.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bNf.prototype={
$0(){var w=this.a
w.l(new C.bMY(this.b,this.c))
w.a.toString},
$S:0}
C.bMY.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bNg.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bN6.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bN7.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bN8.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fEx.prototype={
$1(d){return d.aLg("bulb")},
$S:z+2}
C.fEy.prototype={
$1(d){return d.qy(0,"switch")&&d.aLg("bulb")},
$S:z+2}
C.fEz.prototype={
$1(d){return A.d.aR(d.a,new C.fEk())},
$S:z+2}
C.fEk.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fEA.prototype={
$1(d){return d.qy(0,"resistor")&&A.d.aR(d.a,new C.fEj())},
$S:z+2}
C.fEj.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fEB.prototype={
$1(d){return!d.qy(0,"battery")&&d.aLg("bulb")},
$S:z+2}
C.fEo.prototype={
$1(d){return A.d.aR(d.a,new C.fEi())},
$S:z+2}
C.fEi.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fEp.prototype={
$1(d){return A.d.aR(d.a,new C.fEh())},
$S:z+2}
C.fEh.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fEq.prototype={
$1(d){return A.d.aR(d.a,new C.fEg())},
$S:z+2}
C.fEg.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fEr.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fEe())&&A.d.aR(w,new C.fEf())&&d.qy(0,"buck")},
$S:z+2}
C.fEe.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fEf.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fEs.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fEc())&&A.d.aR(w,new C.fEd())},
$S:z+2}
C.fEc.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fEd.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fEt.prototype={
$1(d){return A.d.aR(d.a,new C.fEb())},
$S:z+2}
C.fEb.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e7Q.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a7(0)
w.u(0,v.b)},
$S:0}
C.e7Z.prototype={
$1(d){var w=this.a.d
return w.aLF(d)&&w.rR(d)},
$S:z+0}
C.e8_.prototype={
$1(d){return d.x},
$S:z+0}
C.e80.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e81.prototype={
$0(){},
$S:0}
C.e7P.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.hja,A.at,D.h30,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.TN[v]
t=A.c.j(0.06)
s=new B.aQ(14,14)
r=new B.ax(A.by,1,A.r,-1)
n.push(B.aA(q,B.q(q,B.w(B.a([B.c(u.a,q,q,q,q,q,q,A.iY,q,q,q),A.bs,B.c(u.b,q,3,A.a2,q,q,q,D.fUn,q,q,q)],o),A.B,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(t,q,new B.bE(r,r,r,r),new B.bc(s,s,s,s),q,q,A.m),q,q,q,A.cA,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e7O(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eE(q,F.nj,new B.C(A.bR,new B.a4(340,q,B.cj(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.db,q,new B.bb(p,A.a1),q)},
$S:46}
C.e7O.prototype={
$0(){B.a7(this.b,!1).N(null)
var w=this.a
w.l(new C.e7N(w,this.c))
G.dI(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e7N.prototype={
$0(){var w=this.a.d
this.b.C(w)
w.boH()},
$S:0}
C.e7L.prototype={
$1(d){return new C.XJ(this.a.d,null)},
$S:z+44}
C.e7M.prototype={
$0(){},
$S:0}
C.e7Y.prototype={
$1(d){return new B.ec(new C.e7X(this.a),null)},
$S:20}
C.e7X.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.akH(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bf:A.aH
k=B.aE(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.hgf,A.aY,B.c(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.i,0,m,m),A.N,B.bv(B.n(4),B.jK(A.by,m,m,5,m,w.a/11,new B.le(f,x.c)),A.ap),A.af],v)
if(h)u.push(D.h6l)
else{h=f.j(0.1)
t=B.n(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.c(r+" Now: "+i.a,m,m,m,m,m,m,An.LX,m,m,m)
q=B.c(g?"Well done! You did it.":i.b,m,m,m,m,m,m,A0.FY,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.w(B.a([r,A.at,q,new B.bH(A.a9,m,m,B.bK(!1,B.c(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e7V(l,e),m,m),m)],v),A.B,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(h,m,s,t,m,m,A.m),m,m,m,m,A.bg,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aQ(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.dA,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.c(s,m,m,m,m,m,m,A.adH,m,m,m)
r=j[o]
q=w.q(0,o)?A.aE:A.c
u.push(B.aA(m,B.q(m,new B.c_(A.aJ,A.e,A.i,A.l,m,A.p,m,0,B.a([s,A.ar,new B.bu(1,A.b9,B.c(r.a,m,m,m,m,m,m,new B.H(!0,q,m,m,m,m,13,A.C,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.p(h,m,new B.bE(n,n,n,n),new B.bc(t,t,t,t),m,m,A.m),m,m,m,A.ez,A.oa,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e7W(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cR(new B.aX(0,1/0,0,k.a.b*0.75),B.cj(u,m,m,A.xi,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:88}
C.e7V.prototype={
$0(){var w=this.a
w.l(new C.e7T(w))
this.b.$1(new C.e7U())
w.Gu()},
$S:0}
C.e7T.prototype={
$0(){var w=this.a
$.akH()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e7U.prototype={
$0(){},
$S:0}
C.e7W.prototype={
$0(){var w=this.a
w.l(new C.e7R(w,this.b))
this.c.$1(new C.e7S())
w.Gu()},
$S:0}
C.e7R.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e7S.prototype={
$0(){},
$S:0}
C.e83.prototype={
$0(){return B.a7(this.a,!1).i2()},
$S:0}
C.e84.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iN("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a7(t.b,!1).ca(B.e4(new C.e82(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e82.prototype={
$1(d){B.jb("construction")
return As.iaH()},
$S:z+45}
C.e85.prototype={
$0(){return E.hWO(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e86.prototype={
$0(){var w=this.a
return w.l(w.d.gd6w())},
$S:0}
C.e87.prototype={
$0(){var w=this.a,v=w.d
w.l(v.gtM(v))
w.Gu()},
$S:0}
C.cPP.prototype={
$2(d,e){var w=null,v=this.a.gaBs().x
v===$&&B.d()
return B.b4(w,w,w,new C.be3(v,w),A.aA)},
$S:52}
C.cPO.prototype={
$3(d,e,f){var w=new B.aJ($.U().r,A.ak,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.b_(v,t))
w.E(new B.cn(v,u,v+e,u))
w.E(new B.cn(v,u,v,u+e))
w.E(new B.cn(v,u,v-e,u))
w.E(new B.cn(v,u,v,t))
w.E(new B.bz())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:437}
C.heW.prototype={
$3(d,e,f){return new C.WY(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.heX.prototype={
$4(d,e,f,g){var w=x.a
return new B.de(e,!1,B.iF(A.z,g,null,new B.bk(B.cN(A.cn,e,null),new B.bq(0.85,1,w),w.k("bk<bT.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.e3M.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gCr()},
$S:0}
C.e3N.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.n.F(A.n.F(this.b,w)+w,w)
v.z=v.gCr()},
$S:0}
C.e3X.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.m(v.a/u.a,v.b/u.b)
w.w=w.gCr()},
$S:0}
C.e3L.prototype={
$1(d){return new K.Js(F.Ty[this.b],new C.e3K(this.a,d),null)},
$S:z+47}
C.e3K.prototype={
$0(){this.a.a=!0
B.a7(this.b,!1).dY()},
$S:0}
C.e3Y.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.e3Z.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e3E.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb49():w
return B.aA(A.c0,B.b4(w,w,w,v.cqB(this.b),A.hi),A.y,!1,D.hPD,u,w,w,w,new C.e3C(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e3D(v,e),w,w,w,!1,A.a4)},
$S:35}
C.e3D.prototype={
$1(d){var w=this.b
return this.a.cJU(d.b,new B.av(B.aU(1/0,w.a,w.b),B.aU(1/0,w.c,w.d)))},
$S:55}
C.e3C.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.Pa()!=null){w=v<0?1:-1
this.a.aFw(w)}},
$S:38}
C.e3V.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.n(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.q(w,B.w(B.a([B.V(d,g,w,w,w,20),A.rX,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,w,w,A.jk,A.jZ,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:600}
C.e3R.prototype={
$0(){return this.a.aFw(-1)},
$S:0}
C.e3S.prototype={
$0(){return this.a.aFw(1)},
$S:0}
C.e3T.prototype={
$0(){return this.a.KV(null)},
$S:0}
C.e3U.prototype={
$0(){return this.a.KV(0)},
$S:0}
C.e4_.prototype={
$0(){return B.a7(this.a,!1).i2()},
$S:0}
C.e3Q.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c5L(o):q.bIC(o,p),m=x.p
p=B.a([B.p0(new B.mn(n,new B.b9(p,x.aC)),A.pY,B.qd(),A.b1,A.b1,new C.e3O())],m)
n=t.d
if(n){w=A.h.F(q.gCr(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.ar],m)
if(w)m.push(D.bOY)
else m.push(A.aY)
m.push(B.q(s,s,A.f,s,s,new B.p(w?A.bf:A.ax,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.ar)
p.push(B.ao(s,B.at(B.cZ(s,B.A(m,A.l,s,A.e,A.i,0,s,s),s,s,A.ek,new B.p(A.v,s,s,u,s,s,A.m),A.nm,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Bx)p.push(B.ao(s,B.at(B.q(s,s,A.f,s,s,A.Nj,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.By)p.push(B.ao(s,B.q(s,s,A.f,s,s,A.Nj,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.q(s,s,A.f,s,s,new B.p(A.c.j(0.75),s,s,B.n(3),s,s,A.m),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e3P(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bv(r,new B.am(A.a0,s,A.b7,A.t,p,s),A.ap)},
$S:397}
C.e3O.prototype={
$2(d,e){var w=x.a
return new B.de(e,!1,B.iF(A.z,d,null,new B.bk(e,new B.bq(0.92,1,w),w.k("bk<bT.T>"))),null)},
$S:402}
C.e3P.prototype={
$0(){return this.a.KV(null)},
$S:0}
C.e3W.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.c(A.a.aY(A.n.v(B.cY(q)),2,"0")+":"+A.a.aY(A.n.v(B.fy(q)),2,"0"),s,s,s,s,s,s,A.uG,s,s,s),A.aY],x.p)
for(w=0;w<4;++w){v=new B.aQ(1,1)
q.push(B.q(s,s,A.f,s,s,new B.p(A.c,s,s,new B.bc(v,v,v,v),s,s,A.m),s,4+w*2,s,D.bNt,s,s,s,3))}q.push(A.da)
q.push(D.haf)
q.push(A.b6)
v=B.K(A.ab,A.r,1)
u=B.n(4)
t=this.b
q.push(B.q(s,new B.bH(A.a5,s,s,B.Ci(A.z,B.q(s,s,A.f,s,s,new B.p(A.bf,s,s,B.n(2),s,s,A.m),s,s,s,A7.I8,s,s,s,s),s,t/100),s),A.f,s,s,new B.p(s,s,v,u,s,s,A.m),s,12,s,s,s,s,s,26))
q.push(A.pv)
q.push(B.c(""+t+"%",s,s,s,s,s,s,D.h0K,s,s,s))
return new B.d7(A.dn,A.a5,A.f,new B.a4(r,s,B.A(q,A.l,s,A.e,A.i,0,s,s),s),s)},
$S:270}
C.e3J.prototype={
$0(){return this.a.KV(A.d.c8(F.iz,this.b))},
$S:0}
C.e3H.prototype={
$0(){return this.a.KV(0)},
$S:0}
C.e3I.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cI(F.iz,0,B.dy(4,"count",x.S),x.gD),v=w.$ti,w=new B.bQ(w,w.gI(0),v.k("bQ<aj.E>")),u=this.a,v=v.k("aj.E");w.A();){t=w.d
q.push(u.azg(t==null?v.a(t):t,50,!1))}return new B.d7(A.dn,A.z,A.f,new B.a4(r,s,B.A(q,A.l,s,A.rK,A.i,0,s,s),s),s)},
$S:270}
C.e3B.prototype={
$0(){return this.a.KV(null)},
$S:0}
C.e3G.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.v.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aE(k,A.bY,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.q(n,B.A(B.a([D.hpd,A.ar,B.E(B.c(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.f6,n,n,n,A.Mb,n,n,n),1),B.c(A.a.aY(A.n.v(B.cY(new B.W(Date.now(),0,!1))),2,"0")+":"+A.a.aY(A.n.v(B.fy(new B.W(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.qF,n,n,n)],w),A.l,n,A.e,A.i,0,n,n),A.f,m,n,n,n,24,n,n,new B.R(j,0,k,0),n,n,n)
j=B.a([B.b4(n,n,n,new C.bB4(l.gCr(),this.c.d,n),A.aA)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aE(m,A.dL,x.w).w.r.b+52}else m=12
v=B.n(10)
u=B.K(A.aT,A.r,1)
t=B.n(10)
s=B.aA(n,B.q(n,n,A.f,n,n,A.aha,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e3F(l),n,n,n,n,n,n,!1,A.a4)
r=B.q(n,n,A.f,n,n,A.Zx,n,12,n,n,n,n,n,12)
q=B.aA(n,B.q(n,n,A.f,n,n,D.bc6,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbe9(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.dU,r,A.dU,q,A.ar,B.E(B.c(F.iz[p].a,n,1,A.a2,n,n,n,A.Xp,n,n,n),1)],w)
if(l.Pa()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.b11(19))
s=B.q(n,B.A(p,A.l,n,A.e,A.i,0,n,n),A.f,A.cx,n,n,n,26,n,n,A.fD,n,n,n)
r=l.e
r.toString
j.push(B.bS(0,new B.C(new B.R(26,m,26,58),B.q(n,B.bv(t,B.w(B.a([s,B.E(l.aSj(r),1)],w),A.l,n,A.e,A.i,0,A.p),A.ap),A.f,n,n,new B.p(A.v,n,u,v,D.dH5,n,A.m),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.n(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.C(A.jk,l.azg(F.iz[o],34,!1),n))
j.push(B.ao(8,B.at(B.q(n,B.A(t,A.l,n,A.e,A.P,0,n,n),A.f,n,n,new B.p(m,n,u,v,n,n,A.m),n,n,n,n,A.lG,n,n,n),n,n,n),n,n,0,0,n,n))
return B.q(n,B.w(B.a([k,B.E(new B.am(A.a0,n,A.b7,A.t,j,n),1)],w),A.l,n,A.e,A.i,0,A.p),A.f,A4.a0J,n,n,n,n,n,n,n,n,n,n)},
$S:85}
C.e3F.prototype={
$0(){return this.a.KV(null)},
$S:0}
C.fF1.prototype={
$0(){return D.eAC},
$S:z+48}
C.fF2.prototype={
$0(){return D.e7n},
$S:z+49}
C.fF3.prototype={
$0(){return D.e_R},
$S:z+50}
C.fF4.prototype={
$0(){return D.e6L},
$S:z+51}
C.fF5.prototype={
$0(){return D.ecf},
$S:z+52}
C.fF6.prototype={
$0(){return D.ewo},
$S:z+53}
C.fF7.prototype={
$0(){return D.eyy},
$S:z+54}
C.fF8.prototype={
$0(){return D.ebi},
$S:z+36}
C.cqT.prototype={
$0(){return B.a7(this.a,!1).i2()},
$S:0}
C.cqU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.i_I(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aQ(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dv,16)],t)
n=B.c(r.c,k,k,k,k,k,k,A.LV,k,k,k)
m=B.c(r.a,k,k,k,k,k,k,D.fZs,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.q(k,new B.am(A.a0,k,A.ac,A.t,B.a([new B.cS(k,-6,-6,k,k,k,n,k),new B.bH(A.lt,k,k,B.w(B.a([m,A.cR,B.c(r.b,k,k,k,k,k,k,new B.H(!0,l,k,k,k,k,12,A.a7,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.B,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.p(k,k,k,new B.bc(q,q,q,q),p,new B.a6(A.aw,A.aD,A.w,o,k,k),A.m),k,v,k,k,A.bD,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cqS(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bX(A.bG,h,A.bq,k,14,14)},
$S:179}
C.cqS.prototype={
$0(){return B.a7(this.a,!1).ca(B.e4(new C.cqR(this.b),!1,null,x.H))},
$S:0}
C.cqR.prototype={
$1(d){return this.a.f.$0()},
$S:43}
C.f4H.prototype={
$0(){var w=this.a
return w.w=w.d[w.baC(w.f)]},
$S:0}
C.f4D.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cW.ai()*7},
$S:0}
C.f4C.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bN(0,A.ck)
w.w=""},
$S:0}
C.f4F.prototype={
$0(){var w=this.a
return w.l(new C.f4E(w,this.b))},
$S:0}
C.f4E.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cP(w,this.b)},
$S:0}
C.f4G.prototype={
$1(d){return this.a.b4N(0)},
$S:2}
C.eby.prototype={
$0(){return C.Kg("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.ebz.prototype={
$0(){},
$S:0}
C.ebt.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.ebv.prototype={
$0(){return this.a.b4P(this.b)},
$S:0}
C.ebw.prototype={
$0(){var w=this.a
return w.l(new C.ebu(w))},
$S:0}
C.ebu.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.ebx.prototype={
$0(){var w=this.a
return w.b4P(w.d)},
$S:0}
C.dVV.prototype={
$2(d,e){return d+e},
$S:83}
C.dVW.prototype={
$0(){},
$S:0}
C.dVQ.prototype={
$2(d,e){return d+e},
$S:83}
C.dVT.prototype={
$0(){var w=this.a
return w.l(new C.dVS(w,this.b))},
$S:0}
C.dVS.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dVU.prototype={
$0(){var w=this.a
return w.l(new C.dVR(w))},
$S:0}
C.dVR.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e7k.prototype={
$0(){return E.v0(this.b,this.a.d,"drawing")},
$S:0}
C.e7l.prototype={
$1(d){var w=this.a
return w.l(new C.e7j(w,d))},
$S:51}
C.e7j.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aMk(u,v,t))},
$S:0}
C.e7m.prototype={
$1(d){var w=this.a
return w.l(new C.e7i(w,d))},
$S:19}
C.e7i.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e7n.prototype={
$1(d){var w=this.a
return w.l(new C.e7h(w,d))},
$S:24}
C.e7h.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aMk(u,v,t))},
$S:0}
C.e7o.prototype={
$0(){var w=this.a
return w.l(new C.e7g(w,this.b))},
$S:0}
C.e7g.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e7p.prototype={
$1(d){var w=this.a
return w.l(new C.e7f(w,d))},
$S:6}
C.e7f.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e7q.prototype={
$0(){var w=this.a
return w.l(new C.e7e(w))},
$S:0}
C.e7e.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e7r.prototype={
$0(){var w=this.a
return w.l(new C.e7d(w))},
$S:0}
C.e7d.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e7s.prototype={
$0(){var w=this.a
return w.l(A.d.gtM(w.e))},
$S:0}
C.e7t.prototype={
$0(){var w=this.a
return w.l(new C.e7c(w))},
$S:0}
C.e7c.prototype={
$0(){var w=this.a
w.x=D.aDG[A.n.F(A.d.c8(D.aDG,w.x)+1,4)]},
$S:0}
C.ezu.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
C.ezv.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.Kg("bell",B.a([0,4,7],w),500,0.45)
u.l(new C.ezt(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.d()
if(v===u.length)C.Kg("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.ezt.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
C.ezw.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.ezs(w))},
$S:12}
C.ezs.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
C.ezA.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.l5(new C.ezy(v,e),w,A.b1,A.pY,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ezz(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:81}
C.ezz.prototype={
$0(){return this.a.ci9(this.b)},
$S:0}
C.ezy.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dB(),m=n.a
m.$flags&2&&B.ak(m)
m[11]=0.001
n.fO(3.141592653589793*e)
m=B.n(16)
w=o?p:D.cfI
if(o)v=q.a.r.q(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bf:A.aT,A.r,1)
if(o){r=B.dB()
r.fO(3.141592653589793)
u=u.e
u===$&&B.d()
r=B.fI(A.z,B.c(u[t],p,p,p,p,p,p,H.adL,p,p,p),p,r,!0)
u=r}else u=D.hhN
return B.fI(A.z,B.q(A.z,u,A.f,p,p,new B.p(v,p,s,m,p,w,A.m),p,p,p,p,p,p,p,p),p,n,!0)},
$S:111}
C.ezB.prototype={
$0(){var w=this.a
return w.l(new C.ezx(w,this.b))},
$S:0}
C.ezx.prototype={
$0(){var w=this.a
w.d=this.b.a
w.awB()},
$S:0}
C.ezC.prototype={
$0(){var w=this.a
return w.l(w.gbRy())},
$S:0}
C.eMC.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eMD.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eMA.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eMB.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.eMz(w))},
$S:12}
C.eMz.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eME.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eMF.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eMG.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b4O()},
$S:12}
C.eMH.prototype={
$0(){return this.a.cif(this.b)},
$S:0}
C.f02.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:58}
C.f0b.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.c(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.C(A.jZ,B.A(B.a([v,A.aa,new B.d_(1,A.c9,new B.d7(A.dn,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1986}
C.f07.prototype={
$1(d){return this.a.l(new C.f06())},
$S:2}
C.f06.prototype={
$0(){},
$S:0}
C.f08.prototype={
$0(){var w=this.a
return w.l(new C.f05(w,this.b))},
$S:0}
C.f05.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f09.prototype={
$1(d){var w=this.a
return w.l(new C.f04(w,d))},
$S:6}
C.f04.prototype={
$0(){return this.a.f=A.h.S(this.b)},
$S:0}
C.f0a.prototype={
$0(){var w=this.a
return w.l(new C.f03(w))},
$S:0}
C.f03.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ey9.prototype={
$0(){},
$S:0}
C.eya.prototype={
$0(){},
$S:0}
C.ey2.prototype={
$0(){var w=this.a
return w.l(new C.ey1(w))},
$S:0}
C.ey1.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c4(u,1,!1,x.S)
w.r=0.9
E.Yx("hat",0,0.6)},
$S:0}
C.ey3.prototype={
$0(){var w=this.a
return w.l(new C.ey0(w))},
$S:0}
C.ey0.prototype={
$0(){this.a.y=1.1
E.mR("bell",36,200,0.4)},
$S:0}
C.ey4.prototype={
$0(){var w=this.a
return w.l(new C.ey_(w))},
$S:0}
C.ey_.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mR("bell",12+A.n.F(u,12),500,0.5)},
$S:0}
C.ey5.prototype={
$0(){var w=this.a
return w.l(new C.exZ(w,this.b))},
$S:0}
C.exZ.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.ey6.prototype={
$1(d){var w=this.a
return w.l(new C.exY(w,d))},
$S:6}
C.exY.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.h.S(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.ey7.prototype={
$1(d){var w=this.a
return w.l(new C.exX(w,d))},
$S:6}
C.exX.prototype={
$0(){return this.a.z=A.h.S(this.b)},
$S:0}
C.ey8.prototype={
$1(d){var w=this.a
return w.l(new C.exW(w,d))},
$S:6}
C.exW.prototype={
$0(){return this.a.Q=A.h.S(this.b)},
$S:0}
C.cqP.prototype={
$0(){var w=this
return E.mR(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aQq.prototype
w.bDu=w.t
w=C.aPu.prototype
w.bCw=w.t
w=C.aPv.prototype
w.bCx=w.t
w=C.aPz.prototype
w.bCB=w.t
w=C.aRg.prototype
w.bEr=w.t
w=C.aQo.prototype
w.bDs=w.t
w=C.aBn.prototype
w.bzx=w.t
w=C.aBo.prototype
w.bzy=w.t
w=C.aNW.prototype
w.bAU=w.t
w=C.aPK.prototype
w.bCM=w.t
w=C.aPw.prototype
w.bCy=w.t
w=C.aPR.prototype
w.bCU=w.t
w=C.aQh.prototype
w.bDl=w.t
w=C.aQK.prototype
w.bDO=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aIg.prototype,"gaAN","cdc",1)
v(C,"iIS","caj",3)
var q
u(q=C.aGG.prototype,"gcmG","cmH",22)
w(q,"gcdN","b3d",1)
w(C.aGI.prototype,"gcfz","cfA",1)
t(C.aGZ.prototype,"gcfH","cfI",39)
w(q=C.aLr.prototype,"gcGS","cGT",1)
w(q,"gcfJ","a13",1)
w(q,"gcrm","crn",1)
w(q,"gcfF","a12",3)
w(q,"gcfG","ahb",3)
w(q=C.aIf.prototype,"gbOC","acq",3)
w(q,"gcqD","b7_",1)
w(q,"gcuy","ajW",3)
s(q,"gcfL","ahc",3)
s(q=C.a6S.prototype,"gtM","a7",1)
u(q,"gd47","ar4",0)
u(q,"gd0p","NA",0)
w(q,"gd6w","boH",1)
r(C.alE.prototype,"gcg7",0,5,null,["$5"],["lP"],41,0,0)
w(q=C.aHc.prototype,"gcg8","cg9",1)
w(q,"gcxs","akh",3)
w(q,"gcmY","aiz",3)
w(q,"gcEP","alq",3)
w(q=C.aH2.prototype,"gc8c","afj",3)
w(q,"gbe9","cLs",1)
w(q,"gb49","cgd",1)
w(q=C.aIM.prototype,"gcia","cib",1)
s(q,"gci8","b4N",1)
w(C.aI1.prototype,"gbRy","awB",1)
s(C.aIp.prototype,"gcic","cid",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aH,[C.amT,C.Hs,C.vT,C.aWM,C.a5K,C.bfb,C.cak,C.z6,C.Dv,C.o7,C.bg_,C.Bv,C.byx,C.qQ,C.rC,C.Dz,C.a0G,C.aho,C.a2X,C.DK,C.aec,C.aeu,C.ags,C.Hd,C.es,C.ul,C.acQ,C.adZ,C.a6S,C.nj,C.bg0,C.h9,C.mv,C.bzR,C.aMk])
u(B.hr,[C.fXj,C.fLk,C.fTj,C.fTk,C.fXg,C.fXh,C.erd,C.erw,C.eH2,C.eGA,C.eGB,C.eGC,C.eGD,C.eGE,C.eGF,C.eGG,C.eGH,C.eGy,C.eGz,C.eGx,C.eGY,C.eGZ,C.eH_,C.dVr,C.dVt,C.dVw,C.dVH,C.cal,C.cam,C.fEl,C.fEm,C.fEn,C.fEu,C.fEv,C.fEw,C.dXu,C.dXb,C.dXv,C.dX6,C.dX1,C.dX3,C.dX9,C.dXm,C.dXk,C.dXl,C.dXj,C.dXg,C.dXi,C.fjv,C.fj4,C.fj5,C.fjc,C.fjj,C.fjs,C.fj1,C.dwX,C.dwY,C.dwU,C.dwV,C.dwW,C.dwZ,C.dx_,C.dx0,C.dx1,C.dx2,C.dx3,C.dx4,C.dx5,C.dx6,C.eFZ,C.eG_,C.eG0,C.eG1,C.eFX,C.eFY,C.eGt,C.eG5,C.eG7,C.eFS,C.eGp,C.eGn,C.eGo,C.eGm,C.eGl,C.eFU,C.bTz,C.bTK,C.bTF,C.bTL,C.bTN,C.bTA,C.bTy,C.bTS,C.bTG,C.bTJ,C.bTI,C.bTH,C.bNU,C.h9J,C.h9M,C.h9K,C.bNz,C.bNu,C.bNs,C.bNS,C.bNK,C.bNL,C.bNJ,C.bNM,C.bNi,C.bNk,C.bNg,C.bN6,C.bN7,C.bN8,C.fEx,C.fEy,C.fEz,C.fEk,C.fEA,C.fEj,C.fEB,C.fEo,C.fEi,C.fEp,C.fEh,C.fEq,C.fEg,C.fEr,C.fEe,C.fEf,C.fEs,C.fEc,C.fEd,C.fEt,C.fEb,C.e7Z,C.e8_,C.e7P,C.e7L,C.e7Y,C.e82,C.cPO,C.heW,C.heX,C.e3L,C.e3D,C.e3C,C.e3V,C.cqR,C.f4G,C.e7l,C.e7m,C.e7n,C.e7p,C.ezy,C.f02,C.f0b,C.f07,C.f09,C.ey6,C.ey7,C.ey8])
u(B.j1,[C.fXi,C.eri,C.erg,C.eGJ,C.eGW,C.dX2,C.dXp,C.e2G,C.fjy,C.fjz,C.fjb,C.fjo,C.fjp,C.fjk,C.fjq,C.fj0,C.eFV,C.eFW,C.eGs,C.eGk,C.eG9,C.bTM,C.bTO,C.bTQ,C.bTB,C.bTD,C.bNV,C.bNT,C.cy_,C.h9L,C.bNr,C.bNt,C.bNQ,C.bNP,C.bNh,C.e7X,C.cPP,C.e3E,C.e3Q,C.e3O,C.e3W,C.e3I,C.e3G,C.cqU,C.dVV,C.dVQ,C.ezA])
u(B.af,[C.XJ,C.Y6,C.Ww,C.WD,C.OX,C.aLq,C.Y5,C.alC,C.Xe,C.aB2,C.WY,C.YE,C.Xm,C.Wx,C.Xd,C.Y_,C.Yb,C.Yv,C.XZ])
u(B.ai,[C.bpu,C.aQq,C.aPu,C.aPz,C.aGZ,C.aRg,C.aQo,C.aBn,C.bD3,C.aNW,C.aPK,C.aQK,C.aPR,C.aPw,C.boV,C.aI1,C.aIp,C.bqc,C.aQh])
u(B.j0,[C.erb,C.erc,C.ero,C.erp,C.erk,C.erj,C.erl,C.erh,C.erm,C.erf,C.ern,C.ere,C.ers,C.err,C.ert,C.erq,C.eru,C.erv,C.erx,C.eH1,C.eH3,C.eH4,C.eGL,C.eGK,C.eGI,C.eGR,C.eGS,C.eGO,C.eGT,C.eGN,C.eGU,C.eGV,C.eGM,C.eGX,C.eGQ,C.eH0,C.eGP,C.dVO,C.dVN,C.dVo,C.dVp,C.dVq,C.dVP,C.dVs,C.dVu,C.dVv,C.dVx,C.dVl,C.dVm,C.dVn,C.dVE,C.dVF,C.dVG,C.dVD,C.dVI,C.dVC,C.dVJ,C.dVB,C.dVK,C.dVA,C.dVL,C.dVz,C.dVM,C.dVy,C.dX8,C.dX7,C.dXc,C.dX4,C.dX5,C.dXd,C.dXe,C.dXf,C.dXa,C.dX0,C.dXo,C.dXn,C.dXq,C.dXr,C.dXs,C.dXh,C.dXt,C.d_L,C.e2E,C.e2D,C.e2F,C.fEM,C.fEN,C.fEO,C.fEP,C.fEQ,C.fER,C.fES,C.fET,C.fEU,C.fjx,C.fjw,C.fje,C.fjd,C.fj3,C.fj2,C.fj6,C.fj9,C.fj8,C.fja,C.fj7,C.fjm,C.fjl,C.fjn,C.fjf,C.fjr,C.fji,C.fjt,C.fjh,C.fju,C.fjg,C.eG3,C.eFT,C.eG2,C.eFP,C.eG4,C.eG6,C.eFQ,C.eFR,C.eGr,C.eGq,C.eGh,C.eGi,C.eGj,C.eGd,C.eGe,C.eGc,C.eGf,C.eGb,C.eGg,C.eGa,C.eG8,C.dwT,C.bTP,C.bTR,C.bTC,C.bTE,C.bNw,C.bNx,C.bNv,C.bNy,C.bNA,C.bNl,C.bNm,C.bNq,C.bNn,C.bNo,C.bNp,C.bNR,C.bMW,C.bNH,C.bNI,C.bNF,C.bNG,C.bNC,C.bND,C.bNE,C.bNN,C.bNB,C.bNO,C.bMX,C.bNj,C.bN3,C.bN2,C.bN4,C.bN5,C.bN1,C.bN9,C.bN0,C.bNa,C.bNb,C.bNc,C.bNd,C.bN_,C.bNe,C.bMZ,C.bNf,C.bMY,C.e7Q,C.e80,C.e81,C.e7O,C.e7N,C.e7M,C.e7V,C.e7T,C.e7U,C.e7W,C.e7R,C.e7S,C.e83,C.e84,C.e85,C.e86,C.e87,C.e3M,C.e3N,C.e3X,C.e3K,C.e3Y,C.e3Z,C.e3R,C.e3S,C.e3T,C.e3U,C.e4_,C.e3P,C.e3J,C.e3H,C.e3B,C.e3F,C.fF1,C.fF2,C.fF3,C.fF4,C.fF5,C.fF6,C.fF7,C.fF8,C.cqT,C.cqS,C.f4H,C.f4D,C.f4C,C.f4F,C.f4E,C.eby,C.ebz,C.ebt,C.ebv,C.ebw,C.ebu,C.ebx,C.dVW,C.dVT,C.dVS,C.dVU,C.dVR,C.e7k,C.e7j,C.e7i,C.e7h,C.e7o,C.e7g,C.e7f,C.e7q,C.e7e,C.e7r,C.e7d,C.e7s,C.e7t,C.e7c,C.ezu,C.ezv,C.ezt,C.ezw,C.ezs,C.ezz,C.ezB,C.ezx,C.ezC,C.eMC,C.eMD,C.eMA,C.eMB,C.eMz,C.eME,C.eMF,C.eMG,C.eMH,C.f06,C.f08,C.f05,C.f04,C.f0a,C.f03,C.ey9,C.eya,C.ey2,C.ey1,C.ey3,C.ey0,C.ey4,C.ey_,C.ey5,C.exZ,C.exY,C.exX,C.exW,C.cqP])
t(C.bDh,C.aQq)
t(C.aIg,C.bDh)
u(B.lQ,[C.bml,C.bgh,C.bxT,C.beU,C.bws,C.bvR,C.bfA,C.bvT,C.bA0,C.bmj,C.alE,C.be3,C.bB4,C.ahh,C.bBh,C.bvS,C.bqZ])
t(C.aPv,C.aPu)
t(C.aGG,C.aPv)
t(C.bD0,C.aPz)
t(C.aGI,C.bD0)
u(B.ln,[C.LM,C.a2K,C.KK])
u(B.aw,[C.bwR,C.ahB,C.ago,C.S0,C.bxo,C.aaP,C.biq])
t(C.aLr,C.aRg)
t(C.bmi,B.p1)
t(C.aIf,C.aQo)
t(C.aBo,C.aBn)
t(C.alD,C.aBo)
t(C.aHc,C.bD3)
t(C.be4,C.aNW)
t(C.aH2,C.aPK)
t(C.bDo,C.aQK)
t(C.aIM,C.bDo)
t(C.bD5,C.aPR)
t(C.bp3,C.bD5)
t(C.bD_,C.aPw)
t(C.boC,C.bD_)
t(C.bDf,C.aQh)
t(C.bpG,C.bDf)
w(C.aQq,B.cm)
w(C.bDh,E.o4)
w(C.aPu,B.cm)
w(C.aPv,E.o4)
w(C.aPz,B.cm)
w(C.bD0,E.o4)
w(C.aRg,B.eZ)
w(C.aQo,B.cm)
w(C.aBn,B.cm)
w(C.aBo,E.o4)
w(C.aNW,B.cm)
v(C.bD3,B.eH)
w(C.aPK,B.cm)
w(C.aPw,B.cm)
w(C.bD_,E.o4)
w(C.aPR,B.cm)
w(C.bD5,E.o4)
w(C.aQh,B.cm)
w(C.bDf,E.o4)
w(C.aQK,B.cm)
w(C.bDo,E.o4)})()
B.jj(b.typeUniverse,JSON.parse('{"XJ":{"af":[],"x":[]},"bpu":{"ai":["XJ"]},"Y6":{"af":[],"x":[]},"aIg":{"ai":["Y6"]},"bml":{"aC":[]},"Ww":{"af":[],"x":[]},"aGG":{"ai":["Ww"]},"WD":{"af":[],"x":[]},"aGI":{"ai":["WD"]},"bgh":{"aC":[]},"ahB":{"aw":[],"x":[]},"ago":{"aw":[],"x":[]},"aLq":{"af":[],"x":[]},"OX":{"af":[],"x":[]},"aGZ":{"ai":["OX"]},"bwR":{"aw":[],"x":[]},"S0":{"aw":[],"x":[]},"bxT":{"aC":[]},"bxo":{"aw":[],"x":[]},"beU":{"aC":[]},"aLr":{"ai":["aLq"]},"bws":{"aC":[]},"bvR":{"aC":[]},"bfA":{"aC":[]},"bvT":{"aC":[]},"bA0":{"aC":[]},"Y5":{"af":[],"x":[]},"bmi":{"aC":[]},"aIf":{"ai":["Y5"]},"bmj":{"aC":[]},"alE":{"aC":[]},"alC":{"af":[],"x":[]},"alD":{"ai":["alC"]},"Xe":{"af":[],"x":[]},"aB2":{"af":[],"x":[]},"aHc":{"ai":["Xe"],"eH":[]},"be4":{"ai":["aB2"]},"be3":{"aC":[]},"WY":{"af":[],"x":[]},"aH2":{"ai":["WY"]},"bB4":{"aC":[]},"ahh":{"aC":[]},"aaP":{"aw":[],"x":[]},"YE":{"af":[],"x":[]},"Xm":{"af":[],"x":[]},"Wx":{"af":[],"x":[]},"Xd":{"af":[],"x":[]},"Y_":{"af":[],"x":[]},"Yb":{"af":[],"x":[]},"Yv":{"af":[],"x":[]},"XZ":{"af":[],"x":[]},"aIM":{"ai":["YE"]},"bBh":{"aC":[]},"bp3":{"ai":["Xm"]},"bvS":{"aC":[]},"boC":{"ai":["Wx"]},"boV":{"ai":["Xd"]},"bqZ":{"aC":[]},"aI1":{"ai":["Y_"]},"aIp":{"ai":["Yb"]},"bqc":{"ai":["Yv"]},"bpG":{"ai":["XZ"]},"biq":{"aw":[],"x":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("le<u?>"),G:w("u"),J:w("bl<o,G>"),Q:w("dd<o>"),Z:w("a_"),I:w("vq"),M:w("N<dl>"),l:w("N<a5F>"),h:w("N<a5K>"),V:w("N<ac>"),O:w("N<u>"),F:w("N<W>"),D:w("N<az<aH>>"),x:w("N<a_>"),E:w("N<ah<o>>"),b:w("N<ah<G>>"),U:w("N<ah<F?>>"),B:w("N<a9<o,aH>>"),g:w("N<m>"),bz:w("N<ul>"),v:w("N<h1>"),eZ:w("N<+(o,o)>"),fT:w("N<+(G,x)>"),L:w("N<+(F,o)>"),u:w("N<+(F,F)>"),r:w("N<+(o,o,a_)>"),e:w("N<+(o,G,G,F)>"),o:w("N<+(o,F,o,F)>"),d:w("N<+(o,o,G,G,a9<o,G>)>"),_:w("N<vT>"),fQ:w("N<acQ>"),s:w("N<o>"),cF:w("N<au>"),X:w("N<L_>"),p:w("N<x>"),bL:w("N<adZ>"),fH:w("N<ll>"),a_:w("N<aec>"),cB:w("N<o7>"),ba:w("N<aeu>"),eW:w("N<Dz>"),fY:w("N<a0G>"),ac:w("N<ags>"),cd:w("N<DK>"),fr:w("N<aho>"),e4:w("N<a2X>"),au:w("N<aMk>"),f7:w("N<P>"),n:w("N<G>"),t:w("N<F>"),dS:w("N<aC?>"),fs:w("N<ul?>"),bN:w("N<F?>"),gJ:w("cB<alD>"),A:w("cB<ai<af>>"),bF:w("ah<u>"),gl:w("ah<W>"),ew:w("ah<aH>"),j:w("ah<@>"),P:w("a9<o,@>"),f:w("a9<@,@>"),bd:w("O<es,o>"),fR:w("O<+(G,x),x>"),w:w("iq"),gA:w("vu"),gD:w("wS"),k:w("cr"),K:w("aH"),Y:w("ul"),C:w("es"),N:w("o"),bO:w("au"),a:w("bq<G>"),W:w("b9<o>"),aC:w("b9<F?>"),dg:w("eh<rC>"),m:w("bfb"),a2:w("Dv"),f3:w("rC"),es:w("Hd"),q:w("l6"),y:w("P"),i:w("G"),z:w("@"),S:w("F"),R:w("ah<@>?"),cK:w("aH?"),T:w("o?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6O=new B.dl(0,0.1)
D.b8L=new C.aWM(0,0,0)
D.Na=new C.aWM(0,0.5,0)
D.b9m=new B.ax(A.bf,1,A.r,-1)
D.baS=new B.aX(16,1/0,16,1/0)
D.bb1=new B.aX(0,1/0,0,210)
D.bta=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dHk=w([D.bta,Av.als],x.O)
D.eSl=new B.bV(A.C8,1.1,A.w,null,0,D.dHk,null,null)
D.bb9=new B.p(null,null,null,null,null,D.eSl,A.m)
D.bc6=new B.p(A.bh,null,null,null,null,null,A.a6)
D.fN_=new B.H(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hqE=new B.D("\u26a1",null,D.fN_,null,null,null,null,null,null,null,null,null)
D.bgR=new B.cp(A.z,null,null,D.hqE,null)
D.aZS=new B.H(!0,A.bX,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hfL=new B.D("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aZS,null,A.K,null,null,null,null,null,null,null)
D.eKp=new B.C(A.oc,D.hfL,null)
D.bh1=new B.cp(A.z,null,null,D.eKp,null)
D.h5p=new B.D("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aZS,null,A.K,null,null,null,null,null,null,null)
D.eLk=new B.C(A.I3,D.h5p,null)
D.bhL=new B.cp(A.z,null,null,D.eLk,null)
D.aib=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.blD=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.blU=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bn9=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bng=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bnE=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bpI=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bqS=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.brD=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.akz=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bsE=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.akY=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.al5=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.buE=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.alx=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bwH=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bwP=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bxj=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.x3=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bzw=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.an5=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bFo=new B.bh(11e6)
D.bHh=new B.R(10,6,10,2)
D.bHj=new B.R(10,8,0,10)
D.bHY=new B.R(12,8,6,10)
D.bI0=new B.R(12,8,8,8)
D.bI7=new B.R(14,0,14,22)
D.bI9=new B.R(14,0,14,30)
D.bJd=new B.R(16,4,16,28)
D.bJw=new B.R(18,10,18,16)
D.bMk=new B.R(4,4,8,2)
D.bMX=new B.R(8,14,8,12)
D.bN7=new B.R(8,6,8,8)
D.bNt=new B.R(0,0,1.5,0)
D.b8x=new B.Ev(26,"saturation")
D.bNM=new B.ve(A.cG,D.b8x,null,A.a_1)
D.bNN=new B.h5(A.G,11)
D.bNR=new B.h5(A.G,30)
D.h4r=new B.D("REACTION LAB",null,U.b_v,null,null,null,null,A.a2,null,1,null,null)
D.bO_=new B.bu(1,A.b9,D.h4r,null)
D.h8C=new B.D("\ud83d\udce2 NGMY Ads",null,A.qF,null,null,null,null,A.f6,null,1,null,null)
D.bOY=new B.bu(1,A.b9,D.h8C,null)
D.h31=new B.D("Wire selected",null,A.h6,null,null,null,null,null,null,null,null,null)
D.bPb=new B.bu(1,A.b9,D.h31,null)
D.asi=new B.a_(62712,"MaterialIcons",!1)
D.bVx=new B.a_(62908,"MaterialIcons",!1)
D.bXd=new B.a_(983122,"MaterialIcons",!1)
D.bXt=new B.a_(983247,"MaterialIcons",!1)
D.bXK=new B.a_(983443,"MaterialIcons",!1)
D.bY2=new B.a_(983616,"MaterialIcons",!1)
D.bXc=new B.a_(983117,"MaterialIcons",!1)
D.c0U=new B.ae(D.bXc,28,A.c,null,null,null)
D.c1b=new B.ae(A.jm,18,null,null,null,null)
D.c3u=new B.ae(A.oj,null,A.ab,null,null,null)
D.c3E=new B.ae(A.a5u,21,A.ab,null,null,null)
D.c4w=new B.ae(A.eI,17,A.ab,null,null,null)
D.c7t=new B.ae(A.jm,21,A.ab,null,null,null)
D.c7Z=new B.ae(A.et,20,A.c3,null,null,null)
D.c94=new B.ae(A.e9,null,A.aQ,null,null,null)
D.dEM=w([A.dl,A.di,A.dl],x.O)
D.aw2=new B.a6(A.a5,A.a9,A.w,D.dEM,null,null)
D.ddc=w([A.bP,A.bl],x.O)
D.ccA=new B.a6(A.aW,A.b0,A.w,D.ddc,null,null)
D.ccP=new B.a6(A.aW,A.b0,A.w,A.a8a,null,null)
D.dzT=w([F.NE,A8.anf],x.O)
D.cdz=new B.a6(A.aW,A.b0,A.w,D.dzT,null,null)
D.das=w([A.pJ,A.iJ],x.O)
D.cdE=new B.a6(A.aW,A.b0,A.w,D.das,null,null)
D.dcU=w([A.cU,A.ax],x.O)
D.awg=new B.a6(A.aW,A.b0,A.w,D.dcU,null,null)
D.dxI=w([A.d1,A.iM,A.bl],x.O)
D.cdX=new B.a6(A.a5,A.a9,A.w,D.dxI,null,null)
D.dKg=w([A.d1,A.bP,A.bl],x.O)
D.ce7=new B.a6(A.a5,A.a9,A.w,D.dKg,null,null)
D.dxQ=w([A.cz,A.cx],x.O)
D.awj=new B.a6(A.aW,A.b0,A.w,D.dxQ,null,null)
D.aGn=w([A.cU,M.nl],x.O)
D.cey=new B.a6(A.aW,A.b0,A.w,D.aGn,null,null)
D.ceQ=new B.a6(A.aW,A.b0,A.w,X.awD,null,null)
D.cfI=new B.a6(A.aw,A.aD,A.w,A.Tz,null,null)
D.bye=new B.u(1,0.16470588235294117,0.16470588235294117,0.1803921568627451,A.q)
D.btq=new B.u(1,0.0392156862745098,0.0392156862745098,0.043137254901960784,A.q)
D.dn0=w([D.bye,D.btq],x.O)
D.cfM=new B.a6(A.aW,A.b0,A.w,D.dn0,null,null)
D.cfW=new B.a6(A.aW,A.b0,A.w,H.aFE,null,null)
D.amP=new B.u(1,0.043137254901960784,0.043137254901960784,0.047058823529411764,A.q)
D.bxQ=new B.u(1,0.22745098039215686,0.22745098039215686,0.23921568627450981,A.q)
D.dGJ=w([D.amP,D.bxQ,D.amP],x.O)
D.cg3=new B.a6(A.a5,A.a9,A.w,D.dGJ,null,null)
D.bxd=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.by7=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cVA=w([A.OO,D.bxd,D.by7],x.O)
D.cg7=new B.a6(A.aW,A.b0,A.w,D.cVA,null,null)
D.cII=w([A.de,A.j1],x.O)
D.cgm=new B.a6(A.aW,A.b0,A.w,D.cII,null,null)
D.cWi=w([A.d1,A.hX,A.d1],x.O)
D.cgu=new B.a6(A.a5,A.a9,A.w,D.cWi,null,null)
D.bAY=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cJu=w([F.aij,D.bAY],x.O)
D.cgA=new B.a6(A.aW,A.b0,A.w,D.cJu,null,null)
D.che=w([0,4,7],x.t)
D.chf=w([0,4,7,12],x.t)
D.chg=w([0,4,7,4],x.t)
D.aFj=w([A.hm,A.tv],x.O)
D.aEN=w([A.fL,A.cY],x.O)
D.aD6=w([A.bk,A.e1],x.O)
D.d3z=w([A.aQ,A.de],x.O)
D.dzi=w([A.c6,A.lX],x.O)
D.aCx=w([A.cX,A.kg],x.O)
D.d94=w([A.bQ,A.aM],x.O)
D.chE=w([D.aFj,D.aEN,A.a7l,D.aD6,D.d3z,A.a7h,A.a7y,D.dzi,D.aCx,D.d94],B.as("N<ah<u>>"))
D.cmm=w([120,220,380],x.t)
D.cq6=w([12,16,19,24],x.t)
D.cqi=w([1400,800,450,2400],x.t)
D.cyR=w([250,450,900,1500],x.t)
D.bkW=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bxD=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bvj=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bBz=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bur=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aBM=w([D.bkW,D.bxD,D.bvj,D.bBz,D.bur],x.O)
D.fci=new B.y(-25,A.ax)
D.f0h=new B.y(25,A.bC)
D.cIO=w([D.fci,D.f0h],B.as("N<+(G,u)>"))
D.cQl=w([50,25,75],x.t)
D.cWa=w([0,5,10,15,18,20,25],x.t)
D.d3T=w([900,500,250,1600],x.t)
D.d8g=w([A.bk,A.bE,A.be,A.bk],x.O)
D.a7c=w([A.aC,A.bu,A.bh,A.aH,A.oT],x.O)
D.da4=w([A.ax,A.aC,A.cX,A.bu,A.bh,A.cJ,A.cj,A.bE,A.a_m],x.O)
D.a7f=w([0.04,0.17,0.3],x.n)
D.fwc=new C.vT("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fwi=new C.vT("Medium engine","A good all-rounder.",0.3,0.9)
D.fwh=new C.vT("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Jw=w([D.fwc,D.fwi,D.fwh],x._)
D.eYq=new B.y(6,"Easy")
D.eZe=new B.y(8,"Medium")
D.eTY=new B.y(10,"Hard")
D.dbT=w([D.eYq,D.eZe,D.eTY],x.L)
D.aDv=w([0.55,0.78,1],x.n)
D.aDG=w([A.c,A.hb,A.pL,A.ax],x.O)
D.aDO=w([A.bh,A.aC,A.bu,A.di],x.O)
D.fw9=new C.vT("Radar","Shows your height above the ground.",0.1,0)
D.fwa=new C.vT("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fw7=new C.vT("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aDX=w([D.fw9,D.fwa,D.fw7],x._)
D.diq=w([-29.5,28.5],x.n)
D.diw=w([A.bl,A.cm,F.O9,A.cz],x.O)
D.diU=w([47,100,220,470,1000],x.n)
D.dkk=w([0,0.32,0.62,1],x.n)
D.dkp=w([A.d1,A.hX,A.d1,A.cz],x.O)
D.KG={volts:0}
D.a9d=new B.bl(D.KG,[3],x.J)
D.L8=new B.e1(["b","battery",0.2,0.3,D.a9d])
D.eE9={on:0}
D.dQM=new B.bl(D.eE9,[1],x.J)
D.FD=new B.e1(["s","switch",0.5,0.3,D.dQM])
D.ftJ=new B.e1(["l","bulb",0.8,0.3,A.jK])
D.ddn=w([D.L8,D.FD,D.ftJ],x.d)
D.FB=new B.b7(["b",0,"s",0])
D.fsD=new B.b7(["s",1,"l",0])
D.aVg=new B.b7(["l",1,"b",1])
D.dxY=w([D.FB,D.fsD,D.aVg],x.o)
D.dcI=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eT4=new C.nj("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.ddn,D.dxY,D.dcI)
D.aOW={ohms:0}
D.aMo=new B.bl(D.aOW,[220],x.J)
D.ft7=new B.e1(["r","resistor",0.5,0.3,D.aMo])
D.fu_=new B.e1(["d","led",0.8,0.3,A.jK])
D.dBy=w([D.L8,D.ft7,D.fu_],x.d)
D.frQ=new B.b7(["b",0,"r",0])
D.fsx=new B.b7(["r",1,"d",0])
D.frX=new B.b7(["d",1,"b",1])
D.dM5=w([D.frQ,D.fsx,D.frX],x.o)
D.dC0=w(["led","diode","indicator"],x.s)
D.eTb=new C.nj("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dBy,D.dM5,D.dC0)
D.aaK={level:0}
D.dQ7=new B.bl(D.aaK,[0.2],x.J)
D.fte=new B.e1(["p","pot",0.5,0.3,D.dQ7])
D.ftg=new B.e1(["m","motor",0.8,0.3,A.jK])
D.ddK=w([D.L8,D.fte,D.ftg],x.d)
D.frP=new B.b7(["b",0,"p",0])
D.fss=new B.b7(["p",1,"m",0])
D.fsn=new B.b7(["m",1,"b",1])
D.dH1=w([D.frP,D.fss,D.fsn],x.o)
D.dxB=w(["fan","motor","spin","dimmer"],x.s)
D.eT2=new C.nj("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.ddK,D.dH1,D.dxB)
D.a99=new B.bl(D.aaK,[0.9],x.J)
D.aVp=new B.e1(["s","solar",0.25,0.3,D.a99])
D.aVo=new B.e1(["l","bulb",0.75,0.3,A.jK])
D.dgX=w([D.aVp,D.aVo],x.d)
D.fsA=new B.b7(["s",0,"l",0])
D.fsj=new B.b7(["l",1,"s",1])
D.deF=w([D.fsA,D.fsj],x.o)
D.dHO=w(["solar","sun","without battery","no battery","free"],x.s)
D.eT5=new C.nj("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dgX,D.deF,D.dHO)
D.fu4=new B.e1(["c","crank",0.25,0.3,D.a99])
D.dvA=w([D.fu4,D.aVo],x.d)
D.frT=new B.b7(["c",0,"l",0])
D.fsi=new B.b7(["l",1,"c",1])
D.dwi=w([D.frT,D.fsi],x.o)
D.dvN=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eT1=new C.nj("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dvA,D.dwi,D.dvN)
D.dQ6=new B.bl(D.aaK,[0.7],x.J)
D.ftl=new B.e1(["t","turbine",0.25,0.3,D.dQ6])
D.ft5=new B.e1(["m","motor",0.75,0.3,A.jK])
D.dp_=w([D.ftl,D.ft5],x.d)
D.fsL=new B.b7(["t",0,"m",0])
D.fso=new B.b7(["m",1,"t",1])
D.dnM=w([D.fsL,D.fso],x.o)
D.duc=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eSZ=new C.nj("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dp_,D.dnM,D.duc)
D.aMl=new B.bl(D.KG,[9],x.J)
D.abT=new B.e1(["b","battery",0.2,0.3,D.aMl])
D.aVm=new B.e1(["r","radio",0.8,0.3,A.jK])
D.dIs=w([D.abT,D.FD,D.aVm],x.d)
D.fsF=new B.b7(["s",1,"r",0])
D.aVi=new B.b7(["r",1,"b",1])
D.cgS=w([D.FB,D.fsF,D.aVi],x.o)
D.dGN=w(["radio","music","listen"],x.s)
D.eTa=new C.nj("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dIs,D.cgS,D.dGN)
D.dRb=new B.bl(D.KG,[12],x.J)
D.aVl=new B.e1(["b","battery",0.2,0.3,D.dRb])
D.ftK=new B.e1(["t","tv",0.8,0.3,A.jK])
D.ddp=w([D.aVl,D.FD,D.ftK],x.d)
D.fsG=new B.b7(["s",1,"t",0])
D.aVj=new B.b7(["t",1,"b",1])
D.dzm=w([D.FB,D.fsG,D.aVj],x.o)
D.dIp=w(["tv","television","screen","watch"],x.s)
D.eSW=new C.nj("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.ddp,D.dzm,D.dIp)
D.ftz=new B.e1(["z","buzzer",0.8,0.3,A.jK])
D.cSK=w([D.L8,D.FD,D.ftz],x.d)
D.fsH=new B.b7(["s",1,"z",0])
D.fsZ=new B.b7(["z",1,"b",1])
D.d7h=w([D.FB,D.fsH,D.fsZ],x.o)
D.dEU=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eT7=new C.nj("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cSK,D.d7h,D.dEU)
D.ftf=new B.e1(["h","heater",0.8,0.3,A.jK])
D.dsG=w([D.abT,D.FD,D.ftf],x.d)
D.fsC=new B.b7(["s",1,"h",0])
D.fs5=new B.b7(["h",1,"b",1])
D.d8b=w([D.FB,D.fsC,D.fs5],x.o)
D.cCc=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eSX=new C.nj("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dsG,D.d8b,D.cCc)
D.ftM=new B.e1(["s","solar",0.2,0.25,D.a99])
D.dRg=new B.bl(D.aOW,[100],x.J)
D.ftP=new B.e1(["r","resistor",0.55,0.25,D.dRg])
D.ftY=new B.e1(["c","capacitor",0.85,0.25,A.jK])
D.ftb=new B.e1(["q","resistor",0.55,0.6,D.aMo])
D.ftN=new B.e1(["d","led",0.85,0.6,A.jK])
D.dyJ=w([D.ftM,D.ftP,D.ftY,D.ftb,D.ftN],x.d)
D.fsB=new B.b7(["s",0,"r",0])
D.fsw=new B.b7(["r",1,"c",0])
D.frV=new B.b7(["c",1,"s",1])
D.frU=new B.b7(["c",0,"q",0])
D.fsv=new B.b7(["q",1,"d",0])
D.frY=new B.b7(["d",1,"c",1])
D.dln=w([D.fsB,D.fsw,D.frV,D.frU,D.fsv,D.frY],x.o)
D.duN=w(["capacitor","store","charge","flash"],x.s)
D.eT9=new C.nj("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dyJ,D.dln,D.duN)
D.fto=new B.e1(["b","battery",0.15,0.3,D.a9d])
D.fu6=new B.e1(["l1","bulb",0.5,0.3,A.jK])
D.ftw=new B.e1(["l2","bulb",0.85,0.3,A.jK])
D.dbb=w([D.fto,D.fu6,D.ftw],x.d)
D.frO=new B.b7(["b",0,"l1",0])
D.fsf=new B.b7(["l1",1,"l2",0])
D.fsg=new B.b7(["l2",1,"b",1])
D.dpQ=w([D.frO,D.fsf,D.fsg],x.o)
D.dI9=w(["series","two bulbs","dim"],x.s)
D.eT_=new C.nj("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.dbb,D.dpQ,D.dI9)
D.eEw={volts:0,charge:1}
D.dRk=new B.bl(D.eEw,[1.5,0],x.J)
D.ftV=new B.e1(["b","battery",0.75,0.3,D.dRk])
D.dat=w([D.aVp,D.ftV],x.d)
D.fsz=new B.b7(["s",0,"b",0])
D.frS=new B.b7(["b",1,"s",1])
D.dlJ=w([D.fsz,D.frS],x.o)
D.duZ=w(["charge","rechargeable","flat","recharge"],x.s)
D.eSY=new C.nj("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.dat,D.dlJ,D.duZ)
D.dRa=new B.bl(D.KG,[4.5],x.J)
D.fth=new B.e1(["b","battery",0.2,0.3,D.dRa])
D.aVk=new B.e1(["p","phone",0.8,0.3,A.jK])
D.doN=w([D.fth,D.FD,D.aVk],x.d)
D.fsE=new B.b7(["s",1,"p",0])
D.abS=new B.b7(["p",1,"b",1])
D.dDA=w([D.FB,D.fsE,D.abS],x.o)
D.dFo=w(["phone","charger","usb","mobile"],x.s)
D.eT3=new C.nj("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.doN,D.dDA,D.dFo)
D.ft2=new B.e1(["f","fan",0.8,0.3,A.jK])
D.cu9=w([D.L8,D.ft2],x.d)
D.frN=new B.b7(["b",0,"f",0])
D.fs3=new B.b7(["f",1,"b",1])
D.d8P=w([D.frN,D.fs3],x.o)
D.dxA=w(["fan","cool","air","wind"],x.s)
D.eTc=new C.nj("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cu9,D.d8P,D.dxA)
D.ftD=new B.e1(["b","battery",0.15,0.2,D.a9d])
D.ft3=new B.e1(["a","ammeter",0.5,0.2,A.jK])
D.ft1=new B.e1(["l","bulb",0.85,0.2,A.jK])
D.ftF=new B.e1(["v","voltmeter",0.5,0.6,A.jK])
D.dvl=w([D.ftD,D.ft3,D.ft1,D.ftF],x.d)
D.frL=new B.b7(["b",0,"a",0])
D.frJ=new B.b7(["a",1,"l",0])
D.fsN=new B.b7(["v",0,"l",0])
D.fsO=new B.b7(["v",1,"l",1])
D.dlA=w([D.frL,D.frJ,D.aVg,D.fsN,D.fsO],x.o)
D.dM4=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eT8=new C.nj("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dvl,D.dlA,D.dM4)
D.fu9=new B.e1(["b","battery",0.15,0.2,D.aMl])
D.ftn=new B.e1(["t","tv",0.55,0.2,A.jK])
D.aMm=new B.bl(D.KG,[5],x.J)
D.ft8=new B.e1(["c","buck",0.4,0.5,D.aMm])
D.ftp=new B.e1(["p","phone",0.8,0.5,A.jK])
D.diG=w([D.fu9,D.ftn,D.ft8,D.ftp],x.d)
D.frR=new B.b7(["b",0,"t",0])
D.aVe=new B.b7(["b",0,"c",0])
D.aVf=new B.b7(["c",1,"p",0])
D.doK=w([D.frR,D.aVj,D.aVe,D.aVf,D.abS],x.o)
D.dgs=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eT0=new C.nj("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.diG,D.doK,D.dgs)
D.fta=new B.e1(["c","buck",0.5,0.3,D.aMm])
D.d7Y=w([D.aVl,D.fta,D.aVk],x.d)
D.ddV=w([D.aVe,D.aVf,D.abS],x.o)
D.cFL=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eSV=new C.nj("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d7Y,D.ddV,D.cFL)
D.ftu=new B.e1(["d","diode",0.5,0.3,A.jK])
D.dq6=w([D.abT,D.ftu,D.aVm],x.d)
D.frM=new B.b7(["b",0,"d",0])
D.frZ=new B.b7(["d",1,"r",0])
D.cVl=w([D.frM,D.frZ,D.aVi],x.o)
D.dg4=w(["diode","protect","backwards","one way"],x.s)
D.eT6=new C.nj("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dq6,D.cVl,D.dg4)
D.TN=w([D.eT4,D.eTb,D.eT2,D.eT5,D.eT1,D.eSZ,D.eTa,D.eSW,D.eT7,D.eSX,D.eT9,D.eT_,D.eSY,D.eT3,D.eTc,D.eT8,D.eT0,D.eSV,D.eT6],B.as("N<nj>"))
D.i54=new C.Hs("Moon",1.62,A.d1,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.i52=new C.Hs("Mars",3.71,A.aC,"Mars has about 38 percent of Earth's gravity.")
D.i55=new C.Hs("Mercury",3.7,A.kJ,"Mercury is small, so its gravity is like Mars.")
D.i5_=new C.Hs("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.i51=new C.Hs("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.i53=new C.Hs("Neptune",11.15,A.di,"Neptune pulls a little harder than Earth.")
D.i50=new C.Hs("Jupiter",24.79,A.cX,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.u8=w([D.i54,D.i52,D.i55,D.i5_,D.i51,D.i53,D.i50],B.as("N<Hs>"))
D.dll=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dma=w([0.2,0.5,0.8],x.n)
D.b5w=new C.LM(0,"accordion")
D.d9c=w([A.k0,A.Aq,A.Aa],x.x)
D.di_=w(["Mail","SMS","Ad"],x.s)
D.d9X=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.i3e=new C.Bv(D.b5w,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aFj,D.d9c,D.di_,D.d9X)
D.afK=new C.LM(1,"flip")
D.duH=w([A.rB,A.Ed,A.rD],x.x)
D.dos=w(["Unlock","Verify","Secure"],x.s)
D.d7T=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.i3d=new C.Bv(D.afK,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aEN,D.duH,D.dos,D.d7T)
D.b5x=new C.LM(2,"towers")
D.dn2=w([A.Ao,A.mH,A.ix],x.x)
D.dmt=w(["Save","Grow","Earn"],x.s)
D.cWo=w(["","",""],x.s)
D.i3f=new C.Bv(D.b5x,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a7l,D.dn2,D.dmt,D.cWo)
D.afL=new C.LM(3,"assemble")
D.dvR=w([A.om,A.fQ,A.e9],x.x)
D.dhc=w(["Launch","Charge","Shine"],x.s)
D.drB=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.i3h=new C.Bv(D.afL,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aD6,D.dvR,D.dhc,D.drB)
D.b5y=new C.LM(4,"carousel")
D.dvB=w([A.be,A.ey],x.O)
D.dia=w([A.nt,A.asG,A.Rt],x.x)
D.dbI=w(["Explore","Discover","Learn"],x.s)
D.doV=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.i3c=new C.Bv(D.b5y,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dvB,D.dia,D.dbI,D.doV)
D.b5z=new C.LM(5,"burst")
D.dmo=w([A.hZ,A.v4],x.O)
D.d9Q=w([A.kp,A.m7,A.hQ],x.x)
D.dae=w(["Cheer","Win","Love"],x.s)
D.dcR=w(["Make some noise","First place","Share the joy"],x.s)
D.i3g=new C.Bv(D.b5z,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dmo,D.d9Q,D.dae,D.dcR)
D.aEu=w([D.i3e,D.i3d,D.i3f,D.i3h,D.i3c,D.i3g],B.as("N<Bv>"))
D.fmj=new B.aZ("skin","Skin",A.a4P)
D.fo4=new B.aZ("muscle","Muscles",A.R0)
D.fnH=new B.aZ("organ","Organs",A.hQ)
D.bVd=new B.a_(62747,"MaterialIcons",!1)
D.fnR=new B.aZ("bone","Skeleton",D.bVd)
D.foc=new B.aZ("vessel","Blood vessels",A.qh)
D.dn8=w([D.fmj,D.fo4,D.fnH,D.fnR,D.foc],x.r)
D.fwb=new C.vT("Simple legs","Light. Land gently.",0.15,0.2)
D.fwd=new C.vT("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fwg=new C.vT("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.EB=w([D.fwb,D.fwd,D.fwg],x._)
D.frh=new B.b7(["beat",0.18,0.28,0])
D.fsI=new B.b7(["burst",0.7,0.2,0])
D.fsT=new B.b7(["delay",0.45,0.5,1])
D.fsq=new B.b7(["ripple",0.75,0.6,3])
D.dgS=w([D.frh,D.fsI,D.fsT,D.fsq],x.e)
D.dtX=w([Q.ln,R.L6,F.Wn],x.u)
D.i04=new C.Hd("First spark","A clock lights a burst and a ripple",D.dgS,D.dtX)
D.fs2=new B.b7(["beat",0.15,0.3,1])
D.fpx=new B.b7(["ripple",0.62,0.15,0])
D.fsP=new B.b7(["delay",0.4,0.45,0])
D.frF=new B.b7(["ripple",0.7,0.45,0])
D.frb=new B.b7(["delay",0.4,0.7,1])
D.fst=new B.b7(["shake",0.75,0.75,0])
D.dJu=w([D.fs2,D.fpx,D.fsP,D.frF,D.frb,D.fst],x.e)
D.eV5=new B.y(2,4)
D.aUP=new B.y(4,5)
D.dl9=w([Q.ln,R.L6,F.Wn,D.eV5,D.aUP],x.u)
D.i06=new C.Hd("Heartbeat","Two thumps, then a shake",D.dJu,D.dl9)
D.frn=new B.b7(["dice",0.15,0.7,1])
D.fsV=new B.b7(["echo",0.4,0.7,0])
D.frB=new B.b7(["comet",0.7,0.5,4])
D.fsJ=new B.b7(["burst",0.72,0.2,1])
D.fs_=new B.b7(["burst",0.3,0.25,0])
D.fro=new B.b7(["pop",0.55,0.85,0])
D.cBK=w([D.frn,D.fsV,D.frB,D.fsJ,D.fs_,D.fro],x.e)
D.eUp=new B.y(1,3)
D.eUq=new B.y(1,4)
D.aUL=new B.y(0,5)
D.dvv=w([Q.ln,S.wl,D.eUp,D.eUq,D.aUL],x.u)
D.i05=new C.Hd("Fireworks","Dice launch comets that burst in colour",D.cBK,D.dvv)
D.frv=new B.b7(["beat",0.15,0.2,2])
D.fsc=new B.b7(["chance",0.4,0.2,0])
D.frk=new B.b7(["ball",0.7,0.12,3])
D.fr4=new B.b7(["chance",0.4,0.5,1])
D.fsU=new B.b7(["ball",0.3,0.08,1])
D.fqm=new B.b7(["ripple",0.7,0.55,3])
D.cuE=w([D.frv,D.fsc,D.frk,D.fr4,D.fsU,D.fqm],x.e)
D.eV6=new B.y(2,5)
D.cSt=w([Q.ln,S.wl,R.abI,F.Wo,D.eV6],x.u)
D.i03=new C.Hd("Rain","Balls fall at random and splash",D.cuE,D.cSt)
D.fsd=new B.b7(["beat",0.12,0.45,2])
D.fsK=new B.b7(["toggle",0.38,0.2,0])
D.fsR=new B.b7(["wash",0.7,0.15,4])
D.frm=new B.b7(["count3",0.38,0.45,0])
D.fsM=new B.b7(["burst",0.72,0.4,0])
D.fs0=new B.b7(["light",0.55,0.7,1])
D.fr5=new B.b7(["pop",0.8,0.8,4])
D.dyH=w([D.fsd,D.fsK,D.fsR,D.frm,D.fsM,D.fs0,D.fr5],x.e)
D.eVD=new B.y(3,6)
D.cxR=w([Q.ln,S.wl,R.abI,F.Wo,D.aUL,D.eVD],x.u)
D.i01=new C.Hd("Disco","A beat drives lights, washes and bursts",D.dyH,D.cxR)
D.fsY=new B.b7(["button",0.12,0.2,0])
D.fqN=new B.b7(["delay",0.34,0.2,1])
D.fsX=new B.b7(["light",0.56,0.2,1])
D.fsQ=new B.b7(["delay",0.56,0.45,1])
D.fse=new B.b7(["ball",0.34,0.6,0])
D.fr3=new B.b7(["delay",0.34,0.8,1])
D.fpn=new B.b7(["burst",0.7,0.8,5])
D.chH=w([D.fsY,D.fqN,D.fsX,D.fsQ,D.fse,D.fr3,D.fpn],x.e)
D.eXV=new B.y(5,6)
D.dF4=w([Q.ln,S.wl,F.Wn,F.Wo,D.aUP,D.eXV],x.u)
D.i02=new C.Hd("Domino","Tap the button and watch it run down the line",D.chH,D.dF4)
D.aER=w([D.i04,D.i06,D.i05,D.i03,D.i01,D.i02],B.as("N<Hd>"))
D.dt8=w([0.05,0.15,0.25],x.n)
D.dua=w([1.5,3,4.5,9,12],x.n)
D.fkw=new B.aZ("dice","Dice",A.of)
D.flQ=new B.aZ("coin","Coin",V.Ah)
D.fo7=new B.aZ("num","Number",A.xF)
D.dup=w([D.fkw,D.flQ,D.fo7],x.r)
D.dut=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aEX=w([A.c3,A.aQ,A.bf,A.aH,A.bk,A.c6,A.cX,A.fL],x.O)
D.dvD=w([A.c6,A.aH,A.eL,A.bf],x.O)
D.dwR=w([],x.h)
D.eM8=new C.es("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eMe=new C.es("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eMT=new C.es("crank","Hand crank","\ud83d\udd04",A.cX,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eMv=new C.es("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eM0=new C.es("buck","Step-down converter","\ud83d\udd3d",A.fL,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eMt=new C.es("regulator","5 V regulator","\ud83e\uddca",A.bQ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eMY=new C.es("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eMF=new C.es("ldr","Light sensor","\ud83c\udf1e",A.eL,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eMj=new C.es("switch","Switch","\ud83c\udf9a\ufe0f",A.bk,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eMV=new C.es("fuse","Fuse","\ud83e\uddef",A.c3,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eLT=new C.es("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fL,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eMG=new C.es("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eMI=new C.es("bulb","Light bulb","\ud83d\udca1",A.eL,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eMg=new C.es("led","LED","\ud83d\udd34",A.aC,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eMk=new C.es("motor","Motor","\u2699\ufe0f",A.bQ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eMC=new C.es("buzzer","Buzzer","\ud83d\udd14",A.c6,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eM9=new C.es("heater","Heater","\ud83d\udd25",A.cX,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eMx=new C.es("capacitor","Capacitor","\ud83e\udeab",A.cw,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eMp=new C.es("radio","Radio","\ud83d\udcfb",A.oT,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eMm=new C.es("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.be,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eM_=new C.es("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eM6=new C.es("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eMc=new C.es("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eN_=new C.es("speaker","Speaker","\ud83d\udd0a",A.c6,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eMP=new C.es("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eMs=new C.es("calculator","Calculator","\ud83e\uddee",A.NH,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eM5=new C.es("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cw,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eMZ=new C.es("router","WiFi router","\ud83d\udcf6",A.fL,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eN1=new C.es("siren","Siren","\ud83d\udea8",A.aC,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eLW=new C.es("toycar","Toy car","\ud83d\ude97",A.cX,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eN2=new C.es("kettle","Kettle","\ud83e\uded6",A.nh,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eM3=new C.es("lamp","Desk lamp","\ud83e\ude94",A.eL,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eMf=new C.es("lights","Party lights","\ud83c\udf84",A.oT,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eMq=new C.es("fridge","Fridge","\ud83e\uddca",A.hn,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eLY=new C.es("washer","Washing machine","\ud83e\udee7",A.cw,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eMQ=new C.es("blender","Blender","\ud83e\udd64",A.c3,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eMn=new C.es("drone","Drone","\ud83d\ude81",A.bQ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eM2=new C.es("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eMr=new C.es("torch","Torch","\ud83d\udd26",A.bO,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eMN=new C.es("neon","Neon sign","\ud83e\udea7",A.c6,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eLZ=new C.es("microwave","Microwave","\ud83c\udf72",A.cX,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eMH=new C.es("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eMb=new C.es("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eMB=new C.es("console","Game console","\ud83c\udfae",A.bk,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eMS=new C.es("heartmon","Heart monitor","\ud83e\ude7a",A.hK,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eLX=new C.es("aquarium","Aquarium","\ud83d\udc20",A.be,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eMw=new C.es("lighthouse","Lighthouse","\ud83d\uddfc",A.eL,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eME=new C.es("discoball","Disco ball","\ud83e\udea9",A.oT,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eMX=new C.es("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eLV=new C.es("toaster","Toaster","\ud83c\udf5e",A.ef,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eN0=new C.es("ledstrip","LED strip","\ud83c\udf08",A.c6,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eMM=new C.es("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eMy=new C.es("hairdryer","Hair dryer","\ud83d\udca8",A.hZ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eMK=new C.es("headphones","Headphones","\ud83c\udfa7",A.bk,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eM4=new C.es("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eMW=new C.es("tablet","iPad Pro M5","\ud83d\udcf2",A.cw,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eLS=new C.es("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hK,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eMo=new C.es("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eMh=new C.es("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eMD=new C.es("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.wY,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eLU=new C.es("iphonefold","iPhone Fold","\ud83d\udcf1",A.b2,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eM7=new C.es("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.di,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eMU=new C.es("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cJ,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eMz=new C.es("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bh,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eMu=new C.es("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ca,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eML=new C.es("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aC,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eMi=new C.es("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eMA=new C.es("honor","Honor Magic V5","\ud83d\udcf1",A.cw,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eMJ=new C.es("vivo","vivo X300 Pro","\ud83d\udcf1",A.cX,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eMO=new C.es("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eLR=new C.es("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cj,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eMl=new C.es("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cJ,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eMd=new C.es("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.be,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eM1=new C.es("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eL,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eMa=new C.es("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aC,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eMR=new C.es("vision","Apple Vision Pro","\ud83e\udd7d",A.bk,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Ud=w([D.eM8,D.eMe,D.eMT,D.eMv,D.eM0,D.eMt,D.eMY,D.eMF,D.eMj,D.eMV,D.eLT,D.eMG,D.eMI,D.eMg,D.eMk,D.eMC,D.eM9,D.eMx,D.eMp,D.eMm,D.eM_,D.eM6,D.eMc,D.eN_,D.eMP,D.eMs,D.eM5,D.eMZ,D.eN1,D.eLW,D.eN2,D.eM3,D.eMf,D.eMq,D.eLY,D.eMQ,D.eMn,D.eM2,D.eMr,D.eMN,D.eLZ,D.eMH,D.eMb,D.eMB,D.eMS,D.eLX,D.eMw,D.eME,D.eMX,D.eLV,D.eN0,D.eMM,D.eMy,D.eMK,D.eM4,D.eMW,D.eLS,D.eMo,D.eMh,D.eMD,D.eLU,D.eM7,D.eMU,D.eMz,D.eMu,D.eML,D.eMi,D.eMA,D.eMJ,D.eMO,D.eLR,D.eMl,D.eMd,D.eM1,D.eMa,D.eMR],B.as("N<es>"))
D.dxu=w([5,10,15,25,45,60],x.t)
D.dxU=w([-0.045,0.03,-0.015],x.n)
D.aFr=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.w_=w([0.05,0.2,0.35],x.n)
D.aFv=w([A.d1,A.iM,A.v7,A.GU],x.O)
D.bdq=new B.ac(0,A.G,A.i0,A.dP,6)
D.dAZ=w([D.bdq],x.V)
D.eTy=new B.y(0,"AND")
D.eUs=new B.y(1,"Adder")
D.eV7=new B.y(2,"Blinker")
D.eVE=new B.y(3,"Memory")
D.dBM=w([D.eTy,D.eUs,D.eV7,D.eVE],x.L)
D.aFF=w([-104,0,104],x.n)
D.aFH=w([-14,3],x.n)
D.dCM=w([-8,0,8],x.n)
D.aFP=w([-92,0,92],x.n)
D.dDg=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fw8=new C.vT("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fwf=new C.vT("Medium tank","Balanced.",0.35,1)
D.fwe=new C.vT("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Ut=w([D.fw8,D.fwf,D.fwe],x._)
D.or=w([0.04,0.2,0.36],x.n)
D.aG1=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.fnF=new B.aZ(D.b5w,"Fold",V.atE)
D.fmz=new B.aZ(D.afK,"Flip",A.DU)
D.bVu=new B.a_(62889,"MaterialIcons",!1)
D.fo3=new B.aZ(D.b5x,"Rise",D.bVu)
D.atR=new B.a_(983870,"MaterialIcons",!1)
D.fjR=new B.aZ(D.afL,"Assemble",D.atR)
D.fk3=new B.aZ(D.b5y,"Spin",D.asi)
D.fjY=new B.aZ(D.b5z,"Pop",A.kp)
D.dF1=w([D.fnF,D.fmz,D.fo3,D.fjR,D.fk3,D.fjY],B.as("N<+(LM,o,a_)>"))
D.aG6=w([A.c6,A.eL,A.bw,A.aH,A.bk,A.c3],x.O)
D.dFu=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dGC=w([3,4.5,5,6,9],x.n)
D.be5=new B.ac(0,A.G,A.ba,A.J,16)
D.dH5=w([D.be5],x.V)
D.hdZ=new B.D("\ud83e\uddcd",null,S.M_,null,null,null,null,null,null,null,null,null)
D.cgE=new B.Jl(5,null,null,A.by,A.c6,null,null,null,null)
D.fDh=new B.a4(150,null,D.cgE,null)
D.fVR=new B.H(!0,A.ab,null,null,null,null,14,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hhk=new B.D("Getting the body ready...",null,D.fVR,null,null,null,null,null,null,null,null,null)
D.he1=new B.D("Real 3D anatomy, kept on your phone",null,Ag.yk,null,null,null,null,null,null,null,null,null)
D.dH9=w([D.hdZ,A.az,D.fDh,A.af,D.hhk,A.at,D.he1],x.p)
D.dHJ=w(["solar","turbine","crank","pot"],x.s)
D.dId=w([0,0.35,0.75,1],x.n)
D.dJK=w(["volts","level","ohms","on"],x.s)
D.bpT=new B.u(1,0.23137254901960785,0.43529411764705883,0.8470588235294118,A.q)
D.bB1=new B.u(1,0.0392156862745098,0.10196078431372549,0.25098039215686274,A.q)
D.dJO=w([A.alw,D.bpT,A.m1,D.bB1],x.O)
D.dLn=w([A.k0,A.Aq,A.Aa,A.rB,A.Ed,A.rD,A.Ao,A.mH,A.ix,A.om,A.fQ,A.e9,A.hQ,A.ij,A.m7,A.kQ,A.rC,A.qf,A.lI,A.Iv,A.vM,A.DT,A.DR,A.Rq,A.Iu,A.E3,A.R0,A.at2,H.atN,A.kp],x.x)
D.eBQ={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hSZ=new C.z6("Switch",F.p9,A.bu,0,"Tap it to turn it ON or OFF.")
D.hSV=new C.z6("Blinker",A.mG,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hSW=new C.z6("AND",D.atR,A.cw,2,"ON only when BOTH inputs are ON.")
D.bX0=new B.a_(63671,"MaterialIcons",!1)
D.hSU=new C.z6("OR",D.bX0,A.bk,2,"ON when EITHER input is ON.")
D.hSX=new C.z6("XOR",A.a4H,A.c6,2,"ON when the inputs are DIFFERENT.")
D.hSR=new C.z6("NAND",A.tU,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bW5=new B.a_(63176,"MaterialIcons",!1)
D.hSS=new C.z6("NOR",D.bW5,A.fL,2,"ON only when BOTH inputs are OFF.")
D.hST=new C.z6("NOT",W.E5,A.cX,1,"Flips the signal: ON becomes OFF.")
D.hSY=new C.z6("Light",A5.lf,A.eL,1,"Glows when its input is ON.")
D.hT_=new C.z6("Buzzer",T.pb,A.c3,1,"Beeps while its input is ON.")
D.B4=new B.bl(D.eBQ,[D.hSZ,D.hSV,D.hSW,D.hSU,D.hSX,D.hSR,D.hSS,D.hST,D.hSY,D.hT_],B.as("bl<o,z6>"))
D.eDF={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.Bw=new C.KK(0,"tv")
D.fxM=new C.mv("Samsung Neo QLED 8K",D.Bw,F.za,A.aH)
D.fxC=new C.mv("LG OLED evo G5",D.Bw,A.eD,A.hK)
D.fxt=new C.mv("Sony Bravia 9",D.Bw,A.tg,A.bv)
D.fxx=new C.mv("Apple TV 4K",D.Bw,A.dW,A.bP)
D.fxu=new C.mv("Bang and Olufsen Beovision",D.Bw,F.Cx,F.wY)
D.ac3=new C.KK(1,"iphone")
D.aVM=new C.mv("iPhone 18 Pro Max",D.ac3,D.an5,A.cj)
D.By=new C.KK(3,"fold")
D.bBf=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fxH=new C.mv("iPhone Fold",D.By,D.bBf,A.b2)
D.Bx=new C.KK(2,"android")
D.fxI=new C.mv("Samsung Galaxy S26 Ultra",D.Bx,F.NE,A.di)
D.btv=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fxA=new C.mv("Samsung Galaxy Z Fold7",D.By,D.btv,A.cJ)
D.fxw=new C.mv("Google Pixel 10 Pro XL",D.Bx,A.d1,A.bh)
D.fxE=new C.mv("Xiaomi 16 Ultra",D.Bx,A.iv,A.ca)
D.fxz=new C.mv("Huawei Mate 80 Pro Max",D.Bx,A.ex,A.aC)
D.fxv=new C.mv("OPPO Find X9 Ultra",D.Bx,A.em,A.bf)
D.fxO=new C.mv("Honor Magic V5",D.By,A.dl,A.cw)
D.fxB=new C.mv("vivo X300 Pro",D.Bx,A.h_,A.cX)
D.aVN=new C.KK(4,"tablet")
D.fxG=new C.mv("iPad Pro M5",D.aVN,A.d1,A.aH)
D.ac4=new C.KK(5,"reader")
D.fxP=new C.mv("Kindle Scribe",D.ac4,A.cU,A.bv)
D.y7=new C.KK(6,"computer")
D.fxF=new C.mv("MacBook Pro M5 Max",D.y7,A.d1,A.cj)
D.fxL=new C.mv("iMac 32 inch",D.y7,A.bP,A.cJ)
D.fxD=new C.mv("Pro Display XDR 8K",D.y7,A.iv,A.be)
D.fxy=new C.mv("Sony Laser Projector",D.y7,A.cx,A.eL)
D.fxJ=new C.mv("Luxury car touchscreen",D.y7,M.nl,A.aC)
D.fxN=new C.mv("Apple Vision Pro",D.y7,A.cz,A.bk)
D.fxK=new C.mv("Apple Watch Ultra",D.By,F.Cx,A.bw)
D.mO=new B.bl(D.eDF,[D.fxM,D.fxC,D.fxt,D.fxx,D.fxu,D.aVM,D.fxH,D.fxI,D.fxA,D.fxw,D.fxE,D.fxz,D.fxv,D.fxO,D.fxB,D.fxG,D.fxP,D.fxF,D.fxL,D.fxD,D.fxy,D.fxJ,D.fxN,D.fxK],B.as("bl<o,mv>"))
D.d8u=w([A.z],x.M)
D.d8Z=w([A.aw,A.aD],x.M)
D.dk4=w([A.aw,A.z,A.aD],x.M)
D.dlQ=w([A.aw,A.lV,A.z,A.lt,A.aD],x.M)
D.dBI=w([A.aw,A.lV,A.a5,A.a9,A.lt,A.aD],x.M)
D.dQB=new B.d2([1,D.d8u,2,D.d8Z,3,D.dk4,4,A.aGI,5,D.dlQ,6,D.dBI],B.as("d2<F,ah<dl>>"))
D.eEt={Calm:0,Box:1,Sleep:2}
D.cPN=w([4,2,6,0],x.n)
D.cPU=w([4,4,4,4],x.n)
D.cPV=w([4,7,8,0],x.n)
D.UW=new B.bl(D.eEt,[D.cPN,D.cPU,D.cPV],B.as("bl<o,ah<G>>"))
D.eC1={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.yK=new C.a2K(0,"source")
D.dld=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hZI=new C.qQ("Clock",A.mG,D.yK,A.bw,D.dld)
D.hZE=new C.qQ("Button",A.E8,D.yK,A.aQ,A.M)
D.dGP=w(["random","quick","slow"],x.s)
D.hZP=new C.qQ("Dice",A.of,D.yK,A.c6,D.dGP)
D.bWD=new B.a_(63484,"MaterialIcons",!1)
D.Gj=new C.a2K(1,"logic")
D.dMk=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hZL=new C.qQ("Delay",D.bWD,D.Gj,A.cw,D.dMk)
D.dxC=w(["fast","mid","slow"],x.s)
D.hZQ=new C.qQ("Echo",A.ati,D.Gj,A.bk,D.dxC)
D.hZN=new C.qQ("Every 2nd",W.E5,D.Gj,A.fL,A.M)
D.bWk=new B.a_(63309,"MaterialIcons",!1)
D.hZK=new C.qQ("Every 3rd",D.bWk,D.Gj,A.aH,A.M)
D.cgZ=w(["50%","25%","75%"],x.s)
D.hZS=new C.qQ("Chance",A8.atT,D.Gj,A.cX,D.cgZ)
D.t4=new C.a2K(2,"out")
D.hZG=new C.qQ("Light",A5.lf,D.t4,A.eL,A.M)
D.hZH=new C.qQ("Burst",A.kp,D.t4,A.c6,A.M)
D.hZF=new C.qQ("Ripple",A.Av,D.t4,A.be,A.M)
D.hZO=new C.qQ("Ball",A.atv,D.t4,A.cX,A.M)
D.hZM=new C.qQ("Comet",A.om,D.t4,A.bk,A.M)
D.bY9=new B.a_(983669,"MaterialIcons",!1)
D.hZR=new C.qQ("Shake",D.bY9,D.t4,A.c3,A.M)
D.hZT=new C.qQ("Pop",A.DQ,D.t4,A.bf,A.M)
D.hZJ=new C.qQ("Wash",A.R4,D.t4,A.pQ,A.M)
D.nx=new B.bl(D.eC1,[D.hZI,D.hZE,D.hZP,D.hZL,D.hZQ,D.hZN,D.hZK,D.hZS,D.hZG,D.hZH,D.hZF,D.hZO,D.hZM,D.hZR,D.hZT,D.hZJ],B.as("bl<o,qQ>"))
D.eCs={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bE2=new C.h9(20,4,13,!1)
D.bEt=new C.h9(14,5,13.5,!1)
D.bEk=new C.h9(9,2.4,10,!1)
D.bEy=new C.h9(7,5,12.5,!1)
D.bEn=new C.h9(8,3.5,12,!1)
D.bDZ=new C.h9(15,2,6,!1)
D.bEw=new C.h9(45,6,13.5,!0)
D.bEe=new C.h9(10,8,13.5,!1)
D.bE6=new C.h9(25,3,12,!0)
D.bEc=new C.h9(35,4,12,!0)
D.bEd=new C.h9(40,4.5,9.5,!0)
D.bEf=new C.h9(55,3,9,!0)
D.bE_=new C.h9(18,3,9,!1)
D.bEv=new C.h9(22,4,13.5,!1)
D.bEo=new C.h9(16,5,13.5,!1)
D.bEa=new C.h9(30,4,9,!0)
D.bEH=new C.h9(5,3.5,13,!1)
D.bEi=new C.h9(25,3,13.5,!0)
D.bEr=new C.h9(14,2.5,9,!1)
D.bEh=new C.h9(6,6,13,!1)
D.bEz=new C.h9(30,1.2,5,!0)
D.bEG=new C.h9(35,3,4.5,!0)
D.bEC=new C.h9(20,4.5,7.5,!0)
D.bEg=new C.h9(55,5.5,13.5,!0)
D.bDY=new C.h9(45,5.5,13.5,!0)
D.bEs=new C.h9(40,5.5,13.5,!0)
D.bEF=new C.h9(60,6,13.5,!0)
D.anB=new C.h9(28,4,7,!0)
D.HL=new C.h9(25,4,7,!0)
D.bE9=new C.h9(30,4,7,!0)
D.bE4=new C.h9(22,4,7,!0)
D.bE5=new C.h9(24,4,7,!0)
D.bEj=new C.h9(60,3,5.5,!0)
D.bE0=new C.h9(18,9,14,!0)
D.bE7=new C.h9(25,9,14,!0)
D.anC=new C.h9(30,8,14,!0)
D.bE3=new C.h9(20,8,14,!0)
D.bEb=new C.h9(30,9,14,!0)
D.bEA=new C.h9(22,5,9.5,!0)
D.bE1=new C.h9(30,2.5,10.5,!0)
D.bEp=new C.h9(50,5.5,13.5,!0)
D.bEE=new C.h9(12,2,9.5,!1)
D.bEm=new C.h9(16,1.3,9.5,!0)
D.bEx=new C.h9(40,2.5,7,!0)
D.bED=new C.h9(60,1.2,4.8,!0)
D.bEB=new C.h9(18,5,13.5,!0)
D.bEu=new C.h9(8,2,9.5,!1)
D.bEl=new C.h9(12,2.5,8,!1)
D.bE8=new C.h9(20,3.5,13.5,!0)
D.bEq=new C.h9(3.5,3,13,!1)
D.B5=new B.bl(D.eCs,[D.bE2,D.bEt,D.bEk,D.bEy,D.bEn,D.bDZ,D.bEw,D.bEe,D.bE6,D.bEc,D.bEd,D.bEf,D.bE_,D.bEv,D.bEo,D.bEa,D.bEH,D.bEi,D.bEr,D.bEh,D.bEz,D.bEG,D.bEC,D.bEg,D.bDY,D.bEs,D.bEF,D.anB,D.HL,D.bE9,D.HL,D.bE4,D.HL,D.bE5,D.anB,D.HL,D.bEj,D.bE0,D.bE7,D.anC,D.bE3,D.bEb,D.bEA,D.bE1,D.bEp,D.bEE,D.bEm,D.bEx,D.bED,D.HL,D.anC,D.bEB,D.bEu,D.bEl,D.bE8,D.bEq],B.as("bl<o,h9>"))
D.eBZ={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.fjk=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eXS=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eXN=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.f9Z=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.faX=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.f9V=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eVN=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.f7D=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.fjt=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.fbj=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.f0q=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eVr=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.f_p=new B.y("Movement","They pull your legs together and help you balance.")
D.f1r=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eY0=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.fgu=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.fhR=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.f7n=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.fhz=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.f5P=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.fbr=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eVy=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.f1P=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.fb5=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.f6c=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.fhI=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.f9m=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eVL=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.fc4=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.fg4=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.fe0=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eTL=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.f93=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.f98=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.f2B=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eYi=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.f1d=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.f7R=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.feU=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.fjp=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.fbo=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eTq=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.f83=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eUk=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.ff9=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.fgq=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.f8w=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.ffq=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eVA=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.fhc=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eZK=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.few=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.f2f=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.f66=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.fbK=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.fhn=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.fhe=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.fhi=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.f6G=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.fcJ=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.fdY=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.fgU=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.f8v=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.f4l=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.f33=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.f8Y=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.fbD=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.f4V=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.f5C=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.f_8=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.fgm=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.f0_=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eUh=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.f2A=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eUc=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eYO=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.f2F=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.f08=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.fc0=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.f1u=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.fj5=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.f3d=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.f6y=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.f9v=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.f0i=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.f01=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dRL=new B.bl(D.eBZ,[D.fjk,D.eXS,D.eXN,D.f9Z,D.faX,D.f9V,D.eVN,D.f7D,D.fjt,D.fbj,D.f0q,D.eVr,D.f_p,D.f1r,D.eY0,D.fgu,D.fhR,D.f7n,D.fhz,D.f5P,D.fbr,D.eVy,D.f1P,D.fb5,D.f6c,D.fhI,D.f9m,D.eVL,D.fc4,D.fg4,D.fe0,D.eTL,D.f93,D.f98,D.f2B,D.eYi,D.f1d,D.f7R,D.feU,D.fjp,D.fbo,D.eTq,D.f83,D.eUk,D.ff9,D.fgq,D.f8w,D.ffq,D.eVA,D.fhc,D.eZK,D.few,D.f2f,D.f66,D.fbK,D.fhn,D.fhe,D.fhi,D.f6G,D.fcJ,D.fdY,D.fgU,D.f8v,D.f4l,D.f33,D.f8Y,D.fbD,D.f4V,D.f5C,D.f_8,D.fgm,D.f0_,D.eUh,D.f2A,D.eUc,D.eYO,D.f2F,D.f08,D.fc0,D.f1u,D.fj5,D.f3d,D.f6y,D.f9v,D.f0i,D.f01],B.as("bl<o,+(o,o)>"))
D.e_E=new C.Ww(null)
D.e_R=new C.Wx(null)
D.e1V=new C.WD(null)
D.e6L=new C.Xd(null)
D.e6P=new C.Xe(null)
D.e7n=new C.Xm(null)
D.ebi=new C.XZ(null)
D.ecf=new C.Y_(null)
D.egs=new C.Y5(null)
D.ewl=new C.Y6(null)
D.ewo=new C.Yb(null)
D.eyy=new C.Yv(null)
D.eyz=new C.aaP(null)
D.eAC=new C.YE(null)
D.eEI=new B.m(0,118)
D.eEJ=new B.m(0,13)
D.eEK=new B.m(0,17)
D.eEN=new B.m(0,330)
D.eEU=new B.m(0,-17)
D.eEV=new B.m(0,-18)
D.eEW=new B.m(0,-19)
D.eEY=new B.m(0,-28)
D.eF_=new B.m(0,-31)
D.eF0=new B.m(0,-32)
D.eF6=new B.m(-9.5,-11)
D.eF9=new B.m(10,20)
D.eFc=new B.m(10,-13)
D.eFe=new B.m(10,-22)
D.eFf=new B.m(10,-4)
D.eFj=new B.m(11,0)
D.aaR=new B.m(11,8)
D.eFp=new B.m(12,2)
D.eFq=new B.m(14,0)
D.eFr=new B.m(14,12)
D.aPb=new B.m(14,8)
D.eFs=new B.m(14,-17)
D.aPd=new B.m(14,-3)
D.aPe=new B.m(14,-4)
D.eFv=new B.m(15,0)
D.eFw=new B.m(15,-12)
D.eFz=new B.m(16,-8)
D.eFA=new B.m(18,14)
D.aPk=new B.m(20,0)
D.eFI=new B.m(20,15)
D.eFJ=new B.m(20,-3)
D.eFK=new B.m(21,8)
D.eFL=new B.m(21,-36)
D.eFP=new B.m(22,10)
D.aPm=new B.m(22,8)
D.eFQ=new B.m(22,-25)
D.eFR=new B.m(24,0)
D.eFS=new B.m(24,2)
D.eFV=new B.m(24,-18)
D.eFW=new B.m(24,-22)
D.eG_=new B.m(25,8)
D.eG0=new B.m(26,0)
D.eG4=new B.m(28,-30)
D.eGb=new B.m(30,18)
D.eGc=new B.m(30,2)
D.eGf=new B.m(31,19)
D.eGh=new B.m(32,0)
D.aPq=new B.m(34,0)
D.aPr=new B.m(34,-32)
D.KL=new B.m(36,0)
D.eGu=new B.m(3,-1)
D.eGx=new B.m(40,3)
D.eGL=new B.m(4,11)
D.eGO=new B.m(4,-2)
D.eGS=new B.m(5,0)
D.eGT=new B.m(5,17)
D.eGU=new B.m(5,6)
D.eGZ=new B.m(6,11)
D.eH0=new B.m(7,-19)
D.eH6=new B.m(8,7)
D.eH7=new B.m(8,-10)
D.eH8=new B.m(8,-14)
D.aPw=new B.m(9,0)
D.eHj=new B.m(-20.5,-17.6)
D.eHm=new B.m(-2.6,-1)
D.eHw=new B.m(2.6,1)
D.eHF=new B.m(-9,12.2)
D.eIi=new B.m(-10,12)
D.aPF=new B.m(-10,4)
D.eIm=new B.m(-11,0)
D.eIo=new B.m(-11,-34)
D.eIs=new B.m(-12,-5)
D.eIt=new B.m(-14,0)
D.eIu=new B.m(-14,13)
D.eIv=new B.m(-14,-19)
D.eIx=new B.m(-14,-23)
D.eIy=new B.m(-15,6)
D.eIB=new B.m(-16,14)
D.eID=new B.m(-16,-8)
D.eIE=new B.m(-17,10)
D.eIF=new B.m(-17,-18)
D.eIG=new B.m(-17,-8)
D.eII=new B.m(-18,20)
D.eIJ=new B.m(-18,-9)
D.aPI=new B.m(-20,0)
D.eIL=new B.m(-20,16)
D.eIM=new B.m(-20,-9)
D.VS=new B.m(-22,8)
D.eIN=new B.m(-22,-10)
D.eIO=new B.m(-24,10)
D.eIP=new B.m(-24,11)
D.eIQ=new B.m(-24,14)
D.eIR=new B.m(-24,-22)
D.eIT=new B.m(-25,-11)
D.eIU=new B.m(-26,0)
D.eIV=new B.m(-26,-18)
D.eIW=new B.m(-27,-24)
D.eIX=new B.m(-28,-36)
D.eIY=new B.m(-2,9)
D.eIZ=new B.m(-2,-10)
D.eJ_=new B.m(-2,-20)
D.eJ2=new B.m(-2,-9)
D.eJ4=new B.m(-32,0)
D.aPK=new B.m(-34,0)
D.eJ9=new B.m(-40,3)
D.eJb=new B.m(-4,11)
D.eJc=new B.m(-4,-17)
D.eJd=new B.m(-4,-2)
D.eJh=new B.m(-5,0)
D.eJi=new B.m(-5,20)
D.eJj=new B.m(-5,6)
D.eJk=new B.m(-6,6)
D.eJl=new B.m(-6,-42)
D.aPM=new B.m(-7,-19)
D.eJn=new B.m(-7,-24)
D.eJo=new B.m(-8,-1)
D.eJr=new B.m(-8,-9)
D.ab0=new B.m(-9,0)
D.eJs=new B.m(-9,1)
D.eJu=new B.m(-9,-23)
D.h56=new B.D("Thinking\u2026",null,N.hJ,null,null,null,null,null,null,null,null,null)
D.eKw=new B.C(A.jE,D.h56,null)
D.hmi=new B.D("Start from a ready-made board",null,A.fK,null,null,null,null,null,null,null,null,null)
D.eKL=new B.C(A.vp,D.hmi,null)
D.bM7=new B.R(4,0,4,14)
D.h06=new B.H(!0,A.aE,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h67=new B.D("Games and little helpers for a spare minute.",null,D.h06,null,null,null,null,null,null,null,null,null)
D.eKZ=new B.C(D.bM7,D.h67,null)
D.dyj=w([A.hX,A.bl],x.O)
D.eSc=new B.bV(A.z,0.5,A.w,null,0,D.dyj,null,null)
D.eSd=new B.bV(A.z,0.5,A.w,null,0,D.aGn,null,null)
D.dnV=w([A.c,A.bQ],x.O)
D.eSf=new B.bV(A.z,0.5,A.w,null,0,D.dnV,null,null)
D.dI_=w([A.bP,A.cz],x.O)
D.aUE=new B.bV(A.z,0.5,A.w,null,0,D.dI_,null,null)
D.d_7=w([A.c,A.bP],x.O)
D.eSk=new B.bV(A.n1,0.5,A.w,null,0,D.d_7,null,null)
D.bBj=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dFP=w([A.fy,D.bBj],x.O)
D.eSp=new B.bV(A.n1,0.5,A.w,null,0,D.dFP,null,null)
D.cT1=w([A.d1,A.cx],x.O)
D.eSq=new B.bV(A.z,0.5,A.w,null,0,D.cT1,null,null)
D.d7e=w([A.hb,A.aQ,A.de],x.O)
D.eSt=new B.bV(A.n1,0.5,A.w,null,0,D.d7e,null,null)
D.dz4=w([A.cz,M.nl],x.O)
D.eSu=new B.bV(A.n1,0.5,A.w,null,0,D.dz4,null,null)
D.eSz=new B.bV(A.z,0.5,A.w,null,0,D.aCx,null,null)
D.dIX=w([A.cz,A.iq],x.O)
D.eSH=new B.bV(A.z,0.5,A.w,null,0,D.dIX,null,null)
D.dhh=w([A.iM,A.bl],x.O)
D.eSK=new B.bV(A.n1,0.5,A.w,null,0,D.dhh,null,null)
D.aUJ=new B.aQ(9,9)
D.eSQ=new B.aQ(1.4,1.4)
D.eSS=new B.aQ(2.5,2.5)
D.fud=new B.a5(10,-8,18,-2)
D.fue=new B.a5(14,-14,20,14)
D.fug=new B.a5(20,-2,30,2)
D.ful=new B.a5(4,-13,30,-3)
D.fur=new B.a5(8,-7,12,7)
D.fuF=new B.a5(-12,12,12,19)
D.fuG=new B.a5(-12,14,12,22)
D.fuH=new B.a5(-12,-22,12,8)
D.fuI=new B.a5(-12,-25,12,19)
D.fuJ=new B.a5(-12,-26,12,-6)
D.fuK=new B.a5(-12,-4,12,14)
D.fuM=new B.a5(-14,20,14,24)
D.fuN=new B.a5(-14,6,14,10)
D.fuO=new B.a5(-14,-17,14,15)
D.fuP=new B.a5(-14,-26,14,18)
D.fuQ=new B.a5(-14,-26,14,-14)
D.fuR=new B.a5(-14,-4,14,20)
D.fuT=new B.a5(-15,-29,15,25)
D.fuU=new B.a5(-16,-16,16,16)
D.fuX=new B.a5(-16,-22,-9,18)
D.fuY=new B.a5(-16,-24,16,-10)
D.fv_=new B.a5(-16,-2,16,20)
D.fv1=new B.a5(-18,20,18,24)
D.fv2=new B.a5(-18,-18,18,20)
D.fv3=new B.a5(-20,12,20,22)
D.fv4=new B.a5(-20,-28,20,26)
D.fv5=new B.a5(-22,15,22,19)
D.aVs=new B.a5(-22,-26,22,24)
D.fv7=new B.a5(-24,-12,10,22)
D.fv8=new B.a5(-24,-14,22,8)
D.fv9=new B.a5(-24,-6,24,20)
D.aVt=new B.a5(-24,-9,24,9)
D.fva=new B.a5(-25,14,25,19)
D.fvb=new B.a5(-26,-14,14,8)
D.fvc=new B.a5(-26,-4,26,20)
D.fvd=new B.a5(-26,-6,4,6)
D.aVu=new B.a5(-28,-13,28,13)
D.fve=new B.a5(-28,-16,28,16)
D.fvf=new B.a5(-28,-16,28,8)
D.fvg=new B.a5(-28,-22,28,22)
D.fvh=new B.a5(-29,-11,29,11)
D.fvi=new B.a5(-30,-12,30,14)
D.fvj=new B.a5(-30,-14,0,14)
D.fvk=new B.a5(-30,-18,30,20)
D.fvl=new B.a5(-30,-28,30,14)
D.fvm=new B.a5(-30,-2,30,18)
D.fvn=new B.a5(-30,-4,30,18)
D.fvo=new B.a5(-32,-17,32,17)
D.fvp=new B.a5(-32,-28,32,18)
D.fvq=new B.a5(-33,-21,33,17)
D.fvr=new B.a5(-34,0,34,10)
D.fvs=new B.a5(-34,14,34,26)
D.abV=new B.a5(-34,-18,34,18)
D.fvt=new B.a5(-36,-24,36,20)
D.fvu=new B.a5(-38,-22,38,22)
D.fvw=new B.a5(-3,12,3,22)
D.fvx=new B.a5(-3,5,3,15)
D.fvB=new B.a5(-46,-34,46,28)
D.fvD=new B.a5(-48,-3,48,3)
D.fvG=new B.a5(-6,18,24,24)
D.fvH=new B.a5(-6,5,6,12)
D.fvI=new B.a5(-6,-22,6,-15)
D.fvM=new B.a5(-9,-16,9,22)
D.fvN=new B.a5(-4.5,-24,4.5,-21.2)
D.fvP=new B.a5(14,-9,17.5,9)
D.eDP={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aWB=new B.dd(D.eDP,5,x.Q)
D.eDh={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fzv=new B.dd(D.eDh,10,x.Q)
D.fBR=new B.av(24,44)
D.fCe=new B.av(54,38)
D.fCk=new B.av(66,38)
D.biM=new B.fp(2,null,null,null,null,A.bk,null,null,null,null)
D.fDp=new B.a4(16,16,D.biM,null)
D.aXG=new B.i_(3,12,12,0.82,null)
D.fQs=new B.H(!0,A.wU,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKK=new B.eG("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cV,null,null,null,null,null,null,D.fQs)
D.fVF=new B.H(!0,A.l4,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKQ=new B.eG("AI",null,null,A.cV,null,null,null,null,null,null,D.fVF)
D.fL7=new B.H(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLF=new B.H(!0,A.br,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM2=new B.H(!0,A.cw,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMW=new B.H(!0,A.c,null,null,null,null,13.5,A.C,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNs=new B.H(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAg=new B.d4(A.i0,A.dP,6)
D.drh=w([D.fAg],B.as("N<d4>"))
D.fOt=new B.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.drh,null,null,null)
D.fOy=new B.H(!0,A.ej,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOD=new B.H(!0,A.bX,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPg=new B.H(!0,A.bX,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPo=new B.H(!0,A.aE,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQo=new B.H(!0,A.bX,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQw=new B.H(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR2=new B.H(!0,A.aE,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRy=new B.H(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRB=new B.H(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aGL,null,null,null)
D.fRI=new B.H(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSs=new B.H(!0,A.bF,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTA=new B.H(!0,A.vc,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUe=new B.H(!0,A.bO,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUn=new B.H(!0,A.aE,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVa=new B.H(!0,A.ms,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVl=new B.H(!0,A.cz,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZY=new B.H(!0,A.c,null,null,null,null,9.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWw=new B.H(!0,A.j1,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWQ=new B.H(!0,A.bX,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXn=new B.H(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYW=new B.H(!0,A.v,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZs=new B.H(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZK=new B.H(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_7=new B.H(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_a=new B.H(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0n=new B.H(!0,A.vc,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0K=new B.H(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOG=new B.H(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h18=new B.D("\u26a0\ufe0f ",null,D.fOG,null,null,null,null,null,null,null,null,null)
D.h1l=new B.D("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,Z.yo,null,null,null,null,null,null,null,null,null)
D.h30=new B.D("Pick one, then change it and see what happens.",null,Z.yo,null,null,null,null,null,null,null,null,null)
D.fPU=new B.H(!0,A.ab,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h42=new B.D("What do you want to invent? Type it below, or tap an idea.",null,D.fPU,null,null,null,null,null,null,null,null,null)
D.fU9=new B.H(!0,A.c3,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4A=new B.D("Burnt out! Press Repair.",null,D.fU9,null,null,null,null,null,null,null,null,null)
D.h5I=new B.D("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.h6l=new B.D("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h6,null,null,null,null,null,null,null,null,null)
D.h7_=new B.D("Make it yours",null,A.jr,null,null,null,null,null,null,null,null,null)
D.haf=new B.D("5G",null,A4.aZg,null,null,null,null,null,null,null,null,null)
D.hbg=new B.D("Pick how big the screen is on the board",null,N.hJ,null,null,null,null,null,null,null,null,null)
D.fX7=new B.H(!0,A.bX,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbs=new B.D("WHAT HAPPENS",null,D.fX7,null,null,null,null,null,null,null,null,null)
D.hdd=new B.D("Check",null,null,null,null,null,null,null,null,null,null,null)
D.hdT=new B.D("Change the words and pictures on the three slabs.",null,Z.yo,null,null,null,null,null,null,null,null,null)
D.he5=new B.D("All the parts and wires will be removed.",null,A.hI,null,null,null,null,null,null,null,null,null)
D.heq=new B.D("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.hf0=new B.D("Tap the crank on the board again and again to spin it faster.",null,N.hJ,null,null,null,null,null,null,null,null,null)
D.hgf=new B.D("\ud83c\udfaf Challenges",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hgM=new B.D("Remove this part",null,A2.aYR,null,null,null,null,null,null,null,null,null)
D.hh6=new B.D("Clear the board?",null,A.du,null,null,null,null,null,null,null,null,null)
D.fWx=new B.H(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hho=new B.D("How the Lab works",null,D.fWx,null,null,null,null,null,null,null,null,null)
D.fN8=new B.H(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hhJ=new B.D("Electronics Lab",null,D.fN8,null,null,null,null,A.a2,null,1,null,null)
D.hhN=new B.D("?",null,R.b_u,null,null,null,null,null,null,null,null,null)
D.hja=new B.D("Ready-made circuits",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hjQ=new B.D("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,N.hJ,null,null,null,null,null,null,null,null,null)
D.fZP=new B.H(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hns=new B.D("\u26a0 There is no air here, so a parachute will not work.",null,D.fZP,null,null,null,null,null,null,null,null,null)
D.hoD=new B.D("Download the scene (GIF)",null,A.cL,null,null,null,null,null,null,null,null,null)
D.hoG=new B.D("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,A2.aYM,null,null,null,null,null,null,null,null,null)
D.hpd=new B.D("NGMY",null,A.wt,null,null,null,null,null,null,null,null,null)
D.hpr=new B.D("You build a machine. A little light runs along the wires, and every part it touches does something.",null,Ai.M0,null,null,null,null,null,null,null,null,null)
D.hpQ=new B.D("Tap it to change its setting. Drag from the right dot to connect.",null,A.mg,null,null,null,null,null,null,null,null,null)
D.hqX=new B.D("TOOLBOX",null,Af.adi,null,null,null,null,null,null,null,null,null)
D.hPq=new B.b9("electronics-part-card",x.W)
D.hPs=new B.b9("device-learn-more",x.W)
D.hPy=new B.b9("device-remote",x.W)
D.hPD=new B.b9("device-picture",x.W)
D.hQl=new B.b9("electronics-part-about",x.W)
D.hQs=new B.b9("body-loading",x.W)
D.hQy=new B.b9("device-fullscreen",x.W)
D.hQV=new B.b9("core-protocol-back",x.W)
D.hR_=new B.b9("core-protocol-title-frame",x.W)})();(function staticFields(){$.hJZ=null
$.hJV=null
$.hJW=null
$.hR3=0
$.ikc=B.S(x.N,B.as("iU"))
$.ikM=B.S(x.N,B.as("iU"))
$.aRP=B.S(x.N,B.as("iU"))
$.hMM=A.aA})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"iTR","bKp",()=>{var u="led"
return B.a([C.aBW("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fEl(),u),C.aBW("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fEm(),u),C.aBW("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fEn(),u),C.aBW("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fEu(),u),C.aBW("Not both","Make the light go OFF only when both switches are ON.",2,new C.fEv(),u),C.aBW("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fEw(),"buzzer")],B.as("N<bg_>"))})
w($,"iUi","bKq",()=>B.a([C.S7("UNIVERSE","Earth, space and gravity",A.Rt,A.aH,new C.fEM()),C.S7("ELECTRONICS LAB","Batteries, wires, real circuits",Ao.vC,A.aH,new C.fEN()),C.S7("DISCOVERY LAB","Body Explorer: a real 3D human",D.bVx,A.bf,new C.fEO()),C.S7("TOOLBOX","Converter, clock, games",H.ast,A.cX,new C.fEP()),C.S7("REACTION LAB","Wire parts together",A.Ec,A.bw,new C.fEQ()),C.S7("SPARK PAINTER","Paint with light",A.It,A.c6,new C.fER()),C.S7("ROCKET LANDER","Land softly on the pad",A.om,A.aH,new C.fES()),C.S7("TITLE ANIMATOR","Make a moving title",A.xG,A.bu,new C.fET()),C.S7("CIRCUIT LAB","Connect logic, learn it",A.a54,A.cw,new C.fEU())],B.as("N<byx>")))
w($,"iW6","r1",()=>{var u,t,s=B.S(x.N,x.C)
for(u=0;u<76;++u){t=D.Ud[u]
s.n(0,t.a,t)}return s})
v($,"ip_","i_d",()=>B.aqy(0))
w($,"iTz","i_e",()=>{var u=B.ctn()
u.seD(0,A.c.j(0.06))
u.c=2.2
u.d=A.bH
return u})
w($,"iTS","akH",()=>B.a([C.GY("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fEx()),C.GY("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fEy()),C.GY("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fEz()),C.GY("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fEA()),C.GY("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fEB()),C.GY("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fEo()),C.GY("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fEp()),C.GY("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fEq()),C.GY("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fEr()),C.GY("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fEs()),C.GY("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fEt())],B.as("N<bg0>")))
w($,"iUk","i_I",()=>B.a([C.a3h("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.ca,new C.fF1()),C.a3h("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c3,A.bC,new C.fF2()),C.a3h("Breathe","Calm down in a minute","\ud83e\udee7",A.fL,A.cJ,new C.fF3()),C.a3h("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b2,new C.fF4()),C.a3h("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.cj,new C.fF5()),C.a3h("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.bh,new C.fF6()),C.a3h("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.b8,new C.fF7()),C.a3h("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bk,A.aB,new C.fF8())],B.as("N<bzR>")))})()};
(a=>{a["0lVzNM0vdIfhp5o2Kn64Qt31YuY="]=a.current})($__dart_deferred_initializers__);