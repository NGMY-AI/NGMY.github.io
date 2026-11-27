((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,W,A9,A5,N,Aa,A6,Ab,A7,X,P,Y,Ac,O,Ad,Ae,Af,Ag,Ah,Ai,Aj,Ak,Al,Z,U,Am,Q,An,A_,R,S,A0,T,A1,Ao,E,I,G,L,Ap,Aq,Ar,A8,C={
bEP(d){return C.imt(d)},
imt(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bEP=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.qW(B.nj(""),d,A.i6,null,null).d8(0,At.a1H),$async$bEP)
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
return B.i($async$bEP,v)},
iyY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.TA[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cX(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fj(D.TA,new C.fVI())
if(w==null)w=A.d.gH(D.TA)
s=B.S(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.qZ().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.amF(w.a,w.b,m,w,s,!1)},
isr(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.O(D.U0,new C.fJM(),x.bd).aK(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iHs(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.c9(b2,"{")
v=A.a.os(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.V.aN(0,A.a.av(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aP(a6.a(J.t(u,"parts"))),a8=x.i;a7.B();){q=a7.gP(a7)
p=B.v(J.t(q,"kind"))
o=B.v(J.t(q,"id"))
if(!$.qZ().am(0,p)||J.eG(s,o)||J.aa(t)>=8)continue
J.c_(s,o)
n=B.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.dIp[a9]
l=J.t(q,m)
if(typeof l=="number")J.aL(n,m,l)}k=A.h.D(typeof J.t(q,"x")=="number"?B.dC(J.t(q,"x")):0.2+A.h.F(r,3)*0.3,0.16,0.84)
j=A.h.D(typeof J.t(q,"y")=="number"?B.dC(J.t(q,"y")):0.25+A.h.ao(r,3)*0.3,0.1,0.9)
J.c_(t,new B.e1([o,p,k,j,n]));++r}if(J.aa(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aP(a6.a(J.t(u,"wires")));a5.B();){h=a5.gP(a5)
g=a6.a(h)
if(J.aa(g)<4)continue
f=B.v(J.t(g,0))
e=B.v(J.t(g,2))
d=A.n.D(A.h.M(B.dC(J.t(g,1))),0,1)
a0=A.n.D(A.h.M(B.dC(J.t(g,3))),0,1)
if(J.eG(s,f)&&J.eG(s,e)&&!J.z(f,e))J.c_(i,new B.b7([f,d,e,a0]))}if(J.aa(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.R.a(J.t(u,"steps"))
a0=J.aP(a0==null?A.bN:a0)
while(a0.B()){a2=a0.gP(a0)
J.c_(a1,B.v(a2))}a3=a1
a0=J.t(u,"title")
a0=B.v(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.nh(a0,B.v(a1==null?"":a1),t,i,A.M)
a0=a4.a
a1=a4.b
d=J.aa(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.v(a5==null?"":a5)
return new C.amF(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ixr(d){var w,v,u=C.hz0()
d.C(u)
for(w=0;w<60;++w)u.w6(0,0.03333333333333333)
v=u.a
return A.d.aR(v,new C.fRH(u))&&!A.d.cC(v,new C.fRI())},
ixq(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qZ().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.v(t.e)+" V")
if(p==="resistor")q.push(""+A.h.S(t.r)+" ohms")
if(A.d.q(D.dGr,p))q.push("level "+A.h.S(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.h.S(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aK(q,", ")+")"
s.push(B.v(p)+n+": "+o+", current "+A.h.a1(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aK(s,"\n")+"\nWires: "+A.d.aK(l,"; ")},
ikV(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aK(v,"\n")+"\n\n"}v=A.d.aK(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
iyX(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qZ().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.U0[u]
if(A.d.aR(w,new C.fVF(s)))if(!B.cX(r,s.b.toLowerCase(),0))v=B.cX(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fVG(e),B.T(w).k("X<1>")).gar(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.h.a1(A.d.cG(w,0,new C.fVH())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qZ().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
amF:function amF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fVI:function fVI(){},
fJM:function fJM(){},
fRH:function fRH(d){this.a=d},
fRI:function fRI(){},
fVF:function fVF(d){this.a=d},
fVG:function fVG(d){this.a=d},
fVH:function fVH(){},
XE:function XE(d,e){this.c=d
this.a=e},
bp1:function bp1(d,e,f,g,h){var _=this
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
eqg:function eqg(d){this.a=d},
eqh:function eqh(d,e,f){this.a=d
this.b=e
this.c=f},
eqi:function eqi(d){this.a=d},
eqt:function eqt(d){this.a=d},
equ:function equ(d,e){this.a=d
this.b=e},
eqp:function eqp(d){this.a=d},
eqn:function eqn(d,e){this.a=d
this.b=e},
eqo:function eqo(d,e,f){this.a=d
this.b=e
this.c=f},
eqq:function eqq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eql:function eql(d){this.a=d},
eqm:function eqm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqr:function eqr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eqk:function eqk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqs:function eqs(d,e){this.a=d
this.b=e},
eqj:function eqj(d,e){this.a=d
this.b=e},
eqx:function eqx(d){this.a=d},
eqw:function eqw(d){this.a=d},
eqy:function eqy(d){this.a=d},
eqv:function eqv(d){this.a=d},
eqz:function eqz(d,e){this.a=d
this.b=e},
eqA:function eqA(d,e){this.a=d
this.b=e},
eqB:function eqB(d,e){this.a=d
this.b=e},
eqC:function eqC(d,e){this.a=d
this.b=e},
bFb(d,e,f){var w=null
return B.w(B.a([B.c(d,w,w,w,w,w,w,D.fMC,w,w,w),B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hNm(d,e,f,g){var w=null,v=B.n(24),u=B.K(f.j(0.6),A.r,1)
return B.at(B.q(w,B.w(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aj,B.c(e,w,w,w,w,w,w,A.BH,A.K,w,w),A.aB,B.bY(A.fX,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(D.ble,w,u,v,w,w,A.m),w,w,w,w,A.ae,w,w,w),w,w,w)},
Ho:function Ho(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vQ:function vQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y0:function Y0(d){this.a=d},
aHZ:function aHZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.hg$=h
_.mk$=i
_.fh$=j
_.hh$=k
_.bv$=l
_.ab$=m
_.c=_.a=null},
eFO:function eFO(){},
eG7:function eG7(d){this.a=d},
eG6:function eG6(d,e){this.a=d
this.b=e},
eG8:function eG8(){},
eG9:function eG9(){},
eFQ:function eFQ(d,e,f){this.a=d
this.b=e
this.c=f},
eFP:function eFP(d,e){this.a=d
this.b=e},
eFF:function eFF(d){this.a=d},
eFG:function eFG(d){this.a=d},
eFH:function eFH(d){this.a=d},
eFI:function eFI(d){this.a=d},
eFJ:function eFJ(d){this.a=d},
eFK:function eFK(d){this.a=d},
eFL:function eFL(d){this.a=d},
eFM:function eFM(d){this.a=d},
eFN:function eFN(d){this.a=d},
eFD:function eFD(d){this.a=d},
eFE:function eFE(d){this.a=d},
eFC:function eFC(d){this.a=d},
eG0:function eG0(d,e){this.a=d
this.b=e},
eFW:function eFW(d){this.a=d},
eFX:function eFX(d){this.a=d},
eFT:function eFT(d){this.a=d},
eFY:function eFY(d){this.a=d},
eFS:function eFS(d){this.a=d},
eFZ:function eFZ(d){this.a=d},
eG_:function eG_(d){this.a=d},
eFR:function eFR(d){this.a=d},
eG1:function eG1(d,e){this.a=d
this.b=e},
eFV:function eFV(d,e){this.a=d
this.b=e},
eG2:function eG2(d){this.a=d},
eG3:function eG3(d){this.a=d},
eG4:function eG4(d){this.a=d},
eG5:function eG5(d){this.a=d},
eFU:function eFU(d){this.a=d},
blU:function blU(d,e){this.b=d
this.a=e},
aQ5:function aQ5(){},
bCN:function bCN(){},
hI6(){var w=$.hI4
return w==null?$.hI4=$.oV().d07("assets/data/three.min.js"):w},
hI5(){var w=$.hI3
return w==null?$.hI3=C.cT3():w},
cT3(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cT3=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.oV().iA(0,"assets/data/body3d.bin"),$async$cT3)
case 3:d=a1
$.hI7=J.eB(A.dM.gaS(d),d.byteOffset,d.byteLength)
t=B.U2(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.k0(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dtk[i]
g=B.b_((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a5A(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b87))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.beK(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cT3,v)},
c9P(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c9P=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.hc(B.a([C.hI5(),C.hI6()],x.D),x.K),$async$c9P)
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
return B.i($async$c9P,v)},
aWm:function aWm(d,e,f){this.a=d
this.b=e
this.c=f},
a5A:function a5A(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
beK:function beK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Wr:function Wr(d){this.a=d},
aGo:function aGo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.hg$=s
_.mk$=t
_.fh$=u
_.hh$=v
_.bv$=w
_.ab$=a0
_.c=_.a=null},
dUX:function dUX(d){this.a=d},
dUW:function dUW(d,e){this.a=d
this.b=e},
dUx:function dUx(d){this.a=d},
dUy:function dUy(d,e){this.a=d
this.b=e},
dUz:function dUz(d){this.a=d},
dUA:function dUA(){},
dUY:function dUY(){},
dUB:function dUB(d,e){this.a=d
this.b=e},
dUC:function dUC(d){this.a=d},
dUD:function dUD(){},
dUE:function dUE(d){this.a=d},
dUG:function dUG(d,e){this.a=d
this.b=e},
dUF:function dUF(d){this.a=d},
dUu:function dUu(d,e,f){this.a=d
this.b=e
this.c=f},
dUv:function dUv(d){this.a=d},
dUw:function dUw(d){this.a=d},
dUN:function dUN(d){this.a=d},
dUO:function dUO(d,e){this.a=d
this.b=e},
dUP:function dUP(d,e){this.a=d
this.b=e},
dUQ:function dUQ(d){this.a=d},
dUM:function dUM(d,e){this.a=d
this.b=e},
dUR:function dUR(d,e){this.a=d
this.b=e},
dUL:function dUL(d,e){this.a=d
this.b=e},
dUS:function dUS(d){this.a=d},
dUK:function dUK(d){this.a=d},
dUT:function dUT(d){this.a=d},
dUJ:function dUJ(d){this.a=d},
dUU:function dUU(d){this.a=d},
dUI:function dUI(d){this.a=d},
dUV:function dUV(d){this.a=d},
dUH:function dUH(d){this.a=d},
aP9:function aP9(){},
aPa:function aPa(){},
c9Q:function c9Q(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c9R:function c9R(d,e){this.a=d
this.b=e},
c9S:function c9S(d){this.a=d},
aBF(d,e,f,g,h){return new C.bfy(d,e,f,g,h)},
hoM(d,e,f,g,h,i){return $.ii5.c0(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.d_e(d,e,f,i,g,h))},
z3:function z3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dr:function Dr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
o6:function o6(d,e,f){this.a=d
this.b=e
this.c=f},
bfy:function bfy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fCN:function fCN(){},
fCO:function fCO(){},
fCP:function fCP(){},
fCW:function fCW(){},
fCX:function fCX(){},
fCY:function fCY(){},
Wy:function Wy(d){this.a=d},
aGq:function aGq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.hg$=m
_.mk$=n
_.fh$=o
_.hh$=p
_.bv$=q
_.ab$=r
_.c=_.a=null},
dWD:function dWD(d){this.a=d},
dWh:function dWh(d,e){this.a=d
this.b=e},
dWk:function dWk(){},
dWE:function dWE(){},
dWf:function dWf(d,e){this.a=d
this.b=e},
dWg:function dWg(d,e){this.a=d
this.b=e},
dWl:function dWl(d,e,f){this.a=d
this.b=e
this.c=f},
dWa:function dWa(){},
dWb:function dWb(){},
dWc:function dWc(d){this.a=d},
dWd:function dWd(d,e){this.a=d
this.b=e},
dWe:function dWe(d,e,f){this.a=d
this.b=e
this.c=f},
dWm:function dWm(){},
dWn:function dWn(d,e){this.a=d
this.b=e},
dWo:function dWo(d){this.a=d},
dWj:function dWj(d,e){this.a=d
this.b=e},
dWi:function dWi(d){this.a=d},
dW9:function dW9(d,e,f){this.a=d
this.b=e
this.c=f},
dWx:function dWx(d){this.a=d},
dWw:function dWw(d){this.a=d},
dWy:function dWy(d){this.a=d},
dWv:function dWv(d){this.a=d},
dWt:function dWt(d){this.a=d},
dWu:function dWu(d){this.a=d},
dWs:function dWs(d){this.a=d},
dWp:function dWp(d){this.a=d},
dWr:function dWr(d){this.a=d},
dWz:function dWz(d,e){this.a=d
this.b=e},
dWA:function dWA(d,e){this.a=d
this.b=e},
dWB:function dWB(d){this.a=d},
dWq:function dWq(d){this.a=d},
dWC:function dWC(d,e){this.a=d
this.b=e},
bfQ:function bfQ(d,e){this.b=d
this.a=e},
d_e:function d_e(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aPe:function aPe(){},
bCw:function bCw(){},
i8B(){return new C.OS(null)},
S1(d,e,f,g,h){return new C.by3(d,e,f,g,h)},
bwo(d,e,f){return A.h.D((d-e)/(f-e),0,1)},
hpj(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
iAZ(){return B.iL("construction","")},
OS:function OS(d){this.a=d},
LI:function LI(d,e){this.a=d
this.b=e},
Br:function Br(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aGH:function aGH(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1M:function e1M(d){this.a=d},
e1P:function e1P(d,e){this.a=d
this.b=e},
e1O:function e1O(d){this.a=d},
by3:function by3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fDd:function fDd(){},
fDe:function fDe(){},
fDf:function fDf(){},
fDg:function fDg(){},
fDh:function fDh(){},
fDi:function fDi(){},
fDj:function fDj(){},
fDk:function fDk(){},
fDl:function fDl(){},
bwp:function bwp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fiq:function fiq(d){this.a=d},
fip:function fip(d,e){this.a=d
this.b=e},
fin:function fin(d){this.a=d},
fir:function fir(d){this.a=d},
fio:function fio(d,e){this.a=d
this.b=e},
ahq:function ahq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
age:function age(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RV:function RV(d,e,f,g,h,i,j,k,l,m){var _=this
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
bxr:function bxr(d,e){this.b=d
this.a=e},
bwX:function bwX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bes:function bes(d,e){this.b=d
this.a=e},
aL5:function aL5(d,e){this.c=d
this.a=e},
aL6:function aL6(d,e,f){var _=this
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
fi6:function fi6(d){this.a=d},
fi5:function fi5(d){this.a=d},
fhW:function fhW(d){this.a=d},
fhX:function fhX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhY:function fhY(d){this.a=d},
fhV:function fhV(d,e){this.a=d
this.b=e},
fhZ:function fhZ(d){this.a=d},
fi4:function fi4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fi3:function fi3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fi1:function fi1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fi0:function fi0(d,e,f){this.a=d
this.b=e
this.c=f},
fi2:function fi2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fi_:function fi_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fie:function fie(d){this.a=d},
fid:function fid(d){this.a=d},
fif:function fif(d,e){this.a=d
this.b=e},
fig:function fig(d,e){this.a=d
this.b=e},
fih:function fih(d,e){this.a=d
this.b=e},
fic:function fic(d,e,f){this.a=d
this.b=e
this.c=f},
fii:function fii(d,e,f){this.a=d
this.b=e
this.c=f},
fib:function fib(d){this.a=d},
fi7:function fi7(d){this.a=d},
fij:function fij(d){this.a=d},
fik:function fik(d){this.a=d},
fia:function fia(d,e){this.a=d
this.b=e},
fil:function fil(d,e){this.a=d
this.b=e},
fi9:function fi9(d,e){this.a=d
this.b=e},
fim:function fim(d,e){this.a=d
this.b=e},
fi8:function fi8(d,e){this.a=d
this.b=e},
fhT:function fhT(){},
fhU:function fhU(){},
bw0:function bw0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvp:function bvp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bf8:function bf8(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvr:function bvr(d,e,f){this.b=d
this.c=e
this.a=f},
bzx:function bzx(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aQW:function aQW(){},
hP2(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a6(0,new B.m(w,0)),u=e.aI(0,new B.m(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a6(0,v.aM(0,s*t*f)).a6(0,u.aM(0,s*f*f)).a6(0,e.aM(0,f*f*f))},
blT(d,e,f,g,h,i){return $.iiF.c0(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.dw1(d,e,f,i,g,h))},
a2D:function a2D(d,e){this.a=d
this.b=e},
qO:function qO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rz:function rz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dv:function Dv(d,e){this.a=d
this.b=e},
a0z:function a0z(d,e){this.a=d
this.b=e},
ahd:function ahd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2Q:function a2Q(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
DG:function DG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ae2:function ae2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aek:function aek(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agi:function agi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
blR:function blR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.c4$=_.bU$=0},
dw5:function dw5(d){this.a=d},
dw6:function dw6(d){this.a=d},
dw2:function dw2(d,e){this.a=d
this.b=e},
dw3:function dw3(d){this.a=d},
dw4:function dw4(d){this.a=d},
dw7:function dw7(d){this.a=d},
dw8:function dw8(d){this.a=d},
dw9:function dw9(d){this.a=d},
dwa:function dwa(d){this.a=d},
dwb:function dwb(d){this.a=d},
dwc:function dwc(d){this.a=d},
dwd:function dwd(d){this.a=d},
dwe:function dwe(d){this.a=d},
dwf:function dwf(d){this.a=d},
H9:function H9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y_:function Y_(d){this.a=d},
aHY:function aHY(d,e,f,g,h,i,j){var _=this
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
_.bv$=i
_.ab$=j
_.c=_.a=null},
eF8:function eF8(d){this.a=d},
eEY:function eEY(d){this.a=d},
eF_:function eF_(){},
eF0:function eF0(){},
eF3:function eF3(){},
eF4:function eF4(d,e,f){this.a=d
this.b=e
this.c=f},
eF5:function eF5(d){this.a=d},
eF6:function eF6(d){this.a=d},
eF1:function eF1(){},
eF2:function eF2(d){this.a=d},
eFy:function eFy(d){this.a=d},
eF7:function eF7(){},
eEU:function eEU(d){this.a=d},
eFa:function eFa(d){this.a=d},
eF9:function eF9(d){this.a=d},
eFc:function eFc(){},
eFb:function eFb(d,e){this.a=d
this.b=e},
eEX:function eEX(){},
eEV:function eEV(d){this.a=d},
eEW:function eEW(d){this.a=d},
eFw:function eFw(d){this.a=d},
eFv:function eFv(d){this.a=d},
eFx:function eFx(d){this.a=d},
eFm:function eFm(d,e){this.a=d
this.b=e},
eFu:function eFu(d){this.a=d},
eFs:function eFs(d){this.a=d},
eFt:function eFt(d){this.a=d},
eFr:function eFr(d){this.a=d},
eFq:function eFq(d){this.a=d},
eFn:function eFn(d){this.a=d},
eFo:function eFo(d){this.a=d},
eFp:function eFp(d){this.a=d},
eEZ:function eEZ(){},
eFi:function eFi(d){this.a=d},
eFj:function eFj(d){this.a=d},
eFh:function eFh(d){this.a=d},
eFk:function eFk(d){this.a=d},
eFg:function eFg(d){this.a=d},
eFl:function eFl(d){this.a=d},
eFf:function eFf(d){this.a=d},
eFe:function eFe(d){this.a=d},
eFd:function eFd(d,e){this.a=d
this.b=e},
blS:function blS(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dw1:function dw1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aQ3:function aQ3(){},
hUZ(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aI(0,e).gcE()*0.1
return new B.m((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hz0(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a6I(w,v,u,A.cW,B.S(x.N,x.y))},
i2a(d,e,f){var w=d.c,v=e===0?-1:1
return new B.m(w*f.a+v*C.hz1(d),d.d*f.b)},
hz1(d){return 42+(D.mN.am(0,d.b)?(d.ch-1)*38:0)},
imM(d){var w,v,u,t,s
if(d.A(0,$.hKS))return $.hY6()
w=B.a([],x.n)
for(v=d.a,u=d.b,t=12;t<v;t+=24)for(s=12;s<u;s+=24){w.push(t)
w.push(s)}$.hKS=d
return $.imN=new Float32Array(B.cd(w))},
es:function es(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ui:function ui(d,e,f,g){var _=this
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
acG:function acG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
adP:function adP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6I:function a6I(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bT4:function bT4(){},
bTf:function bTf(d){this.a=d},
bTa:function bTa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTg:function bTg(d){this.a=d},
bTh:function bTh(d){this.a=d},
bTj:function bTj(d){this.a=d},
bTk:function bTk(d){this.a=d},
bTi:function bTi(d){this.a=d},
bTl:function bTl(d,e,f){this.a=d
this.b=e
this.c=f},
bTm:function bTm(d){this.a=d},
bT6:function bT6(d){this.a=d},
bT7:function bT7(d){this.a=d},
bT5:function bT5(d){this.a=d},
bT8:function bT8(d,e,f){this.a=d
this.b=e
this.c=f},
bT9:function bT9(d){this.a=d},
bT3:function bT3(d){this.a=d},
bTn:function bTn(d,e){this.a=d
this.b=e},
bTb:function bTb(d,e){this.a=d
this.b=e},
bTe:function bTe(d){this.a=d},
bTd:function bTd(d){this.a=d},
bTc:function bTc(d){this.a=d},
alq:function alq(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bNp:function bNp(){},
bNq:function bNq(){},
bNo:function bNo(){},
nh:function nh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cxt:function cxt(d){this.a=d},
iHn(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.h7Y(),c9=new C.h8_(),d0=new C.h80(),d1=new C.h7Z(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aq(w,d1.$3(new B.a4(w.a,w.b,w.c,w.d),A.cm,A.bQ))
d3.ah(D.eGv,D.eDr,c9.$2(A.e_,1.4))
d3.ah(D.eD6,D.eD4,c9.$2(A.bz,2.4))
d3.ah(D.eD7,U.aOB,c9.$2(A.bz,2.4))
if(c7){d2=c8.$1(A.fC.j(0.5))
d2.y=A.I5
d3.O(D.eCN,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.h.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.m(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aq(d0.$4(-22,-26,44,50),d1.$3(D.aUR,A.aS,A.cF))
d3.O(A.cN,16,c8.$1(A.bz))
d3.O(A.cN,13,c8.$1(c7?A.aH.j(0.85):A.a_))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(0,4)
d3.jy(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.m(Math.cos(t)*11,Math.sin(t)*11),c9.$2(A.ac,3))}d2.restore()
for(d2=d5*0.8,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
d3.O(new B.m(Math.sin(v*2+d5)*9,4-u*12),1.6+u*2,c8.$1(A.c.j(0.8*(1-u))))}}d3.O(D.eGn,2.4,c8.$1(c7?A.bh:A.an))
d3.O(D.aPd,2.4,c8.$1(A.an))
return!0
case"blender":d3.aq(d0.$5(-14,14,28,12,4),c8.$1(A.cU))
d2=$.U().r
t=x.v
s=new B.aI(d2,A.ak,c6,c6,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bz())
d3.af(s,c8.$1(A.fC.j(0.35)))
if(c7){d2=new B.aI(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.aZ(-14,-10))
d2.E(new B.aq(14,-10))
d2.E(new B.aq(12,14))
d2.E(new B.aq(-12,14))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.aC.j(0.7)))}d3.af(s,c9.$2(A.ac,1.6))
d2=d3.c
J.bs(d2.save())
d2.translate(0,10)
d3.jy(0,d4.y)
d3.ah(D.aaH,D.aOY,c9.$2(A.bP,3))
d2.restore()
if(c7)for(d2=d5*9,t=d5*1.6,v=0;v<3;++v)d3.O(new B.m(Math.sin(d2+v*2)*9,-10-A.h.F(t+v*0.33,1)*12),2.4,c8.$1(A.f_))
return!0
case"drone":d3.aq(d0.$5(-10,-4,20,10,4),c8.$1(A.aM))
d3.O(A.hF,3,c8.$1(c7?A.bh:A.an))
r=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.Ue[p]
d3.ah(new B.m(o*0.4,1),new B.m(o,t),c9.$2(A.bz,3))
J.bs(d2.save())
d2.translate(o,q)
d3.ah(D.eGe,D.eDb,c9.$2(A.c.j(c7?0.35:0.9),3))
if(c7)d3.c2(B.c0(A.J,6,24+Math.sin(d4.y*3)*4),c8.$1(A.c.j(0.25)))
d2.restore()}return!0
case"drill":w=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bz())
d3.af(w,d1.$3(D.fsx,A.aQ,A.de))
d3.aE(D.frD,c8.$1(A.d1))
d2=d3.c
J.bs(d2.save())
d2.translate(18,-5)
d3.jy(0,d4.y*2)
d3.ah(A.J,D.eDi,c9.$2(A.bP,2.4))
d3.ah(A.aaC,D.eDh,c9.$2(A.i0,1))
d2.restore()
if(c7)for(d2=d5*3,t=d5*20,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
d3.O(new B.m(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c8.$1(A.eI.j(1-u)))}return!0
case"torch":if(c7){v=A.h.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,-6))
d2.E(new B.aq(52,-26))
d2.E(new B.aq(52,18))
d2.E(new B.aq(16,4))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.bO.j(0.35*v)))}d3.aq(d0.$5(-26,-6,30,12,3),d1.$3(D.fsD,A.bl,A.cx))
n=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bz())
d3.af(n,c8.$1(A.cU))
d3.O(D.eDn,7,c8.$1(c7?A.c:A.d1))
return!0
case"neon":d3.aq(d0.$5(-30,-14,60,28,6),c8.$1(M.ni))
if(c7)m=d4.ax>0.5||A.n.F(A.h.bb(d5*17),3)!==0
else m=!1
l=m?A.c5:D.bw1
if(m){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c5.j(0.35))
t.y=A.nn
d3.aq(d2,t)}d3.aq(d0.$5(-27,-11,54,22,5),c9.$2(l,2.2))
d6.$5(d3,"OPEN",D.eGB,l,17)
return!0
case"microwave":d3.aq(d0.$4(-30,-18,60,38),d1.$3(D.fsK,A.bP,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aq(d2,c8.$1(c7?A.bO.j(0.75):A.ax))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(-7,8)
d3.jy(0,d4.y*0.5)
d3.c2(B.c0(A.J,7,22),c8.$1(A.de))
d2.restore()}d3.aq(d0.$5(15,-14,12,12,2),c8.$1(M.ni))
if(c7)d6.$5(d3,"0:"+A.a.aY(A.n.v(59-A.n.F(A.h.bb(d5),60)),2,"0"),D.eDo,A.bf,6.5)
d3.O(D.eDC,4,c8.$1(A.d1))
return!0
case"doorbell":d3.aq(d0.$5(-16,-26,32,52,8),c8.$1(A.bn))
d3.O(A.KC,10,c8.$1(c7?A.bu:A.bz))
d2=d3.c
J.bs(d2.save())
d2.translate(0,-8)
d3.jy(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eHj,A.c,16)
d2.restore()
d3.O(A.ky,6,c8.$1(A.di))
d3.O(A.ky,6,c9.$2(A.c,1.6))
if(c7)for(d2=d5*14,v=1;v<=2;++v)d3.cR(B.bZ(A.KC,14+v*6+A.h.F(d2,6)),-0.9,1.8,!1,c9.$2(A.bu.j(0.9-v*0.3),1.8))
return!0
case"camera":d3.ah(D.eGA,D.eHc,c9.$2(A.bz,4))
d2=d3.c
J.bs(d2.save())
d3.jy(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aq(d0.$5(-24,-14,46,22,5),d1.$3(D.fsy,A.bP,A.an))
d3.O(D.aOF,8,c8.$1(A.ax))
d3.O(D.aOF,4.5,c8.$1(c7?A.aH:A.cx))
d3.O(D.eGy,2.2,c8.$1(c7&&A.n.F(A.h.bb(d5*1.6),2)===0?A.aC:A.kK))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eGI,A.aC,9)
return!0
case"console":d3.aq(d0.$5(-28,-22,56,44,8),d1.$3(D.fsG,A.i2,A.fy))
d3.aq(d0.$5(-20,-17,40,22,3),c8.$1(A.dZ))
if(c7){d2=d5*2.3
d3.O(new B.m(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aE(new B.a4(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aE(new B.a4(15.6,d2,18,d2+8),c8.$1(A.c5))}d3.O(D.eGt,4,c8.$1(A.ba))
d3.O(D.eDj,2.4,c8.$1(A.aC))
d3.O(D.eDA,2.4,c8.$1(A.bh))
return!0
case"heartmon":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(A.ax))
d3.aq(d0.$5(-26,-18,52,28,3),c8.$1(A.dZ))
if(c7){d2=$.U()
t=B.a([],x.v)
k=new B.aI(d2.r,A.ak,c6,c6,t)
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
d6.$5(d3,"72",D.eDk,A.hJ,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eGN,A.hJ.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.O(D.eGD,3,c8.$1(c7?A.bh:A.bz))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aq(d2,c8.$1(A.cI.j(c7?0.5:0.3)))
d3.aq(d0.$5(-26,-20,52,40,4),c9.$2(A.ac,1.6))
d3.aE(D.fsA,c8.$1(F.wV))
if(c7){d2=d5*1.1
t=Math.sin(d2)
q=d3.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.nT(0,-1,1)
d3.c2(B.c0(A.J,8,14),c8.$1(A.cX))
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,0))
d2.E(new B.aq(-12,-4))
d2.E(new B.aq(-12,4))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.c9))
d3.O(D.eEm,1.2,c8.$1(A.v))
q.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.h.F(d2+v*0.2,1)
d3.O(new B.m(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.n.F(v,2),c9.$2(A.ac,1))}}return!0
case"lighthouse":d2=$.U().r
t=x.v
g=new B.aI(d2,A.ak,c6,c6,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bz())
d3.af(g,d1.$3(D.ftb,A.c,A.bC))
d3.aE(D.ft7,c8.$1(c7?A.eI:A.bz))
q=new B.aI(d2,A.ak,c6,c6,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bz())
d3.af(q,c8.$1(A.eA))
if(c7){f=Math.sin(d4.y*0.3)
d2=new B.aI(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.aZ(0,-19))
t=f*34
d2.E(new B.aq(t,-26))
d2.E(new B.aq(t,-12))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.eI.j(0.45)))
d2=c8.$1(A.eI.j(0.35))
d2.y=A.I5
d3.O(D.eCO,14,d2)}return!0
case"discoball":d3.ah(D.eCQ,V.aOw,c9.$2(A.d1,1.4))
d3.O(A.J,16,d1.$3(D.fsj,A.aS,A.an))
for(v=0;v<8;++v){d2=-12+v*3.4
d3.ah(new B.m(-16,d2),new B.m(16,d2),c9.$2(A.dJ,0.7))}for(v=0;v<5;++v){f=d4.y*0.5+v*1.26
d3.ah(new B.m(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.m(Math.cos(f)*16,0),c9.$2(A.dJ,0.7))}if(c7)for(d2=d5*2,t=d5*9,v=0;v<10;++v){f=d2+v*0.63
e=22+A.n.F(v,3)*6
d3.O(new B.m(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c8.$1(D.dur[A.n.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d3.aq(d0.$5(-14,-4,28,24,5),d1.$3(D.fsg,A.cF,A.an))
d3.aq(d0.$5(-12,-26,24,20,5),d1.$3(D.fs8,A.bn,A.bQ))
d3.ah(H.aOy,D.eCS,c9.$2(A.bz,1.6))
d3.O(D.eCT,2.2,c8.$1(c7?A.aC:A.bz))
d=c7&&A.h.F(d5*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a82[p]
if(c7)d2=d?A.be:A.ev
else d2=A.cx
d3.O(new B.m(o,-17),3.2,c8.$1(d2))}d2=d3.c
J.bs(d2.save())
d2.translate(14,0)
d3.jy(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.ah(A.J,D.aax,c9.$2(A.bQ,4))
d2.restore()
d3.ah(D.eGl,D.eGG,c9.$2(A.bQ,4))
d3.aE(D.ft6,c8.$1(c7?A.be.j(0.7):A.aM))
return!0
case"toaster":a0=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a0*14,p=0;p<2;++p){t=d0.$5(D.aFg[p]+1,d2,10,14,2)
q=B.ap(A.bO,A.de,a0)
q.toString
d3.aq(t,c8.$1(q))}d3.aq(d0.$5(-24,-6,48,26,8),d1.$3(D.fsz,A.bP,A.bl))
for(p=0;p<2;++p){o=D.aFg[p]
d2=d0.$5(o,-5,12,5,2)
d3.aq(d2,c8.$1(c7?A.fN:A.ax))
if(c7){d2=d0.$5(o,-5,12,5,2)
t=c8.$1(A.cX.j(0.5))
t.y=O.oZ
d3.aq(d2,t)}}d3.ah(D.eDK,D.eE4,c9.$2(A.ax,3))
return!0
case"ledstrip":d3.aq(d0.$5(-34,-4,68,10,4),c8.$1(A.cx))
for(d2=d5*90,v=0;v<9;++v){a1=A.h.F(d2+v*40,360)
l=c7?new Aw.pH(1,a1,0.8,1).jl():A.cU
if(c7){t=c8.$1(l.j(0.45))
t.y=O.oZ
d3.O(new B.m(-30+v*7.5,1),7,t)}d3.O(new B.m(-30+v*7.5,1),2.6,c8.$1(l))}d3.aq(d0.$5(-40,-2,6,6,1),c8.$1(A.d1))
return!0
case"pump":d3.aq(d0.$5(-16,-2,32,22,6),d1.$3(D.fsp,A.cI,A.GY))
d3.O(D.eGQ,8,c8.$1(A.tl))
d2=d3.c
J.bs(d2.save())
d2.translate(-2,9)
d3.jy(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.m(Math.cos(t)*7,Math.sin(t)*7),c9.$2(A.fC,2.4))}d2.restore()
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,6))
d2.E(new B.aq(26,6))
d2.E(new B.aq(26,-20))
d2.E(new B.aq(10,-20))
d3.af(d2,c9.$2(A.bQ,4))
if(c7){for(d2=d5*0.9,v=0;v<5;++v)d3.O(new B.m(26,6-A.h.F(d2+v*0.2,1)*26),2.2,c8.$1(A.hm))
d3.O(D.eF0,3.2,c8.$1(A.hm.j(0.7)))}return!0
case"hairdryer":d2=d3.c
J.bs(d2.save())
d3.jy(0,-0.15)
d3.aq(d0.$5(-26,-14,40,22,10),d1.$3(D.fsB,A.hZ,A.v3))
d3.aq(d0.$5(14,-10,12,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-10,6,12,22,4),c8.$1(A.cU))
d2.restore()
if(c7){for(d2=d5*3,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
t=u*18
q=-10+v*5
d3.ah(new B.m(24+t,q),new B.m(32+t,q),c9.$2(A.c.j(1-u),1.8))}d2=c8.$1(A.cX.j(0.4))
d2.y=O.oZ
d3.O(D.eDB,8,d2)}return!0
case"headphones":d3.cR(B.c0(A.dP,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bz,4))
for(d2=d5*12,p=0;p<2;++p){o=F.Ud[p]
t=o-7
d3.aq(d0.$5(t,0,14,20,6),d1.$3(new B.a4(t,0,t+14,20),A.bk,A.nb))
if(c7)for(t=o<0,v=1;v<=2;++v){q=B.bZ(new B.m(o,10),10+v*5+A.h.F(d2,5))
h=t?2.2:-0.9
d3.cR(q,h,1.6,!1,c9.$2(A.eJ.j(0.9-v*0.3),1.6))}}if(c7)d6.$5(d3,"\u266a",new B.m(-4,-8-A.h.F(d5*14,8)),A.l3,12)
return!0
case"smartwatch":d3.aq(d0.$5(-8,-30,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-8,14,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-14,-17,28,32,8),d1.$3(D.fsd,A.d1,A.cU))
d3.aq(d0.$5(-11,-14,22,26,6),c8.$1(A.dZ))
if(c7){a2=new B.W(Date.now(),0,!1)
d6.$5(d3,A.a.aY(A.n.v(B.cY(a2)),2,"0")+":"+A.a.aY(A.n.v(B.fx(a2)),2,"0"),D.eCZ,A.bf,9.5)
j=(Math.sin(d5*9)+1)/2
d2=B.ap(A.GG,A.hJ,j)
d2.toString
d6.$5(d3,"\u2665",new B.m(-8,1),d2,8+j*2)
d6.$5(d3,""+(70+A.n.F(A.h.bb(d5*2),6)),A.dP,A.c,7)}return!0
case"tablet":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(M.ni))
d3.aq(d0.$5(-30,-22,60,44,6),c9.$2(A.bQ,1.6))
a3=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nl(a3),$.mZ(),!0)
d2.translate(-27,-19)
K.MH(d3,D.fzC,d5,!1,c6,c6)
d2.restore()}else d3.aq(a3,c8.$1(D.x0))
return!0
case"buck":a4=d0.$5(-26,-22,52,42,5)
d3.aq(a4,d1.$3(new B.a4(a4.a,a4.b,a4.c,a4.d),A.dU,A.dl))
d3.aq(a4,c9.$2(A.aT,1.2))
d3.O(D.aP6,9,c8.$1(A.ax))
d3.O(D.aP6,6,c9.$2(A.de,2))
d3.aq(d0.$5(4,-2,14,10,2),c8.$1(A.ax))
d3.aq(d0.$5(-22,-19,44,12,2),c8.$1(A.dZ))
d2=A.h.a1(d4.db,1)
t=A.h.a1(c7?d4.dx:d4.e,1)
q=c7?A.bf:A.an
d6.$5(d3,d2+"\u2192"+t+"V",D.eFb,q,8.2)
d3.O(D.eDs,2.4,c8.$1(c7?A.bh:A.aM))
d6.$5(d3,"IN",D.eGH,A.ac,6)
d6.$5(d3,"OUT",D.eER,A.ac,6)
return!0
case"regulator":a5=c7?A.h.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ap(A.bQ,A.aC,a5)
t.toString
d3.aq(d2,c8.$1(t))
d3.O(H.aav,3,c8.$1(A.aM))
d3.aq(d0.$5(-12,-4,24,18,3),d1.$3(D.fs9,A.cU,A.ip))
d6.$5(d3,"7805",D.aaH,A.ac,8)
for(p=0;p<3;++p){d2=D.dBy[p]-1
d3.aE(new B.a4(d2,14,d2+2,22),c8.$1(A.dV))}if(a5>0.2)for(d2=d5*0.9,v=0;v<3;++v){u=A.h.F(d2+v*0.33,1)
d3.O(new B.m(-6+v*6,-28-u*12),2+u*2,c8.$1(A.c.j(0.5*(1-u))))}d6.$5(d3,"5V",D.eHf,A.bq,9)
return!0
case"diode":d3.ah(D.aPb,D.aOS,c9.$2(A.dV,2.4))
d3.aq(d0.$5(-14,-7,28,14,6),c8.$1(A.as.j(0.85)))
d3.aE(D.frR,c8.$1(A.bq))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.eI.j(0.4))
t.y=A.ld
d3.aq(d2,t)}d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-8,-4))
d2.E(new B.aq(-8,4))
d2.E(new B.aq(-1,0))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.ba))
d6.$5(d3,"one way",D.eGw,A.aF,8)
return!0
case"ldr":d3.ah(D.aPb,D.aaH,c9.$2(A.dV,2.4))
d3.ah(D.aOY,D.aOS,c9.$2(A.dV,2.4))
d3.O(A.J,12,c8.$1(A.de))
d3.O(A.J,12,c9.$2(A.tr,1.6))
d2=$.U()
t=B.a([],x.v)
a6=new B.aI(d2.r,A.ak,c6,c6,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
q=a6.f
if(q!=null)d2.aj(q)
a6.ac()}d3.af(a6,c9.$2(A.bO,1.4))
d2=B.ap(A.bz,A.eI,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.m(-6,-26),d2,14)
d6.$5(d3,""+A.h.S(20+980*(1-d4.f))+"\u03a9",D.eGm,A.ac,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d2){case"lgtv":t=A.ez
break
case"sonytv":t=A.tb
break
case"appletv":t=A.dV
break
default:t=F.Cq
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
h.clipRRect(B.nl(a3),$.mZ(),!0)
h.translate(t,q)
K.h8d(d3,new B.av(a3.c-t,a3.d-q),d4.at,d5,d4.ax,-1,c6,c6)
h.restore()
d3.O(D.eE7,1.6,c8.$1(A.bf))}else{d3.aq(a3,c8.$1(D.x0))
h=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bz())
d3.af(h,c8.$1(A.c.j(0.05)))}if(d2==="appletv"){d2=d3.c
J.bs(d2.save())
d2.translate(0,19.6)
d3.bW(0,3.7)
d2.translate(-0.5,-0.55)
d3.af(K.hQO(),c8.$1(A.cz))
d2.restore()}else{switch(d2){case"lgtv":d2=F.aUr
break
case"sonytv":d2=F.aUi
break
default:d2=F.aUk
break}a8=B.h0(c6,A.cJ,c6,c6,c6,B.cW(c6,c6,c6,c6,c6,c6,c6,c6,c6,B.l(c6,c6,d2.b,c6,c6,c6,c6,c6,c6,c6,c6,3.6,c6,c6,A.C,c6,1,!0,c6,0.25,c6,c6,c6,c6,c6,c6),d2.a),A.a7,A.ca,c6,A.e4,A.cb)
a8.eJ()
d2=a8.b
t=d2.c
d2=d2.a.c
a8.a5(d3,new B.m(-t/2,19.6-d2.gb4(d2)/2))}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mN.h(0,d2)
b0=a9.b===D.Bq
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
d3.aq(w,d1.$3(new B.a4(h,b3,b4,b5),b7,b6))
a3=d0.$5(t+2,q,b1-4,b2-4,3.5)
if(c7){t=d3.c
J.bs(t.save())
t.clipRRect(B.nl(a3),$.mZ(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
K.MH(d3,new B.av(a3.c-q,a3.d-h),d5,!1,c6,c6)
t.restore()}else d3.aq(a3,c8.$1(D.x0))
if(b0){t=a3.b
q=a3.d
d3.ah(new B.m(0,t),new B.m(0,q),c9.$2(A.v.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aq(d0.$5(-4,a3.b+1.2,8,2.6,1.3),c8.$1(A.v))
else{d2=b0?b1/2-7:0
d3.O(new B.m(d2,a3.b+3),1.3,c8.$1(A.v))}return!0
case"ereader":d3.aq(d0.$5(-17,-28,34,52,4),c8.$1(A.cU))
d3.aq(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bP))
if(c7){d6.$5(d3,"NGMY",D.eHm,A.ax,9)
for(v=0;v<9;++v){d2=-9+v*3.6
t=A.n.F(v,4)===3?14:22
d3.aE(new B.a4(-11,d2,-11+t,d2+1.4),c8.$1(A.bl))}d3.O(A.aat,1.6,c8.$1(A.ax))}return!0
case"laptop":d3.aq(d0.$5(-30,-28,60,42,4),d1.$3(D.fsL,A.cF,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nl(b8),$.mZ(),!0)
t=b8.a
q=b8.b
d2.translate(t,q)
K.MH(d3,new B.av(b8.c-t,b8.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b8,c8.$1(D.x0))
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-38,16))
d2.E(new B.aq(38,16))
d2.E(new B.aq(34,21))
d2.E(new B.aq(-34,21))
d2.E(new B.bz())
d3.af(d2,c8.$1(D.akK))
d3.aq(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aq(d0.$5(-32,-28,64,46,5),d1.$3(D.fsP,A.cm,A.cF))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nl(b9),$.mZ(),!0)
t=b9.a
q=b9.b
d2.translate(t,q)
K.MH(d3,new B.av(b9.c-t,b9.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b9,c8.$1(D.x0))
d3.O(D.eCB,2,c8.$1(A.bQ))
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,18))
d2.E(new B.aq(6,18))
d2.E(new B.aq(10,26))
d2.E(new B.aq(-10,26))
d2.E(new B.bz())
d3.af(d2,c8.$1(D.akK))
return!0
case"monitor":d3.aq(d0.$5(-34,-28,68,40,3),c8.$1(A.ez))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nl(c0),$.mZ(),!0)
t=c0.a
q=c0.b
d2.translate(t,q)
K.MH(d3,new B.av(c0.c-t,c0.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(c0,c8.$1(D.x0))
d3.aE(D.fsW,c8.$1(A.bl))
d3.aq(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.d1))
return!0
case"projector":if(c7){d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(14,4))
d2.E(new B.aq(-32,-42))
d2.E(new B.aq(34,-42))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.eI.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nl(c1),$.mZ(),!0)
t=c1.a
q=c1.b
d2.translate(t,q)
K.MH(d3,new B.av(c1.c-t,c1.d-q),d5,!1,c6,c6)
d2.restore()}d3.aq(d0.$5(-26,-4,52,24,6),d1.$3(D.fsC,A.hX,A.d1))
d3.O(D.aOD,7,c8.$1(A.ax))
d3.O(D.aOD,4,c8.$1(c7?A.eI:A.cx))
for(v=0;v<4;++v){d2=-20+v*4
d3.ah(new B.m(d2,2),new B.m(d2,14),c9.$2(A.dJ,1))}return!0
case"carscreen":d3.aq(d0.$5(-34,-10,68,32,12),c8.$1(A.ax))
c2=d0.$5(-30,-20,60,28,8)
d3.aq(c2,c8.$1(M.ni))
d3.aq(c2,c9.$2(A.bz,1.2))
if(c7){c3=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
c3.E(new B.aZ(-26,4))
c3.E(new B.cm(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.aq(22,-16))
d3.af(c3,c9.$2(A.aH,2.2))
d2=A.h.F(d5*6,48)
d3.O(new B.m(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.n.F(A.h.bb(d5*2),5)),H.aOX,A.c,10)
d6.$5(d3,"km/h",D.eEZ,A.aF,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aq(c4,d1.$3(new B.a4(c4.a,c4.b,c4.c,c4.d),A.d1,A.cU))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nl(c5),$.mZ(),!0)
t=c5.a
q=c5.b
d2.translate(t,q)
K.MH(d3,new B.av(c5.c-t,c5.d-q),d5,!1,c6,c6)
d2.restore()
d2=c8.$1(A.bk.j(0.2))
d2.y=A.nn
d3.O(A.J,26,d2)}else d3.aq(c5,c8.$1(A.a_))
d3.ah(D.eGX,D.eH1,c9.$2(A.bl,4))
d3.ah(D.eE9,D.eEp,c9.$2(A.bl,4))
return!0}return!1},
h7Y:function h7Y(){},
h8_:function h8_(){},
h80:function h80(){},
h7Z:function h7Z(){},
hxR(d,e,f,g){return new C.alo(d,g,f,e)},
GU(d,e,f){return new C.bfz(d,e,f)},
alo:function alo(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
alp:function alp(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.hg$=i
_.mk$=j
_.fh$=k
_.hh$=l
_.bv$=m
_.ab$=n
_.c=_.a=null},
bN1:function bN1(d,e){this.a=d
this.b=e},
bN2:function bN2(d){this.a=d},
bN0:function bN0(d){this.a=d},
bN3:function bN3(){},
bN4:function bN4(d){this.a=d},
bN5:function bN5(d,e,f){this.a=d
this.b=e
this.c=f},
bN_:function bN_(d,e){this.a=d
this.b=e},
bMX:function bMX(d,e){this.a=d
this.b=e},
bMY:function bMY(d,e,f){this.a=d
this.b=e
this.c=f},
bMR:function bMR(d,e){this.a=d
this.b=e},
bMS:function bMS(){},
bMZ:function bMZ(d,e,f){this.a=d
this.b=e
this.c=f},
bMW:function bMW(d,e){this.a=d
this.b=e},
bMT:function bMT(d,e){this.a=d
this.b=e},
bMU:function bMU(d,e){this.a=d
this.b=e},
bMV:function bMV(d){this.a=d},
bNl:function bNl(d){this.a=d},
bNm:function bNm(){},
bMr:function bMr(){},
bNn:function bNn(d,e){this.a=d
this.b=e},
bNk:function bNk(d,e){this.a=d
this.b=e},
bNf:function bNf(d){this.a=d},
bNc:function bNc(d,e,f){this.a=d
this.b=e
this.c=f},
bNd:function bNd(d,e){this.a=d
this.b=e},
bNg:function bNg(d){this.a=d},
bNa:function bNa(d,e){this.a=d
this.b=e},
bNb:function bNb(d,e){this.a=d
this.b=e},
bNe:function bNe(d){this.a=d},
bNh:function bNh(d){this.a=d},
bN7:function bN7(d,e){this.a=d
this.b=e},
bN8:function bN8(d,e){this.a=d
this.b=e},
bN9:function bN9(d,e){this.a=d
this.b=e},
bNi:function bNi(d){this.a=d},
bN6:function bN6(d){this.a=d},
bNj:function bNj(d){this.a=d},
bMs:function bMs(d,e){this.a=d
this.b=e},
bMO:function bMO(d,e){this.a=d
this.b=e},
bMQ:function bMQ(d,e){this.a=d
this.b=e},
bMP:function bMP(d,e){this.a=d
this.b=e},
bMN:function bMN(){},
bMz:function bMz(d){this.a=d},
bMy:function bMy(d){this.a=d},
bMA:function bMA(d,e){this.a=d
this.b=e},
bMB:function bMB(d){this.a=d},
bMx:function bMx(d){this.a=d},
bMF:function bMF(d,e,f){this.a=d
this.b=e
this.c=f},
bMw:function bMw(d,e){this.a=d
this.b=e},
bMG:function bMG(d,e){this.a=d
this.b=e},
bMH:function bMH(d,e){this.a=d
this.b=e},
bMI:function bMI(d,e){this.a=d
this.b=e},
bMJ:function bMJ(d,e,f){this.a=d
this.b=e
this.c=f},
bMv:function bMv(d,e){this.a=d
this.b=e},
bMK:function bMK(d,e,f){this.a=d
this.b=e
this.c=f},
bMu:function bMu(d,e){this.a=d
this.b=e},
bML:function bML(d,e,f){this.a=d
this.b=e
this.c=f},
bMt:function bMt(d,e){this.a=d
this.b=e},
bMM:function bMM(d){this.a=d},
bMC:function bMC(d){this.a=d},
bMD:function bMD(d){this.a=d},
bME:function bME(d){this.a=d},
bfz:function bfz(d,e,f){this.a=d
this.b=e
this.c=f},
fCZ:function fCZ(){},
fD_:function fD_(){},
fD0:function fD0(){},
fCM:function fCM(){},
fD1:function fD1(){},
fCL:function fCL(){},
fD2:function fD2(){},
fCQ:function fCQ(){},
fCK:function fCK(){},
fCR:function fCR(){},
fCJ:function fCJ(){},
fCS:function fCS(){},
fCI:function fCI(){},
fCT:function fCT(){},
fCG:function fCG(){},
fCH:function fCH(){},
fCU:function fCU(){},
fCE:function fCE(){},
fCF:function fCF(){},
fCV:function fCV(){},
fCD:function fCD(){},
X9:function X9(d){this.a=d},
aGV:function aGV(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e6V:function e6V(d,e){this.a=d
this.b=e},
e73:function e73(d){this.a=d},
e74:function e74(){},
e75:function e75(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e76:function e76(){},
e6U:function e6U(d){this.a=d},
e6T:function e6T(d,e,f){this.a=d
this.b=e
this.c=f},
e6S:function e6S(d,e){this.a=d
this.b=e},
e6Q:function e6Q(d){this.a=d},
e6R:function e6R(){},
e72:function e72(d){this.a=d},
e71:function e71(d){this.a=d},
e7_:function e7_(d,e){this.a=d
this.b=e},
e6Y:function e6Y(d){this.a=d},
e6Z:function e6Z(){},
e70:function e70(d,e,f){this.a=d
this.b=e
this.c=f},
e6W:function e6W(d,e){this.a=d
this.b=e},
e6X:function e6X(){},
e78:function e78(d){this.a=d},
e79:function e79(d,e){this.a=d
this.b=e},
e77:function e77(){},
e7a:function e7a(d,e){this.a=d
this.b=e},
e7b:function e7b(d){this.a=d},
e7c:function e7c(d){this.a=d},
aAM:function aAM(d,e){this.c=d
this.a=e},
bdD:function bdD(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
cPi:function cPi(d){this.a=d},
bdC:function bdC(d,e){this.b=d
this.a=e},
cPh:function cPh(d){this.a=d},
aB6:function aB6(){},
aB7:function aB7(){},
aNB:function aNB(){},
bCz:function bCz(){},
iHo(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bZ(A.wd,23)
$.U()
b8=B.M()
b8.r=A.ax.gp(0)
b9.O(A.wd,25,b8)
b8=B.M()
b8.san(D.eQa.az(0,v))
b9.O(A.wd,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=A.bq.gp(0)
p.c=A.n.F(u,5)===0?1.8:1
b9.ah(new B.m(b8*17,s*17-2),new B.m(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.h.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.M()
r.r=A.bC.gp(0)
r.c=2
r.d=A.bG
b9.ah(A.wd,new B.m(b8*18,s*18-2),r)
r=B.M()
r.r=A.bq.gp(0)
b9.O(A.wd,3,r)
c2.$5(b9,w?"V":"A",D.eH4,A.bq,12)
c2.$5(b9,w?A.h.a1(o,1)+" V":""+A.h.S(o*1000)+" mA",D.eGq,A.ax,9.5)
return!0
case"fan":b8=B.bx(D.fs5,A.hs)
$.U()
s=B.M()
s.r=A.bz.gp(0)
b9.aq(b8,s)
s=B.M()
s.r=A.an.gp(0)
b9.aE(D.fsX,s)
s=B.M()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.we,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.c0(A.aOv,18,10)
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=A.hm.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c2(s,r)
b8.restore()}b8=B.M()
b8.r=A.bt.gp(0)
b9.O(H.we,4,b8)
b8=B.M()
b8.b=A.ad
b8.c=2
b8.r=A.cF.gp(0)
b9.O(H.we,22,b8)
b8=B.M()
b8.b=A.ad
b8.c=0.8
b8.r=A.jW.gp(0)
b9.O(H.we,14,b8)
return!0
case"speaker":n=B.bx(D.aUR,A.qs)
$.U()
b8=B.M()
b8.san(D.avT.az(0,new B.a4(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.M()
b8.san(D.eQx.az(0,B.bZ(A.cy,15)))
b9.O(A.cy,14+m,b8)
b8=B.M()
b8.r=A.d1.gp(0)
b9.O(A.cy,5,b8)
b8=B.M()
b8.r=A.bl.gp(0)
b9.O(H.aau,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bZ(D.eDJ,6+u*6+A.h.F(b8,6))
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.b=A.ad
r.c=1.8
r.r=A.c5.j(0.9-u*0.2).gp(0)
b9.cR(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bx(D.fsO,A.qs)
$.U()
b8=B.M()
b8.san(D.cdL.az(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.aUT,A.jL)
s=B.M()
s.r=A.ip.gp(0)
b9.aq(b8,s)
if(b7){k=new B.W(Date.now(),0,!1)
j=B.Ge(k)<500?":":" "
i=A.a.aY(A.n.v(B.cY(k)),2,"0")
h=A.a.aY(A.n.v(B.fx(k)),2,"0")
b8=B.M()
b8.r=A.bf.j(0.12).gp(0)
b9.aE(D.aUT,b8)
c2.$5(b9,i+j+h,D.eGL,A.bf,21)}b8=B.M()
b8.r=A.cF.gp(0)
b9.O(D.eGJ,2.4,b8)
b8=B.M()
b8.r=A.cF.gp(0)
b9.O(D.eDO,2.4,b8)
return!0
case"calculator":l=B.bx(D.fsu,A.iE)
$.U()
b8=B.M()
b8.san(D.avW.az(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.fsn,A.hG)
s=B.M()
s.r=(b7?A.a0i:D.bwE).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eGp,A.ZX,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bx(new B.a4(r,b8,r+6,s),A.Fr)
$.U()
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=(f===3?A.c9:A.bP).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bx(D.fsi,A.iE)
$.U()
b8=B.M()
b8.r=M.ni.gp(0)
b9.aq(l,b8)
b8=B.M()
b8.b=A.ad
b8.c=1.9
b8.r=D.amK.gp(0)
b9.aq(l,b8)
e=B.bx(D.fs7,A.hs)
if(b7){b8=B.M()
b8.san(D.cf7.az(0,new B.a4(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.nl(e),$.mZ(),!0)
b8.translate(-12,-25)
K.MH(b9,D.fze,c1,!1,b6,b6)
b8.restore()
d=A.h.F(c1*0.12,1)
b8=B.bx(D.fs4,A.hG)
s=B.M()
s.r=A.ba.gp(0)
b9.aq(b8,s)
s=B.M()
s.r=A.bf.gp(0)
b9.aE(new B.a4(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.h.S(d*100)+"%",D.eFx,A.c,6)}else{b8=B.M()
b8.r=D.x0.gp(0)
b9.aq(e,b8)}b8=B.bx(D.ftc,D.eQG)
s=B.M()
s.r=A.v.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bx(D.fsN,A.pm)
$.U()
b8=B.M()
b8.san(D.ce2.az(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.Ud[a0]
b8=a1<0?-4:4
s=new B.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.cx.gp(0)
s.c=4
s.d=A.bG
b9.ah(new B.m(a1,-4),new B.m(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.n.F(A.h.bb(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b8.r=(a2?A.bh:A.aM).gp(0)
b9.O(new B.m(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bZ(H.we,8+u*6+A.h.F(b8,6))
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.b=A.ad
r.c=1.8
r.r=A.fL.j(0.9-u*0.2).gp(0)
b9.cR(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.fst,A.hs)
s=$.U()
r=B.M()
r.r=A.cU.gp(0)
b9.aq(b8,r)
if(b7){b8=B.M()
b8.r=A.aC.j(0.5*a3).gp(0)
b8.y=A.Dt
b9.O(A.wd,34,b8)}a4=new B.aI(s.r,A.ak,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.cm(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bz())
b8=B.M()
b8.r=B.ap(A.eA,D.bmY,a3).gp(0)
b9.af(a4,b8)
b8=B.M()
b8.b=A.ad
b8.c=1.4
b8.r=A.bX.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bs(b8.save())
b8.translate(0,-2)
b9.jy(0,c1*7)
s=B.M()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.aau,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bs(b8.save())
b8.translate(0,a5)
s=$.U().r
r=x.v
l=new B.aI(s,A.ak,b6,b6,B.a([],r))
l.E(new B.aZ(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bz())
q=B.M()
q.san(D.cc1.az(0,D.fsF))
b9.af(l,q)
q=new B.aI(s,A.ak,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bz())
p=B.M()
p.r=A.fC.gp(0)
b9.af(q,p)
r=new B.aI(s,A.ak,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bz())
s=B.M()
s.r=A.fC.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aFh[a0]
s=new B.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.ax.gp(0)
b9.O(new B.m(a1,10),7.5,s)
J.bs(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.J,new B.m(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.h.F(b8+u*8,14)
r=-4+u*5
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=A.aF.gp(0)
q.c=1.6
b9.ah(new B.m(-34-s,r),new B.m(-42-s,r),q)}return!0
case"kettle":b8=$.U().r
s=x.v
l=new B.aI(b8,A.ak,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.cm(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bz())
r=B.M()
r.san(D.cd9.az(0,D.fss))
b9.af(l,r)
r=new B.aI(b8,A.ak,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bz())
q=B.M()
q.r=A.dV.gp(0)
b9.af(r,q)
s=new B.aI(b8,A.ak,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.cm(-34,-6,-18,12))
b8=B.M()
b8.b=A.ad
b8.c=5
b8.r=A.ax.gp(0)
b9.af(s,b8)
b8=B.M()
if(b7){s=B.ap(A.cX,A.vb,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cU
b8.r=s.gp(0)
b9.aE(D.fsr,b8)
if(b7){b8=B.M()
b8.r=A.cX.j(0.3).gp(0)
b8.y=A.nn
b9.O(A.aar,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.h.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.m(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.M()
b8.r=A.ax.gp(0)
b9.O(D.eCM,3,b8)
return!0
case"lamp":if(b7){u=A.h.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aI($.U().r,A.ak,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bz())
s=B.M()
s.r=A.eI.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.M()
s.r=A.eI.j(0.5*u).gp(0)
s.y=Z.PL
b9.O(D.eGR,24,s)}b8=B.bx(D.ft5,A.hs)
s=$.U()
r=B.M()
r.r=A.cU.gp(0)
b9.aq(b8,r)
r=B.M()
r.r=A.d1.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.eD1,D.aOG,r)
r=B.M()
r.r=A.d1.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.aOG,D.eGS,r)
a7=new B.aI(s.r,A.ak,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bz())
s=B.M()
s.r=(b7?A.aQ:A.ke).gp(0)
b9.af(a7,s)
b8=B.M()
b8.r=(b7?A.c:A.bl).gp(0)
b9.O(D.eGV,4,b8)
return!0
case"lights":b8=$.U().r
s=x.v
a8=new B.aI(b8,A.ak,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.cm(0,22,34,-6))
r=B.M()
r.b=A.ad
r.c=2
r.r=A.hY.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.h.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b1.r=D.a7_[u].j(0.6).gp(0)
b1.y=A.I5
b9.O(new B.m(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aI(b8,A.ak,b6,b6,b1)
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
q=new B.cm(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.bz()
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
if(b0)p=D.a7_[u]
else{p=B.ap(D.a7_[u],A.v,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iHn(b9,c0,c1,c2)},
h6:function h6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hsP(d){var w=D.mN.h(0,d)
return(w==null?null:w.b)===D.Bo},
iIE(d,e,f){return B.a7(d,!1).ca(B.vI(null,!1,!0,!0,new C.hd8(e,f),A.f0,null,A.pV,new C.hd9(),x.H))},
KG:function KG(d,e){this.a=d
this.b=e},
mt:function mt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hd8:function hd8(d,e){this.a=d
this.b=e},
hd9:function hd9(){},
WT:function WT(d,e,f){this.c=d
this.d=e
this.a=f},
aGL:function aGL(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bv$=e
_.ab$=f
_.c=_.a=null},
e2R:function e2R(d,e){this.a=d
this.b=e},
e2S:function e2S(d,e,f){this.a=d
this.b=e
this.c=f},
e31:function e31(d,e,f){this.a=d
this.b=e
this.c=f},
e2Q:function e2Q(d,e){this.a=d
this.b=e},
e2P:function e2P(d,e){this.a=d
this.b=e},
e32:function e32(d,e){this.a=d
this.b=e},
e33:function e33(d){this.a=d},
e2J:function e2J(d,e){this.a=d
this.b=e},
e2I:function e2I(d,e){this.a=d
this.b=e},
e2H:function e2H(d){this.a=d},
e3_:function e3_(){},
e2W:function e2W(d){this.a=d},
e2X:function e2X(d){this.a=d},
e2Y:function e2Y(d){this.a=d},
e2Z:function e2Z(d){this.a=d},
e34:function e34(d){this.a=d},
e2V:function e2V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2T:function e2T(){},
e2U:function e2U(d){this.a=d},
e30:function e30(d,e){this.a=d
this.b=e},
e2O:function e2O(d,e){this.a=d
this.b=e},
e2M:function e2M(d){this.a=d},
e2N:function e2N(d){this.a=d},
e2G:function e2G(d){this.a=d},
e2L:function e2L(d,e,f){this.a=d
this.b=e
this.c=f},
e2K:function e2K(d){this.a=d},
bAB:function bAB(d,e,f){this.b=d
this.c=e
this.a=f},
ah6:function ah6(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aPp:function aPp(){},
a39(d,e,f,g,h,i){return new C.bzn(d,e,f,g,h,i)},
bzn:function bzn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fDt:function fDt(){},
fDu:function fDu(){},
fDv:function fDv(){},
fDw:function fDw(){},
fDx:function fDx(){},
fDy:function fDy(){},
fDz:function fDz(){},
fDA:function fDA(){},
aaG:function aaG(d){this.a=d},
cqm:function cqm(d){this.a=d},
cqn:function cqn(){},
cql:function cql(d,e){this.a=d
this.b=e},
cqk:function cqk(d){this.a=d},
Yy:function Yy(d){this.a=d},
aIu:function aIu(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.hg$=f
_.mk$=g
_.fh$=h
_.hh$=i
_.bv$=j
_.ab$=k
_.c=_.a=null},
f3A:function f3A(d){this.a=d},
f3w:function f3w(d){this.a=d},
f3v:function f3v(d,e){this.a=d
this.b=e},
f3y:function f3y(d,e){this.a=d
this.b=e},
f3x:function f3x(d,e){this.a=d
this.b=e},
f3z:function f3z(d){this.a=d},
bAN:function bAN(d,e,f){this.b=d
this.c=e
this.a=f},
Xh:function Xh(d){this.a=d},
boB:function boB(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.hg$=d
_.mk$=e
_.fh$=f
_.hh$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
eaD:function eaD(){},
eaE:function eaE(){},
eay:function eay(d,e){this.a=d
this.b=e},
eaA:function eaA(d,e){this.a=d
this.b=e},
eaB:function eaB(d){this.a=d},
eaz:function eaz(d){this.a=d},
eaC:function eaC(d){this.a=d},
bvq:function bvq(d,e,f){this.b=d
this.c=e
this.a=f},
Ws:function Ws(d){this.a=d},
boa:function boa(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.hg$=d
_.mk$=e
_.fh$=f
_.hh$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
dV3:function dV3(){},
dV4:function dV4(){},
dUZ:function dUZ(){},
dV1:function dV1(d,e){this.a=d
this.b=e},
dV0:function dV0(d,e){this.a=d
this.b=e},
dV2:function dV2(d){this.a=d},
dV_:function dV_(d){this.a=d},
aM_:function aM_(d,e,f){this.a=d
this.b=e
this.c=f},
X8:function X8(d){this.a=d},
bos:function bos(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e6p:function e6p(d,e){this.a=d
this.b=e},
e6q:function e6q(d){this.a=d},
e6o:function e6o(d,e){this.a=d
this.b=e},
e6r:function e6r(d){this.a=d},
e6n:function e6n(d,e){this.a=d
this.b=e},
e6s:function e6s(d){this.a=d},
e6m:function e6m(d,e){this.a=d
this.b=e},
e6t:function e6t(d,e){this.a=d
this.b=e},
e6l:function e6l(d,e){this.a=d
this.b=e},
e6u:function e6u(d){this.a=d},
e6k:function e6k(d,e){this.a=d
this.b=e},
e6v:function e6v(d){this.a=d},
e6j:function e6j(d){this.a=d},
e6w:function e6w(d){this.a=d},
e6i:function e6i(d){this.a=d},
e6x:function e6x(d){this.a=d},
e6y:function e6y(d){this.a=d},
e6h:function e6h(d){this.a=d},
bqw:function bqw(d,e,f){this.b=d
this.c=e
this.a=f},
XV:function XV(d){this.a=d},
aHK:function aHK(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eyz:function eyz(d,e){this.a=d
this.b=e},
eyA:function eyA(d,e,f){this.a=d
this.b=e
this.c=f},
eyy:function eyy(d,e,f){this.a=d
this.b=e
this.c=f},
eyB:function eyB(d){this.a=d},
eyx:function eyx(d){this.a=d},
eyF:function eyF(d){this.a=d},
eyE:function eyE(d,e){this.a=d
this.b=e},
eyD:function eyD(d,e){this.a=d
this.b=e},
eyG:function eyG(d,e){this.a=d
this.b=e},
eyC:function eyC(d,e){this.a=d
this.b=e},
eyH:function eyH(d){this.a=d},
Y5:function Y5(d){this.a=d},
aI7:function aI7(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eLH:function eLH(d){this.a=d},
eLI:function eLI(d){this.a=d},
eLF:function eLF(d,e){this.a=d
this.b=e},
eLG:function eLG(d){this.a=d},
eLE:function eLE(d){this.a=d},
eLJ:function eLJ(d){this.a=d},
eLK:function eLK(d){this.a=d},
eLL:function eLL(d){this.a=d},
eLM:function eLM(d,e){this.a=d
this.b=e},
Yp:function Yp(d){this.a=d},
bpK:function bpK(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eZW:function eZW(){},
f_4:function f_4(){},
f_0:function f_0(d){this.a=d},
f__:function f__(){},
f_1:function f_1(d,e){this.a=d
this.b=e},
eZZ:function eZZ(d,e){this.a=d
this.b=e},
f_2:function f_2(d){this.a=d},
eZY:function eZY(d,e){this.a=d
this.b=e},
f_3:function f_3(d){this.a=d},
eZX:function eZX(d){this.a=d},
XU:function XU(d){this.a=d},
bpd:function bpd(d,e,f,g,h,i,j,k){var _=this
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
_.hg$=f
_.mk$=g
_.fh$=h
_.hh$=i
_.bv$=j
_.ab$=k
_.c=_.a=null},
exe:function exe(){},
exf:function exf(){},
ex7:function ex7(d){this.a=d},
ex6:function ex6(d){this.a=d},
ex8:function ex8(d){this.a=d},
ex5:function ex5(d){this.a=d},
ex9:function ex9(d){this.a=d},
ex4:function ex4(d){this.a=d},
exa:function exa(d,e){this.a=d
this.b=e},
ex3:function ex3(d,e){this.a=d
this.b=e},
exb:function exb(d){this.a=d},
ex2:function ex2(d,e){this.a=d
this.b=e},
exc:function exc(d){this.a=d},
ex1:function ex1(d,e){this.a=d
this.b=e},
exd:function exd(d){this.a=d},
ex0:function ex0(d,e){this.a=d
this.b=e},
bhZ:function bhZ(d,e,f){this.c=d
this.d=e
this.a=f},
aPb:function aPb(){},
bCv:function bCv(){},
aPw:function aPw(){},
bCB:function bCB(){},
aPX:function aPX(){},
bCL:function bCL(){},
aQp:function aQp(){},
bCU:function bCU(){},
Kc(d,e,f,g){var w,v,u,t,s,r,q,p=$.av9
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mQ(d,e[w],f,g)
return}for(p=B.cJ(e,0,B.dx(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bQ(p,p.gI(0),v.k("bQ<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.B();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mQ(d,s,f,g)
else B.bM(new B.bh(1000*q),new C.cqi(d,s,f,g),u)}},
cnE(d){return C.ibJ(d)},
ibJ(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cnE=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aB(),$async$cnE)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.S(x.N,x.z)
w=1
break}p=A.V.aN(0,q,null)
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
return B.i($async$cnE,v)},
b5r(d,e){return C.ibK(d,e)},
ibK(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b5r=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$b5r)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.V.au(e,null)),$async$b5r)
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
return B.i($async$b5r,v)},
cqi:function cqi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ixF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.S(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oQ(A.h.a1(p.c,4)),"y",B.oQ(A.h.a1(p.d,4)),"v",p.e,"l",B.oQ(A.h.a1(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oQ(A.h.a1(p.as,3)),"ch",p.at,"vc",B.oQ(A.h.a1(p.z,3)),"s",B.oQ(A.h.a1(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a3(f).k("ck.E"))
A.d.ff(l)
return A.V.au(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iHN(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.V.aN(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a7(h)
A.d.a7(a6.b)
v=B.a([],x.fs)
g=x.R
f=g.a(J.t(w,"parts"))
f=J.aP(f==null?A.bN:f)
while(f.B()){u=f.gP(f)
t=i.a(u)
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.qZ().am(0,s)){J.c_(v,null)
continue}d=s
a0=B.aK(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.ui(a2,d,a0,a1)
a3.atT(a2,d,a0,a1)
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
d=B.kl(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.kl(J.t(t,"b"))
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
J.c_(v,r)}i=g.a(J.t(w,"wires"))
i=J.aP(i==null?A.bN:i)
h=x.j
while(i.B()){q=i.gP(i)
p=h.a(q)
f=B.aK(J.t(p,0))
o=f==null?a5:A.h.M(f)
f=B.aK(J.t(p,2))
n=f==null?a5:A.h.M(f)
if(o==null||n==null||o<0||n<0||o>=J.aa(v)||n>=J.aa(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.anO(m,A.h.M(B.dC(J.t(p,1))),l,A.h.M(B.dC(J.t(p,3))))}i=B.aK(J.t(w,"challenge"))
i=A.h.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aP(h==null?A.bN:h)
while(h.B()){j=h.gP(h)
J.c_(k,A.h.M(B.dC(j)))}return new B.btu(i,k)}catch(a4){return a5}},
fVk(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fVk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aB(),$async$fVk)
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
return B.i($async$fVk,v)},
bJx(d){return C.iJu(d)},
iJu(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bJx=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aB(),$async$bJx)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bJx)
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
return B.i($async$bJx,v)},
h1i(d,e,f){var w=0,v=B.j(x.I),u,t,s,r,q,p
var $async$h1i=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(d.c===e&&d.d===f){u=d
w=1
break}$.U()
t=new B.p1(new B.oB())
s=B.v9(t,null)
r=B.M()
r.r=A.c7.gp(0)
s.aE(new B.a4(0,0,e,f),r)
s.bjb(0,d,A.J,B.M())
q=t.n9()
w=3
return B.b(q.vX(e,f),$async$h1i)
case 3:p=h
q.t()
d.t()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h1i,v)}},D,V,A2,As,K,F,M,A3,H,At,Au,Av,A4,Aw
J=c[1]
B=c[0]
A=c[2]
W=c[142]
A9=c[178]
A5=c[125]
N=c[90]
Aa=c[152]
A6=c[177]
Ab=c[183]
A7=c[182]
X=c[173]
P=c[46]
Y=c[169]
Ac=c[165]
O=c[176]
Ad=c[186]
Ae=c[191]
Af=c[138]
Ag=c[167]
Ah=c[106]
Ai=c[184]
Aj=c[92]
Ak=c[188]
Al=c[81]
Z=c[171]
U=c[89]
Am=c[93]
Q=c[160]
An=c[146]
A_=c[156]
R=c[190]
S=c[161]
A0=c[175]
T=c[174]
A1=c[187]
Ao=c[136]
E=c[34]
I=c[3]
G=c[45]
L=c[140]
Ap=c[134]
Aq=c[153]
Ar=c[180]
A8=c[189]
C=a.updateHolder(c[23],C)
D=c[170]
V=c[185]
A2=c[179]
As=c[31]
K=c[33]
F=c[132]
M=c[130]
A3=c[107]
H=c[172]
At=c[104]
Au=c[120]
Av=c[71]
A4=c[181]
Aw=c[62]
C.amF.prototype={}
C.XE.prototype={
R(){return new C.bp1(B.S(x.N,x.i),new B.au(A.ay,$.ay()),B.a([],x.X),B.a([],x.eZ),B.mu(0,null,null))}}
C.bp1.prototype={
gY6(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
this.ch.t()
this.a3()},
QP(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$QP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aS.bl$.d.c
if(s!=null)s.j5()
p.bN(0,A.ck)
t.l(new C.eqg(t))
t.a.toString
p=t.gY6()
w=3
return B.b(C.bEP(C.ikV(q,C.ixq(p),o,t.ay)),$async$QP)
case 3:s=e
r=s==null?null:J.ja(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.iyX(q,p,o)
if(t.c==null){w=1
break}t.l(new C.eqh(t,o,r))
$.aS.U$.push(new C.eqi(t))
case 1:return B.h(u,v)}})
return B.i($async$QP,v)},
a_c(d){return this.c6o(d)},
b_H(){return this.a_c(null)},
c6o(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_c=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aS.bl$.d.c
if(s!=null)s.j5()
t.f.sb1(0,o)
t.l(new C.eqt(t))
G.dI(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bEP(C.isr(o)),$async$a_c)
case 3:r=n.a=m.iHs(f)
p.b=""
if(r!=null&&!C.ixr(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iyY(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.amF(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.l(new C.equ(p,t))
t.ccj(p.a)
case 1:return B.h(u,v)}})
return B.i($async$a_c,v)},
ccj(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
A.d.a7(w)
w=++m.as
v=m.gY6()
A.d.a7(v.a)
A.d.a7(v.b)
m.e.a7(0)
m.l(new C.eqp(m))
t=d.d
s=B.S(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.eqn(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eqq(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.eqr(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eqs(m,d))},
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bk.j(0.1),g=B.n(16),f=B.K(A.bk.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fAM,A.bc,B.E(B.c(m.Q,l,l,l,l,l,l,A.BA,l,l,l),1)],x.p),A.l,l,A.e,A.i,0,l,l)
else if(k==null)j=D.h1l
else{w=B.E(B.c(k.a,l,l,l,l,l,l,A.LY,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.c(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fLZ,l,l,l)],v),A.l,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.C(A.rg,B.c(u,l,l,l,l,l,l,D.fOS,l,l,l),l))
w.push(A.cR)
w.push(B.c(k.b,l,l,l,l,l,l,A_.FQ,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.n(10)
w.push(B.q(l,B.c(u,l,l,l,l,l,l,D.fRz,l,l,l),A.f,l,l,new B.p(t,l,l,s,l,l,A.m),l,l,l,A.hz,A.ct,l,l,l))}w.push(A.aj)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.c(t,l,l,l,l,l,l,A.mh,l,l,l)
q=u[r]
s=s?A.c:A.aF
w.push(new B.C(A.HJ,new B.c1(A.aK,A.e,A.i,A.B,l,A.p,l,0,B.a([t,A.b6,new B.bu(1,A.b8,B.c(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bk.j(0.3)
s=new B.aQ(12,12)
s=B.q(l,B.c(o.a,l,l,l,l,l,l,A.X5,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bd(s,s,s,s),l,l,A.m),l,l,l,l,A.h0,l,l,l)
t=A.c.j(0.07)
q=new B.aQ(12,12)
A.d.u(w,B.a([A.N,new B.bL(A.a9,l,l,s,l),A.at,B.q(l,B.c(o.b,l,l,l,l,l,l,D.fXq,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bd(q,q,q,q),l,l,A.m),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.eIo)
j=B.cc(B.w(w,A.B,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.w(B.a([B.akP(B.q(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.p(h,l,f,g,l,l,A.m),l,l,l,D.bGC,A.ep,l,l,1/0),A.b0,A.ie),B.E(C.hxR(m.gY6(),l,l,m.e),1)],w),A.l,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.e5("Ask about it",i,new C.eqx(m),l,A.bk,l),new E.e5("Invent something new",!i,new C.eqy(m),l,A.bk,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dEd[p]
i.push(new E.e5(n,!1,new C.eqz(m,n),l,A.bk,l))}f.push(new E.fm(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dkj[p]
i.push(new E.e5(r,!1,new C.eqA(m,r),l,A.bk,l))}f.push(new E.fm(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.M,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bB(l,new B.b6(4,B.n(16),A.a1),l,A.f1,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.k4,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.am,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.eqB(m,k),l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,A.du,!0,A.a7,l,A.ao,l,A.WV,l,l),1)
h=m.at
v=h&&j?D.bWP:A.ef
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.aa,new E.fL(v,j,new C.eqC(m,k),A.bk,l)],w),A.l,l,A.e,A.i,0,l,l))
return E.m0(A.bk,A.fh,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.w(f,A.l,l,A.e,A.P,0,A.p))}}
C.Ho.prototype={}
C.vQ.prototype={}
C.Y0.prototype={
R(){return new C.aHZ(A.J,A.J,A.aA,B.aR(x.S),$,A.bH,0,B.a([],x.X),null,null)}}
C.aHZ.prototype={
gb11(){var w,v,u,t=this,s=D.Jr[t.cx],r=D.Ug[t.cy],q=D.Et[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e8(w,w.r,B.a3(w).c),v=w.$ti.c;w.B();){u=w.d
p.push(D.aDx[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cG(p,0,new C.eFO())},
ga50(){return D.Jr[this.cx].d/this.gb11()},
gaSW(){return 0.1*(D.Jr[this.cx].d/0.9)/D.Ug[this.cy].d},
Z(){this.a4()
this.mv()
C.cnE("rocket_lander").bD(new C.eG7(this),x.k)},
ccs(){var w=this
w.ay=A.h.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cW.ai()*0.6
w.f=new B.m(0.15+A.cW.ai()*0.7,0.08)
w.r=new B.m((A.cW.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mO(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.l(new C.eG8())
return}w=D.u5[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.h.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.m(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga50()
v=v.a6(0,new B.m(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaSW())}if(m.dy){t=m.r
v=v.aI(0,t.aM(0,t.gcE()*6*D.aFA[m.d]))}t=m.r=m.r.a6(0,v.aM(0,d))
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
p=D.Et[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b5r("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.Kc("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga50()/(D.u5[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.h.a1(m.ga50()/(D.u5[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dI(80,"",500,0,0.6,"noise")
B.fX()}}if(m.Q&&m.x>0&&A.n.F(A.h.bb(m.CW*20),2)===0)G.dI(90,"",70,0,0.12,"noise")
m.l(new C.eG9())},
aiW(d,e,f,g,h){var w,v=null,u=B.c(d,v,v,v,v,v,v,D.fOm,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.e5(e[w].a,f.$1(w),new C.eFQ(this,g,w),v,h,v))
return new B.C(A.eD,B.w(B.a([u,A.cR,B.bY(A.bI,s,A.br,v,6,6)],t),A.B,v,A.e,A.i,0,A.p),v)},
bKY(d){var w,v,u,t,s=this,r=null,q=s.ga50()/(D.u5[s.d].b/9.81*0.28)>=1,p=A.h.S(1/s.gaSW()),o=D.aFA[s.d],n=B.n(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.c("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,B.c(d.d+" Gravity here: "+B.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.adn,r,r,r),A.S,s.aiW("ENGINE: "+D.Jr[s.cx].b,D.Jr,new C.eFF(s),new C.eFG(s),A.cX),s.aiW("FUEL TANK: "+D.Ug[s.cy].b,D.Ug,new C.eFH(s),new C.eFI(s),A.bf),s.aiW("LANDING GEAR: "+D.Et[s.db].b,D.Et,new C.eFJ(s),new C.eFK(s),A.aH),s.aiW("EXTRAS (tap to add)",D.aDx,new C.eFL(s),new C.eFM(s),A.bk)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.hkC)
o=(q?A.bf:A.c1).j(0.14)
w=B.n(12)
v=A.h.a1(s.gb11(),2)
u=A.h.a1(s.ga50()/(D.u5[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.c("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.h.S(D.Et[s.db].d*100)+".",r,r,r,r,r,r,D.fP1,r,r,r),A.f,r,r,new B.p(o,r,r,w,r,r,A.m),r,r,r,A.hz,A.bS,r,r,r))
m.push(A.S)
m.push(new B.bL(A.z,r,r,new E.fL(A.oi,"Launch",new C.eFN(s),A.bf,r),r))
return B.at(B.q(r,B.cc(B.w(m,A.B,r,A.e,A.P,0,A.p),A.t,r,A.y,r,r,A.bR,r,r,A.ah),A.f,r,A.mm,new B.p(D.bw9,r,l,n,r,r,A.m),r,r,r,A.bS,r,r,r,r),r,r,r)},
b2e(d,e,f,g){var w=null,v=f?A.cX:A.c.j(0.1),u=B.n(18),t=B.K(A.aT,A.r,1)
return B.n7(A.j6,B.q(w,B.V(d,A.c,w,w,w,30),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,62,w,w,w,w,w,g),w,new C.eFC(e),new C.eFD(e),w,w,w,w,new C.eFE(e))},
b2d(d,e,f){return this.b2e(d,e,f,74)},
C(d){var w,v,u,t,s=this,r=null,q=B.cg(new C.eG0(s,D.u5[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.u5[w].a:"\ud83d\udd12"
o.push(new E.e5(v,s.d===w,new C.eG1(s,w),r,D.u5[w].c,r))}v=B.a([s.b2d(F.asW,new C.eG2(s),s.y),A.bc,s.b2e(A.vG,new C.eG3(s),s.Q,130),A.bc,s.b2d(A.R9,new C.eG4(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.n(18)
A.d.u(v,B.a([A.bc,B.aA(r,B.q(r,D.c0d,A.f,r,r,new B.p(u,r,B.K(A.aT,A.r,1),t,r,r,A.m),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eG5(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.m0(A.cX,A.fh,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.w(B.a([new E.fm(o,"WORLD",r),B.A(v,A.l,r,A.bb,A.i,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.blU.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.u5[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.U(),f=B.M(),e=l.c,d=B.ap(I.a0U,e,0.25)
d.toString
f.san(new B.a6(A.aU,A.b2,A.w,B.a([F.ajB,d],x.O),n,n).az(0,new B.a4(0,0,i,h)))
a0.aE(new B.a4(0,0,i,h),f)
w=new B.e6()
w.cW(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.U,A.R,A.X,A.Y,A.W)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.m(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aI(g.r,A.ak,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e6()
s.cW(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.aj(f)
t.ac()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bz())
h=$.U()
g=B.M()
g.r=B.ap(e,A.v,0.6).gp(0)
a0.af(t,g)
q=B.c0(new B.m(m.ax*k,u+10),8,m.ay*k)
g=B.bx(q,A.jL)
e=B.M()
e.r=A.bh.gp(0)
a0.aq(g,e)
e=B.bx(q.cu(2),A.pm)
g=B.M()
g.b=A.ad
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.aq(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bs(f.save())
f.translate(g.a*k,g.b*j)
a0.jy(0,m.w)
k=m.as
if(k==="crashed"){m=B.M()
m.r=A.cX.j(0.6).gp(0)
m.y=Z.PL
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aI(k,A.ak,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bz())
m=B.M()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aI(k,A.ak,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bz())
m=B.M()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aI(m,A.ak,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.cm(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.cm(-14,-10,0,-26))
o.E(new B.bz())
k=B.M()
k.san(F.avX.az(0,D.fse))
a0.af(o,k)
k=B.M()
k.r=A.aH.gp(0)
a0.O(H.we,5,k)
k=new B.aI(m,A.ak,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bz())
j=B.M()
j.r=A.aC.gp(0)
a0.af(k,j)
i=new B.aI(m,A.ak,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bz())
m=B.M()
m.r=A.aC.gp(0)
a0.af(i,m)
f.restore()},
aD(d){return!0}}
C.aQ5.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCN.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bCK()}}
C.aWm.prototype={}
C.a5A.prototype={}
C.beK.prototype={}
C.Wr.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ez(["skin"],x.N),o=new Float32Array(0)
return new C.aGo(w,v,u,t,s,r,q,new B.cB(null,x.A),p,D.N_,D.N_,A.aA,A.cW,o,new Int32Array(0),$,A.bH,0,B.a([],x.X),null,null)}}
C.aGo.prototype={
Z(){var w=this
w.a4()
w.mv()
w.as=new C.c9Q(w.gclS())
new C.dUX(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a2(0)
v.d=null}this.bBN()},
clT(d){var w,v=this
if(v.c==null)return
w=J.a1(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fe(0,B.J(["t","init","data",$.hI7],x.N,x.z))
v.at=!0
v.ay=""
v.aCV()
break
case"parts":v.l(new C.dUx(v))
break
case"pick":v.l(new C.dUy(v,d))
break
case"shot":v.akO(B.v(w.h(d,"data")))
break
case"error":$.an.$1("[body viewer] "+B.v(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.l(new C.dUz(v))
break}},
aCV(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aBn[q.cx]
v=new C.dUA()
u=q.ch
u=B.B(u,B.a3(u).k("ck.E"))
A.d.ff(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.v(v.$1(w.b))+B.v(v.$1(w.c))+B.v(v.$1(w.d)),"sel",q.cy,"bpm",A.h.S(q.k4),"spin",q.go],t,x.cK)
r=A.V.au(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.S(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.fe(0,u)}},
akO(d){return this.cDt(d)},
cDt(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$akO=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cL.aL(A.a.aV(d,A.a.c9(d,",")+1))
w=6
return B.b(B.ayy(B.a([B.cKb(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$akO)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.q).f.T(I.aXf)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$akO,v)},
aCj(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mO(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.h.bb(w)!==A.h.bb(v.p1)){E.Yr("kick",0,0.4)
v.VH(170,new C.dUY())}v.p1=w
return},
agn(d){var w,v,u,t,s=this
s.l(new C.dUB(s,d))
if(d==null){s.fy=D.N_
s.fr=1
w=s.as
if(w!=null)w.fe(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.T(w).k("X<1>")
u=B.B(new B.X(w,new C.dUC(d),v),v.k("L.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.K(0,t)
if(s.CW===2)s.CW=1}s.aCV()
w=s.as
if(w!=null)w.fe(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cG0(t,d)
return},
cG0(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Yr("kick",0,0.8)
this.VH(260,new C.dUD())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dI(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.VH(w*70,new C.dUE(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dI(110,"",360,0.7,0.3,"saw")
else E.hmW("organic",6+A.n.F(e.length,8),200,0.6)
break
case"bone":G.dI(210+e.length*4,"",80,0.6,0.55,"tri")
G.dI(2400,"",20,0,0.3,v)
break
case"muscle":G.dI(70,"",150,1,0.6,"sine")
break
case"vessel":G.dI(300,"",380,0.4,0.22,v)
E.Yr("kick",0,0.3)
break
default:E.hmW("organic",2+A.n.F(e.length,6),200,0.4)}},
cKN(d){this.l(new C.dUG(this,d))},
b2x(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aCj(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=B.B(o,o.$ti.k("ck.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
c23(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.l(new C.dUu(u,w,d))
v=x.t
C.Kc("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.VH(1100,new C.dUv(u))
return}if(d==null){if(u.cy!=null)u.agn(null)
return}u.agn(d)},
c5G(d,e){var w,v=this,u=null,t=B.n(18),s=B.K(A.c5.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.c(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fKi,u,u,u)}else if(d==null||e==null)w=D.fZE
else{w=x.p
w=B.A(B.a([B.E(B.w(B.a([B.c(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hj,u,u,u),A.cR,B.c(e.b,u,u,u,u,u,u,A_.FQ,u,u,u)],w),A.B,u,A.e,A.P,0,A.p),1),B.aJ(u,u,u,u,D.c2U,u,u,u,new C.dUw(v),u,u,u,u,"Back to the whole body",A.cp)],w),A.B,u,A.e,A.i,0,u,u)}return B.q(u,w,A.f,u,u,new B.p(I.a_6,u,s,t,u,u,A.m),u,u,u,u,X.aoe,u,u,u)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dQm.h(0,g)
i.aCV()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dvE
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aCj(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aJ(h,h,h,h,I.p9,h,h,h,new C.dUN(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bK:B.Ch(h,A.qq,p))}p=i.ax
o=p?0:1
q.push(new B.dn(p,B.xR(B.q(A.z,B.w(D.dFS,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.baw,h,h,D.hNq,h,h,h,h,h),A.b0,A.nk,o),h))
q=B.w(B.a([B.E(new B.am(A.a0,h,A.b5,A.t,q,h),1),new B.C(F.anV,i.c5G(g,f),h)],v),A.l,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dm4[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.e5(l,o,new C.dUO(i,n),n.c,A.c5,h))}p=B.a([new E.fm(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.e5(k,k===i.cy,new C.dUP(i,k),h,A.aQ,h))}p.push(new E.fm(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.jf(A.c1,""+A.h.S(o)+" beats/min","Heart rate",180,40,new C.dUQ(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.Gy(D.aBn[j],i.cx===j,new C.dUR(i,j),!1,h))
p.push(new E.fm(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.e5("Spin",o,new C.dUS(i),D.arV,A.aH,h),new E.fL(A.mF,"Reset view",new C.dUT(i),A.c,h),new E.e5(l,m,new C.dUU(i),A.IL,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.e5("Heartbeat sound",i.ok,new C.dUV(i),T.p7,A.c1,h))
p.push(new E.fm(v,h,h))
return E.m0(A.c5,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.w(p,A.l,h,A.e,A.P,0,A.p))}}
C.aP9.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aPa.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bBM()}}
C.c9Q.prototype={
kZ(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aE(e,"</script","<\\/script")
v=$.hP1
$.hP1=v+1
u="ngmy-body-viewer-"+v
$.xN()
$.qh().py(u,new C.c9R(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fI(v,"message",new C.c9S(t),!1,x.gA)
t.b=u},
fe(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Se(w.contentWindow)
if(w!=null)J.akB(w,e,"*")}}catch(v){}}}
C.z3.prototype={}
C.Dr.prototype={}
C.o6.prototype={}
C.bfy.prototype={}
C.Wy.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aGq(B.S(w,x.a2),B.a([],x.cB),B.S(w,v),B.S(w,v),B.S(w,u),A.aA,A.J,A.J,B.aR(u),$,A.bH,0,B.a([],x.X),null,null)}}
C.aGq.prototype={
Z(){var w=this
w.a4()
w.mv()
w.afh()
$.aS.U$.push(new C.dWD(w))},
afh(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$afh=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$afh)
case 6:q=e.nQ("ngmy_circuit_passed_v1")
r=q==null?A.M:q
if(s.c!=null)s.l(new C.dWh(s,r))
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
return B.i($async$afh,v)},
afE(d){return this.c9X(d)},
c9X(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$afE=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return B.b(B.aB(),$async$afE)
case 6:r=f
q=s.cx
p=B.a3(q).k("kr<ck.E,o>")
q=B.B(new B.kr(q,new C.dWk(),p),p.k("L.E"))
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
return B.i($async$afE,v)},
aAN(d,e,f,g){var w="c"+this.y++,v=new C.Dr(w,e,f,g)
this.d.n(0,w,v)
return v},
n3(d,e,f){return this.aAN(0,e,f,0)},
aeB(d,e){var w
if(D.AX.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a6(0,new B.m(-36,w))},
uF(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aX9(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fh$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.du(w,w.r,w.e),r=!1;s.B();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.n.ec(m,D.d31[A.n.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uF(p,0)&&n.uF(p,1)
break
case"or":p=q.a
o=n.uF(p,0)||n.uF(p,1)
break
case"xor":p=q.a
o=n.uF(p,0)!==n.uF(p,1)
break
case"nand":p=q.a
o=!(n.uF(p,0)&&n.uF(p,1))
break
case"nor":p=q.a
o=!(n.uF(p,0)||n.uF(p,1))
break
case"not":o=!n.uF(q.a,0)
break
default:o=n.uF(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bVu(){return this.aX9(null)},
mO(d){var w,v,u,t,s,r,q,p,o,n=this
n.bVu()
if(!n.ax)return
for(w=n.d,w=new B.b9(w,B.a3(w).k("b9<2>")).gae(0),v=new B.eT(w,new C.dWE()),u=n.f,t=n.w,s=0;v.B();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fh$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fh$)
o=s+1
G.dI(520+90*A.n.F(s,4),"",200,0,0.25,"square")
s=o}}},
aAO(d){var w=this
w.d.a7(0)
A.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
mx(d,e){var w=this.x
return new B.m(d*w.a,e*w.b)},
awV(d){var w=this
if(w.x.A(0,A.aA)){$.aS.U$.push(new C.dWf(w,d))
return}w.l(new C.dWg(w,d))},
cGj(d){this.l(new C.dWl(this,d,$.bJV()[d]))},
ceP(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bJV()[a0]
v=d.d
u=B.a3(v).k("b9<2>")
t=u.k("X<L.E>")
s=t.k("L.E")
r=B.B(new B.X(new B.b9(v,u),new C.dWa(),t),s)
A.d.b_(r,new C.dWb())
q=B.B(new B.X(new B.b9(v,u),new C.dWc(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.l(new C.dWd(d,w))
return}u=d.r
p=B.dE(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.n.dJ(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.n.h5(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aX9(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lC(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aK(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a7(0)
u.u(0,p)
d.l(new C.dWe(d,o,a0))},
aBP(d){var w,v,u,t,s=this.d,r=B.a3(s).k("b9<2>")
s=B.B(new B.b9(s,r),r.k("L.E"))
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
cot(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("b9<2>")
r=B.B(new B.b9(r,q),q.k("L.E"))
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
c5z(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.B();){r=w.d
q=D.AX.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aeB(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bUe(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aeB(p,o)
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
ceR(d){var w,v,u,t=this,s=t.aBP(d)
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
t.l(new C.dWm())
return}u=t.bUe(d)
if(u!=null)t.l(new C.dWn(t,u))
else t.l(new C.dWo(t))},
azB(d){return this.c8U(d)},
c8U(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$azB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aBP(d)
if(s==null){w=1
break}B.jI()
t.l(new C.dWj(t,s))
case 1:return B.h(u,v)}})
return B.i($async$azB,v)},
bGH(d){if(this.x.A(0,A.aA))return
this.l(new C.dW9(this,d,A.cW))
B.f4()},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bJV()[g]
g=x.p
v=B.a([B.aJ(h,h,h,h,B.V(i.ax?T.p7:A0.u_,A.ac,h,h,h,21),h,h,h,new C.dWx(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.cw.j(0.14)
r=B.K(A.cw.j(0.5),A.r,1)
q=B.a([B.c("Challenge: "+w.a,h,h,h,h,h,h,D.fJp,h,h,h),B.c(w.b,h,h,h,h,h,h,A.Xj,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.C(A.kO,B.c(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bf:A.f_,h,h,h,h,h,h,h,h,12,h,h,A.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.w(q,A.B,h,A.e,A.i,0,A.p),1),B.bH(D.hau,h,i.gceO(),B.bp(A.cw,h,h,h,h,h,h,h,h,h,h,A.cp))],g),A.l,h,A.e,A.i,0,h,h),A.f,h,h,new B.p(s,h,r,t,h,h,A.m),h,h,h,U.Pm,D.bHl,h,h,1/0))}u.push(B.E(B.cg(new C.dWy(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.c(D.AX.h(0,r).a+": "+D.AX.h(0,r).e,h,h,h,h,h,h,Aj.uE,h,h,h),A.f,h,h,new B.p(s,h,h,t,h,h,A.m),h,h,h,A.a27,A.bS,h,h,1/0))}u=B.w(u,A.l,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.AX.gdW(D.AX),s=s.gae(s);s.B();){r=s.gP(s)
q=new B.aQ(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.q(h,B.w(B.a([B.V(p.b,o,h,h,h,20),A.bs,B.c(p.a,h,h,h,h,h,h,D.aZj,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.p(n,h,new B.bE(m,m,m,m),new B.bd(q,q,q,q),h,h,A.m),h,h,h,A.f6,A.D9,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dWz(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dAy[l]
s.push(new E.fL(A.Ra,k.b,new C.dWA(i,k),A.cw,h))}s.push(new E.fL(I.xu,"Clear",new C.dWB(i),A.c1,h))
r=B.a([],g)
for(j=0;q=$.bJV(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.e8:A.m7
o=i.ay
n=i.cx.q(0,j)?A.bf:A.bu
r.push(new E.e5(q.a,o===j,new C.dWC(i,j),p,n,h))}return E.m0(A.cw,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.w(B.a([new E.fm(t,"PARTS",h),new E.fm(s,"TRY",h),new E.fm(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bfQ.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.U()
w=B.M()
w.r=D.ahQ.gp(0)
a5.aE(new B.a4(0,0,0+a3,0+a4),w)
v=B.M()
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
i=a3.aeB(l,o.c)
h=s.h(0,n)===!0
n=$.U()
g=B.a([],r)
f=new B.aI(n.r,A.ak,a2,a2,g)
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
if(h){n=new B.ar(A.U,A.R,A.X,A.Y,A.W)
n.b=A.ad
n.c=9
n.r=A.bu.j(0.28).gp(0)
n.y=O.oZ
a5.af(f,n)}n=new B.ar(A.U,A.R,A.X,A.Y,A.W)
n.b=A.ad
n.c=3.2
n.d=A.bG
n.r=(h?A.eI:A.bz).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a6(0,D.KE)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aI($.U().r,A.ak,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.i6(a4+e,w,a3-e,s,a3,s))
s=B.M()
s.b=A.ad
s.c=3
s.r=A.ac.gp(0)
a5.af(r,s)}for(a3=new B.du(q,q.r,q.e);a3.B();)this.ceQ(a5,a3.d)},
ceQ(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.AX.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.c0(a0.c,64,64)
s=B.bx(t,A.k3)
r=w.cy===v
q=s.eM(A.cy)
$.U()
p=B.M()
p.r=A.v.j(0.55).gp(0)
p.y=A.nn
d.aq(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.M()
p.san(new B.bU(A.z,0.5,A.w,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).az(0,B.bZ(a0.c,52)))
d.O(q,52,p)}q=s.eM(A.cN)
p=B.M()
o=e.c
p.r=B.ap(o,A.v,0.65).gp(0)
d.aq(q,p)
n=u?0.35:0
q=B.M()
p=B.ap(o,A.c,0.1+n)
p.toString
m=B.ap(o,A.v,u?0.2:0.45)
m.toString
q.san(new B.a6(A.aU,A.b2,A.w,B.a([p,m],x.O),g,g).az(0,t))
d.aq(s,q)
q=B.M()
q.b=A.ad
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.p5:D.bXo}else l=e.b
k=C.hoM(B.lC(l.a),30,A.c,l.b,g,A.C)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aI(0,new B.m(p/2,q.gb4(q)/2)))
j=C.hoM(e.a,10.5,A.c,g,g,A.C)
j.a5(d,a0.c.a6(0,new B.m(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hoM(f,9,u?A.eI:A.bX,g,g,A.u)
i.a5(d,a0.c.a6(0,new B.m(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b3c(d,w.aeB(a0,h),o)
this.b3c(d,a0.c.a6(0,D.KE),o)},
b3c(d,e,f){var w
$.U()
w=B.M()
w.r=D.ahQ.gp(0)
d.O(e,8.5,w)
w=B.M()
w.b=A.ad
w.c=2.2
w.r=f.gp(0)
d.O(e,8.5,w)
w=B.M()
w.r=A.c.gp(0)
d.O(e,3.2,w)},
aD(d){return!0}}
C.aPe.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCw.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bBR()}}
C.OS.prototype={
R(){return new C.aGH(B.mu(0,null,null))}}
C.LI.prototype={
a9(){return"_UnfoldStyle."+this.b}}
C.Br.prototype={}
C.aGH.prototype={
Z(){this.a4()
B.bM(A.pU,C.iGp(),x.H)},
ceX(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcs(0).at
v.toString
w.f=v}w.l(new C.e1N(w,e))},
c7x(){var w=this
w.e.t()
w.e=B.mu(w.f,null,null)
w.l(new C.e1M(w))},
t(){this.e.t()
this.a3()},
C(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.Q(d).ax.a===A.dg?A.c:A.c7
return B.pf(t,B.c6(v,s,t?new C.bwp(w.e,w.gceW(w),new C.e1O(d),v):new C.aL5(u,new B.bb(u.b,x.W)),v,!1,!1,v,!1),new C.e1P(w,u),x.K)}}
C.by3.prototype={}
C.bwp.prototype={
b3d(d,e,f){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,f?A.bF:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.C(X.a2z,B.w(B.a([v,A.bs,B.c(e,w,w,w,w,w,w,B.l(w,w,f?A.cz:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.B,w,A.e,A.i,0,A.p),w)},
C(d){var w,v,u,t=this,s=null,r=B.Q(d).ax.a===A.dg,q=B.aF(d,A.dL,x.w).w,p=B.aJ(s,s,s,s,B.V(A.eF,r?A.bF:A.ac,s,s,s,20),s,s,D.hNT,t.e,s,s,s,s,s,s)
if(r)w=new B.p(A.c,s,s,B.n(14),A.Ju,s,A.m)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.n(14)
w=new B.p(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.ab(0,A.H,A.aH.j(0.22),A.J,8)],x.V),new B.a6(A.aw,A.aD,A.w,w,s,s),A.m)}v=B.c("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bF:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.q(s,B.w(B.a([v,B.c("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cz:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.hNY,s,A6.aoN,s,s,s),s,s,s),1),A.ux],u),A.l,s,A.e,A.i,0,s,s)
v=t.b3d("STUDIOS","Play, make things, and keep what you make",r)
$.bJW()
return B.bn(!1,B.w(B.a([B.E(B.va(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nA(new B.R(8,q.r.b+6,8,4),new B.l2(w,s),s),new B.l2(v,s),new B.nA(A.ig,B.QC(new B.pi(new C.fiq(d),9,!0,!0,!0,0,B.tI(),s),D.aX4),s),new B.l2(t.b3d("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nA(D.bHu,B.QC(new B.pi(new C.fir(t),6,!0,!0,!0,0,B.tI(),s),D.aX4),s)],u)),1)],u),A.l,s,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!1)}}
C.ahq.prototype={
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.Q(d).ax.a===A.dg){w=B.n(20)
v=(A.n.ao(o.c,3)&1)===0
u=B.a8x(v?A.aH:A.bk,20)
v=v?A.aH:A.bk
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eM(B.w(B.a([new B.Ww(v,44,m.c,n,n),A.N,B.c(m.a,n,2,A.a2,n,n,n,D.fPM,A.K,n,n),A.cR,B.c(m.b,n,2,A.a2,n,n,n,D.fSG,A.K,n,n)],x.p),A.l,n,A.bb,A.i,0,A.p),n,u,n,A.Do,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.n(20)
v=B.n(20)
u=B.ap(L.mt,l,0.3)
u.toString
t=x.O
u=B.a([u,D.alb],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ab(-4,A.H,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.v,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ab(0,A.H,l.j(0.5),A.J,12)],r)
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eM(B.w(B.a([B.q(n,B.V(m.c,A.c,n,n,n,24),A.f,n,n,new B.p(n,n,n,n,r,new B.a6(A.aw,A.aD,A.w,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.N,B.c(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cR,B.c(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.bb,A.i,0,A.p),n,new B.p(n,n,s,v,q,new B.a6(A.aw,A.aD,A.w,u,n,n),A.m),n,A.Do,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.age.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.Q(d).ax.a===A.dg,h=(A.n.ao(this.c,3)&1)===0?A.aH:A.bk,g=B.n(20)
if(i)w=B.a8x(h,20)
else{w=B.n(20)
v=B.ap(L.mt,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.alb],x.O)
v=new B.p(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ab(0,A.H,A.v.j(0.4),A.cy,12)],x.V),new B.a6(A.aw,A.aD,A.w,v,l,l),A.m)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aQ(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.Wx(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ab(0,A.H,A.v.j(0.45),A.aaE,0)],s)
u.push(B.q(l,B.V(t[q],A.c,l,l,l,11),A.f,l,l,new B.p(l,l,l,new B.bd(o,o,o,o),m,new B.a6(A.a5,A.a9,A.w,n,l,l),A.m),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.w(u,A.l,l,A.e,A.P,0,A.p)
if(i)t=A.bF
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.c(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aG(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eM(B.w(B.a([new B.a5(58,l,u,l),A.S,t,A.at,B.V(A.E2,i?B.Wx(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.bb,A.i,0,A.p),l,w,l,A.Do,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.RV.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.v,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bP(new B.p(h,j,j,B.n(22),j,j,A.m),A.bm,j,j),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ab(0,A.H,A.v.j(0.55),A.KA,26),new B.ab(-6,A.H,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.n(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.v,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bP(new B.p(j,j,j,j,j,new B.a6(A.aw,A.aD,A.w,B.a([p,o,n,i],m),D.dGW,j),A.m),A.bm,j,j),0,0,0),B.ao(j,new B.bP(new B.p(j,j,j,j,j,new B.a6(A.aU,A.b2,A.w,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.m),A.bm,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b4(j,j,j,new C.bxr(i,j),A.aA),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ab(0,A.H,A.c.j(0.25*t),A.J,14)],s)
s=B.q(j,B.V(k.f,A.c,j,j,j,28),A.f,j,j,new B.p(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.c(k.r,j,j,j,j,j,j,D.fLP,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.at,B.c(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.FB)
p.push(B.q(j,j,A.f,j,j,new B.p(A.c.j(0.28),j,j,B.n(3),j,j,A.m),j,5,j,j,j,j,j,w*0.42))
m.push(new B.C(A.hf,B.A(B.a([s,A.er,B.E(B.w(p,A.B,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.dn(!0,B.el(j,A.v.j(A.h.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.n(22)
m.push(B.bS(0,new B.dn(!0,new B.bP(new B.p(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.m),A.bm,j,j),j),0,0,0))
return new B.a5(w,v,new B.am(A.a0,j,A.ab,A.f,B.a([h,B.bS(0,new B.bP(new B.p(j,j,j,u,r,j,A.m),A.bm,B.bv(q,new B.am(A.a0,j,A.ab,A.t,m,j),A.ap),j),0,0,0)],l),j),j)}}
C.bxr.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a4(r,-10,s,w)
u=d.c
J.bs(u.save())
u.translate(v.gbE().a,v.gbE().b)
d.jy(0,0.35)
t=B.c0(A.J,(w- -10)*1.6,s-r)
$.U()
s=B.M()
s.san(new B.a6(A.a5,A.a9,A.w,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).az(0,t))
d.aE(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.bwX.prototype={
C(d){var w=null,v=B.n(22),u=B.a([D.btZ,D.akd],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ab(0,A.H,A.v.j(0.5),A.ky,24)],x.V),q=B.n(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,new B.bP(new B.p(w,w,s,v,r,new B.a6(A.aw,A.aD,A.w,u,w,w),A.m),A.bm,B.bv(q,B.b4(B.at(B.V(A.j8,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bes(p,w),A.aA),A.ap),w),w)}}
C.bes.prototype={
a5(d,e){var w,v,u,t,s,r
$.U()
w=B.M()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.m(s,0),new B.m(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.m(0,r),new B.m(u,r),w)
u=e.eq(A.J)
$.U()
t=B.M()
t.b=A.ad
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aD(d){return!1}}
C.aL5.prototype={
R(){return new C.aL6(new B.cB(null,x.A),null,null)}}
C.aL6.prototype={
gre(){var w,v=this,u=v.d
if(u===$){w=B.br(null,D.bEK,null,1,null,v)
w.cU(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gKh(){var w,v=this,u=v.e
if(u===$){w=B.br(null,A.fP,null,1,null,v)
w.fp(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaAP(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gceT(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gb_p(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gb0c(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbco(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a4()
var w=this.gre()
w.dr()
w.e2$.K(0,this.gcG1())},
cG2(){var w,v,u,t,s,r,q,p=this,o=p.gre().x
o===$&&B.d()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as&&p.ch<0){switch(p.gaAP().a){case 0:w=D.on
break
case 1:w=D.vZ
break
case 2:w=D.a72
break
case 3:w=D.on
break
case 4:w=D.ds_
break
case 5:w=D.vZ
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.afq)r=0.09
else r=s===D.afr?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dI(260+90*v,"",260,1.6,0.18,"tri")
u=D.cgq[v]
E.mQ("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.Kc("bell",D.cpi,1400,0.35)}}p.ax=o},
t(){this.gre().t()
this.gKh().t()
this.bDH()},
a0I(){var w=this
w.gre().d5A(0,B.dw(0,0,0,A.h.S(11e3/w.Q),0,0))
w.l(new C.fi6(w))},
cqz(){this.gre().bR(0)
this.l(new C.fi5(this))},
a0H(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a0H=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:if(r.ch>=0){w=1
break}j=$.aS.bl$.x.h(0,r.f)
i=j==null?null:j.gbf()
if(!(i instanceof B.oD)||i.fy==null){w=1
break}h=r.as
j=r.gre()
j.bR(0)
g=r.gKh()
g.bR(0)
r.l(new C.fhW(r))
f=i.ga0(0)
e=f.a
d=f.b
q=Math.min(3.5,1600/Math.max(e,d))
p=A.h.bb(e*q)
o=A.h.bb(d*q)
n=A.h.S(11/r.Q*20)
m=null
t=4
w=7
return B.b(E.ajF(24*q,20,new C.fhX(r,n,q,p,o),n,o,new C.fhY(r),p),$async$a0H)
case 7:l=a3
if(J.aa(l)===0){e=B.be("empty")
throw B.Y(e)}e=r.a.c
d=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
k=B.aE(e.b.toLowerCase(),d,"_")
w=8
return B.b(E.aUa(l,k),$async$a0H)
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
break}r.l(new C.fhZ(r))
g.fp(0,!0)
j.sp(0,0)
if(h)r.a0I()
r.c.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.c(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0H,v)},
agN(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$agN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gb0c(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.bc(q,A.b9,A.aP),$.ay()))}m=B.a([],m)
for(t=u.gbco(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.bc(p,A.b9,A.aP),$.ay()))}o=B.B(u.gb_p(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bV(L.mt,null,new C.fi4(u,l,m,o),t,!0,!0,!0,A.me,!1,!1,x.H),$async$agN)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.ay()
n.W$=0}return B.h(null,v)}})
return B.i($async$agN,v)},
C(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gaAP(),e=h.a.c,d=e.b,a0=h.gceT(),a1=new C.Br(f,d,e.c,a0,h.gb_p(),h.gb0c(),h.gbco())
e=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
e.toString
f=x.p
w=B.a([B.aJ(g,g,g,g,B.V(h.at?T.p7:A0.u_,A.ac,g,g,g,21),g,g,g,new C.fie(h),g,g,g,g,"Sound",g),B.aJ(g,g,g,g,D.c6G,g,g,g,h.gceV(),g,g,g,g,"Edit words and pictures",g),B.aJ(g,g,g,g,I.p9,g,g,g,new C.fif(h,a2),g,g,g,g,"Share",g)],f)
v=B.a([B.ca(h.gKh(),new C.fig(h,a1),g),B.cg(new C.fih(h,a1))],f)
u=h.as
t=u?h.gcqy():h.gceY()
u=u?D.bWz:A.tX
s=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
s.toString
t=B.A(B.a([B.aJ(g,g,g,g,B.V(u,s,g,g,g,34),g,g,g,t,g,g,g,g,g,A.cp),B.E(B.ca(h.gre(),new C.fii(h,a2,a1),g),1),B.aJ(g,g,g,g,D.c2K,g,g,g,new C.fij(h),g,g,g,g,"Replay",A.cp)],f),A.l,g,A.e,A.i,0,g,g)
s=h.Q
u=A.h.a1(s,1)
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
s=E.jf(r,u+"x","Speed",2.5,0.4,new C.fik(h),s)
u=B.a([],f)
for(q=0;q<6;++q){p=D.dDN[q]
o=h.r
if(o===$)o=h.r=h.a.c.a
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
u.push(new E.e5(p.b,o===p.a,new C.fil(h,p),p.c,r,g))}r=B.a([],f)
for(n=x.G,q=0;q<10;++q){m=D.cgQ[q]
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
r.push(B.aA(g,B.q(g,g,A.f,g,g,new B.p(g,g,new B.bE(i,i,i,i),g,g,new B.a6(A.aw,A.aD,A.w,m,g,g),A.a6),g,k,g,I.anJ,g,g,g,l),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.fim(h,m),g,g,g,g,g,g,!1,A.a4))}u=B.a([t,s,new E.fm(u,"STYLE",g),new E.fm(r,"THEME",g),A.aj],f)
t=h.ch
if(t>=0){s=B.n(6)
a0=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
a0.toString
u.push(new B.C(A.jY,B.w(B.a([B.bv(s,B.jJ(A.by,g,a0,8,g,t,g),A.ap),A.at,B.c("Making your GIF\u2026 "+A.h.S(h.ch*100)+"%",g,g,g,g,g,g,A.nD,g,g,g)],f),A.l,g,A.e,A.i,0,A.p),g))}else{f=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
f.toString
u.push(new B.a5(1/0,g,B.df(A.oj,g,D.hlN,h.gceU(),B.bp(f,g,g,g,A.v,g,A.kN,g,g,g,g,g)),g))}return E.m0(e,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.e9(new B.am(A.a0,g,A.b5,A.t,v,g),h.f),d,B.w(u,A.l,g,A.e,A.P,0,A.p))},
bFR(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.on[r]
p=A.h.D((1-A.eh.aA(0,A.h.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.h.D(p/1.5707963267948966,0,1)
q=D.on[r]
n=q+0.12
m=A.h.D((a0-n)/(q+0.2-n),0,1)
n=D.on[r]
q=n-0.01
q=A.h.D((a0-q)/(n+0.03-q),0,1)
n=B.dA()
l=n.a
l.$flags&2&&B.ak(l)
l[11]=0.0013
n.k9(p)
l=v[r]
k=u[r]
j=t[r]
i=D.on[r]
h=i+0.1
if(A.h.D((a0-h)/(i+0.3-h),0,1)>0){i=D.on[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.on[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cS(0,r*118,0,f,f,f,new B.l0(q,new B.jh(n,f,A.aU,!0,f,new C.RV(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.on[r]
u=v-0.02
g=A.h.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.on[r]
t=v+0.12
e.push(new B.cS(0,r*118-3-2,0,f,f,4,new B.n1(new C.bw0(u,g,1-A.h.D((a0-t)/(v+0.22-t),0,1),f),f,A.aA,f,f),f))}return new B.a5(a2,358,new B.am(A.a0,f,A.ab,A.f,e,f),f)},
bX5(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vZ[r]
p=A.ra.aA(0,A.h.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vZ[r]
m=q+0.15
l=A.h.D((a0-m)/(q+0.25-m),0,1)
m=D.vZ[r]
q=m-0.03
q=A.h.D((a0-q)/(m+0.01-q),0,1)
m=B.dA()
k=m.a
k.$flags&2&&B.ak(k)
k[11]=0.0011
m.kb(n,n,n,1)
m.fM(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.RV(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dA()
k.fM(3.141592653589793)
k=new B.jh(k,f,A.z,!0,f,new C.bwX(a2,108,w,f),f)}e.push(new B.cS(0,r*130,0,f,f,f,new B.l0(q,new B.jh(m,f,A.z,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.am(A.a0,f,A.ab,A.f,e,f),f)},
cLg(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a72[w]
l.push(A.cn.aA(0,A.h.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b4(n,n,n,new C.bzx(d.d,l,D.aD5,m,C.bwo(e,0.4,0.62),f,C.bwo(e,0.45,0.7),n),A.aA),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hpj(g,w)
q=D.aD5[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cS(r,s-q*m*p+12,n,n,t,n,new B.l0(o,B.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hpj(g,w)
r=D.a72[w]
q=r+0.15
v.push(new B.cS(s,l,n,n,t,n,new B.l0(A.h.D((e-q)/(r+0.25-q),0,1),B.c(u[w],n,n,n,n,n,n,A.Xv,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.am(A.a0,n,A.ab,A.f,v,n),n)},
bMf(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cn.aA(0,C.bwo(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.at(B.dQ(B.b4(f,f,f,new C.bvp(A.d.gH(a1),C.bwo(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eCA),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.h.D((a3-l)/(0.12+m-l),0,1)
j=A.dS.aA(0,A.h.D((o-0.7)/0.3,0,1))
l=B.dA()
m=l.a
m.$flags&2&&B.ak(m)
m[11]=0.001
l.fM(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.kb(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.h.F(r,1):-1
w.push(new B.y(o,new B.cS(0,0,0,0,f,f,new B.cq(A.z,f,f,new B.l0(k*(0.45+0.55*o),B.dQ(new B.jh(l,f,A.z,!0,f,new C.RV(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.m(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.fhT())
A.d.u(a0,new B.O(w,new C.fhU(),x.fR))
return new B.a5(a5,330,new B.am(A.a0,f,A.ab,A.f,a0,f),f)},
ceS(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vZ[q]
o=A.h.D((a2-p)/(p+0.22-p),0,1)
n=A.n1.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vZ[q]
m=A.h.D((a2-m)/(m+0.02-m),0,1)
l=D.aFe[q]
k=B.dA()
k.nf(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.kb(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vZ[q]
g=h+0.1
g=A.h.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cS(0,0,0,0,e,e,new B.cq(A.z,e,e,new B.l0(m,B.dQ(new B.jh(k,e,A.z,!0,e,new C.RV(d,92,w,p,j,i,0,g*s,h,e),e),new B.m(0,l)),e),e),e))
l=D.vZ[q]
h=l+0.02
f=A.h.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cS(0,0,0,0,e,e,new B.cq(A.z,e,e,B.dQ(new B.n1(new C.bf8(w,f,q,e),e,new B.av(r,212),e,e),new B.m(0,D.aFe[q])),e),e))}return new B.a5(a4,330,new B.am(A.a0,e,A.ab,A.f,a0,e),e)},
bIR(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.m(-b0,-150),new B.m(b0,-40),D.eCF],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.on[r]
p=A.h.D((a8-q)/(q+0.2-q),0,1)
o=A.cn.aA(0,p)
q=D.aFo[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.on[r]
f=g+0.2
e=A.h.D((a8-f)/(g+0.3-f),0,1)
f=D.on[r]
g=f-0.01
g=A.h.D((a8-g)/(f+0.03-g),0,1)
f=B.dA()
d=f.a
d.$flags&2&&B.ak(d)
d[11]=0.001
f.nf(l*h+D.dwI[r]*o)
f.fM(l*0.9)
h=0.55+0.45*o
f.kb(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cS(0,0,0,0,a3,a3,new B.cq(A.z,a3,a3,new B.l0(g,B.dQ(new B.jh(f,a3,A.z,!0,a3,new C.RV(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.m(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.on[r]
i=q+0.17
a2=A.h.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aFo[r]
a6.push(new B.cS(0,0,0,0,a3,a3,new B.cq(A.z,a3,a3,B.dQ(new B.n1(new C.bvr(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.m(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.am(A.a0,a3,A.ab,A.f,a6,a3),a3)}}
C.bw0.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a4(w-v,0,w+v,e.b)
q=B.bx(u,A.hG)
$.U()
t=B.M()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=O.oZ
d.aq(q,t)
t=B.bx(u,A.hG)
q=B.M()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.bvp.prototype={
a5(d,e){var w,v,u=this.c,t=B.c0(e.eq(A.J),e.b*u,e.a*u)
$.U()
u=B.M()
u.b=A.ad
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=Z.PL
d.c2(t,u)
u=B.M()
u.b=A.ad
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c2(t,u)
u=t.cu(-14)
v=B.M()
v.b=A.ad
v.c=1
v.r=w.j(0.3).gp(0)
d.c2(u,v)},
aD(d){return!0}}
C.bf8.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.eq(A.J),h=this.c,g=A.cn.aA(0,h)
$.U()
w=B.M()
w.b=A.ad
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e6()
t.cW(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.h.D(v,0,1)).gp(0)
d.O(new B.m(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aD(d){return!0}}
C.bvr.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.eq(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.h.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.c0(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.U()
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.b=A.ad
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c2(q,p)}},
aD(d){return d.c!==this.c}}
C.bzx.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a4(0,c9,0+c4,c9+60)
$.U()
c9=B.M()
w=c0.b
v=x.O
c9.san(new B.a6(A.aU,A.b2,A.w,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).az(0,d0))
d1.aE(d0,c9)
c9=B.M()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.m(0,c3),new B.m(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hpj(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.U()
a3=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a3.r=A.v.j(0.5).gp(0)
a3.y=A.nn
d1.c2(new B.a4(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a4(d,a3,a1,a3+a0)
a5=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a6=B.ap(A.d.gH(w),A.c,0.1)
a6.toString
a5.san(new B.a6(A.aU,A.b2,A.w,B.a([a6,A.d.gal(w)],v),c1,c1).az(0,a4))
d1.aE(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aI(a2,A.ak,c1,c1,a5)
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
a5=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a5.r=B.ap(A.d.gal(w),A.v,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aI(a2,A.ak,c1,c1,a5)
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
a2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a2.r=B.ap(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b2.b=A.ad
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.aE(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.h.bb(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bx(new B.a4(b7,a6,b7+s,a9),A.hG)
$.U()
b8=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b8.r=(b5?A.c.j(r):A.v.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a4(d,a2,a1,a2+28)
J.bs(g.save())
g.clipRect(B.hS(a4),$.lH()[1],!0)
$.U()
a2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a2.san(new B.a6(A.aU,A.b2,A.w,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).az(0,b9))
d1.aE(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aQW.prototype={
b0(){this.b8()
this.b5()
this.dV()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdP())
w.bd$=null
w.a3()}}
C.a2D.prototype={
a9(){return"_Role."+this.b}}
C.qO.prototype={}
C.rz.prototype={}
C.Dv.prototype={}
C.a0z.prototype={}
C.ahd.prototype={}
C.a2Q.prototype={
ga0(d){return this.d}}
C.DG.prototype={}
C.ae2.prototype={}
C.aek.prototype={}
C.agi.prototype={}
C.blR.prototype={
a5a(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dI(d,"",e,g,h,f)},
bdx(d,e,f){return this.a5a(d,e,f,0,0.55)},
aFJ(d,e,f,g){return this.a5a(d,e,f,0,g)},
bdy(d,e,f,g){return this.a5a(d,e,f,g,0.55)},
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
an_(d,e,f,g){var w="n"+this.ay++,v=new C.rz(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tD(d,e,f){return this.an_(0,e,f,0)},
X(d,e){var w=this
w.a.X(0,e)
A.d.br(w.b,new C.dw5(e))
A.d.br(w.c,new C.dw6(e))
w.b3()},
bhq(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.nt.h(0,v.b).c===D.yD)return!1
w=this.b
if(A.d.aR(w,new C.dw2(d,e)))return!1
w.push(new C.Dv(d,e))
this.b3()
return!0},
c6l(d){var w
if(d.b==="beat")return D.cpu[A.n.F(d.d,4)]
w=this.at
switch(A.n.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aJi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.n.F(w,6)
t=D.aFF[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.DG(u,t,j.ax,90))
w.push(new C.DG(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a2Q(u,new B.m(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bdx(261.63*Math.pow(2,([0,4,7,12,16,19][A.n.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a2Q(u,new B.m(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.DG(u,t,j.ax,120))
j.aFJ(120,200,"noise",0.5)
j.bdx(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.DG(u,t,j.ax,230))
w.push(new C.DG(u,t,j.ax+160,160))
w.push(new C.DG(u,t,j.ax+320,100))
j.bdy(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.ae2(u,new B.m((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bdy(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.aek(u,u.a6(0,new B.m(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a5a(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fX()
j.a5a(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.agi(u,D.aF0[v],t,j.ax))
j.aFJ(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aFJ(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cly[A.n.F(w,3)]
for(k=1;k<=3;++k)j.cAY(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eT(w,new C.dw3(d));v.B();)j.aEb(w.gP(0),j.ax+D.cy2[A.n.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cPw[A.n.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eT(w,new C.dw4(d));v.B();)j.aEb(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.y7(w,0,v-700)},
cAY(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a0z(e,"~"+d))},
aEb(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ahd(d.a,v,e,w))
u.push(new C.a0z(w,v))},
a8Y(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a3(w).k("b9<2>")
w=B.B(new B.b9(w,v),v.k("L.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aJi(r)
u.n(0,r,o.ax+o.c6l(s))}}w=o.c
v=B.T(w).k("X<1>")
q=B.B(new B.X(w,new C.dw7(o),v),v.k("L.E"))
if(q.length!==0){A.d.br(w,new C.dw8(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.aV(u,1)
for(u=A.d.gae(v),r=new B.eT(u,new C.dw9(p));r.B();)o.aEb(u.gP(0),o.ax)}else o.aJi(u)}}A.d.br(o.d,new C.dwa(o))
A.d.br(o.e,new C.dwb(o))
A.d.br(o.f,new C.dwc(o))
A.d.br(o.w,new C.dwd(o))
A.d.br(o.x,new C.dwe(o))
A.d.br(o.r,new C.dwf(o))
o.b3()},
w6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(v=this.a,v=new B.du(v,v.r,v.e),u=x.N,t=x.K;v.B();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.V.au(B.J(["nodes",m,"edges",v],u,x.ew),null)},
Vk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.V.aN(0,d,null))
k.a7(0)
for(o=x.j,n=J.aP(o.a(J.t(w,"nodes"))),m=k.a;n.B();){v=n.gP(n)
u=B.v(J.t(v,"k"))
if(!D.nt.am(0,u))continue
t=B.v(J.t(v,"id"))
m.n(0,t,new C.rz(t,u,new B.m(B.dC(J.t(v,"x"))*k.cy.a,B.dC(J.t(v,"y"))*k.cy.b),A.h.M(B.dC(J.t(v,"p")))))
s=B.c9(B.aE(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aP(o.a(J.t(w,"edges"))),n=k.b;o.B();){r=o.gP(o)
q=B.v(J.t(r,0))
p=B.v(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.Dv(q,p))}k.b3()
return!0}catch(l){return!1}},
d_W(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rz(n,r,new B.m(q*p.a,o*p.b),s))
l.b3()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bhq(w[m.a],w[m.b])}},
ga0(d){return this.cy}}
C.H9.prototype={}
C.Y_.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aHY(new C.blR(B.S(w,x.f3),v,u,t,s,r,q,p,o,B.S(w,n),B.S(w,n),B.S(w,n),B.S(w,n),A.cW,A.L,A.aA,$.ay()),A.bH,A.J,A.J,A.M,null,null)}}
C.aHY.prototype={
af9(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$af9=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aB(),$async$af9)
case 6:q=n.kl(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.l(new C.eF8(s))
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
return B.i($async$af9,v)},
ac1(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$ac1=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.l(new C.eEY(s))
u=3
w=6
return B.b(B.aB(),$async$ac1)
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
return B.i($async$ac1,v)},
bSm(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("b9<2>")
v=""+n.a+"|"+o.length+"|"+new B.b9(n,w).cG(0,0,new C.eF_())+"|"+A.d.cG(o,0,new C.eF0())
if(v===p.ch)return p.CW
u=new C.eF3()
t=x.s
s=B.a([],t)
r=new C.eF4(p,s,u)
for(n=new B.b9(n,w).gae(0),w=new B.eT(n,new C.eF1());w.B();){q=n.gP(0)
if(!A.d.aR(o,new C.eF2(q)))s.push(B.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cJ(s,0,B.dx(5,"count",x.S),x.N).de(0)},
Z(){var w,v=this
v.a4()
v.af9()
v.d.db=v.ay
w=v.qi(new C.eFy(v))
w.fU(0)
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
w.bCI()},
aeF(d){return this.c5M(d)},
c5M(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$aeF=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aB(),$async$aeF)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Vk(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.b0E(A.d.gH(D.aEr))
if(s.c!=null)s.l(new C.eF7())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aeF,v)},
b0E(d){this.d.d_W(0,d.c,d.d)
this.Fq()},
Fq(){var w=this.as
if(w!=null)w.a2(0)
this.as=B.cC(A.m3,new C.eEU(this))},
aAQ(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("b9<2>")
s=B.B(new B.b9(s,r),r.k("L.E"))
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
cou(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("b9<2>")
r=B.B(new B.b9(r,q),q.k("L.E"))
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
c5A(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.B();){r=w.d
if(D.nt.h(0,r.b).c===D.yD)continue
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
cf0(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hP2(new B.m(n.a+36,n.b+0),new B.m(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cIS(d){var w,v,u,t,s,r,q=this,p=q.aAQ(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f4()
u=v.b
if(u==="button"){w.aJi(p)
return}if(q.r)return
t=D.nt.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rZ)s=6
else s=1
v.d=A.n.F(v.d+1,s)
w.b3()
q.Fq()
return}if(q.r)return
r=q.cf0(d)
if(r!=null){w=q.d
A.d.cP(w.b,r)
w.b3()
q.Fq()}},
cpQ(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cou(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aAQ(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aI(0,d)}},
cpR(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.m(A.h.D(d.a+s.y.a,46,t.a-46),A.h.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b6i(){var w,v,u=this
if(u.z!=null){w=u.c5A(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bhq(v,w)}else v=!1
if(v){B.kc()
u.Fq()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.Fq()
u.x=null}},
afo(d){return this.c8V(d)},
c8V(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$afo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aAQ(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jI()
p=t.c
p.toString
w=3
return B.b(B.bV(L.mt,null,new C.eFa(q),p,!0,!0,!1,A.me,!1,!1,x.y),$async$afo)
case 3:if(f===!0){r.X(0,s)
t.Fq()}case 1:return B.h(u,v)}})
return B.i($async$afo,v)},
ceZ(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tD(0,d,new B.m(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.f4()
this.Fq()},
ajt(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ajt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(L.mt,null,new C.eFc(),s,!0,!0,!0,A.me,!1,!1,x.es),$async$ajt)
case 2:t=e
if(t!=null)u.b0E(t)
return B.h(null,v)}})
return B.i($async$ajt,v)},
agO(d){var w=0,v=B.j(x.H),u=this,t
var $async$agO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.eEX(),t,null,!0,!0,x.y),$async$agO)
case 2:if(f===!0){u.d.a7(0)
u.Fq()}return B.h(null,v)}})
return B.i($async$agO,v)},
C(d){var w=this,v=null,u=B.a([B.akP(w.r?new B.bL(A.a5,v,v,new B.C(A.I1,B.hs(D.c0v,v,D.h3_,new C.eFw(w),v),v),v):w.cf1(),A.b0,A.j4),B.E(B.cg(new C.eFx(w)),1)],x.p)
if(!w.r)u.push(w.cDw())
return B.c6(v,A.c7,B.bn(!0,B.w(u,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bNZ(){var w=null,v=new C.eEZ(),u=A.v.j(0.7),t=B.n(26),s=B.K(A.bw.j(0.5),A.r,1)
return B.bS(0,B.el(B.at(B.q(w,B.cc(B.w(B.a([D.heD,A.at,D.hmz,A.aB,v.$4(A.mG,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(W.DZ,A.cw,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.ko,A.c5,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.QA,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.hlQ,new B.bL(A.a9,w,w,B.bJ(!1,D.hbG,w,w,!0,w,w,w,this.gbNS(),w,w),w)],x.p),A.B,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.Zh,new B.p(L.mt,w,s,t,w,w,A.m),w,w,w,A.f7,A9.ap5,w,w,w),w,w,w),u,!0),0,0,0)},
cf1(){var w=this,v=null,u=B.aJ(v,v,v,v,Ap.nr,v,v,v,new C.eFi(w),v,v,v,v,v,v),t=w.abs(A.DR,"How it works",new C.eFj(w),!0),s=w.ay?T.p7:A0.u_
return new B.C(D.bLF,B.A(B.a([u,D.bNk,t,w.abs(s,"Sound",new C.eFk(w),!0),w.abs(A.ef,"Ideas",w.gctK(),!0),w.abs(I.xu,"Clear",w.gcf_(w),!0),w.aSe(A.fR,"Show",new C.eFl(w),!0,!0)],x.p),A.l,v,A.e,A.i,0,v,v),v)},
aSe(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.V(d,h?A.v:A.c,w,w,w,20)],x.p)
return new B.C(Al.xl,B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.hb(new B.C(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
abs(d,e,f,g){return this.aSe(d,e,f,g,!1)},
cDw(){var w=null,v=new C.eFe(this),u=A.c.j(0.08)
return B.q(w,B.cc(B.A(B.a([v.$2("START",D.yD),v.$2("CHANGE",D.Gc),v.$2("REACT",D.rZ)],x.p),A.B,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aK),A.f,w,w,new B.p(L.CI,w,new B.bE(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.m),w,w,w,w,D.bGE,w,w,w)},
cDx(d){var w,v,u,t,s=null,r=D.nt.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.C(A.f6,B.aA(s,B.q(s,B.w(B.a([B.V(r.b,v,s,s,s,22),A.cR,B.c(r.a,s,1,A.a2,s,s,s,D.aZj,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.p(s,s,t,w,s,new B.a6(A.aU,A.b2,A.w,u,s,s),A.m),s,s,s,s,A.hA,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eFd(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.blS.prototype={
a5(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bs(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.U()
u=B.M()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.O(new B.m(r,s),1,u)
q=b4.CW
if(b5<q){$.U()
p=B.M()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.aE(new B.a4(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){m=w[n]
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
d=new B.aI(f.r,A.ak,b3,b3,e)
e.push(new B.aZ(i,j))
d.ac()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.i6(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.aj(e)
d.ac()
a1=D.nt.h(0,l.b).d
a2=D.nt.h(0,k.b).d
f=new B.ar(A.U,A.R,A.X,A.Y,A.W)
f.b=A.ad
f.c=3
f.d=A.bG
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rj(new B.m(i,j),new B.m(g,h))
f.san(new B.a6(A.a5,A.a9,A.w,e,b3,b3).az(0,new B.a4(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.h.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hP2(new B.m(j.a+36,j.b+0),new B.m(i.a-36,i.b),a4)
$.U()
i=new B.ar(A.U,A.R,A.X,A.Y,A.W)
i.r=A.c.j(0.35).gp(0)
i.y=O.oZ
b7.O(a5,8,i)
i=new B.ar(A.U,A.R,A.X,A.Y,A.W)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a6(0,D.KE)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aI($.U().r,A.ak,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.i6(t+a0,p,w-a0,j,w,j))
j=B.M()
j.b=A.ad
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.M()
j.r=A.c.gp(0)
b7.O(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
p=a9.c
v=A.h.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.ed.aA(0,v)
$.U()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.b=A.ad
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.h.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.l_(p,j,A.ed.aA(0,v))
i.toString
j=B.l_(p,j,A.ed.aA(0,A.h.D(v-0.35,0,1)))
j.toString
$.U()
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.c=5
p.d=A.bG
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rj(j,i)
p.san(new B.a6(A.a5,A.a9,A.w,g,b3,b3).az(0,new B.a4(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.ld
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.h.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.U()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=a3.c.j(1-v).gp(0)
b7.O(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){k=w[n]
p=k.a
$.U()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.ld
b7.O(p,11,j)
j=k.a
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.san(new B.bU(Ac.C0,0.5,A.w,b3,0,B.a([A.c,i],q),b3,b3).az(0,B.bZ(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.h.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.blT(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.m(t.a-p/2,t.b-(40+60*v+q.gb4(q)/2)))}for(b4=new B.du(o,o.r,o.e);b4.B();)b2.cpm(b7,b4.d,b5)
b6.restore()},
cpm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.nt.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.h.D(1-(f-w)/520,0,1)
u=B.c0(e.c,64,64)
t=B.bx(u,A.i9)
s=t.eM(A.cy)
$.U()
r=B.M()
r.r=A.v.j(0.55).gp(0)
r.y=A.nn
d.aq(s,r)
if(v>0){s=t.cu(6)
r=B.M()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.Dt
d.aq(s,r)}s=t.eM(A.cN)
r=B.M()
q=h.d
r.r=B.ap(q,A.v,0.65).gp(0)
d.aq(s,r)
r=B.M()
s=B.ap(q,A.c,0.18+0.4*v)
s.toString
p=B.ap(q,A.v,0.35)
p.toString
r.san(new B.a6(A.aU,A.b2,A.w,B.a([s,p],x.O),j,j).az(0,u))
d.aq(t,r)
r=B.M()
r.b=A.ad
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.blT(B.lC(r.a),30,A.c,r.b,j,A.C)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aI(0,new B.m(s/2,r.gb4(r)/2)))
n=C.blT(h.a,11,A.c,j,j,A.C)
n.a5(d,e.c.a6(0,new B.m(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.n.F(e.d,r)]
else m=i==="pop"?D.aF0[A.n.F(e.d,6)]:j
h=h.c
if(h===D.rZ){s=e.c.a6(0,new B.m(0,62))
r=B.M()
r.r=D.aFF[A.n.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.blT(m,9.5,A.aF,j,j,A.O)
l.a5(d,e.c.a6(0,new B.m(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.blT(m,9.5,A.aF,j,j,A.O)
l.a5(d,e.c.a6(0,new B.m(-l.b.c/2,54)))}if(k.c)return
if(h!==D.yD)k.b77(d,e.c.aI(0,D.KE),q)
k.b77(d,e.c.a6(0,D.KE),q)},
b77(d,e,f){var w
$.U()
w=B.M()
w.r=A.c7.gp(0)
d.O(e,9,w)
w=B.M()
w.b=A.ad
w.c=2.2
w.r=f.gp(0)
d.O(e,9,w)
w=B.M()
w.r=A.c.gp(0)
d.O(e,3.5,w)},
aD(d){return!0}}
C.aQ3.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.es.prototype={}
C.ui.prototype={
atT(d,e,f,g){var w=this
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
C.acG.prototype={}
C.adP.prototype={}
C.a6I.prototype={
bjj(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hc()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.acG(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
cb7(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new C.bT4())},
an_(d,e,f,g){var w="p"+this.c++,v=new C.ui(w,e,f,g)
v.atT(w,e,f,g)
this.a.push(v)
return v},
X(d,e){A.d.X(this.a,e)
A.d.br(this.b,new C.bTf(e))},
a7(d){A.d.a7(this.a)
A.d.a7(this.b)},
cRQ(d,e,f,g,h){return A.d.aR(this.b,new C.bTa(e,f,g,h))},
anO(d,e,f,g){var w
if(d===f||this.cRQ(0,d,e,f,g))return null
w=new C.adP(d,e,f,g)
this.b.push(w)
return w},
aEJ(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
AP(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aqB(d){return this.Nf(d)&&!d.x&&d.cx>this.AP(d)},
bby(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Nf(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cfl(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.AY.h(0,v)
if(w!=null)return w.a
return 100},
w6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.cb7(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bTg(a2),t).cG(0,0,new C.bTh(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.S(x.N,u)
n=new C.bTj(o)
m=B.a([],x.t)
l=new C.bTi(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.S(u,u)
f=new C.bTl(g,l,n)
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
a2.bbu(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.AP(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.bbu(e,d,w,!0)
a2.bUI(a4)},
bbu(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.S(x.N,b3),b5=new C.bT6(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bT5(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bT8(B.S(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.bby(t)*(1+t.CW))
a4=b2.aEJ(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cfl(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bY5(e,a0,b8)
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
bY5(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bUI(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aEJ(o)/a1.bby(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.AP(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bMA(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bjj(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uM(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.uM(o,"The "+$.qZ().h(0,n).b+" got "+A.h.a1(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uM(o,"More than 1.5 amps went through the "+$.qZ().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uM(o,"The regulator had to turn "+A.h.a1(o.cy,1)+" V into heat while "+A.h.S(i*1000)+" mA flowed. That is "+A.h.a1(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uM(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.AY.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qZ().h(0,n).b
l=f.b
l=l===A.h.bM(l)?""+A.h.S(l):B.v(l)
g=f.c
g=g===A.h.bM(g)?""+A.h.S(g):B.v(g)
a1.uM(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.h.a1(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fwT.q(0,n)){m=o.fx>0?A.h.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.h.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uM(o,"The bulb got "+A.h.a1(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.h.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uM(o,"The LED had "+A.h.S(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.h.D(j/14,0,1)
break
case"motor":n=A.h.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.h.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uM(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.h.D(i/1,0,1)
if(!o.x&&i>1)a1.uM(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uM(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.h.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uM(o,"The capacitor was charged to "+A.h.a1(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bMA(d){return A.d.aR(this.a,new C.bT3(d))},
uM(d,e){var w
d.x=!0
d.ay=e
this.bjj(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bnZ(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a7(0)},
aL5(d){var w=d.b
return D.aW_.q(0,w)||D.AY.am(0,w)||w==="buck"||w==="regulator"},
bkO(d){var w,v=!0
if(!this.Nf(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.AY.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
WC(d,e){var w=this.b
return new B.X(w,new C.bTn(d,e),B.T(w).k("X<1>")).gI(0)},
rM(d){var w,v
if(d.x)return!1
w=d.b
if(D.AY.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
biP(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qZ().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aL5(d)||i.rM(d))return null
w=i.WC(d,0)
v=i.WC(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("X<1>")
s=B.B(new B.X(u,i.gd_t(),t),t.k("L.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.h.bM(r)?""+A.h.S(r):B.v(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.h.a1(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.AY.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Nr("battery"),o=J.aP(t.a),t=new B.eT(o,t.b);t.B();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.WC(n,0)+i.WC(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Nr("switch"),o=J.aP(t.a),t=new B.eT(o,t.b);t.B();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qZ().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.AP(k))return"The "+$.qZ().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.h.a1(k.cx,2)+" amps, but it can only give about "+A.h.a1(i.AP(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aR(u,new C.bTb(i,d))
h=q.b
h=h===A.h.bM(h)?""+A.h.S(h):B.v(h)
u=A.h.a1(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.h.a1(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.h.a1(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Nr(d){var w=this.a
return new B.X(w,new C.bTe(d),B.T(w).k("X<1>"))},
aKH(d){return this.Nr(d).aR(0,new C.bTd(0.35))},
qs(d,e){return A.d.aR(this.a,new C.bTc(e))}}
C.alq.prototype={
a5(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.U()
w=B.M()
w.r=F.nS.gp(0)
c0.aE(new B.a4(0,0,b8,b9),w)
w=C.imM(c1)
v=$.hY7()
if(A.n.F(w.length,2)!==0)B.bi(B.dM('"points" must have an even number of values.',b5))
u=c0.b
if(u!=null)u.ow(v)
t=v.nh()
v=c0.c
v.drawPoints($.hZ1()[0],w,t)
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
b4.cOx(c0,new B.m(n*b6+m*(42+l),o*b7),new B.m(j*b6+i*(42+h),k.d*b7),p,p===r)}u=b4.d
if(u!=null&&b4.e!=null){g=C.i2a(u.a,u.b,c1)
u=b4.e
u.toString
$.U()
s=B.M()
s.r=A.ac.gp(0)
s.c=3
s.d=A.bG
c0.ah(g,u,s)}for(u=w.a,s=u.length,r=b4.c,o=b4.r,n=x.v,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){f=u[q]
m=f.c*b6
l=f.d*b7
if(f.Q>0){k=Math.sin(w.d*30)
$.U()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=F.NR.j(A.h.D(f.Q*0.45,0,0.6)).gp(0)
j.y=A.Dt
c0.O(new B.m(m,l),46+14*k,j)}e=o.h(0,f.a)
if(e==null)e=1
J.bs(v.save())
v.translate(m,l)
k=A.h.D(A.n1.aA(0,A.h.D(e,0,1)),0.01,1.4)
v.scale(k,k)
b4.cqn(c0,f,f===r)
v.restore()
k=f.b
if((k==="battery"||k==="solar"||k==="crank"||k==="turbine")&&!f.x&&f.cx>w.AP(f)){j=m+0
i=l+-40
h=Math.sin(w.d*10)
d=$.U().r
a0=B.a([],n)
a1=new B.aI(d,A.ak,b5,b5,a0)
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
a0=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a0.r=A.aC.j(0.65+0.35*h).gp(0)
c0.af(a1,a0)
a0=B.a([],n)
d=new B.aI(d,A.ak,b5,b5,a0)
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
h=new B.ar(A.U,A.R,A.X,A.Y,A.W)
h.b=A.ad
h.c=1.6
h.r=A.c.gp(0)
c0.af(d,h)
b4.lK(c0,"!",new B.m(j+-3,i+-8),A.c,14)}if(!f.x)j=(D.aW_.q(0,k)||D.AY.am(0,k)||k==="buck"||k==="regulator")&&!w.rM(f)&&w.WC(f,0)+w.WC(f,1)>0
else j=!1
if(j){m+=0
l+=-40
$.U()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.as.gp(0)
c0.O(new B.m(m,l),10,j)
b4.lK(c0,"!",new B.m(m+-3,l+-8),A.v,14)}for(a8=0;a8<2;++a8){m=f.c
l=a8===0
j=l?-1:1
i=D.mN.am(0,k)?(f.ch-1)*38:0
i=m*b6+j*(42+i)
j=f.d*b7
a9=new B.m(i,j)
$.U()
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=F.nS.gp(0)
c0.O(a9,7,m)
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.b=A.ad
m.c=2.4
m.r=(l&&w.bkO(f)?A.c1:A.ac).gp(0)
c0.O(a9,6,m)
if(l&&w.bkO(f))b4.lK(c0,"+",new B.m(i+-4,j+-22),A.c1,13)}}for(v=w.f,s=v.length,q=0;q<v.length;v.length===s||(0,B.I)(v),++q){b0=v[q]
r=b0.a*b6+b0.c
o=b0.b*b7+b0.d
b1=new B.m(r,o)
b2=A.h.D(b0.r/0.8,0,1)
n=B.ap(M.OD,F.a0V,b2)
n.toString
m=b0.f
$.U()
l=new B.ar(A.U,A.R,A.X,A.Y,A.W)
l.r=n.gp(0)
l.c=2.4
l.d=A.bG
c0.ah(b1,new B.m(r-b0.e*0.035,o-m*0.035),l)
l=new B.ar(A.U,A.R,A.X,A.Y,A.W)
l.r=n.j(0.35*b2).gp(0)
l.y=A.PM
c0.O(b1,4.5*b2+1,l)}if(A.d.aR(u,new C.bNp())){b3=A.d.cG(u,0,new C.bNq())
$.U()
b7=B.M()
b7.r=D.bkY.j(0.05+0.09*b3*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c0.aE(new B.a4(0,0,b8,b9),b7)
b7="short|"+B.v(b6)
a9=$.aRt.h(0,b7)
if(a9==null){a9=B.h0(b5,A.cJ,b5,b5,b5,D.fI5,A.a7,A.ca,b5,A.e4,A.cb)
a9.nH(b6-24)
$.aRt.n(0,b7,a9)}a9.a5(c0,new B.m(12,10))}},
lK(d,e,f,g,h){var w,v=null,u=e+"|"+g.m()+"|"+B.v(h)
if($.aRt.a>300)$.aRt.a7(0)
w=$.aRt.h(0,u)
if(w==null){w=B.h0(v,A.cJ,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,g,v,v,v,v,v,v,v,v,h,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),e),A.a7,A.ca,v,A.e4,A.cb)
w.eJ()
$.aRt.n(0,u,w)}w.a5(d,f)},
cOx(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aI($.U().r,A.ak,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hUZ(a0,a1,a2)
e.E(new B.cm(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.NR,A.h.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ap(A.aH,A.aQ,A.h.D(r*1.2,0,1))
u.toString
o=u}else o=A.bl
u=B.M()
u.b=A.ad
u.c=a3?7:5
u.d=A.bG
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.M()
u.b=A.ad
u.c=2.4
u.d=A.bG
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.ane(new B.vd(B.zX(e),!1,B.a([],x.l))).gH(0)
m=40+A.h.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.jW()
j=t[u].b
j===$&&B.d()
if(!(k<j.a.length()/22))break
j=s.d
v.jW()
i=t[u].b
i===$&&B.d()
i=A.h.F(k*22+j*m*l,i.a.length())
v.jW()
j=t[u].b
j===$&&B.d()
j=j.a.length()
v.jW()
h=t[u].b
h===$&&B.d()
g=A.h.F(i+j,h.a.length())
v.jW()
f=t[u].WR(g)
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
a_Z(d,e,f,g){var w,v,u,t
$.U()
w=B.M()
v=g?A.aU:A.a5
u=g?A.b2:A.a9
t=B.ap(e,A.v,0.3)
t.toString
w.san(new B.a6(v,u,A.w,B.a([e,f,e,t],x.O),A.Js,null).az(0,d))
return w},
b1l(d,e,f){return this.a_Z(d,e,f,!0)},
caH(d,e){return this.a_Z(d,A.bl,A.hX,e)},
akC(d,e){var w,v,u
$.U()
w=B.M()
w.san(D.eQ2.az(0,B.bZ(e,4.2)))
d.O(e,4.2,w)
w=e.a6(0,D.eFe)
v=e.a6(0,D.eFo)
u=B.M()
u.r=A.cU.gp(0)
u.c=1.2
d.ah(w,v,u)},
cqn(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=4294626325,b5=4286331629,b6=4287322667,b7=4293870660,b8=$.U(),b9=B.M()
b9.san(D.cbN.az(0,D.ft2))
b9.c=3.4
b9.d=A.bG
w=B.M()
w.r=A.v.j(0.45).gp(0)
w.y=O.oZ
c0.c2(D.fsS,w)
if(c2){w=B.bx(D.ft0,A.k2)
v=B.M()
v.r=A.c.j(0.14).gp(0)
c0.aq(w,v)}u=C.hz1(c1)
c0.ah(new B.m(-u,0),D.eGM,b9)
c0.ah(D.eDT,new B.m(u,0),b9)
t=c1.x
w=c1.b
s=D.mN.am(0,w)&&c1.ch!==1
if(s){J.bs(c0.c.save())
c0.bW(0,c1.ch)}switch(w){case"battery":b2.bJh(c0,c1)
break
case"solar":r=B.bx(D.fsU,A.jL)
c0.aq(r,b2.a_Z(new B.a4(r.a,r.b,r.c,r.d),A.d1,A.bP,!1))
b8=B.M()
w=B.ap(D.bp1,A.di,0.25+0.55*c1.f)
w.toString
v=B.ap(D.byS,A.m0,0.3+0.4*c1.f)
v.toString
b8.san(new B.a6(A.aw,A.aD,A.w,B.a([w,v],x.O),b3,b3).az(0,D.abA))
c0.aE(D.abA,b8)
q=B.M()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b8=-34+p*68/6
c0.ah(new B.m(b8,-18),new B.m(b8,18),q)}for(p=1;p<4;++p){b8=-18+p*9
c0.ah(new B.m(-34,b8),new B.m(34,b8),q)}for(p=0;p<6;++p){b8=-34+(p+0.5)*68/6
$.U()
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.cF.j(0.5).gp(0)
w.c=0.6
c0.ah(new B.m(b8,-18),new B.m(b8,18),w)}b8=new B.aI($.U().r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-34,18))
b8.E(new B.aq(-6+40*c1.f,-18))
b8.E(new B.aq(4+40*c1.f,-18))
b8.E(new B.aq(-24,18))
b8.E(new B.bz())
w=B.M()
w.r=A.c.j(0.1+0.22*c1.f).gp(0)
c0.af(b8,w)
w=c1.f
b8=B.M()
b8.r=A.eI.j(0.9).gp(0)
c0.O(D.eDX,4+4*w,b8)
break
case"crank":o=B.bx(D.fsE,A.h4)
c0.aq(o,b2.b1l(new B.a4(o.a,o.b,o.c,o.d),A.bz,A.bQ))
b8=B.M()
b8.san(D.aU5.az(0,B.bZ(A.J,12)))
c0.O(A.J,12,b8)
n=new B.m(Math.cos(c1.y)*22,Math.sin(c1.y)*22)
b8=B.M()
b8.r=A.cF.gp(0)
b8.c=5
b8.d=A.bG
c0.ah(A.J,n,b8)
b8=B.M()
b8.san(D.eQp.az(0,B.bZ(n,7)))
c0.O(n,7,b8)
b2.akC(c0,D.eGF)
b2.akC(c0,D.eDH)
break
case"turbine":b8=b8.r
w=x.v
v=new B.aI(b8,A.ak,b3,b3,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bz())
m=B.M()
m.r=A.bP.gp(0)
c0.af(v,m)
for(v=c0.c,l=0;l<3;++l){m=c1.y
J.bs(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aI(b8,A.ak,b3,b3,m)
m.push(new B.aZ(0,-2))
k.ac()
j=new B.cm(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.cm(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.bz()
m.push(j)
m=k.f
if(m!=null)j.aj(m)
k.ac()
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=A.c.gp(0)
c0.af(k,m)
v.restore()}b8=B.M()
b8.san(D.eQ5.az(0,B.bZ(A.J,4.5)))
c0.O(A.J,4.5,b8)
break
case"switch":o=B.bx(D.fsM,A.pm)
b8=B.M()
b8.san(D.avT.az(0,new B.a4(o.a,o.b,o.c,o.d)))
c0.aq(o,b8)
b2.akC(c0,D.VE)
b2.akC(c0,D.aOO)
h=c1.w?D.aOO:H.aOE
b8=B.M()
b8.r=A.ax.gp(0)
b8.c=6
b8.d=A.bG
c0.ah(D.VE,h,b8)
b8=B.M()
b8.r=(c1.w?A.bf:A.bP).gp(0)
b8.c=4
b8.d=A.bG
c0.ah(D.VE,h,b8)
b8=B.l_(D.VE,h,0.85)
b8.toString
w=B.M()
w.r=A.aC.gp(0)
c0.O(b8,5,w)
break
case"fuse":g=B.bx(D.aUS,D.aUa)
b8=B.M()
b8.r=A.fC.j(0.25).gp(0)
c0.aq(g,b8)
b8=B.M()
b8.b=A.ad
b8.c=1.4
b8.r=A.aF.gp(0)
c0.aq(g,b8)
if(!t){b8=B.M()
b8.c=1.6
b8.r=B.ap(A.bP,A.cX,c1.fx).gp(0)
c0.ah(D.aP9,D.aOM,b8)}else{b8=B.M()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.aP9,D.eH9,b8)
b8=B.M()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.eEK,D.aOM,b8)
b8=B.M()
b8.r=A.e_.gp(0)
c0.O(A.J,6,b8)}for(f=0;f<2;++f){e=B.c0(new B.m(M.hr[f]*22,0),20,9)
c0.aq(B.bx(e,A.hs),b2.a_Z(e,A.de,A.nM,!0))}break
case"pot":b8=B.M()
b8.san(D.eQg.az(0,B.bZ(A.J,21)))
c0.O(A.J,21,b8)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b8=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=A.aF.gp(0)
k.c=1.2
c0.ah(new B.m(b8*18,w*18),new B.m(v*22,m*22),k)}b8=B.M()
b8.san(D.eQ3.az(0,B.bZ(A.J,13)))
c0.O(A.J,13,b8)
a0=2.356194490192345+c1.f*3.141592653589793*1.5
b8=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.M()
k.r=A.aQ.gp(0)
k.c=3
k.d=A.bG
c0.ah(new B.m(b8*3,w*3),new B.m(v*12,m*12),k)
break
case"resistor":a1=B.bx(D.aUS,D.aUa)
b8=B.M()
b8.san(D.cfj.az(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=x.O
a2=B.J([47,B.a([B.b_(b4),B.b_(b5),A.v],b8),100,B.a([B.b_(b6),A.v,B.b_(b6)],b8),220,B.a([B.b_(b7),B.b_(b7),B.b_(b6)],b8),470,B.a([B.b_(b4),B.b_(b5),B.b_(b6)],b8),1000,B.a([B.b_(b6),A.v,B.b_(b7)],b8)],x.i,x.bF)
a3=a2.h(0,c1.r)
if(a3==null){b8=a2.h(0,100)
b8.toString
a3=b8}for(p=0;p<3;++p){b8=-14+p*9
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=a3[p].gp(0)
c0.aE(new B.a4(b8,-9,b8+4.5,9),w)}b8=B.M()
b8.r=A.aQ.gp(0)
c0.aE(D.fte,b8)
b8=c1.r
b2.lK(c0,b8>=1000?"1k\u03a9":""+A.h.S(b8)+"\u03a9",D.eGa,A.ac,10)
break
case"bulb":w=c1.fx
if(w>0){v=B.M()
v.r=A.eI.j(0.55*w).gp(0)
v.y=A.Dt
c0.O(H.we,34,v)}o=B.c0(D.eCC,12,18)
c0.aq(B.bx(o,A.hs),b2.a_Z(o,A.bl,A.dV,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.dJ.gp(0)
v.c=1
c0.ah(new B.m(-9,w),new B.m(9,w),v)}w=B.M()
if(t)v=A.GN
else{v=B.ap(A.dV,A.i_,c1.fx)
m=c1.fx
v=v.j(0.25+0.7*m)}if(t)m=A.H8
else{m=B.ap(A.d1,A.eI,c1.fx)
m.toString}w.san(new B.bU(A.n_,0.5,A.w,b3,0,B.a([v,m.j(0.18+0.5*c1.fx)],x.O),b3,b3).az(0,B.bZ(A.ul,17)))
c0.O(A.ul,17,w)
w=B.M()
w.b=A.ad
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c0.O(A.ul,17,w)
b8=b8.r
w=x.v
m=new B.aI(b8,A.ak,b3,b3,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.cm(-12,-4,-9,0))
v=B.M()
v.b=A.ad
v.c=2
v.r=A.c.j(0.45).gp(0)
c0.af(m,v)
v=B.M()
v.r=A.cG.gp(0)
v.c=1.4
c0.ah(D.eH3,D.eH5,v)
v=B.M()
v.r=A.cG.gp(0)
v.c=1.4
c0.ah(D.eED,D.eEG,v)
w=B.a([],w)
a4=new B.aI(b8,A.ak,b3,b3,w)
a4.E(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b8=(l&1)===0?-6:1
b8=new B.aq(-4+a5*8/6,-2+b8)
w.push(b8)
v=a4.f
if(v!=null)b8.aj(v)
a4.ac()}$.U()
b8=B.M()
b8.b=A.ad
b8.c=1.8
if(t)w=A.ba
else{w=B.ap(A.d1,D.bqb,c1.fx)
w.toString}b8.r=w.gp(0)
c0.af(a4,b8)
break
case"led":w=c1.fx
if(w>0){v=B.M()
v.r=A.aC.j(0.6*w).gp(0)
v.y=D.bN7
c0.O(A.ul,30,v)}w=B.M()
w.r=A.dV.gp(0)
w.c=2.4
c0.ah(D.eHb,D.eHa,w)
w=B.M()
w.r=A.dV.gp(0)
w.c=2.4
c0.ah(D.eEM,D.eEL,w)
b8=b8.r
w=x.v
a6=new B.aI(b8,A.ak,b3,b3,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.cm(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bz())
v=B.M()
if(t)m=A.jB
else{m=B.ap(A.eA,D.brY,c1.fx)
m.toString}if(t)k=A.l8
else{k=B.ap(A.kK,A.aC,c1.fx)
k.toString}v.san(new B.a6(A.aw,A.aD,A.w,B.a([m,k],x.O),b3,b3).az(0,D.fs6))
c0.af(a6,v)
v=B.M()
v.b=A.ad
v.c=1.2
v.r=A.jW.gp(0)
c0.af(a6,v)
v=B.M()
v.r=A.eu.gp(0)
c0.aE(D.fsc,v)
w=new B.aI(b8,A.ak,b3,b3,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.cm(-6,-12,0,-15))
b8=B.M()
b8.b=A.ad
b8.c=2
b8.r=A.c.j(0.5).gp(0)
c0.af(w,b8)
break
case"motor":a7=new B.a4(-28,-14,20,14)
c0.aq(B.bx(a7,A.iE),b2.b1l(a7,A.an,A.bn))
b8=B.M()
b8.r=A.cx.gp(0)
c0.aE(D.frE,b8)
b8=B.M()
b8.r=A.cF.gp(0)
c0.aE(D.frG,b8)
b8=c0.c
J.bs(b8.save())
b8.translate(31,0)
for(l=0;l<3;++l){J.bs(b8.save())
b8.rotate((c1.y+l*2.094)*180/3.141592653589793,0,0)
w=B.c0(H.aOz,15,7)
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.cX.j(0.9).gp(0)
c0.c2(w,v)
b8.restore()}w=B.M()
w.r=A.ax.gp(0)
c0.O(A.J,3,w)
b8.restore()
b2.lK(c0,"M",D.eGE,A.ax,14)
break
case"buzzer":a8=B.c0(A.J,42,42)
b8=B.M()
b8.san(D.eQk.az(0,a8))
c0.c2(a8,b8)
b8=B.M()
b8.r=A.v.gp(0)
c0.O(A.J,6,b8)
b8=B.M()
b8.b=A.ad
b8.c=1.4
b8.r=A.aT.gp(0)
c0.O(A.J,6,b8)
b2.lK(c0,"+",D.eGx,A.ac,12)
for(b8=b2.b,l=1;l<=3;++l){w=c1.fx
v=w>0?A.h.F(b8.d*14,5):0
v=B.bZ(A.J,24+l*5+v)
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.b=A.ad
m.c=2
m.r=A.c5.j(w*(1-l*0.22)).gp(0)
c0.cR(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bx(D.fsI,A.iE)
w=B.M()
w.san(D.ccR.az(0,new B.a4(o.a,o.b,o.c,o.d)))
c0.aq(o,w)
w=B.a([],x.v)
a9=new B.aI(b8.r,A.ak,b3,b3,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b8=(l&1)===0?-10:10
a5=l+1
b8=new B.cm(-24+l*6+3,b8,-24+a5*6,0)
w.push(b8)
v=a9.f
if(v!=null)b8.aj(v)
a9.ac()}b8=c1.fx
if(b8>0.1){$.U()
w=B.M()
w.b=A.ad
w.c=10
w.r=D.bqX.j(0.5*b8).gp(0)
w.y=A.ld
c0.af(a9,w)}$.U()
b8=B.M()
b8.b=A.ad
b8.c=3.2
b8.d=A.bG
b8.r=B.ap(A.mq,Ag.zf,c1.fx).gp(0)
c0.af(a9,b8)
break
case"capacitor":a7=new B.a4(-16,-22,16,18)
b8=B.bx(a7,A.iE)
w=B.M()
w.san(D.avF.az(0,a7))
c0.aq(b8,w)
w=B.M()
w.r=A.bP.gp(0)
c0.aE(D.fsm,w)
for(p=0;p<4;++p)b2.lK(c0,"\u2212",new B.m(-14,-18+p*9),A.ax,11)
b0=new B.a4(-16,-24,16,-17)
c0.aq(B.bx(b0,A.hs),b2.caH(b0,!1))
b8=38*c1.fx
w=18-b8
$.U()
v=B.M()
v.r=A.bf.j(0.5).gp(0)
c0.aE(new B.a4(-3,w,11,w+b8),v)
b2.lK(c0,"1F",H.we,A.c,11)
break
case"radio":a1=B.bx(D.abA,A.h4)
b8=B.M()
b8.san(D.cfy.az(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=B.M()
b8.b=A.ad
b8.c=1.4
b8.r=A.nM.j(0.6).gp(0)
c0.aq(a1,b8)
b8=B.bx(D.fsJ,A.jL)
w=B.M()
w.r=A.e5.gp(0)
c0.aq(b8,w)
for(p=0;p<6;++p){b8=-10+p*4.4
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.mq.gp(0)
w.c=1.4
c0.ah(new B.m(-27,b8),new B.m(-3,b8),w)}b8=B.M()
b8.r=(c1.fx>0?A.ha:A.oI).gp(0)
c0.aE(D.frL,b8)
if(c1.fx>0){b8=8+A.h.F(b2.b.d*7,18)
w=B.M()
w.r=A.bC.gp(0)
w.c=1.6
c0.ah(new B.m(b8,-13),new B.m(b8,-3),w)}b8=B.M()
b8.san(D.aU5.az(0,B.bZ(D.aax,6)))
c0.O(D.aax,6,b8)
b8=B.M()
b8.r=A.nM.gp(0)
c0.O(D.eDS,4,b8)
b8=B.M()
b8.r=A.dV.gp(0)
b8.c=1.8
c0.ah(D.eDN,D.aOT,b8)
if(c1.fx>0)for(b8=b2.b,l=1;l<=2;++l){w=B.bZ(D.aOT,4+l*5+A.h.F(b8.d*8,5))
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.b=A.ad
v.c=1.4
v.r=A.oP.j(0.7).gp(0)
c0.cR(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bx(D.fsT,A.iE)
v=B.M()
v.r=M.ni.gp(0)
c0.aq(w,v)
b1=B.bx(D.fsQ,A.hs)
if(c1.fx>0&&!c1.x){b8=c0.c
J.bs(b8.save())
b8.clipRRect(B.nl(b1),$.mZ(),!0)
b8.translate(-33,-21)
K.h8d(c0,D.fzI,c1.at,b2.b.d,c1.ax,-1,b3,b3)
b8.restore()
b8=B.M()
b8.r=A.bf.gp(0)
c0.O(D.eE3,1.6,b8)}else{w=B.M()
w.r=D.x0.gp(0)
c0.aq(b1,w)
b8=new B.aI(b8.r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-33,-21))
b8.E(new B.aq(-10,-21))
b8.E(new B.aq(-33,0))
b8.E(new B.bz())
w=B.M()
w.r=A.c.j(0.05).gp(0)
c0.af(b8,w)}b8=B.M()
b8.r=A.bz.gp(0)
c0.aE(D.fsb,b8)
break}C.iHo(c0,c1,b2.b.d,b2.gcfm())
if(t)b2.lK(c0,"\u2716",D.eHd,A.aC,14)
if(s)c0.c.restore()},
aTl(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.bNo(),n=e.d,m=e.b,l=n-m,k=e.a,j=m+l*0.06,i=k+l*0.16,h=new B.a4(k,j,i,j+l*0.88)
j=l*0.08
k=B.bx(h,new B.aQ(j,j))
$.U()
w=B.M()
w.san(o.$2(h,D.djn))
d.aq(k,w)
i-=0.5
w=l*0.2
k=e.c-w
v=new B.a4(i,m,k,n)
u=k-i
t=i+u*0.66
s=B.M()
s.san(o.$2(v,D.dIt))
d.aE(new B.a4(i,m,t,n),s)
s=B.M()
s.san(o.$2(v,D.dhw))
d.aE(new B.a4(t,m,k,n),s)
k-=0.5
s=m+j
n=l*0.12
r=k+n
q=new B.a4(k,s,r,s+l*0.84)
s=B.M()
s.san(o.$2(q,D.aF4))
d.aE(q,s)
r-=0.5
s=m+l*0.3
p=new B.a4(r,s,r+l*0.1,s+l*0.4)
s=l*0.05
s=B.bx(p,new B.aQ(s,s))
r=B.M()
r.san(o.$2(p,D.aF4))
d.aq(s,r)
r=i+2
s=m+l*0.18
o=B.M()
o.r=A.c.j(0.18).gp(0)
d.aE(new B.a4(r,s,r+(u-4),s+j),o)
if(f){o=l*0.42
this.lK(d,"+",new B.m(t+u*0.08,m+n),A.dl,o)
if(g!=null)this.lK(d,g,new B.m(i+u*0.12,m+w),A.bP,o)}},
bMm(d,e,f){return this.aTl(d,e,!0,f)},
bMl(d,e,f){return this.aTl(d,e,f,null)},
bJh(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a6.e,a4=B.v(a3===A.h.bM(a3)?A.h.S(a3):a3)+"V"
if(a3<=2){a2.bMm(a5,D.fsH,a4)
a2.lK(a5,"\u2212",D.eGO,A.ac,12)
a2.lK(a5,"+",D.eDI,A.aQ,12)
$.U()
w=B.M()
w.r=A.by.gp(0)
a5.aE(D.fsv,w)
w=a6.as
v=B.M()
v.r=B.ap(A.aC,A.bf,w).gp(0)
a5.aE(new B.a4(-22,15,-22+44*w,19),v)
if(a6.as<=0.02)a2.lK(a5,"FLAT",D.eGk,A.c1,9)}else if(a3<=4.5){u=a3>3?3:2
t=u*13+6
w=-t/2
v=w+t
s=new B.a4(-31,w,31,v)
r=B.bx(s,A.jL)
$.U()
q=B.M()
q.san(D.ceY.az(0,s))
a5.aq(r,q)
for(r=w+3,p=0;p<u;++p){q=r+p*13
a2.bMl(a5,new B.a4(-27,q,25,q+11.5),!1)}for(q=r+(t-6),o=0;o<2;++o){n=D.dhq[o]
$.U()
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=A.dV.gp(0)
a5.aE(new B.a4(n,r,n+1.6,q),m)}a2.lK(a5,a4,new B.m(-9,v+1),A.aQ,10)
a2.lK(a5,"+",new B.m(25,w-13),A.aQ,11)}else if(a3<=9){l=new B.a4(-18,-16,18,18)
w=B.bx(l,A.hs)
v=$.U()
r=B.M()
r.san(D.cff.az(0,l))
a5.aq(w,r)
k=new B.a4(-18,-4,18,18)
r=B.ri(k,A.hs,A.hs,A.bJ,A.bJ)
w=B.M()
w.san(D.avF.az(0,k))
a5.aq(r,w)
j=new B.a4(-18,-16,18,-11)
w=B.ri(j,A.bJ,A.bJ,A.hs,A.hs)
r=B.M()
r.san(D.cfG.az(0,j))
a5.aq(w,r)
i=B.M()
i.san(D.eQA.az(0,D.fsf))
a5.O(D.aPd,4,i)
r=B.a([],x.v)
h=new B.aI(v.r,A.ak,null,null,r)
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
w=B.M()
w.r=A.cz.gp(0)
a5.O(D.eET,2,w)
a2.lK(a5,"9V",D.eHg,A.c,13)
a2.lK(a5,"+",D.eGg,A.aQ,11)}else{e=new B.a4(-34,-12,34,18)
w=B.bx(e,A.hs)
$.U()
v=B.M()
v.san(D.ccM.az(0,e))
a5.aq(w,v)
d=new B.a4(-36,-18,36,-10)
v=B.bx(d,D.eQI)
w=B.M()
w.san(D.avW.az(0,d))
a5.aq(v,w)
for(g=0;g<6;++g){w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.ax.gp(0)
a5.O(new B.m(-14+g*5.6,-14),1.6,w)}w=B.M()
w.r=A.bu.j(0.92).gp(0)
a5.aE(D.fsR,w)
for(o=0;o<2;++o){w=D.cHZ[o]
n=w.a
a0=w.b
a1=B.c0(new B.m(n,-21),7,8)
w=B.bx(a1,A.Fr)
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.san(D.cdk.az(0,a1))
a5.aq(w,v)
v=B.bx(B.c0(new B.m(n,-24),3.5,9),A.Fr)
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=a0.gp(a0)
a5.aq(v,w)}a2.lK(a5,"\u2212",D.eGP,A.ac,11)
a2.lK(a5,"+",D.eDD,A.aC,11)
a2.lK(a5,"12V",H.aP7,A.ax,11)}},
aD(d){return!0}}
C.nh.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a7(k)
A.d.a7(d.b)
w=B.S(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.ui(o,r,q,p)
n.atT(o,r,q,p)
k.push(n)
J.ij(s[4],new C.cxt(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.anO(m,u[1],l,u[3])}}}
C.alo.prototype={
R(){var w=x.N
return new C.alp(B.c3(2000,1,1,0,0,0,0,0),A.J,A.aA,B.S(w,x.gl),B.aR(w),$,A.bH,0,B.a([],x.X),null,null)}}
C.alp.prototype={
agZ(d){var w=this,v=w.ch
if(v!=null)v.a2(0)
w.l(new C.bN1(w,d))
w.ch=B.cC(A.mx,new C.bN2(w))},
t(){var w=this.ch
if(w!=null)w.a2(0)
w=this.db
if(w!=null)w.a2(0)
this.byO()},
a2h(d,e){return this.cod(d,e)},
b5M(d){return this.a2h(d,!1)},
cod(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a2h=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.o3:A.zp
p=d.b
w=3
return B.b(K.hvr(s,r,p,d.ax<3.2,q,$.qZ().h(0,p).b),$async$a2h)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a2h,v)},
cBk(d){var w=this,v=new B.W(Date.now(),0,!1),u=w.CW.c0(0,d.a,new C.bN3()),t=J.cK(u)
t.K(u,v)
t.br(u,new C.bN4(v))
if(t.gI(u)>=4){t.a7(u)
t=w.db
if(t!=null)t.a2(0)
w.a3E(d)
return}if(t.gI(u)===3){t=w.db
if(t!=null)t.a2(0)
w.db=B.cC(A.j5,new C.bN5(w,u,d))}},
a1W(d){return this.cms(d)},
cms(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a1W=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iIE(s,d.b,A.h.S(A.h.F(t.a.c.d*0.12,1)*100)),$async$a1W)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a1W,v)},
a3E(d){return this.cyN(d)},
cyN(d){var w=0,v=B.j(x.H),u=this,t
var $async$a3E=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(A.L,null,new C.bN_(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a3E)
case 2:return B.h(null,v)}})
return B.i($async$a3E,v)},
Z(){this.a4()
this.bkY()
this.mv()},
bkY(){this.a.c.e=new C.bNl(this)},
mO(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.w6(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mN.h(0,s.b)
if((r==null?null:r.b)!==D.Bo)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.K(0,s.a)
q.a2h(s,!0)}}else u.X(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
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
case"speaker":if(s.fx>0)G.dI(330+A.n.F(110*A.h.bb(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dI((A.h.bb(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
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
q.l(new C.bNm())},
bcZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
b6s(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dp<1>"),w=new B.dp(w,v),w=new B.bQ(w,w.gI(0),v.k("bQ<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.B();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mN.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cOy(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=C.hUZ(new B.m(k,n),new B.m(i,l),p)
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
agX(){this.a.toString
this.l(new C.bMr())},
bvr(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dl7[v]
if(!A.d.aR(p.a.c.a,new C.bNn(u,w))){o=new B.m(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A2.Bd:o
s=s?A2.Bd:o
q=t.an_(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dI(1200,"",50,0,0.3,"tri")
p.agX()},
C(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.U0[v].a)
u=w.length
t=u>8
s=t?A.d.dw(w,0,A.n.ao(u+1,2)):w
r=t?A.d.fE(w,A.n.ao(w.length+1,2)):A.M
q=n.a.d
if(q!=null){w=B.a3(q).k("cv<1>")
w=B.B(new B.cv(q,w),w.k("L.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b6h(s,!0))
n.a.toString
if(t)w.push(n.b6h(r,!0))
w.push(B.E(B.cg(new C.bNk(n,q)),1))
return B.w(w,A.l,null,A.e,A.i,0,A.p)},
b6h(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qZ()
s=t.h(0,u).d.j(0.14)
r=new B.aQ(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.q(p,B.w(B.a([B.c(t.h(0,u).c,p,p,p,p,p,p,A.yg,p,p,p),B.c(t.h(0,u).b,p,1,A.a2,p,p,p,A.ou,p,p,p)],n),A.l,p,A.bb,A.i,0,A.p),A.f,p,p,new B.p(s,p,new B.bE(q,q,q,q),new B.bd(r,r,r,r),p,p,A.m),p,p,p,L.oY,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMs(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.co(m,p,p,A.ho,p,p,A.aK,!1),A.f,p,p,new B.p(L.CI,p,new B.bE(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.m),p,58,p,p,p,p,p,p)},
cqo(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qZ().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bMO(e,a1)
t=new C.bMN()
s=B.n(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.ab(0,A.H,r.j(0.18),A.cy,16)],x.V)
o=r.j(0.18)
n=B.n(10)
n=B.q(A.z,B.c(a1.c,d,d,d,d,d,d,A.yg,d,d,d),A.f,d,d,new B.p(o,d,d,n,d,d,A.m),d,34,d,d,d,d,d,34)
o=B.E(B.c(a1.b,d,1,A.a2,d,d,d,B.l(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.n(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.aa,o,B.aA(d,B.q(d,B.c(e.f?"Less":"About",d,d,d,d,d,d,A.Xa,d,d,d),A.f,d,d,new B.p(d,d,l,m,d,d,A.m),d,d,d,d,A.oa,d,d,d),A.y,!1,D.hNj,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bMz(e),d,d,d,d,d,d,!1,A.a4),B.aJ(d,d,d,d,D.c7b,d,d,d,new C.bMA(e,a2),d,d,d,d,"Remove part",A.cp),B.aJ(d,d,d,d,Ar.Rs,d,d,d,new C.bMB(e),d,d,d,d,d,A.cp)],k),A.l,d,A.e,A.i,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.c(a1.e,d,d,d,d,d,d,A.LF,d,d,d),A.cR,B.c("How it is made: "+a1.f,d,d,d,d,d,d,U.aYR,d,d,d)],k))
m.push(A.aj)
if(a2.x)m.push(D.h1S)
else m.push(new B.C(A.f6,B.A(B.a([t.$2(A.h.a1(Math.abs(a2.dy),2),"VOLTS"),A.b6,t.$2(A.h.a1(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.b6,t.$2(A.h.a1(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.i,0,d,d),d))
j=e.a.c.biP(a2)
if(j!=null){a1=(a2.x?A.aC:A.as).j(0.14)
w=B.n(10)
v=B.K((a2.x?A.aC:A.as).j(0.5),A.r,1)
m.push(new B.C(A.hz,B.q(d,B.c((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fYG,d,d,d),A.f,d,d,new B.p(a1,d,v,w,d,d,A.m),d,d,d,d,A.ct,d,d,d),d))}if(C.hsP(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.C(A.f6,new E.e5("CH "+h,a2.at===i,new C.bMF(e,a2,i),d,r,d),d))}a1=B.cc(B.A(a1,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aK)
if(e.a.c.rM(a2)){w=F.TP[A.n.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.aj,a1,A.at,B.c(w,d,e.f?4:1,A.a2,d,d,d,N.hI,d,d,d)],k)
if(e.a.c.rM(a2))a1.push(new E.fL(A.xw,"Open big screen",new C.bMG(e,a2),r,d))
A.d.u(m,a1)}if(D.mN.am(0,a0)&&!C.hsP(a0)){a1=B.a([A.aj],k)
if(e.f||!e.a.c.rM(a2))a1.push(B.c(e.a.c.rM(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,N.hI,d,d,d))
if(e.a.c.rM(a2))a1.push(new E.fL(A.R5,"Open the "+$.qZ().h(0,a0).b,new C.bMH(e,a2),r,d))
A.d.u(m,a1)}if(D.mN.am(0,a0))A.d.u(m,B.a([A.aj,new E.fL(A.DW,"Make it bigger (or tap it 4 times)",new C.bMI(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.h.a1(a2.db,1)
if(e.a.c.rM(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.aj,B.c("Volts in: "+w+" V   \u2192   Volts out: "+A.h.a1(v,1)+" V",d,d,d,d,d,d,D.fSv,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dFl[g]
w=f===A.h.bM(f)?A.h.S(f):f
a1.push(new E.e5(B.v(w)+" V out",a2.e===f,new C.bMJ(e,a2,f),d,r,d))}v.push(new B.C(A.kO,B.bY(A.bI,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.hh4)
A.d.u(m,v)}if(e.a.c.Nf(a2)&&!a2.x){a1=A.h.a1(a2.cx,2)
w=A.h.a1(e.a.c.AP(a2),2)
v=e.a.c
o=v.aqB(a2)?"   \u26a0 OVERLOADED":""
a1=B.c("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.l(d,d,v.aqB(a2)?A.c1:A.eB,d,d,d,d,d,d,d,d,12.5,d,d,A.C,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.n(4)
o=A.h.D(a2.cx/e.a.c.AP(a2),0,1)
v=e.a.c.aqB(a2)?A.aC:A.bf
m.push(new B.C(A.hz,B.w(B.a([a1,A.cR,B.bv(w,B.jJ(A.by,d,d,5,d,o,new B.lc(v,x.c)),A.ap)],k),A.B,d,A.e,A.i,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.h.S(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.C(A.hz,B.c("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fLU,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dt1[g]
w=f===1.5?"1.5 V (rechargeable)":B.v(f)+" V"
a1.push(new E.e5(w,a2.e===f,new C.bMK(e,a2,f),d,r,d))}m.push(B.bY(A.bI,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dhU[g]
w=f>=1000?"1 k\u03a9":""+A.n.S(f)+" \u03a9"
a1.push(new E.e5(w,a2.r===f,new C.bML(e,a2,f),d,r,d))}m.push(B.bY(A.bI,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bMM(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bMC(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bMD(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bME(a2)))
if(a0==="crank")m.push(D.hcf)
if(a0==="switch")m.push(B.c(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,N.hI,d,d,d))
return B.q(d,new B.cQ(D.bao,B.cc(B.w(m,A.B,d,A.e,A.P,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.p(F.ZV,d,q,s,p,d,A.m),d,d,D.hMy,d,D.bHi,d,d,d)}}
C.bfz.prototype={}
C.X9.prototype={
R(){return new C.aGV(C.hz0(),new B.cB(null,x.gJ),B.aR(x.S))}}
C.aGV.prototype={
Z(){this.a4()
$.aS.cT$.push(this)
this.agY()},
agY(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fVk(),$async$agY)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iHN(t.d,r)
if(s!=null){t.l(new C.e6V(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$agY,v)},
Ge(){var w,v=this
if(!v.as)return
w=C.ixF(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bJx(w)},
jf(d){if(d!==A.fY)this.Ge()},
t(){$.aS.hP(this)
this.Ge()
this.a3()},
cfo(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("X<1>")
t=new B.X(v,new C.e73(q),u).gI(0)
s=new B.X(v,new C.e74(),u).gI(0)
r=new B.X(v,w.gd3b(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.l(new C.e75(q,t,s,r))}if(A.n.F(q.w,45)===0)q.Ge()
if(A.n.F(q.w,10)===0){w=q.f
$.akt()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.akt()[q.f].c.$1(q.d)){w.K(0,q.f)
C.Kc("bell",B.a([0,4,7,12],x.t),700,0.45)
q.l(new C.e76())
q.Ge()
w=q.c
w.toString
w=B.KF(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.c("\u2705 Challenge done: "+$.akt()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mv,p,p,p,p,p,p,p,p,p,p))}},
ajP(){var w=0,v=B.j(x.H),u=this,t
var $async$ajP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.e6U(u),t,null,!0,!0,x.H),$async$ajP)
case 2:return B.h(null,v)}})
return B.i($async$ajP,v)},
b3q(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.q(w,B.V(d,f,w,w,w,18),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.hb(new B.a5(40,38,new B.am(A.a0,w,A.ab,A.f,u,w),w),w,e,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b3p(d,e,f,g){return this.b3q(d,e,f,g,null)},
auA(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.q(w,B.A(B.a([B.V(d,f,w,w,w,15),A.dY,new B.d0(1,A.c8,B.c(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.bb,A.i,0,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
ai8(){var w=0,v=B.j(x.H),u=this,t
var $async$ai8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a7(t,!1).ca(B.e4(new C.e6Q(u),!1,null,x.H)),$async$ai8)
case 2:t=u.e.gbm()
if(t!=null)t.bkY()
if(u.c!=null)u.l(new C.e6R())
u.Ge()
return B.h(null,v)}})
return B.i($async$ai8,v)},
bMt(){var w,v,u,t,s=null,r=this.f
$.akt()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bh:A.aC
u=B.n(9)
t=B.K(L.CI,A.r,1.5)
return B.q(s,B.at(B.c(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.yj,s,s,s),s,s,s),A.f,s,D.bae,new B.p(r,s,t,u,s,s,A.m),s,s,s,s,A.fd,s,s,s)},
akX(){var w=0,v=B.j(x.H),u=this,t
var $async$akX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(F.ng,null,new C.e72(u),t,!0,!0,!0,A.kA,!1,!1,x.H),$async$akX)
case 2:return B.h(null,v)}})
return B.i($async$akX,v)},
cfp(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.q(r,D.c3L,A.f,r,r,new B.p(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e78(d),r,r,r,r,r,r,!1,A.a4),o=B.n(11)
o=B.q(r,D.bgd,A.f,r,r,new B.p(A.bt,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.m),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.w(B.a([B.A(B.a([p,A.aa,o,A.aa,B.E(B.w(B.a([D.heY,B.c(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f_:A.hm,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.B,r,A.e,A.i,0,A.p),1),new C.aAM(s.gcm9(),r),A.uw,s.b3p(A.rr,"Construction Lab: real 3D wiring, plumbing and a house",A.cX,new C.e79(s,d)),s.b3q(A.m7,"Challenges",A.aQ,s.gcDZ(),s.bMt()),s.b3p(A.DR,"How to play",A.aH,new C.e7a(d,e))],v),A.l,r,A.e,A.i,0,r,r),A.aj,B.A(B.a([s.auA(A.od,"Circuits",A.bk,s.gcwE()),A.b6,s.auA(A.p1,"Repair",A.aQ,new C.e7b(s)),A.b6,s.auA(I.xu,"Clear",A.c1,new C.e7c(s))],v),A.l,r,A.e,A.i,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.p(L.CI,r,new B.bE(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.m),r,r,r,r,D.bMs,r,r,r)},
C(d){var w=this,v=null
$.av9="tech"
return B.c6(v,A.c7,B.bn(!0,B.w(B.a([w.cfp(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hxR(w.d,w.e,w.gcfn(),v),1)],x.p),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.aAM.prototype={
R(){return new C.bdD(null,null)}}
C.bdD.prototype={
gaAY(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.Z,null,1,null,v)
w.cU(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaAY().t()
this.bA9()},
C(d){var w=null,v=this.a.c
return B.aA(w,B.hb(new B.a5(42,42,B.ca(this.gaAY(),new C.cPi(this),w),w),w,"AI Inventor: say what you want to make",w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bdC.prototype={
a5(d,e){var w,v,u,t=null,s=e.eq(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.U()
w=B.M()
w.r=A.b_.j(0.25+0.15*o).gp(0)
w.y=O.oZ
d.O(s,r+2+o*2,w)
w=B.M()
w.san(D.eQf.az(0,B.bZ(s,r)))
d.O(s,r,w)
v=B.M()
v.b=A.ad
v.c=2.2
v.san(new B.hf(A.z,0,6.283185307179586,A.w,D.d7o,t,new B.n5(p)).az(0,B.bZ(s,r)))
d.O(s,r,v)
p=new C.cPh(d)
p.$3(s.a6(0,A.ul),8+o*1.5,1)
q*=4
p.$3(s.a6(0,D.eF_),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a6(0,D.eHk),2.6,0.5+0.5*Math.cos(q))
u=B.h0(t,A.cJ,t,t,t,D.fIb,A.a7,A.ca,t,A.e4,A.cb)
u.eJ()
u.a5(d,s.a6(0,new B.m(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.aB6.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aB7.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.byN()}}
C.aNB.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCz.prototype={}
C.h6.prototype={}
C.KG.prototype={
a9(){return"ScreenStyle."+this.b}}
C.mt.prototype={}
C.WT.prototype={
R(){return new C.aGL(A2.Bd,null,null)}}
C.aGL.prototype={
gac_(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.oX,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gacJ(){var w=D.mN.h(0,this.a.c)
return w==null?D.aVa:w},
t(){if(this.f){P.Dh(Y.Ly)
P.bHX()}this.gac_().t()
this.bC1()},
gCd(){var w=this.gac_().y
w=w==null?null:A.n.ao(w.a,1000)
return(w==null?0:w)/1000},
OQ(){var w,v=this,u=v.e
if(u==null)return null
w=F.iz[u].e
if(w===-2)return null
if(w===-1)return A.n.F(v.y+A.h.bb(Math.max(0,v.gCd()-v.z)/10),14)
return w},
KA(d){this.l(new C.e2R(this,d))},
b6O(d){this.l(new C.e2S(this,d,14))},
aEZ(d){var w=this.OQ()
if(w==null)w=d>0?-1:0
return this.b6O(w+d)},
cJ3(d,e){if(e.a<=0||e.b<=0||this.OQ()==null)return
this.l(new C.e31(this,d,e))},
aeV(){return this.c7s()},
c7s(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aeV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.OQ()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bV(A.L,null,new C.e2Q(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$aeV)
case 3:if(t.c!=null&&r.a)t.b6O(q)
case 1:return B.h(u,v)}})
return B.i($async$aeV,v)},
cKC(){var w=this,v=!w.f
w.l(new C.e32(w,v))
if(v){P.Dh(Y.acJ)
P.htG(w.gacJ().b===D.y3)}else{P.Dh(Y.Ly)
P.bHX()}},
cfs(){var w,v=this
if(!v.f)return
B.jI()
v.l(new C.e33(v))
w=v.c.L(x.q).f
w.N3()
if(v.r)w.T(F.aXi)},
aRH(d){return B.cg(new C.e2J(this,d))},
cpN(d){var w,v=this,u=null,t=v.gCd(),s=t-v.w,r=s<1.4?new K.b1a(v.x,s):u
if(F.iz[d].e===-1){w=Math.max(0,t-v.z)
return new C.ah6(d,w,r,A.n.F(v.y+A.h.bb(w/10),14),u)}return new C.ah6(d,t,r,u,u)},
b0m(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.C(new B.R(u,0,u,0),B.A(B.a([B.V(A.kQ,A.ax,w,w,w,d*0.6),new B.a5(d*0.18,w,w,w),B.c("Learn more",w,w,w,w,w,w,B.l(w,w,A.ax,w,w,w,w,w,w,w,w,d*0.48,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,w,w),w),A.nz,!0,w,w,w,w,D.hMA,w,w,w,w,w,w,this.gc7r(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.nz,w,w,A.ai)},
b3r(d,e,f,g){var w=null,v=B.nt(w,A.ba,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aJ(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cfr(d,e,f){return this.b3r(d,e,f,null)},
cxX(){var w=this,v=null,u=new C.e3_(),t=A.v.j(0.72),s=B.n(22),r=B.K(w.gacJ().d.j(0.5),A.r,1),q=u.$3(D.bX5,"AD \u2212",new C.e2W(w)),p=u.$3(A.at2,"AD +",new C.e2X(w)),o=u.$5$color$on(A.kP,"HOME",new C.e2Y(w),w.gacJ().d,w.e==null),n=w.e
n=n!=null&&F.iz[n].e===-1
return B.q(v,B.A(B.a([q,p,o,u.$5$color$on(A.A1,"ADS",new C.e2Z(w),A.c5,n)],x.p),A.l,v,A.e,A.P,0,v,v),A.f,v,v,new B.p(t,v,r,s,v,v,A.m),v,v,D.hMG,v,A.I2,v,v,v)},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gacJ(),l=o.f,k=!l||!o.r
l=l?B.aF(d,A.dL,x.w).w.r.b+26:8
w=o.cfr(A.cC,"Back to the board",new C.e34(d))
v=o.f
u=v?Ao.Iz:A.xw
v=v?"Leave full screen":"Full screen"
v=o.b3r(u,v,o.gbds(),D.hNw)
u=B.n(20)
t=o.e
s=m.a
r=x.p
q=new B.C(new B.R(8,l,8,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bL(A.a9,n,n,B.q(n,B.c(t==null?s:s+" \xb7 "+F.iz[t].a,n,1,A.a2,n,n,n,Aq.yb,n,n,n),A.f,n,n,new B.p(A.ba,n,n,u,n,n,A.m),n,n,n,n,A.lE,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,n,n),n)
p=m.b===D.y3?o.bOD(m):o.cti(m)
l=o.f
w=!l
v=l?o.gb3s():n
if(l){l=B.at(p,n,n,n)
u=k?1:0
r=new B.am(A.a0,n,A.b5,A.t,B.a([l,B.ao(n,B.xR(new B.dn(!k,q,n),A.b0,A.ie,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.w(B.a([q,A.aj,o.cxX(),B.E(new B.C(A.cB,B.at(p,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,A.p)
return B.c6(n,A4.a0y,B.bn(w,B.aA(A.c_,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
cfq(d){var w
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
cti(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.abJ
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.ca(p.gac_(),new C.e2V(p,w,d,m),o)
if(n===D.abK)v=new B.C0(D.bN6,v,o)
n=p.cfq(n)
u=p.f?A.hO:Au.a21
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.v,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.n(w)
r=B.a([new B.ab(0,A.H,d.d.j(0.28),A.J,36)],x.V)
return new B.fK(n,B.q(o,B.q(o,v,A.f,o,o,new B.p(A.v,o,o,B.n(w-3),o,o,A.m),o,o,o,o,A7.I3,o,o,o),A.f,o,o,new B.p(o,o,o,s,r,new B.a6(A.aw,A.aD,A.w,q,o,o),A.m),o,o,o,u,new B.R(t,t,t,t),o,o,o),o)},
bc4(d){var w=Date.now(),v=A.n.D(this.a.d+A.h.bb(this.gCd()*0.4),0,100),u=d.b===D.abJ,t=u?34:20,s=u?28:18
return new B.C(new B.R(t,12,s,2),B.cg(new C.e30(new B.W(w,0,!1),v)),null)},
ayM(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.v,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.q(v,B.at(B.c(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.p(v,v,v,u,D.dzL,new B.a6(A.aw,A.aD,A.w,t,v,v),A.m),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.at,B.c(d.a,v,1,A.a2,v,v,v,D.fOV,v,v,v)],w))
return B.aA(v,B.w(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e2O(this,d),v,v,v,v,v,v,!1,A.a4)},
c5i(d,e){return this.ayM(d,e,!0)},
c5_(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aVb||o===D.Bq,m=d.d,l=B.ap(m,A.v,0.55)
l.toString
m=B.ap(m,A.ka,0.5)
m.toString
m=B.a([l,A.dD,m],x.O)
l=q.bc4(d)
w=n?190:138
v=B.n(24)
u=B.K(A.aT,A.r,1)
w=B.aA(p,B.q(p,B.bv(B.n(23),B.b4(p,p,p,new C.ah6(0,q.gCd(),p,p,p),A.hh),A.ap),A.f,p,p,new B.p(p,p,u,v,p,p,A.m),p,w,p,A.ig,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e2M(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.iz[s]
t.push(new B.cq(A.z,p,p,new B.d7(A.dn,A.z,A.f,q.c5i(r,n?58:54),p),p))}l=B.a([l,A.aj,w,A.af,B.E(B.lh(0.92,t,v,8,12,A.vo,p,!1),1)],u)
if(o!==D.abK){o=A.c.j(0.16)
w=B.n(28)
l.push(B.q(p,B.cg(new C.e2N(q)),A.f,p,p,new B.p(o,p,p,w,p,p,A.m),p,p,p,D.bHs,H.apS,p,p,p))}return B.q(p,B.w(l,A.l,p,A.e,A.i,0,A.p),A.f,p,p,new B.p(p,p,p,p,p,new B.a6(A.aw,A.aD,A.w,m,p,p),A.m),p,p,p,p,p,p,p,p)},
bHS(d,e){var w=this,v=null,u=w.OQ(),t=w.bc4(d),s=B.E(w.aRH(e),1),r=x.p,q=B.a([B.bS(0,B.aA(v,B.q(v,B.at(B.c(F.iz[e].a,v,v,v,v,v,v,A.LI,v,v,v),v,v,v),A.f,A.v,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e2G(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.b0m(22),v,v,v,10,8,v))
return B.q(v,B.w(B.a([t,s,new B.a5(v,38,new B.am(A.a0,v,A.ab,A.t,q,v),v)],r),A.l,v,A.e,A.i,0,A.p),A.f,A.v,v,v,v,v,v,v,v,v,v,v)},
aUK(d,e){return B.ca(this.gac_(),new C.e2L(this,e,d),null)},
bOD(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qH(t.aUK(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(q?26:14)
u=B.a([new B.ab(0,A.H,d.d.j(0.25),A.J,36)],x.V)
return new B.fK(1.5384615384615383,B.q(s,B.bv(B.n(q?20:8),t.aUK(d,q),A.ap),A.f,s,s,new B.p(s,s,s,v,u,new B.a6(A.aw,A.aD,A.w,w,s,s),A.m),s,s,s,A.apM,new B.R(8,8,8,r),s,s,s),s)}}
C.bAB.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.U()
w=B.M()
v=this.c
u=B.ap(v,A.v,0.6)
u.toString
t=B.ap(v,A.ka,0.4)
t.toString
w.san(new B.a6(A.aw,A.aD,A.w,B.a([u,A.dD,t],x.O),null,null).az(0,new B.a4(0,0,p,o)))
d.aE(new B.a4(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=v.j(0.1).gp(0)
t.y=D.bNb
d.O(new B.m(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.ah6.prototype={
a5(d,e){var w=this
return K.MI(d,e,w.b,w.c,w.e,w.d)},
aD(d){return!0}}
C.aPp.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bzn.prototype={}
C.aaG.prototype={
C(d){var w=null
return B.c6(B.eQ(w,w,w,!0,!0,D.akC,w,1,!0,w,0,!1,w,!1,w,w,B.aJ(w,w,w,w,I.auC,w,w,w,new C.cqm(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.ho4,w,w,w,1,w,!0),D.akC,B.co(B.a([D.eIP,B.cg(new C.cqn())],x.p),w,w,D.bIy,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Yy.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aIu(w,new B.au(A.ay,$.ay()),$,A.bH,0,B.a([],x.X),null,null)}}
C.aIu.prototype={
Z(){this.a4()
this.mv()},
b9V(d){var w=this.d.length
return A.n.F(A.h.bb(A.h.F(A.h.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mO(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b9V(v.f)
if(w!==v.x){v.x=w
E.mQ("bell",24+A.n.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.l(new C.f3A(v))
C.Kc("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cho(){if(this.d.length<2)return
this.l(new C.f3w(this))},
b44(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.l(new C.f3v(w,v))},
C(d){var w,v,u,t,s=this,r=null,q=s.gchn(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bAN(p,s.f,r),A.hh),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.w(B.a([o,new B.a5(r,40,B.at(B.c(n,r,r,r,r,r,r,D.fX2,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aEx[A.n.F(v,8)].j(0.9)
t=new B.aQ(20,20)
o.push(B.aA(r,B.q(r,B.c(p[v],r,r,r,r,r,r,D.fWe,r,r,r),A.f,r,r,new B.p(u,r,r,new B.bd(t,t,t,t),r,r,A.m),r,r,r,A.f6,A.he,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.f3y(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.m0(A.aQ,A.fh,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.w(B.a([new E.fm(o,r,r),B.A(B.a([B.E(B.aN(r,A.M,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bB(r,new B.b6(4,B.n(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.k4,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.am,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.f3z(s),r,!1,r,r,!1,r,!0,r,A.ae,r,r,r,r,r,r,r,r,r,r,r,A.du,!0,A.a7,r,A.ao,r,r,r,r),1),A.aa,new E.fL(A.ih,"Add",s.gchl(s),A.c,r),A.b6,new E.fL(A.oc,"Spin",q,A.bf,r)],w),A.l,r,A.e,A.i,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.bAN.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.m(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.U()
w=B.M()
w.r=D.bmB.gp(0)
d.O(g,i,w)
w=B.M()
w.b=A.ad
w.c=3
w.r=A.aQ.gp(0)
d.O(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bZ(g,f)
o=new B.ar(A.U,A.R,A.X,A.Y,A.W)
o.r=D.aEx[A.n.F(r,8)].gp(0)
d.cR(p,q,u,!0,o)
o=B.bZ(g,f)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.b=A.ad
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cR(o,q,u,!0,p)
J.bs(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.av(p,0,11)+"\u2026"
n=new B.iS(new B.eE(p,l,l,A.cV,l,l,l,l,l,l,D.fJ_),A.a7,A.ca,new B.k2(1),l,l,l,l,A.cb,l,A.cJ)
n.eJ()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.m(f-o-16,-p.gb4(p)/2))
i.restore()}i=B.M()
i.r=D.akd.gp(0)
d.O(g,20,i)
i=B.M()
i.b=A.ad
i.c=3
i.r=A.aQ.gp(0)
d.O(g,20,i)
m=new B.aI(k.r,A.ak,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bz())
h=B.M()
h.r=A.c.gp(0)
d.af(m,h)
h=B.M()
h.b=A.ad
h.c=2
h.r=A.ba.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.Xh.prototype={
R(){return new C.boB($,A.bH,0,B.a([],x.X),null,null)}}
C.boB.prototype={
Z(){this.a4()
this.mv()},
mO(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.Kc("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.VH(900,new C.eaD())}w.l(new C.eaE())},
b46(d){return this.l(new C.eay(this,d))},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aY(A.n.v(A.h.ao(m,60)),2,"0")
v=A.a.aY(A.n.v(A.n.F(A.h.cH(m),60)),2,"0")
m=B.b4(n,n,n,new C.bvq(l,A.c1,n),A.aWH)
u=B.c(w+":"+v,n,n,n,n,n,n,D.fNQ,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a5(280,280,new B.am(A.z,n,A.ab,A.t,B.a([m,B.w(B.a([u,B.c(t,n,n,n,n,n,n,D.fMK,n,n,n),A.at,B.c("Sessions done: "+o.r,n,n,n,n,n,n,A.wp,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dwi[r]
u.push(new E.e5(""+q+" min",o.d===q,new C.eaA(o,q),n,A.c1,n))}m=o.f
p=m?Ab.vI:A.fR
m=m?"Pause":"Start"
return E.m0(A.c1,A.fh,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.w(B.a([new E.fm(u,n,n),new E.fm(B.a([new E.fL(p,m,new C.eaB(o),A.bf,n),new E.fL(A.mF,"Reset",new C.eaC(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.bvq.prototype={
a5(d,e){var w,v,u,t,s=e.eq(A.J),r=e.a/2-14
$.U()
w=B.M()
w.b=A.ad
w.c=16
w.r=A.c.j(0.08).gp(0)
d.O(s,r,w)
w=B.bZ(s,r)
v=B.M()
v.b=A.ad
v.c=16
v.d=A.bG
u=this.c
t=B.ap(u,A.c,0.4)
t.toString
v.san(new B.hf(A.z,-1.5707963267948966,4.71238898038469,A.w,B.a([u,t,u],x.O),null,null).az(0,B.bZ(s,r)))
d.cR(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.Ws.prototype={
R(){return new C.boa($,A.bH,0,B.a([],x.X),null,null)}}
C.boa.prototype={
Z(){this.a4()
this.mv()},
mO(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.UJ.h(0,p.d)
w.toString
v=A.d.eL(w,new C.dV3())
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
E.mQ("flute",D.cgs[t]+5,1400,0.35)}p.l(new C.dV4())},
gchr(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Lv("Press Start",0.5)
w=D.UJ.h(0,this.d)
w.toString
v=A.d.eL(w,new C.dUZ())
u=A.h.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Lv("Breathe in",0.5+0.5*A.dS.aA(0,p))
case 1:return new B.Lv("Hold",1)
case 2:return new B.Lv("Breathe out",1-0.5*A.dS.aA(0,p))
default:return new B.Lv("Hold",0.5)}}}return new B.Lv("",0.5)},
C(d){var w,v,u,t,s,r=this,q=null,p=r.gchr(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fL.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.p(s,q,q,q,u===0?B.a([new B.ab(0,A.H,A.fL.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.c(p.a,q,q,q,q,q,q,A.qB,q,q,q))
n.push(B.ao(0,B.c("Breaths: "+r.w,q,q,q,q,q,q,A.k4,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a5(300,340,new B.am(A.z,q,A.ab,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aP(D.UJ.geD(D.UJ));w.B();){v=w.gP(w)
o.push(new E.e5(v,r.d===v,new C.dV1(r,v),q,A.fL,q))}w=r.e
v=w?A.vM:A.fR
w=w?"Stop":"Start"
o.push(new E.fL(v,w,new C.dV2(r),A.bf,q))
return E.m0(A.fL,A.fh,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fm(o,q,q))}}
C.aM_.prototype={}
C.X8.prototype={
R(){return new C.bos(new B.cB(null,x.A),B.a([],x.au),A.ax,A.c)}}
C.bos.prototype={
C(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aJ(s,s,s,s,I.p9,s,s,s,new C.e6p(t,d),s,s,s,s,"Share",s)],r),p=B.bv(B.n(18),new B.e9(B.aA(s,B.b4(s,s,s,new C.bqw(t.e,t.x,s),A.hh),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e6q(t),new C.e6r(t),s,s,s,s,s,s,s,s,s,new C.e6s(t),s,s,s,s,!1,A.a4),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.d9a[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.Gy(v,u,new C.e6t(t,v),!1,s))}u=t.r
return E.m0(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.C(A.bS,p,s),"DRAW PAD",B.w(B.a([new E.fm(o,s,s),E.jf(A.bE,""+A.h.S(u),"Brush",30,2,new C.e6u(t),u),new E.fm(B.a([new E.e5("Eraser",t.w,new C.e6v(t),A.A2,A.bE,s),new E.fL(A.q8,"Undo",new C.e6w(t),A.c,s),new E.fL(A.eq,"Clear",new C.e6x(t),A.c,s),new E.fL(A.QR,"Paper",new C.e6y(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bqw.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.U()
w=B.M()
w.r=this.c.gp(0)
d.aE(new B.a4(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=$.U()
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bG
q.e=A.dQ
q.b=A.ad
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ar(A.U,A.R,A.X,A.Y,A.W)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aI(r.r,A.ak,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ac()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.cm(o,r,(o+k.a)/2,(r+k.b)/2)
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
C.XV.prototype={
R(){var w=x.S
return new C.aHK(B.aR(w),B.aR(w))}}
C.aHK.prototype={
Z(){this.a4()
this.aw6()},
aw6(){var w,v,u=this,t=x.N,s=B.bt(D.dC2,!0,t)
A.d.E8(s)
w=x.S
v=B.T(s).c
t=B.B(B.cJ(s,0,B.dx(u.d,"count",w),v),t)
A.d.u(t,B.cJ(s,0,B.dx(u.d,"count",w),v))
A.d.E8(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
chm(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mQ("bell",12+A.n.F(d,9),150,0.35)
s.l(new C.eyz(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.d()
t=x.H
if(w[v]===w[u])B.bM(A.nj,new C.eyA(s,v,u),t)
else{s.x=!0
B.bM(Ai.D6,new C.eyB(s),t)}}},
C(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.d()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.c("Moves: "+r.w,q,q,q,q,q,q,A.Xh,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.n.ao(p,2)+" / "+o
o=x.p
p=B.w(B.a([new B.C(A.zz,B.A(B.a([u,B.c(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ac,q,q,q,q,q,q,q,q,q,q,q,A.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iB,A.i,0,q,q),q),B.E(B.iA(!0,q,q,A.y,new B.hZ(v,8,8,1,q),new C.eyF(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.l,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.daZ[t]
o.push(new E.e5(s.b,r.d===s.a,new C.eyG(r,s),q,A.aH,q))}o.push(new E.fL(I.at1,"New game",new C.eyH(r),A.bf,q))
return E.m0(A.aH,A.fh,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fm(o,q,q))}}
C.Y5.prototype={
R(){return new C.aI7(B.a([],x.t))}}
C.aI7.prototype={
chq(d){A.d.a7(this.d)
this.w=!0
this.b45()},
b45(){this.d.push(A.cW.aw(4))
this.e=0
this.a1d()},
a1d(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1d=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.l(new C.eLH(t))
s=x.H
w=3
return B.b(B.bM(A.m3,null,s),$async$a1d)
case 3:r=t.d,q=B.bt(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aXJ(n)
w=7
return B.b(B.bM(new B.bh(1000*Math.max(280,600-r.length*18)),null,s),$async$a1d)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.l(new C.eLI(t))
case 1:return B.h(u,v)}})
return B.i($async$a1d,v)},
aXJ(d){this.l(new C.eLF(this,d))
E.mQ("marimba",D.cgr[d]+5,450,0.55)
B.bM(A.HH,new C.eLG(this),x.H)},
chs(d){var w,v,u=this
if(!u.w||u.r)return
u.aXJ(d)
w=u.d
v=u.e
if(w[v]!==d){G.dI(90,"",600,0,0.5,"saw")
u.l(new C.eLJ(u))
return}++v
u.e=v
if(v===w.length){u.l(new C.eLK(u))
B.bM(A.hy,new C.eLL(u),x.H)}},
C(d){var w,v,u,t,s,r,q=this,p=null,o=B.c("Best: "+q.x,p,p,p,p,p,p,V.aZm,p,p,p),n=B.c(q.y,p,p,p,p,p,p,D.fXt,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aDo[v]
u=u.j(q.f===v?1:0.35)
t=new B.aQ(28,28)
s=q.f===v?B.a([new B.ab(0,A.H,D.aDo[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cZ(p,p,p,p,A.b0,new B.p(u,p,new B.bE(r,r,r,r),new B.bd(t,t,t,t),s,p,A.m),A.jC,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eLM(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.C(A.ae,B.w(B.a([o,A.aj,n,A.df,new B.fK(1,B.lh(1,l,2,12,12,p,A.e9,!1),p)],m),A.l,p,A.bb,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.m0(A.bu,A.fh,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fm(B.a([new E.fL(A.fR,n,q.gchp(q),A.bf,p)],m),p,p))}}
C.Yp.prototype={
R(){return new C.bpK(new B.au(A.ay,$.ay()))}}
C.bpK.prototype={
azI(d){return B.oe(A.h.a1(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eZW(),null)},
C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cA(B.aE(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.f_4()
l=B.aN(m,A.M,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bB(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.n(16),Ad.yJ),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.n(16),D.b8J),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.mg,"Bill amount",!0,!0,!1,m,m,m,m,D.fUH,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.am,m,m,m,m,m,A.ei,m,m,m,1,m,m,!1,"\u2022",m,new C.f_0(n),m,m,m,!1,m,m,!1,m,!0,m,A.ae,m,m,m,m,m,m,m,m,m,m,m,A.aYj,!0,A.a7,m,A.ao,m,m,m,m)
k=A.bf.j(0.1)
s=B.n(20)
r=B.K(A.bf.j(0.35),A.r,1)
q=x.p
s=B.co(B.a([l,A.bx,B.q(m,B.w(B.a([t.$2("Tip ("+A.h.S(n.e)+"%)","$"+n.azI(w)),t.$2("Total","$"+n.azI(v)),Aa.P3,t.$3$big("Each of "+n.f+" pays","$"+n.azI(u),!0)],q),A.l,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(k,m,r,s,m,m,A.m),m,m,m,m,A.bR,m,m,m)],q),m,m,A.f7,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cVj[p]
r.push(new E.e5(""+o+"%",A.h.S(n.e)===o,new C.f_1(n,o),m,A.bf,m))}l=n.f
return E.m0(A.bf,A.fh,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.w(B.a([new E.fm(r,"TIP",m),E.jf(A.aH,""+l,"People",20,1,new C.f_2(n),l),new E.fm(B.a([new E.e5("Round up",n.r,new C.f_3(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.XU.prototype={
R(){var w=B.a([3,5],x.t)
return new C.bpd(w,A.cW,$,A.bH,0,B.a([],x.X),null,null)}}
C.bpd.prototype={
Z(){this.a4()
this.mv()},
mO(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.n.F(A.h.bb(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.Yr("snare",0,0.5)}u.l(new C.exe())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hc()
u.w=t
u.x=t?0:3.141592653589793
E.mQ("bell",24,400,0.5)}u.l(new C.exf())}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bhZ(v,o.r>0,n))}u=B.aA(n,B.at(B.bY(A.fX,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ex7(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.h.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.de,A.r,6)
s=B.a([new B.ab(0,A.H,A.aQ.j(0.4),A.J,30)],x.V)
u=B.aA(n,B.at(B.e0(A.z,B.q(A.z,B.c(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fTQ,n,n,n),A.f,n,n,new B.p(n,n,v,n,s,D.eQj,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ex8(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.w(B.a([B.c(m===0?"?":""+m,n,n,n,n,n,n,D.fIt,n,n,n),B.c("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.k4,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ex9(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dtg[r]
v.push(new E.e5(q.b,o.d===q.a,new C.exa(o,q),q.c,A.bk,n))}v=B.a([new E.fm(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.jf(A.bk,""+s,"Dice",4,1,new C.exb(o),s))}if(o.d==="num"){s=o.z
s=E.jf(A.bk,""+s,"From",100,1,new C.exc(o),s)
p=o.Q
A.d.u(v,B.a([s,E.jf(A.bk,""+p,"To",1000,2,new C.exd(o),p)],m))}return E.m0(A.bk,A.fh,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.w(v,A.l,n,A.e,A.P,0,A.p))}}
C.bhZ.prototype={
C(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cW.ai()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ab(0,A.H,A.v.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dPc.h(0,A.n.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.q(p,p,A.f,p,p,A.Zn,p,18,p,p,p,p,p,18),p))
return B.eN(A.z,w,B.q(p,new B.am(A.a0,p,A.ab,A.t,t,p),A.f,p,p,new B.p(A.c,p,p,v,u,p,A.m),p,100,p,p,A.bD,p,p,100),p)}}
C.aPb.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCv.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bBO()}}
C.aPw.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCB.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bC9()}}
C.aPX.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCL.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bCB()}}
C.aQp.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCU.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bD3()}}
var z=a.updateTypes(["P(ui)","~()","P(a6I)","az<~>()","P(Dv)","F(ui,F)","H(H,ui)","P(Dr)","P(a0z)","P(adP)","P(a5A)","P(o6)","Yq()","Wr()","aaG()","Y_()","Ye()","Y0()","P(nh)","Wy()","ahq(Z,F)","age(Z,F)","~(a9<@,@>)","F(Dr,Dr)","o(es)","P(ahd)","P(a2Q)","P(DG)","P(aek)","P(agi)","P(ae2)","F(F,rz)","F(F,Dv)","o(rz)","~(rz,ah<o>,F)","rz?(Dv)","XU()","x(o,a2D)","P(acG)","~(Br)","Yt()","~(xZ,o,m,u,H)","~(o,ui)","X9()","XE(Z)","OR(Z)","WT(Z,bA<H>,bA<H>)","Jo(Z)","Yy()","Xh()","Ws()","X8()","XV()","Y5()","Yp()","P(rz)"])
C.fVI.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fJM.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fRH.prototype={
$1(d){var w
if(!this.a.Nf(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fRI.prototype={
$1(d){return d.x},
$S:z+0}
C.fVF.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fVG.prototype={
$1(d){var w
if(!this.a.Nf(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fVH.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.eqg.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eqh.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.eqi.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd4(v).Q
v.toString
w.me(v,A.ed,A.ie)}},
$S:7}
C.eqt.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.equ.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.eqp.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.eqn.prototype={
$2(d,e){var w=this.a
w.r.push(B.cC(B.dw(0,0,0,d,0,0),new C.eqo(w,this.b,e)))},
$S:1963}
C.eqo.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eqq.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gY6().an_(0,u[1],u[2],u[3])
u[4].bQ(0,new C.eql(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dI(700+w.e*120,"",80,0,0.25,"square")
v.l(new C.eqm(w.a,v,w.f,w.r))},
$S:0}
C.eql.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:198}
C.eqm.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.n.D(A.h.bb(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eqr.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gY6().anO(t,u[1],s,u[3])
G.dI(1500,"",45,0,0.25,"tri")
v=w.b
v.l(new C.eqk(w.a,v,w.e,w.f))},
$S:0}
C.eqk.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.n.D(A.h.bb(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eqs.prototype={
$0(){G.dI(300,"",360,-1.2,0.3,"square")
var w=this.a
w.l(new C.eqj(w,this.b))},
$S:0}
C.eqj.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eqx.prototype={
$0(){var w=this.a
return w.l(new C.eqw(w))},
$S:0}
C.eqw.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eqy.prototype={
$0(){var w=this.a
return w.l(new C.eqv(w))},
$S:0}
C.eqv.prototype={
$0(){return this.a.at=!1},
$S:0}
C.eqz.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.QP()},
$S:0}
C.eqA.prototype={
$0(){return this.a.a_c(this.b)},
$S:0}
C.eqB.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.QP():w.b_H()},
$S:2}
C.eqC.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.QP():w.b_H()},
$S:0}
C.eFO.prototype={
$2(d,e){return d+e},
$S:1964}
C.eG7.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.eG6(w,d))},
$S:576}
C.eG6.prototype={
$0(){var w=B.aK(J.t(this.b,"unlocked"))
w=w==null?null:A.h.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eG8.prototype={
$0(){},
$S:0}
C.eG9.prototype={
$0(){},
$S:0}
C.eFQ.prototype={
$0(){return this.a.l(new C.eFP(this.b,this.c))},
$S:0}
C.eFP.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eFF.prototype={
$1(d){return this.a.cx===d},
$S:26}
C.eFG.prototype={
$1(d){return this.a.cx=d},
$S:32}
C.eFH.prototype={
$1(d){return this.a.cy===d},
$S:26}
C.eFI.prototype={
$1(d){return this.a.cy=d},
$S:32}
C.eFJ.prototype={
$1(d){return this.a.db===d},
$S:26}
C.eFK.prototype={
$1(d){return this.a.db=d},
$S:32}
C.eFL.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:26}
C.eFM.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.X(0,d):w.K(0,d)},
$S:32}
C.eFN.prototype={
$0(){var w=this.a
return w.l(w.gaAi())},
$S:0}
C.eFD.prototype={
$1(d){return this.a.$1(!0)},
$S:68}
C.eFE.prototype={
$1(d){return this.a.$1(!1)},
$S:119}
C.eFC.prototype={
$1(d){return this.a.$1(!1)},
$S:149}
C.eG0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.blU(o,p),n)
w=this.b
v=C.bFb("WORLD",w.a,w.c)
u=C.bFb("GRAVITY",B.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.h.S(t*100)
t=t<0.25?A.c1:A.bf
t=C.bFb("FUEL",""+s+"%",t)
s=o.r.b
r=A.h.S(s*100)
s=s>D.Et[o.db].d?A.c1:A.c
q=x.p
s=B.a([v,u,t,C.bFb("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bFb("HEIGHT",""+A.h.S(A.h.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.iB,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bKY(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.u5[w].a+".":"You landed on every world!"
v=B.a([new E.fL(A.of,"Again",new C.eFW(o),A.c,p),new E.fL(A.p1,"Rebuild",new C.eFX(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fL(A.jH,"Next world",new C.eFY(o),A.bf,p))
n.push(C.hNm("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(C.hNm("Crash!",o.at,A.c1,B.a([new E.fL(A.of,"Try again",new C.eFZ(o),A.bf,p),new E.fL(A.p1,"Rebuild",new C.eG_(o),A.aQ,p)],q)))
return new B.am(A.a0,p,A.b5,A.t,n,p)},
$S:65}
C.eFW.prototype={
$0(){var w=this.a
return w.l(w.gaAi())},
$S:0}
C.eFX.prototype={
$0(){var w=this.a
return w.l(new C.eFT(w))},
$S:0}
C.eFT.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eFY.prototype={
$0(){var w=this.a
return w.l(new C.eFS(w))},
$S:0}
C.eFS.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eFZ.prototype={
$0(){var w=this.a
return w.l(w.gaAi())},
$S:0}
C.eG_.prototype={
$0(){var w=this.a
return w.l(new C.eFR(w))},
$S:0}
C.eFR.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eG1.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.l(new C.eFV(v,w))},
$S:0}
C.eFV.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eG2.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eG3.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eG4.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eG5.prototype={
$0(){var w=this.a
return w.l(new C.eFU(w))},
$S:0}
C.eFU.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dUX.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hc(B.a([C.hI5(),C.hI6()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kZ(0,B.cV(J.t(r,1)))
q.l(new C.dUW(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:40}
C.dUW.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dUx.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dUy.prototype={
$0(){return this.a.c23(B.aV(J.t(this.b,"group")))},
$S:0}
C.dUz.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dUA.prototype={
$1(d){return A.a.aY(A.n.fs(A.n.D(A.h.S(d*255),0,255),16),2,"0")},
$S:288}
C.dUY.prototype={
$0(){return E.Yr("kick",0,0.25)},
$S:0}
C.dUB.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dUC.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dUD.prototype={
$0(){return E.Yr("kick",0,0.5)},
$S:0}
C.dUE.prototype={
$0(){return G.dI(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dUG.prototype={
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
u=w}if(u.cy!=null&&!A.d.aR(u.d.e,new C.dUF(u)))u.cy=null
u.id=0},
$S:0}
C.dUF.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aCj(d)},
$S:z+10}
C.dUu.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dUv.prototype={
$0(){var w=this.a
return w.l(w.gcd1())},
$S:0}
C.dUw.prototype={
$0(){return this.a.agn(null)},
$S:0}
C.dUN.prototype={
$0(){var w=this.a.as
return w==null?null:w.fe(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dUO.prototype={
$0(){return this.a.cKN(this.b.a)},
$S:0}
C.dUP.prototype={
$0(){return this.a.agn(this.b)},
$S:0}
C.dUQ.prototype={
$1(d){var w=this.a
return w.l(new C.dUM(w,d))},
$S:6}
C.dUM.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dUR.prototype={
$0(){var w=this.a
return w.l(new C.dUL(w,this.b))},
$S:0}
C.dUL.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dUS.prototype={
$0(){var w=this.a
return w.l(new C.dUK(w))},
$S:0}
C.dUK.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dUT.prototype={
$0(){var w=this.a
return w.l(new C.dUJ(w))},
$S:0}
C.dUJ.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fe(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.N_},
$S:0}
C.dUU.prototype={
$0(){var w=this.a
return w.l(new C.dUI(w))},
$S:0}
C.dUI.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b2x()
else w.p3=null},
$S:0}
C.dUV.prototype={
$0(){var w=this.a
return w.l(new C.dUH(w))},
$S:0}
C.dUH.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c9R.prototype={
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
$S:326}
C.c9S.prototype={
$1(d){var w=new B.qN([],[]).og(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:656}
C.fCN.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)&&w.h(d,1)},
$S:232}
C.fCO.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)||w.h(d,1)},
$S:232}
C.fCP.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)!==w.h(d,1)},
$S:232}
C.fCW.prototype={
$1(d){return!J.t(d,0)},
$S:232}
C.fCX.prototype={
$1(d){var w=J.a1(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:232}
C.fCY.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:232}
C.dWD.prototype={
$1(d){return this.a.awV(0)},
$S:7}
C.dWh.prototype={
$0(){var w=this.b
return this.a.cx=new B.O(w,B.ix3(),B.T(w).k("O<1,F>")).fG(0)},
$S:0}
C.dWk.prototype={
$1(d){return""+d},
$S:81}
C.dWE.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dWf.prototype={
$1(d){return this.a.awV(this.b)},
$S:7}
C.dWg.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aAO(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.n3(0,d,a1.mx(0.15,0.3))
u=a1.n3(0,d,a1.mx(0.15,0.62))
t=a1.n3(0,"and",a1.mx(0.48,0.46))
s=a1.n3(0,a0,a1.mx(0.82,0.46))
a1=t.a
w.push(new C.o6(v.a,a1,0))
w.push(new C.o6(u.a,a1,1))
w.push(new C.o6(a1,s.a,0))
break
case 1:v=a1.n3(0,d,a1.mx(0.12,0.25))
u=a1.n3(0,d,a1.mx(0.12,0.65))
r=a1.n3(0,"xor",a1.mx(0.46,0.25))
q=a1.n3(0,"and",a1.mx(0.46,0.65))
p=a1.aAN(0,a0,a1.mx(0.82,0.25),0)
o=a1.aAN(0,a0,a1.mx(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.o6(a1,n,0))
m=u.a
w.push(new C.o6(m,n,1))
l=q.a
w.push(new C.o6(a1,l,0))
w.push(new C.o6(m,l,1))
w.push(new C.o6(n,p.a,0))
w.push(new C.o6(l,o.a,0))
break
case 2:k=a1.n3(0,"clock",a1.mx(0.15,0.4))
j=a1.n3(0,"not",a1.mx(0.45,0.65))
s=a1.n3(0,a0,a1.mx(0.82,0.3))
i=a1.n3(0,"buzzer",a1.mx(0.82,0.65))
a1=k.a
w.push(new C.o6(a1,s.a,0))
n=j.a
w.push(new C.o6(a1,n,0))
w.push(new C.o6(n,i.a,0))
break
default:h=a1.n3(0,d,a1.mx(0.12,0.25))
g=a1.n3(0,d,a1.mx(0.12,0.7))
f=a1.n3(0,"nor",a1.mx(0.5,0.25))
e=a1.n3(0,"nor",a1.mx(0.5,0.7))
s=a1.n3(0,a0,a1.mx(0.86,0.25))
a1=f.a
w.push(new C.o6(g.a,a1,0))
n=e.a
w.push(new C.o6(n,a1,1))
w.push(new C.o6(h.a,n,0))
w.push(new C.o6(a1,n,1))
w.push(new C.o6(a1,s.a,0))}},
$S:0}
C.dWl.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aAO(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Dr(p,"switch",new B.m(0.14*q.a,r*q.b),0))}o.n3(0,w.e,o.mx(0.86,0.5))},
$S:0}
C.dWa.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dWb.prototype={
$2(d,e){return A.h.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dWc.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dWd.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dWe.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.afE(this.c)
if(v.ax)C.Kc("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dI(140,"",250,0,0.3,"square")}},
$S:0}
C.dWm.prototype={
$0(){},
$S:0}
C.dWn.prototype={
$0(){return A.d.cP(this.a.e,this.b)},
$S:0}
C.dWo.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dWj.prototype={
$0(){var w=this.a,v=this.b
w.d.X(0,v)
A.d.br(w.e,new C.dWi(v))
w.cy=null},
$S:0}
C.dWi.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dW9.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.n3(0,this.b,new B.m(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dWx.prototype={
$0(){var w=this.a
return w.l(new C.dWw(w))},
$S:0}
C.dWw.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dWy.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c_,B.ju(B.b4(w,w,w,new C.bfQ(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dWr(v),w,w,w,new C.dWs(v),new C.dWt(v),new C.dWu(v),w,w,w,w,w,w,w,w,w,w,new C.dWv(v),w,w,w,!1,A.a4)},
$S:36}
C.dWv.prototype={
$1(d){return this.a.ceR(d.b)},
$S:56}
C.dWt.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cot(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aBP(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aI(0,u)}},
$S:50}
C.dWu.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.m(A.h.D(w.a+u.Q.a,46,u.x.a-46),A.h.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dWs.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c5z(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new C.dWp(w))
u=t.as
u.toString
v.push(new C.o6(u,w.a,w.b))
B.kc()}}t.z=t.as=null},
$S:38}
C.dWp.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dWr.prototype={
$1(d){return this.a.azB(d.b)},
$S:291}
C.dWz.prototype={
$0(){return this.a.bGH(this.b.a)},
$S:0}
C.dWA.prototype={
$0(){return this.a.awV(this.b.a)},
$S:0}
C.dWB.prototype={
$0(){var w=this.a
return w.l(new C.dWq(w))},
$S:0}
C.dWq.prototype={
$0(){var w=this.a
w.aAO(0)
w.ay=null},
$S:0}
C.dWC.prototype={
$0(){return this.a.cGj(this.b)},
$S:0}
C.d_e.prototype={
$0(){var w=this,v=null,u=B.h0(v,A.cJ,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.ca,v,A.e4,A.cb)
u.eJ()
return u},
$S:276}
C.e1N.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1M.prototype={
$0(){return this.a.d=null},
$S:0}
C.e1P.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c7x()},
$S:137}
C.e1O.prototype={
$0(){return B.a7(this.a,!1).i1()},
$S:0}
C.fDd.prototype={
$0(){return I.aOd},
$S:z+40}
C.fDe.prototype={
$0(){return D.e4G},
$S:z+43}
C.fDf.prototype={
$0(){return D.dZf},
$S:z+13}
C.fDg.prototype={
$0(){return D.ewq},
$S:z+14}
C.fDh.prototype={
$0(){return D.eej},
$S:z+15}
C.fDi.prototype={
$0(){return I.aO4},
$S:z+16}
C.fDj.prototype={
$0(){return D.euc},
$S:z+17}
C.fDk.prototype={
$0(){return I.aOc},
$S:z+12}
C.fDl.prototype={
$0(){return D.e0w},
$S:z+19}
C.fiq.prototype={
$2(d,e){return new C.ahq(e,$.bJW()[e],new C.fip(e,this.a),null)},
$S:z+20}
C.fip.prototype={
$0(){var w=this.a,v=L.aLI.h(0,$.bJW()[w].a)
$.av9=v==null?"music":v
B.a7(this.b,!1).ca(B.e4(new C.fin(w),!1,null,x.H))},
$S:0}
C.fin.prototype={
$1(d){return $.bJW()[this.a].e.$0()},
$S:42}
C.fir.prototype={
$2(d,e){return new C.age(e,D.aE4[e],new C.fio(this.a,e),null)},
$S:z+21}
C.fio.prototype={
$0(){return this.a.d.$1(D.aE4[this.b])},
$S:0}
C.fi6.prototype={
$0(){return this.a.as=!0},
$S:0}
C.fi5.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fhW.prototype={
$0(){var w=this.a
w.ch=0
w.as=!1},
$S:0}
C.fhX.prototype={
$1(d){return this.br8(d)},
br8(d){var w=0,v=B.j(x.I),u,t=this,s,r,q
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
r.gre().sp(0,d/t.b)
r.gKh().sp(0,0.5)
w=3
return B.b($.aS.glQ(),$async$$1)
case 3:r=$.aS.bl$.x.h(0,r.f)
s=r==null?null:r.gbf()
if(!(s instanceof B.oD))throw B.Y(B.be("closed"))
q=C
w=4
return B.b(s.lC(t.c),$async$$1)
case 4:u=q.h1i(f,t.d,t.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:758}
C.fhY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.fhV(w,d))},
$S:6}
C.fhV.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fhZ.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.fi4.prototype={
$1(d){var w=this
return new B.eb(new C.fi3(w.a,w.b,w.c,w.d),null)},
$S:20}
C.fi3.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.h4g,A.at,D.hb8,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.c("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fU9,a0,a0,a0)
m=new B.aQ(12,12)
l=new B.aQ(12,12)
l=B.a([new B.bu(1,A.b8,B.aN(a0,A.M,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.ef(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,A.FP,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bd(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0),A.aa,new B.bu(2,A.b8,B.aN(a0,A.M,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.ef(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,A.FP,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bd(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dK1[k]
i=new B.aQ(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.by
e=new B.ax(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.q(a0,B.V(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.p(g,a0,new B.bE(e,e,e,e),new B.bd(i,i,i,i),a0,a0,A.m),a0,a0,a0,A.f6,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fi1(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.aj,new B.c1(A.aK,A.e,A.i,A.l,a0,A.p,a0,0,l,a0),A.N,new B.a5(a0,44,B.co(m,a0,a0,a0,a0,a0,A.aK,!1),a0),A.aB],w))}v.push(B.bH(A.BK,a0,new C.fi2(t,r,q,u,a3),a0))
return new B.C(new B.R(0,0,0,a2.f.d),B.bn(!0,new B.cQ(new B.aY(0,1/0,0,a1.a.b*0.86),B.co(v,a0,a0,A.xg,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:105}
C.fi1.prototype={
$0(){var w=this
return w.a.$1(new C.fi0(w.b,w.c,w.d))},
$S:0}
C.fi0.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.fi2.prototype={
$0(){var w=this,v=w.a
v.l(new C.fi_(v,w.b,w.c,w.d))
B.a7(w.e,!1).N(null)},
$S:0}
C.fi_.prototype={
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
C.fie.prototype={
$0(){var w=this.a
return w.l(new C.fid(w))},
$S:0}
C.fid.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.fif.prototype={
$0(){return E.uY(this.b,this.a.f,"scene")},
$S:0}
C.fig.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.gKh().x
w===$&&B.d()
return new B.bP(new B.p(v,v,v,v,v,new B.bU(D.b6a,0.9,A.w,v,0,B.a([u.j(0.06+0.03*w),A.c7],x.O),v,v),A.m),A.bm,v,v)},
$S:345}
C.fih.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(new B.d7(A.dn,A.z,A.f,B.ca(new B.hB(B.a([u.gre(),u.gKh()],x.dS)),new C.fic(u,this.b,v),w),w),w,w,w)},
$S:210}
C.fic.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gre().x
r===$&&B.d()
w=r<0.9?1:1-C.bwo(r,0.9,0.98)
v=s.gKh().x
v===$&&B.d()
u=A.dS.aA(0,v)
switch(s.gaAP().a){case 0:s=s.bFR(t.b,r,u,t.c)
break
case 1:s=s.bX5(t.b,r,u,t.c)
break
case 2:s=s.cLg(t.b,r,u,t.c)
break
case 3:s=s.bIR(t.b,r,u,t.c)
break
case 4:s=s.bMf(t.b,r,u,t.c)
break
case 5:s=s.ceS(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:160}
C.fii.prototype={
$2(d,e){var w=B.act(this.b),v=this.c.d,u=B.ap(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cUk(u,A.by,v,3.5)
u=this.a
w=u.gre().x
w===$&&B.d()
return B.ZR(B.li(null,null,null,1,0,new C.fib(u),A.h.D(w,0,1)),v)},
$S:1968}
C.fib.prototype={
$1(d){var w=this.a
w.gre().sp(0,d)
if(w.as)w.l(new C.fi7(w))},
$S:6}
C.fi7.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fij.prototype={
$0(){var w=this.a
w.gre().sp(0,0)
w.a0I()},
$S:0}
C.fik.prototype={
$1(d){var w=this.a
w.l(new C.fia(w,d))
if(w.as)w.a0I()},
$S:6}
C.fia.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fil.prototype={
$0(){var w=this.a
w.l(new C.fi9(w,this.b))
w.gre().sp(0,0)
if(w.as)w.a0I()},
$S:0}
C.fi9.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.fim.prototype={
$0(){var w=this.a
return w.l(new C.fi8(w,this.b))},
$S:0}
C.fi8.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.fhT.prototype={
$2(d,e){return A.h.aQ(d.a,e.a)},
$S:1969}
C.fhU.prototype={
$1(d){return d.b},
$S:1970}
C.dw5.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dw6.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dw2.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dw3.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dw4.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dw7.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dw8.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dw9.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dwa.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dwb.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dwc.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dwd.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dwe.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dwf.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eF8.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eEY.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eF_.prototype={
$2(d,e){return d+e.d*7+A.n.F(A.a.ga_(e.b),97)},
$S:z+31}
C.eF0.prototype={
$2(d,e){return d+A.n.F(A.a.ga_(e.a),31)+A.n.F(A.a.ga_(e.b),17)},
$S:z+32}
C.eF3.prototype={
$1(d){var w=D.nt.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.n.F(d.d,u)]+")":t},
$S:z+33}
C.eF4.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.B(new B.ee(new B.cR(new B.X(q,new C.eF5(d),p.k("X<1>")),new C.eF6(r),p.k("cR<1,rz?>")),o),o.k("L.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aK(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eF5.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eF6.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eF1.prototype={
$1(d){return D.nt.h(0,d.b).c===D.yD},
$S:z+55}
C.eF2.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eFy.prototype={
$1(d){var w=this.a,v=d.a,u=A.h.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.w6(0,u)
w.a8Y(A.n.ao(v,1000))},
$S:7}
C.eF7.prototype={
$0(){},
$S:0}
C.eEU.prototype={
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
C.eFa.prototype={
$1(d){var w=null,v=this.a.b
return B.bn(!0,B.w(B.a([A.N,B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.V(D.nt.h(0,v).b,D.nt.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.hmY,w,B.c(D.nt.h(0,v).a,w,w,w,w,w,w,A.h5,w,w,w),w,w,w),B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,A1.auG,w,w,w,w,new C.eF9(d),!1,w,w,w,w,w,w,w,D.he0,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:28}
C.eF9.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eFc.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.w).w,r=B.a([D.eIC],x.p)
for(w=0;w<6;++w){v=D.aEr[w]
u=B.c(v.a,t,t,t,t,t,t,A.h5,t,t,t)
r.push(B.dP(!1,t,t,t,!0,t,t,t,!0,t,t,D.c8h,t,t,t,t,new C.eFb(d,v),!1,t,t,t,t,t,B.c(v.b,t,t,t,t,t,t,A.mg,t,t,t),t,u,t,t,t))}return B.bn(!0,new B.cQ(new B.aY(0,1/0,0,s.a.b*0.7),B.co(r,t,t,D.bMh,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:28}
C.eFb.prototype={
$0(){B.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.eEX.prototype={
$1(d){var w=null
return B.ek(B.a([B.bJ(!1,A.dy,w,w,!0,w,w,w,new C.eEV(d),w,w),B.bJ(!1,A.FV,w,w,!0,w,w,w,new C.eEW(d),w,w)],x.p),w,w,L.mt,D.hbl,w,w,w,w,D.hel,w)},
$S:17}
C.eEV.prototype={
$0(){B.a7(this.a,!1).N(!1)
return null},
$S:0}
C.eEW.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eFw.prototype={
$0(){var w=this.a
return w.l(new C.eFv(w))},
$S:0}
C.eFv.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eFx.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nJ(new C.eFm(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bh6:t
v=B.a([B.b4(u,t,t,new C.blS(w,v,new C.eFn(r),new C.eFo(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dn(!0,B.ca(w,new C.eFp(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bNZ())
return B.aA(A.c_,B.ju(new B.am(A.a0,t,A.b5,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eFq(r),t,r.gcpP(),t,new C.eFr(r),new C.eFs(r),new C.eFt(r),t,t,t,t,t,t,t,t,t,t,new C.eFu(r),t,t,t,!1,A.a4)},
$S:36}
C.eFm.prototype={
$0(){return this.a.aeF(this.b)},
$S:0}
C.eFu.prototype={
$1(d){return this.a.cIS(d.b)},
$S:56}
C.eFs.prototype={
$1(d){return this.a.cpQ(d.b)},
$S:50}
C.eFt.prototype={
$1(d){return this.a.cpR(d.b)},
$S:19}
C.eFr.prototype={
$1(d){return this.a.b6i()},
$S:38}
C.eFq.prototype={
$1(d){return this.a.afo(d.b)},
$S:291}
C.eFn.prototype={
$0(){return this.a.z},
$S:674}
C.eFo.prototype={
$0(){return this.a.Q},
$S:459}
C.eFp.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bSm()
if(p.length===0)return A.bK
w=A.v.j(0.55)
v=B.n(14)
u=B.K(A.by,A.r,1)
t=B.a([D.h8J,A.cR],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.c(p[r],q,2,A.a2,q,q,q,A.aZi,q,q,q))
return B.q(q,B.w(t,A.B,q,A.e,A.P,0,A.p),A.f,q,q,new B.p(w,q,u,v,q,q,A.m),q,q,q,q,A.he,q,q,q)},
$S:69}
C.eEZ.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.C(A.dW,B.A(B.a([B.q(w,B.V(d,e,w,w,w,21),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,38,w,w,w,w,w,38),A.bc,B.E(B.w(B.a([B.c(f,w,w,w,w,w,w,Ak.Xc,w,w,w),A.bs,B.c(g,w,w,w,w,w,w,F.adn,w,w,w)],s),A.B,w,A.e,A.i,0,A.p),1)],s),A.B,w,A.e,A.i,0,w,w),w)},
$S:1971}
C.eFi.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).i1()},
$S:0}
C.eFj.prototype={
$0(){var w=this.a
return w.l(new C.eFh(w))},
$S:0}
C.eFh.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eFk.prototype={
$0(){var w=this.a
return w.l(new C.eFg(w))},
$S:0}
C.eFg.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eFl.prototype={
$0(){var w=this.a
return w.l(new C.eFf(w))},
$S:0}
C.eFf.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eFe.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.nt.gdW(D.nt),w=w.gae(w);w.B();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.c(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cDx(p[r]))
return new B.C(A.a1V,B.w(B.a([new B.C(A.apy,w,q),B.A(u,A.l,q,A.e,A.i,0,q,q)],v),A.B,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.eFd.prototype={
$0(){return this.a.ceZ(this.b)},
$S:0}
C.dw1.prototype={
$0(){var w=this,v=null,u=B.h0(v,A.cJ,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.ca,v,A.e4,A.cb)
u.eJ()
return u},
$S:276}
C.bT4.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bTf.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bTa.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bTg.prototype={
$1(d){return this.a.Nf(d)&&!d.x},
$S:z+0}
C.bTh.prototype={
$2(d,e){return Math.max(d,this.a.aEJ(e))},
$S:z+6}
C.bTj.prototype={
$2(d,e){var w=this.a
return w.c0(0,d.a+"."+e,new C.bTk(w))},
$S:z+5}
C.bTk.prototype={
$0(){return this.a.a},
$S:93}
C.bTi.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bTl.prototype={
$2(d,e){var w=this.a
return w.c0(0,this.b.$1(this.c.$2(d,e)),new C.bTm(w))},
$S:z+5}
C.bTm.prototype={
$0(){return this.a.a},
$S:93}
C.bT6.prototype={
$2(d,e){var w=this.a
return w.c0(0,d.a+"."+e,new C.bT7(w))},
$S:z+5}
C.bT7.prototype={
$0(){return this.a.a},
$S:93}
C.bT5.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bT8.prototype={
$2(d,e){var w=this.a
return w.c0(0,this.b.$1(this.c.$2(d,e)),new C.bT9(w))},
$S:z+5}
C.bT9.prototype={
$0(){return this.a.a},
$S:93}
C.bT3.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bTn.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bTb.prototype={
$1(d){return d!==this.b&&this.a.aL5(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bTe.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bTd.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bTc.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bNp.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bNq.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.bNo.prototype={
$2(d,e){return new B.a6(A.aU,A.b2,A.w,e,D.dji,null).az(0,d)},
$S:1972}
C.cxt.prototype={
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
$S:198}
C.h7Y.prototype={
$1(d){var w
$.U()
w=B.M()
w.r=d.gp(0)
return w},
$S:1973}
C.h8_.prototype={
$2(d,e){var w
$.U()
w=B.M()
w.b=A.ad
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:1974}
C.h80.prototype={
$5(d,e,f,g,h){return B.bx(new B.a4(d,e,d+f,e+g),new B.aQ(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1975}
C.h7Z.prototype={
$3(d,e,f){var w
$.U()
w=B.M()
w.san(new B.a6(A.aU,A.b2,A.w,B.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1976}
C.bN1.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bN2.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bN0(w))},
$S:0}
C.bN0.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bN3.prototype={
$0(){return B.a([],x.F)},
$S:1977}
C.bN4.prototype={
$1(d){return this.a.bx(d).a>15e5},
$S:362}
C.bN5.prototype={
$0(){var w,v,u
J.bK5(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rM(v))if(C.hsP(v.b))w.b5M(v)
else w.a1W(v)
else{u=w.a.c.biP(v)
w.agZ(u==null?"The "+$.qZ().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bN_.prototype={
$1(d){return new B.eb(new C.bMX(this.a,this.b),null)},
$S:20}
C.bMX.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bMY(this.a,o,a3),m=$.qZ(),l=o.b,k=m.h(0,l).d,j=A.h.S(o.ch/1.04),i=new C.bMZ(o,n,k),h=B.n(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ab(0,A.H,k.j(0.25),A.J,26)],f),d=B.q(p,p,A.f,p,p,new B.p(A.aT,p,p,B.n(3),p,p,A.m),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.q(p,B.at(B.c(m.h(0,l).c,p,p,p,p,p,p,A.qz,p,p,p),p,p,p),A.f,p,p,new B.p(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.w(B.a([B.c(m.h(0,l).b,p,1,A.a2,p,p,p,A.jr,p,p,p),D.h8x],a0),A.B,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.n(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bc,w,B.q(p,B.c(""+A.h.S(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(v,p,t,u,p,p,A.m),p,p,p,p,A.lE,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
t=A.v.j(0.35)
v=B.n(18)
w=B.K(A.dA,A.r,1)
a1=30+28*o.ch
s=B.n(8)
r=B.a([k.j(0.85),A.ax],x.O)
q=B.K(A.aF,A.r,2)
f=B.a([new B.ab(0,A.H,k.j(0.5),A.J,14)],f)
v=B.q(p,B.at(B.cZ(p,B.at(new B.d7(A.dE,A.z,A.f,new B.C(A.hO,B.c(m.h(0,l).c,p,p,p,p,p,p,A.mV,p,p,p),p),p),p,p,p),p,p,A.b0,new B.p(p,p,q,s,f,new B.a6(A.aw,A.aD,A.w,r,p,p),A.m),A.eK,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.p(t,p,w,v,p,p,A.m),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.i,0,p,p)
w=B.aJ(p,p,p,p,B.V(A.asT,k,p,p,p,30),p,p,p,new C.bMT(n,o),p,p,p,p,p,p)
t=B.act(a2).bii(k,A.by,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.ZR(B.li(p,p,p,5.2,1,n,A.h.D(o.ch,1,5.2)),t),1),B.aJ(p,p,p,p,B.V(A.a4m,k,p,p,p,30),p,p,p,new C.bMU(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
return B.bn(!0,B.q(p,B.w(B.a([d,A.af,u,A.aB,v,A.af,i,A.at,o,B.A(B.a([B.E(B.c(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,N.hI,p,p,p),1),B.bJ(!1,A6.b_m,p,p,!0,p,p,p,new C.bMV(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tK,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.i,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.p(p,p,g,h,e,D.cfM,A.m),p,p,p,A.zt,D.bIR,p,p,p),!0,!1,A.ag,!0,!0)},
$S:90}
C.bMY.prototype={
$1(d){var w=this.a
w.l(new C.bMR(this.b,d))
this.c.$1(new C.bMS())
w.a.toString},
$S:6}
C.bMR.prototype={
$0(){return this.a.ch=A.h.D(this.b,1,5.2)},
$S:0}
C.bMS.prototype={
$0(){},
$S:0}
C.bMZ.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.n(14),r=u?w.c:A.by
r=B.K(r,A.r,u?2:1)
return B.E(B.aA(v,B.cZ(v,B.at(new B.d7(A.dn,A.z,A.f,B.c(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ac,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b0,new B.p(t,v,r,s,v,v,A.m),A.hn,v,v,v,A.jk,A.rf,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bMW(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:697}
C.bMW.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bMT.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bMU.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bMV.prototype={
$0(){B.a7(this.a,!1).N(null)
return null},
$S:0}
C.bNl.prototype={
$2(d,e){var w
if(d==="short"){G.dI(1800,"",120,0,0.55,"noise")
G.dI(200,"",160,2.2,0.4,"saw")
B.fX()
w=this.a
if(w.c!=null)w.agZ("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dI(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.agZ("\u26a0 Overloaded! The "+$.qZ().h(0,e.b).b+" can only give about "+A.h.a1(w.a.c.AP(e),2)+" amps but your gadgets are asking for "+A.h.a1(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.agZ("Burnt out! "+e.ay)
G.dI(140,"",320,0,0.6,"noise")
G.dI(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bNm.prototype={
$0(){},
$S:0}
C.bMr.prototype={
$0(){},
$S:0}
C.bNn.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bNk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.aA(A.c_,new B.e9(B.b4(p,p,p,new C.alq(w,v,u,t,s,r==null?A.jK:r,p),n),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bNe(o),new C.bNf(o),new C.bNg(o),p,p,p,p,p,p,p,p,p,p,new C.bNh(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bgo)
w=o.ay
if(w!=null){v=B.n(14)
u=B.K(A.cX,A.r,1)
n.push(B.ao(p,B.aA(p,B.q(p,B.A(B.a([D.fZr,B.E(B.c(w,p,p,p,p,p,p,D.fQV,p,p,p),1)],q),A.B,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(D.bmu,p,u,v,p,p,A.m),p,p,p,p,A.o6,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bNi(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bOv,new E.fL(A.A4,"Cut wire",new C.bNj(o),A.c1,p)],q),A.l,p,A.e,A.i,0,p,p)
w=B.n(18)
n.push(B.ao(8,B.q(p,o,A.f,p,p,new B.p(F.ZV,p,B.K(A.by,A.r,1),w,p,p,A.m),p,p,p,p,F.aob,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cqo(w),p,p,10,10,p,p))}}return B.ju(new B.am(A.a0,p,A.b5,A.t,n,p),A.t,p)},
$S:312}
C.bNf.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bcZ(s)
if(r!=null){t.l(new C.bNc(t,r,d))
return}w=t.b6s(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.m(v*u.a,w.d*u.b).aI(0,s)
t.l(new C.bNd(t,w))}},
$S:50}
C.bNc.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bNd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bNg.prototype={
$1(d){var w=this.a
if(w.y!=null)w.l(new C.bNa(w,d))
else if(w.Q!=null)w.l(new C.bNb(w,d.b.a6(0,w.as)))},
$S:19}
C.bNa.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bNb.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.h.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.h.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bNe.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bcZ(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.anO(u.a,u.b,v.a,v.b)!=null)G.dI(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.agX()},
$S:38}
C.bNh.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b6s(u)
if(t!=null){v.l(new C.bN7(v,t))
if(D.mN.am(0,t.b))v.cBk(t)
w=new B.W(Date.now(),0,!1)
if(v.r===t&&w.bx(v.w).a<38e4){v.l(new C.bN8(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.l(new C.bN9(v,v.cOy(u)))},
$S:56}
C.bN7.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dI(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dI(200,"",70,0,0.2,"saw")}},
$S:0}
C.bN8.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bN9.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bNi.prototype={
$0(){var w=this.a
return w.l(new C.bN6(w))},
$S:0}
C.bN6.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bNj.prototype={
$0(){var w=this.a
A.d.X(w.a.c.b,w.x)
w.x=null
G.dI(300,"",50,0,0.35,"noise")
w.agX()},
$S:0}
C.bMs.prototype={
$0(){return this.a.bvr(this.b)},
$S:0}
C.bMO.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.c(d,w,w,w,w,w,w,D.fKP,w,w,w),B.E(B.li(this.b.d,w,w,g,h,new C.bMQ(this.a,f),A.h.D(e,h,g)),1)],x.p),A.l,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1978}
C.bMQ.prototype={
$1(d){var w=this.a
w.l(new C.bMP(this.b,d))
w.a.toString},
$S:6}
C.bMP.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bMN.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.n(10)
return B.E(B.q(w,B.w(B.a([B.c(d,w,w,w,w,w,w,A.adc,w,w,w),B.c(e,w,w,w,w,w,w,D.fNI,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.p(v,w,w,u,w,w,A.m),w,w,w,w,A.vl,w,w,w),1)},
$S:113}
C.bMz.prototype={
$0(){var w=this.a
return w.l(new C.bMy(w))},
$S:0}
C.bMy.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bMA.prototype={
$0(){var w=this.a
w.a.c.X(0,this.b)
w.e=w.d=null
G.dI(260,"",70,0,0.35,"noise")
w.agX()},
$S:0}
C.bMB.prototype={
$0(){var w=this.a
return w.l(new C.bMx(w))},
$S:0}
C.bMx.prototype={
$0(){return this.a.e=null},
$S:0}
C.bMF.prototype={
$0(){this.a.l(new C.bMw(this.b,this.c))
G.dI(900,"",40,0,0.3,"noise")},
$S:0}
C.bMw.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bMG.prototype={
$0(){return this.a.b5M(this.b)},
$S:0}
C.bMH.prototype={
$0(){return this.a.a1W(this.b)},
$S:0}
C.bMI.prototype={
$0(){return this.a.a3E(this.b)},
$S:0}
C.bMJ.prototype={
$0(){var w=this.a
w.l(new C.bMv(this.b,this.c))
w.a.toString},
$S:0}
C.bMv.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bMK.prototype={
$0(){var w=this.a
w.l(new C.bMu(this.b,this.c))
w.a.toString},
$S:0}
C.bMu.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bML.prototype={
$0(){var w=this.a
w.l(new C.bMt(this.b,this.c))
w.a.toString},
$S:0}
C.bMt.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bMM.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMC.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMD.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bME.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fCZ.prototype={
$1(d){return d.aKH("bulb")},
$S:z+2}
C.fD_.prototype={
$1(d){return d.qs(0,"switch")&&d.aKH("bulb")},
$S:z+2}
C.fD0.prototype={
$1(d){return A.d.aR(d.a,new C.fCM())},
$S:z+2}
C.fCM.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fD1.prototype={
$1(d){return d.qs(0,"resistor")&&A.d.aR(d.a,new C.fCL())},
$S:z+2}
C.fCL.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fD2.prototype={
$1(d){return!d.qs(0,"battery")&&d.aKH("bulb")},
$S:z+2}
C.fCQ.prototype={
$1(d){return A.d.aR(d.a,new C.fCK())},
$S:z+2}
C.fCK.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fCR.prototype={
$1(d){return A.d.aR(d.a,new C.fCJ())},
$S:z+2}
C.fCJ.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fCS.prototype={
$1(d){return A.d.aR(d.a,new C.fCI())},
$S:z+2}
C.fCI.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fCT.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fCG())&&A.d.aR(w,new C.fCH())&&d.qs(0,"buck")},
$S:z+2}
C.fCG.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fCH.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fCU.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fCE())&&A.d.aR(w,new C.fCF())},
$S:z+2}
C.fCE.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fCF.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fCV.prototype={
$1(d){return A.d.aR(d.a,new C.fCD())},
$S:z+2}
C.fCD.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e6V.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a7(0)
w.u(0,v.b)},
$S:0}
C.e73.prototype={
$1(d){var w=this.a.d
return w.aL5(d)&&w.rM(d)},
$S:z+0}
C.e74.prototype={
$1(d){return d.x},
$S:z+0}
C.e75.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e76.prototype={
$0(){},
$S:0}
C.e6U.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.hgp,A.at,D.h0j,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.TA[v]
t=A.c.j(0.06)
s=new B.aQ(14,14)
r=new B.ax(A.by,1,A.r,-1)
n.push(B.aA(q,B.q(q,B.w(B.a([B.c(u.a,q,q,q,q,q,q,A.iX,q,q,q),A.bs,B.c(u.b,q,3,A.a2,q,q,q,D.fRI,q,q,q)],o),A.B,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(t,q,new B.bE(r,r,r,r),new B.bd(s,s,s,s),q,q,A.m),q,q,q,A.cB,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e6T(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eC(q,F.ng,new B.C(A.bR,new B.a5(340,q,B.co(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.db,q,new B.ba(p,A.a1),q)},
$S:46}
C.e6T.prototype={
$0(){B.a7(this.b,!1).N(null)
var w=this.a
w.l(new C.e6S(w,this.c))
G.dI(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e6S.prototype={
$0(){var w=this.a.d
this.b.C(w)
w.bnZ()},
$S:0}
C.e6Q.prototype={
$1(d){return new C.XE(this.a.d,null)},
$S:z+44}
C.e6R.prototype={
$0(){},
$S:0}
C.e72.prototype={
$1(d){return new B.eb(new C.e71(this.a),null)},
$S:20}
C.e71.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.akt(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bf:A.aH
k=B.aF(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.hdu,A.aX,B.c(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.i,0,m,m),A.N,B.bv(B.n(4),B.jJ(A.by,m,m,5,m,w.a/11,new B.lc(f,x.c)),A.ap),A.af],v)
if(h)u.push(D.h3D)
else{h=f.j(0.1)
t=B.n(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.c(r+" Now: "+i.a,m,m,m,m,m,m,Am.LR,m,m,m)
q=B.c(g?"Well done! You did it.":i.b,m,m,m,m,m,m,A_.FQ,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.w(B.a([r,A.at,q,new B.bL(A.a9,m,m,B.bJ(!1,B.c(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e7_(l,e),m,m),m)],v),A.B,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(h,m,s,t,m,m,A.m),m,m,m,m,A.bg,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aQ(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.dA,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.c(s,m,m,m,m,m,m,A.adm,m,m,m)
r=j[o]
q=w.q(0,o)?A.aF:A.c
u.push(B.aA(m,B.q(m,new B.c1(A.aK,A.e,A.i,A.l,m,A.p,m,0,B.a([s,A.ar,new B.bu(1,A.b8,B.c(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.C,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.p(h,m,new B.bE(n,n,n,n),new B.bd(t,t,t,t),m,m,A.m),m,m,m,A.eD,A.o6,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e70(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bn(!0,new B.cQ(new B.aY(0,1/0,0,k.a.b*0.75),B.co(u,m,m,A.xg,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:90}
C.e7_.prototype={
$0(){var w=this.a
w.l(new C.e6Y(w))
this.b.$1(new C.e6Z())
w.Ge()},
$S:0}
C.e6Y.prototype={
$0(){var w=this.a
$.akt()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e6Z.prototype={
$0(){},
$S:0}
C.e70.prototype={
$0(){var w=this.a
w.l(new C.e6W(w,this.b))
this.c.$1(new C.e6X())
w.Ge()},
$S:0}
C.e6W.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e6X.prototype={
$0(){},
$S:0}
C.e78.prototype={
$0(){return B.a7(this.a,!1).i1()},
$S:0}
C.e79.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iL("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a7(t.b,!1).ca(B.e4(new C.e77(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e77.prototype={
$1(d){B.j8("construction")
return As.i8A()},
$S:z+45}
C.e7a.prototype={
$0(){return E.hUH(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e7b.prototype={
$0(){var w=this.a
return w.l(w.d.gd5z())},
$S:0}
C.e7c.prototype={
$0(){var w=this.a,v=w.d
w.l(v.gtG(v))
w.Ge()},
$S:0}
C.cPi.prototype={
$2(d,e){var w=null,v=this.a.gaAY().x
v===$&&B.d()
return B.b4(w,w,w,new C.bdC(v,w),A.aA)},
$S:52}
C.cPh.prototype={
$3(d,e,f){var w=new B.aI($.U().r,A.ak,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.cm(v,u,v+e,u))
w.E(new B.cm(v,u,v,u+e))
w.E(new B.cm(v,u,v-e,u))
w.E(new B.cm(v,u,v,t))
w.E(new B.bz())
t=B.M()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:453}
C.hd8.prototype={
$3(d,e,f){return new C.WT(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.hd9.prototype={
$4(d,e,f,g){var w=x.a
return new B.de(e,!1,B.iE(A.z,g,null,new B.bk(B.cN(A.cn,e,null),new B.bq(0.85,1,w),w.k("bk<bT.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.e2R.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gCd()},
$S:0}
C.e2S.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.n.F(A.n.F(this.b,w)+w,w)
v.z=v.gCd()},
$S:0}
C.e31.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.m(v.a/u.a,v.b/u.b)
w.w=w.gCd()},
$S:0}
C.e2Q.prototype={
$1(d){return new K.Jo(F.Tl[this.b],new C.e2P(this.a,d),null)},
$S:z+47}
C.e2P.prototype={
$0(){this.a.a=!0
B.a7(this.b,!1).e6()},
$S:0}
C.e32.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.e33.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e2J.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb3s():w
return B.aA(A.c_,B.b4(w,w,w,v.cpN(this.b),A.hh),A.y,!1,D.hML,u,w,w,w,new C.e2H(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e2I(v,e),w,w,w,!1,A.a4)},
$S:36}
C.e2I.prototype={
$1(d){var w=this.b
return this.a.cJ3(d.b,new B.av(B.aU(1/0,w.a,w.b),B.aU(1/0,w.c,w.d)))},
$S:56}
C.e2H.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.OQ()!=null){w=v<0?1:-1
this.a.aEZ(w)}},
$S:38}
C.e3_.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.n(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.q(w,B.w(B.a([B.V(d,g,w,w,w,20),A.rR,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,w,w,A.jk,A.jY,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:679}
C.e2W.prototype={
$0(){return this.a.aEZ(-1)},
$S:0}
C.e2X.prototype={
$0(){return this.a.aEZ(1)},
$S:0}
C.e2Y.prototype={
$0(){return this.a.KA(null)},
$S:0}
C.e2Z.prototype={
$0(){return this.a.KA(0)},
$S:0}
C.e34.prototype={
$0(){return B.a7(this.a,!1).i1()},
$S:0}
C.e2V.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c5_(o):q.bHS(o,p),m=x.p
p=B.a([B.p_(new B.ml(n,new B.bb(p,x.aC)),A.pV,B.qc(),A.b0,A.b0,new C.e2T())],m)
n=t.d
if(n){w=A.h.F(q.gCd(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.ar],m)
if(w)m.push(D.bOh)
else m.push(A.aX)
m.push(B.q(s,s,A.f,s,s,new B.p(w?A.bf:A.ax,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.ar)
p.push(B.ao(s,B.at(B.cZ(s,B.A(m,A.l,s,A.e,A.i,0,s,s),s,s,A.eh,new B.p(A.v,s,s,u,s,s,A.m),A.nj,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Bp)p.push(B.ao(s,B.at(B.q(s,s,A.f,s,s,A.N7,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Bq)p.push(B.ao(s,B.q(s,s,A.f,s,s,A.N7,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.q(s,s,A.f,s,s,new B.p(A.c.j(0.75),s,s,B.n(3),s,s,A.m),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e2U(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bv(r,new B.am(A.a0,s,A.b5,A.t,p,s),A.ap)},
$S:491}
C.e2T.prototype={
$2(d,e){var w=x.a
return new B.de(e,!1,B.iE(A.z,d,null,new B.bk(e,new B.bq(0.92,1,w),w.k("bk<bT.T>"))),null)},
$S:376}
C.e2U.prototype={
$0(){return this.a.KA(null)},
$S:0}
C.e30.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.c(A.a.aY(A.n.v(B.cY(q)),2,"0")+":"+A.a.aY(A.n.v(B.fx(q)),2,"0"),s,s,s,s,s,s,A.uF,s,s,s),A.aX],x.p)
for(w=0;w<4;++w){v=new B.aQ(1,1)
q.push(B.q(s,s,A.f,s,s,new B.p(A.c,s,s,new B.bd(v,v,v,v),s,s,A.m),s,4+w*2,s,D.bMO,s,s,s,3))}q.push(A.da)
q.push(D.h7v)
q.push(A.b6)
v=B.K(A.ac,A.r,1)
u=B.n(4)
t=this.b
q.push(B.q(s,new B.bL(A.a5,s,s,B.Cf(A.z,B.q(s,s,A.f,s,s,new B.p(A.bf,s,s,B.n(2),s,s,A.m),s,s,s,A7.I3,s,s,s,s),s,t/100),s),A.f,s,s,new B.p(s,s,v,u,s,s,A.m),s,12,s,s,s,s,s,26))
q.push(A.pr)
q.push(B.c(""+t+"%",s,s,s,s,s,s,D.fZ2,s,s,s))
return new B.d7(A.dn,A.a5,A.f,new B.a5(r,s,B.A(q,A.l,s,A.e,A.i,0,s,s),s),s)},
$S:248}
C.e2O.prototype={
$0(){return this.a.KA(A.d.c9(F.iz,this.b))},
$S:0}
C.e2M.prototype={
$0(){return this.a.KA(0)},
$S:0}
C.e2N.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cJ(F.iz,0,B.dx(4,"count",x.S),x.gD),v=w.$ti,w=new B.bQ(w,w.gI(0),v.k("bQ<aj.E>")),u=this.a,v=v.k("aj.E");w.B();){t=w.d
q.push(u.ayM(t==null?v.a(t):t,50,!1))}return new B.d7(A.dn,A.z,A.f,new B.a5(r,s,B.A(q,A.l,s,A.rF,A.i,0,s,s),s),s)},
$S:248}
C.e2G.prototype={
$0(){return this.a.KA(null)},
$S:0}
C.e2L.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.v.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aF(k,A.bZ,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.q(n,B.A(B.a([D.hmm,A.ar,B.E(B.c(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.f5,n,n,n,A.M1,n,n,n),1),B.c(A.a.aY(A.n.v(B.cY(new B.W(Date.now(),0,!1))),2,"0")+":"+A.a.aY(A.n.v(B.fx(new B.W(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.qA,n,n,n)],w),A.l,n,A.e,A.i,0,n,n),A.f,m,n,n,n,24,n,n,new B.R(j,0,k,0),n,n,n)
j=B.a([B.b4(n,n,n,new C.bAB(l.gCd(),this.c.d,n),A.aA)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aF(m,A.dL,x.w).w.r.b+52}else m=12
v=B.n(10)
u=B.K(A.aT,A.r,1)
t=B.n(10)
s=B.aA(n,B.q(n,n,A.f,n,n,A.agQ,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e2K(l),n,n,n,n,n,n,!1,A.a4)
r=B.q(n,n,A.f,n,n,A.Zm,n,12,n,n,n,n,n,12)
q=B.aA(n,B.q(n,n,A.f,n,n,D.bbt,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbds(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.dY,r,A.dY,q,A.ar,B.E(B.c(F.iz[p].a,n,1,A.a2,n,n,n,A.Xa,n,n,n),1)],w)
if(l.OQ()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.b0m(19))
s=B.q(n,B.A(p,A.l,n,A.e,A.i,0,n,n),A.f,A.cx,n,n,n,26,n,n,A.fD,n,n,n)
r=l.e
r.toString
j.push(B.bS(0,new B.C(new B.R(26,m,26,58),B.q(n,B.bv(t,B.w(B.a([s,B.E(l.aRH(r),1)],w),A.l,n,A.e,A.i,0,A.p),A.ap),A.f,n,n,new B.p(A.v,n,u,v,D.dFP,n,A.m),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.n(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.C(A.jk,l.ayM(F.iz[o],34,!1),n))
j.push(B.ao(8,B.at(B.q(n,B.A(t,A.l,n,A.e,A.P,0,n,n),A.f,n,n,new B.p(m,n,u,v,n,n,A.m),n,n,n,n,A.lF,n,n,n),n,n,n),n,n,0,0,n,n))
return B.q(n,B.w(B.a([k,B.E(new B.am(A.a0,n,A.b5,A.t,j,n),1)],w),A.l,n,A.e,A.i,0,A.p),A.f,A4.a0y,n,n,n,n,n,n,n,n,n,n)},
$S:85}
C.e2K.prototype={
$0(){return this.a.KA(null)},
$S:0}
C.fDt.prototype={
$0(){return D.eyt},
$S:z+48}
C.fDu.prototype={
$0(){return D.e5e},
$S:z+49}
C.fDv.prototype={
$0(){return D.dZs},
$S:z+50}
C.fDw.prototype={
$0(){return D.e4C},
$S:z+51}
C.fDx.prototype={
$0(){return D.ea6},
$S:z+52}
C.fDy.prototype={
$0(){return D.euf},
$S:z+53}
C.fDz.prototype={
$0(){return D.ewp},
$S:z+54}
C.fDA.prototype={
$0(){return D.e99},
$S:z+36}
C.cqm.prototype={
$0(){return B.a7(this.a,!1).i1()},
$S:0}
C.cqn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hYB(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aQ(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ab(0,A.H,p.j(0.4),A.dv,16)],t)
n=B.c(r.c,k,k,k,k,k,k,A.LP,k,k,k)
m=B.c(r.a,k,k,k,k,k,k,D.fWL,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.q(k,new B.am(A.a0,k,A.ab,A.t,B.a([new B.cS(k,-6,-6,k,k,k,n,k),new B.bL(A.ls,k,k,B.w(B.a([m,A.cR,B.c(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.B,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.p(k,k,k,new B.bd(q,q,q,q),p,new B.a6(A.aw,A.aD,A.w,o,k,k),A.m),k,v,k,k,A.bD,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cql(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bY(A.bI,h,A.br,k,14,14)},
$S:177}
C.cql.prototype={
$0(){return B.a7(this.a,!1).ca(B.e4(new C.cqk(this.b),!1,null,x.H))},
$S:0}
C.cqk.prototype={
$1(d){return this.a.f.$0()},
$S:42}
C.f3A.prototype={
$0(){var w=this.a
return w.w=w.d[w.b9V(w.f)]},
$S:0}
C.f3w.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cW.ai()*7},
$S:0}
C.f3v.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bN(0,A.ck)
w.w=""},
$S:0}
C.f3y.prototype={
$0(){var w=this.a
return w.l(new C.f3x(w,this.b))},
$S:0}
C.f3x.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cP(w,this.b)},
$S:0}
C.f3z.prototype={
$1(d){return this.a.b44(0)},
$S:2}
C.eaD.prototype={
$0(){return C.Kc("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.eaE.prototype={
$0(){},
$S:0}
C.eay.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.eaA.prototype={
$0(){return this.a.b46(this.b)},
$S:0}
C.eaB.prototype={
$0(){var w=this.a
return w.l(new C.eaz(w))},
$S:0}
C.eaz.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.eaC.prototype={
$0(){var w=this.a
return w.b46(w.d)},
$S:0}
C.dV3.prototype={
$2(d,e){return d+e},
$S:84}
C.dV4.prototype={
$0(){},
$S:0}
C.dUZ.prototype={
$2(d,e){return d+e},
$S:84}
C.dV1.prototype={
$0(){var w=this.a
return w.l(new C.dV0(w,this.b))},
$S:0}
C.dV0.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dV2.prototype={
$0(){var w=this.a
return w.l(new C.dV_(w))},
$S:0}
C.dV_.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e6p.prototype={
$0(){return E.uY(this.b,this.a.d,"drawing")},
$S:0}
C.e6q.prototype={
$1(d){var w=this.a
return w.l(new C.e6o(w,d))},
$S:50}
C.e6o.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aM_(u,v,t))},
$S:0}
C.e6r.prototype={
$1(d){var w=this.a
return w.l(new C.e6n(w,d))},
$S:19}
C.e6n.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e6s.prototype={
$1(d){var w=this.a
return w.l(new C.e6m(w,d))},
$S:24}
C.e6m.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aM_(u,v,t))},
$S:0}
C.e6t.prototype={
$0(){var w=this.a
return w.l(new C.e6l(w,this.b))},
$S:0}
C.e6l.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e6u.prototype={
$1(d){var w=this.a
return w.l(new C.e6k(w,d))},
$S:6}
C.e6k.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e6v.prototype={
$0(){var w=this.a
return w.l(new C.e6j(w))},
$S:0}
C.e6j.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e6w.prototype={
$0(){var w=this.a
return w.l(new C.e6i(w))},
$S:0}
C.e6i.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e6x.prototype={
$0(){var w=this.a
return w.l(A.d.gtG(w.e))},
$S:0}
C.e6y.prototype={
$0(){var w=this.a
return w.l(new C.e6h(w))},
$S:0}
C.e6h.prototype={
$0(){var w=this.a
w.x=D.aDg[A.n.F(A.d.c9(D.aDg,w.x)+1,4)]},
$S:0}
C.eyz.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
C.eyA.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.Kc("bell",B.a([0,4,7],w),500,0.45)
u.l(new C.eyy(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.d()
if(v===u.length)C.Kc("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.eyy.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
C.eyB.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.eyx(w))},
$S:12}
C.eyx.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
C.eyF.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.l3(new C.eyD(v,e),w,A.b0,A.pV,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eyE(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:80}
C.eyE.prototype={
$0(){return this.a.chm(this.b)},
$S:0}
C.eyD.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dA(),m=n.a
m.$flags&2&&B.ak(m)
m[11]=0.001
n.fM(3.141592653589793*e)
m=B.n(16)
w=o?p:D.ceU
if(o)v=q.a.r.q(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bf:A.aT,A.r,1)
if(o){r=B.dA()
r.fM(3.141592653589793)
u=u.e
u===$&&B.d()
r=B.fG(A.z,B.c(u[t],p,p,p,p,p,p,H.adq,p,p,p),p,r,!0)
u=r}else u=D.hf1
return B.fG(A.z,B.q(A.z,u,A.f,p,p,new B.p(v,p,s,m,p,w,A.m),p,p,p,p,p,p,p,p),p,n,!0)},
$S:111}
C.eyG.prototype={
$0(){var w=this.a
return w.l(new C.eyC(w,this.b))},
$S:0}
C.eyC.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aw6()},
$S:0}
C.eyH.prototype={
$0(){var w=this.a
return w.l(w.gbQO())},
$S:0}
C.eLH.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eLI.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eLF.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eLG.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.eLE(w))},
$S:12}
C.eLE.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eLJ.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eLK.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eLL.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b45()},
$S:12}
C.eLM.prototype={
$0(){return this.a.chs(this.b)},
$S:0}
C.eZW.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:58}
C.f_4.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.c(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.C(A.jY,B.A(B.a([v,A.aa,new B.d0(1,A.c8,new B.d7(A.dn,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1979}
C.f_0.prototype={
$1(d){return this.a.l(new C.f__())},
$S:2}
C.f__.prototype={
$0(){},
$S:0}
C.f_1.prototype={
$0(){var w=this.a
return w.l(new C.eZZ(w,this.b))},
$S:0}
C.eZZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f_2.prototype={
$1(d){var w=this.a
return w.l(new C.eZY(w,d))},
$S:6}
C.eZY.prototype={
$0(){return this.a.f=A.h.S(this.b)},
$S:0}
C.f_3.prototype={
$0(){var w=this.a
return w.l(new C.eZX(w))},
$S:0}
C.eZX.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.exe.prototype={
$0(){},
$S:0}
C.exf.prototype={
$0(){},
$S:0}
C.ex7.prototype={
$0(){var w=this.a
return w.l(new C.ex6(w))},
$S:0}
C.ex6.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c4(u,1,!1,x.S)
w.r=0.9
E.Yr("hat",0,0.6)},
$S:0}
C.ex8.prototype={
$0(){var w=this.a
return w.l(new C.ex5(w))},
$S:0}
C.ex5.prototype={
$0(){this.a.y=1.1
E.mQ("bell",36,200,0.4)},
$S:0}
C.ex9.prototype={
$0(){var w=this.a
return w.l(new C.ex4(w))},
$S:0}
C.ex4.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mQ("bell",12+A.n.F(u,12),500,0.5)},
$S:0}
C.exa.prototype={
$0(){var w=this.a
return w.l(new C.ex3(w,this.b))},
$S:0}
C.ex3.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.exb.prototype={
$1(d){var w=this.a
return w.l(new C.ex2(w,d))},
$S:6}
C.ex2.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.h.S(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.exc.prototype={
$1(d){var w=this.a
return w.l(new C.ex1(w,d))},
$S:6}
C.ex1.prototype={
$0(){return this.a.z=A.h.S(this.b)},
$S:0}
C.exd.prototype={
$1(d){var w=this.a
return w.l(new C.ex0(w,d))},
$S:6}
C.ex0.prototype={
$0(){return this.a.Q=A.h.S(this.b)},
$S:0}
C.cqi.prototype={
$0(){var w=this
return E.mQ(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aQ5.prototype
w.bCK=w.t
w=C.aP9.prototype
w.bBM=w.t
w=C.aPa.prototype
w.bBN=w.t
w=C.aPe.prototype
w.bBR=w.t
w=C.aQW.prototype
w.bDH=w.t
w=C.aQ3.prototype
w.bCI=w.t
w=C.aB6.prototype
w.byN=w.t
w=C.aB7.prototype
w.byO=w.t
w=C.aNB.prototype
w.bA9=w.t
w=C.aPp.prototype
w.bC1=w.t
w=C.aPb.prototype
w.bBO=w.t
w=C.aPw.prototype
w.bC9=w.t
w=C.aPX.prototype
w.bCB=w.t
w=C.aQp.prototype
w.bD3=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aHZ.prototype,"gaAi","ccs",1)
v(C,"iGp","c9P",3)
var q
u(q=C.aGo.prototype,"gclS","clT",22)
w(q,"gcd1","b2x",1)
w(C.aGq.prototype,"gceO","ceP",1)
t(C.aGH.prototype,"gceW","ceX",39)
w(q=C.aL6.prototype,"gcG1","cG2",1)
w(q,"gceY","a0I",1)
w(q,"gcqy","cqz",1)
w(q,"gceU","a0H",3)
w(q,"gceV","agN",3)
w(q=C.aHY.prototype,"gbNS","ac1",3)
w(q,"gcpP","b6i",1)
w(q,"gctK","ajt",3)
s(q,"gcf_","agO",3)
s(q=C.a6I.prototype,"gtG","a7",1)
u(q,"gd3b","aqB",0)
u(q,"gd_t","Nf",0)
w(q,"gd5z","bnZ",1)
r(C.alq.prototype,"gcfm",0,5,null,["$5"],["lK"],41,0,0)
w(q=C.aGV.prototype,"gcfn","cfo",1)
w(q,"gcwE","ajP",3)
w(q,"gcm9","ai8",3)
w(q,"gcDZ","akX",3)
w(q=C.aGL.prototype,"gc7r","aeV",3)
w(q,"gbds","cKC",1)
w(q,"gb3s","cfs",1)
w(q=C.aIu.prototype,"gchn","cho",1)
s(q,"gchl","b44",1)
w(C.aHK.prototype,"gbQO","aw6",1)
s(C.aI7.prototype,"gchp","chq",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aH,[C.amF,C.Ho,C.vQ,C.aWm,C.a5A,C.beK,C.c9Q,C.z3,C.Dr,C.o6,C.bfy,C.Br,C.by3,C.qO,C.rz,C.Dv,C.a0z,C.ahd,C.a2Q,C.DG,C.ae2,C.aek,C.agi,C.H9,C.es,C.ui,C.acG,C.adP,C.a6I,C.nh,C.bfz,C.h6,C.mt,C.bzn,C.aM_])
u(B.hq,[C.fVI,C.fJM,C.fRH,C.fRI,C.fVF,C.fVG,C.eqi,C.eqB,C.eG7,C.eFF,C.eFG,C.eFH,C.eFI,C.eFJ,C.eFK,C.eFL,C.eFM,C.eFD,C.eFE,C.eFC,C.eG2,C.eG3,C.eG4,C.dUA,C.dUC,C.dUF,C.dUQ,C.c9R,C.c9S,C.fCN,C.fCO,C.fCP,C.fCW,C.fCX,C.fCY,C.dWD,C.dWk,C.dWE,C.dWf,C.dWa,C.dWc,C.dWi,C.dWv,C.dWt,C.dWu,C.dWs,C.dWp,C.dWr,C.fin,C.fhX,C.fhY,C.fi4,C.fib,C.fik,C.fhU,C.dw5,C.dw6,C.dw2,C.dw3,C.dw4,C.dw7,C.dw8,C.dw9,C.dwa,C.dwb,C.dwc,C.dwd,C.dwe,C.dwf,C.eF3,C.eF4,C.eF5,C.eF6,C.eF1,C.eF2,C.eFy,C.eFa,C.eFc,C.eEX,C.eFu,C.eFs,C.eFt,C.eFr,C.eFq,C.eEZ,C.bT4,C.bTf,C.bTa,C.bTg,C.bTi,C.bT5,C.bT3,C.bTn,C.bTb,C.bTe,C.bTd,C.bTc,C.bNp,C.h7Y,C.h80,C.h7Z,C.bN4,C.bN_,C.bMY,C.bNn,C.bNf,C.bNg,C.bNe,C.bNh,C.bMO,C.bMQ,C.bMM,C.bMC,C.bMD,C.bME,C.fCZ,C.fD_,C.fD0,C.fCM,C.fD1,C.fCL,C.fD2,C.fCQ,C.fCK,C.fCR,C.fCJ,C.fCS,C.fCI,C.fCT,C.fCG,C.fCH,C.fCU,C.fCE,C.fCF,C.fCV,C.fCD,C.e73,C.e74,C.e6U,C.e6Q,C.e72,C.e77,C.cPh,C.hd8,C.hd9,C.e2Q,C.e2I,C.e2H,C.e3_,C.cqk,C.f3z,C.e6q,C.e6r,C.e6s,C.e6u,C.eyD,C.eZW,C.f_4,C.f_0,C.f_2,C.exb,C.exc,C.exd])
u(B.iZ,[C.fVH,C.eqn,C.eql,C.eFO,C.eG0,C.dWb,C.dWy,C.e1P,C.fiq,C.fir,C.fi3,C.fig,C.fih,C.fic,C.fii,C.fhT,C.eF_,C.eF0,C.eFx,C.eFp,C.eFe,C.bTh,C.bTj,C.bTl,C.bT6,C.bT8,C.bNq,C.bNo,C.cxt,C.h8_,C.bMX,C.bMZ,C.bNl,C.bNk,C.bMN,C.e71,C.cPi,C.e2J,C.e2V,C.e2T,C.e30,C.e2N,C.e2L,C.cqn,C.dV3,C.dUZ,C.eyF])
u(B.af,[C.XE,C.Y0,C.Wr,C.Wy,C.OS,C.aL5,C.Y_,C.alo,C.X9,C.aAM,C.WT,C.Yy,C.Xh,C.Ws,C.X8,C.XV,C.Y5,C.Yp,C.XU])
u(B.ai,[C.bp1,C.aQ5,C.aP9,C.aPe,C.aGH,C.aQW,C.aQ3,C.aB6,C.bCz,C.aNB,C.aPp,C.aQp,C.aPw,C.aPb,C.bos,C.aHK,C.aI7,C.bpK,C.aPX])
u(B.iY,[C.eqg,C.eqh,C.eqt,C.equ,C.eqp,C.eqo,C.eqq,C.eqm,C.eqr,C.eqk,C.eqs,C.eqj,C.eqx,C.eqw,C.eqy,C.eqv,C.eqz,C.eqA,C.eqC,C.eG6,C.eG8,C.eG9,C.eFQ,C.eFP,C.eFN,C.eFW,C.eFX,C.eFT,C.eFY,C.eFS,C.eFZ,C.eG_,C.eFR,C.eG1,C.eFV,C.eG5,C.eFU,C.dUX,C.dUW,C.dUx,C.dUy,C.dUz,C.dUY,C.dUB,C.dUD,C.dUE,C.dUG,C.dUu,C.dUv,C.dUw,C.dUN,C.dUO,C.dUP,C.dUM,C.dUR,C.dUL,C.dUS,C.dUK,C.dUT,C.dUJ,C.dUU,C.dUI,C.dUV,C.dUH,C.dWh,C.dWg,C.dWl,C.dWd,C.dWe,C.dWm,C.dWn,C.dWo,C.dWj,C.dW9,C.dWx,C.dWw,C.dWz,C.dWA,C.dWB,C.dWq,C.dWC,C.d_e,C.e1N,C.e1M,C.e1O,C.fDd,C.fDe,C.fDf,C.fDg,C.fDh,C.fDi,C.fDj,C.fDk,C.fDl,C.fip,C.fio,C.fi6,C.fi5,C.fhW,C.fhV,C.fhZ,C.fi1,C.fi0,C.fi2,C.fi_,C.fie,C.fid,C.fif,C.fi7,C.fij,C.fia,C.fil,C.fi9,C.fim,C.fi8,C.eF8,C.eEY,C.eF7,C.eEU,C.eF9,C.eFb,C.eEV,C.eEW,C.eFw,C.eFv,C.eFm,C.eFn,C.eFo,C.eFi,C.eFj,C.eFh,C.eFk,C.eFg,C.eFl,C.eFf,C.eFd,C.dw1,C.bTk,C.bTm,C.bT7,C.bT9,C.bN1,C.bN2,C.bN0,C.bN3,C.bN5,C.bMR,C.bMS,C.bMW,C.bMT,C.bMU,C.bMV,C.bNm,C.bMr,C.bNc,C.bNd,C.bNa,C.bNb,C.bN7,C.bN8,C.bN9,C.bNi,C.bN6,C.bNj,C.bMs,C.bMP,C.bMz,C.bMy,C.bMA,C.bMB,C.bMx,C.bMF,C.bMw,C.bMG,C.bMH,C.bMI,C.bMJ,C.bMv,C.bMK,C.bMu,C.bML,C.bMt,C.e6V,C.e75,C.e76,C.e6T,C.e6S,C.e6R,C.e7_,C.e6Y,C.e6Z,C.e70,C.e6W,C.e6X,C.e78,C.e79,C.e7a,C.e7b,C.e7c,C.e2R,C.e2S,C.e31,C.e2P,C.e32,C.e33,C.e2W,C.e2X,C.e2Y,C.e2Z,C.e34,C.e2U,C.e2O,C.e2M,C.e2G,C.e2K,C.fDt,C.fDu,C.fDv,C.fDw,C.fDx,C.fDy,C.fDz,C.fDA,C.cqm,C.cql,C.f3A,C.f3w,C.f3v,C.f3y,C.f3x,C.eaD,C.eaE,C.eay,C.eaA,C.eaB,C.eaz,C.eaC,C.dV4,C.dV1,C.dV0,C.dV2,C.dV_,C.e6p,C.e6o,C.e6n,C.e6m,C.e6t,C.e6l,C.e6k,C.e6v,C.e6j,C.e6w,C.e6i,C.e6x,C.e6y,C.e6h,C.eyz,C.eyA,C.eyy,C.eyB,C.eyx,C.eyE,C.eyG,C.eyC,C.eyH,C.eLH,C.eLI,C.eLF,C.eLG,C.eLE,C.eLJ,C.eLK,C.eLL,C.eLM,C.f__,C.f_1,C.eZZ,C.eZY,C.f_3,C.eZX,C.exe,C.exf,C.ex7,C.ex6,C.ex8,C.ex5,C.ex9,C.ex4,C.exa,C.ex3,C.ex2,C.ex1,C.ex0,C.cqi])
t(C.bCN,C.aQ5)
t(C.aHZ,C.bCN)
u(B.lO,[C.blU,C.bfQ,C.bxr,C.bes,C.bw0,C.bvp,C.bf8,C.bvr,C.bzx,C.blS,C.alq,C.bdC,C.bAB,C.ah6,C.bAN,C.bvq,C.bqw])
t(C.aPa,C.aP9)
t(C.aGo,C.aPa)
t(C.bCw,C.aPe)
t(C.aGq,C.bCw)
u(B.lm,[C.LI,C.a2D,C.KG])
u(B.aw,[C.bwp,C.ahq,C.age,C.RV,C.bwX,C.aaG,C.bhZ])
t(C.aL6,C.aQW)
t(C.blR,B.p0)
t(C.aHY,C.aQ3)
t(C.aB7,C.aB6)
t(C.alp,C.aB7)
t(C.aGV,C.bCz)
t(C.bdD,C.aNB)
t(C.aGL,C.aPp)
t(C.bCU,C.aQp)
t(C.aIu,C.bCU)
t(C.bCB,C.aPw)
t(C.boB,C.bCB)
t(C.bCv,C.aPb)
t(C.boa,C.bCv)
t(C.bCL,C.aPX)
t(C.bpd,C.bCL)
w(C.aQ5,B.cl)
w(C.bCN,E.o3)
w(C.aP9,B.cl)
w(C.aPa,E.o3)
w(C.aPe,B.cl)
w(C.bCw,E.o3)
w(C.aQW,B.eZ)
w(C.aQ3,B.cl)
w(C.aB6,B.cl)
w(C.aB7,E.o3)
w(C.aNB,B.cl)
v(C.bCz,B.eF)
w(C.aPp,B.cl)
w(C.aPb,B.cl)
w(C.bCv,E.o3)
w(C.aPw,B.cl)
w(C.bCB,E.o3)
w(C.aPX,B.cl)
w(C.bCL,E.o3)
w(C.aQp,B.cl)
w(C.bCU,E.o3)})()
B.ji(b.typeUniverse,JSON.parse('{"XE":{"af":[],"x":[]},"bp1":{"ai":["XE"]},"Y0":{"af":[],"x":[]},"aHZ":{"ai":["Y0"]},"blU":{"aC":[]},"Wr":{"af":[],"x":[]},"aGo":{"ai":["Wr"]},"Wy":{"af":[],"x":[]},"aGq":{"ai":["Wy"]},"bfQ":{"aC":[]},"ahq":{"aw":[],"x":[]},"age":{"aw":[],"x":[]},"aL5":{"af":[],"x":[]},"OS":{"af":[],"x":[]},"aGH":{"ai":["OS"]},"bwp":{"aw":[],"x":[]},"RV":{"aw":[],"x":[]},"bxr":{"aC":[]},"bwX":{"aw":[],"x":[]},"bes":{"aC":[]},"aL6":{"ai":["aL5"]},"bw0":{"aC":[]},"bvp":{"aC":[]},"bf8":{"aC":[]},"bvr":{"aC":[]},"bzx":{"aC":[]},"Y_":{"af":[],"x":[]},"blR":{"aC":[]},"aHY":{"ai":["Y_"]},"blS":{"aC":[]},"alq":{"aC":[]},"alo":{"af":[],"x":[]},"alp":{"ai":["alo"]},"X9":{"af":[],"x":[]},"aAM":{"af":[],"x":[]},"aGV":{"ai":["X9"],"eF":[]},"bdD":{"ai":["aAM"]},"bdC":{"aC":[]},"WT":{"af":[],"x":[]},"aGL":{"ai":["WT"]},"bAB":{"aC":[]},"ah6":{"aC":[]},"aaG":{"aw":[],"x":[]},"Yy":{"af":[],"x":[]},"Xh":{"af":[],"x":[]},"Ws":{"af":[],"x":[]},"X8":{"af":[],"x":[]},"XV":{"af":[],"x":[]},"Y5":{"af":[],"x":[]},"Yp":{"af":[],"x":[]},"XU":{"af":[],"x":[]},"aIu":{"ai":["Yy"]},"bAN":{"aC":[]},"boB":{"ai":["Xh"]},"bvq":{"aC":[]},"boa":{"ai":["Ws"]},"bos":{"ai":["X8"]},"bqw":{"aC":[]},"aHK":{"ai":["XV"]},"aI7":{"ai":["Y5"]},"bpK":{"ai":["Yp"]},"bpd":{"ai":["XU"]},"bhZ":{"aw":[],"x":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("lc<u?>"),G:w("u"),J:w("bl<o,H>"),Q:w("dd<o>"),Z:w("a_"),I:w("vo"),M:w("N<dl>"),l:w("N<a5v>"),h:w("N<a5A>"),V:w("N<ab>"),O:w("N<u>"),F:w("N<W>"),D:w("N<az<aH>>"),x:w("N<a_>"),E:w("N<ah<o>>"),b:w("N<ah<H>>"),U:w("N<ah<F?>>"),B:w("N<a9<o,aH>>"),g:w("N<m>"),bz:w("N<ui>"),v:w("N<h_>"),eZ:w("N<+(o,o)>"),fT:w("N<+(H,x)>"),L:w("N<+(F,o)>"),u:w("N<+(F,F)>"),r:w("N<+(o,o,a_)>"),e:w("N<+(o,H,H,F)>"),o:w("N<+(o,F,o,F)>"),d:w("N<+(o,o,H,H,a9<o,H>)>"),_:w("N<vQ>"),fQ:w("N<acG>"),s:w("N<o>"),cF:w("N<au>"),X:w("N<KW>"),p:w("N<x>"),bL:w("N<adP>"),fH:w("N<lk>"),a_:w("N<ae2>"),cB:w("N<o6>"),ba:w("N<aek>"),eW:w("N<Dv>"),fY:w("N<a0z>"),ac:w("N<agi>"),cd:w("N<DG>"),fr:w("N<ahd>"),e4:w("N<a2Q>"),au:w("N<aM_>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<F>"),dS:w("N<aC?>"),fs:w("N<ui?>"),bN:w("N<F?>"),gJ:w("cB<alp>"),A:w("cB<ai<af>>"),bF:w("ah<u>"),gl:w("ah<W>"),ew:w("ah<aH>"),j:w("ah<@>"),P:w("a9<o,@>"),f:w("a9<@,@>"),bd:w("O<es,o>"),fR:w("O<+(H,x),x>"),w:w("ip"),gA:w("vs"),gD:w("wO"),k:w("cr"),K:w("aH"),Y:w("ui"),C:w("es"),N:w("o"),bO:w("au"),a:w("bq<H>"),W:w("bb<o>"),aC:w("bb<F?>"),dg:w("ee<rz>"),m:w("beK"),a2:w("Dr"),f3:w("rz"),es:w("H9"),q:w("l4"),y:w("P"),i:w("H"),z:w("@"),S:w("F"),R:w("ah<@>?"),cK:w("aH?"),T:w("o?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6a=new B.dl(0,0.1)
D.b87=new C.aWm(0,0,0)
D.N_=new C.aWm(0,0.5,0)
D.b8J=new B.ax(A.bf,1,A.r,-1)
D.bae=new B.aY(16,1/0,16,1/0)
D.bao=new B.aY(0,1/0,0,210)
D.bsu=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dG2=w([D.bsu,Av.al6],x.O)
D.eQb=new B.bU(A.C1,1.1,A.w,null,0,D.dG2,null,null)
D.baw=new B.p(null,null,null,null,null,D.eQb,A.m)
D.bbt=new B.p(A.bh,null,null,null,null,null,A.a6)
D.fKm=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hnM=new B.D("\u26a1",null,D.fKm,null,null,null,null,null,null,null,null,null)
D.bgd=new B.cq(A.z,null,null,D.hnM,null)
D.aZd=new B.G(!0,A.bX,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hd_=new B.D("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aZd,null,A.K,null,null,null,null,null,null,null)
D.eIh=new B.C(A.o9,D.hd_,null)
D.bgo=new B.cq(A.z,null,null,D.eIh,null)
D.h2H=new B.D("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aZd,null,A.K,null,null,null,null,null,null,null)
D.eJa=new B.C(A.HY,D.h2H,null)
D.bh6=new B.cq(A.z,null,null,D.eJa,null)
D.ahQ=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bkY=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.ble=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bmu=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bmB=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bmY=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bp1=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bqb=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bqX=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.akd=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.brY=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.akC=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.akK=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.btZ=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.alb=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bw1=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bw9=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bwE=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.x0=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.byS=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.amK=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bEK=new B.bh(11e6)
D.bGC=new B.R(10,6,10,2)
D.bGE=new B.R(10,8,0,10)
D.bHi=new B.R(12,8,6,10)
D.bHl=new B.R(12,8,8,8)
D.bHs=new B.R(14,0,14,22)
D.bHu=new B.R(14,0,14,30)
D.bIy=new B.R(16,4,16,28)
D.bIR=new B.R(18,10,18,16)
D.bLF=new B.R(4,4,8,2)
D.bMh=new B.R(8,14,8,12)
D.bMs=new B.R(8,6,8,8)
D.bMO=new B.R(0,0,1.5,0)
D.b7U=new B.Er(26,"saturation")
D.bN6=new B.vc(A.cG,D.b7U,null,A.ZR)
D.bN7=new B.h3(A.H,11)
D.bNb=new B.h3(A.H,30)
D.h1J=new B.D("REACTION LAB",null,U.aZS,null,null,null,null,A.a2,null,1,null,null)
D.bNk=new B.bu(1,A.b8,D.h1J,null)
D.h5S=new B.D("\ud83d\udce2 NGMY Ads",null,A.qA,null,null,null,null,A.f5,null,1,null,null)
D.bOh=new B.bu(1,A.b8,D.h5S,null)
D.h0k=new B.D("Wire selected",null,A.h5,null,null,null,null,null,null,null,null,null)
D.bOv=new B.bu(1,A.b8,D.h0k,null)
D.arV=new B.a_(62712,"MaterialIcons",!1)
D.bUT=new B.a_(62908,"MaterialIcons",!1)
D.bWz=new B.a_(983122,"MaterialIcons",!1)
D.bWP=new B.a_(983247,"MaterialIcons",!1)
D.bX5=new B.a_(983443,"MaterialIcons",!1)
D.bXo=new B.a_(983616,"MaterialIcons",!1)
D.bWy=new B.a_(983117,"MaterialIcons",!1)
D.c0d=new B.ae(D.bWy,28,A.c,null,null,null)
D.c0v=new B.ae(A.jm,18,null,null,null,null)
D.c2K=new B.ae(A.of,null,A.ac,null,null,null)
D.c2U=new B.ae(A.a5i,21,A.ac,null,null,null)
D.c3L=new B.ae(A.eF,17,A.ac,null,null,null)
D.c6G=new B.ae(A.jm,21,A.ac,null,null,null)
D.c7b=new B.ae(A.eq,20,A.c1,null,null,null)
D.c8h=new B.ae(A.ef,null,A.aQ,null,null,null)
D.dDx=w([A.dl,A.di,A.dl],x.O)
D.avF=new B.a6(A.a5,A.a9,A.w,D.dDx,null,null)
D.dch=w([A.bP,A.bl],x.O)
D.cbN=new B.a6(A.aU,A.b2,A.w,D.dch,null,null)
D.cc1=new B.a6(A.aU,A.b2,A.w,A.a7V,null,null)
D.dyG=w([F.Ns,A8.amU],x.O)
D.ccM=new B.a6(A.aU,A.b2,A.w,D.dyG,null,null)
D.d9y=w([A.pG,A.iJ],x.O)
D.ccR=new B.a6(A.aU,A.b2,A.w,D.d9y,null,null)
D.dc_=w([A.cU,A.ax],x.O)
D.avT=new B.a6(A.aU,A.b2,A.w,D.dc_,null,null)
D.dww=w([A.d1,A.iM,A.bl],x.O)
D.cd9=new B.a6(A.a5,A.a9,A.w,D.dww,null,null)
D.dIV=w([A.d1,A.bP,A.bl],x.O)
D.cdk=new B.a6(A.a5,A.a9,A.w,D.dIV,null,null)
D.dwE=w([A.cz,A.cx],x.O)
D.avW=new B.a6(A.aU,A.b2,A.w,D.dwE,null,null)
D.aFW=w([A.cU,M.ni],x.O)
D.cdL=new B.a6(A.aU,A.b2,A.w,D.aFW,null,null)
D.ce2=new B.a6(A.aU,A.b2,A.w,X.awf,null,null)
D.ceU=new B.a6(A.aw,A.aD,A.w,A.Tm,null,null)
D.bxA=new B.u(1,0.16470588235294117,0.16470588235294117,0.1803921568627451,A.q)
D.bsK=new B.u(1,0.0392156862745098,0.0392156862745098,0.043137254901960784,A.q)
D.dlX=w([D.bxA,D.bsK],x.O)
D.ceY=new B.a6(A.aU,A.b2,A.w,D.dlX,null,null)
D.cf7=new B.a6(A.aU,A.b2,A.w,H.aFd,null,null)
D.amt=new B.u(1,0.043137254901960784,0.043137254901960784,0.047058823529411764,A.q)
D.bxb=new B.u(1,0.22745098039215686,0.22745098039215686,0.23921568627450981,A.q)
D.dFs=w([D.amt,D.bxb,D.amt],x.O)
D.cff=new B.a6(A.a5,A.a9,A.w,D.dFs,null,null)
D.bwy=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bxt=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cUK=w([A.OB,D.bwy,D.bxt],x.O)
D.cfj=new B.a6(A.aU,A.b2,A.w,D.cUK,null,null)
D.cHT=w([A.de,A.j0],x.O)
D.cfy=new B.a6(A.aU,A.b2,A.w,D.cHT,null,null)
D.cVr=w([A.d1,A.hX,A.d1],x.O)
D.cfG=new B.a6(A.a5,A.a9,A.w,D.cVr,null,null)
D.bAj=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cIF=w([F.ahY,D.bAj],x.O)
D.cfM=new B.a6(A.aU,A.b2,A.w,D.cIF,null,null)
D.cgq=w([0,4,7],x.t)
D.cgr=w([0,4,7,12],x.t)
D.cgs=w([0,4,7,4],x.t)
D.aET=w([A.hl,A.tq],x.O)
D.aEn=w([A.fL,A.cY],x.O)
D.aCH=w([A.bk,A.e0],x.O)
D.d2I=w([A.aQ,A.de],x.O)
D.dy5=w([A.c5,A.lW],x.O)
D.aC7=w([A.cX,A.ke],x.O)
D.d8c=w([A.bQ,A.aM],x.O)
D.cgQ=w([D.aET,D.aEn,A.a78,D.aCH,D.d2I,A.a74,A.a7l,D.dy5,D.aC7,D.d8c],B.as("N<ah<u>>"))
D.cly=w([120,220,380],x.t)
D.cpi=w([12,16,19,24],x.t)
D.cpu=w([1400,800,450,2400],x.t)
D.cy2=w([250,450,900,1500],x.t)
D.bkg=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bwY=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.buE=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bAV=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.btL=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aBn=w([D.bkg,D.bwY,D.buE,D.bAV,D.btL],x.O)
D.f9Y=new B.y(-25,A.ax)
D.eZ5=new B.y(25,A.bC)
D.cHZ=w([D.f9Y,D.eZ5],B.as("N<+(H,u)>"))
D.cPw=w([50,25,75],x.t)
D.cVj=w([0,5,10,15,18,20,25],x.t)
D.d31=w([900,500,250,1600],x.t)
D.d7o=w([A.bk,A.bE,A.be,A.bk],x.O)
D.a7_=w([A.aC,A.bu,A.bh,A.aH,A.oP],x.O)
D.d9a=w([A.ax,A.aC,A.cX,A.bu,A.bh,A.cI,A.ci,A.bE,A.a_b],x.O)
D.a72=w([0.04,0.17,0.3],x.n)
D.ftC=new C.vQ("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.ftI=new C.vQ("Medium engine","A good all-rounder.",0.3,0.9)
D.ftH=new C.vQ("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Jr=w([D.ftC,D.ftI,D.ftH],x._)
D.eWe=new B.y(6,"Easy")
D.eX2=new B.y(8,"Medium")
D.eRO=new B.y(10,"Hard")
D.daZ=w([D.eWe,D.eX2,D.eRO],x.L)
D.aD5=w([0.55,0.78,1],x.n)
D.aDg=w([A.c,A.ha,A.pI,A.ax],x.O)
D.aDo=w([A.bh,A.aC,A.bu,A.di],x.O)
D.ftz=new C.vQ("Radar","Shows your height above the ground.",0.1,0)
D.ftA=new C.vQ("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.ftx=new C.vQ("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aDx=w([D.ftz,D.ftA,D.ftx],x._)
D.dhq=w([-29.5,28.5],x.n)
D.dhw=w([A.bl,A.cm,F.NX,A.cz],x.O)
D.dhU=w([47,100,220,470,1000],x.n)
D.dji=w([0,0.32,0.62,1],x.n)
D.djn=w([A.d1,A.hX,A.d1,A.cz],x.O)
D.Kz={volts:0}
D.a8W=new B.bl(D.Kz,[3],x.J)
D.L1=new B.e1(["b","battery",0.2,0.3,D.a8W])
D.eC1={on:0}
D.dPn=new B.bl(D.eC1,[1],x.J)
D.Fu=new B.e1(["s","switch",0.5,0.3,D.dPn])
D.fr8=new B.e1(["l","bulb",0.8,0.3,A.jK])
D.dcs=w([D.L1,D.Fu,D.fr8],x.d)
D.Fs=new B.b7(["b",0,"s",0])
D.fq2=new B.b7(["s",1,"l",0])
D.aUF=new B.b7(["l",1,"b",1])
D.dwM=w([D.Fs,D.fq2,D.aUF],x.o)
D.dbO=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eQV=new C.nh("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.dcs,D.dwM,D.dbO)
D.aOn={ohms:0}
D.aLX=new B.bl(D.aOn,[220],x.J)
D.fqx=new B.e1(["r","resistor",0.5,0.3,D.aLX])
D.frp=new B.e1(["d","led",0.8,0.3,A.jK])
D.dAk=w([D.L1,D.fqx,D.frp],x.d)
D.fpg=new B.b7(["b",0,"r",0])
D.fpX=new B.b7(["r",1,"d",0])
D.fpn=new B.b7(["d",1,"b",1])
D.dKJ=w([D.fpg,D.fpX,D.fpn],x.o)
D.dAN=w(["led","diode","indicator"],x.s)
D.eR1=new C.nh("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dAk,D.dKJ,D.dAN)
D.aaq={level:0}
D.dOJ=new B.bl(D.aaq,[0.2],x.J)
D.fqE=new B.e1(["p","pot",0.5,0.3,D.dOJ])
D.fqG=new B.e1(["m","motor",0.8,0.3,A.jK])
D.dcO=w([D.L1,D.fqE,D.fqG],x.d)
D.fpf=new B.b7(["b",0,"p",0])
D.fpS=new B.b7(["p",1,"m",0])
D.fpN=new B.b7(["m",1,"b",1])
D.dFL=w([D.fpf,D.fpS,D.fpN],x.o)
D.dwp=w(["fan","motor","spin","dimmer"],x.s)
D.eQT=new C.nh("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.dcO,D.dFL,D.dwp)
D.a8S=new B.bl(D.aaq,[0.9],x.J)
D.aUO=new B.e1(["s","solar",0.25,0.3,D.a8S])
D.aUN=new B.e1(["l","bulb",0.75,0.3,A.jK])
D.dg_=w([D.aUO,D.aUN],x.d)
D.fq_=new B.b7(["s",0,"l",0])
D.fpK=new B.b7(["l",1,"s",1])
D.ddI=w([D.fq_,D.fpK],x.o)
D.dGw=w(["solar","sun","without battery","no battery","free"],x.s)
D.eQW=new C.nh("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dg_,D.ddI,D.dGw)
D.fru=new B.e1(["c","crank",0.25,0.3,D.a8S])
D.dup=w([D.fru,D.aUN],x.d)
D.fpj=new B.b7(["c",0,"l",0])
D.fpJ=new B.b7(["l",1,"c",1])
D.dv6=w([D.fpj,D.fpJ],x.o)
D.duB=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eQS=new C.nh("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dup,D.dv6,D.duB)
D.dOI=new B.bl(D.aaq,[0.7],x.J)
D.fqL=new B.e1(["t","turbine",0.25,0.3,D.dOI])
D.fqv=new B.e1(["m","motor",0.75,0.3,A.jK])
D.dnW=w([D.fqL,D.fqv],x.d)
D.fqa=new B.b7(["t",0,"m",0])
D.fpO=new B.b7(["m",1,"t",1])
D.dmI=w([D.fqa,D.fpO],x.o)
D.dt3=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eQP=new C.nh("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dnW,D.dmI,D.dt3)
D.aLU=new B.bl(D.Kz,[9],x.J)
D.aby=new B.e1(["b","battery",0.2,0.3,D.aLU])
D.aUL=new B.e1(["r","radio",0.8,0.3,A.jK])
D.dH9=w([D.aby,D.Fu,D.aUL],x.d)
D.fq4=new B.b7(["s",1,"r",0])
D.aUH=new B.b7(["r",1,"b",1])
D.cg3=w([D.Fs,D.fq4,D.aUH],x.o)
D.dFw=w(["radio","music","listen"],x.s)
D.eR0=new C.nh("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dH9,D.cg3,D.dFw)
D.dPN=new B.bl(D.Kz,[12],x.J)
D.aUK=new B.e1(["b","battery",0.2,0.3,D.dPN])
D.fr9=new B.e1(["t","tv",0.8,0.3,A.jK])
D.dcu=w([D.aUK,D.Fu,D.fr9],x.d)
D.fq5=new B.b7(["s",1,"t",0])
D.aUI=new B.b7(["t",1,"b",1])
D.dy9=w([D.Fs,D.fq5,D.aUI],x.o)
D.dH7=w(["tv","television","screen","watch"],x.s)
D.eQM=new C.nh("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.dcu,D.dy9,D.dH7)
D.fqZ=new B.e1(["z","buzzer",0.8,0.3,A.jK])
D.cRV=w([D.L1,D.Fu,D.fqZ],x.d)
D.fq6=new B.b7(["s",1,"z",0])
D.fqo=new B.b7(["z",1,"b",1])
D.d6p=w([D.Fs,D.fq6,D.fqo],x.o)
D.dDF=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eQY=new C.nh("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cRV,D.d6p,D.dDF)
D.fqF=new B.e1(["h","heater",0.8,0.3,A.jK])
D.drx=w([D.aby,D.Fu,D.fqF],x.d)
D.fq1=new B.b7(["s",1,"h",0])
D.fpw=new B.b7(["h",1,"b",1])
D.d7j=w([D.Fs,D.fq1,D.fpw],x.o)
D.cBn=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eQN=new C.nh("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.drx,D.d7j,D.cBn)
D.frb=new B.e1(["s","solar",0.2,0.25,D.a8S])
D.dPS=new B.bl(D.aOn,[100],x.J)
D.fre=new B.e1(["r","resistor",0.55,0.25,D.dPS])
D.frn=new B.e1(["c","capacitor",0.85,0.25,A.jK])
D.fqB=new B.e1(["q","resistor",0.55,0.6,D.aLX])
D.frc=new B.e1(["d","led",0.85,0.6,A.jK])
D.dxx=w([D.frb,D.fre,D.frn,D.fqB,D.frc],x.d)
D.fq0=new B.b7(["s",0,"r",0])
D.fpW=new B.b7(["r",1,"c",0])
D.fpl=new B.b7(["c",1,"s",1])
D.fpk=new B.b7(["c",0,"q",0])
D.fpV=new B.b7(["q",1,"d",0])
D.fpo=new B.b7(["d",1,"c",1])
D.dkl=w([D.fq0,D.fpW,D.fpl,D.fpk,D.fpV,D.fpo],x.o)
D.dtE=w(["capacitor","store","charge","flash"],x.s)
D.eR_=new C.nh("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dxx,D.dkl,D.dtE)
D.fqO=new B.e1(["b","battery",0.15,0.3,D.a8W])
D.frw=new B.e1(["l1","bulb",0.5,0.3,A.jK])
D.fqW=new B.e1(["l2","bulb",0.85,0.3,A.jK])
D.dah=w([D.fqO,D.frw,D.fqW],x.d)
D.fpe=new B.b7(["b",0,"l1",0])
D.fpG=new B.b7(["l1",1,"l2",0])
D.fpH=new B.b7(["l2",1,"b",1])
D.doM=w([D.fpe,D.fpG,D.fpH],x.o)
D.dGS=w(["series","two bulbs","dim"],x.s)
D.eQQ=new C.nh("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.dah,D.doM,D.dGS)
D.eCo={volts:0,charge:1}
D.dPW=new B.bl(D.eCo,[1.5,0],x.J)
D.frk=new B.e1(["b","battery",0.75,0.3,D.dPW])
D.d9z=w([D.aUO,D.frk],x.d)
D.fpZ=new B.b7(["s",0,"b",0])
D.fpi=new B.b7(["b",1,"s",1])
D.dkG=w([D.fpZ,D.fpi],x.o)
D.dtP=w(["charge","rechargeable","flat","recharge"],x.s)
D.eQO=new C.nh("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d9z,D.dkG,D.dtP)
D.dPM=new B.bl(D.Kz,[4.5],x.J)
D.fqH=new B.e1(["b","battery",0.2,0.3,D.dPM])
D.aUJ=new B.e1(["p","phone",0.8,0.3,A.jK])
D.dnJ=w([D.fqH,D.Fu,D.aUJ],x.d)
D.fq3=new B.b7(["s",1,"p",0])
D.abx=new B.b7(["p",1,"b",1])
D.dCl=w([D.Fs,D.fq3,D.abx],x.o)
D.dE7=w(["phone","charger","usb","mobile"],x.s)
D.eQU=new C.nh("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dnJ,D.dCl,D.dE7)
D.fqs=new B.e1(["f","fan",0.8,0.3,A.jK])
D.ctl=w([D.L1,D.fqs],x.d)
D.fpd=new B.b7(["b",0,"f",0])
D.fpu=new B.b7(["f",1,"b",1])
D.d7X=w([D.fpd,D.fpu],x.o)
D.dwo=w(["fan","cool","air","wind"],x.s)
D.eR2=new C.nh("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.ctl,D.d7X,D.dwo)
D.fr2=new B.e1(["b","battery",0.15,0.2,D.a8W])
D.fqt=new B.e1(["a","ammeter",0.5,0.2,A.jK])
D.fqr=new B.e1(["l","bulb",0.85,0.2,A.jK])
D.fr4=new B.e1(["v","voltmeter",0.5,0.6,A.jK])
D.dub=w([D.fr2,D.fqt,D.fqr,D.fr4],x.d)
D.fpb=new B.b7(["b",0,"a",0])
D.fp9=new B.b7(["a",1,"l",0])
D.fqc=new B.b7(["v",0,"l",0])
D.fqd=new B.b7(["v",1,"l",1])
D.dkx=w([D.fpb,D.fp9,D.aUF,D.fqc,D.fqd],x.o)
D.dKI=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eQZ=new C.nh("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dub,D.dkx,D.dKI)
D.frz=new B.e1(["b","battery",0.15,0.2,D.aLU])
D.fqN=new B.e1(["t","tv",0.55,0.2,A.jK])
D.aLV=new B.bl(D.Kz,[5],x.J)
D.fqy=new B.e1(["c","buck",0.4,0.5,D.aLV])
D.fqP=new B.e1(["p","phone",0.8,0.5,A.jK])
D.dhG=w([D.frz,D.fqN,D.fqy,D.fqP],x.d)
D.fph=new B.b7(["b",0,"t",0])
D.aUD=new B.b7(["b",0,"c",0])
D.aUE=new B.b7(["c",1,"p",0])
D.dnG=w([D.fph,D.aUI,D.aUD,D.aUE,D.abx],x.o)
D.dfu=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eQR=new C.nh("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dhG,D.dnG,D.dfu)
D.fqA=new B.e1(["c","buck",0.5,0.3,D.aLV])
D.d75=w([D.aUK,D.fqA,D.aUJ],x.d)
D.dcZ=w([D.aUD,D.aUE,D.abx],x.o)
D.cEW=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eQL=new C.nh("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d75,D.dcZ,D.cEW)
D.fqU=new B.e1(["d","diode",0.5,0.3,A.jK])
D.dp1=w([D.aby,D.fqU,D.aUL],x.d)
D.fpc=new B.b7(["b",0,"d",0])
D.fpp=new B.b7(["d",1,"r",0])
D.cUv=w([D.fpc,D.fpp,D.aUH],x.o)
D.df7=w(["diode","protect","backwards","one way"],x.s)
D.eQX=new C.nh("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dp1,D.cUv,D.df7)
D.TA=w([D.eQV,D.eR1,D.eQT,D.eQW,D.eQS,D.eQP,D.eR0,D.eQM,D.eQY,D.eQN,D.eR_,D.eQQ,D.eQO,D.eQU,D.eR2,D.eQZ,D.eQR,D.eQL,D.eQX],B.as("N<nh>"))
D.i23=new C.Ho("Moon",1.62,A.d1,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.i21=new C.Ho("Mars",3.71,A.aC,"Mars has about 38 percent of Earth's gravity.")
D.i24=new C.Ho("Mercury",3.7,A.kJ,"Mercury is small, so its gravity is like Mars.")
D.i1Z=new C.Ho("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.i20=new C.Ho("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.i22=new C.Ho("Neptune",11.15,A.di,"Neptune pulls a little harder than Earth.")
D.i2_=new C.Ho("Jupiter",24.79,A.cX,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.u5=w([D.i23,D.i21,D.i24,D.i1Z,D.i20,D.i22,D.i2_],B.as("N<Ho>"))
D.dkj=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dl7=w([0.2,0.5,0.8],x.n)
D.b4T=new C.LI(0,"accordion")
D.d8k=w([A.jZ,A.Ah,A.A1],x.x)
D.dh_=w(["Mail","SMS","Ad"],x.s)
D.d92=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.i0d=new C.Br(D.b4T,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aET,D.d8k,D.dh_,D.d92)
D.afq=new C.LI(1,"flip")
D.dty=w([A.rv,A.E6,A.ry],x.x)
D.dno=w(["Unlock","Verify","Secure"],x.s)
D.d70=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.i0c=new C.Br(D.afq,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aEn,D.dty,D.dno,D.d70)
D.b4U=new C.LI(2,"towers")
D.dlZ=w([A.Af,A.mH,A.ix],x.x)
D.dlq=w(["Save","Grow","Earn"],x.s)
D.cVx=w(["","",""],x.s)
D.i0e=new C.Br(D.b4U,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a78,D.dlZ,D.dlq,D.cVx)
D.afr=new C.LI(3,"assemble")
D.duF=w([A.oi,A.fQ,A.ef],x.x)
D.dge=w(["Launch","Charge","Shine"],x.s)
D.dqt=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.i0g=new C.Br(D.afr,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aCH,D.duF,D.dge,D.dqt)
D.b4V=new C.LI(4,"carousel")
D.duq=w([A.be,A.ev],x.O)
D.dha=w([A.np,A.asi,A.Rf],x.x)
D.daO=w(["Explore","Discover","Learn"],x.s)
D.dnR=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.i0b=new C.Br(D.b4V,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.duq,D.dha,D.daO,D.dnR)
D.b4W=new C.LI(5,"burst")
D.dll=w([A.hZ,A.v3],x.O)
D.d8W=w([A.ko,A.m6,A.hQ],x.x)
D.d9k=w(["Cheer","Win","Love"],x.s)
D.dbX=w(["Make some noise","First place","Share the joy"],x.s)
D.i0f=new C.Br(D.b4W,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dll,D.d8W,D.d9k,D.dbX)
D.aE4=w([D.i0d,D.i0c,D.i0e,D.i0g,D.i0b,D.i0f],B.as("N<Br>"))
D.fjL=new B.b1("skin","Skin",A.a4D)
D.flv=new B.b1("muscle","Muscles",A.QN)
D.fl7=new B.b1("organ","Organs",A.hQ)
D.bUz=new B.a_(62747,"MaterialIcons",!1)
D.flh=new B.b1("bone","Skeleton",D.bUz)
D.flD=new B.b1("vessel","Blood vessels",A.qc)
D.dm4=w([D.fjL,D.flv,D.fl7,D.flh,D.flD],x.r)
D.ftB=new C.vQ("Simple legs","Light. Land gently.",0.15,0.2)
D.ftD=new C.vQ("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.ftG=new C.vQ("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Et=w([D.ftB,D.ftD,D.ftG],x._)
D.foI=new B.b7(["beat",0.18,0.28,0])
D.fq7=new B.b7(["burst",0.7,0.2,0])
D.fqi=new B.b7(["delay",0.45,0.5,1])
D.fpQ=new B.b7(["ripple",0.75,0.6,3])
D.dfV=w([D.foI,D.fq7,D.fqi,D.fpQ],x.e)
D.dsO=w([Q.lm,R.L_,F.W9],x.u)
D.hY3=new C.H9("First spark","A clock lights a burst and a ripple",D.dfV,D.dsO)
D.fpt=new B.b7(["beat",0.15,0.3,1])
D.fmX=new B.b7(["ripple",0.62,0.15,0])
D.fqe=new B.b7(["delay",0.4,0.45,0])
D.fp5=new B.b7(["ripple",0.7,0.45,0])
D.foC=new B.b7(["delay",0.4,0.7,1])
D.fpT=new B.b7(["shake",0.75,0.75,0])
D.dI9=w([D.fpt,D.fmX,D.fqe,D.fp5,D.foC,D.fpT],x.e)
D.eSW=new B.y(2,4)
D.aUg=new B.y(4,5)
D.dk7=w([Q.lm,R.L_,F.W9,D.eSW,D.aUg],x.u)
D.hY5=new C.H9("Heartbeat","Two thumps, then a shake",D.dI9,D.dk7)
D.foO=new B.b7(["dice",0.15,0.7,1])
D.fqk=new B.b7(["echo",0.4,0.7,0])
D.fp1=new B.b7(["comet",0.7,0.5,4])
D.fq8=new B.b7(["burst",0.72,0.2,1])
D.fpq=new B.b7(["burst",0.3,0.25,0])
D.foP=new B.b7(["pop",0.55,0.85,0])
D.cAV=w([D.foO,D.fqk,D.fp1,D.fq8,D.fpq,D.foP],x.e)
D.eSf=new B.y(1,3)
D.eSg=new B.y(1,4)
D.aUc=new B.y(0,5)
D.duk=w([Q.lm,S.wk,D.eSf,D.eSg,D.aUc],x.u)
D.hY4=new C.H9("Fireworks","Dice launch comets that burst in colour",D.cAV,D.duk)
D.foW=new B.b7(["beat",0.15,0.2,2])
D.fpD=new B.b7(["chance",0.4,0.2,0])
D.foL=new B.b7(["ball",0.7,0.12,3])
D.fov=new B.b7(["chance",0.4,0.5,1])
D.fqj=new B.b7(["ball",0.3,0.08,1])
D.fnM=new B.b7(["ripple",0.7,0.55,3])
D.ctQ=w([D.foW,D.fpD,D.foL,D.fov,D.fqj,D.fnM],x.e)
D.eSX=new B.y(2,5)
D.cRE=w([Q.lm,S.wk,R.abo,F.Wa,D.eSX],x.u)
D.hY2=new C.H9("Rain","Balls fall at random and splash",D.ctQ,D.cRE)
D.fpE=new B.b7(["beat",0.12,0.45,2])
D.fq9=new B.b7(["toggle",0.38,0.2,0])
D.fqg=new B.b7(["wash",0.7,0.15,4])
D.foN=new B.b7(["count3",0.38,0.45,0])
D.fqb=new B.b7(["burst",0.72,0.4,0])
D.fpr=new B.b7(["light",0.55,0.7,1])
D.fow=new B.b7(["pop",0.8,0.8,4])
D.dxv=w([D.fpE,D.fq9,D.fqg,D.foN,D.fqb,D.fpr,D.fow],x.e)
D.eTt=new B.y(3,6)
D.cx2=w([Q.lm,S.wk,R.abo,F.Wa,D.aUc,D.eTt],x.u)
D.hY0=new C.H9("Disco","A beat drives lights, washes and bursts",D.dxv,D.cx2)
D.fqn=new B.b7(["button",0.12,0.2,0])
D.foc=new B.b7(["delay",0.34,0.2,1])
D.fqm=new B.b7(["light",0.56,0.2,1])
D.fqf=new B.b7(["delay",0.56,0.45,1])
D.fpF=new B.b7(["ball",0.34,0.6,0])
D.fou=new B.b7(["delay",0.34,0.8,1])
D.fmN=new B.b7(["burst",0.7,0.8,5])
D.cgT=w([D.fqn,D.foc,D.fqm,D.fqf,D.fpF,D.fou,D.fmN],x.e)
D.eVJ=new B.y(5,6)
D.dDQ=w([Q.lm,S.wk,F.W9,F.Wa,D.aUg,D.eVJ],x.u)
D.hY1=new C.H9("Domino","Tap the button and watch it run down the line",D.cgT,D.dDQ)
D.aEr=w([D.hY3,D.hY5,D.hY4,D.hY2,D.hY0,D.hY1],B.as("N<H9>"))
D.ds_=w([0.05,0.15,0.25],x.n)
D.dt1=w([1.5,3,4.5,9,12],x.n)
D.fhY=new B.b1("dice","Dice",A.oc)
D.fjh=new B.b1("coin","Coin",V.A8)
D.fly=new B.b1("num","Number",A.xE)
D.dtg=w([D.fhY,D.fjh,D.fly],x.r)
D.dtk=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aEx=w([A.c1,A.aQ,A.bf,A.aH,A.bk,A.c5,A.cX,A.fL],x.O)
D.dur=w([A.c5,A.aH,A.eI,A.bf],x.O)
D.dvE=w([],x.h)
D.eJY=new C.es("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eK3=new C.es("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eKI=new C.es("crank","Hand crank","\ud83d\udd04",A.cX,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eKk=new C.es("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eJQ=new C.es("buck","Step-down converter","\ud83d\udd3d",A.fL,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eKi=new C.es("regulator","5 V regulator","\ud83e\uddca",A.bQ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eKN=new C.es("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eKu=new C.es("ldr","Light sensor","\ud83c\udf1e",A.eI,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eK8=new C.es("switch","Switch","\ud83c\udf9a\ufe0f",A.bk,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eKK=new C.es("fuse","Fuse","\ud83e\uddef",A.c1,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eJI=new C.es("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fL,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eKv=new C.es("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eKx=new C.es("bulb","Light bulb","\ud83d\udca1",A.eI,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eK5=new C.es("led","LED","\ud83d\udd34",A.aC,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eK9=new C.es("motor","Motor","\u2699\ufe0f",A.bQ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eKr=new C.es("buzzer","Buzzer","\ud83d\udd14",A.c5,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eJZ=new C.es("heater","Heater","\ud83d\udd25",A.cX,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eKm=new C.es("capacitor","Capacitor","\ud83e\udeab",A.cw,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eKe=new C.es("radio","Radio","\ud83d\udcfb",A.oP,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eKb=new C.es("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.be,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eJP=new C.es("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eJW=new C.es("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eK1=new C.es("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eKP=new C.es("speaker","Speaker","\ud83d\udd0a",A.c5,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eKE=new C.es("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eKh=new C.es("calculator","Calculator","\ud83e\uddee",A.Nv,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eJV=new C.es("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cw,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eKO=new C.es("router","WiFi router","\ud83d\udcf6",A.fL,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eKR=new C.es("siren","Siren","\ud83d\udea8",A.aC,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eJL=new C.es("toycar","Toy car","\ud83d\ude97",A.cX,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eKS=new C.es("kettle","Kettle","\ud83e\uded6",A.ne,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eJT=new C.es("lamp","Desk lamp","\ud83e\ude94",A.eI,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eK4=new C.es("lights","Party lights","\ud83c\udf84",A.oP,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eKf=new C.es("fridge","Fridge","\ud83e\uddca",A.hm,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eJN=new C.es("washer","Washing machine","\ud83e\udee7",A.cw,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eKF=new C.es("blender","Blender","\ud83e\udd64",A.c1,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eKc=new C.es("drone","Drone","\ud83d\ude81",A.bQ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eJS=new C.es("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eKg=new C.es("torch","Torch","\ud83d\udd26",A.bO,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eKC=new C.es("neon","Neon sign","\ud83e\udea7",A.c5,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eJO=new C.es("microwave","Microwave","\ud83c\udf72",A.cX,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eKw=new C.es("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eK0=new C.es("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eKq=new C.es("console","Game console","\ud83c\udfae",A.bk,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eKH=new C.es("heartmon","Heart monitor","\ud83e\ude7a",A.hJ,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eJM=new C.es("aquarium","Aquarium","\ud83d\udc20",A.be,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eKl=new C.es("lighthouse","Lighthouse","\ud83d\uddfc",A.eI,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eKt=new C.es("discoball","Disco ball","\ud83e\udea9",A.oP,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eKM=new C.es("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eJK=new C.es("toaster","Toaster","\ud83c\udf5e",A.ec,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eKQ=new C.es("ledstrip","LED strip","\ud83c\udf08",A.c5,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eKB=new C.es("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eKn=new C.es("hairdryer","Hair dryer","\ud83d\udca8",A.hZ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eKz=new C.es("headphones","Headphones","\ud83c\udfa7",A.bk,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eJU=new C.es("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eKL=new C.es("tablet","iPad Pro M5","\ud83d\udcf2",A.cw,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eJH=new C.es("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hJ,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eKd=new C.es("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eK6=new C.es("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eKs=new C.es("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.wV,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eJJ=new C.es("iphonefold","iPhone Fold","\ud83d\udcf1",A.b_,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eJX=new C.es("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.di,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eKJ=new C.es("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cI,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eKo=new C.es("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bh,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eKj=new C.es("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c9,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eKA=new C.es("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aC,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eK7=new C.es("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eKp=new C.es("honor","Honor Magic V5","\ud83d\udcf1",A.cw,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eKy=new C.es("vivo","vivo X300 Pro","\ud83d\udcf1",A.cX,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eKD=new C.es("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eJG=new C.es("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ci,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eKa=new C.es("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cI,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eK2=new C.es("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.be,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eJR=new C.es("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eI,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eK_=new C.es("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aC,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eKG=new C.es("vision","Apple Vision Pro","\ud83e\udd7d",A.bk,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.U0=w([D.eJY,D.eK3,D.eKI,D.eKk,D.eJQ,D.eKi,D.eKN,D.eKu,D.eK8,D.eKK,D.eJI,D.eKv,D.eKx,D.eK5,D.eK9,D.eKr,D.eJZ,D.eKm,D.eKe,D.eKb,D.eJP,D.eJW,D.eK1,D.eKP,D.eKE,D.eKh,D.eJV,D.eKO,D.eKR,D.eJL,D.eKS,D.eJT,D.eK4,D.eKf,D.eJN,D.eKF,D.eKc,D.eJS,D.eKg,D.eKC,D.eJO,D.eKw,D.eK0,D.eKq,D.eKH,D.eJM,D.eKl,D.eKt,D.eKM,D.eJK,D.eKQ,D.eKB,D.eKn,D.eKz,D.eJU,D.eKL,D.eJH,D.eKd,D.eK6,D.eKs,D.eJJ,D.eJX,D.eKJ,D.eKo,D.eKj,D.eKA,D.eK7,D.eKp,D.eKy,D.eKD,D.eJG,D.eKa,D.eK2,D.eJR,D.eK_,D.eKG],B.as("N<es>"))
D.dwi=w([5,10,15,25,45,60],x.t)
D.dwI=w([-0.045,0.03,-0.015],x.n)
D.aF0=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vZ=w([0.05,0.2,0.35],x.n)
D.aF4=w([A.d1,A.iM,A.v6,A.GN],x.O)
D.bcN=new B.ab(0,A.H,A.i0,A.dP,6)
D.dzL=w([D.bcN],x.V)
D.eRo=new B.y(0,"AND")
D.eSi=new B.y(1,"Adder")
D.eSY=new B.y(2,"Blinker")
D.eTu=new B.y(3,"Memory")
D.dAy=w([D.eRo,D.eSi,D.eSY,D.eTu],x.L)
D.aFe=w([-104,0,104],x.n)
D.aFg=w([-14,3],x.n)
D.dBy=w([-8,0,8],x.n)
D.aFo=w([-92,0,92],x.n)
D.dC2=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fty=new C.vQ("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.ftF=new C.vQ("Medium tank","Balanced.",0.35,1)
D.ftE=new C.vQ("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Ug=w([D.fty,D.ftF,D.ftE],x._)
D.on=w([0.04,0.2,0.36],x.n)
D.aFA=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.fl6=new B.b1(D.b4T,"Fold",V.atf)
D.fk0=new B.b1(D.afq,"Flip",A.DN)
D.bUQ=new B.a_(62889,"MaterialIcons",!1)
D.flu=new B.b1(D.b4U,"Rise",D.bUQ)
D.ats=new B.a_(983870,"MaterialIcons",!1)
D.fhi=new B.b1(D.afr,"Assemble",D.ats)
D.fhv=new B.b1(D.b4V,"Spin",D.arV)
D.fhp=new B.b1(D.b4W,"Pop",A.ko)
D.dDN=w([D.fl6,D.fk0,D.flu,D.fhi,D.fhv,D.fhp],B.as("N<+(LI,o,a_)>"))
D.aFF=w([A.c5,A.eI,A.bw,A.aH,A.bk,A.c1],x.O)
D.dEd=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dFl=w([3,4.5,5,6,9],x.n)
D.bds=new B.ab(0,A.H,A.ba,A.J,16)
D.dFP=w([D.bds],x.V)
D.hbe=new B.D("\ud83e\uddcd",null,S.LU,null,null,null,null,null,null,null,null,null)
D.cfQ=new B.Jh(5,null,null,A.by,A.c5,null,null,null,null)
D.fAE=new B.a5(150,null,D.cfQ,null)
D.fTb=new B.G(!0,A.ac,null,null,null,null,14,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hez=new B.D("Getting the body ready...",null,D.fTb,null,null,null,null,null,null,null,null,null)
D.hbh=new B.D("Real 3D anatomy, kept on your phone",null,Af.BD,null,null,null,null,null,null,null,null,null)
D.dFS=w([D.hbe,A.aB,D.fAE,A.af,D.hez,A.at,D.hbh],x.p)
D.dGr=w(["solar","turbine","crank","pot"],x.s)
D.dGW=w([0,0.35,0.75,1],x.n)
D.dIp=w(["volts","level","ohms","on"],x.s)
D.bpc=new B.u(1,0.23137254901960785,0.43529411764705883,0.8470588235294118,A.q)
D.bAn=new B.u(1,0.0392156862745098,0.10196078431372549,0.25098039215686274,A.q)
D.dIt=w([A.ala,D.bpc,A.m0,D.bAn],x.O)
D.dK1=w([A.jZ,A.Ah,A.A1,A.rv,A.E6,A.ry,A.Af,A.mH,A.ix,A.oi,A.fQ,A.ef,A.hQ,A.ii,A.m6,A.kP,A.rx,A.qa,A.lH,A.Iq,A.vL,A.DM,A.DK,A.Rc,A.Ip,A.DX,A.QN,A.asE,H.ato,A.ko],x.x)
D.ezH={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hPX=new C.z3("Switch",F.p5,A.bu,0,"Tap it to turn it ON or OFF.")
D.hPT=new C.z3("Blinker",A.mG,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hPU=new C.z3("AND",D.ats,A.cw,2,"ON only when BOTH inputs are ON.")
D.bWm=new B.a_(63671,"MaterialIcons",!1)
D.hPS=new C.z3("OR",D.bWm,A.bk,2,"ON when EITHER input is ON.")
D.hPV=new C.z3("XOR",A.a4v,A.c5,2,"ON when the inputs are DIFFERENT.")
D.hPP=new C.z3("NAND",A.tP,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bVq=new B.a_(63176,"MaterialIcons",!1)
D.hPQ=new C.z3("NOR",D.bVq,A.fL,2,"ON only when BOTH inputs are OFF.")
D.hPR=new C.z3("NOT",W.DZ,A.cX,1,"Flips the signal: ON becomes OFF.")
D.hPW=new C.z3("Light",A5.lf,A.eI,1,"Glows when its input is ON.")
D.hPY=new C.z3("Buzzer",T.p7,A.c1,1,"Beeps while its input is ON.")
D.AX=new B.bl(D.ezH,[D.hPX,D.hPT,D.hPU,D.hPS,D.hPV,D.hPP,D.hPQ,D.hPR,D.hPW,D.hPY],B.as("bl<o,z3>"))
D.eBx={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.Bo=new C.KG(0,"tv")
D.fv9=new C.mt("Samsung Neo QLED 8K",D.Bo,F.z4,A.aH)
D.fv_=new C.mt("LG OLED evo G5",D.Bo,A.ez,A.hJ)
D.fuR=new C.mt("Sony Bravia 9",D.Bo,A.tb,A.bv)
D.fuV=new C.mt("Apple TV 4K",D.Bo,A.dV,A.bP)
D.fuS=new C.mt("Bang and Olufsen Beovision",D.Bo,F.Cq,F.wV)
D.abJ=new C.KG(1,"iphone")
D.aVa=new C.mt("iPhone 18 Pro Max",D.abJ,D.amK,A.ci)
D.Bq=new C.KG(3,"fold")
D.bAB=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fv4=new C.mt("iPhone Fold",D.Bq,D.bAB,A.b_)
D.Bp=new C.KG(2,"android")
D.fv5=new C.mt("Samsung Galaxy S26 Ultra",D.Bp,F.Ns,A.di)
D.bsP=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fuY=new C.mt("Samsung Galaxy Z Fold7",D.Bq,D.bsP,A.cI)
D.fuU=new C.mt("Google Pixel 10 Pro XL",D.Bp,A.d1,A.bh)
D.fv1=new C.mt("Xiaomi 16 Ultra",D.Bp,A.iu,A.c9)
D.fuX=new C.mt("Huawei Mate 80 Pro Max",D.Bp,A.eu,A.aC)
D.fuT=new C.mt("OPPO Find X9 Ultra",D.Bp,A.ej,A.bf)
D.fvb=new C.mt("Honor Magic V5",D.Bq,A.dl,A.cw)
D.fuZ=new C.mt("vivo X300 Pro",D.Bp,A.h_,A.cX)
D.aVb=new C.KG(4,"tablet")
D.fv3=new C.mt("iPad Pro M5",D.aVb,A.d1,A.aH)
D.abK=new C.KG(5,"reader")
D.fvc=new C.mt("Kindle Scribe",D.abK,A.cU,A.bv)
D.y3=new C.KG(6,"computer")
D.fv2=new C.mt("MacBook Pro M5 Max",D.y3,A.d1,A.ci)
D.fv8=new C.mt("iMac 32 inch",D.y3,A.bP,A.cI)
D.fv0=new C.mt("Pro Display XDR 8K",D.y3,A.iu,A.be)
D.fuW=new C.mt("Sony Laser Projector",D.y3,A.cx,A.eI)
D.fv6=new C.mt("Luxury car touchscreen",D.y3,M.ni,A.aC)
D.fva=new C.mt("Apple Vision Pro",D.y3,A.cz,A.bk)
D.fv7=new C.mt("Apple Watch Ultra",D.Bq,F.Cq,A.bw)
D.mN=new B.bl(D.eBx,[D.fv9,D.fv_,D.fuR,D.fuV,D.fuS,D.aVa,D.fv4,D.fv5,D.fuY,D.fuU,D.fv1,D.fuX,D.fuT,D.fvb,D.fuZ,D.fv3,D.fvc,D.fv2,D.fv8,D.fv0,D.fuW,D.fv6,D.fva,D.fv7],B.as("bl<o,mt>"))
D.d7C=w([A.z],x.M)
D.d86=w([A.aw,A.aD],x.M)
D.dj2=w([A.aw,A.z,A.aD],x.M)
D.dkN=w([A.aw,A.lU,A.z,A.ls,A.aD],x.M)
D.dAu=w([A.aw,A.lU,A.a5,A.a9,A.ls,A.aD],x.M)
D.dPc=new B.d2([1,D.d7C,2,D.d86,3,D.dj2,4,A.aGg,5,D.dkN,6,D.dAu],B.as("d2<F,ah<dl>>"))
D.eCl={Calm:0,Box:1,Sleep:2}
D.cOY=w([4,2,6,0],x.n)
D.cP4=w([4,4,4,4],x.n)
D.cP5=w([4,7,8,0],x.n)
D.UJ=new B.bl(D.eCl,[D.cOY,D.cP4,D.cP5],B.as("bl<o,ah<H>>"))
D.ezU={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.yD=new C.a2D(0,"source")
D.dkb=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hWH=new C.qO("Clock",A.mG,D.yD,A.bw,D.dkb)
D.hWD=new C.qO("Button",A.E1,D.yD,A.aQ,A.M)
D.dFy=w(["random","quick","slow"],x.s)
D.hWO=new C.qO("Dice",A.oc,D.yD,A.c5,D.dFy)
D.bVZ=new B.a_(63484,"MaterialIcons",!1)
D.Gc=new C.a2D(1,"logic")
D.dKY=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hWK=new C.qO("Delay",D.bVZ,D.Gc,A.cw,D.dKY)
D.dwq=w(["fast","mid","slow"],x.s)
D.hWP=new C.qO("Echo",A.asU,D.Gc,A.bk,D.dwq)
D.hWM=new C.qO("Every 2nd",W.DZ,D.Gc,A.fL,A.M)
D.bVF=new B.a_(63309,"MaterialIcons",!1)
D.hWJ=new C.qO("Every 3rd",D.bVF,D.Gc,A.aH,A.M)
D.cga=w(["50%","25%","75%"],x.s)
D.hWR=new C.qO("Chance",A8.atu,D.Gc,A.cX,D.cga)
D.rZ=new C.a2D(2,"out")
D.hWF=new C.qO("Light",A5.lf,D.rZ,A.eI,A.M)
D.hWG=new C.qO("Burst",A.ko,D.rZ,A.c5,A.M)
D.hWE=new C.qO("Ripple",A.Am,D.rZ,A.be,A.M)
D.hWN=new C.qO("Ball",A.at6,D.rZ,A.cX,A.M)
D.hWL=new C.qO("Comet",A.oi,D.rZ,A.bk,A.M)
D.bXv=new B.a_(983669,"MaterialIcons",!1)
D.hWQ=new C.qO("Shake",D.bXv,D.rZ,A.c1,A.M)
D.hWS=new C.qO("Pop",A.DJ,D.rZ,A.bf,A.M)
D.hWI=new C.qO("Wash",A.QR,D.rZ,A.pN,A.M)
D.nt=new B.bl(D.ezU,[D.hWH,D.hWD,D.hWO,D.hWK,D.hWP,D.hWM,D.hWJ,D.hWR,D.hWF,D.hWG,D.hWE,D.hWN,D.hWL,D.hWQ,D.hWS,D.hWI],B.as("bl<o,qO>"))
D.eAk={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bDo=new C.h6(20,4,13,!1)
D.bDP=new C.h6(14,5,13.5,!1)
D.bDG=new C.h6(9,2.4,10,!1)
D.bDU=new C.h6(7,5,12.5,!1)
D.bDJ=new C.h6(8,3.5,12,!1)
D.bDk=new C.h6(15,2,6,!1)
D.bDS=new C.h6(45,6,13.5,!0)
D.bDA=new C.h6(10,8,13.5,!1)
D.bDs=new C.h6(25,3,12,!0)
D.bDy=new C.h6(35,4,12,!0)
D.bDz=new C.h6(40,4.5,9.5,!0)
D.bDB=new C.h6(55,3,9,!0)
D.bDl=new C.h6(18,3,9,!1)
D.bDR=new C.h6(22,4,13.5,!1)
D.bDK=new C.h6(16,5,13.5,!1)
D.bDw=new C.h6(30,4,9,!0)
D.bE2=new C.h6(5,3.5,13,!1)
D.bDE=new C.h6(25,3,13.5,!0)
D.bDN=new C.h6(14,2.5,9,!1)
D.bDD=new C.h6(6,6,13,!1)
D.bDV=new C.h6(30,1.2,5,!0)
D.bE1=new C.h6(35,3,4.5,!0)
D.bDY=new C.h6(20,4.5,7.5,!0)
D.bDC=new C.h6(55,5.5,13.5,!0)
D.bDj=new C.h6(45,5.5,13.5,!0)
D.bDO=new C.h6(40,5.5,13.5,!0)
D.bE0=new C.h6(60,6,13.5,!0)
D.anf=new C.h6(28,4,7,!0)
D.HE=new C.h6(25,4,7,!0)
D.bDv=new C.h6(30,4,7,!0)
D.bDq=new C.h6(22,4,7,!0)
D.bDr=new C.h6(24,4,7,!0)
D.bDF=new C.h6(60,3,5.5,!0)
D.bDm=new C.h6(18,9,14,!0)
D.bDt=new C.h6(25,9,14,!0)
D.ang=new C.h6(30,8,14,!0)
D.bDp=new C.h6(20,8,14,!0)
D.bDx=new C.h6(30,9,14,!0)
D.bDW=new C.h6(22,5,9.5,!0)
D.bDn=new C.h6(30,2.5,10.5,!0)
D.bDL=new C.h6(50,5.5,13.5,!0)
D.bE_=new C.h6(12,2,9.5,!1)
D.bDI=new C.h6(16,1.3,9.5,!0)
D.bDT=new C.h6(40,2.5,7,!0)
D.bDZ=new C.h6(60,1.2,4.8,!0)
D.bDX=new C.h6(18,5,13.5,!0)
D.bDQ=new C.h6(8,2,9.5,!1)
D.bDH=new C.h6(12,2.5,8,!1)
D.bDu=new C.h6(20,3.5,13.5,!0)
D.bDM=new C.h6(3.5,3,13,!1)
D.AY=new B.bl(D.eAk,[D.bDo,D.bDP,D.bDG,D.bDU,D.bDJ,D.bDk,D.bDS,D.bDA,D.bDs,D.bDy,D.bDz,D.bDB,D.bDl,D.bDR,D.bDK,D.bDw,D.bE2,D.bDE,D.bDN,D.bDD,D.bDV,D.bE1,D.bDY,D.bDC,D.bDj,D.bDO,D.bE0,D.anf,D.HE,D.bDv,D.HE,D.bDq,D.HE,D.bDr,D.anf,D.HE,D.bDF,D.bDm,D.bDt,D.ang,D.bDp,D.bDx,D.bDW,D.bDn,D.bDL,D.bE_,D.bDI,D.bDT,D.bDZ,D.HE,D.ang,D.bDX,D.bDQ,D.bDH,D.bDu,D.bDM],B.as("bl<o,h6>"))
D.ezR={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.fgM=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eVG=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eVB=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.f7G=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.f8D=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.f7C=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eTD=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.f5p=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.fgV=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.f9_=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eZe=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eTh=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eYd=new B.y("Movement","They pull your legs together and help you balance.")
D.f_f=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eVP=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.fe6=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.ffk=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.f59=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.ff2=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.f3C=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.f97=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eTo=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.f_D=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.f8M=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.f4_=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.ffb=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.f74=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eTB=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.f9K=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.fdI=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.fbF=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eRB=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.f6M=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.f6R=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.f0o=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eW6=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.f_1=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.f5D=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.fcy=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.fgR=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.f94=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eRg=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.f5P=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eSa=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.fcO=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.fe2=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.f6h=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.fd3=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eTq=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.feH=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eXy=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.fca=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.f02=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.f3U=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.f9q=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.feR=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.feJ=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.feN=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.f4s=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.fao=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.fbC=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.fes=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.f6g=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.f28=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.f0R=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.f6G=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.f9j=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.f2I=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.f3p=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eXX=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.fdZ=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eYO=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eS7=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.f0n=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eS2=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eWC=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.f0s=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eYX=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.f9G=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.f_i=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.fgx=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.f10=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.f4k=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.f7d=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eZ6=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eYQ=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dQm=new B.bl(D.ezR,[D.fgM,D.eVG,D.eVB,D.f7G,D.f8D,D.f7C,D.eTD,D.f5p,D.fgV,D.f9_,D.eZe,D.eTh,D.eYd,D.f_f,D.eVP,D.fe6,D.ffk,D.f59,D.ff2,D.f3C,D.f97,D.eTo,D.f_D,D.f8M,D.f4_,D.ffb,D.f74,D.eTB,D.f9K,D.fdI,D.fbF,D.eRB,D.f6M,D.f6R,D.f0o,D.eW6,D.f_1,D.f5D,D.fcy,D.fgR,D.f94,D.eRg,D.f5P,D.eSa,D.fcO,D.fe2,D.f6h,D.fd3,D.eTq,D.feH,D.eXy,D.fca,D.f02,D.f3U,D.f9q,D.feR,D.feJ,D.feN,D.f4s,D.fao,D.fbC,D.fes,D.f6g,D.f28,D.f0R,D.f6G,D.f9j,D.f2I,D.f3p,D.eXX,D.fdZ,D.eYO,D.eS7,D.f0n,D.eS2,D.eWC,D.f0s,D.eYX,D.f9G,D.f_i,D.fgx,D.f10,D.f4k,D.f7d,D.eZ6,D.eYQ],B.as("bl<o,+(o,o)>"))
D.dZf=new C.Wr(null)
D.dZs=new C.Ws(null)
D.e0w=new C.Wy(null)
D.e4C=new C.X8(null)
D.e4G=new C.X9(null)
D.e5e=new C.Xh(null)
D.e99=new C.XU(null)
D.ea6=new C.XV(null)
D.eej=new C.Y_(null)
D.euc=new C.Y0(null)
D.euf=new C.Y5(null)
D.ewp=new C.Yp(null)
D.ewq=new C.aaG(null)
D.eyt=new C.Yy(null)
D.eCA=new B.m(0,118)
D.eCB=new B.m(0,13)
D.eCC=new B.m(0,17)
D.eCF=new B.m(0,330)
D.eCM=new B.m(0,-17)
D.eCN=new B.m(0,-18)
D.eCO=new B.m(0,-19)
D.eCQ=new B.m(0,-28)
D.eCS=new B.m(0,-31)
D.eCT=new B.m(0,-32)
D.eCZ=new B.m(-9.5,-11)
D.eD1=new B.m(10,20)
D.eD4=new B.m(10,-13)
D.eD6=new B.m(10,-22)
D.eD7=new B.m(10,-4)
D.eDb=new B.m(11,0)
D.aax=new B.m(11,8)
D.eDh=new B.m(12,2)
D.eDi=new B.m(14,0)
D.eDj=new B.m(14,12)
D.aOD=new B.m(14,8)
D.eDk=new B.m(14,-17)
D.aOF=new B.m(14,-3)
D.aOG=new B.m(14,-4)
D.eDn=new B.m(15,0)
D.eDo=new B.m(15,-12)
D.eDr=new B.m(16,-8)
D.eDs=new B.m(18,14)
D.aOM=new B.m(20,0)
D.eDA=new B.m(20,15)
D.eDB=new B.m(20,-3)
D.eDC=new B.m(21,8)
D.eDD=new B.m(21,-36)
D.eDH=new B.m(22,10)
D.aOO=new B.m(22,8)
D.eDI=new B.m(22,-25)
D.eDJ=new B.m(24,0)
D.eDK=new B.m(24,2)
D.eDN=new B.m(24,-18)
D.eDO=new B.m(24,-22)
D.eDS=new B.m(25,8)
D.eDT=new B.m(26,0)
D.eDX=new B.m(28,-30)
D.eE3=new B.m(30,18)
D.eE4=new B.m(30,2)
D.eE7=new B.m(31,19)
D.eE9=new B.m(32,0)
D.aOS=new B.m(34,0)
D.aOT=new B.m(34,-32)
D.KE=new B.m(36,0)
D.eEm=new B.m(3,-1)
D.eEp=new B.m(40,3)
D.eED=new B.m(4,11)
D.eEG=new B.m(4,-2)
D.eEK=new B.m(5,0)
D.eEL=new B.m(5,17)
D.eEM=new B.m(5,6)
D.eER=new B.m(6,11)
D.eET=new B.m(7,-19)
D.eEZ=new B.m(8,7)
D.eF_=new B.m(8,-10)
D.eF0=new B.m(8,-14)
D.aOY=new B.m(9,0)
D.eFb=new B.m(-20.5,-17.6)
D.eFe=new B.m(-2.6,-1)
D.eFo=new B.m(2.6,1)
D.eFx=new B.m(-9,12.2)
D.eGa=new B.m(-10,12)
D.aP6=new B.m(-10,4)
D.eGe=new B.m(-11,0)
D.eGg=new B.m(-11,-34)
D.eGk=new B.m(-12,-5)
D.eGl=new B.m(-14,0)
D.eGm=new B.m(-14,13)
D.eGn=new B.m(-14,-19)
D.eGp=new B.m(-14,-23)
D.eGq=new B.m(-15,6)
D.eGt=new B.m(-16,14)
D.eGv=new B.m(-16,-8)
D.eGw=new B.m(-17,10)
D.eGx=new B.m(-17,-18)
D.eGy=new B.m(-17,-8)
D.eGA=new B.m(-18,20)
D.eGB=new B.m(-18,-9)
D.aP9=new B.m(-20,0)
D.eGD=new B.m(-20,16)
D.eGE=new B.m(-20,-9)
D.VE=new B.m(-22,8)
D.eGF=new B.m(-22,-10)
D.eGG=new B.m(-24,10)
D.eGH=new B.m(-24,11)
D.eGI=new B.m(-24,14)
D.eGJ=new B.m(-24,-22)
D.eGL=new B.m(-25,-11)
D.eGM=new B.m(-26,0)
D.eGN=new B.m(-26,-18)
D.eGO=new B.m(-27,-24)
D.eGP=new B.m(-28,-36)
D.eGQ=new B.m(-2,9)
D.eGR=new B.m(-2,-10)
D.eGS=new B.m(-2,-20)
D.eGV=new B.m(-2,-9)
D.eGX=new B.m(-32,0)
D.aPb=new B.m(-34,0)
D.eH1=new B.m(-40,3)
D.eH3=new B.m(-4,11)
D.eH4=new B.m(-4,-17)
D.eH5=new B.m(-4,-2)
D.eH9=new B.m(-5,0)
D.eHa=new B.m(-5,20)
D.eHb=new B.m(-5,6)
D.eHc=new B.m(-6,6)
D.eHd=new B.m(-6,-42)
D.aPd=new B.m(-7,-19)
D.eHf=new B.m(-7,-24)
D.eHg=new B.m(-8,-1)
D.eHj=new B.m(-8,-9)
D.aaH=new B.m(-9,0)
D.eHk=new B.m(-9,1)
D.eHm=new B.m(-9,-23)
D.h2o=new B.D("Thinking\u2026",null,N.hI,null,null,null,null,null,null,null,null,null)
D.eIo=new B.C(A.jE,D.h2o,null)
D.hjs=new B.D("Start from a ready-made board",null,A.fK,null,null,null,null,null,null,null,null,null)
D.eIC=new B.C(A.vo,D.hjs,null)
D.bLs=new B.R(4,0,4,14)
D.fYp=new B.G(!0,A.aF,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3p=new B.D("Games and little helpers for a spare minute.",null,D.fYp,null,null,null,null,null,null,null,null,null)
D.eIP=new B.C(D.bLs,D.h3p,null)
D.dx7=w([A.hX,A.bl],x.O)
D.eQ2=new B.bU(A.z,0.5,A.w,null,0,D.dx7,null,null)
D.eQ3=new B.bU(A.z,0.5,A.w,null,0,D.aFW,null,null)
D.dmQ=w([A.c,A.bQ],x.O)
D.eQ5=new B.bU(A.z,0.5,A.w,null,0,D.dmQ,null,null)
D.dGI=w([A.bP,A.cz],x.O)
D.aU5=new B.bU(A.z,0.5,A.w,null,0,D.dGI,null,null)
D.cZg=w([A.c,A.bP],x.O)
D.eQa=new B.bU(A.n_,0.5,A.w,null,0,D.cZg,null,null)
D.bAF=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dEy=w([A.fy,D.bAF],x.O)
D.eQf=new B.bU(A.n_,0.5,A.w,null,0,D.dEy,null,null)
D.cSb=w([A.d1,A.cx],x.O)
D.eQg=new B.bU(A.z,0.5,A.w,null,0,D.cSb,null,null)
D.d6m=w([A.ha,A.aQ,A.de],x.O)
D.eQj=new B.bU(A.n_,0.5,A.w,null,0,D.d6m,null,null)
D.dxS=w([A.cz,M.ni],x.O)
D.eQk=new B.bU(A.n_,0.5,A.w,null,0,D.dxS,null,null)
D.eQp=new B.bU(A.z,0.5,A.w,null,0,D.aC7,null,null)
D.dHD=w([A.cz,A.ip],x.O)
D.eQx=new B.bU(A.z,0.5,A.w,null,0,D.dHD,null,null)
D.dgj=w([A.iM,A.bl],x.O)
D.eQA=new B.bU(A.n_,0.5,A.w,null,0,D.dgj,null,null)
D.aUa=new B.aQ(9,9)
D.eQG=new B.aQ(1.4,1.4)
D.eQI=new B.aQ(2.5,2.5)
D.frD=new B.a4(10,-8,18,-2)
D.frE=new B.a4(14,-14,20,14)
D.frG=new B.a4(20,-2,30,2)
D.frL=new B.a4(4,-13,30,-3)
D.frR=new B.a4(8,-7,12,7)
D.fs4=new B.a4(-12,12,12,19)
D.fs5=new B.a4(-12,14,12,22)
D.fs6=new B.a4(-12,-22,12,8)
D.fs7=new B.a4(-12,-25,12,19)
D.fs8=new B.a4(-12,-26,12,-6)
D.fs9=new B.a4(-12,-4,12,14)
D.fsb=new B.a4(-14,20,14,24)
D.fsc=new B.a4(-14,6,14,10)
D.fsd=new B.a4(-14,-17,14,15)
D.fse=new B.a4(-14,-26,14,18)
D.fsf=new B.a4(-14,-26,14,-14)
D.fsg=new B.a4(-14,-4,14,20)
D.fsi=new B.a4(-15,-29,15,25)
D.fsj=new B.a4(-16,-16,16,16)
D.fsm=new B.a4(-16,-22,-9,18)
D.fsn=new B.a4(-16,-24,16,-10)
D.fsp=new B.a4(-16,-2,16,20)
D.fsr=new B.a4(-18,20,18,24)
D.fss=new B.a4(-18,-18,18,20)
D.fst=new B.a4(-20,12,20,22)
D.fsu=new B.a4(-20,-28,20,26)
D.fsv=new B.a4(-22,15,22,19)
D.aUR=new B.a4(-22,-26,22,24)
D.fsx=new B.a4(-24,-12,10,22)
D.fsy=new B.a4(-24,-14,22,8)
D.fsz=new B.a4(-24,-6,24,20)
D.aUS=new B.a4(-24,-9,24,9)
D.fsA=new B.a4(-25,14,25,19)
D.fsB=new B.a4(-26,-14,14,8)
D.fsC=new B.a4(-26,-4,26,20)
D.fsD=new B.a4(-26,-6,4,6)
D.aUT=new B.a4(-28,-13,28,13)
D.fsE=new B.a4(-28,-16,28,16)
D.fsF=new B.a4(-28,-16,28,8)
D.fsG=new B.a4(-28,-22,28,22)
D.fsH=new B.a4(-29,-11,29,11)
D.fsI=new B.a4(-30,-12,30,14)
D.fsJ=new B.a4(-30,-14,0,14)
D.fsK=new B.a4(-30,-18,30,20)
D.fsL=new B.a4(-30,-28,30,14)
D.fsM=new B.a4(-30,-2,30,18)
D.fsN=new B.a4(-30,-4,30,18)
D.fsO=new B.a4(-32,-17,32,17)
D.fsP=new B.a4(-32,-28,32,18)
D.fsQ=new B.a4(-33,-21,33,17)
D.fsR=new B.a4(-34,0,34,10)
D.fsS=new B.a4(-34,14,34,26)
D.abA=new B.a4(-34,-18,34,18)
D.fsT=new B.a4(-36,-24,36,20)
D.fsU=new B.a4(-38,-22,38,22)
D.fsW=new B.a4(-3,12,3,22)
D.fsX=new B.a4(-3,5,3,15)
D.ft0=new B.a4(-46,-34,46,28)
D.ft2=new B.a4(-48,-3,48,3)
D.ft5=new B.a4(-6,18,24,24)
D.ft6=new B.a4(-6,5,6,12)
D.ft7=new B.a4(-6,-22,6,-15)
D.ftb=new B.a4(-9,-16,9,22)
D.ftc=new B.a4(-4.5,-24,4.5,-21.2)
D.fte=new B.a4(14,-9,17.5,9)
D.eBH={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aW_=new B.dd(D.eBH,5,x.Q)
D.eB9={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fwT=new B.dd(D.eB9,10,x.Q)
D.fze=new B.av(24,44)
D.fzC=new B.av(54,38)
D.fzI=new B.av(66,38)
D.bi7=new B.fs(2,null,null,null,null,A.bk,null,null,null,null)
D.fAM=new B.a5(16,16,D.bi7,null)
D.aX4=new B.hZ(3,12,12,0.82,null)
D.fNM=new B.G(!0,A.wR,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI5=new B.eE("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cV,null,null,null,null,null,null,D.fNM)
D.fT_=new B.G(!0,A.l3,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIb=new B.eE("AI",null,null,A.cV,null,null,null,null,null,null,D.fT_)
D.fIt=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ_=new B.G(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJp=new B.G(!0,A.cw,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKi=new B.G(!0,A.c,null,null,null,null,13.5,A.C,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKP=new B.G(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxE=new B.d4(A.i0,A.dP,6)
D.dqa=w([D.fxE],B.as("N<d4>"))
D.fLP=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dqa,null,null,null)
D.fLU=new B.G(!0,A.eB,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLZ=new B.G(!0,A.bX,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMC=new B.G(!0,A.bX,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMK=new B.G(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNI=new B.G(!0,A.bX,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNQ=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOm=new B.G(!0,A.aF,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOS=new B.G(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOV=new B.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aGj,null,null,null)
D.fP1=new B.G(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPM=new B.G(!0,A.bF,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQV=new B.G(!0,A.vb,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRz=new B.G(!0,A.bO,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRI=new B.G(!0,A.aF,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSv=new B.G(!0,A.ms,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSG=new B.G(!0,A.cz,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZj=new B.G(!0,A.c,null,null,null,null,9.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTQ=new B.G(!0,A.j0,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU9=new B.G(!0,A.bX,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUH=new B.G(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWe=new B.G(!0,A.v,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWL=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX2=new B.G(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXq=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXt=new B.G(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYG=new B.G(!0,A.vb,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ2=new B.G(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM1=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZr=new B.D("\u26a0\ufe0f ",null,D.fM1,null,null,null,null,null,null,null,null,null)
D.fZE=new B.D("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A3.BF,null,null,null,null,null,null,null,null,null)
D.h0j=new B.D("Pick one, then change it and see what happens.",null,A3.BF,null,null,null,null,null,null,null,null,null)
D.fNd=new B.G(!0,A.ac,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1l=new B.D("What do you want to invent? Type it below, or tap an idea.",null,D.fNd,null,null,null,null,null,null,null,null,null)
D.fRu=new B.G(!0,A.c1,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1S=new B.D("Burnt out! Press Repair.",null,D.fRu,null,null,null,null,null,null,null,null,null)
D.h3_=new B.D("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.h3D=new B.D("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h5,null,null,null,null,null,null,null,null,null)
D.h4g=new B.D("Make it yours",null,A.jr,null,null,null,null,null,null,null,null,null)
D.h7v=new B.D("5G",null,A4.aYD,null,null,null,null,null,null,null,null,null)
D.h8x=new B.D("Pick how big the screen is on the board",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fUr=new B.G(!0,A.bX,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8J=new B.D("WHAT HAPPENS",null,D.fUr,null,null,null,null,null,null,null,null,null)
D.hau=new B.D("Check",null,null,null,null,null,null,null,null,null,null,null)
D.hb8=new B.D("Change the words and pictures on the three slabs.",null,A3.BF,null,null,null,null,null,null,null,null,null)
D.hbl=new B.D("All the parts and wires will be removed.",null,A.hH,null,null,null,null,null,null,null,null,null)
D.hbG=new B.D("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.hcf=new B.D("Tap the crank on the board again and again to spin it faster.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.hdu=new B.D("\ud83c\udfaf Challenges",null,A.dw,null,null,null,null,null,null,null,null,null)
D.he0=new B.D("Remove this part",null,A1.aYd,null,null,null,null,null,null,null,null,null)
D.hel=new B.D("Clear the board?",null,A.du,null,null,null,null,null,null,null,null,null)
D.fTR=new B.G(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.heD=new B.D("How the Lab works",null,D.fTR,null,null,null,null,null,null,null,null,null)
D.fKv=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.heY=new B.D("Electronics Lab",null,D.fKv,null,null,null,null,A.a2,null,1,null,null)
D.hf1=new B.D("?",null,R.aZR,null,null,null,null,null,null,null,null,null)
D.hgp=new B.D("Ready-made circuits",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hh4=new B.D("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fX7=new B.G(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hkC=new B.D("\u26a0 There is no air here, so a parachute will not work.",null,D.fX7,null,null,null,null,null,null,null,null,null)
D.hlN=new B.D("Download the scene (GIF)",null,A.cK,null,null,null,null,null,null,null,null,null)
D.hlQ=new B.D("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,A1.aYa,null,null,null,null,null,null,null,null,null)
D.hmm=new B.D("NGMY",null,A.wr,null,null,null,null,null,null,null,null,null)
D.hmz=new B.D("You build a machine. A little light runs along the wires, and every part it touches does something.",null,Ah.Xm,null,null,null,null,null,null,null,null,null)
D.hmY=new B.D("Tap it to change its setting. Drag from the right dot to connect.",null,A.mg,null,null,null,null,null,null,null,null,null)
D.ho4=new B.D("TOOLBOX",null,Ae.acZ,null,null,null,null,null,null,null,null,null)
D.hMy=new B.bb("electronics-part-card",x.W)
D.hMA=new B.bb("device-learn-more",x.W)
D.hMG=new B.bb("device-remote",x.W)
D.hML=new B.bb("device-picture",x.W)
D.hNj=new B.bb("electronics-part-about",x.W)
D.hNq=new B.bb("body-loading",x.W)
D.hNw=new B.bb("device-fullscreen",x.W)
D.hNT=new B.bb("core-protocol-back",x.W)
D.hNY=new B.bb("core-protocol-title-frame",x.W)})();(function staticFields(){$.hI7=null
$.hI3=null
$.hI4=null
$.hP1=0
$.ii5=B.S(x.N,B.as("iS"))
$.iiF=B.S(x.N,B.as("iS"))
$.aRt=B.S(x.N,B.as("iS"))
$.hKS=A.aA})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"iRl","bJV",()=>{var u="led"
return B.a([C.aBF("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fCN(),u),C.aBF("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fCO(),u),C.aBF("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fCP(),u),C.aBF("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fCW(),u),C.aBF("Not both","Make the light go OFF only when both switches are ON.",2,new C.fCX(),u),C.aBF("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fCY(),"buzzer")],B.as("N<bfy>"))})
w($,"iRN","bJW",()=>B.a([C.S1("UNIVERSE","Earth, space and gravity",A.Rf,A.aH,new C.fDd()),C.S1("ELECTRONICS LAB","Batteries, wires, real circuits",An.vA,A.aH,new C.fDe()),C.S1("DISCOVERY LAB","Body Explorer: a real 3D human",D.bUT,A.bf,new C.fDf()),C.S1("TOOLBOX","Converter, clock, games",H.as5,A.cX,new C.fDg()),C.S1("REACTION LAB","Wire parts together",A.E5,A.bw,new C.fDh()),C.S1("SPARK PAINTER","Paint with light",A.Io,A.c5,new C.fDi()),C.S1("ROCKET LANDER","Land softly on the pad",A.oi,A.aH,new C.fDj()),C.S1("TITLE ANIMATOR","Make a moving title",A.xF,A.bu,new C.fDk()),C.S1("CIRCUIT LAB","Connect logic, learn it",A.a4T,A.cw,new C.fDl())],B.as("N<by3>")))
w($,"iTB","qZ",()=>{var u,t,s=B.S(x.N,x.C)
for(u=0;u<76;++u){t=D.U0[u]
s.n(0,t.a,t)}return s})
v($,"imN","hY6",()=>B.aqk(0))
w($,"iR3","hY7",()=>{var u=B.csR()
u.seC(0,A.c.j(0.06))
u.c=2.2
u.d=A.bG
return u})
w($,"iRm","akt",()=>B.a([C.GU("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fCZ()),C.GU("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fD_()),C.GU("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fD0()),C.GU("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fD1()),C.GU("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fD2()),C.GU("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fCQ()),C.GU("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fCR()),C.GU("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fCS()),C.GU("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fCT()),C.GU("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fCU()),C.GU("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fCV())],B.as("N<bfz>")))
w($,"iRP","hYB",()=>B.a([C.a39("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c9,new C.fDt()),C.a39("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c1,A.bC,new C.fDu()),C.a39("Breathe","Calm down in a minute","\ud83e\udee7",A.fL,A.cI,new C.fDv()),C.a39("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b_,new C.fDw()),C.a39("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.ci,new C.fDx()),C.a39("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.bh,new C.fDy()),C.a39("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.b7,new C.fDz()),C.a39("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bk,A.az,new C.fDA())],B.as("N<bzn>")))})()};
(a=>{a["4slDF6YfqaNayUsIYUPLK3kLhN4="]=a.current})($__dart_deferred_initializers__);