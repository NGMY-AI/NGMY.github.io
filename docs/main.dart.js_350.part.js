((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A3,Z,A4,A_,R,A5,A6,A7,A8,A9,A0,N,Aa,Ab,Ac,Ad,T,Ae,P,Af,U,V,W,E,K,F,I,A1,O,Ag,Ah,S,Ai,Q,Aj,L,G,M,C={
bB5(d){return C.i0p(d)},
i0p(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bB5=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.r8(B.nh(""),d,A.hS,null,null).da(0,A.ZR),$async$bB5)
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
return B.i($async$bB5,v)},
icq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Rh[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cU(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fY(D.Rh,new C.fFw())
if(w==null)w=A.d.gI(D.Rh)
s=B.U(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.L)(r),++u){l=r[u].a
k=l[0]
l=$.qx().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.akr(w.a,w.b,m,w,s,!1)},
i5X(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.RI,new C.fuY(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
ikm(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cp(b2,"{")
v=A.a.oR(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.X.aM(0,A.a.ar(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aX(a5)
r=0
for(a6=x.j,a7=J.aW(a6.a(J.r(u,"parts"))),a8=x.i;a7.C();){q=a7.gS(a7)
p=B.w(J.r(q,"kind"))
o=B.w(J.r(q,"id"))
if(!$.qx().aj(0,p)||J.f1(s,o)||J.ad(t)>=8)continue
J.cc(s,o)
n=B.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dtk[a9]
l=J.r(q,m)
if(typeof l=="number")J.aJ(n,m,l)}k=A.k.E(typeof J.r(q,"x")=="number"?B.e8(J.r(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.E(typeof J.r(q,"y")=="number"?B.e8(J.r(q,"y")):0.25+A.k.ao(r,3)*0.3,0.1,0.9)
J.cc(t,new B.e5([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aW(a6.a(J.r(u,"wires")));a5.C();){h=a5.gS(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.r(g,0))
e=B.w(J.r(g,2))
d=A.o.E(A.k.N(B.e8(J.r(g,1))),0,1)
a0=A.o.E(A.k.N(B.e8(J.r(g,3))),0,1)
if(J.f1(s,f)&&J.f1(s,e)&&!J.A(f,e))J.cc(i,new B.cy([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.r(u,"steps"))
a0=J.aW(a0==null?A.cv:a0)
while(a0.C()){a2=a0.gS(a0)
J.cc(a1,B.w(a2))}a3=a1
a0=J.r(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.r(u,"explain")
a4=new C.mR(a0,B.w(a1==null?"":a1),t,i,A.Y)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.r(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.akr(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ib0(d){var w,v,u=C.hfV()
d.B(u)
for(w=0;w<60;++w)u.vq(0,0.03333333333333333)
v=u.a
return A.d.b3(v,new C.fC9(u))&&!A.d.d0(v,new C.fCa())},
ib_(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.qx().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.L)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.drz,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aG(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.k.ac(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.L)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aG(s,"\n")+"\nWires: "+A.d.aG(l,"; ")},
hZV(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aG(v,"\n")+"\n\n"}v=A.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
icp(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qx().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.RI[u]
if(A.d.b3(w,new C.fFt(s)))if(!B.cU(r,s.b.toLowerCase(),0))v=B.cU(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Z(w,new C.fFu(e),B.T(w).k("Z<1>")).gan(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ac(A.d.cI(w,0,new C.fFv())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qx().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
akr:function akr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fFw:function fFw(){},
fuY:function fuY(){},
fC9:function fC9(d){this.a=d},
fCa:function fCa(){},
fFt:function fFt(d){this.a=d},
fFu:function fFu(d){this.a=d},
fFv:function fFv(){},
VW:function VW(d,e){this.c=d
this.a=e},
blA:function blA(d,e,f,g,h){var _=this
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
efl:function efl(d){this.a=d},
efm:function efm(d,e,f){this.a=d
this.b=e
this.c=f},
efn:function efn(d){this.a=d},
efy:function efy(d){this.a=d},
efz:function efz(d,e){this.a=d
this.b=e},
efu:function efu(d){this.a=d},
efs:function efs(d,e){this.a=d
this.b=e},
eft:function eft(d,e,f){this.a=d
this.b=e
this.c=f},
efv:function efv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
efq:function efq(d){this.a=d},
efr:function efr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efw:function efw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
efp:function efp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efx:function efx(d,e){this.a=d
this.b=e},
efo:function efo(d,e){this.a=d
this.b=e},
efC:function efC(d){this.a=d},
efB:function efB(d){this.a=d},
efD:function efD(d){this.a=d},
efA:function efA(d){this.a=d},
efE:function efE(d,e){this.a=d
this.b=e},
efF:function efF(d,e){this.a=d
this.b=e},
efG:function efG(d,e){this.a=d
this.b=e},
efH:function efH(d,e){this.a=d
this.b=e},
bBq(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fl_,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p)},
htx(d,e,f,g){var w=null,v=B.m(24),u=B.J(f.j(0.6),A.r,1)
return B.as(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.x7,A.K,w,w),A.aB,B.bY(A.fI,g,A.br,w,0,8)],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(D.beD,w,u,v,w,w,A.n),w,w,w,w,A.aa,w,w,w),w,w,w)},
Gs:function Gs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
va:function va(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wi:function Wi(d){this.a=d},
aFm:function aFm(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.h2$=h
_.lY$=i
_.f7$=j
_.h3$=k
_.bw$=l
_.a8$=m
_.c=_.a=null},
euE:function euE(){},
euY:function euY(d){this.a=d},
euX:function euX(d,e){this.a=d
this.b=e},
euZ:function euZ(){},
ev_:function ev_(){},
euG:function euG(d,e,f){this.a=d
this.b=e
this.c=f},
euF:function euF(d,e){this.a=d
this.b=e},
euv:function euv(d){this.a=d},
euw:function euw(d){this.a=d},
eux:function eux(d){this.a=d},
euy:function euy(d){this.a=d},
euz:function euz(d){this.a=d},
euA:function euA(d){this.a=d},
euB:function euB(d){this.a=d},
euC:function euC(d){this.a=d},
euD:function euD(d){this.a=d},
eut:function eut(d){this.a=d},
euu:function euu(d){this.a=d},
eus:function eus(d){this.a=d},
euR:function euR(d,e){this.a=d
this.b=e},
euM:function euM(d){this.a=d},
euN:function euN(d){this.a=d},
euJ:function euJ(d){this.a=d},
euO:function euO(d){this.a=d},
euI:function euI(d){this.a=d},
euP:function euP(d){this.a=d},
euQ:function euQ(d){this.a=d},
euH:function euH(d){this.a=d},
euS:function euS(d,e){this.a=d
this.b=e},
euL:function euL(d,e){this.a=d
this.b=e},
euT:function euT(d){this.a=d},
euU:function euU(d){this.a=d},
euV:function euV(d){this.a=d},
euW:function euW(d){this.a=d},
euK:function euK(d){this.a=d},
bix:function bix(d,e){this.b=d
this.a=e},
aNk:function aNk(){},
bz5:function bz5(){},
cLF(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cLF=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.ra().ji(0,"assets/data/body3d.bin"),$async$cLF)
case 3:d=a1
$.hoM=J.eH(A.dK.gaR(d),d.byteOffset,d.byteLength)
t=B.aTw(d)
s=t.getUint32(4,!0)
r=B.a([],x.a)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jF(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dfO[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a3z(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b1P))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bbt(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cLF,v)},
aTj:function aTj(d,e,f){this.a=d
this.b=e
this.c=f},
a3z:function a3z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bbt:function bbt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
UP:function UP(d){this.a=d},
aDQ:function aDQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.at=!1
_.ax=""
_.ay=l
_.ch=2
_.CW=1
_.cx=null
_.cy=0.5
_.db=0.05
_.dy=_.dx=1
_.fr=m
_.fx=n
_.fy=!0
_.go=0
_.id=1
_.k1=o
_.k2=0
_.k3=72
_.k4=!1
_.ok=0
_.p1=!1
_.p2=null
_.p3=0
_.p4=""
_.R8=p
_.RG=q
_.rx=r
_.ry=0
_.h2$=s
_.lY$=t
_.f7$=u
_.h3$=v
_.bw$=w
_.a8$=a0
_.c=_.a=null},
dLT:function dLT(d){this.a=d},
dLS:function dLS(d,e){this.a=d
this.b=e},
dLv:function dLv(d,e){this.a=d
this.b=e},
dLw:function dLw(){},
dLU:function dLU(){},
dLx:function dLx(d,e){this.a=d
this.b=e},
dLy:function dLy(d){this.a=d},
dLz:function dLz(){},
dLA:function dLA(d){this.a=d},
dLC:function dLC(d,e){this.a=d
this.b=e},
dLB:function dLB(d){this.a=d},
dLs:function dLs(d,e,f){this.a=d
this.b=e
this.c=f},
dLt:function dLt(d){this.a=d},
dLu:function dLu(d){this.a=d},
dLJ:function dLJ(d){this.a=d},
dLK:function dLK(d,e){this.a=d
this.b=e},
dLL:function dLL(d,e){this.a=d
this.b=e},
dLM:function dLM(d){this.a=d},
dLI:function dLI(d,e){this.a=d
this.b=e},
dLN:function dLN(d,e){this.a=d
this.b=e},
dLH:function dLH(d,e){this.a=d
this.b=e},
dLO:function dLO(d){this.a=d},
dLG:function dLG(d){this.a=d},
dLP:function dLP(d){this.a=d},
dLF:function dLF(d){this.a=d},
dLQ:function dLQ(d){this.a=d},
dLE:function dLE(d){this.a=d},
dLR:function dLR(d){this.a=d},
dLD:function dLD(d){this.a=d},
aMp:function aMp(){},
aMq:function aMq(){},
c5f:function c5f(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c5g:function c5g(d,e){this.a=d
this.b=e},
c5h:function c5h(d){this.a=d},
azd(d,e,f,g,h){return new C.bcc(d,e,f,g,h)},
h6q(d,e,f,g,h,i){return $.hXh.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cSz(d,e,f,i,g,h))},
yo:function yo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CD:function CD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nz:function nz(d,e,f){this.a=d
this.b=e
this.c=f},
bcc:function bcc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
foo:function foo(){},
fop:function fop(){},
foq:function foq(){},
foy:function foy(){},
foz:function foz(){},
foA:function foA(){},
UU:function UU(d){this.a=d},
aDS:function aDS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.h2$=m
_.lY$=n
_.f7$=o
_.h3$=p
_.bw$=q
_.a8$=r
_.c=_.a=null},
dNy:function dNy(d){this.a=d},
dNc:function dNc(d,e){this.a=d
this.b=e},
dNf:function dNf(){},
dNz:function dNz(){},
dNa:function dNa(d,e){this.a=d
this.b=e},
dNb:function dNb(d,e){this.a=d
this.b=e},
dNg:function dNg(d,e,f){this.a=d
this.b=e
this.c=f},
dN5:function dN5(){},
dN6:function dN6(){},
dN7:function dN7(d){this.a=d},
dN8:function dN8(d,e){this.a=d
this.b=e},
dN9:function dN9(d,e,f){this.a=d
this.b=e
this.c=f},
dNh:function dNh(){},
dNi:function dNi(d,e){this.a=d
this.b=e},
dNj:function dNj(d){this.a=d},
dNe:function dNe(d,e){this.a=d
this.b=e},
dNd:function dNd(d){this.a=d},
dN4:function dN4(d,e,f){this.a=d
this.b=e
this.c=f},
dNs:function dNs(d){this.a=d},
dNr:function dNr(d){this.a=d},
dNt:function dNt(d){this.a=d},
dNq:function dNq(d){this.a=d},
dNo:function dNo(d){this.a=d},
dNp:function dNp(d){this.a=d},
dNn:function dNn(d){this.a=d},
dNk:function dNk(d){this.a=d},
dNm:function dNm(d){this.a=d},
dNu:function dNu(d,e){this.a=d
this.b=e},
dNv:function dNv(d,e){this.a=d
this.b=e},
dNw:function dNw(d){this.a=d},
dNl:function dNl(d){this.a=d},
dNx:function dNx(d,e){this.a=d
this.b=e},
bcv:function bcv(d,e){this.b=d
this.a=e},
cSz:function cSz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aMu:function aMu(){},
byQ:function byQ(){},
hO6(){return new C.NJ(null)},
QE(d,e,f,g,h){return new C.buk(d,e,f,g,h)},
bsJ(d,e,f){return A.k.E((d-e)/(f-e),0,1)},
h6X(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
NJ:function NJ(d){this.a=d},
KK:function KK(d,e){this.a=d
this.b=e},
AM:function AM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aE8:function aE8(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dTu:function dTu(d,e){this.a=d
this.b=e},
dTt:function dTt(d){this.a=d},
dTw:function dTw(d,e){this.a=d
this.b=e},
dTv:function dTv(d){this.a=d},
buk:function buk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
foQ:function foQ(){},
foR:function foR(){},
foS:function foS(){},
foT:function foT(){},
foU:function foU(){},
foV:function foV(){},
foW:function foW(){},
foX:function foX(){},
foY:function foY(){},
bsK:function bsK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f4m:function f4m(d){this.a=d},
f4l:function f4l(d,e){this.a=d
this.b=e},
f4j:function f4j(d){this.a=d},
f4n:function f4n(d){this.a=d},
f4k:function f4k(d,e){this.a=d
this.b=e},
afl:function afl(d,e,f){this.c=d
this.d=e
this.a=f},
aec:function aec(d,e,f){this.c=d
this.d=e
this.a=f},
Qx:function Qx(d,e,f,g,h,i,j,k,l,m){var _=this
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
btJ:function btJ(d,e){this.b=d
this.a=e},
bte:function bte(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbb:function bbb(d,e){this.b=d
this.a=e},
aIn:function aIn(d,e){this.c=d
this.a=e},
aIo:function aIo(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.b7$=f
_.c=_.a=null},
f42:function f42(d){this.a=d},
f41:function f41(d){this.a=d},
f40:function f40(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4_:function f4_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3Y:function f3Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3X:function f3X(d,e,f){this.a=d
this.b=e
this.c=f},
f3Z:function f3Z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f3W:function f3W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4a:function f4a(d){this.a=d},
f49:function f49(d){this.a=d},
f4b:function f4b(d,e){this.a=d
this.b=e},
f4c:function f4c(d,e){this.a=d
this.b=e},
f4d:function f4d(d,e){this.a=d
this.b=e},
f48:function f48(d,e,f){this.a=d
this.b=e
this.c=f},
f4e:function f4e(d,e,f){this.a=d
this.b=e
this.c=f},
f47:function f47(d){this.a=d},
f43:function f43(d){this.a=d},
f4f:function f4f(d){this.a=d},
f4g:function f4g(d){this.a=d},
f46:function f46(d,e){this.a=d
this.b=e},
f4h:function f4h(d,e){this.a=d
this.b=e},
f45:function f45(d,e){this.a=d
this.b=e},
f4i:function f4i(d,e){this.a=d
this.b=e},
f44:function f44(d,e){this.a=d
this.b=e},
f3U:function f3U(){},
f3V:function f3V(){},
bsm:function bsm(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brM:function brM(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbR:function bbR(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brO:function brO(d,e,f){this.b=d
this.c=e
this.a=f},
bvO:function bvO(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aO9:function aO9(){},
hv0(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a7(0,new B.t(w,0)),u=e.aE(0,new B.t(w,0)),t=1-f,s=3*t
return d.aI(0,t*t*t).a7(0,v.aI(0,s*t*f)).a7(0,u.aI(0,s*f*f)).a7(0,e.aI(0,f*f*f))},
biw(d,e,f,g,h,i){return $.hXS.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dnI(d,e,f,i,g,h))},
a0O:function a0O(d,e){this.a=d
this.b=e},
qj:function qj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
r2:function r2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CH:function CH(d,e){this.a=d
this.b=e},
ZL:function ZL(d,e){this.a=d
this.b=e},
af9:function af9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a10:function a10(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CR:function CR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ac4:function ac4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ack:function ack(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aef:function aef(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
biu:function biu(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.T$=t
_.by$=_.bJ$=0},
dnM:function dnM(d){this.a=d},
dnN:function dnN(d){this.a=d},
dnJ:function dnJ(d,e){this.a=d
this.b=e},
dnK:function dnK(d){this.a=d},
dnL:function dnL(d){this.a=d},
dnO:function dnO(d){this.a=d},
dnP:function dnP(d){this.a=d},
dnQ:function dnQ(d){this.a=d},
dnR:function dnR(d){this.a=d},
dnS:function dnS(d){this.a=d},
dnT:function dnT(d){this.a=d},
dnU:function dnU(d){this.a=d},
dnV:function dnV(d){this.a=d},
dnW:function dnW(d){this.a=d},
Gd:function Gd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wh:function Wh(d){this.a=d},
aFl:function aFl(d,e,f,g,h,i,j){var _=this
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
_.a8$=j
_.c=_.a=null},
etZ:function etZ(d){this.a=d},
etO:function etO(d){this.a=d},
etQ:function etQ(){},
etR:function etR(){},
etU:function etU(){},
etV:function etV(d,e,f){this.a=d
this.b=e
this.c=f},
etW:function etW(d){this.a=d},
etX:function etX(d){this.a=d},
etS:function etS(){},
etT:function etT(d){this.a=d},
euo:function euo(d){this.a=d},
etY:function etY(){},
etK:function etK(d){this.a=d},
eu0:function eu0(d){this.a=d},
eu_:function eu_(d){this.a=d},
eu2:function eu2(){},
eu1:function eu1(d,e){this.a=d
this.b=e},
etN:function etN(){},
etL:function etL(d){this.a=d},
etM:function etM(d){this.a=d},
eum:function eum(d){this.a=d},
eul:function eul(d){this.a=d},
eun:function eun(d){this.a=d},
euc:function euc(d,e){this.a=d
this.b=e},
euk:function euk(d){this.a=d},
eui:function eui(d){this.a=d},
euj:function euj(d){this.a=d},
euh:function euh(d){this.a=d},
eug:function eug(d){this.a=d},
eud:function eud(d){this.a=d},
eue:function eue(d){this.a=d},
euf:function euf(d){this.a=d},
etP:function etP(){},
eu8:function eu8(d){this.a=d},
eu9:function eu9(d){this.a=d},
eu7:function eu7(d){this.a=d},
eua:function eua(d){this.a=d},
eu6:function eu6(d){this.a=d},
eub:function eub(d){this.a=d},
eu5:function eu5(d){this.a=d},
eu4:function eu4(d){this.a=d},
eu3:function eu3(d,e){this.a=d
this.b=e},
biv:function biv(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dnI:function dnI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNi:function aNi(){},
hAg(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aE(0,e).gcC()*0.1
return new B.t((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hfV(){var w=B.a([],x.C),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a4U(w,v,u,A.cK,B.U(x.N,x.y))},
hHV(d,e,f){var w=d.c,v=e===0?-1:1
return new B.t(w*f.a+v*C.hfW(d),d.d*f.b)},
hfW(d){return 42+(D.mi.aj(0,d.b)?(d.ch-1)*38:0)},
ei:function ei(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tL:function tL(d,e,f,g){var _=this
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
aaL:function aaL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abR:function abR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4U:function a4U(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bOB:function bOB(){},
bOM:function bOM(d){this.a=d},
bOH:function bOH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bON:function bON(d){this.a=d},
bOO:function bOO(d){this.a=d},
bOQ:function bOQ(d){this.a=d},
bOR:function bOR(d){this.a=d},
bOP:function bOP(d){this.a=d},
bOS:function bOS(d,e,f){this.a=d
this.b=e
this.c=f},
bOT:function bOT(d){this.a=d},
bOD:function bOD(d){this.a=d},
bOE:function bOE(d){this.a=d},
bOC:function bOC(d){this.a=d},
bOF:function bOF(d,e,f){this.a=d
this.b=e
this.c=f},
bOG:function bOG(d){this.a=d},
bOA:function bOA(d){this.a=d},
bOU:function bOU(d,e){this.a=d
this.b=e},
bOI:function bOI(d,e){this.a=d
this.b=e},
bOL:function bOL(d){this.a=d},
bOK:function bOK(d){this.a=d},
bOJ:function bOJ(d){this.a=d},
ajb:function ajb(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bJc:function bJc(){},
bJd:function bJd(){},
mR:function mR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqZ:function cqZ(d){this.a=d},
ikh(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fRj(),c9=new C.fRl(),d0=new C.fRm(),d1=new C.fRk(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.az(w,d1.$3(new B.a3(w.a,w.b,w.c,w.d),A.bN,A.bM))
d3.bo(D.ekC,D.ehw,c9.$2(A.dL,1.4))
d3.bo(D.ehd,D.ehc,c9.$2(A.bs,2.4))
d3.bo(D.ehe,T.aK6,c9.$2(A.bs,2.4))
if(c7){d2=c8.$1(A.fk.j(0.5))
d2.z=A.ID
d3.ad(D.egX,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.t(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.az(d0.$4(-22,-26,44,50),d1.$3(D.aQa,A.aP,A.cq))
d3.ad(A.cH,16,c8.$1(A.bs))
d3.ad(A.cH,13,c8.$1(c7?A.aJ.j(0.85):A.N))
if(c7){d2=d3.a
J.bl(d2.save())
d2.translate(0,4)
d3.il(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ac,3).G()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).G()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ad(D.eku,2.4,c8.$1(c7?A.bf:A.al))
d3.ad(D.ell,2.4,c8.$1(A.al))
return!0
case"blender":d3.az(d0.$5(-14,14,28,12,4),c8.$1(A.e9))
d2=$.S().r
t=x.v
q=new B.aF(d2,A.ag,c6,c6,B.a([],t))
q.D(new B.aY(-16,-26))
q.D(new B.aq(16,-26))
q.D(new B.aq(12,14))
q.D(new B.aq(-12,14))
q.D(new B.bt())
d3.aH(q,c8.$1(A.fk.j(0.35)))
if(c7){d2=new B.aF(d2,A.ag,c6,c6,B.a([],t))
d2.D(new B.aY(-14,-10))
d2.D(new B.aq(14,-10))
d2.D(new B.aq(12,14))
d2.D(new B.aq(-12,14))
d2.D(new B.bt())
d3.aH(d2,c8.$1(A.ax.j(0.7)))}d3.aH(q,c9.$2(A.ac,1.6))
d2=d3.a
J.bl(d2.save())
d2.translate(0,10)
d3.il(0,d4.y)
d3.bo(D.a7x,D.aKs,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.eO).G()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.az(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.ad(A.ic,3,c8.$1(c7?A.bf:A.al))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=G.a59[m]
r=c9.$2(A.bs,3).G()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bl(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).G()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=B.bK(A.I,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).G()
d2.drawOval(B.bG(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
w.D(new B.aY(-24,-12))
w.D(new B.aq(10,-12))
w.D(new B.aq(10,2))
w.D(new B.aq(-2,2))
w.D(new B.aq(-6,22))
w.D(new B.aq(-16,22))
w.D(new B.aq(-14,2))
w.D(new B.aq(-24,2))
w.D(new B.bt())
d3.aH(w,d1.$3(D.f1J,A.aT,A.d0))
d3.aP(D.f0Q,c8.$1(A.dn))
d2=d3.a
J.bl(d2.save())
d2.translate(18,-5)
d3.il(0,d4.y*2)
d3.bo(A.I,D.ehn,c9.$2(A.bO,2.4))
d3.bo(A.a7u,D.ehm,c9.$2(A.hx,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dB.j(1-u)).G()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.E(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(16,-6))
d2.D(new B.aq(52,-26))
d2.D(new B.aq(52,18))
d2.D(new B.aq(16,4))
d2.D(new B.bt())
d3.aH(d2,c8.$1(A.bL.j(0.35*v)))}d3.az(d0.$5(-26,-6,30,12,3),d1.$3(D.f1P,A.bn,A.cr))
k=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
k.D(new B.aY(4,-6))
k.D(new B.aq(18,-12))
k.D(new B.aq(18,12))
k.D(new B.aq(4,6))
k.D(new B.bt())
d3.aH(k,c8.$1(A.e9))
d3.ad(D.ehs,7,c8.$1(c7?A.c:A.dn))
return!0
case"neon":d3.az(d0.$5(-30,-14,60,28,6),c8.$1(M.ni))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bf(d5*17),3)!==0
else j=!1
i=j?A.c_:D.boF
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c_.j(0.35))
t.z=A.mU
d3.az(d2,t)}d3.az(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.ekI,i,17)
return!0
case"microwave":d3.az(d0.$4(-30,-18,60,38),d1.$3(D.f1V,A.bO,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.az(d2,c8.$1(c7?A.bL.j(0.75):A.av))
if(c7){d2=d3.a
J.bl(d2.save())
d2.translate(-7,8)
d3.il(0,d4.y*0.5)
d3.dQ(B.bK(A.I,7,22),c8.$1(A.d0))
d2.restore()}d3.az(d0.$5(15,-14,12,12,2),c8.$1(M.ni))
if(c7)d6.$5(d3,"0:"+A.a.aX(A.o.u(59-A.o.F(A.k.bf(d5),60)),2,"0"),D.eht,A.be,6.5)
d3.ad(D.ehJ,4,c8.$1(A.dn))
return!0
case"doorbell":d3.az(d0.$5(-16,-26,32,52,8),c8.$1(A.aN))
d3.ad(A.Jb,10,c8.$1(c7?A.bt:A.bs))
d2=d3.a
J.bl(d2.save())
d2.translate(0,-8)
d3.il(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.elp,A.c,16)
d2.restore()
d3.ad(A.kt,6,c8.$1(A.d3))
d3.ad(A.kt,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bX(A.Jb,14+v*6+A.k.F(t,6))
r=c9.$2(A.bt.j(0.9-v*0.3),1.8).G()
d2.drawArc.apply(d2,[B.bG(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bo(D.ekH,D.elj,c9.$2(A.bs,4))
d2=d3.a
J.bl(d2.save())
d3.il(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.az(d0.$5(-24,-14,46,22,5),d1.$3(D.f1K,A.bO,A.al))
d3.ad(D.aKa,8,c8.$1(A.av))
d3.ad(D.aKa,4.5,c8.$1(c7?A.aJ:A.cr))
d3.ad(D.ekF,2.2,c8.$1(c7&&A.o.F(A.k.bf(d5*1.6),2)===0?A.ax:A.jO))
d2.restore()
if(c7)d6.$5(d3,"REC",D.ekQ,A.ax,9)
return!0
case"console":d3.az(d0.$5(-28,-22,56,44,8),d1.$3(D.f1S,A.iT,A.fd))
d3.az(d0.$5(-20,-17,40,22,3),c8.$1(A.dG))
if(c7){d2=d5*2.3
d3.ad(new B.t(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aP(new B.a3(-18,t,-15.6,t+8),c8.$1(A.be))
d2=-9+Math.sin(d2-0.4)*6
d3.aP(new B.a3(15.6,d2,18,d2+8),c8.$1(A.c_))}d3.ad(D.ekA,4,c8.$1(A.aS))
d3.ad(D.eho,2.4,c8.$1(A.ax))
d3.ad(D.ehG,2.4,c8.$1(A.bf))
return!0
case"heartmon":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(A.av))
d3.az(d0.$5(-26,-18,52,28,3),c8.$1(A.dG))
if(c7){d2=$.S()
t=B.a([],x.v)
h=new B.aF(d2.r,A.ag,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.F((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new B.aY(l,f)
t.push(s)
p=h.f
if(p!=null)s.bx(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new B.aq(l,f)
t.push(s)
p=h.f
if(p!=null)s.bx(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aH(h,c9.$2(A.be,1.8))
d6.$5(d3,"72",D.ehp,A.hd,11)
d2=d5*9
d6.$5(d3,"\u2665",D.ekV,A.hd.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ad(D.ekK,3,c8.$1(c7?A.bf:A.bs))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.az(d2,c8.$1(A.cw.j(c7?0.5:0.3)))
d3.az(d0.$5(-26,-20,52,40,4),c9.$2(A.ac,1.6))
d3.aP(D.f1M,c8.$1(G.tM))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bl(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.p9(0,-1,1)
d3.dQ(B.bK(A.I,8,14),c8.$1(A.cL))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-6,0))
d2.D(new B.aq(-12,-4))
d2.D(new B.aq(-12,4))
d2.D(new B.bt())
d3.aH(d2,c8.$1(A.cd))
d3.ad(D.eis,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.F(v,2)
r=c9.$2(A.ac,1).G()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.S().r
t=x.v
e=new B.aF(d2,A.ag,c6,c6,B.a([],t))
e.D(new B.aY(-9,22))
e.D(new B.aq(-5,-16))
e.D(new B.aq(5,-16))
e.D(new B.aq(9,22))
e.D(new B.bt())
d3.aH(e,d1.$3(D.f2m,A.c,A.bB))
d3.aP(D.f2i,c8.$1(c7?A.dB:A.bs))
s=new B.aF(d2,A.ag,c6,c6,B.a([],t))
s.D(new B.aY(-7,-22))
s.D(new B.aq(0,-29))
s.D(new B.aq(7,-22))
s.D(new B.bt())
d3.aH(s,c8.$1(A.ek))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aF(d2,A.ag,c6,c6,B.a([],t))
d2.D(new B.aY(0,-19))
t=d*34
d2.D(new B.aq(t,-26))
d2.D(new B.aq(t,-12))
d2.D(new B.bt())
d3.aH(d2,c8.$1(A.dB.j(0.45)))
d2=c8.$1(A.dB.j(0.35))
d2.z=A.ID
d3.ad(D.egY,14,d2)}return!0
case"discoball":d3.bo(D.eh0,Q.aK2,c9.$2(A.dn,1.4))
d3.ad(A.I,16,d1.$3(D.f1t,A.aP,A.al))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dm,0.7).G()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dm,0.7).G()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.F(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.dgQ[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).G()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.az(d0.$5(-14,-4,28,24,5),d1.$3(D.f1q,A.cq,A.al))
d3.az(d0.$5(-12,-26,24,20,5),d1.$3(D.f1j,A.aN,A.bM))
d3.bo(H.aK3,D.eh1,c9.$2(A.bs,1.6))
d3.ad(D.eh2,2.2,c8.$1(c7?A.ax:A.bs))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=G.a5b[m]
if(c7)t=a1?A.b8:A.eP
else t=A.cr
r=c8.$1(t).G()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bl(d2.save())
d2.translate(14,0)
d3.il(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bo(A.I,D.a7p,c9.$2(A.bM,4))
d2.restore()
d3.bo(D.ekq,D.ekO,c9.$2(A.bM,4))
d3.aP(D.f2h,c8.$1(c7?A.b8.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.aAU[m]+1,d2,10,14,2)
p=B.ar(A.bL,A.d0,a2)
p.toString
r=c8.$1(p).G()
t.drawRRect(B.e6(s),r)
r.delete()}d3.az(d0.$5(-24,-6,48,26,8),d1.$3(D.f1L,A.bO,A.bn))
for(m=0;m<2;++m){l=D.aAU[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fr:A.av).G()
t.drawRRect(B.e6(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cL.j(0.5))
s.z=N.oD
r=s.G()
t.drawRRect(B.e6(d2),r)
r.delete()}}d3.bo(D.ehP,D.eia,c9.$2(A.av,3))
return!0
case"ledstrip":d3.az(d0.$5(-34,-4,68,10,4),c8.$1(A.cr))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new Ak.p5(1,a3,0.8,1).jU():A.e9
if(c7){s=c8.$1(i.j(0.45))
s.z=N.oD
r=s.G()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).G()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.az(d0.$5(-40,-2,6,6,1),c8.$1(A.dn))
return!0
case"pump":d3.az(d0.$5(-16,-2,32,22,6),d1.$3(D.f1z,A.cw,A.Fw))
d3.ad(D.ekW,8,c8.$1(A.pZ))
d2=d3.a
J.bl(d2.save())
d2.translate(-2,9)
d3.il(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fk,2.4).G()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
t.D(new B.aY(16,6))
t.D(new B.aq(26,6))
t.D(new B.aq(26,-20))
t.D(new B.aq(10,-20))
d3.aH(t,c9.$2(A.bM,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.hj).G()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ad(D.ej5,3.2,c8.$1(A.hj.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bl(d2.save())
d3.il(0,-0.15)
d3.az(d0.$5(-26,-14,40,22,10),d1.$3(D.f1N,A.hZ,A.tQ))
d3.az(d0.$5(14,-10,12,14,3),c8.$1(A.cr))
d3.az(d0.$5(-10,6,12,22,4),c8.$1(A.e9))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).G()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cL.j(0.4))
d2.z=N.oD
d3.ad(D.ehI,8,d2)}return!0
case"headphones":d3.e4(B.bK(A.dC,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bs,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=G.RV[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a3(s,0,s+14,20),A.bq,A.o9).G()
d2.drawRRect(B.e6(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bX(new B.t(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eG.j(0.9-v*0.3),1.6).G()
d2.drawArc.apply(d2,[B.bG(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.t(-4,-8-A.k.F(d5*14,8)),A.kD,12)
return!0
case"smartwatch":d3.az(d0.$5(-8,-30,16,14,3),c8.$1(A.cr))
d3.az(d0.$5(-8,14,16,14,3),c8.$1(A.cr))
d3.az(d0.$5(-14,-17,28,32,8),d1.$3(D.f1o,A.dn,A.e9))
d3.az(d0.$5(-11,-14,22,26,6),c8.$1(A.dG))
if(c7){a4=new B.V(Date.now(),0,!1)
d6.$5(d3,A.a.aX(A.o.u(B.dg(a4)),2,"0")+":"+A.a.aX(A.o.u(B.fR(a4)),2,"0"),D.eh6,A.be,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.ar(A.Fb,A.hd,g)
d2.toString
d6.$5(d3,"\u2665",new B.t(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bf(d5*2),6)),A.dC,A.c,7)}return!0
case"tablet":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(M.ni))
d3.az(d0.$5(-30,-22,60,44,6),c9.$2(A.bM,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e6(a5),$.nF(),!0)
d2.translate(-27,-19)
L.Lz(d3,D.f8b,d5,c6)
d2.restore()}else d3.az(a5,c8.$1(D.vV))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.az(a6,d1.$3(new B.a3(a6.a,a6.b,a6.c,a6.d),A.dF,A.d7))
d3.az(a6,c9.$2(A.aX,1.2))
d3.ad(D.aKA,9,c8.$1(A.av))
d3.ad(D.aKA,6,c9.$2(A.d0,2))
d3.az(d0.$5(4,-2,14,10,2),c8.$1(A.av))
d3.az(d0.$5(-22,-19,44,12,2),c8.$1(A.dG))
d2=A.k.ac(d4.db,1)
t=A.k.ac(c7?d4.dx:d4.e,1)
s=c7?A.be:A.al
d6.$5(d3,d2+"\u2192"+t+"V",D.ejf,s,8.2)
d3.ad(D.ehx,2.4,c8.$1(c7?A.bf:A.aK))
d6.$5(d3,"IN",D.ekP,A.ac,6)
d6.$5(d3,"OUT",D.eiY,A.ac,6)
return!0
case"regulator":a7=c7?A.k.E(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ar(A.bM,A.ax,a7)
t.toString
d3.az(d2,c8.$1(t))
d3.ad(H.a7n,3,c8.$1(A.aK))
d3.az(d0.$5(-12,-4,24,18,3),d1.$3(D.f1k,A.e9,A.hW))
d6.$5(d3,"7805",D.a7x,A.ac,8)
for(d2=d3.a,m=0;m<3;++m){t=D.dnc[m]-1
r=c8.$1(A.e2).G()
d2.drawRect(B.bG(new B.a3(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).G()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.elm,A.bk,9)
return!0
case"diode":d3.bo(D.aKE,D.aKm,c9.$2(A.e2,2.4))
d3.az(d0.$5(-14,-7,28,14,6),c8.$1(A.aA.j(0.85)))
d3.aP(D.f13,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dB.j(0.4))
t.z=A.kQ
d3.az(d2,t)}d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-8,-4))
d2.D(new B.aq(-8,4))
d2.D(new B.aq(-1,0))
d2.D(new B.bt())
d3.aH(d2,c8.$1(A.aS))
d6.$5(d3,"one way",D.ekD,A.aC,8)
return!0
case"ldr":d3.bo(D.aKE,D.a7x,c9.$2(A.e2,2.4))
d3.bo(D.aKs,D.aKm,c9.$2(A.e2,2.4))
d3.ad(A.I,12,c8.$1(A.d0))
d3.ad(A.I,12,c9.$2(A.rq,1.6))
d2=$.S()
t=B.a([],x.v)
a8=new B.aF(d2.r,A.ag,c6,c6,t)
a8.D(new B.aY(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bx(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aH(a8,c9.$2(A.bL,1.4))
d2=B.ar(A.bs,A.dB,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.t(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.ekr,A.ac,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ei
break A}if("sonytv"===d2){t=A.rh
break A}if("appletv"===d2){t=A.e2
break A}t=G.Fd
break A}a9=d2==="lgtv"||d2==="appletv"
d3.az(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bl(p.save())
p.clipRRect(B.e6(a5),$.nF(),!0)
p.translate(t,s)
L.hc_(d3,new B.av(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ad(D.eid,1.6,c8.$1(A.be))}else{d3.az(a5,c8.$1(D.vV))
p=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
p.D(new B.aY(t,s))
p.D(new B.aq(t+24,s))
p.D(new B.aq(t,s+22))
p.D(new B.bt())
d3.aH(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.az(d0.$5(-22,19,44,3,1.5),c8.$1(A.dn))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=M.hq[m]
s=$.S()
p=B.a([],t)
s=new B.aF(s.r,A.ag,c6,c6,p)
p.push(new B.aY(l*30,20))
p.push(new B.aq(l*22,20))
p.push(new B.aq(l*26,26))
p.push(new B.bt())
r=c8.$1(A.dn).G()
p=s.gbu().a.snapshot()
d2.drawPath((s.e=new B.cd(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.ejT,A.bO,5.5)
break
case"appletv":d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-8,18))
d2.D(new B.aq(8,18))
d2.D(new B.aq(12,25))
d2.D(new B.aq(-12,25))
d2.D(new B.bt())
d3.aH(d2,c8.$1(D.Yt))
d6.$5(d3,"Apple TV",D.ejg,A.bs,4.8)
break
default:d3.az(d0.$5(-34,19,68,7,3),c8.$1(D.bmY))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dm,0.6).G()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.eli,G.tM,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.mi.h(0,d2)
b1=b0.b===D.wV
b2=b1?44:30
b3=b1?48:54
t=-b2/2
s=-b3/2
p=b1?5:6.5
w=d0.$5(t,s-2,b2,b3,p)
p=w.a
o=w.b
b4=w.c
b5=w.d
b6=b0.c
b7=B.ar(b6,A.c,0.35)
b7.toString
d3.az(w,d1.$3(new B.a3(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.bl(t.save())
t.clipRRect(B.e6(a5),$.nF(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
L.Lz(d3,new B.av(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.az(a5,c8.$1(D.vV))
if(b1){t=a5.b
s=a5.d
d3.bo(new B.t(0,t),new B.t(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.az(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ad(new B.t(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.az(d0.$5(-17,-28,34,52,4),c8.$1(A.e9))
d3.az(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.els,A.av,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bn).G()
d2.drawRect(B.bG(new B.a3(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ad(A.a7l,1.6,c8.$1(A.av))}return!0
case"laptop":d3.az(d0.$5(-30,-28,60,42,4),d1.$3(D.f1W,A.cq,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e6(b8),$.nF(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
L.Lz(d3,new B.av(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.az(b8,c8.$1(D.vV))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-38,16))
d2.D(new B.aq(38,16))
d2.D(new B.aq(34,21))
d2.D(new B.aq(-34,21))
d2.D(new B.bt())
d3.aH(d2,c8.$1(D.Yt))
d3.az(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.az(d0.$5(-32,-28,64,46,5),d1.$3(D.f2_,A.bN,A.cq))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e6(b9),$.nF(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
L.Lz(d3,new B.av(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.az(b9,c8.$1(D.vV))
d3.ad(D.aJY,2,c8.$1(A.bM))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-6,18))
d2.D(new B.aq(6,18))
d2.D(new B.aq(10,26))
d2.D(new B.aq(-10,26))
d2.D(new B.bt())
d3.aH(d2,c8.$1(D.Yt))
return!0
case"monitor":d3.az(d0.$5(-34,-28,68,40,3),c8.$1(A.ei))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e6(c0),$.nF(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
L.Lz(d3,new B.av(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.az(c0,c8.$1(D.vV))
d3.aP(D.f26,c8.$1(A.bn))
d3.az(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dn))
return!0
case"projector":if(c7){d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(14,4))
d2.D(new B.aq(-32,-42))
d2.D(new B.aq(34,-42))
d2.D(new B.bt())
d3.aH(d2,c8.$1(A.dB.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e6(c1),$.nF(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
L.Lz(d3,new B.av(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.az(d0.$5(-26,-4,52,24,6),d1.$3(D.f1O,A.iy,A.dn))
d3.ad(D.aK8,7,c8.$1(A.av))
d3.ad(D.aK8,4,c8.$1(c7?A.dB:A.cr))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dm,1).G()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.az(d0.$5(-34,-10,68,32,12),c8.$1(A.av))
c2=d0.$5(-30,-20,60,28,8)
d3.az(c2,c8.$1(M.ni))
d3.az(c2,c9.$2(A.bs,1.2))
if(c7){c3=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
c3.D(new B.aY(-26,4))
c3.D(new B.c5(-10,-14+Math.sin(d5)*3,6,-6))
c3.D(new B.aq(22,-16))
d3.aH(c3,c9.$2(A.aJ,2.2))
d2=A.k.F(d5*6,48)
d3.ad(new B.t(-26+d2,4-d2*0.1),2.4,c8.$1(A.be))
d6.$5(d3,""+(88+A.o.F(A.k.bf(d5*2),5)),H.aKr,A.c,10)
d6.$5(d3,"km/h",D.ej3,A.aC,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.az(c4,d1.$3(new B.a3(c4.a,c4.b,c4.c,c4.d),A.dn,A.e9))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e6(c5),$.nF(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
L.Lz(d3,new B.av(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bq.j(0.2))
d2.z=A.mU
d3.ad(A.I,26,d2)}else d3.az(c5,c8.$1(A.N))
d3.bo(D.el2,D.el7,c9.$2(A.bn,4))
d3.bo(D.eif,D.eiv,c9.$2(A.bn,4))
return!0}return!1},
fRj:function fRj(){},
fRl:function fRl(){},
fRm:function fRm(){},
fRk:function fRk(){},
heK(d,e,f,g){return new C.aj9(d,g,f,e)},
FY(d,e,f){return new C.bcd(d,e,f)},
aj9:function aj9(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aja:function aja(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.h2$=h
_.lY$=i
_.f7$=j
_.h3$=k
_.bw$=l
_.a8$=m
_.c=_.a=null},
bIR:function bIR(d,e){this.a=d
this.b=e},
bIS:function bIS(d){this.a=d},
bIQ:function bIQ(d){this.a=d},
bIT:function bIT(){},
bIU:function bIU(d){this.a=d},
bIV:function bIV(d,e,f){this.a=d
this.b=e
this.c=f},
bIP:function bIP(d,e){this.a=d
this.b=e},
bIN:function bIN(d,e){this.a=d
this.b=e},
bIO:function bIO(d,e,f){this.a=d
this.b=e
this.c=f},
bIH:function bIH(d,e){this.a=d
this.b=e},
bII:function bII(){},
bIJ:function bIJ(d,e){this.a=d
this.b=e},
bIK:function bIK(d,e){this.a=d
this.b=e},
bIL:function bIL(d){this.a=d},
bIM:function bIM(d){this.a=d},
bJ9:function bJ9(d){this.a=d},
bJa:function bJa(){},
bIk:function bIk(){},
bJb:function bJb(d,e){this.a=d
this.b=e},
bJ8:function bJ8(d,e,f){this.a=d
this.b=e
this.c=f},
bJ3:function bJ3(d){this.a=d},
bJ0:function bJ0(d,e,f){this.a=d
this.b=e
this.c=f},
bJ1:function bJ1(d,e){this.a=d
this.b=e},
bJ4:function bJ4(d){this.a=d},
bIZ:function bIZ(d,e){this.a=d
this.b=e},
bJ_:function bJ_(d,e){this.a=d
this.b=e},
bJ2:function bJ2(d){this.a=d},
bJ5:function bJ5(d){this.a=d},
bIX:function bIX(d,e){this.a=d
this.b=e},
bIY:function bIY(d,e){this.a=d
this.b=e},
bJ6:function bJ6(d){this.a=d},
bIW:function bIW(d){this.a=d},
bJ7:function bJ7(d){this.a=d},
bIl:function bIl(d,e){this.a=d
this.b=e},
bIE:function bIE(d,e){this.a=d
this.b=e},
bIG:function bIG(d,e){this.a=d
this.b=e},
bIF:function bIF(d,e){this.a=d
this.b=e},
bIr:function bIr(d,e){this.a=d
this.b=e},
bIs:function bIs(d){this.a=d},
bIq:function bIq(d){this.a=d},
bIt:function bIt(d,e,f){this.a=d
this.b=e
this.c=f},
bIp:function bIp(d,e){this.a=d
this.b=e},
bIw:function bIw(d,e){this.a=d
this.b=e},
bIx:function bIx(d,e){this.a=d
this.b=e},
bIy:function bIy(d,e){this.a=d
this.b=e},
bIz:function bIz(d,e,f){this.a=d
this.b=e
this.c=f},
bIo:function bIo(d,e){this.a=d
this.b=e},
bIA:function bIA(d,e,f){this.a=d
this.b=e
this.c=f},
bIn:function bIn(d,e){this.a=d
this.b=e},
bIB:function bIB(d,e,f){this.a=d
this.b=e
this.c=f},
bIm:function bIm(d,e){this.a=d
this.b=e},
bIC:function bIC(d){this.a=d},
bID:function bID(d){this.a=d},
bIu:function bIu(d){this.a=d},
bIv:function bIv(d){this.a=d},
bcd:function bcd(d,e,f){this.a=d
this.b=e
this.c=f},
foB:function foB(){},
foC:function foC(){},
foD:function foD(){},
fon:function fon(){},
foE:function foE(){},
fom:function fom(){},
foF:function foF(){},
fos:function fos(){},
fol:function fol(){},
fot:function fot(){},
fok:function fok(){},
fou:function fou(){},
foj:function foj(){},
fov:function fov(){},
foh:function foh(){},
foi:function foi(){},
fow:function fow(){},
fof:function fof(){},
fog:function fog(){},
fox:function fox(){},
foe:function foe(){},
Vv:function Vv(d){this.a=d},
aEk:function aEk(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dYh:function dYh(d,e){this.a=d
this.b=e},
dYq:function dYq(d){this.a=d},
dYr:function dYr(){},
dYs:function dYs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYt:function dYt(){},
dYg:function dYg(d){this.a=d},
dYf:function dYf(d,e,f){this.a=d
this.b=e
this.c=f},
dYe:function dYe(d,e){this.a=d
this.b=e},
dYc:function dYc(d){this.a=d},
dYd:function dYd(){},
dYp:function dYp(d){this.a=d},
dYo:function dYo(d){this.a=d},
dYm:function dYm(d,e){this.a=d
this.b=e},
dYk:function dYk(d){this.a=d},
dYl:function dYl(){},
dYn:function dYn(d,e,f){this.a=d
this.b=e
this.c=f},
dYi:function dYi(d,e){this.a=d
this.b=e},
dYj:function dYj(){},
dYv:function dYv(d){this.a=d},
dYw:function dYw(d,e){this.a=d
this.b=e},
dYu:function dYu(){},
dYx:function dYx(d,e){this.a=d
this.b=e},
dYy:function dYy(d){this.a=d},
dYz:function dYz(d){this.a=d},
ayj:function ayj(d,e){this.c=d
this.a=e},
bap:function bap(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
cI3:function cI3(d){this.a=d},
bao:function bao(d,e){this.b=d
this.a=e},
cI2:function cI2(d){this.a=d},
ayD:function ayD(){},
ayE:function ayE(){},
aKR:function aKR(){},
byT:function byT(){},
ikj(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.v7,23)
$.S()
b8=B.I()
b8.r=A.av.gp(0)
b9.ad(A.v7,25,b8)
b8=B.I()
b8.sam(D.eu9.aA(0,v))
b9.ad(A.v7,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.r=A.bk.gp(0)
o.c=A.o.F(u,5)===0?1.8:1
n=o.G()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.E(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.I()
r.r=A.bB.gp(0)
r.c=2
r.d=A.by
b9.bo(A.v7,new B.t(b8*18,s*18-2),r)
r=B.I()
r.r=A.bk.gp(0)
b9.ad(A.v7,3,r)
c2.$5(b9,w?"V":"A",D.ela,A.bk,12)
c2.$5(b9,w?A.k.ac(m,1)+" V":""+A.k.V(m*1000)+" mA",D.ekx,A.av,9.5)
return!0
case"fan":b8=B.bs(D.f1g,A.hG)
$.S()
s=B.I()
s.r=A.bs.gp(0)
b9.az(b8,s)
s=B.I()
s.r=A.al.gp(0)
b9.aP(D.f27,s)
s=B.I()
s.r=A.N.j(0.6).gp(0)
b9.ad(H.v8,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bl(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bK(A.aK1,18,10)
r=new B.ao(A.O,A.M,A.S,A.T,A.R)
r.r=A.hj.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.G()
b8.drawOval(B.bG(s),n)
n.delete()
b8.restore()}b8=B.I()
b8.r=A.bo.gp(0)
b9.ad(H.v8,4,b8)
b8=B.I()
b8.b=A.a9
b8.c=2
b8.r=A.cq.gp(0)
b9.ad(H.v8,22,b8)
b8=B.I()
b8.b=A.a9
b8.c=0.8
b8.r=A.jP.gp(0)
b9.ad(H.v8,14,b8)
return!0
case"speaker":l=B.bs(D.aQa,A.qP)
$.S()
b8=B.I()
b8.sam(D.arC.aA(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.az(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.I()
b8.sam(D.euw.aA(0,B.bX(A.cy,15)))
b9.ad(A.cy,14+k,b8)
b8=B.I()
b8.r=A.dn.gp(0)
b9.ad(A.cy,5,b8)
b8=B.I()
b8.r=A.bn.gp(0)
b9.ad(H.a7m,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bX(D.ehO,6+u*6+A.k.F(b8,6))
q=new B.ao(A.O,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=1.8
q.r=A.c_.j(0.9-u*0.2).gp(0)
n=q.G()
s.drawArc.apply(s,[B.bG(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.bs(D.f1Z,A.qP)
$.S()
b8=B.I()
b8.sam(D.c4s.aA(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.bs(D.aQc,A.id)
s=B.I()
s.r=A.hW.gp(0)
b9.az(b8,s)
if(b7){i=new B.V(Date.now(),0,!1)
h=B.Fh(i)<500?":":" "
g=A.a.aX(A.o.u(B.dg(i)),2,"0")
f=A.a.aX(A.o.u(B.fR(i)),2,"0")
b8=B.I()
b8.r=A.be.j(0.12).gp(0)
b9.aP(D.aQc,b8)
c2.$5(b9,g+h+f,D.ekT,A.be,21)}b8=B.I()
b8.r=A.cq.gp(0)
b9.ad(D.ekR,2.4,b8)
b8=B.I()
b8.r=A.cq.gp(0)
b9.ad(D.ehT,2.4,b8)
return!0
case"calculator":j=B.bs(D.f1E,A.hH)
$.S()
b8=B.I()
b8.sam(D.c4c.aA(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.bs(D.f1x,A.hr)
s=B.I()
s.r=(b7?A.YE:D.bpf).gp(0)
b9.az(b8,s)
if(b7)c2.$5(b9,"3.14159",D.ekw,A.Xv,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.bs(new B.a3(q,s,q+6,r),A.TO)
$.S()
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
p.r=(d===3?A.cd:A.bO).gp(0)
n=p.G()
b8.drawRRect(B.e6(q),n)
n.delete()}return!0
case"phone":j=B.bs(D.f1s,A.hH)
$.S()
b8=B.I()
b8.r=M.ni.gp(0)
b9.az(j,b8)
b8=B.I()
b8.b=A.a9
b8.c=1.9
b8.r=D.aiX.gp(0)
b9.az(j,b8)
a0=B.bs(D.f1i,A.hG)
if(b7){b8=B.I()
b8.sam(D.c5M.aA(0,new B.a3(a0.a,a0.b,a0.c,a0.d)))
b9.az(a0,b8)
b8=b9.a
J.bl(b8.save())
b8.clipRRect(B.e6(a0),$.nF(),!0)
b8.translate(-12,-25)
L.Lz(b9,D.f7O,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=B.bs(D.f1f,A.hr)
s=B.I()
s.r=A.aS.gp(0)
b9.az(b8,s)
s=B.I()
s.r=A.be.gp(0)
b9.aP(new B.a3(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.ejz,A.c,6)}else{b8=B.I()
b8.r=D.vV.gp(0)
b9.az(a0,b8)}b8=B.bs(D.f2n,D.euE)
s=B.I()
s.r=A.w.gp(0)
b9.az(b8,s)
return!0
case"router":j=B.bs(D.f1Y,A.mX)
$.S()
b8=B.I()
b8.sam(D.c4J.aA(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=G.RV[a2]
s=a3<0?-4:4
r=new B.ao(A.O,A.M,A.S,A.T,A.R)
r.r=A.cr.gp(0)
r.c=4
r.d=A.by
n=r.G()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bf(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.ao(A.O,A.M,A.S,A.T,A.R)
s.r=(a4?A.bf:A.aK).gp(0)
n=s.G()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bX(H.v8,8+u*6+A.k.F(s,6))
q=new B.ao(A.O,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=1.8
q.r=A.hh.j(0.9-u*0.2).gp(0)
n=q.G()
b8.drawArc.apply(b8,[B.bG(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bs(D.f1D,A.hG)
s=$.S()
r=B.I()
r.r=A.e9.gp(0)
b9.az(b8,r)
if(b7){b8=B.I()
b8.r=A.ax.j(0.5*a5).gp(0)
b8.z=A.zJ
b9.ad(A.v7,34,b8)}a6=new B.aF(s.r,A.ag,b6,b6,B.a([],x.v))
a6.D(new B.aY(-16,12))
a6.D(new B.aq(-16,-2))
a6.D(new B.c5(0,-30,16,-2))
a6.D(new B.aq(16,12))
a6.D(new B.bt())
b8=B.I()
b8.r=B.ar(A.ek,D.bgm,a5).gp(0)
b9.aH(a6,b8)
b8=B.I()
b8.b=A.a9
b8.c=1.4
b8.r=A.bU.gp(0)
b9.aH(a6,b8)
if(b7){b8=b9.a
J.bl(b8.save())
b8.translate(0,-2)
b9.il(0,c1*7)
s=B.I()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bo(A.I,H.a7m,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bl(b8.save())
b8.translate(0,a7)
s=$.S().r
r=x.v
j=new B.aF(s,A.ag,b6,b6,B.a([],r))
j.D(new B.aY(-28,8))
j.D(new B.aq(-28,-2))
j.D(new B.aq(-16,-4))
j.D(new B.aq(-10,-16))
j.D(new B.aq(10,-16))
j.D(new B.aq(18,-4))
j.D(new B.aq(28,-2))
j.D(new B.aq(28,8))
j.D(new B.bt())
q=B.I()
q.sam(D.c2N.aA(0,D.f1R))
b9.aH(j,q)
q=new B.aF(s,A.ag,b6,b6,B.a([],r))
q.D(new B.aY(-8,-4))
q.D(new B.aq(-4,-13))
q.D(new B.aq(4,-13))
q.D(new B.aq(4,-4))
q.D(new B.bt())
p=B.I()
p.r=A.fk.gp(0)
b9.aH(q,p)
r=new B.aF(s,A.ag,b6,b6,B.a([],r))
r.D(new B.aY(8,-4))
r.D(new B.aq(8,-13))
r.D(new B.aq(11,-13))
r.D(new B.aq(15,-4))
r.D(new B.bt())
s=B.I()
s.r=A.fk.gp(0)
b9.aH(r,s)
for(a2=0;a2<2;++a2){a3=G.aAV[a2]
s=new B.ao(A.O,A.M,A.S,A.T,A.R)
s.r=A.av.gp(0)
n=s.G()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bl(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ao(A.O,A.M,A.S,A.T,A.R)
q.r=A.bO.gp(0)
q.c=1.6
n=q.G()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.F(s+u*8,14)
q=-4+u*5
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
p.r=A.aC.gp(0)
p.c=1.6
n=p.G()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.S().r
s=x.v
j=new B.aF(b8,A.ag,b6,b6,B.a([],s))
j.D(new B.aY(-18,20))
j.D(new B.aq(-14,-12))
j.D(new B.c5(0,-20,14,-12))
j.D(new B.aq(18,20))
j.D(new B.bt())
r=B.I()
r.sam(D.c3S.aA(0,D.f1C))
b9.aH(j,r)
r=new B.aF(b8,A.ag,b6,b6,B.a([],s))
r.D(new B.aY(14,-10))
r.D(new B.aq(30,-22))
r.D(new B.aq(32,-18))
r.D(new B.aq(16,-4))
r.D(new B.bt())
q=B.I()
q.r=A.e2.gp(0)
b9.aH(r,q)
s=new B.aF(b8,A.ag,b6,b6,B.a([],s))
s.D(new B.aY(-14,-8))
s.D(new B.c5(-34,-6,-18,12))
b8=B.I()
b8.b=A.a9
b8.c=5
b8.r=A.av.gp(0)
b9.aH(s,b8)
b8=B.I()
if(b7){s=B.ar(A.cL,A.tZ,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e9
b8.r=s.gp(0)
b9.aP(D.f1B,b8)
if(b7){b8=B.I()
b8.r=A.cL.j(0.3).gp(0)
b8.z=A.mU
b9.ad(A.aK_,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.ao(A.O,A.M,A.S,A.T,A.R)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.G()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.I()
b8.r=A.av.gp(0)
b9.ad(D.egW,3,b8)
return!0
case"lamp":if(b7){u=A.k.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aF($.S().r,A.ag,b6,b6,B.a([],x.v))
b8.D(new B.aY(-10,-14))
b8.D(new B.aq(-30,24))
b8.D(new B.aq(10,24))
b8.D(new B.aq(8,-14))
b8.D(new B.bt())
s=B.I()
s.r=A.dB.j(0.28*u).gp(0)
b9.aH(b8,s)
s=B.I()
s.r=A.dB.j(0.5*u).gp(0)
s.z=U.IB
b9.ad(D.ekX,24,s)}b8=B.bs(D.f2g,A.hG)
s=$.S()
r=B.I()
r.r=A.e9.gp(0)
b9.az(b8,r)
r=B.I()
r.r=A.dn.gp(0)
r.c=3
r.d=A.by
b9.bo(D.eh9,D.aKb,r)
r=B.I()
r.r=A.dn.gp(0)
r.c=3
r.d=A.by
b9.bo(D.aKb,D.ekY,r)
a9=new B.aF(s.r,A.ag,b6,b6,B.a([],x.v))
a9.D(new B.aY(-14,-16))
a9.D(new B.aq(6,-26))
a9.D(new B.aq(10,-12))
a9.D(new B.aq(-10,-6))
a9.D(new B.bt())
s=B.I()
s.r=(b7?A.aT:A.kh).gp(0)
b9.aH(a9,s)
b8=B.I()
b8.r=(b7?A.c:A.bn).gp(0)
b9.ad(D.el0,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
b0=new B.aF(b8,A.ag,b6,b6,B.a([],s))
b0.D(new B.aY(-34,-6))
b0.D(new B.c5(0,22,34,-6))
r=B.I()
r.b=A.a9
r.c=2
r.r=A.hg.gp(0)
b9.aH(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new B.ao(A.O,A.M,A.S,A.T,A.R)
b3.r=D.a4d[u].j(0.6).gp(0)
b3.z=A.ID
n=b3.G()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aF(b8,A.ag,b6,b6,b3)
b3.push(new B.aY(p-3,o))
b3.push(new B.aq(p+3,o))
b5=o+11
b3.push(new B.aq(p+5,b5))
b3.push(new B.c5(p,o+17,p-5,b5))
b3.push(new B.bt())
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
if(b2)o=D.a4d[u]
else{o=B.ar(D.a4d[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.G()
p=b4.gbu().a.snapshot()
r.drawPath((b4.e=new B.cd(p)).a,n)
n.delete()}return!0}return C.ikh(b9,c0,c1,c2)},
fS:function fS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ha3(d){var w=D.mi.h(0,d)
return(w==null?null:w.b)===D.A8},
ilu(d,e,f){return B.a5(d,!1).cc(B.v3(null,!1,!0,!0,new C.fW9(e,f),A.eR,null,A.p9,new C.fWa(),x.H))},
JI:function JI(d,e){this.a=d
this.b=e},
mn:function mn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fW9:function fW9(d,e){this.a=d
this.b=e},
fWa:function fWa(){},
Ve:function Ve(d,e,f){this.c=d
this.d=e
this.a=f},
bl0:function bl0(d,e){var _=this
_.d=$
_.e=null
_.bw$=d
_.a8$=e
_.c=_.a=null},
dUr:function dUr(d){this.a=d},
dUq:function dUq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUo:function dUo(){},
dUp:function dUp(d){this.a=d},
dUn:function dUn(d){this.a=d},
dUm:function dUm(d,e){this.a=d
this.b=e},
dUl:function dUl(d,e){this.a=d
this.b=e},
dUk:function dUk(d){this.a=d},
dUj:function dUj(d){this.a=d},
dUf:function dUf(d){this.a=d},
dUe:function dUe(d){this.a=d},
dUi:function dUi(d,e,f){this.a=d
this.b=e
this.c=f},
dUh:function dUh(d){this.a=d},
dUg:function dUg(d){this.a=d},
bwS:function bwS(d,e,f){this.b=d
this.c=e
this.a=f},
af2:function af2(d,e,f){this.b=d
this.c=e
this.a=f},
aMD:function aMD(){},
a1k(d,e,f,g,h,i){return new C.bvE(d,e,f,g,h,i)},
bvE:function bvE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fp5:function fp5(){},
fp6:function fp6(){},
fp7:function fp7(){},
fp8:function fp8(){},
fp9:function fp9(){},
fpa:function fpa(){},
fpb:function fpb(){},
fpc:function fpc(){},
a8K:function a8K(d){this.a=d},
ckK:function ckK(d){this.a=d},
ckL:function ckL(){},
ckJ:function ckJ(d,e){this.a=d
this.b=e},
ckI:function ckI(d){this.a=d},
WP:function WP(d){this.a=d},
aFO:function aFO(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h2$=f
_.lY$=g
_.f7$=h
_.h3$=i
_.bw$=j
_.a8$=k
_.c=_.a=null},
eQH:function eQH(d){this.a=d},
eQD:function eQD(d){this.a=d},
eQC:function eQC(d,e){this.a=d
this.b=e},
eQF:function eQF(d,e){this.a=d
this.b=e},
eQE:function eQE(d,e){this.a=d
this.b=e},
eQG:function eQG(d){this.a=d},
bx3:function bx3(d,e,f){this.b=d
this.c=e
this.a=f},
VD:function VD(d){this.a=d},
blb:function blb(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h2$=d
_.lY$=e
_.f7$=f
_.h3$=g
_.bw$=h
_.a8$=i
_.c=_.a=null},
e0g:function e0g(){},
e0h:function e0h(){},
e0b:function e0b(d,e){this.a=d
this.b=e},
e0d:function e0d(d,e){this.a=d
this.b=e},
e0e:function e0e(d){this.a=d},
e0c:function e0c(d){this.a=d},
e0f:function e0f(d){this.a=d},
brN:function brN(d,e,f){this.b=d
this.c=e
this.a=f},
UQ:function UQ(d){this.a=d},
bkN:function bkN(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h2$=d
_.lY$=e
_.f7$=f
_.h3$=g
_.bw$=h
_.a8$=i
_.c=_.a=null},
dM_:function dM_(){},
dM0:function dM0(){},
dLV:function dLV(){},
dLY:function dLY(d,e){this.a=d
this.b=e},
dLX:function dLX(d,e){this.a=d
this.b=e},
dLZ:function dLZ(d){this.a=d},
dLW:function dLW(d){this.a=d},
aJf:function aJf(d,e,f){this.a=d
this.b=e
this.c=f},
Vu:function Vu(d){this.a=d},
bl2:function bl2(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dXM:function dXM(d,e){this.a=d
this.b=e},
dXN:function dXN(d){this.a=d},
dXL:function dXL(d,e){this.a=d
this.b=e},
dXO:function dXO(d){this.a=d},
dXK:function dXK(d,e){this.a=d
this.b=e},
dXP:function dXP(d){this.a=d},
dXJ:function dXJ(d,e){this.a=d
this.b=e},
dXQ:function dXQ(d,e){this.a=d
this.b=e},
dXI:function dXI(d,e){this.a=d
this.b=e},
dXR:function dXR(d){this.a=d},
dXH:function dXH(d,e){this.a=d
this.b=e},
dXS:function dXS(d){this.a=d},
dXG:function dXG(d){this.a=d},
dXT:function dXT(d){this.a=d},
dXF:function dXF(d){this.a=d},
dXU:function dXU(d){this.a=d},
dXV:function dXV(d){this.a=d},
dXE:function dXE(d){this.a=d},
bn3:function bn3(d,e,f){this.b=d
this.c=e
this.a=f},
Wc:function Wc(d){this.a=d},
aF7:function aF7(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eny:function eny(d,e){this.a=d
this.b=e},
enz:function enz(d,e,f){this.a=d
this.b=e
this.c=f},
enx:function enx(d,e,f){this.a=d
this.b=e
this.c=f},
enA:function enA(d){this.a=d},
enw:function enw(d){this.a=d},
enE:function enE(d){this.a=d},
enD:function enD(d,e){this.a=d
this.b=e},
enC:function enC(d,e){this.a=d
this.b=e},
enF:function enF(d,e){this.a=d
this.b=e},
enB:function enB(d,e){this.a=d
this.b=e},
enG:function enG(d){this.a=d},
Wm:function Wm(d){this.a=d},
aFs:function aFs(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eyk:function eyk(d){this.a=d},
eyl:function eyl(d){this.a=d},
eyi:function eyi(d,e){this.a=d
this.b=e},
eyj:function eyj(d){this.a=d},
eyh:function eyh(d){this.a=d},
eym:function eym(d){this.a=d},
eyn:function eyn(d){this.a=d},
eyo:function eyo(d){this.a=d},
eyp:function eyp(d,e){this.a=d
this.b=e},
WG:function WG(d){this.a=d},
bmh:function bmh(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eMb:function eMb(){},
eMk:function eMk(){},
eMg:function eMg(d){this.a=d},
eMf:function eMf(){},
eMh:function eMh(d,e){this.a=d
this.b=e},
eMe:function eMe(d,e){this.a=d
this.b=e},
eMi:function eMi(d){this.a=d},
eMd:function eMd(d,e){this.a=d
this.b=e},
eMj:function eMj(d){this.a=d},
eMc:function eMc(d){this.a=d},
Wb:function Wb(d){this.a=d},
blM:function blM(d,e,f,g,h,i,j,k){var _=this
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
_.h2$=f
_.lY$=g
_.f7$=h
_.h3$=i
_.bw$=j
_.a8$=k
_.c=_.a=null},
emd:function emd(){},
eme:function eme(){},
em6:function em6(d){this.a=d},
em5:function em5(d){this.a=d},
em7:function em7(d){this.a=d},
em4:function em4(d){this.a=d},
em8:function em8(d){this.a=d},
em3:function em3(d){this.a=d},
em9:function em9(d,e){this.a=d
this.b=e},
em2:function em2(d,e){this.a=d
this.b=e},
ema:function ema(d){this.a=d},
em1:function em1(d,e){this.a=d
this.b=e},
emb:function emb(d){this.a=d},
em0:function em0(d,e){this.a=d
this.b=e},
emc:function emc(d){this.a=d},
em_:function em_(d,e){this.a=d
this.b=e},
beD:function beD(d,e,f){this.c=d
this.d=e
this.a=f},
aMr:function aMr(){},
byP:function byP(){},
aMK:function aMK(){},
byV:function byV(){},
aNc:function aNc(){},
bz3:function bz3(){},
aND:function aND(){},
bzc:function bzc(){},
Je(d,e,f,g){var w,v,u,t,s,r,q,p=$.asH
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.L)(e),++w)E.ml(d,e[w],f,g)
return}for(p=B.d5(e,0,B.dB(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bT(p,p.gL(0),v.k("bT<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.ml(d,s,f,g)
else B.bP(new B.bb(1000*q),new C.ckG(d,s,f,g),u)}},
cie(d){return C.hR8(d)},
hR8(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cie=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cie)
case 7:r=f
q=B.aT(J.r(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.U(x.N,x.z)
w=1
break}p=A.X.aM(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a2(p,o,n):B.U(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=B.U(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cie,v)},
b2g(d,e){return C.hR9(d,e)},
hR9(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2g=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2g)
case 6:s=g
w=7
return B.b(s.au("String","ngmy_play_progress_v1_"+d,A.X.aq(e,null)),$async$b2g)
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
return B.i($async$b2g,v)},
ckG:function ckG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ib7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.L)(w),++q){p=w[q]
u.push(B.H(["k",p.b,"x",B.oc(A.k.ac(p.c,4)),"y",B.oc(A.k.ac(p.d,4)),"v",p.e,"l",B.oc(A.k.ac(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oc(A.k.ac(p.as,3)),"ch",p.at,"vc",B.oc(A.k.ac(p.z,3)),"s",B.oc(A.k.ac(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.L)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a7(f).k("cs.E"))
A.d.ff(l)
return A.X.aq(B.H(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
ikH(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.X.aM(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.aa(h)
A.d.aa(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.r(w,"parts"))
f=J.aW(f==null?A.cv:f)
while(f.C()){u=f.gS(f)
t=i.a(u)
e=B.aT(J.r(t,"k"))
s=e==null?"":e
if(!$.qx().aj(0,s)){J.cc(v,null)
continue}d=s
a0=B.aK(J.r(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.r(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tL(a2,d,a0,a1)
a3.ara(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aK(J.r(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aK(J.r(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aK(J.r(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.jY(J.r(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.jY(J.r(t,"b"))
r.x=d===!0
d=B.aT(J.r(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aK(J.r(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aK(J.r(t,"ch"))
r.at=A.k.N(d==null?0:d)
d=B.aK(J.r(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aK(J.r(t,"s"))
r.ch=A.k.E(d==null?1:d,1,2.6)
J.cc(v,r)}i=g.a(J.r(w,"wires"))
i=J.aW(i==null?A.cv:i)
h=x.j
while(i.C()){q=i.gS(i)
p=h.a(q)
f=B.aK(J.r(p,0))
o=f==null?a5:A.k.N(f)
f=B.aK(J.r(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.r(v,o)
l=J.r(v,n)
if(m!=null&&l!=null)a6.alo(m,A.k.N(B.e8(J.r(p,1))),l,A.k.N(B.e8(J.r(p,3))))}i=B.aK(J.r(w,"challenge"))
i=A.k.N(i==null?0:i)
k=B.aX(x.S)
h=g.a(J.r(w,"done"))
h=J.aW(h==null?A.cv:h)
while(h.C()){j=h.gS(h)
J.cc(k,A.k.N(B.e8(j)))}return new B.bq_(i,k)}catch(a4){return a5}},
fF8(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fF8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fF8)
case 7:r=o.aT(n.r(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fF8,v)},
bFy(d){return C.img(d)},
img(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bFy=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bFy)
case 7:w=6
return B.b(f.au("String","ngmy_electronics_lab_v1",d),$async$bFy)
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
return B.i($async$bFy,v)}},D,H,X,Ak,Y,A2,Al
J=c[1]
B=c[0]
A=c[2]
A3=c[118]
Z=c[156]
A4=c[148]
A_=c[146]
R=c[140]
A5=c[133]
A6=c[150]
A7=c[158]
A8=c[106]
A9=c[135]
A0=c[117]
N=c[142]
Aa=c[157]
Ab=c[149]
Ac=c[153]
Ad=c[75]
T=c[84]
Ae=c[87]
P=c[127]
Af=c[131]
U=c[138]
V=c[141]
W=c[152]
E=c[29]
K=c[3]
F=c[38]
I=c[108]
A1=c[102]
O=c[151]
Ag=c[101]
Ah=c[154]
S=c[128]
Ai=c[155]
Q=c[144]
Aj=c[26]
L=c[28]
G=c[99]
M=c[97]
C=a.updateHolder(c[18],C)
D=c[137]
H=c[139]
X=c[145]
Ak=c[57]
Y=c[110]
A2=c[147]
Al=c[143]
C.akr.prototype={}
C.VW.prototype={
R(){return new C.blA(B.U(x.N,x.i),new B.au(A.at,$.ax()),B.a([],x.X),B.a([],x.F),B.mS(0,null,null))}}
C.blA.prototype={
gWJ(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
this.ch.q()
this.a1()},
Py(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Py=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aV.al$.d.c
if(s!=null)s.jm()
p.bP(0,A.cb)
t.m(new C.efl(t))
t.a.toString
p=t.gWJ()
w=3
return B.b(C.bB5(C.hZV(q,C.ib_(p),o,t.ay)),$async$Py)
case 3:s=e
r=s==null?null:J.j5(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.icp(q,p,o)
if(t.c==null){w=1
break}t.m(new C.efm(t,o,r))
$.aV.x1$.push(new C.efn(t))
case 1:return B.h(u,v)}})
return B.i($async$Py,v)},
YM(d){return this.c18(d)},
aXb(){return this.YM(null)},
c18(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$YM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aV.al$.d.c
if(s!=null)s.jm()
t.f.saY(0,o)
t.m(new C.efy(t))
F.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bB5(C.i5X(o)),$async$YM)
case 3:r=n.a=m.ikm(f)
p.b=""
if(r!=null&&!C.ib0(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.icq(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.akr(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.efz(p,t))
t.c6D(p.a)
case 1:return B.h(u,v)}})
return B.i($async$YM,v)},
c6D(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
A.d.aa(w)
w=++m.as
v=m.gWJ()
A.d.aa(v.a)
A.d.aa(v.b)
m.e.aa(0)
m.m(new C.efu(m))
t=d.d
s=B.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.efs(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.efv(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.L)(r),++u){p.$2(o,new C.efw(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.efx(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bq.j(0.1),g=B.m(16),f=B.J(A.bq.j(0.35),A.r,1)
if(m.x)j=B.B(B.a([D.f9k,A.bc,B.E(B.d(m.Q,l,l,l,l,l,l,A.Aj,l,l,l),1)],x.p),A.m,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fA7
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.Vb,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fkn,l,l,l)],v),A.m,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uc,B.d(u,l,l,l,l,l,l,D.fn9,l,l,l),l))
w.push(A.cS)
w.push(B.d(k.b,l,l,l,l,l,l,I.Em,l,l,l))
u=k.e
if(u.length!==0){t=A.aT.j(0.12)
s=B.m(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fpH,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i4,A.ck,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aC
w.push(new B.D(A.Nk,new B.ca(A.aM,A.e,A.i,A.E,l,A.p,l,0,B.a([new B.y(t,l,A.lQ,l,l,l,l,l,l,l,l,l),A.bm,new B.by(1,A.ba,new B.y(q,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.L)(j),++p){o=j[p]
t=new B.aP(12,12)
s=new B.aP(12,12)
A.d.v(w,B.a([A.Q,new B.bM(A.a8,l,l,B.p(l,new B.y(o.a,l,A.UT,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.bq.j(0.3),l,l,new B.bh(t,t,t,t),l,l,A.n),l,l,l,l,A.h6,l,l,l),l),A.au,B.p(l,new B.y(o.b,l,D.fvl,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bh(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.emu)
j=B.ch(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.aiE(B.p(l,j,A.f,l,new B.aZ(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.byO,A.eB,l,l,1/0),A.b5,A.iD),B.E(C.heK(m.gWJ(),l,l,m.e),1)],w),A.m,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dX("Ask about it",i,new C.efC(m),l,A.bq,l),new E.dX("Invent something new",!i,new C.efD(m),l,A.bq,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dpv[p]
i.push(new E.dX(n,!1,new C.efE(m,n),l,A.bq,l))}f.push(new E.fc(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.d7K[p]
i.push(new E.dX(r,!1,new C.efF(m,r),l,A.bq,l))}f.push(new E.fc(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Y,!1,l,!0,A.t,l,B.aN(),m.f,l,l,l,l,l,2,B.br(l,new B.b5(4,B.m(16),A.a0),l,A.eS,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kx,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.efG(m,k),l,!1,l,l,!1,l,!0,l,A.aa,l,l,l,l,l,l,l,l,l,l,l,A.df,!0,A.a4,l,A.an,l,A.UG,l,l),1)
h=m.at
v=h&&j?D.bOa:A.e5
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.ad,new E.fD(v,j,new C.efH(m,k),A.bq,l)],w),A.m,l,A.e,A.i,0,l,l))
return E.lw(A.bq,A.f0,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.P,0,A.p))}}
C.Gs.prototype={}
C.va.prototype={}
C.Wi.prototype={
R(){return new C.aFm(A.I,A.I,A.aw,B.aX(x.S),$,A.bC,0,B.a([],x.X),null,null)}}
C.aFm.prototype={
gaYs(){var w,v,u,t=this,s=D.I2[t.cx],r=D.RW[t.cy],q=D.D1[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.en(w,w.r,B.a7(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.azc[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new C.euE())},
ga38(){return D.I2[this.cx].d/this.gaYs()},
gaPC(){return 0.1*(D.I2[this.cx].d/0.9)/D.RW[this.cy].d},
Z(){this.a2()
this.m7()
C.cie("rocket_lander").bK(new C.euY(this),x.h)},
c6M(){var w=this
w.ay=A.k.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cK.ag()*0.6
w.f=new B.t(0.15+A.cK.ag()*0.7,0.08)
w.r=new B.t((A.cK.ag()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mr(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.euZ())
return}w=D.rS[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.E(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.t(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga38()
v=v.a7(0,new B.t(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaPC())}if(m.dy){t=m.r
v=v.aE(0,t.aI(0,t.gcC()*6*D.aBc[m.d]))}t=m.r=m.r.a7(0,v.aI(0,d))
s=m.f=m.f.a7(0,t.aI(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.t(-t.a*0.4,t.b)
t=new B.t(A.k.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.t(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.D1[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b2g("rocket_lander",B.H(["unlocked",t],x.N,x.z))
C.Je("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga38()/(D.rS[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ac(m.ga38()/(D.rS[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
F.dF(80,"",500,0,0.6,"noise")
B.fM()}}if(m.Q&&m.x>0&&A.o.F(A.k.bf(m.CW*20),2)===0)F.dF(90,"",70,0,0.12,"noise")
m.m(new C.ev_())},
agC(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fmD,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dX(e[w].a,f.$1(w),new C.euG(this,g,w),v,h,v))
return new B.D(A.eI,B.x(B.a([u,A.cS,B.bY(A.bG,s,A.br,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bG2(d){var w,v,u,t,s=this,r=null,q=s.ga38()/(D.rS[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaPC()),o=D.aBc[s.d],n=B.m(24),m=d.c,l=B.J(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,G.aa5,r,r,r),A.W,s.agC("ENGINE: "+D.I2[s.cx].b,D.I2,new C.euv(s),new C.euw(s),A.cL),s.agC("FUEL TANK: "+D.RW[s.cy].b,D.RW,new C.eux(s),new C.euy(s),A.be),s.agC("LANDING GEAR: "+D.D1[s.db].b,D.D1,new C.euz(s),new C.euA(s),A.aJ),s.agC("EXTRAS (tap to add)",D.azc,new C.euB(s),new C.euC(s),A.bq)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fST)
o=(q?A.be:A.c0).j(0.14)
w=B.m(12)
v=A.k.ac(s.gaYs(),2)
u=A.k.ac(s.ga38()/(D.rS[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.D1[s.db].d*100)+".",r,r,r,r,r,r,D.fnh,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i4,A.bT,r,r,r))
m.push(A.W)
m.push(new B.bM(A.A,r,r,new E.fD(A.ot,"Launch",new C.euD(s),A.be,r),r))
return B.as(B.p(r,B.ch(B.x(m,A.E,r,A.e,A.P,0,A.p),A.t,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.lV,new B.o(D.boN,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aZB(d,e,f,g){var w=null,v=f?A.cL:A.c.j(0.1),u=B.m(18),t=B.J(A.aX,A.r,1)
return B.mH(A.iF,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eus(e),new C.eut(e),w,w,w,w,new C.euu(e))},
aZA(d,e,f){return this.aZB(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cu(new C.euR(s,D.rS[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rS[w].a:"\ud83d\udd12"
o.push(new E.dX(v,s.d===w,new C.euS(s,w),r,D.rS[w].c,r))}v=B.a([s.aZA(G.aoY,new C.euT(s),s.y),A.bc,s.aZB(A.wn,new C.euU(s),s.Q,130),A.bc,s.aZA(A.P0,new C.euV(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aJ:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.bc,B.aA(r,B.p(r,D.bSq,A.f,r,r,new B.o(u,r,B.J(A.aX,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.euW(s),r,r,r,r,r,r,!1,A.a3)],p))}return E.lw(A.cL,A.f0,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fc(o,"WORLD",r),B.B(v,A.m,r,A.b9,A.i,0,r,r)],p),A.m,r,A.e,A.P,0,A.p))}}
C.bix.prototype={
a3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rS[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.S(),d=B.I(),a0=j.c,a1=B.ar(K.Z6,a0,0.25)
a1.toString
d.sam(new B.a9(A.b0,A.b6,A.x,B.a([G.ag2,a1],x.O),l,l).aA(0,new B.a3(0,0,g,f)))
a2.aP(new B.a3(0,0,g,f),d)
w=new B.e4()
w.cY(5)
for(g=a2.a,v=0;v<70;++v){f=w.ag()
d=w.ag()
a1=w.ag()
u=new B.ao(A.O,A.M,A.S,A.T,A.R)
u.r=A.c.j(0.2+w.ag()*0.5).gp(0)
t=u.G()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=B.a([],f)
r=new B.aF(e.r,A.ag,l,l,d)
r.D(new B.aY(0,s+14))
q=new B.e4()
q.cY(2)
for(p=0;p<=i;p+=18){e=new B.aq(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.ag()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bx(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.D(new B.aq(i,h))
r.D(new B.aq(0,h))
r.D(new B.bt())
e=$.S()
d=B.I()
d.r=B.ar(a0,A.w,0.6).gp(0)
a2.aH(r,d)
o=B.bK(new B.t(k.ax*i,s+10),8,k.ay*i)
d=B.bs(o,A.id)
a0=B.I()
a0.r=A.bf.gp(0)
a2.az(d,a0)
a0=B.bs(o.cr(2),A.mX)
d=B.I()
d.b=A.a9
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.az(a0,d)
if(k.as==="ready")return
d=k.f
J.bl(g.save())
g.translate(d.a*i,d.b*h)
a2.il(0,k.w)
i=k.as
if(i==="crashed"){k=B.I()
k.r=A.cL.j(0.6).gp(0)
k.z=U.IB
a2.ad(A.I,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aF(i,A.ag,l,l,B.a([],f))
n.D(new B.aY(-8,18))
n.D(new B.aq(0,44+Math.sin(k.CW*40)*8))
n.D(new B.aq(8,18))
n.D(new B.bt())
k=B.I()
k.r=A.aT.gp(0)
a2.aH(n,k)
i=new B.aF(i,A.ag,l,l,B.a([],f))
i.D(new B.aY(-4,18))
i.D(new B.aq(0,32))
i.D(new B.aq(4,18))
i.D(new B.bt())
k=B.I()
k.r=A.c.gp(0)
a2.aH(i,k)}k=e.r
m=new B.aF(k,A.ag,l,l,B.a([],f))
m.D(new B.aY(0,-26))
m.D(new B.c5(14,-10,11,18))
m.D(new B.aq(-11,18))
m.D(new B.c5(-14,-10,0,-26))
m.D(new B.bt())
i=B.I()
i.sam(D.c4l.aA(0,D.f1p))
a2.aH(m,i)
i=B.I()
i.r=A.aJ.gp(0)
a2.ad(H.v8,5,i)
i=new B.aF(k,A.ag,l,l,B.a([],f))
i.D(new B.aY(-11,6))
i.D(new B.aq(-20,20))
i.D(new B.aq(-11,18))
i.D(new B.bt())
h=B.I()
h.r=A.ax.gp(0)
a2.aH(i,h)
f=new B.aF(k,A.ag,l,l,B.a([],f))
f.D(new B.aY(11,6))
f.D(new B.aq(20,20))
f.D(new B.aq(11,18))
f.D(new B.bt())
k=B.I()
k.r=A.ax.gp(0)
a2.aH(f,k)
g.restore()},
av(d){return!0}}
C.aNk.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bz5.prototype={
q(){var w,v,u
for(w=this.h3$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h2$
w===$&&B.c()
w.q()
this.by4()}}
C.aTj.prototype={}
C.a3z.prototype={}
C.bbt.prototype={}
C.UP.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eD(["skin"],x.N),o=new Float32Array(0)
return new C.aDQ(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.Ln,D.Ln,A.aw,A.cK,o,new Int32Array(0),$,A.bC,0,B.a([],x.X),null,null)}}
C.aDQ.prototype={
Z(){var w=this
w.a2()
w.m7()
w.as=new C.c5f(w.gcfi())
new C.dLT(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a4(0)
v.d=null}this.bx8()},
cfj(d){var w,v=this
if(v.c==null)return
w=J.a6(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f6(0,B.H(["t","init","data",$.hoM],x.N,x.z))
v.at=!0
v.ax=""
v.azQ()
break
case"pick":v.m(new C.dLv(v,d))
break
case"shot":v.ait(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
break}},
azQ(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ax2[q.CW]
v=new C.dLw()
u=q.ay
u=B.C(u,B.a7(u).k("cs.E"))
A.d.ff(u)
t=x.N
s=B.H(["layers",u,"skinMode",q.ch,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.X.aq(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.U(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.f6(0,u)}},
ait(d){return this.cwg(d)},
cwg(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ait=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cF.aO(A.a.b5(d,A.a.cp(d,",")+1))
w=6
return B.b(B.aw4(B.a([B.cDj(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$ait)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.gV).f.U(K.aSh)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ait,v)},
azf(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
mr(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bf(w)!==A.k.bf(v.ok)){E.WI("kick",0,0.4)
v.Uk(170,new C.dLU())}v.ok=w
return},
aec(d){var w,v,u,t,s=this
s.m(new C.dLx(s,d))
if(d==null){s.fx=D.Ln
s.dy=1
w=s.as
if(w!=null)w.f6(0,B.H(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.T(w).k("Z<1>")
u=B.C(new B.Z(w,new C.dLy(d),v),v.k("M.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.M(0,t)
if(s.ch===2)s.ch=1}s.azQ()
w=s.as
if(w!=null)w.f6(0,B.H(["t","focus","group",d],x.N,x.z))
s.go=0
s.cyK(t,d)
return},
cyK(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.WI("kick",0,0.8)
this.Uk(260,new C.dLz())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")F.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.Uk(w*70,new C.dLA(this))
else if(A.a.t(e,"intestine")||e==="Stomach")F.dF(110,"",360,0.7,0.3,"saw")
else E.h4A("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":F.dF(210+e.length*4,"",80,0.6,0.55,"tri")
F.dF(2400,"",20,0,0.3,v)
break
case"muscle":F.dF(70,"",150,1,0.6,"sine")
break
case"vessel":F.dF(300,"",380,0.4,0.22,v)
E.WI("kick",0,0.3)
break
default:E.h4A("organic",2+A.o.F(e.length,6),200,0.4)}},
cDl(d){this.m(new C.dLC(this,d))},
aZT(){var w,v,u,t,s,r,q,p=this,o=B.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
if(p.azf(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.M(0,s.a)}q=B.C(o,o.$ti.k("cs.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.ap(w)]
p.p4=""},
bXJ(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dLs(u,w,d))
v=x.t
C.Je("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.Uk(1100,new C.dLt(u))
return}if(d==null){if(u.cx!=null)u.aec(null)
return}u.aec(d)},
c0r(d,e){var w,v=this,u=null,t=B.m(18),s=B.J(A.c_.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.fiL,u,u,u)}else if(d==null||e==null)w=D.fxv
else{w=x.p
w=B.B(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.ht,u,u,u),A.cS,B.d(e.b,u,u,u,u,u,u,I.Em,u,u,u)],w),A.E,u,A.e,A.P,0,A.p),1),B.aH(u,u,u,u,D.bUX,u,u,u,new C.dLu(v),u,u,u,u,"Back to the whole body",A.cc)],w),A.E,u,A.e,A.i,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(K.XB,u,s,t,u,u,A.n),u,u,u,u,R.akr,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dAB.h(0,g)
i.azQ()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dhO
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.L)(v),++s){r=v[s]
if(i.azf(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=B.a([B.aH(h,h,h,h,K.ow,h,h,h,new C.dLJ(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bJ:B.Bz(h,A.pw,q)}else q=A.kv
q=B.x(B.a([B.E(q,1),new B.D(G.a_a,i.c0r(g,f),h)],v),A.m,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.d9i[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new E.dX(l,n,new C.dLK(i,o),o.c,A.c_,h))}p=B.a([new E.fc(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.L)(w),++s){k=w[s]
n.push(new E.dX(k,k===i.cx,new C.dLL(i,k),h,A.aT,h))}p.push(new E.fc(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(E.iL(A.c0,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dLM(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new E.FD(D.ax2[j],i.CW===j,new C.dLN(i,j),!1,h))
p.push(new E.fc(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new E.dX("Spin",n,new C.dLO(i),D.anL,A.aJ,h),new E.fD(A.oo,"Reset view",new C.dLP(i),A.c,h),new E.dX(l,m,new C.dLQ(i),A.Hm,A.aT,h)],v)
if(t.t(0,"organ"))v.push(new E.dX("Heartbeat sound",i.k4,new C.dLR(i),A.os,A.c0,h))
p.push(new E.fc(v,h,h))
return E.lw(A.c_,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.P,0,A.p))}}
C.aMp.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.aMq.prototype={
q(){var w,v,u
for(w=this.h3$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h2$
w===$&&B.c()
w.q()
this.bx7()}}
C.c5f.prototype={
kR(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hv_
$.hv_=v+1
u="ngmy-body-viewer-"+v
$.x8()
$.pK().oY(u,new C.c5g(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fA(v,"message",new C.c5h(t),!1,x.gA)
t.b=u},
f6(d,e){var w,v
try{w=this.c
if(w!=null){w=B.QR(w.contentWindow)
if(w!=null)J.aiu(w,e,"*")}}catch(v){}}}
C.yo.prototype={}
C.CD.prototype={}
C.nz.prototype={}
C.bcc.prototype={}
C.UU.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aDS(B.U(w,x.a2),B.a([],x.cB),B.U(w,v),B.U(w,v),B.U(w,u),A.aw,A.I,A.I,B.aX(u),$,A.bC,0,B.a([],x.X),null,null)}}
C.aDS.prototype={
Z(){var w=this
w.a2()
w.m7()
w.adb()
$.aV.x1$.push(new C.dNy(w))},
adb(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adb=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$adb)
case 6:q=e.tC("ngmy_circuit_passed_v1")
r=q==null?A.Y:q
if(s.c!=null)s.m(new C.dNc(s,r))
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
return B.i($async$adb,v)},
adx(d){return this.c4k(d)},
c4k(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adx=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.M(0,d)
u=3
w=6
return B.b(B.az(),$async$adx)
case 6:r=f
q=s.cx
p=B.a7(q).k("k3<cs.E,n>")
q=B.C(new B.k3(q,new C.dNf(),p),p.k("M.E"))
r.au("StringList","ngmy_circuit_passed_v1",q)
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
return B.i($async$adx,v)},
axY(d,e,f,g){var w="c"+this.y++,v=new C.CD(w,e,f,g)
this.d.n(0,w,v)
return v},
mG(d,e,f){return this.axY(0,e,f,0)},
acx(d,e){var w
if(D.zH.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a7(0,new B.t(-36,w))},
tZ(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aTF(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.f7$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ec(m,D.cTq[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tZ(p,0)&&n.tZ(p,1)
break
case"or":p=q.a
o=n.tZ(p,0)||n.tZ(p,1)
break
case"xor":p=q.a
o=n.tZ(p,0)!==n.tZ(p,1)
break
case"nand":p=q.a
o=!(n.tZ(p,0)&&n.tZ(p,1))
break
case"nor":p=q.a
o=!(n.tZ(p,0)||n.tZ(p,1))
break
case"not":o=!n.tZ(q.a,0)
break
default:o=n.tZ(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bQi(){return this.aTF(null)},
mr(d){var w,v,u,t,s,r,q,p,o,n=this
n.bQi()
if(!n.ax)return
for(w=n.d,w=new B.bd(w,B.a7(w).k("bd<2>")).gaf(0),v=new B.f2(w,new C.dNz()),u=n.f,t=n.w,s=0;v.C();){r=w.gS(0).a
if(u.h(0,r)===!0){q=n.f7$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.f7$)
o=s+1
F.dF(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
axZ(d){var w=this
w.d.aa(0)
A.d.aa(w.e)
w.f.aa(0)
w.r.aa(0)
w.cy=null},
m8(d,e){var w=this.x
return new B.t(d*w.a,e*w.b)},
aua(d){var w=this
if(w.x.A(0,A.aw)){$.aV.x1$.push(new C.dNa(w,d))
return}w.m(new C.dNb(w,d))},
cz1(d){this.m(new C.dNg(this,d,$.bFT()[d]))},
c94(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bFT()[a0]
v=d.d
u=B.a7(v).k("bd<2>")
t=u.k("Z<M.E>")
s=t.k("M.E")
r=B.C(new B.Z(new B.bd(v,u),new C.dN5(),t),s)
A.d.aZ(r,new C.dN6())
q=B.C(new B.Z(new B.bd(v,u),new C.dN7(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dN8(d,w))
return}u=d.r
p=B.dN(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dt(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h8(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aTF(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lv(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aG(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.aa(0)
u.v(0,p)
d.m(new C.dN9(d,o,a0))},
ayN(d){var w,v,u,t,s=this.d,r=B.a7(s).k("bd<2>")
s=B.C(new B.bd(s,r),r.k("M.E"))
r=B.T(s).k("dw<1>")
s=new B.dw(s,r)
s=new B.bT(s,s.gL(0),r.k("bT<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
chI(d){var w,v,u,t,s,r=this.d,q=B.a7(r).k("bd<2>")
r=B.C(new B.bd(r,q),q.k("M.E"))
q=B.T(r).k("dw<1>")
r=new B.dw(r,q)
r=new B.bT(r,r.gL(0),q.k("bT<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c0k(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zH.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.acx(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bP3(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.acx(p,o)
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
c96(d){var w,v,u,t=this,s=t.ayN(d)
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
F.dF(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dNh())
return}u=t.bP3(d)
if(u!=null)t.m(new C.dNi(t,u))
else t.m(new C.dNj(t))},
awM(d){return this.c3j(d)},
c3j(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$awM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.ayN(d)
if(s==null){w=1
break}B.jQ()
t.m(new C.dNe(t,s))
case 1:return B.h(u,v)}})
return B.i($async$awM,v)},
bBS(d){if(this.x.A(0,A.aw))return
this.m(new C.dN4(this,d,A.cK))
B.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bFT()[g]
g=x.p
v=B.a([B.aH(h,h,h,h,B.X(i.ax?A.os:V.rN,A.ac,h,h,h,21),h,h,h,new C.dNs(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cp.j(0.14)
r=B.J(A.cp.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fhT,h,h,h),B.d(w.b,h,h,h,h,h,h,H.aa4,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.l7,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.be:A.eO,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bI(D.fJ_,h,i.gc93(),B.bo(A.cp,h,h,h,h,h,h,h,h,h,h,A.cc))],g),A.m,h,A.e,A.i,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,T.Ns,D.bzt,h,h,1/0))}u.push(B.E(B.cu(new C.dNt(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.zH.h(0,r).a+": "+D.zH.h(0,r).e,h,h,h,h,h,h,A.tn,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a_e,A.bT,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.zH.gdW(D.zH),s=s.gaf(s);s.C();){r=s.gS(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.p(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bF,new B.y(p.a,h,D.aUe,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.P,0,A.p),A.f,h,h,new B.o(n,h,new B.bH(m,m,m,m),new B.bh(q,q,q,q),h,h,A.n),h,h,h,A.fu,Ag.Np,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dNu(i,r),h,h,h,h,h,h,!1,A.a3))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dmi[l]
s.push(new E.fD(A.P1,k.b,new C.dNv(i,k),A.cp,h))}s.push(new E.fD(K.wk,"Clear",new C.dNw(i),A.c0,h))
r=B.a([],g)
for(j=0;q=$.bFT(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.e6:A.lH
o=i.ay
n=i.cx.t(0,j)?A.be:A.bt
r.push(new E.dX(q.a,o===j,new C.dNx(i,j),p,n,h))}return E.lw(A.cp,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fc(t,"PARTS",h),new E.fc(s,"TRY",h),new E.fc(r,"TASKS",h)],g),A.m,h,A.e,A.P,0,A.p))}}
C.bcv.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.S()
w=B.I()
w.r=D.aeq.gp(0)
a7.aP(new B.a3(0,0,0+a5,0+a6),w)
v=B.I()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.G()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,B.L)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.acx(j,m.c)
f=q.h(0,l)===!0
l=$.S()
e=B.a([],p)
d=new B.aF(l.r,A.ag,a4,a4,e)
e.push(new B.aY(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.kN(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=9
l.r=A.bt.j(0.28).gp(0)
l.z=N.oD
s=l.G()
l=d.gbu().a.snapshot()
w.drawPath((d.e=new B.cd(l)).a,s)
s.delete()}l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=3.2
l.d=A.by
l.r=(f?A.dB:A.bs).gp(0)
s=l.G()
l=d.e
w.drawPath((l==null?d.e=new B.cd(d.gbu().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.a7(0,D.Jd)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aF($.S().r,A.ag,a4,a4,B.a([],p))
w=a3.b
p.D(new B.aY(a6,w))
r=g.b
p.D(new B.kN(a6+a0,w,a5-a0,r,a5,r))
r=B.I()
r.b=A.a9
r.c=3
r.r=A.ac.gp(0)
a7.aH(p,r)}for(a5=new B.du(o,o.r,o.e);a5.C();)this.c95(a7,a5.d)},
c95(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zH.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bK(a0.c,64,64)
s=B.bs(t,A.jG)
r=w.cy===v
q=s.eO(A.cy)
$.S()
p=B.I()
p.r=A.w.j(0.55).gp(0)
p.z=A.mU
d.az(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.I()
p.sam(new B.c_(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aA(0,B.bX(a0.c,52)))
d.ad(q,52,p)}q=s.eO(A.cH)
p=B.I()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.az(q,p)
n=u?0.35:0
q=B.I()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sam(new B.a9(A.b0,A.b6,A.x,B.a([p,m],x.O),g,g).aA(0,t))
d.az(s,q)
q=B.I()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.az(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?G.uH:D.bOG}else l=e.b
k=C.h6q(B.lv(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a3(d,v.aE(0,new B.t(p/2,q.gbb(q)/2)))
j=C.h6q(e.a,10.5,A.c,g,g,A.H)
j.a3(d,a0.c.a7(0,new B.t(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.h6q(f,9,u?A.dB:A.bU,g,g,A.u)
i.a3(d,a0.c.a7(0,new B.t(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b_y(d,w.acx(a0,h),o)
this.b_y(d,a0.c.a7(0,D.Jd),o)},
b_y(d,e,f){var w
$.S()
w=B.I()
w.r=D.aeq.gp(0)
d.ad(e,8.5,w)
w=B.I()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.ad(e,8.5,w)
w=B.I()
w.r=A.c.gp(0)
d.ad(e,3.2,w)},
av(d){return!0}}
C.aMu.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.byQ.prototype={
q(){var w,v,u
for(w=this.h3$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h2$
w===$&&B.c()
w.q()
this.bxc()}}
C.NJ.prototype={
R(){return new C.aE8(B.mS(0,null,null))}}
C.KK.prototype={
a6(){return"_UnfoldStyle."+this.b}}
C.AM.prototype={}
C.aE8.prototype={
c9b(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dTu(w,e))},
c29(){var w=this
w.e.q()
w.e=B.mS(w.f,null,null)
w.m(new C.dTt(w))},
q(){this.e.q()
this.a1()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.oB(t,B.c6(v,A.c2,t?new C.bsK(w.e,w.gc9a(w),new C.dTv(d),v):new C.aIn(u,new B.bR(u.b,x.gj)),v,!1,!1,v,!1),new C.dTw(w,u),x.K)}}
C.buk.prototype={}
C.bsK.prototype={
b_z(d,e){var w=null
return new B.D(R.a_F,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fiu,w,w,w),A.bF,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aH(v,v,v,v,A1.nz,v,v,v,w.e,v,v,v,v,v,v),A.tf,D.bFy],u),A.m,v,A.e,A.i,0,v,v),s=w.b_z("STUDIOS","Play, make things, and keep what you make")
$.bFU()
return B.bn(!0,B.x(B.a([new B.D(D.bEA,t,v),B.E(B.vS(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.mp(s,v),new B.o3(A.hO,B.Pl(new B.oE(new C.f4m(d),9,!0,!0,!0,0,B.tc(),v),D.aS6),v),new B.mp(w.b_z("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.o3(D.bzB,B.Pl(new B.oE(new C.f4n(w),6,!0,!0,!0,0,B.tc(),v),D.aS6),v)],u)),1)],u),A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0)}}
C.afl.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.m(20),n=B.m(20),m=B.ar(I.nl,p,0.3)
m.toString
w=x.O
m=B.a([m,D.ahv],w)
v=B.J(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.I,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.I,12)],u)
return B.aI(!1,A.a2,!0,r,B.aO(!1,o,!0,B.eK(B.x(B.a([B.p(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a9(A.ay,A.aE,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.Q,B.d(q.a,r,2,A.a1,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.K,r,r),A.cS,B.d(q.b,r,2,A.a1,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.K,r,r)],x.p),A.m,r,A.b9,A.i,0,A.p),r,new B.o(r,r,v,n,t,new B.a9(A.ay,A.aE,A.x,m,r,r),A.n),r,A.GB,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)}}
C.aec.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.m(20),g=B.m(20),f=B.ar(I.nl,A.d.gI(i),0.24)
f.toString
w=x.O
f=B.a([f,D.ahv],w)
v=B.J(A.d.gI(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cy,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aP(6,6)
m=B.a([A.d.gI(i),A.d.gak(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),R.aKz,0)],u)
r.push(B.p(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bh(n,n,n,n),l,new B.a9(A.a5,A.a8,A.x,m,k,k),A.n),k,17,k,new B.P(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.P,0,A.p)
u=B.ar(A.d.gI(i),A.d.gak(i),0.4)
u.toString
return B.aI(!1,A.a2,!0,k,B.aO(!1,h,!0,B.eK(B.x(B.a([new B.a4(58,k,w,k),A.W,B.d(j.b,k,2,A.a1,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.K,k,k),A.au,B.X(A.CB,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b9,A.i,0,A.p),k,new B.o(k,k,v,g,t,new B.a9(A.ay,A.aE,A.x,f,k,k),A.n),k,A.GB,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.ai)}}
C.Qx.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gak(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,B.c4(j,new B.o(h,j,j,B.m(22),j,j,A.n),A.bh),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Ja,26),new B.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.I,30)],s)
q=B.m(22)
p=B.ar(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gak(i)
i=B.ar(A.d.gak(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,B.c4(j,new B.o(j,j,j,j,j,new B.a9(A.ay,A.aE,A.x,B.a([p,o,n,i],m),D.ds_,j),A.n),A.bh),0,0,0),B.ap(j,B.c4(j,new B.o(j,j,j,j,j,new B.a9(A.b0,A.b6,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bh),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b4(j,j,j,new C.btJ(i,j),A.aw),0,0,0))
i=A.c.j(0.16)
p=B.J(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.I,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fkd,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.au,B.d(i,j,1,A.a1,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Uu)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.fZ,B.B(B.a([s,A.es,B.E(B.x(p,A.E,j,A.e,A.P,0,A.p),1)],l),A.m,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,B.dZ(B.ec(j,A.w.j(A.k.E(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.m(22)
m.push(B.bS(0,B.dZ(B.c4(j,new B.o(j,j,B.J(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bh),!0,j),0,0,0))
return new B.a4(w,v,new B.an(A.a_,j,A.ab,A.f,B.a([h,B.bS(0,B.c4(B.bx(q,new B.an(A.a_,j,A.ab,A.t,m,j),A.ap),new B.o(j,j,j,u,r,j,A.n),A.bh),0,0,0)],l),j),j)}}
C.btJ.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a3(r,-10,s,w)
u=d.a
J.bl(u.save())
u.translate(v.gbL().a,v.gbL().b)
d.il(0,0.35)
t=B.bK(A.I,(w- -10)*1.6,s-r)
$.S()
s=B.I()
s.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aA(0,t))
d.aP(t,s)
u.restore()},
av(d){return d.b!==this.b}}
C.bte.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.bmH,D.agC],x.O),t=this.e,s=B.J(A.d.gI(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kt,24)],x.V),q=B.m(22),p=A.d.gI(t)
return new B.a4(this.c,this.d,B.c4(B.bx(q,B.b4(B.as(B.X(A.jB,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bbb(p,w),A.aw),A.ap),new B.o(w,w,s,v,r,new B.a9(A.ay,A.aE,A.x,u,w,w),A.n),A.bh),w)}}
C.bbb.prototype={
a3(d,e){var w,v,u,t,s,r,q,p
$.S()
w=B.I()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.G()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.G()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ej(A.I)
$.S()
t=B.I()
t.b=A.a9
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ad(u,30,t)},
av(d){return!1}}
C.aIn.prototype={
R(){return new C.aIo(new B.cw(null,x.A),null,null)}}
C.aIo.prototype={
gum(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,D.bwT,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
ga_7(){var w,v=this,u=v.e
if(u===$){w=B.bm(null,A.fY,null,1,null,v)
w.fn(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gay_(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc98(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaWT(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaXF(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb8i(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a2()
var w=this.gum()
w.dh()
w.dT$.M(0,this.gcyL())},
cyM(){var w,v,u,t,s,r,q,p=this,o=p.gum().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gay_().a){case 0:w=D.nD
break
case 1:w=D.uQ
break
case 2:w=D.a4g
break
case 3:w=D.nD
break
case 4:w=D.deB
break
case 5:w=D.uQ
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.ac5)r=0.09
else r=s===D.ac6?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){F.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.c6U[v]
E.ml("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.Je("bell",D.cfI,1400,0.35)}}p.ax=o},
q(){this.gum().q()
this.ga_7().q()
this.bz0()},
aeC(){var w=this
w.gum().cYw(0,B.dx(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.f42(w))},
cjL(){this.gum().bR(0)
this.m(new C.f41(this))},
aeB(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aeB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaXF(),s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b4,A.aO),$.ax()))}m=B.a([],m)
for(t=u.gb8i(),s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b4,A.aO),$.ax()))}o=B.C(u.gaWT(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bV(I.nl,null,new C.f40(u,l,m,o),t,!0,!0,!0,A.lO,!1,!1,x.H),$async$aeB)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.ax()
n.P$=0}return B.h(null,v)}})
return B.i($async$aeB,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gay_(),f=i.a.c,e=f.b,d=i.gc98(),a0=new C.AM(g,e,f.c,d,i.gaWT(),i.gaXF(),i.gb8i())
f=B.ar(A.d.gI(d),A.d.gak(d),0.4)
f.toString
g=x.p
w=B.a([B.aH(h,h,h,h,B.X(i.at?A.os:V.rN,A.ac,h,h,h,21),h,h,h,new C.f4a(i),h,h,h,h,"Sound",h),B.aH(h,h,h,h,D.bYw,h,h,h,i.gc99(),h,h,h,h,"Edit words and pictures",h),B.aH(h,h,h,h,K.ow,h,h,h,new C.f4b(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.cb(i.ga_7(),new C.f4c(i,a0),h),B.cu(new C.f4d(i,a0))],g)
u=i.as
t=u?i.gcjK():i.gc9c()
u=u?D.bNZ:A.rM
s=B.ar(A.d.gI(d),A.d.gak(d),0.4)
s.toString
t=B.B(B.a([B.aH(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cc),B.E(B.cb(i.gum(),new C.f4e(i,a1,a0),h),1),B.aH(h,h,h,h,D.bUN,h,h,h,new C.f4f(i),h,h,h,h,"Replay",A.cc)],g),A.m,h,A.e,A.i,0,h,h)
s=i.Q
u=A.k.ac(s,1)
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
s=E.iL(r,u+"x","Speed",2.5,0.4,new C.f4g(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dp5[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
u.push(new E.dX(p.b,o===p.a,new C.f4h(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c7h[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.aX
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.r,-1)
d.push(B.aA(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bH(j,j,j,j),h,h,new B.a9(A.ay,A.aE,A.x,n,h,h),A.a6),h,l,h,K.ajX,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f4i(i,n),h,h,h,h,h,h,!1,A.a3))}return E.lw(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.er(new B.an(A.a_,h,A.b3,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fc(u,"STYLE",h),new E.fc(d,"THEME",h)],g),A.m,h,A.e,A.P,0,A.p))},
bB3(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nD[r]
p=A.k.E((1-A.et.aw(0,A.k.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.E(p/1.5707963267948966,0,1)
q=D.nD[r]
n=q+0.12
m=A.k.E((a0-n)/(q+0.2-n),0,1)
n=D.nD[r]
q=n-0.01
q=A.k.E((a0-q)/(n+0.03-q),0,1)
n=B.ds()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kh(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nD[r]
h=i+0.1
if(A.k.E((a0-h)/(i+0.3-h),0,1)>0){i=D.nD[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nD[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cN(0,r*118,0,f,f,f,new B.kB(q,new B.iO(n,f,A.b0,!0,f,new C.Qx(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nD[r]
u=v-0.02
g=A.k.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nD[r]
t=v+0.12
e.push(new B.cN(0,r*118-3-2,0,f,f,4,new B.mA(new C.bsm(u,g,1-A.k.E((a0-t)/(v+0.22-t),0,1),f),f,A.aw,f,f),f))}return new B.a4(a2,358,new B.an(A.a_,f,A.ab,A.f,e,f),f)},
bRQ(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uQ[r]
p=A.qb.aw(0,A.k.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uQ[r]
m=q+0.15
l=A.k.E((a0-m)/(q+0.25-m),0,1)
m=D.uQ[r]
q=m-0.03
q=A.k.E((a0-q)/(m+0.01-q),0,1)
m=B.ds()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.jX(n,n,n,1)
m.fI(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Qx(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.ds()
k.fI(3.141592653589793)
k=new B.iO(k,f,A.A,!0,f,new C.bte(a2,108,w,f),f)}e.push(new B.cN(0,r*130,0,f,f,f,new B.kB(q,new B.iO(m,f,A.A,!0,f,k,f),f),f))}return new B.a4(a2,378,new B.an(A.a_,f,A.ab,A.f,e,f),f)},
cDO(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a4g[w]
l.push(A.cu.aw(0,A.k.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b4(n,n,n,new C.bvO(d.d,l,D.ayM,m,C.bsJ(e,0.4,0.62),f,C.bsJ(e,0.45,0.7),n),A.aw),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.h6X(g,w)
q=D.ayM[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cN(r,s-q*m*p+12,n,n,t,n,new B.kB(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.h6X(g,w)
r=D.a4g[w]
q=r+0.15
v.push(new B.cN(s,l,n,n,t,n,new B.kB(A.k.E((e-q)/(r+0.25-q),0,1),new B.y(u[w],n,A.Vh,n,A.K,n,n,n,n,n,n,n),n),n))}return new B.a4(g,m+90,new B.an(A.a_,n,A.ab,A.f,v,n),n)},
bHi(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cu.aw(0,C.bsJ(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.as(B.dQ(B.b4(f,f,f,new C.brM(A.d.gI(a1),C.bsJ(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.egL),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.E((a3-l)/(0.12+m-l),0,1)
j=A.dw.aw(0,A.k.E((o-0.7)/0.3,0,1))
l=B.ds()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fI(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jX(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new B.z(o,new B.cN(0,0,0,0,f,f,new B.cf(A.A,f,f,new B.kB(k*(0.45+0.55*o),B.dQ(new B.iO(l,f,A.A,!0,f,new C.Qx(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.t(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f3U())
A.d.v(a0,new B.N(w,new C.f3V(),x.fR))
return new B.a4(a5,330,new B.an(A.a_,f,A.ab,A.f,a0,f),f)},
c97(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uQ[q]
o=A.k.E((a2-p)/(p+0.22-p),0,1)
n=A.lv.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uQ[q]
m=A.k.E((a2-m)/(m+0.02-m),0,1)
l=D.aAT[q]
k=B.ds()
k.mU(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jX(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uQ[q]
g=h+0.1
g=A.k.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cN(0,0,0,0,e,e,new B.cf(A.A,e,e,new B.kB(m,B.dQ(new B.iO(k,e,A.A,!0,e,new C.Qx(d,92,w,p,j,i,0,g*s,h,e),e),new B.t(0,l)),e),e),e))
l=D.uQ[q]
h=l+0.02
f=A.k.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cN(0,0,0,0,e,e,new B.cf(A.A,e,e,B.dQ(new B.mA(new C.bbR(w,f,q,e),e,new B.av(r,212),e,e),new B.t(0,D.aAT[q])),e),e))}return new B.a4(a4,330,new B.an(A.a_,e,A.ab,A.f,a0,e),e)},
bDZ(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.t(-b0,-150),new B.t(b0,-40),D.egP],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nD[r]
p=A.k.E((a8-q)/(q+0.2-q),0,1)
o=A.cu.aw(0,p)
q=D.aB1[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nD[r]
f=g+0.2
e=A.k.E((a8-f)/(g+0.3-f),0,1)
f=D.nD[r]
g=f-0.01
g=A.k.E((a8-g)/(f+0.03-g),0,1)
f=B.ds()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mU(l*h+D.diM[r]*o)
f.fI(l*0.9)
h=0.55+0.45*o
f.jX(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cN(0,0,0,0,a3,a3,new B.cf(A.A,a3,a3,new B.kB(g,B.dQ(new B.iO(f,a3,A.A,!0,a3,new C.Qx(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.t(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nD[r]
i=q+0.17
a2=A.k.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aB1[r]
a6.push(new B.cN(0,0,0,0,a3,a3,new B.cf(A.A,a3,a3,B.dQ(new B.mA(new C.brO(A.d.gI(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.t(0,q+48-4)),a3),a3))}}return new B.a4(b0,330,new B.an(A.a_,a3,A.ab,A.f,a6,a3),a3)}}
C.bsm.prototype={
a3(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a3(w-v,0,w+v,e.b)
q=B.bs(u,A.hr)
$.S()
t=B.I()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=N.oD
d.az(q,t)
t=B.bs(u,A.hr)
q=B.I()
q.r=A.c.j(s).gp(0)
d.az(t,q)},
av(d){return d.c!==this.c||d.d!==this.d}}
C.brM.prototype={
a3(d,e){var w,v,u=this.c,t=B.bK(e.ej(A.I),e.b*u,e.a*u)
$.S()
u=B.I()
u.b=A.a9
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=U.IB
d.dQ(t,u)
u=B.I()
u.b=A.a9
u.c=2.5
u.r=w.j(0.7).gp(0)
d.dQ(t,u)
u=t.cr(-14)
v=B.I()
v.b=A.a9
v.c=1
v.r=w.j(0.3).gp(0)
d.dQ(u,v)},
av(d){return!0}}
C.bbR.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ej(A.I),f=this.c,e=A.cu.aw(0,f)
$.S()
w=B.I()
w.b=A.a9
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.ad(g,40+e*a0.a*0.42,w)
t=new B.e4()
t.cY(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.ag()*3.141592653589793*2
n=(40+t.ag()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.ag()
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
i=(p&1)===0?A.d.gI(u):A.c
j.r=i.j(A.k.E(v,0,1)).gp(0)
h=j.G()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
av(d){return!0}}
C.brO.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ej(A.I)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.E(s-r*0.18,0,1)
if(q<=0)continue
p=B.bK(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.S()
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.b=A.a9
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.G()
t.drawOval(B.bG(p),n)
n.delete()}},
av(d){return d.c!==this.c}}
C.bvO.prototype={
a3(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a3(0,d0,0+c5,d0+60)
$.S()
d0=B.I()
w=c1.b
v=x.O
d0.sam(new B.a9(A.b0,A.b6,A.x,B.a([A.d.gI(w).j(0.18),A.L],v),c2,c2).aA(0,d1))
d2.aP(d1,d0)
d0=B.I()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bo(new B.t(0,c4),new B.t(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.h6X(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.S()
a3=new B.ao(A.O,A.M,A.S,A.T,A.R)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.mU
a4=a3.G()
t.drawOval(B.bG(new B.a3(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a3(d,a1,a3,a1+a0)
a6=new B.ao(A.O,A.M,A.S,A.T,A.R)
a7=B.ar(A.d.gI(w),A.c,0.1)
a7.toString
a6.sam(new B.a9(A.b0,A.b6,A.x,B.a([a7,A.d.gak(w)],v),c2,c2).aA(0,a5))
a4=a6.G()
t.drawRect(B.bG(a5),a4)
a4.delete()
a2=a2.r
a6=B.a([],n)
a8=new B.aF(a2,A.ag,c2,c2,a6)
a6.push(new B.aY(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new B.aq(a7,a9))
a6.push(new B.aq(a7,m))
a6.push(new B.aq(a3,c4))
a6.push(new B.bt())
a6=new B.ao(A.O,A.M,A.S,A.T,A.R)
a6.r=B.ar(A.d.gak(w),A.w,0.5).gp(0)
a4=a6.G()
a6=a8.gbu().a.snapshot()
t.drawPath((a8.e=new B.cd(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aF(a2,A.ag,c2,c2,a6)
a6.push(new B.aY(d,a1))
a6.push(new B.aq(d+c8,a9))
a6.push(new B.aq(a7,a9))
a6.push(new B.aq(a3,a1))
a6.push(new B.bt())
a2=new B.ao(A.O,A.M,A.S,A.T,A.R)
a2.r=B.ar(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.G()
a2=b0.gbu().a.snapshot()
t.drawPath((b0.e=new B.cd(a2)).a,a4)
a4.delete()
b1=new B.ao(A.O,A.M,A.S,A.T,A.R)
b1.b=A.a9
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.G()
t.drawRect(B.bG(a5),a4)
a4.delete()
a4=b1.G()
a2=a8.e
t.drawPath((a2==null?a8.e=new B.cd(a8.gbu().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.G()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.cd(b0.gbu().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bf(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.bs(new B.a3(b7,a7,b7+r,b5),A.hr)
$.S()
b9=new B.ao(A.O,A.M,A.S,A.T,A.R)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.G()
t.drawRRect(B.e6(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a3(d,a1,a3,a1+28)
J.bl(t.save())
t.clipRect(B.bG(a5),$.my()[1],!0)
$.S()
a1=new B.ao(A.O,A.M,A.S,A.T,A.R)
a1.sam(new B.a9(A.b0,A.b6,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c2,c2).aA(0,c0))
a4=a1.G()
t.drawRect(B.bG(c0),a4)
a4.delete()
t.restore()}}},
av(d){return!0}}
C.aO9.prototype={
aU(){this.b1()
this.b0()
this.dJ()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdD())
w.b7$=null
w.a1()}}
C.a0O.prototype={
a6(){return"_Role."+this.b}}
C.qj.prototype={}
C.r2.prototype={}
C.CH.prototype={}
C.ZL.prototype={}
C.af9.prototype={}
C.a10.prototype={
gY(d){return this.d}}
C.CR.prototype={}
C.ac4.prototype={}
C.ack.prototype={}
C.aef.prototype={}
C.biu.prototype={
a3h(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
F.dF(d,"",e,g,h,f)},
b9n(d,e,f){return this.a3h(d,e,f,0,0.55)},
aCB(d,e,f,g){return this.a3h(d,e,f,0,g)},
b9o(d,e,f,g){return this.a3h(d,e,f,g,0.55)},
aa(d){var w=this
w.a.aa(0)
A.d.aa(w.b)
A.d.aa(w.c)
A.d.aa(w.d)
A.d.aa(w.e)
A.d.aa(w.f)
A.d.aa(w.r)
A.d.aa(w.w)
A.d.aa(w.x)
w.y.aa(0)
w.Q.aa(0)
w.as.aa(0)
w.aW()},
akF(d,e,f,g){var w="n"+this.ay++,v=new C.r2(w,e,f,g)
this.a.n(0,w,v)
this.aW()
return v},
rX(d,e,f){return this.akF(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bs(w.b,new C.dnM(e))
A.d.bs(w.c,new C.dnN(e))
w.aW()},
bdd(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mT.h(0,v.b).c===D.xr)return!1
w=this.b
if(A.d.b3(w,new C.dnJ(d,e)))return!1
w.push(new C.CH(d,e))
this.aW()
return!0},
c15(d){var w
if(d.b==="beat")return D.cfS[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.ap(500)
case 2:return 1400+w.ap(2200)
default:return 450+w.ap(2000)}},
aGe(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aBh[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.CR(u,t,j.ax,90))
w.push(new C.CR(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ag()*3.141592653589793*2
v.push(new C.a10(u,new B.t(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b9n(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ag()*3.141592653589793*2
p=100+w.ag()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ag()*0.5)
m.toString
v.push(new C.a10(u,new B.t(o*p,n*p),m,3+w.ag()*4.5,1000+w.ap(700),j.ax))}j.f.push(new C.CR(u,t,j.ax,120))
j.aCB(120,200,"noise",0.5)
j.b9n(261.63*Math.pow(2,([7,12,16,19][w.ap(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.CR(u,t,j.ax,230))
w.push(new C.CR(u,t,j.ax+160,160))
w.push(new C.CR(u,t,j.ax+320,100))
j.b9o(180+j.at.ap(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.ac4(u,new B.t((w.ag()-0.5)*220,-260-w.ag()*180),t,j.ax))
j.b9o(300+w.ap(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ag()*3.141592653589793*2
j.w.push(new C.ack(u,u.a7(0,new B.t(Math.cos(q),Math.sin(q)).aI(0,260+w.ag()*200)),t,j.ax))
j.a3h(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fM()
j.a3h(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.aef(u,D.aAG[v],t,j.ax))
j.aCB(261.63*Math.pow(2,([0,5,9,12][j.at.ap(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aCB(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cbY[A.o.F(w,3)]
for(k=1;k<=3;++k)j.ctQ(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new B.f2(w,new C.dnK(d));v.C();)j.aB6(w.gS(0),j.ax+D.cog[A.o.F(g.d,4)])
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
case"chance":s=j.at.ap(100)<D.cFq[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new B.f2(w,new C.dnL(d));v.C();)j.aB6(w.gS(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xc(w,0,v-700)},
ctQ(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.ZL(e,"~"+d))},
aB6(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.af9(d.a,v,e,w))
u.push(new C.ZL(w,v))},
a71(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a7(w).k("bd<2>")
w=B.C(new B.bd(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aGe(r)
u.n(0,r,o.ax+o.c15(s))}}w=o.c
v=B.T(w).k("Z<1>")
q=B.C(new B.Z(w,new C.dnO(o),v),v.k("M.E"))
if(q.length!==0){A.d.bs(w,new C.dnP(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b5(u,1)
for(u=A.d.gaf(v),r=new B.f2(u,new C.dnQ(p));r.C();)o.aB6(u.gS(0),o.ax)}else o.aGe(u)}}A.d.bs(o.d,new C.dnR(o))
A.d.bs(o.e,new C.dnS(o))
A.d.bs(o.f,new C.dnT(o))
A.d.bs(o.w,new C.dnU(o))
A.d.bs(o.x,new C.dnV(o))
A.d.bs(o.r,new C.dnW(o))
o.aW()},
vq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.t(q.a+o*e,q.b+p*e)
r.b=new B.t(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.t(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.t(l,o)
if(o>n){p=m.a=new B.t(l,n)
t=m.b=new B.t(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.t(-t.a*0.8,t.b)}},
ah(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.x)
for(v=this.a,v=new B.du(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.H(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.X.aq(B.H(["nodes",m,"edges",v],u,x.ew),null)},
TY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.X.aM(0,d,null))
k.aa(0)
for(o=x.j,n=J.aW(o.a(J.r(w,"nodes"))),m=k.a;n.C();){v=n.gS(n)
u=B.w(J.r(v,"k"))
if(!D.mT.aj(0,u))continue
t=B.w(J.r(v,"id"))
m.n(0,t,new C.r2(t,u,new B.t(B.e8(J.r(v,"x"))*k.cy.a,B.e8(J.r(v,"y"))*k.cy.b),A.k.N(B.e8(J.r(v,"p")))))
s=B.ce(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.r(w,"edges"))),n=k.b;o.C();){r=o.gS(o)
q=B.w(J.r(r,0))
p=B.w(J.r(r,1))
if(m.aj(0,q)&&m.aj(0,p))n.push(new C.CH(q,p))}k.aW()
return!0}catch(l){return!1}},
cT6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.aa(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.r2(n,r,new B.t(q*p.a,o*p.b),s))
l.aW()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bdd(w[m.a],w[m.b])}},
gY(d){return this.cy}}
C.Gd.prototype={}
C.Wh.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aFl(new C.biu(B.U(w,x.f3),v,u,t,s,r,q,p,o,B.U(w,n),B.U(w,n),B.U(w,n),B.U(w,n),A.cK,A.L,A.aw,$.ax()),A.bC,A.I,A.I,A.Y,null,null)}}
C.aFl.prototype={
ad4(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$ad4=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$ad4)
case 6:q=n.jY(m.r(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.etZ(s))
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
return B.i($async$ad4,v)},
aa0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aa0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.etO(s))
u=3
w=6
return B.b(B.az(),$async$aa0)
case 6:e.au("Bool","ngmy_core_lab_coach_v1",!0)
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
return B.i($async$aa0,v)},
bNe(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a7(n).k("bd<2>")
v=""+n.a+"|"+o.length+"|"+new B.bd(n,w).cI(0,0,new C.etQ())+"|"+A.d.cI(o,0,new C.etR())
if(v===p.ch)return p.CW
u=new C.etU()
t=x.s
s=B.a([],t)
r=new C.etV(p,s,u)
for(n=new B.bd(n,w).gaf(0),w=new B.f2(n,new C.etS());w.C();){q=n.gS(0)
if(!A.d.b3(o,new C.etT(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.d5(s,0,B.dB(5,"count",x.S),x.N).dm(0)},
Z(){var w,v=this
v.a2()
v.ad4()
v.d.db=v.ay
w=v.pS(new C.euo(v))
w.h7(0)
v.e!==$&&B.aQ()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a4(0)
v=w.e
v===$&&B.c()
v.q()
v=w.d
v.T$=$.ax()
v.P$=0
w.by2()},
acB(d){return this.c0x(d)},
c0x(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$acB=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$acB)
case 6:q=m.aT(l.r(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.TY(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aY4(A.d.gI(D.aA6))
if(s.c!=null)s.m(new C.etY())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$acB,v)},
aY4(d){this.d.cT6(0,d.c,d.d)
this.Eq()},
Eq(){var w=this.as
if(w!=null)w.a4(0)
this.as=B.cG(A.lD,new C.etK(this))},
ay0(d){var w,v,u,t,s=this.d.a,r=B.a7(s).k("bd<2>")
s=B.C(new B.bd(s,r),r.k("M.E"))
r=B.T(s).k("dw<1>")
s=new B.dw(s,r)
s=new B.bT(s,s.gL(0),r.k("bT<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
chJ(d){var w,v,u,t,s,r=this.d.a,q=B.a7(r).k("bd<2>")
r=B.C(new B.bd(r,q),q.k("M.E"))
q=B.T(r).k("dw<1>")
r=new B.dw(r,q)
r=new B.bT(r,r.gL(0),q.k("bT<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c0l(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mT.h(0,r.b).c===D.xr)continue
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
c9f(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hv0(new B.t(n.a+36,n.b+0),new B.t(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cBA(d){var w,v,u,t,s,r,q=this,p=q.ay0(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eY()
u=v.b
if(u==="button"){w.aGe(p)
return}if(q.r)return
t=D.mT.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.r7)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aW()
q.Eq()
return}if(q.r)return
r=q.c9f(d)
if(r!=null){w=q.d
A.d.cz(w.b,r)
w.aW()
q.Eq()}},
cj1(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.chJ(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.ay0(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aE(0,d)}},
cj2(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aW()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.t(A.k.E(d.a+s.y.a,46,t.a-46),A.k.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aW()}}},
b2m(){var w,v,u=this
if(u.z!=null){w=u.c0l(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bdd(v,w)}else v=!1
if(v){B.jP()
u.Eq()}u.z=null
u.d.aW()}else if(u.x!=null){if(u.at)u.Eq()
u.x=null}},
adi(d){return this.c3k(d)},
c3k(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.ay0(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jQ()
p=t.c
p.toString
w=3
return B.b(B.bV(I.nl,null,new C.eu0(q),p,!0,!0,!1,A.lO,!1,!1,x.y),$async$adi)
case 3:if(f===!0){r.W(0,s)
t.Eq()}case 1:return B.h(u,v)}})
return B.i($async$adi,v)},
c9d(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.rX(0,d,new B.t(v.a*(0.25+u.ag()*0.5),v.b*(0.2+u.ag()*0.55)))
B.eY()
this.Eq()},
ah9(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ah9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(I.nl,null,new C.eu2(),s,!0,!0,!0,A.lO,!1,!1,x.es),$async$ah9)
case 2:t=e
if(t!=null)u.aY4(t)
return B.h(null,v)}})
return B.i($async$ah9,v)},
aeD(d){var w=0,v=B.j(x.H),u=this,t
var $async$aeD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ck(null,null,!0,null,new C.etN(),t,null,!0,!0,x.y),$async$aeD)
case 2:if(f===!0){u.d.aa(0)
u.Eq()}return B.h(null,v)}})
return B.i($async$aeD,v)},
B(d){var w=this,v=null,u=B.a([B.aiE(w.r?new B.bM(A.a5,v,v,new B.D(A.GC,B.hs(D.bSG,D.fBF,new C.eum(w),v),v),v):w.c9g(),A.b5,A.iC),B.E(B.cu(new C.eun(w)),1)],x.p)
if(!w.r)u.push(w.cwj())
return B.c6(v,A.c2,B.bn(!0,B.x(u,A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bIY(){var w=null,v=new C.etP(),u=A.w.j(0.7),t=B.m(26),s=B.J(A.bv.j(0.5),A.r,1)
return B.bS(0,B.ec(B.as(B.p(w,B.ch(B.x(B.a([D.fN4,A.au,D.fUN,A.aB,v.$4(A.or,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.Cx,A.cp,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kn,A.c_,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(G.ao_,A.bt,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fU5,new B.bM(A.a8,w,w,B.bN(!1,D.fKa,w,w,!0,w,w,w,this.gbIR(),w,w),w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.WX,new B.o(I.nl,w,s,t,w,w,A.n),w,w,w,A.fl,Al.ala,w,w,w),w,w,w),u,!0),0,0,0)},
c9g(){var w=this,v=null,u=B.aH(v,v,v,v,A1.nz,v,v,v,new C.eu8(w),v,v,v,v,v,v),t=w.a9s(A.OS,"How it works",new C.eu9(w),!0),s=w.ay?A.os:V.rN
return new B.D(D.bDL,B.B(B.a([u,D.bFk,t,w.a9s(s,"Sound",new C.eua(w),!0),w.a9s(A.e5,"Ideas",w.gcmN(),!0),w.a9s(K.wk,"Clear",w.gc9e(w),!0),w.aOV(A.hn,"Show",new C.eub(w),!0,!0)],x.p),A.m,v,A.e,A.i,0,v,v),v)},
aOV(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ad.wa,B.aI(!1,A.a2,!0,u,B.aO(!1,t,!0,B.he(new B.D(new B.P(8,8,8,8),B.B(s,A.m,w,A.e,A.P,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
a9s(d,e,f,g){return this.aOV(d,e,f,g,!1)},
cwj(){var w=null,v=new C.eu4(this),u=A.c.j(0.08)
return B.p(w,B.ch(B.B(B.a([v.$2("START",D.xr),v.$2("CHANGE",D.EI),v.$2("REACT",D.r7)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aM),A.f,w,w,new B.o(I.Bm,w,new B.bH(new B.ay(u,1,A.r,-1),A.a0,A.a0,A.a0),w,w,w,A.n),w,w,w,w,D.byQ,w,w,w)},
cwk(d){var w,v,u,t,s=null,r=D.mT.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.J(v.j(0.5),A.r,1)
return new B.D(A.fu,B.aA(s,B.p(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cS,B.d(r.a,s,1,A.a1,s,s,s,D.aUe,s,s,s)],x.p),A.m,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a9(A.b0,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hz,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eu3(this,d),s,s,s,s,s,s,!1,A.a3),s)}}
C.biv.prototype={
a3(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bl(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.S()
u=B.I()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.G()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.S()
o=B.I()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aP(new B.a3(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){l=w[m]
k=n.h(0,l.a)
j=n.h(0,l.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=j.c
f=g.a-36
g=g.b
e=$.S()
d=B.a([],o)
a0=new B.aF(e.r,A.ag,b4,b4,d)
d.push(new B.aY(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new B.kN(h+a1,i,f-a1,g,f,g))
a2=D.mT.h(0,k.b).d
a3=D.mT.h(0,j.b).d
e=new B.ao(A.O,A.M,A.S,A.T,A.R)
e.b=A.a9
e.c=3
e.d=A.by
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.rO(new B.t(h,i),new B.t(f,g))
e.sam(new B.a9(A.a5,A.a8,A.x,d,b4,b4).aA(0,new B.a3(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.G()
i=a0.gbu().a.snapshot()
b7.drawPath((a0.e=new B.cd(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.E((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.hv0(new B.t(i.a+36,i.b+0),new B.t(h.a-36,h.b),a5)
$.S()
h=new B.ao(A.O,A.M,A.S,A.T,A.R)
h.r=A.c.j(0.35).gp(0)
h.z=N.oD
q=h.G()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new B.ao(A.O,A.M,A.S,A.T,A.R)
g.r=A.c.gp(0)
q=g.G()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.a7(0,D.Jd)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aF($.S().r,A.ag,b4,b4,B.a([],o))
o=a8.b
a0.D(new B.aY(t,o))
i=a9.b
a0.D(new B.kN(t+a1,o,w-a1,i,w,i))
i=B.I()
i.b=A.a9
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aH(a0,i)
i=B.I()
i.r=A.c.gp(0)
b8.ad(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){b0=w[m]
o=b0.c
v=A.k.E((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dU.aw(0,v)
$.S()
h=new B.ao(A.O,A.M,A.S,A.T,A.R)
h.b=A.a9
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.G()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){b1=w[m]
v=A.k.E((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=B.kA(o,i,A.dU.aw(0,v))
h.toString
i=B.kA(o,i,A.dU.aw(0,A.k.E(v-0.35,0,1)))
i.toString
$.S()
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.c=5
o.d=A.by
g=b1.c
f=B.a([g.j(0),g],p)
e=B.rO(i,h)
o.sam(new B.a9(A.a5,A.a8,A.x,f,b4,b4).aA(0,new B.a3(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.G()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
i.r=A.c.gp(0)
q=i.G()
b7.drawCircle(o,h,6,q)
q.delete()
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.kQ
q=i.G()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){a4=w[m]
v=A.k.E((b6-a4.f)/a4.e,0,1)
o=a4.a
$.S()
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
i.r=a4.c.j(1-v).gp(0)
q=i.G()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){j=w[m]
o=j.a
$.S()
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.kQ
q=i.G()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
i.sam(new B.c_(A5.xu,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).aA(0,B.bX(j.a,8)))
q=i.G()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.L)(b5),++m){a6=b5[m]
v=A.k.E((b6-a6.d)/1000,0,1)
t=1-v
b2=C.biw(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a3(b8,new B.t(t.a-o/2,t.b-(40+60*v+p.gbb(p)/2)))}for(b5=new B.du(n,n.r,n.e);b5.C();)b3.ciA(b8,b5.d,b6)
b7.restore()},
ciA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mT.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.E(1-(f-w)/520,0,1)
u=B.bK(e.c,64,64)
t=B.bs(u,A.it)
s=t.eO(A.cy)
$.S()
r=B.I()
r.r=A.w.j(0.55).gp(0)
r.z=A.mU
d.az(s,r)
if(v>0){s=t.cr(6)
r=B.I()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zJ
d.az(s,r)}s=t.eO(A.cH)
r=B.I()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.az(s,r)
r=B.I()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sam(new B.a9(A.b0,A.b6,A.x,B.a([s,p],x.O),j,j).aA(0,u))
d.az(t,r)
r=B.I()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.az(t,r)
r=h.b
p=e.c
o=C.biw(B.lv(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a3(d,p.aE(0,new B.t(s/2,r.gbb(r)/2)))
n=C.biw(h.a,11,A.c,j,j,A.H)
n.a3(d,e.c.a7(0,new B.t(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aAG[A.o.F(e.d,6)]:j
h=h.c
if(h===D.r7){s=e.c.a7(0,new B.t(0,62))
r=B.I()
r.r=D.aBh[A.o.F(e.d,6)].gp(0)
d.ad(s,5,r)}else if(m!=null){l=C.biw(m,9.5,A.aC,j,j,A.U)
l.a3(d,e.c.a7(0,new B.t(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.biw(m,9.5,A.aC,j,j,A.U)
l.a3(d,e.c.a7(0,new B.t(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xr)k.b37(d,e.c.aE(0,D.Jd),q)
k.b37(d,e.c.a7(0,D.Jd),q)},
b37(d,e,f){var w
$.S()
w=B.I()
w.r=A.c2.gp(0)
d.ad(e,9,w)
w=B.I()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.ad(e,9,w)
w=B.I()
w.r=A.c.gp(0)
d.ad(e,3.5,w)},
av(d){return!0}}
C.aNi.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.ei.prototype={}
C.tL.prototype={
ara(d,e,f,g){var w=this
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
C.aaL.prototype={}
C.abR.prototype={}
C.a4U.prototype={
bf_(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h5()?-1:1
v=t.ag()*3.141592653589793*2
u=f*(0.3+t.ag())
s.push(new C.aaL(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ag()*0.45));++r}},
c5t(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bOB())},
akF(d,e,f,g){var w="p"+this.c++,v=new C.tL(w,e,f,g)
v.ara(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bs(this.b,new C.bOM(e))},
aa(d){A.d.aa(this.a)
A.d.aa(this.b)},
cK5(d,e,f,g,h){return A.d.b3(this.b,new C.bOH(e,f,g,h))},
alo(d,e,f,g){var w
if(d===f||this.cK5(0,d,e,f,g))return null
w=new C.abR(d,e,f,g)
this.b.push(w)
return w},
aBD(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zS(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
ao7(d){return this.M4(d)&&!d.x&&d.cx>this.zS(d)},
b7t(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
M4(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c9A(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.zI.h(0,v)
if(w!=null)return w.a
return 100},
vq(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c5t(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("Z<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Z(v,new C.bON(a2),t).cI(0,0,new C.bOO(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.U(x.N,u)
n=new C.bOQ(o)
m=B.a([],x.t)
l=new C.bOP(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.U(u,u)
f=new C.bOS(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.L)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b7p(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zS(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b7p(e,d,w,!0)
a2.bPx(a4)},
b7p(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.U(x.N,b3),b5=new C.bOD(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bOC(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bOF(B.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.L)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.bZ(b7,0,!1,b3)
v=x.W
k=B.U(v,b3)
j=B.U(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)B.b9(B.dL(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.bZ(b7,0,!1,b3)
a0=B.bZ(b7,0,!1,b3)
k.aa(0)
j.aa(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.L)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b7t(t)*(1+t.CW))
a4=b2.aBD(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c9A(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bSP(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,B.L)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.L)(w),++u){t=w[u]
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
bSP(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.bZ(d,0,!1,x.i)
u=B.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,B.L)(a0),++r){q=a0[r]
p=B.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,B.L)(a0),++n){m=a0[n]
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
t[m]=t[m]-g*u[l][m]}}}f=B.bZ(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bPx(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aBD(o)/a1.b7t(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zS(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bHB(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bf_(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.u4(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.k.E(o.db-h,0,24)
else o.cy=A.k.E(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.u4(o,"The "+$.qx().h(0,n).b+" got "+A.k.ac(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.u4(o,"More than 1.5 amps went through the "+$.qx().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.u4(o,"The regulator had to turn "+A.k.ac(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ac(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.u4(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.zI.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qx().h(0,n).b
l=f.b
l=l===A.k.jl(l)?""+A.k.V(l):B.w(l)
g=f.c
g=g===A.k.jl(g)?""+A.k.V(g):B.w(g)
a1.u4(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ac(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.f5z.t(0,n)){m=o.fx>0?A.k.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.u4(o,"The bulb got "+A.k.ac(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.u4(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.E(j/14,0,1)
break
case"motor":n=A.k.E(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.u4(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.E(i/1,0,1)
if(!o.x&&i>1)a1.u4(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.u4(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.u4(o,"The capacitor was charged to "+A.k.ac(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bHB(d){return A.d.b3(this.a,new C.bOA(d))},
u4(d,e){var w
d.x=!0
d.ay=e
this.bf_(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bjD(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.aa(0)},
aHW(d){var w=d.b
return D.aR7.t(0,w)||D.zI.aj(0,w)||w==="buck"||w==="regulator"},
bgq(d){var w,v=!0
if(!this.M4(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.zI.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Ve(d,e){var w=this.b
return new B.Z(w,new C.bOU(d,e),B.T(w).k("Z<1>")).gL(0)},
CJ(d){var w,v
if(d.x)return!1
w=d.b
if(D.zI.aj(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bew(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qx().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aHW(d)||i.CJ(d))return null
w=i.Ve(d,0)
v=i.Ve(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("Z<1>")
s=B.C(new B.Z(u,i.gcSG(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jl(r)?""+A.k.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ac(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.zI.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Mh("battery"),o=J.aW(t.a),t=new B.f2(o,t.b);t.C();){n=o.gS(o)
if(n.e===1.5&&n.as<=0.02&&i.Ve(n,0)+i.Ve(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Mh("switch"),o=J.aW(t.a),t=new B.f2(o,t.b);t.C();)if(!o.gS(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qx().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zS(k))return"The "+$.qx().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ac(k.cx,2)+" amps, but it can only give about "+A.k.ac(i.zS(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b3(u,new C.bOI(i,d))
h=q.b
h=h===A.k.jl(h)?""+A.k.V(h):B.w(h)
u=A.k.ac(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ac(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ac(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Mh(d){var w=this.a
return new B.Z(w,new C.bOL(d),B.T(w).k("Z<1>"))},
aHA(d){return this.Mh(d).b3(0,new C.bOK(0.35))},
q1(d,e){return A.d.b3(this.a,new C.bOJ(e))}}
C.ajb.prototype={
a3(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.S()
w=B.I()
w.r=G.y_.gp(0)
c0.aP(new B.a3(0,0,b8,b9),w)
v=B.I()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.G()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.mi.aj(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.mi.aj(0,h.b)?(h.ch-1)*38:0
b4.cGT(c0,new B.t(k*b6+j*(42+i),l*b7),new B.t(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hHV(q.a,q.b,c1)
q=b4.e
q.toString
$.S()
p=B.I()
p.r=A.ac.gp(0)
p.c=3
p.d=A.by
c0.bo(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.S()
g=new B.ao(A.O,A.M,A.S,A.T,A.R)
g.r=D.afY.j(A.k.E(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zJ
s=g.G()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bl(w.save())
w.translate(j,i)
h=A.k.E(A.lv.aw(0,A.k.E(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cjz(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zS(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.S().r
a3=B.a([],k)
a4=new B.aF(a2,A.ag,b5,b5,a3)
a5=f-13
a3.push(new B.aY(g,a5))
a6=g+13
a7=f+10
a3.push(new B.aq(a6,a7))
a8=g-13
a3.push(new B.aq(a8,a7))
a3.push(new B.bt())
a3=new B.ao(A.O,A.M,A.S,A.T,A.R)
a3.r=A.ax.j(0.65+0.35*e).gp(0)
s=a3.G()
e=a4.gbu().a.snapshot()
w.drawPath((a4.e=new B.cd(e)).a,s)
s.delete()
e=B.a([],k)
a2=new B.aF(a2,A.ag,b5,b5,e)
e.push(new B.aY(g,a5))
e.push(new B.aq(a6,a7))
e.push(new B.aq(a8,a7))
e.push(new B.bt())
e=new B.ao(A.O,A.M,A.S,A.T,A.R)
e.b=A.a9
e.c=1.6
e.r=A.c.gp(0)
s=e.G()
e=a2.gbu().a.snapshot()
w.drawPath((a2.e=new B.cd(e)).a,s)
s.delete()
a9=new B.iN(new B.eu("!",b5,b5,A.cN,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.bY,new B.jr(1),b5,b5,b5,b5,A.bW,b5)
a9.el()
a9.a3(c0,new B.t(g+-3,f+-8))}if(!a0.x)g=(D.aR7.t(0,h)||D.zI.aj(0,h)||h==="buck"||h==="regulator")&&!r.CJ(a0)&&r.Ve(a0,0)+r.Ve(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.S()
g=new B.ao(A.O,A.M,A.S,A.T,A.R)
g.r=A.aA.gp(0)
s=g.G()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.iN(new B.eu("!",b5,b5,A.cN,b5,b5,b5,b5,b5,b5,new B.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.bY,new B.jr(1),b5,b5,b5,b5,A.bW,b5)
a9.el()
a9.a3(c0,new B.t(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.mi.aj(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.S()
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.r=G.y_.gp(0)
s=j.G()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=2.4
j.r=(i&&r.bgq(a0)?A.c0:A.ac).gp(0)
s=j.G()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bgq(a0)){a9=new B.iN(new B.eu("+",b5,b5,A.cN,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c0,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.bY,new B.jr(1),b5,b5,b5,b5,A.bW,b5)
a9.el()
a9.a3(c0,new B.t(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.E(b1.r/0.8,0,1)
j=B.ar(M.MM,G.Z7,b2)
j.toString
i=b1.f
$.S()
h=new B.ao(A.O,A.M,A.S,A.T,A.R)
h.r=j.gp(0)
h.c=2.4
h.d=A.by
s=h.G()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
i.r=j.j(0.35*b2).gp(0)
i.z=A.IC
s=i.G()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b3(q,new C.bJc())){b3=A.d.cI(q,0,new C.bJd())
$.S()
b7=B.I()
b7.r=D.bem.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aP(new B.a3(0,0,b8,b9),b7)
a9=B.fx(b5,b5,b5,b5,D.fgC,A.a4,A.bY,b5,A.dA,A.bW)
a9.o0(b6-24)
a9.a3(c0,new B.t(12,10))}},
qE(d,e,f,g,h){var w=null,v=B.fx(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.bY,w,A.dA,A.bW)
v.el()
v.a3(d,f)},
cGT(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
d.D(new B.aY(a1.a,a1.b))
w=C.hAg(a1,a2,a3)
d.D(new B.c5(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aT,D.afY,A.k.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aJ,A.aT,A.k.E(r*1.2,0,1))
u.toString
o=u}else o=A.bn
u=B.I()
u.b=A.a9
u.c=a4?7:5
u.d=A.by
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aH(d,u)
u=B.I()
u.b=A.a9
u.c=2.4
u.d=A.by
u.r=(a4?A.c:o).gp(0)
a0.aH(d,u)
if(q){n=new B.T5(new B.rm(B.xt(d),!1,B.a([],x.R))).gI(0)
m=40+A.k.E(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.ie()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.ie()
h=t[u].b
h===$&&B.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.ie()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.ie()
g=t[u].b
g===$&&B.c()
f=A.k.F(h+i,g.a.length())
v.ie()
i=t[u].Hc(f).a
h=new B.ao(A.O,A.M,A.S,A.T,A.R)
h.r=A.c.gp(0)
e=h.G()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Pq(d,e,f,g){var w,v,u,t
$.S()
w=B.I()
v=g?A.b0:A.a5
u=g?A.b6:A.a8
t=B.ar(e,A.w,0.3)
t.toString
w.sam(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.I3,null).aA(0,d))
return w},
axb(d,e,f){return this.Pq(d,e,f,!0)},
c53(d,e){return this.Pq(d,A.bn,A.iy,e)},
aif(d,e){var w,v,u
$.S()
w=B.I()
w.sam(D.aPv.aA(0,B.bX(e,4.2)))
d.ad(e,4.2,w)
w=e.a7(0,D.ejj)
v=e.a7(0,D.ejs)
u=B.I()
u.r=A.e9.gp(0)
u.c=1.2
d.bo(w,v,u)},
cjz(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.I()
c0.sam(D.c2A.aA(0,D.f2d))
c0.c=3.4
c0.d=A.by
w=B.I()
w.r=A.w.j(0.45).gp(0)
w.z=N.oD
c1.dQ(D.f21,w)
if(c3){w=B.bs(D.f2b,A.k4)
v=B.I()
v.r=A.c.j(0.14).gp(0)
c1.az(w,v)}u=C.hfW(c2)
c1.bo(new B.t(-u,0),D.ekU,c0)
c1.bo(D.ehY,new B.t(u,0),c0)
t=c2.x
w=c2.b
s=D.mi.aj(0,w)&&c2.ch!==1
if(s){J.bl(c1.a.save())
c1.bW(0,c2.ch)}switch(w){case"battery":b3.bEo(c1,c2)
break
case"solar":r=B.bs(D.f24,A.id)
c1.az(r,b3.Pq(new B.a3(r.a,r.b,r.c,r.d),A.dn,A.bO,!1))
b9=B.I()
w=B.ar(D.bie,A.d3,0.25+0.55*c2.f)
w.toString
v=B.ar(D.brg,A.mD,0.3+0.4*c2.f)
v.toString
b9.sam(new B.a9(A.ay,A.aE,A.x,B.a([w,v],x.O),b4,b4).aA(0,D.a8q))
c1.aP(D.a8q,b9)
q=B.I()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(b9=c1.a,p=1;p<6;++p){w=-34+p*68/6
o=q.G()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}for(p=1;p<4;++p){w=-18+p*9
o=q.G()
b9.drawLine.apply(b9,[-34,w,34,w,o])
o.delete()}for(p=0;p<6;++p){w=-34+(p+0.5)*68/6
$.S()
v=new B.ao(A.O,A.M,A.S,A.T,A.R)
v.r=A.cq.j(0.5).gp(0)
v.c=0.6
o=v.G()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new B.aF($.S().r,A.ag,b4,b4,B.a([],x.v))
b9.D(new B.aY(-34,18))
b9.D(new B.aq(-6+40*c2.f,-18))
b9.D(new B.aq(4+40*c2.f,-18))
b9.D(new B.aq(-24,18))
b9.D(new B.bt())
w=B.I()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aH(b9,w)
w=c2.f
b9=B.I()
b9.r=A.dB.j(0.9).gp(0)
c1.ad(D.ei3,4+4*w,b9)
break
case"crank":n=B.bs(D.f1Q,A.fE)
c1.az(n,b3.axb(new B.a3(n.a,n.b,n.c,n.d),A.bs,A.bM))
b9=B.I()
b9.sam(D.aPw.aA(0,B.bX(A.I,12)))
c1.ad(A.I,12,b9)
m=new B.t(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.I()
b9.r=A.cq.gp(0)
b9.c=5
b9.d=A.by
c1.bo(A.I,m,b9)
b9=B.I()
b9.sam(D.euo.aA(0,B.bX(m,7)))
c1.ad(m,7,b9)
b3.aif(c1,D.ekM)
b3.aif(c1,D.ehN)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aF(b9,A.ag,b4,b4,B.a([],w))
v.D(new B.aY(-3,24))
v.D(new B.aq(3,24))
v.D(new B.aq(1.5,0))
v.D(new B.aq(-1.5,0))
v.D(new B.bt())
l=B.I()
l.r=A.bO.gp(0)
c1.aH(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bl(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=B.a([],w)
j=new B.aF(b9,A.ag,b4,b4,l)
l.push(new B.aY(0,-2))
l.push(new B.c5(6,-14,2,-30))
l.push(new B.c5(-2,-14,0,-2))
l.push(new B.bt())
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.r=A.c.gp(0)
o=l.G()
l=j.gbu().a.snapshot()
v.drawPath((j.e=new B.cd(l)).a,o)
o.delete()
v.restore()}b9=B.I()
b9.sam(D.eu5.aA(0,B.bX(A.I,4.5)))
c1.ad(A.I,4.5,b9)
break
case"switch":n=B.bs(D.f1X,A.mX)
b9=B.I()
b9.sam(D.arC.aA(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,b9)
b3.aif(c1,D.Tk)
b3.aif(c1,D.aKi)
i=c2.w?D.aKi:H.aK9
b9=B.I()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.by
c1.bo(D.Tk,i,b9)
b9=B.I()
b9.r=(c2.w?A.be:A.bO).gp(0)
b9.c=4
b9.d=A.by
c1.bo(D.Tk,i,b9)
b9=B.kA(D.Tk,i,0.85)
b9.toString
w=B.I()
w.r=A.ax.gp(0)
c1.ad(b9,5,w)
break
case"fuse":h=B.bs(D.aQb,D.aPA)
b9=B.I()
b9.r=A.fk.j(0.25).gp(0)
c1.az(h,b9)
b9=B.I()
b9.b=A.a9
b9.c=1.4
b9.r=A.aC.gp(0)
c1.az(h,b9)
if(!t){b9=B.I()
b9.c=1.6
b9.r=B.ar(A.bO,A.cL,c2.fx).gp(0)
c1.bo(D.aKC,D.aKg,b9)}else{b9=B.I()
b9.c=1.6
b9.r=A.bU.gp(0)
c1.bo(D.aKC,D.elf,b9)
b9=B.I()
b9.c=1.6
b9.r=A.bU.gp(0)
c1.bo(D.eiR,D.aKg,b9)
b9=B.I()
b9.r=A.dL.gp(0)
c1.ad(A.I,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.bK(new B.t(M.hq[g]*22,0),20,9)
w=B.bs(f,A.hG)
o=b3.Pq(f,A.d0,A.o_,!0).G()
b9.drawRRect(B.e6(w),o)
o.delete()}break
case"pot":b9=B.I()
b9.sam(D.eug.aA(0,B.bX(A.I,21)))
c1.ad(A.I,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new B.ao(A.O,A.M,A.S,A.T,A.R)
d.r=A.aC.gp(0)
d.c=1.2
o=d.G()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=B.I()
b9.sam(D.eu3.aA(0,B.bX(A.I,13)))
c1.ad(A.I,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=B.I()
j.r=A.aT.gp(0)
j.c=3
j.d=A.by
c1.bo(new B.t(b9*3,w*3),new B.t(v*12,l*12),j)
break
case"resistor":a1=B.bs(D.aQb,D.aPA)
b9=B.I()
b9.sam(D.c5W.aA(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.az(a1,b9)
b9=x.O
a2=B.H([47,B.a([B.b1(b5),B.b1(b6),A.w],b9),100,B.a([B.b1(b7),A.w,B.b1(b7)],b9),220,B.a([B.b1(b8),B.b1(b8),B.b1(b7)],b9),470,B.a([B.b1(b5),B.b1(b6),B.b1(b7)],b9),1000,B.a([B.b1(b7),A.w,B.b1(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new B.ao(A.O,A.M,A.S,A.T,A.R)
v.r=a3[p].gp(0)
o=v.G()
b9.drawRect(B.bG(new B.a3(w,-9,w+4.5,9)),o)
o.delete()}b9=B.I()
b9.r=A.aT.gp(0)
c1.aP(D.f2p,b9)
b9=c2.r
b3.qE(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.ekf,A.ac,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.I()
v.r=A.dB.j(0.55*w).gp(0)
v.z=A.zJ
c1.ad(H.v8,34,v)}n=B.bK(D.egM,12,18)
c1.az(B.bs(n,A.hG),b3.Pq(n,A.bn,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.r=A.dm.gp(0)
l.c=1
o=l.G()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.I()
if(t)v=A.M0
else{v=B.ar(A.e2,A.i_,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.FG
else{l=B.ar(A.dn,A.dB,c2.fx)
l.toString}w.sam(new B.c_(A.tw,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aA(0,B.bX(A.t5,17)))
c1.ad(A.t5,17,w)
w=B.I()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ad(A.t5,17,w)
b9=b9.r
w=x.v
l=new B.aF(b9,A.ag,b4,b4,B.a([],w))
l.D(new B.aY(-9,-12))
l.D(new B.c5(-12,-4,-9,0))
v=B.I()
v.b=A.a9
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aH(l,v)
v=B.I()
v.r=A.cY.gp(0)
v.c=1.4
c1.bo(D.el9,D.elb,v)
v=B.I()
v.r=A.cY.gp(0)
v.c=1.4
c1.bo(D.eiJ,D.eiM,v)
w=B.a([],w)
a4=new B.aF(b9,A.ag,b4,b4,w)
a4.D(new B.aY(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bx(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.S()
b9=B.I()
b9.b=A.a9
b9.c=1.8
if(t)w=A.aS
else{w=B.ar(A.dn,D.bjf,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aH(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.I()
v.r=A.ax.j(0.6*w).gp(0)
v.z=D.dAD
c1.ad(A.t5,30,v)}w=B.I()
w.r=A.e2.gp(0)
w.c=2.4
c1.bo(D.elh,D.elg,w)
w=B.I()
w.r=A.e2.gp(0)
w.c=2.4
c1.bo(D.eiT,D.eiS,w)
b9=b9.r
w=x.v
a6=new B.aF(b9,A.ag,b4,b4,B.a([],w))
a6.D(new B.aY(-12,8))
a6.D(new B.aq(-12,-6))
a6.D(new B.c5(0,-26,12,-6))
a6.D(new B.aq(12,8))
a6.D(new B.bt())
v=B.I()
if(t)l=A.jf
else{l=B.ar(A.ek,D.bkX,c2.fx)
l.toString}if(t)j=A.kI
else{j=B.ar(A.jO,A.ax,c2.fx)
j.toString}v.sam(new B.a9(A.ay,A.aE,A.x,B.a([l,j],x.O),b4,b4).aA(0,D.f1h))
c1.aH(a6,v)
v=B.I()
v.b=A.a9
v.c=1.2
v.r=A.jP.gp(0)
c1.aH(a6,v)
v=B.I()
v.r=A.el.gp(0)
c1.aP(D.f1n,v)
w=new B.aF(b9,A.ag,b4,b4,B.a([],w))
w.D(new B.aY(-7,-4))
w.D(new B.c5(-6,-12,0,-15))
b9=B.I()
b9.b=A.a9
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aH(w,b9)
break
case"motor":a7=new B.a3(-28,-14,20,14)
c1.az(B.bs(a7,A.hH),b3.axb(a7,A.al,A.aN))
b9=B.I()
b9.r=A.cr.gp(0)
c1.aP(D.f0R,b9)
b9=B.I()
b9.r=A.cq.gp(0)
c1.aP(D.f0T,b9)
b9=c1.a
J.bl(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bl(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.bK(H.aK4,15,7)
v=new B.ao(A.O,A.M,A.S,A.T,A.R)
v.r=A.cL.j(0.9).gp(0)
o=v.G()
b9.drawOval(B.bG(w),o)
o.delete()
b9.restore()}w=B.I()
w.r=A.av.gp(0)
c1.ad(A.I,3,w)
b9.restore()
b3.qE(c1,"M",D.ekL,A.av,14)
break
case"buzzer":a8=B.bK(A.I,42,42)
b9=B.I()
b9.sam(D.euk.aA(0,a8))
c1.dQ(a8,b9)
b9=B.I()
b9.r=A.w.gp(0)
c1.ad(A.I,6,b9)
b9=B.I()
b9.b=A.a9
b9.c=1.4
b9.r=A.aX.gp(0)
c1.ad(A.I,6,b9)
b3.qE(c1,"+",D.ekE,A.ac,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=B.bX(A.I,24+k*5+l)
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=2
j.r=A.c_.j(v*(1-k*0.22)).gp(0)
o=j.G()
b9.drawArc.apply(b9,[B.bG(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=B.bs(D.f1T,A.hH)
w=B.I()
w.sam(D.c3z.aA(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,w)
w=B.a([],x.v)
a9=new B.aF(b9.r,A.ag,b4,b4,w)
a9.D(new B.aY(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new B.c5(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bx(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.S()
w=B.I()
w.b=A.a9
w.c=10
w.r=D.bjX.j(0.5*b9).gp(0)
w.z=A.kQ
c1.aH(a9,w)}$.S()
b9=B.I()
b9.b=A.a9
b9.c=3.2
b9.d=A.by
b9.r=B.ar(A.m0,A9.MF,c2.fx).gp(0)
c1.aH(a9,b9)
break
case"capacitor":a7=new B.a3(-16,-22,16,18)
b9=B.bs(a7,A.hH)
w=B.I()
w.sam(D.c2s.aA(0,a7))
c1.az(b9,w)
w=B.I()
w.r=A.bO.gp(0)
c1.aP(D.f1w,w)
for(p=0;p<4;++p){b0=new B.iN(new B.eu("\u2212",b4,b4,A.cN,b4,b4,b4,b4,b4,b4,new B.F(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.bY,new B.jr(1),b4,b4,b4,b4,A.bW,b4)
b0.el()
b0.a3(c1,new B.t(-14,-18+p*9))}b1=new B.a3(-16,-24,16,-17)
c1.az(B.bs(b1,A.hG),b3.c53(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.I()
v.r=A.be.j(0.5).gp(0)
c1.aP(new B.a3(-3,w,11,w+b9),v)
b3.qE(c1,"1F",H.v8,A.c,11)
break
case"radio":a1=B.bs(D.a8q,A.fE)
b9=B.I()
b9.sam(D.c6b.aA(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.az(a1,b9)
b9=B.I()
b9.b=A.a9
b9.c=1.4
b9.r=A.o_.j(0.6).gp(0)
c1.az(a1,b9)
b9=B.bs(D.f1U,A.id)
w=B.I()
w.r=A.dP.gp(0)
c1.az(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new B.ao(A.O,A.M,A.S,A.T,A.R)
v.r=A.m0.gp(0)
v.c=1.4
o=v.G()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=B.I()
w.r=(c2.fx>0?A.fU:A.o2).gp(0)
c1.aP(D.f0Y,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=B.I()
v.r=A.bB.gp(0)
v.c=1.6
c1.bo(new B.t(w,-13),new B.t(w,-3),v)}w=B.I()
w.sam(D.aPw.aA(0,B.bX(D.a7p,6)))
c1.ad(D.a7p,6,w)
w=B.I()
w.r=A.o_.gp(0)
c1.ad(D.ehX,4,w)
w=B.I()
w.r=A.e2.gp(0)
w.c=1.8
c1.bo(D.ehS,D.aKn,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bX(D.aKn,4+k*5+A.k.F(w.d*8,5))
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=1.4
l.r=A.o7.j(0.7).gp(0)
o=l.G()
b9.drawArc.apply(b9,[B.bG(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.bs(D.f23,A.hH)
v=B.I()
v.r=M.ni.gp(0)
c1.az(w,v)
b2=B.bs(D.f20,A.hG)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bl(b9.save())
b9.clipRRect(B.e6(b2),$.nF(),!0)
b9.translate(-33,-21)
L.hc_(c1,D.f8i,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.I()
b9.r=A.be.gp(0)
c1.ad(D.ei9,1.6,b9)}else{w=B.I()
w.r=D.vV.gp(0)
c1.az(b2,w)
b9=new B.aF(b9.r,A.ag,b4,b4,B.a([],x.v))
b9.D(new B.aY(-33,-21))
b9.D(new B.aq(-10,-21))
b9.D(new B.aq(-33,0))
b9.D(new B.bt())
w=B.I()
w.r=A.c.j(0.05).gp(0)
c1.aH(b9,w)}b9=B.I()
b9.r=A.bs.gp(0)
c1.aP(D.f1m,b9)
break}C.ikj(c1,c2,b3.b.d,b3.gc9B())
if(t)b3.qE(c1,"\u2716",D.elk,A.ax,14)
if(s)c1.a.restore()},
bEo(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a3(-28,-13,28,13)
d.az(B.bs(w,A.mX),m.axb(w,A.dn,A.jd))
v=new B.a3(-22,-13,22,13)
$.S()
u=B.I()
u.sam(D.arv.aA(0,v))
d.aP(v,u)
u=B.I()
u.r=A.dZ.gp(0)
d.aP(D.f1G,u)
t=new B.a3(28,-5,34,5)
d.az(B.bs(t,A.hr),m.Pq(t,A.dn,A.iy,!0))
m.qE(d,"+",D.ehy,A.aT,11)
m.qE(d,"\u2212",D.ekN,A.ac,11)
m.qE(d,B.w(l===A.k.jl(l)?A.k.V(l):l)+"V",D.ekt,A.aT,13)
if(l===1.5){u=B.I()
u.r=A.bz.gp(0)
d.aP(D.f1F,u)
u=e.as
s=B.I()
s.r=B.ar(A.ax,A.be,u).gp(0)
d.aP(new B.a3(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qE(d,"FLAT",D.eke,A.c0,9)}if(l>2){u=B.I()
u.r=A.aX.gp(0)
u.c=1
d.bo(D.egV,D.aJY,u)
m.qE(d,l>3?"3 cells":"2 cells",D.eks,A.aC,8)}}else if(l<=9){r=new B.a3(-22,-17,22,17)
u=B.bs(r,A.mX)
$.S()
s=B.I()
s.sam(D.c5J.aA(0,r))
d.az(u,s)
s=B.I()
s.r=A.cT.gp(0)
d.aP(D.f1H,s)
for(u=d.a,q=0;q<2;++q){p=G.aB0[q]
s=p<0?5:3.6
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.sam(D.aPv.aA(0,B.bX(new B.t(p,-18),5)))
n=o.G()
u.drawCircle(p,-18,s,n)
n.delete()}m.qE(d,"9V",D.ekl,A.c,16)}else{r=new B.a3(-34,-16,34,16)
u=B.bs(r,A.id)
$.S()
s=B.I()
s.sam(D.arv.aA(0,r))
d.az(u,s)
s=B.I()
s.r=A.bt.gp(0)
d.aP(D.f22,s)
for(u=d.a,q=0;q<2;++q){s=B.bs(B.bK(new B.t(G.a59[q],-20),8,10),A.hr)
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.r=A.cq.gp(0)
n=o.G()
u.drawRRect(B.e6(s),n)
n.delete()}m.qE(d,"+",D.ehH,A.ax,10)
m.qE(d,"12V",D.ekp,A.av,15)}},
av(d){return!0}}
C.mR.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.aa(k)
A.d.aa(d.b)
w=B.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tL(o,r,q,p)
n.ara(o,r,q,p)
k.push(n)
J.iz(s[4],new C.cqZ(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.alo(m,u[1],l,u[3])}}}
C.aj9.prototype={
R(){var w=x.N
return new C.aja(A.I,A.aw,B.U(w,x.gl),B.aX(w),$,A.bC,0,B.a([],x.X),null,null)}}
C.aja.prototype={
aeO(d){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new C.bIR(w,d))
w.as=B.cG(A.lE,new C.bIS(w))},
q(){var w=this.as
if(w!=null)w.a4(0)
w=this.ch
if(w!=null)w.a4(0)
this.bu8()},
a0t(d,e){return this.chu(d,e)},
b1Q(d){return this.a0t(d,!1)},
chu(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0t=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rB:A.yg
p=d.b
w=3
return B.b(L.hcj(s,r,p,d.ax<3.2,q,$.qx().h(0,p).b),$async$a0t)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0t,v)},
cuc(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bIT()),t=J.cE(u)
t.M(u,v)
t.bs(u,new C.bIU(v))
if(t.gL(u)>=4){t.aa(u)
t=w.ch
if(t!=null)t.a4(0)
w.a1O(d)
return}if(t.gL(u)===3){t=w.ch
if(t!=null)t.a4(0)
w.ch=B.cG(A.iW,new C.bIV(w,u,d))}},
a09(d){return this.cfR(d)},
cfR(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a09=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.ilu(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$a09)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a09,v)},
a1O(d){return this.crK(d)},
crK(d){var w=0,v=B.j(x.H),u=this,t
var $async$a1O=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(G.mC,null,new C.bIP(u,d),t,!0,!0,!1,A.k5,!1,!1,x.H),$async$a1O)
case 2:return B.h(null,v)}})
return B.i($async$a1O,v)},
Z(){this.a2()
this.bgA()
this.m7()},
bgA(){this.a.c.e=new C.bJ9(this)},
mr(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vq(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=D.mi.h(0,s.b)
if((r==null?null:r.b)!==D.A8)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.M(0,s.a)
q.a0t(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)F.dF(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)F.dF(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cK.ag()<0.5
else u=!1
if(u)F.dF(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){F.dF(900+A.cK.ap(800),"",90,0,0.1,o)
if(A.cK.ag()<0.35)F.dF(300+A.cK.ap(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cK.ag()<0.4
else u=!1
if(u)F.dF(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)F.dF(330+A.o.F(110*A.k.bf(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)F.dF((A.k.bf(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)F.dF(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)F.dF(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cK.ag()<0.5
else u=!1
if(u)F.dF(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)F.dF(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)F.dF(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bJa())},
b8R(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.mi.aj(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.z(p,n)
r=i}}}return s},
b2v(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dw<1>"),w=new B.dw(w,v),w=new B.bT(w,w.gL(0),v.k("bT<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mi.aj(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cGU(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.mi.aj(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.mi.aj(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hAg(new B.t(k,n),new B.t(i,l),p)
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
aeM(){this.a.toString
this.m(new C.bIk())},
bqR(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d8t[v]
if(!A.d.b3(p.a.c.a,new C.bJb(u,w))){o=new B.t(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.Jf:o
s=s?Q.Jf:o
q=t.akF(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
F.dF(1200,"",50,0,0.3,"tri")
p.aeM()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.RI[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.ao(u+1,2)):w
r=t?A.d.fL(w,A.o.ao(w.length+1,2)):A.Y
q=n.a.d
if(q!=null){w=B.a7(q).k("cx<1>")
w=B.C(new B.cx(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b2l(s,!0))
n.a.toString
if(t)w.push(n.b2l(r,!0))
w.push(B.E(B.cu(new C.bJ8(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.i,0,A.p)},
b2l(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.L)(d),++v){u=d[v]
t=$.qx()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.p(p,B.x(B.a([new B.y(t.h(0,u).c,p,A.Aq,p,p,p,p,p,p,p,p,p),new B.y(t.h(0,u).b,p,A.nJ,p,p,p,p,A.a1,p,1,p,p)],n),A.m,p,A.b9,A.i,0,A.p),A.f,p,p,new B.o(s,p,new B.bH(q,q,q,q),new B.bh(r,r,r,r),p,p,A.n),p,p,p,I.og,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIl(this,u),p,p,p,p,p,p,!1,A.a3))}return B.p(p,B.cl(m,p,p,A.h5,p,p,A.aM,!1),A.f,p,p,new B.o(I.Bm,p,new B.bH(A.a0,A.a0,new B.ay(o,1,A.r,-1),A.a0),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b_M(d){var w=null,v=B.m(18)
return B.p(w,d,A.f,w,w,new B.o(G.aew,w,B.J(A.bz,A.r,1),v,w,w,A.n),w,w,w,w,G.akn,w,w,w)},
cjA(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qx().h(0,o),m=d.dy,l=d.fr,k=new C.bIE(q,n),j=B.d(n.c,p,p,p,p,p,p,A.Kh,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.ad,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aH(p,p,p,p,D.bUy,p,p,p,new C.bIr(q,d),p,p,p,p,"Remove part",A.cc),B.aH(p,p,p,p,A.Pf,p,p,p,new C.bIs(q),p,p,p,p,p,A.cc)],g),A.m,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.Em,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fpM,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ac(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ac(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ac(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.au,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.c0:A.aT,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bew(d)
if(v!=null){l=(d.x?A.ax:A.aA).j(0.14)
j=B.m(10)
i=B.J((d.x?A.ax:A.aA).j(0.5),A.r,1)
m.push(new B.D(A.i4,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fwx,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.ck,p,p,p),p))}if(C.ha3(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dX("CH "+t,d.at===u,new C.bIt(q,d,u),p,h,p))}l=B.bY(A.bG,l,A.br,p,4,6)
l=B.a([A.am,l,A.au,B.d(q.a.c.CJ(d)?"Showing: "+G.Ri[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hs,p,p,p)],g)
if(q.a.c.CJ(d))l.push(new E.fD(A.H8,"Open big screen",new C.bIw(q,d),h,p))
A.d.v(m,l)}if(D.mi.aj(0,o)&&!C.ha3(o)){l=B.a([A.am,B.d(q.a.c.CJ(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hs,p,p,p)],g)
if(q.a.c.CJ(d))l.push(new E.fD(A.OX,"Open the "+$.qx().h(0,o).b,new C.bIx(q,d),h,p))
A.d.v(m,l)}if(D.mi.aj(0,o))A.d.v(m,B.a([A.am,new E.fD(A.Cr,"Make it bigger (or tap it 4 times)",new C.bIy(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ac(d.db,1)
if(q.a.c.CJ(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ac(i,1)+" V",p,p,p,p,p,p,D.fqD,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dqy[s]
j=r===A.k.jl(r)?A.k.V(r):r
l.push(new E.dX(B.w(j)+" V out",d.e===r,new C.bIz(q,d,r),p,h,p))}i.push(new B.D(A.l7,B.bY(A.bG,l,A.br,p,0,6),p))}if(o==="regulator")i.push(D.fPp)
A.d.v(m,i)}if(q.a.c.M4(d)&&!d.x){l=A.k.ac(d.cx,2)
j=A.k.ac(q.a.c.zS(d),2)
i=q.a.c
w=i.ao7(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.ao7(d)?A.c0:A.ep,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.k.E(d.cx/q.a.c.zS(d),0,1)
i=q.a.c.ao7(d)?A.ax:A.be
m.push(new B.D(A.i4,B.x(B.a([l,A.cS,B.bx(j,B.kj(A.bz,p,p,5,p,w,new B.lH(i,x.c)),A.ap)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i4,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fki,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dfw[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dX(j,d.e===r,new C.bIA(q,d,r),p,h,p))}m.push(B.bY(A.bG,l,A.br,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d5G[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dX(j,d.r===r,new C.bIB(q,d,r),p,h,p))}m.push(B.bY(A.bG,l,A.br,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bIC(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bID(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bIu(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bIv(d)))
if(o==="crank")m.push(D.fKK)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hs,p,p,p))
return q.b_M(new B.cT(D.b3S,B.ch(B.x(m,A.E,p,A.e,A.P,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bcd.prototype={}
C.Vv.prototype={
R(){return new C.aEk(C.hfV(),new B.cw(null,x.q),B.aX(x.S))}}
C.aEk.prototype={
Z(){this.a2()
$.aV.bZ$.push(this)
this.aeN()},
aeN(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fF8(),$async$aeN)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.ikH(t.d,r)
if(s!=null){t.m(new C.dYh(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$aeN,v)},
Fb(){var w,v=this
if(!v.as)return
w=C.ib7(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bFy(w)},
jg(d){if(d!==A.fK)this.Fb()},
q(){$.aV.hS(this)
this.Fb()
this.a1()},
c9D(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("Z<1>")
t=new B.Z(v,new C.dYq(q),u).gL(0)
s=new B.Z(v,new C.dYr(),u).gL(0)
r=new B.Z(v,w.gcWh(),u).gL(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.dYs(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Fb()
if(A.o.F(q.w,10)===0){w=q.f
$.aim()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.aim()[q.f].c.$1(q.d)){w.M(0,q.f)
C.Je("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.dYt())
q.Fb()
w=q.c
w.toString
w=B.XO(w)
if(w!=null)w.U(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aim()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m4,p,p,p,p,p,p,p,p,p,p))}},
ahv(){var w=0,v=B.j(x.H),u=this,t
var $async$ahv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ck(null,null,!0,null,new C.dYg(u),t,null,!0,!0,x.H),$async$ahv)
case 2:return B.h(null,v)}})
return B.i($async$ahv,v)},
b_L(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.J(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.he(new B.a4(40,38,new B.an(A.a_,w,A.ab,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a3)},
b_K(d,e,f,g){return this.b_L(d,e,f,g,null)},
arR(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.J(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.p(w,B.B(B.a([B.X(d,f,w,w,w,15),A.eg,new B.dr(1,A.cn,B.d(e,w,1,A.a1,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b9,A.i,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a3),1)},
afQ(){var w=0,v=B.j(x.H),u=this,t
var $async$afQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a5(t,!1).cc(B.eh(new C.dYc(u),!1,null,x.H)),$async$afQ)
case 2:t=u.e.gbl()
if(t!=null)t.bgA()
if(u.c!=null)u.m(new C.dYd())
u.Fb()
return B.h(null,v)}})
return B.i($async$afQ,v)},
bHu(){var w,v,u,t,s=null,r=this.f
$.aim()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bf:A.ax
u=B.m(9)
t=B.J(I.Bm,A.r,1.5)
return B.p(s,B.as(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.x6,s,s,s),s,s,s),A.f,s,D.b3Z,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eZ,s,s,s)},
aiC(){var w=0,v=B.j(x.H),u=this,t
var $async$aiC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(G.mC,null,new C.dYp(u),t,!0,!0,!0,A.k5,!1,!1,x.H),$async$aiC)
case 2:return B.h(null,v)}})
return B.i($async$aiC,v)},
c9E(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.p(r,D.bVO,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYv(d),r,r,r,r,r,r,!1,A.a3),o=B.m(11)
o=B.p(r,D.b9L,A.f,r,r,new B.o(A.bo,r,B.J(A.aJ.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.B(B.a([p,A.ad,o,A.ad,B.E(B.x(B.a([D.fNq,B.d(w,r,1,A.a1,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eO:A.hj,r,r,r,r,r,r,r,r,11.5,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.ayj(s.gcfy(),r),A.tf,s.b_K(A.yU,"Construction Lab: real 3D wiring, plumbing and a house",A.cL,new C.dYw(s,d)),s.b_L(A.lH,"Challenges",A.aT,s.gcwM(),s.bHu()),s.b_K(A.OS,"How to play",A.aJ,new C.dYx(d,e))],v),A.m,r,A.e,A.i,0,r,r),A.am,B.B(B.a([s.arR(A.om,"Circuits",A.bq,s.gcpB()),A.bm,s.arR(A.ok,"Repair",A.aT,new C.dYy(s)),A.bm,s.arR(K.wk,"Clear",A.c0,new C.dYz(s))],v),A.m,r,A.e,A.i,0,r,r)],v),A.m,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(I.Bm,r,new B.bH(A.a0,A.a0,new B.ay(q,1,A.r,-1),A.a0),r,r,r,A.n),r,r,r,r,D.bEB,r,r,r)},
B(d){var w=this,v=null
$.asH="tech"
return B.c6(v,A.c2,B.bn(!0,B.x(B.a([w.c9E(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.heK(w.d,w.e,w.gc9C(),v),1)],x.p),A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
C.ayj.prototype={
R(){return new C.bap(null,null)}}
C.bap.prototype={
gay6(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.Z,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
q(){this.gay6().q()
this.bvv()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.he(new B.a4(42,42,B.cb(this.gay6(),new C.cI3(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a3)}}
C.bao.prototype={
a3(d,e){var w,v,u,t=null,s=e.ej(A.I),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.I()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.z=N.oD
d.ad(s,r+2+o*2,w)
w=B.I()
w.sam(D.euf.aA(0,B.bX(s,r)))
d.ad(s,r,w)
v=B.I()
v.b=A.a9
v.c=2.2
v.sam(new B.h0(A.A,0,6.283185307179586,A.x,D.cXx,t,new B.mE(p)).aA(0,B.bX(s,r)))
d.ad(s,r,v)
p=new C.cI2(d)
p.$3(s.a7(0,A.t5),8+o*1.5,1)
q*=4
p.$3(s.a7(0,D.ej4),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a7(0,D.elq),2.6,0.5+0.5*Math.cos(q))
u=B.fx(t,t,t,t,D.fgI,A.a4,A.bY,t,A.dA,A.bW)
u.el()
u.a3(d,s.a7(0,new B.t(-u.b.c/2,5)))},
av(d){return d.b!==this.b}}
C.ayD.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.ayE.prototype={
q(){var w,v,u
for(w=this.h3$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h2$
w===$&&B.c()
w.q()
this.bu7()}}
C.aKR.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.byT.prototype={}
C.fS.prototype={}
C.JI.prototype={
a6(){return"ScreenStyle."+this.b}}
C.mn.prototype={}
C.Ve.prototype={
R(){return new C.bl0(null,null)}}
C.bl0.prototype={
ga9Z(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.of,null,1,null,v)
w.cq(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
q(){this.ga9Z().q()
this.bxl()},
gSi(){var w=this.ga9Z().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mi.h(0,this.a.c)
if(v==null)v=D.aQt
return B.c6(w,X.YP,B.bn(!0,new B.an(A.a_,w,A.ab,A.t,B.a([B.as(v.b===D.A9?this.bJC(v):this.cmm(v),w,w,w),B.ap(w,B.aH(w,w,w,w,A.mR,w,w,w,new C.dUr(d),w,w,w,B.nO(w,A.aS,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.as(B.d(v.a,w,w,w,w,w,w,D.fip,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c9F(d){var w
A:{if(D.JF===d){w=0.46153846153846156
break A}if(D.vg===d){w=0.45
break A}if(D.wV===d){w=0.9259259259259258
break A}if(D.TZ===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cmm(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.JF
A:{if(D.JF===p){w=44
break A}if(D.vg===p){w=30
break A}if(D.wV===p){w=22
break A}if(D.TZ===p){w=26
break A}w=14
break A}v=B.cb(this.ga9Z(),new C.dUq(this,w,d,o),q)
if(p===D.a8z)v=new B.Bk(D.bFe,v,q)
p=this.c9F(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.I,36)],x.V)
return new B.fH(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A_.GE,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a9(A.ay,A.aE,A.x,r,q,q),A.n),q,q,q,D.byG,new B.P(u,u,u,u),q,q,q),q)},
b8_(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.E(this.a.d+A.k.bf(this.gSi()*0.4),0,100),q=d.b===D.JF,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aX(A.o.u(B.dg(s)),2,"0")+":"+A.a.aX(A.o.u(B.fR(s)),2,"0"),t,t,t,t,t,t,A.to,t,t,t),A.b2],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bh(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bEX,t,t,t,3))}n.push(A.db)
n.push(D.fG4)
n.push(A.bm)
v=B.J(A.ac,A.r,1)
u=B.m(4)
n.push(B.p(t,new B.bM(A.a5,t,t,B.Bx(A.A,B.p(t,t,A.f,t,t,new B.o(A.be,t,t,B.m(2),t,t,A.n),t,t,t,A_.GE,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qU)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fwU,t,t,t))
return new B.D(new B.P(p,12,o,2),B.B(n,A.m,t,A.e,A.i,0,t,t),t)},
aw1(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.p(v,B.as(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dlt,new B.a9(A.ay,A.aE,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.au,B.d(d.a,v,1,A.a1,v,v,v,D.fnb,v,v,v)],w))
return B.aA(v,B.x(t,A.m,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dUm(this,d),v,v,v,v,v,v,!1,A.a3)},
c03(d,e){return this.aw1(d,e,!0)},
c_L(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.TZ||n===D.wV,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.kd,0.5)
l.toString
l=B.a([k,A.dv,l],x.O)
k=p.b8_(d)
w=m?190:138
v=B.m(24)
u=B.J(A.aX,A.r,1)
w=B.aA(o,B.p(o,B.bx(B.m(23),B.b4(o,o,o,new C.af2(0,p.gSi(),o),A.fF),A.ap),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hO,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dUk(p),o,o,o,o,o,o,!1,A.a3)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=G.kp[s]
t.push(new B.cf(A.A,o,o,p.c03(r,m?58:54),o))}k=B.a([k,A.am,w,A.ae,B.E(B.kQ(0.92,t,v,8,12,A2.w6,o,!1),1)],u)
if(n!==D.a8z){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.d5(G.kp,0,B.dB(4,"count",x.S),x.gD),t=v.$ti,v=new B.bT(v,v.gL(0),t.k("bT<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.aw1(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.qG,A.i,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bzz,H.alQ,o,o,o))}return B.p(o,B.x(k,A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a9(A.ay,A.aE,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bD1(d,e){var w=null
return B.p(w,B.x(B.a([this.b8_(d),B.E(B.b4(w,w,w,new C.af2(e,this.gSi(),w),A.fF),1),B.aA(w,B.p(w,B.as(B.d(G.kp[e].a,w,w,w,w,w,w,A.K5,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dUf(this),w,w,w,w,w,w,!1,A.a3)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bJC(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.I,36)],x.V)
return new B.fH(1.5384615384615383,B.p(t,B.cb(this.ga9Z(),new C.dUi(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a9(A.ay,A.aE,A.x,w,t,t),A.n),t,t,t,D.bEv,new B.P(8,8,8,s),t,t,t),t)}}
C.bwS.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.S()
w=B.I()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.kd,0.4)
t.toString
w.sam(new B.a9(A.ay,A.aE,A.x,B.a([u,A.dv,t],x.O),null,null).aA(0,new B.a3(0,0,n,m)))
d.aP(new B.a3(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new B.ao(A.O,A.M,A.S,A.T,A.R)
r.r=v.j(0.1).gp(0)
r.z=D.dAH
q=r.G()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
av(d){return!0}}
C.af2.prototype={
a3(d,e){return L.RZ(d,e,this.b,this.c)},
av(d){return!0}}
C.aMD.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bvE.prototype={}
C.a8K.prototype={
B(d){var w=null
return B.c6(B.eI(w,w,w,!0,!0,D.ah_,w,1,!0,w,0,!1,w,!1,w,w,B.aH(w,w,w,w,K.aqt,w,w,w,new C.ckK(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fWg,w,w,w,1,w,!0),D.ah_,B.cl(B.a([D.emT,B.cu(new C.ckL())],x.p),w,w,D.bAD,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.WP.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aFO(w,new B.au(A.at,$.ax()),$,A.bC,0,B.a([],x.X),null,null)}}
C.aFO.prototype={
Z(){this.a2()
this.m7()},
b5V(d){var w=this.d.length
return A.o.F(A.k.bf(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mr(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b5V(v.f)
if(w!==v.x){v.x=w
E.ml("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eQH(v))
C.Je("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
caZ(){if(this.d.length<2)return
this.m(new C.eQD(this))},
b0e(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eQC(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcaY(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bx3(p,s.f,r),A.fF),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a3),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a4(r,40,B.as(B.d(n,r,r,r,r,r,r,D.fv_,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aAc[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aA(r,B.p(r,new B.y(p[v],r,D.fud,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bh(t,t,t,t),r,r,A.n),r,r,r,A.fu,A.h7,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eQF(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a3))}p=A.c.j(0.07)
return E.lw(A.aT,A.f0,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fc(o,r,r),B.B(B.a([B.E(B.aM(r,A.Y,!1,r,!0,A.t,r,B.aN(),s.e,r,r,r,r,r,2,B.br(r,new B.b5(4,B.m(14),A.a0),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kx,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eQG(s),r,!1,r,r,!1,r,!0,r,A.aa,r,r,r,r,r,r,r,r,r,r,r,A.df,!0,A.a4,r,A.an,r,r,r,r),1),A.ad,new E.fD(A.hQ,"Add",s.gcaW(s),A.c,r),A.bm,new E.fD(A.ol,"Spin",q,A.be,r)],w),A.m,r,A.e,A.i,0,r,r)],w),A.m,r,A.e,A.P,0,A.p))}}
C.bx3.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.t(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.S()
w=B.I()
w.r=D.bg_.gp(0)
a1.ad(d,f,w)
w=B.I()
w.b=A.a9
w.c=3
w.r=A.aT.gp(0)
a1.ad(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bX(d,a0)
n=new B.ao(A.O,A.M,A.S,A.T,A.R)
n.r=D.aAc[A.o.F(q,8)].gp(0)
m=n.G()
n=p*57.29577951308232
f.drawArc.apply(f,[B.bG(o),n,s,!0,m])
m.delete()
o=B.bX(d,a0)
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.G()
f.drawArc.apply(f,[B.bG(o),n,s,!0,m])
m.delete()
J.bl(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ar(o,0,11)+"\u2026"
k=new B.iN(new B.eu(o,i,i,A.cN,i,i,i,i,i,i,D.fhw),A.a4,A.bY,new B.jr(1),i,i,i,i,A.bW,i)
k.el()
o=k.b
n=o.c
o=o.a.c
k.a3(a1,new B.t(a0-n-16,-o.gbb(o)/2))
f.restore()}f=B.I()
f.r=D.agC.gp(0)
a1.ad(d,20,f)
f=B.I()
f.b=A.a9
f.c=3
f.r=A.aT.gp(0)
a1.ad(d,20,f)
j=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
e-=a0
j.D(new B.aY(g,e+26))
e-=10
j.D(new B.aq(g-14,e))
j.D(new B.aq(g+14,e))
j.D(new B.bt())
e=B.I()
e.r=A.c.gp(0)
a1.aH(j,e)
e=B.I()
e.b=A.a9
e.c=2
e.r=A.aS.gp(0)
a1.aH(j,e)},
av(d){return!0}}
C.VD.prototype={
R(){return new C.blb($,A.bC,0,B.a([],x.X),null,null)}}
C.blb.prototype={
Z(){this.a2()
this.m7()},
mr(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.Je("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.Uk(900,new C.e0g())}w.m(new C.e0h())},
b0g(d){return this.m(new C.e0b(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aX(A.o.u(A.k.ao(m,60)),2,"0")
v=A.a.aX(A.o.u(A.o.F(A.k.dd(m),60)),2,"0")
m=B.b4(n,n,n,new C.brN(l,A.c0,n),A.aRM)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fm7,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.as(new B.a4(280,280,new B.an(A.A,n,A.ab,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fl7,n,n,n),A.au,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vm,n,n,n)],s),A.m,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.diq[r]
u.push(new E.dX(""+q+" min",o.d===q,new C.e0d(o,q),n,A.c0,n))}m=o.f
p=m?A4.uB:A.hn
m=m?"Pause":"Start"
return E.lw(A.c0,A.f0,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fc(u,n,n),new E.fc(B.a([new E.fD(p,m,new C.e0e(o),A.be,n),new E.fD(A.oo,"Reset",new C.e0f(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.P,0,A.p))}}
C.brN.prototype={
a3(d,e){var w,v,u,t,s=e.ej(A.I),r=e.a/2-14
$.S()
w=B.I()
w.b=A.a9
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ad(s,r,w)
w=B.bX(s,r)
v=B.I()
v.b=A.a9
v.c=16
v.d=A.by
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sam(new B.h0(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aA(0,B.bX(s,r)))
d.e4(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
av(d){return d.b!==this.b}}
C.UQ.prototype={
R(){return new C.bkN($,A.bC,0,B.a([],x.X),null,null)}}
C.bkN.prototype={
Z(){this.a2()
this.m7()},
mr(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.So.h(0,p.d)
w.toString
v=A.d.f4(w,new C.dM_())
u=A.k.F(p.f,v)
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
E.ml("flute",D.c6W[t]+5,1400,0.35)}p.m(new C.dM0())},
gcb1(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Kx("Press Start",0.5)
w=D.So.h(0,this.d)
w.toString
v=A.d.f4(w,new C.dLV())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Kx("Breathe in",0.5+0.5*A.dw.aw(0,p))
case 1:return new B.Kx("Hold",1)
case 2:return new B.Kx("Breathe out",1-0.5*A.dw.aw(0,p))
default:return new B.Kx("Hold",0.5)}}}return new B.Kx("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcb1(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hh.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.hh.j(0.35),A.I,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pH,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kx,q,q,q),q,q,q,q,q,q))
n=B.as(new B.a4(300,340,new B.an(A.A,q,A.ab,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aW(D.So.gev(D.So));w.C();){v=w.gS(w)
o.push(new E.dX(v,r.d===v,new C.dLY(r,v),q,A.hh,q))}w=r.e
v=w?A.z3:A.hn
w=w?"Stop":"Start"
o.push(new E.fD(v,w,new C.dLZ(r),A.be,q))
return E.lw(A.hh,A.f0,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fc(o,q,q))}}
C.aJf.prototype={}
C.Vu.prototype={
R(){return new C.bl2(new B.cw(null,x.A),B.a([],x.au),A.av,A.c)}}
C.bl2.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aH(s,s,s,s,K.ow,s,s,s,new C.dXM(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.m(18),new B.er(B.aA(s,B.b4(s,s,s,new C.bn3(t.e,t.x,s),A.fF),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dXN(t),new C.dXO(t),s,s,s,s,s,s,s,s,s,new C.dXP(t),s,s,s,s,!1,A.a3),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.cZ3[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.FD(v,u,new C.dXQ(t,v),!1,s))}u=t.r
return E.lw(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bT,p,s),"DRAW PAD",B.x(B.a([new E.fc(o,s,s),E.iL(A.bE,""+A.k.V(u),"Brush",30,2,new C.dXR(t),u),new E.fc(B.a([new E.dX("Eraser",t.w,new C.dXS(t),A.H0,A.bE,s),new E.fD(A.pi,"Undo",new C.dXT(t),A.c,s),new E.fD(A.eb,"Clear",new C.dXU(t),A.c,s),new E.fD(A.OM,"Paper",new C.dXV(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.P,0,A.p))}}
C.bn3.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.S()
w=B.I()
w.r=this.c.gp(0)
d.aP(new B.a3(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){r=w[s]
q=$.S()
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.by
p.e=A.dQ
p.b=A.a9
m=r.c
if(m.length===1){q=A.d.gI(m)
m=new B.ao(A.O,A.M,A.S,A.T,A.R)
m.r=o.gp(o)
l=m.G()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=B.a([],t)
k=new B.aF(q.r,A.ag,null,null,o)
o.push(new B.aY(A.d.gI(m).a,A.d.gI(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new B.c5(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bx(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new B.aq(A.d.gak(m).a,A.d.gak(m).b)
o.push(q)
o=k.f
if(o!=null)q.bx(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.G()
q=k.e
u.drawPath((q==null?k.e=new B.cd(k.gbu().a.snapshot()):q).a,l)
l.delete()}}},
av(d){return!0}}
C.Wc.prototype={
R(){var w=x.S
return new C.aF7(B.aX(w),B.aX(w))}}
C.aF7.prototype={
Z(){this.a2()
this.atl()},
atl(){var w,v,u=this,t=x.N,s=B.bp(D.dnD,!0,t)
A.d.D3(s)
w=x.S
v=B.T(s).c
t=B.C(B.d5(s,0,B.dB(u.d,"count",w),v),t)
A.d.v(t,B.d5(s,0,B.dB(u.d,"count",w),v))
A.d.D3(t)
u.e=t
u.f.aa(0)
u.r.aa(0)
u.w=0
u.x=!1},
caX(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
E.ml("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.eny(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gak(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bP(A.mG,new C.enz(s,v,u),t)
else{s.x=!0
B.bP(Ab.Gf,new C.enA(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.V3,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ao(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yr,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aT:A.ac,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iK,A.i,0,q,q),q),B.E(B.io(!0,q,q,A.y,new B.hK(v,8,8,1,q),new C.enE(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.m,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d_z[t]
o.push(new E.dX(s.b,r.d===s.a,new C.enF(r,s),q,A.aJ,q))}o.push(new E.fD(K.ap2,"New game",new C.enG(r),A.be,q))
return E.lw(A.aJ,A.f0,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fc(o,q,q))}}
C.Wm.prototype={
R(){return new C.aFs(B.a([],x.t))}}
C.aFs.prototype={
cb0(d){A.d.aa(this.d)
this.w=!0
this.b0f()},
b0f(){this.d.push(A.cK.ap(4))
this.e=0
this.a_x()},
a_x(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_x=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eyk(t))
s=x.H
w=3
return B.b(B.bP(A.lD,null,s),$async$a_x)
case 3:r=t.d,q=B.bp(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aUd(n)
w=7
return B.b(B.bP(new B.bb(1000*Math.max(280,600-r.length*18)),null,s),$async$a_x)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eyl(t))
case 1:return B.h(u,v)}})
return B.i($async$a_x,v)},
aUd(d){this.m(new C.eyi(this,d))
E.ml("marimba",D.c6V[d]+5,450,0.55)
B.bP(A.Gd,new C.eyj(this),x.H)},
cb2(d){var w,v,u=this
if(!u.w||u.r)return
u.aUd(d)
w=u.d
v=u.e
if(w[v]!==d){F.dF(90,"",600,0,0.5,"saw")
u.m(new C.eym(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eyn(u))
B.bP(A.hy,new C.eyo(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aUh,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fvo,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.az4[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.az4[v].j(0.8),A.I,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cY(p,p,p,p,A.b5,new B.o(u,p,new B.bH(r,r,r,r),new B.bh(t,t,t,t),s,p,A.n),A.jg,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eyp(q,v),p,p,p,p,p,p,!1,A.a3))}o=B.as(new B.D(A.aa,B.x(B.a([o,A.am,n,A.d4,new B.fH(1,B.kQ(1,l,2,12,12,p,A.dS,!1),p)],m),A.m,p,A.b9,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lw(A.bt,A.f0,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fc(B.a([new E.fD(A.hn,n,q.gcb_(q),A.be,p)],m),p,p))}}
C.WG.prototype={
R(){return new C.bmh(new B.au(A.at,$.ax()))}}
C.bmh.prototype={
awT(d){return B.oU(A.k.ac(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eMb(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d4(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eMk()
l=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),l,m,m,m,m,m,2,B.br(m,m,m,m,m,m,m,m,!0,new B.b5(4,B.m(16),A6.xy),m,m,m,m,m,m,m,m,m,m,m,new B.b5(4,B.m(16),D.b2p),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.mp,"Bill amount",!0,!0,!1,m,m,m,m,D.fsL,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.e1,m,m,m,1,m,m,!1,"\u2022",m,new C.eMg(n),m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.aTg,!0,A.a4,m,A.an,m,m,m,m)
k=A.be.j(0.1)
s=B.m(20)
r=B.J(A.be.j(0.35),A.r,1)
q=x.p
s=B.cl(B.a([l,A.bx,B.p(m,B.x(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.awT(w)),t.$2("Total","$"+n.awT(v)),A3.Na,t.$3$big("Each of "+n.f+" pays","$"+n.awT(u),!0)],q),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,m,A.fl,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cL1[p]
r.push(new E.dX(""+o+"%",A.k.V(n.e)===o,new C.eMh(n,o),m,A.be,m))}l=n.f
return E.lw(A.be,A.f0,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fc(r,"TIP",m),E.iL(A.aJ,""+l,"People",20,1,new C.eMi(n),l),new E.fc(B.a([new E.dX("Round up",n.r,new C.eMj(n),m,A.aT,m)],q),m,m)],q),A.m,m,A.e,A.P,0,A.p))}}
C.Wb.prototype={
R(){var w=B.a([3,5],x.t)
return new C.blM(w,A.cK,$,A.bC,0,B.a([],x.X),null,null)}}
C.blM.prototype={
Z(){this.a2()
this.m7()},
mr(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bf(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.ap(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.ap(6)+1)
u.f=t
E.WI("snare",0,0.5)}u.m(new C.emd())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h5()
u.w=t
u.x=t?0:3.141592653589793
E.ml("bell",24,400,0.5)}u.m(new C.eme())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.beD(v,o.r>0,n))}u=B.aA(n,B.as(B.bY(A.fI,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.em6(o),n,n,n,n,n,n,!1,A.a3)}else if(m==="coin"){t=A.k.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.J(A.d0,A.r,6)
s=B.a([new B.ac(0,A.G,A.aT.j(0.4),A.I,30)],x.V)
u=B.aA(n,B.as(B.ee(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.frW,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.euj,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.em7(o),n,n,n,n,n,n,!1,A.a3)}else{m=o.as
u=B.aA(n,B.as(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fh_,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kx,n,n,n)],x.p),A.m,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.em8(o),n,n,n,n,n,n,!1,A.a3)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dfK[r]
v.push(new E.dX(q.b,o.d===q.a,new C.em9(o,q),q.c,A.bq,n))}v=B.a([new E.fc(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iL(A.bq,""+s,"Dice",4,1,new C.ema(o),s))}if(o.d==="num"){s=o.z
s=E.iL(A.bq,""+s,"From",100,1,new C.emb(o),s)
p=o.Q
A.d.v(v,B.a([s,E.iL(A.bq,""+p,"To",1000,2,new C.emc(o),p)],m))}return E.lw(A.bq,A.f0,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.P,0,A.p))}}
C.beD.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cK.ag()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dzu.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bM(s[q],p,p,B.p(p,p,A.f,p,p,O.adv,p,18,p,p,p,p,p,18),p))
return B.eM(A.A,w,B.p(p,new B.an(A.a_,p,A.ab,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bD,p,p,100),p)}}
C.aMr.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.byP.prototype={
q(){var w,v,u
for(w=this.h3$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h2$
w===$&&B.c()
w.q()
this.bx9()}}
C.aMK.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.byV.prototype={
q(){var w,v,u
for(w=this.h3$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h2$
w===$&&B.c()
w.q()
this.bxt()}}
C.aNc.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bz3.prototype={
q(){var w,v,u
for(w=this.h3$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h2$
w===$&&B.c()
w.q()
this.bxX()}}
C.aND.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bzc.prototype={
q(){var w,v,u
for(w=this.h3$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h2$
w===$&&B.c()
w.q()
this.byn()}}
var z=a.updateTypes(["R(tL)","~()","R(a4U)","aB<~>()","R(CH)","G(tL,G)","K(K,tL)","R(CD)","R(ZL)","R(abR)","R(a3z)","R(nz)","WH()","UP()","a8K()","Wh()","Ww()","Wi()","R(mR)","UU()","afl(Y,G)","aec(Y,G)","~(a8<@,@>)","G(CD,CD)","n(ei)","R(af9)","R(a10)","R(CR)","R(ack)","R(aef)","R(ac4)","G(G,r2)","G(G,CH)","n(r2)","~(r2,ai<n>,G)","r2?(CH)","Wb()","v(n,a0O)","R(aaL)","~(AM)","WK()","~(xj,n,t,u,K)","~(n,tL)","Vv()","VW(Y)","NI(Y)","Ve(Y,bu<K>,bu<K>)","WP()","VD()","UQ()","Vu()","Wc()","Wm()","WG()","R(r2)"])
C.fFw.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fuY.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+24}
C.fC9.prototype={
$1(d){var w
if(!this.a.M4(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fCa.prototype={
$1(d){return d.x},
$S:z+0}
C.fFt.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fFu.prototype={
$1(d){var w
if(!this.a.M4(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fFv.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.efl.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.efm.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.efn.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd3(v).Q
v.toString
w.mi(v,A.dU,A.iD)}},
$S:8}
C.efy.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.aa(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.efz.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.efu.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.efs.prototype={
$2(d,e){var w=this.a
w.r.push(B.cG(B.dx(0,0,0,d,0,0),new C.eft(w,this.b,e)))},
$S:1882}
C.eft.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.efv.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWJ().akF(0,u[1],u[2],u[3])
u[4].bQ(0,new C.efq(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
F.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.efr(w.a,v,w.f,w.r))},
$S:0}
C.efq.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:200}
C.efr.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bf(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.efw.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWJ().alo(t,u[1],s,u[3])
F.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.efp(w.a,v,w.e,w.f))},
$S:0}
C.efp.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bf(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.efx.prototype={
$0(){F.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.efo(w,this.b))},
$S:0}
C.efo.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.efC.prototype={
$0(){var w=this.a
return w.m(new C.efB(w))},
$S:0}
C.efB.prototype={
$0(){return this.a.at=!0},
$S:0}
C.efD.prototype={
$0(){var w=this.a
return w.m(new C.efA(w))},
$S:0}
C.efA.prototype={
$0(){return this.a.at=!1},
$S:0}
C.efE.prototype={
$0(){var w=this.a
w.f.saY(0,this.b)
w.Py()},
$S:0}
C.efF.prototype={
$0(){return this.a.YM(this.b)},
$S:0}
C.efG.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Py():w.aXb()},
$S:2}
C.efH.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Py():w.aXb()},
$S:0}
C.euE.prototype={
$2(d,e){return d+e},
$S:1883}
C.euY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.euX(w,d))},
$S:1884}
C.euX.prototype={
$0(){var w=B.aK(J.r(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.euZ.prototype={
$0(){},
$S:0}
C.ev_.prototype={
$0(){},
$S:0}
C.euG.prototype={
$0(){return this.a.m(new C.euF(this.b,this.c))},
$S:0}
C.euF.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.euv.prototype={
$1(d){return this.a.cx===d},
$S:34}
C.euw.prototype={
$1(d){return this.a.cx=d},
$S:30}
C.eux.prototype={
$1(d){return this.a.cy===d},
$S:34}
C.euy.prototype={
$1(d){return this.a.cy=d},
$S:30}
C.euz.prototype={
$1(d){return this.a.db===d},
$S:34}
C.euA.prototype={
$1(d){return this.a.db=d},
$S:30}
C.euB.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:34}
C.euC.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.M(0,d)},
$S:30}
C.euD.prototype={
$0(){var w=this.a
return w.m(w.gaxu())},
$S:0}
C.eut.prototype={
$1(d){return this.a.$1(!0)},
$S:68}
C.euu.prototype={
$1(d){return this.a.$1(!1)},
$S:110}
C.eus.prototype={
$1(d){return this.a.$1(!1)},
$S:134}
C.euR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bix(o,p),n)
w=this.b
v=C.bBq("WORLD",w.a,w.c)
u=C.bBq("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c0:A.be
t=C.bBq("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.D1[o.db].d?A.c0:A.c
q=x.p
s=B.a([v,u,t,C.bBq("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(C.bBq("HEIGHT",""+A.k.V(A.k.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.B(s,A.m,p,A.iK,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bG2(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rS[w].a+".":"You landed on every world!"
v=B.a([new E.fD(A.op,"Again",new C.euM(o),A.c,p),new E.fD(A.ok,"Rebuild",new C.euN(o),A.aT,p)],q)
if(o.d+1<7)v.push(new E.fD(A.jA,"Next world",new C.euO(o),A.be,p))
n.push(C.htx("Perfect landing!",w,A.be,v))}if(o.as==="crashed")n.push(C.htx("Crash!",o.at,A.c0,B.a([new E.fD(A.op,"Try again",new C.euP(o),A.be,p),new E.fD(A.ok,"Rebuild",new C.euQ(o),A.aT,p)],q)))
return new B.an(A.a_,p,A.b3,A.t,n,p)},
$S:66}
C.euM.prototype={
$0(){var w=this.a
return w.m(w.gaxu())},
$S:0}
C.euN.prototype={
$0(){var w=this.a
return w.m(new C.euJ(w))},
$S:0}
C.euJ.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.euO.prototype={
$0(){var w=this.a
return w.m(new C.euI(w))},
$S:0}
C.euI.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.euP.prototype={
$0(){var w=this.a
return w.m(w.gaxu())},
$S:0}
C.euQ.prototype={
$0(){var w=this.a
return w.m(new C.euH(w))},
$S:0}
C.euH.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.euS.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.euL(v,w))},
$S:0}
C.euL.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.euT.prototype={
$1(d){return this.a.y=d},
$S:9}
C.euU.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.euV.prototype={
$1(d){return this.a.z=d},
$S:9}
C.euW.prototype={
$0(){var w=this.a
return w.m(new C.euK(w))},
$S:0}
C.euK.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dLT.prototype={
$0(){var w=0,v=B.j(x.h),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hoL
if(q==null)q=$.hoL=C.cLF()
w=3
return B.b(B.iV(B.a([q,$.ra().cTi("assets/data/three.min.js")],x.D),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kR(0,B.cQ(J.r(s,1)))
q.m(new C.dLS(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:50}
C.dLS.prototype={
$0(){return this.a.d=x.m.a(J.r(this.b,0))},
$S:0}
C.dLv.prototype={
$0(){return this.a.bXJ(B.aT(J.r(this.b,"group")))},
$S:0}
C.dLw.prototype={
$1(d){return A.a.aX(A.o.fv(A.o.E(A.k.V(d*255),0,255),16),2,"0")},
$S:332}
C.dLU.prototype={
$0(){return E.WI("kick",0,0.25)},
$S:0}
C.dLx.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dLy.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dLz.prototype={
$0(){return E.WI("kick",0,0.5)},
$S:0}
C.dLA.prototype={
$0(){return F.dF(1300+this.a.R8.ap(900),"",40,0,0.2,"square")},
$S:0}
C.dLC.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.t(0,u))v.W(0,u)
else{v.M(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.b3(u.d.e,new C.dLB(u)))u.cx=null
u.go=0},
$S:0}
C.dLB.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.azf(d)},
$S:z+10}
C.dLs.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dLt.prototype={
$0(){var w=this.a
return w.m(w.gc7l())},
$S:0}
C.dLu.prototype={
$0(){return this.a.aec(null)},
$S:0}
C.dLJ.prototype={
$0(){var w=this.a.as
return w==null?null:w.f6(0,B.H(["t","shot"],x.N,x.z))},
$S:0}
C.dLK.prototype={
$0(){return this.a.cDl(this.b.a)},
$S:0}
C.dLL.prototype={
$0(){return this.a.aec(this.b)},
$S:0}
C.dLM.prototype={
$1(d){var w=this.a
return w.m(new C.dLI(w,d))},
$S:6}
C.dLI.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dLN.prototype={
$0(){var w=this.a
return w.m(new C.dLH(w,this.b))},
$S:0}
C.dLH.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dLO.prototype={
$0(){var w=this.a
return w.m(new C.dLG(w))},
$S:0}
C.dLG.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dLP.prototype={
$0(){var w=this.a
return w.m(new C.dLF(w))},
$S:0}
C.dLF.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f6(0,B.H(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Ln},
$S:0}
C.dLQ.prototype={
$0(){var w=this.a
return w.m(new C.dLE(w))},
$S:0}
C.dLE.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aZT()
else w.p2=null},
$S:0}
C.dLR.prototype={
$0(){var w=this.a
return w.m(new C.dLD(w))},
$S:0}
C.dLD.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c5g.prototype={
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
$S:315}
C.c5h.prototype={
$1(d){var w=new B.r_([],[]).oA(d.data,!0)
if(x.f.b(w)&&J.r(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:444}
C.foo.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)},
$S:228}
C.fop.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)||w.h(d,1)},
$S:228}
C.foq.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)!==w.h(d,1)},
$S:228}
C.foy.prototype={
$1(d){return!J.r(d,0)},
$S:228}
C.foz.prototype={
$1(d){var w=J.a6(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:228}
C.foA.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:228}
C.dNy.prototype={
$1(d){return this.a.aua(0)},
$S:8}
C.dNc.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.iaD(),B.T(w).k("N<1,G>")).fJ(0)},
$S:0}
C.dNf.prototype={
$1(d){return""+d},
$S:72}
C.dNz.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dNa.prototype={
$1(d){return this.a.aua(this.b)},
$S:8}
C.dNb.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.axZ(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mG(0,d,a1.m8(0.15,0.3))
u=a1.mG(0,d,a1.m8(0.15,0.62))
t=a1.mG(0,"and",a1.m8(0.48,0.46))
s=a1.mG(0,a0,a1.m8(0.82,0.46))
a1=t.a
w.push(new C.nz(v.a,a1,0))
w.push(new C.nz(u.a,a1,1))
w.push(new C.nz(a1,s.a,0))
break
case 1:v=a1.mG(0,d,a1.m8(0.12,0.25))
u=a1.mG(0,d,a1.m8(0.12,0.65))
r=a1.mG(0,"xor",a1.m8(0.46,0.25))
q=a1.mG(0,"and",a1.m8(0.46,0.65))
p=a1.axY(0,a0,a1.m8(0.82,0.25),0)
o=a1.axY(0,a0,a1.m8(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nz(a1,n,0))
m=u.a
w.push(new C.nz(m,n,1))
l=q.a
w.push(new C.nz(a1,l,0))
w.push(new C.nz(m,l,1))
w.push(new C.nz(n,p.a,0))
w.push(new C.nz(l,o.a,0))
break
case 2:k=a1.mG(0,"clock",a1.m8(0.15,0.4))
j=a1.mG(0,"not",a1.m8(0.45,0.65))
s=a1.mG(0,a0,a1.m8(0.82,0.3))
i=a1.mG(0,"buzzer",a1.m8(0.82,0.65))
a1=k.a
w.push(new C.nz(a1,s.a,0))
n=j.a
w.push(new C.nz(a1,n,0))
w.push(new C.nz(n,i.a,0))
break
default:h=a1.mG(0,d,a1.m8(0.12,0.25))
g=a1.mG(0,d,a1.m8(0.12,0.7))
f=a1.mG(0,"nor",a1.m8(0.5,0.25))
e=a1.mG(0,"nor",a1.m8(0.5,0.7))
s=a1.mG(0,a0,a1.m8(0.86,0.25))
a1=f.a
w.push(new C.nz(g.a,a1,0))
n=e.a
w.push(new C.nz(n,a1,1))
w.push(new C.nz(h.a,n,0))
w.push(new C.nz(a1,n,1))
w.push(new C.nz(a1,s.a,0))}},
$S:0}
C.dNg.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.axZ(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.CD(p,"switch",new B.t(0.14*q.a,r*q.b),0))}o.mG(0,w.e,o.m8(0.86,0.5))},
$S:0}
C.dN5.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dN6.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+23}
C.dN7.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dN8.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dN9.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adx(this.c)
if(v.ax)C.Je("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)F.dF(140,"",250,0,0.3,"square")}},
$S:0}
C.dNh.prototype={
$0(){},
$S:0}
C.dNi.prototype={
$0(){return A.d.cz(this.a.e,this.b)},
$S:0}
C.dNj.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dNe.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bs(w.e,new C.dNd(v))
w.cy=null},
$S:0}
C.dNd.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dN4.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mG(0,this.b,new B.t(w.x.a*(0.3+v.ag()*0.4),w.x.b*(0.2+v.ag()*0.6))).a},
$S:0}
C.dNs.prototype={
$0(){var w=this.a
return w.m(new C.dNr(w))},
$S:0}
C.dNr.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dNt.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c6,B.jj(B.b4(w,w,w,new C.bcv(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dNm(v),w,w,w,new C.dNn(v),new C.dNo(v),new C.dNp(v),w,w,w,w,w,w,w,w,w,w,new C.dNq(v),w,w,w,!1,A.a3)},
$S:36}
C.dNq.prototype={
$1(d){return this.a.c96(d.b)},
$S:70}
C.dNo.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.chI(u)
if(t!=null){v.as=t
v.at=u
return}w=v.ayN(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aE(0,u)}},
$S:47}
C.dNp.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.t(A.k.E(w.a+u.Q.a,46,u.x.a-46),A.k.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
C.dNn.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c0k(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dNk(w))
u=t.as
u.toString
v.push(new C.nz(u,w.a,w.b))
B.jP()}}t.z=t.as=null},
$S:38}
C.dNk.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dNm.prototype={
$1(d){return this.a.awM(d.b)},
$S:314}
C.dNu.prototype={
$0(){return this.a.bBS(this.b.a)},
$S:0}
C.dNv.prototype={
$0(){return this.a.aua(this.b.a)},
$S:0}
C.dNw.prototype={
$0(){var w=this.a
return w.m(new C.dNl(w))},
$S:0}
C.dNl.prototype={
$0(){var w=this.a
w.axZ(0)
w.ay=null},
$S:0}
C.dNx.prototype={
$0(){return this.a.cz1(this.b)},
$S:0}
C.cSz.prototype={
$0(){var w=this,v=null,u=B.fx(v,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.bY,v,A.dA,A.bW)
u.el()
return u},
$S:272}
C.dTu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTt.prototype={
$0(){return this.a.d=null},
$S:0}
C.dTw.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c29()},
$S:122}
C.dTv.prototype={
$0(){return B.a5(this.a,!1).ik()},
$S:0}
C.foQ.prototype={
$0(){return K.aJI},
$S:z+40}
C.foR.prototype={
$0(){return D.dKR},
$S:z+43}
C.foS.prototype={
$0(){return D.dHM},
$S:z+13}
C.foT.prototype={
$0(){return D.eb3},
$S:z+14}
C.foU.prototype={
$0(){return D.dTX},
$S:z+15}
C.foV.prototype={
$0(){return K.aJz},
$S:z+16}
C.foW.prototype={
$0(){return D.e8Q},
$S:z+17}
C.foX.prototype={
$0(){return K.aJH},
$S:z+12}
C.foY.prototype={
$0(){return D.dK_},
$S:z+19}
C.f4m.prototype={
$2(d,e){return new C.afl($.bFU()[e],new C.f4l(e,this.a),null)},
$S:z+20}
C.f4l.prototype={
$0(){var w=this.a,v=I.aHd.h(0,$.bFU()[w].a)
$.asH=v==null?"music":v
B.a5(this.b,!1).cc(B.eh(new C.f4j(w),!1,null,x.H))},
$S:0}
C.f4j.prototype={
$1(d){return $.bFU()[this.a].e.$0()},
$S:39}
C.f4n.prototype={
$2(d,e){return new C.aec(D.azK[e],new C.f4k(this.a,e),null)},
$S:z+21}
C.f4k.prototype={
$0(){return this.a.d.$1(D.azK[this.b])},
$S:0}
C.f42.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f41.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f40.prototype={
$1(d){var w=this
return new B.e0(new C.f4_(w.a,w.b,w.c,w.d),null)},
$S:21}
C.f4_.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=B.aG(a2,d,a0).w
a0=B.aG(a2,d,a0).w
w=x.p
v=B.a([D.fCU,A.au,D.fJG,A.ae],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aP(12,12)
m=new B.aP(12,12)
m=B.a([new B.by(1,A.ba,B.aM(d,A.Y,!1,d,!0,A.t,d,B.aN(),r[p],d,d,d,d,d,2,new B.e7(d,d,d,d,d,d,d,d,d,d,"Title",d,N.El,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bh(n,n,n,n),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.aa,d,d,d,d,d,d,d,d,d,d,d,A.jo,!0,A.a4,d,A.an,d,d,d,d),d),A.ad,new B.by(2,A.ba,B.aM(d,A.Y,!1,d,!0,A.t,d,B.aN(),q[p],d,d,d,d,d,2,new B.e7(d,d,d,d,d,d,d,d,d,d,"Small line",d,N.El,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bh(m,m,m,m),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.aa,d,d,d,d,d,d,d,d,d,d,d,A.jo,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.duL[l]
j=new B.aP(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bz
f=new B.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(B.aA(d,B.p(d,B.X(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new B.o(h,d,new B.bH(f,f,f,f),new B.bh(j,j,j,j),d,d,A.n),d,d,d,A.fu,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.f3Y(a3,p,u,k),d,d,d,d,d,d,!1,A.a3))}A.d.v(v,B.a([new B.y("SLAB "+o,d,D.fse,d,d,d,d,d,d,d,d,d),A.am,new B.ca(A.aM,A.e,A.i,A.m,d,A.p,d,0,m,d),A.Q,new B.a4(d,44,B.cl(n,d,d,d,d,d,A.aM,!1),d),A.aB],w))}v.push(B.bI(A.x8,d,new C.f3Z(t,r,q,u,a2),d))
return new B.D(new B.P(0,0,0,a1.f.d),B.bn(!0,new B.cT(new B.aZ(0,1/0,0,a0.a.b*0.86),B.cl(v,d,d,A0.ys,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:102}
C.f3Y.prototype={
$0(){var w=this
return w.a.$1(new C.f3X(w.b,w.c,w.d))},
$S:0}
C.f3X.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f3Z.prototype={
$0(){var w=this,v=w.a
v.m(new C.f3W(v,w.b,w.c,w.d))
B.a5(w.e,!1).O(null)},
$S:0}
C.f3W.prototype={
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
C.f4a.prototype={
$0(){var w=this.a
return w.m(new C.f49(w))},
$S:0}
C.f49.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f4b.prototype={
$0(){return E.uu(this.b,this.a.f,"scene")},
$S:0}
C.f4c.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gI(u),A.d.gak(u),0.4)
u.toString
w=this.a.ga_7().x
w===$&&B.c()
return B.c4(v,new B.o(v,v,v,v,v,new B.c_(D.b07,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c2],x.O),v,v),A.n),A.bh)},
$S:345}
C.f4d.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.as(B.eO(A.A,B.cb(new B.h8(B.a([u.gum(),u.ga_7()],x.dS)),new C.f48(u,this.b,v),w),A.f,A.e3),w,w,w)},
$S:232}
C.f48.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gum().x
r===$&&B.c()
w=r<0.9?1:1-C.bsJ(r,0.9,0.98)
v=s.ga_7().x
v===$&&B.c()
u=A.dw.aw(0,v)
switch(s.gay_().a){case 0:s=s.bB3(t.b,r,u,t.c)
break
case 1:s=s.bRQ(t.b,r,u,t.c)
break
case 2:s=s.cDO(t.b,r,u,t.c)
break
case 3:s=s.bDZ(t.b,r,u,t.c)
break
case 4:s=s.bHi(t.b,r,u,t.c)
break
case 5:s=s.c97(t.b,r,u,t.c)
break
default:s=null}return B.db(s,w)},
$S:230}
C.f4e.prototype={
$2(d,e){var w=B.awg(this.b),v=this.c.d,u=B.ar(A.d.gI(v),A.d.gak(v),0.4)
u.toString
v=B.ar(A.d.gI(v),A.d.gak(v),0.4)
v.toString
v=w.cMC(u,A.bz,v,3.5)
u=this.a
w=u.gum().x
w===$&&B.c()
return B.aax(B.kR(null,null,null,1,0,new C.f47(u),A.k.E(w,0,1)),v)},
$S:1886}
C.f47.prototype={
$1(d){var w=this.a
w.gum().sp(0,d)
if(w.as)w.m(new C.f43(w))},
$S:6}
C.f43.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f4f.prototype={
$0(){var w=this.a
w.gum().sp(0,0)
w.aeC()},
$S:0}
C.f4g.prototype={
$1(d){var w=this.a
w.m(new C.f46(w,d))
if(w.as)w.aeC()},
$S:6}
C.f46.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f4h.prototype={
$0(){var w=this.a
w.m(new C.f45(w,this.b))
w.gum().sp(0,0)
if(w.as)w.aeC()},
$S:0}
C.f45.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f4i.prototype={
$0(){var w=this.a
return w.m(new C.f44(w,this.b))},
$S:0}
C.f44.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f3U.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1887}
C.f3V.prototype={
$1(d){return d.b},
$S:1888}
C.dnM.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dnN.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dnJ.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dnK.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dnL.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dnO.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dnP.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dnQ.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dnR.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dnS.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dnT.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dnU.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dnV.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dnW.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.etZ.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.etO.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.etQ.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.etR.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.etU.prototype={
$1(d){var w=D.mT.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.etV.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.C(new B.ef(new B.cO(new B.Z(q,new C.etW(d),p.k("Z<1>")),new C.etX(r),p.k("cO<1,r2?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.L)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.etW.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.etX.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.etS.prototype={
$1(d){return D.mT.h(0,d.b).c===D.xr},
$S:z+54}
C.etT.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.euo.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vq(0,u)
w.a71(A.o.ao(v,1000))},
$S:8}
C.etY.prototype={
$0(){},
$S:0}
C.etK.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
case 6:e.au("String","ngmy_core_reaction_lab_v1",s.a.d.ah())
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
C.eu0.prototype={
$1(d){var w=null,v=this.a.b
return B.bn(!0,B.x(B.a([A.Q,B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.mT.h(0,v).b,D.mT.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fVb,w,B.d(D.mT.h(0,v).a,w,w,w,w,w,w,A.fS,w,w,w),w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,W.aqx,w,w,w,w,new C.eu_(d),!1,w,w,w,w,w,w,w,D.fMx,w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.eu_.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eu2.prototype={
$1(d){var w,v,u=null,t=B.aG(d,u,x.l).w,s=B.a([D.emH],x.p)
for(w=0;w<6;++w){v=D.aA6[w]
s.push(B.dG(!1,u,u,u,!0,u,u,u,!0,u,u,D.c_3,u,u,u,u,new C.eu1(d,v),!1,u,u,u,u,u,new B.y(v.b,u,A.mp,u,u,u,u,u,u,u,u,u),u,new B.y(v.a,u,A.fS,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bn(!0,new B.cT(new B.aZ(0,1/0,0,t.a.b*0.7),B.cl(s,u,u,D.bEo,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:27}
C.eu1.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.etN.prototype={
$1(d){var w=null
return B.ep(B.a([B.bN(!1,A.di,w,w,!0,w,w,w,new C.etL(d),w,w),B.bN(!1,A.Eq,w,w,!0,w,w,w,new C.etM(d),w,w)],x.p),w,w,I.nl,D.fJR,w,w,w,w,D.fMP,w)},
$S:19}
C.etL.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.etM.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eum.prototype={
$0(){var w=this.a
return w.m(new C.eul(w))},
$S:0}
C.eul.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eun.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.mx(new C.euc(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.baF:t
v=B.a([B.b4(u,t,t,new C.biv(w,v,new C.eud(r),new C.eue(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,B.dZ(B.cb(w,new C.euf(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bIY())
return B.aA(A.c6,B.jj(new B.an(A.a_,t,A.b3,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eug(r),t,r.gcj0(),t,new C.euh(r),new C.eui(r),new C.euj(r),t,t,t,t,t,t,t,t,t,t,new C.euk(r),t,t,t,!1,A.a3)},
$S:36}
C.euc.prototype={
$0(){return this.a.acB(this.b)},
$S:0}
C.euk.prototype={
$1(d){return this.a.cBA(d.b)},
$S:70}
C.eui.prototype={
$1(d){return this.a.cj1(d.b)},
$S:47}
C.euj.prototype={
$1(d){return this.a.cj2(d.b)},
$S:18}
C.euh.prototype={
$1(d){return this.a.b2m()},
$S:38}
C.eug.prototype={
$1(d){return this.a.adi(d.b)},
$S:314}
C.eud.prototype={
$0(){return this.a.z},
$S:671}
C.eue.prototype={
$0(){return this.a.Q},
$S:732}
C.euf.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bNe()
if(p.length===0)return A.bJ
w=A.w.j(0.55)
v=B.m(14)
u=B.J(A.bz,A.r,1)
t=B.a([D.fHf,A.cS],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.L)(p),++r)t.push(new B.y(p[r],q,D.fqS,q,q,q,q,A.a1,q,2,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.P,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h7,q,q,q)},
$S:62}
C.etP.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.J(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ed,B.B(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ac.UZ,w,w,w),A.bF,B.d(g,w,w,w,w,w,w,G.aa5,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1890}
C.eu8.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).ik()},
$S:0}
C.eu9.prototype={
$0(){var w=this.a
return w.m(new C.eu7(w))},
$S:0}
C.eu7.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eua.prototype={
$0(){var w=this.a
return w.m(new C.eu6(w))},
$S:0}
C.eu6.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eub.prototype={
$0(){var w=this.a
return w.m(new C.eu5(w))},
$S:0}
C.eu5.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eu4.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mT.gdW(D.mT),w=w.gaf(w);w.C();){v=w.gS(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.L)(p),++r)u.push(s.cwk(p[r]))
return new B.D(R.ajU,B.x(B.a([new B.D(Ah.alz,w,q),B.B(u,A.m,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.eu3.prototype={
$0(){return this.a.c9d(this.b)},
$S:0}
C.dnI.prototype={
$0(){var w=this,v=null,u=B.fx(v,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.bY,v,A.dA,A.bW)
u.el()
return u},
$S:272}
C.bOB.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bOM.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bOH.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bON.prototype={
$1(d){return this.a.M4(d)&&!d.x},
$S:z+0}
C.bOO.prototype={
$2(d,e){return Math.max(d,this.a.aBD(e))},
$S:z+6}
C.bOQ.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bOR(w))},
$S:z+5}
C.bOR.prototype={
$0(){return this.a.a},
$S:93}
C.bOP.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:78}
C.bOS.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bOT(w))},
$S:z+5}
C.bOT.prototype={
$0(){return this.a.a},
$S:93}
C.bOD.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bOE(w))},
$S:z+5}
C.bOE.prototype={
$0(){return this.a.a},
$S:93}
C.bOC.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:78}
C.bOF.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bOG(w))},
$S:z+5}
C.bOG.prototype={
$0(){return this.a.a},
$S:93}
C.bOA.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bOU.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bOI.prototype={
$1(d){return d!==this.b&&this.a.aHW(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bOL.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bOK.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bOJ.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bJc.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bJd.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cqZ.prototype={
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
$S:200}
C.fRj.prototype={
$1(d){var w
$.S()
w=B.I()
w.r=d.gp(0)
return w},
$S:1891}
C.fRl.prototype={
$2(d,e){var w
$.S()
w=B.I()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.by
return w},
$S:1892}
C.fRm.prototype={
$5(d,e,f,g,h){return B.bs(new B.a3(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1893}
C.fRk.prototype={
$3(d,e,f){var w
$.S()
w=B.I()
w.sam(new B.a9(A.b0,A.b6,A.x,B.a([e,f],x.O),null,null).aA(0,d))
return w},
$S:1894}
C.bIR.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bIS.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bIQ(w))},
$S:0}
C.bIQ.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bIT.prototype={
$0(){return B.a([],x.k)},
$S:1895}
C.bIU.prototype={
$1(d){return this.a.bF(d).a>15e5},
$S:463}
C.bIV.prototype={
$0(){var w,v,u
J.bG2(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.CJ(v))if(C.ha3(v.b))w.b1Q(v)
else w.a09(v)
else{u=w.a.c.bew(v)
w.aeO(u==null?"The "+$.qx().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bIP.prototype={
$1(d){return new B.e0(new C.bIN(this.a,this.b),null)},
$S:21}
C.bIN.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bIO(this.a,v,e),t=$.qx(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.k8,w,w,w),q=B.aH(w,w,w,w,D.bQx,w,w,w,new C.bIJ(u,v),w,w,w,w,w,w),p=A.k.E(v.ch,1,2.6),o=x.p
return B.bn(!0,new B.D(A.w7,B.x(B.a([r,A.au,D.fWe,A.W,B.B(B.a([q,B.E(B.kR(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aH(w,w,w,w,D.bXn,w,w,w,new C.bIK(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.i,0,w,w),B.B(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b2,B.bN(!1,D.fzb,w,w,!0,w,w,w,new C.bIL(u),w,w),B.bN(!1,A.x8,w,w,!0,w,w,w,new C.bIM(d),w,w)],o),A.m,w,A.e,A.i,0,w,w)],o),A.E,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:86}
C.bIO.prototype={
$1(d){var w=this.a
w.m(new C.bIH(this.b,d))
this.c.$1(new C.bII())
w.a.toString},
$S:6}
C.bIH.prototype={
$0(){return this.a.ch=A.k.E(this.b,1,2.6)},
$S:0}
C.bII.prototype={
$0(){},
$S:0}
C.bIJ.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bIK.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bIL.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bIM.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.bJ9.prototype={
$2(d,e){var w
if(d==="short"){F.dF(1800,"",120,0,0.55,"noise")
F.dF(200,"",160,2.2,0.4,"saw")
B.fM()
w=this.a
if(w.c!=null)w.aeO("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){F.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.aeO("\u26a0 Overloaded! The "+$.qx().h(0,e.b).b+" can only give about "+A.k.ac(w.a.c.zS(e),2)+" amps but your gadgets are asking for "+A.k.ac(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.aeO("Burnt out! "+e.ay)
F.dF(140,"",320,0,0.6,"noise")
F.dF(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bJa.prototype={
$0(){},
$S:0}
C.bIk.prototype={
$0(){},
$S:0}
C.bJb.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bJ8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aA(A.c6,B.b4(p,p,p,new C.ajb(w,v,u,t,s,r==null?A.jk:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJ2(o),new C.bJ3(o),new C.bJ4(o),p,p,p,p,p,p,p,p,p,p,new C.bJ5(o),p,p,p,!1,A.a3)],q)
if(o.a.c.a.length===0)n.push(D.b9V)
w=o.Q
if(w!=null){v=B.m(14)
u=B.J(A.cL,A.r,1)
n.push(B.ap(p,B.aA(p,B.p(p,B.B(B.a([D.fxi,B.E(B.d(w,p,p,p,p,p,p,D.fp6,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(D.bfU,p,u,v,p,p,A.n),p,p,p,p,A.nt,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJ6(o),p,p,p,p,p,p,!1,A.a3),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b_M(B.B(B.a([D.bGw,new E.fD(A.H2,"Cut wire",new C.bJ7(o),A.c0,p)],q),A.m,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.cjA(w),p,p,10,10,p,p))}return B.jj(new B.an(A.a_,p,A.b3,A.t,n,p),A.t,p)},
$S:282}
C.bJ3.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b8R(s)
if(r!=null){t.m(new C.bJ0(t,r,d))
return}w=t.b2v(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.t(v*u.a,w.d*u.b).aE(0,s)
t.m(new C.bJ1(t,w))}},
$S:47}
C.bJ0.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bJ1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bJ4.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bIZ(w,d))
else if(w.w!=null)w.m(new C.bJ_(w,d.b.a7(0,w.x)))},
$S:18}
C.bIZ.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bJ_.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bJ2.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b8R(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.alo(u.a,u.b,v.a,v.b)!=null)F.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.aeM()},
$S:38}
C.bJ5.prototype={
$1(d){var w=this.a,v=d.b,u=w.b2v(v)
if(u!=null){w.m(new C.bIX(w,u))
if(D.mi.aj(0,u.b))w.cuc(u)
w.a.toString
return}w.m(new C.bIY(w,w.cGU(v)))},
$S:70}
C.bIX.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
F.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
F.dF(200,"",70,0,0.2,"saw")}},
$S:0}
C.bIY.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bJ6.prototype={
$0(){var w=this.a
return w.m(new C.bIW(w))},
$S:0}
C.bIW.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJ7.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
F.dF(300,"",50,0,0.35,"noise")
w.aeM()},
$S:0}
C.bIl.prototype={
$0(){return this.a.bqR(this.b)},
$S:0}
C.bIE.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.fjg,w,w,w),B.E(B.kR(this.b.d,w,w,g,h,new C.bIG(this.a,f),A.k.E(e,h,g)),1)],x.p),A.m,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1896}
C.bIG.prototype={
$1(d){var w=this.a
w.m(new C.bIF(this.b,d))
w.a.toString},
$S:6}
C.bIF.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bIr.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
F.dF(260,"",70,0,0.35,"noise")
w.aeM()},
$S:0}
C.bIs.prototype={
$0(){var w=this.a
return w.m(new C.bIq(w))},
$S:0}
C.bIq.prototype={
$0(){return this.a.d=null},
$S:0}
C.bIt.prototype={
$0(){this.a.m(new C.bIp(this.b,this.c))
F.dF(900,"",40,0,0.3,"noise")},
$S:0}
C.bIp.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bIw.prototype={
$0(){return this.a.b1Q(this.b)},
$S:0}
C.bIx.prototype={
$0(){return this.a.a09(this.b)},
$S:0}
C.bIy.prototype={
$0(){return this.a.a1O(this.b)},
$S:0}
C.bIz.prototype={
$0(){var w=this.a
w.m(new C.bIo(this.b,this.c))
w.a.toString},
$S:0}
C.bIo.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bIA.prototype={
$0(){var w=this.a
w.m(new C.bIn(this.b,this.c))
w.a.toString},
$S:0}
C.bIn.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bIB.prototype={
$0(){var w=this.a
w.m(new C.bIm(this.b,this.c))
w.a.toString},
$S:0}
C.bIm.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bIC.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bID.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIu.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIv.prototype={
$1(d){return this.a.f=d},
$S:6}
C.foB.prototype={
$1(d){return d.aHA("bulb")},
$S:z+2}
C.foC.prototype={
$1(d){return d.q1(0,"switch")&&d.aHA("bulb")},
$S:z+2}
C.foD.prototype={
$1(d){return A.d.b3(d.a,new C.fon())},
$S:z+2}
C.fon.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.foE.prototype={
$1(d){return d.q1(0,"resistor")&&A.d.b3(d.a,new C.fom())},
$S:z+2}
C.fom.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.foF.prototype={
$1(d){return!d.q1(0,"battery")&&d.aHA("bulb")},
$S:z+2}
C.fos.prototype={
$1(d){return A.d.b3(d.a,new C.fol())},
$S:z+2}
C.fol.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fot.prototype={
$1(d){return A.d.b3(d.a,new C.fok())},
$S:z+2}
C.fok.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fou.prototype={
$1(d){return A.d.b3(d.a,new C.foj())},
$S:z+2}
C.foj.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fov.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.foh())&&A.d.b3(w,new C.foi())&&d.q1(0,"buck")},
$S:z+2}
C.foh.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.foi.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fow.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fof())&&A.d.b3(w,new C.fog())},
$S:z+2}
C.fof.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fog.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fox.prototype={
$1(d){return A.d.b3(d.a,new C.foe())},
$S:z+2}
C.foe.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.dYh.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.aa(0)
w.v(0,v.b)},
$S:0}
C.dYq.prototype={
$1(d){var w=this.a.d
return w.aHW(d)&&w.CJ(d)},
$S:z+0}
C.dYr.prototype={
$1(d){return d.x},
$S:z+0}
C.dYs.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dYt.prototype={
$0(){},
$S:0}
C.dYg.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fOM,A.au,D.fz7,A.W],o)
for(w=this.a,v=0;v<19;++v){u=D.Rh[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ay(A.bz,1,A.r,-1)
n.push(B.aA(q,B.p(q,B.x(B.a([new B.y(u.a,q,A.iu,q,q,q,q,q,q,q,q,q),A.bF,new B.y(u.b,q,D.fpR,q,q,q,q,A.a1,q,3,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(t,q,new B.bH(r,r,r,r),new B.bh(s,s,s,s),q,q,A.n),q,q,q,A.ct,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dYf(w,d,u),q,q,q,q,q,q,!1,A.a3))}return B.eT(q,G.mC,new B.D(A.bQ,new B.a4(340,q,B.cl(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d8,q,new B.b8(p,A.a0),q)},
$S:49}
C.dYf.prototype={
$0(){B.a5(this.b,!1).O(null)
var w=this.a
w.m(new C.dYe(w,this.c))
F.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dYe.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bjD()},
$S:0}
C.dYc.prototype={
$1(d){return new C.VW(this.a.d,null)},
$S:z+44}
C.dYd.prototype={
$0(){},
$S:0}
C.dYp.prototype={
$1(d){return new B.e0(new C.dYo(this.a),null)},
$S:21}
C.dYo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aim(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.be:A.aJ
k=B.aG(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.fLZ,A.b2,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.i,0,m,m),A.Q,B.bx(B.m(4),B.kj(A.bz,m,m,5,m,w.a/11,new B.lH(f,x.c)),A.ap),A.ae],v)
if(h)u.push(D.fCh)
else{h=f.j(0.1)
t=B.m(14)
s=B.J(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.Kd,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.Em,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.au,q,new B.bM(A.a8,m,m,B.bN(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.dYm(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bg,m,m,m))}u.push(A.W)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dr,1,A.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aC:A.c
u.push(B.aA(m,B.p(m,new B.ca(A.aM,A.e,A.i,A.m,m,A.p,m,0,B.a([new B.y(s,m,A.aa3,m,m,m,m,m,m,m,m,m),A.as,new B.by(1,A.ba,new B.y(r.a,m,new B.F(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bH(n,n,n,n),new B.bh(t,t,t,t),m,m,A.n),m,m,m,A.eI,A.nt,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dYn(l,o,e),m,m,m,m,m,m,!1,A.a3))}return B.bn(!0,new B.cT(new B.aZ(0,1/0,0,k.a.b*0.75),B.cl(u,m,m,A0.ys,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:86}
C.dYm.prototype={
$0(){var w=this.a
w.m(new C.dYk(w))
this.b.$1(new C.dYl())
w.Fb()},
$S:0}
C.dYk.prototype={
$0(){var w=this.a
$.aim()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dYl.prototype={
$0(){},
$S:0}
C.dYn.prototype={
$0(){var w=this.a
w.m(new C.dYi(w,this.b))
this.c.$1(new C.dYj())
w.Fb()},
$S:0}
C.dYi.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dYj.prototype={
$0(){},
$S:0}
C.dYv.prototype={
$0(){return B.a5(this.a,!1).ik()},
$S:0}
C.dYw.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.m7("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a5(t.b,!1).cc(B.eh(new C.dYu(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dYu.prototype={
$1(d){B.lg("construction")
return Aj.hO5()},
$S:z+45}
C.dYx.prototype={
$0(){return E.hzZ(this.a,"ELECTRONICS LAB",this.b,A.aJ)},
$S:0}
C.dYy.prototype={
$0(){var w=this.a
return w.m(w.d.gcYv())},
$S:0}
C.dYz.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grZ(v))
w.Fb()},
$S:0}
C.cI3.prototype={
$2(d,e){var w=null,v=this.a.gay6().x
v===$&&B.c()
return B.b4(w,w,w,new C.bao(v,w),A.aw)},
$S:59}
C.cI2.prototype={
$3(d,e,f){var w=new B.aF($.S().r,A.ag,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.aY(v,t))
w.D(new B.c5(v,u,v+e,u))
w.D(new B.c5(v,u,v,u+e))
w.D(new B.c5(v,u,v-e,u))
w.D(new B.c5(v,u,v,t))
w.D(new B.bt())
t=B.I()
t.r=A.c.j(f).gp(0)
this.a.aH(w,t)},
$S:465}
C.fW9.prototype={
$3(d,e,f){return new C.Ve(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.fWa.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d1(e,!1,B.iu(A.A,g,null,new B.bg(B.cK(A.cu,e,null),new B.bq(0.85,1,w),w.k("bg<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
C.dUr.prototype={
$0(){return B.a5(this.a,!1).ik()},
$S:0}
C.dUq.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c_L(o):q.bD1(o,p),m=x.p
p=B.a([B.oZ(new B.mG(n,new B.bR(p,x.bz)),A.p9,B.qs(),A.b5,A.b5,new C.dUo())],m)
n=t.d
if(n){w=A.k.F(q.gSi(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.as],m)
if(w)m.push(D.bGi)
else m.push(A.b2)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.be:A.av,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ap(s,B.as(B.cY(s,B.B(m,A.m,s,A.e,A.i,0,s,s),s,s,A.et,new B.o(A.w,s,s,u,s,s,A.n),A.mG,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.vg)p.push(B.ap(s,B.as(B.p(s,s,A.f,s,s,A.Ls,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wV)p.push(B.ap(s,B.p(s,s,A.f,s,s,A.Ls,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.aA(s,B.as(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dUp(q),s,s,s,s,s,s,!1,A.a3),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a_,s,A.b3,A.t,p,s),A.ap)},
$S:299}
C.dUo.prototype={
$2(d,e){var w=x.Y
return new B.d1(e,!1,B.iu(A.A,d,null,new B.bg(e,new B.bq(0.92,1,w),w.k("bg<bO.T>"))),null)},
$S:454}
C.dUp.prototype={
$0(){var w=this.a
return w.m(new C.dUn(w))},
$S:0}
C.dUn.prototype={
$0(){return this.a.e=null},
$S:0}
C.dUm.prototype={
$0(){var w=this.a
return w.m(new C.dUl(w,this.b))},
$S:0}
C.dUl.prototype={
$0(){return this.a.e=A.d.cp(G.kp,this.b)},
$S:0}
C.dUk.prototype={
$0(){var w=this.a
return w.m(new C.dUj(w))},
$S:0}
C.dUj.prototype={
$0(){return this.a.e=0},
$S:0}
C.dUf.prototype={
$0(){var w=this.a
return w.m(new C.dUe(w))},
$S:0}
C.dUe.prototype={
$0(){return this.a.e=null},
$S:0}
C.dUi.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fUA,A.as,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eM,p,p,p,D.fw8,p,p,p),1),B.d(A.a.aX(A.o.u(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.aX(A.o.u(B.fR(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qY,p,p,p)],l),A.m,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.kk,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bwS(w.gSi(),this.c.d,p),A.aw)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.J(A.aX,A.r,1)
s=B.m(10)
o=B.p(p,B.B(B.a([B.aA(p,B.p(p,p,A.f,p,p,A.ado,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dUh(w),p,p,p,p,p,p,!1,A.a3),A.eg,B.p(p,p,A.f,p,p,A.adu,p,12,p,p,p,p,p,12),A.eg,B.p(p,p,A.f,p,p,D.b5b,p,12,p,p,p,p,p,12),A.as,B.E(B.d(G.kp[o].a,p,1,A.a1,p,p,p,A.a9Y,p,p,p),1)],l),A.m,p,A.e,A.i,0,p,p),A.f,A.cr,p,p,p,24,p,p,A.fC,p,p,p)
r=w.e
r.toString
v.push(B.bS(0,new B.D(D.bCV,B.p(p,B.bx(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.af2(r,w.gSi(),p),A.fF),1)],l),A.m,p,A.e,A.i,0,A.p),A.ap),A.f,p,p,new B.o(A.w,p,t,u,D.dr_,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.J(A.aX,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jz,w.aw1(G.kp[q],34,!1),p))
v.push(B.ap(8,B.as(B.p(p,B.B(s,A.m,p,A.e,A.P,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lG,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.p(p,B.x(B.a([m,B.E(new B.an(A.a_,p,A.b3,A.t,v,p),1)],l),A.m,p,A.e,A.i,0,A.p),A.f,X.YP,p,p,p,p,p,p,p,p,p,p),A.ap)},
$S:299}
C.dUh.prototype={
$0(){var w=this.a
return w.m(new C.dUg(w))},
$S:0}
C.dUg.prototype={
$0(){return this.a.e=null},
$S:0}
C.fp5.prototype={
$0(){return D.ed6},
$S:z+47}
C.fp6.prototype={
$0(){return D.dLp},
$S:z+48}
C.fp7.prototype={
$0(){return D.dHZ},
$S:z+49}
C.fp8.prototype={
$0(){return D.dKO},
$S:z+50}
C.fp9.prototype={
$0(){return D.dPK},
$S:z+51}
C.fpa.prototype={
$0(){return D.e8T},
$S:z+52}
C.fpb.prototype={
$0(){return D.eb2},
$S:z+53}
C.fpc.prototype={
$0(){return D.dP3},
$S:z+36}
C.ckK.prototype={
$0(){return B.a5(this.a,!1).ik()},
$S:0}
C.ckL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.hDC(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.ds,16)],t)
n=A.c.j(0.85)
j.push(B.aA(m,B.p(m,new B.an(A.a_,m,A.ab,A.t,B.a([new B.cN(m,-6,-6,m,m,m,new B.y(r.c,m,Ai.Kb,m,m,m,m,m,m,m,m,m),m),new B.bM(A.lu,m,m,B.x(B.a([new B.y(r.a,m,D.fuI,m,m,m,m,m,m,m,m,m),A.cS,new B.y(r.b,m,new B.F(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.E,m,A.e,A.P,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bh(q,q,q,q),p,new B.a9(A.ay,A.aE,A.x,o,m,m),A.n),m,v,m,m,A.bD,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ckJ(d,r),m,m,m,m,m,m,!1,A.a3))}return B.bY(A.bG,j,A.br,m,14,14)},
$S:169}
C.ckJ.prototype={
$0(){return B.a5(this.a,!1).cc(B.eh(new C.ckI(this.b),!1,null,x.H))},
$S:0}
C.ckI.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eQH.prototype={
$0(){var w=this.a
return w.w=w.d[w.b5V(w.f)]},
$S:0}
C.eQD.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cK.ag()*7},
$S:0}
C.eQC.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cb)
w.w=""},
$S:0}
C.eQF.prototype={
$0(){var w=this.a
return w.m(new C.eQE(w,this.b))},
$S:0}
C.eQE.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cz(w,this.b)},
$S:0}
C.eQG.prototype={
$1(d){return this.a.b0e(0)},
$S:2}
C.e0g.prototype={
$0(){return C.Je("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e0h.prototype={
$0(){},
$S:0}
C.e0b.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e0d.prototype={
$0(){return this.a.b0g(this.b)},
$S:0}
C.e0e.prototype={
$0(){var w=this.a
return w.m(new C.e0c(w))},
$S:0}
C.e0c.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e0f.prototype={
$0(){var w=this.a
return w.b0g(w.d)},
$S:0}
C.dM_.prototype={
$2(d,e){return d+e},
$S:80}
C.dM0.prototype={
$0(){},
$S:0}
C.dLV.prototype={
$2(d,e){return d+e},
$S:80}
C.dLY.prototype={
$0(){var w=this.a
return w.m(new C.dLX(w,this.b))},
$S:0}
C.dLX.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dLZ.prototype={
$0(){var w=this.a
return w.m(new C.dLW(w))},
$S:0}
C.dLW.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dXM.prototype={
$0(){return E.uu(this.b,this.a.d,"drawing")},
$S:0}
C.dXN.prototype={
$1(d){var w=this.a
return w.m(new C.dXL(w,d))},
$S:47}
C.dXL.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJf(u,v,t))},
$S:0}
C.dXO.prototype={
$1(d){var w=this.a
return w.m(new C.dXK(w,d))},
$S:18}
C.dXK.prototype={
$0(){return A.d.gak(this.a.e).c.push(this.b.b)},
$S:0}
C.dXP.prototype={
$1(d){var w=this.a
return w.m(new C.dXJ(w,d))},
$S:22}
C.dXJ.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJf(u,v,t))},
$S:0}
C.dXQ.prototype={
$0(){var w=this.a
return w.m(new C.dXI(w,this.b))},
$S:0}
C.dXI.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dXR.prototype={
$1(d){var w=this.a
return w.m(new C.dXH(w,d))},
$S:6}
C.dXH.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dXS.prototype={
$0(){var w=this.a
return w.m(new C.dXG(w))},
$S:0}
C.dXG.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dXT.prototype={
$0(){var w=this.a
return w.m(new C.dXF(w))},
$S:0}
C.dXF.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dXU.prototype={
$0(){var w=this.a
return w.m(A.d.grZ(w.e))},
$S:0}
C.dXV.prototype={
$0(){var w=this.a
return w.m(new C.dXE(w))},
$S:0}
C.dXE.prototype={
$0(){var w=this.a
w.x=D.ayX[A.o.F(A.d.cp(D.ayX,w.x)+1,4)]},
$S:0}
C.eny.prototype={
$0(){return this.a.f.M(0,this.b)},
$S:0}
C.enz.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.Je("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.enx(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.Je("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.enx.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.aa(0)},
$S:0}
C.enA.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.enw(w))},
$S:12}
C.enw.prototype={
$0(){var w=this.a
w.f.aa(0)
w.x=!1},
$S:0}
C.enE.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return B.aA(w,B.lx(new C.enC(v,e),w,A.b5,A.p9,w,w,new B.bq(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.enD(v,e),w,w,w,w,w,w,!1,A.a3)},
$S:84}
C.enD.prototype={
$0(){return this.a.caX(this.b)},
$S:0}
C.enC.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.ds(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fI(3.141592653589793*e)
m=B.m(16)
w=o?p:D.c5y
if(o)v=q.a.r.t(0,q.b)?A.be.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.J(u.r.t(0,t)?A.be:A.aX,A.r,1)
if(o){r=B.ds()
r.fI(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fy(A.A,B.d(u[t],p,p,p,p,p,p,H.aa8,p,p,p),p,r,!0)
u=r}else u=D.fNu
return B.fy(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:112}
C.enF.prototype={
$0(){var w=this.a
return w.m(new C.enB(w,this.b))},
$S:0}
C.enB.prototype={
$0(){var w=this.a
w.d=this.b.a
w.atl()},
$S:0}
C.enG.prototype={
$0(){var w=this.a
return w.m(w.gbLI())},
$S:0}
C.eyk.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eyl.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eyi.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eyj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eyh(w))},
$S:12}
C.eyh.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eym.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eyn.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eyo.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b0f()},
$S:12}
C.eyp.prototype={
$0(){return this.a.cb2(this.b)},
$S:0}
C.eMb.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:74}
C.eMk.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a1,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kL,B.B(B.a([v,A.ad,new B.dr(1,A.cn,B.eO(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e3),w)],x.p),A.m,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1897}
C.eMg.prototype={
$1(d){return this.a.m(new C.eMf())},
$S:2}
C.eMf.prototype={
$0(){},
$S:0}
C.eMh.prototype={
$0(){var w=this.a
return w.m(new C.eMe(w,this.b))},
$S:0}
C.eMe.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eMi.prototype={
$1(d){var w=this.a
return w.m(new C.eMd(w,d))},
$S:6}
C.eMd.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eMj.prototype={
$0(){var w=this.a
return w.m(new C.eMc(w))},
$S:0}
C.eMc.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.emd.prototype={
$0(){},
$S:0}
C.eme.prototype={
$0(){},
$S:0}
C.em6.prototype={
$0(){var w=this.a
return w.m(new C.em5(w))},
$S:0}
C.em5.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.bZ(u,1,!1,x.S)
w.r=0.9
E.WI("hat",0,0.6)},
$S:0}
C.em7.prototype={
$0(){var w=this.a
return w.m(new C.em4(w))},
$S:0}
C.em4.prototype={
$0(){this.a.y=1.1
E.ml("bell",36,200,0.4)},
$S:0}
C.em8.prototype={
$0(){var w=this.a
return w.m(new C.em3(w))},
$S:0}
C.em3.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.ap(Math.max(v,u)-t+1)
w.as=u
E.ml("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.em9.prototype={
$0(){var w=this.a
return w.m(new C.em2(w,this.b))},
$S:0}
C.em2.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.ema.prototype={
$1(d){var w=this.a
return w.m(new C.em1(w,d))},
$S:6}
C.em1.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e_(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.emb.prototype={
$1(d){var w=this.a
return w.m(new C.em0(w,d))},
$S:6}
C.em0.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.emc.prototype={
$1(d){var w=this.a
return w.m(new C.em_(w,d))},
$S:6}
C.em_.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.ckG.prototype={
$0(){var w=this
return E.ml(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aNk.prototype
w.by4=w.q
w=C.aMp.prototype
w.bx7=w.q
w=C.aMq.prototype
w.bx8=w.q
w=C.aMu.prototype
w.bxc=w.q
w=C.aO9.prototype
w.bz0=w.q
w=C.aNi.prototype
w.by2=w.q
w=C.ayD.prototype
w.bu7=w.q
w=C.ayE.prototype
w.bu8=w.q
w=C.aKR.prototype
w.bvv=w.q
w=C.aMD.prototype
w.bxl=w.q
w=C.aMr.prototype
w.bx9=w.q
w=C.aMK.prototype
w.bxt=w.q
w=C.aNc.prototype
w.bxX=w.q
w=C.aND.prototype
w.byn=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aFm.prototype,"gaxu","c6M",1)
var r
v(r=C.aDQ.prototype,"gcfi","cfj",22)
w(r,"gc7l","aZT",1)
w(C.aDS.prototype,"gc93","c94",1)
u(C.aE8.prototype,"gc9a","c9b",39)
w(r=C.aIo.prototype,"gcyL","cyM",1)
w(r,"gc9c","aeC",1)
w(r,"gcjK","cjL",1)
w(r,"gc99","aeB",3)
w(r=C.aFl.prototype,"gbIR","aa0",3)
w(r,"gcj0","b2m",1)
w(r,"gcmN","ah9",3)
t(r,"gc9e","aeD",3)
t(r=C.a4U.prototype,"grZ","aa",1)
v(r,"gcWh","ao7",0)
v(r,"gcSG","M4",0)
w(r,"gcYv","bjD",1)
s(C.ajb.prototype,"gc9B",0,5,null,["$5"],["qE"],41,0,0)
w(r=C.aEk.prototype,"gc9C","c9D",1)
w(r,"gcpB","ahv",3)
w(r,"gcfy","afQ",3)
w(r,"gcwM","aiC",3)
w(r=C.aFO.prototype,"gcaY","caZ",1)
t(r,"gcaW","b0e",1)
w(C.aF7.prototype,"gbLI","atl",1)
t(C.aFs.prototype,"gcb_","cb0",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.akr,C.Gs,C.va,C.aTj,C.a3z,C.bbt,C.c5f,C.yo,C.CD,C.nz,C.bcc,C.AM,C.buk,C.qj,C.r2,C.CH,C.ZL,C.af9,C.a10,C.CR,C.ac4,C.ack,C.aef,C.Gd,C.ei,C.tL,C.aaL,C.abR,C.a4U,C.mR,C.bcd,C.fS,C.mn,C.bvE,C.aJf])
u(B.hy,[C.fFw,C.fuY,C.fC9,C.fCa,C.fFt,C.fFu,C.efn,C.efG,C.euY,C.euv,C.euw,C.eux,C.euy,C.euz,C.euA,C.euB,C.euC,C.eut,C.euu,C.eus,C.euT,C.euU,C.euV,C.dLw,C.dLy,C.dLB,C.dLM,C.c5g,C.c5h,C.foo,C.fop,C.foq,C.foy,C.foz,C.foA,C.dNy,C.dNf,C.dNz,C.dNa,C.dN5,C.dN7,C.dNd,C.dNq,C.dNo,C.dNp,C.dNn,C.dNk,C.dNm,C.f4j,C.f40,C.f47,C.f4g,C.f3V,C.dnM,C.dnN,C.dnJ,C.dnK,C.dnL,C.dnO,C.dnP,C.dnQ,C.dnR,C.dnS,C.dnT,C.dnU,C.dnV,C.dnW,C.etU,C.etV,C.etW,C.etX,C.etS,C.etT,C.euo,C.eu0,C.eu2,C.etN,C.euk,C.eui,C.euj,C.euh,C.eug,C.etP,C.bOB,C.bOM,C.bOH,C.bON,C.bOP,C.bOC,C.bOA,C.bOU,C.bOI,C.bOL,C.bOK,C.bOJ,C.bJc,C.fRj,C.fRm,C.fRk,C.bIU,C.bIP,C.bIO,C.bJb,C.bJ3,C.bJ4,C.bJ2,C.bJ5,C.bIE,C.bIG,C.bIC,C.bID,C.bIu,C.bIv,C.foB,C.foC,C.foD,C.fon,C.foE,C.fom,C.foF,C.fos,C.fol,C.fot,C.fok,C.fou,C.foj,C.fov,C.foh,C.foi,C.fow,C.fof,C.fog,C.fox,C.foe,C.dYq,C.dYr,C.dYg,C.dYc,C.dYp,C.dYu,C.cI2,C.fW9,C.fWa,C.ckI,C.eQG,C.dXN,C.dXO,C.dXP,C.dXR,C.enC,C.eMb,C.eMk,C.eMg,C.eMi,C.ema,C.emb,C.emc])
u(B.jv,[C.fFv,C.efs,C.efq,C.euE,C.euR,C.dN6,C.dNt,C.dTw,C.f4m,C.f4n,C.f4_,C.f4c,C.f4d,C.f48,C.f4e,C.f3U,C.etQ,C.etR,C.eun,C.euf,C.eu4,C.bOO,C.bOQ,C.bOS,C.bOD,C.bOF,C.bJd,C.cqZ,C.fRl,C.bIN,C.bJ9,C.bJ8,C.dYo,C.cI3,C.dUq,C.dUo,C.dUi,C.ckL,C.dM_,C.dLV,C.enE])
u(B.af,[C.VW,C.Wi,C.UP,C.UU,C.NJ,C.aIn,C.Wh,C.aj9,C.Vv,C.ayj,C.Ve,C.WP,C.VD,C.UQ,C.Vu,C.Wc,C.Wm,C.WG,C.Wb])
u(B.ah,[C.blA,C.aNk,C.aMp,C.aMu,C.aE8,C.aO9,C.aNi,C.ayD,C.byT,C.aKR,C.aMD,C.aND,C.aMK,C.aMr,C.bl2,C.aF7,C.aFs,C.bmh,C.aNc])
u(B.iG,[C.efl,C.efm,C.efy,C.efz,C.efu,C.eft,C.efv,C.efr,C.efw,C.efp,C.efx,C.efo,C.efC,C.efB,C.efD,C.efA,C.efE,C.efF,C.efH,C.euX,C.euZ,C.ev_,C.euG,C.euF,C.euD,C.euM,C.euN,C.euJ,C.euO,C.euI,C.euP,C.euQ,C.euH,C.euS,C.euL,C.euW,C.euK,C.dLT,C.dLS,C.dLv,C.dLU,C.dLx,C.dLz,C.dLA,C.dLC,C.dLs,C.dLt,C.dLu,C.dLJ,C.dLK,C.dLL,C.dLI,C.dLN,C.dLH,C.dLO,C.dLG,C.dLP,C.dLF,C.dLQ,C.dLE,C.dLR,C.dLD,C.dNc,C.dNb,C.dNg,C.dN8,C.dN9,C.dNh,C.dNi,C.dNj,C.dNe,C.dN4,C.dNs,C.dNr,C.dNu,C.dNv,C.dNw,C.dNl,C.dNx,C.cSz,C.dTu,C.dTt,C.dTv,C.foQ,C.foR,C.foS,C.foT,C.foU,C.foV,C.foW,C.foX,C.foY,C.f4l,C.f4k,C.f42,C.f41,C.f3Y,C.f3X,C.f3Z,C.f3W,C.f4a,C.f49,C.f4b,C.f43,C.f4f,C.f46,C.f4h,C.f45,C.f4i,C.f44,C.etZ,C.etO,C.etY,C.etK,C.eu_,C.eu1,C.etL,C.etM,C.eum,C.eul,C.euc,C.eud,C.eue,C.eu8,C.eu9,C.eu7,C.eua,C.eu6,C.eub,C.eu5,C.eu3,C.dnI,C.bOR,C.bOT,C.bOE,C.bOG,C.bIR,C.bIS,C.bIQ,C.bIT,C.bIV,C.bIH,C.bII,C.bIJ,C.bIK,C.bIL,C.bIM,C.bJa,C.bIk,C.bJ0,C.bJ1,C.bIZ,C.bJ_,C.bIX,C.bIY,C.bJ6,C.bIW,C.bJ7,C.bIl,C.bIF,C.bIr,C.bIs,C.bIq,C.bIt,C.bIp,C.bIw,C.bIx,C.bIy,C.bIz,C.bIo,C.bIA,C.bIn,C.bIB,C.bIm,C.dYh,C.dYs,C.dYt,C.dYf,C.dYe,C.dYd,C.dYm,C.dYk,C.dYl,C.dYn,C.dYi,C.dYj,C.dYv,C.dYw,C.dYx,C.dYy,C.dYz,C.dUr,C.dUp,C.dUn,C.dUm,C.dUl,C.dUk,C.dUj,C.dUf,C.dUe,C.dUh,C.dUg,C.fp5,C.fp6,C.fp7,C.fp8,C.fp9,C.fpa,C.fpb,C.fpc,C.ckK,C.ckJ,C.eQH,C.eQD,C.eQC,C.eQF,C.eQE,C.e0g,C.e0h,C.e0b,C.e0d,C.e0e,C.e0c,C.e0f,C.dM0,C.dLY,C.dLX,C.dLZ,C.dLW,C.dXM,C.dXL,C.dXK,C.dXJ,C.dXQ,C.dXI,C.dXH,C.dXS,C.dXG,C.dXT,C.dXF,C.dXU,C.dXV,C.dXE,C.eny,C.enz,C.enx,C.enA,C.enw,C.enD,C.enF,C.enB,C.enG,C.eyk,C.eyl,C.eyi,C.eyj,C.eyh,C.eym,C.eyn,C.eyo,C.eyp,C.eMf,C.eMh,C.eMe,C.eMd,C.eMj,C.eMc,C.emd,C.eme,C.em6,C.em5,C.em7,C.em4,C.em8,C.em3,C.em9,C.em2,C.em1,C.em0,C.em_,C.ckG])
t(C.bz5,C.aNk)
t(C.aFm,C.bz5)
u(B.mf,[C.bix,C.bcv,C.btJ,C.bbb,C.bsm,C.brM,C.bbR,C.brO,C.bvO,C.biv,C.ajb,C.bao,C.bwS,C.af2,C.bx3,C.brN,C.bn3])
t(C.aMq,C.aMp)
t(C.aDQ,C.aMq)
t(C.byQ,C.aMu)
t(C.aDS,C.byQ)
u(B.lA,[C.KK,C.a0O,C.JI])
u(B.aw,[C.bsK,C.afl,C.aec,C.Qx,C.bte,C.a8K,C.beD])
t(C.aIo,C.aO9)
t(C.biu,B.p0)
t(C.aFl,C.aNi)
t(C.ayE,C.ayD)
t(C.aja,C.ayE)
t(C.aEk,C.byT)
t(C.bap,C.aKR)
t(C.bl0,C.aMD)
t(C.bzc,C.aND)
t(C.aFO,C.bzc)
t(C.byV,C.aMK)
t(C.blb,C.byV)
t(C.byP,C.aMr)
t(C.bkN,C.byP)
t(C.bz3,C.aNc)
t(C.blM,C.bz3)
w(C.aNk,B.cg)
w(C.bz5,E.ny)
w(C.aMp,B.cg)
w(C.aMq,E.ny)
w(C.aMu,B.cg)
w(C.byQ,E.ny)
w(C.aO9,B.eQ)
w(C.aNi,B.cg)
w(C.ayD,B.cg)
w(C.ayE,E.ny)
w(C.aKR,B.cg)
v(C.byT,B.eE)
w(C.aMD,B.cg)
w(C.aMr,B.cg)
w(C.byP,E.ny)
w(C.aMK,B.cg)
w(C.byV,E.ny)
w(C.aNc,B.cg)
w(C.bz3,E.ny)
w(C.aND,B.cg)
w(C.bzc,E.ny)})()
B.j0(b.typeUniverse,JSON.parse('{"VW":{"af":[],"v":[]},"blA":{"ah":["VW"]},"Wi":{"af":[],"v":[]},"aFm":{"ah":["Wi"]},"bix":{"aC":[]},"UP":{"af":[],"v":[]},"aDQ":{"ah":["UP"]},"UU":{"af":[],"v":[]},"aDS":{"ah":["UU"]},"bcv":{"aC":[]},"afl":{"aw":[],"v":[]},"aec":{"aw":[],"v":[]},"aIn":{"af":[],"v":[]},"NJ":{"af":[],"v":[]},"aE8":{"ah":["NJ"]},"bsK":{"aw":[],"v":[]},"Qx":{"aw":[],"v":[]},"btJ":{"aC":[]},"bte":{"aw":[],"v":[]},"bbb":{"aC":[]},"aIo":{"ah":["aIn"]},"bsm":{"aC":[]},"brM":{"aC":[]},"bbR":{"aC":[]},"brO":{"aC":[]},"bvO":{"aC":[]},"Wh":{"af":[],"v":[]},"biu":{"aC":[]},"aFl":{"ah":["Wh"]},"biv":{"aC":[]},"ajb":{"aC":[]},"aj9":{"af":[],"v":[]},"aja":{"ah":["aj9"]},"Vv":{"af":[],"v":[]},"ayj":{"af":[],"v":[]},"aEk":{"ah":["Vv"],"eE":[]},"bap":{"ah":["ayj"]},"bao":{"aC":[]},"Ve":{"af":[],"v":[]},"bl0":{"ah":["Ve"]},"bwS":{"aC":[]},"af2":{"aC":[]},"a8K":{"aw":[],"v":[]},"WP":{"af":[],"v":[]},"VD":{"af":[],"v":[]},"UQ":{"af":[],"v":[]},"Vu":{"af":[],"v":[]},"Wc":{"af":[],"v":[]},"Wm":{"af":[],"v":[]},"WG":{"af":[],"v":[]},"Wb":{"af":[],"v":[]},"aFO":{"ah":["WP"]},"bx3":{"aC":[]},"blb":{"ah":["VD"]},"brN":{"aC":[]},"bkN":{"ah":["UQ"]},"bl2":{"ah":["Vu"]},"bn3":{"aC":[]},"aF7":{"ah":["Wc"]},"aFs":{"ah":["Wm"]},"bmh":{"ah":["WG"]},"blM":{"ah":["Wb"]},"beD":{"aw":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.at
return{c:w("lH<u?>"),G:w("u"),J:w("bw<n,K>"),Q:w("dD<n>"),Z:w("a0"),M:w("O<da>"),R:w("O<Sl>"),a:w("O<a3z>"),V:w("O<ac>"),O:w("O<u>"),k:w("O<V>"),D:w("O<aB<aD>>"),w:w("O<a0>"),E:w("O<ai<n>>"),b:w("O<ai<K>>"),U:w("O<ai<G?>>"),x:w("O<a8<n,aD>>"),g:w("O<t>"),C:w("O<tL>"),v:w("O<fV>"),F:w("O<+(n,n)>"),fT:w("O<+(K,v)>"),I:w("O<+(G,n)>"),u:w("O<+(G,G)>"),r:w("O<+(n,n,a0)>"),e:w("O<+(n,K,K,G)>"),o:w("O<+(n,G,n,G)>"),d:w("O<+(n,n,K,K,a8<n,K>)>"),_:w("O<va>"),fQ:w("O<aaL>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<u2>"),p:w("O<v>"),bL:w("O<abR>"),fH:w("O<le>"),a_:w("O<ac4>"),cB:w("O<nz>"),ba:w("O<ack>"),eW:w("O<CH>"),fY:w("O<ZL>"),ac:w("O<aef>"),cd:w("O<CR>"),fr:w("O<af9>"),e4:w("O<a10>"),au:w("O<aJf>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<G>"),dS:w("O<aC?>"),fs:w("O<tL?>"),bN:w("O<G?>"),q:w("cw<aja>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aD>"),j:w("ai<@>"),P:w("a8<n,@>"),f:w("a8<@,@>"),bd:w("N<ei,n>"),fR:w("N<+(K,v),v>"),l:w("iB"),gA:w("zx"),gD:w("w7"),h:w("cv"),K:w("aD"),W:w("tL"),B:w("ei"),N:w("n"),bO:w("au"),Y:w("bq<K>"),gj:w("bR<n>"),bz:w("bR<G?>"),dg:w("ef<r2>"),m:w("bbt"),a2:w("CD"),f3:w("r2"),es:w("Gd"),gV:w("mt"),y:w("R"),i:w("K"),z:w("@"),S:w("G"),L:w("ai<@>?"),cK:w("aD?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b07=new B.da(0,0.1)
D.b1P=new C.aTj(0,0,0)
D.Ln=new C.aTj(0,0.5,0)
D.b2p=new B.ay(A.be,1,A.r,-1)
D.b3S=new B.aZ(0,1/0,0,290)
D.b3Z=new B.aZ(16,1/0,16,1/0)
D.b5b=new B.o(A.bf,null,null,null,null,null,A.a6)
D.fiP=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW_=new B.y("\u26a1",null,D.fiP,null,null,null,null,null,null,null,null,null)
D.b9L=new B.cf(A.A,null,null,D.fW_,null)
D.aU9=new B.F(!0,A.bU,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLu=new B.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aU9,null,A.K,null,null,null,null,null,null,null)
D.emm=new B.D(A.nw,D.fLu,null)
D.b9V=new B.cf(A.A,null,null,D.emm,null)
D.fBm=new B.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aU9,null,A.K,null,null,null,null,null,null,null)
D.ene=new B.D(A.Gw,D.fBm,null)
D.baF=new B.cf(A.A,null,null,D.ene,null)
D.aeq=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bem=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.beD=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bfU=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bg_=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bgm=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.afY=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
D.bie=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bjf=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bjX=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.agC=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bkX=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ah_=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Yt=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bmH=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bmY=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ahv=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.boF=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.boN=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bpf=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.vV=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.brg=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.aiX=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bwT=new B.bb(11e6)
D.byG=new B.P(10,34,10,26)
D.byO=new B.P(10,6,10,2)
D.byQ=new B.P(10,8,0,10)
D.bzt=new B.P(12,8,8,8)
D.bzz=new B.P(14,0,14,22)
D.bzB=new B.P(14,0,14,30)
D.bAD=new B.P(16,4,16,28)
D.bCV=new B.P(26,12,26,58)
D.bDL=new B.P(4,4,8,2)
D.bEo=new B.P(8,14,8,12)
D.bEv=new B.P(8,40,8,30)
D.bEA=new B.P(8,6,16,0)
D.bEB=new B.P(8,6,8,8)
D.bEX=new B.P(0,0,1.5,0)
D.b1B=new B.Hr(26,"saturation")
D.bFe=new B.xs(A.cY,D.b1B,null,A.Xt)
D.fAs=new B.y("REACTION LAB",null,T.aUK,null,null,null,null,A.a1,null,1,null,null)
D.bFk=new B.by(1,A.ba,D.fAs,null)
D.fr0=new B.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDH=new B.y("CORE PROTOCOL",null,D.fr0,null,null,null,null,null,null,null,null,null)
D.bFy=new B.by(1,A.ba,D.fDH,null)
D.fEu=new B.y("\ud83d\udce2 NGMY Ads",null,A.qY,null,null,null,null,A.eM,null,1,null,null)
D.bGi=new B.by(1,A.ba,D.fEu,null)
D.fz8=new B.y("Wire selected",null,A.fS,null,null,null,null,null,null,null,null,null)
D.bGw=new B.by(1,A.ba,D.fz8,null)
D.anL=new B.a0(62712,"MaterialIcons",!1)
D.bMh=new B.a0(62908,"MaterialIcons",!1)
D.bNZ=new B.a0(983122,"MaterialIcons",!1)
D.bOa=new B.a0(983247,"MaterialIcons",!1)
D.bOG=new B.a0(983616,"MaterialIcons",!1)
D.bQx=new B.ae(A.P_,null,A.ac,null,null,null)
D.bNY=new B.a0(983117,"MaterialIcons",!1)
D.bSq=new B.ae(D.bNY,28,A.c,null,null,null)
D.bSG=new B.ae(A.iY,18,null,null,null,null)
D.bUy=new B.ae(A.eb,21,A.c0,null,null,null)
D.bUN=new B.ae(A.op,null,A.ac,null,null,null)
D.bUX=new B.ae(A.a2s,21,A.ac,null,null,null)
D.bVO=new B.ae(A.eK,17,A.ac,null,null,null)
D.bXn=new B.ae(A.Ov,null,A.ac,null,null,null)
D.bYw=new B.ae(A.iY,21,A.ac,null,null,null)
D.c_3=new B.ae(A.e5,null,A.aT,null,null,null)
D.doU=w([A.d7,A.d3,A.d7],x.O)
D.c2s=new B.a9(A.a5,A.a8,A.x,D.doU,null,null)
D.d0M=w([A.bO,A.bn],x.O)
D.c2A=new B.a9(A.b0,A.b6,A.x,D.d0M,null,null)
D.c2N=new B.a9(A.b0,A.b6,A.x,A.a53,null,null)
D.arv=new B.a9(A.b0,A.b6,A.x,O.a4i,null,null)
D.cZp=w([A.oZ,A.iw],x.O)
D.c3z=new B.a9(A.b0,A.b6,A.x,D.cZp,null,null)
D.d0u=w([A.e9,A.av],x.O)
D.arC=new B.a9(A.b0,A.b6,A.x,D.d0u,null,null)
D.diC=w([A.dn,A.jd,A.bn],x.O)
D.c3S=new B.a9(A.a5,A.a8,A.x,D.diC,null,null)
D.diI=w([A.hk,A.cr],x.O)
D.c4c=new B.a9(A.b0,A.b6,A.x,D.diI,null,null)
D.cxD=w([A.bO,A.dn],x.O)
D.c4l=new B.a9(A.a5,A.a8,A.x,D.cxD,null,null)
D.aBx=w([A.e9,M.ni],x.O)
D.c4s=new B.a9(A.b0,A.b6,A.x,D.aBx,null,null)
D.c4J=new B.a9(A.b0,A.b6,A.x,R.arY,null,null)
D.c5y=new B.a9(A.ay,A.aE,A.x,A.R4,null,null)
D.daf=w([A.av,A.w],x.O)
D.c5J=new B.a9(A.b0,A.b6,A.x,D.daf,null,null)
D.c5M=new B.a9(A.b0,A.b6,A.x,H.aAS,null,null)
D.bpa=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bq0=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cKv=w([A.MK,D.bpa,D.bq0],x.O)
D.c5W=new B.a9(A.b0,A.b6,A.x,D.cKv,null,null)
D.cxX=w([A.d0,A.fV],x.O)
D.c6b=new B.a9(A.b0,A.b6,A.x,D.cxX,null,null)
D.c6U=w([0,4,7],x.t)
D.c6V=w([0,4,7,12],x.t)
D.c6W=w([0,4,7,4],x.t)
D.aAy=w([A.hf,A.q7],x.O)
D.aA2=w([A.hh,A.cQ],x.O)
D.ayl=w([A.bq,A.dH],x.O)
D.cT7=w([A.aT,A.d0],x.O)
D.djY=w([A.c_,A.l2],x.O)
D.axM=w([A.cL,A.kh],x.O)
D.cYe=w([A.bM,A.aK],x.O)
D.c7h=w([D.aAy,D.aA2,A.a4n,D.ayl,D.cT7,A.ayC,A.azx,D.djY,D.axM,D.cYe],B.at("O<ai<u>>"))
D.cbY=w([120,220,380],x.t)
D.cfI=w([12,16,19,24],x.t)
D.cfS=w([1400,800,450,2400],x.t)
D.cog=w([250,450,900,1500],x.t)
D.bdI=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bpA=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bno=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bt4=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bmw=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.ax2=w([D.bdI,D.bpA,D.bno,D.bt4,D.bmw],x.O)
D.cFq=w([50,25,75],x.t)
D.cL1=w([0,5,10,15,18,20,25],x.t)
D.cTq=w([900,500,250,1600],x.t)
D.cXx=w([A.bq,A.bE,A.b8,A.bq],x.O)
D.a4d=w([A.ax,A.bt,A.bf,A.aJ,A.o7],x.O)
D.cZ3=w([A.av,A.ax,A.cL,A.bt,A.bf,A.cw,A.cf,A.bE,A.XH],x.O)
D.a4g=w([0.04,0.17,0.3],x.n)
D.f2M=new C.va("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f2S=new C.va("Medium engine","A good all-rounder.",0.3,0.9)
D.f2R=new C.va("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.I2=w([D.f2M,D.f2S,D.f2R],x._)
D.ezX=new B.z(6,"Easy")
D.eAI=new B.z(8,"Medium")
D.evH=new B.z(10,"Hard")
D.d_z=w([D.ezX,D.eAI,D.evH],x.I)
D.ayM=w([0.55,0.78,1],x.n)
D.ayX=w([A.c,A.fU,A.nZ,A.av],x.O)
D.az4=w([A.bf,A.ax,A.bt,A.d3],x.O)
D.f2J=new C.va("Radar","Shows your height above the ground.",0.1,0)
D.f2K=new C.va("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f2H=new C.va("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.azc=w([D.f2J,D.f2K,D.f2H],x._)
D.d5G=w([47,100,220,470,1000],x.n)
D.J9={volts:0}
D.a62=new B.bw(D.J9,[3],x.J)
D.JA=new B.e5(["b","battery",0.2,0.3,D.a62])
D.egi={on:0}
D.dzG=new B.bw(D.egi,[1],x.J)
D.E0=new B.e5(["s","switch",0.5,0.3,D.dzG])
D.f0q=new B.e5(["l","bulb",0.8,0.3,A.jk])
D.d0V=w([D.JA,D.E0,D.f0q],x.d)
D.E_=new B.cy(["b",0,"s",0])
D.f_r=new B.cy(["s",1,"l",0])
D.aQ0=new B.cy(["l",1,"b",1])
D.diO=w([D.E_,D.f_r,D.aQ0],x.o)
D.d0l=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.euS=new C.mR("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d0V,D.diO,D.d0l)
D.aJS={ohms:0}
D.aHp=new B.bw(D.aJS,[220],x.J)
D.f_U=new B.e5(["r","resistor",0.5,0.3,D.aHp])
D.f0F=new B.e5(["d","led",0.8,0.3,A.jk])
D.dm4=w([D.JA,D.f_U,D.f0F],x.d)
D.eZN=new B.cy(["b",0,"r",0])
D.f_l=new B.cy(["r",1,"d",0])
D.eZT=new B.cy(["d",1,"b",1])
D.dvm=w([D.eZN,D.f_l,D.eZT],x.o)
D.dmy=w(["led","diode","indicator"],x.s)
D.euZ=new C.mR("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dm4,D.dvm,D.dmy)
D.a7j={level:0}
D.dz1=new B.bw(D.a7j,[0.2],x.J)
D.f0_=new B.e5(["p","pot",0.5,0.3,D.dz1])
D.f01=new B.e5(["m","motor",0.8,0.3,A.jk])
D.d1e=w([D.JA,D.f0_,D.f01],x.d)
D.eZM=new B.cy(["b",0,"p",0])
D.f_h=new B.cy(["p",1,"m",0])
D.f_d=new B.cy(["m",1,"b",1])
D.dqW=w([D.eZM,D.f_h,D.f_d],x.o)
D.div=w(["fan","motor","spin","dimmer"],x.s)
D.euQ=new C.mR("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d1e,D.dqW,D.div)
D.a6_=new B.bw(D.a7j,[0.9],x.J)
D.aQ7=new B.e5(["s","solar",0.25,0.3,D.a6_])
D.aQ6=new B.e5(["l","bulb",0.75,0.3,A.jk])
D.d42=w([D.aQ7,D.aQ6],x.d)
D.f_o=new B.cy(["s",0,"l",0])
D.f_c=new B.cy(["l",1,"s",1])
D.d22=w([D.f_o,D.f_c],x.o)
D.drD=w(["solar","sun","without battery","no battery","free"],x.s)
D.euT=new C.mR("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d42,D.d22,D.drD)
D.f0I=new B.e5(["c","crank",0.25,0.3,D.a6_])
D.dgO=w([D.f0I,D.aQ6],x.d)
D.eZQ=new B.cy(["c",0,"l",0])
D.f_b=new B.cy(["l",1,"c",1])
D.dhn=w([D.eZQ,D.f_b],x.o)
D.dgY=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.euP=new C.mR("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dgO,D.dhn,D.dgY)
D.dz0=new B.bw(D.a7j,[0.7],x.J)
D.f04=new B.e5(["t","turbine",0.25,0.3,D.dz0])
D.f_S=new B.e5(["m","motor",0.75,0.3,A.jk])
D.daW=w([D.f04,D.f_S],x.d)
D.f_z=new B.cy(["t",0,"m",0])
D.f_e=new B.cy(["m",1,"t",1])
D.d9T=w([D.f_z,D.f_e],x.o)
D.dfx=w(["wind","turbine","windmill","water","hydro"],x.s)
D.euM=new C.mR("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.daW,D.d9T,D.dfx)
D.aHm=new B.bw(D.J9,[9],x.J)
D.a8o=new B.e5(["b","battery",0.2,0.3,D.aHm])
D.aQ5=new B.e5(["r","radio",0.8,0.3,A.jk])
D.dsc=w([D.a8o,D.E0,D.aQ5],x.d)
D.f_t=new B.cy(["s",1,"r",0])
D.aQ1=new B.cy(["r",1,"b",1])
D.c6C=w([D.E_,D.f_t,D.aQ1],x.o)
D.dqI=w(["radio","music","listen"],x.s)
D.euY=new C.mR("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dsc,D.c6C,D.dqI)
D.dA6=new B.bw(D.J9,[12],x.J)
D.aQ4=new B.e5(["b","battery",0.2,0.3,D.dA6])
D.f0r=new B.e5(["t","tv",0.8,0.3,A.jk])
D.d0X=w([D.aQ4,D.E0,D.f0r],x.d)
D.f_u=new B.cy(["s",1,"t",0])
D.aQ2=new B.cy(["t",1,"b",1])
D.dk0=w([D.E_,D.f_u,D.aQ2],x.o)
D.dsa=w(["tv","television","screen","watch"],x.s)
D.euJ=new C.mR("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d0X,D.dk0,D.dsa)
D.f0h=new B.e5(["z","buzzer",0.8,0.3,A.jk])
D.cHM=w([D.JA,D.E0,D.f0h],x.d)
D.f_v=new B.cy(["s",1,"z",0])
D.f_N=new B.cy(["z",1,"b",1])
D.cWK=w([D.E_,D.f_v,D.f_N],x.o)
D.dp_=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.euV=new C.mR("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cHM,D.cWK,D.dp_)
D.f00=new B.e5(["h","heater",0.8,0.3,A.jk])
D.dec=w([D.a8o,D.E0,D.f00],x.d)
D.f_q=new B.cy(["s",1,"h",0])
D.f_0=new B.cy(["h",1,"b",1])
D.cXs=w([D.E_,D.f_q,D.f_0],x.o)
D.crz=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.euK=new C.mR("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dec,D.cXs,D.crz)
D.f0t=new B.e5(["s","solar",0.2,0.25,D.a6_])
D.dA9=new B.bw(D.aJS,[100],x.J)
D.f0w=new B.e5(["r","resistor",0.55,0.25,D.dA9])
D.f0D=new B.e5(["c","capacitor",0.85,0.25,A.jk])
D.f_X=new B.e5(["q","resistor",0.55,0.6,D.aHp])
D.f0u=new B.e5(["d","led",0.85,0.6,A.jk])
D.djx=w([D.f0t,D.f0w,D.f0D,D.f_X,D.f0u],x.d)
D.f_p=new B.cy(["s",0,"r",0])
D.f_k=new B.cy(["r",1,"c",0])
D.eZS=new B.cy(["c",1,"s",1])
D.eZR=new B.cy(["c",0,"q",0])
D.f_j=new B.cy(["q",1,"d",0])
D.eZU=new B.cy(["d",1,"c",1])
D.d7M=w([D.f_p,D.f_k,D.eZS,D.eZR,D.f_j,D.eZU],x.o)
D.dg6=w(["capacitor","store","charge","flash"],x.s)
D.euX=new C.mR("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.djx,D.d7M,D.dg6)
D.f07=new B.e5(["b","battery",0.15,0.3,D.a62])
D.f0J=new B.e5(["l1","bulb",0.5,0.3,A.jk])
D.f0e=new B.e5(["l2","bulb",0.85,0.3,A.jk])
D.d__=w([D.f07,D.f0J,D.f0e],x.d)
D.eZL=new B.cy(["b",0,"l1",0])
D.f_8=new B.cy(["l1",1,"l2",0])
D.f_9=new B.cy(["l2",1,"b",1])
D.dbH=w([D.eZL,D.f_8,D.f_9],x.o)
D.drW=w(["series","two bulbs","dim"],x.s)
D.euN=new C.mR("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d__,D.dbH,D.drW)
D.egB={volts:0,charge:1}
D.dAc=new B.bw(D.egB,[1.5,0],x.J)
D.f0B=new B.e5(["b","battery",0.75,0.3,D.dAc])
D.cZq=w([D.aQ7,D.f0B],x.d)
D.f_n=new B.cy(["s",0,"b",0])
D.eZP=new B.cy(["b",1,"s",1])
D.d84=w([D.f_n,D.eZP],x.o)
D.dgg=w(["charge","rechargeable","flat","recharge"],x.s)
D.euL=new C.mR("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cZq,D.d84,D.dgg)
D.dA5=new B.bw(D.J9,[4.5],x.J)
D.f02=new B.e5(["b","battery",0.2,0.3,D.dA5])
D.aQ3=new B.e5(["p","phone",0.8,0.3,A.jk])
D.daL=w([D.f02,D.E0,D.aQ3],x.d)
D.f_s=new B.cy(["s",1,"p",0])
D.a8n=new B.cy(["p",1,"b",1])
D.dnV=w([D.E_,D.f_s,D.a8n],x.o)
D.dpp=w(["phone","charger","usb","mobile"],x.s)
D.euR=new C.mR("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.daL,D.dnV,D.dpp)
D.f_P=new B.e5(["f","fan",0.8,0.3,A.jk])
D.cjG=w([D.JA,D.f_P],x.d)
D.eZK=new B.cy(["b",0,"f",0])
D.eZZ=new B.cy(["f",1,"b",1])
D.cY0=w([D.eZK,D.eZZ],x.o)
D.diu=w(["fan","cool","air","wind"],x.s)
D.ev_=new C.mR("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cjG,D.cY0,D.diu)
D.f0l=new B.e5(["b","battery",0.15,0.2,D.a62])
D.f_Q=new B.e5(["a","ammeter",0.5,0.2,A.jk])
D.f_O=new B.e5(["l","bulb",0.85,0.2,A.jk])
D.f0n=new B.e5(["v","voltmeter",0.5,0.6,A.jk])
D.dgC=w([D.f0l,D.f_Q,D.f_O,D.f0n],x.d)
D.eZI=new B.cy(["b",0,"a",0])
D.eZH=new B.cy(["a",1,"l",0])
D.f_B=new B.cy(["v",0,"l",0])
D.f_C=new B.cy(["v",1,"l",1])
D.d7W=w([D.eZI,D.eZH,D.aQ0,D.f_B,D.f_C],x.o)
D.dvl=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.euW=new C.mR("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dgC,D.d7W,D.dvl)
D.f0M=new B.e5(["b","battery",0.15,0.2,D.aHm])
D.f06=new B.e5(["t","tv",0.55,0.2,A.jk])
D.aHn=new B.bw(D.J9,[5],x.J)
D.f_V=new B.e5(["c","buck",0.4,0.5,D.aHn])
D.f08=new B.e5(["p","phone",0.8,0.5,A.jk])
D.d5t=w([D.f0M,D.f06,D.f_V,D.f08],x.d)
D.eZO=new B.cy(["b",0,"t",0])
D.aPZ=new B.cy(["b",0,"c",0])
D.aQ_=new B.cy(["c",1,"p",0])
D.daI=w([D.eZO,D.aQ2,D.aPZ,D.aQ_,D.a8n],x.o)
D.d3B=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.euO=new C.mR("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d5t,D.daI,D.d3B)
D.f_W=new B.e5(["c","buck",0.5,0.3,D.aHn])
D.cXh=w([D.aQ4,D.f_W,D.aQ3],x.d)
D.d1o=w([D.aPZ,D.aQ_,D.a8n],x.o)
D.cv1=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.euI=new C.mR("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cXh,D.d1o,D.cv1)
D.f0c=new B.e5(["d","diode",0.5,0.3,A.jk])
D.dbV=w([D.a8o,D.f0c,D.aQ5],x.d)
D.eZJ=new B.cy(["b",0,"d",0])
D.eZV=new B.cy(["d",1,"r",0])
D.cKj=w([D.eZJ,D.eZV,D.aQ1],x.o)
D.d3f=w(["diode","protect","backwards","one way"],x.s)
D.euU=new C.mR("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dbV,D.cKj,D.d3f)
D.Rh=w([D.euS,D.euZ,D.euQ,D.euT,D.euP,D.euM,D.euY,D.euJ,D.euV,D.euK,D.euX,D.euN,D.euL,D.euR,D.ev_,D.euW,D.euO,D.euI,D.euU],B.at("O<mR>"))
D.hu4=new C.Gs("Moon",1.62,A.dn,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hu2=new C.Gs("Mars",3.71,A.ax,"Mars has about 38 percent of Earth's gravity.")
D.hu5=new C.Gs("Mercury",3.7,A.kg,"Mercury is small, so its gravity is like Mars.")
D.hu_=new C.Gs("Venus",8.87,A.aT,"Venus is almost as heavy as Earth, with strong gravity.")
D.hu1=new C.Gs("Earth",9.81,A.aJ,"On Earth gravity is strong, and the air also slows you down.")
D.hu3=new C.Gs("Neptune",11.15,A.d3,"Neptune pulls a little harder than Earth.")
D.hu0=new C.Gs("Jupiter",24.79,A.cL,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rS=w([D.hu4,D.hu2,D.hu5,D.hu_,D.hu1,D.hu3,D.hu0],B.at("O<Gs>"))
D.d7K=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.d8t=w([0.2,0.5,0.8],x.n)
D.aZX=new C.KK(0,"accordion")
D.cYm=w([A.jC,A.Cw,A.Cf],x.w)
D.d4T=w(["Mail","SMS","Ad"],x.s)
D.cYV=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hsh=new C.AM(D.aZX,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aAy,D.cYm,D.d4T,D.cYV)
D.ac5=new C.KK(1,"flip")
D.dg0=w([A.qy,Z.Hu,A.uF],x.w)
D.das=w(["Unlock","Verify","Secure"],x.s)
D.cXd=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hsg=new C.AM(D.ac5,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aA2,D.dg0,D.das,D.cXd)
D.aZY=new C.KK(2,"towers")
D.d9c=w([A.z2,A.qB,A.i6],x.w)
D.d8M=w(["Save","Grow","Earn"],x.s)
D.cLc=w(["","",""],x.s)
D.hsi=new C.AM(D.aZY,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a4n,D.d9c,D.d8M,D.cLc)
D.ac6=new C.KK(3,"assemble")
D.dh0=w([A.ot,A.hm,A.e5],x.w)
D.d4e=w(["Launch","Charge","Shine"],x.s)
D.ddh=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hsk=new C.AM(D.ac6,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.ayl,D.dh0,D.d4e,D.ddh)
D.aZZ=new C.KK(4,"carousel")
D.dgP=w([A.b8,A.eP],x.O)
D.d51=w([A.mP,A.aog,A.P6],x.w)
D.d_p=w(["Explore","Discover","Learn"],x.s)
D.daR=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hsf=new C.AM(D.aZZ,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dgP,D.d51,D.d_p,D.daR)
D.b__=new C.KK(5,"burst")
D.d8H=w([A.hZ,A.tQ],x.O)
D.cYQ=w([A.kn,A.mN,A.hB],x.w)
D.cZb=w(["Cheer","Win","Love"],x.s)
D.d0s=w(["Make some noise","First place","Share the joy"],x.s)
D.hsj=new C.AM(D.b__,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d8H,D.cYQ,D.cZb,D.d0s)
D.azK=w([D.hsh,D.hsg,D.hsi,D.hsk,D.hsf,D.hsj],B.at("O<AM>"))
D.eX3=new B.b7("skin","Skin",A.aoh)
D.eYw=new B.b7("muscle","Muscles",A.OI)
D.eYe=new B.b7("organ","Organs",A.hB)
D.bM_=new B.a0(62747,"MaterialIcons",!1)
D.eYk=new B.b7("bone","Skeleton",D.bM_)
D.eYE=new B.b7("vessel","Blood vessels",A.pm)
D.d9i=w([D.eX3,D.eYw,D.eYe,D.eYk,D.eYE],x.r)
D.f2L=new C.va("Simple legs","Light. Land gently.",0.15,0.2)
D.f2N=new C.va("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f2Q=new C.va("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.D1=w([D.f2L,D.f2N,D.f2Q],x._)
D.eZp=new B.cy(["beat",0.18,0.28,0])
D.f_w=new B.cy(["burst",0.7,0.2,0])
D.f_H=new B.cy(["delay",0.45,0.5,1])
D.f_g=new B.cy(["ripple",0.75,0.6,3])
D.d3Y=w([D.eZp,D.f_w,D.f_H,D.f_g],x.e)
D.dfk=w([P.lp,O.Jz,G.TP],x.u)
D.hrd=new C.Gd("First spark","A clock lights a burst and a ripple",D.d3Y,D.dfk)
D.eZY=new B.cy(["beat",0.15,0.3,1])
D.eZ3=new B.cy(["ripple",0.62,0.15,0])
D.f_D=new B.cy(["delay",0.4,0.45,0])
D.eZE=new B.cy(["ripple",0.7,0.45,0])
D.eZl=new B.cy(["delay",0.4,0.7,1])
D.f_i=new B.cy(["shake",0.75,0.75,0])
D.dt5=w([D.eZY,D.eZ3,D.f_D,D.eZE,D.eZl,D.f_i],x.e)
D.ewN=new B.z(2,4)
D.aPG=new B.z(4,5)
D.d7A=w([P.lp,O.Jz,G.TP,D.ewN,D.aPG],x.u)
D.hrf=new C.Gd("Heartbeat","Two thumps, then a shake",D.dt5,D.d7A)
D.eZu=new B.cy(["dice",0.15,0.7,1])
D.f_J=new B.cy(["echo",0.4,0.7,0])
D.eZC=new B.cy(["comet",0.7,0.5,4])
D.f_x=new B.cy(["burst",0.72,0.2,1])
D.eZW=new B.cy(["burst",0.3,0.25,0])
D.eZv=new B.cy(["pop",0.55,0.85,0])
D.cr6=w([D.eZu,D.f_J,D.eZC,D.f_x,D.eZW,D.eZv],x.e)
D.ew8=new B.z(1,3)
D.ew9=new B.z(1,4)
D.aPC=new B.z(0,5)
D.dgK=w([P.lp,S.vd,D.ew8,D.ew9,D.aPC],x.u)
D.hre=new C.Gd("Fireworks","Dice launch comets that burst in colour",D.cr6,D.dgK)
D.eZz=new B.cy(["beat",0.15,0.2,2])
D.f_5=new B.cy(["chance",0.4,0.2,0])
D.eZr=new B.cy(["ball",0.7,0.12,3])
D.eZe=new B.cy(["chance",0.4,0.5,1])
D.f_I=new B.cy(["ball",0.3,0.08,1])
D.eZ7=new B.cy(["ripple",0.7,0.55,3])
D.ck8=w([D.eZz,D.f_5,D.eZr,D.eZe,D.f_I,D.eZ7],x.e)
D.ewO=new B.z(2,5)
D.cHu=w([P.lp,S.vd,O.a8f,G.TQ,D.ewO],x.u)
D.hrc=new C.Gd("Rain","Balls fall at random and splash",D.ck8,D.cHu)
D.f_6=new B.cy(["beat",0.12,0.45,2])
D.f_y=new B.cy(["toggle",0.38,0.2,0])
D.f_F=new B.cy(["wash",0.7,0.15,4])
D.eZt=new B.cy(["count3",0.38,0.45,0])
D.f_A=new B.cy(["burst",0.72,0.4,0])
D.eZX=new B.cy(["light",0.55,0.7,1])
D.eZf=new B.cy(["pop",0.8,0.8,4])
D.djv=w([D.f_6,D.f_y,D.f_F,D.eZt,D.f_A,D.eZX,D.eZf],x.e)
D.exk=new B.z(3,6)
D.cng=w([P.lp,S.vd,O.a8f,G.TQ,D.aPC,D.exk],x.u)
D.hra=new C.Gd("Disco","A beat drives lights, washes and bursts",D.djv,D.cng)
D.f_M=new B.cy(["button",0.12,0.2,0])
D.eZ9=new B.cy(["delay",0.34,0.2,1])
D.f_L=new B.cy(["light",0.56,0.2,1])
D.f_E=new B.cy(["delay",0.56,0.45,1])
D.f_7=new B.cy(["ball",0.34,0.6,0])
D.eZd=new B.cy(["delay",0.34,0.8,1])
D.eZ2=new B.cy(["burst",0.7,0.8,5])
D.c7k=w([D.f_M,D.eZ9,D.f_L,D.f_E,D.f_7,D.eZd,D.eZ2],x.e)
D.ezw=new B.z(5,6)
D.dp8=w([P.lp,S.vd,G.TP,G.TQ,D.aPG,D.ezw],x.u)
D.hrb=new C.Gd("Domino","Tap the button and watch it run down the line",D.c7k,D.dp8)
D.aA6=w([D.hrd,D.hrf,D.hre,D.hrc,D.hra,D.hrb],B.at("O<Gd>"))
D.deB=w([0.05,0.15,0.25],x.n)
D.dfw=w([1.5,3,4.5,9,12],x.n)
D.eVu=new B.b7("dice","Dice",A.ol)
D.eWD=new B.b7("coin","Coin",Q.yZ)
D.eYz=new B.b7("num","Number",A.z5)
D.dfK=w([D.eVu,D.eWD,D.eYz],x.r)
D.dfO=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aAc=w([A.c0,A.aT,A.be,A.aJ,A.bq,A.c_,A.cL,A.hh],x.O)
D.dgQ=w([A.c_,A.aJ,A.dB,A.be],x.O)
D.dhO=w([],x.a)
D.eo1=new C.ei("battery","Battery","\ud83d\udd0b",A.be,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eo7=new C.ei("solar","Solar panel","\u2600\ufe0f",A.bt,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eoM=new C.ei("crank","Hand crank","\ud83d\udd04",A.cL,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eoo=new C.ei("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aJ,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.enU=new C.ei("buck","Step-down converter","\ud83d\udd3d",A.hh,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eom=new C.ei("regulator","5 V regulator","\ud83e\uddca",A.bM,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eoR=new C.ei("diode","Diode","\u27a1\ufe0f",A.aT,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eoy=new C.ei("ldr","Light sensor","\ud83c\udf1e",A.dB,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eoc=new C.ei("switch","Switch","\ud83c\udf9a\ufe0f",A.bq,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eoO=new C.ei("fuse","Fuse","\ud83e\uddef",A.c0,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.enM=new C.ei("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hh,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eoz=new C.ei("resistor","Resistor","\u3030\ufe0f",A.aT,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eoB=new C.ei("bulb","Light bulb","\ud83d\udca1",A.dB,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eo9=new C.ei("led","LED","\ud83d\udd34",A.ax,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eod=new C.ei("motor","Motor","\u2699\ufe0f",A.bM,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eov=new C.ei("buzzer","Buzzer","\ud83d\udd14",A.c_,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eo2=new C.ei("heater","Heater","\ud83d\udd25",A.cL,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eoq=new C.ei("capacitor","Capacitor","\ud83e\udeab",A.cp,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eoi=new C.ei("radio","Radio","\ud83d\udcfb",A.o7,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eof=new C.ei("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.enT=new C.ei("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eo_=new C.ei("ammeter","Ammeter","\ud83d\udcdf",A.aT,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eo5=new C.ei("fan","Fan","\ud83c\udf00",A.aJ,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eoT=new C.ei("speaker","Speaker","\ud83d\udd0a",A.c_,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eoI=new C.ei("clock","Digital clock","\u23f0",A.be,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eol=new C.ei("calculator","Calculator","\ud83e\uddee",A.LQ,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.enZ=new C.ei("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cp,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eoS=new C.ei("router","WiFi router","\ud83d\udcf6",A.hh,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eoV=new C.ei("siren","Siren","\ud83d\udea8",A.ax,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.enP=new C.ei("toycar","Toy car","\ud83d\ude97",A.cL,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eoW=new C.ei("kettle","Kettle","\ud83e\uded6",A.mB,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.enX=new C.ei("lamp","Desk lamp","\ud83e\ude94",A.dB,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eo8=new C.ei("lights","Party lights","\ud83c\udf84",A.o7,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eoj=new C.ei("fridge","Fridge","\ud83e\uddca",A.hj,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.enR=new C.ei("washer","Washing machine","\ud83e\udee7",A.cp,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eoJ=new C.ei("blender","Blender","\ud83e\udd64",A.c0,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eog=new C.ei("drone","Drone","\ud83d\ude81",A.bM,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.enW=new C.ei("drill","Power drill","\ud83d\udd29",A.aT,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eok=new C.ei("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eoG=new C.ei("neon","Neon sign","\ud83e\udea7",A.c_,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.enS=new C.ei("microwave","Microwave","\ud83c\udf72",A.cL,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eoA=new C.ei("doorbell","Doorbell","\ud83d\udd14",A.bt,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eo4=new C.ei("camera","Security camera","\ud83d\udcf7",A.al,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eou=new C.ei("console","Game console","\ud83c\udfae",A.bq,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eoL=new C.ei("heartmon","Heart monitor","\ud83e\ude7a",A.hd,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.enQ=new C.ei("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eop=new C.ei("lighthouse","Lighthouse","\ud83d\uddfc",A.dB,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eox=new C.ei("discoball","Disco ball","\ud83e\udea9",A.o7,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eoQ=new C.ei("robot","Robot","\ud83e\udd16",A.aJ,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.enO=new C.ei("toaster","Toaster","\ud83c\udf5e",A.dZ,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eoU=new C.ei("ledstrip","LED strip","\ud83c\udf08",A.c_,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eoF=new C.ei("pump","Water pump","\ud83d\udeb0",A.aJ,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eor=new C.ei("hairdryer","Hair dryer","\ud83d\udca8",A.hZ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eoD=new C.ei("headphones","Headphones","\ud83c\udfa7",A.bq,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.enY=new C.ei("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eoP=new C.ei("tablet","iPad Pro M5","\ud83d\udcf2",A.cp,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.enL=new C.ei("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hd,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eoh=new C.ei("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bu,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eoa=new C.ei("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eow=new C.ei("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",G.tM,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.enN=new C.ei("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eo0=new C.ei("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d3,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eoN=new C.ei("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cw,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eos=new C.ei("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bf,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eon=new C.ei("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cd,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eoE=new C.ei("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ax,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eob=new C.ei("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.be,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eot=new C.ei("honor","Honor Magic V5","\ud83d\udcf1",A.cp,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eoC=new C.ei("vivo","vivo X300 Pro","\ud83d\udcf1",A.cL,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eoH=new C.ei("ereader","Kindle Scribe","\ud83d\udcd6",A.bu,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.enK=new C.ei("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cf,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eoe=new C.ei("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cw,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eo6=new C.ei("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.enV=new C.ei("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dB,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eo3=new C.ei("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ax,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eoK=new C.ei("vision","Apple Vision Pro","\ud83e\udd7d",A.bq,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.RI=w([D.eo1,D.eo7,D.eoM,D.eoo,D.enU,D.eom,D.eoR,D.eoy,D.eoc,D.eoO,D.enM,D.eoz,D.eoB,D.eo9,D.eod,D.eov,D.eo2,D.eoq,D.eoi,D.eof,D.enT,D.eo_,D.eo5,D.eoT,D.eoI,D.eol,D.enZ,D.eoS,D.eoV,D.enP,D.eoW,D.enX,D.eo8,D.eoj,D.enR,D.eoJ,D.eog,D.enW,D.eok,D.eoG,D.enS,D.eoA,D.eo4,D.eou,D.eoL,D.enQ,D.eop,D.eox,D.eoQ,D.enO,D.eoU,D.eoF,D.eor,D.eoD,D.enY,D.eoP,D.enL,D.eoh,D.eoa,D.eow,D.enN,D.eo0,D.eoN,D.eos,D.eon,D.eoE,D.eob,D.eot,D.eoC,D.eoH,D.enK,D.eoe,D.eo6,D.enV,D.eo3,D.eoK],B.at("O<ei>"))
D.diq=w([5,10,15,25,45,60],x.t)
D.diM=w([-0.045,0.03,-0.015],x.n)
D.aAG=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uQ=w([0.05,0.2,0.35],x.n)
D.b6s=new B.ac(0,A.G,A.hx,A.dC,6)
D.dlt=w([D.b6s],x.V)
D.evj=new B.z(0,"AND")
D.ewa=new B.z(1,"Adder")
D.ewP=new B.z(2,"Blinker")
D.exl=new B.z(3,"Memory")
D.dmi=w([D.evj,D.ewa,D.ewP,D.exl],x.I)
D.aAT=w([-104,0,104],x.n)
D.aAU=w([-14,3],x.n)
D.dnc=w([-8,0,8],x.n)
D.aB1=w([-92,0,92],x.n)
D.dnD=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f2I=new C.va("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f2P=new C.va("Medium tank","Balanced.",0.35,1)
D.f2O=new C.va("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.RW=w([D.f2I,D.f2P,D.f2O],x._)
D.nD=w([0.04,0.2,0.36],x.n)
D.aBc=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eYd=new B.b7(D.aZX,"Fold",Q.ape)
D.eXh=new B.b7(D.ac5,"Flip",A.Cm)
D.bMg=new B.a0(62889,"MaterialIcons",!1)
D.eYv=new B.b7(D.aZY,"Rise",D.bMg)
D.aps=new B.a0(983870,"MaterialIcons",!1)
D.eUW=new B.b7(D.ac6,"Assemble",D.aps)
D.eV5=new B.b7(D.aZZ,"Spin",D.anL)
D.eV2=new B.b7(D.b__,"Pop",A.kn)
D.dp5=w([D.eYd,D.eXh,D.eYv,D.eUW,D.eV5,D.eV2],B.at("O<+(KK,n,a0)>"))
D.aBh=w([A.c_,A.dB,A.bv,A.aJ,A.bq,A.c0],x.O)
D.dpv=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dqy=w([3,4.5,5,6,9],x.n)
D.b70=new B.ac(0,A.G,A.aS,A.I,16)
D.dr_=w([D.b70],x.V)
D.drz=w(["solar","turbine","crank","pot"],x.s)
D.ds_=w([0,0.35,0.75,1],x.n)
D.dtk=w(["volts","level","ohms","on"],x.s)
D.duL=w([A.jC,A.Cw,A.Cf,A.qy,Z.Hu,A.uF,A.z2,A.qB,A.i6,A.ot,A.hm,A.e5,A.hB,A.i7,A.mN,A.lI,A.uE,A.rO,A.lb,A.GZ,A.wv,A.Cl,A.Ch,A.a2f,A.Oz,A.Cs,A.OI,A.aoF,H.apo,A.kn],x.w)
D.eef={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hjz=new C.yo("Switch",G.uH,A.bt,0,"Tap it to turn it ON or OFF.")
D.hjv=new C.yo("Blinker",A.or,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hjw=new C.yo("AND",D.aps,A.cp,2,"ON only when BOTH inputs are ON.")
D.bNL=new B.a0(63671,"MaterialIcons",!1)
D.hju=new C.yo("OR",D.bNL,A.bq,2,"ON when EITHER input is ON.")
D.hjx=new C.yo("XOR",Aa.a1E,A.c_,2,"ON when the inputs are DIFFERENT.")
D.hjr=new C.yo("NAND",A.uq,A.aJ,2,"OFF only when BOTH inputs are ON.")
D.bMQ=new B.a0(63176,"MaterialIcons",!1)
D.hjs=new C.yo("NOR",D.bMQ,A.hh,2,"ON only when BOTH inputs are OFF.")
D.hjt=new C.yo("NOT",Y.Cx,A.cL,1,"Flips the signal: ON becomes OFF.")
D.hjy=new C.yo("Light",A.qx,A.dB,1,"Glows when its input is ON.")
D.hjA=new C.yo("Buzzer",A.os,A.c0,1,"Beeps while its input is ON.")
D.zH=new B.bw(D.eef,[D.hjz,D.hjv,D.hjw,D.hju,D.hjx,D.hjr,D.hjs,D.hjt,D.hjy,D.hjA],B.at("bw<n,yo>"))
D.cXL=w([A.A],x.M)
D.cY7=w([A.ay,A.aE],x.M)
D.d6A=w([A.ay,A.A,A.aE],x.M)
D.d8a=w([A.ay,A.lt,A.A,A.lu,A.aE],x.M)
D.dme=w([A.ay,A.lt,A.a5,A.a8,A.lu,A.aE],x.M)
D.dzu=new B.dp([1,D.cXL,2,D.cY7,3,D.d6A,4,A.aBP,5,D.d8a,6,D.dme],B.at("dp<G,ai<da>>"))
D.egz={Calm:0,Box:1,Sleep:2}
D.cEU=w([4,2,6,0],x.n)
D.cF0=w([4,4,4,4],x.n)
D.cF1=w([4,7,8,0],x.n)
D.So=new B.bw(D.egz,[D.cEU,D.cF0,D.cF1],B.at("bw<n,ai<K>>"))
D.eeq={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xr=new C.a0O(0,"source")
D.d7D=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hpR=new C.qj("Clock",A.or,D.xr,A.bv,D.d7D)
D.hpN=new C.qj("Button",A.CA,D.xr,A.aT,A.Y)
D.dqK=w(["random","quick","slow"],x.s)
D.hpY=new C.qj("Dice",A.ol,D.xr,A.c_,D.dqK)
D.bNo=new B.a0(63484,"MaterialIcons",!1)
D.EI=new C.a0O(1,"logic")
D.dvA=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hpU=new C.qj("Delay",D.bNo,D.EI,A.cp,D.dvA)
D.dix=w(["fast","mid","slow"],x.s)
D.hpZ=new C.qj("Echo",A.aoW,D.EI,A.bq,D.dix)
D.hpW=new C.qj("Every 2nd",Y.Cx,D.EI,A.hh,A.Y)
D.bN3=new B.a0(63309,"MaterialIcons",!1)
D.hpT=new C.qj("Every 3rd",D.bN3,D.EI,A.aJ,A.Y)
D.bP0=new B.a0(983902,"MaterialIcons",!1)
D.c6I=w(["50%","25%","75%"],x.s)
D.hq0=new C.qj("Chance",D.bP0,D.EI,A.cL,D.c6I)
D.r7=new C.a0O(2,"out")
D.hpP=new C.qj("Light",A.qx,D.r7,A.dB,A.Y)
D.hpQ=new C.qj("Burst",A.kn,D.r7,A.c_,A.Y)
D.hpO=new C.qj("Ripple",A.z7,D.r7,A.b8,A.Y)
D.hpX=new C.qj("Ball",A.ap6,D.r7,A.cL,A.Y)
D.hpV=new C.qj("Comet",A.ot,D.r7,A.bq,A.Y)
D.bOL=new B.a0(983669,"MaterialIcons",!1)
D.hq_=new C.qj("Shake",D.bOL,D.r7,A.c0,A.Y)
D.hq1=new C.qj("Pop",A.H_,D.r7,A.be,A.Y)
D.hpS=new C.qj("Wash",A.OM,D.r7,A.p1,A.Y)
D.mT=new B.bw(D.eeq,[D.hpR,D.hpN,D.hpY,D.hpU,D.hpZ,D.hpW,D.hpT,D.hq0,D.hpP,D.hpQ,D.hpO,D.hpX,D.hpV,D.hq_,D.hq1,D.hpS],B.at("bw<n,qj>"))
D.eeC={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.A8=new C.JI(0,"tv")
D.f4g=new C.mn("Samsung Neo QLED 8K",D.A8,G.Fz,A.aJ)
D.f47=new C.mn("LG OLED evo G5",D.A8,A.ei,A.hd)
D.f3Z=new C.mn("Sony Bravia 9",D.A8,A.rh,A.bu)
D.f42=new C.mn("Apple TV 4K",D.A8,A.e2,A.bO)
D.f4_=new C.mn("Bang and Olufsen Beovision",D.A8,G.Fd,G.tM)
D.JF=new C.JI(1,"iphone")
D.aQt=new C.mn("iPhone 18 Pro Max",D.JF,D.aiX,A.cf)
D.wV=new C.JI(3,"fold")
D.bsM=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.f4c=new C.mn("iPhone Fold",D.wV,D.bsM,A.b7)
D.vg=new C.JI(2,"android")
D.f4d=new C.mn("Samsung Galaxy S26 Ultra",D.vg,G.aeE,A.d3)
D.blF=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.f45=new C.mn("Samsung Galaxy Z Fold7",D.wV,D.blF,A.cw)
D.f41=new C.mn("Google Pixel 10 Pro XL",D.vg,A.dn,A.bf)
D.f49=new C.mn("Xiaomi 16 Ultra",D.vg,A.i2,A.cd)
D.f44=new C.mn("Huawei Mate 80 Pro Max",D.vg,A.el,A.ax)
D.f40=new C.mn("OPPO Find X9 Ultra",D.vg,A.dY,A.be)
D.f4i=new C.mn("Honor Magic V5",D.wV,A.d7,A.cp)
D.f46=new C.mn("vivo X300 Pro",D.vg,A.hN,A.cL)
D.TZ=new C.JI(4,"tablet")
D.f4b=new C.mn("iPad Pro M5",D.TZ,A.dn,A.aJ)
D.a8z=new C.JI(5,"reader")
D.f4j=new C.mn("Kindle Scribe",D.a8z,A.e9,A.bu)
D.A9=new C.JI(6,"computer")
D.f4a=new C.mn("MacBook Pro M5 Max",D.A9,A.dn,A.cf)
D.f4f=new C.mn("iMac 32 inch",D.A9,A.bO,A.cw)
D.f48=new C.mn("Pro Display XDR 8K",D.A9,A.i2,A.b8)
D.f43=new C.mn("Sony Laser Projector",D.A9,A.cr,A.dB)
D.f4e=new C.mn("Luxury car touchscreen",D.A9,M.ni,A.ax)
D.f4h=new C.mn("Apple Vision Pro",D.A9,A.hk,A.bq)
D.mi=new B.bw(D.eeC,[D.f4g,D.f47,D.f3Z,D.f42,D.f4_,D.aQt,D.f4c,D.f4d,D.f45,D.f41,D.f49,D.f44,D.f40,D.f4i,D.f46,D.f4b,D.f4j,D.f4a,D.f4f,D.f48,D.f43,D.f4e,D.f4h],B.at("bw<n,mn>"))
D.eeK={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bvx=new C.fS(20,4,13,!1)
D.bvY=new C.fS(14,5,13.5,!1)
D.bvP=new C.fS(9,2.4,10,!1)
D.bw2=new C.fS(7,5,12.5,!1)
D.bvS=new C.fS(8,3.5,12,!1)
D.bvt=new C.fS(15,2,6,!1)
D.bw0=new C.fS(45,6,13.5,!0)
D.bvJ=new C.fS(10,8,13.5,!1)
D.bvB=new C.fS(25,3,12,!0)
D.bvH=new C.fS(35,4,12,!0)
D.bvI=new C.fS(40,4.5,9.5,!0)
D.bvK=new C.fS(55,3,9,!0)
D.bvu=new C.fS(18,3,9,!1)
D.bw_=new C.fS(22,4,13.5,!1)
D.bvT=new C.fS(16,5,13.5,!1)
D.bvF=new C.fS(30,4,9,!0)
D.bwb=new C.fS(5,3.5,13,!1)
D.bvN=new C.fS(25,3,13.5,!0)
D.bvW=new C.fS(14,2.5,9,!1)
D.bvM=new C.fS(6,6,13,!1)
D.bw3=new C.fS(30,1.2,5,!0)
D.bwa=new C.fS(35,3,4.5,!0)
D.bw6=new C.fS(20,4.5,7.5,!0)
D.bvL=new C.fS(55,5.5,13.5,!0)
D.bvs=new C.fS(45,5.5,13.5,!0)
D.bvX=new C.fS(40,5.5,13.5,!0)
D.bw9=new C.fS(60,6,13.5,!0)
D.ajq=new C.fS(28,4,7,!0)
D.Ga=new C.fS(25,4,7,!0)
D.bvE=new C.fS(30,4,7,!0)
D.bvz=new C.fS(22,4,7,!0)
D.bvA=new C.fS(24,4,7,!0)
D.bvO=new C.fS(60,3,5.5,!0)
D.bvv=new C.fS(18,9,14,!0)
D.bvC=new C.fS(25,9,14,!0)
D.ajr=new C.fS(30,8,14,!0)
D.bvy=new C.fS(20,8,14,!0)
D.bvG=new C.fS(30,9,14,!0)
D.bw4=new C.fS(22,5,9.5,!0)
D.bvw=new C.fS(30,2.5,10.5,!0)
D.bvU=new C.fS(50,5.5,13.5,!0)
D.bw8=new C.fS(12,2,9.5,!1)
D.bvR=new C.fS(16,1.3,9.5,!0)
D.bw1=new C.fS(40,2.5,7,!0)
D.bw7=new C.fS(60,1.2,4.8,!0)
D.bw5=new C.fS(18,5,13.5,!0)
D.bvZ=new C.fS(8,2,9.5,!1)
D.bvQ=new C.fS(12,2.5,8,!1)
D.bvD=new C.fS(20,3.5,13.5,!0)
D.bvV=new C.fS(3.5,3,13,!1)
D.zI=new B.bw(D.eeK,[D.bvx,D.bvY,D.bvP,D.bw2,D.bvS,D.bvt,D.bw0,D.bvJ,D.bvB,D.bvH,D.bvI,D.bvK,D.bvu,D.bw_,D.bvT,D.bvF,D.bwb,D.bvN,D.bvW,D.bvM,D.bw3,D.bwa,D.bw6,D.bvL,D.bvs,D.bvX,D.bw9,D.ajq,D.Ga,D.bvE,D.Ga,D.bvz,D.Ga,D.bvA,D.ajq,D.Ga,D.bvO,D.bvv,D.bvC,D.ajr,D.bvy,D.bvG,D.bw4,D.bvw,D.bvU,D.bw8,D.bvR,D.bw1,D.bw7,D.Ga,D.ajr,D.bw5,D.bvZ,D.bvQ,D.bvD,D.bvV],B.at("bw<n,fS>"))
D.eep={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eUs=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ezt=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ezo=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eLS=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eMP=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eLO=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.exu=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eJL=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eUA=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eNa=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eCR=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.ex8=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eBQ=new B.z("Movement","They pull your legs together and help you balance.")
D.eDO=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.ezC=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eRU=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eT3=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eJt=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eSN=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eI3=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eNj=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.exf=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eEa=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eMY=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eIp=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eSV=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eLi=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.exs=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eNU=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eRx=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.ePE=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.evv=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eL0=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eL4=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eEV=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.ezQ=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eDC=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eJV=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eQt=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eUx=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eNg=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.evd=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eK6=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ew3=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eQJ=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eRQ=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eKx=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eQY=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.exh=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eSr=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eBc=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eQ6=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eEz=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eIj=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eNA=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eSB=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eSt=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eSx=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eIR=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eOs=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.ePB=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eSd=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eKw=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eGD=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eFl=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eKW=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eNt=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eH9=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eHR=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eBA=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eRM=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eCq=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ew0=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eEU=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.evW=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eAh=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eEZ=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eCA=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eNQ=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eDR=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eUf=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eFv=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eIK=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eLq=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eCJ=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eCs=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dAB=new B.bw(D.eep,[D.eUs,D.ezt,D.ezo,D.eLS,D.eMP,D.eLO,D.exu,D.eJL,D.eUA,D.eNa,D.eCR,D.ex8,D.eBQ,D.eDO,D.ezC,D.eRU,D.eT3,D.eJt,D.eSN,D.eI3,D.eNj,D.exf,D.eEa,D.eMY,D.eIp,D.eSV,D.eLi,D.exs,D.eNU,D.eRx,D.ePE,D.evv,D.eL0,D.eL4,D.eEV,D.ezQ,D.eDC,D.eJV,D.eQt,D.eUx,D.eNg,D.evd,D.eK6,D.ew3,D.eQJ,D.eRQ,D.eKx,D.eQY,D.exh,D.eSr,D.eBc,D.eQ6,D.eEz,D.eIj,D.eNA,D.eSB,D.eSt,D.eSx,D.eIR,D.eOs,D.ePB,D.eSd,D.eKw,D.eGD,D.eFl,D.eKW,D.eNt,D.eH9,D.eHR,D.eBA,D.eRM,D.eCq,D.ew0,D.eEU,D.evW,D.eAh,D.eEZ,D.eCA,D.eNQ,D.eDR,D.eUf,D.eFv,D.eIK,D.eLq,D.eCJ,D.eCs],B.at("bw<n,+(n,n)>"))
D.dAD=new B.hi(A.G,11)
D.dAH=new B.hi(A.G,30)
D.dHM=new C.UP(null)
D.dHZ=new C.UQ(null)
D.dK_=new C.UU(null)
D.dKO=new C.Vu(null)
D.dKR=new C.Vv(null)
D.dLp=new C.VD(null)
D.dP3=new C.Wb(null)
D.dPK=new C.Wc(null)
D.dTX=new C.Wh(null)
D.e8Q=new C.Wi(null)
D.e8T=new C.Wm(null)
D.eb2=new C.WG(null)
D.eb3=new C.a8K(null)
D.ed6=new C.WP(null)
D.egL=new B.t(0,118)
D.aJY=new B.t(0,13)
D.egM=new B.t(0,17)
D.egP=new B.t(0,330)
D.egV=new B.t(0,-13)
D.egW=new B.t(0,-17)
D.egX=new B.t(0,-18)
D.egY=new B.t(0,-19)
D.eh0=new B.t(0,-28)
D.eh1=new B.t(0,-31)
D.eh2=new B.t(0,-32)
D.eh6=new B.t(-9.5,-11)
D.eh9=new B.t(10,20)
D.ehc=new B.t(10,-13)
D.ehd=new B.t(10,-22)
D.ehe=new B.t(10,-4)
D.a7p=new B.t(11,8)
D.ehm=new B.t(12,2)
D.ehn=new B.t(14,0)
D.eho=new B.t(14,12)
D.aK8=new B.t(14,8)
D.ehp=new B.t(14,-17)
D.aKa=new B.t(14,-3)
D.aKb=new B.t(14,-4)
D.ehs=new B.t(15,0)
D.eht=new B.t(15,-12)
D.ehw=new B.t(16,-8)
D.ehx=new B.t(18,14)
D.ehy=new B.t(18,-12)
D.aKg=new B.t(20,0)
D.ehG=new B.t(20,15)
D.ehH=new B.t(20,-17)
D.ehI=new B.t(20,-3)
D.ehJ=new B.t(21,8)
D.ehN=new B.t(22,10)
D.aKi=new B.t(22,8)
D.ehO=new B.t(24,0)
D.ehP=new B.t(24,2)
D.ehS=new B.t(24,-18)
D.ehT=new B.t(24,-22)
D.ehX=new B.t(25,8)
D.ehY=new B.t(26,0)
D.ei3=new B.t(28,-30)
D.ei9=new B.t(30,18)
D.eia=new B.t(30,2)
D.eid=new B.t(31,19)
D.eif=new B.t(32,0)
D.aKm=new B.t(34,0)
D.aKn=new B.t(34,-32)
D.Jd=new B.t(36,0)
D.eis=new B.t(3,-1)
D.eiv=new B.t(40,3)
D.eiJ=new B.t(4,11)
D.eiM=new B.t(4,-2)
D.eiR=new B.t(5,0)
D.eiS=new B.t(5,17)
D.eiT=new B.t(5,6)
D.eiY=new B.t(6,11)
D.ej3=new B.t(8,7)
D.ej4=new B.t(8,-10)
D.ej5=new B.t(8,-14)
D.aKs=new B.t(9,0)
D.ejf=new B.t(-20.5,-17.6)
D.ejg=new B.t(-9,18.5)
D.ejj=new B.t(-2.6,-1)
D.ejs=new B.t(2.6,1)
D.ejz=new B.t(-9,12.2)
D.ejT=new B.t(-9,20.5)
D.eke=new B.t(-10,0)
D.ekf=new B.t(-10,12)
D.aKA=new B.t(-10,4)
D.ekl=new B.t(-11,-2)
D.ekp=new B.t(-13,-5)
D.ekq=new B.t(-14,0)
D.ekr=new B.t(-14,13)
D.eks=new B.t(-14,2)
D.ekt=new B.t(-14,-12)
D.eku=new B.t(-14,-19)
D.ekw=new B.t(-14,-23)
D.ekx=new B.t(-15,6)
D.ekA=new B.t(-16,14)
D.ekC=new B.t(-16,-8)
D.ekD=new B.t(-17,10)
D.ekE=new B.t(-17,-18)
D.ekF=new B.t(-17,-8)
D.ekH=new B.t(-18,20)
D.ekI=new B.t(-18,-9)
D.aKC=new B.t(-20,0)
D.ekK=new B.t(-20,16)
D.ekL=new B.t(-20,-9)
D.Tk=new B.t(-22,8)
D.ekM=new B.t(-22,-10)
D.ekN=new B.t(-22,-11)
D.ekO=new B.t(-24,10)
D.ekP=new B.t(-24,11)
D.ekQ=new B.t(-24,14)
D.ekR=new B.t(-24,-22)
D.ekT=new B.t(-25,-11)
D.ekU=new B.t(-26,0)
D.ekV=new B.t(-26,-18)
D.ekW=new B.t(-2,9)
D.ekX=new B.t(-2,-10)
D.ekY=new B.t(-2,-20)
D.el0=new B.t(-2,-9)
D.el2=new B.t(-32,0)
D.aKE=new B.t(-34,0)
D.el7=new B.t(-40,3)
D.el9=new B.t(-4,11)
D.ela=new B.t(-4,-17)
D.elb=new B.t(-4,-2)
D.elf=new B.t(-5,0)
D.elg=new B.t(-5,20)
D.elh=new B.t(-5,6)
D.eli=new B.t(-6,26)
D.elj=new B.t(-6,6)
D.elk=new B.t(-6,-42)
D.ell=new B.t(-7,-19)
D.elm=new B.t(-7,-24)
D.elp=new B.t(-8,-9)
D.a7x=new B.t(-9,0)
D.elq=new B.t(-9,1)
D.els=new B.t(-9,-23)
D.fB4=new B.y("Thinking\u2026",null,A.hs,null,null,null,null,null,null,null,null,null)
D.emu=new B.D(A.jy,D.fB4,null)
D.fRL=new B.y("Start from a ready-made board",null,A.fx,null,null,null,null,null,null,null,null,null)
D.emH=new B.D(A2.w6,D.fRL,null)
D.bDx=new B.P(4,0,4,14)
D.fwi=new B.F(!0,A.aC,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC3=new B.y("Games and little helpers for a spare minute.",null,D.fwi,null,null,null,null,null,null,null,null,null)
D.emT=new B.D(D.bDx,D.fC3,null)
D.dj7=w([A.iy,A.bn],x.O)
D.aPv=new B.c_(A.A,0.5,A.x,null,0,D.dj7,null,null)
D.eu3=new B.c_(A.A,0.5,A.x,null,0,D.aBx,null,null)
D.d9Z=w([A.c,A.bM],x.O)
D.eu5=new B.c_(A.A,0.5,A.x,null,0,D.d9Z,null,null)
D.drN=w([A.bO,A.hk],x.O)
D.aPw=new B.c_(A.A,0.5,A.x,null,0,D.drN,null,null)
D.cOR=w([A.c,A.bO],x.O)
D.eu9=new B.c_(A.tw,0.5,A.x,null,0,D.cOR,null,null)
D.bsQ=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dpN=w([A.fd,D.bsQ],x.O)
D.euf=new B.c_(A.tw,0.5,A.x,null,0,D.dpN,null,null)
D.cI1=w([A.dn,A.cr],x.O)
D.eug=new B.c_(A.A,0.5,A.x,null,0,D.cI1,null,null)
D.cWI=w([A.fU,A.aT,A.d0],x.O)
D.euj=new B.c_(A.tw,0.5,A.x,null,0,D.cWI,null,null)
D.djM=w([A.hk,M.ni],x.O)
D.euk=new B.c_(A.tw,0.5,A.x,null,0,D.djM,null,null)
D.euo=new B.c_(A.A,0.5,A.x,null,0,D.axM,null,null)
D.dsD=w([A.hk,A.hW],x.O)
D.euw=new B.c_(A.A,0.5,A.x,null,0,D.dsD,null,null)
D.aPA=new B.aP(9,9)
D.euE=new B.aP(1.4,1.4)
D.f0Q=new B.a3(10,-8,18,-2)
D.f0R=new B.a3(14,-14,20,14)
D.f0T=new B.a3(20,-2,30,2)
D.f0Y=new B.a3(4,-13,30,-3)
D.f13=new B.a3(8,-7,12,7)
D.f1f=new B.a3(-12,12,12,19)
D.f1g=new B.a3(-12,14,12,22)
D.f1h=new B.a3(-12,-22,12,8)
D.f1i=new B.a3(-12,-25,12,19)
D.f1j=new B.a3(-12,-26,12,-6)
D.f1k=new B.a3(-12,-4,12,14)
D.f1m=new B.a3(-14,20,14,24)
D.f1n=new B.a3(-14,6,14,10)
D.f1o=new B.a3(-14,-17,14,15)
D.f1p=new B.a3(-14,-26,14,18)
D.f1q=new B.a3(-14,-4,14,20)
D.f1s=new B.a3(-15,-29,15,25)
D.f1t=new B.a3(-16,-16,16,16)
D.f1w=new B.a3(-16,-22,-9,18)
D.f1x=new B.a3(-16,-24,16,-10)
D.f1z=new B.a3(-16,-2,16,20)
D.f1B=new B.a3(-18,20,18,24)
D.f1C=new B.a3(-18,-18,18,20)
D.f1D=new B.a3(-20,12,20,22)
D.f1E=new B.a3(-20,-28,20,26)
D.f1F=new B.a3(-22,14,22,18)
D.aQa=new B.a3(-22,-26,22,24)
D.f1G=new B.a3(-22,-3,22,3)
D.f1H=new B.a3(-22,-4,22,12)
D.f1J=new B.a3(-24,-12,10,22)
D.f1K=new B.a3(-24,-14,22,8)
D.f1L=new B.a3(-24,-6,24,20)
D.aQb=new B.a3(-24,-9,24,9)
D.f1M=new B.a3(-25,14,25,19)
D.f1N=new B.a3(-26,-14,14,8)
D.f1O=new B.a3(-26,-4,26,20)
D.f1P=new B.a3(-26,-6,4,6)
D.aQc=new B.a3(-28,-13,28,13)
D.f1Q=new B.a3(-28,-16,28,16)
D.f1R=new B.a3(-28,-16,28,8)
D.f1S=new B.a3(-28,-22,28,22)
D.f1T=new B.a3(-30,-12,30,14)
D.f1U=new B.a3(-30,-14,0,14)
D.f1V=new B.a3(-30,-18,30,20)
D.f1W=new B.a3(-30,-28,30,14)
D.f1X=new B.a3(-30,-2,30,18)
D.f1Y=new B.a3(-30,-4,30,18)
D.f1Z=new B.a3(-32,-17,32,17)
D.f2_=new B.a3(-32,-28,32,18)
D.f20=new B.a3(-33,-21,33,17)
D.f21=new B.a3(-34,14,34,26)
D.a8q=new B.a3(-34,-18,34,18)
D.f22=new B.a3(-34,-4,34,7)
D.f23=new B.a3(-36,-24,36,20)
D.f24=new B.a3(-38,-22,38,22)
D.f26=new B.a3(-3,12,3,22)
D.f27=new B.a3(-3,5,3,15)
D.f2b=new B.a3(-46,-34,46,28)
D.f2d=new B.a3(-48,-3,48,3)
D.f2g=new B.a3(-6,18,24,24)
D.f2h=new B.a3(-6,5,6,12)
D.f2i=new B.a3(-6,-22,6,-15)
D.f2m=new B.a3(-9,-16,9,22)
D.f2n=new B.a3(-4.5,-24,4.5,-21.2)
D.f2p=new B.a3(14,-9,17.5,9)
D.eg_={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aR7=new B.dD(D.eg_,5,x.Q)
D.efv={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.f5z=new B.dD(D.efv,10,x.Q)
D.f7O=new B.av(24,44)
D.f8b=new B.av(54,38)
D.f8i=new B.av(66,38)
D.bbF=new B.fl(2,null,null,null,null,A.bq,null,null,null,null)
D.f9k=new B.a4(16,16,D.bbF,null)
D.aS6=new B.hK(3,12,12,0.82,null)
D.fm3=new B.F(!0,A8.xM,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgC=new B.eu("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cN,null,null,null,null,null,null,D.fm3)
D.fr6=new B.F(!0,A.kD,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgI=new B.eu("AI",null,null,A.cN,null,null,null,null,null,null,D.fr6)
D.fh_=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhw=new B.F(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhT=new B.F(!0,A.cp,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fip=new B.F(!0,A.bU,null,null,null,null,11,A.U,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiu=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiL=new B.F(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjg=new B.F(!0,A.aR,null,null,null,null,12,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6c=new B.cW(A.hx,A.dC,6)
D.dcZ=w([D.f6c],B.at("O<cW>"))
D.fkd=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dcZ,null,null,null)
D.fki=new B.F(!0,A.ep,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkn=new B.F(!0,A.bU,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl_=new B.F(!0,A.bU,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl7=new B.F(!0,A.aC,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm7=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmD=new B.F(!0,A.aC,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn9=new B.F(!0,A.aT,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnb=new B.F(!0,A.c,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aBS,null,null,null)
D.fnh=new B.F(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp6=new B.F(!0,A.tZ,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpH=new B.F(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpM=new B.F(!0,A.bU,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpR=new B.F(!0,A.aC,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqD=new B.F(!0,A.mE,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqS=new B.F(!0,A.ac,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUe=new B.F(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frW=new B.F(!0,A.fV,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fse=new B.F(!0,A.bU,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsL=new B.F(!0,A.be,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fud=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuI=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv_=new B.F(!0,A.aT,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvl=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvo=new B.F(!0,A.aT,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw8=new B.F(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwx=new B.F(!0,A.tZ,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwU=new B.F(!0,A.be,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkq=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxi=new B.y("\u26a0\ufe0f ",null,D.fkq,null,null,null,null,null,null,null,null,null)
D.fxv=new B.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.x4,null,null,null,null,null,null,null,null,null)
D.fz7=new B.y("Pick one, then change it and see what happens.",null,A.x4,null,null,null,null,null,null,null,null,null)
D.fzb=new B.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.flz=new B.F(!0,A.ac,null,null,null,null,null,A.U,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA7=new B.y("What do you want to invent? Type it below, or tap an idea.",null,D.flz,null,null,null,null,null,null,null,null,null)
D.fBF=new B.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fCh=new B.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fCU=new B.y("Make it yours",null,A.k8,null,null,null,null,null,null,null,null,null)
D.fG4=new B.y("5G",null,X.aTz,null,null,null,null,null,null,null,null,null)
D.fsw=new B.F(!0,A.bU,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHf=new B.y("WHAT HAPPENS",null,D.fsw,null,null,null,null,null,null,null,null,null)
D.fJ_=new B.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fJG=new B.y("Change the words and pictures on the three slabs.",null,A.x4,null,null,null,null,null,null,null,null,null)
D.fJR=new B.y("All the parts and wires will be removed.",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fKa=new B.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fKK=new B.y("Tap the crank on the board again and again to spin it faster.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fLZ=new B.y("\ud83c\udfaf Challenges",null,A.de,null,null,null,null,null,null,null,null,null)
D.fMx=new B.y("Remove this part",null,W.aTa,null,null,null,null,null,null,null,null,null)
D.fMP=new B.y("Clear the board?",null,A.df,null,null,null,null,null,null,null,null,null)
D.frX=new B.F(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN4=new B.y("How the Lab works",null,D.frX,null,null,null,null,null,null,null,null,null)
D.fiY=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNq=new B.y("Electronics Lab",null,D.fiY,null,null,null,null,A.a1,null,1,null,null)
D.fNu=new B.y("?",null,O.aUJ,null,null,null,null,null,null,null,null,null)
D.fOM=new B.y("Ready-made circuits",null,A.de,null,null,null,null,null,null,null,null,null)
D.fPp=new B.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fv3=new B.F(!0,A.aT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fST=new B.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fv3,null,null,null,null,null,null,null,null,null)
D.fU5=new B.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aT8,null,null,null,null,null,null,null,null,null)
D.fUA=new B.y("NGMY",null,A.vp,null,null,null,null,null,null,null,null,null)
D.fUN=new B.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.V8,null,null,null,null,null,null,null,null,null)
D.fVb=new B.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.mp,null,null,null,null,null,null,null,null,null)
D.fWe=new B.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.x4,null,null,null,null,null,null,null,null,null)
D.fWg=new B.y("TOOLBOX",null,A7.a9J,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hoM=null
$.hoL=null
$.hv_=0
$.hXh=B.U(x.N,B.at("iN"))
$.hXS=B.U(x.N,B.at("iN"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"itO","bFT",()=>{var v="led"
return B.a([C.azd("Both together","Make the light glow only when BOTH switches are ON.",2,new C.foo(),v),C.azd("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fop(),v),C.azd("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.foq(),v),C.azd("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.foy(),v),C.azd("Not both","Make the light go OFF only when both switches are ON.",2,new C.foz(),v),C.azd("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.foA(),"buzzer")],B.at("O<bcc>"))})
w($,"iuf","bFU",()=>B.a([C.QE("UNIVERSE","Earth, space and gravity",A.P6,A.aJ,new C.foQ()),C.QE("ELECTRONICS LAB","Batteries, wires, real circuits",Af.Ci,A.aJ,new C.foR()),C.QE("DISCOVERY LAB","Body Explorer: a real 3D human",D.bMh,A.be,new C.foS()),C.QE("TOOLBOX","Converter, clock, games",H.anZ,A.cL,new C.foT()),C.QE("REACTION LAB","Wire parts together",A.CF,A.bv,new C.foU()),C.QE("SPARK PAINTER","Paint with light",A.Oy,A.c_,new C.foV()),C.QE("ROCKET LANDER","Land softly on the pad",A.ot,A.aJ,new C.foW()),C.QE("TITLE ANIMATOR","Make a moving title",A.wx,A.bt,new C.foX()),C.QE("CIRCUIT LAB","Connect logic, learn it",A.a1Z,A.cp,new C.foY())],B.at("O<buk>")))
w($,"ivO","qx",()=>{var v,u,t=B.U(x.N,x.B)
for(v=0;v<76;++v){u=D.RI[v]
t.n(0,u.a,u)}return t})
w($,"itP","aim",()=>B.a([C.FY("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.foB()),C.FY("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.foC()),C.FY("Spin the motor","A battery and a motor in a loop will make it spin.",new C.foD()),C.FY("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.foE()),C.FY("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.foF()),C.FY("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fos()),C.FY("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fot()),C.FY("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fou()),C.FY("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fov()),C.FY("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fow()),C.FY("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fox())],B.at("O<bcd>")))
w($,"iuh","hDC",()=>B.a([C.a1k("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aT,A.cd,new C.fp5()),C.a1k("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c0,A.bB,new C.fp6()),C.a1k("Breathe","Calm down in a minute","\ud83e\udee7",A.hh,A.cw,new C.fp7()),C.a1k("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b7,new C.fp8()),C.a1k("Memory Match","Find the pairs","\ud83c\udccf",A.aJ,A.cf,new C.fp9()),C.a1k("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bt,A.bf,new C.fpa()),C.a1k("Tip & Split","Share the bill","\ud83e\uddfe",A.be,A.b1,new C.fpb()),C.a1k("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bq,A.aD,new C.fpc())],B.at("O<bvE>")))})()};
(a=>{a["JcFmNGnYXjucl+hPdebZ1iaNgno="]=a.current})($__dart_deferred_initializers__);