((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A4,Z,A_,A5,A0,S,A6,A7,A8,A1,A9,A2,N,Aa,Ab,Ac,Ad,T,O,U,Ae,Af,V,W,E,K,G,I,Ag,Ah,P,Ai,Aj,R,Ak,Q,Al,L,F,M,C={
bC8(d){return C.i7u(d)},
i7u(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bC8=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rh(B.nm(""),d,A.i4,null,null).dh(0,A.a_U),$async$bC8)
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
return B.i($async$bC8,v)},
ijH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.S0[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fh(D.S0,new C.fKE())
if(w==null)w=A.d.gH(D.S0)
s=B.T(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.J)(r),++u){l=r[u].a
k=l[0]
l=$.qE().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.J)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.alg(w.a,w.b,m,w,s,!1)},
idc(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.So,new C.fzj(),x.bd).aO(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
ish(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
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
if(!$.qE().al(0,p)||J.eI(s,o)||J.ad(t)>=8)continue
J.c7(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dyn[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.i.D(typeof J.t(q,"x")=="number"?B.dD(J.t(q,"x")):0.2+A.i.F(r,3)*0.3,0.16,0.84)
j=A.i.D(typeof J.t(q,"y")=="number"?B.dD(J.t(q,"y")):0.25+A.i.aq(r,3)*0.3,0.1,0.9)
J.c7(t,new B.dX([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aT(a6.a(J.t(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.D(A.i.M(B.dD(J.t(g,1))),0,1)
a0=A.o.D(A.i.M(B.dD(J.t(g,3))),0,1)
if(J.eI(s,f)&&J.eI(s,e)&&!J.z(f,e))J.c7(i,new B.cu([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aT(a0==null?A.cr:a0)
while(a0.C()){a2=a0.gR(a0)
J.c7(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.mY(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.alg(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
iia(d){var w,v,u=C.hlI()
d.B(u)
for(w=0;w<60;++w)u.vN(0,0.03333333333333333)
v=u.a
return A.d.aV(v,new C.fH2(u))&&!A.d.cE(v,new C.fH3())},
ii9(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.J)(l),++u){t=l[u];++v
k.n(0,t.a,$.qE().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.J)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.i.V(t.r)+" ohms")
if(A.d.q(D.dwD,p))q.push("level "+A.i.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.i.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aO(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.i.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.J)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aO(s,"\n")+"\nWires: "+A.d.aO(l,"; ")},
i5P(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.J)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aO(v,"\n")+"\n\n"}v=A.d.aO(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ijG(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qE().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.So[u]
if(A.d.aV(w,new C.fKB(s)))if(!B.cS(r,s.b.toLowerCase(),0))v=B.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fKC(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.i.ad(A.d.cG(w,0,new C.fKD())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qE().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
alg:function alg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fKE:function fKE(){},
fzj:function fzj(){},
fH2:function fH2(d){this.a=d},
fH3:function fH3(){},
fKB:function fKB(d){this.a=d},
fKC:function fKC(d){this.a=d},
fKD:function fKD(){},
WP:function WP(d,e){this.c=d
this.a=e},
bmy:function bmy(d,e,f,g,h){var _=this
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
ejh:function ejh(d){this.a=d},
eji:function eji(d,e,f){this.a=d
this.b=e
this.c=f},
ejj:function ejj(d){this.a=d},
eju:function eju(d){this.a=d},
ejv:function ejv(d,e){this.a=d
this.b=e},
ejq:function ejq(d){this.a=d},
ejo:function ejo(d,e){this.a=d
this.b=e},
ejp:function ejp(d,e,f){this.a=d
this.b=e
this.c=f},
ejr:function ejr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ejm:function ejm(d){this.a=d},
ejn:function ejn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejs:function ejs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ejl:function ejl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejt:function ejt(d,e){this.a=d
this.b=e},
ejk:function ejk(d,e){this.a=d
this.b=e},
ejy:function ejy(d){this.a=d},
ejx:function ejx(d){this.a=d},
ejz:function ejz(d){this.a=d},
ejw:function ejw(d){this.a=d},
ejA:function ejA(d,e){this.a=d
this.b=e},
ejB:function ejB(d,e){this.a=d
this.b=e},
ejC:function ejC(d,e){this.a=d
this.b=e},
ejD:function ejD(d,e){this.a=d
this.b=e},
bCt(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fsb,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hzA(d,e,f,g){var w=null,v=B.m(24),u=B.L(f.j(0.6),A.r,1)
return B.as(B.q(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.AW,A.K,w,w),A.aB,B.bW(A.fU,g,A.bs,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(D.bhA,w,u,v,w,w,A.n),w,w,w,w,A.ad,w,w,w),w,w,w)},
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
Xb:function Xb(d){this.a=d},
aGc:function aGc(d,e,f,g,h,i,j,k,l,m){var _=this
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
eyB:function eyB(){},
eyV:function eyV(d){this.a=d},
eyU:function eyU(d,e){this.a=d
this.b=e},
eyW:function eyW(){},
eyX:function eyX(){},
eyD:function eyD(d,e,f){this.a=d
this.b=e
this.c=f},
eyC:function eyC(d,e){this.a=d
this.b=e},
eys:function eys(d){this.a=d},
eyt:function eyt(d){this.a=d},
eyu:function eyu(d){this.a=d},
eyv:function eyv(d){this.a=d},
eyw:function eyw(d){this.a=d},
eyx:function eyx(d){this.a=d},
eyy:function eyy(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyA:function eyA(d){this.a=d},
eyq:function eyq(d){this.a=d},
eyr:function eyr(d){this.a=d},
eyp:function eyp(d){this.a=d},
eyO:function eyO(d,e){this.a=d
this.b=e},
eyJ:function eyJ(d){this.a=d},
eyK:function eyK(d){this.a=d},
eyG:function eyG(d){this.a=d},
eyL:function eyL(d){this.a=d},
eyF:function eyF(d){this.a=d},
eyM:function eyM(d){this.a=d},
eyN:function eyN(d){this.a=d},
eyE:function eyE(d){this.a=d},
eyP:function eyP(d,e){this.a=d
this.b=e},
eyI:function eyI(d,e){this.a=d
this.b=e},
eyQ:function eyQ(d){this.a=d},
eyR:function eyR(d){this.a=d},
eyS:function eyS(d){this.a=d},
eyT:function eyT(d){this.a=d},
eyH:function eyH(d){this.a=d},
bjr:function bjr(d,e){this.b=d
this.a=e},
aOa:function aOa(){},
bA8:function bA8(){},
huK(){var w=$.huI
return w==null?$.huI=$.rk().cWa("assets/data/three.min.js"):w},
huJ(){var w=$.huH
return w==null?$.huH=C.cP5():w},
cP5(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cP5=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.rk().jp(0,"assets/data/body3d.bin"),$async$cP5)
case 3:d=a1
$.huL=J.eE(A.dR.gaU(d),d.byteOffset,d.byteLength)
t=B.a4A(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jK(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dkC[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4u(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b4z))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bco(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cP5,v)},
c6B(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c6B=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.iB(B.a([C.huJ(),C.huK()],x.D),x.K),$async$c6B)
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
return B.i($async$c6B,v)},
aUf:function aUf(d,e,f){this.a=d
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
bco:function bco(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
VF:function VF(d){this.a=d},
aEG:function aEG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
dPq:function dPq(d){this.a=d},
dPp:function dPp(d,e){this.a=d
this.b=e},
dP0:function dP0(d){this.a=d},
dP1:function dP1(d,e){this.a=d
this.b=e},
dP2:function dP2(d){this.a=d},
dP3:function dP3(){},
dPr:function dPr(){},
dP4:function dP4(d,e){this.a=d
this.b=e},
dP5:function dP5(d){this.a=d},
dP6:function dP6(){},
dP7:function dP7(d){this.a=d},
dP9:function dP9(d,e){this.a=d
this.b=e},
dP8:function dP8(d){this.a=d},
dOY:function dOY(d,e,f){this.a=d
this.b=e
this.c=f},
dOZ:function dOZ(d){this.a=d},
dP_:function dP_(d){this.a=d},
dPg:function dPg(d){this.a=d},
dPh:function dPh(d,e){this.a=d
this.b=e},
dPi:function dPi(d,e){this.a=d
this.b=e},
dPj:function dPj(d){this.a=d},
dPf:function dPf(d,e){this.a=d
this.b=e},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPe:function dPe(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dPd:function dPd(d){this.a=d},
dPm:function dPm(d){this.a=d},
dPc:function dPc(d){this.a=d},
dPn:function dPn(d){this.a=d},
dPb:function dPb(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPa:function dPa(d){this.a=d},
aNd:function aNd(){},
aNe:function aNe(){},
c6C:function c6C(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c6D:function c6D(d,e){this.a=d
this.b=e},
c6E:function c6E(d){this.a=d},
aA6(d,e,f,g,h){return new C.bd9(d,e,f,g,h)},
hbR(d,e,f,g,h,i){return $.i36.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cW0(d,e,f,i,g,h))},
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
bd9:function bd9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsz:function fsz(){},
fsA:function fsA(){},
fsB:function fsB(){},
fsI:function fsI(){},
fsJ:function fsJ(){},
fsK:function fsK(){},
VM:function VM(d){this.a=d},
aEI:function aEI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
dR5:function dR5(d){this.a=d},
dQK:function dQK(d,e){this.a=d
this.b=e},
dQN:function dQN(){},
dR6:function dR6(){},
dQI:function dQI(d,e){this.a=d
this.b=e},
dQJ:function dQJ(d,e){this.a=d
this.b=e},
dQO:function dQO(d,e,f){this.a=d
this.b=e
this.c=f},
dQD:function dQD(){},
dQE:function dQE(){},
dQF:function dQF(d){this.a=d},
dQG:function dQG(d,e){this.a=d
this.b=e},
dQH:function dQH(d,e,f){this.a=d
this.b=e
this.c=f},
dQP:function dQP(){},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQR:function dQR(d){this.a=d},
dQM:function dQM(d,e){this.a=d
this.b=e},
dQL:function dQL(d){this.a=d},
dQC:function dQC(d,e,f){this.a=d
this.b=e
this.c=f},
dR_:function dR_(d){this.a=d},
dQZ:function dQZ(d){this.a=d},
dR0:function dR0(d){this.a=d},
dQY:function dQY(d){this.a=d},
dQW:function dQW(d){this.a=d},
dQX:function dQX(d){this.a=d},
dQV:function dQV(d){this.a=d},
dQS:function dQS(d){this.a=d},
dQU:function dQU(d){this.a=d},
dR1:function dR1(d,e){this.a=d
this.b=e},
dR2:function dR2(d,e){this.a=d
this.b=e},
dR3:function dR3(d){this.a=d},
dQT:function dQT(d){this.a=d},
dR4:function dR4(d,e){this.a=d
this.b=e},
bds:function bds(d,e){this.b=d
this.a=e},
cW0:function cW0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNi:function aNi(){},
bzT:function bzT(){},
hUN(){return new C.Og(null)},
Rj(d,e,f,g,h){return new C.bvq(d,e,f,g,h)},
btN(d,e,f){return A.i.D((d-e)/(f-e),0,1)},
hco(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Og:function Og(d){this.a=d},
Lk:function Lk(d,e){this.a=d
this.b=e},
Ba:function Ba(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEZ:function aEZ(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dXh:function dXh(d,e){this.a=d
this.b=e},
dXg:function dXg(d){this.a=d},
dXj:function dXj(d,e){this.a=d
this.b=e},
dXi:function dXi(d){this.a=d},
bvq:function bvq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ft_:function ft_(){},
ft0:function ft0(){},
ft1:function ft1(){},
ft2:function ft2(){},
ft3:function ft3(){},
ft4:function ft4(){},
ft5:function ft5(){},
ft6:function ft6(){},
ft7:function ft7(){},
btO:function btO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8o:function f8o(d){this.a=d},
f8n:function f8n(d,e){this.a=d
this.b=e},
f8l:function f8l(d){this.a=d},
f8p:function f8p(d){this.a=d},
f8m:function f8m(d,e){this.a=d
this.b=e},
age:function age(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
af5:function af5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Rc:function Rc(d,e,f,g,h,i,j,k,l,m){var _=this
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
buO:function buO(d,e){this.b=d
this.a=e},
buj:function buj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bc6:function bc6(d,e){this.b=d
this.a=e},
aJc:function aJc(d,e){this.c=d
this.a=e},
aJd:function aJd(d,e,f){var _=this
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
f84:function f84(d){this.a=d},
f83:function f83(d){this.a=d},
f82:function f82(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f81:function f81(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8_:function f8_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7Z:function f7Z(d,e,f){this.a=d
this.b=e
this.c=f},
f80:function f80(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7Y:function f7Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8c:function f8c(d){this.a=d},
f8b:function f8b(d){this.a=d},
f8d:function f8d(d,e){this.a=d
this.b=e},
f8e:function f8e(d,e){this.a=d
this.b=e},
f8f:function f8f(d,e){this.a=d
this.b=e},
f8a:function f8a(d,e,f){this.a=d
this.b=e
this.c=f},
f8g:function f8g(d,e,f){this.a=d
this.b=e
this.c=f},
f89:function f89(d){this.a=d},
f85:function f85(d){this.a=d},
f8h:function f8h(d){this.a=d},
f8i:function f8i(d){this.a=d},
f88:function f88(d,e){this.a=d
this.b=e},
f8j:function f8j(d,e){this.a=d
this.b=e},
f87:function f87(d,e){this.a=d
this.b=e},
f8k:function f8k(d,e){this.a=d
this.b=e},
f86:function f86(d,e){this.a=d
this.b=e},
f7W:function f7W(){},
f7X:function f7X(){},
btp:function btp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsP:function bsP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcN:function bcN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsR:function bsR(d,e,f){this.b=d
this.c=e
this.a=f},
bwU:function bwU(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aP_:function aP_(){},
hB1(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a2(0,new B.o(w,0)),u=e.aJ(0,new B.o(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a2(0,v.aM(0,s*t*f)).a2(0,u.aM(0,s*f*f)).a2(0,e.aM(0,f*f*f))},
bjq(d,e,f,g,h,i){return $.i3F.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dra(d,e,f,i,g,h))},
a1D:function a1D(d,e){this.a=d
this.b=e},
qt:function qt(d,e,f,g,h){var _=this
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
a_C:function a_C(d,e){this.a=d
this.b=e},
ag2:function ag2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1Q:function a1Q(d,e,f,g,h,i){var _=this
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
acW:function acW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adc:function adc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
af8:function af8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjo:function bjo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dre:function dre(d){this.a=d},
drf:function drf(d){this.a=d},
drb:function drb(d,e){this.a=d
this.b=e},
drc:function drc(d){this.a=d},
drd:function drd(d){this.a=d},
drg:function drg(d){this.a=d},
drh:function drh(d){this.a=d},
dri:function dri(d){this.a=d},
drj:function drj(d){this.a=d},
drk:function drk(d){this.a=d},
drl:function drl(d){this.a=d},
drm:function drm(d){this.a=d},
drn:function drn(d){this.a=d},
dro:function dro(d){this.a=d},
GJ:function GJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xa:function Xa(d){this.a=d},
aGb:function aGb(d,e,f,g,h,i,j){var _=this
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
exW:function exW(d){this.a=d},
exL:function exL(d){this.a=d},
exN:function exN(){},
exO:function exO(){},
exR:function exR(){},
exS:function exS(d,e,f){this.a=d
this.b=e
this.c=f},
exT:function exT(d){this.a=d},
exU:function exU(d){this.a=d},
exP:function exP(){},
exQ:function exQ(d){this.a=d},
eyl:function eyl(d){this.a=d},
exV:function exV(){},
exH:function exH(d){this.a=d},
exY:function exY(d){this.a=d},
exX:function exX(d){this.a=d},
ey_:function ey_(){},
exZ:function exZ(d,e){this.a=d
this.b=e},
exK:function exK(){},
exI:function exI(d){this.a=d},
exJ:function exJ(d){this.a=d},
eyj:function eyj(d){this.a=d},
eyi:function eyi(d){this.a=d},
eyk:function eyk(d){this.a=d},
ey9:function ey9(d,e){this.a=d
this.b=e},
eyh:function eyh(d){this.a=d},
eyf:function eyf(d){this.a=d},
eyg:function eyg(d){this.a=d},
eye:function eye(d){this.a=d},
eyd:function eyd(d){this.a=d},
eya:function eya(d){this.a=d},
eyb:function eyb(d){this.a=d},
eyc:function eyc(d){this.a=d},
exM:function exM(){},
ey5:function ey5(d){this.a=d},
ey6:function ey6(d){this.a=d},
ey4:function ey4(d){this.a=d},
ey7:function ey7(d){this.a=d},
ey3:function ey3(d){this.a=d},
ey8:function ey8(d){this.a=d},
ey2:function ey2(d){this.a=d},
ey1:function ey1(d){this.a=d},
ey0:function ey0(d,e){this.a=d
this.b=e},
bjp:function bjp(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dra:function dra(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aO8:function aO8(){},
hGu(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aJ(0,e).gcK()*0.1
return new B.o((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hlI(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5D(w,v,u,A.cQ,B.T(x.N,x.y))},
hOt(d,e,f){var w=d.c,v=e===0?-1:1
return new B.o(w*f.a+v*C.hlJ(d),d.d*f.b)},
hlJ(d){return 42+(D.ms.al(0,d.b)?(d.ch-1)*38:0)},
eh:function eh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
u_:function u_(d,e,f,g){var _=this
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
abB:function abB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
acI:function acI(d,e,f,g){var _=this
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
bPX:function bPX(){},
bQ7:function bQ7(d){this.a=d},
bQ2:function bQ2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQ8:function bQ8(d){this.a=d},
bQ9:function bQ9(d){this.a=d},
bQb:function bQb(d){this.a=d},
bQc:function bQc(d){this.a=d},
bQa:function bQa(d){this.a=d},
bQd:function bQd(d,e,f){this.a=d
this.b=e
this.c=f},
bQe:function bQe(d){this.a=d},
bPZ:function bPZ(d){this.a=d},
bQ_:function bQ_(d){this.a=d},
bPY:function bPY(d){this.a=d},
bQ0:function bQ0(d,e,f){this.a=d
this.b=e
this.c=f},
bQ1:function bQ1(d){this.a=d},
bPW:function bPW(d){this.a=d},
bQf:function bQf(d,e){this.a=d
this.b=e},
bQ3:function bQ3(d,e){this.a=d
this.b=e},
bQ6:function bQ6(d){this.a=d},
bQ5:function bQ5(d){this.a=d},
bQ4:function bQ4(d){this.a=d},
ak4:function ak4(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bKj:function bKj(){},
bKk:function bKk(){},
mY:function mY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctP:function ctP(d){this.a=d},
isb(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fWv(),c8=new C.fWx(),c9=new C.fWy(),d0=new C.fWw(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.am(w,d0.$3(new B.a1(w.a,w.b,w.c,w.d),A.cd,A.bN))
d2.ah(D.eqx,D.enr,c8.$2(A.e_,1.4))
d2.ah(D.en6,D.en4,c8.$2(A.bw,2.4))
d2.ah(D.en7,U.aLK,c8.$2(A.bw,2.4))
if(c6){d1=c7.$1(A.fI.j(0.5))
d1.y=A.H5
d2.N(D.emN,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.i.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.o(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.am(c9.$4(-22,-26,44,50),d0.$3(D.aRS,A.aS,A.cx))
d2.N(A.cL,16,c7.$1(A.bw))
d2.N(A.cL,13,c7.$1(c6?A.aG.j(0.85):A.a_))
if(c6){d1=d2.c
J.bo(d1.save())
d1.translate(0,4)
d2.hW(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.o(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.i.F(d1+v*0.25,1)
d2.N(new B.o(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.N(D.eqp,2.4,c7.$1(c6?A.bd:A.an))
d2.N(D.erh,2.4,c7.$1(A.an))
return!0
case"blender":d2.am(c9.$5(-14,14,28,12,4),c7.$1(A.cX))
d1=$.S().r
t=x.v
s=new B.aG(d1,A.ai,c5,c5,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bt())
d2.af(s,c7.$1(A.fI.j(0.35)))
if(c6){d1=new B.aG(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(-14,-10))
d1.E(new B.aq(14,-10))
d1.E(new B.aq(12,14))
d1.E(new B.aq(-12,14))
d1.E(new B.bt())
d2.af(d1,c7.$1(A.ay.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.bo(d1.save())
d1.translate(0,10)
d2.hW(0,d3.y)
d2.ah(D.a8H,D.aM6,c8.$2(A.bP,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.N(new B.o(Math.sin(d1+v*2)*9,-10-A.i.F(t+v*0.33,1)*12),2.4,c7.$1(A.eW))
return!0
case"drone":d2.am(c9.$5(-10,-4,20,10,4),c7.$1(A.aM))
d2.N(A.hn,3,c7.$1(c6?A.bd:A.an))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.IJ[p]
d2.ah(new B.o(o*0.4,1),new B.o(o,t),c8.$2(A.bw,3))
J.bo(d1.save())
d1.translate(o,q)
d2.ah(D.eqd,D.enb,c8.$2(A.c.j(c6?0.35:0.9),3))
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
w.E(new B.bt())
d2.af(w,d0.$3(D.f8i,A.aQ,A.d3))
d2.ar(D.f7p,c7.$1(A.d2))
d1=d2.c
J.bo(d1.save())
d1.translate(18,-5)
d2.hW(0,d3.y*2)
d2.ah(A.J,D.eni,c8.$2(A.bP,2.4))
d2.ah(A.a8D,D.enh,c8.$2(A.hH,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.i.F(d1+v*0.25,1)
d2.N(new B.o(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.dC.j(1-u)))}return!0
case"torch":if(c6){v=A.i.D(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,-6))
d1.E(new B.aq(52,-26))
d1.E(new B.aq(52,18))
d1.E(new B.aq(16,4))
d1.E(new B.bt())
d2.af(d1,c7.$1(A.bL.j(0.35*v)))}d2.am(c9.$5(-26,-6,30,12,3),d0.$3(D.f8o,A.bi,A.cl))
n=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bt())
d2.af(n,c7.$1(A.cX))
d2.N(D.enn,7,c7.$1(c6?A.c:A.d2))
return!0
case"neon":d2.am(c9.$5(-30,-14,60,28,6),c7.$1(M.ny))
if(c6)m=d3.ax>0.5||A.o.F(A.i.bh(d4*17),3)!==0
else m=!1
l=m?A.bT:D.brU
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.bT.j(0.35))
t.y=A.mf
d2.am(d1,t)}d2.am(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.eqD,l,17)
return!0
case"microwave":d2.am(c9.$4(-30,-18,60,38),d0.$3(D.f8u,A.bP,A.bi))
d1=c9.$5(-26,-14,38,30,3)
d2.am(d1,c7.$1(c6?A.bL.j(0.75):A.as))
if(c6){d1=d2.c
J.bo(d1.save())
d1.translate(-7,8)
d2.hW(0,d3.y*0.5)
d2.bZ(B.bs(A.J,7,22),c7.$1(A.d3))
d1.restore()}d2.am(c9.$5(15,-14,12,12,2),c7.$1(M.ny))
if(c6)d5.$5(d2,"0:"+A.a.b_(A.o.u(59-A.o.F(A.i.bh(d4),60)),2,"0"),D.eno,A.b4,6.5)
d2.N(D.enE,4,c7.$1(A.d2))
return!0
case"doorbell":d2.am(c9.$5(-16,-26,32,52,8),c7.$1(A.bl))
d2.N(A.JA,10,c7.$1(c6?A.bk:A.bw))
d1=d2.c
J.bo(d1.save())
d1.translate(0,-8)
d2.hW(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.erl,A.c,16)
d1.restore()
d2.N(A.kE,6,c7.$1(A.d7))
d2.N(A.kE,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cC(B.bZ(A.JA,14+v*6+A.i.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bk.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.eqC,D.ere,c8.$2(A.bw,4))
d1=d2.c
J.bo(d1.save())
d2.hW(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.am(c9.$5(-24,-14,46,22,5),d0.$3(D.f8j,A.bP,A.an))
d2.N(D.aLO,8,c7.$1(A.as))
d2.N(D.aLO,4.5,c7.$1(c6?A.aG:A.cl))
d2.N(D.eqA,2.2,c7.$1(c6&&A.o.F(A.i.bh(d4*1.6),2)===0?A.ay:A.kt))
d1.restore()
if(c6)d5.$5(d2,"REC",D.eqL,A.ay,9)
return!0
case"console":d2.am(c9.$5(-28,-22,56,44,8),d0.$3(D.f8r,A.j4,A.fo))
d2.am(c9.$5(-20,-17,40,22,3),c7.$1(A.dF))
if(c6){d1=d4*2.3
d2.N(new B.o(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.ar(new B.a1(-18,t,-15.6,t+8),c7.$1(A.b4))
d1=-9+Math.sin(d1-0.4)*6
d2.ar(new B.a1(15.6,d1,18,d1+8),c7.$1(A.bT))}d2.N(D.eqv,4,c7.$1(A.b6))
d2.N(D.enj,2.4,c7.$1(A.ay))
d2.N(D.enB,2.4,c7.$1(A.bd))
return!0
case"heartmon":d2.am(c9.$5(-30,-22,60,44,6),c7.$1(A.as))
d2.am(c9.$5(-26,-18,52,28,3),c7.$1(A.dF))
if(c6){d1=$.S()
t=B.a([],x.v)
k=new B.aG(d1.r,A.ai,c5,c5,t)
for(d1=d4*0.5,o=-25;o<=25;++o){u=A.i.F((o+25)/50-d1,1)
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
d5.$5(d2,"72",D.enk,A.hr,11)
d1=d4*9
d5.$5(d2,"\u2665",D.eqQ,A.hr.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.N(D.eqF,3,c7.$1(c6?A.bd:A.bw))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.am(d1,c7.$1(A.cD.j(c6?0.5:0.3)))
d2.am(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.ar(D.f8l,c7.$1(F.u8))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.bo(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.pl(0,-1,1)
d2.bZ(B.bs(A.J,8,14),c7.$1(A.cI))
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,0))
d1.E(new B.aq(-12,-4))
d1.E(new B.aq(-12,4))
d1.E(new B.bt())
d2.af(d1,c7.$1(A.c6))
d2.N(D.eom,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.i.F(d1+v*0.2,1)
d2.N(new B.o(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.S().r
t=x.v
g=new B.aG(d1,A.ai,c5,c5,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bt())
d2.af(g,d0.$3(D.f8W,A.c,A.bD))
d2.ar(D.f8S,c7.$1(c6?A.dC:A.bw))
q=new B.aG(d1,A.ai,c5,c5,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bt())
d2.af(q,c7.$1(A.el))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aG(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(0,-19))
t=f*34
d1.E(new B.aq(t,-26))
d1.E(new B.aq(t,-12))
d1.E(new B.bt())
d2.af(d1,c7.$1(A.dC.j(0.45)))
d1=c7.$1(A.dC.j(0.35))
d1.y=A.H5
d2.N(D.emO,14,d1)}return!0
case"discoball":d2.ah(D.emQ,Q.aLF,c8.$2(A.d2,1.4))
d2.N(A.J,16,d0.$3(D.f82,A.aS,A.an))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.o(-16,d1),new B.o(16,d1),c8.$2(A.dx,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.o(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.o(Math.cos(f)*16,0),c8.$2(A.dx,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.N(new B.o(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dlF[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.am(c9.$5(-14,-4,28,24,5),d0.$3(D.f8_,A.cx,A.an))
d2.am(c9.$5(-12,-26,24,20,5),d0.$3(D.f7T,A.bl,A.bN))
d2.ah(H.aLH,D.emS,c8.$2(A.bw,1.6))
d2.N(D.emT,2.2,c7.$1(c6?A.ay:A.bw))
d=c6&&A.i.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a6g[p]
if(c6)d1=d?A.b9:A.eZ
else d1=A.cl
d2.N(new B.o(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.bo(d1.save())
d1.translate(14,0)
d2.hW(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.J,D.a8y,c8.$2(A.bN,4))
d1.restore()
d2.ah(D.eql,D.eqJ,c8.$2(A.bN,4))
d2.ar(D.f8R,c7.$1(c6?A.b9.j(0.7):A.aM))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aCu[p]+1,d1,10,14,2)
q=B.ar(A.bL,A.d3,a0)
q.toString
d2.am(t,c7.$1(q))}d2.am(c9.$5(-24,-6,48,26,8),d0.$3(D.f8k,A.bP,A.bi))
for(p=0;p<2;++p){o=D.aCu[p]
d1=c9.$5(o,-5,12,5,2)
d2.am(d1,c7.$1(c6?A.fq:A.as))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cI.j(0.5))
t.y=N.os
d2.am(d1,t)}}d2.ah(D.enK,D.eo4,c8.$2(A.as,3))
return!0
case"ledstrip":d2.am(c9.$5(-34,-4,68,10,4),c7.$1(A.cl))
for(d1=d4*90,v=0;v<9;++v){a1=A.i.F(d1+v*40,360)
l=c6?new An.pi(1,a1,0.8,1).jd():A.cX
if(c6){t=c7.$1(l.j(0.45))
t.y=N.os
d2.N(new B.o(-30+v*7.5,1),7,t)}d2.N(new B.o(-30+v*7.5,1),2.6,c7.$1(l))}d2.am(c9.$5(-40,-2,6,6,1),c7.$1(A.d2))
return!0
case"pump":d2.am(c9.$5(-16,-2,32,22,6),d0.$3(D.f88,A.cD,A.FV))
d2.N(D.eqR,8,c7.$1(A.rE))
d1=d2.c
J.bo(d1.save())
d1.translate(-2,9)
d2.hW(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.o(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.fI,2.4))}d1.restore()
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,6))
d1.E(new B.aq(26,6))
d1.E(new B.aq(26,-20))
d1.E(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bN,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.N(new B.o(26,6-A.i.F(d1+v*0.2,1)*26),2.2,c7.$1(A.hx))
d2.N(D.ep_,3.2,c7.$1(A.hx.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.bo(d1.save())
d2.hW(0,-0.15)
d2.am(c9.$5(-26,-14,40,22,10),d0.$3(D.f8m,A.i_,A.rD))
d2.am(c9.$5(14,-10,12,14,3),c7.$1(A.cl))
d2.am(c9.$5(-10,6,12,22,4),c7.$1(A.cX))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.i.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.o(24+t,q),new B.o(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cI.j(0.4))
d1.y=N.os
d2.N(D.enD,8,d1)}return!0
case"headphones":d2.cC(B.bs(A.dM,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.bw,4))
for(d1=d4*12,p=0;p<2;++p){o=F.SB[p]
t=o-7
d2.am(c9.$5(t,0,14,20,6),d0.$3(new B.a1(t,0,t+14,20),A.bg,A.nv))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bZ(new B.o(o,10),10+v*5+A.i.F(d1,5))
h=t?2.2:-0.9
d2.cC(q,h,1.6,!1,c8.$2(A.eK.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.o(-4,-8-A.i.F(d4*14,8)),A.kN,12)
return!0
case"smartwatch":d2.am(c9.$5(-8,-30,16,14,3),c7.$1(A.cl))
d2.am(c9.$5(-8,14,16,14,3),c7.$1(A.cl))
d2.am(c9.$5(-14,-17,28,32,8),d0.$3(D.f7Y,A.d2,A.cX))
d2.am(c9.$5(-11,-14,22,26,6),c7.$1(A.dF))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b_(A.o.u(B.dg(a2)),2,"0")+":"+A.a.b_(A.o.u(B.fP(a2)),2,"0"),D.emZ,A.b4,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ar(A.FD,A.hr,j)
d1.toString
d5.$5(d2,"\u2665",new B.o(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.i.bh(d4*2),6)),A.dM,A.c,7)}return!0
case"tablet":d2.am(c9.$5(-30,-22,60,44,6),c7.$1(M.ny))
d2.am(c9.$5(-30,-22,60,44,6),c8.$2(A.bN,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nR(a3),$.np(),!0)
d1.translate(-27,-19)
L.M8(d2,D.ffi,d4,c5)
d1.restore()}else d2.am(a3,c7.$1(D.wc))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.am(a4,d0.$3(new B.a1(a4.a,a4.b,a4.c,a4.d),A.dN,A.da))
d2.am(a4,c8.$2(A.aT,1.2))
d2.N(D.aMd,9,c7.$1(A.as))
d2.N(D.aMd,6,c8.$2(A.d3,2))
d2.am(c9.$5(4,-2,14,10,2),c7.$1(A.as))
d2.am(c9.$5(-22,-19,44,12,2),c7.$1(A.dF))
d1=A.i.ad(d3.db,1)
t=A.i.ad(c6?d3.dx:d3.e,1)
q=c6?A.b4:A.an
d5.$5(d2,d1+"\u2192"+t+"V",D.ep9,q,8.2)
d2.N(D.ens,2.4,c7.$1(c6?A.bd:A.aM))
d5.$5(d2,"IN",D.eqK,A.ab,6)
d5.$5(d2,"OUT",D.eoR,A.ab,6)
return!0
case"regulator":a5=c6?A.i.D(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ar(A.bN,A.ay,a5)
t.toString
d2.am(d1,c7.$1(t))
d2.N(H.a8w,3,c7.$1(A.aM))
d2.am(c9.$5(-12,-4,24,18,3),d0.$3(D.f7U,A.cX,A.i9))
d5.$5(d2,"7805",D.a8H,A.ab,8)
for(p=0;p<3;++p){d1=D.dsa[p]-1
d2.ar(new B.a1(d1,14,d1+2,22),c7.$1(A.e1))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.i.F(d1+v*0.33,1)
d2.N(new B.o(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.eri,A.bq,9)
return!0
case"diode":d2.ah(D.aMh,D.aM0,c8.$2(A.e1,2.4))
d2.am(c9.$5(-14,-7,28,14,6),c7.$1(A.av.j(0.85)))
d2.ar(D.f7D,c7.$1(A.bq))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.dC.j(0.4))
t.y=A.kU
d2.am(d1,t)}d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,-4))
d1.E(new B.aq(-8,4))
d1.E(new B.aq(-1,0))
d1.E(new B.bt())
d2.af(d1,c7.$1(A.b6))
d5.$5(d2,"one way",D.eqy,A.aD,8)
return!0
case"ldr":d2.ah(D.aMh,D.a8H,c8.$2(A.e1,2.4))
d2.ah(D.aM6,D.aM0,c8.$2(A.e1,2.4))
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
d1=B.ar(A.bw,A.dC,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.o(-6,-26),d1,14)
d5.$5(d2,""+A.i.V(20+980*(1-d3.f))+"\u03a9",D.eqm,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.eq
break
case"sonytv":t=A.rx
break
case"appletv":t=A.e1
break
default:t=F.FG
break}a7=d1==="lgtv"||d1==="appletv"
d2.am(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=c9.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c6){h=d2.c
J.bo(h.save())
h.clipRRect(B.nR(a3),$.np(),!0)
h.translate(t,q)
L.hhH(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1)
h.restore()
d2.N(D.eo7,1.6,c7.$1(A.b4))}else{d2.am(a3,c7.$1(D.wc))
h=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bt())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.am(c9.$5(-22,19,44,3,1.5),c7.$1(A.d2))
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
h=new B.bt()
q.push(h)
q=t.f
if(q!=null)h.ak(q)
t.ab()
d2.af(t,c7.$1(A.d2))}d5.$5(d2,"SONY",D.epO,A.bP,5.5)
break
case"appletv":d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,18))
d1.E(new B.aq(8,18))
d1.E(new B.aq(12,25))
d1.E(new B.aq(-12,25))
d1.E(new B.bt())
d2.af(d1,c7.$1(D.Zl))
d5.$5(d2,"Apple TV",D.epa,A.bw,4.8)
break
default:d2.am(c9.$5(-34,19,68,7,3),c7.$1(D.bqb))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.o(d1,20),new B.o(d1,25),c8.$2(A.dx,0.6))}d5.$5(d2,"B&O",D.erd,F.u8,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.ms.h(0,d1)
b0=a9.b===D.Ew
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
d2.am(w,d0.$3(new B.a1(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.bo(t.save())
t.clipRRect(B.nR(a3),$.np(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.M8(d2,new B.av(a3.c-q,a3.d-h),d4,c5)
t.restore()}else d2.am(a3,c7.$1(D.wc))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.o(0,t),new B.o(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.am(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.N(new B.o(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.am(c9.$5(-17,-28,34,52,4),c7.$1(A.cX))
d2.am(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bP))
if(c6){d5.$5(d2,"NGMY",D.ero,A.as,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.ar(new B.a1(-11,d1,-11+t,d1+1.4),c7.$1(A.bi))}d2.N(A.a8u,1.6,c7.$1(A.as))}return!0
case"laptop":d2.am(c9.$5(-30,-28,60,42,4),d0.$3(D.f8v,A.cx,A.bi))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nR(b7),$.np(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.M8(d2,new B.av(b7.c-t,b7.d-q),d4,c5)
d1.restore()}else d2.am(b7,c7.$1(D.wc))
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-38,16))
d1.E(new B.aq(38,16))
d1.E(new B.aq(34,21))
d1.E(new B.aq(-34,21))
d1.E(new B.bt())
d2.af(d1,c7.$1(D.Zl))
d2.am(c9.$5(-7,16,14,2,1),c7.$1(A.bi))
return!0
case"imac":d2.am(c9.$5(-32,-28,64,46,5),d0.$3(D.f8z,A.cd,A.cx))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nR(b8),$.np(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.M8(d2,new B.av(b8.c-t,b8.d-q),d4,c5)
d1.restore()}else d2.am(b8,c7.$1(D.wc))
d2.N(D.aLA,2,c7.$1(A.bN))
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,18))
d1.E(new B.aq(6,18))
d1.E(new B.aq(10,26))
d1.E(new B.aq(-10,26))
d1.E(new B.bt())
d2.af(d1,c7.$1(D.Zl))
return!0
case"monitor":d2.am(c9.$5(-34,-28,68,40,3),c7.$1(A.eq))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nR(b9),$.np(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.M8(d2,new B.av(b9.c-t,b9.d-q),d4,c5)
d1.restore()}else d2.am(b9,c7.$1(D.wc))
d2.ar(D.f8G,c7.$1(A.bi))
d2.am(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.d2))
return!0
case"projector":if(c6){d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(14,4))
d1.E(new B.aq(-32,-42))
d1.E(new B.aq(34,-42))
d1.E(new B.bt())
d2.af(d1,c7.$1(A.dC.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nR(c0),$.np(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.M8(d2,new B.av(c0.c-t,c0.d-q),d4,c5)
d1.restore()}d2.am(c9.$5(-26,-4,52,24,6),d0.$3(D.f8n,A.hZ,A.d2))
d2.N(D.aLM,7,c7.$1(A.as))
d2.N(D.aLM,4,c7.$1(c6?A.dC:A.cl))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.o(d1,2),new B.o(d1,14),c8.$2(A.dx,1))}return!0
case"carscreen":d2.am(c9.$5(-34,-10,68,32,12),c7.$1(A.as))
c1=c9.$5(-30,-20,60,28,8)
d2.am(c1,c7.$1(M.ny))
d2.am(c1,c8.$2(A.bw,1.2))
if(c6){c2=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
c2.E(new B.aZ(-26,4))
c2.E(new B.c6(-10,-14+Math.sin(d4)*3,6,-6))
c2.E(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aG,2.2))
d1=A.i.F(d4*6,48)
d2.N(new B.o(-26+d1,4-d1*0.1),2.4,c7.$1(A.b4))
d5.$5(d2,""+(88+A.o.F(A.i.bh(d4*2),5)),H.aM5,A.c,10)
d5.$5(d2,"km/h",D.eoY,A.aD,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.am(c3,d0.$3(new B.a1(c3.a,c3.b,c3.c,c3.d),A.d2,A.cX))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nR(c4),$.np(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.M8(d2,new B.av(c4.c-t,c4.d-q),d4,c5)
d1.restore()
d1=c7.$1(A.bg.j(0.2))
d1.y=A.mf
d2.N(A.J,26,d1)}else d2.am(c4,c7.$1(A.a_))
d2.ah(D.eqY,D.er2,c8.$2(A.bi,4))
d2.ah(D.eo9,D.eop,c8.$2(A.bi,4))
return!0}return!1},
fWv:function fWv(){},
fWx:function fWx(){},
fWy:function fWy(){},
fWw:function fWw(){},
hkz(d,e,f,g){return new C.ak2(d,g,f,e)},
Gt(d,e,f){return new C.bda(d,e,f)},
ak2:function ak2(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ak3:function ak3(d,e,f,g,h,i,j,k,l,m){var _=this
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
bJY:function bJY(d,e){this.a=d
this.b=e},
bJZ:function bJZ(d){this.a=d},
bJX:function bJX(d){this.a=d},
bK_:function bK_(){},
bK0:function bK0(d){this.a=d},
bK1:function bK1(d,e,f){this.a=d
this.b=e
this.c=f},
bJW:function bJW(d,e){this.a=d
this.b=e},
bJT:function bJT(d,e){this.a=d
this.b=e},
bJU:function bJU(d,e,f){this.a=d
this.b=e
this.c=f},
bJN:function bJN(d,e){this.a=d
this.b=e},
bJO:function bJO(){},
bJV:function bJV(d,e,f){this.a=d
this.b=e
this.c=f},
bJS:function bJS(d,e){this.a=d
this.b=e},
bJP:function bJP(d,e){this.a=d
this.b=e},
bJQ:function bJQ(d,e){this.a=d
this.b=e},
bJR:function bJR(d){this.a=d},
bKg:function bKg(d){this.a=d},
bKh:function bKh(){},
bJq:function bJq(){},
bKi:function bKi(d,e){this.a=d
this.b=e},
bKf:function bKf(d,e,f){this.a=d
this.b=e
this.c=f},
bKa:function bKa(d){this.a=d},
bK7:function bK7(d,e,f){this.a=d
this.b=e
this.c=f},
bK8:function bK8(d,e){this.a=d
this.b=e},
bKb:function bKb(d){this.a=d},
bK5:function bK5(d,e){this.a=d
this.b=e},
bK6:function bK6(d,e){this.a=d
this.b=e},
bK9:function bK9(d){this.a=d},
bKc:function bKc(d){this.a=d},
bK3:function bK3(d,e){this.a=d
this.b=e},
bK4:function bK4(d,e){this.a=d
this.b=e},
bKd:function bKd(d){this.a=d},
bK2:function bK2(d){this.a=d},
bKe:function bKe(d){this.a=d},
bJr:function bJr(d,e){this.a=d
this.b=e},
bJK:function bJK(d,e){this.a=d
this.b=e},
bJM:function bJM(d,e){this.a=d
this.b=e},
bJL:function bJL(d,e){this.a=d
this.b=e},
bJx:function bJx(d,e){this.a=d
this.b=e},
bJy:function bJy(d){this.a=d},
bJw:function bJw(d){this.a=d},
bJz:function bJz(d,e,f){this.a=d
this.b=e
this.c=f},
bJv:function bJv(d,e){this.a=d
this.b=e},
bJC:function bJC(d,e){this.a=d
this.b=e},
bJD:function bJD(d,e){this.a=d
this.b=e},
bJE:function bJE(d,e){this.a=d
this.b=e},
bJF:function bJF(d,e,f){this.a=d
this.b=e
this.c=f},
bJu:function bJu(d,e){this.a=d
this.b=e},
bJG:function bJG(d,e,f){this.a=d
this.b=e
this.c=f},
bJt:function bJt(d,e){this.a=d
this.b=e},
bJH:function bJH(d,e,f){this.a=d
this.b=e
this.c=f},
bJs:function bJs(d,e){this.a=d
this.b=e},
bJI:function bJI(d){this.a=d},
bJJ:function bJJ(d){this.a=d},
bJA:function bJA(d){this.a=d},
bJB:function bJB(d){this.a=d},
bda:function bda(d,e,f){this.a=d
this.b=e
this.c=f},
fsL:function fsL(){},
fsM:function fsM(){},
fsN:function fsN(){},
fsy:function fsy(){},
fsO:function fsO(){},
fsx:function fsx(){},
fsP:function fsP(){},
fsC:function fsC(){},
fsw:function fsw(){},
fsD:function fsD(){},
fsv:function fsv(){},
fsE:function fsE(){},
fsu:function fsu(){},
fsF:function fsF(){},
fss:function fss(){},
fst:function fst(){},
fsG:function fsG(){},
fsq:function fsq(){},
fsr:function fsr(){},
fsH:function fsH(){},
fsp:function fsp(){},
Wn:function Wn(d){this.a=d},
aFa:function aFa(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e15:function e15(d,e){this.a=d
this.b=e},
e1e:function e1e(d){this.a=d},
e1f:function e1f(){},
e1g:function e1g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1h:function e1h(){},
e14:function e14(d){this.a=d},
e13:function e13(d,e,f){this.a=d
this.b=e
this.c=f},
e12:function e12(d,e){this.a=d
this.b=e},
e10:function e10(d){this.a=d},
e11:function e11(){},
e1d:function e1d(d){this.a=d},
e1c:function e1c(d){this.a=d},
e1a:function e1a(d,e){this.a=d
this.b=e},
e18:function e18(d){this.a=d},
e19:function e19(){},
e1b:function e1b(d,e,f){this.a=d
this.b=e
this.c=f},
e16:function e16(d,e){this.a=d
this.b=e},
e17:function e17(){},
e1j:function e1j(d){this.a=d},
e1k:function e1k(d,e){this.a=d
this.b=e},
e1i:function e1i(){},
e1l:function e1l(d,e){this.a=d
this.b=e},
e1m:function e1m(d){this.a=d},
e1n:function e1n(d){this.a=d},
azc:function azc(d,e){this.c=d
this.a=e},
bbi:function bbi(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
cLo:function cLo(d){this.a=d},
bbh:function bbh(d,e){this.b=d
this.a=e},
cLn:function cLn(d){this.a=d},
azx:function azx(){},
azy:function azy(){},
aLF:function aLF(){},
bzW:function bzW(){},
isd(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bZ(A.vt,23)
$.S()
b8=B.K()
b8.r=A.as.gp(0)
b9.N(A.vt,25,b8)
b8=B.K()
b8.sav(D.eA5.aK(0,v))
b9.N(A.vt,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.bq.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.o(b8*17,s*17-2),new B.o(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.i.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.K()
r.r=A.bD.gp(0)
r.c=2
r.d=A.bu
b9.ah(A.vt,new B.o(b8*18,s*18-2),r)
r=B.K()
r.r=A.bq.gp(0)
b9.N(A.vt,3,r)
c2.$5(b9,w?"V":"A",D.er5,A.bq,12)
c2.$5(b9,w?A.i.ad(o,1)+" V":""+A.i.V(o*1000)+" mA",D.eqs,A.as,9.5)
return!0
case"fan":b8=B.bn(D.f7Q,A.hU)
$.S()
s=B.K()
s.r=A.bw.gp(0)
b9.am(b8,s)
s=B.K()
s.r=A.an.gp(0)
b9.ar(D.f8H,s)
s=B.K()
s.r=A.a_.j(0.6).gp(0)
b9.N(H.vu,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bo(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bs(A.aLE,18,10)
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=A.hx.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.bZ(s,r)
b8.restore()}b8=B.K()
b8.r=A.br.gp(0)
b9.N(H.vu,4,b8)
b8=B.K()
b8.b=A.a9
b8.c=2
b8.r=A.cx.gp(0)
b9.N(H.vu,22,b8)
b8=B.K()
b8.b=A.a9
b8.c=0.8
b8.r=A.jZ.gp(0)
b9.N(H.vu,14,b8)
return!0
case"speaker":n=B.bn(D.aRS,A.r3)
$.S()
b8=B.K()
b8.sav(D.at8.aK(0,new B.a1(n.a,n.b,n.c,n.d)))
b9.am(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.K()
b8.sav(D.eAq.aK(0,B.bZ(A.cC,15)))
b9.N(A.cC,14+m,b8)
b8=B.K()
b8.r=A.d2.gp(0)
b9.N(A.cC,5,b8)
b8=B.K()
b8.r=A.bi.gp(0)
b9.N(H.a8v,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bZ(D.enJ,6+u*6+A.i.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=1.8
r.r=A.bT.j(0.9-u*0.2).gp(0)
b9.cC(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bn(D.f8y,A.r3)
$.S()
b8=B.K()
b8.sav(D.c8C.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
b8=B.bn(D.aRU,A.iE)
s=B.K()
s.r=A.i9.gp(0)
b9.am(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FN(k)<500?":":" "
i=A.a.b_(A.o.u(B.dg(k)),2,"0")
h=A.a.b_(A.o.u(B.fP(k)),2,"0")
b8=B.K()
b8.r=A.b4.j(0.12).gp(0)
b9.ar(D.aRU,b8)
c2.$5(b9,i+j+h,D.eqO,A.b4,21)}b8=B.K()
b8.r=A.cx.gp(0)
b9.N(D.eqM,2.4,b8)
b8=B.K()
b8.r=A.cx.gp(0)
b9.N(D.enO,2.4,b8)
return!0
case"calculator":l=B.bn(D.f8d,A.hV)
$.S()
b8=B.K()
b8.sav(D.c8m.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
b8=B.bn(D.f86,A.hB)
s=B.K()
s.r=(b7?A.Zz:D.bsv).gp(0)
b9.am(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eqr,A.Yf,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bn(new B.a1(r,b8,r+6,s),A.Uu)
$.S()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=(f===3?A.c6:A.bP).gp(0)
b9.am(r,q)}return!0
case"phone":l=B.bn(D.f81,A.hV)
$.S()
b8=B.K()
b8.r=M.ny.gp(0)
b9.am(l,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.9
b8.r=D.akl.gp(0)
b9.am(l,b8)
e=B.bn(D.f7S,A.hU)
if(b7){b8=B.K()
b8.sav(D.c9V.aK(0,new B.a1(e.a,e.b,e.c,e.d)))
b9.am(e,b8)
b8=b9.c
J.bo(b8.save())
b8.clipRRect(B.nR(e),$.np(),!0)
b8.translate(-12,-25)
L.M8(b9,D.feV,c1,b6)
b8.restore()
d=A.i.F(c1*0.12,1)
b8=B.bn(D.f7P,A.hB)
s=B.K()
s.r=A.b6.gp(0)
b9.am(b8,s)
s=B.K()
s.r=A.b4.gp(0)
b9.ar(new B.a1(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.i.V(d*100)+"%",D.epu,A.c,6)}else{b8=B.K()
b8.r=D.wc.gp(0)
b9.am(e,b8)}b8=B.bn(D.f8X,D.eAy)
s=B.K()
s.r=A.w.gp(0)
b9.am(b8,s)
return!0
case"router":l=B.bn(D.f8x,A.mv)
$.S()
b8=B.K()
b8.sav(D.c8T.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
for(a0=0;a0<2;++a0){a1=F.SB[a0]
b8=a1<0?-4:4
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.cl.gp(0)
s.c=4
s.d=A.bu
b9.ah(new B.o(a1,-4),new B.o(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.i.bh(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b8.r=(a2?A.bd:A.aM).gp(0)
b9.N(new B.o(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bZ(H.vu,8+u*6+A.i.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=1.8
r.r=A.hv.j(0.9-u*0.2).gp(0)
b9.cC(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bn(D.f8c,A.hU)
s=$.S()
r=B.K()
r.r=A.cX.gp(0)
b9.am(b8,r)
if(b7){b8=B.K()
b8.r=A.ay.j(0.5*a3).gp(0)
b8.y=A.wu
b9.N(A.vt,34,b8)}a4=new B.aG(s.r,A.ai,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.c6(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bt())
b8=B.K()
b8.r=B.ar(A.el,D.bjj,a3).gp(0)
b9.af(a4,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.4
b8.r=A.bW.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bo(b8.save())
b8.translate(0,-2)
b9.hW(0,c1*7)
s=B.K()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.a8v,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bo(b8.save())
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
l.E(new B.bt())
q=B.K()
q.sav(D.c6X.aK(0,D.f8q))
b9.af(l,q)
q=new B.aG(s,A.ai,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bt())
p=B.K()
p.r=A.fI.gp(0)
b9.af(q,p)
r=new B.aG(s,A.ai,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bt())
s=B.K()
s.r=A.fI.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aCv[a0]
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.as.gp(0)
b9.N(new B.o(a1,10),7.5,s)
J.bo(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.J,new B.o(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.i.F(b8+u*8,14)
r=-4+u*5
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.aD.gp(0)
q.c=1.6
b9.ah(new B.o(-34-s,r),new B.o(-42-s,r),q)}return!0
case"kettle":b8=$.S().r
s=x.v
l=new B.aG(b8,A.ai,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.c6(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bt())
r=B.K()
r.sav(D.c81.aK(0,D.f8b))
b9.af(l,r)
r=new B.aG(b8,A.ai,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bt())
q=B.K()
q.r=A.e1.gp(0)
b9.af(r,q)
s=new B.aG(b8,A.ai,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.c6(-34,-6,-18,12))
b8=B.K()
b8.b=A.a9
b8.c=5
b8.r=A.as.gp(0)
b9.af(s,b8)
b8=B.K()
if(b7){s=B.ar(A.cI,A.um,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cX
b8.r=s.gp(0)
b9.ar(D.f8a,b8)
if(b7){b8=B.K()
b8.r=A.cI.j(0.3).gp(0)
b8.y=A.mf
b9.N(A.aLC,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.i.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.N(new B.o(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.K()
b8.r=A.as.gp(0)
b9.N(D.emM,3,b8)
return!0
case"lamp":if(b7){u=A.i.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aG($.S().r,A.ai,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bt())
s=B.K()
s.r=A.dC.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.K()
s.r=A.dC.j(0.5*u).gp(0)
s.y=T.Oq
b9.N(D.eqS,24,s)}b8=B.bn(D.f8Q,A.hU)
s=$.S()
r=B.K()
r.r=A.cX.gp(0)
b9.am(b8,r)
r=B.K()
r.r=A.d2.gp(0)
r.c=3
r.d=A.bu
b9.ah(D.en1,D.aLP,r)
r=B.K()
r.r=A.d2.gp(0)
r.c=3
r.d=A.bu
b9.ah(D.aLP,D.eqT,r)
a7=new B.aG(s.r,A.ai,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bt())
s=B.K()
s.r=(b7?A.aQ:A.ku).gp(0)
b9.af(a7,s)
b8=B.K()
b8.r=(b7?A.c:A.bi).gp(0)
b9.N(D.eqW,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
a8=new B.aG(b8,A.ai,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.c6(0,22,34,-6))
r=B.K()
r.b=A.a9
r.c=2
r.r=A.hu.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.i.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b1.r=D.a5i[u].j(0.6).gp(0)
b1.y=A.H5
b9.N(new B.o(q+0,p+6),12,b1)}b1=B.a([],s)
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
q=new B.c6(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.bt()
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
if(b0)p=D.a5i[u]
else{p=B.ar(D.a5i[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.isb(b9,c0,c1,c2)},
fQ:function fQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hfK(d){var w=D.ms.h(0,d)
return(w==null?null:w.b)===D.Az},
its(d,e,f){return B.a6(d,!1).ce(B.vk(null,!1,!0,!0,new C.h0w(e,f),A.eT,null,A.pl,new C.h0x(),x.H))},
Kj:function Kj(d,e){this.a=d
this.b=e},
mx:function mx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h0w:function h0w(d,e){this.a=d
this.b=e},
h0x:function h0x(){},
W6:function W6(d,e,f){this.c=d
this.d=e
this.a=f},
blY:function blY(d,e){var _=this
_.d=$
_.e=null
_.bw$=d
_.a9$=e
_.c=_.a=null},
dYf:function dYf(d){this.a=d},
dYe:function dYe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYc:function dYc(){},
dYd:function dYd(d){this.a=d},
dYb:function dYb(d){this.a=d},
dYa:function dYa(d,e){this.a=d
this.b=e},
dY9:function dY9(d,e){this.a=d
this.b=e},
dY8:function dY8(d){this.a=d},
dY7:function dY7(d){this.a=d},
dY3:function dY3(d){this.a=d},
dY2:function dY2(d){this.a=d},
dY6:function dY6(d,e,f){this.a=d
this.b=e
this.c=f},
dY5:function dY5(d){this.a=d},
dY4:function dY4(d){this.a=d},
bxY:function bxY(d,e,f){this.b=d
this.c=e
this.a=f},
afW:function afW(d,e,f){this.b=d
this.c=e
this.a=f},
aNt:function aNt(){},
a29(d,e,f,g,h,i){return new C.bwK(d,e,f,g,h,i)},
bwK:function bwK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ftf:function ftf(){},
ftg:function ftg(){},
fth:function fth(){},
fti:function fti(){},
ftj:function ftj(){},
ftk:function ftk(){},
ftl:function ftl(){},
ftm:function ftm(){},
a9z:function a9z(d){this.a=d},
cmH:function cmH(d){this.a=d},
cmI:function cmI(){},
cmG:function cmG(d,e){this.a=d
this.b=e},
cmF:function cmF(d){this.a=d},
XI:function XI(d){this.a=d},
aGE:function aGE(d,e,f,g,h,i,j,k){var _=this
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
eUG:function eUG(d){this.a=d},
eUC:function eUC(d){this.a=d},
eUB:function eUB(d,e){this.a=d
this.b=e},
eUE:function eUE(d,e){this.a=d
this.b=e},
eUD:function eUD(d,e){this.a=d
this.b=e},
eUF:function eUF(d){this.a=d},
by9:function by9(d,e,f){this.b=d
this.c=e
this.a=f},
Wv:function Wv(d){this.a=d},
bm8:function bm8(d,e,f,g,h,i){var _=this
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
e44:function e44(){},
e45:function e45(){},
e4_:function e4_(d,e){this.a=d
this.b=e},
e41:function e41(d,e){this.a=d
this.b=e},
e42:function e42(d){this.a=d},
e40:function e40(d){this.a=d},
e43:function e43(d){this.a=d},
bsQ:function bsQ(d,e,f){this.b=d
this.c=e
this.a=f},
VG:function VG(d){this.a=d},
blH:function blH(d,e,f,g,h,i){var _=this
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
dPx:function dPx(){},
dPy:function dPy(){},
dPs:function dPs(){},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPw:function dPw(d){this.a=d},
dPt:function dPt(d){this.a=d},
aK4:function aK4(d,e,f){this.a=d
this.b=e
this.c=f},
Wm:function Wm(d){this.a=d},
bm_:function bm_(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e0A:function e0A(d,e){this.a=d
this.b=e},
e0B:function e0B(d){this.a=d},
e0z:function e0z(d,e){this.a=d
this.b=e},
e0C:function e0C(d){this.a=d},
e0y:function e0y(d,e){this.a=d
this.b=e},
e0D:function e0D(d){this.a=d},
e0x:function e0x(d,e){this.a=d
this.b=e},
e0E:function e0E(d,e){this.a=d
this.b=e},
e0w:function e0w(d,e){this.a=d
this.b=e},
e0F:function e0F(d){this.a=d},
e0v:function e0v(d,e){this.a=d
this.b=e},
e0G:function e0G(d){this.a=d},
e0u:function e0u(d){this.a=d},
e0H:function e0H(d){this.a=d},
e0t:function e0t(d){this.a=d},
e0I:function e0I(d){this.a=d},
e0J:function e0J(d){this.a=d},
e0s:function e0s(d){this.a=d},
bo1:function bo1(d,e,f){this.b=d
this.c=e
this.a=f},
X5:function X5(d){this.a=d},
aFY:function aFY(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
erv:function erv(d,e){this.a=d
this.b=e},
erw:function erw(d,e,f){this.a=d
this.b=e
this.c=f},
eru:function eru(d,e,f){this.a=d
this.b=e
this.c=f},
erx:function erx(d){this.a=d},
ert:function ert(d){this.a=d},
erB:function erB(d){this.a=d},
erA:function erA(d,e){this.a=d
this.b=e},
erz:function erz(d,e){this.a=d
this.b=e},
erC:function erC(d,e){this.a=d
this.b=e},
ery:function ery(d,e){this.a=d
this.b=e},
erD:function erD(d){this.a=d},
Xf:function Xf(d){this.a=d},
aGi:function aGi(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eCh:function eCh(d){this.a=d},
eCi:function eCi(d){this.a=d},
eCf:function eCf(d,e){this.a=d
this.b=e},
eCg:function eCg(d){this.a=d},
eCe:function eCe(d){this.a=d},
eCj:function eCj(d){this.a=d},
eCk:function eCk(d){this.a=d},
eCl:function eCl(d){this.a=d},
eCm:function eCm(d,e){this.a=d
this.b=e},
Xz:function Xz(d){this.a=d},
bnf:function bnf(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eQ9:function eQ9(){},
eQi:function eQi(){},
eQe:function eQe(d){this.a=d},
eQd:function eQd(){},
eQf:function eQf(d,e){this.a=d
this.b=e},
eQc:function eQc(d,e){this.a=d
this.b=e},
eQg:function eQg(d){this.a=d},
eQb:function eQb(d,e){this.a=d
this.b=e},
eQh:function eQh(d){this.a=d},
eQa:function eQa(d){this.a=d},
X4:function X4(d){this.a=d},
bmK:function bmK(d,e,f,g,h,i,j,k){var _=this
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
eqa:function eqa(){},
eqb:function eqb(){},
eq3:function eq3(d){this.a=d},
eq2:function eq2(d){this.a=d},
eq4:function eq4(d){this.a=d},
eq1:function eq1(d){this.a=d},
eq5:function eq5(d){this.a=d},
eq0:function eq0(d){this.a=d},
eq6:function eq6(d,e){this.a=d
this.b=e},
eq_:function eq_(d,e){this.a=d
this.b=e},
eq7:function eq7(d){this.a=d},
epZ:function epZ(d,e){this.a=d
this.b=e},
eq8:function eq8(d){this.a=d},
epY:function epY(d,e){this.a=d
this.b=e},
eq9:function eq9(d){this.a=d},
epX:function epX(d,e){this.a=d
this.b=e},
bfz:function bfz(d,e,f){this.c=d
this.d=e
this.a=f},
aNf:function aNf(){},
bzS:function bzS(){},
aNA:function aNA(){},
bzY:function bzY(){},
aO2:function aO2(){},
bA6:function bA6(){},
aOt:function aOt(){},
bAf:function bAf(){},
JQ(d,e,f,g){var w,v,u,t,s,r,q,p=$.aty
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.J)(e),++w)E.mv(d,e[w],f,g)
return}for(p=B.cW(e,0,B.dB(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bR(p,p.gI(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mv(d,s,f,g)
else B.bQ(new B.bd(1000*q),new C.cmD(d,s,f,g),u)}},
ckb(d){return C.hXQ(d)},
hXQ(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ckb=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$ckb)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
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
return B.i($async$ckb,v)},
b3e(d,e){return C.hXR(d,e)},
hXR(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b3e=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3e)
case 6:s=g
w=7
return B.b(s.aC("String","ngmy_play_progress_v1_"+d,A.X.aw(e,null)),$async$b3e)
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
return B.i($async$b3e,v)},
cmD:function cmD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iio(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.J)(w),++q){p=w[q]
u.push(B.I(["k",p.b,"x",B.oo(A.i.ad(p.c,4)),"y",B.oo(A.i.ad(p.d,4)),"v",p.e,"l",B.oo(A.i.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oo(A.i.ad(p.as,3)),"ch",p.at,"vc",B.oo(A.i.ad(p.z,3)),"s",B.oo(A.i.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.J)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a4(f).k("ch.E"))
A.d.ff(l)
return A.X.aw(B.I(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
isC(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
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
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.qE().al(0,s)){J.c7(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u_(a2,d,a0,a1)
a3.as8(a2,d,a0,a1)
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
d=B.k5(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k5(J.t(t,"b"))
r.x=d===!0
d=B.aV(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aJ(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aJ(J.t(t,"ch"))
r.at=A.i.M(d==null?0:d)
d=B.aJ(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aJ(J.t(t,"s"))
r.ch=A.i.D(d==null?1:d,1,5.2)
J.c7(v,r)}i=g.a(J.t(w,"wires"))
i=J.aT(i==null?A.cr:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=B.aJ(J.t(p,0))
o=f==null?a5:A.i.M(f)
f=B.aJ(J.t(p,2))
n=f==null?a5:A.i.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.am4(m,A.i.M(B.dD(J.t(p,1))),l,A.i.M(B.dD(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.i.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aT(h==null?A.cr:h)
while(h.C()){j=h.gR(h)
J.c7(k,A.i.M(B.dD(j)))}return new B.br_(i,k)}catch(a4){return a5}},
fKg(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fKg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aA(),$async$fKg)
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
return B.i($async$fKg,v)},
bGA(d){return C.iuf(d)},
iuf(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bGA=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aA(),$async$bGA)
case 7:w=6
return B.b(f.aC("String","ngmy_electronics_lab_v1",d),$async$bGA)
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
return B.i($async$bGA,v)}},D,H,Am,X,An,Y,A3,Ao
J=c[1]
B=c[0]
A=c[2]
A4=c[120]
Z=c[161]
A_=c[147]
A5=c[153]
A0=c[151]
S=c[144]
A6=c[137]
A7=c[155]
A8=c[164]
A1=c[107]
A9=c[139]
A2=c[119]
N=c[146]
Aa=c[162]
Ab=c[154]
Ac=c[157]
Ad=c[76]
T=c[142]
O=c[131]
U=c[85]
Ae=c[88]
Af=c[135]
V=c[145]
W=c[156]
E=c[29]
K=c[3]
G=c[38]
I=c[109]
Ag=c[103]
Ah=c[163]
P=c[160]
Ai=c[102]
Aj=c[158]
R=c[132]
Ak=c[159]
Q=c[149]
Al=c[26]
L=c[28]
F=c[100]
M=c[98]
C=a.updateHolder(c[18],C)
D=c[141]
H=c[143]
Am=c[67]
X=c[150]
An=c[57]
Y=c[111]
A3=c[152]
Ao=c[148]
C.alg.prototype={}
C.WP.prototype={
S(){return new C.bmy(B.T(x.N,x.i),new B.au(A.ax,$.ax()),B.a([],x.X),B.a([],x.eZ),B.mZ(0,null,null))}}
C.bmy.prototype={
gX2(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
this.ch.t()
this.a3()},
PP(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.js()
p.bP(0,A.cf)
t.m(new C.ejh(t))
t.a.toString
p=t.gX2()
w=3
return B.b(C.bC8(C.i5P(q,C.ii9(p),o,t.ay)),$async$PP)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=C.ijG(q,p,o)
if(t.c==null){w=1
break}t.m(new C.eji(t,o,r))
$.aW.x1$.push(new C.ejj(t))
case 1:return B.h(u,v)}})
return B.i($async$PP,v)},
Z8(d){return this.c3g(d)},
aYy(){return this.Z8(null)},
c3g(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Z8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.js()
t.f.sb1(0,o)
t.m(new C.eju(t))
G.dE(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bC8(C.idc(o)),$async$Z8)
case 3:r=n.a=m.ish(f)
p.b=""
if(r!=null&&!C.iia(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.ijH(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.alg(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ejv(p,t))
t.c8R(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Z8,v)},
c8R(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gX2()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.ejq(m))
t=d.d
s=B.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ejo(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ejr(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.J)(r),++u){p.$2(o,new C.ejs(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ejt(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bg.j(0.1),g=B.m(16),f=B.L(A.bg.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fgs,A.bc,B.E(B.d(m.Q,l,l,l,l,l,l,A.AL,l,l,l),1)],x.p),A.l,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fHx
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.VM,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fry,l,l,l)],v),A.l,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uw,B.d(u,l,l,l,l,l,l,D.fup,l,l,l),l))
w.push(A.cS)
w.push(B.d(k.b,l,l,l,l,l,l,I.EP,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.m(10)
w.push(B.q(l,B.d(u,l,l,l,l,l,l,D.fx_,l,l,l),A.f,l,l,new B.p(t,l,l,s,l,l,A.n),l,l,l,A.i0,A.cn,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lW,l,l,l)
q=u[r]
s=s?A.c:A.aD
w.push(new B.D(A.NU,new B.c8(A.aL,A.e,A.j,A.E,l,A.p,l,0,B.a([t,A.bo,new B.by(1,A.bb,B.d(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.J)(j),++p){o=j[p]
t=A.bg.j(0.3)
s=new B.aN(12,12)
s=B.q(l,B.d(o.a,l,l,l,l,l,l,A.Vs,l,l,l),A.f,l,l,new B.p(t,l,l,new B.be(s,s,s,s),l,l,A.n),l,l,l,l,A.hg,l,l,l)
t=A.c.j(0.07)
q=new B.aN(12,12)
A.d.v(w,B.a([A.T,new B.bL(A.aa,l,l,s,l),A.aw,B.q(l,B.d(o.b,l,l,l,l,l,l,D.fCO,l,l,l),A.f,l,l,new B.p(t,l,l,new B.be(q,q,q,q),l,l,A.n),l,l,l,l,A.bV,l,l,l)],v))}if(m.ax)w.push(D.eso)
j=B.ce(B.x(w,A.E,l,A.e,A.j,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.aju(B.q(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.p(h,l,f,g,l,l,A.n),l,l,l,D.bCh,A.eH,l,l,1/0),A.b_,A.iy),B.E(C.hkz(m.gX2(),l,l,m.e),1)],w),A.l,l,A.e,A.j,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dW("Ask about it",i,new C.ejy(m),l,A.bg,l),new E.dW("Invent something new",!i,new C.ejz(m),l,A.bg,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.duu[p]
i.push(new E.dW(n,!1,new C.ejA(m,n),l,A.bg,l))}f.push(new E.fb(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dcm[p]
i.push(new E.dW(r,!1,new C.ejB(m,r),l,A.bg,l))}f.push(new E.fb(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.m(16),A.a1),l,A.f_,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kj,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ejC(m,k),l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.dk,!0,A.a5,l,A.ao,l,A.Vg,l,l),1)
h=m.at
v=h&&j?D.bSe:A.ed
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.af,new E.fC(v,j,new C.ejD(m,k),A.bg,l)],w),A.l,l,A.e,A.j,0,l,l))
return E.lA(A.bg,A.f7,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.P,0,A.p))}}
C.GY.prototype={}
C.vr.prototype={}
C.Xb.prototype={
S(){return new C.aGc(A.J,A.J,A.az,B.aR(x.S),$,A.bF,0,B.a([],x.X),null,null)}}
C.aGc.prototype={
gaZR(){var w,v,u,t=this,s=D.It[t.cx],r=D.SD[t.cy],q=D.Dw[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dZ(w,w.r,B.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aAM[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cG(p,0,new C.eyB())},
ga3y(){return D.It[this.cx].d/this.gaZR()},
gaQN(){return 0.1*(D.It[this.cx].d/0.9)/D.SD[this.cy].d},
Y(){this.a4()
this.mh()
C.ckb("rocket_lander").bG(new C.eyV(this),x.k)},
c9_(){var w=this
w.ay=A.i.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cQ.ai()*0.6
w.f=new B.o(0.15+A.cQ.ai()*0.7,0.08)
w.r=new B.o((A.cQ.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mz(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.eyW())
return}w=D.tf[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.i.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.o(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3y()
v=v.a2(0,new B.o(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaQN())}if(m.dy){t=m.r
v=v.aJ(0,t.aM(0,t.gcK()*6*D.aCP[m.d]))}t=m.r=m.r.a2(0,v.aM(0,d))
s=m.f=m.f.a2(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.o(-t.a*0.4,t.b)
t=new B.o(A.i.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.o(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Dw[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b3e("rocket_lander",B.I(["unlocked",t],x.N,x.z))
C.JQ("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3y()/(D.tf[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.i.ad(m.ga3y()/(D.tf[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dE(80,"",500,0,0.6,"noise")
B.fL()}}if(m.Q&&m.x>0&&A.o.F(A.i.bh(m.CW*20),2)===0)G.dE(90,"",70,0,0.12,"noise")
m.m(new C.eyX())},
ah8(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.ftT,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dW(e[w].a,f.$1(w),new C.eyD(this,g,w),v,h,v))
return new B.D(A.eO,B.x(B.a([u,A.cS,B.bW(A.bH,s,A.bs,v,6,6)],t),A.E,v,A.e,A.j,0,A.p),v)},
bI1(d){var w,v,u,t,s=this,r=null,q=s.ga3y()/(D.tf[s.d].b/9.81*0.28)>=1,p=A.i.V(1/s.gaQN()),o=D.aCP[s.d],n=B.m(24),m=d.c,l=B.L(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.aw,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.abj,r,r,r),A.W,s.ah8("ENGINE: "+D.It[s.cx].b,D.It,new C.eys(s),new C.eyt(s),A.cI),s.ah8("FUEL TANK: "+D.SD[s.cy].b,D.SD,new C.eyu(s),new C.eyv(s),A.b4),s.ah8("LANDING GEAR: "+D.Dw[s.db].b,D.Dw,new C.eyw(s),new C.eyx(s),A.aG),s.ah8("EXTRAS (tap to add)",D.aAM,new C.eyy(s),new C.eyz(s),A.bg)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.h_r)
o=(q?A.b4:A.c0).j(0.14)
w=B.m(12)
v=A.i.ad(s.gaZR(),2)
u=A.i.ad(s.ga3y()/(D.tf[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.i.V(D.Dw[s.db].d*100)+".",r,r,r,r,r,r,D.fuy,r,r,r),A.f,r,r,new B.p(o,r,r,w,r,r,A.n),r,r,r,A.i0,A.bV,r,r,r))
m.push(A.W)
m.push(new B.bL(A.A,r,r,new E.fC(A.oF,"Launch",new C.eyA(s),A.b4,r),r))
return B.as(B.q(r,B.ce(B.x(m,A.E,r,A.e,A.P,0,A.p),A.t,r,A.y,r,A.bS,r,r,A.ah),A.f,r,A.m0,new B.p(D.bs1,r,l,n,r,r,A.n),r,r,r,A.bV,r,r,r,r),r,r,r)},
b01(d,e,f,g){var w=null,v=f?A.cI:A.c.j(0.1),u=B.m(18),t=B.L(A.aT,A.r,1)
return B.mP(A.iQ,B.q(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eyp(e),new C.eyq(e),w,w,w,w,new C.eyr(e))},
b00(d,e,f){return this.b01(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cq(new C.eyO(s,D.tf[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tf[w].a:"\ud83d\udd12"
o.push(new E.dW(v,s.d===w,new C.eyP(s,w),r,D.tf[w].c,r))}v=B.a([s.b00(F.aqp,new C.eyQ(s),s.y),A.bc,s.b01(A.wG,new C.eyR(s),s.Q,130),A.bc,s.b00(A.PH,new C.eyS(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aG:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.bc,B.az(r,B.q(r,D.bWq,A.f,r,r,new B.p(u,r,B.L(A.aT,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eyT(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lA(A.cI,A.f7,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fb(o,"WORLD",r),B.A(v,A.l,r,A.ba,A.j,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.bjr.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tf[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.S(),f=B.K(),e=l.c,d=B.ar(K.a_6,e,0.25)
d.toString
f.sav(new B.a8(A.b1,A.b7,A.x,B.a([F.ahi,d],x.O),n,n).aK(0,new B.a1(0,0,i,h)))
a0.ar(new B.a1(0,0,i,h),f)
w=new B.e2()
w.cY(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.N(new B.o(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
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
t.E(new B.bt())
h=$.S()
g=B.K()
g.r=B.ar(e,A.w,0.6).gp(0)
a0.af(t,g)
q=B.bs(new B.o(m.ax*k,u+10),8,m.ay*k)
g=B.bn(q,A.iE)
e=B.K()
e.r=A.bd.gp(0)
a0.am(g,e)
e=B.bn(q.cn(2),A.mv)
g=B.K()
g.b=A.a9
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.am(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bo(f.save())
f.translate(g.a*k,g.b*j)
a0.hW(0,m.w)
k=m.as
if(k==="crashed"){m=B.K()
m.r=A.cI.j(0.6).gp(0)
m.y=T.Oq
a0.N(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aG(k,A.ai,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bt())
m=B.K()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aG(k,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bt())
m=B.K()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aG(m,A.ai,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.c6(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.c6(-14,-10,0,-26))
o.E(new B.bt())
k=B.K()
k.sav(D.c8v.aK(0,D.f7Z))
a0.af(o,k)
k=B.K()
k.r=A.aG.gp(0)
a0.N(H.vu,5,k)
k=new B.aG(m,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bt())
j=B.K()
j.r=A.ay.gp(0)
a0.af(k,j)
i=new B.aG(m,A.ai,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bt())
m=B.K()
m.r=A.ay.gp(0)
a0.af(i,m)
f.restore()},
aD(d){return!0}}
C.aOa.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA8.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bzW()}}
C.aUf.prototype={}
C.a4u.prototype={}
C.bco.prototype={}
C.VF.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eA(["skin"],x.N),o=new Float32Array(0)
return new C.aEG(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.LQ,D.LQ,A.az,A.cQ,o,new Int32Array(0),$,A.bF,0,B.a([],x.X),null,null)}}
C.aEG.prototype={
Y(){var w=this
w.a4()
w.mh()
w.as=new C.c6C(w.gchT())
new C.dPq(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.byY()},
chU(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fa(0,B.I(["t","init","data",$.huL],x.N,x.z))
v.at=!0
v.ay=""
v.aAX()
break
case"parts":v.m(new C.dP0(v))
break
case"pick":v.m(new C.dP1(v,d))
break
case"shot":v.aj2(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dP2(v))
break}},
aAX(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ayC[q.cx]
v=new C.dP3()
u=q.ch
u=B.C(u,B.a4(u).k("ch.E"))
A.d.ff(u)
t=x.N
s=B.I(["layers",u,"skinMode",q.CW,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cy,"bpm",A.i.V(q.k4),"spin",q.go],t,x.cK)
r=A.X.aw(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.fa(0,u)}},
aj2(d){return this.cyT(d)},
cyT(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aj2=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cM.aN(A.a.b2(d,A.a.co(d,",")+1))
w=6
return B.b(B.awZ(B.a([B.cGz(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aj2)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.T(K.aUc)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aj2,v)},
aAl(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mz(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.i.bh(w)!==A.i.bh(v.p1)){E.XB("kick",0,0.4)
v.UI(170,new C.dPr())}v.p1=w
return},
aeG(d){var w,v,u,t,s=this
s.m(new C.dP4(s,d))
if(d==null){s.fy=D.LQ
s.fr=1
w=s.as
if(w!=null)w.fa(0,B.I(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dP5(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.J(0,t)
if(s.CW===2)s.CW=1}s.aAX()
w=s.as
if(w!=null)w.fa(0,B.I(["t","focus","group",d],x.N,x.z))
s.id=0
s.cBm(t,d)
return},
cBm(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.XB("kick",0,0.8)
this.UI(260,new C.dP6())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dE(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UI(w*70,new C.dP7(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dE(110,"",360,0.7,0.3,"saw")
else E.ha0("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dE(210+e.length*4,"",80,0.6,0.55,"tri")
G.dE(2400,"",20,0,0.3,v)
break
case"muscle":G.dE(70,"",150,1,0.6,"sine")
break
case"vessel":G.dE(300,"",380,0.4,0.22,v)
E.XB("kick",0,0.3)
break
default:E.ha0("organic",2+A.o.F(e.length,6),200,0.4)}},
cG0(d){this.m(new C.dP9(this,d))},
b0j(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(p.aAl(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=B.C(o,o.$ti.k("ch.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.az(w)]
p.R8=""},
bZW(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dOY(u,w,d))
v=x.t
C.JQ("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UI(1100,new C.dOZ(u))
return}if(d==null){if(u.cy!=null)u.aeG(null)
return}u.aeG(d)},
c2y(d,e){var w,v=this,u=null,t=B.m(18),s=B.L(A.bT.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fpV,u,u,u)}else if(d==null||e==null)w=D.fEW
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hq,u,u,u),A.cS,B.d(e.b,u,u,u,u,u,u,I.EP,u,u,u)],w),A.E,u,A.e,A.P,0,A.p),1),B.aI(u,u,u,u,D.bYZ,u,u,u,new C.dP_(v),u,u,u,u,"Back to the whole body",A.cg)],w),A.E,u,A.e,A.j,0,u,u)}return B.q(u,w,A.f,u,u,new B.p(K.Yo,u,s,t,u,u,A.n),u,u,u,u,S.alO,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dFJ.h(0,g)
i.aAX()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dmI
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.J)(v),++s){r=v[s]
if(i.aAl(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,K.oI,h,h,h,new C.dPg(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bM:B.BZ(h,A.pO,p))}p=i.ax
o=p?0:1
q.push(new B.du(p,B.zn(B.q(A.A,B.x(D.dw3,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.b7_,h,h,D.hry,h,h,h,h,h),A.b_,A.mV,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b0,A.t,q,h),1),new B.D(F.a0c,i.c2y(g,f),h)],v),A.l,h,A.e,A.j,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.ddZ[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dW(l,o,new C.dPh(i,n),n.c,A.bT,h))}p=B.a([new E.fb(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.J)(w),++s){k=w[s]
o.push(new E.dW(k,k===i.cy,new C.dPi(i,k),h,A.aQ,h))}p.push(new E.fb(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iP(A.c0,""+A.i.V(o)+" beats/min","Heart rate",180,40,new C.dPj(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G6(D.ayC[j],i.cx===j,new C.dPk(i,j),!1,h))
p.push(new E.fb(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dW("Spin",o,new C.dPl(i),D.api,A.aG,h),new E.fC(A.oA,"Reset view",new C.dPm(i),A.c,h),new E.dW(l,m,new C.dPn(i),A.HL,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.dW("Heartbeat sound",i.ok,new C.dPo(i),A.oE,A.c0,h))
p.push(new E.fb(v,h,h))
return E.lA(A.bT,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.P,0,A.p))}}
C.aNd.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aNe.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.byX()}}
C.c6C.prototype={
kX(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hB0
$.hB0=v+1
u="ngmy-body-viewer-"+v
$.xu()
$.pY().pe(u,new C.c6D(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fB(v,"message",new C.c6E(t),!1,x.gA)
t.b=u},
fa(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Rw(w.contentWindow)
if(w!=null)J.ajj(w,e,"*")}}catch(v){}}}
C.yL.prototype={}
C.D3.prototype={}
C.nL.prototype={}
C.bd9.prototype={}
C.VM.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aEI(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.J,A.J,B.aR(u),$,A.bF,0,B.a([],x.X),null,null)}}
C.aEI.prototype={
Y(){var w=this
w.a4()
w.mh()
w.adE()
$.aW.x1$.push(new C.dR5(w))},
adE(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adE=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$adE)
case 6:q=e.tU("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dQK(s,r))
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
return B.i($async$adE,v)},
ae_(d){return this.c6w(d)},
c6w(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ae_=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return B.b(B.aA(),$async$ae_)
case 6:r=f
q=s.cx
p=B.a4(q).k("k9<ch.E,n>")
q=B.C(new B.k9(q,new C.dQN(),p),p.k("M.E"))
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
return B.i($async$ae_,v)},
ayZ(d,e,f,g){var w="c"+this.y++,v=new C.D3(w,e,f,g)
this.d.n(0,w,v)
return v},
mP(d,e,f){return this.ayZ(0,e,f,0)},
acZ(d,e){var w
if(D.A7.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a2(0,new B.o(-36,w))},
uk(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aUY(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fb$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cXO[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uk(p,0)&&n.uk(p,1)
break
case"or":p=q.a
o=n.uk(p,0)||n.uk(p,1)
break
case"xor":p=q.a
o=n.uk(p,0)!==n.uk(p,1)
break
case"nand":p=q.a
o=!(n.uk(p,0)&&n.uk(p,1))
break
case"nor":p=q.a
o=!(n.uk(p,0)||n.uk(p,1))
break
case"not":o=!n.uk(q.a,0)
break
default:o=n.uk(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bSp(){return this.aUY(null)},
mz(d){var w,v,u,t,s,r,q,p,o,n=this
n.bSp()
if(!n.ax)return
for(w=n.d,w=new B.b7(w,B.a4(w).k("b7<2>")).gae(0),v=new B.eH(w,new C.dR6()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fb$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fb$)
o=s+1
G.dE(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
az_(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
mi(d,e){var w=this.x
return new B.o(d*w.a,e*w.b)},
av9(d){var w=this
if(w.x.A(0,A.az)){$.aW.x1$.push(new C.dQI(w,d))
return}w.m(new C.dQJ(w,d))},
cBE(d){this.m(new C.dQO(this,d,$.bGW()[d]))},
cbi(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bGW()[a0]
v=d.d
u=B.a4(v).k("b7<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b7(v,u),new C.dQD(),t),s)
A.d.aZ(r,new C.dQE())
q=B.C(new B.Y(new B.b7(v,u),new C.dQF(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dQG(d,w))
return}u=d.r
p=B.dO(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dw(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.ha(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aUY(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lz(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aO(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new C.dQH(d,o,a0))},
azR(d){var w,v,u,t,s=this.d,r=B.a4(s).k("b7<2>")
s=B.C(new B.b7(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bR(s,s.gI(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ckk(d){var w,v,u,t,s,r=this.d,q=B.a4(r).k("b7<2>")
r=B.C(new B.b7(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bR(r,r.gI(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c2r(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.A7.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.acZ(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bR8(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.acZ(p,o)
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
cbk(d){var w,v,u,t=this,s=t.azR(d)
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
t.m(new C.dQP())
return}u=t.bR8(d)
if(u!=null)t.m(new C.dQQ(t,u))
else t.m(new C.dQR(t))},
axN(d){return this.c5v(d)},
c5v(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$axN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.azR(d)
if(s==null){w=1
break}B.jY()
t.m(new C.dQM(t,s))
case 1:return B.h(u,v)}})
return B.i($async$axN,v)},
bDQ(d){if(this.x.A(0,A.az))return
this.m(new C.dQC(this,d,A.cQ))
B.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bGW()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.X(i.ax?A.oE:V.ta,A.ab,h,h,h,21),h,h,h,new C.dR_(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cv.j(0.14)
r=B.L(A.cv.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fp2,h,h,h),B.d(w.b,h,h,h,h,h,h,A.VG,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.li,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.b4:A.eW,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.j,0,A.p),1),B.bJ(D.fQu,h,i.gcbh(),B.bp(A.cv,h,h,h,h,h,h,h,h,h,h,A.cg))],g),A.l,h,A.e,A.j,0,h,h),A.f,h,h,new B.p(s,h,r,t,h,h,A.n),h,h,h,U.O2,D.bD_,h,h,1/0))}u.push(B.E(B.cq(new C.dR0(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.d(D.A7.h(0,r).a+": "+D.A7.h(0,r).e,h,h,h,h,h,h,A.tM,h,h,h),A.f,h,h,new B.p(s,h,h,t,h,h,A.n),h,h,h,A.a0g,A.bV,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.j,0,A.p)
t=B.a([],g)
for(s=D.A7.gdO(D.A7),s=s.gae(s);s.C();){r=s.gR(s)
q=new B.aN(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.az(h,B.q(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bG,B.d(p.a,h,h,h,h,h,h,D.aWc,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.p(n,h,new B.bH(m,m,m,m),new B.be(q,q,q,q),h,h,A.n),h,h,h,A.fC,Ai.O_,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dR1(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dre[l]
s.push(new E.fC(A.PI,k.b,new C.dR2(i,k),A.cv,h))}s.push(new E.fC(K.wD,"Clear",new C.dR3(i),A.c0,h))
r=B.a([],g)
for(j=0;q=$.bGW(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ee:A.lM
o=i.ay
n=i.cx.q(0,j)?A.b4:A.bk
r.push(new E.dW(q.a,o===j,new C.dR4(i,j),p,n,h))}return E.lA(A.cv,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fb(t,"PARTS",h),new E.fb(s,"TRY",h),new E.fb(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bds.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.S()
w=B.K()
w.r=D.afD.gp(0)
a5.ar(new B.a1(0,0,0+a3,0+a4),w)
v=B.K()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.N(new B.o(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.J)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.acZ(l,o.c)
h=s.h(0,n)===!0
n=$.S()
g=B.a([],r)
f=new B.aG(n.r,A.ai,a2,a2,g)
g.push(new B.aZ(j,k))
f.ab()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.km(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.ak(n)
f.ab()
if(h){n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=9
n.r=A.bk.j(0.28).gp(0)
n.y=N.os
a5.af(f,n)}n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=3.2
n.d=A.bu
n.r=(h?A.dC:A.bw).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a2(0,D.JC)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aG($.S().r,A.ai,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.km(a4+e,w,a3-e,s,a3,s))
s=B.K()
s.b=A.a9
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.cbj(a5,a3.d)},
cbj(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.A7.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bs(a0.c,64,64)
s=B.bn(t,A.jN)
r=w.cy===v
q=s.eQ(A.cC)
$.S()
p=B.K()
p.r=A.w.j(0.55).gp(0)
p.y=A.mf
d.am(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.K()
p.sav(new B.bY(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aK(0,B.bZ(a0.c,52)))
d.N(q,52,p)}q=s.eQ(A.cL)
p=B.K()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.am(q,p)
n=u?0.35:0
q=B.K()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sav(new B.a8(A.b1,A.b7,A.x,B.a([p,m],x.O),g,g).aK(0,t))
d.am(s,q)
q=B.K()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.am(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.py:D.bSK}else l=e.b
k=C.hbR(B.lz(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aJ(0,new B.o(p/2,q.gba(q)/2)))
j=C.hbR(e.a,10.5,A.c,g,g,A.I)
j.a5(d,a0.c.a2(0,new B.o(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hbR(f,9,u?A.dC:A.bW,g,g,A.u)
i.a5(d,a0.c.a2(0,new B.o(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b0Y(d,w.acZ(a0,h),o)
this.b0Y(d,a0.c.a2(0,D.JC),o)},
b0Y(d,e,f){var w
$.S()
w=B.K()
w.r=D.afD.gp(0)
d.N(e,8.5,w)
w=B.K()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.N(e,8.5,w)
w=B.K()
w.r=A.c.gp(0)
d.N(e,3.2,w)},
aD(d){return!0}}
C.aNi.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzT.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bz1()}}
C.Og.prototype={
S(){return new C.aEZ(B.mZ(0,null,null))}}
C.Lk.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.Ba.prototype={}
C.aEZ.prototype={
Y(){this.a4()
B.bQ(A.qw,C.iqD(),x.H)},
cbp(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new C.dXh(w,e))},
c4k(){var w=this
w.e.t()
w.e=B.mZ(w.f,null,null)
w.m(new C.dXg(w))},
t(){this.e.t()
this.a3()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.P(d).ax.a===A.dm?A.c:A.c3
return B.oO(t,B.c4(v,s,t?new C.btO(w.e,w.gcbo(w),new C.dXi(d),v):new C.aJc(u,new B.bA(u.b,x.Y)),v,!1,!1,v,!1),new C.dXj(w,u),x.K)}}
C.bvq.prototype={}
C.btO.prototype={
b0Z(d,e,f){var w=null,v=B.d(d,w,w,w,w,w,w,B.l(w,w,f?A.bB:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(S.a0I,B.x(B.a([v,A.bG,B.d(e,w,w,w,w,w,w,B.l(w,w,f?A.cA:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.P(d).ax.a===A.dm,q=B.aF(d,A.dS,x.l).w,p=B.aI(s,s,s,s,B.X(A.eM,r?A.bB:A.ab,s,s,s,20),s,s,D.hrR,t.e,s,s,s,s,s,s)
if(r)w=new B.p(A.c,s,s,B.m(14),A.Iw,s,A.n)
else{w=B.a([A.aG.j(0.22),A.aG.j(0.06)],x.O)
v=B.m(14)
w=new B.p(s,s,B.L(A.aG.j(0.75),A.r,1.6),v,B.a([new B.ab(0,A.G,A.aG.j(0.22),A.J,8)],x.V),new B.a8(A.aA,A.aF,A.x,w,s,s),A.n)}v=B.d("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bB:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.as(B.q(s,B.x(B.a([v,B.d("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cA:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.hrW,s,A_.amj,s,s,s),s,s,s),1),A.tE],u),A.l,s,A.e,A.j,0,s,s)
v=t.b0Z("STUDIOS","Play, make things, and keep what you make",r)
$.bGX()
return B.bm(!1,B.x(B.a([B.E(B.w7(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nI(new B.R(8,q.r.b+6,8,4),new B.m3(w,s),s),new B.m3(v,s),new B.nI(A.i1,B.PV(new B.oR(new C.f8o(d),9,!0,!0,!0,0,B.tr(),s),D.aU1),s),new B.m3(t.b0Z("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nI(D.bD8,B.PV(new B.oR(new C.f8p(t),6,!0,!0,!0,0,B.tr(),s),D.aU1),s)],u)),1)],u),A.l,s,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!1)}}
C.age.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.P(d).ax.a===A.dm){w=B.m(20)
v=(A.o.aq(o.c,3)&1)===0
u=B.a7t(v?A.aG:A.bg,20)
v=v?A.aG:A.bg
return B.aH(!1,A.a3,!0,n,B.aP(!1,w,!0,B.ez(B.x(B.a([new B.VK(v,44,m.c,n,n),A.T,B.d(m.a,n,2,A.a2,n,n,n,D.fvg,A.K,n,n),A.cS,B.d(m.b,n,2,A.a2,n,n,n,D.fy6,A.K,n,n)],x.p),A.l,n,A.ba,A.j,0,A.p),n,u,n,A.Cv,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj)}w=B.m(20)
v=B.m(20)
u=B.ar(I.m7,l,0.3)
u.toString
t=x.O
u=B.a([u,D.aiS],t)
s=B.L(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ab(-4,A.G,l.j(0.22),A.J,14)],r)
p=B.ar(l,A.w,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ab(0,A.G,l.j(0.5),A.J,12)],r)
return B.aH(!1,A.a3,!0,n,B.aP(!1,w,!0,B.ez(B.x(B.a([B.q(n,B.X(m.c,A.c,n,n,n,24),A.f,n,n,new B.p(n,n,n,n,r,new B.a8(A.aA,A.aF,A.x,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.T,B.d(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cS,B.d(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.ba,A.j,0,A.p),n,new B.p(n,n,s,v,q,new B.a8(A.aA,A.aF,A.x,u,n,n),A.n),n,A.Cv,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj)}}
C.af5.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.P(d).ax.a===A.dm,h=(A.o.aq(this.c,3)&1)===0?A.aG:A.bg,g=B.m(20)
if(i)w=B.a7t(h,20)
else{w=B.m(20)
v=B.ar(I.m7,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.aiS],x.O)
v=new B.p(l,l,B.L(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ab(0,A.G,A.w.j(0.4),A.cC,12)],x.V),new B.a8(A.aA,A.aF,A.x,v,l,l),A.n)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aN(6,6)
if(i){n=B.ar(h,A.c,0.1)
n.toString
n=B.a([n,B.VL(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gan(j)],r)
m=i?l:B.a([new B.ab(0,A.G,A.w.j(0.45),A.a8F,0)],s)
u.push(B.q(l,B.X(t[q],A.c,l,l,l,11),A.f,l,l,new B.p(l,l,l,new B.be(o,o,o,o),m,new B.a8(A.a7,A.aa,A.x,n,l,l),A.n),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.P,0,A.p)
if(i)t=A.bB
else{t=B.ar(A.d.gH(j),A.d.gan(j),0.4)
t.toString}t=B.d(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aH(!1,A.a3,!0,l,B.aP(!1,g,!0,B.ez(B.x(B.a([new B.a5(58,l,u,l),A.W,t,A.aw,B.X(A.D9,i?B.VL(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.ba,A.j,0,A.p),l,w,l,A.Cv,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj)}}
C.Rc.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gan(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,new B.bN(new B.p(h,j,j,B.m(22),j,j,A.n),A.bj,j,j),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ab(0,A.G,A.w.j(0.55),A.Jz,26),new B.ab(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.m(22)
p=B.ar(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gan(i)
i=B.ar(A.d.gan(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bN(new B.p(j,j,j,j,j,new B.a8(A.aA,A.aF,A.x,B.a([p,o,n,i],m),D.dx2,j),A.n),A.bj,j,j),0,0,0),B.ap(j,new B.bN(new B.p(j,j,j,j,j,new B.a8(A.b1,A.b7,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bj,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b2(j,j,j,new C.buO(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.L(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ab(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.q(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.p(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fro,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.aw,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Kr)
p.push(B.q(j,j,A.f,j,j,new B.p(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.h6,B.A(B.a([s,A.ew,B.E(B.x(p,A.E,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.du(!0,B.e9(j,A.w.j(A.i.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.m(22)
m.push(B.bS(0,new B.du(!0,new B.bN(new B.p(j,j,B.L(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bj,j,j),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ac,A.f,B.a([h,B.bS(0,new B.bN(new B.p(j,j,j,u,r,j,A.n),A.bj,B.bw(q,new B.an(A.a0,j,A.ac,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.buO.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a1(r,-10,s,w)
u=d.c
J.bo(u.save())
u.translate(v.gbx().a,v.gbx().b)
d.hW(0,0.35)
t=B.bs(A.J,(w- -10)*1.6,s-r)
$.S()
s=B.K()
s.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aK(0,t))
d.ar(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.buj.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.bpV,D.ahW],x.O),t=this.e,s=B.L(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ab(0,A.G,A.w.j(0.5),A.kE,24)],x.V),q=B.m(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,new B.bN(new B.p(w,w,s,v,r,new B.a8(A.aA,A.aF,A.x,u,w,w),A.n),A.bj,B.bw(q,B.b2(B.as(B.X(A.jI,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bc6(p,w),A.az),A.aq),w),w)}}
C.bc6.prototype={
a5(d,e){var w,v,u,t,s,r
$.S()
w=B.K()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.o(s,0),new B.o(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.o(0,r),new B.o(u,r),w)
u=e.ei(A.J)
$.S()
t=B.K()
t.b=A.a9
t.c=1.4
t.r=v.j(0.35).gp(0)
d.N(u,30,t)},
aD(d){return!1}}
C.aJc.prototype={
S(){return new C.aJd(new B.cw(null,x.A),null,null)}}
C.aJd.prototype={
guK(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,D.bAn,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
ga_x(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.h4,null,1,null,v)
w.f2(0,!0)
v.e!==$&&B.bE()
v.e=w
u=w}return u},
gaz0(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcbm(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaYg(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaZ3(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb9P(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a4()
var w=this.guK()
w.dl()
w.dV$.J(0,this.gcBn())},
cBo(){var w,v,u,t,s,r,q,p=this,o=p.guK().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaz0().a){case 0:w=D.nP
break
case 1:w=D.vd
break
case 2:w=D.a5l
break
case 3:w=D.nP
break
case 4:w=D.djp
break
case 5:w=D.vd
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.adl)r=0.09
else r=s===D.adm?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dE(260+90*v,"",260,1.6,0.18,"tri")
u=D.cb4[v]
E.mv("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JQ("bell",D.cjU,1400,0.35)}}p.ax=o},
t(){this.guK().t()
this.ga_x().t()
this.bAS()},
af5(){var w=this
w.guK().d0x(0,B.dw(0,0,0,A.i.V(11e3/w.Q),0,0))
w.m(new C.f84(w))},
cmn(){this.guK().bQ(0)
this.m(new C.f83(this))},
af4(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$af4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaZ3(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b5,A.aP),$.ax()))}m=B.a([],m)
for(t=u.gb9P(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b5,A.aP),$.ax()))}o=B.C(u.gaYg(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(I.m7,null,new C.f82(u,l,m,o),t,!0,!0,!0,A.lT,!1,!1,x.H),$async$af4)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.ax()
n.P$=0}return B.h(null,v)}})
return B.i($async$af4,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaz0(),f=i.a.c,e=f.b,d=i.gcbm(),a0=new C.Ba(g,e,f.c,d,i.gaYg(),i.gaZ3(),i.gb9P())
f=B.ar(A.d.gH(d),A.d.gan(d),0.4)
f.toString
g=x.p
w=B.a([B.aI(h,h,h,h,B.X(i.at?A.oE:V.ta,A.ab,h,h,h,21),h,h,h,new C.f8c(i),h,h,h,h,"Sound",h),B.aI(h,h,h,h,D.c1D,h,h,h,i.gcbn(),h,h,h,h,"Edit words and pictures",h),B.aI(h,h,h,h,K.oI,h,h,h,new C.f8d(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c5(i.ga_x(),new C.f8e(i,a0),h),B.cq(new C.f8f(i,a0))],g)
u=i.as
t=u?i.gcmm():i.gcbq()
u=u?D.bS1:A.t9
s=B.ar(A.d.gH(d),A.d.gan(d),0.4)
s.toString
t=B.A(B.a([B.aI(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cg),B.E(B.c5(i.guK(),new C.f8g(i,a1,a0),h),1),B.aI(h,h,h,h,D.bYP,h,h,h,new C.f8h(i),h,h,h,h,"Replay",A.cg)],g),A.l,h,A.e,A.j,0,h,h)
s=i.Q
u=A.i.ad(s,1)
r=B.ar(A.d.gH(d),A.d.gan(d),0.4)
r.toString
s=E.iP(r,u+"x","Speed",2.5,0.4,new C.f8i(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.du4[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gH(d),A.d.gan(d),0.4)
r.toString
u.push(new E.dW(p.b,o===p.a,new C.f8j(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.cbt[q]
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
d.push(B.az(h,B.q(h,h,A.f,h,h,new B.p(h,h,new B.bH(j,j,j,j),h,h,new B.a8(A.aA,A.aF,A.x,n,h,h),A.a6),h,l,h,K.all,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f8k(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lA(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.en(new B.an(A.a0,h,A.b0,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fb(u,"STYLE",h),new E.fb(d,"THEME",h)],g),A.l,h,A.e,A.P,0,A.p))},
bD0(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nP[r]
p=A.i.D((1-A.e2.aA(0,A.i.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.i.D(p/1.5707963267948966,0,1)
q=D.nP[r]
n=q+0.12
m=A.i.D((a0-n)/(q+0.2-n),0,1)
n=D.nP[r]
q=n-0.01
q=A.i.D((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kn(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nP[r]
h=i+0.1
if(A.i.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nP[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nP[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cK(0,r*118,0,f,f,f,new B.kH(q,new B.iR(n,f,A.b1,!0,f,new C.Rc(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nP[r]
u=v-0.02
g=A.i.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nP[r]
t=v+0.12
e.push(new B.cK(0,r*118-3-2,0,f,f,4,new B.mJ(new C.btp(u,g,1-A.i.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ac,A.f,e,f),f)},
bTZ(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vd[r]
p=A.qu.aA(0,A.i.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vd[r]
m=q+0.15
l=A.i.D((a0-m)/(q+0.25-m),0,1)
m=D.vd[r]
q=m-0.03
q=A.i.D((a0-q)/(m+0.01-q),0,1)
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
g=new C.Rc(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fL(3.141592653589793)
k=new B.iR(k,f,A.A,!0,f,new C.buj(a2,108,w,f),f)}e.push(new B.cK(0,r*130,0,f,f,f,new B.kH(q,new B.iR(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ac,A.f,e,f),f)},
cGv(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a5l[w]
l.push(A.cw.aA(0,A.i.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b2(n,n,n,new C.bwU(d.d,l,D.aAl,m,C.btN(e,0.4,0.62),f,C.btN(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hco(g,w)
q=D.aAl[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cK(r,s-q*m*p+12,n,n,t,n,new B.kH(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hco(g,w)
r=D.a5l[w]
q=r+0.15
v.push(new B.cK(s,l,n,n,t,n,new B.kH(A.i.D((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.VS,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ac,A.f,v,n),n)},
bJj(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cw.aA(0,C.btN(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.as(B.dN(B.b2(f,f,f,new C.bsP(A.d.gH(a1),C.btN(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.emB),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.i.D((a3-l)/(0.12+m-l),0,1)
j=A.dG.aA(0,A.i.D((o-0.7)/0.3,0,1))
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
g=j>0.5?A.i.F(r,1):-1
w.push(new B.y(o,new B.cK(0,0,0,0,f,f,new B.ci(A.A,f,f,new B.kH(k*(0.45+0.55*o),B.dN(new B.iR(l,f,A.A,!0,f,new C.Rc(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.o(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f7W())
A.d.v(a0,new B.N(w,new C.f7X(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ac,A.f,a0,f),f)},
cbl(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vd[q]
o=A.i.D((a2-p)/(p+0.22-p),0,1)
n=A.lb.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vd[q]
m=A.i.D((a2-m)/(m+0.02-m),0,1)
l=D.aCs[q]
k=B.dr()
k.n2(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k5(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vd[q]
g=h+0.1
g=A.i.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cK(0,0,0,0,e,e,new B.ci(A.A,e,e,new B.kH(m,B.dN(new B.iR(k,e,A.A,!0,e,new C.Rc(d,92,w,p,j,i,0,g*s,h,e),e),new B.o(0,l)),e),e),e))
l=D.vd[q]
h=l+0.02
f=A.i.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cK(0,0,0,0,e,e,new B.ci(A.A,e,e,B.dN(new B.mJ(new C.bcN(w,f,q,e),e,new B.av(r,212),e,e),new B.o(0,D.aCs[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ac,A.f,a0,e),e)},
bFX(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.o(-b0,-150),new B.o(b0,-40),D.emF],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nP[r]
p=A.i.D((a8-q)/(q+0.2-q),0,1)
o=A.cw.aA(0,p)
q=D.aCD[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nP[r]
f=g+0.2
e=A.i.D((a8-f)/(g+0.3-f),0,1)
f=D.nP[r]
g=f-0.01
g=A.i.D((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n2(l*h+D.dnJ[r]*o)
f.fL(l*0.9)
h=0.55+0.45*o
f.k5(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cK(0,0,0,0,a3,a3,new B.ci(A.A,a3,a3,new B.kH(g,B.dN(new B.iR(f,a3,A.A,!0,a3,new C.Rc(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.o(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nP[r]
i=q+0.17
a2=A.i.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aCD[r]
a6.push(new B.cK(0,0,0,0,a3,a3,new B.ci(A.A,a3,a3,B.dN(new B.mJ(new C.bsR(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.o(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ac,A.f,a6,a3),a3)}}
C.btp.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a1(w-v,0,w+v,e.b)
q=B.bn(u,A.hB)
$.S()
t=B.K()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.os
d.am(q,t)
t=B.bn(u,A.hB)
q=B.K()
q.r=A.c.j(s).gp(0)
d.am(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.bsP.prototype={
a5(d,e){var w,v,u=this.c,t=B.bs(e.ei(A.J),e.b*u,e.a*u)
$.S()
u=B.K()
u.b=A.a9
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=T.Oq
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
aD(d){return!0}}
C.bcN.prototype={
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
k.r=j.j(A.i.D(v,0,1)).gp(0)
d.N(new B.o(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aD(d){return!0}}
C.bsR.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.ei(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.i.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bs(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.S()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.b=A.a9
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.bZ(q,p)}},
aD(d){return d.c!==this.c}}
C.bwU.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a1(0,c9,0+c4,c9+60)
$.S()
c9=B.K()
w=c0.b
v=x.O
c9.sav(new B.a8(A.b1,A.b7,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aK(0,d0))
d1.ar(d0,c9)
c9=B.K()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.o(0,c3),new B.o(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hco(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.S()
a3=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.mf
d1.bZ(new B.a1(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a1(d,a3,a1,a3+a0)
a5=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a6=B.ar(A.d.gH(w),A.c,0.1)
a6.toString
a5.sav(new B.a8(A.b1,A.b7,A.x,B.a([a6,A.d.gan(w)],v),c1,c1).aK(0,a4))
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
a9=new B.bt()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.ak(a5)
a7.ab()
a5=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a5.r=B.ar(A.d.gan(w),A.w,0.5).gp(0)
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
a2=new B.bt()
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
b3=A.i.bh(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bn(new B.a1(b7,a6,b7+s,a9),A.hB)
$.S()
b8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.am(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a1(d,a2,a1,a2+28)
J.bo(g.save())
g.clipRect(B.hU(a4),$.mh()[1],!0)
$.S()
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a2.sav(new B.a8(A.b1,A.b7,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aK(0,b9))
d1.ar(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aP_.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.a1D.prototype={
a7(){return"_Role."+this.b}}
C.qt.prototype={}
C.rb.prototype={}
C.D7.prototype={}
C.a_C.prototype={}
C.ag2.prototype={}
C.a1Q.prototype={
gZ(d){return this.d}}
C.Di.prototype={}
C.acW.prototype={}
C.adc.prototype={}
C.af8.prototype={}
C.bjo.prototype={
a3H(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dE(d,"",e,g,h,f)},
baV(d,e,f){return this.a3H(d,e,f,0,0.55)},
aDG(d,e,f,g){return this.a3H(d,e,f,0,g)},
baW(d,e,f,g){return this.a3H(d,e,f,g,0.55)},
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
ald(d,e,f,g){var w="n"+this.ay++,v=new C.rb(w,e,f,g)
this.a.n(0,w,v)
this.b0()
return v},
td(d,e,f){return this.ald(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.br(w.b,new C.dre(e))
A.d.br(w.c,new C.drf(e))
w.b0()},
beN(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n7.h(0,v.b).c===D.xH)return!1
w=this.b
if(A.d.aV(w,new C.drb(d,e)))return!1
w.push(new C.D7(d,e))
this.b0()
return!0},
c3d(d){var w
if(d.b==="beat")return D.ck3[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.az(500)
case 2:return 1400+w.az(2200)
default:return 450+w.az(2000)}},
aHf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aCU[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Di(u,t,j.ax,90))
w.push(new C.Di(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1Q(u,new B.o(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.baV(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1Q(u,new B.o(o*p,n*p),m,3+w.ai()*4.5,1000+w.az(700),j.ax))}j.f.push(new C.Di(u,t,j.ax,120))
j.aDG(120,200,"noise",0.5)
j.baV(261.63*Math.pow(2,([7,12,16,19][w.az(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Di(u,t,j.ax,230))
w.push(new C.Di(u,t,j.ax+160,160))
w.push(new C.Di(u,t,j.ax+320,100))
j.baW(180+j.at.az(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.acW(u,new B.o((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.baW(300+w.az(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.adc(u,u.a2(0,new B.o(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a3H(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fL()
j.a3H(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.af8(u,D.aCe[v],t,j.ax))
j.aDG(261.63*Math.pow(2,([0,5,9,12][j.at.az(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aDG(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cg9[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cws(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eH(w,new C.drc(d));v.C();)j.aCb(w.gR(0),j.ax+D.csu[A.o.F(g.d,4)])
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
case"chance":s=j.at.az(100)<D.cJI[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eH(w,new C.drd(d));v.C();)j.aCb(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xF(w,0,v-700)},
cws(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_C(e,"~"+d))},
aCb(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ag2(d.a,v,e,w))
u.push(new C.a_C(w,v))},
a7s(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a4(w).k("b7<2>")
w=B.C(new B.b7(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aHf(r)
u.n(0,r,o.ax+o.c3d(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.drg(o),v),v.k("M.E"))
if(q.length!==0){A.d.br(w,new C.drh(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.J)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gae(v),r=new B.eH(u,new C.dri(p));r.C();)o.aCb(u.gR(0),o.ax)}else o.aHf(u)}}A.d.br(o.d,new C.drj(o))
A.d.br(o.e,new C.drk(o))
A.d.br(o.f,new C.drl(o))
A.d.br(o.w,new C.drm(o))
A.d.br(o.x,new C.drn(o))
A.d.br(o.r,new C.dro(o))
o.b0()},
vN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.o(q.a+o*e,q.b+p*e)
r.b=new B.o(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.o(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.o(l,o)
if(o>n){p=m.a=new B.o(l,n)
t=m.b=new B.o(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.o(-t.a*0.8,t.b)}},
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
Ul(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.X.aQ(0,d,null))
k.a8(0)
for(o=x.j,n=J.aT(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.t(v,"k"))
if(!D.n7.al(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.rb(t,u,new B.o(B.dD(J.t(v,"x"))*k.cy.a,B.dD(J.t(v,"y"))*k.cy.b),A.i.M(B.dD(J.t(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aT(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.al(0,q)&&m.al(0,p))n.push(new C.D7(q,p))}k.b0()
return!0}catch(l){return!1}},
cVZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rb(n,r,new B.o(q*p.a,o*p.b),s))
l.b0()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.beN(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GJ.prototype={}
C.Xa.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aGb(new C.bjo(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cQ,A.L,A.az,$.ax()),A.bF,A.J,A.J,A.Z,null,null)}}
C.aGb.prototype={
adx(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adx=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aA(),$async$adx)
case 6:q=n.k5(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.exW(s))
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
return B.i($async$adx,v)},
aas(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aas=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.exL(s))
u=3
w=6
return B.b(B.aA(),$async$aas)
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
return B.i($async$aas,v)},
bPg(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a4(n).k("b7<2>")
v=""+n.a+"|"+o.length+"|"+new B.b7(n,w).cG(0,0,new C.exN())+"|"+A.d.cG(o,0,new C.exO())
if(v===p.ch)return p.CW
u=new C.exR()
t=x.s
s=B.a([],t)
r=new C.exS(p,s,u)
for(n=new B.b7(n,w).gae(0),w=new B.eH(n,new C.exP());w.C();){q=n.gR(0)
if(!A.d.aV(o,new C.exQ(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cW(s,0,B.dB(5,"count",x.S),x.N).dn(0)},
Y(){var w,v=this
v.a4()
v.adx()
v.d.db=v.ay
w=v.q1(new C.eyl(v))
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
w.bzU()},
ad2(d){return this.c2E(d)},
c2E(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ad2=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aA(),$async$ad2)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Ul(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZu(A.d.gH(D.aBG))
if(s.c!=null)s.m(new C.exV())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ad2,v)},
aZu(d){this.d.cVZ(0,d.c,d.d)
this.EL()},
EL(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cy(A.lH,new C.exH(this))},
az1(d){var w,v,u,t,s=this.d.a,r=B.a4(s).k("b7<2>")
s=B.C(new B.b7(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bR(s,s.gI(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ckl(d){var w,v,u,t,s,r=this.d.a,q=B.a4(r).k("b7<2>")
r=B.C(new B.b7(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bR(r,r.gI(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c2s(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.n7.h(0,r.b).c===D.xH)continue
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
cbt(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hB1(new B.o(n.a+36,n.b+0),new B.o(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cEc(d){var w,v,u,t,s,r,q=this,p=q.az1(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eY()
u=v.b
if(u==="button"){w.aHf(p)
return}if(q.r)return
t=D.n7.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rl)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b0()
q.EL()
return}if(q.r)return
r=q.cbt(d)
if(r!=null){w=q.d
A.d.cH(w.b,r)
w.b0()
q.EL()}},
clE(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ckl(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.az1(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aJ(0,d)}},
clF(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b0()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.o(A.i.D(d.a+s.y.a,46,t.a-46),A.i.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b0()}}},
b3Q(){var w,v,u=this
if(u.z!=null){w=u.c2s(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.beN(v,w)}else v=!1
if(v){B.jX()
u.EL()}u.z=null
u.d.b0()}else if(u.x!=null){if(u.at)u.EL()
u.x=null}},
adK(d){return this.c5w(d)},
c5w(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.az1(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jY()
p=t.c
p.toString
w=3
return B.b(B.bU(I.m7,null,new C.exY(q),p,!0,!0,!1,A.lT,!1,!1,x.y),$async$adK)
case 3:if(f===!0){r.W(0,s)
t.EL()}case 1:return B.h(u,v)}})
return B.i($async$adK,v)},
cbr(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.td(0,d,new B.o(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eY()
this.EL()},
ahG(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(I.m7,null,new C.ey_(),s,!0,!0,!0,A.lT,!1,!1,x.es),$async$ahG)
case 2:t=e
if(t!=null)u.aZu(t)
return B.h(null,v)}})
return B.i($async$ahG,v)},
af6(d){var w=0,v=B.j(x.H),u=this,t
var $async$af6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.exK(),t,null,!0,!0,x.y),$async$af6)
case 2:if(f===!0){u.d.a8(0)
u.EL()}return B.h(null,v)}})
return B.i($async$af6,v)},
B(d){var w=this,v=null,u=B.a([B.aju(w.r?new B.bL(A.a7,v,v,new B.D(A.H1,B.hp(D.bWG,D.fJ5,new C.eyj(w),v),v),v):w.cbu(),A.b_,A.iN),B.E(B.cq(new C.eyk(w)),1)],x.p)
if(!w.r)u.push(w.cyW())
return B.c4(v,A.c3,B.bm(!0,B.x(u,A.l,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bKZ(){var w=null,v=new C.exM(),u=A.w.j(0.7),t=B.m(26),s=B.L(A.bx.j(0.5),A.r,1)
return B.bS(0,B.e9(B.as(B.q(w,B.ce(B.x(B.a([D.fUC,A.aw,D.h1k,A.aB,v.$4(A.oD,A.bx,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.D5,A.cv,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.k7,A.bT,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.Pd,A.bk,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.h0C,new B.bL(A.aa,w,w,B.bO(!1,D.fRG,w,w,!0,w,w,w,this.gbKS(),w,w),w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.XD,new B.p(I.m7,w,s,t,w,w,A.n),w,w,w,A.ft,Ao.amA,w,w,w),w,w,w),u,!0),0,0,0)},
cbu(){var w=this,v=null,u=B.aI(v,v,v,v,Ag.n4,v,v,v,new C.ey5(w),v,v,v,v,v,v),t=w.a9T(A.CW,"How it works",new C.ey6(w),!0),s=w.ay?A.oE:V.ta
return new B.D(D.bHj,B.A(B.a([u,D.bJ0,t,w.a9T(s,"Sound",new C.ey7(w),!0),w.a9T(A.ed,"Ideas",w.gcpq(),!0),w.a9T(K.wD,"Clear",w.gcbs(w),!0),w.aQ4(A.hi,"Show",new C.ey8(w),!0,!0)],x.p),A.l,v,A.e,A.j,0,v,v),v)},
aQ4(d,e,f,g,h){var w=null,v=h?A.bx:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ad.wt,B.aH(!1,A.a3,!0,u,B.aP(!1,t,!0,B.h6(new B.D(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.aj),w)},
a9T(d,e,f,g){return this.aQ4(d,e,f,g,!1)},
cyW(){var w=null,v=new C.ey1(this),u=A.c.j(0.08)
return B.q(w,B.ce(B.A(B.a([v.$2("START",D.xH),v.$2("CHANGE",D.Fa),v.$2("REACT",D.rl)],x.p),A.E,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aL),A.f,w,w,new B.p(I.BU,w,new B.bH(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bCj,w,w,w)},
cyX(d){var w,v,u,t,s=null,r=D.n7.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.L(v.j(0.5),A.r,1)
return new B.D(A.fC,B.az(s,B.q(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cS,B.d(r.a,s,1,A.a2,s,s,s,D.aWc,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.p(s,s,t,w,s,new B.a8(A.b1,A.b7,A.x,u,s,s),A.n),s,s,s,s,A.hJ,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ey0(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bjp.prototype={
a5(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bo(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.S()
u=B.K()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.N(new B.o(r,s),1,u)
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
f=new B.km(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.ak(e)
d.ab()
a1=D.n7.h(0,l.b).d
a2=D.n7.h(0,k.b).d
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=3
f.d=A.bu
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.t1(new B.o(i,j),new B.o(g,h))
f.sav(new B.a8(A.a7,A.aa,A.x,e,b3,b3).aK(0,new B.a1(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.i.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hB1(new B.o(j.a+36,j.b+0),new B.o(i.a-36,i.b),a4)
$.S()
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.j(0.35).gp(0)
i.y=N.os
b7.N(a5,8,i)
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.gp(0)
b7.N(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a2(0,D.JC)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aG($.S().r,A.ai,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.km(t+a0,p,w-a0,j,w,j))
j=B.K()
j.b=A.a9
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.K()
j.r=A.c.gp(0)
b7.N(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a9=w[n]
p=a9.c
v=A.i.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.dK.aA(0,v)
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.b=A.a9
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.N(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){b0=w[n]
v=A.i.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.ku(p,j,A.dK.aA(0,v))
i.toString
j=B.ku(p,j,A.dK.aA(0,A.i.D(v-0.35,0,1)))
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
p.y=A.kU
b7.N(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
v=A.i.D((b5-a3.f)/a3.e,0,1)
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
j.y=A.kU
b7.N(p,11,j)
j=k.a
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A6.Be,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aK(0,B.bZ(k.a,8)))
b7.N(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.J)(b4),++n){a5=b4[n]
v=A.i.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bjq(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.o(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.clc(b7,b4.d,b5)
b6.restore()},
clc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n7.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.i.D(1-(f-w)/520,0,1)
u=B.bs(e.c,64,64)
t=B.bn(u,A.iq)
s=t.eQ(A.cC)
$.S()
r=B.K()
r.r=A.w.j(0.55).gp(0)
r.y=A.mf
d.am(s,r)
if(v>0){s=t.cn(6)
r=B.K()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.wu
d.am(s,r)}s=t.eQ(A.cL)
r=B.K()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.am(s,r)
r=B.K()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sav(new B.a8(A.b1,A.b7,A.x,B.a([s,p],x.O),j,j).aK(0,u))
d.am(t,r)
r=B.K()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.am(t,r)
r=h.b
p=e.c
o=C.bjq(B.lz(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aJ(0,new B.o(s/2,r.gba(r)/2)))
n=C.bjq(h.a,11,A.c,j,j,A.I)
n.a5(d,e.c.a2(0,new B.o(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aCe[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rl){s=e.c.a2(0,new B.o(0,62))
r=B.K()
r.r=D.aCU[A.o.F(e.d,6)].gp(0)
d.N(s,5,r)}else if(m!=null){l=C.bjq(m,9.5,A.aD,j,j,A.U)
l.a5(d,e.c.a2(0,new B.o(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bjq(m,9.5,A.aD,j,j,A.U)
l.a5(d,e.c.a2(0,new B.o(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xH)k.b4D(d,e.c.aJ(0,D.JC),q)
k.b4D(d,e.c.a2(0,D.JC),q)},
b4D(d,e,f){var w
$.S()
w=B.K()
w.r=A.c3.gp(0)
d.N(e,9,w)
w=B.K()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.N(e,9,w)
w=B.K()
w.r=A.c.gp(0)
d.N(e,3.5,w)},
aD(d){return!0}}
C.aO8.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.eh.prototype={}
C.u_.prototype={
as8(d,e,f,g){var w=this
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
C.abB.prototype={}
C.acI.prototype={}
C.a5D.prototype={
bgF(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h2()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abB(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c7G(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new C.bPX())},
ald(d,e,f,g){var w="p"+this.c++,v=new C.u_(w,e,f,g)
v.as8(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.br(this.b,new C.bQ7(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cMY(d,e,f,g,h){return A.d.aV(this.b,new C.bQ2(e,f,g,h))},
am4(d,e,f,g){var w
if(d===f||this.cMY(0,d,e,f,g))return null
w=new C.acI(d,e,f,g)
this.b.push(w)
return w},
aCI(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Aj(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aoQ(d){return this.Ml(d)&&!d.x&&d.cx>this.Aj(d)},
b9_(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Ml(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cbO(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.A8.h(0,v)
if(w!=null)return w.a
return 100},
vN(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c7G(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.J)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bQ8(a2),t).cG(0,0,new C.bQ9(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bQb(o)
m=B.a([],x.t)
l=new C.bQa(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.J)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.J)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bQd(g,l,n)
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
a2.b8W(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Aj(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b8W(e,d,w,!0)
a2.bRC(a4)},
b8W(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bPZ(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bPY(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.J)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bQ0(B.T(b3,b3),r,b5)
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
if(h)B.bj(B.dM(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c0(b7,0,!1,b3)
a0=B.c0(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.J)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b9_(t)*(1+t.CW))
a4=b2.aCI(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cbO(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bUZ(e,a0,b8)
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
bUZ(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bRC(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.J)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aCI(o)/a1.b9_(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Aj(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bJC(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bgF(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.us(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.i.D(o.db-h,0,24)
else o.cy=A.i.D(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.us(o,"The "+$.qE().h(0,n).b+" got "+A.i.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.us(o,"More than 1.5 amps went through the "+$.qE().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.us(o,"The regulator had to turn "+A.i.ad(o.cy,1)+" V into heat while "+A.i.V(i*1000)+" mA flowed. That is "+A.i.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.us(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.A8.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qE().h(0,n).b
l=f.b
l=l===A.i.iH(l)?""+A.i.V(l):B.w(l)
g=f.c
g=g===A.i.iH(g)?""+A.i.V(g):B.w(g)
a1.us(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.i.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fcA.q(0,n)){m=o.fx>0?A.i.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.i.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.us(o,"The bulb got "+A.i.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.i.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.us(o,"The LED had "+A.i.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.i.D(j/14,0,1)
break
case"motor":n=A.i.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.i.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.us(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.i.D(i/1,0,1)
if(!o.x&&i>1)a1.us(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.us(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.i.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.us(o,"The capacitor was charged to "+A.i.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bJC(d){return A.d.aV(this.a,new C.bPW(d))},
us(d,e){var w
d.x=!0
d.ay=e
this.bgF(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
blj(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aJ1(d){var w=d.b
return D.aT_.q(0,w)||D.A8.al(0,w)||w==="buck"||w==="regulator"},
bi8(d){var w,v=!0
if(!this.Ml(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.A8.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
VA(d,e){var w=this.b
return new B.Y(w,new C.bQf(d,e),B.U(w).k("Y<1>")).gI(0)},
tQ(d){var w,v
if(d.x)return!1
w=d.b
if(D.A8.al(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bgb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qE().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aJ1(d)||i.tQ(d))return null
w=i.VA(d,0)
v=i.VA(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcVy(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.i.iH(r)?""+A.i.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.i.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.A8.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.My("battery"),o=J.aT(t.a),t=new B.eH(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.VA(n,0)+i.VA(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.My("switch"),o=J.aT(t.a),t=new B.eH(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qE().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Aj(k))return"The "+$.qE().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.i.ad(k.cx,2)+" amps, but it can only give about "+A.i.ad(i.Aj(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aV(u,new C.bQ3(i,d))
h=q.b
h=h===A.i.iH(h)?""+A.i.V(h):B.w(h)
u=A.i.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.i.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.i.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
My(d){var w=this.a
return new B.Y(w,new C.bQ6(d),B.U(w).k("Y<1>"))},
aID(d){return this.My(d).aV(0,new C.bQ5(0.35))},
qe(d,e){return A.d.aV(this.a,new C.bQ4(e))}}
C.ak4.prototype={
a5(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.S()
w=B.K()
w.r=F.yf.gp(0)
c2.ar(new B.a1(0,0,c0,c1),w)
v=B.K()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.N(new B.o(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.ms.al(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.ms.al(0,j.b)?(j.ch-1)*38:0
b6.cJF(c2,new B.o(m*b8+l*(42+k),n*b9),new B.o(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hOt(s.a,s.b,c3)
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
h.r=F.MD.j(A.i.D(e.Q*0.45,0,0.6)).gp(0)
h.y=A.wu
c2.N(new B.o(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.bo(n.save())
n.translate(k,j)
i=A.i.D(A.lb.aA(0,A.i.D(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.cmb(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Aj(e)){h=k+0
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
a8=new B.bt()
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
a0=new B.bt()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.ak(a2)
a1.ab()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.b=A.a9
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iH(new B.eo("!",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jh(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.o(h+-3,g+-8))}if(!e.x)h=(D.aT_.q(0,i)||D.A8.al(0,i)||i==="buck"||i==="regulator")&&!w.tQ(e)&&w.VA(e,0)+w.VA(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.S()
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=A.av.gp(0)
c2.N(new B.o(k,j),10,h)
b0=new B.iH(new B.eo("!",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.G(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jh(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.o(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.ms.al(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.o(g,h)
$.S()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=F.yf.gp(0)
c2.N(b0,7,k)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.b=A.a9
k.c=2.4
k.r=(j&&w.bi8(e)?A.c0:A.ab).gp(0)
c2.N(b0,6,k)
if(j&&w.bi8(e)){b0=new B.iH(new B.eo("+",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c0,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jh(1),b7,b7,b7,b7,A.bY,b7,A.cs)
b0.e5()
b0.a5(c2,new B.o(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.J)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.o(n,m)
b4=A.i.D(b2.r/0.8,0,1)
l=B.ar(M.Nj,F.a_7,b4)
l.toString
k=b2.f
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.gp(0)
j.c=2.4
j.d=A.bu
c2.ah(b3,new B.o(n-b2.e*0.035,m-k*0.035),j)
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.j(0.35*b4).gp(0)
j.y=A.Os
c2.N(b3,4.5*b4+1,j)}if(A.d.aV(s,new C.bKj())){b5=A.d.cG(s,0,new C.bKk())
$.S()
b9=B.K()
b9.r=D.bhj.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.ar(new B.a1(0,0,c0,c1),b9)
b0=B.fq(b7,A.cs,b7,b7,b7,D.fnL,A.a5,A.bX,b7,A.dD,A.bY)
b0.o8(b8-24)
b0.a5(c2,new B.o(12,10))}},
qU(d,e,f,g,h){var w=null,v=B.fq(w,A.cs,w,w,w,B.cQ(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.bX,w,A.dD,A.bY)
v.e5()
v.a5(d,f)},
cJF(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aG($.S().r,A.ai,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hGu(a0,a1,a2)
e.E(new B.c6(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aQ,F.MD,A.i.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aG,A.aQ,A.i.D(r*1.2,0,1))
u.toString
o=u}else o=A.bi
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
if(q){n=new B.TZ(new B.ry(B.xN(e),!1,B.a([],x.R))).gH(0)
m=40+A.i.D(r*120,0,160)
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
i=A.i.F(k*22+j*m*l,i.a.length())
v.iy()
j=t[u].b
j===$&&B.c()
j=j.a.length()
v.iy()
h=t[u].b
h===$&&B.c()
g=A.i.F(i+j,h.a.length())
v.iy()
f=t[u].Di(g)
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=A.c.gp(0)
d.N(f.a,2.6,j);++k}}},
PH(d,e,f,g){var w,v,u,t
$.S()
w=B.K()
v=g?A.b1:A.a7
u=g?A.b7:A.aa
t=B.ar(e,A.w,0.3)
t.toString
w.sav(new B.a8(v,u,A.x,B.a([e,f,e,t],x.O),A.Iu,null).aK(0,d))
return w},
ayc(d,e,f){return this.PH(d,e,f,!0)},
c7f(d,e){return this.PH(d,A.bi,A.hZ,e)},
aiQ(d,e){var w,v,u
$.S()
w=B.K()
w.sav(D.aR9.aK(0,B.bZ(e,4.2)))
d.N(e,4.2,w)
w=e.a2(0,D.epd)
v=e.a2(0,D.epm)
u=B.K()
u.r=A.cX.gp(0)
u.c=1.2
d.ah(w,v,u)},
cmb(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.K()
c0.sav(D.c6J.aK(0,D.f8N))
c0.c=3.4
c0.d=A.bu
w=B.K()
w.r=A.w.j(0.45).gp(0)
w.y=N.os
c1.bZ(D.f8B,w)
if(c3){w=B.bn(D.f8L,A.jM)
v=B.K()
v.r=A.c.j(0.14).gp(0)
c1.am(w,v)}u=C.hlJ(c2)
c1.ah(new B.o(-u,0),D.eqP,c0)
c1.ah(D.enT,new B.o(u,0),c0)
t=c2.x
w=c2.b
s=D.ms.al(0,w)&&c2.ch!==1
if(s){J.bo(c1.c.save())
c1.bU(0,c2.ch)}switch(w){case"battery":b3.bGm(c1,c2)
break
case"solar":r=B.bn(D.f8E,A.iE)
c1.am(r,b3.PH(new B.a1(r.a,r.b,r.c,r.d),A.d2,A.bP,!1))
b9=B.K()
w=B.ar(D.blf,A.d7,0.25+0.55*c2.f)
w.toString
v=B.ar(D.buE,A.mR,0.3+0.4*c2.f)
v.toString
b9.sav(new B.a8(A.aA,A.aF,A.x,B.a([w,v],x.O),b4,b4).aK(0,D.a9B))
c1.ar(D.a9B,b9)
q=B.K()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.o(b9,-18),new B.o(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.o(-34,b9),new B.o(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.S()
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=A.cx.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.o(b9,-18),new B.o(b9,18),w)}b9=new B.aG($.S().r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-34,18))
b9.E(new B.aq(-6+40*c2.f,-18))
b9.E(new B.aq(4+40*c2.f,-18))
b9.E(new B.aq(-24,18))
b9.E(new B.bt())
w=B.K()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.af(b9,w)
w=c2.f
b9=B.K()
b9.r=A.dC.j(0.9).gp(0)
c1.N(D.enX,4+4*w,b9)
break
case"crank":o=B.bn(D.f8p,A.fP)
c1.am(o,b3.ayc(new B.a1(o.a,o.b,o.c,o.d),A.bw,A.bN))
b9=B.K()
b9.sav(D.aRa.aK(0,B.bZ(A.J,12)))
c1.N(A.J,12,b9)
n=new B.o(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.K()
b9.r=A.cx.gp(0)
b9.c=5
b9.d=A.bu
c1.ah(A.J,n,b9)
b9=B.K()
b9.sav(D.eAj.aK(0,B.bZ(n,7)))
c1.N(n,7,b9)
b3.aiQ(c1,D.eqH)
b3.aiQ(c1,D.enI)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aG(b9,A.ai,b4,b4,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bt())
m=B.K()
m.r=A.bP.gp(0)
c1.af(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.bo(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aG(b9,A.ai,b4,b4,m)
m.push(new B.aZ(0,-2))
k.ab()
j=new B.c6(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.c6(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.bt()
m.push(j)
m=k.f
if(m!=null)j.ak(m)
k.ab()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.K()
b9.sav(D.eA0.aK(0,B.bZ(A.J,4.5)))
c1.N(A.J,4.5,b9)
break
case"switch":o=B.bn(D.f8w,A.mv)
b9=B.K()
b9.sav(D.at8.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.am(o,b9)
b3.aiQ(c1,D.U_)
b3.aiQ(c1,D.aLX)
h=c2.w?D.aLX:H.aLN
b9=B.K()
b9.r=A.as.gp(0)
b9.c=6
b9.d=A.bu
c1.ah(D.U_,h,b9)
b9=B.K()
b9.r=(c2.w?A.b4:A.bP).gp(0)
b9.c=4
b9.d=A.bu
c1.ah(D.U_,h,b9)
b9=B.ku(D.U_,h,0.85)
b9.toString
w=B.K()
w.r=A.ay.gp(0)
c1.N(b9,5,w)
break
case"fuse":g=B.bn(D.aRT,D.aRf)
b9=B.K()
b9.r=A.fI.j(0.25).gp(0)
c1.am(g,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aD.gp(0)
c1.am(g,b9)
if(!t){b9=B.K()
b9.c=1.6
b9.r=B.ar(A.bP,A.cI,c2.fx).gp(0)
c1.ah(D.aMf,D.aLV,b9)}else{b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(D.aMf,D.era,b9)
b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(F.eoK,D.aLV,b9)
b9=B.K()
b9.r=A.e_.gp(0)
c1.N(A.J,6,b9)}for(f=0;f<2;++f){e=B.bs(new B.o(M.fN[f]*22,0),20,9)
c1.am(B.bn(e,A.hU),b3.PH(e,A.d3,A.ob,!0))}break
case"pot":b9=B.K()
b9.sav(D.eAb.aK(0,B.bZ(A.J,21)))
c1.N(A.J,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.aD.gp(0)
k.c=1.2
c1.ah(new B.o(b9*18,w*18),new B.o(v*22,m*22),k)}b9=B.K()
b9.sav(D.ezZ.aK(0,B.bZ(A.J,13)))
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
c1.ah(new B.o(b9*3,w*3),new B.o(v*12,m*12),k)
break
case"resistor":a1=B.bn(D.aRT,D.aRf)
b9=B.K()
b9.sav(D.ca3.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.am(a1,b9)
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
c1.ar(D.f8Z,b9)
b9=c2.r
b3.qU(c1,b9>=1000?"1k\u03a9":""+A.i.V(b9)+"\u03a9",D.eq9,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.K()
v.r=A.dC.j(0.55*w).gp(0)
v.y=A.wu
c1.N(H.vu,34,v)}o=B.bs(D.emC,12,18)
c1.am(B.bn(o,A.hU),b3.PH(o,A.bi,A.e1,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.r=A.dx.gp(0)
v.c=1
c1.ah(new B.o(-9,w),new B.o(9,w),v)}w=B.K()
if(t)v=A.Mt
else{v=B.ar(A.e1,A.hG,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.G4
else{m=B.ar(A.d2,A.dC,c2.fx)
m.toString}w.sav(new B.bY(A.p5,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aK(0,B.bZ(A.tt,17)))
c1.N(A.tt,17,w)
w=B.K()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.N(A.tt,17,w)
b9=b9.r
w=x.v
m=new B.aG(b9,A.ai,b4,b4,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.c6(-12,-4,-9,0))
v=B.K()
v.b=A.a9
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.af(m,v)
v=B.K()
v.r=A.cz.gp(0)
v.c=1.4
c1.ah(D.er4,D.er6,v)
v=B.K()
v.r=A.cz.gp(0)
v.c=1.4
c1.ah(D.eoD,D.eoG,v)
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
else{w=B.ar(A.d2,D.bmi,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.K()
v.r=A.ay.j(0.6*w).gp(0)
v.y=D.bIO
c1.N(A.tt,30,v)}w=B.K()
w.r=A.e1.gp(0)
w.c=2.4
c1.ah(D.erc,D.erb,w)
w=B.K()
w.r=A.e1.gp(0)
w.c=2.4
c1.ah(D.eoM,D.eoL,w)
b9=b9.r
w=x.v
a6=new B.aG(b9,A.ai,b4,b4,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.c6(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bt())
v=B.K()
if(t)m=A.jn
else{m=B.ar(A.el,D.bo1,c2.fx)
m.toString}if(t)k=A.kR
else{k=B.ar(A.kt,A.ay,c2.fx)
k.toString}v.sav(new B.a8(A.aA,A.aF,A.x,B.a([m,k],x.O),b4,b4).aK(0,D.f7R))
c1.af(a6,v)
v=B.K()
v.b=A.a9
v.c=1.2
v.r=A.jZ.gp(0)
c1.af(a6,v)
v=B.K()
v.r=A.et.gp(0)
c1.ar(D.f7X,v)
w=new B.aG(b9,A.ai,b4,b4,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.c6(-6,-12,0,-15))
b9=B.K()
b9.b=A.a9
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a1(-28,-14,20,14)
c1.am(B.bn(a7,A.hV),b3.ayc(a7,A.an,A.bl))
b9=B.K()
b9.r=A.cl.gp(0)
c1.ar(D.f7q,b9)
b9=B.K()
b9.r=A.cx.gp(0)
c1.ar(D.f7s,b9)
b9=c1.c
J.bo(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.bo(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bs(H.aLI,15,7)
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.r=A.cI.j(0.9).gp(0)
c1.bZ(w,v)
b9.restore()}w=B.K()
w.r=A.as.gp(0)
c1.N(A.J,3,w)
b9.restore()
b3.qU(c1,"M",D.eqG,A.as,14)
break
case"buzzer":a8=B.bs(A.J,42,42)
b9=B.K()
b9.sav(D.eAf.aK(0,a8))
c1.bZ(a8,b9)
b9=B.K()
b9.r=A.w.gp(0)
c1.N(A.J,6,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aT.gp(0)
c1.N(A.J,6,b9)
b3.qU(c1,"+",D.eqz,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.i.F(b9.d*14,5):0
v=B.bZ(A.J,24+l*5+v)
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.b=A.a9
m.c=2
m.r=A.bT.j(w*(1-l*0.22)).gp(0)
c1.cC(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bn(D.f8s,A.hV)
w=B.K()
w.sav(D.c7K.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.am(o,w)
w=B.a([],x.v)
a9=new B.aG(b9.r,A.ai,b4,b4,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b9=(l&1)===0?-10:10
a5=l+1
b9=new B.c6(-24+l*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.ak(v)
a9.ab()}b9=c2.fx
if(b9>0.1){$.S()
w=B.K()
w.b=A.a9
w.c=10
w.r=D.bn1.j(0.5*b9).gp(0)
w.y=A.kU
c1.af(a9,w)}$.S()
b9=B.K()
b9.b=A.a9
b9.c=3.2
b9.d=A.bu
b9.r=B.ar(A.m5,A9.yn,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a1(-16,-22,16,18)
b9=B.bn(a7,A.hV)
w=B.K()
w.sav(D.c6B.aK(0,a7))
c1.am(b9,w)
w=B.K()
w.r=A.bP.gp(0)
c1.ar(D.f85,w)
for(p=0;p<4;++p){b0=new B.iH(new B.eo("\u2212",b4,b4,A.cN,b4,b4,b4,b4,b4,b4,new B.G(!0,A.as,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.bX,new B.jh(1),b4,b4,b4,b4,A.bY,b4,A.cs)
b0.e5()
b0.a5(c1,new B.o(-14,-18+p*9))}b1=new B.a1(-16,-24,16,-17)
c1.am(B.bn(b1,A.hU),b3.c7f(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.K()
v.r=A.b4.j(0.5).gp(0)
c1.ar(new B.a1(-3,w,11,w+b9),v)
b3.qU(c1,"1F",H.vu,A.c,11)
break
case"radio":a1=B.bn(D.a9B,A.fP)
b9=B.K()
b9.sav(D.cai.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.am(a1,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.ob.j(0.6).gp(0)
c1.am(a1,b9)
b9=B.bn(D.f8t,A.iE)
w=B.K()
w.r=A.dW.gp(0)
c1.am(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=A.m5.gp(0)
w.c=1.4
c1.ah(new B.o(-27,b9),new B.o(-3,b9),w)}b9=B.K()
b9.r=(c2.fx>0?A.fz:A.od).gp(0)
c1.ar(D.f7x,b9)
if(c2.fx>0){b9=8+A.i.F(b3.b.d*7,18)
w=B.K()
w.r=A.bD.gp(0)
w.c=1.6
c1.ah(new B.o(b9,-13),new B.o(b9,-3),w)}b9=B.K()
b9.sav(D.aRa.aK(0,B.bZ(D.a8y,6)))
c1.N(D.a8y,6,b9)
b9=B.K()
b9.r=A.ob.gp(0)
c1.N(D.enS,4,b9)
b9=B.K()
b9.r=A.e1.gp(0)
b9.c=1.8
c1.ah(D.enN,D.aM1,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bZ(D.aM1,4+l*5+A.i.F(b9.d*8,5))
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.b=A.a9
v.c=1.4
v.r=A.nt.j(0.7).gp(0)
c1.cC(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bn(D.f8D,A.hV)
v=B.K()
v.r=M.ny.gp(0)
c1.am(w,v)
b2=B.bn(D.f8A,A.hU)
if(c2.fx>0&&!c2.x){b9=c1.c
J.bo(b9.save())
b9.clipRRect(B.nR(b2),$.np(),!0)
b9.translate(-33,-21)
L.hhH(c1,D.ffo,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.K()
b9.r=A.b4.gp(0)
c1.N(D.eo3,1.6,b9)}else{w=B.K()
w.r=D.wc.gp(0)
c1.am(b2,w)
b9=new B.aG(b9.r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-33,-21))
b9.E(new B.aq(-10,-21))
b9.E(new B.aq(-33,0))
b9.E(new B.bt())
w=B.K()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.K()
b9.r=A.bw.gp(0)
c1.ar(D.f7W,b9)
break}C.isd(c1,c2,b3.b.d,b3.gcbP())
if(t)b3.qU(c1,"\u2716",D.erf,A.ay,14)
if(s)c1.c.restore()},
bGm(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a1(-28,-13,28,13)
d.am(B.bn(w,A.mv),o.ayc(w,A.d2,A.j3))
v=new B.a1(-22,-13,22,13)
$.S()
u=B.K()
u.sav(D.at1.aK(0,v))
d.ar(v,u)
u=B.K()
u.r=A.e0.gp(0)
d.ar(D.f8f,u)
t=new B.a1(28,-5,34,5)
d.am(B.bn(t,A.hB),o.PH(t,A.d2,A.hZ,!0))
o.qU(d,"+",D.ent,A.aQ,11)
o.qU(d,"\u2212",D.eqI,A.ab,11)
o.qU(d,B.w(n===A.i.iH(n)?A.i.V(n):n)+"V",D.eqo,A.aQ,13)
if(n===1.5){u=B.K()
u.r=A.bA.gp(0)
d.ar(D.f8e,u)
u=e.as
s=B.K()
s.r=B.ar(A.ay,A.b4,u).gp(0)
d.ar(new B.a1(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qU(d,"FLAT",D.eq8,A.c0,9)}if(n>2){u=B.K()
u.r=A.aT.gp(0)
u.c=1
d.ah(D.emL,D.aLA,u)
o.qU(d,n>3?"3 cells":"2 cells",D.eqn,A.aD,8)}}else if(n<=9){r=new B.a1(-22,-17,22,17)
u=B.bn(r,A.mv)
$.S()
s=B.K()
s.sav(D.c9S.aK(0,r))
d.am(u,s)
s=B.K()
s.r=A.d0.gp(0)
d.ar(D.f8g,s)
for(q=0;q<2;++q){p=F.aCC[q]
u=p<0?5:3.6
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.sav(D.aR9.aK(0,B.bZ(new B.o(p,-18),5)))
d.N(new B.o(p,-18),u,s)}o.qU(d,"9V",D.eqg,A.c,16)}else{r=new B.a1(-34,-16,34,16)
u=B.bn(r,A.iE)
$.S()
s=B.K()
s.sav(D.at1.aK(0,r))
d.am(u,s)
s=B.K()
s.r=A.bk.gp(0)
d.ar(D.f8C,s)
for(q=0;q<2;++q){u=B.bn(B.bs(new B.o(F.IJ[q],-20),8,10),A.hB)
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.cx.gp(0)
d.am(u,s)}o.qU(d,"+",D.enC,A.ay,10)
o.qU(d,"12V",D.eqk,A.as,15)}},
aD(d){return!0}}
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
n=new C.u_(o,r,q,p)
n.as8(o,r,q,p)
k.push(n)
J.iz(s[4],new C.ctP(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.J)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.am4(m,u[1],l,u[3])}}}
C.ak2.prototype={
S(){var w=x.N
return new C.ak3(A.J,A.az,B.T(w,x.gl),B.aR(w),$,A.bF,0,B.a([],x.X),null,null)}}
C.ak3.prototype={
afh(d){var w=this,v=w.as
if(v!=null)v.a1(0)
w.m(new C.bJY(w,d))
w.as=B.cy(A.lI,new C.bJZ(w))},
t(){var w=this.as
if(w!=null)w.a1(0)
w=this.ch
if(w!=null)w.a1(0)
this.bvZ()},
a0V(d,e){return this.ck6(d,e)},
b3j(d){return this.a0V(d,!1)},
ck6(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0V=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rV:A.yy
p=d.b
w=3
return B.b(L.hi3(s,r,p,d.ax<3.2,q,$.qE().h(0,p).b),$async$a0V)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0V,v)},
cwP(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bK_()),t=J.cC(u)
t.J(u,v)
t.br(u,new C.bK0(v))
if(t.gI(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a1(0)
w.a2e(d)
return}if(t.gI(u)===3){t=w.ch
if(t!=null)t.a1(0)
w.ch=B.cy(A.iO,new C.bK1(w,u,d))}},
a0B(d){return this.cis(d)},
cis(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0B=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.its(s,d.b,A.i.V(A.i.F(t.a.c.d*0.12,1)*100)),$async$a0B)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a0B,v)},
a2e(d){return this.cup(d)},
cup(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2e=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bJW(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2e)
case 2:return B.h(null,v)}})
return B.i($async$a2e,v)},
Y(){this.a4()
this.bij()
this.mh()},
bij(){this.a.c.e=new C.bKg(this)},
mz(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vN(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=D.ms.h(0,s.b)
if((r==null?null:r.b)!==D.Az)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.J(0,s.a)
q.a0V(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
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
case"speaker":if(s.fx>0)G.dE(330+A.o.F(110*A.i.bh(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dE((A.i.bh(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
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
q.m(new C.bKh())},
ban(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.ms.al(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b4_(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bR(w,w.gI(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.ms.al(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cJG(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.ms.al(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.ms.al(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hGu(new B.o(k,n),new B.o(i,l),p)
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
aff(){this.a.toString
this.m(new C.bJq())},
bsD(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dd6[v]
if(!A.d.aV(p.a.c.a,new C.bKi(u,w))){o=new B.o(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.JE:o
s=s?Q.JE:o
q=t.ald(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
G.dE(1200,"",50,0,0.3,"tri")
p.aff()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.So[v].a)
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
w.push(n.b3P(s,!0))
n.a.toString
if(t)w.push(n.b3P(r,!0))
w.push(B.E(B.cq(new C.bKf(n,q,m)),1))
return B.x(w,A.l,null,A.e,A.j,0,A.p)},
b3P(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=$.qE()
s=t.h(0,u).d.j(0.14)
r=new B.aN(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.az(p,B.q(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.AT,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.nW,p,p,p)],n),A.l,p,A.ba,A.j,0,A.p),A.f,p,p,new B.p(s,p,new B.bH(q,q,q,q),new B.be(r,r,r,r),p,p,A.n),p,p,p,I.or,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJr(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.cl(m,p,p,A.hf,p,p,A.aL,!1),A.f,p,p,new B.p(I.BU,p,new B.bH(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b1b(d){var w=null,v=B.m(18)
return B.q(w,d,A.f,w,w,new B.p(F.afJ,w,B.L(A.bA,A.r,1),v,w,w,A.n),w,w,w,w,F.alL,w,w,w)},
cmc(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qE().h(0,o),m=d.dy,l=d.fr,k=new C.bJK(q,n),j=B.d(n.c,p,p,p,p,p,p,A.KL,p,p,p),i=n.b,h=n.d,g=x.p
i=B.A(B.a([j,A.af,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aI(p,p,p,p,D.bYy,p,p,p,new C.bJx(q,d),p,p,p,p,"Remove part",A.cg),B.aI(p,p,p,p,A.PX,p,p,p,new C.bJy(q),p,p,p,p,p,A.cg)],g),A.l,p,A.e,A.j,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.EP,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fx4,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.i.ad(Math.abs(d.dy),2)+" volts  \xb7  "+A.i.ad(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.i.ad(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.aw,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.c0:A.aQ,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bgb(d)
if(v!=null){l=(d.x?A.ay:A.av).j(0.14)
j=B.m(10)
i=B.L((d.x?A.ay:A.av).j(0.5),A.r,1)
m.push(new B.D(A.i0,B.q(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fDZ,p,p,p),A.f,p,p,new B.p(l,p,i,j,p,p,A.n),p,p,p,p,A.cn,p,p,p),p))}if(C.hfK(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dW("CH "+t,d.at===u,new C.bJz(q,d,u),p,h,p))}l=B.bW(A.bH,l,A.bs,p,4,6)
l=B.a([A.am,l,A.aw,B.d(q.a.c.tQ(d)?"Showing: "+F.Ro[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hp,p,p,p)],g)
if(q.a.c.tQ(d))l.push(new E.fC(A.Hy,"Open big screen",new C.bJC(q,d),h,p))
A.d.v(m,l)}if(D.ms.al(0,o)&&!C.hfK(o)){l=B.a([A.am,B.d(q.a.c.tQ(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hp,p,p,p)],g)
if(q.a.c.tQ(d))l.push(new E.fC(A.PF,"Open the "+$.qE().h(0,o).b,new C.bJD(q,d),h,p))
A.d.v(m,l)}if(D.ms.al(0,o))A.d.v(m,B.a([A.am,new E.fC(A.D_,"Make it bigger (or tap it 4 times)",new C.bJE(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.i.ad(d.db,1)
if(q.a.c.tQ(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.i.ad(i,1)+" V",p,p,p,p,p,p,D.fxX,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dvy[s]
j=r===A.i.iH(r)?A.i.V(r):r
l.push(new E.dW(B.w(j)+" V out",d.e===r,new C.bJF(q,d,r),p,h,p))}i.push(new B.D(A.li,B.bW(A.bH,l,A.bs,p,0,6),p))}if(o==="regulator")i.push(D.fWZ)
A.d.v(m,i)}if(q.a.c.Ml(d)&&!d.x){l=A.i.ad(d.cx,2)
j=A.i.ad(q.a.c.Aj(d),2)
i=q.a.c
w=i.aoQ(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.aoQ(d)?A.c0:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.i.D(d.cx/q.a.c.Aj(d),0,1)
i=q.a.c.aoQ(d)?A.ay:A.b4
m.push(new B.D(A.i0,B.x(B.a([l,A.cS,B.bw(j,B.kq(A.bA,p,p,5,p,w,new B.lN(i,x.c)),A.aq)],g),A.E,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.i.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i0,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.frt,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dkk[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dW(j,d.e===r,new C.bJG(q,d,r),p,h,p))}m.push(B.bW(A.bH,l,A.bs,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.daf[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dW(j,d.r===r,new C.bJH(q,d,r),p,h,p))}m.push(B.bW(A.bH,l,A.bs,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bJI(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bJJ(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bJA(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bJB(d)))
if(o==="crank")m.push(D.fSf)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hp,p,p,p))
return q.b1b(new B.cP(D.b6C,B.ce(B.x(m,A.E,p,A.e,A.P,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bda.prototype={}
C.Wn.prototype={
S(){return new C.aFa(C.hlI(),new B.cw(null,x.q),B.aR(x.S))}}
C.aFa.prototype={
Y(){this.a4()
$.aW.c1$.push(this)
this.afg()},
afg(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fKg(),$async$afg)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.isC(t.d,r)
if(s!=null){t.m(new C.e15(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$afg,v)},
Fx(){var w,v=this
if(!v.as)return
w=C.iio(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bGA(w)},
jm(d){if(d!==A.fW)this.Fx()},
t(){$.aW.hV(this)
this.Fx()
this.a3()},
cbR(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e1e(q),u).gI(0)
s=new B.Y(v,new C.e1f(),u).gI(0)
r=new B.Y(v,w.gcZa(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e1g(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Fx()
if(A.o.F(q.w,10)===0){w=q.f
$.aja()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.aja()[q.f].c.$1(q.d)){w.J(0,q.f)
C.JQ("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e1h())
q.Fx()
w=q.c
w.toString
w=B.PH(w)
if(w!=null)w.T(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aja()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.ma,p,p,p,p,p,p,p,p,p,p))}},
ai1(){var w=0,v=B.j(x.H),u=this,t
var $async$ai1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.e14(u),t,null,!0,!0,x.H),$async$ai1)
case 2:return B.h(null,v)}})
return B.i($async$ai1,v)},
b1a(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.L(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.q(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.az(w,B.h6(new B.a5(40,38,new B.an(A.a0,w,A.ac,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b19(d,e,f,g){return this.b1a(d,e,f,g,null)},
asQ(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.L(f.j(0.4),A.r,1)
return B.E(B.az(w,B.q(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e8,new B.dm(1,A.co,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.ba,A.j,0,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
agm(){var w=0,v=B.j(x.H),u=this,t
var $async$agm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).ce(B.ec(new C.e10(u),!1,null,x.H)),$async$agm)
case 2:t=u.e.gbk()
if(t!=null)t.bij()
if(u.c!=null)u.m(new C.e11())
u.Fx()
return B.h(null,v)}})
return B.i($async$agm,v)},
bJv(){var w,v,u,t,s=null,r=this.f
$.aja()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bd:A.ay
u=B.m(9)
t=B.L(I.BU,A.r,1.5)
return B.q(s,B.as(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xo,s,s,s),s,s,s),A.f,s,D.b6J,new B.p(r,s,t,u,s,s,A.n),s,s,s,s,A.f6,s,s,s)},
ajb(){var w=0,v=B.j(x.H),u=this,t
var $async$ajb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.mQ,null,new C.e1d(u),t,!0,!0,!0,A.kg,!1,!1,x.H),$async$ajb)
case 2:return B.h(null,v)}})
return B.i($async$ajb,v)},
cbS(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.az(r,B.q(r,D.bZQ,A.f,r,r,new B.p(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1j(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.q(r,D.bcG,A.f,r,r,new B.p(A.br,r,B.L(A.aG.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.x(B.a([B.A(B.a([p,A.af,o,A.af,B.E(B.x(B.a([D.fUY,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eW:A.hx,r,r,r,r,r,r,r,r,11.5,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.j,0,A.p),1),new C.azc(s.gci9(),r),A.vB,s.b19(A.uN,"Construction Lab: real 3D wiring, plumbing and a house",A.cI,new C.e1k(s,d)),s.b1a(A.lM,"Challenges",A.aQ,s.gczo(),s.bJv()),s.b19(A.CW,"How to play",A.aG,new C.e1l(d,e))],v),A.l,r,A.e,A.j,0,r,r),A.am,B.A(B.a([s.asQ(A.oy,"Circuits",A.bg,s.gcsf()),A.bo,s.asQ(A.ow,"Repair",A.aQ,new C.e1m(s)),A.bo,s.asQ(K.wD,"Clear",A.c0,new C.e1n(s))],v),A.l,r,A.e,A.j,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.p(I.BU,r,new B.bH(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bI9,r,r,r)},
B(d){var w=this,v=null
$.aty="tech"
return B.c4(v,A.c3,B.bm(!0,B.x(B.a([w.cbS(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hkz(w.d,w.e,w.gcbQ(),v),1)],x.p),A.l,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.azc.prototype={
S(){return new C.bbi(null,null)}}
C.bbi.prototype={
gaz8(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.Y,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaz8().t()
this.bxk()},
B(d){var w=null,v=this.a.c
return B.az(w,B.h6(new B.a5(42,42,B.c5(this.gaz8(),new C.cLo(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bbh.prototype={
a5(d,e){var w,v,u,t=null,s=e.ei(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.K()
w.r=A.b8.j(0.25+0.15*o).gp(0)
w.y=N.os
d.N(s,r+2+o*2,w)
w=B.K()
w.sav(D.eAa.aK(0,B.bZ(s,r)))
d.N(s,r,w)
v=B.K()
v.b=A.a9
v.c=2.2
v.sav(new B.fZ(A.A,0,6.283185307179586,A.x,D.d0W,t,new B.mN(p)).aK(0,B.bZ(s,r)))
d.N(s,r,v)
p=new C.cLn(d)
p.$3(s.a2(0,A.tt),8+o*1.5,1)
q*=4
p.$3(s.a2(0,D.eoZ),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a2(0,D.erm),2.6,0.5+0.5*Math.cos(q))
u=B.fq(t,A.cs,t,t,t,D.fnR,A.a5,A.bX,t,A.dD,A.bY)
u.e5()
u.a5(d,s.a2(0,new B.o(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.azx.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.azy.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bvY()}}
C.aLF.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzW.prototype={}
C.fQ.prototype={}
C.Kj.prototype={
a7(){return"ScreenStyle."+this.b}}
C.mx.prototype={}
C.W6.prototype={
S(){return new C.blY(null,null)}}
C.blY.prototype={
gaaq(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.oq,null,1,null,v)
w.cr(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaaq().t()
this.bzc()},
gSE(){var w=this.gaaq().y
w=w==null?null:A.o.aq(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.ms.h(0,this.a.c)
if(v==null)v=D.aSa
return B.c4(w,X.ZM,B.bm(!0,new B.an(A.a0,w,A.ac,A.t,B.a([B.as(v.b===D.AB?this.bLD(v):this.cp0(v),w,w,w),B.ap(w,B.aI(w,w,w,w,A.n3,w,w,w,new C.dYf(d),w,w,w,B.o1(w,A.b6,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.as(B.d(v.a,w,w,w,w,w,w,D.fpA,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
cbT(d){var w
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
cp0(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.a9K
switch(p.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c5(this.gaaq(),new C.dYe(this,w,d,o),q)
if(p===D.a9L)v=new B.BJ(D.bIN,v,q)
p=this.cbT(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ab(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fH(p,B.q(q,B.q(q,v,A.f,q,q,new B.p(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A0.H3,q,q,q),A.f,q,q,new B.p(q,q,q,t,s,new B.a8(A.aA,A.aF,A.x,r,q,q),A.n),q,q,q,D.bC9,new B.R(u,u,u,u),q,q,q),q)},
b9w(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.D(this.a.d+A.i.bh(this.gSE()*0.4),0,100),q=d.b===D.a9K,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.b_(A.o.u(B.dg(s)),2,"0")+":"+A.a.b_(A.o.u(B.fP(s)),2,"0"),t,t,t,t,t,t,A.tN,t,t,t),A.b3],x.p)
for(w=0;w<4;++w){v=new B.aN(1,1)
n.push(B.q(t,t,A.f,t,t,new B.p(A.c,t,t,new B.be(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bIu,t,t,t,3))}n.push(A.dh)
n.push(D.fNw)
n.push(A.bo)
v=B.L(A.ab,A.r,1)
u=B.m(4)
n.push(B.q(t,new B.bL(A.a7,t,t,B.BX(A.A,B.q(t,t,A.f,t,t,new B.p(A.b4,t,t,B.m(2),t,t,A.n),t,t,t,A0.H3,t,t,t,t),t,r/100),t),A.f,t,t,new B.p(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.r8)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fEk,t,t,t))
return new B.D(new B.R(p,12,o,2),B.A(n,A.l,t,A.e,A.j,0,t,t),t)},
ax0(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.q(v,B.as(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.p(v,v,v,u,D.dqr,new B.a8(A.aA,A.aF,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.aw,B.d(d.a,v,1,A.a2,v,v,v,D.fus,v,v,v)],w))
return B.az(v,B.x(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dYa(this,d),v,v,v,v,v,v,!1,A.a4)},
c2a(d,e){return this.ax0(d,e,!0)},
c1S(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aSb||n===D.Ew,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.ko,0.5)
l.toString
l=B.a([k,A.dB,l],x.O)
k=p.b9w(d)
w=m?190:138
v=B.m(24)
u=B.L(A.aT,A.r,1)
w=B.az(o,B.q(o,B.bw(B.m(23),B.b2(o,o,o,new C.afW(0,p.gSE(),o),A.fQ),A.aq),A.f,o,o,new B.p(o,o,u,v,o,o,A.n),o,w,o,A.i1,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dY8(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kA[s]
t.push(new B.ci(A.A,o,o,p.c2a(r,m?58:54),o))}k=B.a([k,A.am,w,A.ae,B.E(B.kW(0.92,t,v,8,12,A3.wp,o,!1),1)],u)
if(n!==D.a9L){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.cW(F.kA,0,B.dB(4,"count",x.S),x.gD),t=v.$ti,v=new B.bR(v,v.gI(0),t.k("bR<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.ax0(q==null?t.a(q):q,50,!1))}k.push(B.q(o,B.A(u,A.l,o,A.qW,A.j,0,o,o),A.f,o,o,new B.p(n,o,o,w,o,o,A.n),o,o,o,D.bD6,H.ang,o,o,o))}return B.q(o,B.x(k,A.l,o,A.e,A.j,0,A.p),A.f,o,o,new B.p(o,o,o,o,o,new B.a8(A.aA,A.aF,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bF_(d,e){var w=null
return B.q(w,B.x(B.a([this.b9w(d),B.E(B.b2(w,w,w,new C.afW(e,this.gSE(),w),A.fQ),1),B.az(w,B.q(w,B.as(B.d(F.kA[e].a,w,w,w,w,w,w,A.KA,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dY3(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.l,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bLD(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ab(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fH(1.5384615384615383,B.q(t,B.c5(this.gaaq(),new C.dY6(this,r,d),t),A.f,t,t,new B.p(t,t,t,v,u,new B.a8(A.aA,A.aF,A.x,w,t,t),A.n),t,t,t,D.bI4,new B.R(8,8,8,s),t,t,t),t)}}
C.bxY.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.S()
w=B.K()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.ko,0.4)
t.toString
w.sav(new B.a8(A.aA,A.aF,A.x,B.a([u,A.dB,t],x.O),null,null).aK(0,new B.a1(0,0,p,o)))
d.ar(new B.a1(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ao(A.O,A.M,A.R,A.S,A.Q)
t.r=v.j(0.1).gp(0)
t.y=D.bIS
d.N(new B.o(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.afW.prototype={
a5(d,e){return L.M9(d,e,this.b,this.c)},
aD(d){return!0}}
C.aNt.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bwK.prototype={}
C.a9z.prototype={
B(d){var w=null
return B.c4(B.eJ(w,w,w,!0,!0,D.aij,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,K.arZ,w,w,w,new C.cmH(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h2N,w,w,w,1,w,!0),D.aij,B.cl(B.a([D.esN,B.cq(new C.cmI())],x.p),w,w,D.bEc,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.XI.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aGE(w,new B.au(A.ax,$.ax()),$,A.bF,0,B.a([],x.X),null,null)}}
C.aGE.prototype={
Y(){this.a4()
this.mh()},
b7o(d){var w=this.d.length
return A.o.F(A.i.bh(A.i.F(A.i.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mz(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b7o(v.f)
if(w!==v.x){v.x=w
E.mv("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eUG(v))
C.JQ("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cdA(){if(this.d.length<2)return
this.m(new C.eUC(this))},
b1I(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eUB(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcdz(),p=s.d,o=B.E(B.az(r,B.b2(r,r,r,new C.by9(p,s.f,r),A.fQ),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.as(B.d(n,r,r,r,r,r,r,D.fCr,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.j,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aBM[A.o.F(v,8)].j(0.9)
t=new B.aN(20,20)
o.push(B.az(r,B.q(r,B.d(p[v],r,r,r,r,r,r,D.fBE,r,r,r),A.f,r,r,new B.p(u,r,r,new B.be(t,t,t,t),r,r,A.n),r,r,r,A.fC,A.h5,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eUE(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lA(A.aQ,A.f7,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fb(o,r,r),B.A(B.a([B.E(B.aM(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bz(r,new B.b6(4,B.m(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kj,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eUF(s),r,!1,r,r,!1,r,!0,r,A.ad,r,r,r,r,r,r,r,r,r,r,r,A.dk,!0,A.a5,r,A.ao,r,r,r,r),1),A.af,new E.fC(A.i2,"Add",s.gcdx(s),A.c,r),A.bo,new E.fC(A.ox,"Spin",q,A.b4,r)],w),A.l,r,A.e,A.j,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.by9.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.o(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.S()
w=B.K()
w.r=D.biX.gp(0)
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
o.r=D.aBM[A.o.F(r,8)].gp(0)
d.cC(p,q,u,!0,o)
o=B.bZ(g,f)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.b=A.a9
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cC(o,q,u,!0,p)
J.bo(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aB(p,0,11)+"\u2026"
n=new B.iH(new B.eo(p,l,l,A.cN,l,l,l,l,l,l,D.foG),A.a5,A.bX,new B.jh(1),l,l,l,l,A.bY,l,A.cs)
n.e5()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.o(f-o-16,-p.gba(p)/2))
i.restore()}i=B.K()
i.r=D.ahW.gp(0)
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
m.E(new B.bt())
h=B.K()
h.r=A.c.gp(0)
d.af(m,h)
h=B.K()
h.b=A.a9
h.c=2
h.r=A.b6.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.Wv.prototype={
S(){return new C.bm8($,A.bF,0,B.a([],x.X),null,null)}}
C.bm8.prototype={
Y(){this.a4()
this.mh()},
mz(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JQ("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UI(900,new C.e44())}w.m(new C.e45())},
b1K(d){return this.m(new C.e4_(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b_(A.o.u(A.i.aq(m,60)),2,"0")
v=A.a.b_(A.o.u(A.o.F(A.i.cD(m),60)),2,"0")
m=B.b2(n,n,n,new C.bsQ(l,A.c0,n),A.aTG)
u=B.d(w+":"+v,n,n,n,n,n,n,D.ftl,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.as(new B.a5(280,280,new B.an(A.A,n,A.ac,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fsj,n,n,n),A.aw,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vF,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dnm[r]
u.push(new E.dW(""+q+" min",o.d===q,new C.e41(o,q),n,A.c0,n))}m=o.f
p=m?A5.uW:A.hi
m=m?"Pause":"Start"
return E.lA(A.c0,A.f7,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fb(u,n,n),new E.fb(B.a([new E.fC(p,m,new C.e42(o),A.b4,n),new E.fC(A.oA,"Reset",new C.e43(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.bsQ.prototype={
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
v.sav(new B.fZ(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aK(0,B.bZ(s,r)))
d.cC(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.VG.prototype={
S(){return new C.blH($,A.bF,0,B.a([],x.X),null,null)}}
C.blH.prototype={
Y(){this.a4()
this.mh()},
mz(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.T4.h(0,p.d)
w.toString
v=A.d.f1(w,new C.dPx())
u=A.i.F(p.f,v)
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
E.mv("flute",D.cb6[t]+5,1400,0.35)}p.m(new C.dPy())},
gcdD(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L7("Press Start",0.5)
w=D.T4.h(0,this.d)
w.toString
v=A.d.f1(w,new C.dPs())
u=A.i.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L7("Breathe in",0.5+0.5*A.dG.aA(0,p))
case 1:return new B.L7("Hold",1)
case 2:return new B.L7("Breathe out",1-0.5*A.dG.aA(0,p))
default:return new B.L7("Hold",0.5)}}}return new B.L7("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcdD(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hv.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.p(s,q,q,q,u===0?B.a([new B.ab(0,A.G,A.hv.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pY,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kj,q,q,q),q,q,q,q,q,q))
n=B.as(new B.a5(300,340,new B.an(A.A,q,A.ac,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aT(D.T4.gev(D.T4));w.C();){v=w.gR(w)
o.push(new E.dW(v,r.d===v,new C.dPv(r,v),q,A.hv,q))}w=r.e
v=w?A.zr:A.hi
w=w?"Stop":"Start"
o.push(new E.fC(v,w,new C.dPw(r),A.b4,q))
return E.lA(A.hv,A.f7,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fb(o,q,q))}}
C.aK4.prototype={}
C.Wm.prototype={
S(){return new C.bm_(new B.cw(null,x.A),B.a([],x.au),A.as,A.c)}}
C.bm_.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,K.oI,s,s,s,new C.e0A(t,d),s,s,s,s,"Share",s)],r),p=B.bw(B.m(18),new B.en(B.az(s,B.b2(s,s,s,new C.bo1(t.e,t.x,s),A.fQ),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e0B(t),new C.e0C(t),s,s,s,s,s,s,s,s,s,new C.e0D(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d2s[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G6(v,u,new C.e0E(t,v),!1,s))}u=t.r
return E.lA(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bV,p,s),"DRAW PAD",B.x(B.a([new E.fb(o,s,s),E.iP(A.bE,""+A.i.V(u),"Brush",30,2,new C.e0F(t),u),new E.fb(B.a([new E.dW("Eraser",t.w,new C.e0G(t),A.CN,A.bE,s),new E.fC(A.pz,"Undo",new C.e0H(t),A.c,s),new E.fC(A.ej,"Clear",new C.e0I(t),A.c,s),new E.fC(A.Ps,"Paper",new C.e0J(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bo1.prototype={
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
k=new B.c6(o,r,(o+k.a)/2,(r+k.b)/2)
p.push(k)
r=m.f
if(r!=null)k.ak(r)
m.ab()}r=new B.aq(A.d.gan(n).a,A.d.gan(n).b)
p.push(r)
p=m.f
if(p!=null)r.ak(p)
m.ab()
d.af(m,q)}}},
aD(d){return!0}}
C.X5.prototype={
S(){var w=x.S
return new C.aFY(B.aR(w),B.aR(w))}}
C.aFY.prototype={
Y(){this.a4()
this.aul()},
aul(){var w,v,u=this,t=x.N,s=B.bq(D.dsz,!0,t)
A.d.Ds(s)
w=x.S
v=B.U(s).c
t=B.C(B.cW(s,0,B.dB(u.d,"count",w),v),t)
A.d.v(t,B.cW(s,0,B.dB(u.d,"count",w),v))
A.d.Ds(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
cdy(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mv("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.erv(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gan(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bQ(A.mU,new C.erw(s,v,u),t)
else{s.x=!0
B.bQ(Ab.GH,new C.erx(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.VE,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.aq(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yL,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iW,A.j,0,q,q),q),B.E(B.ip(!0,q,q,A.y,new B.hG(v,8,8,1,q),new C.erB(r),r.e.length,A.bh,q,A.ah,!1),1)],o),A.l,q,A.e,A.j,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d43[t]
o.push(new E.dW(s.b,r.d===s.a,new C.erC(r,s),q,A.aG,q))}o.push(new E.fC(K.aqu,"New game",new C.erD(r),A.b4,q))
return E.lA(A.aG,A.f7,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fb(o,q,q))}}
C.Xf.prototype={
S(){return new C.aGi(B.a([],x.t))}}
C.aGi.prototype={
cdC(d){A.d.a8(this.d)
this.w=!0
this.b1J()},
b1J(){this.d.push(A.cQ.az(4))
this.e=0
this.a_Z()},
a_Z(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_Z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eCh(t))
s=x.H
w=3
return B.b(B.bQ(A.lH,null,s),$async$a_Z)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVx(n)
w=7
return B.b(B.bQ(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a_Z)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eCi(t))
case 1:return B.h(u,v)}})
return B.i($async$a_Z,v)},
aVx(d){this.m(new C.eCf(this,d))
E.mv("marimba",D.cb5[d]+5,450,0.55)
B.bQ(A.GF,new C.eCg(this),x.H)},
cdE(d){var w,v,u=this
if(!u.w||u.r)return
u.aVx(d)
w=u.d
v=u.e
if(w[v]!==d){G.dE(90,"",600,0,0.5,"saw")
u.m(new C.eCj(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eCk(u))
B.bQ(A.hI,new C.eCl(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aWf,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fCR,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aAF[v]
u=u.j(q.f===v?1:0.35)
t=new B.aN(28,28)
s=q.f===v?B.a([new B.ab(0,A.G,D.aAF[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.az(p,B.cT(p,p,p,p,A.b_,new B.p(u,p,new B.bH(r,r,r,r),new B.be(t,t,t,t),s,p,A.n),A.jo,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eCm(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.as(new B.D(A.ad,B.x(B.a([o,A.am,n,A.dc,new B.fH(1,B.kW(1,l,2,12,12,p,A.dZ,!1),p)],m),A.l,p,A.ba,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lA(A.bk,A.f7,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fb(B.a([new E.fC(A.hi,n,q.gcdB(q),A.b4,p)],m),p,p))}}
C.Xz.prototype={
S(){return new C.bnf(new B.au(A.ax,$.ax()))}}
C.bnf.prototype={
axU(d){return B.p7(A.i.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eQ9(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cX(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eQi()
l=B.aM(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bz(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.m(16),A7.xN),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.m(16),D.b59),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lV,"Bill amount",!0,!0,!1,m,m,m,m,D.fA7,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.ec,m,m,m,1,m,m,!1,"\u2022",m,new C.eQe(n),m,m,m,!1,m,m,!1,m,!0,m,A.ad,m,m,m,m,m,m,m,m,m,m,m,A.aVd,!0,A.a5,m,A.ao,m,m,m,m)
k=A.b4.j(0.1)
s=B.m(20)
r=B.L(A.b4.j(0.35),A.r,1)
q=x.p
s=B.cl(B.a([l,A.bz,B.q(m,B.x(B.a([t.$2("Tip ("+A.i.V(n.e)+"%)","$"+n.axU(w)),t.$2("Total","$"+n.axU(v)),A4.NK,t.$3$big("Each of "+n.f+" pays","$"+n.axU(u),!0)],q),A.l,m,A.e,A.j,0,A.p),A.f,m,m,new B.p(k,m,r,s,m,m,A.n),m,m,m,m,A.bS,m,m,m)],q),m,m,A.ft,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cPm[p]
r.push(new E.dW(""+o+"%",A.i.V(n.e)===o,new C.eQf(n,o),m,A.b4,m))}l=n.f
return E.lA(A.b4,A.f7,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fb(r,"TIP",m),E.iP(A.aG,""+l,"People",20,1,new C.eQg(n),l),new E.fb(B.a([new E.dW("Round up",n.r,new C.eQh(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.X4.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bmK(w,A.cQ,$,A.bF,0,B.a([],x.X),null,null)}}
C.bmK.prototype={
Y(){this.a4()
this.mh()},
mz(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.i.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t
E.XB("snare",0,0.5)}u.m(new C.eqa())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h2()
u.w=t
u.x=t?0:3.141592653589793
E.mv("bell",24,400,0.5)}u.m(new C.eqb())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bfz(v,o.r>0,n))}u=B.az(n,B.as(B.bW(A.fU,m,A.bs,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eq3(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.i.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.L(A.d3,A.r,6)
s=B.a([new B.ab(0,A.G,A.aQ.j(0.4),A.J,30)],x.V)
u=B.az(n,B.as(B.e1(A.A,B.q(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fzi,n,n,n),A.f,n,n,new B.p(n,n,v,n,s,D.eAe,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eq4(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.az(n,B.as(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fo8,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kj,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eq5(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dky[r]
v.push(new E.dW(q.b,o.d===q.a,new C.eq6(o,q),q.c,A.bg,n))}v=B.a([new E.fb(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iP(A.bg,""+s,"Dice",4,1,new C.eq7(o),s))}if(o.d==="num"){s=o.z
s=E.iP(A.bg,""+s,"From",100,1,new C.eq8(o),s)
p=o.Q
A.d.v(v,B.a([s,E.iP(A.bg,""+p,"To",1000,2,new C.eq9(o),p)],m))}return E.lA(A.bg,A.f7,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.P,0,A.p))}}
C.bfz.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cQ.ai()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ab(0,A.G,A.w.j(0.4),A.cC,14)],x.V)
t=B.a([],x.p)
for(s=D.dEC.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.q(p,p,A.f,p,p,A.XH,p,18,p,p,p,p,p,18),p))
return B.eG(A.A,w,B.q(p,new B.an(A.a0,p,A.ac,A.t,t,p),A.f,p,p,new B.p(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bI,p,p,100),p)}}
C.aNf.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzS.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.byZ()}}
C.aNA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzY.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bzk()}}
C.aO2.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA6.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bzO()}}
C.aOt.prototype={
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
this.bAe()}}
var z=a.updateTypes(["Q(u_)","~()","Q(a5D)","aB<~>()","Q(D7)","H(u_,H)","F(F,u_)","Q(D3)","Q(a_C)","Q(acI)","Q(a4u)","Q(nL)","XA()","VF()","a9z()","Xa()","Xp()","Xb()","Q(mY)","VM()","age(Z,H)","af5(Z,H)","~(a9<@,@>)","H(D3,D3)","n(eh)","Q(ag2)","Q(a1Q)","Q(Di)","Q(adc)","Q(af8)","Q(acW)","H(H,rb)","H(H,D7)","n(rb)","~(rb,ai<n>,H)","rb?(D7)","X4()","v(n,a1D)","Q(abB)","~(Ba)","XD()","~(uP,n,o,u,F)","~(n,u_)","Wn()","WP(Z)","Of(Z)","W6(Z,bv<F>,bv<F>)","XI()","Wv()","VG()","Wm()","X5()","Xf()","Xz()","Q(rb)"])
C.fKE.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fzj.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fH2.prototype={
$1(d){var w
if(!this.a.Ml(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fH3.prototype={
$1(d){return d.x},
$S:z+0}
C.fKB.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fKC.prototype={
$1(d){var w
if(!this.a.Ml(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fKD.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ejh.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eji.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.ejj.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.ms(v,A.dK,A.iy)}},
$S:8}
C.eju.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ejv.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ejq.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ejo.prototype={
$2(d,e){var w=this.a
w.r.push(B.cy(B.dw(0,0,0,d,0,0),new C.ejp(w,this.b,e)))},
$S:1905}
C.ejp.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ejr.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gX2().ald(0,u[1],u[2],u[3])
u[4].bO(0,new C.ejm(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dE(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ejn(w.a,v,w.f,w.r))},
$S:0}
C.ejm.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:199}
C.ejn.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejs.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gX2().am4(t,u[1],s,u[3])
G.dE(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ejl(w.a,v,w.e,w.f))},
$S:0}
C.ejl.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejt.prototype={
$0(){G.dE(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ejk(w,this.b))},
$S:0}
C.ejk.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ejy.prototype={
$0(){var w=this.a
return w.m(new C.ejx(w))},
$S:0}
C.ejx.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ejz.prototype={
$0(){var w=this.a
return w.m(new C.ejw(w))},
$S:0}
C.ejw.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ejA.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.PP()},
$S:0}
C.ejB.prototype={
$0(){return this.a.Z8(this.b)},
$S:0}
C.ejC.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PP():w.aYy()},
$S:2}
C.ejD.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PP():w.aYy()},
$S:0}
C.eyB.prototype={
$2(d,e){return d+e},
$S:1906}
C.eyV.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eyU(w,d))},
$S:1907}
C.eyU.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.i.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eyW.prototype={
$0(){},
$S:0}
C.eyX.prototype={
$0(){},
$S:0}
C.eyD.prototype={
$0(){return this.a.m(new C.eyC(this.b,this.c))},
$S:0}
C.eyC.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eys.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.eyt.prototype={
$1(d){return this.a.cx=d},
$S:32}
C.eyu.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.eyv.prototype={
$1(d){return this.a.cy=d},
$S:32}
C.eyw.prototype={
$1(d){return this.a.db===d},
$S:33}
C.eyx.prototype={
$1(d){return this.a.db=d},
$S:32}
C.eyy.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.eyz.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.J(0,d)},
$S:32}
C.eyA.prototype={
$0(){var w=this.a
return w.m(w.gayv())},
$S:0}
C.eyq.prototype={
$1(d){return this.a.$1(!0)},
$S:70}
C.eyr.prototype={
$1(d){return this.a.$1(!1)},
$S:112}
C.eyp.prototype={
$1(d){return this.a.$1(!1)},
$S:143}
C.eyO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b2(p,p,p,new C.bjr(o,p),n)
w=this.b
v=C.bCt("WORLD",w.a,w.c)
u=C.bCt("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.i.V(t*100)
t=t<0.25?A.c0:A.b4
t=C.bCt("FUEL",""+s+"%",t)
s=o.r.b
r=A.i.V(s*100)
s=s>D.Dw[o.db].d?A.c0:A.c
q=x.p
s=B.a([v,u,t,C.bCt("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bCt("HEIGHT",""+A.i.V(A.i.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.A(s,A.l,p,A.iW,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bI1(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tf[w].a+".":"You landed on every world!"
v=B.a([new E.fC(A.oB,"Again",new C.eyJ(o),A.c,p),new E.fC(A.ow,"Rebuild",new C.eyK(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fC(A.jH,"Next world",new C.eyL(o),A.b4,p))
n.push(C.hzA("Perfect landing!",w,A.b4,v))}if(o.as==="crashed")n.push(C.hzA("Crash!",o.at,A.c0,B.a([new E.fC(A.oB,"Try again",new C.eyM(o),A.b4,p),new E.fC(A.ow,"Rebuild",new C.eyN(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b0,A.t,n,p)},
$S:67}
C.eyJ.prototype={
$0(){var w=this.a
return w.m(w.gayv())},
$S:0}
C.eyK.prototype={
$0(){var w=this.a
return w.m(new C.eyG(w))},
$S:0}
C.eyG.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eyL.prototype={
$0(){var w=this.a
return w.m(new C.eyF(w))},
$S:0}
C.eyF.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eyM.prototype={
$0(){var w=this.a
return w.m(w.gayv())},
$S:0}
C.eyN.prototype={
$0(){var w=this.a
return w.m(new C.eyE(w))},
$S:0}
C.eyE.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eyP.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.eyI(v,w))},
$S:0}
C.eyI.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eyQ.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eyR.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eyS.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eyT.prototype={
$0(){var w=this.a
return w.m(new C.eyH(w))},
$S:0}
C.eyH.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dPq.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iB(B.a([C.huJ(),C.huK()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kX(0,B.cO(J.t(r,1)))
q.m(new C.dPp(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dPp.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dP0.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dP1.prototype={
$0(){return this.a.bZW(B.aV(J.t(this.b,"group")))},
$S:0}
C.dP2.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dP3.prototype={
$1(d){return A.a.b_(A.o.ft(A.o.D(A.i.V(d*255),0,255),16),2,"0")},
$S:335}
C.dPr.prototype={
$0(){return E.XB("kick",0,0.25)},
$S:0}
C.dP4.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dP5.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dP6.prototype={
$0(){return E.XB("kick",0,0.5)},
$S:0}
C.dP7.prototype={
$0(){return G.dE(1300+this.a.RG.az(900),"",40,0,0.2,"square")},
$S:0}
C.dP9.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.CW
if(w===2)w=1
else w=w===1?0:2
u.CW=w}else{w=this.a
v=w.ch
if(v.q(0,u))v.W(0,u)
else{v.J(0,u)
if(w.CW===2)w.CW=1}if(v.a===0&&w.CW===0)w.CW=2
u=w}if(u.cy!=null&&!A.d.aV(u.d.e,new C.dP8(u)))u.cy=null
u.id=0},
$S:0}
C.dP8.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAl(d)},
$S:z+10}
C.dOY.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dOZ.prototype={
$0(){var w=this.a
return w.m(w.gc9z())},
$S:0}
C.dP_.prototype={
$0(){return this.a.aeG(null)},
$S:0}
C.dPg.prototype={
$0(){var w=this.a.as
return w==null?null:w.fa(0,B.I(["t","shot"],x.N,x.z))},
$S:0}
C.dPh.prototype={
$0(){return this.a.cG0(this.b.a)},
$S:0}
C.dPi.prototype={
$0(){return this.a.aeG(this.b)},
$S:0}
C.dPj.prototype={
$1(d){var w=this.a
return w.m(new C.dPf(w,d))},
$S:6}
C.dPf.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dPk.prototype={
$0(){var w=this.a
return w.m(new C.dPe(w,this.b))},
$S:0}
C.dPe.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dPl.prototype={
$0(){var w=this.a
return w.m(new C.dPd(w))},
$S:0}
C.dPd.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dPm.prototype={
$0(){var w=this.a
return w.m(new C.dPc(w))},
$S:0}
C.dPc.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fa(0,B.I(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.LQ},
$S:0}
C.dPn.prototype={
$0(){var w=this.a
return w.m(new C.dPb(w))},
$S:0}
C.dPb.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b0j()
else w.p3=null},
$S:0}
C.dPo.prototype={
$0(){var w=this.a
return w.m(new C.dPa(w))},
$S:0}
C.dPa.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c6D.prototype={
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
C.c6E.prototype={
$1(d){var w=new B.qr([],[]).o_(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:390}
C.fsz.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:230}
C.fsA.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:230}
C.fsB.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:230}
C.fsI.prototype={
$1(d){return!J.t(d,0)},
$S:230}
C.fsJ.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:230}
C.fsK.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:230}
C.dR5.prototype={
$1(d){return this.a.av9(0)},
$S:8}
C.dQK.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.ihN(),B.U(w).k("N<1,H>")).fM(0)},
$S:0}
C.dQN.prototype={
$1(d){return""+d},
$S:76}
C.dR6.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dQI.prototype={
$1(d){return this.a.av9(this.b)},
$S:8}
C.dQJ.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.az_(0)
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
p=a1.ayZ(0,a0,a1.mi(0.82,0.25),0)
o=a1.ayZ(0,a0,a1.mi(0.82,0.65),0)
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
C.dQO.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.az_(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.D3(p,"switch",new B.o(0.14*q.a,r*q.b),0))}o.mP(0,w.e,o.mi(0.86,0.5))},
$S:0}
C.dQD.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dQE.prototype={
$2(d,e){return A.i.aS(d.c.b,e.c.b)},
$S:z+23}
C.dQF.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dQG.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dQH.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.ae_(this.c)
if(v.ax)C.JQ("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dE(140,"",250,0,0.3,"square")}},
$S:0}
C.dQP.prototype={
$0(){},
$S:0}
C.dQQ.prototype={
$0(){return A.d.cH(this.a.e,this.b)},
$S:0}
C.dQR.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dQM.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.br(w.e,new C.dQL(v))
w.cy=null},
$S:0}
C.dQL.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dQC.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mP(0,this.b,new B.o(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dR_.prototype={
$0(){var w=this.a
return w.m(new C.dQZ(w))},
$S:0}
C.dQZ.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dR0.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.az(A.c2,B.jm(B.b2(w,w,w,new C.bds(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dQU(v),w,w,w,new C.dQV(v),new C.dQW(v),new C.dQX(v),w,w,w,w,w,w,w,w,w,w,new C.dQY(v),w,w,w,!1,A.a4)},
$S:36}
C.dQY.prototype={
$1(d){return this.a.cbk(d.b)},
$S:65}
C.dQW.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ckk(u)
if(t!=null){v.as=t
v.at=u
return}w=v.azR(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aJ(0,u)}},
$S:47}
C.dQX.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.o(A.i.D(w.a+u.Q.a,46,u.x.a-46),A.i.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dQV.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c2r(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new C.dQS(w))
u=t.as
u.toString
v.push(new C.nL(u,w.a,w.b))
B.jX()}}t.z=t.as=null},
$S:38}
C.dQS.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dQU.prototype={
$1(d){return this.a.axN(d.b)},
$S:312}
C.dR1.prototype={
$0(){return this.a.bDQ(this.b.a)},
$S:0}
C.dR2.prototype={
$0(){return this.a.av9(this.b.a)},
$S:0}
C.dR3.prototype={
$0(){var w=this.a
return w.m(new C.dQT(w))},
$S:0}
C.dQT.prototype={
$0(){var w=this.a
w.az_(0)
w.ay=null},
$S:0}
C.dR4.prototype={
$0(){return this.a.cBE(this.b)},
$S:0}
C.cW0.prototype={
$0(){var w=this,v=null,u=B.fq(v,A.cs,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dD,A.bY)
u.e5()
return u},
$S:260}
C.dXh.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dXg.prototype={
$0(){return this.a.d=null},
$S:0}
C.dXj.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c4k()},
$S:129}
C.dXi.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.ft_.prototype={
$0(){return K.aLk},
$S:z+40}
C.ft0.prototype={
$0(){return D.dQc},
$S:z+43}
C.ft1.prototype={
$0(){return D.dN3},
$S:z+13}
C.ft2.prototype={
$0(){return D.egA},
$S:z+14}
C.ft3.prototype={
$0(){return D.dZt},
$S:z+15}
C.ft4.prototype={
$0(){return K.aLb},
$S:z+16}
C.ft5.prototype={
$0(){return D.eem},
$S:z+17}
C.ft6.prototype={
$0(){return K.aLj},
$S:z+12}
C.ft7.prototype={
$0(){return D.dPk},
$S:z+19}
C.f8o.prototype={
$2(d,e){return new C.age(e,$.bGX()[e],new C.f8n(e,this.a),null)},
$S:z+20}
C.f8n.prototype={
$0(){var w=this.a,v=I.aIS.h(0,$.bGX()[w].a)
$.aty=v==null?"music":v
B.a6(this.b,!1).ce(B.ec(new C.f8l(w),!1,null,x.H))},
$S:0}
C.f8l.prototype={
$1(d){return $.bGX()[this.a].e.$0()},
$S:39}
C.f8p.prototype={
$2(d,e){return new C.af5(e,D.aBh[e],new C.f8m(this.a,e),null)},
$S:z+21}
C.f8m.prototype={
$0(){return this.a.d.$1(D.aBh[this.b])},
$S:0}
C.f84.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f83.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f82.prototype={
$1(d){var w=this
return new B.dY(new C.f81(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f81.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.l,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.fKk,A.aw,D.fR9,A.ae],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fzB,a0,a0,a0)
m=new B.aN(12,12)
l=new B.aN(12,12)
l=B.a([new B.by(1,A.bb,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.e6(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.EO,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jx,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0),A.af,new B.by(2,A.bb,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.e6(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.EO,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jx,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dzP[k]
i=new B.aN(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bA
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.az(a0,B.q(a0,B.X(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.p(g,a0,new B.bH(e,e,e,e),new B.be(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.fC,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f8_(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.v(v,B.a([n,A.am,new B.c8(A.aL,A.e,A.j,A.l,a0,A.p,a0,0,l,a0),A.T,new B.a5(a0,44,B.cl(m,a0,a0,a0,a0,a0,A.aL,!1),a0),A.aB],w))}v.push(B.bJ(A.AY,a0,new C.f80(t,r,q,u,a3),a0))
return new B.D(new B.R(0,0,0,a2.f.d),B.bm(!0,new B.cP(new B.aY(0,1/0,0,a1.a.b*0.86),B.cl(v,a0,a0,A2.yM,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:102}
C.f8_.prototype={
$0(){var w=this
return w.a.$1(new C.f7Z(w.b,w.c,w.d))},
$S:0}
C.f7Z.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f80.prototype={
$0(){var w=this,v=w.a
v.m(new C.f7Y(v,w.b,w.c,w.d))
B.a6(w.e,!1).O(null)},
$S:0}
C.f7Y.prototype={
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
C.f8c.prototype={
$0(){var w=this.a
return w.m(new C.f8b(w))},
$S:0}
C.f8b.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f8d.prototype={
$0(){return E.uG(this.b,this.a.f,"scene")},
$S:0}
C.f8e.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gH(u),A.d.gan(u),0.4)
u.toString
w=this.a.ga_x().x
w===$&&B.c()
return new B.bN(new B.p(v,v,v,v,v,new B.bY(D.b2F,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c3],x.O),v,v),A.n),A.bj,v,v)},
$S:284}
C.f8f.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.as(B.ev(A.A,B.c5(new B.h7(B.a([u.guK(),u.ga_x()],x.dS)),new C.f8a(u,this.b,v),w),A.f,A.e7),w,w,w)},
$S:215}
C.f8a.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guK().x
r===$&&B.c()
w=r<0.9?1:1-C.btN(r,0.9,0.98)
v=s.ga_x().x
v===$&&B.c()
u=A.dG.aA(0,v)
switch(s.gaz0().a){case 0:s=s.bD0(t.b,r,u,t.c)
break
case 1:s=s.bTZ(t.b,r,u,t.c)
break
case 2:s=s.cGv(t.b,r,u,t.c)
break
case 3:s=s.bFX(t.b,r,u,t.c)
break
case 4:s=s.bJj(t.b,r,u,t.c)
break
case 5:s=s.cbl(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:185}
C.f8g.prototype={
$2(d,e){var w=B.abo(this.b),v=this.c.d,u=B.ar(A.d.gH(v),A.d.gan(v),0.4)
u.toString
v=B.ar(A.d.gH(v),A.d.gan(v),0.4)
v.toString
v=w.cPt(u,A.bA,v,3.5)
u=this.a
w=u.guK().x
w===$&&B.c()
return B.Z_(B.kX(null,null,null,1,0,new C.f89(u),A.i.D(w,0,1)),v)},
$S:1909}
C.f89.prototype={
$1(d){var w=this.a
w.guK().sp(0,d)
if(w.as)w.m(new C.f85(w))},
$S:6}
C.f85.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f8h.prototype={
$0(){var w=this.a
w.guK().sp(0,0)
w.af5()},
$S:0}
C.f8i.prototype={
$1(d){var w=this.a
w.m(new C.f88(w,d))
if(w.as)w.af5()},
$S:6}
C.f88.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f8j.prototype={
$0(){var w=this.a
w.m(new C.f87(w,this.b))
w.guK().sp(0,0)
if(w.as)w.af5()},
$S:0}
C.f87.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f8k.prototype={
$0(){var w=this.a
return w.m(new C.f86(w,this.b))},
$S:0}
C.f86.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f7W.prototype={
$2(d,e){return A.i.aS(d.a,e.a)},
$S:1910}
C.f7X.prototype={
$1(d){return d.b},
$S:1911}
C.dre.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.drf.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.drb.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.drc.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drd.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drg.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.drh.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dri.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drj.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.drk.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.drl.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.drm.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.drn.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dro.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.exW.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.exL.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.exN.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.exO.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.exR.prototype={
$1(d){var w=D.n7.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.exS.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.ea(new B.cM(new B.Y(q,new C.exT(d),p.k("Y<1>")),new C.exU(r),p.k("cM<1,rb?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aO(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.J)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.exT.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.exU.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.exP.prototype={
$1(d){return D.n7.h(0,d.b).c===D.xH},
$S:z+54}
C.exQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eyl.prototype={
$1(d){var w=this.a,v=d.a,u=A.i.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vN(0,u)
w.a7s(A.o.aq(v,1000))},
$S:8}
C.exV.prototype={
$0(){},
$S:0}
C.exH.prototype={
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
C.exY.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.T,B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.n7.h(0,v).b,D.n7.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.h1J,w,B.d(D.n7.h(0,v).a,w,w,w,w,w,w,A.h1,w,w,w),w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,W.as2,w,w,w,w,new C.exX(d),!1,w,w,w,w,w,w,w,D.fU0,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.exX.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ey_.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.l).w,r=B.a([D.esB],x.p)
for(w=0;w<6;++w){v=D.aBG[w]
u=B.d(v.a,t,t,t,t,t,t,A.h1,t,t,t)
r.push(B.dG(!1,t,t,t,!0,t,t,t,!0,t,t,D.c3d,t,t,t,t,new C.exZ(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lV,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,s.a.b*0.7),B.cl(r,t,t,D.bHY,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:25}
C.exZ.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.exK.prototype={
$1(d){var w=null
return B.eg(B.a([B.bO(!1,A.dt,w,w,!0,w,w,w,new C.exI(d),w,w),B.bO(!1,A.ET,w,w,!0,w,w,w,new C.exJ(d),w,w)],x.p),w,w,I.m7,D.fRm,w,w,w,w,D.fUk,w)},
$S:18}
C.exI.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.exJ.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eyj.prototype={
$0(){var w=this.a
return w.m(new C.eyi(w))},
$S:0}
C.eyi.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eyk.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nn(new C.ey9(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bdy:t
v=B.a([B.b2(u,t,t,new C.bjp(w,v,new C.eya(r),new C.eyb(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,new B.du(!0,B.c5(w,new C.eyc(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bKZ())
return B.az(A.c2,B.jm(new B.an(A.a0,t,A.b0,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eyd(r),t,r.gclD(),t,new C.eye(r),new C.eyf(r),new C.eyg(r),t,t,t,t,t,t,t,t,t,t,new C.eyh(r),t,t,t,!1,A.a4)},
$S:36}
C.ey9.prototype={
$0(){return this.a.ad2(this.b)},
$S:0}
C.eyh.prototype={
$1(d){return this.a.cEc(d.b)},
$S:65}
C.eyf.prototype={
$1(d){return this.a.clE(d.b)},
$S:47}
C.eyg.prototype={
$1(d){return this.a.clF(d.b)},
$S:19}
C.eye.prototype={
$1(d){return this.a.b3Q()},
$S:38}
C.eyd.prototype={
$1(d){return this.a.adK(d.b)},
$S:312}
C.eya.prototype={
$0(){return this.a.z},
$S:659}
C.eyb.prototype={
$0(){return this.a.Q},
$S:737}
C.eyc.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bPg()
if(p.length===0)return A.bM
w=A.w.j(0.55)
v=B.m(14)
u=B.L(A.bA,A.r,1)
t=B.a([D.fOJ,A.cS],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.J)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,A.aWb,q,q,q))
return B.q(q,B.x(t,A.E,q,A.e,A.P,0,A.p),A.f,q,q,new B.p(w,q,u,v,q,q,A.n),q,q,q,q,A.h5,q,q,q)},
$S:69}
C.exM.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.L(e.j(0.6),A.r,1),s=x.p
return new B.D(A.en,B.A(B.a([B.q(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ac.Vz,w,w,w),A.bG,B.d(g,w,w,w,w,w,w,F.abj,w,w,w)],s),A.E,w,A.e,A.j,0,A.p),1)],s),A.E,w,A.e,A.j,0,w,w),w)},
$S:1913}
C.ey5.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.ey6.prototype={
$0(){var w=this.a
return w.m(new C.ey4(w))},
$S:0}
C.ey4.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ey7.prototype={
$0(){var w=this.a
return w.m(new C.ey3(w))},
$S:0}
C.ey3.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.ey8.prototype={
$0(){var w=this.a
return w.m(new C.ey2(w))},
$S:0}
C.ey2.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ey1.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n7.gdO(D.n7),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.J)(p),++r)u.push(s.cyX(p[r]))
return new B.D(S.ali,B.x(B.a([new B.D(Aj.an0,w,q),B.A(u,A.l,q,A.e,A.j,0,q,q)],v),A.E,q,A.e,A.j,0,A.p),q)},
$S:z+37}
C.ey0.prototype={
$0(){return this.a.cbr(this.b)},
$S:0}
C.dra.prototype={
$0(){var w=this,v=null,u=B.fq(v,A.cs,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dD,A.bY)
u.e5()
return u},
$S:260}
C.bPX.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bQ7.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bQ2.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bQ8.prototype={
$1(d){return this.a.Ml(d)&&!d.x},
$S:z+0}
C.bQ9.prototype={
$2(d,e){return Math.max(d,this.a.aCI(e))},
$S:z+6}
C.bQb.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bQc(w))},
$S:z+5}
C.bQc.prototype={
$0(){return this.a.a},
$S:87}
C.bQa.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bQd.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bQe(w))},
$S:z+5}
C.bQe.prototype={
$0(){return this.a.a},
$S:87}
C.bPZ.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bQ_(w))},
$S:z+5}
C.bQ_.prototype={
$0(){return this.a.a},
$S:87}
C.bPY.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bQ0.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bQ1(w))},
$S:z+5}
C.bQ1.prototype={
$0(){return this.a.a},
$S:87}
C.bPW.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bQf.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bQ3.prototype={
$1(d){return d!==this.b&&this.a.aJ1(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bQ6.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bQ5.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bQ4.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bKj.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bKk.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.ctP.prototype={
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
$S:199}
C.fWv.prototype={
$1(d){var w
$.S()
w=B.K()
w.r=d.gp(0)
return w},
$S:1914}
C.fWx.prototype={
$2(d,e){var w
$.S()
w=B.K()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.bu
return w},
$S:1915}
C.fWy.prototype={
$5(d,e,f,g,h){return B.bn(new B.a1(d,e,d+f,e+g),new B.aN(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1916}
C.fWw.prototype={
$3(d,e,f){var w
$.S()
w=B.K()
w.sav(new B.a8(A.b1,A.b7,A.x,B.a([e,f],x.O),null,null).aK(0,d))
return w},
$S:1917}
C.bJY.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bJZ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bJX(w))},
$S:0}
C.bJX.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bK_.prototype={
$0(){return B.a([],x.C)},
$S:1918}
C.bK0.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:376}
C.bK1.prototype={
$0(){var w,v,u
J.bH5(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.tQ(v))if(C.hfK(v.b))w.b3j(v)
else w.a0B(v)
else{u=w.a.c.bgb(v)
w.afh(u==null?"The "+$.qE().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bJW.prototype={
$1(d){return new B.dY(new C.bJT(this.a,this.b),null)},
$S:20}
C.bJT.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bJU(this.a,o,a3),m=$.qE(),l=o.b,k=m.h(0,l).d,j=A.i.V(o.ch/1.04),i=new C.bJV(o,n,k),h=B.m(26),g=B.L(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ab(0,A.G,k.j(0.25),A.J,26)],f),d=B.q(p,p,A.f,p,p,new B.p(A.aT,p,p,B.m(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.L(k,A.r,1)
a1=B.q(p,B.as(B.d(m.h(0,l).c,p,p,p,p,p,p,A.pX,p,p,p),p,p,p),A.f,p,p,new B.p(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jP,p,p,p),D.fOx],a0),A.E,p,A.e,A.j,0,A.p),1)
v=k.j(0.2)
u=B.m(14)
t=B.L(k,A.r,1)
u=B.A(B.a([a1,A.bc,w,B.q(p,B.d(""+A.i.V(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(v,p,t,u,p,p,A.n),p,p,p,p,A.mc,p,p,p)],a0),A.l,p,A.e,A.j,0,p,p)
t=A.w.j(0.35)
v=B.m(18)
w=B.L(A.dr,A.r,1)
a1=30+28*o.ch
s=B.m(8)
r=B.a([k.j(0.85),A.as],x.O)
q=B.L(A.aD,A.r,2)
f=B.a([new B.ab(0,A.G,k.j(0.5),A.J,14)],f)
v=B.q(p,B.as(B.cT(p,B.as(B.ev(A.A,new B.D(A.hL,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mA,p,p,p),p),A.f,A.dE),p,p,p),p,p,A.b_,new B.p(p,p,q,s,f,new B.a8(A.aA,A.aF,A.x,r,p,p),A.n),A.eG,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.p(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.j,0,p,p)
w=B.aI(p,p,p,p,B.X(A.aqm,k,p,p,p,30),p,p,p,new C.bJP(n,o),p,p,p,p,p,p)
t=B.abo(a2).bfF(k,A.bA,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Z_(B.kX(p,p,p,5.2,1,n,A.i.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.X(A.a2v,k,p,p,p,30),p,p,p,new C.bJQ(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.j,0,p,p)
return B.bm(!0,B.q(p,B.x(B.a([d,A.ae,u,A.aB,v,A.ae,i,A.aw,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.hp,p,p,p),1),B.bO(!1,A_.aXe,p,p,!0,p,p,p,new C.bJR(a2),p,B.fv(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.t_,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.j,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.p(p,p,g,h,e,D.cav,A.n),p,p,p,A.yD,D.bEv,p,p,p),!0,!1,A.ag,!0,!0)},
$S:88}
C.bJU.prototype={
$1(d){var w=this.a
w.m(new C.bJN(this.b,d))
this.c.$1(new C.bJO())
w.a.toString},
$S:6}
C.bJN.prototype={
$0(){return this.a.ch=A.i.D(this.b,1,5.2)},
$S:0}
C.bJO.prototype={
$0(){},
$S:0}
C.bJV.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.m(14),r=u?w.c:A.bA
r=B.L(r,A.r,u?2:1)
return B.E(B.az(v,B.cT(v,B.as(B.ev(A.A,B.d(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.f,A.e7),v,v,v),v,v,A.b_,new B.p(t,v,r,s,v,v,A.n),A.h3,v,v,v,A.jq,A.qC,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bJS(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:678}
C.bJS.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJP.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bJQ.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bJR.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.bKg.prototype={
$2(d,e){var w
if(d==="short"){G.dE(1800,"",120,0,0.55,"noise")
G.dE(200,"",160,2.2,0.4,"saw")
B.fL()
w=this.a
if(w.c!=null)w.afh("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dE(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.afh("\u26a0 Overloaded! The "+$.qE().h(0,e.b).b+" can only give about "+A.i.ad(w.a.c.Aj(e),2)+" amps but your gadgets are asking for "+A.i.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.afh("Burnt out! "+e.ay)
G.dE(140,"",320,0,0.6,"noise")
G.dE(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bKh.prototype={
$0(){},
$S:0}
C.bJq.prototype={
$0(){},
$S:0}
C.bKi.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bKf.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.az(A.c2,B.b2(p,p,p,new C.ak4(w,v,u,t,s,r==null?A.js:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bK9(o),new C.bKa(o),new C.bKb(o),p,p,p,p,p,p,p,p,p,p,new C.bKc(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bcQ)
w=o.Q
if(w!=null){v=B.m(14)
u=B.L(A.cI,A.r,1)
n.push(B.ap(p,B.az(p,B.q(p,B.A(B.a([D.fEJ,B.E(B.d(w,p,p,p,p,p,p,D.fwp,p,p,p),1)],q),A.E,p,A.e,A.j,0,p,p),A.f,p,p,new B.p(D.biQ,p,u,v,p,p,A.n),p,p,p,p,A.nG,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKd(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b1b(B.A(B.a([D.bKc,new E.fC(A.CO,"Cut wire",new C.bKe(o),A.c0,p)],q),A.l,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.cmc(w),p,p,10,10,p,p))}return B.jm(new B.an(A.a0,p,A.b0,A.t,n,p),A.t,p)},
$S:326}
C.bKa.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.ban(s)
if(r!=null){t.m(new C.bK7(t,r,d))
return}w=t.b4_(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.o(v*u.a,w.d*u.b).aJ(0,s)
t.m(new C.bK8(t,w))}},
$S:47}
C.bK7.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bK8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bKb.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bK5(w,d))
else if(w.w!=null)w.m(new C.bK6(w,d.b.a2(0,w.x)))},
$S:19}
C.bK5.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bK6.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.i.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.i.D(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bK9.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.ban(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.am4(u.a,u.b,v.a,v.b)!=null)G.dE(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.aff()},
$S:38}
C.bKc.prototype={
$1(d){var w=this.a,v=d.b,u=w.b4_(v)
if(u!=null){w.m(new C.bK3(w,u))
if(D.ms.al(0,u.b))w.cwP(u)
w.a.toString
return}w.m(new C.bK4(w,w.cJG(v)))},
$S:65}
C.bK3.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dE(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dE(200,"",70,0,0.2,"saw")}},
$S:0}
C.bK4.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bKd.prototype={
$0(){var w=this.a
return w.m(new C.bK2(w))},
$S:0}
C.bK2.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bKe.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
G.dE(300,"",50,0,0.35,"noise")
w.aff()},
$S:0}
C.bJr.prototype={
$0(){return this.a.bsD(this.b)},
$S:0}
C.bJK.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fqq,w,w,w),B.E(B.kX(this.b.d,w,w,g,h,new C.bJM(this.a,f),A.i.D(e,h,g)),1)],x.p),A.l,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1919}
C.bJM.prototype={
$1(d){var w=this.a
w.m(new C.bJL(this.b,d))
w.a.toString},
$S:6}
C.bJL.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJx.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
G.dE(260,"",70,0,0.35,"noise")
w.aff()},
$S:0}
C.bJy.prototype={
$0(){var w=this.a
return w.m(new C.bJw(w))},
$S:0}
C.bJw.prototype={
$0(){return this.a.d=null},
$S:0}
C.bJz.prototype={
$0(){this.a.m(new C.bJv(this.b,this.c))
G.dE(900,"",40,0,0.3,"noise")},
$S:0}
C.bJv.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bJC.prototype={
$0(){return this.a.b3j(this.b)},
$S:0}
C.bJD.prototype={
$0(){return this.a.a0B(this.b)},
$S:0}
C.bJE.prototype={
$0(){return this.a.a2e(this.b)},
$S:0}
C.bJF.prototype={
$0(){var w=this.a
w.m(new C.bJu(this.b,this.c))
w.a.toString},
$S:0}
C.bJu.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bJG.prototype={
$0(){var w=this.a
w.m(new C.bJt(this.b,this.c))
w.a.toString},
$S:0}
C.bJt.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bJH.prototype={
$0(){var w=this.a
w.m(new C.bJs(this.b,this.c))
w.a.toString},
$S:0}
C.bJs.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bJI.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJJ.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJA.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJB.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fsL.prototype={
$1(d){return d.aID("bulb")},
$S:z+2}
C.fsM.prototype={
$1(d){return d.qe(0,"switch")&&d.aID("bulb")},
$S:z+2}
C.fsN.prototype={
$1(d){return A.d.aV(d.a,new C.fsy())},
$S:z+2}
C.fsy.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fsO.prototype={
$1(d){return d.qe(0,"resistor")&&A.d.aV(d.a,new C.fsx())},
$S:z+2}
C.fsx.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fsP.prototype={
$1(d){return!d.qe(0,"battery")&&d.aID("bulb")},
$S:z+2}
C.fsC.prototype={
$1(d){return A.d.aV(d.a,new C.fsw())},
$S:z+2}
C.fsw.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fsD.prototype={
$1(d){return A.d.aV(d.a,new C.fsv())},
$S:z+2}
C.fsv.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fsE.prototype={
$1(d){return A.d.aV(d.a,new C.fsu())},
$S:z+2}
C.fsu.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fsF.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.fss())&&A.d.aV(w,new C.fst())&&d.qe(0,"buck")},
$S:z+2}
C.fss.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fst.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fsG.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.fsq())&&A.d.aV(w,new C.fsr())},
$S:z+2}
C.fsq.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fsr.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fsH.prototype={
$1(d){return A.d.aV(d.a,new C.fsp())},
$S:z+2}
C.fsp.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e15.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.e1e.prototype={
$1(d){var w=this.a.d
return w.aJ1(d)&&w.tQ(d)},
$S:z+0}
C.e1f.prototype={
$1(d){return d.x},
$S:z+0}
C.e1g.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e1h.prototype={
$0(){},
$S:0}
C.e14.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fWl,A.aw,D.fGy,A.W],o)
for(w=this.a,v=0;v<19;++v){u=D.S0[v]
t=A.c.j(0.06)
s=new B.aN(14,14)
r=new B.ay(A.bA,1,A.r,-1)
n.push(B.az(q,B.q(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iF,q,q,q),A.bG,B.d(u.b,q,3,A.a2,q,q,q,D.fx9,q,q,q)],o),A.E,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(t,q,new B.bH(r,r,r,r),new B.be(s,s,s,s),q,q,A.n),q,q,q,A.cy,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e13(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eP(q,F.mQ,new B.D(A.bS,new B.a5(340,q,B.cl(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.db,q,new B.b9(p,A.a1),q)},
$S:48}
C.e13.prototype={
$0(){B.a6(this.b,!1).O(null)
var w=this.a
w.m(new C.e12(w,this.c))
G.dE(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e12.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.blj()},
$S:0}
C.e10.prototype={
$1(d){return new C.WP(this.a.d,null)},
$S:z+44}
C.e11.prototype={
$0(){},
$S:0}
C.e1d.prototype={
$1(d){return new B.dY(new C.e1c(this.a),null)},
$S:20}
C.e1c.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aja(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.b4:A.aG
k=B.aF(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fTu,A.b3,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.j,0,m,m),A.T,B.bw(B.m(4),B.kq(A.bA,m,m,5,m,w.a/11,new B.lN(f,x.c)),A.aq),A.ae],v)
if(h)u.push(D.fJI)
else{h=f.j(0.1)
t=B.m(14)
s=B.L(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.KJ,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.EP,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.x(B.a([r,A.aw,q,new B.bL(A.aa,m,m,B.bO(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e1a(l,e),m,m),m)],v),A.E,m,A.e,A.j,0,A.p),A.f,m,m,new B.p(h,m,s,t,m,m,A.n),m,m,m,m,A.bh,m,m,m))}u.push(A.W)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aN(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dr,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.abi,m,m,m)
r=j[o]
q=w.q(0,o)?A.aD:A.c
u.push(B.az(m,B.q(m,new B.c8(A.aL,A.e,A.j,A.l,m,A.p,m,0,B.a([s,A.au,new B.by(1,A.bb,B.d(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.p(h,m,new B.bH(n,n,n,n),new B.be(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.nG,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e1b(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,k.a.b*0.75),B.cl(u,m,m,A2.yM,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:88}
C.e1a.prototype={
$0(){var w=this.a
w.m(new C.e18(w))
this.b.$1(new C.e19())
w.Fx()},
$S:0}
C.e18.prototype={
$0(){var w=this.a
$.aja()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e19.prototype={
$0(){},
$S:0}
C.e1b.prototype={
$0(){var w=this.a
w.m(new C.e16(w,this.b))
this.c.$1(new C.e17())
w.Fx()},
$S:0}
C.e16.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e17.prototype={
$0(){},
$S:0}
C.e1j.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.e1k.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.md("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).ce(B.ec(new C.e1i(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e1i.prototype={
$1(d){B.ll("construction")
return Al.hUM()},
$S:z+45}
C.e1l.prototype={
$0(){return E.hGc(this.a,"ELECTRONICS LAB",this.b,A.aG)},
$S:0}
C.e1m.prototype={
$0(){var w=this.a
return w.m(w.d.gd0w())},
$S:0}
C.e1n.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gtg(v))
w.Fx()},
$S:0}
C.cLo.prototype={
$2(d,e){var w=null,v=this.a.gaz8().x
v===$&&B.c()
return B.b2(w,w,w,new C.bbh(v,w),A.az)},
$S:56}
C.cLn.prototype={
$3(d,e,f){var w=new B.aG($.S().r,A.ai,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.c6(v,u,v+e,u))
w.E(new B.c6(v,u,v,u+e))
w.E(new B.c6(v,u,v-e,u))
w.E(new B.c6(v,u,v,t))
w.E(new B.bt())
t=B.K()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:455}
C.h0w.prototype={
$3(d,e,f){return new C.W6(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h0x.prototype={
$4(d,e,f,g){var w=x.a
return new B.d1(e,!1,B.ig(A.A,g,null,new B.bg(B.cG(A.cw,e,null),new B.br(0.85,1,w),w.k("bg<bP.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dYf.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.dYe.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c1S(o):q.bF_(o,p),m=x.p
p=B.a([B.oy(new B.mq(n,new B.bA(p,x.bz)),A.pl,B.pU(),A.b_,A.b_,new C.dYc())],m)
n=t.d
if(n){w=A.i.F(q.gSE(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.au],m)
if(w)m.push(D.bJZ)
else m.push(A.b3)
m.push(B.q(s,s,A.f,s,s,new B.p(w?A.b4:A.as,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.au)
p.push(B.ap(s,B.as(B.cT(s,B.A(m,A.l,s,A.e,A.j,0,s,s),s,s,A.e2,new B.p(A.w,s,s,u,s,s,A.n),A.mU,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.AA)p.push(B.ap(s,B.as(B.q(s,s,A.f,s,s,A.LV,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Ew)p.push(B.ap(s,B.q(s,s,A.f,s,s,A.LV,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.az(s,B.as(B.q(s,s,A.f,s,s,new B.p(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dYd(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bw(r,new B.an(A.a0,s,A.b0,A.t,p,s),A.aq)},
$S:302}
C.dYc.prototype={
$2(d,e){var w=x.a
return new B.d1(e,!1,B.ig(A.A,d,null,new B.bg(e,new B.br(0.92,1,w),w.k("bg<bP.T>"))),null)},
$S:386}
C.dYd.prototype={
$0(){var w=this.a
return w.m(new C.dYb(w))},
$S:0}
C.dYb.prototype={
$0(){return this.a.e=null},
$S:0}
C.dYa.prototype={
$0(){var w=this.a
return w.m(new C.dY9(w,this.b))},
$S:0}
C.dY9.prototype={
$0(){return this.a.e=A.d.co(F.kA,this.b)},
$S:0}
C.dY8.prototype={
$0(){var w=this.a
return w.m(new C.dY7(w))},
$S:0}
C.dY7.prototype={
$0(){return this.a.e=0},
$S:0}
C.dY3.prototype={
$0(){var w=this.a
return w.m(new C.dY2(w))},
$S:0}
C.dY2.prototype={
$0(){return this.a.e=null},
$S:0}
C.dY6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.q(p,B.A(B.a([D.h17,A.au,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eR,p,p,p,A.abB,p,p,p),1),B.d(A.a.b_(A.o.u(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b_(A.o.u(B.fP(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.rc,p,p,p)],l),A.l,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.ky,p,p,p)
w=this.a
v=B.a([B.b2(p,p,p,new C.bxY(w.gSE(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.L(A.aT,A.r,1)
s=B.m(10)
o=B.q(p,B.A(B.a([B.az(p,B.q(p,p,A.f,p,p,A.aeC,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dY5(w),p,p,p,p,p,p,!1,A.a4),A.e8,B.q(p,p,A.f,p,p,A.XG,p,12,p,p,p,p,p,12),A.e8,B.q(p,p,A.f,p,p,D.b7W,p,12,p,p,p,p,p,12),A.au,B.E(B.d(F.kA[o].a,p,1,A.a2,p,p,p,A.abc,p,p,p),1)],l),A.l,p,A.e,A.j,0,p,p),A.f,A.cl,p,p,p,24,p,p,A.fK,p,p,p)
r=w.e
r.toString
v.push(B.bS(0,new B.D(D.bGs,B.q(p,B.bw(s,B.x(B.a([o,B.E(B.b2(p,p,p,new C.afW(r,w.gSE(),p),A.fQ),1)],l),A.l,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new B.p(A.w,p,t,u,D.dw0,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.L(A.aT,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jq,w.ax0(F.kA[q],34,!1),p))
v.push(B.ap(8,B.as(B.q(p,B.A(s,A.l,p,A.e,A.P,0,p,p),A.f,p,p,new B.p(o,p,t,u,p,p,A.n),p,p,p,p,A.lL,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bw(n,B.q(p,B.x(B.a([m,B.E(new B.an(A.a0,p,A.b0,A.t,v,p),1)],l),A.l,p,A.e,A.j,0,A.p),A.f,X.ZM,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:302}
C.dY5.prototype={
$0(){var w=this.a
return w.m(new C.dY4(w))},
$S:0}
C.dY4.prototype={
$0(){return this.a.e=null},
$S:0}
C.ftf.prototype={
$0(){return D.eiD},
$S:z+47}
C.ftg.prototype={
$0(){return D.dQL},
$S:z+48}
C.fth.prototype={
$0(){return D.dNg},
$S:z+49}
C.fti.prototype={
$0(){return D.dQ8},
$S:z+50}
C.ftj.prototype={
$0(){return D.dVg},
$S:z+51}
C.ftk.prototype={
$0(){return D.eep},
$S:z+52}
C.ftl.prototype={
$0(){return D.egz},
$S:z+53}
C.ftm.prototype={
$0(){return D.dUA},
$S:z+36}
C.cmH.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.cmI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hK1(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aN(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ab(0,A.G,p.j(0.4),A.dp,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Ak.KH,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fC9,k,k,k)
l=A.c.j(0.85)
h.push(B.az(k,B.q(k,new B.an(A.a0,k,A.ac,A.t,B.a([new B.cK(k,-6,-6,k,k,k,n,k),new B.bL(A.lz,k,k,B.x(B.a([m,A.cS,B.d(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.p(k,k,k,new B.be(q,q,q,q),p,new B.a8(A.aA,A.aF,A.x,o,k,k),A.n),k,v,k,k,A.bI,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cmG(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bW(A.bH,h,A.bs,k,14,14)},
$S:165}
C.cmG.prototype={
$0(){return B.a6(this.a,!1).ce(B.ec(new C.cmF(this.b),!1,null,x.H))},
$S:0}
C.cmF.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eUG.prototype={
$0(){var w=this.a
return w.w=w.d[w.b7o(w.f)]},
$S:0}
C.eUC.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cQ.ai()*7},
$S:0}
C.eUB.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cf)
w.w=""},
$S:0}
C.eUE.prototype={
$0(){var w=this.a
return w.m(new C.eUD(w,this.b))},
$S:0}
C.eUD.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cH(w,this.b)},
$S:0}
C.eUF.prototype={
$1(d){return this.a.b1I(0)},
$S:2}
C.e44.prototype={
$0(){return C.JQ("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e45.prototype={
$0(){},
$S:0}
C.e4_.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e41.prototype={
$0(){return this.a.b1K(this.b)},
$S:0}
C.e42.prototype={
$0(){var w=this.a
return w.m(new C.e40(w))},
$S:0}
C.e40.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e43.prototype={
$0(){var w=this.a
return w.b1K(w.d)},
$S:0}
C.dPx.prototype={
$2(d,e){return d+e},
$S:79}
C.dPy.prototype={
$0(){},
$S:0}
C.dPs.prototype={
$2(d,e){return d+e},
$S:79}
C.dPv.prototype={
$0(){var w=this.a
return w.m(new C.dPu(w,this.b))},
$S:0}
C.dPu.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dPw.prototype={
$0(){var w=this.a
return w.m(new C.dPt(w))},
$S:0}
C.dPt.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e0A.prototype={
$0(){return E.uG(this.b,this.a.d,"drawing")},
$S:0}
C.e0B.prototype={
$1(d){var w=this.a
return w.m(new C.e0z(w,d))},
$S:47}
C.e0z.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aK4(u,v,t))},
$S:0}
C.e0C.prototype={
$1(d){var w=this.a
return w.m(new C.e0y(w,d))},
$S:19}
C.e0y.prototype={
$0(){return A.d.gan(this.a.e).c.push(this.b.b)},
$S:0}
C.e0D.prototype={
$1(d){var w=this.a
return w.m(new C.e0x(w,d))},
$S:22}
C.e0x.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aK4(u,v,t))},
$S:0}
C.e0E.prototype={
$0(){var w=this.a
return w.m(new C.e0w(w,this.b))},
$S:0}
C.e0w.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e0F.prototype={
$1(d){var w=this.a
return w.m(new C.e0v(w,d))},
$S:6}
C.e0v.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e0G.prototype={
$0(){var w=this.a
return w.m(new C.e0u(w))},
$S:0}
C.e0u.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e0H.prototype={
$0(){var w=this.a
return w.m(new C.e0t(w))},
$S:0}
C.e0t.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e0I.prototype={
$0(){var w=this.a
return w.m(A.d.gtg(w.e))},
$S:0}
C.e0J.prototype={
$0(){var w=this.a
return w.m(new C.e0s(w))},
$S:0}
C.e0s.prototype={
$0(){var w=this.a
w.x=D.aAx[A.o.F(A.d.co(D.aAx,w.x)+1,4)]},
$S:0}
C.erv.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
C.erw.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JQ("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.eru(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JQ("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.eru.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.erx.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.ert(w))},
$S:12}
C.ert.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.erB.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.az(w,B.lB(new C.erz(v,e),w,A.b_,A.pl,w,w,new B.br(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erA(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:82}
C.erA.prototype={
$0(){return this.a.cdy(this.b)},
$S:0}
C.erz.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fL(3.141592653589793*e)
m=B.m(16)
w=o?p:D.c9H
if(o)v=q.a.r.q(0,q.b)?A.b4.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.L(u.r.q(0,t)?A.b4:A.aT,A.r,1)
if(o){r=B.dr()
r.fL(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fz(A.A,B.d(u[t],p,p,p,p,p,p,H.abm,p,p,p),p,r,!0)
u=r}else u=D.fV1
return B.fz(A.A,B.q(A.A,u,A.f,p,p,new B.p(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:113}
C.erC.prototype={
$0(){var w=this.a
return w.m(new C.ery(w,this.b))},
$S:0}
C.ery.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aul()},
$S:0}
C.erD.prototype={
$0(){var w=this.a
return w.m(w.gbNK())},
$S:0}
C.eCh.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eCi.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eCf.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eCg.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eCe(w))},
$S:12}
C.eCe.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eCj.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eCk.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eCl.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b1J()},
$S:12}
C.eCm.prototype={
$0(){return this.a.cdE(this.b)},
$S:0}
C.eQ9.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.eQi.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kx,B.A(B.a([v,A.af,new B.dm(1,A.co,B.ev(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e7),w)],x.p),A.l,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1920}
C.eQe.prototype={
$1(d){return this.a.m(new C.eQd())},
$S:2}
C.eQd.prototype={
$0(){},
$S:0}
C.eQf.prototype={
$0(){var w=this.a
return w.m(new C.eQc(w,this.b))},
$S:0}
C.eQc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eQg.prototype={
$1(d){var w=this.a
return w.m(new C.eQb(w,d))},
$S:6}
C.eQb.prototype={
$0(){return this.a.f=A.i.V(this.b)},
$S:0}
C.eQh.prototype={
$0(){var w=this.a
return w.m(new C.eQa(w))},
$S:0}
C.eQa.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eqa.prototype={
$0(){},
$S:0}
C.eqb.prototype={
$0(){},
$S:0}
C.eq3.prototype={
$0(){var w=this.a
return w.m(new C.eq2(w))},
$S:0}
C.eq2.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c0(u,1,!1,x.S)
w.r=0.9
E.XB("hat",0,0.6)},
$S:0}
C.eq4.prototype={
$0(){var w=this.a
return w.m(new C.eq1(w))},
$S:0}
C.eq1.prototype={
$0(){this.a.y=1.1
E.mv("bell",36,200,0.4)},
$S:0}
C.eq5.prototype={
$0(){var w=this.a
return w.m(new C.eq0(w))},
$S:0}
C.eq0.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.az(Math.max(v,u)-t+1)
w.as=u
E.mv("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.eq6.prototype={
$0(){var w=this.a
return w.m(new C.eq_(w,this.b))},
$S:0}
C.eq_.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.eq7.prototype={
$1(d){var w=this.a
return w.m(new C.epZ(w,d))},
$S:6}
C.epZ.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.i.V(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.eq8.prototype={
$1(d){var w=this.a
return w.m(new C.epY(w,d))},
$S:6}
C.epY.prototype={
$0(){return this.a.z=A.i.V(this.b)},
$S:0}
C.eq9.prototype={
$1(d){var w=this.a
return w.m(new C.epX(w,d))},
$S:6}
C.epX.prototype={
$0(){return this.a.Q=A.i.V(this.b)},
$S:0}
C.cmD.prototype={
$0(){var w=this
return E.mv(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aOa.prototype
w.bzW=w.t
w=C.aNd.prototype
w.byX=w.t
w=C.aNe.prototype
w.byY=w.t
w=C.aNi.prototype
w.bz1=w.t
w=C.aP_.prototype
w.bAS=w.t
w=C.aO8.prototype
w.bzU=w.t
w=C.azx.prototype
w.bvY=w.t
w=C.azy.prototype
w.bvZ=w.t
w=C.aLF.prototype
w.bxk=w.t
w=C.aNt.prototype
w.bzc=w.t
w=C.aNf.prototype
w.byZ=w.t
w=C.aNA.prototype
w.bzk=w.t
w=C.aO2.prototype
w.bzO=w.t
w=C.aOt.prototype
w.bAe=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aGc.prototype,"gayv","c9_",1)
v(C,"iqD","c6B",3)
var q
u(q=C.aEG.prototype,"gchT","chU",22)
w(q,"gc9z","b0j",1)
w(C.aEI.prototype,"gcbh","cbi",1)
t(C.aEZ.prototype,"gcbo","cbp",39)
w(q=C.aJd.prototype,"gcBn","cBo",1)
w(q,"gcbq","af5",1)
w(q,"gcmm","cmn",1)
w(q,"gcbn","af4",3)
w(q=C.aGb.prototype,"gbKS","aas",3)
w(q,"gclD","b3Q",1)
w(q,"gcpq","ahG",3)
s(q,"gcbs","af6",3)
s(q=C.a5D.prototype,"gtg","a8",1)
u(q,"gcZa","aoQ",0)
u(q,"gcVy","Ml",0)
w(q,"gd0w","blj",1)
r(C.ak4.prototype,"gcbP",0,5,null,["$5"],["qU"],41,0,0)
w(q=C.aFa.prototype,"gcbQ","cbR",1)
w(q,"gcsf","ai1",3)
w(q,"gci9","agm",3)
w(q,"gczo","ajb",3)
w(q=C.aGE.prototype,"gcdz","cdA",1)
s(q,"gcdx","b1I",1)
w(C.aFY.prototype,"gbNK","aul",1)
s(C.aGi.prototype,"gcdB","cdC",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.alg,C.GY,C.vr,C.aUf,C.a4u,C.bco,C.c6C,C.yL,C.D3,C.nL,C.bd9,C.Ba,C.bvq,C.qt,C.rb,C.D7,C.a_C,C.ag2,C.a1Q,C.Di,C.acW,C.adc,C.af8,C.GJ,C.eh,C.u_,C.abB,C.acI,C.a5D,C.mY,C.bda,C.fQ,C.mx,C.bwK,C.aK4])
u(B.hu,[C.fKE,C.fzj,C.fH2,C.fH3,C.fKB,C.fKC,C.ejj,C.ejC,C.eyV,C.eys,C.eyt,C.eyu,C.eyv,C.eyw,C.eyx,C.eyy,C.eyz,C.eyq,C.eyr,C.eyp,C.eyQ,C.eyR,C.eyS,C.dP3,C.dP5,C.dP8,C.dPj,C.c6D,C.c6E,C.fsz,C.fsA,C.fsB,C.fsI,C.fsJ,C.fsK,C.dR5,C.dQN,C.dR6,C.dQI,C.dQD,C.dQF,C.dQL,C.dQY,C.dQW,C.dQX,C.dQV,C.dQS,C.dQU,C.f8l,C.f82,C.f89,C.f8i,C.f7X,C.dre,C.drf,C.drb,C.drc,C.drd,C.drg,C.drh,C.dri,C.drj,C.drk,C.drl,C.drm,C.drn,C.dro,C.exR,C.exS,C.exT,C.exU,C.exP,C.exQ,C.eyl,C.exY,C.ey_,C.exK,C.eyh,C.eyf,C.eyg,C.eye,C.eyd,C.exM,C.bPX,C.bQ7,C.bQ2,C.bQ8,C.bQa,C.bPY,C.bPW,C.bQf,C.bQ3,C.bQ6,C.bQ5,C.bQ4,C.bKj,C.fWv,C.fWy,C.fWw,C.bK0,C.bJW,C.bJU,C.bKi,C.bKa,C.bKb,C.bK9,C.bKc,C.bJK,C.bJM,C.bJI,C.bJJ,C.bJA,C.bJB,C.fsL,C.fsM,C.fsN,C.fsy,C.fsO,C.fsx,C.fsP,C.fsC,C.fsw,C.fsD,C.fsv,C.fsE,C.fsu,C.fsF,C.fss,C.fst,C.fsG,C.fsq,C.fsr,C.fsH,C.fsp,C.e1e,C.e1f,C.e14,C.e10,C.e1d,C.e1i,C.cLn,C.h0w,C.h0x,C.cmF,C.eUF,C.e0B,C.e0C,C.e0D,C.e0F,C.erz,C.eQ9,C.eQi,C.eQe,C.eQg,C.eq7,C.eq8,C.eq9])
u(B.jy,[C.fKD,C.ejo,C.ejm,C.eyB,C.eyO,C.dQE,C.dR0,C.dXj,C.f8o,C.f8p,C.f81,C.f8e,C.f8f,C.f8a,C.f8g,C.f7W,C.exN,C.exO,C.eyk,C.eyc,C.ey1,C.bQ9,C.bQb,C.bQd,C.bPZ,C.bQ0,C.bKk,C.ctP,C.fWx,C.bJT,C.bJV,C.bKg,C.bKf,C.e1c,C.cLo,C.dYe,C.dYc,C.dY6,C.cmI,C.dPx,C.dPs,C.erB])
u(B.af,[C.WP,C.Xb,C.VF,C.VM,C.Og,C.aJc,C.Xa,C.ak2,C.Wn,C.azc,C.W6,C.XI,C.Wv,C.VG,C.Wm,C.X5,C.Xf,C.Xz,C.X4])
u(B.ah,[C.bmy,C.aOa,C.aNd,C.aNi,C.aEZ,C.aP_,C.aO8,C.azx,C.bzW,C.aLF,C.aNt,C.aOt,C.aNA,C.aNf,C.bm_,C.aFY,C.aGi,C.bnf,C.aO2])
u(B.iJ,[C.ejh,C.eji,C.eju,C.ejv,C.ejq,C.ejp,C.ejr,C.ejn,C.ejs,C.ejl,C.ejt,C.ejk,C.ejy,C.ejx,C.ejz,C.ejw,C.ejA,C.ejB,C.ejD,C.eyU,C.eyW,C.eyX,C.eyD,C.eyC,C.eyA,C.eyJ,C.eyK,C.eyG,C.eyL,C.eyF,C.eyM,C.eyN,C.eyE,C.eyP,C.eyI,C.eyT,C.eyH,C.dPq,C.dPp,C.dP0,C.dP1,C.dP2,C.dPr,C.dP4,C.dP6,C.dP7,C.dP9,C.dOY,C.dOZ,C.dP_,C.dPg,C.dPh,C.dPi,C.dPf,C.dPk,C.dPe,C.dPl,C.dPd,C.dPm,C.dPc,C.dPn,C.dPb,C.dPo,C.dPa,C.dQK,C.dQJ,C.dQO,C.dQG,C.dQH,C.dQP,C.dQQ,C.dQR,C.dQM,C.dQC,C.dR_,C.dQZ,C.dR1,C.dR2,C.dR3,C.dQT,C.dR4,C.cW0,C.dXh,C.dXg,C.dXi,C.ft_,C.ft0,C.ft1,C.ft2,C.ft3,C.ft4,C.ft5,C.ft6,C.ft7,C.f8n,C.f8m,C.f84,C.f83,C.f8_,C.f7Z,C.f80,C.f7Y,C.f8c,C.f8b,C.f8d,C.f85,C.f8h,C.f88,C.f8j,C.f87,C.f8k,C.f86,C.exW,C.exL,C.exV,C.exH,C.exX,C.exZ,C.exI,C.exJ,C.eyj,C.eyi,C.ey9,C.eya,C.eyb,C.ey5,C.ey6,C.ey4,C.ey7,C.ey3,C.ey8,C.ey2,C.ey0,C.dra,C.bQc,C.bQe,C.bQ_,C.bQ1,C.bJY,C.bJZ,C.bJX,C.bK_,C.bK1,C.bJN,C.bJO,C.bJS,C.bJP,C.bJQ,C.bJR,C.bKh,C.bJq,C.bK7,C.bK8,C.bK5,C.bK6,C.bK3,C.bK4,C.bKd,C.bK2,C.bKe,C.bJr,C.bJL,C.bJx,C.bJy,C.bJw,C.bJz,C.bJv,C.bJC,C.bJD,C.bJE,C.bJF,C.bJu,C.bJG,C.bJt,C.bJH,C.bJs,C.e15,C.e1g,C.e1h,C.e13,C.e12,C.e11,C.e1a,C.e18,C.e19,C.e1b,C.e16,C.e17,C.e1j,C.e1k,C.e1l,C.e1m,C.e1n,C.dYf,C.dYd,C.dYb,C.dYa,C.dY9,C.dY8,C.dY7,C.dY3,C.dY2,C.dY5,C.dY4,C.ftf,C.ftg,C.fth,C.fti,C.ftj,C.ftk,C.ftl,C.ftm,C.cmH,C.cmG,C.eUG,C.eUC,C.eUB,C.eUE,C.eUD,C.e44,C.e45,C.e4_,C.e41,C.e42,C.e40,C.e43,C.dPy,C.dPv,C.dPu,C.dPw,C.dPt,C.e0A,C.e0z,C.e0y,C.e0x,C.e0E,C.e0w,C.e0v,C.e0G,C.e0u,C.e0H,C.e0t,C.e0I,C.e0J,C.e0s,C.erv,C.erw,C.eru,C.erx,C.ert,C.erA,C.erC,C.ery,C.erD,C.eCh,C.eCi,C.eCf,C.eCg,C.eCe,C.eCj,C.eCk,C.eCl,C.eCm,C.eQd,C.eQf,C.eQc,C.eQb,C.eQh,C.eQa,C.eqa,C.eqb,C.eq3,C.eq2,C.eq4,C.eq1,C.eq5,C.eq0,C.eq6,C.eq_,C.epZ,C.epY,C.epX,C.cmD])
t(C.bA8,C.aOa)
t(C.aGc,C.bA8)
u(B.mn,[C.bjr,C.bds,C.buO,C.bc6,C.btp,C.bsP,C.bcN,C.bsR,C.bwU,C.bjp,C.ak4,C.bbh,C.bxY,C.afW,C.by9,C.bsQ,C.bo1])
t(C.aNe,C.aNd)
t(C.aEG,C.aNe)
t(C.bzT,C.aNi)
t(C.aEI,C.bzT)
u(B.lD,[C.Lk,C.a1D,C.Kj])
u(B.aw,[C.btO,C.age,C.af5,C.Rc,C.buj,C.a9z,C.bfz])
t(C.aJd,C.aP_)
t(C.bjo,B.pe)
t(C.aGb,C.aO8)
t(C.azy,C.azx)
t(C.ak3,C.azy)
t(C.aFa,C.bzW)
t(C.bbi,C.aLF)
t(C.blY,C.aNt)
t(C.bAf,C.aOt)
t(C.aGE,C.bAf)
t(C.bzY,C.aNA)
t(C.bm8,C.bzY)
t(C.bzS,C.aNf)
t(C.blH,C.bzS)
t(C.bA6,C.aO2)
t(C.bmK,C.bA6)
w(C.aOa,B.cc)
w(C.bA8,E.nJ)
w(C.aNd,B.cc)
w(C.aNe,E.nJ)
w(C.aNi,B.cc)
w(C.bzT,E.nJ)
w(C.aP_,B.eN)
w(C.aO8,B.cc)
w(C.azx,B.cc)
w(C.azy,E.nJ)
w(C.aLF,B.cc)
v(C.bzW,B.eC)
w(C.aNt,B.cc)
w(C.aNf,B.cc)
w(C.bzS,E.nJ)
w(C.aNA,B.cc)
w(C.bzY,E.nJ)
w(C.aO2,B.cc)
w(C.bA6,E.nJ)
w(C.aOt,B.cc)
w(C.bAf,E.nJ)})()
B.iT(b.typeUniverse,JSON.parse('{"WP":{"af":[],"v":[]},"bmy":{"ah":["WP"]},"Xb":{"af":[],"v":[]},"aGc":{"ah":["Xb"]},"bjr":{"aC":[]},"VF":{"af":[],"v":[]},"aEG":{"ah":["VF"]},"VM":{"af":[],"v":[]},"aEI":{"ah":["VM"]},"bds":{"aC":[]},"age":{"aw":[],"v":[]},"af5":{"aw":[],"v":[]},"aJc":{"af":[],"v":[]},"Og":{"af":[],"v":[]},"aEZ":{"ah":["Og"]},"btO":{"aw":[],"v":[]},"Rc":{"aw":[],"v":[]},"buO":{"aC":[]},"buj":{"aw":[],"v":[]},"bc6":{"aC":[]},"aJd":{"ah":["aJc"]},"btp":{"aC":[]},"bsP":{"aC":[]},"bcN":{"aC":[]},"bsR":{"aC":[]},"bwU":{"aC":[]},"Xa":{"af":[],"v":[]},"bjo":{"aC":[]},"aGb":{"ah":["Xa"]},"bjp":{"aC":[]},"ak4":{"aC":[]},"ak2":{"af":[],"v":[]},"ak3":{"ah":["ak2"]},"Wn":{"af":[],"v":[]},"azc":{"af":[],"v":[]},"aFa":{"ah":["Wn"],"eC":[]},"bbi":{"ah":["azc"]},"bbh":{"aC":[]},"W6":{"af":[],"v":[]},"blY":{"ah":["W6"]},"bxY":{"aC":[]},"afW":{"aC":[]},"a9z":{"aw":[],"v":[]},"XI":{"af":[],"v":[]},"Wv":{"af":[],"v":[]},"VG":{"af":[],"v":[]},"Wm":{"af":[],"v":[]},"X5":{"af":[],"v":[]},"Xf":{"af":[],"v":[]},"Xz":{"af":[],"v":[]},"X4":{"af":[],"v":[]},"aGE":{"ah":["XI"]},"by9":{"aC":[]},"bm8":{"ah":["Wv"]},"bsQ":{"aC":[]},"blH":{"ah":["VG"]},"bm_":{"ah":["Wm"]},"bo1":{"aC":[]},"aFY":{"ah":["X5"]},"aGi":{"ah":["Xf"]},"bnf":{"ah":["Xz"]},"bmK":{"ah":["X4"]},"bfz":{"aw":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.at
return{c:w("lN<u?>"),G:w("u"),J:w("bu<n,F>"),Q:w("de<n>"),Z:w("a0"),M:w("O<da>"),R:w("O<T1>"),h:w("O<a4u>"),V:w("O<ab>"),O:w("O<u>"),C:w("O<V>"),D:w("O<aB<aE>>"),w:w("O<a0>"),E:w("O<ai<n>>"),b:w("O<ai<F>>"),U:w("O<ai<H?>>"),x:w("O<a9<n,aE>>"),g:w("O<o>"),F:w("O<u_>"),v:w("O<fT>"),eZ:w("O<+(n,n)>"),fT:w("O<+(F,v)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),r:w("O<+(n,n,a0)>"),e:w("O<+(n,F,F,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,F,F,a9<n,F>)>"),_:w("O<vr>"),fQ:w("O<abB>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<Gi>"),p:w("O<v>"),bL:w("O<acI>"),fH:w("O<lj>"),a_:w("O<acW>"),cB:w("O<nL>"),ba:w("O<adc>"),eW:w("O<D7>"),fY:w("O<a_C>"),ac:w("O<af8>"),cd:w("O<Di>"),fr:w("O<ag2>"),e4:w("O<a1Q>"),au:w("O<aK4>"),f7:w("O<Q>"),n:w("O<F>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<u_?>"),bN:w("O<H?>"),q:w("cw<ak3>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("N<eh,n>"),fR:w("N<+(F,v),v>"),l:w("iC"),gA:w("zW"),gD:w("wr"),k:w("ct"),K:w("aE"),W:w("u_"),B:w("eh"),N:w("n"),bO:w("au"),a:w("br<F>"),Y:w("bA<n>"),bz:w("bA<H?>"),dg:w("ea<rb>"),m:w("bco"),a2:w("D3"),f3:w("rb"),es:w("GJ"),gV:w("mC"),y:w("Q"),i:w("F"),z:w("@"),S:w("H"),L:w("ai<@>?"),cK:w("aE?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2F=new B.da(0,0.1)
D.b4z=new C.aUf(0,0,0)
D.LQ=new C.aUf(0,0.5,0)
D.b59=new B.ay(A.b4,1,A.r,-1)
D.b6C=new B.aY(0,1/0,0,290)
D.b6J=new B.aY(16,1/0,16,1/0)
D.bov=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dwd=w([D.bov,Am.aiO],x.O)
D.eA6=new B.bY(A.Ff,1.1,A.x,null,0,D.dwd,null,null)
D.b7_=new B.p(null,null,null,null,null,D.eA6,A.n)
D.b7W=new B.p(A.bd,null,null,null,null,null,A.a6)
D.fpZ=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2w=new B.B("\u26a1",null,D.fpZ,null,null,null,null,null,null,null,null,null)
D.bcG=new B.ci(A.A,null,null,D.h2w,null)
D.aW6=new B.G(!0,A.bW,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT_=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aW6,null,A.K,null,null,null,null,null,null,null)
D.esh=new B.D(A.nJ,D.fT_,null)
D.bcQ=new B.ci(A.A,null,null,D.esh,null)
D.fIN=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aW6,null,A.K,null,null,null,null,null,null,null)
D.et8=new B.D(A.GX,D.fIN,null)
D.bdy=new B.ci(A.A,null,null,D.et8,null)
D.afD=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bhj=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bhA=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.biQ=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.biX=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bjj=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.blf=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bmi=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bn1=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ahW=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bo1=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.aij=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Zl=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bpV=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bqb=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.aiS=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.brU=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bs1=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bsv=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wc=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.buE=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.akl=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bAn=new B.bd(11e6)
D.bC9=new B.R(10,34,10,26)
D.bCh=new B.R(10,6,10,2)
D.bCj=new B.R(10,8,0,10)
D.bD_=new B.R(12,8,8,8)
D.bD6=new B.R(14,0,14,22)
D.bD8=new B.R(14,0,14,30)
D.bEc=new B.R(16,4,16,28)
D.bEv=new B.R(18,10,18,16)
D.bGs=new B.R(26,12,26,58)
D.bHj=new B.R(4,4,8,2)
D.bHY=new B.R(8,14,8,12)
D.bI4=new B.R(8,40,8,30)
D.bI9=new B.R(8,6,8,8)
D.bIu=new B.R(0,0,1.5,0)
D.b4l=new B.HZ(26,"saturation")
D.bIN=new B.uS(A.cz,D.b4l,null,A.Yc)
D.bIO=new B.hm(A.G,11)
D.bIS=new B.hm(A.G,30)
D.fHS=new B.B("REACTION LAB",null,U.aWK,null,null,null,null,A.a2,null,1,null,null)
D.bJ0=new B.by(1,A.bb,D.fHS,null)
D.fLV=new B.B("\ud83d\udce2 NGMY Ads",null,A.rc,null,null,null,null,A.eR,null,1,null,null)
D.bJZ=new B.by(1,A.bb,D.fLV,null)
D.fGz=new B.B("Wire selected",null,A.h1,null,null,null,null,null,null,null,null,null)
D.bKc=new B.by(1,A.bb,D.fGz,null)
D.api=new B.a0(62712,"MaterialIcons",!1)
D.bQk=new B.a0(62908,"MaterialIcons",!1)
D.bS1=new B.a0(983122,"MaterialIcons",!1)
D.bSe=new B.a0(983247,"MaterialIcons",!1)
D.bSK=new B.a0(983616,"MaterialIcons",!1)
D.bS0=new B.a0(983117,"MaterialIcons",!1)
D.bWq=new B.ae(D.bS0,28,A.c,null,null,null)
D.bWG=new B.ae(A.j7,18,null,null,null,null)
D.bYy=new B.ae(A.ej,21,A.c0,null,null,null)
D.bYP=new B.ae(A.oB,null,A.ab,null,null,null)
D.bYZ=new B.ae(A.a3x,21,A.ab,null,null,null)
D.bZQ=new B.ae(A.eM,17,A.ab,null,null,null)
D.c1D=new B.ae(A.j7,21,A.ab,null,null,null)
D.c3d=new B.ae(A.ed,null,A.aQ,null,null,null)
D.dtS=w([A.da,A.d7,A.da],x.O)
D.c6B=new B.a8(A.a7,A.aa,A.x,D.dtS,null,null)
D.d5i=w([A.bP,A.bi],x.O)
D.c6J=new B.a8(A.b1,A.b7,A.x,D.d5i,null,null)
D.c6X=new B.a8(A.b1,A.b7,A.x,A.a69,null,null)
D.at1=new B.a8(A.b1,A.b7,A.x,P.a5n,null,null)
D.d2Q=w([A.p9,A.iH],x.O)
D.c7K=new B.a8(A.b1,A.b7,A.x,D.d2Q,null,null)
D.d51=w([A.cX,A.as],x.O)
D.at8=new B.a8(A.b1,A.b7,A.x,D.d51,null,null)
D.dnz=w([A.d2,A.j3,A.bi],x.O)
D.c81=new B.a8(A.a7,A.aa,A.x,D.dnz,null,null)
D.dnF=w([A.cA,A.cl],x.O)
D.c8m=new B.a8(A.b1,A.b7,A.x,D.dnF,null,null)
D.cBS=w([A.bP,A.d2],x.O)
D.c8v=new B.a8(A.a7,A.aa,A.x,D.cBS,null,null)
D.aD9=w([A.cX,M.ny],x.O)
D.c8C=new B.a8(A.b1,A.b7,A.x,D.aD9,null,null)
D.c8T=new B.a8(A.b1,A.b7,A.x,S.att,null,null)
D.c9H=new B.a8(A.aA,A.aF,A.x,A.RO,null,null)
D.deU=w([A.as,A.w],x.O)
D.c9S=new B.a8(A.b1,A.b7,A.x,D.deU,null,null)
D.c9V=new B.a8(A.b1,A.b7,A.x,H.aCr,null,null)
D.bsq=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bth=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cOP=w([A.Nh,D.bsq,D.bth],x.O)
D.ca3=new B.a8(A.b1,A.b7,A.x,D.cOP,null,null)
D.cCb=w([A.d3,A.hc],x.O)
D.cai=new B.a8(A.b1,A.b7,A.x,D.cCb,null,null)
D.bvY=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cCX=w([F.afM,D.bvY],x.O)
D.cav=new B.a8(A.b1,A.b7,A.x,D.cCX,null,null)
D.cb4=w([0,4,7],x.t)
D.cb5=w([0,4,7,12],x.t)
D.cb6=w([0,4,7,4],x.t)
D.aC6=w([A.ht,A.qn],x.O)
D.aBC=w([A.hv,A.cJ],x.O)
D.azW=w([A.bg,A.dO],x.O)
D.cXv=w([A.aQ,A.d3],x.O)
D.doW=w([A.bT,A.kM],x.O)
D.azm=w([A.cI,A.ku],x.O)
D.d1D=w([A.bN,A.aM],x.O)
D.cbt=w([D.aC6,D.aBC,A.a5s,D.azW,D.cXv,A.aAb,A.aB6,D.doW,D.azm,D.d1D],B.at("O<ai<u>>"))
D.cg9=w([120,220,380],x.t)
D.cjU=w([12,16,19,24],x.t)
D.ck3=w([1400,800,450,2400],x.t)
D.csu=w([250,450,900,1500],x.t)
D.bgG=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bsQ=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bqC=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bwx=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bpI=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.ayC=w([D.bgG,D.bsQ,D.bqC,D.bwx,D.bpI],x.O)
D.cJI=w([50,25,75],x.t)
D.cPm=w([0,5,10,15,18,20,25],x.t)
D.cXO=w([900,500,250,1600],x.t)
D.d0W=w([A.bg,A.bE,A.b9,A.bg],x.O)
D.a5i=w([A.ay,A.bk,A.bd,A.aG,A.nt],x.O)
D.d2s=w([A.as,A.ay,A.cI,A.bk,A.bd,A.cD,A.ch,A.bE,A.Yt],x.O)
D.a5l=w([0.04,0.17,0.3],x.n)
D.f9l=new C.vr("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f9r=new C.vr("Medium engine","A good all-rounder.",0.3,0.9)
D.f9q=new C.vr("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.It=w([D.f9l,D.f9r,D.f9q],x._)
D.eFS=new B.y(6,"Easy")
D.eGD=new B.y(8,"Medium")
D.eBB=new B.y(10,"Hard")
D.d43=w([D.eFS,D.eGD,D.eBB],x.I)
D.aAl=w([0.55,0.78,1],x.n)
D.aAx=w([A.c,A.fz,A.nn,A.as],x.O)
D.aAF=w([A.bd,A.ay,A.bk,A.d7],x.O)
D.f9i=new C.vr("Radar","Shows your height above the ground.",0.1,0)
D.f9j=new C.vr("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f9g=new C.vr("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aAM=w([D.f9i,D.f9j,D.f9g],x._)
D.daf=w([47,100,220,470,1000],x.n)
D.Jy={volts:0}
D.a7a=new B.bu(D.Jy,[3],x.J)
D.JZ=new B.dX(["b","battery",0.2,0.3,D.a7a])
D.em5={on:0}
D.dEO=new B.bu(D.em5,[1],x.J)
D.Eu=new B.dX(["s","switch",0.5,0.3,D.dEO])
D.f7_=new B.dX(["l","bulb",0.8,0.3,A.js])
D.d5r=w([D.JZ,D.Eu,D.f7_],x.d)
D.Es=new B.cu(["b",0,"s",0])
D.f6_=new B.cu(["s",1,"l",0])
D.aRG=new B.cu(["l",1,"b",1])
D.dnL=w([D.Es,D.f6_,D.aRG],x.o)
D.d4R=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eAM=new C.mY("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d5r,D.dnL,D.d4R)
D.aLu={ohms:0}
D.aJ5=new B.bu(D.aLu,[220],x.J)
D.f6s=new B.dX(["r","resistor",0.5,0.3,D.aJ5])
D.f7e=new B.dX(["d","led",0.8,0.3,A.js])
D.dr0=w([D.JZ,D.f6s,D.f7e],x.d)
D.f5k=new B.cu(["b",0,"r",0])
D.f5U=new B.cu(["r",1,"d",0])
D.f5q=new B.cu(["d",1,"b",1])
D.dAq=w([D.f5k,D.f5U,D.f5q],x.o)
D.dru=w(["led","diode","indicator"],x.s)
D.eAT=new C.mY("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dr0,D.dAq,D.dru)
D.a8s={level:0}
D.dE9=new B.bu(D.a8s,[0.2],x.J)
D.f6y=new B.dX(["p","pot",0.5,0.3,D.dE9])
D.f6A=new B.dX(["m","motor",0.8,0.3,A.js])
D.d5L=w([D.JZ,D.f6y,D.f6A],x.d)
D.f5j=new B.cu(["b",0,"p",0])
D.f5Q=new B.cu(["p",1,"m",0])
D.f5M=new B.cu(["m",1,"b",1])
D.dvX=w([D.f5j,D.f5Q,D.f5M],x.o)
D.dns=w(["fan","motor","spin","dimmer"],x.s)
D.eAK=new C.mY("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d5L,D.dvX,D.dns)
D.a77=new B.bu(D.a8s,[0.9],x.J)
D.aRP=new B.dX(["s","solar",0.25,0.3,D.a77])
D.aRO=new B.dX(["l","bulb",0.75,0.3,A.js])
D.d8B=w([D.aRP,D.aRO],x.d)
D.f5X=new B.cu(["s",0,"l",0])
D.f5K=new B.cu(["l",1,"s",1])
D.d6z=w([D.f5X,D.f5K],x.o)
D.dwG=w(["solar","sun","without battery","no battery","free"],x.s)
D.eAN=new C.mY("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d8B,D.d6z,D.dwG)
D.f7h=new B.dX(["c","crank",0.25,0.3,D.a77])
D.dlD=w([D.f7h,D.aRO],x.d)
D.f5n=new B.cu(["c",0,"l",0])
D.f5J=new B.cu(["l",1,"c",1])
D.dmf=w([D.f5n,D.f5J],x.o)
D.dlN=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eAJ=new C.mY("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dlD,D.dmf,D.dlN)
D.dE8=new B.bu(D.a8s,[0.7],x.J)
D.f6D=new B.dX(["t","turbine",0.25,0.3,D.dE8])
D.f6q=new B.dX(["m","motor",0.75,0.3,A.js])
D.dfB=w([D.f6D,D.f6q],x.d)
D.f67=new B.cu(["t",0,"m",0])
D.f5N=new B.cu(["m",1,"t",1])
D.dez=w([D.f67,D.f5N],x.o)
D.dkl=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eAG=new C.mY("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dfB,D.dez,D.dkl)
D.aJ2=new B.bu(D.Jy,[9],x.J)
D.a9z=new B.dX(["b","battery",0.2,0.3,D.aJ2])
D.aRM=new B.dX(["r","radio",0.8,0.3,A.js])
D.dxf=w([D.a9z,D.Eu,D.aRM],x.d)
D.f61=new B.cu(["s",1,"r",0])
D.aRI=new B.cu(["r",1,"b",1])
D.caM=w([D.Es,D.f61,D.aRI],x.o)
D.dvI=w(["radio","music","listen"],x.s)
D.eAS=new C.mY("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dxf,D.caM,D.dvI)
D.dFd=new B.bu(D.Jy,[12],x.J)
D.aRL=new B.dX(["b","battery",0.2,0.3,D.dFd])
D.f70=new B.dX(["t","tv",0.8,0.3,A.js])
D.d5t=w([D.aRL,D.Eu,D.f70],x.d)
D.f62=new B.cu(["s",1,"t",0])
D.aRJ=new B.cu(["t",1,"b",1])
D.doZ=w([D.Es,D.f62,D.aRJ],x.o)
D.dxd=w(["tv","television","screen","watch"],x.s)
D.eAD=new C.mY("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d5t,D.doZ,D.dxd)
D.f6R=new B.dX(["z","buzzer",0.8,0.3,A.js])
D.cM3=w([D.JZ,D.Eu,D.f6R],x.d)
D.f63=new B.cu(["s",1,"z",0])
D.f6l=new B.cu(["z",1,"b",1])
D.d08=w([D.Es,D.f63,D.f6l],x.o)
D.dtY=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eAP=new C.mY("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cM3,D.d08,D.dtY)
D.f6z=new B.dX(["h","heater",0.8,0.3,A.js])
D.diZ=w([D.a9z,D.Eu,D.f6z],x.d)
D.f5Z=new B.cu(["s",1,"h",0])
D.f5y=new B.cu(["h",1,"b",1])
D.d0R=w([D.Es,D.f5Z,D.f5y],x.o)
D.cvL=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eAE=new C.mY("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.diZ,D.d0R,D.cvL)
D.f72=new B.dX(["s","solar",0.2,0.25,D.a77])
D.dFg=new B.bu(D.aLu,[100],x.J)
D.f75=new B.dX(["r","resistor",0.55,0.25,D.dFg])
D.f7c=new B.dX(["c","capacitor",0.85,0.25,A.js])
D.f6v=new B.dX(["q","resistor",0.55,0.6,D.aJ5])
D.f73=new B.dX(["d","led",0.85,0.6,A.js])
D.dou=w([D.f72,D.f75,D.f7c,D.f6v,D.f73],x.d)
D.f5Y=new B.cu(["s",0,"r",0])
D.f5T=new B.cu(["r",1,"c",0])
D.f5p=new B.cu(["c",1,"s",1])
D.f5o=new B.cu(["c",0,"q",0])
D.f5S=new B.cu(["q",1,"d",0])
D.f5r=new B.cu(["d",1,"c",1])
D.dco=w([D.f5Y,D.f5T,D.f5p,D.f5o,D.f5S,D.f5r],x.o)
D.dkX=w(["capacitor","store","charge","flash"],x.s)
D.eAR=new C.mY("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dou,D.dco,D.dkX)
D.f6G=new B.dX(["b","battery",0.15,0.3,D.a7a])
D.f7i=new B.dX(["l1","bulb",0.5,0.3,A.js])
D.f6O=new B.dX(["l2","bulb",0.85,0.3,A.js])
D.d3t=w([D.f6G,D.f7i,D.f6O],x.d)
D.f5i=new B.cu(["b",0,"l1",0])
D.f5G=new B.cu(["l1",1,"l2",0])
D.f5H=new B.cu(["l2",1,"b",1])
D.dgo=w([D.f5i,D.f5G,D.f5H],x.o)
D.dwZ=w(["series","two bulbs","dim"],x.s)
D.eAH=new C.mY("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d3t,D.dgo,D.dwZ)
D.emq={volts:0,charge:1}
D.dFj=new B.bu(D.emq,[1.5,0],x.J)
D.f7a=new B.dX(["b","battery",0.75,0.3,D.dFj])
D.d2R=w([D.aRP,D.f7a],x.d)
D.f5W=new B.cu(["s",0,"b",0])
D.f5m=new B.cu(["b",1,"s",1])
D.dcI=w([D.f5W,D.f5m],x.o)
D.dl6=w(["charge","rechargeable","flat","recharge"],x.s)
D.eAF=new C.mY("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d2R,D.dcI,D.dl6)
D.dFc=new B.bu(D.Jy,[4.5],x.J)
D.f6B=new B.dX(["b","battery",0.2,0.3,D.dFc])
D.aRK=new B.dX(["p","phone",0.8,0.3,A.js])
D.dfq=w([D.f6B,D.Eu,D.aRK],x.d)
D.f60=new B.cu(["s",1,"p",0])
D.a9y=new B.cu(["p",1,"b",1])
D.dsR=w([D.Es,D.f60,D.a9y],x.o)
D.duo=w(["phone","charger","usb","mobile"],x.s)
D.eAL=new C.mY("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dfq,D.dsR,D.duo)
D.f6n=new B.dX(["f","fan",0.8,0.3,A.js])
D.cnT=w([D.JZ,D.f6n],x.d)
D.f5h=new B.cu(["b",0,"f",0])
D.f5w=new B.cu(["f",1,"b",1])
D.d1p=w([D.f5h,D.f5w],x.o)
D.dnr=w(["fan","cool","air","wind"],x.s)
D.eAU=new C.mY("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cnT,D.d1p,D.dnr)
D.f6V=new B.dX(["b","battery",0.15,0.2,D.a7a])
D.f6o=new B.dX(["a","ammeter",0.5,0.2,A.js])
D.f6m=new B.dX(["l","bulb",0.85,0.2,A.js])
D.f6X=new B.dX(["v","voltmeter",0.5,0.6,A.js])
D.dls=w([D.f6V,D.f6o,D.f6m,D.f6X],x.d)
D.f5f=new B.cu(["b",0,"a",0])
D.f5e=new B.cu(["a",1,"l",0])
D.f69=new B.cu(["v",0,"l",0])
D.f6a=new B.cu(["v",1,"l",1])
D.dcz=w([D.f5f,D.f5e,D.aRG,D.f69,D.f6a],x.o)
D.dAp=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eAQ=new C.mY("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dls,D.dcz,D.dAp)
D.f7l=new B.dX(["b","battery",0.15,0.2,D.aJ2])
D.f6F=new B.dX(["t","tv",0.55,0.2,A.js])
D.aJ3=new B.bu(D.Jy,[5],x.J)
D.f6t=new B.dX(["c","buck",0.4,0.5,D.aJ3])
D.f6H=new B.dX(["p","phone",0.8,0.5,A.js])
D.da1=w([D.f7l,D.f6F,D.f6t,D.f6H],x.d)
D.f5l=new B.cu(["b",0,"t",0])
D.aRE=new B.cu(["b",0,"c",0])
D.aRF=new B.cu(["c",1,"p",0])
D.dfn=w([D.f5l,D.aRJ,D.aRE,D.aRF,D.a9y],x.o)
D.d89=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eAI=new C.mY("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.da1,D.dfn,D.d89)
D.f6u=new B.dX(["c","buck",0.5,0.3,D.aJ3])
D.d0G=w([D.aRL,D.f6u,D.aRK],x.d)
D.d5V=w([D.aRE,D.aRF,D.a9y],x.o)
D.czf=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eAC=new C.mY("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d0G,D.d5V,D.czf)
D.f6M=new B.dX(["d","diode",0.5,0.3,A.js])
D.dgC=w([D.a9z,D.f6M,D.aRM],x.d)
D.f5g=new B.cu(["b",0,"d",0])
D.f5s=new B.cu(["d",1,"r",0])
D.cOC=w([D.f5g,D.f5s,D.aRI],x.o)
D.d7P=w(["diode","protect","backwards","one way"],x.s)
D.eAO=new C.mY("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dgC,D.cOC,D.d7P)
D.S0=w([D.eAM,D.eAT,D.eAK,D.eAN,D.eAJ,D.eAG,D.eAS,D.eAD,D.eAP,D.eAE,D.eAR,D.eAH,D.eAF,D.eAL,D.eAU,D.eAQ,D.eAI,D.eAC,D.eAO],B.at("O<mY>"))
D.hF1=new C.GY("Moon",1.62,A.d2,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hF_=new C.GY("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.hF2=new C.GY("Mercury",3.7,A.ks,"Mercury is small, so its gravity is like Mars.")
D.hEX=new C.GY("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hEZ=new C.GY("Earth",9.81,A.aG,"On Earth gravity is strong, and the air also slows you down.")
D.hF0=new C.GY("Neptune",11.15,A.d7,"Neptune pulls a little harder than Earth.")
D.hEY=new C.GY("Jupiter",24.79,A.cI,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tf=w([D.hF1,D.hF_,D.hF2,D.hEX,D.hEZ,D.hF0,D.hEY],B.at("O<GY>"))
D.dcm=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dd6=w([0.2,0.5,0.8],x.n)
D.b1r=new C.Lk(0,"accordion")
D.d1L=w([A.jJ,A.D4,A.CL],x.w)
D.d9s=w(["Mail","SMS","Ad"],x.s)
D.d2k=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hDf=new C.Ba(D.b1r,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aC6,D.d1L,D.d9s,D.d2k)
D.adl=new C.Lk(1,"flip")
D.dkR=w([A.qO,Z.HT,A.v0],x.w)
D.df7=w(["Unlock","Verify","Secure"],x.s)
D.d0C=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hDe=new C.Ba(D.adl,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aBC,D.dkR,D.df7,D.d0C)
D.b1s=new C.Lk(2,"towers")
D.ddT=w([A.zp,A.qR,A.ii],x.w)
D.ddp=w(["Save","Grow","Earn"],x.s)
D.cPx=w(["","",""],x.s)
D.hDg=new C.Ba(D.b1s,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a5s,D.ddT,D.ddp,D.cPx)
D.adm=new C.Lk(3,"assemble")
D.dlR=w([A.oF,A.hz,A.ed],x.w)
D.d8N=w(["Launch","Charge","Shine"],x.s)
D.di_=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hDi=new C.Ba(D.adm,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.azW,D.dlR,D.d8N,D.di_)
D.b1t=new C.Lk(4,"carousel")
D.dlE=w([A.b9,A.eZ],x.O)
D.d9B=w([A.n2,A.apJ,A.PN],x.w)
D.d3U=w(["Explore","Discover","Learn"],x.s)
D.dfw=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hDd=new C.Ba(D.b1t,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dlE,D.d9B,D.d3U,D.dfw)
D.b1u=new C.Lk(5,"burst")
D.ddk=w([A.i_,A.rD],x.O)
D.d2e=w([A.k7,A.n0,A.hO],x.w)
D.d2C=w(["Cheer","Win","Love"],x.s)
D.d5_=w(["Make some noise","First place","Share the joy"],x.s)
D.hDh=new C.Ba(D.b1u,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.ddk,D.d2e,D.d2C,D.d5_)
D.aBh=w([D.hDf,D.hDe,D.hDg,D.hDi,D.hDd,D.hDh],B.at("O<Ba>"))
D.f2k=new B.b5("skin","Skin",A.apK)
D.f40=new B.b5("muscle","Muscles",A.Po)
D.f3E=new B.b5("organ","Organs",A.hO)
D.bQ2=new B.a0(62747,"MaterialIcons",!1)
D.f3M=new B.b5("bone","Skeleton",D.bQ2)
D.f48=new B.b5("vessel","Blood vessels",A.pD)
D.ddZ=w([D.f2k,D.f40,D.f3E,D.f3M,D.f48],x.r)
D.f9k=new C.vr("Simple legs","Light. Land gently.",0.15,0.2)
D.f9m=new C.vr("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f9p=new C.vr("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Dw=w([D.f9k,D.f9m,D.f9p],x._)
D.f4X=new B.cu(["beat",0.18,0.28,0])
D.f64=new B.cu(["burst",0.7,0.2,0])
D.f6f=new B.cu(["delay",0.45,0.5,1])
D.f5P=new B.cu(["ripple",0.75,0.6,3])
D.d8w=w([D.f4X,D.f64,D.f6f,D.f5P],x.e)
D.dk8=w([O.lv,P.JY,F.Uv],x.u)
D.hBG=new C.GJ("First spark","A clock lights a burst and a ripple",D.d8w,D.dk8)
D.f5v=new B.cu(["beat",0.15,0.3,1])
D.f4B=new B.cu(["ripple",0.62,0.15,0])
D.f6b=new B.cu(["delay",0.4,0.45,0])
D.f5b=new B.cu(["ripple",0.7,0.45,0])
D.f4T=new B.cu(["delay",0.4,0.7,1])
D.f5R=new B.cu(["shake",0.75,0.75,0])
D.dy8=w([D.f5v,D.f4B,D.f6b,D.f5b,D.f4T,D.f5R],x.e)
D.eCI=new B.y(2,4)
D.aRl=new B.y(4,5)
D.dcb=w([O.lv,P.JY,F.Uv,D.eCI,D.aRl],x.u)
D.hBI=new C.GJ("Heartbeat","Two thumps, then a shake",D.dy8,D.dcb)
D.f51=new B.cu(["dice",0.15,0.7,1])
D.f6h=new B.cu(["echo",0.4,0.7,0])
D.f59=new B.cu(["comet",0.7,0.5,4])
D.f65=new B.cu(["burst",0.72,0.2,1])
D.f5t=new B.cu(["burst",0.3,0.25,0])
D.f52=new B.cu(["pop",0.55,0.85,0])
D.cvj=w([D.f51,D.f6h,D.f59,D.f65,D.f5t,D.f52],x.e)
D.eC2=new B.y(1,3)
D.eC3=new B.y(1,4)
D.aRh=new B.y(0,5)
D.dlz=w([O.lv,R.vy,D.eC2,D.eC3,D.aRh],x.u)
D.hBH=new C.GJ("Fireworks","Dice launch comets that burst in colour",D.cvj,D.dlz)
D.f56=new B.cu(["beat",0.15,0.2,2])
D.f5D=new B.cu(["chance",0.4,0.2,0])
D.f4Z=new B.cu(["ball",0.7,0.12,3])
D.f4M=new B.cu(["chance",0.4,0.5,1])
D.f6g=new B.cu(["ball",0.3,0.08,1])
D.f4F=new B.cu(["ripple",0.7,0.55,3])
D.col=w([D.f56,D.f5D,D.f4Z,D.f4M,D.f6g,D.f4F],x.e)
D.eCJ=new B.y(2,5)
D.cLO=w([O.lv,R.vy,P.a9q,F.Uw,D.eCJ],x.u)
D.hBF=new C.GJ("Rain","Balls fall at random and splash",D.col,D.cLO)
D.f5E=new B.cu(["beat",0.12,0.45,2])
D.f66=new B.cu(["toggle",0.38,0.2,0])
D.f6d=new B.cu(["wash",0.7,0.15,4])
D.f50=new B.cu(["count3",0.38,0.45,0])
D.f68=new B.cu(["burst",0.72,0.4,0])
D.f5u=new B.cu(["light",0.55,0.7,1])
D.f4N=new B.cu(["pop",0.8,0.8,4])
D.dos=w([D.f5E,D.f66,D.f6d,D.f50,D.f68,D.f5u,D.f4N],x.e)
D.eDf=new B.y(3,6)
D.cru=w([O.lv,R.vy,P.a9q,F.Uw,D.aRh,D.eDf],x.u)
D.hBD=new C.GJ("Disco","A beat drives lights, washes and bursts",D.dos,D.cru)
D.f6k=new B.cu(["button",0.12,0.2,0])
D.f4H=new B.cu(["delay",0.34,0.2,1])
D.f6j=new B.cu(["light",0.56,0.2,1])
D.f6c=new B.cu(["delay",0.56,0.45,1])
D.f5F=new B.cu(["ball",0.34,0.6,0])
D.f4L=new B.cu(["delay",0.34,0.8,1])
D.f4A=new B.cu(["burst",0.7,0.8,5])
D.cbw=w([D.f6k,D.f4H,D.f6j,D.f6c,D.f5F,D.f4L,D.f4A],x.e)
D.eFr=new B.y(5,6)
D.du7=w([O.lv,R.vy,F.Uv,F.Uw,D.aRl,D.eFr],x.u)
D.hBE=new C.GJ("Domino","Tap the button and watch it run down the line",D.cbw,D.du7)
D.aBG=w([D.hBG,D.hBI,D.hBH,D.hBF,D.hBD,D.hBE],B.at("O<GJ>"))
D.djp=w([0.05,0.15,0.25],x.n)
D.dkk=w([1.5,3,4.5,9,12],x.n)
D.f0D=new B.b5("dice","Dice",A.ox)
D.f1S=new B.b5("coin","Coin",Q.zk)
D.f43=new B.b5("num","Number",A.wO)
D.dky=w([D.f0D,D.f1S,D.f43],x.r)
D.dkC=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aBM=w([A.c0,A.aQ,A.b4,A.aG,A.bg,A.bT,A.cI,A.hv],x.O)
D.dlF=w([A.bT,A.aG,A.dC,A.b4],x.O)
D.dmI=w([],x.h)
D.etW=new C.eh("battery","Battery","\ud83d\udd0b",A.b4,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eu1=new C.eh("solar","Solar panel","\u2600\ufe0f",A.bk,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.euG=new C.eh("crank","Hand crank","\ud83d\udd04",A.cI,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eui=new C.eh("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aG,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.etO=new C.eh("buck","Step-down converter","\ud83d\udd3d",A.hv,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eug=new C.eh("regulator","5 V regulator","\ud83e\uddca",A.bN,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.euL=new C.eh("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eus=new C.eh("ldr","Light sensor","\ud83c\udf1e",A.dC,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eu6=new C.eh("switch","Switch","\ud83c\udf9a\ufe0f",A.bg,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.euI=new C.eh("fuse","Fuse","\ud83e\uddef",A.c0,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.etG=new C.eh("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hv,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eut=new C.eh("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.euv=new C.eh("bulb","Light bulb","\ud83d\udca1",A.dC,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eu3=new C.eh("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eu7=new C.eh("motor","Motor","\u2699\ufe0f",A.bN,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eup=new C.eh("buzzer","Buzzer","\ud83d\udd14",A.bT,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.etX=new C.eh("heater","Heater","\ud83d\udd25",A.cI,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.euk=new C.eh("capacitor","Capacitor","\ud83e\udeab",A.cv,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.euc=new C.eh("radio","Radio","\ud83d\udcfb",A.nt,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eu9=new C.eh("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.etN=new C.eh("voltmeter","Voltmeter","\ud83e\udded",A.bx,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.etU=new C.eh("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eu_=new C.eh("fan","Fan","\ud83c\udf00",A.aG,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.euN=new C.eh("speaker","Speaker","\ud83d\udd0a",A.bT,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.euC=new C.eh("clock","Digital clock","\u23f0",A.b4,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.euf=new C.eh("calculator","Calculator","\ud83e\uddee",A.Mh,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.etT=new C.eh("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cv,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.euM=new C.eh("router","WiFi router","\ud83d\udcf6",A.hv,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.euP=new C.eh("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.etJ=new C.eh("toycar","Toy car","\ud83d\ude97",A.cI,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.euQ=new C.eh("kettle","Kettle","\ud83e\uded6",A.mP,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.etR=new C.eh("lamp","Desk lamp","\ud83e\ude94",A.dC,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eu2=new C.eh("lights","Party lights","\ud83c\udf84",A.nt,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eud=new C.eh("fridge","Fridge","\ud83e\uddca",A.hx,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.etL=new C.eh("washer","Washing machine","\ud83e\udee7",A.cv,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.euD=new C.eh("blender","Blender","\ud83e\udd64",A.c0,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eua=new C.eh("drone","Drone","\ud83d\ude81",A.bN,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.etQ=new C.eh("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eue=new C.eh("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.euA=new C.eh("neon","Neon sign","\ud83e\udea7",A.bT,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.etM=new C.eh("microwave","Microwave","\ud83c\udf72",A.cI,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.euu=new C.eh("doorbell","Doorbell","\ud83d\udd14",A.bk,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.etZ=new C.eh("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.euo=new C.eh("console","Game console","\ud83c\udfae",A.bg,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.euF=new C.eh("heartmon","Heart monitor","\ud83e\ude7a",A.hr,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.etK=new C.eh("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.euj=new C.eh("lighthouse","Lighthouse","\ud83d\uddfc",A.dC,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eur=new C.eh("discoball","Disco ball","\ud83e\udea9",A.nt,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.euK=new C.eh("robot","Robot","\ud83e\udd16",A.aG,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.etI=new C.eh("toaster","Toaster","\ud83c\udf5e",A.e0,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.euO=new C.eh("ledstrip","LED strip","\ud83c\udf08",A.bT,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.euz=new C.eh("pump","Water pump","\ud83d\udeb0",A.aG,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eul=new C.eh("hairdryer","Hair dryer","\ud83d\udca8",A.i_,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eux=new C.eh("headphones","Headphones","\ud83c\udfa7",A.bg,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.etS=new C.eh("smartwatch","Apple Watch Ultra","\u231a",A.bx,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.euJ=new C.eh("tablet","iPad Pro M5","\ud83d\udcf2",A.cv,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.etF=new C.eh("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hr,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eub=new C.eh("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eu4=new C.eh("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.euq=new C.eh("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.u8,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.etH=new C.eh("iphonefold","iPhone Fold","\ud83d\udcf1",A.b8,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.etV=new C.eh("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d7,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.euH=new C.eh("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cD,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eum=new C.eh("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bd,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.euh=new C.eh("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c6,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.euy=new C.eh("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eu5=new C.eh("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b4,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eun=new C.eh("honor","Honor Magic V5","\ud83d\udcf1",A.cv,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.euw=new C.eh("vivo","vivo X300 Pro","\ud83d\udcf1",A.cI,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.euB=new C.eh("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.etE=new C.eh("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ch,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eu8=new C.eh("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cD,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eu0=new C.eh("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.etP=new C.eh("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dC,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.etY=new C.eh("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.euE=new C.eh("vision","Apple Vision Pro","\ud83e\udd7d",A.bg,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.So=w([D.etW,D.eu1,D.euG,D.eui,D.etO,D.eug,D.euL,D.eus,D.eu6,D.euI,D.etG,D.eut,D.euv,D.eu3,D.eu7,D.eup,D.etX,D.euk,D.euc,D.eu9,D.etN,D.etU,D.eu_,D.euN,D.euC,D.euf,D.etT,D.euM,D.euP,D.etJ,D.euQ,D.etR,D.eu2,D.eud,D.etL,D.euD,D.eua,D.etQ,D.eue,D.euA,D.etM,D.euu,D.etZ,D.euo,D.euF,D.etK,D.euj,D.eur,D.euK,D.etI,D.euO,D.euz,D.eul,D.eux,D.etS,D.euJ,D.etF,D.eub,D.eu4,D.euq,D.etH,D.etV,D.euH,D.eum,D.euh,D.euy,D.eu5,D.eun,D.euw,D.euB,D.etE,D.eu8,D.eu0,D.etP,D.etY,D.euE],B.at("O<eh>"))
D.dnm=w([5,10,15,25,45,60],x.t)
D.dnJ=w([-0.045,0.03,-0.015],x.n)
D.aCe=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vd=w([0.05,0.2,0.35],x.n)
D.b9f=new B.ab(0,A.G,A.hH,A.dM,6)
D.dqr=w([D.b9f],x.V)
D.eBd=new B.y(0,"AND")
D.eC4=new B.y(1,"Adder")
D.eCK=new B.y(2,"Blinker")
D.eDg=new B.y(3,"Memory")
D.dre=w([D.eBd,D.eC4,D.eCK,D.eDg],x.I)
D.aCs=w([-104,0,104],x.n)
D.aCu=w([-14,3],x.n)
D.dsa=w([-8,0,8],x.n)
D.aCD=w([-92,0,92],x.n)
D.dsz=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f9h=new C.vr("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f9o=new C.vr("Medium tank","Balanced.",0.35,1)
D.f9n=new C.vr("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.SD=w([D.f9h,D.f9o,D.f9n],x._)
D.nP=w([0.04,0.2,0.36],x.n)
D.aCP=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f3D=new B.b5(D.b1r,"Fold",Q.aqG)
D.f2A=new B.b5(D.adl,"Flip",A.CT)
D.bQj=new B.a0(62889,"MaterialIcons",!1)
D.f4_=new B.b5(D.b1s,"Rise",D.bQj)
D.aqT=new B.a0(983870,"MaterialIcons",!1)
D.f_Y=new B.b5(D.adm,"Assemble",D.aqT)
D.f0b=new B.b5(D.b1t,"Spin",D.api)
D.f05=new B.b5(D.b1u,"Pop",A.k7)
D.du4=w([D.f3D,D.f2A,D.f4_,D.f_Y,D.f0b,D.f05],B.at("O<+(Lk,n,a0)>"))
D.aCU=w([A.bT,A.dC,A.bx,A.aG,A.bg,A.c0],x.O)
D.duu=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dvy=w([3,4.5,5,6,9],x.n)
D.b9V=new B.ab(0,A.G,A.b6,A.J,16)
D.dw0=w([D.b9V],x.V)
D.fRf=new B.B("\ud83e\uddcd",null,R.KN,null,null,null,null,null,null,null,null,null)
D.caz=new B.IY(5,null,null,A.bA,A.bT,null,null,null,null)
D.fgl=new B.a5(150,null,D.caz,null)
D.fyC=new B.G(!0,A.ab,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUy=new B.B("Getting the body ready...",null,D.fyC,null,null,null,null,null,null,null,null,null)
D.fRi=new B.B("Real 3D anatomy, kept on your phone",null,A1.xk,null,null,null,null,null,null,null,null,null)
D.dw3=w([D.fRf,A.aB,D.fgl,A.ae,D.fUy,A.aw,D.fRi],x.p)
D.dwD=w(["solar","turbine","crank","pot"],x.s)
D.dx2=w([0,0.35,0.75,1],x.n)
D.dyn=w(["volts","level","ohms","on"],x.s)
D.dzP=w([A.jJ,A.D4,A.CL,A.qO,Z.HT,A.v0,A.zp,A.qR,A.ii,A.oF,A.hz,A.ed,A.hO,A.ij,A.n0,A.lN,A.v_,A.tb,A.ll,A.Hq,A.uZ,A.CS,A.CP,A.a3l,A.Pe,A.D0,A.Po,A.aq6,H.aqP,A.k7],x.w)
D.ejR={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.htU=new C.yL("Switch",F.py,A.bk,0,"Tap it to turn it ON or OFF.")
D.htQ=new C.yL("Blinker",A.oD,A.bx,0,"Turns itself ON and OFF. Tap to change the speed.")
D.htR=new C.yL("AND",D.aqT,A.cv,2,"ON only when BOTH inputs are ON.")
D.bRO=new B.a0(63671,"MaterialIcons",!1)
D.htP=new C.yL("OR",D.bRO,A.bg,2,"ON when EITHER input is ON.")
D.htS=new C.yL("XOR",Aa.a2H,A.bT,2,"ON when the inputs are DIFFERENT.")
D.htM=new C.yL("NAND",A.uL,A.aG,2,"OFF only when BOTH inputs are ON.")
D.bQU=new B.a0(63176,"MaterialIcons",!1)
D.htN=new C.yL("NOR",D.bQU,A.hv,2,"ON only when BOTH inputs are OFF.")
D.htO=new C.yL("NOT",Y.D5,A.cI,1,"Flips the signal: ON becomes OFF.")
D.htT=new C.yL("Light",A.mi,A.dC,1,"Glows when its input is ON.")
D.htV=new C.yL("Buzzer",A.oE,A.c0,1,"Beeps while its input is ON.")
D.A7=new B.bu(D.ejR,[D.htU,D.htQ,D.htR,D.htP,D.htS,D.htM,D.htN,D.htO,D.htT,D.htV],B.at("bu<n,yL>"))
D.d19=w([A.A],x.M)
D.d1w=w([A.aA,A.aF],x.M)
D.dbc=w([A.aA,A.A,A.aF],x.M)
D.dcO=w([A.aA,A.ly,A.A,A.lz,A.aF],x.M)
D.dra=w([A.aA,A.ly,A.a7,A.aa,A.lz,A.aF],x.M)
D.dEC=new B.d_([1,D.d19,2,D.d1w,3,D.dbc,4,A.aDs,5,D.dcO,6,D.dra],B.at("d_<H,ai<da>>"))
D.emo={Calm:0,Box:1,Sleep:2}
D.cJb=w([4,2,6,0],x.n)
D.cJi=w([4,4,4,4],x.n)
D.cJj=w([4,7,8,0],x.n)
D.T4=new B.bu(D.emo,[D.cJb,D.cJi,D.cJj],B.at("bu<n,ai<F>>"))
D.ek3={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xH=new C.a1D(0,"source")
D.dce=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hAj=new C.qt("Clock",A.oD,D.xH,A.bx,D.dce)
D.hAf=new C.qt("Button",A.D8,D.xH,A.aQ,A.Z)
D.dvK=w(["random","quick","slow"],x.s)
D.hAq=new C.qt("Dice",A.ox,D.xH,A.bT,D.dvK)
D.bRs=new B.a0(63484,"MaterialIcons",!1)
D.Fa=new C.a1D(1,"logic")
D.dAF=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hAm=new C.qt("Delay",D.bRs,D.Fa,A.cv,D.dAF)
D.dnt=w(["fast","mid","slow"],x.s)
D.hAr=new C.qt("Echo",A.aqn,D.Fa,A.bg,D.dnt)
D.hAo=new C.qt("Every 2nd",Y.D5,D.Fa,A.hv,A.Z)
D.bR7=new B.a0(63309,"MaterialIcons",!1)
D.hAl=new C.qt("Every 3rd",D.bR7,D.Fa,A.aG,A.Z)
D.caT=w(["50%","25%","75%"],x.s)
D.hAt=new C.qt("Chance",Ah.aqV,D.Fa,A.cI,D.caT)
D.rl=new C.a1D(2,"out")
D.hAh=new C.qt("Light",A.mi,D.rl,A.dC,A.Z)
D.hAi=new C.qt("Burst",A.k7,D.rl,A.bT,A.Z)
D.hAg=new C.qt("Ripple",A.zv,D.rl,A.b9,A.Z)
D.hAp=new C.qt("Ball",A.aqy,D.rl,A.cI,A.Z)
D.hAn=new C.qt("Comet",A.oF,D.rl,A.bg,A.Z)
D.bSP=new B.a0(983669,"MaterialIcons",!1)
D.hAs=new C.qt("Shake",D.bSP,D.rl,A.c0,A.Z)
D.hAu=new C.qt("Pop",A.Hr,D.rl,A.b4,A.Z)
D.hAk=new C.qt("Wash",A.Ps,D.rl,A.pd,A.Z)
D.n7=new B.bu(D.ek3,[D.hAj,D.hAf,D.hAq,D.hAm,D.hAr,D.hAo,D.hAl,D.hAt,D.hAh,D.hAi,D.hAg,D.hAp,D.hAn,D.hAs,D.hAu,D.hAk],B.at("bu<n,qt>"))
D.ekg={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.Az=new C.Kj(0,"tv")
D.faS=new C.mx("Samsung Neo QLED 8K",D.Az,F.yb,A.aG)
D.faJ=new C.mx("LG OLED evo G5",D.Az,A.eq,A.hr)
D.faA=new C.mx("Sony Bravia 9",D.Az,A.rx,A.bv)
D.faE=new C.mx("Apple TV 4K",D.Az,A.e1,A.bP)
D.faB=new C.mx("Bang and Olufsen Beovision",D.Az,F.FG,F.u8)
D.a9K=new C.Kj(1,"iphone")
D.aSa=new C.mx("iPhone 18 Pro Max",D.a9K,D.akl,A.ch)
D.Ew=new C.Kj(3,"fold")
D.bwd=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.faO=new C.mx("iPhone Fold",D.Ew,D.bwd,A.b8)
D.AA=new C.Kj(2,"android")
D.faP=new C.mx("Samsung Galaxy S26 Ultra",D.AA,F.Yg,A.d7)
D.boP=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.faH=new C.mx("Samsung Galaxy Z Fold7",D.Ew,D.boP,A.cD)
D.faD=new C.mx("Google Pixel 10 Pro XL",D.AA,A.d2,A.bd)
D.faL=new C.mx("Xiaomi 16 Ultra",D.AA,A.ig,A.c6)
D.faG=new C.mx("Huawei Mate 80 Pro Max",D.AA,A.et,A.ay)
D.faC=new C.mx("OPPO Find X9 Ultra",D.AA,A.ea,A.b4)
D.faU=new C.mx("Honor Magic V5",D.Ew,A.da,A.cv)
D.faI=new C.mx("vivo X300 Pro",D.AA,A.fH,A.cI)
D.aSb=new C.Kj(4,"tablet")
D.faN=new C.mx("iPad Pro M5",D.aSb,A.d2,A.aG)
D.a9L=new C.Kj(5,"reader")
D.faV=new C.mx("Kindle Scribe",D.a9L,A.cX,A.bv)
D.AB=new C.Kj(6,"computer")
D.faM=new C.mx("MacBook Pro M5 Max",D.AB,A.d2,A.ch)
D.faR=new C.mx("iMac 32 inch",D.AB,A.bP,A.cD)
D.faK=new C.mx("Pro Display XDR 8K",D.AB,A.ig,A.b9)
D.faF=new C.mx("Sony Laser Projector",D.AB,A.cl,A.dC)
D.faQ=new C.mx("Luxury car touchscreen",D.AB,M.ny,A.ay)
D.faT=new C.mx("Apple Vision Pro",D.AB,A.cA,A.bg)
D.ms=new B.bu(D.ekg,[D.faS,D.faJ,D.faA,D.faE,D.faB,D.aSa,D.faO,D.faP,D.faH,D.faD,D.faL,D.faG,D.faC,D.faU,D.faI,D.faN,D.faV,D.faM,D.faR,D.faK,D.faF,D.faQ,D.faT],B.at("bu<n,mx>"))
D.eks={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bz1=new C.fQ(20,4,13,!1)
D.bzs=new C.fQ(14,5,13.5,!1)
D.bzj=new C.fQ(9,2.4,10,!1)
D.bzx=new C.fQ(7,5,12.5,!1)
D.bzm=new C.fQ(8,3.5,12,!1)
D.byY=new C.fQ(15,2,6,!1)
D.bzv=new C.fQ(45,6,13.5,!0)
D.bzd=new C.fQ(10,8,13.5,!1)
D.bz5=new C.fQ(25,3,12,!0)
D.bzb=new C.fQ(35,4,12,!0)
D.bzc=new C.fQ(40,4.5,9.5,!0)
D.bze=new C.fQ(55,3,9,!0)
D.byZ=new C.fQ(18,3,9,!1)
D.bzu=new C.fQ(22,4,13.5,!1)
D.bzn=new C.fQ(16,5,13.5,!1)
D.bz9=new C.fQ(30,4,9,!0)
D.bzG=new C.fQ(5,3.5,13,!1)
D.bzh=new C.fQ(25,3,13.5,!0)
D.bzq=new C.fQ(14,2.5,9,!1)
D.bzg=new C.fQ(6,6,13,!1)
D.bzy=new C.fQ(30,1.2,5,!0)
D.bzF=new C.fQ(35,3,4.5,!0)
D.bzB=new C.fQ(20,4.5,7.5,!0)
D.bzf=new C.fQ(55,5.5,13.5,!0)
D.byX=new C.fQ(45,5.5,13.5,!0)
D.bzr=new C.fQ(40,5.5,13.5,!0)
D.bzE=new C.fQ(60,6,13.5,!0)
D.akP=new C.fQ(28,4,7,!0)
D.GC=new C.fQ(25,4,7,!0)
D.bz8=new C.fQ(30,4,7,!0)
D.bz3=new C.fQ(22,4,7,!0)
D.bz4=new C.fQ(24,4,7,!0)
D.bzi=new C.fQ(60,3,5.5,!0)
D.bz_=new C.fQ(18,9,14,!0)
D.bz6=new C.fQ(25,9,14,!0)
D.akQ=new C.fQ(30,8,14,!0)
D.bz2=new C.fQ(20,8,14,!0)
D.bza=new C.fQ(30,9,14,!0)
D.bzz=new C.fQ(22,5,9.5,!0)
D.bz0=new C.fQ(30,2.5,10.5,!0)
D.bzo=new C.fQ(50,5.5,13.5,!0)
D.bzD=new C.fQ(12,2,9.5,!1)
D.bzl=new C.fQ(16,1.3,9.5,!0)
D.bzw=new C.fQ(40,2.5,7,!0)
D.bzC=new C.fQ(60,1.2,4.8,!0)
D.bzA=new C.fQ(18,5,13.5,!0)
D.bzt=new C.fQ(8,2,9.5,!1)
D.bzk=new C.fQ(12,2.5,8,!1)
D.bz7=new C.fQ(20,3.5,13.5,!0)
D.bzp=new C.fQ(3.5,3,13,!1)
D.A8=new B.bu(D.eks,[D.bz1,D.bzs,D.bzj,D.bzx,D.bzm,D.byY,D.bzv,D.bzd,D.bz5,D.bzb,D.bzc,D.bze,D.byZ,D.bzu,D.bzn,D.bz9,D.bzG,D.bzh,D.bzq,D.bzg,D.bzy,D.bzF,D.bzB,D.bzf,D.byX,D.bzr,D.bzE,D.akP,D.GC,D.bz8,D.GC,D.bz3,D.GC,D.bz4,D.akP,D.GC,D.bzi,D.bz_,D.bz6,D.akQ,D.bz2,D.bza,D.bzz,D.bz0,D.bzo,D.bzD,D.bzl,D.bzw,D.bzC,D.GC,D.akQ,D.bzA,D.bzt,D.bzk,D.bz7,D.bzp],B.at("bu<n,fQ>"))
D.ek0={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.f_t=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eFo=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eFj=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eRQ=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eSN=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eRM=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eDp=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.ePH=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.f_B=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eT8=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eIN=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eD3=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eHM=new B.y("Movement","They pull your legs together and help you balance.")
D.eJK=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eFx=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eXU=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eZ3=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.ePp=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eYN=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eO_=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eTh=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eDa=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eK6=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eSW=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eOl=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eYV=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eRg=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eDn=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eTS=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eXx=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eVE=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eBp=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eQZ=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eR2=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eKR=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eFL=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eJy=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.ePS=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eWt=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.f_y=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eTe=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eB7=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eQ3=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eBY=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eWJ=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eXQ=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eQv=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eWY=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eDc=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eYr=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eH7=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eW6=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eKv=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eOf=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eTy=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eYB=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eYt=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eYx=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eON=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eUq=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eVB=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eYd=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eQu=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eMz=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eLh=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eQU=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eTr=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eN5=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eNN=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eHw=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eXM=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eIm=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eBV=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eKQ=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eBQ=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eGc=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eKV=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eIw=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eTO=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eJN=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.f_f=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eLr=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eOG=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eRo=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eIF=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eIo=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dFJ=new B.bu(D.ek0,[D.f_t,D.eFo,D.eFj,D.eRQ,D.eSN,D.eRM,D.eDp,D.ePH,D.f_B,D.eT8,D.eIN,D.eD3,D.eHM,D.eJK,D.eFx,D.eXU,D.eZ3,D.ePp,D.eYN,D.eO_,D.eTh,D.eDa,D.eK6,D.eSW,D.eOl,D.eYV,D.eRg,D.eDn,D.eTS,D.eXx,D.eVE,D.eBp,D.eQZ,D.eR2,D.eKR,D.eFL,D.eJy,D.ePS,D.eWt,D.f_y,D.eTe,D.eB7,D.eQ3,D.eBY,D.eWJ,D.eXQ,D.eQv,D.eWY,D.eDc,D.eYr,D.eH7,D.eW6,D.eKv,D.eOf,D.eTy,D.eYB,D.eYt,D.eYx,D.eON,D.eUq,D.eVB,D.eYd,D.eQu,D.eMz,D.eLh,D.eQU,D.eTr,D.eN5,D.eNN,D.eHw,D.eXM,D.eIm,D.eBV,D.eKQ,D.eBQ,D.eGc,D.eKV,D.eIw,D.eTO,D.eJN,D.f_f,D.eLr,D.eOG,D.eRo,D.eIF,D.eIo],B.at("bu<n,+(n,n)>"))
D.dN3=new C.VF(null)
D.dNg=new C.VG(null)
D.dPk=new C.VM(null)
D.dQ8=new C.Wm(null)
D.dQc=new C.Wn(null)
D.dQL=new C.Wv(null)
D.dUA=new C.X4(null)
D.dVg=new C.X5(null)
D.dZt=new C.Xa(null)
D.eem=new C.Xb(null)
D.eep=new C.Xf(null)
D.egz=new C.Xz(null)
D.egA=new C.a9z(null)
D.eiD=new C.XI(null)
D.emB=new B.o(0,118)
D.aLA=new B.o(0,13)
D.emC=new B.o(0,17)
D.emF=new B.o(0,330)
D.emL=new B.o(0,-13)
D.emM=new B.o(0,-17)
D.emN=new B.o(0,-18)
D.emO=new B.o(0,-19)
D.emQ=new B.o(0,-28)
D.emS=new B.o(0,-31)
D.emT=new B.o(0,-32)
D.emZ=new B.o(-9.5,-11)
D.en1=new B.o(10,20)
D.en4=new B.o(10,-13)
D.en6=new B.o(10,-22)
D.en7=new B.o(10,-4)
D.enb=new B.o(11,0)
D.a8y=new B.o(11,8)
D.enh=new B.o(12,2)
D.eni=new B.o(14,0)
D.enj=new B.o(14,12)
D.aLM=new B.o(14,8)
D.enk=new B.o(14,-17)
D.aLO=new B.o(14,-3)
D.aLP=new B.o(14,-4)
D.enn=new B.o(15,0)
D.eno=new B.o(15,-12)
D.enr=new B.o(16,-8)
D.ens=new B.o(18,14)
D.ent=new B.o(18,-12)
D.aLV=new B.o(20,0)
D.enB=new B.o(20,15)
D.enC=new B.o(20,-17)
D.enD=new B.o(20,-3)
D.enE=new B.o(21,8)
D.enI=new B.o(22,10)
D.aLX=new B.o(22,8)
D.enJ=new B.o(24,0)
D.enK=new B.o(24,2)
D.enN=new B.o(24,-18)
D.enO=new B.o(24,-22)
D.enS=new B.o(25,8)
D.enT=new B.o(26,0)
D.enX=new B.o(28,-30)
D.eo3=new B.o(30,18)
D.eo4=new B.o(30,2)
D.eo7=new B.o(31,19)
D.eo9=new B.o(32,0)
D.aM0=new B.o(34,0)
D.aM1=new B.o(34,-32)
D.JC=new B.o(36,0)
D.eom=new B.o(3,-1)
D.eop=new B.o(40,3)
D.eoD=new B.o(4,11)
D.eoG=new B.o(4,-2)
D.eoL=new B.o(5,17)
D.eoM=new B.o(5,6)
D.eoR=new B.o(6,11)
D.eoY=new B.o(8,7)
D.eoZ=new B.o(8,-10)
D.ep_=new B.o(8,-14)
D.aM6=new B.o(9,0)
D.ep9=new B.o(-20.5,-17.6)
D.epa=new B.o(-9,18.5)
D.epd=new B.o(-2.6,-1)
D.epm=new B.o(2.6,1)
D.epu=new B.o(-9,12.2)
D.epO=new B.o(-9,20.5)
D.eq8=new B.o(-10,0)
D.eq9=new B.o(-10,12)
D.aMd=new B.o(-10,4)
D.eqd=new B.o(-11,0)
D.eqg=new B.o(-11,-2)
D.eqk=new B.o(-13,-5)
D.eql=new B.o(-14,0)
D.eqm=new B.o(-14,13)
D.eqn=new B.o(-14,2)
D.eqo=new B.o(-14,-12)
D.eqp=new B.o(-14,-19)
D.eqr=new B.o(-14,-23)
D.eqs=new B.o(-15,6)
D.eqv=new B.o(-16,14)
D.eqx=new B.o(-16,-8)
D.eqy=new B.o(-17,10)
D.eqz=new B.o(-17,-18)
D.eqA=new B.o(-17,-8)
D.eqC=new B.o(-18,20)
D.eqD=new B.o(-18,-9)
D.aMf=new B.o(-20,0)
D.eqF=new B.o(-20,16)
D.eqG=new B.o(-20,-9)
D.U_=new B.o(-22,8)
D.eqH=new B.o(-22,-10)
D.eqI=new B.o(-22,-11)
D.eqJ=new B.o(-24,10)
D.eqK=new B.o(-24,11)
D.eqL=new B.o(-24,14)
D.eqM=new B.o(-24,-22)
D.eqO=new B.o(-25,-11)
D.eqP=new B.o(-26,0)
D.eqQ=new B.o(-26,-18)
D.eqR=new B.o(-2,9)
D.eqS=new B.o(-2,-10)
D.eqT=new B.o(-2,-20)
D.eqW=new B.o(-2,-9)
D.eqY=new B.o(-32,0)
D.aMh=new B.o(-34,0)
D.er2=new B.o(-40,3)
D.er4=new B.o(-4,11)
D.er5=new B.o(-4,-17)
D.er6=new B.o(-4,-2)
D.era=new B.o(-5,0)
D.erb=new B.o(-5,20)
D.erc=new B.o(-5,6)
D.erd=new B.o(-6,26)
D.ere=new B.o(-6,6)
D.erf=new B.o(-6,-42)
D.erh=new B.o(-7,-19)
D.eri=new B.o(-7,-24)
D.erl=new B.o(-8,-9)
D.a8H=new B.o(-9,0)
D.erm=new B.o(-9,1)
D.ero=new B.o(-9,-23)
D.fIv=new B.B("Thinking\u2026",null,A.hp,null,null,null,null,null,null,null,null,null)
D.eso=new B.D(A.jF,D.fIv,null)
D.fZj=new B.B("Start from a ready-made board",null,A.fE,null,null,null,null,null,null,null,null,null)
D.esB=new B.D(A3.wp,D.fZj,null)
D.bH5=new B.R(4,0,4,14)
D.fDK=new B.G(!0,A.aD,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJu=new B.B("Games and little helpers for a spare minute.",null,D.fDK,null,null,null,null,null,null,null,null,null)
D.esN=new B.D(D.bH5,D.fJu,null)
D.do4=w([A.hZ,A.bi],x.O)
D.aR9=new B.bY(A.A,0.5,A.x,null,0,D.do4,null,null)
D.ezZ=new B.bY(A.A,0.5,A.x,null,0,D.aD9,null,null)
D.deF=w([A.c,A.bN],x.O)
D.eA0=new B.bY(A.A,0.5,A.x,null,0,D.deF,null,null)
D.dwQ=w([A.bP,A.cA],x.O)
D.aRa=new B.bY(A.A,0.5,A.x,null,0,D.dwQ,null,null)
D.cTb=w([A.c,A.bP],x.O)
D.eA5=new B.bY(A.p5,0.5,A.x,null,0,D.cTb,null,null)
D.bwh=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.duN=w([A.fo,D.bwh],x.O)
D.eAa=new B.bY(A.p5,0.5,A.x,null,0,D.duN,null,null)
D.cMk=w([A.d2,A.cl],x.O)
D.eAb=new B.bY(A.A,0.5,A.x,null,0,D.cMk,null,null)
D.d06=w([A.fz,A.aQ,A.d3],x.O)
D.eAe=new B.bY(A.p5,0.5,A.x,null,0,D.d06,null,null)
D.doK=w([A.cA,M.ny],x.O)
D.eAf=new B.bY(A.p5,0.5,A.x,null,0,D.doK,null,null)
D.eAj=new B.bY(A.A,0.5,A.x,null,0,D.azm,null,null)
D.dxG=w([A.cA,A.i9],x.O)
D.eAq=new B.bY(A.A,0.5,A.x,null,0,D.dxG,null,null)
D.aRf=new B.aN(9,9)
D.eAy=new B.aN(1.4,1.4)
D.f7p=new B.a1(10,-8,18,-2)
D.f7q=new B.a1(14,-14,20,14)
D.f7s=new B.a1(20,-2,30,2)
D.f7x=new B.a1(4,-13,30,-3)
D.f7D=new B.a1(8,-7,12,7)
D.f7P=new B.a1(-12,12,12,19)
D.f7Q=new B.a1(-12,14,12,22)
D.f7R=new B.a1(-12,-22,12,8)
D.f7S=new B.a1(-12,-25,12,19)
D.f7T=new B.a1(-12,-26,12,-6)
D.f7U=new B.a1(-12,-4,12,14)
D.f7W=new B.a1(-14,20,14,24)
D.f7X=new B.a1(-14,6,14,10)
D.f7Y=new B.a1(-14,-17,14,15)
D.f7Z=new B.a1(-14,-26,14,18)
D.f8_=new B.a1(-14,-4,14,20)
D.f81=new B.a1(-15,-29,15,25)
D.f82=new B.a1(-16,-16,16,16)
D.f85=new B.a1(-16,-22,-9,18)
D.f86=new B.a1(-16,-24,16,-10)
D.f88=new B.a1(-16,-2,16,20)
D.f8a=new B.a1(-18,20,18,24)
D.f8b=new B.a1(-18,-18,18,20)
D.f8c=new B.a1(-20,12,20,22)
D.f8d=new B.a1(-20,-28,20,26)
D.f8e=new B.a1(-22,14,22,18)
D.aRS=new B.a1(-22,-26,22,24)
D.f8f=new B.a1(-22,-3,22,3)
D.f8g=new B.a1(-22,-4,22,12)
D.f8i=new B.a1(-24,-12,10,22)
D.f8j=new B.a1(-24,-14,22,8)
D.f8k=new B.a1(-24,-6,24,20)
D.aRT=new B.a1(-24,-9,24,9)
D.f8l=new B.a1(-25,14,25,19)
D.f8m=new B.a1(-26,-14,14,8)
D.f8n=new B.a1(-26,-4,26,20)
D.f8o=new B.a1(-26,-6,4,6)
D.aRU=new B.a1(-28,-13,28,13)
D.f8p=new B.a1(-28,-16,28,16)
D.f8q=new B.a1(-28,-16,28,8)
D.f8r=new B.a1(-28,-22,28,22)
D.f8s=new B.a1(-30,-12,30,14)
D.f8t=new B.a1(-30,-14,0,14)
D.f8u=new B.a1(-30,-18,30,20)
D.f8v=new B.a1(-30,-28,30,14)
D.f8w=new B.a1(-30,-2,30,18)
D.f8x=new B.a1(-30,-4,30,18)
D.f8y=new B.a1(-32,-17,32,17)
D.f8z=new B.a1(-32,-28,32,18)
D.f8A=new B.a1(-33,-21,33,17)
D.f8B=new B.a1(-34,14,34,26)
D.a9B=new B.a1(-34,-18,34,18)
D.f8C=new B.a1(-34,-4,34,7)
D.f8D=new B.a1(-36,-24,36,20)
D.f8E=new B.a1(-38,-22,38,22)
D.f8G=new B.a1(-3,12,3,22)
D.f8H=new B.a1(-3,5,3,15)
D.f8L=new B.a1(-46,-34,46,28)
D.f8N=new B.a1(-48,-3,48,3)
D.f8Q=new B.a1(-6,18,24,24)
D.f8R=new B.a1(-6,5,6,12)
D.f8S=new B.a1(-6,-22,6,-15)
D.f8W=new B.a1(-9,-16,9,22)
D.f8X=new B.a1(-4.5,-24,4.5,-21.2)
D.f8Z=new B.a1(14,-9,17.5,9)
D.elN={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aT_=new B.de(D.elN,5,x.Q)
D.elh={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fcA=new B.de(D.elh,10,x.Q)
D.feV=new B.av(24,44)
D.ffi=new B.av(54,38)
D.ffo=new B.av(66,38)
D.bey=new B.fj(2,null,null,null,null,A.bg,null,null,null,null)
D.fgs=new B.a5(16,16,D.bey,null)
D.aU1=new B.hG(3,12,12,0.82,null)
D.fth=new B.G(!0,A1.y1,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnL=new B.eo("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cN,null,null,null,null,null,null,D.fth)
D.fyq=new B.G(!0,A.kN,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnR=new B.eo("AI",null,null,A.cN,null,null,null,null,null,null,D.fyq)
D.fo8=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foG=new B.G(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp2=new B.G(!0,A.cv,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpA=new B.G(!0,A.bW,null,null,null,null,11,A.U,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpV=new B.G(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqq=new B.G(!0,A.aR,null,null,null,null,12,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdj=new B.cU(A.hH,A.dM,6)
D.dhI=w([D.fdj],B.at("O<cU>"))
D.fro=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dhI,null,null,null)
D.frt=new B.G(!0,A.es,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fry=new B.G(!0,A.bW,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsb=new B.G(!0,A.bW,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsj=new B.G(!0,A.aD,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftl=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftT=new B.G(!0,A.aD,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fup=new B.G(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fus=new B.G(!0,A.c,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aDv,null,null,null)
D.fuy=new B.G(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvg=new B.G(!0,A.bB,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwp=new B.G(!0,A.um,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx_=new B.G(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx4=new B.G(!0,A.bW,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx9=new B.G(!0,A.aD,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxX=new B.G(!0,A.mS,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy6=new B.G(!0,A.cA,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWc=new B.G(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzi=new B.G(!0,A.hc,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzB=new B.G(!0,A.bW,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA7=new B.G(!0,A.b4,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBE=new B.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC9=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCr=new B.G(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCO=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCR=new B.G(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDZ=new B.G(!0,A.um,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEk=new B.G(!0,A.b4,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frB=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEJ=new B.B("\u26a0\ufe0f ",null,D.frB,null,null,null,null,null,null,null,null,null)
D.fEW=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.AU,null,null,null,null,null,null,null,null,null)
D.fGy=new B.B("Pick one, then change it and see what happens.",null,A.AU,null,null,null,null,null,null,null,null,null)
D.fsN=new B.G(!0,A.ab,null,null,null,null,null,A.U,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHx=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fsN,null,null,null,null,null,null,null,null,null)
D.fJ5=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fJI=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fKk=new B.B("Make it yours",null,A.jP,null,null,null,null,null,null,null,null,null)
D.fNw=new B.B("5G",null,X.aVw,null,null,null,null,null,null,null,null,null)
D.fOx=new B.B("Pick how big the screen is on the board",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fzT=new B.G(!0,A.bW,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOJ=new B.B("WHAT HAPPENS",null,D.fzT,null,null,null,null,null,null,null,null,null)
D.fQu=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fR9=new B.B("Change the words and pictures on the three slabs.",null,A.AU,null,null,null,null,null,null,null,null,null)
D.fRm=new B.B("All the parts and wires will be removed.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fRG=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fSf=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fTu=new B.B("\ud83c\udfaf Challenges",null,A.dq,null,null,null,null,null,null,null,null,null)
D.fU0=new B.B("Remove this part",null,W.aV7,null,null,null,null,null,null,null,null,null)
D.fUk=new B.B("Clear the board?",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fzj=new B.G(!0,A.bx,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUC=new B.B("How the Lab works",null,D.fzj,null,null,null,null,null,null,null,null,null)
D.fq7=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUY=new B.B("Electronics Lab",null,D.fq7,null,null,null,null,A.a2,null,1,null,null)
D.fV1=new B.B("?",null,P.aWJ,null,null,null,null,null,null,null,null,null)
D.fWl=new B.B("Ready-made circuits",null,A.dq,null,null,null,null,null,null,null,null,null)
D.fWZ=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fCv=new B.G(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_r=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fCv,null,null,null,null,null,null,null,null,null)
D.h0C=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aV5,null,null,null,null,null,null,null,null,null)
D.h17=new B.B("NGMY",null,A.vH,null,null,null,null,null,null,null,null,null)
D.h1k=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.VJ,null,null,null,null,null,null,null,null,null)
D.h1J=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.lV,null,null,null,null,null,null,null,null,null)
D.h2N=new B.B("TOOLBOX",null,A8.aaZ,null,null,null,null,null,null,null,null,null)
D.hry=new B.bA("body-loading",x.Y)
D.hrR=new B.bA("core-protocol-back",x.Y)
D.hrW=new B.bA("core-protocol-title-frame",x.Y)})();(function staticFields(){$.huL=null
$.huH=null
$.huI=null
$.hB0=0
$.i36=B.T(x.N,B.at("iH"))
$.i3F=B.T(x.N,B.at("iH"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iC1","bGW",()=>{var v="led"
return B.a([C.aA6("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fsz(),v),C.aA6("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fsA(),v),C.aA6("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fsB(),v),C.aA6("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fsI(),v),C.aA6("Not both","Make the light go OFF only when both switches are ON.",2,new C.fsJ(),v),C.aA6("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fsK(),"buzzer")],B.at("O<bd9>"))})
w($,"iCt","bGX",()=>B.a([C.Rj("UNIVERSE","Earth, space and gravity",A.PN,A.aG,new C.ft_()),C.Rj("ELECTRONICS LAB","Batteries, wires, real circuits",Af.CQ,A.aG,new C.ft0()),C.Rj("DISCOVERY LAB","Body Explorer: a real 3D human",D.bQk,A.b4,new C.ft1()),C.Rj("TOOLBOX","Converter, clock, games",H.apv,A.cI,new C.ft2()),C.Rj("REACTION LAB","Wire parts together",A.Dc,A.bx,new C.ft3()),C.Rj("SPARK PAINTER","Paint with light",A.Hp,A.bT,new C.ft4()),C.Rj("ROCKET LANDER","Land softly on the pad",A.oF,A.aG,new C.ft5()),C.Rj("TITLE ANIMATOR","Make a moving title",A.wP,A.bk,new C.ft6()),C.Rj("CIRCUIT LAB","Connect logic, learn it",A.a32,A.cv,new C.ft7())],B.at("O<bvq>")))
w($,"iE8","qE",()=>{var v,u,t=B.T(x.N,x.B)
for(v=0;v<76;++v){u=D.So[v]
t.n(0,u.a,u)}return t})
w($,"iC2","aja",()=>B.a([C.Gt("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fsL()),C.Gt("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fsM()),C.Gt("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fsN()),C.Gt("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fsO()),C.Gt("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fsP()),C.Gt("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fsC()),C.Gt("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fsD()),C.Gt("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fsE()),C.Gt("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fsF()),C.Gt("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fsG()),C.Gt("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fsH())],B.at("O<bda>")))
w($,"iCv","hK1",()=>B.a([C.a29("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c6,new C.ftf()),C.a29("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c0,A.bD,new C.ftg()),C.a29("Breathe","Calm down in a minute","\ud83e\udee7",A.hv,A.cD,new C.fth()),C.a29("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b8,new C.fti()),C.a29("Memory Match","Find the pairs","\ud83c\udccf",A.aG,A.ch,new C.ftj()),C.a29("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bk,A.bd,new C.ftk()),C.a29("Tip & Split","Share the bill","\ud83e\uddfe",A.b4,A.b2,new C.ftl()),C.a29("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bg,A.aE,new C.ftm())],B.at("O<bwK>")))})()};
(a=>{a["Sh0+dXS/N6yJGia8i3mqMsuv2Do="]=a.current})($__dart_deferred_initializers__);