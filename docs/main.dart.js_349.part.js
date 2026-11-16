((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A3,Z,A_,A4,A0,S,A5,A6,A7,A8,A9,A1,N,Aa,Ab,Ac,Ad,T,O,U,Ae,Af,V,W,E,K,G,I,Ag,Ah,P,Ai,Aj,R,Ak,Q,Al,L,F,M,C={
bCg(d){return C.i7X(d)},
i7X(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bCg=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rh(B.nm(""),d,A.i5,null,null).dg(0,A.a0_),$async$bCg)
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
return B.i($async$bCg,v)},
ika(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.S2[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fh(D.S2,new C.fKX())
if(w==null)w=A.d.gH(D.S2)
s=B.T(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.J)(r),++u){l=r[u].a
k=l[0]
l=$.qF().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.J)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.alj(w.a,w.b,m,w,s,!1)},
idF(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Sq,new C.fzA(),x.bd).aN(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
isL(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.co(b2,"{")
v=A.a.p7(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.X.aQ(0,A.a.aB(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aT(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qF().am(0,p)||J.eI(s,o)||J.ad(t)>=8)continue
J.c5(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dyS[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.j.D(typeof J.t(q,"x")=="number"?B.dD(J.t(q,"x")):0.2+A.j.F(r,3)*0.3,0.16,0.84)
j=A.j.D(typeof J.t(q,"y")=="number"?B.dD(J.t(q,"y")):0.25+A.j.aq(r,3)*0.3,0.1,0.9)
J.c5(t,new B.dX([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aT(a6.a(J.t(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.D(A.j.M(B.dD(J.t(g,1))),0,1)
a0=A.o.D(A.j.M(B.dD(J.t(g,3))),0,1)
if(J.eI(s,f)&&J.eI(s,e)&&!J.z(f,e))J.c5(i,new B.co([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aT(a0==null?A.cr:a0)
while(a0.C()){a2=a0.gR(a0)
J.c5(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.mY(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.alj(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
iiE(d){var w,v,u=C.hm7()
d.B(u)
for(w=0;w<60;++w)u.vN(0,0.03333333333333333)
v=u.a
return A.d.aV(v,new C.fHk(u))&&!A.d.cD(v,new C.fHl())},
iiD(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.J)(l),++u){t=l[u];++v
k.n(0,t.a,$.qF().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.J)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.j.V(t.r)+" ohms")
if(A.d.q(D.dx6,p))q.push("level "+A.j.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.j.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aN(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.j.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.J)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aN(s,"\n")+"\nWires: "+A.d.aN(l,"; ")},
i6h(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.J)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aN(v,"\n")+"\n\n"}v=A.d.aN(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ik9(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qF().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Sq[u]
if(A.d.aV(w,new C.fKU(s)))if(!B.cS(r,s.b.toLowerCase(),0))v=B.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fKV(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.j.ad(A.d.cF(w,0,new C.fKW())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qF().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
alj:function alj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fKX:function fKX(){},
fzA:function fzA(){},
fHk:function fHk(d){this.a=d},
fHl:function fHl(){},
fKU:function fKU(d){this.a=d},
fKV:function fKV(d){this.a=d},
fKW:function fKW(){},
WQ:function WQ(d,e){this.c=d
this.a=e},
bmG:function bmG(d,e,f,g,h){var _=this
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
ejy:function ejy(d){this.a=d},
ejz:function ejz(d,e,f){this.a=d
this.b=e
this.c=f},
ejA:function ejA(d){this.a=d},
ejL:function ejL(d){this.a=d},
ejM:function ejM(d,e){this.a=d
this.b=e},
ejH:function ejH(d){this.a=d},
ejF:function ejF(d,e){this.a=d
this.b=e},
ejG:function ejG(d,e,f){this.a=d
this.b=e
this.c=f},
ejI:function ejI(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ejD:function ejD(d){this.a=d},
ejE:function ejE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejJ:function ejJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ejC:function ejC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejK:function ejK(d,e){this.a=d
this.b=e},
ejB:function ejB(d,e){this.a=d
this.b=e},
ejP:function ejP(d){this.a=d},
ejO:function ejO(d){this.a=d},
ejQ:function ejQ(d){this.a=d},
ejN:function ejN(d){this.a=d},
ejR:function ejR(d,e){this.a=d
this.b=e},
ejS:function ejS(d,e){this.a=d
this.b=e},
ejT:function ejT(d,e){this.a=d
this.b=e},
ejU:function ejU(d,e){this.a=d
this.b=e},
bCB(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fsU,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hA_(d,e,f,g){var w=null,v=B.m(24),u=B.L(f.j(0.6),A.r,1)
return B.as(B.q(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.AZ,A.K,w,w),A.aB,B.bW(A.fU,g,A.bs,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(D.bhN,w,u,v,w,w,A.n),w,w,w,w,A.ac,w,w,w),w,w,w)},
GY:function GY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vr:function vr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xc:function Xc(d){this.a=d},
aGh:function aGh(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.h6$=h
_.m7$=i
_.fb$=j
_.h7$=k
_.bw$=l
_.a9$=m
_.c=_.a=null},
eyS:function eyS(){},
ezb:function ezb(d){this.a=d},
eza:function eza(d,e){this.a=d
this.b=e},
ezc:function ezc(){},
ezd:function ezd(){},
eyU:function eyU(d,e,f){this.a=d
this.b=e
this.c=f},
eyT:function eyT(d,e){this.a=d
this.b=e},
eyJ:function eyJ(d){this.a=d},
eyK:function eyK(d){this.a=d},
eyL:function eyL(d){this.a=d},
eyM:function eyM(d){this.a=d},
eyN:function eyN(d){this.a=d},
eyO:function eyO(d){this.a=d},
eyP:function eyP(d){this.a=d},
eyQ:function eyQ(d){this.a=d},
eyR:function eyR(d){this.a=d},
eyH:function eyH(d){this.a=d},
eyI:function eyI(d){this.a=d},
eyG:function eyG(d){this.a=d},
ez4:function ez4(d,e){this.a=d
this.b=e},
ez_:function ez_(d){this.a=d},
ez0:function ez0(d){this.a=d},
eyX:function eyX(d){this.a=d},
ez1:function ez1(d){this.a=d},
eyW:function eyW(d){this.a=d},
ez2:function ez2(d){this.a=d},
ez3:function ez3(d){this.a=d},
eyV:function eyV(d){this.a=d},
ez5:function ez5(d,e){this.a=d
this.b=e},
eyZ:function eyZ(d,e){this.a=d
this.b=e},
ez6:function ez6(d){this.a=d},
ez7:function ez7(d){this.a=d},
ez8:function ez8(d){this.a=d},
ez9:function ez9(d){this.a=d},
eyY:function eyY(d){this.a=d},
bjz:function bjz(d,e){this.b=d
this.a=e},
aOg:function aOg(){},
bAf:function bAf(){},
hv8(){var w=$.hv6
return w==null?$.hv6=$.rk().cWf("assets/data/three.min.js"):w},
hv7(){var w=$.hv5
return w==null?$.hv5=C.cPj():w},
cPj(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cPj=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.rk().jp(0,"assets/data/body3d.bin"),$async$cPj)
case 3:d=a1
$.hv9=J.eE(A.dS.gaU(d),d.byteOffset,d.byteLength)
t=B.a4A(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jL(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dl1[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4u(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b4M))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bcv(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cPj,v)},
c6K(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c6K=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.iB(B.a([C.hv7(),C.hv8()],x.D),x.K),$async$c6K)
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
return B.i($async$c6K,v)},
aUl:function aUl(d,e,f){this.a=d
this.b=e
this.c=f},
a4u:function a4u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bcv:function bcv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
VG:function VG(d){this.a=d},
aEL:function aEL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.h6$=s
_.m7$=t
_.fb$=u
_.h7$=v
_.bw$=w
_.a9$=a0
_.c=_.a=null},
dPH:function dPH(d){this.a=d},
dPG:function dPG(d,e){this.a=d
this.b=e},
dPh:function dPh(d){this.a=d},
dPi:function dPi(d,e){this.a=d
this.b=e},
dPj:function dPj(d){this.a=d},
dPk:function dPk(){},
dPI:function dPI(){},
dPl:function dPl(d,e){this.a=d
this.b=e},
dPm:function dPm(d){this.a=d},
dPn:function dPn(){},
dPo:function dPo(d){this.a=d},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPp:function dPp(d){this.a=d},
dPe:function dPe(d,e,f){this.a=d
this.b=e
this.c=f},
dPf:function dPf(d){this.a=d},
dPg:function dPg(d){this.a=d},
dPx:function dPx(d){this.a=d},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPz:function dPz(d,e){this.a=d
this.b=e},
dPA:function dPA(d){this.a=d},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPC:function dPC(d){this.a=d},
dPu:function dPu(d){this.a=d},
dPD:function dPD(d){this.a=d},
dPt:function dPt(d){this.a=d},
dPE:function dPE(d){this.a=d},
dPs:function dPs(d){this.a=d},
dPF:function dPF(d){this.a=d},
dPr:function dPr(d){this.a=d},
aNj:function aNj(){},
aNk:function aNk(){},
c6L:function c6L(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c6M:function c6M(d,e){this.a=d
this.b=e},
c6N:function c6N(d){this.a=d},
aAb(d,e,f,g,h){return new C.bdg(d,e,f,g,h)},
hch(d,e,f,g,h,i){return $.i3z.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cWe(d,e,f,i,g,h))},
yL:function yL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D3:function D3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nL:function nL(d,e,f){this.a=d
this.b=e
this.c=f},
bdg:function bdg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsQ:function fsQ(){},
fsR:function fsR(){},
fsS:function fsS(){},
fsZ:function fsZ(){},
ft_:function ft_(){},
ft0:function ft0(){},
VN:function VN(d){this.a=d},
aEN:function aEN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.h6$=m
_.m7$=n
_.fb$=o
_.h7$=p
_.bw$=q
_.a9$=r
_.c=_.a=null},
dRm:function dRm(d){this.a=d},
dR0:function dR0(d,e){this.a=d
this.b=e},
dR3:function dR3(){},
dRn:function dRn(){},
dQZ:function dQZ(d,e){this.a=d
this.b=e},
dR_:function dR_(d,e){this.a=d
this.b=e},
dR4:function dR4(d,e,f){this.a=d
this.b=e
this.c=f},
dQU:function dQU(){},
dQV:function dQV(){},
dQW:function dQW(d){this.a=d},
dQX:function dQX(d,e){this.a=d
this.b=e},
dQY:function dQY(d,e,f){this.a=d
this.b=e
this.c=f},
dR5:function dR5(){},
dR6:function dR6(d,e){this.a=d
this.b=e},
dR7:function dR7(d){this.a=d},
dR2:function dR2(d,e){this.a=d
this.b=e},
dR1:function dR1(d){this.a=d},
dQT:function dQT(d,e,f){this.a=d
this.b=e
this.c=f},
dRg:function dRg(d){this.a=d},
dRf:function dRf(d){this.a=d},
dRh:function dRh(d){this.a=d},
dRe:function dRe(d){this.a=d},
dRc:function dRc(d){this.a=d},
dRd:function dRd(d){this.a=d},
dRb:function dRb(d){this.a=d},
dR8:function dR8(d){this.a=d},
dRa:function dRa(d){this.a=d},
dRi:function dRi(d,e){this.a=d
this.b=e},
dRj:function dRj(d,e){this.a=d
this.b=e},
dRk:function dRk(d){this.a=d},
dR9:function dR9(d){this.a=d},
dRl:function dRl(d,e){this.a=d
this.b=e},
bdz:function bdz(d,e){this.b=d
this.a=e},
cWe:function cWe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNo:function aNo(){},
bA_:function bA_(){},
hVf(){return new C.Oi(null)},
Rl(d,e,f,g,h){return new C.bvx(d,e,f,g,h)},
btU(d,e,f){return A.j.D((d-e)/(f-e),0,1)},
hcP(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Oi:function Oi(d){this.a=d},
Lk:function Lk(d,e){this.a=d
this.b=e},
Bb:function Bb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aF3:function aF3(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dXy:function dXy(d,e){this.a=d
this.b=e},
dXx:function dXx(d){this.a=d},
dXA:function dXA(d,e){this.a=d
this.b=e},
dXz:function dXz(d){this.a=d},
bvx:function bvx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftg:function ftg(){},
fth:function fth(){},
fti:function fti(){},
ftj:function ftj(){},
ftk:function ftk(){},
ftl:function ftl(){},
ftm:function ftm(){},
ftn:function ftn(){},
fto:function fto(){},
btV:function btV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8F:function f8F(d){this.a=d},
f8E:function f8E(d,e){this.a=d
this.b=e},
f8C:function f8C(d){this.a=d},
f8G:function f8G(d){this.a=d},
f8D:function f8D(d,e){this.a=d
this.b=e},
agf:function agf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
af6:function af6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Re:function Re(d,e,f,g,h,i,j,k,l,m){var _=this
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
buV:function buV(d,e){this.b=d
this.a=e},
buq:function buq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcd:function bcd(d,e){this.b=d
this.a=e},
aJi:function aJi(d,e){this.c=d
this.a=e},
aJj:function aJj(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cQ$=e
_.b7$=f
_.c=_.a=null},
f8l:function f8l(d){this.a=d},
f8k:function f8k(d){this.a=d},
f8j:function f8j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8i:function f8i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8g:function f8g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8f:function f8f(d,e,f){this.a=d
this.b=e
this.c=f},
f8h:function f8h(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f8e:function f8e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8t:function f8t(d){this.a=d},
f8s:function f8s(d){this.a=d},
f8u:function f8u(d,e){this.a=d
this.b=e},
f8v:function f8v(d,e){this.a=d
this.b=e},
f8w:function f8w(d,e){this.a=d
this.b=e},
f8r:function f8r(d,e,f){this.a=d
this.b=e
this.c=f},
f8x:function f8x(d,e,f){this.a=d
this.b=e
this.c=f},
f8q:function f8q(d){this.a=d},
f8m:function f8m(d){this.a=d},
f8y:function f8y(d){this.a=d},
f8z:function f8z(d){this.a=d},
f8p:function f8p(d,e){this.a=d
this.b=e},
f8A:function f8A(d,e){this.a=d
this.b=e},
f8o:function f8o(d,e){this.a=d
this.b=e},
f8B:function f8B(d,e){this.a=d
this.b=e},
f8n:function f8n(d,e){this.a=d
this.b=e},
f8c:function f8c(){},
f8d:function f8d(){},
btw:function btw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsW:function bsW(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcU:function bcU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsY:function bsY(d,e,f){this.b=d
this.c=e
this.a=f},
bx0:function bx0(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aP5:function aP5(){},
hBr(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a2(0,new B.p(w,0)),u=e.aJ(0,new B.p(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a2(0,v.aM(0,s*t*f)).a2(0,u.aM(0,s*f*f)).a2(0,e.aM(0,f*f*f))},
bjy(d,e,f,g,h,i){return $.i47.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dro(d,e,f,i,g,h))},
a1E:function a1E(d,e){this.a=d
this.b=e},
qu:function qu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rb:function rb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D7:function D7(d,e){this.a=d
this.b=e},
a_D:function a_D(d,e){this.a=d
this.b=e},
ag3:function ag3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1R:function a1R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Di:function Di(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acX:function acX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
add:function add(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
af9:function af9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjw:function bjw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.P$=0
_.U$=t
_.by$=_.bL$=0},
drs:function drs(d){this.a=d},
drt:function drt(d){this.a=d},
drp:function drp(d,e){this.a=d
this.b=e},
drq:function drq(d){this.a=d},
drr:function drr(d){this.a=d},
dru:function dru(d){this.a=d},
drv:function drv(d){this.a=d},
drw:function drw(d){this.a=d},
drx:function drx(d){this.a=d},
dry:function dry(d){this.a=d},
drz:function drz(d){this.a=d},
drA:function drA(d){this.a=d},
drB:function drB(d){this.a=d},
drC:function drC(d){this.a=d},
GJ:function GJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xb:function Xb(d){this.a=d},
aGg:function aGg(d,e,f,g,h,i,j){var _=this
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
eyc:function eyc(d){this.a=d},
ey1:function ey1(d){this.a=d},
ey3:function ey3(){},
ey4:function ey4(){},
ey7:function ey7(){},
ey8:function ey8(d,e,f){this.a=d
this.b=e
this.c=f},
ey9:function ey9(d){this.a=d},
eya:function eya(d){this.a=d},
ey5:function ey5(){},
ey6:function ey6(d){this.a=d},
eyC:function eyC(d){this.a=d},
eyb:function eyb(){},
exY:function exY(d){this.a=d},
eye:function eye(d){this.a=d},
eyd:function eyd(d){this.a=d},
eyg:function eyg(){},
eyf:function eyf(d,e){this.a=d
this.b=e},
ey0:function ey0(){},
exZ:function exZ(d){this.a=d},
ey_:function ey_(d){this.a=d},
eyA:function eyA(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyB:function eyB(d){this.a=d},
eyq:function eyq(d,e){this.a=d
this.b=e},
eyy:function eyy(d){this.a=d},
eyw:function eyw(d){this.a=d},
eyx:function eyx(d){this.a=d},
eyv:function eyv(d){this.a=d},
eyu:function eyu(d){this.a=d},
eyr:function eyr(d){this.a=d},
eys:function eys(d){this.a=d},
eyt:function eyt(d){this.a=d},
ey2:function ey2(){},
eym:function eym(d){this.a=d},
eyn:function eyn(d){this.a=d},
eyl:function eyl(d){this.a=d},
eyo:function eyo(d){this.a=d},
eyk:function eyk(d){this.a=d},
eyp:function eyp(d){this.a=d},
eyj:function eyj(d){this.a=d},
eyi:function eyi(d){this.a=d},
eyh:function eyh(d,e){this.a=d
this.b=e},
bjx:function bjx(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dro:function dro(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOe:function aOe(){},
hGW(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aJ(0,e).gcK()*0.1
return new B.p((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hm7(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5D(w,v,u,A.cQ,B.T(x.N,x.y))},
hOW(d,e,f){var w=d.c,v=e===0?-1:1
return new B.p(w*f.a+v*C.hm8(d),d.d*f.b)},
hm8(d){return 42+(D.mt.am(0,d.b)?(d.ch-1)*38:0)},
eh:function eh(d,e,f,g,h,i){var _=this
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
abC:function abC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
acJ:function acJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5D:function a5D(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bQ5:function bQ5(){},
bQg:function bQg(d){this.a=d},
bQb:function bQb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQh:function bQh(d){this.a=d},
bQi:function bQi(d){this.a=d},
bQk:function bQk(d){this.a=d},
bQl:function bQl(d){this.a=d},
bQj:function bQj(d){this.a=d},
bQm:function bQm(d,e,f){this.a=d
this.b=e
this.c=f},
bQn:function bQn(d){this.a=d},
bQ7:function bQ7(d){this.a=d},
bQ8:function bQ8(d){this.a=d},
bQ6:function bQ6(d){this.a=d},
bQ9:function bQ9(d,e,f){this.a=d
this.b=e
this.c=f},
bQa:function bQa(d){this.a=d},
bQ4:function bQ4(d){this.a=d},
bQo:function bQo(d,e){this.a=d
this.b=e},
bQc:function bQc(d,e){this.a=d
this.b=e},
bQf:function bQf(d){this.a=d},
bQe:function bQe(d){this.a=d},
bQd:function bQd(d){this.a=d},
ak7:function ak7(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bKs:function bKs(){},
bKt:function bKt(){},
mY:function mY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cu2:function cu2(d){this.a=d},
isF(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fWR(),c8=new C.fWT(),c9=new C.fWU(),d0=new C.fWS(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.an(w,d0.$3(new B.a1(w.a,w.b,w.c,w.d),A.cd,A.bN))
d2.ah(D.er5,D.eo_,c8.$2(A.e_,1.4))
d2.ah(D.enF,D.enD,c8.$2(A.bx,2.4))
d2.ah(D.enG,U.aLV,c8.$2(A.bx,2.4))
if(c6){d1=c7.$1(A.fI.j(0.5))
d1.y=A.H6
d2.N(D.enl,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.j.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.p(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.an(c9.$4(-22,-26,44,50),d0.$3(D.aS2,A.aS,A.cx))
d2.N(A.cL,16,c7.$1(A.bx))
d2.N(A.cL,13,c7.$1(c6?A.aG.j(0.85):A.a_))
if(c6){d1=d2.c
J.bp(d1.save())
d1.translate(0,4)
d2.hW(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.p(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.p(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.N(D.eqY,2.4,c7.$1(c6?A.bd:A.an))
d2.N(D.erQ,2.4,c7.$1(A.an))
return!0
case"blender":d2.an(c9.$5(-14,14,28,12,4),c7.$1(A.cS))
d1=$.S().r
t=x.v
s=new B.aG(d1,A.ai,c5,c5,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bv())
d2.af(s,c7.$1(A.fI.j(0.35)))
if(c6){d1=new B.aG(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(-14,-10))
d1.E(new B.aq(14,-10))
d1.E(new B.aq(12,14))
d1.E(new B.aq(-12,14))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.ay.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.bp(d1.save())
d1.translate(0,10)
d2.hW(0,d3.y)
d2.ah(D.a8N,D.aMh,c8.$2(A.bP,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.N(new B.p(Math.sin(d1+v*2)*9,-10-A.j.F(t+v*0.33,1)*12),2.4,c7.$1(A.eW))
return!0
case"drone":d2.an(c9.$5(-10,-4,20,10,4),c7.$1(A.aM))
d2.N(A.hq,3,c7.$1(c6?A.bd:A.an))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.IK[p]
d2.ah(new B.p(o*0.4,1),new B.p(o,t),c8.$2(A.bx,3))
J.bp(d1.save())
d1.translate(o,q)
d2.ah(D.eqM,D.enK,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.bZ(B.bs(A.J,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bv())
d2.af(w,d0.$3(D.f8Y,A.aQ,A.d3))
d2.ar(D.f84,c7.$1(A.d1))
d1=d2.c
J.bp(d1.save())
d1.translate(18,-5)
d2.hW(0,d3.y*2)
d2.ah(A.J,D.enR,c8.$2(A.bP,2.4))
d2.ah(A.a8J,D.enQ,c8.$2(A.hJ,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.p(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.dC.j(1-u)))}return!0
case"torch":if(c6){v=A.j.D(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,-6))
d1.E(new B.aq(52,-26))
d1.E(new B.aq(52,18))
d1.E(new B.aq(16,4))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.bL.j(0.35*v)))}d2.an(c9.$5(-26,-6,30,12,3),d0.$3(D.f93,A.bj,A.cl))
n=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bv())
d2.af(n,c7.$1(A.cS))
d2.N(D.enW,7,c7.$1(c6?A.c:A.d1))
return!0
case"neon":d2.an(c9.$5(-30,-14,60,28,6),c7.$1(M.nz))
if(c6)m=d3.ax>0.5||A.o.F(A.j.bh(d4*17),3)!==0
else m=!1
l=m?A.bT:D.bs4
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.bT.j(0.35))
t.y=A.mg
d2.an(d1,t)}d2.an(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.erb,l,17)
return!0
case"microwave":d2.an(c9.$4(-30,-18,60,38),d0.$3(D.f99,A.bP,A.bj))
d1=c9.$5(-26,-14,38,30,3)
d2.an(d1,c7.$1(c6?A.bL.j(0.75):A.as))
if(c6){d1=d2.c
J.bp(d1.save())
d1.translate(-7,8)
d2.hW(0,d3.y*0.5)
d2.bZ(B.bs(A.J,7,22),c7.$1(A.d3))
d1.restore()}d2.an(c9.$5(15,-14,12,12,2),c7.$1(M.nz))
if(c6)d5.$5(d2,"0:"+A.a.b_(A.o.v(59-A.o.F(A.j.bh(d4),60)),2,"0"),D.enX,A.b4,6.5)
d2.N(D.eoc,4,c7.$1(A.d1))
return!0
case"doorbell":d2.an(c9.$5(-16,-26,32,52,8),c7.$1(A.bi))
d2.N(A.JB,10,c7.$1(c6?A.bl:A.bx))
d1=d2.c
J.bp(d1.save())
d1.translate(0,-8)
d2.hW(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.erU,A.c,16)
d1.restore()
d2.N(A.kF,6,c7.$1(A.d7))
d2.N(A.kF,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cB(B.bZ(A.JB,14+v*6+A.j.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bl.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.era,D.erN,c8.$2(A.bx,4))
d1=d2.c
J.bp(d1.save())
d2.hW(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.an(c9.$5(-24,-14,46,22,5),d0.$3(D.f8Z,A.bP,A.an))
d2.N(D.aLZ,8,c7.$1(A.as))
d2.N(D.aLZ,4.5,c7.$1(c6?A.aG:A.cl))
d2.N(D.er8,2.2,c7.$1(c6&&A.o.F(A.j.bh(d4*1.6),2)===0?A.ay:A.ku))
d1.restore()
if(c6)d5.$5(d2,"REC",D.erj,A.ay,9)
return!0
case"console":d2.an(c9.$5(-28,-22,56,44,8),d0.$3(D.f96,A.j6,A.fp))
d2.an(c9.$5(-20,-17,40,22,3),c7.$1(A.dF))
if(c6){d1=d4*2.3
d2.N(new B.p(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.ar(new B.a1(-18,t,-15.6,t+8),c7.$1(A.b4))
d1=-9+Math.sin(d1-0.4)*6
d2.ar(new B.a1(15.6,d1,18,d1+8),c7.$1(A.bT))}d2.N(D.er3,4,c7.$1(A.b6))
d2.N(D.enS,2.4,c7.$1(A.ay))
d2.N(D.eo9,2.4,c7.$1(A.bd))
return!0
case"heartmon":d2.an(c9.$5(-30,-22,60,44,6),c7.$1(A.as))
d2.an(c9.$5(-26,-18,52,28,3),c7.$1(A.dF))
if(c6){d1=$.S()
t=B.a([],x.v)
k=new B.aG(d1.r,A.ai,c5,c5,t)
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
k.ab()}}d2.af(k,c8.$2(A.b4,1.8))
d5.$5(d2,"72",D.enT,A.hu,11)
d1=d4*9
d5.$5(d2,"\u2665",D.ero,A.hu.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.N(D.erd,3,c7.$1(c6?A.bd:A.bx))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.an(d1,c7.$1(A.cD.j(c6?0.5:0.3)))
d2.an(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.ar(D.f90,c7.$1(F.ua))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.bp(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.pl(0,-1,1)
d2.bZ(B.bs(A.J,8,14),c7.$1(A.cI))
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,0))
d1.E(new B.aq(-12,-4))
d1.E(new B.aq(-12,4))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.c6))
d2.N(D.eoV,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.j.F(d1+v*0.2,1)
d2.N(new B.p(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.S().r
t=x.v
g=new B.aG(d1,A.ai,c5,c5,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bv())
d2.af(g,d0.$3(D.f9B,A.c,A.bD))
d2.ar(D.f9x,c7.$1(c6?A.dC:A.bx))
q=new B.aG(d1,A.ai,c5,c5,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bv())
d2.af(q,c7.$1(A.em))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aG(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(0,-19))
t=f*34
d1.E(new B.aq(t,-26))
d1.E(new B.aq(t,-12))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.dC.j(0.45)))
d1=c7.$1(A.dC.j(0.35))
d1.y=A.H6
d2.N(D.enm,14,d1)}return!0
case"discoball":d2.ah(D.eno,Q.aLQ,c8.$2(A.d1,1.4))
d2.N(A.J,16,d0.$3(D.f8I,A.aS,A.an))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.p(-16,d1),new B.p(16,d1),c8.$2(A.dx,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.p(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.p(Math.cos(f)*16,0),c8.$2(A.dx,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.N(new B.p(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dm5[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.an(c9.$5(-14,-4,28,24,5),d0.$3(D.f8F,A.cx,A.an))
d2.an(c9.$5(-12,-26,24,20,5),d0.$3(D.f8y,A.bi,A.bN))
d2.ah(H.aLS,D.enq,c8.$2(A.bx,1.6))
d2.N(D.enr,2.2,c7.$1(c6?A.ay:A.bx))
d=c6&&A.j.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a6o[p]
if(c6)d1=d?A.b9:A.eZ
else d1=A.cl
d2.N(new B.p(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.bp(d1.save())
d1.translate(14,0)
d2.hW(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.J,D.a8E,c8.$2(A.bN,4))
d1.restore()
d2.ah(D.eqU,D.erh,c8.$2(A.bN,4))
d2.ar(D.f9w,c7.$1(c6?A.b9.j(0.7):A.aM))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aCD[p]+1,d1,10,14,2)
q=B.ar(A.bL,A.d3,a0)
q.toString
d2.an(t,c7.$1(q))}d2.an(c9.$5(-24,-6,48,26,8),d0.$3(D.f9_,A.bP,A.bj))
for(p=0;p<2;++p){o=D.aCD[p]
d1=c9.$5(o,-5,12,5,2)
d2.an(d1,c7.$1(c6?A.fr:A.as))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cI.j(0.5))
t.y=N.ot
d2.an(d1,t)}}d2.ah(D.eoi,D.eoD,c8.$2(A.as,3))
return!0
case"ledstrip":d2.an(c9.$5(-34,-4,68,10,4),c7.$1(A.cl))
for(d1=d4*90,v=0;v<9;++v){a1=A.j.F(d1+v*40,360)
l=c6?new An.pi(1,a1,0.8,1).jd():A.cS
if(c6){t=c7.$1(l.j(0.45))
t.y=N.ot
d2.N(new B.p(-30+v*7.5,1),7,t)}d2.N(new B.p(-30+v*7.5,1),2.6,c7.$1(l))}d2.an(c9.$5(-40,-2,6,6,1),c7.$1(A.d1))
return!0
case"pump":d2.an(c9.$5(-16,-2,32,22,6),d0.$3(D.f8O,A.cD,A.FW))
d2.N(D.erp,8,c7.$1(A.rE))
d1=d2.c
J.bp(d1.save())
d1.translate(-2,9)
d2.hW(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.p(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.fI,2.4))}d1.restore()
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,6))
d1.E(new B.aq(26,6))
d1.E(new B.aq(26,-20))
d1.E(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bN,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.N(new B.p(26,6-A.j.F(d1+v*0.2,1)*26),2.2,c7.$1(A.hA))
d2.N(D.epy,3.2,c7.$1(A.hA.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.bp(d1.save())
d2.hW(0,-0.15)
d2.an(c9.$5(-26,-14,40,22,10),d0.$3(D.f91,A.hI,A.rD))
d2.an(c9.$5(14,-10,12,14,3),c7.$1(A.cl))
d2.an(c9.$5(-10,6,12,22,4),c7.$1(A.cS))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.p(24+t,q),new B.p(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cI.j(0.4))
d1.y=N.ot
d2.N(D.eob,8,d1)}return!0
case"headphones":d2.cB(B.bs(A.dM,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.bx,4))
for(d1=d4*12,p=0;p<2;++p){o=F.SD[p]
t=o-7
d2.an(c9.$5(t,0,14,20,6),d0.$3(new B.a1(t,0,t+14,20),A.bg,A.nv))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bZ(new B.p(o,10),10+v*5+A.j.F(d1,5))
h=t?2.2:-0.9
d2.cB(q,h,1.6,!1,c8.$2(A.eK.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.p(-4,-8-A.j.F(d4*14,8)),A.kO,12)
return!0
case"smartwatch":d2.an(c9.$5(-8,-30,16,14,3),c7.$1(A.cl))
d2.an(c9.$5(-8,14,16,14,3),c7.$1(A.cl))
d2.an(c9.$5(-14,-17,28,32,8),d0.$3(D.f8D,A.d1,A.cS))
d2.an(c9.$5(-11,-14,22,26,6),c7.$1(A.dF))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b_(A.o.v(B.df(a2)),2,"0")+":"+A.a.b_(A.o.v(B.fQ(a2)),2,"0"),D.enx,A.b4,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ar(A.FE,A.hu,j)
d1.toString
d5.$5(d2,"\u2665",new B.p(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.j.bh(d4*2),6)),A.dM,A.c,7)}return!0
case"tablet":d2.an(c9.$5(-30,-22,60,44,6),c7.$1(M.nz))
d2.an(c9.$5(-30,-22,60,44,6),c8.$2(A.bN,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.bp(d1.save())
d1.clipRRect(B.nR(a3),$.np(),!0)
d1.translate(-27,-19)
L.Ma(d2,D.ffY,d4,c5)
d1.restore()}else d2.an(a3,c7.$1(D.we))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.an(a4,d0.$3(new B.a1(a4.a,a4.b,a4.c,a4.d),A.dO,A.db))
d2.an(a4,c8.$2(A.aT,1.2))
d2.N(D.aMo,9,c7.$1(A.as))
d2.N(D.aMo,6,c8.$2(A.d3,2))
d2.an(c9.$5(4,-2,14,10,2),c7.$1(A.as))
d2.an(c9.$5(-22,-19,44,12,2),c7.$1(A.dF))
d1=A.j.ad(d3.db,1)
t=A.j.ad(c6?d3.dx:d3.e,1)
q=c6?A.b4:A.an
d5.$5(d2,d1+"\u2192"+t+"V",D.epI,q,8.2)
d2.N(D.eo0,2.4,c7.$1(c6?A.bd:A.aM))
d5.$5(d2,"IN",D.eri,A.ab,6)
d5.$5(d2,"OUT",D.epp,A.ab,6)
return!0
case"regulator":a5=c6?A.j.D(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ar(A.bN,A.ay,a5)
t.toString
d2.an(d1,c7.$1(t))
d2.N(H.a8C,3,c7.$1(A.aM))
d2.an(c9.$5(-12,-4,24,18,3),d0.$3(D.f8z,A.cS,A.ia))
d5.$5(d2,"7805",D.a8N,A.ab,8)
for(p=0;p<3;++p){d1=D.dsC[p]-1
d2.ar(new B.a1(d1,14,d1+2,22),c7.$1(A.e1))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.j.F(d1+v*0.33,1)
d2.N(new B.p(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.erR,A.bq,9)
return!0
case"diode":d2.ah(D.aMs,D.aMb,c8.$2(A.e1,2.4))
d2.an(c9.$5(-14,-7,28,14,6),c7.$1(A.aw.j(0.85)))
d2.ar(D.f8i,c7.$1(A.bq))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.dC.j(0.4))
t.y=A.kV
d2.an(d1,t)}d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,-4))
d1.E(new B.aq(-8,4))
d1.E(new B.aq(-1,0))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.b6))
d5.$5(d2,"one way",D.er6,A.aD,8)
return!0
case"ldr":d2.ah(D.aMs,D.a8N,c8.$2(A.e1,2.4))
d2.ah(D.aMh,D.aMb,c8.$2(A.e1,2.4))
d2.N(A.J,12,c7.$1(A.d3))
d2.N(A.J,12,c8.$2(A.rJ,1.6))
d1=$.S()
t=B.a([],x.v)
a6=new B.aG(d1.r,A.ai,c5,c5,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.ak(q)
a6.ab()}d2.af(a6,c8.$2(A.bL,1.4))
d1=B.ar(A.bx,A.dC,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.p(-6,-26),d1,14)
d5.$5(d2,""+A.j.V(20+980*(1-d3.f))+"\u03a9",D.eqV,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.eq
break
case"sonytv":t=A.rx
break
case"appletv":t=A.e1
break
default:t=F.FH
break}a7=d1==="lgtv"||d1==="appletv"
d2.an(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=c9.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c6){h=d2.c
J.bp(h.save())
h.clipRRect(B.nR(a3),$.np(),!0)
h.translate(t,q)
L.hi6(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1)
h.restore()
d2.N(D.eoG,1.6,c7.$1(A.b4))}else{d2.an(a3,c7.$1(D.we))
h=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bv())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.an(c9.$5(-22,19,44,3,1.5),c7.$1(A.d1))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.fN[p]
t=$.S()
q=B.a([],d1)
t=new B.aG(t.r,A.ai,c5,c5,q)
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
h=new B.bv()
q.push(h)
q=t.f
if(q!=null)h.ak(q)
t.ab()
d2.af(t,c7.$1(A.d1))}d5.$5(d2,"SONY",D.eqm,A.bP,5.5)
break
case"appletv":d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,18))
d1.E(new B.aq(8,18))
d1.E(new B.aq(12,25))
d1.E(new B.aq(-12,25))
d1.E(new B.bv())
d2.af(d1,c7.$1(D.Zq))
d5.$5(d2,"Apple TV",D.epJ,A.bx,4.8)
break
default:d2.an(c9.$5(-34,19,68,7,3),c7.$1(D.bqm))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.p(d1,20),new B.p(d1,25),c8.$2(A.dx,0.6))}d5.$5(d2,"B&O",D.erM,F.ua,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mt.h(0,d1)
b0=a9.b===D.Ey
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
b6=B.ar(b5,A.c,0.35)
b6.toString
d2.an(w,d0.$3(new B.a1(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.bp(t.save())
t.clipRRect(B.nR(a3),$.np(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.Ma(d2,new B.av(a3.c-q,a3.d-h),d4,c5)
t.restore()}else d2.an(a3,c7.$1(D.we))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.p(0,t),new B.p(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.an(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.N(new B.p(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.an(c9.$5(-17,-28,34,52,4),c7.$1(A.cS))
d2.an(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bP))
if(c6){d5.$5(d2,"NGMY",D.erX,A.as,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.ar(new B.a1(-11,d1,-11+t,d1+1.4),c7.$1(A.bj))}d2.N(A.a8A,1.6,c7.$1(A.as))}return!0
case"laptop":d2.an(c9.$5(-30,-28,60,42,4),d0.$3(D.f9a,A.cx,A.bj))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.bp(d1.save())
d1.clipRRect(B.nR(b7),$.np(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.Ma(d2,new B.av(b7.c-t,b7.d-q),d4,c5)
d1.restore()}else d2.an(b7,c7.$1(D.we))
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-38,16))
d1.E(new B.aq(38,16))
d1.E(new B.aq(34,21))
d1.E(new B.aq(-34,21))
d1.E(new B.bv())
d2.af(d1,c7.$1(D.Zq))
d2.an(c9.$5(-7,16,14,2,1),c7.$1(A.bj))
return!0
case"imac":d2.an(c9.$5(-32,-28,64,46,5),d0.$3(D.f9e,A.cd,A.cx))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.bp(d1.save())
d1.clipRRect(B.nR(b8),$.np(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.Ma(d2,new B.av(b8.c-t,b8.d-q),d4,c5)
d1.restore()}else d2.an(b8,c7.$1(D.we))
d2.N(D.aLL,2,c7.$1(A.bN))
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,18))
d1.E(new B.aq(6,18))
d1.E(new B.aq(10,26))
d1.E(new B.aq(-10,26))
d1.E(new B.bv())
d2.af(d1,c7.$1(D.Zq))
return!0
case"monitor":d2.an(c9.$5(-34,-28,68,40,3),c7.$1(A.eq))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.bp(d1.save())
d1.clipRRect(B.nR(b9),$.np(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.Ma(d2,new B.av(b9.c-t,b9.d-q),d4,c5)
d1.restore()}else d2.an(b9,c7.$1(D.we))
d2.ar(D.f9l,c7.$1(A.bj))
d2.an(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.d1))
return!0
case"projector":if(c6){d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(14,4))
d1.E(new B.aq(-32,-42))
d1.E(new B.aq(34,-42))
d1.E(new B.bv())
d2.af(d1,c7.$1(A.dC.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.bp(d1.save())
d1.clipRRect(B.nR(c0),$.np(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.Ma(d2,new B.av(c0.c-t,c0.d-q),d4,c5)
d1.restore()}d2.an(c9.$5(-26,-4,52,24,6),d0.$3(D.f92,A.i_,A.d1))
d2.N(D.aLX,7,c7.$1(A.as))
d2.N(D.aLX,4,c7.$1(c6?A.dC:A.cl))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.p(d1,2),new B.p(d1,14),c8.$2(A.dx,1))}return!0
case"carscreen":d2.an(c9.$5(-34,-10,68,32,12),c7.$1(A.as))
c1=c9.$5(-30,-20,60,28,8)
d2.an(c1,c7.$1(M.nz))
d2.an(c1,c8.$2(A.bx,1.2))
if(c6){c2=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
c2.E(new B.aZ(-26,4))
c2.E(new B.c7(-10,-14+Math.sin(d4)*3,6,-6))
c2.E(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aG,2.2))
d1=A.j.F(d4*6,48)
d2.N(new B.p(-26+d1,4-d1*0.1),2.4,c7.$1(A.b4))
d5.$5(d2,""+(88+A.o.F(A.j.bh(d4*2),5)),H.aMg,A.c,10)
d5.$5(d2,"km/h",D.epw,A.aD,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.an(c3,d0.$3(new B.a1(c3.a,c3.b,c3.c,c3.d),A.d1,A.cS))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.bp(d1.save())
d1.clipRRect(B.nR(c4),$.np(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.Ma(d2,new B.av(c4.c-t,c4.d-q),d4,c5)
d1.restore()
d1=c7.$1(A.bg.j(0.2))
d1.y=A.mg
d2.N(A.J,26,d1)}else d2.an(c4,c7.$1(A.a_))
d2.ah(D.erw,D.erB,c8.$2(A.bj,4))
d2.ah(D.eoI,D.eoY,c8.$2(A.bj,4))
return!0}return!1},
fWR:function fWR(){},
fWT:function fWT(){},
fWU:function fWU(){},
fWS:function fWS(){},
hkZ(d,e,f,g){return new C.ak5(d,g,f,e)},
Gt(d,e,f){return new C.bdh(d,e,f)},
ak5:function ak5(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ak6:function ak6(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.h6$=h
_.m7$=i
_.fb$=j
_.h7$=k
_.bw$=l
_.a9$=m
_.c=_.a=null},
bK6:function bK6(d,e){this.a=d
this.b=e},
bK7:function bK7(d){this.a=d},
bK5:function bK5(d){this.a=d},
bK8:function bK8(){},
bK9:function bK9(d){this.a=d},
bKa:function bKa(d,e,f){this.a=d
this.b=e
this.c=f},
bK4:function bK4(d,e){this.a=d
this.b=e},
bK1:function bK1(d,e){this.a=d
this.b=e},
bK2:function bK2(d,e,f){this.a=d
this.b=e
this.c=f},
bJW:function bJW(d,e){this.a=d
this.b=e},
bJX:function bJX(){},
bK3:function bK3(d,e,f){this.a=d
this.b=e
this.c=f},
bK0:function bK0(d,e){this.a=d
this.b=e},
bJY:function bJY(d,e){this.a=d
this.b=e},
bJZ:function bJZ(d,e){this.a=d
this.b=e},
bK_:function bK_(d){this.a=d},
bKp:function bKp(d){this.a=d},
bKq:function bKq(){},
bJz:function bJz(){},
bKr:function bKr(d,e){this.a=d
this.b=e},
bKo:function bKo(d,e,f){this.a=d
this.b=e
this.c=f},
bKj:function bKj(d){this.a=d},
bKg:function bKg(d,e,f){this.a=d
this.b=e
this.c=f},
bKh:function bKh(d,e){this.a=d
this.b=e},
bKk:function bKk(d){this.a=d},
bKe:function bKe(d,e){this.a=d
this.b=e},
bKf:function bKf(d,e){this.a=d
this.b=e},
bKi:function bKi(d){this.a=d},
bKl:function bKl(d){this.a=d},
bKc:function bKc(d,e){this.a=d
this.b=e},
bKd:function bKd(d,e){this.a=d
this.b=e},
bKm:function bKm(d){this.a=d},
bKb:function bKb(d){this.a=d},
bKn:function bKn(d){this.a=d},
bJA:function bJA(d,e){this.a=d
this.b=e},
bJT:function bJT(d,e){this.a=d
this.b=e},
bJV:function bJV(d,e){this.a=d
this.b=e},
bJU:function bJU(d,e){this.a=d
this.b=e},
bJG:function bJG(d,e){this.a=d
this.b=e},
bJH:function bJH(d){this.a=d},
bJF:function bJF(d){this.a=d},
bJI:function bJI(d,e,f){this.a=d
this.b=e
this.c=f},
bJE:function bJE(d,e){this.a=d
this.b=e},
bJL:function bJL(d,e){this.a=d
this.b=e},
bJM:function bJM(d,e){this.a=d
this.b=e},
bJN:function bJN(d,e){this.a=d
this.b=e},
bJO:function bJO(d,e,f){this.a=d
this.b=e
this.c=f},
bJD:function bJD(d,e){this.a=d
this.b=e},
bJP:function bJP(d,e,f){this.a=d
this.b=e
this.c=f},
bJC:function bJC(d,e){this.a=d
this.b=e},
bJQ:function bJQ(d,e,f){this.a=d
this.b=e
this.c=f},
bJB:function bJB(d,e){this.a=d
this.b=e},
bJR:function bJR(d){this.a=d},
bJS:function bJS(d){this.a=d},
bJJ:function bJJ(d){this.a=d},
bJK:function bJK(d){this.a=d},
bdh:function bdh(d,e,f){this.a=d
this.b=e
this.c=f},
ft1:function ft1(){},
ft2:function ft2(){},
ft3:function ft3(){},
fsP:function fsP(){},
ft4:function ft4(){},
fsO:function fsO(){},
ft5:function ft5(){},
fsT:function fsT(){},
fsN:function fsN(){},
fsU:function fsU(){},
fsM:function fsM(){},
fsV:function fsV(){},
fsL:function fsL(){},
fsW:function fsW(){},
fsJ:function fsJ(){},
fsK:function fsK(){},
fsX:function fsX(){},
fsH:function fsH(){},
fsI:function fsI(){},
fsY:function fsY(){},
fsG:function fsG(){},
Wo:function Wo(d){this.a=d},
aFf:function aFf(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e1m:function e1m(d,e){this.a=d
this.b=e},
e1v:function e1v(d){this.a=d},
e1w:function e1w(){},
e1x:function e1x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1y:function e1y(){},
e1l:function e1l(d){this.a=d},
e1k:function e1k(d,e,f){this.a=d
this.b=e
this.c=f},
e1j:function e1j(d,e){this.a=d
this.b=e},
e1h:function e1h(d){this.a=d},
e1i:function e1i(){},
e1u:function e1u(d){this.a=d},
e1t:function e1t(d){this.a=d},
e1r:function e1r(d,e){this.a=d
this.b=e},
e1p:function e1p(d){this.a=d},
e1q:function e1q(){},
e1s:function e1s(d,e,f){this.a=d
this.b=e
this.c=f},
e1n:function e1n(d,e){this.a=d
this.b=e},
e1o:function e1o(){},
e1A:function e1A(d){this.a=d},
e1B:function e1B(d,e){this.a=d
this.b=e},
e1z:function e1z(){},
e1C:function e1C(d,e){this.a=d
this.b=e},
e1D:function e1D(d){this.a=d},
e1E:function e1E(d){this.a=d},
azh:function azh(d,e){this.c=d
this.a=e},
bbp:function bbp(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
cLC:function cLC(d){this.a=d},
bbo:function bbo(d,e){this.b=d
this.a=e},
cLB:function cLB(d){this.a=d},
azC:function azC(){},
azD:function azD(){},
aLL:function aLL(){},
bA2:function bA2(){},
isH(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bZ(A.vu,23)
$.S()
b8=B.K()
b8.r=A.as.gp(0)
b9.N(A.vu,25,b8)
b8=B.K()
b8.sav(D.eAE.aK(0,v))
b9.N(A.vu,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.bq.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.p(b8*17,s*17-2),new B.p(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.j.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.K()
r.r=A.bD.gp(0)
r.c=2
r.d=A.bu
b9.ah(A.vu,new B.p(b8*18,s*18-2),r)
r=B.K()
r.r=A.bq.gp(0)
b9.N(A.vu,3,r)
c2.$5(b9,w?"V":"A",D.erE,A.bq,12)
c2.$5(b9,w?A.j.ad(o,1)+" V":""+A.j.V(o*1000)+" mA",D.er0,A.as,9.5)
return!0
case"fan":b8=B.bn(D.f8v,A.hV)
$.S()
s=B.K()
s.r=A.bx.gp(0)
b9.an(b8,s)
s=B.K()
s.r=A.an.gp(0)
b9.ar(D.f9m,s)
s=B.K()
s.r=A.a_.j(0.6).gp(0)
b9.N(H.vv,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bp(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bs(A.aLP,18,10)
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=A.hA.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.bZ(s,r)
b8.restore()}b8=B.K()
b8.r=A.br.gp(0)
b9.N(H.vv,4,b8)
b8=B.K()
b8.b=A.a9
b8.c=2
b8.r=A.cx.gp(0)
b9.N(H.vv,22,b8)
b8=B.K()
b8.b=A.a9
b8.c=0.8
b8.r=A.jZ.gp(0)
b9.N(H.vv,14,b8)
return!0
case"speaker":n=B.bn(D.aS2,A.r3)
$.S()
b8=B.K()
b8.sav(D.atf.aK(0,new B.a1(n.a,n.b,n.c,n.d)))
b9.an(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.K()
b8.sav(D.eAZ.aK(0,B.bZ(A.cA,15)))
b9.N(A.cA,14+m,b8)
b8=B.K()
b8.r=A.d1.gp(0)
b9.N(A.cA,5,b8)
b8=B.K()
b8.r=A.bj.gp(0)
b9.N(H.a8B,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bZ(D.eoh,6+u*6+A.j.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=1.8
r.r=A.bT.j(0.9-u*0.2).gp(0)
b9.cB(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bn(D.f9d,A.r3)
$.S()
b8=B.K()
b8.sav(D.c8V.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.an(l,b8)
b8=B.bn(D.aS4,A.iF)
s=B.K()
s.r=A.ia.gp(0)
b9.an(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FN(k)<500?":":" "
i=A.a.b_(A.o.v(B.df(k)),2,"0")
h=A.a.b_(A.o.v(B.fQ(k)),2,"0")
b8=B.K()
b8.r=A.b4.j(0.12).gp(0)
b9.ar(D.aS4,b8)
c2.$5(b9,i+j+h,D.erm,A.b4,21)}b8=B.K()
b8.r=A.cx.gp(0)
b9.N(D.erk,2.4,b8)
b8=B.K()
b8.r=A.cx.gp(0)
b9.N(D.eom,2.4,b8)
return!0
case"calculator":l=B.bn(D.f8T,A.hW)
$.S()
b8=B.K()
b8.sav(D.c8D.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.an(l,b8)
b8=B.bn(D.f8M,A.hD)
s=B.K()
s.r=(b7?A.ZE:D.bsG).gp(0)
b9.an(b8,s)
if(b7)c2.$5(b9,"3.14159",D.er_,A.Yk,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bn(new B.a1(r,b8,r+6,s),A.Uz)
$.S()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=(f===3?A.c6:A.bP).gp(0)
b9.an(r,q)}return!0
case"phone":l=B.bn(D.f8H,A.hW)
$.S()
b8=B.K()
b8.r=M.nz.gp(0)
b9.an(l,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.9
b8.r=D.akr.gp(0)
b9.an(l,b8)
e=B.bn(D.f8x,A.hV)
if(b7){b8=B.K()
b8.sav(D.cad.aK(0,new B.a1(e.a,e.b,e.c,e.d)))
b9.an(e,b8)
b8=b9.c
J.bp(b8.save())
b8.clipRRect(B.nR(e),$.np(),!0)
b8.translate(-12,-25)
L.Ma(b9,D.ffA,c1,b6)
b8.restore()
d=A.j.F(c1*0.12,1)
b8=B.bn(D.f8u,A.hD)
s=B.K()
s.r=A.b6.gp(0)
b9.an(b8,s)
s=B.K()
s.r=A.b4.gp(0)
b9.ar(new B.a1(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.j.V(d*100)+"%",D.eq2,A.c,6)}else{b8=B.K()
b8.r=D.we.gp(0)
b9.an(e,b8)}b8=B.bn(D.f9C,D.eB6)
s=B.K()
s.r=A.w.gp(0)
b9.an(b8,s)
return!0
case"router":l=B.bn(D.f9c,A.mw)
$.S()
b8=B.K()
b8.sav(D.c9b.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.an(l,b8)
for(a0=0;a0<2;++a0){a1=F.SD[a0]
b8=a1<0?-4:4
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.cl.gp(0)
s.c=4
s.d=A.bu
b9.ah(new B.p(a1,-4),new B.p(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.j.bh(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b8.r=(a2?A.bd:A.aM).gp(0)
b9.N(new B.p(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bZ(H.vv,8+u*6+A.j.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=1.8
r.r=A.hd.j(0.9-u*0.2).gp(0)
b9.cB(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bn(D.f8S,A.hV)
s=$.S()
r=B.K()
r.r=A.cS.gp(0)
b9.an(b8,r)
if(b7){b8=B.K()
b8.r=A.ay.j(0.5*a3).gp(0)
b8.y=A.wy
b9.N(A.vu,34,b8)}a4=new B.aG(s.r,A.ai,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.c7(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bv())
b8=B.K()
b8.r=B.ar(A.em,D.bjw,a3).gp(0)
b9.af(a4,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.4
b8.r=A.bW.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bp(b8.save())
b8.translate(0,-2)
b9.hW(0,c1*7)
s=B.K()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.a8B,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bp(b8.save())
b8.translate(0,a5)
s=$.S().r
r=x.v
l=new B.aG(s,A.ai,b6,b6,B.a([],r))
l.E(new B.aZ(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bv())
q=B.K()
q.sav(D.c7d.aK(0,D.f95))
b9.af(l,q)
q=new B.aG(s,A.ai,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bv())
p=B.K()
p.r=A.fI.gp(0)
b9.af(q,p)
r=new B.aG(s,A.ai,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bv())
s=B.K()
s.r=A.fI.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aCE[a0]
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.as.gp(0)
b9.N(new B.p(a1,10),7.5,s)
J.bp(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.J,new B.p(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.j.F(b8+u*8,14)
r=-4+u*5
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.aD.gp(0)
q.c=1.6
b9.ah(new B.p(-34-s,r),new B.p(-42-s,r),q)}return!0
case"kettle":b8=$.S().r
s=x.v
l=new B.aG(b8,A.ai,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.c7(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bv())
r=B.K()
r.sav(D.c8i.aK(0,D.f8R))
b9.af(l,r)
r=new B.aG(b8,A.ai,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bv())
q=B.K()
q.r=A.e1.gp(0)
b9.af(r,q)
s=new B.aG(b8,A.ai,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.c7(-34,-6,-18,12))
b8=B.K()
b8.b=A.a9
b8.c=5
b8.r=A.as.gp(0)
b9.af(s,b8)
b8=B.K()
if(b7){s=B.ar(A.cI,A.uo,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cS
b8.r=s.gp(0)
b9.ar(D.f8Q,b8)
if(b7){b8=B.K()
b8.r=A.cI.j(0.3).gp(0)
b8.y=A.mg
b9.N(A.aLN,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.j.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.N(new B.p(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.K()
b8.r=A.as.gp(0)
b9.N(D.enk,3,b8)
return!0
case"lamp":if(b7){u=A.j.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aG($.S().r,A.ai,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bv())
s=B.K()
s.r=A.dC.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.K()
s.r=A.dC.j(0.5*u).gp(0)
s.y=T.Os
b9.N(D.erq,24,s)}b8=B.bn(D.f9v,A.hV)
s=$.S()
r=B.K()
r.r=A.cS.gp(0)
b9.an(b8,r)
r=B.K()
r.r=A.d1.gp(0)
r.c=3
r.d=A.bu
b9.ah(D.enA,D.aM_,r)
r=B.K()
r.r=A.d1.gp(0)
r.c=3
r.d=A.bu
b9.ah(D.aM_,D.err,r)
a7=new B.aG(s.r,A.ai,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bv())
s=B.K()
s.r=(b7?A.aQ:A.kv).gp(0)
b9.af(a7,s)
b8=B.K()
b8.r=(b7?A.c:A.bj).gp(0)
b9.N(D.eru,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
a8=new B.aG(b8,A.ai,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.c7(0,22,34,-6))
r=B.K()
r.b=A.a9
r.c=2
r.r=A.hx.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.j.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b1.r=D.a5p[u].j(0.6).gp(0)
b1.y=A.H6
b9.N(new B.p(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aG(b8,A.ai,b6,b6,b1)
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
q=new B.c7(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.bv()
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
if(b0)p=D.a5p[u]
else{p=B.ar(D.a5p[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.isF(b9,c0,c1,c2)},
fR:function fR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hg9(d){var w=D.mt.h(0,d)
return(w==null?null:w.b)===D.AB},
itW(d,e,f){return B.a6(d,!1).ce(B.vk(null,!1,!0,!0,new C.h0S(e,f),A.eT,null,A.pl,new C.h0T(),x.H))},
Kj:function Kj(d,e){this.a=d
this.b=e},
mx:function mx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h0S:function h0S(d,e){this.a=d
this.b=e},
h0T:function h0T(){},
W7:function W7(d,e,f){this.c=d
this.d=e
this.a=f},
bm5:function bm5(d,e){var _=this
_.d=$
_.e=null
_.bw$=d
_.a9$=e
_.c=_.a=null},
dYw:function dYw(d){this.a=d},
dYv:function dYv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYt:function dYt(){},
dYu:function dYu(d){this.a=d},
dYs:function dYs(d){this.a=d},
dYr:function dYr(d,e){this.a=d
this.b=e},
dYq:function dYq(d,e){this.a=d
this.b=e},
dYp:function dYp(d){this.a=d},
dYo:function dYo(d){this.a=d},
dYk:function dYk(d){this.a=d},
dYj:function dYj(d){this.a=d},
dYn:function dYn(d,e,f){this.a=d
this.b=e
this.c=f},
dYm:function dYm(d){this.a=d},
dYl:function dYl(d){this.a=d},
by4:function by4(d,e,f){this.b=d
this.c=e
this.a=f},
afX:function afX(d,e,f){this.b=d
this.c=e
this.a=f},
aNz:function aNz(){},
a2a(d,e,f,g,h,i){return new C.bwR(d,e,f,g,h,i)},
bwR:function bwR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ftw:function ftw(){},
ftx:function ftx(){},
fty:function fty(){},
ftz:function ftz(){},
ftA:function ftA(){},
ftB:function ftB(){},
ftC:function ftC(){},
ftD:function ftD(){},
a9A:function a9A(d){this.a=d},
cmV:function cmV(d){this.a=d},
cmW:function cmW(){},
cmU:function cmU(d,e){this.a=d
this.b=e},
cmT:function cmT(d){this.a=d},
XJ:function XJ(d){this.a=d},
aGJ:function aGJ(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h6$=f
_.m7$=g
_.fb$=h
_.h7$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
eUX:function eUX(d){this.a=d},
eUT:function eUT(d){this.a=d},
eUS:function eUS(d,e){this.a=d
this.b=e},
eUV:function eUV(d,e){this.a=d
this.b=e},
eUU:function eUU(d,e){this.a=d
this.b=e},
eUW:function eUW(d){this.a=d},
byg:function byg(d,e,f){this.b=d
this.c=e
this.a=f},
Ww:function Ww(d){this.a=d},
bmg:function bmg(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h6$=d
_.m7$=e
_.fb$=f
_.h7$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
e4l:function e4l(){},
e4m:function e4m(){},
e4g:function e4g(d,e){this.a=d
this.b=e},
e4i:function e4i(d,e){this.a=d
this.b=e},
e4j:function e4j(d){this.a=d},
e4h:function e4h(d){this.a=d},
e4k:function e4k(d){this.a=d},
bsX:function bsX(d,e,f){this.b=d
this.c=e
this.a=f},
VH:function VH(d){this.a=d},
blP:function blP(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h6$=d
_.m7$=e
_.fb$=f
_.h7$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
dPO:function dPO(){},
dPP:function dPP(){},
dPJ:function dPJ(){},
dPM:function dPM(d,e){this.a=d
this.b=e},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPN:function dPN(d){this.a=d},
dPK:function dPK(d){this.a=d},
aKa:function aKa(d,e,f){this.a=d
this.b=e
this.c=f},
Wn:function Wn(d){this.a=d},
bm7:function bm7(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e0R:function e0R(d,e){this.a=d
this.b=e},
e0S:function e0S(d){this.a=d},
e0Q:function e0Q(d,e){this.a=d
this.b=e},
e0T:function e0T(d){this.a=d},
e0P:function e0P(d,e){this.a=d
this.b=e},
e0U:function e0U(d){this.a=d},
e0O:function e0O(d,e){this.a=d
this.b=e},
e0V:function e0V(d,e){this.a=d
this.b=e},
e0N:function e0N(d,e){this.a=d
this.b=e},
e0W:function e0W(d){this.a=d},
e0M:function e0M(d,e){this.a=d
this.b=e},
e0X:function e0X(d){this.a=d},
e0L:function e0L(d){this.a=d},
e0Y:function e0Y(d){this.a=d},
e0K:function e0K(d){this.a=d},
e0Z:function e0Z(d){this.a=d},
e1_:function e1_(d){this.a=d},
e0J:function e0J(d){this.a=d},
bo9:function bo9(d,e,f){this.b=d
this.c=e
this.a=f},
X6:function X6(d){this.a=d},
aG2:function aG2(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
erM:function erM(d,e){this.a=d
this.b=e},
erN:function erN(d,e,f){this.a=d
this.b=e
this.c=f},
erL:function erL(d,e,f){this.a=d
this.b=e
this.c=f},
erO:function erO(d){this.a=d},
erK:function erK(d){this.a=d},
erS:function erS(d){this.a=d},
erR:function erR(d,e){this.a=d
this.b=e},
erQ:function erQ(d,e){this.a=d
this.b=e},
erT:function erT(d,e){this.a=d
this.b=e},
erP:function erP(d,e){this.a=d
this.b=e},
erU:function erU(d){this.a=d},
Xg:function Xg(d){this.a=d},
aGn:function aGn(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eCy:function eCy(d){this.a=d},
eCz:function eCz(d){this.a=d},
eCw:function eCw(d,e){this.a=d
this.b=e},
eCx:function eCx(d){this.a=d},
eCv:function eCv(d){this.a=d},
eCA:function eCA(d){this.a=d},
eCB:function eCB(d){this.a=d},
eCC:function eCC(d){this.a=d},
eCD:function eCD(d,e){this.a=d
this.b=e},
XA:function XA(d){this.a=d},
bnn:function bnn(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eQq:function eQq(){},
eQz:function eQz(){},
eQv:function eQv(d){this.a=d},
eQu:function eQu(){},
eQw:function eQw(d,e){this.a=d
this.b=e},
eQt:function eQt(d,e){this.a=d
this.b=e},
eQx:function eQx(d){this.a=d},
eQs:function eQs(d,e){this.a=d
this.b=e},
eQy:function eQy(d){this.a=d},
eQr:function eQr(d){this.a=d},
X5:function X5(d){this.a=d},
bmS:function bmS(d,e,f,g,h,i,j,k){var _=this
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
_.h6$=f
_.m7$=g
_.fb$=h
_.h7$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
eqr:function eqr(){},
eqs:function eqs(){},
eqk:function eqk(d){this.a=d},
eqj:function eqj(d){this.a=d},
eql:function eql(d){this.a=d},
eqi:function eqi(d){this.a=d},
eqm:function eqm(d){this.a=d},
eqh:function eqh(d){this.a=d},
eqn:function eqn(d,e){this.a=d
this.b=e},
eqg:function eqg(d,e){this.a=d
this.b=e},
eqo:function eqo(d){this.a=d},
eqf:function eqf(d,e){this.a=d
this.b=e},
eqp:function eqp(d){this.a=d},
eqe:function eqe(d,e){this.a=d
this.b=e},
eqq:function eqq(d){this.a=d},
eqd:function eqd(d,e){this.a=d
this.b=e},
bfH:function bfH(d,e,f){this.c=d
this.d=e
this.a=f},
aNl:function aNl(){},
bzZ:function bzZ(){},
aNG:function aNG(){},
bA4:function bA4(){},
aO8:function aO8(){},
bAd:function bAd(){},
aOz:function aOz(){},
bAm:function bAm(){},
JQ(d,e,f,g){var w,v,u,t,s,r,q,p=$.atC
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.J)(e),++w)E.mv(d,e[w],f,g)
return}for(p=B.cX(e,0,B.dB(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bR(p,p.gJ(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mv(d,s,f,g)
else B.bO(new B.bd(1000*q),new C.cmR(d,s,f,g),u)}},
ckp(d){return C.hYi(d)},
hYi(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ckp=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$ckp)
case 7:r=f
q=B.aU(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.z)
w=1
break}p=A.X.aQ(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a2(p,o,n):B.T(o,n)
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
return B.i($async$ckp,v)},
b3m(d,e){return C.hYj(d,e)},
hYj(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b3m=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3m)
case 6:s=g
w=7
return B.b(s.aC("String","ngmy_play_progress_v1_"+d,A.X.aw(e,null)),$async$b3m)
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
return B.i($async$b3m,v)},
cmR:function cmR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iiS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.J)(w),++q){p=w[q]
u.push(B.I(["k",p.b,"x",B.op(A.j.ad(p.c,4)),"y",B.op(A.j.ad(p.d,4)),"v",p.e,"l",B.op(A.j.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.op(A.j.ad(p.as,3)),"ch",p.at,"vc",B.op(A.j.ad(p.z,3)),"s",B.op(A.j.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.J)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a4(f).k("ch.E"))
A.d.ff(l)
return A.X.aw(B.I(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
it5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.X.aQ(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.t(w,"parts"))
f=J.aT(f==null?A.cr:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=B.aU(J.t(t,"k"))
s=e==null?"":e
if(!$.qF().am(0,s)){J.c5(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u0(a2,d,a0,a1)
a3.asa(a2,d,a0,a1)
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
d=B.aU(J.t(t,"bw"))
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
i=J.aT(i==null?A.cr:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=B.aJ(J.t(p,0))
o=f==null?a5:A.j.M(f)
f=B.aJ(J.t(p,2))
n=f==null?a5:A.j.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.am6(m,A.j.M(B.dD(J.t(p,1))),l,A.j.M(B.dD(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.j.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aT(h==null?A.cr:h)
while(h.C()){j=h.gR(h)
J.c5(k,A.j.M(B.dD(j)))}return new B.br6(i,k)}catch(a4){return a5}},
fKz(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fKz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aA(),$async$fKz)
case 7:r=o.aU(n.t(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fKz,v)},
bGJ(d){return C.iuJ(d)},
iuJ(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bGJ=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aA(),$async$bGJ)
case 7:w=6
return B.b(f.aC("String","ngmy_electronics_lab_v1",d),$async$bGJ)
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
return B.i($async$bGJ,v)}},D,H,Am,X,An,Y,A2,Ao
J=c[1]
B=c[0]
A=c[2]
A3=c[120]
Z=c[160]
A_=c[146]
A4=c[152]
A0=c[150]
S=c[143]
A5=c[136]
A6=c[154]
A7=c[163]
A8=c[107]
A9=c[138]
A1=c[119]
N=c[145]
Aa=c[161]
Ab=c[153]
Ac=c[156]
Ad=c[76]
T=c[141]
O=c[130]
U=c[85]
Ae=c[88]
Af=c[132]
V=c[144]
W=c[155]
E=c[29]
K=c[3]
G=c[38]
I=c[109]
Ag=c[103]
Ah=c[162]
P=c[159]
Ai=c[102]
Aj=c[157]
R=c[131]
Ak=c[158]
Q=c[148]
Al=c[26]
L=c[28]
F=c[100]
M=c[98]
C=a.updateHolder(c[18],C)
D=c[140]
H=c[142]
Am=c[67]
X=c[149]
An=c[57]
Y=c[111]
A2=c[151]
Ao=c[147]
C.alj.prototype={}
C.WQ.prototype={
S(){return new C.bmG(B.T(x.N,x.i),new B.au(A.ax,$.ax()),B.a([],x.X),B.a([],x.eZ),B.mZ(0,null,null))}}
C.bmG.prototype={
gX3(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
this.ch.t()
this.a3()},
PQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.js()
p.bP(0,A.cf)
t.m(new C.ejy(t))
t.a.toString
p=t.gX3()
w=3
return B.b(C.bCg(C.i6h(q,C.iiD(p),o,t.ay)),$async$PQ)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=C.ik9(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ejz(t,o,r))
$.aW.x1$.push(new C.ejA(t))
case 1:return B.h(u,v)}})
return B.i($async$PQ,v)},
Z9(d){return this.c3j(d)},
aYA(){return this.Z9(null)},
c3j(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Z9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.js()
t.f.sb1(0,o)
t.m(new C.ejL(t))
G.dE(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bCg(C.idF(o)),$async$Z9)
case 3:r=n.a=m.isL(f)
p.b=""
if(r!=null&&!C.iiE(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.ika(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.alj(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ejM(p,t))
t.c8V(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Z9,v)},
c8V(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gX3()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.ejH(m))
t=d.d
s=B.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ejF(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ejI(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.J)(r),++u){p.$2(o,new C.ejJ(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ejK(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bg.j(0.1),g=B.m(16),f=B.L(A.bg.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fh7,A.bc,B.E(B.d(m.Q,l,l,l,l,l,l,A.AO,l,l,l),1)],x.p),A.l,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fIn
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.VS,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fsg,l,l,l)],v),A.l,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uy,B.d(u,l,l,l,l,l,l,D.fv7,l,l,l),l))
w.push(A.cT)
w.push(B.d(k.b,l,l,l,l,l,l,I.EQ,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.m(10)
w.push(B.q(l,B.d(u,l,l,l,l,l,l,D.fxJ,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i0,A.co,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lX,l,l,l)
q=u[r]
s=s?A.c:A.aD
w.push(new B.D(A.NX,new B.c8(A.aL,A.e,A.i,A.E,l,A.p,l,0,B.a([t,A.bo,new B.bz(1,A.bb,B.d(q,l,l,l,l,l,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.J)(j),++p){o=j[p]
t=A.bg.j(0.3)
s=new B.aN(12,12)
s=B.q(l,B.d(o.a,l,l,l,l,l,l,A.Vy,l,l,l),A.f,l,l,new B.o(t,l,l,new B.be(s,s,s,s),l,l,A.n),l,l,l,l,A.hh,l,l,l)
t=A.c.j(0.07)
q=new B.aN(12,12)
A.d.u(w,B.a([A.T,new B.bL(A.aa,l,l,s,l),A.av,B.q(l,B.d(o.b,l,l,l,l,l,l,D.fDA,l,l,l),A.f,l,l,new B.o(t,l,l,new B.be(q,q,q,q),l,l,A.n),l,l,l,l,A.bV,l,l,l)],v))}if(m.ax)w.push(D.esX)
j=B.cc(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.ajx(B.q(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bCt,A.eH,l,l,1/0),A.b_,A.iz),B.E(C.hkZ(m.gX3(),l,l,m.e),1)],w),A.l,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dW("Ask about it",i,new C.ejP(m),l,A.bg,l),new E.dW("Invent something new",!i,new C.ejQ(m),l,A.bg,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.duX[p]
i.push(new E.dW(n,!1,new C.ejR(m,n),l,A.bg,l))}f.push(new E.fb(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dcK[p]
i.push(new E.dW(r,!1,new C.ejS(m,r),l,A.bg,l))}f.push(new E.fb(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.m(16),A.a1),l,A.f_,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kk,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ejT(m,k),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.dk,!0,A.a5,l,A.ao,l,A.Vm,l,l),1)
h=m.at
v=h&&j?D.bSr:A.ed
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.af,new E.fC(v,j,new C.ejU(m,k),A.bg,l)],w),A.l,l,A.e,A.i,0,l,l))
return E.lB(A.bg,A.f7,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.P,0,A.p))}}
C.GY.prototype={}
C.vr.prototype={}
C.Xc.prototype={
S(){return new C.aGh(A.J,A.J,A.az,B.aR(x.S),$,A.bF,0,B.a([],x.X),null,null)}}
C.aGh.prototype={
gaZT(){var w,v,u,t=this,s=D.Iu[t.cx],r=D.SF[t.cy],q=D.Dy[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dZ(w,w.r,B.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aAV[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cF(p,0,new C.eyS())},
ga3A(){return D.Iu[this.cx].d/this.gaZT()},
gaQP(){return 0.1*(D.Iu[this.cx].d/0.9)/D.SF[this.cy].d},
Y(){this.a4()
this.mh()
C.ckp("rocket_lander").bG(new C.ezb(this),x.k)},
c93(){var w=this
w.ay=A.j.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cQ.ai()*0.6
w.f=new B.p(0.15+A.cQ.ai()*0.7,0.08)
w.r=new B.p((A.cQ.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mz(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.ezc())
return}w=D.th[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.j.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.p(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3A()
v=v.a2(0,new B.p(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaQP())}if(m.dy){t=m.r
v=v.aJ(0,t.aM(0,t.gcK()*6*D.aCY[m.d]))}t=m.r=m.r.a2(0,v.aM(0,d))
s=m.f=m.f.a2(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.p(-t.a*0.4,t.b)
t=new B.p(A.j.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.p(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Dy[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b3m("rocket_lander",B.I(["unlocked",t],x.N,x.z))
C.JQ("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3A()/(D.th[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.j.ad(m.ga3A()/(D.th[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dE(80,"",500,0,0.6,"noise")
B.fM()}}if(m.Q&&m.x>0&&A.o.F(A.j.bh(m.CW*20),2)===0)G.dE(90,"",70,0,0.12,"noise")
m.m(new C.ezd())},
aha(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fuB,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dW(e[w].a,f.$1(w),new C.eyU(this,g,w),v,h,v))
return new B.D(A.eO,B.x(B.a([u,A.cT,B.bW(A.bH,s,A.bs,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bI3(d){var w,v,u,t,s=this,r=null,q=s.ga3A()/(D.th[s.d].b/9.81*0.28)>=1,p=A.j.V(1/s.gaQP()),o=D.aCY[s.d],n=B.m(24),m=d.c,l=B.L(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.av,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.abo,r,r,r),A.W,s.aha("ENGINE: "+D.Iu[s.cx].b,D.Iu,new C.eyJ(s),new C.eyK(s),A.cI),s.aha("FUEL TANK: "+D.SF[s.cy].b,D.SF,new C.eyL(s),new C.eyM(s),A.b4),s.aha("LANDING GEAR: "+D.Dy[s.db].b,D.Dy,new C.eyN(s),new C.eyO(s),A.aG),s.aha("EXTRAS (tap to add)",D.aAV,new C.eyP(s),new C.eyQ(s),A.bg)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.h0n)
o=(q?A.b4:A.bZ).j(0.14)
w=B.m(12)
v=A.j.ad(s.gaZT(),2)
u=A.j.ad(s.ga3A()/(D.th[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.j.V(D.Dy[s.db].d*100)+".",r,r,r,r,r,r,D.fvg,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i0,A.bV,r,r,r))
m.push(A.W)
m.push(new B.bL(A.A,r,r,new E.fC(A.oG,"Launch",new C.eyR(s),A.b4,r),r))
return B.as(B.q(r,B.cc(B.x(m,A.E,r,A.e,A.P,0,A.p),A.t,r,A.y,r,A.bS,r,r,A.ah),A.f,r,A.m1,new B.o(D.bsc,r,l,n,r,r,A.n),r,r,r,A.bV,r,r,r,r),r,r,r)},
b03(d,e,f,g){var w=null,v=f?A.cI:A.c.j(0.1),u=B.m(18),t=B.L(A.aT,A.r,1)
return B.mP(A.iR,B.q(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eyG(e),new C.eyH(e),w,w,w,w,new C.eyI(e))},
b02(d,e,f){return this.b03(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cr(new C.ez4(s,D.th[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.th[w].a:"\ud83d\udd12"
o.push(new E.dW(v,s.d===w,new C.ez5(s,w),r,D.th[w].c,r))}v=B.a([s.b02(F.aqu,new C.ez6(s),s.y),A.bc,s.b03(A.uU,new C.ez7(s),s.Q,130),A.bc,s.b02(A.PJ,new C.ez8(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aG:A.c.j(0.1)
t=B.m(18)
A.d.u(v,B.a([A.bc,B.az(r,B.q(r,D.bWG,A.f,r,r,new B.o(u,r,B.L(A.aT,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ez9(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lB(A.cI,A.f7,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fb(o,"WORLD",r),B.A(v,A.l,r,A.ba,A.i,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.bjz.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.th[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.S(),f=B.K(),e=l.c,d=B.ar(K.a_c,e,0.25)
d.toString
f.sav(new B.a8(A.b0,A.b7,A.x,B.a([F.aho,d],x.O),n,n).aK(0,new B.a1(0,0,i,h)))
a0.ar(new B.a1(0,0,i,h),f)
w=new B.e2()
w.cY(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.N(new B.p(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aG(g.r,A.ai,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e2()
s.cY(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.ak(f)
t.ab()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bv())
h=$.S()
g=B.K()
g.r=B.ar(e,A.w,0.6).gp(0)
a0.af(t,g)
q=B.bs(new B.p(m.ax*k,u+10),8,m.ay*k)
g=B.bn(q,A.iF)
e=B.K()
e.r=A.bd.gp(0)
a0.an(g,e)
e=B.bn(q.cn(2),A.mw)
g=B.K()
g.b=A.a9
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.an(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bp(f.save())
f.translate(g.a*k,g.b*j)
a0.hW(0,m.w)
k=m.as
if(k==="crashed"){m=B.K()
m.r=A.cI.j(0.6).gp(0)
m.y=T.Os
a0.N(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aG(k,A.ai,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bv())
m=B.K()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aG(k,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bv())
m=B.K()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aG(m,A.ai,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.c7(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.c7(-14,-10,0,-26))
o.E(new B.bv())
k=B.K()
k.sav(D.c8N.aK(0,D.f8E))
a0.af(o,k)
k=B.K()
k.r=A.aG.gp(0)
a0.N(H.vv,5,k)
k=new B.aG(m,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bv())
j=B.K()
j.r=A.ay.gp(0)
a0.af(k,j)
i=new B.aG(m,A.ai,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bv())
m=B.K()
m.r=A.ay.gp(0)
a0.af(i,m)
f.restore()},
aE(d){return!0}}
C.aOg.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAf.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bzY()}}
C.aUl.prototype={}
C.a4u.prototype={}
C.bcv.prototype={}
C.VG.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ew(["skin"],x.N),o=new Float32Array(0)
return new C.aEL(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.LR,D.LR,A.az,A.cQ,o,new Int32Array(0),$,A.bF,0,B.a([],x.X),null,null)}}
C.aEL.prototype={
Y(){var w=this
w.a4()
w.mh()
w.as=new C.c6L(w.gchX())
new C.dPH(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bz_()},
chY(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fa(0,B.I(["t","init","data",$.hv9],x.N,x.z))
v.at=!0
v.ay=""
v.aAZ()
break
case"parts":v.m(new C.dPh(v))
break
case"pick":v.m(new C.dPi(v,d))
break
case"shot":v.aj4(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dPj(v))
break}},
aAZ(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ayK[q.cx]
v=new C.dPk()
u=q.ch
u=B.C(u,B.a4(u).k("ch.E"))
A.d.ff(u)
t=x.N
s=B.I(["layers",u,"skinMode",q.CW,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cy,"bpm",A.j.V(q.k4),"spin",q.go],t,x.cK)
r=A.X.aw(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.fa(0,u)}},
aj4(d){return this.cyY(d)},
cyY(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aj4=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cM.aO(A.a.b2(d,A.a.co(d,",")+1))
w=6
return B.b(B.ax3(B.a([B.cGN(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aj4)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.T(K.aUn)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aj4,v)},
aAn(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mz(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.j.bh(w)!==A.j.bh(v.p1)){E.XC("kick",0,0.4)
v.UJ(170,new C.dPI())}v.p1=w
return},
aeI(d){var w,v,u,t,s=this
s.m(new C.dPl(s,d))
if(d==null){s.fy=D.LR
s.fr=1
w=s.as
if(w!=null)w.fa(0,B.I(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dPm(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aAZ()
w=s.as
if(w!=null)w.fa(0,B.I(["t","focus","group",d],x.N,x.z))
s.id=0
s.cBr(t,d)
return},
cBr(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.XC("kick",0,0.8)
this.UJ(260,new C.dPn())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dE(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UJ(w*70,new C.dPo(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dE(110,"",360,0.7,0.3,"saw")
else E.har("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dE(210+e.length*4,"",80,0.6,0.55,"tri")
G.dE(2400,"",20,0,0.3,v)
break
case"muscle":G.dE(70,"",150,1,0.6,"sine")
break
case"vessel":G.dE(300,"",380,0.4,0.22,v)
E.XC("kick",0,0.3)
break
default:E.har("organic",2+A.o.F(e.length,6),200,0.4)}},
cG5(d){this.m(new C.dPq(this,d))},
b0l(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(p.aAn(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.C(o,o.$ti.k("ch.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.az(w)]
p.R8=""},
bZZ(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dPe(u,w,d))
v=x.t
C.JQ("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UJ(1100,new C.dPf(u))
return}if(d==null){if(u.cy!=null)u.aeI(null)
return}u.aeI(d)},
c2B(d,e){var w,v=this,u=null,t=B.m(18),s=B.L(A.bT.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fqD,u,u,u)}else if(d==null||e==null)w=D.fFK
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.ht,u,u,u),A.cT,B.d(e.b,u,u,u,u,u,u,I.EQ,u,u,u)],w),A.E,u,A.e,A.P,0,A.p),1),B.aI(u,u,u,u,D.bZf,u,u,u,new C.dPg(v),u,u,u,u,"Back to the whole body",A.ch)],w),A.E,u,A.e,A.i,0,u,u)}return B.q(u,w,A.f,u,u,new B.o(K.Yt,u,s,t,u,u,A.n),u,u,u,u,S.alU,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dGg.h(0,g)
i.aAZ()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dn8
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.J)(v),++s){r=v[s]
if(i.aAn(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,K.oJ,h,h,h,new C.dPx(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bM:B.C_(h,A.pO,p))}p=i.ax
o=p?0:1
q.push(new B.du(p,B.zn(B.q(A.A,B.x(D.dwx,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.b7c,h,h,D.hsC,h,h,h,h,h),A.b_,A.mZ,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b2,A.t,q,h),1),new B.D(F.a0j,i.c2B(g,f),h)],v),A.l,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dem[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dW(l,o,new C.dPy(i,n),n.c,A.bT,h))}p=B.a([new E.fb(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.J)(w),++s){k=w[s]
o.push(new E.dW(k,k===i.cy,new C.dPz(i,k),h,A.aQ,h))}p.push(new E.fb(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iQ(A.bZ,""+A.j.V(o)+" beats/min","Heart rate",180,40,new C.dPA(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G6(D.ayK[j],i.cx===j,new C.dPB(i,j),!1,h))
p.push(new E.fb(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dW("Spin",o,new C.dPC(i),D.apo,A.aG,h),new E.fC(A.oB,"Reset view",new C.dPD(i),A.c,h),new E.dW(l,m,new C.dPE(i),A.HM,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.dW("Heartbeat sound",i.ok,new C.dPF(i),A.oF,A.bZ,h))
p.push(new E.fb(v,h,h))
return E.lB(A.bT,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.P,0,A.p))}}
C.aNj.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aNk.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.byZ()}}
C.c6L.prototype={
kX(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hBq
$.hBq=v+1
u="ngmy-body-viewer-"+v
$.xu()
$.pY().pe(u,new C.c6M(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fB(v,"message",new C.c6N(t),!1,x.gA)
t.b=u},
fa(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Rx(w.contentWindow)
if(w!=null)J.ajm(w,e,"*")}}catch(v){}}}
C.yL.prototype={}
C.D3.prototype={}
C.nL.prototype={}
C.bdg.prototype={}
C.VN.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aEN(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.J,A.J,B.aR(u),$,A.bF,0,B.a([],x.X),null,null)}}
C.aEN.prototype={
Y(){var w=this
w.a4()
w.mh()
w.adG()
$.aW.x1$.push(new C.dRm(w))},
adG(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adG=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$adG)
case 6:q=e.tV("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dR0(s,r))
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
return B.i($async$adG,v)},
ae1(d){return this.c6A(d)},
c6A(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ae1=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aA(),$async$ae1)
case 6:r=f
q=s.cx
p=B.a4(q).k("ka<ch.E,n>")
q=B.C(new B.ka(q,new C.dR3(),p),p.k("M.E"))
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
return B.i($async$ae1,v)},
az0(d,e,f,g){var w="c"+this.y++,v=new C.D3(w,e,f,g)
this.d.n(0,w,v)
return v},
mP(d,e,f){return this.az0(0,e,f,0)},
ad0(d,e){var w
if(D.A9.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a2(0,new B.p(-36,w))},
ul(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aV_(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fb$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cYa[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.ul(p,0)&&n.ul(p,1)
break
case"or":p=q.a
o=n.ul(p,0)||n.ul(p,1)
break
case"xor":p=q.a
o=n.ul(p,0)!==n.ul(p,1)
break
case"nand":p=q.a
o=!(n.ul(p,0)&&n.ul(p,1))
break
case"nor":p=q.a
o=!(n.ul(p,0)||n.ul(p,1))
break
case"not":o=!n.ul(q.a,0)
break
default:o=n.ul(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bSs(){return this.aV_(null)},
mz(d){var w,v,u,t,s,r,q,p,o,n=this
n.bSs()
if(!n.ax)return
for(w=n.d,w=new B.b8(w,B.a4(w).k("b8<2>")).gae(0),v=new B.eH(w,new C.dRn()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fb$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fb$)
o=s+1
G.dE(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
az1(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
mi(d,e){var w=this.x
return new B.p(d*w.a,e*w.b)},
avb(d){var w=this
if(w.x.A(0,A.az)){$.aW.x1$.push(new C.dQZ(w,d))
return}w.m(new C.dR_(w,d))},
cBJ(d){this.m(new C.dR4(this,d,$.bH4()[d]))},
cbm(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bH4()[a0]
v=d.d
u=B.a4(v).k("b8<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b8(v,u),new C.dQU(),t),s)
A.d.aZ(r,new C.dQV())
q=B.C(new B.Y(new B.b8(v,u),new C.dQW(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dQX(d,w))
return}u=d.r
p=B.dJ(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dw(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.ha(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aV_(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lA(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aN(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.u(0,p)
d.m(new C.dQY(d,o,a0))},
azT(d){var w,v,u,t,s=this.d,r=B.a4(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bR(s,s.gJ(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ckp(d){var w,v,u,t,s,r=this.d,q=B.a4(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bR(r,r.gJ(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c2u(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.A9.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.ad0(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bRb(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.ad0(p,o)
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
cbo(d){var w,v,u,t=this,s=t.azT(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.eY()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
G.dE(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dR5())
return}u=t.bRb(d)
if(u!=null)t.m(new C.dR6(t,u))
else t.m(new C.dR7(t))},
axP(d){return this.c5z(d)},
c5z(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$axP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.azT(d)
if(s==null){w=1
break}B.jZ()
t.m(new C.dR2(t,s))
case 1:return B.h(u,v)}})
return B.i($async$axP,v)},
bDS(d){if(this.x.A(0,A.az))return
this.m(new C.dQT(this,d,A.cQ))
B.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bH4()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.X(i.ax?A.oF:V.tc,A.ab,h,h,h,21),h,h,h,new C.dRg(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cu.j(0.14)
r=B.L(A.cu.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fpL,h,h,h),B.d(w.b,h,h,h,h,h,h,A.VM,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.li,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.b4:A.eW,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bJ(D.fRo,h,i.gcbl(),B.bo(A.cu,h,h,h,h,h,h,h,h,h,h,A.ch))],g),A.l,h,A.e,A.i,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,U.O4,D.bDb,h,h,1/0))}u.push(B.E(B.cr(new C.dRh(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.d(D.A9.h(0,r).a+": "+D.A9.h(0,r).e,h,h,h,h,h,h,A.tO,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a0n,A.bV,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.A9.gdO(D.A9),s=s.gae(s);s.C();){r=s.gR(s)
q=new B.aN(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.az(h,B.q(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bG,B.d(p.a,h,h,h,h,h,h,D.aWn,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.o(n,h,new B.bG(m,m,m,m),new B.be(q,q,q,q),h,h,A.n),h,h,h,A.fD,Ai.O1,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dRi(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.drG[l]
s.push(new E.fC(A.PK,k.b,new C.dRj(i,k),A.cu,h))}s.push(new E.fC(K.wH,"Clear",new C.dRk(i),A.bZ,h))
r=B.a([],g)
for(j=0;q=$.bH4(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ee:A.lN
o=i.ay
n=i.cx.q(0,j)?A.b4:A.bl
r.push(new E.dW(q.a,o===j,new C.dRl(i,j),p,n,h))}return E.lB(A.cu,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fb(t,"PARTS",h),new E.fb(s,"TRY",h),new E.fb(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bdz.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.S()
w=B.K()
w.r=D.afI.gp(0)
a5.ar(new B.a1(0,0,0+a3,0+a4),w)
v=B.K()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.N(new B.p(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.J)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.ad0(l,o.c)
h=s.h(0,n)===!0
n=$.S()
g=B.a([],r)
f=new B.aG(n.r,A.ai,a2,a2,g)
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
if(h){n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=9
n.r=A.bl.j(0.28).gp(0)
n.y=N.ot
a5.af(f,n)}n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=3.2
n.d=A.bu
n.r=(h?A.dC:A.bx).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a2(0,D.JD)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aG($.S().r,A.ai,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.kn(a4+e,w,a3-e,s,a3,s))
s=B.K()
s.b=A.a9
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.cbn(a5,a3.d)},
cbn(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.A9.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bs(a0.c,64,64)
s=B.bn(t,A.jO)
r=w.cy===v
q=s.eQ(A.cA)
$.S()
p=B.K()
p.r=A.w.j(0.55).gp(0)
p.y=A.mg
d.an(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.K()
p.sav(new B.bY(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aK(0,B.bZ(a0.c,52)))
d.N(q,52,p)}q=s.eQ(A.cL)
p=B.K()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.an(q,p)
n=u?0.35:0
q=B.K()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sav(new B.a8(A.b0,A.b7,A.x,B.a([p,m],x.O),g,g).aK(0,t))
d.an(s,q)
q=B.K()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.an(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.py:D.bSY}else l=e.b
k=C.hch(B.lA(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aJ(0,new B.p(p/2,q.gba(q)/2)))
j=C.hch(e.a,10.5,A.c,g,g,A.I)
j.a5(d,a0.c.a2(0,new B.p(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hch(f,9,u?A.dC:A.bW,g,g,A.u)
i.a5(d,a0.c.a2(0,new B.p(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b1_(d,w.ad0(a0,h),o)
this.b1_(d,a0.c.a2(0,D.JD),o)},
b1_(d,e,f){var w
$.S()
w=B.K()
w.r=D.afI.gp(0)
d.N(e,8.5,w)
w=B.K()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.N(e,8.5,w)
w=B.K()
w.r=A.c.gp(0)
d.N(e,3.2,w)},
aE(d){return!0}}
C.aNo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA_.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bz3()}}
C.Oi.prototype={
S(){return new C.aF3(B.mZ(0,null,null))}}
C.Lk.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.Bb.prototype={}
C.aF3.prototype={
Y(){this.a4()
B.bO(A.qw,C.ir6(),x.H)},
cbt(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new C.dXy(w,e))},
c4n(){var w=this
w.e.t()
w.e=B.mZ(w.f,null,null)
w.m(new C.dXx(w))},
t(){this.e.t()
this.a3()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.P(d).ax.a===A.dm?A.c:A.c4
return B.oO(t,B.c4(v,s,t?new C.btV(w.e,w.gcbs(w),new C.dXz(d),v):new C.aJi(u,new B.bu(u.b,x.Y)),v,!1,!1,v,!1),new C.dXA(w,u),x.K)}}
C.bvx.prototype={}
C.btV.prototype={
b10(d,e,f){var w=null,v=B.d(d,w,w,w,w,w,w,B.l(w,w,f?A.bB:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(S.a0O,B.x(B.a([v,A.bG,B.d(e,w,w,w,w,w,w,B.l(w,w,f?A.cB:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.P(d).ax.a===A.dm,q=B.aF(d,A.dN,x.l).w,p=B.aI(s,s,s,s,B.X(A.eM,r?A.bB:A.ab,s,s,s,20),s,s,D.hsY,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.m(14),A.Ix,s,A.n)
else{w=B.a([A.aG.j(0.22),A.aG.j(0.06)],x.O)
v=B.m(14)
w=new B.o(s,s,B.L(A.aG.j(0.75),A.r,1.6),v,B.a([new B.ab(0,A.G,A.aG.j(0.22),A.J,8)],x.V),new B.a8(A.aA,A.aE,A.x,w,s,s),A.n)}v=B.d("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bB:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.as(B.q(s,B.x(B.a([v,B.d("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cB:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.ht2,s,A_.amp,s,s,s),s,s,s),1),A.tG],u),A.l,s,A.e,A.i,0,s,s)
v=t.b10("STUDIOS","Play, make things, and keep what you make",r)
$.bH5()
return B.bm(!1,B.x(B.a([B.E(B.w7(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nI(new B.R(8,q.r.b+6,8,4),new B.m4(w,s),s),new B.m4(v,s),new B.nI(A.i1,B.PX(new B.oR(new C.f8F(d),9,!0,!0,!0,0,B.tr(),s),D.aUc),s),new B.m4(t.b10("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nI(D.bDk,B.PX(new B.oR(new C.f8G(t),6,!0,!0,!0,0,B.tr(),s),D.aUc),s)],u)),1)],u),A.l,s,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!1)}}
C.agf.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.P(d).ax.a===A.dm){w=B.m(20)
v=(A.o.aq(o.c,3)&1)===0
u=B.a7t(v?A.aG:A.bg,20)
v=v?A.aG:A.bg
return B.aH(!1,A.a3,!0,n,B.aP(!1,w,!0,B.eA(B.x(B.a([new B.VL(v,44,m.c,n,n),A.T,B.d(m.a,n,2,A.a2,n,n,n,D.fvZ,A.K,n,n),A.cT,B.d(m.b,n,2,A.a2,n,n,n,D.fyR,A.K,n,n)],x.p),A.l,n,A.ba,A.i,0,A.p),n,u,n,A.Cz,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj)}w=B.m(20)
v=B.m(20)
u=B.ar(I.m8,l,0.3)
u.toString
t=x.O
u=B.a([u,D.aiY],t)
s=B.L(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ab(-4,A.G,l.j(0.22),A.J,14)],r)
p=B.ar(l,A.w,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ab(0,A.G,l.j(0.5),A.J,12)],r)
return B.aH(!1,A.a3,!0,n,B.aP(!1,w,!0,B.eA(B.x(B.a([B.q(n,B.X(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a8(A.aA,A.aE,A.x,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.T,B.d(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cT,B.d(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.ba,A.i,0,A.p),n,new B.o(n,n,s,v,q,new B.a8(A.aA,A.aE,A.x,u,n,n),A.n),n,A.Cz,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj)}}
C.af6.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.P(d).ax.a===A.dm,h=(A.o.aq(this.c,3)&1)===0?A.aG:A.bg,g=B.m(20)
if(i)w=B.a7t(h,20)
else{w=B.m(20)
v=B.ar(I.m8,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.aiY],x.O)
v=new B.o(l,l,B.L(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ab(0,A.G,A.w.j(0.4),A.cA,12)],x.V),new B.a8(A.aA,A.aE,A.x,v,l,l),A.n)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aN(6,6)
if(i){n=B.ar(h,A.c,0.1)
n.toString
n=B.a([n,B.VM(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ab(0,A.G,A.w.j(0.45),A.a8L,0)],s)
u.push(B.q(l,B.X(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.be(o,o,o,o),m,new B.a8(A.a7,A.aa,A.x,n,l,l),A.n),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.P,0,A.p)
if(i)t=A.bB
else{t=B.ar(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.d(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aH(!1,A.a3,!0,l,B.aP(!1,g,!0,B.eA(B.x(B.a([new B.a5(58,l,u,l),A.W,t,A.av,B.X(A.Db,i?B.VM(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.ba,A.i,0,A.p),l,w,l,A.Cz,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj)}}
C.Re.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,new B.bN(new B.o(h,j,j,B.m(22),j,j,A.n),A.bk,j,j),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ab(0,A.G,A.w.j(0.55),A.JA,26),new B.ab(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.m(22)
p=B.ar(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ar(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bN(new B.o(j,j,j,j,j,new B.a8(A.aA,A.aE,A.x,B.a([p,o,n,i],m),D.dxw,j),A.n),A.bk,j,j),0,0,0),B.ap(j,new B.bN(new B.o(j,j,j,j,j,new B.a8(A.b0,A.b7,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bk,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b2(j,j,j,new C.buV(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.L(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ab(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.q(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fs6,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.av,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Ks)
p.push(B.q(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.h7,B.A(B.a([s,A.ew,B.E(B.x(p,A.E,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.du(!0,B.e9(j,A.w.j(A.j.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.m(22)
m.push(B.bS(0,new B.du(!0,new B.bN(new B.o(j,j,B.L(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bk,j,j),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bS(0,new B.bN(new B.o(j,j,j,u,r,j,A.n),A.bk,B.bx(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.buV.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a1(r,-10,s,w)
u=d.c
J.bp(u.save())
u.translate(v.gbx().a,v.gbx().b)
d.hW(0,0.35)
t=B.bs(A.J,(w- -10)*1.6,s-r)
$.S()
s=B.K()
s.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aK(0,t))
d.ar(t,s)
u.restore()},
aE(d){return d.b!==this.b}}
C.buq.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.bq5,D.ai1],x.O),t=this.e,s=B.L(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ab(0,A.G,A.w.j(0.5),A.kF,24)],x.V),q=B.m(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,new B.bN(new B.o(w,w,s,v,r,new B.a8(A.aA,A.aE,A.x,u,w,w),A.n),A.bk,B.bx(q,B.b2(B.as(B.X(A.jJ,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bcd(p,w),A.az),A.aq),w),w)}}
C.bcd.prototype={
a5(d,e){var w,v,u,t,s,r
$.S()
w=B.K()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.p(s,0),new B.p(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.p(0,r),new B.p(u,r),w)
u=e.ei(A.J)
$.S()
t=B.K()
t.b=A.a9
t.c=1.4
t.r=v.j(0.35).gp(0)
d.N(u,30,t)},
aE(d){return!1}}
C.aJi.prototype={
S(){return new C.aJj(new B.cw(null,x.A),null,null)}}
C.aJj.prototype={
guL(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,D.bAz,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
ga_z(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.h5,null,1,null,v)
w.f2(0,!0)
v.e!==$&&B.bE()
v.e=w
u=w}return u},
gaz2(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcbq(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaYi(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaZ5(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb9R(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a4()
var w=this.guL()
w.dl()
w.dV$.I(0,this.gcBs())},
cBt(){var w,v,u,t,s,r,q,p=this,o=p.guL().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaz2().a){case 0:w=D.nQ
break
case 1:w=D.ve
break
case 2:w=D.a5s
break
case 3:w=D.nQ
break
case 4:w=D.djP
break
case 5:w=D.ve
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.adq)r=0.09
else r=s===D.adr?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dE(260+90*v,"",260,1.6,0.18,"tri")
u=D.cbn[v]
E.mv("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JQ("bell",D.ckc,1400,0.35)}}p.ax=o},
t(){this.guL().t()
this.ga_z().t()
this.bAU()},
af7(){var w=this
w.guL().d0C(0,B.dw(0,0,0,A.j.V(11e3/w.Q),0,0))
w.m(new C.f8l(w))},
cmt(){this.guL().bQ(0)
this.m(new C.f8k(this))},
af6(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$af6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaZ5(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b5,A.aP),$.ax()))}m=B.a([],m)
for(t=u.gb9R(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b5,A.aP),$.ax()))}o=B.C(u.gaYi(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(I.m8,null,new C.f8j(u,l,m,o),t,!0,!0,!0,A.lU,!1,!1,x.H),$async$af6)
case 2:l=B.C(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.ax()
n.P$=0}return B.h(null,v)}})
return B.i($async$af6,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaz2(),f=i.a.c,e=f.b,d=i.gcbq(),a0=new C.Bb(g,e,f.c,d,i.gaYi(),i.gaZ5(),i.gb9R())
f=B.ar(A.d.gH(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=B.a([B.aI(h,h,h,h,B.X(i.at?A.oF:V.tc,A.ab,h,h,h,21),h,h,h,new C.f8t(i),h,h,h,h,"Sound",h),B.aI(h,h,h,h,D.c1T,h,h,h,i.gcbr(),h,h,h,h,"Edit words and pictures",h),B.aI(h,h,h,h,K.oJ,h,h,h,new C.f8u(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c6(i.ga_z(),new C.f8v(i,a0),h),B.cr(new C.f8w(i,a0))],g)
u=i.as
t=u?i.gcms():i.gcbu()
u=u?D.bSe:A.tb
s=B.ar(A.d.gH(d),A.d.gal(d),0.4)
s.toString
t=B.A(B.a([B.aI(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ch),B.E(B.c6(i.guL(),new C.f8x(i,a1,a0),h),1),B.aI(h,h,h,h,D.bZ5,h,h,h,new C.f8y(i),h,h,h,h,"Replay",A.ch)],g),A.l,h,A.e,A.i,0,h,h)
s=i.Q
u=A.j.ad(s,1)
r=B.ar(A.d.gH(d),A.d.gal(d),0.4)
r.toString
s=E.iQ(r,u+"x","Speed",2.5,0.4,new C.f8z(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.duw[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gH(d),A.d.gal(d),0.4)
r.toString
u.push(new E.dW(p.b,o===p.a,new C.f8A(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.cbM[q]
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
d.push(B.az(h,B.q(h,h,A.f,h,h,new B.o(h,h,new B.bG(j,j,j,j),h,h,new B.a8(A.aA,A.aE,A.x,n,h,h),A.a6),h,l,h,K.alr,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f8B(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lB(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.eo(new B.an(A.a0,h,A.b2,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fb(u,"STYLE",h),new E.fb(d,"THEME",h)],g),A.l,h,A.e,A.P,0,A.p))},
bD2(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nQ[r]
p=A.j.D((1-A.e2.aA(0,A.j.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.j.D(p/1.5707963267948966,0,1)
q=D.nQ[r]
n=q+0.12
m=A.j.D((a0-n)/(q+0.2-n),0,1)
n=D.nQ[r]
q=n-0.01
q=A.j.D((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kn(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nQ[r]
h=i+0.1
if(A.j.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nQ[r]
h=i+0.1
h=A.j.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nQ[r]
h=i+0.1
h=A.j.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cK(0,r*118,0,f,f,f,new B.kI(q,new B.iS(n,f,A.b0,!0,f,new C.Re(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nQ[r]
u=v-0.02
g=A.j.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nQ[r]
t=v+0.12
e.push(new B.cK(0,r*118-3-2,0,f,f,4,new B.mJ(new C.btw(u,g,1-A.j.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bU1(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.ve[r]
p=A.qu.aA(0,A.j.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.ve[r]
m=q+0.15
l=A.j.D((a0-m)/(q+0.25-m),0,1)
m=D.ve[r]
q=m-0.03
q=A.j.D((a0-q)/(m+0.01-q),0,1)
m=B.dr()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.k5(n,n,n,1)
m.fL(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Re(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fL(3.141592653589793)
k=new B.iS(k,f,A.A,!0,f,new C.buq(a2,108,w,f),f)}e.push(new B.cK(0,r*130,0,f,f,f,new B.kI(q,new B.iS(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cGA(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a5s[w]
l.push(A.cw.aA(0,A.j.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b2(n,n,n,new C.bx0(d.d,l,D.aAu,m,C.btU(e,0.4,0.62),f,C.btU(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hcP(g,w)
q=D.aAu[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cK(r,s-q*m*p+12,n,n,t,n,new B.kI(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hcP(g,w)
r=D.a5s[w]
q=r+0.15
v.push(new B.cK(s,l,n,n,t,n,new B.kI(A.j.D((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.VY,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bJl(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cw.aA(0,C.btU(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.as(B.dO(B.b2(f,f,f,new C.bsW(A.d.gH(a1),C.btU(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.en9),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.j.D((a3-l)/(0.12+m-l),0,1)
j=A.dG.aA(0,A.j.D((o-0.7)/0.3,0,1))
l=B.dr()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fL(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.k5(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.j.F(r,1):-1
w.push(new B.y(o,new B.cK(0,0,0,0,f,f,new B.ci(A.A,f,f,new B.kI(k*(0.45+0.55*o),B.dO(new B.iS(l,f,A.A,!0,f,new C.Re(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.p(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f8c())
A.d.u(a0,new B.N(w,new C.f8d(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cbp(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.ve[q]
o=A.j.D((a2-p)/(p+0.22-p),0,1)
n=A.lb.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.ve[q]
m=A.j.D((a2-m)/(m+0.02-m),0,1)
l=D.aCB[q]
k=B.dr()
k.n2(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k5(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.ve[q]
g=h+0.1
g=A.j.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cK(0,0,0,0,e,e,new B.ci(A.A,e,e,new B.kI(m,B.dO(new B.iS(k,e,A.A,!0,e,new C.Re(d,92,w,p,j,i,0,g*s,h,e),e),new B.p(0,l)),e),e),e))
l=D.ve[q]
h=l+0.02
f=A.j.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cK(0,0,0,0,e,e,new B.ci(A.A,e,e,B.dO(new B.mJ(new C.bcU(w,f,q,e),e,new B.av(r,212),e,e),new B.p(0,D.aCB[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bFZ(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.p(-b0,-150),new B.p(b0,-40),D.end],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nQ[r]
p=A.j.D((a8-q)/(q+0.2-q),0,1)
o=A.cw.aA(0,p)
q=D.aCM[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nQ[r]
f=g+0.2
e=A.j.D((a8-f)/(g+0.3-f),0,1)
f=D.nQ[r]
g=f-0.01
g=A.j.D((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n2(l*h+D.do9[r]*o)
f.fL(l*0.9)
h=0.55+0.45*o
f.k5(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cK(0,0,0,0,a3,a3,new B.ci(A.A,a3,a3,new B.kI(g,B.dO(new B.iS(f,a3,A.A,!0,a3,new C.Re(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.p(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nQ[r]
i=q+0.17
a2=A.j.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aCM[r]
a6.push(new B.cK(0,0,0,0,a3,a3,new B.ci(A.A,a3,a3,B.dO(new B.mJ(new C.bsY(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.p(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.btw.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a1(w-v,0,w+v,e.b)
q=B.bn(u,A.hD)
$.S()
t=B.K()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.ot
d.an(q,t)
t=B.bn(u,A.hD)
q=B.K()
q.r=A.c.j(s).gp(0)
d.an(t,q)},
aE(d){return d.c!==this.c||d.d!==this.d}}
C.bsW.prototype={
a5(d,e){var w,v,u=this.c,t=B.bs(e.ei(A.J),e.b*u,e.a*u)
$.S()
u=B.K()
u.b=A.a9
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=T.Os
d.bZ(t,u)
u=B.K()
u.b=A.a9
u.c=2.5
u.r=w.j(0.7).gp(0)
d.bZ(t,u)
u=t.cn(-14)
v=B.K()
v.b=A.a9
v.c=1
v.r=w.j(0.3).gp(0)
d.bZ(u,v)},
aE(d){return!0}}
C.bcU.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ei(A.J),h=this.c,g=A.cw.aA(0,h)
$.S()
w=B.K()
w.b=A.a9
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.N(i,40+g*e.a*0.42,w)
t=new B.e2()
t.cY(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.j.D(v,0,1)).gp(0)
d.N(new B.p(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aE(d){return!0}}
C.bsY.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.ei(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.j.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bs(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.S()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.b=A.a9
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.bZ(q,p)}},
aE(d){return d.c!==this.c}}
C.bx0.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a1(0,c9,0+c4,c9+60)
$.S()
c9=B.K()
w=c0.b
v=x.O
c9.sav(new B.a8(A.b0,A.b7,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aK(0,d0))
d1.ar(d0,c9)
c9=B.K()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.p(0,c3),new B.p(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hcP(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.S()
a3=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.mg
d1.bZ(new B.a1(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a1(d,a3,a1,a3+a0)
a5=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a6=B.ar(A.d.gH(w),A.c,0.1)
a6.toString
a5.sav(new B.a8(A.b0,A.b7,A.x,B.a([a6,A.d.gal(w)],v),c1,c1).aK(0,a4))
d1.ar(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aG(a2,A.ai,c1,c1,a5)
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
a9=new B.bv()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.ak(a5)
a7.ab()
a5=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a5.r=B.ar(A.d.gal(w),A.w,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aG(a2,A.ai,c1,c1,a5)
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
a2=new B.bv()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.ak(a5)
b1.ab()
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a2.r=B.ar(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b2.b=A.a9
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.ar(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.j.bh(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bn(new B.a1(b7,a6,b7+s,a9),A.hD)
$.S()
b8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.an(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a1(d,a2,a1,a2+28)
J.bp(g.save())
g.clipRect(B.hU(a4),$.mh()[1],!0)
$.S()
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a2.sav(new B.a8(A.b0,A.b7,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aK(0,b9))
d1.ar(b9,a2)
g.restore()}}},
aE(d){return!0}}
C.aP5.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.a1E.prototype={
a7(){return"_Role."+this.b}}
C.qu.prototype={}
C.rb.prototype={}
C.D7.prototype={}
C.a_D.prototype={}
C.ag3.prototype={}
C.a1R.prototype={
gZ(d){return this.d}}
C.Di.prototype={}
C.acX.prototype={}
C.add.prototype={}
C.af9.prototype={}
C.bjw.prototype={
a3J(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dE(d,"",e,g,h,f)},
baX(d,e,f){return this.a3J(d,e,f,0,0.55)},
aDI(d,e,f,g){return this.a3J(d,e,f,0,g)},
baY(d,e,f,g){return this.a3J(d,e,f,g,0.55)},
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
w.b0()},
alf(d,e,f,g){var w="n"+this.ay++,v=new C.rb(w,e,f,g)
this.a.n(0,w,v)
this.b0()
return v},
te(d,e,f){return this.alf(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bq(w.b,new C.drs(e))
A.d.bq(w.c,new C.drt(e))
w.b0()},
beP(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.na.h(0,v.b).c===D.xL)return!1
w=this.b
if(A.d.aV(w,new C.drp(d,e)))return!1
w.push(new C.D7(d,e))
this.b0()
return!0},
c3g(d){var w
if(d.b==="beat")return D.ckm[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.az(500)
case 2:return 1400+w.az(2200)
default:return 450+w.az(2000)}},
aHh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aD2[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Di(u,t,j.ax,90))
w.push(new C.Di(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1R(u,new B.p(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.baX(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1R(u,new B.p(o*p,n*p),m,3+w.ai()*4.5,1000+w.az(700),j.ax))}j.f.push(new C.Di(u,t,j.ax,120))
j.aDI(120,200,"noise",0.5)
j.baX(261.63*Math.pow(2,([7,12,16,19][w.az(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Di(u,t,j.ax,230))
w.push(new C.Di(u,t,j.ax+160,160))
w.push(new C.Di(u,t,j.ax+320,100))
j.baY(180+j.at.az(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.acX(u,new B.p((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.baY(300+w.az(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.add(u,u.a2(0,new B.p(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a3J(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fM()
j.a3J(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.af9(u,D.aCn[v],t,j.ax))
j.aDI(261.63*Math.pow(2,([0,5,9,12][j.at.az(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aDI(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cgs[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cwx(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eH(w,new C.drq(d));v.C();)j.aCd(w.gR(0),j.ax+D.csN[A.o.F(g.d,4)])
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
case"chance":s=j.at.az(100)<D.cK0[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eH(w,new C.drr(d));v.C();)j.aCd(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xF(w,0,v-700)},
cwx(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_D(e,"~"+d))},
aCd(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ag3(d.a,v,e,w))
u.push(new C.a_D(w,v))},
a7u(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a4(w).k("b8<2>")
w=B.C(new B.b8(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aHh(r)
u.n(0,r,o.ax+o.c3g(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.dru(o),v),v.k("M.E"))
if(q.length!==0){A.d.bq(w,new C.drv(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.J)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gae(v),r=new B.eH(u,new C.drw(p));r.C();)o.aCd(u.gR(0),o.ax)}else o.aHh(u)}}A.d.bq(o.d,new C.drx(o))
A.d.bq(o.e,new C.dry(o))
A.d.bq(o.f,new C.drz(o))
A.d.bq(o.w,new C.drA(o))
A.d.bq(o.x,new C.drB(o))
A.d.bq(o.r,new C.drC(o))
o.b0()},
vN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.p(q.a+o*e,q.b+p*e)
r.b=new B.p(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.p(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.p(l,o)
if(o>n){p=m.a=new B.p(l,n)
t=m.b=new B.p(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.p(-t.a*0.8,t.b)}},
aj(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.x)
for(v=this.a,v=new B.dq(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.I(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.X.aw(B.I(["nodes",m,"edges",v],u,x.ew),null)},
Um(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.X.aQ(0,d,null))
k.a8(0)
for(o=x.j,n=J.aT(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.t(v,"k"))
if(!D.na.am(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.rb(t,u,new B.p(B.dD(J.t(v,"x"))*k.cy.a,B.dD(J.t(v,"y"))*k.cy.b),A.j.M(B.dD(J.t(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aT(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.D7(q,p))}k.b0()
return!0}catch(l){return!1}},
cW3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rb(n,r,new B.p(q*p.a,o*p.b),s))
l.b0()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.beP(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GJ.prototype={}
C.Xb.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aGg(new C.bjw(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cQ,A.L,A.az,$.ax()),A.bF,A.J,A.J,A.Z,null,null)}}
C.aGg.prototype={
adz(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adz=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aA(),$async$adz)
case 6:q=n.k6(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.eyc(s))
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
return B.i($async$adz,v)},
aau(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aau=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ey1(s))
u=3
w=6
return B.b(B.aA(),$async$aau)
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
return B.i($async$aau,v)},
bPj(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a4(n).k("b8<2>")
v=""+n.a+"|"+o.length+"|"+new B.b8(n,w).cF(0,0,new C.ey3())+"|"+A.d.cF(o,0,new C.ey4())
if(v===p.ch)return p.CW
u=new C.ey7()
t=x.s
s=B.a([],t)
r=new C.ey8(p,s,u)
for(n=new B.b8(n,w).gae(0),w=new B.eH(n,new C.ey5());w.C();){q=n.gR(0)
if(!A.d.aV(o,new C.ey6(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cX(s,0,B.dB(5,"count",x.S),x.N).dn(0)},
Y(){var w,v=this
v.a4()
v.adz()
v.d.db=v.ay
w=v.q1(new C.eyC(v))
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
v.P$=0
w.bzW()},
ad4(d){return this.c2H(d)},
c2H(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ad4=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aA(),$async$ad4)
case 6:q=m.aU(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Um(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZw(A.d.gH(D.aBP))
if(s.c!=null)s.m(new C.eyb())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ad4,v)},
aZw(d){this.d.cW3(0,d.c,d.d)
this.EL()},
EL(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cy(A.lI,new C.exY(this))},
az3(d){var w,v,u,t,s=this.d.a,r=B.a4(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bR(s,s.gJ(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ckq(d){var w,v,u,t,s,r=this.d.a,q=B.a4(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bR(r,r.gJ(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c2v(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.na.h(0,r.b).c===D.xL)continue
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
cbx(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hBr(new B.p(n.a+36,n.b+0),new B.p(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cEh(d){var w,v,u,t,s,r,q=this,p=q.az3(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eY()
u=v.b
if(u==="button"){w.aHh(p)
return}if(q.r)return
t=D.na.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rl)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b0()
q.EL()
return}if(q.r)return
r=q.cbx(d)
if(r!=null){w=q.d
A.d.cH(w.b,r)
w.b0()
q.EL()}},
clJ(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ckq(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.az3(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aJ(0,d)}},
clK(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b0()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.p(A.j.D(d.a+s.y.a,46,t.a-46),A.j.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b0()}}},
b3S(){var w,v,u=this
if(u.z!=null){w=u.c2v(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.beP(v,w)}else v=!1
if(v){B.jY()
u.EL()}u.z=null
u.d.b0()}else if(u.x!=null){if(u.at)u.EL()
u.x=null}},
adM(d){return this.c5A(d)},
c5A(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.az3(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jZ()
p=t.c
p.toString
w=3
return B.b(B.bU(I.m8,null,new C.eye(q),p,!0,!0,!1,A.lU,!1,!1,x.y),$async$adM)
case 3:if(f===!0){r.W(0,s)
t.EL()}case 1:return B.h(u,v)}})
return B.i($async$adM,v)},
cbv(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.te(0,d,new B.p(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eY()
this.EL()},
ahI(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(I.m8,null,new C.eyg(),s,!0,!0,!0,A.lU,!1,!1,x.es),$async$ahI)
case 2:t=e
if(t!=null)u.aZw(t)
return B.h(null,v)}})
return B.i($async$ahI,v)},
af8(d){var w=0,v=B.j(x.H),u=this,t
var $async$af8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.ey0(),t,null,!0,!0,x.y),$async$af8)
case 2:if(f===!0){u.d.a8(0)
u.EL()}return B.h(null,v)}})
return B.i($async$af8,v)},
B(d){var w=this,v=null,u=B.a([B.ajx(w.r?new B.bL(A.a7,v,v,new B.D(A.H2,B.hq(D.bWW,D.fJY,new C.eyA(w),v),v),v):w.cby(),A.b_,A.iO),B.E(B.cr(new C.eyB(w)),1)],x.p)
if(!w.r)u.push(w.cz0())
return B.c4(v,A.c4,B.bm(!0,B.x(u,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bL0(){var w=null,v=new C.ey2(),u=A.w.j(0.7),t=B.m(26),s=B.L(A.bw.j(0.5),A.r,1)
return B.bS(0,B.e9(B.as(B.q(w,B.cc(B.x(B.a([D.fVx,A.av,D.h2g,A.aB,v.$4(A.oE,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.D7,A.cu,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.k8,A.bT,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.Pf,A.bl,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.h1y,new B.bL(A.aa,w,w,B.bP(!1,D.fSB,w,w,!0,w,w,w,this.gbKU(),w,w),w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.XI,new B.o(I.m8,w,s,t,w,w,A.n),w,w,w,A.fu,Ao.amG,w,w,w),w,w,w),u,!0),0,0,0)},
cby(){var w=this,v=null,u=B.aI(v,v,v,v,Ag.n7,v,v,v,new C.eym(w),v,v,v,v,v,v),t=w.a9V(A.D_,"How it works",new C.eyn(w),!0),s=w.ay?A.oF:V.tc
return new B.D(D.bHv,B.A(B.a([u,D.bJc,t,w.a9V(s,"Sound",new C.eyo(w),!0),w.a9V(A.ed,"Ideas",w.gcpv(),!0),w.a9V(K.wH,"Clear",w.gcbw(w),!0),w.aQ6(A.hl,"Show",new C.eyp(w),!0,!0)],x.p),A.l,v,A.e,A.i,0,v,v),v)},
aQ6(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ad.wx,B.aH(!1,A.a3,!0,u,B.aP(!1,t,!0,B.h7(new B.D(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.aj),w)},
a9V(d,e,f,g){return this.aQ6(d,e,f,g,!1)},
cz0(){var w=null,v=new C.eyi(this),u=A.c.j(0.08)
return B.q(w,B.cc(B.A(B.a([v.$2("START",D.xL),v.$2("CHANGE",D.Fb),v.$2("REACT",D.rl)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL),A.f,w,w,new B.o(I.BX,w,new B.bG(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bCv,w,w,w)},
cz1(d){var w,v,u,t,s=null,r=D.na.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.L(v.j(0.5),A.r,1)
return new B.D(A.fD,B.az(s,B.q(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cT,B.d(r.a,s,1,A.a2,s,s,s,D.aWn,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a8(A.b0,A.b7,A.x,u,s,s),A.n),s,s,s,s,A.hL,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eyh(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bjx.prototype={
a5(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bp(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.S()
u=B.K()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.N(new B.p(r,s),1,u)
q=b4.CW
if(b5<q){$.S()
p=B.K()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.ar(new B.a1(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){m=w[n]
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
d=new B.aG(f.r,A.ai,b3,b3,e)
e.push(new B.aZ(i,j))
d.ab()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.kn(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.ak(e)
d.ab()
a1=D.na.h(0,l.b).d
a2=D.na.h(0,k.b).d
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=3
f.d=A.bu
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.t1(new B.p(i,j),new B.p(g,h))
f.sav(new B.a8(A.a7,A.aa,A.x,e,b3,b3).aK(0,new B.a1(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.j.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hBr(new B.p(j.a+36,j.b+0),new B.p(i.a-36,i.b),a4)
$.S()
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.j(0.35).gp(0)
i.y=N.ot
b7.N(a5,8,i)
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.gp(0)
b7.N(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a2(0,D.JD)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aG($.S().r,A.ai,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.kn(t+a0,p,w-a0,j,w,j))
j=B.K()
j.b=A.a9
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.K()
j.r=A.c.gp(0)
b7.N(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a9=w[n]
p=a9.c
v=A.j.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.dK.aA(0,v)
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.b=A.a9
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.N(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){b0=w[n]
v=A.j.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kv(p,j,A.dK.aA(0,v))
i.toString
j=B.kv(p,j,A.dK.aA(0,A.j.D(v-0.35,0,1)))
j.toString
$.S()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.c=5
p.d=A.bu
h=b0.c
g=B.a([h.j(0),h],q)
f=B.t1(j,i)
p.sav(new B.a8(A.a7,A.aa,A.x,g,b3,b3).aK(0,new B.a1(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.c.gp(0)
b7.N(i,6,p)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kV
b7.N(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
v=A.j.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=a3.c.j(1-v).gp(0)
b7.N(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){k=w[n]
p=k.a
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kV
b7.N(p,11,j)
j=k.a
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A5.Bh,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aK(0,B.bZ(k.a,8)))
b7.N(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.J)(b4),++n){a5=b4[n]
v=A.j.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bjy(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.p(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.clh(b7,b4.d,b5)
b6.restore()},
clh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.na.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.j.D(1-(f-w)/520,0,1)
u=B.bs(e.c,64,64)
t=B.bn(u,A.ir)
s=t.eQ(A.cA)
$.S()
r=B.K()
r.r=A.w.j(0.55).gp(0)
r.y=A.mg
d.an(s,r)
if(v>0){s=t.cn(6)
r=B.K()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.wy
d.an(s,r)}s=t.eQ(A.cL)
r=B.K()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.an(s,r)
r=B.K()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sav(new B.a8(A.b0,A.b7,A.x,B.a([s,p],x.O),j,j).aK(0,u))
d.an(t,r)
r=B.K()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.an(t,r)
r=h.b
p=e.c
o=C.bjy(B.lA(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aJ(0,new B.p(s/2,r.gba(r)/2)))
n=C.bjy(h.a,11,A.c,j,j,A.I)
n.a5(d,e.c.a2(0,new B.p(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aCn[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rl){s=e.c.a2(0,new B.p(0,62))
r=B.K()
r.r=D.aD2[A.o.F(e.d,6)].gp(0)
d.N(s,5,r)}else if(m!=null){l=C.bjy(m,9.5,A.aD,j,j,A.U)
l.a5(d,e.c.a2(0,new B.p(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bjy(m,9.5,A.aD,j,j,A.U)
l.a5(d,e.c.a2(0,new B.p(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xL)k.b4F(d,e.c.aJ(0,D.JD),q)
k.b4F(d,e.c.a2(0,D.JD),q)},
b4F(d,e,f){var w
$.S()
w=B.K()
w.r=A.c4.gp(0)
d.N(e,9,w)
w=B.K()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.N(e,9,w)
w=B.K()
w.r=A.c.gp(0)
d.N(e,3.5,w)},
aE(d){return!0}}
C.aOe.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.eh.prototype={}
C.u0.prototype={
asa(d,e,f,g){var w=this
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
C.abC.prototype={}
C.acJ.prototype={}
C.a5D.prototype={
bgH(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h2()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abC(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c7K(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bq(w,new C.bQ5())},
alf(d,e,f,g){var w="p"+this.c++,v=new C.u0(w,e,f,g)
v.asa(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bq(this.b,new C.bQg(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cN2(d,e,f,g,h){return A.d.aV(this.b,new C.bQb(e,f,g,h))},
am6(d,e,f,g){var w
if(d===f||this.cN2(0,d,e,f,g))return null
w=new C.acJ(d,e,f,g)
this.b.push(w)
return w},
aCK(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Ak(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aoS(d){return this.Mm(d)&&!d.x&&d.cx>this.Ak(d)},
b91(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mm(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cbS(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.Aa.h(0,v)
if(w!=null)return w.a
return 100},
vN(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c7K(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.J)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bQh(a2),t).cF(0,0,new C.bQi(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bQk(o)
m=B.a([],x.t)
l=new C.bQj(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.J)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.J)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bQm(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.J)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b8Y(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Ak(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b8Y(e,d,w,!0)
a2.bRF(a4)},
b8Y(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bQ7(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bQ6(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.J)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bQ9(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.J)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c0(b7,0,!1,b3)
v=x.W
k=B.T(v,b3)
j=B.T(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)B.bj(B.dN(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c0(b7,0,!1,b3)
a0=B.c0(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.J)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b91(t)*(1+t.CW))
a4=b2.aCK(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cbS(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bV1(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,B.J)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.J)(w),++u){t=w[u]
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
bV1(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c0(d,0,!1,x.i)
u=B.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,B.J)(a0),++r){q=a0[r]
p=B.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,B.J)(a0),++n){m=a0[n]
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
t[m]=t[m]-g*u[l][m]}}}f=B.c0(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bRF(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.J)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aCK(o)/a1.b91(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Ak(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bJE(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bgH(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.ut(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.ut(o,"The "+$.qF().h(0,n).b+" got "+A.j.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.ut(o,"More than 1.5 amps went through the "+$.qF().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.ut(o,"The regulator had to turn "+A.j.ad(o.cy,1)+" V into heat while "+A.j.V(i*1000)+" mA flowed. That is "+A.j.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.ut(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.Aa.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qF().h(0,n).b
l=f.b
l=l===A.j.iH(l)?""+A.j.V(l):B.w(l)
g=f.c
g=g===A.j.iH(g)?""+A.j.V(g):B.w(g)
a1.ut(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.j.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fdf.q(0,n)){m=o.fx>0?A.j.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.j.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.ut(o,"The bulb got "+A.j.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.j.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.ut(o,"The LED had "+A.j.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.j.D(j/14,0,1)
break
case"motor":n=A.j.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.j.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.ut(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.j.D(i/1,0,1)
if(!o.x&&i>1)a1.ut(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.ut(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.j.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.ut(o,"The capacitor was charged to "+A.j.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bJE(d){return A.d.aV(this.a,new C.bQ4(d))},
ut(d,e){var w
d.x=!0
d.ay=e
this.bgH(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bll(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aJ3(d){var w=d.b
return D.aTa.q(0,w)||D.Aa.am(0,w)||w==="buck"||w==="regulator"},
bia(d){var w,v=!0
if(!this.Mm(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.Aa.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
VB(d,e){var w=this.b
return new B.Y(w,new C.bQo(d,e),B.U(w).k("Y<1>")).gJ(0)},
tR(d){var w,v
if(d.x)return!1
w=d.b
if(D.Aa.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bgd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qF().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aJ3(d)||i.tR(d))return null
w=i.VB(d,0)
v=i.VB(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcVD(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.j.iH(r)?""+A.j.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.j.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.Aa.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Mz("battery"),o=J.aT(t.a),t=new B.eH(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.VB(n,0)+i.VB(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Mz("switch"),o=J.aT(t.a),t=new B.eH(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qF().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Ak(k))return"The "+$.qF().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.j.ad(k.cx,2)+" amps, but it can only give about "+A.j.ad(i.Ak(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aV(u,new C.bQc(i,d))
h=q.b
h=h===A.j.iH(h)?""+A.j.V(h):B.w(h)
u=A.j.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.j.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.j.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Mz(d){var w=this.a
return new B.Y(w,new C.bQf(d),B.U(w).k("Y<1>"))},
aIF(d){return this.Mz(d).aV(0,new C.bQe(0.35))},
qe(d,e){return A.d.aV(this.a,new C.bQd(e))}}
C.ak7.prototype={
a5(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.S()
w=B.K()
w.r=F.yi.gp(0)
c2.ar(new B.a1(0,0,c0,c1),w)
v=B.K()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.N(new B.p(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.mt.am(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.mt.am(0,j.b)?(j.ch-1)*38:0
b6.cJK(c2,new B.p(m*b8+l*(42+k),n*b9),new B.p(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hOW(s.a,s.b,c3)
s=b6.e
s.toString
$.S()
r=B.K()
r.r=A.ab.gp(0)
r.c=3
r.d=A.bu
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.S()
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=F.MF.j(A.j.D(e.Q*0.45,0,0.6)).gp(0)
h.y=A.wy
c2.N(new B.p(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.bp(n.save())
n.translate(k,j)
i=A.j.D(A.lb.aA(0,A.j.D(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.cmg(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Ak(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.S().r
a2=B.a([],l)
a3=new B.aG(a1,A.ai,b7,b7,a2)
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
a8=new B.bv()
a2.push(a8)
a2=a3.f
if(a2!=null)a8.ak(a2)
a3.ab()
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a2.r=A.ay.j(0.65+0.35*a0).gp(0)
c2.af(a3,a2)
a2=B.a([],l)
a1=new B.aG(a1,A.ai,b7,b7,a2)
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
a0=new B.bv()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.ak(a2)
a1.ab()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.b=A.a9
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iH(new B.ep("!",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.F(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.ji(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.p(h+-3,g+-8))}if(!e.x)h=(D.aTa.q(0,i)||D.Aa.am(0,i)||i==="buck"||i==="regulator")&&!w.tR(e)&&w.VB(e,0)+w.VB(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.S()
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=A.aw.gp(0)
c2.N(new B.p(k,j),10,h)
b0=new B.iH(new B.ep("!",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.F(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.ji(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.p(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mt.am(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.p(g,h)
$.S()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=F.yi.gp(0)
c2.N(b0,7,k)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.b=A.a9
k.c=2.4
k.r=(j&&w.bia(e)?A.bZ:A.ab).gp(0)
c2.N(b0,6,k)
if(j&&w.bia(e)){b0=new B.iH(new B.ep("+",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.F(!0,A.bZ,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.ji(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.p(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.J)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.p(n,m)
b4=A.j.D(b2.r/0.8,0,1)
l=B.ar(M.Nm,F.a_d,b4)
l.toString
k=b2.f
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.gp(0)
j.c=2.4
j.d=A.bu
c2.ah(b3,new B.p(n-b2.e*0.035,m-k*0.035),j)
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.j(0.35*b4).gp(0)
j.y=A.Ou
c2.N(b3,4.5*b4+1,j)}if(A.d.aV(s,new C.bKs())){b5=A.d.cF(s,0,new C.bKt())
$.S()
b9=B.K()
b9.r=D.bhw.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.ar(new B.a1(0,0,c0,c1),b9)
b0=B.fr(b7,A.cs,b7,b7,b7,D.fot,A.a5,A.bX,b7,A.dD,A.bY)
b0.o8(b8-24)
b0.a5(c2,new B.p(12,10))}},
qU(d,e,f,g,h){var w=null,v=B.fr(w,A.cs,w,w,w,B.cQ(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.bX,w,A.dD,A.bY)
v.e5()
v.a5(d,f)},
cJK(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aG($.S().r,A.ai,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hGW(a0,a1,a2)
e.E(new B.c7(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aQ,F.MF,A.j.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aG,A.aQ,A.j.D(r*1.2,0,1))
u.toString
o=u}else o=A.bj
u=B.K()
u.b=A.a9
u.c=a3?7:5
u.d=A.bu
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.K()
u.b=A.a9
u.c=2.4
u.d=A.bu
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.U_(new B.ry(B.xN(e),!1,B.a([],x.R))).gH(0)
m=40+A.j.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.iy()
j=t[u].b
j===$&&B.c()
if(!(k<j.a.length()/22))break
j=s.d
v.iy()
i=t[u].b
i===$&&B.c()
i=A.j.F(k*22+j*m*l,i.a.length())
v.iy()
j=t[u].b
j===$&&B.c()
j=j.a.length()
v.iy()
h=t[u].b
h===$&&B.c()
g=A.j.F(i+j,h.a.length())
v.iy()
f=t[u].Di(g)
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=A.c.gp(0)
d.N(f.a,2.6,j);++k}}},
PI(d,e,f,g){var w,v,u,t
$.S()
w=B.K()
v=g?A.b0:A.a7
u=g?A.b7:A.aa
t=B.ar(e,A.w,0.3)
t.toString
w.sav(new B.a8(v,u,A.x,B.a([e,f,e,t],x.O),A.Iv,null).aK(0,d))
return w},
aye(d,e,f){return this.PI(d,e,f,!0)},
c7j(d,e){return this.PI(d,A.bj,A.i_,e)},
aiS(d,e){var w,v,u
$.S()
w=B.K()
w.sav(D.aRk.aK(0,B.bZ(e,4.2)))
d.N(e,4.2,w)
w=e.a2(0,D.epM)
v=e.a2(0,D.epV)
u=B.K()
u.r=A.cS.gp(0)
u.c=1.2
d.ah(w,v,u)},
cmg(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.K()
c0.sav(D.c7_.aK(0,D.f9s))
c0.c=3.4
c0.d=A.bu
w=B.K()
w.r=A.w.j(0.45).gp(0)
w.y=N.ot
c1.bZ(D.f9g,w)
if(c3){w=B.bn(D.f9q,A.jN)
v=B.K()
v.r=A.c.j(0.14).gp(0)
c1.an(w,v)}u=C.hm8(c2)
c1.ah(new B.p(-u,0),D.ern,c0)
c1.ah(D.eor,new B.p(u,0),c0)
t=c2.x
w=c2.b
s=D.mt.am(0,w)&&c2.ch!==1
if(s){J.bp(c1.c.save())
c1.bU(0,c2.ch)}switch(w){case"battery":b3.bGo(c1,c2)
break
case"solar":r=B.bn(D.f9j,A.iF)
c1.an(r,b3.PI(new B.a1(r.a,r.b,r.c,r.d),A.d1,A.bP,!1))
b9=B.K()
w=B.ar(D.blr,A.d7,0.25+0.55*c2.f)
w.toString
v=B.ar(D.buO,A.mV,0.3+0.4*c2.f)
v.toString
b9.sav(new B.a8(A.aA,A.aE,A.x,B.a([w,v],x.O),b4,b4).aK(0,D.a9H))
c1.ar(D.a9H,b9)
q=B.K()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.p(b9,-18),new B.p(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.p(-34,b9),new B.p(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.S()
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=A.cx.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.p(b9,-18),new B.p(b9,18),w)}b9=new B.aG($.S().r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-34,18))
b9.E(new B.aq(-6+40*c2.f,-18))
b9.E(new B.aq(4+40*c2.f,-18))
b9.E(new B.aq(-24,18))
b9.E(new B.bv())
w=B.K()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.af(b9,w)
w=c2.f
b9=B.K()
b9.r=A.dC.j(0.9).gp(0)
c1.N(D.eov,4+4*w,b9)
break
case"crank":o=B.bn(D.f94,A.fP)
c1.an(o,b3.aye(new B.a1(o.a,o.b,o.c,o.d),A.bx,A.bN))
b9=B.K()
b9.sav(D.aRl.aK(0,B.bZ(A.J,12)))
c1.N(A.J,12,b9)
n=new B.p(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.K()
b9.r=A.cx.gp(0)
b9.c=5
b9.d=A.bu
c1.ah(A.J,n,b9)
b9=B.K()
b9.sav(D.eAS.aK(0,B.bZ(n,7)))
c1.N(n,7,b9)
b3.aiS(c1,D.erf)
b3.aiS(c1,D.eog)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aG(b9,A.ai,b4,b4,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bv())
m=B.K()
m.r=A.bP.gp(0)
c1.af(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.bp(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aG(b9,A.ai,b4,b4,m)
m.push(new B.aZ(0,-2))
k.ab()
j=new B.c7(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.c7(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.bv()
m.push(j)
m=k.f
if(m!=null)j.ak(m)
k.ab()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.K()
b9.sav(D.eAz.aK(0,B.bZ(A.J,4.5)))
c1.N(A.J,4.5,b9)
break
case"switch":o=B.bn(D.f9b,A.mw)
b9=B.K()
b9.sav(D.atf.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.an(o,b9)
b3.aiS(c1,D.U4)
b3.aiS(c1,D.aM7)
h=c2.w?D.aM7:H.aLY
b9=B.K()
b9.r=A.as.gp(0)
b9.c=6
b9.d=A.bu
c1.ah(D.U4,h,b9)
b9=B.K()
b9.r=(c2.w?A.b4:A.bP).gp(0)
b9.c=4
b9.d=A.bu
c1.ah(D.U4,h,b9)
b9=B.kv(D.U4,h,0.85)
b9.toString
w=B.K()
w.r=A.ay.gp(0)
c1.N(b9,5,w)
break
case"fuse":g=B.bn(D.aS3,D.aRq)
b9=B.K()
b9.r=A.fI.j(0.25).gp(0)
c1.an(g,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aD.gp(0)
c1.an(g,b9)
if(!t){b9=B.K()
b9.c=1.6
b9.r=B.ar(A.bP,A.cI,c2.fx).gp(0)
c1.ah(D.aMq,D.aM5,b9)}else{b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(D.aMq,D.erJ,b9)
b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(F.epi,D.aM5,b9)
b9=B.K()
b9.r=A.e_.gp(0)
c1.N(A.J,6,b9)}for(f=0;f<2;++f){e=B.bs(new B.p(M.fN[f]*22,0),20,9)
c1.an(B.bn(e,A.hV),b3.PI(e,A.d3,A.oc,!0))}break
case"pot":b9=B.K()
b9.sav(D.eAK.aK(0,B.bZ(A.J,21)))
c1.N(A.J,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.aD.gp(0)
k.c=1.2
c1.ah(new B.p(b9*18,w*18),new B.p(v*22,m*22),k)}b9=B.K()
b9.sav(D.eAx.aK(0,B.bZ(A.J,13)))
c1.N(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.K()
k.r=A.aQ.gp(0)
k.c=3
k.d=A.bu
c1.ah(new B.p(b9*3,w*3),new B.p(v*12,m*12),k)
break
case"resistor":a1=B.bn(D.aS3,D.aRq)
b9=B.K()
b9.sav(D.cam.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.an(a1,b9)
b9=x.O
a2=B.I([47,B.a([B.b0(b5),B.b0(b6),A.w],b9),100,B.a([B.b0(b7),A.w,B.b0(b7)],b9),220,B.a([B.b0(b8),B.b0(b8),B.b0(b7)],b9),470,B.a([B.b0(b5),B.b0(b6),B.b0(b7)],b9),1000,B.a([B.b0(b7),A.w,B.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=a3[p].gp(0)
c1.ar(new B.a1(b9,-9,b9+4.5,9),w)}b9=B.K()
b9.r=A.aQ.gp(0)
c1.ar(D.f9E,b9)
b9=c2.r
b3.qU(c1,b9>=1000?"1k\u03a9":""+A.j.V(b9)+"\u03a9",D.eqI,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.K()
v.r=A.dC.j(0.55*w).gp(0)
v.y=A.wy
c1.N(H.vv,34,v)}o=B.bs(D.ena,12,18)
c1.an(B.bn(o,A.hV),b3.PI(o,A.bj,A.e1,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.r=A.dx.gp(0)
v.c=1
c1.ah(new B.p(-9,w),new B.p(9,w),v)}w=B.K()
if(t)v=A.Mv
else{v=B.ar(A.e1,A.hz,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.G5
else{m=B.ar(A.d1,A.dC,c2.fx)
m.toString}w.sav(new B.bY(A.p6,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aK(0,B.bZ(A.tv,17)))
c1.N(A.tv,17,w)
w=B.K()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.N(A.tv,17,w)
b9=b9.r
w=x.v
m=new B.aG(b9,A.ai,b4,b4,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.c7(-12,-4,-9,0))
v=B.K()
v.b=A.a9
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.af(m,v)
v=B.K()
v.r=A.cz.gp(0)
v.c=1.4
c1.ah(D.erD,D.erF,v)
v=B.K()
v.r=A.cz.gp(0)
v.c=1.4
c1.ah(D.epb,D.epe,v)
w=B.a([],w)
a4=new B.aG(b9,A.ai,b4,b4,w)
a4.E(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b9=(l&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.ak(v)
a4.ab()}$.S()
b9=B.K()
b9.b=A.a9
b9.c=1.8
if(t)w=A.b6
else{w=B.ar(A.d1,D.bmt,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.K()
v.r=A.ay.j(0.6*w).gp(0)
v.y=D.bJ_
c1.N(A.tv,30,v)}w=B.K()
w.r=A.e1.gp(0)
w.c=2.4
c1.ah(D.erL,D.erK,w)
w=B.K()
w.r=A.e1.gp(0)
w.c=2.4
c1.ah(D.epk,D.epj,w)
b9=b9.r
w=x.v
a6=new B.aG(b9,A.ai,b4,b4,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.c7(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bv())
v=B.K()
if(t)m=A.jo
else{m=B.ar(A.em,D.boc,c2.fx)
m.toString}if(t)k=A.kS
else{k=B.ar(A.ku,A.ay,c2.fx)
k.toString}v.sav(new B.a8(A.aA,A.aE,A.x,B.a([m,k],x.O),b4,b4).aK(0,D.f8w))
c1.af(a6,v)
v=B.K()
v.b=A.a9
v.c=1.2
v.r=A.jZ.gp(0)
c1.af(a6,v)
v=B.K()
v.r=A.et.gp(0)
c1.ar(D.f8C,v)
w=new B.aG(b9,A.ai,b4,b4,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.c7(-6,-12,0,-15))
b9=B.K()
b9.b=A.a9
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a1(-28,-14,20,14)
c1.an(B.bn(a7,A.hW),b3.aye(a7,A.an,A.bi))
b9=B.K()
b9.r=A.cl.gp(0)
c1.ar(D.f85,b9)
b9=B.K()
b9.r=A.cx.gp(0)
c1.ar(D.f87,b9)
b9=c1.c
J.bp(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.bp(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bs(H.aLT,15,7)
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.r=A.cI.j(0.9).gp(0)
c1.bZ(w,v)
b9.restore()}w=B.K()
w.r=A.as.gp(0)
c1.N(A.J,3,w)
b9.restore()
b3.qU(c1,"M",D.ere,A.as,14)
break
case"buzzer":a8=B.bs(A.J,42,42)
b9=B.K()
b9.sav(D.eAO.aK(0,a8))
c1.bZ(a8,b9)
b9=B.K()
b9.r=A.w.gp(0)
c1.N(A.J,6,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aT.gp(0)
c1.N(A.J,6,b9)
b3.qU(c1,"+",D.er7,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.j.F(b9.d*14,5):0
v=B.bZ(A.J,24+l*5+v)
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.b=A.a9
m.c=2
m.r=A.bT.j(w*(1-l*0.22)).gp(0)
c1.cB(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bn(D.f97,A.hW)
w=B.K()
w.sav(D.c80.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.an(o,w)
w=B.a([],x.v)
a9=new B.aG(b9.r,A.ai,b4,b4,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b9=(l&1)===0?-10:10
a5=l+1
b9=new B.c7(-24+l*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.ak(v)
a9.ab()}b9=c2.fx
if(b9>0.1){$.S()
w=B.K()
w.b=A.a9
w.c=10
w.r=D.bnc.j(0.5*b9).gp(0)
w.y=A.kV
c1.af(a9,w)}$.S()
b9=B.K()
b9.b=A.a9
b9.c=3.2
b9.d=A.bu
b9.r=B.ar(A.m6,A9.yq,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a1(-16,-22,16,18)
b9=B.bn(a7,A.hW)
w=B.K()
w.sav(D.c6S.aK(0,a7))
c1.an(b9,w)
w=B.K()
w.r=A.bP.gp(0)
c1.ar(D.f8L,w)
for(p=0;p<4;++p){b0=new B.iH(new B.ep("\u2212",b4,b4,A.cN,b4,b4,b4,b4,b4,b4,new B.F(!0,A.as,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.bX,new B.ji(1),b4,b4,b4,b4,A.bY,b4,A.cs)
b0.e5()
b0.a5(c1,new B.p(-14,-18+p*9))}b1=new B.a1(-16,-24,16,-17)
c1.an(B.bn(b1,A.hV),b3.c7j(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.K()
v.r=A.b4.j(0.5).gp(0)
c1.ar(new B.a1(-3,w,11,w+b9),v)
b3.qU(c1,"1F",H.vv,A.c,11)
break
case"radio":a1=B.bn(D.a9H,A.fP)
b9=B.K()
b9.sav(D.caB.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.an(a1,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.oc.j(0.6).gp(0)
c1.an(a1,b9)
b9=B.bn(D.f98,A.iF)
w=B.K()
w.r=A.dW.gp(0)
c1.an(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=A.m6.gp(0)
w.c=1.4
c1.ah(new B.p(-27,b9),new B.p(-3,b9),w)}b9=B.K()
b9.r=(c2.fx>0?A.fz:A.oe).gp(0)
c1.ar(D.f8c,b9)
if(c2.fx>0){b9=8+A.j.F(b3.b.d*7,18)
w=B.K()
w.r=A.bD.gp(0)
w.c=1.6
c1.ah(new B.p(b9,-13),new B.p(b9,-3),w)}b9=B.K()
b9.sav(D.aRl.aK(0,B.bZ(D.a8E,6)))
c1.N(D.a8E,6,b9)
b9=B.K()
b9.r=A.oc.gp(0)
c1.N(D.eoq,4,b9)
b9=B.K()
b9.r=A.e1.gp(0)
b9.c=1.8
c1.ah(D.eol,D.aMc,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bZ(D.aMc,4+l*5+A.j.F(b9.d*8,5))
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.b=A.a9
v.c=1.4
v.r=A.nt.j(0.7).gp(0)
c1.cB(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bn(D.f9i,A.hW)
v=B.K()
v.r=M.nz.gp(0)
c1.an(w,v)
b2=B.bn(D.f9f,A.hV)
if(c2.fx>0&&!c2.x){b9=c1.c
J.bp(b9.save())
b9.clipRRect(B.nR(b2),$.np(),!0)
b9.translate(-33,-21)
L.hi6(c1,D.fg3,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.K()
b9.r=A.b4.gp(0)
c1.N(D.eoC,1.6,b9)}else{w=B.K()
w.r=D.we.gp(0)
c1.an(b2,w)
b9=new B.aG(b9.r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-33,-21))
b9.E(new B.aq(-10,-21))
b9.E(new B.aq(-33,0))
b9.E(new B.bv())
w=B.K()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.K()
b9.r=A.bx.gp(0)
c1.ar(D.f8B,b9)
break}C.isH(c1,c2,b3.b.d,b3.gcbT())
if(t)b3.qU(c1,"\u2716",D.erO,A.ay,14)
if(s)c1.c.restore()},
bGo(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a1(-28,-13,28,13)
d.an(B.bn(w,A.mw),o.aye(w,A.d1,A.j5))
v=new B.a1(-22,-13,22,13)
$.S()
u=B.K()
u.sav(D.at8.aK(0,v))
d.ar(v,u)
u=B.K()
u.r=A.e0.gp(0)
d.ar(D.f8V,u)
t=new B.a1(28,-5,34,5)
d.an(B.bn(t,A.hD),o.PI(t,A.d1,A.i_,!0))
o.qU(d,"+",D.eo1,A.aQ,11)
o.qU(d,"\u2212",D.erg,A.ab,11)
o.qU(d,B.w(n===A.j.iH(n)?A.j.V(n):n)+"V",D.eqX,A.aQ,13)
if(n===1.5){u=B.K()
u.r=A.by.gp(0)
d.ar(D.f8U,u)
u=e.as
s=B.K()
s.r=B.ar(A.ay,A.b4,u).gp(0)
d.ar(new B.a1(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qU(d,"FLAT",D.eqH,A.bZ,9)}if(n>2){u=B.K()
u.r=A.aT.gp(0)
u.c=1
d.ah(D.enj,D.aLL,u)
o.qU(d,n>3?"3 cells":"2 cells",D.eqW,A.aD,8)}}else if(n<=9){r=new B.a1(-22,-17,22,17)
u=B.bn(r,A.mw)
$.S()
s=B.K()
s.sav(D.caa.aK(0,r))
d.an(u,s)
s=B.K()
s.r=A.d2.gp(0)
d.ar(D.f8W,s)
for(q=0;q<2;++q){p=F.aCL[q]
u=p<0?5:3.6
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.sav(D.aRk.aK(0,B.bZ(new B.p(p,-18),5)))
d.N(new B.p(p,-18),u,s)}o.qU(d,"9V",D.eqP,A.c,16)}else{r=new B.a1(-34,-16,34,16)
u=B.bn(r,A.iF)
$.S()
s=B.K()
s.sav(D.at8.aK(0,r))
d.an(u,s)
s=B.K()
s.r=A.bl.gp(0)
d.ar(D.f9h,s)
for(q=0;q<2;++q){u=B.bn(B.bs(new B.p(F.IK[q],-20),8,10),A.hD)
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.cx.gp(0)
d.an(u,s)}o.qU(d,"+",D.eoa,A.ay,10)
o.qU(d,"12V",D.eqT,A.as,15)}},
aE(d){return!0}}
C.mY.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.u0(o,r,q,p)
n.asa(o,r,q,p)
k.push(n)
J.iz(s[4],new C.cu2(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.J)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.am6(m,u[1],l,u[3])}}}
C.ak5.prototype={
S(){var w=x.N
return new C.ak6(A.J,A.az,B.T(w,x.gl),B.aR(w),$,A.bF,0,B.a([],x.X),null,null)}}
C.ak6.prototype={
afj(d){var w=this,v=w.as
if(v!=null)v.a1(0)
w.m(new C.bK6(w,d))
w.as=B.cy(A.lJ,new C.bK7(w))},
t(){var w=this.as
if(w!=null)w.a1(0)
w=this.ch
if(w!=null)w.a1(0)
this.bw0()},
a0X(d,e){return this.ckb(d,e)},
b3l(d){return this.a0X(d,!1)},
ckb(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0X=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rV:A.yA
p=d.b
w=3
return B.b(L.hit(s,r,p,d.ax<3.2,q,$.qF().h(0,p).b),$async$a0X)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0X,v)},
cwU(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bK8()),t=J.cD(u)
t.I(u,v)
t.bq(u,new C.bK9(v))
if(t.gJ(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a1(0)
w.a2g(d)
return}if(t.gJ(u)===3){t=w.ch
if(t!=null)t.a1(0)
w.ch=B.cy(A.iP,new C.bKa(w,u,d))}},
a0D(d){return this.cix(d)},
cix(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0D=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.itW(s,d.b,A.j.V(A.j.F(t.a.c.d*0.12,1)*100)),$async$a0D)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a0D,v)},
a2g(d){return this.cuu(d)},
cuu(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2g=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bK4(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2g)
case 2:return B.h(null,v)}})
return B.i($async$a2g,v)},
Y(){this.a4()
this.bil()
this.mh()},
bil(){this.a.c.e=new C.bKp(this)},
mz(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vN(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=D.mt.h(0,s.b)
if((r==null?null:r.b)!==D.AB)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.I(0,s.a)
q.a0X(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dE(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dE(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cQ.ai()<0.5
else u=!1
if(u)G.dE(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dE(900+A.cQ.az(800),"",90,0,0.1,o)
if(A.cQ.ai()<0.35)G.dE(300+A.cQ.az(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cQ.ai()<0.4
else u=!1
if(u)G.dE(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dE(330+A.o.F(110*A.j.bh(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dE((A.j.bh(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dE(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dE(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cQ.ai()<0.5
else u=!1
if(u)G.dE(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dE(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dE(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bKq())},
bap(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.mt.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b41(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mt.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cJL(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.mt.am(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.mt.am(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hGW(new B.p(k,n),new B.p(i,l),p)
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
afh(){this.a.toString
this.m(new C.bJz())},
bsF(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.ddu[v]
if(!A.d.aV(p.a.c.a,new C.bKr(u,w))){o=new B.p(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.JF:o
s=s?Q.JF:o
q=t.alf(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
G.dE(1200,"",50,0,0.3,"tri")
p.afh()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Sq[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.aq(u+1,2)):w
r=t?A.d.fO(w,A.o.aq(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a4(q).k("cx<1>")
w=B.C(new B.cx(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.J)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b3R(s,!0))
n.a.toString
if(t)w.push(n.b3R(r,!0))
w.push(B.E(B.cr(new C.bKo(n,q,m)),1))
return B.x(w,A.l,null,A.e,A.i,0,A.p)},
b3R(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=$.qF()
s=t.h(0,u).d.j(0.14)
r=new B.aN(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.az(p,B.q(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.AW,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.nX,p,p,p)],n),A.l,p,A.ba,A.i,0,A.p),A.f,p,p,new B.o(s,p,new B.bG(q,q,q,q),new B.be(r,r,r,r),p,p,A.n),p,p,p,I.os,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJA(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.cl(m,p,p,A.hg,p,p,A.aL,!1),A.f,p,p,new B.o(I.BX,p,new B.bG(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b1d(d){var w=null,v=B.m(18)
return B.q(w,d,A.f,w,w,new B.o(F.afO,w,B.L(A.by,A.r,1),v,w,w,A.n),w,w,w,w,F.alR,w,w,w)},
cmh(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qF().h(0,o),m=d.dy,l=d.fr,k=new C.bJT(q,n),j=B.d(n.c,p,p,p,p,p,p,A.KM,p,p,p),i=n.b,h=n.d,g=x.p
i=B.A(B.a([j,A.af,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aI(p,p,p,p,D.bYO,p,p,p,new C.bJG(q,d),p,p,p,p,"Remove part",A.ch),B.aI(p,p,p,p,A.PZ,p,p,p,new C.bJH(q),p,p,p,p,p,A.ch)],g),A.l,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.EQ,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fxO,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.j.ad(Math.abs(d.dy),2)+" volts  \xb7  "+A.j.ad(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.j.ad(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.av,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.bZ:A.aQ,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bgd(d)
if(v!=null){l=(d.x?A.ay:A.aw).j(0.14)
j=B.m(10)
i=B.L((d.x?A.ay:A.aw).j(0.5),A.r,1)
m.push(new B.D(A.i0,B.q(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fEM,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.co,p,p,p),p))}if(C.hg9(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dW("CH "+t,d.at===u,new C.bJI(q,d,u),p,h,p))}l=B.bW(A.bH,l,A.bs,p,4,6)
l=B.a([A.am,l,A.av,B.d(q.a.c.tR(d)?"Showing: "+F.Rq[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hs,p,p,p)],g)
if(q.a.c.tR(d))l.push(new E.fC(A.Hz,"Open big screen",new C.bJL(q,d),h,p))
A.d.u(m,l)}if(D.mt.am(0,o)&&!C.hg9(o)){l=B.a([A.am,B.d(q.a.c.tR(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hs,p,p,p)],g)
if(q.a.c.tR(d))l.push(new E.fC(A.PH,"Open the "+$.qF().h(0,o).b,new C.bJM(q,d),h,p))
A.d.u(m,l)}if(D.mt.am(0,o))A.d.u(m,B.a([A.am,new E.fC(A.D3,"Make it bigger (or tap it 4 times)",new C.bJN(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.j.ad(d.db,1)
if(q.a.c.tR(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.j.ad(i,1)+" V",p,p,p,p,p,p,D.fyG,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dw1[s]
j=r===A.j.iH(r)?A.j.V(r):r
l.push(new E.dW(B.w(j)+" V out",d.e===r,new C.bJO(q,d,r),p,h,p))}i.push(new B.D(A.li,B.bW(A.bH,l,A.bs,p,0,6),p))}if(o==="regulator")i.push(D.fXU)
A.d.u(m,i)}if(q.a.c.Mm(d)&&!d.x){l=A.j.ad(d.cx,2)
j=A.j.ad(q.a.c.Ak(d),2)
i=q.a.c
w=i.aoS(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.aoS(d)?A.bZ:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.j.D(d.cx/q.a.c.Ak(d),0,1)
i=q.a.c.aoS(d)?A.ay:A.b4
m.push(new B.D(A.i0,B.x(B.a([l,A.cT,B.bx(j,B.kr(A.by,p,p,5,p,w,new B.lO(i,x.c)),A.aq)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.j.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i0,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fsb,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dkK[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dW(j,d.e===r,new C.bJP(q,d,r),p,h,p))}m.push(B.bW(A.bH,l,A.bs,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.daD[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dW(j,d.r===r,new C.bJQ(q,d,r),p,h,p))}m.push(B.bW(A.bH,l,A.bs,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bJR(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bJS(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bJJ(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bJK(d)))
if(o==="crank")m.push(D.fTa)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hs,p,p,p))
return q.b1d(new B.cP(D.b6P,B.cc(B.x(m,A.E,p,A.e,A.P,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bdh.prototype={}
C.Wo.prototype={
S(){return new C.aFf(C.hm7(),new B.cw(null,x.q),B.aR(x.S))}}
C.aFf.prototype={
Y(){this.a4()
$.aW.c1$.push(this)
this.afi()},
afi(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fKz(),$async$afi)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.it5(t.d,r)
if(s!=null){t.m(new C.e1m(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$afi,v)},
Fx(){var w,v=this
if(!v.as)return
w=C.iiS(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bGJ(w)},
jm(d){if(d!==A.fW)this.Fx()},
t(){$.aW.hV(this)
this.Fx()
this.a3()},
cbV(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e1v(q),u).gJ(0)
s=new B.Y(v,new C.e1w(),u).gJ(0)
r=new B.Y(v,w.gcZf(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e1x(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Fx()
if(A.o.F(q.w,10)===0){w=q.f
$.ajd()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ajd()[q.f].c.$1(q.d)){w.I(0,q.f)
C.JQ("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e1y())
q.Fx()
w=q.c
w.toString
w=B.PJ(w)
if(w!=null)w.T(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.ajd()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mb,p,p,p,p,p,p,p,p,p,p))}},
ai3(){var w=0,v=B.j(x.H),u=this,t
var $async$ai3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.e1l(u),t,null,!0,!0,x.H),$async$ai3)
case 2:return B.h(null,v)}})
return B.i($async$ai3,v)},
b1c(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.L(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.q(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.az(w,B.h7(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b1b(d,e,f,g){return this.b1c(d,e,f,g,null)},
asS(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.L(f.j(0.4),A.r,1)
return B.E(B.az(w,B.q(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e8,new B.dm(1,A.cp,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.ba,A.i,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
ago(){var w=0,v=B.j(x.H),u=this,t
var $async$ago=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).ce(B.ec(new C.e1h(u),!1,null,x.H)),$async$ago)
case 2:t=u.e.gbk()
if(t!=null)t.bil()
if(u.c!=null)u.m(new C.e1i())
u.Fx()
return B.h(null,v)}})
return B.i($async$ago,v)},
bJx(){var w,v,u,t,s=null,r=this.f
$.ajd()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bd:A.ay
u=B.m(9)
t=B.L(I.BX,A.r,1.5)
return B.q(s,B.as(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xs,s,s,s),s,s,s),A.f,s,D.b6W,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.f6,s,s,s)},
ajd(){var w=0,v=B.j(x.H),u=this,t
var $async$ajd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.mU,null,new C.e1u(u),t,!0,!0,!0,A.kh,!1,!1,x.H),$async$ajd)
case 2:return B.h(null,v)}})
return B.i($async$ajd,v)},
cbW(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.az(r,B.q(r,D.c_6,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1A(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.q(r,D.bcT,A.f,r,r,new B.o(A.br,r,B.L(A.aG.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.x(B.a([B.A(B.a([p,A.af,o,A.af,B.E(B.x(B.a([D.fVS,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eW:A.hA,r,r,r,r,r,r,r,r,11.5,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.azh(s.gcie(),r),A.vC,s.b1b(A.t5,"Construction Lab: real 3D wiring, plumbing and a house",A.cI,new C.e1B(s,d)),s.b1c(A.lN,"Challenges",A.aQ,s.gczt(),s.bJx()),s.b1b(A.D_,"How to play",A.aG,new C.e1C(d,e))],v),A.l,r,A.e,A.i,0,r,r),A.am,B.A(B.a([s.asS(A.oz,"Circuits",A.bg,s.gcsk()),A.bo,s.asS(A.ox,"Repair",A.aQ,new C.e1D(s)),A.bo,s.asS(K.wH,"Clear",A.bZ,new C.e1E(s))],v),A.l,r,A.e,A.i,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(I.BX,r,new B.bG(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bIl,r,r,r)},
B(d){var w=this,v=null
$.atC="tech"
return B.c4(v,A.c4,B.bm(!0,B.x(B.a([w.cbW(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hkZ(w.d,w.e,w.gcbU(),v),1)],x.p),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.azh.prototype={
S(){return new C.bbp(null,null)}}
C.bbp.prototype={
gaza(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.Y,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaza().t()
this.bxm()},
B(d){var w=null,v=this.a.c
return B.az(w,B.h7(new B.a5(42,42,B.c6(this.gaza(),new C.cLC(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bbo.prototype={
a5(d,e){var w,v,u,t=null,s=e.ei(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.K()
w.r=A.b8.j(0.25+0.15*o).gp(0)
w.y=N.ot
d.N(s,r+2+o*2,w)
w=B.K()
w.sav(D.eAJ.aK(0,B.bZ(s,r)))
d.N(s,r,w)
v=B.K()
v.b=A.a9
v.c=2.2
v.sav(new B.h_(A.A,0,6.283185307179586,A.x,D.d1j,t,new B.mN(p)).aK(0,B.bZ(s,r)))
d.N(s,r,v)
p=new C.cLB(d)
p.$3(s.a2(0,A.tv),8+o*1.5,1)
q*=4
p.$3(s.a2(0,D.epx),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a2(0,D.erV),2.6,0.5+0.5*Math.cos(q))
u=B.fr(t,A.cs,t,t,t,D.foz,A.a5,A.bX,t,A.dD,A.bY)
u.e5()
u.a5(d,s.a2(0,new B.p(-u.b.c/2,5)))},
aE(d){return d.b!==this.b}}
C.azC.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.azD.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bw_()}}
C.aLL.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA2.prototype={}
C.fR.prototype={}
C.Kj.prototype={
a7(){return"ScreenStyle."+this.b}}
C.mx.prototype={}
C.W7.prototype={
S(){return new C.bm5(null,null)}}
C.bm5.prototype={
gaas(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.or,null,1,null,v)
w.cr(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaas().t()
this.bze()},
gSF(){var w=this.gaas().y
w=w==null?null:A.o.aq(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mt.h(0,this.a.c)
if(v==null)v=D.aSl
return B.c4(w,X.ZS,B.bm(!0,new B.an(A.a0,w,A.ad,A.t,B.a([B.as(v.b===D.AD?this.bLF(v):this.cp5(v),w,w,w),B.ap(w,B.aI(w,w,w,w,A.n6,w,w,w,new C.dYw(d),w,w,w,B.o2(w,A.b6,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.as(B.d(v.a,w,w,w,w,w,w,D.fqi,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
cbX(d){var w
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
cp5(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.a9Q
switch(p.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c6(this.gaas(),new C.dYv(this,w,d,o),q)
if(p===D.a9R)v=new B.BK(D.bIZ,v,q)
p=this.cbX(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ab(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fH(p,B.q(q,B.q(q,v,A.f,q,q,new B.o(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A0.H4,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a8(A.aA,A.aE,A.x,r,q,q),A.n),q,q,q,D.bCl,new B.R(u,u,u,u),q,q,q),q)},
b9y(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.D(this.a.d+A.j.bh(this.gSF()*0.4),0,100),q=d.b===D.a9Q,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.b_(A.o.v(B.df(s)),2,"0")+":"+A.a.b_(A.o.v(B.fQ(s)),2,"0"),t,t,t,t,t,t,A.tP,t,t,t),A.b1],x.p)
for(w=0;w<4;++w){v=new B.aN(1,1)
n.push(B.q(t,t,A.f,t,t,new B.o(A.c,t,t,new B.be(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bIG,t,t,t,3))}n.push(A.dh)
n.push(D.fOq)
n.push(A.bo)
v=B.L(A.ab,A.r,1)
u=B.m(4)
n.push(B.q(t,new B.bL(A.a7,t,t,B.BY(A.A,B.q(t,t,A.f,t,t,new B.o(A.b4,t,t,B.m(2),t,t,A.n),t,t,t,A0.H4,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.r8)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fF8,t,t,t))
return new B.D(new B.R(p,12,o,2),B.A(n,A.l,t,A.e,A.i,0,t,t),t)},
ax2(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.q(v,B.as(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dqU,new B.a8(A.aA,A.aE,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.av,B.d(d.a,v,1,A.a2,v,v,v,D.fva,v,v,v)],w))
return B.az(v,B.x(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dYr(this,d),v,v,v,v,v,v,!1,A.a4)},
c2d(d,e){return this.ax2(d,e,!0)},
c1V(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aSm||n===D.Ey,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.kp,0.5)
l.toString
l=B.a([k,A.dB,l],x.O)
k=p.b9y(d)
w=m?190:138
v=B.m(24)
u=B.L(A.aT,A.r,1)
w=B.az(o,B.q(o,B.bx(B.m(23),B.b2(o,o,o,new C.afX(0,p.gSF(),o),A.fQ),A.aq),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.i1,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dYp(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kB[s]
t.push(new B.ci(A.A,o,o,p.c2d(r,m?58:54),o))}k=B.a([k,A.am,w,A.ae,B.E(B.kY(0.92,t,v,8,12,A2.ws,o,!1),1)],u)
if(n!==D.a9R){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.cX(F.kB,0,B.dB(4,"count",x.S),x.gD),t=v.$ti,v=new B.bR(v,v.gJ(0),t.k("bR<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.ax2(q==null?t.a(q):q,50,!1))}k.push(B.q(o,B.A(u,A.l,o,A.qW,A.i,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bDi,H.anm,o,o,o))}return B.q(o,B.x(k,A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a8(A.aA,A.aE,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bF1(d,e){var w=null
return B.q(w,B.x(B.a([this.b9y(d),B.E(B.b2(w,w,w,new C.afX(e,this.gSF(),w),A.fQ),1),B.az(w,B.q(w,B.as(B.d(F.kB[e].a,w,w,w,w,w,w,A.KB,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dYk(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bLF(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ab(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fH(1.5384615384615383,B.q(t,B.c6(this.gaas(),new C.dYn(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a8(A.aA,A.aE,A.x,w,t,t),A.n),t,t,t,D.bIg,new B.R(8,8,8,s),t,t,t),t)}}
C.by4.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.S()
w=B.K()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.kp,0.4)
t.toString
w.sav(new B.a8(A.aA,A.aE,A.x,B.a([u,A.dB,t],x.O),null,null).aK(0,new B.a1(0,0,p,o)))
d.ar(new B.a1(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ao(A.O,A.M,A.R,A.S,A.Q)
t.r=v.j(0.1).gp(0)
t.y=D.bJ3
d.N(new B.p(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aE(d){return!0}}
C.afX.prototype={
a5(d,e){return L.Mb(d,e,this.b,this.c)},
aE(d){return!0}}
C.aNz.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bwR.prototype={}
C.a9A.prototype={
B(d){var w=null
return B.c4(B.eP(w,w,w,!0,!0,D.aip,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,K.as3,w,w,w,new C.cmV(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h3J,w,w,w,1,w,!0),D.aip,B.cl(B.a([D.etl,B.cr(new C.cmW())],x.p),w,w,D.bEo,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.XJ.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aGJ(w,new B.au(A.ax,$.ax()),$,A.bF,0,B.a([],x.X),null,null)}}
C.aGJ.prototype={
Y(){this.a4()
this.mh()},
b7q(d){var w=this.d.length
return A.o.F(A.j.bh(A.j.F(A.j.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mz(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b7q(v.f)
if(w!==v.x){v.x=w
E.mv("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eUX(v))
C.JQ("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cdE(){if(this.d.length<2)return
this.m(new C.eUT(this))},
b1K(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eUS(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcdD(),p=s.d,o=B.E(B.az(r,B.b2(r,r,r,new C.byg(p,s.f,r),A.fQ),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.as(B.d(n,r,r,r,r,r,r,D.fDc,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aBV[A.o.F(v,8)].j(0.9)
t=new B.aN(20,20)
o.push(B.az(r,B.q(r,B.d(p[v],r,r,r,r,r,r,D.fCp,r,r,r),A.f,r,r,new B.o(u,r,r,new B.be(t,t,t,t),r,r,A.n),r,r,r,A.fD,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eUV(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lB(A.aQ,A.f7,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fb(o,r,r),B.A(B.a([B.E(B.aM(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bA(r,new B.b6(4,B.m(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kk,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eUW(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,A.dk,!0,A.a5,r,A.ao,r,r,r,r),1),A.af,new E.fC(A.i2,"Add",s.gcdB(s),A.c,r),A.bo,new E.fC(A.oy,"Spin",q,A.b4,r)],w),A.l,r,A.e,A.i,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.byg.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.p(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.S()
w=B.K()
w.r=D.bj9.gp(0)
d.N(g,i,w)
w=B.K()
w.b=A.a9
w.c=3
w.r=A.aQ.gp(0)
d.N(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bZ(g,f)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=D.aBV[A.o.F(r,8)].gp(0)
d.cB(p,q,u,!0,o)
o=B.bZ(g,f)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.b=A.a9
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cB(o,q,u,!0,p)
J.bp(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aB(p,0,11)+"\u2026"
n=new B.iH(new B.ep(p,l,l,A.cN,l,l,l,l,l,l,D.fpn),A.a5,A.bX,new B.ji(1),l,l,l,l,A.bY,l,A.cs)
n.e5()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.p(f-o-16,-p.gba(p)/2))
i.restore()}i=B.K()
i.r=D.ai1.gp(0)
d.N(g,20,i)
i=B.K()
i.b=A.a9
i.c=3
i.r=A.aQ.gp(0)
d.N(g,20,i)
m=new B.aG(k.r,A.ai,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bv())
h=B.K()
h.r=A.c.gp(0)
d.af(m,h)
h=B.K()
h.b=A.a9
h.c=2
h.r=A.b6.gp(0)
d.af(m,h)},
aE(d){return!0}}
C.Ww.prototype={
S(){return new C.bmg($,A.bF,0,B.a([],x.X),null,null)}}
C.bmg.prototype={
Y(){this.a4()
this.mh()},
mz(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JQ("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UJ(900,new C.e4l())}w.m(new C.e4m())},
b1M(d){return this.m(new C.e4g(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b_(A.o.v(A.j.aq(m,60)),2,"0")
v=A.a.b_(A.o.v(A.o.F(A.j.cC(m),60)),2,"0")
m=B.b2(n,n,n,new C.bsX(l,A.bZ,n),A.aTR)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fu3,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.as(new B.a5(280,280,new B.an(A.A,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.ft1,n,n,n),A.av,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vG,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dnN[r]
u.push(new E.dW(""+q+" min",o.d===q,new C.e4i(o,q),n,A.bZ,n))}m=o.f
p=m?A4.uX:A.hl
m=m?"Pause":"Start"
return E.lB(A.bZ,A.f7,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fb(u,n,n),new E.fb(B.a([new E.fC(p,m,new C.e4j(o),A.b4,n),new E.fC(A.oB,"Reset",new C.e4k(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.bsX.prototype={
a5(d,e){var w,v,u,t,s=e.ei(A.J),r=e.a/2-14
$.S()
w=B.K()
w.b=A.a9
w.c=16
w.r=A.c.j(0.08).gp(0)
d.N(s,r,w)
w=B.bZ(s,r)
v=B.K()
v.b=A.a9
v.c=16
v.d=A.bu
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sav(new B.h_(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aK(0,B.bZ(s,r)))
d.cB(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aE(d){return d.b!==this.b}}
C.VH.prototype={
S(){return new C.blP($,A.bF,0,B.a([],x.X),null,null)}}
C.blP.prototype={
Y(){this.a4()
this.mh()},
mz(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.T9.h(0,p.d)
w.toString
v=A.d.f1(w,new C.dPO())
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
E.mv("flute",D.cbp[t]+5,1400,0.35)}p.m(new C.dPP())},
gcdH(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L7("Press Start",0.5)
w=D.T9.h(0,this.d)
w.toString
v=A.d.f1(w,new C.dPJ())
u=A.j.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L7("Breathe in",0.5+0.5*A.dG.aA(0,p))
case 1:return new B.L7("Hold",1)
case 2:return new B.L7("Breathe out",1-0.5*A.dG.aA(0,p))
default:return new B.L7("Hold",0.5)}}}return new B.L7("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcdH(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hd.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ab(0,A.G,A.hd.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pY,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kk,q,q,q),q,q,q,q,q,q))
n=B.as(new B.a5(300,340,new B.an(A.A,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aT(D.T9.gev(D.T9));w.C();){v=w.gR(w)
o.push(new E.dW(v,r.d===v,new C.dPM(r,v),q,A.hd,q))}w=r.e
v=w?A.zu:A.hl
w=w?"Stop":"Start"
o.push(new E.fC(v,w,new C.dPN(r),A.b4,q))
return E.lB(A.hd,A.f7,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fb(o,q,q))}}
C.aKa.prototype={}
C.Wn.prototype={
S(){return new C.bm7(new B.cw(null,x.A),B.a([],x.au),A.as,A.c)}}
C.bm7.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,K.oJ,s,s,s,new C.e0R(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.m(18),new B.eo(B.az(s,B.b2(s,s,s,new C.bo9(t.e,t.x,s),A.fQ),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e0S(t),new C.e0T(t),s,s,s,s,s,s,s,s,s,new C.e0U(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d2Q[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G6(v,u,new C.e0V(t,v),!1,s))}u=t.r
return E.lB(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bV,p,s),"DRAW PAD",B.x(B.a([new E.fb(o,s,s),E.iQ(A.bE,""+A.j.V(u),"Brush",30,2,new C.e0W(t),u),new E.fb(B.a([new E.dW("Eraser",t.w,new C.e0X(t),A.CR,A.bE,s),new E.fC(A.pz,"Undo",new C.e0Y(t),A.c,s),new E.fC(A.ek,"Clear",new C.e0Z(t),A.c,s),new E.fC(A.Pu,"Paper",new C.e1_(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bo9.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.S()
w=B.K()
w.r=this.c.gp(0)
d.ar(new B.a1(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=$.S()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bu
q.e=A.dT
q.b=A.a9
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=p.gp(p)
d.N(r,o/2,n)}else{p=B.a([],u)
m=new B.aG(r.r,A.ai,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ab()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.c7(o,r,(o+k.a)/2,(r+k.b)/2)
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
C.X6.prototype={
S(){var w=x.S
return new C.aG2(B.aR(w),B.aR(w))}}
C.aG2.prototype={
Y(){this.a4()
this.aun()},
aun(){var w,v,u=this,t=x.N,s=B.bq(D.dt0,!0,t)
A.d.Ds(s)
w=x.S
v=B.U(s).c
t=B.C(B.cX(s,0,B.dB(u.d,"count",w),v),t)
A.d.u(t,B.cX(s,0,B.dB(u.d,"count",w),v))
A.d.Ds(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
cdC(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mv("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.erM(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bO(A.mY,new C.erN(s,v,u),t)
else{s.x=!0
B.bO(Ab.GI,new C.erO(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.VK,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.aq(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yN,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iX,A.i,0,q,q),q),B.E(B.ip(!0,q,q,A.y,new B.hH(v,8,8,1,q),new C.erS(r),r.e.length,A.bh,q,A.ah,!1),1)],o),A.l,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d4q[t]
o.push(new E.dW(s.b,r.d===s.a,new C.erT(r,s),q,A.aG,q))}o.push(new E.fC(K.aqz,"New game",new C.erU(r),A.b4,q))
return E.lB(A.aG,A.f7,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fb(o,q,q))}}
C.Xg.prototype={
S(){return new C.aGn(B.a([],x.t))}}
C.aGn.prototype={
cdG(d){A.d.a8(this.d)
this.w=!0
this.b1L()},
b1L(){this.d.push(A.cQ.az(4))
this.e=0
this.a00()},
a00(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a00=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eCy(t))
s=x.H
w=3
return B.b(B.bO(A.lI,null,s),$async$a00)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVz(n)
w=7
return B.b(B.bO(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a00)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eCz(t))
case 1:return B.h(u,v)}})
return B.i($async$a00,v)},
aVz(d){this.m(new C.eCw(this,d))
E.mv("marimba",D.cbo[d]+5,450,0.55)
B.bO(A.GG,new C.eCx(this),x.H)},
cdI(d){var w,v,u=this
if(!u.w||u.r)return
u.aVz(d)
w=u.d
v=u.e
if(w[v]!==d){G.dE(90,"",600,0,0.5,"saw")
u.m(new C.eCA(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eCB(u))
B.bO(A.hK,new C.eCC(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aWq,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fDD,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aAO[v]
u=u.j(q.f===v?1:0.35)
t=new B.aN(28,28)
s=q.f===v?B.a([new B.ab(0,A.G,D.aAO[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.az(p,B.cT(p,p,p,p,A.b_,new B.o(u,p,new B.bG(r,r,r,r),new B.be(t,t,t,t),s,p,A.n),A.jp,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eCD(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.as(new B.D(A.ac,B.x(B.a([o,A.am,n,A.dc,new B.fH(1,B.kY(1,l,2,12,12,p,A.dZ,!1),p)],m),A.l,p,A.ba,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lB(A.bl,A.f7,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fb(B.a([new E.fC(A.hl,n,q.gcdF(q),A.b4,p)],m),p,p))}}
C.XA.prototype={
S(){return new C.bnn(new B.au(A.ax,$.ax()))}}
C.bnn.prototype={
axW(d){return B.p7(A.j.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eQq(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cW(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eQz()
l=B.aM(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bA(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.m(16),A6.xR),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.m(16),D.b5m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lW,"Bill amount",!0,!0,!1,m,m,m,m,D.fAT,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.ec,m,m,m,1,m,m,!1,"\u2022",m,new C.eQv(n),m,m,m,!1,m,m,!1,m,!0,m,A.ac,m,m,m,m,m,m,m,m,m,m,m,A.aVo,!0,A.a5,m,A.ao,m,m,m,m)
k=A.b4.j(0.1)
s=B.m(20)
r=B.L(A.b4.j(0.35),A.r,1)
q=x.p
s=B.cl(B.a([l,A.bA,B.q(m,B.x(B.a([t.$2("Tip ("+A.j.V(n.e)+"%)","$"+n.axW(w)),t.$2("Total","$"+n.axW(v)),A3.NN,t.$3$big("Each of "+n.f+" pays","$"+n.axW(u),!0)],q),A.l,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bS,m,m,m)],q),m,m,A.fu,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cPH[p]
r.push(new E.dW(""+o+"%",A.j.V(n.e)===o,new C.eQw(n,o),m,A.b4,m))}l=n.f
return E.lB(A.b4,A.f7,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fb(r,"TIP",m),E.iQ(A.aG,""+l,"People",20,1,new C.eQx(n),l),new E.fb(B.a([new E.dW("Round up",n.r,new C.eQy(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.X5.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bmS(w,A.cQ,$,A.bF,0,B.a([],x.X),null,null)}}
C.bmS.prototype={
Y(){this.a4()
this.mh()},
mz(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.j.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t
E.XC("snare",0,0.5)}u.m(new C.eqr())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h2()
u.w=t
u.x=t?0:3.141592653589793
E.mv("bell",24,400,0.5)}u.m(new C.eqs())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bfH(v,o.r>0,n))}u=B.az(n,B.as(B.bW(A.fU,m,A.bs,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eqk(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.j.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.L(A.d3,A.r,6)
s=B.a([new B.ab(0,A.G,A.aQ.j(0.4),A.J,30)],x.V)
u=B.az(n,B.as(B.e1(A.A,B.q(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fA2,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eAN,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eql(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.az(n,B.as(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.foR,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kk,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eqm(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dkY[r]
v.push(new E.dW(q.b,o.d===q.a,new C.eqn(o,q),q.c,A.bg,n))}v=B.a([new E.fb(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iQ(A.bg,""+s,"Dice",4,1,new C.eqo(o),s))}if(o.d==="num"){s=o.z
s=E.iQ(A.bg,""+s,"From",100,1,new C.eqp(o),s)
p=o.Q
A.d.u(v,B.a([s,E.iQ(A.bg,""+p,"To",1000,2,new C.eqq(o),p)],m))}return E.lB(A.bg,A.f7,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.P,0,A.p))}}
C.bfH.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cQ.ai()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ab(0,A.G,A.w.j(0.4),A.cA,14)],x.V)
t=B.a([],x.p)
for(s=D.dF8.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.q(p,p,A.f,p,p,A.XM,p,18,p,p,p,p,p,18),p))
return B.eG(A.A,w,B.q(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bI,p,p,100),p)}}
C.aNl.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzZ.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bz0()}}
C.aNG.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA4.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bzm()}}
C.aO8.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAd.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bzQ()}}
C.aOz.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAm.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bAg()}}
var z=a.updateTypes(["Q(u0)","~()","Q(a5D)","aB<~>()","Q(D7)","H(u0,H)","G(G,u0)","Q(D3)","Q(a_D)","Q(acJ)","Q(a4u)","Q(nL)","XB()","VG()","a9A()","Xb()","Xq()","Xc()","Q(mY)","VN()","agf(Z,H)","af6(Z,H)","~(a9<@,@>)","H(D3,D3)","n(eh)","Q(ag3)","Q(a1R)","Q(Di)","Q(add)","Q(af9)","Q(acX)","H(H,rb)","H(H,D7)","n(rb)","~(rb,ai<n>,H)","rb?(D7)","X5()","v(n,a1E)","Q(abC)","~(Bb)","XE()","~(uQ,n,p,u,G)","~(n,u0)","Wo()","WQ(Z)","Oh(Z)","W7(Z,bw<G>,bw<G>)","XJ()","Ww()","VH()","Wn()","X6()","Xg()","XA()","Q(rb)"])
C.fKX.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fzA.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fHk.prototype={
$1(d){var w
if(!this.a.Mm(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fHl.prototype={
$1(d){return d.x},
$S:z+0}
C.fKU.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fKV.prototype={
$1(d){var w
if(!this.a.Mm(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fKW.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ejy.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ejz.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.ejA.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.ms(v,A.dK,A.iz)}},
$S:8}
C.ejL.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ejM.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ejH.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ejF.prototype={
$2(d,e){var w=this.a
w.r.push(B.cy(B.dw(0,0,0,d,0,0),new C.ejG(w,this.b,e)))},
$S:1906}
C.ejG.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ejI.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gX3().alf(0,u[1],u[2],u[3])
u[4].bO(0,new C.ejD(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dE(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ejE(w.a,v,w.f,w.r))},
$S:0}
C.ejD.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:205}
C.ejE.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejJ.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gX3().am6(t,u[1],s,u[3])
G.dE(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ejC(w.a,v,w.e,w.f))},
$S:0}
C.ejC.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejK.prototype={
$0(){G.dE(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ejB(w,this.b))},
$S:0}
C.ejB.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ejP.prototype={
$0(){var w=this.a
return w.m(new C.ejO(w))},
$S:0}
C.ejO.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ejQ.prototype={
$0(){var w=this.a
return w.m(new C.ejN(w))},
$S:0}
C.ejN.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ejR.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.PQ()},
$S:0}
C.ejS.prototype={
$0(){return this.a.Z9(this.b)},
$S:0}
C.ejT.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PQ():w.aYA()},
$S:2}
C.ejU.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PQ():w.aYA()},
$S:0}
C.eyS.prototype={
$2(d,e){return d+e},
$S:1907}
C.ezb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eza(w,d))},
$S:1908}
C.eza.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.j.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.ezc.prototype={
$0(){},
$S:0}
C.ezd.prototype={
$0(){},
$S:0}
C.eyU.prototype={
$0(){return this.a.m(new C.eyT(this.b,this.c))},
$S:0}
C.eyT.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eyJ.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.eyK.prototype={
$1(d){return this.a.cx=d},
$S:32}
C.eyL.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.eyM.prototype={
$1(d){return this.a.cy=d},
$S:32}
C.eyN.prototype={
$1(d){return this.a.db===d},
$S:33}
C.eyO.prototype={
$1(d){return this.a.db=d},
$S:32}
C.eyP.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.eyQ.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.I(0,d)},
$S:32}
C.eyR.prototype={
$0(){var w=this.a
return w.m(w.gayx())},
$S:0}
C.eyH.prototype={
$1(d){return this.a.$1(!0)},
$S:70}
C.eyI.prototype={
$1(d){return this.a.$1(!1)},
$S:112}
C.eyG.prototype={
$1(d){return this.a.$1(!1)},
$S:141}
C.ez4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b2(p,p,p,new C.bjz(o,p),n)
w=this.b
v=C.bCB("WORLD",w.a,w.c)
u=C.bCB("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.j.V(t*100)
t=t<0.25?A.bZ:A.b4
t=C.bCB("FUEL",""+s+"%",t)
s=o.r.b
r=A.j.V(s*100)
s=s>D.Dy[o.db].d?A.bZ:A.c
q=x.p
s=B.a([v,u,t,C.bCB("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bCB("HEIGHT",""+A.j.V(A.j.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.A(s,A.l,p,A.iX,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bI3(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.th[w].a+".":"You landed on every world!"
v=B.a([new E.fC(A.oC,"Again",new C.ez_(o),A.c,p),new E.fC(A.ox,"Rebuild",new C.ez0(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fC(A.jI,"Next world",new C.ez1(o),A.b4,p))
n.push(C.hA_("Perfect landing!",w,A.b4,v))}if(o.as==="crashed")n.push(C.hA_("Crash!",o.at,A.bZ,B.a([new E.fC(A.oC,"Try again",new C.ez2(o),A.b4,p),new E.fC(A.ox,"Rebuild",new C.ez3(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b2,A.t,n,p)},
$S:67}
C.ez_.prototype={
$0(){var w=this.a
return w.m(w.gayx())},
$S:0}
C.ez0.prototype={
$0(){var w=this.a
return w.m(new C.eyX(w))},
$S:0}
C.eyX.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ez1.prototype={
$0(){var w=this.a
return w.m(new C.eyW(w))},
$S:0}
C.eyW.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.ez2.prototype={
$0(){var w=this.a
return w.m(w.gayx())},
$S:0}
C.ez3.prototype={
$0(){var w=this.a
return w.m(new C.eyV(w))},
$S:0}
C.eyV.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ez5.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.eyZ(v,w))},
$S:0}
C.eyZ.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.ez6.prototype={
$1(d){return this.a.y=d},
$S:9}
C.ez7.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.ez8.prototype={
$1(d){return this.a.z=d},
$S:9}
C.ez9.prototype={
$0(){var w=this.a
return w.m(new C.eyY(w))},
$S:0}
C.eyY.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dPH.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iB(B.a([C.hv7(),C.hv8()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kX(0,B.cO(J.t(r,1)))
q.m(new C.dPG(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dPG.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dPh.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dPi.prototype={
$0(){return this.a.bZZ(B.aU(J.t(this.b,"group")))},
$S:0}
C.dPj.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dPk.prototype={
$1(d){return A.a.b_(A.o.ft(A.o.D(A.j.V(d*255),0,255),16),2,"0")},
$S:335}
C.dPI.prototype={
$0(){return E.XC("kick",0,0.25)},
$S:0}
C.dPl.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dPm.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dPn.prototype={
$0(){return E.XC("kick",0,0.5)},
$S:0}
C.dPo.prototype={
$0(){return G.dE(1300+this.a.RG.az(900),"",40,0,0.2,"square")},
$S:0}
C.dPq.prototype={
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
u=w}if(u.cy!=null&&!A.d.aV(u.d.e,new C.dPp(u)))u.cy=null
u.id=0},
$S:0}
C.dPp.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAn(d)},
$S:z+10}
C.dPe.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dPf.prototype={
$0(){var w=this.a
return w.m(w.gc9D())},
$S:0}
C.dPg.prototype={
$0(){return this.a.aeI(null)},
$S:0}
C.dPx.prototype={
$0(){var w=this.a.as
return w==null?null:w.fa(0,B.I(["t","shot"],x.N,x.z))},
$S:0}
C.dPy.prototype={
$0(){return this.a.cG5(this.b.a)},
$S:0}
C.dPz.prototype={
$0(){return this.a.aeI(this.b)},
$S:0}
C.dPA.prototype={
$1(d){var w=this.a
return w.m(new C.dPw(w,d))},
$S:6}
C.dPw.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dPB.prototype={
$0(){var w=this.a
return w.m(new C.dPv(w,this.b))},
$S:0}
C.dPv.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dPC.prototype={
$0(){var w=this.a
return w.m(new C.dPu(w))},
$S:0}
C.dPu.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dPD.prototype={
$0(){var w=this.a
return w.m(new C.dPt(w))},
$S:0}
C.dPt.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fa(0,B.I(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.LR},
$S:0}
C.dPE.prototype={
$0(){var w=this.a
return w.m(new C.dPs(w))},
$S:0}
C.dPs.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b0l()
else w.p3=null},
$S:0}
C.dPF.prototype={
$0(){var w=this.a
return w.m(new C.dPr(w))},
$S:0}
C.dPr.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c6M.prototype={
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
$S:290}
C.c6N.prototype={
$1(d){var w=new B.qs([],[]).o_(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:390}
C.fsQ.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:232}
C.fsR.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:232}
C.fsS.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:232}
C.fsZ.prototype={
$1(d){return!J.t(d,0)},
$S:232}
C.ft_.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:232}
C.ft0.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:232}
C.dRm.prototype={
$1(d){return this.a.avb(0)},
$S:8}
C.dR0.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.iig(),B.U(w).k("N<1,H>")).fM(0)},
$S:0}
C.dR3.prototype={
$1(d){return""+d},
$S:76}
C.dRn.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dQZ.prototype={
$1(d){return this.a.avb(this.b)},
$S:8}
C.dR_.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.az1(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mP(0,d,a1.mi(0.15,0.3))
u=a1.mP(0,d,a1.mi(0.15,0.62))
t=a1.mP(0,"and",a1.mi(0.48,0.46))
s=a1.mP(0,a0,a1.mi(0.82,0.46))
a1=t.a
w.push(new C.nL(v.a,a1,0))
w.push(new C.nL(u.a,a1,1))
w.push(new C.nL(a1,s.a,0))
break
case 1:v=a1.mP(0,d,a1.mi(0.12,0.25))
u=a1.mP(0,d,a1.mi(0.12,0.65))
r=a1.mP(0,"xor",a1.mi(0.46,0.25))
q=a1.mP(0,"and",a1.mi(0.46,0.65))
p=a1.az0(0,a0,a1.mi(0.82,0.25),0)
o=a1.az0(0,a0,a1.mi(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nL(a1,n,0))
m=u.a
w.push(new C.nL(m,n,1))
l=q.a
w.push(new C.nL(a1,l,0))
w.push(new C.nL(m,l,1))
w.push(new C.nL(n,p.a,0))
w.push(new C.nL(l,o.a,0))
break
case 2:k=a1.mP(0,"clock",a1.mi(0.15,0.4))
j=a1.mP(0,"not",a1.mi(0.45,0.65))
s=a1.mP(0,a0,a1.mi(0.82,0.3))
i=a1.mP(0,"buzzer",a1.mi(0.82,0.65))
a1=k.a
w.push(new C.nL(a1,s.a,0))
n=j.a
w.push(new C.nL(a1,n,0))
w.push(new C.nL(n,i.a,0))
break
default:h=a1.mP(0,d,a1.mi(0.12,0.25))
g=a1.mP(0,d,a1.mi(0.12,0.7))
f=a1.mP(0,"nor",a1.mi(0.5,0.25))
e=a1.mP(0,"nor",a1.mi(0.5,0.7))
s=a1.mP(0,a0,a1.mi(0.86,0.25))
a1=f.a
w.push(new C.nL(g.a,a1,0))
n=e.a
w.push(new C.nL(n,a1,1))
w.push(new C.nL(h.a,n,0))
w.push(new C.nL(a1,n,1))
w.push(new C.nL(a1,s.a,0))}},
$S:0}
C.dR4.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.az1(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.D3(p,"switch",new B.p(0.14*q.a,r*q.b),0))}o.mP(0,w.e,o.mi(0.86,0.5))},
$S:0}
C.dQU.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dQV.prototype={
$2(d,e){return A.j.aS(d.c.b,e.c.b)},
$S:z+23}
C.dQW.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dQX.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dQY.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.ae1(this.c)
if(v.ax)C.JQ("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dE(140,"",250,0,0.3,"square")}},
$S:0}
C.dR5.prototype={
$0(){},
$S:0}
C.dR6.prototype={
$0(){return A.d.cH(this.a.e,this.b)},
$S:0}
C.dR7.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dR2.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bq(w.e,new C.dR1(v))
w.cy=null},
$S:0}
C.dR1.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dQT.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mP(0,this.b,new B.p(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dRg.prototype={
$0(){var w=this.a
return w.m(new C.dRf(w))},
$S:0}
C.dRf.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dRh.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.az(A.c3,B.jn(B.b2(w,w,w,new C.bdz(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dRa(v),w,w,w,new C.dRb(v),new C.dRc(v),new C.dRd(v),w,w,w,w,w,w,w,w,w,w,new C.dRe(v),w,w,w,!1,A.a4)},
$S:36}
C.dRe.prototype={
$1(d){return this.a.cbo(d.b)},
$S:65}
C.dRc.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ckp(u)
if(t!=null){v.as=t
v.at=u
return}w=v.azT(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aJ(0,u)}},
$S:48}
C.dRd.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.p(A.j.D(w.a+u.Q.a,46,u.x.a-46),A.j.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dRb.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c2u(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bq(v,new C.dR8(w))
u=t.as
u.toString
v.push(new C.nL(u,w.a,w.b))
B.jY()}}t.z=t.as=null},
$S:38}
C.dR8.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dRa.prototype={
$1(d){return this.a.axP(d.b)},
$S:312}
C.dRi.prototype={
$0(){return this.a.bDS(this.b.a)},
$S:0}
C.dRj.prototype={
$0(){return this.a.avb(this.b.a)},
$S:0}
C.dRk.prototype={
$0(){var w=this.a
return w.m(new C.dR9(w))},
$S:0}
C.dR9.prototype={
$0(){var w=this.a
w.az1(0)
w.ay=null},
$S:0}
C.dRl.prototype={
$0(){return this.a.cBJ(this.b)},
$S:0}
C.cWe.prototype={
$0(){var w=this,v=null,u=B.fr(v,A.cs,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dD,A.bY)
u.e5()
return u},
$S:261}
C.dXy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dXx.prototype={
$0(){return this.a.d=null},
$S:0}
C.dXA.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c4n()},
$S:131}
C.dXz.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.ftg.prototype={
$0(){return K.aLv},
$S:z+40}
C.fth.prototype={
$0(){return D.dQK},
$S:z+43}
C.fti.prototype={
$0(){return D.dNB},
$S:z+13}
C.ftj.prototype={
$0(){return D.eh7},
$S:z+14}
C.ftk.prototype={
$0(){return D.e_0},
$S:z+15}
C.ftl.prototype={
$0(){return K.aLm},
$S:z+16}
C.ftm.prototype={
$0(){return D.eeU},
$S:z+17}
C.ftn.prototype={
$0(){return K.aLu},
$S:z+12}
C.fto.prototype={
$0(){return D.dPS},
$S:z+19}
C.f8F.prototype={
$2(d,e){return new C.agf(e,$.bH5()[e],new C.f8E(e,this.a),null)},
$S:z+20}
C.f8E.prototype={
$0(){var w=this.a,v=I.aJ2.h(0,$.bH5()[w].a)
$.atC=v==null?"music":v
B.a6(this.b,!1).ce(B.ec(new C.f8C(w),!1,null,x.H))},
$S:0}
C.f8C.prototype={
$1(d){return $.bH5()[this.a].e.$0()},
$S:39}
C.f8G.prototype={
$2(d,e){return new C.af6(e,D.aBq[e],new C.f8D(this.a,e),null)},
$S:z+21}
C.f8D.prototype={
$0(){return this.a.d.$1(D.aBq[this.b])},
$S:0}
C.f8l.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f8k.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f8j.prototype={
$1(d){var w=this
return new B.dY(new C.f8i(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f8i.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.l,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.fLd,A.av,D.fS3,A.ae],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fAm,a0,a0,a0)
m=new B.aN(12,12)
l=new B.aN(12,12)
l=B.a([new B.bz(1,A.bb,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.e6(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.EP,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jy,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0),A.af,new B.bz(2,A.bb,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.e6(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.EP,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jy,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dAl[k]
i=new B.aN(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.by
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.az(a0,B.q(a0,B.X(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bG(e,e,e,e),new B.be(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.fD,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f8g(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.am,new B.c8(A.aL,A.e,A.i,A.l,a0,A.p,a0,0,l,a0),A.T,new B.a5(a0,44,B.cl(m,a0,a0,a0,a0,a0,A.aL,!1),a0),A.aB],w))}v.push(B.bJ(A.B0,a0,new C.f8h(t,r,q,u,a3),a0))
return new B.D(new B.R(0,0,0,a2.f.d),B.bm(!0,new B.cP(new B.aY(0,1/0,0,a1.a.b*0.86),B.cl(v,a0,a0,A1.yO,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:104}
C.f8g.prototype={
$0(){var w=this
return w.a.$1(new C.f8f(w.b,w.c,w.d))},
$S:0}
C.f8f.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f8h.prototype={
$0(){var w=this,v=w.a
v.m(new C.f8e(v,w.b,w.c,w.d))
B.a6(w.e,!1).O(null)},
$S:0}
C.f8e.prototype={
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
C.f8t.prototype={
$0(){var w=this.a
return w.m(new C.f8s(w))},
$S:0}
C.f8s.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f8u.prototype={
$0(){return E.uH(this.b,this.a.f,"scene")},
$S:0}
C.f8v.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.ga_z().x
w===$&&B.c()
return new B.bN(new B.o(v,v,v,v,v,new B.bY(D.b2S,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c4],x.O),v,v),A.n),A.bk,v,v)},
$S:284}
C.f8w.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.as(B.ev(A.A,B.c6(new B.h8(B.a([u.guL(),u.ga_z()],x.dS)),new C.f8r(u,this.b,v),w),A.f,A.e7),w,w,w)},
$S:214}
C.f8r.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guL().x
r===$&&B.c()
w=r<0.9?1:1-C.btU(r,0.9,0.98)
v=s.ga_z().x
v===$&&B.c()
u=A.dG.aA(0,v)
switch(s.gaz2().a){case 0:s=s.bD2(t.b,r,u,t.c)
break
case 1:s=s.bU1(t.b,r,u,t.c)
break
case 2:s=s.cGA(t.b,r,u,t.c)
break
case 3:s=s.bFZ(t.b,r,u,t.c)
break
case 4:s=s.bJl(t.b,r,u,t.c)
break
case 5:s=s.cbp(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:181}
C.f8x.prototype={
$2(d,e){var w=B.abp(this.b),v=this.c.d,u=B.ar(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ar(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cPy(u,A.by,v,3.5)
u=this.a
w=u.guL().x
w===$&&B.c()
return B.Z0(B.kZ(null,null,null,1,0,new C.f8q(u),A.j.D(w,0,1)),v)},
$S:1910}
C.f8q.prototype={
$1(d){var w=this.a
w.guL().sp(0,d)
if(w.as)w.m(new C.f8m(w))},
$S:6}
C.f8m.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f8y.prototype={
$0(){var w=this.a
w.guL().sp(0,0)
w.af7()},
$S:0}
C.f8z.prototype={
$1(d){var w=this.a
w.m(new C.f8p(w,d))
if(w.as)w.af7()},
$S:6}
C.f8p.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f8A.prototype={
$0(){var w=this.a
w.m(new C.f8o(w,this.b))
w.guL().sp(0,0)
if(w.as)w.af7()},
$S:0}
C.f8o.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f8B.prototype={
$0(){var w=this.a
return w.m(new C.f8n(w,this.b))},
$S:0}
C.f8n.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f8c.prototype={
$2(d,e){return A.j.aS(d.a,e.a)},
$S:1911}
C.f8d.prototype={
$1(d){return d.b},
$S:1912}
C.drs.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.drt.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.drp.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.drq.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drr.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dru.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.drv.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.drw.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drx.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dry.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.drz.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.drA.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.drB.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.drC.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eyc.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ey1.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.ey3.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.ey4.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.ey7.prototype={
$1(d){var w=D.na.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.ey8.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.ea(new B.cM(new B.Y(q,new C.ey9(d),p.k("Y<1>")),new C.eya(r),p.k("cM<1,rb?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aN(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.J)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.ey9.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eya.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.ey5.prototype={
$1(d){return D.na.h(0,d.b).c===D.xL},
$S:z+54}
C.ey6.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eyC.prototype={
$1(d){var w=this.a,v=d.a,u=A.j.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vN(0,u)
w.a7u(A.o.aq(v,1000))},
$S:8}
C.eyb.prototype={
$0(){},
$S:0}
C.exY.prototype={
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
C.eye.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.T,B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.na.h(0,v).b,D.na.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.h2F,w,B.d(D.na.h(0,v).a,w,w,w,w,w,w,A.h2,w,w,w),w,w,w),B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,W.as7,w,w,w,w,new C.eyd(d),!1,w,w,w,w,w,w,w,D.fUW,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eyd.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eyg.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.l).w,r=B.a([D.et9],x.p)
for(w=0;w<6;++w){v=D.aBP[w]
u=B.d(v.a,t,t,t,t,t,t,A.h2,t,t,t)
r.push(B.dH(!1,t,t,t,!0,t,t,t,!0,t,t,D.c3u,t,t,t,t,new C.eyf(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lW,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,s.a.b*0.7),B.cl(r,t,t,D.bI9,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:25}
C.eyf.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.ey0.prototype={
$1(d){var w=null
return B.eg(B.a([B.bP(!1,A.dt,w,w,!0,w,w,w,new C.exZ(d),w,w),B.bP(!1,A.EU,w,w,!0,w,w,w,new C.ey_(d),w,w)],x.p),w,w,I.m8,D.fSg,w,w,w,w,D.fVf,w)},
$S:18}
C.exZ.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.ey_.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eyA.prototype={
$0(){var w=this.a
return w.m(new C.eyz(w))},
$S:0}
C.eyz.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eyB.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nn(new C.eyq(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bdL:t
v=B.a([B.b2(u,t,t,new C.bjx(w,v,new C.eyr(r),new C.eys(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,new B.du(!0,B.c6(w,new C.eyt(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bL0())
return B.az(A.c3,B.jn(new B.an(A.a0,t,A.b2,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eyu(r),t,r.gclI(),t,new C.eyv(r),new C.eyw(r),new C.eyx(r),t,t,t,t,t,t,t,t,t,t,new C.eyy(r),t,t,t,!1,A.a4)},
$S:36}
C.eyq.prototype={
$0(){return this.a.ad4(this.b)},
$S:0}
C.eyy.prototype={
$1(d){return this.a.cEh(d.b)},
$S:65}
C.eyw.prototype={
$1(d){return this.a.clJ(d.b)},
$S:48}
C.eyx.prototype={
$1(d){return this.a.clK(d.b)},
$S:19}
C.eyv.prototype={
$1(d){return this.a.b3S()},
$S:38}
C.eyu.prototype={
$1(d){return this.a.adM(d.b)},
$S:312}
C.eyr.prototype={
$0(){return this.a.z},
$S:659}
C.eys.prototype={
$0(){return this.a.Q},
$S:737}
C.eyt.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bPj()
if(p.length===0)return A.bM
w=A.w.j(0.55)
v=B.m(14)
u=B.L(A.by,A.r,1)
t=B.a([D.fPD,A.cT],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.J)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,A.aWm,q,q,q))
return B.q(q,B.x(t,A.E,q,A.e,A.P,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h6,q,q,q)},
$S:66}
C.ey2.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.L(e.j(0.6),A.r,1),s=x.p
return new B.D(A.en,B.A(B.a([B.q(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ac.VF,w,w,w),A.bG,B.d(g,w,w,w,w,w,w,F.abo,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1914}
C.eym.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.eyn.prototype={
$0(){var w=this.a
return w.m(new C.eyl(w))},
$S:0}
C.eyl.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eyo.prototype={
$0(){var w=this.a
return w.m(new C.eyk(w))},
$S:0}
C.eyk.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eyp.prototype={
$0(){var w=this.a
return w.m(new C.eyj(w))},
$S:0}
C.eyj.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eyi.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.na.gdO(D.na),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.J)(p),++r)u.push(s.cz1(p[r]))
return new B.D(S.alo,B.x(B.a([new B.D(Aj.an6,w,q),B.A(u,A.l,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.eyh.prototype={
$0(){return this.a.cbv(this.b)},
$S:0}
C.dro.prototype={
$0(){var w=this,v=null,u=B.fr(v,A.cs,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dD,A.bY)
u.e5()
return u},
$S:261}
C.bQ5.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bQg.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bQb.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bQh.prototype={
$1(d){return this.a.Mm(d)&&!d.x},
$S:z+0}
C.bQi.prototype={
$2(d,e){return Math.max(d,this.a.aCK(e))},
$S:z+6}
C.bQk.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bQl(w))},
$S:z+5}
C.bQl.prototype={
$0(){return this.a.a},
$S:86}
C.bQj.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bQm.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bQn(w))},
$S:z+5}
C.bQn.prototype={
$0(){return this.a.a},
$S:86}
C.bQ7.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bQ8(w))},
$S:z+5}
C.bQ8.prototype={
$0(){return this.a.a},
$S:86}
C.bQ6.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bQ9.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bQa(w))},
$S:z+5}
C.bQa.prototype={
$0(){return this.a.a},
$S:86}
C.bQ4.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bQo.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bQc.prototype={
$1(d){return d!==this.b&&this.a.aJ3(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bQf.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bQe.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bQd.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bKs.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bKt.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cu2.prototype={
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
$S:205}
C.fWR.prototype={
$1(d){var w
$.S()
w=B.K()
w.r=d.gp(0)
return w},
$S:1915}
C.fWT.prototype={
$2(d,e){var w
$.S()
w=B.K()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.bu
return w},
$S:1916}
C.fWU.prototype={
$5(d,e,f,g,h){return B.bn(new B.a1(d,e,d+f,e+g),new B.aN(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1917}
C.fWS.prototype={
$3(d,e,f){var w
$.S()
w=B.K()
w.sav(new B.a8(A.b0,A.b7,A.x,B.a([e,f],x.O),null,null).aK(0,d))
return w},
$S:1918}
C.bK6.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bK7.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bK5(w))},
$S:0}
C.bK5.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bK8.prototype={
$0(){return B.a([],x.C)},
$S:1919}
C.bK9.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:376}
C.bKa.prototype={
$0(){var w,v,u
J.bHe(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.tR(v))if(C.hg9(v.b))w.b3l(v)
else w.a0D(v)
else{u=w.a.c.bgd(v)
w.afj(u==null?"The "+$.qF().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bK4.prototype={
$1(d){return new B.dY(new C.bK1(this.a,this.b),null)},
$S:20}
C.bK1.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bK2(this.a,o,a3),m=$.qF(),l=o.b,k=m.h(0,l).d,j=A.j.V(o.ch/1.04),i=new C.bK3(o,n,k),h=B.m(26),g=B.L(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ab(0,A.G,k.j(0.25),A.J,26)],f),d=B.q(p,p,A.f,p,p,new B.o(A.aT,p,p,B.m(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.L(k,A.r,1)
a1=B.q(p,B.as(B.d(m.h(0,l).c,p,p,p,p,p,p,A.pX,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jP,p,p,p),D.fPr],a0),A.E,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.m(14)
t=B.L(k,A.r,1)
u=B.A(B.a([a1,A.bc,w,B.q(p,B.d(""+A.j.V(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.n),p,p,p,p,A.md,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
t=A.w.j(0.35)
v=B.m(18)
w=B.L(A.dr,A.r,1)
a1=30+28*o.ch
s=B.m(8)
r=B.a([k.j(0.85),A.as],x.O)
q=B.L(A.aD,A.r,2)
f=B.a([new B.ab(0,A.G,k.j(0.5),A.J,14)],f)
v=B.q(p,B.as(B.cT(p,B.as(B.ev(A.A,new B.D(A.hN,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mC,p,p,p),p),A.f,A.dE),p,p,p),p,p,A.b_,new B.o(p,p,q,s,f,new B.a8(A.aA,A.aE,A.x,r,p,p),A.n),A.eG,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.i,0,p,p)
w=B.aI(p,p,p,p,B.X(A.aqr,k,p,p,p,30),p,p,p,new C.bJY(n,o),p,p,p,p,p,p)
t=B.abp(a2).bfH(k,A.by,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Z0(B.kZ(p,p,p,5.2,1,n,A.j.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.X(A.a2B,k,p,p,p,30),p,p,p,new C.bJZ(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
return B.bm(!0,B.q(p,B.x(B.a([d,A.ae,u,A.aB,v,A.ae,i,A.av,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.hs,p,p,p),1),B.bP(!1,A_.aXp,p,p,!0,p,p,p,new C.bK_(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.t_,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.i,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.caO,A.n),p,p,p,A.yF,D.bEH,p,p,p),!0,!1,A.ag,!0,!0)},
$S:90}
C.bK2.prototype={
$1(d){var w=this.a
w.m(new C.bJW(this.b,d))
this.c.$1(new C.bJX())
w.a.toString},
$S:6}
C.bJW.prototype={
$0(){return this.a.ch=A.j.D(this.b,1,5.2)},
$S:0}
C.bJX.prototype={
$0(){},
$S:0}
C.bK3.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.m(14),r=u?w.c:A.by
r=B.L(r,A.r,u?2:1)
return B.E(B.az(v,B.cT(v,B.as(B.ev(A.A,B.d(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.f,A.e7),v,v,v),v,v,A.b_,new B.o(t,v,r,s,v,v,A.n),A.h4,v,v,v,A.jr,A.qC,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bK0(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:678}
C.bK0.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJY.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bJZ.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bK_.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.bKp.prototype={
$2(d,e){var w
if(d==="short"){G.dE(1800,"",120,0,0.55,"noise")
G.dE(200,"",160,2.2,0.4,"saw")
B.fM()
w=this.a
if(w.c!=null)w.afj("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dE(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.afj("\u26a0 Overloaded! The "+$.qF().h(0,e.b).b+" can only give about "+A.j.ad(w.a.c.Ak(e),2)+" amps but your gadgets are asking for "+A.j.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.afj("Burnt out! "+e.ay)
G.dE(140,"",320,0,0.6,"noise")
G.dE(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bKq.prototype={
$0(){},
$S:0}
C.bJz.prototype={
$0(){},
$S:0}
C.bKr.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bKo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.az(A.c3,B.b2(p,p,p,new C.ak7(w,v,u,t,s,r==null?A.jt:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKi(o),new C.bKj(o),new C.bKk(o),p,p,p,p,p,p,p,p,p,p,new C.bKl(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bd2)
w=o.Q
if(w!=null){v=B.m(14)
u=B.L(A.cI,A.r,1)
n.push(B.ap(p,B.az(p,B.q(p,B.A(B.a([D.fFx,B.E(B.d(w,p,p,p,p,p,p,D.fx8,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(D.bj2,p,u,v,p,p,A.n),p,p,p,p,A.nH,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKm(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b1d(B.A(B.a([D.bKo,new E.fC(A.CS,"Cut wire",new C.bKn(o),A.bZ,p)],q),A.l,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.cmh(w),p,p,10,10,p,p))}return B.jn(new B.an(A.a0,p,A.b2,A.t,n,p),A.t,p)},
$S:326}
C.bKj.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bap(s)
if(r!=null){t.m(new C.bKg(t,r,d))
return}w=t.b41(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.p(v*u.a,w.d*u.b).aJ(0,s)
t.m(new C.bKh(t,w))}},
$S:48}
C.bKg.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bKh.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bKk.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bKe(w,d))
else if(w.w!=null)w.m(new C.bKf(w,d.b.a2(0,w.x)))},
$S:19}
C.bKe.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bKf.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.j.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.j.D(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bKi.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.bap(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.am6(u.a,u.b,v.a,v.b)!=null)G.dE(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.afh()},
$S:38}
C.bKl.prototype={
$1(d){var w=this.a,v=d.b,u=w.b41(v)
if(u!=null){w.m(new C.bKc(w,u))
if(D.mt.am(0,u.b))w.cwU(u)
w.a.toString
return}w.m(new C.bKd(w,w.cJL(v)))},
$S:65}
C.bKc.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dE(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dE(200,"",70,0,0.2,"saw")}},
$S:0}
C.bKd.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bKm.prototype={
$0(){var w=this.a
return w.m(new C.bKb(w))},
$S:0}
C.bKb.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bKn.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
G.dE(300,"",50,0,0.35,"noise")
w.afh()},
$S:0}
C.bJA.prototype={
$0(){return this.a.bsF(this.b)},
$S:0}
C.bJT.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fr8,w,w,w),B.E(B.kZ(this.b.d,w,w,g,h,new C.bJV(this.a,f),A.j.D(e,h,g)),1)],x.p),A.l,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1920}
C.bJV.prototype={
$1(d){var w=this.a
w.m(new C.bJU(this.b,d))
w.a.toString},
$S:6}
C.bJU.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJG.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
G.dE(260,"",70,0,0.35,"noise")
w.afh()},
$S:0}
C.bJH.prototype={
$0(){var w=this.a
return w.m(new C.bJF(w))},
$S:0}
C.bJF.prototype={
$0(){return this.a.d=null},
$S:0}
C.bJI.prototype={
$0(){this.a.m(new C.bJE(this.b,this.c))
G.dE(900,"",40,0,0.3,"noise")},
$S:0}
C.bJE.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bJL.prototype={
$0(){return this.a.b3l(this.b)},
$S:0}
C.bJM.prototype={
$0(){return this.a.a0D(this.b)},
$S:0}
C.bJN.prototype={
$0(){return this.a.a2g(this.b)},
$S:0}
C.bJO.prototype={
$0(){var w=this.a
w.m(new C.bJD(this.b,this.c))
w.a.toString},
$S:0}
C.bJD.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bJP.prototype={
$0(){var w=this.a
w.m(new C.bJC(this.b,this.c))
w.a.toString},
$S:0}
C.bJC.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bJQ.prototype={
$0(){var w=this.a
w.m(new C.bJB(this.b,this.c))
w.a.toString},
$S:0}
C.bJB.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bJR.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJS.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJJ.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJK.prototype={
$1(d){return this.a.f=d},
$S:6}
C.ft1.prototype={
$1(d){return d.aIF("bulb")},
$S:z+2}
C.ft2.prototype={
$1(d){return d.qe(0,"switch")&&d.aIF("bulb")},
$S:z+2}
C.ft3.prototype={
$1(d){return A.d.aV(d.a,new C.fsP())},
$S:z+2}
C.fsP.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.ft4.prototype={
$1(d){return d.qe(0,"resistor")&&A.d.aV(d.a,new C.fsO())},
$S:z+2}
C.fsO.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.ft5.prototype={
$1(d){return!d.qe(0,"battery")&&d.aIF("bulb")},
$S:z+2}
C.fsT.prototype={
$1(d){return A.d.aV(d.a,new C.fsN())},
$S:z+2}
C.fsN.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fsU.prototype={
$1(d){return A.d.aV(d.a,new C.fsM())},
$S:z+2}
C.fsM.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fsV.prototype={
$1(d){return A.d.aV(d.a,new C.fsL())},
$S:z+2}
C.fsL.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fsW.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.fsJ())&&A.d.aV(w,new C.fsK())&&d.qe(0,"buck")},
$S:z+2}
C.fsJ.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fsK.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fsX.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.fsH())&&A.d.aV(w,new C.fsI())},
$S:z+2}
C.fsH.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fsI.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fsY.prototype={
$1(d){return A.d.aV(d.a,new C.fsG())},
$S:z+2}
C.fsG.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e1m.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.u(0,v.b)},
$S:0}
C.e1v.prototype={
$1(d){var w=this.a.d
return w.aJ3(d)&&w.tR(d)},
$S:z+0}
C.e1w.prototype={
$1(d){return d.x},
$S:z+0}
C.e1x.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e1y.prototype={
$0(){},
$S:0}
C.e1l.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fXg,A.av,D.fHo,A.W],o)
for(w=this.a,v=0;v<19;++v){u=D.S2[v]
t=A.c.j(0.06)
s=new B.aN(14,14)
r=new B.ay(A.by,1,A.r,-1)
n.push(B.az(q,B.q(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iG,q,q,q),A.bG,B.d(u.b,q,3,A.a2,q,q,q,D.fxT,q,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(t,q,new B.bG(r,r,r,r),new B.be(s,s,s,s),q,q,A.n),q,q,q,A.cy,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e1k(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eJ(q,F.mU,new B.D(A.bS,new B.a5(340,q,B.cl(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.da,q,new B.b9(p,A.a1),q)},
$S:47}
C.e1k.prototype={
$0(){B.a6(this.b,!1).O(null)
var w=this.a
w.m(new C.e1j(w,this.c))
G.dE(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e1j.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bll()},
$S:0}
C.e1h.prototype={
$1(d){return new C.WQ(this.a.d,null)},
$S:z+44}
C.e1i.prototype={
$0(){},
$S:0}
C.e1u.prototype={
$1(d){return new B.dY(new C.e1t(this.a),null)},
$S:20}
C.e1t.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ajd(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.b4:A.aG
k=B.aF(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fUp,A.b1,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.i,0,m,m),A.T,B.bx(B.m(4),B.kr(A.by,m,m,5,m,w.a/11,new B.lO(f,x.c)),A.aq),A.ae],v)
if(h)u.push(D.fKA)
else{h=f.j(0.1)
t=B.m(14)
s=B.L(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.KK,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.EQ,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.x(B.a([r,A.av,q,new B.bL(A.aa,m,m,B.bP(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e1r(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bh,m,m,m))}u.push(A.W)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aN(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dr,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.abn,m,m,m)
r=j[o]
q=w.q(0,o)?A.aD:A.c
u.push(B.az(m,B.q(m,new B.c8(A.aL,A.e,A.i,A.l,m,A.p,m,0,B.a([s,A.au,new B.bz(1,A.bb,B.d(r.a,m,m,m,m,m,m,new B.F(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bG(n,n,n,n),new B.be(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.nH,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e1s(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,k.a.b*0.75),B.cl(u,m,m,A1.yO,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:90}
C.e1r.prototype={
$0(){var w=this.a
w.m(new C.e1p(w))
this.b.$1(new C.e1q())
w.Fx()},
$S:0}
C.e1p.prototype={
$0(){var w=this.a
$.ajd()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e1q.prototype={
$0(){},
$S:0}
C.e1s.prototype={
$0(){var w=this.a
w.m(new C.e1n(w,this.b))
this.c.$1(new C.e1o())
w.Fx()},
$S:0}
C.e1n.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e1o.prototype={
$0(){},
$S:0}
C.e1A.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.e1B.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.md("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).ce(B.ec(new C.e1z(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e1z.prototype={
$1(d){B.lm("construction")
return Al.hVe()},
$S:z+45}
C.e1C.prototype={
$0(){return E.hGE(this.a,"ELECTRONICS LAB",this.b,A.aG)},
$S:0}
C.e1D.prototype={
$0(){var w=this.a
return w.m(w.d.gd0B())},
$S:0}
C.e1E.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gth(v))
w.Fx()},
$S:0}
C.cLC.prototype={
$2(d,e){var w=null,v=this.a.gaza().x
v===$&&B.c()
return B.b2(w,w,w,new C.bbo(v,w),A.az)},
$S:56}
C.cLB.prototype={
$3(d,e,f){var w=new B.aG($.S().r,A.ai,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.c7(v,u,v+e,u))
w.E(new B.c7(v,u,v,u+e))
w.E(new B.c7(v,u,v-e,u))
w.E(new B.c7(v,u,v,t))
w.E(new B.bv())
t=B.K()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:455}
C.h0S.prototype={
$3(d,e,f){return new C.W7(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h0T.prototype={
$4(d,e,f,g){var w=x.a
return new B.d2(e,!1,B.ig(A.A,g,null,new B.bg(B.cG(A.cw,e,null),new B.br(0.85,1,w),w.k("bg<bQ.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dYw.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.dYv.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c1V(o):q.bF1(o,p),m=x.p
p=B.a([B.oz(new B.mq(n,new B.bu(p,x.bz)),A.pl,B.pU(),A.b_,A.b_,new C.dYt())],m)
n=t.d
if(n){w=A.j.F(q.gSF(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.au],m)
if(w)m.push(D.bKa)
else m.push(A.b1)
m.push(B.q(s,s,A.f,s,s,new B.o(w?A.b4:A.as,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.au)
p.push(B.ap(s,B.as(B.cT(s,B.A(m,A.l,s,A.e,A.i,0,s,s),s,s,A.e2,new B.o(A.w,s,s,u,s,s,A.n),A.mY,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.AC)p.push(B.ap(s,B.as(B.q(s,s,A.f,s,s,A.LX,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Ey)p.push(B.ap(s,B.q(s,s,A.f,s,s,A.LX,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.az(s,B.as(B.q(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dYu(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a0,s,A.b2,A.t,p,s),A.aq)},
$S:302}
C.dYt.prototype={
$2(d,e){var w=x.a
return new B.d2(e,!1,B.ig(A.A,d,null,new B.bg(e,new B.br(0.92,1,w),w.k("bg<bQ.T>"))),null)},
$S:386}
C.dYu.prototype={
$0(){var w=this.a
return w.m(new C.dYs(w))},
$S:0}
C.dYs.prototype={
$0(){return this.a.e=null},
$S:0}
C.dYr.prototype={
$0(){var w=this.a
return w.m(new C.dYq(w,this.b))},
$S:0}
C.dYq.prototype={
$0(){return this.a.e=A.d.co(F.kB,this.b)},
$S:0}
C.dYp.prototype={
$0(){var w=this.a
return w.m(new C.dYo(w))},
$S:0}
C.dYo.prototype={
$0(){return this.a.e=0},
$S:0}
C.dYk.prototype={
$0(){var w=this.a
return w.m(new C.dYj(w))},
$S:0}
C.dYj.prototype={
$0(){return this.a.e=null},
$S:0}
C.dYn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.q(p,B.A(B.a([D.h23,A.au,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eR,p,p,p,A.abG,p,p,p),1),B.d(A.a.b_(A.o.v(B.df(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b_(A.o.v(B.fQ(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.rc,p,p,p)],l),A.l,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.kz,p,p,p)
w=this.a
v=B.a([B.b2(p,p,p,new C.by4(w.gSF(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.L(A.aT,A.r,1)
s=B.m(10)
o=B.q(p,B.A(B.a([B.az(p,B.q(p,p,A.f,p,p,A.aeH,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dYm(w),p,p,p,p,p,p,!1,A.a4),A.e8,B.q(p,p,A.f,p,p,A.XL,p,12,p,p,p,p,p,12),A.e8,B.q(p,p,A.f,p,p,D.b88,p,12,p,p,p,p,p,12),A.au,B.E(B.d(F.kB[o].a,p,1,A.a2,p,p,p,A.abh,p,p,p),1)],l),A.l,p,A.e,A.i,0,p,p),A.f,A.cl,p,p,p,24,p,p,A.fK,p,p,p)
r=w.e
r.toString
v.push(B.bS(0,new B.D(D.bGE,B.q(p,B.bx(s,B.x(B.a([o,B.E(B.b2(p,p,p,new C.afX(r,w.gSF(),p),A.fQ),1)],l),A.l,p,A.e,A.i,0,A.p),A.aq),A.f,p,p,new B.o(A.w,p,t,u,D.dwu,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.L(A.aT,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jr,w.ax2(F.kB[q],34,!1),p))
v.push(B.ap(8,B.as(B.q(p,B.A(s,A.l,p,A.e,A.P,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lM,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.q(p,B.x(B.a([m,B.E(new B.an(A.a0,p,A.b2,A.t,v,p),1)],l),A.l,p,A.e,A.i,0,A.p),A.f,X.ZS,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:302}
C.dYm.prototype={
$0(){var w=this.a
return w.m(new C.dYl(w))},
$S:0}
C.dYl.prototype={
$0(){return this.a.e=null},
$S:0}
C.ftw.prototype={
$0(){return D.eja},
$S:z+47}
C.ftx.prototype={
$0(){return D.dRi},
$S:z+48}
C.fty.prototype={
$0(){return D.dNO},
$S:z+49}
C.ftz.prototype={
$0(){return D.dQG},
$S:z+50}
C.ftA.prototype={
$0(){return D.dVO},
$S:z+51}
C.ftB.prototype={
$0(){return D.eeX},
$S:z+52}
C.ftC.prototype={
$0(){return D.eh6},
$S:z+53}
C.ftD.prototype={
$0(){return D.dV7},
$S:z+36}
C.cmV.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.cmW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hKt(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aN(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ab(0,A.G,p.j(0.4),A.dp,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Ak.KI,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fCV,k,k,k)
l=A.c.j(0.85)
h.push(B.az(k,B.q(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cK(k,-6,-6,k,k,k,n,k),new B.bL(A.lz,k,k,B.x(B.a([m,A.cT,B.d(r.b,k,k,k,k,k,k,new B.F(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.be(q,q,q,q),p,new B.a8(A.aA,A.aE,A.x,o,k,k),A.n),k,v,k,k,A.bI,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cmU(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bW(A.bH,h,A.bs,k,14,14)},
$S:168}
C.cmU.prototype={
$0(){return B.a6(this.a,!1).ce(B.ec(new C.cmT(this.b),!1,null,x.H))},
$S:0}
C.cmT.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eUX.prototype={
$0(){var w=this.a
return w.w=w.d[w.b7q(w.f)]},
$S:0}
C.eUT.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cQ.ai()*7},
$S:0}
C.eUS.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cf)
w.w=""},
$S:0}
C.eUV.prototype={
$0(){var w=this.a
return w.m(new C.eUU(w,this.b))},
$S:0}
C.eUU.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cH(w,this.b)},
$S:0}
C.eUW.prototype={
$1(d){return this.a.b1K(0)},
$S:2}
C.e4l.prototype={
$0(){return C.JQ("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e4m.prototype={
$0(){},
$S:0}
C.e4g.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e4i.prototype={
$0(){return this.a.b1M(this.b)},
$S:0}
C.e4j.prototype={
$0(){var w=this.a
return w.m(new C.e4h(w))},
$S:0}
C.e4h.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e4k.prototype={
$0(){var w=this.a
return w.b1M(w.d)},
$S:0}
C.dPO.prototype={
$2(d,e){return d+e},
$S:81}
C.dPP.prototype={
$0(){},
$S:0}
C.dPJ.prototype={
$2(d,e){return d+e},
$S:81}
C.dPM.prototype={
$0(){var w=this.a
return w.m(new C.dPL(w,this.b))},
$S:0}
C.dPL.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dPN.prototype={
$0(){var w=this.a
return w.m(new C.dPK(w))},
$S:0}
C.dPK.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e0R.prototype={
$0(){return E.uH(this.b,this.a.d,"drawing")},
$S:0}
C.e0S.prototype={
$1(d){var w=this.a
return w.m(new C.e0Q(w,d))},
$S:48}
C.e0Q.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKa(u,v,t))},
$S:0}
C.e0T.prototype={
$1(d){var w=this.a
return w.m(new C.e0P(w,d))},
$S:19}
C.e0P.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e0U.prototype={
$1(d){var w=this.a
return w.m(new C.e0O(w,d))},
$S:22}
C.e0O.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKa(u,v,t))},
$S:0}
C.e0V.prototype={
$0(){var w=this.a
return w.m(new C.e0N(w,this.b))},
$S:0}
C.e0N.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e0W.prototype={
$1(d){var w=this.a
return w.m(new C.e0M(w,d))},
$S:6}
C.e0M.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e0X.prototype={
$0(){var w=this.a
return w.m(new C.e0L(w))},
$S:0}
C.e0L.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e0Y.prototype={
$0(){var w=this.a
return w.m(new C.e0K(w))},
$S:0}
C.e0K.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e0Z.prototype={
$0(){var w=this.a
return w.m(A.d.gth(w.e))},
$S:0}
C.e1_.prototype={
$0(){var w=this.a
return w.m(new C.e0J(w))},
$S:0}
C.e0J.prototype={
$0(){var w=this.a
w.x=D.aAG[A.o.F(A.d.co(D.aAG,w.x)+1,4)]},
$S:0}
C.erM.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.erN.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JQ("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.erL(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JQ("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
C.erL.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.erO.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.erK(w))},
$S:11}
C.erK.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.erS.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.az(w,B.lC(new C.erQ(v,e),w,A.b_,A.pl,w,w,new B.br(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erR(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.erR.prototype={
$0(){return this.a.cdC(this.b)},
$S:0}
C.erQ.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fL(3.141592653589793*e)
m=B.m(16)
w=o?p:D.ca_
if(o)v=q.a.r.q(0,q.b)?A.b4.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.L(u.r.q(0,t)?A.b4:A.aT,A.r,1)
if(o){r=B.dr()
r.fL(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fz(A.A,B.d(u[t],p,p,p,p,p,p,H.abr,p,p,p),p,r,!0)
u=r}else u=D.fVW
return B.fz(A.A,B.q(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:114}
C.erT.prototype={
$0(){var w=this.a
return w.m(new C.erP(w,this.b))},
$S:0}
C.erP.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aun()},
$S:0}
C.erU.prototype={
$0(){var w=this.a
return w.m(w.gbNN())},
$S:0}
C.eCy.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eCz.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eCw.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eCx.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eCv(w))},
$S:11}
C.eCv.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eCA.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eCB.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eCC.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b1L()},
$S:11}
C.eCD.prototype={
$0(){return this.a.cdI(this.b)},
$S:0}
C.eQq.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:63}
C.eQz.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.ky,B.A(B.a([v,A.af,new B.dm(1,A.cp,B.ev(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e7),w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1921}
C.eQv.prototype={
$1(d){return this.a.m(new C.eQu())},
$S:2}
C.eQu.prototype={
$0(){},
$S:0}
C.eQw.prototype={
$0(){var w=this.a
return w.m(new C.eQt(w,this.b))},
$S:0}
C.eQt.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eQx.prototype={
$1(d){var w=this.a
return w.m(new C.eQs(w,d))},
$S:6}
C.eQs.prototype={
$0(){return this.a.f=A.j.V(this.b)},
$S:0}
C.eQy.prototype={
$0(){var w=this.a
return w.m(new C.eQr(w))},
$S:0}
C.eQr.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eqr.prototype={
$0(){},
$S:0}
C.eqs.prototype={
$0(){},
$S:0}
C.eqk.prototype={
$0(){var w=this.a
return w.m(new C.eqj(w))},
$S:0}
C.eqj.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c0(u,1,!1,x.S)
w.r=0.9
E.XC("hat",0,0.6)},
$S:0}
C.eql.prototype={
$0(){var w=this.a
return w.m(new C.eqi(w))},
$S:0}
C.eqi.prototype={
$0(){this.a.y=1.1
E.mv("bell",36,200,0.4)},
$S:0}
C.eqm.prototype={
$0(){var w=this.a
return w.m(new C.eqh(w))},
$S:0}
C.eqh.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.az(Math.max(v,u)-t+1)
w.as=u
E.mv("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.eqn.prototype={
$0(){var w=this.a
return w.m(new C.eqg(w,this.b))},
$S:0}
C.eqg.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.eqo.prototype={
$1(d){var w=this.a
return w.m(new C.eqf(w,d))},
$S:6}
C.eqf.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.j.V(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.eqp.prototype={
$1(d){var w=this.a
return w.m(new C.eqe(w,d))},
$S:6}
C.eqe.prototype={
$0(){return this.a.z=A.j.V(this.b)},
$S:0}
C.eqq.prototype={
$1(d){var w=this.a
return w.m(new C.eqd(w,d))},
$S:6}
C.eqd.prototype={
$0(){return this.a.Q=A.j.V(this.b)},
$S:0}
C.cmR.prototype={
$0(){var w=this
return E.mv(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aOg.prototype
w.bzY=w.t
w=C.aNj.prototype
w.byZ=w.t
w=C.aNk.prototype
w.bz_=w.t
w=C.aNo.prototype
w.bz3=w.t
w=C.aP5.prototype
w.bAU=w.t
w=C.aOe.prototype
w.bzW=w.t
w=C.azC.prototype
w.bw_=w.t
w=C.azD.prototype
w.bw0=w.t
w=C.aLL.prototype
w.bxm=w.t
w=C.aNz.prototype
w.bze=w.t
w=C.aNl.prototype
w.bz0=w.t
w=C.aNG.prototype
w.bzm=w.t
w=C.aO8.prototype
w.bzQ=w.t
w=C.aOz.prototype
w.bAg=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aGh.prototype,"gayx","c93",1)
v(C,"ir6","c6K",3)
var q
u(q=C.aEL.prototype,"gchX","chY",22)
w(q,"gc9D","b0l",1)
w(C.aEN.prototype,"gcbl","cbm",1)
t(C.aF3.prototype,"gcbs","cbt",39)
w(q=C.aJj.prototype,"gcBs","cBt",1)
w(q,"gcbu","af7",1)
w(q,"gcms","cmt",1)
w(q,"gcbr","af6",3)
w(q=C.aGg.prototype,"gbKU","aau",3)
w(q,"gclI","b3S",1)
w(q,"gcpv","ahI",3)
s(q,"gcbw","af8",3)
s(q=C.a5D.prototype,"gth","a8",1)
u(q,"gcZf","aoS",0)
u(q,"gcVD","Mm",0)
w(q,"gd0B","bll",1)
r(C.ak7.prototype,"gcbT",0,5,null,["$5"],["qU"],41,0,0)
w(q=C.aFf.prototype,"gcbU","cbV",1)
w(q,"gcsk","ai3",3)
w(q,"gcie","ago",3)
w(q,"gczt","ajd",3)
w(q=C.aGJ.prototype,"gcdD","cdE",1)
s(q,"gcdB","b1K",1)
w(C.aG2.prototype,"gbNN","aun",1)
s(C.aGn.prototype,"gcdF","cdG",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.alj,C.GY,C.vr,C.aUl,C.a4u,C.bcv,C.c6L,C.yL,C.D3,C.nL,C.bdg,C.Bb,C.bvx,C.qu,C.rb,C.D7,C.a_D,C.ag3,C.a1R,C.Di,C.acX,C.add,C.af9,C.GJ,C.eh,C.u0,C.abC,C.acJ,C.a5D,C.mY,C.bdh,C.fR,C.mx,C.bwR,C.aKa])
u(B.hv,[C.fKX,C.fzA,C.fHk,C.fHl,C.fKU,C.fKV,C.ejA,C.ejT,C.ezb,C.eyJ,C.eyK,C.eyL,C.eyM,C.eyN,C.eyO,C.eyP,C.eyQ,C.eyH,C.eyI,C.eyG,C.ez6,C.ez7,C.ez8,C.dPk,C.dPm,C.dPp,C.dPA,C.c6M,C.c6N,C.fsQ,C.fsR,C.fsS,C.fsZ,C.ft_,C.ft0,C.dRm,C.dR3,C.dRn,C.dQZ,C.dQU,C.dQW,C.dR1,C.dRe,C.dRc,C.dRd,C.dRb,C.dR8,C.dRa,C.f8C,C.f8j,C.f8q,C.f8z,C.f8d,C.drs,C.drt,C.drp,C.drq,C.drr,C.dru,C.drv,C.drw,C.drx,C.dry,C.drz,C.drA,C.drB,C.drC,C.ey7,C.ey8,C.ey9,C.eya,C.ey5,C.ey6,C.eyC,C.eye,C.eyg,C.ey0,C.eyy,C.eyw,C.eyx,C.eyv,C.eyu,C.ey2,C.bQ5,C.bQg,C.bQb,C.bQh,C.bQj,C.bQ6,C.bQ4,C.bQo,C.bQc,C.bQf,C.bQe,C.bQd,C.bKs,C.fWR,C.fWU,C.fWS,C.bK9,C.bK4,C.bK2,C.bKr,C.bKj,C.bKk,C.bKi,C.bKl,C.bJT,C.bJV,C.bJR,C.bJS,C.bJJ,C.bJK,C.ft1,C.ft2,C.ft3,C.fsP,C.ft4,C.fsO,C.ft5,C.fsT,C.fsN,C.fsU,C.fsM,C.fsV,C.fsL,C.fsW,C.fsJ,C.fsK,C.fsX,C.fsH,C.fsI,C.fsY,C.fsG,C.e1v,C.e1w,C.e1l,C.e1h,C.e1u,C.e1z,C.cLB,C.h0S,C.h0T,C.cmT,C.eUW,C.e0S,C.e0T,C.e0U,C.e0W,C.erQ,C.eQq,C.eQz,C.eQv,C.eQx,C.eqo,C.eqp,C.eqq])
u(B.jy,[C.fKW,C.ejF,C.ejD,C.eyS,C.ez4,C.dQV,C.dRh,C.dXA,C.f8F,C.f8G,C.f8i,C.f8v,C.f8w,C.f8r,C.f8x,C.f8c,C.ey3,C.ey4,C.eyB,C.eyt,C.eyi,C.bQi,C.bQk,C.bQm,C.bQ7,C.bQ9,C.bKt,C.cu2,C.fWT,C.bK1,C.bK3,C.bKp,C.bKo,C.e1t,C.cLC,C.dYv,C.dYt,C.dYn,C.cmW,C.dPO,C.dPJ,C.erS])
u(B.af,[C.WQ,C.Xc,C.VG,C.VN,C.Oi,C.aJi,C.Xb,C.ak5,C.Wo,C.azh,C.W7,C.XJ,C.Ww,C.VH,C.Wn,C.X6,C.Xg,C.XA,C.X5])
u(B.ah,[C.bmG,C.aOg,C.aNj,C.aNo,C.aF3,C.aP5,C.aOe,C.azC,C.bA2,C.aLL,C.aNz,C.aOz,C.aNG,C.aNl,C.bm7,C.aG2,C.aGn,C.bnn,C.aO8])
u(B.iK,[C.ejy,C.ejz,C.ejL,C.ejM,C.ejH,C.ejG,C.ejI,C.ejE,C.ejJ,C.ejC,C.ejK,C.ejB,C.ejP,C.ejO,C.ejQ,C.ejN,C.ejR,C.ejS,C.ejU,C.eza,C.ezc,C.ezd,C.eyU,C.eyT,C.eyR,C.ez_,C.ez0,C.eyX,C.ez1,C.eyW,C.ez2,C.ez3,C.eyV,C.ez5,C.eyZ,C.ez9,C.eyY,C.dPH,C.dPG,C.dPh,C.dPi,C.dPj,C.dPI,C.dPl,C.dPn,C.dPo,C.dPq,C.dPe,C.dPf,C.dPg,C.dPx,C.dPy,C.dPz,C.dPw,C.dPB,C.dPv,C.dPC,C.dPu,C.dPD,C.dPt,C.dPE,C.dPs,C.dPF,C.dPr,C.dR0,C.dR_,C.dR4,C.dQX,C.dQY,C.dR5,C.dR6,C.dR7,C.dR2,C.dQT,C.dRg,C.dRf,C.dRi,C.dRj,C.dRk,C.dR9,C.dRl,C.cWe,C.dXy,C.dXx,C.dXz,C.ftg,C.fth,C.fti,C.ftj,C.ftk,C.ftl,C.ftm,C.ftn,C.fto,C.f8E,C.f8D,C.f8l,C.f8k,C.f8g,C.f8f,C.f8h,C.f8e,C.f8t,C.f8s,C.f8u,C.f8m,C.f8y,C.f8p,C.f8A,C.f8o,C.f8B,C.f8n,C.eyc,C.ey1,C.eyb,C.exY,C.eyd,C.eyf,C.exZ,C.ey_,C.eyA,C.eyz,C.eyq,C.eyr,C.eys,C.eym,C.eyn,C.eyl,C.eyo,C.eyk,C.eyp,C.eyj,C.eyh,C.dro,C.bQl,C.bQn,C.bQ8,C.bQa,C.bK6,C.bK7,C.bK5,C.bK8,C.bKa,C.bJW,C.bJX,C.bK0,C.bJY,C.bJZ,C.bK_,C.bKq,C.bJz,C.bKg,C.bKh,C.bKe,C.bKf,C.bKc,C.bKd,C.bKm,C.bKb,C.bKn,C.bJA,C.bJU,C.bJG,C.bJH,C.bJF,C.bJI,C.bJE,C.bJL,C.bJM,C.bJN,C.bJO,C.bJD,C.bJP,C.bJC,C.bJQ,C.bJB,C.e1m,C.e1x,C.e1y,C.e1k,C.e1j,C.e1i,C.e1r,C.e1p,C.e1q,C.e1s,C.e1n,C.e1o,C.e1A,C.e1B,C.e1C,C.e1D,C.e1E,C.dYw,C.dYu,C.dYs,C.dYr,C.dYq,C.dYp,C.dYo,C.dYk,C.dYj,C.dYm,C.dYl,C.ftw,C.ftx,C.fty,C.ftz,C.ftA,C.ftB,C.ftC,C.ftD,C.cmV,C.cmU,C.eUX,C.eUT,C.eUS,C.eUV,C.eUU,C.e4l,C.e4m,C.e4g,C.e4i,C.e4j,C.e4h,C.e4k,C.dPP,C.dPM,C.dPL,C.dPN,C.dPK,C.e0R,C.e0Q,C.e0P,C.e0O,C.e0V,C.e0N,C.e0M,C.e0X,C.e0L,C.e0Y,C.e0K,C.e0Z,C.e1_,C.e0J,C.erM,C.erN,C.erL,C.erO,C.erK,C.erR,C.erT,C.erP,C.erU,C.eCy,C.eCz,C.eCw,C.eCx,C.eCv,C.eCA,C.eCB,C.eCC,C.eCD,C.eQu,C.eQw,C.eQt,C.eQs,C.eQy,C.eQr,C.eqr,C.eqs,C.eqk,C.eqj,C.eql,C.eqi,C.eqm,C.eqh,C.eqn,C.eqg,C.eqf,C.eqe,C.eqd,C.cmR])
t(C.bAf,C.aOg)
t(C.aGh,C.bAf)
u(B.mn,[C.bjz,C.bdz,C.buV,C.bcd,C.btw,C.bsW,C.bcU,C.bsY,C.bx0,C.bjx,C.ak7,C.bbo,C.by4,C.afX,C.byg,C.bsX,C.bo9])
t(C.aNk,C.aNj)
t(C.aEL,C.aNk)
t(C.bA_,C.aNo)
t(C.aEN,C.bA_)
u(B.lE,[C.Lk,C.a1E,C.Kj])
u(B.aw,[C.btV,C.agf,C.af6,C.Re,C.buq,C.a9A,C.bfH])
t(C.aJj,C.aP5)
t(C.bjw,B.pe)
t(C.aGg,C.aOe)
t(C.azD,C.azC)
t(C.ak6,C.azD)
t(C.aFf,C.bA2)
t(C.bbp,C.aLL)
t(C.bm5,C.aNz)
t(C.bAm,C.aOz)
t(C.aGJ,C.bAm)
t(C.bA4,C.aNG)
t(C.bmg,C.bA4)
t(C.bzZ,C.aNl)
t(C.blP,C.bzZ)
t(C.bAd,C.aO8)
t(C.bmS,C.bAd)
w(C.aOg,B.cd)
w(C.bAf,E.nJ)
w(C.aNj,B.cd)
w(C.aNk,E.nJ)
w(C.aNo,B.cd)
w(C.bA_,E.nJ)
w(C.aP5,B.eN)
w(C.aOe,B.cd)
w(C.azC,B.cd)
w(C.azD,E.nJ)
w(C.aLL,B.cd)
v(C.bA2,B.eC)
w(C.aNz,B.cd)
w(C.aNl,B.cd)
w(C.bzZ,E.nJ)
w(C.aNG,B.cd)
w(C.bA4,E.nJ)
w(C.aO8,B.cd)
w(C.bAd,E.nJ)
w(C.aOz,B.cd)
w(C.bAm,E.nJ)})()
B.iU(b.typeUniverse,JSON.parse('{"WQ":{"af":[],"v":[]},"bmG":{"ah":["WQ"]},"Xc":{"af":[],"v":[]},"aGh":{"ah":["Xc"]},"bjz":{"aC":[]},"VG":{"af":[],"v":[]},"aEL":{"ah":["VG"]},"VN":{"af":[],"v":[]},"aEN":{"ah":["VN"]},"bdz":{"aC":[]},"agf":{"aw":[],"v":[]},"af6":{"aw":[],"v":[]},"aJi":{"af":[],"v":[]},"Oi":{"af":[],"v":[]},"aF3":{"ah":["Oi"]},"btV":{"aw":[],"v":[]},"Re":{"aw":[],"v":[]},"buV":{"aC":[]},"buq":{"aw":[],"v":[]},"bcd":{"aC":[]},"aJj":{"ah":["aJi"]},"btw":{"aC":[]},"bsW":{"aC":[]},"bcU":{"aC":[]},"bsY":{"aC":[]},"bx0":{"aC":[]},"Xb":{"af":[],"v":[]},"bjw":{"aC":[]},"aGg":{"ah":["Xb"]},"bjx":{"aC":[]},"ak7":{"aC":[]},"ak5":{"af":[],"v":[]},"ak6":{"ah":["ak5"]},"Wo":{"af":[],"v":[]},"azh":{"af":[],"v":[]},"aFf":{"ah":["Wo"],"eC":[]},"bbp":{"ah":["azh"]},"bbo":{"aC":[]},"W7":{"af":[],"v":[]},"bm5":{"ah":["W7"]},"by4":{"aC":[]},"afX":{"aC":[]},"a9A":{"aw":[],"v":[]},"XJ":{"af":[],"v":[]},"Ww":{"af":[],"v":[]},"VH":{"af":[],"v":[]},"Wn":{"af":[],"v":[]},"X6":{"af":[],"v":[]},"Xg":{"af":[],"v":[]},"XA":{"af":[],"v":[]},"X5":{"af":[],"v":[]},"aGJ":{"ah":["XJ"]},"byg":{"aC":[]},"bmg":{"ah":["Ww"]},"bsX":{"aC":[]},"blP":{"ah":["VH"]},"bm7":{"ah":["Wn"]},"bo9":{"aC":[]},"aG2":{"ah":["X6"]},"aGn":{"ah":["Xg"]},"bnn":{"ah":["XA"]},"bmS":{"ah":["X5"]},"bfH":{"aw":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.at
return{c:w("lO<u?>"),G:w("u"),J:w("bt<n,G>"),Q:w("de<n>"),Z:w("a_"),M:w("O<da>"),R:w("O<T2>"),h:w("O<a4u>"),V:w("O<ab>"),O:w("O<u>"),C:w("O<V>"),D:w("O<aB<aE>>"),w:w("O<a_>"),E:w("O<ai<n>>"),b:w("O<ai<G>>"),U:w("O<ai<H?>>"),x:w("O<a9<n,aE>>"),g:w("O<p>"),F:w("O<u0>"),v:w("O<fU>"),eZ:w("O<+(n,n)>"),fT:w("O<+(G,v)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),r:w("O<+(n,n,a_)>"),e:w("O<+(n,G,G,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,G,G,a9<n,G>)>"),_:w("O<vr>"),fQ:w("O<abC>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<Gi>"),p:w("O<v>"),bL:w("O<acJ>"),fH:w("O<lk>"),a_:w("O<acX>"),cB:w("O<nL>"),ba:w("O<add>"),eW:w("O<D7>"),fY:w("O<a_D>"),ac:w("O<af9>"),cd:w("O<Di>"),fr:w("O<ag3>"),e4:w("O<a1R>"),au:w("O<aKa>"),f7:w("O<Q>"),n:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<u0?>"),bN:w("O<H?>"),q:w("cw<ak6>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("N<eh,n>"),fR:w("N<+(G,v),v>"),l:w("iC"),gA:w("zW"),gD:w("wr"),k:w("cu"),K:w("aE"),W:w("u0"),B:w("eh"),N:w("n"),bO:w("au"),a:w("br<G>"),Y:w("bu<n>"),bz:w("bu<H?>"),dg:w("ea<rb>"),m:w("bcv"),a2:w("D3"),f3:w("rb"),es:w("GJ"),gV:w("mC"),y:w("Q"),i:w("G"),z:w("@"),S:w("H"),L:w("ai<@>?"),cK:w("aE?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2S=new B.da(0,0.1)
D.b4M=new C.aUl(0,0,0)
D.LR=new C.aUl(0,0.5,0)
D.b5m=new B.ay(A.b4,1,A.r,-1)
D.b6P=new B.aY(0,1/0,0,290)
D.b6W=new B.aY(16,1/0,16,1/0)
D.boG=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dwH=w([D.boG,Am.aiU],x.O)
D.eAF=new B.bY(A.Fg,1.1,A.x,null,0,D.dwH,null,null)
D.b7c=new B.o(null,null,null,null,null,D.eAF,A.n)
D.b88=new B.o(A.bd,null,null,null,null,null,A.a6)
D.fqH=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3s=new B.B("\u26a1",null,D.fqH,null,null,null,null,null,null,null,null,null)
D.bcT=new B.ci(A.A,null,null,D.h3s,null)
D.aWh=new B.F(!0,A.bW,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTV=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aWh,null,A.K,null,null,null,null,null,null,null)
D.esQ=new B.D(A.nK,D.fTV,null)
D.bd2=new B.ci(A.A,null,null,D.esQ,null)
D.fJF=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aWh,null,A.K,null,null,null,null,null,null,null)
D.etH=new B.D(A.GY,D.fJF,null)
D.bdL=new B.ci(A.A,null,null,D.etH,null)
D.afI=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bhw=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bhN=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bj2=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bj9=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bjw=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.blr=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bmt=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bnc=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ai1=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.boc=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.aip=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Zq=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bq5=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bqm=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.aiY=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bs4=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bsc=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bsG=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.we=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.buO=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.akr=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bAz=new B.bd(11e6)
D.bCl=new B.R(10,34,10,26)
D.bCt=new B.R(10,6,10,2)
D.bCv=new B.R(10,8,0,10)
D.bDb=new B.R(12,8,8,8)
D.bDi=new B.R(14,0,14,22)
D.bDk=new B.R(14,0,14,30)
D.bEo=new B.R(16,4,16,28)
D.bEH=new B.R(18,10,18,16)
D.bGE=new B.R(26,12,26,58)
D.bHv=new B.R(4,4,8,2)
D.bI9=new B.R(8,14,8,12)
D.bIg=new B.R(8,40,8,30)
D.bIl=new B.R(8,6,8,8)
D.bIG=new B.R(0,0,1.5,0)
D.b4y=new B.HZ(26,"saturation")
D.bIZ=new B.uT(A.cz,D.b4y,null,A.Yh)
D.bJ_=new B.hn(A.G,11)
D.bJ3=new B.hn(A.G,30)
D.fII=new B.B("REACTION LAB",null,U.aWV,null,null,null,null,A.a2,null,1,null,null)
D.bJc=new B.bz(1,A.bb,D.fII,null)
D.fMO=new B.B("\ud83d\udce2 NGMY Ads",null,A.rc,null,null,null,null,A.eR,null,1,null,null)
D.bKa=new B.bz(1,A.bb,D.fMO,null)
D.fHp=new B.B("Wire selected",null,A.h2,null,null,null,null,null,null,null,null,null)
D.bKo=new B.bz(1,A.bb,D.fHp,null)
D.apo=new B.a_(62712,"MaterialIcons",!1)
D.bQw=new B.a_(62908,"MaterialIcons",!1)
D.bSe=new B.a_(983122,"MaterialIcons",!1)
D.bSr=new B.a_(983247,"MaterialIcons",!1)
D.bSY=new B.a_(983616,"MaterialIcons",!1)
D.bSd=new B.a_(983117,"MaterialIcons",!1)
D.bWG=new B.ae(D.bSd,28,A.c,null,null,null)
D.bWW=new B.ae(A.j9,18,null,null,null,null)
D.bYO=new B.ae(A.ek,21,A.bZ,null,null,null)
D.bZ5=new B.ae(A.oC,null,A.ab,null,null,null)
D.bZf=new B.ae(A.a3E,21,A.ab,null,null,null)
D.c_6=new B.ae(A.eM,17,A.ab,null,null,null)
D.c1T=new B.ae(A.j9,21,A.ab,null,null,null)
D.c3u=new B.ae(A.ed,null,A.aQ,null,null,null)
D.duj=w([A.db,A.d7,A.db],x.O)
D.c6S=new B.a8(A.a7,A.aa,A.x,D.duj,null,null)
D.d5F=w([A.bP,A.bj],x.O)
D.c7_=new B.a8(A.b0,A.b7,A.x,D.d5F,null,null)
D.c7d=new B.a8(A.b0,A.b7,A.x,A.a6g,null,null)
D.at8=new B.a8(A.b0,A.b7,A.x,P.a5u,null,null)
D.d3c=w([A.pa,A.iI],x.O)
D.c80=new B.a8(A.b0,A.b7,A.x,D.d3c,null,null)
D.d5o=w([A.cS,A.as],x.O)
D.atf=new B.a8(A.b0,A.b7,A.x,D.d5o,null,null)
D.do_=w([A.d1,A.j5,A.bj],x.O)
D.c8i=new B.a8(A.a7,A.aa,A.x,D.do_,null,null)
D.do5=w([A.cB,A.cl],x.O)
D.c8D=new B.a8(A.b0,A.b7,A.x,D.do5,null,null)
D.cCa=w([A.bP,A.d1],x.O)
D.c8N=new B.a8(A.a7,A.aa,A.x,D.cCa,null,null)
D.aDi=w([A.cS,M.nz],x.O)
D.c8V=new B.a8(A.b0,A.b7,A.x,D.aDi,null,null)
D.c9b=new B.a8(A.b0,A.b7,A.x,S.atA,null,null)
D.ca_=new B.a8(A.aA,A.aE,A.x,A.RQ,null,null)
D.dfh=w([A.as,A.w],x.O)
D.caa=new B.a8(A.b0,A.b7,A.x,D.dfh,null,null)
D.cad=new B.a8(A.b0,A.b7,A.x,H.aCA,null,null)
D.bsB=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bts=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cP8=w([A.Nk,D.bsB,D.bts],x.O)
D.cam=new B.a8(A.b0,A.b7,A.x,D.cP8,null,null)
D.cCu=w([A.d3,A.hc],x.O)
D.caB=new B.a8(A.b0,A.b7,A.x,D.cCu,null,null)
D.bw9=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cDf=w([F.afR,D.bw9],x.O)
D.caO=new B.a8(A.b0,A.b7,A.x,D.cDf,null,null)
D.cbn=w([0,4,7],x.t)
D.cbo=w([0,4,7,12],x.t)
D.cbp=w([0,4,7,4],x.t)
D.aCf=w([A.hw,A.qn],x.O)
D.aBL=w([A.hd,A.cJ],x.O)
D.aA4=w([A.bg,A.dP],x.O)
D.cXS=w([A.aQ,A.d3],x.O)
D.dpm=w([A.bT,A.kN],x.O)
D.azv=w([A.cI,A.kv],x.O)
D.d20=w([A.bN,A.aM],x.O)
D.cbM=w([D.aCf,D.aBL,A.a5z,D.aA4,D.cXS,A.aAk,A.aBf,D.dpm,D.azv,D.d20],B.at("O<ai<u>>"))
D.cgs=w([120,220,380],x.t)
D.ckc=w([12,16,19,24],x.t)
D.ckm=w([1400,800,450,2400],x.t)
D.csN=w([250,450,900,1500],x.t)
D.bgT=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bt0=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bqN=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bwJ=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bpT=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.ayK=w([D.bgT,D.bt0,D.bqN,D.bwJ,D.bpT],x.O)
D.cK0=w([50,25,75],x.t)
D.cPH=w([0,5,10,15,18,20,25],x.t)
D.cYa=w([900,500,250,1600],x.t)
D.d1j=w([A.bg,A.bE,A.b9,A.bg],x.O)
D.a5p=w([A.ay,A.bl,A.bd,A.aG,A.nt],x.O)
D.d2Q=w([A.as,A.ay,A.cI,A.bl,A.bd,A.cD,A.ci,A.bE,A.Yy],x.O)
D.a5s=w([0.04,0.17,0.3],x.n)
D.fa0=new C.vr("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fa6=new C.vr("Medium engine","A good all-rounder.",0.3,0.9)
D.fa5=new C.vr("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Iu=w([D.fa0,D.fa6,D.fa5],x._)
D.eGq=new B.y(6,"Easy")
D.eHb=new B.y(8,"Medium")
D.eC9=new B.y(10,"Hard")
D.d4q=w([D.eGq,D.eHb,D.eC9],x.I)
D.aAu=w([0.55,0.78,1],x.n)
D.aAG=w([A.c,A.fz,A.no,A.as],x.O)
D.aAO=w([A.bd,A.ay,A.bl,A.d7],x.O)
D.f9Y=new C.vr("Radar","Shows your height above the ground.",0.1,0)
D.f9Z=new C.vr("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f9W=new C.vr("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aAV=w([D.f9Y,D.f9Z,D.f9W],x._)
D.daD=w([47,100,220,470,1000],x.n)
D.Jz={volts:0}
D.a7g=new B.bt(D.Jz,[3],x.J)
D.K_=new B.dX(["b","battery",0.2,0.3,D.a7g])
D.emE={on:0}
D.dFj=new B.bt(D.emE,[1],x.J)
D.Ew=new B.dX(["s","switch",0.5,0.3,D.dFj])
D.f7F=new B.dX(["l","bulb",0.8,0.3,A.jt])
D.d5O=w([D.K_,D.Ew,D.f7F],x.d)
D.Eu=new B.co(["b",0,"s",0])
D.f6F=new B.co(["s",1,"l",0])
D.aRR=new B.co(["l",1,"b",1])
D.dob=w([D.Eu,D.f6F,D.aRR],x.o)
D.d5d=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eBk=new C.mY("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d5O,D.dob,D.d5d)
D.aLF={ohms:0}
D.aJh=new B.bt(D.aLF,[220],x.J)
D.f77=new B.dX(["r","resistor",0.5,0.3,D.aJh])
D.f7U=new B.dX(["d","led",0.8,0.3,A.jt])
D.drt=w([D.K_,D.f77,D.f7U],x.d)
D.f5Z=new B.co(["b",0,"r",0])
D.f6z=new B.co(["r",1,"d",0])
D.f65=new B.co(["d",1,"b",1])
D.dAY=w([D.f5Z,D.f6z,D.f65],x.o)
D.drW=w(["led","diode","indicator"],x.s)
D.eBr=new C.mY("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.drt,D.dAY,D.drW)
D.a8y={level:0}
D.dEG=new B.bt(D.a8y,[0.2],x.J)
D.f7d=new B.dX(["p","pot",0.5,0.3,D.dEG])
D.f7f=new B.dX(["m","motor",0.8,0.3,A.jt])
D.d67=w([D.K_,D.f7d,D.f7f],x.d)
D.f5Y=new B.co(["b",0,"p",0])
D.f6v=new B.co(["p",1,"m",0])
D.f6r=new B.co(["m",1,"b",1])
D.dwq=w([D.f5Y,D.f6v,D.f6r],x.o)
D.dnT=w(["fan","motor","spin","dimmer"],x.s)
D.eBi=new C.mY("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d67,D.dwq,D.dnT)
D.a7d=new B.bt(D.a8y,[0.9],x.J)
D.aS_=new B.dX(["s","solar",0.25,0.3,D.a7d])
D.aRZ=new B.dX(["l","bulb",0.75,0.3,A.jt])
D.d8Z=w([D.aS_,D.aRZ],x.d)
D.f6C=new B.co(["s",0,"l",0])
D.f6p=new B.co(["l",1,"s",1])
D.d6W=w([D.f6C,D.f6p],x.o)
D.dx9=w(["solar","sun","without battery","no battery","free"],x.s)
D.eBl=new C.mY("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d8Z,D.d6W,D.dx9)
D.f7X=new B.dX(["c","crank",0.25,0.3,D.a7d])
D.dm3=w([D.f7X,D.aRZ],x.d)
D.f61=new B.co(["c",0,"l",0])
D.f6o=new B.co(["l",1,"c",1])
D.dmG=w([D.f61,D.f6o],x.o)
D.dmd=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eBh=new C.mY("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dm3,D.dmG,D.dmd)
D.dEF=new B.bt(D.a8y,[0.7],x.J)
D.f7i=new B.dX(["t","turbine",0.25,0.3,D.dEF])
D.f75=new B.dX(["m","motor",0.75,0.3,A.jt])
D.dfZ=w([D.f7i,D.f75],x.d)
D.f6N=new B.co(["t",0,"m",0])
D.f6s=new B.co(["m",1,"t",1])
D.deX=w([D.f6N,D.f6s],x.o)
D.dkL=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eBe=new C.mY("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dfZ,D.deX,D.dkL)
D.aJe=new B.bt(D.Jz,[9],x.J)
D.a9F=new B.dX(["b","battery",0.2,0.3,D.aJe])
D.aRX=new B.dX(["r","radio",0.8,0.3,A.jt])
D.dxJ=w([D.a9F,D.Ew,D.aRX],x.d)
D.f6H=new B.co(["s",1,"r",0])
D.aRT=new B.co(["r",1,"b",1])
D.cb4=w([D.Eu,D.f6H,D.aRT],x.o)
D.dwb=w(["radio","music","listen"],x.s)
D.eBq=new C.mY("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dxJ,D.cb4,D.dwb)
D.dFJ=new B.bt(D.Jz,[12],x.J)
D.aRW=new B.dX(["b","battery",0.2,0.3,D.dFJ])
D.f7G=new B.dX(["t","tv",0.8,0.3,A.jt])
D.d5Q=w([D.aRW,D.Ew,D.f7G],x.d)
D.f6I=new B.co(["s",1,"t",0])
D.aRU=new B.co(["t",1,"b",1])
D.dpp=w([D.Eu,D.f6I,D.aRU],x.o)
D.dxH=w(["tv","television","screen","watch"],x.s)
D.eBb=new C.mY("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d5Q,D.dpp,D.dxH)
D.f7w=new B.dX(["z","buzzer",0.8,0.3,A.jt])
D.cMm=w([D.K_,D.Ew,D.f7w],x.d)
D.f6J=new B.co(["s",1,"z",0])
D.f70=new B.co(["z",1,"b",1])
D.d0v=w([D.Eu,D.f6J,D.f70],x.o)
D.dup=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eBn=new C.mY("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cMm,D.d0v,D.dup)
D.f7e=new B.dX(["h","heater",0.8,0.3,A.jt])
D.djo=w([D.a9F,D.Ew,D.f7e],x.d)
D.f6E=new B.co(["s",1,"h",0])
D.f6d=new B.co(["h",1,"b",1])
D.d1e=w([D.Eu,D.f6E,D.f6d],x.o)
D.cw3=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eBc=new C.mY("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.djo,D.d1e,D.cw3)
D.f7I=new B.dX(["s","solar",0.2,0.25,D.a7d])
D.dFN=new B.bt(D.aLF,[100],x.J)
D.f7L=new B.dX(["r","resistor",0.55,0.25,D.dFN])
D.f7S=new B.dX(["c","capacitor",0.85,0.25,A.jt])
D.f7a=new B.dX(["q","resistor",0.55,0.6,D.aJh])
D.f7J=new B.dX(["d","led",0.85,0.6,A.jt])
D.doV=w([D.f7I,D.f7L,D.f7S,D.f7a,D.f7J],x.d)
D.f6D=new B.co(["s",0,"r",0])
D.f6y=new B.co(["r",1,"c",0])
D.f63=new B.co(["c",1,"s",1])
D.f62=new B.co(["c",0,"q",0])
D.f6x=new B.co(["q",1,"d",0])
D.f66=new B.co(["d",1,"c",1])
D.dcM=w([D.f6D,D.f6y,D.f63,D.f62,D.f6x,D.f66],x.o)
D.dlm=w(["capacitor","store","charge","flash"],x.s)
D.eBp=new C.mY("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.doV,D.dcM,D.dlm)
D.f7l=new B.dX(["b","battery",0.15,0.3,D.a7g])
D.f7Y=new B.dX(["l1","bulb",0.5,0.3,A.jt])
D.f7t=new B.dX(["l2","bulb",0.85,0.3,A.jt])
D.d3Q=w([D.f7l,D.f7Y,D.f7t],x.d)
D.f5X=new B.co(["b",0,"l1",0])
D.f6l=new B.co(["l1",1,"l2",0])
D.f6m=new B.co(["l2",1,"b",1])
D.dgN=w([D.f5X,D.f6l,D.f6m],x.o)
D.dxs=w(["series","two bulbs","dim"],x.s)
D.eBf=new C.mY("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d3Q,D.dgN,D.dxs)
D.emZ={volts:0,charge:1}
D.dFR=new B.bt(D.emZ,[1.5,0],x.J)
D.f7Q=new B.dX(["b","battery",0.75,0.3,D.dFR])
D.d3d=w([D.aS_,D.f7Q],x.d)
D.f6B=new B.co(["s",0,"b",0])
D.f60=new B.co(["b",1,"s",1])
D.dd5=w([D.f6B,D.f60],x.o)
D.dlw=w(["charge","rechargeable","flat","recharge"],x.s)
D.eBd=new C.mY("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d3d,D.dd5,D.dlw)
D.dFI=new B.bt(D.Jz,[4.5],x.J)
D.f7g=new B.dX(["b","battery",0.2,0.3,D.dFI])
D.aRV=new B.dX(["p","phone",0.8,0.3,A.jt])
D.dfO=w([D.f7g,D.Ew,D.aRV],x.d)
D.f6G=new B.co(["s",1,"p",0])
D.a9E=new B.co(["p",1,"b",1])
D.dti=w([D.Eu,D.f6G,D.a9E],x.o)
D.duR=w(["phone","charger","usb","mobile"],x.s)
D.eBj=new C.mY("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dfO,D.dti,D.duR)
D.f72=new B.dX(["f","fan",0.8,0.3,A.jt])
D.cob=w([D.K_,D.f72],x.d)
D.f5W=new B.co(["b",0,"f",0])
D.f6b=new B.co(["f",1,"b",1])
D.d1N=w([D.f5W,D.f6b],x.o)
D.dnS=w(["fan","cool","air","wind"],x.s)
D.eBs=new C.mY("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cob,D.d1N,D.dnS)
D.f7A=new B.dX(["b","battery",0.15,0.2,D.a7g])
D.f73=new B.dX(["a","ammeter",0.5,0.2,A.jt])
D.f71=new B.dX(["l","bulb",0.85,0.2,A.jt])
D.f7C=new B.dX(["v","voltmeter",0.5,0.6,A.jt])
D.dlT=w([D.f7A,D.f73,D.f71,D.f7C],x.d)
D.f5U=new B.co(["b",0,"a",0])
D.f5T=new B.co(["a",1,"l",0])
D.f6P=new B.co(["v",0,"l",0])
D.f6Q=new B.co(["v",1,"l",1])
D.dcX=w([D.f5U,D.f5T,D.aRR,D.f6P,D.f6Q],x.o)
D.dAX=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eBo=new C.mY("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dlT,D.dcX,D.dAX)
D.f80=new B.dX(["b","battery",0.15,0.2,D.aJe])
D.f7k=new B.dX(["t","tv",0.55,0.2,A.jt])
D.aJf=new B.bt(D.Jz,[5],x.J)
D.f78=new B.dX(["c","buck",0.4,0.5,D.aJf])
D.f7m=new B.dX(["p","phone",0.8,0.5,A.jt])
D.dap=w([D.f80,D.f7k,D.f78,D.f7m],x.d)
D.f6_=new B.co(["b",0,"t",0])
D.aRP=new B.co(["b",0,"c",0])
D.aRQ=new B.co(["c",1,"p",0])
D.dfL=w([D.f6_,D.aRU,D.aRP,D.aRQ,D.a9E],x.o)
D.d8x=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eBg=new C.mY("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dap,D.dfL,D.d8x)
D.f79=new B.dX(["c","buck",0.5,0.3,D.aJf])
D.d12=w([D.aRW,D.f79,D.aRV],x.d)
D.d6h=w([D.aRP,D.aRQ,D.a9E],x.o)
D.czy=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eBa=new C.mY("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d12,D.d6h,D.czy)
D.f7r=new B.dX(["d","diode",0.5,0.3,A.jt])
D.dh0=w([D.a9F,D.f7r,D.aRX],x.d)
D.f5V=new B.co(["b",0,"d",0])
D.f67=new B.co(["d",1,"r",0])
D.cOW=w([D.f5V,D.f67,D.aRT],x.o)
D.d8c=w(["diode","protect","backwards","one way"],x.s)
D.eBm=new C.mY("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dh0,D.cOW,D.d8c)
D.S2=w([D.eBk,D.eBr,D.eBi,D.eBl,D.eBh,D.eBe,D.eBq,D.eBb,D.eBn,D.eBc,D.eBp,D.eBf,D.eBd,D.eBj,D.eBs,D.eBo,D.eBg,D.eBa,D.eBm],B.at("O<mY>"))
D.hGt=new C.GY("Moon",1.62,A.d1,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hGr=new C.GY("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.hGu=new C.GY("Mercury",3.7,A.kt,"Mercury is small, so its gravity is like Mars.")
D.hGo=new C.GY("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hGq=new C.GY("Earth",9.81,A.aG,"On Earth gravity is strong, and the air also slows you down.")
D.hGs=new C.GY("Neptune",11.15,A.d7,"Neptune pulls a little harder than Earth.")
D.hGp=new C.GY("Jupiter",24.79,A.cI,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.th=w([D.hGt,D.hGr,D.hGu,D.hGo,D.hGq,D.hGs,D.hGp],B.at("O<GY>"))
D.dcK=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.ddu=w([0.2,0.5,0.8],x.n)
D.b1E=new C.Lk(0,"accordion")
D.d28=w([A.jK,A.zt,A.CP],x.w)
D.d9Q=w(["Mail","SMS","Ad"],x.s)
D.d2I=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hEH=new C.Bb(D.b1E,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aCf,D.d28,D.d9Q,D.d2I)
D.adq=new C.Lk(1,"flip")
D.dlg=w([A.qO,Z.HU,A.v1],x.w)
D.dfv=w(["Unlock","Verify","Secure"],x.s)
D.d0Z=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hEG=new C.Bb(D.adq,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aBL,D.dlg,D.dfv,D.d0Z)
D.b1F=new C.Lk(2,"towers")
D.deg=w([A.zr,A.qR,A.ik],x.w)
D.ddN=w(["Save","Grow","Earn"],x.s)
D.cPS=w(["","",""],x.s)
D.hEI=new C.Bb(D.b1F,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a5z,D.deg,D.ddN,D.cPS)
D.adr=new C.Lk(3,"assemble")
D.dmh=w([A.oG,A.hk,A.ed],x.w)
D.d9a=w(["Launch","Charge","Shine"],x.s)
D.dip=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hEK=new C.Bb(D.adr,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aA4,D.dmh,D.d9a,D.dip)
D.b1G=new C.Lk(4,"carousel")
D.dm4=w([A.b9,A.eZ],x.O)
D.d9Z=w([A.n5,A.apO,A.PP],x.w)
D.d4g=w(["Explore","Discover","Learn"],x.s)
D.dfU=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hEF=new C.Bb(D.b1G,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dm4,D.d9Z,D.d4g,D.dfU)
D.b1H=new C.Lk(5,"burst")
D.ddI=w([A.hI,A.rD],x.O)
D.d2C=w([A.k8,A.n3,A.hP],x.w)
D.d2Z=w(["Cheer","Win","Love"],x.s)
D.d5m=w(["Make some noise","First place","Share the joy"],x.s)
D.hEJ=new C.Bb(D.b1H,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.ddI,D.d2C,D.d2Z,D.d5m)
D.aBq=w([D.hEH,D.hEG,D.hEI,D.hEK,D.hEF,D.hEJ],B.at("O<Bb>"))
D.f2V=new B.b5("skin","Skin",A.apP)
D.f4B=new B.b5("muscle","Muscles",A.Pq)
D.f4e=new B.b5("organ","Organs",A.hP)
D.bQe=new B.a_(62747,"MaterialIcons",!1)
D.f4m=new B.b5("bone","Skeleton",D.bQe)
D.f4J=new B.b5("vessel","Blood vessels",A.pD)
D.dem=w([D.f2V,D.f4B,D.f4e,D.f4m,D.f4J],x.r)
D.fa_=new C.vr("Simple legs","Light. Land gently.",0.15,0.2)
D.fa1=new C.vr("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fa4=new C.vr("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Dy=w([D.fa_,D.fa1,D.fa4],x._)
D.f5z=new B.co(["beat",0.18,0.28,0])
D.f6K=new B.co(["burst",0.7,0.2,0])
D.f6V=new B.co(["delay",0.45,0.5,1])
D.f6u=new B.co(["ripple",0.75,0.6,3])
D.d8U=w([D.f5z,D.f6K,D.f6V,D.f6u],x.e)
D.dkz=w([O.lv,P.JZ,F.UA],x.u)
D.hD7=new C.GJ("First spark","A clock lights a burst and a ripple",D.d8U,D.dkz)
D.f6a=new B.co(["beat",0.15,0.3,1])
D.f5c=new B.co(["ripple",0.62,0.15,0])
D.f6R=new B.co(["delay",0.4,0.45,0])
D.f5Q=new B.co(["ripple",0.7,0.45,0])
D.f5u=new B.co(["delay",0.4,0.7,1])
D.f6w=new B.co(["shake",0.75,0.75,0])
D.dyD=w([D.f6a,D.f5c,D.f6R,D.f5Q,D.f5u,D.f6w],x.e)
D.eDg=new B.y(2,4)
D.aRw=new B.y(4,5)
D.dcz=w([O.lv,P.JZ,F.UA,D.eDg,D.aRw],x.u)
D.hD9=new C.GJ("Heartbeat","Two thumps, then a shake",D.dyD,D.dcz)
D.f5E=new B.co(["dice",0.15,0.7,1])
D.f6X=new B.co(["echo",0.4,0.7,0])
D.f5N=new B.co(["comet",0.7,0.5,4])
D.f6L=new B.co(["burst",0.72,0.2,1])
D.f68=new B.co(["burst",0.3,0.25,0])
D.f5F=new B.co(["pop",0.55,0.85,0])
D.cvC=w([D.f5E,D.f6X,D.f5N,D.f6L,D.f68,D.f5F],x.e)
D.eCB=new B.y(1,3)
D.eCC=new B.y(1,4)
D.aRs=new B.y(0,5)
D.dm_=w([O.lv,R.vz,D.eCB,D.eCC,D.aRs],x.u)
D.hD8=new C.GJ("Fireworks","Dice launch comets that burst in colour",D.cvC,D.dm_)
D.f5K=new B.co(["beat",0.15,0.2,2])
D.f6i=new B.co(["chance",0.4,0.2,0])
D.f5B=new B.co(["ball",0.7,0.12,3])
D.f5n=new B.co(["chance",0.4,0.5,1])
D.f6W=new B.co(["ball",0.3,0.08,1])
D.f5g=new B.co(["ripple",0.7,0.55,3])
D.coE=w([D.f5K,D.f6i,D.f5B,D.f5n,D.f6W,D.f5g],x.e)
D.eDh=new B.y(2,5)
D.cM6=w([O.lv,R.vz,P.a9w,F.UB,D.eDh],x.u)
D.hD6=new C.GJ("Rain","Balls fall at random and splash",D.coE,D.cM6)
D.f6j=new B.co(["beat",0.12,0.45,2])
D.f6M=new B.co(["toggle",0.38,0.2,0])
D.f6T=new B.co(["wash",0.7,0.15,4])
D.f5D=new B.co(["count3",0.38,0.45,0])
D.f6O=new B.co(["burst",0.72,0.4,0])
D.f69=new B.co(["light",0.55,0.7,1])
D.f5o=new B.co(["pop",0.8,0.8,4])
D.doT=w([D.f6j,D.f6M,D.f6T,D.f5D,D.f6O,D.f69,D.f5o],x.e)
D.eDO=new B.y(3,6)
D.crN=w([O.lv,R.vz,P.a9w,F.UB,D.aRs,D.eDO],x.u)
D.hD4=new C.GJ("Disco","A beat drives lights, washes and bursts",D.doT,D.crN)
D.f7_=new B.co(["button",0.12,0.2,0])
D.f5i=new B.co(["delay",0.34,0.2,1])
D.f6Z=new B.co(["light",0.56,0.2,1])
D.f6S=new B.co(["delay",0.56,0.45,1])
D.f6k=new B.co(["ball",0.34,0.6,0])
D.f5m=new B.co(["delay",0.34,0.8,1])
D.f5b=new B.co(["burst",0.7,0.8,5])
D.cbP=w([D.f7_,D.f5i,D.f6Z,D.f6S,D.f6k,D.f5m,D.f5b],x.e)
D.eG_=new B.y(5,6)
D.duz=w([O.lv,R.vz,F.UA,F.UB,D.aRw,D.eG_],x.u)
D.hD5=new C.GJ("Domino","Tap the button and watch it run down the line",D.cbP,D.duz)
D.aBP=w([D.hD7,D.hD9,D.hD8,D.hD6,D.hD4,D.hD5],B.at("O<GJ>"))
D.djP=w([0.05,0.15,0.25],x.n)
D.dkK=w([1.5,3,4.5,9,12],x.n)
D.f1c=new B.b5("dice","Dice",A.oy)
D.f2s=new B.b5("coin","Coin",Q.zl)
D.f4E=new B.b5("num","Number",A.wR)
D.dkY=w([D.f1c,D.f2s,D.f4E],x.r)
D.dl1=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aBV=w([A.bZ,A.aQ,A.b4,A.aG,A.bg,A.bT,A.cI,A.hd],x.O)
D.dm5=w([A.bT,A.aG,A.dC,A.b4],x.O)
D.dn8=w([],x.h)
D.euu=new C.eh("battery","Battery","\ud83d\udd0b",A.b4,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.euA=new C.eh("solar","Solar panel","\u2600\ufe0f",A.bl,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eve=new C.eh("crank","Hand crank","\ud83d\udd04",A.cI,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.euR=new C.eh("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aG,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eum=new C.eh("buck","Step-down converter","\ud83d\udd3d",A.hd,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.euP=new C.eh("regulator","5 V regulator","\ud83e\uddca",A.bN,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.evj=new C.eh("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.ev0=new C.eh("ldr","Light sensor","\ud83c\udf1e",A.dC,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.euF=new C.eh("switch","Switch","\ud83c\udf9a\ufe0f",A.bg,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.evg=new C.eh("fuse","Fuse","\ud83e\uddef",A.bZ,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eue=new C.eh("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hd,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.ev1=new C.eh("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.ev3=new C.eh("bulb","Light bulb","\ud83d\udca1",A.dC,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.euC=new C.eh("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.euG=new C.eh("motor","Motor","\u2699\ufe0f",A.bN,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.euY=new C.eh("buzzer","Buzzer","\ud83d\udd14",A.bT,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.euv=new C.eh("heater","Heater","\ud83d\udd25",A.cI,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.euT=new C.eh("capacitor","Capacitor","\ud83e\udeab",A.cu,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.euL=new C.eh("radio","Radio","\ud83d\udcfb",A.nt,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.euI=new C.eh("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eul=new C.eh("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eus=new C.eh("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.euy=new C.eh("fan","Fan","\ud83c\udf00",A.aG,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.evl=new C.eh("speaker","Speaker","\ud83d\udd0a",A.bT,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eva=new C.eh("clock","Digital clock","\u23f0",A.b4,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.euO=new C.eh("calculator","Calculator","\ud83e\uddee",A.Mj,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eur=new C.eh("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cu,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.evk=new C.eh("router","WiFi router","\ud83d\udcf6",A.hd,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.evn=new C.eh("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.euh=new C.eh("toycar","Toy car","\ud83d\ude97",A.cI,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.evo=new C.eh("kettle","Kettle","\ud83e\uded6",A.mT,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eup=new C.eh("lamp","Desk lamp","\ud83e\ude94",A.dC,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.euB=new C.eh("lights","Party lights","\ud83c\udf84",A.nt,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.euM=new C.eh("fridge","Fridge","\ud83e\uddca",A.hA,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.euj=new C.eh("washer","Washing machine","\ud83e\udee7",A.cu,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.evb=new C.eh("blender","Blender","\ud83e\udd64",A.bZ,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.euJ=new C.eh("drone","Drone","\ud83d\ude81",A.bN,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.euo=new C.eh("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.euN=new C.eh("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.ev8=new C.eh("neon","Neon sign","\ud83e\udea7",A.bT,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.euk=new C.eh("microwave","Microwave","\ud83c\udf72",A.cI,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.ev2=new C.eh("doorbell","Doorbell","\ud83d\udd14",A.bl,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eux=new C.eh("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.euX=new C.eh("console","Game console","\ud83c\udfae",A.bg,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.evd=new C.eh("heartmon","Heart monitor","\ud83e\ude7a",A.hu,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eui=new C.eh("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.euS=new C.eh("lighthouse","Lighthouse","\ud83d\uddfc",A.dC,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.ev_=new C.eh("discoball","Disco ball","\ud83e\udea9",A.nt,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.evi=new C.eh("robot","Robot","\ud83e\udd16",A.aG,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eug=new C.eh("toaster","Toaster","\ud83c\udf5e",A.e0,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.evm=new C.eh("ledstrip","LED strip","\ud83c\udf08",A.bT,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.ev7=new C.eh("pump","Water pump","\ud83d\udeb0",A.aG,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.euU=new C.eh("hairdryer","Hair dryer","\ud83d\udca8",A.hI,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.ev5=new C.eh("headphones","Headphones","\ud83c\udfa7",A.bg,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.euq=new C.eh("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.evh=new C.eh("tablet","iPad Pro M5","\ud83d\udcf2",A.cu,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eud=new C.eh("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hu,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.euK=new C.eh("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.euD=new C.eh("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.euZ=new C.eh("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.ua,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.euf=new C.eh("iphonefold","iPhone Fold","\ud83d\udcf1",A.b8,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eut=new C.eh("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d7,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.evf=new C.eh("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cD,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.euV=new C.eh("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bd,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.euQ=new C.eh("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c6,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.ev6=new C.eh("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.euE=new C.eh("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b4,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.euW=new C.eh("honor","Honor Magic V5","\ud83d\udcf1",A.cu,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.ev4=new C.eh("vivo","vivo X300 Pro","\ud83d\udcf1",A.cI,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.ev9=new C.eh("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.euc=new C.eh("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ci,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.euH=new C.eh("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cD,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.euz=new C.eh("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eun=new C.eh("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dC,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.euw=new C.eh("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.evc=new C.eh("vision","Apple Vision Pro","\ud83e\udd7d",A.bg,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Sq=w([D.euu,D.euA,D.eve,D.euR,D.eum,D.euP,D.evj,D.ev0,D.euF,D.evg,D.eue,D.ev1,D.ev3,D.euC,D.euG,D.euY,D.euv,D.euT,D.euL,D.euI,D.eul,D.eus,D.euy,D.evl,D.eva,D.euO,D.eur,D.evk,D.evn,D.euh,D.evo,D.eup,D.euB,D.euM,D.euj,D.evb,D.euJ,D.euo,D.euN,D.ev8,D.euk,D.ev2,D.eux,D.euX,D.evd,D.eui,D.euS,D.ev_,D.evi,D.eug,D.evm,D.ev7,D.euU,D.ev5,D.euq,D.evh,D.eud,D.euK,D.euD,D.euZ,D.euf,D.eut,D.evf,D.euV,D.euQ,D.ev6,D.euE,D.euW,D.ev4,D.ev9,D.euc,D.euH,D.euz,D.eun,D.euw,D.evc],B.at("O<eh>"))
D.dnN=w([5,10,15,25,45,60],x.t)
D.do9=w([-0.045,0.03,-0.015],x.n)
D.aCn=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.ve=w([0.05,0.2,0.35],x.n)
D.b9s=new B.ab(0,A.G,A.hJ,A.dM,6)
D.dqU=w([D.b9s],x.V)
D.eBM=new B.y(0,"AND")
D.eCD=new B.y(1,"Adder")
D.eDi=new B.y(2,"Blinker")
D.eDP=new B.y(3,"Memory")
D.drG=w([D.eBM,D.eCD,D.eDi,D.eDP],x.I)
D.aCB=w([-104,0,104],x.n)
D.aCD=w([-14,3],x.n)
D.dsC=w([-8,0,8],x.n)
D.aCM=w([-92,0,92],x.n)
D.dt0=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f9X=new C.vr("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fa3=new C.vr("Medium tank","Balanced.",0.35,1)
D.fa2=new C.vr("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.SF=w([D.f9X,D.fa3,D.fa2],x._)
D.nQ=w([0.04,0.2,0.36],x.n)
D.aCY=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f4d=new B.b5(D.b1E,"Fold",Q.aqL)
D.f3a=new B.b5(D.adq,"Flip",A.CX)
D.bQv=new B.a_(62889,"MaterialIcons",!1)
D.f4A=new B.b5(D.b1F,"Rise",D.bQv)
D.aqY=new B.a_(983870,"MaterialIcons",!1)
D.f0w=new B.b5(D.adr,"Assemble",D.aqY)
D.f0K=new B.b5(D.b1G,"Spin",D.apo)
D.f0E=new B.b5(D.b1H,"Pop",A.k8)
D.duw=w([D.f4d,D.f3a,D.f4A,D.f0w,D.f0K,D.f0E],B.at("O<+(Lk,n,a_)>"))
D.aD2=w([A.bT,A.dC,A.bw,A.aG,A.bg,A.bZ],x.O)
D.duX=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dw1=w([3,4.5,5,6,9],x.n)
D.ba7=new B.ab(0,A.G,A.b6,A.J,16)
D.dwu=w([D.ba7],x.V)
D.fS9=new B.B("\ud83e\uddcd",null,R.KO,null,null,null,null,null,null,null,null,null)
D.caS=new B.IY(5,null,null,A.by,A.bT,null,null,null,null)
D.fh0=new B.a5(150,null,D.caS,null)
D.fzm=new B.F(!0,A.ab,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVt=new B.B("Getting the body ready...",null,D.fzm,null,null,null,null,null,null,null,null,null)
D.fSc=new B.B("Real 3D anatomy, kept on your phone",null,A8.xo,null,null,null,null,null,null,null,null,null)
D.dwx=w([D.fS9,A.aB,D.fh0,A.ae,D.fVt,A.av,D.fSc],x.p)
D.dx6=w(["solar","turbine","crank","pot"],x.s)
D.dxw=w([0,0.35,0.75,1],x.n)
D.dyS=w(["volts","level","ohms","on"],x.s)
D.dAl=w([A.jK,A.zt,A.CP,A.qO,Z.HU,A.v1,A.zr,A.qR,A.ik,A.oG,A.hk,A.ed,A.hP,A.i4,A.n3,A.lO,A.v0,A.td,A.ll,A.Hr,A.v_,A.CW,A.CT,A.a3s,A.Pg,A.D4,A.Pq,A.aqb,H.aqU,A.k8],x.w)
D.eko={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hv1=new C.yL("Switch",F.py,A.bl,0,"Tap it to turn it ON or OFF.")
D.huY=new C.yL("Blinker",A.oE,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.huZ=new C.yL("AND",D.aqY,A.cu,2,"ON only when BOTH inputs are ON.")
D.bS0=new B.a_(63671,"MaterialIcons",!1)
D.huX=new C.yL("OR",D.bS0,A.bg,2,"ON when EITHER input is ON.")
D.hv_=new C.yL("XOR",Aa.a2O,A.bT,2,"ON when the inputs are DIFFERENT.")
D.huU=new C.yL("NAND",A.uM,A.aG,2,"OFF only when BOTH inputs are ON.")
D.bR5=new B.a_(63176,"MaterialIcons",!1)
D.huV=new C.yL("NOR",D.bR5,A.hd,2,"ON only when BOTH inputs are OFF.")
D.huW=new C.yL("NOT",Y.D7,A.cI,1,"Flips the signal: ON becomes OFF.")
D.hv0=new C.yL("Light",A.mj,A.dC,1,"Glows when its input is ON.")
D.hv2=new C.yL("Buzzer",A.oF,A.bZ,1,"Beeps while its input is ON.")
D.A9=new B.bt(D.eko,[D.hv1,D.huY,D.huZ,D.huX,D.hv_,D.huU,D.huV,D.huW,D.hv0,D.hv2],B.at("bt<n,yL>"))
D.d1x=w([A.A],x.M)
D.d1U=w([A.aA,A.aE],x.M)
D.dbA=w([A.aA,A.A,A.aE],x.M)
D.ddb=w([A.aA,A.ly,A.A,A.lz,A.aE],x.M)
D.drC=w([A.aA,A.ly,A.a7,A.aa,A.lz,A.aE],x.M)
D.dF8=new B.d_([1,D.d1x,2,D.d1U,3,D.dbA,4,A.aDC,5,D.ddb,6,D.drC],B.at("d_<H,ai<da>>"))
D.emX={Calm:0,Box:1,Sleep:2}
D.cJu=w([4,2,6,0],x.n)
D.cJB=w([4,4,4,4],x.n)
D.cJC=w([4,7,8,0],x.n)
D.T9=new B.bt(D.emX,[D.cJu,D.cJB,D.cJC],B.at("bt<n,ai<G>>"))
D.ekB={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xL=new C.a1E(0,"source")
D.dcC=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hBL=new C.qu("Clock",A.oE,D.xL,A.bw,D.dcC)
D.hBH=new C.qu("Button",A.Da,D.xL,A.aQ,A.Z)
D.dwd=w(["random","quick","slow"],x.s)
D.hBS=new C.qu("Dice",A.oy,D.xL,A.bT,D.dwd)
D.bRF=new B.a_(63484,"MaterialIcons",!1)
D.Fb=new C.a1E(1,"logic")
D.dBc=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hBO=new C.qu("Delay",D.bRF,D.Fb,A.cu,D.dBc)
D.dnU=w(["fast","mid","slow"],x.s)
D.hBT=new C.qu("Echo",A.aqs,D.Fb,A.bg,D.dnU)
D.hBQ=new C.qu("Every 2nd",Y.D7,D.Fb,A.hd,A.Z)
D.bRk=new B.a_(63309,"MaterialIcons",!1)
D.hBN=new C.qu("Every 3rd",D.bRk,D.Fb,A.aG,A.Z)
D.cbb=w(["50%","25%","75%"],x.s)
D.hBV=new C.qu("Chance",Ah.ar_,D.Fb,A.cI,D.cbb)
D.rl=new C.a1E(2,"out")
D.hBJ=new C.qu("Light",A.mj,D.rl,A.dC,A.Z)
D.hBK=new C.qu("Burst",A.k8,D.rl,A.bT,A.Z)
D.hBI=new C.qu("Ripple",A.zy,D.rl,A.b9,A.Z)
D.hBR=new C.qu("Ball",A.aqD,D.rl,A.cI,A.Z)
D.hBP=new C.qu("Comet",A.oG,D.rl,A.bg,A.Z)
D.bT4=new B.a_(983669,"MaterialIcons",!1)
D.hBU=new C.qu("Shake",D.bT4,D.rl,A.bZ,A.Z)
D.hBW=new C.qu("Pop",A.Hs,D.rl,A.b4,A.Z)
D.hBM=new C.qu("Wash",A.Pu,D.rl,A.pe,A.Z)
D.na=new B.bt(D.ekB,[D.hBL,D.hBH,D.hBS,D.hBO,D.hBT,D.hBQ,D.hBN,D.hBV,D.hBJ,D.hBK,D.hBI,D.hBR,D.hBP,D.hBU,D.hBW,D.hBM],B.at("bt<n,qu>"))
D.ekP={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.AB=new C.Kj(0,"tv")
D.fbx=new C.mx("Samsung Neo QLED 8K",D.AB,F.ye,A.aG)
D.fbo=new C.mx("LG OLED evo G5",D.AB,A.eq,A.hu)
D.fbf=new C.mx("Sony Bravia 9",D.AB,A.rx,A.bv)
D.fbj=new C.mx("Apple TV 4K",D.AB,A.e1,A.bP)
D.fbg=new C.mx("Bang and Olufsen Beovision",D.AB,F.FH,F.ua)
D.a9Q=new C.Kj(1,"iphone")
D.aSl=new C.mx("iPhone 18 Pro Max",D.a9Q,D.akr,A.ci)
D.Ey=new C.Kj(3,"fold")
D.bwp=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fbt=new C.mx("iPhone Fold",D.Ey,D.bwp,A.b8)
D.AC=new C.Kj(2,"android")
D.fbu=new C.mx("Samsung Galaxy S26 Ultra",D.AC,F.Yl,A.d7)
D.bp_=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fbm=new C.mx("Samsung Galaxy Z Fold7",D.Ey,D.bp_,A.cD)
D.fbi=new C.mx("Google Pixel 10 Pro XL",D.AC,A.d1,A.bd)
D.fbq=new C.mx("Xiaomi 16 Ultra",D.AC,A.ih,A.c6)
D.fbl=new C.mx("Huawei Mate 80 Pro Max",D.AC,A.et,A.ay)
D.fbh=new C.mx("OPPO Find X9 Ultra",D.AC,A.ea,A.b4)
D.fbz=new C.mx("Honor Magic V5",D.Ey,A.db,A.cu)
D.fbn=new C.mx("vivo X300 Pro",D.AC,A.fA,A.cI)
D.aSm=new C.Kj(4,"tablet")
D.fbs=new C.mx("iPad Pro M5",D.aSm,A.d1,A.aG)
D.a9R=new C.Kj(5,"reader")
D.fbA=new C.mx("Kindle Scribe",D.a9R,A.cS,A.bv)
D.AD=new C.Kj(6,"computer")
D.fbr=new C.mx("MacBook Pro M5 Max",D.AD,A.d1,A.ci)
D.fbw=new C.mx("iMac 32 inch",D.AD,A.bP,A.cD)
D.fbp=new C.mx("Pro Display XDR 8K",D.AD,A.ih,A.b9)
D.fbk=new C.mx("Sony Laser Projector",D.AD,A.cl,A.dC)
D.fbv=new C.mx("Luxury car touchscreen",D.AD,M.nz,A.ay)
D.fby=new C.mx("Apple Vision Pro",D.AD,A.cB,A.bg)
D.mt=new B.bt(D.ekP,[D.fbx,D.fbo,D.fbf,D.fbj,D.fbg,D.aSl,D.fbt,D.fbu,D.fbm,D.fbi,D.fbq,D.fbl,D.fbh,D.fbz,D.fbn,D.fbs,D.fbA,D.fbr,D.fbw,D.fbp,D.fbk,D.fbv,D.fby],B.at("bt<n,mx>"))
D.el0={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bzd=new C.fR(20,4,13,!1)
D.bzE=new C.fR(14,5,13.5,!1)
D.bzv=new C.fR(9,2.4,10,!1)
D.bzJ=new C.fR(7,5,12.5,!1)
D.bzy=new C.fR(8,3.5,12,!1)
D.bz9=new C.fR(15,2,6,!1)
D.bzH=new C.fR(45,6,13.5,!0)
D.bzp=new C.fR(10,8,13.5,!1)
D.bzh=new C.fR(25,3,12,!0)
D.bzn=new C.fR(35,4,12,!0)
D.bzo=new C.fR(40,4.5,9.5,!0)
D.bzq=new C.fR(55,3,9,!0)
D.bza=new C.fR(18,3,9,!1)
D.bzG=new C.fR(22,4,13.5,!1)
D.bzz=new C.fR(16,5,13.5,!1)
D.bzl=new C.fR(30,4,9,!0)
D.bzS=new C.fR(5,3.5,13,!1)
D.bzt=new C.fR(25,3,13.5,!0)
D.bzC=new C.fR(14,2.5,9,!1)
D.bzs=new C.fR(6,6,13,!1)
D.bzK=new C.fR(30,1.2,5,!0)
D.bzR=new C.fR(35,3,4.5,!0)
D.bzN=new C.fR(20,4.5,7.5,!0)
D.bzr=new C.fR(55,5.5,13.5,!0)
D.bz8=new C.fR(45,5.5,13.5,!0)
D.bzD=new C.fR(40,5.5,13.5,!0)
D.bzQ=new C.fR(60,6,13.5,!0)
D.akV=new C.fR(28,4,7,!0)
D.GD=new C.fR(25,4,7,!0)
D.bzk=new C.fR(30,4,7,!0)
D.bzf=new C.fR(22,4,7,!0)
D.bzg=new C.fR(24,4,7,!0)
D.bzu=new C.fR(60,3,5.5,!0)
D.bzb=new C.fR(18,9,14,!0)
D.bzi=new C.fR(25,9,14,!0)
D.akW=new C.fR(30,8,14,!0)
D.bze=new C.fR(20,8,14,!0)
D.bzm=new C.fR(30,9,14,!0)
D.bzL=new C.fR(22,5,9.5,!0)
D.bzc=new C.fR(30,2.5,10.5,!0)
D.bzA=new C.fR(50,5.5,13.5,!0)
D.bzP=new C.fR(12,2,9.5,!1)
D.bzx=new C.fR(16,1.3,9.5,!0)
D.bzI=new C.fR(40,2.5,7,!0)
D.bzO=new C.fR(60,1.2,4.8,!0)
D.bzM=new C.fR(18,5,13.5,!0)
D.bzF=new C.fR(8,2,9.5,!1)
D.bzw=new C.fR(12,2.5,8,!1)
D.bzj=new C.fR(20,3.5,13.5,!0)
D.bzB=new C.fR(3.5,3,13,!1)
D.Aa=new B.bt(D.el0,[D.bzd,D.bzE,D.bzv,D.bzJ,D.bzy,D.bz9,D.bzH,D.bzp,D.bzh,D.bzn,D.bzo,D.bzq,D.bza,D.bzG,D.bzz,D.bzl,D.bzS,D.bzt,D.bzC,D.bzs,D.bzK,D.bzR,D.bzN,D.bzr,D.bz8,D.bzD,D.bzQ,D.akV,D.GD,D.bzk,D.GD,D.bzf,D.GD,D.bzg,D.akV,D.GD,D.bzu,D.bzb,D.bzi,D.akW,D.bze,D.bzm,D.bzL,D.bzc,D.bzA,D.bzP,D.bzx,D.bzI,D.bzO,D.GD,D.akW,D.bzM,D.bzF,D.bzw,D.bzj,D.bzB],B.at("bt<n,fR>"))
D.eky={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.f01=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eFX=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eFS=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eSo=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eTl=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eSk=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eDY=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eQf=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.f09=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eTH=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eJl=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eDC=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eIk=new B.y("Movement","They pull your legs together and help you balance.")
D.eKi=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eG5=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eYs=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eZC=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.ePY=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eZl=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eOy=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eTQ=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eDJ=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eKF=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eTu=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eOU=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eZt=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eRP=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eDW=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eUq=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eY5=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eWc=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eBY=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eRx=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eRB=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eLp=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eGj=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eK6=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eQq=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eX1=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.f06=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eTN=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eBG=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eQC=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eCw=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eXh=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eYo=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eR3=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eXw=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eDL=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eZ_=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eHG=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eWF=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eL3=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eOO=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eU6=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eZ9=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eZ1=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eZ5=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ePl=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eUZ=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eW9=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eYM=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eR2=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eN7=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eLQ=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eRs=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eU_=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eNE=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eOl=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eI4=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eYk=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eIV=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eCt=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eLo=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eCo=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eGL=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eLt=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eJ4=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eUm=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eKl=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.f_O=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eM_=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.ePe=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eRX=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eJd=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eIX=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dGg=new B.bt(D.eky,[D.f01,D.eFX,D.eFS,D.eSo,D.eTl,D.eSk,D.eDY,D.eQf,D.f09,D.eTH,D.eJl,D.eDC,D.eIk,D.eKi,D.eG5,D.eYs,D.eZC,D.ePY,D.eZl,D.eOy,D.eTQ,D.eDJ,D.eKF,D.eTu,D.eOU,D.eZt,D.eRP,D.eDW,D.eUq,D.eY5,D.eWc,D.eBY,D.eRx,D.eRB,D.eLp,D.eGj,D.eK6,D.eQq,D.eX1,D.f06,D.eTN,D.eBG,D.eQC,D.eCw,D.eXh,D.eYo,D.eR3,D.eXw,D.eDL,D.eZ_,D.eHG,D.eWF,D.eL3,D.eOO,D.eU6,D.eZ9,D.eZ1,D.eZ5,D.ePl,D.eUZ,D.eW9,D.eYM,D.eR2,D.eN7,D.eLQ,D.eRs,D.eU_,D.eNE,D.eOl,D.eI4,D.eYk,D.eIV,D.eCt,D.eLo,D.eCo,D.eGL,D.eLt,D.eJ4,D.eUm,D.eKl,D.f_O,D.eM_,D.ePe,D.eRX,D.eJd,D.eIX],B.at("bt<n,+(n,n)>"))
D.dNB=new C.VG(null)
D.dNO=new C.VH(null)
D.dPS=new C.VN(null)
D.dQG=new C.Wn(null)
D.dQK=new C.Wo(null)
D.dRi=new C.Ww(null)
D.dV7=new C.X5(null)
D.dVO=new C.X6(null)
D.e_0=new C.Xb(null)
D.eeU=new C.Xc(null)
D.eeX=new C.Xg(null)
D.eh6=new C.XA(null)
D.eh7=new C.a9A(null)
D.eja=new C.XJ(null)
D.en9=new B.p(0,118)
D.aLL=new B.p(0,13)
D.ena=new B.p(0,17)
D.end=new B.p(0,330)
D.enj=new B.p(0,-13)
D.enk=new B.p(0,-17)
D.enl=new B.p(0,-18)
D.enm=new B.p(0,-19)
D.eno=new B.p(0,-28)
D.enq=new B.p(0,-31)
D.enr=new B.p(0,-32)
D.enx=new B.p(-9.5,-11)
D.enA=new B.p(10,20)
D.enD=new B.p(10,-13)
D.enF=new B.p(10,-22)
D.enG=new B.p(10,-4)
D.enK=new B.p(11,0)
D.a8E=new B.p(11,8)
D.enQ=new B.p(12,2)
D.enR=new B.p(14,0)
D.enS=new B.p(14,12)
D.aLX=new B.p(14,8)
D.enT=new B.p(14,-17)
D.aLZ=new B.p(14,-3)
D.aM_=new B.p(14,-4)
D.enW=new B.p(15,0)
D.enX=new B.p(15,-12)
D.eo_=new B.p(16,-8)
D.eo0=new B.p(18,14)
D.eo1=new B.p(18,-12)
D.aM5=new B.p(20,0)
D.eo9=new B.p(20,15)
D.eoa=new B.p(20,-17)
D.eob=new B.p(20,-3)
D.eoc=new B.p(21,8)
D.eog=new B.p(22,10)
D.aM7=new B.p(22,8)
D.eoh=new B.p(24,0)
D.eoi=new B.p(24,2)
D.eol=new B.p(24,-18)
D.eom=new B.p(24,-22)
D.eoq=new B.p(25,8)
D.eor=new B.p(26,0)
D.eov=new B.p(28,-30)
D.eoC=new B.p(30,18)
D.eoD=new B.p(30,2)
D.eoG=new B.p(31,19)
D.eoI=new B.p(32,0)
D.aMb=new B.p(34,0)
D.aMc=new B.p(34,-32)
D.JD=new B.p(36,0)
D.eoV=new B.p(3,-1)
D.eoY=new B.p(40,3)
D.epb=new B.p(4,11)
D.epe=new B.p(4,-2)
D.epj=new B.p(5,17)
D.epk=new B.p(5,6)
D.epp=new B.p(6,11)
D.epw=new B.p(8,7)
D.epx=new B.p(8,-10)
D.epy=new B.p(8,-14)
D.aMh=new B.p(9,0)
D.epI=new B.p(-20.5,-17.6)
D.epJ=new B.p(-9,18.5)
D.epM=new B.p(-2.6,-1)
D.epV=new B.p(2.6,1)
D.eq2=new B.p(-9,12.2)
D.eqm=new B.p(-9,20.5)
D.eqH=new B.p(-10,0)
D.eqI=new B.p(-10,12)
D.aMo=new B.p(-10,4)
D.eqM=new B.p(-11,0)
D.eqP=new B.p(-11,-2)
D.eqT=new B.p(-13,-5)
D.eqU=new B.p(-14,0)
D.eqV=new B.p(-14,13)
D.eqW=new B.p(-14,2)
D.eqX=new B.p(-14,-12)
D.eqY=new B.p(-14,-19)
D.er_=new B.p(-14,-23)
D.er0=new B.p(-15,6)
D.er3=new B.p(-16,14)
D.er5=new B.p(-16,-8)
D.er6=new B.p(-17,10)
D.er7=new B.p(-17,-18)
D.er8=new B.p(-17,-8)
D.era=new B.p(-18,20)
D.erb=new B.p(-18,-9)
D.aMq=new B.p(-20,0)
D.erd=new B.p(-20,16)
D.ere=new B.p(-20,-9)
D.U4=new B.p(-22,8)
D.erf=new B.p(-22,-10)
D.erg=new B.p(-22,-11)
D.erh=new B.p(-24,10)
D.eri=new B.p(-24,11)
D.erj=new B.p(-24,14)
D.erk=new B.p(-24,-22)
D.erm=new B.p(-25,-11)
D.ern=new B.p(-26,0)
D.ero=new B.p(-26,-18)
D.erp=new B.p(-2,9)
D.erq=new B.p(-2,-10)
D.err=new B.p(-2,-20)
D.eru=new B.p(-2,-9)
D.erw=new B.p(-32,0)
D.aMs=new B.p(-34,0)
D.erB=new B.p(-40,3)
D.erD=new B.p(-4,11)
D.erE=new B.p(-4,-17)
D.erF=new B.p(-4,-2)
D.erJ=new B.p(-5,0)
D.erK=new B.p(-5,20)
D.erL=new B.p(-5,6)
D.erM=new B.p(-6,26)
D.erN=new B.p(-6,6)
D.erO=new B.p(-6,-42)
D.erQ=new B.p(-7,-19)
D.erR=new B.p(-7,-24)
D.erU=new B.p(-8,-9)
D.a8N=new B.p(-9,0)
D.erV=new B.p(-9,1)
D.erX=new B.p(-9,-23)
D.fJm=new B.B("Thinking\u2026",null,A.hs,null,null,null,null,null,null,null,null,null)
D.esX=new B.D(A.jG,D.fJm,null)
D.h_e=new B.B("Start from a ready-made board",null,A.fF,null,null,null,null,null,null,null,null,null)
D.et9=new B.D(A2.ws,D.h_e,null)
D.bHh=new B.R(4,0,4,14)
D.fEx=new B.F(!0,A.aD,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKm=new B.B("Games and little helpers for a spare minute.",null,D.fEx,null,null,null,null,null,null,null,null,null)
D.etl=new B.D(D.bHh,D.fKm,null)
D.dov=w([A.i_,A.bj],x.O)
D.aRk=new B.bY(A.A,0.5,A.x,null,0,D.dov,null,null)
D.eAx=new B.bY(A.A,0.5,A.x,null,0,D.aDi,null,null)
D.df2=w([A.c,A.bN],x.O)
D.eAz=new B.bY(A.A,0.5,A.x,null,0,D.df2,null,null)
D.dxj=w([A.bP,A.cB],x.O)
D.aRl=new B.bY(A.A,0.5,A.x,null,0,D.dxj,null,null)
D.cTw=w([A.c,A.bP],x.O)
D.eAE=new B.bY(A.p6,0.5,A.x,null,0,D.cTw,null,null)
D.bwt=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dvf=w([A.fp,D.bwt],x.O)
D.eAJ=new B.bY(A.p6,0.5,A.x,null,0,D.dvf,null,null)
D.cME=w([A.d1,A.cl],x.O)
D.eAK=new B.bY(A.A,0.5,A.x,null,0,D.cME,null,null)
D.d0t=w([A.fz,A.aQ,A.d3],x.O)
D.eAN=new B.bY(A.p6,0.5,A.x,null,0,D.d0t,null,null)
D.dpa=w([A.cB,M.nz],x.O)
D.eAO=new B.bY(A.p6,0.5,A.x,null,0,D.dpa,null,null)
D.eAS=new B.bY(A.A,0.5,A.x,null,0,D.azv,null,null)
D.dya=w([A.cB,A.ia],x.O)
D.eAZ=new B.bY(A.A,0.5,A.x,null,0,D.dya,null,null)
D.aRq=new B.aN(9,9)
D.eB6=new B.aN(1.4,1.4)
D.f84=new B.a1(10,-8,18,-2)
D.f85=new B.a1(14,-14,20,14)
D.f87=new B.a1(20,-2,30,2)
D.f8c=new B.a1(4,-13,30,-3)
D.f8i=new B.a1(8,-7,12,7)
D.f8u=new B.a1(-12,12,12,19)
D.f8v=new B.a1(-12,14,12,22)
D.f8w=new B.a1(-12,-22,12,8)
D.f8x=new B.a1(-12,-25,12,19)
D.f8y=new B.a1(-12,-26,12,-6)
D.f8z=new B.a1(-12,-4,12,14)
D.f8B=new B.a1(-14,20,14,24)
D.f8C=new B.a1(-14,6,14,10)
D.f8D=new B.a1(-14,-17,14,15)
D.f8E=new B.a1(-14,-26,14,18)
D.f8F=new B.a1(-14,-4,14,20)
D.f8H=new B.a1(-15,-29,15,25)
D.f8I=new B.a1(-16,-16,16,16)
D.f8L=new B.a1(-16,-22,-9,18)
D.f8M=new B.a1(-16,-24,16,-10)
D.f8O=new B.a1(-16,-2,16,20)
D.f8Q=new B.a1(-18,20,18,24)
D.f8R=new B.a1(-18,-18,18,20)
D.f8S=new B.a1(-20,12,20,22)
D.f8T=new B.a1(-20,-28,20,26)
D.f8U=new B.a1(-22,14,22,18)
D.aS2=new B.a1(-22,-26,22,24)
D.f8V=new B.a1(-22,-3,22,3)
D.f8W=new B.a1(-22,-4,22,12)
D.f8Y=new B.a1(-24,-12,10,22)
D.f8Z=new B.a1(-24,-14,22,8)
D.f9_=new B.a1(-24,-6,24,20)
D.aS3=new B.a1(-24,-9,24,9)
D.f90=new B.a1(-25,14,25,19)
D.f91=new B.a1(-26,-14,14,8)
D.f92=new B.a1(-26,-4,26,20)
D.f93=new B.a1(-26,-6,4,6)
D.aS4=new B.a1(-28,-13,28,13)
D.f94=new B.a1(-28,-16,28,16)
D.f95=new B.a1(-28,-16,28,8)
D.f96=new B.a1(-28,-22,28,22)
D.f97=new B.a1(-30,-12,30,14)
D.f98=new B.a1(-30,-14,0,14)
D.f99=new B.a1(-30,-18,30,20)
D.f9a=new B.a1(-30,-28,30,14)
D.f9b=new B.a1(-30,-2,30,18)
D.f9c=new B.a1(-30,-4,30,18)
D.f9d=new B.a1(-32,-17,32,17)
D.f9e=new B.a1(-32,-28,32,18)
D.f9f=new B.a1(-33,-21,33,17)
D.f9g=new B.a1(-34,14,34,26)
D.a9H=new B.a1(-34,-18,34,18)
D.f9h=new B.a1(-34,-4,34,7)
D.f9i=new B.a1(-36,-24,36,20)
D.f9j=new B.a1(-38,-22,38,22)
D.f9l=new B.a1(-3,12,3,22)
D.f9m=new B.a1(-3,5,3,15)
D.f9q=new B.a1(-46,-34,46,28)
D.f9s=new B.a1(-48,-3,48,3)
D.f9v=new B.a1(-6,18,24,24)
D.f9w=new B.a1(-6,5,6,12)
D.f9x=new B.a1(-6,-22,6,-15)
D.f9B=new B.a1(-9,-16,9,22)
D.f9C=new B.a1(-4.5,-24,4.5,-21.2)
D.f9E=new B.a1(14,-9,17.5,9)
D.eml={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aTa=new B.de(D.eml,5,x.Q)
D.elQ={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fdf=new B.de(D.elQ,10,x.Q)
D.ffA=new B.av(24,44)
D.ffY=new B.av(54,38)
D.fg3=new B.av(66,38)
D.beL=new B.fk(2,null,null,null,null,A.bg,null,null,null,null)
D.fh7=new B.a5(16,16,D.beL,null)
D.aUc=new B.hH(3,12,12,0.82,null)
D.fu_=new B.F(!0,A.w5,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fot=new B.ep("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cN,null,null,null,null,null,null,D.fu_)
D.fza=new B.F(!0,A.kO,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foz=new B.ep("AI",null,null,A.cN,null,null,null,null,null,null,D.fza)
D.foR=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpn=new B.F(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpL=new B.F(!0,A.cu,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqi=new B.F(!0,A.bW,null,null,null,null,11,A.U,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqD=new B.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr8=new B.F(!0,A.aR,null,null,null,null,12,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdZ=new B.cU(A.hJ,A.dM,6)
D.di7=w([D.fdZ],B.at("O<cU>"))
D.fs6=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.di7,null,null,null)
D.fsb=new B.F(!0,A.es,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsg=new B.F(!0,A.bW,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsU=new B.F(!0,A.bW,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft1=new B.F(!0,A.aD,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuB=new B.F(!0,A.aD,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv7=new B.F(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fva=new B.F(!0,A.c,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aDF,null,null,null)
D.fvg=new B.F(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvZ=new B.F(!0,A.bB,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx8=new B.F(!0,A.uo,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxJ=new B.F(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxO=new B.F(!0,A.bW,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxT=new B.F(!0,A.aD,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyG=new B.F(!0,A.mW,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyR=new B.F(!0,A.cB,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWn=new B.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA2=new B.F(!0,A.hc,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAm=new B.F(!0,A.bW,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAT=new B.F(!0,A.b4,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCp=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCV=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDc=new B.F(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDA=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDD=new B.F(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEM=new B.F(!0,A.uo,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF8=new B.F(!0,A.b4,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsj=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFx=new B.B("\u26a0\ufe0f ",null,D.fsj,null,null,null,null,null,null,null,null,null)
D.fFK=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.AX,null,null,null,null,null,null,null,null,null)
D.fHo=new B.B("Pick one, then change it and see what happens.",null,A.AX,null,null,null,null,null,null,null,null,null)
D.ftv=new B.F(!0,A.ab,null,null,null,null,null,A.U,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIn=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.ftv,null,null,null,null,null,null,null,null,null)
D.fJY=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fKA=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fLd=new B.B("Make it yours",null,A.jP,null,null,null,null,null,null,null,null,null)
D.fOq=new B.B("5G",null,X.aVH,null,null,null,null,null,null,null,null,null)
D.fPr=new B.B("Pick how big the screen is on the board",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fAE=new B.F(!0,A.bW,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPD=new B.B("WHAT HAPPENS",null,D.fAE,null,null,null,null,null,null,null,null,null)
D.fRo=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fS3=new B.B("Change the words and pictures on the three slabs.",null,A.AX,null,null,null,null,null,null,null,null,null)
D.fSg=new B.B("All the parts and wires will be removed.",null,A.hr,null,null,null,null,null,null,null,null,null)
D.fSB=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fTa=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fUp=new B.B("\ud83c\udfaf Challenges",null,A.dq,null,null,null,null,null,null,null,null,null)
D.fUW=new B.B("Remove this part",null,W.aVi,null,null,null,null,null,null,null,null,null)
D.fVf=new B.B("Clear the board?",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fA3=new B.F(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVx=new B.B("How the Lab works",null,D.fA3,null,null,null,null,null,null,null,null,null)
D.fqQ=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVS=new B.B("Electronics Lab",null,D.fqQ,null,null,null,null,A.a2,null,1,null,null)
D.fVW=new B.B("?",null,P.aWU,null,null,null,null,null,null,null,null,null)
D.fXg=new B.B("Ready-made circuits",null,A.dq,null,null,null,null,null,null,null,null,null)
D.fXU=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fDh=new B.F(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0n=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fDh,null,null,null,null,null,null,null,null,null)
D.h1y=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aVg,null,null,null,null,null,null,null,null,null)
D.h23=new B.B("NGMY",null,A.vI,null,null,null,null,null,null,null,null,null)
D.h2g=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.VP,null,null,null,null,null,null,null,null,null)
D.h2F=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.lW,null,null,null,null,null,null,null,null,null)
D.h3J=new B.B("TOOLBOX",null,A7.ab3,null,null,null,null,null,null,null,null,null)
D.hsC=new B.bu("body-loading",x.Y)
D.hsY=new B.bu("core-protocol-back",x.Y)
D.ht2=new B.bu("core-protocol-title-frame",x.Y)})();(function staticFields(){$.hv9=null
$.hv5=null
$.hv6=null
$.hBq=0
$.i3z=B.T(x.N,B.at("iH"))
$.i47=B.T(x.N,B.at("iH"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iCv","bH4",()=>{var v="led"
return B.a([C.aAb("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fsQ(),v),C.aAb("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fsR(),v),C.aAb("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fsS(),v),C.aAb("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fsZ(),v),C.aAb("Not both","Make the light go OFF only when both switches are ON.",2,new C.ft_(),v),C.aAb("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.ft0(),"buzzer")],B.at("O<bdg>"))})
w($,"iCX","bH5",()=>B.a([C.Rl("UNIVERSE","Earth, space and gravity",A.PP,A.aG,new C.ftg()),C.Rl("ELECTRONICS LAB","Batteries, wires, real circuits",Af.CU,A.aG,new C.fth()),C.Rl("DISCOVERY LAB","Body Explorer: a real 3D human",D.bQw,A.b4,new C.fti()),C.Rl("TOOLBOX","Converter, clock, games",H.apB,A.cI,new C.ftj()),C.Rl("REACTION LAB","Wire parts together",A.De,A.bw,new C.ftk()),C.Rl("SPARK PAINTER","Paint with light",A.Hq,A.bT,new C.ftl()),C.Rl("ROCKET LANDER","Land softly on the pad",A.oG,A.aG,new C.ftm()),C.Rl("TITLE ANIMATOR","Make a moving title",A.wS,A.bl,new C.ftn()),C.Rl("CIRCUIT LAB","Connect logic, learn it",A.a39,A.cu,new C.fto())],B.at("O<bvx>")))
w($,"iED","qF",()=>{var v,u,t=B.T(x.N,x.B)
for(v=0;v<76;++v){u=D.Sq[v]
t.n(0,u.a,u)}return t})
w($,"iCw","ajd",()=>B.a([C.Gt("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.ft1()),C.Gt("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.ft2()),C.Gt("Spin the motor","A battery and a motor in a loop will make it spin.",new C.ft3()),C.Gt("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.ft4()),C.Gt("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.ft5()),C.Gt("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fsT()),C.Gt("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fsU()),C.Gt("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fsV()),C.Gt("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fsW()),C.Gt("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fsX()),C.Gt("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fsY())],B.at("O<bdh>")))
w($,"iCZ","hKt",()=>B.a([C.a2a("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c6,new C.ftw()),C.a2a("Focus Timer","Work, then rest","\u23f1\ufe0f",A.bZ,A.bD,new C.ftx()),C.a2a("Breathe","Calm down in a minute","\ud83e\udee7",A.hd,A.cD,new C.fty()),C.a2a("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b8,new C.ftz()),C.a2a("Memory Match","Find the pairs","\ud83c\udccf",A.aG,A.ci,new C.ftA()),C.a2a("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bl,A.bd,new C.ftB()),C.a2a("Tip & Split","Share the bill","\ud83e\uddfe",A.b4,A.b3,new C.ftC()),C.a2a("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bg,A.aF,new C.ftD())],B.at("O<bwR>")))})()};
(a=>{a["cyPv7Q84AI0cHpqX28P4amX371I="]=a.current})($__dart_deferred_initializers__);