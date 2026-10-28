((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A1,Ab,A2,A3,I,P,A4,Ac,A5,A6,G,Ad,Ae,A7,Af,X,Ag,Ah,Q,N,Ai,Aj,Y,O,U,Ak,Al,V,M,A8,W,K,S,Am,E,F,L,B={
bxR(d){return B.hKV(d)},
hKV(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bxR=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qJ(C.n1(""),d,A.hl,null).cM(0,A.Xo),$async$bxR)
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
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$bxR,v)},
hWs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Ps[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cU(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.iD(D.Ps,new B.fre())
if(w==null)w=A.d.gL(D.Ps)
s=C.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.L)(r),++u){l=r[u].a
k=l[0]
l=$.q7().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gL(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.aiX(w.a,w.b,m,w,s,!1)},
hQc(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.K(D.PR,new B.fhY(),x.bd).aI(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i3j(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cJ(b2,"{")
v=A.a.oq(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aG(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gS(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.q7().ai(0,p)||J.f_(s,o)||J.ad(t)>=8)continue
J.ch(s,o)
n=C.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dcY[a9]
l=J.q(q,m)
if(typeof l=="number")J.aF(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dQ(J.q(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dQ(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.ch(t,new C.eq([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gS(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=A.o.D(A.k.N(C.dQ(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.dQ(J.q(g,3))),0,1)
if(J.f_(s,f)&&J.f_(s,e)&&!J.z(f,e))J.ch(i,new C.cH([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cu:a0)
while(a0.C()){a2=a0.gS(a0)
J.ch(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mv(a0,C.t(a1==null?"":a1),t,i,A.T)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new B.aiX(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hV2(d){var w,v,u=B.h0j()
d.B(u)
for(w=0;w<60;++w)u.uQ(0,0.03333333333333333)
v=u.a
return A.d.b7(v,new B.foi(u))&&!A.d.da(v,new B.foj())},
hV1(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.q7().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.L)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dbp,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aI(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.L)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aI(s,"\n")+"\nWires: "+A.d.aI(l,"; ")},
hJr(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aI(v,"\n")+"\n\n"}v=A.d.aI(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hWr(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.q7().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.PR[u]
if(A.d.b7(w,new B.frb(s)))if(!C.cU(r,s.b.toLowerCase(),0))v=C.cU(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a2(w,new B.frc(e),C.U(w).k("a2<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cI(w,0,new B.frd())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gL(w)
w=$.q7().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
aiX:function aiX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fre:function fre(){},
fhY:function fhY(){},
foi:function foi(d){this.a=d},
foj:function foj(){},
frb:function frb(d){this.a=d},
frc:function frc(d){this.a=d},
frd:function frd(){},
UL:function UL(d,e){this.c=d
this.a=e},
biC:function biC(d,e,f,g,h){var _=this
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
e3J:function e3J(d){this.a=d},
e3K:function e3K(d,e,f){this.a=d
this.b=e
this.c=f},
e3L:function e3L(d){this.a=d},
e3W:function e3W(d){this.a=d},
e3X:function e3X(d,e){this.a=d
this.b=e},
e3S:function e3S(d){this.a=d},
e3Q:function e3Q(d,e){this.a=d
this.b=e},
e3R:function e3R(d,e,f){this.a=d
this.b=e
this.c=f},
e3T:function e3T(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e3O:function e3O(d){this.a=d},
e3P:function e3P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3U:function e3U(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e3N:function e3N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3V:function e3V(d,e){this.a=d
this.b=e},
e3M:function e3M(d,e){this.a=d
this.b=e},
e4_:function e4_(d){this.a=d},
e3Z:function e3Z(d){this.a=d},
e40:function e40(d){this.a=d},
e3Y:function e3Y(d){this.a=d},
e41:function e41(d,e){this.a=d
this.b=e},
e42:function e42(d,e){this.a=d
this.b=e},
e43:function e43(d,e){this.a=d
this.b=e},
e44:function e44(d,e){this.a=d
this.b=e},
byc(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOA,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hdK(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.an,C.d(e,w,w,w,w,w,w,A.zq,A.L,w,w),A.aA,C.bY(A.fQ,g,A.br,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.Vu,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
FE:function FE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uF:function uF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vc:function Vc(d){this.a=d},
aD6:function aD6(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fk$=h
_.kX$=i
_.fQ$=j
_.fl$=k
_.bq$=l
_.a8$=m
_.c=_.a=null},
ejI:function ejI(){},
ek1:function ek1(d){this.a=d},
ek0:function ek0(d,e){this.a=d
this.b=e},
ek2:function ek2(){},
ek3:function ek3(){},
ejK:function ejK(d,e,f){this.a=d
this.b=e
this.c=f},
ejJ:function ejJ(d,e){this.a=d
this.b=e},
ejz:function ejz(d){this.a=d},
ejA:function ejA(d){this.a=d},
ejB:function ejB(d){this.a=d},
ejC:function ejC(d){this.a=d},
ejD:function ejD(d){this.a=d},
ejE:function ejE(d){this.a=d},
ejF:function ejF(d){this.a=d},
ejG:function ejG(d){this.a=d},
ejH:function ejH(d){this.a=d},
ejx:function ejx(d){this.a=d},
ejy:function ejy(d){this.a=d},
ejw:function ejw(d){this.a=d},
ejV:function ejV(d,e){this.a=d
this.b=e},
ejQ:function ejQ(d){this.a=d},
ejR:function ejR(d){this.a=d},
ejN:function ejN(d){this.a=d},
ejS:function ejS(d){this.a=d},
ejM:function ejM(d){this.a=d},
ejT:function ejT(d){this.a=d},
ejU:function ejU(d){this.a=d},
ejL:function ejL(d){this.a=d},
ejW:function ejW(d,e){this.a=d
this.b=e},
ejP:function ejP(d,e){this.a=d
this.b=e},
ejX:function ejX(d){this.a=d},
ejY:function ejY(d){this.a=d},
ejZ:function ejZ(d){this.a=d},
ek_:function ek_(d){this.a=d},
ejO:function ejO(d){this.a=d},
bfB:function bfB(d,e){this.b=d
this.a=e},
aKX:function aKX(){},
bvP:function bvP(){},
cDt(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cDt=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qM().jt(0,"assets/data/body3d.bin"),$async$cDt)
case 3:d=a1
$.h96=J.eY(A.dD.gaM(d),d.byteOffset,d.byteLength)
t=C.aR2(d)
s=t.getUint32(4,!0)
r=C.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.jm(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.d11[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2k(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aWh))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b8J(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cDt,v)},
aQQ:function aQQ(d,e,f){this.a=d
this.b=e
this.c=f},
a2k:function a2k(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b8J:function b8J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
TD:function TD(d){this.a=d},
aBw:function aBw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fk$=s
_.kX$=t
_.fQ$=u
_.fl$=v
_.bq$=w
_.a8$=a0
_.c=_.a=null},
dCW:function dCW(d){this.a=d},
dCV:function dCV(d,e){this.a=d
this.b=e},
dCy:function dCy(d,e){this.a=d
this.b=e},
dCz:function dCz(){},
dCX:function dCX(){},
dCA:function dCA(d,e){this.a=d
this.b=e},
dCB:function dCB(d){this.a=d},
dCC:function dCC(){},
dCD:function dCD(d){this.a=d},
dCF:function dCF(d,e){this.a=d
this.b=e},
dCE:function dCE(d){this.a=d},
dCv:function dCv(d,e,f){this.a=d
this.b=e
this.c=f},
dCw:function dCw(d){this.a=d},
dCx:function dCx(d){this.a=d},
dCM:function dCM(d){this.a=d},
dCN:function dCN(d,e){this.a=d
this.b=e},
dCO:function dCO(d,e){this.a=d
this.b=e},
dCP:function dCP(d){this.a=d},
dCL:function dCL(d,e){this.a=d
this.b=e},
dCQ:function dCQ(d,e){this.a=d
this.b=e},
dCK:function dCK(d,e){this.a=d
this.b=e},
dCR:function dCR(d){this.a=d},
dCJ:function dCJ(d){this.a=d},
dCS:function dCS(d){this.a=d},
dCI:function dCI(d){this.a=d},
dCT:function dCT(d){this.a=d},
dCH:function dCH(d){this.a=d},
dCU:function dCU(d){this.a=d},
dCG:function dCG(d){this.a=d},
aJZ:function aJZ(){},
aK_:function aK_(){},
bZX:function bZX(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bZY:function bZY(d,e){this.a=d
this.b=e},
bZZ:function bZZ(d){this.a=d},
ax0(d,e,f,g,h){return new B.b9r(d,e,f,g,h)},
fSh(d,e,f,g,h,i){return $.hGR.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cKf(d,e,f,i,g,h))},
xN:function xN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
BW:function BW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ni:function ni(d,e,f){this.a=d
this.b=e
this.c=f},
b9r:function b9r(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fcb:function fcb(){},
fcc:function fcc(){},
fcd:function fcd(){},
fck:function fck(){},
fcl:function fcl(){},
fcm:function fcm(){},
TI:function TI(d){this.a=d},
aBz:function aBz(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fk$=m
_.kX$=n
_.fQ$=o
_.fl$=p
_.bq$=q
_.a8$=r
_.c=_.a=null},
dF6:function dF6(d){this.a=d},
dEL:function dEL(d,e){this.a=d
this.b=e},
dEO:function dEO(){},
dF7:function dF7(){},
dEJ:function dEJ(d,e){this.a=d
this.b=e},
dEK:function dEK(d,e){this.a=d
this.b=e},
dEP:function dEP(d,e,f){this.a=d
this.b=e
this.c=f},
dEE:function dEE(){},
dEF:function dEF(){},
dEG:function dEG(d){this.a=d},
dEH:function dEH(d,e){this.a=d
this.b=e},
dEI:function dEI(d,e,f){this.a=d
this.b=e
this.c=f},
dEQ:function dEQ(){},
dER:function dER(d,e){this.a=d
this.b=e},
dES:function dES(d){this.a=d},
dEN:function dEN(d,e){this.a=d
this.b=e},
dEM:function dEM(d){this.a=d},
dED:function dED(d,e,f){this.a=d
this.b=e
this.c=f},
dF0:function dF0(d){this.a=d},
dF_:function dF_(d){this.a=d},
dF1:function dF1(d){this.a=d},
dEZ:function dEZ(d){this.a=d},
dEX:function dEX(d){this.a=d},
dEY:function dEY(d){this.a=d},
dEW:function dEW(d){this.a=d},
dET:function dET(d){this.a=d},
dEV:function dEV(d){this.a=d},
dF2:function dF2(d,e){this.a=d
this.b=e},
dF3:function dF3(d,e){this.a=d
this.b=e},
dF4:function dF4(d){this.a=d},
dEU:function dEU(d){this.a=d},
dF5:function dF5(d,e){this.a=d
this.b=e},
b9K:function b9K(d,e){this.b=d
this.a=e},
cKf:function cKf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aK4:function aK4(){},
bvy:function bvy(){},
hxI(){return new B.MQ(null)},
ov(d,e,f,g,h){return new B.bra(d,e,f,g,h)},
bpB(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fSN(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
MQ:function MQ(d){this.a=d},
JU:function JU(d,e){this.a=d
this.b=e},
A9:function A9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aBQ:function aBQ(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dKY:function dKY(d,e){this.a=d
this.b=e},
dKX:function dKX(d){this.a=d},
dL_:function dL_(d,e){this.a=d
this.b=e},
dKZ:function dKZ(d){this.a=d},
bra:function bra(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fcC:function fcC(){},
fcD:function fcD(){},
fcE:function fcE(){},
fcP:function fcP(){},
fcR:function fcR(){},
fcS:function fcS(){},
fcT:function fcT(){},
fcU:function fcU(){},
fcV:function fcV(){},
fcW:function fcW(){},
fcX:function fcX(){},
fcF:function fcF(){},
fcG:function fcG(){},
fcH:function fcH(){},
fcI:function fcI(){},
fcJ:function fcJ(){},
fcK:function fcK(){},
fcL:function fcL(){},
fcM:function fcM(){},
fcN:function fcN(){},
fcO:function fcO(){},
fcQ:function fcQ(){},
bpC:function bpC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eTZ:function eTZ(d){this.a=d},
eTY:function eTY(d,e){this.a=d
this.b=e},
eTW:function eTW(d){this.a=d},
eU_:function eU_(d){this.a=d},
eTX:function eTX(d,e){this.a=d
this.b=e},
ae1:function ae1(d,e,f){this.c=d
this.d=e
this.a=f},
acV:function acV(d,e,f){this.c=d
this.d=e
this.a=f},
Pu:function Pu(d,e,f,g,h,i,j,k,l,m){var _=this
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
bqA:function bqA(d,e){this.b=d
this.a=e},
bq5:function bq5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8q:function b8q(d,e){this.b=d
this.a=e},
aG4:function aG4(d,e){this.c=d
this.a=e},
aG5:function aG5(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cS$=e
_.b2$=f
_.c=_.a=null},
eTF:function eTF(d){this.a=d},
eTE:function eTE(d){this.a=d},
eTD:function eTD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTC:function eTC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTA:function eTA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTz:function eTz(d,e,f){this.a=d
this.b=e
this.c=f},
eTB:function eTB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eTy:function eTy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTN:function eTN(d){this.a=d},
eTM:function eTM(d){this.a=d},
eTO:function eTO(d,e){this.a=d
this.b=e},
eTP:function eTP(d,e){this.a=d
this.b=e},
eTQ:function eTQ(d,e){this.a=d
this.b=e},
eTL:function eTL(d,e,f){this.a=d
this.b=e
this.c=f},
eTR:function eTR(d,e,f){this.a=d
this.b=e
this.c=f},
eTK:function eTK(d){this.a=d},
eTG:function eTG(d){this.a=d},
eTS:function eTS(d){this.a=d},
eTT:function eTT(d){this.a=d},
eTJ:function eTJ(d,e){this.a=d
this.b=e},
eTU:function eTU(d,e){this.a=d
this.b=e},
eTI:function eTI(d,e){this.a=d
this.b=e},
eTV:function eTV(d,e){this.a=d
this.b=e},
eTH:function eTH(d,e){this.a=d
this.b=e},
eTw:function eTw(){},
eTx:function eTx(){},
bpe:function bpe(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
boG:function boG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b95:function b95(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
boI:function boI(d,e,f){this.b=d
this.c=e
this.a=f},
bsE:function bsE(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aLM:function aLM(){},
hf9(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.u(w,0)),u=e.aC(0,new C.u(w,0)),t=1-f,s=3*t
return d.aF(0,t*t*t).ad(0,v.aF(0,s*t*f)).ad(0,u.aF(0,s*f*f)).ad(0,e.aF(0,f*f*f))},
bfA(d,e,f,g,h,i){return $.hHr.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.deL(d,e,f,i,g,h))},
a_z:function a_z(d,e){this.a=d
this.b=e},
pV:function pV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qD:function qD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
C_:function C_(d,e){this.a=d
this.b=e},
Yz:function Yz(d,e){this.a=d
this.b=e},
adS:function adS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_M:function a_M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
C9:function C9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaN:function aaN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ab3:function ab3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acZ:function acZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfy:function bfy(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bt$=_.bN$=0},
deP:function deP(d){this.a=d},
deQ:function deQ(d){this.a=d},
deM:function deM(d,e){this.a=d
this.b=e},
deN:function deN(d){this.a=d},
deO:function deO(d){this.a=d},
deR:function deR(d){this.a=d},
deS:function deS(d){this.a=d},
deT:function deT(d){this.a=d},
deU:function deU(d){this.a=d},
deV:function deV(d){this.a=d},
deW:function deW(d){this.a=d},
deX:function deX(d){this.a=d},
deY:function deY(d){this.a=d},
deZ:function deZ(d){this.a=d},
Fq:function Fq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vb:function Vb(d){this.a=d},
aD5:function aD5(d,e,f,g,h,i,j){var _=this
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
_.bq$=i
_.a8$=j
_.c=_.a=null},
ej2:function ej2(d){this.a=d},
eiS:function eiS(d){this.a=d},
eiU:function eiU(){},
eiV:function eiV(){},
eiY:function eiY(){},
eiZ:function eiZ(d,e,f){this.a=d
this.b=e
this.c=f},
ej_:function ej_(d){this.a=d},
ej0:function ej0(d){this.a=d},
eiW:function eiW(){},
eiX:function eiX(d){this.a=d},
ejs:function ejs(d){this.a=d},
ej1:function ej1(){},
eiO:function eiO(d){this.a=d},
ej4:function ej4(d){this.a=d},
ej3:function ej3(d){this.a=d},
ej6:function ej6(){},
ej5:function ej5(d,e){this.a=d
this.b=e},
eiR:function eiR(){},
eiP:function eiP(d){this.a=d},
eiQ:function eiQ(d){this.a=d},
ejq:function ejq(d){this.a=d},
ejp:function ejp(d){this.a=d},
ejr:function ejr(d){this.a=d},
ejg:function ejg(d,e){this.a=d
this.b=e},
ejo:function ejo(d){this.a=d},
ejm:function ejm(d){this.a=d},
ejn:function ejn(d){this.a=d},
ejl:function ejl(d){this.a=d},
ejk:function ejk(d){this.a=d},
ejh:function ejh(d){this.a=d},
eji:function eji(d){this.a=d},
ejj:function ejj(d){this.a=d},
eiT:function eiT(){},
ejc:function ejc(d){this.a=d},
ejd:function ejd(d){this.a=d},
ejb:function ejb(d){this.a=d},
eje:function eje(d){this.a=d},
eja:function eja(d){this.a=d},
ejf:function ejf(d){this.a=d},
ej9:function ej9(d){this.a=d},
ej8:function ej8(d){this.a=d},
ej7:function ej7(d,e){this.a=d
this.b=e},
bfz:function bfz(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
deL:function deL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKV:function aKV(){},
bk8:function bk8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Pl:function Pl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Vr:function Vr(d){this.a=d},
bjc:function bjc(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=$
_.x=h
_.y=0
_.z="glow"
_.Q=0
_.as=12
_.at=i
_.ax=null
_.ay=!1
_.ch=!0
_.CW=0
_.bq$=j
_.a8$=k
_.c=_.a=null},
euT:function euT(d){this.a=d},
euR:function euR(d){this.a=d},
euS:function euS(){},
euu:function euu(){},
eut:function eut(){},
euD:function euD(d,e){this.a=d
this.b=e},
euF:function euF(d){this.a=d},
euJ:function euJ(d){this.a=d},
euE:function euE(d){this.a=d},
euK:function euK(d){this.a=d},
euL:function euL(d){this.a=d},
euM:function euM(d,e){this.a=d
this.b=e},
euC:function euC(d,e){this.a=d
this.b=e},
euN:function euN(d){this.a=d},
euB:function euB(d){this.a=d},
euO:function euO(d,e){this.a=d
this.b=e},
euA:function euA(d,e){this.a=d
this.b=e},
euP:function euP(d){this.a=d},
euz:function euz(d,e){this.a=d
this.b=e},
euQ:function euQ(d){this.a=d},
euy:function euy(d){this.a=d},
euG:function euG(d){this.a=d},
eux:function eux(d){this.a=d},
euH:function euH(d){this.a=d},
euw:function euw(d){this.a=d},
euI:function euI(d,e){this.a=d
this.b=e},
euv:function euv(d,e){this.a=d
this.b=e},
bqv:function bqv(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
VD:function VD(d){this.a=d},
aDl:function aDl(d,e,f,g){var _=this
_.d=d
_.e=$
_.f=e
_.r="bounce"
_.w=3
_.x=56
_.y=0
_.z=!0
_.Q=0
_.bq$=f
_.a8$=g
_.c=_.a=null},
eBs:function eBs(d,e){this.a=d
this.b=e},
eBt:function eBt(d,e,f){this.a=d
this.b=e
this.c=f},
eBu:function eBu(d){this.a=d},
eBr:function eBr(){},
eBv:function eBv(d,e){this.a=d
this.b=e},
eBq:function eBq(d,e){this.a=d
this.b=e},
eBw:function eBw(d,e){this.a=d
this.b=e},
eBp:function eBp(d,e){this.a=d
this.b=e},
eBx:function eBx(d){this.a=d},
eBo:function eBo(d){this.a=d},
eBy:function eBy(d,e){this.a=d
this.b=e},
eBn:function eBn(d,e){this.a=d
this.b=e},
eBz:function eBz(d){this.a=d},
eBA:function eBA(d){this.a=d},
eBm:function eBm(d,e){this.a=d
this.b=e},
aL3:function aL3(){},
aL9:function aL9(){},
a_5:function a_5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
V8:function V8(d){this.a=d},
aCY:function aCY(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.x=_.w=1
_.y=!1
_.z=!0
_.Q=7
_.at=_.as=null
_.ax=!0
_.fk$=h
_.kX$=i
_.fQ$=j
_.fl$=k
_.bq$=l
_.a8$=m
_.c=_.a=null},
efG:function efG(d){this.a=d},
efH:function efH(d,e){this.a=d
this.b=e},
efu:function efu(d,e){this.a=d
this.b=e},
efv:function efv(d){this.a=d},
efs:function efs(d){this.a=d},
eft:function eft(d){this.a=d},
efr:function efr(d){this.a=d},
efw:function efw(d){this.a=d},
efq:function efq(d,e){this.a=d
this.b=e},
efy:function efy(d){this.a=d},
efp:function efp(d,e){this.a=d
this.b=e},
efz:function efz(d){this.a=d},
efo:function efo(d,e){this.a=d
this.b=e},
efA:function efA(d){this.a=d},
efn:function efn(d){this.a=d},
efB:function efB(d){this.a=d},
efm:function efm(d){this.a=d},
efC:function efC(d){this.a=d},
efl:function efl(d){this.a=d},
efD:function efD(d){this.a=d},
efE:function efE(d){this.a=d},
efF:function efF(d){this.a=d},
efk:function efk(d){this.a=d},
efx:function efx(d){this.a=d},
bjW:function bjW(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aaU:function aaU(d,e,f){this.a=d
this.b=e
this.c=f},
Vy:function Vy(d){this.a=d},
bjh:function bjh(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=70
_.y=1
_.z=1.2
_.Q=1
_.as=120
_.at="attract"
_.ax="fish"
_.ay=null
_.ch=!0
_.CW=0
_.fk$=i
_.kX$=j
_.fQ$=k
_.fl$=l
_.bq$=m
_.a8$=n
_.c=_.a=null},
eAU:function eAU(d){this.a=d},
eAV:function eAV(d){this.a=d},
eAT:function eAT(d){this.a=d},
eAJ:function eAJ(d,e){this.a=d
this.b=e},
eAK:function eAK(d){this.a=d},
eAH:function eAH(d){this.a=d},
eAI:function eAI(d){this.a=d},
eAG:function eAG(d){this.a=d},
eAz:function eAz(d){this.a=d},
eAA:function eAA(d){this.a=d},
eAy:function eAy(d){this.a=d},
eAL:function eAL(d,e){this.a=d
this.b=e},
eAF:function eAF(d,e){this.a=d
this.b=e},
eAM:function eAM(d,e){this.a=d
this.b=e},
eAE:function eAE(d,e){this.a=d
this.b=e},
eAN:function eAN(d){this.a=d},
eAD:function eAD(d){this.a=d},
eAO:function eAO(d){this.a=d},
eAC:function eAC(d,e){this.a=d
this.b=e},
eAP:function eAP(d){this.a=d},
eAB:function eAB(d,e){this.a=d
this.b=e},
eAQ:function eAQ(d){this.a=d},
eAx:function eAx(d,e){this.a=d
this.b=e},
eAR:function eAR(d){this.a=d},
eAw:function eAw(d,e){this.a=d
this.b=e},
eAS:function eAS(d){this.a=d},
eAv:function eAv(d,e){this.a=d
this.b=e},
brm:function brm(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abm:function abm(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
TG:function TG(d){this.a=d},
aBy:function aBy(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fk$=h
_.kX$=i
_.fQ$=j
_.fl$=k
_.bq$=l
_.a8$=m
_.c=_.a=null},
dEf:function dEf(d){this.a=d},
dEe:function dEe(d,e){this.a=d
this.b=e},
dEg:function dEg(){},
dEh:function dEh(d){this.a=d},
dE5:function dE5(d,e){this.a=d
this.b=e},
dE8:function dE8(d){this.a=d},
dE7:function dE7(d,e){this.a=d
this.b=e},
dE6:function dE6(d,e){this.a=d
this.b=e},
dEc:function dEc(d,e,f){this.a=d
this.b=e
this.c=f},
dEb:function dEb(d){this.a=d},
dE9:function dE9(d){this.a=d},
dEa:function dEa(d){this.a=d},
dEd:function dEd(d){this.a=d},
b9q:function b9q(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cJN:function cJN(d){this.a=d},
aK2:function aK2(){},
bvx:function bvx(){},
aKS:function aKS(){},
bvO:function bvO(){},
aL6:function aL6(){},
bvW:function bvW(){},
Fm:function Fm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
acb:function acb(d,e,f){this.a=d
this.b=e
this.c=f},
V2:function V2(d){this.a=d},
biR:function biR(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x="peg"
_.y="Pentatonic"
_.z="bell"
_.Q=1.4
_.as=0
_.ax=_.at=null
_.ay=!0
_.fk$=i
_.kX$=j
_.fQ$=k
_.fl$=l
_.bq$=m
_.a8$=n
_.c=_.a=null},
eb9:function eb9(d,e){this.a=d
this.b=e},
eby:function eby(d){this.a=d},
ebn:function ebn(d){this.a=d},
ebe:function ebe(d){this.a=d},
ebo:function ebo(d,e){this.a=d
this.b=e},
ebp:function ebp(d){this.a=d},
ebd:function ebd(d){this.a=d},
ebl:function ebl(d){this.a=d},
ebm:function ebm(d){this.a=d},
ebk:function ebk(d){this.a=d},
ebq:function ebq(d,e){this.a=d
this.b=e},
ebj:function ebj(d,e){this.a=d
this.b=e},
ebr:function ebr(d,e){this.a=d
this.b=e},
ebi:function ebi(d,e){this.a=d
this.b=e},
ebs:function ebs(d,e){this.a=d
this.b=e},
ebh:function ebh(d,e){this.a=d
this.b=e},
ebt:function ebt(d){this.a=d},
ebg:function ebg(d,e){this.a=d
this.b=e},
ebu:function ebu(d){this.a=d},
ebf:function ebf(d){this.a=d},
ebv:function ebv(d){this.a=d},
ebc:function ebc(d){this.a=d},
ebw:function ebw(d){this.a=d},
ebb:function ebb(d){this.a=d},
ebx:function ebx(d){this.a=d},
eba:function eba(d){this.a=d},
bgt:function bgt(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
acG:function acG(d,e){this.a=d
this.b=e
this.c=-1000},
V7:function V7(d){this.a=d},
aCX:function aCX(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fk$=h
_.kX$=i
_.fQ$=j
_.fl$=k
_.bq$=l
_.a8$=m
_.c=_.a=null},
ef3:function ef3(d,e){this.a=d
this.b=e},
ef4:function ef4(d,e,f){this.a=d
this.b=e
this.c=f},
efb:function efb(d){this.a=d},
efa:function efa(d){this.a=d},
efc:function efc(d,e){this.a=d
this.b=e},
efd:function efd(d){this.a=d},
ef9:function ef9(d){this.a=d},
efe:function efe(d){this.a=d},
ef8:function ef8(d,e){this.a=d
this.b=e},
eff:function eff(d,e){this.a=d
this.b=e},
ef7:function ef7(d,e){this.a=d
this.b=e},
efg:function efg(d,e){this.a=d
this.b=e},
ef6:function ef6(d,e){this.a=d
this.b=e},
efh:function efh(d){this.a=d},
efi:function efi(d){this.a=d},
ef5:function ef5(d){this.a=d},
efj:function efj(d){this.a=d},
bjX:function bjX(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aKQ:function aKQ(){},
bvM:function bvM(){},
aKR:function aKR(){},
bvN:function bvN(){},
f8t(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7l,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ix,w,w,1/0)},
hWR(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.T(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.L)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdK(j),j=j.gae(j);j.C();){s=j.gS(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e3(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bJ(0,new B.frv(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.vP.h(0,d[n]).a)return!1
m=C.et([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.L)(j),++u){k=j[u]
if(m.K(0,k))l.push(k)}return m.a===d.length},
fVi(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cJ(w,v[0])*16+A.a.cJ(w,v[1])*4+A.a.cJ(w,v[2])]},
t5:function t5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8j:function b8j(d,e){this.a=d
this.b=e},
frv:function frv(d,e){this.a=d
this.b=e},
V5:function V5(d){this.a=d},
aCV:function aCV(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
eey:function eey(d){this.a=d},
eex:function eex(d,e){this.a=d
this.b=e},
eek:function eek(d,e){this.a=d
this.b=e},
eee:function eee(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eef:function eef(d){this.a=d},
eej:function eej(d,e){this.a=d
this.b=e},
eei:function eei(d,e){this.a=d
this.b=e},
eeg:function eeg(d){this.a=d},
eeh:function eeh(d,e){this.a=d
this.b=e},
ees:function ees(){},
eet:function eet(d){this.a=d},
eer:function eer(d){this.a=d},
eeu:function eeu(d){this.a=d},
eeq:function eeq(d){this.a=d},
eeo:function eeo(d){this.a=d},
eep:function eep(d,e){this.a=d
this.b=e},
eel:function eel(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
een:function een(d){this.a=d},
eev:function eev(d,e){this.a=d
this.b=e},
eem:function eem(d,e){this.a=d
this.b=e},
eew:function eew(d,e){this.a=d
this.b=e},
bha:function bha(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dmV:function dmV(d,e){this.a=d
this.b=e},
U3:function U3(d){this.a=d},
bi6:function bi6(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dN1:function dN1(d){this.a=d},
dN0:function dN0(d,e){this.a=d
this.b=e},
dMR:function dMR(d){this.a=d},
dMQ:function dMQ(){},
dMS:function dMS(d){this.a=d},
dMP:function dMP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dN_:function dN_(){},
dMV:function dMV(){},
dMW:function dMW(d,e){this.a=d
this.b=e},
dMU:function dMU(d,e){this.a=d
this.b=e},
dMX:function dMX(d){this.a=d},
dMT:function dMT(d){this.a=d},
dMY:function dMY(d,e){this.a=d
this.b=e},
dMZ:function dMZ(d,e){this.a=d
this.b=e},
Uj:function Uj(d){this.a=d},
aC1:function aC1(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bq$=g
_.a8$=h
_.c=_.a=null},
dPR:function dPR(d){this.a=d},
dPQ:function dPQ(d,e){this.a=d
this.b=e},
dPE:function dPE(){},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPF:function dPF(d){this.a=d},
dPJ:function dPJ(d){this.a=d},
dPI:function dPI(d,e){this.a=d
this.b=e},
dPK:function dPK(d){this.a=d},
dPH:function dPH(d,e){this.a=d
this.b=e},
dPL:function dPL(d){this.a=d},
dPG:function dPG(d,e){this.a=d
this.b=e},
dPM:function dPM(d){this.a=d},
dPN:function dPN(d){this.a=d},
dPO:function dPO(d){this.a=d},
dPP:function dPP(d){this.a=d},
bcu:function bcu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d2h:function d2h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d2j:function d2j(d,e,f){this.a=d
this.b=e
this.c=f},
d2i:function d2i(d,e){this.a=d
this.b=e},
aKg:function aKg(){},
byI(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7l,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ix,w,w,1/0)},
fln(d,e,f,g,h){var w,v,u=null,t=C.i1(u,u,u,u,C.dn(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.cc,u,A.eh,A.ca)
t.eH()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.u(v/2,w.gbc(w)/2))
t.a5(d,w)},
hTW(){var w,v,u,t,s,r,q,p,o=new C.eJ()
o.dB(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aB(5)
if(r.K(0,p))q.push(new C.y(p,1+o.aB(2+A.o.an(t,3))))}A.d.b_(q,new B.fmm())
w.push(new B.aQG(q))}return w},
a0Y(d,e){var w,v,u,t
for(w=new C.WE(d),v="";w.C();){u=C.jE(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jE(65+A.o.F(A.o.F(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
i5C(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.WE(d),v=0,u="";w.C();){t=C.jE(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.F(v,p)
u+=C.jE(65+A.o.F(A.o.F(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aQG:function aQG(d){this.a=d},
bEK:function bEK(){},
fmm:function fmm(){},
Ty:function Ty(d){this.a=d},
bhL:function bhL(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bq$=h
_.a8$=i
_.c=_.a=null},
dAq:function dAq(){},
dAD:function dAD(d){this.a=d},
dAC:function dAC(d,e,f){this.a=d
this.b=e
this.c=f},
dAE:function dAE(d){this.a=d},
dAB:function dAB(d,e){this.a=d
this.b=e},
dAr:function dAr(d,e){this.a=d
this.b=e},
dAw:function dAw(){},
dAx:function dAx(d){this.a=d},
dAv:function dAv(d){this.a=d},
dAy:function dAy(d,e){this.a=d
this.b=e},
dAu:function dAu(d,e){this.a=d
this.b=e},
dAz:function dAz(d,e){this.a=d
this.b=e},
dAt:function dAt(d,e){this.a=d
this.b=e},
dAA:function dAA(d){this.a=d},
dAs:function dAs(d){this.a=d},
b8v:function b8v(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cCk:function cCk(d,e){this.a=d
this.b=e},
Ux:function Ux(d){this.a=d},
bii:function bii(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a8$=h
_.c=_.a=null},
dTU:function dTU(d){this.a=d},
dTT:function dTT(d,e){this.a=d
this.b=e},
dTV:function dTV(d){this.a=d},
dTS:function dTS(d,e){this.a=d
this.b=e},
dTK:function dTK(d,e,f){this.a=d
this.b=e
this.c=f},
dTO:function dTO(d){this.a=d},
dTN:function dTN(d){this.a=d},
dTP:function dTP(d,e){this.a=d
this.b=e},
dTM:function dTM(d,e){this.a=d
this.b=e},
dTQ:function dTQ(d){this.a=d},
dTL:function dTL(d,e){this.a=d
this.b=e},
dTR:function dTR(d,e){this.a=d
this.b=e},
bdY:function bdY(d,e,f){this.b=d
this.c=e
this.a=f},
da2:function da2(d,e){this.a=d
this.b=e},
da3:function da3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
TH:function TH(d){this.a=d},
bhY:function bhY(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dEC:function dEC(d){this.a=d},
dEB:function dEB(d,e){this.a=d
this.b=e},
dEk:function dEk(){},
dEt:function dEt(d){this.a=d},
dEs:function dEs(){},
dEu:function dEu(d){this.a=d},
dEr:function dEr(){},
dEv:function dEv(d){this.a=d},
dEq:function dEq(d){this.a=d},
dEw:function dEw(d){this.a=d},
dEp:function dEp(d){this.a=d},
dEx:function dEx(d){this.a=d},
dEo:function dEo(d){this.a=d},
dEy:function dEy(d,e){this.a=d
this.b=e},
dEn:function dEn(d,e){this.a=d
this.b=e},
dEz:function dEz(d){this.a=d},
dEm:function dEm(d,e){this.a=d
this.b=e},
dEA:function dEA(d){this.a=d},
dEl:function dEl(d,e){this.a=d
this.b=e},
aJV:function aJV(){},
aKo:function aKo(){},
hk6(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gcl()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h0j(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a3D(w,v,u,A.cI,C.T(x.N,x.y))},
hrB(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.h0k(d),d.d*f.b)},
h0k(d){return 42+(D.lS.ai(0,d.b)?(d.ch-1)*38:0)},
e9:function e9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ti:function ti(d,e,f,g){var _=this
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
a9v:function a9v(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aaz:function aaz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3D:function a3D(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bKE:function bKE(){},
bKP:function bKP(d){this.a=d},
bKK:function bKK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKQ:function bKQ(d){this.a=d},
bKR:function bKR(d){this.a=d},
bKT:function bKT(d){this.a=d},
bKU:function bKU(d){this.a=d},
bKS:function bKS(d){this.a=d},
bKV:function bKV(d,e,f){this.a=d
this.b=e
this.c=f},
bKW:function bKW(d){this.a=d},
bKG:function bKG(d){this.a=d},
bKH:function bKH(d){this.a=d},
bKF:function bKF(d){this.a=d},
bKI:function bKI(d,e,f){this.a=d
this.b=e
this.c=f},
bKJ:function bKJ(d){this.a=d},
bKD:function bKD(d){this.a=d},
bKX:function bKX(d,e){this.a=d
this.b=e},
bKL:function bKL(d,e){this.a=d
this.b=e},
bKO:function bKO(d){this.a=d},
bKN:function bKN(d){this.a=d},
bKM:function bKM(d){this.a=d},
ahL:function ahL(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bFW:function bFW(){},
bFX:function bFX(){},
mv:function mv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cjh:function cjh(d){this.a=d},
i3f(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fCU(),c9=new B.fCW(),d0=new B.fCX(),d1=new B.fCV(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bM,A.bJ))
d3.bA(D.e2i,D.e05,c9.$2(A.dB,1.4))
d3.bA(D.e_W,D.e_V,c9.$2(A.bu,2.4))
d3.bA(D.e_X,X.aFz,c9.$2(A.bu,2.4))
if(c7){d2=c8.$1(A.fi.j(0.5))
d2.z=A.QB
d3.af(D.e_G,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aLn,A.aP,A.cp))
d3.af(A.cJ,16,c8.$1(A.bu))
d3.af(A.cJ,13,c8.$1(c7?A.aS.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.iX(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ad,3).H()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).H()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.af(D.e2e,2.4,c8.$1(c7?A.bo:A.ak))
d3.af(D.e2W,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.eu))
d2=$.W().r
t=x.v
q=new C.aO(d2,A.ap,c6,c6,C.a([],t))
q.E(new C.b5(-16,-26))
q.E(new C.ap(16,-26))
q.E(new C.ap(12,14))
q.E(new C.ap(-12,14))
q.E(new C.bF())
d3.aP(q,c8.$1(A.fi.j(0.35)))
if(c7){d2=new C.aO(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(-14,-10))
d2.E(new C.ap(14,-10))
d2.E(new C.ap(12,14))
d2.E(new C.ap(-12,14))
d2.E(new C.bF())
d3.aP(d2,c8.$1(A.ay.j(0.7)))}d3.aP(q,c9.$2(A.ad,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.iX(0,d4.y)
d3.bA(D.a4y,D.aFP,c9.$2(A.bR,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.f3).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.af(A.ig,3,c8.$1(c7?A.bo:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a2l[m]
r=c9.$2(A.bu,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.by(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.cm(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(C.c0(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
w.E(new C.b5(-24,-12))
w.E(new C.ap(10,-12))
w.E(new C.ap(10,2))
w.E(new C.ap(-2,2))
w.E(new C.ap(-6,22))
w.E(new C.ap(-16,22))
w.E(new C.ap(-14,2))
w.E(new C.ap(-24,2))
w.E(new C.bF())
d3.aP(w,d1.$3(D.eFp,A.aM,A.d8))
d3.aX(D.eEP,c8.$1(A.dA))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.iX(0,d4.y*2)
d3.bA(A.J,D.e0_,c9.$2(A.bR,2.4))
d3.bA(A.a4x,D.e_Z,c9.$2(A.hI,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dN.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(16,-6))
d2.E(new C.ap(52,-26))
d2.E(new C.ap(52,18))
d2.E(new C.ap(16,4))
d2.E(new C.bF())
d3.aP(d2,c8.$1(A.bK.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eFv,A.bn,A.cC))
k=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
k.E(new C.b5(4,-6))
k.E(new C.ap(18,-12))
k.E(new C.ap(18,12))
k.E(new C.ap(4,6))
k.E(new C.bF())
d3.aP(k,c8.$1(A.eu))
d3.af(D.e03,7,c8.$1(c7?A.c:A.dA))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(L.mV))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bu(d5*17),3)!==0
else j=!1
i=j?A.bU:D.bfO
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bU.j(0.35))
t.z=A.ln
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e2o,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eFB,A.bR,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bK.j(0.75):A.aB))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.iX(0,d4.y*0.5)
d3.hM(C.cm(A.J,7,22),c8.$1(A.d8))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(L.mV))
if(c7)d6.$5(d3,"0:"+A.a.aT(A.o.u(59-A.o.F(A.k.bu(d5),60)),2,"0"),D.e04,A.b4,6.5)
d3.af(D.e0g,4,c8.$1(A.dA))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.af(A.Rp,10,c8.$1(c7?A.cj:A.bu))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.iX(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e2Y,A.c,16)
d2.restore()
d3.af(A.k1,6,c8.$1(A.d6))
d3.af(A.k1,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bT(A.Rp,14+v*6+A.k.F(t,6))
r=c9.$2(A.cj.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c0(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bA(D.e2n,D.e2U,c9.$2(A.bu,4))
d2=d3.a
J.by(d2.save())
d3.iX(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eFq,A.bR,A.ak))
d3.af(D.aFB,8,c8.$1(A.aB))
d3.af(D.aFB,4.5,c8.$1(c7?A.aS:A.cC))
d3.af(D.e2l,2.2,c8.$1(c7&&A.o.F(A.k.bu(d5*1.6),2)===0?A.ay:A.kc))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e2w,A.ay,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eFy,A.iR,A.f7))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dK))
if(c7){d2=d5*2.3
d3.af(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aX(new C.a9(-18,t,-15.6,t+8),c8.$1(A.b4))
d2=-9+Math.sin(d2-0.4)*6
d3.aX(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bU))}d3.af(D.e2h,4,c8.$1(A.aX))
d3.af(D.e00,2.4,c8.$1(A.ay))
d3.af(D.e0d,2.4,c8.$1(A.bo))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.aB))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dK))
if(c7){d2=$.W()
t=C.a([],x.v)
h=new C.aO(d2.r,A.ap,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.F((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new C.b5(l,f)
t.push(s)
p=h.f
if(p!=null)s.bx(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bx(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aP(h,c9.$2(A.b4,1.8))
d6.$5(d3,"72",D.e01,A.h0,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e2A,A.h0.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.af(D.e2q,3,c8.$1(c7?A.bo:A.bu))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cy.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aX(D.eFs,c8.$1(F.t1))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.rZ(0,-1,1)
d3.hM(C.cm(A.J,8,14),c8.$1(A.ct))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,0))
d2.E(new C.ap(-12,-4))
d2.E(new C.ap(-12,4))
d2.E(new C.bF())
d3.aP(d2,c8.$1(A.cd))
d3.af(D.e0I,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.F(v,2)
r=c9.$2(A.ad,1).H()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.W().r
t=x.v
e=new C.aO(d2,A.ap,c6,c6,C.a([],t))
e.E(new C.b5(-9,22))
e.E(new C.ap(-5,-16))
e.E(new C.ap(5,-16))
e.E(new C.ap(9,22))
e.E(new C.bF())
d3.aP(e,d1.$3(D.eFW,A.c,A.bI))
d3.aX(D.eFV,c8.$1(c7?A.dN:A.bu))
s=new C.aO(d2,A.ap,c6,c6,C.a([],t))
s.E(new C.b5(-7,-22))
s.E(new C.ap(0,-29))
s.E(new C.ap(7,-22))
s.E(new C.bF())
d3.aP(s,c8.$1(A.er))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(0,-19))
t=d*34
d2.E(new C.ap(t,-26))
d2.E(new C.ap(t,-12))
d2.E(new C.bF())
d3.aP(d2,c8.$1(A.dN.j(0.45)))
d2=c8.$1(A.dN.j(0.35))
d2.z=A.QB
d3.af(D.e_H,14,d2)}return!0
case"discoball":d3.bA(D.e_M,K.aFx,c9.$2(A.dA,1.4))
d3.af(A.J,16,d1.$3(D.eFd,A.aP,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dn,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dn,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.F(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d2_[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eFb,A.cp,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eF4,A.aL,A.bJ))
d3.bA(D.e_L,D.e_N,c9.$2(A.bu,1.6))
d3.af(D.e_O,2.2,c8.$1(c7?A.ay:A.bu))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a2m[m]
if(c7)t=a1?A.b8:A.fb
else t=A.cC
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.iX(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bA(A.J,D.a4u,c9.$2(A.bJ,4))
d2.restore()
d3.bA(D.e2a,D.e2u,c9.$2(A.bJ,4))
d3.aX(D.eFU,c8.$1(c7?A.b8.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.awB[m]+1,d2,10,14,2)
p=C.aq(A.bK,A.d8,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.er(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eFr,A.bR,A.bn))
for(m=0;m<2;++m){l=D.awB[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fD:A.aB).H()
t.drawRRect(C.er(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.ct.j(0.5))
s.z=G.mv
r=s.H()
t.drawRRect(C.er(d2),r)
r.delete()}}d3.bA(D.e0k,D.e0B,c9.$2(A.aB,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cC))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new H.mM(1,a3,0.8,1).iH():A.eu
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mv
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dA))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eFg,A.cy,A.Kt))
d3.af(D.e2B,8,c8.$1(A.qF))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.iX(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fi,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
t.E(new C.b5(16,6))
t.E(new C.ap(26,6))
t.E(new C.ap(26,-20))
t.E(new C.ap(10,-20))
d3.aP(t,c9.$2(A.bJ,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.hh).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.af(D.e19,3.2,c8.$1(A.hh.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.iX(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eFt,A.j6,A.t4))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.eu))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.ct.j(0.4))
d2.z=G.mv
d3.af(D.e0f,8,d2)}return!0
case"headphones":d3.f4(C.cm(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bu,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.awC[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a9(s,0,s+14,20),A.by,A.pl).H()
d2.drawRRect(C.er(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bT(new C.u(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.ez.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c0(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.F(d5*14,8)),A.k9,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eF9,A.dA,A.eu))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dK))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aT(A.o.u(C.di(a4)),2,"0")+":"+A.a.aT(A.o.u(C.fY(a4)),2,"0"),D.e_S,A.b4,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.DU,A.h0,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bu(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(L.mV))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bJ,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(a5),$.pm(),!0)
d2.translate(-27,-19)
E.KI(d3,D.eLb,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.uZ))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dS,A.dq))
d3.aD(a6,c9.$2(A.b2,1.2))
d3.af(D.aFW,9,c8.$1(A.aB))
d3.af(D.aFW,6,c9.$2(A.d8,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.aB))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dK))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.b4:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e1d,s,8.2)
d3.af(D.e06,2.4,c8.$1(c7?A.bo:A.aK))
d6.$5(d3,"IN",D.e2v,A.ad,6)
d6.$5(d3,"OUT",D.e11,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bJ,A.ay,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.af(D.e_I,3,c8.$1(A.aK))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eF5,A.eu,A.hF))
d6.$5(d3,"7805",D.a4y,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.d7x[m]-1
r=c8.$1(A.e_).H()
d2.drawRect(C.c0(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e2X,A.bh,9)
return!0
case"diode":d3.bA(D.aG_,D.aFK,c9.$2(A.e_,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aH.j(0.85)))
d3.aX(D.eEV,c8.$1(A.bh))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dN.j(0.4))
t.z=A.jk
d3.aD(d2,t)}d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,-4))
d2.E(new C.ap(-8,4))
d2.E(new C.ap(-1,0))
d2.E(new C.bF())
d3.aP(d2,c8.$1(A.aX))
d6.$5(d3,"one way",D.e2j,A.az,8)
return!0
case"ldr":d3.bA(D.aG_,D.a4y,c9.$2(A.e_,2.4))
d3.bA(D.aFP,D.aFK,c9.$2(A.e_,2.4))
d3.af(A.J,12,c8.$1(A.d8))
d3.af(A.J,12,c9.$2(A.td,1.6))
d2=$.W()
t=C.a([],x.v)
a8=new C.aO(d2.r,A.ap,c6,c6,t)
a8.E(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bx(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aP(a8,c9.$2(A.bK,1.4))
d2=C.aq(A.bu,A.dN,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e2b,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.e9
break A}if("sonytv"===d2){t=A.qy
break A}if("appletv"===d2){t=A.e_
break A}t=F.DW
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aD(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.by(p.save())
p.clipRRect(C.er(a5),$.pm(),!0)
p.translate(t,s)
E.fXC(d3,new C.at(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.af(D.e0C,1.6,c8.$1(A.b4))}else{d3.aD(a5,c8.$1(D.uZ))
p=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
p.E(new C.b5(t,s))
p.E(new C.ap(t+24,s))
p.E(new C.ap(t,s+22))
p.E(new C.bF())
d3.aP(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dA))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.oO[m]
s=$.W()
p=C.a([],t)
s=new C.aO(s.r,A.ap,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bF())
r=c8.$1(A.dA).H()
p=s.gbK().a.snapshot()
d2.drawPath((s.e=new C.cF(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e1P,A.bR,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,18))
d2.E(new C.ap(8,18))
d2.E(new C.ap(12,25))
d2.E(new C.ap(-12,25))
d2.E(new C.bF())
d3.aP(d2,c8.$1(D.Wi))
d6.$5(d3,"Apple TV",D.e1e,A.bu,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bek))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dn,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e2T,F.t1,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lS.h(0,d2)
b1=b0.b===D.w1
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
b7=C.aq(b6,A.c,0.35)
b7.toString
d3.aD(w,d1.$3(new C.a9(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.by(t.save())
t.clipRRect(C.er(a5),$.pm(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.KI(d3,new C.at(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.uZ))
if(b1){t=a5.b
s=a5.d
d3.bA(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.af(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.eu))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bR))
if(c7){d6.$5(d3,"NGMY",D.e3_,A.aB,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bn).H()
d2.drawRect(C.c0(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.af(A.aFv,1.6,c8.$1(A.aB))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eFC,A.cp,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b8),$.pm(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.KI(d3,new C.at(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.uZ))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-38,16))
d2.E(new C.ap(38,16))
d2.E(new C.ap(34,21))
d2.E(new C.ap(-34,21))
d2.E(new C.bF())
d3.aP(d2,c8.$1(D.Wi))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eFG,A.bM,A.cp))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b9),$.pm(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.KI(d3,new C.at(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.uZ))
d3.af(D.aFq,2,c8.$1(A.bJ))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,18))
d2.E(new C.ap(6,18))
d2.E(new C.ap(10,26))
d2.E(new C.ap(-10,26))
d2.E(new C.bF())
d3.aP(d2,c8.$1(D.Wi))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.e9))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c0),$.pm(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.KI(d3,new C.at(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.uZ))
d3.aX(D.eFM,c8.$1(A.bn))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dA))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(14,4))
d2.E(new C.ap(-32,-42))
d2.E(new C.ap(34,-42))
d2.E(new C.bF())
d3.aP(d2,c8.$1(A.dN.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c1),$.pm(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.KI(d3,new C.at(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eFu,A.iN,A.dA))
d3.af(D.aFA,7,c8.$1(A.aB))
d3.af(D.aFA,4,c8.$1(c7?A.dN:A.cC))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dn,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.aB))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(L.mV))
d3.aD(c2,c9.$2(A.bu,1.2))
if(c7){c3=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
c3.E(new C.b5(-26,4))
c3.E(new C.cS(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new C.ap(22,-16))
d3.aP(c3,c9.$2(A.aS,2.2))
d2=A.k.F(d5*6,48)
d3.af(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.b4))
d6.$5(d3,""+(88+A.o.F(A.k.bu(d5*2),5)),D.e1a,A.c,10)
d6.$5(d3,"km/h",D.e17,A.az,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dA,A.eu))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c5),$.pm(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.KI(d3,new C.at(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.by.j(0.2))
d2.z=A.ln
d3.af(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bA(D.e2F,D.e2K,c9.$2(A.bn,4))
d3.bA(D.e0D,D.e0L,c9.$2(A.bn,4))
return!0}return!1},
fCU:function fCU(){},
fCW:function fCW(){},
fCX:function fCX(){},
fCV:function fCV(){},
h_d(d,e,f,g){return new B.ahJ(d,g,f,e)},
Fa(d,e,f){return new B.b9s(d,e,f)},
ahJ:function ahJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ahK:function ahK(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fk$=h
_.kX$=i
_.fQ$=j
_.fl$=k
_.bq$=l
_.a8$=m
_.c=_.a=null},
bFA:function bFA(d,e){this.a=d
this.b=e},
bFB:function bFB(d){this.a=d},
bFz:function bFz(d){this.a=d},
bFC:function bFC(){},
bFD:function bFD(d){this.a=d},
bFE:function bFE(d,e,f){this.a=d
this.b=e
this.c=f},
bFy:function bFy(d,e){this.a=d
this.b=e},
bFw:function bFw(d,e){this.a=d
this.b=e},
bFx:function bFx(d,e,f){this.a=d
this.b=e
this.c=f},
bFq:function bFq(d,e){this.a=d
this.b=e},
bFr:function bFr(){},
bFs:function bFs(d,e){this.a=d
this.b=e},
bFt:function bFt(d,e){this.a=d
this.b=e},
bFu:function bFu(d){this.a=d},
bFv:function bFv(d){this.a=d},
bFT:function bFT(d){this.a=d},
bFU:function bFU(){},
bF3:function bF3(){},
bFV:function bFV(d,e){this.a=d
this.b=e},
bFS:function bFS(d,e,f){this.a=d
this.b=e
this.c=f},
bFN:function bFN(d){this.a=d},
bFK:function bFK(d,e,f){this.a=d
this.b=e
this.c=f},
bFL:function bFL(d,e){this.a=d
this.b=e},
bFO:function bFO(d){this.a=d},
bFI:function bFI(d,e){this.a=d
this.b=e},
bFJ:function bFJ(d,e){this.a=d
this.b=e},
bFM:function bFM(d){this.a=d},
bFP:function bFP(d){this.a=d},
bFG:function bFG(d,e){this.a=d
this.b=e},
bFH:function bFH(d,e){this.a=d
this.b=e},
bFQ:function bFQ(d){this.a=d},
bFF:function bFF(d){this.a=d},
bFR:function bFR(d){this.a=d},
bF4:function bF4(d,e){this.a=d
this.b=e},
bFn:function bFn(d,e){this.a=d
this.b=e},
bFp:function bFp(d,e){this.a=d
this.b=e},
bFo:function bFo(d,e){this.a=d
this.b=e},
bFa:function bFa(d,e){this.a=d
this.b=e},
bFb:function bFb(d){this.a=d},
bF9:function bF9(d){this.a=d},
bFc:function bFc(d,e,f){this.a=d
this.b=e
this.c=f},
bF8:function bF8(d,e){this.a=d
this.b=e},
bFf:function bFf(d,e){this.a=d
this.b=e},
bFg:function bFg(d,e){this.a=d
this.b=e},
bFh:function bFh(d,e){this.a=d
this.b=e},
bFi:function bFi(d,e,f){this.a=d
this.b=e
this.c=f},
bF7:function bF7(d,e){this.a=d
this.b=e},
bFj:function bFj(d,e,f){this.a=d
this.b=e
this.c=f},
bF6:function bF6(d,e){this.a=d
this.b=e},
bFk:function bFk(d,e,f){this.a=d
this.b=e
this.c=f},
bF5:function bF5(d,e){this.a=d
this.b=e},
bFl:function bFl(d){this.a=d},
bFm:function bFm(d){this.a=d},
bFd:function bFd(d){this.a=d},
bFe:function bFe(d){this.a=d},
b9s:function b9s(d,e,f){this.a=d
this.b=e
this.c=f},
fcn:function fcn(){},
fco:function fco(){},
fcp:function fcp(){},
fca:function fca(){},
fcq:function fcq(){},
fc9:function fc9(){},
fcr:function fcr(){},
fce:function fce(){},
fc8:function fc8(){},
fcf:function fcf(){},
fc7:function fc7(){},
fcg:function fcg(){},
fc6:function fc6(){},
fch:function fch(){},
fc4:function fc4(){},
fc5:function fc5(){},
fci:function fci(){},
fc2:function fc2(){},
fc3:function fc3(){},
fcj:function fcj(){},
fc1:function fc1(){},
Uk:function Uk(d){this.a=d},
aC2:function aC2(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dQ7:function dQ7(d){this.a=d},
dQ8:function dQ8(){},
dQ9:function dQ9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQa:function dQa(){},
dPY:function dPY(d){this.a=d},
dPX:function dPX(d,e,f){this.a=d
this.b=e
this.c=f},
dPW:function dPW(d,e){this.a=d
this.b=e},
dPU:function dPU(d){this.a=d},
dPV:function dPV(){},
dQ6:function dQ6(d){this.a=d},
dQ5:function dQ5(d){this.a=d},
dQ3:function dQ3(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d){this.a=d},
dQ2:function dQ2(){},
dQ4:function dQ4(d,e,f){this.a=d
this.b=e
this.c=f},
dQ_:function dQ_(d,e){this.a=d
this.b=e},
dQ0:function dQ0(){},
dQc:function dQc(d){this.a=d},
dQd:function dQd(d,e){this.a=d
this.b=e},
dQb:function dQb(){},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQf:function dQf(d){this.a=d},
dQg:function dQg(d){this.a=d},
aw9:function aw9(d,e){this.c=d
this.a=e},
b7E:function b7E(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
czS:function czS(d){this.a=d},
b7D:function b7D(d,e){this.b=d
this.a=e},
czR:function czR(d){this.a=d},
aws:function aws(){},
awt:function awt(){},
aIr:function aIr(){},
bvA:function bvA(){},
i3g(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bT(A.vV,23)
$.W()
b8=C.M()
b8.r=A.aB.gp(0)
b9.af(A.vV,25,b8)
b8=C.M()
b8.saq(D.eaU.av(0,v))
b9.af(A.vV,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.bh.gp(0)
o.c=A.o.F(u,5)===0?1.8:1
n=o.H()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.M()
r.r=A.bI.gp(0)
r.c=2
r.d=A.bO
b9.bA(A.vV,new C.u(b8*18,s*18-2),r)
r=C.M()
r.r=A.bh.gp(0)
b9.af(A.vV,3,r)
c2.$5(b9,w?"V":"A",D.e2N,A.bh,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e2g,A.aB,9.5)
return!0
case"fan":b8=C.bA(D.eF1,A.hC)
$.W()
s=C.M()
s.r=A.bu.gp(0)
b9.aD(b8,s)
s=C.M()
s.r=A.ak.gp(0)
b9.aX(D.eFN,s)
s=C.M()
s.r=A.M.j(0.6).gp(0)
b9.af(D.vW,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cm(A.aFu,18,10)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.hh.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c0(s),n)
n.delete()
b8.restore()}b8=C.M()
b8.r=A.bm.gp(0)
b9.af(D.vW,4,b8)
b8=C.M()
b8.b=A.ae
b8.c=2
b8.r=A.cp.gp(0)
b9.af(D.vW,22,b8)
b8=C.M()
b8.b=A.ae
b8.c=0.8
b8.r=A.ja.gp(0)
b9.af(D.vW,14,b8)
return!0
case"speaker":l=C.bA(D.aLn,A.uk)
$.W()
b8=C.M()
b8.saq(D.any.av(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.M()
b8.saq(D.ebg.av(0,C.bT(A.cw,15)))
b9.af(A.cw,14+k,b8)
b8=C.M()
b8.r=A.dA.gp(0)
b9.af(A.cw,5,b8)
b8=C.M()
b8.r=A.bn.gp(0)
b9.af(D.aFw,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bT(D.e0j,6+u*6+A.k.F(b8,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bU.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c0(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bA(D.eFF,A.uk)
$.W()
b8=C.M()
b8.saq(D.bTC.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bA(D.aLp,A.ii)
s=C.M()
s.r=A.hF.gp(0)
b9.aD(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.Bw(i)<500?":":" "
g=A.a.aT(A.o.u(C.di(i)),2,"0")
f=A.a.aT(A.o.u(C.fY(i)),2,"0")
b8=C.M()
b8.r=A.b4.j(0.12).gp(0)
b9.aX(D.aLp,b8)
c2.$5(b9,g+h+f,D.e2y,A.b4,21)}b8=C.M()
b8.r=A.cp.gp(0)
b9.af(D.e2x,2.4,b8)
b8=C.M()
b8.r=A.cp.gp(0)
b9.af(D.e0n,2.4,b8)
return!0
case"calculator":j=C.bA(D.eFl,A.hc)
$.W()
b8=C.M()
b8.saq(D.bTl.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bA(D.eFf,A.hb)
s=C.M()
s.r=(b7?A.Wv:D.bgj).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e2f,A.Vm,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bA(new C.a9(q,s,q+6,r),A.RT)
$.W()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cd:A.bR).gp(0)
n=p.H()
b8.drawRRect(C.er(q),n)
n.delete()}return!0
case"phone":j=C.bA(D.eFc,A.hc)
$.W()
b8=C.M()
b8.r=L.mV.gp(0)
b9.aD(j,b8)
b8=C.M()
b8.b=A.ae
b8.c=1.9
b8.r=D.af3.gp(0)
b9.aD(j,b8)
a0=C.bA(D.eF3,A.hC)
if(b7){b8=C.M()
b8.saq(D.bUV.av(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.er(a0),$.pm(),!0)
b8.translate(-12,-25)
E.KI(b9,D.eKN,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=C.bA(D.eF0,A.hb)
s=C.M()
s.r=A.aX.gp(0)
b9.aD(b8,s)
s=C.M()
s.r=A.b4.gp(0)
b9.aX(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e1x,A.c,6)}else{b8=C.M()
b8.r=D.uZ.gp(0)
b9.aD(a0,b8)}b8=C.bA(D.eFX,D.ebp)
s=C.M()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=C.bA(D.eFE,A.rq)
$.W()
b8=C.M()
b8.saq(D.bTT.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.awC[a2]
s=a3<0?-4:4
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.cC.gp(0)
r.c=4
r.d=A.bO
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bu(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bo:A.aK).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bT(D.vW,8+u*6+A.k.F(s,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hv.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c0(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bA(D.eFk,A.hC)
s=$.W()
r=C.M()
r.r=A.eu.gp(0)
b9.aD(b8,r)
if(b7){b8=C.M()
b8.r=A.ay.j(0.5*a5).gp(0)
b8.z=A.yL
b9.af(A.vV,34,b8)}a6=new C.aO(s.r,A.ap,b6,b6,C.a([],x.v))
a6.E(new C.b5(-16,12))
a6.E(new C.ap(-16,-2))
a6.E(new C.cS(0,-30,16,-2))
a6.E(new C.ap(16,12))
a6.E(new C.bF())
b8=C.M()
b8.r=C.aq(A.er,D.b8P,a5).gp(0)
b9.aP(a6,b8)
b8=C.M()
b8.b=A.ae
b8.c=1.4
b8.r=A.c_.gp(0)
b9.aP(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.iX(0,c1*7)
s=C.M()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bA(A.J,D.aFw,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.by(b8.save())
b8.translate(0,a7)
s=$.W().r
r=x.v
j=new C.aO(s,A.ap,b6,b6,C.a([],r))
j.E(new C.b5(-28,8))
j.E(new C.ap(-28,-2))
j.E(new C.ap(-16,-4))
j.E(new C.ap(-10,-16))
j.E(new C.ap(10,-16))
j.E(new C.ap(18,-4))
j.E(new C.ap(28,-2))
j.E(new C.ap(28,8))
j.E(new C.bF())
q=C.M()
q.saq(D.bRZ.av(0,D.eFx))
b9.aP(j,q)
q=new C.aO(s,A.ap,b6,b6,C.a([],r))
q.E(new C.b5(-8,-4))
q.E(new C.ap(-4,-13))
q.E(new C.ap(4,-13))
q.E(new C.ap(4,-4))
q.E(new C.bF())
p=C.M()
p.r=A.fi.gp(0)
b9.aP(q,p)
r=new C.aO(s,A.ap,b6,b6,C.a([],r))
r.E(new C.b5(8,-4))
r.E(new C.ap(8,-13))
r.E(new C.ap(11,-13))
r.E(new C.ap(15,-4))
r.E(new C.bF())
s=C.M()
s.r=A.fi.gp(0)
b9.aP(r,s)
for(a2=0;a2<2;++a2){a3=D.d7p[a2]
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.aB.gp(0)
n=s.H()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.by(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.bR.gp(0)
q.c=1.6
n=q.H()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.F(s+u*8,14)
q=-4+u*5
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.az.gp(0)
p.c=1.6
n=p.H()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.W().r
s=x.v
j=new C.aO(b8,A.ap,b6,b6,C.a([],s))
j.E(new C.b5(-18,20))
j.E(new C.ap(-14,-12))
j.E(new C.cS(0,-20,14,-12))
j.E(new C.ap(18,20))
j.E(new C.bF())
r=C.M()
r.saq(D.bT1.av(0,D.eFj))
b9.aP(j,r)
r=new C.aO(b8,A.ap,b6,b6,C.a([],s))
r.E(new C.b5(14,-10))
r.E(new C.ap(30,-22))
r.E(new C.ap(32,-18))
r.E(new C.ap(16,-4))
r.E(new C.bF())
q=C.M()
q.r=A.e_.gp(0)
b9.aP(r,q)
s=new C.aO(b8,A.ap,b6,b6,C.a([],s))
s.E(new C.b5(-14,-8))
s.E(new C.cS(-34,-6,-18,12))
b8=C.M()
b8.b=A.ae
b8.c=5
b8.r=A.aB.gp(0)
b9.aP(s,b8)
b8=C.M()
if(b7){s=C.aq(A.ct,A.uY,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.eu
b8.r=s.gp(0)
b9.aX(D.eFi,b8)
if(b7){b8=C.M()
b8.r=A.ct.j(0.3).gp(0)
b8.z=A.ln
b9.af(A.aFs,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.M()
b8.r=A.aB.gp(0)
b9.af(D.e_F,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aO($.W().r,A.ap,b6,b6,C.a([],x.v))
b8.E(new C.b5(-10,-14))
b8.E(new C.ap(-30,24))
b8.E(new C.ap(10,24))
b8.E(new C.ap(8,-14))
b8.E(new C.bF())
s=C.M()
s.r=A.dN.j(0.28*u).gp(0)
b9.aP(b8,s)
s=C.M()
s.r=A.dN.j(0.5*u).gp(0)
s.z=Y.He
b9.af(D.e2C,24,s)}b8=C.bA(D.eFT,A.hC)
s=$.W()
r=C.M()
r.r=A.eu.gp(0)
b9.aD(b8,r)
r=C.M()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.e_T,D.aFC,r)
r=C.M()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.aFC,D.e2D,r)
a9=new C.aO(s.r,A.ap,b6,b6,C.a([],x.v))
a9.E(new C.b5(-14,-16))
a9.E(new C.ap(6,-26))
a9.E(new C.ap(10,-12))
a9.E(new C.ap(-10,-6))
a9.E(new C.bF())
s=C.M()
s.r=(b7?A.aM:A.jQ).gp(0)
b9.aP(a9,s)
b8=C.M()
b8.r=(b7?A.c:A.bn).gp(0)
b9.af(D.e2E,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aO(b8,A.ap,b6,b6,C.a([],s))
b0.E(new C.b5(-34,-6))
b0.E(new C.cS(0,22,34,-6))
r=C.M()
r.b=A.ae
r.c=2
r.r=A.hg.gp(0)
b9.aP(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a1r[u].j(0.6).gp(0)
b3.z=A.QB
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aO(b8,A.ap,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cS(p,o+17,p-5,b5))
b3.push(new C.bF())
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a1r[u]
else{o=C.aq(D.a1r[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbK().a.snapshot()
r.drawPath((b4.e=new C.cF(p)).a,n)
n.delete()}return!0}return B.i3f(b9,c0,c1,c2)},
fJ:function fJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fVK(d){var w=D.lS.h(0,d)
return(w==null?null:w.b)===D.za},
i4o(d,e,f){return C.a6(d,!1).c8(C.ux(null,!1,!0,!0,new B.fHt(e,f),A.eN,null,A.pB,new B.fHu(),x.H))},
IR:function IR(d,e){this.a=d
this.b=e},
m2:function m2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHt:function fHt(d,e){this.a=d
this.b=e},
fHu:function fHu(){},
U1:function U1(d,e,f){this.c=d
this.d=e
this.a=f},
bi4:function bi4(d,e){var _=this
_.d=$
_.e=null
_.bq$=d
_.a8$=e
_.c=_.a=null},
dLV:function dLV(d){this.a=d},
dLU:function dLU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLS:function dLS(){},
dLT:function dLT(d){this.a=d},
dLR:function dLR(d){this.a=d},
dLQ:function dLQ(d,e){this.a=d
this.b=e},
dLP:function dLP(d,e){this.a=d
this.b=e},
dLO:function dLO(d){this.a=d},
dLN:function dLN(d){this.a=d},
dLJ:function dLJ(d){this.a=d},
dLI:function dLI(d){this.a=d},
dLM:function dLM(d,e,f){this.a=d
this.b=e
this.c=f},
dLL:function dLL(d){this.a=d},
dLK:function dLK(d){this.a=d},
btF:function btF(d,e,f){this.b=d
this.c=e
this.a=f},
adL:function adL(d,e,f){this.b=d
this.c=e
this.a=f},
aKd:function aKd(){},
fgF(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.an,C.d(e,w,w,w,w,w,w,A.zq,A.L,w,w),A.aA,C.bY(A.fQ,g,A.br,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.Vu,w,u,v,w,w,A.n),w,w,w,A.ew,A.a9,w,w,w),w,w,w)},
fVQ(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eJ()
b4.dB(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aB(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.T(u,t)
m=w
l=0
k=N.my
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aB(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(A.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.ha()?new C.y(f,-g):new C.y(-f,g)
a3=new C.y(-f,-g).A(0,a2)
a4=l+a2.a
a5=r+a2.b
if(a4<0||a5<0||a4>=7||a5>=7)break A
o.push(r*7+l);--m
g=A.d.gal(o)
n.n(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=C.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.L)(p),++a6){a7=p[a6]
if(!A.d.t(o,a7))g.push(a7)}if(g.length<3)continue
a8=A.o.D(2+A.o.an(b5,8),2,4)
a9=C.et([A.d.gal(g)],u)
A.d.ft(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.L)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.K(0,a7)}b0=C.aX(u)
b1=3+A.o.an(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aB(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.K(0,a7)}}v=b5>=10?1:0
return new B.aVh(b0,a9,C.T(u,t),q,N.my,w+v)}return new B.aVh(C.aX(u),C.et([25],u),C.T(u,t),21,N.my,1)},
hjZ(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.F(n,7),l=A.o.an(n,7),k=d.f
p.push(n)
for(n=d.c,w=d.b,v=d.d,u=0;u<200;++u){t=k.a
m+=t
s=k.b
l+=s
if(m<0||l<0||m>=7||l>=7)break
r=l*7+m
if(w.t(0,r))break
p.push(r)
if(n.t(0,r))o.K(0,r)
q=e.h(0,r)
if(q==null)q=v.h(0,r)
if(q==="/")k=new C.y(-s,-t)
if(q==="\\")k=new C.y(k.b,k.a)}return new C.bmW(p,o)},
hfp(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aVh:function aVh(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
UQ:function UQ(d){this.a=d},
biE:function biE(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fk$=g
_.kX$=h
_.fQ$=i
_.fl$=j
_.bq$=k
_.a8$=l
_.c=_.a=null},
e6J:function e6J(d){this.a=d},
e6I:function e6I(d,e){this.a=d
this.b=e},
e6K:function e6K(){},
e6z:function e6z(d,e){this.a=d
this.b=e},
e6A:function e6A(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e6D:function e6D(d,e){this.a=d
this.b=e},
e6B:function e6B(d){this.a=d},
e6C:function e6C(d){this.a=d},
e6E:function e6E(d){this.a=d},
e6F:function e6F(d){this.a=d},
e6G:function e6G(d){this.a=d},
e6H:function e6H(d,e){this.a=d
this.b=e},
bfE:function bfE(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
df7:function df7(d,e,f){this.a=d
this.b=e
this.c=f},
dfa:function dfa(d,e,f){this.a=d
this.b=e
this.c=f},
df8:function df8(d){this.a=d},
df9:function df9(d){this.a=d},
US:function US(d){this.a=d},
aCH:function aCH(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fk$=g
_.kX$=h
_.fQ$=i
_.fl$=j
_.bq$=k
_.a8$=l
_.c=_.a=null},
e71:function e71(d){this.a=d},
e70:function e70(d,e){this.a=d
this.b=e},
e72:function e72(){},
e6N:function e6N(){},
e6W:function e6W(d,e){this.a=d
this.b=e},
e6T:function e6T(d){this.a=d},
e6P:function e6P(d){this.a=d},
e6U:function e6U(d){this.a=d},
e6V:function e6V(d){this.a=d},
e6O:function e6O(d){this.a=d},
e6X:function e6X(d){this.a=d},
e6S:function e6S(d,e){this.a=d
this.b=e},
e6Y:function e6Y(d){this.a=d},
e6R:function e6R(d,e){this.a=d
this.b=e},
e6Z:function e6Z(d){this.a=d},
e6Q:function e6Q(d,e){this.a=d
this.b=e},
e7_:function e7_(d){this.a=d},
bfT:function bfT(d,e){this.b=d
this.a=e},
aKF:function aKF(){},
bvF:function bvF(){},
aKG:function aKG(){},
bvG:function bvG(){},
a03(d,e,f,g,h,i){return new B.bsu(d,e,f,g,h,i)},
bsu:function bsu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fd4:function fd4(){},
fd5:function fd5(){},
fd6:function fd6(){},
fd7:function fd7(){},
fd8:function fd8(){},
fd9:function fd9(){},
fda:function fda(){},
fdb:function fdb(){},
a7w:function a7w(d){this.a=d},
cdU:function cdU(d){this.a=d},
cdV:function cdV(){},
cdT:function cdT(d,e){this.a=d
this.b=e},
cdS:function cdS(d){this.a=d},
VJ:function VJ(d){this.a=d},
aDy:function aDy(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fk$=f
_.kX$=g
_.fQ$=h
_.fl$=i
_.bq$=j
_.a8$=k
_.c=_.a=null},
eFV:function eFV(d){this.a=d},
eFR:function eFR(d){this.a=d},
eFQ:function eFQ(d,e){this.a=d
this.b=e},
eFT:function eFT(d,e){this.a=d
this.b=e},
eFS:function eFS(d,e){this.a=d
this.b=e},
eFU:function eFU(d){this.a=d},
btR:function btR(d,e,f){this.b=d
this.c=e
this.a=f},
Ur:function Ur(d){this.a=d},
bid:function bid(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fk$=d
_.kX$=e
_.fQ$=f
_.fl$=g
_.bq$=h
_.a8$=i
_.c=_.a=null},
dSc:function dSc(){},
dSd:function dSd(){},
dS7:function dS7(d,e){this.a=d
this.b=e},
dS9:function dS9(d,e){this.a=d
this.b=e},
dSa:function dSa(d){this.a=d},
dS8:function dS8(d){this.a=d},
dSb:function dSb(d){this.a=d},
boH:function boH(d,e,f){this.b=d
this.c=e
this.a=f},
TE:function TE(d){this.a=d},
bhQ:function bhQ(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fk$=d
_.kX$=e
_.fQ$=f
_.fl$=g
_.bq$=h
_.a8$=i
_.c=_.a=null},
dD2:function dD2(){},
dD3:function dD3(){},
dCY:function dCY(){},
dD0:function dD0(d,e){this.a=d
this.b=e},
dD_:function dD_(d,e){this.a=d
this.b=e},
dD1:function dD1(d){this.a=d},
dCZ:function dCZ(d){this.a=d},
aGW:function aGW(d,e,f){this.a=d
this.b=e
this.c=f},
Ui:function Ui(d){this.a=d},
bi7:function bi7(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dPt:function dPt(d,e){this.a=d
this.b=e},
dPu:function dPu(d){this.a=d},
dPs:function dPs(d,e){this.a=d
this.b=e},
dPv:function dPv(d){this.a=d},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPw:function dPw(d){this.a=d},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPx:function dPx(d,e){this.a=d
this.b=e},
dPp:function dPp(d,e){this.a=d
this.b=e},
dPy:function dPy(d){this.a=d},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPz:function dPz(d){this.a=d},
dPn:function dPn(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPm:function dPm(d){this.a=d},
dPB:function dPB(d){this.a=d},
dPC:function dPC(d){this.a=d},
dPl:function dPl(d){this.a=d},
bk9:function bk9(d,e,f){this.b=d
this.c=e
this.a=f},
V3:function V3(d){this.a=d},
aCR:function aCR(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eco:function eco(d,e){this.a=d
this.b=e},
ecp:function ecp(d,e,f){this.a=d
this.b=e
this.c=f},
ecn:function ecn(d,e,f){this.a=d
this.b=e
this.c=f},
ecq:function ecq(d){this.a=d},
ecm:function ecm(d){this.a=d},
ecu:function ecu(d){this.a=d},
ect:function ect(d,e){this.a=d
this.b=e},
ecs:function ecs(d,e){this.a=d
this.b=e},
ecv:function ecv(d,e){this.a=d
this.b=e},
ecr:function ecr(d,e){this.a=d
this.b=e},
ecw:function ecw(d){this.a=d},
Vh:function Vh(d){this.a=d},
aDc:function aDc(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
emV:function emV(d){this.a=d},
emW:function emW(d){this.a=d},
emT:function emT(d,e){this.a=d
this.b=e},
emU:function emU(d){this.a=d},
emS:function emS(d){this.a=d},
emX:function emX(d){this.a=d},
emY:function emY(d){this.a=d},
emZ:function emZ(d){this.a=d},
en_:function en_(d,e){this.a=d
this.b=e},
VC:function VC(d){this.a=d},
bjl:function bjl(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eBc:function eBc(){},
eBl:function eBl(){},
eBh:function eBh(d){this.a=d},
eBg:function eBg(){},
eBi:function eBi(d,e){this.a=d
this.b=e},
eBf:function eBf(d,e){this.a=d
this.b=e},
eBj:function eBj(d){this.a=d},
eBe:function eBe(d,e){this.a=d
this.b=e},
eBk:function eBk(d){this.a=d},
eBd:function eBd(d){this.a=d},
V1:function V1(d){this.a=d},
biP:function biP(d,e,f,g,h,i,j,k){var _=this
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
_.fk$=f
_.kX$=g
_.fQ$=h
_.fl$=i
_.bq$=j
_.a8$=k
_.c=_.a=null},
eb3:function eb3(){},
eb4:function eb4(){},
eaX:function eaX(d){this.a=d},
eaW:function eaW(d){this.a=d},
eaY:function eaY(d){this.a=d},
eaV:function eaV(d){this.a=d},
eaZ:function eaZ(d){this.a=d},
eaU:function eaU(d){this.a=d},
eb_:function eb_(d,e){this.a=d
this.b=e},
eaT:function eaT(d,e){this.a=d
this.b=e},
eb0:function eb0(d){this.a=d},
eaS:function eaS(d,e){this.a=d
this.b=e},
eb1:function eb1(d){this.a=d},
eaR:function eaR(d,e){this.a=d
this.b=e},
eb2:function eb2(d){this.a=d},
eaQ:function eaQ(d,e){this.a=d
this.b=e},
bbQ:function bbQ(d,e,f){this.c=d
this.d=e
this.a=f},
aK0:function aK0(){},
bvw:function bvw(){},
aKj:function aKj(){},
bvB:function bvB(){},
aKO:function aKO(){},
bvL:function bvL(){},
aLh:function aLh(){},
bvX:function bvX(){},
jF(d,e,f,g,h,i){return new B.b5s(h,d,f,g,i,e,null)},
hjQ(d,e,f,g){var w=null
return C.ca(w,w,!0,w,new B.fLj(g,e,f),d,w,!0,!0,x.H)},
hy(d,e,f,g,h,i,j){return new B.auy(f,j,i,h,g,d,e,null)},
qL(d,e,f){return B.i5d(d,e,f)},
i5d(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qL=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aU.ak$.x.h(0,e)
n=n==null?null:n.gb8()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lT(2),$async$qL)
case 7:q=h
w=8
return C.b(q.hq(A.fX),$async$qL)
case 8:p=h
if(p==null){w=1
break}o=J.eR(A.dD.gaM(p))
w=9
return C.b(B.coO(C.a([B.h8S(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qL)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.R(D.aNq)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qL,v)},
lf(d,e,f,g){var w,v=$.aqI
if(v==="music")return E.dF(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dF(261.63*v,w,f,0,g,"sine")}return B.vM(v,e,f,g)},
vM(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dF(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dF(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dF(140+A.o.F(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dF(260+A.o.F(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dF(t,"",160,-0.7,g*0.4,w)
return E.dF(900,"",90,0,g*0.45,u)
case"zap":return E.dF(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dF(2600+A.o.F(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dF(320,"",220,-0.7,g*0.35,v)
return E.dF(1500,"",200,0,g*0.22,u)
case"organic":return E.dF(85+A.o.F(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dF(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dF(t,"",s,0,g*0.5,w)}},
Bj(d,e,f,g){var w,v,u,t,s,r,q,p=$.aqI
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.L)(e),++w)B.lf(d,e[w],f,g)
return}for(p=C.dd(e,0,C.dJ(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bR(p,p.gM(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.lf(d,s,f,g)
else C.bN(new C.b9(1000*q),new B.cdQ(d,s,f,g),u)}},
a7v(d,e){var w="sine",v="noise"
switch(d){case"kick":E.dF(95,"",200,1.8,e,w)
break
case"snare":E.dF(220,"",140,0,e*0.65,v)
break
case"hat":E.dF(5000,"",50,0,e*0.35,v)
break
case"open":E.dF(5200,"",220,0,e*0.35,v)
break
case"clap":E.dF(1100,"",100,0,e*0.5,v)
break
case"tom":E.dF(150,"",230,1,e,w)
break
case"low":E.dF(100,"",260,0.9,e,w)
break
case"rim":E.dF(1700,"",60,0,e*0.4,"square")
break
case"cow":E.dF(820,"",240,0,e*0.3,"square")
break
case"crash":E.dF(3200,"",650,0,e*0.4,v)
break
case"shake":E.dF(7000,"",90,0,e*0.3,v)
break
default:E.dF(60,"",300,0,e,w)}},
za(d){return B.hAL(d)},
hAL(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$za=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$za)
case 7:r=f
q=C.aT(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.T(x.N,x.z)
w=1
break}p=A.R.aG(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.a1(p,o,n):C.T(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=C.T(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$za,v)},
vJ(d,e){return B.hAM(d,e)},
hAM(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vJ=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$vJ)
case 6:s=g
w=7
return C.b(s.au("String","ngmy_play_progress_v1_"+d,A.R.ao(e,null)),$async$vJ)
case 7:u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$vJ,v)},
b5s:function b5s(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cqL:function cqL(d){this.a=d},
cqM:function cqM(d,e){this.a=d
this.b=e},
fLj:function fLj(d,e,f){this.a=d
this.b=e
this.c=f},
fLi:function fLi(d){this.a=d},
dA:function dA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cqH:function cqH(d){this.a=d},
eO:function eO(d,e,f){this.c=d
this.d=e
this.a=f},
auy:function auy(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fg:function fg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cqG:function cqG(d){this.a=d},
ET:function ET(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cqN:function cqN(d){this.a=d},
my:function my(){},
cqI:function cqI(d,e,f){this.a=d
this.b=e
this.c=f},
cqK:function cqK(d){this.a=d},
cqJ:function cqJ(){},
cdQ:function cdQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cth(){var w=0,v=C.j(x.cL),u,t
var $async$cth=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qM().bek("assets/data/world110.json"),$async$cth)
case 3:u=t.hFi(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cth,v)},
hFi(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aG(0,a2,null)),a1=C.a([],x.F)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gS(w))
q=C.a([],s)
for(p=J.a5(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gS(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gS(l)
j=J.a5(k)
m.push(C.a([C.dQ(j.h(k,0)),C.dQ(j.h(k,1))],v))}q.push(m)}o=C.cO(p.h(r,"n"))
m=C.cO(p.h(r,"a"))
l=C.cO(p.h(r,"ct"))
j=C.cO(p.h(r,"sr"))
i=C.dQ(p.h(r,"pop"))
h=C.dQ(p.h(r,"gdp"))
g=C.cO(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aPb(g,f,"",0)
f=C.dQ(J.q(p.h(r,"c"),0))
p=C.dQ(J.q(p.h(r,"c"),1))
e=new B.aaf(o,m,l,j,i,h,g,f,p,q)
e.bwx(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aag(a1)},
fp4(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
Go(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aaf:function aaf(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ay=_.ax=_.at=_.as=_.Q=_.z=$},
aag:function aag(d){this.a=d},
uS:function uS(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.z=n},
OD:function OD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xL:function xL(d,e,f){this.a=d
this.b=e
this.c=f},
OC:function OC(d){this.a=0
this.b=d
this.c=0},
hHb(d,e,f){return $.hHc.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.daS(d,e,f))},
Uy:function Uy(d){this.a=d},
aCd:function aCd(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=g
_.x=15
_.y=10
_.z=1
_.as=_.Q=0
_.ay=_.ax=_.at=null
_.db=_.cy=_.cx=_.CW=_.ch=!0
_.dx=!1
_.dy=14
_.fr=172
_.fx=null
_.fy=h
_.go=1
_.id=i
_.fk$=j
_.kX$=k
_.fQ$=l
_.fl$=m
_.bq$=n
_.a8$=o
_.c=_.a=null},
dUV:function dUV(d){this.a=d},
dUU:function dUU(d,e){this.a=d
this.b=e},
dUn:function dUn(d){this.a=d},
dUl:function dUl(d){this.a=d},
dUm:function dUm(d,e,f){this.a=d
this.b=e
this.c=f},
dUk:function dUk(d){this.a=d},
dUj:function dUj(){},
dUi:function dUi(d){this.a=d},
dUG:function dUG(d,e){this.a=d
this.b=e},
dUH:function dUH(d,e){this.a=d
this.b=e},
dUv:function dUv(d){this.a=d},
dUw:function dUw(d){this.a=d},
dUu:function dUu(d){this.a=d},
dUx:function dUx(d){this.a=d},
dUo:function dUo(d,e){this.a=d
this.b=e},
dUp:function dUp(d){this.a=d},
dUI:function dUI(d,e){this.a=d
this.b=e},
dUt:function dUt(d,e){this.a=d
this.b=e},
dUM:function dUM(d){this.a=d},
dUF:function dUF(d){this.a=d},
dUN:function dUN(d,e){this.a=d
this.b=e},
dUE:function dUE(d,e){this.a=d
this.b=e},
dUO:function dUO(d){this.a=d},
dUD:function dUD(d,e){this.a=d
this.b=e},
dUP:function dUP(d){this.a=d},
dUC:function dUC(d,e){this.a=d
this.b=e},
dUQ:function dUQ(d){this.a=d},
dUB:function dUB(d,e){this.a=d
this.b=e},
dUR:function dUR(d){this.a=d},
dUA:function dUA(d,e){this.a=d
this.b=e},
dUS:function dUS(d){this.a=d},
dUz:function dUz(d){this.a=d},
dUT:function dUT(d){this.a=d},
dUy:function dUy(d){this.a=d},
dUJ:function dUJ(d){this.a=d},
dUs:function dUs(d){this.a=d},
dUK:function dUK(d){this.a=d},
dUr:function dUr(d){this.a=d},
dUL:function dUL(d){this.a=d},
dUq:function dUq(d){this.a=d},
dUh:function dUh(){},
dUg:function dUg(d){this.a=d},
dUf:function dUf(d){this.a=d},
be4:function be4(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.as=o
_.a=p},
daS:function daS(d,e,f){this.a=d
this.b=e
this.c=f},
daT:function daT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKp:function aKp(){},
aKq:function aKq(){},
aei(d,e,f,g,h){return new B.bsp(d,e,f,g,h)},
bsp:function bsp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fcY:function fcY(){},
fcZ:function fcZ(){},
fd_:function fd_(){},
fd0:function fd0(){},
fd1:function fd1(){},
fd2:function fd2(){},
fd3:function fd3(){},
VF:function VF(d){this.a=d},
bjp:function bjp(){this.d=$
this.c=this.a=null},
eC5:function eC5(d){this.a=d},
eC6:function eC6(d){this.a=d},
eC4:function eC4(d){this.a=d},
eC7:function eC7(){},
eC3:function eC3(d,e){this.a=d
this.b=e},
eC2:function eC2(d){this.a=d},
hHD(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eJ()
v.dB(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eJ()
v.dB(w+900)
u.push(2.2+v.aj())}return new B.bjb(new C.cs(null,x.A),new B.OC(A.cI),A.J,A.au,t,u,$,A.bw,0,C.a([],x.X),null,null)},
hHF(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hHE(d){return 1.5+1.6*Math.log(d.d/1000+1)},
ha3(d,e,f){return $.hIe.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.eWh(d,e,f))},
Vq:function Vq(d){this.a=d},
bjb:function bjb(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.d=d
_.e=e
_.f=0
_.r=30
_.w=1
_.x=f
_.y=1
_.Q=_.z=null
_.ay=_.ax=_.at=_.as=!0
_.ch=g
_.CW=h
_.cx=i
_.fk$=j
_.kX$=k
_.fQ$=l
_.fl$=m
_.bq$=n
_.a8$=o
_.c=_.a=null},
eu8:function eu8(d,e){this.a=d
this.b=e},
euj:function euj(d,e){this.a=d
this.b=e},
euk:function euk(d,e){this.a=d
this.b=e},
eug:function eug(d){this.a=d},
euh:function euh(d){this.a=d},
eui:function eui(d){this.a=d},
eul:function eul(d){this.a=d},
euf:function euf(d){this.a=d},
eum:function eum(d,e){this.a=d
this.b=e},
eun:function eun(d){this.a=d},
eue:function eue(d,e){this.a=d
this.b=e},
euo:function euo(d){this.a=d},
eud:function eud(d,e){this.a=d
this.b=e},
eup:function eup(d){this.a=d},
euc:function euc(d){this.a=d},
euq:function euq(d){this.a=d},
eub:function eub(d){this.a=d},
eur:function eur(d){this.a=d},
eua:function eua(d){this.a=d},
eus:function eus(d){this.a=d},
eu9:function eu9(d){this.a=d},
eu7:function eu7(){},
eu6:function eu6(){},
eu5:function eu5(d){this.a=d},
eu4:function eu4(d){this.a=d},
bqt:function bqt(d,e){this.b=d
this.a=e},
eWh:function eWh(d,e,f){this.a=d
this.b=e
this.c=f},
eWi:function eWi(){},
eWj:function eWj(){},
Uz:function Uz(d){this.a=d},
aCe:function aCe(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.d="drop"
_.e=d
_.r=_.f=!1
_.w=0.4
_.x=!1
_.y=0
_.z=e
_.Q=f
_.as=g
_.at=50
_.ax=0.5
_.ay=7
_.ch=2
_.CW=!1
_.cx=h
_.cy=i
_.db=j
_.dx=""
_.dy=0
_.fk$=k
_.kX$=l
_.fQ$=m
_.fl$=n
_.bq$=o
_.a8$=p
_.c=_.a=null},
dUZ:function dUZ(){},
dVr:function dVr(){},
dVd:function dVd(d,e){this.a=d
this.b=e},
dV4:function dV4(d,e){this.a=d
this.b=e},
dVe:function dVe(d){this.a=d},
dV3:function dV3(d){this.a=d},
dVf:function dVf(d){this.a=d},
dVc:function dVc(d){this.a=d},
dVj:function dVj(d){this.a=d},
dVb:function dVb(d){this.a=d},
dVk:function dVk(d){this.a=d},
dVa:function dVa(d,e){this.a=d
this.b=e},
dVl:function dVl(d){this.a=d},
dVm:function dVm(d){this.a=d},
dV9:function dV9(d,e){this.a=d
this.b=e},
dVn:function dVn(d){this.a=d},
dV8:function dV8(d,e){this.a=d
this.b=e},
dVo:function dVo(d){this.a=d},
dV7:function dV7(d,e){this.a=d
this.b=e},
dVp:function dVp(d){this.a=d},
dV6:function dV6(d,e){this.a=d
this.b=e},
dVq:function dVq(d){this.a=d},
dV5:function dV5(d){this.a=d},
dVg:function dVg(d){this.a=d},
dV2:function dV2(d){this.a=d},
dVh:function dVh(d){this.a=d},
dV1:function dV1(d){this.a=d},
dVi:function dVi(d){this.a=d},
dV0:function dV0(d){this.a=d},
dUY:function dUY(d){this.a=d},
dUX:function dUX(){},
dV_:function dV_(d,e){this.a=d
this.b=e},
dUW:function dUW(d){this.a=d},
b9h:function b9h(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Vi:function Vi(d){this.a=d},
bj8:function bj8(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fk$=e
_.kX$=f
_.fQ$=g
_.fl$=h
_.bq$=i
_.a8$=j
_.c=_.a=null},
en2:function en2(d,e){this.a=d
this.b=e},
en3:function en3(d,e){this.a=d
this.b=e},
en1:function en1(d,e){this.a=d
this.b=e},
en4:function en4(d,e){this.a=d
this.b=e},
en0:function en0(d,e){this.a=d
this.b=e},
bq1:function bq1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eUr:function eUr(d){this.a=d},
aKr:function aKr(){},
bvD:function bvD(){},
aL_:function aL_(){},
bvR:function bvR(){},
aL2:function aL2(){},
bvT:function bvT(){},
hHB(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eJ()
v.dB(w)
v=v.aj()
u=new C.eJ()
u.dB(w+500)
s.push(new C.u(v,u.aj()))}return new B.bhP(new C.cs(null,x.A),new B.OC(A.cI),t,A.au,s,$,A.bw,0,C.a([],x.X),null,null)},
P4:function P4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
TC:function TC(d){this.a=d},
bhP:function bhP(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fk$=i
_.kX$=j
_.fQ$=k
_.fl$=l
_.bq$=m
_.a8$=n
_.c=_.a=null},
dCu:function dCu(){},
dCi:function dCi(){},
dCj:function dCj(d,e){this.a=d
this.b=e},
dCk:function dCk(d,e){this.a=d
this.b=e},
dCh:function dCh(d){this.a=d},
dCg:function dCg(d){this.a=d},
dCm:function dCm(d){this.a=d},
dCf:function dCf(d,e){this.a=d
this.b=e},
dCn:function dCn(d){this.a=d},
dCe:function dCe(d){this.a=d},
dCo:function dCo(d){this.a=d},
dCd:function dCd(d){this.a=d},
dCp:function dCp(d){this.a=d},
dCc:function dCc(d){this.a=d},
dCq:function dCq(d){this.a=d},
dCb:function dCb(d){this.a=d},
dCr:function dCr(d){this.a=d},
dCa:function dCa(d){this.a=d},
dCs:function dCs(d){this.a=d},
dC9:function dC9(d){this.a=d},
dCt:function dCt(d){this.a=d},
dC8:function dC8(d){this.a=d},
dCl:function dCl(d){this.a=d},
dC7:function dC7(d){this.a=d},
b8G:function b8G(d,e){this.b=d
this.a=e},
adX:function adX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Uv:function Uv(d){this.a=d},
big:function big(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
_.d=d
_.e=e
_.f=2
_.r=3.2
_.w=0
_.x=!1
_.z=_.y=!0
_.Q="spiral"
_.as=0.75
_.at=0
_.ax=1
_.ay=f
_.ch=!1
_.CW=g
_.cx=h
_.cy=i
_.db=j
_.dx=k
_.dy=l
_.fr=m
_.fx=n
_.fy=o
_.fk$=p
_.kX$=q
_.fQ$=r
_.fl$=s
_.bq$=t
_.a8$=u
_.c=_.a=null},
dTw:function dTw(d){this.a=d},
dTm:function dTm(d,e){this.a=d
this.b=e},
dTn:function dTn(d,e){this.a=d
this.b=e},
dTl:function dTl(d,e){this.a=d
this.b=e},
dTo:function dTo(d){this.a=d},
dTk:function dTk(d){this.a=d},
dTp:function dTp(d){this.a=d},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTq:function dTq(d){this.a=d},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTr:function dTr(d){this.a=d},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTs:function dTs(d){this.a=d},
dTg:function dTg(d,e){this.a=d
this.b=e},
dTt:function dTt(d){this.a=d},
dTf:function dTf(d){this.a=d},
dTu:function dTu(d){this.a=d},
dTe:function dTe(d){this.a=d},
dTv:function dTv(d){this.a=d},
dTd:function dTd(d){this.a=d},
bdV:function bdV(d,e){this.b=d
this.a=e},
d8_:function d8_(d){this.a=d},
Ve:function Ve(d){this.a=d},
bj7:function bj7(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fk$=f
_.kX$=g
_.fQ$=h
_.fl$=i
_.bq$=j
_.a8$=k
_.c=_.a=null},
emh:function emh(d,e){this.a=d
this.b=e},
emi:function emi(d){this.a=d},
emg:function emg(d){this.a=d},
emj:function emj(d){this.a=d},
emf:function emf(d){this.a=d},
emk:function emk(d){this.a=d},
eme:function eme(d){this.a=d},
eml:function eml(d){this.a=d},
emd:function emd(d){this.a=d},
emm:function emm(d){this.a=d},
emc:function emc(d,e){this.a=d
this.b=e},
emn:function emn(d){this.a=d},
emb:function emb(d,e){this.a=d
this.b=e},
emo:function emo(d){this.a=d},
ema:function ema(d,e){this.a=d
this.b=e},
emp:function emp(d){this.a=d},
em9:function em9(d,e){this.a=d
this.b=e},
bph:function bph(d,e){this.b=d
this.a=e},
aJY:function aJY(){},
bvv:function bvv(){},
aKm:function aKm(){},
bvC:function bvC(){},
aKZ:function aKZ(){},
bvQ:function bvQ(){},
h8S(d,e,f){var w,v
C.fQ(0,0,!1)
w=new C.li(e,f,$,null)
v=w.bGD(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hVa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.L)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.nU(A.k.aa(p.c,4)),"y",C.nU(A.k.aa(p.d,4)),"v",p.e,"l",C.nU(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nU(A.k.aa(p.as,3)),"ch",p.at,"vc",C.nU(A.k.aa(p.z,3)),"s",C.nU(A.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.B(f,C.a3(f).k("co.E"))
A.d.fi(l)
return A.R.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i3B(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.R.aG(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a9(h)
A.d.a9(a6.b)
v=C.a([],x.fs)
g=x.L
f=g.a(J.q(w,"parts"))
f=J.aV(f==null?A.cu:f)
while(f.C()){u=f.gS(f)
t=i.a(u)
e=C.aT(J.q(t,"k"))
s=e==null?"":e
if(!$.q7().ai(0,s)){J.ch(v,null)
continue}d=s
a0=C.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.ti(a2,d,a0,a1)
a3.ap5(a2,d,a0,a1)
h.push(a3)
r=a3
a1=C.aJ(J.q(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=C.aJ(J.q(t,"l"))
if(d==null)d=r.f
r.f=d
d=C.aJ(J.q(t,"o"))
if(d==null)d=r.r
r.r=d
d=C.kd(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.kd(J.q(t,"b"))
r.x=d===!0
d=C.aT(J.q(t,"bw"))
if(d==null)d=""
r.ay=d
d=C.aJ(J.q(t,"c"))
if(d==null)d=r.as
r.as=d
d=C.aJ(J.q(t,"ch"))
r.at=A.k.N(d==null?0:d)
d=C.aJ(J.q(t,"vc"))
if(d==null)d=0
r.z=d
d=C.aJ(J.q(t,"s"))
r.ch=A.k.D(d==null?1:d,1,2.6)
J.ch(v,r)}i=g.a(J.q(w,"wires"))
i=J.aV(i==null?A.cu:i)
h=x.j
while(i.C()){q=i.gS(i)
p=h.a(q)
f=C.aJ(J.q(p,0))
o=f==null?a5:A.k.N(f)
f=C.aJ(J.q(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.ajF(m,A.k.N(C.dQ(J.q(p,1))),l,A.k.N(C.dQ(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cu:h)
while(h.C()){j=h.gS(h)
J.ch(k,A.k.N(C.dQ(j)))}return new C.bmX(i,k)}catch(a4){return a5}},
fqR(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fqR=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.az(),$async$fqR)
case 7:r=o.aT(n.q(e.a,"ngmy_electronics_lab_v1"))
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
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$fqR,v)},
bCj(d){return B.i59(d)},
i59(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bCj=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.az(),$async$bCj)
case 7:w=6
return C.b(f.au("String","ngmy_electronics_lab_v1",d),$async$bCj)
case 6:u=1
w=5
break
case 3:u=2
r=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$bCj,v)},
coO(d,e){var w=0,v=C.j(x.g7),u
var $async$coO=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fYr().wQ(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$coO,v)}},D,T,H,R,Z,A9,Aa,An,A_
J=c[1]
C=c[0]
A=c[2]
A0=c[131]
A1=c[141]
Ab=c[140]
A2=c[132]
A3=c[128]
I=c[120]
P=c[112]
A4=c[116]
Ac=c[134]
A5=c[137]
A6=c[113]
G=c[123]
Ad=c[118]
Ae=c[133]
A7=c[136]
Af=c[67]
X=c[76]
Ag=c[83]
Ah=c[80]
Q=c[87]
N=c[106]
Ai=c[142]
Aj=c[108]
Y=c[119]
O=c[121]
U=c[138]
Ak=c[71]
Al=c[94]
V=c[139]
M=c[135]
A8=c[91]
W=c[107]
K=c[127]
S=c[92]
Am=c[24]
E=c[26]
F=c[93]
L=c[103]
B=a.updateHolder(c[17],B)
D=c[117]
T=c[130]
H=c[41]
R=c[125]
Z=c[124]
A9=c[129]
Aa=c[122]
An=c[126]
A_=c[98]
B.aiX.prototype={}
B.UL.prototype={
U(){return new B.biC(C.T(x.N,x.i),new C.ar(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mw(0,null,null))}}
B.biC.prototype={
gVx(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
this.ch.q()
this.a2()},
N1(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$N1=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.ak$.d.c
if(s!=null)s.jz()
p.bO(0,A.c4)
t.m(new B.e3J(t))
t.a.toString
p=t.gVx()
w=3
return C.b(B.bxR(B.hJr(q,B.hV1(p),o,t.ay)),$async$N1)
case 3:s=e
r=s==null?null:J.iT(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.hWr(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e3K(t,o,r))
$.aU.x1$.push(new B.e3L(t))
case 1:return C.h(u,v)}})
return C.i($async$N1,v)},
Xw(d){return this.bXo(d)},
aUj(){return this.Xw(null)},
bXo(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Xw=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.ak$.d.c
if(s!=null)s.jz()
t.f.saV(0,o)
t.m(new B.e3W(t))
E.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bxR(B.hQc(o)),$async$Xw)
case 3:r=n.a=m.i3j(f)
p.b=""
if(r!=null&&!B.hV2(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.hWs(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.aiX(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e3X(p,t))
t.c1C(p.a)
case 1:return C.h(u,v)}})
return C.i($async$Xw,v)},
c1C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
A.d.a9(w)
w=++m.as
v=m.gVx()
A.d.a9(v.a)
A.d.a9(v.b)
m.e.a9(0)
m.m(new B.e3S(m))
t=d.d
s=C.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e3Q(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e3T(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.L)(r),++u){p.$2(o,new B.e3U(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e3V(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.by.j(0.1),g=C.m(16),f=C.I(A.by.j(0.35),A.q,1)
if(m.x)j=C.A(C.a([D.eMe,A.bf,C.E(C.d(m.Q,l,l,l,l,l,l,A.SM,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.faq
else{w=C.E(C.d(k.a,l,l,l,l,l,l,Ad.Tg,l,l,l),1)
v=x.p
w=C.a([C.A(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eWH,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(A.v7,C.d(u,l,l,l,l,l,l,D.eZh,l,l,l),l))
w.push(A.cX)
w.push(C.d(k.b,l,l,l,l,l,l,F.D5,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.f0F,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.ib,A.cm,l,l,l))}w.push(A.an)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.az
w.push(new C.C(A.Ls,new C.cn(A.aO,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.mF,l,l,l,l,l,l,l,l,l),A.bp,new C.bD(1,A.bi,new C.x(q,l,new C.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.L)(j),++p){o=j[p]
t=new C.aW(12,12)
s=new C.aW(12,12)
A.d.v(w,C.a([A.O,new C.bH(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a6K,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.by.j(0.3),l,l,new C.bq(t,t,t,t),l,l,A.n),l,l,l,l,A.fI,l,l,l),l),A.at,C.p(l,new C.x(o.b,l,D.f5W,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bq(s,s,s,s),l,l,A.n),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.e3W)
j=C.cd(C.v(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=C.v(C.a([C.ahd(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bp2,A.ei,l,l,1/0),A.bc,A.i9),C.E(B.h_d(m.gVx(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dA("Ask about it",i,new B.e4_(m),l,A.by,l),new B.dA("Invent something new",!i,new B.e40(m),l,A.by,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.d9z[p]
i.push(new B.dA(n,!1,new B.e41(m,n),l,A.by,l))}f.push(new B.eO(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cUQ[p]
i.push(new B.dA(r,!1,new B.e42(m,r),l,A.by,l))}f.push(new B.eO(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.T,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.br(l,new C.b4(4,C.m(16),A.Y),l,A.eP,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kw,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e43(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dl,!0,A.a4,l,A.am,l,A.aO7,l,l),1)
h=m.at
v=h&&j?D.bD3:A.dW
j=h&&j?"Ask":"Invent"
f.push(C.A(C.a([i,A.ab,new B.fg(v,j,new B.e44(m,k),A.by,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jF(A.by,A.h9,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.FE.prototype={}
B.uF.prototype={}
B.Vc.prototype={
U(){return new B.aD6(A.J,A.J,A.au,C.aX(x.S),$,A.bw,0,C.a([],x.X),null,null)}}
B.aD6.prototype={
gaVt(){var w,v,u,t=this,s=D.GI[t.cx],r=D.Q3[t.cy],q=D.BR[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ec(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.av1[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new B.ejI())},
ga1I(){return D.GI[this.cx].d/this.gaVt()},
gaN0(){return 0.1*(D.GI[this.cx].d/0.9)/D.Q3[this.cy].d},
a_(){this.a1()
this.la()
B.za("rocket_lander").bz(new B.ek1(this),x.P)},
c1L(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cI.aj()*0.6
w.f=new C.u(0.15+A.cI.aj()*0.7,0.08)
w.r=new C.u((A.cI.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lr(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.ek2())
return}w=D.r8[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga1I()
v=v.ad(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaN0())}if(m.dy){t=m.r
v=v.aC(0,t.aF(0,t.gcl()*6*D.awP[m.d]))}t=m.r=m.r.ad(0,v.aF(0,d))
s=m.f=m.f.ad(0,t.aF(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.u(-t.a*0.4,t.b)
t=new C.u(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.u(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.BR[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.vJ("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.Bj("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga1I()/(D.r8[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga1I()/(D.r8[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dF(80,"",500,0,0.6,"noise")
C.fK()}}if(m.Q&&m.x>0&&A.o.F(A.k.bu(m.CW*20),2)===0)E.dF(90,"",70,0,0.12,"noise")
m.m(new B.ek3())},
aeN(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eYP,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dA(e[w].a,f.$1(w),new B.ejK(this,g,w),v,h,v))
return new C.C(A.eO,C.v(C.a([u,A.cX,C.bY(A.bz,s,A.br,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bBS(d){var w,v,u,t,s=this,r=null,q=s.ga1I()/(D.r8[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaN0()),o=D.awP[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.Tb,r,r,r),A.S,s.aeN("ENGINE: "+D.GI[s.cx].b,D.GI,new B.ejz(s),new B.ejA(s),A.ct),s.aeN("FUEL TANK: "+D.Q3[s.cy].b,D.Q3,new B.ejB(s),new B.ejC(s),A.b4),s.aeN("LANDING GEAR: "+D.BR[s.db].b,D.BR,new B.ejD(s),new B.ejE(s),A.aS),s.aeN("EXTRAS (tap to add)",D.av1,new B.ejF(s),new B.ejG(s),A.by)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fs9)
o=(q?A.b4:A.cg).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaVt(),2)
u=A.k.aa(s.ga1I()/(D.r8[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.BR[s.db].d*100)+".",r,r,r,r,r,r,D.eZp,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.ib,A.bS,r,r,r))
m.push(A.S)
m.push(new C.bH(A.A,r,r,new B.fg(A.nd,"Launch",new B.ejH(s),A.b4,r),r))
return C.av(C.p(r,C.cd(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.r,r,A.y,r,A.bV,r,r,A.ah),A.f,r,A.lw,new C.o(D.bfW,r,l,n,r,r,A.n),r,r,r,A.bS,r,r,r,r),r,r,r)},
aWB(d,e,f,g){var w=null,v=f?A.ct:A.c.j(0.1),u=C.m(18),t=C.I(A.b2,A.q,1)
return C.o9(A.jx,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.ejw(e),new B.ejx(e),w,w,w,w,new B.ejy(e))},
aWA(d,e,f){return this.aWB(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cp(new B.ejV(s,D.r8[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.r8[w].a:"\ud83d\udd12"
o.push(new B.dA(v,s.d===w,new B.ejW(s,w),r,D.r8[w].c,r))}v=C.a([s.aWA(F.akS,new B.ejX(s),s.y),A.bf,s.aWB(A.vu,new B.ejY(s),s.Q,130),A.bf,s.aWA(A.Ne,new B.ejZ(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aS:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bf,C.aE(r,C.p(r,D.bHf,A.f,r,r,new C.o(u,r,C.I(A.b2,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.ek_(s),r,r,r,r,r,r,!1,A.a8)],p))}return B.jF(A.ct,A.h9,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eO(o,"WORLD",r),C.A(v,A.m,r,A.bb,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.bfB.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.r8[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.M(),a0=j.c,a1=C.aq(D.biz,a0,0.25)
a1.toString
d.saq(new C.a8(A.b0,A.b6,A.x,C.a([F.act,a1],x.O),l,l).av(0,new C.a9(0,0,g,f)))
a2.aX(new C.a9(0,0,g,f),d)
w=new C.eJ()
w.dB(5)
for(g=a2.a,v=0;v<70;++v){f=w.aj()
d=w.aj()
a1=w.aj()
u=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
u.r=A.c.j(0.2+w.aj()*0.5).gp(0)
t=u.H()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.aO(e.r,A.ap,l,l,d)
r.E(new C.b5(0,s+14))
q=new C.eJ()
q.dB(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bx(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.E(new C.ap(i,h))
r.E(new C.ap(0,h))
r.E(new C.bF())
e=$.W()
d=C.M()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aP(r,d)
o=C.cm(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.bA(o,A.ii)
a0=C.M()
a0.r=A.bo.gp(0)
a2.aD(d,a0)
a0=C.bA(o.cF(2),A.rq)
d=C.M()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.iX(0,k.w)
i=k.as
if(i==="crashed"){k=C.M()
k.r=A.ct.j(0.6).gp(0)
k.z=Y.He
a2.af(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aO(i,A.ap,l,l,C.a([],f))
n.E(new C.b5(-8,18))
n.E(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.E(new C.ap(8,18))
n.E(new C.bF())
k=C.M()
k.r=A.aM.gp(0)
a2.aP(n,k)
i=new C.aO(i,A.ap,l,l,C.a([],f))
i.E(new C.b5(-4,18))
i.E(new C.ap(0,32))
i.E(new C.ap(4,18))
i.E(new C.bF())
k=C.M()
k.r=A.c.gp(0)
a2.aP(i,k)}k=e.r
m=new C.aO(k,A.ap,l,l,C.a([],f))
m.E(new C.b5(0,-26))
m.E(new C.cS(14,-10,11,18))
m.E(new C.ap(-11,18))
m.E(new C.cS(-14,-10,0,-26))
m.E(new C.bF())
i=C.M()
i.saq(D.bTu.av(0,D.eFa))
a2.aP(m,i)
i=C.M()
i.r=A.aS.gp(0)
a2.af(D.vW,5,i)
i=new C.aO(k,A.ap,l,l,C.a([],f))
i.E(new C.b5(-11,6))
i.E(new C.ap(-20,20))
i.E(new C.ap(-11,18))
i.E(new C.bF())
h=C.M()
h.r=A.ay.gp(0)
a2.aP(i,h)
f=new C.aO(k,A.ap,l,l,C.a([],f))
f.E(new C.b5(11,6))
f.E(new C.ap(20,20))
f.E(new C.ap(11,18))
f.E(new C.bF())
k=C.M()
k.r=A.ay.gp(0)
a2.aP(f,k)
g.restore()},
ar(d){return!0}}
B.aKX.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvP.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.bu5()}}
B.aQQ.prototype={}
B.a2k.prototype={}
B.b8J.prototype={}
B.TD.prototype={
U(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.et(["skin"],x.N),o=new Float32Array(0)
return new B.aBw(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.JI,D.JI,A.au,A.cI,o,new Int32Array(0),$,A.bw,0,C.a([],x.X),null,null)}}
B.aBw.prototype={
a_(){var w=this
w.a1()
w.la()
w.as=new B.bZX(w.gc9W())
new B.dCW(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.bt6()},
c9X(d){var w,v=this
if(v.c==null)return
w=J.a5(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eT(0,C.F(["t","init","data",$.h96],x.N,x.z))
v.at=!0
v.ax=""
v.axC()
break
case"pick":v.m(new B.dCy(v,d))
break
case"shot":v.agE(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
axC(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.at_[q.CW]
v=new B.dCz()
u=q.ay
u=C.B(u,C.a3(u).k("co.E"))
A.d.fi(u)
t=x.N
s=C.F(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.R.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eT(0,u)}},
agE(d){return this.cqy(d)},
cqy(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$agE=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cE.aJ(A.a.b0(d,A.a.cJ(d,",")+1))
w=6
return C.b(B.coO(C.a([B.h8S(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$agE)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.R(D.aNq)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$agE,v)},
ax3(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lr(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bu(w)!==A.k.bu(v.ok)){B.a7v("kick",0.4)
v.a4i(170,new B.dCX())}v.ok=w
return},
agt(d){var w,v,u,t,s=this
s.m(new B.dCA(s,d))
if(d==null){s.fx=D.JI
s.dy=1
w=s.as
if(w!=null)w.eT(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a2<1>")
u=C.B(new C.a2(w,new B.dCB(d),v),v.k("J.E"))
t=A.d.gL(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.K(0,t)
if(s.ch===2)s.ch=1}s.axC()
w=s.as
if(w!=null)w.eT(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.csX(t,d)
return},
csX(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a7v("kick",0.8)
this.a4i(260,new B.dCC())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4i(w*70,new B.dCD(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dF(110,"",360,0.7,0.3,"saw")
else B.vM("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":E.dF(210+e.length*4,"",80,0.6,0.55,"tri")
E.dF(2400,"",20,0,0.3,v)
break
case"muscle":E.dF(70,"",150,1,0.6,"sine")
break
case"vessel":E.dF(300,"",380,0.4,0.22,v)
B.a7v("kick",0.3)
break
default:B.vM("organic",2+A.o.F(e.length,6),200,0.4)}},
cxq(d){this.m(new B.dCF(this,d))},
aWT(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(p.ax3(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=C.B(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aB(w)]
p.p4=""},
bT1(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dCv(u,w,d))
v=x.t
B.Bj("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4i(1100,new B.dCw(u))
return}if(d==null){if(u.cx!=null)u.agt(null)
return}u.agt(d)},
bWI(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bU.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eVg,u,u,u)}else if(d==null||e==null)w=D.f7Z
else{w=x.p
w=C.A(C.a([C.E(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.i4,u,u,u),A.cX,C.d(e.b,u,u,u,u,u,u,F.D5,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aH(u,u,u,u,D.bJE,u,u,u,new B.dCx(v),u,u,u,u,"Back to the whole body",A.c8)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.Vs,u,s,t,u,u,A.n),u,u,u,u,I.agw,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.djZ.h(0,g)
i.axC()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d2U
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(i.ax3(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.ms,h,h,h,new B.dCM(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bH:C.Dw(h,A.q5,q)}else q=A.ks
q=C.v(C.a([C.E(q,1),new C.C(F.XK,i.bWI(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cWb[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dA(l,n,new B.dCN(i,o),o.c,A.bU,h))}p=C.a([new B.eO(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.L)(w),++s){k=w[s]
n.push(new B.dA(k,k===i.cx,new B.dCO(i,k),h,A.aM,h))}p.push(new B.eO(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hy(A.cg,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dCP(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.ET(D.at_[j],i.CW===j,new B.dCQ(i,j),!1,h))
p.push(new B.eO(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dA("Spin",n,new B.dCR(i),D.ajG,A.aS,h),new B.fg(A.jY,"Reset view",new B.dCS(i),A.c,h),new B.dA(l,m,new B.dCT(i),A.FX,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dA("Heartbeat sound",i.k4,new B.dCU(i),A.nX,A.cg,h))
p.push(new B.eO(v,h,h))
return B.jF(A.bU,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aJZ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.aK_.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.bt5()}}
B.bZX.prototype={
ku(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hf8
$.hf8=v+1
u="ngmy-body-viewer-"+v
$.yl()
$.q5().pH(u,new B.bZY(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fH(v,"message",new B.bZZ(t),!1,x.gA)
t.b=u},
eT(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bxO(w.contentWindow)
if(w!=null)J.fMT(w,e,"*")}}catch(v){}}}
B.xN.prototype={}
B.BW.prototype={}
B.ni.prototype={}
B.b9r.prototype={}
B.TI.prototype={
U(){var w=x.N,v=x.y,u=x.S
return new B.aBz(C.T(w,x.a2),C.a([],x.cB),C.T(w,v),C.T(w,v),C.T(w,u),A.au,A.J,A.J,C.aX(u),$,A.bw,0,C.a([],x.X),null,null)}}
B.aBz.prototype={
a_(){var w=this
w.a1()
w.la()
w.abw()
$.aU.x1$.push(new B.dF6(w))},
abw(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$abw=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$abw)
case 6:q=e.rX("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dEL(s,r))
u=1
w=5
break
case 3:u=2
o=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abw,v)},
abQ(d){return this.c_p(d)},
c_p(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$abQ=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return C.b(C.az(),$async$abQ)
case 6:r=f
q=s.cx
p=C.a3(q).k("jK<co.E,n>")
q=C.B(new C.jK(q,new B.dEO(),p),p.k("J.E"))
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
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abQ,v)},
avM(d,e,f,g){var w="c"+this.y++,v=new B.BW(w,e,f,g)
this.d.n(0,w,v)
return v},
mr(d,e,f){return this.avM(0,e,f,0)},
aaS(d,e){var w
if(D.yJ.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.u(-36,w))},
tm(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aQW(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fQ$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e3(m,D.cGI[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tm(p,0)&&n.tm(p,1)
break
case"or":p=q.a
o=n.tm(p,0)||n.tm(p,1)
break
case"xor":p=q.a
o=n.tm(p,0)!==n.tm(p,1)
break
case"nand":p=q.a
o=!(n.tm(p,0)&&n.tm(p,1))
break
case"nor":p=q.a
o=!(n.tm(p,0)||n.tm(p,1))
break
case"not":o=!n.tm(q.a,0)
break
default:o=n.tm(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bLP(){return this.aQW(null)},
lr(d){var w,v,u,t,s,r,q,p,o,n=this
n.bLP()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gae(0),v=new C.fh(w,new B.dF7()),u=n.f,t=n.w,s=0;v.C();){r=w.gS(0).a
if(u.h(0,r)===!0){q=n.fQ$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fQ$)
o=s+1
E.dF(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
avN(d){var w=this
w.d.a9(0)
A.d.a9(w.e)
w.f.a9(0)
w.r.a9(0)
w.cy=null},
lX(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
as2(d){var w=this
if(w.x.A(0,A.au)){$.aU.x1$.push(new B.dEJ(w,d))
return}w.m(new B.dEK(w,d))},
cte(d){this.m(new B.dEP(this,d,$.bCF()[d]))},
c3Q(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bCF()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a2<J.E>")
s=t.k("J.E")
r=C.B(new C.a2(new C.bc(v,u),new B.dEE(),t),s)
A.d.b_(r,new B.dEF())
q=C.B(new C.a2(new C.bc(v,u),new B.dEG(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dEH(d,w))
return}u=d.r
p=C.dV(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.fY(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aQW(0)
h=m.h(0,A.d.gL(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jE(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aI(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a9(0)
u.v(0,p)
d.m(new B.dEI(d,o,a0))},
awA(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dx<1>")
s=new C.dx(s,r)
s=new C.bR(s,s.gM(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ccj(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dx<1>")
r=new C.dx(r,q)
r=new C.bR(r,r.gM(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bWB(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yJ.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aaS(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.y(p,o)
s=l}}}return t},
bKM(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aaS(p,o)
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
c3S(d){var w,v,u,t=this,s=t.awA(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eT()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dF(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new B.dEQ())
return}u=t.bKM(d)
if(u!=null)t.m(new B.dER(t,u))
else t.m(new B.dES(t))},
auB(d){return this.bZu(d)},
bZu(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$auB=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.awA(d)
if(s==null){w=1
break}C.jf()
t.m(new B.dEN(t,s))
case 1:return C.h(u,v)}})
return C.i($async$auB,v)},
bxN(d){if(this.x.A(0,A.au))return
this.m(new B.dED(this,d,A.cI))
C.eT()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bCF()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.nX:O.r4,A.ad,h,h,h,21),h,h,h,new B.dF0(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.cr.j(0.14)
r=C.I(A.cr.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eUr,h,h,h),C.d(w.b,h,h,h,h,h,h,D.f1B,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(A.mh,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b4:A.f3,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.A(C.a([C.E(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bJ(D.fiO,i.gc3P(),C.bk(A.cr,h,h,h,h,h,h,h,h,h,h,A.c8))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,X.LC,D.bpF,h,h,1/0))}u.push(C.E(C.cp(new B.dF1(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yJ.h(0,r).a+": "+D.yJ.h(0,r).e,h,h,h,h,h,h,A.w8,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,Aa.agd,A.bS,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.yJ.gdK(D.yJ),s=s.gae(s);s.C();){r=s.gS(s)
q=new C.aW(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.aA(o.j(0.5),1,A.q,-1)
t.push(C.aE(h,C.p(h,C.v(C.a([C.X(p.b,o,h,h,h,20),A.bB,new C.x(p.a,h,D.aPf,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bP(m,m,m,m),new C.bq(q,q,q,q),h,h,A.n),h,h,h,A.fx,A8.Lx,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dF2(i,r),h,h,h,h,h,h,!1,A.a8))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d6W[l]
s.push(new B.fg(A.Nf,k.b,new B.dF3(i,k),A.cr,h))}s.push(new B.fg(D.xR,"Clear",new B.dF4(i),A.cg,h))
r=C.a([],g)
for(j=0;q=$.bCF(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ee:A.lf
o=i.ay
n=i.cx.t(0,j)?A.b4:A.cj
r.push(new B.dA(q.a,o===j,new B.dF5(i,j),p,n,h))}return B.jF(A.cr,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eO(t,"PARTS",h),new B.eO(s,"TRY",h),new B.eO(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.b9K.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.M()
w.r=D.ab1.gp(0)
a7.aX(new C.a9(0,0,0+a5,0+a6),w)
v=C.M()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.H()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,C.L)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.aaS(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=C.a([],p)
d=new C.aO(l.r,A.ap,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pu(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.cj.j(0.28).gp(0)
l.z=G.mv
s=l.H()
l=d.gbK().a.snapshot()
w.drawPath((d.e=new C.cF(l)).a,s)
s.delete()}l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bO
l.r=(f?A.dN:A.bu).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cF(d.gbK().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.HL)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aO($.W().r,A.ap,a4,a4,C.a([],p))
w=a3.b
p.E(new C.b5(a6,w))
r=g.b
p.E(new C.pu(a6+a0,w,a5-a0,r,a5,r))
r=C.M()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aP(p,r)}for(a5=new C.dt(o,o.r,o.e);a5.C();)this.c3R(a7,a5.d)},
c3R(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yJ.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cm(a0.c,64,64)
s=C.bA(t,A.kW)
r=w.cy===v
q=s.eM(A.cw)
$.W()
p=C.M()
p.r=A.w.j(0.55).gp(0)
p.z=A.ln
d.aD(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.M()
p.saq(new C.bS(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).av(0,C.bT(a0.c,52)))
d.af(q,52,p)}q=s.eM(A.cJ)
p=C.M()
o=e.c
p.r=C.aq(o,A.w,0.65).gp(0)
d.aD(q,p)
n=u?0.35:0
q=C.M()
p=C.aq(o,A.c,0.1+n)
p.toString
m=C.aq(o,A.w,u?0.2:0.45)
m.toString
q.saq(new C.a8(A.b0,A.b6,A.x,C.a([p,m],x.O),g,g).av(0,t))
d.aD(s,q)
q=C.M()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.Nk:D.bDz}else l=e.b
k=B.fSh(C.jE(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aC(0,new C.u(p/2,q.gbc(q)/2)))
j=B.fSh(e.a,10.5,A.c,g,g,A.H)
j.a5(d,a0.c.ad(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fSh(f,9,u?A.dN:A.c_,g,g,A.u)
i.a5(d,a0.c.ad(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aXs(d,w.aaS(a0,h),o)
this.aXs(d,a0.c.ad(0,D.HL),o)},
aXs(d,e,f){var w
$.W()
w=C.M()
w.r=D.ab1.gp(0)
d.af(e,8.5,w)
w=C.M()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.af(e,8.5,w)
w=C.M()
w.r=A.c.gp(0)
d.af(e,3.2,w)},
ar(d){return!0}}
B.aK4.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvy.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.btb()}}
B.MQ.prototype={
U(){return new B.aBQ(C.mw(0,null,null))}}
B.JU.prototype={
a4(){return"_UnfoldStyle."+this.b}}
B.A9.prototype={}
B.aBQ.prototype={
c3W(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcr(0).at
v.toString
w.f=v}w.m(new B.dKY(w,e))},
bYn(){var w=this
w.e.q()
w.e=C.mw(w.f,null,null)
w.m(new B.dKX(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.oh(t,C.c8(v,A.bX,t?new B.bpC(w.e,w.gc3V(w),new B.dKZ(d),v):new B.aG4(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dL_(w,u),x.C)}}
B.bra.prototype={}
B.bpC.prototype={
aXt(d,e){var w=null
return new C.C(I.Y9,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eV0,w,w,w),A.bB,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.A(C.a([C.aH(v,v,v,v,S.ne,v,v,v,w.e,v,v,v,v,v,v),A.rw,D.bvs],u),A.m,v,A.e,A.j,0,v,v),s=w.aXt("STUDIOS","Play, make things, and keep what you make")
$.bCG()
return C.bn(!0,C.v(C.a([new C.C(D.bux,t,v),C.E(C.vl(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,C.a([new C.m4(s,v),new C.nM(A.hw,C.Oo(new C.ok(new B.eTZ(d),22,!0,!0,!0,0,C.rN(),v),D.aNf),v),new C.m4(w.aXt("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nM(D.bpL,C.Oo(new C.ok(new B.eU_(w),6,!0,!0,!0,0,C.rN(),v),D.aNf),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.ae1.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(F.mY,p,0.3)
m.toString
w=x.O
m=C.a([m,D.adM],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aG(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eA(C.v(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a8(A.ax,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.O,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cX,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.bb,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a8(A.ax,A.aC,A.x,m,r,r),A.n),r,A.Ff,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
B.acV.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.mY,A.d.gL(i),0.24)
f.toString
w=x.O
f=C.a([f,D.adM],w)
v=C.I(A.d.gL(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cw,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aW(6,6)
m=C.a([A.d.gL(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aFV,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bq(n,n,n,n),l,new C.a8(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gL(i),A.d.gal(i),0.4)
u.toString
return C.aG(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eA(C.v(C.a([new C.a7(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.at,C.X(A.Bw,A.d.gL(i),k,k,k,18)],s),A.m,k,A.bb,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a8(A.ax,A.aC,A.x,f,k,k),A.n),k,A.Ff,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag)}}
B.Pu.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c_(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.bd),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.Rn,26),new C.ac(-6,A.G,A.d.gL(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gL(i),A.c,0.14)
p.toString
o=A.d.gL(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.c_(j,new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,C.a([p,o,n,i],m),D.dbP,j),A.n),A.bd),0,0,0),C.ao(j,C.c_(j,new C.o(j,j,j,j,j,new C.a8(A.b0,A.b6,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bd),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.bqA(i,j),A.au),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eWz,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.at,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a5,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Sx)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(A.fJ,C.A(C.a([s,A.eB,C.E(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.e1(C.ek(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bZ(0,C.e1(C.c_(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.bd),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bZ(0,C.c_(C.bw(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bd),0,0,0)],l),j),j)}}
B.bqA.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbR().a,v.gbR().b)
d.iX(0,0.35)
t=C.cm(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.M()
s.saq(new C.a8(A.a3,A.a7,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).av(0,t))
d.aX(t,s)
u.restore()},
ar(d){return d.b!==this.b}}
B.bq5.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.be5,D.acZ],x.O),t=this.e,s=C.I(A.d.gL(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.k1,24)],x.V),q=C.m(22),p=A.d.gL(t)
return new C.a7(this.c,this.d,C.c_(C.bw(q,C.b3(C.av(C.X(A.jh,A.d.gL(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b8q(p,w),A.au),A.aq),new C.o(w,w,s,v,r,new C.a8(A.ax,A.aC,A.x,u,w,w),A.n),A.bd),w)}}
B.b8q.prototype={
a5(d,e){var w,v,u,t,s,r,q,p
$.W()
w=C.M()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ed(A.J)
$.W()
t=C.M()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.af(u,30,t)},
ar(d){return!1}}
B.aG4.prototype={
U(){return new B.aG5(new C.cs(null,x.A),null,null)}}
B.aG5.prototype={
gtI(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.bn9,null,1,null,v)
w.cH(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
gYN(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fH,null,1,null,v)
w.fa(0,!0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
gavO(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc3T(){var w=this.w
if(w===$){w=C.B(this.a.c.d,x.G)
this.w=w}return w},
gaU2(){var w=this.x
if(w===$){w=C.B(this.a.c.e,x.Z)
this.x=w}return w},
gaUH(){var w=this.y
if(w===$){w=C.B(this.a.c.f,x.N)
this.y=w}return w},
gb5_(){var w=this.z
if(w===$){w=C.B(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtI()
w.d9()
w.dR$.K(0,this.gcsY())},
csZ(){var w,v,u,t,s,r,q,p=this,o=p.gtI().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gavO().a){case 0:w=D.nh
break
case 1:w=D.tZ
break
case 2:w=D.a1v
break
case 3:w=D.nh
break
case 4:w=D.d_X
break
case 5:w=D.tZ
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a8L)r=0.09
else r=s===D.a8M?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.bW_[v]
B.lf("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.Bj("bell",D.c3J,1400,0.35)}}p.ax=o},
q(){this.gtI().q()
this.gYN().q()
this.bv0()},
afd(){var w=this
w.gtI().cRW(0,C.dC(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eTF(w))},
cel(){this.gtI().bY(0)
this.m(new B.eTE(this))},
acO(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$acO=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaUH(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){q=t[r]
l.push(new C.ar(new C.bb(q,A.b3,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb5_(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){p=t[r]
m.push(new C.ar(new C.bb(p,A.b3,A.aN),$.aw()))}o=C.B(u.gaU2(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bV(F.mY,null,new B.eTD(u,l,m,o),t,!0,!0,!0,A.lp,!1,!1,x.H),$async$acO)
case 2:l=C.B(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$acO,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gavO(),f=i.a.c,e=f.b,d=i.gc3T(),a0=new B.A9(g,e,f.c,d,i.gaU2(),i.gaUH(),i.gb5_())
f=C.aq(A.d.gL(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.nX:O.r4,A.ad,h,h,h,21),h,h,h,new B.eTN(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bN4,h,h,h,i.gc3U(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.ms,h,h,h,new B.eTO(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gYN(),new B.eTP(i,a0),h),C.cp(new B.eTQ(i,a0))],g)
u=i.as
t=u?i.gcek():i.gcgD()
u=u?D.bCQ:A.tN
s=C.aq(A.d.gL(d),A.d.gal(d),0.4)
s.toString
t=C.A(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.c8),C.E(C.c6(i.gtI(),new B.eTR(i,a1,a0),h),1),C.aH(h,h,h,h,D.bJu,h,h,h,new B.eTS(i),h,h,h,h,"Replay",A.c8)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gL(d),A.d.gal(d),0.4)
r.toString
s=B.hy(r,u+"x","Speed",2.5,0.4,new B.eTT(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.d9c[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gL(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dA(p.b,o===p.a,new B.eTU(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bWk[q]
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}m=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}l=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}k=A.d.gL(o).A(0,A.d.gL(n))?A.c:A.b2
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}j=new C.aA(k,A.d.gL(o).A(0,A.d.gL(n))?2.5:1,A.q,-1)
d.push(C.aE(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bP(j,j,j,j),h,h,new C.a8(A.ax,A.aC,A.x,n,h,h),A.a6),h,l,h,D.afZ,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eTV(i,n),h,h,h,h,h,h,!1,A.a8))}return B.jF(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ev(new C.an(A.W,h,A.b_,A.r,v,h),i.f),e,C.v(C.a([t,s,new B.eO(u,"STYLE",h),new B.eO(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bwZ(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nh[r]
p=A.k.D((1-A.ev.aw(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nh[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nh[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dm()
l=n.a
l.$flags&2&&C.aj(l)
l[11]=0.0013
n.jT(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nh[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nh[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nh[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cL(0,r*118,0,f,f,f,new C.kC(q,new C.iE(n,f,A.b0,!0,f,new B.Pu(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nh[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gL(w)
v=D.nh[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.me(new B.bpe(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.au,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bNf(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.tZ[r]
p=A.py.aw(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.tZ[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.tZ[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dm()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jD(n,n,n,1)
m.fz(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.Pu(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dm()
k.fz(3.141592653589793)
k=new C.iE(k,f,A.A,!0,f,new B.bq5(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kC(q,new C.iE(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cxW(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a1v[w]
l.push(A.cs.aw(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.bsE(d.d,l,D.auF,m,B.bpB(e,0.4,0.62),f,B.bpB(e,0.45,0.7),n),A.au),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fSN(g,w)
q=D.auF[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kC(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fSN(g,w)
r=D.a1v[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kC(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.a7e,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bD5(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cs.aw(0,B.bpB(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.av(C.dT(C.b3(f,f,f,new B.boG(A.d.gL(a1),B.bpB(a3,0,0.2),a4,f),new C.at(a5*0.95,70)),D.e_x),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dC.aw(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dm()
m=l.a
m.$flags&2&&C.aj(m)
m[11]=0.001
l.fz(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jD(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new C.y(o,new C.cL(0,0,0,0,f,f,new C.cr(A.A,f,f,new C.kC(k*(0.45+0.55*o),C.dT(new C.iE(l,f,A.A,!0,f,new B.Pu(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new B.eTw())
A.d.v(a0,new C.K(w,new B.eTx(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bCi(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.tZ[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mJ.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.tZ[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.awA[q]
k=C.dm()
k.mE(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jD(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.tZ[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cr(A.A,e,e,new C.kC(m,C.dT(new C.iE(k,e,A.A,!0,e,new B.Pu(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.tZ[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cr(A.A,e,e,C.dT(new C.me(new B.b95(w,f,q,e),e,new C.at(r,212),e,e),new C.u(0,D.awA[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bzU(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.e_B],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nh[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cs.aw(0,p)
q=D.awF[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nh[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nh[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dm()
d=f.a
d.$flags&2&&C.aj(d)
d[11]=0.001
f.mE(l*h+D.d3N[r]*o)
f.fz(l*0.9)
h=0.55+0.45*o
f.jD(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,new C.kC(g,C.dT(new C.iE(f,a3,A.A,!0,a3,new B.Pu(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nh[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.awF[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,C.dT(new C.me(new B.boI(A.d.gL(w),a2,a3),a3,new C.at(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bpe.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a9(w-v,0,w+v,e.b)
q=C.bA(u,A.hb)
$.W()
t=C.M()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mv
d.aD(q,t)
t=C.bA(u,A.hb)
q=C.M()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
ar(d){return d.c!==this.c||d.d!==this.d}}
B.boG.prototype={
a5(d,e){var w,v,u=this.c,t=C.cm(e.ed(A.J),e.b*u,e.a*u)
$.W()
u=C.M()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Y.He
d.hM(t,u)
u=C.M()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hM(t,u)
u=t.cF(-14)
v=C.M()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hM(u,v)},
ar(d){return!0}}
B.b95.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ed(A.J),f=this.c,e=A.cs.aw(0,f)
$.W()
w=C.M()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gL(u).j(0.6*v).gp(0)
d.af(g,40+e*a0.a*0.42,w)
t=new C.eJ()
t.dB(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.aj()*3.141592653589793*2
n=(40+t.aj()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.aj()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gL(u):A.c
j.r=i.j(A.k.D(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
ar(d){return!0}}
B.boI.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ed(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.cm(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c0(p),n)
n.delete()}},
ar(d){return d.c!==this.c}}
B.bsE.prototype={
a5(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.W()
d0=C.M()
w=c1.b
v=x.O
d0.saq(new C.a8(A.b0,A.b6,A.x,C.a([A.d.gL(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.aX(d1,d0)
d0=C.M()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bA(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fSN(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.ln
a4=a3.H()
t.drawOval(C.c0(new C.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a9(d,a1,a3,a1+a0)
a6=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gL(w),A.c,0.1)
a7.toString
a6.saq(new C.a8(A.b0,A.b6,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).av(0,a5))
a4=a6.H()
t.drawRect(C.c0(a5),a4)
a4.delete()
a2=a2.r
a6=C.a([],n)
a8=new C.aO(a2,A.ap,c2,c2,a6)
a6.push(new C.b5(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a7,m))
a6.push(new C.ap(a3,c4))
a6.push(new C.bF())
a6=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=C.aq(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbK().a.snapshot()
t.drawPath((a8.e=new C.cF(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aO(a2,A.ap,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bF())
a2=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=C.aq(A.d.gL(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbK().a.snapshot()
t.drawPath((b0.e=new C.cF(a2)).a,a4)
a4.delete()
b1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(C.c0(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cF(a8.gbK().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cF(b0.gbK().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bu(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bA(new C.a9(b7,a7,b7+r,b5),A.hb)
$.W()
b9=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.er(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a9(d,a1,a3,a1+28)
J.by(t.save())
t.clipRect(C.c0(a5),$.q6()[1],!0)
$.W()
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new C.a8(A.b0,A.b6,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).av(0,c0))
a4=a1.H()
t.drawRect(C.c0(c0),a4)
a4.delete()
t.restore()}}},
ar(d){return!0}}
B.aLM.prototype={
aQ(){this.aY()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
B.a_z.prototype={
a4(){return"_Role."+this.b}}
B.pV.prototype={}
B.qD.prototype={}
B.C_.prototype={}
B.Yz.prototype={}
B.adS.prototype={}
B.a_M.prototype={
gY(d){return this.d}}
B.C9.prototype={}
B.aaN.prototype={}
B.ab3.prototype={}
B.acZ.prototype={}
B.bfy.prototype={
a1R(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dF(d,"",e,g,h,f)},
b6_(d,e,f){return this.a1R(d,e,f,0,0.55)},
aAj(d,e,f,g){return this.a1R(d,e,f,0,g)},
b60(d,e,f,g){return this.a1R(d,e,f,g,0.55)},
a9(d){var w=this
w.a.a9(0)
A.d.a9(w.b)
A.d.a9(w.c)
A.d.a9(w.d)
A.d.a9(w.e)
A.d.a9(w.f)
A.d.a9(w.r)
A.d.a9(w.w)
A.d.a9(w.x)
w.y.a9(0)
w.Q.a9(0)
w.as.a9(0)
w.aZ()},
aiS(d,e,f,g){var w="n"+this.ay++,v=new B.qD(w,e,f,g)
this.a.n(0,w,v)
this.aZ()
return v},
AL(d,e,f){return this.aiS(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bn(w.b,new B.deP(e))
A.d.bn(w.c,new B.deQ(e))
w.aZ()},
b9M(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mu.h(0,v.b).c===D.wr)return!1
w=this.b
if(A.d.b7(w,new B.deM(d,e)))return!1
w.push(new B.C_(d,e))
this.aZ()
return!0},
bXl(d){var w
if(d.b==="beat")return D.c3S[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aB(500)
case 2:return 1400+w.aB(2200)
default:return 450+w.aB(2000)}},
aDM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.awU[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.C9(u,t,j.ax,90))
w.push(new B.C9(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a_M(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b6_(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a_M(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aB(700),j.ax))}j.f.push(new B.C9(u,t,j.ax,120))
j.aAj(120,200,"noise",0.5)
j.b6_(261.63*Math.pow(2,([7,12,16,19][w.aB(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.C9(u,t,j.ax,230))
w.push(new B.C9(u,t,j.ax+160,160))
w.push(new B.C9(u,t,j.ax+320,100))
j.b60(180+j.at.aB(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.aaN(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b60(300+w.aB(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.ab3(u,u.ad(0,new C.u(Math.cos(q),Math.sin(q)).aF(0,260+w.aj()*200)),t,j.ax))
j.a1R(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fK()
j.a1R(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.acZ(u,D.awn[v],t,j.ax))
j.aAj(261.63*Math.pow(2,([0,5,9,12][j.at.aB(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aAj(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c_Z[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cod(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new C.fh(w,new B.deN(d));v.C();)j.ayR(w.gS(0),j.ax+D.ccf[A.o.F(g.d,4)])
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
case"chance":s=j.at.aB(100)<D.ct1[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new C.fh(w,new B.deO(d));v.C();)j.ayR(w.gS(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.yX(w,0,v-700)},
cod(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Yz(e,"~"+d))},
ayR(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.adS(d.a,v,e,w))
u.push(new B.Yz(w,v))},
aH5(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a3(w).k("bc<2>")
w=C.B(new C.bc(w,v),v.k("J.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aDM(r)
u.n(0,r,o.ax+o.bXl(s))}}w=o.c
v=C.U(w).k("a2<1>")
q=C.B(new C.a2(w,new B.deR(o),v),v.k("J.E"))
if(q.length!==0){A.d.bn(w,new B.deS(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b0(u,1)
for(u=A.d.gae(v),r=new C.fh(u,new B.deT(p));r.C();)o.ayR(u.gS(0),o.ax)}else o.aDM(u)}}A.d.bn(o.d,new B.deU(o))
A.d.bn(o.e,new B.deV(o))
A.d.bn(o.f,new B.deW(o))
A.d.bn(o.w,new B.deX(o))
A.d.bn(o.x,new B.deY(o))
A.d.bn(o.r,new B.deZ(o))
o.aZ()},
uQ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new C.u(q.a+o*e,q.b+p*e)
r.b=new C.u(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new C.u(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new C.u(l,o)
if(o>n){p=m.a=new C.u(l,n)
t=m.b=new C.u(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new C.u(-t.a*0.8,t.b)}},
ag(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=C.a([],x.D)
for(v=this.a,v=new C.dt(v,v.r,v.e),u=x.N,t=x.C;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.F(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.L)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.R.ao(C.F(["nodes",m,"edges",v],u,x.ew),null)},
cJE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aG(0,d,null))
k.a9(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gS(n)
u=C.t(J.q(v,"k"))
if(!D.mu.ai(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.qD(t,u,new C.u(C.dQ(J.q(v,"x"))*k.cy.a,C.dQ(J.q(v,"y"))*k.cy.b),A.k.N(C.dQ(J.q(v,"p")))))
s=C.c7(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gS(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.C_(q,p))}k.aZ()
return!0}catch(l){return!1}},
cMG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a9(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qD(n,r,new C.u(q*p.a,o*p.b),s))
l.aZ()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b9M(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.Fq.prototype={}
B.Vb.prototype={
U(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aD5(new B.bfy(C.T(w,x.f3),v,u,t,s,r,q,p,o,C.T(w,n),C.T(w,n),C.T(w,n),C.T(w,n),A.cI,A.K,A.au,$.aw()),A.bw,A.J,A.J,A.T,null,null)}}
B.aD5.prototype={
abp(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$abp=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.az(),$async$abp)
case 6:q=n.kd(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.ej2(s))
u=1
w=5
break
case 3:u=2
o=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abp,v)},
a8p(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a8p=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.eiS(s))
u=3
w=6
return C.b(C.az(),$async$a8p)
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
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a8p,v)},
bJ1(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cI(0,0,new B.eiU())+"|"+A.d.cI(o,0,new B.eiV())
if(v===p.ch)return p.CW
u=new B.eiY()
t=x.s
s=C.a([],t)
r=new B.eiZ(p,s,u)
for(n=new C.bc(n,w).gae(0),w=new C.fh(n,new B.eiW());w.C();){q=n.gS(0)
if(!A.d.b7(o,new B.eiX(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dd(s,0,C.dJ(5,"count",x.S),x.N).dG(0)},
a_(){var w,v=this
v.a1()
v.abp()
v.d.db=v.ay
w=v.qk(new B.ejs(v))
w.j2(0)
v.e!==$&&C.aP()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a7(0)
v=w.e
v===$&&C.c()
v.q()
v=w.d
v.T$=$.aw()
v.P$=0
w.bu3()},
aaW(d){return this.bWO(d)},
bWO(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$aaW=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.az(),$async$aaW)
case 6:q=m.aT(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cJE(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aV8(A.d.gL(D.avS))
if(s.c!=null)s.m(new B.ej1())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aaW,v)},
aV8(d){this.d.cMG(0,d.c,d.d)
this.DP()},
DP(){var w=this.as
if(w!=null)w.a7(0)
this.as=C.cM(A.lG,new B.eiO(this))},
avP(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dx<1>")
s=new C.dx(s,r)
s=new C.bR(s,s.gM(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cck(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dx<1>")
r=new C.dx(r,q)
r=new C.bR(r,r.gM(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bWC(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mu.h(0,r.b).c===D.wr)continue
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
c3Z(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hf9(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cvI(d){var w,v,u,t,s,r,q=this,p=q.avP(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eT()
u=v.b
if(u==="button"){w.aDM(p)
return}if(q.r)return
t=D.mu.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qn)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aZ()
q.DP()
return}if(q.r)return
r=q.c3Z(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.aZ()
q.DP()}},
cdD(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cck(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.avP(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
cdE(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aZ()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aZ()}}},
b_9(){var w,v,u=this
if(u.z!=null){w=u.bWC(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b9M(v,w)}else v=!1
if(v){C.jM()
u.DP()}u.z=null
u.d.aZ()}else if(u.x!=null){if(u.at)u.DP()
u.x=null}},
abC(d){return this.bZv(d)},
bZv(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$abC=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.avP(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jf()
p=t.c
p.toString
w=3
return C.b(C.bV(F.mY,null,new B.ej4(q),p,!0,!0,!1,A.lp,!1,!1,x.y),$async$abC)
case 3:if(f===!0){r.W(0,s)
t.DP()}case 1:return C.h(u,v)}})
return C.i($async$abC,v)},
c3X(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.AL(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eT()
this.DP()},
afl(){var w=0,v=C.j(x.H),u=this,t,s
var $async$afl=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bV(F.mY,null,new B.ej6(),s,!0,!0,!0,A.lp,!1,!1,x.es),$async$afl)
case 2:t=e
if(t!=null)u.aV8(t)
return C.h(null,v)}})
return C.i($async$afl,v)},
acP(d){var w=0,v=C.j(x.H),u=this,t
var $async$acP=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.eiR(),t,null,!0,!0,x.y),$async$acP)
case 2:if(f===!0){u.d.a9(0)
u.DP()}return C.h(null,v)}})
return C.i($async$acP,v)},
B(d){var w=this,v=null,u=C.a([C.ahd(w.r?new C.bH(A.a3,v,v,new C.C(A.Fg,C.hc(D.bHv,D.fbU,new B.ejq(w),v),v),v):w.c4_(),A.bc,A.iv),C.E(C.cp(new B.ejr(w)),1)],x.p)
if(!w.r)u.push(w.cqB())
return C.c8(v,A.bX,C.bn(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bEM(){var w=null,v=new B.eiT(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bt.j(0.5),A.q,1)
return C.bZ(0,C.ek(C.av(C.p(w,C.cd(C.v(C.a([D.fmI,A.at,D.ftZ,A.aA,v.$4(A.oE,A.bt,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Z.G1,A.cr,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.le,A.bU,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.ajT,A.cj,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.ftk,new C.bH(A.a7,w,w,C.bK(!1,D.fjX,w,w,!0,w,w,this.gbEF(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),A.f,w,A.UP,new C.o(F.mY,w,s,t,w,w,A.n),w,w,w,A.fy,Aa.ahg,w,w,w),w,w,w),u,!0),0,0,0)},
c4_(){var w=this,v=null,u=C.aH(v,v,v,v,S.ne,v,v,v,new B.ejc(w),v,v,v,v,v,v),t=w.a7S(A.N3,"How it works",new B.ejd(w),!0),s=w.ay?A.nX:O.r4
return new C.C(D.btL,C.A(C.a([u,D.bvf,t,w.a7S(s,"Sound",new B.eje(w),!0),w.a7S(A.dW,"Ideas",w.gchl(),!0),w.a7S(D.xR,"Clear",w.gc3Y(w),!0),w.aMj(A.iV,"Show",new B.ejf(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aMj(d,e,f,g,h){var w=null,v=h?A.bt:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.C(Af.vh,C.aG(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hp(new C.C(new C.Q(8,8,8,8),C.A(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ag),w)},
a7S(d,e,f,g){return this.aMj(d,e,f,g,!1)},
cqB(){var w=null,v=new B.ej8(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.A(C.a([v.$2("START",D.wr),v.$2("CHANGE",D.Dr),v.$2("REACT",D.qn)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),A.f,w,w,new C.o(D.Ei,w,new C.bP(new C.aA(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bp4,w,w,w)},
cqC(d){var w,v,u,t,s=null,r=D.mu.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.C(A.fx,C.aE(s,C.p(s,C.v(C.a([C.X(r.b,v,s,s,s,22),A.cX,C.d(r.a,s,1,A.a2,s,s,s,D.aPf,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a8(A.b0,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hK,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ej7(this,d),s,s,s,s,s,s,!1,A.a8),s)}}
B.bfz.prototype={
a5(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.by(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.W()
u=C.M()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.H()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.W()
o=C.M()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aX(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){l=w[m]
k=n.h(0,l.a)
j=n.h(0,l.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=j.c
f=g.a-36
g=g.b
e=$.W()
d=C.a([],o)
a0=new C.aO(e.r,A.ap,b4,b4,d)
d.push(new C.b5(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new C.pu(h+a1,i,f-a1,g,f,g))
a2=D.mu.h(0,k.b).d
a3=D.mu.h(0,j.b).d
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bO
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.ro(new C.u(h,i),new C.u(f,g))
e.saq(new C.a8(A.a3,A.a7,A.x,d,b4,b4).av(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbK().a.snapshot()
b7.drawPath((a0.e=new C.cF(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hf9(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.W()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mv
q=h.H()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.gp(0)
q=g.H()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.HL)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aO($.W().r,A.ap,b4,b4,C.a([],o))
o=a8.b
a0.E(new C.b5(t,o))
i=a9.b
a0.E(new C.pu(t+a1,o,w-a1,i,w,i))
i=C.M()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aP(a0,i)
i=C.M()
i.r=A.c.gp(0)
b8.af(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dV.aw(0,v)
$.W()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.b=A.ae
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.H()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){b1=w[m]
v=A.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=C.lg(o,i,A.dV.aw(0,v))
h.toString
i=C.lg(o,i,A.dV.aw(0,A.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bO
g=b1.c
f=C.a([g.j(0),g],p)
e=C.ro(i,h)
o.saq(new C.a8(A.a3,A.a7,A.x,f,b4,b4).av(0,new C.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.H()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=A.c.gp(0)
q=i.H()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.jk
q=i.H()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.W()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){j=w[m]
o=j.a
$.W()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.jk
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(new C.bS(P.pa,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).av(0,C.bT(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bfA(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a5(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbc(p)/2)))}for(b5=new C.dt(n,n.r,n.e);b5.C();)b3.cdb(b8,b5.d,b6)
b7.restore()},
cdb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mu.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cm(e.c,64,64)
t=C.bA(u,A.jG)
s=t.eM(A.cw)
$.W()
r=C.M()
r.r=A.w.j(0.55).gp(0)
r.z=A.ln
d.aD(s,r)
if(v>0){s=t.cF(6)
r=C.M()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.yL
d.aD(s,r)}s=t.eM(A.cJ)
r=C.M()
q=h.d
r.r=C.aq(q,A.w,0.65).gp(0)
d.aD(s,r)
r=C.M()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.w,0.35)
p.toString
r.saq(new C.a8(A.b0,A.b6,A.x,C.a([s,p],x.O),j,j).av(0,u))
d.aD(t,r)
r=C.M()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=B.bfA(C.jE(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aC(0,new C.u(s/2,r.gbc(r)/2)))
n=B.bfA(h.a,11,A.c,j,j,A.H)
n.a5(d,e.c.ad(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.awn[A.o.F(e.d,6)]:j
h=h.c
if(h===D.qn){s=e.c.ad(0,new C.u(0,62))
r=C.M()
r.r=D.awU[A.o.F(e.d,6)].gp(0)
d.af(s,5,r)}else if(m!=null){l=B.bfA(m,9.5,A.az,j,j,A.P)
l.a5(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bfA(m,9.5,A.az,j,j,A.P)
l.a5(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wr)k.b_Z(d,e.c.aC(0,D.HL),q)
k.b_Z(d,e.c.ad(0,D.HL),q)},
b_Z(d,e,f){var w
$.W()
w=C.M()
w.r=A.bX.gp(0)
d.af(e,9,w)
w=C.M()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.af(e,9,w)
w=C.M()
w.r=A.c.gp(0)
d.af(e,3.5,w)},
ar(d){return!0}}
B.aKV.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bk8.prototype={}
B.Pl.prototype={
gY(d){return this.d}}
B.Vr.prototype={
U(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bjc(new C.cs(null,x.A),w,v,A.cI,A.bw,D.Et,null,null)}}
B.bjc.prototype={
aYI(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bu((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.avj[A.o.F(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.lf("synth",u,420,0.3)
break
case"rainbow":B.lf("bell",u,700,0.35)
break
case"stars":B.lf("pluck",u+12,400,0.4)
break
case"sparks":E.dF(2400+t.r.aB(2000),"",60,0,0.18,"noise")
break
default:E.dF(110+t.r.aB(60),"",140,0,0.22,"noise")}},
c6Z(d){return this.aYI(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qk(new B.euT(v))
w.j2(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.buc()},
gb_t(){var w=this.Q
return w<0?new H.mM(1,A.k.F(this.y*0.18,360),0.85,1).iH():D.Q5[w]},
aQB(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb_t(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.cj,A.ay,v.aj())
m.toString
j.push(new B.Pl(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aB(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.Pl(d,new C.u(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aB(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.Pl(d,new C.u(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aXv(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb_t()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bk8(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aQB(e)
r.aYI(e,!0)
r.m(new B.euu())},
aXu(){this.ax=null
this.m(new B.eut())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.ms,n,n,n,new B.euD(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.bqv(k,o.f,o.y,o.at,n),A.au)],m)
if(!o.ay&&k.length===0)j.push(D.b3y)
k=C.aE(A.c3,new C.an(A.W,n,A.b_,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.euE(o),new B.euF(o),new B.euJ(o),n,n,n,n,n,n,n,n,n,new B.euK(o),new B.euL(o),n,n,n,!1,A.a8)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cQN[w]
j.push(new B.dA(v.b,o.z===v.a,new B.euM(o,v),v.c,A.bU,n))}u=C.a([new B.ET(A.c,o.Q<0,new B.euN(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.ET(D.Q5[t],o.Q===t,new B.euO(o,t),!1,n))
s=o.as
s=B.hy(A.bU,A.o.u(A.k.V(s)),"Size",36,4,new B.euP(o),s)
r=o.ch
q=r?A.nX:O.r4
q=C.a([new B.dA("Sound",r,new B.euQ(o),q,A.bU,n),new B.fg(A.r3,"Undo",new B.euG(o),A.c,n),new B.fg(D.xR,"Clear",new B.euH(o),A.cg,n)],m)
for(w=0;w<4;++w){p=D.d5j[w]
q.push(new B.ET(p,o.at.A(0,p),new B.euI(o,p),!1,n))}return B.jF(A.bU,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ev(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eO(j,"BRUSH",n),new B.eO(u,"COLOUR",n),s,new B.eO(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.bqv.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.M()
v=a4.e
w.r=v.gp(v)
a6.aX(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aO(p.r,A.ap,a5,a5,o)
o.push(new C.b5(A.d.gL(q).a,A.d.gL(q).b))
for(p=C.U(q),m=p.k("pR<1>"),l=new C.pR(q,1,a5,m),l.GS(q,1,a5,p.c),l=new C.bR(l,l.gM(0),m.k("bR<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bx(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gL(q)
$.W()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.W()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fz
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.ht(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fz
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fz
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbK().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mM(1,A.o.F(i*5,360),0.85,1).iH()
o=q[i-1]
m=q[i]
$.W()
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bO
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.L)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gL(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mM(1,A.o.F(a3*23,360),0.7,1).iH():l
a4.c40(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.Qz
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c40(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ap,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.E(new C.bF())
$.W()
p=C.M()
p.r=h.j(0.4).gp(0)
p.z=A.jk
d.aP(n,p)
p=C.M()
p.r=h.gp(0)
d.aP(n,p)},
ar(d){return!0}}
B.VD.prototype={
U(){return new B.aDl(new C.cs(null,x.A),new C.ar(new C.bb("NGMY",A.b3,A.aN),$.aw()),null,null)}}
B.aDl.prototype={
gIs(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tq,null,1,null,v)
w.cH(0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIs()
w.d9()
w.dR$.K(0,this.gbVL())},
bVM(){var w,v,u,t,s,r,q,p=this,o=p.gIs().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.lX:new C.m5(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dF(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dF(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.lf(s,D.aug[A.o.F(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIs().q()
var w=this.f
w.T$=$.aw()
w.P$=0
this.bui()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m5(h)
w=C.B(h,C.a3(h).k("J.E"))}v=D.Q5[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.ms,j,j,j,new B.eBs(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.awo[k.y]
s=C.bw(t,C.c_(C.av(C.c6(k.gIs(),new B.eBt(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,s,j,j),A.n),A.bd),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.T,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.br(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.D3,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eBu(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.ho,!0,A.a4,j,A.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.csQ[r]
i.push(new B.dA(q.b,k.r===q.a,new B.eBv(k,q),j,A.cj,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.ET(D.Q5[o],k.w===o,new B.eBw(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.nX:O.r4
l=C.a([new B.dA(m,n,new B.eBx(k),l,A.cj,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.ET(D.awo[o][0],k.y===o,new B.eBy(k,o),!1,j))
n.push(A.bp)
n.push(new B.fg(A.mo,"Replay",new B.eBz(k),A.c,j))
m=k.x
return B.jF(A.cj,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(A.bC,new C.ev(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.O,new B.eO(i,"MOVE",j),new B.eO(p,"COLOUR",j),new B.eO(l,"SOUND",j),new B.eO(n,"BACK",j),B.hy(A.cj,A.o.u(A.k.V(m)),"Size",96,28,new B.eBA(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bYy(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cP(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bu(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.F(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
A.d.a9(p)
p.push(new C.cP(h,A.J,30*v))
p.push(new C.cP(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.F(A.k.bu(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b8
else w=u?A.bU:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mJ.aw(0,t)
w=h
m=t
break
case"rainbow":w=new H.mM(1,A.k.F(g*360+e*40,360),0.75,1).iH()
A.d.a9(p)
p.push(new C.cP(w.j(0.7),A.J,18))
break
default:w=h}return C.dc(C.dT(C.eb(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aL3.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.aL9.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.a_5.prototype={}
B.V8.prototype={
U(){var w=C.a([],x.aS)
return new B.aCY(new C.cs(null,x.A),w,A.cI,A.au,$,A.bw,0,C.a([],x.X),null,null)}}
B.aCY.prototype={
gacQ(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b0E(){return new H.mM(1,this.f.aj()*360,0.6,1).iH()},
aql(d,e,f,g){var w=this,v=w.gacQ().ad(0,new C.u(Math.cos(e),Math.sin(e)).aF(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_5(v,new C.u(-t,s).aF(0,r).aF(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b0E(),C.a([],x.g)))},
bE6(d,e,f){return this.aql(d,e,f,!1)},
bE5(d,e){return this.aql(d,e,1,!1)},
csT(){var w,v,u,t=this
A.d.a9(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bE5(40+w*u/5,v.aj()*3.141592653589793*2)},
bF0(){var w=this.r
this.bE6(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.la()},
lr(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.au))return
w=a2.e
v=w.length
if(v===0&&a2.fQ$<300)return
u=a2.gacQ()
t=a3*a2.x/4
for(s=u.a,r=u.b,q=0;q<4;++q,v=o)for(p=0;o=w.length,p<o;w.length===v||(0,C.L)(w),++p){n=w[p]
o=n.a
m=s-o.a
o=r-o.b
l=Math.max(m*m+o*o,400)
k=Math.sqrt(l)
j=1e6*a2.w/l
i=new C.u(m/k*j,o/k*j)
if(a2.y)for(o=w.length,h=0;h<w.length;w.length===o||(0,C.L)(w),++h){g=w[h]
if(g===n)continue
m=g.a
j=n.a
f=m.a-j.a
j=m.b-j.b
e=Math.max(f*f+j*j,400)
m=Math.sqrt(e)
d=1e6*a2.w*0.02/e
a0=g.c/7
i=new C.u(i.a+f/m*d*a0,i.b+j/m*d*a0)}o=n.b
m=o.a+i.a*t
o=o.b+i.b*t
n.b=new C.u(m,o)
j=n.a
n.a=new C.u(j.a+m*t,j.b+o*t)}for(p=0;o=w.length,p<o;w.length===v||(0,C.L)(w),++p){n=w[p]
if(a2.z){o=n.e
if(o.length!==0){m=A.d.gal(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)A.d.cA(o,0)}else A.d.a9(n.e)}for(p=0;p<w.length;w.length===o||(0,C.L)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lR(v.a-s)!==J.lR(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fQ$-n.r>250){n.r=a2.fQ$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.lf("bell",D.aug[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a2(w,new B.efG(u),C.U(w).k("a2<1>")).gM(0)>0&&a2.ax)E.dF(70,"",300,0.6,0.8,"sine")
A.d.bn(w,new B.efH(a2,u))},
che(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gacQ()
for(w=j.a,v=j.b,u=e,t=d,s=0;s<220;++s){r=t.a
q=w-r
p=t.b
o=v-p
n=Math.max(q*q+o*o,400)
m=Math.sqrt(n)
l=1e6*this.w/n
q=u.a+q/m*l*0.016666666666666666
l=u.b+o/m*l*0.016666666666666666
u=new C.u(q,l)
t=new C.u(r+q*0.016666666666666666,p+l*0.016666666666666666)
if(A.o.F(s,3)===0)k.push(t)
if(m<16)break}return k},
gaUM(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aF(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.ms,r,r,r,new B.efu(s,d),r,r,r,r,"Share",r)],q),o=C.cp(new B.efv(s)),n=s.w
n=B.hy(A.ct,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.efw(s),n)
w=s.x
w=B.hy(A.ct,A.k.aa(w,1)+"x","Time",3,0.2,new B.efy(s),w)
v=s.Q
v=B.hy(A.ct,A.o.u(A.k.V(v)),"Planet size",16,3,new B.efz(s),v)
u=s.ax
t=u?A.nX:O.r4
return B.jF(A.ct,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eO(C.a([new B.dA("Sound",u,new B.efA(s),t,A.ct,r),new B.dA("Trails",s.z,new B.efB(s),A.Nj,A.ct,r),new B.dA("Planets pull each other",s.y,new B.efC(s),A.yg,A.ct,r)],q),r,r),new B.eO(C.a([new B.fg(A.mn,"Solar system",new B.efD(s),A.ct,r),new B.fg(A.nd,"Comet",new B.efE(s),A.c,r),new B.fg(A.ml,"Cluster",new B.efF(s),A.c,r),new B.fg(D.xR,"Clear",new B.efx(s),A.cg,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bjW.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.M()
w.r=D.W7.gp(0)
d.aX(new C.a9(0,0,0+g,0+f),w)
v=new C.eJ()
v.dB(5)
for(w=d.a,u=0;u<70;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.25+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.M()
s=x.O
t.saq(new C.bS(A.A,0.5,A.x,h,0,C.a([A.ct.j(0.45),A.K],s),h,h).av(0,C.bT(g,f)))
d.af(g,f,t)
t=C.M()
t.saq(D.ebd.av(0,C.bT(g,o)))
d.af(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.c=2.2*l+0.4
j.d=A.bO
j.r=r.j(l*0.8).gp(0)
p=j.H()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
k=m.d
q.r=k.j(0.3).gp(0)
q.z=G.mv
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.saq(new C.bS(P.pa,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).av(0,C.bT(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.M()
t.c=2
t.r=A.ja.gp(0)
d.bA(g,f,t)
t=C.M()
t.r=A.c.gp(0)
d.af(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
ar(d){return!0}}
B.aaU.prototype={}
B.Vy.prototype={
U(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bjh(new C.cs(null,x.A),w,v,A.cI,A.au,$,A.bw,0,C.a([],x.X),null,null)}}
B.bjh.prototype={
a_(){this.a1()
this.la()},
c41(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.e,v=k.r;w.length<A.k.V(k.x);){u=v.aj()*3.141592653589793*2
t=k.w
s=v.aj()
r=k.w
q=v.aj()
p=Math.cos(u)
o=Math.sin(u)
n=k.as
m=v.aj()
l=k.ax
if(l==="fish")l=170
else l=l==="fly"?50:300
w.push(new B.aaU(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.F(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lr(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.c41()
w=a2.f
A.d.bn(w,new B.eAU(a2))
v=a2.e
u=v.length
for(t=0;t<u;++t){s=v[t]
for(r=A.J,q=A.J,p=A.J,o=0,n=0;n<u;++n){if(t===n)continue
m=v[n]
l=m.a
k=s.a
j=l.a
i=j-k.a
l=l.b
k=l-k.b
h=i*i+k*k
if(h<4900){++o
r=new C.u(r.a+j,r.b+l)
l=m.b
q=new C.u(q.a+l.a,q.b+l.b)
if(h<676&&h>0.01){l=Math.sqrt(h)
h=26-Math.sqrt(h)
p=new C.u(p.a-i/l*h,p.b-k/l*h)}}}if(o>0){l=s.a
k=0.8*a2.y
j=s.b
i=1.6*a2.Q
g=7*a2.z
f=new C.u(0+(r.a/o-l.a)*k+(q.a/o-j.a)*i+p.a*g,0+(r.b/o-l.b)*k+(q.b/o-j.b)*i+p.b*g)}else f=A.J
l=s.a
k=l.a
if(k<40)f=new C.u(f.a+(40-k)*6,f.b+0)
j=a2.w
i=j.a-40
if(k>i)f=new C.u(f.a-(k-i)*6,f.b)
l=l.b
if(l<40)f=new C.u(f.a+0,f.b+(40-l)*6)
j=j.b-40
if(l>j)f=new C.u(f.a,f.b-(l-j)*6)
j=a2.ay
if(j!=null){k=j.a-k
l=j.b-l
e=Math.sqrt(k*k+l*l)
j=a2.at
if(j==="attract"&&e<260&&e>1)f=new C.u(f.a+k/e*420,f.b+l/e*420)
if(j==="scare"&&e<170&&e>1){i=170-e
f=new C.u(f.a-k/e*i*22,f.b-l/e*i*22)}if(j==="hunt"&&e<220&&e>1){j=220-e
f=new C.u(f.a-k/e*j*30,f.b-l/e*j*30)}}for(l=w.length,d=0;d<w.length;w.length===l||(0,C.L)(w),++d){k=w[d].a
j=s.a
i=k.a-j.a
j=k.b-j.b
e=Math.sqrt(i*i+j*j)
if(e<220&&e>1)f=new C.u(f.a+i/e*360,f.b+j/e*360)}l=s.b
k=l.a+f.a*a3
l=l.b+f.b*a3
s.b=new C.u(k,l)
a0=Math.sqrt(k*k+l*l)
l=a2.as
k=a2.at==="hunt"&&a2.ay!=null?1.5:1
if(a0>0.01){j=s.b
k=A.k.D(a0,l*0.5,l*k)
s.b=new C.u(j.a/a0*k,j.b/a0*k)}l=s.a
k=s.b
s.a=new C.u(l.a+k.a*a3,l.b+k.b*a3)}a1=w.length
A.d.bn(w,new B.eAV(a2))
if(w.length<a1&&a2.ch)B.lf("bell",12+a2.r.aB(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fQ$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fQ$
B.lf("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.ms,l,l,l,new B.eAJ(m,d),l,l,l,l,"Share",l)],k),i=C.cp(new B.eAK(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cSp[w]
h.push(new B.dA(v.b,m.at===v.a,new B.eAL(m,v),v.c,A.b4,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cCE[w]
u.push(new B.dA(t.b,m.ax===t.a,new B.eAM(m,t),l,A.b4,l))}s=m.ch
r=s?A.nX:O.r4
r=C.a([new B.dA("Sound",s,new B.eAN(m),r,A.b4,l)],k)
s=m.x
s=B.hy(A.b4,A.o.u(A.k.V(s)),"How many",150,15,new B.eAO(m),s)
q=B.hy(A.b4,l,"Together",2.5,0,new B.eAP(m),m.y)
p=B.hy(A.b4,l,"Apart",2.5,0,new B.eAQ(m),m.z)
o=B.hy(A.b4,l,"Same way",2.5,0,new B.eAR(m),m.Q)
n=m.as
return B.jF(A.b4,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eO(h,"TOUCH",l),new B.eO(u,"LOOK",l),new B.eO(r,l,l),s,q,p,o,B.hy(A.b4,A.o.u(A.k.V(n)),"Speed",280,50,new B.eAS(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.brm.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.acO,D.bj_],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.db,R.KS],v):C.a([D.bfZ,D.b7o],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.M()
s.saq(new C.a8(A.b0,A.b6,A.x,w,a3,a3).av(0,new C.a9(0,0,v,u)))
a5.aX(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){q=v[r].a
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.cj.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.cj.j(0.25).gp(0)
n.z=G.mv
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mM(1,j,0.7,1).iH()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jk
o=f.H()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
f.r=A.c.j(g).gp(0)
o=f.H()
s.drawCircle(j.a,j.b,2.6,o)
o.delete()
break
case"bird":J.by(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
e=Math.sin(l+j)*5
j=C.a([],m)
d=new C.aO(t,A.ap,a3,a3,j)
j.push(new C.b5(8,0))
j.push(new C.ap(-6,-7-e))
j.push(new C.ap(-2,0))
j.push(new C.ap(-6,7+e))
j.push(new C.bF())
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=h.gp(0)
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cF(j)).a,o)
o.delete()
s.restore()
break
default:J.by(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=C.a([],m)
d=new C.aO(t,A.ap,a3,a3,j)
j.push(new C.b5(9,0))
j.push(new C.cS(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cS(0,6,9,0))
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cy,0.6)
f.toString
j.saq(new C.a8(A.a3,A.a7,A.x,C.a([h,f],q),a3,a3).av(0,D.eF6))
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cF(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cg
else a1=v==="scare"?A.cj:A.b4
v=u?12:22
u=C.M()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.af(a4,v,u)}},
ar(d){return!0}}
B.abm.prototype={}
B.TG.prototype={
U(){var w=C.a([],x.bi)
return new B.aBy(w,A.cI,A.au,C.T(x.N,x.S),$,A.bw,0,C.a([],x.X),null,null)}}
B.aBy.prototype={
gHO(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gabT(){return 54-8*(this.r/100)},
a_(){this.a1()
this.la()
B.za("chain_burst").bz(new B.dEf(this),x.P)},
aXx(){return B.vJ("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
ayU(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
A.d.a9(k)
l.z=l.y=!1
w=l.as=0
l.at=null
v=18+A.k.V(l.r*0.85)
for(u=l.e;w<v;++w){t=u.aj()*3.141592653589793*2
s=u.aj()
r=l.f
q=u.aj()
p=l.f
o=Math.cos(t)
n=Math.sin(t)
m=(30+l.r*0.45)*(0.6+u.aj()*0.8)
k.push(new B.abm(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.mM(1,u.aj()*360,0.6,1).iH()))}},
YO(d){var w,v=this
if(d==null)return 0
w=(v.fQ$-d)/1000
if(w<0.4)return v.gabT()*A.dV.aw(0,w/0.4)
if(w<1.1)return v.gabT()
if(w<1.5)return v.gabT()*(1-(w-1.1)/0.4)
return 0},
lr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.au)||!j.Q)return
w=j.d
if(w.length===0)j.ayU()
for(v=w.length,u=0;u<v;++u){t=w[u]
if(t.d!=null)continue
s=t.a
r=t.b
q=r.a
p=r.b
o=s.a+q*d
s=s.b+p*d
t.a=new C.u(o,s)
if(o<8||o>j.f.a-8)r=t.b=new C.u(-q,p)
if(s<8||s>j.f.b-8)t.b=new C.u(r.a,-r.b)}if(j.y){n=C.a([],x.U)
v=j.at
if(v!=null)n.push(new C.y(v,j.YO(j.ax)))
for(v=A.d.gae(w),s=new C.fh(v,new B.dEg());s.C();){r=v.gS(0)
n.push(new C.y(r.a,j.YO(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.L)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fQ$
E.dF(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eT()
break}}}if(!(j.at!=null&&j.YO(j.ax)>0||A.d.b7(w,new B.dEh(j)))&&j.fQ$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gHO()){if(j.as>=j.gHO()*1.5)k=3
else k=j.as>=j.gHO()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.Bj("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aXx()}else E.dF(120,"",300,0,0.3,"saw")}}},
aXw(d){this.m(new B.dE5(this,d))
this.aXx()},
acR(){var w=0,v=C.j(x.H),u=this,t,s
var $async$acR=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dE8(u),s,null,!0,!0,x.S),$async$acR)
case 2:t=e
if(t!=null)u.aXw(t)
return C.h(null,v)}})
return C.i($async$acR,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gHO(),t=w.x.h(0,""+w.r)
return B.jF(A.bU,A.h9,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cp(new B.dEc(w,t==null?0:t,u)),"CHAIN BURST",C.A(C.a([new B.fg(A.r_,"Levels",w.gc42(),A.bU,v),new B.fg(A.jY,"New board",new B.dEd(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
atR(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOA,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bWe(d,e){return this.atR(d,e,A.c)}}
B.b9q.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.M()
w.r=D.Et.gp(0)
d.aX(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cJN(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.L)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.W()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.j(0.25).gp(0)
p.z=G.mv
m=p.H()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.gp(0)
m=p.H()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
ar(d){return!0}}
B.aK2.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvx.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.bt9()}}
B.aKS.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvO.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.bu0()}}
B.aL6.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvW.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.buf()}}
B.Fm.prototype={
gcLV(){return this.a.aC(0,this.b).gcl()>4}}
B.acb.prototype={}
B.V2.prototype={
U(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.biR(new C.cs(null,x.A),w,v,A.cI,A.au,$,A.bw,0,C.a([],x.X),null,null)}}
B.biR.prototype={
aOj(d){return new H.mM(1,A.o.F(d*29,360),0.6,1).iH()},
Zy(d){var w,v=D.C2.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bu(d.a/s*t),0,t-1)
return v[A.o.F(w,u)]+12*A.o.e3(w,u)},
aQR(d){A.d.bn(this.e,new B.eb9(this,d))},
cp4(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gcl()
return d.aC(0,e.ad(0,w.aF(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gcl()},
axs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
A.d.a9(f)
w=g.w
v=w.a
u=w.b
switch(d){case"stairs":for(w=u*0.045,t=v*0.5,s=0;s<7;++s){r=(s&1)===0
q=v*(r?0.08:0.42)
p=u*(0.2+s*0.1)
o=new C.u(q,p)
n=q+t
m=p+w
l=new C.u(n,m)
k=g.Zy(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.Fm(p,r,k,new H.mM(1,A.o.F(k*29,360),0.6,1).iH()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.Zy(h)
f.push(new B.Fm(h,h,k,new H.mM(1,A.o.F(k*29,360),0.6,1).iH()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.Zy(h)
f.push(new B.Fm(h,h,k,new H.mM(1,A.o.F(k*29,360),0.6,1).iH()))}}},
a_(){this.a1()
this.la()},
c44(d,e){var w,v=this.fQ$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.lf(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lr(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.acb(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.mM(1,v.aj()*360,0.5,1).iH()))}if(u>3)a2.as=0
for(v=w.length,u=a2.e,t=a3/2,s=900*t,r=0;r<w.length;w.length===v||(0,C.L)(w),++r){q=w[r]
for(p=0;p<2;++p){o=q.b
n=o.a+0
o=o.b+s
m=q.b=new C.u(n,o)
l=q.a
k=l.a+n*t
l=l.b+o*t
j=q.a=new C.u(k,l)
if(k<7){m=q.a=new C.u(7,l)
o=q.b=new C.u(-n*0.6,o)
n=m}else{n=j
o=m}m=a2.w.a-7
if(n.a>m){q.a=new C.u(m,n.b)
q.b=new C.u(-o.a*0.6,o.b)}for(o=u.length,i=0;i<u.length;u.length===o||(0,C.L)(u),++i){h=u[i]
g=h.a
n=h.b
m=g.a
l=n.a
k=m-l
j=g.b
n=n.b
f=j-n
if(Math.sqrt(k*k+f*f)>4){l-=m
n-=j
k=q.a
e=A.k.D(((k.a-m)*l+(k.b-j)*n)/(l*l+n*n),0,1)
g=new C.u(m+l*e,j+n*e)
d=4}else d=10
n=q.a
m=g.a
l=n.a-m
k=g.b
n=n.b-k
a0=Math.sqrt(l*l+n*n)
j=7+d
if(a0<j&&a0>0.001){l/=a0
n/=a0
q.a=new C.u(m+l*j,k+n*j)
j=q.b
a1=j.a*l+j.b*n
if(a1<0){a2.c44(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bn(w,new B.eby(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.nX:O.r4,A.ad,p,p,p,21),p,p,p,new B.ebn(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.ms,p,p,p,new B.ebo(q,d),p,p,p,p,"Share",p)],o),m=C.cp(new B.ebp(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cVF[w]
l.push(new B.dA(v.b,q.x===v.a,new B.ebq(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.C2.gee(D.C2));t.C();){s=t.gS(t)
u.push(new B.dA(s,q.y===s,new B.ebr(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.axg[w]
t.push(new B.dA(r.b,q.z===r.a,new B.ebs(q,r),p,A.b8,p))}s=q.Q
return B.jF(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eO(l,"TOOL",p),new B.eO(u,"SCALE",p),new B.eO(t,"SOUND",p),B.hy(A.b8,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.ebt(q),s),new B.eO(C.a([new B.fg(D.bDo,"Stairs",new B.ebu(q),A.b8,p),new B.fg(An.N2,"Pinball",new B.ebv(q),A.c,p),new B.fg(A.ml,"Random",new B.ebw(q),A.c,p),new B.fg(D.xR,"Clear",new B.ebx(q),A.cg,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bgt.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.M()
w.saq(D.bU5.av(0,new C.a9(0,0,a0,a1)))
a2.aX(new C.a9(0,0,a0,a1),w)
for(a0=e.b,a1=a0.length,w=a2.a,v=x.O,u=e.f,t=0;t<a0.length;a0.length===a1||(0,C.L)(a0),++t){s=a0[t]
r=A.k.D(1-(u-s.e)/280,0,1)
q=s.a
p=s.b
o=q.a
n=p.a
m=o-n
l=q.b
p=p.b
k=l-p
j=8*r
i=s.d
h=0.5*r
if(Math.sqrt(m*m+k*k)>4){q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.jk
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.c=6
q.r=C.aq(i,A.c,r*0.7).gp(0)
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=i.j(0.25+h).gp(0)
p.z=A.jk
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.saq(new C.bS(P.pa,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).av(0,C.bT(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.M()
u.c=5
u.d=A.bO
u.r=A.az.gp(0)
a2.bA(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.L)(a0),++t){f=a0[t]
u=f.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.re
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new C.bS(P.pa,0.5,A.x,d,0,C.a([A.c,p],v),d,d).av(0,C.bT(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
ar(d){return!0}}
B.acG.prototype={}
B.V7.prototype={
U(){var w=C.a([],x.gB)
return new B.aCX(new C.cs(null,x.A),w,A.cI,A.au,$,A.bw,0,C.a([],x.X),null,null)}}
B.aCX.prototype={
gaXy(){var w=this.w
return new C.u(w.a/2,w.b/2)},
axD(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
ayQ(d){var w=D.C2.h(0,this.y),v=5-d,u=w.length
return w[A.o.F(v,u)]+12*A.o.e3(v,u)},
a_(){this.a1()
this.la()},
aPF(){var w,v,u,t,s=this.e
A.d.a9(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.acG(w,A.k.F(t/v+u,1)))}},
lr(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.au))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fQ$
if(p.Q){r=p.z
s=p.ayQ(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.lf(r,s+12,q,0.55)}}}},
c45(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaXy()),e=f.gcl()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.axD(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.F((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=C.a(s.slice(0),C.U(s))
r=s.length
q=d.a
p=d.b
o=0
for(;o<s.length;s.length===r||(0,C.L)(s),++o){n=s[o]
m=n.a
if(m!==g.a)continue
l=n.b*2*3.141592653589793-1.5707963267948966
k=h.w
j=Math.cos(l)
i=Math.sin(l)
m=h.axD(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.ef3(h,n).$0()
h.c.e7()
return}}h.m(new B.ef4(g,h,t))
if(h.Q)B.lf(h.z,h.ayQ(g.a)+12,700,0.5)
C.eT()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.nX:O.r4,A.ad,q,q,q,21),q,q,q,new B.efb(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.ms,q,q,q,new B.efc(r,d),q,q,q,q,"Share",q)],p),n=C.cp(new B.efd(r)),m=r.x
m=B.hy(A.by,""+A.k.V(m),"Tempo",180,40,new B.efe(r),m)
w=C.a([],p)
for(v=J.aV(D.C2.gee(D.C2));v.C();){u=v.gS(v)
w.push(new B.dA(u,r.y===u,new B.eff(r,u),q,A.by,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.axg[t]
v.push(new B.dA(s.b,r.z===s.a,new B.efg(r,s),q,A.by,q))}return B.jF(A.by,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eO(w,"SCALE",q),new B.eO(v,"SOUND",q),new B.eO(C.a([new B.fg(A.dW,"Demo",new B.efh(r),A.by,q),new B.fg(A.ml,"Random",new B.efi(r),A.c,q),new B.fg(D.xR,"Clear",new B.efj(r),A.cg,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.bjX.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.M()
w.r=D.W7.gp(0)
a5.aX(new C.a9(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aC(0,new C.u(0,u))
r=C.M()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.saq(new C.a8(A.b6,A.b0,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).av(0,new C.a9(o,m,o+2,m+u)))
a5.bA(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mM(1,A.k.F(s.$1(l)*23,360),0.55,1).iH()
o=v.$1(l)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.dbJ[A.o.F(A.o.F(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kq(new C.ep(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.G(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.cc,new C.jo(1),a4,a4,a4,a4,A.ca,a4)
i.eH()
o=i.b.c
m=J.fMA(v.$1(l))
h=i.b.a.c
i.a5(a5,new C.u(p+-o/2,n+(m-h.gbc(h)-2)))}w=C.M()
w.saq(D.eaQ.av(0,C.bT(t,16)))
a5.af(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.L)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mM(1,A.k.F(s.$1(a0)*23,360),0.55,1).iH()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fMA(v.$1(a0))
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jk
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.saq(new C.bS(P.pa,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).av(0,C.bT(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
ar(d){return!0}}
B.aKQ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvM.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.btZ()}}
B.aKR.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvN.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.bu_()}}
B.t5.prototype={}
B.b8j.prototype={}
B.V5.prototype={
U(){var w=x.S
return new B.aCV(C.a([],x.aq),C.T(w,w),C.aX(w),D.eKS)}}
B.aCV.prototype={
a_(){this.a1()
B.za("molecule_maker").bz(new B.eey(this),x.P)},
aip(d){var w={}
w.a=0
this.f.bJ(0,new B.eek(w,d))
return w.a},
gaXE(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)t.push(w[u].a)
return B.hWR(t,this.f,D.a2_[this.d])},
c4m(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eJ()
w.dB(t*7+3)
t=v.y
v.m(new B.eee(v,e,t.a,w,t.b))
B.vM("pop",u.length,90,0.35)},
avT(d){return this.m(new B.eef(this))},
aXF(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c4s(d){this.m(new B.eej(this,this.aXF(d)))},
clA(){var w=this.r
if(w==null)return
this.m(new B.eei(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a2_[k.d],h=k.gaXE()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.vP.h(0,w[u].a).a-k.aip(u)
w=i.c
w=w.gdK(w)
t=w.dt(w,new B.ees(),x.N).aI(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b4:A.hv
r=x.p
s=C.v(C.a([new C.C(A.fI,B.f8t(w,s,h&&k.d<12?new B.fg(A.iU,"Next",new B.eet(k),A.b4,j):j),j),C.E(C.cp(new B.eeu(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dA(p+D.a2_[u].b,k.d===u,new B.eev(k,u),j,A.hv,j))}q=C.a([],r)
for(p=D.vP.gdK(D.vP),p=p.gae(p);p.C();){o=p.gS(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dA:m.b
q.push(new B.dA(n+" \xb7 "+m.a,!1,new B.eew(k,o),j,l,j))}return B.jF(A.hv,A.h9,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eO(w,"GOAL",j),new B.eO(q,"ADD",j),new B.eO(C.a([new B.dA("Remove selected atom",!1,k.gclz(),A.e5,A.cg,j),new B.dA("Clear all",!1,k.gc4n(k),A.jY,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bha.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.F(t*37,10)
r=A.o.F(t*53,10)
$.W()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hv.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bJ(0,new B.dmV(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.vP.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bT(j,26)
if(q===t){$.W()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jk
p=h.H()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.W()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g=l.b
f=C.aq(g,A.c,0.5)
f.toString
e=C.aq(g,A.w,0.5)
e.toString
h.saq(new C.bS(A.Jq,0.5,A.x,a3,0,C.a([f,g,e],r),I.avr,a3).av(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aB:A.c
d=new C.kq(new C.ep(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.G(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.cc,new C.jo(1),a3,a3,a3,a3,A.ca,a3)
d.eH()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a5(a4,new C.u(n.a-h/2,n.b-j.gbc(j)/2))
n=k===0
a0=n?A.bo:A.aH
j=m.b
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.kq(new C.ep(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.np),A.a4,A.cc,new C.jo(1),a3,a3,a3,a3,A.ca,a3)
a1.eH()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a5(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbc(j)/2)))}if(n===0){d=C.i1(a3,a3,a3,a3,D.eTl,A.a4,A.cc,a3,A.eh,A.ca)
d.eH()
d.a5(a4,new C.u((w-d.b.c)/2,v/2))}},
ar(d){return!0}}
B.U3.prototype={
U(){var w=x.s
return new B.bi6(C.a([],w),C.a([],w))}}
B.bi6.prototype={
a_(){this.a1()
this.ava()
B.za("dna_lab").bz(new B.dN1(this),x.P)},
gb1S(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a31.h(0,w[u])
t.toString
s.push(t)}return A.d.fW(s)},
ga8q(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb1S(),w,v))}return u},
ava(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eJ()
k.dB(l.e*31+l.d*7+C.Bw(new C.S(Date.now(),0,!1)))
w=new B.dMR(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mC(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a31.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fW(r))}if(!A.d.b7(t,new B.dMQ()))break}l.f=v
A.d.a9(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b_G()},
b_G(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fVi(s.ga8q()[r])
v=J.dH(D.C3.gee(D.C3),new B.dMS(w)).dG(0)
u=new C.eJ()
u.dB(r+s.e)
A.d.ft(v,u)
u=C.a([w],x.s)
A.d.v(u,C.dd(v,0,C.dJ(3,"count",x.S),C.U(v).c))
t=new C.eJ()
t.dB(s.e*3+r)
A.d.ft(u,t)
s.z=u},
aXD(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dhG.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a31.h(0,w.f[v])
u.toString
break A}u=B.fVi(w.ga8q()[v])
break A}w.m(new B.dMP(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dN_(),e=new B.dMV(),d=h.d===2?h.gb1S():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mE,g,g,g),A.at],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bU.j(0.18):A.K
q=new C.aW(10,10)
p=new C.aA(t.length===s?A.bU:A.bF,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga8q()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cn(A.aO,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bP(p,p,p,p),new C.bq(q,q,q,q),g,g,A.n),g,g,g,D.boa,A.eo,g,g,g))}v.push(C.bY(A.bz,u,A.br,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bY(A.bz,u,A.br,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cr(A.A,g,g,C.X(Ak.Na,j<t.length?A.az:A.bF,g,g,g,14),g),g))
A.d.v(v,C.a([new C.C(A.Lw,C.bY(A.bz,u,A.br,0,0),g)],a0))}v.push(A.an)
v.push(C.d(w,g,g,g,g,g,g,Q.mE,g,g,g))
v.push(A.at)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b4.j(0.25):A.dp
q=new C.aW(12,12)
o=j<t.length
p=new C.aA(o?A.b4:A.b2,1,A.q,-1)
if(o){o=D.C3.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c_
u.push(C.p(g,new C.x(o,g,new C.G(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bP(p,p,p,p),new C.bq(q,q,q,q),g,g,A.n),g,g,g,g,A.ei,g,g,g))}v.push(C.bY(A.bz,u,A.br,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bY(A.bz,u,A.br,0,0))}v.push(A.aA)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.f8t(u,t>=(h.d===2?3:9)?A.b4:A.bU,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.f8t(u,A.bU,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.Td,g,g,g))
v=C.cd(C.v(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bC,g,g,A.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dA(D.d0a[j],h.d===j,new B.dMW(h,j),g,A.bU,g))
u=C.a([new B.eO(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bH(A.a3,g,g,new B.fg(A.jY,"New strand",new B.dMX(h),A.b4,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.L)(t),++l){i=t[l]
q=D.C3.h(0,i)
q.toString
a0.push(new B.fg(D.a__,q,new B.dMY(h,i),A.bU,g))}u.push(C.bY(A.bz,a0,A.br,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.aul:D.cKO
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aW(14,14)
a0.push(C.aE(g,C.p(A.A,new C.x(k,g,D.eTA,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bq(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dMZ(h,k),g,g,g,g,g,g,!1,A.a8))}u.push(C.A(a0,A.m,g,A.pX,A.j,0,g,g))}return B.jF(A.bU,A.h9,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.Uj.prototype={
U(){return new B.aC1(A.bw,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aC1.prototype={
a_(){var w,v=this
v.a1()
w=v.qk(v.gc4o())
w.j2(0)
v.d!==$&&C.aP()
v.d=w
B.za("ecosystem").bz(new B.dPR(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bto()},
gaLE(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c4p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
m.e=d
if(l<=0)return
for(w=l*1.5/4,v=x.n,u=0;u<4;++u){t=m.f
s=m.x
r=m.y
q=m.z
p=t[0]
o=t[1]
n=t[2]
m.f=C.a([A.k.D(p+(s*(100-p)*0.05-0.0016*o*p)*w,0,100),A.k.D(o+(0.9*r*o*p/(p+40)-0.019*q*o*n-0.35*o)*w,0,400),A.k.D(n+(0.01*q*o*n-0.4*n)*w,0,200)],v)}w=m.w+=l
v=m.r
if(v.length===0||w-A.d.gal(v)[3]>0.25){w=C.B(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)A.d.cA(v,0)}if(m.gaLE()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.F(A.k.bu(w),5)===0)B.vJ("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dPE())},
a9C(d){this.m(new B.dPD(this,d))
B.vM("pop",3,120,0.4)},
c4r(){return this.m(new B.dPF(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.C(D.XJ,B.f8t(r,t.gaLE()?A.b4:A.cg,s),s),C.E(new C.C(D.boI,C.bw(C.m(18),C.b3(s,s,s,new B.bcu(t.f,t.r,t.w,s),A.f0),A.aq),s),1),new C.C(A.eO,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.f_y,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hy(A.b4,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dPJ(t),w)
v=t.y
v=B.hy(A.bR,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dPK(t),v)
u=t.z
return B.jF(A.b4,A.h9,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hy(A.ct,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dPL(t),u),new B.eO(C.a([new B.dA("Drought",!1,new B.dPM(t),A.ye,A.aM,s),new B.dA("Disease",!1,new B.dPN(t),D.bDg,A.by,s),new B.dA("+ Foxes",!1,new B.dPO(t),s,A.ct,s),new B.dA("+ Rabbits",!1,new B.dPP(t),s,A.bR,s),new B.dA("Reset",!1,t.gc4q(),A.jY,A.aS,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bcu.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.M()
w.saq(D.bS7.av(0,new C.a9(0,0,d,a0)))
a1.aX(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.uP,A.bo,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.M()
t.r=a0.gp(0)
a1.aX(new C.a9(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eJ()
r.dB(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.hg.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d2h(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.M()
t.r=D.bbR.gp(0)
a1.aX(new C.a9(0,f,d,f+g),t)
i=C.M()
i.r=A.dp.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d2j(h,j,a1)
g.$3(0,100,A.bo)
g.$3(1,120,A.bR)
g.$3(2,24,A.ct)
g=new B.d2i(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bo,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bR,102)
g.$3("Foxes "+A.k.V(w[2]),A.ct,200)},
ar(d){return!0}}
B.aKg.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.aQG.prototype={
guI(){return A.d.cI(this.a,0,new B.bEK())}}
B.Ty.prototype={
U(){var w=x.S
return new B.bhL(B.hTW(),C.c2(5,0,!1,w),C.aX(w),A.bw,null,null)}}
B.bhL.prototype={
gvE(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cI(t,0,new B.dAq())},
a_(){var w,v=this
v.a1()
w=v.qk(new B.dAD(v))
w.j2(0)
v.x!==$&&C.aP()
v.x=w
B.za("balance_lab").bz(new B.dAE(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bt1()},
cvV(d){var w,v=this
v.m(new B.dAr(v,d))
B.vM("click",v.f[d],60,0.4)
if(v.gvE()===v.d[v.e].guI()&&v.r.K(0,v.e)){B.vM("zap",10,260,0.5)
w=v.r
w=C.B(w,C.a3(w).k("co.E"))
B.vJ("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.K(k,new B.dAw(),C.U(k).k("K<1,n>")).aI(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aI(k," + ")
if(o.gvE()===m[o.e].guI())s="\u2696\ufe0f Balanced! "+m[o.e].guI()+" = "+o.gvE()+". The torques are equal, so the seesaw stays level."
else s=o.gvE()>m[o.e].guI()?"The right side is too strong ("+o.gvE()+" vs "+m[o.e].guI()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guI()+" vs "+o.gvE()+"). Add weight to the right, or place it further from the middle."
k=o.gvE()===m[o.e].guI()?A.b4:A.aM
k=B.byI(s,k,o.gvE()===m[o.e].guI()&&o.e<m.length-1?new B.fg(A.iU,"Next",new B.dAx(o),A.b4,n):n)
w=C.E(C.cp(new B.dAy(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].guI(),n,n,n,n,n,n,D.aPN,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.C(D.XJ,k,n),w,new C.C(D.agq,C.A(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvE(),n,n,n,n,n,n,D.aPN,A.dL,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dA(w+p,o.e===v,new B.dAz(o,v),n,A.aM,n))}return B.jF(A.aM,A.h9,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eO(u,"LEVEL",n),new B.eO(C.a([new B.dA("Clear right side",!1,new B.dAA(o),A.jY,A.cg,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b8v.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aO($.W().r,A.ap,null,null,C.a([],x.v))
i.E(new C.b5(h,f))
w=f+70
i.E(new C.ap(h-30,w))
i.E(new C.ap(h+30,w))
i.E(new C.bF())
v=C.M()
v.r=A.ak.gp(0)
d.aP(i,v)
v=h-120
i=C.M()
i.r=A.aK.gp(0)
d.aX(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.by(i.save())
i.translate(h,f)
d.iX(0,j.b)
u=g*5.8
t=C.bA(new C.a9(-u,-9,u,9),A.hc)
w=C.M()
w.saq(D.bUN.av(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aD(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hI.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fln(d,""+Math.abs(s),new C.u(w,22),A.c_,10)}q=new B.cCk(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aS)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bU)
if(w[s]===0){l=C.bA(C.cm(new C.u(m,-22),22,v),A.hc)
$.W()
k=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b2.gp(0)
r=k.H()
i.drawRRect(C.er(l),r)
r.delete()
B.fln(d,"+",new C.u(m,-22),A.c_,14)}}i.restore()
$.W()
i=C.M()
i.r=(j.e?A.b4:A.aL).gp(0)
d.af(new C.u(h,f),7,i)},
ar(d){return!0},
gjc(){return this.e}}
B.Ux.prototype={
U(){return new B.bii(C.a([16,32,12,24],x.t),C.aX(x.S),A.bw,null,null)}}
B.bii.prototype={
ga00(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gad_(){var w=this.ga00(),v=this.r,u=D.awZ[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.db(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qk(new B.dTU(v))
w.j2(0)
v.x!==$&&C.aP()
v.x=w
B.za("gear_lab").bz(new B.dTV(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.btw()},
c4t(d,e){var w,v=this
v.m(new B.dTK(v,d,e))
if(v.gad_()&&v.w.K(0,v.r)){B.vM("zap",8,240,0.45)
w=v.w
w=C.B(w,C.a3(w).k("co.E"))
B.vJ("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga00(),n=r.ga00(),m=D.awZ[r.r].a
m=r.gad_()?"\u2705 Done! Ratio "+A.k.aa(r.ga00(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gad_()?A.b4:A.ct
v=r.d
u=x.p
n=C.v(C.a([new C.C(D.XJ,B.byI(m,w,r.gad_()&&r.r<7?new B.fg(A.iU,"Next",new B.dTO(r),A.b4,q):q),q),C.E(C.b3(q,q,q,new B.bdY(v,r.f,q),A.f0),1),new C.C(D.agq,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.ga00(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,A8.SO,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dA(m+s,r.r===t,new B.dTP(r,t),q,A.ct,q))}p=r.e
u=C.a([new B.eO(o,"GOAL",q),B.hy(A.aS,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dTQ(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.auy("Gear "+s+" teeth",p,new B.dTR(r,t),8,40,D.d9n[t],""+p,q))}return B.jF(A.ct,A.h9,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.bdY.prototype={
bOc(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ap,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.ec4,D.egS,D.ewo,D.enU],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b5(m,l)
j.push(p)
m=i.f
if(m!=null)p.bx(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ap(m,l)
j.push(p)
m=i.f
if(m!=null)p.bx(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}}}i.E(new C.bF())
return i},
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.n)
for(w=this.b,v=0;v<4;++v)g.push(w[v]*2.2)
u=g[0]
t=u+g[1]+6
s=g[2]
r=g[3]
q=t+s+r+6
p=-u-6
o=q+r+6
n=A.d.fo(g,A.pc)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.by(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bX(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.da2(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.d8,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cZ)
h.$5(new C.u(0,0),g[0],w[0],j,A.mQ)
h.$5(new C.u(t,0),g[1],w[1],i,A.fD)
s.restore()
s=new B.da3(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aS)
s.$3("2+3 \xb7 shared axle",t,A.ct)
s.$3("4 \xb7 output",q,A.b4)},
ar(d){return!0}}
B.TH.prototype={
U(){var w=$.aw()
return new B.bhY(new C.ar(new C.bb("Meet me at noon",A.b3,A.aN),w),new C.ar(new C.bb("LEMON",A.b3,A.aN),w),C.aX(x.S))}}
B.bhY.prototype={
a_(){this.a1()
this.aWk()
B.za("cipher_lab").bz(new B.dEC(this),x.P)},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
aWk(){this.y=1+A.cI.aB(25)
this.z=0},
ga8U(){var w=this
return B.a0Y(B.a0Y(D.GH[w.x],w.y),-w.z)===D.GH[w.x]},
gawR(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a0Y(u,v.w)
break A}if(1===t){w=new C.K(C.a(B.a0Y(u,0).split(""),x.s),new B.dEk(),x.dv).fW(0)
break A}w=B.i5C(u,v.e.a.a)
break A}return w},
aRK(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d4(d.toUpperCase()),v=x.e8,w=new C.bR(w,w.gM(0),v.k("bR<bU.E>")),v=v.k("bU.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fo(q,A.zV))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aW(2,2)
v.push(new C.bD(1,A.bi,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aS,r,r,new C.bq(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.LR,r,r,r,r),new C.x(C.jE(65+s),r,D.f1m,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.lR,A.j,0,A.p),r))}return new C.a7(r,70,C.A(v,A.dz,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.br(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l_,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dEt(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.eWF,!0,A.a4,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.br(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l_,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dEu(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iG,!0,A.a4,o,A.am,o,o,o,o)],v))}w.push(A.aA)
w.push(D.frD)
w.push(A.at)
v=A.aS.j(0.12)
u=C.m(14)
t=C.I(A.aS.j(0.4),A.q,1)
w.push(C.p(o,C.zs(p.gawR().length===0?"\u2026":p.gawR(),D.f0l,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bC,o,o,o))
w.push(A.ac)
w.push(B.byI(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aS,o))
w.push(A.ac)
w.push(D.f8q)
w.push(A.at)
w.push(p.aRK(p.gawR()))
w.push(A.at)
w.push(D.faN)
s=C.cB(w,o,A.bC,o,o,A.ah,!1)}else{w=B.byI("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a0Y(D.GH[p.x],p.y),o,o,o,o,o,o,D.f0V,o,o,o)
u=(p.ga8U()?A.b4:A.aS).j(0.14)
t=C.m(14)
r=C.I((p.ga8U()?A.b4:A.aS).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fln,v,A.S,D.ffO,C.p(o,C.d(B.a0Y(B.a0Y(D.GH[p.x],p.y),-p.z),o,o,o,o,o,o,D.f2o,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bC,o,o,o),A.ac,p.aRK(B.a0Y(D.GH[p.x],p.y)),A.O],x.p)
if(p.ga8U())t.push(B.byI("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b4,new B.fg(A.jY,"Next",new B.dEv(p),A.b4,o)))
s=C.cB(t,o,A.bC,o,o,A.ah,!1)}w=p.f
v=x.p
w=C.a([new B.eO(C.a([new B.dA("Make a secret",w===0,new B.dEw(p),A.jh,A.aS,o),new B.dA("Crack a code",w===1,new B.dEx(p),A.pN,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dA(n[q],p.r===q,new B.dEy(p,q),o,A.aS,o))
v=C.a([new B.eO(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hy(A.aS,""+u,"Shift",25,1,new B.dEz(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hy(A.aM,""+v,"Shift back",25,0,new B.dEA(p),v))}return B.jF(A.aS,A.h9,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aJV.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.aKo.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.e9.prototype={}
B.ti.prototype={
ap5(d,e,f,g){var w=this
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
B.a9v.prototype={}
B.aaz.prototype={}
B.a3D.prototype={
bbB(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.ha()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a9v(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c0x(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bn(w,new B.bKE())},
aiS(d,e,f,g){var w="p"+this.c++,v=new B.ti(w,e,f,g)
v.ap5(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bn(this.b,new B.bKP(e))},
a9(d){A.d.a9(this.a)
A.d.a9(this.b)},
cDN(d,e,f,g,h){return A.d.b7(this.b,new B.bKK(e,f,g,h))},
ajF(d,e,f,g){var w
if(d===f||this.cDN(0,d,e,f,g))return null
w=new B.aaz(d,e,f,g)
this.b.push(w)
return w},
azn(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zq(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
amg(d){return this.Lg(d)&&!d.x&&d.cx>this.zq(d)},
b4h(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Lg(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c4u(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yK.h(0,v)
if(w!=null)return w.a
return 100},
uQ(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c0x(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.U(v).k("a2<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a2(v,new B.bKQ(a2),t).cI(0,0,new B.bKR(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.T(x.N,u)
n=new B.bKT(o)
m=C.a([],x.t)
l=new B.bKS(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.T(u,u)
f=new B.bKV(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,C.L)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b4d(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zq(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b4d(e,d,w,!0)
a2.bLc(a4)},
b4d(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.T(x.N,b3),b5=new B.bKG(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bKF(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bKI(C.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.L)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=C.c2(b7,0,!1,b3)
v=x.W
k=C.T(v,b3)
j=C.T(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)C.ba(C.dI(g,null))
e=C.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=C.c2(b7,0,!1,b3)
a0=C.c2(b7,0,!1,b3)
k.a9(0)
j.a9(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.L)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b4h(t)*(1+t.CW))
a4=b2.azn(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c4u(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bOb(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,C.L)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.L)(w),++u){t=w[u]
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
bOb(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return C.c2(d,0,!1,x.i)
u=C.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,C.L)(a0),++r){q=a0[r]
p=C.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,C.L)(a0),++n){m=a0[n]
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
t[m]=t[m]-g*u[l][m]}}}f=C.c2(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bLc(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.azn(o)/a1.b4h(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zq(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bDo(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bbB(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tt(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.k.D(o.db-h,0,24)
else o.cy=A.k.D(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.tt(o,"The "+$.q7().h(0,n).b+" got "+A.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tt(o,"More than 1.5 amps went through the "+$.q7().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tt(o,"The regulator had to turn "+A.k.aa(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tt(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yK.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.q7().h(0,n).b
l=f.b
l=l===A.k.jU(l)?""+A.k.V(l):C.t(l)
g=f.c
g=g===A.k.jU(g)?""+A.k.V(g):C.t(g)
a1.tt(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eIQ.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tt(o,"The bulb got "+A.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tt(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tt(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tt(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tt(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tt(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bDo(d){return A.d.b7(this.a,new B.bKD(d))},
tt(d,e){var w
d.x=!0
d.ay=e
this.bbB(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bgg(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a9(0)},
aFq(d){var w=d.b
return D.aMf.t(0,w)||D.yK.ai(0,w)||w==="buck"||w==="regulator"},
bd_(d){var w,v=!0
if(!this.Lg(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yK.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
U6(d,e){var w=this.b
return new C.a2(w,new B.bKX(d,e),C.U(w).k("a2<1>")).gM(0)},
C8(d){var w,v
if(d.x)return!1
w=d.b
if(D.yK.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bb7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.q7().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aFq(d)||i.C8(d))return null
w=i.U6(d,0)
v=i.U6(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.U(u).k("a2<1>")
s=C.B(new C.a2(u,i.gcMe(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jU(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yK.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aFv("battery"),o=J.aV(t.a),t=new C.fh(o,t.b);t.C();){n=o.gS(o)
if(n.e===1.5&&n.as<=0.02&&i.U6(n,0)+i.U6(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aFv("switch"),o=J.aV(t.a),t=new C.fh(o,t.b);t.C();)if(!o.gS(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.q7().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zq(k))return"The "+$.q7().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.zq(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b7(u,new B.bKL(i,d))
h=q.b
h=h===A.k.jU(h)?""+A.k.V(h):C.t(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aFv(d){var w=this.a
return new C.a2(w,new B.bKO(d),C.U(w).k("a2<1>"))},
aF4(d){return this.aFv(d).b7(0,new B.bKN(0.35))},
pz(d,e){return A.d.b7(this.a,new B.bKM(e))}}
B.ahL.prototype={
a5(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.M()
w.r=F.Wh.gp(0)
c0.aX(new C.a9(0,0,b8,b9),w)
v=C.M()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lS.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lS.ai(0,h.b)?(h.ch-1)*38:0
b4.cAP(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hrB(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.M()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bO
c0.bA(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.aco.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.yL
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mJ.aw(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.ce9(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zq(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.W().r
a3=C.a([],k)
a4=new C.aO(a2,A.ap,b5,b5,a3)
a5=f-13
a3.push(new C.b5(g,a5))
a6=g+13
a7=f+10
a3.push(new C.ap(a6,a7))
a8=g-13
a3.push(new C.ap(a8,a7))
a3.push(new C.bF())
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ay.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbK().a.snapshot()
w.drawPath((a4.e=new C.cF(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aO(a2,A.ap,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bF())
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbK().a.snapshot()
w.drawPath((a2.e=new C.cF(e)).a,s)
s.delete()
a9=new C.kq(new C.ep("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cc,new C.jo(1),b5,b5,b5,b5,A.ca,b5)
a9.eH()
a9.a5(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aMf.t(0,h)||D.yK.ai(0,h)||h==="buck"||h==="regulator")&&!r.C8(a0)&&r.U6(a0,0)+r.U6(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aH.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.kq(new C.ep("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cc,new C.jo(1),b5,b5,b5,b5,A.ca,b5)
a9.eH()
a9.a5(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.lS.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.Wh.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bd_(a0)?A.cg:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bd_(a0)){a9=new C.kq(new C.ep("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.cg,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cc,new C.jo(1),b5,b5,b5,b5,A.ca,b5)
a9.eH()
a9.a5(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.WP,F.WU,b2)
j.toString
i=b1.f
$.W()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bO
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.QA
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b7(q,new B.bFW())){b3=A.d.cI(q,0,new B.bFX())
$.W()
b7=C.M()
b7.r=D.b79.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aX(new C.a9(0,0,b8,b9),b7)
a9=C.i1(b5,b5,b5,b5,D.eTe,A.a4,A.cc,b5,A.eh,A.ca)
a9.Bx(b6-24)
a9.a5(c0,new C.u(12,10))}},
q6(d,e,f,g,h){var w=null,v=C.i1(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.cc,w,A.eh,A.ca)
v.eH()
v.a5(d,f)},
cAP(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ap,null,null,C.a([],x.v))
d.E(new C.b5(a1.a,a1.b))
w=B.hk6(a1,a2,a3)
d.E(new C.cS(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.aco,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aS,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bn
u=C.M()
u.b=A.ae
u.c=a4?7:5
u.d=A.bO
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aP(d,u)
u=C.M()
u.b=A.ae
u.c=2.4
u.d=A.bO
u.r=(a4?A.c:o).gp(0)
a0.aP(d,u)
if(q){n=new C.RY(new C.vo(C.wR(d),!1,C.a([],x.f5))).gL(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jl()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jl()
h=t[u].b
h===$&&C.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.jl()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jl()
g=t[u].b
g===$&&C.c()
f=A.k.F(h+i,g.a.length())
v.jl()
i=t[u].Ml(f).a
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Ox(d,e,f,g){var w,v,u,t
$.W()
w=C.M()
v=g?A.b0:A.a3
u=g?A.b6:A.a7
t=C.aq(e,A.w,0.3)
t.toString
w.saq(new C.a8(v,u,A.x,C.a([e,f,e,t],x.O),A.GJ,null).av(0,d))
return w},
av0(d,e,f){return this.Ox(d,e,f,!0)},
c08(d,e){return this.Ox(d,A.bn,A.iN,e)},
agq(d,e){var w,v,u
$.W()
w=C.M()
w.saq(D.aKS.av(0,C.bT(e,4.2)))
d.af(e,4.2,w)
w=e.ad(0,D.e1h)
v=e.ad(0,D.e1q)
u=C.M()
u.r=A.eu.gp(0)
u.c=1.2
d.bA(w,v,u)},
ce9(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.M()
c0.saq(D.bRO.av(0,D.eFQ))
c0.c=3.4
c0.d=A.bO
w=C.M()
w.r=A.w.j(0.45).gp(0)
w.z=G.mv
c1.hM(D.eFI,w)
if(c3){w=C.bA(D.eFP,A.kq)
v=C.M()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=B.h0k(c2)
c1.bA(new C.u(-u,0),D.e2z,c0)
c1.bA(D.e0p,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lS.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bX(0,c2.ch)}switch(w){case"battery":b3.bAj(c1,c2)
break
case"solar":r=C.bA(D.eFL,A.ii)
c1.aD(r,b3.Ox(new C.a9(r.a,r.b,r.c,r.d),A.dA,A.bR,!1))
b9=C.M()
w=C.aq(D.bal,A.d6,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bi6,A.mc,0.3+0.4*c2.f)
v.toString
b9.saq(new C.a8(A.ax,A.aC,A.x,C.a([w,v],x.O),b4,b4).av(0,D.a5p))
c1.aX(D.a5p,b9)
q=C.M()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(b9=c1.a,p=1;p<6;++p){w=-34+p*68/6
o=q.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}for(p=1;p<4;++p){w=-18+p*9
o=q.H()
b9.drawLine.apply(b9,[-34,w,34,w,o])
o.delete()}for(p=0;p<6;++p){w=-34+(p+0.5)*68/6
$.W()
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cp.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new C.aO($.W().r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-34,18))
b9.E(new C.ap(-6+40*c2.f,-18))
b9.E(new C.ap(4+40*c2.f,-18))
b9.E(new C.ap(-24,18))
b9.E(new C.bF())
w=C.M()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aP(b9,w)
w=c2.f
b9=C.M()
b9.r=A.dN.j(0.9).gp(0)
c1.af(D.e0v,4+4*w,b9)
break
case"crank":n=C.bA(D.eFw,A.hd)
c1.aD(n,b3.av0(new C.a9(n.a,n.b,n.c,n.d),A.bu,A.bJ))
b9=C.M()
b9.saq(D.aKT.av(0,C.bT(A.J,12)))
c1.af(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.M()
b9.r=A.cp.gp(0)
b9.c=5
b9.d=A.bO
c1.bA(A.J,m,b9)
b9=C.M()
b9.saq(D.eb8.av(0,C.bT(m,7)))
c1.af(m,7,b9)
b3.agq(c1,D.e2s)
b3.agq(c1,D.e0i)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aO(b9,A.ap,b4,b4,C.a([],w))
v.E(new C.b5(-3,24))
v.E(new C.ap(3,24))
v.E(new C.ap(1.5,0))
v.E(new C.ap(-1.5,0))
v.E(new C.bF())
l=C.M()
l.r=A.bR.gp(0)
c1.aP(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.by(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aO(b9,A.ap,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cS(6,-14,2,-30))
l.push(new C.cS(-2,-14,0,-2))
l.push(new C.bF())
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbK().a.snapshot()
v.drawPath((j.e=new C.cF(l)).a,o)
o.delete()
v.restore()}b9=C.M()
b9.saq(D.eaP.av(0,C.bT(A.J,4.5)))
c1.af(A.J,4.5,b9)
break
case"switch":n=C.bA(D.eFD,A.rq)
b9=C.M()
b9.saq(D.any.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.agq(c1,D.Rs)
b3.agq(c1,D.aFH)
i=c2.w?D.aFH:D.e02
b9=C.M()
b9.r=A.aB.gp(0)
b9.c=6
b9.d=A.bO
c1.bA(D.Rs,i,b9)
b9=C.M()
b9.r=(c2.w?A.b4:A.bR).gp(0)
b9.c=4
b9.d=A.bO
c1.bA(D.Rs,i,b9)
b9=C.lg(D.Rs,i,0.85)
b9.toString
w=C.M()
w.r=A.ay.gp(0)
c1.af(b9,5,w)
break
case"fuse":h=C.bA(D.aLo,D.aKY)
b9=C.M()
b9.r=A.fi.j(0.25).gp(0)
c1.aD(h,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.az.gp(0)
c1.aD(h,b9)
if(!t){b9=C.M()
b9.c=1.6
b9.r=C.aq(A.bR,A.ct,c2.fx).gp(0)
c1.bA(D.aFY,D.aFG,b9)}else{b9=C.M()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bA(D.aFY,D.e2Q,b9)
b9=C.M()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bA(D.e0W,D.aFG,b9)
b9=C.M()
b9.r=A.dB.gp(0)
c1.af(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cm(new C.u(F.oO[g]*22,0),20,9)
w=C.bA(f,A.hC)
o=b3.Ox(f,A.d8,A.ol,!0).H()
b9.drawRRect(C.er(w),o)
o.delete()}break
case"pot":b9=C.M()
b9.saq(D.eb0.av(0,C.bT(A.J,21)))
c1.af(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.az.gp(0)
d.c=1.2
o=d.H()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=C.M()
b9.saq(D.eaN.av(0,C.bT(A.J,13)))
c1.af(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.M()
j.r=A.aM.gp(0)
j.c=3
j.d=A.bO
c1.bA(new C.u(b9*3,w*3),new C.u(v*12,l*12),j)
break
case"resistor":a1=C.bA(D.aLo,D.aKY)
b9=C.M()
b9.saq(D.bV3.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=x.O
a2=C.F([47,C.a([C.b0(b5),C.b0(b6),A.w],b9),100,C.a([C.b0(b7),A.w,C.b0(b7)],b9),220,C.a([C.b0(b8),C.b0(b8),C.b0(b7)],b9),470,C.a([C.b0(b5),C.b0(b6),C.b0(b7)],b9),1000,C.a([C.b0(b7),A.w,C.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(C.c0(new C.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=C.M()
b9.r=A.aM.gp(0)
c1.aX(D.eFZ,b9)
b9=c2.r
b3.q6(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e27,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.M()
v.r=A.dN.j(0.55*w).gp(0)
v.z=A.yL
c1.af(D.vW,34,v)}n=C.cm(D.e_y,12,18)
c1.aD(C.bA(n,A.hC),b3.Ox(n,A.bn,A.e_,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dn.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.M()
if(t)v=A.VA
else{v=C.aq(A.e_,A.hU,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Em
else{l=C.aq(A.dA,A.dN,c2.fx)
l.toString}w.saq(new C.bS(A.rL,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,C.bT(A.rn,17)))
c1.af(A.rn,17,w)
w=C.M()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.af(A.rn,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ap,b4,b4,C.a([],w))
l.E(new C.b5(-9,-12))
l.E(new C.cS(-12,-4,-9,0))
v=C.M()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aP(l,v)
v=C.M()
v.r=A.cU.gp(0)
v.c=1.4
c1.bA(D.e2M,D.e2O,v)
v=C.M()
v.r=A.cU.gp(0)
v.c=1.4
c1.bA(D.e0P,D.e0S,v)
w=C.a([],w)
a4=new C.aO(b9,A.ap,b4,b4,w)
a4.E(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bx(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.W()
b9=C.M()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aX
else{w=C.aq(A.dA,D.bb7,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aP(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.M()
v.r=A.ay.j(0.6*w).gp(0)
v.z=D.dk0
c1.af(A.rn,30,v)}w=C.M()
w.r=A.e_.gp(0)
w.c=2.4
c1.bA(D.e2S,D.e2R,w)
w=C.M()
w.r=A.e_.gp(0)
w.c=2.4
c1.bA(D.e0Y,D.e0X,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ap,b4,b4,C.a([],w))
a6.E(new C.b5(-12,8))
a6.E(new C.ap(-12,-6))
a6.E(new C.cS(0,-26,12,-6))
a6.E(new C.ap(12,8))
a6.E(new C.bF())
v=C.M()
if(t)l=A.ti
else{l=C.aq(A.er,D.ad7,c2.fx)
l.toString}if(t)j=A.kf
else{j=C.aq(A.kc,A.ay,c2.fx)
j.toString}v.saq(new C.a8(A.ax,A.aC,A.x,C.a([l,j],x.O),b4,b4).av(0,D.eF2))
c1.aP(a6,v)
v=C.M()
v.b=A.ae
v.c=1.2
v.r=A.ja.gp(0)
c1.aP(a6,v)
v=C.M()
v.r=A.eM.gp(0)
c1.aX(D.eF8,v)
w=new C.aO(b9,A.ap,b4,b4,C.a([],w))
w.E(new C.b5(-7,-4))
w.E(new C.cS(-6,-12,0,-15))
b9=C.M()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aP(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aD(C.bA(a7,A.hc),b3.av0(a7,A.ak,A.aL))
b9=C.M()
b9.r=A.cC.gp(0)
c1.aX(D.eEQ,b9)
b9=C.M()
b9.r=A.cp.gp(0)
c1.aX(D.eER,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cm(D.e_Q,15,7)
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.ct.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c0(w),o)
o.delete()
b9.restore()}w=C.M()
w.r=A.aB.gp(0)
c1.af(A.J,3,w)
b9.restore()
b3.q6(c1,"M",D.e2r,A.aB,14)
break
case"buzzer":a8=C.cm(A.J,42,42)
b9=C.M()
b9.saq(D.eb4.av(0,a8))
c1.hM(a8,b9)
b9=C.M()
b9.r=A.w.gp(0)
c1.af(A.J,6,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.b2.gp(0)
c1.af(A.J,6,b9)
b3.q6(c1,"+",D.e2k,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=C.bT(A.J,24+k*5+l)
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bU.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c0(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bA(D.eFz,A.hc)
w=C.M()
w.saq(D.bSL.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,w)
w=C.a([],x.v)
a9=new C.aO(b9.r,A.ap,b4,b4,w)
a9.E(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cS(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bx(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=C.M()
w.b=A.ae
w.c=10
w.r=D.bbK.j(0.5*b9).gp(0)
w.z=A.jk
c1.aP(a9,w)}$.W()
b9=C.M()
b9.b=A.ae
b9.c=3.2
b9.d=A.bO
b9.r=C.aq(A.lC,A4.WD,c2.fx).gp(0)
c1.aP(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.bA(a7,A.hc)
w=C.M()
w.saq(D.bRG.av(0,a7))
c1.aD(b9,w)
w=C.M()
w.r=A.bR.gp(0)
c1.aX(D.eFe,w)
for(p=0;p<4;++p){b0=new C.kq(new C.ep("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.G(!0,A.aB,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.cc,new C.jo(1),b4,b4,b4,b4,A.ca,b4)
b0.eH()
b0.a5(c1,new C.u(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aD(C.bA(b1,A.hC),b3.c08(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.M()
v.r=A.b4.j(0.5).gp(0)
c1.aX(new C.a9(-3,w,11,w+b9),v)
b3.q6(c1,"1F",D.vW,A.c,11)
break
case"radio":a1=C.bA(D.a5p,A.hd)
b9=C.M()
b9.saq(D.bVj.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.ol.j(0.6).gp(0)
c1.aD(a1,b9)
b9=C.bA(D.eFA,A.ii)
w=C.M()
w.r=A.dG.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lC.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.M()
w.r=(c2.fx>0?A.h2:A.nD).gp(0)
c1.aX(D.eET,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=C.M()
v.r=A.bI.gp(0)
v.c=1.6
c1.bA(new C.u(w,-13),new C.u(w,-3),v)}w=C.M()
w.saq(D.aKT.av(0,C.bT(D.a4u,6)))
c1.af(D.a4u,6,w)
w=C.M()
w.r=A.ol.gp(0)
c1.af(D.e0o,4,w)
w=C.M()
w.r=A.e_.gp(0)
w.c=1.8
c1.bA(D.e0m,D.aFL,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bT(D.aFL,4+k*5+A.k.F(w.d*8,5))
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nJ.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c0(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bA(D.eFK,A.hc)
v=C.M()
v.r=L.mV.gp(0)
c1.aD(w,v)
b2=C.bA(D.eFH,A.hC)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.er(b2),$.pm(),!0)
b9.translate(-33,-21)
E.fXC(c1,D.eLi,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.M()
b9.r=A.b4.gp(0)
c1.af(D.e0A,1.6,b9)}else{w=C.M()
w.r=D.uZ.gp(0)
c1.aD(b2,w)
b9=new C.aO(b9.r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-33,-21))
b9.E(new C.ap(-10,-21))
b9.E(new C.ap(-33,0))
b9.E(new C.bF())
w=C.M()
w.r=A.c.j(0.05).gp(0)
c1.aP(b9,w)}b9=C.M()
b9.r=A.bu.gp(0)
c1.aX(D.eF7,b9)
break}B.i3g(c1,c2,b3.b.d,b3.gc4v())
if(t)b3.q6(c1,"\u2716",D.e2V,A.ay,14)
if(s)c1.a.restore()},
bAj(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aD(C.bA(w,A.rq),m.av0(w,A.dA,A.iQ))
v=new C.a9(-22,-13,22,13)
$.W()
u=C.M()
u.saq(D.anr.av(0,v))
d.aX(v,u)
u=C.M()
u.r=A.dT.gp(0)
d.aX(D.eFn,u)
t=new C.a9(28,-5,34,5)
d.aD(C.bA(t,A.hb),m.Ox(t,A.dA,A.iN,!0))
m.q6(d,"+",D.e07,A.aM,11)
m.q6(d,"\u2212",D.e2t,A.ad,11)
m.q6(d,C.t(l===A.k.jU(l)?A.k.V(l):l)+"V",D.e2d,A.aM,13)
if(l===1.5){u=C.M()
u.r=A.bF.gp(0)
d.aX(D.eFm,u)
u=e.as
s=C.M()
s.r=C.aq(A.ay,A.b4,u).gp(0)
d.aX(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.q6(d,"FLAT",D.e26,A.cg,9)}if(l>2){u=C.M()
u.r=A.b2.gp(0)
u.c=1
d.bA(D.e_E,D.aFq,u)
m.q6(d,l>3?"3 cells":"2 cells",D.e2c,A.az,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bA(r,A.rq)
$.W()
s=C.M()
s.saq(D.bUS.av(0,r))
d.aD(u,s)
s=C.M()
s.r=A.cZ.gp(0)
d.aX(D.eFo,s)
for(u=d.a,q=0;q<2;++q){p=D.d7y[q]
s=p<0?5:3.6
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.aKS.av(0,C.bT(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.q6(d,"9V",D.e28,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bA(r,A.ii)
$.W()
s=C.M()
s.saq(D.anr.av(0,r))
d.aD(u,s)
s=C.M()
s.r=A.cj.gp(0)
d.aX(D.eFJ,s)
for(u=d.a,q=0;q<2;++q){s=C.bA(C.cm(new C.u(F.a2l[q],-20),8,10),A.hb)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cp.gp(0)
n=o.H()
u.drawRRect(C.er(s),n)
n.delete()}m.q6(d,"+",D.e0e,A.ay,10)
m.q6(d,"12V",D.e29,A.aB,15)}},
ar(d){return!0}}
B.mv.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a9(k)
A.d.a9(d.b)
w=C.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.ti(o,r,q,p)
n.ap5(o,r,q,p)
k.push(n)
J.io(s[4],new B.cjh(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ajF(m,u[1],l,u[3])}}}
B.ahJ.prototype={
U(){var w=x.N
return new B.ahK(A.J,A.au,C.T(w,x.gl),C.aX(w),$,A.bw,0,C.a([],x.X),null,null)}}
B.ahK.prototype={
ad2(d){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new B.bFA(w,d))
w.as=C.cM(A.la,new B.bFB(w))},
q(){var w=this.as
if(w!=null)w.a7(0)
w=this.ch
if(w!=null)w.a7(0)
this.bqe()},
a_7(d,e){return this.cc6(d,e)},
aZD(d){return this.a_7(d,!1)},
cc6(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_7=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qP:A.v3
p=d.b
w=3
return C.b(E.fKS(s,r,p,d.ax<3.2,q,$.q7().h(0,p).b),$async$a_7)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_7,v)},
coy(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.cg(0,d.a,new B.bFC()),t=J.cE(u)
t.K(u,v)
t.bn(u,new B.bFD(v))
if(t.gM(u)>=4){t.a9(u)
t=w.ch
if(t!=null)t.a7(0)
w.a0s(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=C.cM(A.kg,new B.bFE(w,u,d))}},
ZO(d){return this.cau(d)},
cau(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$ZO=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i4o(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$ZO)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$ZO,v)},
a0s(d){return this.cmd(d)},
cmd(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0s=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bV(F.mb,null,new B.bFy(u,d),t,!0,!0,!1,A.kY,!1,!1,x.H),$async$a0s)
case 2:return C.h(null,v)}})
return C.i($async$a0s,v)},
a_(){this.a1()
this.bda()
this.la()},
bda(){this.a.c.e=new B.bFT(this)},
lr(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.uQ(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=D.lS.h(0,s.b)
if((r==null?null:r.b)!==D.za)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.K(0,s.a)
q.a_7(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dF(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dF(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cI.aj()<0.5
else u=!1
if(u)E.dF(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dF(900+A.cI.aB(800),"",90,0,0.1,o)
if(A.cI.aj()<0.35)E.dF(300+A.cI.aB(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cI.aj()<0.4
else u=!1
if(u)E.dF(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dF(330+A.o.F(110*A.k.bu(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dF((A.k.bu(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dF(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dF(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cI.aj()<0.5
else u=!1
if(u)E.dF(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)E.dF(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)E.dF(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new B.bFU())},
b5u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lS.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.y(p,n)
r=i}}}return s},
b_j(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.U(w).k("dx<1>"),w=new C.dx(w,v),w=new C.bR(w,w.gM(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lS.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cAQ(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lS.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lS.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hk6(new C.u(k,n),new C.u(i,l),p)
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
ad0(){this.a.toString
this.m(new B.bF3())},
bn2(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cVu[v]
if(!A.d.b7(p.a.c.a,new B.bFV(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.HN:o
s=s?K.HN:o
q=t.aiS(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dF(1200,"",50,0,0.3,"tri")
p.ad0()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.PR[v].a)
u=w.length
t=u>8
s=t?A.d.dq(w,0,A.o.an(u+1,2)):w
r=t?A.d.fK(w,A.o.an(w.length+1,2)):A.T
q=n.a.d
if(q!=null){w=C.a3(q).k("cu<1>")
w=C.B(new C.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.b_8(s,!0))
n.a.toString
if(t)w.push(n.b_8(r,!0))
w.push(C.E(C.cp(new B.bFS(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
b_8(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.L)(d),++v){u=d[v]
t=$.q7()
s=t.h(0,u).d.j(0.14)
r=new C.aW(14,14)
q=new C.aA(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aE(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.zo,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.nn,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.bb,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bP(q,q,q,q),new C.bq(r,r,r,r),p,p,A.n),p,p,p,F.ts,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bF4(this,u),p,p,p,p,p,p,!1,A.a8))}return C.p(p,C.cB(m,p,A.h5,p,p,A.aO,!1),A.f,p,p,new C.o(D.Ei,p,new C.bP(A.Y,A.Y,new C.aA(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aXI(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.ab5,w,C.I(A.bF,A.q,1),v,w,w,A.n),w,w,w,w,F.agr,w,w,w)},
cea(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.q7().h(0,o),m=d.dy,l=d.fr,k=new B.bFn(q,n),j=C.d(n.c,p,p,p,p,p,p,A.T6,p,p,p),i=n.b,h=n.d,g=x.p
i=C.A(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bJf,p,p,p,new B.bFa(q,d),p,p,p,p,"Remove part",A.c8),C.aH(p,p,p,p,A.Gb,p,p,p,new B.bFb(q),p,p,p,p,p,A.c8)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.D5,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.f0K,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.at,w,A.an,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cg:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bb7(d)
if(v!=null){l=(d.x?A.ay:A.aH).j(0.14)
j=C.m(10)
i=C.I((d.x?A.ay:A.aH).j(0.5),A.q,1)
m.push(new C.C(A.ib,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.f77,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cm,p,p,p),p))}if(B.fVK(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dA("CH "+t,d.at===u,new B.bFc(q,d,u),p,h,p))}l=C.bY(A.bz,l,A.br,4,6)
l=C.a([A.an,l,A.at,C.d(q.a.c.C8(d)?"Showing: "+F.Pt[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hp,p,p,p)],g)
if(q.a.c.C8(d))l.push(new B.fg(A.FL,"Open big screen",new B.bFf(q,d),h,p))
A.d.v(m,l)}if(D.lS.ai(0,o)&&!B.fVK(o)){l=C.a([A.an,C.d(q.a.c.C8(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hp,p,p,p)],g)
if(q.a.c.C8(d))l.push(new B.fg(A.Nb,"Open the "+$.q7().h(0,o).b,new B.bFg(q,d),h,p))
A.d.v(m,l)}if(D.lS.ai(0,o))A.d.v(m,C.a([A.an,new B.fg(A.Bq,"Make it bigger (or tap it 4 times)",new B.bFh(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.C8(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.an,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.f1A,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.dax[s]
j=r===A.k.jU(r)?A.k.V(r):r
l.push(new B.dA(C.t(j)+" V out",d.e===r,new B.bFi(q,d,r),p,h,p))}i.push(new C.C(A.mh,C.bY(A.bz,l,A.br,0,6),p))}if(o==="regulator")i.push(D.foT)
A.d.v(m,i)}if(q.a.c.Lg(d)&&!d.x){l=A.k.aa(d.cx,2)
j=A.k.aa(q.a.c.zq(d),2)
i=q.a.c
w=i.amg(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.amg(d)?A.cg:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.zq(d),0,1)
i=q.a.c.amg(d)?A.ay:A.b4
m.push(new C.C(A.ib,C.v(C.a([l,A.cX,C.bw(j,C.m_(A.bF,p,p,5,p,w,new C.lT(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.C(A.ib,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eWC,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d0P[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dA(j,d.e===r,new B.bFj(q,d,r),p,h,p))}m.push(C.bY(A.bz,l,A.br,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cT2[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dA(j,d.r===r,new B.bFk(q,d,r),p,h,p))}m.push(C.bY(A.bz,l,A.br,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bFl(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bFm(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bFd(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bFe(d)))
if(o==="crank")m.push(D.fkw)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hp,p,p,p))
return q.aXI(new C.cV(D.aYh,C.cd(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.r,p,A.y,p,p,p,p,A.ah),p))}}
B.b9s.prototype={}
B.Uk.prototype={
U(){return new B.aC2(B.h0j(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aC2.prototype={
a_(){this.a1()
$.aU.c2$.push(this)
this.ad1()},
ad1(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$ad1=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fqR(),$async$ad1)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i3B(t.d,r)
if(s!=null){t.m(new B.dPZ(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$ad1,v)},
EA(){var w,v=this
if(!v.as)return
w=B.hVa(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bCj(w)},
iT(d){if(d!==A.fs)this.EA()},
q(){$.aU.hE(this)
this.EA()
this.a2()},
c4x(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.U(v).k("a2<1>")
t=new C.a2(v,new B.dQ7(q),u).gM(0)
s=new C.a2(v,new B.dQ8(),u).gM(0)
r=new C.a2(v,w.gcPK(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dQ9(q,t,s,r))}if(A.o.F(q.w,45)===0)q.EA()
if(A.o.F(q.w,10)===0){w=q.f
$.agW()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.agW()[q.f].c.$1(q.d)){w.K(0,q.f)
B.Bj("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dQa())
q.EA()
w=q.c
w.toString
w=C.WG(w)
if(w!=null)w.R(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.agW()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.me,p,p,p,p,p,p,p,p,p,p))}},
afH(){var w=0,v=C.j(x.H),u=this,t
var $async$afH=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dPY(u),t,null,!0,!0,x.H),$async$afH)
case 2:return C.h(null,v)}})
return C.i($async$afH,v)},
aXH(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aE(w,C.hp(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8)},
aXG(d,e,f,g){return this.aXH(d,e,f,g,null)},
apK(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aE(w,C.p(w,C.A(C.a([C.X(d,f,w,w,w,15),A.eb,new C.dq(1,A.cl,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.bb,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),1)},
ae0(){var w=0,v=C.j(x.H),u=this,t
var $async$ae0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a6(t,!1).c8(C.e8(new B.dPU(u),!1,null,x.H)),$async$ae0)
case 2:t=u.e.gbg()
if(t!=null)t.bda()
if(u.c!=null)u.m(new B.dPV())
u.EA()
return C.h(null,v)}})
return C.i($async$ae0,v)},
bDh(){var w,v,u,t,s=null,r=this.f
$.agW()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bo:A.ay
u=C.m(9)
t=C.I(D.Ei,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.w9,s,s,s),s,s,s),A.f,s,D.aYo,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eQ,s,s,s)},
agN(){var w=0,v=C.j(x.H),u=this,t
var $async$agN=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bV(F.mb,null,new B.dQ6(u),t,!0,!0,!0,A.kY,!1,!1,x.H),$async$agN)
case 2:return C.h(null,v)}})
return C.i($async$agN,v)},
c4y(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aE(r,C.p(r,D.bKt,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dQc(d),r,r,r,r,r,r,!1,A.a8),o=C.m(11)
o=C.p(r,D.b30,A.f,r,r,new C.o(A.bm,r,C.I(A.aS.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.A(C.a([p,A.ab,o,A.ab,C.E(C.v(C.a([D.fn_,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f3:A.hh,r,r,r,r,r,r,r,r,11.5,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.aw9(s.gcab(),r),A.rw,s.aXG(A.xQ,"Construction Lab: real 3D wiring, plumbing and a house",A.ct,new B.dQd(s,d)),s.aXH(A.lf,"Challenges",A.aM,s.gcr3(),s.bDh()),s.aXG(A.N3,"How to play",A.aS,new B.dQe(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.an,C.A(C.a([s.apK(A.pO,"Circuits",A.by,s.gck2()),A.bp,s.apK(A.qW,"Repair",A.aM,new B.dQf(s)),A.bp,s.apK(D.xR,"Clear",A.cg,new B.dQg(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.Ei,r,new C.bP(A.Y,A.Y,new C.aA(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.buy,r,r,r)},
B(d){var w=this,v=null
$.aqI="tech"
return C.c8(v,A.bX,C.bn(!0,C.v(C.a([w.c4y(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h_d(w.d,w.e,w.gc4w(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.aw9.prototype={
U(){return new B.b7E(null,null)}}
B.b7E.prototype={
gavU(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.U,null,1,null,v)
w.cH(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.gavU().q()
this.bru()},
B(d){var w=null,v=this.a.c
return C.aE(w,C.hp(new C.a7(42,42,C.c6(this.gavU(),new B.czS(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
B.b7D.prototype={
a5(d,e){var w,v,u,t=null,s=e.ed(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.M()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.z=G.mv
d.af(s,r+2+o*2,w)
w=C.M()
w.saq(D.eb_.av(0,C.bT(s,r)))
d.af(s,r,w)
v=C.M()
v.b=A.ae
v.c=2.2
v.saq(new C.fS(A.A,0,6.283185307179586,A.x,D.cKN,t,new C.mi(p)).av(0,C.bT(s,r)))
d.af(s,r,v)
p=new B.czR(d)
p.$3(s.ad(0,A.rn),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e18),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.e2Z),2.6,0.5+0.5*Math.cos(q))
u=C.i1(t,t,t,t,D.eTk,A.a4,A.cc,t,A.eh,A.ca)
u.eH()
u.a5(d,s.ad(0,new C.u(-u.b.c/2,5)))},
ar(d){return d.b!==this.b}}
B.aws.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.awt.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.bqd()}}
B.aIr.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvA.prototype={}
B.fJ.prototype={}
B.IR.prototype={
a4(){return"ScreenStyle."+this.b}}
B.m2.prototype={}
B.U1.prototype={
U(){return new B.bi4(null,null)}}
B.bi4.prototype={
ga8n(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nR,null,1,null,v)
w.cq(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.ga8n().q()
this.btk()},
gRh(){var w=this.ga8n().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lS.h(0,this.a.c)
if(v==null)v=D.aLF
return C.c8(w,R.KS,C.bn(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zb?this.bFs(v):this.cgV(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mr,w,w,w,new B.dLV(d),w,w,w,C.nw(w,A.aX,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eUW,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c4z(d){var w
A:{if(D.I9===d){w=0.46153846153846156
break A}if(D.un===d){w=0.45
break A}if(D.w1===d){w=0.9259259259259258
break A}if(D.S1===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cgV(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.I9
A:{if(D.I9===p){w=44
break A}if(D.un===p){w=30
break A}if(D.w1===p){w=22
break A}if(D.S1===p){w=26
break A}w=14
break A}v=C.c6(this.ga8n(),new B.dLU(this,w,d,o),q)
if(p===D.a5x)v=new C.D2(D.bv9,v,q)
p=this.c4z(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fG(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A3.Fi,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a8(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.boV,new C.Q(u,u,u,u),q,q,q),q)},
b4I(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bu(this.gRh()*0.4),0,100),q=d.b===D.I9,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aT(A.o.u(C.di(s)),2,"0")+":"+A.a.aT(A.o.u(C.fY(s)),2,"0"),t,t,t,t,t,t,A.rD,t,t,t),A.b5],x.p)
for(w=0;w<4;++w){v=new C.aW(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bq(v,v,v,v),t,t,A.n),t,4+w*2,t,D.buS,t,t,t,3))}n.push(A.d9)
n.push(D.fg_)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.m(4)
n.push(C.p(t,new C.bH(A.a3,t,t,C.Du(A.A,C.p(t,t,A.f,t,t,new C.o(A.b4,t,t,C.m(2),t,t,A.n),t,t,t,A3.Fi,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.q9)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.f7q,t,t,t))
return new C.C(new C.Q(p,12,o,2),C.A(n,A.m,t,A.e,A.j,0,t,t),t)},
atT(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d6b,new C.a8(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.at,C.d(d.a,v,1,A.a2,v,v,v,D.eZk,v,v,v)],w))
return C.aE(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dLQ(this,d),v,v,v,v,v,v,!1,A.a8)},
bWk(d,e){return this.atT(d,e,!0)},
bW3(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.S1||n===D.w1,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kF,0.5)
l.toString
l=C.a([k,A.dv,l],x.O)
k=p.b4I(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b2,A.q,1)
w=C.aE(o,C.p(o,C.bw(C.m(23),C.b3(o,o,o,new B.adL(0,p.gRh(),o),A.f0),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hw,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dLO(p),o,o,o,o,o,o,!1,A.a8)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.k_[s]
t.push(new C.cr(A.A,o,o,p.bWk(r,m?58:54),o))}k=C.a([k,A.an,w,A.ac,C.E(C.lX(0.92,t,v,8,12,A9.vd,o,!1),1)],u)
if(n!==D.a5x){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.dd(F.k_,0,C.dJ(4,"count",x.S),x.gD),t=v.$ti,v=new C.bR(v,v.gM(0),t.k("bR<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.atT(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.A(u,A.m,o,A.pX,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.bpJ,T.ahU,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a8(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
byX(d,e){var w=null
return C.p(w,C.v(C.a([this.b4I(d),C.E(C.b3(w,w,w,new B.adL(e,this.gRh(),w),A.f0),1),C.aE(w,C.p(w,C.av(C.d(F.k_[e].a,w,w,w,w,w,w,A0.Iz,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dLJ(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bFs(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fG(1.5384615384615383,C.p(t,C.c6(this.ga8n(),new B.dLM(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a8(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.but,new C.Q(8,8,8,s),t,t,t),t)}}
B.btF.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.M()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.kF,0.4)
t.toString
w.saq(new C.a8(A.ax,A.aC,A.x,C.a([u,A.dv,t],x.O),null,null).av(0,new C.a9(0,0,n,m)))
d.aX(new C.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.dk5
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
ar(d){return!0}}
B.adL.prototype={
a5(d,e){return E.aOY(d,e,this.b,this.c)},
ar(d){return!0}}
B.aKd.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.aVh.prototype={}
B.UQ.prototype={
U(){return new B.biE(C.T(x.S,x.N),A.au,C.a([],x.U),$,A.bw,0,C.a([],x.X),null,null)}}
B.biE.prototype={
gvd(){var w=this.f
return w===$?this.f=B.fVQ(0):w},
a_(){this.a1()
this.la()
B.za("laser_maze").bz(new B.e6J(this),x.P)},
lr(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.y(u.a,t)
if(t>0.8)A.d.cA(w,v)}this.m(new B.e6K())},
ad6(d){var w=this
w.m(new B.e6z(w,d))
B.vJ("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c4P(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.geb()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bu((d.a-t)/v)
q=A.k.bu((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvd().b.t(0,p)||p===o.gvd().e||o.gvd().d.ai(0,p))return
o.m(new B.e6A(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cp(new B.e6D(t,B.hjZ(t.gvd(),t.r))),q=x.p,p=C.a([new B.dA("Clear mirrors",!1,new B.e6E(t),A.jY,A.aM,s),new B.dA("Skip",!1,new B.e6F(t),D.bDh,A.aS,s)],q)
if(t.d>0)p.push(new B.dA("Back",!1,new B.e6G(t),D.bDi,A.aS,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dA(""+u,v===t.d,new B.e6H(t,v),s,A.ay,s))}return B.jF(A.ay,A.h9,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eO(p,s,s),new B.eO(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bfE.prototype={
a5(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.geb()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.df7(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bA(new C.a9(a5,a6,a8,a4),A.kq)
v=$.W()
u=C.M()
u.r=L.mV.gp(0)
a9.aD(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.dp.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.dp.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ec(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bA(C.cm(p,u,u),A.hd)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.bVp.av(0,C.cm(p,a3,a3)))
q=o.H()
w.drawRRect(C.er(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ap,a2,a2,u)
n.E(new C.b5(a7.$1(A.d.gL(a8)).a,a7.$1(A.d.gL(a8)).b))
for(a8=C.dd(a8,1,a2,C.U(a8).c),v=a8.$ti,a8=new C.bR(a8,a8.gM(0),v.k("bR<ak.E>")),v=v.k("ak.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bx(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.W()
a8=C.M()
a8.b=A.ae
a8.c=14
a8.e=A.fz
a8.r=A.ay.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.ln
a9.aP(n,a8)
a8=C.M()
a8.b=A.ae
a8.c=4
a8.e=A.fz
a8.r=D.ad7.gp(0)
a9.aP(n,a8)
a8=C.M()
a8.b=A.ae
a8.c=1.6
a8.e=A.fz
a8.r=A.c.gp(0)
a9.aP(n,a8)}for(a8=a4.c,a8=C.ec(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.C5
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.bu).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.az
i=new C.kq(new C.ep("\u2605",a2,a2,A.cO,a2,a2,a2,a2,a2,a2,new C.G(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.cc,new C.jo(1),a2,a2,a2,a2,A.ca,a2)
i.eH()
j=i.b
h=j.c
j=j.a.c
i.a5(a9,new C.u(m-h/2,k-j.gbc(j)/2))}g=new B.dfa(a7,a3,a9)
a1.c.bJ(0,new B.df8(g))
a4.d.bJ(0,new B.df9(g))
f=a7.$1(a4.e)
a4=C.bA(C.cm(f,o,a3*0.8),A.hd)
a8=C.M()
a8.r=A.ay.gp(0)
a9.aD(a4,a8)
v=f.ad(0,new C.u(v,0))
a8=C.M()
a8.r=A.c.gp(0)
a9.af(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.L)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
s=1-a0
u.c=4*s
u.r=A.aM.j(s).gp(0)
q=u.H()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
ar(d){return!0}}
B.US.prototype={
U(){var w=x.n
return new B.aCH(A.cI,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bw,0,C.a([],x.X),null,null)}}
B.aCH.prototype={
a_(){this.a1()
this.la()
B.za("light_mixer").bz(new B.e71(this),x.P)},
lr(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aXM()
w.m(new B.e72())},
avY(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aB(5)/4)
u.e=t
if(A.d.da(t,new B.e6N()))u.e[w.aB(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aXM(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hfp(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vM(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vJ("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcvY(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cMH[A.o.F(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cp(new B.e6W(v,B.hfp(v.e,t))),r=t[0]
r=B.hy(A.ay,""+A.k.V(r*100)+"%","Red",1,0,new B.e6X(v),r)
w=t[1]
w=B.hy(A.bo,""+A.k.V(w*100)+"%","Green",1,0,new B.e6Y(v),w)
t=t[2]
return B.jF(A.b8,A.h9,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hy(A.d6,""+A.k.V(t*100)+"%","Blue",1,0,new B.e6Z(v),t),new C.bH(A.a7,u,u,new B.fg(A.hz,"Lock it in",new B.e7_(v),A.b4,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bfT.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bA(new C.a9(0,0,n,m),A.q6)
$.W()
w=C.M()
w.r=A.w.gp(0)
d.aD(l,w)
w=d.a
J.by(w.save())
w.clipRRect(C.er(C.bA(new C.a9(0,0,n,m),A.q6)),$.pm(),!0)
v=e.geb()*0.3
u=e.ed(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.u(0,l)),u.ad(0,new C.u(l,t)),u.ad(0,new C.u(v*0.55,t))]
r=[A.E0,I.acc,I.acB]
d.l8(new C.a9(0,0,n,m),C.M())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nv
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bA(new C.a9(0,0,n,m),A.q6)
m=C.M()
m.b=A.ae
m.c=2
m.r=A.b2.gp(0)
d.aD(n,m)},
ar(d){return!0}}
B.aKF.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvF.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.btO()}}
B.aKG.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvG.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.btP()}}
B.bsu.prototype={}
B.a7w.prototype={
B(d){var w=null
return C.c8(C.eG(w,w,w,!0,!0,D.adk,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.amq,w,w,w,new B.cdU(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fvk,w,w,w,1,w,!0),D.adk,C.cB(C.a([D.e4e,C.cp(new B.cdV())],x.p),w,D.bqI,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.VJ.prototype={
U(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aDy(w,new C.ar(A.as,$.aw()),$,A.bw,0,C.a([],x.X),null,null)}}
B.aDy.prototype={
a_(){this.a1()
this.la()},
b2J(d){var w=this.d.length
return A.o.F(A.k.bu(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lr(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b2J(v.f)
if(w!==v.x){v.x=w
B.lf("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eFV(v))
B.Bj("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c5M(){if(this.d.length<2)return
this.m(new B.eFR(this))},
aY7(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eFQ(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc5L(),p=s.d,o=C.E(C.aE(r,C.b3(r,r,r,new B.btR(p,s.f,r),A.f0),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.f5B,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.avY[A.o.F(v,8)].j(0.9)
t=new C.aW(20,20)
o.push(C.aE(r,C.p(r,new C.x(p[v],r,D.f4S,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bq(t,t,t,t),r,r,A.n),r,r,r,A.fx,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eFT(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8))}p=A.c.j(0.07)
return B.jF(A.aM,A.h9,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eO(o,r,r),C.A(C.a([C.E(C.aM(r,A.T,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.br(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kw,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eFU(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dl,!0,A.a4,r,A.am,r,r,r,r),1),A.ab,new B.fg(A.hy,"Add",s.gc5J(s),A.c,r),A.bp,new B.fg(A.ml,"Spin",q,A.b4,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.btR.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.M()
w.r=D.b8w.gp(0)
a1.af(d,f,w)
w=C.M()
w.b=A.ae
w.c=3
w.r=A.aM.gp(0)
a1.af(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bT(d,a0)
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.avY[A.o.F(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c0(o),n,s,!0,m])
m.delete()
o=C.bT(d,a0)
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[C.c0(o),n,s,!0,m])
m.delete()
J.by(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new C.kq(new C.ep(o,i,i,A.cO,i,i,i,i,i,i,D.eU7),A.a4,A.cc,new C.jo(1),i,i,i,i,A.ca,i)
k.eH()
o=k.b
n=o.c
o=o.a.c
k.a5(a1,new C.u(a0-n-16,-o.gbc(o)/2))
f.restore()}f=C.M()
f.r=D.acZ.gp(0)
a1.af(d,20,f)
f=C.M()
f.b=A.ae
f.c=3
f.r=A.aM.gp(0)
a1.af(d,20,f)
j=new C.aO(h.r,A.ap,i,i,C.a([],x.v))
e-=a0
j.E(new C.b5(g,e+26))
e-=10
j.E(new C.ap(g-14,e))
j.E(new C.ap(g+14,e))
j.E(new C.bF())
e=C.M()
e.r=A.c.gp(0)
a1.aP(j,e)
e=C.M()
e.b=A.ae
e.c=2
e.r=A.aX.gp(0)
a1.aP(j,e)},
ar(d){return!0}}
B.Ur.prototype={
U(){return new B.bid($,A.bw,0,C.a([],x.X),null,null)}}
B.bid.prototype={
a_(){this.a1()
this.la()},
lr(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.Bj("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a4i(900,new B.dSc())}w.m(new B.dSd())},
aY9(d){return this.m(new B.dS7(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.F(A.k.dw(m),60)),2,"0")
m=C.b3(n,n,n,new B.boH(l,A.cg,n),A.aMU)
u=C.d(w+":"+v,n,n,n,n,n,n,D.eYk,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.eXp,n,n,n),A.at,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.CW,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d3t[r]
u.push(new B.dA(""+q+" min",o.d===q,new B.dS9(o,q),n,A.cg,n))}m=o.f
p=m?A2.y_:A.iV
m=m?"Pause":"Start"
return B.jF(A.cg,A.h9,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eO(u,n,n),new B.eO(C.a([new B.fg(p,m,new B.dSa(o),A.b4,n),new B.fg(A.jY,"Reset",new B.dSb(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.boH.prototype={
a5(d,e){var w,v,u,t,s=e.ed(A.J),r=e.a/2-14
$.W()
w=C.M()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.af(s,r,w)
w=C.bT(s,r)
v=C.M()
v.b=A.ae
v.c=16
v.d=A.bO
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.saq(new C.fS(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).av(0,C.bT(s,r)))
d.f4(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
ar(d){return d.b!==this.b}}
B.TE.prototype={
U(){return new B.bhQ($,A.bw,0,C.a([],x.X),null,null)}}
B.bhQ.prototype={
a_(){this.a1()
this.la()},
lr(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Qu.h(0,p.d)
w.toString
v=A.d.fo(w,new B.dD2())
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
B.lf("flute",D.bW0[t]+5,1400,0.35)}p.m(new B.dD3())},
gc5P(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.JH("Press Start",0.5)
w=D.Qu.h(0,this.d)
w.toString
v=A.d.fo(w,new B.dCY())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.JH("Breathe in",0.5+0.5*A.dC.aw(0,p))
case 1:return new C.JH("Hold",1)
case 2:return new C.JH("Breathe out",1-0.5*A.dC.aw(0,p))
default:return new C.JH("Hold",0.5)}}}return new C.JH("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc5P(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hv.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hv.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.D7,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kw,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.Qu.gee(D.Qu));w.C();){v=w.gS(w)
o.push(new B.dA(v,r.d===v,new B.dD0(r,v),q,A.hv,q))}w=r.e
v=w?A.a_I:A.iV
w=w?"Stop":"Start"
o.push(new B.fg(v,w,new B.dD1(r),A.b4,q))
return B.jF(A.hv,A.h9,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eO(o,q,q))}}
B.aGW.prototype={}
B.Ui.prototype={
U(){return new B.bi7(new C.cs(null,x.A),C.a([],x.au),A.aB,A.c)}}
B.bi7.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.ms,s,s,s,new B.dPt(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.m(18),new C.ev(C.aE(s,C.b3(s,s,s,new B.bk9(t.e,t.x,s),A.f0),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dPu(t),new B.dPv(t),s,s,s,s,s,s,s,s,s,new B.dPw(t),s,s,s,s,!1,A.a8),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cM4[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.ET(v,u,new B.dPx(t,v),!1,s))}u=t.r
return B.jF(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(A.bS,p,s),"DRAW PAD",C.v(C.a([new B.eO(o,s,s),B.hy(A.bA,""+A.k.V(u),"Brush",30,2,new B.dPy(t),u),new B.eO(C.a([new B.dA("Eraser",t.w,new B.dPz(t),A.FD,A.bA,s),new B.fg(A.r3,"Undo",new B.dPA(t),A.c,s),new B.fg(A.e5,"Clear",new B.dPB(t),A.c,s),new B.fg(A.N_,"Paper",new B.dPC(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.bk9.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.M()
w.r=this.c.gp(0)
d.aX(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=$.W()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bO
p.e=A.fz
p.b=A.ae
m=r.c
if(m.length===1){q=A.d.gL(m)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aO(q.r,A.ap,null,null,o)
o.push(new C.b5(A.d.gL(m).a,A.d.gL(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.cS(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bx(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ap(A.d.gal(m).a,A.d.gal(m).b)
o.push(q)
o=k.f
if(o!=null)q.bx(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new C.cF(k.gbK().a.snapshot()):q).a,l)
l.delete()}}},
ar(d){return!0}}
B.V3.prototype={
U(){var w=x.S
return new B.aCR(C.aX(w),C.aX(w))}}
B.aCR.prototype={
a_(){this.a1()
this.ard()},
ard(){var w,v,u=this,t=x.N,s=C.bl(D.d7T,!0,t)
A.d.Cs(s)
w=x.S
v=C.U(s).c
t=C.B(C.dd(s,0,C.dJ(u.d,"count",w),v),t)
A.d.v(t,C.dd(s,0,C.dJ(u.d,"count",w),v))
A.d.Cs(t)
u.e=t
u.f.a9(0)
u.r.a9(0)
u.w=0
u.x=!1},
c5K(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lf("bell",12+A.o.F(d,9),150,0.35)
s.m(new B.eco(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gL(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.n1,new B.ecp(s,v,u),t)
else{s.x=!0
C.bN(Ae.EW,new B.ecq(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.a71,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.C(A.xq,C.A(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hB,A.j,0,q,q),q),C.E(C.id(!0,q,q,A.y,new C.hK(v,8,8,1,q),new B.ecu(r),r.e.length,A.bj,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cNw[t]
o.push(new B.dA(s.b,r.d===s.a,new B.ecv(r,s),q,A.aS,q))}o.push(new B.fg(D.bDf,"New game",new B.ecw(r),A.b4,q))
return B.jF(A.aS,A.h9,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eO(o,q,q))}}
B.Vh.prototype={
U(){return new B.aDc(C.a([],x.t))}}
B.aDc.prototype={
c5O(d){A.d.a9(this.d)
this.w=!0
this.aY8()},
aY8(){this.d.push(A.cI.aB(4))
this.e=0
this.Zd()},
Zd(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zd=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.emV(t))
s=x.H
w=3
return C.b(C.bN(A.lG,null,s),$async$Zd)
case 3:r=t.d,q=C.bl(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aRu(n)
w=7
return C.b(C.bN(new C.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$Zd)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.emW(t))
case 1:return C.h(u,v)}})
return C.i($async$Zd,v)},
aRu(d){this.m(new B.emT(this,d))
B.lf("marimba",D.ao0[d]+5,450,0.55)
C.bN(A.EU,new B.emU(this),x.H)},
c5Q(d){var w,v,u=this
if(!u.w||u.r)return
u.aRu(d)
w=u.d
v=u.e
if(w[v]!==d){E.dF(90,"",600,0,0.5,"saw")
u.m(new B.emX(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.emY(u))
C.bN(A.ia,new B.emZ(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.Td,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.f5Z,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.auU[v]
u=u.j(q.f===v?1:0.35)
t=new C.aW(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.auU[v].j(0.8),A.J,30)],w):p
r=new C.aA(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aE(p,C.dh(p,p,p,p,A.bc,new C.o(u,p,new C.bP(r,r,r,r),new C.bq(t,t,t,t),s,p,A.n),A.jb,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.en_(q,v),p,p,p,p,p,p,!1,A.a8))}o=C.av(new C.C(A.a9,C.v(C.a([o,A.an,n,A.d5,new C.fG(1,C.lX(1,l,2,12,12,p,A.dQ,!1),p)],m),A.m,p,A.bb,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jF(A.cj,A.h9,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eO(C.a([new B.fg(A.iV,n,q.gc5N(q),A.b4,p)],m),p,p))}}
B.VC.prototype={
U(){return new B.bjl(new C.ar(A.as,$.aw()))}}
B.bjl.prototype={
auI(d){return C.oB(A.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eBc(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d5(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eBl()
l=C.aM(m,A.T,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.br(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),Ac.wx),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aWO),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.l_,"Bill amount",!0,!0,!1,m,m,m,m,D.f3y,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dU,m,m,m,1,m,m,!1,"\u2022",m,new B.eBh(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aOl,!0,A.a4,m,A.am,m,m,m,m)
k=A.b4.j(0.1)
s=C.m(20)
r=C.I(A.b4.j(0.35),A.q,1)
q=x.p
s=C.cB(C.a([l,A.bx,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.auI(w)),t.$2("Total","$"+n.auI(v)),R.Xj,t.$3$big("Each of "+n.f+" pays","$"+n.auI(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bV,m,m,m)],q),m,A.fy,m,m,A.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cyu[p]
r.push(new B.dA(""+o+"%",A.k.V(n.e)===o,new B.eBi(n,o),m,A.b4,m))}l=n.f
return B.jF(A.b4,A.h9,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eO(r,"TIP",m),B.hy(A.aS,""+l,"People",20,1,new B.eBj(n),l),new B.eO(C.a([new B.dA("Round up",n.r,new B.eBk(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.V1.prototype={
U(){var w=C.a([3,5],x.t)
return new B.biP(w,A.cI,$,A.bw,0,C.a([],x.X),null,null)}}
B.biP.prototype={
a_(){this.a1()
this.la()},
lr(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bu(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t
B.a7v("snare",0.5)}u.m(new B.eb3())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.ha()
u.w=t
u.x=t?0:3.141592653589793
B.lf("bell",24,400,0.5)}u.m(new B.eb4())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bbQ(v,o.r>0,n))}u=C.aE(n,C.av(C.bY(A.fQ,m,A.br,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eaX(o),n,n,n,n,n,n,!1,A.a8)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d8,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aE(n,C.av(C.eb(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.f2O,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.eb3,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eaY(o),n,n,n,n,n,n,!1,A.a8)}else{m=o.as
u=C.aE(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eTC,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kw,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eaZ(o),n,n,n,n,n,n,!1,A.a8)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d0Z[r]
v.push(new B.dA(q.b,o.d===q.a,new B.eb_(o,q),q.c,A.by,n))}v=C.a([new B.eO(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hy(A.by,""+s,"Dice",4,1,new B.eb0(o),s))}if(o.d==="num"){s=o.z
s=B.hy(A.by,""+s,"From",100,1,new B.eb1(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hy(A.by,""+p,"To",1000,2,new B.eb2(o),p)],m))}return B.jF(A.by,A.h9,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bbQ.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cI.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cw,14)],x.V)
t=C.a([],x.p)
for(s=D.diQ.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bH(s[q],p,p,C.p(p,p,A.f,p,p,M.aa5,p,18,p,p,p,p,p,18),p))
return C.eD(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bC,p,p,100),p)}}
B.aK0.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvw.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.bt7()}}
B.aKj.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvB.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.btr()}}
B.aKO.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvL.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.btX()}}
B.aLh.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvX.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.buq()}}
B.b5s.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aCI.h(0,t)
$.aqI=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,S.ne,u,u,u,new B.cqL(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.N3,s,u,u,u,22),u,u,u,new B.cqM(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.btJ,C.A(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(D.Ei,u,new C.bP(new C.aA(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.EY,u,u,1/0))
return C.c8(u,A.bX,C.bn(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dA.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aR,s,s,s,16),A.eb],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(F.ts,C.aE(s,C.dh(s,C.A(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bc,new C.o(p,s,o,r,s,s,A.n),A.eE,s,s,s,A.h6,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.cqH(t),s,s,s,s,s,s,!1,A.a8),s)}}
B.eO.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.cd(C.A(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),1))
return new C.C(A.cH,C.A(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.auy.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.au7(d).cGp(q,A.bF,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.a9h(C.kW(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.A(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A0.Iz,A.dL,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fg.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(F.ts,C.aG(!1,A.a1,!0,C.m(12),C.aL(!1,C.m(12),!0,new C.C(Al.XM,C.A(C.a([C.X(w.c,u,v,v,v,17),A.eb,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.cqG(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ag),v)}}
B.ET.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eS6:u
w=t?A.c:A.b2
w=C.I(w,A.q,t?2.5:1)
return C.aE(u,C.dh(u,u,u,u,A.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hX,u,r,D.afZ,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.cqN(v),u,u,u,u,u,u,!1,A.a8)}}
B.my.prototype={
a4i(d,e){var w=C.dg()
w.seC(C.cM(C.dC(0,0,0,d,0,0),new B.cqI(this,w,e)))
this.fl$.push(w.bf())},
la(){var w=this,v=w.qk(new B.cqK(w))
v.j2(0)
w.fk$!==$&&C.aP()
w.fk$=v}}
B.aaf.prototype={
bwx(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.L)(w),++q)for(p=A.d.gae(w[q]);p.C();){o=p.gS(0)
n=J.a5(o)
if(n.h(o,0)<s)s=n.h(o,0)
if(n.h(o,0)>t)t=n.h(o,0)
if(n.h(o,1)<r)r=n.h(o,1)
if(n.h(o,1)>u)u=n.h(o,1)}g.z!==$&&C.aP()
g.z=s
g.Q!==$&&C.aP()
g.Q=t
g.as!==$&&C.aP()
g.as=r
g.at!==$&&C.aP()
g.at=u
for(m=0,q=0;q<w.length;w.length===p||(0,C.L)(w),++q){for(v=A.d.gae(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gS(0)
n=J.a5(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aP()
g.ax=m
w=g.bzK()
g.ay!==$&&C.aP()
g.ay=w},
bzK(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
Ff(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
k===$&&C.c()
w=!0
if(!(e<k)){k=l.Q
k===$&&C.c()
if(!(e>k)){k=l.as
k===$&&C.c()
if(!(f<k)){k=l.at
k===$&&C.c()
k=f>k}else k=w}else k=w}else k=w
if(k)return!1
for(k=l.y,w=k.length,v=0;v<k.length;k.length===w||(0,C.L)(k),++v){u=k[v]
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.q(u[r],0)
o=J.q(u[r],1)
n=J.q(u[t],0)
m=J.q(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
B.aag.prototype={
cCn(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(r.Ff(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.uS.prototype={}
B.OD.prototype={}
B.xL.prototype={}
B.OC.prototype={
fh(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.anW[w.aB(7)]
w=w.ha()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
B.lf(u,v+w-12,2200,0.1)}}
B.Uy.prototype={
U(){var w=$.aw()
return new B.aCd(new C.cs(null,x.A),new C.ar(A.as,w),new B.OC(A.cI),D.d2W,A.au,D.a28,$,A.bw,0,C.a([],x.X),null,null)}}
B.aCd.prototype={
a_(){var w,v=this
v.a1()
v.la()
v.a.toString
w=$.h8r
if(w==null)w=$.h8r=B.cth()
w.bz(new B.dUV(v),x.P)},
q(){var w=this.e
w.T$=$.aw()
w.P$=0
this.btz()},
cqe(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n)q.push(new B.dUn(p[n]).$0())
w.push(q)}this.w=w},
gVu(){var w=this.fy
return w.A(0,A.au)?100:Math.min(w.a,w.b)*0.43},
asn(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
awr(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.asn(d.x,d.w,105/Math.max(w,3))
C.eT()
B.lf("bell",(A.d.cJ(D.a1K,d.c)+1)*3+12,900,0.45)
E.dF(300,"",280,1.4,0.15,"tri")},
lr(d){var w,v,u,t,s,r,q,p=this
p.f.fh(0,d,p.db)
if(p.at!=null){w=1-Math.exp(-d*3.6)
v=p.ax
v.toString
u=p.y
t=v-u
while(t>180)t-=360
while(t<-180)t+=360
p.y=u+t*w
v=p.x
u=p.at
u.toString
v+=(u-v)*w
p.x=v
s=p.z
r=p.ay
r.toString
s+=(r-s)*w
p.z=s
if(Math.abs(t)<0.2&&Math.abs(u-v)<0.2&&Math.abs(r-s)<0.02)p.at=p.ax=p.ay=null}else if(!p.dx){p.y=p.y+p.Q*d
p.x=A.k.D(p.x+p.as*d,-85,85)
q=Math.exp(-d*2.2)
v=p.Q*=q
p.as*=q
if(p.ch&&Math.abs(v)<3)p.y=p.y+7*d/Math.sqrt(p.z)}while(v=p.y,v>180)p.y=v-360
while(v<-180){v+=360
p.y=v}},
c6u(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.au))return null
w=n.fy
v=n.gVu()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVu()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cCn((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c6t(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dUl(w))
return}w.m(new B.dUm(w,v,A.a.i(d).toLowerCase()))},
bMp(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new B.dUj(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bFU,n,n,n,o.gbMo(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.ms,n,n,n,new B.dUG(o,d),n,n,n,n,"Share",n)],l),j=C.cp(new B.dUH(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.T,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.br(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.D3,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bNV,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc6s(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iG,!0,A.a4,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
w.push(new B.dA(s.a,!1,new B.dUI(o,s),A.nc,A.aS,n))}i.push(new C.C(A.ib,new C.a7(n,38,C.cB(w,n,n,n,n,A.aO,!1),n),n))}i.push(A.an)
w=C.a([new B.dA("Whole Earth",!1,new B.dUM(o),A.hj,A.aS,n)],l)
for(v=D.aCH.gdK(D.aCH),v=v.gae(v);v.C();){u=v.gS(v)
w.push(new B.dA(u.a,!1,new B.dUN(o,u),n,A.aS,n))}w.push(new B.dA("Random",!1,new B.dUO(o),A.ml,A.aS,n))
i.push(new B.eO(w,"GO TO",n))
w=o.z
i.push(B.hy(A.aS,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dUP(o),w))
w=o.dy
i.push(B.hy(A.cj,A.a.aT(A.o.u(A.k.bu(w)),2,"0")+":00","Time",24,0,new B.dUQ(o),w))
w=o.fr
i.push(B.hy(A.b4,o.cp1(),"Season",365,0,new B.dUR(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lL:D.FU
i.push(new B.eO(C.a([new B.dA("Spin",w,new B.dUS(o),D.bB8,A.aS,n),new B.dA("Night",v,new B.dUT(o),A.vm,A.aS,n),new B.dA("Borders",u,new B.dUJ(o),D.bBc,A.aS,n),new B.dA("Names",r,new B.dUK(o),A_.N7,A.aS,n),new B.dA("Music",q,new B.dUL(o),p,A.aS,n)],l),n,n))
return B.jF(A.aS,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
cp1(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.avy[u])v=u
return A.ic[v]+" "+(A.k.bu(w-D.avy[v])+1)},
c6r(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mM(1,A.o.F((A.d.cJ(D.a1K,t)+1)*47,360),0.55,1).iH()
r=new B.dUh()
q=C.m(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.A(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.ds,j,j,j),1),C.aH(j,j,j,j,A.Gb,j,j,j,new B.dUg(this),j,j,j,j,j,A.c8)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hp,j,j,j)
m=D.dhy.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.A(C.a([m,A.ab,r.$2("PEOPLE",l?B.fp4(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.Go(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.Go(w))+" per km\xb2"
else m="\u2014"
m=C.A(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.O,v,A.O,m,A.O,C.A(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fp4(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.Vs,j,p,q,j,j,A.n),j,j,j,j,D.agx,j,j,j)}}
B.be4.prototype={
a5(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=C.M()
d7.r=D.Ag.gp(0)
d8.aX(new C.a9(0,0,0+d4,0+d5),d7)
w=new C.eJ()
w.dB(4)
for(d7=d8.a,v=0;v<90;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.25+w.aj()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.u(d4,d5)
o=d2.f
u=C.M()
t=x.O
u.saq(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.aS.j(0.35),A.K],t),D.cP1,d3).av(0,C.bT(p,o*1.1)))
d8.af(p,o*1.05,u)
n=C.bT(p,o)
u=C.M()
u.saq(D.eb7.av(0,n))
d8.af(p,o,u)
J.by(d7.save())
u=x.v
d6=new C.aO(d6.r,A.ap,d3,d3,C.a([],u))
d6.E(new C.kf(n))
d8.qh(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.M()
g.b=A.ae
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new B.daT(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cF(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cF(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.F((A.d.cJ(D.a1K,a7.c)+1)*47,360)
$.W()
b0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mM(1,a9,a3,a8?1:0.62).iH().gp(0)
b1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fz
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.L)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.W()
b7=C.a([],u)
b8=new C.aO(b6.r,A.ap,d3,d3,b7)
for(b9=!1,v=0;v<b5;++v){b6=v*4
c0=b4[b6]
c1=b4[b6+1]
c2=b4[b6+2]
c3=b4[b6+3]
c4=c3*h+c2*i
c5=o*c1*(c2*h-c3*i)
c6=o*(j*c0-k*c1*c4)
if(k*c0+j*c1*c4>=0)b9=!0
else{c7=Math.sqrt(c5*c5+c6*c6)
if(c7>0){c5=c5/c7*o
c6=c6/c7*o}}b6=d4+c5
c8=d5-c6
if(v===0){b6=new C.b5(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bx(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bx(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bF()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bx(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cF(b8.gbK().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cF(b8.gbK().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.L)(a5),++b3){d=a5[b3]
$.W()
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.re
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbK().a.snapshot()):s).a,q)
q.delete()}if(d2.z)for(u=d6.length,s=d2.r,r=!(s<1.8),s=14/s,b3=0;b3<d6.length;d6.length===u||(0,C.L)(d6),++b3){a7=d6[b3]
a8=a7===a2
if(!a8)if(r){a3=a7.ax
a3===$&&C.c()
a3=a3<s}else a3=!0
else a3=!1
if(a3)continue
e=a7.x*3.141592653589793/180
a0=a7.w*3.141592653589793/180
if(k*Math.sin(e)+j*Math.cos(e)*Math.cos(a0-l)<0.25)continue
a1=f.$2(e,a0)
if(a1==null)continue
a3=a8?13:10.5
b2=a8?A.c:A.c.j(0.9)
c9=B.hHb(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbc(b2)
c9.a5(d8,new C.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.W()
u=C.M()
u.saq(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b6m.j(0.78)],t),D.d3i,d3).av(0,C.bT(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.af(p,o,u)}$.W()
d4=C.M()
d4.saq(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.df6,d3).av(0,n))
d8.af(p,o,d4)
d7.restore()
d7=C.M()
d7.b=A.ae
d7.c=1.4
d7.r=A.hh.j(0.5).gp(0)
d8.af(p,o,d7)},
ar(d){return!0}}
B.aKp.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.aKq.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.bty()}}
B.bsp.prototype={}
B.VF.prototype={
U(){return new B.bjp()}}
B.bjp.prototype={
gaR3(){var w=this.d
if(w===$)w=this.d=A.cI.aB(16)
return w},
B(d){var w=null,v=C.eG(w,w,w,!0,!0,D.Ag,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.amq,w,w,w,new B.eC5(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fpb,w,w,w,1,w,!0),u=C.m(18),t=A.aS.j(0.1),s=C.I(A.aS.j(0.35),A.q,1),r=x.p
return C.c8(v,D.Ag,C.cB(C.a([C.p(w,C.A(C.a([D.bED,A.av,C.E(C.d(D.cSO[this.gaR3()],w,w,w,w,w,w,D.a7l,w,w,w),1),C.aH(w,w,w,w,D.bOW,w,w,w,new B.eC6(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bC,w,w,w),A.aA,C.cp(new B.eC7())],r),w,A.XW,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.Vq.prototype={
U(){return B.hHD()}}
B.bjb.prototype={
cgW(d){var w=d.c,v=B.hHF(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.la()},
lr(d){var w,v,u,t=this
t.e.fh(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cgW(w)
u=new C.u(-v.a,-v.b).aF(0,t.w)
v=C.lg(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc6v(){var w=this.ch
return new C.u(w.a/2,w.b/2).ad(0,this.x)},
c6z(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.BX[s]
q=i.ch
p=i.x
o=r.c
n=o===0?0:30+150*Math.sqrt(o/30.1)
m=r.e
l=m<=0?0:6.283185307179586*(i.f/m)+o*1.7
o=Math.cos(l)
m=Math.sin(l)
k=i.w
o=q.a/2+p.a+o*n*k-w
k=q.b/2+p.b+m*n*k-v
j=Math.sqrt(o*o+k*k)
if(j<t){t=j
u=r}}return u},
aYu(d){this.m(new B.eu8(this,d))
C.eT()
B.lf("bell",D.dfh[A.o.F(A.d.cJ(D.BX,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.ms,m,m,m,new B.euj(n,d),m,m,m,m,"Share",m)],k),i=C.cp(new B.euk(n,l)),h=C.a([new B.dA("All",!1,new B.eul(n),A.a_R,A.aM,m)],k)
for(w=0;w<10;++w){v=D.BX[w]
h.push(new B.dA(v.a,n.z===v,new B.eum(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hy(A.aM,s,"Time",1,0,new B.eun(n),u/t)
u=n.w
u=B.hy(A.aM,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.euo(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lL:D.FU
return B.jF(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eO(h,"GO TO",m),t,u,new B.eO(C.a([new B.dA("Orbits",s,new B.eup(n),m,A.aM,m),new B.dA("Names",r,new B.euq(n),m,A.aM,m),new B.dA("Asteroids",q,new B.eur(n),m,A.aM,m),new B.dA("Music",p,new B.eus(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c6w(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.eu6(),m=C.m(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.A(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kZ,r,r,r),1),C.aH(r,r,r,r,A.Gb,r,r,r,new B.eu5(this),r,r,r,r,r,A.c8)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.D5,r,r,r)
v=n.$2("WIDTH",B.Go(d.d*2)+" km")
u=p===0
p=C.A(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.Go(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.eu7().$1(v))
t=d.f
v=C.A(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.A(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.at,k,A.O,p,A.O,v,A.O,s,A.O,C.A(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.Vs,r,l,m,r,r,A.n),r,r,r,r,D.agx,r,r,r)}}
B.bqt.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.M()
w.r=D.Ag.gp(0)
a7.aX(new C.a9(0,0,0+a5,0+a6),w)
v=new C.eJ()
v.dB(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc6v()
n=a5.w
if(a5.as)for(a6=A.d.gae(D.BX),t=new C.fh(a6,new B.eWi()),s=o.a,r=o.b;t.C();){q=a6.gS(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1
m.r=A.c.j(0.12).gp(0)
p=m.H()
w.drawCircle(s,r,q*n,p)
p.delete()}if(a5.ax)for(a6=a5.CW,t=o.a,s=o.b,r=a5.cx,u=0;u<a6.length;++u){q=a6[u]
m=a5.f
l=r[u]
k=q+m*0.0016/l
j=(l===0?0:30+150*Math.sqrt(l/30.1))*n
q=Math.cos(k)
m=Math.sin(k)
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.5).gp(0)
p=l.H()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=B.hHE(A.d.gL(D.BX))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.M()
s=x.O
t.saq(new C.bS(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).av(0,C.bT(o,a6)))
a7.af(o,a6,t)
t=C.M()
t.saq(D.eb1.av(0,C.bT(o,i)))
a7.af(o,i,t)
if(a5.at){h=B.ha3("Sun",10.5,A.ad)
h.a5(a7,o.ad(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gae(D.BX),t=new C.fh(a6,new B.eWj()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gS(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.b0(l.z)
d=l.a
if(d==="Saturn"){J.by(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.cm(A.J,j*1.3,j*4.2)
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bK.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c0(a0),p)
p.delete()
w.restore()}a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.re
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.saq(new C.bS(P.pa,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a1n,a4).av(0,C.bT(new C.u(g,f),j)))
p=a0.H()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.c.gp(0)
p=l.H()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.c.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cXM[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.ha3(d,10.5,A.ad)
h.a5(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
ar(d){return!0}}
B.Uz.prototype={
U(){var w=x.i
return new B.aCe(new B.OC(A.cI),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bw,0,C.a([],x.X),null,null)}}
B.aCe.prototype={
ctr(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c6y(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e_P
s.cy=new C.u(s.ay,0)
w=s.db
A.d.a9(w)
w.push(s.cx)
s.CW=!0
s.dy=0
v=Math.sqrt(58.86870477034412)
u=Math.sqrt(117.73740954068823)
w=s.ay
t=Math.abs(6771*w*w/398600-1)
if(w>=u)s.dx="It escapes Earth and never comes back."
else if(w>=v)s.dx=t<0.03?"A perfect circle: it orbits Earth forever.":r
else s.dx=6771*(1-t)/(1+t)>6371?r:"It is too slow, so it falls back to the ground."
E.dF(150,"",400,0,0.5,"noise")
E.dF(90,"",300,1.5,0.6,"sine")
s.m(new B.dUZ())},
a_(){this.a1()
this.la()},
lr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fh(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yx[r]
p=q.c
if(i.f){o=i.r?1:0
n=1.6*p*o}else{o=i.r?1:0
n=0.002*p*o}for(p=q.b,m=0;m<12;++m){o=t[r]
o+=(p-n*o*Math.abs(o))*u
t[r]=o
o=v[r]+o*u
v[r]=o
if(o>=20){v[r]=20
s[r]=i.y
if(q.a!=="Sun")E.dF(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.da(s,new B.dVr()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
for(v=w/2,r=0;r<30;++r){t=i.cx
s=t.a
t=t.b
l=Math.sqrt(s*s+t*t)
t=i.cx
s=-398600/(l*l*l)
p=t.a
t=t.b
o=i.cy
k=o.a+p*s*v
s=o.b+t*s*v
i.cy=new C.u(k,s)
k=p+k*w
s=t+s*w
i.cx=new C.u(k,s)
j=Math.sqrt(k*k+s*s)
s=i.cy
k=i.cx
t=-398600/(j*j*j)
p=k.a
k=k.b
i.cy=new C.u(s.a+p*t*v,s.b+k*t*v)
i.dy+=w
if(Math.sqrt(p*p+k*k)<6371){i.CW=!1
E.dF(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gal(v).aC(0,i.cx).gcl()>120)v.push(i.cx)
if(v.length>700)A.d.cA(v,0)
if(i.cx.gcl()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bKH()
else n=n==="weight"?p.cAF():p.bCU()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.dcs[u]
v.push(new B.dA(t.b,p.d===t.a,new B.dVd(p,t),t.c,A.ct,o))}v=C.a([new B.eO(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dA("Hammer",!s,new B.dVe(p),Aj.FP,A.ct,o),new B.dA("Feather",s,new B.dVf(p),A_.MI,A.ct,o),new B.dA(q,r,new B.dVj(p),A.FE,A.aS,o)],w)
q=p.w
A.d.v(v,C.a([new B.eO(r,o,o),B.hy(A.ct,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dVk(p),q),new B.eO(C.a([new B.fg(A.tF,"Drop!",new B.dVl(p),A.b4,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hy(A.ct,""+A.k.V(s)+" kg","Your weight",120,20,new B.dVm(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hy(A.ct,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dVn(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hy(A.ct,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dVo(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hy(A.ct,A.k.aa(r,1)+"x out","View",8,0.5,new B.dVp(p),r),new B.eO(C.a([new B.fg(A.nd,"Fire!",p.gc6x(),A.b4,o),new B.fg(A.tF,"Falls",new B.dVq(p),A.c,o),new B.fg(A.qV,"Orbit 7.7",new B.dVg(p),A.c,o),new B.fg(D.bE2,"Oval 9",new B.dVh(p),A.c,o),new B.fg(A.Bq,"Escape",new B.dVi(p),A.c,o)],w),o,o)],w))}return B.jF(A.ct,A.h9,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bKH(){return new C.C(D.boN,C.cp(new B.dUY(this)),null)},
cAF(){var w,v,u,t=null,s=[D.ez2,D.eAr,D.eAz,D.eAS,D.eAx,D.eAX,D.ezA,D.eBi,D.eAb],r=x.p,q=C.a([D.fdk,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.C(A.cH,new C.cn(A.aO,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.x(v.a,t,new C.G(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bD(1,A.bi,new C.AZ(new B.dV_(this,v),t),t)],r),t),t))}q.push(A.at)
q.push(D.ffz)
return C.cB(q,t,A.ix,t,t,A.ah,!1)},
bCU(){return C.cp(new B.dUW(this))}}
B.b9h.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=C.M()
e.r=D.Ag.gp(0)
d.aX(new C.a9(0,0,0+h,0+g),e)
w=new C.eJ()
w.dB(2)
for(e=d.a,v=0;v<80;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.aj()*0.5).gp(0)
q=r.H()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.M()
e.saq(new C.bS(A.A,0.5,A.x,i,0,C.a([A.K,A.aS.j(0.35),A.K],x.O),D.d4a,i).av(0,C.bT(g,p*1.1)))
d.af(g,p*1.06,e)
e=C.M()
e.saq(D.eaW.av(0,C.bT(g,p)))
d.af(g,p,e)
o=g.ad(0,new C.u(0,-p))
f=f.r
e=x.v
n=new C.aO(f,A.ap,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.E(new C.b5(u-16,s))
n.E(new C.ap(u,t-400*h-4))
n.E(new C.ap(u+16,s))
n.E(new C.bF())
s=C.M()
s.r=A.ak.gp(0)
d.aP(n,s)
s=o.ad(0,new C.u(0,-400*h-6))
u=C.M()
u.r=A.c.gp(0)
d.af(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aO(f,A.ap,i,i,e)
f=g.a
t=g.b
m.E(new C.b5(f+A.d.gL(u).a*h,t+A.d.gL(u).b*h))
for(u=C.dd(u,1,i,C.U(u).c),s=u.$ti,u=new C.bR(u,u.gM(0),s.k("bR<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bx(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=C.M()
f.b=A.ae
f.c=2.4
f.d=A.bO
f.r=A.ct.j(0.9).gp(0)
d.aP(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.u(f.a*h,f.b*h))
h=C.M()
h.r=A.ct.j(0.4).gp(0)
h.z=G.mv
d.af(k,7,h)
h=C.M()
h.r=A.c.gp(0)
d.af(k,4,h)}},
ar(d){return!0}}
B.Vi.prototype={
U(){return new B.bj8(new C.cs(null,x.A),$,A.bw,0,C.a([],x.X),null,null)}}
B.bj8.prototype={
a_(){this.a1()
this.la()},
lr(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Po[l.e],i=D.Po[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.ms,k,k,k,new B.en2(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.bq1(f,g,v,k),A.f0),1)
r=g.a
q=v<10?A.k.aa(v,1):B.Go(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.i4,A.L,k,k)
o=B.Go(v*v*v)
n=A.a.cb(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.at,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A6.SW,A.L,k,k),A.bB,C.d(p+": "+B.Go(w*2)+" km wide. "+r+": "+B.Go(h*2)+" km wide.",k,k,k,k,k,k,A6.T4,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bqS,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Po[m]
r.push(new B.dA(w.a,l.e===m,new B.en3(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Po[m]
w.push(new B.dA(s.a,l.f===m,new B.en4(l,m),k,C.b0(s.c),k))}return B.jF(A.bU,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ev(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eO(r,"FIRST",k),new B.eO(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.bq1.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.M()
w.r=D.W7.gp(0)
d.aX(new C.a9(0,0,0+h,0+g),w)
v=new C.eJ()
v.dB(6)
for(w=d.a,u=0;u<70;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.u(h,g)
w=new B.eUr(d)
t=this.c
w.$3(m,o,C.b0(t.c))
s=o-n
l=new C.u(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.b0(s.c))
w=C.M()
w.b=A.ae
w.c=1.4
w.r=A.ad.gp(0)
d.af(l,n+3,w)
k=C.i1(i,i,i,i,C.dn(i,i,i,i,i,i,i,i,i,D.f_5,s.a),A.a4,A.cc,i,A.eh,A.ca)
k.eH()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbc(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbc(g)-6
h=g}k.a5(d,l.ad(0,new C.u(-w/2,h)))
j=C.i1(i,i,i,i,C.dn(i,i,i,i,i,i,i,i,i,D.f2p,t.a),A.a4,A.cc,i,A.eh,A.ca)
j.eH()
t=j.b
h=t.c
t=t.a.c
j.a5(d,m.ad(0,new C.u(-h/2,-t.gbc(t)/2)))},
ar(d){return!0}}
B.aKr.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvD.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.btA()}}
B.aL_.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvR.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.bu8()}}
B.aL2.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvT.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.bub()}}
B.P4.prototype={}
B.TC.prototype={
U(){return B.hHB()}}
B.bhP.prototype={
a_(){this.a1()
this.la()},
lr(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fh(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dF(70,"",500,0.3,0.5,"sine")}}A.d.bn(w,new B.dCu())},
aYv(d){var w,v,u,t=this.Q
if(t.A(0,A.au))return
w=this.gb6i()
v=d.aC(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcl()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.P4(t,u,1.2,new C.wW(1,30+A.cI.aj()*40,0.9,0.7).iH()))
B.lf("bell",60+A.k.V(12-u)*2,400,0.35)},
gb6i(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.K(m,new B.dCi(),C.U(m).k("K<1,N>")).fo(0,A.uM),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.ms,n,n,n,new B.dCj(o,d),n,n,n,n,"Share",n)],m)
v=C.cp(new B.dCk(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fp4(s)+" Suns"
t=B.hy(A.by,s,"Mass",1,0,new B.dCm(o),u/t)
u=C.a([new B.dA("Star (10)",!1,new B.dCn(o),n,A.by,n),new B.dA("Cygnus X-1 (21)",!1,new B.dCo(o),n,A.by,n),new B.dA("Milky Way core (4 million)",!1,new B.dCp(o),n,A.by,n),new B.dA("M87 (6.5 billion)",!1,new B.dCq(o),n,A.by,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lL:D.FU
return B.jF(A.by,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eO(u,"LIKE",n),new B.eO(C.a([new B.dA("Glowing ring",s,new B.dCr(o),n,A.by,n),new B.dA("Bent light",r,new B.dCs(o),n,A.by,n),new B.dA("Music",q,new B.dCt(o),p,A.by,n),new B.fg(A.jY,"Clear",new B.dCl(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
adO(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.eW5,w,w,w),A.bB,C.d(e,w,2,w,w,w,w,L.zm,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b8G.prototype={
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.M()
w.r=D.beb.gp(0)
b2.aX(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb6i()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.L)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.u(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new C.u(w+k/h*g,v+j/h*g)}}k=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.M()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=S.Qz
b2.af(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.wV,A.fD,d)
n.toString
k=Math.cos(a4)
$.W()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.H()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=n.j(b1).gp(0)
f=k.H()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.W()
b1=C.M()
b1.saq(new C.bS(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cKf,null).av(0,C.bT(u,b0)))
b2.af(u,b0,b1)
b1=C.M()
b1.r=A.w.gp(0)
b2.af(u,s,b1)
b1=C.M()
b1.b=A.ae
b1.c=1
b1.r=A.by.j(0.55).gp(0)
b2.af(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.L)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.c=4.2/Math.sqrt(a8)
n.d=A.bO
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=k.j(0.2).gp(0)
o.z=G.mv
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
ar(d){return!0}}
B.adX.prototype={}
B.Uv.prototype={
U(){var w=x.r,v=x.g
return new B.big(new C.cs(null,x.A),new B.OC(A.cI),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bw,0,C.a([],x.X),null,null)}}
B.big.prototype={
a_(){this.a1()
this.Zq()
this.la()},
Zq(){var w,v,u,t,s,r,q,p,o=this,n=new C.eJ()
n.dB(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.adX(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aB(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.ha()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.adX(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cth(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e1i
k.cx=D.e1l
w=new C.eJ()
w.dB(9)
v=k.cy
A.d.a9(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.adX(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
A.d.v(v,u)
u=x.g
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.L)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new C.u(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.L)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new C.u(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=C.a([],u)
for(s=k.ay,r=x.S,s=C.dd(s,0,C.dJ(900,"count",r),C.U(s).c),o=s.$ti,s=new C.bR(s,s.gM(0),o.k("bR<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.dd(u,0,C.dJ(900,"count",r),C.U(u).c),r=u.$ti,u=new C.bR(u,u.gM(0),r.k("bR<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dF(110,"",900,0.5,0.45,"sine")},
lr(d){var w,v,u,t,s,r,q,p=this
p.e.fh(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aC(0,p.fx)
s=Math.max(0.25,t.gcl())
r=t.ev(0,s).aF(0,0.9/(s*s))
w=p.fy.ad(0,r.aF(0,u))
p.fy=w
v=p.cx.aC(0,r.aF(0,u))
p.cx=v
w=p.fx.ad(0,w.aF(0,u))
p.fx=w
v=p.CW.ad(0,v.aF(0,u))
p.CW=v
q=new B.dTw(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.ms,r,r,r,new B.dTm(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bdV(s,r),A.au),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bF,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ag.a6D,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bS,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d_P[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dA(u.b,o,new B.dTn(s,u),r,A.h1,r))}l.push(new B.dA("Collide",s.ch,new B.dTo(s),A.xO,A.bU,r))
o=C.a([new B.eO(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hy(A.h1,""+n,"Arms",6,2,new B.dTp(s),n)
l=s.r
A.d.v(o,C.a([n,B.hy(A.h1,A.k.aa(l,1),"Winding",6,0.8,new B.dTq(s),l)],q))}n=s.as
o.push(B.hy(A.h1,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dTr(s),n))
n=s.ax
o.push(B.hy(A.h1,A.k.aa(n,1)+"x","Speed",4,0,new B.dTs(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lL:D.FU
o.push(new B.eO(C.a([new B.dA("Dark matter",n,new B.dTt(s),r,A.by,r),new B.dA("You are here",l,new B.dTu(s),r,A.aM,r),new B.dA("Music",w,new B.dTv(s),t,A.h1,r)],q),r,r))
return B.jF(A.h1,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ev(new C.an(A.W,r,A.b_,A.r,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.bdV.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.M()
w.r=D.bgc.gp(0)
a3.aX(new C.a9(0,0,0+a1,0+a2),w)
v=new C.eJ()
v.dB(3)
for(w=a3.a,u=0;u<90;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.15+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.u(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.M()
t.saq(new C.bS(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.c86,a0).av(0,C.bT(o,a2)))
a3.af(o,a2,t)}m=new B.d8_(a1.as)
a2=n*0.3
t=C.M()
t.saq(new C.bS(A.A,0.5,A.x,a0,0,C.a([A.h2.j(0.85),A.aH.j(0.3),A.K],x.O),a0,a0).av(0,C.bT(o,a2)))
a3.af(o,a2,t)
if(!a1.ch){l=C.M()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.F(q,360)
l.r=new H.mM(1,r,q>200?0.45:0.55,1).iH().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.H()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.W()
a2=C.M()
a2.b=A.ae
a2.c=1.6
a2.r=A.aM.gp(0)
a3.af(g,9,a2)
f=C.i1(a0,a0,a0,a0,D.eTa,A.a4,A.cc,a0,A.eh,A.ca)
f.eH()
f.a5(a3,g.ad(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.M()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bhn.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bcl.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.M()
w.r=A.h2.gp(0)
a3.af(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.M()
w.r=A.io.gp(0)
a3.af(a1,5,w)}},
ar(d){return!0}}
B.Ve.prototype={
U(){return new B.bj7(new C.cs(null,x.A),new B.OC(A.cI),$,A.bw,0,C.a([],x.X),null,null)}}
B.bj7.prototype={
a_(){this.a1()
this.la()},
lr(d){var w,v,u,t=this
t.e.fh(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.F(t.r+d*0.04*v,1)
else{w=A.k.F(t.w+d*0.05*v,1)
t.w=w
u=A.k.bu(w*4)
if(u!==A.k.bu(t.as))B.lf("bell",60+u*4,500,0.35)
t.as=u}},
gcp0(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcfy(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.ms,q,q,q,new B.emh(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ev(C.b3(q,q,q,new B.bph(r,q),A.f0),r.d),1)
if(r.f==="seasons")w=r.gcp0()
else{w=r.gcfy()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A7.T3,A.L,q,q),A.f,q,q,q,q,q,q,q,K.agI,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A2.y_:A.iV
t=r.Q
s=t?A.lL:D.FU
s=C.a([new B.eO(C.a([new B.dA("Seasons",n==="seasons",new B.emi(r),A.ye,A.bt,q),new B.dA("Moon phases",n==="moon",new B.emj(r),A.vm,A.bt,q),new B.dA(u,!1,new B.emk(r),v,A.bt,q),new B.dA("Music",t,new B.eml(r),s,A.bt,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hy(A.bt,D.d_a[A.o.F(A.k.bu(n*12),12)],"Month",1,0,new B.emm(r),n)
v=r.z
A.d.v(s,C.a([n,B.hy(A.bt,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.emn(r),v)],p))}else{p=r.w
s.push(B.hy(A.bt,""+(A.k.bu(p*29.5)+1),"Day of month",1,0,new B.emo(r),p))}p=r.y
s.push(B.hy(A.bt,A.k.aa(p,1)+"x","Speed",4,0.2,new B.emp(r),p))
return B.jF(A.bt,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.bph.prototype={
a5(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=C.M()
b8.r=D.Ag.gp(0)
b9.aX(new C.a9(0,0,0+b5,0+b6),b8)
w=new C.eJ()
w.dB(4)
for(b8=b9.a,v=0;v<70;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.aj()*0.4).gp(0)
q=r.H()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.u(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.cm(p,n*2,o*2)
t=C.M()
t.b=A.ae
t.c=1
t.r=A.b2.gp(0)
b9.hM(u,t)
t=C.M()
t.saq(D.eaY.av(0,C.bT(p,34)))
b9.af(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).ev(0,p.aC(0,l).gcl())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.M()
s.r=D.be7.gp(0)
b9.af(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ap,b4,b4,C.a([],x.v))
b7.E(new C.kf(C.bT(A.J,k)))
b9.qh(0,b7)
b7=i.aF(0,k).aF(0,0.35)
s=k*1.1
b6=C.M()
b6.saq(D.eb6.av(0,C.bT(A.J,s)))
b9.af(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aF(0,k).aF(0,1.7)
b5=h.aF(0,k).aF(0,1.7)
t=C.M()
t.c=2
t.r=A.cg.gp(0)
b9.bA(b7,b5,t)
t=h.aF(0,k).aF(0,1.7)
b5=C.M()
b5.r=A.cg.gp(0)
b9.af(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.i1(b4,b4,b4,b4,C.dn(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aPQ,b5),A.a4,A.cc,b4,A.eh,A.ca)
f.eH()
f.a5(b9,l.ad(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.M()
r.b=A.ae
r.c=1
r.r=A.b2.gp(0)
b9.af(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.M()
r.saq(new C.bS(new C.da(-0.5,0),1.1,A.x,b4,0,C.a([D.b9U,D.aeC],x.O),D.cRN,b4).av(0,C.bT(p,k)))
b9.af(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.M()
r.r=D.b7j.gp(0)
b9.af(a1,a2,r)
J.by(b8.save())
b7=b7.r
r=x.v
d=new C.aO(b7,A.ap,b4,b4,C.a([],r))
d.E(new C.kf(C.bT(a1,a2)))
b9.qh(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.M()
a3.r=A.bR.gp(0)
b9.aX(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).ev(0,a1.aC(0,p).gcl())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.arH[a5]
a7=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aS.j(0.45).gp(0)
a7.z=A.jk
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.M()
b6.r=D.b7e.gp(0)
b9.af(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.by(b8.save())
b6=new C.aO(b7,A.ap,b4,b4,C.a([],r))
b6.E(new C.kf(C.bT(a8,a9)))
b9.qh(0,b6)
s=s.w
b1=new C.aO(b7,A.ap,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.E(new C.b5(u,b5))
b6=b2>0
b1.aBB(new C.u(u,t+a9),b6,new C.aW(a9,a9))
if(b0<0.5)b6=b2<0
b1.aBB(new C.u(u,b5),b6,new C.aW(a9*Math.abs(1-2*b0),a9))
b6=C.M()
b6.r=A.bR.gp(0)
b9.aP(b1,b6)
b8.restore()
b8=C.M()
b8.b=A.ae
b8.c=1
b8.r=A.b2.gp(0)
b9.af(a8,a9,b8)
b3=C.i1(b4,b4,b4,b4,D.eTb,A.a4,A.cc,b4,A.eh,A.ca)
b3.eH()
b3.a5(b9,a8.ad(0,new C.u(-b3.b.c/2,a9+6)))}},
ar(d){return!0}}
B.aJY.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvv.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.bt4()}}
B.aKm.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvC.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.btu()}}
B.aKZ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvQ.prototype={
q(){var w,v,u
for(w=this.fl$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fk$
w===$&&C.c()
w.q()
this.bu7()}}
var z=a.updateTypes(["~()","R(ti)","R(a3D)","ay<~>()","R(C_)","H(ti,H)","N(N,ti)","R(BW)","R(Yz)","R(aaz)","R(uS)","R(a2k)","R(ni)","R(a_5)","R(abm)","H(H)","TI()","Uj()","Ty()","Ux()","UQ()","US()","TH()","Vb()","Vr()","Vc()","V8()","Vy()","TG()","VD()","R(mv)","V2()","V7()","ae1(Y,H)","acV(Y,H)","~(a4<@,@>)","H(BW,BW)","n(e9)","R(adS)","R(a_M)","R(C9)","R(ab3)","R(acZ)","R(aaN)","H(H,qD)","H(H,C_)","n(qD)","~(qD,ai<n>,H)","qD?(C_)","R(qD)","r(n,a_z)","R(Pl)","~(A9)","R(aaU)","N(H?)","VF()","R(Fm)","R(acb)","N(H)","Uk()","N(P4)","R(a9v)","TD()","a7w()","~(AH,n,u,w,N)","~(n,ti)","V5()","UL(Y)","MP(Y)","U1(Y,bp<N>,bp<N>)","VJ()","Ur()","TE()","Ui()","V3()","Vh()","VC()","V1()","~(n)","cq(aag)","R(aaf)","Uy()","Vq()","Uz()","TC()","Uv()","Vi()","Ve()","U3()","R(P4)","~(b9)"])
B.fre.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fhY.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gL(d.e.split(". "))+"."},
$S:z+37}
B.foi.prototype={
$1(d){var w
if(!this.a.Lg(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.foj.prototype={
$1(d){return d.x},
$S:z+1}
B.frb.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.frc.prototype={
$1(d){var w
if(!this.a.Lg(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.frd.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e3J.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e3K.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.y(this.b,this.c))},
$S:0}
B.e3L.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m5(v,A.dV,A.i9)}},
$S:8}
B.e3W.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a9(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e3X.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e3S.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e3Q.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dC(0,0,0,d,0,0),new B.e3R(w,this.b,e)))},
$S:1827}
B.e3R.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e3T.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVx().aiS(0,u[1],u[2],u[3])
u[4].bJ(0,new B.e3O(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e3P(w.a,v,w.f,w.r))},
$S:0}
B.e3O.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:192}
B.e3P.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bu(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e3U.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVx().ajF(t,u[1],s,u[3])
E.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e3N(w.a,v,w.e,w.f))},
$S:0}
B.e3N.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bu(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e3V.prototype={
$0(){E.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e3M(w,this.b))},
$S:0}
B.e3M.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e4_.prototype={
$0(){var w=this.a
return w.m(new B.e3Z(w))},
$S:0}
B.e3Z.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e40.prototype={
$0(){var w=this.a
return w.m(new B.e3Y(w))},
$S:0}
B.e3Y.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e41.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.N1()},
$S:0}
B.e42.prototype={
$0(){return this.a.Xw(this.b)},
$S:0}
B.e43.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.N1():w.aUj()},
$S:2}
B.e44.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.N1():w.aUj()},
$S:0}
B.ejI.prototype={
$2(d,e){return d+e},
$S:1828}
B.ek1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.ek0(w,d))},
$S:136}
B.ek0.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.ek2.prototype={
$0(){},
$S:0}
B.ek3.prototype={
$0(){},
$S:0}
B.ejK.prototype={
$0(){return this.a.m(new B.ejJ(this.b,this.c))},
$S:0}
B.ejJ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.ejz.prototype={
$1(d){return this.a.cx===d},
$S:32}
B.ejA.prototype={
$1(d){return this.a.cx=d},
$S:27}
B.ejB.prototype={
$1(d){return this.a.cy===d},
$S:32}
B.ejC.prototype={
$1(d){return this.a.cy=d},
$S:27}
B.ejD.prototype={
$1(d){return this.a.db===d},
$S:32}
B.ejE.prototype={
$1(d){return this.a.db=d},
$S:27}
B.ejF.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:32}
B.ejG.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.K(0,d)},
$S:27}
B.ejH.prototype={
$0(){var w=this.a
return w.m(w.gavk())},
$S:0}
B.ejx.prototype={
$1(d){return this.a.$1(!0)},
$S:82}
B.ejy.prototype={
$1(d){return this.a.$1(!1)},
$S:138}
B.ejw.prototype={
$1(d){return this.a.$1(!1)},
$S:185}
B.ejV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bfB(o,p),n)
w=this.b
v=B.byc("WORLD",w.a,w.c)
u=B.byc("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cg:A.b4
t=B.byc("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.BR[o.db].d?A.cg:A.c
q=x.p
s=C.a([v,u,t,B.byc("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.byc("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.A(s,A.m,p,A.hB,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bBS(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.r8[w].a+".":"You landed on every world!"
v=C.a([new B.fg(A.mo,"Again",new B.ejQ(o),A.c,p),new B.fg(A.qW,"Rebuild",new B.ejR(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fg(A.iU,"Next world",new B.ejS(o),A.b4,p))
n.push(B.hdK("Perfect landing!",w,A.b4,v))}if(o.as==="crashed")n.push(B.hdK("Crash!",o.at,A.cg,C.a([new B.fg(A.mo,"Try again",new B.ejT(o),A.b4,p),new B.fg(A.qW,"Rebuild",new B.ejU(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b_,A.r,n,p)},
$S:63}
B.ejQ.prototype={
$0(){var w=this.a
return w.m(w.gavk())},
$S:0}
B.ejR.prototype={
$0(){var w=this.a
return w.m(new B.ejN(w))},
$S:0}
B.ejN.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.ejS.prototype={
$0(){var w=this.a
return w.m(new B.ejM(w))},
$S:0}
B.ejM.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.ejT.prototype={
$0(){var w=this.a
return w.m(w.gavk())},
$S:0}
B.ejU.prototype={
$0(){var w=this.a
return w.m(new B.ejL(w))},
$S:0}
B.ejL.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.ejW.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.ejP(v,w))},
$S:0}
B.ejP.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.ejX.prototype={
$1(d){return this.a.y=d},
$S:9}
B.ejY.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.ejZ.prototype={
$1(d){return this.a.z=d},
$S:9}
B.ek_.prototype={
$0(){var w=this.a
return w.m(new B.ejO(w))},
$S:0}
B.ejO.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dCW.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.h95
if(q==null)q=$.h95=B.cDt()
w=3
return C.b(C.iJ(C.a([q,$.qM().bek("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.ku(0,C.cO(J.q(s,1)))
q.m(new B.dCV(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:50}
B.dCV.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dCy.prototype={
$0(){return this.a.bT1(C.aT(J.q(this.b,"group")))},
$S:0}
B.dCz.prototype={
$1(d){return A.a.aT(A.o.fR(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:319}
B.dCX.prototype={
$0(){return B.a7v("kick",0.25)},
$S:0}
B.dCA.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dCB.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dCC.prototype={
$0(){return B.a7v("kick",0.5)},
$S:0}
B.dCD.prototype={
$0(){return E.dF(1300+this.a.R8.aB(900),"",40,0,0.2,"square")},
$S:0}
B.dCF.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.t(0,u))v.W(0,u)
else{v.K(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.b7(u.d.e,new B.dCE(u)))u.cx=null
u.go=0},
$S:0}
B.dCE.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.ax3(d)},
$S:z+11}
B.dCv.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dCw.prototype={
$0(){var w=this.a
return w.m(w.gc2g())},
$S:0}
B.dCx.prototype={
$0(){return this.a.agt(null)},
$S:0}
B.dCM.prototype={
$0(){var w=this.a.as
return w==null?null:w.eT(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dCN.prototype={
$0(){return this.a.cxq(this.b.a)},
$S:0}
B.dCO.prototype={
$0(){return this.a.agt(this.b)},
$S:0}
B.dCP.prototype={
$1(d){var w=this.a
return w.m(new B.dCL(w,d))},
$S:6}
B.dCL.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dCQ.prototype={
$0(){var w=this.a
return w.m(new B.dCK(w,this.b))},
$S:0}
B.dCK.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dCR.prototype={
$0(){var w=this.a
return w.m(new B.dCJ(w))},
$S:0}
B.dCJ.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dCS.prototype={
$0(){var w=this.a
return w.m(new B.dCI(w))},
$S:0}
B.dCI.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eT(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.JI},
$S:0}
B.dCT.prototype={
$0(){var w=this.a
return w.m(new B.dCH(w))},
$S:0}
B.dCH.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aWT()
else w.p2=null},
$S:0}
B.dCU.prototype={
$0(){var w=this.a
return w.m(new B.dCG(w))},
$S:0}
B.dCG.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.bZY.prototype={
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
$S:299}
B.bZZ.prototype={
$1(d){var w=new C.rC([],[]).pq(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:478}
B.fcb.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)&&w.h(d,1)},
$S:227}
B.fcc.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)||w.h(d,1)},
$S:227}
B.fcd.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)!==w.h(d,1)},
$S:227}
B.fck.prototype={
$1(d){return!J.q(d,0)},
$S:227}
B.fcl.prototype={
$1(d){var w=J.a5(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:227}
B.fcm.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:227}
B.dF6.prototype={
$1(d){return this.a.as2(0)},
$S:8}
B.dEL.prototype={
$0(){var w=this.b
return this.a.cx=new C.K(w,C.hUG(),C.U(w).k("K<1,H>")).fJ(0)},
$S:0}
B.dEO.prototype={
$1(d){return""+d},
$S:73}
B.dF7.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dEJ.prototype={
$1(d){return this.a.as2(this.b)},
$S:8}
B.dEK.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.avN(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mr(0,d,a1.lX(0.15,0.3))
u=a1.mr(0,d,a1.lX(0.15,0.62))
t=a1.mr(0,"and",a1.lX(0.48,0.46))
s=a1.mr(0,a0,a1.lX(0.82,0.46))
a1=t.a
w.push(new B.ni(v.a,a1,0))
w.push(new B.ni(u.a,a1,1))
w.push(new B.ni(a1,s.a,0))
break
case 1:v=a1.mr(0,d,a1.lX(0.12,0.25))
u=a1.mr(0,d,a1.lX(0.12,0.65))
r=a1.mr(0,"xor",a1.lX(0.46,0.25))
q=a1.mr(0,"and",a1.lX(0.46,0.65))
p=a1.avM(0,a0,a1.lX(0.82,0.25),0)
o=a1.avM(0,a0,a1.lX(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.ni(a1,n,0))
m=u.a
w.push(new B.ni(m,n,1))
l=q.a
w.push(new B.ni(a1,l,0))
w.push(new B.ni(m,l,1))
w.push(new B.ni(n,p.a,0))
w.push(new B.ni(l,o.a,0))
break
case 2:k=a1.mr(0,"clock",a1.lX(0.15,0.4))
j=a1.mr(0,"not",a1.lX(0.45,0.65))
s=a1.mr(0,a0,a1.lX(0.82,0.3))
i=a1.mr(0,"buzzer",a1.lX(0.82,0.65))
a1=k.a
w.push(new B.ni(a1,s.a,0))
n=j.a
w.push(new B.ni(a1,n,0))
w.push(new B.ni(n,i.a,0))
break
default:h=a1.mr(0,d,a1.lX(0.12,0.25))
g=a1.mr(0,d,a1.lX(0.12,0.7))
f=a1.mr(0,"nor",a1.lX(0.5,0.25))
e=a1.mr(0,"nor",a1.lX(0.5,0.7))
s=a1.mr(0,a0,a1.lX(0.86,0.25))
a1=f.a
w.push(new B.ni(g.a,a1,0))
n=e.a
w.push(new B.ni(n,a1,1))
w.push(new B.ni(h.a,n,0))
w.push(new B.ni(a1,n,1))
w.push(new B.ni(a1,s.a,0))}},
$S:0}
B.dEP.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.avN(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.BW(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.mr(0,w.e,o.lX(0.86,0.5))},
$S:0}
B.dEE.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dEF.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dEG.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dEH.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dEI.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.abQ(this.c)
if(v.ax)B.Bj("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gL(w)
v.CW=!1
if(v.ax)E.dF(140,"",250,0,0.3,"square")}},
$S:0}
B.dEQ.prototype={
$0(){},
$S:0}
B.dER.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
B.dES.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dEN.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bn(w.e,new B.dEM(v))
w.cy=null},
$S:0}
B.dEM.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dED.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mr(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dF0.prototype={
$0(){var w=this.a
return w.m(new B.dF_(w))},
$S:0}
B.dF_.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dF1.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.x=u
return C.aE(A.c3,C.jt(C.b3(w,w,w,new B.b9K(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dEV(v),w,w,w,new B.dEW(v),new B.dEX(v),new B.dEY(v),w,w,w,w,w,w,w,w,w,w,new B.dEZ(v),w,w,w,!1,A.a8)},
$S:35}
B.dEZ.prototype={
$1(d){return this.a.c3S(d.b)},
$S:51}
B.dEX.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ccj(u)
if(t!=null){v.as=t
v.at=u
return}w=v.awA(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:42}
B.dEY.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dEW.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bWB(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bn(v,new B.dET(w))
u=t.as
u.toString
v.push(new B.ni(u,w.a,w.b))
C.jM()}}t.z=t.as=null},
$S:37}
B.dET.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dEV.prototype={
$1(d){return this.a.auB(d.b)},
$S:343}
B.dF2.prototype={
$0(){return this.a.bxN(this.b.a)},
$S:0}
B.dF3.prototype={
$0(){return this.a.as2(this.b.a)},
$S:0}
B.dF4.prototype={
$0(){var w=this.a
return w.m(new B.dEU(w))},
$S:0}
B.dEU.prototype={
$0(){var w=this.a
w.avN(0)
w.ay=null},
$S:0}
B.dF5.prototype={
$0(){return this.a.cte(this.b)},
$S:0}
B.cKf.prototype={
$0(){var w=this,v=null,u=C.i1(v,v,v,v,C.dn(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.cc,v,A.eh,A.ca)
u.eH()
return u},
$S:342}
B.dKY.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dKX.prototype={
$0(){return this.a.d=null},
$S:0}
B.dL_.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bYn()},
$S:124}
B.dKZ.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
B.fcC.prototype={
$0(){return D.dVO},
$S:z+55}
B.fcD.prototype={
$0(){return D.dtY},
$S:z+59}
B.fcE.prototype={
$0(){return D.dqQ},
$S:z+62}
B.fcP.prototype={
$0(){return D.dVd},
$S:z+63}
B.fcR.prototype={
$0(){return D.dAl},
$S:z+66}
B.fcS.prototype={
$0(){return D.dtU},
$S:z+88}
B.fcT.prototype={
$0(){return D.dtX},
$S:z+17}
B.fcU.prototype={
$0(){return D.dn0},
$S:z+18}
B.fcV.prototype={
$0(){return D.dwr},
$S:z+19}
B.fcW.prototype={
$0(){return D.dy3},
$S:z+20}
B.fcX.prototype={
$0(){return D.dy5},
$S:z+21}
B.fcF.prototype={
$0(){return D.dt4},
$S:z+22}
B.fcG.prototype={
$0(){return D.dD4},
$S:z+23}
B.fcH.prototype={
$0(){return D.dUV},
$S:z+24}
B.fcI.prototype={
$0(){return D.dSY},
$S:z+25}
B.fcJ.prototype={
$0(){return D.dBK},
$S:z+26}
B.fcK.prototype={
$0(){return D.dV2},
$S:z+27}
B.fcL.prototype={
$0(){return D.dt3},
$S:z+28}
B.fcM.prototype={
$0(){return D.dVc},
$S:z+29}
B.fcN.prototype={
$0(){return D.dt5},
$S:z+16}
B.fcO.prototype={
$0(){return D.dyl},
$S:z+31}
B.fcQ.prototype={
$0(){return D.dBJ},
$S:z+32}
B.eTZ.prototype={
$2(d,e){return new B.ae1($.bCG()[e],new B.eTY(e,this.a),null)},
$S:z+33}
B.eTY.prototype={
$0(){var w=this.a,v=F.aCI.h(0,$.bCG()[w].a)
$.aqI=v==null?"music":v
C.a6(this.b,!1).c8(C.e8(new B.eTW(w),!1,null,x.H))},
$S:0}
B.eTW.prototype={
$1(d){return $.bCG()[this.a].e.$0()},
$S:39}
B.eU_.prototype={
$2(d,e){return new B.acV(D.avz[e],new B.eTX(this.a,e),null)},
$S:z+34}
B.eTX.prototype={
$0(){return this.a.d.$1(D.avz[this.b])},
$S:0}
B.eTF.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eTE.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eTD.prototype={
$1(d){var w=this
return new C.e0(new B.eTC(w.a,w.b,w.c,w.d),null)},
$S:20}
B.eTC.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fd5,A.at,D.fjs,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aW(12,12)
m=new C.aW(12,12)
m=C.a([new C.bD(1,A.bi,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.D3,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bq(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iG,!0,A.a4,d,A.am,d,d,d,d),d),A.ab,new C.bD(2,A.bi,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.D3,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bq(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iG,!0,A.a4,d,A.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.ded[l]
j=new C.aW(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}h=A.d.gL(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}g=A.d.gL(i)}else g=A.bF
f=new C.aA(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aE(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bP(f,f,f,f),new C.bq(j,j,j,j),d,d,A.n),d,d,d,A.fx,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eTA(a3,p,u,k),d,d,d,d,d,d,!1,A.a8))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.f34,d,d,d,d,d,d,d,d,d),A.an,new C.cn(A.aO,A.e,A.j,A.m,d,A.p,d,0,m,d),A.O,new C.a7(d,44,C.cB(n,d,d,d,d,A.aO,!1),d),A.aA],w))}v.push(C.bJ(A.zs,new B.eTB(t,r,q,u,a2),d))
return new C.C(new C.Q(0,0,0,a1.f.d),C.bn(!0,new C.cV(new C.aY(0,1/0,0,a0.a.b*0.86),C.cB(v,d,A5.AR,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:108}
B.eTA.prototype={
$0(){var w=this
return w.a.$1(new B.eTz(w.b,w.c,w.d))},
$S:0}
B.eTz.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eTB.prototype={
$0(){var w=this,v=w.a
v.m(new B.eTy(v,w.b,w.c,w.d))
C.a6(w.e,!1).O(null)},
$S:0}
B.eTy.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=C.B(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=C.B(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=C.B(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
B.eTN.prototype={
$0(){var w=this.a
return w.m(new B.eTM(w))},
$S:0}
B.eTM.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eTO.prototype={
$0(){return B.qL(this.b,this.a.f,"scene")},
$S:0}
B.eTP.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gL(u),A.d.gal(u),0.4)
u.toString
w=this.a.gYN().x
w===$&&C.c()
return C.c_(v,new C.o(v,v,v,v,v,new C.bS(D.aVd,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bX],x.O),v,v),A.n),A.bd)},
$S:302}
B.eTQ.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f3(A.A,C.c6(new C.h3(C.a([u.gtI(),u.gYN()],x.dS)),new B.eTL(u,this.b,v),w),A.f,A.eg),w,w,w)},
$S:259}
B.eTL.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtI().x
r===$&&C.c()
w=r<0.9?1:1-B.bpB(r,0.9,0.98)
v=s.gYN().x
v===$&&C.c()
u=A.dC.aw(0,v)
switch(s.gavO().a){case 0:s=s.bwZ(t.b,r,u,t.c)
break
case 1:s=s.bNf(t.b,r,u,t.c)
break
case 2:s=s.cxW(t.b,r,u,t.c)
break
case 3:s=s.bzU(t.b,r,u,t.c)
break
case 4:s=s.bD5(t.b,r,u,t.c)
break
case 5:s=s.bCi(t.b,r,u,t.c)
break
default:s=null}return C.dc(s,w)},
$S:219}
B.eTR.prototype={
$2(d,e){var w=C.au7(this.b),v=this.c.d,u=C.aq(A.d.gL(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gL(v),A.d.gal(v),0.4)
v.toString
v=w.cGj(u,A.bF,v,3.5)
u=this.a
w=u.gtI().x
w===$&&C.c()
return C.a9h(C.kW(null,null,null,1,0,new B.eTK(u),A.k.D(w,0,1)),v)},
$S:1832}
B.eTK.prototype={
$1(d){var w=this.a
w.gtI().sp(0,d)
if(w.as)w.m(new B.eTG(w))},
$S:6}
B.eTG.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eTS.prototype={
$0(){var w=this.a
w.gtI().sp(0,0)
w.afd()},
$S:0}
B.eTT.prototype={
$1(d){var w=this.a
w.m(new B.eTJ(w,d))
if(w.as)w.afd()},
$S:6}
B.eTJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eTU.prototype={
$0(){var w=this.a
w.m(new B.eTI(w,this.b))
w.gtI().sp(0,0)
if(w.as)w.afd()},
$S:0}
B.eTI.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eTV.prototype={
$0(){var w=this.a
return w.m(new B.eTH(w,this.b))},
$S:0}
B.eTH.prototype={
$0(){var w=C.B(this.b,x.G)
return this.a.w=w},
$S:0}
B.eTw.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1833}
B.eTx.prototype={
$1(d){return d.b},
$S:1834}
B.deP.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.deQ.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.deM.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.deN.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.deO.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.deR.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.deS.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.deT.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.deU.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.deV.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.deW.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.deX.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.deY.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.deZ.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.ej2.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.eiS.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.eiU.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+44}
B.eiV.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+45}
B.eiY.prototype={
$1(d){var w=D.mu.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+46}
B.eiZ.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.B(new C.e7(new C.cQ(new C.a2(q,new B.ej_(d),p.k("a2<1>")),new B.ej0(r),p.k("cQ<1,qD?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aI(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.L)(n),++v){u=n[v]
if(w.length>=6)return
t=C.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.ej_.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.ej0.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.eiW.prototype={
$1(d){return D.mu.h(0,d.b).c===D.wr},
$S:z+49}
B.eiX.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.ejs.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.uQ(0,u)
w.aH5(A.o.an(v,1000))},
$S:8}
B.ej1.prototype={
$0(){},
$S:0}
B.eiO.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$$0)
case 6:e.au("String","ngmy_core_reaction_lab_v1",s.a.d.ag())
u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:1}
B.ej4.prototype={
$1(d){var w=null,v=this.a.b
return C.bn(!0,C.v(C.a([A.O,C.dN(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mu.h(0,v).b,D.mu.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.ful,w,C.d(D.mu.h(0,v).a,w,w,w,w,w,w,A.ho,w,w,w),w,w,w),C.dN(!1,w,w,w,!0,w,w,w,!0,w,U.amu,w,w,w,w,new B.ej3(d),!1,w,w,w,w,w,w,w,D.fmb,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
B.ej3.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.ej6.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e45],x.p)
for(w=0;w<6;++w){v=D.avS[w]
s.push(C.dN(!1,u,u,u,!0,u,u,u,!0,u,D.bOB,u,u,u,u,new B.ej5(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.l_,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.ho,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bn(!0,new C.cV(new C.aY(0,1/0,0,t.a.b*0.7),C.cB(s,u,D.bum,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:28}
B.ej5.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.eiR.prototype={
$1(d){var w=null
return C.ej(C.a([C.bK(!1,A.de,w,w,!0,w,w,new B.eiP(d),w,w),C.bK(!1,A.D9,w,w,!0,w,w,new B.eiQ(d),w,w)],x.p),w,w,F.mY,D.fjD,w,w,w,w,D.fmt,w)},
$S:19}
B.eiP.prototype={
$0(){C.a6(this.a,!1).O(!1)
return null},
$S:0}
B.eiQ.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.ejq.prototype={
$0(){var w=this.a
return w.m(new B.ejp(w))},
$S:0}
B.ejp.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ejr.prototype={
$2(d,e){var w,v,u,t=null,s=new C.at(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.mc(new B.ejg(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b3R:t
v=C.a([C.b3(u,t,t,new B.bfz(w,v,new B.ejh(r),new B.eji(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e1(C.c6(w,new B.ejj(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bEM())
return C.aE(A.c3,C.jt(new C.an(A.W,t,A.b_,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.ejk(r),t,r.gcdC(),t,new B.ejl(r),new B.ejm(r),new B.ejn(r),t,t,t,t,t,t,t,t,t,t,new B.ejo(r),t,t,t,!1,A.a8)},
$S:35}
B.ejg.prototype={
$0(){return this.a.aaW(this.b)},
$S:0}
B.ejo.prototype={
$1(d){return this.a.cvI(d.b)},
$S:51}
B.ejm.prototype={
$1(d){return this.a.cdD(d.b)},
$S:42}
B.ejn.prototype={
$1(d){return this.a.cdE(d.b)},
$S:18}
B.ejl.prototype={
$1(d){return this.a.b_9()},
$S:37}
B.ejk.prototype={
$1(d){return this.a.abC(d.b)},
$S:343}
B.ejh.prototype={
$0(){return this.a.z},
$S:647}
B.eji.prototype={
$0(){return this.a.Q},
$S:719}
B.ejj.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bJ1()
if(p.length===0)return A.bH
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.q,1)
t=C.a([D.fh6,A.cX],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.L)(p),++r)t.push(new C.x(p[r],q,D.f1Q,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h6,q,q,q)},
$S:58}
B.eiT.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.C(A.e4,C.A(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bf,C.E(C.v(C.a([C.d(f,w,w,w,w,w,w,A7.T3,w,w,w),A.bB,C.d(g,w,w,w,w,w,w,F.Tb,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1836}
B.ejc.prototype={
$0(){var w=this.a.c
w.toString
return C.a6(w,!1).lN()},
$S:0}
B.ejd.prototype={
$0(){var w=this.a
return w.m(new B.ejb(w))},
$S:0}
B.ejb.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.eje.prototype={
$0(){var w=this.a
return w.m(new B.eja(w))},
$S:0}
B.eja.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.ejf.prototype={
$0(){var w=this.a
return w.m(new B.ej9(w))},
$S:0}
B.ej9.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ej8.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mu.gdK(D.mu),w=w.gae(w);w.C();){v=w.gS(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.L)(p),++r)u.push(s.cqC(p[r]))
return new C.C(I.afW,C.v(C.a([new C.C(V.ahD,w,q),C.A(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.ej7.prototype={
$0(){return this.a.c3X(this.b)},
$S:0}
B.deL.prototype={
$0(){var w=this,v=null,u=C.i1(v,v,v,v,C.dn(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.cc,v,A.eh,A.ca)
u.eH()
return u},
$S:342}
B.euT.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bn(o,new B.euR(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.euS())},
$S:8}
B.euR.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.euS.prototype={
$0(){},
$S:0}
B.euu.prototype={
$0(){},
$S:0}
B.eut.prototype={
$0(){},
$S:0}
B.euD.prototype={
$0(){return B.qL(this.b,this.a.d,"spark-painter")},
$S:0}
B.euF.prototype={
$1(d){return this.a.aXv(0,d.b)},
$S:42}
B.euJ.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gcl()>2.5}else w=!1
if(w)t.a.push(u)
v.aQB(u)
v.c6Z(u)
return null},
$S:18}
B.euE.prototype={
$1(d){return this.a.aXu()},
$S:37}
B.euK.prototype={
$1(d){return this.a.aXv(0,d.b)},
$S:23}
B.euL.prototype={
$1(d){return this.a.aXu()},
$S:51}
B.euM.prototype={
$0(){var w=this.a
return w.m(new B.euC(w,this.b))},
$S:0}
B.euC.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.euN.prototype={
$0(){var w=this.a
return w.m(new B.euB(w))},
$S:0}
B.euB.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.euO.prototype={
$0(){var w=this.a
return w.m(new B.euA(w,this.b))},
$S:0}
B.euA.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.euP.prototype={
$1(d){var w=this.a
return w.m(new B.euz(w,d))},
$S:6}
B.euz.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.euQ.prototype={
$0(){var w=this.a
return w.m(new B.euy(w))},
$S:0}
B.euy.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.euG.prototype={
$0(){var w=this.a
return w.m(new B.eux(w))},
$S:0}
B.eux.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.euH.prototype={
$0(){var w=this.a
return w.m(new B.euw(w))},
$S:0}
B.euw.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.euI.prototype={
$0(){var w=this.a
return w.m(new B.euv(w,this.b))},
$S:0}
B.euv.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eBs.prototype={
$0(){return B.qL(this.b,this.a.d,"title")},
$S:0}
B.eBt.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIs().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bYy(v[t],t,s,q,u))
return new C.C(A.fy,C.bY(A.fQ,w,A.rI,0,0),null)},
$S:685}
B.eBu.prototype={
$1(d){return this.a.m(new B.eBr())},
$S:2}
B.eBr.prototype={
$0(){},
$S:0}
B.eBv.prototype={
$0(){var w=this.a
w.m(new B.eBq(w,this.b))
w=w.gIs()
w.it(0,0)
w.cH(0)},
$S:0}
B.eBq.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eBw.prototype={
$0(){var w=this.a
return w.m(new B.eBp(w,this.b))},
$S:0}
B.eBp.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eBx.prototype={
$0(){var w=this.a
return w.m(new B.eBo(w))},
$S:0}
B.eBo.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eBy.prototype={
$0(){var w=this.a
return w.m(new B.eBn(w,this.b))},
$S:0}
B.eBn.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eBz.prototype={
$0(){var w=this.a.gIs()
w.it(0,0)
w.cH(0)},
$S:0}
B.eBA.prototype={
$1(d){var w=this.a
return w.m(new B.eBm(w,d))},
$S:6}
B.eBm.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.efG.prototype={
$1(d){return d.a.aC(0,this.a).gcl()<16},
$S:z+13}
B.efH.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gcl()<16||d.a.aC(0,w).gcl()>this.a.r.galG()*2.2},
$S:z+13}
B.efu.prototype={
$0(){return B.qL(this.b,this.a.d,"orbits")},
$S:0}
B.efv.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.at(e.b,e.d)
q.r=p
w=q.gacQ()
v=q.w
u=q.as
t=q.at
s=u==null?A.a22:q.che(u,q.gaUM())
return new C.ev(C.aE(A.c3,C.b3(r,r,r,new B.bjW(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.efr(q),new B.efs(q),new B.eft(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8),q.d)},
$S:196}
B.efs.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:42}
B.eft.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.efr.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gcl()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_5(u,v.gaUM(),v.Q,v.b0E(),C.a([],x.g)))
C.jM()
if(v.ax)E.dF(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.efw.prototype={
$1(d){var w=this.a
return w.m(new B.efq(w,d))},
$S:6}
B.efq.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.efy.prototype={
$1(d){var w=this.a
return w.m(new B.efp(w,d))},
$S:6}
B.efp.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.efz.prototype={
$1(d){var w=this.a
return w.m(new B.efo(w,d))},
$S:6}
B.efo.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.efA.prototype={
$0(){var w=this.a
return w.m(new B.efn(w))},
$S:0}
B.efn.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.efB.prototype={
$0(){var w=this.a
return w.m(new B.efm(w))},
$S:0}
B.efm.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.efC.prototype={
$0(){var w=this.a
return w.m(new B.efl(w))},
$S:0}
B.efl.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.efD.prototype={
$0(){var w=this.a
return w.m(w.gcsS())},
$S:0}
B.efE.prototype={
$0(){var w=this.a
return w.m(w.gbF_())},
$S:0}
B.efF.prototype={
$0(){var w=this.a
return w.m(new B.efk(w))},
$S:0}
B.efk.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.aql(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.ha())}},
$S:0}
B.efx.prototype={
$0(){var w=this.a
return w.m(A.d.grn(w.e))},
$S:0}
B.eAU.prototype={
$1(d){return this.a.fQ$-d.b>6000},
$S:721}
B.eAV.prototype={
$1(d){var w=this.a.e
return new C.a2(w,new B.eAT(d),C.U(w).k("a2<1>")).gM(0)>=3},
$S:721}
B.eAT.prototype={
$1(d){return d.a.aC(0,this.a.a).gcl()<14},
$S:z+53}
B.eAJ.prototype={
$0(){return B.qL(this.b,this.a.d,"swarm")},
$S:0}
B.eAK.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.ev(C.aE(A.c3,C.b3(w,w,w,new B.brm(v.e,v.f,v.ax,v.at,v.ay,v.fQ$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eAG(v),new B.eAH(v),new B.eAI(v),w,w,w,w,w,w,w,w,new B.eAy(v),new B.eAz(v),new B.eAA(v),w,w,w,!1,A.a8),v.d)},
$S:196}
B.eAH.prototype={
$1(d){return this.a.ay=d.b},
$S:42}
B.eAI.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eAG.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.eAz.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.y(v,w.fQ$))
if(w.ch)E.dF(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lf("flute",7,500,0.3)},
$S:23}
B.eAA.prototype={
$1(d){return this.a.ay=null},
$S:51}
B.eAy.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eAL.prototype={
$0(){var w=this.a
return w.m(new B.eAF(w,this.b))},
$S:0}
B.eAF.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eAM.prototype={
$0(){var w=this.a
return w.m(new B.eAE(w,this.b))},
$S:0}
B.eAE.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a9(w.e)},
$S:0}
B.eAN.prototype={
$0(){var w=this.a
return w.m(new B.eAD(w))},
$S:0}
B.eAD.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eAO.prototype={
$1(d){var w=this.a
return w.m(new B.eAC(w,d))},
$S:6}
B.eAC.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eAP.prototype={
$1(d){var w=this.a
return w.m(new B.eAB(w,d))},
$S:6}
B.eAB.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eAQ.prototype={
$1(d){var w=this.a
return w.m(new B.eAx(w,d))},
$S:6}
B.eAx.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eAR.prototype={
$1(d){var w=this.a
return w.m(new B.eAw(w,d))},
$S:6}
B.eAw.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eAS.prototype={
$1(d){var w=this.a
return w.m(new B.eAv(w,d))},
$S:6}
B.eAv.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dEf.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dEe(w,d))},
$S:136}
B.dEe.prototype={
$0(){var w=this.a,v=this.b,u=J.a5(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.js(v==null?A.rd:v)
v=v.gae(v)
while(v.C()){u=v.gS(v)
t.n(0,C.t(u.a),A.k.N(C.dQ(u.b)))}w.x=t
w.Q=!0
A.d.a9(w.d)},
$S:0}
B.dEg.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dEh.prototype={
$1(d){var w=d.d
return w!=null&&this.a.YO(w)>0},
$S:z+14}
B.dE5.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.ayU()},
$S:0}
B.dE8.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eH(w,F.mb,new C.C(A.bC,new C.a7(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.i4,w,w,w),A.S,C.E(C.id(!0,w,w,A.y,T.aNe,new B.dE7(u,d),100,w,w,A.ah,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d0,w,new C.b7(v,A.Y),w)},
$S:46}
B.dE7.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dE6(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bU:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b2:A.dp,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.ja
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aF("\u2605",n)+A.a.aF("\u2606",3-n),s,s,s,s,s,s,D.f5u,s,s,s))
return C.aE(s,C.p(s,C.v(o,A.m,s,A.bb,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a8)},
$S:75}
B.dE6.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.dEc.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gabT()
o=C.b3(q,q,q,new B.b9q(p.d,w,v,p.gc43(),q),o)
v=p.bWe("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gHO()
t=p.as>=p.gHO()?A.b4:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.A(C.a([v,p.atR("GOAL",""+w+" / "+u,t),p.atR("STARS",A.a.aF("\u2605",s)+A.a.aF("\u2606",3-s),A.aM)],r),A.m,q,A.hB,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lz)
if(p.Q&&!p.y)s.push(D.aUW)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.b4:A.cg).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b4:A.cg,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.an,C.d("You blasted "+p.as+" dots. The goal was "+p.gHO()+".",q,q,q,q,q,q,A.hD,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aF("\u2605",t==null?1:t),q,q,q,q,q,q,D.eX5,q,q,q))}u.push(A.aA)
t=C.a([new B.fg(A.mo,"Try again",new B.dE9(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fg(A.iU,"Next level",new B.dEa(p),A.b4,q))
u.push(C.A(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.Vu,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aE(A.c3,new C.an(A.W,q,A.b_,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dEb(p),q,q,q,q,!1,A.a8)},
$S:35}
B.dEb.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fQ$
E.dF(180,"",200,1,0.4,"sine")
C.jf()},
$S:23}
B.dE9.prototype={
$0(){var w=this.a
return w.m(w.gb3i())},
$S:0}
B.dEa.prototype={
$0(){var w=this.a
return w.aXw(w.r+1)},
$S:0}
B.dEd.prototype={
$0(){var w=this.a
return w.m(w.gb3i())},
$S:0}
B.cJN.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.W()
v=C.M()
v.r=f.j(0.18).gp(0)
w.af(d,e,v)
v=C.M()
v.b=A.ae
v.c=3
v.r=f.j(0.9).gp(0)
w.af(d,e,v)
v=C.M()
v.r=f.j(0.25).gp(0)
v.z=A.ln
w.af(d,e*0.5,v)},
$S:722}
B.eb9.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcLV()?this.a.cp4(w,v,d.b):w.aC(0,v).gcl())<24},
$S:z+56}
B.eby.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.ebn.prototype={
$0(){var w=this.a
return w.m(new B.ebe(w))},
$S:0}
B.ebe.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.ebo.prototype={
$0(){return B.qL(this.b,this.a.d,"marble-music")},
$S:0}
B.ebp.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.ev(C.aE(A.c3,C.b3(w,w,w,new B.bgt(v.e,v.f,v.at,v.ax,v.fQ$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ebk(v),new B.ebl(v),new B.ebm(v),w,w,w,w,w,w,w,w,w,w,new B.ebd(v),w,w,w,!1,A.a8),v.d)},
$S:196}
B.ebd.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Zy(w)
u.e.push(new B.Fm(w,w,v,u.aOj(v)))
if(u.ay)B.lf(u.z,v+12,700,0.5)}if(u.x==="erase")u.aQR(d.b)},
$S:51}
B.ebl.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:42}
B.ebm.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aQR(d.b)},
$S:18}
B.ebk.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gcl()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Zy(t.ad(0,w).ev(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.Fm(w,t,v,u.aOj(v)))
if(u.ay)B.lf(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.ebq.prototype={
$0(){var w=this.a
return w.m(new B.ebj(w,this.b))},
$S:0}
B.ebj.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.ebr.prototype={
$0(){var w=this.a
return w.m(new B.ebi(w,this.b))},
$S:0}
B.ebi.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ebs.prototype={
$0(){var w=this.a
return w.m(new B.ebh(w,this.b))},
$S:0}
B.ebh.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ebt.prototype={
$1(d){var w=this.a
return w.m(new B.ebg(w,d))},
$S:6}
B.ebg.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ebu.prototype={
$0(){var w=this.a
return w.m(new B.ebf(w))},
$S:0}
B.ebf.prototype={
$0(){return this.a.axs("stairs")},
$S:0}
B.ebv.prototype={
$0(){var w=this.a
return w.m(new B.ebc(w))},
$S:0}
B.ebc.prototype={
$0(){return this.a.axs("pinball")},
$S:0}
B.ebw.prototype={
$0(){var w=this.a
return w.m(new B.ebb(w))},
$S:0}
B.ebb.prototype={
$0(){return this.a.axs("random")},
$S:0}
B.ebx.prototype={
$0(){var w=this.a
return w.m(new B.eba(w))},
$S:0}
B.eba.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.ef3.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.ef4.prototype={
$0(){var w=this.b,v=new B.acG(this.a.a,this.c)
v.c=w.fQ$
return w.e.push(v)},
$S:0}
B.efb.prototype={
$0(){var w=this.a
return w.m(new B.efa(w))},
$S:0}
B.efa.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.efc.prototype={
$0(){return B.qL(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.efd.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.at(e.b,e.d)
if(!u.f){u.f=!0
u.aPF()}w=u.w
return new C.ev(C.aE(A.c3,C.b3(v,v,v,new B.bjX(u.e,u.gaXy(),6,u.gcjg(),u.gcpv(),u.fQ$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ef9(u),v,v,v,!1,A.a8),u.d)},
$S:196}
B.ef9.prototype={
$1(d){return this.a.c45(d.b)},
$S:51}
B.efe.prototype={
$1(d){var w=this.a
return w.m(new B.ef8(w,d))},
$S:6}
B.ef8.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eff.prototype={
$0(){var w=this.a
return w.m(new B.ef7(w,this.b))},
$S:0}
B.ef7.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.efg.prototype={
$0(){var w=this.a
return w.m(new B.ef6(w,this.b))},
$S:0}
B.ef6.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.efh.prototype={
$0(){var w=this.a
return w.m(w.gbIY())},
$S:0}
B.efi.prototype={
$0(){var w=this.a
return w.m(new B.ef5(w))},
$S:0}
B.ef5.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a9(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.acG(v.aB(6),v.aj()))},
$S:0}
B.efj.prototype={
$0(){var w=this.a
return w.m(A.d.grn(w.e))},
$S:0}
B.frv.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.F(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:127}
B.eey.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.eex(w,d))},
$S:136}
B.eex.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.x.v(0,w)},
$S:0}
B.eek.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.F(d,100)===w)this.a.a+=e},
$S:127}
B.eee.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b8j(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.eef.prototype={
$0(){var w=this.a
A.d.a9(w.e)
w.f.a9(0)
w.r=null},
$S:0}
B.eej.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this.b
if(m==null)this.a.r=null
else{w=this.a
v=w.r
if(v==null)w.r=m
else if(v===m)w.r=null
else{u=Math.min(v,m)
t=Math.max(v,m)
s=u*100+t
m=w.f
r=m.h(0,s)
if(r==null)r=0
q=r>=3?0:r+1
if(q===0)m.W(0,s)
else{v=w.e
p=D.vP.h(0,v[u].a).a
o=w.aip(u)
v=D.vP.h(0,v[t].a).a
n=w.aip(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vM("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaXE()&&w.x.K(0,w.d)){B.vM("zap",12,300,0.5)
m=w.x
m=C.B(m,C.a3(m).k("co.E"))
B.vJ("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.eei.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a2<J.E>"),p=C.B(new C.a2(new C.cu(t,s),new B.eeg(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.L)(p),++w)t.W(0,p[w])
s=x.S
v=C.T(s,s)
t.bJ(0,new B.eeh(r,v))
t.a9(0)
t.v(0,v)
A.d.cA(u.e,r)
u.r=null},
$S:0}
B.eeg.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.F(d,100)===w},
$S:32}
B.eeh.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.F(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:127}
B.ees.prototype={
$1(d){return""+d.b+" "+D.vP.h(0,d.a).c.toLowerCase()},
$S:412}
B.eet.prototype={
$0(){var w=this.a
return w.m(new B.eer(w))},
$S:0}
B.eer.prototype={
$0(){var w=this.a;++w.d
w.avT(0)},
$S:0}
B.eeu.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.at(e.b,e.d)
return C.aE(A.c3,C.b3(w,w,w,new B.bha(v.e,v.f,v.r,v.gcA0(),w),A.f0),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.een(v),new B.eeo(v),new B.eep(v,e),w,w,w,w,w,w,w,w,w,w,new B.eeq(v),w,w,w,!1,A.a8)},
$S:35}
B.eeq.prototype={
$1(d){return this.a.c4s(d.b)},
$S:51}
B.eeo.prototype={
$1(d){var w=this.a
return w.w=w.aXF(d.b)},
$S:42}
B.eep.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.eel(w,v,d,this.b))},
$S:18}
B.eel.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.een.prototype={
$1(d){return this.a.w=null},
$S:37}
B.eev.prototype={
$0(){var w=this.a
return w.m(new B.eem(w,this.b))},
$S:0}
B.eem.prototype={
$0(){var w=this.a
w.d=this.b
w.avT(0)},
$S:0}
B.eew.prototype={
$0(){return this.a.c4m(0,this.b.a)},
$S:0}
B.dmV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.F(d,100)].b,h=i.aC(0,j),g=new C.u(-h.b,h.a).ev(0,Math.max(h.gcl(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.W()
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.ad.gp(0)
m.c=4
m.d=A.bO
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:127}
B.dN1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dN0(w,d))},
$S:136}
B.dN0.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dMR.prototype={
$0(){var w,v,u=J.e3(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.aul[w.aB(4)]
return A.d.fW(u)},
$S:22}
B.dMQ.prototype={
$1(d){return B.fVi(d)==="*"},
$S:3}
B.dMS.prototype={
$1(d){return d!==this.a},
$S:3}
B.dMP.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vJ("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.vM("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga8q()[r]+" codes for "+C.t(D.C3.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b_G()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u)r.push(D.C3.h(0,w[u]))
r="Protein built: "+A.d.aI(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vM("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dN_.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dp:e,u=C.m(8),t=f?C.I(A.b2,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b2:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.n6,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1840}
B.dMV.prototype={
$1(d){var w=D.dhV.h(0,d)
return w==null?A.c:w},
$S:723}
B.dMW.prototype={
$0(){var w=this.a
return w.m(new B.dMU(w,this.b))},
$S:0}
B.dMU.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.ava()},
$S:0}
B.dMX.prototype={
$0(){var w=this.a
return w.m(new B.dMT(w))},
$S:0}
B.dMT.prototype={
$0(){var w=this.a;++w.e
w.ava()},
$S:0}
B.dMY.prototype={
$0(){return this.a.aXD(this.b)},
$S:0}
B.dMZ.prototype={
$0(){return this.a.aXD(this.b)},
$S:0}
B.dPR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dPQ(w,d))},
$S:136}
B.dPQ.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dPE.prototype={
$0(){},
$S:0}
B.dPD.prototype={
$0(){var w,v,u=this
switch(u.b){case"drought":w=u.a
v=w.f
w.f=C.a([v[0]*0.2,v[1],v[2]],x.n)
break
case"disease":w=u.a
v=w.f
w.f=C.a([v[0],v[1]*0.3,v[2]],x.n)
break
case"foxes":w=u.a
v=w.f
w.f=C.a([v[0],v[1],v[2]+12],x.n)
break
case"rabbits":w=u.a
v=w.f
w.f=C.a([v[0],v[1]+40,v[2]],x.n)
break}},
$S:0}
B.dPF.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a9(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dPJ.prototype={
$1(d){var w=this.a
return w.m(new B.dPI(w,d))},
$S:6}
B.dPI.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dPK.prototype={
$1(d){var w=this.a
return w.m(new B.dPH(w,d))},
$S:6}
B.dPH.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dPL.prototype={
$1(d){var w=this.a
return w.m(new B.dPG(w,d))},
$S:6}
B.dPG.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dPM.prototype={
$0(){return this.a.a9C("drought")},
$S:0}
B.dPN.prototype={
$0(){return this.a.a9C("disease")},
$S:0}
B.dPO.prototype={
$0(){return this.a.a9C("foxes")},
$S:0}
B.dPP.prototype={
$0(){return this.a.a9C("rabbits")},
$S:0}
B.d2h.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eJ()
k.dB(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.F(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.kq(new C.ep(e,l,l,A.cO,l,l,l,l,l,l,new C.G(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.cc,new C.jo(1),l,l,l,l,A.ca,l)
n.eH()
n.a5(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1842}
B.d2j.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.W()
v=C.a([],x.v)
u=new C.aO(w.r,A.ap,null,null,v)
for(w=this.b,t=w.a,s=w.c-t,r=w.d,w=r-w.b,q=0;q<l.length;++q){p=t+s*q/159
o=r-w*A.k.D(l[q][d]/e,0,1)
if(q===0){n=new C.b5(p,o)
v.push(n)
m=u.f
if(m!=null)n.bx(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ap(p,o)
v.push(n)
m=u.f
if(m!=null)n.bx(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.W()
l=C.M()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fz
this.c.aP(u,l)},
$S:1843}
B.d2i.prototype={
$3(d,e,f){var w=null,v=C.i1(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.cc,w,A.eh,A.ca)
v.eH()
v.a5(this.a,new C.u(f,this.b.b+2))},
$S:1844}
B.bEK.prototype={
$2(d,e){return d+e.a*e.b},
$S:1845}
B.fmm.prototype={
$2(d,e){return e.a-d.a},
$S:1846}
B.dAq.prototype={
$2(d,e){return d+e},
$S:78}
B.dAD.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dAC(v,A.k.D((v.gvE()-w[v.e].guI())/Math.max(w[v.e].guI(),8),-1,1)*0.32,u))},
$S:8}
B.dAC.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dAE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dAB(w,d))},
$S:136}
B.dAB.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.r.v(0,w)},
$S:0}
B.dAr.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.F(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dAw.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1847}
B.dAx.prototype={
$0(){var w=this.a
return w.m(new B.dAv(w))},
$S:0}
B.dAv.prototype={
$0(){var w=this.a;++w.e
A.d.fZ(w.f,0,5,0)},
$S:0}
B.dAy.prototype={
$2(d,e){var w=null,v=this.a
return C.aE(A.c3,C.b3(w,w,w,new B.b8v(v.w,this.b.a,v.f,v.gvE()===v.d[v.e].guI(),w),A.f0),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dAu(v,e),w,w,w,!1,A.a8)},
$S:35}
B.dAu.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cvV(v-1)},
$S:51}
B.dAz.prototype={
$0(){var w=this.a
return w.m(new B.dAt(w,this.b))},
$S:0}
B.dAt.prototype={
$0(){var w=this.a
w.e=this.b
A.d.fZ(w.f,0,5,0)},
$S:0}
B.dAA.prototype={
$0(){var w=this.a
return w.m(new B.dAs(w))},
$S:0}
B.dAs.prototype={
$0(){return A.d.fZ(this.a.f,0,5,0)},
$S:0}
B.cCk.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bA(C.cm(new C.u(d,s),20,w),A.rq)
$.W()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.er(r),p)
p.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.2
q.r=A.dB.gp(0)
p=q.H()
u.drawRRect(C.er(r),p)
p.delete()
B.fln(v,"1",new C.u(d,s),A.bh,11)}},
$S:1848}
B.dTU.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dTT(w,v))},
$S:8}
B.dTT.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dTV.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dTS(w,d))},
$S:136}
B.dTS.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.w.v(0,w)},
$S:0}
B.dTK.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dTO.prototype={
$0(){var w=this.a
return w.m(new B.dTN(w))},
$S:0}
B.dTN.prototype={
$0(){return this.a.r++},
$S:0}
B.dTP.prototype={
$0(){var w=this.a
return w.m(new B.dTM(w,this.b))},
$S:0}
B.dTM.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dTQ.prototype={
$1(d){var w=this.a
return w.m(new B.dTL(w,d))},
$S:6}
B.dTL.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dTR.prototype={
$1(d){return this.a.c4t(this.b,d)},
$S:6}
B.da2.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bOc(d,e,f,g),m=this.b
$.W()
w=C.M()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.saq(new C.bS(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).av(0,C.bT(d,e+6)))
m.aP(n,w)
w=C.M()
w.b=A.ae
w.c=1.5
w.r=A.aX.gp(0)
m.aP(n,w)
w=C.M()
w.r=A.w.j(0.28).gp(0)
m.af(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.hI.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.M()
w.r=A.aL.gp(0)
m.af(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1849}
B.da3.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fln(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1850}
B.dEC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dEB(w,d))},
$S:136}
B.dEB.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dEk.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jE(90-(w-65)):d},
$S:14}
B.dEt.prototype={
$1(d){return this.a.m(new B.dEs())},
$S:2}
B.dEs.prototype={
$0(){},
$S:0}
B.dEu.prototype={
$1(d){return this.a.m(new B.dEr())},
$S:2}
B.dEr.prototype={
$0(){},
$S:0}
B.dEv.prototype={
$0(){var w=this.a
return w.m(new B.dEq(w))},
$S:0}
B.dEq.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aWk()},
$S:0}
B.dEw.prototype={
$0(){var w=this.a
return w.m(new B.dEp(w))},
$S:0}
B.dEp.prototype={
$0(){return this.a.f=0},
$S:0}
B.dEx.prototype={
$0(){var w=this.a
return w.m(new B.dEo(w))},
$S:0}
B.dEo.prototype={
$0(){return this.a.f=1},
$S:0}
B.dEy.prototype={
$0(){var w=this.a
return w.m(new B.dEn(w,this.b))},
$S:0}
B.dEn.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dEz.prototype={
$1(d){var w=this.a
return w.m(new B.dEm(w,d))},
$S:6}
B.dEm.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dEA.prototype={
$1(d){var w=this.a
w.m(new B.dEl(w,d))
if(w.ga8U()&&w.Q.K(0,w.x)){B.vM("zap",9,220,0.45)
w=w.Q
w=C.B(w,C.a3(w).k("co.E"))
B.vJ("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dEl.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bKE.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bKP.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bKK.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bKQ.prototype={
$1(d){return this.a.Lg(d)&&!d.x},
$S:z+1}
B.bKR.prototype={
$2(d,e){return Math.max(d,this.a.azn(e))},
$S:z+6}
B.bKT.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bKU(w))},
$S:z+5}
B.bKU.prototype={
$0(){return this.a.a},
$S:109}
B.bKS.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:76}
B.bKV.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bKW(w))},
$S:z+5}
B.bKW.prototype={
$0(){return this.a.a},
$S:109}
B.bKG.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bKH(w))},
$S:z+5}
B.bKH.prototype={
$0(){return this.a.a},
$S:109}
B.bKF.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:76}
B.bKI.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bKJ(w))},
$S:z+5}
B.bKJ.prototype={
$0(){return this.a.a},
$S:109}
B.bKD.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bKX.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bKL.prototype={
$1(d){return d!==this.b&&this.a.aFq(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bKO.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bKN.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bKM.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bFW.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bFX.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.cjh.prototype={
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
$S:192}
B.fCU.prototype={
$1(d){var w
$.W()
w=C.M()
w.r=d.gp(0)
return w},
$S:1851}
B.fCW.prototype={
$2(d,e){var w
$.W()
w=C.M()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bO
return w},
$S:1852}
B.fCX.prototype={
$5(d,e,f,g,h){return C.bA(new C.a9(d,e,d+f,e+g),new C.aW(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1853}
B.fCV.prototype={
$3(d,e,f){var w
$.W()
w=C.M()
w.saq(new C.a8(A.b0,A.b6,A.x,C.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1854}
B.bFA.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bFB.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bFz(w))},
$S:0}
B.bFz.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bFC.prototype={
$0(){return C.a([],x.ey)},
$S:1855}
B.bFD.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:389}
B.bFE.prototype={
$0(){var w,v,u
J.bCO(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.C8(v))if(B.fVK(v.b))w.aZD(v)
else w.ZO(v)
else{u=w.a.c.bb7(v)
w.ad2(u==null?"The "+$.q7().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bFy.prototype={
$1(d){return new C.e0(new B.bFw(this.a,this.b),null)},
$S:20}
B.bFw.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bFx(this.a,v,e),t=$.q7(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kZ,w,w,w),q=C.aH(w,w,w,w,D.bFm,w,w,w,new B.bFs(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bn(!0,new C.C(A.xs,C.v(C.a([r,A.at,D.fvi,A.S,C.A(C.a([q,C.E(C.kW(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bLW,w,w,w,new B.bFt(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.A(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b5,C.bK(!1,D.f9w,w,w,!0,w,w,new B.bFu(u),w,w),C.bK(!1,A.zs,w,w,!0,w,w,new B.bFv(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:84}
B.bFx.prototype={
$1(d){var w=this.a
w.m(new B.bFq(this.b,d))
this.c.$1(new B.bFr())
w.a.toString},
$S:6}
B.bFq.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bFr.prototype={
$0(){},
$S:0}
B.bFs.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bFt.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bFu.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bFv.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.bFT.prototype={
$2(d,e){var w
if(d==="short"){E.dF(1800,"",120,0,0.55,"noise")
E.dF(200,"",160,2.2,0.4,"saw")
C.fK()
w=this.a
if(w.c!=null)w.ad2("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.ad2("\u26a0 Overloaded! The "+$.q7().h(0,e.b).b+" can only give about "+A.k.aa(w.a.c.zq(e),2)+" amps but your gadgets are asking for "+A.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.ad2("Burnt out! "+e.ay)
E.dF(140,"",320,0,0.6,"noise")
E.dF(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bFU.prototype={
$0(){},
$S:0}
B.bF3.prototype={
$0(){},
$S:0}
B.bFV.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bFS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aE(A.c3,C.b3(p,p,p,new B.ahL(w,v,u,t,s,r==null?A.iY:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFM(o),new B.bFN(o),new B.bFO(o),p,p,p,p,p,p,p,p,p,p,new B.bFP(o),p,p,p,!1,A.a8)],q)
if(o.a.c.a.length===0)n.push(D.b39)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.ct,A.q,1)
n.push(C.ao(p,C.aE(p,C.p(p,C.A(C.a([D.f7O,C.E(C.d(w,p,p,p,p,p,p,D.f05,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b8r,p,u,v,p,p,A.n),p,p,p,p,A.nS,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFQ(o),p,p,p,p,p,p,!1,A.a8),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aXI(C.A(C.a([D.bwl,new B.fg(A.FF,"Cut wire",new B.bFR(o),A.cg,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cea(w),p,p,10,10,p,p))}return C.jt(new C.an(A.W,p,A.b_,A.r,n,p),A.r,p)},
$S:418}
B.bFN.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b5u(s)
if(r!=null){t.m(new B.bFK(t,r,d))
return}w=t.b_j(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bFL(t,w))}},
$S:42}
B.bFK.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bFL.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bFO.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bFI(w,d))
else if(w.w!=null)w.m(new B.bFJ(w,d.b.ad(0,w.x)))},
$S:18}
B.bFI.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bFJ.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bFM.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b5u(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ajF(u.a,u.b,v.a,v.b)!=null)E.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.ad0()},
$S:37}
B.bFP.prototype={
$1(d){var w=this.a,v=d.b,u=w.b_j(v)
if(u!=null){w.m(new B.bFG(w,u))
if(D.lS.ai(0,u.b))w.coy(u)
w.a.toString
return}w.m(new B.bFH(w,w.cAQ(v)))},
$S:51}
B.bFG.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dF(200,"",70,0,0.2,"saw")}},
$S:0}
B.bFH.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bFQ.prototype={
$0(){var w=this.a
return w.m(new B.bFF(w))},
$S:0}
B.bFF.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bFR.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dF(300,"",50,0,0.35,"noise")
w.ad0()},
$S:0}
B.bF4.prototype={
$0(){return this.a.bn2(this.b)},
$S:0}
B.bFn.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.A(C.a([C.d(d,w,w,w,w,w,w,D.eVJ,w,w,w),C.E(C.kW(this.b.d,w,w,g,h,new B.bFp(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1856}
B.bFp.prototype={
$1(d){var w=this.a
w.m(new B.bFo(this.b,d))
w.a.toString},
$S:6}
B.bFo.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bFa.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dF(260,"",70,0,0.35,"noise")
w.ad0()},
$S:0}
B.bFb.prototype={
$0(){var w=this.a
return w.m(new B.bF9(w))},
$S:0}
B.bF9.prototype={
$0(){return this.a.d=null},
$S:0}
B.bFc.prototype={
$0(){this.a.m(new B.bF8(this.b,this.c))
E.dF(900,"",40,0,0.3,"noise")},
$S:0}
B.bF8.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bFf.prototype={
$0(){return this.a.aZD(this.b)},
$S:0}
B.bFg.prototype={
$0(){return this.a.ZO(this.b)},
$S:0}
B.bFh.prototype={
$0(){return this.a.a0s(this.b)},
$S:0}
B.bFi.prototype={
$0(){var w=this.a
w.m(new B.bF7(this.b,this.c))
w.a.toString},
$S:0}
B.bF7.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bFj.prototype={
$0(){var w=this.a
w.m(new B.bF6(this.b,this.c))
w.a.toString},
$S:0}
B.bF6.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bFk.prototype={
$0(){var w=this.a
w.m(new B.bF5(this.b,this.c))
w.a.toString},
$S:0}
B.bF5.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bFl.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFm.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFd.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFe.prototype={
$1(d){return this.a.f=d},
$S:6}
B.fcn.prototype={
$1(d){return d.aF4("bulb")},
$S:z+2}
B.fco.prototype={
$1(d){return d.pz(0,"switch")&&d.aF4("bulb")},
$S:z+2}
B.fcp.prototype={
$1(d){return A.d.b7(d.a,new B.fca())},
$S:z+2}
B.fca.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fcq.prototype={
$1(d){return d.pz(0,"resistor")&&A.d.b7(d.a,new B.fc9())},
$S:z+2}
B.fc9.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.fcr.prototype={
$1(d){return!d.pz(0,"battery")&&d.aF4("bulb")},
$S:z+2}
B.fce.prototype={
$1(d){return A.d.b7(d.a,new B.fc8())},
$S:z+2}
B.fc8.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fcf.prototype={
$1(d){return A.d.b7(d.a,new B.fc7())},
$S:z+2}
B.fc7.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fcg.prototype={
$1(d){return A.d.b7(d.a,new B.fc6())},
$S:z+2}
B.fc6.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.fch.prototype={
$1(d){var w=d.a
return A.d.b7(w,new B.fc4())&&A.d.b7(w,new B.fc5())&&d.pz(0,"buck")},
$S:z+2}
B.fc4.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fc5.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fci.prototype={
$1(d){var w=d.a
return A.d.b7(w,new B.fc2())&&A.d.b7(w,new B.fc3())},
$S:z+2}
B.fc2.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.fc3.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fcj.prototype={
$1(d){return A.d.b7(d.a,new B.fc1())},
$S:z+2}
B.fc1.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dPZ.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a9(0)
w.v(0,v.b)},
$S:0}
B.dQ7.prototype={
$1(d){var w=this.a.d
return w.aFq(d)&&w.C8(d)},
$S:z+1}
B.dQ8.prototype={
$1(d){return d.x},
$S:z+1}
B.dQ9.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dQa.prototype={
$0(){},
$S:0}
B.dPY.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.foh,A.at,D.f9s,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.Ps[v]
t=A.c.j(0.06)
s=new C.aW(14,14)
r=new C.aA(A.bF,1,A.q,-1)
n.push(C.aE(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.kv,q,q,q,q,q,q,q,q,q),A.bB,new C.x(u.b,q,D.f0P,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bP(r,r,r,r),new C.bq(s,s,s,s),q,q,A.n),q,q,q,A.cH,A.bj,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dPX(w,d,u),q,q,q,q,q,q,!1,A.a8))}return C.eH(q,F.mb,new C.C(A.bV,new C.a7(340,q,C.cB(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d0,q,new C.b7(p,A.Y),q)},
$S:46}
B.dPX.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new B.dPW(w,this.c))
E.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dPW.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bgg()},
$S:0}
B.dPU.prototype={
$1(d){return new B.UL(this.a.d,null)},
$S:z+67}
B.dPV.prototype={
$0(){},
$S:0}
B.dQ6.prototype={
$1(d){return new C.e0(new B.dQ5(this.a),null)},
$S:20}
B.dQ5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.agW(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b4:A.aS
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.A(C.a([D.flH,A.b5,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.O,C.bw(C.m(4),C.m_(A.bF,m,m,5,m,w.a/11,new C.lT(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fct)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ah.T0,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.D5,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.at,q,new C.bH(A.a7,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dQ3(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bj,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aW(12,12)
n=new C.aA(o===l.f?f.j(0.6):A.dp,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.az:A.c
u.push(C.aE(m,C.p(m,new C.cn(A.aO,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a74,m,m,m,m,m,m,m,m,m),A.av,new C.bD(1,A.bi,new C.x(r.a,m,new C.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bP(n,n,n,n),new C.bq(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.nS,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dQ4(l,o,e),m,m,m,m,m,m,!1,A.a8))}return C.bn(!0,new C.cV(new C.aY(0,1/0,0,k.a.b*0.75),C.cB(u,m,A5.AR,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:84}
B.dQ3.prototype={
$0(){var w=this.a
w.m(new B.dQ1(w))
this.b.$1(new B.dQ2())
w.EA()},
$S:0}
B.dQ1.prototype={
$0(){var w=this.a
$.agW()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dQ2.prototype={
$0(){},
$S:0}
B.dQ4.prototype={
$0(){var w=this.a
w.m(new B.dQ_(w,this.b))
this.c.$1(new B.dQ0())
w.EA()},
$S:0}
B.dQ_.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dQ0.prototype={
$0(){},
$S:0}
B.dQc.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
B.dQd.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.m9("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a6(t.b,!1).c8(C.e8(new B.dQb(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dQb.prototype={
$1(d){C.ll("construction")
return Am.hxH()},
$S:z+68}
B.dQe.prototype={
$0(){return B.hjQ(this.a,"ELECTRONICS LAB",this.b,A.aS)},
$S:0}
B.dQf.prototype={
$0(){var w=this.a
return w.m(w.d.gcRV())},
$S:0}
B.dQg.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grn(v))
w.EA()},
$S:0}
B.czS.prototype={
$2(d,e){var w=null,v=this.a.gavU().x
v===$&&C.c()
return C.b3(w,w,w,new B.b7D(v,w),A.au)},
$S:67}
B.czR.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ap,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new C.b5(v,t))
w.E(new C.cS(v,u,v+e,u))
w.E(new C.cS(v,u,v,u+e))
w.E(new C.cS(v,u,v-e,u))
w.E(new C.cS(v,u,v,t))
w.E(new C.bF())
t=C.M()
t.r=A.c.j(f).gp(0)
this.a.aP(w,t)},
$S:668}
B.fHt.prototype={
$3(d,e,f){return new B.U1(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fHu.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cY(e,!1,C.ij(A.A,g,null,new C.bf(C.cJ(A.cs,e,null),new C.bo(0.85,1,w),w.k("bf<bI.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
B.dLV.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
B.dLU.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bW3(o):q.byX(o,p),m=x.p
p=C.a([C.qa(new C.nb(n,new C.cx(p,x.aC)),A.pB,C.rI(),A.bc,A.bc,new B.dLS())],m)
n=t.d
if(n){w=A.k.F(q.gRh(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.av],m)
if(w)m.push(D.bw7)
else m.push(A.b5)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b4:A.aB,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.av)
p.push(C.ao(s,C.av(C.dh(s,C.A(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ev,new C.o(A.w,s,s,u,s,s,A.n),A.n1,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.un)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.JN,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.w1)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.JN,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aE(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dLT(q),s,s,s,s,s,s,!1,A.a8),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b_,A.r,p,s),A.aq)},
$S:326}
B.dLS.prototype={
$2(d,e){var w=x.Y
return new C.cY(e,!1,C.ij(A.A,d,null,new C.bf(e,new C.bo(0.92,1,w),w.k("bf<bI.T>"))),null)},
$S:344}
B.dLT.prototype={
$0(){var w=this.a
return w.m(new B.dLR(w))},
$S:0}
B.dLR.prototype={
$0(){return this.a.e=null},
$S:0}
B.dLQ.prototype={
$0(){var w=this.a
return w.m(new B.dLP(w,this.b))},
$S:0}
B.dLP.prototype={
$0(){return this.a.e=A.d.cJ(F.k_,this.b)},
$S:0}
B.dLO.prototype={
$0(){var w=this.a
return w.m(new B.dLN(w))},
$S:0}
B.dLN.prototype={
$0(){return this.a.e=0},
$S:0}
B.dLJ.prototype={
$0(){var w=this.a
return w.m(new B.dLI(w))},
$S:0}
B.dLI.prototype={
$0(){return this.a.e=null},
$S:0}
B.dLM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.A(C.a([D.ftN,A.av,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eC,p,p,p,D.f6J,p,p,p),1),C.d(A.a.aT(A.o.u(C.di(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aT(A.o.u(C.fY(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qf,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.lb,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.btF(w.gRh(),this.c.d,p),A.au)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b2,A.q,1)
s=C.m(10)
o=C.p(p,C.A(C.a([C.aE(p,C.p(p,p,A.f,p,p,A.a9Z,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dLL(w),p,p,p,p,p,p,!1,A.a8),A.eb,C.p(p,p,A.f,p,p,A.aa4,p,12,p,p,p,p,p,12),A.eb,C.p(p,p,A.f,p,p,D.aZB,p,12,p,p,p,p,p,12),A.av,C.E(C.d(F.k_[o].a,p,1,A.a2,p,p,p,A.a6V,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cC,p,p,p,24,p,p,A.fo,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.C(D.bsW,C.p(p,C.bw(s,C.v(C.a([o,C.E(C.b3(p,p,p,new B.adL(r,w.gRh(),p),A.f0),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.daY,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b2,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.C(A.jf,w.atT(F.k_[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.A(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.ld,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.v(C.a([m,C.E(new C.an(A.W,p,A.b_,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,R.KS,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:326}
B.dLL.prototype={
$0(){var w=this.a
return w.m(new B.dLK(w))},
$S:0}
B.dLK.prototype={
$0(){return this.a.e=null},
$S:0}
B.e6J.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e6I(w,d))},
$S:136}
B.e6I.prototype={
$0(){var w=this.a,v=this.b,u=J.a5(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.fVQ(v)},
$S:0}
B.e6K.prototype={
$0(){},
$S:0}
B.e6z.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fVQ(v)
w.r.a9(0)
w.x=!1},
$S:0}
B.e6A.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvd().r){C.jM()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vM("click",s.c+s.d,60,0.4)
if(B.hjZ(r.gvd(),q).b.a===r.gvd().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vJ("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.Bj("bell",D.ao0,700,0.45)
for(q=r.gvd().c,q=C.ec(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.y(new C.u((A.o.F(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e6D.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.at(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aE(A.c3,C.b3(s,s,s,new B.bfE(r.gvd(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e6B(r),s,s,s,!1,A.a8),C.ao(s,C.e1(C.A(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aON,s,s,s),C.d(""+u.a+"/"+r.gvd().c.a+" \u2605   mirrors "+w.a+"/"+r.gvd().r,s,s,s,s,s,s,V.a6G,s,s,s)],t),A.m,s,A.hB,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fgF("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b4,C.a([new B.fg(A.iU,"Next level",new B.e6C(r),A.b4,s)],t)))
return new C.an(A.W,s,A.b_,A.r,w,s)},
$S:63}
B.e6B.prototype={
$1(d){return this.a.c4P(d.b)},
$S:51}
B.e6C.prototype={
$0(){var w=this.a
return w.ad6(w.d+1)},
$S:0}
B.e6E.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grn(v))},
$S:0}
B.e6F.prototype={
$0(){var w=this.a
return w.ad6(w.d+1)},
$S:0}
B.e6G.prototype={
$0(){var w=this.a
return w.ad6(w.d-1)},
$S:0}
B.e6H.prototype={
$0(){return this.a.ad6(this.b)},
$S:0}
B.df7.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.F(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:724}
B.dfa.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.M()
u.r=(f?A.hh:A.aL).gp(0)
u.c=7
u.d=A.bO
r.bA(w,v,u)
w=t.ad(0,q)
v=t.ad(0,p)
u=C.M()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bO
r.bA(w,v,u)},
$S:1858}
B.df8.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:461}
B.df9.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:461}
B.e71.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e70(w,d))},
$S:136}
B.e70.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e72.prototype={
$0(){},
$S:0}
B.e6N.prototype={
$1(d){return d===0},
$S:117}
B.e6W.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a6P,s,s,s)
w=r.z==="play"?A.k.dw(r.y):20
v=x.p
w=C.A(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cg:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,V.a6G,s,s,s)],v),A.m,s,A.hB,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dp:p
t=C.m(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b2,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.C(D.bqg,w,s),C.E(C.A(C.a([C.E(new C.C(A.bS,C.v(C.a([t,A.an,C.d(q?"TARGET":"TARGET: "+r.gcvY(),s,s,s,s,s,s,D.aPB,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.C(A.bS,C.v(C.a([C.E(C.b3(s,s,s,new B.bfT(r.f,s),A.f0),1),A.an,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aPB,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fgF("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fg(A.iV,"Start",new B.e6T(r),A.b4,s)],v)))}if(r.z==="result")w.push(B.fgF(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fg(A.iU,"Next colour",new B.e6U(r),A.b4,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fgF("Finished! "+q,u,A.b4,C.a([new B.fg(A.mo,"Play again",new B.e6V(r),A.b4,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:63}
B.e6T.prototype={
$0(){var w=this.a
return w.m(new B.e6P(w))},
$S:0}
B.e6P.prototype={
$0(){var w=this.a
w.w=w.r=0
w.avY()},
$S:0}
B.e6U.prototype={
$0(){var w=this.a
return w.m(w.gc4N())},
$S:0}
B.e6V.prototype={
$0(){var w=this.a
return w.m(new B.e6O(w))},
$S:0}
B.e6O.prototype={
$0(){var w=this.a
w.w=w.r=0
w.avY()},
$S:0}
B.e6X.prototype={
$1(d){var w=this.a
return w.m(new B.e6S(w,d))},
$S:6}
B.e6S.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e6Y.prototype={
$1(d){var w=this.a
return w.m(new B.e6R(w,d))},
$S:6}
B.e6R.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e6Z.prototype={
$1(d){var w=this.a
return w.m(new B.e6Q(w,d))},
$S:6}
B.e6Q.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e7_.prototype={
$0(){var w=this.a
return w.m(w.gc4O())},
$S:0}
B.fd4.prototype={
$0(){return D.dXg},
$S:z+70}
B.fd5.prototype={
$0(){return D.duv},
$S:z+71}
B.fd6.prototype={
$0(){return D.dr2},
$S:z+72}
B.fd7.prototype={
$0(){return D.dtW},
$S:z+73}
B.fd8.prototype={
$0(){return D.dyR},
$S:z+74}
B.fd9.prototype={
$0(){return D.dT_},
$S:z+75}
B.fda.prototype={
$0(){return D.dVb},
$S:z+76}
B.fdb.prototype={
$0(){return D.dya},
$S:z+77}
B.cdU.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
B.cdV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hnq(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aW(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dk,16)],t)
n=A.c.j(0.85)
j.push(C.aE(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.x(r.c,m,M.T_,m,m,m,m,m,m,m,m,m),m),new C.bH(A.lu,m,m,C.v(C.a([new C.x(r.a,m,D.f5k,m,m,m,m,m,m,m,m,m),A.cX,new C.x(r.b,m,new C.G(!0,n,m,m,m,m,12,A.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bq(q,q,q,q),p,new C.a8(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bC,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cdT(d,r),m,m,m,m,m,m,!1,A.a8))}return C.bY(A.bz,j,A.br,14,14)},
$S:171}
B.cdT.prototype={
$0(){return C.a6(this.a,!1).c8(C.e8(new B.cdS(this.b),!1,null,x.H))},
$S:0}
B.cdS.prototype={
$1(d){return this.a.f.$0()},
$S:39}
B.eFV.prototype={
$0(){var w=this.a
return w.w=w.d[w.b2J(w.f)]},
$S:0}
B.eFR.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cI.aj()*7},
$S:0}
B.eFQ.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bO(0,A.c4)
w.w=""},
$S:0}
B.eFT.prototype={
$0(){var w=this.a
return w.m(new B.eFS(w,this.b))},
$S:0}
B.eFS.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
B.eFU.prototype={
$1(d){return this.a.aY7(0)},
$S:2}
B.dSc.prototype={
$0(){return B.Bj("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dSd.prototype={
$0(){},
$S:0}
B.dS7.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dS9.prototype={
$0(){return this.a.aY9(this.b)},
$S:0}
B.dSa.prototype={
$0(){var w=this.a
return w.m(new B.dS8(w))},
$S:0}
B.dS8.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dSb.prototype={
$0(){var w=this.a
return w.aY9(w.d)},
$S:0}
B.dD2.prototype={
$2(d,e){return d+e},
$S:86}
B.dD3.prototype={
$0(){},
$S:0}
B.dCY.prototype={
$2(d,e){return d+e},
$S:86}
B.dD0.prototype={
$0(){var w=this.a
return w.m(new B.dD_(w,this.b))},
$S:0}
B.dD_.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dD1.prototype={
$0(){var w=this.a
return w.m(new B.dCZ(w))},
$S:0}
B.dCZ.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dPt.prototype={
$0(){return B.qL(this.b,this.a.d,"drawing")},
$S:0}
B.dPu.prototype={
$1(d){var w=this.a
return w.m(new B.dPs(w,d))},
$S:42}
B.dPs.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aGW(u,v,t))},
$S:0}
B.dPv.prototype={
$1(d){var w=this.a
return w.m(new B.dPr(w,d))},
$S:18}
B.dPr.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dPw.prototype={
$1(d){var w=this.a
return w.m(new B.dPq(w,d))},
$S:23}
B.dPq.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aGW(u,v,t))},
$S:0}
B.dPx.prototype={
$0(){var w=this.a
return w.m(new B.dPp(w,this.b))},
$S:0}
B.dPp.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dPy.prototype={
$1(d){var w=this.a
return w.m(new B.dPo(w,d))},
$S:6}
B.dPo.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPz.prototype={
$0(){var w=this.a
return w.m(new B.dPn(w))},
$S:0}
B.dPn.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dPA.prototype={
$0(){var w=this.a
return w.m(new B.dPm(w))},
$S:0}
B.dPm.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dPB.prototype={
$0(){var w=this.a
return w.m(A.d.grn(w.e))},
$S:0}
B.dPC.prototype={
$0(){var w=this.a
return w.m(new B.dPl(w))},
$S:0}
B.dPl.prototype={
$0(){var w=this.a
w.x=D.auQ[A.o.F(A.d.cJ(D.auQ,w.x)+1,4)]},
$S:0}
B.eco.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
B.ecp.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.Bj("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.ecn(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.Bj("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.ecn.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a9(0)},
$S:0}
B.ecq.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.ecm(w))},
$S:11}
B.ecm.prototype={
$0(){var w=this.a
w.f.a9(0)
w.x=!1},
$S:0}
B.ecu.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aE(w,C.mz(new B.ecs(v,e),w,A.bc,A.pB,w,w,new C.bo(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ect(v,e),w,w,w,w,w,w,!1,A.a8)},
$S:75}
B.ect.prototype={
$0(){return this.a.c5K(this.b)},
$S:0}
B.ecs.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dm(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fz(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bUG
if(o)v=q.a.r.t(0,q.b)?A.b4.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b4:A.b2,A.q,1)
if(o){r=C.dm()
r.fz(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fs(A.A,C.d(u[t],p,p,p,p,p,p,D.f2J,p,p,p),p,r,!0)
u=r}else u=D.fn2
return C.fs(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:139}
B.ecv.prototype={
$0(){var w=this.a
return w.m(new B.ecr(w,this.b))},
$S:0}
B.ecr.prototype={
$0(){var w=this.a
w.d=this.b.a
w.ard()},
$S:0}
B.ecw.prototype={
$0(){var w=this.a
return w.m(w.gbHx())},
$S:0}
B.emV.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.emW.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.emT.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.emU.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.emS(w))},
$S:11}
B.emS.prototype={
$0(){return this.a.f=-1},
$S:0}
B.emX.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.emY.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.emZ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aY8()},
$S:11}
B.en_.prototype={
$0(){return this.a.c5Q(this.b)},
$S:0}
B.eBc.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:70}
B.eBl.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(A.kI,C.A(C.a([v,A.ab,new C.dq(1,A.cl,C.f3(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.eg),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1860}
B.eBh.prototype={
$1(d){return this.a.m(new B.eBg())},
$S:2}
B.eBg.prototype={
$0(){},
$S:0}
B.eBi.prototype={
$0(){var w=this.a
return w.m(new B.eBf(w,this.b))},
$S:0}
B.eBf.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eBj.prototype={
$1(d){var w=this.a
return w.m(new B.eBe(w,d))},
$S:6}
B.eBe.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eBk.prototype={
$0(){var w=this.a
return w.m(new B.eBd(w))},
$S:0}
B.eBd.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.eb3.prototype={
$0(){},
$S:0}
B.eb4.prototype={
$0(){},
$S:0}
B.eaX.prototype={
$0(){var w=this.a
return w.m(new B.eaW(w))},
$S:0}
B.eaW.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a7v("hat",0.6)},
$S:0}
B.eaY.prototype={
$0(){var w=this.a
return w.m(new B.eaV(w))},
$S:0}
B.eaV.prototype={
$0(){this.a.y=1.1
B.lf("bell",36,200,0.4)},
$S:0}
B.eaZ.prototype={
$0(){var w=this.a
return w.m(new B.eaU(w))},
$S:0}
B.eaU.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aB(Math.max(v,u)-t+1)
w.as=u
B.lf("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
B.eb_.prototype={
$0(){var w=this.a
return w.m(new B.eaT(w,this.b))},
$S:0}
B.eaT.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.eb0.prototype={
$1(d){var w=this.a
return w.m(new B.eaS(w,d))},
$S:6}
B.eaS.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.eb1.prototype={
$1(d){var w=this.a
return w.m(new B.eaR(w,d))},
$S:6}
B.eaR.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.eb2.prototype={
$1(d){var w=this.a
return w.m(new B.eaQ(w,d))},
$S:6}
B.eaQ.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.cqL.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
B.cqM.prototype={
$0(){var w=this.a
return B.hjQ(this.b,w.c,w.e,w.d)},
$S:0}
B.fLj.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eWf,v,v,v)
return C.ej(C.a([C.bK(!1,D.fcy,v,v,!0,v,v,new B.fLi(d),v,v)],x.p),v,v,F.mY,w,v,v,v,new C.b7(u,new C.aA(s,1,A.q,-1)),t,v)},
$S:19}
B.fLi.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.cqH.prototype={
$0(){C.eT()
this.a.e.$0()},
$S:0}
B.cqG.prototype={
$0(){C.eT()
this.a.e.$0()},
$S:0}
B.cqN.prototype={
$0(){C.eT()
this.a.e.$0()},
$S:0}
B.cqI.prototype={
$0(){var w=this.a
A.d.W(w.fl$,this.b.bf())
if(w.c!=null)this.c.$0()},
$S:0}
B.cqK.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.kX$.a)/1e6,0,0.04)
w.kX$=d
w.fQ$=A.o.an(v,1000)
w.lr(u)
if(w.c!=null)w.m(new B.cqJ())},
$S:8}
B.cqJ.prototype={
$0(){},
$S:0}
B.cdQ.prototype={
$0(){var w=this
return B.lf(w.a,w.b,w.c,w.d)},
$S:1}
B.dUV.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dUU(w,d))},
$S:z+79}
B.dUU.prototype={
$0(){return this.a.cqe(this.b)},
$S:0}
B.dUn.prototype={
$0(){var w,v,u,t=this.a,s=J.a5(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:704}
B.dUl.prototype={
$0(){return this.a.id=D.a28},
$S:0}
B.dUm.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a2<1>")
v=C.p7(new C.a2(w,new B.dUk(this.c),v),6,v.k("J.E"))
w=C.B(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dUk.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dUj.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ah)
return C.ej(C.a([C.bK(!1,A.qg,w,w,!0,w,w,new B.dUi(d),w,w)],x.p),w,w,F.mY,v,w,w,w,w,D.fn6,w)},
$S:19}
B.dUi.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.dUG.prototype={
$0(){return B.qL(this.b,this.a.d,"earth")},
$S:0}
B.dUH.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVu()
r=p.z
o=C.a([C.aE(A.c3,C.b3(q,q,q,new B.be4(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dUu(p),new B.dUv(p),new B.dUw(p),q,q,q,q,q,q,q,new B.dUx(p),q,q,q,!1,A.a8)],x.p)
if(p.r==null)o.push(Ab.aaH)
w=this.b
if(w!=null)o.push(C.ao(8,p.c6r(w),q,q,10,10,q,q))
return new C.ev(new C.an(A.W,q,A.b_,A.r,o,q),p.d)},
$S:196}
B.dUv.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:255}
B.dUw.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVu()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:207}
B.dUu.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVu()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:727}
B.dUx.prototype={
$1(d){var w=this.a,v=w.c6u(d.b)
if(v!=null)w.m(new B.dUo(w,v))
else w.m(new B.dUp(w))},
$S:51}
B.dUo.prototype={
$0(){return this.a.awr(this.b)},
$S:0}
B.dUp.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dUI.prototype={
$0(){var w=this.a
w.e.bO(0,A.c4)
w.m(new B.dUt(w,this.b))},
$S:0}
B.dUt.prototype={
$0(){var w=this.a
w.id=D.a28
w.awr(this.b)},
$S:0}
B.dUM.prototype={
$0(){var w=this.a
return w.m(new B.dUF(w))},
$S:0}
B.dUF.prototype={
$0(){var w=this.a
w.fx=null
w.asn(15,w.y,1)},
$S:0}
B.dUN.prototype={
$0(){var w=this.a
return w.m(new B.dUE(w,this.b))},
$S:0}
B.dUE.prototype={
$0(){var w=this.b.b
return this.a.asn(w.a,w.b,w.c)},
$S:0}
B.dUO.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dUD(w,v))},
$S:0}
B.dUD.prototype={
$0(){var w=this.b.a
return this.a.awr(w[A.cI.aB(w.length)])},
$S:0}
B.dUP.prototype={
$1(d){var w=this.a
return w.m(new B.dUC(w,d))},
$S:6}
B.dUC.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dUQ.prototype={
$1(d){var w=this.a
return w.m(new B.dUB(w,d))},
$S:6}
B.dUB.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dUR.prototype={
$1(d){var w=this.a
return w.m(new B.dUA(w,d))},
$S:6}
B.dUA.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dUS.prototype={
$0(){var w=this.a
return w.m(new B.dUz(w))},
$S:0}
B.dUz.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dUT.prototype={
$0(){var w=this.a
return w.m(new B.dUy(w))},
$S:0}
B.dUy.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dUJ.prototype={
$0(){var w=this.a
return w.m(new B.dUs(w))},
$S:0}
B.dUs.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dUK.prototype={
$0(){var w=this.a
return w.m(new B.dUr(w))},
$S:0}
B.dUr.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dUL.prototype={
$0(){var w=this.a
return w.m(new B.dUq(w))},
$S:0}
B.dUq.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dUh.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOd,w,w,w),A.uq,C.d(e,w,2,A.a2,w,w,w,A.Tk,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:130}
B.dUg.prototype={
$0(){var w=this.a
return w.m(new B.dUf(w))},
$S:0}
B.dUf.prototype={
$0(){return this.a.fx=null},
$S:0}
B.daS.prototype={
$0(){var w=null,v=C.i1(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.cVP,w,w),this.a),A.a4,A.cc,w,A.eh,A.ca)
v.eH()
return v},
$S:342}
B.daT.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1861}
B.fcY.prototype={
$0(){return D.dws},
$S:z+81}
B.fcZ.prototype={
$0(){return D.dUU},
$S:z+82}
B.fd_.prototype={
$0(){return D.dwu},
$S:z+83}
B.fd0.prototype={
$0(){return D.dqP},
$S:z+84}
B.fd1.prototype={
$0(){return D.dwq},
$S:z+85}
B.fd2.prototype={
$0(){return D.dT0},
$S:z+86}
B.fd3.prototype={
$0(){return D.dSZ},
$S:z+87}
B.eC5.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
B.eC6.prototype={
$0(){var w=this.a
return w.m(new B.eC4(w))},
$S:0}
B.eC4.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaR3()+1,16)},
$S:0}
B.eC7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hnp(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aW(18,18)
q=s.d
p=new C.aA(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bg9],u)
k.push(C.aE(n,C.p(n,C.v(C.a([C.X(s.c,q,n,n,n,30),A.O,new C.x(s.a,n,D.f_G,n,A.L,n,n,n,n,2,n,n),A.cX,new C.x(s.b,n,D.f4J,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.bb,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bP(p,p,p,p),new C.bq(r,r,r,r),n,new C.a8(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cm,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eC3(d,s),n,n,n,n,n,n,!1,A.a8))}return C.bY(A.fQ,k,A.br,10,10)},
$S:171}
B.eC3.prototype={
$0(){return C.a6(this.a,!1).c8(C.e8(new B.eC2(this.b),!1,null,x.H))},
$S:0}
B.eC2.prototype={
$1(d){return this.a.e.$0()},
$S:39}
B.eu8.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.euj.prototype={
$0(){return B.qL(this.b,this.a.d,"solar-system")},
$S:0}
B.euk.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.at(e.b,e.d)
u.ch=t
t=C.a([C.aE(A.c3,C.b3(v,v,v,new B.bqt(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eug(u),new B.euh(u),v,v,v,v,v,v,v,new B.eui(u),v,v,v,!1,A.a8)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c6w(w),v,v,10,10,v,v))
return new C.ev(new C.an(A.W,v,A.b_,A.r,t,v),u.d)},
$S:196}
B.eug.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:255}
B.euh.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:207}
B.eui.prototype={
$1(d){var w=this.a,v=w.c6z(d.b)
if(v!=null)w.aYu(v)},
$S:51}
B.eul.prototype={
$0(){var w=this.a
return w.m(new B.euf(w))},
$S:0}
B.euf.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.eum.prototype={
$0(){return this.a.aYu(this.b)},
$S:0}
B.eun.prototype={
$1(d){var w=this.a
return w.m(new B.eue(w,d))},
$S:6}
B.eue.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.euo.prototype={
$1(d){var w=this.a
return w.m(new B.eud(w,d))},
$S:6}
B.eud.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eup.prototype={
$0(){var w=this.a
return w.m(new B.euc(w))},
$S:0}
B.euc.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.euq.prototype={
$0(){var w=this.a
return w.m(new B.eub(w))},
$S:0}
B.eub.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eur.prototype={
$0(){var w=this.a
return w.m(new B.eua(w))},
$S:0}
B.eua.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.eus.prototype={
$0(){var w=this.a
return w.m(new B.eu9(w))},
$S:0}
B.eu9.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eu7.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:319}
B.eu6.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOd,w,w,w),A.uq,C.d(e,w,2,A.a2,w,w,w,A.Tk,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:130}
B.eu5.prototype={
$0(){var w=this.a
return w.m(new B.eu4(w))},
$S:0}
B.eu4.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eWh.prototype={
$0(){var w=null,v=C.i1(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.PA,w,w),this.a),A.a4,A.cc,w,A.eh,A.ca)
v.eH()
return v},
$S:342}
B.eWi.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eWj.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dUZ.prototype={
$0(){},
$S:0}
B.dVr.prototype={
$1(d){return d!=null},
$S:350}
B.dVd.prototype={
$0(){var w=this.a
return w.m(new B.dV4(w,this.b))},
$S:0}
B.dV4.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dVe.prototype={
$0(){var w=this.a
return w.m(new B.dV3(w))},
$S:0}
B.dV3.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dVf.prototype={
$0(){var w=this.a
return w.m(new B.dVc(w))},
$S:0}
B.dVc.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dVj.prototype={
$0(){var w=this.a
return w.m(new B.dVb(w))},
$S:0}
B.dVb.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dVk.prototype={
$1(d){var w=this.a
return w.m(new B.dVa(w,d))},
$S:6}
B.dVa.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dVl.prototype={
$0(){var w=this.a
return w.m(w.gctq())},
$S:0}
B.dVm.prototype={
$1(d){var w=this.a
return w.m(new B.dV9(w,d))},
$S:6}
B.dV9.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dVn.prototype={
$1(d){var w=this.a
return w.m(new B.dV8(w,d))},
$S:6}
B.dV8.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dVo.prototype={
$1(d){var w=this.a
return w.m(new B.dV7(w,d))},
$S:6}
B.dV7.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dVp.prototype={
$1(d){var w=this.a
return w.m(new B.dV6(w,d))},
$S:6}
B.dV6.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dVq.prototype={
$0(){var w=this.a
return w.m(new B.dV5(w))},
$S:0}
B.dV5.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dVg.prototype={
$0(){var w=this.a
return w.m(new B.dV2(w))},
$S:0}
B.dV2.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dVh.prototype={
$0(){var w=this.a
return w.m(new B.dV1(w))},
$S:0}
B.dV1.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dVi.prototype={
$0(){var w=this.a
return w.m(new B.dV0(w))},
$S:0}
B.dV0.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dUY.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.c_(g,new C.o(D.beH,g,g,C.m(20),g,g,A.n),A.bd),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yx[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.G(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.yx[q].b)+" m/s\xb2",g,D.f45,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dp,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(A_.MI,C.b0(D.yx[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yx[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yx[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yx[q].d).j(0.6),g,g,g,3,g,A.fo,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.v(C.a([j,A.at,new C.x(i,g,A.rD,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.eXq,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.da(v,new B.dUX()))a1.push(D.b3u)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:63}
B.dUX.prototype={
$1(d){return d==null},
$S:350}
B.dV_.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dh(v,v,v,v,A.bc,new C.o(v,v,v,C.m(8),v,new C.a8(A.a3,A.a7,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.i9,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.Go(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.f2u,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:63}
B.dUW.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.b9h(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.au)
o=A.w.j(0.55)
p=C.m(14)
q=C.I(A.bF,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b4
else u=A.a.t(u,"escapes")?A.aS:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.aa(Math.sqrt(58.86870477034412),1)
s=A.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.Go(A.k.D(r.cx.gcl()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b_,A.r,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,A.bB,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aPR,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bS,v,v,v),v,v,12,12,8,v)],w),v)},
$S:63}
B.en2.prototype={
$0(){return B.qL(this.b,this.a.d,"size-compare")},
$S:0}
B.en3.prototype={
$0(){var w=this.a
return w.m(new B.en1(w,this.b))},
$S:0}
B.en1.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.en4.prototype={
$0(){var w=this.a
return w.m(new B.en0(w,this.b))},
$S:0}
B.en0.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eUr.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.M()
w.r=f.j(0.2).gp(0)
w.z=new C.ht(A.G,Math.max(2,e*0.18))
u.af(d,e*1.12,w)
w=C.M()
v=C.aq(f,A.w,0.6)
v.toString
w.saq(new C.bS(P.pa,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a1n,null).av(0,C.bT(d,e)))
u.af(d,e,w)},
$S:722}
B.dCu.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dCi.prototype={
$1(d){return d.b},
$S:z+60}
B.dCj.prototype={
$0(){return B.qL(this.b,this.a.d,"black-hole")},
$S:0}
B.dCk.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.Q=o
o=C.aE(A.c3,C.b3(q,q,q,new B.b8G(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dCg(p),q,q,q,q,q,q,q,q,q,new B.dCh(p),q,q,q,q,!1,A.a8)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.q,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fp4(t)+" Suns"
t=p.adO("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.A(C.a([t,p.adO("EDGE WIDTH",(s<100?A.k.aa(s,1):B.Go(s))+" km"),p.adO("TIME",A.k.aa(this.b*100,0)+"%"),p.adO("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bS,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.ea4)
return new C.ev(new C.an(A.W,q,A.b_,A.r,r,q),p.d)},
$S:196}
B.dCh.prototype={
$1(d){return this.a.aYv(d.b)},
$S:23}
B.dCg.prototype={
$1(d){if(A.cI.aj()<0.12)this.a.aYv(d.b)},
$S:18}
B.dCm.prototype={
$1(d){var w=this.a
return w.m(new B.dCf(w,d))},
$S:6}
B.dCf.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dCn.prototype={
$0(){var w=this.a
return w.m(new B.dCe(w))},
$S:0}
B.dCe.prototype={
$0(){return this.a.r=10},
$S:0}
B.dCo.prototype={
$0(){var w=this.a
return w.m(new B.dCd(w))},
$S:0}
B.dCd.prototype={
$0(){return this.a.r=21},
$S:0}
B.dCp.prototype={
$0(){var w=this.a
return w.m(new B.dCc(w))},
$S:0}
B.dCc.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dCq.prototype={
$0(){var w=this.a
return w.m(new B.dCb(w))},
$S:0}
B.dCb.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dCr.prototype={
$0(){var w=this.a
return w.m(new B.dCa(w))},
$S:0}
B.dCa.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dCs.prototype={
$0(){var w=this.a
return w.m(new B.dC9(w))},
$S:0}
B.dC9.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dCt.prototype={
$0(){var w=this.a
return w.m(new B.dC8(w))},
$S:0}
B.dC8.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dCl.prototype={
$0(){var w=this.a
return w.m(new B.dC7(w))},
$S:0}
B.dC7.prototype={
$0(){var w=this.a
A.d.a9(w.z)
w.as=0},
$S:0}
B.dTw.prototype={
$6(d,e,f,g,h,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=f.a,v=f.b,u=g.a,t=g.b,s=this.a,r=0;r<d.length;++r){q=d[r]
p=q.a
o=w-p
q=q.b
n=v-q
p=u-p
q=t-q
m=Math.max(0.12,Math.sqrt(o*o+n*n))
l=Math.max(0.12,Math.sqrt(p*p+q*q))
k=e[r]
j=h/(m*m)
i=a0/(l*l)
p=k.a+(o/m*j+p/l*i)*s
i=k.b+(n/m*j+q/l*i)*s
e[r]=new C.u(p,i)
q=d[r]
d[r]=new C.u(q.a+p*s,q.b+i*s)}},
$S:1862}
B.dTm.prototype={
$0(){return B.qL(this.b,this.a.d,"galaxy")},
$S:0}
B.dTn.prototype={
$0(){var w=this.a
return w.m(new B.dTl(w,this.b))},
$S:0}
B.dTl.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.Zq()},
$S:0}
B.dTo.prototype={
$0(){var w=this.a
return w.m(new B.dTk(w))},
$S:0}
B.dTk.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.Zq()}w.cth()},
$S:0}
B.dTp.prototype={
$1(d){var w=this.a
return w.m(new B.dTj(w,d))},
$S:6}
B.dTj.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.Zq()},
$S:0}
B.dTq.prototype={
$1(d){var w=this.a
return w.m(new B.dTi(w,d))},
$S:6}
B.dTi.prototype={
$0(){var w=this.a
w.r=this.b
w.Zq()},
$S:0}
B.dTr.prototype={
$1(d){var w=this.a
return w.m(new B.dTh(w,d))},
$S:6}
B.dTh.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dTs.prototype={
$1(d){var w=this.a
return w.m(new B.dTg(w,d))},
$S:6}
B.dTg.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dTt.prototype={
$0(){var w=this.a
return w.m(new B.dTf(w))},
$S:0}
B.dTf.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dTu.prototype={
$0(){var w=this.a
return w.m(new B.dTe(w))},
$S:0}
B.dTe.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dTv.prototype={
$0(){var w=this.a
return w.m(new B.dTd(w))},
$S:0}
B.dTd.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d8_.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1863}
B.emh.prototype={
$0(){return B.qL(this.b,this.a.d,"seasons-moon")},
$S:0}
B.emi.prototype={
$0(){var w=this.a
return w.m(new B.emg(w))},
$S:0}
B.emg.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.emj.prototype={
$0(){var w=this.a
return w.m(new B.emf(w))},
$S:0}
B.emf.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.emk.prototype={
$0(){var w=this.a
return w.m(new B.eme(w))},
$S:0}
B.eme.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.eml.prototype={
$0(){var w=this.a
return w.m(new B.emd(w))},
$S:0}
B.emd.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.emm.prototype={
$1(d){var w=this.a
return w.m(new B.emc(w,d))},
$S:6}
B.emc.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.emn.prototype={
$1(d){var w=this.a
return w.m(new B.emb(w,d))},
$S:6}
B.emb.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.emo.prototype={
$1(d){var w=this.a
return w.m(new B.ema(w,d))},
$S:6}
B.ema.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.emp.prototype={
$1(d){var w=this.a
return w.m(new B.em9(w,d))},
$S:6}
B.em9.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aKX.prototype
w.bu5=w.q
w=B.aJZ.prototype
w.bt5=w.q
w=B.aK_.prototype
w.bt6=w.q
w=B.aK4.prototype
w.btb=w.q
w=B.aLM.prototype
w.bv0=w.q
w=B.aKV.prototype
w.bu3=w.q
w=B.aL3.prototype
w.buc=w.q
w=B.aL9.prototype
w.bui=w.q
w=B.aK2.prototype
w.bt9=w.q
w=B.aKS.prototype
w.bu0=w.q
w=B.aL6.prototype
w.buf=w.q
w=B.aKQ.prototype
w.btZ=w.q
w=B.aKR.prototype
w.bu_=w.q
w=B.aKg.prototype
w.bto=w.q
w=B.aJV.prototype
w.bt1=w.q
w=B.aKo.prototype
w.btw=w.q
w=B.aws.prototype
w.bqd=w.q
w=B.awt.prototype
w.bqe=w.q
w=B.aIr.prototype
w.bru=w.q
w=B.aKd.prototype
w.btk=w.q
w=B.aKF.prototype
w.btO=w.q
w=B.aKG.prototype
w.btP=w.q
w=B.aK0.prototype
w.bt7=w.q
w=B.aKj.prototype
w.btr=w.q
w=B.aKO.prototype
w.btX=w.q
w=B.aLh.prototype
w.buq=w.q
w=B.aKp.prototype
w.bty=w.q
w=B.aKq.prototype
w.btz=w.q
w=B.aKr.prototype
w.btA=w.q
w=B.aL_.prototype
w.bu8=w.q
w=B.aL2.prototype
w.bub=w.q
w=B.aJY.prototype
w.bt4=w.q
w=B.aKm.prototype
w.btu=w.q
w=B.aKZ.prototype
w.bu7=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aD6.prototype,"gavk","c1L",0)
var r
v(r=B.aBw.prototype,"gc9W","c9X",35)
w(r,"gc2g","aWT",0)
w(B.aBz.prototype,"gc3P","c3Q",0)
u(B.aBQ.prototype,"gc3V","c3W",52)
w(r=B.aG5.prototype,"gcsY","csZ",0)
w(r,"gcgD","afd",0)
w(r,"gcek","cel",0)
w(r,"gc3U","acO",3)
w(r=B.aD5.prototype,"gbEF","a8p",3)
w(r,"gcdC","b_9",0)
w(r,"gchl","afl",3)
t(r,"gc3Y","acP",3)
w(B.aDl.prototype,"gbVL","bVM",0)
w(r=B.aCY.prototype,"gcsS","csT",0)
w(r,"gbF_","bF0",0)
w(r=B.aBy.prototype,"gb3i","ayU",0)
v(r,"gc43","YO",54)
w(r,"gc42","acR",3)
v(r=B.aCX.prototype,"gcjg","axD",58)
v(r,"gcpv","ayQ",15)
w(r,"gbIY","aPF",0)
v(r=B.aCV.prototype,"gcA0","aip",15)
t(r,"gc4n","avT",0)
w(r,"gclz","clA",0)
v(r=B.aC1.prototype,"gc4o","c4p",90)
w(r,"gc4q","c4r",0)
t(r=B.a3D.prototype,"grn","a9",0)
v(r,"gcPK","amg",1)
v(r,"gcMe","Lg",1)
w(r,"gcRV","bgg",0)
s(B.ahL.prototype,"gc4v",0,5,null,["$5"],["q6"],64,0,0)
w(r=B.aC2.prototype,"gc4w","c4x",0)
w(r,"gck2","afH",3)
w(r,"gcab","ae0",3)
w(r,"gcr3","agN",3)
w(r=B.aCH.prototype,"gc4N","avY",0)
w(r,"gc4O","aXM",0)
w(r=B.aDy.prototype,"gc5L","c5M",0)
t(r,"gc5J","aY7",0)
w(B.aCR.prototype,"gbHx","ard",0)
t(B.aDc.prototype,"gc5N","c5O",0)
v(r=B.aCd.prototype,"gc6s","c6t",78)
w(r,"gbMo","bMp",0)
w(r=B.aCe.prototype,"gctq","ctr",0)
w(r,"gc6x","c6y",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.aiX,B.FE,B.uF,B.aQQ,B.a2k,B.b8J,B.bZX,B.xN,B.BW,B.ni,B.b9r,B.A9,B.bra,B.pV,B.qD,B.C_,B.Yz,B.adS,B.a_M,B.C9,B.aaN,B.ab3,B.acZ,B.Fq,B.bk8,B.Pl,B.a_5,B.aaU,B.abm,B.Fm,B.acb,B.acG,B.t5,B.b8j,B.aQG,B.e9,B.ti,B.a9v,B.aaz,B.a3D,B.mv,B.b9s,B.fJ,B.m2,B.aVh,B.bsu,B.aGW,B.my,B.aaf,B.aag,B.uS,B.OD,B.xL,B.OC,B.bsp,B.P4,B.adX])
u(C.hT,[B.fre,B.fhY,B.foi,B.foj,B.frb,B.frc,B.e3L,B.e43,B.ek1,B.ejz,B.ejA,B.ejB,B.ejC,B.ejD,B.ejE,B.ejF,B.ejG,B.ejx,B.ejy,B.ejw,B.ejX,B.ejY,B.ejZ,B.dCz,B.dCB,B.dCE,B.dCP,B.bZY,B.bZZ,B.fcb,B.fcc,B.fcd,B.fck,B.fcl,B.fcm,B.dF6,B.dEO,B.dF7,B.dEJ,B.dEE,B.dEG,B.dEM,B.dEZ,B.dEX,B.dEY,B.dEW,B.dET,B.dEV,B.eTW,B.eTD,B.eTK,B.eTT,B.eTx,B.deP,B.deQ,B.deM,B.deN,B.deO,B.deR,B.deS,B.deT,B.deU,B.deV,B.deW,B.deX,B.deY,B.deZ,B.eiY,B.eiZ,B.ej_,B.ej0,B.eiW,B.eiX,B.ejs,B.ej4,B.ej6,B.eiR,B.ejo,B.ejm,B.ejn,B.ejl,B.ejk,B.eiT,B.euT,B.euR,B.euF,B.euJ,B.euE,B.euK,B.euL,B.euP,B.eBu,B.eBA,B.efG,B.efH,B.efs,B.eft,B.efr,B.efw,B.efy,B.efz,B.eAU,B.eAV,B.eAT,B.eAH,B.eAI,B.eAG,B.eAz,B.eAA,B.eAO,B.eAP,B.eAQ,B.eAR,B.eAS,B.dEf,B.dEg,B.dEh,B.dE8,B.dEb,B.cJN,B.eb9,B.eby,B.ebd,B.ebl,B.ebm,B.ebk,B.ebt,B.ef9,B.efe,B.eey,B.eeg,B.ees,B.eeq,B.eeo,B.eep,B.een,B.dN1,B.dMQ,B.dMS,B.dN_,B.dMV,B.dPR,B.dPJ,B.dPK,B.dPL,B.d2h,B.d2j,B.d2i,B.dAD,B.dAE,B.dAw,B.dAu,B.cCk,B.dTU,B.dTV,B.dTQ,B.dTR,B.da2,B.da3,B.dEC,B.dEk,B.dEt,B.dEu,B.dEz,B.dEA,B.bKE,B.bKP,B.bKK,B.bKQ,B.bKS,B.bKF,B.bKD,B.bKX,B.bKL,B.bKO,B.bKN,B.bKM,B.bFW,B.fCU,B.fCX,B.fCV,B.bFD,B.bFy,B.bFx,B.bFV,B.bFN,B.bFO,B.bFM,B.bFP,B.bFn,B.bFp,B.bFl,B.bFm,B.bFd,B.bFe,B.fcn,B.fco,B.fcp,B.fca,B.fcq,B.fc9,B.fcr,B.fce,B.fc8,B.fcf,B.fc7,B.fcg,B.fc6,B.fch,B.fc4,B.fc5,B.fci,B.fc2,B.fc3,B.fcj,B.fc1,B.dQ7,B.dQ8,B.dPY,B.dPU,B.dQ6,B.dQb,B.czR,B.fHt,B.fHu,B.e6J,B.e6B,B.df7,B.dfa,B.e71,B.e6N,B.e6X,B.e6Y,B.e6Z,B.cdS,B.eFU,B.dPu,B.dPv,B.dPw,B.dPy,B.ecs,B.eBc,B.eBl,B.eBh,B.eBj,B.eb0,B.eb1,B.eb2,B.fLj,B.cqK,B.dUV,B.dUk,B.dUj,B.dUv,B.dUw,B.dUu,B.dUx,B.dUP,B.dUQ,B.dUR,B.eC2,B.eug,B.euh,B.eui,B.eun,B.euo,B.eu7,B.eWi,B.eWj,B.dVr,B.dVk,B.dVm,B.dVn,B.dVo,B.dVp,B.dUX,B.eUr,B.dCu,B.dCi,B.dCh,B.dCg,B.dCm,B.dTw,B.dTp,B.dTq,B.dTr,B.dTs,B.d8_,B.emm,B.emn,B.emo,B.emp])
u(C.kg,[B.frd,B.e3Q,B.e3O,B.ejI,B.ejV,B.dEF,B.dF1,B.dL_,B.eTZ,B.eU_,B.eTC,B.eTP,B.eTQ,B.eTL,B.eTR,B.eTw,B.eiU,B.eiV,B.ejr,B.ejj,B.ej8,B.eBt,B.efv,B.eAK,B.dE7,B.dEc,B.ebp,B.efd,B.frv,B.eek,B.eeh,B.eeu,B.dmV,B.bEK,B.fmm,B.dAq,B.dAy,B.bKR,B.bKT,B.bKV,B.bKG,B.bKI,B.bFX,B.cjh,B.fCW,B.bFw,B.bFT,B.bFS,B.dQ5,B.czS,B.dLU,B.dLS,B.dLM,B.e6D,B.df8,B.df9,B.e6W,B.cdV,B.dD2,B.dCY,B.ecu,B.dUH,B.dUh,B.daT,B.eC7,B.euk,B.eu6,B.dUY,B.dV_,B.dUW,B.dCk])
u(C.ag,[B.UL,B.Vc,B.TD,B.TI,B.MQ,B.aG4,B.Vb,B.Vr,B.VD,B.V8,B.Vy,B.TG,B.V2,B.V7,B.V5,B.U3,B.Uj,B.Ty,B.Ux,B.TH,B.ahJ,B.Uk,B.aw9,B.U1,B.UQ,B.US,B.VJ,B.Ur,B.TE,B.Ui,B.V3,B.Vh,B.VC,B.V1,B.Uy,B.VF,B.Vq,B.Uz,B.Vi,B.TC,B.Uv,B.Ve])
u(C.ah,[B.biC,B.aKX,B.aJZ,B.aK4,B.aBQ,B.aLM,B.aKV,B.aL3,B.aL9,B.aKS,B.aL6,B.aK2,B.aKQ,B.aKR,B.aCV,B.bi6,B.aKg,B.aJV,B.aKo,B.bhY,B.aws,B.bvA,B.aIr,B.aKd,B.aKF,B.aKG,B.aLh,B.aKj,B.aK0,B.bi7,B.aCR,B.aDc,B.bjl,B.aKO,B.aKp,B.bjp,B.aL2,B.aKr,B.aL_,B.aJY,B.aKm,B.aKZ])
u(C.j4,[B.e3J,B.e3K,B.e3W,B.e3X,B.e3S,B.e3R,B.e3T,B.e3P,B.e3U,B.e3N,B.e3V,B.e3M,B.e4_,B.e3Z,B.e40,B.e3Y,B.e41,B.e42,B.e44,B.ek0,B.ek2,B.ek3,B.ejK,B.ejJ,B.ejH,B.ejQ,B.ejR,B.ejN,B.ejS,B.ejM,B.ejT,B.ejU,B.ejL,B.ejW,B.ejP,B.ek_,B.ejO,B.dCW,B.dCV,B.dCy,B.dCX,B.dCA,B.dCC,B.dCD,B.dCF,B.dCv,B.dCw,B.dCx,B.dCM,B.dCN,B.dCO,B.dCL,B.dCQ,B.dCK,B.dCR,B.dCJ,B.dCS,B.dCI,B.dCT,B.dCH,B.dCU,B.dCG,B.dEL,B.dEK,B.dEP,B.dEH,B.dEI,B.dEQ,B.dER,B.dES,B.dEN,B.dED,B.dF0,B.dF_,B.dF2,B.dF3,B.dF4,B.dEU,B.dF5,B.cKf,B.dKY,B.dKX,B.dKZ,B.fcC,B.fcD,B.fcE,B.fcP,B.fcR,B.fcS,B.fcT,B.fcU,B.fcV,B.fcW,B.fcX,B.fcF,B.fcG,B.fcH,B.fcI,B.fcJ,B.fcK,B.fcL,B.fcM,B.fcN,B.fcO,B.fcQ,B.eTY,B.eTX,B.eTF,B.eTE,B.eTA,B.eTz,B.eTB,B.eTy,B.eTN,B.eTM,B.eTO,B.eTG,B.eTS,B.eTJ,B.eTU,B.eTI,B.eTV,B.eTH,B.ej2,B.eiS,B.ej1,B.eiO,B.ej3,B.ej5,B.eiP,B.eiQ,B.ejq,B.ejp,B.ejg,B.ejh,B.eji,B.ejc,B.ejd,B.ejb,B.eje,B.eja,B.ejf,B.ej9,B.ej7,B.deL,B.euS,B.euu,B.eut,B.euD,B.euM,B.euC,B.euN,B.euB,B.euO,B.euA,B.euz,B.euQ,B.euy,B.euG,B.eux,B.euH,B.euw,B.euI,B.euv,B.eBs,B.eBr,B.eBv,B.eBq,B.eBw,B.eBp,B.eBx,B.eBo,B.eBy,B.eBn,B.eBz,B.eBm,B.efu,B.efq,B.efp,B.efo,B.efA,B.efn,B.efB,B.efm,B.efC,B.efl,B.efD,B.efE,B.efF,B.efk,B.efx,B.eAJ,B.eAy,B.eAL,B.eAF,B.eAM,B.eAE,B.eAN,B.eAD,B.eAC,B.eAB,B.eAx,B.eAw,B.eAv,B.dEe,B.dE5,B.dE6,B.dE9,B.dEa,B.dEd,B.ebn,B.ebe,B.ebo,B.ebq,B.ebj,B.ebr,B.ebi,B.ebs,B.ebh,B.ebg,B.ebu,B.ebf,B.ebv,B.ebc,B.ebw,B.ebb,B.ebx,B.eba,B.ef3,B.ef4,B.efb,B.efa,B.efc,B.ef8,B.eff,B.ef7,B.efg,B.ef6,B.efh,B.efi,B.ef5,B.efj,B.eex,B.eee,B.eef,B.eej,B.eei,B.eet,B.eer,B.eel,B.eev,B.eem,B.eew,B.dN0,B.dMR,B.dMP,B.dMW,B.dMU,B.dMX,B.dMT,B.dMY,B.dMZ,B.dPQ,B.dPE,B.dPD,B.dPF,B.dPI,B.dPH,B.dPG,B.dPM,B.dPN,B.dPO,B.dPP,B.dAC,B.dAB,B.dAr,B.dAx,B.dAv,B.dAz,B.dAt,B.dAA,B.dAs,B.dTT,B.dTS,B.dTK,B.dTO,B.dTN,B.dTP,B.dTM,B.dTL,B.dEB,B.dEs,B.dEr,B.dEv,B.dEq,B.dEw,B.dEp,B.dEx,B.dEo,B.dEy,B.dEn,B.dEm,B.dEl,B.bKU,B.bKW,B.bKH,B.bKJ,B.bFA,B.bFB,B.bFz,B.bFC,B.bFE,B.bFq,B.bFr,B.bFs,B.bFt,B.bFu,B.bFv,B.bFU,B.bF3,B.bFK,B.bFL,B.bFI,B.bFJ,B.bFG,B.bFH,B.bFQ,B.bFF,B.bFR,B.bF4,B.bFo,B.bFa,B.bFb,B.bF9,B.bFc,B.bF8,B.bFf,B.bFg,B.bFh,B.bFi,B.bF7,B.bFj,B.bF6,B.bFk,B.bF5,B.dPZ,B.dQ9,B.dQa,B.dPX,B.dPW,B.dPV,B.dQ3,B.dQ1,B.dQ2,B.dQ4,B.dQ_,B.dQ0,B.dQc,B.dQd,B.dQe,B.dQf,B.dQg,B.dLV,B.dLT,B.dLR,B.dLQ,B.dLP,B.dLO,B.dLN,B.dLJ,B.dLI,B.dLL,B.dLK,B.e6I,B.e6K,B.e6z,B.e6A,B.e6C,B.e6E,B.e6F,B.e6G,B.e6H,B.e70,B.e72,B.e6T,B.e6P,B.e6U,B.e6V,B.e6O,B.e6S,B.e6R,B.e6Q,B.e7_,B.fd4,B.fd5,B.fd6,B.fd7,B.fd8,B.fd9,B.fda,B.fdb,B.cdU,B.cdT,B.eFV,B.eFR,B.eFQ,B.eFT,B.eFS,B.dSc,B.dSd,B.dS7,B.dS9,B.dSa,B.dS8,B.dSb,B.dD3,B.dD0,B.dD_,B.dD1,B.dCZ,B.dPt,B.dPs,B.dPr,B.dPq,B.dPx,B.dPp,B.dPo,B.dPz,B.dPn,B.dPA,B.dPm,B.dPB,B.dPC,B.dPl,B.eco,B.ecp,B.ecn,B.ecq,B.ecm,B.ect,B.ecv,B.ecr,B.ecw,B.emV,B.emW,B.emT,B.emU,B.emS,B.emX,B.emY,B.emZ,B.en_,B.eBg,B.eBi,B.eBf,B.eBe,B.eBk,B.eBd,B.eb3,B.eb4,B.eaX,B.eaW,B.eaY,B.eaV,B.eaZ,B.eaU,B.eb_,B.eaT,B.eaS,B.eaR,B.eaQ,B.cqL,B.cqM,B.fLi,B.cqH,B.cqG,B.cqN,B.cqI,B.cqJ,B.cdQ,B.dUU,B.dUn,B.dUl,B.dUm,B.dUi,B.dUG,B.dUo,B.dUp,B.dUI,B.dUt,B.dUM,B.dUF,B.dUN,B.dUE,B.dUO,B.dUD,B.dUC,B.dUB,B.dUA,B.dUS,B.dUz,B.dUT,B.dUy,B.dUJ,B.dUs,B.dUK,B.dUr,B.dUL,B.dUq,B.dUg,B.dUf,B.daS,B.fcY,B.fcZ,B.fd_,B.fd0,B.fd1,B.fd2,B.fd3,B.eC5,B.eC6,B.eC4,B.eC3,B.eu8,B.euj,B.eul,B.euf,B.eum,B.eue,B.eud,B.eup,B.euc,B.euq,B.eub,B.eur,B.eua,B.eus,B.eu9,B.eu5,B.eu4,B.eWh,B.dUZ,B.dVd,B.dV4,B.dVe,B.dV3,B.dVf,B.dVc,B.dVj,B.dVb,B.dVa,B.dVl,B.dV9,B.dV8,B.dV7,B.dV6,B.dVq,B.dV5,B.dVg,B.dV2,B.dVh,B.dV1,B.dVi,B.dV0,B.en2,B.en3,B.en1,B.en4,B.en0,B.dCj,B.dCf,B.dCn,B.dCe,B.dCo,B.dCd,B.dCp,B.dCc,B.dCq,B.dCb,B.dCr,B.dCa,B.dCs,B.dC9,B.dCt,B.dC8,B.dCl,B.dC7,B.dTm,B.dTn,B.dTl,B.dTo,B.dTk,B.dTj,B.dTi,B.dTh,B.dTg,B.dTt,B.dTf,B.dTu,B.dTe,B.dTv,B.dTd,B.emh,B.emi,B.emg,B.emj,B.emf,B.emk,B.eme,B.eml,B.emd,B.emc,B.emb,B.ema,B.em9])
t(B.bvP,B.aKX)
t(B.aD6,B.bvP)
u(C.mJ,[B.bfB,B.b9K,B.bqA,B.b8q,B.bpe,B.boG,B.b95,B.boI,B.bsE,B.bfz,B.bqv,B.bjW,B.brm,B.b9q,B.bgt,B.bjX,B.bha,B.bcu,B.b8v,B.bdY,B.ahL,B.b7D,B.btF,B.adL,B.bfE,B.bfT,B.btR,B.boH,B.bk9,B.be4,B.bqt,B.b9h,B.bq1,B.b8G,B.bdV,B.bph])
t(B.aK_,B.aJZ)
t(B.aBw,B.aK_)
t(B.bvy,B.aK4)
t(B.aBz,B.bvy)
u(C.m6,[B.JU,B.a_z,B.IR])
u(C.au,[B.bpC,B.ae1,B.acV,B.Pu,B.bq5,B.a7w,B.bbQ,B.b5s,B.dA,B.eO,B.auy,B.fg,B.ET])
t(B.aG5,B.aLM)
t(B.bfy,C.oH)
t(B.aD5,B.aKV)
t(B.bjc,B.aL3)
t(B.aDl,B.aL9)
t(B.bvO,B.aKS)
t(B.aCY,B.bvO)
t(B.bvW,B.aL6)
t(B.bjh,B.bvW)
t(B.bvx,B.aK2)
t(B.aBy,B.bvx)
t(B.bvM,B.aKQ)
t(B.biR,B.bvM)
t(B.bvN,B.aKR)
t(B.aCX,B.bvN)
t(B.aC1,B.aKg)
t(B.bhL,B.aJV)
t(B.bii,B.aKo)
t(B.awt,B.aws)
t(B.ahK,B.awt)
t(B.aC2,B.bvA)
t(B.b7E,B.aIr)
t(B.bi4,B.aKd)
t(B.bvF,B.aKF)
t(B.biE,B.bvF)
t(B.bvG,B.aKG)
t(B.aCH,B.bvG)
t(B.bvX,B.aLh)
t(B.aDy,B.bvX)
t(B.bvB,B.aKj)
t(B.bid,B.bvB)
t(B.bvw,B.aK0)
t(B.bhQ,B.bvw)
t(B.bvL,B.aKO)
t(B.biP,B.bvL)
t(B.aKq,B.aKp)
t(B.aCd,B.aKq)
t(B.bvT,B.aL2)
t(B.bjb,B.bvT)
t(B.bvD,B.aKr)
t(B.aCe,B.bvD)
t(B.bvR,B.aL_)
t(B.bj8,B.bvR)
t(B.bvv,B.aJY)
t(B.bhP,B.bvv)
t(B.bvC,B.aKm)
t(B.big,B.bvC)
t(B.bvQ,B.aKZ)
t(B.bj7,B.bvQ)
w(B.aKX,C.c9)
w(B.bvP,B.my)
w(B.aJZ,C.c9)
w(B.aK_,B.my)
w(B.aK4,C.c9)
w(B.bvy,B.my)
w(B.aLM,C.eV)
w(B.aKV,C.c9)
w(B.aL3,C.c9)
w(B.aL9,C.c9)
w(B.aK2,C.c9)
w(B.bvx,B.my)
w(B.aKS,C.c9)
w(B.bvO,B.my)
w(B.aL6,C.c9)
w(B.bvW,B.my)
w(B.aKQ,C.c9)
w(B.bvM,B.my)
w(B.aKR,C.c9)
w(B.bvN,B.my)
w(B.aKg,C.c9)
w(B.aJV,C.c9)
w(B.aKo,C.c9)
w(B.aws,C.c9)
w(B.awt,B.my)
w(B.aIr,C.c9)
v(B.bvA,C.ey)
w(B.aKd,C.c9)
w(B.aKF,C.c9)
w(B.bvF,B.my)
w(B.aKG,C.c9)
w(B.bvG,B.my)
w(B.aK0,C.c9)
w(B.bvw,B.my)
w(B.aKj,C.c9)
w(B.bvB,B.my)
w(B.aKO,C.c9)
w(B.bvL,B.my)
w(B.aLh,C.c9)
w(B.bvX,B.my)
w(B.aKp,C.c9)
w(B.aKq,B.my)
w(B.aKr,C.c9)
w(B.bvD,B.my)
w(B.aL_,C.c9)
w(B.bvR,B.my)
w(B.aL2,C.c9)
w(B.bvT,B.my)
w(B.aJY,C.c9)
w(B.bvv,B.my)
w(B.aKm,C.c9)
w(B.bvC,B.my)
w(B.aKZ,C.c9)
w(B.bvQ,B.my)})()
C.jU(b.typeUniverse,JSON.parse('{"UL":{"ag":[],"r":[]},"biC":{"ah":["UL"]},"Vc":{"ag":[],"r":[]},"aD6":{"ah":["Vc"]},"bfB":{"aB":[]},"TD":{"ag":[],"r":[]},"aBw":{"ah":["TD"]},"TI":{"ag":[],"r":[]},"aBz":{"ah":["TI"]},"b9K":{"aB":[]},"ae1":{"au":[],"r":[]},"acV":{"au":[],"r":[]},"aG4":{"ag":[],"r":[]},"MQ":{"ag":[],"r":[]},"aBQ":{"ah":["MQ"]},"bpC":{"au":[],"r":[]},"Pu":{"au":[],"r":[]},"bqA":{"aB":[]},"bq5":{"au":[],"r":[]},"b8q":{"aB":[]},"aG5":{"ah":["aG4"]},"bpe":{"aB":[]},"boG":{"aB":[]},"b95":{"aB":[]},"boI":{"aB":[]},"bsE":{"aB":[]},"Vb":{"ag":[],"r":[]},"bfy":{"aB":[]},"aD5":{"ah":["Vb"]},"bfz":{"aB":[]},"Vr":{"ag":[],"r":[]},"VD":{"ag":[],"r":[]},"bjc":{"ah":["Vr"]},"bqv":{"aB":[]},"aDl":{"ah":["VD"]},"V8":{"ag":[],"r":[]},"Vy":{"ag":[],"r":[]},"TG":{"ag":[],"r":[]},"aCY":{"ah":["V8"]},"bjW":{"aB":[]},"bjh":{"ah":["Vy"]},"brm":{"aB":[]},"aBy":{"ah":["TG"]},"b9q":{"aB":[]},"V2":{"ag":[],"r":[]},"V7":{"ag":[],"r":[]},"biR":{"ah":["V2"]},"bgt":{"aB":[]},"aCX":{"ah":["V7"]},"bjX":{"aB":[]},"V5":{"ag":[],"r":[]},"U3":{"ag":[],"r":[]},"Uj":{"ag":[],"r":[]},"aCV":{"ah":["V5"]},"bha":{"aB":[]},"bi6":{"ah":["U3"]},"aC1":{"ah":["Uj"]},"bcu":{"aB":[]},"Ty":{"ag":[],"r":[]},"Ux":{"ag":[],"r":[]},"TH":{"ag":[],"r":[]},"bhL":{"ah":["Ty"]},"b8v":{"aB":[]},"bii":{"ah":["Ux"]},"bdY":{"aB":[]},"bhY":{"ah":["TH"]},"ahL":{"aB":[]},"ahJ":{"ag":[],"r":[]},"ahK":{"ah":["ahJ"]},"Uk":{"ag":[],"r":[]},"aw9":{"ag":[],"r":[]},"aC2":{"ah":["Uk"],"ey":[]},"b7E":{"ah":["aw9"]},"b7D":{"aB":[]},"U1":{"ag":[],"r":[]},"bi4":{"ah":["U1"]},"btF":{"aB":[]},"adL":{"aB":[]},"UQ":{"ag":[],"r":[]},"US":{"ag":[],"r":[]},"biE":{"ah":["UQ"]},"bfE":{"aB":[]},"aCH":{"ah":["US"]},"bfT":{"aB":[]},"a7w":{"au":[],"r":[]},"VJ":{"ag":[],"r":[]},"Ur":{"ag":[],"r":[]},"TE":{"ag":[],"r":[]},"Ui":{"ag":[],"r":[]},"V3":{"ag":[],"r":[]},"Vh":{"ag":[],"r":[]},"VC":{"ag":[],"r":[]},"V1":{"ag":[],"r":[]},"aDy":{"ah":["VJ"]},"btR":{"aB":[]},"bid":{"ah":["Ur"]},"boH":{"aB":[]},"bhQ":{"ah":["TE"]},"bi7":{"ah":["Ui"]},"bk9":{"aB":[]},"aCR":{"ah":["V3"]},"aDc":{"ah":["Vh"]},"bjl":{"ah":["VC"]},"biP":{"ah":["V1"]},"bbQ":{"au":[],"r":[]},"b5s":{"au":[],"r":[]},"dA":{"au":[],"r":[]},"eO":{"au":[],"r":[]},"auy":{"au":[],"r":[]},"fg":{"au":[],"r":[]},"ET":{"au":[],"r":[]},"Uy":{"ag":[],"r":[]},"aCd":{"ah":["Uy"]},"be4":{"aB":[]},"VF":{"ag":[],"r":[]},"bjp":{"ah":["VF"]},"Vq":{"ag":[],"r":[]},"Uz":{"ag":[],"r":[]},"Vi":{"ag":[],"r":[]},"bjb":{"ah":["Vq"]},"bqt":{"aB":[]},"aCe":{"ah":["Uz"]},"b9h":{"aB":[]},"bj8":{"ah":["Vi"]},"bq1":{"aB":[]},"TC":{"ag":[],"r":[]},"Uv":{"ag":[],"r":[]},"Ve":{"ag":[],"r":[]},"bhP":{"ah":["TC"]},"b8G":{"aB":[]},"big":{"ah":["Uv"]},"bdV":{"aB":[]},"bj7":{"ah":["Ve"]},"bph":{"aB":[]}}'))
C.PC(b.typeUniverse,JSON.parse('{"my":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lT<w?>"),e8:w("d4"),G:w("w"),l:w("bm<n,n>"),J:w("bm<n,N>"),I:w("bm<n,H>"),R:w("eK<n>"),Z:w("a0"),M:w("O<da>"),f5:w("O<a2g>"),gh:w("O<aQG>"),h:w("O<a2k>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<S>"),dh:w("O<Hb>"),aJ:w("O<ay<aC>>"),w:w("O<a0>"),Q:w("O<ai<w>>"),B:w("O<ai<Hb>>"),gO:w("O<ai<ai<N>>>"),bj:w("O<ai<n>>"),b:w("O<ai<N>>"),fA:w("O<ai<H?>>"),D:w("O<a4<n,aC>>"),g:w("O<u>"),bz:w("O<ti>"),ds:w("O<a7T>"),v:w("O<hn>"),U:w("O<+(u,N)>"),ev:w("O<+(u,H)>"),K:w("O<+(n,n)>"),fT:w("O<+(N,r)>"),E:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a0)>"),e:w("O<+(n,N,N,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,N,N,a4<n,N>)>"),_:w("O<uF>"),q:w("O<cP>"),fQ:w("O<a9v>"),s:w("O<n>"),cF:w("O<ar>"),X:w("O<w0>"),F:w("O<aaf>"),p:w("O<r>"),bL:w("O<aaz>"),fH:w("O<li>"),aq:w("O<b8j>"),a_:w("O<aaN>"),cS:w("O<aaU>"),cB:w("O<ni>"),ba:w("O<ab3>"),d9:w("O<P4>"),bi:w("O<abm>"),eW:w("O<C_>"),fY:w("O<Yz>"),aX:w("O<Fm>"),ea:w("O<acb>"),gB:w("O<acG>"),ed:w("O<Pl>"),g4:w("O<bk8>"),aS:w("O<a_5>"),ac:w("O<acZ>"),cd:w("O<C9>"),fr:w("O<adS>"),e4:w("O<a_M>"),r:w("O<adX>"),au:w("O<aGW>"),f7:w("O<R>"),n:w("O<N>"),t:w("O<H>"),dS:w("O<aB?>"),fs:w("O<ti?>"),d4:w("O<n?>"),bN:w("O<H?>"),gJ:w("cs<ahK>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<S>"),ew:w("ai<aC>"),j:w("ai<@>"),bW:w("ai<H>"),a:w("a4<n,@>"),f:w("a4<@,@>"),bd:w("K<e9,n>"),dv:w("K<n,n>"),fR:w("K<+(N,r),r>"),m:w("iz"),gA:w("yR"),gD:w("vB"),P:w("cq"),C:w("aC"),W:w("ti"),dV:w("e9"),g7:w("BG"),N:w("n"),bO:w("ar"),k:w("kq"),Y:w("bo<N>"),cL:w("aag"),gj:w("cx<n>"),aC:w("cx<H?>"),dg:w("e7<qD>"),e3:w("b8J"),a2:w("BW"),f3:w("qD"),es:w("Fq"),gV:w("mX"),y:w("R"),i:w("N"),z:w("@"),S:w("H"),L:w("ai<@>?"),fF:w("a4<@,@>?"),cK:w("aC?"),az:w("pO?"),T:w("n?"),cD:w("N?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVn=new C.da(0,0.85)
D.fsO=new C.x("Tap once to start the chain",null,K.Td,null,null,null,null,null,null,null,null,null)
D.aUW=new C.bH(D.aVn,null,null,D.fsO,null)
D.aVd=new C.da(0,0.1)
D.aWh=new B.aQQ(0,0,0)
D.JI=new B.aQQ(0,0.5,0)
D.aWO=new C.aA(A.b4,1,A.q,-1)
D.aYh=new C.aY(0,1/0,0,290)
D.aYo=new C.aY(16,1/0,16,1/0)
D.aZB=new C.o(A.bo,null,null,null,null,null,A.a6)
D.eVk=new C.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv7=new C.x("\u26a1",null,D.eVk,null,null,null,null,null,null,null,null,null)
D.b30=new C.cr(A.A,null,null,D.fv7,null)
D.aPa=new C.G(!0,A.c_,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fle=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aPa,null,A.L,null,null,null,null,null,null,null)
D.e3P=new C.C(A.nT,D.fle,null)
D.b39=new C.cr(A.A,null,null,D.e3P,null)
D.foU=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kw,null,A.L,null,null,null,null,null,null,null)
D.e3T=new C.C(A.nT,D.foU,null)
D.b3u=new C.cr(A.A,null,null,D.e3T,null)
D.f53=new C.G(!0,A.ja,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fty=new C.x("Draw anywhere",null,D.f53,null,null,null,null,null,null,null,null,null)
D.b3y=new C.cr(A.A,null,null,D.fty,null)
D.fbD=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aPa,null,A.L,null,null,null,null,null,null,null)
D.e4z=new C.C(A.Fa,D.fbD,null)
D.b3R=new C.cr(A.A,null,null,D.e4z,null)
D.ab1=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b6m=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b79=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Vs=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b7e=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b7j=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b7o=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.Vu=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b8r=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b8w=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b8P=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.b9U=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.aco=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bal=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.Ag=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.bb7=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.acO=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bbK=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bbR=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.acZ=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.W7=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bcl=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.ad7=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.Ei=new C.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.adk=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.Wi=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.be5=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.be7=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.beb=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bek=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.adM=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.beH=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.Et=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bfO=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bfW=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bfZ=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bg9=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bgc=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bgj=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.uZ=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.aeC=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bhn=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bi6=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.biz=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bj_=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.af3=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bn9=new C.b9(11e6)
D.boa=new C.Q(0,0,8,6)
D.afZ=new C.Q(0,0,9,0)
D.boI=new C.Q(10,0,10,4)
D.boN=new C.Q(10,10,10,6)
D.boV=new C.Q(10,34,10,26)
D.bp2=new C.Q(10,6,10,2)
D.XJ=new C.Q(10,6,10,4)
D.bp4=new C.Q(10,8,0,10)
D.bpF=new C.Q(12,8,8,8)
D.bpJ=new C.Q(14,0,14,22)
D.bpL=new C.Q(14,0,14,30)
D.agq=new C.Q(14,0,14,6)
D.agx=new C.Q(14,10,8,12)
D.bqg=new C.Q(14,8,14,6)
D.bqI=new C.Q(16,4,16,28)
D.bqS=new C.Q(16,8,16,12)
D.bsW=new C.Q(26,12,26,58)
D.btJ=new C.Q(4,4,6,2)
D.btL=new C.Q(4,4,8,2)
D.bum=new C.Q(8,14,8,12)
D.but=new C.Q(8,40,8,30)
D.bux=new C.Q(8,6,16,0)
D.buy=new C.Q(8,6,8,8)
D.buS=new C.Q(0,0,1.5,0)
D.aW3=new C.GB(26,"saturation")
D.bv9=new C.yz(A.cU,D.aW3,null,A.ab_)
D.faK=new C.x("REACTION LAB",null,X.aPM,null,null,null,null,A.a2,null,1,null,null)
D.bvf=new C.bD(1,A.bi,D.faK,null)
D.f1Z=new C.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdN=new C.x("CORE PROTOCOL",null,D.f1Z,null,null,null,null,null,null,null,null,null)
D.bvs=new C.bD(1,A.bi,D.fdN,null)
D.feu=new C.x("\ud83d\udce2 NGMY Ads",null,A.qf,null,null,null,null,A.eC,null,1,null,null)
D.bw7=new C.bD(1,A.bi,D.feu,null)
D.f9t=new C.x("Wire selected",null,A.ho,null,null,null,null,null,null,null,null,null)
D.bwl=new C.bD(1,A.bi,D.f9t,null)
D.ajG=new C.a0(62712,"MaterialIcons",!1)
D.bB8=new C.a0(62878,"MaterialIcons",!1)
D.a__=new C.a0(62908,"MaterialIcons",!1)
D.bBb=new C.a0(62918,"MaterialIcons",!1)
D.bBc=new C.a0(62931,"MaterialIcons",!1)
D.bBf=new C.a0(62951,"MaterialIcons",!1)
D.bBv=new C.a0(63064,"MaterialIcons",!1)
D.bBx=new C.a0(63070,"MaterialIcons",!1)
D.xR=new C.a0(63128,"MaterialIcons",!1)
D.FU=new C.a0(63726,"MaterialIcons",!1)
D.bCQ=new C.a0(983122,"MaterialIcons",!1)
D.bD3=new C.a0(983247,"MaterialIcons",!1)
D.bDf=new C.a0(983415,"MaterialIcons",!1)
D.bDg=new C.a0(983417,"MaterialIcons",!1)
D.bDh=new C.a0(983442,"MaterialIcons",!1)
D.bDi=new C.a0(983443,"MaterialIcons",!1)
D.al1=new C.a0(983467,"MaterialIcons",!1)
D.bDo=new C.a0(983501,"MaterialIcons",!1)
D.bDz=new C.a0(983616,"MaterialIcons",!1)
D.bDA=new C.a0(983624,"MaterialIcons",!1)
D.bDM=new C.a0(983776,"MaterialIcons",!1)
D.bE2=new C.a0(984561,"MaterialIcons",!1)
D.bED=new C.ae(A.r0,24,A.aM,null,null,null)
D.bFm=new C.ae(A.Nd,null,A.ad,null,null,null)
D.bFU=new C.ae(A.mn,21,A.ad,null,null,null)
D.bCP=new C.a0(983117,"MaterialIcons",!1)
D.bHf=new C.ae(D.bCP,28,A.c,null,null,null)
D.bHv=new C.ae(A.jg,18,null,null,null,null)
D.bJf=new C.ae(A.e5,21,A.cg,null,null,null)
D.bJu=new C.ae(A.mo,null,A.ad,null,null,null)
D.bJE=new C.ae(A.a_R,21,A.ad,null,null,null)
D.bKt=new C.ae(A.eA,17,A.ad,null,null,null)
D.amq=new C.ae(A.eA,19,null,null,null,null)
D.ms=new C.ae(A.vt,21,A.ad,null,null,null)
D.bLW=new C.ae(A.MF,null,A.ad,null,null,null)
D.bN4=new C.ae(A.jg,21,A.ad,null,null,null)
D.bNV=new C.ae(A.fc,20,A.az,null,null,null)
D.bOB=new C.ae(A.dW,null,A.aM,null,null,null)
D.bOW=new C.ae(A.jY,null,A.az,null,null,null)
D.d91=w([A.dq,A.d6,A.dq],x.O)
D.bRG=new C.a8(A.a3,A.a7,A.x,D.d91,null,null)
D.cOB=w([A.bR,A.bn],x.O)
D.bRO=new C.a8(A.b0,A.b6,A.x,D.cOB,null,null)
D.bRZ=new C.a8(A.b0,A.b6,A.x,A.awv,null,null)
D.cOX=w([A.hh,A.fi],x.O)
D.bS7=new C.a8(A.b0,A.b6,A.x,D.cOX,null,null)
D.anr=new C.a8(A.b0,A.b6,A.x,M.a1x,null,null)
D.cMp=w([A.ok,A.i6],x.O)
D.bSL=new C.a8(A.b0,A.b6,A.x,D.cMp,null,null)
D.cOj=w([A.eu,A.aB],x.O)
D.any=new C.a8(A.b0,A.b6,A.x,D.cOj,null,null)
D.d3E=w([A.dA,A.iQ,A.bn],x.O)
D.bT1=new C.a8(A.a3,A.a7,A.x,D.d3E,null,null)
D.d3K=w([A.jt,A.cC],x.O)
D.bTl=new C.a8(A.b0,A.b6,A.x,D.d3K,null,null)
D.clq=w([A.bR,A.dA],x.O)
D.bTu=new C.a8(A.a3,A.a7,A.x,D.clq,null,null)
D.ax8=w([A.eu,L.mV],x.O)
D.bTC=new C.a8(A.b0,A.b6,A.x,D.ax8,null,null)
D.bTT=new C.a8(A.b0,A.b6,A.x,I.anU,null,null)
D.bcs=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b5L=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cJR=w([D.bcs,D.b5L],x.O)
D.bU5=new C.a8(A.b0,A.b6,A.x,D.cJR,null,null)
D.bUG=new C.a8(A.ax,A.aC,A.x,A.a1u,null,null)
D.bgR=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dek=w([D.bgR,A.Kc],x.O)
D.bUN=new C.a8(A.b0,A.b6,A.x,D.dek,null,null)
D.cX6=w([A.aB,A.w],x.O)
D.bUS=new C.a8(A.b0,A.b6,A.x,D.cX6,null,null)
D.bUV=new C.a8(A.b0,A.b6,A.x,T.awz,null,null)
D.bgg=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bh_=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cxZ=w([A.KV,D.bgg,D.bh_],x.O)
D.bV3=new C.a8(A.b0,A.b6,A.x,D.cxZ,null,null)
D.clK=w([A.d8,A.fv],x.O)
D.bVj=new C.a8(A.b0,A.b6,A.x,D.clK,null,null)
D.bVp=new C.a8(A.ax,A.aC,A.x,A.a2g,null,null)
D.anW=w([0,2,4,6,7,9,11],x.t)
D.bW_=w([0,4,7],x.t)
D.ao0=w([0,4,7,12],x.t)
D.bW0=w([0,4,7,4],x.t)
D.awf=w([A.h1,A.pt],x.O)
D.avO=w([A.hv,A.d_],x.O)
D.auf=w([A.by,A.dO],x.O)
D.cGs=w([A.aM,A.d8],x.O)
D.cML=w([A.cg,A.eM],x.O)
D.d4Q=w([A.bU,A.lA],x.O)
D.atK=w([A.ct,A.jQ],x.O)
D.cLn=w([A.bJ,A.aK],x.O)
D.bWk=w([D.awf,D.avO,A.a1B,D.auf,D.cGs,D.cML,A.avm,D.d4Q,D.atK,D.cLn],x.Q)
D.c_Z=w([120,220,380],x.t)
D.c3J=w([12,16,19,24],x.t)
D.c3S=w([1400,800,450,2400],x.t)
D.c86=w([0,0.6,1],x.n)
D.ccf=w([250,450,900,1500],x.t)
D.b6z=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bgC=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.beJ=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bjN=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bdW=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.at_=w([D.b6z,D.bgC,D.beJ,D.bjN,D.bdW],x.O)
D.ewG=new C.y("type","Typewriter")
D.epT=new C.y("bounce","Bounce")
D.exs=new C.y("wave","Wave")
D.eyw=new C.y("zoom","Zoom")
D.csQ=w([D.ewG,D.epT,D.exs,A.a5l,I.aL7,D.eyw,I.aL9],x.K)
D.ct1=w([50,25,75],x.t)
D.cyu=w([0,5,10,15,18,20,25],x.t)
D.erv=new C.y("fish","Fish")
D.erx=new C.y("fly","Fireflies")
D.epR=new C.y("bird","Birds")
D.cCE=w([D.erv,D.erx,D.epR],x.K)
D.cGI=w([900,500,250,1600],x.t)
D.cKf=w([0.78,1],x.n)
D.aug=w([0,2,4,7,9,12,14,16],x.t)
D.cKN=w([A.by,A.bA,A.b8,A.by],x.O)
D.aul=w(["A","T","C","G"],x.s)
D.cKO=w(["A","U","C","G"],x.s)
D.a1r=w([A.ay,A.cj,A.bo,A.aS,A.nJ],x.O)
D.cM4=w([A.aB,A.ay,A.ct,A.cj,A.bo,A.cy,A.c9,A.bA,A.Kc],x.O)
D.a1v=w([0.04,0.17,0.3],x.n)
D.cMH=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.GH=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eGl=new B.uF("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eGr=new B.uF("Medium engine","A good all-rounder.",0.3,0.9)
D.eGq=new B.uF("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.GI=w([D.eGl,D.eGr,D.eGq],x._)
D.efW=new C.y(6,"Easy")
D.egv=new C.y(8,"Medium")
D.eck=new C.y(10,"Hard")
D.cNw=w([D.efW,D.egv,D.eck],x.E)
D.auF=w([0.55,0.78,1],x.n)
D.cP1=w([0.93,0.975,1],x.n)
D.auQ=w([A.c,A.h2,A.pg,A.aB],x.O)
D.fy5=new B.xL("Moon",1737,4291941851)
D.fy2=new B.xL("Earth",6371,4281908728)
D.fy6=new B.xL("Neptune",24622,4284524026)
D.fy7=new B.xL("Saturn",58232,4294829706)
D.fy3=new B.xL("Jupiter",69911,4294677052)
D.fy8=new B.xL("Sun",696340,4294688548)
D.fy9=new B.xL("Sirius A",119e4,4290763774)
D.fy0=new B.xL("Arcturus",179e5,4294818420)
D.fy1=new B.xL("Betelgeuse",531e6,4294472049)
D.fy4=new B.xL("UY Scuti",667e6,4293870660)
D.Po=w([D.fy5,D.fy2,D.fy6,D.fy7,D.fy3,D.fy8,D.fy9,D.fy0,D.fy1,D.fy4],C.ax("O<xL>"))
D.eBU=new C.bt("glow","Glow",A.a_1)
D.ezz=new C.bt("rainbow","Rainbow",A.na)
D.ezW=new C.bt("stars","Stars",A.i_)
D.ezj=new C.bt("sparks","Sparks",A.dW)
D.eBc=new C.bt("fire","Fire",A.vu)
D.cQN=w([D.eBU,D.ezz,D.ezW,D.ezj,D.eBc],x.c)
D.auU=w([A.bo,A.ay,A.cj,A.d6],x.O)
D.cRN=w([0.2,1],x.n)
D.eGi=new B.uF("Radar","Shows your height above the ground.",0.1,0)
D.eGj=new B.uF("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eGg=new B.uF("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.av1=w([D.eGi,D.eGj,D.eGg],x._)
D.eAu=new C.bt("attract","Attract",A.y9)
D.eAg=new C.bt("scare","Scare",A.qZ)
D.ezs=new C.bt("food","Food",A.tQ)
D.bCV=new C.a0(983158,"MaterialIcons",!1)
D.eAN=new C.bt("hunt","Hunt",D.bCV)
D.cSp=w([D.eAu,D.eAg,D.ezs,D.eAN],x.c)
D.cSO=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cT2=w([47,100,220,470,1000],x.n)
D.avj=w([0,2,4,7,9],x.t)
D.HK={volts:0}
D.a3a=new C.bm(D.HK,[3],x.J)
D.I5=new C.eq(["b","battery",0.2,0.3,D.a3a])
D.e_b={on:0}
D.diZ=new C.bm(D.e_b,[1],x.J)
D.CM=new C.eq(["s","switch",0.5,0.3,D.diZ])
D.eEr=new C.eq(["l","bulb",0.8,0.3,A.iY])
D.cOI=w([D.I5,D.CM,D.eEr],x.d)
D.CL=new C.cH(["b",0,"s",0])
D.eDs=new C.cH(["s",1,"l",0])
D.aLd=new C.cH(["l",1,"b",1])
D.d3P=w([D.CL,D.eDs,D.aLd],x.o)
D.cOb=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ebD=new B.mv("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cOI,D.d3P,D.cOb)
D.aFk={ohms:0}
D.aCU=new C.bm(D.aFk,[220],x.J)
D.eDV=new C.eq(["r","resistor",0.5,0.3,D.aCU])
D.eEG=new C.eq(["d","led",0.8,0.3,A.iY])
D.d6L=w([D.I5,D.eDV,D.eEG],x.d)
D.eCO=new C.cH(["b",0,"r",0])
D.eDm=new C.cH(["r",1,"d",0])
D.eCU=new C.cH(["d",1,"b",1])
D.deO=w([D.eCO,D.eDm,D.eCU],x.o)
D.d7a=w(["led","diode","indicator"],x.s)
D.ebK=new B.mv("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d6L,D.deO,D.d7a)
D.a4r={level:0}
D.din=new C.bm(D.a4r,[0.2],x.J)
D.eE0=new C.eq(["p","pot",0.5,0.3,D.din])
D.eE2=new C.eq(["m","motor",0.8,0.3,A.iY])
D.cP_=w([D.I5,D.eE0,D.eE2],x.d)
D.eCN=new C.cH(["b",0,"p",0])
D.eDi=new C.cH(["p",1,"m",0])
D.eDe=new C.cH(["m",1,"b",1])
D.daU=w([D.eCN,D.eDi,D.eDe],x.o)
D.d3y=w(["fan","motor","spin","dimmer"],x.s)
D.ebB=new B.mv("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cP_,D.daU,D.d3y)
D.a37=new C.bm(D.a4r,[0.9],x.J)
D.aLk=new C.eq(["s","solar",0.25,0.3,D.a37])
D.aLj=new C.eq(["l","bulb",0.75,0.3,A.iY])
D.cRv=w([D.aLk,D.aLj],x.d)
D.eDp=new C.cH(["s",0,"l",0])
D.eDd=new C.cH(["l",1,"s",1])
D.cPJ=w([D.eDp,D.eDd],x.o)
D.dbs=w(["solar","sun","without battery","no battery","free"],x.s)
D.ebE=new B.mv("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cRv,D.cPJ,D.dbs)
D.eEJ=new C.eq(["c","crank",0.25,0.3,D.a37])
D.d1Y=w([D.eEJ,D.aLj],x.d)
D.eCR=new C.cH(["c",0,"l",0])
D.eDc=new C.cH(["l",1,"c",1])
D.d2v=w([D.eCR,D.eDc],x.o)
D.d26=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ebA=new B.mv("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d1Y,D.d2v,D.d26)
D.dim=new C.bm(D.a4r,[0.7],x.J)
D.eE5=new C.eq(["t","turbine",0.25,0.3,D.dim])
D.eDT=new C.eq(["m","motor",0.75,0.3,A.iY])
D.cXJ=w([D.eE5,D.eDT],x.d)
D.eDA=new C.cH(["t",0,"m",0])
D.eDf=new C.cH(["m",1,"t",1])
D.cWL=w([D.eDA,D.eDf],x.o)
D.d0Q=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ebx=new B.mv("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cXJ,D.cWL,D.d0Q)
D.aCR=new C.bm(D.HK,[9],x.J)
D.a5o=new C.eq(["b","battery",0.2,0.3,D.aCR])
D.aLi=new C.eq(["r","radio",0.8,0.3,A.iY])
D.dc1=w([D.a5o,D.CM,D.aLi],x.d)
D.eDu=new C.cH(["s",1,"r",0])
D.aLe=new C.cH(["r",1,"b",1])
D.bVJ=w([D.CL,D.eDu,D.aLe],x.o)
D.daH=w(["radio","music","listen"],x.s)
D.ebJ=new B.mv("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dc1,D.bVJ,D.daH)
D.djq=new C.bm(D.HK,[12],x.J)
D.aLh=new C.eq(["b","battery",0.2,0.3,D.djq])
D.eEs=new C.eq(["t","tv",0.8,0.3,A.iY])
D.cOJ=w([D.aLh,D.CM,D.eEs],x.d)
D.eDv=new C.cH(["s",1,"t",0])
D.aLf=new C.cH(["t",1,"b",1])
D.d4T=w([D.CL,D.eDv,D.aLf],x.o)
D.dc_=w(["tv","television","screen","watch"],x.s)
D.ebu=new B.mv("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cOJ,D.d4T,D.dc_)
D.eEi=new C.eq(["z","buzzer",0.8,0.3,A.iY])
D.cvk=w([D.I5,D.CM,D.eEi],x.d)
D.eDw=new C.cH(["s",1,"z",0])
D.eDO=new C.cH(["z",1,"b",1])
D.cK1=w([D.CL,D.eDw,D.eDO],x.o)
D.d96=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ebG=new B.mv("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cvk,D.cK1,D.d96)
D.eE1=new C.eq(["h","heater",0.8,0.3,A.iY])
D.d_z=w([D.a5o,D.CM,D.eE1],x.d)
D.eDr=new C.cH(["s",1,"h",0])
D.eD1=new C.cH(["h",1,"b",1])
D.cKJ=w([D.CL,D.eDr,D.eD1],x.o)
D.cfw=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ebv=new B.mv("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d_z,D.cKJ,D.cfw)
D.eEu=new C.eq(["s","solar",0.2,0.25,D.a37])
D.djv=new C.bm(D.aFk,[100],x.J)
D.eEx=new C.eq(["r","resistor",0.55,0.25,D.djv])
D.eEE=new C.eq(["c","capacitor",0.85,0.25,A.iY])
D.eDY=new C.eq(["q","resistor",0.55,0.6,D.aCU])
D.eEv=new C.eq(["d","led",0.85,0.6,A.iY])
D.d4v=w([D.eEu,D.eEx,D.eEE,D.eDY,D.eEv],x.d)
D.eDq=new C.cH(["s",0,"r",0])
D.eDl=new C.cH(["r",1,"c",0])
D.eCT=new C.cH(["c",1,"s",1])
D.eCS=new C.cH(["c",0,"q",0])
D.eDk=new C.cH(["q",1,"d",0])
D.eCV=new C.cH(["d",1,"c",1])
D.cUS=w([D.eDq,D.eDl,D.eCT,D.eCS,D.eDk,D.eCV],x.o)
D.d1j=w(["capacitor","store","charge","flash"],x.s)
D.ebI=new B.mv("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d4v,D.cUS,D.d1j)
D.eE8=new C.eq(["b","battery",0.15,0.3,D.a3a])
D.eEK=new C.eq(["l1","bulb",0.5,0.3,A.iY])
D.eEf=new C.eq(["l2","bulb",0.85,0.3,A.iY])
D.cMZ=w([D.eE8,D.eEK,D.eEf],x.d)
D.eCM=new C.cH(["b",0,"l1",0])
D.eD9=new C.cH(["l1",1,"l2",0])
D.eDa=new C.cH(["l2",1,"b",1])
D.cYn=w([D.eCM,D.eD9,D.eDa],x.o)
D.dbL=w(["series","two bulbs","dim"],x.s)
D.eby=new B.mv("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cMZ,D.cYn,D.dbL)
D.e_o={volts:0,charge:1}
D.djA=new C.bm(D.e_o,[1.5,0],x.J)
D.eEC=new C.eq(["b","battery",0.75,0.3,D.djA])
D.cMq=w([D.aLk,D.eEC],x.d)
D.eDo=new C.cH(["s",0,"b",0])
D.eCQ=new C.cH(["b",1,"s",1])
D.cV7=w([D.eDo,D.eCQ],x.o)
D.d1r=w(["charge","rechargeable","flat","recharge"],x.s)
D.ebw=new B.mv("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cMq,D.cV7,D.d1r)
D.djp=new C.bm(D.HK,[4.5],x.J)
D.eE3=new C.eq(["b","battery",0.2,0.3,D.djp])
D.aLg=new C.eq(["p","phone",0.8,0.3,A.iY])
D.cXz=w([D.eE3,D.CM,D.aLg],x.d)
D.eDt=new C.cH(["s",1,"p",0])
D.a5n=new C.cH(["p",1,"b",1])
D.d88=w([D.CL,D.eDt,D.a5n],x.o)
D.d9u=w(["phone","charger","usb","mobile"],x.s)
D.ebC=new B.mv("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cXz,D.d88,D.d9u)
D.eDQ=new C.eq(["f","fan",0.8,0.3,A.iY])
D.c7G=w([D.I5,D.eDQ],x.d)
D.eCL=new C.cH(["b",0,"f",0])
D.eD_=new C.cH(["f",1,"b",1])
D.cLb=w([D.eCL,D.eD_],x.o)
D.d3x=w(["fan","cool","air","wind"],x.s)
D.ebL=new B.mv("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c7G,D.cLb,D.d3x)
D.eEm=new C.eq(["b","battery",0.15,0.2,D.a3a])
D.eDR=new C.eq(["a","ammeter",0.5,0.2,A.iY])
D.eDP=new C.eq(["l","bulb",0.85,0.2,A.iY])
D.eEo=new C.eq(["v","voltmeter",0.5,0.6,A.iY])
D.d1K=w([D.eEm,D.eDR,D.eDP,D.eEo],x.d)
D.eCJ=new C.cH(["b",0,"a",0])
D.eCI=new C.cH(["a",1,"l",0])
D.eDC=new C.cH(["v",0,"l",0])
D.eDD=new C.cH(["v",1,"l",1])
D.cUZ=w([D.eCJ,D.eCI,D.aLd,D.eDC,D.eDD],x.o)
D.deN=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ebH=new B.mv("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d1K,D.cUZ,D.deN)
D.eEN=new C.eq(["b","battery",0.15,0.2,D.aCR])
D.eE7=new C.eq(["t","tv",0.55,0.2,A.iY])
D.aCS=new C.bm(D.HK,[5],x.J)
D.eDW=new C.eq(["c","buck",0.4,0.5,D.aCS])
D.eE9=new C.eq(["p","phone",0.8,0.5,A.iY])
D.cSQ=w([D.eEN,D.eE7,D.eDW,D.eE9],x.d)
D.eCP=new C.cH(["b",0,"t",0])
D.aLb=new C.cH(["b",0,"c",0])
D.aLc=new C.cH(["c",1,"p",0])
D.cXw=w([D.eCP,D.aLf,D.aLb,D.aLc,D.a5n],x.o)
D.cR4=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ebz=new B.mv("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cSQ,D.cXw,D.cR4)
D.eDX=new C.eq(["c","buck",0.5,0.3,D.aCS])
D.cKA=w([D.aLh,D.eDX,D.aLg],x.d)
D.cP8=w([D.aLb,D.aLc,D.a5n],x.o)
D.ciU=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ebt=new B.mv("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cKA,D.cP8,D.ciU)
D.eEd=new C.eq(["d","diode",0.5,0.3,A.iY])
D.cYA=w([D.a5o,D.eEd,D.aLi],x.d)
D.eCK=new C.cH(["b",0,"d",0])
D.eCW=new C.cH(["d",1,"r",0])
D.cxP=w([D.eCK,D.eCW,D.aLe],x.o)
D.cQK=w(["diode","protect","backwards","one way"],x.s)
D.ebF=new B.mv("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.cYA,D.cxP,D.cQK)
D.Ps=w([D.ebD,D.ebK,D.ebB,D.ebE,D.ebA,D.ebx,D.ebJ,D.ebu,D.ebG,D.ebv,D.ebI,D.eby,D.ebw,D.ebC,D.ebL,D.ebH,D.ebz,D.ebt,D.ebF],C.ax("O<mv>"))
D.fUn=new B.FE("Moon",1.62,A.dA,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fUl=new B.FE("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.fUo=new B.FE("Mercury",3.7,A.jP,"Mercury is small, so its gravity is like Mars.")
D.fUi=new B.FE("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.fUk=new B.FE("Earth",9.81,A.aS,"On Earth gravity is strong, and the air also slows you down.")
D.fUm=new B.FE("Neptune",11.15,A.d6,"Neptune pulls a little harder than Earth.")
D.fUj=new B.FE("Jupiter",24.79,A.ct,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.r8=w([D.fUn,D.fUl,D.fUo,D.fUi,D.fUk,D.fUm,D.fUj],C.ax("O<FE>"))
D.cUQ=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a1K=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cVu=w([0.2,0.5,0.8],x.n)
D.bBq=new C.a0(63040,"MaterialIcons",!1)
D.eAk=new C.bt("peg","Peg",D.bBq)
D.ezw=new C.bt("bar","Bar",V.Bt)
D.ezZ=new C.bt("erase","Erase",A.MJ)
D.cVF=w([D.eAk,D.ezw,D.ezZ],x.c)
D.eJ8=new C.cP(A.bh,A.J,4)
D.cVP=w([D.eJ8],x.q)
D.avy=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aU3=new B.JU(0,"accordion")
D.cLt=w([A.ji,A.Bu,A.Bi],x.w)
D.cSh=w(["Mail","SMS","Ad"],x.s)
D.cLX=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fSA=new B.A9(D.aU3,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.awf,D.cLt,D.cSh,D.cLX)
D.a8L=new B.JU(1,"flip")
D.d1d=w([A.pN,A1.G5,A.tR],x.w)
D.cXf=w(["Unlock","Verify","Secure"],x.s)
D.cKw=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fSz=new B.A9(D.a8L,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.avO,D.d1d,D.cXf,D.cKw)
D.aU4=new B.JU(2,"towers")
D.cW6=w([A.y4,A.pS,A.hL],x.w)
D.cVL=w(["Save","Grow","Earn"],x.s)
D.cyD=w(["","",""],x.s)
D.fSB=new B.A9(D.aU4,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a1B,D.cW6,D.cVL,D.cyD)
D.a8M=new B.JU(3,"assemble")
D.d29=w([A.nd,A.h7,A.dW],x.w)
D.cRG=w(["Launch","Charge","Shine"],x.s)
D.cZM=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fSD=new B.A9(D.a8M,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.auf,D.d29,D.cRG,D.cZM)
D.aU5=new B.JU(4,"carousel")
D.d1Z=w([A.b8,A.fb],x.O)
D.cSr=w([A.mn,A.akb,A.a_K],x.w)
D.cNm=w(["Explore","Discover","Learn"],x.s)
D.cXE=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fSy=new B.A9(D.aU5,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d1Z,D.cSr,D.cNm,D.cXE)
D.aU6=new B.JU(5,"burst")
D.cVH=w([A.j6,A.t4],x.O)
D.cLS=w([A.le,A.mm,A.hZ],x.w)
D.cMc=w(["Cheer","Win","Love"],x.s)
D.cOh=w(["Make some noise","First place","Share the joy"],x.s)
D.fSC=new B.A9(D.aU6,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cVH,D.cLS,D.cMc,D.cOh)
D.avz=w([D.fSA,D.fSz,D.fSB,D.fSD,D.fSy,D.fSC],C.ax("O<A9>"))
D.eAm=new C.bt("skin","Skin",A.akc)
D.eBH=new C.bt("muscle","Muscles",A.MV)
D.eBq=new C.bt("organ","Organs",A.hZ)
D.bAS=new C.a0(62747,"MaterialIcons",!1)
D.eBv=new C.bt("bone","Skeleton",D.bAS)
D.eBN=new C.bt("vessel","Blood vessels",A.pU)
D.cWb=w([D.eAm,D.eBH,D.eBq,D.eBv,D.eBN],x.c)
D.eGk=new B.uF("Simple legs","Light. Land gently.",0.15,0.2)
D.eGm=new B.uF("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eGp=new B.uF("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.BR=w([D.eGk,D.eGm,D.eGp],x._)
D.cXM=w([1.77,3.55,7.15,16.7],x.n)
D.d_a=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.ew9=new C.y("spiral","Spiral")
D.efT=new C.y("barred","Barred spiral")
D.er0=new C.y("elliptical","Elliptical")
D.d_P=w([D.ew9,D.efT,D.er0],x.K)
D.eCq=new C.cH(["beat",0.18,0.28,0])
D.eDx=new C.cH(["burst",0.7,0.2,0])
D.eDI=new C.cH(["delay",0.45,0.5,1])
D.eDh=new C.cH(["ripple",0.75,0.6,3])
D.cRq=w([D.eCq,D.eDx,D.eDI,D.eDh],x.e)
D.d0E=w([N.kX,M.I4,F.RU],x.u)
D.fRQ=new B.Fq("First spark","A clock lights a burst and a ripple",D.cRq,D.d0E)
D.eCZ=new C.cH(["beat",0.15,0.3,1])
D.eC4=new C.cH(["ripple",0.62,0.15,0])
D.eDE=new C.cH(["delay",0.4,0.45,0])
D.eCF=new C.cH(["ripple",0.7,0.45,0])
D.eCm=new C.cH(["delay",0.4,0.7,1])
D.eDj=new C.cH(["shake",0.75,0.75,0])
D.dcK=w([D.eCZ,D.eC4,D.eDE,D.eCF,D.eCm,D.eDj],x.e)
D.edd=new C.y(2,4)
D.aL1=new C.y(4,5)
D.cUH=w([N.kX,M.I4,F.RU,D.edd,D.aL1],x.u)
D.fRS=new B.Fq("Heartbeat","Two thumps, then a shake",D.dcK,D.cUH)
D.eCv=new C.cH(["dice",0.15,0.7,1])
D.eDK=new C.cH(["echo",0.4,0.7,0])
D.eCD=new C.cH(["comet",0.7,0.5,4])
D.eDy=new C.cH(["burst",0.72,0.2,1])
D.eCX=new C.cH(["burst",0.3,0.25,0])
D.eCw=new C.cH(["pop",0.55,0.85,0])
D.cf5=w([D.eCv,D.eDK,D.eCD,D.eDy,D.eCX,D.eCw],x.e)
D.ecE=new C.y(1,3)
D.ecF=new C.y(1,4)
D.aL_=new C.y(0,5)
D.d1U=w([N.kX,W.ul,D.ecE,D.ecF,D.aL_],x.u)
D.fRR=new B.Fq("Fireworks","Dice launch comets that burst in colour",D.cf5,D.d1U)
D.eCA=new C.cH(["beat",0.15,0.2,2])
D.eD6=new C.cH(["chance",0.4,0.2,0])
D.eCs=new C.cH(["ball",0.7,0.12,3])
D.eCf=new C.cH(["chance",0.4,0.5,1])
D.eDJ=new C.cH(["ball",0.3,0.08,1])
D.eC8=new C.cH(["ripple",0.7,0.55,3])
D.c87=w([D.eCA,D.eD6,D.eCs,D.eCf,D.eDJ,D.eC8],x.e)
D.ede=new C.y(2,5)
D.cv4=w([N.kX,W.ul,M.a5h,F.RV,D.ede],x.u)
D.fRP=new B.Fq("Rain","Balls fall at random and splash",D.c87,D.cv4)
D.eD7=new C.cH(["beat",0.12,0.45,2])
D.eDz=new C.cH(["toggle",0.38,0.2,0])
D.eDG=new C.cH(["wash",0.7,0.15,4])
D.eCu=new C.cH(["count3",0.38,0.45,0])
D.eDB=new C.cH(["burst",0.72,0.4,0])
D.eCY=new C.cH(["light",0.55,0.7,1])
D.eCg=new C.cH(["pop",0.8,0.8,4])
D.d4t=w([D.eD7,D.eDz,D.eDG,D.eCu,D.eDB,D.eCY,D.eCg],x.e)
D.edD=new C.y(3,6)
D.cbf=w([N.kX,W.ul,M.a5h,F.RV,D.aL_,D.edD],x.u)
D.fRN=new B.Fq("Disco","A beat drives lights, washes and bursts",D.d4t,D.cbf)
D.eDN=new C.cH(["button",0.12,0.2,0])
D.eCa=new C.cH(["delay",0.34,0.2,1])
D.eDM=new C.cH(["light",0.56,0.2,1])
D.eDF=new C.cH(["delay",0.56,0.45,1])
D.eD8=new C.cH(["ball",0.34,0.6,0])
D.eCe=new C.cH(["delay",0.34,0.8,1])
D.eC3=new C.cH(["burst",0.7,0.8,5])
D.bWn=w([D.eDN,D.eCa,D.eDM,D.eDF,D.eD8,D.eCe,D.eC3],x.e)
D.efC=new C.y(5,6)
D.d9f=w([N.kX,W.ul,F.RU,F.RV,D.aL1,D.efC],x.u)
D.fRO=new B.Fq("Domino","Tap the button and watch it run down the line",D.bWn,D.d9f)
D.avS=w([D.fRQ,D.fRS,D.fRR,D.fRP,D.fRN,D.fRO],C.ax("O<Fq>"))
D.d_X=w([0.05,0.15,0.25],x.n)
D.d0a=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d0P=w([1.5,3,4.5,9,12],x.n)
D.ez4=new C.bt("dice","Dice",A.ml)
D.eA4=new C.bt("coin","Coin",K.xY)
D.eBI=new C.bt("num","Number",A.y7)
D.d0Z=w([D.ez4,D.eA4,D.eBI],x.c)
D.d11=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fya=new B.OD("Moon",1.62,0,4291941851)
D.fyb=new B.OD("Mars",3.71,0.01,4294472049)
D.fyc=new B.OD("Earth",9.81,1,4281908728)
D.fye=new B.OD("Jupiter",24.79,1.4,4294677052)
D.fyd=new B.OD("Sun",274,2,4294688548)
D.yx=w([D.fya,D.fyb,D.fyc,D.fye,D.fyd],C.ax("O<OD>"))
D.avY=w([A.cg,A.aM,A.b4,A.aS,A.by,A.bU,A.ct,A.hv],x.O)
D.dYP={H:0}
D.dj_=new C.bm(D.dYP,[2],x.I)
D.dky=new B.t5("Hydrogen","H\u2082",D.dj_,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dYQ={H:0,Cl:1}
D.djc=new C.bm(D.dYQ,[1,1],x.I)
D.dkA=new B.t5("Hydrogen chloride","HCl",D.djc,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dYR={H:0,O:1}
D.diJ=new C.bm(D.dYR,[2,1],x.I)
D.dkB=new B.t5("Water","H\u2082O",D.diJ,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dZ3={N:0,H:1}
D.djz=new C.bm(D.dZ3,[1,3],x.I)
D.dkJ=new B.t5("Ammonia","NH\u2083",D.djz,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a4q={C:0,H:1}
D.djt=new C.bm(D.a4q,[1,4],x.I)
D.dkC=new B.t5("Methane","CH\u2084",D.djt,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dYS={H:0,S:1}
D.dhS=new C.bm(D.dYS,[2,1],x.I)
D.dkI=new B.t5("Hydrogen sulfide","H\u2082S",D.dhS,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dZ8={O:0}
D.djx=new C.bm(D.dZ8,[2],x.I)
D.dkK=new B.t5("Oxygen","O\u2082",D.djx,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dZ2={N:0}
D.dj0=new C.bm(D.dZ2,[2],x.I)
D.dkz=new B.t5("Nitrogen","N\u2082",D.dj0,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dYD={C:0,O:1}
D.djF=new C.bm(D.dYD,[1,2],x.I)
D.dkG=new B.t5("Carbon dioxide","CO\u2082",D.djF,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aFh={C:0,H:1,O:2}
D.dhE=new C.bm(D.aFh,[1,2,1],x.I)
D.dkH=new B.t5("Formaldehyde","CH\u2082O",D.dhE,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.djs=new C.bm(D.a4q,[2,4],x.I)
D.dkE=new B.t5("Ethene","C\u2082H\u2084",D.djs,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.djr=new C.bm(D.a4q,[2,6],x.I)
D.dkD=new B.t5("Ethane","C\u2082H\u2086",D.djr,"Two carbons joined by a single bond, each holding three hydrogens.")
D.dhF=new C.bm(D.aFh,[1,4,1],x.I)
D.dkF=new B.t5("Methanol","CH\u2083OH",D.dhF,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a2_=w([D.dky,D.dkA,D.dkB,D.dkJ,D.dkC,D.dkI,D.dkK,D.dkz,D.dkG,D.dkH,D.dkE,D.dkD,D.dkF],C.ax("O<t5>"))
D.d2_=w([A.bU,A.aS,A.dN,A.b4],x.O)
D.d2U=w([],x.h)
D.d2W=w([],x.B)
D.a28=w([],x.F)
D.e5i=new B.e9("battery","Battery","\ud83d\udd0b",A.b4,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.e5o=new B.e9("solar","Solar panel","\u2600\ufe0f",A.cj,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e62=new B.e9("crank","Hand crank","\ud83d\udd04",A.ct,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.e5F=new B.e9("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aS,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e5a=new B.e9("buck","Step-down converter","\ud83d\udd3d",A.hv,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.e5D=new B.e9("regulator","5 V regulator","\ud83e\uddca",A.bJ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e67=new B.e9("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e5P=new B.e9("ldr","Light sensor","\ud83c\udf1e",A.dN,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.e5t=new B.e9("switch","Switch","\ud83c\udf9a\ufe0f",A.by,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e64=new B.e9("fuse","Fuse","\ud83e\uddef",A.cg,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e52=new B.e9("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hv,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e5Q=new B.e9("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e5S=new B.e9("bulb","Light bulb","\ud83d\udca1",A.dN,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.e5q=new B.e9("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.e5u=new B.e9("motor","Motor","\u2699\ufe0f",A.bJ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e5M=new B.e9("buzzer","Buzzer","\ud83d\udd14",A.bU,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.e5j=new B.e9("heater","Heater","\ud83d\udd25",A.ct,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.e5H=new B.e9("capacitor","Capacitor","\ud83e\udeab",A.cr,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.e5z=new B.e9("radio","Radio","\ud83d\udcfb",A.nJ,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.e5w=new B.e9("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e59=new B.e9("voltmeter","Voltmeter","\ud83e\udded",A.bt,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.e5g=new B.e9("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.e5m=new B.e9("fan","Fan","\ud83c\udf00",A.aS,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e69=new B.e9("speaker","Speaker","\ud83d\udd0a",A.bU,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e5Z=new B.e9("clock","Digital clock","\u23f0",A.b4,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.e5C=new B.e9("calculator","Calculator","\ud83e\uddee",A.K6,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.e5f=new B.e9("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cr,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e68=new B.e9("router","WiFi router","\ud83d\udcf6",A.hv,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e6b=new B.e9("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e55=new B.e9("toycar","Toy car","\ud83d\ude97",A.ct,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e6c=new B.e9("kettle","Kettle","\ud83e\uded6",A.oq,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e5d=new B.e9("lamp","Desk lamp","\ud83e\ude94",A.dN,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.e5p=new B.e9("lights","Party lights","\ud83c\udf84",A.nJ,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.e5A=new B.e9("fridge","Fridge","\ud83e\uddca",A.hh,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e57=new B.e9("washer","Washing machine","\ud83e\udee7",A.cr,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e6_=new B.e9("blender","Blender","\ud83e\udd64",A.cg,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.e5x=new B.e9("drone","Drone","\ud83d\ude81",A.bJ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e5c=new B.e9("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.e5B=new B.e9("torch","Torch","\ud83d\udd26",A.bK,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e5X=new B.e9("neon","Neon sign","\ud83e\udea7",A.bU,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e58=new B.e9("microwave","Microwave","\ud83c\udf72",A.ct,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e5R=new B.e9("doorbell","Doorbell","\ud83d\udd14",A.cj,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.e5l=new B.e9("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e5L=new B.e9("console","Game console","\ud83c\udfae",A.by,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e61=new B.e9("heartmon","Heart monitor","\ud83e\ude7a",A.h0,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e56=new B.e9("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.e5G=new B.e9("lighthouse","Lighthouse","\ud83d\uddfc",A.dN,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e5O=new B.e9("discoball","Disco ball","\ud83e\udea9",A.nJ,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e66=new B.e9("robot","Robot","\ud83e\udd16",A.aS,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e54=new B.e9("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e6a=new B.e9("ledstrip","LED strip","\ud83c\udf08",A.bU,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e5W=new B.e9("pump","Water pump","\ud83d\udeb0",A.aS,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.e5I=new B.e9("hairdryer","Hair dryer","\ud83d\udca8",A.j6,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e5U=new B.e9("headphones","Headphones","\ud83c\udfa7",A.by,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.e5e=new B.e9("smartwatch","Apple Watch Ultra","\u231a",A.bt,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e65=new B.e9("tablet","iPad Pro M5","\ud83d\udcf2",A.cr,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e51=new B.e9("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h0,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.e5y=new B.e9("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bq,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.e5r=new B.e9("appletv","Apple TV 4K","\ud83d\udcfa",A.bR,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e5N=new B.e9("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.t1,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e53=new B.e9("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.e5h=new B.e9("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d6,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e63=new B.e9("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cy,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.e5J=new B.e9("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bo,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.e5E=new B.e9("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cd,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e5V=new B.e9("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.e5s=new B.e9("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b4,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.e5K=new B.e9("honor","Honor Magic V5","\ud83d\udcf1",A.cr,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e5T=new B.e9("vivo","vivo X300 Pro","\ud83d\udcf1",A.ct,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e5Y=new B.e9("ereader","Kindle Scribe","\ud83d\udcd6",A.bq,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e50=new B.e9("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c9,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.e5v=new B.e9("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cy,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.e5n=new B.e9("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e5b=new B.e9("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dN,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.e5k=new B.e9("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e60=new B.e9("vision","Apple Vision Pro","\ud83e\udd7d",A.by,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.PR=w([D.e5i,D.e5o,D.e62,D.e5F,D.e5a,D.e5D,D.e67,D.e5P,D.e5t,D.e64,D.e52,D.e5Q,D.e5S,D.e5q,D.e5u,D.e5M,D.e5j,D.e5H,D.e5z,D.e5w,D.e59,D.e5g,D.e5m,D.e69,D.e5Z,D.e5C,D.e5f,D.e68,D.e6b,D.e55,D.e6c,D.e5d,D.e5p,D.e5A,D.e57,D.e6_,D.e5x,D.e5c,D.e5B,D.e5X,D.e58,D.e5R,D.e5l,D.e5L,D.e61,D.e56,D.e5G,D.e5O,D.e66,D.e54,D.e6a,D.e5W,D.e5I,D.e5U,D.e5e,D.e65,D.e51,D.e5y,D.e5r,D.e5N,D.e53,D.e5h,D.e63,D.e5J,D.e5E,D.e5V,D.e5s,D.e5K,D.e5T,D.e5Y,D.e50,D.e5v,D.e5n,D.e5b,D.e5k,D.e60],C.ax("O<e9>"))
D.d3i=w([0,0.46,0.82],x.n)
D.d3t=w([5,10,15,25,45,60],x.t)
D.d3N=w([-0.045,0.03,-0.015],x.n)
D.d4a=w([0.9,0.97,1],x.n)
D.awn=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.tZ=w([0.05,0.2,0.35],x.n)
D.cMg=w([D.Et,D.Et],x.O)
D.cRm=w([A.EE,A.M],x.O)
D.cQo=w([A.fD,A.hu],x.O)
D.cKt=w([A.fb,A.nI],x.O)
D.c7E=w([A.lA,A.dv],x.O)
D.awo=w([D.cMg,D.cRm,D.cQo,D.cKt,D.c7E],x.Q)
D.fxZ=new B.uS("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fy_=new B.uS("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fxR=new B.uS("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fxY=new B.uS("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fxW=new B.uS("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fxS=new B.uS("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fxX=new B.uS("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fxT=new B.uS("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fxV=new B.uS("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fxU=new B.uS("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.BX=w([D.fxZ,D.fy_,D.fxR,D.fxY,D.fxW,D.fxS,D.fxX,D.fxT,D.fxV,D.fxU],C.ax("O<uS>"))
D.bdC=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d5j=w([D.Et,D.bdC,D.acO,A.acl],x.O)
D.b_P=new C.ac(0,A.G,A.hI,A.dE,6)
D.d6b=w([D.b_P],x.V)
D.ec1=new C.y(0,"AND")
D.ecG=new C.y(1,"Adder")
D.edf=new C.y(2,"Blinker")
D.edE=new C.y(3,"Memory")
D.d6W=w([D.ec1,D.ecG,D.edf,D.edE],x.E)
D.awA=w([-104,0,104],x.n)
D.awB=w([-14,3],x.n)
D.d7p=w([-16,16],x.n)
D.awC=w([-22,22],x.n)
D.d7x=w([-8,0,8],x.n)
D.d7y=w([-8,8],x.n)
D.awF=w([-92,0,92],x.n)
D.d7T=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eGh=new B.uF("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eGo=new B.uF("Medium tank","Balanced.",0.35,1)
D.eGn=new B.uF("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Q3=w([D.eGh,D.eGo,D.eGn],x._)
D.nh=w([0.04,0.2,0.36],x.n)
D.awP=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eBp=new C.bt(D.aU3,"Fold",K.alc)
D.eAB=new C.bt(D.a8L,"Flip",A.FJ)
D.bBa=new C.a0(62889,"MaterialIcons",!1)
D.eBG=new C.bt(D.aU4,"Rise",D.bBa)
D.alq=new C.a0(983870,"MaterialIcons",!1)
D.eyE=new C.bt(D.a8M,"Assemble",D.alq)
D.eyN=new C.bt(D.aU5,"Spin",D.ajG)
D.eyK=new C.bt(D.aU6,"Pop",A.le)
D.d9c=w([D.eBp,D.eAB,D.eBG,D.eyE,D.eyN,D.eyK],C.ax("O<+(JU,n,a0)>"))
D.awU=w([A.bU,A.dN,A.bt,A.aS,A.by,A.cg],x.O)
D.d9n=w([A.aS,A.ct,A.ct,A.b4],x.O)
D.d9z=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.exC=new C.y("Make the output turn HALF as fast as the input.",0.5)
D.ej0=new C.y("Make the output turn TWICE as fast.",2)
D.ecQ=new C.y("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.ewj=new C.y("Make the output turn 4 times faster.",4)
D.eoz=new C.y("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.erB=new C.y("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.eq7=new C.y("Make the output turn 3 times faster.",3)
D.eqS=new C.y("Make the output spin at the same speed as the input, using four different gears.",1)
D.awZ=w([D.exC,D.ej0,D.ecQ,D.ewj,D.eoz,D.erB,D.eq7,D.eqS],C.ax("O<+(n,N)>"))
D.dax=w([3,4.5,5,6,9],x.n)
D.b0m=new C.ac(0,A.G,A.aX,A.J,16)
D.daY=w([D.b0m],x.V)
D.Q5=w([A.bU,A.cj,A.b4,A.aS,A.by,A.cg,A.c,A.ct],x.O)
D.dbp=w(["solar","turbine","crank","pot"],x.s)
D.dbJ=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.dbP=w([0,0.35,0.75,1],x.n)
D.ez_=new C.bt("drop","Drop",D.al1)
D.ez1=new C.bt("weight","Weight",R.alu)
D.eBB=new C.bt("cannon","Newton's cannon",A.akp)
D.dcs=w([D.ez_,D.ez1,D.eBB],x.c)
D.euY=new C.y("piano","Piano")
D.euE=new C.y("organ","Organ")
D.epP=new C.y("bell","Bell")
D.ev_=new C.y("pluck","Pluck")
D.ewi=new C.y("synth","Synth")
D.erw=new C.y("flute","Flute")
D.axg=w([D.euY,D.euE,D.epP,D.ev_,D.ewi,D.erw],x.K)
D.dcY=w(["volts","level","ohms","on"],x.s)
D.ded=w([A.ji,A.Bu,A.Bi,A.pN,A1.G5,A.tR,A.y4,A.pS,A.hL,A.nd,A.h7,A.dW,A.hZ,A.i_,A.mm,A.lK,A.y5,A.r5,A.lL,A.FB,A.tQ,A.MX,A.Bk,A.akX,A.MN,A.y0,A.MV,A.akz,T.alm,A.le],x.w)
D.df6=w([0.72,1],x.n)
D.dfh=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e_g={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dhy=new C.bm(D.e_g,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aFj={A:0,T:1,C:2,G:3}
D.a31=new C.bm(D.aFj,["U","A","G","C"],x.l)
D.dhG=new C.bm(D.aFj,["T","A","G","C"],x.l)
D.dZ_={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d23=w([0,2,4,5,7,9,11],x.t)
D.cLz=w([0,2,3,5,7,8,10],x.t)
D.d78=w([0,3,5,6,7,10],x.t)
D.C2=new C.bm(D.dZ_,[D.avj,D.d23,D.cLz,D.d78,D.anW],C.ax("bm<n,ai<H>>"))
D.e_4={A:0,T:1,U:2,C:3,G:4}
D.dhV=new C.bm(D.e_4,[A.cg,A.cr,A.cr,A.aM,A.b4],C.ax("bm<n,w>"))
D.dYn={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fLw=new B.xN("Switch",F.Nk,A.cj,0,"Tap it to turn it ON or OFF.")
D.fLs=new B.xN("Blinker",A.oE,A.bt,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fLt=new B.xN("AND",D.alq,A.cr,2,"ON only when BOTH inputs are ON.")
D.bCD=new C.a0(63671,"MaterialIcons",!1)
D.fLr=new B.xN("OR",D.bCD,A.by,2,"ON when EITHER input is ON.")
D.fLu=new B.xN("XOR",G.a_6,A.bU,2,"ON when the inputs are DIFFERENT.")
D.fLo=new B.xN("NAND",A.tG,A.aS,2,"OFF only when BOTH inputs are ON.")
D.bBJ=new C.a0(63176,"MaterialIcons",!1)
D.fLp=new B.xN("NOR",D.bBJ,A.hv,2,"ON only when BOTH inputs are OFF.")
D.fLq=new B.xN("NOT",Z.G1,A.ct,1,"Flips the signal: ON becomes OFF.")
D.fLv=new B.xN("Light",A.r0,A.dN,1,"Glows when its input is ON.")
D.fLx=new B.xN("Buzzer",A.nX,A.cg,1,"Beeps while its input is ON.")
D.yJ=new C.bm(D.dYn,[D.fLw,D.fLs,D.fLt,D.fLr,D.fLu,D.fLo,D.fLp,D.fLq,D.fLv,D.fLx],C.ax("bm<n,xN>"))
D.e_1={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.ezn=new C.bt(3,20,1.9)
D.eyV=new C.bt(33,90,1.6)
D.eBZ=new C.bt(52,15,3.2)
D.eBX=new C.bt(45,-100,1.8)
D.eAv=new C.bt(-15,-60,1.9)
D.eA0=new C.bt(-25,140,2.4)
D.ezS=new C.bt(-82,0,2.2)
D.aCH=new C.bm(D.e_1,[D.ezn,D.eyV,D.eBZ,D.eBX,D.eAv,D.eA0,D.ezS],C.ax("bm<n,+(N,N,N)>"))
D.cL_=w([A.A],x.M)
D.cLh=w([A.ax,A.aC],x.M)
D.cTS=w([A.ax,A.A,A.aC],x.M)
D.cVd=w([A.ax,A.l3,A.A,A.lu,A.aC],x.M)
D.d6S=w([A.ax,A.l3,A.a3,A.a7,A.lu,A.aC],x.M)
D.diQ=new C.dS([1,D.cL_,2,D.cLh,3,D.cTS,4,A.axl,5,D.cVd,6,D.d6S],C.ax("dS<H,ai<da>>"))
D.dZ0={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eAH=new C.bt(1,A.bR,"Hydrogen")
D.ezC=new C.bt(4,A.bn,"Carbon")
D.eyF=new C.bt(3,A.d6,"Nitrogen")
D.eB_=new C.bt(2,A.ay,"Oxygen")
D.eAo=new C.bt(2,A.cj,"Sulfur")
D.eBy=new C.bt(1,A.bo,"Chlorine")
D.vP=new C.bm(D.dZ0,[D.eAH,D.ezC,D.eyF,D.eB_,D.eAo,D.eBy],C.ax("bm<n,+(H,w,n)>"))
D.e_m={Calm:0,Box:1,Sleep:2}
D.csB=w([4,2,6,0],x.n)
D.csI=w([4,4,4,4],x.n)
D.csJ=w([4,7,8,0],x.n)
D.Qu=new C.bm(D.e_m,[D.csB,D.csI,D.csJ],C.ax("bm<n,ai<N>>"))
D.dYw={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wr=new B.a_z(0,"source")
D.cUK=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fQt=new B.pV("Clock",A.oE,D.wr,A.bt,D.cUK)
D.fQp=new B.pV("Button",A.y9,D.wr,A.aM,A.T)
D.daJ=w(["random","quick","slow"],x.s)
D.fQA=new B.pV("Dice",A.ml,D.wr,A.bU,D.daJ)
D.bCi=new C.a0(63484,"MaterialIcons",!1)
D.Dr=new B.a_z(1,"logic")
D.df1=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fQw=new B.pV("Delay",D.bCi,D.Dr,A.cr,D.df1)
D.d3A=w(["fast","mid","slow"],x.s)
D.fQB=new B.pV("Echo",A.akQ,D.Dr,A.by,D.d3A)
D.fQy=new B.pV("Every 2nd",Z.G1,D.Dr,A.hv,A.T)
D.bBY=new C.a0(63309,"MaterialIcons",!1)
D.fQv=new B.pV("Every 3rd",D.bBY,D.Dr,A.aS,A.T)
D.bDU=new C.a0(983902,"MaterialIcons",!1)
D.bVO=w(["50%","25%","75%"],x.s)
D.fQD=new B.pV("Chance",D.bDU,D.Dr,A.ct,D.bVO)
D.qn=new B.a_z(2,"out")
D.fQr=new B.pV("Light",A.r0,D.qn,A.dN,A.T)
D.fQs=new B.pV("Burst",A.le,D.qn,A.bU,A.T)
D.fQq=new B.pV("Ripple",A.yd,D.qn,A.b8,A.T)
D.fQz=new B.pV("Ball",A.al3,D.qn,A.ct,A.T)
D.fQx=new B.pV("Comet",A.nd,D.qn,A.by,A.T)
D.bDE=new C.a0(983669,"MaterialIcons",!1)
D.fQC=new B.pV("Shake",D.bDE,D.qn,A.cg,A.T)
D.fQE=new B.pV("Pop",A.FC,D.qn,A.b4,A.T)
D.fQu=new B.pV("Wash",A.N_,D.qn,A.pj,A.T)
D.mu=new C.bm(D.dYw,[D.fQt,D.fQp,D.fQA,D.fQw,D.fQB,D.fQy,D.fQv,D.fQD,D.fQr,D.fQs,D.fQq,D.fQz,D.fQx,D.fQC,D.fQE,D.fQu],C.ax("bm<n,pV>"))
D.e_5={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.C3=new C.bm(D.e_5,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dYJ={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.za=new B.IR(0,"tv")
D.eHL=new B.m2("Samsung Neo QLED 8K",D.za,F.Ed,A.aS)
D.eHC=new B.m2("LG OLED evo G5",D.za,A.e9,A.h0)
D.eHt=new B.m2("Sony Bravia 9",D.za,A.qy,A.bq)
D.eHx=new B.m2("Apple TV 4K",D.za,A.e_,A.bR)
D.eHu=new B.m2("Bang and Olufsen Beovision",D.za,F.DW,F.t1)
D.I9=new B.IR(1,"iphone")
D.aLF=new B.m2("iPhone 18 Pro Max",D.I9,D.af3,A.c9)
D.w1=new B.IR(3,"fold")
D.bjw=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eHH=new B.m2("iPhone Fold",D.w1,D.bjw,A.b7)
D.un=new B.IR(2,"android")
D.eHI=new B.m2("Samsung Galaxy S26 Ultra",D.un,F.abc,A.d6)
D.bd9=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eHA=new B.m2("Samsung Galaxy Z Fold7",D.w1,D.bd9,A.cy)
D.eHw=new B.m2("Google Pixel 10 Pro XL",D.un,A.dA,A.bo)
D.eHE=new B.m2("Xiaomi 16 Ultra",D.un,A.lE,A.cd)
D.eHz=new B.m2("Huawei Mate 80 Pro Max",D.un,A.eM,A.ay)
D.eHv=new B.m2("OPPO Find X9 Ultra",D.un,A.e3,A.b4)
D.eHN=new B.m2("Honor Magic V5",D.w1,A.dq,A.cr)
D.eHB=new B.m2("vivo X300 Pro",D.un,A.hu,A.ct)
D.S1=new B.IR(4,"tablet")
D.eHG=new B.m2("iPad Pro M5",D.S1,A.dA,A.aS)
D.a5x=new B.IR(5,"reader")
D.eHO=new B.m2("Kindle Scribe",D.a5x,A.eu,A.bq)
D.zb=new B.IR(6,"computer")
D.eHF=new B.m2("MacBook Pro M5 Max",D.zb,A.dA,A.c9)
D.eHK=new B.m2("iMac 32 inch",D.zb,A.bR,A.cy)
D.eHD=new B.m2("Pro Display XDR 8K",D.zb,A.lE,A.b8)
D.eHy=new B.m2("Sony Laser Projector",D.zb,A.cC,A.dN)
D.eHJ=new B.m2("Luxury car touchscreen",D.zb,L.mV,A.ay)
D.eHM=new B.m2("Apple Vision Pro",D.zb,A.jt,A.by)
D.lS=new C.bm(D.dYJ,[D.eHL,D.eHC,D.eHt,D.eHx,D.eHu,D.aLF,D.eHH,D.eHI,D.eHA,D.eHw,D.eHE,D.eHz,D.eHv,D.eHN,D.eHB,D.eHG,D.eHO,D.eHF,D.eHK,D.eHD,D.eHy,D.eHJ,D.eHM],C.ax("bm<n,m2>"))
D.dYV={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.blQ=new B.fJ(20,4,13,!1)
D.bmg=new B.fJ(14,5,13.5,!1)
D.bm7=new B.fJ(9,2.4,10,!1)
D.bml=new B.fJ(7,5,12.5,!1)
D.bma=new B.fJ(8,3.5,12,!1)
D.blM=new B.fJ(15,2,6,!1)
D.bmj=new B.fJ(45,6,13.5,!0)
D.bm1=new B.fJ(10,8,13.5,!1)
D.blU=new B.fJ(25,3,12,!0)
D.bm_=new B.fJ(35,4,12,!0)
D.bm0=new B.fJ(40,4.5,9.5,!0)
D.bm2=new B.fJ(55,3,9,!0)
D.blN=new B.fJ(18,3,9,!1)
D.bmi=new B.fJ(22,4,13.5,!1)
D.bmb=new B.fJ(16,5,13.5,!1)
D.blY=new B.fJ(30,4,9,!0)
D.bmu=new B.fJ(5,3.5,13,!1)
D.bm5=new B.fJ(25,3,13.5,!0)
D.bme=new B.fJ(14,2.5,9,!1)
D.bm4=new B.fJ(6,6,13,!1)
D.bmm=new B.fJ(30,1.2,5,!0)
D.bmt=new B.fJ(35,3,4.5,!0)
D.bmp=new B.fJ(20,4.5,7.5,!0)
D.bm3=new B.fJ(55,5.5,13.5,!0)
D.blL=new B.fJ(45,5.5,13.5,!0)
D.bmf=new B.fJ(40,5.5,13.5,!0)
D.bms=new B.fJ(60,6,13.5,!0)
D.afs=new B.fJ(28,4,7,!0)
D.ER=new B.fJ(25,4,7,!0)
D.blX=new B.fJ(30,4,7,!0)
D.blS=new B.fJ(22,4,7,!0)
D.blT=new B.fJ(24,4,7,!0)
D.bm6=new B.fJ(60,3,5.5,!0)
D.blO=new B.fJ(18,9,14,!0)
D.blV=new B.fJ(25,9,14,!0)
D.aft=new B.fJ(30,8,14,!0)
D.blR=new B.fJ(20,8,14,!0)
D.blZ=new B.fJ(30,9,14,!0)
D.bmn=new B.fJ(22,5,9.5,!0)
D.blP=new B.fJ(30,2.5,10.5,!0)
D.bmc=new B.fJ(50,5.5,13.5,!0)
D.bmr=new B.fJ(12,2,9.5,!1)
D.bm9=new B.fJ(16,1.3,9.5,!0)
D.bmk=new B.fJ(40,2.5,7,!0)
D.bmq=new B.fJ(60,1.2,4.8,!0)
D.bmo=new B.fJ(18,5,13.5,!0)
D.bmh=new B.fJ(8,2,9.5,!1)
D.bm8=new B.fJ(12,2.5,8,!1)
D.blW=new B.fJ(20,3.5,13.5,!0)
D.bmd=new B.fJ(3.5,3,13,!1)
D.yK=new C.bm(D.dYV,[D.blQ,D.bmg,D.bm7,D.bml,D.bma,D.blM,D.bmj,D.bm1,D.blU,D.bm_,D.bm0,D.bm2,D.blN,D.bmi,D.bmb,D.blY,D.bmu,D.bm5,D.bme,D.bm4,D.bmm,D.bmt,D.bmp,D.bm3,D.blL,D.bmf,D.bms,D.afs,D.ER,D.blX,D.ER,D.blS,D.ER,D.blT,D.afs,D.ER,D.bm6,D.blO,D.blV,D.aft,D.blR,D.blZ,D.bmn,D.blP,D.bmc,D.bmr,D.bm9,D.bmk,D.bmq,D.ER,D.aft,D.bmo,D.bmh,D.bm8,D.blW,D.bmd],C.ax("bm<n,fJ>"))
D.dYv={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eyb=new C.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.efz=new C.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.efu=new C.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eqR=new C.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.erN=new C.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eqN=new C.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.edJ=new C.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eoP=new C.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eyk=new C.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.es7=new C.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eiq=new C.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.edr=new C.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.ehv=new C.y("Movement","They pull your legs together and help you balance.")
D.ejk=new C.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.efI=new C.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.evU=new C.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.ewX=new C.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eoA=new C.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.ewH=new C.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.enj=new C.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.esf=new C.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.edy=new C.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.ejH=new C.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.erX=new C.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.enD=new C.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.ewP=new C.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eqj=new C.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.edH=new C.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.esO=new C.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.evx=new C.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.etO=new C.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eca=new C.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eq1=new C.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eq5=new C.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.ekm=new C.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.efP=new C.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.ej9=new C.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eoZ=new C.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eux=new C.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eyh=new C.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.esc=new C.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ebY=new C.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.ep9=new C.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ecz=new C.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.euN=new C.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.evQ=new C.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.epz=new C.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.ev1=new C.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.edA=new C.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.ewl=new C.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.egV=new C.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.euc=new C.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.ek3=new C.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eny=new C.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.esw=new C.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eww=new C.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.ewn=new C.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.ews=new C.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eo1=new C.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.etk=new C.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.etL=new C.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.ewa=new C.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.epy=new C.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.elY=new C.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.ekN=new C.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.epX=new C.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.esp=new C.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.emt=new C.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.en7=new C.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.ehg=new C.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.evM=new C.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.ei2=new C.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ecw=new C.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.ekl=new C.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ecr=new C.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eg9=new C.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.ekq=new C.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eib=new C.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.esK=new C.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.ejn=new C.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.exZ=new C.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.ekW=new C.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.enW=new C.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eqq=new C.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eii=new C.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.ei4=new C.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.djZ=new C.bm(D.dYv,[D.eyb,D.efz,D.efu,D.eqR,D.erN,D.eqN,D.edJ,D.eoP,D.eyk,D.es7,D.eiq,D.edr,D.ehv,D.ejk,D.efI,D.evU,D.ewX,D.eoA,D.ewH,D.enj,D.esf,D.edy,D.ejH,D.erX,D.enD,D.ewP,D.eqj,D.edH,D.esO,D.evx,D.etO,D.eca,D.eq1,D.eq5,D.ekm,D.efP,D.ej9,D.eoZ,D.eux,D.eyh,D.esc,D.ebY,D.ep9,D.ecz,D.euN,D.evQ,D.epz,D.ev1,D.edA,D.ewl,D.egV,D.euc,D.ek3,D.eny,D.esw,D.eww,D.ewn,D.ews,D.eo1,D.etk,D.etL,D.ewa,D.epy,D.elY,D.ekN,D.epX,D.esp,D.emt,D.en7,D.ehg,D.evM,D.ei2,D.ecw,D.ekl,D.ecr,D.eg9,D.ekq,D.eib,D.esK,D.ejn,D.exZ,D.ekW,D.enW,D.eqq,D.eii,D.ei4],C.ax("bm<n,+(n,n)>"))
D.dk0=new C.ht(A.G,11)
D.dk5=new C.ht(A.G,30)
D.dn0=new B.Ty(null)
D.dqP=new B.TC(null)
D.dqQ=new B.TD(null)
D.dr2=new B.TE(null)
D.dt3=new B.TG(null)
D.dt4=new B.TH(null)
D.dt5=new B.TI(null)
D.dtU=new B.U3(null)
D.dtW=new B.Ui(null)
D.dtX=new B.Uj(null)
D.dtY=new B.Uk(null)
D.duv=new B.Ur(null)
D.dwq=new B.Uv(null)
D.dwr=new B.Ux(null)
D.dws=new B.Uy(null)
D.dwu=new B.Uz(null)
D.dy3=new B.UQ(null)
D.dy5=new B.US(null)
D.dya=new B.V1(null)
D.dyl=new B.V2(null)
D.dyR=new B.V3(null)
D.dAl=new B.V5(null)
D.dBJ=new B.V7(null)
D.dBK=new B.V8(null)
D.dD4=new B.Vb(null)
D.dSY=new B.Vc(null)
D.dSZ=new B.Ve(null)
D.dT_=new B.Vh(null)
D.dT0=new B.Vi(null)
D.dUU=new B.Vq(null)
D.dUV=new B.Vr(null)
D.dV2=new B.Vy(null)
D.dVb=new B.VC(null)
D.dVc=new B.VD(null)
D.dVd=new B.a7w(null)
D.dVO=new B.VF(null)
D.dXg=new B.VJ(null)
D.e_x=new C.u(0,118)
D.aFq=new C.u(0,13)
D.e_y=new C.u(0,17)
D.e_B=new C.u(0,330)
D.e_E=new C.u(0,-13)
D.aFw=new C.u(0,-14)
D.e_F=new C.u(0,-17)
D.e_G=new C.u(0,-18)
D.e_H=new C.u(0,-19)
D.e_I=new C.u(0,-20)
D.e_L=new C.u(0,-26)
D.e_M=new C.u(0,-28)
D.e_N=new C.u(0,-31)
D.e_O=new C.u(0,-32)
D.vW=new C.u(0,-6)
D.e_P=new C.u(0,-6771)
D.e_Q=new C.u(0,-9)
D.e_S=new C.u(-9.5,-11)
D.e_T=new C.u(10,20)
D.e_V=new C.u(10,-13)
D.e_W=new C.u(10,-22)
D.e_X=new C.u(10,-4)
D.a4u=new C.u(11,8)
D.e_Z=new C.u(12,2)
D.e0_=new C.u(14,0)
D.e00=new C.u(14,12)
D.aFA=new C.u(14,8)
D.e01=new C.u(14,-17)
D.e02=new C.u(14,-18)
D.aFB=new C.u(14,-3)
D.aFC=new C.u(14,-4)
D.e03=new C.u(15,0)
D.e04=new C.u(15,-12)
D.e05=new C.u(16,-8)
D.e06=new C.u(18,14)
D.e07=new C.u(18,-12)
D.aFG=new C.u(20,0)
D.e0d=new C.u(20,15)
D.e0e=new C.u(20,-17)
D.e0f=new C.u(20,-3)
D.e0g=new C.u(21,8)
D.e0i=new C.u(22,10)
D.aFH=new C.u(22,8)
D.e0j=new C.u(24,0)
D.e0k=new C.u(24,2)
D.e0m=new C.u(24,-18)
D.e0n=new C.u(24,-22)
D.e0o=new C.u(25,8)
D.e0p=new C.u(26,0)
D.e0v=new C.u(28,-30)
D.e0A=new C.u(30,18)
D.e0B=new C.u(30,2)
D.e0C=new C.u(31,19)
D.e0D=new C.u(32,0)
D.aFK=new C.u(34,0)
D.aFL=new C.u(34,-32)
D.HL=new C.u(36,0)
D.e0I=new C.u(3,-1)
D.e0L=new C.u(40,3)
D.e0P=new C.u(4,11)
D.e0S=new C.u(4,-2)
D.e0W=new C.u(5,0)
D.e0X=new C.u(5,17)
D.e0Y=new C.u(5,6)
D.e11=new C.u(6,11)
D.e17=new C.u(8,7)
D.e18=new C.u(8,-10)
D.e19=new C.u(8,-14)
D.e1a=new C.u(8,-3)
D.aFP=new C.u(9,0)
D.e1d=new C.u(-20.5,-17.6)
D.e1e=new C.u(-9,18.5)
D.e1h=new C.u(-2.6,-1)
D.e1i=new C.u(1.9,-0.8)
D.e1l=new C.u(-0.22,0.09)
D.e1q=new C.u(2.6,1)
D.e1x=new C.u(-9,12.2)
D.e1P=new C.u(-9,20.5)
D.e26=new C.u(-10,0)
D.e27=new C.u(-10,12)
D.aFW=new C.u(-10,4)
D.e28=new C.u(-11,-2)
D.e29=new C.u(-13,-5)
D.e2a=new C.u(-14,0)
D.e2b=new C.u(-14,13)
D.e2c=new C.u(-14,2)
D.e2d=new C.u(-14,-12)
D.e2e=new C.u(-14,-19)
D.e2f=new C.u(-14,-23)
D.e2g=new C.u(-15,6)
D.e2h=new C.u(-16,14)
D.e2i=new C.u(-16,-8)
D.e2j=new C.u(-17,10)
D.e2k=new C.u(-17,-18)
D.e2l=new C.u(-17,-8)
D.e2n=new C.u(-18,20)
D.e2o=new C.u(-18,-9)
D.aFY=new C.u(-20,0)
D.e2q=new C.u(-20,16)
D.e2r=new C.u(-20,-9)
D.Rs=new C.u(-22,8)
D.e2s=new C.u(-22,-10)
D.e2t=new C.u(-22,-11)
D.e2u=new C.u(-24,10)
D.e2v=new C.u(-24,11)
D.e2w=new C.u(-24,14)
D.e2x=new C.u(-24,-22)
D.e2y=new C.u(-25,-11)
D.e2z=new C.u(-26,0)
D.e2A=new C.u(-26,-18)
D.e2B=new C.u(-2,9)
D.e2C=new C.u(-2,-10)
D.e2D=new C.u(-2,-20)
D.e2E=new C.u(-2,-9)
D.e2F=new C.u(-32,0)
D.aG_=new C.u(-34,0)
D.e2K=new C.u(-40,3)
D.e2M=new C.u(-4,11)
D.e2N=new C.u(-4,-17)
D.e2O=new C.u(-4,-2)
D.e2Q=new C.u(-5,0)
D.e2R=new C.u(-5,20)
D.e2S=new C.u(-5,6)
D.e2T=new C.u(-6,26)
D.e2U=new C.u(-6,6)
D.e2V=new C.u(-6,-42)
D.e2W=new C.u(-7,-19)
D.e2X=new C.u(-7,-24)
D.e2Y=new C.u(-8,-9)
D.a4y=new C.u(-9,0)
D.e2Z=new C.u(-9,1)
D.e3_=new C.u(-9,-23)
D.fbn=new C.x("Thinking\u2026",null,A.hp,null,null,null,null,null,null,null,null,null)
D.e3W=new C.C(A.kh,D.fbn,null)
D.fr5=new C.x("Start from a ready-made board",null,A.fO,null,null,null,null,null,null,null,null,null)
D.e45=new C.C(A9.vd,D.fr5,null)
D.btx=new C.Q(4,0,4,14)
D.f6T=new C.G(!0,A.az,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fch=new C.x("Games and little helpers for a spare minute.",null,D.f6T,null,null,null,null,null,null,null,null,null)
D.e4e=new C.C(D.btx,D.fch,null)
D.fnY=new C.x("Tap to throw in a star",null,A.kw,null,null,null,null,null,null,null,null,null)
D.b3w=new C.cr(A.A,null,null,D.fnY,null)
D.ea4=new C.cL(0,null,0,14,null,null,D.b3w,null)
D.d48=w([A.iN,A.bn],x.O)
D.aKS=new C.bS(A.A,0.5,A.x,null,0,D.d48,null,null)
D.eaN=new C.bS(A.A,0.5,A.x,null,0,D.ax8,null,null)
D.cWR=w([A.c,A.bJ],x.O)
D.eaP=new C.bS(A.A,0.5,A.x,null,0,D.cWR,null,null)
D.eaQ=new C.bS(A.A,0.5,A.x,null,0,M.awe,null,null)
D.dbB=w([A.bR,A.jt],x.O)
D.aKT=new C.bS(A.A,0.5,A.x,null,0,D.dbB,null,null)
D.cCg=w([A.c,A.bR],x.O)
D.eaU=new C.bS(A.rL,0.5,A.x,null,0,D.cCg,null,null)
D.baC=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bfT=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cVW=w([D.baC,D.aeC,D.bfT],x.O)
D.d2d=w([0,0.7,1],x.n)
D.eaW=new C.bS(A.rL,0.5,A.x,null,0,D.cVW,D.d2d,null)
D.csP=w([A.os,A.aH,A.K],x.O)
D.d8w=w([0.3,0.7,1],x.n)
D.eaY=new C.bS(A.A,0.5,A.x,null,0,D.csP,D.d8w,null)
D.bjz=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.d9R=w([A.f7,D.bjz],x.O)
D.eb_=new C.bS(A.rL,0.5,A.x,null,0,D.d9R,null,null)
D.cvz=w([A.dA,A.cC],x.O)
D.eb0=new C.bS(A.A,0.5,A.x,null,0,D.cvz,null,null)
D.cRw=w([A.os,A.aH,A.fD],x.O)
D.eb1=new C.bS(A.A,0.5,A.x,null,0,D.cRw,null,null)
D.cK_=w([A.h2,A.aM,A.d8],x.O)
D.eb3=new C.bS(A.rL,0.5,A.x,null,0,D.cK_,null,null)
D.d4F=w([A.jt,L.mV],x.O)
D.eb4=new C.bS(A.rL,0.5,A.x,null,0,D.d4F,null,null)
D.baQ=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b8V=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cTK=w([D.baQ,D.b8V],x.O)
D.eb6=new C.bS(A.A,0.5,A.x,null,0,D.cTK,null,null)
D.bfi=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bdh=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bdl=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.ddP=w([D.bfi,D.bdh,D.bdl],x.O)
D.cQi=w([0,0.65,1],x.n)
D.eb7=new C.bS(M.a8W,0.5,A.x,null,0,D.ddP,D.cQi,null)
D.eb8=new C.bS(A.A,0.5,A.x,null,0,D.atK,null,null)
D.daQ=w([A.lB,A.aH,A.fD],x.O)
D.ebd=new C.bS(A.A,0.5,A.x,null,0,D.daQ,null,null)
D.dcn=w([A.jt,A.hF],x.O)
D.ebg=new C.bS(A.A,0.5,A.x,null,0,D.dcn,null,null)
D.aKY=new C.aW(9,9)
D.ebp=new C.aW(1.4,1.4)
D.ec4=new C.y(0,-4)
D.egS=new C.y(0.22,4)
D.enU=new C.y(0.8,-4)
D.ewo=new C.y(0.58,4)
D.ez2=new C.bt("Moon",1.62,4291941851)
D.ezA=new C.bt("Neptune",11.15,4284524026)
D.eAb=new C.bt("Sun",274,4294688548)
D.eAr=new C.bt("Mercury",3.7,4288455599)
D.eAx=new C.bt("Earth",9.81,4281908728)
D.eAz=new C.bt("Mars",3.71,4294472049)
D.eAS=new C.bt("Venus",8.87,4294759245)
D.eAX=new C.bt("Saturn",10.44,4294829706)
D.eBi=new C.bt("Jupiter",24.79,4294677052)
D.eEP=new C.a9(10,-8,18,-2)
D.eEQ=new C.a9(14,-14,20,14)
D.eER=new C.a9(20,-2,30,2)
D.eET=new C.a9(4,-13,30,-3)
D.eEV=new C.a9(8,-7,12,7)
D.eF0=new C.a9(-12,12,12,19)
D.eF1=new C.a9(-12,14,12,22)
D.eF2=new C.a9(-12,-22,12,8)
D.eF3=new C.a9(-12,-25,12,19)
D.eF4=new C.a9(-12,-26,12,-6)
D.eF5=new C.a9(-12,-4,12,14)
D.eF6=new C.a9(-12,-6,10,6)
D.eF7=new C.a9(-14,20,14,24)
D.eF8=new C.a9(-14,6,14,10)
D.eF9=new C.a9(-14,-17,14,15)
D.eFa=new C.a9(-14,-26,14,18)
D.eFb=new C.a9(-14,-4,14,20)
D.eFc=new C.a9(-15,-29,15,25)
D.eFd=new C.a9(-16,-16,16,16)
D.eFe=new C.a9(-16,-22,-9,18)
D.eFf=new C.a9(-16,-24,16,-10)
D.eFg=new C.a9(-16,-2,16,20)
D.eFi=new C.a9(-18,20,18,24)
D.eFj=new C.a9(-18,-18,18,20)
D.eFk=new C.a9(-20,12,20,22)
D.eFl=new C.a9(-20,-28,20,26)
D.eFm=new C.a9(-22,14,22,18)
D.aLn=new C.a9(-22,-26,22,24)
D.eFn=new C.a9(-22,-3,22,3)
D.eFo=new C.a9(-22,-4,22,12)
D.eFp=new C.a9(-24,-12,10,22)
D.eFq=new C.a9(-24,-14,22,8)
D.eFr=new C.a9(-24,-6,24,20)
D.aLo=new C.a9(-24,-9,24,9)
D.eFs=new C.a9(-25,14,25,19)
D.eFt=new C.a9(-26,-14,14,8)
D.eFu=new C.a9(-26,-4,26,20)
D.eFv=new C.a9(-26,-6,4,6)
D.aLp=new C.a9(-28,-13,28,13)
D.eFw=new C.a9(-28,-16,28,16)
D.eFx=new C.a9(-28,-16,28,8)
D.eFy=new C.a9(-28,-22,28,22)
D.eFz=new C.a9(-30,-12,30,14)
D.eFA=new C.a9(-30,-14,0,14)
D.eFB=new C.a9(-30,-18,30,20)
D.eFC=new C.a9(-30,-28,30,14)
D.eFD=new C.a9(-30,-2,30,18)
D.eFE=new C.a9(-30,-4,30,18)
D.eFF=new C.a9(-32,-17,32,17)
D.eFG=new C.a9(-32,-28,32,18)
D.eFH=new C.a9(-33,-21,33,17)
D.eFI=new C.a9(-34,14,34,26)
D.a5p=new C.a9(-34,-18,34,18)
D.eFJ=new C.a9(-34,-4,34,7)
D.eFK=new C.a9(-36,-24,36,20)
D.eFL=new C.a9(-38,-22,38,22)
D.eFM=new C.a9(-3,12,3,22)
D.eFN=new C.a9(-3,5,3,15)
D.eFP=new C.a9(-46,-34,46,28)
D.eFQ=new C.a9(-48,-3,48,3)
D.eFT=new C.a9(-6,18,24,24)
D.eFU=new C.a9(-6,5,6,12)
D.eFV=new C.a9(-6,-22,6,-15)
D.eFW=new C.a9(-9,-16,9,22)
D.eFX=new C.a9(-4.5,-24,4.5,-21.2)
D.eFZ=new C.a9(14,-9,17.5,9)
D.dZZ={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aMf=new C.eK(D.dZZ,5,x.R)
D.dZE={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eIQ=new C.eK(D.dZE,10,x.R)
D.eKN=new C.at(24,44)
D.eKS=new C.at(300,300)
D.eLb=new C.at(54,38)
D.eLi=new C.at(66,38)
D.b4O=new C.fj(2,null,null,null,null,A.by,null,null,null,null)
D.eMe=new C.a7(16,16,D.b4O,null)
D.aNf=new C.hK(3,12,12,0.82,null)
D.fsK=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aNq=new C.b1(D.fsK,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.d4I=w([A.cg,A.cj,A.b4,A.aS,A.pj,A.cg],x.O)
D.eS6=new C.fS(A.A,0,6.283185307179586,A.x,D.d4I,null,null)
D.f_R=new C.G(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.PA,null,null,null)
D.eTa=new C.ep("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.f_R)
D.aPQ=new C.G(!0,A.az,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTb=new C.ep("What we see",null,null,A.cO,null,null,null,null,null,null,D.aPQ)
D.eYh=new C.G(!0,A4.Vv,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTe=new C.ep("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.eYh)
D.f24=new C.G(!0,A.k9,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTk=new C.ep("AI",null,null,A.cO,null,null,null,null,null,null,D.f24)
D.eY2=new C.G(!0,A.c_,null,null,null,null,15,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTl=new C.ep("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.eY2)
D.aOd=new C.G(!0,A.c_,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTA=new C.G(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTC=new C.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU7=new C.G(!0,A.bh,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUr=new C.G(!0,A.cr,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUW=new C.G(!0,A.c_,null,null,null,null,11,A.P,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV0=new C.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVg=new C.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVJ=new C.G(!0,A.aR,null,null,null,null,12,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW5=new C.G(!0,A.c_,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWf=new C.G(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJl=new C.cP(A.hI,A.dE,6)
D.cZw=w([D.eJl],x.q)
D.eWz=new C.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cZw,null,null,null)
D.eWC=new C.G(!0,A.es,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWF=new C.G(!0,A.c,null,null,null,null,17,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWH=new C.G(!0,A.c_,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX5=new C.G(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOA=new C.G(!0,A.c_,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXp=new C.G(!0,A.az,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXq=new C.G(!0,A.c_,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYk=new C.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYP=new C.G(!0,A.az,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZh=new C.G(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJo=new C.cP(A.aX,A.J,3)
D.axo=w([D.eJo],x.q)
D.eZk=new C.G(!0,A.c,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.axo,null,null,null)
D.eZp=new C.G(!0,A.c,null,null,null,null,12.5,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_5=new C.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.PA,null,null,null)
D.f_y=new C.G(!0,A.az,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_G=new C.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f05=new C.G(!0,A.uY,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0l=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0F=new C.G(!0,A.bK,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0K=new C.G(!0,A.c_,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0P=new C.G(!0,A.az,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0V=new C.G(!0,A.az,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1m=new C.G(!0,A.c_,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1A=new C.G(!0,A.mX,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1B=new C.G(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1Q=new C.G(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPf=new C.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2o=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJc=new C.cP(A.w,A.J,5)
D.cO_=w([D.eJc],x.q)
D.f2p=new C.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cO_,null,null,null)
D.f2u=new C.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.axo,null,null,null)
D.f2J=new C.G(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2O=new C.G(!0,A.fv,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f34=new C.G(!0,A.c_,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3y=new C.G(!0,A.b4,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f45=new C.G(!0,A.c_,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4J=new C.G(!0,A.az,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4S=new C.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPB=new C.G(!0,A.az,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5k=new C.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5u=new C.G(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5B=new C.G(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5W=new C.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPN=new C.G(!0,A.ad,null,null,null,null,12,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5Z=new C.G(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6J=new C.G(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7l=new C.G(!0,A.c,null,null,null,null,13,A.a5,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f77=new C.G(!0,A.uY,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7q=new C.G(!0,A.b4,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWK=new C.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7O=new C.x("\u26a0\ufe0f ",null,D.eWK,null,null,null,null,null,null,null,null,null)
D.f7Z=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.D4,null,null,null,null,null,null,null,null,null)
D.f8q=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mE,null,null,null,null,null,null,null,null,null)
D.f9s=new C.x("Pick one, then change it and see what happens.",null,A.D4,null,null,null,null,null,null,null,null,null)
D.f9w=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.eXO=new C.G(!0,A.ad,null,null,null,null,null,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faq=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.eXO,null,null,null,null,null,null,null,null,null)
D.faN=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,U.a6E,null,null,null,null,null,null,null,null,null)
D.fbU=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fct=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fcy=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fd5=new C.x("Make it yours",null,A.kZ,null,null,null,null,null,null,null,null,null)
D.fdk=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a6J,null,null,null,null,null,null,null,null,null)
D.f1_=new C.G(!0,A.ja,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffz=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.f1_,null,null,null,null,null,null,null,null,null)
D.ffO=new C.x("YOUR DECODING",null,Q.mE,null,null,null,null,null,null,null,null,null)
D.fg_=new C.x("5G",null,R.aOD,null,null,null,null,null,null,null,null,null)
D.f3k=new C.G(!0,A.c_,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh6=new C.x("WHAT HAPPENS",null,D.f3k,null,null,null,null,null,null,null,null,null)
D.fiO=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fjs=new C.x("Change the words and pictures on the three slabs.",null,A.D4,null,null,null,null,null,null,null,null,null)
D.fjD=new C.x("All the parts and wires will be removed.",null,A.hD,null,null,null,null,null,null,null,null,null)
D.fjX=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fkw=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fln=new C.x("INTERCEPTED",null,Q.mE,null,null,null,null,null,null,null,null,null)
D.flH=new C.x("\ud83c\udfaf Challenges",null,A.ds,null,null,null,null,null,null,null,null,null)
D.fmb=new C.x("Remove this part",null,U.aOg,null,null,null,null,null,null,null,null,null)
D.fmt=new C.x("Clear the board?",null,A.dl,null,null,null,null,null,null,null,null,null)
D.f2P=new C.G(!0,A.bt,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmI=new C.x("How the Lab works",null,D.f2P,null,null,null,null,null,null,null,null,null)
D.eVs=new C.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn_=new C.x("Electronics Lab",null,D.eVs,null,null,null,null,A.a2,null,1,null,null)
D.fn2=new C.x("?",null,M.aPK,null,null,null,null,null,null,null,null,null)
D.f0U=new C.G(!0,A.aS,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn6=new C.x("Planet Earth",null,D.f0U,null,null,null,null,null,null,null,null,null)
D.foh=new C.x("Ready-made circuits",null,A.ds,null,null,null,null,null,null,null,null,null)
D.foT=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fpb=new C.x("UNIVERSE EXPLORER",null,I.a6I,null,null,null,null,null,null,null,null,null)
D.frD=new C.x("SECRET VERSION",null,Q.mE,null,null,null,null,null,null,null,null,null)
D.f5F=new C.G(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs9=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.f5F,null,null,null,null,null,null,null,null,null)
D.ftk=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,U.a6E,null,null,null,null,null,null,null,null,null)
D.ftN=new C.x("NGMY",null,A.uw,null,null,null,null,null,null,null,null,null)
D.ftZ=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.IJ,null,null,null,null,null,null,null,null,null)
D.ful=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.l_,null,null,null,null,null,null,null,null,null)
D.fvi=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.D4,null,null,null,null,null,null,null,null,null)
D.fvk=new C.x("TOOLBOX",null,I.a6I,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.h96=null
$.h95=null
$.hf8=0
$.hGR=C.T(x.N,x.k)
$.hHr=C.T(x.N,x.k)
$.h8r=null
$.hHc=C.T(x.N,x.k)
$.hIe=C.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"icB","bCF",()=>{var v="led"
return C.a([B.ax0("Both together","Make the light glow only when BOTH switches are ON.",2,new B.fcb(),v),B.ax0("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.fcc(),v),B.ax0("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.fcd(),v),B.ax0("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fck(),v),B.ax0("Not both","Make the light go OFF only when both switches are ON.",2,new B.fcl(),v),B.ax0("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fcm(),"buzzer")],C.ax("O<b9r>"))})
w($,"id1","bCG",()=>C.a([B.ov("UNIVERSE","Earth, space and gravity",A.a_K,A.aS,new B.fcC()),B.ov("ELECTRONICS LAB","Batteries, wires, real circuits",Ai.a_8,A.aS,new B.fcD()),B.ov("DISCOVERY LAB","Body Explorer: a real 3D human",D.a__,A.b4,new B.fcE()),B.ov("TOOLBOX","Converter, clock, games",T.ajS,A.ct,new B.fcP()),B.ov("MOLECULE MAKER","Join atoms into real molecules",A.MM,A.hv,new B.fcR()),B.ov("DNA LAB","Copy DNA, build a protein",D.a__,A.bU,new B.fcS()),B.ov("ECOSYSTEM LAB","Grass, rabbits and foxes",A.y0,A.b4,new B.fcT()),B.ov("BALANCE LAB","Levers, weight and torque",D.bDM,A.aM,new B.fcU()),B.ov("GEAR LAB","Teeth, speed and force",A.Bs,A.ct,new B.fcV()),B.ov("LASER MAZE","Bend the beam with mirrors",I.akf,A.ay,new B.fcW()),B.ov("LIGHT MIXER","Match colours with light",D.bBv,A.b8,new B.fcX()),B.ov("CIPHER LAB","Make and crack secret codes",A.yc,A.aS,new B.fcF()),B.ov("REACTION LAB","Wire parts together",A.yg,A.bt,new B.fcG()),B.ov("SPARK PAINTER","Paint with light",A.a_1,A.bU,new B.fcH()),B.ov("ROCKET LANDER","Land softly on the pad",A.nd,A.aS,new B.fcI()),B.ov("ORBIT STUDIO","Slingshot planets",A.mn,A.ct,new B.fcJ()),B.ov("SWARM STUDIO","A living school of fish",A.MM,A.b4,new B.fcK()),B.ov("CHAIN BURST","One tap, a whole chain",A.h7,A.bU,new B.fcL()),B.ov("TITLE ANIMATOR","Make a moving title",A.y8,A.cj,new B.fcM()),B.ov("CIRCUIT LAB","Connect logic, learn it",A.a_r,A.cr,new B.fcN()),B.ov("MARBLE MUSIC","Marbles ring the notes",D.bBb,A.b8,new B.fcO()),B.ov("ORBIT SEQUENCER","Planets play the tune",D.bDA,A.by,new B.fcQ())],C.ax("O<bra>")))
w($,"iew","q7",()=>{var v,u,t=C.T(x.N,x.dV)
for(v=0;v<76;++v){u=D.PR[v]
t.n(0,u.a,u)}return t})
w($,"icC","agW",()=>C.a([B.Fa("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.fcn()),B.Fa("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fco()),B.Fa("Spin the motor","A battery and a motor in a loop will make it spin.",new B.fcp()),B.Fa("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fcq()),B.Fa("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.fcr()),B.Fa("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fce()),B.Fa("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.fcf()),B.Fa("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fcg()),B.Fa("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.fch()),B.Fa("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fci()),B.Fa("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fcj())],C.ax("O<b9s>")))
w($,"id3","hnq",()=>C.a([B.a03("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cd,new B.fd4()),B.a03("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cg,A.bI,new B.fd5()),B.a03("Breathe","Calm down in a minute","\ud83e\udee7",A.hv,A.cy,new B.fd6()),B.a03("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b7,new B.fd7()),B.a03("Memory Match","Find the pairs","\ud83c\udccf",A.aS,A.c9,new B.fd8()),B.a03("Simon Sounds","Copy the tune","\ud83c\udfb5",A.cj,A.bo,new B.fd9()),B.a03("Tip & Split","Share the bill","\ud83e\uddfe",A.b4,A.aZ,new B.fda()),B.a03("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.by,A.aE,new B.fdb())],C.ax("O<bsu>")))
w($,"id2","hnp",()=>C.a([B.aei("EARTH GLOBE","Turn it, tap a country",A.mn,A.aS,new B.fcY()),B.aei("SOLAR SYSTEM","The Sun and its worlds",D.bBf,A.aM,new B.fcZ()),B.aei("GRAVITY LAB","Drop, weigh, orbit",D.al1,A.ct,new B.fd_()),B.aei("BLACK HOLE","Throw in a star",A.Fr,A.by,new B.fd0()),B.aei("GALAXY","Build, tilt, collide",A.xO,A.h1,new B.fd1()),B.aei("SIZE COMPARE","Earth next to a star",D.bBx,A.bU,new B.fd2()),B.aei("SEASONS & MOON","Why it is summer",A.vm,A.bt,new B.fd3())],C.ax("O<bsp>")))})()};
(a=>{a["hoNI9Swi+nYeHTb9rcy/7e5EjwM="]=a.current})($__dart_deferred_initializers__);