((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A4,Z,A_,A5,A0,R,A6,A7,A8,A1,A9,A2,N,Aa,Ab,Ac,Ad,T,O,U,Ae,Af,V,W,E,K,G,I,Ag,P,Ah,Ai,S,Aj,Q,Ak,L,F,M,C={
bC1(d){return C.i7h(d)},
i7h(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bC1=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rh(B.nm(""),d,A.i3,null,null).dh(0,A.a_R),$async$bC1)
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
return B.i($async$bC1,v)},
iju(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.S1[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fg(D.S1,new C.fKu())
if(w==null)w=A.d.gH(D.S1)
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
return new C.alc(w.a,w.b,m,w,s,!1)},
id_(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Sq,new C.fz9(),x.bd).aO(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
is3(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.co(b2,"{")
v=A.a.p6(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.X.aQ(0,A.a.aB(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aT(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qE().al(0,p)||J.eH(s,o)||J.ad(t)>=8)continue
J.c7(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dxT[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.i.D(typeof J.t(q,"x")=="number"?B.dD(J.t(q,"x")):0.2+A.i.F(r,3)*0.3,0.16,0.84)
j=A.i.D(typeof J.t(q,"y")=="number"?B.dD(J.t(q,"y")):0.25+A.i.ar(r,3)*0.3,0.1,0.9)
J.c7(t,new B.dX([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aT(a6.a(J.t(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.D(A.i.M(B.dD(J.t(g,1))),0,1)
a0=A.o.D(A.i.M(B.dD(J.t(g,3))),0,1)
if(J.eH(s,f)&&J.eH(s,e)&&!J.z(f,e))J.c7(i,new B.cu([f,d,e,a0]))}if(J.ad(i)<2)return b1
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
return new C.alc(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ihY(d){var w,v,u=C.hlu()
d.B(u)
for(w=0;w<60;++w)u.vL(0,0.03333333333333333)
v=u.a
return A.d.aV(v,new C.fGT(u))&&!A.d.cE(v,new C.fGU())},
ihX(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.J)(l),++u){t=l[u];++v
k.n(0,t.a,$.qE().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.J)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.i.V(t.r)+" ohms")
if(A.d.q(D.dw9,p))q.push("level "+A.i.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.i.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aO(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.i.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.J)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aO(s,"\n")+"\nWires: "+A.d.aO(l,"; ")},
i5C(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.J)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aO(v,"\n")+"\n\n"}v=A.d.aO(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ijt(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qE().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Sq[u]
if(A.d.aV(w,new C.fKr(s)))if(!B.cS(r,s.b.toLowerCase(),0))v=B.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fKs(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.i.ad(A.d.cG(w,0,new C.fKt())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qE().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
alc:function alc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fKu:function fKu(){},
fz9:function fz9(){},
fGT:function fGT(d){this.a=d},
fGU:function fGU(){},
fKr:function fKr(d){this.a=d},
fKs:function fKs(d){this.a=d},
fKt:function fKt(){},
WP:function WP(d,e){this.c=d
this.a=e},
bms:function bms(d,e,f,g,h){var _=this
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
ej8:function ej8(d){this.a=d},
ej9:function ej9(d,e,f){this.a=d
this.b=e
this.c=f},
eja:function eja(d){this.a=d},
ejl:function ejl(d){this.a=d},
ejm:function ejm(d,e){this.a=d
this.b=e},
ejh:function ejh(d){this.a=d},
ejf:function ejf(d,e){this.a=d
this.b=e},
ejg:function ejg(d,e,f){this.a=d
this.b=e
this.c=f},
eji:function eji(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ejd:function ejd(d){this.a=d},
eje:function eje(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejj:function ejj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ejc:function ejc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejk:function ejk(d,e){this.a=d
this.b=e},
ejb:function ejb(d,e){this.a=d
this.b=e},
ejp:function ejp(d){this.a=d},
ejo:function ejo(d){this.a=d},
ejq:function ejq(d){this.a=d},
ejn:function ejn(d){this.a=d},
ejr:function ejr(d,e){this.a=d
this.b=e},
ejs:function ejs(d,e){this.a=d
this.b=e},
ejt:function ejt(d,e){this.a=d
this.b=e},
eju:function eju(d,e){this.a=d
this.b=e},
bCm(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.frI,w,w,w),B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hzo(d,e,f,g){var w=null,v=B.l(24),u=B.L(f.j(0.6),A.r,1)
return B.at(B.r(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.AY,A.K,w,w),A.aB,B.bW(A.fU,g,A.bs,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(D.bhp,w,u,v,w,w,A.n),w,w,w,w,A.ad,w,w,w),w,w,w)},
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
aG7:function aG7(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.h5$=h
_.m7$=i
_.fa$=j
_.h6$=k
_.bx$=l
_.a9$=m
_.c=_.a=null},
eyr:function eyr(){},
eyL:function eyL(d){this.a=d},
eyK:function eyK(d,e){this.a=d
this.b=e},
eyM:function eyM(){},
eyN:function eyN(){},
eyt:function eyt(d,e,f){this.a=d
this.b=e
this.c=f},
eys:function eys(d,e){this.a=d
this.b=e},
eyi:function eyi(d){this.a=d},
eyj:function eyj(d){this.a=d},
eyk:function eyk(d){this.a=d},
eyl:function eyl(d){this.a=d},
eym:function eym(d){this.a=d},
eyn:function eyn(d){this.a=d},
eyo:function eyo(d){this.a=d},
eyp:function eyp(d){this.a=d},
eyq:function eyq(d){this.a=d},
eyg:function eyg(d){this.a=d},
eyh:function eyh(d){this.a=d},
eyf:function eyf(d){this.a=d},
eyE:function eyE(d,e){this.a=d
this.b=e},
eyz:function eyz(d){this.a=d},
eyA:function eyA(d){this.a=d},
eyw:function eyw(d){this.a=d},
eyB:function eyB(d){this.a=d},
eyv:function eyv(d){this.a=d},
eyC:function eyC(d){this.a=d},
eyD:function eyD(d){this.a=d},
eyu:function eyu(d){this.a=d},
eyF:function eyF(d,e){this.a=d
this.b=e},
eyy:function eyy(d,e){this.a=d
this.b=e},
eyG:function eyG(d){this.a=d},
eyH:function eyH(d){this.a=d},
eyI:function eyI(d){this.a=d},
eyJ:function eyJ(d){this.a=d},
eyx:function eyx(d){this.a=d},
bjm:function bjm(d,e){this.b=d
this.a=e},
aO5:function aO5(){},
bA1:function bA1(){},
huz(){var w=$.hux
return w==null?$.hux=$.rk().cW8("assets/data/three.min.js"):w},
huy(){var w=$.huw
return w==null?$.huw=C.cOY():w},
cOY(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cOY=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.rk().jp(0,"assets/data/body3d.bin"),$async$cOY)
case 3:d=a1
$.huA=J.eE(A.dQ.gaU(d),d.byteOffset,d.byteLength)
t=B.a4z(d)
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
e=D.dkb[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4t(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b4u))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bci(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cOY,v)},
c6u(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c6u=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.iB(B.a([C.huy(),C.huz()],x.D),x.K),$async$c6u)
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
return B.i($async$c6u,v)},
aUa:function aUa(d,e,f){this.a=d
this.b=e
this.c=f},
a4t:function a4t(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bci:function bci(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
VH:function VH(d){this.a=d},
aEB:function aEB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.h5$=s
_.m7$=t
_.fa$=u
_.h6$=v
_.bx$=w
_.a9$=a0
_.c=_.a=null},
dPi:function dPi(d){this.a=d},
dPh:function dPh(d,e){this.a=d
this.b=e},
dOT:function dOT(d){this.a=d},
dOU:function dOU(d,e){this.a=d
this.b=e},
dOV:function dOV(d){this.a=d},
dOW:function dOW(){},
dPj:function dPj(){},
dOX:function dOX(d,e){this.a=d
this.b=e},
dOY:function dOY(d){this.a=d},
dOZ:function dOZ(){},
dP_:function dP_(d){this.a=d},
dP1:function dP1(d,e){this.a=d
this.b=e},
dP0:function dP0(d){this.a=d},
dOQ:function dOQ(d,e,f){this.a=d
this.b=e
this.c=f},
dOR:function dOR(d){this.a=d},
dOS:function dOS(d){this.a=d},
dP8:function dP8(d){this.a=d},
dP9:function dP9(d,e){this.a=d
this.b=e},
dPa:function dPa(d,e){this.a=d
this.b=e},
dPb:function dPb(d){this.a=d},
dP7:function dP7(d,e){this.a=d
this.b=e},
dPc:function dPc(d,e){this.a=d
this.b=e},
dP6:function dP6(d,e){this.a=d
this.b=e},
dPd:function dPd(d){this.a=d},
dP5:function dP5(d){this.a=d},
dPe:function dPe(d){this.a=d},
dP4:function dP4(d){this.a=d},
dPf:function dPf(d){this.a=d},
dP3:function dP3(d){this.a=d},
dPg:function dPg(d){this.a=d},
dP2:function dP2(d){this.a=d},
aN8:function aN8(){},
aN9:function aN9(){},
c6v:function c6v(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c6w:function c6w(d,e){this.a=d
this.b=e},
c6x:function c6x(d){this.a=d},
aA1(d,e,f,g,h){return new C.bd3(d,e,f,g,h)},
hbF(d,e,f,g,h,i){return $.i2U.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cVT(d,e,f,i,g,h))},
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
bd3:function bd3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsp:function fsp(){},
fsq:function fsq(){},
fsr:function fsr(){},
fsy:function fsy(){},
fsz:function fsz(){},
fsA:function fsA(){},
VM:function VM(d){this.a=d},
aED:function aED(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.h5$=m
_.m7$=n
_.fa$=o
_.h6$=p
_.bx$=q
_.a9$=r
_.c=_.a=null},
dQY:function dQY(d){this.a=d},
dQC:function dQC(d,e){this.a=d
this.b=e},
dQF:function dQF(){},
dQZ:function dQZ(){},
dQA:function dQA(d,e){this.a=d
this.b=e},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQG:function dQG(d,e,f){this.a=d
this.b=e
this.c=f},
dQv:function dQv(){},
dQw:function dQw(){},
dQx:function dQx(d){this.a=d},
dQy:function dQy(d,e){this.a=d
this.b=e},
dQz:function dQz(d,e,f){this.a=d
this.b=e
this.c=f},
dQH:function dQH(){},
dQI:function dQI(d,e){this.a=d
this.b=e},
dQJ:function dQJ(d){this.a=d},
dQE:function dQE(d,e){this.a=d
this.b=e},
dQD:function dQD(d){this.a=d},
dQu:function dQu(d,e,f){this.a=d
this.b=e
this.c=f},
dQS:function dQS(d){this.a=d},
dQR:function dQR(d){this.a=d},
dQT:function dQT(d){this.a=d},
dQQ:function dQQ(d){this.a=d},
dQO:function dQO(d){this.a=d},
dQP:function dQP(d){this.a=d},
dQN:function dQN(d){this.a=d},
dQK:function dQK(d){this.a=d},
dQM:function dQM(d){this.a=d},
dQU:function dQU(d,e){this.a=d
this.b=e},
dQV:function dQV(d,e){this.a=d
this.b=e},
dQW:function dQW(d){this.a=d},
dQL:function dQL(d){this.a=d},
dQX:function dQX(d,e){this.a=d
this.b=e},
bdm:function bdm(d,e){this.b=d
this.a=e},
cVT:function cVT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNd:function aNd(){},
bzM:function bzM(){},
hUA(){return new C.Oi(null)},
Rl(d,e,f,g,h){return new C.bvj(d,e,f,g,h)},
btG(d,e,f){return A.i.D((d-e)/(f-e),0,1)},
hcc(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Oi:function Oi(d){this.a=d},
Lj:function Lj(d,e){this.a=d
this.b=e},
Ba:function Ba(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEU:function aEU(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dX9:function dX9(d,e){this.a=d
this.b=e},
dX8:function dX8(d){this.a=d},
dXb:function dXb(d,e){this.a=d
this.b=e},
dXa:function dXa(d){this.a=d},
bvj:function bvj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsQ:function fsQ(){},
fsR:function fsR(){},
fsS:function fsS(){},
fsT:function fsT(){},
fsU:function fsU(){},
fsV:function fsV(){},
fsW:function fsW(){},
fsX:function fsX(){},
fsY:function fsY(){},
btH:function btH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8e:function f8e(d){this.a=d},
f8d:function f8d(d,e){this.a=d
this.b=e},
f8b:function f8b(d){this.a=d},
f8f:function f8f(d){this.a=d},
f8c:function f8c(d,e){this.a=d
this.b=e},
agb:function agb(d,e,f){this.c=d
this.d=e
this.a=f},
af2:function af2(d,e,f){this.c=d
this.d=e
this.a=f},
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
buH:function buH(d,e){this.b=d
this.a=e},
buc:function buc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bc0:function bc0(d,e){this.b=d
this.a=e},
aJ7:function aJ7(d,e){this.c=d
this.a=e},
aJ8:function aJ8(d,e,f){var _=this
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
f7V:function f7V(d){this.a=d},
f7U:function f7U(d){this.a=d},
f7T:function f7T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7S:function f7S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7Q:function f7Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7P:function f7P(d,e,f){this.a=d
this.b=e
this.c=f},
f7R:function f7R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7O:function f7O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f82:function f82(d){this.a=d},
f81:function f81(d){this.a=d},
f83:function f83(d,e){this.a=d
this.b=e},
f84:function f84(d,e){this.a=d
this.b=e},
f85:function f85(d,e){this.a=d
this.b=e},
f80:function f80(d,e,f){this.a=d
this.b=e
this.c=f},
f86:function f86(d,e,f){this.a=d
this.b=e
this.c=f},
f8_:function f8_(d){this.a=d},
f7W:function f7W(d){this.a=d},
f87:function f87(d){this.a=d},
f88:function f88(d){this.a=d},
f7Z:function f7Z(d,e){this.a=d
this.b=e},
f89:function f89(d,e){this.a=d
this.b=e},
f7Y:function f7Y(d,e){this.a=d
this.b=e},
f8a:function f8a(d,e){this.a=d
this.b=e},
f7X:function f7X(d,e){this.a=d
this.b=e},
f7M:function f7M(){},
f7N:function f7N(){},
bti:function bti(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsJ:function bsJ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcH:function bcH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsL:function bsL(d,e,f){this.b=d
this.c=e
this.a=f},
bwN:function bwN(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aOV:function aOV(){},
hAQ(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a2(0,new B.o(w,0)),u=e.aK(0,new B.o(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a2(0,v.aM(0,s*t*f)).a2(0,u.aM(0,s*f*f)).a2(0,e.aM(0,f*f*f))},
bjl(d,e,f,g,h,i){return $.i3s.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dr2(d,e,f,i,g,h))},
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
ag_:function ag_(d,e,f,g){var _=this
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
acU:function acU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ada:function ada(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
af5:function af5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjj:function bjj(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dr6:function dr6(d){this.a=d},
dr7:function dr7(d){this.a=d},
dr3:function dr3(d,e){this.a=d
this.b=e},
dr4:function dr4(d){this.a=d},
dr5:function dr5(d){this.a=d},
dr8:function dr8(d){this.a=d},
dr9:function dr9(d){this.a=d},
dra:function dra(d){this.a=d},
drb:function drb(d){this.a=d},
drc:function drc(d){this.a=d},
drd:function drd(d){this.a=d},
dre:function dre(d){this.a=d},
drf:function drf(d){this.a=d},
drg:function drg(d){this.a=d},
GJ:function GJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xa:function Xa(d){this.a=d},
aG6:function aG6(d,e,f,g,h,i,j){var _=this
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
_.bx$=i
_.a9$=j
_.c=_.a=null},
exM:function exM(d){this.a=d},
exB:function exB(d){this.a=d},
exD:function exD(){},
exE:function exE(){},
exH:function exH(){},
exI:function exI(d,e,f){this.a=d
this.b=e
this.c=f},
exJ:function exJ(d){this.a=d},
exK:function exK(d){this.a=d},
exF:function exF(){},
exG:function exG(d){this.a=d},
eyb:function eyb(d){this.a=d},
exL:function exL(){},
exx:function exx(d){this.a=d},
exO:function exO(d){this.a=d},
exN:function exN(d){this.a=d},
exQ:function exQ(){},
exP:function exP(d,e){this.a=d
this.b=e},
exA:function exA(){},
exy:function exy(d){this.a=d},
exz:function exz(d){this.a=d},
ey9:function ey9(d){this.a=d},
ey8:function ey8(d){this.a=d},
eya:function eya(d){this.a=d},
ey_:function ey_(d,e){this.a=d
this.b=e},
ey7:function ey7(d){this.a=d},
ey5:function ey5(d){this.a=d},
ey6:function ey6(d){this.a=d},
ey4:function ey4(d){this.a=d},
ey3:function ey3(d){this.a=d},
ey0:function ey0(d){this.a=d},
ey1:function ey1(d){this.a=d},
ey2:function ey2(d){this.a=d},
exC:function exC(){},
exW:function exW(d){this.a=d},
exX:function exX(d){this.a=d},
exV:function exV(d){this.a=d},
exY:function exY(d){this.a=d},
exU:function exU(d){this.a=d},
exZ:function exZ(d){this.a=d},
exT:function exT(d){this.a=d},
exS:function exS(d){this.a=d},
exR:function exR(d,e){this.a=d
this.b=e},
bjk:function bjk(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dr2:function dr2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aO3:function aO3(){},
hGi(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aK(0,e).gcK()*0.1
return new B.o((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hlu(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5C(w,v,u,A.cO,B.T(x.N,x.y))},
hOg(d,e,f){var w=d.c,v=e===0?-1:1
return new B.o(w*f.a+v*C.hlv(d),d.d*f.b)},
hlv(d){return 42+(D.mt.al(0,d.b)?(d.ch-1)*38:0)},
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
abz:function abz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
acG:function acG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5C:function a5C(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bPQ:function bPQ(){},
bQ0:function bQ0(d){this.a=d},
bPW:function bPW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQ1:function bQ1(d){this.a=d},
bQ2:function bQ2(d){this.a=d},
bQ4:function bQ4(d){this.a=d},
bQ5:function bQ5(d){this.a=d},
bQ3:function bQ3(d){this.a=d},
bQ6:function bQ6(d,e,f){this.a=d
this.b=e
this.c=f},
bQ7:function bQ7(d){this.a=d},
bPS:function bPS(d){this.a=d},
bPT:function bPT(d){this.a=d},
bPR:function bPR(d){this.a=d},
bPU:function bPU(d,e,f){this.a=d
this.b=e
this.c=f},
bPV:function bPV(d){this.a=d},
bPP:function bPP(d){this.a=d},
bQ8:function bQ8(d,e){this.a=d
this.b=e},
bPX:function bPX(d,e){this.a=d
this.b=e},
bQ_:function bQ_(d){this.a=d},
bPZ:function bPZ(d){this.a=d},
bPY:function bPY(d){this.a=d},
ak0:function ak0(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bKc:function bKc(){},
bKd:function bKd(){},
mY:function mY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctI:function ctI(d){this.a=d},
irY(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fWl(),c8=new C.fWn(),c9=new C.fWo(),d0=new C.fWm(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.an(w,d0.$3(new B.a1(w.a,w.b,w.c,w.d),A.cc,A.bL))
d2.ah(D.eq0,D.emW,c8.$2(A.dS,1.4))
d2.ah(D.emB,D.emz,c8.$2(A.bw,2.4))
d2.ah(D.emC,U.aLE,c8.$2(A.bw,2.4))
if(c6){d1=c7.$1(A.fI.j(0.5))
d1.y=A.H9
d2.N(D.emh,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.i.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.o(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.an(c9.$4(-22,-26,44,50),d0.$3(D.aRM,A.aS,A.cv))
d2.N(A.cJ,16,c7.$1(A.bw))
d2.N(A.cJ,13,c7.$1(c6?A.aH.j(0.85):A.a_))
if(c6){d1=d2.c
J.bo(d1.save())
d1.translate(0,4)
d2.hW(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.H,new B.o(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.i.F(d1+v*0.25,1)
d2.N(new B.o(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.N(D.epT,2.4,c7.$1(c6?A.bd:A.an))
d2.N(D.eqL,2.4,c7.$1(A.an))
return!0
case"blender":d2.an(c9.$5(-14,14,28,12,4),c7.$1(A.e6))
d1=$.R().r
t=x.v
s=new B.aG(d1,A.ai,c5,c5,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bu())
d2.af(s,c7.$1(A.fI.j(0.35)))
if(c6){d1=new B.aG(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(-14,-10))
d1.E(new B.aq(14,-10))
d1.E(new B.aq(12,14))
d1.E(new B.aq(-12,14))
d1.E(new B.bu())
d2.af(d1,c7.$1(A.ay.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.bo(d1.save())
d1.translate(0,10)
d2.hW(0,d3.y)
d2.ah(D.a8D,D.aM_,c8.$2(A.bP,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.N(new B.o(Math.sin(d1+v*2)*9,-10-A.i.F(t+v*0.33,1)*12),2.4,c7.$1(A.eW))
return!0
case"drone":d2.an(c9.$5(-10,-4,20,10,4),c7.$1(A.aM))
d2.N(A.i5,3,c7.$1(c6?A.bd:A.an))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.IK[p]
d2.ah(new B.o(o*0.4,1),new B.o(o,t),c8.$2(A.bw,3))
J.bo(d1.save())
d1.translate(o,q)
d2.ah(D.epH,D.emG,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.bZ(B.bs(A.H,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aG($.R().r,A.ai,c5,c5,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bu())
d2.af(w,d0.$3(D.f7P,A.aQ,A.d_))
d2.aq(D.f6W,c7.$1(A.dc))
d1=d2.c
J.bo(d1.save())
d1.translate(18,-5)
d2.hW(0,d3.y*2)
d2.ah(A.H,D.emN,c8.$2(A.bP,2.4))
d2.ah(A.a8A,D.emM,c8.$2(A.hx,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.i.F(d1+v*0.25,1)
d2.N(new B.o(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.dA.j(1-u)))}return!0
case"torch":if(c6){v=A.i.D(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aG($.R().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,-6))
d1.E(new B.aq(52,-26))
d1.E(new B.aq(52,18))
d1.E(new B.aq(16,4))
d1.E(new B.bu())
d2.af(d1,c7.$1(A.bM.j(0.35*v)))}d2.an(c9.$5(-26,-6,30,12,3),d0.$3(D.f7V,A.bo,A.cs))
n=new B.aG($.R().r,A.ai,c5,c5,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bu())
d2.af(n,c7.$1(A.e6))
d2.N(D.emS,7,c7.$1(c6?A.c:A.dc))
return!0
case"neon":d2.an(c9.$5(-30,-14,60,28,6),c7.$1(M.ny))
if(c6)m=d3.ax>0.5||A.o.F(A.i.bh(d4*17),3)!==0
else m=!1
l=m?A.bT:D.brE
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.bT.j(0.35))
t.y=A.mg
d2.an(d1,t)}d2.an(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.eq6,l,17)
return!0
case"microwave":d2.an(c9.$4(-30,-18,60,38),d0.$3(D.f80,A.bP,A.bo))
d1=c9.$5(-26,-14,38,30,3)
d2.an(d1,c7.$1(c6?A.bM.j(0.75):A.as))
if(c6){d1=d2.c
J.bo(d1.save())
d1.translate(-7,8)
d2.hW(0,d3.y*0.5)
d2.bZ(B.bs(A.H,7,22),c7.$1(A.d_))
d1.restore()}d2.an(c9.$5(15,-14,12,12,2),c7.$1(M.ny))
if(c6)d5.$5(d2,"0:"+A.a.b_(A.o.u(59-A.o.F(A.i.bh(d4),60)),2,"0"),D.emT,A.b5,6.5)
d2.N(D.en8,4,c7.$1(A.dc))
return!0
case"doorbell":d2.an(c9.$5(-16,-26,32,52,8),c7.$1(A.bh))
d2.N(A.JB,10,c7.$1(c6?A.bj:A.bw))
d1=d2.c
J.bo(d1.save())
d1.translate(0,-8)
d2.hW(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.eqP,A.c,16)
d1.restore()
d2.N(A.kD,6,c7.$1(A.d5))
d2.N(A.kD,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cC(B.bZ(A.JB,14+v*6+A.i.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bj.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.eq5,D.eqI,c8.$2(A.bw,4))
d1=d2.c
J.bo(d1.save())
d2.hW(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.an(c9.$5(-24,-14,46,22,5),d0.$3(D.f7Q,A.bP,A.an))
d2.N(D.aLI,8,c7.$1(A.as))
d2.N(D.aLI,4.5,c7.$1(c6?A.aH:A.cs))
d2.N(D.eq3,2.2,c7.$1(c6&&A.o.F(A.i.bh(d4*1.6),2)===0?A.ay:A.kt))
d1.restore()
if(c6)d5.$5(d2,"REC",D.eqe,A.ay,9)
return!0
case"console":d2.an(c9.$5(-28,-22,56,44,8),d0.$3(D.f7Y,A.j3,A.fo))
d2.an(c9.$5(-20,-17,40,22,3),c7.$1(A.dC))
if(c6){d1=d4*2.3
d2.N(new B.o(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.aq(new B.a1(-18,t,-15.6,t+8),c7.$1(A.b5))
d1=-9+Math.sin(d1-0.4)*6
d2.aq(new B.a1(15.6,d1,18,d1+8),c7.$1(A.bT))}d2.N(D.epZ,4,c7.$1(A.aU))
d2.N(D.emO,2.4,c7.$1(A.ay))
d2.N(D.en5,2.4,c7.$1(A.bd))
return!0
case"heartmon":d2.an(c9.$5(-30,-22,60,44,6),c7.$1(A.as))
d2.an(c9.$5(-26,-18,52,28,3),c7.$1(A.dC))
if(c6){d1=$.R()
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
k.ab()}}d2.af(k,c8.$2(A.b5,1.8))
d5.$5(d2,"72",D.emP,A.hq,11)
d1=d4*9
d5.$5(d2,"\u2665",D.eqj,A.hq.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.N(D.eq8,3,c7.$1(c6?A.bd:A.bw))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.an(d1,c7.$1(A.cA.j(c6?0.5:0.3)))
d2.an(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.aq(D.f7S,c7.$1(F.u8))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.bo(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.pk(0,-1,1)
d2.bZ(B.bs(A.H,8,14),c7.$1(A.cG))
d1=new B.aG($.R().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,0))
d1.E(new B.aq(-12,-4))
d1.E(new B.aq(-12,4))
d1.E(new B.bu())
d2.af(d1,c7.$1(A.c6))
d2.N(D.enR,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.i.F(d1+v*0.2,1)
d2.N(new B.o(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.R().r
t=x.v
g=new B.aG(d1,A.ai,c5,c5,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bu())
d2.af(g,d0.$3(D.f8s,A.c,A.bD))
d2.aq(D.f8o,c7.$1(c6?A.dA:A.bw))
q=new B.aG(d1,A.ai,c5,c5,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bu())
d2.af(q,c7.$1(A.el))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aG(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(0,-19))
t=f*34
d1.E(new B.aq(t,-26))
d1.E(new B.aq(t,-12))
d1.E(new B.bu())
d2.af(d1,c7.$1(A.dA.j(0.45)))
d1=c7.$1(A.dA.j(0.35))
d1.y=A.H9
d2.N(D.emi,14,d1)}return!0
case"discoball":d2.ah(D.emk,Q.aLz,c8.$2(A.dc,1.4))
d2.N(A.H,16,d0.$3(D.f7z,A.aS,A.an))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.o(-16,d1),new B.o(16,d1),c8.$2(A.dv,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.o(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.o(Math.cos(f)*16,0),c8.$2(A.dv,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.N(new B.o(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dle[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.an(c9.$5(-14,-4,28,24,5),d0.$3(D.f7w,A.cv,A.an))
d2.an(c9.$5(-12,-26,24,20,5),d0.$3(D.f7p,A.bh,A.bL))
d2.ah(H.aLB,D.emm,c8.$2(A.bw,1.6))
d2.N(D.emn,2.2,c7.$1(c6?A.ay:A.bw))
d=c6&&A.i.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a6c[p]
if(c6)d1=d?A.b9:A.eZ
else d1=A.cs
d2.N(new B.o(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.bo(d1.save())
d1.translate(14,0)
d2.hW(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.H,D.a8u,c8.$2(A.bL,4))
d1.restore()
d2.ah(D.epP,D.eqc,c8.$2(A.bL,4))
d2.aq(D.f8n,c7.$1(c6?A.b9.j(0.7):A.aM))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aCn[p]+1,d1,10,14,2)
q=B.ar(A.bM,A.d_,a0)
q.toString
d2.an(t,c7.$1(q))}d2.an(c9.$5(-24,-6,48,26,8),d0.$3(D.f7R,A.bP,A.bo))
for(p=0;p<2;++p){o=D.aCn[p]
d1=c9.$5(o,-5,12,5,2)
d2.an(d1,c7.$1(c6?A.fq:A.as))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cG.j(0.5))
t.y=N.ow
d2.an(d1,t)}}d2.ah(D.ene,D.enz,c8.$2(A.as,3))
return!0
case"ledstrip":d2.an(c9.$5(-34,-4,68,10,4),c7.$1(A.cs))
for(d1=d4*90,v=0;v<9;++v){a1=A.i.F(d1+v*40,360)
l=c6?new Am.pi(1,a1,0.8,1).jd():A.e6
if(c6){t=c7.$1(l.j(0.45))
t.y=N.ow
d2.N(new B.o(-30+v*7.5,1),7,t)}d2.N(new B.o(-30+v*7.5,1),2.6,c7.$1(l))}d2.an(c9.$5(-40,-2,6,6,1),c7.$1(A.dc))
return!0
case"pump":d2.an(c9.$5(-16,-2,32,22,6),d0.$3(D.f7F,A.cA,A.FZ))
d2.N(D.eqk,8,c7.$1(A.rG))
d1=d2.c
J.bo(d1.save())
d1.translate(-2,9)
d2.hW(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.H,new B.o(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.fI,2.4))}d1.restore()
d1=new B.aG($.R().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,6))
d1.E(new B.aq(26,6))
d1.E(new B.aq(26,-20))
d1.E(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bL,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.N(new B.o(26,6-A.i.F(d1+v*0.2,1)*26),2.2,c7.$1(A.hw))
d2.N(D.eot,3.2,c7.$1(A.hw.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.bo(d1.save())
d2.hW(0,-0.15)
d2.an(c9.$5(-26,-14,40,22,10),d0.$3(D.f7T,A.hY,A.rF))
d2.an(c9.$5(14,-10,12,14,3),c7.$1(A.cs))
d2.an(c9.$5(-10,6,12,22,4),c7.$1(A.e6))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.i.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.o(24+t,q),new B.o(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cG.j(0.4))
d1.y=N.ow
d2.N(D.en7,8,d1)}return!0
case"headphones":d2.cC(B.bs(A.dJ,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.bw,4))
for(d1=d4*12,p=0;p<2;++p){o=F.SD[p]
t=o-7
d2.an(c9.$5(t,0,14,20,6),d0.$3(new B.a1(t,0,t+14,20),A.bq,A.ol))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bZ(new B.o(o,10),10+v*5+A.i.F(d1,5))
h=t?2.2:-0.9
d2.cC(q,h,1.6,!1,c8.$2(A.eN.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.o(-4,-8-A.i.F(d4*14,8)),A.kM,12)
return!0
case"smartwatch":d2.an(c9.$5(-8,-30,16,14,3),c7.$1(A.cs))
d2.an(c9.$5(-8,14,16,14,3),c7.$1(A.cs))
d2.an(c9.$5(-14,-17,28,32,8),d0.$3(D.f7u,A.dc,A.e6))
d2.an(c9.$5(-11,-14,22,26,6),c7.$1(A.dC))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b_(A.o.u(B.dg(a2)),2,"0")+":"+A.a.b_(A.o.u(B.fP(a2)),2,"0"),D.emt,A.b5,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ar(A.FG,A.hq,j)
d1.toString
d5.$5(d2,"\u2665",new B.o(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.i.bh(d4*2),6)),A.dJ,A.c,7)}return!0
case"tablet":d2.an(c9.$5(-30,-22,60,44,6),c7.$1(M.ny))
d2.an(c9.$5(-30,-22,60,44,6),c8.$2(A.bL,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nR(a3),$.np(),!0)
d1.translate(-27,-19)
L.M7(d2,D.feO,d4,c5)
d1.restore()}else d2.an(a3,c7.$1(D.wc))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.an(a4,d0.$3(new B.a1(a4.a,a4.b,a4.c,a4.d),A.dM,A.d7))
d2.an(a4,c8.$2(A.aT,1.2))
d2.N(D.aM7,9,c7.$1(A.as))
d2.N(D.aM7,6,c8.$2(A.d_,2))
d2.an(c9.$5(4,-2,14,10,2),c7.$1(A.as))
d2.an(c9.$5(-22,-19,44,12,2),c7.$1(A.dC))
d1=A.i.ad(d3.db,1)
t=A.i.ad(c6?d3.dx:d3.e,1)
q=c6?A.b5:A.an
d5.$5(d2,d1+"\u2192"+t+"V",D.eoD,q,8.2)
d2.N(D.emX,2.4,c7.$1(c6?A.bd:A.aM))
d5.$5(d2,"IN",D.eqd,A.ab,6)
d5.$5(d2,"OUT",D.eol,A.ab,6)
return!0
case"regulator":a5=c6?A.i.D(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ar(A.bL,A.ay,a5)
t.toString
d2.an(d1,c7.$1(t))
d2.N(H.a8s,3,c7.$1(A.aM))
d2.an(c9.$5(-12,-4,24,18,3),d0.$3(D.f7q,A.e6,A.i9))
d5.$5(d2,"7805",D.a8D,A.ab,8)
for(p=0;p<3;++p){d1=D.drH[p]-1
d2.aq(new B.a1(d1,14,d1+2,22),c7.$1(A.ec))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.i.F(d1+v*0.33,1)
d2.N(new B.o(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.eqM,A.bp,9)
return!0
case"diode":d2.ah(D.aMb,D.aLU,c8.$2(A.ec,2.4))
d2.an(c9.$5(-14,-7,28,14,6),c7.$1(A.av.j(0.85)))
d2.aq(D.f79,c7.$1(A.bp))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.dA.j(0.4))
t.y=A.kU
d2.an(d1,t)}d1=new B.aG($.R().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,-4))
d1.E(new B.aq(-8,4))
d1.E(new B.aq(-1,0))
d1.E(new B.bu())
d2.af(d1,c7.$1(A.aU))
d5.$5(d2,"one way",D.eq1,A.aD,8)
return!0
case"ldr":d2.ah(D.aMb,D.a8D,c8.$2(A.ec,2.4))
d2.ah(D.aM_,D.aLU,c8.$2(A.ec,2.4))
d2.N(A.H,12,c7.$1(A.d_))
d2.N(A.H,12,c8.$2(A.rL,1.6))
d1=$.R()
t=B.a([],x.v)
a6=new B.aG(d1.r,A.ai,c5,c5,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.ak(q)
a6.ab()}d2.af(a6,c8.$2(A.bM,1.4))
d1=B.ar(A.bw,A.dA,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.o(-6,-26),d1,14)
d5.$5(d2,""+A.i.V(20+980*(1-d3.f))+"\u03a9",D.epQ,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.eq
break
case"sonytv":t=A.rz
break
case"appletv":t=A.ec
break
default:t=F.FJ
break}a7=d1==="lgtv"||d1==="appletv"
d2.an(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
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
L.hht(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1)
h.restore()
d2.N(D.enC,1.6,c7.$1(A.b5))}else{d2.an(a3,c7.$1(D.wc))
h=new B.aG($.R().r,A.ai,c5,c5,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bu())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.an(c9.$5(-22,19,44,3,1.5),c7.$1(A.dc))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.fN[p]
t=$.R()
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
h=new B.bu()
q.push(h)
q=t.f
if(q!=null)h.ak(q)
t.ab()
d2.af(t,c7.$1(A.dc))}d5.$5(d2,"SONY",D.epg,A.bP,5.5)
break
case"appletv":d1=new B.aG($.R().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,18))
d1.E(new B.aq(8,18))
d1.E(new B.aq(12,25))
d1.E(new B.aq(-12,25))
d1.E(new B.bu())
d2.af(d1,c7.$1(D.Zk))
d5.$5(d2,"Apple TV",D.eoE,A.bw,4.8)
break
default:d2.an(c9.$5(-34,19,68,7,3),c7.$1(D.bpW))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.o(d1,20),new B.o(d1,25),c8.$2(A.dv,0.6))}d5.$5(d2,"B&O",D.eqH,F.u8,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mt.h(0,d1)
b0=a9.b===D.Ez
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
J.bo(t.save())
t.clipRRect(B.nR(a3),$.np(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.M7(d2,new B.av(a3.c-q,a3.d-h),d4,c5)
t.restore()}else d2.an(a3,c7.$1(D.wc))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.o(0,t),new B.o(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.an(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.N(new B.o(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.an(c9.$5(-17,-28,34,52,4),c7.$1(A.e6))
d2.an(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bP))
if(c6){d5.$5(d2,"NGMY",D.eqS,A.as,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.aq(new B.a1(-11,d1,-11+t,d1+1.4),c7.$1(A.bo))}d2.N(A.a8q,1.6,c7.$1(A.as))}return!0
case"laptop":d2.an(c9.$5(-30,-28,60,42,4),d0.$3(D.f81,A.cv,A.bo))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nR(b7),$.np(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.M7(d2,new B.av(b7.c-t,b7.d-q),d4,c5)
d1.restore()}else d2.an(b7,c7.$1(D.wc))
d1=new B.aG($.R().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-38,16))
d1.E(new B.aq(38,16))
d1.E(new B.aq(34,21))
d1.E(new B.aq(-34,21))
d1.E(new B.bu())
d2.af(d1,c7.$1(D.Zk))
d2.an(c9.$5(-7,16,14,2,1),c7.$1(A.bo))
return!0
case"imac":d2.an(c9.$5(-32,-28,64,46,5),d0.$3(D.f85,A.cc,A.cv))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nR(b8),$.np(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.M7(d2,new B.av(b8.c-t,b8.d-q),d4,c5)
d1.restore()}else d2.an(b8,c7.$1(D.wc))
d2.N(D.aLu,2,c7.$1(A.bL))
d1=new B.aG($.R().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,18))
d1.E(new B.aq(6,18))
d1.E(new B.aq(10,26))
d1.E(new B.aq(-10,26))
d1.E(new B.bu())
d2.af(d1,c7.$1(D.Zk))
return!0
case"monitor":d2.an(c9.$5(-34,-28,68,40,3),c7.$1(A.eq))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nR(b9),$.np(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.M7(d2,new B.av(b9.c-t,b9.d-q),d4,c5)
d1.restore()}else d2.an(b9,c7.$1(D.wc))
d2.aq(D.f8c,c7.$1(A.bo))
d2.an(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.dc))
return!0
case"projector":if(c6){d1=new B.aG($.R().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(14,4))
d1.E(new B.aq(-32,-42))
d1.E(new B.aq(34,-42))
d1.E(new B.bu())
d2.af(d1,c7.$1(A.dA.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nR(c0),$.np(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.M7(d2,new B.av(c0.c-t,c0.d-q),d4,c5)
d1.restore()}d2.an(c9.$5(-26,-4,52,24,6),d0.$3(D.f7U,A.iJ,A.dc))
d2.N(D.aLG,7,c7.$1(A.as))
d2.N(D.aLG,4,c7.$1(c6?A.dA:A.cs))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.o(d1,2),new B.o(d1,14),c8.$2(A.dv,1))}return!0
case"carscreen":d2.an(c9.$5(-34,-10,68,32,12),c7.$1(A.as))
c1=c9.$5(-30,-20,60,28,8)
d2.an(c1,c7.$1(M.ny))
d2.an(c1,c8.$2(A.bw,1.2))
if(c6){c2=new B.aG($.R().r,A.ai,c5,c5,B.a([],x.v))
c2.E(new B.aZ(-26,4))
c2.E(new B.c6(-10,-14+Math.sin(d4)*3,6,-6))
c2.E(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aH,2.2))
d1=A.i.F(d4*6,48)
d2.N(new B.o(-26+d1,4-d1*0.1),2.4,c7.$1(A.b5))
d5.$5(d2,""+(88+A.o.F(A.i.bh(d4*2),5)),H.aLZ,A.c,10)
d5.$5(d2,"km/h",D.eor,A.aD,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.an(c3,d0.$3(new B.a1(c3.a,c3.b,c3.c,c3.d),A.dc,A.e6))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nR(c4),$.np(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.M7(d2,new B.av(c4.c-t,c4.d-q),d4,c5)
d1.restore()
d1=c7.$1(A.bq.j(0.2))
d1.y=A.mg
d2.N(A.H,26,d1)}else d2.an(c4,c7.$1(A.a_))
d2.ah(D.eqr,D.eqw,c8.$2(A.bo,4))
d2.ah(D.enE,D.enU,c8.$2(A.bo,4))
return!0}return!1},
fWl:function fWl(){},
fWn:function fWn(){},
fWo:function fWo(){},
fWm:function fWm(){},
hkl(d,e,f,g){return new C.ajZ(d,g,f,e)},
Gt(d,e,f){return new C.bd4(d,e,f)},
ajZ:function ajZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ak_:function ak_(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.h5$=h
_.m7$=i
_.fa$=j
_.h6$=k
_.bx$=l
_.a9$=m
_.c=_.a=null},
bJR:function bJR(d,e){this.a=d
this.b=e},
bJS:function bJS(d){this.a=d},
bJQ:function bJQ(d){this.a=d},
bJT:function bJT(){},
bJU:function bJU(d){this.a=d},
bJV:function bJV(d,e,f){this.a=d
this.b=e
this.c=f},
bJP:function bJP(d,e){this.a=d
this.b=e},
bJM:function bJM(d,e){this.a=d
this.b=e},
bJN:function bJN(d,e,f){this.a=d
this.b=e
this.c=f},
bJG:function bJG(d,e){this.a=d
this.b=e},
bJH:function bJH(){},
bJO:function bJO(d,e,f){this.a=d
this.b=e
this.c=f},
bJL:function bJL(d,e){this.a=d
this.b=e},
bJI:function bJI(d,e){this.a=d
this.b=e},
bJJ:function bJJ(d,e){this.a=d
this.b=e},
bJK:function bJK(d){this.a=d},
bK9:function bK9(d){this.a=d},
bKa:function bKa(){},
bJj:function bJj(){},
bKb:function bKb(d,e){this.a=d
this.b=e},
bK8:function bK8(d,e,f){this.a=d
this.b=e
this.c=f},
bK3:function bK3(d){this.a=d},
bK0:function bK0(d,e,f){this.a=d
this.b=e
this.c=f},
bK1:function bK1(d,e){this.a=d
this.b=e},
bK4:function bK4(d){this.a=d},
bJZ:function bJZ(d,e){this.a=d
this.b=e},
bK_:function bK_(d,e){this.a=d
this.b=e},
bK2:function bK2(d){this.a=d},
bK5:function bK5(d){this.a=d},
bJX:function bJX(d,e){this.a=d
this.b=e},
bJY:function bJY(d,e){this.a=d
this.b=e},
bK6:function bK6(d){this.a=d},
bJW:function bJW(d){this.a=d},
bK7:function bK7(d){this.a=d},
bJk:function bJk(d,e){this.a=d
this.b=e},
bJD:function bJD(d,e){this.a=d
this.b=e},
bJF:function bJF(d,e){this.a=d
this.b=e},
bJE:function bJE(d,e){this.a=d
this.b=e},
bJq:function bJq(d,e){this.a=d
this.b=e},
bJr:function bJr(d){this.a=d},
bJp:function bJp(d){this.a=d},
bJs:function bJs(d,e,f){this.a=d
this.b=e
this.c=f},
bJo:function bJo(d,e){this.a=d
this.b=e},
bJv:function bJv(d,e){this.a=d
this.b=e},
bJw:function bJw(d,e){this.a=d
this.b=e},
bJx:function bJx(d,e){this.a=d
this.b=e},
bJy:function bJy(d,e,f){this.a=d
this.b=e
this.c=f},
bJn:function bJn(d,e){this.a=d
this.b=e},
bJz:function bJz(d,e,f){this.a=d
this.b=e
this.c=f},
bJm:function bJm(d,e){this.a=d
this.b=e},
bJA:function bJA(d,e,f){this.a=d
this.b=e
this.c=f},
bJl:function bJl(d,e){this.a=d
this.b=e},
bJB:function bJB(d){this.a=d},
bJC:function bJC(d){this.a=d},
bJt:function bJt(d){this.a=d},
bJu:function bJu(d){this.a=d},
bd4:function bd4(d,e,f){this.a=d
this.b=e
this.c=f},
fsB:function fsB(){},
fsC:function fsC(){},
fsD:function fsD(){},
fso:function fso(){},
fsE:function fsE(){},
fsn:function fsn(){},
fsF:function fsF(){},
fss:function fss(){},
fsm:function fsm(){},
fst:function fst(){},
fsl:function fsl(){},
fsu:function fsu(){},
fsk:function fsk(){},
fsv:function fsv(){},
fsi:function fsi(){},
fsj:function fsj(){},
fsw:function fsw(){},
fsg:function fsg(){},
fsh:function fsh(){},
fsx:function fsx(){},
fsf:function fsf(){},
Wn:function Wn(d){this.a=d},
aF5:function aF5(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e0X:function e0X(d,e){this.a=d
this.b=e},
e15:function e15(d){this.a=d},
e16:function e16(){},
e17:function e17(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e18:function e18(){},
e0W:function e0W(d){this.a=d},
e0V:function e0V(d,e,f){this.a=d
this.b=e
this.c=f},
e0U:function e0U(d,e){this.a=d
this.b=e},
e0S:function e0S(d){this.a=d},
e0T:function e0T(){},
e14:function e14(d){this.a=d},
e13:function e13(d){this.a=d},
e11:function e11(d,e){this.a=d
this.b=e},
e1_:function e1_(d){this.a=d},
e10:function e10(){},
e12:function e12(d,e,f){this.a=d
this.b=e
this.c=f},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e0Z:function e0Z(){},
e1a:function e1a(d){this.a=d},
e1b:function e1b(d,e){this.a=d
this.b=e},
e19:function e19(){},
e1c:function e1c(d,e){this.a=d
this.b=e},
e1d:function e1d(d){this.a=d},
e1e:function e1e(d){this.a=d},
az7:function az7(d,e){this.c=d
this.a=e},
bbd:function bbd(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
cLh:function cLh(d){this.a=d},
bbc:function bbc(d,e){this.b=d
this.a=e},
cLg:function cLg(d){this.a=d},
azs:function azs(){},
azt:function azt(){},
aLA:function aLA(){},
bzP:function bzP(){},
is_(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bZ(A.vr,23)
$.R()
b8=B.K()
b8.r=A.as.gp(0)
b9.N(A.vr,25,b8)
b8=B.K()
b8.sav(D.ezB.aJ(0,v))
b9.N(A.vr,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.bp.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.o(b8*17,s*17-2),new B.o(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.i.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.K()
r.r=A.bD.gp(0)
r.c=2
r.d=A.bu
b9.ah(A.vr,new B.o(b8*18,s*18-2),r)
r=B.K()
r.r=A.bp.gp(0)
b9.N(A.vr,3,r)
c2.$5(b9,w?"V":"A",D.eqz,A.bp,12)
c2.$5(b9,w?A.i.ad(o,1)+" V":""+A.i.V(o*1000)+" mA",D.epW,A.as,9.5)
return!0
case"fan":b8=B.bn(D.f7m,A.hT)
$.R()
s=B.K()
s.r=A.bw.gp(0)
b9.an(b8,s)
s=B.K()
s.r=A.an.gp(0)
b9.aq(D.f8d,s)
s=B.K()
s.r=A.a_.j(0.6).gp(0)
b9.N(H.vs,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bo(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bs(A.aLy,18,10)
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=A.hw.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.bZ(s,r)
b8.restore()}b8=B.K()
b8.r=A.br.gp(0)
b9.N(H.vs,4,b8)
b8=B.K()
b8.b=A.a9
b8.c=2
b8.r=A.cv.gp(0)
b9.N(H.vs,22,b8)
b8=B.K()
b8.b=A.a9
b8.c=0.8
b8.r=A.k_.gp(0)
b9.N(H.vs,14,b8)
return!0
case"speaker":n=B.bn(D.aRM,A.r4)
$.R()
b8=B.K()
b8.sav(D.at2.aJ(0,new B.a1(n.a,n.b,n.c,n.d)))
b9.an(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.K()
b8.sav(D.ezX.aJ(0,B.bZ(A.cC,15)))
b9.N(A.cC,14+m,b8)
b8=B.K()
b8.r=A.dc.gp(0)
b9.N(A.cC,5,b8)
b8=B.K()
b8.r=A.bo.gp(0)
b9.N(H.a8r,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bZ(D.end,6+u*6+A.i.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=1.8
r.r=A.bT.j(0.9-u*0.2).gp(0)
b9.cC(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bn(D.f84,A.r4)
$.R()
b8=B.K()
b8.sav(D.c8f.aJ(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.an(l,b8)
b8=B.bn(D.aRO,A.iE)
s=B.K()
s.r=A.i9.gp(0)
b9.an(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FN(k)<500?":":" "
i=A.a.b_(A.o.u(B.dg(k)),2,"0")
h=A.a.b_(A.o.u(B.fP(k)),2,"0")
b8=B.K()
b8.r=A.b5.j(0.12).gp(0)
b9.aq(D.aRO,b8)
c2.$5(b9,i+j+h,D.eqh,A.b5,21)}b8=B.K()
b8.r=A.cv.gp(0)
b9.N(D.eqf,2.4,b8)
b8=B.K()
b8.r=A.cv.gp(0)
b9.N(D.eni,2.4,b8)
return!0
case"calculator":l=B.bn(D.f7K,A.hU)
$.R()
b8=B.K()
b8.sav(D.c8_.aJ(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.an(l,b8)
b8=B.bn(D.f7D,A.hC)
s=B.K()
s.r=(b7?A.Zx:D.bse).gp(0)
b9.an(b8,s)
if(b7)c2.$5(b9,"3.14159",D.epV,A.Yf,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bn(new B.a1(r,b8,r+6,s),A.Uw)
$.R()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=(f===3?A.c6:A.bP).gp(0)
b9.an(r,q)}return!0
case"phone":l=B.bn(D.f7y,A.hU)
$.R()
b8=B.K()
b8.r=M.ny.gp(0)
b9.an(l,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.9
b8.r=D.akg.gp(0)
b9.an(l,b8)
e=B.bn(D.f7o,A.hT)
if(b7){b8=B.K()
b8.sav(D.c9z.aJ(0,new B.a1(e.a,e.b,e.c,e.d)))
b9.an(e,b8)
b8=b9.c
J.bo(b8.save())
b8.clipRRect(B.nR(e),$.np(),!0)
b8.translate(-12,-25)
L.M7(b9,D.feq,c1,b6)
b8.restore()
d=A.i.F(c1*0.12,1)
b8=B.bn(D.f7l,A.hC)
s=B.K()
s.r=A.aU.gp(0)
b9.an(b8,s)
s=B.K()
s.r=A.b5.gp(0)
b9.aq(new B.a1(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.i.V(d*100)+"%",D.eoX,A.c,6)}else{b8=B.K()
b8.r=D.wc.gp(0)
b9.an(e,b8)}b8=B.bn(D.f8t,D.eA4)
s=B.K()
s.r=A.w.gp(0)
b9.an(b8,s)
return!0
case"router":l=B.bn(D.f83,A.mw)
$.R()
b8=B.K()
b8.sav(D.c8w.aJ(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.an(l,b8)
for(a0=0;a0<2;++a0){a1=F.SD[a0]
b8=a1<0?-4:4
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.cs.gp(0)
s.c=4
s.d=A.bu
b9.ah(new B.o(a1,-4),new B.o(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.i.bh(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b8.r=(a2?A.bd:A.aM).gp(0)
b9.N(new B.o(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bZ(H.vs,8+u*6+A.i.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=1.8
r.r=A.hu.j(0.9-u*0.2).gp(0)
b9.cC(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bn(D.f7J,A.hT)
s=$.R()
r=B.K()
r.r=A.e6.gp(0)
b9.an(b8,r)
if(b7){b8=B.K()
b8.r=A.ay.j(0.5*a3).gp(0)
b8.y=A.ww
b9.N(A.vr,34,b8)}a4=new B.aG(s.r,A.ai,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.c6(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bu())
b8=B.K()
b8.r=B.ar(A.el,D.bj8,a3).gp(0)
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
b9.ah(A.H,H.a8r,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bo(b8.save())
b8.translate(0,a5)
s=$.R().r
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
l.E(new B.bu())
q=B.K()
q.sav(D.c6C.aJ(0,D.f7X))
b9.af(l,q)
q=new B.aG(s,A.ai,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bu())
p=B.K()
p.r=A.fI.gp(0)
b9.af(q,p)
r=new B.aG(s,A.ai,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bu())
s=B.K()
s.r=A.fI.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aCo[a0]
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
b9.ah(A.H,new B.o(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.i.F(b8+u*8,14)
r=-4+u*5
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.aD.gp(0)
q.c=1.6
b9.ah(new B.o(-34-s,r),new B.o(-42-s,r),q)}return!0
case"kettle":b8=$.R().r
s=x.v
l=new B.aG(b8,A.ai,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.c6(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bu())
r=B.K()
r.sav(D.c7F.aJ(0,D.f7I))
b9.af(l,r)
r=new B.aG(b8,A.ai,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bu())
q=B.K()
q.r=A.ec.gp(0)
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
if(b7){s=B.ar(A.cG,A.um,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e6
b8.r=s.gp(0)
b9.aq(D.f7H,b8)
if(b7){b8=B.K()
b8.r=A.cG.j(0.3).gp(0)
b8.y=A.mg
b9.N(A.aLw,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.i.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.N(new B.o(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.K()
b8.r=A.as.gp(0)
b9.N(D.emg,3,b8)
return!0
case"lamp":if(b7){u=A.i.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aG($.R().r,A.ai,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bu())
s=B.K()
s.r=A.dA.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.K()
s.r=A.dA.j(0.5*u).gp(0)
s.y=T.Os
b9.N(D.eql,24,s)}b8=B.bn(D.f8m,A.hT)
s=$.R()
r=B.K()
r.r=A.e6.gp(0)
b9.an(b8,r)
r=B.K()
r.r=A.dc.gp(0)
r.c=3
r.d=A.bu
b9.ah(D.emw,D.aLJ,r)
r=B.K()
r.r=A.dc.gp(0)
r.c=3
r.d=A.bu
b9.ah(D.aLJ,D.eqm,r)
a7=new B.aG(s.r,A.ai,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bu())
s=B.K()
s.r=(b7?A.aQ:A.ku).gp(0)
b9.af(a7,s)
b8=B.K()
b8.r=(b7?A.c:A.bo).gp(0)
b9.N(D.eqp,4,b8)
return!0
case"lights":b8=$.R().r
s=x.v
a8=new B.aG(b8,A.ai,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.c6(0,22,34,-6))
r=B.K()
r.b=A.a9
r.c=2
r.r=A.ht.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.i.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b1.r=D.a5e[u].j(0.6).gp(0)
b1.y=A.H9
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
q=new B.bu()
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
if(b0)p=D.a5e[u]
else{p=B.ar(D.a5e[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.irY(b9,c0,c1,c2)},
fQ:function fQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hfw(d){var w=D.mt.h(0,d)
return(w==null?null:w.b)===D.AC},
ite(d,e,f){return B.a6(d,!1).ce(B.vk(null,!1,!0,!0,new C.h0m(e,f),A.eT,null,A.pn,new C.h0n(),x.H))},
Ki:function Ki(d,e){this.a=d
this.b=e},
mx:function mx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h0m:function h0m(d,e){this.a=d
this.b=e},
h0n:function h0n(){},
W6:function W6(d,e,f){this.c=d
this.d=e
this.a=f},
blS:function blS(d,e){var _=this
_.d=$
_.e=null
_.bx$=d
_.a9$=e
_.c=_.a=null},
dY6:function dY6(d){this.a=d},
dY5:function dY5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dY3:function dY3(){},
dY4:function dY4(d){this.a=d},
dY2:function dY2(d){this.a=d},
dY1:function dY1(d,e){this.a=d
this.b=e},
dY0:function dY0(d,e){this.a=d
this.b=e},
dY_:function dY_(d){this.a=d},
dXZ:function dXZ(d){this.a=d},
dXV:function dXV(d){this.a=d},
dXU:function dXU(d){this.a=d},
dXY:function dXY(d,e,f){this.a=d
this.b=e
this.c=f},
dXX:function dXX(d){this.a=d},
dXW:function dXW(d){this.a=d},
bxR:function bxR(d,e,f){this.b=d
this.c=e
this.a=f},
afT:function afT(d,e,f){this.b=d
this.c=e
this.a=f},
aNo:function aNo(){},
a29(d,e,f,g,h,i){return new C.bwD(d,e,f,g,h,i)},
bwD:function bwD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ft5:function ft5(){},
ft6:function ft6(){},
ft7:function ft7(){},
ft8:function ft8(){},
ft9:function ft9(){},
fta:function fta(){},
ftb:function ftb(){},
ftc:function ftc(){},
a9x:function a9x(d){this.a=d},
cmA:function cmA(d){this.a=d},
cmB:function cmB(){},
cmz:function cmz(d,e){this.a=d
this.b=e},
cmy:function cmy(d){this.a=d},
XI:function XI(d){this.a=d},
aGz:function aGz(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h5$=f
_.m7$=g
_.fa$=h
_.h6$=i
_.bx$=j
_.a9$=k
_.c=_.a=null},
eUw:function eUw(d){this.a=d},
eUs:function eUs(d){this.a=d},
eUr:function eUr(d,e){this.a=d
this.b=e},
eUu:function eUu(d,e){this.a=d
this.b=e},
eUt:function eUt(d,e){this.a=d
this.b=e},
eUv:function eUv(d){this.a=d},
by2:function by2(d,e,f){this.b=d
this.c=e
this.a=f},
Wv:function Wv(d){this.a=d},
bm2:function bm2(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h5$=d
_.m7$=e
_.fa$=f
_.h6$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
e3W:function e3W(){},
e3X:function e3X(){},
e3R:function e3R(d,e){this.a=d
this.b=e},
e3T:function e3T(d,e){this.a=d
this.b=e},
e3U:function e3U(d){this.a=d},
e3S:function e3S(d){this.a=d},
e3V:function e3V(d){this.a=d},
bsK:function bsK(d,e,f){this.b=d
this.c=e
this.a=f},
VI:function VI(d){this.a=d},
blB:function blB(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h5$=d
_.m7$=e
_.fa$=f
_.h6$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
dPp:function dPp(){},
dPq:function dPq(){},
dPk:function dPk(){},
dPn:function dPn(d,e){this.a=d
this.b=e},
dPm:function dPm(d,e){this.a=d
this.b=e},
dPo:function dPo(d){this.a=d},
dPl:function dPl(d){this.a=d},
aK_:function aK_(d,e,f){this.a=d
this.b=e
this.c=f},
Wm:function Wm(d){this.a=d},
blU:function blU(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e0r:function e0r(d,e){this.a=d
this.b=e},
e0s:function e0s(d){this.a=d},
e0q:function e0q(d,e){this.a=d
this.b=e},
e0t:function e0t(d){this.a=d},
e0p:function e0p(d,e){this.a=d
this.b=e},
e0u:function e0u(d){this.a=d},
e0o:function e0o(d,e){this.a=d
this.b=e},
e0v:function e0v(d,e){this.a=d
this.b=e},
e0n:function e0n(d,e){this.a=d
this.b=e},
e0w:function e0w(d){this.a=d},
e0m:function e0m(d,e){this.a=d
this.b=e},
e0x:function e0x(d){this.a=d},
e0l:function e0l(d){this.a=d},
e0y:function e0y(d){this.a=d},
e0k:function e0k(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0A:function e0A(d){this.a=d},
e0j:function e0j(d){this.a=d},
bnW:function bnW(d,e,f){this.b=d
this.c=e
this.a=f},
X5:function X5(d){this.a=d},
aFT:function aFT(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
erl:function erl(d,e){this.a=d
this.b=e},
erm:function erm(d,e,f){this.a=d
this.b=e
this.c=f},
erk:function erk(d,e,f){this.a=d
this.b=e
this.c=f},
ern:function ern(d){this.a=d},
erj:function erj(d){this.a=d},
err:function err(d){this.a=d},
erq:function erq(d,e){this.a=d
this.b=e},
erp:function erp(d,e){this.a=d
this.b=e},
ers:function ers(d,e){this.a=d
this.b=e},
ero:function ero(d,e){this.a=d
this.b=e},
ert:function ert(d){this.a=d},
Xf:function Xf(d){this.a=d},
aGd:function aGd(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eC7:function eC7(d){this.a=d},
eC8:function eC8(d){this.a=d},
eC5:function eC5(d,e){this.a=d
this.b=e},
eC6:function eC6(d){this.a=d},
eC4:function eC4(d){this.a=d},
eC9:function eC9(d){this.a=d},
eCa:function eCa(d){this.a=d},
eCb:function eCb(d){this.a=d},
eCc:function eCc(d,e){this.a=d
this.b=e},
Xz:function Xz(d){this.a=d},
bn9:function bn9(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eQ_:function eQ_(){},
eQ8:function eQ8(){},
eQ4:function eQ4(d){this.a=d},
eQ3:function eQ3(){},
eQ5:function eQ5(d,e){this.a=d
this.b=e},
eQ2:function eQ2(d,e){this.a=d
this.b=e},
eQ6:function eQ6(d){this.a=d},
eQ1:function eQ1(d,e){this.a=d
this.b=e},
eQ7:function eQ7(d){this.a=d},
eQ0:function eQ0(d){this.a=d},
X4:function X4(d){this.a=d},
bmE:function bmE(d,e,f,g,h,i,j,k){var _=this
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
_.h5$=f
_.m7$=g
_.fa$=h
_.h6$=i
_.bx$=j
_.a9$=k
_.c=_.a=null},
eq0:function eq0(){},
eq1:function eq1(){},
epU:function epU(d){this.a=d},
epT:function epT(d){this.a=d},
epV:function epV(d){this.a=d},
epS:function epS(d){this.a=d},
epW:function epW(d){this.a=d},
epR:function epR(d){this.a=d},
epX:function epX(d,e){this.a=d
this.b=e},
epQ:function epQ(d,e){this.a=d
this.b=e},
epY:function epY(d){this.a=d},
epP:function epP(d,e){this.a=d
this.b=e},
epZ:function epZ(d){this.a=d},
epO:function epO(d,e){this.a=d
this.b=e},
eq_:function eq_(d){this.a=d},
epN:function epN(d,e){this.a=d
this.b=e},
bft:function bft(d,e,f){this.c=d
this.d=e
this.a=f},
aNa:function aNa(){},
bzL:function bzL(){},
aNv:function aNv(){},
bzR:function bzR(){},
aNY:function aNY(){},
bA_:function bA_(){},
aOo:function aOo(){},
bA8:function bA8(){},
JP(d,e,f,g){var w,v,u,t,s,r,q,p=$.att
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.J)(e),++w)E.mv(d,e[w],f,g)
return}for(p=B.cW(e,0,B.dA(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bR(p,p.gI(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mv(d,s,f,g)
else B.bQ(new B.bd(1000*q),new C.cmw(d,s,f,g),u)}},
ck4(d){return C.hXD(d)},
hXD(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ck4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$ck4)
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
return B.i($async$ck4,v)},
b39(d,e){return C.hXE(d,e)},
hXE(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b39=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b39)
case 6:s=g
w=7
return B.b(s.aC("String","ngmy_play_progress_v1_"+d,A.X.aw(e,null)),$async$b39)
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
return B.i($async$b39,v)},
cmw:function cmw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iib(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.J)(w),++q){p=w[q]
u.push(B.I(["k",p.b,"x",B.oo(A.i.ad(p.c,4)),"y",B.oo(A.i.ad(p.d,4)),"v",p.e,"l",B.oo(A.i.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oo(A.i.ad(p.as,3)),"ch",p.at,"vc",B.oo(A.i.ad(p.z,3)),"s",B.oo(A.i.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.J)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a4(f).k("ci.E"))
A.d.fj(l)
return A.X.aw(B.I(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iso(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
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
a3.as6(a2,d,a0,a1)
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
if(m!=null&&l!=null)a6.am2(m,A.i.M(B.dD(J.t(p,1))),l,A.i.M(B.dD(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.i.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aT(h==null?A.cr:h)
while(h.C()){j=h.gR(h)
J.c7(k,A.i.M(B.dD(j)))}return new B.bqU(i,k)}catch(a4){return a5}},
fK6(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fK6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aA(),$async$fK6)
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
return B.i($async$fK6,v)},
bGt(d){return C.iu1(d)},
iu1(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bGt=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aA(),$async$bGt)
case 7:w=6
return B.b(f.aC("String","ngmy_electronics_lab_v1",d),$async$bGt)
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
return B.i($async$bGt,v)}},D,H,Al,X,Am,Y,A3,An
J=c[1]
B=c[0]
A=c[2]
A4=c[118]
Z=c[159]
A_=c[145]
A5=c[151]
A0=c[149]
R=c[142]
A6=c[135]
A7=c[153]
A8=c[161]
A1=c[106]
A9=c[137]
A2=c[117]
N=c[144]
Aa=c[160]
Ab=c[152]
Ac=c[155]
Ad=c[75]
T=c[140]
O=c[129]
U=c[84]
Ae=c[87]
Af=c[133]
V=c[143]
W=c[154]
E=c[29]
K=c[3]
G=c[38]
I=c[108]
Ag=c[102]
P=c[158]
Ah=c[101]
Ai=c[156]
S=c[130]
Aj=c[157]
Q=c[147]
Ak=c[26]
L=c[28]
F=c[99]
M=c[97]
C=a.updateHolder(c[18],C)
D=c[139]
H=c[141]
Al=c[67]
X=c[148]
Am=c[57]
Y=c[110]
A3=c[150]
An=c[146]
C.alc.prototype={}
C.WP.prototype={
S(){return new C.bms(B.T(x.N,x.i),new B.au(A.aw,$.aw()),B.a([],x.X),B.a([],x.eZ),B.mZ(0,null,null))}}
C.bms.prototype={
gX1(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
this.ch.t()
this.a3()},
PO(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.js()
p.bP(0,A.cf)
t.m(new C.ej8(t))
t.a.toString
p=t.gX1()
w=3
return B.b(C.bC1(C.i5C(q,C.ihX(p),o,t.ay)),$async$PO)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=C.ijt(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ej9(t,o,r))
$.aW.x1$.push(new C.eja(t))
case 1:return B.h(u,v)}})
return B.i($async$PO,v)},
Z6(d){return this.c3e(d)},
aYw(){return this.Z6(null)},
c3e(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Z6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.js()
t.f.sb1(0,o)
t.m(new C.ejl(t))
G.dE(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bC1(C.id_(o)),$async$Z6)
case 3:r=n.a=m.is3(f)
p.b=""
if(r!=null&&!C.ihY(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iju(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.alc(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ejm(p,t))
t.c8P(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Z6,v)},
c8P(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gX1()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.ejh(m))
t=d.d
s=B.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ejf(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eji(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.J)(r),++u){p.$2(o,new C.ejj(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ejk(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bq.j(0.1),g=B.l(16),f=B.L(A.bq.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.ffY,A.bc,B.E(B.d(m.Q,l,l,l,l,l,l,A.AO,l,l,l),1)],x.p),A.l,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fH1
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.VO,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fr4,l,l,l)],v),A.l,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uw,B.d(u,l,l,l,l,l,l,D.ftV,l,l,l),l))
w.push(A.cQ)
w.push(B.d(k.b,l,l,l,l,l,l,I.ES,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.l(10)
w.push(B.r(l,B.d(u,l,l,l,l,l,l,D.fwu,l,l,l),A.f,l,l,new B.p(t,l,l,s,l,l,A.n),l,l,l,A.hZ,A.cm,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lX,l,l,l)
q=u[r]
s=s?A.c:A.aD
w.push(new B.D(A.NX,new B.c8(A.aL,A.e,A.j,A.E,l,A.p,l,0,B.a([t,A.bm,new B.bz(1,A.bb,B.d(q,l,l,l,l,l,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.J)(j),++p){o=j[p]
t=A.bq.j(0.3)
s=new B.aN(12,12)
s=B.r(l,B.d(o.a,l,l,l,l,l,l,A.Vu,l,l,l),A.f,l,l,new B.p(t,l,l,new B.be(s,s,s,s),l,l,A.n),l,l,l,l,A.hg,l,l,l)
t=A.c.j(0.07)
q=new B.aN(12,12)
A.d.v(w,B.a([A.T,new B.bL(A.aa,l,l,s,l),A.ax,B.r(l,B.d(o.b,l,l,l,l,l,l,D.fCi,l,l,l),A.f,l,l,new B.p(t,l,l,new B.be(q,q,q,q),l,l,A.n),l,l,l,l,A.bV,l,l,l)],v))}if(m.ax)w.push(D.erU)
j=B.ce(B.x(w,A.E,l,A.e,A.j,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.ajq(B.r(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.p(h,l,f,g,l,l,A.n),l,l,l,D.bC0,A.eA,l,l,1/0),A.b0,A.ix),B.E(C.hkl(m.gX1(),l,l,m.e),1)],w),A.l,l,A.e,A.j,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dW("Ask about it",i,new C.ejp(m),l,A.bq,l),new E.dW("Invent something new",!i,new C.ejq(m),l,A.bq,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.du0[p]
i.push(new E.dW(n,!1,new C.ejr(m,n),l,A.bq,l))}f.push(new E.fb(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dbZ[p]
i.push(new E.dW(r,!1,new C.ejs(m,r),l,A.bq,l))}f.push(new E.fb(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.l(16),A.a1),l,A.f_,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kk,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ejt(m,k),l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.di,!0,A.a5,l,A.ao,l,A.Vi,l,l),1)
h=m.at
v=h&&j?D.bRW:A.ed
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.ae,new E.fC(v,j,new C.eju(m,k),A.bq,l)],w),A.l,l,A.e,A.j,0,l,l))
return E.lA(A.bq,A.f7,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.P,0,A.p))}}
C.GY.prototype={}
C.vr.prototype={}
C.Xb.prototype={
S(){return new C.aG7(A.H,A.H,A.az,B.aR(x.S),$,A.bF,0,B.a([],x.X),null,null)}}
C.aG7.prototype={
gaZP(){var w,v,u,t=this,s=D.Iw[t.cx],r=D.SF[t.cy],q=D.Dz[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dZ(w,w.r,B.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aAF[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cG(p,0,new C.eyr())},
ga3w(){return D.Iw[this.cx].d/this.gaZP()},
gaQL(){return 0.1*(D.Iw[this.cx].d/0.9)/D.SF[this.cy].d},
Y(){this.a4()
this.mh()
C.ck4("rocket_lander").bG(new C.eyL(this),x.k)},
c8Y(){var w=this
w.ay=A.i.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cO.ai()*0.6
w.f=new B.o(0.15+A.cO.ai()*0.7,0.08)
w.r=new B.o((A.cO.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mz(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.eyM())
return}w=D.tg[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.i.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.o(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3w()
v=v.a2(0,new B.o(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaQL())}if(m.dy){t=m.r
v=v.aK(0,t.aM(0,t.gcK()*6*D.aCI[m.d]))}t=m.r=m.r.a2(0,v.aM(0,d))
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
p=D.Dz[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b39("rocket_lander",B.I(["unlocked",t],x.N,x.z))
C.JP("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3w()/(D.tg[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.i.ad(m.ga3w()/(D.tg[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dE(80,"",500,0,0.6,"noise")
B.fL()}}if(m.Q&&m.x>0&&A.o.F(A.i.bh(m.CW*20),2)===0)G.dE(90,"",70,0,0.12,"noise")
m.m(new C.eyN())},
ah6(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.ftn,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dW(e[w].a,f.$1(w),new C.eyt(this,g,w),v,h,v))
return new B.D(A.eO,B.x(B.a([u,A.cQ,B.bW(A.bH,s,A.bs,v,6,6)],t),A.E,v,A.e,A.j,0,A.p),v)},
bI_(d){var w,v,u,t,s=this,r=null,q=s.ga3w()/(D.tg[s.d].b/9.81*0.28)>=1,p=A.i.V(1/s.gaQL()),o=D.aCI[s.d],n=B.l(24),m=d.c,l=B.L(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.m(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.ax,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.abf,r,r,r),A.W,s.ah6("ENGINE: "+D.Iw[s.cx].b,D.Iw,new C.eyi(s),new C.eyj(s),A.cG),s.ah6("FUEL TANK: "+D.SF[s.cy].b,D.SF,new C.eyk(s),new C.eyl(s),A.b5),s.ah6("LANDING GEAR: "+D.Dz[s.db].b,D.Dz,new C.eym(s),new C.eyn(s),A.aH),s.ah6("EXTRAS (tap to add)",D.aAF,new C.eyo(s),new C.eyp(s),A.bq)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.h_3)
o=(q?A.b5:A.c0).j(0.14)
w=B.l(12)
v=A.i.ad(s.gaZP(),2)
u=A.i.ad(s.ga3w()/(D.tg[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.r(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.i.V(D.Dz[s.db].d*100)+".",r,r,r,r,r,r,D.fu3,r,r,r),A.f,r,r,new B.p(o,r,r,w,r,r,A.n),r,r,r,A.hZ,A.bV,r,r,r))
m.push(A.W)
m.push(new B.bL(A.A,r,r,new E.fC(A.oI,"Launch",new C.eyq(s),A.b5,r),r))
return B.at(B.r(r,B.ce(B.x(m,A.E,r,A.e,A.P,0,A.p),A.t,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.m1,new B.p(D.brM,r,l,n,r,r,A.n),r,r,r,A.bV,r,r,r,r),r,r,r)},
b0_(d,e,f,g){var w=null,v=f?A.cG:A.c.j(0.1),u=B.l(18),t=B.L(A.aT,A.r,1)
return B.mP(A.iR,B.r(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eyf(e),new C.eyg(e),w,w,w,w,new C.eyh(e))},
b_Z(d,e,f){return this.b0_(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cq(new C.eyE(s,D.tg[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tg[w].a:"\ud83d\udd12"
o.push(new E.dW(v,s.d===w,new C.eyF(s,w),r,D.tg[w].c,r))}v=B.a([s.b_Z(F.aqm,new C.eyG(s),s.y),A.bc,s.b0_(A.wJ,new C.eyH(s),s.Q,130),A.bc,s.b_Z(A.PH,new C.eyI(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.l(18)
A.d.v(v,B.a([A.bc,B.az(r,B.r(r,D.bW8,A.f,r,r,new B.p(u,r,B.L(A.aT,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eyJ(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lA(A.cG,A.f7,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fb(o,"WORLD",r),B.A(v,A.l,r,A.ba,A.j,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.bjm.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tg[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.R(),f=B.K(),e=l.c,d=B.ar(K.a_4,e,0.25)
d.toString
f.sav(new B.a8(A.b4,A.b8,A.x,B.a([F.ahc,d],x.O),n,n).aJ(0,new B.a1(0,0,i,h)))
a0.aq(new B.a1(0,0,i,h),f)
w=new B.e5()
w.d_(5)
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
s=new B.e5()
s.d_(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.ak(f)
t.ab()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bu())
h=$.R()
g=B.K()
g.r=B.ar(e,A.w,0.6).gp(0)
a0.af(t,g)
q=B.bs(new B.o(m.ax*k,u+10),8,m.ay*k)
g=B.bn(q,A.iE)
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
J.bo(f.save())
f.translate(g.a*k,g.b*j)
a0.hW(0,m.w)
k=m.as
if(k==="crashed"){m=B.K()
m.r=A.cG.j(0.6).gp(0)
m.y=T.Os
a0.N(A.H,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aG(k,A.ai,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bu())
m=B.K()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aG(k,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bu())
m=B.K()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aG(m,A.ai,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.c6(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.c6(-14,-10,0,-26))
o.E(new B.bu())
k=B.K()
k.sav(D.c88.aJ(0,D.f7v))
a0.af(o,k)
k=B.K()
k.r=A.aH.gp(0)
a0.N(H.vs,5,k)
k=new B.aG(m,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bu())
j=B.K()
j.r=A.ay.gp(0)
a0.af(k,j)
i=new B.aG(m,A.ai,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bu())
m=B.K()
m.r=A.ay.gp(0)
a0.af(i,m)
f.restore()},
aD(d){return!0}}
C.aO5.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA1.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzU()}}
C.aUa.prototype={}
C.a4t.prototype={}
C.bci.prototype={}
C.VH.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eA(["skin"],x.N),o=new Float32Array(0)
return new C.aEB(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.LS,D.LS,A.az,A.cO,o,new Int32Array(0),$,A.bF,0,B.a([],x.X),null,null)}}
C.aEB.prototype={
Y(){var w=this
w.a4()
w.mh()
w.as=new C.c6v(w.gchR())
new C.dPi(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.byW()},
chS(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f9(0,B.I(["t","init","data",$.huA],x.N,x.z))
v.at=!0
v.ay=""
v.aAV()
break
case"parts":v.m(new C.dOT(v))
break
case"pick":v.m(new C.dOU(v,d))
break
case"shot":v.aj0(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dOV(v))
break}},
aAV(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ayx[q.cx]
v=new C.dOW()
u=q.ch
u=B.C(u,B.a4(u).k("ci.E"))
A.d.fj(u)
t=x.N
s=B.I(["layers",u,"skinMode",q.CW,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cy,"bpm",A.i.V(q.k4),"spin",q.go],t,x.cK)
r=A.X.aw(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.f9(0,u)}},
aj0(d){return this.cyR(d)},
cyR(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aj0=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cK.aN(A.a.b2(d,A.a.co(d,",")+1))
w=6
return B.b(B.awU(B.a([B.cGs(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aj0)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.T(K.aU6)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aj0,v)},
aAj(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mz(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.i.bh(w)!==A.i.bh(v.p1)){E.XB("kick",0,0.4)
v.UH(170,new C.dPj())}v.p1=w
return},
aeE(d){var w,v,u,t,s=this
s.m(new C.dOX(s,d))
if(d==null){s.fy=D.LS
s.fr=1
w=s.as
if(w!=null)w.f9(0,B.I(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dOY(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.J(0,t)
if(s.CW===2)s.CW=1}s.aAV()
w=s.as
if(w!=null)w.f9(0,B.I(["t","focus","group",d],x.N,x.z))
s.id=0
s.cBk(t,d)
return},
cBk(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.XB("kick",0,0.8)
this.UH(260,new C.dOZ())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dE(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UH(w*70,new C.dP_(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dE(110,"",360,0.7,0.3,"saw")
else E.h9Q("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dE(210+e.length*4,"",80,0.6,0.55,"tri")
G.dE(2400,"",20,0,0.3,v)
break
case"muscle":G.dE(70,"",150,1,0.6,"sine")
break
case"vessel":G.dE(300,"",380,0.4,0.22,v)
E.XB("kick",0,0.3)
break
default:E.h9Q("organic",2+A.o.F(e.length,6),200,0.4)}},
cFZ(d){this.m(new C.dP1(this,d))},
b0h(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(p.aAj(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=B.C(o,o.$ti.k("ci.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.az(w)]
p.R8=""},
bZU(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dOQ(u,w,d))
v=x.t
C.JP("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UH(1100,new C.dOR(u))
return}if(d==null){if(u.cy!=null)u.aeE(null)
return}u.aeE(d)},
c2w(d,e){var w,v=this,u=null,t=B.l(18),s=B.L(A.bT.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fpr,u,u,u)}else if(d==null||e==null)w=D.fEr
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hp,u,u,u),A.cQ,B.d(e.b,u,u,u,u,u,u,I.ES,u,u,u)],w),A.E,u,A.e,A.P,0,A.p),1),B.aI(u,u,u,u,D.bYH,u,u,u,new C.dOS(v),u,u,u,u,"Back to the whole body",A.cg)],w),A.E,u,A.e,A.j,0,u,u)}return B.r(u,w,A.f,u,u,new B.p(K.Yo,u,s,t,u,u,A.n),u,u,u,u,R.alL,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dFd.h(0,g)
i.aAV()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dmg
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.J)(v),++s){r=v[s]
if(i.aAj(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,K.oL,h,h,h,new C.dP8(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bN:B.BZ(h,A.pQ,p))}p=i.ax
o=p?0:1
q.push(new B.du(p,B.zn(B.r(A.A,B.x(D.dvA,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.b6W,h,h,D.hra,h,h,h,h,h),A.b0,A.mW,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b1,A.t,q,h),1),new B.D(F.a0a,i.c2w(g,f),h)],v),A.l,h,A.e,A.j,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.ddA[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dW(l,o,new C.dP9(i,n),n.c,A.bT,h))}p=B.a([new E.fb(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.J)(w),++s){k=w[s]
o.push(new E.dW(k,k===i.cy,new C.dPa(i,k),h,A.aQ,h))}p.push(new E.fb(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iP(A.c0,""+A.i.V(o)+" beats/min","Heart rate",180,40,new C.dPb(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G6(D.ayx[j],i.cx===j,new C.dPc(i,j),!1,h))
p.push(new E.fb(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dW("Spin",o,new C.dPd(i),D.ape,A.aH,h),new E.fC(A.oD,"Reset view",new C.dPe(i),A.c,h),new E.dW(l,m,new C.dPf(i),A.HP,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.dW("Heartbeat sound",i.ok,new C.dPg(i),A.oH,A.c0,h))
p.push(new E.fb(v,h,h))
return E.lA(A.bT,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.P,0,A.p))}}
C.aN8.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aN9.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byV()}}
C.c6v.prototype={
kW(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hAP
$.hAP=v+1
u="ngmy-body-viewer-"+v
$.xu()
$.pY().pd(u,new C.c6w(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fB(v,"message",new C.c6x(t),!1,x.gA)
t.b=u},
f9(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Ry(w.contentWindow)
if(w!=null)J.ajg(w,e,"*")}}catch(v){}}}
C.yL.prototype={}
C.D3.prototype={}
C.nL.prototype={}
C.bd3.prototype={}
C.VM.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aED(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.H,A.H,B.aR(u),$,A.bF,0,B.a([],x.X),null,null)}}
C.aED.prototype={
Y(){var w=this
w.a4()
w.mh()
w.adC()
$.aW.x1$.push(new C.dQY(w))},
adC(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adC=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$adC)
case 6:q=e.tT("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dQC(s,r))
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
return B.i($async$adC,v)},
adY(d){return this.c6t(d)},
c6t(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adY=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return B.b(B.aA(),$async$adY)
case 6:r=f
q=s.cx
p=B.a4(q).k("k9<ci.E,n>")
q=B.C(new B.k9(q,new C.dQF(),p),p.k("M.E"))
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
return B.i($async$adY,v)},
ayX(d,e,f,g){var w="c"+this.y++,v=new C.D3(w,e,f,g)
this.d.n(0,w,v)
return v},
mP(d,e,f){return this.ayX(0,e,f,0)},
acX(d,e){var w
if(D.Aa.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a2(0,new B.o(-36,w))},
uj(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aUW(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fa$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cXs[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uj(p,0)&&n.uj(p,1)
break
case"or":p=q.a
o=n.uj(p,0)||n.uj(p,1)
break
case"xor":p=q.a
o=n.uj(p,0)!==n.uj(p,1)
break
case"nand":p=q.a
o=!(n.uj(p,0)&&n.uj(p,1))
break
case"nor":p=q.a
o=!(n.uj(p,0)||n.uj(p,1))
break
case"not":o=!n.uj(q.a,0)
break
default:o=n.uj(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bSn(){return this.aUW(null)},
mz(d){var w,v,u,t,s,r,q,p,o,n=this
n.bSn()
if(!n.ax)return
for(w=n.d,w=new B.b7(w,B.a4(w).k("b7<2>")).gae(0),v=new B.eG(w,new C.dQZ()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fa$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fa$)
o=s+1
G.dE(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
ayY(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
mi(d,e){var w=this.x
return new B.o(d*w.a,e*w.b)},
av7(d){var w=this
if(w.x.A(0,A.az)){$.aW.x1$.push(new C.dQA(w,d))
return}w.m(new C.dQB(w,d))},
cBC(d){this.m(new C.dQG(this,d,$.bGP()[d]))},
cbg(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bGP()[a0]
v=d.d
u=B.a4(v).k("b7<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b7(v,u),new C.dQv(),t),s)
A.d.aZ(r,new C.dQw())
q=B.C(new B.Y(new B.b7(v,u),new C.dQx(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dQy(d,w))
return}u=d.r
p=B.dO(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dw(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.ha(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aUW(0)
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
d.m(new C.dQz(d,o,a0))},
azP(d){var w,v,u,t,s=this.d,r=B.a4(s).k("b7<2>")
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
cki(d){var w,v,u,t,s,r=this.d,q=B.a4(r).k("b7<2>")
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
c2p(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.Aa.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.acX(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bR6(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.acX(p,o)
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
cbi(d){var w,v,u,t=this,s=t.azP(d)
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
t.m(new C.dQH())
return}u=t.bR6(d)
if(u!=null)t.m(new C.dQI(t,u))
else t.m(new C.dQJ(t))},
axL(d){return this.c5s(d)},
c5s(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$axL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.azP(d)
if(s==null){w=1
break}B.jY()
t.m(new C.dQE(t,s))
case 1:return B.h(u,v)}})
return B.i($async$axL,v)},
bDO(d){if(this.x.A(0,A.az))return
this.m(new C.dQu(this,d,A.cO))
B.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bGP()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.X(i.ax?A.oH:V.tb,A.ab,h,h,h,21),h,h,h,new C.dQS(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.l(16)
s=A.cp.j(0.14)
r=B.L(A.cp.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.foy,h,h,h),B.d(w.b,h,h,h,h,h,h,A.VI,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.lh,B.d(p,h,h,h,h,h,h,B.m(h,h,i.CW?A.b5:A.eW,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.r(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.j,0,A.p),1),B.bJ(D.fQ1,h,i.gcbf(),B.bp(A.cp,h,h,h,h,h,h,h,h,h,h,A.cg))],g),A.l,h,A.e,A.j,0,h,h),A.f,h,h,new B.p(s,h,r,t,h,h,A.n),h,h,h,U.O4,D.bCH,h,h,1/0))}u.push(B.E(B.cq(new C.dQT(i)),1))
if(f!=null){t=B.l(14)
s=A.c.j(0.06)
r=f.b
u.push(B.r(h,B.d(D.Aa.h(0,r).a+": "+D.Aa.h(0,r).e,h,h,h,h,h,h,A.tM,h,h,h),A.f,h,h,new B.p(s,h,h,t,h,h,A.n),h,h,h,A.a0e,A.bV,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.j,0,A.p)
t=B.a([],g)
for(s=D.Aa.gdO(D.Aa),s=s.gae(s);s.C();){r=s.gR(s)
q=new B.aN(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.az(h,B.r(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bG,B.d(p.a,h,h,h,h,h,h,D.aW5,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.p(n,h,new B.bH(m,m,m,m),new B.be(q,q,q,q),h,h,A.n),h,h,h,A.fC,Ah.O1,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dQU(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dqM[l]
s.push(new E.fC(A.PI,k.b,new C.dQV(i,k),A.cp,h))}s.push(new E.fC(K.wG,"Clear",new C.dQW(i),A.c0,h))
r=B.a([],g)
for(j=0;q=$.bGP(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ee:A.lN
o=i.ay
n=i.cx.q(0,j)?A.b5:A.bj
r.push(new E.dW(q.a,o===j,new C.dQX(i,j),p,n,h))}return E.lA(A.cp,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fb(t,"PARTS",h),new E.fb(s,"TRY",h),new E.fb(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bdm.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.R()
w=B.K()
w.r=D.afx.gp(0)
a5.aq(new B.a1(0,0,0+a3,0+a4),w)
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
i=a3.acX(l,o.c)
h=s.h(0,n)===!0
n=$.R()
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
n.r=A.bj.j(0.28).gp(0)
n.y=N.ow
a5.af(f,n)}n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=3.2
n.d=A.bu
n.r=(h?A.dA:A.bw).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a2(0,D.JD)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aG($.R().r,A.ai,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.km(a4+e,w,a3-e,s,a3,s))
s=B.K()
s.b=A.a9
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.cbh(a5,a3.d)},
cbh(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.Aa.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bs(a0.c,64,64)
s=B.bn(t,A.jO)
r=w.cy===v
q=s.eQ(A.cC)
$.R()
p=B.K()
p.r=A.w.j(0.55).gp(0)
p.y=A.mg
d.an(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.K()
p.sav(new B.bY(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aJ(0,B.bZ(a0.c,52)))
d.N(q,52,p)}q=s.eQ(A.cJ)
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
q.sav(new B.a8(A.b4,A.b8,A.x,B.a([p,m],x.O),g,g).aJ(0,t))
d.an(s,q)
q=B.K()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.an(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.pA:D.bSr}else l=e.b
k=C.hbF(B.lz(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aK(0,new B.o(p/2,q.gba(q)/2)))
j=C.hbF(e.a,10.5,A.c,g,g,A.I)
j.a5(d,a0.c.a2(0,new B.o(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hbF(f,9,u?A.dA:A.bW,g,g,A.u)
i.a5(d,a0.c.a2(0,new B.o(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b0W(d,w.acX(a0,h),o)
this.b0W(d,a0.c.a2(0,D.JD),o)},
b0W(d,e,f){var w
$.R()
w=B.K()
w.r=D.afx.gp(0)
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
C.aNd.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzM.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bz_()}}
C.Oi.prototype={
S(){return new C.aEU(B.mZ(0,null,null))}}
C.Lj.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.Ba.prototype={}
C.aEU.prototype={
Y(){this.a4()
B.bQ(A.qx,C.iqp(),x.H)},
cbn(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new C.dX9(w,e))},
c4i(){var w=this
w.e.t()
w.e=B.mZ(w.f,null,null)
w.m(new C.dX8(w))},
t(){this.e.t()
this.a3()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.Q(d).ax.a===A.dk?A.h3:A.c2
return B.oO(t,B.c4(v,s,t?new C.btH(w.e,w.gcbm(w),new C.dXa(d),v):new C.aJ7(u,new B.bC(u.b,x.Y)),v,!1,!1,v,!1),new C.dXb(w,u),x.K)}}
C.bvj.prototype={}
C.btH.prototype={
b0X(d,e,f){var w=null,v=B.d(d,w,w,w,w,w,w,B.m(w,w,f?A.bB:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(R.a0G,B.x(B.a([v,A.bG,B.d(e,w,w,w,w,w,w,B.m(w,w,f?A.dI:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.Q(d).ax.a===A.dk,q=B.aF(d,A.dR,x.l).w,p=B.aI(s,s,s,s,B.X(A.eL,r?A.bB:A.ab,s,s,s,20),s,s,D.hrs,t.e,s,s,s,s,s,s)
if(r)w=new B.p(A.c,s,s,B.l(14),A.Iy,s,A.n)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.l(14)
w=new B.p(s,s,B.L(A.aH.j(0.75),A.r,1.6),v,B.a([new B.ac(0,A.G,A.aH.j(0.22),A.H,8)],x.V),new B.a8(A.aA,A.aE,A.x,w,s,s),A.n)}v=B.d("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.m(s,s,r?A.bB:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.r(s,B.x(B.a([v,B.d("Play, make things, keep them.",s,s,s,s,s,s,B.m(s,s,r?A.dI:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.hrx,s,A_.amg,s,s,s),s,s,s),1),A.tE],u),A.l,s,A.e,A.j,0,s,s)
v=t.b0X("STUDIOS","Play, make things, and keep what you make",r)
$.bGQ()
return B.bm(!1,B.x(B.a([B.E(B.w7(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nI(new B.S(8,q.r.b+6,8,4),new B.m3(w,s),s),new B.m3(v,s),new B.nI(A.i_,B.PX(new B.oR(new C.f8e(d),9,!0,!0,!0,0,B.tr(),s),D.aTW),s),new B.m3(t.b0X("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nI(D.bCQ,B.PX(new B.oR(new C.f8f(t),6,!0,!0,!0,0,B.tr(),s),D.aTW),s)],u)),1)],u),A.l,s,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!1)}}
C.agb.prototype={
B(d){var w,v,u,t,s,r,q,p,o=null,n=this.c,m=n.d
if(B.Q(d).ax.a===A.dk){w=B.l(20)
v=B.NZ(20)
return B.aH(!1,A.a3,!0,o,B.aP(!1,w,!0,B.ez(B.x(B.a([new B.NY(m,44,n.c,o,o),A.T,B.d(n.a,o,2,A.a2,o,o,o,D.fuM,A.K,o,o),A.cQ,B.d(n.b,o,2,A.a2,o,o,o,D.fxB,A.K,o,o)],x.p),A.l,o,A.ba,A.j,0,A.p),o,v,o,A.Cv,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,this.d,o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj)}w=B.l(20)
v=B.l(20)
u=B.ar(I.m8,m,0.3)
u.toString
t=x.O
u=B.a([u,D.aiN],t)
s=B.L(m.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ac(-4,A.G,m.j(0.22),A.H,14)],r)
p=B.ar(m,A.w,0.45)
p.toString
t=B.a([m,p],t)
r=B.a([new B.ac(0,A.G,m.j(0.5),A.H,12)],r)
return B.aH(!1,A.a3,!0,o,B.aP(!1,w,!0,B.ez(B.x(B.a([B.r(o,B.X(n.c,A.c,o,o,o,24),A.f,o,o,new B.p(o,o,o,o,r,new B.a8(A.aA,A.aE,A.x,t,o,o),A.a6),o,44,o,o,o,o,o,44),A.T,B.d(n.a,o,2,A.a2,o,o,o,B.m(o,o,m,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,1.15,!0,o,0.5,o,o,o,o,o,o),A.K,o,o),A.cQ,B.d(n.b,o,2,A.a2,o,o,o,B.m(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,9.5,o,o,o,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.l,o,A.ba,A.j,0,A.p),o,new B.p(o,o,s,v,q,new B.a8(A.aA,A.aE,A.x,u,o,o),A.n),o,A.Cv,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,this.d,o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj)}}
C.af2.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c,j=k.d,i=B.Q(d).ax.a===A.dk,h=B.l(20)
if(i)w=B.NZ(20)
else{w=B.l(20)
v=B.ar(I.m8,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.aiN],x.O)
v=new B.p(l,l,B.L(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ac(0,A.G,A.w.j(0.4),A.cC,12)],x.V),new B.a8(A.aA,A.aE,A.x,v,l,l),A.n)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aN(6,6)
n=B.a([A.d.gH(j),A.d.gam(j)],r)
m=i?l:B.a([new B.ac(0,A.G,A.w.j(0.45),R.aM6,0)],s)
u.push(B.r(l,B.X(t[q],A.c,l,l,l,11),A.f,l,l,new B.p(l,l,l,new B.be(o,o,o,o),m,new B.a8(A.a7,A.aa,A.x,n,l,l),A.n),l,17,l,new B.S(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.P,0,A.p)
if(i){t=B.ar(A.d.gH(j),A.d.gam(j),0.4)
t.toString
t=B.hoq(t)}else{t=B.ar(A.d.gH(j),A.d.gam(j),0.4)
t.toString}return B.aH(!1,A.a3,!0,l,B.aP(!1,h,!0,B.ez(B.x(B.a([new B.a5(58,l,u,l),A.W,B.d(k.b,l,2,A.a2,l,l,l,B.m(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l),A.ax,B.X(A.Db,A.d.gH(j),l,l,l,18)],v),A.l,l,A.ba,A.j,0,A.p),l,w,l,A.Cv,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.d,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj)}}
C.Re.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gam(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,new B.bN(new B.p(h,j,j,B.l(22),j,j,A.n),A.bi,j,j),j,j,2,2,8,j)
u=B.l(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.JA,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.H,30)],s)
q=B.l(22)
p=B.ar(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gam(i)
i=B.ar(A.d.gam(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bN(new B.p(j,j,j,j,j,new B.a8(A.aA,A.aE,A.x,B.a([p,o,n,i],m),D.dwz,j),A.n),A.bi,j,j),0,0,0),B.ap(j,new B.bN(new B.p(j,j,j,j,j,new B.a8(A.b4,A.b8,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bi,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b2(j,j,j,new C.buH(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.L(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.H,14)],s)
s=B.r(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.p(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fqV,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.ax,B.d(i,j,1,A.a2,j,j,j,B.m(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Ks)
p.push(B.r(j,j,A.f,j,j,new B.p(A.c.j(0.28),j,j,B.l(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.h7,B.A(B.a([s,A.ew,B.E(B.x(p,A.E,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.du(!0,B.e9(j,A.w.j(A.i.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.l(22)
m.push(B.bS(0,new B.du(!0,new B.bN(new B.p(j,j,B.L(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bi,j,j),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ac,A.f,B.a([h,B.bS(0,new B.bN(new B.p(j,j,j,u,r,j,A.n),A.bi,B.bx(q,new B.an(A.a0,j,A.ac,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.buH.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a1(r,-10,s,w)
u=d.c
J.bo(u.save())
u.translate(v.gbw().a,v.gbw().b)
d.hW(0,0.35)
t=B.bs(A.H,(w- -10)*1.6,s-r)
$.R()
s=B.K()
s.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aJ(0,t))
d.aq(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.buc.prototype={
B(d){var w=null,v=B.l(22),u=B.a([D.bpF,D.ahQ],x.O),t=this.e,s=B.L(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kD,24)],x.V),q=B.l(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,new B.bN(new B.p(w,w,s,v,r,new B.a8(A.aA,A.aE,A.x,u,w,w),A.n),A.bi,B.bx(q,B.b2(B.at(B.X(A.jJ,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bc0(p,w),A.az),A.aq),w),w)}}
C.bc0.prototype={
a5(d,e){var w,v,u,t,s,r
$.R()
w=B.K()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.o(s,0),new B.o(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.o(0,r),new B.o(u,r),w)
u=e.ei(A.H)
$.R()
t=B.K()
t.b=A.a9
t.c=1.4
t.r=v.j(0.35).gp(0)
d.N(u,30,t)},
aD(d){return!1}}
C.aJ7.prototype={
S(){return new C.aJ8(new B.cw(null,x.A),null,null)}}
C.aJ8.prototype={
guJ(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,D.bA6,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
ga_v(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.h6,null,1,null,v)
w.f2(0,!0)
v.e!==$&&B.bE()
v.e=w
u=w}return u},
gayZ(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcbk(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaYe(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaZ1(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb9N(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a4()
var w=this.guJ()
w.dl()
w.dV$.J(0,this.gcBl())},
cBm(){var w,v,u,t,s,r,q,p=this,o=p.guJ().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gayZ().a){case 0:w=D.nQ
break
case 1:w=D.vb
break
case 2:w=D.a5h
break
case 3:w=D.nQ
break
case 4:w=D.diZ
break
case 5:w=D.vb
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.adg)r=0.09
else r=s===D.adh?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dE(260+90*v,"",260,1.6,0.18,"tri")
u=D.caK[v]
E.mv("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JP("bell",D.cjz,1400,0.35)}}p.ax=o},
t(){this.guJ().t()
this.ga_v().t()
this.bAQ()},
af3(){var w=this
w.guJ().d0v(0,B.dw(0,0,0,A.i.V(11e3/w.Q),0,0))
w.m(new C.f7V(w))},
cml(){this.guJ().bQ(0)
this.m(new C.f7U(this))},
af2(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$af2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaZ1(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b6,A.aP),$.aw()))}m=B.a([],m)
for(t=u.gb9N(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b6,A.aP),$.aw()))}o=B.C(u.gaYe(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(I.m8,null,new C.f7T(u,l,m,o),t,!0,!0,!0,A.lU,!1,!1,x.H),$async$af2)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.aw()
n.P$=0}return B.h(null,v)}})
return B.i($async$af2,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gayZ(),f=i.a.c,e=f.b,d=i.gcbk(),a0=new C.Ba(g,e,f.c,d,i.gaYe(),i.gaZ1(),i.gb9N())
f=B.ar(A.d.gH(d),A.d.gam(d),0.4)
f.toString
g=x.p
w=B.a([B.aI(h,h,h,h,B.X(i.at?A.oH:V.tb,A.ab,h,h,h,21),h,h,h,new C.f82(i),h,h,h,h,"Sound",h),B.aI(h,h,h,h,D.c1k,h,h,h,i.gcbl(),h,h,h,h,"Edit words and pictures",h),B.aI(h,h,h,h,K.oL,h,h,h,new C.f83(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c5(i.ga_v(),new C.f84(i,a0),h),B.cq(new C.f85(i,a0))],g)
u=i.as
t=u?i.gcmk():i.gcbo()
u=u?D.bRJ:A.ta
s=B.ar(A.d.gH(d),A.d.gam(d),0.4)
s.toString
t=B.A(B.a([B.aI(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cg),B.E(B.c5(i.guJ(),new C.f86(i,a1,a0),h),1),B.aI(h,h,h,h,D.bYx,h,h,h,new C.f87(i),h,h,h,h,"Replay",A.cg)],g),A.l,h,A.e,A.j,0,h,h)
s=i.Q
u=A.i.ad(s,1)
r=B.ar(A.d.gH(d),A.d.gam(d),0.4)
r.toString
s=E.iP(r,u+"x","Speed",2.5,0.4,new C.f88(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dtB[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gH(d),A.d.gam(d),0.4)
r.toString
u.push(new E.dW(p.b,o===p.a,new C.f89(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.cb8[q]
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
d.push(B.az(h,B.r(h,h,A.f,h,h,new B.p(h,h,new B.bH(j,j,j,j),h,h,new B.a8(A.aA,A.aE,A.x,n,h,h),A.a6),h,l,h,K.alh,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f8a(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lA(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.en(new B.an(A.a0,h,A.b1,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fb(u,"STYLE",h),new E.fb(d,"THEME",h)],g),A.l,h,A.e,A.P,0,A.p))},
bCZ(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nQ[r]
p=A.i.D((1-A.e0.aA(0,A.i.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.i.D(p/1.5707963267948966,0,1)
q=D.nQ[r]
n=q+0.12
m=A.i.D((a0-n)/(q+0.2-n),0,1)
n=D.nQ[r]
q=n-0.01
q=A.i.D((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.km(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nQ[r]
h=i+0.1
if(A.i.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nQ[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nQ[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cK(0,r*118,0,f,f,f,new B.kH(q,new B.iR(n,f,A.b4,!0,f,new C.Re(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nQ[r]
u=v-0.02
g=A.i.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nQ[r]
t=v+0.12
e.push(new B.cK(0,r*118-3-2,0,f,f,4,new B.mJ(new C.bti(u,g,1-A.i.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ac,A.f,e,f),f)},
bTX(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vb[r]
p=A.qv.aA(0,A.i.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vb[r]
m=q+0.15
l=A.i.D((a0-m)/(q+0.25-m),0,1)
m=D.vb[r]
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
g=new C.Re(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fL(3.141592653589793)
k=new B.iR(k,f,A.A,!0,f,new C.buc(a2,108,w,f),f)}e.push(new B.cK(0,r*130,0,f,f,f,new B.kH(q,new B.iR(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ac,A.f,e,f),f)},
cGt(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a5h[w]
l.push(A.cx.aA(0,A.i.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b2(n,n,n,new C.bwN(d.d,l,D.aAf,m,C.btG(e,0.4,0.62),f,C.btG(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hcc(g,w)
q=D.aAf[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cK(r,s-q*m*p+12,n,n,t,n,new B.kH(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hcc(g,w)
r=D.a5h[w]
q=r+0.15
v.push(new B.cK(s,l,n,n,t,n,new B.kH(A.i.D((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.VU,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ac,A.f,v,n),n)},
bJh(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cx.aA(0,C.btG(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.at(B.dN(B.b2(f,f,f,new C.bsJ(A.d.gH(a1),C.btG(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.em5),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.i.D((a3-l)/(0.12+m-l),0,1)
j=A.dE.aA(0,A.i.D((o-0.7)/0.3,0,1))
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
w.push(new B.y(o,new B.cK(0,0,0,0,f,f,new B.ch(A.A,f,f,new B.kH(k*(0.45+0.55*o),B.dN(new B.iR(l,f,A.A,!0,f,new C.Re(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.o(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f7M())
A.d.v(a0,new B.N(w,new C.f7N(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ac,A.f,a0,f),f)},
cbj(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vb[q]
o=A.i.D((a2-p)/(p+0.22-p),0,1)
n=A.l9.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vb[q]
m=A.i.D((a2-m)/(m+0.02-m),0,1)
l=D.aCl[q]
k=B.dr()
k.n2(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k5(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vb[q]
g=h+0.1
g=A.i.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cK(0,0,0,0,e,e,new B.ch(A.A,e,e,new B.kH(m,B.dN(new B.iR(k,e,A.A,!0,e,new C.Re(d,92,w,p,j,i,0,g*s,h,e),e),new B.o(0,l)),e),e),e))
l=D.vb[q]
h=l+0.02
f=A.i.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cK(0,0,0,0,e,e,new B.ch(A.A,e,e,B.dN(new B.mJ(new C.bcH(w,f,q,e),e,new B.av(r,212),e,e),new B.o(0,D.aCl[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ac,A.f,a0,e),e)},
bFV(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.o(-b0,-150),new B.o(b0,-40),D.em9],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nQ[r]
p=A.i.D((a8-q)/(q+0.2-q),0,1)
o=A.cx.aA(0,p)
q=D.aCw[r]
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
e=A.i.D((a8-f)/(g+0.3-f),0,1)
f=D.nQ[r]
g=f-0.01
g=A.i.D((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n2(l*h+D.dnh[r]*o)
f.fL(l*0.9)
h=0.55+0.45*o
f.k5(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cK(0,0,0,0,a3,a3,new B.ch(A.A,a3,a3,new B.kH(g,B.dN(new B.iR(f,a3,A.A,!0,a3,new C.Re(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.o(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nQ[r]
i=q+0.17
a2=A.i.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aCw[r]
a6.push(new B.cK(0,0,0,0,a3,a3,new B.ch(A.A,a3,a3,B.dN(new B.mJ(new C.bsL(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.o(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ac,A.f,a6,a3),a3)}}
C.bti.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a1(w-v,0,w+v,e.b)
q=B.bn(u,A.hC)
$.R()
t=B.K()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.ow
d.an(q,t)
t=B.bn(u,A.hC)
q=B.K()
q.r=A.c.j(s).gp(0)
d.an(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.bsJ.prototype={
a5(d,e){var w,v,u=this.c,t=B.bs(e.ei(A.H),e.b*u,e.a*u)
$.R()
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
aD(d){return!0}}
C.bcH.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ei(A.H),h=this.c,g=A.cx.aA(0,h)
$.R()
w=B.K()
w.b=A.a9
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.N(i,40+g*e.a*0.42,w)
t=new B.e5()
t.d_(this.d*17+3)
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
C.bsL.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.ei(A.H)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.i.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bs(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.R()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.b=A.a9
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.bZ(q,p)}},
aD(d){return d.c!==this.c}}
C.bwN.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a1(0,c9,0+c4,c9+60)
$.R()
c9=B.K()
w=c0.b
v=x.O
c9.sav(new B.a8(A.b4,A.b8,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aJ(0,d0))
d1.aq(d0,c9)
c9=B.K()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.o(0,c3),new B.o(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hcc(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.R()
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
a5.sav(new B.a8(A.b4,A.b8,A.x,B.a([a6,A.d.gam(w)],v),c1,c1).aJ(0,a4))
d1.aq(a4,a5)
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
a9=new B.bu()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.ak(a5)
a7.ab()
a5=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a5.r=B.ar(A.d.gam(w),A.w,0.5).gp(0)
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
a2=new B.bu()
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
d1.aq(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.i.bh(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bn(new B.a1(b7,a6,b7+s,a9),A.hC)
$.R()
b8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.an(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a1(d,a2,a1,a2+28)
J.bo(g.save())
g.clipRect(B.hU(a4),$.mh()[1],!0)
$.R()
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a2.sav(new B.a8(A.b4,A.b8,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aJ(0,b9))
d1.aq(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aOV.prototype={
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
C.ag_.prototype={}
C.a1Q.prototype={
gZ(d){return this.d}}
C.Di.prototype={}
C.acU.prototype={}
C.ada.prototype={}
C.af5.prototype={}
C.bjj.prototype={
a3F(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dE(d,"",e,g,h,f)},
baT(d,e,f){return this.a3F(d,e,f,0,0.55)},
aDE(d,e,f,g){return this.a3F(d,e,f,0,g)},
baU(d,e,f,g){return this.a3F(d,e,f,g,0.55)},
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
alb(d,e,f,g){var w="n"+this.ay++,v=new C.rb(w,e,f,g)
this.a.n(0,w,v)
this.b0()
return v},
tc(d,e,f){return this.alb(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.br(w.b,new C.dr6(e))
A.d.br(w.c,new C.dr7(e))
w.b0()},
beL(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n8.h(0,v.b).c===D.xK)return!1
w=this.b
if(A.d.aV(w,new C.dr3(d,e)))return!1
w.push(new C.D7(d,e))
this.b0()
return!0},
c3b(d){var w
if(d.b==="beat")return D.cjJ[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.az(500)
case 2:return 1400+w.az(2200)
default:return 450+w.az(2000)}},
aHd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aCN[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Di(u,t,j.ax,90))
w.push(new C.Di(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1Q(u,new B.o(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.baT(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1Q(u,new B.o(o*p,n*p),m,3+w.ai()*4.5,1000+w.az(700),j.ax))}j.f.push(new C.Di(u,t,j.ax,120))
j.aDE(120,200,"noise",0.5)
j.baT(261.63*Math.pow(2,([7,12,16,19][w.az(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Di(u,t,j.ax,230))
w.push(new C.Di(u,t,j.ax+160,160))
w.push(new C.Di(u,t,j.ax+320,100))
j.baU(180+j.at.az(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.acU(u,new B.o((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.baU(300+w.az(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.ada(u,u.a2(0,new B.o(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a3F(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fL()
j.a3F(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.af5(u,D.aC7[v],t,j.ax))
j.aDE(261.63*Math.pow(2,([0,5,9,12][j.at.az(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aDE(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cfP[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cwr(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eG(w,new C.dr4(d));v.C();)j.aC9(w.gR(0),j.ax+D.cs9[A.o.F(g.d,4)])
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
case"chance":s=j.at.az(100)<D.cJn[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eG(w,new C.dr5(d));v.C();)j.aC9(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xE(w,0,v-700)},
cwr(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_C(e,"~"+d))},
aC9(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ag_(d.a,v,e,w))
u.push(new C.a_C(w,v))},
a7q(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aHd(r)
u.n(0,r,o.ax+o.c3b(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.dr8(o),v),v.k("M.E"))
if(q.length!==0){A.d.br(w,new C.dr9(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.J)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gae(v),r=new B.eG(u,new C.dra(p));r.C();)o.aC9(u.gR(0),o.ax)}else o.aHd(u)}}A.d.br(o.d,new C.drb(o))
A.d.br(o.e,new C.drc(o))
A.d.br(o.f,new C.drd(o))
A.d.br(o.w,new C.dre(o))
A.d.br(o.x,new C.drf(o))
A.d.br(o.r,new C.drg(o))
o.b0()},
vL(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
Uk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.X.aQ(0,d,null))
k.a8(0)
for(o=x.j,n=J.aT(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.t(v,"k"))
if(!D.n8.al(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.rb(t,u,new B.o(B.dD(J.t(v,"x"))*k.cy.a,B.dD(J.t(v,"y"))*k.cy.b),A.i.M(B.dD(J.t(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aT(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.al(0,q)&&m.al(0,p))n.push(new C.D7(q,p))}k.b0()
return!0}catch(l){return!1}},
cVX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
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
l.beL(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GJ.prototype={}
C.Xa.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aG6(new C.bjj(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cO,A.L,A.az,$.aw()),A.bF,A.H,A.H,A.Z,null,null)}}
C.aG6.prototype={
adv(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adv=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aA(),$async$adv)
case 6:q=n.k5(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.exM(s))
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
return B.i($async$adv,v)},
aaq(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aaq=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.exB(s))
u=3
w=6
return B.b(B.aA(),$async$aaq)
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
return B.i($async$aaq,v)},
bPe(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a4(n).k("b7<2>")
v=""+n.a+"|"+o.length+"|"+new B.b7(n,w).cG(0,0,new C.exD())+"|"+A.d.cG(o,0,new C.exE())
if(v===p.ch)return p.CW
u=new C.exH()
t=x.s
s=B.a([],t)
r=new C.exI(p,s,u)
for(n=new B.b7(n,w).gae(0),w=new B.eG(n,new C.exF());w.C();){q=n.gR(0)
if(!A.d.aV(o,new C.exG(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cW(s,0,B.dA(5,"count",x.S),x.N).dn(0)},
Y(){var w,v=this
v.a4()
v.adv()
v.d.db=v.ay
w=v.q0(new C.eyb(v))
w.fX(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a1(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.U$=$.aw()
v.P$=0
w.bzS()},
ad0(d){return this.c2C(d)},
c2C(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ad0=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aA(),$async$ad0)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Uk(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZs(A.d.gH(D.aBz))
if(s.c!=null)s.m(new C.exL())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ad0,v)},
aZs(d){this.d.cVX(0,d.c,d.d)
this.EL()},
EL(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cy(A.lI,new C.exx(this))},
az_(d){var w,v,u,t,s=this.d.a,r=B.a4(s).k("b7<2>")
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
ckj(d){var w,v,u,t,s,r=this.d.a,q=B.a4(r).k("b7<2>")
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
c2q(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.n8.h(0,r.b).c===D.xK)continue
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
cbr(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hAQ(new B.o(n.a+36,n.b+0),new B.o(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cEa(d){var w,v,u,t,s,r,q=this,p=q.az_(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eY()
u=v.b
if(u==="button"){w.aHd(p)
return}if(q.r)return
t=D.n8.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rm)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b0()
q.EL()
return}if(q.r)return
r=q.cbr(d)
if(r!=null){w=q.d
A.d.cH(w.b,r)
w.b0()
q.EL()}},
clC(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ckj(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.az_(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aK(0,d)}},
clD(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b0()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.o(A.i.D(d.a+s.y.a,46,t.a-46),A.i.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b0()}}},
b3O(){var w,v,u=this
if(u.z!=null){w=u.c2q(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.beL(v,w)}else v=!1
if(v){B.jX()
u.EL()}u.z=null
u.d.b0()}else if(u.x!=null){if(u.at)u.EL()
u.x=null}},
adI(d){return this.c5t(d)},
c5t(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.az_(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jY()
p=t.c
p.toString
w=3
return B.b(B.bU(I.m8,null,new C.exO(q),p,!0,!0,!1,A.lU,!1,!1,x.y),$async$adI)
case 3:if(f===!0){r.W(0,s)
t.EL()}case 1:return B.h(u,v)}})
return B.i($async$adI,v)},
cbp(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tc(0,d,new B.o(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eY()
this.EL()},
ahE(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(I.m8,null,new C.exQ(),s,!0,!0,!0,A.lU,!1,!1,x.es),$async$ahE)
case 2:t=e
if(t!=null)u.aZs(t)
return B.h(null,v)}})
return B.i($async$ahE,v)},
af4(d){var w=0,v=B.j(x.H),u=this,t
var $async$af4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.exA(),t,null,!0,!0,x.y),$async$af4)
case 2:if(f===!0){u.d.a8(0)
u.EL()}return B.h(null,v)}})
return B.i($async$af4,v)},
B(d){var w=this,v=null,u=B.a([B.ajq(w.r?new B.bL(A.a7,v,v,new B.D(A.H4,B.ho(D.bWo,D.fIB,new C.ey9(w),v),v),v):w.cbs(),A.b0,A.iO),B.E(B.cq(new C.eya(w)),1)],x.p)
if(!w.r)u.push(w.cyU())
return B.c4(v,A.c2,B.bm(!0,B.x(u,A.l,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bKX(){var w=null,v=new C.exC(),u=A.w.j(0.7),t=B.l(26),s=B.L(A.bx.j(0.5),A.r,1)
return B.bS(0,B.e9(B.at(B.r(w,B.ce(B.x(B.a([D.fUc,A.ax,D.h0Y,A.aB,v.$4(A.oG,A.bx,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.D7,A.cp,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.k8,A.bT,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.Pd,A.bj,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.h0f,new B.bL(A.aa,w,w,B.bO(!1,D.fRd,w,w,!0,w,w,w,this.gbKQ(),w,w),w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.XD,new B.p(I.m8,w,s,t,w,w,A.n),w,w,w,A.ft,An.amx,w,w,w),w,w,w),u,!0),0,0,0)},
cbs(){var w=this,v=null,u=B.aI(v,v,v,v,Ag.n6,v,v,v,new C.exW(w),v,v,v,v,v,v),t=w.a9R(A.CY,"How it works",new C.exX(w),!0),s=w.ay?A.oH:V.tb
return new B.D(D.bH0,B.A(B.a([u,D.bIH,t,w.a9R(s,"Sound",new C.exY(w),!0),w.a9R(A.ed,"Ideas",w.gcpo(),!0),w.a9R(K.wG,"Clear",w.gcbq(w),!0),w.aQ2(A.hj,"Show",new C.exZ(w),!0,!0)],x.p),A.l,v,A.e,A.j,0,v,v),v)},
aQ2(d,e,f,g,h){var w=null,v=h?A.bx:A.c.j(0.08),u=B.l(14),t=B.l(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ad.wv,B.aH(!1,A.a3,!0,u,B.aP(!1,t,!0,B.h6(new B.D(new B.S(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.aj),w)},
a9R(d,e,f,g){return this.aQ2(d,e,f,g,!1)},
cyU(){var w=null,v=new C.exS(this),u=A.c.j(0.08)
return B.r(w,B.ce(B.A(B.a([v.$2("START",D.xK),v.$2("CHANGE",D.Fd),v.$2("REACT",D.rm)],x.p),A.E,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aL),A.f,w,w,new B.p(I.BU,w,new B.bH(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bC2,w,w,w)},
cyV(d){var w,v,u,t,s=null,r=D.n8.h(0,d)
r.toString
w=B.l(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.L(v.j(0.5),A.r,1)
return new B.D(A.fC,B.az(s,B.r(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cQ,B.d(r.a,s,1,A.a2,s,s,s,D.aW5,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.p(s,s,t,w,s,new B.a8(A.b4,A.b8,A.x,u,s,s),A.n),s,s,s,s,A.hJ,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.exR(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bjk.prototype={
a5(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bo(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.R()
u=B.K()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.N(new B.o(r,s),1,u)
q=b4.CW
if(b5<q){$.R()
p=B.K()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.aq(new B.a1(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){m=w[n]
l=o.h(0,m.a)
k=o.h(0,m.b)
if(l==null||k==null)continue
j=l.c
i=j.a+36
j=j.b+0
h=k.c
g=h.a-36
h=h.b
f=$.R()
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
a1=D.n8.h(0,l.b).d
a2=D.n8.h(0,k.b).d
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=3
f.d=A.bu
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.t1(new B.o(i,j),new B.o(g,h))
f.sav(new B.a8(A.a7,A.aa,A.x,e,b3,b3).aJ(0,new B.a1(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.i.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hAQ(new B.o(j.a+36,j.b+0),new B.o(i.a-36,i.b),a4)
$.R()
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.j(0.35).gp(0)
i.y=N.ow
b7.N(a5,8,i)
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.gp(0)
b7.N(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a2(0,D.JD)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aG($.R().r,A.ai,b3,b3,B.a([],p))
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
$.R()
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
$.R()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.c=5
p.d=A.bu
h=b0.c
g=B.a([h.j(0),h],q)
f=B.t1(j,i)
p.sav(new B.a8(A.a7,A.aa,A.x,g,b3,b3).aJ(0,new B.a1(f.a-4,f.b-4,f.c+4,f.d+4)))
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
$.R()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=a3.c.j(1-v).gp(0)
b7.N(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){k=w[n]
p=k.a
$.R()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kU
b7.N(p,11,j)
j=k.a
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A6.Bg,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aJ(0,B.bZ(k.a,8)))
b7.N(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.J)(b4),++n){a5=b4[n]
v=A.i.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bjl(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.o(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.cla(b7,b4.d,b5)
b6.restore()},
cla(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n8.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.i.D(1-(f-w)/520,0,1)
u=B.bs(e.c,64,64)
t=B.bn(u,A.ip)
s=t.eQ(A.cC)
$.R()
r=B.K()
r.r=A.w.j(0.55).gp(0)
r.y=A.mg
d.an(s,r)
if(v>0){s=t.cn(6)
r=B.K()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.ww
d.an(s,r)}s=t.eQ(A.cJ)
r=B.K()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.an(s,r)
r=B.K()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sav(new B.a8(A.b4,A.b8,A.x,B.a([s,p],x.O),j,j).aJ(0,u))
d.an(t,r)
r=B.K()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.an(t,r)
r=h.b
p=e.c
o=C.bjl(B.lz(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aK(0,new B.o(s/2,r.gba(r)/2)))
n=C.bjl(h.a,11,A.c,j,j,A.I)
n.a5(d,e.c.a2(0,new B.o(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aC7[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rm){s=e.c.a2(0,new B.o(0,62))
r=B.K()
r.r=D.aCN[A.o.F(e.d,6)].gp(0)
d.N(s,5,r)}else if(m!=null){l=C.bjl(m,9.5,A.aD,j,j,A.U)
l.a5(d,e.c.a2(0,new B.o(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bjl(m,9.5,A.aD,j,j,A.U)
l.a5(d,e.c.a2(0,new B.o(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xK)k.b4B(d,e.c.aK(0,D.JD),q)
k.b4B(d,e.c.a2(0,D.JD),q)},
b4B(d,e,f){var w
$.R()
w=B.K()
w.r=A.c2.gp(0)
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
C.aO3.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.eh.prototype={}
C.u_.prototype={
as6(d,e,f,g){var w=this
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
C.abz.prototype={}
C.acG.prototype={}
C.a5C.prototype={
bgD(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h8()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abz(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c7D(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new C.bPQ())},
alb(d,e,f,g){var w="p"+this.c++,v=new C.u_(w,e,f,g)
v.as6(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.br(this.b,new C.bQ0(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cMW(d,e,f,g,h){return A.d.aV(this.b,new C.bPW(e,f,g,h))},
am2(d,e,f,g){var w
if(d===f||this.cMW(0,d,e,f,g))return null
w=new C.acG(d,e,f,g)
this.b.push(w)
return w},
aCG(d){var w
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
aoO(d){return this.Mk(d)&&!d.x&&d.cx>this.Aj(d)},
b8Y(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mk(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cbM(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.Ab.h(0,v)
if(w!=null)return w.a
return 100},
vL(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c7D(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.J)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bQ1(a2),t).cG(0,0,new C.bQ2(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bQ4(o)
m=B.a([],x.t)
l=new C.bQ3(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.J)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.J)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bQ6(g,l,n)
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
a2.b8U(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Aj(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b8U(e,d,w,!0)
a2.bRA(a4)},
b8U(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bPS(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bPR(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.J)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bPU(B.T(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b8Y(t)*(1+t.CW))
a4=b2.aCG(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cbM(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bUX(e,a0,b8)
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
bUX(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bRA(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.J)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aCG(o)/a1.b8Y(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Aj(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bJA(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bgD(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.ur(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.ur(o,"The "+$.qE().h(0,n).b+" got "+A.i.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.ur(o,"More than 1.5 amps went through the "+$.qE().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.ur(o,"The regulator had to turn "+A.i.ad(o.cy,1)+" V into heat while "+A.i.V(i*1000)+" mA flowed. That is "+A.i.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.ur(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.Ab.h(0,n)
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
a1.ur(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.i.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fc6.q(0,n)){m=o.fx>0?A.i.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.i.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.ur(o,"The bulb got "+A.i.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.i.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.ur(o,"The LED had "+A.i.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.i.D(j/14,0,1)
break
case"motor":n=A.i.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.i.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.ur(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.i.D(i/1,0,1)
if(!o.x&&i>1)a1.ur(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.ur(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.i.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.ur(o,"The capacitor was charged to "+A.i.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bJA(d){return A.d.aV(this.a,new C.bPP(d))},
ur(d,e){var w
d.x=!0
d.ay=e
this.bgD(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
blh(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aJ_(d){var w=d.b
return D.aSU.q(0,w)||D.Ab.al(0,w)||w==="buck"||w==="regulator"},
bi6(d){var w,v=!0
if(!this.Mk(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.Ab.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Vz(d,e){var w=this.b
return new B.Y(w,new C.bQ8(d,e),B.U(w).k("Y<1>")).gI(0)},
tP(d){var w,v
if(d.x)return!1
w=d.b
if(D.Ab.al(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bg9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qE().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aJ_(d)||i.tP(d))return null
w=i.Vz(d,0)
v=i.Vz(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcVw(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.i.iH(r)?""+A.i.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.i.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.Ab.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Mx("battery"),o=J.aT(t.a),t=new B.eG(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Vz(n,0)+i.Vz(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Mx("switch"),o=J.aT(t.a),t=new B.eG(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qE().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Aj(k))return"The "+$.qE().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.i.ad(k.cx,2)+" amps, but it can only give about "+A.i.ad(i.Aj(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aV(u,new C.bPX(i,d))
h=q.b
h=h===A.i.iH(h)?""+A.i.V(h):B.w(h)
u=A.i.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.i.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.i.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Mx(d){var w=this.a
return new B.Y(w,new C.bQ_(d),B.U(w).k("Y<1>"))},
aIB(d){return this.Mx(d).aV(0,new C.bPZ(0.35))},
qd(d,e){return A.d.aV(this.a,new C.bPY(e))}}
C.ak0.prototype={
a5(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.R()
w=B.K()
w.r=F.yj.gp(0)
c2.aq(new B.a1(0,0,c0,c1),w)
v=B.K()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.N(new B.o(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.mt.al(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.mt.al(0,j.b)?(j.ch-1)*38:0
b6.cJD(c2,new B.o(m*b8+l*(42+k),n*b9),new B.o(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hOg(s.a,s.b,c3)
s=b6.e
s.toString
$.R()
r=B.K()
r.r=A.ab.gp(0)
r.c=3
r.d=A.bu
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.R()
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=F.MG.j(A.i.D(e.Q*0.45,0,0.6)).gp(0)
h.y=A.ww
c2.N(new B.o(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.bo(n.save())
n.translate(k,j)
i=A.i.D(A.l9.aA(0,A.i.D(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.cm9(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Aj(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.R().r
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
a8=new B.bu()
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
a0=new B.bu()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.ak(a2)
a1.ab()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.b=A.a9
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iH(new B.eo("!",b7,b7,A.cL,b7,b7,b7,b7,b7,b7,new B.F(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jh(1),b7,b7,b7,b7,A.bY,b7,A.ct)
b0.e5()
b0.a5(c2,new B.o(h+-3,g+-8))}if(!e.x)h=(D.aSU.q(0,i)||D.Ab.al(0,i)||i==="buck"||i==="regulator")&&!w.tP(e)&&w.Vz(e,0)+w.Vz(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.R()
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=A.av.gp(0)
c2.N(new B.o(k,j),10,h)
b0=new B.iH(new B.eo("!",b7,b7,A.cL,b7,b7,b7,b7,b7,b7,new B.F(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jh(1),b7,b7,b7,b7,A.bY,b7,A.ct)
b0.e5()
b0.a5(c2,new B.o(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mt.al(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.o(g,h)
$.R()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=F.yj.gp(0)
c2.N(b0,7,k)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.b=A.a9
k.c=2.4
k.r=(j&&w.bi6(e)?A.c0:A.ab).gp(0)
c2.N(b0,6,k)
if(j&&w.bi6(e)){b0=new B.iH(new B.eo("+",b7,b7,A.cL,b7,b7,b7,b7,b7,b7,new B.F(!0,A.c0,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jh(1),b7,b7,b7,b7,A.bY,b7,A.ct)
b0.e5()
b0.a5(c2,new B.o(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.J)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.o(n,m)
b4=A.i.D(b2.r/0.8,0,1)
l=B.ar(M.Nm,F.a_5,b4)
l.toString
k=b2.f
$.R()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.gp(0)
j.c=2.4
j.d=A.bu
c2.ah(b3,new B.o(n-b2.e*0.035,m-k*0.035),j)
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.j(0.35*b4).gp(0)
j.y=A.H8
c2.N(b3,4.5*b4+1,j)}if(A.d.aV(s,new C.bKc())){b5=A.d.cG(s,0,new C.bKd())
$.R()
b9=B.K()
b9.r=D.bh8.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.aq(new B.a1(0,0,c0,c1),b9)
b0=B.fq(b7,A.ct,b7,b7,b7,D.fng,A.a5,A.bX,b7,A.dB,A.bY)
b0.o8(b8-24)
b0.a5(c2,new B.o(12,10))}},
qT(d,e,f,g,h){var w=null,v=B.fq(w,A.ct,w,w,w,B.cQ(w,w,w,w,w,w,w,w,w,B.m(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.bX,w,A.dB,A.bY)
v.e5()
v.a5(d,f)},
cJD(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aG($.R().r,A.ai,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hGi(a0,a1,a2)
e.E(new B.c6(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aQ,F.MG,A.i.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aH,A.aQ,A.i.D(r*1.2,0,1))
u.toString
o=u}else o=A.bo
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
if(q){n=new B.U0(new B.ry(B.xN(e),!1,B.a([],x.R))).gH(0)
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
PG(d,e,f,g){var w,v,u,t
$.R()
w=B.K()
v=g?A.b4:A.a7
u=g?A.b8:A.aa
t=B.ar(e,A.w,0.3)
t.toString
w.sav(new B.a8(v,u,A.x,B.a([e,f,e,t],x.O),A.Ix,null).aJ(0,d))
return w},
aya(d,e,f){return this.PG(d,e,f,!0)},
c7c(d,e){return this.PG(d,A.bo,A.iJ,e)},
aiO(d,e){var w,v,u
$.R()
w=B.K()
w.sav(D.aR3.aJ(0,B.bZ(e,4.2)))
d.N(e,4.2,w)
w=e.a2(0,D.eoH)
v=e.a2(0,D.eoQ)
u=B.K()
u.r=A.e6.gp(0)
u.c=1.2
d.ah(w,v,u)},
cm9(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.R(),c0=B.K()
c0.sav(D.c6q.aJ(0,D.f8j))
c0.c=3.4
c0.d=A.bu
w=B.K()
w.r=A.w.j(0.45).gp(0)
w.y=N.ow
c1.bZ(D.f87,w)
if(c3){w=B.bn(D.f8h,A.jN)
v=B.K()
v.r=A.c.j(0.14).gp(0)
c1.an(w,v)}u=C.hlv(c2)
c1.ah(new B.o(-u,0),D.eqi,c0)
c1.ah(D.enn,new B.o(u,0),c0)
t=c2.x
w=c2.b
s=D.mt.al(0,w)&&c2.ch!==1
if(s){J.bo(c1.c.save())
c1.bU(0,c2.ch)}switch(w){case"battery":b3.bGk(c1,c2)
break
case"solar":r=B.bn(D.f8a,A.iE)
c1.an(r,b3.PG(new B.a1(r.a,r.b,r.c,r.d),A.dc,A.bP,!1))
b9=B.K()
w=B.ar(D.bl3,A.d5,0.25+0.55*c2.f)
w.toString
v=B.ar(D.buk,A.mS,0.3+0.4*c2.f)
v.toString
b9.sav(new B.a8(A.aA,A.aE,A.x,B.a([w,v],x.O),b4,b4).aJ(0,D.a9x))
c1.aq(D.a9x,b9)
q=B.K()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.o(b9,-18),new B.o(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.o(-34,b9),new B.o(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.R()
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=A.cv.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.o(b9,-18),new B.o(b9,18),w)}b9=new B.aG($.R().r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-34,18))
b9.E(new B.aq(-6+40*c2.f,-18))
b9.E(new B.aq(4+40*c2.f,-18))
b9.E(new B.aq(-24,18))
b9.E(new B.bu())
w=B.K()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.af(b9,w)
w=c2.f
b9=B.K()
b9.r=A.dA.j(0.9).gp(0)
c1.N(D.enr,4+4*w,b9)
break
case"crank":o=B.bn(D.f7W,A.fP)
c1.an(o,b3.aya(new B.a1(o.a,o.b,o.c,o.d),A.bw,A.bL))
b9=B.K()
b9.sav(D.aR4.aJ(0,B.bZ(A.H,12)))
c1.N(A.H,12,b9)
n=new B.o(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.K()
b9.r=A.cv.gp(0)
b9.c=5
b9.d=A.bu
c1.ah(A.H,n,b9)
b9=B.K()
b9.sav(D.ezP.aJ(0,B.bZ(n,7)))
c1.N(n,7,b9)
b3.aiO(c1,D.eqa)
b3.aiO(c1,D.enc)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aG(b9,A.ai,b4,b4,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bu())
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
j=new B.bu()
m.push(j)
m=k.f
if(m!=null)j.ak(m)
k.ab()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.K()
b9.sav(D.ezx.aJ(0,B.bZ(A.H,4.5)))
c1.N(A.H,4.5,b9)
break
case"switch":o=B.bn(D.f82,A.mw)
b9=B.K()
b9.sav(D.at2.aJ(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.an(o,b9)
b3.aiO(c1,D.U1)
b3.aiO(c1,D.aLQ)
h=c2.w?D.aLQ:H.aLH
b9=B.K()
b9.r=A.as.gp(0)
b9.c=6
b9.d=A.bu
c1.ah(D.U1,h,b9)
b9=B.K()
b9.r=(c2.w?A.b5:A.bP).gp(0)
b9.c=4
b9.d=A.bu
c1.ah(D.U1,h,b9)
b9=B.ku(D.U1,h,0.85)
b9.toString
w=B.K()
w.r=A.ay.gp(0)
c1.N(b9,5,w)
break
case"fuse":g=B.bn(D.aRN,D.aR9)
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
b9.r=B.ar(A.bP,A.cG,c2.fx).gp(0)
c1.ah(D.aM9,D.aLO,b9)}else{b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(D.aM9,D.eqE,b9)
b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(F.eoe,D.aLO,b9)
b9=B.K()
b9.r=A.dS.gp(0)
c1.N(A.H,6,b9)}for(f=0;f<2;++f){e=B.bs(new B.o(M.fN[f]*22,0),20,9)
c1.an(B.bn(e,A.hT),b3.PG(e,A.d_,A.oc,!0))}break
case"pot":b9=B.K()
b9.sav(D.ezH.aJ(0,B.bZ(A.H,21)))
c1.N(A.H,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.aD.gp(0)
k.c=1.2
c1.ah(new B.o(b9*18,w*18),new B.o(v*22,m*22),k)}b9=B.K()
b9.sav(D.ezv.aJ(0,B.bZ(A.H,13)))
c1.N(A.H,13,b9)
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
case"resistor":a1=B.bn(D.aRN,D.aR9)
b9=B.K()
b9.sav(D.c9I.aJ(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.an(a1,b9)
b9=x.O
a2=B.I([47,B.a([B.b1(b5),B.b1(b6),A.w],b9),100,B.a([B.b1(b7),A.w,B.b1(b7)],b9),220,B.a([B.b1(b8),B.b1(b8),B.b1(b7)],b9),470,B.a([B.b1(b5),B.b1(b6),B.b1(b7)],b9),1000,B.a([B.b1(b7),A.w,B.b1(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=a3[p].gp(0)
c1.aq(new B.a1(b9,-9,b9+4.5,9),w)}b9=B.K()
b9.r=A.aQ.gp(0)
c1.aq(D.f8v,b9)
b9=c2.r
b3.qT(c1,b9>=1000?"1k\u03a9":""+A.i.V(b9)+"\u03a9",D.epD,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.K()
v.r=A.dA.j(0.55*w).gp(0)
v.y=A.ww
c1.N(H.vs,34,v)}o=B.bs(D.em6,12,18)
c1.an(B.bn(o,A.hT),b3.PG(o,A.bo,A.ec,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.r=A.dv.gp(0)
v.c=1
c1.ah(new B.o(-9,w),new B.o(9,w),v)}w=B.K()
if(t)v=A.Mw
else{v=B.ar(A.ec,A.hH,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.G8
else{m=B.ar(A.dc,A.dA,c2.fx)
m.toString}w.sav(new B.bY(A.rn,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aJ(0,B.bZ(A.tu,17)))
c1.N(A.tu,17,w)
w=B.K()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.N(A.tu,17,w)
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
v.r=A.d1.gp(0)
v.c=1.4
c1.ah(D.eqy,D.eqA,v)
v=B.K()
v.r=A.d1.gp(0)
v.c=1.4
c1.ah(D.eo7,D.eoa,v)
w=B.a([],w)
a4=new B.aG(b9,A.ai,b4,b4,w)
a4.E(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b9=(l&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.ak(v)
a4.ab()}$.R()
b9=B.K()
b9.b=A.a9
b9.c=1.8
if(t)w=A.aU
else{w=B.ar(A.dc,D.bm4,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.K()
v.r=A.ay.j(0.6*w).gp(0)
v.y=D.bIv
c1.N(A.tu,30,v)}w=B.K()
w.r=A.ec.gp(0)
w.c=2.4
c1.ah(D.eqG,D.eqF,w)
w=B.K()
w.r=A.ec.gp(0)
w.c=2.4
c1.ah(D.eog,D.eof,w)
b9=b9.r
w=x.v
a6=new B.aG(b9,A.ai,b4,b4,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.c6(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bu())
v=B.K()
if(t)m=A.jo
else{m=B.ar(A.el,D.bnO,c2.fx)
m.toString}if(t)k=A.kQ
else{k=B.ar(A.kt,A.ay,c2.fx)
k.toString}v.sav(new B.a8(A.aA,A.aE,A.x,B.a([m,k],x.O),b4,b4).aJ(0,D.f7n))
c1.af(a6,v)
v=B.K()
v.b=A.a9
v.c=1.2
v.r=A.k_.gp(0)
c1.af(a6,v)
v=B.K()
v.r=A.et.gp(0)
c1.aq(D.f7t,v)
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
c1.an(B.bn(a7,A.hU),b3.aya(a7,A.an,A.bh))
b9=B.K()
b9.r=A.cs.gp(0)
c1.aq(D.f6X,b9)
b9=B.K()
b9.r=A.cv.gp(0)
c1.aq(D.f6Z,b9)
b9=c1.c
J.bo(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.bo(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bs(H.aLC,15,7)
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.r=A.cG.j(0.9).gp(0)
c1.bZ(w,v)
b9.restore()}w=B.K()
w.r=A.as.gp(0)
c1.N(A.H,3,w)
b9.restore()
b3.qT(c1,"M",D.eq9,A.as,14)
break
case"buzzer":a8=B.bs(A.H,42,42)
b9=B.K()
b9.sav(D.ezL.aJ(0,a8))
c1.bZ(a8,b9)
b9=B.K()
b9.r=A.w.gp(0)
c1.N(A.H,6,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aT.gp(0)
c1.N(A.H,6,b9)
b3.qT(c1,"+",D.eq2,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.i.F(b9.d*14,5):0
v=B.bZ(A.H,24+l*5+v)
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.b=A.a9
m.c=2
m.r=A.bT.j(w*(1-l*0.22)).gp(0)
c1.cC(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bn(D.f7Z,A.hU)
w=B.K()
w.sav(D.c7n.aJ(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.an(o,w)
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
if(b9>0.1){$.R()
w=B.K()
w.b=A.a9
w.c=10
w.r=D.bmO.j(0.5*b9).gp(0)
w.y=A.kU
c1.af(a9,w)}$.R()
b9=B.K()
b9.b=A.a9
b9.c=3.2
b9.d=A.bu
b9.r=B.ar(A.m6,A9.yr,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a1(-16,-22,16,18)
b9=B.bn(a7,A.hU)
w=B.K()
w.sav(D.c6i.aJ(0,a7))
c1.an(b9,w)
w=B.K()
w.r=A.bP.gp(0)
c1.aq(D.f7C,w)
for(p=0;p<4;++p){b0=new B.iH(new B.eo("\u2212",b4,b4,A.cL,b4,b4,b4,b4,b4,b4,new B.F(!0,A.as,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.bX,new B.jh(1),b4,b4,b4,b4,A.bY,b4,A.ct)
b0.e5()
b0.a5(c1,new B.o(-14,-18+p*9))}b1=new B.a1(-16,-24,16,-17)
c1.an(B.bn(b1,A.hT),b3.c7c(b1,!1))
b9=38*c2.fx
w=18-b9
$.R()
v=B.K()
v.r=A.b5.j(0.5).gp(0)
c1.aq(new B.a1(-3,w,11,w+b9),v)
b3.qT(c1,"1F",H.vs,A.c,11)
break
case"radio":a1=B.bn(D.a9x,A.fP)
b9=B.K()
b9.sav(D.c9Y.aJ(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.an(a1,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.oc.j(0.6).gp(0)
c1.an(a1,b9)
b9=B.bn(D.f8_,A.iE)
w=B.K()
w.r=A.dW.gp(0)
c1.an(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ao(A.O,A.M,A.R,A.S,A.Q)
w.r=A.m6.gp(0)
w.c=1.4
c1.ah(new B.o(-27,b9),new B.o(-3,b9),w)}b9=B.K()
b9.r=(c2.fx>0?A.fz:A.of).gp(0)
c1.aq(D.f73,b9)
if(c2.fx>0){b9=8+A.i.F(b3.b.d*7,18)
w=B.K()
w.r=A.bD.gp(0)
w.c=1.6
c1.ah(new B.o(b9,-13),new B.o(b9,-3),w)}b9=B.K()
b9.sav(D.aR4.aJ(0,B.bZ(D.a8u,6)))
c1.N(D.a8u,6,b9)
b9=B.K()
b9.r=A.oc.gp(0)
c1.N(D.enm,4,b9)
b9=B.K()
b9.r=A.ec.gp(0)
b9.c=1.8
c1.ah(D.enh,D.aLV,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bZ(D.aLV,4+l*5+A.i.F(b9.d*8,5))
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.b=A.a9
v.c=1.4
v.r=A.nu.j(0.7).gp(0)
c1.cC(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bn(D.f89,A.hU)
v=B.K()
v.r=M.ny.gp(0)
c1.an(w,v)
b2=B.bn(D.f86,A.hT)
if(c2.fx>0&&!c2.x){b9=c1.c
J.bo(b9.save())
b9.clipRRect(B.nR(b2),$.np(),!0)
b9.translate(-33,-21)
L.hht(c1,D.feV,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.K()
b9.r=A.b5.gp(0)
c1.N(D.eny,1.6,b9)}else{w=B.K()
w.r=D.wc.gp(0)
c1.an(b2,w)
b9=new B.aG(b9.r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-33,-21))
b9.E(new B.aq(-10,-21))
b9.E(new B.aq(-33,0))
b9.E(new B.bu())
w=B.K()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.K()
b9.r=A.bw.gp(0)
c1.aq(D.f7s,b9)
break}C.is_(c1,c2,b3.b.d,b3.gcbN())
if(t)b3.qT(c1,"\u2716",D.eqJ,A.ay,14)
if(s)c1.c.restore()},
bGk(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a1(-28,-13,28,13)
d.an(B.bn(w,A.mw),o.aya(w,A.dc,A.jm))
v=new B.a1(-22,-13,22,13)
$.R()
u=B.K()
u.sav(D.asW.aJ(0,v))
d.aq(v,u)
u=B.K()
u.r=A.e_.gp(0)
d.aq(D.f7M,u)
t=new B.a1(28,-5,34,5)
d.an(B.bn(t,A.hC),o.PG(t,A.dc,A.iJ,!0))
o.qT(d,"+",D.emY,A.aQ,11)
o.qT(d,"\u2212",D.eqb,A.ab,11)
o.qT(d,B.w(n===A.i.iH(n)?A.i.V(n):n)+"V",D.epS,A.aQ,13)
if(n===1.5){u=B.K()
u.r=A.bA.gp(0)
d.aq(D.f7L,u)
u=e.as
s=B.K()
s.r=B.ar(A.ay,A.b5,u).gp(0)
d.aq(new B.a1(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qT(d,"FLAT",D.epC,A.c0,9)}if(n>2){u=B.K()
u.r=A.aT.gp(0)
u.c=1
d.ah(D.emf,D.aLu,u)
o.qT(d,n>3?"3 cells":"2 cells",D.epR,A.aD,8)}}else if(n<=9){r=new B.a1(-22,-17,22,17)
u=B.bn(r,A.mw)
$.R()
s=B.K()
s.sav(D.c9w.aJ(0,r))
d.an(u,s)
s=B.K()
s.r=A.cY.gp(0)
d.aq(D.f7N,s)
for(q=0;q<2;++q){p=F.aCv[q]
u=p<0?5:3.6
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.sav(D.aR3.aJ(0,B.bZ(new B.o(p,-18),5)))
d.N(new B.o(p,-18),u,s)}o.qT(d,"9V",D.epK,A.c,16)}else{r=new B.a1(-34,-16,34,16)
u=B.bn(r,A.iE)
$.R()
s=B.K()
s.sav(D.asW.aJ(0,r))
d.an(u,s)
s=B.K()
s.r=A.bj.gp(0)
d.aq(D.f88,s)
for(q=0;q<2;++q){u=B.bn(B.bs(new B.o(F.IK[q],-20),8,10),A.hC)
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.cv.gp(0)
d.an(u,s)}o.qT(d,"+",D.en6,A.ay,10)
o.qT(d,"12V",D.epO,A.as,15)}},
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
n.as6(o,r,q,p)
k.push(n)
J.iz(s[4],new C.ctI(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.J)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.am2(m,u[1],l,u[3])}}}
C.ajZ.prototype={
S(){var w=x.N
return new C.ak_(A.H,A.az,B.T(w,x.gl),B.aR(w),$,A.bF,0,B.a([],x.X),null,null)}}
C.ak_.prototype={
aff(d){var w=this,v=w.as
if(v!=null)v.a1(0)
w.m(new C.bJR(w,d))
w.as=B.cy(A.lJ,new C.bJS(w))},
t(){var w=this.as
if(w!=null)w.a1(0)
w=this.ch
if(w!=null)w.a1(0)
this.bvX()},
a0T(d,e){return this.ck4(d,e)},
b3h(d){return this.a0T(d,!1)},
ck4(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0T=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rX:A.yC
p=d.b
w=3
return B.b(L.hhQ(s,r,p,d.ax<3.2,q,$.qE().h(0,p).b),$async$a0T)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0T,v)},
cwO(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bJT()),t=J.cC(u)
t.J(u,v)
t.br(u,new C.bJU(v))
if(t.gI(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a1(0)
w.a2c(d)
return}if(t.gI(u)===3){t=w.ch
if(t!=null)t.a1(0)
w.ch=B.cy(A.iP,new C.bJV(w,u,d))}},
a0z(d){return this.ciq(d)},
ciq(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.ite(s,d.b,A.i.V(A.i.F(t.a.c.d*0.12,1)*100)),$async$a0z)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a0z,v)},
a2c(d){return this.cun(d)},
cun(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2c=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bJP(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2c)
case 2:return B.h(null,v)}})
return B.i($async$a2c,v)},
Y(){this.a4()
this.bih()
this.mh()},
bih(){this.a.c.e=new C.bK9(this)},
mz(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vL(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=D.mt.h(0,s.b)
if((r==null?null:r.b)!==D.AC)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.J(0,s.a)
q.a0T(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dE(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dE(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cO.ai()<0.5
else u=!1
if(u)G.dE(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dE(900+A.cO.az(800),"",90,0,0.1,o)
if(A.cO.ai()<0.35)G.dE(300+A.cO.az(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cO.ai()<0.4
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
case"kettle":if(s.fx>0)u=A.cO.ai()<0.5
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
q.m(new C.bKa())},
bal(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.mt.al(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b3Y(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bR(w,w.gI(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mt.al(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cJE(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.mt.al(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.mt.al(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hGi(new B.o(k,n),new B.o(i,l),p)
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
afd(){this.a.toString
this.m(new C.bJj())},
bsB(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dcJ[v]
if(!A.d.aV(p.a.c.a,new C.bKb(u,w))){o=new B.o(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.JF:o
s=s?Q.JF:o
q=t.alb(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
G.dE(1200,"",50,0,0.3,"tri")
p.afd()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Sq[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.ar(u+1,2)):w
r=t?A.d.fO(w,A.o.ar(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a4(q).k("cx<1>")
w=B.C(new B.cx(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.J)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b3N(s,!0))
n.a.toString
if(t)w.push(n.b3N(r,!0))
w.push(B.E(B.cq(new C.bK8(n,q,m)),1))
return B.x(w,A.l,null,A.e,A.j,0,A.p)},
b3N(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=$.qE()
s=t.h(0,u).d.j(0.14)
r=new B.aN(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.az(p,B.r(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.AW,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.nX,p,p,p)],n),A.l,p,A.ba,A.j,0,A.p),A.f,p,p,new B.p(s,p,new B.bH(q,q,q,q),new B.be(r,r,r,r),p,p,A.n),p,p,p,I.ou,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJk(this,u),p,p,p,p,p,p,!1,A.a4))}return B.r(p,B.cl(m,p,p,A.hf,p,p,A.aL,!1),A.f,p,p,new B.p(I.BU,p,new B.bH(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b19(d){var w=null,v=B.l(18)
return B.r(w,d,A.f,w,w,new B.p(F.afD,w,B.L(A.bA,A.r,1),v,w,w,A.n),w,w,w,w,F.alI,w,w,w)},
cma(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qE().h(0,o),m=d.dy,l=d.fr,k=new C.bJD(q,n),j=B.d(n.c,p,p,p,p,p,p,A.KN,p,p,p),i=n.b,h=n.d,g=x.p
i=B.A(B.a([j,A.ae,B.E(B.d(i,p,p,p,p,p,p,B.m(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aI(p,p,p,p,D.bYg,p,p,p,new C.bJq(q,d),p,p,p,p,"Remove part",A.cg),B.aI(p,p,p,p,A.PX,p,p,p,new C.bJr(q),p,p,p,p,p,A.cg)],g),A.l,p,A.e,A.j,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.ES,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fwz,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.i.ad(Math.abs(d.dy),2)+" volts  \xb7  "+A.i.ad(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.i.ad(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.ax,w,A.am,B.d(m,p,p,p,p,p,p,B.m(p,p,d.x?A.c0:A.aQ,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bg9(d)
if(v!=null){l=(d.x?A.ay:A.av).j(0.14)
j=B.l(10)
i=B.L((d.x?A.ay:A.av).j(0.5),A.r,1)
m.push(new B.D(A.hZ,B.r(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fDt,p,p,p),A.f,p,p,new B.p(l,p,i,j,p,p,A.n),p,p,p,p,A.cm,p,p,p),p))}if(C.hfw(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dW("CH "+t,d.at===u,new C.bJs(q,d,u),p,h,p))}l=B.bW(A.bH,l,A.bs,p,4,6)
l=B.a([A.am,l,A.ax,B.d(q.a.c.tP(d)?"Showing: "+F.Ro[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.ho,p,p,p)],g)
if(q.a.c.tP(d))l.push(new E.fC(A.HC,"Open big screen",new C.bJv(q,d),h,p))
A.d.v(m,l)}if(D.mt.al(0,o)&&!C.hfw(o)){l=B.a([A.am,B.d(q.a.c.tP(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.ho,p,p,p)],g)
if(q.a.c.tP(d))l.push(new E.fC(A.PF,"Open the "+$.qE().h(0,o).b,new C.bJw(q,d),h,p))
A.d.v(m,l)}if(D.mt.al(0,o))A.d.v(m,B.a([A.am,new E.fC(A.D1,"Make it bigger (or tap it 4 times)",new C.bJx(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.i.ad(d.db,1)
if(q.a.c.tP(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.i.ad(i,1)+" V",p,p,p,p,p,p,D.fxr,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dv4[s]
j=r===A.i.iH(r)?A.i.V(r):r
l.push(new E.dW(B.w(j)+" V out",d.e===r,new C.bJy(q,d,r),p,h,p))}i.push(new B.D(A.lh,B.bW(A.bH,l,A.bs,p,0,6),p))}if(o==="regulator")i.push(D.fWz)
A.d.v(m,i)}if(q.a.c.Mk(d)&&!d.x){l=A.i.ad(d.cx,2)
j=A.i.ad(q.a.c.Aj(d),2)
i=q.a.c
w=i.aoO(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.m(p,p,i.aoO(d)?A.c0:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.l(4)
w=A.i.D(d.cx/q.a.c.Aj(d),0,1)
i=q.a.c.aoO(d)?A.ay:A.b5
m.push(new B.D(A.hZ,B.x(B.a([l,A.cQ,B.bx(j,B.kq(A.bA,p,p,5,p,w,new B.lN(i,x.c)),A.aq)],g),A.E,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.i.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.hZ,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fr_,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.djU[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dW(j,d.e===r,new C.bJz(q,d,r),p,h,p))}m.push(B.bW(A.bH,l,A.bs,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d9R[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dW(j,d.r===r,new C.bJA(q,d,r),p,h,p))}m.push(B.bW(A.bH,l,A.bs,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bJB(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bJC(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bJt(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bJu(d)))
if(o==="crank")m.push(D.fRO)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.ho,p,p,p))
return q.b19(new B.cP(D.b6x,B.ce(B.x(m,A.E,p,A.e,A.P,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bd4.prototype={}
C.Wn.prototype={
S(){return new C.aF5(C.hlu(),new B.cw(null,x.q),B.aR(x.S))}}
C.aF5.prototype={
Y(){this.a4()
$.aW.c1$.push(this)
this.afe()},
afe(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fK6(),$async$afe)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iso(t.d,r)
if(s!=null){t.m(new C.e0X(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$afe,v)},
Fx(){var w,v=this
if(!v.as)return
w=C.iib(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bGt(w)},
jm(d){if(d!==A.fW)this.Fx()},
t(){$.aW.hV(this)
this.Fx()
this.a3()},
cbP(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e15(q),u).gI(0)
s=new B.Y(v,new C.e16(),u).gI(0)
r=new B.Y(v,w.gcZ8(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e17(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Fx()
if(A.o.F(q.w,10)===0){w=q.f
$.aj7()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.aj7()[q.f].c.$1(q.d)){w.J(0,q.f)
C.JP("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e18())
q.Fx()
w=q.c
w.toString
w=B.PJ(w)
if(w!=null)w.T(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aj7()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mb,p,p,p,p,p,p,p,p,p,p))}},
ai_(){var w=0,v=B.j(x.H),u=this,t
var $async$ai_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.e0W(u),t,null,!0,!0,x.H),$async$ai_)
case 2:return B.h(null,v)}})
return B.i($async$ai_,v)},
b18(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.l(12),t=B.L(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.r(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.az(w,B.h6(new B.a5(40,38,new B.an(A.a0,w,A.ac,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b17(d,e,f,g){return this.b18(d,e,f,g,null)},
asO(d,e,f,g){var w=null,v=f.j(0.1),u=B.l(10),t=B.L(f.j(0.4),A.r,1)
return B.E(B.az(w,B.r(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e7,new B.dl(1,A.cn,B.d(e,w,1,A.a2,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.ba,A.j,0,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
agk(){var w=0,v=B.j(x.H),u=this,t
var $async$agk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).ce(B.ec(new C.e0S(u),!1,null,x.H)),$async$agk)
case 2:t=u.e.gbk()
if(t!=null)t.bih()
if(u.c!=null)u.m(new C.e0T())
u.Fx()
return B.h(null,v)}})
return B.i($async$agk,v)},
bJt(){var w,v,u,t,s=null,r=this.f
$.aj7()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bd:A.ay
u=B.l(9)
t=B.L(I.BU,A.r,1.5)
return B.r(s,B.at(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xr,s,s,s),s,s,s),A.f,s,D.b6E,new B.p(r,s,t,u,s,s,A.n),s,s,s,s,A.f5,s,s,s)},
aj9(){var w=0,v=B.j(x.H),u=this,t
var $async$aj9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.mR,null,new C.e14(u),t,!0,!0,!0,A.kh,!1,!1,x.H),$async$aj9)
case 2:return B.h(null,v)}})
return B.i($async$aj9,v)},
cbQ(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.az(r,B.r(r,D.bZy,A.f,r,r,new B.p(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1a(d),r,r,r,r,r,r,!1,A.a4),o=B.l(11)
o=B.r(r,D.bcu,A.f,r,r,new B.p(A.br,r,B.L(A.aH.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.r(r,B.x(B.a([B.A(B.a([p,A.ae,o,A.ae,B.E(B.x(B.a([D.fUy,B.d(w,r,1,A.a2,r,r,r,B.m(r,r,s.y>0||s.z>0?A.eW:A.hw,r,r,r,r,r,r,r,r,11.5,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.j,0,A.p),1),new C.az7(s.gci7(),r),A.vA,s.b17(A.uM,"Construction Lab: real 3D wiring, plumbing and a house",A.cG,new C.e1b(s,d)),s.b18(A.lN,"Challenges",A.aQ,s.gczm(),s.bJt()),s.b17(A.CY,"How to play",A.aH,new C.e1c(d,e))],v),A.l,r,A.e,A.j,0,r,r),A.am,B.A(B.a([s.asO(A.oB,"Circuits",A.bq,s.gcsd()),A.bm,s.asO(A.oz,"Repair",A.aQ,new C.e1d(s)),A.bm,s.asO(K.wG,"Clear",A.c0,new C.e1e(s))],v),A.l,r,A.e,A.j,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.p(I.BU,r,new B.bH(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bHR,r,r,r)},
B(d){var w=this,v=null
$.att="tech"
return B.c4(v,A.c2,B.bm(!0,B.x(B.a([w.cbQ(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hkl(w.d,w.e,w.gcbO(),v),1)],x.p),A.l,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.az7.prototype={
S(){return new C.bbd(null,null)}}
C.bbd.prototype={
gaz6(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.Y,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaz6().t()
this.bxi()},
B(d){var w=null,v=this.a.c
return B.az(w,B.h6(new B.a5(42,42,B.c5(this.gaz6(),new C.cLh(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bbc.prototype={
a5(d,e){var w,v,u,t=null,s=e.ei(A.H),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.R()
w=B.K()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.y=N.ow
d.N(s,r+2+o*2,w)
w=B.K()
w.sav(D.ezG.aJ(0,B.bZ(s,r)))
d.N(s,r,w)
v=B.K()
v.b=A.a9
v.c=2.2
v.sav(new B.fZ(A.A,0,6.283185307179586,A.x,D.d0z,t,new B.mN(p)).aJ(0,B.bZ(s,r)))
d.N(s,r,v)
p=new C.cLg(d)
p.$3(s.a2(0,A.tu),8+o*1.5,1)
q*=4
p.$3(s.a2(0,D.eos),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a2(0,D.eqQ),2.6,0.5+0.5*Math.cos(q))
u=B.fq(t,A.ct,t,t,t,D.fnm,A.a5,A.bX,t,A.dB,A.bY)
u.e5()
u.a5(d,s.a2(0,new B.o(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.azs.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.azt.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bvW()}}
C.aLA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzP.prototype={}
C.fQ.prototype={}
C.Ki.prototype={
a7(){return"ScreenStyle."+this.b}}
C.mx.prototype={}
C.W6.prototype={
S(){return new C.blS(null,null)}}
C.blS.prototype={
gaao(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.ot,null,1,null,v)
w.cr(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaao().t()
this.bza()},
gSD(){var w=this.gaao().y
w=w==null?null:A.o.ar(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mt.h(0,this.a.c)
if(v==null)v=D.aS4
return B.c4(w,X.ZK,B.bm(!0,new B.an(A.a0,w,A.ac,A.t,B.a([B.at(v.b===D.AE?this.bLB(v):this.coZ(v),w,w,w),B.ap(w,B.aI(w,w,w,w,A.n5,w,w,w,new C.dY6(d),w,w,w,B.o1(w,A.aU,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.at(B.d(v.a,w,w,w,w,w,w,D.fp6,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
cbR(d){var w
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
coZ(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.a9G
switch(p.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c5(this.gaao(),new C.dY5(this,w,d,o),q)
if(p===D.a9H)v=new B.BJ(D.bIu,v,q)
p=this.cbR(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.l(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.H,36)],x.V)
return new B.fH(p,B.r(q,B.r(q,v,A.f,q,q,new B.p(A.w,q,q,B.l(w-3),q,q,A.n),q,q,q,q,A0.H6,q,q,q),A.f,q,q,new B.p(q,q,q,t,s,new B.a8(A.aA,A.aE,A.x,r,q,q),A.n),q,q,q,D.bBT,new B.S(u,u,u,u),q,q,q),q)},
b9u(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.D(this.a.d+A.i.bh(this.gSD()*0.4),0,100),q=d.b===D.a9G,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.b_(A.o.u(B.dg(s)),2,"0")+":"+A.a.b_(A.o.u(B.fP(s)),2,"0"),t,t,t,t,t,t,A.tN,t,t,t),A.b3],x.p)
for(w=0;w<4;++w){v=new B.aN(1,1)
n.push(B.r(t,t,A.f,t,t,new B.p(A.c,t,t,new B.be(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bIb,t,t,t,3))}n.push(A.df)
n.push(D.fN3)
n.push(A.bm)
v=B.L(A.ab,A.r,1)
u=B.l(4)
n.push(B.r(t,new B.bL(A.a7,t,t,B.BX(A.A,B.r(t,t,A.f,t,t,new B.p(A.b5,t,t,B.l(2),t,t,A.n),t,t,t,A0.H6,t,t,t,t),t,r/100),t),A.f,t,t,new B.p(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.r9)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fDQ,t,t,t))
return new B.D(new B.S(p,12,o,2),B.A(n,A.l,t,A.e,A.j,0,t,t),t)},
awZ(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.l(e*0.26)
w=x.p
t=B.a([B.r(v,B.at(B.d(d.b,v,v,v,v,v,v,B.m(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.p(v,v,v,u,D.dpY,new B.a8(A.aA,A.aE,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.ax,B.d(d.a,v,1,A.a2,v,v,v,D.ftY,v,v,v)],w))
return B.az(v,B.x(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dY1(this,d),v,v,v,v,v,v,!1,A.a4)},
c28(d,e){return this.awZ(d,e,!0)},
c1Q(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aS5||n===D.Ez,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.kp,0.5)
l.toString
l=B.a([k,A.dz,l],x.O)
k=p.b9u(d)
w=m?190:138
v=B.l(24)
u=B.L(A.aT,A.r,1)
w=B.az(o,B.r(o,B.bx(B.l(23),B.b2(o,o,o,new C.afT(0,p.gSD(),o),A.fQ),A.aq),A.f,o,o,new B.p(o,o,u,v,o,o,A.n),o,w,o,A.i_,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dY_(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kz[s]
t.push(new B.ch(A.A,o,o,p.c28(r,m?58:54),o))}k=B.a([k,A.am,w,A.af,B.E(B.kW(0.92,t,v,8,12,A3.wr,o,!1),1)],u)
if(n!==D.a9H){n=A.c.j(0.16)
w=B.l(28)
u=B.a([],u)
for(v=B.cW(F.kz,0,B.dA(4,"count",x.S),x.gD),t=v.$ti,v=new B.bR(v,v.gI(0),t.k("bR<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.awZ(q==null?t.a(q):q,50,!1))}k.push(B.r(o,B.A(u,A.l,o,A.qX,A.j,0,o,o),A.f,o,o,new B.p(n,o,o,w,o,o,A.n),o,o,o,D.bCO,H.anb,o,o,o))}return B.r(o,B.x(k,A.l,o,A.e,A.j,0,A.p),A.f,o,o,new B.p(o,o,o,o,o,new B.a8(A.aA,A.aE,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bEY(d,e){var w=null
return B.r(w,B.x(B.a([this.b9u(d),B.E(B.b2(w,w,w,new C.afT(e,this.gSD(),w),A.fQ),1),B.az(w,B.r(w,B.at(B.d(F.kz[e].a,w,w,w,w,w,w,A.KB,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dXV(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.l,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bLB(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.l(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.H,36)],x.V)
return new B.fH(1.5384615384615383,B.r(t,B.c5(this.gaao(),new C.dXY(this,r,d),t),A.f,t,t,new B.p(t,t,t,v,u,new B.a8(A.aA,A.aE,A.x,w,t,t),A.n),t,t,t,D.bHM,new B.S(8,8,8,s),t,t,t),t)}}
C.bxR.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.R()
w=B.K()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.kp,0.4)
t.toString
w.sav(new B.a8(A.aA,A.aE,A.x,B.a([u,A.dz,t],x.O),null,null).aJ(0,new B.a1(0,0,p,o)))
d.aq(new B.a1(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ao(A.O,A.M,A.R,A.S,A.Q)
t.r=v.j(0.1).gp(0)
t.y=D.bIz
d.N(new B.o(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.afT.prototype={
a5(d,e){return L.M8(d,e,this.b,this.c)},
aD(d){return!0}}
C.aNo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bwD.prototype={}
C.a9x.prototype={
B(d){var w=null
return B.c4(B.eI(w,w,w,!0,!0,D.aid,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,K.arT,w,w,w,new C.cmA(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h2q,w,w,w,1,w,!0),D.aid,B.cl(B.a([D.esi,B.cq(new C.cmB())],x.p),w,w,D.bDT,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.XI.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aGz(w,new B.au(A.aw,$.aw()),$,A.bF,0,B.a([],x.X),null,null)}}
C.aGz.prototype={
Y(){this.a4()
this.mh()},
b7m(d){var w=this.d.length
return A.o.F(A.i.bh(A.i.F(A.i.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mz(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b7m(v.f)
if(w!==v.x){v.x=w
E.mv("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eUw(v))
C.JP("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cdy(){if(this.d.length<2)return
this.m(new C.eUs(this))},
b1G(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eUr(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcdx(),p=s.d,o=B.E(B.az(r,B.b2(r,r,r,new C.by2(p,s.f,r),A.fQ),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.at(B.d(n,r,r,r,r,r,r,D.fBW,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.j,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aBF[A.o.F(v,8)].j(0.9)
t=new B.aN(20,20)
o.push(B.az(r,B.r(r,B.d(p[v],r,r,r,r,r,r,D.fB8,r,r,r),A.f,r,r,new B.p(u,r,r,new B.be(t,t,t,t),r,r,A.n),r,r,r,A.fC,A.hh,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eUu(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lA(A.aQ,A.f7,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fb(o,r,r),B.A(B.a([B.E(B.aM(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bt(r,new B.b6(4,B.l(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kk,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eUv(s),r,!1,r,r,!1,r,!0,r,A.ad,r,r,r,r,r,r,r,r,r,r,r,A.di,!0,A.a5,r,A.ao,r,r,r,r),1),A.ae,new E.fC(A.i0,"Add",s.gcdv(s),A.c,r),A.bm,new E.fC(A.oA,"Spin",q,A.b5,r)],w),A.l,r,A.e,A.j,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.by2.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.o(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.R()
w=B.K()
w.r=D.biM.gp(0)
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
o.r=D.aBF[A.o.F(r,8)].gp(0)
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
n=new B.iH(new B.eo(p,l,l,A.cL,l,l,l,l,l,l,D.foa),A.a5,A.bX,new B.jh(1),l,l,l,l,A.bY,l,A.ct)
n.e5()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.o(f-o-16,-p.gba(p)/2))
i.restore()}i=B.K()
i.r=D.ahQ.gp(0)
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
m.E(new B.bu())
h=B.K()
h.r=A.c.gp(0)
d.af(m,h)
h=B.K()
h.b=A.a9
h.c=2
h.r=A.aU.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.Wv.prototype={
S(){return new C.bm2($,A.bF,0,B.a([],x.X),null,null)}}
C.bm2.prototype={
Y(){this.a4()
this.mh()},
mz(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JP("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UH(900,new C.e3W())}w.m(new C.e3X())},
b1I(d){return this.m(new C.e3R(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b_(A.o.u(A.i.ar(m,60)),2,"0")
v=A.a.b_(A.o.u(A.o.F(A.i.cD(m),60)),2,"0")
m=B.b2(n,n,n,new C.bsK(l,A.c0,n),A.aTA)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fsQ,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a5(280,280,new B.an(A.A,n,A.ac,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.frQ,n,n,n),A.ax,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vE,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dmV[r]
u.push(new E.dW(""+q+" min",o.d===q,new C.e3T(o,q),n,A.c0,n))}m=o.f
p=m?A5.uU:A.hj
m=m?"Pause":"Start"
return E.lA(A.c0,A.f7,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fb(u,n,n),new E.fb(B.a([new E.fC(p,m,new C.e3U(o),A.b5,n),new E.fC(A.oD,"Reset",new C.e3V(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.bsK.prototype={
a5(d,e){var w,v,u,t,s=e.ei(A.H),r=e.a/2-14
$.R()
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
v.sav(new B.fZ(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aJ(0,B.bZ(s,r)))
d.cC(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.VI.prototype={
S(){return new C.blB($,A.bF,0,B.a([],x.X),null,null)}}
C.blB.prototype={
Y(){this.a4()
this.mh()},
mz(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.T6.h(0,p.d)
w.toString
v=A.d.f1(w,new C.dPp())
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
E.mv("flute",D.caM[t]+5,1400,0.35)}p.m(new C.dPq())},
gcdB(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L6("Press Start",0.5)
w=D.T6.h(0,this.d)
w.toString
v=A.d.f1(w,new C.dPk())
u=A.i.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L6("Breathe in",0.5+0.5*A.dE.aA(0,p))
case 1:return new B.L6("Hold",1)
case 2:return new B.L6("Breathe out",1-0.5*A.dE.aA(0,p))
default:return new B.L6("Hold",0.5)}}}return new B.L6("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcdB(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hu.j(0.12+(3-u)*0.05)
n.push(B.r(q,q,A.f,q,q,new B.p(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.hu.j(0.35),A.H,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.q_,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kk,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a5(300,340,new B.an(A.A,q,A.ac,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aT(D.T6.gev(D.T6));w.C();){v=w.gR(w)
o.push(new E.dW(v,r.d===v,new C.dPn(r,v),q,A.hu,q))}w=r.e
v=w?A.zt:A.hj
w=w?"Stop":"Start"
o.push(new E.fC(v,w,new C.dPo(r),A.b5,q))
return E.lA(A.hu,A.f7,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fb(o,q,q))}}
C.aK_.prototype={}
C.Wm.prototype={
S(){return new C.blU(new B.cw(null,x.A),B.a([],x.au),A.as,A.c)}}
C.blU.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,K.oL,s,s,s,new C.e0r(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.l(18),new B.en(B.az(s,B.b2(s,s,s,new C.bnW(t.e,t.x,s),A.fQ),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e0s(t),new C.e0t(t),s,s,s,s,s,s,s,s,s,new C.e0u(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d25[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G6(v,u,new C.e0v(t,v),!1,s))}u=t.r
return E.lA(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bV,p,s),"DRAW PAD",B.x(B.a([new E.fb(o,s,s),E.iP(A.bE,""+A.i.V(u),"Brush",30,2,new C.e0w(t),u),new E.fb(B.a([new E.dW("Eraser",t.w,new C.e0x(t),A.CO,A.bE,s),new E.fC(A.pB,"Undo",new C.e0y(t),A.c,s),new E.fC(A.ej,"Clear",new C.e0z(t),A.c,s),new E.fC(A.Ps,"Paper",new C.e0A(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bnW.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.R()
w=B.K()
w.r=this.c.gp(0)
d.aq(new B.a1(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=$.R()
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
m.ab()}r=new B.aq(A.d.gam(n).a,A.d.gam(n).b)
p.push(r)
p=m.f
if(p!=null)r.ak(p)
m.ab()
d.af(m,q)}}},
aD(d){return!0}}
C.X5.prototype={
S(){var w=x.S
return new C.aFT(B.aR(w),B.aR(w))}}
C.aFT.prototype={
Y(){this.a4()
this.auj()},
auj(){var w,v,u=this,t=x.N,s=B.bq(D.ds6,!0,t)
A.d.Ds(s)
w=x.S
v=B.U(s).c
t=B.C(B.cW(s,0,B.dA(u.d,"count",w),v),t)
A.d.v(t,B.cW(s,0,B.dA(u.d,"count",w),v))
A.d.Ds(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
cdw(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mv("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.erl(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gam(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bQ(A.mV,new C.erm(s,v,u),t)
else{s.x=!0
B.bQ(Ab.GK,new C.ern(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.VG,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ar(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yO,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.m(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iW,A.j,0,q,q),q),B.E(B.ip(!0,q,q,A.y,new B.hH(v,8,8,1,q),new C.err(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.l,q,A.e,A.j,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d3F[t]
o.push(new E.dW(s.b,r.d===s.a,new C.ers(r,s),q,A.aH,q))}o.push(new E.fC(K.aqr,"New game",new C.ert(r),A.b5,q))
return E.lA(A.aH,A.f7,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fb(o,q,q))}}
C.Xf.prototype={
S(){return new C.aGd(B.a([],x.t))}}
C.aGd.prototype={
cdA(d){A.d.a8(this.d)
this.w=!0
this.b1H()},
b1H(){this.d.push(A.cO.az(4))
this.e=0
this.a_X()},
a_X(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_X=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eC7(t))
s=x.H
w=3
return B.b(B.bQ(A.lI,null,s),$async$a_X)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVv(n)
w=7
return B.b(B.bQ(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a_X)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eC8(t))
case 1:return B.h(u,v)}})
return B.i($async$a_X,v)},
aVv(d){this.m(new C.eC5(this,d))
E.mv("marimba",D.caL[d]+5,450,0.55)
B.bQ(A.GI,new C.eC6(this),x.H)},
cdC(d){var w,v,u=this
if(!u.w||u.r)return
u.aVv(d)
w=u.d
v=u.e
if(w[v]!==d){G.dE(90,"",600,0,0.5,"saw")
u.m(new C.eC9(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eCa(u))
B.bQ(A.hI,new C.eCb(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aW8,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fCl,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aAy[v]
u=u.j(q.f===v?1:0.35)
t=new B.aN(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.aAy[v].j(0.8),A.H,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.az(p,B.cT(p,p,p,p,A.b0,new B.p(u,p,new B.bH(r,r,r,r),new B.be(t,t,t,t),s,p,A.n),A.jp,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eCc(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.ad,B.x(B.a([o,A.am,n,A.d9,new B.fH(1,B.kW(1,l,2,12,12,p,A.dZ,!1),p)],m),A.l,p,A.ba,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lA(A.bj,A.f7,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fb(B.a([new E.fC(A.hj,n,q.gcdz(q),A.b5,p)],m),p,p))}}
C.Xz.prototype={
S(){return new C.bn9(new B.au(A.aw,$.aw()))}}
C.bn9.prototype={
axS(d){return B.p7(A.i.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eQ_(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cX(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eQ8()
l=B.aM(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bt(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.l(16),A7.xQ),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.l(16),D.b54),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lW,"Bill amount",!0,!0,!1,m,m,m,m,D.fzD,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.eb,m,m,m,1,m,m,!1,"\u2022",m,new C.eQ4(n),m,m,m,!1,m,m,!1,m,!0,m,A.ad,m,m,m,m,m,m,m,m,m,m,m,A.aV7,!0,A.a5,m,A.ao,m,m,m,m)
k=A.b5.j(0.1)
s=B.l(20)
r=B.L(A.b5.j(0.35),A.r,1)
q=x.p
s=B.cl(B.a([l,A.bz,B.r(m,B.x(B.a([t.$2("Tip ("+A.i.V(n.e)+"%)","$"+n.axS(w)),t.$2("Total","$"+n.axS(v)),A4.NN,t.$3$big("Each of "+n.f+" pays","$"+n.axS(u),!0)],q),A.l,m,A.e,A.j,0,A.p),A.f,m,m,new B.p(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,m,A.ft,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cP_[p]
r.push(new E.dW(""+o+"%",A.i.V(n.e)===o,new C.eQ5(n,o),m,A.b5,m))}l=n.f
return E.lA(A.b5,A.f7,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fb(r,"TIP",m),E.iP(A.aH,""+l,"People",20,1,new C.eQ6(n),l),new E.fb(B.a([new E.dW("Round up",n.r,new C.eQ7(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.X4.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bmE(w,A.cO,$,A.bF,0,B.a([],x.X),null,null)}}
C.bmE.prototype={
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
E.XB("snare",0,0.5)}u.m(new C.eq0())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h8()
u.w=t
u.x=t?0:3.141592653589793
E.mv("bell",24,400,0.5)}u.m(new C.eq1())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bft(v,o.r>0,n))}u=B.az(n,B.at(B.bW(A.fU,m,A.bs,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.epU(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.i.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.L(A.d_,A.r,6)
s=B.a([new B.ac(0,A.G,A.aQ.j(0.4),A.H,30)],x.V)
u=B.az(n,B.at(B.e1(A.A,B.r(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fyO,n,n,n),A.f,n,n,new B.p(n,n,v,n,s,D.ezK,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.epV(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.az(n,B.at(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fnE,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kk,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.epW(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dk7[r]
v.push(new E.dW(q.b,o.d===q.a,new C.epX(o,q),q.c,A.bq,n))}v=B.a([new E.fb(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iP(A.bq,""+s,"Dice",4,1,new C.epY(o),s))}if(o.d==="num"){s=o.z
s=E.iP(A.bq,""+s,"From",100,1,new C.epZ(o),s)
p=o.Q
A.d.v(v,B.a([s,E.iP(A.bq,""+p,"To",1000,2,new C.eq_(o),p)],m))}return E.lA(A.bq,A.f7,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.P,0,A.p))}}
C.bft.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cO.ai()-0.5)*0.6
else w=0
v=B.l(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cC,14)],x.V)
t=B.a([],x.p)
for(s=D.dE6.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.r(p,p,A.f,p,p,A.XH,p,18,p,p,p,p,p,18),p))
return B.eN(A.A,w,B.r(p,new B.an(A.a0,p,A.ac,A.t,t,p),A.f,p,p,new B.p(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bI,p,p,100),p)}}
C.aNa.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzL.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byX()}}
C.aNv.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bzR.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzi()}}
C.aNY.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA_.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzM()}}
C.aOo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA8.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bAc()}}
var z=a.updateTypes(["P(u_)","~()","P(a5C)","aB<~>()","P(D7)","H(u_,H)","G(G,u_)","P(D3)","P(a_C)","P(acG)","P(a4t)","P(nL)","XA()","VH()","a9x()","Xa()","Xp()","Xb()","P(mY)","VM()","agb(Z,H)","af2(Z,H)","~(a9<@,@>)","H(D3,D3)","n(eh)","P(ag_)","P(a1Q)","P(Di)","P(ada)","P(af5)","P(acU)","H(H,rb)","H(H,D7)","n(rb)","~(rb,ai<n>,H)","rb?(D7)","X4()","v(n,a1D)","P(abz)","~(Ba)","XD()","~(uP,n,o,u,G)","~(n,u_)","Wn()","WP(Z)","Oh(Z)","W6(Z,bw<G>,bw<G>)","XI()","Wv()","VI()","Wm()","X5()","Xf()","Xz()","P(rb)"])
C.fKu.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fz9.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fGT.prototype={
$1(d){var w
if(!this.a.Mk(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fGU.prototype={
$1(d){return d.x},
$S:z+0}
C.fKr.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fKs.prototype={
$1(d){var w
if(!this.a.Mk(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fKt.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ej8.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ej9.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.eja.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.ms(v,A.dK,A.ix)}},
$S:7}
C.ejl.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ejm.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ejh.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ejf.prototype={
$2(d,e){var w=this.a
w.r.push(B.cy(B.dw(0,0,0,d,0,0),new C.ejg(w,this.b,e)))},
$S:1904}
C.ejg.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eji.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gX1().alb(0,u[1],u[2],u[3])
u[4].bO(0,new C.ejd(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dE(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.eje(w.a,v,w.f,w.r))},
$S:0}
C.ejd.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:204}
C.eje.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejj.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gX1().am2(t,u[1],s,u[3])
G.dE(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ejc(w.a,v,w.e,w.f))},
$S:0}
C.ejc.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejk.prototype={
$0(){G.dE(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ejb(w,this.b))},
$S:0}
C.ejb.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ejp.prototype={
$0(){var w=this.a
return w.m(new C.ejo(w))},
$S:0}
C.ejo.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ejq.prototype={
$0(){var w=this.a
return w.m(new C.ejn(w))},
$S:0}
C.ejn.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ejr.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.PO()},
$S:0}
C.ejs.prototype={
$0(){return this.a.Z6(this.b)},
$S:0}
C.ejt.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PO():w.aYw()},
$S:2}
C.eju.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PO():w.aYw()},
$S:0}
C.eyr.prototype={
$2(d,e){return d+e},
$S:1905}
C.eyL.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eyK(w,d))},
$S:1906}
C.eyK.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.i.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eyM.prototype={
$0(){},
$S:0}
C.eyN.prototype={
$0(){},
$S:0}
C.eyt.prototype={
$0(){return this.a.m(new C.eys(this.b,this.c))},
$S:0}
C.eys.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eyi.prototype={
$1(d){return this.a.cx===d},
$S:34}
C.eyj.prototype={
$1(d){return this.a.cx=d},
$S:32}
C.eyk.prototype={
$1(d){return this.a.cy===d},
$S:34}
C.eyl.prototype={
$1(d){return this.a.cy=d},
$S:32}
C.eym.prototype={
$1(d){return this.a.db===d},
$S:34}
C.eyn.prototype={
$1(d){return this.a.db=d},
$S:32}
C.eyo.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:34}
C.eyp.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.J(0,d)},
$S:32}
C.eyq.prototype={
$0(){var w=this.a
return w.m(w.gayt())},
$S:0}
C.eyg.prototype={
$1(d){return this.a.$1(!0)},
$S:71}
C.eyh.prototype={
$1(d){return this.a.$1(!1)},
$S:114}
C.eyf.prototype={
$1(d){return this.a.$1(!1)},
$S:143}
C.eyE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b2(p,p,p,new C.bjm(o,p),n)
w=this.b
v=C.bCm("WORLD",w.a,w.c)
u=C.bCm("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.i.V(t*100)
t=t<0.25?A.c0:A.b5
t=C.bCm("FUEL",""+s+"%",t)
s=o.r.b
r=A.i.V(s*100)
s=s>D.Dz[o.db].d?A.c0:A.c
q=x.p
s=B.a([v,u,t,C.bCm("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bCm("HEIGHT",""+A.i.V(A.i.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.A(s,A.l,p,A.iW,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bI_(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tg[w].a+".":"You landed on every world!"
v=B.a([new E.fC(A.oE,"Again",new C.eyz(o),A.c,p),new E.fC(A.oz,"Rebuild",new C.eyA(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fC(A.jI,"Next world",new C.eyB(o),A.b5,p))
n.push(C.hzo("Perfect landing!",w,A.b5,v))}if(o.as==="crashed")n.push(C.hzo("Crash!",o.at,A.c0,B.a([new E.fC(A.oE,"Try again",new C.eyC(o),A.b5,p),new E.fC(A.oz,"Rebuild",new C.eyD(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b1,A.t,n,p)},
$S:66}
C.eyz.prototype={
$0(){var w=this.a
return w.m(w.gayt())},
$S:0}
C.eyA.prototype={
$0(){var w=this.a
return w.m(new C.eyw(w))},
$S:0}
C.eyw.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eyB.prototype={
$0(){var w=this.a
return w.m(new C.eyv(w))},
$S:0}
C.eyv.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eyC.prototype={
$0(){var w=this.a
return w.m(w.gayt())},
$S:0}
C.eyD.prototype={
$0(){var w=this.a
return w.m(new C.eyu(w))},
$S:0}
C.eyu.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eyF.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.eyy(v,w))},
$S:0}
C.eyy.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eyG.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eyH.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eyI.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eyJ.prototype={
$0(){var w=this.a
return w.m(new C.eyx(w))},
$S:0}
C.eyx.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dPi.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iB(B.a([C.huy(),C.huz()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kW(0,B.cO(J.t(r,1)))
q.m(new C.dPh(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dPh.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dOT.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dOU.prototype={
$0(){return this.a.bZU(B.aV(J.t(this.b,"group")))},
$S:0}
C.dOV.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dOW.prototype={
$1(d){return A.a.b_(A.o.ft(A.o.D(A.i.V(d*255),0,255),16),2,"0")},
$S:307}
C.dPj.prototype={
$0(){return E.XB("kick",0,0.25)},
$S:0}
C.dOX.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dOY.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dOZ.prototype={
$0(){return E.XB("kick",0,0.5)},
$S:0}
C.dP_.prototype={
$0(){return G.dE(1300+this.a.RG.az(900),"",40,0,0.2,"square")},
$S:0}
C.dP1.prototype={
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
u=w}if(u.cy!=null&&!A.d.aV(u.d.e,new C.dP0(u)))u.cy=null
u.id=0},
$S:0}
C.dP0.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAj(d)},
$S:z+10}
C.dOQ.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dOR.prototype={
$0(){var w=this.a
return w.m(w.gc9x())},
$S:0}
C.dOS.prototype={
$0(){return this.a.aeE(null)},
$S:0}
C.dP8.prototype={
$0(){var w=this.a.as
return w==null?null:w.f9(0,B.I(["t","shot"],x.N,x.z))},
$S:0}
C.dP9.prototype={
$0(){return this.a.cFZ(this.b.a)},
$S:0}
C.dPa.prototype={
$0(){return this.a.aeE(this.b)},
$S:0}
C.dPb.prototype={
$1(d){var w=this.a
return w.m(new C.dP7(w,d))},
$S:6}
C.dP7.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dPc.prototype={
$0(){var w=this.a
return w.m(new C.dP6(w,this.b))},
$S:0}
C.dP6.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dPd.prototype={
$0(){var w=this.a
return w.m(new C.dP5(w))},
$S:0}
C.dP5.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dPe.prototype={
$0(){var w=this.a
return w.m(new C.dP4(w))},
$S:0}
C.dP4.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f9(0,B.I(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.LS},
$S:0}
C.dPf.prototype={
$0(){var w=this.a
return w.m(new C.dP3(w))},
$S:0}
C.dP3.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b0h()
else w.p3=null},
$S:0}
C.dPg.prototype={
$0(){var w=this.a
return w.m(new C.dP2(w))},
$S:0}
C.dP2.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c6w.prototype={
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
$S:292}
C.c6x.prototype={
$1(d){var w=new B.qr([],[]).o_(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:391}
C.fsp.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:241}
C.fsq.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:241}
C.fsr.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:241}
C.fsy.prototype={
$1(d){return!J.t(d,0)},
$S:241}
C.fsz.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:241}
C.fsA.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:241}
C.dQY.prototype={
$1(d){return this.a.av7(0)},
$S:7}
C.dQC.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.ihA(),B.U(w).k("N<1,H>")).fM(0)},
$S:0}
C.dQF.prototype={
$1(d){return""+d},
$S:77}
C.dQZ.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dQA.prototype={
$1(d){return this.a.av7(this.b)},
$S:7}
C.dQB.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.ayY(0)
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
p=a1.ayX(0,a0,a1.mi(0.82,0.25),0)
o=a1.ayX(0,a0,a1.mi(0.82,0.65),0)
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
C.dQG.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.ayY(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.D3(p,"switch",new B.o(0.14*q.a,r*q.b),0))}o.mP(0,w.e,o.mi(0.86,0.5))},
$S:0}
C.dQv.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dQw.prototype={
$2(d,e){return A.i.aS(d.c.b,e.c.b)},
$S:z+23}
C.dQx.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dQy.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dQz.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adY(this.c)
if(v.ax)C.JP("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dE(140,"",250,0,0.3,"square")}},
$S:0}
C.dQH.prototype={
$0(){},
$S:0}
C.dQI.prototype={
$0(){return A.d.cH(this.a.e,this.b)},
$S:0}
C.dQJ.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dQE.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.br(w.e,new C.dQD(v))
w.cy=null},
$S:0}
C.dQD.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dQu.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mP(0,this.b,new B.o(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dQS.prototype={
$0(){var w=this.a
return w.m(new C.dQR(w))},
$S:0}
C.dQR.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dQT.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.az(A.c4,B.jm(B.b2(w,w,w,new C.bdm(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dQM(v),w,w,w,new C.dQN(v),new C.dQO(v),new C.dQP(v),w,w,w,w,w,w,w,w,w,w,new C.dQQ(v),w,w,w,!1,A.a4)},
$S:37}
C.dQQ.prototype={
$1(d){return this.a.cbi(d.b)},
$S:65}
C.dQO.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cki(u)
if(t!=null){v.as=t
v.at=u
return}w=v.azP(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aK(0,u)}},
$S:48}
C.dQP.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.o(A.i.D(w.a+u.Q.a,46,u.x.a-46),A.i.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dQN.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c2p(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new C.dQK(w))
u=t.as
u.toString
v.push(new C.nL(u,w.a,w.b))
B.jX()}}t.z=t.as=null},
$S:38}
C.dQK.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dQM.prototype={
$1(d){return this.a.axL(d.b)},
$S:311}
C.dQU.prototype={
$0(){return this.a.bDO(this.b.a)},
$S:0}
C.dQV.prototype={
$0(){return this.a.av7(this.b.a)},
$S:0}
C.dQW.prototype={
$0(){var w=this.a
return w.m(new C.dQL(w))},
$S:0}
C.dQL.prototype={
$0(){var w=this.a
w.ayY(0)
w.ay=null},
$S:0}
C.dQX.prototype={
$0(){return this.a.cBC(this.b)},
$S:0}
C.cVT.prototype={
$0(){var w=this,v=null,u=B.fq(v,A.ct,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dB,A.bY)
u.e5()
return u},
$S:273}
C.dX9.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dX8.prototype={
$0(){return this.a.d=null},
$S:0}
C.dXb.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c4i()},
$S:129}
C.dXa.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.fsQ.prototype={
$0(){return K.aLe},
$S:z+40}
C.fsR.prototype={
$0(){return D.dPH},
$S:z+43}
C.fsS.prototype={
$0(){return D.dMy},
$S:z+13}
C.fsT.prototype={
$0(){return D.eg4},
$S:z+14}
C.fsU.prototype={
$0(){return D.dYY},
$S:z+15}
C.fsV.prototype={
$0(){return K.aL5},
$S:z+16}
C.fsW.prototype={
$0(){return D.edR},
$S:z+17}
C.fsX.prototype={
$0(){return K.aLd},
$S:z+12}
C.fsY.prototype={
$0(){return D.dOP},
$S:z+19}
C.f8e.prototype={
$2(d,e){return new C.agb($.bGQ()[e],new C.f8d(e,this.a),null)},
$S:z+20}
C.f8d.prototype={
$0(){var w=this.a,v=I.aIM.h(0,$.bGQ()[w].a)
$.att=v==null?"music":v
B.a6(this.b,!1).ce(B.ec(new C.f8b(w),!1,null,x.H))},
$S:0}
C.f8b.prototype={
$1(d){return $.bGQ()[this.a].e.$0()},
$S:39}
C.f8f.prototype={
$2(d,e){return new C.af2(D.aBa[e],new C.f8c(this.a,e),null)},
$S:z+21}
C.f8c.prototype={
$0(){return this.a.d.$1(D.aBa[this.b])},
$S:0}
C.f7V.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f7U.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f7T.prototype={
$1(d){var w=this
return new B.dY(new C.f7S(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f7S.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.l,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.fJR,A.ax,D.fQH,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fz6,a0,a0,a0)
m=new B.aN(12,12)
l=new B.aN(12,12)
l=B.a([new B.bz(1,A.bb,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.e6(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.ER,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jy,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0),A.ae,new B.bz(2,A.bb,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.e6(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.ER,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jy,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dzj[k]
i=new B.aN(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bA
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.az(a0,B.r(a0,B.X(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.p(g,a0,new B.bH(e,e,e,e),new B.be(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.fC,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f7Q(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.v(v,B.a([n,A.am,new B.c8(A.aL,A.e,A.j,A.l,a0,A.p,a0,0,l,a0),A.T,new B.a5(a0,44,B.cl(m,a0,a0,a0,a0,a0,A.aL,!1),a0),A.aB],w))}v.push(B.bJ(A.B_,a0,new C.f7R(t,r,q,u,a3),a0))
return new B.D(new B.S(0,0,0,a2.f.d),B.bm(!0,new B.cP(new B.aY(0,1/0,0,a1.a.b*0.86),B.cl(v,a0,a0,A2.yP,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:102}
C.f7Q.prototype={
$0(){var w=this
return w.a.$1(new C.f7P(w.b,w.c,w.d))},
$S:0}
C.f7P.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f7R.prototype={
$0(){var w=this,v=w.a
v.m(new C.f7O(v,w.b,w.c,w.d))
B.a6(w.e,!1).O(null)},
$S:0}
C.f7O.prototype={
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
C.f82.prototype={
$0(){var w=this.a
return w.m(new C.f81(w))},
$S:0}
C.f81.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f83.prototype={
$0(){return E.uG(this.b,this.a.f,"scene")},
$S:0}
C.f84.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gH(u),A.d.gam(u),0.4)
u.toString
w=this.a.ga_v().x
w===$&&B.c()
return new B.bN(new B.p(v,v,v,v,v,new B.bY(D.b2z,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c2],x.O),v,v),A.n),A.bi,v,v)},
$S:343}
C.f85.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(B.ev(A.A,B.c5(new B.h7(B.a([u.guJ(),u.ga_v()],x.dS)),new C.f80(u,this.b,v),w),A.f,A.e5),w,w,w)},
$S:231}
C.f80.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guJ().x
r===$&&B.c()
w=r<0.9?1:1-C.btG(r,0.9,0.98)
v=s.ga_v().x
v===$&&B.c()
u=A.dE.aA(0,v)
switch(s.gayZ().a){case 0:s=s.bCZ(t.b,r,u,t.c)
break
case 1:s=s.bTX(t.b,r,u,t.c)
break
case 2:s=s.cGt(t.b,r,u,t.c)
break
case 3:s=s.bFV(t.b,r,u,t.c)
break
case 4:s=s.bJh(t.b,r,u,t.c)
break
case 5:s=s.cbj(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:181}
C.f86.prototype={
$2(d,e){var w=B.abm(this.b),v=this.c.d,u=B.ar(A.d.gH(v),A.d.gam(v),0.4)
u.toString
v=B.ar(A.d.gH(v),A.d.gam(v),0.4)
v.toString
v=w.cPr(u,A.bA,v,3.5)
u=this.a
w=u.guJ().x
w===$&&B.c()
return B.Z_(B.kX(null,null,null,1,0,new C.f8_(u),A.i.D(w,0,1)),v)},
$S:1908}
C.f8_.prototype={
$1(d){var w=this.a
w.guJ().sp(0,d)
if(w.as)w.m(new C.f7W(w))},
$S:6}
C.f7W.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f87.prototype={
$0(){var w=this.a
w.guJ().sp(0,0)
w.af3()},
$S:0}
C.f88.prototype={
$1(d){var w=this.a
w.m(new C.f7Z(w,d))
if(w.as)w.af3()},
$S:6}
C.f7Z.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f89.prototype={
$0(){var w=this.a
w.m(new C.f7Y(w,this.b))
w.guJ().sp(0,0)
if(w.as)w.af3()},
$S:0}
C.f7Y.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f8a.prototype={
$0(){var w=this.a
return w.m(new C.f7X(w,this.b))},
$S:0}
C.f7X.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f7M.prototype={
$2(d,e){return A.i.aS(d.a,e.a)},
$S:1909}
C.f7N.prototype={
$1(d){return d.b},
$S:1910}
C.dr6.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dr7.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dr3.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dr4.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dr5.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dr8.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dr9.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dra.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drb.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.drc.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.drd.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dre.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.drf.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.drg.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.exM.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.exB.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.exD.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.exE.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.exH.prototype={
$1(d){var w=D.n8.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.exI.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.ea(new B.cM(new B.Y(q,new C.exJ(d),p.k("Y<1>")),new C.exK(r),p.k("cM<1,rb?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aO(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.J)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.exJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.exK.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.exF.prototype={
$1(d){return D.n8.h(0,d.b).c===D.xK},
$S:z+54}
C.exG.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eyb.prototype={
$1(d){var w=this.a,v=d.a,u=A.i.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vL(0,u)
w.a7q(A.o.ar(v,1000))},
$S:7}
C.exL.prototype={
$0(){},
$S:0}
C.exx.prototype={
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
C.exO.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.T,B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.n8.h(0,v).b,D.n8.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.h1m,w,B.d(D.n8.h(0,v).a,w,w,w,w,w,w,A.h1,w,w,w),w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,W.arX,w,w,w,w,new C.exN(d),!1,w,w,w,w,w,w,w,D.fTB,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.exN.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.exQ.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.l).w,r=B.a([D.es6],x.p)
for(w=0;w<6;++w){v=D.aBz[w]
u=B.d(v.a,t,t,t,t,t,t,A.h1,t,t,t)
r.push(B.dG(!1,t,t,t,!0,t,t,t,!0,t,t,D.c2V,t,t,t,t,new C.exP(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lW,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,s.a.b*0.7),B.cl(r,t,t,D.bHF,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:27}
C.exP.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.exA.prototype={
$1(d){var w=null
return B.eg(B.a([B.bO(!1,A.dr,w,w,!0,w,w,w,new C.exy(d),w,w),B.bO(!1,A.EW,w,w,!0,w,w,w,new C.exz(d),w,w)],x.p),w,w,I.m8,D.fQU,w,w,w,w,D.fTV,w)},
$S:18}
C.exy.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.exz.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ey9.prototype={
$0(){var w=this.a
return w.m(new C.ey8(w))},
$S:0}
C.ey8.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eya.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nn(new C.ey_(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bdn:t
v=B.a([B.b2(u,t,t,new C.bjk(w,v,new C.ey0(r),new C.ey1(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,new B.du(!0,B.c5(w,new C.ey2(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bKX())
return B.az(A.c4,B.jm(new B.an(A.a0,t,A.b1,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.ey3(r),t,r.gclB(),t,new C.ey4(r),new C.ey5(r),new C.ey6(r),t,t,t,t,t,t,t,t,t,t,new C.ey7(r),t,t,t,!1,A.a4)},
$S:37}
C.ey_.prototype={
$0(){return this.a.ad0(this.b)},
$S:0}
C.ey7.prototype={
$1(d){return this.a.cEa(d.b)},
$S:65}
C.ey5.prototype={
$1(d){return this.a.clC(d.b)},
$S:48}
C.ey6.prototype={
$1(d){return this.a.clD(d.b)},
$S:19}
C.ey4.prototype={
$1(d){return this.a.b3O()},
$S:38}
C.ey3.prototype={
$1(d){return this.a.adI(d.b)},
$S:311}
C.ey0.prototype={
$0(){return this.a.z},
$S:659}
C.ey1.prototype={
$0(){return this.a.Q},
$S:737}
C.ey2.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bPe()
if(p.length===0)return A.bN
w=A.w.j(0.55)
v=B.l(14)
u=B.L(A.bA,A.r,1)
t=B.a([D.fOg,A.cQ],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.J)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,A.aW4,q,q,q))
return B.r(q,B.x(t,A.E,q,A.e,A.P,0,A.p),A.f,q,q,new B.p(w,q,u,v,q,q,A.n),q,q,q,q,A.hh,q,q,q)},
$S:68}
C.exC.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.l(12),t=B.L(e.j(0.6),A.r,1),s=x.p
return new B.D(A.en,B.A(B.a([B.r(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ac.VB,w,w,w),A.bG,B.d(g,w,w,w,w,w,w,F.abf,w,w,w)],s),A.E,w,A.e,A.j,0,A.p),1)],s),A.E,w,A.e,A.j,0,w,w),w)},
$S:1912}
C.exW.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.exX.prototype={
$0(){var w=this.a
return w.m(new C.exV(w))},
$S:0}
C.exV.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.exY.prototype={
$0(){var w=this.a
return w.m(new C.exU(w))},
$S:0}
C.exU.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.exZ.prototype={
$0(){var w=this.a
return w.m(new C.exT(w))},
$S:0}
C.exT.prototype={
$0(){return this.a.r=!0},
$S:0}
C.exS.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n8.gdO(D.n8),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.J)(p),++r)u.push(s.cyV(p[r]))
return new B.D(R.ale,B.x(B.a([new B.D(Ai.amW,w,q),B.A(u,A.l,q,A.e,A.j,0,q,q)],v),A.E,q,A.e,A.j,0,A.p),q)},
$S:z+37}
C.exR.prototype={
$0(){return this.a.cbp(this.b)},
$S:0}
C.dr2.prototype={
$0(){var w=this,v=null,u=B.fq(v,A.ct,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dB,A.bY)
u.e5()
return u},
$S:273}
C.bPQ.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bQ0.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bPW.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bQ1.prototype={
$1(d){return this.a.Mk(d)&&!d.x},
$S:z+0}
C.bQ2.prototype={
$2(d,e){return Math.max(d,this.a.aCG(e))},
$S:z+6}
C.bQ4.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bQ5(w))},
$S:z+5}
C.bQ5.prototype={
$0(){return this.a.a},
$S:87}
C.bQ3.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bQ6.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bQ7(w))},
$S:z+5}
C.bQ7.prototype={
$0(){return this.a.a},
$S:87}
C.bPS.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPT(w))},
$S:z+5}
C.bPT.prototype={
$0(){return this.a.a},
$S:87}
C.bPR.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bPU.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPV(w))},
$S:z+5}
C.bPV.prototype={
$0(){return this.a.a},
$S:87}
C.bPP.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bQ8.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bPX.prototype={
$1(d){return d!==this.b&&this.a.aJ_(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bQ_.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bPZ.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bPY.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bKc.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bKd.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.ctI.prototype={
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
$S:204}
C.fWl.prototype={
$1(d){var w
$.R()
w=B.K()
w.r=d.gp(0)
return w},
$S:1913}
C.fWn.prototype={
$2(d,e){var w
$.R()
w=B.K()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.bu
return w},
$S:1914}
C.fWo.prototype={
$5(d,e,f,g,h){return B.bn(new B.a1(d,e,d+f,e+g),new B.aN(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1915}
C.fWm.prototype={
$3(d,e,f){var w
$.R()
w=B.K()
w.sav(new B.a8(A.b4,A.b8,A.x,B.a([e,f],x.O),null,null).aJ(0,d))
return w},
$S:1916}
C.bJR.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bJS.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bJQ(w))},
$S:0}
C.bJQ.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJT.prototype={
$0(){return B.a([],x.C)},
$S:1917}
C.bJU.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:376}
C.bJV.prototype={
$0(){var w,v,u
J.bGZ(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.tP(v))if(C.hfw(v.b))w.b3h(v)
else w.a0z(v)
else{u=w.a.c.bg9(v)
w.aff(u==null?"The "+$.qE().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bJP.prototype={
$1(d){return new B.dY(new C.bJM(this.a,this.b),null)},
$S:20}
C.bJM.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bJN(this.a,o,a3),m=$.qE(),l=o.b,k=m.h(0,l).d,j=A.i.V(o.ch/1.04),i=new C.bJO(o,n,k),h=B.l(26),g=B.L(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ac(0,A.G,k.j(0.25),A.H,26)],f),d=B.r(p,p,A.f,p,p,new B.p(A.aT,p,p,B.l(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.L(k,A.r,1)
a1=B.r(p,B.at(B.d(m.h(0,l).c,p,p,p,p,p,p,A.pZ,p,p,p),p,p,p),A.f,p,p,new B.p(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jQ,p,p,p),D.fO4],a0),A.E,p,A.e,A.j,0,A.p),1)
v=k.j(0.2)
u=B.l(14)
t=B.L(k,A.r,1)
u=B.A(B.a([a1,A.bc,w,B.r(p,B.d(""+A.i.V(o.ch*100)+"%",p,p,p,p,p,p,B.m(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(v,p,t,u,p,p,A.n),p,p,p,p,A.md,p,p,p)],a0),A.l,p,A.e,A.j,0,p,p)
t=A.w.j(0.35)
v=B.l(18)
w=B.L(A.dn,A.r,1)
a1=30+28*o.ch
s=B.l(8)
r=B.a([k.j(0.85),A.as],x.O)
q=B.L(A.aD,A.r,2)
f=B.a([new B.ac(0,A.G,k.j(0.5),A.H,14)],f)
v=B.r(p,B.at(B.cT(p,B.at(B.ev(A.A,new B.D(A.hL,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mB,p,p,p),p),A.f,A.dD),p,p,p),p,p,A.b0,new B.p(p,p,q,s,f,new B.a8(A.aA,A.aE,A.x,r,p,p),A.n),A.eJ,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.p(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.j,0,p,p)
w=B.aI(p,p,p,p,B.X(A.aqj,k,p,p,p,30),p,p,p,new C.bJI(n,o),p,p,p,p,p,p)
t=B.abm(a2).bfD(k,A.bA,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Z_(B.kX(p,p,p,5.2,1,n,A.i.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.X(A.a2s,k,p,p,p,30),p,p,p,new C.bJJ(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.j,0,p,p)
return B.bm(!0,B.r(p,B.x(B.a([d,A.af,u,A.aB,v,A.af,i,A.ax,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.ho,p,p,p),1),B.bO(!1,A_.aX6,p,p,!0,p,p,p,new C.bJK(a2),p,B.fv(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.t1,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.j,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.p(p,p,g,h,e,D.caa,A.n),p,p,p,A.yG,D.bEb,p,p,p),!0,!1,A.ag,!0,!0)},
$S:89}
C.bJN.prototype={
$1(d){var w=this.a
w.m(new C.bJG(this.b,d))
this.c.$1(new C.bJH())
w.a.toString},
$S:6}
C.bJG.prototype={
$0(){return this.a.ch=A.i.D(this.b,1,5.2)},
$S:0}
C.bJH.prototype={
$0(){},
$S:0}
C.bJO.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.l(14),r=u?w.c:A.bA
r=B.L(r,A.r,u?2:1)
return B.E(B.az(v,B.cT(v,B.at(B.ev(A.A,B.d(d,v,v,v,v,v,v,B.m(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.f,A.e5),v,v,v),v,v,A.b0,new B.p(t,v,r,s,v,v,A.n),A.h5,v,v,v,A.jr,A.qD,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bJL(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:678}
C.bJL.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJI.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bJJ.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bJK.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.bK9.prototype={
$2(d,e){var w
if(d==="short"){G.dE(1800,"",120,0,0.55,"noise")
G.dE(200,"",160,2.2,0.4,"saw")
B.fL()
w=this.a
if(w.c!=null)w.aff("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dE(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.aff("\u26a0 Overloaded! The "+$.qE().h(0,e.b).b+" can only give about "+A.i.ad(w.a.c.Aj(e),2)+" amps but your gadgets are asking for "+A.i.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.aff("Burnt out! "+e.ay)
G.dE(140,"",320,0,0.6,"noise")
G.dE(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bKa.prototype={
$0(){},
$S:0}
C.bJj.prototype={
$0(){},
$S:0}
C.bKb.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bK8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.az(A.c4,B.b2(p,p,p,new C.ak0(w,v,u,t,s,r==null?A.jt:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bK2(o),new C.bK3(o),new C.bK4(o),p,p,p,p,p,p,p,p,p,p,new C.bK5(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bcE)
w=o.Q
if(w!=null){v=B.l(14)
u=B.L(A.cG,A.r,1)
n.push(B.ap(p,B.az(p,B.r(p,B.A(B.a([D.fEe,B.E(B.d(w,p,p,p,p,p,p,D.fvU,p,p,p),1)],q),A.E,p,A.e,A.j,0,p,p),A.f,p,p,new B.p(D.biF,p,u,v,p,p,A.n),p,p,p,p,A.nG,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bK6(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b19(B.A(B.a([D.bJT,new E.fC(A.CP,"Cut wire",new C.bK7(o),A.c0,p)],q),A.l,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.cma(w),p,p,10,10,p,p))}return B.jm(new B.an(A.a0,p,A.b1,A.t,n,p),A.t,p)},
$S:341}
C.bK3.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bal(s)
if(r!=null){t.m(new C.bK0(t,r,d))
return}w=t.b3Y(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.o(v*u.a,w.d*u.b).aK(0,s)
t.m(new C.bK1(t,w))}},
$S:48}
C.bK0.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bK1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bK4.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bJZ(w,d))
else if(w.w!=null)w.m(new C.bK_(w,d.b.a2(0,w.x)))},
$S:19}
C.bJZ.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bK_.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.i.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.i.D(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bK2.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.bal(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.am2(u.a,u.b,v.a,v.b)!=null)G.dE(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.afd()},
$S:38}
C.bK5.prototype={
$1(d){var w=this.a,v=d.b,u=w.b3Y(v)
if(u!=null){w.m(new C.bJX(w,u))
if(D.mt.al(0,u.b))w.cwO(u)
w.a.toString
return}w.m(new C.bJY(w,w.cJE(v)))},
$S:65}
C.bJX.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dE(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dE(200,"",70,0,0.2,"saw")}},
$S:0}
C.bJY.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bK6.prototype={
$0(){var w=this.a
return w.m(new C.bJW(w))},
$S:0}
C.bJW.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bK7.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
G.dE(300,"",50,0,0.35,"noise")
w.afd()},
$S:0}
C.bJk.prototype={
$0(){return this.a.bsB(this.b)},
$S:0}
C.bJD.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fpX,w,w,w),B.E(B.kX(this.b.d,w,w,g,h,new C.bJF(this.a,f),A.i.D(e,h,g)),1)],x.p),A.l,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1918}
C.bJF.prototype={
$1(d){var w=this.a
w.m(new C.bJE(this.b,d))
w.a.toString},
$S:6}
C.bJE.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJq.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
G.dE(260,"",70,0,0.35,"noise")
w.afd()},
$S:0}
C.bJr.prototype={
$0(){var w=this.a
return w.m(new C.bJp(w))},
$S:0}
C.bJp.prototype={
$0(){return this.a.d=null},
$S:0}
C.bJs.prototype={
$0(){this.a.m(new C.bJo(this.b,this.c))
G.dE(900,"",40,0,0.3,"noise")},
$S:0}
C.bJo.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bJv.prototype={
$0(){return this.a.b3h(this.b)},
$S:0}
C.bJw.prototype={
$0(){return this.a.a0z(this.b)},
$S:0}
C.bJx.prototype={
$0(){return this.a.a2c(this.b)},
$S:0}
C.bJy.prototype={
$0(){var w=this.a
w.m(new C.bJn(this.b,this.c))
w.a.toString},
$S:0}
C.bJn.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bJz.prototype={
$0(){var w=this.a
w.m(new C.bJm(this.b,this.c))
w.a.toString},
$S:0}
C.bJm.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bJA.prototype={
$0(){var w=this.a
w.m(new C.bJl(this.b,this.c))
w.a.toString},
$S:0}
C.bJl.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bJB.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJC.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJt.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJu.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fsB.prototype={
$1(d){return d.aIB("bulb")},
$S:z+2}
C.fsC.prototype={
$1(d){return d.qd(0,"switch")&&d.aIB("bulb")},
$S:z+2}
C.fsD.prototype={
$1(d){return A.d.aV(d.a,new C.fso())},
$S:z+2}
C.fso.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fsE.prototype={
$1(d){return d.qd(0,"resistor")&&A.d.aV(d.a,new C.fsn())},
$S:z+2}
C.fsn.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fsF.prototype={
$1(d){return!d.qd(0,"battery")&&d.aIB("bulb")},
$S:z+2}
C.fss.prototype={
$1(d){return A.d.aV(d.a,new C.fsm())},
$S:z+2}
C.fsm.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fst.prototype={
$1(d){return A.d.aV(d.a,new C.fsl())},
$S:z+2}
C.fsl.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fsu.prototype={
$1(d){return A.d.aV(d.a,new C.fsk())},
$S:z+2}
C.fsk.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fsv.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.fsi())&&A.d.aV(w,new C.fsj())&&d.qd(0,"buck")},
$S:z+2}
C.fsi.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fsj.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fsw.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.fsg())&&A.d.aV(w,new C.fsh())},
$S:z+2}
C.fsg.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fsh.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fsx.prototype={
$1(d){return A.d.aV(d.a,new C.fsf())},
$S:z+2}
C.fsf.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e0X.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.e15.prototype={
$1(d){var w=this.a.d
return w.aJ_(d)&&w.tP(d)},
$S:z+0}
C.e16.prototype={
$1(d){return d.x},
$S:z+0}
C.e17.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e18.prototype={
$0(){},
$S:0}
C.e0W.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.l(22),o=x.p,n=B.a([D.fVW,A.ax,D.fG2,A.W],o)
for(w=this.a,v=0;v<19;++v){u=D.S1[v]
t=A.c.j(0.06)
s=new B.aN(14,14)
r=new B.ay(A.bA,1,A.r,-1)
n.push(B.az(q,B.r(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iF,q,q,q),A.bG,B.d(u.b,q,3,A.a2,q,q,q,D.fwE,q,q,q)],o),A.E,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(t,q,new B.bH(r,r,r,r),new B.be(s,s,s,s),q,q,A.n),q,q,q,A.cy,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e0V(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eP(q,F.mR,new B.D(A.bQ,new B.a5(340,q,B.cl(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d8,q,new B.b9(p,A.a1),q)},
$S:47}
C.e0V.prototype={
$0(){B.a6(this.b,!1).O(null)
var w=this.a
w.m(new C.e0U(w,this.c))
G.dE(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e0U.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.blh()},
$S:0}
C.e0S.prototype={
$1(d){return new C.WP(this.a.d,null)},
$S:z+44}
C.e0T.prototype={
$0(){},
$S:0}
C.e14.prototype={
$1(d){return new B.dY(new C.e13(this.a),null)},
$S:20}
C.e13.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aj7(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.b5:A.aH
k=B.aF(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fT2,A.b3,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.j,0,m,m),A.T,B.bx(B.l(4),B.kq(A.bA,m,m,5,m,w.a/11,new B.lN(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fJe)
else{h=f.j(0.1)
t=B.l(14)
s=B.L(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.KK,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.ES,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.r(m,B.x(B.a([r,A.ax,q,new B.bL(A.aa,m,m,B.bO(!1,B.d(p,m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e11(l,e),m,m),m)],v),A.E,m,A.e,A.j,0,A.p),A.f,m,m,new B.p(h,m,s,t,m,m,A.n),m,m,m,m,A.bg,m,m,m))}u.push(A.W)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aN(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dn,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.abe,m,m,m)
r=j[o]
q=w.q(0,o)?A.aD:A.c
u.push(B.az(m,B.r(m,new B.c8(A.aL,A.e,A.j,A.l,m,A.p,m,0,B.a([s,A.au,new B.bz(1,A.bb,B.d(r.a,m,m,m,m,m,m,new B.F(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.p(h,m,new B.bH(n,n,n,n),new B.be(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.nG,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e12(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,k.a.b*0.75),B.cl(u,m,m,A2.yP,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:89}
C.e11.prototype={
$0(){var w=this.a
w.m(new C.e1_(w))
this.b.$1(new C.e10())
w.Fx()},
$S:0}
C.e1_.prototype={
$0(){var w=this.a
$.aj7()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e10.prototype={
$0(){},
$S:0}
C.e12.prototype={
$0(){var w=this.a
w.m(new C.e0Y(w,this.b))
this.c.$1(new C.e0Z())
w.Fx()},
$S:0}
C.e0Y.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e0Z.prototype={
$0(){},
$S:0}
C.e1a.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.e1b.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.md("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).ce(B.ec(new C.e19(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e19.prototype={
$1(d){B.ll("construction")
return Ak.hUz()},
$S:z+45}
C.e1c.prototype={
$0(){return E.hG0(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e1d.prototype={
$0(){var w=this.a
return w.m(w.d.gd0u())},
$S:0}
C.e1e.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gtf(v))
w.Fx()},
$S:0}
C.cLh.prototype={
$2(d,e){var w=null,v=this.a.gaz6().x
v===$&&B.c()
return B.b2(w,w,w,new C.bbc(v,w),A.az)},
$S:55}
C.cLg.prototype={
$3(d,e,f){var w=new B.aG($.R().r,A.ai,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.c6(v,u,v+e,u))
w.E(new B.c6(v,u,v,u+e))
w.E(new B.c6(v,u,v-e,u))
w.E(new B.c6(v,u,v,t))
w.E(new B.bu())
t=B.K()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:455}
C.h0m.prototype={
$3(d,e,f){return new C.W6(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h0n.prototype={
$4(d,e,f,g){var w=x.a
return new B.d1(e,!1,B.ig(A.A,g,null,new B.bg(B.cG(A.cx,e,null),new B.br(0.85,1,w),w.k("bg<bP.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
C.dY6.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.dY5.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.l(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c1Q(o):q.bEY(o,p),m=x.p
p=B.a([B.oy(new B.mq(n,new B.bC(p,x.bz)),A.pn,B.pU(),A.b0,A.b0,new C.dY3())],m)
n=t.d
if(n){w=A.i.F(q.gSD(),12)<4
v=w?150:96
u=B.l(16)
m=B.a([A.au],m)
if(w)m.push(D.bJF)
else m.push(A.b3)
m.push(B.r(s,s,A.f,s,s,new B.p(w?A.b5:A.as,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.au)
p.push(B.ap(s,B.at(B.cT(s,B.A(m,A.l,s,A.e,A.j,0,s,s),s,s,A.e0,new B.p(A.w,s,s,u,s,s,A.n),A.mV,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.AD)p.push(B.ap(s,B.at(B.r(s,s,A.f,s,s,A.LX,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Ez)p.push(B.ap(s,B.r(s,s,A.f,s,s,A.LX,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.az(s,B.at(B.r(s,s,A.f,s,s,new B.p(A.c.j(0.75),s,s,B.l(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dY4(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a0,s,A.b1,A.t,p,s),A.aq)},
$S:302}
C.dY3.prototype={
$2(d,e){var w=x.a
return new B.d1(e,!1,B.ig(A.A,d,null,new B.bg(e,new B.br(0.92,1,w),w.k("bg<bP.T>"))),null)},
$S:386}
C.dY4.prototype={
$0(){var w=this.a
return w.m(new C.dY2(w))},
$S:0}
C.dY2.prototype={
$0(){return this.a.e=null},
$S:0}
C.dY1.prototype={
$0(){var w=this.a
return w.m(new C.dY0(w,this.b))},
$S:0}
C.dY0.prototype={
$0(){return this.a.e=A.d.co(F.kz,this.b)},
$S:0}
C.dY_.prototype={
$0(){var w=this.a
return w.m(new C.dXZ(w))},
$S:0}
C.dXZ.prototype={
$0(){return this.a.e=0},
$S:0}
C.dXV.prototype={
$0(){var w=this.a
return w.m(new C.dXU(w))},
$S:0}
C.dXU.prototype={
$0(){return this.a.e=null},
$S:0}
C.dXY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.l(o?20:8),m=A.w.j(0.55),l=x.p
m=B.r(p,B.A(B.a([D.h0L,A.au,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eR,p,p,p,A.aby,p,p,p),1),B.d(A.a.b_(A.o.u(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b_(A.o.u(B.fP(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.rd,p,p,p)],l),A.l,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kx,p,p,p)
w=this.a
v=B.a([B.b2(p,p,p,new C.bxR(w.gSD(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.l(10)
t=B.L(A.aT,A.r,1)
s=B.l(10)
o=B.r(p,B.A(B.a([B.az(p,B.r(p,p,A.f,p,p,A.aex,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dXX(w),p,p,p,p,p,p,!1,A.a4),A.e7,B.r(p,p,A.f,p,p,A.XG,p,12,p,p,p,p,p,12),A.e7,B.r(p,p,A.f,p,p,D.b7S,p,12,p,p,p,p,p,12),A.au,B.E(B.d(F.kz[o].a,p,1,A.a2,p,p,p,A.ab8,p,p,p),1)],l),A.l,p,A.e,A.j,0,p,p),A.f,A.cs,p,p,p,24,p,p,A.fK,p,p,p)
r=w.e
r.toString
v.push(B.bS(0,new B.D(D.bG9,B.r(p,B.bx(s,B.x(B.a([o,B.E(B.b2(p,p,p,new C.afT(r,w.gSD(),p),A.fQ),1)],l),A.l,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new B.p(A.w,p,t,u,D.dvx,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.l(18)
t=B.L(A.aT,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jr,w.awZ(F.kz[q],34,!1),p))
v.push(B.ap(8,B.at(B.r(p,B.A(s,A.l,p,A.e,A.P,0,p,p),A.f,p,p,new B.p(o,p,t,u,p,p,A.n),p,p,p,p,A.lM,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.r(p,B.x(B.a([m,B.E(new B.an(A.a0,p,A.b1,A.t,v,p),1)],l),A.l,p,A.e,A.j,0,A.p),A.f,X.ZK,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:302}
C.dXX.prototype={
$0(){var w=this.a
return w.m(new C.dXW(w))},
$S:0}
C.dXW.prototype={
$0(){return this.a.e=null},
$S:0}
C.ft5.prototype={
$0(){return D.ei7},
$S:z+47}
C.ft6.prototype={
$0(){return D.dQf},
$S:z+48}
C.ft7.prototype={
$0(){return D.dML},
$S:z+49}
C.ft8.prototype={
$0(){return D.dPD},
$S:z+50}
C.ft9.prototype={
$0(){return D.dUL},
$S:z+51}
C.fta.prototype={
$0(){return D.edU},
$S:z+52}
C.ftb.prototype={
$0(){return D.eg3},
$S:z+53}
C.ftc.prototype={
$0(){return D.dU4},
$S:z+36}
C.cmA.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.cmB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hJQ(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aN(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dq,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Aj.KI,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fBE,k,k,k)
l=A.c.j(0.85)
h.push(B.az(k,B.r(k,new B.an(A.a0,k,A.ac,A.t,B.a([new B.cK(k,-6,-6,k,k,k,n,k),new B.bL(A.lA,k,k,B.x(B.a([m,A.cQ,B.d(r.b,k,k,k,k,k,k,new B.F(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.p(k,k,k,new B.be(q,q,q,q),p,new B.a8(A.aA,A.aE,A.x,o,k,k),A.n),k,v,k,k,A.bI,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cmz(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bW(A.bH,h,A.bs,k,14,14)},
$S:167}
C.cmz.prototype={
$0(){return B.a6(this.a,!1).ce(B.ec(new C.cmy(this.b),!1,null,x.H))},
$S:0}
C.cmy.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eUw.prototype={
$0(){var w=this.a
return w.w=w.d[w.b7m(w.f)]},
$S:0}
C.eUs.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cO.ai()*7},
$S:0}
C.eUr.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cf)
w.w=""},
$S:0}
C.eUu.prototype={
$0(){var w=this.a
return w.m(new C.eUt(w,this.b))},
$S:0}
C.eUt.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cH(w,this.b)},
$S:0}
C.eUv.prototype={
$1(d){return this.a.b1G(0)},
$S:2}
C.e3W.prototype={
$0(){return C.JP("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e3X.prototype={
$0(){},
$S:0}
C.e3R.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e3T.prototype={
$0(){return this.a.b1I(this.b)},
$S:0}
C.e3U.prototype={
$0(){var w=this.a
return w.m(new C.e3S(w))},
$S:0}
C.e3S.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e3V.prototype={
$0(){var w=this.a
return w.b1I(w.d)},
$S:0}
C.dPp.prototype={
$2(d,e){return d+e},
$S:81}
C.dPq.prototype={
$0(){},
$S:0}
C.dPk.prototype={
$2(d,e){return d+e},
$S:81}
C.dPn.prototype={
$0(){var w=this.a
return w.m(new C.dPm(w,this.b))},
$S:0}
C.dPm.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dPo.prototype={
$0(){var w=this.a
return w.m(new C.dPl(w))},
$S:0}
C.dPl.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e0r.prototype={
$0(){return E.uG(this.b,this.a.d,"drawing")},
$S:0}
C.e0s.prototype={
$1(d){var w=this.a
return w.m(new C.e0q(w,d))},
$S:48}
C.e0q.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aK_(u,v,t))},
$S:0}
C.e0t.prototype={
$1(d){var w=this.a
return w.m(new C.e0p(w,d))},
$S:19}
C.e0p.prototype={
$0(){return A.d.gam(this.a.e).c.push(this.b.b)},
$S:0}
C.e0u.prototype={
$1(d){var w=this.a
return w.m(new C.e0o(w,d))},
$S:22}
C.e0o.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aK_(u,v,t))},
$S:0}
C.e0v.prototype={
$0(){var w=this.a
return w.m(new C.e0n(w,this.b))},
$S:0}
C.e0n.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e0w.prototype={
$1(d){var w=this.a
return w.m(new C.e0m(w,d))},
$S:6}
C.e0m.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e0x.prototype={
$0(){var w=this.a
return w.m(new C.e0l(w))},
$S:0}
C.e0l.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e0y.prototype={
$0(){var w=this.a
return w.m(new C.e0k(w))},
$S:0}
C.e0k.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e0z.prototype={
$0(){var w=this.a
return w.m(A.d.gtf(w.e))},
$S:0}
C.e0A.prototype={
$0(){var w=this.a
return w.m(new C.e0j(w))},
$S:0}
C.e0j.prototype={
$0(){var w=this.a
w.x=D.aAq[A.o.F(A.d.co(D.aAq,w.x)+1,4)]},
$S:0}
C.erl.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
C.erm.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JP("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.erk(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JP("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.erk.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.ern.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.erj(w))},
$S:12}
C.erj.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.err.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.az(w,B.lB(new C.erp(v,e),w,A.b0,A.pn,w,w,new B.br(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erq(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.erq.prototype={
$0(){return this.a.cdw(this.b)},
$S:0}
C.erp.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fL(3.141592653589793*e)
m=B.l(16)
w=o?p:D.c9l
if(o)v=q.a.r.q(0,q.b)?A.b5.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.L(u.r.q(0,t)?A.b5:A.aT,A.r,1)
if(o){r=B.dr()
r.fL(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fz(A.A,B.d(u[t],p,p,p,p,p,p,H.abi,p,p,p),p,r,!0)
u=r}else u=D.fUC
return B.fz(A.A,B.r(A.A,u,A.f,p,p,new B.p(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:112}
C.ers.prototype={
$0(){var w=this.a
return w.m(new C.ero(w,this.b))},
$S:0}
C.ero.prototype={
$0(){var w=this.a
w.d=this.b.a
w.auj()},
$S:0}
C.ert.prototype={
$0(){var w=this.a
return w.m(w.gbNI())},
$S:0}
C.eC7.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eC8.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eC5.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eC6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eC4(w))},
$S:12}
C.eC4.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eC9.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eCa.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eCb.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b1H()},
$S:12}
C.eCc.prototype={
$0(){return this.a.cdC(this.b)},
$S:0}
C.eQ_.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.eQ8.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.m(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kT,B.A(B.a([v,A.ae,new B.dl(1,A.cn,B.ev(A.A,B.d(e,w,w,w,w,w,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e5),w)],x.p),A.l,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1919}
C.eQ4.prototype={
$1(d){return this.a.m(new C.eQ3())},
$S:2}
C.eQ3.prototype={
$0(){},
$S:0}
C.eQ5.prototype={
$0(){var w=this.a
return w.m(new C.eQ2(w,this.b))},
$S:0}
C.eQ2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eQ6.prototype={
$1(d){var w=this.a
return w.m(new C.eQ1(w,d))},
$S:6}
C.eQ1.prototype={
$0(){return this.a.f=A.i.V(this.b)},
$S:0}
C.eQ7.prototype={
$0(){var w=this.a
return w.m(new C.eQ0(w))},
$S:0}
C.eQ0.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eq0.prototype={
$0(){},
$S:0}
C.eq1.prototype={
$0(){},
$S:0}
C.epU.prototype={
$0(){var w=this.a
return w.m(new C.epT(w))},
$S:0}
C.epT.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c0(u,1,!1,x.S)
w.r=0.9
E.XB("hat",0,0.6)},
$S:0}
C.epV.prototype={
$0(){var w=this.a
return w.m(new C.epS(w))},
$S:0}
C.epS.prototype={
$0(){this.a.y=1.1
E.mv("bell",36,200,0.4)},
$S:0}
C.epW.prototype={
$0(){var w=this.a
return w.m(new C.epR(w))},
$S:0}
C.epR.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.az(Math.max(v,u)-t+1)
w.as=u
E.mv("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.epX.prototype={
$0(){var w=this.a
return w.m(new C.epQ(w,this.b))},
$S:0}
C.epQ.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.epY.prototype={
$1(d){var w=this.a
return w.m(new C.epP(w,d))},
$S:6}
C.epP.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.i.V(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.epZ.prototype={
$1(d){var w=this.a
return w.m(new C.epO(w,d))},
$S:6}
C.epO.prototype={
$0(){return this.a.z=A.i.V(this.b)},
$S:0}
C.eq_.prototype={
$1(d){var w=this.a
return w.m(new C.epN(w,d))},
$S:6}
C.epN.prototype={
$0(){return this.a.Q=A.i.V(this.b)},
$S:0}
C.cmw.prototype={
$0(){var w=this
return E.mv(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aO5.prototype
w.bzU=w.t
w=C.aN8.prototype
w.byV=w.t
w=C.aN9.prototype
w.byW=w.t
w=C.aNd.prototype
w.bz_=w.t
w=C.aOV.prototype
w.bAQ=w.t
w=C.aO3.prototype
w.bzS=w.t
w=C.azs.prototype
w.bvW=w.t
w=C.azt.prototype
w.bvX=w.t
w=C.aLA.prototype
w.bxi=w.t
w=C.aNo.prototype
w.bza=w.t
w=C.aNa.prototype
w.byX=w.t
w=C.aNv.prototype
w.bzi=w.t
w=C.aNY.prototype
w.bzM=w.t
w=C.aOo.prototype
w.bAc=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aG7.prototype,"gayt","c8Y",1)
v(C,"iqp","c6u",3)
var q
u(q=C.aEB.prototype,"gchR","chS",22)
w(q,"gc9x","b0h",1)
w(C.aED.prototype,"gcbf","cbg",1)
t(C.aEU.prototype,"gcbm","cbn",39)
w(q=C.aJ8.prototype,"gcBl","cBm",1)
w(q,"gcbo","af3",1)
w(q,"gcmk","cml",1)
w(q,"gcbl","af2",3)
w(q=C.aG6.prototype,"gbKQ","aaq",3)
w(q,"gclB","b3O",1)
w(q,"gcpo","ahE",3)
s(q,"gcbq","af4",3)
s(q=C.a5C.prototype,"gtf","a8",1)
u(q,"gcZ8","aoO",0)
u(q,"gcVw","Mk",0)
w(q,"gd0u","blh",1)
r(C.ak0.prototype,"gcbN",0,5,null,["$5"],["qT"],41,0,0)
w(q=C.aF5.prototype,"gcbO","cbP",1)
w(q,"gcsd","ai_",3)
w(q,"gci7","agk",3)
w(q,"gczm","aj9",3)
w(q=C.aGz.prototype,"gcdx","cdy",1)
s(q,"gcdv","b1G",1)
w(C.aFT.prototype,"gbNI","auj",1)
s(C.aGd.prototype,"gcdz","cdA",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.alc,C.GY,C.vr,C.aUa,C.a4t,C.bci,C.c6v,C.yL,C.D3,C.nL,C.bd3,C.Ba,C.bvj,C.qt,C.rb,C.D7,C.a_C,C.ag_,C.a1Q,C.Di,C.acU,C.ada,C.af5,C.GJ,C.eh,C.u_,C.abz,C.acG,C.a5C,C.mY,C.bd4,C.fQ,C.mx,C.bwD,C.aK_])
u(B.ht,[C.fKu,C.fz9,C.fGT,C.fGU,C.fKr,C.fKs,C.eja,C.ejt,C.eyL,C.eyi,C.eyj,C.eyk,C.eyl,C.eym,C.eyn,C.eyo,C.eyp,C.eyg,C.eyh,C.eyf,C.eyG,C.eyH,C.eyI,C.dOW,C.dOY,C.dP0,C.dPb,C.c6w,C.c6x,C.fsp,C.fsq,C.fsr,C.fsy,C.fsz,C.fsA,C.dQY,C.dQF,C.dQZ,C.dQA,C.dQv,C.dQx,C.dQD,C.dQQ,C.dQO,C.dQP,C.dQN,C.dQK,C.dQM,C.f8b,C.f7T,C.f8_,C.f88,C.f7N,C.dr6,C.dr7,C.dr3,C.dr4,C.dr5,C.dr8,C.dr9,C.dra,C.drb,C.drc,C.drd,C.dre,C.drf,C.drg,C.exH,C.exI,C.exJ,C.exK,C.exF,C.exG,C.eyb,C.exO,C.exQ,C.exA,C.ey7,C.ey5,C.ey6,C.ey4,C.ey3,C.exC,C.bPQ,C.bQ0,C.bPW,C.bQ1,C.bQ3,C.bPR,C.bPP,C.bQ8,C.bPX,C.bQ_,C.bPZ,C.bPY,C.bKc,C.fWl,C.fWo,C.fWm,C.bJU,C.bJP,C.bJN,C.bKb,C.bK3,C.bK4,C.bK2,C.bK5,C.bJD,C.bJF,C.bJB,C.bJC,C.bJt,C.bJu,C.fsB,C.fsC,C.fsD,C.fso,C.fsE,C.fsn,C.fsF,C.fss,C.fsm,C.fst,C.fsl,C.fsu,C.fsk,C.fsv,C.fsi,C.fsj,C.fsw,C.fsg,C.fsh,C.fsx,C.fsf,C.e15,C.e16,C.e0W,C.e0S,C.e14,C.e19,C.cLg,C.h0m,C.h0n,C.cmy,C.eUv,C.e0s,C.e0t,C.e0u,C.e0w,C.erp,C.eQ_,C.eQ8,C.eQ4,C.eQ6,C.epY,C.epZ,C.eq_])
u(B.jy,[C.fKt,C.ejf,C.ejd,C.eyr,C.eyE,C.dQw,C.dQT,C.dXb,C.f8e,C.f8f,C.f7S,C.f84,C.f85,C.f80,C.f86,C.f7M,C.exD,C.exE,C.eya,C.ey2,C.exS,C.bQ2,C.bQ4,C.bQ6,C.bPS,C.bPU,C.bKd,C.ctI,C.fWn,C.bJM,C.bJO,C.bK9,C.bK8,C.e13,C.cLh,C.dY5,C.dY3,C.dXY,C.cmB,C.dPp,C.dPk,C.err])
u(B.af,[C.WP,C.Xb,C.VH,C.VM,C.Oi,C.aJ7,C.Xa,C.ajZ,C.Wn,C.az7,C.W6,C.XI,C.Wv,C.VI,C.Wm,C.X5,C.Xf,C.Xz,C.X4])
u(B.ah,[C.bms,C.aO5,C.aN8,C.aNd,C.aEU,C.aOV,C.aO3,C.azs,C.bzP,C.aLA,C.aNo,C.aOo,C.aNv,C.aNa,C.blU,C.aFT,C.aGd,C.bn9,C.aNY])
u(B.iJ,[C.ej8,C.ej9,C.ejl,C.ejm,C.ejh,C.ejg,C.eji,C.eje,C.ejj,C.ejc,C.ejk,C.ejb,C.ejp,C.ejo,C.ejq,C.ejn,C.ejr,C.ejs,C.eju,C.eyK,C.eyM,C.eyN,C.eyt,C.eys,C.eyq,C.eyz,C.eyA,C.eyw,C.eyB,C.eyv,C.eyC,C.eyD,C.eyu,C.eyF,C.eyy,C.eyJ,C.eyx,C.dPi,C.dPh,C.dOT,C.dOU,C.dOV,C.dPj,C.dOX,C.dOZ,C.dP_,C.dP1,C.dOQ,C.dOR,C.dOS,C.dP8,C.dP9,C.dPa,C.dP7,C.dPc,C.dP6,C.dPd,C.dP5,C.dPe,C.dP4,C.dPf,C.dP3,C.dPg,C.dP2,C.dQC,C.dQB,C.dQG,C.dQy,C.dQz,C.dQH,C.dQI,C.dQJ,C.dQE,C.dQu,C.dQS,C.dQR,C.dQU,C.dQV,C.dQW,C.dQL,C.dQX,C.cVT,C.dX9,C.dX8,C.dXa,C.fsQ,C.fsR,C.fsS,C.fsT,C.fsU,C.fsV,C.fsW,C.fsX,C.fsY,C.f8d,C.f8c,C.f7V,C.f7U,C.f7Q,C.f7P,C.f7R,C.f7O,C.f82,C.f81,C.f83,C.f7W,C.f87,C.f7Z,C.f89,C.f7Y,C.f8a,C.f7X,C.exM,C.exB,C.exL,C.exx,C.exN,C.exP,C.exy,C.exz,C.ey9,C.ey8,C.ey_,C.ey0,C.ey1,C.exW,C.exX,C.exV,C.exY,C.exU,C.exZ,C.exT,C.exR,C.dr2,C.bQ5,C.bQ7,C.bPT,C.bPV,C.bJR,C.bJS,C.bJQ,C.bJT,C.bJV,C.bJG,C.bJH,C.bJL,C.bJI,C.bJJ,C.bJK,C.bKa,C.bJj,C.bK0,C.bK1,C.bJZ,C.bK_,C.bJX,C.bJY,C.bK6,C.bJW,C.bK7,C.bJk,C.bJE,C.bJq,C.bJr,C.bJp,C.bJs,C.bJo,C.bJv,C.bJw,C.bJx,C.bJy,C.bJn,C.bJz,C.bJm,C.bJA,C.bJl,C.e0X,C.e17,C.e18,C.e0V,C.e0U,C.e0T,C.e11,C.e1_,C.e10,C.e12,C.e0Y,C.e0Z,C.e1a,C.e1b,C.e1c,C.e1d,C.e1e,C.dY6,C.dY4,C.dY2,C.dY1,C.dY0,C.dY_,C.dXZ,C.dXV,C.dXU,C.dXX,C.dXW,C.ft5,C.ft6,C.ft7,C.ft8,C.ft9,C.fta,C.ftb,C.ftc,C.cmA,C.cmz,C.eUw,C.eUs,C.eUr,C.eUu,C.eUt,C.e3W,C.e3X,C.e3R,C.e3T,C.e3U,C.e3S,C.e3V,C.dPq,C.dPn,C.dPm,C.dPo,C.dPl,C.e0r,C.e0q,C.e0p,C.e0o,C.e0v,C.e0n,C.e0m,C.e0x,C.e0l,C.e0y,C.e0k,C.e0z,C.e0A,C.e0j,C.erl,C.erm,C.erk,C.ern,C.erj,C.erq,C.ers,C.ero,C.ert,C.eC7,C.eC8,C.eC5,C.eC6,C.eC4,C.eC9,C.eCa,C.eCb,C.eCc,C.eQ3,C.eQ5,C.eQ2,C.eQ1,C.eQ7,C.eQ0,C.eq0,C.eq1,C.epU,C.epT,C.epV,C.epS,C.epW,C.epR,C.epX,C.epQ,C.epP,C.epO,C.epN,C.cmw])
t(C.bA1,C.aO5)
t(C.aG7,C.bA1)
u(B.mn,[C.bjm,C.bdm,C.buH,C.bc0,C.bti,C.bsJ,C.bcH,C.bsL,C.bwN,C.bjk,C.ak0,C.bbc,C.bxR,C.afT,C.by2,C.bsK,C.bnW])
t(C.aN9,C.aN8)
t(C.aEB,C.aN9)
t(C.bzM,C.aNd)
t(C.aED,C.bzM)
u(B.lD,[C.Lj,C.a1D,C.Ki])
u(B.ax,[C.btH,C.agb,C.af2,C.Re,C.buc,C.a9x,C.bft])
t(C.aJ8,C.aOV)
t(C.bjj,B.pe)
t(C.aG6,C.aO3)
t(C.azt,C.azs)
t(C.ak_,C.azt)
t(C.aF5,C.bzP)
t(C.bbd,C.aLA)
t(C.blS,C.aNo)
t(C.bA8,C.aOo)
t(C.aGz,C.bA8)
t(C.bzR,C.aNv)
t(C.bm2,C.bzR)
t(C.bzL,C.aNa)
t(C.blB,C.bzL)
t(C.bA_,C.aNY)
t(C.bmE,C.bA_)
w(C.aO5,B.cc)
w(C.bA1,E.nJ)
w(C.aN8,B.cc)
w(C.aN9,E.nJ)
w(C.aNd,B.cc)
w(C.bzM,E.nJ)
w(C.aOV,B.eM)
w(C.aO3,B.cc)
w(C.azs,B.cc)
w(C.azt,E.nJ)
w(C.aLA,B.cc)
v(C.bzP,B.eC)
w(C.aNo,B.cc)
w(C.aNa,B.cc)
w(C.bzL,E.nJ)
w(C.aNv,B.cc)
w(C.bzR,E.nJ)
w(C.aNY,B.cc)
w(C.bA_,E.nJ)
w(C.aOo,B.cc)
w(C.bA8,E.nJ)})()
B.iT(b.typeUniverse,JSON.parse('{"WP":{"af":[],"v":[]},"bms":{"ah":["WP"]},"Xb":{"af":[],"v":[]},"aG7":{"ah":["Xb"]},"bjm":{"aC":[]},"VH":{"af":[],"v":[]},"aEB":{"ah":["VH"]},"VM":{"af":[],"v":[]},"aED":{"ah":["VM"]},"bdm":{"aC":[]},"agb":{"ax":[],"v":[]},"af2":{"ax":[],"v":[]},"aJ7":{"af":[],"v":[]},"Oi":{"af":[],"v":[]},"aEU":{"ah":["Oi"]},"btH":{"ax":[],"v":[]},"Re":{"ax":[],"v":[]},"buH":{"aC":[]},"buc":{"ax":[],"v":[]},"bc0":{"aC":[]},"aJ8":{"ah":["aJ7"]},"bti":{"aC":[]},"bsJ":{"aC":[]},"bcH":{"aC":[]},"bsL":{"aC":[]},"bwN":{"aC":[]},"Xa":{"af":[],"v":[]},"bjj":{"aC":[]},"aG6":{"ah":["Xa"]},"bjk":{"aC":[]},"ak0":{"aC":[]},"ajZ":{"af":[],"v":[]},"ak_":{"ah":["ajZ"]},"Wn":{"af":[],"v":[]},"az7":{"af":[],"v":[]},"aF5":{"ah":["Wn"],"eC":[]},"bbd":{"ah":["az7"]},"bbc":{"aC":[]},"W6":{"af":[],"v":[]},"blS":{"ah":["W6"]},"bxR":{"aC":[]},"afT":{"aC":[]},"a9x":{"ax":[],"v":[]},"XI":{"af":[],"v":[]},"Wv":{"af":[],"v":[]},"VI":{"af":[],"v":[]},"Wm":{"af":[],"v":[]},"X5":{"af":[],"v":[]},"Xf":{"af":[],"v":[]},"Xz":{"af":[],"v":[]},"X4":{"af":[],"v":[]},"aGz":{"ah":["XI"]},"by2":{"aC":[]},"bm2":{"ah":["Wv"]},"bsK":{"aC":[]},"blB":{"ah":["VI"]},"blU":{"ah":["Wm"]},"bnW":{"aC":[]},"aFT":{"ah":["X5"]},"aGd":{"ah":["Xf"]},"bn9":{"ah":["Xz"]},"bmE":{"ah":["X4"]},"bft":{"ax":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("lN<u?>"),G:w("u"),J:w("bv<n,G>"),Q:w("de<n>"),Z:w("a0"),M:w("O<da>"),R:w("O<T3>"),h:w("O<a4t>"),V:w("O<ac>"),O:w("O<u>"),C:w("O<V>"),D:w("O<aB<aE>>"),w:w("O<a0>"),E:w("O<ai<n>>"),b:w("O<ai<G>>"),U:w("O<ai<H?>>"),x:w("O<a9<n,aE>>"),g:w("O<o>"),F:w("O<u_>"),v:w("O<fT>"),eZ:w("O<+(n,n)>"),fT:w("O<+(G,v)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),r:w("O<+(n,n,a0)>"),e:w("O<+(n,G,G,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,G,G,a9<n,G>)>"),_:w("O<vr>"),fQ:w("O<abz>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<Gi>"),p:w("O<v>"),bL:w("O<acG>"),fH:w("O<lj>"),a_:w("O<acU>"),cB:w("O<nL>"),ba:w("O<ada>"),eW:w("O<D7>"),fY:w("O<a_C>"),ac:w("O<af5>"),cd:w("O<Di>"),fr:w("O<ag_>"),e4:w("O<a1Q>"),au:w("O<aK_>"),f7:w("O<P>"),n:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<u_?>"),bN:w("O<H?>"),q:w("cw<ak_>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("N<eh,n>"),fR:w("N<+(G,v),v>"),l:w("iC"),gA:w("zW"),gD:w("wr"),k:w("ct"),K:w("aE"),W:w("u_"),B:w("eh"),N:w("n"),bO:w("au"),a:w("br<G>"),Y:w("bC<n>"),bz:w("bC<H?>"),dg:w("ea<rb>"),m:w("bci"),a2:w("D3"),f3:w("rb"),es:w("GJ"),gV:w("mC"),y:w("P"),i:w("G"),z:w("@"),S:w("H"),L:w("ai<@>?"),cK:w("aE?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2z=new B.da(0,0.1)
D.b4u=new C.aUa(0,0,0)
D.LS=new C.aUa(0,0.5,0)
D.b54=new B.ay(A.b5,1,A.r,-1)
D.b6x=new B.aY(0,1/0,0,290)
D.b6E=new B.aY(16,1/0,16,1/0)
D.boh=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dvK=w([D.boh,Al.aiJ],x.O)
D.ezC=new B.bY(A.Fi,1.1,A.x,null,0,D.dvK,null,null)
D.b6W=new B.p(null,null,null,null,null,D.ezC,A.n)
D.b7S=new B.p(A.bd,null,null,null,null,null,A.a6)
D.fpv=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h29=new B.B("\u26a1",null,D.fpv,null,null,null,null,null,null,null,null,null)
D.bcu=new B.ch(A.A,null,null,D.h29,null)
D.aW_=new B.F(!0,A.bW,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSy=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aW_,null,A.K,null,null,null,null,null,null,null)
D.erM=new B.D(A.nJ,D.fSy,null)
D.bcE=new B.ch(A.A,null,null,D.erM,null)
D.fIi=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aW_,null,A.K,null,null,null,null,null,null,null)
D.esF=new B.D(A.H_,D.fIi,null)
D.bdn=new B.ch(A.A,null,null,D.esF,null)
D.afx=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bh8=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bhp=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.biF=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.biM=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bj8=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bl3=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bm4=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bmO=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ahQ=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bnO=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.aid=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Zk=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bpF=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bpW=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.aiN=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.brE=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.brM=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bse=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wc=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.buk=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.akg=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bA6=new B.bd(11e6)
D.bBT=new B.S(10,34,10,26)
D.bC0=new B.S(10,6,10,2)
D.bC2=new B.S(10,8,0,10)
D.bCH=new B.S(12,8,8,8)
D.bCO=new B.S(14,0,14,22)
D.bCQ=new B.S(14,0,14,30)
D.bDT=new B.S(16,4,16,28)
D.bEb=new B.S(18,10,18,16)
D.bG9=new B.S(26,12,26,58)
D.bH0=new B.S(4,4,8,2)
D.bHF=new B.S(8,14,8,12)
D.bHM=new B.S(8,40,8,30)
D.bHR=new B.S(8,6,8,8)
D.bIb=new B.S(0,0,1.5,0)
D.b4g=new B.HY(26,"saturation")
D.bIu=new B.uS(A.d1,D.b4g,null,A.Yc)
D.bIv=new B.hw(A.G,11)
D.bIz=new B.hw(A.G,30)
D.fHm=new B.B("REACTION LAB",null,U.aWC,null,null,null,null,A.a2,null,1,null,null)
D.bIH=new B.bz(1,A.bb,D.fHm,null)
D.fLs=new B.B("\ud83d\udce2 NGMY Ads",null,A.rd,null,null,null,null,A.eR,null,1,null,null)
D.bJF=new B.bz(1,A.bb,D.fLs,null)
D.fG3=new B.B("Wire selected",null,A.h1,null,null,null,null,null,null,null,null,null)
D.bJT=new B.bz(1,A.bb,D.fG3,null)
D.ape=new B.a0(62712,"MaterialIcons",!1)
D.bQ1=new B.a0(62908,"MaterialIcons",!1)
D.bRJ=new B.a0(983122,"MaterialIcons",!1)
D.bRW=new B.a0(983247,"MaterialIcons",!1)
D.bSr=new B.a0(983616,"MaterialIcons",!1)
D.bRI=new B.a0(983117,"MaterialIcons",!1)
D.bW8=new B.ae(D.bRI,28,A.c,null,null,null)
D.bWo=new B.ae(A.j6,18,null,null,null,null)
D.bYg=new B.ae(A.ej,21,A.c0,null,null,null)
D.bYx=new B.ae(A.oE,null,A.ab,null,null,null)
D.bYH=new B.ae(A.a3u,21,A.ab,null,null,null)
D.bZy=new B.ae(A.eL,17,A.ab,null,null,null)
D.c1k=new B.ae(A.j6,21,A.ab,null,null,null)
D.c2V=new B.ae(A.ed,null,A.aQ,null,null,null)
D.dtp=w([A.d7,A.d5,A.d7],x.O)
D.c6i=new B.a8(A.a7,A.aa,A.x,D.dtp,null,null)
D.d4V=w([A.bP,A.bo],x.O)
D.c6q=new B.a8(A.b4,A.b8,A.x,D.d4V,null,null)
D.c6C=new B.a8(A.b4,A.b8,A.x,A.a65,null,null)
D.asW=new B.a8(A.b4,A.b8,A.x,P.a5j,null,null)
D.d2s=w([A.pc,A.iH],x.O)
D.c7n=new B.a8(A.b4,A.b8,A.x,D.d2s,null,null)
D.d4D=w([A.e6,A.as],x.O)
D.at2=new B.a8(A.b4,A.b8,A.x,D.d4D,null,null)
D.dn7=w([A.dc,A.jm,A.bo],x.O)
D.c7F=new B.a8(A.a7,A.aa,A.x,D.dn7,null,null)
D.dnd=w([A.dI,A.cs],x.O)
D.c8_=new B.a8(A.b4,A.b8,A.x,D.dnd,null,null)
D.cBx=w([A.bP,A.dc],x.O)
D.c88=new B.a8(A.a7,A.aa,A.x,D.cBx,null,null)
D.aD3=w([A.e6,M.ny],x.O)
D.c8f=new B.a8(A.b4,A.b8,A.x,D.aD3,null,null)
D.c8w=new B.a8(A.b4,A.b8,A.x,R.ato,null,null)
D.c9l=new B.a8(A.aA,A.aE,A.x,A.RO,null,null)
D.dev=w([A.as,A.w],x.O)
D.c9w=new B.a8(A.b4,A.b8,A.x,D.dev,null,null)
D.c9z=new B.a8(A.b4,A.b8,A.x,H.aCk,null,null)
D.bs9=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bt0=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cOt=w([A.Nk,D.bs9,D.bt0],x.O)
D.c9I=new B.a8(A.b4,A.b8,A.x,D.cOt,null,null)
D.cBR=w([A.d_,A.hd],x.O)
D.c9Y=new B.a8(A.b4,A.b8,A.x,D.cBR,null,null)
D.bvE=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cCB=w([F.afG,D.bvE],x.O)
D.caa=new B.a8(A.b4,A.b8,A.x,D.cCB,null,null)
D.caK=w([0,4,7],x.t)
D.caL=w([0,4,7,12],x.t)
D.caM=w([0,4,7,4],x.t)
D.aC_=w([A.hs,A.qo],x.O)
D.aBv=w([A.hu,A.cH],x.O)
D.azQ=w([A.bq,A.dN],x.O)
D.cX9=w([A.aQ,A.d_],x.O)
D.dou=w([A.bT,A.kL],x.O)
D.azg=w([A.cG,A.ku],x.O)
D.d1g=w([A.bL,A.aM],x.O)
D.cb8=w([D.aC_,D.aBv,A.a5o,D.azQ,D.cX9,A.aA5,A.aB_,D.dou,D.azg,D.d1g],B.as("O<ai<u>>"))
D.cfP=w([120,220,380],x.t)
D.cjz=w([12,16,19,24],x.t)
D.cjJ=w([1400,800,450,2400],x.t)
D.cs9=w([250,450,900,1500],x.t)
D.bgu=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bsz=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bqm=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bwe=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bpt=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.ayx=w([D.bgu,D.bsz,D.bqm,D.bwe,D.bpt],x.O)
D.cJn=w([50,25,75],x.t)
D.cP_=w([0,5,10,15,18,20,25],x.t)
D.cXs=w([900,500,250,1600],x.t)
D.d0z=w([A.bq,A.bE,A.b9,A.bq],x.O)
D.a5e=w([A.ay,A.bj,A.bd,A.aH,A.nu],x.O)
D.d25=w([A.as,A.ay,A.cG,A.bj,A.bd,A.cA,A.ch,A.bE,A.Yt],x.O)
D.a5h=w([0.04,0.17,0.3],x.n)
D.f8S=new C.vr("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f8Y=new C.vr("Medium engine","A good all-rounder.",0.3,0.9)
D.f8X=new C.vr("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Iw=w([D.f8S,D.f8Y,D.f8X],x._)
D.eFo=new B.y(6,"Easy")
D.eG9=new B.y(8,"Medium")
D.eB7=new B.y(10,"Hard")
D.d3F=w([D.eFo,D.eG9,D.eB7],x.I)
D.aAf=w([0.55,0.78,1],x.n)
D.aAq=w([A.c,A.fz,A.no,A.as],x.O)
D.aAy=w([A.bd,A.ay,A.bj,A.d5],x.O)
D.f8P=new C.vr("Radar","Shows your height above the ground.",0.1,0)
D.f8Q=new C.vr("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f8N=new C.vr("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aAF=w([D.f8P,D.f8Q,D.f8N],x._)
D.d9R=w([47,100,220,470,1000],x.n)
D.Jz={volts:0}
D.a76=new B.bv(D.Jz,[3],x.J)
D.K_=new B.dX(["b","battery",0.2,0.3,D.a76])
D.elA={on:0}
D.dEi=new B.bv(D.elA,[1],x.J)
D.Ex=new B.dX(["s","switch",0.5,0.3,D.dEi])
D.f6w=new B.dX(["l","bulb",0.8,0.3,A.jt])
D.d53=w([D.K_,D.Ex,D.f6w],x.d)
D.Ev=new B.cu(["b",0,"s",0])
D.f5w=new B.cu(["s",1,"l",0])
D.aRA=new B.cu(["l",1,"b",1])
D.dnj=w([D.Ev,D.f5w,D.aRA],x.o)
D.d4s=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eAi=new C.mY("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d53,D.dnj,D.d4s)
D.aLo={ohms:0}
D.aJ_=new B.bv(D.aLo,[220],x.J)
D.f5Z=new B.dX(["r","resistor",0.5,0.3,D.aJ_])
D.f6L=new B.dX(["d","led",0.8,0.3,A.jt])
D.dqy=w([D.K_,D.f5Z,D.f6L],x.d)
D.f4R=new B.cu(["b",0,"r",0])
D.f5q=new B.cu(["r",1,"d",0])
D.f4X=new B.cu(["d",1,"b",1])
D.dzV=w([D.f4R,D.f5q,D.f4X],x.o)
D.dr1=w(["led","diode","indicator"],x.s)
D.eAp=new C.mY("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dqy,D.dzV,D.dr1)
D.a8o={level:0}
D.dDE=new B.bv(D.a8o,[0.2],x.J)
D.f64=new B.dX(["p","pot",0.5,0.3,D.dDE])
D.f66=new B.dX(["m","motor",0.8,0.3,A.jt])
D.d5n=w([D.K_,D.f64,D.f66],x.d)
D.f4Q=new B.cu(["b",0,"p",0])
D.f5m=new B.cu(["p",1,"m",0])
D.f5i=new B.cu(["m",1,"b",1])
D.dvt=w([D.f4Q,D.f5m,D.f5i],x.o)
D.dn0=w(["fan","motor","spin","dimmer"],x.s)
D.eAg=new C.mY("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d5n,D.dvt,D.dn0)
D.a73=new B.bv(D.a8o,[0.9],x.J)
D.aRJ=new B.dX(["s","solar",0.25,0.3,D.a73])
D.aRI=new B.dX(["l","bulb",0.75,0.3,A.jt])
D.d8b=w([D.aRJ,D.aRI],x.d)
D.f5t=new B.cu(["s",0,"l",0])
D.f5g=new B.cu(["l",1,"s",1])
D.d6b=w([D.f5t,D.f5g],x.o)
D.dwc=w(["solar","sun","without battery","no battery","free"],x.s)
D.eAj=new C.mY("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d8b,D.d6b,D.dwc)
D.f6O=new B.dX(["c","crank",0.25,0.3,D.a73])
D.dlc=w([D.f6O,D.aRI],x.d)
D.f4U=new B.cu(["c",0,"l",0])
D.f5f=new B.cu(["l",1,"c",1])
D.dlO=w([D.f4U,D.f5f],x.o)
D.dlm=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eAf=new C.mY("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dlc,D.dlO,D.dlm)
D.dDD=new B.bv(D.a8o,[0.7],x.J)
D.f69=new B.dX(["t","turbine",0.25,0.3,D.dDD])
D.f5X=new B.dX(["m","motor",0.75,0.3,A.jt])
D.dfb=w([D.f69,D.f5X],x.d)
D.f5E=new B.cu(["t",0,"m",0])
D.f5j=new B.cu(["m",1,"t",1])
D.dea=w([D.f5E,D.f5j],x.o)
D.djV=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eAc=new C.mY("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dfb,D.dea,D.djV)
D.aIX=new B.bv(D.Jz,[9],x.J)
D.a9v=new B.dX(["b","battery",0.2,0.3,D.aIX])
D.aRG=new B.dX(["r","radio",0.8,0.3,A.jt])
D.dwM=w([D.a9v,D.Ex,D.aRG],x.d)
D.f5y=new B.cu(["s",1,"r",0])
D.aRC=new B.cu(["r",1,"b",1])
D.car=w([D.Ev,D.f5y,D.aRC],x.o)
D.dve=w(["radio","music","listen"],x.s)
D.eAo=new C.mY("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dwM,D.car,D.dve)
D.dEI=new B.bv(D.Jz,[12],x.J)
D.aRF=new B.dX(["b","battery",0.2,0.3,D.dEI])
D.f6x=new B.dX(["t","tv",0.8,0.3,A.jt])
D.d55=w([D.aRF,D.Ex,D.f6x],x.d)
D.f5z=new B.cu(["s",1,"t",0])
D.aRD=new B.cu(["t",1,"b",1])
D.dox=w([D.Ev,D.f5z,D.aRD],x.o)
D.dwK=w(["tv","television","screen","watch"],x.s)
D.eA9=new C.mY("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d55,D.dox,D.dwK)
D.f6n=new B.dX(["z","buzzer",0.8,0.3,A.jt])
D.cLJ=w([D.K_,D.Ex,D.f6n],x.d)
D.f5A=new B.cu(["s",1,"z",0])
D.f5S=new B.cu(["z",1,"b",1])
D.d_N=w([D.Ev,D.f5A,D.f5S],x.o)
D.dtv=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eAl=new C.mY("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cLJ,D.d_N,D.dtv)
D.f65=new B.dX(["h","heater",0.8,0.3,A.jt])
D.diz=w([D.a9v,D.Ex,D.f65],x.d)
D.f5v=new B.cu(["s",1,"h",0])
D.f54=new B.cu(["h",1,"b",1])
D.d0u=w([D.Ev,D.f5v,D.f54],x.o)
D.cvq=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eAa=new C.mY("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.diz,D.d0u,D.cvq)
D.f6z=new B.dX(["s","solar",0.2,0.25,D.a73])
D.dEL=new B.bv(D.aLo,[100],x.J)
D.f6C=new B.dX(["r","resistor",0.55,0.25,D.dEL])
D.f6J=new B.dX(["c","capacitor",0.85,0.25,A.jt])
D.f61=new B.dX(["q","resistor",0.55,0.6,D.aJ_])
D.f6A=new B.dX(["d","led",0.85,0.6,A.jt])
D.do2=w([D.f6z,D.f6C,D.f6J,D.f61,D.f6A],x.d)
D.f5u=new B.cu(["s",0,"r",0])
D.f5p=new B.cu(["r",1,"c",0])
D.f4W=new B.cu(["c",1,"s",1])
D.f4V=new B.cu(["c",0,"q",0])
D.f5o=new B.cu(["q",1,"d",0])
D.f4Y=new B.cu(["d",1,"c",1])
D.dc0=w([D.f5u,D.f5p,D.f4W,D.f4V,D.f5o,D.f4Y],x.o)
D.dkv=w(["capacitor","store","charge","flash"],x.s)
D.eAn=new C.mY("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.do2,D.dc0,D.dkv)
D.f6c=new B.dX(["b","battery",0.15,0.3,D.a76])
D.f6P=new B.dX(["l1","bulb",0.5,0.3,A.jt])
D.f6k=new B.dX(["l2","bulb",0.85,0.3,A.jt])
D.d35=w([D.f6c,D.f6P,D.f6k],x.d)
D.f4P=new B.cu(["b",0,"l1",0])
D.f5c=new B.cu(["l1",1,"l2",0])
D.f5d=new B.cu(["l2",1,"b",1])
D.dfZ=w([D.f4P,D.f5c,D.f5d],x.o)
D.dwv=w(["series","two bulbs","dim"],x.s)
D.eAd=new C.mY("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d35,D.dfZ,D.dwv)
D.elV={volts:0,charge:1}
D.dEO=new B.bv(D.elV,[1.5,0],x.J)
D.f6H=new B.dX(["b","battery",0.75,0.3,D.dEO])
D.d2t=w([D.aRJ,D.f6H],x.d)
D.f5s=new B.cu(["s",0,"b",0])
D.f4T=new B.cu(["b",1,"s",1])
D.dck=w([D.f5s,D.f4T],x.o)
D.dkF=w(["charge","rechargeable","flat","recharge"],x.s)
D.eAb=new C.mY("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d2t,D.dck,D.dkF)
D.dEH=new B.bv(D.Jz,[4.5],x.J)
D.f67=new B.dX(["b","battery",0.2,0.3,D.dEH])
D.aRE=new B.dX(["p","phone",0.8,0.3,A.jt])
D.df0=w([D.f67,D.Ex,D.aRE],x.d)
D.f5x=new B.cu(["s",1,"p",0])
D.a9u=new B.cu(["p",1,"b",1])
D.dso=w([D.Ev,D.f5x,D.a9u],x.o)
D.dtV=w(["phone","charger","usb","mobile"],x.s)
D.eAh=new C.mY("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.df0,D.dso,D.dtV)
D.f5U=new B.dX(["f","fan",0.8,0.3,A.jt])
D.cny=w([D.K_,D.f5U],x.d)
D.f4O=new B.cu(["b",0,"f",0])
D.f52=new B.cu(["f",1,"b",1])
D.d12=w([D.f4O,D.f52],x.o)
D.dn_=w(["fan","cool","air","wind"],x.s)
D.eAq=new C.mY("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cny,D.d12,D.dn_)
D.f6r=new B.dX(["b","battery",0.15,0.2,D.a76])
D.f5V=new B.dX(["a","ammeter",0.5,0.2,A.jt])
D.f5T=new B.dX(["l","bulb",0.85,0.2,A.jt])
D.f6t=new B.dX(["v","voltmeter",0.5,0.6,A.jt])
D.dl0=w([D.f6r,D.f5V,D.f5T,D.f6t],x.d)
D.f4M=new B.cu(["b",0,"a",0])
D.f4L=new B.cu(["a",1,"l",0])
D.f5G=new B.cu(["v",0,"l",0])
D.f5H=new B.cu(["v",1,"l",1])
D.dcb=w([D.f4M,D.f4L,D.aRA,D.f5G,D.f5H],x.o)
D.dzU=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eAm=new C.mY("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dl0,D.dcb,D.dzU)
D.f6S=new B.dX(["b","battery",0.15,0.2,D.aIX])
D.f6b=new B.dX(["t","tv",0.55,0.2,A.jt])
D.aIY=new B.bv(D.Jz,[5],x.J)
D.f6_=new B.dX(["c","buck",0.4,0.5,D.aIY])
D.f6d=new B.dX(["p","phone",0.8,0.5,A.jt])
D.d9D=w([D.f6S,D.f6b,D.f6_,D.f6d],x.d)
D.f4S=new B.cu(["b",0,"t",0])
D.aRy=new B.cu(["b",0,"c",0])
D.aRz=new B.cu(["c",1,"p",0])
D.deY=w([D.f4S,D.aRD,D.aRy,D.aRz,D.a9u],x.o)
D.d7K=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eAe=new C.mY("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d9D,D.deY,D.d7K)
D.f60=new B.dX(["c","buck",0.5,0.3,D.aIY])
D.d0j=w([D.aRF,D.f60,D.aRE],x.d)
D.d5x=w([D.aRy,D.aRz,D.a9u],x.o)
D.cyV=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eA8=new C.mY("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d0j,D.d5x,D.cyV)
D.f6i=new B.dX(["d","diode",0.5,0.3,A.jt])
D.dgc=w([D.a9v,D.f6i,D.aRG],x.d)
D.f4N=new B.cu(["b",0,"d",0])
D.f4Z=new B.cu(["d",1,"r",0])
D.cOh=w([D.f4N,D.f4Z,D.aRC],x.o)
D.d7p=w(["diode","protect","backwards","one way"],x.s)
D.eAk=new C.mY("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dgc,D.cOh,D.d7p)
D.S1=w([D.eAi,D.eAp,D.eAg,D.eAj,D.eAf,D.eAc,D.eAo,D.eA9,D.eAl,D.eAa,D.eAn,D.eAd,D.eAb,D.eAh,D.eAq,D.eAm,D.eAe,D.eA8,D.eAk],B.as("O<mY>"))
D.hEB=new C.GY("Moon",1.62,A.dc,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hEz=new C.GY("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.hEC=new C.GY("Mercury",3.7,A.ks,"Mercury is small, so its gravity is like Mars.")
D.hEw=new C.GY("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hEy=new C.GY("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.hEA=new C.GY("Neptune",11.15,A.d5,"Neptune pulls a little harder than Earth.")
D.hEx=new C.GY("Jupiter",24.79,A.cG,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tg=w([D.hEB,D.hEz,D.hEC,D.hEw,D.hEy,D.hEA,D.hEx],B.as("O<GY>"))
D.dbZ=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dcJ=w([0.2,0.5,0.8],x.n)
D.b1m=new C.Lj(0,"accordion")
D.d1o=w([A.jK,A.D6,A.CM],x.w)
D.d93=w(["Mail","SMS","Ad"],x.s)
D.d1Y=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hCP=new C.Ba(D.b1m,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aC_,D.d1o,D.d93,D.d1Y)
D.adg=new C.Lj(1,"flip")
D.dkp=w([A.qP,Z.HX,A.uZ],x.w)
D.deI=w(["Unlock","Verify","Secure"],x.s)
D.d0f=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hCO=new C.Ba(D.adg,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aBv,D.dkp,D.deI,D.d0f)
D.b1n=new C.Lj(2,"towers")
D.ddu=w([A.zr,A.qS,A.ii],x.w)
D.dd1=w(["Save","Grow","Earn"],x.s)
D.cPa=w(["","",""],x.s)
D.hCQ=new C.Ba(D.b1n,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a5o,D.ddu,D.dd1,D.cPa)
D.adh=new C.Lj(3,"assemble")
D.dlq=w([A.oI,A.hz,A.ed],x.w)
D.d8n=w(["Launch","Charge","Shine"],x.s)
D.dhA=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hCS=new C.Ba(D.adh,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.azQ,D.dlq,D.d8n,D.dhA)
D.b1o=new C.Lj(4,"carousel")
D.dld=w([A.b9,A.eZ],x.O)
D.d9c=w([A.n4,A.apG,A.PN],x.w)
D.d3v=w(["Explore","Discover","Learn"],x.s)
D.df6=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hCN=new C.Ba(D.b1o,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dld,D.d9c,D.d3v,D.df6)
D.b1p=new C.Lj(5,"burst")
D.dcX=w([A.hY,A.rF],x.O)
D.d1S=w([A.k8,A.n2,A.hN],x.w)
D.d2d=w(["Cheer","Win","Love"],x.s)
D.d4B=w(["Make some noise","First place","Share the joy"],x.s)
D.hCR=new C.Ba(D.b1p,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dcX,D.d1S,D.d2d,D.d4B)
D.aBa=w([D.hCP,D.hCO,D.hCQ,D.hCS,D.hCN,D.hCR],B.as("O<Ba>"))
D.f1R=new B.b5("skin","Skin",A.apH)
D.f3x=new B.b5("muscle","Muscles",A.Po)
D.f3a=new B.b5("organ","Organs",A.hN)
D.bPK=new B.a0(62747,"MaterialIcons",!1)
D.f3i=new B.b5("bone","Skeleton",D.bPK)
D.f3F=new B.b5("vessel","Blood vessels",A.pF)
D.ddA=w([D.f1R,D.f3x,D.f3a,D.f3i,D.f3F],x.r)
D.f8R=new C.vr("Simple legs","Light. Land gently.",0.15,0.2)
D.f8T=new C.vr("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f8W=new C.vr("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Dz=w([D.f8R,D.f8T,D.f8W],x._)
D.f4t=new B.cu(["beat",0.18,0.28,0])
D.f5B=new B.cu(["burst",0.7,0.2,0])
D.f5M=new B.cu(["delay",0.45,0.5,1])
D.f5l=new B.cu(["ripple",0.75,0.6,3])
D.d86=w([D.f4t,D.f5B,D.f5M,D.f5l],x.e)
D.djI=w([O.lw,P.JZ,F.Ux],x.u)
D.hBf=new C.GJ("First spark","A clock lights a burst and a ripple",D.d86,D.djI)
D.f51=new B.cu(["beat",0.15,0.3,1])
D.f47=new B.cu(["ripple",0.62,0.15,0])
D.f5I=new B.cu(["delay",0.4,0.45,0])
D.f4I=new B.cu(["ripple",0.7,0.45,0])
D.f4p=new B.cu(["delay",0.4,0.7,1])
D.f5n=new B.cu(["shake",0.75,0.75,0])
D.dxE=w([D.f51,D.f47,D.f5I,D.f4I,D.f4p,D.f5n],x.e)
D.eCe=new B.y(2,4)
D.aRf=new B.y(4,5)
D.dbO=w([O.lw,P.JZ,F.Ux,D.eCe,D.aRf],x.u)
D.hBh=new C.GJ("Heartbeat","Two thumps, then a shake",D.dxE,D.dbO)
D.f4y=new B.cu(["dice",0.15,0.7,1])
D.f5O=new B.cu(["echo",0.4,0.7,0])
D.f4G=new B.cu(["comet",0.7,0.5,4])
D.f5C=new B.cu(["burst",0.72,0.2,1])
D.f5_=new B.cu(["burst",0.3,0.25,0])
D.f4z=new B.cu(["pop",0.55,0.85,0])
D.cuZ=w([D.f4y,D.f5O,D.f4G,D.f5C,D.f5_,D.f4z],x.e)
D.eBz=new B.y(1,3)
D.eBA=new B.y(1,4)
D.aRb=new B.y(0,5)
D.dl8=w([O.lw,S.vx,D.eBz,D.eBA,D.aRb],x.u)
D.hBg=new C.GJ("Fireworks","Dice launch comets that burst in colour",D.cuZ,D.dl8)
D.f4D=new B.cu(["beat",0.15,0.2,2])
D.f59=new B.cu(["chance",0.4,0.2,0])
D.f4v=new B.cu(["ball",0.7,0.12,3])
D.f4i=new B.cu(["chance",0.4,0.5,1])
D.f5N=new B.cu(["ball",0.3,0.08,1])
D.f4b=new B.cu(["ripple",0.7,0.55,3])
D.co0=w([D.f4D,D.f59,D.f4v,D.f4i,D.f5N,D.f4b],x.e)
D.eCf=new B.y(2,5)
D.cLs=w([O.lw,S.vx,P.a9m,F.Uy,D.eCf],x.u)
D.hBe=new C.GJ("Rain","Balls fall at random and splash",D.co0,D.cLs)
D.f5a=new B.cu(["beat",0.12,0.45,2])
D.f5D=new B.cu(["toggle",0.38,0.2,0])
D.f5K=new B.cu(["wash",0.7,0.15,4])
D.f4x=new B.cu(["count3",0.38,0.45,0])
D.f5F=new B.cu(["burst",0.72,0.4,0])
D.f50=new B.cu(["light",0.55,0.7,1])
D.f4j=new B.cu(["pop",0.8,0.8,4])
D.do0=w([D.f5a,D.f5D,D.f5K,D.f4x,D.f5F,D.f50,D.f4j],x.e)
D.eCM=new B.y(3,6)
D.cr9=w([O.lw,S.vx,P.a9m,F.Uy,D.aRb,D.eCM],x.u)
D.hBc=new C.GJ("Disco","A beat drives lights, washes and bursts",D.do0,D.cr9)
D.f5R=new B.cu(["button",0.12,0.2,0])
D.f4d=new B.cu(["delay",0.34,0.2,1])
D.f5Q=new B.cu(["light",0.56,0.2,1])
D.f5J=new B.cu(["delay",0.56,0.45,1])
D.f5b=new B.cu(["ball",0.34,0.6,0])
D.f4h=new B.cu(["delay",0.34,0.8,1])
D.f46=new B.cu(["burst",0.7,0.8,5])
D.cbb=w([D.f5R,D.f4d,D.f5Q,D.f5J,D.f5b,D.f4h,D.f46],x.e)
D.eEY=new B.y(5,6)
D.dtE=w([O.lw,S.vx,F.Ux,F.Uy,D.aRf,D.eEY],x.u)
D.hBd=new C.GJ("Domino","Tap the button and watch it run down the line",D.cbb,D.dtE)
D.aBz=w([D.hBf,D.hBh,D.hBg,D.hBe,D.hBc,D.hBd],B.as("O<GJ>"))
D.diZ=w([0.05,0.15,0.25],x.n)
D.djU=w([1.5,3,4.5,9,12],x.n)
D.f09=new B.b5("dice","Dice",A.oA)
D.f1o=new B.b5("coin","Coin",Q.zm)
D.f3A=new B.b5("num","Number",A.zv)
D.dk7=w([D.f09,D.f1o,D.f3A],x.r)
D.dkb=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aBF=w([A.c0,A.aQ,A.b5,A.aH,A.bq,A.bT,A.cG,A.hu],x.O)
D.dle=w([A.bT,A.aH,A.dA,A.b5],x.O)
D.dmg=w([],x.h)
D.ets=new C.eh("battery","Battery","\ud83d\udd0b",A.b5,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.ety=new C.eh("solar","Solar panel","\u2600\ufe0f",A.bj,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.euc=new C.eh("crank","Hand crank","\ud83d\udd04",A.cG,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.etP=new C.eh("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.etk=new C.eh("buck","Step-down converter","\ud83d\udd3d",A.hu,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.etN=new C.eh("regulator","5 V regulator","\ud83e\uddca",A.bL,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.euh=new C.eh("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.etZ=new C.eh("ldr","Light sensor","\ud83c\udf1e",A.dA,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.etD=new C.eh("switch","Switch","\ud83c\udf9a\ufe0f",A.bq,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eue=new C.eh("fuse","Fuse","\ud83e\uddef",A.c0,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.etc=new C.eh("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hu,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eu_=new C.eh("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eu1=new C.eh("bulb","Light bulb","\ud83d\udca1",A.dA,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.etA=new C.eh("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.etE=new C.eh("motor","Motor","\u2699\ufe0f",A.bL,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.etW=new C.eh("buzzer","Buzzer","\ud83d\udd14",A.bT,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.ett=new C.eh("heater","Heater","\ud83d\udd25",A.cG,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.etR=new C.eh("capacitor","Capacitor","\ud83e\udeab",A.cp,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.etJ=new C.eh("radio","Radio","\ud83d\udcfb",A.nu,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.etG=new C.eh("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.etj=new C.eh("voltmeter","Voltmeter","\ud83e\udded",A.bx,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.etq=new C.eh("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.etw=new C.eh("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.euj=new C.eh("speaker","Speaker","\ud83d\udd0a",A.bT,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eu8=new C.eh("clock","Digital clock","\u23f0",A.b5,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.etM=new C.eh("calculator","Calculator","\ud83e\uddee",A.Mk,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.etp=new C.eh("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cp,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eui=new C.eh("router","WiFi router","\ud83d\udcf6",A.hu,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eul=new C.eh("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.etf=new C.eh("toycar","Toy car","\ud83d\ude97",A.cG,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eum=new C.eh("kettle","Kettle","\ud83e\uded6",A.mQ,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.etn=new C.eh("lamp","Desk lamp","\ud83e\ude94",A.dA,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.etz=new C.eh("lights","Party lights","\ud83c\udf84",A.nu,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.etK=new C.eh("fridge","Fridge","\ud83e\uddca",A.hw,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eth=new C.eh("washer","Washing machine","\ud83e\udee7",A.cp,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eu9=new C.eh("blender","Blender","\ud83e\udd64",A.c0,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.etH=new C.eh("drone","Drone","\ud83d\ude81",A.bL,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.etm=new C.eh("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.etL=new C.eh("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eu6=new C.eh("neon","Neon sign","\ud83e\udea7",A.bT,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eti=new C.eh("microwave","Microwave","\ud83c\udf72",A.cG,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eu0=new C.eh("doorbell","Doorbell","\ud83d\udd14",A.bj,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.etv=new C.eh("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.etV=new C.eh("console","Game console","\ud83c\udfae",A.bq,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eub=new C.eh("heartmon","Heart monitor","\ud83e\ude7a",A.hq,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.etg=new C.eh("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.etQ=new C.eh("lighthouse","Lighthouse","\ud83d\uddfc",A.dA,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.etY=new C.eh("discoball","Disco ball","\ud83e\udea9",A.nu,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eug=new C.eh("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ete=new C.eh("toaster","Toaster","\ud83c\udf5e",A.e_,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.euk=new C.eh("ledstrip","LED strip","\ud83c\udf08",A.bT,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eu5=new C.eh("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.etS=new C.eh("hairdryer","Hair dryer","\ud83d\udca8",A.hY,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eu3=new C.eh("headphones","Headphones","\ud83c\udfa7",A.bq,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eto=new C.eh("smartwatch","Apple Watch Ultra","\u231a",A.bx,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.euf=new C.eh("tablet","iPad Pro M5","\ud83d\udcf2",A.cp,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.etb=new C.eh("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hq,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.etI=new C.eh("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.etB=new C.eh("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.etX=new C.eh("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.u8,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.etd=new C.eh("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.etr=new C.eh("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d5,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eud=new C.eh("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cA,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.etT=new C.eh("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bd,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.etO=new C.eh("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c6,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eu4=new C.eh("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.etC=new C.eh("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b5,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.etU=new C.eh("honor","Honor Magic V5","\ud83d\udcf1",A.cp,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eu2=new C.eh("vivo","vivo X300 Pro","\ud83d\udcf1",A.cG,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eu7=new C.eh("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eta=new C.eh("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ch,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.etF=new C.eh("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cA,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.etx=new C.eh("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.etl=new C.eh("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dA,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.etu=new C.eh("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eua=new C.eh("vision","Apple Vision Pro","\ud83e\udd7d",A.bq,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Sq=w([D.ets,D.ety,D.euc,D.etP,D.etk,D.etN,D.euh,D.etZ,D.etD,D.eue,D.etc,D.eu_,D.eu1,D.etA,D.etE,D.etW,D.ett,D.etR,D.etJ,D.etG,D.etj,D.etq,D.etw,D.euj,D.eu8,D.etM,D.etp,D.eui,D.eul,D.etf,D.eum,D.etn,D.etz,D.etK,D.eth,D.eu9,D.etH,D.etm,D.etL,D.eu6,D.eti,D.eu0,D.etv,D.etV,D.eub,D.etg,D.etQ,D.etY,D.eug,D.ete,D.euk,D.eu5,D.etS,D.eu3,D.eto,D.euf,D.etb,D.etI,D.etB,D.etX,D.etd,D.etr,D.eud,D.etT,D.etO,D.eu4,D.etC,D.etU,D.eu2,D.eu7,D.eta,D.etF,D.etx,D.etl,D.etu,D.eua],B.as("O<eh>"))
D.dmV=w([5,10,15,25,45,60],x.t)
D.dnh=w([-0.045,0.03,-0.015],x.n)
D.aC7=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vb=w([0.05,0.2,0.35],x.n)
D.b9b=new B.ac(0,A.G,A.hx,A.dJ,6)
D.dpY=w([D.b9b],x.V)
D.eAK=new B.y(0,"AND")
D.eBB=new B.y(1,"Adder")
D.eCg=new B.y(2,"Blinker")
D.eCN=new B.y(3,"Memory")
D.dqM=w([D.eAK,D.eBB,D.eCg,D.eCN],x.I)
D.aCl=w([-104,0,104],x.n)
D.aCn=w([-14,3],x.n)
D.drH=w([-8,0,8],x.n)
D.aCw=w([-92,0,92],x.n)
D.ds6=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f8O=new C.vr("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f8V=new C.vr("Medium tank","Balanced.",0.35,1)
D.f8U=new C.vr("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.SF=w([D.f8O,D.f8V,D.f8U],x._)
D.nQ=w([0.04,0.2,0.36],x.n)
D.aCI=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f39=new B.b5(D.b1m,"Fold",Q.aqD)
D.f26=new B.b5(D.adg,"Flip",A.CV)
D.bQ0=new B.a0(62889,"MaterialIcons",!1)
D.f3w=new B.b5(D.b1n,"Rise",D.bQ0)
D.aqQ=new B.a0(983870,"MaterialIcons",!1)
D.f_u=new B.b5(D.adh,"Assemble",D.aqQ)
D.f_I=new B.b5(D.b1o,"Spin",D.ape)
D.f_C=new B.b5(D.b1p,"Pop",A.k8)
D.dtB=w([D.f39,D.f26,D.f3w,D.f_u,D.f_I,D.f_C],B.as("O<+(Lj,n,a0)>"))
D.aCN=w([A.bT,A.dA,A.bx,A.aH,A.bq,A.c0],x.O)
D.du0=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dv4=w([3,4.5,5,6,9],x.n)
D.b9L=new B.ac(0,A.G,A.aU,A.H,16)
D.dvx=w([D.b9L],x.V)
D.fQN=new B.B("\ud83e\uddcd",null,S.KP,null,null,null,null,null,null,null,null,null)
D.cae=new B.IX(5,null,null,A.bA,A.bT,null,null,null,null)
D.ffR=new B.a5(150,null,D.cae,null)
D.fy7=new B.F(!0,A.ab,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU8=new B.B("Getting the body ready...",null,D.fy7,null,null,null,null,null,null,null,null,null)
D.fQQ=new B.B("Real 3D anatomy, kept on your phone",null,A1.xn,null,null,null,null,null,null,null,null,null)
D.dvA=w([D.fQN,A.aB,D.ffR,A.af,D.fU8,A.ax,D.fQQ],x.p)
D.dw9=w(["solar","turbine","crank","pot"],x.s)
D.dwz=w([0,0.35,0.75,1],x.n)
D.dxT=w(["volts","level","ohms","on"],x.s)
D.dzj=w([A.jK,A.D6,A.CM,A.qP,Z.HX,A.uZ,A.zr,A.qS,A.ii,A.oI,A.hz,A.ed,A.hN,A.ij,A.n2,A.lO,A.uY,A.tc,A.lk,A.Hu,A.uX,A.CU,A.CQ,A.a3i,A.Pe,A.D2,A.Po,A.aq3,H.aqM,A.k8],x.w)
D.ejl={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.htv=new C.yL("Switch",F.pA,A.bj,0,"Tap it to turn it ON or OFF.")
D.htr=new C.yL("Blinker",A.oG,A.bx,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hts=new C.yL("AND",D.aqQ,A.cp,2,"ON only when BOTH inputs are ON.")
D.bRv=new B.a0(63671,"MaterialIcons",!1)
D.htq=new C.yL("OR",D.bRv,A.bq,2,"ON when EITHER input is ON.")
D.htt=new C.yL("XOR",Aa.a2F,A.bT,2,"ON when the inputs are DIFFERENT.")
D.htn=new C.yL("NAND",A.uK,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bQB=new B.a0(63176,"MaterialIcons",!1)
D.hto=new C.yL("NOR",D.bQB,A.hu,2,"ON only when BOTH inputs are OFF.")
D.htp=new C.yL("NOT",Y.D7,A.cG,1,"Flips the signal: ON becomes OFF.")
D.htu=new C.yL("Light",A.mi,A.dA,1,"Glows when its input is ON.")
D.htw=new C.yL("Buzzer",A.oH,A.c0,1,"Beeps while its input is ON.")
D.Aa=new B.bv(D.ejl,[D.htv,D.htr,D.hts,D.htq,D.htt,D.htn,D.hto,D.htp,D.htu,D.htw],B.as("bv<n,yL>"))
D.d0N=w([A.A],x.M)
D.d19=w([A.aA,A.aE],x.M)
D.daO=w([A.aA,A.A,A.aE],x.M)
D.dcq=w([A.aA,A.lz,A.A,A.lA,A.aE],x.M)
D.dqI=w([A.aA,A.lz,A.a7,A.aa,A.lA,A.aE],x.M)
D.dE6=new B.d_([1,D.d0N,2,D.d19,3,D.daO,4,A.aDm,5,D.dcq,6,D.dqI],B.as("d_<H,ai<da>>"))
D.elT={Calm:0,Box:1,Sleep:2}
D.cIQ=w([4,2,6,0],x.n)
D.cIX=w([4,4,4,4],x.n)
D.cIY=w([4,7,8,0],x.n)
D.T6=new B.bv(D.elT,[D.cIQ,D.cIX,D.cIY],B.as("bv<n,ai<G>>"))
D.ejy={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xK=new C.a1D(0,"source")
D.dbR=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hzT=new C.qt("Clock",A.oG,D.xK,A.bx,D.dbR)
D.hzP=new C.qt("Button",A.Da,D.xK,A.aQ,A.Z)
D.dvg=w(["random","quick","slow"],x.s)
D.hA_=new C.qt("Dice",A.oA,D.xK,A.bT,D.dvg)
D.bR9=new B.a0(63484,"MaterialIcons",!1)
D.Fd=new C.a1D(1,"logic")
D.dA9=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hzW=new C.qt("Delay",D.bR9,D.Fd,A.cp,D.dA9)
D.dn2=w(["fast","mid","slow"],x.s)
D.hA0=new C.qt("Echo",A.aqk,D.Fd,A.bq,D.dn2)
D.hzY=new C.qt("Every 2nd",Y.D7,D.Fd,A.hu,A.Z)
D.bQP=new B.a0(63309,"MaterialIcons",!1)
D.hzV=new C.qt("Every 3rd",D.bQP,D.Fd,A.aH,A.Z)
D.bSM=new B.a0(983902,"MaterialIcons",!1)
D.cay=w(["50%","25%","75%"],x.s)
D.hA2=new C.qt("Chance",D.bSM,D.Fd,A.cG,D.cay)
D.rm=new C.a1D(2,"out")
D.hzR=new C.qt("Light",A.mi,D.rm,A.dA,A.Z)
D.hzS=new C.qt("Burst",A.k8,D.rm,A.bT,A.Z)
D.hzQ=new C.qt("Ripple",A.zy,D.rm,A.b9,A.Z)
D.hzZ=new C.qt("Ball",A.aqv,D.rm,A.cG,A.Z)
D.hzX=new C.qt("Comet",A.oI,D.rm,A.bq,A.Z)
D.bSw=new B.a0(983669,"MaterialIcons",!1)
D.hA1=new C.qt("Shake",D.bSw,D.rm,A.c0,A.Z)
D.hA3=new C.qt("Pop",A.Hv,D.rm,A.b5,A.Z)
D.hzU=new C.qt("Wash",A.Ps,D.rm,A.pf,A.Z)
D.n8=new B.bv(D.ejy,[D.hzT,D.hzP,D.hA_,D.hzW,D.hA0,D.hzY,D.hzV,D.hA2,D.hzR,D.hzS,D.hzQ,D.hzZ,D.hzX,D.hA1,D.hA3,D.hzU],B.as("bv<n,qt>"))
D.ejL={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.AC=new C.Ki(0,"tv")
D.fao=new C.mx("Samsung Neo QLED 8K",D.AC,F.yf,A.aH)
D.faf=new C.mx("LG OLED evo G5",D.AC,A.eq,A.hq)
D.fa6=new C.mx("Sony Bravia 9",D.AC,A.rz,A.bv)
D.faa=new C.mx("Apple TV 4K",D.AC,A.ec,A.bP)
D.fa7=new C.mx("Bang and Olufsen Beovision",D.AC,F.FJ,F.u8)
D.a9G=new C.Ki(1,"iphone")
D.aS4=new C.mx("iPhone 18 Pro Max",D.a9G,D.akg,A.ch)
D.Ez=new C.Ki(3,"fold")
D.bvV=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fak=new C.mx("iPhone Fold",D.Ez,D.bvV,A.b7)
D.AD=new C.Ki(2,"android")
D.fal=new C.mx("Samsung Galaxy S26 Ultra",D.AD,F.Yg,A.d5)
D.boB=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fad=new C.mx("Samsung Galaxy Z Fold7",D.Ez,D.boB,A.cA)
D.fa9=new C.mx("Google Pixel 10 Pro XL",D.AD,A.dc,A.bd)
D.fah=new C.mx("Xiaomi 16 Ultra",D.AD,A.ig,A.c6)
D.fac=new C.mx("Huawei Mate 80 Pro Max",D.AD,A.et,A.ay)
D.fa8=new C.mx("OPPO Find X9 Ultra",D.AD,A.e9,A.b5)
D.faq=new C.mx("Honor Magic V5",D.Ez,A.d7,A.cp)
D.fae=new C.mx("vivo X300 Pro",D.AD,A.fH,A.cG)
D.aS5=new C.Ki(4,"tablet")
D.faj=new C.mx("iPad Pro M5",D.aS5,A.dc,A.aH)
D.a9H=new C.Ki(5,"reader")
D.far=new C.mx("Kindle Scribe",D.a9H,A.e6,A.bv)
D.AE=new C.Ki(6,"computer")
D.fai=new C.mx("MacBook Pro M5 Max",D.AE,A.dc,A.ch)
D.fan=new C.mx("iMac 32 inch",D.AE,A.bP,A.cA)
D.fag=new C.mx("Pro Display XDR 8K",D.AE,A.ig,A.b9)
D.fab=new C.mx("Sony Laser Projector",D.AE,A.cs,A.dA)
D.fam=new C.mx("Luxury car touchscreen",D.AE,M.ny,A.ay)
D.fap=new C.mx("Apple Vision Pro",D.AE,A.dI,A.bq)
D.mt=new B.bv(D.ejL,[D.fao,D.faf,D.fa6,D.faa,D.fa7,D.aS4,D.fak,D.fal,D.fad,D.fa9,D.fah,D.fac,D.fa8,D.faq,D.fae,D.faj,D.far,D.fai,D.fan,D.fag,D.fab,D.fam,D.fap],B.as("bv<n,mx>"))
D.ejX={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.byL=new C.fQ(20,4,13,!1)
D.bzb=new C.fQ(14,5,13.5,!1)
D.bz2=new C.fQ(9,2.4,10,!1)
D.bzg=new C.fQ(7,5,12.5,!1)
D.bz5=new C.fQ(8,3.5,12,!1)
D.byH=new C.fQ(15,2,6,!1)
D.bze=new C.fQ(45,6,13.5,!0)
D.byX=new C.fQ(10,8,13.5,!1)
D.byP=new C.fQ(25,3,12,!0)
D.byV=new C.fQ(35,4,12,!0)
D.byW=new C.fQ(40,4.5,9.5,!0)
D.byY=new C.fQ(55,3,9,!0)
D.byI=new C.fQ(18,3,9,!1)
D.bzd=new C.fQ(22,4,13.5,!1)
D.bz6=new C.fQ(16,5,13.5,!1)
D.byT=new C.fQ(30,4,9,!0)
D.bzp=new C.fQ(5,3.5,13,!1)
D.bz0=new C.fQ(25,3,13.5,!0)
D.bz9=new C.fQ(14,2.5,9,!1)
D.bz_=new C.fQ(6,6,13,!1)
D.bzh=new C.fQ(30,1.2,5,!0)
D.bzo=new C.fQ(35,3,4.5,!0)
D.bzk=new C.fQ(20,4.5,7.5,!0)
D.byZ=new C.fQ(55,5.5,13.5,!0)
D.byG=new C.fQ(45,5.5,13.5,!0)
D.bza=new C.fQ(40,5.5,13.5,!0)
D.bzn=new C.fQ(60,6,13.5,!0)
D.akL=new C.fQ(28,4,7,!0)
D.GF=new C.fQ(25,4,7,!0)
D.byS=new C.fQ(30,4,7,!0)
D.byN=new C.fQ(22,4,7,!0)
D.byO=new C.fQ(24,4,7,!0)
D.bz1=new C.fQ(60,3,5.5,!0)
D.byJ=new C.fQ(18,9,14,!0)
D.byQ=new C.fQ(25,9,14,!0)
D.akM=new C.fQ(30,8,14,!0)
D.byM=new C.fQ(20,8,14,!0)
D.byU=new C.fQ(30,9,14,!0)
D.bzi=new C.fQ(22,5,9.5,!0)
D.byK=new C.fQ(30,2.5,10.5,!0)
D.bz7=new C.fQ(50,5.5,13.5,!0)
D.bzm=new C.fQ(12,2,9.5,!1)
D.bz4=new C.fQ(16,1.3,9.5,!0)
D.bzf=new C.fQ(40,2.5,7,!0)
D.bzl=new C.fQ(60,1.2,4.8,!0)
D.bzj=new C.fQ(18,5,13.5,!0)
D.bzc=new C.fQ(8,2,9.5,!1)
D.bz3=new C.fQ(12,2.5,8,!1)
D.byR=new C.fQ(20,3.5,13.5,!0)
D.bz8=new C.fQ(3.5,3,13,!1)
D.Ab=new B.bv(D.ejX,[D.byL,D.bzb,D.bz2,D.bzg,D.bz5,D.byH,D.bze,D.byX,D.byP,D.byV,D.byW,D.byY,D.byI,D.bzd,D.bz6,D.byT,D.bzp,D.bz0,D.bz9,D.bz_,D.bzh,D.bzo,D.bzk,D.byZ,D.byG,D.bza,D.bzn,D.akL,D.GF,D.byS,D.GF,D.byN,D.GF,D.byO,D.akL,D.GF,D.bz1,D.byJ,D.byQ,D.akM,D.byM,D.byU,D.bzi,D.byK,D.bz7,D.bzm,D.bz4,D.bzf,D.bzl,D.GF,D.akM,D.bzj,D.bzc,D.bz3,D.byR,D.bz8],B.as("bv<n,fQ>"))
D.ejv={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.f__=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eEV=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eEQ=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eRm=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eSj=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eRi=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eCW=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.ePd=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.f_7=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eSF=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eIj=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eCA=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eHi=new B.y("Movement","They pull your legs together and help you balance.")
D.eJg=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eF3=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eXq=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eYA=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eOW=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eYj=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eNw=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eSO=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eCH=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eJD=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eSs=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eNS=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eYr=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eQN=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eCU=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eTo=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eX3=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eVa=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eAW=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eQv=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eQz=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eKn=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eFh=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eJ4=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.ePo=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eW_=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.f_4=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eSL=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eAE=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.ePA=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eBu=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eWf=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eXm=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eQ1=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eWu=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eCJ=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eXY=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eGE=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eVD=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eK1=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eNM=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eT4=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eY7=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eY_=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eY3=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eOj=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eTX=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eV7=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eXK=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eQ0=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eM5=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eKO=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eQq=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eSY=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eMC=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eNj=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eH2=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eXi=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eHT=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eBr=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eKm=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eBm=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eFJ=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eKr=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eI2=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eTk=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eJj=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eZM=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eKY=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eOc=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eQV=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eIb=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eHV=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dFd=new B.bv(D.ejv,[D.f__,D.eEV,D.eEQ,D.eRm,D.eSj,D.eRi,D.eCW,D.ePd,D.f_7,D.eSF,D.eIj,D.eCA,D.eHi,D.eJg,D.eF3,D.eXq,D.eYA,D.eOW,D.eYj,D.eNw,D.eSO,D.eCH,D.eJD,D.eSs,D.eNS,D.eYr,D.eQN,D.eCU,D.eTo,D.eX3,D.eVa,D.eAW,D.eQv,D.eQz,D.eKn,D.eFh,D.eJ4,D.ePo,D.eW_,D.f_4,D.eSL,D.eAE,D.ePA,D.eBu,D.eWf,D.eXm,D.eQ1,D.eWu,D.eCJ,D.eXY,D.eGE,D.eVD,D.eK1,D.eNM,D.eT4,D.eY7,D.eY_,D.eY3,D.eOj,D.eTX,D.eV7,D.eXK,D.eQ0,D.eM5,D.eKO,D.eQq,D.eSY,D.eMC,D.eNj,D.eH2,D.eXi,D.eHT,D.eBr,D.eKm,D.eBm,D.eFJ,D.eKr,D.eI2,D.eTk,D.eJj,D.eZM,D.eKY,D.eOc,D.eQV,D.eIb,D.eHV],B.as("bv<n,+(n,n)>"))
D.dMy=new C.VH(null)
D.dML=new C.VI(null)
D.dOP=new C.VM(null)
D.dPD=new C.Wm(null)
D.dPH=new C.Wn(null)
D.dQf=new C.Wv(null)
D.dU4=new C.X4(null)
D.dUL=new C.X5(null)
D.dYY=new C.Xa(null)
D.edR=new C.Xb(null)
D.edU=new C.Xf(null)
D.eg3=new C.Xz(null)
D.eg4=new C.a9x(null)
D.ei7=new C.XI(null)
D.em5=new B.o(0,118)
D.aLu=new B.o(0,13)
D.em6=new B.o(0,17)
D.em9=new B.o(0,330)
D.emf=new B.o(0,-13)
D.emg=new B.o(0,-17)
D.emh=new B.o(0,-18)
D.emi=new B.o(0,-19)
D.emk=new B.o(0,-28)
D.emm=new B.o(0,-31)
D.emn=new B.o(0,-32)
D.emt=new B.o(-9.5,-11)
D.emw=new B.o(10,20)
D.emz=new B.o(10,-13)
D.emB=new B.o(10,-22)
D.emC=new B.o(10,-4)
D.emG=new B.o(11,0)
D.a8u=new B.o(11,8)
D.emM=new B.o(12,2)
D.emN=new B.o(14,0)
D.emO=new B.o(14,12)
D.aLG=new B.o(14,8)
D.emP=new B.o(14,-17)
D.aLI=new B.o(14,-3)
D.aLJ=new B.o(14,-4)
D.emS=new B.o(15,0)
D.emT=new B.o(15,-12)
D.emW=new B.o(16,-8)
D.emX=new B.o(18,14)
D.emY=new B.o(18,-12)
D.aLO=new B.o(20,0)
D.en5=new B.o(20,15)
D.en6=new B.o(20,-17)
D.en7=new B.o(20,-3)
D.en8=new B.o(21,8)
D.enc=new B.o(22,10)
D.aLQ=new B.o(22,8)
D.end=new B.o(24,0)
D.ene=new B.o(24,2)
D.enh=new B.o(24,-18)
D.eni=new B.o(24,-22)
D.enm=new B.o(25,8)
D.enn=new B.o(26,0)
D.enr=new B.o(28,-30)
D.eny=new B.o(30,18)
D.enz=new B.o(30,2)
D.enC=new B.o(31,19)
D.enE=new B.o(32,0)
D.aLU=new B.o(34,0)
D.aLV=new B.o(34,-32)
D.JD=new B.o(36,0)
D.enR=new B.o(3,-1)
D.enU=new B.o(40,3)
D.eo7=new B.o(4,11)
D.eoa=new B.o(4,-2)
D.eof=new B.o(5,17)
D.eog=new B.o(5,6)
D.eol=new B.o(6,11)
D.eor=new B.o(8,7)
D.eos=new B.o(8,-10)
D.eot=new B.o(8,-14)
D.aM_=new B.o(9,0)
D.eoD=new B.o(-20.5,-17.6)
D.eoE=new B.o(-9,18.5)
D.eoH=new B.o(-2.6,-1)
D.eoQ=new B.o(2.6,1)
D.eoX=new B.o(-9,12.2)
D.epg=new B.o(-9,20.5)
D.epC=new B.o(-10,0)
D.epD=new B.o(-10,12)
D.aM7=new B.o(-10,4)
D.epH=new B.o(-11,0)
D.epK=new B.o(-11,-2)
D.epO=new B.o(-13,-5)
D.epP=new B.o(-14,0)
D.epQ=new B.o(-14,13)
D.epR=new B.o(-14,2)
D.epS=new B.o(-14,-12)
D.epT=new B.o(-14,-19)
D.epV=new B.o(-14,-23)
D.epW=new B.o(-15,6)
D.epZ=new B.o(-16,14)
D.eq0=new B.o(-16,-8)
D.eq1=new B.o(-17,10)
D.eq2=new B.o(-17,-18)
D.eq3=new B.o(-17,-8)
D.eq5=new B.o(-18,20)
D.eq6=new B.o(-18,-9)
D.aM9=new B.o(-20,0)
D.eq8=new B.o(-20,16)
D.eq9=new B.o(-20,-9)
D.U1=new B.o(-22,8)
D.eqa=new B.o(-22,-10)
D.eqb=new B.o(-22,-11)
D.eqc=new B.o(-24,10)
D.eqd=new B.o(-24,11)
D.eqe=new B.o(-24,14)
D.eqf=new B.o(-24,-22)
D.eqh=new B.o(-25,-11)
D.eqi=new B.o(-26,0)
D.eqj=new B.o(-26,-18)
D.eqk=new B.o(-2,9)
D.eql=new B.o(-2,-10)
D.eqm=new B.o(-2,-20)
D.eqp=new B.o(-2,-9)
D.eqr=new B.o(-32,0)
D.aMb=new B.o(-34,0)
D.eqw=new B.o(-40,3)
D.eqy=new B.o(-4,11)
D.eqz=new B.o(-4,-17)
D.eqA=new B.o(-4,-2)
D.eqE=new B.o(-5,0)
D.eqF=new B.o(-5,20)
D.eqG=new B.o(-5,6)
D.eqH=new B.o(-6,26)
D.eqI=new B.o(-6,6)
D.eqJ=new B.o(-6,-42)
D.eqL=new B.o(-7,-19)
D.eqM=new B.o(-7,-24)
D.eqP=new B.o(-8,-9)
D.a8D=new B.o(-9,0)
D.eqQ=new B.o(-9,1)
D.eqS=new B.o(-9,-23)
D.fI0=new B.B("Thinking\u2026",null,A.ho,null,null,null,null,null,null,null,null,null)
D.erU=new B.D(A.jG,D.fI0,null)
D.fYW=new B.B("Start from a ready-made board",null,A.fE,null,null,null,null,null,null,null,null,null)
D.es6=new B.D(A3.wr,D.fYW,null)
D.bGN=new B.S(4,0,4,14)
D.fDe=new B.F(!0,A.aD,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ0=new B.B("Games and little helpers for a spare minute.",null,D.fDe,null,null,null,null,null,null,null,null,null)
D.esi=new B.D(D.bGN,D.fJ0,null)
D.dnD=w([A.iJ,A.bo],x.O)
D.aR3=new B.bY(A.A,0.5,A.x,null,0,D.dnD,null,null)
D.ezv=new B.bY(A.A,0.5,A.x,null,0,D.aD3,null,null)
D.deg=w([A.c,A.bL],x.O)
D.ezx=new B.bY(A.A,0.5,A.x,null,0,D.deg,null,null)
D.dwm=w([A.bP,A.dI],x.O)
D.aR4=new B.bY(A.A,0.5,A.x,null,0,D.dwm,null,null)
D.cSP=w([A.c,A.bP],x.O)
D.ezB=new B.bY(A.rn,0.5,A.x,null,0,D.cSP,null,null)
D.bvZ=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.duj=w([A.fo,D.bvZ],x.O)
D.ezG=new B.bY(A.rn,0.5,A.x,null,0,D.duj,null,null)
D.cM_=w([A.dc,A.cs],x.O)
D.ezH=new B.bY(A.A,0.5,A.x,null,0,D.cM_,null,null)
D.d_L=w([A.fz,A.aQ,A.d_],x.O)
D.ezK=new B.bY(A.rn,0.5,A.x,null,0,D.d_L,null,null)
D.doi=w([A.dI,M.ny],x.O)
D.ezL=new B.bY(A.rn,0.5,A.x,null,0,D.doi,null,null)
D.ezP=new B.bY(A.A,0.5,A.x,null,0,D.azg,null,null)
D.dxb=w([A.dI,A.i9],x.O)
D.ezX=new B.bY(A.A,0.5,A.x,null,0,D.dxb,null,null)
D.aR9=new B.aN(9,9)
D.eA4=new B.aN(1.4,1.4)
D.f6W=new B.a1(10,-8,18,-2)
D.f6X=new B.a1(14,-14,20,14)
D.f6Z=new B.a1(20,-2,30,2)
D.f73=new B.a1(4,-13,30,-3)
D.f79=new B.a1(8,-7,12,7)
D.f7l=new B.a1(-12,12,12,19)
D.f7m=new B.a1(-12,14,12,22)
D.f7n=new B.a1(-12,-22,12,8)
D.f7o=new B.a1(-12,-25,12,19)
D.f7p=new B.a1(-12,-26,12,-6)
D.f7q=new B.a1(-12,-4,12,14)
D.f7s=new B.a1(-14,20,14,24)
D.f7t=new B.a1(-14,6,14,10)
D.f7u=new B.a1(-14,-17,14,15)
D.f7v=new B.a1(-14,-26,14,18)
D.f7w=new B.a1(-14,-4,14,20)
D.f7y=new B.a1(-15,-29,15,25)
D.f7z=new B.a1(-16,-16,16,16)
D.f7C=new B.a1(-16,-22,-9,18)
D.f7D=new B.a1(-16,-24,16,-10)
D.f7F=new B.a1(-16,-2,16,20)
D.f7H=new B.a1(-18,20,18,24)
D.f7I=new B.a1(-18,-18,18,20)
D.f7J=new B.a1(-20,12,20,22)
D.f7K=new B.a1(-20,-28,20,26)
D.f7L=new B.a1(-22,14,22,18)
D.aRM=new B.a1(-22,-26,22,24)
D.f7M=new B.a1(-22,-3,22,3)
D.f7N=new B.a1(-22,-4,22,12)
D.f7P=new B.a1(-24,-12,10,22)
D.f7Q=new B.a1(-24,-14,22,8)
D.f7R=new B.a1(-24,-6,24,20)
D.aRN=new B.a1(-24,-9,24,9)
D.f7S=new B.a1(-25,14,25,19)
D.f7T=new B.a1(-26,-14,14,8)
D.f7U=new B.a1(-26,-4,26,20)
D.f7V=new B.a1(-26,-6,4,6)
D.aRO=new B.a1(-28,-13,28,13)
D.f7W=new B.a1(-28,-16,28,16)
D.f7X=new B.a1(-28,-16,28,8)
D.f7Y=new B.a1(-28,-22,28,22)
D.f7Z=new B.a1(-30,-12,30,14)
D.f8_=new B.a1(-30,-14,0,14)
D.f80=new B.a1(-30,-18,30,20)
D.f81=new B.a1(-30,-28,30,14)
D.f82=new B.a1(-30,-2,30,18)
D.f83=new B.a1(-30,-4,30,18)
D.f84=new B.a1(-32,-17,32,17)
D.f85=new B.a1(-32,-28,32,18)
D.f86=new B.a1(-33,-21,33,17)
D.f87=new B.a1(-34,14,34,26)
D.a9x=new B.a1(-34,-18,34,18)
D.f88=new B.a1(-34,-4,34,7)
D.f89=new B.a1(-36,-24,36,20)
D.f8a=new B.a1(-38,-22,38,22)
D.f8c=new B.a1(-3,12,3,22)
D.f8d=new B.a1(-3,5,3,15)
D.f8h=new B.a1(-46,-34,46,28)
D.f8j=new B.a1(-48,-3,48,3)
D.f8m=new B.a1(-6,18,24,24)
D.f8n=new B.a1(-6,5,6,12)
D.f8o=new B.a1(-6,-22,6,-15)
D.f8s=new B.a1(-9,-16,9,22)
D.f8t=new B.a1(-4.5,-24,4.5,-21.2)
D.f8v=new B.a1(14,-9,17.5,9)
D.elh={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aSU=new B.de(D.elh,5,x.Q)
D.ekM={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fc6=new B.de(D.ekM,10,x.Q)
D.feq=new B.av(24,44)
D.feO=new B.av(54,38)
D.feV=new B.av(66,38)
D.ben=new B.fk(2,null,null,null,null,A.bq,null,null,null,null)
D.ffY=new B.a5(16,16,D.ben,null)
D.aTW=new B.hH(3,12,12,0.82,null)
D.fsM=new B.F(!0,A1.y4,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fng=new B.eo("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cL,null,null,null,null,null,null,D.fsM)
D.fxW=new B.F(!0,A.kM,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnm=new B.eo("AI",null,null,A.cL,null,null,null,null,null,null,D.fxW)
D.fnE=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foa=new B.F(!0,A.bp,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foy=new B.F(!0,A.cp,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp6=new B.F(!0,A.bW,null,null,null,null,11,A.U,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpr=new B.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpX=new B.F(!0,A.aR,null,null,null,null,12,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcP=new B.cU(A.hx,A.dJ,6)
D.dhi=w([D.fcP],B.as("O<cU>"))
D.fqV=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dhi,null,null,null)
D.fr_=new B.F(!0,A.es,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr4=new B.F(!0,A.bW,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frI=new B.F(!0,A.bW,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frQ=new B.F(!0,A.aD,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsQ=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftn=new B.F(!0,A.aD,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new B.F(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftY=new B.F(!0,A.c,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aDp,null,null,null)
D.fu3=new B.F(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuM=new B.F(!0,A.bB,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvU=new B.F(!0,A.um,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwu=new B.F(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwz=new B.F(!0,A.bW,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwE=new B.F(!0,A.aD,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxr=new B.F(!0,A.mT,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxB=new B.F(!0,A.dI,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW5=new B.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyO=new B.F(!0,A.hd,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz6=new B.F(!0,A.bW,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzD=new B.F(!0,A.b5,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB8=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBE=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBW=new B.F(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCi=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCl=new B.F(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDt=new B.F(!0,A.um,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDQ=new B.F(!0,A.b5,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr7=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEe=new B.B("\u26a0\ufe0f ",null,D.fr7,null,null,null,null,null,null,null,null,null)
D.fEr=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.AX,null,null,null,null,null,null,null,null,null)
D.fG2=new B.B("Pick one, then change it and see what happens.",null,A.AX,null,null,null,null,null,null,null,null,null)
D.fsh=new B.F(!0,A.ab,null,null,null,null,null,A.U,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH1=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fsh,null,null,null,null,null,null,null,null,null)
D.fIB=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fJe=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fJR=new B.B("Make it yours",null,A.jQ,null,null,null,null,null,null,null,null,null)
D.fN3=new B.B("5G",null,X.aVq,null,null,null,null,null,null,null,null,null)
D.fO4=new B.B("Pick how big the screen is on the board",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fzo=new B.F(!0,A.bW,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOg=new B.B("WHAT HAPPENS",null,D.fzo,null,null,null,null,null,null,null,null,null)
D.fQ1=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fQH=new B.B("Change the words and pictures on the three slabs.",null,A.AX,null,null,null,null,null,null,null,null,null)
D.fQU=new B.B("All the parts and wires will be removed.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fRd=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fRO=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fT2=new B.B("\ud83c\udfaf Challenges",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fTB=new B.B("Remove this part",null,W.aV1,null,null,null,null,null,null,null,null,null)
D.fTV=new B.B("Clear the board?",null,A.di,null,null,null,null,null,null,null,null,null)
D.fyP=new B.F(!0,A.bx,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUc=new B.B("How the Lab works",null,D.fyP,null,null,null,null,null,null,null,null,null)
D.fpE=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUy=new B.B("Electronics Lab",null,D.fpE,null,null,null,null,A.a2,null,1,null,null)
D.fUC=new B.B("?",null,P.aWB,null,null,null,null,null,null,null,null,null)
D.fVW=new B.B("Ready-made circuits",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fWz=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fC_=new B.F(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_3=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fC_,null,null,null,null,null,null,null,null,null)
D.h0f=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aV_,null,null,null,null,null,null,null,null,null)
D.h0L=new B.B("NGMY",null,A.vH,null,null,null,null,null,null,null,null,null)
D.h0Y=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.VL,null,null,null,null,null,null,null,null,null)
D.h1m=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.lW,null,null,null,null,null,null,null,null,null)
D.h2q=new B.B("TOOLBOX",null,A8.aaV,null,null,null,null,null,null,null,null,null)
D.hra=new B.bC("body-loading",x.Y)
D.hrs=new B.bC("core-protocol-back",x.Y)
D.hrx=new B.bC("core-protocol-title-frame",x.Y)})();(function staticFields(){$.huA=null
$.huw=null
$.hux=null
$.hAP=0
$.i2U=B.T(x.N,B.as("iH"))
$.i3s=B.T(x.N,B.as("iH"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iBO","bGP",()=>{var v="led"
return B.a([C.aA1("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fsp(),v),C.aA1("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fsq(),v),C.aA1("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fsr(),v),C.aA1("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fsy(),v),C.aA1("Not both","Make the light go OFF only when both switches are ON.",2,new C.fsz(),v),C.aA1("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fsA(),"buzzer")],B.as("O<bd3>"))})
w($,"iCf","bGQ",()=>B.a([C.Rl("UNIVERSE","Earth, space and gravity",A.PN,A.aH,new C.fsQ()),C.Rl("ELECTRONICS LAB","Batteries, wires, real circuits",Af.CR,A.aH,new C.fsR()),C.Rl("DISCOVERY LAB","Body Explorer: a real 3D human",D.bQ1,A.b5,new C.fsS()),C.Rl("TOOLBOX","Converter, clock, games",H.apr,A.cG,new C.fsT()),C.Rl("REACTION LAB","Wire parts together",A.De,A.bx,new C.fsU()),C.Rl("SPARK PAINTER","Paint with light",A.Ht,A.bT,new C.fsV()),C.Rl("ROCKET LANDER","Land softly on the pad",A.oI,A.aH,new C.fsW()),C.Rl("TITLE ANIMATOR","Make a moving title",A.wS,A.bj,new C.fsX()),C.Rl("CIRCUIT LAB","Connect logic, learn it",A.a3_,A.cp,new C.fsY())],B.as("O<bvj>")))
w($,"iDU","qE",()=>{var v,u,t=B.T(x.N,x.B)
for(v=0;v<76;++v){u=D.Sq[v]
t.n(0,u.a,u)}return t})
w($,"iBP","aj7",()=>B.a([C.Gt("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fsB()),C.Gt("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fsC()),C.Gt("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fsD()),C.Gt("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fsE()),C.Gt("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fsF()),C.Gt("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fss()),C.Gt("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fst()),C.Gt("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fsu()),C.Gt("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fsv()),C.Gt("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fsw()),C.Gt("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fsx())],B.as("O<bd4>")))
w($,"iCh","hJQ",()=>B.a([C.a29("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c6,new C.ft5()),C.a29("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c0,A.bD,new C.ft6()),C.a29("Breathe","Calm down in a minute","\ud83e\udee7",A.hu,A.cA,new C.ft7()),C.a29("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b7,new C.ft8()),C.a29("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.ch,new C.ft9()),C.a29("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bj,A.bd,new C.fta()),C.a29("Tip & Split","Share the bill","\ud83e\uddfe",A.b5,A.b2,new C.ftb()),C.a29("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bq,A.aF,new C.ftc())],B.as("O<bwD>")))})()};
(a=>{a["uPncVFFZZvkKBwCB6lkkU0yY/Wc="]=a.current})($__dart_deferred_initializers__);