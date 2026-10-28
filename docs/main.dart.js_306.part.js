((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A_,A9,A0,A1,I,P,A2,Aa,A3,A4,N,G,Ab,Ac,A5,Ad,W,Ae,Af,Q,Ag,Ah,X,O,V,Ai,Aj,S,K,Ak,L,T,Al,E,F,M,B={
bxm(d){return B.hIn(d)},
hIn(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bxm=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qD(C.mZ(""),d,A.hk,null).cM(0,A.X8),$async$bxm)
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
return C.i($async$bxm,v)},
hTS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Pd[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.dr(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.iA(D.Pd,new B.foU())
if(w==null)w=A.d.gL(D.Pd)
s=C.V(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.L)(r),++u){l=r[u].a
k=l[0]
l=$.q2().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gL(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.aiD(w.a,w.b,m,w,s,!1)},
hND(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.K(D.PC,new B.ffH(),x.bd).aI(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i0E(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cJ(b2,"{")
v=A.a.on(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aH(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aW(a5)
r=0
for(a6=x.j,a7=J.aX(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gU(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.q2().ah(0,p)||J.eY(s,o)||J.ad(t)>=8)continue
J.cf(s,o)
n=C.V(a5,a8)
for(a9=0;a9<4;++a9){m=D.daW[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.f8(J.q(q,"x")):0.2+A.k.G(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.f8(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.cf(t,new C.eN([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aX(a6.a(J.q(u,"wires")));a5.C();){h=a5.gU(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=A.o.D(A.k.O(C.f8(J.q(g,1))),0,1)
a0=A.o.D(A.k.O(C.f8(J.q(g,3))),0,1)
if(J.eY(s,f)&&J.eY(s,e)&&!J.y(f,e))J.cf(i,new C.cL([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aX(a0==null?A.cH:a0)
while(a0.C()){a2=a0.gU(a0)
J.cf(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mr(a0,C.t(a1==null?"":a1),t,i,A.T)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new B.aiD(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hSs(d){var w,v,u=B.fYQ()
d.B(u)
for(w=0;w<60;++w)u.uO(0,0.03333333333333333)
v=u.a
return A.d.b8(v,new B.fm_(u))&&!A.d.d9(v,new B.fm0())},
hSr(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.V(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.q2().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.L)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.d9o,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aI(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.L)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aI(s,"\n")+"\nWires: "+A.d.aI(l,"; ")},
hGV(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aI(v,"\n")+"\n\n"}v=A.d.aI(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hTR(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.q2().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.PC[u]
if(A.d.b8(w,new B.foR(s)))if(!C.dr(r,s.b.toLowerCase(),0))v=C.dr(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a2(w,new B.foS(e),C.T(w).k("a2<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cI(w,0,new B.foT())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gL(w)
w=$.q2().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
aiD:function aiD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
foU:function foU(){},
ffH:function ffH(){},
fm_:function fm_(d){this.a=d},
fm0:function fm0(){},
foR:function foR(d){this.a=d},
foS:function foS(d){this.a=d},
foT:function foT(){},
Uw:function Uw(d,e){this.c=d
this.a=e},
bi8:function bi8(d,e,f,g,h){var _=this
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
e1B:function e1B(d){this.a=d},
e1C:function e1C(d,e,f){this.a=d
this.b=e
this.c=f},
e1D:function e1D(d){this.a=d},
e1O:function e1O(d){this.a=d},
e1P:function e1P(d,e){this.a=d
this.b=e},
e1K:function e1K(d){this.a=d},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1J:function e1J(d,e,f){this.a=d
this.b=e
this.c=f},
e1L:function e1L(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e1G:function e1G(d){this.a=d},
e1H:function e1H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1M:function e1M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e1F:function e1F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1E:function e1E(d,e){this.a=d
this.b=e},
e1S:function e1S(d){this.a=d},
e1R:function e1R(d){this.a=d},
e1T:function e1T(d){this.a=d},
e1Q:function e1Q(d){this.a=d},
e1U:function e1U(d,e){this.a=d
this.b=e},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1W:function e1W(d,e){this.a=d
this.b=e},
e1X:function e1X(d,e){this.a=d
this.b=e},
bxI(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aNM,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hbe(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.r,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ao,C.d(e,w,w,w,w,w,w,A.zg,A.L,w,w),A.ay,C.c_(A.fM,g,A.bt,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.Ve,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
Fu:function Fu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uA:function uA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UY:function UY(d){this.a=d},
aCP:function aCP(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fj$=h
_.kU$=i
_.fO$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
ehA:function ehA(){},
ehU:function ehU(d){this.a=d},
ehT:function ehT(d,e){this.a=d
this.b=e},
ehV:function ehV(){},
ehW:function ehW(){},
ehC:function ehC(d,e,f){this.a=d
this.b=e
this.c=f},
ehB:function ehB(d,e){this.a=d
this.b=e},
ehr:function ehr(d){this.a=d},
ehs:function ehs(d){this.a=d},
eht:function eht(d){this.a=d},
ehu:function ehu(d){this.a=d},
ehv:function ehv(d){this.a=d},
ehw:function ehw(d){this.a=d},
ehx:function ehx(d){this.a=d},
ehy:function ehy(d){this.a=d},
ehz:function ehz(d){this.a=d},
ehp:function ehp(d){this.a=d},
ehq:function ehq(d){this.a=d},
eho:function eho(d){this.a=d},
ehN:function ehN(d,e){this.a=d
this.b=e},
ehI:function ehI(d){this.a=d},
ehJ:function ehJ(d){this.a=d},
ehF:function ehF(d){this.a=d},
ehK:function ehK(d){this.a=d},
ehE:function ehE(d){this.a=d},
ehL:function ehL(d){this.a=d},
ehM:function ehM(d){this.a=d},
ehD:function ehD(d){this.a=d},
ehO:function ehO(d,e){this.a=d
this.b=e},
ehH:function ehH(d,e){this.a=d
this.b=e},
ehP:function ehP(d){this.a=d},
ehQ:function ehQ(d){this.a=d},
ehR:function ehR(d){this.a=d},
ehS:function ehS(d){this.a=d},
ehG:function ehG(d){this.a=d},
bf8:function bf8(d,e){this.b=d
this.a=e},
aKE:function aKE(){},
bvk:function bvk(){},
cCB(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cCB=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.tR().ke(0,"assets/data/body3d.bin"),$async$cCB)
case 3:d=a1
$.h6B=J.eW(A.dG.gaP(d),d.byteOffset,d.byteLength)
t=C.bFM(d)
s=t.getUint32(4,!0)
r=C.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.jl(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.d_7[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a28(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aVh))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b8k(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cCB,v)},
aQw:function aQw(d,e,f){this.a=d
this.b=e
this.c=f},
a28:function a28(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b8k:function b8k(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
To:function To(d){this.a=d},
aBe:function aBe(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fj$=s
_.kU$=t
_.fO$=u
_.fk$=v
_.bq$=w
_.a7$=a0
_.c=_.a=null},
dC0:function dC0(d){this.a=d},
dC_:function dC_(d,e){this.a=d
this.b=e},
dBD:function dBD(d,e){this.a=d
this.b=e},
dBE:function dBE(){},
dC1:function dC1(){},
dBF:function dBF(d,e){this.a=d
this.b=e},
dBG:function dBG(d){this.a=d},
dBH:function dBH(){},
dBI:function dBI(d){this.a=d},
dBK:function dBK(d,e){this.a=d
this.b=e},
dBJ:function dBJ(d){this.a=d},
dBA:function dBA(d,e,f){this.a=d
this.b=e
this.c=f},
dBB:function dBB(d){this.a=d},
dBC:function dBC(d){this.a=d},
dBR:function dBR(d){this.a=d},
dBS:function dBS(d,e){this.a=d
this.b=e},
dBT:function dBT(d,e){this.a=d
this.b=e},
dBU:function dBU(d){this.a=d},
dBQ:function dBQ(d,e){this.a=d
this.b=e},
dBV:function dBV(d,e){this.a=d
this.b=e},
dBP:function dBP(d,e){this.a=d
this.b=e},
dBW:function dBW(d){this.a=d},
dBO:function dBO(d){this.a=d},
dBX:function dBX(d){this.a=d},
dBN:function dBN(d){this.a=d},
dBY:function dBY(d){this.a=d},
dBM:function dBM(d){this.a=d},
dBZ:function dBZ(d){this.a=d},
dBL:function dBL(d){this.a=d},
aJG:function aJG(){},
aJH:function aJH(){},
bZ9:function bZ9(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bZa:function bZa(d,e){this.a=d
this.b=e},
bZb:function bZb(d){this.a=d},
awJ(d,e,f,g,h){return new B.b92(d,e,f,g,h)},
fPR(d,e,f,g,h,i){return $.hEk.ci(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cJn(d,e,f,i,g,h))},
xG:function xG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
BO:function BO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nd:function nd(d,e,f){this.a=d
this.b=e
this.c=f},
b92:function b92(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9X:function f9X(){},
f9Y:function f9Y(){},
f9Z:function f9Z(){},
fa5:function fa5(){},
fa6:function fa6(){},
fa7:function fa7(){},
Tt:function Tt(d){this.a=d},
aBh:function aBh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fj$=m
_.kU$=n
_.fO$=o
_.fk$=p
_.bq$=q
_.a7$=r
_.c=_.a=null},
dEb:function dEb(d){this.a=d},
dDQ:function dDQ(d,e){this.a=d
this.b=e},
dDT:function dDT(){},
dEc:function dEc(){},
dDO:function dDO(d,e){this.a=d
this.b=e},
dDP:function dDP(d,e){this.a=d
this.b=e},
dDU:function dDU(d,e,f){this.a=d
this.b=e
this.c=f},
dDJ:function dDJ(){},
dDK:function dDK(){},
dDL:function dDL(d){this.a=d},
dDM:function dDM(d,e){this.a=d
this.b=e},
dDN:function dDN(d,e,f){this.a=d
this.b=e
this.c=f},
dDV:function dDV(){},
dDW:function dDW(d,e){this.a=d
this.b=e},
dDX:function dDX(d){this.a=d},
dDS:function dDS(d,e){this.a=d
this.b=e},
dDR:function dDR(d){this.a=d},
dDI:function dDI(d,e,f){this.a=d
this.b=e
this.c=f},
dE5:function dE5(d){this.a=d},
dE4:function dE4(d){this.a=d},
dE6:function dE6(d){this.a=d},
dE3:function dE3(d){this.a=d},
dE1:function dE1(d){this.a=d},
dE2:function dE2(d){this.a=d},
dE0:function dE0(d){this.a=d},
dDY:function dDY(d){this.a=d},
dE_:function dE_(d){this.a=d},
dE7:function dE7(d,e){this.a=d
this.b=e},
dE8:function dE8(d,e){this.a=d
this.b=e},
dE9:function dE9(d){this.a=d},
dDZ:function dDZ(d){this.a=d},
dEa:function dEa(d,e){this.a=d
this.b=e},
b9k:function b9k(d,e){this.b=d
this.a=e},
cJn:function cJn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aJM:function aJM(){},
bv3:function bv3(){},
hvc(){return new B.MC(null)},
oq(d,e,f,g,h){return new B.bqG(d,e,f,g,h)},
bp7(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fQm(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
MC:function MC(d){this.a=d},
JI:function JI(d,e){this.a=d
this.b=e},
A1:function A1(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aBy:function aBy(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dJD:function dJD(d,e){this.a=d
this.b=e},
dJC:function dJC(d){this.a=d},
dJF:function dJF(d,e){this.a=d
this.b=e},
dJE:function dJE(d){this.a=d},
bqG:function bqG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fan:function fan(){},
fao:function fao(){},
fap:function fap(){},
faA:function faA(){},
faC:function faC(){},
faD:function faD(){},
faE:function faE(){},
faF:function faF(){},
faG:function faG(){},
faH:function faH(){},
faI:function faI(){},
faq:function faq(){},
far:function far(){},
fas:function fas(){},
fat:function fat(){},
fau:function fau(){},
fav:function fav(){},
faw:function faw(){},
fax:function fax(){},
fay:function fay(){},
faz:function faz(){},
faB:function faB(){},
bp8:function bp8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eRR:function eRR(d){this.a=d},
eRQ:function eRQ(d,e){this.a=d
this.b=e},
eRO:function eRO(d){this.a=d},
eRS:function eRS(d){this.a=d},
eRP:function eRP(d,e){this.a=d
this.b=e},
adJ:function adJ(d,e,f){this.c=d
this.d=e
this.a=f},
acD:function acD(d,e,f){this.c=d
this.d=e
this.a=f},
Pf:function Pf(d,e,f,g,h,i,j,k,l,m){var _=this
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
bq6:function bq6(d,e){this.b=d
this.a=e},
bpC:function bpC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b81:function b81(d,e){this.b=d
this.a=e},
aFN:function aFN(d,e){this.c=d
this.a=e},
aFO:function aFO(d,e,f){var _=this
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
eRx:function eRx(d){this.a=d},
eRw:function eRw(d){this.a=d},
eRv:function eRv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRu:function eRu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRs:function eRs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRr:function eRr(d,e,f){this.a=d
this.b=e
this.c=f},
eRt:function eRt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eRq:function eRq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRF:function eRF(d){this.a=d},
eRE:function eRE(d){this.a=d},
eRG:function eRG(d,e){this.a=d
this.b=e},
eRH:function eRH(d,e){this.a=d
this.b=e},
eRI:function eRI(d,e){this.a=d
this.b=e},
eRD:function eRD(d,e,f){this.a=d
this.b=e
this.c=f},
eRJ:function eRJ(d,e,f){this.a=d
this.b=e
this.c=f},
eRC:function eRC(d){this.a=d},
eRy:function eRy(d){this.a=d},
eRK:function eRK(d){this.a=d},
eRL:function eRL(d){this.a=d},
eRB:function eRB(d,e){this.a=d
this.b=e},
eRM:function eRM(d,e){this.a=d
this.b=e},
eRA:function eRA(d,e){this.a=d
this.b=e},
eRN:function eRN(d,e){this.a=d
this.b=e},
eRz:function eRz(d,e){this.a=d
this.b=e},
eRo:function eRo(){},
eRp:function eRp(){},
boL:function boL(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
boc:function boc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8H:function b8H(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
boe:function boe(d,e,f){this.b=d
this.c=e
this.a=f},
bs9:function bs9(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aLt:function aLt(){},
hcE(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.u(w,0)),u=e.aC(0,new C.u(w,0)),t=1-f,s=3*t
return d.aF(0,t*t*t).ad(0,v.aF(0,s*t*f)).ad(0,u.aF(0,s*f*f)).ad(0,e.aF(0,f*f*f))},
bf7(d,e,f,g,h,i){return $.hEV.ci(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.ddS(d,e,f,i,g,h))},
a_l:function a_l(d,e){this.a=d
this.b=e},
pR:function pR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qy:function qy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
BS:function BS(d,e){this.a=d
this.b=e},
Yl:function Yl(d,e){this.a=d
this.b=e},
adz:function adz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_y:function a_y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
C2:function C2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaw:function aaw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaN:function aaN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acH:function acH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bf5:function bf5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.S$=t
_.bt$=_.bL$=0},
ddW:function ddW(d){this.a=d},
ddX:function ddX(d){this.a=d},
ddT:function ddT(d,e){this.a=d
this.b=e},
ddU:function ddU(d){this.a=d},
ddV:function ddV(d){this.a=d},
ddY:function ddY(d){this.a=d},
ddZ:function ddZ(d){this.a=d},
de_:function de_(d){this.a=d},
de0:function de0(d){this.a=d},
de1:function de1(d){this.a=d},
de2:function de2(d){this.a=d},
de3:function de3(d){this.a=d},
de4:function de4(d){this.a=d},
de5:function de5(d){this.a=d},
Fh:function Fh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UX:function UX(d){this.a=d},
aCO:function aCO(d,e,f,g,h,i,j){var _=this
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
_.a7$=j
_.c=_.a=null},
egV:function egV(d){this.a=d},
egK:function egK(d){this.a=d},
egM:function egM(){},
egN:function egN(){},
egQ:function egQ(){},
egR:function egR(d,e,f){this.a=d
this.b=e
this.c=f},
egS:function egS(d){this.a=d},
egT:function egT(d){this.a=d},
egO:function egO(){},
egP:function egP(d){this.a=d},
ehk:function ehk(d){this.a=d},
egU:function egU(){},
egG:function egG(d){this.a=d},
egX:function egX(d){this.a=d},
egW:function egW(d){this.a=d},
egZ:function egZ(){},
egY:function egY(d,e){this.a=d
this.b=e},
egJ:function egJ(){},
egH:function egH(d){this.a=d},
egI:function egI(d){this.a=d},
ehi:function ehi(d){this.a=d},
ehh:function ehh(d){this.a=d},
ehj:function ehj(d){this.a=d},
eh8:function eh8(d,e){this.a=d
this.b=e},
ehg:function ehg(d){this.a=d},
ehe:function ehe(d){this.a=d},
ehf:function ehf(d){this.a=d},
ehd:function ehd(d){this.a=d},
ehc:function ehc(d){this.a=d},
eh9:function eh9(d){this.a=d},
eha:function eha(d){this.a=d},
ehb:function ehb(d){this.a=d},
egL:function egL(){},
eh4:function eh4(d){this.a=d},
eh5:function eh5(d){this.a=d},
eh3:function eh3(d){this.a=d},
eh6:function eh6(d){this.a=d},
eh2:function eh2(d){this.a=d},
eh7:function eh7(d){this.a=d},
eh1:function eh1(d){this.a=d},
eh0:function eh0(d){this.a=d},
eh_:function eh_(d,e){this.a=d
this.b=e},
bf6:function bf6(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
ddS:function ddS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKC:function aKC(){},
bjF:function bjF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
P6:function P6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Vc:function Vc(d){this.a=d},
biJ:function biJ(d,e,f,g,h,i,j,k){var _=this
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
_.a7$=k
_.c=_.a=null},
esL:function esL(d){this.a=d},
esJ:function esJ(d){this.a=d},
esK:function esK(){},
esm:function esm(){},
esl:function esl(){},
esv:function esv(d,e){this.a=d
this.b=e},
esx:function esx(d){this.a=d},
esB:function esB(d){this.a=d},
esw:function esw(d){this.a=d},
esC:function esC(d){this.a=d},
esD:function esD(d){this.a=d},
esE:function esE(d,e){this.a=d
this.b=e},
esu:function esu(d,e){this.a=d
this.b=e},
esF:function esF(d){this.a=d},
est:function est(d){this.a=d},
esG:function esG(d,e){this.a=d
this.b=e},
ess:function ess(d,e){this.a=d
this.b=e},
esH:function esH(d){this.a=d},
esr:function esr(d,e){this.a=d
this.b=e},
esI:function esI(d){this.a=d},
esq:function esq(d){this.a=d},
esy:function esy(d){this.a=d},
esp:function esp(d){this.a=d},
esz:function esz(d){this.a=d},
eso:function eso(d){this.a=d},
esA:function esA(d,e){this.a=d
this.b=e},
esn:function esn(d,e){this.a=d
this.b=e},
bq1:function bq1(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Vo:function Vo(d){this.a=d},
aD3:function aD3(d,e,f,g){var _=this
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
_.a7$=g
_.c=_.a=null},
ezk:function ezk(d,e){this.a=d
this.b=e},
ezl:function ezl(d,e,f){this.a=d
this.b=e
this.c=f},
ezm:function ezm(d){this.a=d},
ezj:function ezj(){},
ezn:function ezn(d,e){this.a=d
this.b=e},
ezi:function ezi(d,e){this.a=d
this.b=e},
ezo:function ezo(d,e){this.a=d
this.b=e},
ezh:function ezh(d,e){this.a=d
this.b=e},
ezp:function ezp(d){this.a=d},
ezg:function ezg(d){this.a=d},
ezq:function ezq(d,e){this.a=d
this.b=e},
ezf:function ezf(d,e){this.a=d
this.b=e},
ezr:function ezr(d){this.a=d},
ezs:function ezs(d){this.a=d},
eze:function eze(d,e){this.a=d
this.b=e},
aKL:function aKL(){},
aKR:function aKR(){},
ZS:function ZS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
UU:function UU(d){this.a=d},
aCG:function aCG(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fj$=h
_.kU$=i
_.fO$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
edy:function edy(d){this.a=d},
edz:function edz(d,e){this.a=d
this.b=e},
edm:function edm(d,e){this.a=d
this.b=e},
edn:function edn(d){this.a=d},
edk:function edk(d){this.a=d},
edl:function edl(d){this.a=d},
edj:function edj(d){this.a=d},
edo:function edo(d){this.a=d},
edi:function edi(d,e){this.a=d
this.b=e},
edq:function edq(d){this.a=d},
edh:function edh(d,e){this.a=d
this.b=e},
edr:function edr(d){this.a=d},
edg:function edg(d,e){this.a=d
this.b=e},
eds:function eds(d){this.a=d},
edf:function edf(d){this.a=d},
edt:function edt(d){this.a=d},
ede:function ede(d){this.a=d},
edu:function edu(d){this.a=d},
edd:function edd(d){this.a=d},
edv:function edv(d){this.a=d},
edw:function edw(d){this.a=d},
edx:function edx(d){this.a=d},
edc:function edc(d){this.a=d},
edp:function edp(d){this.a=d},
bjs:function bjs(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aaD:function aaD(d,e,f){this.a=d
this.b=e
this.c=f},
Vj:function Vj(d){this.a=d},
biO:function biO(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fj$=i
_.kU$=j
_.fO$=k
_.fk$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
eyM:function eyM(d){this.a=d},
eyN:function eyN(d){this.a=d},
eyL:function eyL(d){this.a=d},
eyB:function eyB(d,e){this.a=d
this.b=e},
eyC:function eyC(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyA:function eyA(d){this.a=d},
eyy:function eyy(d){this.a=d},
eyr:function eyr(d){this.a=d},
eys:function eys(d){this.a=d},
eyq:function eyq(d){this.a=d},
eyD:function eyD(d,e){this.a=d
this.b=e},
eyx:function eyx(d,e){this.a=d
this.b=e},
eyE:function eyE(d,e){this.a=d
this.b=e},
eyw:function eyw(d,e){this.a=d
this.b=e},
eyF:function eyF(d){this.a=d},
eyv:function eyv(d){this.a=d},
eyG:function eyG(d){this.a=d},
eyu:function eyu(d,e){this.a=d
this.b=e},
eyH:function eyH(d){this.a=d},
eyt:function eyt(d,e){this.a=d
this.b=e},
eyI:function eyI(d){this.a=d},
eyp:function eyp(d,e){this.a=d
this.b=e},
eyJ:function eyJ(d){this.a=d},
eyo:function eyo(d,e){this.a=d
this.b=e},
eyK:function eyK(d){this.a=d},
eyn:function eyn(d,e){this.a=d
this.b=e},
bqS:function bqS(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ab5:function ab5(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Tr:function Tr(d){this.a=d},
aBg:function aBg(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fj$=h
_.kU$=i
_.fO$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
dDk:function dDk(d){this.a=d},
dDj:function dDj(d,e){this.a=d
this.b=e},
dDl:function dDl(){},
dDm:function dDm(d){this.a=d},
dDa:function dDa(d,e){this.a=d
this.b=e},
dDd:function dDd(d){this.a=d},
dDc:function dDc(d,e){this.a=d
this.b=e},
dDb:function dDb(d,e){this.a=d
this.b=e},
dDh:function dDh(d,e,f){this.a=d
this.b=e
this.c=f},
dDg:function dDg(d){this.a=d},
dDe:function dDe(d){this.a=d},
dDf:function dDf(d){this.a=d},
dDi:function dDi(d){this.a=d},
b91:function b91(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cIV:function cIV(d){this.a=d},
aJK:function aJK(){},
bv2:function bv2(){},
aKz:function aKz(){},
bvj:function bvj(){},
aKO:function aKO(){},
bvr:function bvr(){},
Fd:function Fd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
abU:function abU(d,e,f){this.a=d
this.b=e
this.c=f},
UO:function UO(d){this.a=d},
bin:function bin(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fj$=i
_.kU$=j
_.fO$=k
_.fk$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
e91:function e91(d,e){this.a=d
this.b=e},
e9q:function e9q(d){this.a=d},
e9f:function e9f(d){this.a=d},
e96:function e96(d){this.a=d},
e9g:function e9g(d,e){this.a=d
this.b=e},
e9h:function e9h(d){this.a=d},
e95:function e95(d){this.a=d},
e9d:function e9d(d){this.a=d},
e9e:function e9e(d){this.a=d},
e9c:function e9c(d){this.a=d},
e9i:function e9i(d,e){this.a=d
this.b=e},
e9b:function e9b(d,e){this.a=d
this.b=e},
e9j:function e9j(d,e){this.a=d
this.b=e},
e9a:function e9a(d,e){this.a=d
this.b=e},
e9k:function e9k(d,e){this.a=d
this.b=e},
e99:function e99(d,e){this.a=d
this.b=e},
e9l:function e9l(d){this.a=d},
e98:function e98(d,e){this.a=d
this.b=e},
e9m:function e9m(d){this.a=d},
e97:function e97(d){this.a=d},
e9n:function e9n(d){this.a=d},
e94:function e94(d){this.a=d},
e9o:function e9o(d){this.a=d},
e93:function e93(d){this.a=d},
e9p:function e9p(d){this.a=d},
e92:function e92(d){this.a=d},
bg0:function bg0(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aco:function aco(d,e){this.a=d
this.b=e
this.c=-1000},
UT:function UT(d){this.a=d},
aCF:function aCF(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fj$=h
_.kU$=i
_.fO$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
ecW:function ecW(d,e){this.a=d
this.b=e},
ecX:function ecX(d,e,f){this.a=d
this.b=e
this.c=f},
ed3:function ed3(d){this.a=d},
ed2:function ed2(d){this.a=d},
ed4:function ed4(d,e){this.a=d
this.b=e},
ed5:function ed5(d){this.a=d},
ed1:function ed1(d){this.a=d},
ed6:function ed6(d){this.a=d},
ed0:function ed0(d,e){this.a=d
this.b=e},
ed7:function ed7(d,e){this.a=d
this.b=e},
ed_:function ed_(d,e){this.a=d
this.b=e},
ed8:function ed8(d,e){this.a=d
this.b=e},
ecZ:function ecZ(d,e){this.a=d
this.b=e},
ed9:function ed9(d){this.a=d},
eda:function eda(d){this.a=d},
ecY:function ecY(d){this.a=d},
edb:function edb(d){this.a=d},
bjt:function bjt(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aKx:function aKx(){},
bvh:function bvh(){},
aKy:function aKy(){},
bvi:function bvi(){},
f6e(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a79,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iO,w,w,1/0)},
hUg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.V(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.L)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdL(j),j=j.gag(j);j.C();){s=j.gU(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e1(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bH(0,new B.fpa(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.vF.h(0,d[n]).a)return!1
m=C.eu([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.L)(j),++u){k=j[u]
if(m.K(0,k))l.push(k)}return m.a===d.length},
fSR(d){var w="TCAG",v=C.aJ(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cJ(w,v[0])*16+A.a.cJ(w,v[1])*4+A.a.cJ(w,v[2])]},
t_:function t_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7V:function b7V(d,e){this.a=d
this.b=e},
fpa:function fpa(d,e){this.a=d
this.b=e},
UR:function UR(d){this.a=d},
aCD:function aCD(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
ecq:function ecq(d){this.a=d},
ecp:function ecp(d,e){this.a=d
this.b=e},
ecc:function ecc(d,e){this.a=d
this.b=e},
ec6:function ec6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ec7:function ec7(d){this.a=d},
ecb:function ecb(d,e){this.a=d
this.b=e},
eca:function eca(d,e){this.a=d
this.b=e},
ec8:function ec8(d){this.a=d},
ec9:function ec9(d,e){this.a=d
this.b=e},
eck:function eck(){},
ecl:function ecl(d){this.a=d},
ecj:function ecj(d){this.a=d},
ecm:function ecm(d){this.a=d},
eci:function eci(d){this.a=d},
ecg:function ecg(d){this.a=d},
ech:function ech(d,e){this.a=d
this.b=e},
ecd:function ecd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecf:function ecf(d){this.a=d},
ecn:function ecn(d,e){this.a=d
this.b=e},
ece:function ece(d,e){this.a=d
this.b=e},
eco:function eco(d,e){this.a=d
this.b=e},
bgI:function bgI(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dm_:function dm_(d,e){this.a=d
this.b=e},
TP:function TP(d){this.a=d},
bhD:function bhD(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dLH:function dLH(d){this.a=d},
dLG:function dLG(d,e){this.a=d
this.b=e},
dLw:function dLw(d){this.a=d},
dLv:function dLv(){},
dLx:function dLx(d){this.a=d},
dLu:function dLu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLF:function dLF(){},
dLA:function dLA(){},
dLB:function dLB(d,e){this.a=d
this.b=e},
dLz:function dLz(d,e){this.a=d
this.b=e},
dLC:function dLC(d){this.a=d},
dLy:function dLy(d){this.a=d},
dLD:function dLD(d,e){this.a=d
this.b=e},
dLE:function dLE(d,e){this.a=d
this.b=e},
U4:function U4(d){this.a=d},
aBK:function aBK(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bq$=g
_.a7$=h
_.c=_.a=null},
dOw:function dOw(d){this.a=d},
dOv:function dOv(d,e){this.a=d
this.b=e},
dOj:function dOj(){},
dOi:function dOi(d,e){this.a=d
this.b=e},
dOk:function dOk(d){this.a=d},
dOo:function dOo(d){this.a=d},
dOn:function dOn(d,e){this.a=d
this.b=e},
dOp:function dOp(d){this.a=d},
dOm:function dOm(d,e){this.a=d
this.b=e},
dOq:function dOq(d){this.a=d},
dOl:function dOl(d,e){this.a=d
this.b=e},
dOr:function dOr(d){this.a=d},
dOs:function dOs(d){this.a=d},
dOt:function dOt(d){this.a=d},
dOu:function dOu(d){this.a=d},
bc3:function bc3(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d1p:function d1p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d1r:function d1r(d,e,f){this.a=d
this.b=e
this.c=f},
d1q:function d1q(d,e){this.a=d
this.b=e},
aJY:function aJY(){},
byd(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a79,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iO,w,w,1/0)},
fj6(d,e,f,g,h){var w,v,u=null,t=C.ii(u,u,u,u,C.dq(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),e),A.a5,A.ch,u,A.eq,A.cd)
t.eP()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.u(v/2,w.gbb(w)/2))
t.a6(d,w)},
hRl(){var w,v,u,t,s,r,q,p,o=new C.eT()
o.dI(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aW(v)
q=C.a([],u)
while(q.length<s){p=1+o.aB(5)
if(r.K(0,p))q.push(new C.z(p,1+o.aB(2+A.o.an(t,3))))}A.d.b_(q,new B.fk4())
w.push(new B.aQm(q))}return w},
a0L(d,e){var w,v,u,t
for(w=new C.Wp(d),v="";w.C();){u=C.jD(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jD(65+A.o.G(A.o.G(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
i2X(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aJ(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Wp(d),v=0,u="";w.C();){t=C.jD(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.G(v,p)
u+=C.jD(65+A.o.G(A.o.G(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aQm:function aQm(d){this.a=d},
bEf:function bEf(){},
fk4:function fk4(){},
Tj:function Tj(d){this.a=d},
bhi:function bhi(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dzv:function dzv(){},
dzI:function dzI(d){this.a=d},
dzH:function dzH(d,e,f){this.a=d
this.b=e
this.c=f},
dzJ:function dzJ(d){this.a=d},
dzG:function dzG(d,e){this.a=d
this.b=e},
dzw:function dzw(d,e){this.a=d
this.b=e},
dzB:function dzB(){},
dzC:function dzC(d){this.a=d},
dzA:function dzA(d){this.a=d},
dzD:function dzD(d,e){this.a=d
this.b=e},
dzz:function dzz(d,e){this.a=d
this.b=e},
dzE:function dzE(d,e){this.a=d
this.b=e},
dzy:function dzy(d,e){this.a=d
this.b=e},
dzF:function dzF(d){this.a=d},
dzx:function dzx(d){this.a=d},
b86:function b86(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cBs:function cBs(d,e){this.a=d
this.b=e},
Ui:function Ui(d){this.a=d},
bhP:function bhP(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a7$=h
_.c=_.a=null},
dSz:function dSz(d){this.a=d},
dSy:function dSy(d,e){this.a=d
this.b=e},
dSA:function dSA(d){this.a=d},
dSx:function dSx(d,e){this.a=d
this.b=e},
dSp:function dSp(d,e,f){this.a=d
this.b=e
this.c=f},
dSt:function dSt(d){this.a=d},
dSs:function dSs(d){this.a=d},
dSu:function dSu(d,e){this.a=d
this.b=e},
dSr:function dSr(d,e){this.a=d
this.b=e},
dSv:function dSv(d){this.a=d},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSw:function dSw(d,e){this.a=d
this.b=e},
bdw:function bdw(d,e,f){this.b=d
this.c=e
this.a=f},
d9a:function d9a(d,e){this.a=d
this.b=e},
d9b:function d9b(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ts:function Ts(d){this.a=d},
bhv:function bhv(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dDH:function dDH(d){this.a=d},
dDG:function dDG(d,e){this.a=d
this.b=e},
dDp:function dDp(){},
dDy:function dDy(d){this.a=d},
dDx:function dDx(){},
dDz:function dDz(d){this.a=d},
dDw:function dDw(){},
dDA:function dDA(d){this.a=d},
dDv:function dDv(d){this.a=d},
dDB:function dDB(d){this.a=d},
dDu:function dDu(d){this.a=d},
dDC:function dDC(d){this.a=d},
dDt:function dDt(d){this.a=d},
dDD:function dDD(d,e){this.a=d
this.b=e},
dDs:function dDs(d,e){this.a=d
this.b=e},
dDE:function dDE(d){this.a=d},
dDr:function dDr(d,e){this.a=d
this.b=e},
dDF:function dDF(d){this.a=d},
dDq:function dDq(d,e){this.a=d
this.b=e},
aJC:function aJC(){},
aK5:function aK5(){},
hhD(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gcm()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fYQ(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a3q(w,v,u,A.cI,C.V(x.N,x.y))},
hp7(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.fYR(d),d.d*f.b)},
fYR(d){return 42+(D.lL.ah(0,d.b)?(d.ch-1)*38:0)},
e7:function e7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tc:function tc(d,e,f,g){var _=this
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
a9e:function a9e(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aai:function aai(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3q:function a3q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bK2:function bK2(){},
bKd:function bKd(d){this.a=d},
bK8:function bK8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKe:function bKe(d){this.a=d},
bKf:function bKf(d){this.a=d},
bKh:function bKh(d){this.a=d},
bKi:function bKi(d){this.a=d},
bKg:function bKg(d){this.a=d},
bKj:function bKj(d,e,f){this.a=d
this.b=e
this.c=f},
bKk:function bKk(d){this.a=d},
bK4:function bK4(d){this.a=d},
bK5:function bK5(d){this.a=d},
bK3:function bK3(d){this.a=d},
bK6:function bK6(d,e,f){this.a=d
this.b=e
this.c=f},
bK7:function bK7(d){this.a=d},
bK1:function bK1(d){this.a=d},
bKl:function bKl(d,e){this.a=d
this.b=e},
bK9:function bK9(d,e){this.a=d
this.b=e},
bKc:function bKc(d){this.a=d},
bKb:function bKb(d){this.a=d},
bKa:function bKa(d){this.a=d},
ahr:function ahr(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bFr:function bFr(){},
bFs:function bFs(){},
mr:function mr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cis:function cis(d){this.a=d},
i0C(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fAz(),c9=new B.fAB(),d0=new B.fAC(),d1=new B.fAA(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new C.aa(w.a,w.b,w.c,w.d),A.bN,A.bI))
d3.bA(D.e02,D.dYR,c9.$2(A.dz,1.4))
d3.bA(D.dYH,D.dYG,c9.$2(A.bw,2.4))
d3.bA(D.dYI,W.aEP,c9.$2(A.bw,2.4))
if(c7){d2=c8.$1(A.fh.j(0.5))
d2.z=A.Qm
d3.ai(D.dYr,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.G(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aKB,A.aP,A.cn))
d3.ai(A.cJ,16,c8.$1(A.bw))
d3.ai(A.cJ,13,c8.$1(c7?A.aW.j(0.85):A.M))
if(c7){d2=d3.a
J.bA(d2.save())
d2.translate(0,4)
d3.j9(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ad,3).H()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.G(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).H()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ai(D.e_Z,2.4,c8.$1(c7?A.bn:A.ak))
d3.ai(D.e0G,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.es))
d2=$.X().r
t=x.v
q=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
q.E(new C.b5(-16,-26))
q.E(new C.ap(16,-26))
q.E(new C.ap(12,14))
q.E(new C.ap(-12,14))
q.E(new C.bE())
d3.aO(q,c8.$1(A.fh.j(0.35)))
if(c7){d2=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(-14,-10))
d2.E(new C.ap(14,-10))
d2.E(new C.ap(12,14))
d2.E(new C.ap(-12,14))
d2.E(new C.bE())
d3.aO(d2,c8.$1(A.aB.j(0.7)))}d3.aO(q,c9.$2(A.ad,1.6))
d2=d3.a
J.bA(d2.save())
d2.translate(0,10)
d3.j9(0,d4.y)
d3.bA(D.a4j,D.aF4,c9.$2(A.bV,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.G(s+v*0.33,1)
r=c8.$1(A.f9).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.ai(A.id,3,c8.$1(c7?A.bn:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a27[m]
r=c9.$2(A.bw,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bA(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.cu(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(C.c4(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
w.E(new C.b5(-24,-12))
w.E(new C.ap(10,-12))
w.E(new C.ap(10,2))
w.E(new C.ap(-2,2))
w.E(new C.ap(-6,22))
w.E(new C.ap(-16,22))
w.E(new C.ap(-14,2))
w.E(new C.ap(-24,2))
w.E(new C.bE())
d3.aO(w,d1.$3(D.eCm,A.aM,A.da))
d3.aY(D.eBM,c8.$1(A.dL))
d2=d3.a
J.bA(d2.save())
d2.translate(18,-5)
d3.j9(0,d4.y*2)
d3.bA(A.J,D.dYL,c9.$2(A.bV,2.4))
d3.bA(A.a4i,D.dYK,c9.$2(A.hF,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.G(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dN.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(16,-6))
d2.E(new C.ap(52,-26))
d2.E(new C.ap(52,18))
d2.E(new C.ap(16,4))
d2.E(new C.bE())
d3.aO(d2,c8.$1(A.bJ.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eCs,A.bo,A.cC))
k=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
k.E(new C.b5(4,-6))
k.E(new C.ap(18,-12))
k.E(new C.ap(18,12))
k.E(new C.ap(4,6))
k.E(new C.bE())
d3.aO(k,c8.$1(A.es))
d3.ai(D.dYP,7,c8.$1(c7?A.c:A.dL))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(M.mN))
if(c7)j=d4.ax>0.5||A.o.G(A.k.bw(d5*17),3)!==0
else j=!1
i=j?A.bZ:D.beC
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bZ.j(0.35))
t.z=A.lg
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e08,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eCy,A.bV,A.bo))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bJ.j(0.75):A.aA))
if(c7){d2=d3.a
J.bA(d2.save())
d2.translate(-7,8)
d3.j9(0,d4.y*0.5)
d3.i2(C.cu(A.J,7,22),c8.$1(A.da))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(M.mN))
if(c7)d6.$5(d3,"0:"+A.a.aT(A.o.u(59-A.o.G(A.k.bw(d5),60)),2,"0"),D.dYQ,A.bc,6.5)
d3.ai(D.dZ1,4,c8.$1(A.dL))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ai(A.Ra,10,c8.$1(c7?A.cp:A.bw))
d2=d3.a
J.bA(d2.save())
d2.translate(0,-8)
d3.j9(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e0I,A.c,16)
d2.restore()
d3.ai(A.jX,6,c8.$1(A.d7))
d3.ai(A.jX,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.Ra,14+v*6+A.k.G(t,6))
r=c9.$2(A.cp.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c4(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bA(D.e07,D.e0E,c9.$2(A.bw,4))
d2=d3.a
J.bA(d2.save())
d3.j9(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eCn,A.bV,A.ak))
d3.ai(D.aER,8,c8.$1(A.aA))
d3.ai(D.aER,4.5,c8.$1(c7?A.aW:A.cC))
d3.ai(D.e05,2.2,c8.$1(c7&&A.o.G(A.k.bw(d5*1.6),2)===0?A.aB:A.k8))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e0g,A.aB,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eCv,A.j3,A.f5))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dJ))
if(c7){d2=d5*2.3
d3.ai(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aY(new C.aa(-18,t,-15.6,t+8),c8.$1(A.bc))
d2=-9+Math.sin(d2-0.4)*6
d3.aY(new C.aa(15.6,d2,18,d2+8),c8.$1(A.bZ))}d3.ai(D.e01,4,c8.$1(A.aX))
d3.ai(D.dYM,2.4,c8.$1(A.aB))
d3.ai(D.dYZ,2.4,c8.$1(A.bn))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.aA))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dJ))
if(c7){d2=$.X()
t=C.a([],x.v)
h=new C.aQ(d2.r,A.ap,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.G((l+25)/50-d2,1)
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
h.e=null}}d3.aO(h,c9.$2(A.bc,1.8))
d6.$5(d3,"72",D.dYN,A.fY,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e0k,A.fY.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ai(D.e0a,3,c8.$1(c7?A.bn:A.bw))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cw.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aY(D.eCp,c8.$1(F.rR))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bA(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.rW(0,-1,1)
d3.i2(C.cu(A.J,8,14),c8.$1(A.cv))
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,0))
d2.E(new C.ap(-12,-4))
d2.E(new C.ap(-12,4))
d2.E(new C.bE())
d3.aO(d2,c8.$1(A.cb))
d3.ai(D.dZt,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.G(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.G(v,2)
r=c9.$2(A.ad,1).H()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.X().r
t=x.v
e=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
e.E(new C.b5(-9,22))
e.E(new C.ap(-5,-16))
e.E(new C.ap(5,-16))
e.E(new C.ap(9,22))
e.E(new C.bE())
d3.aO(e,d1.$3(D.eCT,A.c,A.bL))
d3.aY(D.eCS,c8.$1(c7?A.dN:A.bw))
s=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
s.E(new C.b5(-7,-22))
s.E(new C.ap(0,-29))
s.E(new C.ap(7,-22))
s.E(new C.bE())
d3.aO(s,c8.$1(A.ew))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aQ(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(0,-19))
t=d*34
d2.E(new C.ap(t,-26))
d2.E(new C.ap(t,-12))
d2.E(new C.bE())
d3.aO(d2,c8.$1(A.dN.j(0.45)))
d2=c8.$1(A.dN.j(0.35))
d2.z=A.Qm
d3.ai(D.dYs,14,d2)}return!0
case"discoball":d3.bA(D.dYx,L.aEN,c9.$2(A.dL,1.4))
d3.ai(A.J,16,d1.$3(D.eCa,A.aP,A.ak))
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
a0=22+A.o.G(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d03[A.o.G(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eC8,A.cn,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eC1,A.aL,A.bI))
d3.bA(D.dYw,D.dYy,c9.$2(A.bw,1.6))
d3.ai(D.dYz,2.2,c8.$1(c7?A.aB:A.bw))
a1=c7&&A.k.G(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a28[m]
if(c7)t=a1?A.b7:A.fi
else t=A.cC
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bA(d2.save())
d2.translate(14,0)
d3.j9(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bA(A.J,D.a4f,c9.$2(A.bI,4))
d2.restore()
d3.bA(D.e_V,D.e0e,c9.$2(A.bI,4))
d3.aY(D.eCR,c8.$1(c7?A.b7.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.avY[m]+1,d2,10,14,2)
p=C.aq(A.bJ,A.da,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.ep(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eCo,A.bV,A.bo))
for(m=0;m<2;++m){l=D.avY[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fC:A.aA).H()
t.drawRRect(C.ep(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cv.j(0.5))
s.z=G.mo
r=s.H()
t.drawRRect(C.ep(d2),r)
r.delete()}}d3.bA(D.dZ5,D.dZm,c9.$2(A.aA,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cC))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.G(t+v*40,360)
i=c7?new H.mJ(1,a3,0.8,1).iE():A.es
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mo
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dL))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eCd,A.cw,A.Kl))
d3.ai(D.e0l,8,c8.$1(A.qx))
d2=d3.a
J.bA(d2.save())
d2.translate(-2,9)
d3.j9(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fh,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
t.E(new C.b5(16,6))
t.E(new C.ap(26,6))
t.E(new C.ap(26,-20))
t.E(new C.ap(10,-20))
d3.aO(t,c9.$2(A.bI,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.G(t+v*0.2,1)
r=c8.$1(A.hf).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ai(D.dZU,3.2,c8.$1(A.hf.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bA(d2.save())
d3.j9(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eCq,A.j_,A.rU))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.es))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.G(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cv.j(0.4))
d2.z=G.mo
d3.ai(D.dZ0,8,d2)}return!0
case"headphones":d3.fh(C.cu(A.dB,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bw,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.avZ[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.aa(s,0,s+14,20),A.by,A.pe).H()
d2.drawRRect(C.ep(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bU(new C.u(l,10),10+v*5+A.k.G(t,5))
o=s?2.2:-0.9
r=c9.$2(A.ey.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c4(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.G(d5*14,8)),A.k5,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eC6,A.dL,A.es))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dJ))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aT(A.o.u(C.dh(a4)),2,"0")+":"+A.a.aT(A.o.u(C.fY(a4)),2,"0"),D.dYD,A.bc,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.DI,A.fY,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.G(A.k.bw(d5*2),6)),A.dB,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(M.mN))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bI,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(a5),$.pi(),!0)
d2.translate(-27,-19)
E.Kw(d3,D.eI1,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.uO))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new C.aa(a6.a,a6.b,a6.c,a6.d),A.dS,A.dp))
d3.aD(a6,c9.$2(A.b5,1.2))
d3.ai(D.aFb,9,c8.$1(A.aA))
d3.ai(D.aFb,6,c9.$2(A.da,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.aA))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dJ))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.bc:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.dZY,s,8.2)
d3.ai(D.dYS,2.4,c8.$1(c7?A.bn:A.aK))
d6.$5(d3,"IN",D.e0f,A.ad,6)
d6.$5(d3,"OUT",D.dZM,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bI,A.aB,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.ai(D.dYt,3,c8.$1(A.aK))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eC2,A.es,A.hC))
d6.$5(d3,"7805",D.a4j,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.d5w[m]-1
r=c8.$1(A.e2).H()
d2.drawRect(C.c4(new C.aa(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.G(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e0H,A.bh,9)
return!0
case"diode":d3.bA(D.aFf,D.aF_,c9.$2(A.e2,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aI.j(0.85)))
d3.aY(D.eBS,c8.$1(A.bh))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dN.j(0.4))
t.z=A.je
d3.aD(d2,t)}d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,-4))
d2.E(new C.ap(-8,4))
d2.E(new C.ap(-1,0))
d2.E(new C.bE())
d3.aO(d2,c8.$1(A.aX))
d6.$5(d3,"one way",D.e03,A.az,8)
return!0
case"ldr":d3.bA(D.aFf,D.a4j,c9.$2(A.e2,2.4))
d3.bA(D.aF4,D.aF_,c9.$2(A.e2,2.4))
d3.ai(A.J,12,c8.$1(A.da))
d3.ai(A.J,12,c9.$2(A.t4,1.6))
d2=$.X()
t=C.a([],x.v)
a8=new C.aQ(d2.r,A.ap,c6,c6,t)
a8.E(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bx(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aO(a8,c9.$2(A.bJ,1.4))
d2=C.aq(A.bw,A.dN,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e_W,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.e8
break A}if("sonytv"===d2){t=A.qq
break A}if("appletv"===d2){t=A.e2
break A}t=F.DK
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aD(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bA(p.save())
p.clipRRect(C.ep(a5),$.pi(),!0)
p.translate(t,s)
E.fV8(d3,new C.at(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ai(D.dZn,1.6,c8.$1(A.bc))}else{d3.aD(a5,c8.$1(D.uO))
p=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
p.E(new C.b5(t,s))
p.E(new C.ap(t+24,s))
p.E(new C.ap(t,s+22))
p.E(new C.bE())
d3.aO(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dL))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.oJ[m]
s=$.X()
p=C.a([],t)
s=new C.aQ(s.r,A.ap,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bE())
r=c8.$1(A.dL).H()
p=s.gbI().a.snapshot()
d2.drawPath((s.e=new C.cF(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e_z,A.bV,5.5)
break
case"appletv":d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,18))
d2.E(new C.ap(8,18))
d2.E(new C.ap(12,25))
d2.E(new C.ap(-12,25))
d2.E(new C.bE())
d3.aO(d2,c8.$1(D.W3))
d6.$5(d3,"Apple TV",D.dZZ,A.bw,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bdb))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dn,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e0D,F.rR,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lL.h(0,d2)
b1=b0.b===D.vU
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
d3.aD(w,d1.$3(new C.aa(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.bA(t.save())
t.clipRRect(C.ep(a5),$.pi(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.Kw(d3,new C.at(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.uO))
if(b1){t=a5.b
s=a5.d
d3.bA(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ai(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.es))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bV))
if(c7){d6.$5(d3,"NGMY",D.e0K,A.aA,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.G(v,4)===3?14:22
r=c8.$1(A.bo).H()
d2.drawRect(C.c4(new C.aa(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ai(A.aEL,1.6,c8.$1(A.aA))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eCz,A.cn,A.bo))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(b8),$.pi(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.Kw(d3,new C.at(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.uO))
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-38,16))
d2.E(new C.ap(38,16))
d2.E(new C.ap(34,21))
d2.E(new C.ap(-34,21))
d2.E(new C.bE())
d3.aO(d2,c8.$1(D.W3))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bo))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eCD,A.bN,A.cn))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(b9),$.pi(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.Kw(d3,new C.at(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.uO))
d3.ai(D.aEG,2,c8.$1(A.bI))
d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,18))
d2.E(new C.ap(6,18))
d2.E(new C.ap(10,26))
d2.E(new C.ap(-10,26))
d2.E(new C.bE())
d3.aO(d2,c8.$1(D.W3))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.e8))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(c0),$.pi(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.Kw(d3,new C.at(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.uO))
d3.aY(D.eCJ,c8.$1(A.bo))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dL))
return!0
case"projector":if(c7){d2=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(14,4))
d2.E(new C.ap(-32,-42))
d2.E(new C.ap(34,-42))
d2.E(new C.bE())
d3.aO(d2,c8.$1(A.dN.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(c1),$.pi(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.Kw(d3,new C.at(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eCr,A.iI,A.dL))
d3.ai(D.aEQ,7,c8.$1(A.aA))
d3.ai(D.aEQ,4,c8.$1(c7?A.dN:A.cC))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dn,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.aA))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(M.mN))
d3.aD(c2,c9.$2(A.bw,1.2))
if(c7){c3=new C.aQ($.X().r,A.ap,c6,c6,C.a([],x.v))
c3.E(new C.b5(-26,4))
c3.E(new C.cS(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new C.ap(22,-16))
d3.aO(c3,c9.$2(A.aW,2.2))
d2=A.k.G(d5*6,48)
d3.ai(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.bc))
d6.$5(d3,""+(88+A.o.G(A.k.bw(d5*2),5)),D.dZV,A.c,10)
d6.$5(d3,"km/h",D.dZS,A.az,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new C.aa(c4.a,c4.b,c4.c,c4.d),A.dL,A.es))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ep(c5),$.pi(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.Kw(d3,new C.at(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.by.j(0.2))
d2.z=A.lg
d3.ai(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bA(D.e0p,D.e0u,c9.$2(A.bo,4))
d3.bA(D.dZo,D.dZw,c9.$2(A.bo,4))
return!0}return!1},
fAz:function fAz(){},
fAB:function fAB(){},
fAC:function fAC(){},
fAA:function fAA(){},
fXL(d,e,f,g){return new B.ahp(d,g,f,e)},
F1(d,e,f){return new B.b93(d,e,f)},
ahp:function ahp(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ahq:function ahq(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fj$=h
_.kU$=i
_.fO$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
bF5:function bF5(d,e){this.a=d
this.b=e},
bF6:function bF6(d){this.a=d},
bF4:function bF4(d){this.a=d},
bF7:function bF7(){},
bF8:function bF8(d){this.a=d},
bF9:function bF9(d,e,f){this.a=d
this.b=e
this.c=f},
bF3:function bF3(d,e){this.a=d
this.b=e},
bF1:function bF1(d,e){this.a=d
this.b=e},
bF2:function bF2(d,e,f){this.a=d
this.b=e
this.c=f},
bEW:function bEW(d,e){this.a=d
this.b=e},
bEX:function bEX(){},
bEY:function bEY(d,e){this.a=d
this.b=e},
bEZ:function bEZ(d,e){this.a=d
this.b=e},
bF_:function bF_(d){this.a=d},
bF0:function bF0(d){this.a=d},
bFo:function bFo(d){this.a=d},
bFp:function bFp(){},
bEz:function bEz(){},
bFq:function bFq(d,e){this.a=d
this.b=e},
bFn:function bFn(d,e,f){this.a=d
this.b=e
this.c=f},
bFi:function bFi(d){this.a=d},
bFf:function bFf(d,e,f){this.a=d
this.b=e
this.c=f},
bFg:function bFg(d,e){this.a=d
this.b=e},
bFj:function bFj(d){this.a=d},
bFd:function bFd(d,e){this.a=d
this.b=e},
bFe:function bFe(d,e){this.a=d
this.b=e},
bFh:function bFh(d){this.a=d},
bFk:function bFk(d){this.a=d},
bFb:function bFb(d,e){this.a=d
this.b=e},
bFc:function bFc(d,e){this.a=d
this.b=e},
bFl:function bFl(d){this.a=d},
bFa:function bFa(d){this.a=d},
bFm:function bFm(d){this.a=d},
bEA:function bEA(d,e){this.a=d
this.b=e},
bET:function bET(d,e){this.a=d
this.b=e},
bEV:function bEV(d,e){this.a=d
this.b=e},
bEU:function bEU(d,e){this.a=d
this.b=e},
bEG:function bEG(d,e){this.a=d
this.b=e},
bEH:function bEH(d){this.a=d},
bEF:function bEF(d){this.a=d},
bEI:function bEI(d,e,f){this.a=d
this.b=e
this.c=f},
bEE:function bEE(d,e){this.a=d
this.b=e},
bEL:function bEL(d,e){this.a=d
this.b=e},
bEM:function bEM(d,e){this.a=d
this.b=e},
bEN:function bEN(d,e){this.a=d
this.b=e},
bEO:function bEO(d,e,f){this.a=d
this.b=e
this.c=f},
bED:function bED(d,e){this.a=d
this.b=e},
bEP:function bEP(d,e,f){this.a=d
this.b=e
this.c=f},
bEC:function bEC(d,e){this.a=d
this.b=e},
bEQ:function bEQ(d,e,f){this.a=d
this.b=e
this.c=f},
bEB:function bEB(d,e){this.a=d
this.b=e},
bER:function bER(d){this.a=d},
bES:function bES(d){this.a=d},
bEJ:function bEJ(d){this.a=d},
bEK:function bEK(d){this.a=d},
b93:function b93(d,e,f){this.a=d
this.b=e
this.c=f},
fa8:function fa8(){},
fa9:function fa9(){},
faa:function faa(){},
f9W:function f9W(){},
fab:function fab(){},
f9V:function f9V(){},
fac:function fac(){},
fa_:function fa_(){},
f9U:function f9U(){},
fa0:function fa0(){},
f9T:function f9T(){},
fa1:function fa1(){},
f9S:function f9S(){},
fa2:function fa2(){},
f9Q:function f9Q(){},
f9R:function f9R(){},
fa3:function fa3(){},
f9O:function f9O(){},
f9P:function f9P(){},
fa4:function fa4(){},
f9N:function f9N(){},
U5:function U5(d){this.a=d},
aBL:function aBL(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dOE:function dOE(d,e){this.a=d
this.b=e},
dON:function dON(d){this.a=d},
dOO:function dOO(){},
dOP:function dOP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOQ:function dOQ(){},
dOD:function dOD(d){this.a=d},
dOC:function dOC(d,e,f){this.a=d
this.b=e
this.c=f},
dOB:function dOB(d,e){this.a=d
this.b=e},
dOz:function dOz(d){this.a=d},
dOA:function dOA(){},
dOM:function dOM(d){this.a=d},
dOL:function dOL(d){this.a=d},
dOJ:function dOJ(d,e){this.a=d
this.b=e},
dOH:function dOH(d){this.a=d},
dOI:function dOI(){},
dOK:function dOK(d,e,f){this.a=d
this.b=e
this.c=f},
dOF:function dOF(d,e){this.a=d
this.b=e},
dOG:function dOG(){},
dOS:function dOS(d){this.a=d},
dOT:function dOT(d,e){this.a=d
this.b=e},
dOR:function dOR(){},
dOU:function dOU(d,e){this.a=d
this.b=e},
dOV:function dOV(d){this.a=d},
dOW:function dOW(d){this.a=d},
avS:function avS(d,e){this.c=d
this.a=e},
b7f:function b7f(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
cz_:function cz_(d){this.a=d},
b7e:function b7e(d,e){this.b=d
this.a=e},
cyZ:function cyZ(d){this.a=d},
awa:function awa(){},
awb:function awb(){},
aI8:function aI8(){},
bv5:function bv5(){},
i0D(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.vM,23)
$.X()
b8=C.M()
b8.r=A.aA.gp(0)
b9.ai(A.vM,25,b8)
b8=C.M()
b8.sau(D.e8t.aw(0,v))
b9.ai(A.vM,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.bh.gp(0)
o.c=A.o.G(u,5)===0?1.8:1
n=o.H()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.M()
r.r=A.bL.gp(0)
r.c=2
r.d=A.bO
b9.bA(A.vM,new C.u(b8*18,s*18-2),r)
r=C.M()
r.r=A.bh.gp(0)
b9.ai(A.vM,3,r)
c2.$5(b9,w?"V":"A",D.e0x,A.bh,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e00,A.aA,9.5)
return!0
case"fan":b8=C.bz(D.eBZ,A.hz)
$.X()
s=C.M()
s.r=A.bw.gp(0)
b9.aD(b8,s)
s=C.M()
s.r=A.ak.gp(0)
b9.aY(D.eCK,s)
s=C.M()
s.r=A.M.j(0.6).gp(0)
b9.ai(D.vN,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bA(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cu(A.aEK,18,10)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.hf.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c4(s),n)
n.delete()
b8.restore()}b8=C.M()
b8.r=A.bl.gp(0)
b9.ai(D.vN,4,b8)
b8=C.M()
b8.b=A.ae
b8.c=2
b8.r=A.cn.gp(0)
b9.ai(D.vN,22,b8)
b8=C.M()
b8.b=A.ae
b8.c=0.8
b8.r=A.j4.gp(0)
b9.ai(D.vN,14,b8)
return!0
case"speaker":l=C.bz(D.aKB,A.ud)
$.X()
b8=C.M()
b8.sau(D.amX.aw(0,new C.aa(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.M()
b8.sau(D.e8P.aw(0,C.bU(A.cx,15)))
b9.ai(A.cx,14+k,b8)
b8=C.M()
b8.r=A.dL.gp(0)
b9.ai(A.cx,5,b8)
b8=C.M()
b8.r=A.bo.gp(0)
b9.ai(D.aEM,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.dZ4,6+u*6+A.k.G(b8,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bZ.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c4(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bz(D.eCC,A.ud)
$.X()
b8=C.M()
b8.sau(D.bS1.aw(0,new C.aa(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bz(D.aKD,A.ig)
s=C.M()
s.r=A.hC.gp(0)
b9.aD(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.Bo(i)<500?":":" "
g=A.a.aT(A.o.u(C.dh(i)),2,"0")
f=A.a.aT(A.o.u(C.fY(i)),2,"0")
b8=C.M()
b8.r=A.bc.j(0.12).gp(0)
b9.aY(D.aKD,b8)
c2.$5(b9,g+h+f,D.e0i,A.bc,21)}b8=C.M()
b8.r=A.cn.gp(0)
b9.ai(D.e0h,2.4,b8)
b8=C.M()
b8.r=A.cn.gp(0)
b9.ai(D.dZ8,2.4,b8)
return!0
case"calculator":j=C.bz(D.eCi,A.h9)
$.X()
b8=C.M()
b8.sau(D.bRM.aw(0,new C.aa(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bz(D.eCc,A.h8)
s=C.M()
s.r=(b7?A.Wf:D.bf7).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e0_,A.V6,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bz(new C.aa(q,s,q+6,r),A.RD)
$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cb:A.bV).gp(0)
n=p.H()
b8.drawRRect(C.ep(q),n)
n.delete()}return!0
case"phone":j=C.bz(D.eC9,A.h9)
$.X()
b8=C.M()
b8.r=M.mN.gp(0)
b9.aD(j,b8)
b8=C.M()
b8.b=A.ae
b8.c=1.9
b8.r=D.aew.gp(0)
b9.aD(j,b8)
a0=C.bz(D.eC0,A.hz)
if(b7){b8=C.M()
b8.sau(D.bTj.aw(0,new C.aa(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.bA(b8.save())
b8.clipRRect(C.ep(a0),$.pi(),!0)
b8.translate(-12,-25)
E.Kw(b9,D.eHD,c1,b6)
b8.restore()
a1=A.k.G(c1*0.12,1)
b8=C.bz(D.eBY,A.h8)
s=C.M()
s.r=A.aX.gp(0)
b9.aD(b8,s)
s=C.M()
s.r=A.bc.gp(0)
b9.aY(new C.aa(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e_h,A.c,6)}else{b8=C.M()
b8.r=D.uO.gp(0)
b9.aD(a0,b8)}b8=C.bz(D.eCU,D.e8Y)
s=C.M()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=C.bz(D.eCB,A.rf)
$.X()
b8=C.M()
b8.sau(D.bSh.aw(0,new C.aa(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.avZ[a2]
s=a3<0?-4:4
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.cC.gp(0)
r.c=4
r.d=A.bO
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.G(A.k.bw(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bn:A.aK).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bU(D.vN,8+u*6+A.k.G(s,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hu.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c4(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bz(D.eCh,A.hz)
s=$.X()
r=C.M()
r.r=A.es.gp(0)
b9.aD(b8,r)
if(b7){b8=C.M()
b8.r=A.aB.j(0.5*a5).gp(0)
b8.z=A.yD
b9.ai(A.vM,34,b8)}a6=new C.aQ(s.r,A.ap,b6,b6,C.a([],x.v))
a6.E(new C.b5(-16,12))
a6.E(new C.ap(-16,-2))
a6.E(new C.cS(0,-30,16,-2))
a6.E(new C.ap(16,12))
a6.E(new C.bE())
b8=C.M()
b8.r=C.aq(A.ew,D.b7L,a5).gp(0)
b9.aO(a6,b8)
b8=C.M()
b8.b=A.ae
b8.c=1.4
b8.r=A.c_.gp(0)
b9.aO(a6,b8)
if(b7){b8=b9.a
J.bA(b8.save())
b8.translate(0,-2)
b9.j9(0,c1*7)
s=C.M()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bA(A.J,D.aEM,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bA(b8.save())
b8.translate(0,a7)
s=$.X().r
r=x.v
j=new C.aQ(s,A.ap,b6,b6,C.a([],r))
j.E(new C.b5(-28,8))
j.E(new C.ap(-28,-2))
j.E(new C.ap(-16,-4))
j.E(new C.ap(-10,-16))
j.E(new C.ap(10,-16))
j.E(new C.ap(18,-4))
j.E(new C.ap(28,-2))
j.E(new C.ap(28,8))
j.E(new C.bE())
q=C.M()
q.sau(D.bQp.aw(0,D.eCu))
b9.aO(j,q)
q=new C.aQ(s,A.ap,b6,b6,C.a([],r))
q.E(new C.b5(-8,-4))
q.E(new C.ap(-4,-13))
q.E(new C.ap(4,-13))
q.E(new C.ap(4,-4))
q.E(new C.bE())
p=C.M()
p.r=A.fh.gp(0)
b9.aO(q,p)
r=new C.aQ(s,A.ap,b6,b6,C.a([],r))
r.E(new C.b5(8,-4))
r.E(new C.ap(8,-13))
r.E(new C.ap(11,-13))
r.E(new C.ap(15,-4))
r.E(new C.bE())
s=C.M()
s.r=A.fh.gp(0)
b9.aO(r,s)
for(a2=0;a2<2;++a2){a3=D.d5n[a2]
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.aA.gp(0)
n=s.H()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bA(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.bV.gp(0)
q.c=1.6
n=q.H()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.G(s+u*8,14)
q=-4+u*5
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.az.gp(0)
p.c=1.6
n=p.H()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.X().r
s=x.v
j=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
j.E(new C.b5(-18,20))
j.E(new C.ap(-14,-12))
j.E(new C.cS(0,-20,14,-12))
j.E(new C.ap(18,20))
j.E(new C.bE())
r=C.M()
r.sau(D.bRs.aw(0,D.eCg))
b9.aO(j,r)
r=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
r.E(new C.b5(14,-10))
r.E(new C.ap(30,-22))
r.E(new C.ap(32,-18))
r.E(new C.ap(16,-4))
r.E(new C.bE())
q=C.M()
q.r=A.e2.gp(0)
b9.aO(r,q)
s=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
s.E(new C.b5(-14,-8))
s.E(new C.cS(-34,-6,-18,12))
b8=C.M()
b8.b=A.ae
b8.c=5
b8.r=A.aA.gp(0)
b9.aO(s,b8)
b8=C.M()
if(b7){s=C.aq(A.cv,A.uN,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.es
b8.r=s.gp(0)
b9.aY(D.eCf,b8)
if(b7){b8=C.M()
b8.r=A.cv.j(0.3).gp(0)
b8.z=A.lg
b9.ai(A.aEI,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.G(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.M()
b8.r=A.aA.gp(0)
b9.ai(D.dYq,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aQ($.X().r,A.ap,b6,b6,C.a([],x.v))
b8.E(new C.b5(-10,-14))
b8.E(new C.ap(-30,24))
b8.E(new C.ap(10,24))
b8.E(new C.ap(8,-14))
b8.E(new C.bE())
s=C.M()
s.r=A.dN.j(0.28*u).gp(0)
b9.aO(b8,s)
s=C.M()
s.r=A.dN.j(0.5*u).gp(0)
s.z=X.H3
b9.ai(D.e0m,24,s)}b8=C.bz(D.eCQ,A.hz)
s=$.X()
r=C.M()
r.r=A.es.gp(0)
b9.aD(b8,r)
r=C.M()
r.r=A.dL.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.dYE,D.aES,r)
r=C.M()
r.r=A.dL.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.aES,D.e0n,r)
a9=new C.aQ(s.r,A.ap,b6,b6,C.a([],x.v))
a9.E(new C.b5(-14,-16))
a9.E(new C.ap(6,-26))
a9.E(new C.ap(10,-12))
a9.E(new C.ap(-10,-6))
a9.E(new C.bE())
s=C.M()
s.r=(b7?A.aM:A.jJ).gp(0)
b9.aO(a9,s)
b8=C.M()
b8.r=(b7?A.c:A.bo).gp(0)
b9.ai(D.e0o,4,b8)
return!0
case"lights":b8=$.X().r
s=x.v
b0=new C.aQ(b8,A.ap,b6,b6,C.a([],s))
b0.E(new C.b5(-34,-6))
b0.E(new C.cS(0,22,34,-6))
r=C.M()
r.b=A.ae
r.c=2
r.r=A.he.gp(0)
b9.aO(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.G(q+u*0.7,1.8)<1.1
if(b2){b3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a1d[u].j(0.6).gp(0)
b3.z=A.Qm
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aQ(b8,A.ap,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cS(p,o+17,p-5,b5))
b3.push(new C.bE())
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a1d[u]
else{o=C.aq(D.a1d[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbI().a.snapshot()
r.drawPath((b4.e=new C.cF(p)).a,n)
n.delete()}return!0}return B.i0C(b9,c0,c1,c2)},
fJ:function fJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fTg(d){var w=D.lL.h(0,d)
return(w==null?null:w.b)===D.z1},
i1J(d,e,f){return C.a5(d,!1).ce(C.ut(null,!1,!0,!0,new B.fF8(e,f),A.eN,null,A.pr,new B.fF9(),x.H))},
IE:function IE(d,e){this.a=d
this.b=e},
lY:function lY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fF8:function fF8(d,e){this.a=d
this.b=e},
fF9:function fF9(){},
TN:function TN(d,e,f){this.c=d
this.d=e
this.a=f},
bhB:function bhB(d,e){var _=this
_.d=$
_.e=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
dKA:function dKA(d){this.a=d},
dKz:function dKz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKx:function dKx(){},
dKy:function dKy(d){this.a=d},
dKw:function dKw(d){this.a=d},
dKv:function dKv(d,e){this.a=d
this.b=e},
dKu:function dKu(d,e){this.a=d
this.b=e},
dKt:function dKt(d){this.a=d},
dKs:function dKs(d){this.a=d},
dKo:function dKo(d){this.a=d},
dKn:function dKn(d){this.a=d},
dKr:function dKr(d,e,f){this.a=d
this.b=e
this.c=f},
dKq:function dKq(d){this.a=d},
dKp:function dKp(d){this.a=d},
bta:function bta(d,e,f){this.b=d
this.c=e
this.a=f},
ads:function ads(d,e,f){this.b=d
this.c=e
this.a=f},
aJV:function aJV(){},
feo(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.r,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ao,C.d(e,w,w,w,w,w,w,A.zg,A.L,w,w),A.ay,C.c_(A.fM,g,A.bt,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.Ve,w,u,v,w,w,A.n),w,w,w,A.ez,A.a9,w,w,w),w,w,w)},
fTm(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eT()
b4.dI(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aB(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.V(u,t)
m=w
l=0
k=N.pY
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
a2=b4.hg()?new C.z(f,-g):new C.z(-f,g)
a3=new C.z(-f,-g).A(0,a2)
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
a9=C.eu([A.d.gal(g)],u)
A.d.fq(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.L)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.K(0,a7)}b0=C.aW(u)
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
return new B.aUT(b0,a9,C.V(u,t),q,N.pY,w+v)}return new B.aUT(C.aW(u),C.eu([25],u),C.V(u,t),21,N.pY,1)},
hhv(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aW(x.S),n=d.e,m=A.o.G(n,7),l=A.o.an(n,7),k=d.f
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
if(q==="/")k=new C.z(-s,-t)
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bms(p,o)},
hcU(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aUT:function aUT(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
UB:function UB(d){this.a=d},
bia:function bia(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fj$=g
_.kU$=h
_.fO$=i
_.fk$=j
_.bq$=k
_.a7$=l
_.c=_.a=null},
e4B:function e4B(d){this.a=d},
e4A:function e4A(d,e){this.a=d
this.b=e},
e4C:function e4C(){},
e4r:function e4r(d,e){this.a=d
this.b=e},
e4s:function e4s(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e4v:function e4v(d,e){this.a=d
this.b=e},
e4t:function e4t(d){this.a=d},
e4u:function e4u(d){this.a=d},
e4w:function e4w(d){this.a=d},
e4x:function e4x(d){this.a=d},
e4y:function e4y(d){this.a=d},
e4z:function e4z(d,e){this.a=d
this.b=e},
bfb:function bfb(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dee:function dee(d,e,f){this.a=d
this.b=e
this.c=f},
deh:function deh(d,e,f){this.a=d
this.b=e
this.c=f},
def:function def(d){this.a=d},
deg:function deg(d){this.a=d},
UD:function UD(d){this.a=d},
aCp:function aCp(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fj$=g
_.kU$=h
_.fO$=i
_.fk$=j
_.bq$=k
_.a7$=l
_.c=_.a=null},
e4U:function e4U(d){this.a=d},
e4T:function e4T(d,e){this.a=d
this.b=e},
e4V:function e4V(){},
e4F:function e4F(){},
e4O:function e4O(d,e){this.a=d
this.b=e},
e4L:function e4L(d){this.a=d},
e4H:function e4H(d){this.a=d},
e4M:function e4M(d){this.a=d},
e4N:function e4N(d){this.a=d},
e4G:function e4G(d){this.a=d},
e4P:function e4P(d){this.a=d},
e4K:function e4K(d,e){this.a=d
this.b=e},
e4Q:function e4Q(d){this.a=d},
e4J:function e4J(d,e){this.a=d
this.b=e},
e4R:function e4R(d){this.a=d},
e4I:function e4I(d,e){this.a=d
this.b=e},
e4S:function e4S(d){this.a=d},
bfq:function bfq(d,e){this.b=d
this.a=e},
aKm:function aKm(){},
bva:function bva(){},
aKn:function aKn(){},
bvb:function bvb(){},
a_Q(d,e,f,g,h,i){return new B.bs_(d,e,f,g,h,i)},
bs_:function bs_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
faQ:function faQ(){},
faR:function faR(){},
faS:function faS(){},
faT:function faT(){},
faU:function faU(){},
faV:function faV(){},
faW:function faW(){},
faX:function faX(){},
a7i:function a7i(d){this.a=d},
cd4:function cd4(d){this.a=d},
cd5:function cd5(){},
cd3:function cd3(d,e){this.a=d
this.b=e},
cd2:function cd2(d){this.a=d},
Vu:function Vu(d){this.a=d},
aDg:function aDg(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fj$=f
_.kU$=g
_.fO$=h
_.fk$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
eDN:function eDN(d){this.a=d},
eDJ:function eDJ(d){this.a=d},
eDI:function eDI(d,e){this.a=d
this.b=e},
eDL:function eDL(d,e){this.a=d
this.b=e},
eDK:function eDK(d,e){this.a=d
this.b=e},
eDM:function eDM(d){this.a=d},
btm:function btm(d,e,f){this.b=d
this.c=e
this.a=f},
Uc:function Uc(d){this.a=d},
bhK:function bhK(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fj$=d
_.kU$=e
_.fO$=f
_.fk$=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dQS:function dQS(){},
dQT:function dQT(){},
dQN:function dQN(d,e){this.a=d
this.b=e},
dQP:function dQP(d,e){this.a=d
this.b=e},
dQQ:function dQQ(d){this.a=d},
dQO:function dQO(d){this.a=d},
dQR:function dQR(d){this.a=d},
bod:function bod(d,e,f){this.b=d
this.c=e
this.a=f},
Tp:function Tp(d){this.a=d},
bhn:function bhn(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fj$=d
_.kU$=e
_.fO$=f
_.fk$=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dC7:function dC7(){},
dC8:function dC8(){},
dC2:function dC2(){},
dC5:function dC5(d,e){this.a=d
this.b=e},
dC4:function dC4(d,e){this.a=d
this.b=e},
dC6:function dC6(d){this.a=d},
dC3:function dC3(d){this.a=d},
aGD:function aGD(d,e,f){this.a=d
this.b=e
this.c=f},
U3:function U3(d){this.a=d},
bhE:function bhE(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dO8:function dO8(d,e){this.a=d
this.b=e},
dO9:function dO9(d){this.a=d},
dO7:function dO7(d,e){this.a=d
this.b=e},
dOa:function dOa(d){this.a=d},
dO6:function dO6(d,e){this.a=d
this.b=e},
dOb:function dOb(d){this.a=d},
dO5:function dO5(d,e){this.a=d
this.b=e},
dOc:function dOc(d,e){this.a=d
this.b=e},
dO4:function dO4(d,e){this.a=d
this.b=e},
dOd:function dOd(d){this.a=d},
dO3:function dO3(d,e){this.a=d
this.b=e},
dOe:function dOe(d){this.a=d},
dO2:function dO2(d){this.a=d},
dOf:function dOf(d){this.a=d},
dO1:function dO1(d){this.a=d},
dOg:function dOg(d){this.a=d},
dOh:function dOh(d){this.a=d},
dO0:function dO0(d){this.a=d},
bjG:function bjG(d,e,f){this.b=d
this.c=e
this.a=f},
UP:function UP(d){this.a=d},
aCz:function aCz(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eag:function eag(d,e){this.a=d
this.b=e},
eah:function eah(d,e,f){this.a=d
this.b=e
this.c=f},
eaf:function eaf(d,e,f){this.a=d
this.b=e
this.c=f},
eai:function eai(d){this.a=d},
eae:function eae(d){this.a=d},
eam:function eam(d){this.a=d},
eal:function eal(d,e){this.a=d
this.b=e},
eak:function eak(d,e){this.a=d
this.b=e},
ean:function ean(d,e){this.a=d
this.b=e},
eaj:function eaj(d,e){this.a=d
this.b=e},
eao:function eao(d){this.a=d},
V2:function V2(d){this.a=d},
aCV:function aCV(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
ekN:function ekN(d){this.a=d},
ekO:function ekO(d){this.a=d},
ekL:function ekL(d,e){this.a=d
this.b=e},
ekM:function ekM(d){this.a=d},
ekK:function ekK(d){this.a=d},
ekP:function ekP(d){this.a=d},
ekQ:function ekQ(d){this.a=d},
ekR:function ekR(d){this.a=d},
ekS:function ekS(d,e){this.a=d
this.b=e},
Vn:function Vn(d){this.a=d},
biS:function biS(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
ez4:function ez4(){},
ezd:function ezd(){},
ez9:function ez9(d){this.a=d},
ez8:function ez8(){},
eza:function eza(d,e){this.a=d
this.b=e},
ez7:function ez7(d,e){this.a=d
this.b=e},
ezb:function ezb(d){this.a=d},
ez6:function ez6(d,e){this.a=d
this.b=e},
ezc:function ezc(d){this.a=d},
ez5:function ez5(d){this.a=d},
UN:function UN(d){this.a=d},
bil:function bil(d,e,f,g,h,i,j,k){var _=this
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
_.fj$=f
_.kU$=g
_.fO$=h
_.fk$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
e8W:function e8W(){},
e8X:function e8X(){},
e8P:function e8P(d){this.a=d},
e8O:function e8O(d){this.a=d},
e8Q:function e8Q(d){this.a=d},
e8N:function e8N(d){this.a=d},
e8R:function e8R(d){this.a=d},
e8M:function e8M(d){this.a=d},
e8S:function e8S(d,e){this.a=d
this.b=e},
e8L:function e8L(d,e){this.a=d
this.b=e},
e8T:function e8T(d){this.a=d},
e8K:function e8K(d,e){this.a=d
this.b=e},
e8U:function e8U(d){this.a=d},
e8J:function e8J(d,e){this.a=d
this.b=e},
e8V:function e8V(d){this.a=d},
e8I:function e8I(d,e){this.a=d
this.b=e},
bbp:function bbp(d,e,f){this.c=d
this.d=e
this.a=f},
aJI:function aJI(){},
bv1:function bv1(){},
aK0:function aK0(){},
bv6:function bv6(){},
aKv:function aKv(){},
bvg:function bvg(){},
aKZ:function aKZ(){},
bvs:function bvs(){},
jE(d,e,f,g,h,i){return new B.b53(h,d,f,g,i,e,null)},
hhm(d,e,f,g){var w=null
return C.c9(w,w,!0,w,new B.fIZ(g,e,f),d,w,!0,!0,x.H)},
hy(d,e,f,g,h,i,j){return new B.auh(f,j,i,h,g,d,e,null)},
qF(d,e,f){return B.i2y(d,e,f)},
i2y(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qF=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aT.ak$.x.h(0,e)
n=n==null?null:n.gb7()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lP(2),$async$qF)
case 7:q=h
w=8
return C.b(q.ho(A.fT),$async$qF)
case 8:p=h
if(p==null){w=1
break}o=J.fa(A.dG.gaP(p))
w=9
return C.b(B.cnW(C.a([B.h6m(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qF)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.R(D.aMD)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qF,v)},
lb(d,e,f,g){var w,v=$.aqq
if(v==="music")return E.dF(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dF(261.63*v,w,f,0,g,"sine")}return B.vF(v,e,f,g)},
vF(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dF(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dF(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dF(140+A.o.G(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dF(260+A.o.G(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dF(t,"",160,-0.7,g*0.4,w)
return E.dF(900,"",90,0,g*0.45,u)
case"zap":return E.dF(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dF(2600+A.o.G(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dF(320,"",220,-0.7,g*0.35,v)
return E.dF(1500,"",200,0,g*0.22,u)
case"organic":return E.dF(85+A.o.G(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dF(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dF(t,"",s,0,g*0.5,w)}},
Bb(d,e,f,g){var w,v,u,t,s,r,q,p=$.aqq
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.L)(e),++w)B.lb(d,e[w],f,g)
return}for(p=C.dc(e,0,C.dJ(4,"count",x.S),C.T(e).c),v=p.$ti,p=new C.bV(p,p.gM(0),v.k("bV<ai.E>")),u=x.H,v=v.k("ai.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.lb(d,s,f,g)
else C.bN(new C.b9(1000*q),new B.cd0(d,s,f,g),u)}},
a7h(d,e){var w="sine",v="noise"
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
z3(d){return B.hye(d)},
hye(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$z3=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.aA(),$async$z3)
case 7:r=f
q=C.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.V(x.N,x.z)
w=1
break}p=A.R.aH(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.a1(p,o,n):C.V(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=C.V(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$z3,v)},
vC(d,e){return B.hyf(d,e)},
hyf(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vC=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$vC)
case 6:s=g
w=7
return C.b(s.ar("String","ngmy_play_progress_v1_"+d,A.R.ao(e,null)),$async$vC)
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
return C.i($async$vC,v)},
b53:function b53(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cpT:function cpT(d){this.a=d},
cpU:function cpU(d,e){this.a=d
this.b=e},
fIZ:function fIZ(d,e,f){this.a=d
this.b=e
this.c=f},
fIY:function fIY(d){this.a=d},
dz:function dz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cpP:function cpP(d){this.a=d},
eK:function eK(d,e,f){this.c=d
this.d=e
this.a=f},
auh:function auh(d,e,f,g,h,i,j,k){var _=this
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
cpO:function cpO(d){this.a=d},
EJ:function EJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cpV:function cpV(d){this.a=d},
mu:function mu(){},
cpQ:function cpQ(d,e,f){this.a=d
this.b=e
this.c=f},
cpS:function cpS(d){this.a=d},
cpR:function cpR(){},
cd0:function cd0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csp(){var w=0,v=C.j(x.cL),u,t
var $async$csp=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.tR().bdy("assets/data/world110.json"),$async$csp)
case 3:u=t.hCM(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$csp,v)},
hCM(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aH(0,a2,null)),a1=C.a([],x.F)
for(w=J.aX(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gU(w))
q=C.a([],s)
for(p=J.a8(r),o=J.aX(d.a(p.h(r,"r")));o.C();){n=o.gU(o)
m=C.a([],u)
for(l=J.aX(d.a(n));l.C();){k=l.gU(l)
j=J.a8(k)
m.push(C.a([C.f8(j.h(k,0)),C.f8(j.h(k,1))],v))}q.push(m)}o=C.cO(p.h(r,"n"))
m=C.cO(p.h(r,"a"))
l=C.cO(p.h(r,"ct"))
j=C.cO(p.h(r,"sr"))
i=C.f8(p.h(r,"pop"))
h=C.f8(p.h(r,"gdp"))
g=C.cO(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aOR(g,f,"",0)
f=C.f8(J.q(p.h(r,"c"),0))
p=C.f8(J.q(p.h(r,"c"),1))
e=new B.a9Z(o,m,l,j,i,h,g,f,p,q)
e.bvH(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aa_(a1)},
fmL(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
Gd(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.G(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
a9Z:function a9Z(d,e,f,g,h,i,j,k,l,m){var _=this
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
aa_:function aa_(d){this.a=d},
uN:function uN(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Oo:function Oo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xE:function xE(d,e,f){this.a=d
this.b=e
this.c=f},
On:function On(d){this.a=0
this.b=d
this.c=0},
hEF(d,e,f){return $.hEG.ci(0,d+"|"+C.t(e)+"|"+f.l(),new B.d9Z(d,e,f))},
Uj:function Uj(d){this.a=d},
aBW:function aBW(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fj$=j
_.kU$=k
_.fO$=l
_.fk$=m
_.bq$=n
_.a7$=o
_.c=_.a=null},
dTA:function dTA(d){this.a=d},
dTz:function dTz(d,e){this.a=d
this.b=e},
dT2:function dT2(d){this.a=d},
dT0:function dT0(d){this.a=d},
dT1:function dT1(d,e,f){this.a=d
this.b=e
this.c=f},
dT_:function dT_(d){this.a=d},
dSZ:function dSZ(){},
dSY:function dSY(d){this.a=d},
dTl:function dTl(d,e){this.a=d
this.b=e},
dTm:function dTm(d,e){this.a=d
this.b=e},
dTa:function dTa(d){this.a=d},
dTb:function dTb(d){this.a=d},
dT9:function dT9(d){this.a=d},
dTc:function dTc(d){this.a=d},
dT3:function dT3(d,e){this.a=d
this.b=e},
dT4:function dT4(d){this.a=d},
dTn:function dTn(d,e){this.a=d
this.b=e},
dT8:function dT8(d,e){this.a=d
this.b=e},
dTr:function dTr(d){this.a=d},
dTk:function dTk(d){this.a=d},
dTs:function dTs(d,e){this.a=d
this.b=e},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTt:function dTt(d){this.a=d},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTu:function dTu(d){this.a=d},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTv:function dTv(d){this.a=d},
dTg:function dTg(d,e){this.a=d
this.b=e},
dTw:function dTw(d){this.a=d},
dTf:function dTf(d,e){this.a=d
this.b=e},
dTx:function dTx(d){this.a=d},
dTe:function dTe(d){this.a=d},
dTy:function dTy(d){this.a=d},
dTd:function dTd(d){this.a=d},
dTo:function dTo(d){this.a=d},
dT7:function dT7(d){this.a=d},
dTp:function dTp(d){this.a=d},
dT6:function dT6(d){this.a=d},
dTq:function dTq(d){this.a=d},
dT5:function dT5(d){this.a=d},
dSX:function dSX(){},
dSW:function dSW(d){this.a=d},
dSV:function dSV(d){this.a=d},
bdD:function bdD(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d9Z:function d9Z(d,e,f){this.a=d
this.b=e
this.c=f},
da_:function da_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aK6:function aK6(){},
aK7:function aK7(){},
ae_(d,e,f,g,h){return new B.brV(d,e,f,g,h)},
brV:function brV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
faJ:function faJ(){},
faK:function faK(){},
faL:function faL(){},
faM:function faM(){},
faN:function faN(){},
faO:function faO(){},
faP:function faP(){},
Vq:function Vq(d){this.a=d},
biW:function biW(){this.d=$
this.c=this.a=null},
ezY:function ezY(d){this.a=d},
ezZ:function ezZ(d){this.a=d},
ezX:function ezX(d){this.a=d},
eA_:function eA_(){},
ezW:function ezW(d,e){this.a=d
this.b=e},
ezV:function ezV(d){this.a=d},
hF6(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eT()
v.dI(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eT()
v.dI(w+900)
u.push(2.2+v.aj())}return new B.biI(new C.cp(null,x.A),new B.On(A.cI),A.J,A.au,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hF8(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hF7(d){return 1.5+1.6*Math.log(d.d/1000+1)},
h7y(d,e,f){return $.hFI.ci(0,d+"|"+C.t(e)+"|"+f.l(),new B.eU9(d,e,f))},
Vb:function Vb(d){this.a=d},
biI:function biI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fj$=j
_.kU$=k
_.fO$=l
_.fk$=m
_.bq$=n
_.a7$=o
_.c=_.a=null},
es0:function es0(d,e){this.a=d
this.b=e},
esb:function esb(d,e){this.a=d
this.b=e},
esc:function esc(d,e){this.a=d
this.b=e},
es8:function es8(d){this.a=d},
es9:function es9(d){this.a=d},
esa:function esa(d){this.a=d},
esd:function esd(d){this.a=d},
es7:function es7(d){this.a=d},
ese:function ese(d,e){this.a=d
this.b=e},
esf:function esf(d){this.a=d},
es6:function es6(d,e){this.a=d
this.b=e},
esg:function esg(d){this.a=d},
es5:function es5(d,e){this.a=d
this.b=e},
esh:function esh(d){this.a=d},
es4:function es4(d){this.a=d},
esi:function esi(d){this.a=d},
es3:function es3(d){this.a=d},
esj:function esj(d){this.a=d},
es2:function es2(d){this.a=d},
esk:function esk(d){this.a=d},
es1:function es1(d){this.a=d},
es_:function es_(){},
erZ:function erZ(){},
erY:function erY(d){this.a=d},
erX:function erX(d){this.a=d},
bq_:function bq_(d,e){this.b=d
this.a=e},
eU9:function eU9(d,e,f){this.a=d
this.b=e
this.c=f},
eUa:function eUa(){},
eUb:function eUb(){},
Uk:function Uk(d){this.a=d},
aBX:function aBX(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fj$=k
_.kU$=l
_.fO$=m
_.fk$=n
_.bq$=o
_.a7$=p
_.c=_.a=null},
dTE:function dTE(){},
dU6:function dU6(){},
dTT:function dTT(d,e){this.a=d
this.b=e},
dTK:function dTK(d,e){this.a=d
this.b=e},
dTU:function dTU(d){this.a=d},
dTJ:function dTJ(d){this.a=d},
dTV:function dTV(d){this.a=d},
dTS:function dTS(d){this.a=d},
dTZ:function dTZ(d){this.a=d},
dTR:function dTR(d){this.a=d},
dU_:function dU_(d){this.a=d},
dTQ:function dTQ(d,e){this.a=d
this.b=e},
dU0:function dU0(d){this.a=d},
dU1:function dU1(d){this.a=d},
dTP:function dTP(d,e){this.a=d
this.b=e},
dU2:function dU2(d){this.a=d},
dTO:function dTO(d,e){this.a=d
this.b=e},
dU3:function dU3(d){this.a=d},
dTN:function dTN(d,e){this.a=d
this.b=e},
dU4:function dU4(d){this.a=d},
dTM:function dTM(d,e){this.a=d
this.b=e},
dU5:function dU5(d){this.a=d},
dTL:function dTL(d){this.a=d},
dTW:function dTW(d){this.a=d},
dTI:function dTI(d){this.a=d},
dTX:function dTX(d){this.a=d},
dTH:function dTH(d){this.a=d},
dTY:function dTY(d){this.a=d},
dTG:function dTG(d){this.a=d},
dTD:function dTD(d){this.a=d},
dTC:function dTC(){},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTB:function dTB(d){this.a=d},
b8T:function b8T(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
V3:function V3(d){this.a=d},
biF:function biF(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fj$=e
_.kU$=f
_.fO$=g
_.fk$=h
_.bq$=i
_.a7$=j
_.c=_.a=null},
ekV:function ekV(d,e){this.a=d
this.b=e},
ekW:function ekW(d,e){this.a=d
this.b=e},
ekU:function ekU(d,e){this.a=d
this.b=e},
ekX:function ekX(d,e){this.a=d
this.b=e},
ekT:function ekT(d,e){this.a=d
this.b=e},
bpy:function bpy(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eSj:function eSj(d){this.a=d},
aK8:function aK8(){},
bv8:function bv8(){},
aKH:function aKH(){},
bvm:function bvm(){},
aKK:function aKK(){},
bvo:function bvo(){},
hF4(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eT()
v.dI(w)
v=v.aj()
u=new C.eT()
u.dI(w+500)
s.push(new C.u(v,u.aj()))}return new B.bhm(new C.cp(null,x.A),new B.On(A.cI),t,A.au,s,$,A.bx,0,C.a([],x.X),null,null)},
OQ:function OQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Tn:function Tn(d){this.a=d},
bhm:function bhm(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fj$=i
_.kU$=j
_.fO$=k
_.fk$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
dBz:function dBz(){},
dBn:function dBn(){},
dBo:function dBo(d,e){this.a=d
this.b=e},
dBp:function dBp(d,e){this.a=d
this.b=e},
dBm:function dBm(d){this.a=d},
dBl:function dBl(d){this.a=d},
dBr:function dBr(d){this.a=d},
dBk:function dBk(d,e){this.a=d
this.b=e},
dBs:function dBs(d){this.a=d},
dBj:function dBj(d){this.a=d},
dBt:function dBt(d){this.a=d},
dBi:function dBi(d){this.a=d},
dBu:function dBu(d){this.a=d},
dBh:function dBh(d){this.a=d},
dBv:function dBv(d){this.a=d},
dBg:function dBg(d){this.a=d},
dBw:function dBw(d){this.a=d},
dBf:function dBf(d){this.a=d},
dBx:function dBx(d){this.a=d},
dBe:function dBe(d){this.a=d},
dBy:function dBy(d){this.a=d},
dBd:function dBd(d){this.a=d},
dBq:function dBq(d){this.a=d},
dBc:function dBc(d){this.a=d},
b8h:function b8h(d,e){this.b=d
this.a=e},
adE:function adE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ug:function Ug(d){this.a=d},
bhN:function bhN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fj$=p
_.kU$=q
_.fO$=r
_.fk$=s
_.bq$=t
_.a7$=u
_.c=_.a=null},
dSb:function dSb(d){this.a=d},
dS1:function dS1(d,e){this.a=d
this.b=e},
dS2:function dS2(d,e){this.a=d
this.b=e},
dS0:function dS0(d,e){this.a=d
this.b=e},
dS3:function dS3(d){this.a=d},
dS_:function dS_(d){this.a=d},
dS4:function dS4(d){this.a=d},
dRZ:function dRZ(d,e){this.a=d
this.b=e},
dS5:function dS5(d){this.a=d},
dRY:function dRY(d,e){this.a=d
this.b=e},
dS6:function dS6(d){this.a=d},
dRX:function dRX(d,e){this.a=d
this.b=e},
dS7:function dS7(d){this.a=d},
dRW:function dRW(d,e){this.a=d
this.b=e},
dS8:function dS8(d){this.a=d},
dRV:function dRV(d){this.a=d},
dS9:function dS9(d){this.a=d},
dRU:function dRU(d){this.a=d},
dSa:function dSa(d){this.a=d},
dRT:function dRT(d){this.a=d},
bdt:function bdt(d,e){this.b=d
this.a=e},
d77:function d77(d){this.a=d},
V_:function V_(d){this.a=d},
biE:function biE(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fj$=f
_.kU$=g
_.fO$=h
_.fk$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
ek9:function ek9(d,e){this.a=d
this.b=e},
eka:function eka(d){this.a=d},
ek8:function ek8(d){this.a=d},
ekb:function ekb(d){this.a=d},
ek7:function ek7(d){this.a=d},
ekc:function ekc(d){this.a=d},
ek6:function ek6(d){this.a=d},
ekd:function ekd(d){this.a=d},
ek5:function ek5(d){this.a=d},
eke:function eke(d){this.a=d},
ek4:function ek4(d,e){this.a=d
this.b=e},
ekf:function ekf(d){this.a=d},
ek3:function ek3(d,e){this.a=d
this.b=e},
ekg:function ekg(d){this.a=d},
ek2:function ek2(d,e){this.a=d
this.b=e},
ekh:function ekh(d){this.a=d},
ek1:function ek1(d,e){this.a=d
this.b=e},
boO:function boO(d,e){this.b=d
this.a=e},
aJF:function aJF(){},
bv0:function bv0(){},
aK3:function aK3(){},
bv7:function bv7(){},
aKG:function aKG(){},
bvl:function bvl(){},
h6m(d,e,f){var w,v
C.fQ(0,0,!1)
w=new C.le(e,f,$,null)
v=w.bFM(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hSA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.V(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.L)(w),++q){p=w[q]
u.push(C.E(["k",p.b,"x",C.nP(A.k.aa(p.c,4)),"y",C.nP(A.k.aa(p.d,4)),"v",p.e,"l",C.nP(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nP(A.k.aa(p.as,3)),"ch",p.at,"vc",C.nP(A.k.aa(p.z,3)),"s",C.nP(A.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.B(f,C.a3(f).k("cl.E"))
A.d.fg(l)
return A.R.ao(C.E(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i0W(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.R.aH(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=C.a([],x.fs)
g=x.L
f=g.a(J.q(w,"parts"))
f=J.aX(f==null?A.cH:f)
while(f.C()){u=f.gU(f)
t=i.a(u)
e=C.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.q2().ah(0,s)){J.cf(v,null)
continue}d=s
a0=C.aN(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aN(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.tc(a2,d,a0,a1)
a3.aoC(a2,d,a0,a1)
h.push(a3)
r=a3
a1=C.aN(J.q(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=C.aN(J.q(t,"l"))
if(d==null)d=r.f
r.f=d
d=C.aN(J.q(t,"o"))
if(d==null)d=r.r
r.r=d
d=C.kb(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.kb(J.q(t,"b"))
r.x=d===!0
d=C.aU(J.q(t,"bw"))
if(d==null)d=""
r.ay=d
d=C.aN(J.q(t,"c"))
if(d==null)d=r.as
r.as=d
d=C.aN(J.q(t,"ch"))
r.at=A.k.O(d==null?0:d)
d=C.aN(J.q(t,"vc"))
if(d==null)d=0
r.z=d
d=C.aN(J.q(t,"s"))
r.ch=A.k.D(d==null?1:d,1,2.6)
J.cf(v,r)}i=g.a(J.q(w,"wires"))
i=J.aX(i==null?A.cH:i)
h=x.j
while(i.C()){q=i.gU(i)
p=h.a(q)
f=C.aN(J.q(p,0))
o=f==null?a5:A.k.O(f)
f=C.aN(J.q(p,2))
n=f==null?a5:A.k.O(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.ajd(m,A.k.O(C.f8(J.q(p,1))),l,A.k.O(C.f8(J.q(p,3))))}i=C.aN(J.q(w,"challenge"))
i=A.k.O(i==null?0:i)
k=C.aW(x.S)
h=g.a(J.q(w,"done"))
h=J.aX(h==null?A.cH:h)
while(h.C()){j=h.gU(h)
J.cf(k,A.k.O(C.f8(j)))}return new C.bmt(i,k)}catch(a4){return a5}},
fow(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fow=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.aA(),$async$fow)
case 7:r=o.aU(n.q(e.a,"ngmy_electronics_lab_v1"))
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
return C.i($async$fow,v)},
bBP(d){return B.i2u(d)},
i2u(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bBP=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.aA(),$async$bBP)
case 7:w=6
return C.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bBP)
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
return C.i($async$bBP,v)},
cnW(d,e){var w=0,v=C.j(x.g7),u
var $async$cnW=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fVZ().wO(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cnW,v)}},D,U,H,R,Y,A6,A7,Am,Z,A8
J=c[1]
C=c[0]
A=c[2]
A_=c[138]
A9=c[137]
A0=c[130]
A1=c[126]
I=c[116]
P=c[121]
A2=c[112]
Aa=c[132]
A3=c[135]
A4=c[109]
N=c[139]
G=c[119]
Ab=c[114]
Ac=c[131]
A5=c[134]
Ad=c[67]
W=c[76]
Ae=c[83]
Af=c[80]
Q=c[87]
Ag=c[140]
Ah=c[105]
X=c[115]
O=c[117]
V=c[136]
Ai=c[71]
Aj=c[90]
S=c[125]
K=c[133]
Ak=c[98]
L=c[124]
T=c[92]
Al=c[24]
E=c[26]
F=c[89]
M=c[99]
B=a.updateHolder(c[17],B)
D=c[113]
U=c[128]
H=c[41]
R=c[122]
Y=c[120]
A6=c[127]
A7=c[118]
Am=c[123]
Z=c[95]
A8=c[129]
B.aiD.prototype={}
B.Uw.prototype={
T(){return new B.bi8(C.V(x.N,x.i),new C.ar(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.ms(0,null,null))}}
B.bi8.prototype={
gVi(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
this.ch.q()
this.a2()},
MO(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$MO=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aT.ak$.d.c
if(s!=null)s.ju()
p.bM(0,A.c3)
t.m(new B.e1B(t))
t.a.toString
p=t.gVi()
w=3
return C.b(B.bxm(B.hGV(q,B.hSr(p),o,t.ay)),$async$MO)
case 3:s=e
r=s==null?null:J.iS(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.hTR(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e1C(t,o,r))
$.aT.x1$.push(new B.e1D(t))
case 1:return C.h(u,v)}})
return C.i($async$MO,v)},
Xh(d){return this.bWn(d)},
aTK(){return this.Xh(null)},
bWn(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Xh=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aT.ak$.d.c
if(s!=null)s.ju()
t.f.saV(0,o)
t.m(new B.e1O(t))
E.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bxm(B.hND(o)),$async$Xh)
case 3:r=n.a=m.i0E(f)
p.b=""
if(r!=null&&!B.hSs(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.hTS(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.aiD(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e1P(p,t))
t.c0z(p.a)
case 1:return C.h(u,v)}})
return C.i($async$Xh,v)},
c0z(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
A.d.a8(w)
w=++m.as
v=m.gVi()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new B.e1K(m))
t=d.d
s=C.V(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e1I(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e1L(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.L)(r),++u){p.$2(o,new B.e1M(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e1N(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.by.j(0.1),g=C.m(16),f=C.I(A.by.j(0.35),A.r,1)
if(m.x)j=C.A(C.a([D.eJ4,A.bf,C.D(C.d(m.Q,l,l,l,l,l,l,A.St,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.f78
else{w=C.D(C.d(k.a,l,l,l,l,l,l,Ab.SX,l,l,l),1)
v=x.p
w=C.a([C.A(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eTv,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(A.uY,C.d(u,l,l,l,l,l,l,D.eW4,l,l,l),l))
w.push(A.cZ)
w.push(C.d(k.b,l,l,l,l,l,l,D.ID,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.eYr,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.i8,A.cj,l,l,l))}w.push(A.ao)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.az
w.push(new C.C(A.Li,new C.co(A.aQ,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.mx,l,l,l,l,l,l,l,l,l),A.bp,new C.bF(1,A.bj,new C.x(q,l,new C.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.L)(j),++p){o=j[p]
t=new C.aV(12,12)
s=new C.aV(12,12)
A.d.v(w,C.a([A.P,new C.bI(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a6z,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.by.j(0.3),l,l,new C.bp(t,t,t,t),l,l,A.n),l,l,l,l,A.fG,l,l,l),l),A.at,C.p(l,new C.x(o.b,l,D.f2G,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bp(s,s,s,s),l,l,A.n),l,l,l,l,A.bR,l,l,l)],v))}if(m.ax)w.push(D.e1G)
j=C.cd(C.v(w,A.F,l,A.e,A.j,0,A.p),A.q,m.ch,A.y,l,l,l,l,A.ai)}w=x.p
g=C.v(C.a([C.agU(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bnF,A.eh,l,l,1/0),A.bb,A.i6),C.D(B.fXL(m.gVi(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dz("Ask about it",i,new B.e1S(m),l,A.by,l),new B.dz("Invent something new",!i,new B.e1T(m),l,A.by,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.d7y[p]
i.push(new B.dz(n,!1,new B.e1U(m,n),l,A.by,l))}f.push(new B.eK(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cSY[p]
i.push(new B.dz(r,!1,new B.e1V(m,r),l,A.by,l))}f.push(new B.eK(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.D(C.aL(l,A.T,!1,l,!0,A.q,l,C.aM(),m.f,l,l,l,l,l,2,C.br(l,new C.b4(4,C.m(16),A.Y),l,A.eP,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kt,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ah,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e1W(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dl,!0,A.a5,l,A.am,l,A.aNk,l,l),1)
h=m.at
v=h&&j?D.bBA:A.dW
j=h&&j?"Ask":"Invent"
f.push(C.A(C.a([i,A.ab,new B.fg(v,j,new B.e1X(m,k),A.by,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jE(A.by,A.h6,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.Fu.prototype={}
B.uA.prototype={}
B.UY.prototype={
T(){return new B.aCP(A.J,A.J,A.au,C.aW(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCP.prototype={
gaUU(){var w,v,u,t=this,s=D.Gx[t.cx],r=D.PP[t.cy],q=D.BG[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ea(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.auq[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new B.ehA())},
ga1r(){return D.Gx[this.cx].d/this.gaUU()},
gaMt(){return 0.1*(D.Gx[this.cx].d/0.9)/D.PP[this.cy].d},
a_(){this.a1()
this.l6()
B.z3("rocket_lander").bz(new B.ehU(this),x.P)},
c0I(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cI.aj()*0.6
w.f=new C.u(0.15+A.cI.aj()*0.7,0.08)
w.r=new C.u((A.cI.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
ln(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.ehV())
return}w=D.qZ[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga1r()
v=v.ad(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaMt())}if(m.dy){t=m.r
v=v.aC(0,t.aF(0,t.gcm()*6*D.awa[m.d]))}t=m.r=m.r.ad(0,v.aF(0,d))
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
p=D.BG[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.vC("rocket_lander",C.E(["unlocked",t],x.N,x.z))
B.Bb("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga1r()/(D.qZ[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga1r()/(D.qZ[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dF(80,"",500,0,0.6,"noise")
C.fK()}}if(m.Q&&m.x>0&&A.o.G(A.k.bw(m.CW*20),2)===0)E.dF(90,"",70,0,0.12,"noise")
m.m(new B.ehW())},
aeq(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eVC,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dz(e[w].a,f.$1(w),new B.ehC(this,g,w),v,h,v))
return new C.C(A.eO,C.v(C.a([u,A.cZ,C.c_(A.bD,s,A.bt,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bB3(d){var w,v,u,t,s=this,r=null,q=s.ga1r()/(D.qZ[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaMt()),o=D.awa[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.r,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.SR,r,r,r),A.S,s.aeq("ENGINE: "+D.Gx[s.cx].b,D.Gx,new B.ehr(s),new B.ehs(s),A.cv),s.aeq("FUEL TANK: "+D.PP[s.cy].b,D.PP,new B.eht(s),new B.ehu(s),A.bc),s.aeq("LANDING GEAR: "+D.BG[s.db].b,D.BG,new B.ehv(s),new B.ehw(s),A.aW),s.aeq("EXTRAS (tap to add)",D.auq,new B.ehx(s),new B.ehy(s),A.by)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.foE)
o=(q?A.bc:A.cr).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaUU(),2)
u=A.k.aa(s.ga1r()/(D.qZ[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.BG[s.db].d*100)+".",r,r,r,r,r,r,D.eWc,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.i8,A.bR,r,r,r))
m.push(A.S)
m.push(new C.bI(A.A,r,r,new B.fg(A.n4,"Launch",new B.ehz(s),A.bc,r),r))
return C.av(C.p(r,C.cd(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.q,r,A.y,r,A.bW,r,r,A.ai),A.f,r,A.lq,new C.o(D.beK,r,l,n,r,r,A.n),r,r,r,A.bR,r,r,r,r),r,r,r)},
aW1(d,e,f,g){var w=null,v=f?A.cv:A.c.j(0.1),u=C.m(18),t=C.I(A.b5,A.r,1)
return C.oL(A.js,C.p(w,C.W(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.eho(e),new B.ehp(e),w,w,w,w,new B.ehq(e))},
aW0(d,e,f){return this.aW1(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cm(new B.ehN(s,D.qZ[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qZ[w].a:"\ud83d\udd12"
o.push(new B.dz(v,s.d===w,new B.ehO(s,w),r,D.qZ[w].c,r))}v=C.a([s.aW0(F.akg,new B.ehP(s),s.y),A.bf,s.aW1(A.vk,new B.ehQ(s),s.Q,130),A.bf,s.aW0(A.N1,new B.ehR(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aW:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bf,C.aE(r,C.p(r,D.bFL,A.f,r,r,new C.o(u,r,C.I(A.b5,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.ehS(s),r,r,r,r,r,r,!1,A.a8)],p))}return B.jE(A.cv,A.h6,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eK(o,"WORLD",r),C.A(v,A.m,r,A.ba,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.bf8.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qZ[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.X(),d=C.M(),a0=j.c,a1=C.aq(D.bhi,a0,0.25)
a1.toString
d.sau(new C.a7(A.b0,A.b6,A.x,C.a([D.b9k,a1],x.O),l,l).aw(0,new C.aa(0,0,g,f)))
a2.aY(new C.aa(0,0,g,f),d)
w=new C.eT()
w.dI(5)
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
r=new C.aQ(e.r,A.ap,l,l,d)
r.E(new C.b5(0,s+14))
q=new C.eT()
q.dI(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bx(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.E(new C.ap(i,h))
r.E(new C.ap(0,h))
r.E(new C.bE())
e=$.X()
d=C.M()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aO(r,d)
o=C.cu(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.bz(o,A.ig)
a0=C.M()
a0.r=A.bn.gp(0)
a2.aD(d,a0)
a0=C.bz(o.cG(2),A.rf)
d=C.M()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.bA(g.save())
g.translate(d.a*i,d.b*h)
a2.j9(0,k.w)
i=k.as
if(i==="crashed"){k=C.M()
k.r=A.cv.j(0.6).gp(0)
k.z=X.H3
a2.ai(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aQ(i,A.ap,l,l,C.a([],f))
n.E(new C.b5(-8,18))
n.E(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.E(new C.ap(8,18))
n.E(new C.bE())
k=C.M()
k.r=A.aM.gp(0)
a2.aO(n,k)
i=new C.aQ(i,A.ap,l,l,C.a([],f))
i.E(new C.b5(-4,18))
i.E(new C.ap(0,32))
i.E(new C.ap(4,18))
i.E(new C.bE())
k=C.M()
k.r=A.c.gp(0)
a2.aO(i,k)}k=e.r
m=new C.aQ(k,A.ap,l,l,C.a([],f))
m.E(new C.b5(0,-26))
m.E(new C.cS(14,-10,11,18))
m.E(new C.ap(-11,18))
m.E(new C.cS(-14,-10,0,-26))
m.E(new C.bE())
i=C.M()
i.sau(D.bRV.aw(0,D.eC7))
a2.aO(m,i)
i=C.M()
i.r=A.aW.gp(0)
a2.ai(D.vN,5,i)
i=new C.aQ(k,A.ap,l,l,C.a([],f))
i.E(new C.b5(-11,6))
i.E(new C.ap(-20,20))
i.E(new C.ap(-11,18))
i.E(new C.bE())
h=C.M()
h.r=A.aB.gp(0)
a2.aO(i,h)
f=new C.aQ(k,A.ap,l,l,C.a([],f))
f.E(new C.b5(11,6))
f.E(new C.ap(20,20))
f.E(new C.ap(11,18))
f.E(new C.bE())
k=C.M()
k.r=A.aB.gp(0)
a2.aO(f,k)
g.restore()},
aq(d){return!0}}
B.aKE.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvk.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btg()}}
B.aQw.prototype={}
B.a28.prototype={}
B.b8k.prototype={}
B.To.prototype={
T(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.eu(["skin"],x.N),o=new Float32Array(0)
return new B.aBe(w,v,u,t,s,r,q,new C.cp(null,x.A),p,D.Jy,D.Jy,A.au,A.cI,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBe.prototype={
a_(){var w=this
w.a1()
w.l6()
w.as=new B.bZ9(w.gc8N())
new B.dC0(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a9(0)
v.d=null}this.bsh()},
c8O(d){var w,v=this
if(v.c==null)return
w=J.a8(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eT(0,C.E(["t","init","data",$.h6B],x.N,x.z))
v.at=!0
v.ax=""
v.ax8()
break
case"pick":v.m(new B.dBD(v,d))
break
case"shot":v.agh(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
ax8(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.asn[q.CW]
v=new B.dBE()
u=q.ay
u=C.B(u,C.a3(u).k("cl.E"))
A.d.fg(u)
t=x.N
s=C.E(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.R.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.V(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eT(0,u)}},
agh(d){return this.cpk(d)},
cpk(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$agh=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cB.aJ(A.a.b0(d,A.a.cJ(d,",")+1))
w=6
return C.b(B.cnW(C.a([B.h6m(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$agh)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.R(D.aMD)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$agh,v)},
awB(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
ln(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bw(w)!==A.k.bw(v.ok)){B.a7h("kick",0.4)
v.a40(170,new B.dC1())}v.ok=w
return},
ag6(d){var w,v,u,t,s=this
s.m(new B.dBF(s,d))
if(d==null){s.fx=D.Jy
s.dy=1
w=s.as
if(w!=null)w.eT(0,C.E(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.T(w).k("a2<1>")
u=C.B(new C.a2(w,new B.dBG(d),v),v.k("H.E"))
t=A.d.gL(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.K(0,t)
if(s.ch===2)s.ch=1}s.ax8()
w=s.as
if(w!=null)w.eT(0,C.E(["t","focus","group",d],x.N,x.z))
s.go=0
s.crH(t,d)
return},
crH(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a7h("kick",0.8)
this.a40(260,new B.dBH())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a40(w*70,new B.dBI(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dF(110,"",360,0.7,0.3,"saw")
else B.vF("organic",6+A.o.G(e.length,8),200,0.6)
break
case"bone":E.dF(210+e.length*4,"",80,0.6,0.55,"tri")
E.dF(2400,"",20,0,0.3,v)
break
case"muscle":E.dF(70,"",150,1,0.6,"sine")
break
case"vessel":E.dF(300,"",380,0.4,0.22,v)
B.a7h("kick",0.3)
break
default:B.vF("organic",2+A.o.G(e.length,6),200,0.4)}},
cw9(d){this.m(new B.dBK(this,d))},
aWj(){var w,v,u,t,s,r,q,p=this,o=C.aW(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(p.awB(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=C.B(o,o.$ti.k("cl.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aB(w)]
p.p4=""},
bS1(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dBA(u,w,d))
v=x.t
B.Bb("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a40(1100,new B.dBB(u))
return}if(d==null){if(u.cx!=null)u.ag6(null)
return}u.ag6(d)},
bVH(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bZ.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eS5,u,u,u)}else if(d==null||e==null)w=D.f4J
else{w=x.p
w=C.A(C.a([C.D(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.jh,u,u,u),A.cZ,C.d(e.b,u,u,u,u,u,u,D.ID,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aH(u,u,u,u,D.bI9,u,u,u,new B.dBC(v),u,u,u,u,"Back to the whole body",A.c7)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.Vc,u,s,t,u,u,A.n),u,u,u,u,I.afX,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dhW.h(0,g)
i.ax8()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d0Y
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(i.awB(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.ml,h,h,h,new B.dBR(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bH:C.Dn(h,A.pW,q)}else q=A.kp
q=C.v(C.a([C.D(q,1),new C.C(F.Xt,i.bVH(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cUj[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dz(l,n,new B.dBS(i,o),o.c,A.bZ,h))}p=C.a([new B.eK(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.L)(w),++s){k=w[s]
n.push(new B.dz(k,k===i.cx,new B.dBT(i,k),h,A.aM,h))}p.push(new B.eK(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hy(A.cr,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dBU(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.EJ(D.asn[j],i.CW===j,new B.dBV(i,j),!1,h))
p.push(new B.eK(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dz("Spin",n,new B.dBW(i),D.aj4,A.aW,h),new B.fg(A.jS,"Reset view",new B.dBX(i),A.c,h),new B.dz(l,m,new B.dBY(i),A.FN,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dz("Heartbeat sound",i.k4,new B.dBZ(i),A.nO,A.cr,h))
p.push(new B.eK(v,h,h))
return B.jE(A.bZ,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aJG.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aJH.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsg()}}
B.bZ9.prototype={
kp(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aJ(e,"</script","<\\/script")
v=$.hcD
$.hcD=v+1
u="ngmy-body-viewer-"+v
$.ye()
$.q1().pz(u,new B.bZa(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fH(v,"message",new B.bZb(t),!1,x.gA)
t.b=u},
eT(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bxj(w.contentWindow)
if(w!=null)J.fKx(w,e,"*")}}catch(v){}}}
B.xG.prototype={}
B.BO.prototype={}
B.nd.prototype={}
B.b92.prototype={}
B.Tt.prototype={
T(){var w=x.N,v=x.y,u=x.S
return new B.aBh(C.V(w,x.a2),C.a([],x.cB),C.V(w,v),C.V(w,v),C.V(w,u),A.au,A.J,A.J,C.aW(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBh.prototype={
a_(){var w=this
w.a1()
w.l6()
w.abb()
$.aT.x1$.push(new B.dEb(w))},
abb(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$abb=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$abb)
case 6:q=e.rU("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dDQ(s,r))
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
return C.i($async$abb,v)},
abv(d){return this.bZm(d)},
bZm(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$abv=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return C.b(C.aA(),$async$abv)
case 6:r=f
q=s.cx
p=C.a3(q).k("jJ<cl.E,n>")
q=C.B(new C.jJ(q,new B.dDT(),p),p.k("H.E"))
r.ar("StringList","ngmy_circuit_passed_v1",q)
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
return C.i($async$abv,v)},
avj(d,e,f,g){var w="c"+this.y++,v=new B.BO(w,e,f,g)
this.d.n(0,w,v)
return v},
mo(d,e,f){return this.avj(0,e,f,0)},
aay(d,e){var w
if(D.yB.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.u(-36,w))},
ti(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aQn(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fO$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e3(m,D.cF0[A.o.G(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.ti(p,0)&&n.ti(p,1)
break
case"or":p=q.a
o=n.ti(p,0)||n.ti(p,1)
break
case"xor":p=q.a
o=n.ti(p,0)!==n.ti(p,1)
break
case"nand":p=q.a
o=!(n.ti(p,0)&&n.ti(p,1))
break
case"nor":p=q.a
o=!(n.ti(p,0)||n.ti(p,1))
break
case"not":o=!n.ti(q.a,0)
break
default:o=n.ti(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bKW(){return this.aQn(null)},
ln(d){var w,v,u,t,s,r,q,p,o,n=this
n.bKW()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gag(0),v=new C.fx(w,new B.dEc()),u=n.f,t=n.w,s=0;v.C();){r=w.gU(0).a
if(u.h(0,r)===!0){q=n.fO$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fO$)
o=s+1
E.dF(520+90*A.o.G(s,4),"",200,0,0.25,"square")
s=o}}},
avk(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
lS(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
arz(d){var w=this
if(w.x.A(0,A.au)){$.aT.x1$.push(new B.dDO(w,d))
return}w.m(new B.dDP(w,d))},
crZ(d){this.m(new B.dDU(this,d,$.bCa()[d]))},
c2I(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bCa()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a2<H.E>")
s=t.k("H.E")
r=C.B(new C.a2(new C.bc(v,u),new B.dDJ(),t),s)
A.d.b_(r,new B.dDK())
q=C.B(new C.a2(new C.bc(v,u),new B.dDL(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dDM(d,w))
return}u=d.r
p=C.dW(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.fX(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aQn(0)
h=m.h(0,A.d.gL(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jD(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aI(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new B.dDN(d,o,a0))},
aw7(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("H.E"))
r=C.T(s).k("dw<1>")
s=new C.dw(s,r)
s=new C.bV(s,s.gM(0),r.k("bV<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cba(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("H.E"))
q=C.T(r).k("dw<1>")
r=new C.dw(r,q)
r=new C.bV(r,r.gM(0),q.k("bV<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bVA(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yB.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aay(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bJT(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aay(p,o)
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
c2K(d){var w,v,u,t=this,s=t.aw7(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eP()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dF(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new B.dDV())
return}u=t.bJT(d)
if(u!=null)t.m(new B.dDW(t,u))
else t.m(new B.dDX(t))},
au8(d){return this.bYr(d)},
bYr(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$au8=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.aw7(d)
if(s==null){w=1
break}C.je()
t.m(new B.dDS(t,s))
case 1:return C.h(u,v)}})
return C.i($async$au8,v)},
bwX(d){if(this.x.A(0,A.au))return
this.m(new B.dDI(this,d,A.cI))
C.eP()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bCa()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.W(i.ax?A.nO:O.qV,A.ad,h,h,h,21),h,h,h,new B.dE5(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.ct.j(0.14)
r=C.I(A.ct.j(0.5),A.r,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eRg,h,h,h),C.d(w.b,h,h,h,h,h,h,D.eZm,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(A.ma,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.bc:A.f9,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.A(C.a([C.D(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bJ(D.ffq,i.gc2H(),C.bk(A.ct,h,h,h,h,h,h,h,h,h,h,A.c7))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,W.Lr,D.boj,h,h,1/0))}u.push(C.D(C.cm(new B.dE6(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yB.h(0,r).a+": "+D.yB.h(0,r).e,h,h,h,h,h,h,A.w2,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A7.afF,A.bR,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.yB.gdL(D.yB),s=s.gag(s);s.C();){r=s.gU(s)
q=new C.aV(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.az(o.j(0.5),1,A.r,-1)
t.push(C.aE(h,C.p(h,C.v(C.a([C.W(p.b,o,h,h,h,20),A.bA,new C.x(p.a,h,D.aOr,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bP(m,m,m,m),new C.bp(q,q,q,q),h,h,A.n),h,h,h,A.fx,Ak.Ln,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dE7(i,r),h,h,h,h,h,h,!1,A.a8))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d4V[l]
s.push(new B.fg(A.N2,k.b,new B.dE8(i,k),A.ct,h))}s.push(new B.fg(D.xJ,"Clear",new B.dE9(i),A.cr,h))
r=C.a([],g)
for(j=0;q=$.bCa(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ee:A.l8
o=i.ay
n=i.cx.t(0,j)?A.bc:A.cp
r.push(new B.dz(q.a,o===j,new B.dEa(i,j),p,n,h))}return B.jE(A.ct,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eK(t,"PARTS",h),new B.eK(s,"TRY",h),new B.eK(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.b9k.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.X()
w=C.M()
w.r=D.aaN.gp(0)
a7.aY(new C.aa(0,0,0+a5,0+a6),w)
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
g=a5.aay(j,m.c)
f=q.h(0,l)===!0
l=$.X()
e=C.a([],p)
d=new C.aQ(l.r,A.ap,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pq(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.cp.j(0.28).gp(0)
l.z=G.mo
s=l.H()
l=d.gbI().a.snapshot()
w.drawPath((d.e=new C.cF(l)).a,s)
s.delete()}l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bO
l.r=(f?A.dN:A.bw).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cF(d.gbI().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.HA)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aQ($.X().r,A.ap,a4,a4,C.a([],p))
w=a3.b
p.E(new C.b5(a6,w))
r=g.b
p.E(new C.pq(a6+a0,w,a5-a0,r,a5,r))
r=C.M()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aO(p,r)}for(a5=new C.dt(o,o.r,o.e);a5.C();)this.c2J(a7,a5.d)},
c2J(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yB.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cu(a0.c,64,64)
s=C.bz(t,A.kT)
r=w.cy===v
q=s.eM(A.cx)
$.X()
p=C.M()
p.r=A.w.j(0.55).gp(0)
p.z=A.lg
d.aD(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.M()
p.sau(new C.bR(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).aw(0,C.bU(a0.c,52)))
d.ai(q,52,p)}q=s.eM(A.cJ)
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
q.sau(new C.a7(A.b0,A.b6,A.x,C.a([p,m],x.O),g,g).aw(0,t))
d.aD(s,q)
q=C.M()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.N7:D.bC5}else l=e.b
k=B.fPR(C.jD(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a6(d,v.aC(0,new C.u(p/2,q.gbb(q)/2)))
j=B.fPR(e.a,10.5,A.c,g,g,A.I)
j.a6(d,a0.c.ad(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fPR(f,9,u?A.dN:A.c_,g,g,A.u)
i.a6(d,a0.c.ad(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aWO(d,w.aay(a0,h),o)
this.aWO(d,a0.c.ad(0,D.HA),o)},
aWO(d,e,f){var w
$.X()
w=C.M()
w.r=D.aaN.gp(0)
d.ai(e,8.5,w)
w=C.M()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ai(e,8.5,w)
w=C.M()
w.r=A.c.gp(0)
d.ai(e,3.2,w)},
aq(d){return!0}}
B.aJM.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv3.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsm()}}
B.MC.prototype={
T(){return new B.aBy(C.ms(0,null,null))}}
B.JI.prototype={
a4(){return"_UnfoldStyle."+this.b}}
B.A1.prototype={}
B.aBy.prototype={
c2O(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcq(0).at
v.toString
w.f=v}w.m(new B.dJD(w,e))},
bXm(){var w=this
w.e.q()
w.e=C.ms(w.f,null,null)
w.m(new B.dJC(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.oc(t,C.cb(v,A.bX,t?new B.bp8(w.e,w.gc2N(w),new B.dJE(d),v):new B.aFN(u,new C.cw(u.b,x.gj)),v,!1,!1,v,!1),new B.dJF(w,u),x.C)}}
B.bqG.prototype={}
B.bp8.prototype={
aWP(d,e){var w=null
return new C.C(I.XV,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eRQ,w,w,w),A.bA,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.A(C.a([C.aH(v,v,v,v,T.nQ,v,v,v,w.e,v,v,v,v,v,v),A.rl,D.bu5],u),A.m,v,A.e,A.j,0,v,v),s=w.aWP("STUDIOS","Play, make things, and keep what you make")
$.bCb()
return C.bn(!0,C.v(C.a([new C.C(D.btc,t,v),C.D(C.ve(0,v,A.q,w.c,A.y,v,v,v,v,v,!1,v,A.ai,!1,C.a([new C.m_(s,v),new C.nH(A.hI,C.O9(new C.of(new B.eRR(d),22,!0,!0,!0,0,C.rG(),v),D.aMs),v),new C.m_(w.aWP("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nH(D.boq,C.O9(new C.of(new B.eRS(w),6,!0,!0,!0,0,C.rG(),v),D.aMs),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)}}
B.adJ.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(F.mQ,p,0.3)
m.toString
w=x.O
m=C.a([m,D.adj],w)
v=C.I(p.j(0.6),A.r,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aF(!1,A.a1,!0,r,C.aK(!1,o,!0,C.ex(C.v(C.a([C.p(r,C.W(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a7(A.ax,A.aD,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.P,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cZ,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.ba,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a7(A.ax,A.aD,A.x,m,r,r),A.n),r,A.F5,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.af)}}
B.acD.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.mQ,A.d.gL(i),0.24)
f.toString
w=x.O
f=C.a([f,D.adj],w)
v=C.I(A.d.gL(i).j(0.35),A.r,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cx,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aV(6,6)
m=C.a([A.d.gL(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aFa,0)],u)
r.push(C.p(k,C.W(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bp(n,n,n,n),l,new C.a7(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gL(i),A.d.gal(i),0.4)
u.toString
return C.aF(!1,A.a1,!0,k,C.aK(!1,h,!0,C.ex(C.v(C.a([new C.a6(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.at,C.W(A.Bl,A.d.gL(i),k,k,k,18)],s),A.m,k,A.ba,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a7(A.ax,A.aD,A.x,f,k,k),A.n),k,A.F5,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.af)}}
B.Pf.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.bZ(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.bd),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.R8,26),new C.ac(-6,A.G,A.d.gL(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gL(i),A.c,0.14)
p.toString
o=A.d.gL(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bY(0,C.bZ(j,new C.o(j,j,j,j,j,new C.a7(A.ax,A.aD,A.x,C.a([p,o,n,i],m),D.d9O,j),A.n),A.bd),0,0,0),C.ao(j,C.bZ(j,new C.o(j,j,j,j,j,new C.a7(A.b0,A.b6,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bd),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bY(0,C.b3(j,j,j,new B.bq6(i,j),A.au),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.r,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.W(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eTn,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.at,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Se)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(A.fH,C.A(C.a([s,A.eB,C.D(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bY(0,C.e_(C.ei(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bY(0,C.e_(C.bZ(j,new C.o(j,j,C.I(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bd),!0,j),0,0,0))
return new C.a6(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bY(0,C.bZ(C.bw(q,new C.an(A.W,j,A.aa,A.q,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bd),0,0,0)],l),j),j)}}
B.bq6.prototype={
a6(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.aa(r,-10,s,w)
u=d.a
J.bA(u.save())
u.translate(v.gbQ().a,v.gbQ().b)
d.j9(0,0.35)
t=C.cu(A.J,(w- -10)*1.6,s-r)
$.X()
s=C.M()
s.sau(new C.a7(A.a3,A.a7,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aw(0,t))
d.aY(t,s)
u.restore()},
aq(d){return d.b!==this.b}}
B.bpC.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.bcX,D.acA],x.O),t=this.e,s=C.I(A.d.gL(t).j(0.4),A.r,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.jX,24)],x.V),q=C.m(22),p=A.d.gL(t)
return new C.a6(this.c,this.d,C.bZ(C.bw(q,C.b3(C.av(C.W(A.jb,A.d.gL(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b81(p,w),A.au),A.aq),new C.o(w,w,s,v,r,new C.a7(A.ax,A.aD,A.x,u,w,w),A.n),A.bd),w)}}
B.b81.prototype={
a6(d,e){var w,v,u,t,s,r,q,p
$.X()
w=C.M()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ef(A.J)
$.X()
t=C.M()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ai(u,30,t)},
aq(d){return!1}}
B.aFN.prototype={
T(){return new B.aFO(new C.cp(null,x.A),null,null)}}
B.aFO.prototype={
gtE(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.blM,null,1,null,v)
w.cH(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
gYx(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fP,null,1,null,v)
w.f8(0,!0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
gavl(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc2L(){var w=this.w
if(w===$){w=C.B(this.a.c.d,x.G)
this.w=w}return w},
gaTt(){var w=this.x
if(w===$){w=C.B(this.a.c.e,x.Z)
this.x=w}return w},
gaU7(){var w=this.y
if(w===$){w=C.B(this.a.c.f,x.N)
this.y=w}return w},
gb4g(){var w=this.z
if(w===$){w=C.B(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtE()
w.d8()
w.dR$.K(0,this.gcrI())},
crJ(){var w,v,u,t,s,r,q,p=this,o=p.gtE().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gavl().a){case 0:w=D.n7
break
case 1:w=D.tQ
break
case 2:w=D.a1h
break
case 3:w=D.n7
break
case 4:w=D.cZ2
break
case 5:w=D.tQ
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a8y)r=0.09
else r=s===D.a8z?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.bUn[v]
B.lb("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.Bb("bell",D.c27,1400,0.35)}}p.ax=o},
q(){this.gtE().q()
this.gYx().q()
this.bub()},
aeR(){var w=this
w.gtE().cQp(0,C.dB(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eRx(w))},
cda(){this.gtE().bX(0)
this.m(new B.eRw(this))},
acr(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$acr=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaU7(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){q=t[r]
l.push(new C.ar(new C.bb(q,A.b2,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb4g(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){p=t[r]
m.push(new C.ar(new C.bb(p,A.b2,A.aN),$.aw()))}o=C.B(u.gaTt(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bW(F.mQ,null,new B.eRv(u,l,m,o),t,!0,!0,!0,A.li,!1,!1,x.H),$async$acr)
case 2:l=C.B(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$acr,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gavl(),f=i.a.c,e=f.b,d=i.gc2L(),a0=new B.A1(g,e,f.c,d,i.gaTt(),i.gaU7(),i.gb4g())
f=C.aq(A.d.gL(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.W(i.at?A.nO:O.qV,A.ad,h,h,h,21),h,h,h,new B.eRF(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bLA,h,h,h,i.gc2M(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.ml,h,h,h,new B.eRG(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gYx(),new B.eRH(i,a0),h),C.cm(new B.eRI(i,a0))],g)
u=i.as
t=u?i.gcd9():i.gcfs()
u=u?D.bBm:A.tE
s=C.aq(A.d.gL(d),A.d.gal(d),0.4)
s.toString
t=C.A(C.a([C.aH(h,h,h,h,C.W(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.c7),C.D(C.c6(i.gtE(),new B.eRJ(i,a1,a0),h),1),C.aH(h,h,h,h,D.bI_,h,h,h,new B.eRK(i),h,h,h,h,"Replay",A.c7)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gL(d),A.d.gal(d),0.4)
r.toString
s=B.hy(r,u+"x","Speed",2.5,0.4,new B.eRL(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.d7b[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gL(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dz(p.b,o===p.a,new B.eRM(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bUJ[q]
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}m=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}l=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}k=A.d.gL(o).A(0,A.d.gL(n))?A.c:A.b5
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}j=new C.az(k,A.d.gL(o).A(0,A.d.gL(n))?2.5:1,A.r,-1)
d.push(C.aE(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bP(j,j,j,j),h,h,new C.a7(A.ax,A.aD,A.x,n,h,h),A.a6),h,l,h,D.afs,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eRN(i,n),h,h,h,h,h,h,!1,A.a8))}return B.jE(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.es(new C.an(A.W,h,A.b_,A.q,v,h),i.f),e,C.v(C.a([t,s,new B.eK(u,"STYLE",h),new B.eK(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bw8(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.n7[r]
p=A.k.D((1-A.et.av(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.n7[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.n7[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dl()
l=n.a
l.$flags&2&&C.aj(l)
l[11]=0.0013
n.jN(p)
l=v[r]
k=u[r]
j=t[r]
i=D.n7[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.n7[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.n7[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cK(0,r*118,0,f,f,f,new C.kP(q,new C.iE(n,f,A.b0,!0,f,new B.Pf(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.n7[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gL(w)
v=D.n7[r]
t=v+0.12
e.push(new C.cK(0,r*118-3-2,0,f,f,4,new C.ma(new B.boL(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.au,f,f),f))}return new C.a6(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bMk(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.tQ[r]
p=A.po.av(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.tQ[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.tQ[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dl()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jx(n,n,n,1)
m.fv(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.Pf(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dl()
k.fv(3.141592653589793)
k=new C.iE(k,f,A.A,!0,f,new B.bpC(a2,108,w,f),f)}e.push(new C.cK(0,r*130,0,f,f,f,new C.kP(q,new C.iE(m,f,A.A,!0,f,k,f),f),f))}return new C.a6(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cwF(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a1h[w]
l.push(A.cq.av(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bY(0,C.b3(n,n,n,new B.bs9(d.d,l,D.au3,m,B.bp7(e,0.4,0.62),f,B.bp7(e,0.45,0.7),n),A.au),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fQm(g,w)
q=D.au3[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cK(r,s-q*m*p+12,n,n,t,n,new C.kP(o,C.W(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fQm(g,w)
r=D.a1h[w]
q=r+0.15
v.push(new C.cK(s,l,n,n,t,n,new C.kP(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.a72,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a6(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bCg(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cq.av(0,B.bp7(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bY(0,C.av(C.dU(C.b3(f,f,f,new B.boc(A.d.gL(a1),B.bp7(a3,0,0.2),a4,f),new C.at(a5*0.95,70)),D.dYi),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dA.av(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dl()
m=l.a
m.$flags&2&&C.aj(m)
m[11]=0.001
l.fv(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jx(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.G(r,1):-1
w.push(new C.z(o,new C.cK(0,0,0,0,f,f,new C.cq(A.A,f,f,new C.kP(k*(0.45+0.55*o),C.dU(new C.iE(l,f,A.A,!0,f,new B.Pf(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new B.eRo())
A.d.v(a0,new C.K(w,new B.eRp(),x.fR))
return new C.a6(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bBu(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.tQ[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mB.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.tQ[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.avX[q]
k=C.dl()
k.mB(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jx(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.tQ[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cK(0,0,0,0,e,e,new C.cq(A.A,e,e,new C.kP(m,C.dU(new C.iE(k,e,A.A,!0,e,new B.Pf(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.tQ[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cK(0,0,0,0,e,e,new C.cq(A.A,e,e,C.dU(new C.ma(new B.b8H(w,f,q,e),e,new C.at(r,212),e,e),new C.u(0,D.avX[q])),e),e))}return new C.a6(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bz4(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.dYm],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.n7[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cq.av(0,p)
q=D.aw0[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.n7[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.n7[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dl()
d=f.a
d.$flags&2&&C.aj(d)
d[11]=0.001
f.mB(l*h+D.d1Q[r]*o)
f.fv(l*0.9)
h=0.55+0.45*o
f.jx(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cK(0,0,0,0,a3,a3,new C.cq(A.A,a3,a3,new C.kP(g,C.dU(new C.iE(f,a3,A.A,!0,a3,new B.Pf(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.n7[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aw0[r]
a6.push(new C.cK(0,0,0,0,a3,a3,new C.cq(A.A,a3,a3,C.dU(new C.ma(new B.boe(A.d.gL(w),a2,a3),a3,new C.at(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a6(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.boL.prototype={
a6(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.aa(w-v,0,w+v,e.b)
q=C.bz(u,A.h8)
$.X()
t=C.M()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mo
d.aD(q,t)
t=C.bz(u,A.h8)
q=C.M()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
aq(d){return d.c!==this.c||d.d!==this.d}}
B.boc.prototype={
a6(d,e){var w,v,u=this.c,t=C.cu(e.ef(A.J),e.b*u,e.a*u)
$.X()
u=C.M()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=X.H3
d.i2(t,u)
u=C.M()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.i2(t,u)
u=t.cG(-14)
v=C.M()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.i2(u,v)},
aq(d){return!0}}
B.b8H.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ef(A.J),f=this.c,e=A.cq.av(0,f)
$.X()
w=C.M()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gL(u).j(0.6*v).gp(0)
d.ai(g,40+e*a0.a*0.42,w)
t=new C.eT()
t.dI(this.d*17+3)
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
aq(d){return!0}}
B.boe.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ef(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.cu(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.X()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c4(p),n)
n.delete()}},
aq(d){return d.c!==this.c}}
B.bs9.prototype={
a6(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.aa(0,d0,0+c5,d0+60)
$.X()
d0=C.M()
w=c1.b
v=x.O
d0.sau(new C.a7(A.b0,A.b6,A.x,C.a([A.d.gL(w).j(0.18),A.K],v),c2,c2).aw(0,d1))
d2.aY(d1,d0)
d0=C.M()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bA(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fQm(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.X()
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lg
a4=a3.H()
t.drawOval(C.c4(new C.aa(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.aa(d,a1,a3,a1+a0)
a6=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gL(w),A.c,0.1)
a7.toString
a6.sau(new C.a7(A.b0,A.b6,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).aw(0,a5))
a4=a6.H()
t.drawRect(C.c4(a5),a4)
a4.delete()
a2=a2.r
a6=C.a([],n)
a8=new C.aQ(a2,A.ap,c2,c2,a6)
a6.push(new C.b5(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a7,m))
a6.push(new C.ap(a3,c4))
a6.push(new C.bE())
a6=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=C.aq(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbI().a.snapshot()
t.drawPath((a8.e=new C.cF(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aQ(a2,A.ap,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bE())
a2=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=C.aq(A.d.gL(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbI().a.snapshot()
t.drawPath((b0.e=new C.cF(a2)).a,a4)
a4.delete()
b1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(C.c4(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cF(a8.gbI().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cF(b0.gbI().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bw(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bz(new C.aa(b7,a7,b7+r,b5),A.h8)
$.X()
b9=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.ep(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.aa(d,a1,a3,a1+28)
J.bA(t.save())
t.clipRect(C.c4(a5),$.qG()[1],!0)
$.X()
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.sau(new C.a7(A.b0,A.b6,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aw(0,c0))
a4=a1.H()
t.drawRect(C.c4(c0),a4)
a4.delete()
t.restore()}}},
aq(d){return!0}}
B.aLt.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdG())
w.b2$=null
w.a2()}}
B.a_l.prototype={
a4(){return"_Role."+this.b}}
B.pR.prototype={}
B.qy.prototype={}
B.BS.prototype={}
B.Yl.prototype={}
B.adz.prototype={}
B.a_y.prototype={
gY(d){return this.d}}
B.C2.prototype={}
B.aaw.prototype={}
B.aaN.prototype={}
B.acH.prototype={}
B.bf5.prototype={
a1A(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dF(d,"",e,g,h,f)},
b5f(d,e,f){return this.a1A(d,e,f,0,0.55)},
azO(d,e,f,g){return this.a1A(d,e,f,0,g)},
b5g(d,e,f,g){return this.a1A(d,e,f,g,0.55)},
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
w.aZ()},
ais(d,e,f,g){var w="n"+this.ay++,v=new B.qy(w,e,f,g)
this.a.n(0,w,v)
this.aZ()
return v},
AI(d,e,f){return this.ais(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bn(w.b,new B.ddW(e))
A.d.bn(w.c,new B.ddX(e))
w.aZ()},
b91(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mn.h(0,v.b).c===D.wl)return!1
w=this.b
if(A.d.b8(w,new B.ddT(d,e)))return!1
w.push(new B.BS(d,e))
this.aZ()
return!0},
bWk(d){var w
if(d.b==="beat")return D.c2g[A.o.G(d.d,4)]
w=this.at
switch(A.o.G(d.d,3)){case 1:return 350+w.aB(500)
case 2:return 1400+w.aB(2200)
default:return 450+w.aB(2000)}},
aDf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.G(w,6)
t=D.awf[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.C2(u,t,j.ax,90))
w.push(new B.C2(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a_y(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b5f(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.G(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a_y(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aB(700),j.ax))}j.f.push(new B.C2(u,t,j.ax,120))
j.azO(120,200,"noise",0.5)
j.b5f(261.63*Math.pow(2,([7,12,16,19][w.aB(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.C2(u,t,j.ax,230))
w.push(new B.C2(u,t,j.ax+160,160))
w.push(new B.C2(u,t,j.ax+320,100))
j.b5g(180+j.at.aB(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.aaw(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b5g(300+w.aB(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.aaN(u,u.ad(0,new C.u(Math.cos(q),Math.sin(q)).aF(0,260+w.aj()*200)),t,j.ax))
j.a1A(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fK()
j.a1A(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.acH(u,D.avK[v],t,j.ax))
j.azO(261.63*Math.pow(2,([0,5,9,12][j.at.aB(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.azO(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bZn[A.o.G(w,3)]
for(k=1;k<=3;++k)j.cn_(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gag(j.b),v=new C.fx(w,new B.ddU(d));v.C();)j.aym(w.gU(0),j.ax+D.caA[A.o.G(g.d,4)])
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
case"chance":s=j.at.aB(100)<D.crl[A.o.G(g.d,3)]
break
default:break}if(s)for(w=A.d.gag(j.b),v=new C.fx(w,new B.ddV(d));v.C();)j.aym(w.gU(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.yT(w,0,v-700)},
cn_(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Yl(e,"~"+d))},
aym(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.adz(d.a,v,e,w))
u.push(new B.Yl(w,v))},
aGz(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a3(w).k("bc<2>")
w=C.B(new C.bc(w,v),v.k("H.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aDf(r)
u.n(0,r,o.ax+o.bWk(s))}}w=o.c
v=C.T(w).k("a2<1>")
q=C.B(new C.a2(w,new B.ddY(o),v),v.k("H.E"))
if(q.length!==0){A.d.bn(w,new B.ddZ(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b0(u,1)
for(u=A.d.gag(v),r=new C.fx(u,new B.de_(p));r.C();)o.aym(u.gU(0),o.ax)}else o.aDf(u)}}A.d.bn(o.d,new B.de0(o))
A.d.bn(o.e,new B.de1(o))
A.d.bn(o.f,new B.de2(o))
A.d.bn(o.w,new B.de3(o))
A.d.bn(o.x,new B.de4(o))
A.d.bn(o.r,new B.de5(o))
o.aZ()},
uO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
ae(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=C.a([],x.D)
for(v=this.a,v=new C.dt(v,v.r,v.e),u=x.N,t=x.C;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.E(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.L)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.R.ao(C.E(["nodes",m,"edges",v],u,x.ew),null)},
cIb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aH(0,d,null))
k.a8(0)
for(o=x.j,n=J.aX(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gU(n)
u=C.t(J.q(v,"k"))
if(!D.mn.ah(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.qy(t,u,new C.u(C.f8(J.q(v,"x"))*k.cy.a,C.f8(J.q(v,"y"))*k.cy.b),A.k.O(C.f8(J.q(v,"p")))))
s=C.c7(C.aJ(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aX(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gU(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.ah(0,q)&&m.ah(0,p))n.push(new B.BS(q,p))}k.aZ()
return!0}catch(l){return!1}},
cLa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qy(n,r,new C.u(q*p.a,o*p.b),s))
l.aZ()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b91(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.Fh.prototype={}
B.UX.prototype={
T(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aCO(new B.bf5(C.V(w,x.f3),v,u,t,s,r,q,p,o,C.V(w,n),C.V(w,n),C.V(w,n),C.V(w,n),A.cI,A.K,A.au,$.aw()),A.bx,A.J,A.J,A.T,null,null)}}
B.aCO.prototype={
ab4(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$ab4=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.aA(),$async$ab4)
case 6:q=n.kb(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.egV(s))
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
return C.i($async$ab4,v)},
a86(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a86=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.egK(s))
u=3
w=6
return C.b(C.aA(),$async$a86)
case 6:e.ar("Bool","ngmy_core_lab_coach_v1",!0)
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
return C.i($async$a86,v)},
bIa(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cI(0,0,new B.egM())+"|"+A.d.cI(o,0,new B.egN())
if(v===p.ch)return p.CW
u=new B.egQ()
t=x.s
s=C.a([],t)
r=new B.egR(p,s,u)
for(n=new C.bc(n,w).gag(0),w=new C.fx(n,new B.egO());w.C();){q=n.gU(0)
if(!A.d.b8(o,new B.egP(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dc(s,0,C.dJ(5,"count",x.S),x.N).dF(0)},
a_(){var w,v=this
v.a1()
v.ab4()
v.d.db=v.ay
w=v.qe(new B.ehk(v))
w.iZ(0)
v.e!==$&&C.aO()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a9(0)
v=w.e
v===$&&C.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.bte()},
aaC(d){return this.bVN(d)},
bVN(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$aaC=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.aA(),$async$aaC)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cIb(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aUz(A.d.gL(D.avg))
if(s.c!=null)s.m(new B.egU())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aaC,v)},
aUz(d){this.d.cLa(0,d.c,d.d)
this.DI()},
DI(){var w=this.as
if(w!=null)w.a9(0)
this.as=C.cM(A.lz,new B.egG(this))},
avm(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("H.E"))
r=C.T(s).k("dw<1>")
s=new C.dw(s,r)
s=new C.bV(s,s.gM(0),r.k("bV<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cbb(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("H.E"))
q=C.T(r).k("dw<1>")
r=new C.dw(r,q)
r=new C.bV(r,r.gM(0),q.k("bV<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bVB(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mn.h(0,r.b).c===D.wl)continue
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
c2R(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hcE(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cur(d){var w,v,u,t,s,r,q=this,p=q.avm(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eP()
u=v.b
if(u==="button"){w.aDf(p)
return}if(q.r)return
t=D.mn.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qe)s=6
else s=1
v.d=A.o.G(v.d+1,s)
w.aZ()
q.DI()
return}if(q.r)return
r=q.c2R(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.aZ()
q.DI()}},
ccs(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cbb(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.avm(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
cct(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aZ()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aZ()}}},
aZv(){var w,v,u=this
if(u.z!=null){w=u.bVB(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b91(v,w)}else v=!1
if(v){C.jL()
u.DI()}u.z=null
u.d.aZ()}else if(u.x!=null){if(u.at)u.DI()
u.x=null}},
abh(d){return this.bYs(d)},
bYs(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$abh=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.avm(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.je()
p=t.c
p.toString
w=3
return C.b(C.bW(F.mQ,null,new B.egX(q),p,!0,!0,!1,A.li,!1,!1,x.y),$async$abh)
case 3:if(f===!0){r.W(0,s)
t.DI()}case 1:return C.h(u,v)}})
return C.i($async$abh,v)},
c2P(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.AI(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eP()
this.DI()},
aeZ(){var w=0,v=C.j(x.H),u=this,t,s
var $async$aeZ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bW(F.mQ,null,new B.egZ(),s,!0,!0,!0,A.li,!1,!1,x.es),$async$aeZ)
case 2:t=e
if(t!=null)u.aUz(t)
return C.h(null,v)}})
return C.i($async$aeZ,v)},
acs(d){var w=0,v=C.j(x.H),u=this,t
var $async$acs=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.c9(null,null,!0,null,new B.egJ(),t,null,!0,!0,x.y),$async$acs)
case 2:if(f===!0){u.d.a8(0)
u.DI()}return C.h(null,v)}})
return C.i($async$acs,v)},
B(d){var w=this,v=null,u=C.a([C.agU(w.r?new C.bI(A.a3,v,v,new C.C(A.F6,C.hc(D.bG0,D.f8B,new B.ehi(w),v),v),v):w.c2S(),A.bb,A.it),C.D(C.cm(new B.ehj(w)),1)],x.p)
if(!w.r)u.push(w.cpn())
return C.cb(v,A.bX,C.bn(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bDV(){var w=null,v=new B.egL(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bs.j(0.5),A.r,1)
return C.bY(0,C.ei(C.av(C.p(w,C.cd(C.v(C.a([D.fjj,A.at,D.fqt,A.ay,v.$4(A.oz,A.bs,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.FS,A.ct,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.l7,A.bZ,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.ajh,A.cp,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fpP,new C.bI(A.a7,w,w,C.bK(!1,D.fgz,w,w,!0,w,w,this.gbDO(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.y,w,w,w,w,A.ai),A.f,w,A.UA,new C.o(F.mQ,w,s,t,w,w,A.n),w,w,w,A.fy,A7.agG,w,w,w),w,w,w),u,!0),0,0,0)},
c2S(){var w=this,v=null,u=C.aH(v,v,v,v,T.nQ,v,v,v,new B.eh4(w),v,v,v,v,v,v),t=w.a7z(A.MS,"How it works",new B.eh5(w),!0),s=w.ay?A.nO:O.qV
return new C.C(D.bsr,C.A(C.a([u,D.btU,t,w.a7z(s,"Sound",new B.eh6(w),!0),w.a7z(A.dW,"Ideas",w.gcga(),!0),w.a7z(D.xJ,"Clear",w.gc2Q(w),!0),w.aLM(A.iP,"Show",new B.eh7(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aLM(d,e,f,g,h){var w=null,v=h?A.bs:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.W(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.C(Ad.v7,C.aF(!1,A.a1,!0,u,C.aK(!1,t,!0,C.hp(new C.C(new C.Q(8,8,8,8),C.A(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.af),w)},
a7z(d,e,f,g){return this.aLM(d,e,f,g,!1)},
cpn(){var w=null,v=new B.eh0(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.A(C.a([v.$2("START",D.wl),v.$2("CHANGE",D.De),v.$2("REACT",D.qe)],x.p),A.F,w,A.e,A.j,0,w,w),A.q,w,A.y,w,w,w,w,A.aQ),A.f,w,w,new C.o(D.E6,w,new C.bP(new C.az(u,1,A.r,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bnH,w,w,w)},
cpo(d){var w,v,u,t,s=null,r=D.mn.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.r,1)
return new C.C(A.fx,C.aE(s,C.p(s,C.v(C.a([C.W(r.b,v,s,s,s,22),A.cZ,C.d(r.a,s,1,A.a2,s,s,s,D.aOr,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a7(A.b0,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hH,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.eh_(this,d),s,s,s,s,s,s,!1,A.a8),s)}}
B.bf6.prototype={
a6(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bA(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.X()
u=C.M()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.H()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.X()
o=C.M()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aY(new C.aa(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){l=w[m]
k=n.h(0,l.a)
j=n.h(0,l.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=j.c
f=g.a-36
g=g.b
e=$.X()
d=C.a([],o)
a0=new C.aQ(e.r,A.ap,b4,b4,d)
d.push(new C.b5(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new C.pq(h+a1,i,f-a1,g,f,g))
a2=D.mn.h(0,k.b).d
a3=D.mn.h(0,j.b).d
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bO
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rh(new C.u(h,i),new C.u(f,g))
e.sau(new C.a7(A.a3,A.a7,A.x,d,b4,b4).aw(0,new C.aa(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbI().a.snapshot()
b7.drawPath((a0.e=new C.cF(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hcE(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mo
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.HA)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aQ($.X().r,A.ap,b4,b4,C.a([],o))
o=a8.b
a0.E(new C.b5(t,o))
i=a9.b
a0.E(new C.pq(t+a1,o,w-a1,i,w,i))
i=C.M()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aO(a0,i)
i=C.M()
i.r=A.c.gp(0)
b8.ai(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dV.av(0,v)
$.X()
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
h=C.lc(o,i,A.dV.av(0,v))
h.toString
i=C.lc(o,i,A.dV.av(0,A.k.D(v-0.35,0,1)))
i.toString
$.X()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bO
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rh(i,h)
o.sau(new C.a7(A.a3,A.a7,A.x,f,b4,b4).aw(0,new C.aa(e.a-4,e.b-4,e.c+4,e.d+4)))
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
i.z=A.je
q=i.H()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.X()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){j=w[m]
o=j.a
$.X()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.je
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.sau(new C.bR(P.qf,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).aw(0,C.bU(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bf7(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a6(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbb(p)/2)))}for(b5=new C.dt(n,n.r,n.e);b5.C();)b3.cc1(b8,b5.d,b6)
b7.restore()},
cc1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mn.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cu(e.c,64,64)
t=C.bz(u,A.jZ)
s=t.eM(A.cx)
$.X()
r=C.M()
r.r=A.w.j(0.55).gp(0)
r.z=A.lg
d.aD(s,r)
if(v>0){s=t.cG(6)
r=C.M()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.yD
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
r.sau(new C.a7(A.b0,A.b6,A.x,C.a([s,p],x.O),j,j).aw(0,u))
d.aD(t,r)
r=C.M()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=B.bf7(C.jD(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a6(d,p.aC(0,new C.u(s/2,r.gbb(r)/2)))
n=B.bf7(h.a,11,A.c,j,j,A.I)
n.a6(d,e.c.ad(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.G(e.d,r)]
else m=i==="pop"?D.avK[A.o.G(e.d,6)]:j
h=h.c
if(h===D.qe){s=e.c.ad(0,new C.u(0,62))
r=C.M()
r.r=D.awf[A.o.G(e.d,6)].gp(0)
d.ai(s,5,r)}else if(m!=null){l=B.bf7(m,9.5,A.az,j,j,A.O)
l.a6(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bf7(m,9.5,A.az,j,j,A.O)
l.a6(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wl)k.b_k(d,e.c.aC(0,D.HA),q)
k.b_k(d,e.c.ad(0,D.HA),q)},
b_k(d,e,f){var w
$.X()
w=C.M()
w.r=A.bX.gp(0)
d.ai(e,9,w)
w=C.M()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ai(e,9,w)
w=C.M()
w.r=A.c.gp(0)
d.ai(e,3.5,w)},
aq(d){return!0}}
B.aKC.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bjF.prototype={}
B.P6.prototype={
gY(d){return this.d}}
B.Vc.prototype={
T(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.biJ(new C.cp(null,x.A),w,v,A.cI,A.bx,D.Ef,null,null)}}
B.biJ.prototype={
aY3(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bw((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.auI[A.o.G(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.lb("synth",u,420,0.3)
break
case"rainbow":B.lb("bell",u,700,0.35)
break
case"stars":B.lb("pluck",u+12,400,0.4)
break
case"sparks":E.dF(2400+t.r.aB(2000),"",60,0,0.18,"noise")
break
default:E.dF(110+t.r.aB(60),"",140,0,0.22,"noise")}},
c5Q(d){return this.aY3(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qe(new B.esL(v))
w.iZ(0)
v.w!==$&&C.aO()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.btn()},
gaZP(){var w=this.Q
return w<0?new H.mJ(1,A.k.G(this.y*0.18,360),0.85,1).iE():D.PR[w]},
aQ2(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaZP(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.cp,A.aB,v.aj())
m.toString
j.push(new B.P6(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aB(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.P6(d,new C.u(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aB(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.P6(d,new C.u(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aWR(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaZP()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bjF(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aQ2(e)
r.aY3(e,!0)
r.m(new B.esm())},
aWQ(){this.ax=null
this.m(new B.esl())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.ml,n,n,n,new B.esv(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.bq1(k,o.f,o.y,o.at,n),A.au)],m)
if(!o.ay&&k.length===0)j.push(D.b2y)
k=C.aE(A.c5,new C.an(A.W,n,A.b_,A.q,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.esw(o),new B.esx(o),new B.esB(o),n,n,n,n,n,n,n,n,n,new B.esC(o),new B.esD(o),n,n,n,!1,A.a8)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cP_[w]
j.push(new B.dz(v.b,o.z===v.a,new B.esE(o,v),v.c,A.bZ,n))}u=C.a([new B.EJ(A.c,o.Q<0,new B.esF(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.EJ(D.PR[t],o.Q===t,new B.esG(o,t),!1,n))
s=o.as
s=B.hy(A.bZ,A.o.u(A.k.V(s)),"Size",36,4,new B.esH(o),s)
r=o.ch
q=r?A.nO:O.qV
q=C.a([new B.dz("Sound",r,new B.esI(o),q,A.bZ,n),new B.fg(A.qU,"Undo",new B.esy(o),A.c,n),new B.fg(D.xJ,"Clear",new B.esz(o),A.cr,n)],m)
for(w=0;w<4;++w){p=D.d3j[w]
q.push(new B.EJ(p,o.at.A(0,p),new B.esA(o,p),!1,n))}return B.jE(A.bZ,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.es(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eK(j,"BRUSH",n),new B.eK(u,"COLOUR",n),s,new B.eK(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.bq1.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.X()
w=C.M()
v=a4.e
w.r=v.gp(v)
a6.aY(new C.aa(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.X()
o=C.a([],t)
n=new C.aQ(p.r,A.ap,a5,a5,o)
o.push(new C.b5(A.d.gL(q).a,A.d.gL(q).b))
for(p=C.T(q),m=p.k("pN<1>"),l=new C.pN(q,1,a5,m),l.GJ(q,1,a5,p.c),l=new C.bV(l,l.gM(0),m.k("bV<ai.E>")),m=m.k("ai.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bx(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gL(q)
$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.X()
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
u.drawPath((q==null?n.e=new C.cF(n.gbI().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fz
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbI().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fz
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbI().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mJ(1,A.o.G(i*5,360),0.85,1).iE()
o=q[i-1]
m=q[i]
$.X()
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
a1=k?new H.mJ(1,A.o.G(a3*23,360),0.7,1).iE():l
a4.c2T(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=T.Qk
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c2T(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.X(),o=C.a([],x.v),n=new C.aQ(p.r,A.ap,null,null,o)
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
n.e=null}}n.E(new C.bE())
$.X()
p=C.M()
p.r=h.j(0.4).gp(0)
p.z=A.je
d.aO(n,p)
p=C.M()
p.r=h.gp(0)
d.aO(n,p)},
aq(d){return!0}}
B.Vo.prototype={
T(){return new B.aD3(new C.cp(null,x.A),new C.ar(new C.bb("NGMY",A.b2,A.aN),$.aw()),null,null)}}
B.aD3.prototype={
gIh(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.th,null,1,null,v)
w.cH(0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIh()
w.d8()
w.dR$.K(0,this.gbUL())},
bUM(){var w,v,u,t,s,r,q,p=this,o=p.gIh().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.lQ:new C.m0(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dF(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dF(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.lb(s,D.atF[A.o.G(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIh().q()
var w=this.f
w.S$=$.aw()
w.P$=0
this.btt()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m0(h)
w=C.B(h,C.a3(h).k("H.E"))}v=D.PR[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.ml,j,j,j,new B.ezk(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.avL[k.y]
s=C.bw(t,C.bZ(C.av(C.c6(k.gIh(),new B.ezl(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a7(A.ax,A.aD,A.x,s,j,j),A.n),A.bd),A.aq)
t=A.c.j(0.06)
t=C.aL(j,A.T,!1,j,!0,A.q,j,C.aM(),i,j,j,j,j,j,2,C.br(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.CU,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ah,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.ezm(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hn,!0,A.a5,j,A.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cr9[r]
i.push(new B.dz(q.b,k.r===q.a,new B.ezn(k,q),j,A.cp,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.EJ(D.PR[o],k.w===o,new B.ezo(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.nO:O.qV
l=C.a([new B.dz(m,n,new B.ezp(k),l,A.cp,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.EJ(D.avL[o][0],k.y===o,new B.ezq(k,o),!1,j))
n.push(A.bp)
n.push(new B.fg(A.mh,"Replay",new B.ezr(k),A.c,j))
m=k.x
return B.jE(A.cp,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(A.bB,new C.es(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.P,new B.eK(i,"MOVE",j),new B.eK(p,"COLOUR",j),new B.eK(l,"SOUND",j),new B.eK(n,"BACK",j),B.hy(A.cp,A.o.u(A.k.V(m)),"Size",96,28,new B.ezs(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bXw(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cP(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bw(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.G(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
A.d.a8(p)
p.push(new C.cP(h,A.J,30*v))
p.push(new C.cP(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.G(A.k.bw(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b7
else w=u?A.bZ:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mB.av(0,t)
w=h
m=t
break
case"rainbow":w=new H.mJ(1,A.k.G(g*360+e*40,360),0.75,1).iE()
A.d.a8(p)
p.push(new C.cP(w.j(0.7),A.J,18))
break
default:w=h}return C.db(C.dU(C.e9(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aKL.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aKR.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.ZS.prototype={}
B.UU.prototype={
T(){var w=C.a([],x.aS)
return new B.aCG(new C.cp(null,x.A),w,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCG.prototype={
gact(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b0_(){return new H.mJ(1,this.f.aj()*360,0.6,1).iE()},
apS(d,e,f,g){var w=this,v=w.gact().ad(0,new C.u(Math.cos(e),Math.sin(e)).aF(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.ZS(v,new C.u(-t,s).aF(0,r).aF(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b0_(),C.a([],x.g)))},
bDh(d,e,f){return this.apS(d,e,f,!1)},
bDg(d,e){return this.apS(d,e,1,!1)},
crD(){var w,v,u,t=this
A.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bDg(40+w*u/5,v.aj()*3.141592653589793*2)},
bE9(){var w=this.r
this.bDh(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.l6()},
ln(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.au))return
w=a2.e
v=w.length
if(v===0&&a2.fO$<300)return
u=a2.gact()
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
if(o.length>260)A.d.cA(o,0)}else A.d.a8(n.e)}for(p=0;p<w.length;w.length===o||(0,C.L)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lO(v.a-s)!==J.lO(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fO$-n.r>250){n.r=a2.fO$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.lb("bell",D.atF[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a2(w,new B.edy(u),C.T(w).k("a2<1>")).gM(0)>0&&a2.ax)E.dF(70,"",300,0.6,0.8,"sine")
A.d.bn(w,new B.edz(a2,u))},
cg3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gact()
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
if(A.o.G(s,3)===0)k.push(t)
if(m<16)break}return k},
gaUc(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aF(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.ml,r,r,r,new B.edm(s,d),r,r,r,r,"Share",r)],q),o=C.cm(new B.edn(s)),n=s.w
n=B.hy(A.cv,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.edo(s),n)
w=s.x
w=B.hy(A.cv,A.k.aa(w,1)+"x","Time",3,0.2,new B.edq(s),w)
v=s.Q
v=B.hy(A.cv,A.o.u(A.k.V(v)),"Planet size",16,3,new B.edr(s),v)
u=s.ax
t=u?A.nO:O.qV
return B.jE(A.cv,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eK(C.a([new B.dz("Sound",u,new B.eds(s),t,A.cv,r),new B.dz("Trails",s.z,new B.edt(s),A.N6,A.cv,r),new B.dz("Planets pull each other",s.y,new B.edu(s),A.y8,A.cv,r)],q),r,r),new B.eK(C.a([new B.fg(A.mg,"Solar system",new B.edv(s),A.cv,r),new B.fg(A.n4,"Comet",new B.edw(s),A.c,r),new B.fg(A.me,"Cluster",new B.edx(s),A.c,r),new B.fg(D.xJ,"Clear",new B.edp(s),A.cr,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bjs.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.X()
w=C.M()
w.r=D.VS.gp(0)
d.aY(new C.aa(0,0,0+g,0+f),w)
v=new C.eT()
v.dI(5)
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
t.sau(new C.bR(A.A,0.5,A.x,h,0,C.a([A.cv.j(0.45),A.K],s),h,h).aw(0,C.bU(g,f)))
d.ai(g,f,t)
t=C.M()
t.sau(D.e8M.aw(0,C.bU(g,o)))
d.ai(g,o,t)
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
q.z=G.mo
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.sau(new C.bR(P.qf,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).aw(0,C.bU(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.M()
t.c=2
t.r=A.j4.gp(0)
d.bA(g,f,t)
t=C.M()
t.r=A.c.gp(0)
d.ai(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
aq(d){return!0}}
B.aaD.prototype={}
B.Vj.prototype={
T(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.biO(new C.cp(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.biO.prototype={
a_(){this.a1()
this.l6()},
c2U(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.aaD(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.G(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
ln(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.c2U()
w=a2.f
A.d.bn(w,new B.eyM(a2))
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
A.d.bn(w,new B.eyN(a2))
if(w.length<a1&&a2.ch)B.lb("bell",12+a2.r.aB(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fO$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fO$
B.lb("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.ml,l,l,l,new B.eyB(m,d),l,l,l,l,"Share",l)],k),i=C.cm(new B.eyC(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cQz[w]
h.push(new B.dz(v.b,m.at===v.a,new B.eyD(m,v),v.c,A.bc,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cAX[w]
u.push(new B.dz(t.b,m.ax===t.a,new B.eyE(m,t),l,A.bc,l))}s=m.ch
r=s?A.nO:O.qV
r=C.a([new B.dz("Sound",s,new B.eyF(m),r,A.bc,l)],k)
s=m.x
s=B.hy(A.bc,A.o.u(A.k.V(s)),"How many",150,15,new B.eyG(m),s)
q=B.hy(A.bc,l,"Together",2.5,0,new B.eyH(m),m.y)
p=B.hy(A.bc,l,"Apart",2.5,0,new B.eyI(m),m.z)
o=B.hy(A.bc,l,"Same way",2.5,0,new B.eyJ(m),m.Q)
n=m.as
return B.jE(A.bc,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eK(h,"TOUCH",l),new B.eK(u,"LOOK",l),new B.eK(r,l,l),s,q,p,o,B.hy(A.bc,A.o.u(A.k.V(n)),"Speed",280,50,new B.eyK(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.bqS.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.acp,D.bhF],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.db,R.KI],v):C.a([D.beN,D.b6n],v)}v=0+a6.a
u=0+a6.b
t=$.X()
s=C.M()
s.sau(new C.a7(A.b0,A.b6,A.x,w,a3,a3).aw(0,new C.aa(0,0,v,u)))
a5.aY(new C.aa(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){q=v[r].a
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.cp.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.cp.j(0.25).gp(0)
n.z=G.mo
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mJ(1,j,0.7,1).iE()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.je
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
case"bird":J.bA(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
e=Math.sin(l+j)*5
j=C.a([],m)
d=new C.aQ(t,A.ap,a3,a3,j)
j.push(new C.b5(8,0))
j.push(new C.ap(-6,-7-e))
j.push(new C.ap(-2,0))
j.push(new C.ap(-6,7+e))
j.push(new C.bE())
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=h.gp(0)
o=j.H()
j=d.gbI().a.snapshot()
s.drawPath((d.e=new C.cF(j)).a,o)
o.delete()
s.restore()
break
default:J.bA(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=C.a([],m)
d=new C.aQ(t,A.ap,a3,a3,j)
j.push(new C.b5(9,0))
j.push(new C.cS(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cS(0,6,9,0))
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cw,0.6)
f.toString
j.sau(new C.a7(A.a3,A.a7,A.x,C.a([h,f],q),a3,a3).aw(0,D.eC3))
o=j.H()
j=d.gbI().a.snapshot()
s.drawPath((d.e=new C.cF(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cr
else a1=v==="scare"?A.cp:A.bc
v=u?12:22
u=C.M()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.ai(a4,v,u)}},
aq(d){return!0}}
B.ab5.prototype={}
B.Tr.prototype={
T(){var w=C.a([],x.bi)
return new B.aBg(w,A.cI,A.au,C.V(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBg.prototype={
gHG(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gaby(){return 54-8*(this.r/100)},
a_(){this.a1()
this.l6()
B.z3("chain_burst").bz(new B.dDk(this),x.P)},
aWT(){return B.vC("chain_burst",C.E(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
ayp(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
A.d.a8(k)
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
k.push(new B.ab5(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.mJ(1,u.aj()*360,0.6,1).iE()))}},
Yy(d){var w,v=this
if(d==null)return 0
w=(v.fO$-d)/1000
if(w<0.4)return v.gaby()*A.dV.av(0,w/0.4)
if(w<1.1)return v.gaby()
if(w<1.5)return v.gaby()*(1-(w-1.1)/0.4)
return 0},
ln(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.au)||!j.Q)return
w=j.d
if(w.length===0)j.ayp()
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
if(v!=null)n.push(new C.z(v,j.Yy(j.ax)))
for(v=A.d.gag(w),s=new C.fx(v,new B.dDl());s.C();){r=v.gU(0)
n.push(new C.z(r.a,j.Yy(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.L)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fO$
E.dF(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eP()
break}}}if(!(j.at!=null&&j.Yy(j.ax)>0||A.d.b8(w,new B.dDm(j)))&&j.fO$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gHG()){if(j.as>=j.gHG()*1.5)k=3
else k=j.as>=j.gHG()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.Bb("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aWT()}else E.dF(120,"",300,0,0.3,"saw")}}},
aWS(d){this.m(new B.dDa(this,d))
this.aWT()},
acu(){var w=0,v=C.j(x.H),u=this,t,s
var $async$acu=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.c9(null,null,!0,null,new B.dDd(u),s,null,!0,!0,x.S),$async$acu)
case 2:t=e
if(t!=null)u.aWS(t)
return C.h(null,v)}})
return C.i($async$acu,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gHG(),t=w.x.h(0,""+w.r)
return B.jE(A.bZ,A.h6,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cm(new B.dDh(w,t==null?0:t,u)),"CHAIN BURST",C.A(C.a([new B.fg(A.qQ,"Levels",w.gc2V(),A.bZ,v),new B.fg(A.jS,"New board",new B.dDi(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
atn(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aNM,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bVd(d,e){return this.atn(d,e,A.c)}}
B.b91.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.X()
w=C.M()
w.r=D.Ef.gp(0)
d.aY(new C.aa(0,0,0+e.a,0+e.b),w)
v=new B.cIV(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.L)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.j(0.25).gp(0)
p.z=G.mo
m=p.H()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.gp(0)
m=p.H()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
aq(d){return!0}}
B.aJK.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv2.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsk()}}
B.aKz.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvj.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btb()}}
B.aKO.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvr.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btq()}}
B.Fd.prototype={
gcKr(){return this.a.aC(0,this.b).gcm()>4}}
B.abU.prototype={}
B.UO.prototype={
T(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bin(new C.cp(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bin.prototype={
aNM(d){return new H.mJ(1,A.o.G(d*29,360),0.6,1).iE()},
Zh(d){var w,v=D.BS.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bw(d.a/s*t),0,t-1)
return v[A.o.G(w,u)]+12*A.o.e3(w,u)},
aQi(d){A.d.bn(this.e,new B.e91(this,d))},
cnR(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gcm()
return d.aC(0,e.ad(0,w.aF(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gcm()},
awZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
A.d.a8(f)
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
k=g.Zh(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.Fd(p,r,k,new H.mJ(1,A.o.G(k*29,360),0.6,1).iE()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.Zh(h)
f.push(new B.Fd(h,h,k,new H.mJ(1,A.o.G(k*29,360),0.6,1).iE()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.Zh(h)
f.push(new B.Fd(h,h,k,new H.mJ(1,A.o.G(k*29,360),0.6,1).iE()))}}},
a_(){this.a1()
this.l6()},
c2X(d,e){var w,v=this.fO$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.lb(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
ln(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.abU(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.mJ(1,v.aj()*360,0.5,1).iE()))}if(u>3)a2.as=0
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
if(a1<0){a2.c2X(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bn(w,new B.e9q(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.W(q.ay?A.nO:O.qV,A.ad,p,p,p,21),p,p,p,new B.e9f(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.ml,p,p,p,new B.e9g(q,d),p,p,p,p,"Share",p)],o),m=C.cm(new B.e9h(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cTN[w]
l.push(new B.dz(v.b,q.x===v.a,new B.e9i(q,v),v.c,A.b7,p))}u=C.a([],o)
for(t=J.aX(D.BS.geh(D.BS));t.C();){s=t.gU(t)
u.push(new B.dz(s,q.y===s,new B.e9j(q,s),p,A.b7,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.awB[w]
t.push(new B.dz(r.b,q.z===r.a,new B.e9k(q,r),p,A.b7,p))}s=q.Q
return B.jE(A.b7,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eK(l,"TOOL",p),new B.eK(u,"SCALE",p),new B.eK(t,"SOUND",p),B.hy(A.b7,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.e9l(q),s),new B.eK(C.a([new B.fg(D.bBV,"Stairs",new B.e9m(q),A.b7,p),new B.fg(Am.MR,"Pinball",new B.e9n(q),A.c,p),new B.fg(A.me,"Random",new B.e9o(q),A.c,p),new B.fg(D.xJ,"Clear",new B.e9p(q),A.cr,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bg0.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.X()
w=C.M()
w.sau(D.bSu.aw(0,new C.aa(0,0,a0,a1)))
a2.aY(new C.aa(0,0,a0,a1),w)
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
q.z=A.je
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
p.z=A.je
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.sau(new C.bR(P.qf,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).aw(0,C.bU(q,9)))
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
q.z=A.r3
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.sau(new C.bR(P.qf,0.5,A.x,d,0,C.a([A.c,p],v),d,d).aw(0,C.bU(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
aq(d){return!0}}
B.aco.prototype={}
B.UT.prototype={
T(){var w=C.a([],x.gB)
return new B.aCF(new C.cp(null,x.A),w,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCF.prototype={
gaWU(){var w=this.w
return new C.u(w.a/2,w.b/2)},
ax9(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
ayl(d){var w=D.BS.h(0,this.y),v=5-d,u=w.length
return w[A.o.G(v,u)]+12*A.o.e3(v,u)},
a_(){this.a1()
this.l6()},
aP7(){var w,v,u,t,s=this.e
A.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.aco(w,A.k.G(t/v+u,1)))}},
ln(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.au))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fO$
if(p.Q){r=p.z
s=p.ayl(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.lb(r,s+12,q,0.55)}}}},
c2Y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaWU()),e=f.gcm()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.ax9(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.G((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=C.a(s.slice(0),C.T(s))
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
m=h.ax9(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.ecW(h,n).$0()
h.c.e8()
return}}h.m(new B.ecX(g,h,t))
if(h.Q)B.lb(h.z,h.ayl(g.a)+12,700,0.5)
C.eP()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.W(r.Q?A.nO:O.qV,A.ad,q,q,q,21),q,q,q,new B.ed3(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.ml,q,q,q,new B.ed4(r,d),q,q,q,q,"Share",q)],p),n=C.cm(new B.ed5(r)),m=r.x
m=B.hy(A.by,""+A.k.V(m),"Tempo",180,40,new B.ed6(r),m)
w=C.a([],p)
for(v=J.aX(D.BS.geh(D.BS));v.C();){u=v.gU(v)
w.push(new B.dz(u,r.y===u,new B.ed7(r,u),q,A.by,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.awB[t]
v.push(new B.dz(s.b,r.z===s.a,new B.ed8(r,s),q,A.by,q))}return B.jE(A.by,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eK(w,"SCALE",q),new B.eK(v,"SOUND",q),new B.eK(C.a([new B.fg(A.dW,"Demo",new B.ed9(r),A.by,q),new B.fg(A.me,"Random",new B.eda(r),A.c,q),new B.fg(D.xJ,"Clear",new B.edb(r),A.cr,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.bjt.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.X()
w=C.M()
w.r=D.VS.gp(0)
a5.aY(new C.aa(0,0,0+a6.a,0+a6.b),w)
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
r.sau(new C.a7(A.b6,A.b0,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).aw(0,new C.aa(o,m,o+2,m+u)))
a5.bA(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mJ(1,A.k.G(s.$1(l)*23,360),0.55,1).iE()
o=v.$1(l)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.d9I[A.o.G(A.o.G(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.ko(new C.eo(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.F(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a5,A.ch,new C.jn(1),a4,a4,a4,a4,A.cd,a4)
i.eP()
o=i.b.c
m=J.fKe(v.$1(l))
h=i.b.a.c
i.a6(a5,new C.u(p+-o/2,n+(m-h.gbb(h)-2)))}w=C.M()
w.sau(D.e8p.aw(0,C.bU(t,16)))
a5.ai(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.L)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mJ(1,A.k.G(s.$1(a0)*23,360),0.55,1).iE()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fKe(v.$1(a0))
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.je
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.sau(new C.bR(P.qf,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).aw(0,C.bU(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
aq(d){return!0}}
B.aKx.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvh.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bt9()}}
B.aKy.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvi.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bta()}}
B.t_.prototype={}
B.b7V.prototype={}
B.UR.prototype={
T(){var w=x.S
return new B.aCD(C.a([],x.aq),C.V(w,w),C.aW(w),D.eHI)}}
B.aCD.prototype={
a_(){this.a1()
B.z3("molecule_maker").bz(new B.ecq(this),x.P)},
ai_(d){var w={}
w.a=0
this.f.bH(0,new B.ecc(w,d))
return w.a},
gaX_(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)t.push(w[u].a)
return B.hUg(t,this.f,D.a1M[this.d])},
c3e(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eT()
w.dI(t*7+3)
t=v.y
v.m(new B.ec6(v,e,t.a,w,t.b))
B.vF("pop",u.length,90,0.35)},
avq(d){return this.m(new B.ec7(this))},
aX0(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c3k(d){this.m(new B.ecb(this,this.aX0(d)))},
ckn(){var w=this.r
if(w==null)return
this.m(new B.eca(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a1M[k.d],h=k.gaX_()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.vF.h(0,w[u].a).a-k.ai_(u)
w=i.c
w=w.gdL(w)
t=w.dt(w,new B.eck(),x.N).aI(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.bc:A.hu
r=x.p
s=C.v(C.a([new C.C(A.fG,B.f6e(w,s,h&&k.d<12?new B.fg(A.j9,"Next",new B.ecl(k),A.bc,j):j),j),C.D(C.cm(new B.ecm(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dz(p+D.a1M[u].b,k.d===u,new B.ecn(k,u),j,A.hu,j))}q=C.a([],r)
for(p=D.vF.gdL(D.vF),p=p.gag(p);p.C();){o=p.gU(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dL:m.b
q.push(new B.dz(n+" \xb7 "+m.a,!1,new B.eco(k,o),j,l,j))}return B.jE(A.hu,A.h6,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eK(w,"GOAL",j),new B.eK(q,"ADD",j),new B.eK(C.a([new B.dz("Remove selected atom",!1,k.gckm(),A.e4,A.cr,j),new B.dz("Clear all",!1,k.gc3f(k),A.jS,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bgI.prototype={
a6(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.G(t*37,10)
r=A.o.G(t*53,10)
$.X()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hu.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bH(0,new B.dm_(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.vF.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bU(j,26)
if(q===t){$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.je
p=h.H()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g=l.b
f=C.aq(g,A.c,0.5)
f.toString
e=C.aq(g,A.w,0.5)
e.toString
h.sau(new C.bR(A.Jg,0.5,A.x,a3,0,C.a([f,g,e],r),I.auQ,a3).aw(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aA:A.c
d=new C.ko(new C.eo(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.F(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a5,A.ch,new C.jn(1),a3,a3,a3,a3,A.cd,a3)
d.eP()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a6(a4,new C.u(n.a-h/2,n.b-j.gbb(j)/2))
n=k===0
a0=n?A.bn:A.aI
j=m.b
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.ko(new C.eo(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.ng),A.a5,A.ch,new C.jn(1),a3,a3,a3,a3,A.cd,a3)
a1.eP()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a6(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbb(j)/2)))}if(n===0){d=C.ii(a3,a3,a3,a3,D.eQb,A.a5,A.ch,a3,A.eq,A.cd)
d.eP()
d.a6(a4,new C.u((w-d.b.c)/2,v/2))}},
aq(d){return!0}}
B.TP.prototype={
T(){var w=x.s
return new B.bhD(C.a([],w),C.a([],w))}}
B.bhD.prototype={
a_(){this.a1()
this.auI()
B.z3("dna_lab").bz(new B.dLH(this),x.P)},
gb1c(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a2O.h(0,w[u])
t.toString
s.push(t)}return A.d.fV(s)},
ga87(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb1c(),w,v))}return u},
auI(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eT()
k.dI(l.e*31+l.d*7+C.Bo(new C.S(Date.now(),0,!1)))
w=new B.dLw(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.my(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a2O.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fV(r))}if(!A.d.b8(t,new B.dLv()))break}l.f=v
A.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b_1()},
b_1(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fSR(s.ga87()[r])
v=J.dH(D.BT.geh(D.BT),new B.dLx(w)).dF(0)
u=new C.eT()
u.dI(r+s.e)
A.d.fq(v,u)
u=C.a([w],x.s)
A.d.v(u,C.dc(v,0,C.dJ(3,"count",x.S),C.T(v).c))
t=new C.eT()
t.dI(s.e*3+r)
A.d.fq(u,t)
s.z=u},
aWZ(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dfE.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a2O.h(0,w.f[v])
u.toString
break A}u=B.fSR(w.ga87()[v])
break A}w.m(new B.dLu(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dLF(),e=new B.dLA(),d=h.d===2?h.gb1c():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mw,g,g,g),A.at],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bZ.j(0.18):A.K
q=new C.aV(10,10)
p=new C.az(t.length===s?A.bZ:A.bF,1,A.r,-1)
o=C.a([],a0)
for(n=h.ga87()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.co(A.aQ,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bP(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,D.bmN,A.en,g,g,g))}v.push(C.c_(A.bD,u,A.bt,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.c_(A.bD,u,A.bt,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a6(34,g,new C.cq(A.A,g,g,C.W(Ai.MY,j<t.length?A.az:A.bF,g,g,g,14),g),g))
A.d.v(v,C.a([new C.C(A.Lm,C.c_(A.bD,u,A.bt,0,0),g)],a0))}v.push(A.ao)
v.push(C.d(w,g,g,g,g,g,g,Q.mw,g,g,g))
v.push(A.at)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.bc.j(0.25):A.dq
q=new C.aV(12,12)
o=j<t.length
p=new C.az(o?A.bc:A.b5,1,A.r,-1)
if(o){o=D.BT.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c_
u.push(C.p(g,new C.x(o,g,new C.F(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bP(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,g,A.eh,g,g,g))}v.push(C.c_(A.bD,u,A.bt,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.c_(A.bD,u,A.bt,0,0))}v.push(A.ay)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.f6e(u,t>=(h.d===2?3:9)?A.bc:A.bZ,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.f6e(u,A.bZ,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,L.SU,g,g,g))
v=C.cd(C.v(v,A.F,g,A.e,A.j,0,A.p),A.q,g,A.y,g,A.bB,g,g,A.ai)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dz(D.cZg[j],h.d===j,new B.dLB(h,j),g,A.bZ,g))
u=C.a([new B.eK(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fg(A.jS,"New strand",new B.dLC(h),A.bc,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.L)(t),++l){i=t[l]
q=D.BT.h(0,i)
q.toString
a0.push(new B.fg(D.ZL,q,new B.dLD(h,i),A.bZ,g))}u.push(C.c_(A.bD,a0,A.bt,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.atK:D.cJ6
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aV(14,14)
a0.push(C.aE(g,C.p(A.A,new C.x(k,g,D.eQq,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bp(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dLE(h,k),g,g,g,g,g,g,!1,A.a8))}u.push(C.A(a0,A.m,g,A.pN,A.j,0,g,g))}return B.jE(A.bZ,A.h6,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.U4.prototype={
T(){return new B.aBK(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aBK.prototype={
a_(){var w,v=this
v.a1()
w=v.qe(v.gc3g())
w.iZ(0)
v.d!==$&&C.aO()
v.d=w
B.z3("ecosystem").bz(new B.dOw(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bsz()},
gaL6(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c3h(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cA(v,0)}if(m.gaL6()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.G(A.k.bw(w),5)===0)B.vC("ecosystem",C.E(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dOj())},
a9j(d){this.m(new B.dOi(this,d))
B.vF("pop",3,120,0.4)},
c3j(){return this.m(new B.dOk(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.C(D.Xs,B.f6e(r,t.gaL6()?A.bc:A.cr,s),s),C.D(new C.C(D.bnk,C.bw(C.m(18),C.b3(s,s,s,new B.bc3(t.f,t.r,t.w,s),A.f0),A.aq),s),1),new C.C(A.eO,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.eXl,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hy(A.bc,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dOo(t),w)
v=t.y
v=B.hy(A.bV,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dOp(t),v)
u=t.z
return B.jE(A.bc,A.h6,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hy(A.cv,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dOq(t),u),new B.eK(C.a([new B.dz("Drought",!1,new B.dOr(t),A.y6,A.aM,s),new B.dz("Disease",!1,new B.dOs(t),D.bBN,A.by,s),new B.dz("+ Foxes",!1,new B.dOt(t),s,A.cv,s),new B.dz("+ Rabbits",!1,new B.dOu(t),s,A.bV,s),new B.dz("Reset",!1,t.gc3i(),A.jS,A.aW,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bc3.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.X()
w=C.M()
w.sau(D.bQy.aw(0,new C.aa(0,0,d,a0)))
a1.aY(new C.aa(0,0,d,a0),w)
w=h.b
a0=C.aq(A.uE,A.bn,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.M()
t.r=a0.gp(0)
a1.aY(new C.aa(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eT()
r.dI(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.he.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d1p(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.aa(10,a0,e,u)
t=C.M()
t.r=D.baG.gp(0)
a1.aY(new C.aa(0,f,d,f+g),t)
i=C.M()
i.r=A.dq.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d1r(h,j,a1)
g.$3(0,100,A.bn)
g.$3(1,120,A.bV)
g.$3(2,24,A.cv)
g=new B.d1q(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bn,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bV,102)
g.$3("Foxes "+A.k.V(w[2]),A.cv,200)},
aq(d){return!0}}
B.aJY.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aQm.prototype={
guG(){return A.d.cI(this.a,0,new B.bEf())}}
B.Tj.prototype={
T(){var w=x.S
return new B.bhi(B.hRl(),C.c2(5,0,!1,w),C.aW(w),A.bx,null,null)}}
B.bhi.prototype={
gvC(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cI(t,0,new B.dzv())},
a_(){var w,v=this
v.a1()
w=v.qe(new B.dzI(v))
w.iZ(0)
v.x!==$&&C.aO()
v.x=w
B.z3("balance_lab").bz(new B.dzJ(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bsc()},
cuE(d){var w,v=this
v.m(new B.dzw(v,d))
B.vF("click",v.f[d],60,0.4)
if(v.gvC()===v.d[v.e].guG()&&v.r.K(0,v.e)){B.vF("zap",10,260,0.5)
w=v.r
w=C.B(w,C.a3(w).k("cl.E"))
B.vC("balance_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.K(k,new B.dzB(),C.T(k).k("K<1,n>")).aI(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aI(k," + ")
if(o.gvC()===m[o.e].guG())s="\u2696\ufe0f Balanced! "+m[o.e].guG()+" = "+o.gvC()+". The torques are equal, so the seesaw stays level."
else s=o.gvC()>m[o.e].guG()?"The right side is too strong ("+o.gvC()+" vs "+m[o.e].guG()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guG()+" vs "+o.gvC()+"). Add weight to the right, or place it further from the middle."
k=o.gvC()===m[o.e].guG()?A.bc:A.aM
k=B.byd(s,k,o.gvC()===m[o.e].guG()&&o.e<m.length-1?new B.fg(A.j9,"Next",new B.dzC(o),A.bc,n):n)
w=C.D(C.cm(new B.dzD(o,l)),1)
u=j.length===0?"0":j
u=C.D(C.d("Left torque\n"+u+" = "+m[o.e].guG(),n,n,n,n,n,n,D.aOY,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.C(D.Xs,k,n),w,new C.C(D.afR,C.A(C.a([u,C.D(C.d("Right torque\n"+r+" = "+o.gvC(),n,n,n,n,n,n,D.aOY,A.dK,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dz(w+p,o.e===v,new B.dzE(o,v),n,A.aM,n))}return B.jE(A.aM,A.h6,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eK(u,"LEVEL",n),new B.eK(C.a([new B.dz("Clear right side",!1,new B.dzF(o),A.jS,A.cr,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b86.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aQ($.X().r,A.ap,null,null,C.a([],x.v))
i.E(new C.b5(h,f))
w=f+70
i.E(new C.ap(h-30,w))
i.E(new C.ap(h+30,w))
i.E(new C.bE())
v=C.M()
v.r=A.ak.gp(0)
d.aO(i,v)
v=h-120
i=C.M()
i.r=A.aK.gp(0)
d.aY(new C.aa(v,w,v+240,w+8),i)
i=d.a
J.bA(i.save())
i.translate(h,f)
d.j9(0,j.b)
u=g*5.8
t=C.bz(new C.aa(-u,-9,u,9),A.h9)
w=C.M()
w.sau(D.bTb.aw(0,new C.aa(t.a,t.b,t.c,t.d)))
d.aD(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.X()
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hF.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fj6(d,""+Math.abs(s),new C.u(w,22),A.c_,10)}q=new B.cBs(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aW)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bZ)
if(w[s]===0){l=C.bz(C.cu(new C.u(m,-22),22,v),A.h9)
$.X()
k=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b5.gp(0)
r=k.H()
i.drawRRect(C.ep(l),r)
r.delete()
B.fj6(d,"+",new C.u(m,-22),A.c_,14)}}i.restore()
$.X()
i=C.M()
i.r=(j.e?A.bc:A.aL).gp(0)
d.ai(new C.u(h,f),7,i)},
aq(d){return!0},
gj8(){return this.e}}
B.Ui.prototype={
T(){return new B.bhP(C.a([16,32,12,24],x.t),C.aW(x.S),A.bx,null,null)}}
B.bhP.prototype={
ga_K(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gacD(){var w=this.ga_K(),v=this.r,u=D.awk[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.da(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qe(new B.dSz(v))
w.iZ(0)
v.x!==$&&C.aO()
v.x=w
B.z3("gear_lab").bz(new B.dSA(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bsH()},
c3l(d,e){var w,v=this
v.m(new B.dSp(v,d,e))
if(v.gacD()&&v.w.K(0,v.r)){B.vF("zap",8,240,0.45)
w=v.w
w=C.B(w,C.a3(w).k("cl.E"))
B.vC("gear_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga_K(),n=r.ga_K(),m=D.awk[r.r].a
m=r.gacD()?"\u2705 Done! Ratio "+A.k.aa(r.ga_K(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gacD()?A.bc:A.cv
v=r.d
u=x.p
n=C.v(C.a([new C.C(D.Xs,B.byd(m,w,r.gacD()&&r.r<7?new B.fg(A.j9,"Next",new B.dSt(r),A.bc,q):q),q),C.D(C.b3(q,q,q,new B.bdw(v,r.f,q),A.f0),1),new C.C(D.afR,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.ga_K(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,S.a6v,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dz(m+s,r.r===t,new B.dSu(r,t),q,A.cv,q))}p=r.e
u=C.a([new B.eK(o,"GOAL",q),B.hy(A.aW,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dSv(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.auh("Gear "+s+" teeth",p,new B.dSw(r,t),8,40,D.d7m[t],""+p,q))}return B.jE(A.cv,A.h6,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.bdw.prototype={
bNg(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.X(),j=C.a([],x.v),i=new C.aQ(k.r,A.ap,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.e9C,D.eej,D.etA,D.ela],s=v===0,r=0;r<4;++r){q=t[r]
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
i.e=null}}}i.E(new C.bE())
return i},
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.n)
for(w=this.b,v=0;v<4;++v)g.push(w[v]*2.2)
u=g[0]
t=u+g[1]+6
s=g[2]
r=g[3]
q=t+s+r+6
p=-u-6
o=q+r+6
n=A.d.fE(g,A.qj)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.bA(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bW(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.d9a(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.da,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.d_)
h.$5(new C.u(0,0),g[0],w[0],j,A.mI)
h.$5(new C.u(t,0),g[1],w[1],i,A.fC)
s.restore()
s=new B.d9b(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aW)
s.$3("2+3 \xb7 shared axle",t,A.cv)
s.$3("4 \xb7 output",q,A.bc)},
aq(d){return!0}}
B.Ts.prototype={
T(){var w=$.aw()
return new B.bhv(new C.ar(new C.bb("Meet me at noon",A.b2,A.aN),w),new C.ar(new C.bb("LEMON",A.b2,A.aN),w),C.aW(x.S))}}
B.bhv.prototype={
a_(){this.a1()
this.aVL()
B.z3("cipher_lab").bz(new B.dDH(this),x.P)},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
aVL(){this.y=1+A.cI.aB(25)
this.z=0},
ga8B(){var w=this
return B.a0L(B.a0L(D.Gw[w.x],w.y),-w.z)===D.Gw[w.x]},
gawo(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a0L(u,v.w)
break A}if(1===t){w=new C.K(C.a(B.a0L(u,0).split(""),x.s),new B.dDp(),x.dv).fV(0)
break A}w=B.i2X(u,v.e.a.a)
break A}return w},
aRb(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d2(d.toUpperCase()),v=x.e8,w=new C.bV(w,w.gM(0),v.k("bV<bX.E>")),v=v.k("bX.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fE(q,A.zK))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aV(2,2)
v.push(new C.bF(1,A.bj,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aW,r,r,new C.bp(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.LF,r,r,r,r),new C.x(C.jD(65+s),r,D.eZ8,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.lK,A.j,0,A.p),r))}return new C.a6(r,70,C.A(v,A.dE,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aL(o,A.T,!1,o,!0,A.q,o,C.aM(),p.d,o,o,o,o,o,2,C.br(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lk,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dDy(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.eTt,!0,A.a5,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aL(o,A.T,!1,o,!0,A.q,o,C.aM(),p.e,o,o,o,o,o,2,C.br(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lk,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dDz(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iD,!0,A.a5,o,A.am,o,o,o,o)],v))}w.push(A.ay)
w.push(D.fo6)
w.push(A.at)
v=A.aW.j(0.12)
u=C.m(14)
t=C.I(A.aW.j(0.4),A.r,1)
w.push(C.p(o,C.zm(p.gawo().length===0?"\u2026":p.gawo(),D.eY8,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bB,o,o,o))
w.push(A.ac)
w.push(B.byd(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aW,o))
w.push(A.ac)
w.push(D.f59)
w.push(A.at)
w.push(p.aRb(p.gawo()))
w.push(A.at)
w.push(D.f7v)
s=C.cB(w,o,A.bB,o,o,A.ai,!1)}else{w=B.byd("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a0L(D.Gw[p.x],p.y),o,o,o,o,o,o,D.eYH,o,o,o)
u=(p.ga8B()?A.bc:A.aW).j(0.14)
t=C.m(14)
r=C.I((p.ga8B()?A.bc:A.aW).j(0.5),A.r,1)
t=C.a([w,A.ac,D.fhZ,v,A.S,D.fcs,C.p(o,C.d(B.a0L(B.a0L(D.Gw[p.x],p.y),-p.z),o,o,o,o,o,o,D.f_9,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bB,o,o,o),A.ac,p.aRb(B.a0L(D.Gw[p.x],p.y)),A.P],x.p)
if(p.ga8B())t.push(B.byd("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.bc,new B.fg(A.jS,"Next",new B.dDA(p),A.bc,o)))
s=C.cB(t,o,A.bB,o,o,A.ai,!1)}w=p.f
v=x.p
w=C.a([new B.eK(C.a([new B.dz("Make a secret",w===0,new B.dDB(p),A.jb,A.aW,o),new B.dz("Crack a code",w===1,new B.dDC(p),A.pD,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dz(n[q],p.r===q,new B.dDD(p,q),o,A.aW,o))
v=C.a([new B.eK(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hy(A.aW,""+u,"Shift",25,1,new B.dDE(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hy(A.aM,""+v,"Shift back",25,0,new B.dDF(p),v))}return B.jE(A.aW,A.h6,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aJC.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aK5.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.e7.prototype={}
B.tc.prototype={
aoC(d,e,f,g){var w=this
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
B.a9e.prototype={}
B.aai.prototype={}
B.a3q.prototype={
baR(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hg()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a9e(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c_u(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bn(w,new B.bK2())},
ais(d,e,f,g){var w="p"+this.c++,v=new B.tc(w,e,f,g)
v.aoC(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bn(this.b,new B.bKd(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cCq(d,e,f,g,h){return A.d.b8(this.b,new B.bK8(e,f,g,h))},
ajd(d,e,f,g){var w
if(d===f||this.cCq(0,d,e,f,g))return null
w=new B.aai(d,e,f,g)
this.b.push(w)
return w},
ayT(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zm(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
alO(d){return this.L3(d)&&!d.x&&d.cx>this.zm(d)},
b3B(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
L3(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c3m(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yC.h(0,v)
if(w!=null)return w.a
return 100},
uO(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c_u(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.T(v).k("a2<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a2(v,new B.bKe(a2),t).cI(0,0,new B.bKf(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.V(x.N,u)
n=new B.bKh(o)
m=C.a([],x.t)
l=new B.bKg(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.V(u,u)
f=new B.bKj(g,l,n)
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
a2.b3x(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zm(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b3x(e,d,w,!0)
a2.bKj(a4)},
b3x(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.V(x.N,b3),b5=new B.bK4(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bK3(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bK6(C.V(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.L)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=C.c2(b7,0,!1,b3)
v=x.W
k=C.V(v,b3)
j=C.V(v,b3)
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
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.L)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b3B(t)*(1+t.CW))
a4=b2.ayT(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c3m(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bNf(e,a0,b8)
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
bNf(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bKj(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.ayT(o)/a1.b3B(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zm(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bCz(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.baR(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tp(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tp(o,"The "+$.q2().h(0,n).b+" got "+A.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tp(o,"More than 1.5 amps went through the "+$.q2().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tp(o,"The regulator had to turn "+A.k.aa(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tp(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yC.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.q2().h(0,n).b
l=f.b
l=l===A.k.jO(l)?""+A.k.V(l):C.t(l)
g=f.c
g=g===A.k.jO(g)?""+A.k.V(g):C.t(g)
a1.tp(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eFG.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tp(o,"The bulb got "+A.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tp(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tp(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tp(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tp(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tp(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bCz(d){return A.d.b8(this.a,new B.bK1(d))},
tp(d,e){var w
d.x=!0
d.ay=e
this.baR(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bft(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aEU(d){var w=d.b
return D.aLt.t(0,w)||D.yC.ah(0,w)||w==="buck"||w==="regulator"},
bce(d){var w,v=!0
if(!this.L3(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yC.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
TT(d,e){var w=this.b
return new C.a2(w,new B.bKl(d,e),C.T(w).k("a2<1>")).gM(0)},
C6(d){var w,v
if(d.x)return!1
w=d.b
if(D.yC.ah(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
ban(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.q2().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aEU(d)||i.C6(d))return null
w=i.TT(d,0)
v=i.TT(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.T(u).k("a2<1>")
s=C.B(new C.a2(u,i.gcKJ(),t),t.k("H.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jO(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yC.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aEZ("battery"),o=J.aX(t.a),t=new C.fx(o,t.b);t.C();){n=o.gU(o)
if(n.e===1.5&&n.as<=0.02&&i.TT(n,0)+i.TT(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aEZ("switch"),o=J.aX(t.a),t=new C.fx(o,t.b);t.C();)if(!o.gU(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.q2().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zm(k))return"The "+$.q2().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.zm(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b8(u,new B.bK9(i,d))
h=q.b
h=h===A.k.jO(h)?""+A.k.V(h):C.t(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aEZ(d){var w=this.a
return new C.a2(w,new B.bKc(d),C.T(w).k("a2<1>"))},
aEy(d){return this.aEZ(d).b8(0,new B.bKb(0.35))},
pr(d,e){return A.d.b8(this.a,new B.bKa(e))}}
B.ahr.prototype={
a6(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.X()
w=C.M()
w.r=F.W2.gp(0)
c0.aY(new C.aa(0,0,b8,b9),w)
v=C.M()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lL.ah(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lL.ah(0,h.b)?(h.ch-1)*38:0
b4.czv(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hp7(q.a,q.b,c1)
q=b4.e
q.toString
$.X()
p=C.M()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bO
c0.bA(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.X()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.ac2.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.yD
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bA(w.save())
w.translate(j,i)
h=A.k.D(A.mB.av(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.ccZ(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zm(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.X().r
a3=C.a([],k)
a4=new C.aQ(a2,A.ap,b5,b5,a3)
a5=f-13
a3.push(new C.b5(g,a5))
a6=g+13
a7=f+10
a3.push(new C.ap(a6,a7))
a8=g-13
a3.push(new C.ap(a8,a7))
a3.push(new C.bE())
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.aB.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbI().a.snapshot()
w.drawPath((a4.e=new C.cF(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aQ(a2,A.ap,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bE())
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbI().a.snapshot()
w.drawPath((a2.e=new C.cF(e)).a,s)
s.delete()
a9=new C.ko(new C.eo("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new C.jn(1),b5,b5,b5,b5,A.cd,b5)
a9.eP()
a9.a6(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aLt.t(0,h)||D.yC.ah(0,h)||h==="buck"||h==="regulator")&&!r.C6(a0)&&r.TT(a0,0)+r.TT(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.X()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aI.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.ko(new C.eo("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new C.jn(1),b5,b5,b5,b5,A.cd,b5)
a9.eP()
a9.a6(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.lL.ah(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.X()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.W2.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bce(a0)?A.cr:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bce(a0)){a9=new C.ko(new C.eo("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.F(!0,A.cr,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new C.jn(1),b5,b5,b5,b5,A.cd,b5)
a9.eP()
a9.a6(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.Wy,F.WD,b2)
j.toString
i=b1.f
$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bO
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.Ql
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b8(q,new B.bFr())){b3=A.d.cI(q,0,new B.bFs())
$.X()
b7=C.M()
b7.r=D.b68.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aY(new C.aa(0,0,b8,b9),b7)
a9=C.ii(b5,b5,b5,b5,D.eQ4,A.a5,A.ch,b5,A.eq,A.cd)
a9.Bv(b6-24)
a9.a6(c0,new C.u(12,10))}},
q0(d,e,f,g,h){var w=null,v=C.ii(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.ch,w,A.eq,A.cd)
v.eP()
v.a6(d,f)},
czv(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aQ($.X().r,A.ap,null,null,C.a([],x.v))
d.E(new C.b5(a1.a,a1.b))
w=B.hhD(a1,a2,a3)
d.E(new C.cS(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.ac2,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aW,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bo
u=C.M()
u.b=A.ae
u.c=a4?7:5
u.d=A.bO
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aO(d,u)
u=C.M()
u.b=A.ae
u.c=2.4
u.d=A.bO
u.r=(a4?A.c:o).gp(0)
a0.aO(d,u)
if(q){n=new C.RJ(new C.vh(C.wL(d),!1,C.a([],x.f5))).gL(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.ji()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.ji()
h=t[u].b
h===$&&C.c()
h=A.k.G(j*22+i*m*l,h.a.length())
v.ji()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.ji()
g=t[u].b
g===$&&C.c()
f=A.k.G(h+i,g.a.length())
v.ji()
i=t[u].M8(f).a
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Oj(d,e,f,g){var w,v,u,t
$.X()
w=C.M()
v=g?A.b0:A.a3
u=g?A.b6:A.a7
t=C.aq(e,A.w,0.3)
t.toString
w.sau(new C.a7(v,u,A.x,C.a([e,f,e,t],x.O),A.Gy,null).aw(0,d))
return w},
auy(d,e,f){return this.Oj(d,e,f,!0)},
c_5(d,e){return this.Oj(d,A.bo,A.iI,e)},
ag3(d,e){var w,v,u
$.X()
w=C.M()
w.sau(D.aK6.aw(0,C.bU(e,4.2)))
d.ai(e,4.2,w)
w=e.ad(0,D.e_1)
v=e.ad(0,D.e_a)
u=C.M()
u.r=A.es.gp(0)
u.c=1.2
d.bA(w,v,u)},
ccZ(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.X(),c0=C.M()
c0.sau(D.bQe.aw(0,D.eCN))
c0.c=3.4
c0.d=A.bO
w=C.M()
w.r=A.w.j(0.45).gp(0)
w.z=G.mo
c1.i2(D.eCF,w)
if(c3){w=C.bz(D.eCM,A.kn)
v=C.M()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=B.fYR(c2)
c1.bA(new C.u(-u,0),D.e0j,c0)
c1.bA(D.dZa,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lL.ah(0,w)&&c2.ch!==1
if(s){J.bA(c1.a.save())
c1.bW(0,c2.ch)}switch(w){case"battery":b3.bzv(c1,c2)
break
case"solar":r=C.bz(D.eCI,A.ig)
c1.aD(r,b3.Oj(new C.aa(r.a,r.b,r.c,r.d),A.dL,A.bV,!1))
b9=C.M()
w=C.aq(D.b9e,A.d7,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bgR,A.m5,0.3+0.4*c2.f)
v.toString
b9.sau(new C.a7(A.ax,A.aD,A.x,C.a([w,v],x.O),b4,b4).aw(0,D.a5c))
c1.aY(D.a5c,b9)
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
$.X()
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cn.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new C.aQ($.X().r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-34,18))
b9.E(new C.ap(-6+40*c2.f,-18))
b9.E(new C.ap(4+40*c2.f,-18))
b9.E(new C.ap(-24,18))
b9.E(new C.bE())
w=C.M()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aO(b9,w)
w=c2.f
b9=C.M()
b9.r=A.dN.j(0.9).gp(0)
c1.ai(D.dZg,4+4*w,b9)
break
case"crank":n=C.bz(D.eCt,A.ha)
c1.aD(n,b3.auy(new C.aa(n.a,n.b,n.c,n.d),A.bw,A.bI))
b9=C.M()
b9.sau(D.aK7.aw(0,C.bU(A.J,12)))
c1.ai(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.M()
b9.r=A.cn.gp(0)
b9.c=5
b9.d=A.bO
c1.bA(A.J,m,b9)
b9=C.M()
b9.sau(D.e8I.aw(0,C.bU(m,7)))
c1.ai(m,7,b9)
b3.ag3(c1,D.e0c)
b3.ag3(c1,D.dZ3)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aQ(b9,A.ap,b4,b4,C.a([],w))
v.E(new C.b5(-3,24))
v.E(new C.ap(3,24))
v.E(new C.ap(1.5,0))
v.E(new C.ap(-1.5,0))
v.E(new C.bE())
l=C.M()
l.r=A.bV.gp(0)
c1.aO(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bA(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aQ(b9,A.ap,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cS(6,-14,2,-30))
l.push(new C.cS(-2,-14,0,-2))
l.push(new C.bE())
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbI().a.snapshot()
v.drawPath((j.e=new C.cF(l)).a,o)
o.delete()
v.restore()}b9=C.M()
b9.sau(D.e8o.aw(0,C.bU(A.J,4.5)))
c1.ai(A.J,4.5,b9)
break
case"switch":n=C.bz(D.eCA,A.rf)
b9=C.M()
b9.sau(D.amX.aw(0,new C.aa(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.ag3(c1,D.Rd)
b3.ag3(c1,D.aEX)
i=c2.w?D.aEX:D.dYO
b9=C.M()
b9.r=A.aA.gp(0)
b9.c=6
b9.d=A.bO
c1.bA(D.Rd,i,b9)
b9=C.M()
b9.r=(c2.w?A.bc:A.bV).gp(0)
b9.c=4
b9.d=A.bO
c1.bA(D.Rd,i,b9)
b9=C.lc(D.Rd,i,0.85)
b9.toString
w=C.M()
w.r=A.aB.gp(0)
c1.ai(b9,5,w)
break
case"fuse":h=C.bz(D.aKC,D.aKc)
b9=C.M()
b9.r=A.fh.j(0.25).gp(0)
c1.aD(h,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.az.gp(0)
c1.aD(h,b9)
if(!t){b9=C.M()
b9.c=1.6
b9.r=C.aq(A.bV,A.cv,c2.fx).gp(0)
c1.bA(D.aFd,D.aEW,b9)}else{b9=C.M()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bA(D.aFd,D.e0A,b9)
b9=C.M()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bA(D.dZH,D.aEW,b9)
b9=C.M()
b9.r=A.dz.gp(0)
c1.ai(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cu(new C.u(F.oJ[g]*22,0),20,9)
w=C.bz(f,A.hz)
o=b3.Oj(f,A.da,A.od,!0).H()
b9.drawRRect(C.ep(w),o)
o.delete()}break
case"pot":b9=C.M()
b9.sau(D.e8A.aw(0,C.bU(A.J,21)))
c1.ai(A.J,21,b9)
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
b9.sau(D.e8m.aw(0,C.bU(A.J,13)))
c1.ai(A.J,13,b9)
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
case"resistor":a1=C.bz(D.aKC,D.aKc)
b9=C.M()
b9.sau(D.bTs.aw(0,new C.aa(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=x.O
a2=C.E([47,C.a([C.b0(b5),C.b0(b6),A.w],b9),100,C.a([C.b0(b7),A.w,C.b0(b7)],b9),220,C.a([C.b0(b8),C.b0(b8),C.b0(b7)],b9),470,C.a([C.b0(b5),C.b0(b6),C.b0(b7)],b9),1000,C.a([C.b0(b7),A.w,C.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(C.c4(new C.aa(w,-9,w+4.5,9)),o)
o.delete()}b9=C.M()
b9.r=A.aM.gp(0)
c1.aY(D.eCW,b9)
b9=c2.r
b3.q0(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e_S,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.M()
v.r=A.dN.j(0.55*w).gp(0)
v.z=A.yD
c1.ai(D.vN,34,v)}n=C.cu(D.dYj,12,18)
c1.aD(C.bz(n,A.hz),b3.Oj(n,A.bo,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dn.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.M()
if(t)v=A.Vj
else{v=C.aq(A.e2,A.hT,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.E9
else{l=C.aq(A.dL,A.dN,c2.fx)
l.toString}w.sau(new C.bR(A.rz,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aw(0,C.bU(A.rc,17)))
c1.ai(A.rc,17,w)
w=C.M()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ai(A.rc,17,w)
b9=b9.r
w=x.v
l=new C.aQ(b9,A.ap,b4,b4,C.a([],w))
l.E(new C.b5(-9,-12))
l.E(new C.cS(-12,-4,-9,0))
v=C.M()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aO(l,v)
v=C.M()
v.r=A.cU.gp(0)
v.c=1.4
c1.bA(D.e0w,D.e0y,v)
v=C.M()
v.r=A.cU.gp(0)
v.c=1.4
c1.bA(D.dZA,D.dZD,v)
w=C.a([],w)
a4=new C.aQ(b9,A.ap,b4,b4,w)
a4.E(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bx(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.X()
b9=C.M()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aX
else{w=C.aq(A.dL,D.b9Y,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aO(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.M()
v.r=A.aB.j(0.6*w).gp(0)
v.z=D.dhY
c1.ai(A.rc,30,v)}w=C.M()
w.r=A.e2.gp(0)
w.c=2.4
c1.bA(D.e0C,D.e0B,w)
w=C.M()
w.r=A.e2.gp(0)
w.c=2.4
c1.bA(D.dZJ,D.dZI,w)
b9=b9.r
w=x.v
a6=new C.aQ(b9,A.ap,b4,b4,C.a([],w))
a6.E(new C.b5(-12,8))
a6.E(new C.ap(-12,-6))
a6.E(new C.cS(0,-26,12,-6))
a6.E(new C.ap(12,8))
a6.E(new C.bE())
v=C.M()
if(t)l=A.t9
else{l=C.aq(A.ew,D.acH,c2.fx)
l.toString}if(t)j=A.kc
else{j=C.aq(A.k8,A.aB,c2.fx)
j.toString}v.sau(new C.a7(A.ax,A.aD,A.x,C.a([l,j],x.O),b4,b4).aw(0,D.eC_))
c1.aO(a6,v)
v=C.M()
v.b=A.ae
v.c=1.2
v.r=A.j4.gp(0)
c1.aO(a6,v)
v=C.M()
v.r=A.eM.gp(0)
c1.aY(D.eC5,v)
w=new C.aQ(b9,A.ap,b4,b4,C.a([],w))
w.E(new C.b5(-7,-4))
w.E(new C.cS(-6,-12,0,-15))
b9=C.M()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aO(w,b9)
break
case"motor":a7=new C.aa(-28,-14,20,14)
c1.aD(C.bz(a7,A.h9),b3.auy(a7,A.ak,A.aL))
b9=C.M()
b9.r=A.cC.gp(0)
c1.aY(D.eBN,b9)
b9=C.M()
b9.r=A.cn.gp(0)
c1.aY(D.eBO,b9)
b9=c1.a
J.bA(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bA(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cu(D.dYB,15,7)
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cv.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c4(w),o)
o.delete()
b9.restore()}w=C.M()
w.r=A.aA.gp(0)
c1.ai(A.J,3,w)
b9.restore()
b3.q0(c1,"M",D.e0b,A.aA,14)
break
case"buzzer":a8=C.cu(A.J,42,42)
b9=C.M()
b9.sau(D.e8E.aw(0,a8))
c1.i2(a8,b9)
b9=C.M()
b9.r=A.w.gp(0)
c1.ai(A.J,6,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.b5.gp(0)
c1.ai(A.J,6,b9)
b3.q0(c1,"+",D.e04,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.G(w.d*14,5):0
l=C.bU(A.J,24+k*5+l)
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bZ.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c4(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bz(D.eCw,A.h9)
w=C.M()
w.sau(D.bRb.aw(0,new C.aa(n.a,n.b,n.c,n.d)))
c1.aD(n,w)
w=C.a([],x.v)
a9=new C.aQ(b9.r,A.ap,b4,b4,w)
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
if(b9>0.1){$.X()
w=C.M()
w.b=A.ae
w.c=10
w.r=D.baz.j(0.5*b9).gp(0)
w.z=A.je
c1.aO(a9,w)}$.X()
b9=C.M()
b9.b=A.ae
b9.c=3.2
b9.d=A.bO
b9.r=C.aq(A.lv,A2.Wn,c2.fx).gp(0)
c1.aO(a9,b9)
break
case"capacitor":a7=new C.aa(-16,-22,16,18)
b9=C.bz(a7,A.h9)
w=C.M()
w.sau(D.bQ6.aw(0,a7))
c1.aD(b9,w)
w=C.M()
w.r=A.bV.gp(0)
c1.aY(D.eCb,w)
for(p=0;p<4;++p){b0=new C.ko(new C.eo("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.F(!0,A.aA,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.ch,new C.jn(1),b4,b4,b4,b4,A.cd,b4)
b0.eP()
b0.a6(c1,new C.u(-14,-18+p*9))}b1=new C.aa(-16,-24,16,-17)
c1.aD(C.bz(b1,A.hz),b3.c_5(b1,!1))
b9=38*c2.fx
w=18-b9
$.X()
v=C.M()
v.r=A.bc.j(0.5).gp(0)
c1.aY(new C.aa(-3,w,11,w+b9),v)
b3.q0(c1,"1F",D.vN,A.c,11)
break
case"radio":a1=C.bz(D.a5c,A.ha)
b9=C.M()
b9.sau(D.bTH.aw(0,new C.aa(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.od.j(0.6).gp(0)
c1.aD(a1,b9)
b9=C.bz(D.eCx,A.ig)
w=C.M()
w.r=A.dD.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lv.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.M()
w.r=(c2.fx>0?A.h_:A.nu).gp(0)
c1.aY(D.eBQ,w)
if(c2.fx>0){w=8+A.k.G(b3.b.d*7,18)
v=C.M()
v.r=A.bL.gp(0)
v.c=1.6
c1.bA(new C.u(w,-13),new C.u(w,-3),v)}w=C.M()
w.sau(D.aK7.aw(0,C.bU(D.a4f,6)))
c1.ai(D.a4f,6,w)
w=C.M()
w.r=A.od.gp(0)
c1.ai(D.dZ9,4,w)
w=C.M()
w.r=A.e2.gp(0)
w.c=1.8
c1.bA(D.dZ7,D.aF0,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aF0,4+k*5+A.k.G(w.d*8,5))
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nz.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c4(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bz(D.eCH,A.h9)
v=C.M()
v.r=M.mN.gp(0)
c1.aD(w,v)
b2=C.bz(D.eCE,A.hz)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bA(b9.save())
b9.clipRRect(C.ep(b2),$.pi(),!0)
b9.translate(-33,-21)
E.fV8(c1,D.eI8,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.M()
b9.r=A.bc.gp(0)
c1.ai(D.dZl,1.6,b9)}else{w=C.M()
w.r=D.uO.gp(0)
c1.aD(b2,w)
b9=new C.aQ(b9.r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-33,-21))
b9.E(new C.ap(-10,-21))
b9.E(new C.ap(-33,0))
b9.E(new C.bE())
w=C.M()
w.r=A.c.j(0.05).gp(0)
c1.aO(b9,w)}b9=C.M()
b9.r=A.bw.gp(0)
c1.aY(D.eC4,b9)
break}B.i0D(c1,c2,b3.b.d,b3.gc3n())
if(t)b3.q0(c1,"\u2716",D.e0F,A.aB,14)
if(s)c1.a.restore()},
bzv(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.aa(-28,-13,28,13)
d.aD(C.bz(w,A.rf),m.auy(w,A.dL,A.iL))
v=new C.aa(-22,-13,22,13)
$.X()
u=C.M()
u.sau(D.amQ.aw(0,v))
d.aY(v,u)
u=C.M()
u.r=A.dT.gp(0)
d.aY(D.eCk,u)
t=new C.aa(28,-5,34,5)
d.aD(C.bz(t,A.h8),m.Oj(t,A.dL,A.iI,!0))
m.q0(d,"+",D.dYT,A.aM,11)
m.q0(d,"\u2212",D.e0d,A.ad,11)
m.q0(d,C.t(l===A.k.jO(l)?A.k.V(l):l)+"V",D.e_Y,A.aM,13)
if(l===1.5){u=C.M()
u.r=A.bF.gp(0)
d.aY(D.eCj,u)
u=e.as
s=C.M()
s.r=C.aq(A.aB,A.bc,u).gp(0)
d.aY(new C.aa(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.q0(d,"FLAT",D.e_R,A.cr,9)}if(l>2){u=C.M()
u.r=A.b5.gp(0)
u.c=1
d.bA(D.dYp,D.aEG,u)
m.q0(d,l>3?"3 cells":"2 cells",D.e_X,A.az,8)}}else if(l<=9){r=new C.aa(-22,-17,22,17)
u=C.bz(r,A.rf)
$.X()
s=C.M()
s.sau(D.bTg.aw(0,r))
d.aD(u,s)
s=C.M()
s.r=A.d_.gp(0)
d.aY(D.eCl,s)
for(u=d.a,q=0;q<2;++q){p=D.d5x[q]
s=p<0?5:3.6
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(D.aK6.aw(0,C.bU(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.q0(d,"9V",D.e_T,A.c,16)}else{r=new C.aa(-34,-16,34,16)
u=C.bz(r,A.ig)
$.X()
s=C.M()
s.sau(D.amQ.aw(0,r))
d.aD(u,s)
s=C.M()
s.r=A.cp.gp(0)
d.aY(D.eCG,s)
for(u=d.a,q=0;q<2;++q){s=C.bz(C.cu(new C.u(F.a27[q],-20),8,10),A.h8)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cn.gp(0)
n=o.H()
u.drawRRect(C.ep(s),n)
n.delete()}m.q0(d,"+",D.dZ_,A.aB,10)
m.q0(d,"12V",D.e_U,A.aA,15)}},
aq(d){return!0}}
B.mr.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=C.V(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.tc(o,r,q,p)
n.aoC(o,r,q,p)
k.push(n)
J.im(s[4],new B.cis(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ajd(m,u[1],l,u[3])}}}
B.ahp.prototype={
T(){var w=x.N
return new B.ahq(A.J,A.au,C.V(w,x.gl),C.aW(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.ahq.prototype={
acG(d){var w=this,v=w.as
if(v!=null)v.a9(0)
w.m(new B.bF5(w,d))
w.as=C.cM(A.l3,new B.bF6(w))},
q(){var w=this.as
if(w!=null)w.a9(0)
w=this.ch
if(w!=null)w.a9(0)
this.bpp()},
ZR(d,e){return this.caY(d,e)},
aYZ(d){return this.ZR(d,!1)},
caY(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$ZR=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qF:A.uT
p=d.b
w=3
return C.b(E.fIx(s,r,p,d.ax<3.2,q,$.q2().h(0,p).b),$async$ZR)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$ZR,v)},
cnk(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.ci(0,d.a,new B.bF7()),t=J.cE(u)
t.K(u,v)
t.bn(u,new B.bF8(v))
if(t.gM(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a9(0)
w.a0b(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a9(0)
w.ch=C.cM(A.kd,new B.bF9(w,u,d))}},
Zx(d){return this.c9l(d)},
c9l(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$Zx=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i1J(s,d.b,A.k.V(A.k.G(t.a.c.d*0.12,1)*100)),$async$Zx)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$Zx,v)},
a0b(d){return this.cl_(d)},
cl_(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0b=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bW(F.nA,null,new B.bF3(u,d),t,!0,!0,!1,A.lO,!1,!1,x.H),$async$a0b)
case 2:return C.h(null,v)}})
return C.i($async$a0b,v)},
a_(){this.a1()
this.bco()
this.l6()},
bco(){this.a.c.e=new B.bFo(this)},
ln(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.uO(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=D.lL.h(0,s.b)
if((r==null?null:r.b)!==D.z1)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.K(0,s.a)
q.ZR(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
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
case"speaker":if(s.fx>0)E.dF(330+A.o.G(110*A.k.bw(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dF((A.k.bw(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
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
q.m(new B.bFp())},
b4L(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lL.ah(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
aZF(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.T(w).k("dw<1>"),w=new C.dw(w,v),w=new C.bV(w,w.gM(0),v.k("bV<ai.E>")),u=d.a,v=v.k("ai.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lL.ah(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
czw(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lL.ah(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lL.ah(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hhD(new C.u(k,n),new C.u(i,l),p)
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
acE(){this.a.toString
this.m(new B.bEz())},
bmd(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cTC[v]
if(!A.d.b8(p.a.c.a,new B.bFq(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?L.HC:o
s=s?L.HC:o
q=t.ais(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dF(1200,"",50,0,0.3,"tri")
p.acE()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.PC[v].a)
u=w.length
t=u>8
s=t?A.d.dn(w,0,A.o.an(u+1,2)):w
r=t?A.d.fI(w,A.o.an(w.length+1,2)):A.T
q=n.a.d
if(q!=null){w=C.a3(q).k("cz<1>")
w=C.B(new C.cz(q,w),w.k("H.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.aZu(s,!0))
n.a.toString
if(t)w.push(n.aZu(r,!0))
w.push(C.D(C.cm(new B.bFn(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
aZu(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.L)(d),++v){u=d[v]
t=$.q2()
s=t.h(0,u).d.j(0.14)
r=new C.aV(14,14)
q=new C.az(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(C.aE(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.zf,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.ne,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.ba,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bP(q,q,q,q),new C.bp(r,r,r,r),p,p,A.n),p,p,p,F.tj,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bEA(this,u),p,p,p,p,p,p,!1,A.a8))}return C.p(p,C.cB(m,p,A.h2,p,p,A.aQ,!1),A.f,p,p,new C.o(D.E6,p,new C.bP(A.Y,A.Y,new C.az(o,1,A.r,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aX3(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.aaQ,w,C.I(A.bF,A.r,1),v,w,w,A.n),w,w,w,w,F.afS,w,w,w)},
cd_(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.q2().h(0,o),m=d.dy,l=d.fr,k=new B.bET(q,n),j=C.d(n.c,p,p,p,p,p,p,A.SM,p,p,p),i=n.b,h=n.d,g=x.p
i=C.A(C.a([j,A.ab,C.D(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bHL,p,p,p,new B.bEG(q,d),p,p,p,p,"Remove part",A.c7),C.aH(p,p,p,p,A.G1,p,p,p,new B.bEH(q),p,p,p,p,p,A.c7)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,D.ID,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.eYw,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.at,w,A.ao,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cr:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.ban(d)
if(v!=null){l=(d.x?A.aB:A.aI).j(0.14)
j=C.m(10)
i=C.I((d.x?A.aB:A.aI).j(0.5),A.r,1)
m.push(new C.C(A.i8,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.f3S,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cj,p,p,p),p))}if(B.fTg(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dz("CH "+t,d.at===u,new B.bEI(q,d,u),p,h,p))}l=C.c_(A.bD,l,A.bt,4,6)
l=C.a([A.ao,l,A.at,C.d(q.a.c.C6(d)?"Showing: "+F.Pe[A.o.G(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.ho,p,p,p)],g)
if(q.a.c.C6(d))l.push(new B.fg(A.FB,"Open big screen",new B.bEL(q,d),h,p))
A.d.v(m,l)}if(D.lL.ah(0,o)&&!B.fTg(o)){l=C.a([A.ao,C.d(q.a.c.C6(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.ho,p,p,p)],g)
if(q.a.c.C6(d))l.push(new B.fg(A.MZ,"Open the "+$.q2().h(0,o).b,new B.bEM(q,d),h,p))
A.d.v(m,l)}if(D.lL.ah(0,o))A.d.v(m,C.a([A.ao,new B.fg(A.Bf,"Make it bigger (or tap it 4 times)",new B.bEN(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.C6(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.ao,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.eZl,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d8w[s]
j=r===A.k.jO(r)?A.k.V(r):r
l.push(new B.dz(C.t(j)+" V out",d.e===r,new B.bEO(q,d,r),p,h,p))}i.push(new C.C(A.ma,C.c_(A.bD,l,A.bt,0,6),p))}if(o==="regulator")i.push(D.flp)
A.d.v(m,i)}if(q.a.c.L3(d)&&!d.x){l=A.k.aa(d.cx,2)
j=A.k.aa(q.a.c.zm(d),2)
i=q.a.c
w=i.alO(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.alO(d)?A.cr:A.ex,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.zm(d),0,1)
i=q.a.c.alO(d)?A.aB:A.bc
m.push(new C.C(A.i8,C.v(C.a([l,A.cZ,C.bw(j,C.mh(A.bF,p,p,5,p,w,new C.mB(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.C(A.i8,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eTq,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.cZV[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dz(j,d.e===r,new B.bEP(q,d,r),p,h,p))}m.push(C.c_(A.bD,l,A.bt,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cRc[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dz(j,d.r===r,new B.bEQ(q,d,r),p,h,p))}m.push(C.c_(A.bD,l,A.bt,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bER(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bES(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bEJ(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bEK(d)))
if(o==="crank")m.push(D.fh8)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.ho,p,p,p))
return q.aX3(new C.cU(D.aXh,C.cd(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.q,p,A.y,p,p,p,p,A.ai),p))}}
B.b93.prototype={}
B.U5.prototype={
T(){return new B.aBL(B.fYQ(),new C.cp(null,x.gJ),C.aW(x.S))}}
B.aBL.prototype={
a_(){this.a1()
$.aT.c1$.push(this)
this.acF()},
acF(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$acF=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fow(),$async$acF)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i0W(t.d,r)
if(s!=null){t.m(new B.dOE(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$acF,v)},
Et(){var w,v=this
if(!v.as)return
w=B.hSA(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bBP(w)},
iQ(d){if(d!==A.fs)this.Et()},
q(){$.aT.hD(this)
this.Et()
this.a2()},
c3p(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.T(v).k("a2<1>")
t=new C.a2(v,new B.dON(q),u).gM(0)
s=new C.a2(v,new B.dOO(),u).gM(0)
r=new C.a2(v,w.gcOe(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dOP(q,t,s,r))}if(A.o.G(q.w,45)===0)q.Et()
if(A.o.G(q.w,10)===0){w=q.f
$.agD()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.agD()[q.f].c.$1(q.d)){w.K(0,q.f)
B.Bb("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dOQ())
q.Et()
w=q.c
w.toString
w=C.Wr(w)
if(w!=null)w.R(C.b2(p,p,p,p,p,A.q,p,C.d("\u2705 Challenge done: "+$.agD()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m7,p,p,p,p,p,p,p,p,p,p))}},
afk(){var w=0,v=C.j(x.H),u=this,t
var $async$afk=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.c9(null,null,!0,null,new B.dOD(u),t,null,!0,!0,x.H),$async$afk)
case 2:return C.h(null,v)}})
return C.i($async$afk,v)},
aX2(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.r,1)
u=C.a([C.ao(w,C.p(w,C.W(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aE(w,C.hp(new C.a6(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8)},
aX1(d,e,f,g){return this.aX2(d,e,f,g,null)},
apg(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.r,1)
return C.D(C.aE(w,C.p(w,C.A(C.a([C.W(d,f,w,w,w,15),A.ea,new C.dm(1,A.ci,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.ba,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),1)},
adE(){var w=0,v=C.j(x.H),u=this,t
var $async$adE=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a5(t,!1).ce(C.ej(new B.dOz(u),!1,null,x.H)),$async$adE)
case 2:t=u.e.gbe()
if(t!=null)t.bco()
if(u.c!=null)u.m(new B.dOA())
u.Et()
return C.h(null,v)}})
return C.i($async$adE,v)},
bCs(){var w,v,u,t,s=null,r=this.f
$.agD()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bn:A.aB
u=C.m(9)
t=C.I(D.E6,A.r,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.w3,s,s,s),s,s,s),A.f,s,D.aXo,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eQ,s,s,s)},
agq(){var w=0,v=C.j(x.H),u=this,t
var $async$agq=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bW(F.nA,null,new B.dOM(u),t,!0,!0,!0,A.lO,!1,!1,x.H),$async$agq)
case 2:return C.h(null,v)}})
return C.i($async$agq,v)},
c3q(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aE(r,C.p(r,D.bIZ,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dOS(d),r,r,r,r,r,r,!1,A.a8),o=C.m(11)
o=C.p(r,D.b21,A.f,r,r,new C.o(A.bl,r,C.I(A.aW.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.A(C.a([p,A.ab,o,A.ab,C.D(C.v(C.a([D.fjA,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f9:A.hf,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.avS(s.gc92(),r),A.rl,s.aX1(A.xI,"Construction Lab: real 3D wiring, plumbing and a house",A.cv,new B.dOT(s,d)),s.aX2(A.l8,"Challenges",A.aM,s.gcpP(),s.bCs()),s.aX1(A.MS,"How to play",A.aW,new B.dOU(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.ao,C.A(C.a([s.apg(A.pE,"Circuits",A.by,s.gciR()),A.bp,s.apg(A.qM,"Repair",A.aM,new B.dOV(s)),A.bp,s.apg(D.xJ,"Clear",A.cr,new B.dOW(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.E6,r,new C.bP(A.Y,A.Y,new C.az(q,1,A.r,-1),A.Y),r,r,r,A.n),r,r,r,r,D.btd,r,r,r)},
B(d){var w=this,v=null
$.aqq="tech"
return C.cb(v,A.bX,C.bn(!0,C.v(C.a([w.c3q(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.D(B.fXL(w.d,w.e,w.gc3o(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
B.avS.prototype={
T(){return new B.b7f(null,null)}}
B.b7f.prototype={
gavr(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.U,null,1,null,v)
w.cH(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.gavr().q()
this.bqF()},
B(d){var w=null,v=this.a.c
return C.aE(w,C.hp(new C.a6(42,42,C.c6(this.gavr(),new B.cz_(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
B.b7e.prototype={
a6(d,e){var w,v,u,t=null,s=e.ef(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.X()
w=C.M()
w.r=A.b4.j(0.25+0.15*o).gp(0)
w.z=G.mo
d.ai(s,r+2+o*2,w)
w=C.M()
w.sau(D.e8z.aw(0,C.bU(s,r)))
d.ai(s,r,w)
v=C.M()
v.b=A.ae
v.c=2.2
v.sau(new C.fS(A.A,0,6.283185307179586,A.x,D.cJ5,t,new C.me(p)).aw(0,C.bU(s,r)))
d.ai(s,r,v)
p=new B.cyZ(d)
p.$3(s.ad(0,A.rc),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.dZT),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.e0J),2.6,0.5+0.5*Math.cos(q))
u=C.ii(t,t,t,t,D.eQa,A.a5,A.ch,t,A.eq,A.cd)
u.eP()
u.a6(d,s.ad(0,new C.u(-u.b.c/2,5)))},
aq(d){return d.b!==this.b}}
B.awa.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.awb.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bpo()}}
B.aI8.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv5.prototype={}
B.fJ.prototype={}
B.IE.prototype={
a4(){return"ScreenStyle."+this.b}}
B.lY.prototype={}
B.TN.prototype={
T(){return new B.bhB(null,null)}}
B.bhB.prototype={
ga84(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nI,null,1,null,v)
w.cp(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.ga84().q()
this.bsv()},
gR2(){var w=this.ga84().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lL.h(0,this.a.c)
if(v==null)v=D.aKT
return C.cb(w,R.KI,C.bn(!0,new C.an(A.W,w,A.aa,A.q,C.a([C.av(v.b===D.z2?this.bEB(v):this.cfK(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mk,w,w,w,new B.dKA(d),w,w,w,C.nq(w,A.aX,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eRL,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
c3r(d){var w
A:{if(D.HZ===d){w=0.46153846153846156
break A}if(D.uf===d){w=0.45
break A}if(D.vU===d){w=0.9259259259259258
break A}if(D.RJ===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cfK(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.HZ
A:{if(D.HZ===p){w=44
break A}if(D.uf===p){w=30
break A}if(D.vU===p){w=22
break A}if(D.RJ===p){w=26
break A}w=14
break A}v=C.c6(this.ga84(),new B.dKz(this,w,d,o),q)
if(p===D.a5k)v=new C.CV(D.btO,v,q)
p=this.c3r(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fG(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A1.F8,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a7(A.ax,A.aD,A.x,r,q,q),A.n),q,q,q,D.bnx,new C.Q(u,u,u,u),q,q,q),q)},
b4_(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bw(this.gR2()*0.4),0,100),q=d.b===D.HZ,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aT(A.o.u(C.dh(s)),2,"0")+":"+A.a.aT(A.o.u(C.fY(s)),2,"0"),t,t,t,t,t,t,A.rr,t,t,t),A.b3],x.p)
for(w=0;w<4;++w){v=new C.aV(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bp(v,v,v,v),t,t,A.n),t,4+w*2,t,D.btw,t,t,t,3))}n.push(A.d8)
n.push(D.fcE)
n.push(A.bp)
v=C.I(A.ad,A.r,1)
u=C.m(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.Dm(A.A,C.p(t,t,A.f,t,t,new C.o(A.bc,t,t,C.m(2),t,t,A.n),t,t,t,A1.F8,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.q0)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.f4a,t,t,t))
return new C.C(new C.Q(p,12,o,2),C.A(n,A.m,t,A.e,A.j,0,t,t),t)},
atp(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d4b,new C.a7(A.ax,A.aD,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.at,C.d(d.a,v,1,A.a2,v,v,v,D.eW7,v,v,v)],w))
return C.aE(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dKv(this,d),v,v,v,v,v,v,!1,A.a8)},
bVj(d,e){return this.atp(d,e,!0)},
bV3(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.RJ||n===D.vU,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kC,0.5)
l.toString
l=C.a([k,A.dv,l],x.O)
k=p.b4_(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b5,A.r,1)
w=C.aE(o,C.p(o,C.bw(C.m(23),C.b3(o,o,o,new B.ads(0,p.gR2(),o),A.f0),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hI,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dKt(p),o,o,o,o,o,o,!1,A.a8)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.jU[s]
t.push(new C.cq(A.A,o,o,p.bVj(r,m?58:54),o))}k=C.a([k,A.ao,w,A.ac,C.D(C.lT(0.92,t,v,8,12,A6.v3,o,!1),1)],u)
if(n!==D.a5k){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.dc(F.jU,0,C.dJ(4,"count",x.S),x.gD),t=v.$ti,v=new C.bV(v,v.gM(0),t.k("bV<ai.E>")),t=t.k("ai.E");v.C();){q=v.d
u.push(p.atp(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.A(u,A.m,o,A.pN,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.boo,U.ahi,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a7(A.ax,A.aD,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
by7(d,e){var w=null
return C.p(w,C.v(C.a([this.b4_(d),C.D(C.b3(w,w,w,new B.ads(e,this.gR2(),w),A.f0),1),C.aE(w,C.p(w,C.av(C.d(F.jU[e].a,w,w,w,w,w,w,A8.Io,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dKo(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bEB(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fG(1.5384615384615383,C.p(t,C.c6(this.ga84(),new B.dKr(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a7(A.ax,A.aD,A.x,w,t,t),A.n),t,t,t,D.bt7,new C.Q(8,8,8,s),t,t,t),t)}}
B.bta.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.X()
w=C.M()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.kC,0.4)
t.toString
w.sau(new C.a7(A.ax,A.aD,A.x,C.a([u,A.dv,t],x.O),null,null).aw(0,new C.aa(0,0,n,m)))
d.aY(new C.aa(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.di2
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
aq(d){return!0}}
B.ads.prototype={
a6(d,e){return E.aOD(d,e,this.b,this.c)},
aq(d){return!0}}
B.aJV.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aUT.prototype={}
B.UB.prototype={
T(){return new B.bia(C.V(x.S,x.N),A.au,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bia.prototype={
gvb(){var w=this.f
return w===$?this.f=B.fTm(0):w},
a_(){this.a1()
this.l6()
B.z3("laser_maze").bz(new B.e4B(this),x.P)},
ln(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cA(w,v)}this.m(new B.e4C())},
acK(d){var w=this
w.m(new B.e4r(w,d))
B.vC("laser_maze",C.E(["best",w.e,"level",w.d],x.N,x.z))},
c3H(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gee()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bw((d.a-t)/v)
q=A.k.bw((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvb().b.t(0,p)||p===o.gvb().e||o.gvb().d.ah(0,p))return
o.m(new B.e4s(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cm(new B.e4v(t,B.hhv(t.gvb(),t.r))),q=x.p,p=C.a([new B.dz("Clear mirrors",!1,new B.e4w(t),A.jS,A.aM,s),new B.dz("Skip",!1,new B.e4x(t),D.bBO,A.aW,s)],q)
if(t.d>0)p.push(new B.dz("Back",!1,new B.e4y(t),D.bBP,A.aW,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dz(""+u,v===t.d,new B.e4z(t,v),s,A.aB,s))}return B.jE(A.aB,A.h6,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eK(p,s,s),new B.eK(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bfb.prototype={
a6(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gee()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dee(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bz(new C.aa(a5,a6,a8,a4),A.kn)
v=$.X()
u=C.M()
u.r=M.mN.gp(0)
a9.aD(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.dq.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.dq.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ea(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bz(C.cu(p,u,u),A.ha)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(D.bTN.aw(0,C.cu(p,a3,a3)))
q=o.H()
w.drawRRect(C.ep(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aQ(v.r,A.ap,a2,a2,u)
n.E(new C.b5(a7.$1(A.d.gL(a8)).a,a7.$1(A.d.gL(a8)).b))
for(a8=C.dc(a8,1,a2,C.T(a8).c),v=a8.$ti,a8=new C.bV(a8,a8.gM(0),v.k("bV<ai.E>")),v=v.k("ai.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bx(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.X()
a8=C.M()
a8.b=A.ae
a8.c=14
a8.e=A.fz
a8.r=A.aB.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lg
a9.aO(n,a8)
a8=C.M()
a8.b=A.ae
a8.c=4
a8.e=A.fz
a8.r=D.acH.gp(0)
a9.aO(n,a8)
a8=C.M()
a8.b=A.ae
a8.c=1.6
a8.e=A.fz
a8.r=A.c.gp(0)
a9.aO(n,a8)}for(a8=a4.c,a8=C.ea(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.BV
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.bw).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.az
i=new C.ko(new C.eo("\u2605",a2,a2,A.cO,a2,a2,a2,a2,a2,a2,new C.F(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a5,A.ch,new C.jn(1),a2,a2,a2,a2,A.cd,a2)
i.eP()
j=i.b
h=j.c
j=j.a.c
i.a6(a9,new C.u(m-h/2,k-j.gbb(j)/2))}g=new B.deh(a7,a3,a9)
a1.c.bH(0,new B.def(g))
a4.d.bH(0,new B.deg(g))
f=a7.$1(a4.e)
a4=C.bz(C.cu(f,o,a3*0.8),A.ha)
a8=C.M()
a8.r=A.aB.gp(0)
a9.aD(a4,a8)
v=f.ad(0,new C.u(v,0))
a8=C.M()
a8.r=A.c.gp(0)
a9.ai(v,5,a8)
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
aq(d){return!0}}
B.UD.prototype={
T(){var w=x.n
return new B.aCp(A.cI,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCp.prototype={
a_(){this.a1()
this.l6()
B.z3("light_mixer").bz(new B.e4U(this),x.P)},
ln(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aX7()
w.m(new B.e4V())},
avv(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aB(5)/4)
u.e=t
if(A.d.d9(t,new B.e4F()))u.e[w.aB(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aX7(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hcU(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vF(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vC("light_mixer",C.E(["best",v],x.N,x.z))}}else u.z="result"},
gcuH(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.E(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cKZ[A.o.G(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cm(new B.e4O(v,B.hcU(v.e,t))),r=t[0]
r=B.hy(A.aB,""+A.k.V(r*100)+"%","Red",1,0,new B.e4P(v),r)
w=t[1]
w=B.hy(A.bn,""+A.k.V(w*100)+"%","Green",1,0,new B.e4Q(v),w)
t=t[2]
return B.jE(A.b7,A.h6,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hy(A.d7,""+A.k.V(t*100)+"%","Blue",1,0,new B.e4R(v),t),new C.bI(A.a7,u,u,new B.fg(A.hx,"Lock it in",new B.e4S(v),A.bc,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bfq.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bz(new C.aa(0,0,n,m),A.pX)
$.X()
w=C.M()
w.r=A.w.gp(0)
d.aD(l,w)
w=d.a
J.bA(w.save())
w.clipRRect(C.ep(C.bz(new C.aa(0,0,n,m),A.pX)),$.pi(),!0)
v=e.gee()*0.3
u=e.ef(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.u(0,l)),u.ad(0,new C.u(l,t)),u.ad(0,new C.u(v*0.55,t))]
r=[A.DP,I.abS,I.acd]
d.l4(new C.aa(0,0,n,m),C.M())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nm
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bz(new C.aa(0,0,n,m),A.pX)
m=C.M()
m.b=A.ae
m.c=2
m.r=A.b5.gp(0)
d.aD(n,m)},
aq(d){return!0}}
B.aKm.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bva.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsZ()}}
B.aKn.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvb.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bt_()}}
B.bs_.prototype={}
B.a7i.prototype={
B(d){var w=null
return C.cb(C.eD(w,w,w,!0,!0,D.acS,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.alP,w,w,w,new B.cd4(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.frO,w,w,w,1,w,!0),D.acS,C.cB(C.a([D.e1Y,C.cm(new B.cd5())],x.p),w,D.bpo,w,w,A.ai,!1),w,!1,!1,w,w)}}
B.Vu.prototype={
T(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aDg(w,new C.ar(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDg.prototype={
a_(){this.a1()
this.l6()},
b23(d){var w=this.d.length
return A.o.G(A.k.bw(A.k.G(A.k.G(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
ln(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b23(v.f)
if(w!==v.x){v.x=w
B.lb("bell",24+A.o.G(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eDN(v))
B.Bb("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c4D(){if(this.d.length<2)return
this.m(new B.eDJ(this))},
aXt(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eDI(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc4C(),p=s.d,o=C.D(C.aE(r,C.b3(r,r,r,new B.btm(p,s.f,r),A.f0),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a6(r,40,C.av(C.d(n,r,r,r,r,r,r,D.f2l,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.avm[A.o.G(v,8)].j(0.9)
t=new C.aV(20,20)
o.push(C.aE(r,C.p(r,new C.x(p[v],r,D.f1D,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bp(t,t,t,t),r,r,A.n),r,r,r,A.fx,A.h3,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eDL(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8))}p=A.c.j(0.07)
return B.jE(A.aM,A.h6,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eK(o,r,r),C.A(C.a([C.D(C.aL(r,A.T,!1,r,!0,A.q,r,C.aM(),s.e,r,r,r,r,r,2,C.br(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kt,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ah,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eDM(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dl,!0,A.a5,r,A.am,r,r,r,r),1),A.ab,new B.fg(A.hw,"Add",s.gc4A(s),A.c,r),A.bp,new B.fg(A.me,"Spin",q,A.bc,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.btm.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.X()
w=C.M()
w.r=D.b7u.gp(0)
a1.ai(d,f,w)
w=C.M()
w.b=A.ae
w.c=3
w.r=A.aM.gp(0)
a1.ai(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bU(d,a0)
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.avm[A.o.G(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c4(o),n,s,!0,m])
m.delete()
o=C.bU(d,a0)
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[C.c4(o),n,s,!0,m])
m.delete()
J.bA(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new C.ko(new C.eo(o,i,i,A.cO,i,i,i,i,i,i,D.eQY),A.a5,A.ch,new C.jn(1),i,i,i,i,A.cd,i)
k.eP()
o=k.b
n=o.c
o=o.a.c
k.a6(a1,new C.u(a0-n-16,-o.gbb(o)/2))
f.restore()}f=C.M()
f.r=D.acA.gp(0)
a1.ai(d,20,f)
f=C.M()
f.b=A.ae
f.c=3
f.r=A.aM.gp(0)
a1.ai(d,20,f)
j=new C.aQ(h.r,A.ap,i,i,C.a([],x.v))
e-=a0
j.E(new C.b5(g,e+26))
e-=10
j.E(new C.ap(g-14,e))
j.E(new C.ap(g+14,e))
j.E(new C.bE())
e=C.M()
e.r=A.c.gp(0)
a1.aO(j,e)
e=C.M()
e.b=A.ae
e.c=2
e.r=A.aX.gp(0)
a1.aO(j,e)},
aq(d){return!0}}
B.Uc.prototype={
T(){return new B.bhK($,A.bx,0,C.a([],x.X),null,null)}}
B.bhK.prototype={
a_(){this.a1()
this.l6()},
ln(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.Bb("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a40(900,new B.dQS())}w.m(new B.dQT())},
aXv(d){return this.m(new B.dQN(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.G(A.k.dw(m),60)),2,"0")
m=C.b3(n,n,n,new B.bod(l,A.cr,n),A.aM6)
u=C.d(w+":"+v,n,n,n,n,n,n,D.eV7,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a6(280,280,new C.an(A.A,n,A.aa,A.q,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.eUd,n,n,n),A.at,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.CM,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d1w[r]
u.push(new B.dz(""+q+" min",o.d===q,new B.dQP(o,q),n,A.cr,n))}m=o.f
p=m?A0.xS:A.iP
m=m?"Pause":"Start"
return B.jE(A.cr,A.h6,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eK(u,n,n),new B.eK(C.a([new B.fg(p,m,new B.dQQ(o),A.bc,n),new B.fg(A.jS,"Reset",new B.dQR(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.bod.prototype={
a6(d,e){var w,v,u,t,s=e.ef(A.J),r=e.a/2-14
$.X()
w=C.M()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ai(s,r,w)
w=C.bU(s,r)
v=C.M()
v.b=A.ae
v.c=16
v.d=A.bO
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.sau(new C.fS(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).aw(0,C.bU(s,r)))
d.fh(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aq(d){return d.b!==this.b}}
B.Tp.prototype={
T(){return new B.bhn($,A.bx,0,C.a([],x.X),null,null)}}
B.bhn.prototype={
a_(){this.a1()
this.l6()},
ln(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Qf.h(0,p.d)
w.toString
v=A.d.fE(w,new B.dC7())
u=A.k.G(p.f,v)
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
B.lb("flute",D.bUo[t]+5,1400,0.35)}p.m(new B.dC8())},
gc4G(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.Jv("Press Start",0.5)
w=D.Qf.h(0,this.d)
w.toString
v=A.d.fE(w,new B.dC2())
u=A.k.G(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.Jv("Breathe in",0.5+0.5*A.dA.av(0,p))
case 1:return new C.Jv("Hold",1)
case 2:return new C.Jv("Breathe out",1-0.5*A.dA.av(0,p))
default:return new C.Jv("Hold",0.5)}}}return new C.Jv("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc4G(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hu.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hu.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.CW,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kt,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a6(300,340,new C.an(A.A,q,A.aa,A.q,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aX(D.Qf.geh(D.Qf));w.C();){v=w.gU(w)
o.push(new B.dz(v,r.d===v,new B.dC5(r,v),q,A.hu,q))}w=r.e
v=w?A.a_u:A.iP
w=w?"Stop":"Start"
o.push(new B.fg(v,w,new B.dC6(r),A.bc,q))
return B.jE(A.hu,A.h6,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eK(o,q,q))}}
B.aGD.prototype={}
B.U3.prototype={
T(){return new B.bhE(new C.cp(null,x.A),C.a([],x.au),A.aA,A.c)}}
B.bhE.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.ml,s,s,s,new B.dO8(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.m(18),new C.es(C.aE(s,C.b3(s,s,s,new B.bjG(t.e,t.x,s),A.f0),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dO9(t),new B.dOa(t),s,s,s,s,s,s,s,s,s,new B.dOb(t),s,s,s,s,!1,A.a8),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cKn[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.EJ(v,u,new B.dOc(t,v),!1,s))}u=t.r
return B.jE(A.bz,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(A.bR,p,s),"DRAW PAD",C.v(C.a([new B.eK(o,s,s),B.hy(A.bz,""+A.k.V(u),"Brush",30,2,new B.dOd(t),u),new B.eK(C.a([new B.dz("Eraser",t.w,new B.dOe(t),A.Ft,A.bz,s),new B.fg(A.qU,"Undo",new B.dOf(t),A.c,s),new B.fg(A.e4,"Clear",new B.dOg(t),A.c,s),new B.fg(A.MO,"Paper",new B.dOh(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.bjG.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.X()
w=C.M()
w.r=this.c.gp(0)
d.aY(new C.aa(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=$.X()
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
k=new C.aQ(q.r,A.ap,null,null,o)
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
u.drawPath((q==null?k.e=new C.cF(k.gbI().a.snapshot()):q).a,l)
l.delete()}}},
aq(d){return!0}}
B.UP.prototype={
T(){var w=x.S
return new B.aCz(C.aW(w),C.aW(w))}}
B.aCz.prototype={
a_(){this.a1()
this.aqJ()},
aqJ(){var w,v,u=this,t=x.N,s=C.bl(D.d5S,!0,t)
A.d.Co(s)
w=x.S
v=C.T(s).c
t=C.B(C.dc(s,0,C.dJ(u.d,"count",w),v),t)
A.d.v(t,C.dc(s,0,C.dJ(u.d,"count",w),v))
A.d.Co(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c4B(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lb("bell",12+A.o.G(d,9),150,0.35)
s.m(new B.eag(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gL(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.mU,new B.eah(s,v,u),t)
else{s.x=!0
C.bN(Ac.EK,new B.eai(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.a6Q,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.C(A.xi,C.A(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hL,A.j,0,q,q),q),C.D(C.ic(!0,q,q,A.y,new C.hI(v,8,8,1,q),new B.eam(r),r.e.length,A.bm,q,A.ai,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cLN[t]
o.push(new B.dz(s.b,r.d===s.a,new B.ean(r,s),q,A.aW,q))}o.push(new B.fg(D.bBM,"New game",new B.eao(r),A.bc,q))
return B.jE(A.aW,A.h6,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eK(o,q,q))}}
B.V2.prototype={
T(){return new B.aCV(C.a([],x.t))}}
B.aCV.prototype={
c4F(d){A.d.a8(this.d)
this.w=!0
this.aXu()},
aXu(){this.d.push(A.cI.aB(4))
this.e=0
this.YX()},
YX(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YX=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.ekN(t))
s=x.H
w=3
return C.b(C.bN(A.lz,null,s),$async$YX)
case 3:r=t.d,q=C.bl(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aQW(n)
w=7
return C.b(C.bN(new C.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$YX)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.ekO(t))
case 1:return C.h(u,v)}})
return C.i($async$YX,v)},
aQW(d){this.m(new B.ekL(this,d))
B.lb("marimba",D.ano[d]+5,450,0.55)
C.bN(A.EI,new B.ekM(this),x.H)},
c4H(d){var w,v,u=this
if(!u.w||u.r)return
u.aQW(d)
w=u.d
v=u.e
if(w[v]!==d){E.dF(90,"",600,0,0.5,"saw")
u.m(new B.ekP(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.ekQ(u))
C.bN(A.i7,new B.ekR(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,L.SU,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.f2J,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aui[v]
u=u.j(q.f===v?1:0.35)
t=new C.aV(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.aui[v].j(0.8),A.J,30)],w):p
r=new C.az(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(C.aE(p,C.dg(p,p,p,p,A.bb,new C.o(u,p,new C.bP(r,r,r,r),new C.bp(t,t,t,t),s,p,A.n),A.j5,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.ekS(q,v),p,p,p,p,p,p,!1,A.a8))}o=C.av(new C.C(A.a9,C.v(C.a([o,A.ao,n,A.d5,new C.fG(1,C.lT(1,l,2,12,12,p,A.dQ,!1),p)],m),A.m,p,A.ba,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jE(A.cp,A.h6,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eK(C.a([new B.fg(A.iP,n,q.gc4E(q),A.bc,p)],m),p,p))}}
B.Vn.prototype={
T(){return new B.biS(new C.ar(A.as,$.aw()))}}
B.biS.prototype={
auf(d){return C.ow(A.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.ez4(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d4(C.aJ(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.ezd()
l=C.aL(m,A.T,!1,m,!0,A.q,m,C.aM(),l,m,m,m,m,m,2,C.br(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),Aa.wr),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aVO),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lk,"Bill amount",!0,!0,!1,m,m,m,m,D.f0j,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ah,m,m,m,m,m,A.dU,m,m,m,1,m,m,!1,"\u2022",m,new B.ez9(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aNy,!0,A.a5,m,A.am,m,m,m,m)
k=A.bc.j(0.1)
s=C.m(20)
r=C.I(A.bc.j(0.35),A.r,1)
q=x.p
s=C.cB(C.a([l,A.bv,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.auf(w)),t.$2("Total","$"+n.auf(v)),R.X3,t.$3$big("Each of "+n.f+" pays","$"+n.auf(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bW,m,m,m)],q),m,A.fy,m,m,A.ai,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cwO[p]
r.push(new B.dz(""+o+"%",A.k.V(n.e)===o,new B.eza(n,o),m,A.bc,m))}l=n.f
return B.jE(A.bc,A.h6,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eK(r,"TIP",m),B.hy(A.aW,""+l,"People",20,1,new B.ezb(n),l),new B.eK(C.a([new B.dz("Round up",n.r,new B.ezc(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.UN.prototype={
T(){var w=C.a([3,5],x.t)
return new B.bil(w,A.cI,$,A.bx,0,C.a([],x.X),null,null)}}
B.bil.prototype={
a_(){this.a1()
this.l6()},
ln(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.G(A.k.bw(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t
B.a7h("snare",0.5)}u.m(new B.e8W())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hg()
u.w=t
u.x=t?0:3.141592653589793
B.lb("bell",24,400,0.5)}u.m(new B.e8X())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bbp(v,o.r>0,n))}u=C.aE(n,C.av(C.c_(A.fM,m,A.bt,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e8P(o),n,n,n,n,n,n,!1,A.a8)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.da,A.r,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aE(n,C.av(C.e9(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.f_z,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.e8D,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e8Q(o),n,n,n,n,n,n,!1,A.a8)}else{m=o.as
u=C.aE(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eQs,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kt,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e8R(o),n,n,n,n,n,n,!1,A.a8)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d_4[r]
v.push(new B.dz(q.b,o.d===q.a,new B.e8S(o,q),q.c,A.by,n))}v=C.a([new B.eK(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hy(A.by,""+s,"Dice",4,1,new B.e8T(o),s))}if(o.d==="num"){s=o.z
s=B.hy(A.by,""+s,"From",100,1,new B.e8U(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hy(A.by,""+p,"To",1000,2,new B.e8V(o),p)],m))}return B.jE(A.by,A.h6,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bbp.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cI.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cx,14)],x.V)
t=C.a([],x.p)
for(s=D.dgO.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,K.a9T,p,18,p,p,p,p,p,18),p))
return C.eA(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.q,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
B.aJI.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv1.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsi()}}
B.aK0.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv6.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsC()}}
B.aKv.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvg.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bt7()}}
B.aKZ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvs.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btB()}}
B.b53.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aC2.h(0,t)
$.aqq=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,T.nQ,u,u,u,new B.cpT(d),u,u,u,u,u,u),C.D(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.W(A.MS,s,u,u,u,22),u,u,u,new B.cpU(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.bsp,C.A(t,A.m,u,A.e,A.j,0,u,u),u),C.D(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(D.E6,u,new C.bP(new C.az(A.c.j(0.08),1,A.r,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.EN,u,u,1/0))
return C.cb(u,A.bX,C.bn(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),u,!1,!1,u,u)}}
B.dz.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.r,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.W(u,q?t.r:A.aR,s,s,s,16),A.ea],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(F.tj,C.aE(s,C.dg(s,C.A(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bb,new C.o(p,s,o,r,s,s,A.n),A.eE,s,s,s,A.h3,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.cpP(t),s,s,s,s,s,s,!1,A.a8),s)}}
B.eK.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a6(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.D(C.cd(C.A(this.c,A.m,w,A.e,A.j,0,w,w),A.q,w,A.y,w,w,w,w,A.aQ),1))
return new C.C(A.cG,C.A(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.auh.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.atR(d).cF_(q,A.bF,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.D(C.a90(C.kT(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a6(s,34,C.A(C.a([new C.a6(78,s,r,s),q,new C.a6(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A8.Io,A.dK,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fg.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(F.tj,C.aF(!1,A.a1,!0,C.m(12),C.aK(!1,C.m(12),!0,new C.C(Aj.Xv,C.A(C.a([C.W(w.c,u,v,v,v,17),A.ea,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.cpO(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.af),v)}}
B.EJ.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eOX:u
w=t?A.c:A.b5
w=C.I(w,A.r,t?2.5:1)
return C.aE(u,C.dg(u,u,u,u,A.bb,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hW,u,r,D.afs,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.cpV(v),u,u,u,u,u,u,!1,A.a8)}}
B.mu.prototype={
a40(d,e){var w=C.df()
w.seC(C.cM(C.dB(0,0,0,d,0,0),new B.cpQ(this,w,e)))
this.fk$.push(w.bd())},
l6(){var w=this,v=w.qe(new B.cpS(w))
v.iZ(0)
w.fj$!==$&&C.aO()
w.fj$=v}}
B.a9Z.prototype={
bvH(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.L)(w),++q)for(p=A.d.gag(w[q]);p.C();){o=p.gU(0)
n=J.a8(o)
if(n.h(o,0)<s)s=n.h(o,0)
if(n.h(o,0)>t)t=n.h(o,0)
if(n.h(o,1)<r)r=n.h(o,1)
if(n.h(o,1)>u)u=n.h(o,1)}g.z!==$&&C.aO()
g.z=s
g.Q!==$&&C.aO()
g.Q=t
g.as!==$&&C.aO()
g.as=r
g.at!==$&&C.aO()
g.at=u
for(m=0,q=0;q<w.length;w.length===p||(0,C.L)(w),++q){for(v=A.d.gag(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gU(0)
n=J.a8(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aO()
g.ax=m
w=g.byV()
g.ay!==$&&C.aO()
g.ay=w},
byV(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
F6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.aa_.prototype={
cB2(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(r.F6(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.uN.prototype={}
B.Oo.prototype={}
B.xE.prototype={}
B.On.prototype={
ff(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.ank[w.aB(7)]
w=w.hg()?0:12
u=A.o.G(t.c++,3)===0?"flute":"bell"
B.lb(u,v+w-12,2200,0.1)}}
B.Uj.prototype={
T(){var w=$.aw()
return new B.aBW(new C.cp(null,x.A),new C.ar(A.as,w),new B.On(A.cI),D.d1_,A.au,D.a1V,$,A.bx,0,C.a([],x.X),null,null)}}
B.aBW.prototype={
a_(){var w,v=this
v.a1()
v.l6()
v.a.toString
w=$.h5X
if(w==null)w=$.h5X=B.csp()
w.bz(new B.dTA(v),x.P)},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.bsK()},
cp0(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n)q.push(new B.dT2(p[n]).$0())
w.push(q)}this.w=w},
gVf(){var w=this.fy
return w.A(0,A.au)?100:Math.min(w.a,w.b)*0.43},
arU(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
avZ(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.arU(d.x,d.w,105/Math.max(w,3))
C.eP()
B.lb("bell",(A.d.cJ(D.a1w,d.c)+1)*3+12,900,0.45)
E.dF(300,"",280,1.4,0.15,"tri")},
ln(d){var w,v,u,t,s,r,q,p=this
p.f.ff(0,d,p.db)
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
c5l(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.au))return null
w=n.fy
v=n.gVf()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVf()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cB2((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c5k(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dT0(w))
return}w.m(new B.dT1(w,v,A.a.i(d).toLowerCase()))},
bLv(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new B.dSZ(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bEq,n,n,n,o.gbLu(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.ml,n,n,n,new B.dTl(o,d),n,n,n,n,"Share",n)],l),j=C.cm(new B.dTm(o,m)),i=A.c.j(0.06)
i=C.a([C.aL(n,A.T,!1,n,!0,A.q,n,C.aM(),o.e,n,n,n,n,n,2,C.br(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.CU,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bMq,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ah,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc5j(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iD,!0,A.a5,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
w.push(new B.dz(s.a,!1,new B.dTn(o,s),A.n3,A.aW,n))}i.push(new C.C(A.i8,new C.a6(n,38,C.cB(w,n,n,n,n,A.aQ,!1),n),n))}i.push(A.ao)
w=C.a([new B.dz("Whole Earth",!1,new B.dTr(o),A.hi,A.aW,n)],l)
for(v=D.aC1.gdL(D.aC1),v=v.gag(v);v.C();){u=v.gU(v)
w.push(new B.dz(u.a,!1,new B.dTs(o,u),n,A.aW,n))}w.push(new B.dz("Random",!1,new B.dTt(o),A.me,A.aW,n))
i.push(new B.eK(w,"GO TO",n))
w=o.z
i.push(B.hy(A.aW,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dTu(o),w))
w=o.dy
i.push(B.hy(A.cp,A.a.aT(A.o.u(A.k.bw(w)),2,"0")+":00","Time",24,0,new B.dTv(o),w))
w=o.fr
i.push(B.hy(A.bc,o.cnO(),"Season",365,0,new B.dTw(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lE:D.FK
i.push(new B.eK(C.a([new B.dz("Spin",w,new B.dTx(o),D.bzF,A.aW,n),new B.dz("Night",v,new B.dTy(o),A.vc,A.aW,n),new B.dz("Borders",u,new B.dTo(o),D.bzJ,A.aW,n),new B.dz("Names",r,new B.dTp(o),Z.MW,A.aW,n),new B.dz("Music",q,new B.dTq(o),p,A.aW,n)],l),n,n))
return B.jE(A.aW,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
cnO(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.auX[u])v=u
return A.i9[v]+" "+(A.k.bw(w-D.auX[v])+1)},
c5i(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mJ(1,A.o.G((A.d.cJ(D.a1w,t)+1)*47,360),0.55,1).iE()
r=new B.dSX()
q=C.m(20)
p=C.I(s.j(0.6),A.r,1)
o=x.p
n=C.A(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.D(C.d(d.a,j,1,A.a2,j,j,j,A.du,j,j,j),1),C.aH(j,j,j,j,A.G1,j,j,j,new B.dSW(this),j,j,j,j,j,A.c7)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.ho,j,j,j)
m=D.dfw.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.A(C.a([m,A.ab,r.$2("PEOPLE",l?B.fmL(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.Gd(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.Gd(w))+" per km\xb2"
else m="\u2014"
m=C.A(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.P,v,A.P,m,A.P,C.A(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fmL(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.Vc,j,p,q,j,j,A.n),j,j,j,j,D.afY,j,j,j)}}
B.bdD.prototype={
a6(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.X(),d7=C.M()
d7.r=D.A5.gp(0)
d8.aY(new C.aa(0,0,0+d4,0+d5),d7)
w=new C.eT()
w.dI(4)
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
u.sau(new C.bR(A.A,0.5,A.x,d3,0,C.a([A.K,A.aW.j(0.35),A.K],t),D.cNi,d3).aw(0,C.bU(p,o*1.1)))
d8.ai(p,o*1.05,u)
n=C.bU(p,o)
u=C.M()
u.sau(D.e8H.aw(0,n))
d8.ai(p,o,u)
J.bA(d7.save())
u=x.v
d6=new C.aQ(d6.r,A.ap,d3,d3,C.a([],u))
d6.E(new C.kG(n))
d8.tR(0,d6)
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
f=new B.da_(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbI().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.X()
a3=C.a([],u)
d=new C.aQ(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cF(d.gbI().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbI().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.X()
a3=C.a([],u)
d=new C.aQ(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cF(d.gbI().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.G((A.d.cJ(D.a1w,a7.c)+1)*47,360)
$.X()
b0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mJ(1,a9,a3,a8?1:0.62).iE().gp(0)
b1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fz
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.L)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.X()
b7=C.a([],u)
b8=new C.aQ(b6.r,A.ap,d3,d3,b7)
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
b6=new C.bE()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bx(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cF(b8.gbI().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cF(b8.gbI().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.L)(a5),++b3){d=a5[b3]
$.X()
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.r3
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbI().a.snapshot()):s).a,q)
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
c9=B.hEF(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbb(b2)
c9.a6(d8,new C.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.X()
u=C.M()
u.sau(new C.bR(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b5l.j(0.78)],t),D.d1l,d3).aw(0,C.bU(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ai(p,o,u)}$.X()
d4=C.M()
d4.sau(new C.bR(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dd4,d3).aw(0,n))
d8.ai(p,o,d4)
d7.restore()
d7=C.M()
d7.b=A.ae
d7.c=1.4
d7.r=A.hf.j(0.5).gp(0)
d8.ai(p,o,d7)},
aq(d){return!0}}
B.aK6.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.aK7.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsJ()}}
B.brV.prototype={}
B.Vq.prototype={
T(){return new B.biW()}}
B.biW.prototype={
gaQv(){var w=this.d
if(w===$)w=this.d=A.cI.aB(16)
return w},
B(d){var w=null,v=C.eD(w,w,w,!0,!0,D.A5,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.alP,w,w,w,new B.ezY(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.flI,w,w,w,1,w,!0),u=C.m(18),t=A.aW.j(0.1),s=C.I(A.aW.j(0.35),A.r,1),r=x.p
return C.cb(v,D.A5,C.cB(C.a([C.p(w,C.A(C.a([D.bD9,A.aw,C.D(C.d(D.cQY[this.gaQv()],w,w,w,w,w,w,D.a79,w,w,w),1),C.aH(w,w,w,w,D.bNq,w,w,w,new B.ezZ(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.ay,C.cm(new B.eA_())],r),w,A.XG,w,w,A.ai,!1),w,!1,!1,w,w)}}
B.Vb.prototype={
T(){return B.hF6()}}
B.biI.prototype={
cfL(d){var w=d.c,v=B.hF8(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.l6()},
ln(d){var w,v,u,t=this
t.e.ff(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cfL(w)
u=new C.u(-v.a,-v.b).aF(0,t.w)
v=C.lc(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc5m(){var w=this.ch
return new C.u(w.a/2,w.b/2).ad(0,this.x)},
c5q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.BM[s]
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
aXQ(d){this.m(new B.es0(this,d))
C.eP()
B.lb("bell",D.ddf[A.o.G(A.d.cJ(D.BM,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.ml,m,m,m,new B.esb(n,d),m,m,m,m,"Share",m)],k),i=C.cm(new B.esc(n,l)),h=C.a([new B.dz("All",!1,new B.esd(n),A.a_D,A.aM,m)],k)
for(w=0;w<10;++w){v=D.BM[w]
h.push(new B.dz(v.a,n.z===v,new B.ese(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hy(A.aM,s,"Time",1,0,new B.esf(n),u/t)
u=n.w
u=B.hy(A.aM,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.esg(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lE:D.FK
return B.jE(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eK(h,"GO TO",m),t,u,new B.eK(C.a([new B.dz("Orbits",s,new B.esh(n),m,A.aM,m),new B.dz("Names",r,new B.esi(n),m,A.aM,m),new B.dz("Asteroids",q,new B.esj(n),m,A.aM,m),new B.dz("Music",p,new B.esk(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c5n(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.erZ(),m=C.m(20),l=C.I(q.j(0.6),A.r,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.A(C.a([k,A.ab,C.D(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kU,r,r,r),1),C.aH(r,r,r,r,A.G1,r,r,r,new B.erY(this),r,r,r,r,r,A.c7)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,D.ID,r,r,r)
v=n.$2("WIDTH",B.Gd(d.d*2)+" km")
u=p===0
p=C.A(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.Gd(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.es_().$1(v))
t=d.f
v=C.A(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.A(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.at,k,A.P,p,A.P,v,A.P,s,A.P,C.A(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.Vc,r,l,m,r,r,A.n),r,r,r,r,D.afY,r,r,r)}}
B.bq_.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.X()
w=C.M()
w.r=D.A5.gp(0)
a7.aY(new C.aa(0,0,0+a5,0+a6),w)
v=new C.eT()
v.dI(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc5m()
n=a5.w
if(a5.as)for(a6=A.d.gag(D.BM),t=new C.fx(a6,new B.eUa()),s=o.a,r=o.b;t.C();){q=a6.gU(0).c
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
p.delete()}i=B.hF7(A.d.gL(D.BM))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.M()
s=x.O
t.sau(new C.bR(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).aw(0,C.bU(o,a6)))
a7.ai(o,a6,t)
t=C.M()
t.sau(D.e8B.aw(0,C.bU(o,i)))
a7.ai(o,i,t)
if(a5.at){h=B.h7y("Sun",10.5,A.ad)
h.a6(a7,o.ad(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gag(D.BM),t=new C.fx(a6,new B.eUb()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gU(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.b0(l.z)
d=l.a
if(d==="Saturn"){J.bA(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.cu(A.J,j*1.3,j*4.2)
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bJ.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c4(a0),p)
p.delete()
w.restore()}a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.r3
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.sau(new C.bR(P.qf,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a19,a4).aw(0,C.bU(new C.u(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cVT[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.h7y(d,10.5,A.ad)
h.a6(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
aq(d){return!0}}
B.Uk.prototype={
T(){var w=x.i
return new B.aBX(new B.On(A.cI),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aBX.prototype={
csa(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c5p(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dYA
s.cy=new C.u(s.ay,0)
w=s.db
A.d.a8(w)
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
s.m(new B.dTE())},
a_(){this.a1()
this.l6()},
ln(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.ff(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yp[r]
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
break}}}if(A.d.d9(s,new B.dU6()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(v.length===0||A.d.gal(v).aC(0,i.cx).gcm()>120)v.push(i.cx)
if(v.length>700)A.d.cA(v,0)
if(i.cx.gcm()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bJO()
else n=n==="weight"?p.czl():p.bC4()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.daq[u]
v.push(new B.dz(t.b,p.d===t.a,new B.dTT(p,t),t.c,A.cv,o))}v=C.a([new B.eK(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dz("Hammer",!s,new B.dTU(p),Ah.FF,A.cv,o),new B.dz("Feather",s,new B.dTV(p),Z.Mw,A.cv,o),new B.dz(q,r,new B.dTZ(p),A.Fu,A.aW,o)],w)
q=p.w
A.d.v(v,C.a([new B.eK(r,o,o),B.hy(A.cv,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dU_(p),q),new B.eK(C.a([new B.fg(A.tw,"Drop!",new B.dU0(p),A.bc,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hy(A.cv,""+A.k.V(s)+" kg","Your weight",120,20,new B.dU1(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hy(A.cv,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dU2(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hy(A.cv,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dU3(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hy(A.cv,A.k.aa(r,1)+"x out","View",8,0.5,new B.dU4(p),r),new B.eK(C.a([new B.fg(A.n4,"Fire!",p.gc5o(),A.bc,o),new B.fg(A.tw,"Falls",new B.dU5(p),A.c,o),new B.fg(A.qL,"Orbit 7.7",new B.dTW(p),A.c,o),new B.fg(D.bCz,"Oval 9",new B.dTX(p),A.c,o),new B.fg(A.Bf,"Escape",new B.dTY(p),A.c,o)],w),o,o)],w))}return B.jE(A.cv,A.h6,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bJO(){return new C.C(D.bnp,C.cm(new B.dTD(this)),null)},
czl(){var w,v,u,t=null,s=[D.ewb,D.exy,D.exG,D.exZ,D.exE,D.ey3,D.ewJ,D.eyp,D.exj],r=x.p,q=C.a([D.fa1,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.C(A.cG,new C.co(A.aQ,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a6(62,t,new C.x(v.a,t,new C.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bF(1,A.bj,new C.AR(new B.dTF(this,v),t),t)],r),t),t))}q.push(A.at)
q.push(D.fcd)
return C.cB(q,t,A.iO,t,t,A.ai,!1)},
bC4(){return C.cm(new B.dTB(this))}}
B.b8T.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.X(),e=C.M()
e.r=D.A5.gp(0)
d.aY(new C.aa(0,0,0+h,0+g),e)
w=new C.eT()
w.dI(2)
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
e.sau(new C.bR(A.A,0.5,A.x,i,0,C.a([A.K,A.aW.j(0.35),A.K],x.O),D.d2e,i).aw(0,C.bU(g,p*1.1)))
d.ai(g,p*1.06,e)
e=C.M()
e.sau(D.e8v.aw(0,C.bU(g,p)))
d.ai(g,p,e)
o=g.ad(0,new C.u(0,-p))
f=f.r
e=x.v
n=new C.aQ(f,A.ap,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.E(new C.b5(u-16,s))
n.E(new C.ap(u,t-400*h-4))
n.E(new C.ap(u+16,s))
n.E(new C.bE())
s=C.M()
s.r=A.ak.gp(0)
d.aO(n,s)
s=o.ad(0,new C.u(0,-400*h-6))
u=C.M()
u.r=A.c.gp(0)
d.ai(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aQ(f,A.ap,i,i,e)
f=g.a
t=g.b
m.E(new C.b5(f+A.d.gL(u).a*h,t+A.d.gL(u).b*h))
for(u=C.dc(u,1,i,C.T(u).c),s=u.$ti,u=new C.bV(u,u.gM(0),s.k("bV<ai.E>")),s=s.k("ai.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bx(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.X()
f=C.M()
f.b=A.ae
f.c=2.4
f.d=A.bO
f.r=A.cv.j(0.9).gp(0)
d.aO(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.u(f.a*h,f.b*h))
h=C.M()
h.r=A.cv.j(0.4).gp(0)
h.z=G.mo
d.ai(k,7,h)
h=C.M()
h.r=A.c.gp(0)
d.ai(k,4,h)}},
aq(d){return!0}}
B.V3.prototype={
T(){return new B.biF(new C.cp(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.biF.prototype={
a_(){this.a1()
this.l6()},
ln(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Pa[l.e],i=D.Pa[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.ml,k,k,k,new B.ekV(l,d),k,k,k,k,"Share",k)],u)
s=C.D(C.b3(k,k,k,new B.bpy(f,g,v,k),A.f0),1)
r=g.a
q=v<10?A.k.aa(v,1):B.Gd(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.jh,A.L,k,k)
o=B.Gd(v*v*v)
n=A.a.c9(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.at,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A4.SB,A.L,k,k),A.bA,C.d(p+": "+B.Gd(w*2)+" km wide. "+r+": "+B.Gd(h*2)+" km wide.",k,k,k,k,k,k,A4.SK,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bpy,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Pa[m]
r.push(new B.dz(w.a,l.e===m,new B.ekW(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Pa[m]
w.push(new B.dz(s.a,l.f===m,new B.ekX(l,m),k,C.b0(s.c),k))}return B.jE(A.bZ,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.es(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eK(r,"FIRST",k),new B.eK(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.bpy.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.X()
w=C.M()
w.r=D.VS.gp(0)
d.aY(new C.aa(0,0,0+h,0+g),w)
v=new C.eT()
v.dI(6)
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
w=new B.eSj(d)
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
d.ai(l,n+3,w)
k=C.ii(i,i,i,i,C.dq(i,i,i,i,i,i,i,i,i,D.eWT,s.a),A.a5,A.ch,i,A.eq,A.cd)
k.eP()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbb(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbb(g)-6
h=g}k.a6(d,l.ad(0,new C.u(-w/2,h)))
j=C.ii(i,i,i,i,C.dq(i,i,i,i,i,i,i,i,i,D.f_a,t.a),A.a5,A.ch,i,A.eq,A.cd)
j.eP()
t=j.b
h=t.c
t=t.a.c
j.a6(d,m.ad(0,new C.u(-h/2,-t.gbb(t)/2)))},
aq(d){return!0}}
B.aK8.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv8.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsL()}}
B.aKH.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvm.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btj()}}
B.aKK.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvo.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btm()}}
B.OQ.prototype={}
B.Tn.prototype={
T(){return B.hF4()}}
B.bhm.prototype={
a_(){this.a1()
this.l6()},
ln(d){var w,v,u,t,s,r=this
r.f+=d
r.e.ff(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dF(70,"",500,0.3,0.5,"sine")}}A.d.bn(w,new B.dBz())},
aXR(d){var w,v,u,t=this.Q
if(t.A(0,A.au))return
w=this.gb5y()
v=d.aC(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcm()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.OQ(t,u,1.2,new C.wQ(1,30+A.cI.aj()*40,0.9,0.7).iE()))
B.lb("bell",60+A.k.V(12-u)*2,400,0.35)},
gb5y(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.K(m,new B.dBn(),C.T(m).k("K<1,N>")).fE(0,A.wx),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.ml,n,n,n,new B.dBo(o,d),n,n,n,n,"Share",n)],m)
v=C.cm(new B.dBp(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fmL(s)+" Suns"
t=B.hy(A.by,s,"Mass",1,0,new B.dBr(o),u/t)
u=C.a([new B.dz("Star (10)",!1,new B.dBs(o),n,A.by,n),new B.dz("Cygnus X-1 (21)",!1,new B.dBt(o),n,A.by,n),new B.dz("Milky Way core (4 million)",!1,new B.dBu(o),n,A.by,n),new B.dz("M87 (6.5 billion)",!1,new B.dBv(o),n,A.by,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lE:D.FK
return B.jE(A.by,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eK(u,"LIKE",n),new B.eK(C.a([new B.dz("Glowing ring",s,new B.dBw(o),n,A.by,n),new B.dz("Bent light",r,new B.dBx(o),n,A.by,n),new B.dz("Music",q,new B.dBy(o),p,A.by,n),new B.fg(A.jS,"Clear",new B.dBq(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
adr(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.eSU,w,w,w),A.bA,C.d(e,w,2,w,w,w,w,M.zd,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b8h.prototype={
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.X()
w=C.M()
w.r=D.bd2.gp(0)
b2.aY(new C.aa(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb5y()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
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
b0.z=T.Qk
b2.ai(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.wP,A.fC,d)
n.toString
k=Math.cos(a4)
$.X()
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
$.X()
b1=C.M()
b1.sau(new C.bR(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cIy,null).aw(0,C.bU(u,b0)))
b2.ai(u,b0,b1)
b1=C.M()
b1.r=A.w.gp(0)
b2.ai(u,s,b1)
b1=C.M()
b1.b=A.ae
b1.c=1
b1.r=A.by.j(0.55).gp(0)
b2.ai(u,s,b1)
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
o.z=G.mo
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
aq(d){return!0}}
B.adE.prototype={}
B.Ug.prototype={
T(){var w=x.r,v=x.g
return new B.bhN(new C.cp(null,x.A),new B.On(A.cI),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.bhN.prototype={
a_(){this.a1()
this.Z9()
this.l6()},
Z9(){var w,v,u,t,s,r,q,p,o=this,n=new C.eT()
n.dI(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.adE(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aB(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hg()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.adE(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cs1(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e_2
k.cx=D.e_5
w=new C.eT()
w.dI(9)
v=k.cy
A.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.adE(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
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
for(s=k.ay,r=x.S,s=C.dc(s,0,C.dJ(900,"count",r),C.T(s).c),o=s.$ti,s=new C.bV(s,s.gM(0),o.k("bV<ai.E>")),o=o.k("ai.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.dc(u,0,C.dJ(900,"count",r),C.T(u).c),r=u.$ti,u=new C.bV(u,u.gM(0),r.k("bV<ai.E>")),r=r.k("ai.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dF(110,"",900,0.5,0.45,"sine")},
ln(d){var w,v,u,t,s,r,q,p=this
p.e.ff(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aC(0,p.fx)
s=Math.max(0.25,t.gcm())
r=t.eE(0,s).aF(0,0.9/(s*s))
w=p.fy.ad(0,r.aF(0,u))
p.fy=w
v=p.cx.aC(0,r.aF(0,u))
p.cx=v
w=p.fx.ad(0,w.aF(0,u))
p.fx=w
v=p.CW.ad(0,v.aF(0,u))
p.CW=v
q=new B.dSb(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.ml,r,r,r,new B.dS1(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bdt(s,r),A.au),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bF,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ae.a6q,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bR,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.cYV[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dz(u.b,o,new B.dS2(s,u),r,A.fZ,r))}l.push(new B.dz("Collide",s.ch,new B.dS3(s),A.xG,A.bZ,r))
o=C.a([new B.eK(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hy(A.fZ,""+n,"Arms",6,2,new B.dS4(s),n)
l=s.r
A.d.v(o,C.a([n,B.hy(A.fZ,A.k.aa(l,1),"Winding",6,0.8,new B.dS5(s),l)],q))}n=s.as
o.push(B.hy(A.fZ,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dS6(s),n))
n=s.ax
o.push(B.hy(A.fZ,A.k.aa(n,1)+"x","Speed",4,0,new B.dS7(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lE:D.FK
o.push(new B.eK(C.a([new B.dz("Dark matter",n,new B.dS8(s),r,A.by,r),new B.dz("You are here",l,new B.dS9(s),r,A.aM,r),new B.dz("Music",w,new B.dSa(s),t,A.fZ,r)],q),r,r))
return B.jE(A.fZ,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.es(new C.an(A.W,r,A.b_,A.q,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.bdt.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.X()
w=C.M()
w.r=D.bf0.gp(0)
a3.aY(new C.aa(0,0,0+a1,0+a2),w)
v=new C.eT()
v.dI(3)
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
t.sau(new C.bR(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.c6s,a0).aw(0,C.bU(o,a2)))
a3.ai(o,a2,t)}m=new B.d77(a1.as)
a2=n*0.3
t=C.M()
t.sau(new C.bR(A.A,0.5,A.x,a0,0,C.a([A.h_.j(0.85),A.aI.j(0.3),A.K],x.O),a0,a0).aw(0,C.bU(o,a2)))
a3.ai(o,a2,t)
if(!a1.ch){l=C.M()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.G(q,360)
l.r=new H.mJ(1,r,q>200?0.45:0.55,1).iE().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.H()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.X()
a2=C.M()
a2.b=A.ae
a2.c=1.6
a2.r=A.aM.gp(0)
a3.ai(g,9,a2)
f=C.ii(a0,a0,a0,a0,D.eQ0,A.a5,A.ch,a0,A.eq,A.cd)
f.eP()
f.a6(a3,g.ad(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.M()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bg8.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bbb.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.X()
w=C.M()
w.r=A.h_.gp(0)
a3.ai(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.M()
w.r=A.il.gp(0)
a3.ai(a1,5,w)}},
aq(d){return!0}}
B.V_.prototype={
T(){return new B.biE(new C.cp(null,x.A),new B.On(A.cI),$,A.bx,0,C.a([],x.X),null,null)}}
B.biE.prototype={
a_(){this.a1()
this.l6()},
ln(d){var w,v,u,t=this
t.e.ff(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.G(t.r+d*0.04*v,1)
else{w=A.k.G(t.w+d*0.05*v,1)
t.w=w
u=A.k.bw(w*4)
if(u!==A.k.bw(t.as))B.lb("bell",60+u*4,500,0.35)
t.as=u}},
gcnN(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcen(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.ml,q,q,q,new B.ek9(r,d),q,q,q,q,"Share",q)],p),n=C.D(new C.es(C.b3(q,q,q,new B.boO(r,q),A.f0),r.d),1)
if(r.f==="seasons")w=r.gcnN()
else{w=r.gcen()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A5.SJ,A.L,q,q),A.f,q,q,q,q,q,q,q,L.ag7,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A0.xS:A.iP
t=r.Q
s=t?A.lE:D.FK
s=C.a([new B.eK(C.a([new B.dz("Seasons",n==="seasons",new B.eka(r),A.y6,A.bs,q),new B.dz("Moon phases",n==="moon",new B.ekb(r),A.vc,A.bs,q),new B.dz(u,!1,new B.ekc(r),v,A.bs,q),new B.dz("Music",t,new B.ekd(r),s,A.bs,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hy(A.bs,D.cYg[A.o.G(A.k.bw(n*12),12)],"Month",1,0,new B.eke(r),n)
v=r.z
A.d.v(s,C.a([n,B.hy(A.bs,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.ekf(r),v)],p))}else{p=r.w
s.push(B.hy(A.bs,""+(A.k.bw(p*29.5)+1),"Day of month",1,0,new B.ekg(r),p))}p=r.y
s.push(B.hy(A.bs,A.k.aa(p,1)+"x","Speed",4,0.2,new B.ekh(r),p))
return B.jE(A.bs,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.boO.prototype={
a6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.X(),b8=C.M()
b8.r=D.A5.gp(0)
b9.aY(new C.aa(0,0,0+b5,0+b6),b8)
w=new C.eT()
w.dI(4)
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
u=C.cu(p,n*2,o*2)
t=C.M()
t.b=A.ae
t.c=1
t.r=A.b5.gp(0)
b9.i2(u,t)
t=C.M()
t.sau(D.e8x.aw(0,C.bU(p,34)))
b9.ai(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).eE(0,p.aC(0,l).gcm())
J.bA(b8.save())
b8.translate(l.a,l.b)
s=C.M()
s.r=D.bcZ.gp(0)
b9.ai(A.J,k,s)
J.bA(b8.save())
b7=new C.aQ(b7.r,A.ap,b4,b4,C.a([],x.v))
b7.E(new C.kG(C.bU(A.J,k)))
b9.tR(0,b7)
b7=i.aF(0,k).aF(0,0.35)
s=k*1.1
b6=C.M()
b6.sau(D.e8G.aw(0,C.bU(A.J,s)))
b9.ai(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aF(0,k).aF(0,1.7)
b5=h.aF(0,k).aF(0,1.7)
t=C.M()
t.c=2
t.r=A.cr.gp(0)
b9.bA(b7,b5,t)
t=h.aF(0,k).aF(0,1.7)
b5=C.M()
b5.r=A.cr.gp(0)
b9.ai(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.ii(b4,b4,b4,b4,C.dq(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aP0,b5),A.a5,A.ch,b4,A.eq,A.cd)
f.eP()
f.a6(b9,l.ad(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.M()
r.b=A.ae
r.c=1
r.r=A.b5.gp(0)
b9.ai(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.M()
r.sau(new C.bR(new C.d9(-0.5,0),1.1,A.x,b4,0,C.a([D.b8N,D.ae6],x.O),D.cPY,b4).aw(0,C.bU(p,k)))
b9.ai(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.M()
r.r=D.b6i.gp(0)
b9.ai(a1,a2,r)
J.bA(b8.save())
b7=b7.r
r=x.v
d=new C.aQ(b7,A.ap,b4,b4,C.a([],r))
d.E(new C.kG(C.bU(a1,a2)))
b9.tR(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.M()
a3.r=A.bV.gp(0)
b9.aY(new C.aa(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).eE(0,a1.aC(0,p).gcm())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.ar4[a5]
a7=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aW.j(0.45).gp(0)
a7.z=A.je
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.M()
b6.r=D.b6d.gp(0)
b9.ai(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bA(b8.save())
b6=new C.aQ(b7,A.ap,b4,b4,C.a([],r))
b6.E(new C.kG(C.bU(a8,a9)))
b9.tR(0,b6)
s=s.w
b1=new C.aQ(b7,A.ap,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.E(new C.b5(u,b5))
b6=b2>0
b1.aB3(new C.u(u,t+a9),b6,new C.aV(a9,a9))
if(b0<0.5)b6=b2<0
b1.aB3(new C.u(u,b5),b6,new C.aV(a9*Math.abs(1-2*b0),a9))
b6=C.M()
b6.r=A.bV.gp(0)
b9.aO(b1,b6)
b8.restore()
b8=C.M()
b8.b=A.ae
b8.c=1
b8.r=A.b5.gp(0)
b9.ai(a8,a9,b8)
b3=C.ii(b4,b4,b4,b4,D.eQ1,A.a5,A.ch,b4,A.eq,A.cd)
b3.eP()
b3.a6(b9,a8.ad(0,new C.u(-b3.b.c/2,a9+6)))}},
aq(d){return!0}}
B.aJF.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv0.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsf()}}
B.aK3.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bv7.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsF()}}
B.aKG.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
B.bvl.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a9(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bti()}}
var z=a.updateTypes(["~()","R(tc)","R(a3q)","ay<~>()","R(BS)","G(tc,G)","N(N,tc)","R(BO)","R(Yl)","R(aai)","R(uN)","R(a28)","R(nd)","R(ZS)","R(ab5)","G(G)","Tt()","U4()","Tj()","Ui()","UB()","UD()","Ts()","UX()","Vc()","UY()","UU()","Vj()","Tr()","Vo()","R(mr)","UO()","UT()","adJ(Y,G)","acD(Y,G)","~(a4<@,@>)","G(BO,BO)","n(e7)","R(adz)","R(a_y)","R(C2)","R(aaN)","R(acH)","R(aaw)","G(G,qy)","G(G,BS)","n(qy)","~(qy,ak<n>,G)","qy?(BS)","R(qy)","r(n,a_l)","R(P6)","~(A1)","R(aaD)","N(G?)","Vq()","R(Fd)","R(abU)","N(G)","U5()","N(OQ)","R(a9e)","To()","a7i()","~(Gu,n,u,w,N)","~(n,tc)","UR()","Uw(Y)","MB(Y)","TN(Y,bo<N>,bo<N>)","Vu()","Uc()","Tp()","U3()","UP()","V2()","Vn()","UN()","~(n)","cn(aa_)","R(a9Z)","Uj()","Vb()","Uk()","Tn()","Ug()","V3()","V_()","TP()","R(OQ)","~(b9)"])
B.foU.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.ffH.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gL(d.e.split(". "))+"."},
$S:z+37}
B.fm_.prototype={
$1(d){var w
if(!this.a.L3(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fm0.prototype={
$1(d){return d.x},
$S:z+1}
B.foR.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.foS.prototype={
$1(d){var w
if(!this.a.L3(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.foT.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e1B.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e1C.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e1D.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.m0(v,A.dV,A.i6)}},
$S:8}
B.e1O.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e1P.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e1K.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e1I.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dB(0,0,0,d,0,0),new B.e1J(w,this.b,e)))},
$S:1819}
B.e1J.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e1L.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVi().ais(0,u[1],u[2],u[3])
u[4].bH(0,new B.e1G(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e1H(w.a,v,w.f,w.r))},
$S:0}
B.e1G.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:194}
B.e1H.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bw(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e1M.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVi().ajd(t,u[1],s,u[3])
E.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e1F(w.a,v,w.e,w.f))},
$S:0}
B.e1F.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bw(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e1N.prototype={
$0(){E.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e1E(w,this.b))},
$S:0}
B.e1E.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e1S.prototype={
$0(){var w=this.a
return w.m(new B.e1R(w))},
$S:0}
B.e1R.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e1T.prototype={
$0(){var w=this.a
return w.m(new B.e1Q(w))},
$S:0}
B.e1Q.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e1U.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.MO()},
$S:0}
B.e1V.prototype={
$0(){return this.a.Xh(this.b)},
$S:0}
B.e1W.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.MO():w.aTK()},
$S:2}
B.e1X.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.MO():w.aTK()},
$S:0}
B.ehA.prototype={
$2(d,e){return d+e},
$S:1820}
B.ehU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.ehT(w,d))},
$S:140}
B.ehT.prototype={
$0(){var w=C.aN(J.q(this.b,"unlocked"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.ehV.prototype={
$0(){},
$S:0}
B.ehW.prototype={
$0(){},
$S:0}
B.ehC.prototype={
$0(){return this.a.m(new B.ehB(this.b,this.c))},
$S:0}
B.ehB.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.ehr.prototype={
$1(d){return this.a.cx===d},
$S:33}
B.ehs.prototype={
$1(d){return this.a.cx=d},
$S:28}
B.eht.prototype={
$1(d){return this.a.cy===d},
$S:33}
B.ehu.prototype={
$1(d){return this.a.cy=d},
$S:28}
B.ehv.prototype={
$1(d){return this.a.db===d},
$S:33}
B.ehw.prototype={
$1(d){return this.a.db=d},
$S:28}
B.ehx.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:33}
B.ehy.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.K(0,d)},
$S:28}
B.ehz.prototype={
$0(){var w=this.a
return w.m(w.gauR())},
$S:0}
B.ehp.prototype={
$1(d){return this.a.$1(!0)},
$S:82}
B.ehq.prototype={
$1(d){return this.a.$1(!1)},
$S:145}
B.eho.prototype={
$1(d){return this.a.$1(!1)},
$S:212}
B.ehN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bf8(o,p),n)
w=this.b
v=B.bxI("WORLD",w.a,w.c)
u=B.bxI("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cr:A.bc
t=B.bxI("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.BG[o.db].d?A.cr:A.c
q=x.p
s=C.a([v,u,t,B.bxI("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bxI("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.A(s,A.m,p,A.hL,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bB3(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qZ[w].a+".":"You landed on every world!"
v=C.a([new B.fg(A.mh,"Again",new B.ehI(o),A.c,p),new B.fg(A.qM,"Rebuild",new B.ehJ(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fg(A.j9,"Next world",new B.ehK(o),A.bc,p))
n.push(B.hbe("Perfect landing!",w,A.bc,v))}if(o.as==="crashed")n.push(B.hbe("Crash!",o.at,A.cr,C.a([new B.fg(A.mh,"Try again",new B.ehL(o),A.bc,p),new B.fg(A.qM,"Rebuild",new B.ehM(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b_,A.q,n,p)},
$S:64}
B.ehI.prototype={
$0(){var w=this.a
return w.m(w.gauR())},
$S:0}
B.ehJ.prototype={
$0(){var w=this.a
return w.m(new B.ehF(w))},
$S:0}
B.ehF.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.ehK.prototype={
$0(){var w=this.a
return w.m(new B.ehE(w))},
$S:0}
B.ehE.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.ehL.prototype={
$0(){var w=this.a
return w.m(w.gauR())},
$S:0}
B.ehM.prototype={
$0(){var w=this.a
return w.m(new B.ehD(w))},
$S:0}
B.ehD.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.ehO.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.ehH(v,w))},
$S:0}
B.ehH.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.ehP.prototype={
$1(d){return this.a.y=d},
$S:9}
B.ehQ.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.ehR.prototype={
$1(d){return this.a.z=d},
$S:9}
B.ehS.prototype={
$0(){var w=this.a
return w.m(new B.ehG(w))},
$S:0}
B.ehG.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dC0.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.h6A
if(q==null)q=$.h6A=B.cCB()
w=3
return C.b(C.iJ(C.a([q,$.tR().bdy("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kp(0,C.cO(J.q(s,1)))
q.m(new B.dC_(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:51}
B.dC_.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dBD.prototype={
$0(){return this.a.bS1(C.aU(J.q(this.b,"group")))},
$S:0}
B.dBE.prototype={
$1(d){return A.a.aT(A.o.fP(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:319}
B.dC1.prototype={
$0(){return B.a7h("kick",0.25)},
$S:0}
B.dBF.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dBG.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dBH.prototype={
$0(){return B.a7h("kick",0.5)},
$S:0}
B.dBI.prototype={
$0(){return E.dF(1300+this.a.R8.aB(900),"",40,0,0.2,"square")},
$S:0}
B.dBK.prototype={
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
u=w}if(u.cx!=null&&!A.d.b8(u.d.e,new B.dBJ(u)))u.cx=null
u.go=0},
$S:0}
B.dBJ.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.awB(d)},
$S:z+11}
B.dBA.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dBB.prototype={
$0(){var w=this.a
return w.m(w.gc1d())},
$S:0}
B.dBC.prototype={
$0(){return this.a.ag6(null)},
$S:0}
B.dBR.prototype={
$0(){var w=this.a.as
return w==null?null:w.eT(0,C.E(["t","shot"],x.N,x.z))},
$S:0}
B.dBS.prototype={
$0(){return this.a.cw9(this.b.a)},
$S:0}
B.dBT.prototype={
$0(){return this.a.ag6(this.b)},
$S:0}
B.dBU.prototype={
$1(d){var w=this.a
return w.m(new B.dBQ(w,d))},
$S:6}
B.dBQ.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dBV.prototype={
$0(){var w=this.a
return w.m(new B.dBP(w,this.b))},
$S:0}
B.dBP.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dBW.prototype={
$0(){var w=this.a
return w.m(new B.dBO(w))},
$S:0}
B.dBO.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dBX.prototype={
$0(){var w=this.a
return w.m(new B.dBN(w))},
$S:0}
B.dBN.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eT(0,C.E(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Jy},
$S:0}
B.dBY.prototype={
$0(){var w=this.a
return w.m(new B.dBM(w))},
$S:0}
B.dBM.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aWj()
else w.p2=null},
$S:0}
B.dBZ.prototype={
$0(){var w=this.a
return w.m(new B.dBL(w))},
$S:0}
B.dBL.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.bZa.prototype={
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
$S:300}
B.bZb.prototype={
$1(d){var w=new C.rv([],[]).pl(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:479}
B.f9X.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)},
$S:227}
B.f9Y.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)||w.h(d,1)},
$S:227}
B.f9Z.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)!==w.h(d,1)},
$S:227}
B.fa5.prototype={
$1(d){return!J.q(d,0)},
$S:227}
B.fa6.prototype={
$1(d){var w=J.a8(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:227}
B.fa7.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:227}
B.dEb.prototype={
$1(d){return this.a.arz(0)},
$S:8}
B.dDQ.prototype={
$0(){var w=this.b
return this.a.cx=new C.K(w,C.hS5(),C.T(w).k("K<1,G>")).fH(0)},
$S:0}
B.dDT.prototype={
$1(d){return""+d},
$S:78}
B.dEc.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dDO.prototype={
$1(d){return this.a.arz(this.b)},
$S:8}
B.dDP.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.avk(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mo(0,d,a1.lS(0.15,0.3))
u=a1.mo(0,d,a1.lS(0.15,0.62))
t=a1.mo(0,"and",a1.lS(0.48,0.46))
s=a1.mo(0,a0,a1.lS(0.82,0.46))
a1=t.a
w.push(new B.nd(v.a,a1,0))
w.push(new B.nd(u.a,a1,1))
w.push(new B.nd(a1,s.a,0))
break
case 1:v=a1.mo(0,d,a1.lS(0.12,0.25))
u=a1.mo(0,d,a1.lS(0.12,0.65))
r=a1.mo(0,"xor",a1.lS(0.46,0.25))
q=a1.mo(0,"and",a1.lS(0.46,0.65))
p=a1.avj(0,a0,a1.lS(0.82,0.25),0)
o=a1.avj(0,a0,a1.lS(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.nd(a1,n,0))
m=u.a
w.push(new B.nd(m,n,1))
l=q.a
w.push(new B.nd(a1,l,0))
w.push(new B.nd(m,l,1))
w.push(new B.nd(n,p.a,0))
w.push(new B.nd(l,o.a,0))
break
case 2:k=a1.mo(0,"clock",a1.lS(0.15,0.4))
j=a1.mo(0,"not",a1.lS(0.45,0.65))
s=a1.mo(0,a0,a1.lS(0.82,0.3))
i=a1.mo(0,"buzzer",a1.lS(0.82,0.65))
a1=k.a
w.push(new B.nd(a1,s.a,0))
n=j.a
w.push(new B.nd(a1,n,0))
w.push(new B.nd(n,i.a,0))
break
default:h=a1.mo(0,d,a1.lS(0.12,0.25))
g=a1.mo(0,d,a1.lS(0.12,0.7))
f=a1.mo(0,"nor",a1.lS(0.5,0.25))
e=a1.mo(0,"nor",a1.lS(0.5,0.7))
s=a1.mo(0,a0,a1.lS(0.86,0.25))
a1=f.a
w.push(new B.nd(g.a,a1,0))
n=e.a
w.push(new B.nd(n,a1,1))
w.push(new B.nd(h.a,n,0))
w.push(new B.nd(a1,n,1))
w.push(new B.nd(a1,s.a,0))}},
$S:0}
B.dDU.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.avk(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.BO(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.mo(0,w.e,o.lS(0.86,0.5))},
$S:0}
B.dDJ.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dDK.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dDL.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dDM.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dDN.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.abv(this.c)
if(v.ax)B.Bb("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gL(w)
v.CW=!1
if(v.ax)E.dF(140,"",250,0,0.3,"square")}},
$S:0}
B.dDV.prototype={
$0(){},
$S:0}
B.dDW.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
B.dDX.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dDS.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bn(w.e,new B.dDR(v))
w.cy=null},
$S:0}
B.dDR.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dDI.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mo(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dE5.prototype={
$0(){var w=this.a
return w.m(new B.dE4(w))},
$S:0}
B.dE4.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dE6.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.x=u
return C.aE(A.c5,C.js(C.b3(w,w,w,new B.b9k(v,w),u),A.q,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dE_(v),w,w,w,new B.dE0(v),new B.dE1(v),new B.dE2(v),w,w,w,w,w,w,w,w,w,w,new B.dE3(v),w,w,w,!1,A.a8)},
$S:35}
B.dE3.prototype={
$1(d){return this.a.c2K(d.b)},
$S:49}
B.dE1.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cba(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aw7(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:43}
B.dE2.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dE0.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bVA(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bn(v,new B.dDY(w))
u=t.as
u.toString
v.push(new B.nd(u,w.a,w.b))
C.jL()}}t.z=t.as=null},
$S:37}
B.dDY.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dE_.prototype={
$1(d){return this.a.au8(d.b)},
$S:292}
B.dE7.prototype={
$0(){return this.a.bwX(this.b.a)},
$S:0}
B.dE8.prototype={
$0(){return this.a.arz(this.b.a)},
$S:0}
B.dE9.prototype={
$0(){var w=this.a
return w.m(new B.dDZ(w))},
$S:0}
B.dDZ.prototype={
$0(){var w=this.a
w.avk(0)
w.ay=null},
$S:0}
B.dEa.prototype={
$0(){return this.a.crZ(this.b)},
$S:0}
B.cJn.prototype={
$0(){var w=this,v=null,u=C.ii(v,v,v,v,C.dq(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.ch,v,A.eq,A.cd)
u.eP()
return u},
$S:328}
B.dJD.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dJC.prototype={
$0(){return this.a.d=null},
$S:0}
B.dJF.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bXm()},
$S:121}
B.dJE.prototype={
$0(){return C.a5(this.a,!1).m7()},
$S:0}
B.fan.prototype={
$0(){return D.dTC},
$S:z+55}
B.fao.prototype={
$0(){return D.drM},
$S:z+59}
B.fap.prototype={
$0(){return D.doF},
$S:z+62}
B.faA.prototype={
$0(){return D.dT1},
$S:z+63}
B.faC.prototype={
$0(){return D.dy9},
$S:z+66}
B.faD.prototype={
$0(){return D.drI},
$S:z+88}
B.faE.prototype={
$0(){return D.drL},
$S:z+17}
B.faF.prototype={
$0(){return D.dkQ},
$S:z+18}
B.faG.prototype={
$0(){return D.duf},
$S:z+19}
B.faH.prototype={
$0(){return D.dvS},
$S:z+20}
B.faI.prototype={
$0(){return D.dvU},
$S:z+21}
B.faq.prototype={
$0(){return D.dqU},
$S:z+22}
B.far.prototype={
$0(){return D.dAT},
$S:z+23}
B.fas.prototype={
$0(){return D.dSJ},
$S:z+24}
B.fat.prototype={
$0(){return D.dQM},
$S:z+25}
B.fau.prototype={
$0(){return D.dzy},
$S:z+26}
B.fav.prototype={
$0(){return D.dSR},
$S:z+27}
B.faw.prototype={
$0(){return D.dqT},
$S:z+28}
B.fax.prototype={
$0(){return D.dT0},
$S:z+29}
B.fay.prototype={
$0(){return D.dqV},
$S:z+16}
B.faz.prototype={
$0(){return D.dw9},
$S:z+31}
B.faB.prototype={
$0(){return D.dzx},
$S:z+32}
B.eRR.prototype={
$2(d,e){return new B.adJ($.bCb()[e],new B.eRQ(e,this.a),null)},
$S:z+33}
B.eRQ.prototype={
$0(){var w=this.a,v=F.aC2.h(0,$.bCb()[w].a)
$.aqq=v==null?"music":v
C.a5(this.b,!1).ce(C.ej(new B.eRO(w),!1,null,x.H))},
$S:0}
B.eRO.prototype={
$1(d){return $.bCb()[this.a].e.$0()},
$S:41}
B.eRS.prototype={
$2(d,e){return new B.acD(D.auY[e],new B.eRP(this.a,e),null)},
$S:z+34}
B.eRP.prototype={
$0(){return this.a.d.$1(D.auY[this.b])},
$S:0}
B.eRx.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eRw.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eRv.prototype={
$1(d){var w=this
return new C.e2(new B.eRu(w.a,w.b,w.c,w.d),null)},
$S:20}
B.eRu.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.f9N,A.at,D.fg4,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aV(12,12)
m=new C.aV(12,12)
m=C.a([new C.bF(1,A.bj,C.aL(d,A.T,!1,d,!0,A.q,d,C.aM(),r[p],d,d,d,d,d,2,new C.e0(d,d,d,d,d,d,d,d,d,d,"Title",d,G.CU,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ah,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iD,!0,A.a5,d,A.am,d,d,d,d),d),A.ab,new C.bF(2,A.bj,C.aL(d,A.T,!1,d,!0,A.q,d,C.aM(),q[p],d,d,d,d,d,2,new C.e0(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.CU,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ah,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iD,!0,A.a5,d,A.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dcb[l]
j=new C.aV(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}h=A.d.gL(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}g=A.d.gL(i)}else g=A.bF
f=new C.az(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(C.aE(d,C.p(d,C.W(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bP(f,f,f,f),new C.bp(j,j,j,j),d,d,A.n),d,d,d,A.fx,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eRs(a3,p,u,k),d,d,d,d,d,d,!1,A.a8))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.f_Q,d,d,d,d,d,d,d,d,d),A.ao,new C.co(A.aQ,A.e,A.j,A.m,d,A.p,d,0,m,d),A.P,new C.a6(d,44,C.cB(n,d,d,d,d,A.aQ,!1),d),A.ay],w))}v.push(C.bJ(A.zi,new B.eRt(t,r,q,u,a2),d))
return new C.C(new C.Q(0,0,0,a1.f.d),C.bn(!0,new C.cU(new C.aY(0,1/0,0,a0.a.b*0.86),C.cB(v,d,A3.AG,d,d,A.ai,!0),d),!0,!1,A.ag,!0,!0),d)},
$S:106}
B.eRs.prototype={
$0(){var w=this
return w.a.$1(new B.eRr(w.b,w.c,w.d))},
$S:0}
B.eRr.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eRt.prototype={
$0(){var w=this,v=w.a
v.m(new B.eRq(v,w.b,w.c,w.d))
C.a5(w.e,!1).N(null)},
$S:0}
B.eRq.prototype={
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
B.eRF.prototype={
$0(){var w=this.a
return w.m(new B.eRE(w))},
$S:0}
B.eRE.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eRG.prototype={
$0(){return B.qF(this.b,this.a.f,"scene")},
$S:0}
B.eRH.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gL(u),A.d.gal(u),0.4)
u.toString
w=this.a.gYx().x
w===$&&C.c()
return C.bZ(v,new C.o(v,v,v,v,v,new C.bR(D.aUd,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bX],x.O),v,v),A.n),A.bd)},
$S:298}
B.eRI.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f1(A.A,C.c6(new C.h3(C.a([u.gtE(),u.gYx()],x.dS)),new B.eRD(u,this.b,v),w),A.f,A.eg),w,w,w)},
$S:247}
B.eRD.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtE().x
r===$&&C.c()
w=r<0.9?1:1-B.bp7(r,0.9,0.98)
v=s.gYx().x
v===$&&C.c()
u=A.dA.av(0,v)
switch(s.gavl().a){case 0:s=s.bw8(t.b,r,u,t.c)
break
case 1:s=s.bMk(t.b,r,u,t.c)
break
case 2:s=s.cwF(t.b,r,u,t.c)
break
case 3:s=s.bz4(t.b,r,u,t.c)
break
case 4:s=s.bCg(t.b,r,u,t.c)
break
case 5:s=s.bBu(t.b,r,u,t.c)
break
default:s=null}return C.db(s,w)},
$S:211}
B.eRJ.prototype={
$2(d,e){var w=C.atR(this.b),v=this.c.d,u=C.aq(A.d.gL(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gL(v),A.d.gal(v),0.4)
v.toString
v=w.cEU(u,A.bF,v,3.5)
u=this.a
w=u.gtE().x
w===$&&C.c()
return C.a90(C.kT(null,null,null,1,0,new B.eRC(u),A.k.D(w,0,1)),v)},
$S:1824}
B.eRC.prototype={
$1(d){var w=this.a
w.gtE().sp(0,d)
if(w.as)w.m(new B.eRy(w))},
$S:6}
B.eRy.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eRK.prototype={
$0(){var w=this.a
w.gtE().sp(0,0)
w.aeR()},
$S:0}
B.eRL.prototype={
$1(d){var w=this.a
w.m(new B.eRB(w,d))
if(w.as)w.aeR()},
$S:6}
B.eRB.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eRM.prototype={
$0(){var w=this.a
w.m(new B.eRA(w,this.b))
w.gtE().sp(0,0)
if(w.as)w.aeR()},
$S:0}
B.eRA.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eRN.prototype={
$0(){var w=this.a
return w.m(new B.eRz(w,this.b))},
$S:0}
B.eRz.prototype={
$0(){var w=C.B(this.b,x.G)
return this.a.w=w},
$S:0}
B.eRo.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1825}
B.eRp.prototype={
$1(d){return d.b},
$S:1826}
B.ddW.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.ddX.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.ddT.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.ddU.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.ddV.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.ddY.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.ddZ.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.de_.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.de0.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.de1.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.de2.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.de3.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.de4.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.de5.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.egV.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.egK.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.egM.prototype={
$2(d,e){return d+e.d*7+A.o.G(A.a.gX(e.b),97)},
$S:z+44}
B.egN.prototype={
$2(d,e){return d+A.o.G(A.a.gX(e.a),31)+A.o.G(A.a.gX(e.b),17)},
$S:z+45}
B.egQ.prototype={
$1(d){var w=D.mn.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.G(d.d,u)]+")":t},
$S:z+46}
B.egR.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.T(q),o=x.dg,n=C.B(new C.e6(new C.cQ(new C.a2(q,new B.egS(d),p.k("a2<1>")),new B.egT(r),p.k("cQ<1,qy?>")),o),o.k("H.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aI(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.L)(n),++v){u=n[v]
if(w.length>=6)return
t=C.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.egS.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.egT.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.egO.prototype={
$1(d){return D.mn.h(0,d.b).c===D.wl},
$S:z+49}
B.egP.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.ehk.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.uO(0,u)
w.aGz(A.o.an(v,1000))},
$S:8}
B.egU.prototype={
$0(){},
$S:0}
B.egG.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$$0)
case 6:e.ar("String","ngmy_core_reaction_lab_v1",s.a.d.ae())
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
B.egX.prototype={
$1(d){var w=null,v=this.a.b
return C.bn(!0,C.v(C.a([A.P,C.dN(!1,w,w,w,!0,w,w,w,!0,w,C.W(D.mn.h(0,v).b,D.mn.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fqQ,w,C.d(D.mn.h(0,v).a,w,w,w,w,w,w,A.hn,w,w,w),w,w,w),C.dN(!1,w,w,w,!0,w,w,w,!0,w,V.alT,w,w,w,w,new B.egW(d),!1,w,w,w,w,w,w,w,D.fiN,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
B.egW.prototype={
$0(){C.a5(this.a,!1).N(!0)
return null},
$S:0}
B.egZ.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e1Q],x.p)
for(w=0;w<6;++w){v=D.avg[w]
s.push(C.dN(!1,u,u,u,!0,u,u,u,!0,u,D.bN5,u,u,u,u,new B.egY(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.lk,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.hn,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bn(!0,new C.cU(new C.aY(0,1/0,0,t.a.b*0.7),C.cB(s,u,D.bt0,u,u,A.ai,!0),u),!0,!1,A.ag,!0,!0)},
$S:27}
B.egY.prototype={
$0(){C.a5(this.a,!1).N(this.b)
return null},
$S:0}
B.egJ.prototype={
$1(d){var w=null
return C.eh(C.a([C.bK(!1,A.de,w,w,!0,w,w,new B.egH(d),w,w),C.bK(!1,A.CY,w,w,!0,w,w,new B.egI(d),w,w)],x.p),w,w,F.mQ,D.fgf,w,w,w,w,D.fj4,w)},
$S:19}
B.egH.prototype={
$0(){C.a5(this.a,!1).N(!1)
return null},
$S:0}
B.egI.prototype={
$0(){C.a5(this.a,!1).N(!0)
return null},
$S:0}
B.ehi.prototype={
$0(){var w=this.a
return w.m(new B.ehh(w))},
$S:0}
B.ehh.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ehj.prototype={
$2(d,e){var w,v,u,t=null,s=new C.at(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.m8(new B.eh8(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b2R:t
v=C.a([C.b3(u,t,t,new B.bf6(w,v,new B.eh9(r),new B.eha(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e_(C.c6(w,new B.ehb(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bDV())
return C.aE(A.c5,C.js(new C.an(A.W,t,A.b_,A.q,v,t),A.q,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.ehc(r),t,r.gccr(),t,new B.ehd(r),new B.ehe(r),new B.ehf(r),t,t,t,t,t,t,t,t,t,t,new B.ehg(r),t,t,t,!1,A.a8)},
$S:35}
B.eh8.prototype={
$0(){return this.a.aaC(this.b)},
$S:0}
B.ehg.prototype={
$1(d){return this.a.cur(d.b)},
$S:49}
B.ehe.prototype={
$1(d){return this.a.ccs(d.b)},
$S:43}
B.ehf.prototype={
$1(d){return this.a.cct(d.b)},
$S:18}
B.ehd.prototype={
$1(d){return this.a.aZv()},
$S:37}
B.ehc.prototype={
$1(d){return this.a.abh(d.b)},
$S:292}
B.eh9.prototype={
$0(){return this.a.z},
$S:648}
B.eha.prototype={
$0(){return this.a.Q},
$S:717}
B.ehb.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bIa()
if(p.length===0)return A.bH
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.r,1)
t=C.a([D.fdL,A.cZ],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.L)(p),++r)t.push(new C.x(p[r],q,D.eZB,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h3,q,q,q)},
$S:60}
B.egL.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.r,1),s=x.p
return new C.C(A.e3,C.A(C.a([C.p(w,C.W(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bf,C.D(C.v(C.a([C.d(f,w,w,w,w,w,w,A5.SJ,w,w,w),A.bA,C.d(g,w,w,w,w,w,w,F.SR,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1828}
B.eh4.prototype={
$0(){var w=this.a.c
w.toString
return C.a5(w,!1).m7()},
$S:0}
B.eh5.prototype={
$0(){var w=this.a
return w.m(new B.eh3(w))},
$S:0}
B.eh3.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.eh6.prototype={
$0(){var w=this.a
return w.m(new B.eh2(w))},
$S:0}
B.eh2.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.eh7.prototype={
$0(){var w=this.a
return w.m(new B.eh1(w))},
$S:0}
B.eh1.prototype={
$0(){return this.a.r=!0},
$S:0}
B.eh0.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mn.gdL(D.mn),w=w.gag(w);w.C();){v=w.gU(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.L)(p),++r)u.push(s.cpo(p[r]))
return new C.C(I.afp,C.v(C.a([new C.C(S.ah2,w,q),C.A(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.eh_.prototype={
$0(){return this.a.c2P(this.b)},
$S:0}
B.ddS.prototype={
$0(){var w=this,v=null,u=C.ii(v,v,v,v,C.dq(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.ch,v,A.eq,A.cd)
u.eP()
return u},
$S:328}
B.esL.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bn(o,new B.esJ(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.esK())},
$S:8}
B.esJ.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.esK.prototype={
$0(){},
$S:0}
B.esm.prototype={
$0(){},
$S:0}
B.esl.prototype={
$0(){},
$S:0}
B.esv.prototype={
$0(){return B.qF(this.b,this.a.d,"spark-painter")},
$S:0}
B.esx.prototype={
$1(d){return this.a.aWR(0,d.b)},
$S:43}
B.esB.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gcm()>2.5}else w=!1
if(w)t.a.push(u)
v.aQ2(u)
v.c5Q(u)
return null},
$S:18}
B.esw.prototype={
$1(d){return this.a.aWQ()},
$S:37}
B.esC.prototype={
$1(d){return this.a.aWR(0,d.b)},
$S:22}
B.esD.prototype={
$1(d){return this.a.aWQ()},
$S:49}
B.esE.prototype={
$0(){var w=this.a
return w.m(new B.esu(w,this.b))},
$S:0}
B.esu.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.esF.prototype={
$0(){var w=this.a
return w.m(new B.est(w))},
$S:0}
B.est.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.esG.prototype={
$0(){var w=this.a
return w.m(new B.ess(w,this.b))},
$S:0}
B.ess.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.esH.prototype={
$1(d){var w=this.a
return w.m(new B.esr(w,d))},
$S:6}
B.esr.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.esI.prototype={
$0(){var w=this.a
return w.m(new B.esq(w))},
$S:0}
B.esq.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.esy.prototype={
$0(){var w=this.a
return w.m(new B.esp(w))},
$S:0}
B.esp.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.esz.prototype={
$0(){var w=this.a
return w.m(new B.eso(w))},
$S:0}
B.eso.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.esA.prototype={
$0(){var w=this.a
return w.m(new B.esn(w,this.b))},
$S:0}
B.esn.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.ezk.prototype={
$0(){return B.qF(this.b,this.a.d,"title")},
$S:0}
B.ezl.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIh().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bXw(v[t],t,s,q,u))
return new C.C(A.fy,C.c_(A.fM,w,A.rw,0,0),null)},
$S:685}
B.ezm.prototype={
$1(d){return this.a.m(new B.ezj())},
$S:2}
B.ezj.prototype={
$0(){},
$S:0}
B.ezn.prototype={
$0(){var w=this.a
w.m(new B.ezi(w,this.b))
w=w.gIh()
w.iq(0,0)
w.cH(0)},
$S:0}
B.ezi.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.ezo.prototype={
$0(){var w=this.a
return w.m(new B.ezh(w,this.b))},
$S:0}
B.ezh.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ezp.prototype={
$0(){var w=this.a
return w.m(new B.ezg(w))},
$S:0}
B.ezg.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.ezq.prototype={
$0(){var w=this.a
return w.m(new B.ezf(w,this.b))},
$S:0}
B.ezf.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ezr.prototype={
$0(){var w=this.a.gIh()
w.iq(0,0)
w.cH(0)},
$S:0}
B.ezs.prototype={
$1(d){var w=this.a
return w.m(new B.eze(w,d))},
$S:6}
B.eze.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.edy.prototype={
$1(d){return d.a.aC(0,this.a).gcm()<16},
$S:z+13}
B.edz.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gcm()<16||d.a.aC(0,w).gcm()>this.a.r.galb()*2.2},
$S:z+13}
B.edm.prototype={
$0(){return B.qF(this.b,this.a.d,"orbits")},
$S:0}
B.edn.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.at(e.b,e.d)
q.r=p
w=q.gact()
v=q.w
u=q.as
t=q.at
s=u==null?A.a1P:q.cg3(u,q.gaUc())
return new C.es(C.aE(A.c5,C.b3(r,r,r,new B.bjs(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.edj(q),new B.edk(q),new B.edl(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8),q.d)},
$S:198}
B.edk.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:43}
B.edl.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.edj.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gcm()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.ZS(u,v.gaUc(),v.Q,v.b0_(),C.a([],x.g)))
C.jL()
if(v.ax)E.dF(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.edo.prototype={
$1(d){var w=this.a
return w.m(new B.edi(w,d))},
$S:6}
B.edi.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.edq.prototype={
$1(d){var w=this.a
return w.m(new B.edh(w,d))},
$S:6}
B.edh.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.edr.prototype={
$1(d){var w=this.a
return w.m(new B.edg(w,d))},
$S:6}
B.edg.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eds.prototype={
$0(){var w=this.a
return w.m(new B.edf(w))},
$S:0}
B.edf.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.edt.prototype={
$0(){var w=this.a
return w.m(new B.ede(w))},
$S:0}
B.ede.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.edu.prototype={
$0(){var w=this.a
return w.m(new B.edd(w))},
$S:0}
B.edd.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.edv.prototype={
$0(){var w=this.a
return w.m(w.gcrC())},
$S:0}
B.edw.prototype={
$0(){var w=this.a
return w.m(w.gbE8())},
$S:0}
B.edx.prototype={
$0(){var w=this.a
return w.m(new B.edc(w))},
$S:0}
B.edc.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.apS(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hg())}},
$S:0}
B.edp.prototype={
$0(){var w=this.a
return w.m(A.d.grj(w.e))},
$S:0}
B.eyM.prototype={
$1(d){return this.a.fO$-d.b>6000},
$S:719}
B.eyN.prototype={
$1(d){var w=this.a.e
return new C.a2(w,new B.eyL(d),C.T(w).k("a2<1>")).gM(0)>=3},
$S:719}
B.eyL.prototype={
$1(d){return d.a.aC(0,this.a.a).gcm()<14},
$S:z+53}
B.eyB.prototype={
$0(){return B.qF(this.b,this.a.d,"swarm")},
$S:0}
B.eyC.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.es(C.aE(A.c5,C.b3(w,w,w,new B.bqS(v.e,v.f,v.ax,v.at,v.ay,v.fO$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eyy(v),new B.eyz(v),new B.eyA(v),w,w,w,w,w,w,w,w,new B.eyq(v),new B.eyr(v),new B.eys(v),w,w,w,!1,A.a8),v.d)},
$S:198}
B.eyz.prototype={
$1(d){return this.a.ay=d.b},
$S:43}
B.eyA.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eyy.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.eyr.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fO$))
if(w.ch)E.dF(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lb("flute",7,500,0.3)},
$S:22}
B.eys.prototype={
$1(d){return this.a.ay=null},
$S:49}
B.eyq.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eyD.prototype={
$0(){var w=this.a
return w.m(new B.eyx(w,this.b))},
$S:0}
B.eyx.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eyE.prototype={
$0(){var w=this.a
return w.m(new B.eyw(w,this.b))},
$S:0}
B.eyw.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a8(w.e)},
$S:0}
B.eyF.prototype={
$0(){var w=this.a
return w.m(new B.eyv(w))},
$S:0}
B.eyv.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eyG.prototype={
$1(d){var w=this.a
return w.m(new B.eyu(w,d))},
$S:6}
B.eyu.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eyH.prototype={
$1(d){var w=this.a
return w.m(new B.eyt(w,d))},
$S:6}
B.eyt.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eyI.prototype={
$1(d){var w=this.a
return w.m(new B.eyp(w,d))},
$S:6}
B.eyp.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eyJ.prototype={
$1(d){var w=this.a
return w.m(new B.eyo(w,d))},
$S:6}
B.eyo.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eyK.prototype={
$1(d){var w=this.a
return w.m(new B.eyn(w,d))},
$S:6}
B.eyn.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dDk.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dDj(w,d))},
$S:140}
B.dDj.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=C.aN(u.h(v,"unlocked"))
t=t==null?null:A.k.O(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aN(u.h(v,"level"))
t=t==null?null:A.k.O(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.V(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jr(v==null?A.vG:v)
v=v.gag(v)
while(v.C()){u=v.gU(v)
t.n(0,C.t(u.a),A.k.O(C.f8(u.b)))}w.x=t
w.Q=!0
A.d.a8(w.d)},
$S:0}
B.dDl.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dDm.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Yy(w)>0},
$S:z+14}
B.dDa.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.ayp()},
$S:0}
B.dDd.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eE(w,F.nA,new C.C(A.bB,new C.a6(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.jh,w,w,w),A.S,C.D(C.ic(!0,w,w,A.y,U.aMr,new B.dDc(u,d),100,w,w,A.ai,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d0,w,new C.b7(v,A.Y),w)},
$S:46}
B.dDc.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dDb(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bZ:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b5:A.dq,A.r,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.j4
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aF("\u2605",n)+A.a.aF("\u2606",3-n),s,s,s,s,s,s,D.f2e,s,s,s))
return C.aE(s,C.p(s,C.v(o,A.m,s,A.ba,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a8)},
$S:76}
B.dDb.prototype={
$0(){C.a5(this.a,!1).N(this.b)
return null},
$S:0}
B.dDh.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gaby()
o=C.b3(q,q,q,new B.b91(p.d,w,v,p.gc2W(),q),o)
v=p.bVd("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gHG()
t=p.as>=p.gHG()?A.bc:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.A(C.a([v,p.atn("GOAL",""+w+" / "+u,t),p.atn("STARS",A.a.aF("\u2605",s)+A.a.aF("\u2606",3-s),A.aM)],r),A.m,q,A.hL,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.m_)
if(p.Q&&!p.y)s.push(D.aTW)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.bc:A.cr).j(0.6),A.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.bc:A.cr,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.ao,C.d("You blasted "+p.as+" dots. The goal was "+p.gHG()+".",q,q,q,q,q,q,A.hA,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aF("\u2605",t==null?1:t),q,q,q,q,q,q,D.eTU,q,q,q))}u.push(A.ay)
t=C.a([new B.fg(A.mh,"Try again",new B.dDe(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fg(A.j9,"Next level",new B.dDf(p),A.bc,q))
u.push(C.A(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.Ve,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aE(A.c5,new C.an(A.W,q,A.b_,A.q,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dDg(p),q,q,q,q,!1,A.a8)},
$S:35}
B.dDg.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fO$
E.dF(180,"",200,1,0.4,"sine")
C.je()},
$S:22}
B.dDe.prototype={
$0(){var w=this.a
return w.m(w.gb2D())},
$S:0}
B.dDf.prototype={
$0(){var w=this.a
return w.aWS(w.r+1)},
$S:0}
B.dDi.prototype={
$0(){var w=this.a
return w.m(w.gb2D())},
$S:0}
B.cIV.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.X()
v=C.M()
v.r=f.j(0.18).gp(0)
w.ai(d,e,v)
v=C.M()
v.b=A.ae
v.c=3
v.r=f.j(0.9).gp(0)
w.ai(d,e,v)
v=C.M()
v.r=f.j(0.25).gp(0)
v.z=A.lg
w.ai(d,e*0.5,v)},
$S:720}
B.e91.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcKr()?this.a.cnR(w,v,d.b):w.aC(0,v).gcm())<24},
$S:z+56}
B.e9q.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.e9f.prototype={
$0(){var w=this.a
return w.m(new B.e96(w))},
$S:0}
B.e96.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.e9g.prototype={
$0(){return B.qF(this.b,this.a.d,"marble-music")},
$S:0}
B.e9h.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.es(C.aE(A.c5,C.b3(w,w,w,new B.bg0(v.e,v.f,v.at,v.ax,v.fO$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.e9c(v),new B.e9d(v),new B.e9e(v),w,w,w,w,w,w,w,w,w,w,new B.e95(v),w,w,w,!1,A.a8),v.d)},
$S:198}
B.e95.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Zh(w)
u.e.push(new B.Fd(w,w,v,u.aNM(v)))
if(u.ay)B.lb(u.z,v+12,700,0.5)}if(u.x==="erase")u.aQi(d.b)},
$S:49}
B.e9d.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:43}
B.e9e.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aQi(d.b)},
$S:18}
B.e9c.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gcm()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Zh(t.ad(0,w).eE(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.Fd(w,t,v,u.aNM(v)))
if(u.ay)B.lb(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.e9i.prototype={
$0(){var w=this.a
return w.m(new B.e9b(w,this.b))},
$S:0}
B.e9b.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.e9j.prototype={
$0(){var w=this.a
return w.m(new B.e9a(w,this.b))},
$S:0}
B.e9a.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.e9k.prototype={
$0(){var w=this.a
return w.m(new B.e99(w,this.b))},
$S:0}
B.e99.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.e9l.prototype={
$1(d){var w=this.a
return w.m(new B.e98(w,d))},
$S:6}
B.e98.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.e9m.prototype={
$0(){var w=this.a
return w.m(new B.e97(w))},
$S:0}
B.e97.prototype={
$0(){return this.a.awZ("stairs")},
$S:0}
B.e9n.prototype={
$0(){var w=this.a
return w.m(new B.e94(w))},
$S:0}
B.e94.prototype={
$0(){return this.a.awZ("pinball")},
$S:0}
B.e9o.prototype={
$0(){var w=this.a
return w.m(new B.e93(w))},
$S:0}
B.e93.prototype={
$0(){return this.a.awZ("random")},
$S:0}
B.e9p.prototype={
$0(){var w=this.a
return w.m(new B.e92(w))},
$S:0}
B.e92.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.ecW.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.ecX.prototype={
$0(){var w=this.b,v=new B.aco(this.a.a,this.c)
v.c=w.fO$
return w.e.push(v)},
$S:0}
B.ed3.prototype={
$0(){var w=this.a
return w.m(new B.ed2(w))},
$S:0}
B.ed2.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ed4.prototype={
$0(){return B.qF(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.ed5.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.at(e.b,e.d)
if(!u.f){u.f=!0
u.aP7()}w=u.w
return new C.es(C.aE(A.c5,C.b3(v,v,v,new B.bjt(u.e,u.gaWU(),6,u.gci5(),u.gcoh(),u.fO$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ed1(u),v,v,v,!1,A.a8),u.d)},
$S:198}
B.ed1.prototype={
$1(d){return this.a.c2Y(d.b)},
$S:49}
B.ed6.prototype={
$1(d){var w=this.a
return w.m(new B.ed0(w,d))},
$S:6}
B.ed0.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ed7.prototype={
$0(){var w=this.a
return w.m(new B.ed_(w,this.b))},
$S:0}
B.ed_.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ed8.prototype={
$0(){var w=this.a
return w.m(new B.ecZ(w,this.b))},
$S:0}
B.ecZ.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ed9.prototype={
$0(){var w=this.a
return w.m(w.gbI6())},
$S:0}
B.eda.prototype={
$0(){var w=this.a
return w.m(new B.ecY(w))},
$S:0}
B.ecY.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.aco(v.aB(6),v.aj()))},
$S:0}
B.edb.prototype={
$0(){var w=this.a
return w.m(A.d.grj(w.e))},
$S:0}
B.fpa.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.G(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:139}
B.ecq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.ecp(w,d))},
$S:140}
B.ecp.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aX(v==null?A.cH:v)
while(v.C())w.push(A.k.O(C.f8(v.gU(v))))
return this.a.x.v(0,w)},
$S:0}
B.ecc.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.G(d,100)===w)this.a.a+=e},
$S:139}
B.ec6.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b7V(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.ec7.prototype={
$0(){var w=this.a
A.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
B.ecb.prototype={
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
p=D.vF.h(0,v[u].a).a
o=w.ai_(u)
v=D.vF.h(0,v[t].a).a
n=w.ai_(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vF("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaX_()&&w.x.K(0,w.d)){B.vF("zap",12,300,0.5)
m=w.x
m=C.B(m,C.a3(m).k("cl.E"))
B.vC("molecule_maker",C.E(["done",m],x.N,x.z))}}}},
$S:0}
B.eca.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cz<1>"),r=this.b,q=s.k("a2<H.E>"),p=C.B(new C.a2(new C.cz(t,s),new B.ec8(r),q),q.k("H.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.L)(p),++w)t.W(0,p[w])
s=x.S
v=C.V(s,s)
t.bH(0,new B.ec9(r,v))
t.a8(0)
t.v(0,v)
A.d.cA(u.e,r)
u.r=null},
$S:0}
B.ec8.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.G(d,100)===w},
$S:33}
B.ec9.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.G(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:139}
B.eck.prototype={
$1(d){return""+d.b+" "+D.vF.h(0,d.a).c.toLowerCase()},
$S:413}
B.ecl.prototype={
$0(){var w=this.a
return w.m(new B.ecj(w))},
$S:0}
B.ecj.prototype={
$0(){var w=this.a;++w.d
w.avq(0)},
$S:0}
B.ecm.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.at(e.b,e.d)
return C.aE(A.c5,C.b3(w,w,w,new B.bgI(v.e,v.f,v.r,v.gcyJ(),w),A.f0),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ecf(v),new B.ecg(v),new B.ech(v,e),w,w,w,w,w,w,w,w,w,w,new B.eci(v),w,w,w,!1,A.a8)},
$S:35}
B.eci.prototype={
$1(d){return this.a.c3k(d.b)},
$S:49}
B.ecg.prototype={
$1(d){var w=this.a
return w.w=w.aX0(d.b)},
$S:43}
B.ech.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.ecd(w,v,d,this.b))},
$S:18}
B.ecd.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.ecf.prototype={
$1(d){return this.a.w=null},
$S:37}
B.ecn.prototype={
$0(){var w=this.a
return w.m(new B.ece(w,this.b))},
$S:0}
B.ece.prototype={
$0(){var w=this.a
w.d=this.b
w.avq(0)},
$S:0}
B.eco.prototype={
$0(){return this.a.c3e(0,this.b.a)},
$S:0}
B.dm_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.G(d,100)].b,h=i.aC(0,j),g=new C.u(-h.b,h.a).eE(0,Math.max(h.gcm(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.X()
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.ad.gp(0)
m.c=4
m.d=A.bO
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:139}
B.dLH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dLG(w,d))},
$S:140}
B.dLG.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dLw.prototype={
$0(){var w,v,u=J.e1(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.atK[w.aB(4)]
return A.d.fV(u)},
$S:23}
B.dLv.prototype={
$1(d){return B.fSR(d)==="*"},
$S:3}
B.dLx.prototype={
$1(d){return d!==this.a},
$S:3}
B.dLu.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vC("dna_lab",C.E(["best",r],x.N,x.z))}r=s.d
B.vF("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga87()[r]+" codes for "+C.t(D.BT.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b_1()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u)r.push(D.BT.h(0,w[u]))
r="Protein built: "+A.d.aI(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vF("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dLF.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dq:e,u=C.m(8),t=f?C.I(A.b5,A.r,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b5:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.mY,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1832}
B.dLA.prototype={
$1(d){var w=D.dfT.h(0,d)
return w==null?A.c:w},
$S:721}
B.dLB.prototype={
$0(){var w=this.a
return w.m(new B.dLz(w,this.b))},
$S:0}
B.dLz.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.auI()},
$S:0}
B.dLC.prototype={
$0(){var w=this.a
return w.m(new B.dLy(w))},
$S:0}
B.dLy.prototype={
$0(){var w=this.a;++w.e
w.auI()},
$S:0}
B.dLD.prototype={
$0(){return this.a.aWZ(this.b)},
$S:0}
B.dLE.prototype={
$0(){return this.a.aWZ(this.b)},
$S:0}
B.dOw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dOv(w,d))},
$S:140}
B.dOv.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dOj.prototype={
$0(){},
$S:0}
B.dOi.prototype={
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
B.dOk.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dOo.prototype={
$1(d){var w=this.a
return w.m(new B.dOn(w,d))},
$S:6}
B.dOn.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dOp.prototype={
$1(d){var w=this.a
return w.m(new B.dOm(w,d))},
$S:6}
B.dOm.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dOq.prototype={
$1(d){var w=this.a
return w.m(new B.dOl(w,d))},
$S:6}
B.dOl.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dOr.prototype={
$0(){return this.a.a9j("drought")},
$S:0}
B.dOs.prototype={
$0(){return this.a.a9j("disease")},
$S:0}
B.dOt.prototype={
$0(){return this.a.a9j("foxes")},
$S:0}
B.dOu.prototype={
$0(){return this.a.a9j("rabbits")},
$S:0}
B.d1p.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eT()
k.dI(A.o.O(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.G(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.ko(new C.eo(e,l,l,A.cO,l,l,l,l,l,l,new C.F(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a5,A.ch,new C.jn(1),l,l,l,l,A.cd,l)
n.eP()
n.a6(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1834}
B.d1r.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.X()
v=C.a([],x.v)
u=new C.aQ(w.r,A.ap,null,null,v)
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
u.e=null}}$.X()
l=C.M()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fz
this.c.aO(u,l)},
$S:1835}
B.d1q.prototype={
$3(d,e,f){var w=null,v=C.ii(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a5,A.ch,w,A.eq,A.cd)
v.eP()
v.a6(this.a,new C.u(f,this.b.b+2))},
$S:1836}
B.bEf.prototype={
$2(d,e){return d+e.a*e.b},
$S:1837}
B.fk4.prototype={
$2(d,e){return e.a-d.a},
$S:1838}
B.dzv.prototype={
$2(d,e){return d+e},
$S:74}
B.dzI.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dzH(v,A.k.D((v.gvC()-w[v.e].guG())/Math.max(w[v.e].guG(),8),-1,1)*0.32,u))},
$S:8}
B.dzH.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dzJ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dzG(w,d))},
$S:140}
B.dzG.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aX(v==null?A.cH:v)
while(v.C())w.push(A.k.O(C.f8(v.gU(v))))
return this.a.r.v(0,w)},
$S:0}
B.dzw.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.G(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dzB.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1839}
B.dzC.prototype={
$0(){var w=this.a
return w.m(new B.dzA(w))},
$S:0}
B.dzA.prototype={
$0(){var w=this.a;++w.e
A.d.hc(w.f,0,5,0)},
$S:0}
B.dzD.prototype={
$2(d,e){var w=null,v=this.a
return C.aE(A.c5,C.b3(w,w,w,new B.b86(v.w,this.b.a,v.f,v.gvC()===v.d[v.e].guG(),w),A.f0),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dzz(v,e),w,w,w,!1,A.a8)},
$S:35}
B.dzz.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cuE(v-1)},
$S:49}
B.dzE.prototype={
$0(){var w=this.a
return w.m(new B.dzy(w,this.b))},
$S:0}
B.dzy.prototype={
$0(){var w=this.a
w.e=this.b
A.d.hc(w.f,0,5,0)},
$S:0}
B.dzF.prototype={
$0(){var w=this.a
return w.m(new B.dzx(w))},
$S:0}
B.dzx.prototype={
$0(){return A.d.hc(this.a.f,0,5,0)},
$S:0}
B.cBs.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bz(C.cu(new C.u(d,s),20,w),A.rf)
$.X()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.ep(r),p)
p.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.2
q.r=A.dz.gp(0)
p=q.H()
u.drawRRect(C.ep(r),p)
p.delete()
B.fj6(v,"1",new C.u(d,s),A.bh,11)}},
$S:1840}
B.dSz.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dSy(w,v))},
$S:8}
B.dSy.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dSA.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dSx(w,d))},
$S:140}
B.dSx.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aX(v==null?A.cH:v)
while(v.C())w.push(A.k.O(C.f8(v.gU(v))))
return this.a.w.v(0,w)},
$S:0}
B.dSp.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dSt.prototype={
$0(){var w=this.a
return w.m(new B.dSs(w))},
$S:0}
B.dSs.prototype={
$0(){return this.a.r++},
$S:0}
B.dSu.prototype={
$0(){var w=this.a
return w.m(new B.dSr(w,this.b))},
$S:0}
B.dSr.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dSv.prototype={
$1(d){var w=this.a
return w.m(new B.dSq(w,d))},
$S:6}
B.dSq.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dSw.prototype={
$1(d){return this.a.c3l(this.b,d)},
$S:6}
B.d9a.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bNg(d,e,f,g),m=this.b
$.X()
w=C.M()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.sau(new C.bR(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).aw(0,C.bU(d,e+6)))
m.aO(n,w)
w=C.M()
w.b=A.ae
w.c=1.5
w.r=A.aX.gp(0)
m.aO(n,w)
w=C.M()
w.r=A.w.j(0.28).gp(0)
m.ai(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.hF.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.M()
w.r=A.aL.gp(0)
m.ai(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1841}
B.d9b.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fj6(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1842}
B.dDH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dDG(w,d))},
$S:140}
B.dDG.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aX(v==null?A.cH:v)
while(v.C())w.push(A.k.O(C.f8(v.gU(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dDp.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jD(90-(w-65)):d},
$S:13}
B.dDy.prototype={
$1(d){return this.a.m(new B.dDx())},
$S:2}
B.dDx.prototype={
$0(){},
$S:0}
B.dDz.prototype={
$1(d){return this.a.m(new B.dDw())},
$S:2}
B.dDw.prototype={
$0(){},
$S:0}
B.dDA.prototype={
$0(){var w=this.a
return w.m(new B.dDv(w))},
$S:0}
B.dDv.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aVL()},
$S:0}
B.dDB.prototype={
$0(){var w=this.a
return w.m(new B.dDu(w))},
$S:0}
B.dDu.prototype={
$0(){return this.a.f=0},
$S:0}
B.dDC.prototype={
$0(){var w=this.a
return w.m(new B.dDt(w))},
$S:0}
B.dDt.prototype={
$0(){return this.a.f=1},
$S:0}
B.dDD.prototype={
$0(){var w=this.a
return w.m(new B.dDs(w,this.b))},
$S:0}
B.dDs.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dDE.prototype={
$1(d){var w=this.a
return w.m(new B.dDr(w,d))},
$S:6}
B.dDr.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dDF.prototype={
$1(d){var w=this.a
w.m(new B.dDq(w,d))
if(w.ga8B()&&w.Q.K(0,w.x)){B.vF("zap",9,220,0.45)
w=w.Q
w=C.B(w,C.a3(w).k("cl.E"))
B.vC("cipher_lab",C.E(["done",w],x.N,x.z))}},
$S:6}
B.dDq.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bK2.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bKd.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bK8.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bKe.prototype={
$1(d){return this.a.L3(d)&&!d.x},
$S:z+1}
B.bKf.prototype={
$2(d,e){return Math.max(d,this.a.ayT(e))},
$S:z+6}
B.bKh.prototype={
$2(d,e){var w=this.a
return w.ci(0,d.a+"."+e,new B.bKi(w))},
$S:z+5}
B.bKi.prototype={
$0(){return this.a.a},
$S:112}
B.bKg.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:73}
B.bKj.prototype={
$2(d,e){var w=this.a
return w.ci(0,this.b.$1(this.c.$2(d,e)),new B.bKk(w))},
$S:z+5}
B.bKk.prototype={
$0(){return this.a.a},
$S:112}
B.bK4.prototype={
$2(d,e){var w=this.a
return w.ci(0,d.a+"."+e,new B.bK5(w))},
$S:z+5}
B.bK5.prototype={
$0(){return this.a.a},
$S:112}
B.bK3.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:73}
B.bK6.prototype={
$2(d,e){var w=this.a
return w.ci(0,this.b.$1(this.c.$2(d,e)),new B.bK7(w))},
$S:z+5}
B.bK7.prototype={
$0(){return this.a.a},
$S:112}
B.bK1.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bKl.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bK9.prototype={
$1(d){return d!==this.b&&this.a.aEU(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bKc.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bKb.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bKa.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bFr.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bFs.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.cis.prototype={
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
$S:194}
B.fAz.prototype={
$1(d){var w
$.X()
w=C.M()
w.r=d.gp(0)
return w},
$S:1843}
B.fAB.prototype={
$2(d,e){var w
$.X()
w=C.M()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bO
return w},
$S:1844}
B.fAC.prototype={
$5(d,e,f,g,h){return C.bz(new C.aa(d,e,d+f,e+g),new C.aV(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1845}
B.fAA.prototype={
$3(d,e,f){var w
$.X()
w=C.M()
w.sau(new C.a7(A.b0,A.b6,A.x,C.a([e,f],x.O),null,null).aw(0,d))
return w},
$S:1846}
B.bF5.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bF6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bF4(w))},
$S:0}
B.bF4.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bF7.prototype={
$0(){return C.a([],x.ey)},
$S:1847}
B.bF8.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:374}
B.bF9.prototype={
$0(){var w,v,u
J.bCj(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.C6(v))if(B.fTg(v.b))w.aYZ(v)
else w.Zx(v)
else{u=w.a.c.ban(v)
w.acG(u==null?"The "+$.q2().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bF3.prototype={
$1(d){return new C.e2(new B.bF1(this.a,this.b),null)},
$S:20}
B.bF1.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bF2(this.a,v,e),t=$.q2(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kU,w,w,w),q=C.aH(w,w,w,w,D.bDT,w,w,w,new B.bEY(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bn(!0,new C.C(A.xk,C.v(C.a([r,A.at,D.frM,A.S,C.A(C.a([q,C.D(C.kT(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bKr,w,w,w,new B.bEZ(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.A(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b3,C.bK(!1,D.f6e,w,w,!0,w,w,new B.bF_(u),w,w),C.bK(!1,A.zi,w,w,!0,w,w,new B.bF0(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:88}
B.bF2.prototype={
$1(d){var w=this.a
w.m(new B.bEW(this.b,d))
this.c.$1(new B.bEX())
w.a.toString},
$S:6}
B.bEW.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bEX.prototype={
$0(){},
$S:0}
B.bEY.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bEZ.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bF_.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bF0.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
B.bFo.prototype={
$2(d,e){var w
if(d==="short"){E.dF(1800,"",120,0,0.55,"noise")
E.dF(200,"",160,2.2,0.4,"saw")
C.fK()
w=this.a
if(w.c!=null)w.acG("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.acG("\u26a0 Overloaded! The "+$.q2().h(0,e.b).b+" can only give about "+A.k.aa(w.a.c.zm(e),2)+" amps but your gadgets are asking for "+A.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.acG("Burnt out! "+e.ay)
E.dF(140,"",320,0,0.6,"noise")
E.dF(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bFp.prototype={
$0(){},
$S:0}
B.bEz.prototype={
$0(){},
$S:0}
B.bFq.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bFn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aE(A.c5,C.b3(p,p,p,new B.ahr(w,v,u,t,s,r==null?A.iS:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFh(o),new B.bFi(o),new B.bFj(o),p,p,p,p,p,p,p,p,p,p,new B.bFk(o),p,p,p,!1,A.a8)],q)
if(o.a.c.a.length===0)n.push(D.b2a)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.cv,A.r,1)
n.push(C.ao(p,C.aE(p,C.p(p,C.A(C.a([D.f4y,C.D(C.d(w,p,p,p,p,p,p,D.eXT,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b7p,p,u,v,p,p,A.n),p,p,p,p,A.or,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFl(o),p,p,p,p,p,p,!1,A.a8),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aX3(C.A(C.a([D.buX,new B.fg(A.Fv,"Cut wire",new B.bFm(o),A.cr,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cd_(w),p,p,10,10,p,p))}return C.js(new C.an(A.W,p,A.b_,A.q,n,p),A.q,p)},
$S:370}
B.bFi.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b4L(s)
if(r!=null){t.m(new B.bFf(t,r,d))
return}w=t.aZF(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bFg(t,w))}},
$S:43}
B.bFf.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bFg.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bFj.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bFd(w,d))
else if(w.w!=null)w.m(new B.bFe(w,d.b.ad(0,w.x)))},
$S:18}
B.bFd.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bFe.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bFh.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b4L(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ajd(u.a,u.b,v.a,v.b)!=null)E.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.acE()},
$S:37}
B.bFk.prototype={
$1(d){var w=this.a,v=d.b,u=w.aZF(v)
if(u!=null){w.m(new B.bFb(w,u))
if(D.lL.ah(0,u.b))w.cnk(u)
w.a.toString
return}w.m(new B.bFc(w,w.czw(v)))},
$S:49}
B.bFb.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dF(200,"",70,0,0.2,"saw")}},
$S:0}
B.bFc.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bFl.prototype={
$0(){var w=this.a
return w.m(new B.bFa(w))},
$S:0}
B.bFa.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bFm.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dF(300,"",50,0,0.35,"noise")
w.acE()},
$S:0}
B.bEA.prototype={
$0(){return this.a.bmd(this.b)},
$S:0}
B.bET.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.A(C.a([C.d(d,w,w,w,w,w,w,D.eSx,w,w,w),C.D(C.kT(this.b.d,w,w,g,h,new B.bEV(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1848}
B.bEV.prototype={
$1(d){var w=this.a
w.m(new B.bEU(this.b,d))
w.a.toString},
$S:6}
B.bEU.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bEG.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dF(260,"",70,0,0.35,"noise")
w.acE()},
$S:0}
B.bEH.prototype={
$0(){var w=this.a
return w.m(new B.bEF(w))},
$S:0}
B.bEF.prototype={
$0(){return this.a.d=null},
$S:0}
B.bEI.prototype={
$0(){this.a.m(new B.bEE(this.b,this.c))
E.dF(900,"",40,0,0.3,"noise")},
$S:0}
B.bEE.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bEL.prototype={
$0(){return this.a.aYZ(this.b)},
$S:0}
B.bEM.prototype={
$0(){return this.a.Zx(this.b)},
$S:0}
B.bEN.prototype={
$0(){return this.a.a0b(this.b)},
$S:0}
B.bEO.prototype={
$0(){var w=this.a
w.m(new B.bED(this.b,this.c))
w.a.toString},
$S:0}
B.bED.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bEP.prototype={
$0(){var w=this.a
w.m(new B.bEC(this.b,this.c))
w.a.toString},
$S:0}
B.bEC.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bEQ.prototype={
$0(){var w=this.a
w.m(new B.bEB(this.b,this.c))
w.a.toString},
$S:0}
B.bEB.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bER.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bES.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bEJ.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bEK.prototype={
$1(d){return this.a.f=d},
$S:6}
B.fa8.prototype={
$1(d){return d.aEy("bulb")},
$S:z+2}
B.fa9.prototype={
$1(d){return d.pr(0,"switch")&&d.aEy("bulb")},
$S:z+2}
B.faa.prototype={
$1(d){return A.d.b8(d.a,new B.f9W())},
$S:z+2}
B.f9W.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fab.prototype={
$1(d){return d.pr(0,"resistor")&&A.d.b8(d.a,new B.f9V())},
$S:z+2}
B.f9V.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.fac.prototype={
$1(d){return!d.pr(0,"battery")&&d.aEy("bulb")},
$S:z+2}
B.fa_.prototype={
$1(d){return A.d.b8(d.a,new B.f9U())},
$S:z+2}
B.f9U.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fa0.prototype={
$1(d){return A.d.b8(d.a,new B.f9T())},
$S:z+2}
B.f9T.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fa1.prototype={
$1(d){return A.d.b8(d.a,new B.f9S())},
$S:z+2}
B.f9S.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.fa2.prototype={
$1(d){var w=d.a
return A.d.b8(w,new B.f9Q())&&A.d.b8(w,new B.f9R())&&d.pr(0,"buck")},
$S:z+2}
B.f9Q.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.f9R.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fa3.prototype={
$1(d){var w=d.a
return A.d.b8(w,new B.f9O())&&A.d.b8(w,new B.f9P())},
$S:z+2}
B.f9O.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.f9P.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fa4.prototype={
$1(d){return A.d.b8(d.a,new B.f9N())},
$S:z+2}
B.f9N.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dOE.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
B.dON.prototype={
$1(d){var w=this.a.d
return w.aEU(d)&&w.C6(d)},
$S:z+1}
B.dOO.prototype={
$1(d){return d.x},
$S:z+1}
B.dOP.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dOQ.prototype={
$0(){},
$S:0}
B.dOD.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fkQ,A.at,D.f6a,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.Pd[v]
t=A.c.j(0.06)
s=new C.aV(14,14)
r=new C.az(A.bF,1,A.r,-1)
n.push(C.aE(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.ks,q,q,q,q,q,q,q,q,q),A.bA,new C.x(u.b,q,D.eYB,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bP(r,r,r,r),new C.bp(s,s,s,s),q,q,A.n),q,q,q,A.cG,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dOC(w,d,u),q,q,q,q,q,q,!1,A.a8))}return C.eE(q,F.nA,new C.C(A.bW,new C.a6(340,q,C.cB(n,q,q,q,q,A.ai,!0),q),q),q,q,q,q,A.d0,q,new C.b7(p,A.Y),q)},
$S:46}
B.dOC.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.m(new B.dOB(w,this.c))
E.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dOB.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bft()},
$S:0}
B.dOz.prototype={
$1(d){return new B.Uw(this.a.d,null)},
$S:z+67}
B.dOA.prototype={
$0(){},
$S:0}
B.dOM.prototype={
$1(d){return new C.e2(new B.dOL(this.a),null)},
$S:20}
B.dOL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.agD(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.bc:A.aW
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.A(C.a([D.fii,A.b3,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.P,C.bw(C.m(4),C.mh(A.bF,m,m,5,m,w.a/11,new C.mB(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.f9a)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Af.SG,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,D.ID,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.at,q,new C.bI(A.a7,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dOJ(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bm,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aV(12,12)
n=new C.az(o===l.f?f.j(0.6):A.dq,1,A.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.az:A.c
u.push(C.aE(m,C.p(m,new C.co(A.aQ,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a6T,m,m,m,m,m,m,m,m,m),A.aw,new C.bF(1,A.bj,new C.x(r.a,m,new C.F(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bP(n,n,n,n),new C.bp(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.or,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dOK(l,o,e),m,m,m,m,m,m,!1,A.a8))}return C.bn(!0,new C.cU(new C.aY(0,1/0,0,k.a.b*0.75),C.cB(u,m,A3.AG,m,m,A.ai,!0),m),!0,!1,A.ag,!0,!0)},
$S:88}
B.dOJ.prototype={
$0(){var w=this.a
w.m(new B.dOH(w))
this.b.$1(new B.dOI())
w.Et()},
$S:0}
B.dOH.prototype={
$0(){var w=this.a
$.agD()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dOI.prototype={
$0(){},
$S:0}
B.dOK.prototype={
$0(){var w=this.a
w.m(new B.dOF(w,this.b))
this.c.$1(new B.dOG())
w.Et()},
$S:0}
B.dOF.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dOG.prototype={
$0(){},
$S:0}
B.dOS.prototype={
$0(){return C.a5(this.a,!1).m7()},
$S:0}
B.dOT.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.m5("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a5(t.b,!1).ce(C.ej(new B.dOR(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dOR.prototype={
$1(d){C.lh("construction")
return Al.hvb()},
$S:z+68}
B.dOU.prototype={
$0(){return B.hhm(this.a,"ELECTRONICS LAB",this.b,A.aW)},
$S:0}
B.dOV.prototype={
$0(){var w=this.a
return w.m(w.d.gcQo())},
$S:0}
B.dOW.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grj(v))
w.Et()},
$S:0}
B.cz_.prototype={
$2(d,e){var w=null,v=this.a.gavr().x
v===$&&C.c()
return C.b3(w,w,w,new B.b7e(v,w),A.au)},
$S:68}
B.cyZ.prototype={
$3(d,e,f){var w=new C.aQ($.X().r,A.ap,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new C.b5(v,t))
w.E(new C.cS(v,u,v+e,u))
w.E(new C.cS(v,u,v,u+e))
w.E(new C.cS(v,u,v-e,u))
w.E(new C.cS(v,u,v,t))
w.E(new C.bE())
t=C.M()
t.r=A.c.j(f).gp(0)
this.a.aO(w,t)},
$S:669}
B.fF8.prototype={
$3(d,e,f){return new B.TN(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fF9.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cX(e,!1,C.ih(A.A,g,null,new C.bf(C.cI(A.cq,e,null),new C.bm(0.85,1,w),w.k("bf<bH.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
B.dKA.prototype={
$0(){return C.a5(this.a,!1).m7()},
$S:0}
B.dKz.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bV3(o):q.by7(o,p),m=x.p
p=C.a([C.q5(new C.n7(n,new C.cw(p,x.aC)),A.pr,C.rB(),A.bb,A.bb,new B.dKx())],m)
n=t.d
if(n){w=A.k.G(q.gR2(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.aw],m)
if(w)m.push(D.buJ)
else m.push(A.b3)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.bc:A.aA,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.aw)
p.push(C.ao(s,C.av(C.dg(s,C.A(m,A.m,s,A.e,A.j,0,s,s),s,s,A.et,new C.o(A.w,s,s,u,s,s,A.n),A.mU,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uf)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.JD,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.vU)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.JD,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aE(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dKy(q),s,s,s,s,s,s,!1,A.a8),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b_,A.q,p,s),A.aq)},
$S:283}
B.dKx.prototype={
$2(d,e){var w=x.Y
return new C.cX(e,!1,C.ih(A.A,d,null,new C.bf(e,new C.bm(0.92,1,w),w.k("bf<bH.T>"))),null)},
$S:386}
B.dKy.prototype={
$0(){var w=this.a
return w.m(new B.dKw(w))},
$S:0}
B.dKw.prototype={
$0(){return this.a.e=null},
$S:0}
B.dKv.prototype={
$0(){var w=this.a
return w.m(new B.dKu(w,this.b))},
$S:0}
B.dKu.prototype={
$0(){return this.a.e=A.d.cJ(F.jU,this.b)},
$S:0}
B.dKt.prototype={
$0(){var w=this.a
return w.m(new B.dKs(w))},
$S:0}
B.dKs.prototype={
$0(){return this.a.e=0},
$S:0}
B.dKo.prototype={
$0(){var w=this.a
return w.m(new B.dKn(w))},
$S:0}
B.dKn.prototype={
$0(){return this.a.e=null},
$S:0}
B.dKr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.A(C.a([D.fqh,A.aw,C.D(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eC,p,p,p,D.f3t,p,p,p),1),C.d(A.a.aT(A.o.u(C.dh(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aT(A.o.u(C.fY(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.q6,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.l4,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.bta(w.gR2(),this.c.d,p),A.au)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b5,A.r,1)
s=C.m(10)
o=C.p(p,C.A(C.a([C.aE(p,C.p(p,p,A.f,p,p,A.a9M,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dKq(w),p,p,p,p,p,p,!1,A.a8),A.ea,C.p(p,p,A.f,p,p,A.a9S,p,12,p,p,p,p,p,12),A.ea,C.p(p,p,A.f,p,p,D.aYB,p,12,p,p,p,p,p,12),A.aw,C.D(C.d(F.jU[o].a,p,1,A.a2,p,p,p,A.a6K,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cC,p,p,p,24,p,p,A.fo,p,p,p)
r=w.e
r.toString
v.push(C.bY(0,new C.C(D.brC,C.p(p,C.bw(s,C.v(C.a([o,C.D(C.b3(p,p,p,new B.ads(r,w.gR2(),p),A.f0),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.d8Y,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b5,A.r,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.C(A.jr,w.atp(F.jU[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.A(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.l6,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.v(C.a([m,C.D(new C.an(A.W,p,A.b_,A.q,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,R.KI,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:283}
B.dKq.prototype={
$0(){var w=this.a
return w.m(new B.dKp(w))},
$S:0}
B.dKp.prototype={
$0(){return this.a.e=null},
$S:0}
B.e4B.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e4A(w,d))},
$S:140}
B.e4A.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=C.aN(u.h(v,"best"))
t=t==null?null:A.k.O(t)
w.e=t==null?0:t
v=C.aN(u.h(v,"level"))
v=v==null?null:A.k.O(v)
if(v==null)v=0
w.d=v
w.f=B.fTm(v)},
$S:0}
B.e4C.prototype={
$0(){},
$S:0}
B.e4r.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fTm(v)
w.r.a8(0)
w.x=!1},
$S:0}
B.e4s.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvb().r){C.jL()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vF("click",s.c+s.d,60,0.4)
if(B.hhv(r.gvb(),q).b.a===r.gvb().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vC("laser_maze",C.E(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.Bb("bell",D.ano,700,0.45)
for(q=r.gvb().c,q=C.ea(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.u((A.o.G(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e4v.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.at(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aE(A.c5,C.b3(s,s,s,new B.bfb(r.gvb(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e4t(r),s,s,s,!1,A.a8),C.ao(s,C.e_(C.A(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,L.aNZ,s,s,s),C.d(""+u.a+"/"+r.gvb().c.a+" \u2605   mirrors "+w.a+"/"+r.gvb().r,s,s,s,s,s,s,S.a6t,s,s,s)],t),A.m,s,A.hL,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.feo("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.bc,C.a([new B.fg(A.j9,"Next level",new B.e4u(r),A.bc,s)],t)))
return new C.an(A.W,s,A.b_,A.q,w,s)},
$S:64}
B.e4t.prototype={
$1(d){return this.a.c3H(d.b)},
$S:49}
B.e4u.prototype={
$0(){var w=this.a
return w.acK(w.d+1)},
$S:0}
B.e4w.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grj(v))},
$S:0}
B.e4x.prototype={
$0(){var w=this.a
return w.acK(w.d+1)},
$S:0}
B.e4y.prototype={
$0(){var w=this.a
return w.acK(w.d-1)},
$S:0}
B.e4z.prototype={
$0(){return this.a.acK(this.b)},
$S:0}
B.dee.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.G(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:722}
B.deh.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.X()
u=C.M()
u.r=(f?A.hf:A.aL).gp(0)
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
$S:1850}
B.def.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:471}
B.deg.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:471}
B.e4U.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e4T(w,d))},
$S:140}
B.e4T.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e4V.prototype={
$0(){},
$S:0}
B.e4F.prototype={
$1(d){return d===0},
$S:118}
B.e4O.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,L.a6E,s,s,s)
w=r.z==="play"?A.k.dw(r.y):20
v=x.p
w=C.A(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cr:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,S.a6t,s,s,s)],v),A.m,s,A.hL,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dq:p
t=C.m(22)
t=C.D(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b5,A.r,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.C(D.boX,w,s),C.D(C.A(C.a([C.D(new C.C(A.bR,C.v(C.a([t,A.ao,C.d(q?"TARGET":"TARGET: "+r.gcuH(),s,s,s,s,s,s,D.aOM,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.D(new C.C(A.bR,C.v(C.a([C.D(C.b3(s,s,s,new B.bfq(r.f,s),A.f0),1),A.ao,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aOM,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.feo("Light Mixer","Match each colour with red, green and blue light."+q,A.b7,C.a([new B.fg(A.iP,"Start",new B.e4L(r),A.bc,s)],v)))}if(r.z==="result")w.push(B.feo(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fg(A.j9,"Next colour",new B.e4M(r),A.bc,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.feo("Finished! "+q,u,A.bc,C.a([new B.fg(A.mh,"Play again",new B.e4N(r),A.bc,s)],v)))}return new C.an(A.W,s,A.aa,A.q,w,s)},
$S:64}
B.e4L.prototype={
$0(){var w=this.a
return w.m(new B.e4H(w))},
$S:0}
B.e4H.prototype={
$0(){var w=this.a
w.w=w.r=0
w.avv()},
$S:0}
B.e4M.prototype={
$0(){var w=this.a
return w.m(w.gc3F())},
$S:0}
B.e4N.prototype={
$0(){var w=this.a
return w.m(new B.e4G(w))},
$S:0}
B.e4G.prototype={
$0(){var w=this.a
w.w=w.r=0
w.avv()},
$S:0}
B.e4P.prototype={
$1(d){var w=this.a
return w.m(new B.e4K(w,d))},
$S:6}
B.e4K.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e4Q.prototype={
$1(d){var w=this.a
return w.m(new B.e4J(w,d))},
$S:6}
B.e4J.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e4R.prototype={
$1(d){var w=this.a
return w.m(new B.e4I(w,d))},
$S:6}
B.e4I.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e4S.prototype={
$0(){var w=this.a
return w.m(w.gc3G())},
$S:0}
B.faQ.prototype={
$0(){return D.dV4},
$S:z+70}
B.faR.prototype={
$0(){return D.dsj},
$S:z+71}
B.faS.prototype={
$0(){return D.doS},
$S:z+72}
B.faT.prototype={
$0(){return D.drK},
$S:z+73}
B.faU.prototype={
$0(){return D.dwF},
$S:z+74}
B.faV.prototype={
$0(){return D.dQO},
$S:z+75}
B.faW.prototype={
$0(){return D.dT_},
$S:z+76}
B.faX.prototype={
$0(){return D.dvZ},
$S:z+77}
B.cd4.prototype={
$0(){return C.a5(this.a,!1).m7()},
$S:0}
B.cd5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hkX(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aV(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dk,16)],t)
n=A.c.j(0.85)
j.push(C.aE(m,C.p(m,new C.an(A.W,m,A.aa,A.q,C.a([new C.cK(m,-6,-6,m,m,m,new C.x(r.c,m,K.SF,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lo,m,m,C.v(C.a([new C.x(r.a,m,D.f25,m,m,m,m,m,m,m,m,m),A.cZ,new C.x(r.b,m,new C.F(!0,n,m,m,m,m,12,A.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bp(q,q,q,q),p,new C.a7(A.ax,A.aD,A.x,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cd3(d,r),m,m,m,m,m,m,!1,A.a8))}return C.c_(A.bD,j,A.bt,14,14)},
$S:168}
B.cd3.prototype={
$0(){return C.a5(this.a,!1).ce(C.ej(new B.cd2(this.b),!1,null,x.H))},
$S:0}
B.cd2.prototype={
$1(d){return this.a.f.$0()},
$S:41}
B.eDN.prototype={
$0(){var w=this.a
return w.w=w.d[w.b23(w.f)]},
$S:0}
B.eDJ.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cI.aj()*7},
$S:0}
B.eDI.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bM(0,A.c3)
w.w=""},
$S:0}
B.eDL.prototype={
$0(){var w=this.a
return w.m(new B.eDK(w,this.b))},
$S:0}
B.eDK.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
B.eDM.prototype={
$1(d){return this.a.aXt(0)},
$S:2}
B.dQS.prototype={
$0(){return B.Bb("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dQT.prototype={
$0(){},
$S:0}
B.dQN.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dQP.prototype={
$0(){return this.a.aXv(this.b)},
$S:0}
B.dQQ.prototype={
$0(){var w=this.a
return w.m(new B.dQO(w))},
$S:0}
B.dQO.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dQR.prototype={
$0(){var w=this.a
return w.aXv(w.d)},
$S:0}
B.dC7.prototype={
$2(d,e){return d+e},
$S:87}
B.dC8.prototype={
$0(){},
$S:0}
B.dC2.prototype={
$2(d,e){return d+e},
$S:87}
B.dC5.prototype={
$0(){var w=this.a
return w.m(new B.dC4(w,this.b))},
$S:0}
B.dC4.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dC6.prototype={
$0(){var w=this.a
return w.m(new B.dC3(w))},
$S:0}
B.dC3.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dO8.prototype={
$0(){return B.qF(this.b,this.a.d,"drawing")},
$S:0}
B.dO9.prototype={
$1(d){var w=this.a
return w.m(new B.dO7(w,d))},
$S:43}
B.dO7.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aGD(u,v,t))},
$S:0}
B.dOa.prototype={
$1(d){var w=this.a
return w.m(new B.dO6(w,d))},
$S:18}
B.dO6.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dOb.prototype={
$1(d){var w=this.a
return w.m(new B.dO5(w,d))},
$S:22}
B.dO5.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aGD(u,v,t))},
$S:0}
B.dOc.prototype={
$0(){var w=this.a
return w.m(new B.dO4(w,this.b))},
$S:0}
B.dO4.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dOd.prototype={
$1(d){var w=this.a
return w.m(new B.dO3(w,d))},
$S:6}
B.dO3.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dOe.prototype={
$0(){var w=this.a
return w.m(new B.dO2(w))},
$S:0}
B.dO2.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dOf.prototype={
$0(){var w=this.a
return w.m(new B.dO1(w))},
$S:0}
B.dO1.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dOg.prototype={
$0(){var w=this.a
return w.m(A.d.grj(w.e))},
$S:0}
B.dOh.prototype={
$0(){var w=this.a
return w.m(new B.dO0(w))},
$S:0}
B.dO0.prototype={
$0(){var w=this.a
w.x=D.aue[A.o.G(A.d.cJ(D.aue,w.x)+1,4)]},
$S:0}
B.eag.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
B.eah.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.Bb("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.eaf(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.Bb("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.eaf.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
B.eai.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.eae(w))},
$S:11}
B.eae.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
B.eam.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aE(w,C.mv(new B.eak(v,e),w,A.bb,A.pr,w,w,new C.bm(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eal(v,e),w,w,w,w,w,w,!1,A.a8)},
$S:76}
B.eal.prototype={
$0(){return this.a.c4B(this.b)},
$S:0}
B.eak.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dl(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fv(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bT4
if(o)v=q.a.r.t(0,q.b)?A.bc.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.bc:A.b5,A.r,1)
if(o){r=C.dl()
r.fv(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fr(A.A,C.d(u[t],p,p,p,p,p,p,D.f_u,p,p,p),p,r,!0)
u=r}else u=D.fjC
return C.fr(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:134}
B.ean.prototype={
$0(){var w=this.a
return w.m(new B.eaj(w,this.b))},
$S:0}
B.eaj.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aqJ()},
$S:0}
B.eao.prototype={
$0(){var w=this.a
return w.m(w.gbGG())},
$S:0}
B.ekN.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.ekO.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.ekL.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.ekM.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.ekK(w))},
$S:11}
B.ekK.prototype={
$0(){return this.a.f=-1},
$S:0}
B.ekP.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.ekQ.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.ekR.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aXu()},
$S:11}
B.ekS.prototype={
$0(){return this.a.c4H(this.b)},
$S:0}
B.ez4.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:69}
B.ezd.prototype={
$3$big(d,e,f){var w=null,v=C.D(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(A.kF,C.A(C.a([v,A.ab,new C.dm(1,A.ci,C.f1(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.eg),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1852}
B.ez9.prototype={
$1(d){return this.a.m(new B.ez8())},
$S:2}
B.ez8.prototype={
$0(){},
$S:0}
B.eza.prototype={
$0(){var w=this.a
return w.m(new B.ez7(w,this.b))},
$S:0}
B.ez7.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.ezb.prototype={
$1(d){var w=this.a
return w.m(new B.ez6(w,d))},
$S:6}
B.ez6.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.ezc.prototype={
$0(){var w=this.a
return w.m(new B.ez5(w))},
$S:0}
B.ez5.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.e8W.prototype={
$0(){},
$S:0}
B.e8X.prototype={
$0(){},
$S:0}
B.e8P.prototype={
$0(){var w=this.a
return w.m(new B.e8O(w))},
$S:0}
B.e8O.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a7h("hat",0.6)},
$S:0}
B.e8Q.prototype={
$0(){var w=this.a
return w.m(new B.e8N(w))},
$S:0}
B.e8N.prototype={
$0(){this.a.y=1.1
B.lb("bell",36,200,0.4)},
$S:0}
B.e8R.prototype={
$0(){var w=this.a
return w.m(new B.e8M(w))},
$S:0}
B.e8M.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aB(Math.max(v,u)-t+1)
w.as=u
B.lb("bell",12+A.o.G(u,12),500,0.5)},
$S:0}
B.e8S.prototype={
$0(){var w=this.a
return w.m(new B.e8L(w,this.b))},
$S:0}
B.e8L.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.e8T.prototype={
$1(d){var w=this.a
return w.m(new B.e8K(w,d))},
$S:6}
B.e8K.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e1(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.e8U.prototype={
$1(d){var w=this.a
return w.m(new B.e8J(w,d))},
$S:6}
B.e8J.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.e8V.prototype={
$1(d){var w=this.a
return w.m(new B.e8I(w,d))},
$S:6}
B.e8I.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.cpT.prototype={
$0(){return C.a5(this.a,!1).m7()},
$S:0}
B.cpU.prototype={
$0(){var w=this.a
return B.hhm(this.b,w.c,w.e,w.d)},
$S:0}
B.fIZ.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eT3,v,v,v)
return C.eh(C.a([C.bK(!1,D.f9f,v,v,!0,v,v,new B.fIY(d),v,v)],x.p),v,v,F.mQ,w,v,v,v,new C.b7(u,new C.az(s,1,A.r,-1)),t,v)},
$S:19}
B.fIY.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
B.cpP.prototype={
$0(){C.eP()
this.a.e.$0()},
$S:0}
B.cpO.prototype={
$0(){C.eP()
this.a.e.$0()},
$S:0}
B.cpV.prototype={
$0(){C.eP()
this.a.e.$0()},
$S:0}
B.cpQ.prototype={
$0(){var w=this.a
A.d.W(w.fk$,this.b.bd())
if(w.c!=null)this.c.$0()},
$S:0}
B.cpS.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.kU$.a)/1e6,0,0.04)
w.kU$=d
w.fO$=A.o.an(v,1000)
w.ln(u)
if(w.c!=null)w.m(new B.cpR())},
$S:8}
B.cpR.prototype={
$0(){},
$S:0}
B.cd0.prototype={
$0(){var w=this
return B.lb(w.a,w.b,w.c,w.d)},
$S:1}
B.dTA.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dTz(w,d))},
$S:z+79}
B.dTz.prototype={
$0(){return this.a.cp0(this.b)},
$S:0}
B.dT2.prototype={
$0(){var w,v,u,t=this.a,s=J.a8(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1853}
B.dT0.prototype={
$0(){return this.a.id=D.a1V},
$S:0}
B.dT1.prototype={
$0(){var w=this.b.a,v=C.T(w).k("a2<1>")
v=C.p3(new C.a2(w,new B.dT_(this.c),v),6,v.k("H.E"))
w=C.B(v,C.a3(v).k("H.E"))
return this.a.id=w},
$S:0}
B.dT_.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dSZ.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.q,w,A.y,w,w,w,w,A.ai)
return C.eh(C.a([C.bK(!1,A.q7,w,w,!0,w,w,new B.dSY(d),w,w)],x.p),w,w,F.mQ,v,w,w,w,w,D.fjG,w)},
$S:19}
B.dSY.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
B.dTl.prototype={
$0(){return B.qF(this.b,this.a.d,"earth")},
$S:0}
B.dTm.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVf()
r=p.z
o=C.a([C.aE(A.c5,C.b3(q,q,q,new B.bdD(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dT9(p),new B.dTa(p),new B.dTb(p),q,q,q,q,q,q,q,new B.dTc(p),q,q,q,!1,A.a8)],x.p)
if(p.r==null)o.push(A9.aau)
w=this.b
if(w!=null)o.push(C.ao(8,p.c5i(w),q,q,10,10,q,q))
return new C.es(new C.an(A.W,q,A.b_,A.q,o,q),p.d)},
$S:198}
B.dTa.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:246}
B.dTb.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVf()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:233}
B.dT9.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVf()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:560}
B.dTc.prototype={
$1(d){var w=this.a,v=w.c5l(d.b)
if(v!=null)w.m(new B.dT3(w,v))
else w.m(new B.dT4(w))},
$S:49}
B.dT3.prototype={
$0(){return this.a.avZ(this.b)},
$S:0}
B.dT4.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dTn.prototype={
$0(){var w=this.a
w.e.bM(0,A.c3)
w.m(new B.dT8(w,this.b))},
$S:0}
B.dT8.prototype={
$0(){var w=this.a
w.id=D.a1V
w.avZ(this.b)},
$S:0}
B.dTr.prototype={
$0(){var w=this.a
return w.m(new B.dTk(w))},
$S:0}
B.dTk.prototype={
$0(){var w=this.a
w.fx=null
w.arU(15,w.y,1)},
$S:0}
B.dTs.prototype={
$0(){var w=this.a
return w.m(new B.dTj(w,this.b))},
$S:0}
B.dTj.prototype={
$0(){var w=this.b.b
return this.a.arU(w.a,w.b,w.c)},
$S:0}
B.dTt.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dTi(w,v))},
$S:0}
B.dTi.prototype={
$0(){var w=this.b.a
return this.a.avZ(w[A.cI.aB(w.length)])},
$S:0}
B.dTu.prototype={
$1(d){var w=this.a
return w.m(new B.dTh(w,d))},
$S:6}
B.dTh.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dTv.prototype={
$1(d){var w=this.a
return w.m(new B.dTg(w,d))},
$S:6}
B.dTg.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dTw.prototype={
$1(d){var w=this.a
return w.m(new B.dTf(w,d))},
$S:6}
B.dTf.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dTx.prototype={
$0(){var w=this.a
return w.m(new B.dTe(w))},
$S:0}
B.dTe.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dTy.prototype={
$0(){var w=this.a
return w.m(new B.dTd(w))},
$S:0}
B.dTd.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dTo.prototype={
$0(){var w=this.a
return w.m(new B.dT7(w))},
$S:0}
B.dT7.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dTp.prototype={
$0(){var w=this.a
return w.m(new B.dT6(w))},
$S:0}
B.dT6.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dTq.prototype={
$0(){var w=this.a
return w.m(new B.dT5(w))},
$S:0}
B.dT5.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dSX.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aNq,w,w,w),A.ui,C.d(e,w,2,A.a2,w,w,w,A.T0,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:130}
B.dSW.prototype={
$0(){var w=this.a
return w.m(new B.dSV(w))},
$S:0}
B.dSV.prototype={
$0(){return this.a.fx=null},
$S:0}
B.d9Z.prototype={
$0(){var w=null,v=C.ii(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,D.cTX,w,w),this.a),A.a5,A.ch,w,A.eq,A.cd)
v.eP()
return v},
$S:328}
B.da_.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1854}
B.faJ.prototype={
$0(){return D.dug},
$S:z+81}
B.faK.prototype={
$0(){return D.dSI},
$S:z+82}
B.faL.prototype={
$0(){return D.dui},
$S:z+83}
B.faM.prototype={
$0(){return D.doE},
$S:z+84}
B.faN.prototype={
$0(){return D.due},
$S:z+85}
B.faO.prototype={
$0(){return D.dQP},
$S:z+86}
B.faP.prototype={
$0(){return D.dQN},
$S:z+87}
B.ezY.prototype={
$0(){return C.a5(this.a,!1).m7()},
$S:0}
B.ezZ.prototype={
$0(){var w=this.a
return w.m(new B.ezX(w))},
$S:0}
B.ezX.prototype={
$0(){var w=this.a
return w.d=A.o.G(w.gaQv()+1,16)},
$S:0}
B.eA_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hkW(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aV(18,18)
q=s.d
p=new C.az(q.j(0.5),1,A.r,-1)
o=C.a([q.j(0.28),D.beX],u)
k.push(C.aE(n,C.p(n,C.v(C.a([C.W(s.c,q,n,n,n,30),A.P,new C.x(s.a,n,D.eXt,n,A.L,n,n,n,n,2,n,n),A.cZ,new C.x(s.b,n,D.f1u,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.ba,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bP(p,p,p,p),new C.bp(r,r,r,r),n,new C.a7(A.ax,A.aD,A.x,o,n,n),A.n),n,v,n,n,A.cj,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ezW(d,s),n,n,n,n,n,n,!1,A.a8))}return C.c_(A.fM,k,A.bt,10,10)},
$S:168}
B.ezW.prototype={
$0(){return C.a5(this.a,!1).ce(C.ej(new B.ezV(this.b),!1,null,x.H))},
$S:0}
B.ezV.prototype={
$1(d){return this.a.e.$0()},
$S:41}
B.es0.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.esb.prototype={
$0(){return B.qF(this.b,this.a.d,"solar-system")},
$S:0}
B.esc.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.at(e.b,e.d)
u.ch=t
t=C.a([C.aE(A.c5,C.b3(v,v,v,new B.bq_(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.es8(u),new B.es9(u),v,v,v,v,v,v,v,new B.esa(u),v,v,v,!1,A.a8)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c5n(w),v,v,10,10,v,v))
return new C.es(new C.an(A.W,v,A.b_,A.q,t,v),u.d)},
$S:198}
B.es8.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:246}
B.es9.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:233}
B.esa.prototype={
$1(d){var w=this.a,v=w.c5q(d.b)
if(v!=null)w.aXQ(v)},
$S:49}
B.esd.prototype={
$0(){var w=this.a
return w.m(new B.es7(w))},
$S:0}
B.es7.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.ese.prototype={
$0(){return this.a.aXQ(this.b)},
$S:0}
B.esf.prototype={
$1(d){var w=this.a
return w.m(new B.es6(w,d))},
$S:6}
B.es6.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.esg.prototype={
$1(d){var w=this.a
return w.m(new B.es5(w,d))},
$S:6}
B.es5.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.esh.prototype={
$0(){var w=this.a
return w.m(new B.es4(w))},
$S:0}
B.es4.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.esi.prototype={
$0(){var w=this.a
return w.m(new B.es3(w))},
$S:0}
B.es3.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.esj.prototype={
$0(){var w=this.a
return w.m(new B.es2(w))},
$S:0}
B.es2.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.esk.prototype={
$0(){var w=this.a
return w.m(new B.es1(w))},
$S:0}
B.es1.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.es_.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:319}
B.erZ.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aNq,w,w,w),A.ui,C.d(e,w,2,A.a2,w,w,w,A.T0,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:130}
B.erY.prototype={
$0(){var w=this.a
return w.m(new B.erX(w))},
$S:0}
B.erX.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eU9.prototype={
$0(){var w=null,v=C.ii(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,L.Pl,w,w),this.a),A.a5,A.ch,w,A.eq,A.cd)
v.eP()
return v},
$S:328}
B.eUa.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eUb.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dTE.prototype={
$0(){},
$S:0}
B.dU6.prototype={
$1(d){return d!=null},
$S:360}
B.dTT.prototype={
$0(){var w=this.a
return w.m(new B.dTK(w,this.b))},
$S:0}
B.dTK.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dTU.prototype={
$0(){var w=this.a
return w.m(new B.dTJ(w))},
$S:0}
B.dTJ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dTV.prototype={
$0(){var w=this.a
return w.m(new B.dTS(w))},
$S:0}
B.dTS.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dTZ.prototype={
$0(){var w=this.a
return w.m(new B.dTR(w))},
$S:0}
B.dTR.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dU_.prototype={
$1(d){var w=this.a
return w.m(new B.dTQ(w,d))},
$S:6}
B.dTQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dU0.prototype={
$0(){var w=this.a
return w.m(w.gcs9())},
$S:0}
B.dU1.prototype={
$1(d){var w=this.a
return w.m(new B.dTP(w,d))},
$S:6}
B.dTP.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dU2.prototype={
$1(d){var w=this.a
return w.m(new B.dTO(w,d))},
$S:6}
B.dTO.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dU3.prototype={
$1(d){var w=this.a
return w.m(new B.dTN(w,d))},
$S:6}
B.dTN.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dU4.prototype={
$1(d){var w=this.a
return w.m(new B.dTM(w,d))},
$S:6}
B.dTM.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dU5.prototype={
$0(){var w=this.a
return w.m(new B.dTL(w))},
$S:0}
B.dTL.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dTW.prototype={
$0(){var w=this.a
return w.m(new B.dTI(w))},
$S:0}
B.dTI.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dTX.prototype={
$0(){var w=this.a
return w.m(new B.dTH(w))},
$S:0}
B.dTH.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dTY.prototype={
$0(){var w=this.a
return w.m(new B.dTG(w))},
$S:0}
B.dTG.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dTD.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bY(0,C.bZ(g,new C.o(D.bdy,g,g,C.m(20),g,g,A.n),A.bd),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yp[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.yp[q].b)+" m/s\xb2",g,D.f0R,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dq,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.W(Z.Mw,C.b0(D.yp[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yp[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yp[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yp[q].d).j(0.6),g,g,g,3,g,A.fo,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cK(p,8,g,g,f,g,o,g),new C.cK(n-0.5,54,g,e,g,g,m,g),new C.cK(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cK(p,g,g,8,f,g,C.v(C.a([j,A.at,new C.x(i,g,A.rr,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.eUe,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d9(v,new B.dTC()))a1.push(D.b2u)
return new C.an(A.W,g,A.aa,A.q,a1,g)},
$S:64}
B.dTC.prototype={
$1(d){return d==null},
$S:360}
B.dTF.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dg(v,v,v,v,A.bb,new C.o(v,v,v,C.m(8),v,new C.a7(A.a3,A.a7,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.i6,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.Gd(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.an(A.W,v,A.aa,A.q,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.f_f,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:64}
B.dTB.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.b8T(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.au)
o=A.w.j(0.55)
p=C.m(14)
q=C.I(A.bF,A.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.bc
else u=A.a.t(u,"escapes")?A.aW:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.aa(Math.sqrt(58.86870477034412),1)
s=A.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.Gd(A.k.D(r.cx.gcm()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b_,A.q,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,A.bA,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aP1,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bR,v,v,v),v,v,12,12,8,v)],w),v)},
$S:64}
B.ekV.prototype={
$0(){return B.qF(this.b,this.a.d,"size-compare")},
$S:0}
B.ekW.prototype={
$0(){var w=this.a
return w.m(new B.ekU(w,this.b))},
$S:0}
B.ekU.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.ekX.prototype={
$0(){var w=this.a
return w.m(new B.ekT(w,this.b))},
$S:0}
B.ekT.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eSj.prototype={
$3(d,e,f){var w,v,u=this.a
$.X()
w=C.M()
w.r=f.j(0.2).gp(0)
w.z=new C.ht(A.G,Math.max(2,e*0.18))
u.ai(d,e*1.12,w)
w=C.M()
v=C.aq(f,A.w,0.6)
v.toString
w.sau(new C.bR(P.qf,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a19,null).aw(0,C.bU(d,e)))
u.ai(d,e,w)},
$S:720}
B.dBz.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dBn.prototype={
$1(d){return d.b},
$S:z+60}
B.dBo.prototype={
$0(){return B.qF(this.b,this.a.d,"black-hole")},
$S:0}
B.dBp.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.Q=o
o=C.aE(A.c5,C.b3(q,q,q,new B.b8h(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dBl(p),q,q,q,q,q,q,q,q,q,new B.dBm(p),q,q,q,q,!1,A.a8)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.r,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fmL(t)+" Suns"
t=p.adr("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.A(C.a([t,p.adr("EDGE WIDTH",(s<100?A.k.aa(s,1):B.Gd(s))+" km"),p.adr("TIME",A.k.aa(this.b*100,0)+"%"),p.adr("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bR,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.e7E)
return new C.es(new C.an(A.W,q,A.b_,A.q,r,q),p.d)},
$S:198}
B.dBm.prototype={
$1(d){return this.a.aXR(d.b)},
$S:22}
B.dBl.prototype={
$1(d){if(A.cI.aj()<0.12)this.a.aXR(d.b)},
$S:18}
B.dBr.prototype={
$1(d){var w=this.a
return w.m(new B.dBk(w,d))},
$S:6}
B.dBk.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dBs.prototype={
$0(){var w=this.a
return w.m(new B.dBj(w))},
$S:0}
B.dBj.prototype={
$0(){return this.a.r=10},
$S:0}
B.dBt.prototype={
$0(){var w=this.a
return w.m(new B.dBi(w))},
$S:0}
B.dBi.prototype={
$0(){return this.a.r=21},
$S:0}
B.dBu.prototype={
$0(){var w=this.a
return w.m(new B.dBh(w))},
$S:0}
B.dBh.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dBv.prototype={
$0(){var w=this.a
return w.m(new B.dBg(w))},
$S:0}
B.dBg.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dBw.prototype={
$0(){var w=this.a
return w.m(new B.dBf(w))},
$S:0}
B.dBf.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dBx.prototype={
$0(){var w=this.a
return w.m(new B.dBe(w))},
$S:0}
B.dBe.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dBy.prototype={
$0(){var w=this.a
return w.m(new B.dBd(w))},
$S:0}
B.dBd.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dBq.prototype={
$0(){var w=this.a
return w.m(new B.dBc(w))},
$S:0}
B.dBc.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
B.dSb.prototype={
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
$S:1855}
B.dS1.prototype={
$0(){return B.qF(this.b,this.a.d,"galaxy")},
$S:0}
B.dS2.prototype={
$0(){var w=this.a
return w.m(new B.dS0(w,this.b))},
$S:0}
B.dS0.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.Z9()},
$S:0}
B.dS3.prototype={
$0(){var w=this.a
return w.m(new B.dS_(w))},
$S:0}
B.dS_.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.Z9()}w.cs1()},
$S:0}
B.dS4.prototype={
$1(d){var w=this.a
return w.m(new B.dRZ(w,d))},
$S:6}
B.dRZ.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.Z9()},
$S:0}
B.dS5.prototype={
$1(d){var w=this.a
return w.m(new B.dRY(w,d))},
$S:6}
B.dRY.prototype={
$0(){var w=this.a
w.r=this.b
w.Z9()},
$S:0}
B.dS6.prototype={
$1(d){var w=this.a
return w.m(new B.dRX(w,d))},
$S:6}
B.dRX.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dS7.prototype={
$1(d){var w=this.a
return w.m(new B.dRW(w,d))},
$S:6}
B.dRW.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dS8.prototype={
$0(){var w=this.a
return w.m(new B.dRV(w))},
$S:0}
B.dRV.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dS9.prototype={
$0(){var w=this.a
return w.m(new B.dRU(w))},
$S:0}
B.dRU.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dSa.prototype={
$0(){var w=this.a
return w.m(new B.dRT(w))},
$S:0}
B.dRT.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d77.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1856}
B.ek9.prototype={
$0(){return B.qF(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eka.prototype={
$0(){var w=this.a
return w.m(new B.ek8(w))},
$S:0}
B.ek8.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.ekb.prototype={
$0(){var w=this.a
return w.m(new B.ek7(w))},
$S:0}
B.ek7.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.ekc.prototype={
$0(){var w=this.a
return w.m(new B.ek6(w))},
$S:0}
B.ek6.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.ekd.prototype={
$0(){var w=this.a
return w.m(new B.ek5(w))},
$S:0}
B.ek5.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.eke.prototype={
$1(d){var w=this.a
return w.m(new B.ek4(w,d))},
$S:6}
B.ek4.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.ekf.prototype={
$1(d){var w=this.a
return w.m(new B.ek3(w,d))},
$S:6}
B.ek3.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.ekg.prototype={
$1(d){var w=this.a
return w.m(new B.ek2(w,d))},
$S:6}
B.ek2.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ekh.prototype={
$1(d){var w=this.a
return w.m(new B.ek1(w,d))},
$S:6}
B.ek1.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aKE.prototype
w.btg=w.q
w=B.aJG.prototype
w.bsg=w.q
w=B.aJH.prototype
w.bsh=w.q
w=B.aJM.prototype
w.bsm=w.q
w=B.aLt.prototype
w.bub=w.q
w=B.aKC.prototype
w.bte=w.q
w=B.aKL.prototype
w.btn=w.q
w=B.aKR.prototype
w.btt=w.q
w=B.aJK.prototype
w.bsk=w.q
w=B.aKz.prototype
w.btb=w.q
w=B.aKO.prototype
w.btq=w.q
w=B.aKx.prototype
w.bt9=w.q
w=B.aKy.prototype
w.bta=w.q
w=B.aJY.prototype
w.bsz=w.q
w=B.aJC.prototype
w.bsc=w.q
w=B.aK5.prototype
w.bsH=w.q
w=B.awa.prototype
w.bpo=w.q
w=B.awb.prototype
w.bpp=w.q
w=B.aI8.prototype
w.bqF=w.q
w=B.aJV.prototype
w.bsv=w.q
w=B.aKm.prototype
w.bsZ=w.q
w=B.aKn.prototype
w.bt_=w.q
w=B.aJI.prototype
w.bsi=w.q
w=B.aK0.prototype
w.bsC=w.q
w=B.aKv.prototype
w.bt7=w.q
w=B.aKZ.prototype
w.btB=w.q
w=B.aK6.prototype
w.bsJ=w.q
w=B.aK7.prototype
w.bsK=w.q
w=B.aK8.prototype
w.bsL=w.q
w=B.aKH.prototype
w.btj=w.q
w=B.aKK.prototype
w.btm=w.q
w=B.aJF.prototype
w.bsf=w.q
w=B.aK3.prototype
w.bsF=w.q
w=B.aKG.prototype
w.bti=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aCP.prototype,"gauR","c0I",0)
var r
v(r=B.aBe.prototype,"gc8N","c8O",35)
w(r,"gc1d","aWj",0)
w(B.aBh.prototype,"gc2H","c2I",0)
u(B.aBy.prototype,"gc2N","c2O",52)
w(r=B.aFO.prototype,"gcrI","crJ",0)
w(r,"gcfs","aeR",0)
w(r,"gcd9","cda",0)
w(r,"gc2M","acr",3)
w(r=B.aCO.prototype,"gbDO","a86",3)
w(r,"gccr","aZv",0)
w(r,"gcga","aeZ",3)
t(r,"gc2Q","acs",3)
w(B.aD3.prototype,"gbUL","bUM",0)
w(r=B.aCG.prototype,"gcrC","crD",0)
w(r,"gbE8","bE9",0)
w(r=B.aBg.prototype,"gb2D","ayp",0)
v(r,"gc2W","Yy",54)
w(r,"gc2V","acu",3)
v(r=B.aCF.prototype,"gci5","ax9",58)
v(r,"gcoh","ayl",15)
w(r,"gbI6","aP7",0)
v(r=B.aCD.prototype,"gcyJ","ai_",15)
t(r,"gc3f","avq",0)
w(r,"gckm","ckn",0)
v(r=B.aBK.prototype,"gc3g","c3h",90)
w(r,"gc3i","c3j",0)
t(r=B.a3q.prototype,"grj","a8",0)
v(r,"gcOe","alO",1)
v(r,"gcKJ","L3",1)
w(r,"gcQo","bft",0)
s(B.ahr.prototype,"gc3n",0,5,null,["$5"],["q0"],64,0,0)
w(r=B.aBL.prototype,"gc3o","c3p",0)
w(r,"gciR","afk",3)
w(r,"gc92","adE",3)
w(r,"gcpP","agq",3)
w(r=B.aCp.prototype,"gc3F","avv",0)
w(r,"gc3G","aX7",0)
w(r=B.aDg.prototype,"gc4C","c4D",0)
t(r,"gc4A","aXt",0)
w(B.aCz.prototype,"gbGG","aqJ",0)
t(B.aCV.prototype,"gc4E","c4F",0)
v(r=B.aBW.prototype,"gc5j","c5k",78)
w(r,"gbLu","bLv",0)
w(r=B.aBX.prototype,"gcs9","csa",0)
w(r,"gc5o","c5p",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.aiD,B.Fu,B.uA,B.aQw,B.a28,B.b8k,B.bZ9,B.xG,B.BO,B.nd,B.b92,B.A1,B.bqG,B.pR,B.qy,B.BS,B.Yl,B.adz,B.a_y,B.C2,B.aaw,B.aaN,B.acH,B.Fh,B.bjF,B.P6,B.ZS,B.aaD,B.ab5,B.Fd,B.abU,B.aco,B.t_,B.b7V,B.aQm,B.e7,B.tc,B.a9e,B.aai,B.a3q,B.mr,B.b93,B.fJ,B.lY,B.aUT,B.bs_,B.aGD,B.mu,B.a9Z,B.aa_,B.uN,B.Oo,B.xE,B.On,B.brV,B.OQ,B.adE])
u(C.hT,[B.foU,B.ffH,B.fm_,B.fm0,B.foR,B.foS,B.e1D,B.e1W,B.ehU,B.ehr,B.ehs,B.eht,B.ehu,B.ehv,B.ehw,B.ehx,B.ehy,B.ehp,B.ehq,B.eho,B.ehP,B.ehQ,B.ehR,B.dBE,B.dBG,B.dBJ,B.dBU,B.bZa,B.bZb,B.f9X,B.f9Y,B.f9Z,B.fa5,B.fa6,B.fa7,B.dEb,B.dDT,B.dEc,B.dDO,B.dDJ,B.dDL,B.dDR,B.dE3,B.dE1,B.dE2,B.dE0,B.dDY,B.dE_,B.eRO,B.eRv,B.eRC,B.eRL,B.eRp,B.ddW,B.ddX,B.ddT,B.ddU,B.ddV,B.ddY,B.ddZ,B.de_,B.de0,B.de1,B.de2,B.de3,B.de4,B.de5,B.egQ,B.egR,B.egS,B.egT,B.egO,B.egP,B.ehk,B.egX,B.egZ,B.egJ,B.ehg,B.ehe,B.ehf,B.ehd,B.ehc,B.egL,B.esL,B.esJ,B.esx,B.esB,B.esw,B.esC,B.esD,B.esH,B.ezm,B.ezs,B.edy,B.edz,B.edk,B.edl,B.edj,B.edo,B.edq,B.edr,B.eyM,B.eyN,B.eyL,B.eyz,B.eyA,B.eyy,B.eyr,B.eys,B.eyG,B.eyH,B.eyI,B.eyJ,B.eyK,B.dDk,B.dDl,B.dDm,B.dDd,B.dDg,B.cIV,B.e91,B.e9q,B.e95,B.e9d,B.e9e,B.e9c,B.e9l,B.ed1,B.ed6,B.ecq,B.ec8,B.eck,B.eci,B.ecg,B.ech,B.ecf,B.dLH,B.dLv,B.dLx,B.dLF,B.dLA,B.dOw,B.dOo,B.dOp,B.dOq,B.d1p,B.d1r,B.d1q,B.dzI,B.dzJ,B.dzB,B.dzz,B.cBs,B.dSz,B.dSA,B.dSv,B.dSw,B.d9a,B.d9b,B.dDH,B.dDp,B.dDy,B.dDz,B.dDE,B.dDF,B.bK2,B.bKd,B.bK8,B.bKe,B.bKg,B.bK3,B.bK1,B.bKl,B.bK9,B.bKc,B.bKb,B.bKa,B.bFr,B.fAz,B.fAC,B.fAA,B.bF8,B.bF3,B.bF2,B.bFq,B.bFi,B.bFj,B.bFh,B.bFk,B.bET,B.bEV,B.bER,B.bES,B.bEJ,B.bEK,B.fa8,B.fa9,B.faa,B.f9W,B.fab,B.f9V,B.fac,B.fa_,B.f9U,B.fa0,B.f9T,B.fa1,B.f9S,B.fa2,B.f9Q,B.f9R,B.fa3,B.f9O,B.f9P,B.fa4,B.f9N,B.dON,B.dOO,B.dOD,B.dOz,B.dOM,B.dOR,B.cyZ,B.fF8,B.fF9,B.e4B,B.e4t,B.dee,B.deh,B.e4U,B.e4F,B.e4P,B.e4Q,B.e4R,B.cd2,B.eDM,B.dO9,B.dOa,B.dOb,B.dOd,B.eak,B.ez4,B.ezd,B.ez9,B.ezb,B.e8T,B.e8U,B.e8V,B.fIZ,B.cpS,B.dTA,B.dT_,B.dSZ,B.dTa,B.dTb,B.dT9,B.dTc,B.dTu,B.dTv,B.dTw,B.ezV,B.es8,B.es9,B.esa,B.esf,B.esg,B.es_,B.eUa,B.eUb,B.dU6,B.dU_,B.dU1,B.dU2,B.dU3,B.dU4,B.dTC,B.eSj,B.dBz,B.dBn,B.dBm,B.dBl,B.dBr,B.dSb,B.dS4,B.dS5,B.dS6,B.dS7,B.d77,B.eke,B.ekf,B.ekg,B.ekh])
u(C.kd,[B.foT,B.e1I,B.e1G,B.ehA,B.ehN,B.dDK,B.dE6,B.dJF,B.eRR,B.eRS,B.eRu,B.eRH,B.eRI,B.eRD,B.eRJ,B.eRo,B.egM,B.egN,B.ehj,B.ehb,B.eh0,B.ezl,B.edn,B.eyC,B.dDc,B.dDh,B.e9h,B.ed5,B.fpa,B.ecc,B.ec9,B.ecm,B.dm_,B.bEf,B.fk4,B.dzv,B.dzD,B.bKf,B.bKh,B.bKj,B.bK4,B.bK6,B.bFs,B.cis,B.fAB,B.bF1,B.bFo,B.bFn,B.dOL,B.cz_,B.dKz,B.dKx,B.dKr,B.e4v,B.def,B.deg,B.e4O,B.cd5,B.dC7,B.dC2,B.eam,B.dTm,B.dSX,B.da_,B.eA_,B.esc,B.erZ,B.dTD,B.dTF,B.dTB,B.dBp])
u(C.ag,[B.Uw,B.UY,B.To,B.Tt,B.MC,B.aFN,B.UX,B.Vc,B.Vo,B.UU,B.Vj,B.Tr,B.UO,B.UT,B.UR,B.TP,B.U4,B.Tj,B.Ui,B.Ts,B.ahp,B.U5,B.avS,B.TN,B.UB,B.UD,B.Vu,B.Uc,B.Tp,B.U3,B.UP,B.V2,B.Vn,B.UN,B.Uj,B.Vq,B.Vb,B.Uk,B.V3,B.Tn,B.Ug,B.V_])
u(C.ah,[B.bi8,B.aKE,B.aJG,B.aJM,B.aBy,B.aLt,B.aKC,B.aKL,B.aKR,B.aKz,B.aKO,B.aJK,B.aKx,B.aKy,B.aCD,B.bhD,B.aJY,B.aJC,B.aK5,B.bhv,B.awa,B.bv5,B.aI8,B.aJV,B.aKm,B.aKn,B.aKZ,B.aK0,B.aJI,B.bhE,B.aCz,B.aCV,B.biS,B.aKv,B.aK6,B.biW,B.aKK,B.aK8,B.aKH,B.aJF,B.aK3,B.aKG])
u(C.j3,[B.e1B,B.e1C,B.e1O,B.e1P,B.e1K,B.e1J,B.e1L,B.e1H,B.e1M,B.e1F,B.e1N,B.e1E,B.e1S,B.e1R,B.e1T,B.e1Q,B.e1U,B.e1V,B.e1X,B.ehT,B.ehV,B.ehW,B.ehC,B.ehB,B.ehz,B.ehI,B.ehJ,B.ehF,B.ehK,B.ehE,B.ehL,B.ehM,B.ehD,B.ehO,B.ehH,B.ehS,B.ehG,B.dC0,B.dC_,B.dBD,B.dC1,B.dBF,B.dBH,B.dBI,B.dBK,B.dBA,B.dBB,B.dBC,B.dBR,B.dBS,B.dBT,B.dBQ,B.dBV,B.dBP,B.dBW,B.dBO,B.dBX,B.dBN,B.dBY,B.dBM,B.dBZ,B.dBL,B.dDQ,B.dDP,B.dDU,B.dDM,B.dDN,B.dDV,B.dDW,B.dDX,B.dDS,B.dDI,B.dE5,B.dE4,B.dE7,B.dE8,B.dE9,B.dDZ,B.dEa,B.cJn,B.dJD,B.dJC,B.dJE,B.fan,B.fao,B.fap,B.faA,B.faC,B.faD,B.faE,B.faF,B.faG,B.faH,B.faI,B.faq,B.far,B.fas,B.fat,B.fau,B.fav,B.faw,B.fax,B.fay,B.faz,B.faB,B.eRQ,B.eRP,B.eRx,B.eRw,B.eRs,B.eRr,B.eRt,B.eRq,B.eRF,B.eRE,B.eRG,B.eRy,B.eRK,B.eRB,B.eRM,B.eRA,B.eRN,B.eRz,B.egV,B.egK,B.egU,B.egG,B.egW,B.egY,B.egH,B.egI,B.ehi,B.ehh,B.eh8,B.eh9,B.eha,B.eh4,B.eh5,B.eh3,B.eh6,B.eh2,B.eh7,B.eh1,B.eh_,B.ddS,B.esK,B.esm,B.esl,B.esv,B.esE,B.esu,B.esF,B.est,B.esG,B.ess,B.esr,B.esI,B.esq,B.esy,B.esp,B.esz,B.eso,B.esA,B.esn,B.ezk,B.ezj,B.ezn,B.ezi,B.ezo,B.ezh,B.ezp,B.ezg,B.ezq,B.ezf,B.ezr,B.eze,B.edm,B.edi,B.edh,B.edg,B.eds,B.edf,B.edt,B.ede,B.edu,B.edd,B.edv,B.edw,B.edx,B.edc,B.edp,B.eyB,B.eyq,B.eyD,B.eyx,B.eyE,B.eyw,B.eyF,B.eyv,B.eyu,B.eyt,B.eyp,B.eyo,B.eyn,B.dDj,B.dDa,B.dDb,B.dDe,B.dDf,B.dDi,B.e9f,B.e96,B.e9g,B.e9i,B.e9b,B.e9j,B.e9a,B.e9k,B.e99,B.e98,B.e9m,B.e97,B.e9n,B.e94,B.e9o,B.e93,B.e9p,B.e92,B.ecW,B.ecX,B.ed3,B.ed2,B.ed4,B.ed0,B.ed7,B.ed_,B.ed8,B.ecZ,B.ed9,B.eda,B.ecY,B.edb,B.ecp,B.ec6,B.ec7,B.ecb,B.eca,B.ecl,B.ecj,B.ecd,B.ecn,B.ece,B.eco,B.dLG,B.dLw,B.dLu,B.dLB,B.dLz,B.dLC,B.dLy,B.dLD,B.dLE,B.dOv,B.dOj,B.dOi,B.dOk,B.dOn,B.dOm,B.dOl,B.dOr,B.dOs,B.dOt,B.dOu,B.dzH,B.dzG,B.dzw,B.dzC,B.dzA,B.dzE,B.dzy,B.dzF,B.dzx,B.dSy,B.dSx,B.dSp,B.dSt,B.dSs,B.dSu,B.dSr,B.dSq,B.dDG,B.dDx,B.dDw,B.dDA,B.dDv,B.dDB,B.dDu,B.dDC,B.dDt,B.dDD,B.dDs,B.dDr,B.dDq,B.bKi,B.bKk,B.bK5,B.bK7,B.bF5,B.bF6,B.bF4,B.bF7,B.bF9,B.bEW,B.bEX,B.bEY,B.bEZ,B.bF_,B.bF0,B.bFp,B.bEz,B.bFf,B.bFg,B.bFd,B.bFe,B.bFb,B.bFc,B.bFl,B.bFa,B.bFm,B.bEA,B.bEU,B.bEG,B.bEH,B.bEF,B.bEI,B.bEE,B.bEL,B.bEM,B.bEN,B.bEO,B.bED,B.bEP,B.bEC,B.bEQ,B.bEB,B.dOE,B.dOP,B.dOQ,B.dOC,B.dOB,B.dOA,B.dOJ,B.dOH,B.dOI,B.dOK,B.dOF,B.dOG,B.dOS,B.dOT,B.dOU,B.dOV,B.dOW,B.dKA,B.dKy,B.dKw,B.dKv,B.dKu,B.dKt,B.dKs,B.dKo,B.dKn,B.dKq,B.dKp,B.e4A,B.e4C,B.e4r,B.e4s,B.e4u,B.e4w,B.e4x,B.e4y,B.e4z,B.e4T,B.e4V,B.e4L,B.e4H,B.e4M,B.e4N,B.e4G,B.e4K,B.e4J,B.e4I,B.e4S,B.faQ,B.faR,B.faS,B.faT,B.faU,B.faV,B.faW,B.faX,B.cd4,B.cd3,B.eDN,B.eDJ,B.eDI,B.eDL,B.eDK,B.dQS,B.dQT,B.dQN,B.dQP,B.dQQ,B.dQO,B.dQR,B.dC8,B.dC5,B.dC4,B.dC6,B.dC3,B.dO8,B.dO7,B.dO6,B.dO5,B.dOc,B.dO4,B.dO3,B.dOe,B.dO2,B.dOf,B.dO1,B.dOg,B.dOh,B.dO0,B.eag,B.eah,B.eaf,B.eai,B.eae,B.eal,B.ean,B.eaj,B.eao,B.ekN,B.ekO,B.ekL,B.ekM,B.ekK,B.ekP,B.ekQ,B.ekR,B.ekS,B.ez8,B.eza,B.ez7,B.ez6,B.ezc,B.ez5,B.e8W,B.e8X,B.e8P,B.e8O,B.e8Q,B.e8N,B.e8R,B.e8M,B.e8S,B.e8L,B.e8K,B.e8J,B.e8I,B.cpT,B.cpU,B.fIY,B.cpP,B.cpO,B.cpV,B.cpQ,B.cpR,B.cd0,B.dTz,B.dT2,B.dT0,B.dT1,B.dSY,B.dTl,B.dT3,B.dT4,B.dTn,B.dT8,B.dTr,B.dTk,B.dTs,B.dTj,B.dTt,B.dTi,B.dTh,B.dTg,B.dTf,B.dTx,B.dTe,B.dTy,B.dTd,B.dTo,B.dT7,B.dTp,B.dT6,B.dTq,B.dT5,B.dSW,B.dSV,B.d9Z,B.faJ,B.faK,B.faL,B.faM,B.faN,B.faO,B.faP,B.ezY,B.ezZ,B.ezX,B.ezW,B.es0,B.esb,B.esd,B.es7,B.ese,B.es6,B.es5,B.esh,B.es4,B.esi,B.es3,B.esj,B.es2,B.esk,B.es1,B.erY,B.erX,B.eU9,B.dTE,B.dTT,B.dTK,B.dTU,B.dTJ,B.dTV,B.dTS,B.dTZ,B.dTR,B.dTQ,B.dU0,B.dTP,B.dTO,B.dTN,B.dTM,B.dU5,B.dTL,B.dTW,B.dTI,B.dTX,B.dTH,B.dTY,B.dTG,B.ekV,B.ekW,B.ekU,B.ekX,B.ekT,B.dBo,B.dBk,B.dBs,B.dBj,B.dBt,B.dBi,B.dBu,B.dBh,B.dBv,B.dBg,B.dBw,B.dBf,B.dBx,B.dBe,B.dBy,B.dBd,B.dBq,B.dBc,B.dS1,B.dS2,B.dS0,B.dS3,B.dS_,B.dRZ,B.dRY,B.dRX,B.dRW,B.dS8,B.dRV,B.dS9,B.dRU,B.dSa,B.dRT,B.ek9,B.eka,B.ek8,B.ekb,B.ek7,B.ekc,B.ek6,B.ekd,B.ek5,B.ek4,B.ek3,B.ek2,B.ek1])
t(B.bvk,B.aKE)
t(B.aCP,B.bvk)
u(C.mG,[B.bf8,B.b9k,B.bq6,B.b81,B.boL,B.boc,B.b8H,B.boe,B.bs9,B.bf6,B.bq1,B.bjs,B.bqS,B.b91,B.bg0,B.bjt,B.bgI,B.bc3,B.b86,B.bdw,B.ahr,B.b7e,B.bta,B.ads,B.bfb,B.bfq,B.btm,B.bod,B.bjG,B.bdD,B.bq_,B.b8T,B.bpy,B.b8h,B.bdt,B.boO])
t(B.aJH,B.aJG)
t(B.aBe,B.aJH)
t(B.bv3,B.aJM)
t(B.aBh,B.bv3)
u(C.m1,[B.JI,B.a_l,B.IE])
u(C.au,[B.bp8,B.adJ,B.acD,B.Pf,B.bpC,B.a7i,B.bbp,B.b53,B.dz,B.eK,B.auh,B.fg,B.EJ])
t(B.aFO,B.aLt)
t(B.bf5,C.oC)
t(B.aCO,B.aKC)
t(B.biJ,B.aKL)
t(B.aD3,B.aKR)
t(B.bvj,B.aKz)
t(B.aCG,B.bvj)
t(B.bvr,B.aKO)
t(B.biO,B.bvr)
t(B.bv2,B.aJK)
t(B.aBg,B.bv2)
t(B.bvh,B.aKx)
t(B.bin,B.bvh)
t(B.bvi,B.aKy)
t(B.aCF,B.bvi)
t(B.aBK,B.aJY)
t(B.bhi,B.aJC)
t(B.bhP,B.aK5)
t(B.awb,B.awa)
t(B.ahq,B.awb)
t(B.aBL,B.bv5)
t(B.b7f,B.aI8)
t(B.bhB,B.aJV)
t(B.bva,B.aKm)
t(B.bia,B.bva)
t(B.bvb,B.aKn)
t(B.aCp,B.bvb)
t(B.bvs,B.aKZ)
t(B.aDg,B.bvs)
t(B.bv6,B.aK0)
t(B.bhK,B.bv6)
t(B.bv1,B.aJI)
t(B.bhn,B.bv1)
t(B.bvg,B.aKv)
t(B.bil,B.bvg)
t(B.aK7,B.aK6)
t(B.aBW,B.aK7)
t(B.bvo,B.aKK)
t(B.biI,B.bvo)
t(B.bv8,B.aK8)
t(B.aBX,B.bv8)
t(B.bvm,B.aKH)
t(B.biF,B.bvm)
t(B.bv0,B.aJF)
t(B.bhm,B.bv0)
t(B.bv7,B.aK3)
t(B.bhN,B.bv7)
t(B.bvl,B.aKG)
t(B.biE,B.bvl)
w(B.aKE,C.c8)
w(B.bvk,B.mu)
w(B.aJG,C.c8)
w(B.aJH,B.mu)
w(B.aJM,C.c8)
w(B.bv3,B.mu)
w(B.aLt,C.eR)
w(B.aKC,C.c8)
w(B.aKL,C.c8)
w(B.aKR,C.c8)
w(B.aJK,C.c8)
w(B.bv2,B.mu)
w(B.aKz,C.c8)
w(B.bvj,B.mu)
w(B.aKO,C.c8)
w(B.bvr,B.mu)
w(B.aKx,C.c8)
w(B.bvh,B.mu)
w(B.aKy,C.c8)
w(B.bvi,B.mu)
w(B.aJY,C.c8)
w(B.aJC,C.c8)
w(B.aK5,C.c8)
w(B.awa,C.c8)
w(B.awb,B.mu)
w(B.aI8,C.c8)
v(B.bv5,C.ev)
w(B.aJV,C.c8)
w(B.aKm,C.c8)
w(B.bva,B.mu)
w(B.aKn,C.c8)
w(B.bvb,B.mu)
w(B.aJI,C.c8)
w(B.bv1,B.mu)
w(B.aK0,C.c8)
w(B.bv6,B.mu)
w(B.aKv,C.c8)
w(B.bvg,B.mu)
w(B.aKZ,C.c8)
w(B.bvs,B.mu)
w(B.aK6,C.c8)
w(B.aK7,B.mu)
w(B.aK8,C.c8)
w(B.bv8,B.mu)
w(B.aKH,C.c8)
w(B.bvm,B.mu)
w(B.aKK,C.c8)
w(B.bvo,B.mu)
w(B.aJF,C.c8)
w(B.bv0,B.mu)
w(B.aK3,C.c8)
w(B.bv7,B.mu)
w(B.aKG,C.c8)
w(B.bvl,B.mu)})()
C.jS(b.typeUniverse,JSON.parse('{"Uw":{"ag":[],"r":[]},"bi8":{"ah":["Uw"]},"UY":{"ag":[],"r":[]},"aCP":{"ah":["UY"]},"bf8":{"aB":[]},"To":{"ag":[],"r":[]},"aBe":{"ah":["To"]},"Tt":{"ag":[],"r":[]},"aBh":{"ah":["Tt"]},"b9k":{"aB":[]},"adJ":{"au":[],"r":[]},"acD":{"au":[],"r":[]},"aFN":{"ag":[],"r":[]},"MC":{"ag":[],"r":[]},"aBy":{"ah":["MC"]},"bp8":{"au":[],"r":[]},"Pf":{"au":[],"r":[]},"bq6":{"aB":[]},"bpC":{"au":[],"r":[]},"b81":{"aB":[]},"aFO":{"ah":["aFN"]},"boL":{"aB":[]},"boc":{"aB":[]},"b8H":{"aB":[]},"boe":{"aB":[]},"bs9":{"aB":[]},"UX":{"ag":[],"r":[]},"bf5":{"aB":[]},"aCO":{"ah":["UX"]},"bf6":{"aB":[]},"Vc":{"ag":[],"r":[]},"Vo":{"ag":[],"r":[]},"biJ":{"ah":["Vc"]},"bq1":{"aB":[]},"aD3":{"ah":["Vo"]},"UU":{"ag":[],"r":[]},"Vj":{"ag":[],"r":[]},"Tr":{"ag":[],"r":[]},"aCG":{"ah":["UU"]},"bjs":{"aB":[]},"biO":{"ah":["Vj"]},"bqS":{"aB":[]},"aBg":{"ah":["Tr"]},"b91":{"aB":[]},"UO":{"ag":[],"r":[]},"UT":{"ag":[],"r":[]},"bin":{"ah":["UO"]},"bg0":{"aB":[]},"aCF":{"ah":["UT"]},"bjt":{"aB":[]},"UR":{"ag":[],"r":[]},"TP":{"ag":[],"r":[]},"U4":{"ag":[],"r":[]},"aCD":{"ah":["UR"]},"bgI":{"aB":[]},"bhD":{"ah":["TP"]},"aBK":{"ah":["U4"]},"bc3":{"aB":[]},"Tj":{"ag":[],"r":[]},"Ui":{"ag":[],"r":[]},"Ts":{"ag":[],"r":[]},"bhi":{"ah":["Tj"]},"b86":{"aB":[]},"bhP":{"ah":["Ui"]},"bdw":{"aB":[]},"bhv":{"ah":["Ts"]},"ahr":{"aB":[]},"ahp":{"ag":[],"r":[]},"ahq":{"ah":["ahp"]},"U5":{"ag":[],"r":[]},"avS":{"ag":[],"r":[]},"aBL":{"ah":["U5"],"ev":[]},"b7f":{"ah":["avS"]},"b7e":{"aB":[]},"TN":{"ag":[],"r":[]},"bhB":{"ah":["TN"]},"bta":{"aB":[]},"ads":{"aB":[]},"UB":{"ag":[],"r":[]},"UD":{"ag":[],"r":[]},"bia":{"ah":["UB"]},"bfb":{"aB":[]},"aCp":{"ah":["UD"]},"bfq":{"aB":[]},"a7i":{"au":[],"r":[]},"Vu":{"ag":[],"r":[]},"Uc":{"ag":[],"r":[]},"Tp":{"ag":[],"r":[]},"U3":{"ag":[],"r":[]},"UP":{"ag":[],"r":[]},"V2":{"ag":[],"r":[]},"Vn":{"ag":[],"r":[]},"UN":{"ag":[],"r":[]},"aDg":{"ah":["Vu"]},"btm":{"aB":[]},"bhK":{"ah":["Uc"]},"bod":{"aB":[]},"bhn":{"ah":["Tp"]},"bhE":{"ah":["U3"]},"bjG":{"aB":[]},"aCz":{"ah":["UP"]},"aCV":{"ah":["V2"]},"biS":{"ah":["Vn"]},"bil":{"ah":["UN"]},"bbp":{"au":[],"r":[]},"b53":{"au":[],"r":[]},"dz":{"au":[],"r":[]},"eK":{"au":[],"r":[]},"auh":{"au":[],"r":[]},"fg":{"au":[],"r":[]},"EJ":{"au":[],"r":[]},"Uj":{"ag":[],"r":[]},"aBW":{"ah":["Uj"]},"bdD":{"aB":[]},"Vq":{"ag":[],"r":[]},"biW":{"ah":["Vq"]},"Vb":{"ag":[],"r":[]},"Uk":{"ag":[],"r":[]},"V3":{"ag":[],"r":[]},"biI":{"ah":["Vb"]},"bq_":{"aB":[]},"aBX":{"ah":["Uk"]},"b8T":{"aB":[]},"biF":{"ah":["V3"]},"bpy":{"aB":[]},"Tn":{"ag":[],"r":[]},"Ug":{"ag":[],"r":[]},"V_":{"ag":[],"r":[]},"bhm":{"ah":["Tn"]},"b8h":{"aB":[]},"bhN":{"ah":["Ug"]},"bdt":{"aB":[]},"biE":{"ah":["V_"]},"boO":{"aB":[]}}'))
C.Pn(b.typeUniverse,JSON.parse('{"mu":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("mB<w?>"),e8:w("d2"),G:w("w"),l:w("bq<n,n>"),J:w("bq<n,N>"),I:w("bq<n,G>"),R:w("eV<n>"),Z:w("a0"),M:w("P<d9>"),f5:w("P<a24>"),gh:w("P<aQm>"),h:w("P<a28>"),V:w("P<ac>"),O:w("P<w>"),ey:w("P<S>"),dh:w("P<RX>"),aJ:w("P<ay<aC>>"),w:w("P<a0>"),Q:w("P<ak<w>>"),B:w("P<ak<RX>>"),gO:w("P<ak<ak<N>>>"),bj:w("P<ak<n>>"),b:w("P<ak<N>>"),fA:w("P<ak<G?>>"),D:w("P<a4<n,aC>>"),g:w("P<u>"),bz:w("P<tc>"),ds:w("P<a7F>"),v:w("P<hn>"),U:w("P<+(u,N)>"),ev:w("P<+(u,G)>"),K:w("P<+(n,n)>"),fT:w("P<+(N,r)>"),E:w("P<+(G,n)>"),u:w("P<+(G,G)>"),c:w("P<+(n,n,a0)>"),e:w("P<+(n,N,N,G)>"),o:w("P<+(n,G,n,G)>"),d:w("P<+(n,n,N,N,a4<n,N>)>"),_:w("P<uA>"),q:w("P<cP>"),fQ:w("P<a9e>"),s:w("P<n>"),cF:w("P<ar>"),X:w("P<vU>"),F:w("P<a9Z>"),p:w("P<r>"),bL:w("P<aai>"),fH:w("P<le>"),aq:w("P<b7V>"),a_:w("P<aaw>"),cS:w("P<aaD>"),cB:w("P<nd>"),ba:w("P<aaN>"),d9:w("P<OQ>"),bi:w("P<ab5>"),eW:w("P<BS>"),fY:w("P<Yl>"),aX:w("P<Fd>"),ea:w("P<abU>"),gB:w("P<aco>"),ed:w("P<P6>"),g4:w("P<bjF>"),aS:w("P<ZS>"),ac:w("P<acH>"),cd:w("P<C2>"),fr:w("P<adz>"),e4:w("P<a_y>"),r:w("P<adE>"),au:w("P<aGD>"),f7:w("P<R>"),n:w("P<N>"),t:w("P<G>"),dS:w("P<aB?>"),fs:w("P<tc?>"),d4:w("P<n?>"),bN:w("P<G?>"),gJ:w("cp<ahq>"),A:w("cp<ah<ag>>"),bF:w("ak<w>"),gl:w("ak<S>"),ew:w("ak<aC>"),j:w("ak<@>"),bW:w("ak<G>"),a:w("a4<n,@>"),f:w("a4<@,@>"),bd:w("K<e7,n>"),dv:w("K<n,n>"),fR:w("K<+(N,r),r>"),m:w("iz"),gA:w("yK"),gD:w("vu"),P:w("cn"),C:w("aC"),W:w("tc"),dV:w("e7"),g7:w("By"),N:w("n"),bO:w("ar"),k:w("ko"),Y:w("bm<N>"),cL:w("aa_"),gj:w("cw<n>"),aC:w("cw<G?>"),dg:w("e6<qy>"),e3:w("b8k"),a2:w("BO"),f3:w("qy"),es:w("Fh"),gV:w("mU"),y:w("R"),i:w("N"),z:w("@"),S:w("G"),L:w("ak<@>?"),fF:w("a4<@,@>?"),cK:w("aC?"),az:w("pK?"),T:w("n?"),cD:w("N?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aUn=new C.d9(0,0.85)
D.fpi=new C.x("Tap once to start the chain",null,L.SU,null,null,null,null,null,null,null,null,null)
D.aTW=new C.bI(D.aUn,null,null,D.fpi,null)
D.aUd=new C.d9(0,0.1)
D.aVh=new B.aQw(0,0,0)
D.Jy=new B.aQw(0,0.5,0)
D.aVO=new C.az(A.bc,1,A.r,-1)
D.aXh=new C.aY(0,1/0,0,290)
D.aXo=new C.aY(16,1/0,16,1/0)
D.aYB=new C.o(A.bn,null,null,null,null,null,A.a6)
D.eS9=new C.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frB=new C.x("\u26a1",null,D.eS9,null,null,null,null,null,null,null,null,null)
D.b21=new C.cq(A.A,null,null,D.frB,null)
D.aOm=new C.F(!0,A.c_,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhQ=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aOm,null,A.L,null,null,null,null,null,null,null)
D.e1z=new C.C(A.nK,D.fhQ,null)
D.b2a=new C.cq(A.A,null,null,D.e1z,null)
D.flq=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kt,null,A.L,null,null,null,null,null,null,null)
D.e1D=new C.C(A.nK,D.flq,null)
D.b2u=new C.cq(A.A,null,null,D.e1D,null)
D.f1P=new C.F(!0,A.j4,null,null,null,null,18,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq2=new C.x("Draw anywhere",null,D.f1P,null,null,null,null,null,null,null,null,null)
D.b2y=new C.cq(A.A,null,null,D.fq2,null)
D.f8k=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aOm,null,A.L,null,null,null,null,null,null,null)
D.e2i=new C.C(A.F0,D.f8k,null)
D.b2R=new C.cq(A.A,null,null,D.e2i,null)
D.aaN=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b5l=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b68=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Vc=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b6d=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b6i=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b6n=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.Ve=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b7p=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b7u=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b7L=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.b8N=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.ac2=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.b9e=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.b9k=new C.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
D.A5=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.b9Y=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.acp=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.baz=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.baG=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.acA=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.VS=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bbb=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.acH=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.E6=new C.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.acS=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.W3=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bcX=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bcZ=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bd2=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bdb=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.adj=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bdy=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.Ef=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.beC=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.beK=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.beN=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.beX=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bf0=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bf7=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.uO=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.ae6=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bg8=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bgR=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bhi=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bhF=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.aew=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.blM=new C.b9(11e6)
D.bmN=new C.Q(0,0,8,6)
D.afs=new C.Q(0,0,9,0)
D.bnk=new C.Q(10,0,10,4)
D.bnp=new C.Q(10,10,10,6)
D.bnx=new C.Q(10,34,10,26)
D.bnF=new C.Q(10,6,10,2)
D.Xs=new C.Q(10,6,10,4)
D.bnH=new C.Q(10,8,0,10)
D.boj=new C.Q(12,8,8,8)
D.boo=new C.Q(14,0,14,22)
D.boq=new C.Q(14,0,14,30)
D.afR=new C.Q(14,0,14,6)
D.afY=new C.Q(14,10,8,12)
D.boX=new C.Q(14,8,14,6)
D.bpo=new C.Q(16,4,16,28)
D.bpy=new C.Q(16,8,16,12)
D.brC=new C.Q(26,12,26,58)
D.bsp=new C.Q(4,4,6,2)
D.bsr=new C.Q(4,4,8,2)
D.bt0=new C.Q(8,14,8,12)
D.bt7=new C.Q(8,40,8,30)
D.btc=new C.Q(8,6,16,0)
D.btd=new C.Q(8,6,8,8)
D.btw=new C.Q(0,0,1.5,0)
D.aV3=new C.Gp(26,"saturation")
D.btO=new C.ys(A.cU,D.aV3,null,A.aaL)
D.f7s=new C.x("REACTION LAB",null,W.aOX,null,null,null,null,A.a2,null,1,null,null)
D.btU=new C.bF(1,A.bj,D.f7s,null)
D.eZK=new C.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fat=new C.x("CORE PROTOCOL",null,D.eZK,null,null,null,null,null,null,null,null,null)
D.bu5=new C.bF(1,A.bj,D.fat,null)
D.fba=new C.x("\ud83d\udce2 NGMY Ads",null,A.q6,null,null,null,null,A.eC,null,1,null,null)
D.buJ=new C.bF(1,A.bj,D.fba,null)
D.f6b=new C.x("Wire selected",null,A.hn,null,null,null,null,null,null,null,null,null)
D.buX=new C.bF(1,A.bj,D.f6b,null)
D.aj4=new C.a0(62712,"MaterialIcons",!1)
D.bzF=new C.a0(62878,"MaterialIcons",!1)
D.ZL=new C.a0(62908,"MaterialIcons",!1)
D.bzI=new C.a0(62918,"MaterialIcons",!1)
D.bzJ=new C.a0(62931,"MaterialIcons",!1)
D.bzM=new C.a0(62951,"MaterialIcons",!1)
D.bA1=new C.a0(63064,"MaterialIcons",!1)
D.bA3=new C.a0(63070,"MaterialIcons",!1)
D.xJ=new C.a0(63128,"MaterialIcons",!1)
D.FK=new C.a0(63726,"MaterialIcons",!1)
D.bBm=new C.a0(983122,"MaterialIcons",!1)
D.bBA=new C.a0(983247,"MaterialIcons",!1)
D.bBM=new C.a0(983415,"MaterialIcons",!1)
D.bBN=new C.a0(983417,"MaterialIcons",!1)
D.bBO=new C.a0(983442,"MaterialIcons",!1)
D.bBP=new C.a0(983443,"MaterialIcons",!1)
D.akq=new C.a0(983467,"MaterialIcons",!1)
D.bBV=new C.a0(983501,"MaterialIcons",!1)
D.bC5=new C.a0(983616,"MaterialIcons",!1)
D.bC6=new C.a0(983624,"MaterialIcons",!1)
D.bCi=new C.a0(983776,"MaterialIcons",!1)
D.bCz=new C.a0(984561,"MaterialIcons",!1)
D.bD9=new C.ae(A.qR,24,A.aM,null,null,null)
D.bDT=new C.ae(A.N0,null,A.ad,null,null,null)
D.bEq=new C.ae(A.mg,21,A.ad,null,null,null)
D.bBl=new C.a0(983117,"MaterialIcons",!1)
D.bFL=new C.ae(D.bBl,28,A.c,null,null,null)
D.bG0=new C.ae(A.ja,18,null,null,null,null)
D.bHL=new C.ae(A.e4,21,A.cr,null,null,null)
D.bI_=new C.ae(A.mh,null,A.ad,null,null,null)
D.bI9=new C.ae(A.a_D,21,A.ad,null,null,null)
D.bIZ=new C.ae(A.eA,17,A.ad,null,null,null)
D.alP=new C.ae(A.eA,19,null,null,null,null)
D.ml=new C.ae(A.vj,21,A.ad,null,null,null)
D.bKr=new C.ae(A.Mt,null,A.ad,null,null,null)
D.bLA=new C.ae(A.ja,21,A.ad,null,null,null)
D.bMq=new C.ae(A.fa,20,A.az,null,null,null)
D.bN5=new C.ae(A.dW,null,A.aM,null,null,null)
D.bNq=new C.ae(A.jS,null,A.az,null,null,null)
D.d70=w([A.dp,A.d7,A.dp],x.O)
D.bQ6=new C.a7(A.a3,A.a7,A.x,D.d70,null,null)
D.cMS=w([A.bV,A.bo],x.O)
D.bQe=new C.a7(A.b0,A.b6,A.x,D.cMS,null,null)
D.bQp=new C.a7(A.b0,A.b6,A.x,A.avS,null,null)
D.cNd=w([A.hf,A.fh],x.O)
D.bQy=new C.a7(A.b0,A.b6,A.x,D.cNd,null,null)
D.amQ=new C.a7(A.b0,A.b6,A.x,K.a1j,null,null)
D.cKH=w([A.ob,A.i3],x.O)
D.bRb=new C.a7(A.b0,A.b6,A.x,D.cKH,null,null)
D.cMA=w([A.es,A.aA],x.O)
D.amX=new C.a7(A.b0,A.b6,A.x,D.cMA,null,null)
D.d1H=w([A.dL,A.iL,A.bo],x.O)
D.bRs=new C.a7(A.a3,A.a7,A.x,D.d1H,null,null)
D.d1N=w([A.ka,A.cC],x.O)
D.bRM=new C.a7(A.b0,A.b6,A.x,D.d1N,null,null)
D.cjL=w([A.bV,A.dL],x.O)
D.bRV=new C.a7(A.a3,A.a7,A.x,D.cjL,null,null)
D.awt=w([A.es,M.mN],x.O)
D.bS1=new C.a7(A.b0,A.b6,A.x,D.awt,null,null)
D.bSh=new C.a7(A.b0,A.b6,A.x,I.ani,null,null)
D.bbh=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b4J=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cI9=w([D.bbh,D.b4J],x.O)
D.bSu=new C.a7(A.b0,A.b6,A.x,D.cI9,null,null)
D.bT4=new C.a7(A.ax,A.aD,A.x,A.a1g,null,null)
D.bfD=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dci=w([D.bfD,A.K4],x.O)
D.bTb=new C.a7(A.b0,A.b6,A.x,D.dci,null,null)
D.cVd=w([A.aA,A.w],x.O)
D.bTg=new C.a7(A.b0,A.b6,A.x,D.cVd,null,null)
D.bTj=new C.a7(A.b0,A.b6,A.x,U.avW,null,null)
D.bf4=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bfM=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cwi=w([A.KL,D.bf4,D.bfM],x.O)
D.bTs=new C.a7(A.b0,A.b6,A.x,D.cwi,null,null)
D.ck4=w([A.da,A.fv],x.O)
D.bTH=new C.a7(A.b0,A.b6,A.x,D.ck4,null,null)
D.bTN=new C.a7(A.ax,A.aD,A.x,A.a22,null,null)
D.ank=w([0,2,4,6,7,9,11],x.t)
D.bUn=w([0,4,7],x.t)
D.ano=w([0,4,7,12],x.t)
D.bUo=w([0,4,7,4],x.t)
D.avD=w([A.fZ,A.pl],x.O)
D.avc=w([A.hu,A.cY],x.O)
D.atE=w([A.by,A.dO],x.O)
D.cEL=w([A.aM,A.da],x.O)
D.cL2=w([A.cr,A.eM],x.O)
D.d2S=w([A.bZ,A.lt],x.O)
D.at8=w([A.cv,A.jJ],x.O)
D.cJG=w([A.bI,A.aK],x.O)
D.bUJ=w([D.avD,D.avc,A.a1n,D.atE,D.cEL,D.cL2,A.auL,D.d2S,D.at8,D.cJG],x.Q)
D.bZn=w([120,220,380],x.t)
D.c27=w([12,16,19,24],x.t)
D.c2g=w([1400,800,450,2400],x.t)
D.c6s=w([0,0.6,1],x.n)
D.caA=w([250,450,900,1500],x.t)
D.b5y=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bfo=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bdA=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bip=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bcN=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.asn=w([D.b5y,D.bfo,D.bdA,D.bip,D.bcN],x.O)
D.etS=new C.z("type","Typewriter")
D.en7=new C.z("bounce","Bounce")
D.euC=new C.z("wave","Wave")
D.evF=new C.z("zoom","Zoom")
D.cr9=w([D.etS,D.en7,D.euC,A.a58,I.aKl,D.evF,I.aKn],x.K)
D.crl=w([50,25,75],x.t)
D.cwO=w([0,5,10,15,18,20,25],x.t)
D.eoK=new C.z("fish","Fish")
D.eoM=new C.z("fly","Fireflies")
D.en5=new C.z("bird","Birds")
D.cAX=w([D.eoK,D.eoM,D.en5],x.K)
D.cF0=w([900,500,250,1600],x.t)
D.cIy=w([0.78,1],x.n)
D.atF=w([0,2,4,7,9,12,14,16],x.t)
D.cJ5=w([A.by,A.bz,A.b7,A.by],x.O)
D.atK=w(["A","T","C","G"],x.s)
D.cJ6=w(["A","U","C","G"],x.s)
D.a1d=w([A.aB,A.cp,A.bn,A.aW,A.nz],x.O)
D.cKn=w([A.aA,A.aB,A.cv,A.cp,A.bn,A.cw,A.c8,A.bz,A.K4],x.O)
D.a1h=w([0.04,0.17,0.3],x.n)
D.cKZ=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Gw=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eDb=new B.uA("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eDh=new B.uA("Medium engine","A good all-rounder.",0.3,0.9)
D.eDg=new B.uA("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Gx=w([D.eDb,D.eDh,D.eDg],x._)
D.edn=new C.z(6,"Easy")
D.edX=new C.z(8,"Medium")
D.e9R=new C.z(10,"Hard")
D.cLN=w([D.edn,D.edX,D.e9R],x.E)
D.au3=w([0.55,0.78,1],x.n)
D.cNi=w([0.93,0.975,1],x.n)
D.aue=w([A.c,A.h_,A.p9,A.aA],x.O)
D.fuy=new B.xE("Moon",1737,4291941851)
D.fuv=new B.xE("Earth",6371,4281908728)
D.fuz=new B.xE("Neptune",24622,4284524026)
D.fuA=new B.xE("Saturn",58232,4294829706)
D.fuw=new B.xE("Jupiter",69911,4294677052)
D.fuB=new B.xE("Sun",696340,4294688548)
D.fuC=new B.xE("Sirius A",119e4,4290763774)
D.fut=new B.xE("Arcturus",179e5,4294818420)
D.fuu=new B.xE("Betelgeuse",531e6,4294472049)
D.fux=new B.xE("UY Scuti",667e6,4293870660)
D.Pa=w([D.fuy,D.fuv,D.fuz,D.fuA,D.fuw,D.fuB,D.fuC,D.fut,D.fuu,D.fux],C.ax("P<xE>"))
D.ez_=new C.bv("glow","Glow",A.ZN)
D.ewI=new C.bv("rainbow","Rainbow",A.n1)
D.ex3=new C.bv("stars","Stars",A.hZ)
D.ews=new C.bv("sparks","Sparks",A.dW)
D.eyj=new C.bv("fire","Fire",A.vk)
D.cP_=w([D.ez_,D.ewI,D.ex3,D.ews,D.eyj],x.c)
D.aui=w([A.bn,A.aB,A.cp,A.d7],x.O)
D.cPY=w([0.2,1],x.n)
D.eD8=new B.uA("Radar","Shows your height above the ground.",0.1,0)
D.eD9=new B.uA("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eD6=new B.uA("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.auq=w([D.eD8,D.eD9,D.eD6],x._)
D.exB=new C.bv("attract","Attract",A.y1)
D.exo=new C.bv("scare","Scare",A.qP)
D.ewB=new C.bv("food","Food",A.tH)
D.bBr=new C.a0(983158,"MaterialIcons",!1)
D.exU=new C.bv("hunt","Hunt",D.bBr)
D.cQz=w([D.exB,D.exo,D.ewB,D.exU],x.c)
D.cQY=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cRc=w([47,100,220,470,1000],x.n)
D.auI=w([0,2,4,7,9],x.t)
D.Hz={volts:0}
D.a2W=new C.bq(D.Hz,[3],x.J)
D.HV=new C.eN(["b","battery",0.2,0.3,D.a2W])
D.dXY={on:0}
D.dgX=new C.bq(D.dXY,[1],x.J)
D.CC=new C.eN(["s","switch",0.5,0.3,D.dgX])
D.eBq=new C.eN(["l","bulb",0.8,0.3,A.iS])
D.cMZ=w([D.HV,D.CC,D.eBq],x.d)
D.CB=new C.cL(["b",0,"s",0])
D.eAu=new C.cL(["s",1,"l",0])
D.aKr=new C.cL(["l",1,"b",1])
D.d1S=w([D.CB,D.eAu,D.aKr],x.o)
D.cMs=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.e9b=new B.mr("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cMZ,D.d1S,D.cMs)
D.aEB={ohms:0}
D.aCd=new C.bq(D.aEB,[220],x.J)
D.eAW=new C.eN(["r","resistor",0.5,0.3,D.aCd])
D.eBD=new C.eN(["d","led",0.8,0.3,A.iS])
D.d4K=w([D.HV,D.eAW,D.eBD],x.d)
D.ezS=new C.cL(["b",0,"r",0])
D.eAo=new C.cL(["r",1,"d",0])
D.ezY=new C.cL(["d",1,"b",1])
D.dcM=w([D.ezS,D.eAo,D.ezY],x.o)
D.d58=w(["led","diode","indicator"],x.s)
D.e9i=new B.mr("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d4K,D.dcM,D.d58)
D.a4c={level:0}
D.dgl=new C.bq(D.a4c,[0.2],x.J)
D.eB1=new C.eN(["p","pot",0.5,0.3,D.dgl])
D.eB3=new C.eN(["m","motor",0.8,0.3,A.iS])
D.cNg=w([D.HV,D.eB1,D.eB3],x.d)
D.ezR=new C.cL(["b",0,"p",0])
D.eAk=new C.cL(["p",1,"m",0])
D.eAh=new C.cL(["m",1,"b",1])
D.d8U=w([D.ezR,D.eAk,D.eAh],x.o)
D.d1B=w(["fan","motor","spin","dimmer"],x.s)
D.e99=new B.mr("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cNg,D.d8U,D.d1B)
D.a2T=new C.bq(D.a4c,[0.9],x.J)
D.aKy=new C.eN(["s","solar",0.25,0.3,D.a2T])
D.aKx=new C.eN(["l","bulb",0.75,0.3,A.iS])
D.cPG=w([D.aKy,D.aKx],x.d)
D.eAr=new C.cL(["s",0,"l",0])
D.eAg=new C.cL(["l",1,"s",1])
D.cNY=w([D.eAr,D.eAg],x.o)
D.d9r=w(["solar","sun","without battery","no battery","free"],x.s)
D.e9c=new B.mr("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cPG,D.cNY,D.d9r)
D.eBG=new C.eN(["c","crank",0.25,0.3,D.a2T])
D.d01=w([D.eBG,D.aKx],x.d)
D.ezV=new C.cL(["c",0,"l",0])
D.eAf=new C.cL(["l",1,"c",1])
D.d0z=w([D.ezV,D.eAf],x.o)
D.d0a=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.e98=new B.mr("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d01,D.d0z,D.d0a)
D.dgk=new C.bq(D.a4c,[0.7],x.J)
D.eB6=new C.eN(["t","turbine",0.25,0.3,D.dgk])
D.eAV=new C.eN(["m","motor",0.75,0.3,A.iS])
D.cVQ=w([D.eB6,D.eAV],x.d)
D.eAC=new C.cL(["t",0,"m",0])
D.eAi=new C.cL(["m",1,"t",1])
D.cUT=w([D.eAC,D.eAi],x.o)
D.cZW=w(["wind","turbine","windmill","water","hydro"],x.s)
D.e95=new B.mr("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cVQ,D.cUT,D.cZW)
D.aCa=new C.bq(D.Hz,[9],x.J)
D.a5b=new C.eN(["b","battery",0.2,0.3,D.aCa])
D.aKw=new C.eN(["r","radio",0.8,0.3,A.iS])
D.da_=w([D.a5b,D.CC,D.aKw],x.d)
D.eAw=new C.cL(["s",1,"r",0])
D.aKs=new C.cL(["r",1,"b",1])
D.bU6=w([D.CB,D.eAw,D.aKs],x.o)
D.d8G=w(["radio","music","listen"],x.s)
D.e9h=new B.mr("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.da_,D.bU6,D.d8G)
D.dho=new C.bq(D.Hz,[12],x.J)
D.aKv=new C.eN(["b","battery",0.2,0.3,D.dho])
D.eBr=new C.eN(["t","tv",0.8,0.3,A.iS])
D.cN_=w([D.aKv,D.CC,D.eBr],x.d)
D.eAx=new C.cL(["s",1,"t",0])
D.aKt=new C.cL(["t",1,"b",1])
D.d2V=w([D.CB,D.eAx,D.aKt],x.o)
D.d9Y=w(["tv","television","screen","watch"],x.s)
D.e92=new B.mr("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cN_,D.d2V,D.d9Y)
D.eBh=new C.eN(["z","buzzer",0.8,0.3,A.iS])
D.ctE=w([D.HV,D.CC,D.eBh],x.d)
D.eAy=new C.cL(["s",1,"z",0])
D.eAQ=new C.cL(["z",1,"b",1])
D.cIk=w([D.CB,D.eAy,D.eAQ],x.o)
D.d75=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.e9e=new B.mr("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.ctE,D.cIk,D.d75)
D.eB2=new C.eN(["h","heater",0.8,0.3,A.iS])
D.cYF=w([D.a5b,D.CC,D.eB2],x.d)
D.eAt=new C.cL(["s",1,"h",0])
D.eA5=new C.cL(["h",1,"b",1])
D.cJ1=w([D.CB,D.eAt,D.eA5],x.o)
D.cdR=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.e93=new B.mr("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cYF,D.cJ1,D.cdR)
D.eBt=new C.eN(["s","solar",0.2,0.25,D.a2T])
D.dht=new C.bq(D.aEB,[100],x.J)
D.eBw=new C.eN(["r","resistor",0.55,0.25,D.dht])
D.eBC=new C.eN(["c","capacitor",0.85,0.25,A.iS])
D.eAZ=new C.eN(["q","resistor",0.55,0.6,D.aCd])
D.eBu=new C.eN(["d","led",0.85,0.6,A.iS])
D.d2y=w([D.eBt,D.eBw,D.eBC,D.eAZ,D.eBu],x.d)
D.eAs=new C.cL(["s",0,"r",0])
D.eAn=new C.cL(["r",1,"c",0])
D.ezX=new C.cL(["c",1,"s",1])
D.ezW=new C.cL(["c",0,"q",0])
D.eAm=new C.cL(["q",1,"d",0])
D.ezZ=new C.cL(["d",1,"c",1])
D.cT_=w([D.eAs,D.eAn,D.ezX,D.ezW,D.eAm,D.ezZ],x.o)
D.d_p=w(["capacitor","store","charge","flash"],x.s)
D.e9g=new B.mr("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d2y,D.cT_,D.d_p)
D.eB9=new C.eN(["b","battery",0.15,0.3,D.a2W])
D.eBH=new C.eN(["l1","bulb",0.5,0.3,A.iS])
D.eBf=new C.eN(["l2","bulb",0.85,0.3,A.iS])
D.cLg=w([D.eB9,D.eBH,D.eBf],x.d)
D.ezQ=new C.cL(["b",0,"l1",0])
D.eAc=new C.cL(["l1",1,"l2",0])
D.eAd=new C.cL(["l2",1,"b",1])
D.cWt=w([D.ezQ,D.eAc,D.eAd],x.o)
D.d9K=w(["series","two bulbs","dim"],x.s)
D.e96=new B.mr("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cLg,D.cWt,D.d9K)
D.dY9={volts:0,charge:1}
D.dhy=new C.bq(D.dY9,[1.5,0],x.J)
D.eBA=new C.eN(["b","battery",0.75,0.3,D.dhy])
D.cKI=w([D.aKy,D.eBA],x.d)
D.eAq=new C.cL(["s",0,"b",0])
D.ezU=new C.cL(["b",1,"s",1])
D.cTf=w([D.eAq,D.ezU],x.o)
D.d_w=w(["charge","rechargeable","flat","recharge"],x.s)
D.e94=new B.mr("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cKI,D.cTf,D.d_w)
D.dhn=new C.bq(D.Hz,[4.5],x.J)
D.eB4=new C.eN(["b","battery",0.2,0.3,D.dhn])
D.aKu=new C.eN(["p","phone",0.8,0.3,A.iS])
D.cVG=w([D.eB4,D.CC,D.aKu],x.d)
D.eAv=new C.cL(["s",1,"p",0])
D.a5a=new C.cL(["p",1,"b",1])
D.d67=w([D.CB,D.eAv,D.a5a],x.o)
D.d7t=w(["phone","charger","usb","mobile"],x.s)
D.e9a=new B.mr("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cVG,D.d67,D.d7t)
D.eAS=new C.eN(["f","fan",0.8,0.3,A.iS])
D.c63=w([D.HV,D.eAS],x.d)
D.ezP=new C.cL(["b",0,"f",0])
D.eA3=new C.cL(["f",1,"b",1])
D.cJu=w([D.ezP,D.eA3],x.o)
D.d1A=w(["fan","cool","air","wind"],x.s)
D.e9j=new B.mr("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c63,D.cJu,D.d1A)
D.eBl=new C.eN(["b","battery",0.15,0.2,D.a2W])
D.eAT=new C.eN(["a","ammeter",0.5,0.2,A.iS])
D.eAR=new C.eN(["l","bulb",0.85,0.2,A.iS])
D.eBn=new C.eN(["v","voltmeter",0.5,0.6,A.iS])
D.d_P=w([D.eBl,D.eAT,D.eAR,D.eBn],x.d)
D.ezN=new C.cL(["b",0,"a",0])
D.ezM=new C.cL(["a",1,"l",0])
D.eAE=new C.cL(["v",0,"l",0])
D.eAF=new C.cL(["v",1,"l",1])
D.cT6=w([D.ezN,D.ezM,D.aKr,D.eAE,D.eAF],x.o)
D.dcL=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.e9f=new B.mr("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d_P,D.cT6,D.dcL)
D.eBK=new C.eN(["b","battery",0.15,0.2,D.aCa])
D.eB8=new C.eN(["t","tv",0.55,0.2,A.iS])
D.aCb=new C.bq(D.Hz,[5],x.J)
D.eAX=new C.eN(["c","buck",0.4,0.5,D.aCb])
D.eBa=new C.eN(["p","phone",0.8,0.5,A.iS])
D.cR_=w([D.eBK,D.eB8,D.eAX,D.eBa],x.d)
D.ezT=new C.cL(["b",0,"t",0])
D.aKp=new C.cL(["b",0,"c",0])
D.aKq=new C.cL(["c",1,"p",0])
D.cVD=w([D.ezT,D.aKt,D.aKp,D.aKq,D.a5a],x.o)
D.cPg=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.e97=new B.mr("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cR_,D.cVD,D.cPg)
D.eAY=new C.eN(["c","buck",0.5,0.3,D.aCb])
D.cIT=w([D.aKv,D.eAY,D.aKu],x.d)
D.cNo=w([D.aKp,D.aKq,D.a5a],x.o)
D.che=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.e91=new B.mr("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cIT,D.cNo,D.che)
D.eBd=new C.eN(["d","diode",0.5,0.3,A.iS])
D.cWG=w([D.a5b,D.eBd,D.aKw],x.d)
D.ezO=new C.cL(["b",0,"d",0])
D.eA_=new C.cL(["d",1,"r",0])
D.cw8=w([D.ezO,D.eA_,D.aKs],x.o)
D.cOX=w(["diode","protect","backwards","one way"],x.s)
D.e9d=new B.mr("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.cWG,D.cw8,D.cOX)
D.Pd=w([D.e9b,D.e9i,D.e99,D.e9c,D.e98,D.e95,D.e9h,D.e92,D.e9e,D.e93,D.e9g,D.e96,D.e94,D.e9a,D.e9j,D.e9f,D.e97,D.e91,D.e9d],C.ax("P<mr>"))
D.fOP=new B.Fu("Moon",1.62,A.dL,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fON=new B.Fu("Mars",3.71,A.aB,"Mars has about 38 percent of Earth's gravity.")
D.fOQ=new B.Fu("Mercury",3.7,A.jI,"Mercury is small, so its gravity is like Mars.")
D.fOK=new B.Fu("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.fOM=new B.Fu("Earth",9.81,A.aW,"On Earth gravity is strong, and the air also slows you down.")
D.fOO=new B.Fu("Neptune",11.15,A.d7,"Neptune pulls a little harder than Earth.")
D.fOL=new B.Fu("Jupiter",24.79,A.cv,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qZ=w([D.fOP,D.fON,D.fOQ,D.fOK,D.fOM,D.fOO,D.fOL],C.ax("P<Fu>"))
D.cSY=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a1w=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cTC=w([0.2,0.5,0.8],x.n)
D.bzX=new C.a0(63040,"MaterialIcons",!1)
D.exs=new C.bv("peg","Peg",D.bzX)
D.ewF=new C.bv("bar","Bar",S.Bi)
D.ex6=new C.bv("erase","Erase",A.Mx)
D.cTN=w([D.exs,D.ewF,D.ex6],x.c)
D.eFZ=new C.cP(A.bh,A.J,4)
D.cTX=w([D.eFZ],x.q)
D.auX=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aT3=new B.JI(0,"accordion")
D.cJM=w([A.jc,A.Bj,A.B7],x.w)
D.cQr=w(["Mail","SMS","Ad"],x.s)
D.cKf=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fN1=new B.A1(D.aT3,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.avD,D.cJM,D.cQr,D.cKf)
D.a8y=new B.JI(1,"flip")
D.d_j=w([A.pD,A_.FW,A.tI],x.w)
D.cVm=w(["Unlock","Verify","Secure"],x.s)
D.cIP=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fN0=new B.A1(D.a8y,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.avc,D.d_j,D.cVm,D.cIP)
D.aT4=new B.JI(2,"towers")
D.cUe=w([A.xX,A.pI,A.hJ],x.w)
D.cTT=w(["Save","Grow","Earn"],x.s)
D.cwX=w(["","",""],x.s)
D.fN2=new B.A1(D.aT4,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a1n,D.cUe,D.cTT,D.cwX)
D.a8z=new B.JI(3,"assemble")
D.d0d=w([A.n4,A.h4,A.dW],x.w)
D.cPR=w(["Launch","Charge","Shine"],x.s)
D.cXS=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fN4=new B.A1(D.a8z,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.atE,D.d0d,D.cPR,D.cXS)
D.aT5=new B.JI(4,"carousel")
D.d02=w([A.b7,A.fi],x.O)
D.cQB=w([A.mg,A.ajA,A.a_w],x.w)
D.cLD=w(["Explore","Discover","Learn"],x.s)
D.cVL=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fN_=new B.A1(D.aT5,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d02,D.cQB,D.cLD,D.cVL)
D.aT6=new B.JI(5,"burst")
D.cTP=w([A.j_,A.rU],x.O)
D.cKa=w([A.l7,A.mf,A.hY],x.w)
D.cKv=w(["Cheer","Win","Love"],x.s)
D.cMy=w(["Make some noise","First place","Share the joy"],x.s)
D.fN3=new B.A1(D.aT6,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cTP,D.cKa,D.cKv,D.cMy)
D.auY=w([D.fN1,D.fN0,D.fN2,D.fN4,D.fN_,D.fN3],C.ax("P<A1>"))
D.exu=new C.bv("skin","Skin",A.ajB)
D.eyN=new C.bv("muscle","Muscles",A.MJ)
D.eyx=new C.bv("organ","Organs",A.hY)
D.bzo=new C.a0(62747,"MaterialIcons",!1)
D.eyB=new C.bv("bone","Skeleton",D.bzo)
D.eyT=new C.bv("vessel","Blood vessels",A.pK)
D.cUj=w([D.exu,D.eyN,D.eyx,D.eyB,D.eyT],x.c)
D.eDa=new B.uA("Simple legs","Light. Land gently.",0.15,0.2)
D.eDc=new B.uA("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eDf=new B.uA("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.BG=w([D.eDa,D.eDc,D.eDf],x._)
D.cVT=w([1.77,3.55,7.15,16.7],x.n)
D.cYg=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.etl=new C.z("spiral","Spiral")
D.edl=new C.z("barred","Barred spiral")
D.eof=new C.z("elliptical","Elliptical")
D.cYV=w([D.etl,D.edl,D.eof],x.K)
D.ezv=new C.cL(["beat",0.18,0.28,0])
D.eAz=new C.cL(["burst",0.7,0.2,0])
D.eAK=new C.cL(["delay",0.45,0.5,1])
D.eAj=new C.cL(["ripple",0.75,0.6,3])
D.cPB=w([D.ezv,D.eAz,D.eAK,D.eAj],x.e)
D.a53=new C.z(2,3)
D.cZK=w([N.nb,K.HU,D.a53],x.u)
D.fMh=new B.Fh("First spark","A clock lights a burst and a ripple",D.cPB,D.cZK)
D.eA2=new C.cL(["beat",0.15,0.3,1])
D.eza=new C.cL(["ripple",0.62,0.15,0])
D.eAG=new C.cL(["delay",0.4,0.45,0])
D.ezJ=new C.cL(["ripple",0.7,0.45,0])
D.ezr=new C.cL(["delay",0.4,0.7,1])
D.eAl=new C.cL(["shake",0.75,0.75,0])
D.daI=w([D.eA2,D.eza,D.eAG,D.ezJ,D.ezr,D.eAl],x.e)
D.eaK=new C.z(2,4)
D.aKf=new C.z(4,5)
D.cSP=w([N.nb,K.HU,D.a53,D.eaK,D.aKf],x.u)
D.fMj=new B.Fh("Heartbeat","Two thumps, then a shake",D.daI,D.cSP)
D.ezA=new C.cL(["dice",0.15,0.7,1])
D.eAM=new C.cL(["echo",0.4,0.7,0])
D.ezH=new C.cL(["comet",0.7,0.5,4])
D.eAA=new C.cL(["burst",0.72,0.2,1])
D.eA0=new C.cL(["burst",0.3,0.25,0])
D.ezB=new C.cL(["pop",0.55,0.85,0])
D.cdq=w([D.ezA,D.eAM,D.ezH,D.eAA,D.eA0,D.ezB],x.e)
D.eaa=new C.z(1,3)
D.eab=new C.z(1,4)
D.aKe=new C.z(0,5)
D.d_Y=w([N.nb,K.vR,D.eaa,D.eab,D.aKe],x.u)
D.fMi=new B.Fh("Fireworks","Dice launch comets that burst in colour",D.cdq,D.d_Y)
D.ezE=new C.cL(["beat",0.15,0.2,2])
D.eA9=new C.cL(["chance",0.4,0.2,0])
D.ezx=new C.cL(["ball",0.7,0.12,3])
D.ezk=new C.cL(["chance",0.4,0.5,1])
D.eAL=new C.cL(["ball",0.3,0.08,1])
D.ezd=new C.cL(["ripple",0.7,0.55,3])
D.c6t=w([D.ezE,D.eA9,D.ezx,D.ezk,D.eAL,D.ezd],x.e)
D.a54=new C.z(3,4)
D.eaL=new C.z(2,5)
D.cto=w([N.nb,K.vR,K.a52,D.a54,D.eaL],x.u)
D.fMg=new B.Fh("Rain","Balls fall at random and splash",D.c6t,D.cto)
D.eAa=new C.cL(["beat",0.12,0.45,2])
D.eAB=new C.cL(["toggle",0.38,0.2,0])
D.eAI=new C.cL(["wash",0.7,0.15,4])
D.ezz=new C.cL(["count3",0.38,0.45,0])
D.eAD=new C.cL(["burst",0.72,0.4,0])
D.eA1=new C.cL(["light",0.55,0.7,1])
D.ezl=new C.cL(["pop",0.8,0.8,4])
D.d2w=w([D.eAa,D.eAB,D.eAI,D.ezz,D.eAD,D.eA1,D.ezl],x.e)
D.eb9=new C.z(3,6)
D.c9A=w([N.nb,K.vR,K.a52,D.a54,D.aKe,D.eb9],x.u)
D.fMe=new B.Fh("Disco","A beat drives lights, washes and bursts",D.d2w,D.c9A)
D.eAP=new C.cL(["button",0.12,0.2,0])
D.ezf=new C.cL(["delay",0.34,0.2,1])
D.eAO=new C.cL(["light",0.56,0.2,1])
D.eAH=new C.cL(["delay",0.56,0.45,1])
D.eAb=new C.cL(["ball",0.34,0.6,0])
D.ezj=new C.cL(["delay",0.34,0.8,1])
D.ez9=new C.cL(["burst",0.7,0.8,5])
D.bUM=w([D.eAP,D.ezf,D.eAO,D.eAH,D.eAb,D.ezj,D.ez9],x.e)
D.ed6=new C.z(5,6)
D.d7e=w([N.nb,K.vR,D.a53,D.a54,D.aKf,D.ed6],x.u)
D.fMf=new B.Fh("Domino","Tap the button and watch it run down the line",D.bUM,D.d7e)
D.avg=w([D.fMh,D.fMj,D.fMi,D.fMg,D.fMe,D.fMf],C.ax("P<Fh>"))
D.cZ2=w([0.05,0.15,0.25],x.n)
D.cZg=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.cZV=w([1.5,3,4.5,9,12],x.n)
D.ewd=new C.bv("dice","Dice",A.me)
D.exc=new C.bv("coin","Coin",L.xQ)
D.eyO=new C.bv("num","Number",A.y_)
D.d_4=w([D.ewd,D.exc,D.eyO],x.c)
D.d_7=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fuD=new B.Oo("Moon",1.62,0,4291941851)
D.fuE=new B.Oo("Mars",3.71,0.01,4294472049)
D.fuF=new B.Oo("Earth",9.81,1,4281908728)
D.fuH=new B.Oo("Jupiter",24.79,1.4,4294677052)
D.fuG=new B.Oo("Sun",274,2,4294688548)
D.yp=w([D.fuD,D.fuE,D.fuF,D.fuH,D.fuG],C.ax("P<Oo>"))
D.avm=w([A.cr,A.aM,A.bc,A.aW,A.by,A.bZ,A.cv,A.hu],x.O)
D.dWD={H:0}
D.dgY=new C.bq(D.dWD,[2],x.I)
D.div=new B.t_("Hydrogen","H\u2082",D.dgY,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dWE={H:0,Cl:1}
D.dh9=new C.bq(D.dWE,[1,1],x.I)
D.dix=new B.t_("Hydrogen chloride","HCl",D.dh9,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dWF={H:0,O:1}
D.dgH=new C.bq(D.dWF,[2,1],x.I)
D.diy=new B.t_("Water","H\u2082O",D.dgH,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dWS={N:0,H:1}
D.dhx=new C.bq(D.dWS,[1,3],x.I)
D.diG=new B.t_("Ammonia","NH\u2083",D.dhx,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a4b={C:0,H:1}
D.dhr=new C.bq(D.a4b,[1,4],x.I)
D.diz=new B.t_("Methane","CH\u2084",D.dhr,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dWG={H:0,S:1}
D.dfQ=new C.bq(D.dWG,[2,1],x.I)
D.diF=new B.t_("Hydrogen sulfide","H\u2082S",D.dfQ,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dWX={O:0}
D.dhv=new C.bq(D.dWX,[2],x.I)
D.diH=new B.t_("Oxygen","O\u2082",D.dhv,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dWR={N:0}
D.dgZ=new C.bq(D.dWR,[2],x.I)
D.diw=new B.t_("Nitrogen","N\u2082",D.dgZ,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dWr={C:0,O:1}
D.dhD=new C.bq(D.dWr,[1,2],x.I)
D.diD=new B.t_("Carbon dioxide","CO\u2082",D.dhD,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aEy={C:0,H:1,O:2}
D.dfC=new C.bq(D.aEy,[1,2,1],x.I)
D.diE=new B.t_("Formaldehyde","CH\u2082O",D.dfC,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dhq=new C.bq(D.a4b,[2,4],x.I)
D.diB=new B.t_("Ethene","C\u2082H\u2084",D.dhq,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dhp=new C.bq(D.a4b,[2,6],x.I)
D.diA=new B.t_("Ethane","C\u2082H\u2086",D.dhp,"Two carbons joined by a single bond, each holding three hydrogens.")
D.dfD=new C.bq(D.aEy,[1,4,1],x.I)
D.diC=new B.t_("Methanol","CH\u2083OH",D.dfD,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a1M=w([D.div,D.dix,D.diy,D.diG,D.diz,D.diF,D.diH,D.diw,D.diD,D.diE,D.diB,D.diA,D.diC],C.ax("P<t_>"))
D.d03=w([A.bZ,A.aW,A.dN,A.bc],x.O)
D.d0Y=w([],x.h)
D.d1_=w([],x.B)
D.a1V=w([],x.F)
D.e31=new B.e7("battery","Battery","\ud83d\udd0b",A.bc,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.e37=new B.e7("solar","Solar panel","\u2600\ufe0f",A.cp,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e3M=new B.e7("crank","Hand crank","\ud83d\udd04",A.cv,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.e3o=new B.e7("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aW,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e2U=new B.e7("buck","Step-down converter","\ud83d\udd3d",A.hu,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.e3m=new B.e7("regulator","5 V regulator","\ud83e\uddca",A.bI,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e3R=new B.e7("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e3y=new B.e7("ldr","Light sensor","\ud83c\udf1e",A.dN,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.e3c=new B.e7("switch","Switch","\ud83c\udf9a\ufe0f",A.by,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e3O=new B.e7("fuse","Fuse","\ud83e\uddef",A.cr,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e2M=new B.e7("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hu,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e3z=new B.e7("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e3B=new B.e7("bulb","Light bulb","\ud83d\udca1",A.dN,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.e39=new B.e7("led","LED","\ud83d\udd34",A.aB,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.e3d=new B.e7("motor","Motor","\u2699\ufe0f",A.bI,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e3v=new B.e7("buzzer","Buzzer","\ud83d\udd14",A.bZ,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.e32=new B.e7("heater","Heater","\ud83d\udd25",A.cv,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.e3q=new B.e7("capacitor","Capacitor","\ud83e\udeab",A.ct,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.e3i=new B.e7("radio","Radio","\ud83d\udcfb",A.nz,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.e3f=new B.e7("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b7,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e2T=new B.e7("voltmeter","Voltmeter","\ud83e\udded",A.bs,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.e3_=new B.e7("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.e35=new B.e7("fan","Fan","\ud83c\udf00",A.aW,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e3T=new B.e7("speaker","Speaker","\ud83d\udd0a",A.bZ,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e3I=new B.e7("clock","Digital clock","\u23f0",A.bc,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.e3l=new B.e7("calculator","Calculator","\ud83e\uddee",A.JZ,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.e2Z=new B.e7("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.ct,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e3S=new B.e7("router","WiFi router","\ud83d\udcf6",A.hu,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e3V=new B.e7("siren","Siren","\ud83d\udea8",A.aB,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e2P=new B.e7("toycar","Toy car","\ud83d\ude97",A.cv,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e3W=new B.e7("kettle","Kettle","\ud83e\uded6",A.ok,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e2X=new B.e7("lamp","Desk lamp","\ud83e\ude94",A.dN,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.e38=new B.e7("lights","Party lights","\ud83c\udf84",A.nz,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.e3j=new B.e7("fridge","Fridge","\ud83e\uddca",A.hf,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e2R=new B.e7("washer","Washing machine","\ud83e\udee7",A.ct,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e3J=new B.e7("blender","Blender","\ud83e\udd64",A.cr,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.e3g=new B.e7("drone","Drone","\ud83d\ude81",A.bI,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e2W=new B.e7("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.e3k=new B.e7("torch","Torch","\ud83d\udd26",A.bJ,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e3G=new B.e7("neon","Neon sign","\ud83e\udea7",A.bZ,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e2S=new B.e7("microwave","Microwave","\ud83c\udf72",A.cv,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e3A=new B.e7("doorbell","Doorbell","\ud83d\udd14",A.cp,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.e34=new B.e7("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e3u=new B.e7("console","Game console","\ud83c\udfae",A.by,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e3L=new B.e7("heartmon","Heart monitor","\ud83e\ude7a",A.fY,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e2Q=new B.e7("aquarium","Aquarium","\ud83d\udc20",A.b7,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.e3p=new B.e7("lighthouse","Lighthouse","\ud83d\uddfc",A.dN,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e3x=new B.e7("discoball","Disco ball","\ud83e\udea9",A.nz,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e3Q=new B.e7("robot","Robot","\ud83e\udd16",A.aW,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e2O=new B.e7("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e3U=new B.e7("ledstrip","LED strip","\ud83c\udf08",A.bZ,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e3F=new B.e7("pump","Water pump","\ud83d\udeb0",A.aW,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.e3r=new B.e7("hairdryer","Hair dryer","\ud83d\udca8",A.j_,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e3D=new B.e7("headphones","Headphones","\ud83c\udfa7",A.by,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.e2Y=new B.e7("smartwatch","Apple Watch Ultra","\u231a",A.bs,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e3P=new B.e7("tablet","iPad Pro M5","\ud83d\udcf2",A.ct,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e2L=new B.e7("lgtv","LG OLED evo G5","\ud83d\udcfa",A.fY,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.e3h=new B.e7("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bq,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.e3a=new B.e7("appletv","Apple TV 4K","\ud83d\udcfa",A.bV,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e3w=new B.e7("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.rR,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e2N=new B.e7("iphonefold","iPhone Fold","\ud83d\udcf1",A.b4,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.e30=new B.e7("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d7,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e3N=new B.e7("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cw,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.e3s=new B.e7("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bn,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.e3n=new B.e7("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cb,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e3E=new B.e7("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aB,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.e3b=new B.e7("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bc,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.e3t=new B.e7("honor","Honor Magic V5","\ud83d\udcf1",A.ct,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e3C=new B.e7("vivo","vivo X300 Pro","\ud83d\udcf1",A.cv,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e3H=new B.e7("ereader","Kindle Scribe","\ud83d\udcd6",A.bq,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e2K=new B.e7("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c8,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.e3e=new B.e7("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cw,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.e36=new B.e7("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b7,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e2V=new B.e7("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dN,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.e33=new B.e7("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aB,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e3K=new B.e7("vision","Apple Vision Pro","\ud83e\udd7d",A.by,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.PC=w([D.e31,D.e37,D.e3M,D.e3o,D.e2U,D.e3m,D.e3R,D.e3y,D.e3c,D.e3O,D.e2M,D.e3z,D.e3B,D.e39,D.e3d,D.e3v,D.e32,D.e3q,D.e3i,D.e3f,D.e2T,D.e3_,D.e35,D.e3T,D.e3I,D.e3l,D.e2Z,D.e3S,D.e3V,D.e2P,D.e3W,D.e2X,D.e38,D.e3j,D.e2R,D.e3J,D.e3g,D.e2W,D.e3k,D.e3G,D.e2S,D.e3A,D.e34,D.e3u,D.e3L,D.e2Q,D.e3p,D.e3x,D.e3Q,D.e2O,D.e3U,D.e3F,D.e3r,D.e3D,D.e2Y,D.e3P,D.e2L,D.e3h,D.e3a,D.e3w,D.e2N,D.e30,D.e3N,D.e3s,D.e3n,D.e3E,D.e3b,D.e3t,D.e3C,D.e3H,D.e2K,D.e3e,D.e36,D.e2V,D.e33,D.e3K],C.ax("P<e7>"))
D.d1l=w([0,0.46,0.82],x.n)
D.d1w=w([5,10,15,25,45,60],x.t)
D.d1Q=w([-0.045,0.03,-0.015],x.n)
D.d2e=w([0.9,0.97,1],x.n)
D.avK=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.tQ=w([0.05,0.2,0.35],x.n)
D.cKz=w([D.Ef,D.Ef],x.O)
D.cPx=w([A.Er,A.M],x.O)
D.cOB=w([A.fC,A.ht],x.O)
D.cIM=w([A.fi,A.ny],x.O)
D.c61=w([A.lt,A.dv],x.O)
D.avL=w([D.cKz,D.cPx,D.cOB,D.cIM,D.c61],x.Q)
D.fur=new B.uN("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fus=new B.uN("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fuj=new B.uN("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fuq=new B.uN("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fuo=new B.uN("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fuk=new B.uN("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fup=new B.uN("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.ful=new B.uN("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fun=new B.uN("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fum=new B.uN("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.BM=w([D.fur,D.fus,D.fuj,D.fuq,D.fuo,D.fuk,D.fup,D.ful,D.fun,D.fum],C.ax("P<uN>"))
D.bcs=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d3j=w([D.Ef,D.bcs,D.acp,A.ac_],x.O)
D.aZP=new C.ac(0,A.G,A.hF,A.dB,6)
D.d4b=w([D.aZP],x.V)
D.e9y=new C.z(0,"AND")
D.eac=new C.z(1,"Adder")
D.eaM=new C.z(2,"Blinker")
D.eba=new C.z(3,"Memory")
D.d4V=w([D.e9y,D.eac,D.eaM,D.eba],x.E)
D.avX=w([-104,0,104],x.n)
D.avY=w([-14,3],x.n)
D.d5n=w([-16,16],x.n)
D.avZ=w([-22,22],x.n)
D.d5w=w([-8,0,8],x.n)
D.d5x=w([-8,8],x.n)
D.aw0=w([-92,0,92],x.n)
D.d5S=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eD7=new B.uA("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eDe=new B.uA("Medium tank","Balanced.",0.35,1)
D.eDd=new B.uA("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.PP=w([D.eD7,D.eDe,D.eDd],x._)
D.n7=w([0.04,0.2,0.36],x.n)
D.awa=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eyw=new C.bv(D.aT3,"Fold",L.akB)
D.exI=new C.bv(D.a8y,"Flip",A.Fz)
D.bzH=new C.a0(62889,"MaterialIcons",!1)
D.eyM=new C.bv(D.aT4,"Rise",D.bzH)
D.akP=new C.a0(983870,"MaterialIcons",!1)
D.evN=new C.bv(D.a8z,"Assemble",D.akP)
D.evW=new C.bv(D.aT5,"Spin",D.aj4)
D.evT=new C.bv(D.aT6,"Pop",A.l7)
D.d7b=w([D.eyw,D.exI,D.eyM,D.evN,D.evW,D.evT],C.ax("P<+(JI,n,a0)>"))
D.awf=w([A.bZ,A.dN,A.bs,A.aW,A.by,A.cr],x.O)
D.d7m=w([A.aW,A.cv,A.cv,A.bc],x.O)
D.d7y=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.euL=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.ego=new C.z("Make the output turn TWICE as fast.",2)
D.eam=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.etv=new C.z("Make the output turn 4 times faster.",4)
D.elQ=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.eoQ=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.enm=new C.z("Make the output turn 3 times faster.",3)
D.eo6=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.awk=w([D.euL,D.ego,D.eam,D.etv,D.elQ,D.eoQ,D.enm,D.eo6],C.ax("P<+(n,N)>"))
D.d8w=w([3,4.5,5,6,9],x.n)
D.b_m=new C.ac(0,A.G,A.aX,A.J,16)
D.d8Y=w([D.b_m],x.V)
D.PR=w([A.bZ,A.cp,A.bc,A.aW,A.by,A.cr,A.c,A.cv],x.O)
D.d9o=w(["solar","turbine","crank","pot"],x.s)
D.d9I=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.d9O=w([0,0.35,0.75,1],x.n)
D.ew8=new C.bv("drop","Drop",D.akq)
D.ewa=new C.bv("weight","Weight",R.akT)
D.eyH=new C.bv("cannon","Newton's cannon",A.ajO)
D.daq=w([D.ew8,D.ewa,D.eyH],x.c)
D.es9=new C.z("piano","Piano")
D.erQ=new C.z("organ","Organ")
D.en3=new C.z("bell","Bell")
D.esb=new C.z("pluck","Pluck")
D.etu=new C.z("synth","Synth")
D.eoL=new C.z("flute","Flute")
D.awB=w([D.es9,D.erQ,D.en3,D.esb,D.etu,D.eoL],x.K)
D.daW=w(["volts","level","ohms","on"],x.s)
D.dcb=w([A.jc,A.Bj,A.B7,A.pD,A_.FW,A.tI,A.xX,A.pI,A.hJ,A.n4,A.h4,A.dW,A.hY,A.hZ,A.mf,A.lD,A.xY,A.qW,A.lE,A.Fr,A.tH,A.ML,A.B9,A.akl,A.MB,A.xT,A.MJ,A.ajY,U.akL,A.l7],x.w)
D.dd4=w([0.72,1],x.n)
D.ddf=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dY2={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dfw=new C.bq(D.dY2,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aEA={A:0,T:1,C:2,G:3}
D.a2O=new C.bq(D.aEA,["U","A","G","C"],x.l)
D.dfE=new C.bq(D.aEA,["T","A","G","C"],x.l)
D.dWO={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d07=w([0,2,4,5,7,9,11],x.t)
D.cJS=w([0,2,3,5,7,8,10],x.t)
D.d56=w([0,3,5,6,7,10],x.t)
D.BS=new C.bq(D.dWO,[D.auI,D.d07,D.cJS,D.d56,D.ank],C.ax("bq<n,ak<G>>"))
D.dXR={A:0,T:1,U:2,C:3,G:4}
D.dfT=new C.bq(D.dXR,[A.cr,A.ct,A.ct,A.aM,A.bc],C.ax("bq<n,w>"))
D.dWb={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fFY=new B.xG("Switch",F.N7,A.cp,0,"Tap it to turn it ON or OFF.")
D.fFU=new B.xG("Blinker",A.oz,A.bs,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fFV=new B.xG("AND",D.akP,A.ct,2,"ON only when BOTH inputs are ON.")
D.bB9=new C.a0(63671,"MaterialIcons",!1)
D.fFT=new B.xG("OR",D.bB9,A.by,2,"ON when EITHER input is ON.")
D.fFW=new B.xG("XOR",G.ZS,A.bZ,2,"ON when the inputs are DIFFERENT.")
D.fFQ=new B.xG("NAND",A.tx,A.aW,2,"OFF only when BOTH inputs are ON.")
D.bAf=new C.a0(63176,"MaterialIcons",!1)
D.fFR=new B.xG("NOR",D.bAf,A.hu,2,"ON only when BOTH inputs are OFF.")
D.fFS=new B.xG("NOT",Y.FS,A.cv,1,"Flips the signal: ON becomes OFF.")
D.fFX=new B.xG("Light",A.qR,A.dN,1,"Glows when its input is ON.")
D.fFZ=new B.xG("Buzzer",A.nO,A.cr,1,"Beeps while its input is ON.")
D.yB=new C.bq(D.dWb,[D.fFY,D.fFU,D.fFV,D.fFT,D.fFW,D.fFQ,D.fFR,D.fFS,D.fFX,D.fFZ],C.ax("bq<n,xG>"))
D.dXP={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eww=new C.bv(3,20,1.9)
D.ew3=new C.bv(33,90,1.6)
D.ez4=new C.bv(52,15,3.2)
D.ez2=new C.bv(45,-100,1.8)
D.exC=new C.bv(-15,-60,1.9)
D.ex8=new C.bv(-25,140,2.4)
D.ex_=new C.bv(-82,0,2.2)
D.aC1=new C.bq(D.dXP,[D.eww,D.ew3,D.ez4,D.ez2,D.exC,D.ex8,D.ex_],C.ax("bq<n,+(N,N,N)>"))
D.cJi=w([A.A],x.M)
D.cJA=w([A.ax,A.aD],x.M)
D.cS_=w([A.ax,A.A,A.aD],x.M)
D.cTl=w([A.ax,A.kX,A.A,A.lo,A.aD],x.M)
D.d4R=w([A.ax,A.kX,A.a3,A.a7,A.lo,A.aD],x.M)
D.dgO=new C.dR([1,D.cJi,2,D.cJA,3,D.cS_,4,A.awG,5,D.cTl,6,D.d4R],C.ax("dR<G,ak<d9>>"))
D.dWP={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.exO=new C.bv(1,A.bV,"Hydrogen")
D.ewL=new C.bv(4,A.bo,"Carbon")
D.evO=new C.bv(3,A.d7,"Nitrogen")
D.ey6=new C.bv(2,A.aB,"Oxygen")
D.exw=new C.bv(2,A.cp,"Sulfur")
D.eyE=new C.bv(1,A.bn,"Chlorine")
D.vF=new C.bq(D.dWP,[D.exO,D.ewL,D.evO,D.ey6,D.exw,D.eyE],C.ax("bq<n,+(G,w,n)>"))
D.dY7={Calm:0,Box:1,Sleep:2}
D.cqV=w([4,2,6,0],x.n)
D.cr1=w([4,4,4,4],x.n)
D.cr2=w([4,7,8,0],x.n)
D.Qf=new C.bq(D.dY7,[D.cqV,D.cr1,D.cr2],C.ax("bq<n,ak<N>>"))
D.dWk={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wl=new B.a_l(0,"source")
D.cSS=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fKV=new B.pR("Clock",A.oz,D.wl,A.bs,D.cSS)
D.fKR=new B.pR("Button",A.y1,D.wl,A.aM,A.T)
D.d8I=w(["random","quick","slow"],x.s)
D.fL1=new B.pR("Dice",A.me,D.wl,A.bZ,D.d8I)
D.bAP=new C.a0(63484,"MaterialIcons",!1)
D.De=new B.a_l(1,"logic")
D.dd_=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fKY=new B.pR("Delay",D.bAP,D.De,A.ct,D.dd_)
D.d1D=w(["fast","mid","slow"],x.s)
D.fL2=new B.pR("Echo",A.ake,D.De,A.by,D.d1D)
D.fL_=new B.pR("Every 2nd",Y.FS,D.De,A.hu,A.T)
D.bAu=new C.a0(63309,"MaterialIcons",!1)
D.fKX=new B.pR("Every 3rd",D.bAu,D.De,A.aW,A.T)
D.bCq=new C.a0(983902,"MaterialIcons",!1)
D.bUb=w(["50%","25%","75%"],x.s)
D.fL4=new B.pR("Chance",D.bCq,D.De,A.cv,D.bUb)
D.qe=new B.a_l(2,"out")
D.fKT=new B.pR("Light",A.qR,D.qe,A.dN,A.T)
D.fKU=new B.pR("Burst",A.l7,D.qe,A.bZ,A.T)
D.fKS=new B.pR("Ripple",A.y5,D.qe,A.b7,A.T)
D.fL0=new B.pR("Ball",A.aks,D.qe,A.cv,A.T)
D.fKZ=new B.pR("Comet",A.n4,D.qe,A.by,A.T)
D.bCa=new C.a0(983669,"MaterialIcons",!1)
D.fL3=new B.pR("Shake",D.bCa,D.qe,A.cr,A.T)
D.fL5=new B.pR("Pop",A.Fs,D.qe,A.bc,A.T)
D.fKW=new B.pR("Wash",A.MO,D.qe,A.pc,A.T)
D.mn=new C.bq(D.dWk,[D.fKV,D.fKR,D.fL1,D.fKY,D.fL2,D.fL_,D.fKX,D.fL4,D.fKT,D.fKU,D.fKS,D.fL0,D.fKZ,D.fL3,D.fL5,D.fKW],C.ax("bq<n,pR>"))
D.dXS={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.BT=new C.bq(D.dXS,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dWx={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.z1=new B.IE(0,"tv")
D.eEB=new B.lY("Samsung Neo QLED 8K",D.z1,F.E1,A.aW)
D.eEs=new B.lY("LG OLED evo G5",D.z1,A.e8,A.fY)
D.eEj=new B.lY("Sony Bravia 9",D.z1,A.qq,A.bq)
D.eEn=new B.lY("Apple TV 4K",D.z1,A.e2,A.bV)
D.eEk=new B.lY("Bang and Olufsen Beovision",D.z1,F.DK,F.rR)
D.HZ=new B.IE(1,"iphone")
D.aKT=new B.lY("iPhone 18 Pro Max",D.HZ,D.aew,A.c8)
D.vU=new B.IE(3,"fold")
D.bia=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eEx=new B.lY("iPhone Fold",D.vU,D.bia,A.b4)
D.uf=new B.IE(2,"android")
D.b4Y=new C.w(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
D.eEy=new B.lY("Samsung Galaxy S26 Ultra",D.uf,D.b4Y,A.d7)
D.bc0=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eEq=new B.lY("Samsung Galaxy Z Fold7",D.vU,D.bc0,A.cw)
D.eEm=new B.lY("Google Pixel 10 Pro XL",D.uf,A.dL,A.bn)
D.eEu=new B.lY("Xiaomi 16 Ultra",D.uf,A.lx,A.cb)
D.eEp=new B.lY("Huawei Mate 80 Pro Max",D.uf,A.eM,A.aB)
D.eEl=new B.lY("OPPO Find X9 Ultra",D.uf,A.ec,A.bc)
D.eED=new B.lY("Honor Magic V5",D.vU,A.dp,A.ct)
D.eEr=new B.lY("vivo X300 Pro",D.uf,A.ht,A.cv)
D.RJ=new B.IE(4,"tablet")
D.eEw=new B.lY("iPad Pro M5",D.RJ,A.dL,A.aW)
D.a5k=new B.IE(5,"reader")
D.eEE=new B.lY("Kindle Scribe",D.a5k,A.es,A.bq)
D.z2=new B.IE(6,"computer")
D.eEv=new B.lY("MacBook Pro M5 Max",D.z2,A.dL,A.c8)
D.eEA=new B.lY("iMac 32 inch",D.z2,A.bV,A.cw)
D.eEt=new B.lY("Pro Display XDR 8K",D.z2,A.lx,A.b7)
D.eEo=new B.lY("Sony Laser Projector",D.z2,A.cC,A.dN)
D.eEz=new B.lY("Luxury car touchscreen",D.z2,M.mN,A.aB)
D.eEC=new B.lY("Apple Vision Pro",D.z2,A.ka,A.by)
D.lL=new C.bq(D.dWx,[D.eEB,D.eEs,D.eEj,D.eEn,D.eEk,D.aKT,D.eEx,D.eEy,D.eEq,D.eEm,D.eEu,D.eEp,D.eEl,D.eED,D.eEr,D.eEw,D.eEE,D.eEv,D.eEA,D.eEt,D.eEo,D.eEz,D.eEC],C.ax("bq<n,lY>"))
D.dWJ={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bks=new B.fJ(20,4,13,!1)
D.bkT=new B.fJ(14,5,13.5,!1)
D.bkK=new B.fJ(9,2.4,10,!1)
D.bkY=new B.fJ(7,5,12.5,!1)
D.bkN=new B.fJ(8,3.5,12,!1)
D.bko=new B.fJ(15,2,6,!1)
D.bkW=new B.fJ(45,6,13.5,!0)
D.bkE=new B.fJ(10,8,13.5,!1)
D.bkw=new B.fJ(25,3,12,!0)
D.bkC=new B.fJ(35,4,12,!0)
D.bkD=new B.fJ(40,4.5,9.5,!0)
D.bkF=new B.fJ(55,3,9,!0)
D.bkp=new B.fJ(18,3,9,!1)
D.bkV=new B.fJ(22,4,13.5,!1)
D.bkO=new B.fJ(16,5,13.5,!1)
D.bkA=new B.fJ(30,4,9,!0)
D.bl6=new B.fJ(5,3.5,13,!1)
D.bkI=new B.fJ(25,3,13.5,!0)
D.bkR=new B.fJ(14,2.5,9,!1)
D.bkH=new B.fJ(6,6,13,!1)
D.bkZ=new B.fJ(30,1.2,5,!0)
D.bl5=new B.fJ(35,3,4.5,!0)
D.bl1=new B.fJ(20,4.5,7.5,!0)
D.bkG=new B.fJ(55,5.5,13.5,!0)
D.bkn=new B.fJ(45,5.5,13.5,!0)
D.bkS=new B.fJ(40,5.5,13.5,!0)
D.bl4=new B.fJ(60,6,13.5,!0)
D.aeV=new B.fJ(28,4,7,!0)
D.EF=new B.fJ(25,4,7,!0)
D.bkz=new B.fJ(30,4,7,!0)
D.bku=new B.fJ(22,4,7,!0)
D.bkv=new B.fJ(24,4,7,!0)
D.bkJ=new B.fJ(60,3,5.5,!0)
D.bkq=new B.fJ(18,9,14,!0)
D.bkx=new B.fJ(25,9,14,!0)
D.aeW=new B.fJ(30,8,14,!0)
D.bkt=new B.fJ(20,8,14,!0)
D.bkB=new B.fJ(30,9,14,!0)
D.bl_=new B.fJ(22,5,9.5,!0)
D.bkr=new B.fJ(30,2.5,10.5,!0)
D.bkP=new B.fJ(50,5.5,13.5,!0)
D.bl3=new B.fJ(12,2,9.5,!1)
D.bkM=new B.fJ(16,1.3,9.5,!0)
D.bkX=new B.fJ(40,2.5,7,!0)
D.bl2=new B.fJ(60,1.2,4.8,!0)
D.bl0=new B.fJ(18,5,13.5,!0)
D.bkU=new B.fJ(8,2,9.5,!1)
D.bkL=new B.fJ(12,2.5,8,!1)
D.bky=new B.fJ(20,3.5,13.5,!0)
D.bkQ=new B.fJ(3.5,3,13,!1)
D.yC=new C.bq(D.dWJ,[D.bks,D.bkT,D.bkK,D.bkY,D.bkN,D.bko,D.bkW,D.bkE,D.bkw,D.bkC,D.bkD,D.bkF,D.bkp,D.bkV,D.bkO,D.bkA,D.bl6,D.bkI,D.bkR,D.bkH,D.bkZ,D.bl5,D.bl1,D.bkG,D.bkn,D.bkS,D.bl4,D.aeV,D.EF,D.bkz,D.EF,D.bku,D.EF,D.bkv,D.aeV,D.EF,D.bkJ,D.bkq,D.bkx,D.aeW,D.bkt,D.bkB,D.bl_,D.bkr,D.bkP,D.bl3,D.bkM,D.bkX,D.bl2,D.EF,D.aeW,D.bl0,D.bkU,D.bkL,D.bky,D.bkQ],C.ax("bq<n,fJ>"))
D.dWj={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.evk=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ed3=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ecZ=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eo5=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.ep1=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eo1=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.ebf=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.em5=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.evt=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.epm=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.efQ=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eaY=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eeV=new C.z("Movement","They pull your legs together and help you balance.")
D.egH=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.edb=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.et5=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eu8=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.elR=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.etT=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.ekB=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.epu=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eb4=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eh3=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.epb=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.ekU=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eu0=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eny=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.ebd=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eq1=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.esJ=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.er1=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.e9I=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eng=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.enk=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.ehH=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.edh=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.egw=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eme=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.erJ=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.evq=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.epr=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.e9v=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.emp=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ea5=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.erZ=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.et1=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.emP=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.esd=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eb6=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.etx=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eem=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.erq=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.ehp=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.ekQ=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.epL=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.etI=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.etz=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.etE=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eli=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eqy=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eqZ=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.etm=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.emO=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.ejg=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.ei7=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.enb=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.epE=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.ejL=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.ekp=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eeG=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.esY=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.efs=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ea2=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.ehG=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.e9Y=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.edB=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.ehL=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.efB=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.epY=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.egK=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.ev7=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eig=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.elc=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.enF=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.efI=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.efu=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dhW=new C.bq(D.dWj,[D.evk,D.ed3,D.ecZ,D.eo5,D.ep1,D.eo1,D.ebf,D.em5,D.evt,D.epm,D.efQ,D.eaY,D.eeV,D.egH,D.edb,D.et5,D.eu8,D.elR,D.etT,D.ekB,D.epu,D.eb4,D.eh3,D.epb,D.ekU,D.eu0,D.eny,D.ebd,D.eq1,D.esJ,D.er1,D.e9I,D.eng,D.enk,D.ehH,D.edh,D.egw,D.eme,D.erJ,D.evq,D.epr,D.e9v,D.emp,D.ea5,D.erZ,D.et1,D.emP,D.esd,D.eb6,D.etx,D.eem,D.erq,D.ehp,D.ekQ,D.epL,D.etI,D.etz,D.etE,D.eli,D.eqy,D.eqZ,D.etm,D.emO,D.ejg,D.ei7,D.enb,D.epE,D.ejL,D.ekp,D.eeG,D.esY,D.efs,D.ea2,D.ehG,D.e9Y,D.edB,D.ehL,D.efB,D.epY,D.egK,D.ev7,D.eig,D.elc,D.enF,D.efI,D.efu],C.ax("bq<n,+(n,n)>"))
D.dhY=new C.ht(A.G,11)
D.di2=new C.ht(A.G,30)
D.dkQ=new B.Tj(null)
D.doE=new B.Tn(null)
D.doF=new B.To(null)
D.doS=new B.Tp(null)
D.dqT=new B.Tr(null)
D.dqU=new B.Ts(null)
D.dqV=new B.Tt(null)
D.drI=new B.TP(null)
D.drK=new B.U3(null)
D.drL=new B.U4(null)
D.drM=new B.U5(null)
D.dsj=new B.Uc(null)
D.due=new B.Ug(null)
D.duf=new B.Ui(null)
D.dug=new B.Uj(null)
D.dui=new B.Uk(null)
D.dvS=new B.UB(null)
D.dvU=new B.UD(null)
D.dvZ=new B.UN(null)
D.dw9=new B.UO(null)
D.dwF=new B.UP(null)
D.dy9=new B.UR(null)
D.dzx=new B.UT(null)
D.dzy=new B.UU(null)
D.dAT=new B.UX(null)
D.dQM=new B.UY(null)
D.dQN=new B.V_(null)
D.dQO=new B.V2(null)
D.dQP=new B.V3(null)
D.dSI=new B.Vb(null)
D.dSJ=new B.Vc(null)
D.dSR=new B.Vj(null)
D.dT_=new B.Vn(null)
D.dT0=new B.Vo(null)
D.dT1=new B.a7i(null)
D.dTC=new B.Vq(null)
D.dV4=new B.Vu(null)
D.dYi=new C.u(0,118)
D.aEG=new C.u(0,13)
D.dYj=new C.u(0,17)
D.dYm=new C.u(0,330)
D.dYp=new C.u(0,-13)
D.aEM=new C.u(0,-14)
D.dYq=new C.u(0,-17)
D.dYr=new C.u(0,-18)
D.dYs=new C.u(0,-19)
D.dYt=new C.u(0,-20)
D.dYw=new C.u(0,-26)
D.dYx=new C.u(0,-28)
D.dYy=new C.u(0,-31)
D.dYz=new C.u(0,-32)
D.vN=new C.u(0,-6)
D.dYA=new C.u(0,-6771)
D.dYB=new C.u(0,-9)
D.dYD=new C.u(-9.5,-11)
D.dYE=new C.u(10,20)
D.dYG=new C.u(10,-13)
D.dYH=new C.u(10,-22)
D.dYI=new C.u(10,-4)
D.a4f=new C.u(11,8)
D.dYK=new C.u(12,2)
D.dYL=new C.u(14,0)
D.dYM=new C.u(14,12)
D.aEQ=new C.u(14,8)
D.dYN=new C.u(14,-17)
D.dYO=new C.u(14,-18)
D.aER=new C.u(14,-3)
D.aES=new C.u(14,-4)
D.dYP=new C.u(15,0)
D.dYQ=new C.u(15,-12)
D.dYR=new C.u(16,-8)
D.dYS=new C.u(18,14)
D.dYT=new C.u(18,-12)
D.aEW=new C.u(20,0)
D.dYZ=new C.u(20,15)
D.dZ_=new C.u(20,-17)
D.dZ0=new C.u(20,-3)
D.dZ1=new C.u(21,8)
D.dZ3=new C.u(22,10)
D.aEX=new C.u(22,8)
D.dZ4=new C.u(24,0)
D.dZ5=new C.u(24,2)
D.dZ7=new C.u(24,-18)
D.dZ8=new C.u(24,-22)
D.dZ9=new C.u(25,8)
D.dZa=new C.u(26,0)
D.dZg=new C.u(28,-30)
D.dZl=new C.u(30,18)
D.dZm=new C.u(30,2)
D.dZn=new C.u(31,19)
D.dZo=new C.u(32,0)
D.aF_=new C.u(34,0)
D.aF0=new C.u(34,-32)
D.HA=new C.u(36,0)
D.dZt=new C.u(3,-1)
D.dZw=new C.u(40,3)
D.dZA=new C.u(4,11)
D.dZD=new C.u(4,-2)
D.dZH=new C.u(5,0)
D.dZI=new C.u(5,17)
D.dZJ=new C.u(5,6)
D.dZM=new C.u(6,11)
D.dZS=new C.u(8,7)
D.dZT=new C.u(8,-10)
D.dZU=new C.u(8,-14)
D.dZV=new C.u(8,-3)
D.aF4=new C.u(9,0)
D.dZY=new C.u(-20.5,-17.6)
D.dZZ=new C.u(-9,18.5)
D.e_1=new C.u(-2.6,-1)
D.e_2=new C.u(1.9,-0.8)
D.e_5=new C.u(-0.22,0.09)
D.e_a=new C.u(2.6,1)
D.e_h=new C.u(-9,12.2)
D.e_z=new C.u(-9,20.5)
D.e_R=new C.u(-10,0)
D.e_S=new C.u(-10,12)
D.aFb=new C.u(-10,4)
D.e_T=new C.u(-11,-2)
D.e_U=new C.u(-13,-5)
D.e_V=new C.u(-14,0)
D.e_W=new C.u(-14,13)
D.e_X=new C.u(-14,2)
D.e_Y=new C.u(-14,-12)
D.e_Z=new C.u(-14,-19)
D.e0_=new C.u(-14,-23)
D.e00=new C.u(-15,6)
D.e01=new C.u(-16,14)
D.e02=new C.u(-16,-8)
D.e03=new C.u(-17,10)
D.e04=new C.u(-17,-18)
D.e05=new C.u(-17,-8)
D.e07=new C.u(-18,20)
D.e08=new C.u(-18,-9)
D.aFd=new C.u(-20,0)
D.e0a=new C.u(-20,16)
D.e0b=new C.u(-20,-9)
D.Rd=new C.u(-22,8)
D.e0c=new C.u(-22,-10)
D.e0d=new C.u(-22,-11)
D.e0e=new C.u(-24,10)
D.e0f=new C.u(-24,11)
D.e0g=new C.u(-24,14)
D.e0h=new C.u(-24,-22)
D.e0i=new C.u(-25,-11)
D.e0j=new C.u(-26,0)
D.e0k=new C.u(-26,-18)
D.e0l=new C.u(-2,9)
D.e0m=new C.u(-2,-10)
D.e0n=new C.u(-2,-20)
D.e0o=new C.u(-2,-9)
D.e0p=new C.u(-32,0)
D.aFf=new C.u(-34,0)
D.e0u=new C.u(-40,3)
D.e0w=new C.u(-4,11)
D.e0x=new C.u(-4,-17)
D.e0y=new C.u(-4,-2)
D.e0A=new C.u(-5,0)
D.e0B=new C.u(-5,20)
D.e0C=new C.u(-5,6)
D.e0D=new C.u(-6,26)
D.e0E=new C.u(-6,6)
D.e0F=new C.u(-6,-42)
D.e0G=new C.u(-7,-19)
D.e0H=new C.u(-7,-24)
D.e0I=new C.u(-8,-9)
D.a4j=new C.u(-9,0)
D.e0J=new C.u(-9,1)
D.e0K=new C.u(-9,-23)
D.f84=new C.x("Thinking\u2026",null,A.ho,null,null,null,null,null,null,null,null,null)
D.e1G=new C.C(A.ke,D.f84,null)
D.fnz=new C.x("Start from a ready-made board",null,A.fX,null,null,null,null,null,null,null,null,null)
D.e1Q=new C.C(A6.v3,D.fnz,null)
D.bsd=new C.Q(4,0,4,14)
D.f3D=new C.F(!0,A.az,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8Z=new C.x("Games and little helpers for a spare minute.",null,D.f3D,null,null,null,null,null,null,null,null,null)
D.e1Y=new C.C(D.bsd,D.f8Z,null)
D.fkw=new C.x("Tap to throw in a star",null,A.kt,null,null,null,null,null,null,null,null,null)
D.b2w=new C.cq(A.A,null,null,D.fkw,null)
D.e7E=new C.cK(0,null,0,14,null,null,D.b2w,null)
D.d2c=w([A.iI,A.bo],x.O)
D.aK6=new C.bR(A.A,0.5,A.x,null,0,D.d2c,null,null)
D.e8m=new C.bR(A.A,0.5,A.x,null,0,D.awt,null,null)
D.cUZ=w([A.c,A.bI],x.O)
D.e8o=new C.bR(A.A,0.5,A.x,null,0,D.cUZ,null,null)
D.e8p=new C.bR(A.A,0.5,A.x,null,0,K.avC,null,null)
D.d9A=w([A.bV,A.ka],x.O)
D.aK7=new C.bR(A.A,0.5,A.x,null,0,D.d9A,null,null)
D.cAz=w([A.c,A.bV],x.O)
D.e8t=new C.bR(A.rz,0.5,A.x,null,0,D.cAz,null,null)
D.b9u=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.beH=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cU3=w([D.b9u,D.ae6,D.beH],x.O)
D.d0h=w([0,0.7,1],x.n)
D.e8v=new C.bR(A.rz,0.5,A.x,null,0,D.cU3,D.d0h,null)
D.cr8=w([A.om,A.aI,A.K],x.O)
D.d6v=w([0.3,0.7,1],x.n)
D.e8x=new C.bR(A.A,0.5,A.x,null,0,D.cr8,D.d6v,null)
D.bid=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.d7Q=w([A.f5,D.bid],x.O)
D.e8z=new C.bR(A.rz,0.5,A.x,null,0,D.d7Q,null,null)
D.ctT=w([A.dL,A.cC],x.O)
D.e8A=new C.bR(A.A,0.5,A.x,null,0,D.ctT,null,null)
D.cPH=w([A.om,A.aI,A.fC],x.O)
D.e8B=new C.bR(A.A,0.5,A.x,null,0,D.cPH,null,null)
D.cIi=w([A.h_,A.aM,A.da],x.O)
D.e8D=new C.bR(A.rz,0.5,A.x,null,0,D.cIi,null,null)
D.d2I=w([A.ka,M.mN],x.O)
D.e8E=new C.bR(A.rz,0.5,A.x,null,0,D.d2I,null,null)
D.b9H=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b7R=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cRT=w([D.b9H,D.b7R],x.O)
D.e8G=new C.bR(A.A,0.5,A.x,null,0,D.cRT,null,null)
D.be7=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bc7=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bcb=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dbN=w([D.be7,D.bc7,D.bcb],x.O)
D.cOv=w([0,0.65,1],x.n)
D.e8H=new C.bR(K.a8J,0.5,A.x,null,0,D.dbN,D.cOv,null)
D.e8I=new C.bR(A.A,0.5,A.x,null,0,D.at8,null,null)
D.d8P=w([A.lu,A.aI,A.fC],x.O)
D.e8M=new C.bR(A.A,0.5,A.x,null,0,D.d8P,null,null)
D.dal=w([A.ka,A.hC],x.O)
D.e8P=new C.bR(A.A,0.5,A.x,null,0,D.dal,null,null)
D.aKc=new C.aV(9,9)
D.e8Y=new C.aV(1.4,1.4)
D.e9C=new C.z(0,-4)
D.eej=new C.z(0.22,4)
D.ela=new C.z(0.8,-4)
D.etA=new C.z(0.58,4)
D.ewb=new C.bv("Moon",1.62,4291941851)
D.ewJ=new C.bv("Neptune",11.15,4284524026)
D.exj=new C.bv("Sun",274,4294688548)
D.exy=new C.bv("Mercury",3.7,4288455599)
D.exE=new C.bv("Earth",9.81,4281908728)
D.exG=new C.bv("Mars",3.71,4294472049)
D.exZ=new C.bv("Venus",8.87,4294759245)
D.ey3=new C.bv("Saturn",10.44,4294829706)
D.eyp=new C.bv("Jupiter",24.79,4294677052)
D.eBM=new C.aa(10,-8,18,-2)
D.eBN=new C.aa(14,-14,20,14)
D.eBO=new C.aa(20,-2,30,2)
D.eBQ=new C.aa(4,-13,30,-3)
D.eBS=new C.aa(8,-7,12,7)
D.eBY=new C.aa(-12,12,12,19)
D.eBZ=new C.aa(-12,14,12,22)
D.eC_=new C.aa(-12,-22,12,8)
D.eC0=new C.aa(-12,-25,12,19)
D.eC1=new C.aa(-12,-26,12,-6)
D.eC2=new C.aa(-12,-4,12,14)
D.eC3=new C.aa(-12,-6,10,6)
D.eC4=new C.aa(-14,20,14,24)
D.eC5=new C.aa(-14,6,14,10)
D.eC6=new C.aa(-14,-17,14,15)
D.eC7=new C.aa(-14,-26,14,18)
D.eC8=new C.aa(-14,-4,14,20)
D.eC9=new C.aa(-15,-29,15,25)
D.eCa=new C.aa(-16,-16,16,16)
D.eCb=new C.aa(-16,-22,-9,18)
D.eCc=new C.aa(-16,-24,16,-10)
D.eCd=new C.aa(-16,-2,16,20)
D.eCf=new C.aa(-18,20,18,24)
D.eCg=new C.aa(-18,-18,18,20)
D.eCh=new C.aa(-20,12,20,22)
D.eCi=new C.aa(-20,-28,20,26)
D.eCj=new C.aa(-22,14,22,18)
D.aKB=new C.aa(-22,-26,22,24)
D.eCk=new C.aa(-22,-3,22,3)
D.eCl=new C.aa(-22,-4,22,12)
D.eCm=new C.aa(-24,-12,10,22)
D.eCn=new C.aa(-24,-14,22,8)
D.eCo=new C.aa(-24,-6,24,20)
D.aKC=new C.aa(-24,-9,24,9)
D.eCp=new C.aa(-25,14,25,19)
D.eCq=new C.aa(-26,-14,14,8)
D.eCr=new C.aa(-26,-4,26,20)
D.eCs=new C.aa(-26,-6,4,6)
D.aKD=new C.aa(-28,-13,28,13)
D.eCt=new C.aa(-28,-16,28,16)
D.eCu=new C.aa(-28,-16,28,8)
D.eCv=new C.aa(-28,-22,28,22)
D.eCw=new C.aa(-30,-12,30,14)
D.eCx=new C.aa(-30,-14,0,14)
D.eCy=new C.aa(-30,-18,30,20)
D.eCz=new C.aa(-30,-28,30,14)
D.eCA=new C.aa(-30,-2,30,18)
D.eCB=new C.aa(-30,-4,30,18)
D.eCC=new C.aa(-32,-17,32,17)
D.eCD=new C.aa(-32,-28,32,18)
D.eCE=new C.aa(-33,-21,33,17)
D.eCF=new C.aa(-34,14,34,26)
D.a5c=new C.aa(-34,-18,34,18)
D.eCG=new C.aa(-34,-4,34,7)
D.eCH=new C.aa(-36,-24,36,20)
D.eCI=new C.aa(-38,-22,38,22)
D.eCJ=new C.aa(-3,12,3,22)
D.eCK=new C.aa(-3,5,3,15)
D.eCM=new C.aa(-46,-34,46,28)
D.eCN=new C.aa(-48,-3,48,3)
D.eCQ=new C.aa(-6,18,24,24)
D.eCR=new C.aa(-6,5,6,12)
D.eCS=new C.aa(-6,-22,6,-15)
D.eCT=new C.aa(-9,-16,9,22)
D.eCU=new C.aa(-4.5,-24,4.5,-21.2)
D.eCW=new C.aa(14,-9,17.5,9)
D.dXM={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aLt=new C.eV(D.dXM,5,x.R)
D.dXr={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eFG=new C.eV(D.dXr,10,x.R)
D.eHD=new C.at(24,44)
D.eHI=new C.at(300,300)
D.eI1=new C.at(54,38)
D.eI8=new C.at(66,38)
D.b3L=new C.fh(2,null,null,null,null,A.by,null,null,null,null)
D.eJ4=new C.a6(16,16,D.b3L,null)
D.aMs=new C.hI(3,12,12,0.82,null)
D.fpe=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aMD=new C.b1(D.fpe,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.d2L=w([A.cr,A.cp,A.bc,A.aW,A.pc,A.cr],x.O)
D.eOX=new C.fS(A.A,0,6.283185307179586,A.x,D.d2L,null,null)
D.eXE=new C.F(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.Pl,null,null,null)
D.eQ0=new C.eo("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.eXE)
D.aP0=new C.F(!0,A.az,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ1=new C.eo("What we see",null,null,A.cO,null,null,null,null,null,null,D.aP0)
D.eV4=new C.F(!0,A2.Vf,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ4=new C.eo("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.eV4)
D.eZQ=new C.F(!0,A.k5,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQa=new C.eo("AI",null,null,A.cO,null,null,null,null,null,null,D.eZQ)
D.eUQ=new C.F(!0,A.c_,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQb=new C.eo("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.eUQ)
D.aNq=new C.F(!0,A.c_,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQq=new C.F(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQs=new C.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQY=new C.F(!0,A.bh,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRg=new C.F(!0,A.ct,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRL=new C.F(!0,A.c_,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRQ=new C.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS5=new C.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSx=new C.F(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSU=new C.F(!0,A.c_,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT3=new C.F(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGb=new C.cP(A.hF,A.dB,6)
D.cXC=w([D.eGb],x.q)
D.eTn=new C.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cXC,null,null,null)
D.eTq=new C.F(!0,A.ex,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTt=new C.F(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTv=new C.F(!0,A.c_,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTU=new C.F(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNM=new C.F(!0,A.c_,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUd=new C.F(!0,A.az,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUe=new C.F(!0,A.c_,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV7=new C.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVC=new C.F(!0,A.az,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW4=new C.F(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGe=new C.cP(A.aX,A.J,3)
D.awJ=w([D.eGe],x.q)
D.eW7=new C.F(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.awJ,null,null,null)
D.eWc=new C.F(!0,A.c,null,null,null,null,12.5,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWT=new C.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.Pl,null,null,null)
D.eXl=new C.F(!0,A.az,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXt=new C.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXT=new C.F(!0,A.uN,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY8=new C.F(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYr=new C.F(!0,A.bJ,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYw=new C.F(!0,A.c_,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYB=new C.F(!0,A.az,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYH=new C.F(!0,A.az,null,null,null,null,18,A.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ8=new C.F(!0,A.c_,null,null,null,null,8.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZl=new C.F(!0,A.mP,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZm=new C.F(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZB=new C.F(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOr=new C.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_9=new C.F(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eG2=new C.cP(A.w,A.J,5)
D.cMg=w([D.eG2],x.q)
D.f_a=new C.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cMg,null,null,null)
D.f_f=new C.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.awJ,null,null,null)
D.f_u=new C.F(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_z=new C.F(!0,A.fv,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_Q=new C.F(!0,A.c_,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0j=new C.F(!0,A.bc,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0R=new C.F(!0,A.c_,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1u=new C.F(!0,A.az,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1D=new C.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOM=new C.F(!0,A.az,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f25=new C.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2e=new C.F(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2l=new C.F(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ID=new C.F(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2G=new C.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOY=new C.F(!0,A.ad,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2J=new C.F(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3t=new C.F(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a79=new C.F(!0,A.c,null,null,null,null,13,A.a4,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3S=new C.F(!0,A.uN,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4a=new C.F(!0,A.bc,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTy=new C.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4y=new C.x("\u26a0\ufe0f ",null,D.eTy,null,null,null,null,null,null,null,null,null)
D.f4J=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.IC,null,null,null,null,null,null,null,null,null)
D.f59=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mw,null,null,null,null,null,null,null,null,null)
D.f6a=new C.x("Pick one, then change it and see what happens.",null,A.IC,null,null,null,null,null,null,null,null,null)
D.f6e=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.eUC=new C.F(!0,A.ad,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f78=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.eUC,null,null,null,null,null,null,null,null,null)
D.f7v=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a6r,null,null,null,null,null,null,null,null,null)
D.f8B=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.f9a=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.f9f=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.f9N=new C.x("Make it yours",null,A.kU,null,null,null,null,null,null,null,null,null)
D.fa1=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a6y,null,null,null,null,null,null,null,null,null)
D.eYM=new C.F(!0,A.j4,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcd=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.eYM,null,null,null,null,null,null,null,null,null)
D.fcs=new C.x("YOUR DECODING",null,Q.mw,null,null,null,null,null,null,null,null,null)
D.fcE=new C.x("5G",null,R.aNP,null,null,null,null,null,null,null,null,null)
D.f05=new C.F(!0,A.c_,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdL=new C.x("WHAT HAPPENS",null,D.f05,null,null,null,null,null,null,null,null,null)
D.ffq=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fg4=new C.x("Change the words and pictures on the three slabs.",null,A.IC,null,null,null,null,null,null,null,null,null)
D.fgf=new C.x("All the parts and wires will be removed.",null,A.hA,null,null,null,null,null,null,null,null,null)
D.fgz=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fh8=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fhZ=new C.x("INTERCEPTED",null,Q.mw,null,null,null,null,null,null,null,null,null)
D.fii=new C.x("\ud83c\udfaf Challenges",null,A.du,null,null,null,null,null,null,null,null,null)
D.fiN=new C.x("Remove this part",null,V.aNt,null,null,null,null,null,null,null,null,null)
D.fj4=new C.x("Clear the board?",null,A.dl,null,null,null,null,null,null,null,null,null)
D.f_A=new C.F(!0,A.bs,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjj=new C.x("How the Lab works",null,D.f_A,null,null,null,null,null,null,null,null,null)
D.eSh=new C.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjA=new C.x("Electronics Lab",null,D.eSh,null,null,null,null,A.a2,null,1,null,null)
D.fjC=new C.x("?",null,K.aOV,null,null,null,null,null,null,null,null,null)
D.eYG=new C.F(!0,A.aW,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjG=new C.x("Planet Earth",null,D.eYG,null,null,null,null,null,null,null,null,null)
D.fkQ=new C.x("Ready-made circuits",null,A.du,null,null,null,null,null,null,null,null,null)
D.flp=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.flI=new C.x("UNIVERSE EXPLORER",null,I.a6x,null,null,null,null,null,null,null,null,null)
D.fo6=new C.x("SECRET VERSION",null,Q.mw,null,null,null,null,null,null,null,null,null)
D.f2p=new C.F(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foE=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.f2p,null,null,null,null,null,null,null,null,null)
D.fpP=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a6r,null,null,null,null,null,null,null,null,null)
D.fqh=new C.x("NGMY",null,A.un,null,null,null,null,null,null,null,null,null)
D.fqt=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.ST,null,null,null,null,null,null,null,null,null)
D.fqQ=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.lk,null,null,null,null,null,null,null,null,null)
D.frM=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.IC,null,null,null,null,null,null,null,null,null)
D.frO=new C.x("TOOLBOX",null,I.a6x,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.h6B=null
$.h6A=null
$.hcD=0
$.hEk=C.V(x.N,x.k)
$.hEV=C.V(x.N,x.k)
$.h5X=null
$.hEG=C.V(x.N,x.k)
$.hFI=C.V(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i9W","bCa",()=>{var v="led"
return C.a([B.awJ("Both together","Make the light glow only when BOTH switches are ON.",2,new B.f9X(),v),B.awJ("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.f9Y(),v),B.awJ("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.f9Z(),v),B.awJ("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fa5(),v),B.awJ("Not both","Make the light go OFF only when both switches are ON.",2,new B.fa6(),v),B.awJ("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fa7(),"buzzer")],C.ax("P<b92>"))})
w($,"iam","bCb",()=>C.a([B.oq("UNIVERSE","Earth, space and gravity",A.a_w,A.aW,new B.fan()),B.oq("ELECTRONICS LAB","Batteries, wires, real circuits",Ag.ZU,A.aW,new B.fao()),B.oq("DISCOVERY LAB","Body Explorer: a real 3D human",D.ZL,A.bc,new B.fap()),B.oq("TOOLBOX","Converter, clock, games",U.ajg,A.cv,new B.faA()),B.oq("MOLECULE MAKER","Join atoms into real molecules",A.MA,A.hu,new B.faC()),B.oq("DNA LAB","Copy DNA, build a protein",D.ZL,A.bZ,new B.faD()),B.oq("ECOSYSTEM LAB","Grass, rabbits and foxes",A.xT,A.bc,new B.faE()),B.oq("BALANCE LAB","Levers, weight and torque",D.bCi,A.aM,new B.faF()),B.oq("GEAR LAB","Teeth, speed and force",A.Bh,A.cv,new B.faG()),B.oq("LASER MAZE","Bend the beam with mirrors",I.ajE,A.aB,new B.faH()),B.oq("LIGHT MIXER","Match colours with light",D.bA1,A.b7,new B.faI()),B.oq("CIPHER LAB","Make and crack secret codes",A.y4,A.aW,new B.faq()),B.oq("REACTION LAB","Wire parts together",A.y8,A.bs,new B.far()),B.oq("SPARK PAINTER","Paint with light",A.ZN,A.bZ,new B.fas()),B.oq("ROCKET LANDER","Land softly on the pad",A.n4,A.aW,new B.fat()),B.oq("ORBIT STUDIO","Slingshot planets",A.mg,A.cv,new B.fau()),B.oq("SWARM STUDIO","A living school of fish",A.MA,A.bc,new B.fav()),B.oq("CHAIN BURST","One tap, a whole chain",A.h4,A.bZ,new B.faw()),B.oq("TITLE ANIMATOR","Make a moving title",A.y0,A.cp,new B.fax()),B.oq("CIRCUIT LAB","Connect logic, learn it",A.a_d,A.ct,new B.fay()),B.oq("MARBLE MUSIC","Marbles ring the notes",D.bzI,A.b7,new B.faz()),B.oq("ORBIT SEQUENCER","Planets play the tune",D.bC6,A.by,new B.faB())],C.ax("P<bqG>")))
w($,"ibR","q2",()=>{var v,u,t=C.V(x.N,x.dV)
for(v=0;v<76;++v){u=D.PC[v]
t.n(0,u.a,u)}return t})
w($,"i9X","agD",()=>C.a([B.F1("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.fa8()),B.F1("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fa9()),B.F1("Spin the motor","A battery and a motor in a loop will make it spin.",new B.faa()),B.F1("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fab()),B.F1("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.fac()),B.F1("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fa_()),B.F1("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.fa0()),B.F1("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fa1()),B.F1("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.fa2()),B.F1("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fa3()),B.F1("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fa4())],C.ax("P<b93>")))
w($,"iao","hkX",()=>C.a([B.a_Q("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cb,new B.faQ()),B.a_Q("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cr,A.bL,new B.faR()),B.a_Q("Breathe","Calm down in a minute","\ud83e\udee7",A.hu,A.cw,new B.faS()),B.a_Q("Draw Pad","Sketch and share","\ud83c\udfa8",A.bz,A.b4,new B.faT()),B.a_Q("Memory Match","Find the pairs","\ud83c\udccf",A.aW,A.c8,new B.faU()),B.a_Q("Simon Sounds","Copy the tune","\ud83c\udfb5",A.cp,A.bn,new B.faV()),B.a_Q("Tip & Split","Share the bill","\ud83e\uddfe",A.bc,A.aZ,new B.faW()),B.a_Q("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.by,A.aE,new B.faX())],C.ax("P<bs_>")))
w($,"ian","hkW",()=>C.a([B.ae_("EARTH GLOBE","Turn it, tap a country",A.mg,A.aW,new B.faJ()),B.ae_("SOLAR SYSTEM","The Sun and its worlds",D.bzM,A.aM,new B.faK()),B.ae_("GRAVITY LAB","Drop, weigh, orbit",D.akq,A.cv,new B.faL()),B.ae_("BLACK HOLE","Throw in a star",A.Fh,A.by,new B.faM()),B.ae_("GALAXY","Build, tilt, collide",A.xG,A.fZ,new B.faN()),B.ae_("SIZE COMPARE","Earth next to a star",D.bA3,A.bZ,new B.faO()),B.ae_("SEASONS & MOON","Why it is summer",A.vc,A.bs,new B.faP())],C.ax("P<brV>")))})()};
(a=>{a["AccBB32mIX8yWNJ9V9Mp2iX5lWw="]=a.current})($__dart_deferred_initializers__);