((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A1,Ab,A2,A3,I,P,A4,Ac,A5,A6,G,Ad,Ae,A7,Af,Y,Ag,Ah,N,Q,Ai,Aj,Z,O,U,Ak,Al,V,M,A8,W,K,R,Am,E,F,L,B={
byA(d){return B.hOt(d)},
hOt(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$byA=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qM(C.n3(""),d,A.hp,null).cM(0,A.XN),$async$byA)
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
return C.i($async$byA,v)},
i_2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.PO[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cX(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.hR(D.PO,new B.fue())
if(w==null)w=A.d.gL(D.PO)
s=C.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.L)(r),++u){l=r[u].a
k=l[0]
l=$.qb().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gL(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.ajq(w.a,w.b,m,w,s,!1)},
hTM(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.K(D.Qc,new B.fkK(),x.bd).aI(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i6U(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cJ(b2,"{")
v=A.a.oC(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aH(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gS(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.qb().ai(0,p)||J.f0(s,o)||J.ad(t)>=8)continue
J.ch(s,o)
n=C.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dfC[a9]
l=J.q(q,m)
if(typeof l=="number")J.aF(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dQ(J.q(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dQ(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.ch(t,new C.e7([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gS(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=A.o.D(A.k.N(C.dQ(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.dQ(J.q(g,3))),0,1)
if(J.f0(s,f)&&J.f0(s,e)&&!J.A(f,e))J.ch(i,new C.cC([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cu:a0)
while(a0.C()){a2=a0.gS(a0)
J.ch(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.my(a0,C.t(a1==null?"":a1),t,i,A.T)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new B.ajq(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hYD(d){var w,v,u=B.h3E()
d.B(u)
for(w=0;w<60;++w)u.v2(0,0.03333333333333333)
v=u.a
return A.d.b4(v,new B.frc(u))&&!A.d.d7(v,new B.frd())},
hYC(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.qb().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.L)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.de2,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aI(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.L)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aI(s,"\n")+"\nWires: "+A.d.aI(l,"; ")},
hMZ(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aI(v,"\n")+"\n\n"}v=A.d.aI(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i_1(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qb().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Qc[u]
if(A.d.b4(w,new B.fub(s)))if(!C.cX(r,s.b.toLowerCase(),0))v=C.cX(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a1(w,new B.fuc(e),C.U(w).k("a1<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cI(w,0,new B.fud())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gL(w)
w=$.qb().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajq:function ajq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fue:function fue(){},
fkK:function fkK(){},
frc:function frc(d){this.a=d},
frd:function frd(){},
fub:function fub(d){this.a=d},
fuc:function fuc(d){this.a=d},
fud:function fud(){},
V4:function V4(d,e){this.c=d
this.a=e},
bjf:function bjf(d,e,f,g,h){var _=this
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
e5G:function e5G(d){this.a=d},
e5H:function e5H(d,e,f){this.a=d
this.b=e
this.c=f},
e5I:function e5I(d){this.a=d},
e5T:function e5T(d){this.a=d},
e5U:function e5U(d,e){this.a=d
this.b=e},
e5P:function e5P(d){this.a=d},
e5N:function e5N(d,e){this.a=d
this.b=e},
e5O:function e5O(d,e,f){this.a=d
this.b=e
this.c=f},
e5Q:function e5Q(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e5L:function e5L(d){this.a=d},
e5M:function e5M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5R:function e5R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e5K:function e5K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5S:function e5S(d,e){this.a=d
this.b=e},
e5J:function e5J(d,e){this.a=d
this.b=e},
e5X:function e5X(d){this.a=d},
e5W:function e5W(d){this.a=d},
e5Y:function e5Y(d){this.a=d},
e5V:function e5V(d){this.a=d},
e5Z:function e5Z(d,e){this.a=d
this.b=e},
e6_:function e6_(d,e){this.a=d
this.b=e},
e60:function e60(d,e){this.a=d
this.b=e},
e61:function e61(d,e){this.a=d
this.b=e},
byW(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aPf,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hh6(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zC,A.L,w,w),A.aB,C.bV(A.fQ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.VT,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
FR:function FR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uK:function uK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vw:function Vw(d){this.a=d},
aDE:function aDE(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fo$=h
_.kZ$=i
_.fS$=j
_.fp$=k
_.bs$=l
_.a8$=m
_.c=_.a=null},
elM:function elM(){},
em5:function em5(d){this.a=d},
em4:function em4(d,e){this.a=d
this.b=e},
em6:function em6(){},
em7:function em7(){},
elO:function elO(d,e,f){this.a=d
this.b=e
this.c=f},
elN:function elN(d,e){this.a=d
this.b=e},
elD:function elD(d){this.a=d},
elE:function elE(d){this.a=d},
elF:function elF(d){this.a=d},
elG:function elG(d){this.a=d},
elH:function elH(d){this.a=d},
elI:function elI(d){this.a=d},
elJ:function elJ(d){this.a=d},
elK:function elK(d){this.a=d},
elL:function elL(d){this.a=d},
elB:function elB(d){this.a=d},
elC:function elC(d){this.a=d},
elA:function elA(d){this.a=d},
elZ:function elZ(d,e){this.a=d
this.b=e},
elU:function elU(d){this.a=d},
elV:function elV(d){this.a=d},
elR:function elR(d){this.a=d},
elW:function elW(d){this.a=d},
elQ:function elQ(d){this.a=d},
elX:function elX(d){this.a=d},
elY:function elY(d){this.a=d},
elP:function elP(d){this.a=d},
em_:function em_(d,e){this.a=d
this.b=e},
elT:function elT(d,e){this.a=d
this.b=e},
em0:function em0(d){this.a=d},
em1:function em1(d){this.a=d},
em2:function em2(d){this.a=d},
em3:function em3(d){this.a=d},
elS:function elS(d){this.a=d},
bge:function bge(d,e){this.b=d
this.a=e},
aLv:function aLv(){},
bwy:function bwy(){},
cEx(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cEx=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qP().jy(0,"assets/data/body3d.bin"),$async$cEx)
case 3:d=a1
$.hcs=J.eZ(A.dD.gaM(d),d.byteOffset,d.byteLength)
t=C.aRB(d)
s=t.getUint32(4,!0)
r=C.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.js(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.d3s[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2F(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aXa))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b9l(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cEx,v)},
aRo:function aRo(d,e,f){this.a=d
this.b=e
this.c=f},
a2F:function a2F(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b9l:function b9l(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
TX:function TX(d){this.a=d},
aC3:function aC3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fo$=s
_.kZ$=t
_.fS$=u
_.fp$=v
_.bs$=w
_.a8$=a0
_.c=_.a=null},
dEt:function dEt(d){this.a=d},
dEs:function dEs(d,e){this.a=d
this.b=e},
dE5:function dE5(d,e){this.a=d
this.b=e},
dE6:function dE6(){},
dEu:function dEu(){},
dE7:function dE7(d,e){this.a=d
this.b=e},
dE8:function dE8(d){this.a=d},
dE9:function dE9(){},
dEa:function dEa(d){this.a=d},
dEc:function dEc(d,e){this.a=d
this.b=e},
dEb:function dEb(d){this.a=d},
dE2:function dE2(d,e,f){this.a=d
this.b=e
this.c=f},
dE3:function dE3(d){this.a=d},
dE4:function dE4(d){this.a=d},
dEj:function dEj(d){this.a=d},
dEk:function dEk(d,e){this.a=d
this.b=e},
dEl:function dEl(d,e){this.a=d
this.b=e},
dEm:function dEm(d){this.a=d},
dEi:function dEi(d,e){this.a=d
this.b=e},
dEn:function dEn(d,e){this.a=d
this.b=e},
dEh:function dEh(d,e){this.a=d
this.b=e},
dEo:function dEo(d){this.a=d},
dEg:function dEg(d){this.a=d},
dEp:function dEp(d){this.a=d},
dEf:function dEf(d){this.a=d},
dEq:function dEq(d){this.a=d},
dEe:function dEe(d){this.a=d},
dEr:function dEr(d){this.a=d},
dEd:function dEd(d){this.a=d},
aKx:function aKx(){},
aKy:function aKy(){},
c_R:function c_R(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c_S:function c_S(d,e){this.a=d
this.b=e},
c_T:function c_T(d){this.a=d},
axy(d,e,f,g,h){return new B.ba3(d,e,f,g,h)},
fVs(d,e,f,g,h,i){return $.hKm.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cLj(d,e,f,i,g,h))},
xX:function xX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
C7:function C7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nj:function nj(d,e,f){this.a=d
this.b=e
this.c=f},
ba3:function ba3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
feO:function feO(){},
feP:function feP(){},
feQ:function feQ(){},
feX:function feX(){},
feY:function feY(){},
feZ:function feZ(){},
U1:function U1(d){this.a=d},
aC6:function aC6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fo$=m
_.kZ$=n
_.fS$=o
_.fp$=p
_.bs$=q
_.a8$=r
_.c=_.a=null},
dGE:function dGE(d){this.a=d},
dGi:function dGi(d,e){this.a=d
this.b=e},
dGl:function dGl(){},
dGF:function dGF(){},
dGg:function dGg(d,e){this.a=d
this.b=e},
dGh:function dGh(d,e){this.a=d
this.b=e},
dGm:function dGm(d,e,f){this.a=d
this.b=e
this.c=f},
dGb:function dGb(){},
dGc:function dGc(){},
dGd:function dGd(d){this.a=d},
dGe:function dGe(d,e){this.a=d
this.b=e},
dGf:function dGf(d,e,f){this.a=d
this.b=e
this.c=f},
dGn:function dGn(){},
dGo:function dGo(d,e){this.a=d
this.b=e},
dGp:function dGp(d){this.a=d},
dGk:function dGk(d,e){this.a=d
this.b=e},
dGj:function dGj(d){this.a=d},
dGa:function dGa(d,e,f){this.a=d
this.b=e
this.c=f},
dGy:function dGy(d){this.a=d},
dGx:function dGx(d){this.a=d},
dGz:function dGz(d){this.a=d},
dGw:function dGw(d){this.a=d},
dGu:function dGu(d){this.a=d},
dGv:function dGv(d){this.a=d},
dGt:function dGt(d){this.a=d},
dGq:function dGq(d){this.a=d},
dGs:function dGs(d){this.a=d},
dGA:function dGA(d,e){this.a=d
this.b=e},
dGB:function dGB(d,e){this.a=d
this.b=e},
dGC:function dGC(d){this.a=d},
dGr:function dGr(d){this.a=d},
dGD:function dGD(d,e){this.a=d
this.b=e},
bam:function bam(d,e){this.b=d
this.a=e},
cLj:function cLj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKD:function aKD(){},
bwh:function bwh(){},
hBb(){return new B.N4(null)},
ox(d,e,f,g,h){return new B.brT(d,e,f,g,h)},
bqj(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fVY(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
N4:function N4(d){this.a=d},
K9:function K9(d,e){this.a=d
this.b=e},
Ao:function Ao(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCn:function aCn(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dMt:function dMt(d,e){this.a=d
this.b=e},
dMs:function dMs(d){this.a=d},
dMv:function dMv(d,e){this.a=d
this.b=e},
dMu:function dMu(d){this.a=d},
brT:function brT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffe:function ffe(){},
fff:function fff(){},
ffg:function ffg(){},
ffr:function ffr(){},
fft:function fft(){},
ffu:function ffu(){},
ffv:function ffv(){},
ffw:function ffw(){},
ffx:function ffx(){},
ffy:function ffy(){},
ffz:function ffz(){},
ffh:function ffh(){},
ffi:function ffi(){},
ffj:function ffj(){},
ffk:function ffk(){},
ffl:function ffl(){},
ffm:function ffm(){},
ffn:function ffn(){},
ffo:function ffo(){},
ffp:function ffp(){},
ffq:function ffq(){},
ffs:function ffs(){},
bqk:function bqk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eWs:function eWs(d){this.a=d},
eWr:function eWr(d,e){this.a=d
this.b=e},
eWp:function eWp(d){this.a=d},
eWt:function eWt(d){this.a=d},
eWq:function eWq(d,e){this.a=d
this.b=e},
aet:function aet(d,e,f){this.c=d
this.d=e
this.a=f},
adl:function adl(d,e,f){this.c=d
this.d=e
this.a=f},
PM:function PM(d,e,f,g,h,i,j,k,l,m){var _=this
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
bri:function bri(d,e){this.b=d
this.a=e},
bqO:function bqO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b92:function b92(d,e){this.b=d
this.a=e},
aGD:function aGD(d,e){this.c=d
this.a=e},
aGE:function aGE(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.b1$=f
_.c=_.a=null},
eW8:function eW8(d){this.a=d},
eW7:function eW7(d){this.a=d},
eW6:function eW6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eW5:function eW5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eW3:function eW3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eW2:function eW2(d,e,f){this.a=d
this.b=e
this.c=f},
eW4:function eW4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eW1:function eW1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWg:function eWg(d){this.a=d},
eWf:function eWf(d){this.a=d},
eWh:function eWh(d,e){this.a=d
this.b=e},
eWi:function eWi(d,e){this.a=d
this.b=e},
eWj:function eWj(d,e){this.a=d
this.b=e},
eWe:function eWe(d,e,f){this.a=d
this.b=e
this.c=f},
eWk:function eWk(d,e,f){this.a=d
this.b=e
this.c=f},
eWd:function eWd(d){this.a=d},
eW9:function eW9(d){this.a=d},
eWl:function eWl(d){this.a=d},
eWm:function eWm(d){this.a=d},
eWc:function eWc(d,e){this.a=d
this.b=e},
eWn:function eWn(d,e){this.a=d
this.b=e},
eWb:function eWb(d,e){this.a=d
this.b=e},
eWo:function eWo(d,e){this.a=d
this.b=e},
eWa:function eWa(d,e){this.a=d
this.b=e},
eW_:function eW_(){},
eW0:function eW0(){},
bpX:function bpX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpo:function bpo(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9I:function b9I(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpq:function bpq(d,e,f){this.b=d
this.c=e
this.a=f},
btn:function btn(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMm:function aMm(){},
hiw(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.u(w,0)),u=e.aB(0,new C.u(w,0)),t=1-f,s=3*t
return d.aG(0,t*t*t).ad(0,v.aG(0,s*t*f)).ad(0,u.aG(0,s*f*f)).ad(0,e.aG(0,f*f*f))},
bgd(d,e,f,g,h,i){return $.hKX.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.dgh(d,e,f,i,g,h))},
a_U:function a_U(d,e){this.a=d
this.b=e},
q_:function q_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qG:function qG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Cb:function Cb(d,e){this.a=d
this.b=e},
YS:function YS(d,e){this.a=d
this.b=e},
aej:function aej(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a06:function a06(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Cl:function Cl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abc:function abc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abt:function abt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adp:function adp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgb:function bgb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bu$=_.bL$=0},
dgl:function dgl(d){this.a=d},
dgm:function dgm(d){this.a=d},
dgi:function dgi(d,e){this.a=d
this.b=e},
dgj:function dgj(d){this.a=d},
dgk:function dgk(d){this.a=d},
dgn:function dgn(d){this.a=d},
dgo:function dgo(d){this.a=d},
dgp:function dgp(d){this.a=d},
dgq:function dgq(d){this.a=d},
dgr:function dgr(d){this.a=d},
dgs:function dgs(d){this.a=d},
dgt:function dgt(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgv:function dgv(d){this.a=d},
FD:function FD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vv:function Vv(d){this.a=d},
aDD:function aDD(d,e,f,g,h,i,j){var _=this
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
_.bs$=i
_.a8$=j
_.c=_.a=null},
el6:function el6(d){this.a=d},
ekW:function ekW(d){this.a=d},
ekY:function ekY(){},
ekZ:function ekZ(){},
el1:function el1(){},
el2:function el2(d,e,f){this.a=d
this.b=e
this.c=f},
el3:function el3(d){this.a=d},
el4:function el4(d){this.a=d},
el_:function el_(){},
el0:function el0(d){this.a=d},
elw:function elw(d){this.a=d},
el5:function el5(){},
ekS:function ekS(d){this.a=d},
el8:function el8(d){this.a=d},
el7:function el7(d){this.a=d},
ela:function ela(){},
el9:function el9(d,e){this.a=d
this.b=e},
ekV:function ekV(){},
ekT:function ekT(d){this.a=d},
ekU:function ekU(d){this.a=d},
elu:function elu(d){this.a=d},
elt:function elt(d){this.a=d},
elv:function elv(d){this.a=d},
elk:function elk(d,e){this.a=d
this.b=e},
els:function els(d){this.a=d},
elq:function elq(d){this.a=d},
elr:function elr(d){this.a=d},
elp:function elp(d){this.a=d},
elo:function elo(d){this.a=d},
ell:function ell(d){this.a=d},
elm:function elm(d){this.a=d},
eln:function eln(d){this.a=d},
ekX:function ekX(){},
elg:function elg(d){this.a=d},
elh:function elh(d){this.a=d},
elf:function elf(d){this.a=d},
eli:function eli(d){this.a=d},
ele:function ele(d){this.a=d},
elj:function elj(d){this.a=d},
eld:function eld(d){this.a=d},
elc:function elc(d){this.a=d},
elb:function elb(d,e){this.a=d
this.b=e},
bgc:function bgc(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dgh:function dgh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLt:function aLt(){},
bkM:function bkM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
PD:function PD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
VK:function VK(d){this.a=d},
bjQ:function bjQ(d,e,f,g,h,i,j,k){var _=this
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
_.bs$=j
_.a8$=k
_.c=_.a=null},
exb:function exb(d){this.a=d},
ex9:function ex9(d){this.a=d},
exa:function exa(){},
ewN:function ewN(){},
ewM:function ewM(){},
ewW:function ewW(d,e){this.a=d
this.b=e},
ewY:function ewY(d){this.a=d},
ex1:function ex1(d){this.a=d},
ewX:function ewX(d){this.a=d},
ex2:function ex2(d){this.a=d},
ex3:function ex3(d){this.a=d},
ex4:function ex4(d,e){this.a=d
this.b=e},
ewV:function ewV(d,e){this.a=d
this.b=e},
ex5:function ex5(d){this.a=d},
ewU:function ewU(d){this.a=d},
ex6:function ex6(d,e){this.a=d
this.b=e},
ewT:function ewT(d,e){this.a=d
this.b=e},
ex7:function ex7(d){this.a=d},
ewS:function ewS(d,e){this.a=d
this.b=e},
ex8:function ex8(d){this.a=d},
ewR:function ewR(d){this.a=d},
ewZ:function ewZ(d){this.a=d},
ewQ:function ewQ(d){this.a=d},
ex_:function ex_(d){this.a=d},
ewP:function ewP(d){this.a=d},
ex0:function ex0(d,e){this.a=d
this.b=e},
ewO:function ewO(d,e){this.a=d
this.b=e},
brd:function brd(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
VW:function VW(d){this.a=d},
aDT:function aDT(d,e,f,g){var _=this
_.d=d
_.e=$
_.f=e
_.r="bounce"
_.w=3
_.x=56
_.y=0
_.z=!0
_.Q=0
_.bs$=f
_.a8$=g
_.c=_.a=null},
eDL:function eDL(d,e){this.a=d
this.b=e},
eDM:function eDM(d,e,f){this.a=d
this.b=e
this.c=f},
eDN:function eDN(d){this.a=d},
eDK:function eDK(){},
eDO:function eDO(d,e){this.a=d
this.b=e},
eDJ:function eDJ(d,e){this.a=d
this.b=e},
eDP:function eDP(d,e){this.a=d
this.b=e},
eDI:function eDI(d,e){this.a=d
this.b=e},
eDQ:function eDQ(d){this.a=d},
eDH:function eDH(d){this.a=d},
eDR:function eDR(d,e){this.a=d
this.b=e},
eDG:function eDG(d,e){this.a=d
this.b=e},
eDS:function eDS(d){this.a=d},
eDT:function eDT(d){this.a=d},
eDF:function eDF(d,e){this.a=d
this.b=e},
aLC:function aLC(){},
aLI:function aLI(){},
a_o:function a_o(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
Vs:function Vs(d){this.a=d},
aDv:function aDv(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fo$=h
_.kZ$=i
_.fS$=j
_.fp$=k
_.bs$=l
_.a8$=m
_.c=_.a=null},
ehD:function ehD(d){this.a=d},
ehE:function ehE(d,e){this.a=d
this.b=e},
ehr:function ehr(d,e){this.a=d
this.b=e},
ehs:function ehs(d){this.a=d},
ehp:function ehp(d){this.a=d},
ehq:function ehq(d){this.a=d},
eho:function eho(d){this.a=d},
eht:function eht(d){this.a=d},
ehn:function ehn(d,e){this.a=d
this.b=e},
ehv:function ehv(d){this.a=d},
ehm:function ehm(d,e){this.a=d
this.b=e},
ehw:function ehw(d){this.a=d},
ehl:function ehl(d,e){this.a=d
this.b=e},
ehx:function ehx(d){this.a=d},
ehk:function ehk(d){this.a=d},
ehy:function ehy(d){this.a=d},
ehj:function ehj(d){this.a=d},
ehz:function ehz(d){this.a=d},
ehi:function ehi(d){this.a=d},
ehA:function ehA(d){this.a=d},
ehB:function ehB(d){this.a=d},
ehC:function ehC(d){this.a=d},
ehh:function ehh(d){this.a=d},
ehu:function ehu(d){this.a=d},
bkz:function bkz(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abj:function abj(d,e,f){this.a=d
this.b=e
this.c=f},
VR:function VR(d){this.a=d},
bjV:function bjV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fo$=i
_.kZ$=j
_.fS$=k
_.fp$=l
_.bs$=m
_.a8$=n
_.c=_.a=null},
eDc:function eDc(d){this.a=d},
eDd:function eDd(d){this.a=d},
eDb:function eDb(d){this.a=d},
eD1:function eD1(d,e){this.a=d
this.b=e},
eD2:function eD2(d){this.a=d},
eD_:function eD_(d){this.a=d},
eD0:function eD0(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eCS:function eCS(d){this.a=d},
eCT:function eCT(d){this.a=d},
eCR:function eCR(d){this.a=d},
eD3:function eD3(d,e){this.a=d
this.b=e},
eCY:function eCY(d,e){this.a=d
this.b=e},
eD4:function eD4(d,e){this.a=d
this.b=e},
eCX:function eCX(d,e){this.a=d
this.b=e},
eD5:function eD5(d){this.a=d},
eCW:function eCW(d){this.a=d},
eD6:function eD6(d){this.a=d},
eCV:function eCV(d,e){this.a=d
this.b=e},
eD7:function eD7(d){this.a=d},
eCU:function eCU(d,e){this.a=d
this.b=e},
eD8:function eD8(d){this.a=d},
eCQ:function eCQ(d,e){this.a=d
this.b=e},
eD9:function eD9(d){this.a=d},
eCP:function eCP(d,e){this.a=d
this.b=e},
eDa:function eDa(d){this.a=d},
eCO:function eCO(d,e){this.a=d
this.b=e},
bs4:function bs4(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abM:function abM(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
U_:function U_(d){this.a=d},
aC5:function aC5(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fo$=h
_.kZ$=i
_.fS$=j
_.fp$=k
_.bs$=l
_.a8$=m
_.c=_.a=null},
dFN:function dFN(d){this.a=d},
dFM:function dFM(d,e){this.a=d
this.b=e},
dFO:function dFO(){},
dFP:function dFP(d){this.a=d},
dFD:function dFD(d,e){this.a=d
this.b=e},
dFG:function dFG(d){this.a=d},
dFF:function dFF(d,e){this.a=d
this.b=e},
dFE:function dFE(d,e){this.a=d
this.b=e},
dFK:function dFK(d,e,f){this.a=d
this.b=e
this.c=f},
dFJ:function dFJ(d){this.a=d},
dFH:function dFH(d){this.a=d},
dFI:function dFI(d){this.a=d},
dFL:function dFL(d){this.a=d},
ba2:function ba2(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cKR:function cKR(d){this.a=d},
aKB:function aKB(){},
bwg:function bwg(){},
aLq:function aLq(){},
bwx:function bwx(){},
aLF:function aLF(){},
bwF:function bwF(){},
Fz:function Fz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
acB:function acB(d,e,f){this.a=d
this.b=e
this.c=f},
Vm:function Vm(d){this.a=d},
bju:function bju(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fo$=i
_.kZ$=j
_.fS$=k
_.fp$=l
_.bs$=m
_.a8$=n
_.c=_.a=null},
ed6:function ed6(d,e){this.a=d
this.b=e},
edv:function edv(d){this.a=d},
edk:function edk(d){this.a=d},
edb:function edb(d){this.a=d},
edl:function edl(d,e){this.a=d
this.b=e},
edm:function edm(d){this.a=d},
eda:function eda(d){this.a=d},
edi:function edi(d){this.a=d},
edj:function edj(d){this.a=d},
edh:function edh(d){this.a=d},
edn:function edn(d,e){this.a=d
this.b=e},
edg:function edg(d,e){this.a=d
this.b=e},
edo:function edo(d,e){this.a=d
this.b=e},
edf:function edf(d,e){this.a=d
this.b=e},
edp:function edp(d,e){this.a=d
this.b=e},
ede:function ede(d,e){this.a=d
this.b=e},
edq:function edq(d){this.a=d},
edd:function edd(d,e){this.a=d
this.b=e},
edr:function edr(d){this.a=d},
edc:function edc(d){this.a=d},
eds:function eds(d){this.a=d},
ed9:function ed9(d){this.a=d},
edt:function edt(d){this.a=d},
ed8:function ed8(d){this.a=d},
edu:function edu(d){this.a=d},
ed7:function ed7(d){this.a=d},
bh6:function bh6(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
ad6:function ad6(d,e){this.a=d
this.b=e
this.c=-1000},
Vr:function Vr(d){this.a=d},
aDu:function aDu(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fo$=h
_.kZ$=i
_.fS$=j
_.fp$=k
_.bs$=l
_.a8$=m
_.c=_.a=null},
eh0:function eh0(d,e){this.a=d
this.b=e},
eh1:function eh1(d,e,f){this.a=d
this.b=e
this.c=f},
eh8:function eh8(d){this.a=d},
eh7:function eh7(d){this.a=d},
eh9:function eh9(d,e){this.a=d
this.b=e},
eha:function eha(d){this.a=d},
eh6:function eh6(d){this.a=d},
ehb:function ehb(d){this.a=d},
eh5:function eh5(d,e){this.a=d
this.b=e},
ehc:function ehc(d,e){this.a=d
this.b=e},
eh4:function eh4(d,e){this.a=d
this.b=e},
ehd:function ehd(d,e){this.a=d
this.b=e},
eh3:function eh3(d,e){this.a=d
this.b=e},
ehe:function ehe(d){this.a=d},
ehf:function ehf(d){this.a=d},
eh2:function eh2(d){this.a=d},
ehg:function ehg(d){this.a=d},
bkA:function bkA(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aLo:function aLo(){},
bwv:function bwv(){},
aLp:function aLp(){},
bww:function bww(){},
fb3(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7T,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.i_,w,w,1/0)},
i_r(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.T(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.L)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdK(j),j=j.gaf(j);j.C();){s=j.gS(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e3(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bI(0,new B.fuv(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.w1.h(0,d[n]).a)return!1
m=C.et([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.L)(j),++u){k=j[u]
if(m.K(0,k))l.push(k)}return m.a===d.length},
fYv(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cJ(w,v[0])*16+A.a.cJ(w,v[1])*4+A.a.cJ(w,v[2])]},
tb:function tb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8W:function b8W(d,e){this.a=d
this.b=e},
fuv:function fuv(d,e){this.a=d
this.b=e},
Vp:function Vp(d){this.a=d},
aDs:function aDs(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
egv:function egv(d){this.a=d},
egu:function egu(d,e){this.a=d
this.b=e},
egh:function egh(d,e){this.a=d
this.b=e},
egb:function egb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
egc:function egc(d){this.a=d},
egg:function egg(d,e){this.a=d
this.b=e},
egf:function egf(d,e){this.a=d
this.b=e},
egd:function egd(d){this.a=d},
ege:function ege(d,e){this.a=d
this.b=e},
egp:function egp(){},
egq:function egq(d){this.a=d},
ego:function ego(d){this.a=d},
egr:function egr(d){this.a=d},
egn:function egn(d){this.a=d},
egl:function egl(d){this.a=d},
egm:function egm(d,e){this.a=d
this.b=e},
egi:function egi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egk:function egk(d){this.a=d},
egs:function egs(d,e){this.a=d
this.b=e},
egj:function egj(d,e){this.a=d
this.b=e},
egt:function egt(d,e){this.a=d
this.b=e},
bhO:function bhO(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dor:function dor(d,e){this.a=d
this.b=e},
Un:function Un(d){this.a=d},
biK:function biK(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dOx:function dOx(d){this.a=d},
dOw:function dOw(d,e){this.a=d
this.b=e},
dOm:function dOm(d){this.a=d},
dOl:function dOl(){},
dOn:function dOn(d){this.a=d},
dOk:function dOk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOv:function dOv(){},
dOq:function dOq(){},
dOr:function dOr(d,e){this.a=d
this.b=e},
dOp:function dOp(d,e){this.a=d
this.b=e},
dOs:function dOs(d){this.a=d},
dOo:function dOo(d){this.a=d},
dOt:function dOt(d,e){this.a=d
this.b=e},
dOu:function dOu(d,e){this.a=d
this.b=e},
UD:function UD(d){this.a=d},
aCz:function aCz(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bs$=g
_.a8$=h
_.c=_.a=null},
dRm:function dRm(d){this.a=d},
dRl:function dRl(d,e){this.a=d
this.b=e},
dR9:function dR9(){},
dR8:function dR8(d,e){this.a=d
this.b=e},
dRa:function dRa(d){this.a=d},
dRe:function dRe(d){this.a=d},
dRd:function dRd(d,e){this.a=d
this.b=e},
dRf:function dRf(d){this.a=d},
dRc:function dRc(d,e){this.a=d
this.b=e},
dRg:function dRg(d){this.a=d},
dRb:function dRb(d,e){this.a=d
this.b=e},
dRh:function dRh(d){this.a=d},
dRi:function dRi(d){this.a=d},
dRj:function dRj(d){this.a=d},
dRk:function dRk(d){this.a=d},
bd7:function bd7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d3z:function d3z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3B:function d3B(d,e,f){this.a=d
this.b=e
this.c=f},
d3A:function d3A(d,e){this.a=d
this.b=e},
aKP:function aKP(){},
bzr(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7T,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.i_,w,w,1/0)},
foa(d,e,f,g,h){var w,v,u=null,t=C.hr(u,u,u,u,C.de(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.ca,u,A.e_,A.c8)
t.ey()
w=t.b
v=w.c
w=w.a.c
w=f.aB(0,new C.u(v/2,w.gbc(w)/2))
t.a4(d,w)},
hXw(){var w,v,u,t,s,r,q,p,o=new C.eM()
o.dB(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aC(5)
if(r.K(0,p))q.push(new C.z(p,1+o.aC(2+A.o.an(t,3))))}A.d.b0(q,new B.fpb())
w.push(new B.aRe(q))}return w},
a1j(d,e){var w,v,u,t
for(w=new C.WY(d),v="";w.C();){u=C.jJ(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jJ(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
i9e(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.WY(d),v=0,u="";w.C();){t=C.jJ(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.E(v,p)
u+=C.jJ(65+A.o.E(A.o.E(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aRe:function aRe(d){this.a=d},
bFs:function bFs(){},
fpb:function fpb(){},
TS:function TS(d){this.a=d},
bio:function bio(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bs$=h
_.a8$=i
_.c=_.a=null},
dBY:function dBY(){},
dCa:function dCa(d){this.a=d},
dC9:function dC9(d,e,f){this.a=d
this.b=e
this.c=f},
dCb:function dCb(d){this.a=d},
dC8:function dC8(d,e){this.a=d
this.b=e},
dBZ:function dBZ(d,e){this.a=d
this.b=e},
dC3:function dC3(){},
dC4:function dC4(d){this.a=d},
dC2:function dC2(d){this.a=d},
dC5:function dC5(d,e){this.a=d
this.b=e},
dC1:function dC1(d,e){this.a=d
this.b=e},
dC6:function dC6(d,e){this.a=d
this.b=e},
dC0:function dC0(d,e){this.a=d
this.b=e},
dC7:function dC7(d){this.a=d},
dC_:function dC_(d){this.a=d},
b97:function b97(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cDo:function cDo(d,e){this.a=d
this.b=e},
UR:function UR(d){this.a=d},
biW:function biW(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bs$=g
_.a8$=h
_.c=_.a=null},
dVp:function dVp(d){this.a=d},
dVo:function dVo(d,e){this.a=d
this.b=e},
dVq:function dVq(d){this.a=d},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVf:function dVf(d,e,f){this.a=d
this.b=e
this.c=f},
dVj:function dVj(d){this.a=d},
dVi:function dVi(d){this.a=d},
dVk:function dVk(d,e){this.a=d
this.b=e},
dVh:function dVh(d,e){this.a=d
this.b=e},
dVl:function dVl(d){this.a=d},
dVg:function dVg(d,e){this.a=d
this.b=e},
dVm:function dVm(d,e){this.a=d
this.b=e},
beB:function beB(d,e,f){this.b=d
this.c=e
this.a=f},
dbz:function dbz(d,e){this.a=d
this.b=e},
dbA:function dbA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
U0:function U0(d){this.a=d},
biB:function biB(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dG9:function dG9(d){this.a=d},
dG8:function dG8(d,e){this.a=d
this.b=e},
dFS:function dFS(){},
dG0:function dG0(d){this.a=d},
dG_:function dG_(){},
dG1:function dG1(d){this.a=d},
dFZ:function dFZ(){},
dG2:function dG2(d){this.a=d},
dFY:function dFY(d){this.a=d},
dG3:function dG3(d){this.a=d},
dFX:function dFX(d){this.a=d},
dG4:function dG4(d){this.a=d},
dFW:function dFW(d){this.a=d},
dG5:function dG5(d,e){this.a=d
this.b=e},
dFV:function dFV(d,e){this.a=d
this.b=e},
dG6:function dG6(d){this.a=d},
dFU:function dFU(d,e){this.a=d
this.b=e},
dG7:function dG7(d){this.a=d},
dFT:function dFT(d,e){this.a=d
this.b=e},
aKt:function aKt(){},
aKX:function aKX(){},
hnz(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aB(0,e).gcl()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h3E(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a41(w,v,u,A.cI,C.T(x.N,x.y))},
hv4(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.h3F(d),d.d*f.b)},
h3F(d){return 42+(D.lY.ai(0,d.b)?(d.ch-1)*38:0)},
eb:function eb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
to:function to(d,e,f,g){var _=this
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
a9S:function a9S(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aaZ:function aaZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a41:function a41(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bLw:function bLw(){},
bLH:function bLH(d){this.a=d},
bLC:function bLC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLI:function bLI(d){this.a=d},
bLJ:function bLJ(d){this.a=d},
bLL:function bLL(d){this.a=d},
bLM:function bLM(d){this.a=d},
bLK:function bLK(d){this.a=d},
bLN:function bLN(d,e,f){this.a=d
this.b=e
this.c=f},
bLO:function bLO(d){this.a=d},
bLy:function bLy(d){this.a=d},
bLz:function bLz(d){this.a=d},
bLx:function bLx(d){this.a=d},
bLA:function bLA(d,e,f){this.a=d
this.b=e
this.c=f},
bLB:function bLB(d){this.a=d},
bLv:function bLv(d){this.a=d},
bLP:function bLP(d,e){this.a=d
this.b=e},
bLD:function bLD(d,e){this.a=d
this.b=e},
bLG:function bLG(d){this.a=d},
bLF:function bLF(d){this.a=d},
bLE:function bLE(d){this.a=d},
aif:function aif(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bGE:function bGE(){},
bGF:function bGF(){},
my:function my(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cka:function cka(d){this.a=d},
i6Q(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fFU(),c9=new B.fFW(),d0=new B.fFX(),d1=new B.fFV(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bK,A.bJ))
d3.bC(D.e5j,D.e36,c9.$2(A.dB,1.4))
d3.bC(D.e2X,D.e2W,c9.$2(A.bv,2.4))
d3.bC(D.e2Y,Y.aGe,c9.$2(A.bv,2.4))
if(c7){d2=c8.$1(A.f6.j(0.5))
d2.z=A.QX
d3.ae(D.e2H,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aM1,A.aP,A.cr))
d3.ae(A.cJ,16,c8.$1(A.bv))
d3.ae(A.cJ,13,c8.$1(c7?A.aR.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.j1(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ad,3).H()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).H()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ae(D.e5f,2.4,c8.$1(c7?A.bl:A.ak))
d3.ae(D.e5X,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.ee))
d2=$.W().r
t=x.v
q=new C.aO(d2,A.ap,c6,c6,C.a([],t))
q.F(new C.b5(-16,-26))
q.F(new C.ap(16,-26))
q.F(new C.ap(12,14))
q.F(new C.ap(-12,14))
q.F(new C.bF())
d3.aP(q,c8.$1(A.f6.j(0.35)))
if(c7){d2=new C.aO(d2,A.ap,c6,c6,C.a([],t))
d2.F(new C.b5(-14,-10))
d2.F(new C.ap(14,-10))
d2.F(new C.ap(12,14))
d2.F(new C.ap(-12,14))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.ay.j(0.7)))}d3.aP(q,c9.$2(A.ad,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.j1(0,d4.y)
d3.bC(D.a53,D.aGu,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f4).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.ae(A.ik,3,c8.$1(c7?A.bl:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a2P[m]
r=c9.$2(A.bv,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.by(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.cl(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(C.c_(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
w.F(new C.b5(-24,-12))
w.F(new C.ap(10,-12))
w.F(new C.ap(10,2))
w.F(new C.ap(-2,2))
w.F(new C.ap(-6,22))
w.F(new C.ap(-16,22))
w.F(new C.ap(-14,2))
w.F(new C.ap(-24,2))
w.F(new C.bF())
d3.aP(w,d1.$3(D.eJt,A.aM,A.d5))
d3.aY(D.eIT,c8.$1(A.dA))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.j1(0,d4.y*2)
d3.bC(A.J,D.e30,c9.$2(A.bO,2.4))
d3.bC(A.a52,D.e3_,c9.$2(A.hI,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dP.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(16,-6))
d2.F(new C.ap(52,-26))
d2.F(new C.ap(52,18))
d2.F(new C.ap(16,4))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.bL.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eJz,A.bk,A.cC))
k=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
k.F(new C.b5(4,-6))
k.F(new C.ap(18,-12))
k.F(new C.ap(18,12))
k.F(new C.ap(4,6))
k.F(new C.bF())
d3.aP(k,c8.$1(A.ee))
d3.ae(D.e34,7,c8.$1(c7?A.c:A.dA))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(L.n_))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bv(d5*17),3)!==0
else j=!1
i=j?A.bZ:D.bgV
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bZ.j(0.35))
t.z=A.lt
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e5p,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eJF,A.bO,A.bk))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bL.j(0.75):A.az))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.j1(0,d4.y*0.5)
d3.hP(C.cl(A.J,7,22),c8.$1(A.d5))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(L.n_))
if(c7)d6.$5(d3,"0:"+A.a.aT(A.o.u(59-A.o.E(A.k.bv(d5),60)),2,"0"),D.e35,A.b2,6.5)
d3.ae(D.e3h,4,c8.$1(A.dA))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ae(A.RL,10,c8.$1(c7?A.c7:A.bv))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.j1(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e5Z,A.c,16)
d2.restore()
d3.ae(A.k4,6,c8.$1(A.d3))
d3.ae(A.k4,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.RL,14+v*6+A.k.E(t,6))
r=c9.$2(A.c7.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c_(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bC(D.e5o,D.e5V,c9.$2(A.bv,4))
d2=d3.a
J.by(d2.save())
d3.j1(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eJu,A.bO,A.ak))
d3.ae(D.aGg,8,c8.$1(A.az))
d3.ae(D.aGg,4.5,c8.$1(c7?A.aR:A.cC))
d3.ae(D.e5m,2.2,c8.$1(c7&&A.o.E(A.k.bv(d5*1.6),2)===0?A.ay:A.kl))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e5x,A.ay,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eJC,A.iR,A.fa))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dL))
if(c7){d2=d5*2.3
d3.ae(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aY(new C.a9(-18,t,-15.6,t+8),c8.$1(A.b2))
d2=-9+Math.sin(d2-0.4)*6
d3.aY(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bZ))}d3.ae(D.e5i,4,c8.$1(A.aX))
d3.ae(D.e31,2.4,c8.$1(A.ay))
d3.ae(D.e3e,2.4,c8.$1(A.bl))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.az))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dL))
if(c7){d2=$.W()
t=C.a([],x.v)
h=new C.aO(d2.r,A.ap,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.E((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new C.b5(l,f)
t.push(s)
p=h.f
if(p!=null)s.bA(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bA(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aP(h,c9.$2(A.b2,1.8))
d6.$5(d3,"72",D.e32,A.h1,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e5B,A.h1.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ae(D.e5r,3,c8.$1(c7?A.bl:A.bv))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cy.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aY(D.eJw,c8.$1(F.ta))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.t8(0,-1,1)
d3.hP(C.cl(A.J,8,14),c8.$1(A.cs))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,0))
d2.F(new C.ap(-12,-4))
d2.F(new C.ap(-12,4))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.cg))
d3.ae(D.e3J,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.E(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.E(v,2)
r=c9.$2(A.ad,1).H()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.W().r
t=x.v
e=new C.aO(d2,A.ap,c6,c6,C.a([],t))
e.F(new C.b5(-9,22))
e.F(new C.ap(-5,-16))
e.F(new C.ap(5,-16))
e.F(new C.ap(9,22))
e.F(new C.bF())
d3.aP(e,d1.$3(D.eK_,A.c,A.bC))
d3.aY(D.eJZ,c8.$1(c7?A.dP:A.bv))
s=new C.aO(d2,A.ap,c6,c6,C.a([],t))
s.F(new C.b5(-7,-22))
s.F(new C.ap(0,-29))
s.F(new C.ap(7,-22))
s.F(new C.bF())
d3.aP(s,c8.$1(A.ep))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ap,c6,c6,C.a([],t))
d2.F(new C.b5(0,-19))
t=d*34
d2.F(new C.ap(t,-26))
d2.F(new C.ap(t,-12))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.dP.j(0.45)))
d2=c8.$1(A.dP.j(0.35))
d2.z=A.QX
d3.ae(D.e2I,14,d2)}return!0
case"discoball":d3.bC(D.e2N,K.aGc,c9.$2(A.dA,1.4))
d3.ae(A.J,16,d1.$3(D.eJh,A.aP,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dq,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dq,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.E(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d4p[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eJf,A.cr,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eJ8,A.aL,A.bJ))
d3.bC(D.e2M,D.e2O,c9.$2(A.bv,1.6))
d3.ae(D.e2P,2.2,c8.$1(c7?A.ay:A.bv))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a2R[m]
if(c7)t=a1?A.b8:A.f7
else t=A.cC
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.j1(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bC(A.J,D.a5_,c9.$2(A.bJ,4))
d2.restore()
d3.bC(D.e5b,D.e5v,c9.$2(A.bJ,4))
d3.aY(D.eJY,c8.$1(c7?A.b8.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.axc[m]+1,d2,10,14,2)
p=C.aq(A.bL,A.d5,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.er(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eJv,A.bO,A.bk))
for(m=0;m<2;++m){l=D.axc[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fk:A.az).H()
t.drawRRect(C.er(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cs.j(0.5))
s.z=G.mC
r=s.H()
t.drawRRect(C.er(d2),r)
r.delete()}}d3.bC(D.e3l,D.e3C,c9.$2(A.az,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cC))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new H.mO(1,a3,0.8,1).iB():A.ee
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mC
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dA))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eJk,A.cy,A.KO))
d3.ae(D.e5C,8,c8.$1(A.qM))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.j1(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.f6,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
t.F(new C.b5(16,6))
t.F(new C.ap(26,6))
t.F(new C.ap(26,-20))
t.F(new C.ap(10,-20))
d3.aP(t,c9.$2(A.bJ,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.E(t+v*0.2,1)
r=c8.$1(A.fT).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ae(D.e4a,3.2,c8.$1(A.fT.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.j1(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eJx,A.j9,A.td))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.ee))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cs.j(0.4))
d2.z=G.mC
d3.ae(D.e3g,8,d2)}return!0
case"headphones":d3.f6(C.cl(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bv,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.axe[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a9(s,0,s+14,20),A.bt,A.pw).H()
d2.drawRRect(C.er(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bU(new C.u(l,10),10+v*5+A.k.E(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eA.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c_(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.E(d5*14,8)),A.kf,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eJd,A.dA,A.ee))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dL))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aT(A.o.u(C.dl(a4)),2,"0")+":"+A.a.aT(A.o.u(C.fZ(a4)),2,"0"),D.e2T,A.b2,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.E6,A.h1,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bv(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(L.n_))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bJ,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(a5),$.pr(),!0)
d2.translate(-27,-19)
E.KY(d3,D.ePj,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.va))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dN,A.di))
d3.aD(a6,c9.$2(A.b3,1.2))
d3.ae(D.aGB,9,c8.$1(A.az))
d3.ae(D.aGB,6,c9.$2(A.d5,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.az))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dL))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.b2:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e4e,s,8.2)
d3.ae(D.e37,2.4,c8.$1(c7?A.bl:A.aK))
d6.$5(d3,"IN",D.e5w,A.ad,6)
d6.$5(d3,"OUT",D.e42,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bJ,A.ay,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.ae(D.e2J,3,c8.$1(A.aK))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eJ9,A.ee,A.hF))
d6.$5(d3,"7805",D.a53,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.da6[m]-1
r=c8.$1(A.e1).H()
d2.drawRect(C.c_(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e5Y,A.bi,9)
return!0
case"diode":d3.bC(D.aGF,D.aGp,c9.$2(A.e1,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aF.j(0.85)))
d3.aY(D.eIZ,c8.$1(A.bi))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dP.j(0.4))
t.z=A.jo
d3.aD(d2,t)}d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,-4))
d2.F(new C.ap(-8,4))
d2.F(new C.ap(-1,0))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.aX))
d6.$5(d3,"one way",D.e5k,A.aA,8)
return!0
case"ldr":d3.bC(D.aGF,D.a53,c9.$2(A.e1,2.4))
d3.bC(D.aGu,D.aGp,c9.$2(A.e1,2.4))
d3.ae(A.J,12,c8.$1(A.d5))
d3.ae(A.J,12,c9.$2(A.tm,1.6))
d2=$.W()
t=C.a([],x.v)
a8=new C.aO(d2.r,A.ap,c6,c6,t)
a8.F(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bA(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aP(a8,c9.$2(A.bL,1.4))
d2=C.aq(A.bv,A.dP,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e5c,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ea
break A}if("sonytv"===d2){t=A.qH
break A}if("appletv"===d2){t=A.e1
break A}t=F.E8
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
p.clipRRect(C.er(a5),$.pr(),!0)
p.translate(t,s)
E.h_S(d3,new C.ar(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ae(D.e3D,1.6,c8.$1(A.b2))}else{d3.aD(a5,c8.$1(D.va))
p=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
p.F(new C.b5(t,s))
p.F(new C.ap(t+24,s))
p.F(new C.ap(t,s+22))
p.F(new C.bF())
d3.aP(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dA))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.oY[m]
s=$.W()
p=C.a([],t)
s=new C.aO(s.r,A.ap,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bF())
r=c8.$1(A.dA).H()
p=s.gbK().a.snapshot()
d2.drawPath((s.e=new C.cE(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e4Q,A.bO,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,18))
d2.F(new C.ap(8,18))
d2.F(new C.ap(12,25))
d2.F(new C.ap(-12,25))
d2.F(new C.bF())
d3.aP(d2,c8.$1(D.WG))
d6.$5(d3,"Apple TV",D.e4f,A.bv,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bfr))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dq,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e5U,F.ta,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lY.h(0,d2)
b1=b0.b===D.we
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
t.clipRRect(C.er(a5),$.pr(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.KY(d3,new C.ar(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.va))
if(b1){t=a5.b
s=a5.d
d3.bC(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ae(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.ee))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.e60,A.az,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bk).H()
d2.drawRect(C.c_(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ae(A.aGa,1.6,c8.$1(A.az))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eJG,A.cr,A.bk))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b8),$.pr(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.KY(d3,new C.ar(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.va))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-38,16))
d2.F(new C.ap(38,16))
d2.F(new C.ap(34,21))
d2.F(new C.ap(-34,21))
d2.F(new C.bF())
d3.aP(d2,c8.$1(D.WG))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bk))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eJK,A.bK,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b9),$.pr(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.KY(d3,new C.ar(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.va))
d3.ae(D.aG5,2,c8.$1(A.bJ))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,18))
d2.F(new C.ap(6,18))
d2.F(new C.ap(10,26))
d2.F(new C.ap(-10,26))
d2.F(new C.bF())
d3.aP(d2,c8.$1(D.WG))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.ea))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c0),$.pr(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.KY(d3,new C.ar(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.va))
d3.aY(D.eJQ,c8.$1(A.bk))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dA))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(14,4))
d2.F(new C.ap(-32,-42))
d2.F(new C.ap(34,-42))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.dP.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c1),$.pr(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.KY(d3,new C.ar(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eJy,A.iN,A.dA))
d3.ae(D.aGf,7,c8.$1(A.az))
d3.ae(D.aGf,4,c8.$1(c7?A.dP:A.cC))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dq,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.az))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(L.n_))
d3.aD(c2,c9.$2(A.bv,1.2))
if(c7){c3=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
c3.F(new C.b5(-26,4))
c3.F(new C.cU(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new C.ap(22,-16))
d3.aP(c3,c9.$2(A.aR,2.2))
d2=A.k.E(d5*6,48)
d3.ae(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.b2))
d6.$5(d3,""+(88+A.o.E(A.k.bv(d5*2),5)),D.e4b,A.c,10)
d6.$5(d3,"km/h",D.e48,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dA,A.ee))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c5),$.pr(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.KY(d3,new C.ar(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bt.j(0.2))
d2.z=A.lt
d3.ae(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bC(D.e5G,D.e5L,c9.$2(A.bk,4))
d3.bC(D.e3E,D.e3M,c9.$2(A.bk,4))
return!0}return!1},
fFU:function fFU(){},
fFW:function fFW(){},
fFX:function fFX(){},
fFV:function fFV(){},
h2w(d,e,f,g){return new B.aid(d,g,f,e)},
Fn(d,e,f){return new B.ba4(d,e,f)},
aid:function aid(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aie:function aie(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fo$=h
_.kZ$=i
_.fS$=j
_.fp$=k
_.bs$=l
_.a8$=m
_.c=_.a=null},
bGi:function bGi(d,e){this.a=d
this.b=e},
bGj:function bGj(d){this.a=d},
bGh:function bGh(d){this.a=d},
bGk:function bGk(){},
bGl:function bGl(d){this.a=d},
bGm:function bGm(d,e,f){this.a=d
this.b=e
this.c=f},
bGg:function bGg(d,e){this.a=d
this.b=e},
bGe:function bGe(d,e){this.a=d
this.b=e},
bGf:function bGf(d,e,f){this.a=d
this.b=e
this.c=f},
bG8:function bG8(d,e){this.a=d
this.b=e},
bG9:function bG9(){},
bGa:function bGa(d,e){this.a=d
this.b=e},
bGb:function bGb(d,e){this.a=d
this.b=e},
bGc:function bGc(d){this.a=d},
bGd:function bGd(d){this.a=d},
bGB:function bGB(d){this.a=d},
bGC:function bGC(){},
bFM:function bFM(){},
bGD:function bGD(d,e){this.a=d
this.b=e},
bGA:function bGA(d,e,f){this.a=d
this.b=e
this.c=f},
bGv:function bGv(d){this.a=d},
bGs:function bGs(d,e,f){this.a=d
this.b=e
this.c=f},
bGt:function bGt(d,e){this.a=d
this.b=e},
bGw:function bGw(d){this.a=d},
bGq:function bGq(d,e){this.a=d
this.b=e},
bGr:function bGr(d,e){this.a=d
this.b=e},
bGu:function bGu(d){this.a=d},
bGx:function bGx(d){this.a=d},
bGo:function bGo(d,e){this.a=d
this.b=e},
bGp:function bGp(d,e){this.a=d
this.b=e},
bGy:function bGy(d){this.a=d},
bGn:function bGn(d){this.a=d},
bGz:function bGz(d){this.a=d},
bFN:function bFN(d,e){this.a=d
this.b=e},
bG5:function bG5(d,e){this.a=d
this.b=e},
bG7:function bG7(d,e){this.a=d
this.b=e},
bG6:function bG6(d,e){this.a=d
this.b=e},
bFT:function bFT(d,e){this.a=d
this.b=e},
bFU:function bFU(d){this.a=d},
bFS:function bFS(d){this.a=d},
bFV:function bFV(d,e,f){this.a=d
this.b=e
this.c=f},
bFR:function bFR(d,e){this.a=d
this.b=e},
bFY:function bFY(d,e){this.a=d
this.b=e},
bFZ:function bFZ(d,e){this.a=d
this.b=e},
bG_:function bG_(d,e){this.a=d
this.b=e},
bG0:function bG0(d,e,f){this.a=d
this.b=e
this.c=f},
bFQ:function bFQ(d,e){this.a=d
this.b=e},
bG1:function bG1(d,e,f){this.a=d
this.b=e
this.c=f},
bFP:function bFP(d,e){this.a=d
this.b=e},
bG2:function bG2(d,e,f){this.a=d
this.b=e
this.c=f},
bFO:function bFO(d,e){this.a=d
this.b=e},
bG3:function bG3(d){this.a=d},
bG4:function bG4(d){this.a=d},
bFW:function bFW(d){this.a=d},
bFX:function bFX(d){this.a=d},
ba4:function ba4(d,e,f){this.a=d
this.b=e
this.c=f},
ff_:function ff_(){},
ff0:function ff0(){},
ff1:function ff1(){},
feN:function feN(){},
ff2:function ff2(){},
feM:function feM(){},
ff3:function ff3(){},
feR:function feR(){},
feL:function feL(){},
feS:function feS(){},
feK:function feK(){},
feT:function feT(){},
feJ:function feJ(){},
feU:function feU(){},
feH:function feH(){},
feI:function feI(){},
feV:function feV(){},
feF:function feF(){},
feG:function feG(){},
feW:function feW(){},
feE:function feE(){},
UE:function UE(d){this.a=d},
aCA:function aCA(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dRu:function dRu(d,e){this.a=d
this.b=e},
dRD:function dRD(d){this.a=d},
dRE:function dRE(){},
dRF:function dRF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRG:function dRG(){},
dRt:function dRt(d){this.a=d},
dRs:function dRs(d,e,f){this.a=d
this.b=e
this.c=f},
dRr:function dRr(d,e){this.a=d
this.b=e},
dRp:function dRp(d){this.a=d},
dRq:function dRq(){},
dRC:function dRC(d){this.a=d},
dRB:function dRB(d){this.a=d},
dRz:function dRz(d,e){this.a=d
this.b=e},
dRx:function dRx(d){this.a=d},
dRy:function dRy(){},
dRA:function dRA(d,e,f){this.a=d
this.b=e
this.c=f},
dRv:function dRv(d,e){this.a=d
this.b=e},
dRw:function dRw(){},
dRI:function dRI(d){this.a=d},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
dRH:function dRH(){},
dRK:function dRK(d,e){this.a=d
this.b=e},
dRL:function dRL(d){this.a=d},
dRM:function dRM(d){this.a=d},
awH:function awH(d,e){this.c=d
this.a=e},
b8g:function b8g(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
cAW:function cAW(d){this.a=d},
b8f:function b8f(d,e){this.b=d
this.a=e},
cAV:function cAV(d){this.a=d},
ax_:function ax_(){},
ax0:function ax0(){},
aJ_:function aJ_(){},
bwj:function bwj(){},
i6R(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.w7,23)
$.W()
b8=C.N()
b8.r=A.az.gp(0)
b9.ae(A.w7,25,b8)
b8=C.N()
b8.saq(D.ee_.av(0,v))
b9.ae(A.w7,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.bi.gp(0)
o.c=A.o.E(u,5)===0?1.8:1
n=o.H()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.N()
r.r=A.bC.gp(0)
r.c=2
r.d=A.bP
b9.bC(A.w7,new C.u(b8*18,s*18-2),r)
r=C.N()
r.r=A.bi.gp(0)
b9.ae(A.w7,3,r)
c2.$5(b9,w?"V":"A",D.e5O,A.bi,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e5h,A.az,9.5)
return!0
case"fan":b8=C.bx(D.eJ5,A.hC)
$.W()
s=C.N()
s.r=A.bv.gp(0)
b9.aD(b8,s)
s=C.N()
s.r=A.ak.gp(0)
b9.aY(D.eJR,s)
s=C.N()
s.r=A.M.j(0.6).gp(0)
b9.ae(D.w8,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cl(A.aG9,18,10)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.fT.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c_(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bo.gp(0)
b9.ae(D.w8,4,b8)
b8=C.N()
b8.b=A.ae
b8.c=2
b8.r=A.cr.gp(0)
b9.ae(D.w8,22,b8)
b8=C.N()
b8.b=A.ae
b8.c=0.8
b8.r=A.jd.gp(0)
b9.ae(D.w8,14,b8)
return!0
case"speaker":l=C.bx(D.aM1,A.uu)
$.W()
b8=C.N()
b8.saq(D.ao6.av(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.saq(D.eem.av(0,C.bU(A.cB,15)))
b9.ae(A.cB,14+k,b8)
b8=C.N()
b8.r=A.dA.gp(0)
b9.ae(A.cB,5,b8)
b8=C.N()
b8.r=A.bk.gp(0)
b9.ae(D.aGb,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.e3k,6+u*6+A.k.E(b8,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bZ.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c_(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bx(D.eJJ,A.uu)
$.W()
b8=C.N()
b8.saq(D.bVm.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bx(D.aM3,A.im)
s=C.N()
s.r=A.hF.gp(0)
b9.aD(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.BL(i)<500?":":" "
g=A.a.aT(A.o.u(C.dl(i)),2,"0")
f=A.a.aT(A.o.u(C.fZ(i)),2,"0")
b8=C.N()
b8.r=A.b2.j(0.12).gp(0)
b9.aY(D.aM3,b8)
c2.$5(b9,g+h+f,D.e5z,A.b2,21)}b8=C.N()
b8.r=A.cr.gp(0)
b9.ae(D.e5y,2.4,b8)
b8=C.N()
b8.r=A.cr.gp(0)
b9.ae(D.e3o,2.4,b8)
return!0
case"calculator":j=C.bx(D.eJp,A.hd)
$.W()
b8=C.N()
b8.saq(D.bV6.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bx(D.eJj,A.hc)
s=C.N()
s.r=(b7?A.WS:D.bhs).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e5g,A.VL,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bx(new C.a9(q,s,q+6,r),A.Sf)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cg:A.bO).gp(0)
n=p.H()
b8.drawRRect(C.er(q),n)
n.delete()}return!0
case"phone":j=C.bx(D.eJg,A.hd)
$.W()
b8=C.N()
b8.r=L.n_.gp(0)
b9.aD(j,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.9
b8.r=D.afC.gp(0)
b9.aD(j,b8)
a0=C.bx(D.eJ7,A.hC)
if(b7){b8=C.N()
b8.saq(D.bWG.av(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.er(a0),$.pr(),!0)
b8.translate(-12,-25)
E.KY(b9,D.eOV,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=C.bx(D.eJ4,A.hc)
s=C.N()
s.r=A.aX.gp(0)
b9.aD(b8,s)
s=C.N()
s.r=A.b2.gp(0)
b9.aY(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e4y,A.c,6)}else{b8=C.N()
b8.r=D.va.gp(0)
b9.aD(a0,b8)}b8=C.bx(D.eK0,D.eev)
s=C.N()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=C.bx(D.eJI,A.rz)
$.W()
b8=C.N()
b8.saq(D.bVE.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.axe[a2]
s=a3<0?-4:4
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.cC.gp(0)
r.c=4
r.d=A.bP
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.E(A.k.bv(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bl:A.aK).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bU(D.w8,8+u*6+A.k.E(s,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hw.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c_(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bx(D.eJo,A.hC)
s=$.W()
r=C.N()
r.r=A.ee.gp(0)
b9.aD(b8,r)
if(b7){b8=C.N()
b8.r=A.ay.j(0.5*a5).gp(0)
b8.z=A.yX
b9.ae(A.w7,34,b8)}a6=new C.aO(s.r,A.ap,b6,b6,C.a([],x.v))
a6.F(new C.b5(-16,12))
a6.F(new C.ap(-16,-2))
a6.F(new C.cU(0,-30,16,-2))
a6.F(new C.ap(16,12))
a6.F(new C.bF())
b8=C.N()
b8.r=C.aq(A.ep,D.b9R,a5).gp(0)
b9.aP(a6,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.4
b8.r=A.c1.gp(0)
b9.aP(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.j1(0,c1*7)
s=C.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bC(A.J,D.aGb,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.by(b8.save())
b8.translate(0,a7)
s=$.W().r
r=x.v
j=new C.aO(s,A.ap,b6,b6,C.a([],r))
j.F(new C.b5(-28,8))
j.F(new C.ap(-28,-2))
j.F(new C.ap(-16,-4))
j.F(new C.ap(-10,-16))
j.F(new C.ap(10,-16))
j.F(new C.ap(18,-4))
j.F(new C.ap(28,-2))
j.F(new C.ap(28,8))
j.F(new C.bF())
q=C.N()
q.saq(D.bTJ.av(0,D.eJB))
b9.aP(j,q)
q=new C.aO(s,A.ap,b6,b6,C.a([],r))
q.F(new C.b5(-8,-4))
q.F(new C.ap(-4,-13))
q.F(new C.ap(4,-13))
q.F(new C.ap(4,-4))
q.F(new C.bF())
p=C.N()
p.r=A.f6.gp(0)
b9.aP(q,p)
r=new C.aO(s,A.ap,b6,b6,C.a([],r))
r.F(new C.b5(8,-4))
r.F(new C.ap(8,-13))
r.F(new C.ap(11,-13))
r.F(new C.ap(15,-4))
r.F(new C.bF())
s=C.N()
s.r=A.f6.gp(0)
b9.aP(r,s)
for(a2=0;a2<2;++a2){a3=D.d9S[a2]
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.az.gp(0)
n=s.H()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.by(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.bO.gp(0)
q.c=1.6
n=q.H()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.E(s+u*8,14)
q=-4+u*5
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.aA.gp(0)
p.c=1.6
n=p.H()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.W().r
s=x.v
j=new C.aO(b8,A.ap,b6,b6,C.a([],s))
j.F(new C.b5(-18,20))
j.F(new C.ap(-14,-12))
j.F(new C.cU(0,-20,14,-12))
j.F(new C.ap(18,20))
j.F(new C.bF())
r=C.N()
r.saq(D.bUN.av(0,D.eJn))
b9.aP(j,r)
r=new C.aO(b8,A.ap,b6,b6,C.a([],s))
r.F(new C.b5(14,-10))
r.F(new C.ap(30,-22))
r.F(new C.ap(32,-18))
r.F(new C.ap(16,-4))
r.F(new C.bF())
q=C.N()
q.r=A.e1.gp(0)
b9.aP(r,q)
s=new C.aO(b8,A.ap,b6,b6,C.a([],s))
s.F(new C.b5(-14,-8))
s.F(new C.cU(-34,-6,-18,12))
b8=C.N()
b8.b=A.ae
b8.c=5
b8.r=A.az.gp(0)
b9.aP(s,b8)
b8=C.N()
if(b7){s=C.aq(A.cs,A.tk,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ee
b8.r=s.gp(0)
b9.aY(D.eJm,b8)
if(b7){b8=C.N()
b8.r=A.cs.j(0.3).gp(0)
b8.z=A.lt
b9.ae(A.aG7,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.az.gp(0)
b9.ae(D.e2G,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aO($.W().r,A.ap,b6,b6,C.a([],x.v))
b8.F(new C.b5(-10,-14))
b8.F(new C.ap(-30,24))
b8.F(new C.ap(10,24))
b8.F(new C.ap(8,-14))
b8.F(new C.bF())
s=C.N()
s.r=A.dP.j(0.28*u).gp(0)
b9.aP(b8,s)
s=C.N()
s.r=A.dP.j(0.5*u).gp(0)
s.z=Z.Hn
b9.ae(D.e5D,24,s)}b8=C.bx(D.eJX,A.hC)
s=$.W()
r=C.N()
r.r=A.ee.gp(0)
b9.aD(b8,r)
r=C.N()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bP
b9.bC(D.e2U,D.aGh,r)
r=C.N()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bP
b9.bC(D.aGh,D.e5E,r)
a9=new C.aO(s.r,A.ap,b6,b6,C.a([],x.v))
a9.F(new C.b5(-14,-16))
a9.F(new C.ap(6,-26))
a9.F(new C.ap(10,-12))
a9.F(new C.ap(-10,-6))
a9.F(new C.bF())
s=C.N()
s.r=(b7?A.aM:A.jT).gp(0)
b9.aP(a9,s)
b8=C.N()
b8.r=(b7?A.c:A.bk).gp(0)
b9.ae(D.e5F,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aO(b8,A.ap,b6,b6,C.a([],s))
b0.F(new C.b5(-34,-6))
b0.F(new C.cU(0,22,34,-6))
r=C.N()
r.b=A.ae
r.c=2
r.r=A.hk.gp(0)
b9.aP(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.E(q+u*0.7,1.8)<1.1
if(b2){b3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a1T[u].j(0.6).gp(0)
b3.z=A.QX
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aO(b8,A.ap,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cU(p,o+17,p-5,b5))
b3.push(new C.bF())
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a1T[u]
else{o=C.aq(D.a1T[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbK().a.snapshot()
r.drawPath((b4.e=new C.cE(p)).a,n)
n.delete()}return!0}return B.i6Q(b9,c0,c1,c2)},
fK:function fK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYY(d){var w=D.lY.h(0,d)
return(w==null?null:w.b)===D.zm},
i7Z(d,e,f){return C.a5(d,!1).c5(C.uC(null,!1,!0,!0,new B.fKy(e,f),A.eJ,null,A.pK,new B.fKz(),x.H))},
J5:function J5(d,e){this.a=d
this.b=e},
m4:function m4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKy:function fKy(d,e){this.a=d
this.b=e},
fKz:function fKz(){},
Ul:function Ul(d,e,f){this.c=d
this.d=e
this.a=f},
biI:function biI(d,e){var _=this
_.d=$
_.e=null
_.bs$=d
_.a8$=e
_.c=_.a=null},
dNq:function dNq(d){this.a=d},
dNp:function dNp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNn:function dNn(){},
dNo:function dNo(d){this.a=d},
dNm:function dNm(d){this.a=d},
dNl:function dNl(d,e){this.a=d
this.b=e},
dNk:function dNk(d,e){this.a=d
this.b=e},
dNj:function dNj(d){this.a=d},
dNi:function dNi(d){this.a=d},
dNe:function dNe(d){this.a=d},
dNd:function dNd(d){this.a=d},
dNh:function dNh(d,e,f){this.a=d
this.b=e
this.c=f},
dNg:function dNg(d){this.a=d},
dNf:function dNf(d){this.a=d},
buo:function buo(d,e,f){this.b=d
this.c=e
this.a=f},
aec:function aec(d,e,f){this.b=d
this.c=e
this.a=f},
aKM:function aKM(){},
fjr(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zC,A.L,w,w),A.aB,C.bV(A.fQ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.VT,w,u,v,w,w,A.n),w,w,w,A.ex,A.a9,w,w,w),w,w,w)},
fZ3(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eM()
b4.dB(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aC(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.T(u,t)
m=w
l=0
k=N.mF
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aC(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(A.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.hc()?new C.z(f,-g):new C.z(-f,g)
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
a9=C.et([A.d.gal(g)],u)
A.d.fv(g,b4)
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
B:{a7=b4.aC(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.K(0,a7)}}v=b5>=10?1:0
return new B.aVQ(b0,a9,C.T(u,t),q,N.mF,w+v)}return new B.aVQ(C.aX(u),C.et([25],u),C.T(u,t),21,N.mF,1)},
hnq(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.E(n,7),l=A.o.an(n,7),k=d.f
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
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bnE(p,o)},
hiM(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aVQ:function aVQ(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
V9:function V9(d){this.a=d},
bjh:function bjh(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fo$=g
_.kZ$=h
_.fS$=i
_.fp$=j
_.bs$=k
_.a8$=l
_.c=_.a=null},
e8G:function e8G(d){this.a=d},
e8F:function e8F(d,e){this.a=d
this.b=e},
e8H:function e8H(){},
e8w:function e8w(d,e){this.a=d
this.b=e},
e8x:function e8x(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e8A:function e8A(d,e){this.a=d
this.b=e},
e8y:function e8y(d){this.a=d},
e8z:function e8z(d){this.a=d},
e8B:function e8B(d){this.a=d},
e8C:function e8C(d){this.a=d},
e8D:function e8D(d){this.a=d},
e8E:function e8E(d,e){this.a=d
this.b=e},
bgh:function bgh(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dgE:function dgE(d,e,f){this.a=d
this.b=e
this.c=f},
dgH:function dgH(d,e,f){this.a=d
this.b=e
this.c=f},
dgF:function dgF(d){this.a=d},
dgG:function dgG(d){this.a=d},
Vb:function Vb(d){this.a=d},
aDe:function aDe(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fo$=g
_.kZ$=h
_.fS$=i
_.fp$=j
_.bs$=k
_.a8$=l
_.c=_.a=null},
e8Z:function e8Z(d){this.a=d},
e8Y:function e8Y(d,e){this.a=d
this.b=e},
e9_:function e9_(){},
e8K:function e8K(){},
e8T:function e8T(d,e){this.a=d
this.b=e},
e8Q:function e8Q(d){this.a=d},
e8M:function e8M(d){this.a=d},
e8R:function e8R(d){this.a=d},
e8S:function e8S(d){this.a=d},
e8L:function e8L(d){this.a=d},
e8U:function e8U(d){this.a=d},
e8P:function e8P(d,e){this.a=d
this.b=e},
e8V:function e8V(d){this.a=d},
e8O:function e8O(d,e){this.a=d
this.b=e},
e8W:function e8W(d){this.a=d},
e8N:function e8N(d,e){this.a=d
this.b=e},
e8X:function e8X(d){this.a=d},
bgw:function bgw(d,e){this.b=d
this.a=e},
aLd:function aLd(){},
bwo:function bwo(){},
aLe:function aLe(){},
bwp:function bwp(){},
a0p(d,e,f,g,h,i){return new B.btd(d,e,f,g,h,i)},
btd:function btd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ffH:function ffH(){},
ffI:function ffI(){},
ffJ:function ffJ(){},
ffK:function ffK(){},
ffL:function ffL(){},
ffM:function ffM(){},
ffN:function ffN(){},
ffO:function ffO(){},
a7S:function a7S(d){this.a=d},
ceO:function ceO(d){this.a=d},
ceP:function ceP(){},
ceN:function ceN(d,e){this.a=d
this.b=e},
ceM:function ceM(d){this.a=d},
W1:function W1(d){this.a=d},
aE5:function aE5(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fo$=f
_.kZ$=g
_.fS$=h
_.fp$=i
_.bs$=j
_.a8$=k
_.c=_.a=null},
eId:function eId(d){this.a=d},
eI9:function eI9(d){this.a=d},
eI8:function eI8(d,e){this.a=d
this.b=e},
eIb:function eIb(d,e){this.a=d
this.b=e},
eIa:function eIa(d,e){this.a=d
this.b=e},
eIc:function eIc(d){this.a=d},
buA:function buA(d,e,f){this.b=d
this.c=e
this.a=f},
UL:function UL(d){this.a=d},
biR:function biR(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fo$=d
_.kZ$=e
_.fS$=f
_.fp$=g
_.bs$=h
_.a8$=i
_.c=_.a=null},
dTI:function dTI(){},
dTJ:function dTJ(){},
dTD:function dTD(d,e){this.a=d
this.b=e},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTG:function dTG(d){this.a=d},
dTE:function dTE(d){this.a=d},
dTH:function dTH(d){this.a=d},
bpp:function bpp(d,e,f){this.b=d
this.c=e
this.a=f},
TY:function TY(d){this.a=d},
bit:function bit(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fo$=d
_.kZ$=e
_.fS$=f
_.fp$=g
_.bs$=h
_.a8$=i
_.c=_.a=null},
dEA:function dEA(){},
dEB:function dEB(){},
dEv:function dEv(){},
dEy:function dEy(d,e){this.a=d
this.b=e},
dEx:function dEx(d,e){this.a=d
this.b=e},
dEz:function dEz(d){this.a=d},
dEw:function dEw(d){this.a=d},
aHu:function aHu(d,e,f){this.a=d
this.b=e
this.c=f},
UC:function UC(d){this.a=d},
biL:function biL(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dQZ:function dQZ(d,e){this.a=d
this.b=e},
dR_:function dR_(d){this.a=d},
dQY:function dQY(d,e){this.a=d
this.b=e},
dR0:function dR0(d){this.a=d},
dQX:function dQX(d,e){this.a=d
this.b=e},
dR1:function dR1(d){this.a=d},
dQW:function dQW(d,e){this.a=d
this.b=e},
dR2:function dR2(d,e){this.a=d
this.b=e},
dQV:function dQV(d,e){this.a=d
this.b=e},
dR3:function dR3(d){this.a=d},
dQU:function dQU(d,e){this.a=d
this.b=e},
dR4:function dR4(d){this.a=d},
dQT:function dQT(d){this.a=d},
dR5:function dR5(d){this.a=d},
dQS:function dQS(d){this.a=d},
dR6:function dR6(d){this.a=d},
dR7:function dR7(d){this.a=d},
dQR:function dQR(d){this.a=d},
bkN:function bkN(d,e,f){this.b=d
this.c=e
this.a=f},
Vn:function Vn(d){this.a=d},
aDo:function aDo(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eel:function eel(d,e){this.a=d
this.b=e},
eem:function eem(d,e,f){this.a=d
this.b=e
this.c=f},
eek:function eek(d,e,f){this.a=d
this.b=e
this.c=f},
een:function een(d){this.a=d},
eej:function eej(d){this.a=d},
eer:function eer(d){this.a=d},
eeq:function eeq(d,e){this.a=d
this.b=e},
eep:function eep(d,e){this.a=d
this.b=e},
ees:function ees(d,e){this.a=d
this.b=e},
eeo:function eeo(d,e){this.a=d
this.b=e},
eet:function eet(d){this.a=d},
VA:function VA(d){this.a=d},
aDK:function aDK(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
epd:function epd(d){this.a=d},
epe:function epe(d){this.a=d},
epb:function epb(d,e){this.a=d
this.b=e},
epc:function epc(d){this.a=d},
epa:function epa(d){this.a=d},
epf:function epf(d){this.a=d},
epg:function epg(d){this.a=d},
eph:function eph(d){this.a=d},
epi:function epi(d,e){this.a=d
this.b=e},
VV:function VV(d){this.a=d},
bjZ:function bjZ(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eDv:function eDv(){},
eDE:function eDE(){},
eDA:function eDA(d){this.a=d},
eDz:function eDz(){},
eDB:function eDB(d,e){this.a=d
this.b=e},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDC:function eDC(d){this.a=d},
eDx:function eDx(d,e){this.a=d
this.b=e},
eDD:function eDD(d){this.a=d},
eDw:function eDw(d){this.a=d},
Vl:function Vl(d){this.a=d},
bjs:function bjs(d,e,f,g,h,i,j,k){var _=this
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
_.fo$=f
_.kZ$=g
_.fS$=h
_.fp$=i
_.bs$=j
_.a8$=k
_.c=_.a=null},
ed0:function ed0(){},
ed1:function ed1(){},
ecU:function ecU(d){this.a=d},
ecT:function ecT(d){this.a=d},
ecV:function ecV(d){this.a=d},
ecS:function ecS(d){this.a=d},
ecW:function ecW(d){this.a=d},
ecR:function ecR(d){this.a=d},
ecX:function ecX(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d,e){this.a=d
this.b=e},
ecY:function ecY(d){this.a=d},
ecP:function ecP(d,e){this.a=d
this.b=e},
ecZ:function ecZ(d){this.a=d},
ecO:function ecO(d,e){this.a=d
this.b=e},
ed_:function ed_(d){this.a=d},
ecN:function ecN(d,e){this.a=d
this.b=e},
bct:function bct(d,e,f){this.c=d
this.d=e
this.a=f},
aKz:function aKz(){},
bwf:function bwf(){},
aKS:function aKS(){},
bwk:function bwk(){},
aLm:function aLm(){},
bwu:function bwu(){},
aLQ:function aLQ(){},
bwG:function bwG(){},
jK(d,e,f,g,h,i){return new B.b63(h,d,f,g,i,e,null)},
hng(d,e,f,g){var w=null
return C.ca(w,w,!0,w,new B.fOn(g,e,f),d,w,!0,!0,x.H)},
hB(d,e,f,g,h,i,j){return new B.av7(f,j,i,h,g,d,e,null)},
qO(d,e,f){return B.i8O(d,e,f)},
i8O(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qO=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.ak$.x.h(0,e)
n=n==null?null:n.gb8()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lY(2),$async$qO)
case 7:q=h
w=8
return C.b(q.hr(A.fY),$async$qO)
case 8:p=h
if(p==null){w=1
break}o=J.eT(A.dD.gaM(p))
w=9
return C.b(B.cpJ(C.a([B.hcd(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qO)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.T(D.aO4)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qO,v)},
lg(d,e,f,g){var w,v=$.arg
if(v==="music")return E.dF(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dF(261.63*v,w,f,0,g,"sine")}return B.vU(v,e,f,g)},
vU(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dF(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dF(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dF(140+A.o.E(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dF(260+A.o.E(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dF(t,"",160,-0.7,g*0.4,w)
return E.dF(900,"",90,0,g*0.45,u)
case"zap":return E.dF(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dF(2600+A.o.E(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dF(320,"",220,-0.7,g*0.35,v)
return E.dF(1500,"",200,0,g*0.22,u)
case"organic":return E.dF(85+A.o.E(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dF(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dF(t,"",s,0,g*0.5,w)}},
By(d,e,f,g){var w,v,u,t,s,r,q,p=$.arg
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.L)(e),++w)B.lg(d,e[w],f,g)
return}for(p=C.dd(e,0,C.dJ(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bS(p,p.gM(0),v.k("bS<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.lg(d,s,f,g)
else C.bN(new C.b9(1000*q),new B.ceK(d,s,f,g),u)}},
a7R(d,e){var w="sine",v="noise"
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
zm(d){return B.hEe(d)},
hEe(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$zm=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.aA(),$async$zm)
case 7:r=f
q=C.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.T(x.N,x.z)
w=1
break}p=A.R.aH(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.a2(p,o,n):C.T(o,n)
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
return C.i($async$zm,v)},
vR(d,e){return B.hEf(d,e)},
hEf(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vR=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$vR)
case 6:s=g
w=7
return C.b(s.ar("String","ngmy_play_progress_v1_"+d,A.R.ao(e,null)),$async$vR)
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
return C.i($async$vR,v)},
b63:function b63(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
crI:function crI(d){this.a=d},
crJ:function crJ(d,e){this.a=d
this.b=e},
fOn:function fOn(d,e,f){this.a=d
this.b=e
this.c=f},
fOm:function fOm(d){this.a=d},
dA:function dA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
crE:function crE(d){this.a=d},
eQ:function eQ(d,e,f){this.c=d
this.d=e
this.a=f},
av7:function av7(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fi:function fi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
crD:function crD(d){this.a=d},
F2:function F2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
crK:function crK(d){this.a=d},
mB:function mB(){},
crF:function crF(d,e,f){this.a=d
this.b=e
this.c=f},
crH:function crH(d){this.a=d},
crG:function crG(){},
ceK:function ceK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuj(){var w=0,v=C.j(x.cL),u,t
var $async$cuj=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qP().beR("assets/data/world110.json"),$async$cuj)
case 3:u=t.hIO(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cuj,v)},
hIO(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aH(0,a2,null)),a1=C.a([],x.F)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gS(w))
q=C.a([],s)
for(p=J.a6(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gS(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gS(l)
j=J.a6(k)
m.push(C.a([C.dQ(j.h(k,0)),C.dQ(j.h(k,1))],v))}q.push(m)}o=C.cP(p.h(r,"n"))
m=C.cP(p.h(r,"a"))
l=C.cP(p.h(r,"ct"))
j=C.cP(p.h(r,"sr"))
i=C.dQ(p.h(r,"pop"))
h=C.dQ(p.h(r,"gdp"))
g=C.cP(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aPK(g,f,"",0)
f=C.dQ(J.q(p.h(r,"c"),0))
p=C.dQ(J.q(p.h(r,"c"),1))
e=new B.aaE(o,m,l,j,i,h,g,f,p,q)
e.bx7(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aaF(a1)},
fs4(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
GC(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.E(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aaE:function aaE(d,e,f,g,h,i,j,k,l,m){var _=this
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
aaF:function aaF(d){this.a=d},
uY:function uY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
OS:function OS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xV:function xV(d,e,f){this.a=d
this.b=e
this.c=f},
OR:function OR(d){this.a=0
this.b=d
this.c=0},
hKH(d,e,f){return $.hKI.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.dco(d,e,f))},
US:function US(d){this.a=d},
aCL:function aCL(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fo$=j
_.kZ$=k
_.fS$=l
_.fp$=m
_.bs$=n
_.a8$=o
_.c=_.a=null},
dWq:function dWq(d){this.a=d},
dWp:function dWp(d,e){this.a=d
this.b=e},
dVT:function dVT(d){this.a=d},
dVR:function dVR(d){this.a=d},
dVS:function dVS(d,e,f){this.a=d
this.b=e
this.c=f},
dVQ:function dVQ(d){this.a=d},
dVP:function dVP(){},
dVO:function dVO(d){this.a=d},
dWb:function dWb(d,e){this.a=d
this.b=e},
dWc:function dWc(d,e){this.a=d
this.b=e},
dW0:function dW0(d){this.a=d},
dW1:function dW1(d){this.a=d},
dW_:function dW_(d){this.a=d},
dW2:function dW2(d){this.a=d},
dVU:function dVU(d,e){this.a=d
this.b=e},
dVV:function dVV(d){this.a=d},
dWd:function dWd(d,e){this.a=d
this.b=e},
dVZ:function dVZ(d,e){this.a=d
this.b=e},
dWh:function dWh(d){this.a=d},
dWa:function dWa(d){this.a=d},
dWi:function dWi(d,e){this.a=d
this.b=e},
dW9:function dW9(d,e){this.a=d
this.b=e},
dWj:function dWj(d){this.a=d},
dW8:function dW8(d,e){this.a=d
this.b=e},
dWk:function dWk(d){this.a=d},
dW7:function dW7(d,e){this.a=d
this.b=e},
dWl:function dWl(d){this.a=d},
dW6:function dW6(d,e){this.a=d
this.b=e},
dWm:function dWm(d){this.a=d},
dW5:function dW5(d,e){this.a=d
this.b=e},
dWn:function dWn(d){this.a=d},
dW4:function dW4(d){this.a=d},
dWo:function dWo(d){this.a=d},
dW3:function dW3(d){this.a=d},
dWe:function dWe(d){this.a=d},
dVY:function dVY(d){this.a=d},
dWf:function dWf(d){this.a=d},
dVX:function dVX(d){this.a=d},
dWg:function dWg(d){this.a=d},
dVW:function dVW(d){this.a=d},
dVN:function dVN(){},
dVM:function dVM(d){this.a=d},
dVL:function dVL(d){this.a=d},
beI:function beI(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dco:function dco(d,e,f){this.a=d
this.b=e
this.c=f},
dcp:function dcp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKY:function aKY(){},
aKZ:function aKZ(){},
aeK(d,e,f,g,h){return new B.bt8(d,e,f,g,h)},
bt8:function bt8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffA:function ffA(){},
ffB:function ffB(){},
ffC:function ffC(){},
ffD:function ffD(){},
ffE:function ffE(){},
ffF:function ffF(){},
ffG:function ffG(){},
VY:function VY(d){this.a=d},
bk2:function bk2(){this.d=$
this.c=this.a=null},
eEo:function eEo(d){this.a=d},
eEp:function eEp(d){this.a=d},
eEn:function eEn(d){this.a=d},
eEq:function eEq(){},
eEm:function eEm(d,e){this.a=d
this.b=e},
eEl:function eEl(d){this.a=d},
hL8(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eM()
v.dB(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eM()
v.dB(w+900)
u.push(2.2+v.aj())}return new B.bjP(new C.cs(null,x.A),new B.OR(A.cI),A.J,A.au,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hLa(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hL9(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hdp(d,e,f){return $.hLL.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.eYL(d,e,f))},
VJ:function VJ(d){this.a=d},
bjP:function bjP(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fo$=j
_.kZ$=k
_.fS$=l
_.fp$=m
_.bs$=n
_.a8$=o
_.c=_.a=null},
ewr:function ewr(d,e){this.a=d
this.b=e},
ewC:function ewC(d,e){this.a=d
this.b=e},
ewD:function ewD(d,e){this.a=d
this.b=e},
ewz:function ewz(d){this.a=d},
ewA:function ewA(d){this.a=d},
ewB:function ewB(d){this.a=d},
ewE:function ewE(d){this.a=d},
ewy:function ewy(d){this.a=d},
ewF:function ewF(d,e){this.a=d
this.b=e},
ewG:function ewG(d){this.a=d},
ewx:function ewx(d,e){this.a=d
this.b=e},
ewH:function ewH(d){this.a=d},
eww:function eww(d,e){this.a=d
this.b=e},
ewI:function ewI(d){this.a=d},
ewv:function ewv(d){this.a=d},
ewJ:function ewJ(d){this.a=d},
ewu:function ewu(d){this.a=d},
ewK:function ewK(d){this.a=d},
ewt:function ewt(d){this.a=d},
ewL:function ewL(d){this.a=d},
ews:function ews(d){this.a=d},
ewq:function ewq(){},
ewp:function ewp(){},
ewo:function ewo(d){this.a=d},
ewn:function ewn(d){this.a=d},
brb:function brb(d,e){this.b=d
this.a=e},
eYL:function eYL(d,e,f){this.a=d
this.b=e
this.c=f},
eYM:function eYM(){},
eYN:function eYN(){},
UT:function UT(d){this.a=d},
aCM:function aCM(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fo$=k
_.kZ$=l
_.fS$=m
_.fp$=n
_.bs$=o
_.a8$=p
_.c=_.a=null},
dWu:function dWu(){},
dWX:function dWX(){},
dWJ:function dWJ(d,e){this.a=d
this.b=e},
dWA:function dWA(d,e){this.a=d
this.b=e},
dWK:function dWK(d){this.a=d},
dWz:function dWz(d){this.a=d},
dWL:function dWL(d){this.a=d},
dWI:function dWI(d){this.a=d},
dWP:function dWP(d){this.a=d},
dWH:function dWH(d){this.a=d},
dWQ:function dWQ(d){this.a=d},
dWG:function dWG(d,e){this.a=d
this.b=e},
dWR:function dWR(d){this.a=d},
dWS:function dWS(d){this.a=d},
dWF:function dWF(d,e){this.a=d
this.b=e},
dWT:function dWT(d){this.a=d},
dWE:function dWE(d,e){this.a=d
this.b=e},
dWU:function dWU(d){this.a=d},
dWD:function dWD(d,e){this.a=d
this.b=e},
dWV:function dWV(d){this.a=d},
dWC:function dWC(d,e){this.a=d
this.b=e},
dWW:function dWW(d){this.a=d},
dWB:function dWB(d){this.a=d},
dWM:function dWM(d){this.a=d},
dWy:function dWy(d){this.a=d},
dWN:function dWN(d){this.a=d},
dWx:function dWx(d){this.a=d},
dWO:function dWO(d){this.a=d},
dWw:function dWw(d){this.a=d},
dWt:function dWt(d){this.a=d},
dWs:function dWs(){},
dWv:function dWv(d,e){this.a=d
this.b=e},
dWr:function dWr(d){this.a=d},
b9U:function b9U(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VB:function VB(d){this.a=d},
bjM:function bjM(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fo$=e
_.kZ$=f
_.fS$=g
_.fp$=h
_.bs$=i
_.a8$=j
_.c=_.a=null},
epl:function epl(d,e){this.a=d
this.b=e},
epm:function epm(d,e){this.a=d
this.b=e},
epk:function epk(d,e){this.a=d
this.b=e},
epn:function epn(d,e){this.a=d
this.b=e},
epj:function epj(d,e){this.a=d
this.b=e},
bqK:function bqK(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eWV:function eWV(d){this.a=d},
aL_:function aL_(){},
bwm:function bwm(){},
aLy:function aLy(){},
bwA:function bwA(){},
aLB:function aLB(){},
bwC:function bwC(){},
hL6(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eM()
v.dB(w)
v=v.aj()
u=new C.eM()
u.dB(w+500)
s.push(new C.u(v,u.aj()))}return new B.bis(new C.cs(null,x.A),new B.OR(A.cI),t,A.au,s,$,A.bx,0,C.a([],x.X),null,null)},
Pm:function Pm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
TW:function TW(d){this.a=d},
bis:function bis(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fo$=i
_.kZ$=j
_.fS$=k
_.fp$=l
_.bs$=m
_.a8$=n
_.c=_.a=null},
dE1:function dE1(){},
dDQ:function dDQ(){},
dDR:function dDR(d,e){this.a=d
this.b=e},
dDS:function dDS(d,e){this.a=d
this.b=e},
dDP:function dDP(d){this.a=d},
dDO:function dDO(d){this.a=d},
dDU:function dDU(d){this.a=d},
dDN:function dDN(d,e){this.a=d
this.b=e},
dDV:function dDV(d){this.a=d},
dDM:function dDM(d){this.a=d},
dDW:function dDW(d){this.a=d},
dDL:function dDL(d){this.a=d},
dDX:function dDX(d){this.a=d},
dDK:function dDK(d){this.a=d},
dDY:function dDY(d){this.a=d},
dDJ:function dDJ(d){this.a=d},
dDZ:function dDZ(d){this.a=d},
dDI:function dDI(d){this.a=d},
dE_:function dE_(d){this.a=d},
dDH:function dDH(d){this.a=d},
dE0:function dE0(d){this.a=d},
dDG:function dDG(d){this.a=d},
dDT:function dDT(d){this.a=d},
dDF:function dDF(d){this.a=d},
b9i:function b9i(d,e){this.b=d
this.a=e},
aeo:function aeo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UP:function UP(d){this.a=d},
biU:function biU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fo$=p
_.kZ$=q
_.fS$=r
_.fp$=s
_.bs$=t
_.a8$=u
_.c=_.a=null},
dV1:function dV1(d){this.a=d},
dUS:function dUS(d,e){this.a=d
this.b=e},
dUT:function dUT(d,e){this.a=d
this.b=e},
dUR:function dUR(d,e){this.a=d
this.b=e},
dUU:function dUU(d){this.a=d},
dUQ:function dUQ(d){this.a=d},
dUV:function dUV(d){this.a=d},
dUP:function dUP(d,e){this.a=d
this.b=e},
dUW:function dUW(d){this.a=d},
dUO:function dUO(d,e){this.a=d
this.b=e},
dUX:function dUX(d){this.a=d},
dUN:function dUN(d,e){this.a=d
this.b=e},
dUY:function dUY(d){this.a=d},
dUM:function dUM(d,e){this.a=d
this.b=e},
dUZ:function dUZ(d){this.a=d},
dUL:function dUL(d){this.a=d},
dV_:function dV_(d){this.a=d},
dUK:function dUK(d){this.a=d},
dV0:function dV0(d){this.a=d},
dUJ:function dUJ(d){this.a=d},
bey:function bey(d,e){this.b=d
this.a=e},
d9w:function d9w(d){this.a=d},
Vx:function Vx(d){this.a=d},
bjL:function bjL(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fo$=f
_.kZ$=g
_.fS$=h
_.fp$=i
_.bs$=j
_.a8$=k
_.c=_.a=null},
eoA:function eoA(d,e){this.a=d
this.b=e},
eoB:function eoB(d){this.a=d},
eoz:function eoz(d){this.a=d},
eoC:function eoC(d){this.a=d},
eoy:function eoy(d){this.a=d},
eoD:function eoD(d){this.a=d},
eox:function eox(d){this.a=d},
eoE:function eoE(d){this.a=d},
eow:function eow(d){this.a=d},
eoF:function eoF(d){this.a=d},
eov:function eov(d,e){this.a=d
this.b=e},
eoG:function eoG(d){this.a=d},
eou:function eou(d,e){this.a=d
this.b=e},
eoH:function eoH(d){this.a=d},
eot:function eot(d,e){this.a=d
this.b=e},
eoI:function eoI(d){this.a=d},
eos:function eos(d,e){this.a=d
this.b=e},
bq_:function bq_(d,e){this.b=d
this.a=e},
aKw:function aKw(){},
bwe:function bwe(){},
aKV:function aKV(){},
bwl:function bwl(){},
aLx:function aLx(){},
bwz:function bwz(){},
hcd(d,e,f){var w,v
C.fQ(0,0,!1)
w=new C.lj(e,f,$,null)
v=w.bHf(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hYL(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.L)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.nV(A.k.aa(p.c,4)),"y",C.nV(A.k.aa(p.d,4)),"v",p.e,"l",C.nV(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nV(A.k.aa(p.as,3)),"ch",p.at,"vc",C.nV(A.k.aa(p.z,3)),"s",C.nV(A.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.C(f,C.a3(f).k("co.E"))
A.d.fm(l)
return A.R.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i7b(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.R.aH(0,a7,a5)
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
e=C.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.qb().ai(0,s)){J.ch(v,null)
continue}d=s
a0=C.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.to(a2,d,a0,a1)
a3.apm(a2,d,a0,a1)
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
d=C.jL(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.jL(J.q(t,"b"))
r.x=d===!0
d=C.aU(J.q(t,"bw"))
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
if(m!=null&&l!=null)a6.ajX(m,A.k.N(C.dQ(J.q(p,1))),l,A.k.N(C.dQ(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cu:h)
while(h.C()){j=h.gS(h)
J.ch(k,A.k.N(C.dQ(j)))}return new C.bnF(i,k)}catch(a4){return a5}},
ftR(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$ftR=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.aA(),$async$ftR)
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
return C.i($async$ftR,v)},
bD1(d){return B.i8K(d)},
i8K(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bD1=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.aA(),$async$bD1)
case 7:w=6
return C.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bD1)
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
return C.i($async$bD1,v)},
cpJ(d,e){var w=0,v=C.j(x.g7),u
var $async$cpJ=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h0J().x6(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cpJ,v)}},D,S,H,T,A_,A9,Aa,An,X
J=c[1]
C=c[0]
A=c[2]
A0=c[134]
A1=c[144]
Ab=c[143]
A2=c[135]
A3=c[131]
I=c[124]
P=c[118]
A4=c[120]
Ac=c[137]
A5=c[105]
A6=c[112]
G=c[127]
Ad=c[122]
Ae=c[136]
A7=c[140]
Af=c[67]
Y=c[76]
Ag=c[83]
Ah=c[80]
N=c[113]
Q=c[87]
Ai=c[145]
Aj=c[115]
Z=c[123]
O=c[125]
U=c[141]
Ak=c[71]
Al=c[139]
V=c[142]
M=c[138]
A8=c[93]
W=c[114]
K=c[130]
R=c[94]
Am=c[24]
E=c[26]
F=c[91]
L=c[108]
B=a.updateHolder(c[17],B)
D=c[121]
S=c[133]
H=c[41]
T=c[128]
A_=c[99]
A9=c[132]
Aa=c[126]
An=c[129]
X=c[101]
B.ajq.prototype={}
B.V4.prototype={
R(){return new B.bjf(C.T(x.N,x.i),new C.as(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mz(0,null,null))}}
B.bjf.prototype={
gVK(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
this.ch.q()
this.a2()},
N9(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$N9=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jE()
p.bO(0,A.c5)
t.m(new B.e5G(t))
t.a.toString
p=t.gVK()
w=3
return C.b(B.byA(B.hMZ(q,B.hYC(p),o,t.ay)),$async$N9)
case 3:s=e
r=s==null?null:J.iV(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.i_1(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e5H(t,o,r))
$.aW.x1$.push(new B.e5I(t))
case 1:return C.h(u,v)}})
return C.i($async$N9,v)},
XJ(d){return this.bYa(d)},
aUL(){return this.XJ(null)},
bYa(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$XJ=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jE()
t.f.saV(0,o)
t.m(new B.e5T(t))
E.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.byA(B.hTM(o)),$async$XJ)
case 3:r=n.a=m.i6U(f)
p.b=""
if(r!=null&&!B.hYD(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.i_2(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajq(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e5U(p,t))
t.c2v(p.a)
case 1:return C.h(u,v)}})
return C.i($async$XJ,v)},
c2v(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
A.d.a9(w)
w=++m.as
v=m.gVK()
A.d.a9(v.a)
A.d.a9(v.b)
m.e.a9(0)
m.m(new B.e5P(m))
t=d.d
s=C.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e5N(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e5Q(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.L)(r),++u){p.$2(o,new B.e5R(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e5S(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bt.j(0.1),g=C.m(16),f=C.I(A.bt.j(0.35),A.q,1)
if(m.x)j=C.B(C.a([D.eQn,A.bd,C.E(C.d(m.Q,l,l,l,l,l,l,A.Ta,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.feP
else{w=C.E(C.d(k.a,l,l,l,l,l,l,Ad.TB,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f00,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.D(A.vj,C.d(u,l,l,l,l,l,l,D.f2D,l,l,l),l))
w.push(A.cV)
w.push(C.d(k.b,l,l,l,l,l,l,F.Dj,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.f51,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.hZ,A.cp,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.D(A.LP,new C.cm(A.aO,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.m5,l,l,l,l,l,l,l,l,l),A.bp,new C.bD(1,A.bh,new C.x(q,l,new C.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.L)(j),++p){o=j[p]
t=new C.aT(12,12)
s=new C.aT(12,12)
A.d.v(w,C.a([A.N,new C.bI(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a7g,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bt.j(0.3),l,l,new C.bq(t,t,t,t),l,l,A.n),l,l,l,l,A.fI,l,l,l),l),A.at,C.p(l,new C.x(o.b,l,D.fag,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bq(s,s,s,s),l,l,A.n),l,l,l,l,A.bU,l,l,l)],v))}if(m.ax)w.push(D.e6X)
j=C.cd(C.v(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=C.v(C.a([C.ahI(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bqr,A.ej,l,l,1/0),A.bc,A.id),C.E(B.h2w(m.gVK(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dA("Ask about it",i,new B.e5X(m),l,A.bt,l),new B.dA("Invent something new",!i,new B.e5Y(m),l,A.bt,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dcb[p]
i.push(new B.dA(n,!1,new B.e5Z(m,n),l,A.bt,l))}f.push(new B.eQ(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cX3[p]
i.push(new B.dA(r,!1,new B.e6_(m,r),l,A.bt,l))}f.push(new B.eQ(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.T,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.bs(l,new C.b4(4,C.m(16),A.Y),l,A.eQ,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kG,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e60(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dn,!0,A.a4,l,A.an,l,A.aON,l,l),1)
h=m.at
v=h&&j?D.bED:A.dW
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.ab,new B.fi(v,j,new B.e61(m,k),A.bt,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jK(A.bt,A.ha,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.FR.prototype={}
B.uK.prototype={}
B.Vw.prototype={
R(){return new B.aDE(A.J,A.J,A.au,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDE.prototype={
gaVW(){var w,v,u,t=this,s=D.GQ[t.cx],r=D.Qp[t.cy],q=D.C4[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ea(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.avC[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new B.elM())},
ga1X(){return D.GQ[this.cx].d/this.gaVW()},
gaNl(){return 0.1*(D.GQ[this.cx].d/0.9)/D.Qp[this.cy].d},
a_(){this.a1()
this.lc()
B.zm("rocket_lander").bz(new B.em5(this),x.P)},
c2E(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cI.aj()*0.6
w.f=new C.u(0.15+A.cI.aj()*0.7,0.08)
w.r=new C.u((A.cI.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lv(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.em6())
return}w=D.rh[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga1X()
v=v.ad(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaNl())}if(m.dy){t=m.r
v=v.aB(0,t.aG(0,t.gcl()*6*D.axs[m.d]))}t=m.r=m.r.ad(0,v.aG(0,d))
s=m.f=m.f.ad(0,t.aG(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.u(-t.a*0.4,t.b)
t=new C.u(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.u(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.C4[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.vR("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.By("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga1X()/(D.rh[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga1X()/(D.rh[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dF(80,"",500,0,0.6,"noise")
C.fH()}}if(m.Q&&m.x>0&&A.o.E(A.k.bv(m.CW*20),2)===0)E.dF(90,"",70,0,0.12,"noise")
m.m(new B.em7())},
af5(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.f28,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dA(e[w].a,f.$1(w),new B.elO(this,g,w),v,h,v))
return new C.D(A.eK,C.v(C.a([u,A.cV,C.bV(A.bz,s,A.bq,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bCu(d){var w,v,u,t,s=this,r=null,q=s.ga1X()/(D.rh[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaNl()),o=D.axs[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.Tw,r,r,r),A.S,s.af5("ENGINE: "+D.GQ[s.cx].b,D.GQ,new B.elD(s),new B.elE(s),A.cs),s.af5("FUEL TANK: "+D.Qp[s.cy].b,D.Qp,new B.elF(s),new B.elG(s),A.b2),s.af5("LANDING GEAR: "+D.C4[s.db].b,D.C4,new B.elH(s),new B.elI(s),A.aR),s.af5("EXTRAS (tap to add)",D.avC,new B.elJ(s),new B.elK(s),A.bt)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fwN)
o=(q?A.b2:A.cf).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaVW(),2)
u=A.k.aa(s.ga1X()/(D.rh[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.C4[s.db].d*100)+".",r,r,r,r,r,r,D.f2L,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.hZ,A.bU,r,r,r))
m.push(A.S)
m.push(new C.bI(A.A,r,r,new B.fi(A.nj,"Launch",new B.elL(s),A.b2,r),r))
return C.av(C.p(r,C.cd(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.r,r,A.y,r,A.bR,r,r,A.ah),A.f,r,A.lC,new C.o(D.bh2,r,l,n,r,r,A.n),r,r,r,A.bU,r,r,r,r),r,r,r)},
aX3(d,e,f,g){var w=null,v=f?A.cs:A.c.j(0.1),u=C.m(18),t=C.I(A.b3,A.q,1)
return C.oa(A.jB,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.elA(e),new B.elB(e),w,w,w,w,new B.elC(e))},
aX2(d,e,f){return this.aX3(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cp(new B.elZ(s,D.rh[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rh[w].a:"\ud83d\udd12"
o.push(new B.dA(v,s.d===w,new B.em_(s,w),r,D.rh[w].c,r))}v=C.a([s.aX2(F.alp,new B.em0(s),s.y),A.bd,s.aX3(A.vH,new B.em1(s),s.Q,130),A.bd,s.aX2(A.NA,new B.em2(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aR:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bd,C.aE(r,C.p(r,D.bIR,A.f,r,r,new C.o(u,r,C.I(A.b3,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.em3(s),r,r,r,r,r,r,!1,A.a8)],p))}return B.jK(A.cs,A.ha,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eQ(o,"WORLD",r),C.B(v,A.m,r,A.bb,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.bge.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rh[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.N(),a0=j.c,a1=C.aq(D.bjK,a0,0.25)
a1.toString
d.saq(new C.a8(A.b_,A.b5,A.x,C.a([F.ad1,a1],x.O),l,l).av(0,new C.a9(0,0,g,f)))
a2.aY(new C.a9(0,0,g,f),d)
w=new C.eM()
w.dB(5)
for(g=a2.a,v=0;v<70;++v){f=w.aj()
d=w.aj()
a1=w.aj()
u=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
u.r=A.c.j(0.2+w.aj()*0.5).gp(0)
t=u.H()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.aO(e.r,A.ap,l,l,d)
r.F(new C.b5(0,s+14))
q=new C.eM()
q.dB(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bA(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.F(new C.ap(i,h))
r.F(new C.ap(0,h))
r.F(new C.bF())
e=$.W()
d=C.N()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aP(r,d)
o=C.cl(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.bx(o,A.im)
a0=C.N()
a0.r=A.bl.gp(0)
a2.aD(d,a0)
a0=C.bx(o.cB(2),A.rz)
d=C.N()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.j1(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=A.cs.j(0.6).gp(0)
k.z=Z.Hn
a2.ae(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aO(i,A.ap,l,l,C.a([],f))
n.F(new C.b5(-8,18))
n.F(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.F(new C.ap(8,18))
n.F(new C.bF())
k=C.N()
k.r=A.aM.gp(0)
a2.aP(n,k)
i=new C.aO(i,A.ap,l,l,C.a([],f))
i.F(new C.b5(-4,18))
i.F(new C.ap(0,32))
i.F(new C.ap(4,18))
i.F(new C.bF())
k=C.N()
k.r=A.c.gp(0)
a2.aP(i,k)}k=e.r
m=new C.aO(k,A.ap,l,l,C.a([],f))
m.F(new C.b5(0,-26))
m.F(new C.cU(14,-10,11,18))
m.F(new C.ap(-11,18))
m.F(new C.cU(-14,-10,0,-26))
m.F(new C.bF())
i=C.N()
i.saq(D.bVf.av(0,D.eJe))
a2.aP(m,i)
i=C.N()
i.r=A.aR.gp(0)
a2.ae(D.w8,5,i)
i=new C.aO(k,A.ap,l,l,C.a([],f))
i.F(new C.b5(-11,6))
i.F(new C.ap(-20,20))
i.F(new C.ap(-11,18))
i.F(new C.bF())
h=C.N()
h.r=A.ay.gp(0)
a2.aP(i,h)
f=new C.aO(k,A.ap,l,l,C.a([],f))
f.F(new C.b5(11,6))
f.F(new C.ap(20,20))
f.F(new C.ap(11,18))
f.F(new C.bF())
k=C.N()
k.r=A.ay.gp(0)
a2.aP(f,k)
g.restore()},
au(d){return!0}}
B.aLv.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwy.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.buD()}}
B.aRo.prototype={}
B.a2F.prototype={}
B.b9l.prototype={}
B.TX.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.et(["skin"],x.N),o=new Float32Array(0)
return new B.aC3(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.K_,D.K_,A.au,A.cI,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC3.prototype={
a_(){var w=this
w.a1()
w.lc()
w.as=new B.c_R(w.gcaX())
new B.dEt(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.btE()},
caY(d){var w,v=this
if(v.c==null)return
w=J.a6(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eV(0,C.F(["t","init","data",$.hcs],x.N,x.z))
v.at=!0
v.ax=""
v.axS()
break
case"pick":v.m(new B.dE5(v,d))
break
case"shot":v.agY(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
axS(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.atz[q.CW]
v=new B.dE6()
u=q.ay
u=C.C(u,C.a3(u).k("co.E"))
A.d.fm(u)
t=x.N
s=C.F(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.R.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eV(0,u)}},
agY(d){return this.crI(d)},
crI(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$agY=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cG.aJ(A.a.b2(d,A.a.cJ(d,",")+1))
w=6
return C.b(B.cpJ(C.a([B.hcd(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$agY)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.T(D.aO4)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$agY,v)},
axj(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lv(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bv(w)!==A.k.bv(v.ok)){B.a7R("kick",0.4)
v.a4y(170,new B.dEu())}v.ok=w
return},
agN(d){var w,v,u,t,s=this
s.m(new B.dE7(s,d))
if(d==null){s.fx=D.K_
s.dy=1
w=s.as
if(w!=null)w.eV(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a1<1>")
u=C.C(new C.a1(w,new B.dE8(d),v),v.k("J.E"))
t=A.d.gL(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.K(0,t)
if(s.ch===2)s.ch=1}s.axS()
w=s.as
if(w!=null)w.eV(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.cu9(t,d)
return},
cu9(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a7R("kick",0.8)
this.a4y(260,new B.dE9())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4y(w*70,new B.dEa(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dF(110,"",360,0.7,0.3,"saw")
else B.vU("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dF(210+e.length*4,"",80,0.6,0.55,"tri")
E.dF(2400,"",20,0,0.3,v)
break
case"muscle":E.dF(70,"",150,1,0.6,"sine")
break
case"vessel":E.dF(300,"",380,0.4,0.22,v)
B.a7R("kick",0.3)
break
default:B.vU("organic",2+A.o.E(e.length,6),200,0.4)}},
cyC(d){this.m(new B.dEc(this,d))},
aXl(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(p.axj(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=C.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aC(w)]
p.p4=""},
bTM(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dE2(u,w,d))
v=x.t
B.By("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4y(1100,new B.dE3(u))
return}if(d==null){if(u.cx!=null)u.agN(null)
return}u.agN(d)},
bXu(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bZ.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eZA,u,u,u)}else if(d==null||e==null)w=D.fcm
else{w=x.p
w=C.B(C.a([C.E(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.i7,u,u,u),A.cV,C.d(e.b,u,u,u,u,u,u,F.Dj,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aH(u,u,u,u,D.bLf,u,u,u,new B.dE4(v),u,u,u,u,"Back to the whole body",A.cc)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.VR,u,s,t,u,u,A.n),u,u,u,u,I.ah5,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dmH.h(0,g)
i.axS()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d5j
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(i.axj(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mz,h,h,h,new B.dEj(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:C.DG(h,A.qd,q)}else q=A.kC
q=C.v(C.a([C.E(q,1),new C.D(F.Y8,i.bXu(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cYv[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dA(l,n,new B.dEk(i,o),o.c,A.bZ,h))}p=C.a([new B.eQ(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.L)(w),++s){k=w[s]
n.push(new B.dA(k,k===i.cx,new B.dEl(i,k),h,A.aM,h))}p.push(new B.eQ(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hB(A.cf,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dEm(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.F2(D.atz[j],i.CW===j,new B.dEn(i,j),!1,h))
p.push(new B.eQ(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dA("Spin",n,new B.dEo(i),D.ake,A.aR,h),new B.fi(A.k_,"Reset view",new B.dEp(i),A.c,h),new B.dA(l,m,new B.dEq(i),A.G6,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dA("Heartbeat sound",i.k4,new B.dEr(i),A.o2,A.cf,h))
p.push(new B.eQ(v,h,h))
return B.jK(A.bZ,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aKx.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.aKy.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.btD()}}
B.c_R.prototype={
kz(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hiv
$.hiv=v+1
u="ngmy-body-viewer-"+v
$.yu()
$.qa().pT(u,new B.c_S(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fI(v,"message",new B.c_T(t),!1,x.gA)
t.b=u},
eV(d,e){var w,v
try{w=this.c
if(w!=null){w=C.byx(w.contentWindow)
if(w!=null)J.fQ3(w,e,"*")}}catch(v){}}}
B.xX.prototype={}
B.C7.prototype={}
B.nj.prototype={}
B.ba3.prototype={}
B.U1.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new B.aC6(C.T(w,x.a2),C.a([],x.cB),C.T(w,v),C.T(w,v),C.T(w,u),A.au,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC6.prototype={
a_(){var w=this
w.a1()
w.lc()
w.abP()
$.aW.x1$.push(new B.dGE(w))},
abP(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$abP=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$abP)
case 6:q=e.t6("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dGi(s,r))
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
return C.i($async$abP,v)},
ac8(d){return this.c0f(d)},
c0f(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ac8=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return C.b(C.aA(),$async$ac8)
case 6:r=f
q=s.cx
p=C.a3(q).k("jP<co.E,n>")
q=C.C(new C.jP(q,new B.dGl(),p),p.k("J.E"))
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
return C.i($async$ac8,v)},
aw1(d,e,f,g){var w="c"+this.y++,v=new B.C7(w,e,f,g)
this.d.n(0,w,v)
return v},
my(d,e,f){return this.aw1(0,e,f,0)},
aba(d,e){var w
if(D.yV.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.u(-36,w))},
tx(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aRl(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fS$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e4(m,D.cIL[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tx(p,0)&&n.tx(p,1)
break
case"or":p=q.a
o=n.tx(p,0)||n.tx(p,1)
break
case"xor":p=q.a
o=n.tx(p,0)!==n.tx(p,1)
break
case"nand":p=q.a
o=!(n.tx(p,0)&&n.tx(p,1))
break
case"nor":p=q.a
o=!(n.tx(p,0)||n.tx(p,1))
break
case"not":o=!n.tx(q.a,0)
break
default:o=n.tx(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bMv(){return this.aRl(null)},
lv(d){var w,v,u,t,s,r,q,p,o,n=this
n.bMv()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gaf(0),v=new C.f6(w,new B.dGF()),u=n.f,t=n.w,s=0;v.C();){r=w.gS(0).a
if(u.h(0,r)===!0){q=n.fS$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fS$)
o=s+1
E.dF(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
aw2(d){var w=this
w.d.a9(0)
A.d.a9(w.e)
w.f.a9(0)
w.r.a9(0)
w.cy=null},
m0(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
ask(d){var w=this
if(w.x.A(0,A.au)){$.aW.x1$.push(new B.dGg(w,d))
return}w.m(new B.dGh(w,d))},
cur(d){this.m(new B.dGm(this,d,$.bDn()[d]))},
c4Q(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bDn()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a1<J.E>")
s=t.k("J.E")
r=C.C(new C.a1(new C.bc(v,u),new B.dGb(),t),s)
A.d.b0(r,new B.dGc())
q=C.C(new C.a1(new C.bc(v,u),new B.dGd(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dGe(d,w))
return}u=d.r
p=C.dW(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.h0(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aRl(0)
h=m.h(0,A.d.gL(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jJ(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aI(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a9(0)
u.v(0,p)
d.m(new B.dGf(d,o,a0))},
awQ(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dz<1>")
s=new C.dz(s,r)
s=new C.bS(s,s.gM(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cdk(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dz<1>")
r=new C.dz(r,q)
r=new C.bS(r,r.gM(0),q.k("bS<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bXn(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yV.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aba(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bLq(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aba(p,o)
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
c4S(d){var w,v,u,t=this,s=t.awQ(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eU()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dF(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new B.dGn())
return}u=t.bLq(d)
if(u!=null)t.m(new B.dGo(t,u))
else t.m(new B.dGp(t))},
auS(d){return this.c_g(d)},
c_g(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$auS=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.awQ(d)
if(s==null){w=1
break}C.jl()
t.m(new B.dGk(t,s))
case 1:return C.h(u,v)}})
return C.i($async$auS,v)},
byn(d){if(this.x.A(0,A.au))return
this.m(new B.dGa(this,d,A.cI))
C.eU()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bDn()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.o2:O.rd,A.ad,h,h,h,21),h,h,h,new B.dGy(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.co.j(0.14)
r=C.I(A.co.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eYL,h,h,h),C.d(w.b,h,h,h,h,h,h,D.f5W,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.D(A.mn,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b2:A.f4,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.E(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bG(D.fnn,i.gc4P(),C.bm(A.co,h,h,h,h,h,h,h,h,h,h,A.cc))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,Y.LY,D.br3,h,h,1/0))}u.push(C.E(C.cp(new B.dGz(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yV.h(0,r).a+": "+D.yV.h(0,r).e,h,h,h,h,h,h,A.rL,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,Aa.agO,A.bU,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.yV.gdK(D.yV),s=s.gaf(s);s.C();){r=s.gS(s)
q=new C.aT(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ay(o.j(0.5),1,A.q,-1)
t.push(C.aE(h,C.p(h,C.v(C.a([C.X(p.b,o,h,h,h,20),A.bB,new C.x(p.a,h,D.aPV,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bq(q,q,q,q),h,h,A.n),h,h,h,A.fz,A8.LU,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dGA(i,r),h,h,h,h,h,h,!1,A.a8))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d9p[l]
s.push(new B.fi(A.NB,k.b,new B.dGB(i,k),A.co,h))}s.push(new B.fi(D.y3,"Clear",new B.dGC(i),A.cf,h))
r=C.a([],g)
for(j=0;q=$.bDn(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.eg:A.ll
o=i.ay
n=i.cx.t(0,j)?A.b2:A.c7
r.push(new B.dA(q.a,o===j,new B.dGD(i,j),p,n,h))}return B.jK(A.co,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eQ(t,"PARTS",h),new B.eQ(s,"TRY",h),new B.eQ(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.bam.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.abD.gp(0)
a7.aY(new C.a9(0,0,0+a5,0+a6),w)
v=C.N()
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
g=a5.aba(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=C.a([],p)
d=new C.aO(l.r,A.ap,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pz(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.c7.j(0.28).gp(0)
l.z=G.mC
s=l.H()
l=d.gbK().a.snapshot()
w.drawPath((d.e=new C.cE(l)).a,s)
s.delete()}l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bP
l.r=(f?A.dP:A.bv).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cE(d.gbK().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.HU)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aO($.W().r,A.ap,a4,a4,C.a([],p))
w=a3.b
p.F(new C.b5(a6,w))
r=g.b
p.F(new C.pz(a6+a0,w,a5-a0,r,a5,r))
r=C.N()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aP(p,r)}for(a5=new C.dt(o,o.r,o.e);a5.C();)this.c4R(a7,a5.d)},
c4R(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yV.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cl(a0.c,64,64)
s=C.bx(t,A.l5)
r=w.cy===v
q=s.eQ(A.cB)
$.W()
p=C.N()
p.r=A.w.j(0.55).gp(0)
p.z=A.lt
d.aD(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.N()
p.saq(new C.bT(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).av(0,C.bU(a0.c,52)))
d.ae(q,52,p)}q=s.eQ(A.cJ)
p=C.N()
o=e.c
p.r=C.aq(o,A.w,0.65).gp(0)
d.aD(q,p)
n=u?0.35:0
q=C.N()
p=C.aq(o,A.c,0.1+n)
p.toString
m=C.aq(o,A.w,u?0.2:0.45)
m.toString
q.saq(new C.a8(A.b_,A.b5,A.x,C.a([p,m],x.O),g,g).av(0,t))
d.aD(s,q)
q=C.N()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.NH:D.bF8}else l=e.b
k=B.fVs(C.jJ(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aB(0,new C.u(p/2,q.gbc(q)/2)))
j=B.fVs(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.ad(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fVs(f,9,u?A.dP:A.c1,g,g,A.u)
i.a4(d,a0.c.ad(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aXT(d,w.aba(a0,h),o)
this.aXT(d,a0.c.ad(0,D.HU),o)},
aXT(d,e,f){var w
$.W()
w=C.N()
w.r=D.abD.gp(0)
d.ae(e,8.5,w)
w=C.N()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ae(e,8.5,w)
w=C.N()
w.r=A.c.gp(0)
d.ae(e,3.2,w)},
au(d){return!0}}
B.aKD.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwh.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.btJ()}}
B.N4.prototype={
R(){return new B.aCn(C.mz(0,null,null))}}
B.K9.prototype={
a5(){return"_UnfoldStyle."+this.b}}
B.Ao.prototype={}
B.aCn.prototype={
c4W(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dMt(w,e))},
bZ9(){var w=this
w.e.q()
w.e=C.mz(w.f,null,null)
w.m(new B.dMs(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.oi(t,C.c8(v,A.bX,t?new B.bqk(w.e,w.gc4V(w),new B.dMu(d),v):new B.aGD(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dMv(w,u),x.C)}}
B.brT.prototype={}
B.bqk.prototype={
aXU(d,e){var w=null
return new C.D(I.Yz,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eZk,w,w,w),A.bB,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aH(v,v,v,v,R.nk,v,v,v,w.e,v,v,v,v,v,v),A.rG,D.bwU],u),A.m,v,A.e,A.j,0,v,v),s=w.aXU("STUDIOS","Play, make things, and keep what you make")
$.bDo()
return C.bl(!0,C.v(C.a([new C.D(D.bvX,t,v),C.E(C.vs(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,C.a([new C.m6(s,v),new C.nN(A.hL,C.OE(new C.ol(new B.eWs(d),22,!0,!0,!0,0,C.rS(),v),D.aNU),v),new C.m6(w.aXU("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nN(D.bra,C.OE(new C.ol(new B.eWt(w),6,!0,!0,!0,0,C.rS(),v),D.aNU),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.aet.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(F.n3,p,0.3)
m.toString
w=x.O
m=C.a([m,D.aem],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aG(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eE(C.v(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a8(A.ax,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.N,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cV,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.bb,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a8(A.ax,A.aC,A.x,m,r,r),A.n),r,A.Fp,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
B.adl.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.n3,A.d.gL(i),0.24)
f.toString
w=x.O
f=C.a([f,D.aem],w)
v=C.I(A.d.gL(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cB,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aT(6,6)
m=C.a([A.d.gL(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aGA,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bq(n,n,n,n),l,new C.a8(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gL(i),A.d.gal(i),0.4)
u.toString
return C.aG(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eE(C.v(C.a([new C.a7(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.at,C.X(A.BJ,A.d.gL(i),k,k,k,18)],s),A.m,k,A.bb,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a8(A.ax,A.aC,A.x,f,k,k),A.n),k,A.Fp,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag)}}
B.PM.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c0(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.be),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.RJ,26),new C.ac(-6,A.G,A.d.gL(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gL(i),A.c,0.14)
p.toString
o=A.d.gL(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.c0(j,new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,C.a([p,o,n,i],m),D.des,j),A.n),A.be),0,0,0),C.ao(j,C.c0(j,new C.o(j,j,j,j,j,new C.a8(A.b_,A.b5,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.be),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.bri(i,j),A.au),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.f_T,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.at,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a5,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.SW)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.D(A.fJ,C.B(C.a([s,A.er,C.E(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.e1(C.el(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bZ(0,C.e1(C.c0(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.be),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bZ(0,C.c0(C.bw(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.be),0,0,0)],l),j),j)}}
B.bri.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbP().a,v.gbP().b)
d.j1(0,0.35)
t=C.cl(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.N()
s.saq(new C.a8(A.a3,A.a7,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).av(0,t))
d.aY(t,s)
u.restore()},
au(d){return d.b!==this.b}}
B.bqO.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.bfb,D.ady],x.O),t=this.e,s=C.I(A.d.gL(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.k4,24)],x.V),q=C.m(22),p=A.d.gL(t)
return new C.a7(this.c,this.d,C.c0(C.bw(q,C.b3(C.av(C.X(A.jl,A.d.gL(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b92(p,w),A.au),A.aq),new C.o(w,w,s,v,r,new C.a8(A.ax,A.aC,A.x,u,w,w),A.n),A.be),w)}}
B.b92.prototype={
a4(d,e){var w,v,u,t,s,r,q,p
$.W()
w=C.N()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ea(A.J)
$.W()
t=C.N()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ae(u,30,t)},
au(d){return!1}}
B.aGD.prototype={
R(){return new B.aGE(new C.cs(null,x.A),null,null)}}
B.aGE.prototype={
gtU(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.boy,null,1,null,v)
w.cH(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gZ1(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fH,null,1,null,v)
w.fd(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gaw3(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc4T(){var w=this.w
if(w===$){w=C.C(this.a.c.d,x.G)
this.w=w}return w},
gaUu(){var w=this.x
if(w===$){w=C.C(this.a.c.e,x.Z)
this.x=w}return w},
gaV8(){var w=this.y
if(w===$){w=C.C(this.a.c.f,x.N)
this.y=w}return w},
gb5w(){var w=this.z
if(w===$){w=C.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtU()
w.da()
w.dS$.K(0,this.gcua())},
cub(){var w,v,u,t,s,r,q,p=this,o=p.gtU().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaw3().a){case 0:w=D.nn
break
case 1:w=D.u8
break
case 2:w=D.a1X
break
case 3:w=D.nn
break
case 4:w=D.d2m
break
case 5:w=D.u8
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a9m)r=0.09
else r=s===D.a9n?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.bXN[v]
B.lg("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.By("bell",D.c5w,1400,0.35)}}p.ax=o},
q(){this.gtU().q()
this.gZ1().q()
this.bvB()},
afw(){var w=this
w.gtU().cTg(0,C.dC(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eW8(w))},
cfm(){this.gtU().bY(0)
this.m(new B.eW7(this))},
ad6(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ad6=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaV8(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){q=t[r]
l.push(new C.as(new C.bb(q,A.b4,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb5w(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){p=t[r]
m.push(new C.as(new C.bb(p,A.b4,A.aN),$.aw()))}o=C.C(u.gaUu(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bQ(F.n3,null,new B.eW6(u,l,m,o),t,!0,!0,!0,A.lv,!1,!1,x.H),$async$ad6)
case 2:l=C.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$ad6,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaw3(),f=i.a.c,e=f.b,d=i.gc4T(),a0=new B.Ao(g,e,f.c,d,i.gaUu(),i.gaV8(),i.gb5w())
f=C.aq(A.d.gL(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.o2:O.rd,A.ad,h,h,h,21),h,h,h,new B.eWg(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bOG,h,h,h,i.gc4U(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mz,h,h,h,new B.eWh(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gZ1(),new B.eWi(i,a0),h),C.cp(new B.eWj(i,a0))],g)
u=i.as
t=u?i.gcfl():i.gchE()
u=u?D.bEo:A.tW
s=C.aq(A.d.gL(d),A.d.gal(d),0.4)
s.toString
t=C.B(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cc),C.E(C.c6(i.gtU(),new B.eWk(i,a1,a0),h),1),C.aH(h,h,h,h,D.bL5,h,h,h,new B.eWl(i),h,h,h,h,"Replay",A.cc)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gL(d),A.d.gal(d),0.4)
r.toString
s=B.hB(r,u+"x","Speed",2.5,0.4,new B.eWm(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.dbO[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gL(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dA(p.b,o===p.a,new B.eWn(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bY7[q]
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}m=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}l=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}k=A.d.gL(o).A(0,A.d.gL(n))?A.c:A.b3
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}j=new C.ay(k,A.d.gL(o).A(0,A.d.gL(n))?2.5:1,A.q,-1)
d.push(C.aE(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a8(A.ax,A.aC,A.x,n,h,h),A.a6),h,l,h,D.agz,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eWo(i,n),h,h,h,h,h,h,!1,A.a8))}return B.jK(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ev(new C.an(A.W,h,A.b0,A.r,v,h),i.f),e,C.v(C.a([t,s,new B.eQ(u,"STYLE",h),new B.eQ(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bxz(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nn[r]
p=A.k.D((1-A.ew.aw(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nn[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nn[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dp()
l=n.a
l.$flags&2&&C.aj(l)
l[11]=0.0013
n.jZ(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nn[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nn[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nn[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cL(0,r*118,0,f,f,f,new C.kF(q,new C.iG(n,f,A.b_,!0,f,new B.PM(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nn[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gL(w)
v=D.nn[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.mh(new B.bpX(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.au,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bNX(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.u8[r]
p=A.pH.aw(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.u8[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.u8[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dp()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jI(n,n,n,1)
m.fB(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.PM(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dp()
k.fB(3.141592653589793)
k=new C.iG(k,f,A.A,!0,f,new B.bqO(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kF(q,new C.iG(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cz7(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a1X[w]
l.push(A.ct.aw(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.btn(d.d,l,D.avf,m,B.bqj(e,0.4,0.62),f,B.bqj(e,0.45,0.7),n),A.au),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fVY(g,w)
q=D.avf[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kF(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fVY(g,w)
r=D.a1X[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kF(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.TF,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bDI(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.aw(0,B.bqj(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.av(C.dU(C.b3(f,f,f,new B.bpo(A.d.gL(a1),B.bqj(a3,0,0.2),a4,f),new C.ar(a5*0.95,70)),D.e2y),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dC.aw(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dp()
m=l.a
m.$flags&2&&C.aj(m)
m[11]=0.001
l.fB(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jI(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.E(r,1):-1
w.push(new C.z(o,new C.cL(0,0,0,0,f,f,new C.cr(A.A,f,f,new C.kF(k*(0.45+0.55*o),C.dU(new C.iG(l,f,A.A,!0,f,new B.PM(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b0(w,new B.eW_())
A.d.v(a0,new C.K(w,new B.eW0(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bCV(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.u8[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mO.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.u8[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.axb[q]
k=C.dp()
k.mL(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jI(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.u8[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cr(A.A,e,e,new C.kF(m,C.dU(new C.iG(k,e,A.A,!0,e,new B.PM(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.u8[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cr(A.A,e,e,C.dU(new C.mh(new B.b9I(w,f,q,e),e,new C.ar(r,212),e,e),new C.u(0,D.axb[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bAu(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.e2C],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nn[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.ct.aw(0,p)
q=D.axi[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nn[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nn[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dp()
d=f.a
d.$flags&2&&C.aj(d)
d[11]=0.001
f.mL(l*h+D.d6d[r]*o)
f.fB(l*0.9)
h=0.55+0.45*o
f.jI(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,new C.kF(g,C.dU(new C.iG(f,a3,A.A,!0,a3,new B.PM(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nn[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.axi[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,C.dU(new C.mh(new B.bpq(A.d.gL(w),a2,a3),a3,new C.ar(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bpX.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a9(w-v,0,w+v,e.b)
q=C.bx(u,A.hc)
$.W()
t=C.N()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mC
d.aD(q,t)
t=C.bx(u,A.hc)
q=C.N()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
au(d){return d.c!==this.c||d.d!==this.d}}
B.bpo.prototype={
a4(d,e){var w,v,u=this.c,t=C.cl(e.ea(A.J),e.b*u,e.a*u)
$.W()
u=C.N()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Z.Hn
d.hP(t,u)
u=C.N()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hP(t,u)
u=t.cB(-14)
v=C.N()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hP(u,v)},
au(d){return!0}}
B.b9I.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ea(A.J),f=this.c,e=A.ct.aw(0,f)
$.W()
w=C.N()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gL(u).j(0.6*v).gp(0)
d.ae(g,40+e*a0.a*0.42,w)
t=new C.eM()
t.dB(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.aj()*3.141592653589793*2
n=(40+t.aj()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.aj()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gL(u):A.c
j.r=i.j(A.k.D(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
au(d){return!0}}
B.bpq.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ea(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.cl(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c_(p),n)
n.delete()}},
au(d){return d.c!==this.c}}
B.btn.prototype={
a4(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.W()
d0=C.N()
w=c1.b
v=x.O
d0.saq(new C.a8(A.b_,A.b5,A.x,C.a([A.d.gL(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.aY(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bC(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fVY(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lt
a4=a3.H()
t.drawOval(C.c_(new C.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a9(d,a1,a3,a1+a0)
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gL(w),A.c,0.1)
a7.toString
a6.saq(new C.a8(A.b_,A.b5,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).av(0,a5))
a4=a6.H()
t.drawRect(C.c_(a5),a4)
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
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=C.aq(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbK().a.snapshot()
t.drawPath((a8.e=new C.cE(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aO(a2,A.ap,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bF())
a2=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=C.aq(A.d.gL(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbK().a.snapshot()
t.drawPath((b0.e=new C.cE(a2)).a,a4)
a4.delete()
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(C.c_(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cE(a8.gbK().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cE(b0.gbK().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bv(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bx(new C.a9(b7,a7,b7+r,b5),A.hc)
$.W()
b9=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.er(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a9(d,a1,a3,a1+28)
J.by(t.save())
t.clipRect(C.c_(a5),$.oG()[1],!0)
$.W()
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new C.a8(A.b_,A.b5,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).av(0,c0))
a4=a1.H()
t.drawRect(C.c_(c0),a4)
a4.delete()
t.restore()}}},
au(d){return!0}}
B.aMm.prototype={
aR(){this.aZ()
this.aX()
this.dI()},
q(){var w=this,v=w.b1$
if(v!=null)v.a3(0,w.gdC())
w.b1$=null
w.a2()}}
B.a_U.prototype={
a5(){return"_Role."+this.b}}
B.q_.prototype={}
B.qG.prototype={}
B.Cb.prototype={}
B.YS.prototype={}
B.aej.prototype={}
B.a06.prototype={
gZ(d){return this.d}}
B.Cl.prototype={}
B.abc.prototype={}
B.abt.prototype={}
B.adp.prototype={}
B.bgb.prototype={
a25(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dF(d,"",e,g,h,f)},
b6w(d,e,f){return this.a25(d,e,f,0,0.55)},
aAC(d,e,f,g){return this.a25(d,e,f,0,g)},
b6x(d,e,f,g){return this.a25(d,e,f,g,0.55)},
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
w.aW()},
aja(d,e,f,g){var w="n"+this.ay++,v=new B.qG(w,e,f,g)
this.a.n(0,w,v)
this.aW()
return v},
AW(d,e,f){return this.aja(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bo(w.b,new B.dgl(e))
A.d.bo(w.c,new B.dgm(e))
w.aW()},
baj(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mB.h(0,v.b).c===D.wF)return!1
w=this.b
if(A.d.b4(w,new B.dgi(d,e)))return!1
w.push(new B.Cb(d,e))
this.aW()
return!0},
bY7(d){var w
if(d.b==="beat")return D.c5F[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.aC(500)
case 2:return 1400+w.aC(2200)
default:return 450+w.aC(2000)}},
aE3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.axx[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.Cl(u,t,j.ax,90))
w.push(new B.Cl(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a06(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b6w(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a06(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aC(700),j.ax))}j.f.push(new B.Cl(u,t,j.ax,120))
j.aAC(120,200,"noise",0.5)
j.b6w(261.63*Math.pow(2,([7,12,16,19][w.aC(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.Cl(u,t,j.ax,230))
w.push(new B.Cl(u,t,j.ax+160,160))
w.push(new B.Cl(u,t,j.ax+320,100))
j.b6x(180+j.at.aC(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.abc(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b6x(300+w.aC(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.abt(u,u.ad(0,new C.u(Math.cos(q),Math.sin(q)).aG(0,260+w.aj()*200)),t,j.ax))
j.a25(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fH()
j.a25(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.adp(u,D.awZ[v],t,j.ax))
j.aAC(261.63*Math.pow(2,([0,5,9,12][j.at.aC(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aAC(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c1M[A.o.E(w,3)]
for(k=1;k<=3;++k)j.cpk(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new C.f6(w,new B.dgj(d));v.C();)j.az8(w.gS(0),j.ax+D.ce4[A.o.E(g.d,4)])
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
case"chance":s=j.at.aC(100)<D.cuZ[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new C.f6(w,new B.dgk(d));v.C();)j.az8(w.gS(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.z8(w,0,v-700)},
cpk(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.YS(e,"~"+d))},
az8(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.aej(d.a,v,e,w))
u.push(new B.YS(w,v))},
aHp(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a3(w).k("bc<2>")
w=C.C(new C.bc(w,v),v.k("J.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aE3(r)
u.n(0,r,o.ax+o.bY7(s))}}w=o.c
v=C.U(w).k("a1<1>")
q=C.C(new C.a1(w,new B.dgn(o),v),v.k("J.E"))
if(q.length!==0){A.d.bo(w,new B.dgo(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gaf(v),r=new C.f6(u,new B.dgp(p));r.C();)o.az8(u.gS(0),o.ax)}else o.aE3(u)}}A.d.bo(o.d,new B.dgq(o))
A.d.bo(o.e,new B.dgr(o))
A.d.bo(o.f,new B.dgs(o))
A.d.bo(o.w,new B.dgt(o))
A.d.bo(o.x,new B.dgu(o))
A.d.bo(o.r,new B.dgv(o))
o.aW()},
v2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
cKY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aH(0,d,null))
k.a9(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gS(n)
u=C.t(J.q(v,"k"))
if(!D.mB.ai(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.qG(t,u,new C.u(C.dQ(J.q(v,"x"))*k.cy.a,C.dQ(J.q(v,"y"))*k.cy.b),A.k.N(C.dQ(J.q(v,"p")))))
s=C.c7(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gS(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.Cb(q,p))}k.aW()
return!0}catch(l){return!1}},
cO0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a9(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qG(n,r,new C.u(q*p.a,o*p.b),s))
l.aW()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.baj(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
B.FD.prototype={}
B.Vv.prototype={
R(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aDD(new B.bgb(C.T(w,x.f3),v,u,t,s,r,q,p,o,C.T(w,n),C.T(w,n),C.T(w,n),C.T(w,n),A.cI,A.K,A.au,$.aw()),A.bx,A.J,A.J,A.T,null,null)}}
B.aDD.prototype={
abI(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$abI=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.aA(),$async$abI)
case 6:q=n.jL(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.el6(s))
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
return C.i($async$abI,v)},
a8G(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a8G=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.ekW(s))
u=3
w=6
return C.b(C.aA(),$async$a8G)
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
return C.i($async$a8G,v)},
bJG(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cI(0,0,new B.ekY())+"|"+A.d.cI(o,0,new B.ekZ())
if(v===p.ch)return p.CW
u=new B.el1()
t=x.s
s=C.a([],t)
r=new B.el2(p,s,u)
for(n=new C.bc(n,w).gaf(0),w=new C.f6(n,new B.el_());w.C();){q=n.gS(0)
if(!A.d.b4(o,new B.el0(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dd(s,0,C.dJ(5,"count",x.S),x.N).dH(0)},
a_(){var w,v=this
v.a1()
v.abI()
v.d.db=v.ay
w=v.qx(new B.elw(v))
w.iT(0)
v.e!==$&&C.aP()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a7(0)
v=w.e
v===$&&C.c()
v.q()
v=w.d
v.U$=$.aw()
v.P$=0
w.buB()},
abe(d){return this.bXA(d)},
bXA(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abe=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.aA(),$async$abe)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cKY(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aVA(A.d.gL(D.aws))
if(s.c!=null)s.m(new B.el5())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abe,v)},
aVA(d){this.d.cO0(0,d.c,d.d)
this.E_()},
E_(){var w=this.as
if(w!=null)w.a7(0)
this.as=C.cM(A.lM,new B.ekS(this))},
aw4(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dz<1>")
s=new C.dz(s,r)
s=new C.bS(s,s.gM(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cdl(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dz<1>")
r=new C.dz(r,q)
r=new C.bS(r,r.gM(0),q.k("bS<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bXo(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mB.h(0,r.b).c===D.wF)continue
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
c4Z(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hiw(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cwT(d){var w,v,u,t,s,r,q=this,p=q.aw4(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eU()
u=v.b
if(u==="button"){w.aE3(p)
return}if(q.r)return
t=D.mB.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qv)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aW()
q.E_()
return}if(q.r)return
r=q.c4Z(d)
if(r!=null){w=q.d
A.d.cC(w.b,r)
w.aW()
q.E_()}},
ceE(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cdl(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aw4(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aB(0,d)}},
ceF(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aW()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aW()}}},
b_A(){var w,v,u=this
if(u.z!=null){w=u.bXo(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.baj(v,w)}else v=!1
if(v){C.jR()
u.E_()}u.z=null
u.d.aW()}else if(u.x!=null){if(u.at)u.E_()
u.x=null}},
abV(d){return this.c_h(d)},
c_h(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$abV=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aw4(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jl()
p=t.c
p.toString
w=3
return C.b(C.bQ(F.n3,null,new B.el8(q),p,!0,!0,!1,A.lv,!1,!1,x.y),$async$abV)
case 3:if(f===!0){r.W(0,s)
t.E_()}case 1:return C.h(u,v)}})
return C.i($async$abV,v)},
c4X(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.AW(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eU()
this.E_()},
afE(){var w=0,v=C.j(x.H),u=this,t,s
var $async$afE=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bQ(F.n3,null,new B.ela(),s,!0,!0,!0,A.lv,!1,!1,x.es),$async$afE)
case 2:t=e
if(t!=null)u.aVA(t)
return C.h(null,v)}})
return C.i($async$afE,v)},
ad7(d){var w=0,v=C.j(x.H),u=this,t
var $async$ad7=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.ekV(),t,null,!0,!0,x.y),$async$ad7)
case 2:if(f===!0){u.d.a9(0)
u.E_()}return C.h(null,v)}})
return C.i($async$ad7,v)},
B(d){var w=this,v=null,u=C.a([C.ahI(w.r?new C.bI(A.a3,v,v,new C.D(A.Fq,C.hg(D.bJ6,D.fgm,new B.elu(w),v),v),v):w.c5_(),A.bc,A.iy),C.E(C.cp(new B.elv(w)),1)],x.p)
if(!w.r)u.push(w.crL())
return C.c8(v,A.bX,C.bl(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bFo(){var w=null,v=new B.ekX(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bu.j(0.5),A.q,1)
return C.bZ(0,C.el(C.av(C.p(w,C.cd(C.v(C.a([D.frj,A.at,D.fyE,A.aB,v.$4(A.oO,A.bu,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.BH,A.co,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lk,A.bZ,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.akr,A.c7,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fxZ,new C.bI(A.a7,w,w,C.bK(!1,D.fox,w,w,!0,w,w,this.gbFh(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),A.f,w,A.Vc,new C.o(F.n3,w,s,t,w,w,A.n),w,w,w,A.fA,Aa.ahO,w,w,w),w,w,w),u,!0),0,0,0)},
c5_(){var w=this,v=null,u=C.aH(v,v,v,v,R.nk,v,v,v,new B.elg(w),v,v,v,v,v,v),t=w.a88(A.Np,"How it works",new B.elh(w),!0),s=w.ay?A.o2:O.rd
return new C.D(D.bvc,C.B(C.a([u,D.bwH,t,w.a88(s,"Sound",new B.eli(w),!0),w.a88(A.dW,"Ideas",w.gcim(),!0),w.a88(D.y3,"Clear",w.gc4Y(w),!0),w.aME(A.iW,"Show",new B.elj(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aME(d,e,f,g,h){var w=null,v=h?A.bu:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.D(Af.vu,C.aG(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hs(new C.D(new C.Q(8,8,8,8),C.B(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ag),w)},
a88(d,e,f,g){return this.aME(d,e,f,g,!1)},
crL(){var w=null,v=new B.elc(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.B(C.a([v.$2("START",D.wF),v.$2("CHANGE",D.DE),v.$2("REACT",D.qv)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),A.f,w,w,new C.o(F.Ax,w,new C.bO(new C.ay(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bqt,w,w,w)},
crM(d){var w,v,u,t,s=null,r=D.mB.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.D(A.fz,C.aE(s,C.p(s,C.v(C.a([C.X(r.b,v,s,s,s,22),A.cV,C.d(r.a,s,1,A.a2,s,s,s,D.aPV,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a8(A.b_,A.b5,A.x,u,s,s),A.n),s,s,s,s,A.hK,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.elb(this,d),s,s,s,s,s,s,!1,A.a8),s)}}
B.bgc.prototype={
a4(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.by(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.W()
u=C.N()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.H()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.W()
o=C.N()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aY(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){l=w[m]
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
d.push(new C.pz(h+a1,i,f-a1,g,f,g))
a2=D.mB.h(0,k.b).d
a3=D.mB.h(0,j.b).d
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bP
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rs(new C.u(h,i),new C.u(f,g))
e.saq(new C.a8(A.a3,A.a7,A.x,d,b4,b4).av(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbK().a.snapshot()
b7.drawPath((a0.e=new C.cE(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hiw(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mC
q=h.H()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.gp(0)
q=g.H()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.HU)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aO($.W().r,A.ap,b4,b4,C.a([],o))
o=a8.b
a0.F(new C.b5(t,o))
i=a9.b
a0.F(new C.pz(t+a1,o,w-a1,i,w,i))
i=C.N()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aP(a0,i)
i=C.N()
i.r=A.c.gp(0)
b8.ae(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dU.aw(0,v)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
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
h=C.lh(o,i,A.dU.aw(0,v))
h.toString
i=C.lh(o,i,A.dU.aw(0,A.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bP
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rs(i,h)
o.saq(new C.a8(A.a3,A.a7,A.x,f,b4,b4).av(0,new C.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.H()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=A.c.gp(0)
q=i.H()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.jo
q=i.H()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.W()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){j=w[m]
o=j.a
$.W()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.jo
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(new C.bT(P.pk,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).av(0,C.bU(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bgd(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a4(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbc(p)/2)))}for(b5=new C.dt(n,n.r,n.e);b5.C();)b3.cec(b8,b5.d,b6)
b7.restore()},
cec(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mB.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cl(e.c,64,64)
t=C.bx(u,A.jJ)
s=t.eQ(A.cB)
$.W()
r=C.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.lt
d.aD(s,r)
if(v>0){s=t.cB(6)
r=C.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.yX
d.aD(s,r)}s=t.eQ(A.cJ)
r=C.N()
q=h.d
r.r=C.aq(q,A.w,0.65).gp(0)
d.aD(s,r)
r=C.N()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.w,0.35)
p.toString
r.saq(new C.a8(A.b_,A.b5,A.x,C.a([s,p],x.O),j,j).av(0,u))
d.aD(t,r)
r=C.N()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=B.bgd(C.jJ(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aB(0,new C.u(s/2,r.gbc(r)/2)))
n=B.bgd(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.ad(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.awZ[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qv){s=e.c.ad(0,new C.u(0,62))
r=C.N()
r.r=D.axx[A.o.E(e.d,6)].gp(0)
d.ae(s,5,r)}else if(m!=null){l=B.bgd(m,9.5,A.aA,j,j,A.O)
l.a4(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bgd(m,9.5,A.aA,j,j,A.O)
l.a4(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wF)k.b0p(d,e.c.aB(0,D.HU),q)
k.b0p(d,e.c.ad(0,D.HU),q)},
b0p(d,e,f){var w
$.W()
w=C.N()
w.r=A.bX.gp(0)
d.ae(e,9,w)
w=C.N()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ae(e,9,w)
w=C.N()
w.r=A.c.gp(0)
d.ae(e,3.5,w)},
au(d){return!0}}
B.aLt.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bkM.prototype={}
B.PD.prototype={
gZ(d){return this.d}}
B.VK.prototype={
R(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bjQ(new C.cs(null,x.A),w,v,A.cI,A.bx,D.ED,null,null)}}
B.bjQ.prototype={
aZ8(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bv((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.avU[A.o.E(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.lg("synth",u,420,0.3)
break
case"rainbow":B.lg("bell",u,700,0.35)
break
case"stars":B.lg("pluck",u+12,400,0.4)
break
case"sparks":E.dF(2400+t.r.aC(2000),"",60,0,0.18,"noise")
break
default:E.dF(110+t.r.aC(60),"",140,0,0.22,"noise")}},
c7Z(d){return this.aZ8(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qx(new B.exb(v))
w.iT(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.buK()},
gb_U(){var w=this.Q
return w<0?new H.mO(1,A.k.E(this.y*0.18,360),0.85,1).iB():D.Qr[w]},
aR0(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb_U(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.c7,A.ay,v.aj())
m.toString
j.push(new B.PD(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aC(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.PD(d,new C.u(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aC(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.PD(d,new C.u(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aXW(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb_U()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bkM(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aR0(e)
r.aZ8(e,!0)
r.m(new B.ewN())},
aXV(){this.ax=null
this.m(new B.ewM())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mz,n,n,n,new B.ewW(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.brd(k,o.f,o.y,o.at,n),A.au)],m)
if(!o.ay&&k.length===0)j.push(D.b4q)
k=C.aE(A.c4,new C.an(A.W,n,A.b0,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ewX(o),new B.ewY(o),new B.ex1(o),n,n,n,n,n,n,n,n,n,new B.ex2(o),new B.ex3(o),n,n,n,!1,A.a8)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cSY[w]
j.push(new B.dA(v.b,o.z===v.a,new B.ex4(o,v),v.c,A.bZ,n))}u=C.a([new B.F2(A.c,o.Q<0,new B.ex5(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.F2(D.Qr[t],o.Q===t,new B.ex6(o,t),!1,n))
s=o.as
s=B.hB(A.bZ,A.o.u(A.k.V(s)),"Size",36,4,new B.ex7(o),s)
r=o.ch
q=r?A.o2:O.rd
q=C.a([new B.dA("Sound",r,new B.ex8(o),q,A.bZ,n),new B.fi(A.rc,"Undo",new B.ewZ(o),A.c,n),new B.fi(D.y3,"Clear",new B.ex_(o),A.cf,n)],m)
for(w=0;w<4;++w){p=D.d7L[w]
q.push(new B.F2(p,o.at.A(0,p),new B.ex0(o,p),!1,n))}return B.jK(A.bZ,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ev(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eQ(j,"BRUSH",n),new B.eQ(u,"COLOUR",n),s,new B.eQ(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.brd.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.N()
v=a4.e
w.r=v.gp(v)
a6.aY(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aO(p.r,A.ap,a5,a5,o)
o.push(new C.b5(A.d.gL(q).a,A.d.gL(q).b))
for(p=C.U(q),m=p.k("om<1>"),l=new C.om(q,1,a5,m),l.CP(q,1,a5,p.c),l=new C.bS(l,l.gM(0),m.k("bS<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bA(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gL(q)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bP
q.e=A.fB
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hw(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bP
q.e=A.fB
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bP
q.e=A.fB
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbK().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mO(1,A.o.E(i*5,360),0.85,1).iB()
o=q[i-1]
m=q[i]
$.W()
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bP
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.L)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gL(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mO(1,A.o.E(a3*23,360),0.7,1).iB():l
a4.c50(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=R.QV
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c50(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ap,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bA(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bA(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.F(new C.bF())
$.W()
p=C.N()
p.r=h.j(0.4).gp(0)
p.z=A.jo
d.aP(n,p)
p=C.N()
p.r=h.gp(0)
d.aP(n,p)},
au(d){return!0}}
B.VW.prototype={
R(){return new B.aDT(new C.cs(null,x.A),new C.as(new C.bb("NGMY",A.b4,A.aN),$.aw()),null,null)}}
B.aDT.prototype={
gIB(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.ty,null,1,null,v)
w.cH(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIB()
w.da()
w.dS$.K(0,this.gbWv())},
bWw(){var w,v,u,t,s,r,q,p=this,o=p.gIB().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m1:new C.m7(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dF(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dF(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.lg(s,D.auR[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIB().q()
var w=this.f
w.U$=$.aw()
w.P$=0
this.buQ()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m7(h)
w=C.C(h,C.a3(h).k("J.E"))}v=D.Qr[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mz,j,j,j,new B.eDL(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.ax_[k.y]
s=C.bw(t,C.c0(C.av(C.c6(k.gIB(),new B.eDM(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,s,j,j),A.n),A.be),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.T,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.bs(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.Di,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eDN(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hs,!0,A.a4,j,A.an,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cuL[r]
i.push(new B.dA(q.b,k.r===q.a,new B.eDO(k,q),j,A.c7,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.F2(D.Qr[o],k.w===o,new B.eDP(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.o2:O.rd
l=C.a([new B.dA(m,n,new B.eDQ(k),l,A.c7,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.F2(D.ax_[o][0],k.y===o,new B.eDR(k,o),!1,j))
n.push(A.bp)
n.push(new B.fi(A.mv,"Replay",new B.eDS(k),A.c,j))
m=k.x
return B.jK(A.c7,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.D(A.bD,new C.ev(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.N,new B.eQ(i,"MOVE",j),new B.eQ(p,"COLOUR",j),new B.eQ(l,"SOUND",j),new B.eQ(n,"BACK",j),B.hB(A.c7,A.o.u(A.k.V(m)),"Size",96,28,new B.eDT(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bZk(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cR(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bv(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.E(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
A.d.a9(p)
p.push(new C.cR(h,A.J,30*v))
p.push(new C.cR(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.E(A.k.bv(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b8
else w=u?A.bZ:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mO.aw(0,t)
w=h
m=t
break
case"rainbow":w=new H.mO(1,A.k.E(g*360+e*40,360),0.75,1).iB()
A.d.a9(p)
p.push(new C.cR(w.j(0.7),A.J,18))
break
default:w=h}return C.dc(C.dU(C.ed(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aLC.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.aLI.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.a_o.prototype={}
B.Vs.prototype={
R(){var w=C.a([],x.aS)
return new B.aDv(new C.cs(null,x.A),w,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDv.prototype={
gad8(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b19(){return new H.mO(1,this.f.aj()*360,0.6,1).iB()},
aqD(d,e,f,g){var w=this,v=w.gad8().ad(0,new C.u(Math.cos(e),Math.sin(e)).aG(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_o(v,new C.u(-t,s).aG(0,r).aG(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b19(),C.a([],x.g)))},
bEJ(d,e,f){return this.aqD(d,e,f,!1)},
bEI(d,e){return this.aqD(d,e,1,!1)},
cu5(){var w,v,u,t=this
A.d.a9(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bEI(40+w*u/5,v.aj()*3.141592653589793*2)},
bFD(){var w=this.r
this.bEJ(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.lc()},
lv(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.au))return
w=a2.e
v=w.length
if(v===0&&a2.fS$<300)return
u=a2.gad8()
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
if(o.length>260)A.d.cC(o,0)}else A.d.a9(n.e)}for(p=0;p<w.length;w.length===o||(0,C.L)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lT(v.a-s)!==J.lT(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fS$-n.r>250){n.r=a2.fS$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.lg("bell",D.auR[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a1(w,new B.ehD(u),C.U(w).k("a1<1>")).gM(0)>0&&a2.ax)E.dF(70,"",300,0.6,0.8,"sine")
A.d.bo(w,new B.ehE(a2,u))},
cif(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gad8()
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
if(A.o.E(s,3)===0)k.push(t)
if(m<16)break}return k},
gaVd(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aB(0,w).aG(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mz,r,r,r,new B.ehr(s,d),r,r,r,r,"Share",r)],q),o=C.cp(new B.ehs(s)),n=s.w
n=B.hB(A.cs,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.eht(s),n)
w=s.x
w=B.hB(A.cs,A.k.aa(w,1)+"x","Time",3,0.2,new B.ehv(s),w)
v=s.Q
v=B.hB(A.cs,A.o.u(A.k.V(v)),"Planet size",16,3,new B.ehw(s),v)
u=s.ax
t=u?A.o2:O.rd
return B.jK(A.cs,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eQ(C.a([new B.dA("Sound",u,new B.ehx(s),t,A.cs,r),new B.dA("Trails",s.z,new B.ehy(s),A.NG,A.cs,r),new B.dA("Planets pull each other",s.y,new B.ehz(s),A.yr,A.cs,r)],q),r,r),new B.eQ(C.a([new B.fi(A.mu,"Solar system",new B.ehA(s),A.cs,r),new B.fi(A.nj,"Comet",new B.ehB(s),A.c,r),new B.fi(A.mr,"Cluster",new B.ehC(s),A.c,r),new B.fi(D.y3,"Clear",new B.ehu(s),A.cf,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bkz.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.N()
w.r=D.Wv.gp(0)
d.aY(new C.a9(0,0,0+g,0+f),w)
v=new C.eM()
v.dB(5)
for(w=d.a,u=0;u<70;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.25+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.N()
s=x.O
t.saq(new C.bT(A.A,0.5,A.x,h,0,C.a([A.cs.j(0.45),A.K],s),h,h).av(0,C.bU(g,f)))
d.ae(g,f,t)
t=C.N()
t.saq(D.eej.av(0,C.bU(g,o)))
d.ae(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.c=2.2*l+0.4
j.d=A.bP
j.r=r.j(l*0.8).gp(0)
p=j.H()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k=m.d
q.r=k.j(0.3).gp(0)
q.z=G.mC
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.saq(new C.bT(P.pk,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).av(0,C.bU(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.N()
t.c=2
t.r=A.jd.gp(0)
d.bC(g,f,t)
t=C.N()
t.r=A.c.gp(0)
d.ae(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
au(d){return!0}}
B.abj.prototype={}
B.VR.prototype={
R(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bjV(new C.cs(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjV.prototype={
a_(){this.a1()
this.lc()},
c51(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.abj(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.E(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lv(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.c51()
w=a2.f
A.d.bo(w,new B.eDc(a2))
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
A.d.bo(w,new B.eDd(a2))
if(w.length<a1&&a2.ch)B.lg("bell",12+a2.r.aC(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fS$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fS$
B.lg("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mz,l,l,l,new B.eD1(m,d),l,l,l,l,"Share",l)],k),i=C.cp(new B.eD2(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cUA[w]
h.push(new B.dA(v.b,m.at===v.a,new B.eD3(m,v),v.c,A.b2,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cEG[w]
u.push(new B.dA(t.b,m.ax===t.a,new B.eD4(m,t),l,A.b2,l))}s=m.ch
r=s?A.o2:O.rd
r=C.a([new B.dA("Sound",s,new B.eD5(m),r,A.b2,l)],k)
s=m.x
s=B.hB(A.b2,A.o.u(A.k.V(s)),"How many",150,15,new B.eD6(m),s)
q=B.hB(A.b2,l,"Together",2.5,0,new B.eD7(m),m.y)
p=B.hB(A.b2,l,"Apart",2.5,0,new B.eD8(m),m.z)
o=B.hB(A.b2,l,"Same way",2.5,0,new B.eD9(m),m.Q)
n=m.as
return B.jK(A.b2,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eQ(h,"TOUCH",l),new B.eQ(u,"LOOK",l),new B.eQ(r,l,l),s,q,p,o,B.hB(A.b2,A.o.u(A.k.V(n)),"Speed",280,50,new B.eDa(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.bs4.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.adn,D.bk9],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.d9,T.Lf],v):C.a([D.bh6,D.b8n],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.N()
s.saq(new C.a8(A.b_,A.b5,A.x,w,a3,a3).av(0,new C.a9(0,0,v,u)))
a5.aY(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){q=v[r].a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c7.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.c7.j(0.25).gp(0)
n.z=G.mC
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mO(1,j,0.7,1).iB()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jo
o=f.H()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
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
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=h.gp(0)
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cE(j)).a,o)
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
j.push(new C.cU(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cU(0,6,9,0))
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cy,0.6)
f.toString
j.saq(new C.a8(A.a3,A.a7,A.x,C.a([h,f],q),a3,a3).av(0,D.eJa))
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cE(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cf
else a1=v==="scare"?A.c7:A.b2
v=u?12:22
u=C.N()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.ae(a4,v,u)}},
au(d){return!0}}
B.abM.prototype={}
B.U_.prototype={
R(){var w=C.a([],x.bi)
return new B.aC5(w,A.cI,A.au,C.T(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aC5.prototype={
gHY(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gacb(){return 54-8*(this.r/100)},
a_(){this.a1()
this.lc()
B.zm("chain_burst").bz(new B.dFN(this),x.P)},
aXY(){return B.vR("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
azc(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.abM(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.mO(1,u.aj()*360,0.6,1).iB()))}},
Z2(d){var w,v=this
if(d==null)return 0
w=(v.fS$-d)/1000
if(w<0.4)return v.gacb()*A.dU.aw(0,w/0.4)
if(w<1.1)return v.gacb()
if(w<1.5)return v.gacb()*(1-(w-1.1)/0.4)
return 0},
lv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.au)||!j.Q)return
w=j.d
if(w.length===0)j.azc()
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
if(v!=null)n.push(new C.z(v,j.Z2(j.ax)))
for(v=A.d.gaf(w),s=new C.f6(v,new B.dFO());s.C();){r=v.gS(0)
n.push(new C.z(r.a,j.Z2(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.L)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fS$
E.dF(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eU()
break}}}if(!(j.at!=null&&j.Z2(j.ax)>0||A.d.b4(w,new B.dFP(j)))&&j.fS$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gHY()){if(j.as>=j.gHY()*1.5)k=3
else k=j.as>=j.gHY()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.By("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aXY()}else E.dF(120,"",300,0,0.3,"saw")}}},
aXX(d){this.m(new B.dFD(this,d))
this.aXY()},
ad9(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ad9=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dFG(u),s,null,!0,!0,x.S),$async$ad9)
case 2:t=e
if(t!=null)u.aXX(t)
return C.h(null,v)}})
return C.i($async$ad9,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gHY(),t=w.x.h(0,""+w.r)
return B.jK(A.bZ,A.ha,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cp(new B.dFK(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fi(A.r8,"Levels",w.gc52(),A.bZ,v),new B.fi(A.k_,"New board",new B.dFL(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
au7(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aPf,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bX0(d,e){return this.au7(d,e,A.c)}}
B.ba2.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.N()
w.r=D.ED.gp(0)
d.aY(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cKR(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.L)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.j(0.25).gp(0)
p.z=G.mC
m=p.H()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.gp(0)
m=p.H()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
au(d){return!0}}
B.aKB.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwg.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.btH()}}
B.aLq.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwx.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.buy()}}
B.aLF.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwF.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.buN()}}
B.Fz.prototype={
gcNf(){return this.a.aB(0,this.b).gcl()>4}}
B.acB.prototype={}
B.Vm.prototype={
R(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bju(new C.cs(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bju.prototype={
aOE(d){return new H.mO(1,A.o.E(d*29,360),0.6,1).iB()},
ZN(d){var w,v=D.Cg.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bv(d.a/s*t),0,t-1)
return v[A.o.E(w,u)]+12*A.o.e4(w,u)},
aRg(d){A.d.bo(this.e,new B.ed6(this,d))},
cqc(d,e,f){var w=f.aB(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aB(0,e).gcl()
return d.aB(0,e.ad(0,w.aG(0,A.k.D((d.aB(0,e).a*v+d.aB(0,e).b*u)/t,0,1)))).gcl()},
axI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.ZN(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.Fz(p,r,k,new H.mO(1,A.o.E(k*29,360),0.6,1).iB()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.ZN(h)
f.push(new B.Fz(h,h,k,new H.mO(1,A.o.E(k*29,360),0.6,1).iB()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.ZN(h)
f.push(new B.Fz(h,h,k,new H.mO(1,A.o.E(k*29,360),0.6,1).iB()))}}},
a_(){this.a1()
this.lc()},
c54(d,e){var w,v=this.fS$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.lg(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lv(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.acB(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.mO(1,v.aj()*360,0.5,1).iB()))}if(u>3)a2.as=0
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
if(a1<0){a2.c54(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bo(w,new B.edv(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.o2:O.rd,A.ad,p,p,p,21),p,p,p,new B.edk(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mz,p,p,p,new B.edl(q,d),p,p,p,p,"Share",p)],o),m=C.cp(new B.edm(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cXX[w]
l.push(new B.dA(v.b,q.x===v.a,new B.edn(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.Cg.gec(D.Cg));t.C();){s=t.gS(t)
u.push(new B.dA(s,q.y===s,new B.edo(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.axU[w]
t.push(new B.dA(r.b,q.z===r.a,new B.edp(q,r),p,A.b8,p))}s=q.Q
return B.jK(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eQ(l,"TOOL",p),new B.eQ(u,"SCALE",p),new B.eQ(t,"SOUND",p),B.hB(A.b8,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.edq(q),s),new B.eQ(C.a([new B.fi(D.bEY,"Stairs",new B.edr(q),A.b8,p),new B.fi(An.No,"Pinball",new B.eds(q),A.c,p),new B.fi(A.mr,"Random",new B.edt(q),A.c,p),new B.fi(D.y3,"Clear",new B.edu(q),A.cf,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bh6.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.N()
w.saq(D.bVR.av(0,new C.a9(0,0,a0,a1)))
a2.aY(new C.a9(0,0,a0,a1),w)
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
if(Math.sqrt(m*m+k*k)>4){q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bP
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.jo
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bP
q.c=6
q.r=C.aq(i,A.c,r*0.7).gp(0)
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=i.j(0.25+h).gp(0)
p.z=A.jo
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.saq(new C.bT(P.pk,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).av(0,C.bU(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.N()
u.c=5
u.d=A.bP
u.r=A.aA.gp(0)
a2.bC(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.L)(a0),++t){f=a0[t]
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.rn
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new C.bT(P.pk,0.5,A.x,d,0,C.a([A.c,p],v),d,d).av(0,C.bU(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
au(d){return!0}}
B.ad6.prototype={}
B.Vr.prototype={
R(){var w=C.a([],x.gB)
return new B.aDu(new C.cs(null,x.A),w,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDu.prototype={
gaXZ(){var w=this.w
return new C.u(w.a/2,w.b/2)},
axV(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
az7(d){var w=D.Cg.h(0,this.y),v=5-d,u=w.length
return w[A.o.E(v,u)]+12*A.o.e4(v,u)},
a_(){this.a1()
this.lc()},
aQ0(){var w,v,u,t,s=this.e
A.d.a9(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.ad6(w,A.k.E(t/v+u,1)))}},
lv(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.au))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fS$
if(p.Q){r=p.z
s=p.az7(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.lg(r,s+12,q,0.55)}}}},
c55(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aB(0,h.gaXZ()),e=f.gcl()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.axV(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.E((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
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
m=h.axV(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.eh0(h,n).$0()
h.c.e9()
return}}h.m(new B.eh1(g,h,t))
if(h.Q)B.lg(h.z,h.az7(g.a)+12,700,0.5)
C.eU()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.o2:O.rd,A.ad,q,q,q,21),q,q,q,new B.eh8(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mz,q,q,q,new B.eh9(r,d),q,q,q,q,"Share",q)],p),n=C.cp(new B.eha(r)),m=r.x
m=B.hB(A.bt,""+A.k.V(m),"Tempo",180,40,new B.ehb(r),m)
w=C.a([],p)
for(v=J.aV(D.Cg.gec(D.Cg));v.C();){u=v.gS(v)
w.push(new B.dA(u,r.y===u,new B.ehc(r,u),q,A.bt,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.axU[t]
v.push(new B.dA(s.b,r.z===s.a,new B.ehd(r,s),q,A.bt,q))}return B.jK(A.bt,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eQ(w,"SCALE",q),new B.eQ(v,"SOUND",q),new B.eQ(C.a([new B.fi(A.dW,"Demo",new B.ehe(r),A.bt,q),new B.fi(A.mr,"Random",new B.ehf(r),A.c,q),new B.fi(D.y3,"Clear",new B.ehg(r),A.cf,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.bkA.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.N()
w.r=D.Wv.gp(0)
a5.aY(new C.a9(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aB(0,new C.u(0,u))
r=C.N()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.saq(new C.a8(A.b5,A.b_,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).av(0,new C.a9(o,m,o+2,m+u)))
a5.bC(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mO(1,A.k.E(s.$1(l)*23,360),0.55,1).iB()
o=v.$1(l)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.dem[A.o.E(A.o.E(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kh(new C.eq(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.G(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.ca,new C.ju(1),a4,a4,a4,a4,A.c8,a4)
i.ey()
o=i.b.c
m=J.fPL(v.$1(l))
h=i.b.a.c
i.a4(a5,new C.u(p+-o/2,n+(m-h.gbc(h)-2)))}w=C.N()
w.saq(D.edW.av(0,C.bU(t,16)))
a5.ae(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.L)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mO(1,A.k.E(s.$1(a0)*23,360),0.55,1).iB()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fPL(v.$1(a0))
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jo
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.saq(new C.bT(P.pk,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).av(0,C.bU(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
au(d){return!0}}
B.aLo.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwv.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.buw()}}
B.aLp.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bww.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.bux()}}
B.tb.prototype={}
B.b8W.prototype={}
B.Vp.prototype={
R(){var w=x.S
return new B.aDs(C.a([],x.aq),C.T(w,w),C.aX(w),D.eP_)}}
B.aDs.prototype={
a_(){this.a1()
B.zm("molecule_maker").bz(new B.egv(this),x.P)},
aiJ(d){var w={}
w.a=0
this.f.bI(0,new B.egh(w,d))
return w.a},
gaY4(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)t.push(w[u].a)
return B.i_r(t,this.f,D.a2s[this.d])},
c5m(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eM()
w.dB(t*7+3)
t=v.y
v.m(new B.egb(v,e,t.a,w,t.b))
B.vU("pop",u.length,90,0.35)},
aw8(d){return this.m(new B.egc(this))},
aY5(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c5s(d){this.m(new B.egg(this,this.aY5(d)))},
cmH(){var w=this.r
if(w==null)return
this.m(new B.egf(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a2s[k.d],h=k.gaY4()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.w1.h(0,w[u].a).a-k.aiJ(u)
w=i.c
w=w.gdK(w)
t=w.dt(w,new B.egp(),x.N).aI(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b2:A.hw
r=x.p
s=C.v(C.a([new C.D(A.fI,B.fb3(w,s,h&&k.d<12?new B.fi(A.iV,"Next",new B.egq(k),A.b2,j):j),j),C.E(C.cp(new B.egr(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dA(p+D.a2s[u].b,k.d===u,new B.egs(k,u),j,A.hw,j))}q=C.a([],r)
for(p=D.w1.gdK(D.w1),p=p.gaf(p);p.C();){o=p.gS(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dA:m.b
q.push(new B.dA(n+" \xb7 "+m.a,!1,new B.egt(k,o),j,l,j))}return B.jK(A.hw,A.ha,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eQ(w,"GOAL",j),new B.eQ(q,"ADD",j),new B.eQ(C.a([new B.dA("Remove selected atom",!1,k.gcmG(),A.e6,A.cf,j),new B.dA("Clear all",!1,k.gc5n(k),A.k_,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bhO.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.E(t*37,10)
r=A.o.E(t*53,10)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hw.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bI(0,new B.dor(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.w1.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bU(j,26)
if(q===t){$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jo
p=h.H()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g=l.b
f=C.aq(g,A.c,0.5)
f.toString
e=C.aq(g,A.w,0.5)
e.toString
h.saq(new C.bT(A.JI,0.5,A.x,a3,0,C.a([f,g,e],r),I.aw1,a3).av(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.az:A.c
d=new C.kh(new C.eq(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.G(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.ca,new C.ju(1),a3,a3,a3,a3,A.c8,a3)
d.ey()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a4(a4,new C.u(n.a-h/2,n.b-j.gbc(j)/2))
n=k===0
a0=n?A.bl:A.aF
j=m.b
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.kh(new C.eq(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.nv),A.a4,A.ca,new C.ju(1),a3,a3,a3,a3,A.c8,a3)
a1.ey()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a4(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbc(j)/2)))}if(n===0){d=C.hr(a3,a3,a3,a3,D.eXF,A.a4,A.ca,a3,A.e_,A.c8)
d.ey()
d.a4(a4,new C.u((w-d.b.c)/2,v/2))}},
au(d){return!0}}
B.Un.prototype={
R(){var w=x.s
return new B.biK(C.a([],w),C.a([],w))}}
B.biK.prototype={
a_(){this.a1()
this.avs()
B.zm("dna_lab").bz(new B.dOx(this),x.P)},
gb2n(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a3x.h(0,w[u])
t.toString
s.push(t)}return A.d.fZ(s)},
ga8H(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb2n(),w,v))}return u},
avs(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eM()
k.dB(l.e*31+l.d*7+C.BL(new C.S(Date.now(),0,!1)))
w=new B.dOm(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mF(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a3x.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fZ(r))}if(!A.d.b4(t,new B.dOl()))break}l.f=v
A.d.a9(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b06()},
b06(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fYv(s.ga8H()[r])
v=J.dH(D.Ch.gec(D.Ch),new B.dOn(w)).dH(0)
u=new C.eM()
u.dB(r+s.e)
A.d.fv(v,u)
u=C.a([w],x.s)
A.d.v(u,C.dd(v,0,C.dJ(3,"count",x.S),C.U(v).c))
t=new C.eM()
t.dB(s.e*3+r)
A.d.fv(u,t)
s.z=u},
aY3(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dkl.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a3x.h(0,w.f[v])
u.toString
break A}u=B.fYv(w.ga8H()[v])
break A}w.m(new B.dOk(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dOv(),e=new B.dOq(),d=h.d===2?h.gb2n():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mK,g,g,g),A.at],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bZ.j(0.18):A.K
q=new C.aT(10,10)
p=new C.ay(t.length===s?A.bZ:A.bG,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga8H()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cm(A.aO,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bq(q,q,q,q),g,g,A.n),g,g,g,D.bpz,A.eq,g,g,g))}v.push(C.bV(A.bz,u,A.bq,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bV(A.bz,u,A.bq,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cr(A.A,g,g,C.X(Ak.Nw,j<t.length?A.aA:A.bG,g,g,g,14),g),g))
A.d.v(v,C.a([new C.D(A.LT,C.bV(A.bz,u,A.bq,0,0),g)],a0))}v.push(A.am)
v.push(C.d(w,g,g,g,g,g,g,Q.mK,g,g,g))
v.push(A.at)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b2.j(0.25):A.dr
q=new C.aT(12,12)
o=j<t.length
p=new C.ay(o?A.b2:A.b3,1,A.q,-1)
if(o){o=D.Ch.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c1
u.push(C.p(g,new C.x(o,g,new C.G(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bq(q,q,q,q),g,g,A.n),g,g,g,g,A.ej,g,g,g))}v.push(C.bV(A.bz,u,A.bq,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bV(A.bz,u,A.bq,0,0))}v.push(A.aB)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.fb3(u,t>=(h.d===2?3:9)?A.b2:A.bZ,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.fb3(u,A.bZ,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.Ty,g,g,g))
v=C.cd(C.v(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bD,g,g,A.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dA(D.d2A[j],h.d===j,new B.dOr(h,j),g,A.bZ,g))
u=C.a([new B.eQ(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fi(A.k_,"New strand",new B.dOs(h),A.b2,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.L)(t),++l){i=t[l]
q=D.Ch.h(0,i)
q.toString
a0.push(new B.fi(D.a_p,q,new B.dOt(h,i),A.bZ,g))}u.push(C.bV(A.bz,a0,A.bq,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.auW:D.cMR
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aT(14,14)
a0.push(C.aE(g,C.p(A.A,new C.x(k,g,D.eXU,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bq(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dOu(h,k),g,g,g,g,g,g,!1,A.a8))}u.push(C.B(a0,A.m,g,A.q4,A.j,0,g,g))}return B.jK(A.bZ,A.ha,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.UD.prototype={
R(){return new B.aCz(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aCz.prototype={
a_(){var w,v=this
v.a1()
w=v.qx(v.gc5o())
w.iT(0)
v.d!==$&&C.aP()
v.d=w
B.zm("ecosystem").bz(new B.dRm(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.btW()},
gaLZ(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c5p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length===0||w-A.d.gal(v)[3]>0.25){w=C.C(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)A.d.cC(v,0)}if(m.gaLZ()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.E(A.k.bv(w),5)===0)B.vR("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dR9())},
a9T(d){this.m(new B.dR8(this,d))
B.vU("pop",3,120,0.4)},
c5r(){return this.m(new B.dRa(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.D(D.Y7,B.fb3(r,t.gaLZ()?A.b2:A.cf,s),s),C.E(new C.D(D.bq6,C.bw(C.m(18),C.b3(s,s,s,new B.bd7(t.f,t.r,t.w,s),A.f1),A.aq),s),1),new C.D(A.eK,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.f3U,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hB(A.b2,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dRe(t),w)
v=t.y
v=B.hB(A.bO,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dRf(t),v)
u=t.z
return B.jK(A.b2,A.ha,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hB(A.cs,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dRg(t),u),new B.eQ(C.a([new B.dA("Drought",!1,new B.dRh(t),A.yp,A.aM,s),new B.dA("Disease",!1,new B.dRi(t),D.bEQ,A.bt,s),new B.dA("+ Foxes",!1,new B.dRj(t),s,A.cs,s),new B.dA("+ Rabbits",!1,new B.dRk(t),s,A.bO,s),new B.dA("Reset",!1,t.gc5q(),A.k_,A.aR,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bd7.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.N()
w.saq(D.bTS.av(0,new C.a9(0,0,d,a0)))
a1.aY(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.v1,A.bl,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.N()
t.r=a0.gp(0)
a1.aY(new C.a9(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eM()
r.dB(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.hk.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d3z(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.N()
t.r=D.bcX.gp(0)
a1.aY(new C.a9(0,f,d,f+g),t)
i=C.N()
i.r=A.dr.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d3B(h,j,a1)
g.$3(0,100,A.bl)
g.$3(1,120,A.bO)
g.$3(2,24,A.cs)
g=new B.d3A(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bl,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bO,102)
g.$3("Foxes "+A.k.V(w[2]),A.cs,200)},
au(d){return!0}}
B.aKP.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.aRe.prototype={
guT(){return A.d.cI(this.a,0,new B.bFs())}}
B.TS.prototype={
R(){var w=x.S
return new B.bio(B.hXw(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.bio.prototype={
gvS(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cI(t,0,new B.dBY())},
a_(){var w,v=this
v.a1()
w=v.qx(new B.dCa(v))
w.iT(0)
v.x!==$&&C.aP()
v.x=w
B.zm("balance_lab").bz(new B.dCb(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.btz()},
cx5(d){var w,v=this
v.m(new B.dBZ(v,d))
B.vU("click",v.f[d],60,0.4)
if(v.gvS()===v.d[v.e].guT()&&v.r.K(0,v.e)){B.vU("zap",10,260,0.5)
w=v.r
w=C.C(w,C.a3(w).k("co.E"))
B.vR("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.K(k,new B.dC3(),C.U(k).k("K<1,n>")).aI(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aI(k," + ")
if(o.gvS()===m[o.e].guT())s="\u2696\ufe0f Balanced! "+m[o.e].guT()+" = "+o.gvS()+". The torques are equal, so the seesaw stays level."
else s=o.gvS()>m[o.e].guT()?"The right side is too strong ("+o.gvS()+" vs "+m[o.e].guT()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guT()+" vs "+o.gvS()+"). Add weight to the right, or place it further from the middle."
k=o.gvS()===m[o.e].guT()?A.b2:A.aM
k=B.bzr(s,k,o.gvS()===m[o.e].guT()&&o.e<m.length-1?new B.fi(A.iV,"Next",new B.dC4(o),A.b2,n):n)
w=C.E(C.cp(new B.dC5(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].guT(),n,n,n,n,n,n,D.aQs,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.D(D.Y7,k,n),w,new C.D(D.ah_,C.B(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvS(),n,n,n,n,n,n,D.aQs,A.dM,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dA(w+p,o.e===v,new B.dC6(o,v),n,A.aM,n))}return B.jK(A.aM,A.ha,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eQ(u,"LEVEL",n),new B.eQ(C.a([new B.dA("Clear right side",!1,new B.dC7(o),A.k_,A.cf,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b97.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aO($.W().r,A.ap,null,null,C.a([],x.v))
i.F(new C.b5(h,f))
w=f+70
i.F(new C.ap(h-30,w))
i.F(new C.ap(h+30,w))
i.F(new C.bF())
v=C.N()
v.r=A.ak.gp(0)
d.aP(i,v)
v=h-120
i=C.N()
i.r=A.aK.gp(0)
d.aY(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.by(i.save())
i.translate(h,f)
d.j1(0,j.b)
u=g*5.8
t=C.bx(new C.a9(-u,-9,u,9),A.hd)
w=C.N()
w.saq(D.bWy.av(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aD(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hI.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.foa(d,""+Math.abs(s),new C.u(w,22),A.c1,10)}q=new B.cDo(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aR)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bZ)
if(w[s]===0){l=C.bx(C.cl(new C.u(m,-22),22,v),A.hd)
$.W()
k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b3.gp(0)
r=k.H()
i.drawRRect(C.er(l),r)
r.delete()
B.foa(d,"+",new C.u(m,-22),A.c1,14)}}i.restore()
$.W()
i=C.N()
i.r=(j.e?A.b2:A.aL).gp(0)
d.ae(new C.u(h,f),7,i)},
au(d){return!0},
gjg(){return this.e}}
B.UR.prototype={
R(){return new B.biW(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.biW.prototype={
ga0f(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gadj(){var w=this.ga0f(),v=this.r,u=D.axC[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.db(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qx(new B.dVp(v))
w.iT(0)
v.x!==$&&C.aP()
v.x=w
B.zm("gear_lab").bz(new B.dVq(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bu3()},
c5t(d,e){var w,v=this
v.m(new B.dVf(v,d,e))
if(v.gadj()&&v.w.K(0,v.r)){B.vU("zap",8,240,0.45)
w=v.w
w=C.C(w,C.a3(w).k("co.E"))
B.vR("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga0f(),n=r.ga0f(),m=D.axC[r.r].a
m=r.gadj()?"\u2705 Done! Ratio "+A.k.aa(r.ga0f(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gadj()?A.b2:A.cs
v=r.d
u=x.p
n=C.v(C.a([new C.D(D.Y7,B.bzr(m,w,r.gadj()&&r.r<7?new B.fi(A.iV,"Next",new B.dVj(r),A.b2,q):q),q),C.E(C.b3(q,q,q,new B.beB(v,r.f,q),A.f1),1),new C.D(D.ah_,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.ga0f(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,A8.Tc,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dA(m+s,r.r===t,new B.dVk(r,t),q,A.cs,q))}p=r.e
u=C.a([new B.eQ(o,"GOAL",q),B.hB(A.aR,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dVl(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.av7("Gear "+s+" teeth",p,new B.dVm(r,t),8,40,D.dbZ[t],""+p,q))}return B.jK(A.cs,A.ha,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.beB.prototype={
bOV(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ap,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.efa,D.ekh,D.eAc,D.erl],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b5(m,l)
j.push(p)
m=i.f
if(m!=null)p.bA(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ap(m,l)
j.push(p)
m=i.f
if(m!=null)p.bA(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}}}i.F(new C.bF())
return i},
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.n)
for(w=this.b,v=0;v<4;++v)g.push(w[v]*2.2)
u=g[0]
t=u+g[1]+6
s=g[2]
r=g[3]
q=t+s+r+6
p=-u-6
o=q+r+6
n=A.d.fb(g,A.pm)
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
h=new B.dbz(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.d5,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cZ)
h.$5(new C.u(0,0),g[0],w[0],j,A.mV)
h.$5(new C.u(t,0),g[1],w[1],i,A.fk)
s.restore()
s=new B.dbA(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aR)
s.$3("2+3 \xb7 shared axle",t,A.cs)
s.$3("4 \xb7 output",q,A.b2)},
au(d){return!0}}
B.U0.prototype={
R(){var w=$.aw()
return new B.biB(new C.as(new C.bb("Meet me at noon",A.b4,A.aN),w),new C.as(new C.bb("LEMON",A.b4,A.aN),w),C.aX(x.S))}}
B.biB.prototype={
a_(){this.a1()
this.aWN()
B.zm("cipher_lab").bz(new B.dG9(this),x.P)},
q(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a2()},
aWN(){this.y=1+A.cI.aC(25)
this.z=0},
ga9a(){var w=this
return B.a1j(B.a1j(D.GP[w.x],w.y),-w.z)===D.GP[w.x]},
gax6(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1j(u,v.w)
break A}if(1===t){w=new C.K(C.a(B.a1j(u,0).split(""),x.s),new B.dFS(),x.dv).fZ(0)
break A}w=B.i9e(u,v.e.a.a)
break A}return w},
aS9(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d4(d.toUpperCase()),v=x.e8,w=new C.bS(w,w.gM(0),v.k("bS<bW.E>")),v=v.k("bW.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fb(q,A.A6))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aT(2,2)
v.push(new C.bD(1,A.bh,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aR,r,r,new C.bq(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.Mc,r,r,r,r),new C.x(C.jJ(65+s),r,D.f5I,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.lX,A.j,0,A.p),r))}return new C.a7(r,70,C.B(v,A.dz,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kF,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dG0(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.f_Z,!0,A.a4,o,A.an,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kF,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dG1(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iH,!0,A.a4,o,A.an,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fwg)
w.push(A.at)
v=A.aR.j(0.12)
u=C.m(14)
t=C.I(A.aR.j(0.4),A.q,1)
w.push(C.p(o,C.zG(p.gax6().length===0?"\u2026":p.gax6(),D.f4H,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bD,o,o,o))
w.push(A.ac)
w.push(B.bzr(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aR,o))
w.push(A.ac)
w.push(D.fcN)
w.push(A.at)
w.push(p.aS9(p.gax6()))
w.push(A.at)
w.push(D.ffc)
s=C.cz(w,o,A.bD,o,o,A.ah,!1)}else{w=B.bzr("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1j(D.GP[p.x],p.y),o,o,o,o,o,o,D.f5h,o,o,o)
u=(p.ga9a()?A.b2:A.aR).j(0.14)
t=C.m(14)
r=C.I((p.ga9a()?A.b2:A.aR).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fpZ,v,A.S,D.fkl,C.p(o,C.d(B.a1j(B.a1j(D.GP[p.x],p.y),-p.z),o,o,o,o,o,o,D.f6J,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bD,o,o,o),A.ac,p.aS9(B.a1j(D.GP[p.x],p.y)),A.N],x.p)
if(p.ga9a())t.push(B.bzr("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b2,new B.fi(A.k_,"Next",new B.dG2(p),A.b2,o)))
s=C.cz(t,o,A.bD,o,o,A.ah,!1)}w=p.f
v=x.p
w=C.a([new B.eQ(C.a([new B.dA("Make a secret",w===0,new B.dG3(p),A.jl,A.aR,o),new B.dA("Crack a code",w===1,new B.dG4(p),A.pW,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dA(n[q],p.r===q,new B.dG5(p,q),o,A.aR,o))
v=C.a([new B.eQ(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hB(A.aR,""+u,"Shift",25,1,new B.dG6(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hB(A.aM,""+v,"Shift back",25,0,new B.dG7(p),v))}return B.jK(A.aR,A.ha,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aKt.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.aKX.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.eb.prototype={}
B.to.prototype={
apm(d,e,f,g){var w=this
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
B.a9S.prototype={}
B.aaZ.prototype={}
B.a41.prototype={
bc8(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hc()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a9S(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c1n(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bo(w,new B.bLw())},
aja(d,e,f,g){var w="p"+this.c++,v=new B.to(w,e,f,g)
v.apm(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bo(this.b,new B.bLH(e))},
a9(d){A.d.a9(this.a)
A.d.a9(this.b)},
cF4(d,e,f,g,h){return A.d.b4(this.b,new B.bLC(e,f,g,h))},
ajX(d,e,f,g){var w
if(d===f||this.cF4(0,d,e,f,g))return null
w=new B.aaZ(d,e,f,g)
this.b.push(w)
return w},
azG(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zA(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
amx(d){return this.Lo(d)&&!d.x&&d.cx>this.zA(d)},
b4N(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Lo(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c5u(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yW.h(0,v)
if(w!=null)return w.a
return 100},
v2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c1n(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.U(v).k("a1<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a1(v,new B.bLI(a2),t).cI(0,0,new B.bLJ(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.T(x.N,u)
n=new B.bLL(o)
m=C.a([],x.t)
l=new B.bLK(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.T(u,u)
f=new B.bLN(g,l,n)
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
a2.b4J(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zA(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b4J(e,d,w,!0)
a2.bLR(a4)},
b4J(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.T(x.N,b3),b5=new B.bLy(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bLx(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bLA(C.T(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b4N(t)*(1+t.CW))
a4=b2.azG(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c5u(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bOU(e,a0,b8)
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
bOU(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bLR(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.azG(o)/a1.b4N(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zA(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bE0(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bc8(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tF(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tF(o,"The "+$.qb().h(0,n).b+" got "+A.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tF(o,"More than 1.5 amps went through the "+$.qb().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tF(o,"The regulator had to turn "+A.k.aa(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tF(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yW.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qb().h(0,n).b
l=f.b
l=l===A.k.k_(l)?""+A.k.V(l):C.t(l)
g=f.c
g=g===A.k.k_(g)?""+A.k.V(g):C.t(g)
a1.tF(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eMW.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tF(o,"The bulb got "+A.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tF(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tF(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tF(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tF(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tF(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bE0(d){return A.d.b4(this.a,new B.bLv(d))},
tF(d,e){var w
d.x=!0
d.ay=e
this.bc8(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bgL(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a9(0)},
aFK(d){var w=d.b
return D.aMV.t(0,w)||D.yW.ai(0,w)||w==="buck"||w==="regulator"},
bdx(d){var w,v=!0
if(!this.Lo(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yW.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Uj(d,e){var w=this.b
return new C.a1(w,new B.bLP(d,e),C.U(w).k("a1<1>")).gM(0)},
Ck(d){var w,v
if(d.x)return!1
w=d.b
if(D.yW.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bbF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qb().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aFK(d)||i.Ck(d))return null
w=i.Uj(d,0)
v=i.Uj(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.U(u).k("a1<1>")
s=C.C(new C.a1(u,i.gcNz(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.k_(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yW.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aFP("battery"),o=J.aV(t.a),t=new C.f6(o,t.b);t.C();){n=o.gS(o)
if(n.e===1.5&&n.as<=0.02&&i.Uj(n,0)+i.Uj(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aFP("switch"),o=J.aV(t.a),t=new C.f6(o,t.b);t.C();)if(!o.gS(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qb().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zA(k))return"The "+$.qb().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.zA(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b4(u,new B.bLD(i,d))
h=q.b
h=h===A.k.k_(h)?""+A.k.V(h):C.t(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aFP(d){var w=this.a
return new C.a1(w,new B.bLG(d),C.U(w).k("a1<1>"))},
aFn(d){return this.aFP(d).b4(0,new B.bLF(0.35))},
pK(d,e){return A.d.b4(this.a,new B.bLE(e))}}
B.aif.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.N()
w.r=F.KW.gp(0)
c0.aY(new C.a9(0,0,b8,b9),w)
v=C.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lY.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lY.ai(0,h.b)?(h.ch-1)*38:0
b4.cC1(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hv4(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.N()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bP
c0.bC(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.acX.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.yX
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mO.aw(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cfa(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zA(a0)){g=j+0
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
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ay.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbK().a.snapshot()
w.drawPath((a4.e=new C.cE(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aO(a2,A.ap,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bF())
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbK().a.snapshot()
w.drawPath((a2.e=new C.cE(e)).a,s)
s.delete()
a9=new C.kh(new C.eq("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.ca,new C.ju(1),b5,b5,b5,b5,A.c8,b5)
a9.ey()
a9.a4(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aMV.t(0,h)||D.yW.ai(0,h)||h==="buck"||h==="regulator")&&!r.Ck(a0)&&r.Uj(a0,0)+r.Uj(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aF.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.kh(new C.eq("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.ca,new C.ju(1),b5,b5,b5,b5,A.c8,b5)
a9.ey()
a9.a4(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.lY.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.KW.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bdx(a0)?A.cf:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bdx(a0)){a9=new C.kh(new C.eq("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.cf,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.ca,new C.ju(1),b5,b5,b5,b5,A.c8,b5)
a9.ey()
a9.a4(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.Xa,F.Xh,b2)
j.toString
i=b1.f
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bP
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.QW
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b4(q,new B.bGE())){b3=A.d.cI(q,0,new B.bGF())
$.W()
b7=C.N()
b7.r=D.b87.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aY(new C.a9(0,0,b8,b9),b7)
a9=C.hr(b5,b5,b5,b5,D.eXy,A.a4,A.ca,b5,A.e_,A.c8)
a9.wC(b6-24)
a9.a4(c0,new C.u(12,10))}},
qj(d,e,f,g,h){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.ca,w,A.e_,A.c8)
v.ey()
v.a4(d,f)},
cC1(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ap,null,null,C.a([],x.v))
d.F(new C.b5(a1.a,a1.b))
w=B.hnz(a1,a2,a3)
d.F(new C.cU(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.acX,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aR,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bk
u=C.N()
u.b=A.ae
u.c=a4?7:5
u.d=A.bP
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aP(d,u)
u=C.N()
u.b=A.ae
u.c=2.4
u.d=A.bP
u.r=(a4?A.c:o).gp(0)
a0.aP(d,u)
if(q){n=new C.Sg(new C.vv(C.x1(d),!1,C.a([],x.f5))).gL(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jq()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jq()
h=t[u].b
h===$&&C.c()
h=A.k.E(j*22+i*m*l,h.a.length())
v.jq()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jq()
g=t[u].b
g===$&&C.c()
f=A.k.E(h+i,g.a.length())
v.jq()
i=t[u].Mt(f).a
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
OF(d,e,f,g){var w,v,u,t
$.W()
w=C.N()
v=g?A.b_:A.a3
u=g?A.b5:A.a7
t=C.aq(e,A.w,0.3)
t.toString
w.saq(new C.a8(v,u,A.x,C.a([e,f,e,t],x.O),A.GR,null).av(0,d))
return w},
avi(d,e,f){return this.OF(d,e,f,!0)},
c0Z(d,e){return this.OF(d,A.bk,A.iN,e)},
agK(d,e){var w,v,u
$.W()
w=C.N()
w.saq(D.aLw.av(0,C.bU(e,4.2)))
d.ae(e,4.2,w)
w=e.ad(0,D.e4i)
v=e.ad(0,D.e4r)
u=C.N()
u.r=A.ee.gp(0)
u.c=1.2
d.bC(w,v,u)},
cfa(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.N()
c0.saq(D.bTy.av(0,D.eJU))
c0.c=3.4
c0.d=A.bP
w=C.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.mC
c1.hP(D.eJM,w)
if(c3){w=C.bx(D.eJT,A.kA)
v=C.N()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=B.h3F(c2)
c1.bC(new C.u(-u,0),D.e5A,c0)
c1.bC(D.e3q,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lY.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bX(0,c2.ch)}switch(w){case"battery":b3.bAU(c1,c2)
break
case"solar":r=C.bx(D.eJP,A.im)
c1.aD(r,b3.OF(new C.a9(r.a,r.b,r.c,r.d),A.dA,A.bO,!1))
b9=C.N()
w=C.aq(D.bbr,A.d3,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bjh,A.mh,0.3+0.4*c2.f)
v.toString
b9.saq(new C.a8(A.ax,A.aC,A.x,C.a([w,v],x.O),b4,b4).av(0,D.a5V))
c1.aY(D.a5V,b9)
q=C.N()
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
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cr.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new C.aO($.W().r,A.ap,b4,b4,C.a([],x.v))
b9.F(new C.b5(-34,18))
b9.F(new C.ap(-6+40*c2.f,-18))
b9.F(new C.ap(4+40*c2.f,-18))
b9.F(new C.ap(-24,18))
b9.F(new C.bF())
w=C.N()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aP(b9,w)
w=c2.f
b9=C.N()
b9.r=A.dP.j(0.9).gp(0)
c1.ae(D.e3w,4+4*w,b9)
break
case"crank":n=C.bx(D.eJA,A.he)
c1.aD(n,b3.avi(new C.a9(n.a,n.b,n.c,n.d),A.bv,A.bJ))
b9=C.N()
b9.saq(D.aLx.av(0,C.bU(A.J,12)))
c1.ae(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.N()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bP
c1.bC(A.J,m,b9)
b9=C.N()
b9.saq(D.eee.av(0,C.bU(m,7)))
c1.ae(m,7,b9)
b3.agK(c1,D.e5t)
b3.agK(c1,D.e3j)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aO(b9,A.ap,b4,b4,C.a([],w))
v.F(new C.b5(-3,24))
v.F(new C.ap(3,24))
v.F(new C.ap(1.5,0))
v.F(new C.ap(-1.5,0))
v.F(new C.bF())
l=C.N()
l.r=A.bO.gp(0)
c1.aP(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.by(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aO(b9,A.ap,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cU(6,-14,2,-30))
l.push(new C.cU(-2,-14,0,-2))
l.push(new C.bF())
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbK().a.snapshot()
v.drawPath((j.e=new C.cE(l)).a,o)
o.delete()
v.restore()}b9=C.N()
b9.saq(D.edV.av(0,C.bU(A.J,4.5)))
c1.ae(A.J,4.5,b9)
break
case"switch":n=C.bx(D.eJH,A.rz)
b9=C.N()
b9.saq(D.ao6.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.agK(c1,D.RO)
b3.agK(c1,D.aGm)
i=c2.w?D.aGm:D.e33
b9=C.N()
b9.r=A.az.gp(0)
b9.c=6
b9.d=A.bP
c1.bC(D.RO,i,b9)
b9=C.N()
b9.r=(c2.w?A.b2:A.bO).gp(0)
b9.c=4
b9.d=A.bP
c1.bC(D.RO,i,b9)
b9=C.lh(D.RO,i,0.85)
b9.toString
w=C.N()
w.r=A.ay.gp(0)
c1.ae(b9,5,w)
break
case"fuse":h=C.bx(D.aM2,D.aLC)
b9=C.N()
b9.r=A.f6.j(0.25).gp(0)
c1.aD(h,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.aA.gp(0)
c1.aD(h,b9)
if(!t){b9=C.N()
b9.c=1.6
b9.r=C.aq(A.bO,A.cs,c2.fx).gp(0)
c1.bC(D.aGD,D.aGl,b9)}else{b9=C.N()
b9.c=1.6
b9.r=A.c1.gp(0)
c1.bC(D.aGD,D.e5R,b9)
b9=C.N()
b9.c=1.6
b9.r=A.c1.gp(0)
c1.bC(D.e3X,D.aGl,b9)
b9=C.N()
b9.r=A.dB.gp(0)
c1.ae(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cl(new C.u(F.oY[g]*22,0),20,9)
w=C.bx(f,A.hC)
o=b3.OF(f,A.d5,A.ou,!0).H()
b9.drawRRect(C.er(w),o)
o.delete()}break
case"pot":b9=C.N()
b9.saq(D.ee6.av(0,C.bU(A.J,21)))
c1.ae(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.aA.gp(0)
d.c=1.2
o=d.H()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=C.N()
b9.saq(D.edT.av(0,C.bU(A.J,13)))
c1.ae(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.N()
j.r=A.aM.gp(0)
j.c=3
j.d=A.bP
c1.bC(new C.u(b9*3,w*3),new C.u(v*12,l*12),j)
break
case"resistor":a1=C.bx(D.aM2,D.aLC)
b9=C.N()
b9.saq(D.bWQ.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=x.O
a2=C.F([47,C.a([C.b0(b5),C.b0(b6),A.w],b9),100,C.a([C.b0(b7),A.w,C.b0(b7)],b9),220,C.a([C.b0(b8),C.b0(b8),C.b0(b7)],b9),470,C.a([C.b0(b5),C.b0(b6),C.b0(b7)],b9),1000,C.a([C.b0(b7),A.w,C.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(C.c_(new C.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=C.N()
b9.r=A.aM.gp(0)
c1.aY(D.eK2,b9)
b9=c2.r
b3.qj(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e58,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.N()
v.r=A.dP.j(0.55*w).gp(0)
v.z=A.yX
c1.ae(D.w8,34,v)}n=C.cl(D.e2z,12,18)
c1.aD(C.bx(n,A.hC),b3.OF(n,A.bk,A.e1,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dq.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.N()
if(t)v=A.VZ
else{v=C.aq(A.e1,A.hV,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Ex
else{l=C.aq(A.dA,A.dP,c2.fx)
l.toString}w.saq(new C.bT(A.rU,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,C.bU(A.rw,17)))
c1.ae(A.rw,17,w)
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ae(A.rw,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ap,b4,b4,C.a([],w))
l.F(new C.b5(-9,-12))
l.F(new C.cU(-12,-4,-9,0))
v=C.N()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aP(l,v)
v=C.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bC(D.e5N,D.e5P,v)
v=C.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bC(D.e3Q,D.e3T,v)
w=C.a([],w)
a4=new C.aO(b9,A.ap,b4,b4,w)
a4.F(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bA(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.W()
b9=C.N()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aX
else{w=C.aq(A.dA,D.bce,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aP(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.N()
v.r=A.ay.j(0.6*w).gp(0)
v.z=D.dmJ
c1.ae(A.rw,30,v)}w=C.N()
w.r=A.e1.gp(0)
w.c=2.4
c1.bC(D.e5T,D.e5S,w)
w=C.N()
w.r=A.e1.gp(0)
w.c=2.4
c1.bC(D.e3Z,D.e3Y,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ap,b4,b4,C.a([],w))
a6.F(new C.b5(-12,8))
a6.F(new C.ap(-12,-6))
a6.F(new C.cU(0,-26,12,-6))
a6.F(new C.ap(12,8))
a6.F(new C.bF())
v=C.N()
if(t)l=A.n5
else{l=C.aq(A.ep,D.adI,c2.fx)
l.toString}if(t)j=A.kp
else{j=C.aq(A.kl,A.ay,c2.fx)
j.toString}v.saq(new C.a8(A.ax,A.aC,A.x,C.a([l,j],x.O),b4,b4).av(0,D.eJ6))
c1.aP(a6,v)
v=C.N()
v.b=A.ae
v.c=1.2
v.r=A.jd.gp(0)
c1.aP(a6,v)
v=C.N()
v.r=A.eP.gp(0)
c1.aY(D.eJc,v)
w=new C.aO(b9,A.ap,b4,b4,C.a([],w))
w.F(new C.b5(-7,-4))
w.F(new C.cU(-6,-12,0,-15))
b9=C.N()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aP(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aD(C.bx(a7,A.hd),b3.avi(a7,A.ak,A.aL))
b9=C.N()
b9.r=A.cC.gp(0)
c1.aY(D.eIU,b9)
b9=C.N()
b9.r=A.cr.gp(0)
c1.aY(D.eIV,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cl(D.e2R,15,7)
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cs.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c_(w),o)
o.delete()
b9.restore()}w=C.N()
w.r=A.az.gp(0)
c1.ae(A.J,3,w)
b9.restore()
b3.qj(c1,"M",D.e5s,A.az,14)
break
case"buzzer":a8=C.cl(A.J,42,42)
b9=C.N()
b9.saq(D.eea.av(0,a8))
c1.hP(a8,b9)
b9=C.N()
b9.r=A.w.gp(0)
c1.ae(A.J,6,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.b3.gp(0)
c1.ae(A.J,6,b9)
b3.qj(c1,"+",D.e5l,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=C.bU(A.J,24+k*5+l)
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bZ.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c_(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bx(D.eJD,A.hd)
w=C.N()
w.saq(D.bUv.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,w)
w=C.a([],x.v)
a9=new C.aO(b9.r,A.ap,b4,b4,w)
a9.F(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cU(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bA(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=C.N()
w.b=A.ae
w.c=10
w.r=D.bcQ.j(0.5*b9).gp(0)
w.z=A.jo
c1.aP(a9,w)}$.W()
b9=C.N()
b9.b=A.ae
b9.c=3.2
b9.d=A.bP
b9.r=C.aq(A.lI,A4.X_,c2.fx).gp(0)
c1.aP(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.bx(a7,A.hd)
w=C.N()
w.saq(D.bTq.av(0,a7))
c1.aD(b9,w)
w=C.N()
w.r=A.bO.gp(0)
c1.aY(D.eJi,w)
for(p=0;p<4;++p){b0=new C.kh(new C.eq("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.G(!0,A.az,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.ca,new C.ju(1),b4,b4,b4,b4,A.c8,b4)
b0.ey()
b0.a4(c1,new C.u(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aD(C.bx(b1,A.hC),b3.c0Z(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.N()
v.r=A.b2.j(0.5).gp(0)
c1.aY(new C.a9(-3,w,11,w+b9),v)
b3.qj(c1,"1F",D.w8,A.c,11)
break
case"radio":a1=C.bx(D.a5V,A.he)
b9=C.N()
b9.saq(D.bX5.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.ou.j(0.6).gp(0)
c1.aD(a1,b9)
b9=C.bx(D.eJE,A.im)
w=C.N()
w.r=A.dH.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lI.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.N()
w.r=(c2.fx>0?A.h3:A.nK).gp(0)
c1.aY(D.eIX,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=C.N()
v.r=A.bC.gp(0)
v.c=1.6
c1.bC(new C.u(w,-13),new C.u(w,-3),v)}w=C.N()
w.saq(D.aLx.av(0,C.bU(D.a5_,6)))
c1.ae(D.a5_,6,w)
w=C.N()
w.r=A.ou.gp(0)
c1.ae(D.e3p,4,w)
w=C.N()
w.r=A.e1.gp(0)
w.c=1.8
c1.bC(D.e3n,D.aGq,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aGq,4+k*5+A.k.E(w.d*8,5))
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nP.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c_(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bx(D.eJO,A.hd)
v=C.N()
v.r=L.n_.gp(0)
c1.aD(w,v)
b2=C.bx(D.eJL,A.hC)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.er(b2),$.pr(),!0)
b9.translate(-33,-21)
E.h_S(c1,D.ePq,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.N()
b9.r=A.b2.gp(0)
c1.ae(D.e3B,1.6,b9)}else{w=C.N()
w.r=D.va.gp(0)
c1.aD(b2,w)
b9=new C.aO(b9.r,A.ap,b4,b4,C.a([],x.v))
b9.F(new C.b5(-33,-21))
b9.F(new C.ap(-10,-21))
b9.F(new C.ap(-33,0))
b9.F(new C.bF())
w=C.N()
w.r=A.c.j(0.05).gp(0)
c1.aP(b9,w)}b9=C.N()
b9.r=A.bv.gp(0)
c1.aY(D.eJb,b9)
break}B.i6R(c1,c2,b3.b.d,b3.gc5v())
if(t)b3.qj(c1,"\u2716",D.e5W,A.ay,14)
if(s)c1.a.restore()},
bAU(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aD(C.bx(w,A.rz),m.avi(w,A.dA,A.iQ))
v=new C.a9(-22,-13,22,13)
$.W()
u=C.N()
u.saq(D.ao_.av(0,v))
d.aY(v,u)
u=C.N()
u.r=A.dT.gp(0)
d.aY(D.eJr,u)
t=new C.a9(28,-5,34,5)
d.aD(C.bx(t,A.hc),m.OF(t,A.dA,A.iN,!0))
m.qj(d,"+",D.e38,A.aM,11)
m.qj(d,"\u2212",D.e5u,A.ad,11)
m.qj(d,C.t(l===A.k.k_(l)?A.k.V(l):l)+"V",D.e5e,A.aM,13)
if(l===1.5){u=C.N()
u.r=A.bG.gp(0)
d.aY(D.eJq,u)
u=e.as
s=C.N()
s.r=C.aq(A.ay,A.b2,u).gp(0)
d.aY(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qj(d,"FLAT",D.e57,A.cf,9)}if(l>2){u=C.N()
u.r=A.b3.gp(0)
u.c=1
d.bC(D.e2F,D.aG5,u)
m.qj(d,l>3?"3 cells":"2 cells",D.e5d,A.aA,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bx(r,A.rz)
$.W()
s=C.N()
s.saq(D.bWD.av(0,r))
d.aD(u,s)
s=C.N()
s.r=A.cZ.gp(0)
d.aY(D.eJs,s)
for(u=d.a,q=0;q<2;++q){p=F.axh[q]
s=p<0?5:3.6
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.aLw.av(0,C.bU(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qj(d,"9V",D.e59,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bx(r,A.im)
$.W()
s=C.N()
s.saq(D.ao_.av(0,r))
d.aD(u,s)
s=C.N()
s.r=A.c7.gp(0)
d.aY(D.eJN,s)
for(u=d.a,q=0;q<2;++q){s=C.bx(C.cl(new C.u(F.a2P[q],-20),8,10),A.hc)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cr.gp(0)
n=o.H()
u.drawRRect(C.er(s),n)
n.delete()}m.qj(d,"+",D.e3f,A.ay,10)
m.qj(d,"12V",D.e5a,A.az,15)}},
au(d){return!0}}
B.my.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a9(k)
A.d.a9(d.b)
w=C.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.to(o,r,q,p)
n.apm(o,r,q,p)
k.push(n)
J.iq(s[4],new B.cka(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ajX(m,u[1],l,u[3])}}}
B.aid.prototype={
R(){var w=x.N
return new B.aie(A.J,A.au,C.T(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aie.prototype={
adm(d){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new B.bGi(w,d))
w.as=C.cM(A.lh,new B.bGj(w))},
q(){var w=this.as
if(w!=null)w.a7(0)
w=this.ch
if(w!=null)w.a7(0)
this.bqM()},
a_m(d,e){return this.cd7(d,e)},
b_3(d){return this.a_m(d,!1)},
cd7(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_m=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qZ:A.xs
p=d.b
w=3
return C.b(E.h09(s,r,p,d.ax<3.2,q,$.qb().h(0,p).b),$async$a_m)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_m,v)},
cpG(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.cg(0,d.a,new B.bGk()),t=J.cG(u)
t.K(u,v)
t.bo(u,new B.bGl(v))
if(t.gM(u)>=4){t.a9(u)
t=w.ch
if(t!=null)t.a7(0)
w.a0H(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=C.cM(A.kq,new B.bGm(w,u,d))}},
a_2(d){return this.cbv(d)},
cbv(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$a_2=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i7Z(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_2)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$a_2,v)},
a0H(d){return this.cnk(d)},
cnk(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0H=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bQ(F.kk,null,new B.bGg(u,d),t,!0,!0,!1,A.k6,!1,!1,x.H),$async$a0H)
case 2:return C.h(null,v)}})
return C.i($async$a0H,v)},
a_(){this.a1()
this.bdI()
this.lc()},
bdI(){this.a.c.e=new B.bGB(this)},
lv(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v2(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=D.lY.h(0,s.b)
if((r==null?null:r.b)!==D.zm)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.K(0,s.a)
q.a_m(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
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
case"radio":if(s.fx>0){E.dF(900+A.cI.aC(800),"",90,0,0.1,o)
if(A.cI.aj()<0.35)E.dF(300+A.cI.aC(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cI.aj()<0.4
else u=!1
if(u)E.dF(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dF(330+A.o.E(110*A.k.bv(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dF((A.k.bv(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
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
q.m(new B.bGC())},
b60(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lY.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
b_K(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.U(w).k("dz<1>"),w=new C.dz(w,v),w=new C.bS(w,w.gM(0),v.k("bS<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lY.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cC2(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lY.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lY.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hnz(new C.u(k,n),new C.u(i,l),p)
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
adk(){this.a.toString
this.m(new B.bFM())},
bnz(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cXK[v]
if(!A.d.b4(p.a.c.a,new B.bGD(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.HW:o
s=s?K.HW:o
q=t.aja(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dF(1200,"",50,0,0.3,"tri")
p.adk()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.Qc[v].a)
u=w.length
t=u>8
s=t?A.d.dq(w,0,A.o.an(u+1,2)):w
r=t?A.d.fM(w,A.o.an(w.length+1,2)):A.T
q=n.a.d
if(q!=null){w=C.a3(q).k("cu<1>")
w=C.C(new C.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.b_z(s,!0))
n.a.toString
if(t)w.push(n.b_z(r,!0))
w.push(C.E(C.cp(new B.bGA(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
b_z(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.L)(d),++v){u=d[v]
t=$.qb()
s=t.h(0,u).d.j(0.14)
r=new C.aT(14,14)
q=new C.ay(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aE(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.zA,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.nt,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.bb,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bq(r,r,r,r),p,p,A.n),p,p,p,F.tA,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFN(this,u),p,p,p,p,p,p,!1,A.a8))}return C.p(p,C.cz(m,p,A.h6,p,p,A.aO,!1),A.f,p,p,new C.o(F.Ax,p,new C.bO(A.Y,A.Y,new C.ay(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aY8(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.abH,w,C.I(A.bG,A.q,1),v,w,w,A.n),w,w,w,w,F.ah0,w,w,w)},
cfb(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qb().h(0,o),m=d.dy,l=d.fr,k=new B.bG5(q,n),j=C.d(n.c,p,p,p,p,p,p,A.IX,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bKR,p,p,p,new B.bFT(q,d),p,p,p,p,"Remove part",A.cc),C.aH(p,p,p,p,A.Gk,p,p,p,new B.bFU(q),p,p,p,p,p,A.cc)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.Dj,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.f56,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.at,w,A.am,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cf:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bbF(d)
if(v!=null){l=(d.x?A.ay:A.aF).j(0.14)
j=C.m(10)
i=C.I((d.x?A.ay:A.aF).j(0.5),A.q,1)
m.push(new C.D(A.hZ,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fbs,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cp,p,p,p),p))}if(B.fYY(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dA("CH "+t,d.at===u,new B.bFV(q,d,u),p,h,p))}l=C.bV(A.bz,l,A.bq,4,6)
l=C.a([A.am,l,A.at,C.d(q.a.c.Ck(d)?"Showing: "+F.PP[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hf,p,p,p)],g)
if(q.a.c.Ck(d))l.push(new B.fi(A.FV,"Open big screen",new B.bFY(q,d),h,p))
A.d.v(m,l)}if(D.lY.ai(0,o)&&!B.fYY(o)){l=C.a([A.am,C.d(q.a.c.Ck(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hf,p,p,p)],g)
if(q.a.c.Ck(d))l.push(new B.fi(A.Nx,"Open the "+$.qb().h(0,o).b,new B.bFZ(q,d),h,p))
A.d.v(m,l)}if(D.lY.ai(0,o))A.d.v(m,C.a([A.am,new B.fi(A.BC,"Make it bigger (or tap it 4 times)",new B.bG_(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.Ck(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.am,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.f5V,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.dd9[s]
j=r===A.k.k_(r)?A.k.V(r):r
l.push(new B.dA(C.t(j)+" V out",d.e===r,new B.bG0(q,d,r),p,h,p))}i.push(new C.D(A.mn,C.bV(A.bz,l,A.bq,0,6),p))}if(o==="regulator")i.push(D.ftu)
A.d.v(m,i)}if(q.a.c.Lo(d)&&!d.x){l=A.k.aa(d.cx,2)
j=A.k.aa(q.a.c.zA(d),2)
i=q.a.c
w=i.amx(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.amx(d)?A.cf:A.eu,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.zA(d),0,1)
i=q.a.c.amx(d)?A.ay:A.b2
m.push(new C.D(A.hZ,C.v(C.a([l,A.cV,C.bw(j,C.m1(A.bG,p,p,5,p,w,new C.lV(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.D(A.hZ,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f_W,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d3f[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dA(j,d.e===r,new B.bG1(q,d,r),p,h,p))}m.push(C.bV(A.bz,l,A.bq,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cVd[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dA(j,d.r===r,new B.bG2(q,d,r),p,h,p))}m.push(C.bV(A.bz,l,A.bq,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bG3(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bG4(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bFW(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bFX(d)))
if(o==="crank")m.push(D.fp7)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hf,p,p,p))
return q.aY8(new C.cS(D.aZa,C.cd(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.r,p,A.y,p,p,p,p,A.ah),p))}}
B.ba4.prototype={}
B.UE.prototype={
R(){return new B.aCA(B.h3E(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aCA.prototype={
a_(){this.a1()
$.aW.c2$.push(this)
this.adl()},
adl(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$adl=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.ftR(),$async$adl)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i7b(t.d,r)
if(s!=null){t.m(new B.dRu(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$adl,v)},
EL(){var w,v=this
if(!v.as)return
w=B.hYL(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bD1(w)},
iY(d){if(d!==A.fv)this.EL()},
q(){$.aW.hF(this)
this.EL()
this.a2()},
c5x(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.U(v).k("a1<1>")
t=new C.a1(v,new B.dRD(q),u).gM(0)
s=new C.a1(v,new B.dRE(),u).gM(0)
r=new C.a1(v,w.gcR4(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dRF(q,t,s,r))}if(A.o.E(q.w,45)===0)q.EL()
if(A.o.E(q.w,10)===0){w=q.f
$.ahq()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahq()[q.f].c.$1(q.d)){w.K(0,q.f)
B.By("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dRG())
q.EL()
w=q.c
w.toString
w=C.X_(w)
if(w!=null)w.T(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.ahq()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mj,p,p,p,p,p,p,p,p,p,p))}},
ag0(){var w=0,v=C.j(x.H),u=this,t
var $async$ag0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dRt(u),t,null,!0,!0,x.H),$async$ag0)
case 2:return C.h(null,v)}})
return C.i($async$ag0,v)},
aY7(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aE(w,C.hs(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8)},
aY6(d,e,f,g){return this.aY7(d,e,f,g,null)},
aq0(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aE(w,C.p(w,C.B(C.a([C.X(d,f,w,w,w,15),A.ec,new C.dq(1,A.cn,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.bb,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),1)},
aej(){var w=0,v=C.j(x.H),u=this,t
var $async$aej=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a5(t,!1).c5(C.e8(new B.dRp(u),!1,null,x.H)),$async$aej)
case 2:t=u.e.gbh()
if(t!=null)t.bdI()
if(u.c!=null)u.m(new B.dRq())
u.EL()
return C.h(null,v)}})
return C.i($async$aej,v)},
bDU(){var w,v,u,t,s=null,r=this.f
$.ahq()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bl:A.ay
u=C.m(9)
t=C.I(F.Ax,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wm,s,s,s),s,s,s),A.f,s,D.aZh,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eR,s,s,s)},
ah6(){var w=0,v=C.j(x.H),u=this,t
var $async$ah6=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bQ(F.kk,null,new B.dRC(u),t,!0,!0,!0,A.k6,!1,!1,x.H),$async$ah6)
case 2:return C.h(null,v)}})
return C.i($async$ah6,v)},
c5y(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aE(r,C.p(r,D.bM4,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dRI(d),r,r,r,r,r,r,!1,A.a8),o=C.m(11)
o=C.p(r,D.b3T,A.f,r,r,new C.o(A.bo,r,C.I(A.aR.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.B(C.a([p,A.ab,o,A.ab,C.E(C.v(C.a([D.frC,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f4:A.fT,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.awH(s.gcbc(),r),A.rG,s.aY6(A.y2,"Construction Lab: real 3D wiring, plumbing and a house",A.cs,new B.dRJ(s,d)),s.aY7(A.ll,"Challenges",A.aM,s.gcsd(),s.bDU()),s.aY6(A.Np,"How to play",A.aR,new B.dRK(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,C.B(C.a([s.aq0(A.o0,"Circuits",A.bt,s.gcl8()),A.bp,s.aq0(A.oK,"Repair",A.aM,new B.dRL(s)),A.bp,s.aq0(D.y3,"Clear",A.cf,new B.dRM(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(F.Ax,r,new C.bO(A.Y,A.Y,new C.ay(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.bvY,r,r,r)},
B(d){var w=this,v=null
$.arg="tech"
return C.c8(v,A.bX,C.bl(!0,C.v(C.a([w.c5y(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h2w(w.d,w.e,w.gc5w(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.awH.prototype={
R(){return new B.b8g(null,null)}}
B.b8g.prototype={
gaw9(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.U,null,1,null,v)
w.cH(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gaw9().q()
this.bs1()},
B(d){var w=null,v=this.a.c
return C.aE(w,C.hs(new C.a7(42,42,C.c6(this.gaw9(),new B.cAW(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
B.b8f.prototype={
a4(d,e){var w,v,u,t=null,s=e.ea(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.N()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.z=G.mC
d.ae(s,r+2+o*2,w)
w=C.N()
w.saq(D.ee5.av(0,C.bU(s,r)))
d.ae(s,r,w)
v=C.N()
v.b=A.ae
v.c=2.2
v.saq(new C.fT(A.A,0,6.283185307179586,A.x,D.cMQ,t,new C.ml(p)).av(0,C.bU(s,r)))
d.ae(s,r,v)
p=new B.cAV(d)
p.$3(s.ad(0,A.rw),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e49),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.e6_),2.6,0.5+0.5*Math.cos(q))
u=C.hr(t,t,t,t,D.eXE,A.a4,A.ca,t,A.e_,A.c8)
u.ey()
u.a4(d,s.ad(0,new C.u(-u.b.c/2,5)))},
au(d){return d.b!==this.b}}
B.ax_.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.ax0.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.bqL()}}
B.aJ_.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwj.prototype={}
B.fK.prototype={}
B.J5.prototype={
a5(){return"ScreenStyle."+this.b}}
B.m4.prototype={}
B.Ul.prototype={
R(){return new B.biI(null,null)}}
B.biI.prototype={
ga8E(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nW,null,1,null,v)
w.cs(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga8E().q()
this.btS()},
gRq(){var w=this.ga8E().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lY.h(0,this.a.c)
if(v==null)v=D.aMj
return C.c8(w,T.Lf,C.bl(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zn?this.bG4(v):this.chW(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.my,w,w,w,new B.dNq(d),w,w,w,C.nx(w,A.aX,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eZf,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c5z(d){var w
A:{if(D.Ij===d){w=0.46153846153846156
break A}if(D.uy===d){w=0.45
break A}if(D.we===d){w=0.9259259259259258
break A}if(D.Sq===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
chW(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.Ij
A:{if(D.Ij===p){w=44
break A}if(D.uy===p){w=30
break A}if(D.we===p){w=22
break A}if(D.Sq===p){w=26
break A}w=14
break A}v=C.c6(this.ga8E(),new B.dNp(this,w,d,o),q)
if(p===D.a62)v=new C.Dc(D.bwA,v,q)
p=this.c5z(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fG(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A3.Fs,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a8(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.bqj,new C.Q(u,u,u,u),q,q,q),q)},
b5e(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bv(this.gRq()*0.4),0,100),q=d.b===D.Ij,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aT(A.o.u(C.dl(s)),2,"0")+":"+A.a.aT(A.o.u(C.fZ(s)),2,"0"),t,t,t,t,t,t,A.rM,t,t,t),A.b6],x.p)
for(w=0;w<4;++w){v=new C.aT(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bq(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bwi,t,t,t,3))}n.push(A.db)
n.push(D.fkx)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.m(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.DE(A.A,C.p(t,t,A.f,t,t,new C.o(A.b2,t,t,C.m(2),t,t,A.n),t,t,t,A3.Fs,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qh)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.fbM,t,t,t))
return new C.D(new C.Q(p,12,o,2),C.B(n,A.m,t,A.e,A.j,0,t,t),t)},
au9(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d8F,new C.a8(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.at,C.d(d.a,v,1,A.a2,v,v,v,D.f2G,v,v,v)],w))
return C.aE(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dNl(this,d),v,v,v,v,v,v,!1,A.a8)},
bX6(d,e){return this.au9(d,e,!0)},
bWO(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.Sq||n===D.we,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.ki,0.5)
l.toString
l=C.a([k,A.dx,l],x.O)
k=p.b5e(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b3,A.q,1)
w=C.aE(o,C.p(o,C.bw(C.m(23),C.b3(o,o,o,new B.aec(0,p.gRq(),o),A.f1),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hL,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dNj(p),o,o,o,o,o,o,!1,A.a8)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.k1[s]
t.push(new C.cr(A.A,o,o,p.bX6(r,m?58:54),o))}k=C.a([k,A.am,w,A.ac,C.E(C.lZ(0.92,t,v,8,12,A9.vp,o,!1),1)],u)
if(n!==D.a62){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.dd(F.k1,0,C.dJ(4,"count",x.S),x.gD),t=v.$ti,v=new C.bS(v,v.gM(0),t.k("bS<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.au9(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.B(u,A.m,o,A.q4,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.br8,S.ais,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a8(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bzx(d,e){var w=null
return C.p(w,C.v(C.a([this.b5e(d),C.E(C.b3(w,w,w,new B.aec(e,this.gRq(),w),A.f1),1),C.aE(w,C.p(w,C.av(C.d(F.k1[e].a,w,w,w,w,w,w,A0.IN,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dNe(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bG4(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fG(1.5384615384615383,C.p(t,C.c6(this.ga8E(),new B.dNh(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a8(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.bvT,new C.Q(8,8,8,s),t,t,t),t)}}
B.buo.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.N()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.ki,0.4)
t.toString
w.saq(new C.a8(A.ax,A.aC,A.x,C.a([u,A.dx,t],x.O),null,null).av(0,new C.a9(0,0,n,m)))
d.aY(new C.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.dmO
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
au(d){return!0}}
B.aec.prototype={
a4(d,e){return E.ah3(d,e,this.b,this.c)},
au(d){return!0}}
B.aKM.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.aVQ.prototype={}
B.V9.prototype={
R(){return new B.bjh(C.T(x.S,x.N),A.au,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjh.prototype={
gvq(){var w=this.f
return w===$?this.f=B.fZ3(0):w},
a_(){this.a1()
this.lc()
B.zm("laser_maze").bz(new B.e8G(this),x.P)},
lv(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cC(w,v)}this.m(new B.e8H())},
adq(d){var w=this
w.m(new B.e8w(w,d))
B.vR("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c5P(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gdO()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bv((d.a-t)/v)
q=A.k.bv((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvq().b.t(0,p)||p===o.gvq().e||o.gvq().d.ai(0,p))return
o.m(new B.e8x(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cp(new B.e8A(t,B.hnq(t.gvq(),t.r))),q=x.p,p=C.a([new B.dA("Clear mirrors",!1,new B.e8B(t),A.k_,A.aM,s),new B.dA("Skip",!1,new B.e8C(t),D.bER,A.aR,s)],q)
if(t.d>0)p.push(new B.dA("Back",!1,new B.e8D(t),D.bES,A.aR,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dA(""+u,v===t.d,new B.e8E(t,v),s,A.ay,s))}return B.jK(A.ay,A.ha,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eQ(p,s,s),new B.eQ(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bgh.prototype={
a4(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gdO()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dgE(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bx(new C.a9(a5,a6,a8,a4),A.kA)
v=$.W()
u=C.N()
u.r=L.n_.gp(0)
a9.aD(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.dr.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.dr.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ea(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bx(C.cl(p,u,u),A.he)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.bXb.av(0,C.cl(p,a3,a3)))
q=o.H()
w.drawRRect(C.er(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ap,a2,a2,u)
n.F(new C.b5(a7.$1(A.d.gL(a8)).a,a7.$1(A.d.gL(a8)).b))
for(a8=C.dd(a8,1,a2,C.U(a8).c),v=a8.$ti,a8=new C.bS(a8,a8.gM(0),v.k("bS<ak.E>")),v=v.k("ak.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bA(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.W()
a8=C.N()
a8.b=A.ae
a8.c=14
a8.e=A.fB
a8.r=A.ay.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lt
a9.aP(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=4
a8.e=A.fB
a8.r=D.adI.gp(0)
a9.aP(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=1.6
a8.e=A.fB
a8.r=A.c.gp(0)
a9.aP(n,a8)}for(a8=a4.c,a8=C.ea(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.Cj
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.bv).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.aA
i=new C.kh(new C.eq("\u2605",a2,a2,A.cO,a2,a2,a2,a2,a2,a2,new C.G(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.ca,new C.ju(1),a2,a2,a2,a2,A.c8,a2)
i.ey()
j=i.b
h=j.c
j=j.a.c
i.a4(a9,new C.u(m-h/2,k-j.gbc(j)/2))}g=new B.dgH(a7,a3,a9)
a1.c.bI(0,new B.dgF(g))
a4.d.bI(0,new B.dgG(g))
f=a7.$1(a4.e)
a4=C.bx(C.cl(f,o,a3*0.8),A.he)
a8=C.N()
a8.r=A.ay.gp(0)
a9.aD(a4,a8)
v=f.ad(0,new C.u(v,0))
a8=C.N()
a8.r=A.c.gp(0)
a9.ae(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.L)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
s=1-a0
u.c=4*s
u.r=A.aM.j(s).gp(0)
q=u.H()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
au(d){return!0}}
B.Vb.prototype={
R(){var w=x.n
return new B.aDe(A.cI,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDe.prototype={
a_(){this.a1()
this.lc()
B.zm("light_mixer").bz(new B.e8Z(this),x.P)},
lv(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aYc()
w.m(new B.e9_())},
awd(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aC(5)/4)
u.e=t
if(A.d.d7(t,new B.e8K()))u.e[w.aC(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aYc(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hiM(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vU(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vR("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcx8(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cON[A.o.E(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cp(new B.e8T(v,B.hiM(v.e,t))),r=t[0]
r=B.hB(A.ay,""+A.k.V(r*100)+"%","Red",1,0,new B.e8U(v),r)
w=t[1]
w=B.hB(A.bl,""+A.k.V(w*100)+"%","Green",1,0,new B.e8V(v),w)
t=t[2]
return B.jK(A.b8,A.ha,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hB(A.d3,""+A.k.V(t*100)+"%","Blue",1,0,new B.e8W(v),t),new C.bI(A.a7,u,u,new B.fi(A.hz,"Lock it in",new B.e8X(v),A.b2,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bgw.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bx(new C.a9(0,0,n,m),A.qe)
$.W()
w=C.N()
w.r=A.w.gp(0)
d.aD(l,w)
w=d.a
J.by(w.save())
w.clipRRect(C.er(C.bx(new C.a9(0,0,n,m),A.qe)),$.pr(),!0)
v=e.gdO()*0.3
u=e.ea(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.u(0,l)),u.ad(0,new C.u(l,t)),u.ad(0,new C.u(v*0.55,t))]
r=[A.Ee,I.acL,I.ad9]
d.la(new C.a9(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nB
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bx(new C.a9(0,0,n,m),A.qe)
m=C.N()
m.b=A.ae
m.c=2
m.r=A.b3.gp(0)
d.aD(n,m)},
au(d){return!0}}
B.aLd.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwo.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.bul()}}
B.aLe.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwp.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.bum()}}
B.btd.prototype={}
B.a7S.prototype={
B(d){var w=null
return C.c8(C.eC(w,w,w,!0,!0,D.adV,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.amY,w,w,w,new B.ceO(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fA_,w,w,w,1,w,!0),D.adV,C.cz(C.a([D.e7g,C.cp(new B.ceP())],x.p),w,D.bs8,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.W1.prototype={
R(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aE5(w,new C.as(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aE5.prototype={
a_(){this.a1()
this.lc()},
b3e(d){var w=this.d.length
return A.o.E(A.k.bv(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lv(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b3e(v.f)
if(w!==v.x){v.x=w
B.lg("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eId(v))
B.By("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c6M(){if(this.d.length<2)return
this.m(new B.eI9(this))},
aYy(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eI8(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc6L(),p=s.d,o=C.E(C.aE(r,C.b3(r,r,r,new B.buA(p,s.f,r),A.f1),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.f9X,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.awz[A.o.E(v,8)].j(0.9)
t=new C.aT(20,20)
o.push(C.aE(r,C.p(r,new C.x(p[v],r,D.f9d,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bq(t,t,t,t),r,r,A.n),r,r,r,A.fz,A.h7,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eIb(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8))}p=A.c.j(0.07)
return B.jK(A.aM,A.ha,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eQ(o,r,r),C.B(C.a([C.E(C.aM(r,A.T,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.bs(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kG,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eIc(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dn,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new B.fi(A.hy,"Add",s.gc6J(s),A.c,r),A.bp,new B.fi(A.mr,"Spin",q,A.b2,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.buA.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.N()
w.r=D.b9x.gp(0)
a1.ae(d,f,w)
w=C.N()
w.b=A.ae
w.c=3
w.r=A.aM.gp(0)
a1.ae(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bU(d,a0)
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.awz[A.o.E(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c_(o),n,s,!0,m])
m.delete()
o=C.bU(d,a0)
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[C.c_(o),n,s,!0,m])
m.delete()
J.by(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new C.kh(new C.eq(o,i,i,A.cO,i,i,i,i,i,i,D.eYs),A.a4,A.ca,new C.ju(1),i,i,i,i,A.c8,i)
k.ey()
o=k.b
n=o.c
o=o.a.c
k.a4(a1,new C.u(a0-n-16,-o.gbc(o)/2))
f.restore()}f=C.N()
f.r=D.ady.gp(0)
a1.ae(d,20,f)
f=C.N()
f.b=A.ae
f.c=3
f.r=A.aM.gp(0)
a1.ae(d,20,f)
j=new C.aO(h.r,A.ap,i,i,C.a([],x.v))
e-=a0
j.F(new C.b5(g,e+26))
e-=10
j.F(new C.ap(g-14,e))
j.F(new C.ap(g+14,e))
j.F(new C.bF())
e=C.N()
e.r=A.c.gp(0)
a1.aP(j,e)
e=C.N()
e.b=A.ae
e.c=2
e.r=A.aX.gp(0)
a1.aP(j,e)},
au(d){return!0}}
B.UL.prototype={
R(){return new B.biR($,A.bx,0,C.a([],x.X),null,null)}}
B.biR.prototype={
a_(){this.a1()
this.lc()},
lv(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.By("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a4y(900,new B.dTI())}w.m(new B.dTJ())},
aYA(d){return this.m(new B.dTD(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.E(A.k.dw(m),60)),2,"0")
m=C.b3(n,n,n,new B.bpp(l,A.cf,n),A.aNy)
u=C.d(w+":"+v,n,n,n,n,n,n,D.f1E,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.f0J,n,n,n),A.at,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.zz,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d5U[r]
u.push(new B.dA(""+q+" min",o.d===q,new B.dTF(o,q),n,A.cf,n))}m=o.f
p=m?A2.yb:A.iW
m=m?"Pause":"Start"
return B.jK(A.cf,A.ha,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eQ(u,n,n),new B.eQ(C.a([new B.fi(p,m,new B.dTG(o),A.b2,n),new B.fi(A.k_,"Reset",new B.dTH(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.bpp.prototype={
a4(d,e){var w,v,u,t,s=e.ea(A.J),r=e.a/2-14
$.W()
w=C.N()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ae(s,r,w)
w=C.bU(s,r)
v=C.N()
v.b=A.ae
v.c=16
v.d=A.bP
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.saq(new C.fT(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).av(0,C.bU(s,r)))
d.f6(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
au(d){return d.b!==this.b}}
B.TY.prototype={
R(){return new B.bit($,A.bx,0,C.a([],x.X),null,null)}}
B.bit.prototype={
a_(){this.a1()
this.lc()},
lv(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.QQ.h(0,p.d)
w.toString
v=A.d.fb(w,new B.dEA())
u=A.k.E(p.f,v)
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
B.lg("flute",D.bXO[t]+5,1400,0.35)}p.m(new B.dEB())},
gc6P(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.JX("Press Start",0.5)
w=D.QQ.h(0,this.d)
w.toString
v=A.d.fb(w,new B.dEv())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.JX("Breathe in",0.5+0.5*A.dC.aw(0,p))
case 1:return new C.JX("Hold",1)
case 2:return new C.JX("Breathe out",1-0.5*A.dC.aw(0,p))
default:return new C.JX("Hold",0.5)}}}return new C.JX("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc6P(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hw.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hw.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.zD,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kG,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.QQ.gec(D.QQ));w.C();){v=w.gS(w)
o.push(new B.dA(v,r.d===v,new B.dEy(r,v),q,A.hw,q))}w=r.e
v=w?A.a08:A.iW
w=w?"Stop":"Start"
o.push(new B.fi(v,w,new B.dEz(r),A.b2,q))
return B.jK(A.hw,A.ha,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eQ(o,q,q))}}
B.aHu.prototype={}
B.UC.prototype={
R(){return new B.biL(new C.cs(null,x.A),C.a([],x.au),A.az,A.c)}}
B.biL.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mz,s,s,s,new B.dQZ(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.m(18),new C.ev(C.aE(s,C.b3(s,s,s,new B.bkN(t.e,t.x,s),A.f1),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dR_(t),new B.dR0(t),s,s,s,s,s,s,s,s,s,new B.dR1(t),s,s,s,s,!1,A.a8),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cOa[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.F2(v,u,new B.dR2(t,v),!1,s))}u=t.r
return B.jK(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.D(A.bU,p,s),"DRAW PAD",C.v(C.a([new B.eQ(o,s,s),B.hB(A.bA,""+A.k.V(u),"Brush",30,2,new B.dR3(t),u),new B.eQ(C.a([new B.dA("Eraser",t.w,new B.dR4(t),A.FN,A.bA,s),new B.fi(A.rc,"Undo",new B.dR5(t),A.c,s),new B.fi(A.e6,"Clear",new B.dR6(t),A.c,s),new B.fi(A.Nl,"Paper",new B.dR7(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.bkN.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.N()
w.r=this.c.gp(0)
d.aY(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bP
p.e=A.fB
p.b=A.ae
m=r.c
if(m.length===1){q=A.d.gL(m)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
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
i=new C.cU(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bA(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ap(A.d.gal(m).a,A.d.gal(m).b)
o.push(q)
o=k.f
if(o!=null)q.bA(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new C.cE(k.gbK().a.snapshot()):q).a,l)
l.delete()}}},
au(d){return!0}}
B.Vn.prototype={
R(){var w=x.S
return new B.aDo(C.aX(w),C.aX(w))}}
B.aDo.prototype={
a_(){this.a1()
this.arv()},
arv(){var w,v,u=this,t=x.N,s=C.bn(D.das,!0,t)
A.d.CD(s)
w=x.S
v=C.U(s).c
t=C.C(C.dd(s,0,C.dJ(u.d,"count",w),v),t)
A.d.v(t,C.dd(s,0,C.dJ(u.d,"count",w),v))
A.d.CD(t)
u.e=t
u.f.a9(0)
u.r.a9(0)
u.w=0
u.x=!1},
c6K(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lg("bell",12+A.o.E(d,9),150,0.35)
s.m(new B.eel(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gL(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.n8,new B.eem(s,v,u),t)
else{s.x=!0
C.bN(Ae.F5,new B.een(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.Tr,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.D(A.xD,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hB,A.j,0,q,q),q),C.E(C.ig(!0,q,q,A.y,new C.hM(v,8,8,1,q),new B.eer(r),r.e.length,A.bm,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cPC[t]
o.push(new B.dA(s.b,r.d===s.a,new B.ees(r,s),q,A.aR,q))}o.push(new B.fi(D.bEP,"New game",new B.eet(r),A.b2,q))
return B.jK(A.aR,A.ha,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eQ(o,q,q))}}
B.VA.prototype={
R(){return new B.aDK(C.a([],x.t))}}
B.aDK.prototype={
c6O(d){A.d.a9(this.d)
this.w=!0
this.aYz()},
aYz(){this.d.push(A.cI.aC(4))
this.e=0
this.Zs()},
Zs(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zs=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.epd(t))
s=x.H
w=3
return C.b(C.bN(A.lM,null,s),$async$Zs)
case 3:r=t.d,q=C.bn(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aRU(n)
w=7
return C.b(C.bN(new C.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$Zs)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.epe(t))
case 1:return C.h(u,v)}})
return C.i($async$Zs,v)},
aRU(d){this.m(new B.epb(this,d))
B.lg("marimba",D.aoA[d]+5,450,0.55)
C.bN(A.F3,new B.epc(this),x.H)},
c6Q(d){var w,v,u=this
if(!u.w||u.r)return
u.aRU(d)
w=u.d
v=u.e
if(w[v]!==d){E.dF(90,"",600,0,0.5,"saw")
u.m(new B.epf(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.epg(u))
C.bN(A.ie,new B.eph(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.Ty,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.faj,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.avu[v]
u=u.j(q.f===v?1:0.35)
t=new C.aT(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.avu[v].j(0.8),A.J,30)],w):p
r=new C.ay(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aE(p,C.dk(p,p,p,p,A.bc,new C.o(u,p,new C.bO(r,r,r,r),new C.bq(t,t,t,t),s,p,A.n),A.jf,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.epi(q,v),p,p,p,p,p,p,!1,A.a8))}o=C.av(new C.D(A.a9,C.v(C.a([o,A.am,n,A.d7,new C.fG(1,C.lZ(1,l,2,12,12,p,A.dR,!1),p)],m),A.m,p,A.bb,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jK(A.c7,A.ha,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eQ(C.a([new B.fi(A.iW,n,q.gc6N(q),A.b2,p)],m),p,p))}}
B.VV.prototype={
R(){return new B.bjZ(new C.as(A.as,$.aw()))}}
B.bjZ.prototype={
auZ(d){return C.oD(A.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eDv(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d5(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eDE()
l=C.aM(m,A.T,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.bs(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),Ac.wL),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aXH),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kF,"Bill amount",!0,!0,!1,m,m,m,m,D.f7U,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dV,m,m,m,1,m,m,!1,"\u2022",m,new B.eDA(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aP0,!0,A.a4,m,A.an,m,m,m,m)
k=A.b2.j(0.1)
s=C.m(20)
r=C.I(A.b2.j(0.35),A.q,1)
q=x.p
s=C.cz(C.a([l,A.by,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.auZ(w)),t.$2("Total","$"+n.auZ(v)),X.F0,t.$3$big("Each of "+n.f+" pays","$"+n.auZ(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bR,m,m,m)],q),m,A.fA,m,m,A.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cAt[p]
r.push(new B.dA(""+o+"%",A.k.V(n.e)===o,new B.eDB(n,o),m,A.b2,m))}l=n.f
return B.jK(A.b2,A.ha,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eQ(r,"TIP",m),B.hB(A.aR,""+l,"People",20,1,new B.eDC(n),l),new B.eQ(C.a([new B.dA("Round up",n.r,new B.eDD(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.Vl.prototype={
R(){var w=C.a([3,5],x.t)
return new B.bjs(w,A.cI,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjs.prototype={
a_(){this.a1()
this.lc()},
lv(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bv(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aC(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aC(6)+1)
u.f=t
B.a7R("snare",0.5)}u.m(new B.ed0())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hc()
u.w=t
u.x=t?0:3.141592653589793
B.lg("bell",24,400,0.5)}u.m(new B.ed1())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bct(v,o.r>0,n))}u=C.aE(n,C.av(C.bV(A.fQ,m,A.bq,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ecU(o),n,n,n,n,n,n,!1,A.a8)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d5,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aE(n,C.av(C.ed(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.f78,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.ee9,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ecV(o),n,n,n,n,n,n,!1,A.a8)}else{m=o.as
u=C.aE(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eXW,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kG,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ecW(o),n,n,n,n,n,n,!1,A.a8)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d3p[r]
v.push(new B.dA(q.b,o.d===q.a,new B.ecX(o,q),q.c,A.bt,n))}v=C.a([new B.eQ(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hB(A.bt,""+s,"Dice",4,1,new B.ecY(o),s))}if(o.d==="num"){s=o.z
s=B.hB(A.bt,""+s,"From",100,1,new B.ecZ(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hB(A.bt,""+p,"To",1000,2,new B.ed_(o),p)],m))}return B.jK(A.bt,A.ha,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bct.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cI.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cB,14)],x.V)
t=C.a([],x.p)
for(s=D.dly.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.aaH,p,18,p,p,p,p,p,18),p))
return C.eG(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bD,p,p,100),p)}}
B.aKz.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwf.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.btF()}}
B.aKS.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwk.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.btZ()}}
B.aLm.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwu.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.buu()}}
B.aLQ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwG.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.buY()}}
B.b63.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aDm.h(0,t)
$.arg=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,R.nk,u,u,u,new B.crI(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.Np,s,u,u,u,22),u,u,u,new B.crJ(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.D(D.bva,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(F.Ax,u,new C.bO(new C.ay(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.F7,u,u,1/0))
return C.c8(u,A.bX,C.bl(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dA.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aS,s,s,s,16),A.ec],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.D(F.tA,C.aE(s,C.dk(s,C.B(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bc,new C.o(p,s,o,r,s,s,A.n),A.eF,s,s,s,A.h7,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.crE(t),s,s,s,s,s,s,!1,A.a8),s)}}
B.eQ.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.cd(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),1))
return new C.D(A.cz,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.av7.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.auH(d).cHI(q,A.bG,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.a9E(C.kZ(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.B(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A0.IN,A.dM,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fi.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.D(F.tA,C.aG(!1,A.a1,!0,C.m(12),C.aL(!1,C.m(12),!0,new C.D(Al.agM,C.B(C.a([C.X(w.c,u,v,v,v,17),A.ec,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.crD(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ag),v)}}
B.F2.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eWf:u
w=t?A.c:A.b3
w=C.I(w,A.q,t?2.5:1)
return C.aE(u,C.dk(u,u,u,u,A.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hY,u,r,D.agz,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.crK(v),u,u,u,u,u,u,!1,A.a8)}}
B.mB.prototype={
a4y(d,e){var w=C.dj()
w.seF(C.cM(C.dC(0,0,0,d,0,0),new B.crF(this,w,e)))
this.fp$.push(w.bg())},
lc(){var w=this,v=w.qx(new B.crH(w))
v.iT(0)
w.fo$!==$&&C.aP()
w.fo$=v}}
B.aaE.prototype={
bx7(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.L)(w),++q)for(p=A.d.gaf(w[q]);p.C();){o=p.gS(0)
n=J.a6(o)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.L)(w),++q){for(v=A.d.gaf(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gS(0)
n=J.a6(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aP()
g.ax=m
w=g.bAk()
g.ay!==$&&C.aP()
g.ay=w},
bAk(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
Fq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.aaF.prototype={
cDB(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(r.Fq(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.uY.prototype={}
B.OS.prototype={}
B.xV.prototype={}
B.OR.prototype={
fk(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.aov[w.aC(7)]
w=w.hc()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
B.lg(u,v+w-12,2200,0.1)}}
B.US.prototype={
R(){var w=$.aw()
return new B.aCL(new C.cs(null,x.A),new C.as(A.as,w),new B.OR(A.cI),D.d5m,A.au,D.a2B,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCL.prototype={
a_(){var w,v=this
v.a1()
v.lc()
v.a.toString
w=$.hbN
if(w==null)w=$.hbN=B.cuj()
w.bz(new B.dWq(v),x.P)},
q(){var w=this.e
w.U$=$.aw()
w.P$=0
this.bu6()},
cro(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n)q.push(new B.dVT(p[n]).$0())
w.push(q)}this.w=w},
gVH(){var w=this.fy
return w.A(0,A.au)?100:Math.min(w.a,w.b)*0.43},
asF(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
awH(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.asF(d.x,d.w,105/Math.max(w,3))
C.eU()
B.lg("bell",(A.d.cJ(D.a2c,d.c)+1)*3+12,900,0.45)
E.dF(300,"",280,1.4,0.15,"tri")},
lv(d){var w,v,u,t,s,r,q,p=this
p.f.fk(0,d,p.db)
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
c7u(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.au))return null
w=n.fy
v=n.gVH()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVH()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cDB((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c7t(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dVR(w))
return}w.m(new B.dVS(w,v,A.a.i(d).toLowerCase()))},
bN5(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new B.dVP(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bHu,n,n,n,o.gbN4(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mz,n,n,n,new B.dWb(o,d),n,n,n,n,"Share",n)],l),j=C.cp(new B.dWc(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.T,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.bs(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.Di,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bPy,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc7s(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iH,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
w.push(new B.dA(s.a,!1,new B.dWd(o,s),A.mt,A.aR,n))}i.push(new C.D(A.hZ,new C.a7(n,38,C.cz(w,n,n,n,n,A.aO,!1),n),n))}i.push(A.am)
w=C.a([new B.dA("Whole Earth",!1,new B.dWh(o),A.hn,A.aR,n)],l)
for(v=D.aDl.gdK(D.aDl),v=v.gaf(v);v.C();){u=v.gS(v)
w.push(new B.dA(u.a,!1,new B.dWi(o,u),n,A.aR,n))}w.push(new B.dA("Random",!1,new B.dWj(o),A.mr,A.aR,n))
i.push(new B.eQ(w,"GO TO",n))
w=o.z
i.push(B.hB(A.aR,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dWk(o),w))
w=o.dy
i.push(B.hB(A.c7,A.a.aT(A.o.u(A.k.bv(w)),2,"0")+":00","Time",24,0,new B.dWl(o),w))
w=o.fr
i.push(B.hB(A.b2,o.cq9(),"Season",365,0,new B.dWm(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lR:D.G3
i.push(new B.eQ(C.a([new B.dA("Spin",w,new B.dWn(o),D.bCG,A.aR,n),new B.dA("Night",v,new B.dWo(o),A.vz,A.aR,n),new B.dA("Borders",u,new B.dWe(o),D.bCK,A.aR,n),new B.dA("Names",r,new B.dWf(o),X.Nt,A.aR,n),new B.dA("Music",q,new B.dWg(o),p,A.aR,n)],l),n,n))
return B.jK(A.aR,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
cq9(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.aw8[u])v=u
return A.ih[v]+" "+(A.k.bv(w-D.aw8[v])+1)},
c7r(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mO(1,A.o.E((A.d.cJ(D.a2c,t)+1)*47,360),0.55,1).iB()
r=new B.dVN()
q=C.m(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.dm,j,j,j),1),C.aH(j,j,j,j,A.Gk,j,j,j,new B.dVM(this),j,j,j,j,j,A.cc)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hf,j,j,j)
m=D.dkd.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.ab,r.$2("PEOPLE",l?B.fs4(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.GC(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.GC(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.N,v,A.N,m,A.N,C.B(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fs4(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.VR,j,p,q,j,j,A.n),j,j,j,j,D.ah6,j,j,j)}}
B.beI.prototype={
a4(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=C.N()
d7.r=D.As.gp(0)
d8.aY(new C.a9(0,0,0+d4,0+d5),d7)
w=new C.eM()
w.dB(4)
for(d7=d8.a,v=0;v<90;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.25+w.aj()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.u(d4,d5)
o=d2.f
u=C.N()
t=x.O
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.aR.j(0.35),A.K],t),D.cR8,d3).av(0,C.bU(p,o*1.1)))
d8.ae(p,o*1.05,u)
n=C.bU(p,o)
u=C.N()
u.saq(D.eed.av(0,n))
d8.ae(p,o,u)
J.by(d7.save())
u=x.v
d6=new C.aO(d6.r,A.ap,d3,d3,C.a([],u))
d6.F(new C.k1(n))
d8.qu(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.N()
g.b=A.ae
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new B.dcp(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bA(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bA(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.E((A.d.cJ(D.a2c,a7.c)+1)*47,360)
$.W()
b0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mO(1,a9,a3,a8?1:0.62).iB().gp(0)
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fB
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
if(c8!=null)b6.bA(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bA(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bF()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bA(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbK().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbK().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.L)(a5),++b3){d=a5[b3]
$.W()
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.rn
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbK().a.snapshot()):s).a,q)
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
c9=B.hKH(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbc(b2)
c9.a4(d8,new C.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.W()
u=C.N()
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b7l.j(0.78)],t),D.d5J,d3).av(0,C.bU(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ae(p,o,u)}$.W()
d4=C.N()
d4.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dhN,d3).av(0,n))
d8.ae(p,o,d4)
d7.restore()
d7=C.N()
d7.b=A.ae
d7.c=1.4
d7.r=A.fT.j(0.5).gp(0)
d8.ae(p,o,d7)},
au(d){return!0}}
B.aKY.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.aKZ.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.bu5()}}
B.bt8.prototype={}
B.VY.prototype={
R(){return new B.bk2()}}
B.bk2.prototype={
gaRt(){var w=this.d
if(w===$)w=this.d=A.cI.aC(16)
return w},
B(d){var w=null,v=C.eC(w,w,w,!0,!0,D.As,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.amY,w,w,w,new B.eEo(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.ftN,w,w,w,1,w,!0),u=C.m(18),t=A.aR.j(0.1),s=C.I(A.aR.j(0.35),A.q,1),r=x.p
return C.c8(v,D.As,C.cz(C.a([C.p(w,C.B(C.a([D.bGd,A.av,C.E(C.d(D.cUZ[this.gaRt()],w,w,w,w,w,w,D.a7T,w,w,w),1),C.aH(w,w,w,w,D.bQz,w,w,w,new B.eEp(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bD,w,w,w),A.aB,C.cp(new B.eEq())],r),w,A.Yk,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.VJ.prototype={
R(){return B.hL8()}}
B.bjP.prototype={
chX(d){var w=d.c,v=B.hLa(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.lc()},
lv(d){var w,v,u,t=this
t.e.fk(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.chX(w)
u=new C.u(-v.a,-v.b).aG(0,t.w)
v=C.lh(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc7v(){var w=this.ch
return new C.u(w.a/2,w.b/2).ad(0,this.x)},
c7z(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.Ca[s]
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
aYV(d){this.m(new B.ewr(this,d))
C.eU()
B.lg("bell",D.dhY[A.o.E(A.d.cJ(D.Ca,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mz,m,m,m,new B.ewC(n,d),m,m,m,m,"Share",m)],k),i=C.cp(new B.ewD(n,l)),h=C.a([new B.dA("All",!1,new B.ewE(n),A.a0i,A.aM,m)],k)
for(w=0;w<10;++w){v=D.Ca[w]
h.push(new B.dA(v.a,n.z===v,new B.ewF(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hB(A.aM,s,"Time",1,0,new B.ewG(n),u/t)
u=n.w
u=B.hB(A.aM,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.ewH(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lR:D.G3
return B.jK(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eQ(h,"GO TO",m),t,u,new B.eQ(C.a([new B.dA("Orbits",s,new B.ewI(n),m,A.aM,m),new B.dA("Names",r,new B.ewJ(n),m,A.aM,m),new B.dA("Asteroids",q,new B.ewK(n),m,A.aM,m),new B.dA("Music",p,new B.ewL(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c7w(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.ewp(),m=C.m(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.k9,r,r,r),1),C.aH(r,r,r,r,A.Gk,r,r,r,new B.ewo(this),r,r,r,r,r,A.cc)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.Dj,r,r,r)
v=n.$2("WIDTH",B.GC(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.GC(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.ewq().$1(v))
t=d.f
v=C.B(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.at,k,A.N,p,A.N,v,A.N,s,A.N,C.B(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.VR,r,l,m,r,r,A.n),r,r,r,r,D.ah6,r,r,r)}}
B.brb.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.As.gp(0)
a7.aY(new C.a9(0,0,0+a5,0+a6),w)
v=new C.eM()
v.dB(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc7v()
n=a5.w
if(a5.as)for(a6=A.d.gaf(D.Ca),t=new C.f6(a6,new B.eYM()),s=o.a,r=o.b;t.C();){q=a6.gS(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
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
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.5).gp(0)
p=l.H()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=B.hL9(A.d.gL(D.Ca))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.saq(new C.bT(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).av(0,C.bU(o,a6)))
a7.ae(o,a6,t)
t=C.N()
t.saq(D.ee7.av(0,C.bU(o,i)))
a7.ae(o,i,t)
if(a5.at){h=B.hdp("Sun",10.5,A.ad)
h.a4(a7,o.ad(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gaf(D.Ca),t=new C.f6(a6,new B.eYN()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gS(0)
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
a0=C.cl(A.J,j*1.3,j*4.2)
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bL.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c_(a0),p)
p.delete()
w.restore()}a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.rn
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.saq(new C.bT(P.pk,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a1P,a4).av(0,C.bU(new C.u(g,f),j)))
p=a0.H()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
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
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.c.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d_8[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.hdp(d,10.5,A.ad)
h.a4(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
au(d){return!0}}
B.UT.prototype={
R(){var w=x.i
return new B.aCM(new B.OR(A.cI),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCM.prototype={
cuD(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c7y(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e2Q
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
s.m(new B.dWu())},
a_(){this.a1()
this.lc()},
lv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fk(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yI[r]
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
break}}}if(A.d.d7(s,new B.dWX()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(v.length===0||A.d.gal(v).aB(0,i.cx).gcl()>120)v.push(i.cx)
if(v.length>700)A.d.cC(v,0)
if(i.cx.gcl()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bLl()
else n=n==="weight"?p.cBS():p.bDw()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.df5[u]
v.push(new B.dA(t.b,p.d===t.a,new B.dWJ(p,t),t.c,A.cs,o))}v=C.a([new B.eQ(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dA("Hammer",!s,new B.dWK(p),Aj.FZ,A.cs,o),new B.dA("Feather",s,new B.dWL(p),X.N3,A.cs,o),new B.dA(q,r,new B.dWP(p),A.FO,A.aR,o)],w)
q=p.w
A.d.v(v,C.a([new B.eQ(r,o,o),B.hB(A.cs,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dWQ(p),q),new B.eQ(C.a([new B.fi(A.tN,"Drop!",new B.dWR(p),A.b2,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hB(A.cs,""+A.k.V(s)+" kg","Your weight",120,20,new B.dWS(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hB(A.cs,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dWT(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hB(A.cs,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dWU(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hB(A.cs,A.k.aa(r,1)+"x out","View",8,0.5,new B.dWV(p),r),new B.eQ(C.a([new B.fi(A.nj,"Fire!",p.gc7x(),A.b2,o),new B.fi(A.tN,"Falls",new B.dWW(p),A.c,o),new B.fi(A.r4,"Orbit 7.7",new B.dWM(p),A.c,o),new B.fi(D.bFD,"Oval 9",new B.dWN(p),A.c,o),new B.fi(A.BC,"Escape",new B.dWO(p),A.c,o)],w),o,o)],w))}return B.jK(A.cs,A.ha,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bLl(){return new C.D(D.bqb,C.cp(new B.dWt(this)),null)},
cBS(){var w,v,u,t=null,s=[D.eCX,D.eEp,D.eEx,D.eEQ,D.eEv,D.eEW,D.eDw,D.eFi,D.eE9],r=x.p,q=C.a([D.fhO,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.D(A.cz,new C.cm(A.aO,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.x(v.a,t,new C.G(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bD(1,A.bh,new C.Be(new B.dWv(this,v),t),t)],r),t),t))}q.push(A.at)
q.push(D.fk5)
return C.cz(q,t,A.i_,t,t,A.ah,!1)},
bDw(){return C.cp(new B.dWr(this))}}
B.b9U.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=C.N()
e.r=D.As.gp(0)
d.aY(new C.a9(0,0,0+h,0+g),e)
w=new C.eM()
w.dB(2)
for(e=d.a,v=0;v<80;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.aj()*0.5).gp(0)
q=r.H()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.N()
e.saq(new C.bT(A.A,0.5,A.x,i,0,C.a([A.K,A.aR.j(0.35),A.K],x.O),D.d6B,i).av(0,C.bU(g,p*1.1)))
d.ae(g,p*1.06,e)
e=C.N()
e.saq(D.ee1.av(0,C.bU(g,p)))
d.ae(g,p,e)
o=g.ad(0,new C.u(0,-p))
f=f.r
e=x.v
n=new C.aO(f,A.ap,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.F(new C.b5(u-16,s))
n.F(new C.ap(u,t-400*h-4))
n.F(new C.ap(u+16,s))
n.F(new C.bF())
s=C.N()
s.r=A.ak.gp(0)
d.aP(n,s)
s=o.ad(0,new C.u(0,-400*h-6))
u=C.N()
u.r=A.c.gp(0)
d.ae(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aO(f,A.ap,i,i,e)
f=g.a
t=g.b
m.F(new C.b5(f+A.d.gL(u).a*h,t+A.d.gL(u).b*h))
for(u=C.dd(u,1,i,C.U(u).c),s=u.$ti,u=new C.bS(u,u.gM(0),s.k("bS<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bA(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=C.N()
f.b=A.ae
f.c=2.4
f.d=A.bP
f.r=A.cs.j(0.9).gp(0)
d.aP(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.u(f.a*h,f.b*h))
h=C.N()
h.r=A.cs.j(0.4).gp(0)
h.z=G.mC
d.ae(k,7,h)
h=C.N()
h.r=A.c.gp(0)
d.ae(k,4,h)}},
au(d){return!0}}
B.VB.prototype={
R(){return new B.bjM(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjM.prototype={
a_(){this.a1()
this.lc()},
lv(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.PL[l.e],i=D.PL[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mz,k,k,k,new B.epl(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.bqK(f,g,v,k),A.f1),1)
r=g.a
q=v<10?A.k.aa(v,1):B.GC(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.i7,A.L,k,k)
o=B.GC(v*v*v)
n=A.a.cb(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.at,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A6.IQ,A.L,k,k),A.bB,C.d(p+": "+B.GC(w*2)+" km wide. "+r+": "+B.GC(h*2)+" km wide.",k,k,k,k,k,k,A6.De,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bsi,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.PL[m]
r.push(new B.dA(w.a,l.e===m,new B.epm(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.PL[m]
w.push(new B.dA(s.a,l.f===m,new B.epn(l,m),k,C.b0(s.c),k))}return B.jK(A.bZ,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ev(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eQ(r,"FIRST",k),new B.eQ(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.bqK.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.N()
w.r=D.Wv.gp(0)
d.aY(new C.a9(0,0,0+h,0+g),w)
v=new C.eM()
v.dB(6)
for(w=d.a,u=0;u<70;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.u(h,g)
w=new B.eWV(d)
t=this.c
w.$3(m,o,C.b0(t.c))
s=o-n
l=new C.u(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.b0(s.c))
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.ad.gp(0)
d.ae(l,n+3,w)
k=C.hr(i,i,i,i,C.de(i,i,i,i,i,i,i,i,i,D.f3r,s.a),A.a4,A.ca,i,A.e_,A.c8)
k.ey()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbc(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbc(g)-6
h=g}k.a4(d,l.ad(0,new C.u(-w/2,h)))
j=C.hr(i,i,i,i,C.de(i,i,i,i,i,i,i,i,i,D.f6K,t.a),A.a4,A.ca,i,A.e_,A.c8)
j.ey()
t=j.b
h=t.c
t=t.a.c
j.a4(d,m.ad(0,new C.u(-h/2,-t.gbc(t)/2)))},
au(d){return!0}}
B.aL_.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwm.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.bu7()}}
B.aLy.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwA.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.buG()}}
B.aLB.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwC.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.buJ()}}
B.Pm.prototype={}
B.TW.prototype={
R(){return B.hL6()}}
B.bis.prototype={
a_(){this.a1()
this.lc()},
lv(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fk(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dF(70,"",500,0.3,0.5,"sine")}}A.d.bo(w,new B.dE1())},
aYW(d){var w,v,u,t=this.Q
if(t.A(0,A.au))return
w=this.gb6P()
v=d.aB(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcl()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.Pm(t,u,1.2,new C.vA(1,30+A.cI.aj()*40,0.9,0.7).iB()))
B.lg("bell",60+A.k.V(12-u)*2,400,0.35)},
gb6P(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.K(m,new B.dDQ(),C.U(m).k("K<1,M>")).fb(0,A.uY),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mz,n,n,n,new B.dDR(o,d),n,n,n,n,"Share",n)],m)
v=C.cp(new B.dDS(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fs4(s)+" Suns"
t=B.hB(A.bt,s,"Mass",1,0,new B.dDU(o),u/t)
u=C.a([new B.dA("Star (10)",!1,new B.dDV(o),n,A.bt,n),new B.dA("Cygnus X-1 (21)",!1,new B.dDW(o),n,A.bt,n),new B.dA("Milky Way core (4 million)",!1,new B.dDX(o),n,A.bt,n),new B.dA("M87 (6.5 billion)",!1,new B.dDY(o),n,A.bt,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lR:D.G3
return B.jK(A.bt,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eQ(u,"LIKE",n),new B.eQ(C.a([new B.dA("Glowing ring",s,new B.dDZ(o),n,A.bt,n),new B.dA("Bent light",r,new B.dE_(o),n,A.bt,n),new B.dA("Music",q,new B.dE0(o),p,A.bt,n),new B.fi(A.k_,"Clear",new B.dDT(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
ae6(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.f_p,w,w,w),A.bB,C.d(e,w,2,w,w,w,w,L.zx,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b9i.prototype={
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.N()
w.r=D.bfi.gp(0)
b2.aY(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb6P()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.L)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.u(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new C.u(w+k/h*g,v+j/h*g)}}k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.N()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=R.QV
b2.ae(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.v5,A.fk,d)
n.toString
k=Math.cos(a4)
$.W()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.H()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=n.j(b1).gp(0)
f=k.H()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.W()
b1=C.N()
b1.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cMi,null).av(0,C.bU(u,b0)))
b2.ae(u,b0,b1)
b1=C.N()
b1.r=A.w.gp(0)
b2.ae(u,s,b1)
b1=C.N()
b1.b=A.ae
b1.c=1
b1.r=A.bt.j(0.55).gp(0)
b2.ae(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.L)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.c=4.2/Math.sqrt(a8)
n.d=A.bP
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=k.j(0.2).gp(0)
o.z=G.mC
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
au(d){return!0}}
B.aeo.prototype={}
B.UP.prototype={
R(){var w=x.r,v=x.g
return new B.biU(new C.cs(null,x.A),new B.OR(A.cI),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.biU.prototype={
a_(){this.a1()
this.ZF()
this.lc()},
ZF(){var w,v,u,t,s,r,q,p,o=this,n=new C.eM()
n.dB(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.aeo(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aC(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hc()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.aeo(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cuu(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e4j
k.cx=D.e4m
w=new C.eM()
w.dB(9)
v=k.cy
A.d.a9(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.aeo(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
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
for(s=k.ay,r=x.S,s=C.dd(s,0,C.dJ(900,"count",r),C.U(s).c),o=s.$ti,s=new C.bS(s,s.gM(0),o.k("bS<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.dd(u,0,C.dJ(900,"count",r),C.U(u).c),r=u.$ti,u=new C.bS(u,u.gM(0),r.k("bS<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dF(110,"",900,0.5,0.45,"sine")},
lv(d){var w,v,u,t,s,r,q,p=this
p.e.fk(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aB(0,p.fx)
s=Math.max(0.25,t.gcl())
r=t.ez(0,s).aG(0,0.9/(s*s))
w=p.fy.ad(0,r.aG(0,u))
p.fy=w
v=p.cx.aB(0,r.aG(0,u))
p.cx=v
w=p.fx.ad(0,w.aG(0,u))
p.fx=w
v=p.CW.ad(0,v.aG(0,u))
p.CW=v
q=new B.dV1(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mz,r,r,r,new B.dUS(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bey(s,r),A.au),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bG,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ag.a78,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bU,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d2e[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dA(u.b,o,new B.dUT(s,u),r,A.h2,r))}l.push(new B.dA("Collide",s.ch,new B.dUU(s),A.y0,A.bZ,r))
o=C.a([new B.eQ(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hB(A.h2,""+n,"Arms",6,2,new B.dUV(s),n)
l=s.r
A.d.v(o,C.a([n,B.hB(A.h2,A.k.aa(l,1),"Winding",6,0.8,new B.dUW(s),l)],q))}n=s.as
o.push(B.hB(A.h2,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dUX(s),n))
n=s.ax
o.push(B.hB(A.h2,A.k.aa(n,1)+"x","Speed",4,0,new B.dUY(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lR:D.G3
o.push(new B.eQ(C.a([new B.dA("Dark matter",n,new B.dUZ(s),r,A.bt,r),new B.dA("You are here",l,new B.dV_(s),r,A.aM,r),new B.dA("Music",w,new B.dV0(s),t,A.h2,r)],q),r,r))
return B.jK(A.h2,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ev(new C.an(A.W,r,A.b0,A.r,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.bey.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.N()
w.r=D.bhl.gp(0)
a3.aY(new C.a9(0,0,0+a1,0+a2),w)
v=new C.eM()
v.dB(3)
for(w=a3.a,u=0;u<90;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.15+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.u(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.N()
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.c9W,a0).av(0,C.bU(o,a2)))
a3.ae(o,a2,t)}m=new B.d9w(a1.as)
a2=n*0.3
t=C.N()
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.h3.j(0.85),A.aF.j(0.3),A.K],x.O),a0,a0).av(0,C.bU(o,a2)))
a3.ae(o,a2,t)
if(!a1.ch){l=C.N()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.E(q,360)
l.r=new H.mO(1,r,q>200?0.45:0.55,1).iB().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.H()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.W()
a2=C.N()
a2.b=A.ae
a2.c=1.6
a2.r=A.aM.gp(0)
a3.ae(g,9,a2)
f=C.hr(a0,a0,a0,a0,D.eXu,A.a4,A.ca,a0,A.e_,A.c8)
f.ey()
f.a4(a3,g.ad(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.biy.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bdq.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.N()
w.r=A.h3.gp(0)
a3.ae(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.N()
w.r=A.is.gp(0)
a3.ae(a1,5,w)}},
au(d){return!0}}
B.Vx.prototype={
R(){return new B.bjL(new C.cs(null,x.A),new B.OR(A.cI),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjL.prototype={
a_(){this.a1()
this.lc()},
lv(d){var w,v,u,t=this
t.e.fk(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.E(t.r+d*0.04*v,1)
else{w=A.k.E(t.w+d*0.05*v,1)
t.w=w
u=A.k.bv(w*4)
if(u!==A.k.bv(t.as))B.lg("bell",60+u*4,500,0.35)
t.as=u}},
gcq8(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcgz(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mz,q,q,q,new B.eoA(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ev(C.b3(q,q,q,new B.bq_(r,q),A.f1),r.d),1)
if(r.f==="seasons")w=r.gcq8()
else{w=r.gcgz()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A7.Tp,A.L,q,q),A.f,q,q,q,q,q,q,q,K.ahg,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A2.yb:A.iW
t=r.Q
s=t?A.lR:D.G3
s=C.a([new B.eQ(C.a([new B.dA("Seasons",n==="seasons",new B.eoB(r),A.yp,A.bu,q),new B.dA("Moon phases",n==="moon",new B.eoC(r),A.vz,A.bu,q),new B.dA(u,!1,new B.eoD(r),v,A.bu,q),new B.dA("Music",t,new B.eoE(r),s,A.bu,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hB(A.bu,D.d1z[A.o.E(A.k.bv(n*12),12)],"Month",1,0,new B.eoF(r),n)
v=r.z
A.d.v(s,C.a([n,B.hB(A.bu,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.eoG(r),v)],p))}else{p=r.w
s.push(B.hB(A.bu,""+(A.k.bv(p*29.5)+1),"Day of month",1,0,new B.eoH(r),p))}p=r.y
s.push(B.hB(A.bu,A.k.aa(p,1)+"x","Speed",4,0.2,new B.eoI(r),p))
return B.jK(A.bu,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.bq_.prototype={
a4(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=C.N()
b8.r=D.As.gp(0)
b9.aY(new C.a9(0,0,0+b5,0+b6),b8)
w=new C.eM()
w.dB(4)
for(b8=b9.a,v=0;v<70;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.aj()*0.4).gp(0)
q=r.H()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.u(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.cl(p,n*2,o*2)
t=C.N()
t.b=A.ae
t.c=1
t.r=A.b3.gp(0)
b9.hP(u,t)
t=C.N()
t.saq(D.ee3.av(0,C.bU(p,34)))
b9.ae(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aB(0,l).ez(0,p.aB(0,l).gcl())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.bfe.gp(0)
b9.ae(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ap,b4,b4,C.a([],x.v))
b7.F(new C.k1(C.bU(A.J,k)))
b9.qu(0,b7)
b7=i.aG(0,k).aG(0,0.35)
s=k*1.1
b6=C.N()
b6.saq(D.eec.av(0,C.bU(A.J,s)))
b9.ae(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aG(0,k).aG(0,1.7)
b5=h.aG(0,k).aG(0,1.7)
t=C.N()
t.c=2
t.r=A.cf.gp(0)
b9.bC(b7,b5,t)
t=h.aG(0,k).aG(0,1.7)
b5=C.N()
b5.r=A.cf.gp(0)
b9.ae(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.hr(b4,b4,b4,b4,C.de(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aQv,b5),A.a4,A.ca,b4,A.e_,A.c8)
f.ey()
f.a4(b9,l.ad(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.N()
r.b=A.ae
r.c=1
r.r=A.b3.gp(0)
b9.ae(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.N()
r.saq(new C.bT(new C.da(-0.5,0),1.1,A.x,b4,0,C.a([D.baZ,D.afb],x.O),D.cTY,b4).av(0,C.bU(p,k)))
b9.ae(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.b8i.gp(0)
b9.ae(a1,a2,r)
J.by(b8.save())
b7=b7.r
r=x.v
d=new C.aO(b7,A.ap,b4,b4,C.a([],r))
d.F(new C.k1(C.bU(a1,a2)))
b9.qu(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.N()
a3.r=A.bO.gp(0)
b9.aY(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aB(0,p).ez(0,a1.aB(0,p).gcl())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.asg[a5]
a7=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aR.j(0.45).gp(0)
a7.z=A.jo
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.N()
b6.r=D.b8d.gp(0)
b9.ae(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.by(b8.save())
b6=new C.aO(b7,A.ap,b4,b4,C.a([],r))
b6.F(new C.k1(C.bU(a8,a9)))
b9.qu(0,b6)
s=s.w
b1=new C.aO(b7,A.ap,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.F(new C.b5(u,b5))
b6=b2>0
b1.aBV(new C.u(u,t+a9),b6,new C.aT(a9,a9))
if(b0<0.5)b6=b2<0
b1.aBV(new C.u(u,b5),b6,new C.aT(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=A.bO.gp(0)
b9.aP(b1,b6)
b8.restore()
b8=C.N()
b8.b=A.ae
b8.c=1
b8.r=A.b3.gp(0)
b9.ae(a8,a9,b8)
b3=C.hr(b4,b4,b4,b4,D.eXv,A.a4,A.ca,b4,A.e_,A.c8)
b3.ey()
b3.a4(b9,a8.ad(0,new C.u(-b3.b.c/2,a9+6)))}},
au(d){return!0}}
B.aKw.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwe.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.btC()}}
B.aKV.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwl.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.bu1()}}
B.aLx.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
B.bwz.prototype={
q(){var w,v,u
for(w=this.fp$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.fo$
w===$&&C.c()
w.q()
this.buF()}}
var z=a.updateTypes(["~()","R(to)","R(a41)","az<~>()","R(Cb)","H(to,H)","M(M,to)","R(C7)","R(YS)","R(aaZ)","R(uY)","R(a2F)","R(nj)","R(a_o)","R(abM)","H(H)","U1()","UD()","TS()","UR()","V9()","Vb()","U0()","Vv()","VK()","Vw()","Vs()","VR()","U_()","VW()","R(my)","Vm()","Vr()","aet(Y,H)","adl(Y,H)","~(a4<@,@>)","H(C7,C7)","n(eb)","R(aej)","R(a06)","R(Cl)","R(abt)","R(adp)","R(abc)","H(H,qG)","H(H,Cb)","n(qG)","~(qG,ai<n>,H)","qG?(Cb)","R(qG)","r(n,a_U)","R(PD)","~(Ao)","R(abj)","M(H?)","VY()","R(Fz)","R(acB)","M(H)","UE()","M(Pm)","R(a9S)","TX()","a7S()","~(AW,n,u,w,M)","~(n,to)","Vp()","V4(Y)","N3(Y)","Ul(Y,br<M>,br<M>)","W1()","UL()","TY()","UC()","Vn()","VA()","VV()","Vl()","~(n)","cq(aaF)","R(aaE)","US()","VJ()","UT()","TW()","UP()","VB()","Vx()","Un()","R(Pm)","~(b9)"])
B.fue.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fkK.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gL(d.e.split(". "))+"."},
$S:z+37}
B.frc.prototype={
$1(d){var w
if(!this.a.Lo(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.frd.prototype={
$1(d){return d.x},
$S:z+1}
B.fub.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fuc.prototype={
$1(d){var w
if(!this.a.Lo(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fud.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e5G.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e5H.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e5I.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m9(v,A.dU,A.id)}},
$S:8}
B.e5T.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a9(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e5U.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e5P.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e5N.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dC(0,0,0,d,0,0),new B.e5O(w,this.b,e)))},
$S:1835}
B.e5O.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e5Q.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVK().aja(0,u[1],u[2],u[3])
u[4].bI(0,new B.e5L(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e5M(w.a,v,w.f,w.r))},
$S:0}
B.e5L.prototype={
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
B.e5M.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bv(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e5R.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVK().ajX(t,u[1],s,u[3])
E.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e5K(w.a,v,w.e,w.f))},
$S:0}
B.e5K.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bv(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e5S.prototype={
$0(){E.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e5J(w,this.b))},
$S:0}
B.e5J.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e5X.prototype={
$0(){var w=this.a
return w.m(new B.e5W(w))},
$S:0}
B.e5W.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e5Y.prototype={
$0(){var w=this.a
return w.m(new B.e5V(w))},
$S:0}
B.e5V.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e5Z.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.N9()},
$S:0}
B.e6_.prototype={
$0(){return this.a.XJ(this.b)},
$S:0}
B.e60.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.N9():w.aUL()},
$S:2}
B.e61.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.N9():w.aUL()},
$S:0}
B.elM.prototype={
$2(d,e){return d+e},
$S:1836}
B.em5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.em4(w,d))},
$S:142}
B.em4.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.em6.prototype={
$0(){},
$S:0}
B.em7.prototype={
$0(){},
$S:0}
B.elO.prototype={
$0(){return this.a.m(new B.elN(this.b,this.c))},
$S:0}
B.elN.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.elD.prototype={
$1(d){return this.a.cx===d},
$S:33}
B.elE.prototype={
$1(d){return this.a.cx=d},
$S:28}
B.elF.prototype={
$1(d){return this.a.cy===d},
$S:33}
B.elG.prototype={
$1(d){return this.a.cy=d},
$S:28}
B.elH.prototype={
$1(d){return this.a.db===d},
$S:33}
B.elI.prototype={
$1(d){return this.a.db=d},
$S:28}
B.elJ.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:33}
B.elK.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.K(0,d)},
$S:28}
B.elL.prototype={
$0(){var w=this.a
return w.m(w.gavB())},
$S:0}
B.elB.prototype={
$1(d){return this.a.$1(!0)},
$S:79}
B.elC.prototype={
$1(d){return this.a.$1(!1)},
$S:126}
B.elA.prototype={
$1(d){return this.a.$1(!1)},
$S:180}
B.elZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bge(o,p),n)
w=this.b
v=B.byW("WORLD",w.a,w.c)
u=B.byW("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cf:A.b2
t=B.byW("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.C4[o.db].d?A.cf:A.c
q=x.p
s=C.a([v,u,t,B.byW("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.byW("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.B(s,A.m,p,A.hB,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bCu(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rh[w].a+".":"You landed on every world!"
v=C.a([new B.fi(A.mv,"Again",new B.elU(o),A.c,p),new B.fi(A.oK,"Rebuild",new B.elV(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fi(A.iV,"Next world",new B.elW(o),A.b2,p))
n.push(B.hh6("Perfect landing!",w,A.b2,v))}if(o.as==="crashed")n.push(B.hh6("Crash!",o.at,A.cf,C.a([new B.fi(A.mv,"Try again",new B.elX(o),A.b2,p),new B.fi(A.oK,"Rebuild",new B.elY(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b0,A.r,n,p)},
$S:64}
B.elU.prototype={
$0(){var w=this.a
return w.m(w.gavB())},
$S:0}
B.elV.prototype={
$0(){var w=this.a
return w.m(new B.elR(w))},
$S:0}
B.elR.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.elW.prototype={
$0(){var w=this.a
return w.m(new B.elQ(w))},
$S:0}
B.elQ.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.elX.prototype={
$0(){var w=this.a
return w.m(w.gavB())},
$S:0}
B.elY.prototype={
$0(){var w=this.a
return w.m(new B.elP(w))},
$S:0}
B.elP.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.em_.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.elT(v,w))},
$S:0}
B.elT.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.em0.prototype={
$1(d){return this.a.y=d},
$S:9}
B.em1.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.em2.prototype={
$1(d){return this.a.z=d},
$S:9}
B.em3.prototype={
$0(){var w=this.a
return w.m(new B.elS(w))},
$S:0}
B.elS.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dEt.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hcr
if(q==null)q=$.hcr=B.cEx()
w=3
return C.b(C.iM(C.a([q,$.qP().beR("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kz(0,C.cP(J.q(s,1)))
q.m(new B.dEs(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:51}
B.dEs.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dE5.prototype={
$0(){return this.a.bTM(C.aU(J.q(this.b,"group")))},
$S:0}
B.dE6.prototype={
$1(d){return A.a.aT(A.o.fT(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:295}
B.dEu.prototype={
$0(){return B.a7R("kick",0.25)},
$S:0}
B.dE7.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dE8.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dE9.prototype={
$0(){return B.a7R("kick",0.5)},
$S:0}
B.dEa.prototype={
$0(){return E.dF(1300+this.a.R8.aC(900),"",40,0,0.2,"square")},
$S:0}
B.dEc.prototype={
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
u=w}if(u.cx!=null&&!A.d.b4(u.d.e,new B.dEb(u)))u.cx=null
u.go=0},
$S:0}
B.dEb.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.axj(d)},
$S:z+11}
B.dE2.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dE3.prototype={
$0(){var w=this.a
return w.m(w.gc39())},
$S:0}
B.dE4.prototype={
$0(){return this.a.agN(null)},
$S:0}
B.dEj.prototype={
$0(){var w=this.a.as
return w==null?null:w.eV(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dEk.prototype={
$0(){return this.a.cyC(this.b.a)},
$S:0}
B.dEl.prototype={
$0(){return this.a.agN(this.b)},
$S:0}
B.dEm.prototype={
$1(d){var w=this.a
return w.m(new B.dEi(w,d))},
$S:6}
B.dEi.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dEn.prototype={
$0(){var w=this.a
return w.m(new B.dEh(w,this.b))},
$S:0}
B.dEh.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dEo.prototype={
$0(){var w=this.a
return w.m(new B.dEg(w))},
$S:0}
B.dEg.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dEp.prototype={
$0(){var w=this.a
return w.m(new B.dEf(w))},
$S:0}
B.dEf.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eV(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.K_},
$S:0}
B.dEq.prototype={
$0(){var w=this.a
return w.m(new B.dEe(w))},
$S:0}
B.dEe.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aXl()
else w.p2=null},
$S:0}
B.dEr.prototype={
$0(){var w=this.a
return w.m(new B.dEd(w))},
$S:0}
B.dEd.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.c_S.prototype={
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
$S:322}
B.c_T.prototype={
$1(d){var w=new C.rH([],[]).pA(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:602}
B.feO.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)},
$S:215}
B.feP.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)||w.h(d,1)},
$S:215}
B.feQ.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)!==w.h(d,1)},
$S:215}
B.feX.prototype={
$1(d){return!J.q(d,0)},
$S:215}
B.feY.prototype={
$1(d){var w=J.a6(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:215}
B.feZ.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:215}
B.dGE.prototype={
$1(d){return this.a.ask(0)},
$S:8}
B.dGi.prototype={
$0(){var w=this.b
return this.a.cx=new C.K(w,C.hYg(),C.U(w).k("K<1,H>")).fL(0)},
$S:0}
B.dGl.prototype={
$1(d){return""+d},
$S:81}
B.dGF.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dGg.prototype={
$1(d){return this.a.ask(this.b)},
$S:8}
B.dGh.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aw2(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.my(0,d,a1.m0(0.15,0.3))
u=a1.my(0,d,a1.m0(0.15,0.62))
t=a1.my(0,"and",a1.m0(0.48,0.46))
s=a1.my(0,a0,a1.m0(0.82,0.46))
a1=t.a
w.push(new B.nj(v.a,a1,0))
w.push(new B.nj(u.a,a1,1))
w.push(new B.nj(a1,s.a,0))
break
case 1:v=a1.my(0,d,a1.m0(0.12,0.25))
u=a1.my(0,d,a1.m0(0.12,0.65))
r=a1.my(0,"xor",a1.m0(0.46,0.25))
q=a1.my(0,"and",a1.m0(0.46,0.65))
p=a1.aw1(0,a0,a1.m0(0.82,0.25),0)
o=a1.aw1(0,a0,a1.m0(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.nj(a1,n,0))
m=u.a
w.push(new B.nj(m,n,1))
l=q.a
w.push(new B.nj(a1,l,0))
w.push(new B.nj(m,l,1))
w.push(new B.nj(n,p.a,0))
w.push(new B.nj(l,o.a,0))
break
case 2:k=a1.my(0,"clock",a1.m0(0.15,0.4))
j=a1.my(0,"not",a1.m0(0.45,0.65))
s=a1.my(0,a0,a1.m0(0.82,0.3))
i=a1.my(0,"buzzer",a1.m0(0.82,0.65))
a1=k.a
w.push(new B.nj(a1,s.a,0))
n=j.a
w.push(new B.nj(a1,n,0))
w.push(new B.nj(n,i.a,0))
break
default:h=a1.my(0,d,a1.m0(0.12,0.25))
g=a1.my(0,d,a1.m0(0.12,0.7))
f=a1.my(0,"nor",a1.m0(0.5,0.25))
e=a1.my(0,"nor",a1.m0(0.5,0.7))
s=a1.my(0,a0,a1.m0(0.86,0.25))
a1=f.a
w.push(new B.nj(g.a,a1,0))
n=e.a
w.push(new B.nj(n,a1,1))
w.push(new B.nj(h.a,n,0))
w.push(new B.nj(a1,n,1))
w.push(new B.nj(a1,s.a,0))}},
$S:0}
B.dGm.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aw2(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.C7(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.my(0,w.e,o.m0(0.86,0.5))},
$S:0}
B.dGb.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dGc.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dGd.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dGe.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dGf.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.ac8(this.c)
if(v.ax)B.By("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gL(w)
v.CW=!1
if(v.ax)E.dF(140,"",250,0,0.3,"square")}},
$S:0}
B.dGn.prototype={
$0(){},
$S:0}
B.dGo.prototype={
$0(){return A.d.cC(this.a.e,this.b)},
$S:0}
B.dGp.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dGk.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bo(w.e,new B.dGj(v))
w.cy=null},
$S:0}
B.dGj.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dGa.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.my(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dGy.prototype={
$0(){var w=this.a
return w.m(new B.dGx(w))},
$S:0}
B.dGx.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dGz.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.x=u
return C.aE(A.c4,C.jz(C.b3(w,w,w,new B.bam(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dGs(v),w,w,w,new B.dGt(v),new B.dGu(v),new B.dGv(v),w,w,w,w,w,w,w,w,w,w,new B.dGw(v),w,w,w,!1,A.a8)},
$S:35}
B.dGw.prototype={
$1(d){return this.a.c4S(d.b)},
$S:50}
B.dGu.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cdk(u)
if(t!=null){v.as=t
v.at=u
return}w=v.awQ(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aB(0,u)}},
$S:43}
B.dGv.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dGt.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bXn(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bo(v,new B.dGq(w))
u=t.as
u.toString
v.push(new B.nj(u,w.a,w.b))
C.jR()}}t.z=t.as=null},
$S:37}
B.dGq.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dGs.prototype={
$1(d){return this.a.auS(d.b)},
$S:297}
B.dGA.prototype={
$0(){return this.a.byn(this.b.a)},
$S:0}
B.dGB.prototype={
$0(){return this.a.ask(this.b.a)},
$S:0}
B.dGC.prototype={
$0(){var w=this.a
return w.m(new B.dGr(w))},
$S:0}
B.dGr.prototype={
$0(){var w=this.a
w.aw2(0)
w.ay=null},
$S:0}
B.dGD.prototype={
$0(){return this.a.cur(this.b)},
$S:0}
B.cLj.prototype={
$0(){var w=this,v=null,u=C.hr(v,v,v,v,C.de(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.ca,v,A.e_,A.c8)
u.ey()
return u},
$S:283}
B.dMt.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dMs.prototype={
$0(){return this.a.d=null},
$S:0}
B.dMv.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bZ9()},
$S:118}
B.dMu.prototype={
$0(){return C.a5(this.a,!1).lR()},
$S:0}
B.ffe.prototype={
$0(){return D.dYK},
$S:z+55}
B.fff.prototype={
$0(){return D.dwS},
$S:z+59}
B.ffg.prototype={
$0(){return D.dtK},
$S:z+62}
B.ffr.prototype={
$0(){return D.dY9},
$S:z+63}
B.fft.prototype={
$0(){return D.dDg},
$S:z+66}
B.ffu.prototype={
$0(){return D.dwN},
$S:z+88}
B.ffv.prototype={
$0(){return D.dwQ},
$S:z+17}
B.ffw.prototype={
$0(){return D.dpV},
$S:z+18}
B.ffx.prototype={
$0(){return D.dzl},
$S:z+19}
B.ffy.prototype={
$0(){return D.dAZ},
$S:z+20}
B.ffz.prototype={
$0(){return D.dB0},
$S:z+21}
B.ffh.prototype={
$0(){return D.dvZ},
$S:z+22}
B.ffi.prototype={
$0(){return D.dG_},
$S:z+23}
B.ffj.prototype={
$0(){return D.dXR},
$S:z+24}
B.ffk.prototype={
$0(){return D.dVT},
$S:z+25}
B.ffl.prototype={
$0(){return D.dEF},
$S:z+26}
B.ffm.prototype={
$0(){return D.dXZ},
$S:z+27}
B.ffn.prototype={
$0(){return D.dvY},
$S:z+28}
B.ffo.prototype={
$0(){return D.dY8},
$S:z+29}
B.ffp.prototype={
$0(){return D.dw_},
$S:z+16}
B.ffq.prototype={
$0(){return D.dBg},
$S:z+31}
B.ffs.prototype={
$0(){return D.dEE},
$S:z+32}
B.eWs.prototype={
$2(d,e){return new B.aet($.bDo()[e],new B.eWr(e,this.a),null)},
$S:z+33}
B.eWr.prototype={
$0(){var w=this.a,v=F.aDm.h(0,$.bDo()[w].a)
$.arg=v==null?"music":v
C.a5(this.b,!1).c5(C.e8(new B.eWp(w),!1,null,x.H))},
$S:0}
B.eWp.prototype={
$1(d){return $.bDo()[this.a].e.$0()},
$S:40}
B.eWt.prototype={
$2(d,e){return new B.adl(D.aw9[e],new B.eWq(this.a,e),null)},
$S:z+34}
B.eWq.prototype={
$0(){return this.a.d.$1(D.aw9[this.b])},
$S:0}
B.eW8.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eW7.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eW6.prototype={
$1(d){var w=this
return new C.e0(new B.eW5(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eW5.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fhz,A.at,D.fo1,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aT(12,12)
m=new C.aT(12,12)
m=C.a([new C.bD(1,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.Di,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bq(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iH,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new C.bD(2,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.Di,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bq(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iH,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dgU[l]
j=new C.aT(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}h=A.d.gL(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}g=A.d.gL(i)}else g=A.bG
f=new C.ay(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aE(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aS,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bq(j,j,j,j),d,d,A.n),d,d,d,A.fz,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eW3(a3,p,u,k),d,d,d,d,d,d,!1,A.a8))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.f7p,d,d,d,d,d,d,d,d,d),A.am,new C.cm(A.aO,A.e,A.j,A.m,d,A.p,d,0,m,d),A.N,new C.a7(d,44,C.cz(n,d,d,d,d,A.aO,!1),d),A.aB],w))}v.push(C.bG(A.zF,new B.eW4(t,r,q,u,a2),d))
return new C.D(new C.Q(0,0,0,a1.f.d),C.bl(!0,new C.cS(new C.aY(0,1/0,0,a0.a.b*0.86),C.cz(v,d,A5.vq,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:106}
B.eW3.prototype={
$0(){var w=this
return w.a.$1(new B.eW2(w.b,w.c,w.d))},
$S:0}
B.eW2.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eW4.prototype={
$0(){var w=this,v=w.a
v.m(new B.eW1(v,w.b,w.c,w.d))
C.a5(w.e,!1).O(null)},
$S:0}
B.eW1.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=C.C(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=C.C(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=C.C(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
B.eWg.prototype={
$0(){var w=this.a
return w.m(new B.eWf(w))},
$S:0}
B.eWf.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eWh.prototype={
$0(){return B.qO(this.b,this.a.f,"scene")},
$S:0}
B.eWi.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gL(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZ1().x
w===$&&C.c()
return C.c0(v,new C.o(v,v,v,v,v,new C.bT(D.aW6,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bX],x.O),v,v),A.n),A.be)},
$S:326}
B.eWj.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f4(A.A,C.c6(new C.h5(C.a([u.gtU(),u.gZ1()],x.dS)),new B.eWe(u,this.b,v),w),A.f,A.ei),w,w,w)},
$S:259}
B.eWe.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtU().x
r===$&&C.c()
w=r<0.9?1:1-B.bqj(r,0.9,0.98)
v=s.gZ1().x
v===$&&C.c()
u=A.dC.aw(0,v)
switch(s.gaw3().a){case 0:s=s.bxz(t.b,r,u,t.c)
break
case 1:s=s.bNX(t.b,r,u,t.c)
break
case 2:s=s.cz7(t.b,r,u,t.c)
break
case 3:s=s.bAu(t.b,r,u,t.c)
break
case 4:s=s.bDI(t.b,r,u,t.c)
break
case 5:s=s.bCV(t.b,r,u,t.c)
break
default:s=null}return C.dc(s,w)},
$S:235}
B.eWk.prototype={
$2(d,e){var w=C.auH(this.b),v=this.c.d,u=C.aq(A.d.gL(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gL(v),A.d.gal(v),0.4)
v.toString
v=w.cHC(u,A.bG,v,3.5)
u=this.a
w=u.gtU().x
w===$&&C.c()
return C.a9E(C.kZ(null,null,null,1,0,new B.eWd(u),A.k.D(w,0,1)),v)},
$S:1840}
B.eWd.prototype={
$1(d){var w=this.a
w.gtU().sp(0,d)
if(w.as)w.m(new B.eW9(w))},
$S:6}
B.eW9.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eWl.prototype={
$0(){var w=this.a
w.gtU().sp(0,0)
w.afw()},
$S:0}
B.eWm.prototype={
$1(d){var w=this.a
w.m(new B.eWc(w,d))
if(w.as)w.afw()},
$S:6}
B.eWc.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eWn.prototype={
$0(){var w=this.a
w.m(new B.eWb(w,this.b))
w.gtU().sp(0,0)
if(w.as)w.afw()},
$S:0}
B.eWb.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eWo.prototype={
$0(){var w=this.a
return w.m(new B.eWa(w,this.b))},
$S:0}
B.eWa.prototype={
$0(){var w=C.C(this.b,x.G)
return this.a.w=w},
$S:0}
B.eW_.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1841}
B.eW0.prototype={
$1(d){return d.b},
$S:1842}
B.dgl.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dgm.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dgi.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dgj.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgk.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgn.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgo.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgp.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgq.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dgr.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.dgs.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.dgt.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.dgu.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dgv.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.el6.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.ekW.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.ekY.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+44}
B.ekZ.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+45}
B.el1.prototype={
$1(d){var w=D.mB.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+46}
B.el2.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.C(new C.e9(new C.cQ(new C.a1(q,new B.el3(d),p.k("a1<1>")),new B.el4(r),p.k("cQ<1,qG?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aI(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.L)(n),++v){u=n[v]
if(w.length>=6)return
t=C.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.el3.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.el4.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.el_.prototype={
$1(d){return D.mB.h(0,d.b).c===D.wF},
$S:z+49}
B.el0.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.elw.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v2(0,u)
w.aHp(A.o.an(v,1000))},
$S:8}
B.el5.prototype={
$0(){},
$S:0}
B.ekS.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$$0)
case 6:e.ar("String","ngmy_core_reaction_lab_v1",s.a.d.ag())
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
B.el8.prototype={
$1(d){var w=null,v=this.a.b
return C.bl(!0,C.v(C.a([A.N,C.dL(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mB.h(0,v).b,D.mB.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fz0,w,C.d(D.mB.h(0,v).a,w,w,w,w,w,w,A.hs,w,w,w),w,w,w),C.dL(!1,w,w,w,!0,w,w,w,!0,w,U.an1,w,w,w,w,new B.el7(d),!1,w,w,w,w,w,w,w,D.fqN,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:24}
B.el7.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.ela.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e76],x.p)
for(w=0;w<6;++w){v=D.aws[w]
s.push(C.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bQe,u,u,u,u,new B.el9(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.kF,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.hs,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bl(!0,new C.cS(new C.aY(0,1/0,0,t.a.b*0.7),C.cz(s,u,D.bvM,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:24}
B.el9.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.ekV.prototype={
$1(d){var w=null
return C.ek(C.a([C.bK(!1,A.de,w,w,!0,w,w,new B.ekT(d),w,w),C.bK(!1,A.Dn,w,w,!0,w,w,new B.ekU(d),w,w)],x.p),w,w,F.n3,D.foc,w,w,w,w,D.fr4,w)},
$S:20}
B.ekT.prototype={
$0(){C.a5(this.a,!1).O(!1)
return null},
$S:0}
B.ekU.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.elu.prototype={
$0(){var w=this.a
return w.m(new B.elt(w))},
$S:0}
B.elt.prototype={
$0(){return this.a.r=!1},
$S:0}
B.elv.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ar(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.me(new B.elk(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b4J:t
v=C.a([C.b3(u,t,t,new B.bgc(w,v,new B.ell(r),new B.elm(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e1(C.c6(w,new B.eln(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bFo())
return C.aE(A.c4,C.jz(new C.an(A.W,t,A.b0,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.elo(r),t,r.gceD(),t,new B.elp(r),new B.elq(r),new B.elr(r),t,t,t,t,t,t,t,t,t,t,new B.els(r),t,t,t,!1,A.a8)},
$S:35}
B.elk.prototype={
$0(){return this.a.abe(this.b)},
$S:0}
B.els.prototype={
$1(d){return this.a.cwT(d.b)},
$S:50}
B.elq.prototype={
$1(d){return this.a.ceE(d.b)},
$S:43}
B.elr.prototype={
$1(d){return this.a.ceF(d.b)},
$S:18}
B.elp.prototype={
$1(d){return this.a.b_A()},
$S:37}
B.elo.prototype={
$1(d){return this.a.abV(d.b)},
$S:297}
B.ell.prototype={
$0(){return this.a.z},
$S:691}
B.elm.prototype={
$0(){return this.a.Q},
$S:737}
B.eln.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bJG()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bG,A.q,1)
t=C.a([D.flF,A.cV],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.L)(p),++r)t.push(new C.x(p[r],q,D.f6a,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h7,q,q,q)},
$S:59}
B.ekX.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.D(A.e5,C.B(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,C.E(C.v(C.a([C.d(f,w,w,w,w,w,w,A7.Tp,w,w,w),A.bB,C.d(g,w,w,w,w,w,w,F.Tw,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1844}
B.elg.prototype={
$0(){var w=this.a.c
w.toString
return C.a5(w,!1).lR()},
$S:0}
B.elh.prototype={
$0(){var w=this.a
return w.m(new B.elf(w))},
$S:0}
B.elf.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.eli.prototype={
$0(){var w=this.a
return w.m(new B.ele(w))},
$S:0}
B.ele.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.elj.prototype={
$0(){var w=this.a
return w.m(new B.eld(w))},
$S:0}
B.eld.prototype={
$0(){return this.a.r=!0},
$S:0}
B.elc.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mB.gdK(D.mB),w=w.gaf(w);w.C();){v=w.gS(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.L)(p),++r)u.push(s.crM(p[r]))
return new C.D(I.agw,C.v(C.a([new C.D(V.aia,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.elb.prototype={
$0(){return this.a.c4X(this.b)},
$S:0}
B.dgh.prototype={
$0(){var w=this,v=null,u=C.hr(v,v,v,v,C.de(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.ca,v,A.e_,A.c8)
u.ey()
return u},
$S:283}
B.exb.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bo(o,new B.ex9(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.exa())},
$S:8}
B.ex9.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.exa.prototype={
$0(){},
$S:0}
B.ewN.prototype={
$0(){},
$S:0}
B.ewM.prototype={
$0(){},
$S:0}
B.ewW.prototype={
$0(){return B.qO(this.b,this.a.d,"spark-painter")},
$S:0}
B.ewY.prototype={
$1(d){return this.a.aXW(0,d.b)},
$S:43}
B.ex1.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aB(0,u).gcl()>2.5}else w=!1
if(w)t.a.push(u)
v.aR0(u)
v.c7Z(u)
return null},
$S:18}
B.ewX.prototype={
$1(d){return this.a.aXV()},
$S:37}
B.ex2.prototype={
$1(d){return this.a.aXW(0,d.b)},
$S:22}
B.ex3.prototype={
$1(d){return this.a.aXV()},
$S:50}
B.ex4.prototype={
$0(){var w=this.a
return w.m(new B.ewV(w,this.b))},
$S:0}
B.ewV.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ex5.prototype={
$0(){var w=this.a
return w.m(new B.ewU(w))},
$S:0}
B.ewU.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.ex6.prototype={
$0(){var w=this.a
return w.m(new B.ewT(w,this.b))},
$S:0}
B.ewT.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ex7.prototype={
$1(d){var w=this.a
return w.m(new B.ewS(w,d))},
$S:6}
B.ewS.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ex8.prototype={
$0(){var w=this.a
return w.m(new B.ewR(w))},
$S:0}
B.ewR.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.ewZ.prototype={
$0(){var w=this.a
return w.m(new B.ewQ(w))},
$S:0}
B.ewQ.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.ex_.prototype={
$0(){var w=this.a
return w.m(new B.ewP(w))},
$S:0}
B.ewP.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.ex0.prototype={
$0(){var w=this.a
return w.m(new B.ewO(w,this.b))},
$S:0}
B.ewO.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eDL.prototype={
$0(){return B.qO(this.b,this.a.d,"title")},
$S:0}
B.eDM.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIB().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bZk(v[t],t,s,q,u))
return new C.D(A.fA,C.bV(A.fQ,w,A.rR,0,0),null)},
$S:712}
B.eDN.prototype={
$1(d){return this.a.m(new B.eDK())},
$S:2}
B.eDK.prototype={
$0(){},
$S:0}
B.eDO.prototype={
$0(){var w=this.a
w.m(new B.eDJ(w,this.b))
w=w.gIB()
w.iz(0,0)
w.cH(0)},
$S:0}
B.eDJ.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eDP.prototype={
$0(){var w=this.a
return w.m(new B.eDI(w,this.b))},
$S:0}
B.eDI.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eDQ.prototype={
$0(){var w=this.a
return w.m(new B.eDH(w))},
$S:0}
B.eDH.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eDR.prototype={
$0(){var w=this.a
return w.m(new B.eDG(w,this.b))},
$S:0}
B.eDG.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eDS.prototype={
$0(){var w=this.a.gIB()
w.iz(0,0)
w.cH(0)},
$S:0}
B.eDT.prototype={
$1(d){var w=this.a
return w.m(new B.eDF(w,d))},
$S:6}
B.eDF.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ehD.prototype={
$1(d){return d.a.aB(0,this.a).gcl()<16},
$S:z+13}
B.ehE.prototype={
$1(d){var w=this.b
return d.a.aB(0,w).gcl()<16||d.a.aB(0,w).gcl()>this.a.r.galX()*2.2},
$S:z+13}
B.ehr.prototype={
$0(){return B.qO(this.b,this.a.d,"orbits")},
$S:0}
B.ehs.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ar(e.b,e.d)
q.r=p
w=q.gad8()
v=q.w
u=q.as
t=q.at
s=u==null?A.a2v:q.cif(u,q.gaVd())
return new C.ev(C.aE(A.c4,C.b3(r,r,r,new B.bkz(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eho(q),new B.ehp(q),new B.ehq(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8),q.d)},
$S:178}
B.ehp.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:43}
B.ehq.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.eho.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aB(0,w).gcl()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_o(u,v.gaVd(),v.Q,v.b19(),C.a([],x.g)))
C.jR()
if(v.ax)E.dF(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.eht.prototype={
$1(d){var w=this.a
return w.m(new B.ehn(w,d))},
$S:6}
B.ehn.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ehv.prototype={
$1(d){var w=this.a
return w.m(new B.ehm(w,d))},
$S:6}
B.ehm.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ehw.prototype={
$1(d){var w=this.a
return w.m(new B.ehl(w,d))},
$S:6}
B.ehl.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ehx.prototype={
$0(){var w=this.a
return w.m(new B.ehk(w))},
$S:0}
B.ehk.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ehy.prototype={
$0(){var w=this.a
return w.m(new B.ehj(w))},
$S:0}
B.ehj.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.ehz.prototype={
$0(){var w=this.a
return w.m(new B.ehi(w))},
$S:0}
B.ehi.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.ehA.prototype={
$0(){var w=this.a
return w.m(w.gcu4())},
$S:0}
B.ehB.prototype={
$0(){var w=this.a
return w.m(w.gbFC())},
$S:0}
B.ehC.prototype={
$0(){var w=this.a
return w.m(new B.ehh(w))},
$S:0}
B.ehh.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.aqD(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hc())}},
$S:0}
B.ehu.prototype={
$0(){var w=this.a
return w.m(A.d.grz(w.e))},
$S:0}
B.eDc.prototype={
$1(d){return this.a.fS$-d.b>6000},
$S:738}
B.eDd.prototype={
$1(d){var w=this.a.e
return new C.a1(w,new B.eDb(d),C.U(w).k("a1<1>")).gM(0)>=3},
$S:738}
B.eDb.prototype={
$1(d){return d.a.aB(0,this.a.a).gcl()<14},
$S:z+53}
B.eD1.prototype={
$0(){return B.qO(this.b,this.a.d,"swarm")},
$S:0}
B.eD2.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ev(C.aE(A.c4,C.b3(w,w,w,new B.bs4(v.e,v.f,v.ax,v.at,v.ay,v.fS$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eCZ(v),new B.eD_(v),new B.eD0(v),w,w,w,w,w,w,w,w,new B.eCR(v),new B.eCS(v),new B.eCT(v),w,w,w,!1,A.a8),v.d)},
$S:178}
B.eD_.prototype={
$1(d){return this.a.ay=d.b},
$S:43}
B.eD0.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eCZ.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.eCS.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fS$))
if(w.ch)E.dF(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lg("flute",7,500,0.3)},
$S:22}
B.eCT.prototype={
$1(d){return this.a.ay=null},
$S:50}
B.eCR.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eD3.prototype={
$0(){var w=this.a
return w.m(new B.eCY(w,this.b))},
$S:0}
B.eCY.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eD4.prototype={
$0(){var w=this.a
return w.m(new B.eCX(w,this.b))},
$S:0}
B.eCX.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a9(w.e)},
$S:0}
B.eD5.prototype={
$0(){var w=this.a
return w.m(new B.eCW(w))},
$S:0}
B.eCW.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eD6.prototype={
$1(d){var w=this.a
return w.m(new B.eCV(w,d))},
$S:6}
B.eCV.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eD7.prototype={
$1(d){var w=this.a
return w.m(new B.eCU(w,d))},
$S:6}
B.eCU.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eD8.prototype={
$1(d){var w=this.a
return w.m(new B.eCQ(w,d))},
$S:6}
B.eCQ.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eD9.prototype={
$1(d){var w=this.a
return w.m(new B.eCP(w,d))},
$S:6}
B.eCP.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eDa.prototype={
$1(d){var w=this.a
return w.m(new B.eCO(w,d))},
$S:6}
B.eCO.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dFN.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dFM(w,d))},
$S:142}
B.dFM.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jy(v==null?A.rm:v)
v=v.gaf(v)
while(v.C()){u=v.gS(v)
t.n(0,C.t(u.a),A.k.N(C.dQ(u.b)))}w.x=t
w.Q=!0
A.d.a9(w.d)},
$S:0}
B.dFO.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dFP.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Z2(w)>0},
$S:z+14}
B.dFD.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.azc()},
$S:0}
B.dFG.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eJ(w,F.kk,new C.D(A.bD,new C.a7(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.i7,w,w,w),A.S,C.E(C.ig(!0,w,w,A.y,S.aNT,new B.dFF(u,d),100,w,w,A.ah,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d0,w,new C.b7(v,A.Y),w)},
$S:47}
B.dFF.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dFE(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bZ:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b3:A.dr,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.jd
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aG("\u2605",n)+A.a.aG("\u2606",3-n),s,s,s,s,s,s,D.f9Q,s,s,s))
return C.aE(s,C.p(s,C.v(o,A.m,s,A.bb,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a8)},
$S:77}
B.dFE.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.dFK.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gacb()
o=C.b3(q,q,q,new B.ba2(p.d,w,v,p.gc53(),q),o)
v=p.bX0("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gHY()
t=p.as>=p.gHY()?A.b2:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.B(C.a([v,p.au7("GOAL",""+w+" / "+u,t),p.au7("STARS",A.a.aG("\u2605",s)+A.a.aG("\u2606",3-s),A.aM)],r),A.m,q,A.hB,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lF)
if(p.Q&&!p.y)s.push(D.aVP)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.b2:A.cf).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b2:A.cf,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.am,C.d("You blasted "+p.as+" dots. The goal was "+p.gHY()+".",q,q,q,q,q,q,A.hD,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aG("\u2605",t==null?1:t),q,q,q,q,q,q,D.f0p,q,q,q))}u.push(A.aB)
t=C.a([new B.fi(A.mv,"Try again",new B.dFH(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fi(A.iV,"Next level",new B.dFI(p),A.b2,q))
u.push(C.B(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.VT,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aE(A.c4,new C.an(A.W,q,A.b0,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dFJ(p),q,q,q,q,!1,A.a8)},
$S:35}
B.dFJ.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fS$
E.dF(180,"",200,1,0.4,"sine")
C.jl()},
$S:22}
B.dFH.prototype={
$0(){var w=this.a
return w.m(w.gb3O())},
$S:0}
B.dFI.prototype={
$0(){var w=this.a
return w.aXX(w.r+1)},
$S:0}
B.dFL.prototype={
$0(){var w=this.a
return w.m(w.gb3O())},
$S:0}
B.cKR.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.W()
v=C.N()
v.r=f.j(0.18).gp(0)
w.ae(d,e,v)
v=C.N()
v.b=A.ae
v.c=3
v.r=f.j(0.9).gp(0)
w.ae(d,e,v)
v=C.N()
v.r=f.j(0.25).gp(0)
v.z=A.lt
w.ae(d,e*0.5,v)},
$S:739}
B.ed6.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcNf()?this.a.cqc(w,v,d.b):w.aB(0,v).gcl())<24},
$S:z+56}
B.edv.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.edk.prototype={
$0(){var w=this.a
return w.m(new B.edb(w))},
$S:0}
B.edb.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.edl.prototype={
$0(){return B.qO(this.b,this.a.d,"marble-music")},
$S:0}
B.edm.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ev(C.aE(A.c4,C.b3(w,w,w,new B.bh6(v.e,v.f,v.at,v.ax,v.fS$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.edh(v),new B.edi(v),new B.edj(v),w,w,w,w,w,w,w,w,w,w,new B.eda(v),w,w,w,!1,A.a8),v.d)},
$S:178}
B.eda.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.ZN(w)
u.e.push(new B.Fz(w,w,v,u.aOE(v)))
if(u.ay)B.lg(u.z,v+12,700,0.5)}if(u.x==="erase")u.aRg(d.b)},
$S:50}
B.edi.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:43}
B.edj.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aRg(d.b)},
$S:18}
B.edh.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aB(0,w).gcl()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.ZN(t.ad(0,w).ez(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.Fz(w,t,v,u.aOE(v)))
if(u.ay)B.lg(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.edn.prototype={
$0(){var w=this.a
return w.m(new B.edg(w,this.b))},
$S:0}
B.edg.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.edo.prototype={
$0(){var w=this.a
return w.m(new B.edf(w,this.b))},
$S:0}
B.edf.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.edp.prototype={
$0(){var w=this.a
return w.m(new B.ede(w,this.b))},
$S:0}
B.ede.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.edq.prototype={
$1(d){var w=this.a
return w.m(new B.edd(w,d))},
$S:6}
B.edd.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.edr.prototype={
$0(){var w=this.a
return w.m(new B.edc(w))},
$S:0}
B.edc.prototype={
$0(){return this.a.axI("stairs")},
$S:0}
B.eds.prototype={
$0(){var w=this.a
return w.m(new B.ed9(w))},
$S:0}
B.ed9.prototype={
$0(){return this.a.axI("pinball")},
$S:0}
B.edt.prototype={
$0(){var w=this.a
return w.m(new B.ed8(w))},
$S:0}
B.ed8.prototype={
$0(){return this.a.axI("random")},
$S:0}
B.edu.prototype={
$0(){var w=this.a
return w.m(new B.ed7(w))},
$S:0}
B.ed7.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.eh0.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.eh1.prototype={
$0(){var w=this.b,v=new B.ad6(this.a.a,this.c)
v.c=w.fS$
return w.e.push(v)},
$S:0}
B.eh8.prototype={
$0(){var w=this.a
return w.m(new B.eh7(w))},
$S:0}
B.eh7.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.eh9.prototype={
$0(){return B.qO(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.eha.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ar(e.b,e.d)
if(!u.f){u.f=!0
u.aQ0()}w=u.w
return new C.ev(C.aE(A.c4,C.b3(v,v,v,new B.bkA(u.e,u.gaXZ(),6,u.gckk(),u.gcqF(),u.fS$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eh6(u),v,v,v,!1,A.a8),u.d)},
$S:178}
B.eh6.prototype={
$1(d){return this.a.c55(d.b)},
$S:50}
B.ehb.prototype={
$1(d){var w=this.a
return w.m(new B.eh5(w,d))},
$S:6}
B.eh5.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ehc.prototype={
$0(){var w=this.a
return w.m(new B.eh4(w,this.b))},
$S:0}
B.eh4.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ehd.prototype={
$0(){var w=this.a
return w.m(new B.eh3(w,this.b))},
$S:0}
B.eh3.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ehe.prototype={
$0(){var w=this.a
return w.m(w.gbJC())},
$S:0}
B.ehf.prototype={
$0(){var w=this.a
return w.m(new B.eh2(w))},
$S:0}
B.eh2.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a9(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.ad6(v.aC(6),v.aj()))},
$S:0}
B.ehg.prototype={
$0(){var w=this.a
return w.m(A.d.grz(w.e))},
$S:0}
B.fuv.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:132}
B.egv.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.egu(w,d))},
$S:142}
B.egu.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.x.v(0,w)},
$S:0}
B.egh.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.E(d,100)===w)this.a.a+=e},
$S:132}
B.egb.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b8W(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.egc.prototype={
$0(){var w=this.a
A.d.a9(w.e)
w.f.a9(0)
w.r=null},
$S:0}
B.egg.prototype={
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
p=D.w1.h(0,v[u].a).a
o=w.aiJ(u)
v=D.w1.h(0,v[t].a).a
n=w.aiJ(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vU("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaY4()&&w.x.K(0,w.d)){B.vU("zap",12,300,0.5)
m=w.x
m=C.C(m,C.a3(m).k("co.E"))
B.vR("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.egf.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a1<J.E>"),p=C.C(new C.a1(new C.cu(t,s),new B.egd(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.L)(p),++w)t.W(0,p[w])
s=x.S
v=C.T(s,s)
t.bI(0,new B.ege(r,v))
t.a9(0)
t.v(0,v)
A.d.cC(u.e,r)
u.r=null},
$S:0}
B.egd.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.E(d,100)===w},
$S:33}
B.ege.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:132}
B.egp.prototype={
$1(d){return""+d.b+" "+D.w1.h(0,d.a).c.toLowerCase()},
$S:403}
B.egq.prototype={
$0(){var w=this.a
return w.m(new B.ego(w))},
$S:0}
B.ego.prototype={
$0(){var w=this.a;++w.d
w.aw8(0)},
$S:0}
B.egr.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ar(e.b,e.d)
return C.aE(A.c4,C.b3(w,w,w,new B.bhO(v.e,v.f,v.r,v.gcBd(),w),A.f1),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.egk(v),new B.egl(v),new B.egm(v,e),w,w,w,w,w,w,w,w,w,w,new B.egn(v),w,w,w,!1,A.a8)},
$S:35}
B.egn.prototype={
$1(d){return this.a.c5s(d.b)},
$S:50}
B.egl.prototype={
$1(d){var w=this.a
return w.w=w.aY5(d.b)},
$S:43}
B.egm.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.egi(w,v,d,this.b))},
$S:18}
B.egi.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.egk.prototype={
$1(d){return this.a.w=null},
$S:37}
B.egs.prototype={
$0(){var w=this.a
return w.m(new B.egj(w,this.b))},
$S:0}
B.egj.prototype={
$0(){var w=this.a
w.d=this.b
w.aw8(0)},
$S:0}
B.egt.prototype={
$0(){return this.a.c5m(0,this.b.a)},
$S:0}
B.dor.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.E(d,100)].b,h=i.aB(0,j),g=new C.u(-h.b,h.a).ez(0,Math.max(h.gcl(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.W()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.ad.gp(0)
m.c=4
m.d=A.bP
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:132}
B.dOx.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dOw(w,d))},
$S:142}
B.dOw.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dOm.prototype={
$0(){var w,v,u=J.e3(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.auW[w.aC(4)]
return A.d.fZ(u)},
$S:23}
B.dOl.prototype={
$1(d){return B.fYv(d)==="*"},
$S:3}
B.dOn.prototype={
$1(d){return d!==this.a},
$S:3}
B.dOk.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vR("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.vU("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga8H()[r]+" codes for "+C.t(D.Ch.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b06()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u)r.push(D.Ch.h(0,w[u]))
r="Protein built: "+A.d.aI(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vU("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dOv.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dr:e,u=C.m(8),t=f?C.I(A.b3,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b3:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.nd,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1848}
B.dOq.prototype={
$1(d){var w=D.dkB.h(0,d)
return w==null?A.c:w},
$S:740}
B.dOr.prototype={
$0(){var w=this.a
return w.m(new B.dOp(w,this.b))},
$S:0}
B.dOp.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.avs()},
$S:0}
B.dOs.prototype={
$0(){var w=this.a
return w.m(new B.dOo(w))},
$S:0}
B.dOo.prototype={
$0(){var w=this.a;++w.e
w.avs()},
$S:0}
B.dOt.prototype={
$0(){return this.a.aY3(this.b)},
$S:0}
B.dOu.prototype={
$0(){return this.a.aY3(this.b)},
$S:0}
B.dRm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dRl(w,d))},
$S:142}
B.dRl.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dR9.prototype={
$0(){},
$S:0}
B.dR8.prototype={
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
B.dRa.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a9(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dRe.prototype={
$1(d){var w=this.a
return w.m(new B.dRd(w,d))},
$S:6}
B.dRd.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dRf.prototype={
$1(d){var w=this.a
return w.m(new B.dRc(w,d))},
$S:6}
B.dRc.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dRg.prototype={
$1(d){var w=this.a
return w.m(new B.dRb(w,d))},
$S:6}
B.dRb.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dRh.prototype={
$0(){return this.a.a9T("drought")},
$S:0}
B.dRi.prototype={
$0(){return this.a.a9T("disease")},
$S:0}
B.dRj.prototype={
$0(){return this.a.a9T("foxes")},
$S:0}
B.dRk.prototype={
$0(){return this.a.a9T("rabbits")},
$S:0}
B.d3z.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eM()
k.dB(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.E(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.kh(new C.eq(e,l,l,A.cO,l,l,l,l,l,l,new C.G(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.ca,new C.ju(1),l,l,l,l,A.c8,l)
n.ey()
n.a4(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1850}
B.d3B.prototype={
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
if(m!=null)n.bA(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ap(p,o)
v.push(n)
m=u.f
if(m!=null)n.bA(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.W()
l=C.N()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fB
this.c.aP(u,l)},
$S:1851}
B.d3A.prototype={
$3(d,e,f){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.ca,w,A.e_,A.c8)
v.ey()
v.a4(this.a,new C.u(f,this.b.b+2))},
$S:1852}
B.bFs.prototype={
$2(d,e){return d+e.a*e.b},
$S:1853}
B.fpb.prototype={
$2(d,e){return e.a-d.a},
$S:1854}
B.dBY.prototype={
$2(d,e){return d+e},
$S:73}
B.dCa.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dC9(v,A.k.D((v.gvS()-w[v.e].guT())/Math.max(w[v.e].guT(),8),-1,1)*0.32,u))},
$S:8}
B.dC9.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dCb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dC8(w,d))},
$S:142}
B.dC8.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.r.v(0,w)},
$S:0}
B.dBZ.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.E(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dC3.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1855}
B.dC4.prototype={
$0(){var w=this.a
return w.m(new B.dC2(w))},
$S:0}
B.dC2.prototype={
$0(){var w=this.a;++w.e
A.d.h1(w.f,0,5,0)},
$S:0}
B.dC5.prototype={
$2(d,e){var w=null,v=this.a
return C.aE(A.c4,C.b3(w,w,w,new B.b97(v.w,this.b.a,v.f,v.gvS()===v.d[v.e].guT(),w),A.f1),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dC1(v,e),w,w,w,!1,A.a8)},
$S:35}
B.dC1.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cx5(v-1)},
$S:50}
B.dC6.prototype={
$0(){var w=this.a
return w.m(new B.dC0(w,this.b))},
$S:0}
B.dC0.prototype={
$0(){var w=this.a
w.e=this.b
A.d.h1(w.f,0,5,0)},
$S:0}
B.dC7.prototype={
$0(){var w=this.a
return w.m(new B.dC_(w))},
$S:0}
B.dC_.prototype={
$0(){return A.d.h1(this.a.f,0,5,0)},
$S:0}
B.cDo.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bx(C.cl(new C.u(d,s),20,w),A.rz)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.er(r),p)
p.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.2
q.r=A.dB.gp(0)
p=q.H()
u.drawRRect(C.er(r),p)
p.delete()
B.foa(v,"1",new C.u(d,s),A.bi,11)}},
$S:1856}
B.dVp.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dVo(w,v))},
$S:8}
B.dVo.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dVq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dVn(w,d))},
$S:142}
B.dVn.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.w.v(0,w)},
$S:0}
B.dVf.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dVj.prototype={
$0(){var w=this.a
return w.m(new B.dVi(w))},
$S:0}
B.dVi.prototype={
$0(){return this.a.r++},
$S:0}
B.dVk.prototype={
$0(){var w=this.a
return w.m(new B.dVh(w,this.b))},
$S:0}
B.dVh.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dVl.prototype={
$1(d){var w=this.a
return w.m(new B.dVg(w,d))},
$S:6}
B.dVg.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dVm.prototype={
$1(d){return this.a.c5t(this.b,d)},
$S:6}
B.dbz.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bOV(d,e,f,g),m=this.b
$.W()
w=C.N()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).av(0,C.bU(d,e+6)))
m.aP(n,w)
w=C.N()
w.b=A.ae
w.c=1.5
w.r=A.aX.gp(0)
m.aP(n,w)
w=C.N()
w.r=A.w.j(0.28).gp(0)
m.ae(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.hI.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=A.aL.gp(0)
m.ae(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1857}
B.dbA.prototype={
$3(d,e,f){var w=this,v=w.b
return B.foa(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1858}
B.dG9.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dG8(w,d))},
$S:142}
B.dG8.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dFS.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jJ(90-(w-65)):d},
$S:14}
B.dG0.prototype={
$1(d){return this.a.m(new B.dG_())},
$S:2}
B.dG_.prototype={
$0(){},
$S:0}
B.dG1.prototype={
$1(d){return this.a.m(new B.dFZ())},
$S:2}
B.dFZ.prototype={
$0(){},
$S:0}
B.dG2.prototype={
$0(){var w=this.a
return w.m(new B.dFY(w))},
$S:0}
B.dFY.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aWN()},
$S:0}
B.dG3.prototype={
$0(){var w=this.a
return w.m(new B.dFX(w))},
$S:0}
B.dFX.prototype={
$0(){return this.a.f=0},
$S:0}
B.dG4.prototype={
$0(){var w=this.a
return w.m(new B.dFW(w))},
$S:0}
B.dFW.prototype={
$0(){return this.a.f=1},
$S:0}
B.dG5.prototype={
$0(){var w=this.a
return w.m(new B.dFV(w,this.b))},
$S:0}
B.dFV.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dG6.prototype={
$1(d){var w=this.a
return w.m(new B.dFU(w,d))},
$S:6}
B.dFU.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dG7.prototype={
$1(d){var w=this.a
w.m(new B.dFT(w,d))
if(w.ga9a()&&w.Q.K(0,w.x)){B.vU("zap",9,220,0.45)
w=w.Q
w=C.C(w,C.a3(w).k("co.E"))
B.vR("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dFT.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bLw.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bLH.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bLC.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bLI.prototype={
$1(d){return this.a.Lo(d)&&!d.x},
$S:z+1}
B.bLJ.prototype={
$2(d,e){return Math.max(d,this.a.azG(e))},
$S:z+6}
B.bLL.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bLM(w))},
$S:z+5}
B.bLM.prototype={
$0(){return this.a.a},
$S:109}
B.bLK.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bLN.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bLO(w))},
$S:z+5}
B.bLO.prototype={
$0(){return this.a.a},
$S:109}
B.bLy.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bLz(w))},
$S:z+5}
B.bLz.prototype={
$0(){return this.a.a},
$S:109}
B.bLx.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bLA.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bLB(w))},
$S:z+5}
B.bLB.prototype={
$0(){return this.a.a},
$S:109}
B.bLv.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bLP.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bLD.prototype={
$1(d){return d!==this.b&&this.a.aFK(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bLG.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bLF.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bLE.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bGE.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bGF.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.cka.prototype={
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
B.fFU.prototype={
$1(d){var w
$.W()
w=C.N()
w.r=d.gp(0)
return w},
$S:1859}
B.fFW.prototype={
$2(d,e){var w
$.W()
w=C.N()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bP
return w},
$S:1860}
B.fFX.prototype={
$5(d,e,f,g,h){return C.bx(new C.a9(d,e,d+f,e+g),new C.aT(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1861}
B.fFV.prototype={
$3(d,e,f){var w
$.W()
w=C.N()
w.saq(new C.a8(A.b_,A.b5,A.x,C.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1862}
B.bGi.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bGj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bGh(w))},
$S:0}
B.bGh.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGk.prototype={
$0(){return C.a([],x.ey)},
$S:1863}
B.bGl.prototype={
$1(d){return this.a.bB(d).a>15e5},
$S:407}
B.bGm.prototype={
$0(){var w,v,u
J.bDw(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Ck(v))if(B.fYY(v.b))w.b_3(v)
else w.a_2(v)
else{u=w.a.c.bbF(v)
w.adm(u==null?"The "+$.qb().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bGg.prototype={
$1(d){return new C.e0(new B.bGe(this.a,this.b),null)},
$S:21}
B.bGe.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bGf(this.a,v,e),t=$.qb(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.k9,w,w,w),q=C.aH(w,w,w,w,D.bGX,w,w,w,new B.bGa(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bl(!0,new C.D(A.xF,C.v(C.a([r,A.at,D.fzY,A.S,C.B(C.a([q,C.E(C.kZ(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bNx,w,w,w,new B.bGb(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.B(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b6,C.bK(!1,D.fdV,w,w,!0,w,w,new B.bGc(u),w,w),C.bK(!1,A.zF,w,w,!0,w,w,new B.bGd(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:85}
B.bGf.prototype={
$1(d){var w=this.a
w.m(new B.bG8(this.b,d))
this.c.$1(new B.bG9())
w.a.toString},
$S:6}
B.bG8.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bG9.prototype={
$0(){},
$S:0}
B.bGa.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bGb.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bGc.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bGd.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.bGB.prototype={
$2(d,e){var w
if(d==="short"){E.dF(1800,"",120,0,0.55,"noise")
E.dF(200,"",160,2.2,0.4,"saw")
C.fH()
w=this.a
if(w.c!=null)w.adm("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adm("\u26a0 Overloaded! The "+$.qb().h(0,e.b).b+" can only give about "+A.k.aa(w.a.c.zA(e),2)+" amps but your gadgets are asking for "+A.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adm("Burnt out! "+e.ay)
E.dF(140,"",320,0,0.6,"noise")
E.dF(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bGC.prototype={
$0(){},
$S:0}
B.bFM.prototype={
$0(){},
$S:0}
B.bGD.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bGA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aE(A.c4,C.b3(p,p,p,new B.aif(w,v,u,t,s,r==null?A.iZ:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGu(o),new B.bGv(o),new B.bGw(o),p,p,p,p,p,p,p,p,p,p,new B.bGx(o),p,p,p,!1,A.a8)],q)
if(o.a.c.a.length===0)n.push(D.b41)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.cs,A.q,1)
n.push(C.ao(p,C.aE(p,C.p(p,C.B(C.a([D.fca,C.E(C.d(w,p,p,p,p,p,p,D.f4r,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b9s,p,u,v,p,p,A.n),p,p,p,p,A.nX,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGy(o),p,p,p,p,p,p,!1,A.a8),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aY8(C.B(C.a([D.bxO,new B.fi(A.FP,"Cut wire",new B.bGz(o),A.cf,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cfb(w),p,p,10,10,p,p))}return C.jz(new C.an(A.W,p,A.b0,A.r,n,p),A.r,p)},
$S:345}
B.bGv.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b60(s)
if(r!=null){t.m(new B.bGs(t,r,d))
return}w=t.b_K(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aB(0,s)
t.m(new B.bGt(t,w))}},
$S:43}
B.bGs.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bGt.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bGw.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bGq(w,d))
else if(w.w!=null)w.m(new B.bGr(w,d.b.ad(0,w.x)))},
$S:18}
B.bGq.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bGr.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bGu.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b60(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ajX(u.a,u.b,v.a,v.b)!=null)E.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adk()},
$S:37}
B.bGx.prototype={
$1(d){var w=this.a,v=d.b,u=w.b_K(v)
if(u!=null){w.m(new B.bGo(w,u))
if(D.lY.ai(0,u.b))w.cpG(u)
w.a.toString
return}w.m(new B.bGp(w,w.cC2(v)))},
$S:50}
B.bGo.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dF(200,"",70,0,0.2,"saw")}},
$S:0}
B.bGp.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bGy.prototype={
$0(){var w=this.a
return w.m(new B.bGn(w))},
$S:0}
B.bGn.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGz.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dF(300,"",50,0,0.35,"noise")
w.adk()},
$S:0}
B.bFN.prototype={
$0(){return this.a.bnz(this.b)},
$S:0}
B.bG5.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.f_2,w,w,w),C.E(C.kZ(this.b.d,w,w,g,h,new B.bG7(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1864}
B.bG7.prototype={
$1(d){var w=this.a
w.m(new B.bG6(this.b,d))
w.a.toString},
$S:6}
B.bG6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bFT.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dF(260,"",70,0,0.35,"noise")
w.adk()},
$S:0}
B.bFU.prototype={
$0(){var w=this.a
return w.m(new B.bFS(w))},
$S:0}
B.bFS.prototype={
$0(){return this.a.d=null},
$S:0}
B.bFV.prototype={
$0(){this.a.m(new B.bFR(this.b,this.c))
E.dF(900,"",40,0,0.3,"noise")},
$S:0}
B.bFR.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bFY.prototype={
$0(){return this.a.b_3(this.b)},
$S:0}
B.bFZ.prototype={
$0(){return this.a.a_2(this.b)},
$S:0}
B.bG_.prototype={
$0(){return this.a.a0H(this.b)},
$S:0}
B.bG0.prototype={
$0(){var w=this.a
w.m(new B.bFQ(this.b,this.c))
w.a.toString},
$S:0}
B.bFQ.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bG1.prototype={
$0(){var w=this.a
w.m(new B.bFP(this.b,this.c))
w.a.toString},
$S:0}
B.bFP.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bG2.prototype={
$0(){var w=this.a
w.m(new B.bFO(this.b,this.c))
w.a.toString},
$S:0}
B.bFO.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bG3.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bG4.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFW.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFX.prototype={
$1(d){return this.a.f=d},
$S:6}
B.ff_.prototype={
$1(d){return d.aFn("bulb")},
$S:z+2}
B.ff0.prototype={
$1(d){return d.pK(0,"switch")&&d.aFn("bulb")},
$S:z+2}
B.ff1.prototype={
$1(d){return A.d.b4(d.a,new B.feN())},
$S:z+2}
B.feN.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.ff2.prototype={
$1(d){return d.pK(0,"resistor")&&A.d.b4(d.a,new B.feM())},
$S:z+2}
B.feM.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.ff3.prototype={
$1(d){return!d.pK(0,"battery")&&d.aFn("bulb")},
$S:z+2}
B.feR.prototype={
$1(d){return A.d.b4(d.a,new B.feL())},
$S:z+2}
B.feL.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.feS.prototype={
$1(d){return A.d.b4(d.a,new B.feK())},
$S:z+2}
B.feK.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.feT.prototype={
$1(d){return A.d.b4(d.a,new B.feJ())},
$S:z+2}
B.feJ.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.feU.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.feH())&&A.d.b4(w,new B.feI())&&d.pK(0,"buck")},
$S:z+2}
B.feH.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.feI.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.feV.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.feF())&&A.d.b4(w,new B.feG())},
$S:z+2}
B.feF.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.feG.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.feW.prototype={
$1(d){return A.d.b4(d.a,new B.feE())},
$S:z+2}
B.feE.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dRu.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a9(0)
w.v(0,v.b)},
$S:0}
B.dRD.prototype={
$1(d){var w=this.a.d
return w.aFK(d)&&w.Ck(d)},
$S:z+1}
B.dRE.prototype={
$1(d){return d.x},
$S:z+1}
B.dRF.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dRG.prototype={
$0(){},
$S:0}
B.dRt.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fsU,A.at,D.fdR,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.PO[v]
t=A.c.j(0.06)
s=new C.aT(14,14)
r=new C.ay(A.bG,1,A.q,-1)
n.push(C.aE(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.k8,q,q,q,q,q,q,q,q,q),A.bB,new C.x(u.b,q,D.f5b,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bq(s,s,s,s),q,q,A.n),q,q,q,A.cz,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dRs(w,d,u),q,q,q,q,q,q,!1,A.a8))}return C.eJ(q,F.kk,new C.D(A.bR,new C.a7(340,q,C.cz(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d0,q,new C.b7(p,A.Y),q)},
$S:47}
B.dRs.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new B.dRr(w,this.c))
E.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dRr.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bgL()},
$S:0}
B.dRp.prototype={
$1(d){return new B.V4(this.a.d,null)},
$S:z+67}
B.dRq.prototype={
$0(){},
$S:0}
B.dRC.prototype={
$1(d){return new C.e0(new B.dRB(this.a),null)},
$S:21}
B.dRB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahq(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b2:A.aR
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.B(C.a([D.fqi,A.b6,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.N,C.bw(C.m(4),C.m1(A.bG,m,m,5,m,w.a/11,new C.lV(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fgW)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ah.Tn,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.Dj,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.at,q,new C.bI(A.a7,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dRz(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bm,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aT(12,12)
n=new C.ay(o===l.f?f.j(0.6):A.dr,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(C.aE(m,C.p(m,new C.cm(A.aO,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a7C,m,m,m,m,m,m,m,m,m),A.av,new C.bD(1,A.bh,new C.x(r.a,m,new C.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bq(t,t,t,t),m,m,A.n),m,m,m,A.eK,A.nX,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dRA(l,o,e),m,m,m,m,m,m,!1,A.a8))}return C.bl(!0,new C.cS(new C.aY(0,1/0,0,k.a.b*0.75),C.cz(u,m,A5.vq,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:85}
B.dRz.prototype={
$0(){var w=this.a
w.m(new B.dRx(w))
this.b.$1(new B.dRy())
w.EL()},
$S:0}
B.dRx.prototype={
$0(){var w=this.a
$.ahq()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dRy.prototype={
$0(){},
$S:0}
B.dRA.prototype={
$0(){var w=this.a
w.m(new B.dRv(w,this.b))
this.c.$1(new B.dRw())
w.EL()},
$S:0}
B.dRv.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dRw.prototype={
$0(){},
$S:0}
B.dRI.prototype={
$0(){return C.a5(this.a,!1).lR()},
$S:0}
B.dRJ.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.mb("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a5(t.b,!1).c5(C.e8(new B.dRH(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dRH.prototype={
$1(d){C.ln("construction")
return Am.hBa()},
$S:z+68}
B.dRK.prototype={
$0(){return B.hng(this.a,"ELECTRONICS LAB",this.b,A.aR)},
$S:0}
B.dRL.prototype={
$0(){var w=this.a
return w.m(w.d.gcTf())},
$S:0}
B.dRM.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grz(v))
w.EL()},
$S:0}
B.cAW.prototype={
$2(d,e){var w=null,v=this.a.gaw9().x
v===$&&C.c()
return C.b3(w,w,w,new B.b8f(v,w),A.au)},
$S:70}
B.cAV.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ap,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.F(new C.b5(v,t))
w.F(new C.cU(v,u,v+e,u))
w.F(new C.cU(v,u,v,u+e))
w.F(new C.cU(v,u,v-e,u))
w.F(new C.cU(v,u,v,t))
w.F(new C.bF())
t=C.N()
t.r=A.c.j(f).gp(0)
this.a.aP(w,t)},
$S:704}
B.fKy.prototype={
$3(d,e,f){return new B.Ul(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fKz.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cZ(e,!1,C.il(A.A,g,null,new C.bf(C.cI(A.ct,e,null),new C.bp(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
B.dNq.prototype={
$0(){return C.a5(this.a,!1).lR()},
$S:0}
B.dNp.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bWO(o):q.bzx(o,p),m=x.p
p=C.a([C.qe(new C.nd(n,new C.cx(p,x.aC)),A.pK,C.rN(),A.bc,A.bc,new B.dNn())],m)
n=t.d
if(n){w=A.k.E(q.gRq(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.av],m)
if(w)m.push(D.bxA)
else m.push(A.b6)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b2:A.az,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.av)
p.push(C.ao(s,C.av(C.dk(s,C.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ew,new C.o(A.w,s,s,u,s,s,A.n),A.n8,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uy)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.K5,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.we)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.K5,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aE(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dNo(q),s,s,s,s,s,s,!1,A.a8),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b0,A.r,p,s),A.aq)},
$S:304}
B.dNn.prototype={
$2(d,e){var w=x.Y
return new C.cZ(e,!1,C.il(A.A,d,null,new C.bf(e,new C.bp(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:381}
B.dNo.prototype={
$0(){var w=this.a
return w.m(new B.dNm(w))},
$S:0}
B.dNm.prototype={
$0(){return this.a.e=null},
$S:0}
B.dNl.prototype={
$0(){var w=this.a
return w.m(new B.dNk(w,this.b))},
$S:0}
B.dNk.prototype={
$0(){return this.a.e=A.d.cJ(F.k1,this.b)},
$S:0}
B.dNj.prototype={
$0(){var w=this.a
return w.m(new B.dNi(w))},
$S:0}
B.dNi.prototype={
$0(){return this.a.e=0},
$S:0}
B.dNe.prototype={
$0(){var w=this.a
return w.m(new B.dNd(w))},
$S:0}
B.dNd.prototype={
$0(){return this.a.e=null},
$S:0}
B.dNh.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.B(C.a([D.fyr,A.av,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eD,p,p,p,D.fb3,p,p,p),1),C.d(A.a.aT(A.o.u(C.dl(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aT(A.o.u(C.fZ(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qo,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kS,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.buo(w.gRq(),this.c.d,p),A.au)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b3,A.q,1)
s=C.m(10)
o=C.p(p,C.B(C.a([C.aE(p,C.p(p,p,A.f,p,p,A.K4,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dNg(w),p,p,p,p,p,p,!1,A.a8),A.ec,C.p(p,p,A.f,p,p,A.aaG,p,12,p,p,p,p,p,12),A.ec,C.p(p,p,A.f,p,p,F.Vf,p,12,p,p,p,p,p,12),A.av,C.E(C.d(F.k1[o].a,p,1,A.a2,p,p,p,A.a7t,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cC,p,p,p,24,p,p,A.fr,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.D(D.bun,C.p(p,C.bw(s,C.v(C.a([o,C.E(C.b3(p,p,p,new B.aec(r,w.gRq(),p),A.f1),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.ddB,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b3,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.D(A.ji,w.au9(F.k1[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.B(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lj,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.v(C.a([m,C.E(new C.an(A.W,p,A.b0,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,T.Lf,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:304}
B.dNg.prototype={
$0(){var w=this.a
return w.m(new B.dNf(w))},
$S:0}
B.dNf.prototype={
$0(){return this.a.e=null},
$S:0}
B.e8G.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e8F(w,d))},
$S:142}
B.e8F.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.fZ3(v)},
$S:0}
B.e8H.prototype={
$0(){},
$S:0}
B.e8w.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fZ3(v)
w.r.a9(0)
w.x=!1},
$S:0}
B.e8x.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvq().r){C.jR()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vU("click",s.c+s.d,60,0.4)
if(B.hnq(r.gvq(),q).b.a===r.gvq().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vR("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.By("bell",D.aoA,700,0.45)
for(q=r.gvq().c,q=C.ea(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.u((A.o.E(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e8A.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ar(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aE(A.c4,C.b3(s,s,s,new B.bgh(r.gvq(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e8y(r),s,s,s,!1,A.a8),C.ao(s,C.e1(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aPq,s,s,s),C.d(""+u.a+"/"+r.gvq().c.a+" \u2605   mirrors "+w.a+"/"+r.gvq().r,s,s,s,s,s,s,V.a7b,s,s,s)],t),A.m,s,A.hB,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fjr("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b2,C.a([new B.fi(A.iV,"Next level",new B.e8z(r),A.b2,s)],t)))
return new C.an(A.W,s,A.b0,A.r,w,s)},
$S:64}
B.e8y.prototype={
$1(d){return this.a.c5P(d.b)},
$S:50}
B.e8z.prototype={
$0(){var w=this.a
return w.adq(w.d+1)},
$S:0}
B.e8B.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grz(v))},
$S:0}
B.e8C.prototype={
$0(){var w=this.a
return w.adq(w.d+1)},
$S:0}
B.e8D.prototype={
$0(){var w=this.a
return w.adq(w.d-1)},
$S:0}
B.e8E.prototype={
$0(){return this.a.adq(this.b)},
$S:0}
B.dgE.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.E(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:741}
B.dgH.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.N()
u.r=(f?A.fT:A.aL).gp(0)
u.c=7
u.d=A.bP
r.bC(w,v,u)
w=t.ad(0,q)
v=t.ad(0,p)
u=C.N()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bP
r.bC(w,v,u)},
$S:1866}
B.dgF.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:459}
B.dgG.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:459}
B.e8Z.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e8Y(w,d))},
$S:142}
B.e8Y.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e9_.prototype={
$0(){},
$S:0}
B.e8K.prototype={
$1(d){return d===0},
$S:119}
B.e8T.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a7l,s,s,s)
w=r.z==="play"?A.k.dw(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cf:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,V.a7b,s,s,s)],v),A.m,s,A.hB,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dr:p
t=C.m(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b3,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.D(D.brH,w,s),C.E(C.B(C.a([C.E(new C.D(A.bU,C.v(C.a([t,A.am,C.d(q?"TARGET":"TARGET: "+r.gcx8(),s,s,s,s,s,s,D.aQg,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.D(A.bU,C.v(C.a([C.E(C.b3(s,s,s,new B.bgw(r.f,s),A.f1),1),A.am,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aQg,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fjr("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fi(A.iW,"Start",new B.e8Q(r),A.b2,s)],v)))}if(r.z==="result")w.push(B.fjr(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fi(A.iV,"Next colour",new B.e8R(r),A.b2,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fjr("Finished! "+q,u,A.b2,C.a([new B.fi(A.mv,"Play again",new B.e8S(r),A.b2,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:64}
B.e8Q.prototype={
$0(){var w=this.a
return w.m(new B.e8M(w))},
$S:0}
B.e8M.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awd()},
$S:0}
B.e8R.prototype={
$0(){var w=this.a
return w.m(w.gc5N())},
$S:0}
B.e8S.prototype={
$0(){var w=this.a
return w.m(new B.e8L(w))},
$S:0}
B.e8L.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awd()},
$S:0}
B.e8U.prototype={
$1(d){var w=this.a
return w.m(new B.e8P(w,d))},
$S:6}
B.e8P.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e8V.prototype={
$1(d){var w=this.a
return w.m(new B.e8O(w,d))},
$S:6}
B.e8O.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e8W.prototype={
$1(d){var w=this.a
return w.m(new B.e8N(w,d))},
$S:6}
B.e8N.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e8X.prototype={
$0(){var w=this.a
return w.m(w.gc5O())},
$S:0}
B.ffH.prototype={
$0(){return D.e_c},
$S:z+70}
B.ffI.prototype={
$0(){return D.dxp},
$S:z+71}
B.ffJ.prototype={
$0(){return D.dtX},
$S:z+72}
B.ffK.prototype={
$0(){return D.dwP},
$S:z+73}
B.ffL.prototype={
$0(){return D.dBM},
$S:z+74}
B.ffM.prototype={
$0(){return D.dVW},
$S:z+75}
B.ffN.prototype={
$0(){return D.dY7},
$S:z+76}
B.ffO.prototype={
$0(){return D.dB5},
$S:z+77}
B.ceO.prototype={
$0(){return C.a5(this.a,!1).lR()},
$S:0}
B.ceP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hqT(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aT(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dl,16)],t)
n=A.c.j(0.85)
j.push(C.aE(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.x(r.c,m,M.Tm,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lA,m,m,C.v(C.a([new C.x(r.a,m,D.f9G,m,m,m,m,m,m,m,m,m),A.cV,new C.x(r.b,m,new C.G(!0,n,m,m,m,m,12,A.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bq(q,q,q,q),p,new C.a8(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bD,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.ceN(d,r),m,m,m,m,m,m,!1,A.a8))}return C.bV(A.bz,j,A.bq,14,14)},
$S:171}
B.ceN.prototype={
$0(){return C.a5(this.a,!1).c5(C.e8(new B.ceM(this.b),!1,null,x.H))},
$S:0}
B.ceM.prototype={
$1(d){return this.a.f.$0()},
$S:40}
B.eId.prototype={
$0(){var w=this.a
return w.w=w.d[w.b3e(w.f)]},
$S:0}
B.eI9.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cI.aj()*7},
$S:0}
B.eI8.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bO(0,A.c5)
w.w=""},
$S:0}
B.eIb.prototype={
$0(){var w=this.a
return w.m(new B.eIa(w,this.b))},
$S:0}
B.eIa.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cC(w,this.b)},
$S:0}
B.eIc.prototype={
$1(d){return this.a.aYy(0)},
$S:2}
B.dTI.prototype={
$0(){return B.By("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dTJ.prototype={
$0(){},
$S:0}
B.dTD.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dTF.prototype={
$0(){return this.a.aYA(this.b)},
$S:0}
B.dTG.prototype={
$0(){var w=this.a
return w.m(new B.dTE(w))},
$S:0}
B.dTE.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dTH.prototype={
$0(){var w=this.a
return w.aYA(w.d)},
$S:0}
B.dEA.prototype={
$2(d,e){return d+e},
$S:88}
B.dEB.prototype={
$0(){},
$S:0}
B.dEv.prototype={
$2(d,e){return d+e},
$S:88}
B.dEy.prototype={
$0(){var w=this.a
return w.m(new B.dEx(w,this.b))},
$S:0}
B.dEx.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dEz.prototype={
$0(){var w=this.a
return w.m(new B.dEw(w))},
$S:0}
B.dEw.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dQZ.prototype={
$0(){return B.qO(this.b,this.a.d,"drawing")},
$S:0}
B.dR_.prototype={
$1(d){var w=this.a
return w.m(new B.dQY(w,d))},
$S:43}
B.dQY.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHu(u,v,t))},
$S:0}
B.dR0.prototype={
$1(d){var w=this.a
return w.m(new B.dQX(w,d))},
$S:18}
B.dQX.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dR1.prototype={
$1(d){var w=this.a
return w.m(new B.dQW(w,d))},
$S:22}
B.dQW.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHu(u,v,t))},
$S:0}
B.dR2.prototype={
$0(){var w=this.a
return w.m(new B.dQV(w,this.b))},
$S:0}
B.dQV.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dR3.prototype={
$1(d){var w=this.a
return w.m(new B.dQU(w,d))},
$S:6}
B.dQU.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dR4.prototype={
$0(){var w=this.a
return w.m(new B.dQT(w))},
$S:0}
B.dQT.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dR5.prototype={
$0(){var w=this.a
return w.m(new B.dQS(w))},
$S:0}
B.dQS.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dR6.prototype={
$0(){var w=this.a
return w.m(A.d.grz(w.e))},
$S:0}
B.dR7.prototype={
$0(){var w=this.a
return w.m(new B.dQR(w))},
$S:0}
B.dQR.prototype={
$0(){var w=this.a
w.x=D.avq[A.o.E(A.d.cJ(D.avq,w.x)+1,4)]},
$S:0}
B.eel.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
B.eem.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.By("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.eek(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.By("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.eek.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a9(0)},
$S:0}
B.een.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.eej(w))},
$S:11}
B.eej.prototype={
$0(){var w=this.a
w.f.a9(0)
w.x=!1},
$S:0}
B.eer.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aE(w,C.mC(new B.eep(v,e),w,A.bc,A.pK,w,w,new C.bp(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eeq(v,e),w,w,w,w,w,w,!1,A.a8)},
$S:77}
B.eeq.prototype={
$0(){return this.a.c6K(this.b)},
$S:0}
B.eep.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dp(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fB(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bWr
if(o)v=q.a.r.t(0,q.b)?A.b2.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b2:A.b3,A.q,1)
if(o){r=C.dp()
r.fB(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fs(A.A,C.d(u[t],p,p,p,p,p,p,D.f73,p,p,p),p,r,!0)
u=r}else u=D.frF
return C.fs(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:134}
B.ees.prototype={
$0(){var w=this.a
return w.m(new B.eeo(w,this.b))},
$S:0}
B.eeo.prototype={
$0(){var w=this.a
w.d=this.b.a
w.arv()},
$S:0}
B.eet.prototype={
$0(){var w=this.a
return w.m(w.gbI9())},
$S:0}
B.epd.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.epe.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.epb.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.epc.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.epa(w))},
$S:11}
B.epa.prototype={
$0(){return this.a.f=-1},
$S:0}
B.epf.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.epg.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.eph.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aYz()},
$S:11}
B.epi.prototype={
$0(){return this.a.c6Q(this.b)},
$S:0}
B.eDv.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:69}
B.eDE.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.D(A.kR,C.B(C.a([v,A.ab,new C.dq(1,A.cn,C.f4(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.ei),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1868}
B.eDA.prototype={
$1(d){return this.a.m(new B.eDz())},
$S:2}
B.eDz.prototype={
$0(){},
$S:0}
B.eDB.prototype={
$0(){var w=this.a
return w.m(new B.eDy(w,this.b))},
$S:0}
B.eDy.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eDC.prototype={
$1(d){var w=this.a
return w.m(new B.eDx(w,d))},
$S:6}
B.eDx.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eDD.prototype={
$0(){var w=this.a
return w.m(new B.eDw(w))},
$S:0}
B.eDw.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.ed0.prototype={
$0(){},
$S:0}
B.ed1.prototype={
$0(){},
$S:0}
B.ecU.prototype={
$0(){var w=this.a
return w.m(new B.ecT(w))},
$S:0}
B.ecT.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a7R("hat",0.6)},
$S:0}
B.ecV.prototype={
$0(){var w=this.a
return w.m(new B.ecS(w))},
$S:0}
B.ecS.prototype={
$0(){this.a.y=1.1
B.lg("bell",36,200,0.4)},
$S:0}
B.ecW.prototype={
$0(){var w=this.a
return w.m(new B.ecR(w))},
$S:0}
B.ecR.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aC(Math.max(v,u)-t+1)
w.as=u
B.lg("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
B.ecX.prototype={
$0(){var w=this.a
return w.m(new B.ecQ(w,this.b))},
$S:0}
B.ecQ.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.ecY.prototype={
$1(d){var w=this.a
return w.m(new B.ecP(w,d))},
$S:6}
B.ecP.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.ecZ.prototype={
$1(d){var w=this.a
return w.m(new B.ecO(w,d))},
$S:6}
B.ecO.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.ed_.prototype={
$1(d){var w=this.a
return w.m(new B.ecN(w,d))},
$S:6}
B.ecN.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.crI.prototype={
$0(){return C.a5(this.a,!1).lR()},
$S:0}
B.crJ.prototype={
$0(){var w=this.a
return B.hng(this.b,w.c,w.e,w.d)},
$S:0}
B.fOn.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.f_z,v,v,v)
return C.ek(C.a([C.bK(!1,D.fh0,v,v,!0,v,v,new B.fOm(d),v,v)],x.p),v,v,F.n3,w,v,v,v,new C.b7(u,new C.ay(s,1,A.q,-1)),t,v)},
$S:20}
B.fOm.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.crE.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crD.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crK.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crF.prototype={
$0(){var w=this.a
A.d.W(w.fp$,this.b.bg())
if(w.c!=null)this.c.$0()},
$S:0}
B.crH.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.kZ$.a)/1e6,0,0.04)
w.kZ$=d
w.fS$=A.o.an(v,1000)
w.lv(u)
if(w.c!=null)w.m(new B.crG())},
$S:8}
B.crG.prototype={
$0(){},
$S:0}
B.ceK.prototype={
$0(){var w=this
return B.lg(w.a,w.b,w.c,w.d)},
$S:1}
B.dWq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dWp(w,d))},
$S:z+79}
B.dWp.prototype={
$0(){return this.a.cro(this.b)},
$S:0}
B.dVT.prototype={
$0(){var w,v,u,t=this.a,s=J.a6(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:719}
B.dVR.prototype={
$0(){return this.a.id=D.a2B},
$S:0}
B.dVS.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a1<1>")
v=C.pb(new C.a1(w,new B.dVQ(this.c),v),6,v.k("J.E"))
w=C.C(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dVQ.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dVP.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ah)
return C.ek(C.a([C.bK(!1,A.pe,w,w,!0,w,w,new B.dVO(d),w,w)],x.p),w,w,F.n3,v,w,w,w,w,D.frJ,w)},
$S:20}
B.dVO.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.dWb.prototype={
$0(){return B.qO(this.b,this.a.d,"earth")},
$S:0}
B.dWc.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVH()
r=p.z
o=C.a([C.aE(A.c4,C.b3(q,q,q,new B.beI(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dW_(p),new B.dW0(p),new B.dW1(p),q,q,q,q,q,q,q,new B.dW2(p),q,q,q,!1,A.a8)],x.p)
if(p.r==null)o.push(Ab.abi)
w=this.b
if(w!=null)o.push(C.ao(8,p.c7r(w),q,q,10,10,q,q))
return new C.ev(new C.an(A.W,q,A.b0,A.r,o,q),p.d)},
$S:178}
B.dW0.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:243}
B.dW1.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVH()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:206}
B.dW_.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVH()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:505}
B.dW2.prototype={
$1(d){var w=this.a,v=w.c7u(d.b)
if(v!=null)w.m(new B.dVU(w,v))
else w.m(new B.dVV(w))},
$S:50}
B.dVU.prototype={
$0(){return this.a.awH(this.b)},
$S:0}
B.dVV.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dWd.prototype={
$0(){var w=this.a
w.e.bO(0,A.c5)
w.m(new B.dVZ(w,this.b))},
$S:0}
B.dVZ.prototype={
$0(){var w=this.a
w.id=D.a2B
w.awH(this.b)},
$S:0}
B.dWh.prototype={
$0(){var w=this.a
return w.m(new B.dWa(w))},
$S:0}
B.dWa.prototype={
$0(){var w=this.a
w.fx=null
w.asF(15,w.y,1)},
$S:0}
B.dWi.prototype={
$0(){var w=this.a
return w.m(new B.dW9(w,this.b))},
$S:0}
B.dW9.prototype={
$0(){var w=this.b.b
return this.a.asF(w.a,w.b,w.c)},
$S:0}
B.dWj.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dW8(w,v))},
$S:0}
B.dW8.prototype={
$0(){var w=this.b.a
return this.a.awH(w[A.cI.aC(w.length)])},
$S:0}
B.dWk.prototype={
$1(d){var w=this.a
return w.m(new B.dW7(w,d))},
$S:6}
B.dW7.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dWl.prototype={
$1(d){var w=this.a
return w.m(new B.dW6(w,d))},
$S:6}
B.dW6.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dWm.prototype={
$1(d){var w=this.a
return w.m(new B.dW5(w,d))},
$S:6}
B.dW5.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dWn.prototype={
$0(){var w=this.a
return w.m(new B.dW4(w))},
$S:0}
B.dW4.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dWo.prototype={
$0(){var w=this.a
return w.m(new B.dW3(w))},
$S:0}
B.dW3.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dWe.prototype={
$0(){var w=this.a
return w.m(new B.dVY(w))},
$S:0}
B.dVY.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dWf.prototype={
$0(){var w=this.a
return w.m(new B.dVX(w))},
$S:0}
B.dVX.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dWg.prototype={
$0(){var w=this.a
return w.m(new B.dVW(w))},
$S:0}
B.dVW.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dVN.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOT,w,w,w),A.uB,C.d(e,w,2,A.a2,w,w,w,A.TE,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:137}
B.dVM.prototype={
$0(){var w=this.a
return w.m(new B.dVL(w))},
$S:0}
B.dVL.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dco.prototype={
$0(){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.cY7,w,w),this.a),A.a4,A.ca,w,A.e_,A.c8)
v.ey()
return v},
$S:283}
B.dcp.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1869}
B.ffA.prototype={
$0(){return D.dzm},
$S:z+81}
B.ffB.prototype={
$0(){return D.dXQ},
$S:z+82}
B.ffC.prototype={
$0(){return D.dzo},
$S:z+83}
B.ffD.prototype={
$0(){return D.dtJ},
$S:z+84}
B.ffE.prototype={
$0(){return D.dzk},
$S:z+85}
B.ffF.prototype={
$0(){return D.dVX},
$S:z+86}
B.ffG.prototype={
$0(){return D.dVV},
$S:z+87}
B.eEo.prototype={
$0(){return C.a5(this.a,!1).lR()},
$S:0}
B.eEp.prototype={
$0(){var w=this.a
return w.m(new B.eEn(w))},
$S:0}
B.eEn.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaRt()+1,16)},
$S:0}
B.eEq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hqS(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aT(18,18)
q=s.d
p=new C.ay(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bhh],u)
k.push(C.aE(n,C.p(n,C.v(C.a([C.X(s.c,q,n,n,n,30),A.N,new C.x(s.a,n,D.f41,n,A.L,n,n,n,n,2,n,n),A.cV,new C.x(s.b,n,D.f94,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.bb,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bq(r,r,r,r),n,new C.a8(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cp,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eEm(d,s),n,n,n,n,n,n,!1,A.a8))}return C.bV(A.fQ,k,A.bq,10,10)},
$S:171}
B.eEm.prototype={
$0(){return C.a5(this.a,!1).c5(C.e8(new B.eEl(this.b),!1,null,x.H))},
$S:0}
B.eEl.prototype={
$1(d){return this.a.e.$0()},
$S:40}
B.ewr.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.ewC.prototype={
$0(){return B.qO(this.b,this.a.d,"solar-system")},
$S:0}
B.ewD.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ar(e.b,e.d)
u.ch=t
t=C.a([C.aE(A.c4,C.b3(v,v,v,new B.brb(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ewz(u),new B.ewA(u),v,v,v,v,v,v,v,new B.ewB(u),v,v,v,!1,A.a8)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c7w(w),v,v,10,10,v,v))
return new C.ev(new C.an(A.W,v,A.b0,A.r,t,v),u.d)},
$S:178}
B.ewz.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:243}
B.ewA.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:206}
B.ewB.prototype={
$1(d){var w=this.a,v=w.c7z(d.b)
if(v!=null)w.aYV(v)},
$S:50}
B.ewE.prototype={
$0(){var w=this.a
return w.m(new B.ewy(w))},
$S:0}
B.ewy.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.ewF.prototype={
$0(){return this.a.aYV(this.b)},
$S:0}
B.ewG.prototype={
$1(d){var w=this.a
return w.m(new B.ewx(w,d))},
$S:6}
B.ewx.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.ewH.prototype={
$1(d){var w=this.a
return w.m(new B.eww(w,d))},
$S:6}
B.eww.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ewI.prototype={
$0(){var w=this.a
return w.m(new B.ewv(w))},
$S:0}
B.ewv.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.ewJ.prototype={
$0(){var w=this.a
return w.m(new B.ewu(w))},
$S:0}
B.ewu.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.ewK.prototype={
$0(){var w=this.a
return w.m(new B.ewt(w))},
$S:0}
B.ewt.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ewL.prototype={
$0(){var w=this.a
return w.m(new B.ews(w))},
$S:0}
B.ews.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.ewq.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:295}
B.ewp.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOT,w,w,w),A.uB,C.d(e,w,2,A.a2,w,w,w,A.TE,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:137}
B.ewo.prototype={
$0(){var w=this.a
return w.m(new B.ewn(w))},
$S:0}
B.ewn.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eYL.prototype={
$0(){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.PW,w,w),this.a),A.a4,A.ca,w,A.e_,A.c8)
v.ey()
return v},
$S:283}
B.eYM.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eYN.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dWu.prototype={
$0(){},
$S:0}
B.dWX.prototype={
$1(d){return d!=null},
$S:443}
B.dWJ.prototype={
$0(){var w=this.a
return w.m(new B.dWA(w,this.b))},
$S:0}
B.dWA.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dWK.prototype={
$0(){var w=this.a
return w.m(new B.dWz(w))},
$S:0}
B.dWz.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dWL.prototype={
$0(){var w=this.a
return w.m(new B.dWI(w))},
$S:0}
B.dWI.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dWP.prototype={
$0(){var w=this.a
return w.m(new B.dWH(w))},
$S:0}
B.dWH.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dWQ.prototype={
$1(d){var w=this.a
return w.m(new B.dWG(w,d))},
$S:6}
B.dWG.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dWR.prototype={
$0(){var w=this.a
return w.m(w.gcuC())},
$S:0}
B.dWS.prototype={
$1(d){var w=this.a
return w.m(new B.dWF(w,d))},
$S:6}
B.dWF.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dWT.prototype={
$1(d){var w=this.a
return w.m(new B.dWE(w,d))},
$S:6}
B.dWE.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dWU.prototype={
$1(d){var w=this.a
return w.m(new B.dWD(w,d))},
$S:6}
B.dWD.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dWV.prototype={
$1(d){var w=this.a
return w.m(new B.dWC(w,d))},
$S:6}
B.dWC.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dWW.prototype={
$0(){var w=this.a
return w.m(new B.dWB(w))},
$S:0}
B.dWB.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dWM.prototype={
$0(){var w=this.a
return w.m(new B.dWy(w))},
$S:0}
B.dWy.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dWN.prototype={
$0(){var w=this.a
return w.m(new B.dWx(w))},
$S:0}
B.dWx.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dWO.prototype={
$0(){var w=this.a
return w.m(new B.dWw(w))},
$S:0}
B.dWw.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dWt.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.c0(g,new C.o(D.bfO,g,g,C.m(20),g,g,A.n),A.be),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yI[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.G(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.yI[q].b)+" m/s\xb2",g,D.f8r,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dr,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(X.N3,C.b0(D.yI[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yI[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yI[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yI[q].d).j(0.6),g,g,g,3,g,A.fr,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.v(C.a([j,A.at,new C.x(i,g,A.rM,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.f0K,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d7(v,new B.dWs()))a1.push(D.b4m)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:64}
B.dWs.prototype={
$1(d){return d==null},
$S:443}
B.dWv.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dk(v,v,v,v,A.bc,new C.o(v,v,v,C.m(8),v,new C.a8(A.a3,A.a7,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.id,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.GC(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.f6P,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:64}
B.dWr.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.b9U(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.au)
o=A.w.j(0.55)
p=C.m(14)
q=C.I(A.bG,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b2
else u=A.a.t(u,"escapes")?A.aR:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.aa(Math.sqrt(58.86870477034412),1)
s=A.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.GC(A.k.D(r.cx.gcl()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b0,A.r,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,A.bB,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aQx,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bU,v,v,v),v,v,12,12,8,v)],w),v)},
$S:64}
B.epl.prototype={
$0(){return B.qO(this.b,this.a.d,"size-compare")},
$S:0}
B.epm.prototype={
$0(){var w=this.a
return w.m(new B.epk(w,this.b))},
$S:0}
B.epk.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.epn.prototype={
$0(){var w=this.a
return w.m(new B.epj(w,this.b))},
$S:0}
B.epj.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eWV.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.N()
w.r=f.j(0.2).gp(0)
w.z=new C.hw(A.G,Math.max(2,e*0.18))
u.ae(d,e*1.12,w)
w=C.N()
v=C.aq(f,A.w,0.6)
v.toString
w.saq(new C.bT(P.pk,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a1P,null).av(0,C.bU(d,e)))
u.ae(d,e,w)},
$S:739}
B.dE1.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dDQ.prototype={
$1(d){return d.b},
$S:z+60}
B.dDR.prototype={
$0(){return B.qO(this.b,this.a.d,"black-hole")},
$S:0}
B.dDS.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.Q=o
o=C.aE(A.c4,C.b3(q,q,q,new B.b9i(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dDO(p),q,q,q,q,q,q,q,q,q,new B.dDP(p),q,q,q,q,!1,A.a8)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bG,A.q,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fs4(t)+" Suns"
t=p.ae6("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.B(C.a([t,p.ae6("EDGE WIDTH",(s<100?A.k.aa(s,1):B.GC(s))+" km"),p.ae6("TIME",A.k.aa(this.b*100,0)+"%"),p.ae6("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bU,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.eda)
return new C.ev(new C.an(A.W,q,A.b0,A.r,r,q),p.d)},
$S:178}
B.dDP.prototype={
$1(d){return this.a.aYW(d.b)},
$S:22}
B.dDO.prototype={
$1(d){if(A.cI.aj()<0.12)this.a.aYW(d.b)},
$S:18}
B.dDU.prototype={
$1(d){var w=this.a
return w.m(new B.dDN(w,d))},
$S:6}
B.dDN.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dDV.prototype={
$0(){var w=this.a
return w.m(new B.dDM(w))},
$S:0}
B.dDM.prototype={
$0(){return this.a.r=10},
$S:0}
B.dDW.prototype={
$0(){var w=this.a
return w.m(new B.dDL(w))},
$S:0}
B.dDL.prototype={
$0(){return this.a.r=21},
$S:0}
B.dDX.prototype={
$0(){var w=this.a
return w.m(new B.dDK(w))},
$S:0}
B.dDK.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dDY.prototype={
$0(){var w=this.a
return w.m(new B.dDJ(w))},
$S:0}
B.dDJ.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dDZ.prototype={
$0(){var w=this.a
return w.m(new B.dDI(w))},
$S:0}
B.dDI.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dE_.prototype={
$0(){var w=this.a
return w.m(new B.dDH(w))},
$S:0}
B.dDH.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dE0.prototype={
$0(){var w=this.a
return w.m(new B.dDG(w))},
$S:0}
B.dDG.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dDT.prototype={
$0(){var w=this.a
return w.m(new B.dDF(w))},
$S:0}
B.dDF.prototype={
$0(){var w=this.a
A.d.a9(w.z)
w.as=0},
$S:0}
B.dV1.prototype={
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
$S:1870}
B.dUS.prototype={
$0(){return B.qO(this.b,this.a.d,"galaxy")},
$S:0}
B.dUT.prototype={
$0(){var w=this.a
return w.m(new B.dUR(w,this.b))},
$S:0}
B.dUR.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.ZF()},
$S:0}
B.dUU.prototype={
$0(){var w=this.a
return w.m(new B.dUQ(w))},
$S:0}
B.dUQ.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.ZF()}w.cuu()},
$S:0}
B.dUV.prototype={
$1(d){var w=this.a
return w.m(new B.dUP(w,d))},
$S:6}
B.dUP.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.ZF()},
$S:0}
B.dUW.prototype={
$1(d){var w=this.a
return w.m(new B.dUO(w,d))},
$S:6}
B.dUO.prototype={
$0(){var w=this.a
w.r=this.b
w.ZF()},
$S:0}
B.dUX.prototype={
$1(d){var w=this.a
return w.m(new B.dUN(w,d))},
$S:6}
B.dUN.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dUY.prototype={
$1(d){var w=this.a
return w.m(new B.dUM(w,d))},
$S:6}
B.dUM.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dUZ.prototype={
$0(){var w=this.a
return w.m(new B.dUL(w))},
$S:0}
B.dUL.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dV_.prototype={
$0(){var w=this.a
return w.m(new B.dUK(w))},
$S:0}
B.dUK.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dV0.prototype={
$0(){var w=this.a
return w.m(new B.dUJ(w))},
$S:0}
B.dUJ.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d9w.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1871}
B.eoA.prototype={
$0(){return B.qO(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eoB.prototype={
$0(){var w=this.a
return w.m(new B.eoz(w))},
$S:0}
B.eoz.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.eoC.prototype={
$0(){var w=this.a
return w.m(new B.eoy(w))},
$S:0}
B.eoy.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.eoD.prototype={
$0(){var w=this.a
return w.m(new B.eox(w))},
$S:0}
B.eox.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.eoE.prototype={
$0(){var w=this.a
return w.m(new B.eow(w))},
$S:0}
B.eow.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.eoF.prototype={
$1(d){var w=this.a
return w.m(new B.eov(w,d))},
$S:6}
B.eov.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.eoG.prototype={
$1(d){var w=this.a
return w.m(new B.eou(w,d))},
$S:6}
B.eou.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eoH.prototype={
$1(d){var w=this.a
return w.m(new B.eot(w,d))},
$S:6}
B.eot.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eoI.prototype={
$1(d){var w=this.a
return w.m(new B.eos(w,d))},
$S:6}
B.eos.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aLv.prototype
w.buD=w.q
w=B.aKx.prototype
w.btD=w.q
w=B.aKy.prototype
w.btE=w.q
w=B.aKD.prototype
w.btJ=w.q
w=B.aMm.prototype
w.bvB=w.q
w=B.aLt.prototype
w.buB=w.q
w=B.aLC.prototype
w.buK=w.q
w=B.aLI.prototype
w.buQ=w.q
w=B.aKB.prototype
w.btH=w.q
w=B.aLq.prototype
w.buy=w.q
w=B.aLF.prototype
w.buN=w.q
w=B.aLo.prototype
w.buw=w.q
w=B.aLp.prototype
w.bux=w.q
w=B.aKP.prototype
w.btW=w.q
w=B.aKt.prototype
w.btz=w.q
w=B.aKX.prototype
w.bu3=w.q
w=B.ax_.prototype
w.bqL=w.q
w=B.ax0.prototype
w.bqM=w.q
w=B.aJ_.prototype
w.bs1=w.q
w=B.aKM.prototype
w.btS=w.q
w=B.aLd.prototype
w.bul=w.q
w=B.aLe.prototype
w.bum=w.q
w=B.aKz.prototype
w.btF=w.q
w=B.aKS.prototype
w.btZ=w.q
w=B.aLm.prototype
w.buu=w.q
w=B.aLQ.prototype
w.buY=w.q
w=B.aKY.prototype
w.bu5=w.q
w=B.aKZ.prototype
w.bu6=w.q
w=B.aL_.prototype
w.bu7=w.q
w=B.aLy.prototype
w.buG=w.q
w=B.aLB.prototype
w.buJ=w.q
w=B.aKw.prototype
w.btC=w.q
w=B.aKV.prototype
w.bu1=w.q
w=B.aLx.prototype
w.buF=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aDE.prototype,"gavB","c2E",0)
var r
v(r=B.aC3.prototype,"gcaX","caY",35)
w(r,"gc39","aXl",0)
w(B.aC6.prototype,"gc4P","c4Q",0)
u(B.aCn.prototype,"gc4V","c4W",52)
w(r=B.aGE.prototype,"gcua","cub",0)
w(r,"gchE","afw",0)
w(r,"gcfl","cfm",0)
w(r,"gc4U","ad6",3)
w(r=B.aDD.prototype,"gbFh","a8G",3)
w(r,"gceD","b_A",0)
w(r,"gcim","afE",3)
t(r,"gc4Y","ad7",3)
w(B.aDT.prototype,"gbWv","bWw",0)
w(r=B.aDv.prototype,"gcu4","cu5",0)
w(r,"gbFC","bFD",0)
w(r=B.aC5.prototype,"gb3O","azc",0)
v(r,"gc53","Z2",54)
w(r,"gc52","ad9",3)
v(r=B.aDu.prototype,"gckk","axV",58)
v(r,"gcqF","az7",15)
w(r,"gbJC","aQ0",0)
v(r=B.aDs.prototype,"gcBd","aiJ",15)
t(r,"gc5n","aw8",0)
w(r,"gcmG","cmH",0)
v(r=B.aCz.prototype,"gc5o","c5p",90)
w(r,"gc5q","c5r",0)
t(r=B.a41.prototype,"grz","a9",0)
v(r,"gcR4","amx",1)
v(r,"gcNz","Lo",1)
w(r,"gcTf","bgL",0)
s(B.aif.prototype,"gc5v",0,5,null,["$5"],["qj"],64,0,0)
w(r=B.aCA.prototype,"gc5w","c5x",0)
w(r,"gcl8","ag0",3)
w(r,"gcbc","aej",3)
w(r,"gcsd","ah6",3)
w(r=B.aDe.prototype,"gc5N","awd",0)
w(r,"gc5O","aYc",0)
w(r=B.aE5.prototype,"gc6L","c6M",0)
t(r,"gc6J","aYy",0)
w(B.aDo.prototype,"gbI9","arv",0)
t(B.aDK.prototype,"gc6N","c6O",0)
v(r=B.aCL.prototype,"gc7s","c7t",78)
w(r,"gbN4","bN5",0)
w(r=B.aCM.prototype,"gcuC","cuD",0)
w(r,"gc7x","c7y",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.ajq,B.FR,B.uK,B.aRo,B.a2F,B.b9l,B.c_R,B.xX,B.C7,B.nj,B.ba3,B.Ao,B.brT,B.q_,B.qG,B.Cb,B.YS,B.aej,B.a06,B.Cl,B.abc,B.abt,B.adp,B.FD,B.bkM,B.PD,B.a_o,B.abj,B.abM,B.Fz,B.acB,B.ad6,B.tb,B.b8W,B.aRe,B.eb,B.to,B.a9S,B.aaZ,B.a41,B.my,B.ba4,B.fK,B.m4,B.aVQ,B.btd,B.aHu,B.mB,B.aaE,B.aaF,B.uY,B.OS,B.xV,B.OR,B.bt8,B.Pm,B.aeo])
u(C.hV,[B.fue,B.fkK,B.frc,B.frd,B.fub,B.fuc,B.e5I,B.e60,B.em5,B.elD,B.elE,B.elF,B.elG,B.elH,B.elI,B.elJ,B.elK,B.elB,B.elC,B.elA,B.em0,B.em1,B.em2,B.dE6,B.dE8,B.dEb,B.dEm,B.c_S,B.c_T,B.feO,B.feP,B.feQ,B.feX,B.feY,B.feZ,B.dGE,B.dGl,B.dGF,B.dGg,B.dGb,B.dGd,B.dGj,B.dGw,B.dGu,B.dGv,B.dGt,B.dGq,B.dGs,B.eWp,B.eW6,B.eWd,B.eWm,B.eW0,B.dgl,B.dgm,B.dgi,B.dgj,B.dgk,B.dgn,B.dgo,B.dgp,B.dgq,B.dgr,B.dgs,B.dgt,B.dgu,B.dgv,B.el1,B.el2,B.el3,B.el4,B.el_,B.el0,B.elw,B.el8,B.ela,B.ekV,B.els,B.elq,B.elr,B.elp,B.elo,B.ekX,B.exb,B.ex9,B.ewY,B.ex1,B.ewX,B.ex2,B.ex3,B.ex7,B.eDN,B.eDT,B.ehD,B.ehE,B.ehp,B.ehq,B.eho,B.eht,B.ehv,B.ehw,B.eDc,B.eDd,B.eDb,B.eD_,B.eD0,B.eCZ,B.eCS,B.eCT,B.eD6,B.eD7,B.eD8,B.eD9,B.eDa,B.dFN,B.dFO,B.dFP,B.dFG,B.dFJ,B.cKR,B.ed6,B.edv,B.eda,B.edi,B.edj,B.edh,B.edq,B.eh6,B.ehb,B.egv,B.egd,B.egp,B.egn,B.egl,B.egm,B.egk,B.dOx,B.dOl,B.dOn,B.dOv,B.dOq,B.dRm,B.dRe,B.dRf,B.dRg,B.d3z,B.d3B,B.d3A,B.dCa,B.dCb,B.dC3,B.dC1,B.cDo,B.dVp,B.dVq,B.dVl,B.dVm,B.dbz,B.dbA,B.dG9,B.dFS,B.dG0,B.dG1,B.dG6,B.dG7,B.bLw,B.bLH,B.bLC,B.bLI,B.bLK,B.bLx,B.bLv,B.bLP,B.bLD,B.bLG,B.bLF,B.bLE,B.bGE,B.fFU,B.fFX,B.fFV,B.bGl,B.bGg,B.bGf,B.bGD,B.bGv,B.bGw,B.bGu,B.bGx,B.bG5,B.bG7,B.bG3,B.bG4,B.bFW,B.bFX,B.ff_,B.ff0,B.ff1,B.feN,B.ff2,B.feM,B.ff3,B.feR,B.feL,B.feS,B.feK,B.feT,B.feJ,B.feU,B.feH,B.feI,B.feV,B.feF,B.feG,B.feW,B.feE,B.dRD,B.dRE,B.dRt,B.dRp,B.dRC,B.dRH,B.cAV,B.fKy,B.fKz,B.e8G,B.e8y,B.dgE,B.dgH,B.e8Z,B.e8K,B.e8U,B.e8V,B.e8W,B.ceM,B.eIc,B.dR_,B.dR0,B.dR1,B.dR3,B.eep,B.eDv,B.eDE,B.eDA,B.eDC,B.ecY,B.ecZ,B.ed_,B.fOn,B.crH,B.dWq,B.dVQ,B.dVP,B.dW0,B.dW1,B.dW_,B.dW2,B.dWk,B.dWl,B.dWm,B.eEl,B.ewz,B.ewA,B.ewB,B.ewG,B.ewH,B.ewq,B.eYM,B.eYN,B.dWX,B.dWQ,B.dWS,B.dWT,B.dWU,B.dWV,B.dWs,B.eWV,B.dE1,B.dDQ,B.dDP,B.dDO,B.dDU,B.dV1,B.dUV,B.dUW,B.dUX,B.dUY,B.d9w,B.eoF,B.eoG,B.eoH,B.eoI])
u(C.kk,[B.fud,B.e5N,B.e5L,B.elM,B.elZ,B.dGc,B.dGz,B.dMv,B.eWs,B.eWt,B.eW5,B.eWi,B.eWj,B.eWe,B.eWk,B.eW_,B.ekY,B.ekZ,B.elv,B.eln,B.elc,B.eDM,B.ehs,B.eD2,B.dFF,B.dFK,B.edm,B.eha,B.fuv,B.egh,B.ege,B.egr,B.dor,B.bFs,B.fpb,B.dBY,B.dC5,B.bLJ,B.bLL,B.bLN,B.bLy,B.bLA,B.bGF,B.cka,B.fFW,B.bGe,B.bGB,B.bGA,B.dRB,B.cAW,B.dNp,B.dNn,B.dNh,B.e8A,B.dgF,B.dgG,B.e8T,B.ceP,B.dEA,B.dEv,B.eer,B.dWc,B.dVN,B.dcp,B.eEq,B.ewD,B.ewp,B.dWt,B.dWv,B.dWr,B.dDS])
u(C.ag,[B.V4,B.Vw,B.TX,B.U1,B.N4,B.aGD,B.Vv,B.VK,B.VW,B.Vs,B.VR,B.U_,B.Vm,B.Vr,B.Vp,B.Un,B.UD,B.TS,B.UR,B.U0,B.aid,B.UE,B.awH,B.Ul,B.V9,B.Vb,B.W1,B.UL,B.TY,B.UC,B.Vn,B.VA,B.VV,B.Vl,B.US,B.VY,B.VJ,B.UT,B.VB,B.TW,B.UP,B.Vx])
u(C.ah,[B.bjf,B.aLv,B.aKx,B.aKD,B.aCn,B.aMm,B.aLt,B.aLC,B.aLI,B.aLq,B.aLF,B.aKB,B.aLo,B.aLp,B.aDs,B.biK,B.aKP,B.aKt,B.aKX,B.biB,B.ax_,B.bwj,B.aJ_,B.aKM,B.aLd,B.aLe,B.aLQ,B.aKS,B.aKz,B.biL,B.aDo,B.aDK,B.bjZ,B.aLm,B.aKY,B.bk2,B.aLB,B.aL_,B.aLy,B.aKw,B.aKV,B.aLx])
u(C.j8,[B.e5G,B.e5H,B.e5T,B.e5U,B.e5P,B.e5O,B.e5Q,B.e5M,B.e5R,B.e5K,B.e5S,B.e5J,B.e5X,B.e5W,B.e5Y,B.e5V,B.e5Z,B.e6_,B.e61,B.em4,B.em6,B.em7,B.elO,B.elN,B.elL,B.elU,B.elV,B.elR,B.elW,B.elQ,B.elX,B.elY,B.elP,B.em_,B.elT,B.em3,B.elS,B.dEt,B.dEs,B.dE5,B.dEu,B.dE7,B.dE9,B.dEa,B.dEc,B.dE2,B.dE3,B.dE4,B.dEj,B.dEk,B.dEl,B.dEi,B.dEn,B.dEh,B.dEo,B.dEg,B.dEp,B.dEf,B.dEq,B.dEe,B.dEr,B.dEd,B.dGi,B.dGh,B.dGm,B.dGe,B.dGf,B.dGn,B.dGo,B.dGp,B.dGk,B.dGa,B.dGy,B.dGx,B.dGA,B.dGB,B.dGC,B.dGr,B.dGD,B.cLj,B.dMt,B.dMs,B.dMu,B.ffe,B.fff,B.ffg,B.ffr,B.fft,B.ffu,B.ffv,B.ffw,B.ffx,B.ffy,B.ffz,B.ffh,B.ffi,B.ffj,B.ffk,B.ffl,B.ffm,B.ffn,B.ffo,B.ffp,B.ffq,B.ffs,B.eWr,B.eWq,B.eW8,B.eW7,B.eW3,B.eW2,B.eW4,B.eW1,B.eWg,B.eWf,B.eWh,B.eW9,B.eWl,B.eWc,B.eWn,B.eWb,B.eWo,B.eWa,B.el6,B.ekW,B.el5,B.ekS,B.el7,B.el9,B.ekT,B.ekU,B.elu,B.elt,B.elk,B.ell,B.elm,B.elg,B.elh,B.elf,B.eli,B.ele,B.elj,B.eld,B.elb,B.dgh,B.exa,B.ewN,B.ewM,B.ewW,B.ex4,B.ewV,B.ex5,B.ewU,B.ex6,B.ewT,B.ewS,B.ex8,B.ewR,B.ewZ,B.ewQ,B.ex_,B.ewP,B.ex0,B.ewO,B.eDL,B.eDK,B.eDO,B.eDJ,B.eDP,B.eDI,B.eDQ,B.eDH,B.eDR,B.eDG,B.eDS,B.eDF,B.ehr,B.ehn,B.ehm,B.ehl,B.ehx,B.ehk,B.ehy,B.ehj,B.ehz,B.ehi,B.ehA,B.ehB,B.ehC,B.ehh,B.ehu,B.eD1,B.eCR,B.eD3,B.eCY,B.eD4,B.eCX,B.eD5,B.eCW,B.eCV,B.eCU,B.eCQ,B.eCP,B.eCO,B.dFM,B.dFD,B.dFE,B.dFH,B.dFI,B.dFL,B.edk,B.edb,B.edl,B.edn,B.edg,B.edo,B.edf,B.edp,B.ede,B.edd,B.edr,B.edc,B.eds,B.ed9,B.edt,B.ed8,B.edu,B.ed7,B.eh0,B.eh1,B.eh8,B.eh7,B.eh9,B.eh5,B.ehc,B.eh4,B.ehd,B.eh3,B.ehe,B.ehf,B.eh2,B.ehg,B.egu,B.egb,B.egc,B.egg,B.egf,B.egq,B.ego,B.egi,B.egs,B.egj,B.egt,B.dOw,B.dOm,B.dOk,B.dOr,B.dOp,B.dOs,B.dOo,B.dOt,B.dOu,B.dRl,B.dR9,B.dR8,B.dRa,B.dRd,B.dRc,B.dRb,B.dRh,B.dRi,B.dRj,B.dRk,B.dC9,B.dC8,B.dBZ,B.dC4,B.dC2,B.dC6,B.dC0,B.dC7,B.dC_,B.dVo,B.dVn,B.dVf,B.dVj,B.dVi,B.dVk,B.dVh,B.dVg,B.dG8,B.dG_,B.dFZ,B.dG2,B.dFY,B.dG3,B.dFX,B.dG4,B.dFW,B.dG5,B.dFV,B.dFU,B.dFT,B.bLM,B.bLO,B.bLz,B.bLB,B.bGi,B.bGj,B.bGh,B.bGk,B.bGm,B.bG8,B.bG9,B.bGa,B.bGb,B.bGc,B.bGd,B.bGC,B.bFM,B.bGs,B.bGt,B.bGq,B.bGr,B.bGo,B.bGp,B.bGy,B.bGn,B.bGz,B.bFN,B.bG6,B.bFT,B.bFU,B.bFS,B.bFV,B.bFR,B.bFY,B.bFZ,B.bG_,B.bG0,B.bFQ,B.bG1,B.bFP,B.bG2,B.bFO,B.dRu,B.dRF,B.dRG,B.dRs,B.dRr,B.dRq,B.dRz,B.dRx,B.dRy,B.dRA,B.dRv,B.dRw,B.dRI,B.dRJ,B.dRK,B.dRL,B.dRM,B.dNq,B.dNo,B.dNm,B.dNl,B.dNk,B.dNj,B.dNi,B.dNe,B.dNd,B.dNg,B.dNf,B.e8F,B.e8H,B.e8w,B.e8x,B.e8z,B.e8B,B.e8C,B.e8D,B.e8E,B.e8Y,B.e9_,B.e8Q,B.e8M,B.e8R,B.e8S,B.e8L,B.e8P,B.e8O,B.e8N,B.e8X,B.ffH,B.ffI,B.ffJ,B.ffK,B.ffL,B.ffM,B.ffN,B.ffO,B.ceO,B.ceN,B.eId,B.eI9,B.eI8,B.eIb,B.eIa,B.dTI,B.dTJ,B.dTD,B.dTF,B.dTG,B.dTE,B.dTH,B.dEB,B.dEy,B.dEx,B.dEz,B.dEw,B.dQZ,B.dQY,B.dQX,B.dQW,B.dR2,B.dQV,B.dQU,B.dR4,B.dQT,B.dR5,B.dQS,B.dR6,B.dR7,B.dQR,B.eel,B.eem,B.eek,B.een,B.eej,B.eeq,B.ees,B.eeo,B.eet,B.epd,B.epe,B.epb,B.epc,B.epa,B.epf,B.epg,B.eph,B.epi,B.eDz,B.eDB,B.eDy,B.eDx,B.eDD,B.eDw,B.ed0,B.ed1,B.ecU,B.ecT,B.ecV,B.ecS,B.ecW,B.ecR,B.ecX,B.ecQ,B.ecP,B.ecO,B.ecN,B.crI,B.crJ,B.fOm,B.crE,B.crD,B.crK,B.crF,B.crG,B.ceK,B.dWp,B.dVT,B.dVR,B.dVS,B.dVO,B.dWb,B.dVU,B.dVV,B.dWd,B.dVZ,B.dWh,B.dWa,B.dWi,B.dW9,B.dWj,B.dW8,B.dW7,B.dW6,B.dW5,B.dWn,B.dW4,B.dWo,B.dW3,B.dWe,B.dVY,B.dWf,B.dVX,B.dWg,B.dVW,B.dVM,B.dVL,B.dco,B.ffA,B.ffB,B.ffC,B.ffD,B.ffE,B.ffF,B.ffG,B.eEo,B.eEp,B.eEn,B.eEm,B.ewr,B.ewC,B.ewE,B.ewy,B.ewF,B.ewx,B.eww,B.ewI,B.ewv,B.ewJ,B.ewu,B.ewK,B.ewt,B.ewL,B.ews,B.ewo,B.ewn,B.eYL,B.dWu,B.dWJ,B.dWA,B.dWK,B.dWz,B.dWL,B.dWI,B.dWP,B.dWH,B.dWG,B.dWR,B.dWF,B.dWE,B.dWD,B.dWC,B.dWW,B.dWB,B.dWM,B.dWy,B.dWN,B.dWx,B.dWO,B.dWw,B.epl,B.epm,B.epk,B.epn,B.epj,B.dDR,B.dDN,B.dDV,B.dDM,B.dDW,B.dDL,B.dDX,B.dDK,B.dDY,B.dDJ,B.dDZ,B.dDI,B.dE_,B.dDH,B.dE0,B.dDG,B.dDT,B.dDF,B.dUS,B.dUT,B.dUR,B.dUU,B.dUQ,B.dUP,B.dUO,B.dUN,B.dUM,B.dUZ,B.dUL,B.dV_,B.dUK,B.dV0,B.dUJ,B.eoA,B.eoB,B.eoz,B.eoC,B.eoy,B.eoD,B.eox,B.eoE,B.eow,B.eov,B.eou,B.eot,B.eos])
t(B.bwy,B.aLv)
t(B.aDE,B.bwy)
u(C.mL,[B.bge,B.bam,B.bri,B.b92,B.bpX,B.bpo,B.b9I,B.bpq,B.btn,B.bgc,B.brd,B.bkz,B.bs4,B.ba2,B.bh6,B.bkA,B.bhO,B.bd7,B.b97,B.beB,B.aif,B.b8f,B.buo,B.aec,B.bgh,B.bgw,B.buA,B.bpp,B.bkN,B.beI,B.brb,B.b9U,B.bqK,B.b9i,B.bey,B.bq_])
t(B.aKy,B.aKx)
t(B.aC3,B.aKy)
t(B.bwh,B.aKD)
t(B.aC6,B.bwh)
u(C.m8,[B.K9,B.a_U,B.J5])
u(C.au,[B.bqk,B.aet,B.adl,B.PM,B.bqO,B.a7S,B.bct,B.b63,B.dA,B.eQ,B.av7,B.fi,B.F2])
t(B.aGE,B.aMm)
t(B.bgb,C.oK)
t(B.aDD,B.aLt)
t(B.bjQ,B.aLC)
t(B.aDT,B.aLI)
t(B.bwx,B.aLq)
t(B.aDv,B.bwx)
t(B.bwF,B.aLF)
t(B.bjV,B.bwF)
t(B.bwg,B.aKB)
t(B.aC5,B.bwg)
t(B.bwv,B.aLo)
t(B.bju,B.bwv)
t(B.bww,B.aLp)
t(B.aDu,B.bww)
t(B.aCz,B.aKP)
t(B.bio,B.aKt)
t(B.biW,B.aKX)
t(B.ax0,B.ax_)
t(B.aie,B.ax0)
t(B.aCA,B.bwj)
t(B.b8g,B.aJ_)
t(B.biI,B.aKM)
t(B.bwo,B.aLd)
t(B.bjh,B.bwo)
t(B.bwp,B.aLe)
t(B.aDe,B.bwp)
t(B.bwG,B.aLQ)
t(B.aE5,B.bwG)
t(B.bwk,B.aKS)
t(B.biR,B.bwk)
t(B.bwf,B.aKz)
t(B.bit,B.bwf)
t(B.bwu,B.aLm)
t(B.bjs,B.bwu)
t(B.aKZ,B.aKY)
t(B.aCL,B.aKZ)
t(B.bwC,B.aLB)
t(B.bjP,B.bwC)
t(B.bwm,B.aL_)
t(B.aCM,B.bwm)
t(B.bwA,B.aLy)
t(B.bjM,B.bwA)
t(B.bwe,B.aKw)
t(B.bis,B.bwe)
t(B.bwl,B.aKV)
t(B.biU,B.bwl)
t(B.bwz,B.aLx)
t(B.bjL,B.bwz)
w(B.aLv,C.c9)
w(B.bwy,B.mB)
w(B.aKx,C.c9)
w(B.aKy,B.mB)
w(B.aKD,C.c9)
w(B.bwh,B.mB)
w(B.aMm,C.eR)
w(B.aLt,C.c9)
w(B.aLC,C.c9)
w(B.aLI,C.c9)
w(B.aKB,C.c9)
w(B.bwg,B.mB)
w(B.aLq,C.c9)
w(B.bwx,B.mB)
w(B.aLF,C.c9)
w(B.bwF,B.mB)
w(B.aLo,C.c9)
w(B.bwv,B.mB)
w(B.aLp,C.c9)
w(B.bww,B.mB)
w(B.aKP,C.c9)
w(B.aKt,C.c9)
w(B.aKX,C.c9)
w(B.ax_,C.c9)
w(B.ax0,B.mB)
w(B.aJ_,C.c9)
v(B.bwj,C.ez)
w(B.aKM,C.c9)
w(B.aLd,C.c9)
w(B.bwo,B.mB)
w(B.aLe,C.c9)
w(B.bwp,B.mB)
w(B.aKz,C.c9)
w(B.bwf,B.mB)
w(B.aKS,C.c9)
w(B.bwk,B.mB)
w(B.aLm,C.c9)
w(B.bwu,B.mB)
w(B.aLQ,C.c9)
w(B.bwG,B.mB)
w(B.aKY,C.c9)
w(B.aKZ,B.mB)
w(B.aL_,C.c9)
w(B.bwm,B.mB)
w(B.aLy,C.c9)
w(B.bwA,B.mB)
w(B.aLB,C.c9)
w(B.bwC,B.mB)
w(B.aKw,C.c9)
w(B.bwe,B.mB)
w(B.aKV,C.c9)
w(B.bwl,B.mB)
w(B.aLx,C.c9)
w(B.bwz,B.mB)})()
C.jY(b.typeUniverse,JSON.parse('{"V4":{"ag":[],"r":[]},"bjf":{"ah":["V4"]},"Vw":{"ag":[],"r":[]},"aDE":{"ah":["Vw"]},"bge":{"aB":[]},"TX":{"ag":[],"r":[]},"aC3":{"ah":["TX"]},"U1":{"ag":[],"r":[]},"aC6":{"ah":["U1"]},"bam":{"aB":[]},"aet":{"au":[],"r":[]},"adl":{"au":[],"r":[]},"aGD":{"ag":[],"r":[]},"N4":{"ag":[],"r":[]},"aCn":{"ah":["N4"]},"bqk":{"au":[],"r":[]},"PM":{"au":[],"r":[]},"bri":{"aB":[]},"bqO":{"au":[],"r":[]},"b92":{"aB":[]},"aGE":{"ah":["aGD"]},"bpX":{"aB":[]},"bpo":{"aB":[]},"b9I":{"aB":[]},"bpq":{"aB":[]},"btn":{"aB":[]},"Vv":{"ag":[],"r":[]},"bgb":{"aB":[]},"aDD":{"ah":["Vv"]},"bgc":{"aB":[]},"VK":{"ag":[],"r":[]},"VW":{"ag":[],"r":[]},"bjQ":{"ah":["VK"]},"brd":{"aB":[]},"aDT":{"ah":["VW"]},"Vs":{"ag":[],"r":[]},"VR":{"ag":[],"r":[]},"U_":{"ag":[],"r":[]},"aDv":{"ah":["Vs"]},"bkz":{"aB":[]},"bjV":{"ah":["VR"]},"bs4":{"aB":[]},"aC5":{"ah":["U_"]},"ba2":{"aB":[]},"Vm":{"ag":[],"r":[]},"Vr":{"ag":[],"r":[]},"bju":{"ah":["Vm"]},"bh6":{"aB":[]},"aDu":{"ah":["Vr"]},"bkA":{"aB":[]},"Vp":{"ag":[],"r":[]},"Un":{"ag":[],"r":[]},"UD":{"ag":[],"r":[]},"aDs":{"ah":["Vp"]},"bhO":{"aB":[]},"biK":{"ah":["Un"]},"aCz":{"ah":["UD"]},"bd7":{"aB":[]},"TS":{"ag":[],"r":[]},"UR":{"ag":[],"r":[]},"U0":{"ag":[],"r":[]},"bio":{"ah":["TS"]},"b97":{"aB":[]},"biW":{"ah":["UR"]},"beB":{"aB":[]},"biB":{"ah":["U0"]},"aif":{"aB":[]},"aid":{"ag":[],"r":[]},"aie":{"ah":["aid"]},"UE":{"ag":[],"r":[]},"awH":{"ag":[],"r":[]},"aCA":{"ah":["UE"],"ez":[]},"b8g":{"ah":["awH"]},"b8f":{"aB":[]},"Ul":{"ag":[],"r":[]},"biI":{"ah":["Ul"]},"buo":{"aB":[]},"aec":{"aB":[]},"V9":{"ag":[],"r":[]},"Vb":{"ag":[],"r":[]},"bjh":{"ah":["V9"]},"bgh":{"aB":[]},"aDe":{"ah":["Vb"]},"bgw":{"aB":[]},"a7S":{"au":[],"r":[]},"W1":{"ag":[],"r":[]},"UL":{"ag":[],"r":[]},"TY":{"ag":[],"r":[]},"UC":{"ag":[],"r":[]},"Vn":{"ag":[],"r":[]},"VA":{"ag":[],"r":[]},"VV":{"ag":[],"r":[]},"Vl":{"ag":[],"r":[]},"aE5":{"ah":["W1"]},"buA":{"aB":[]},"biR":{"ah":["UL"]},"bpp":{"aB":[]},"bit":{"ah":["TY"]},"biL":{"ah":["UC"]},"bkN":{"aB":[]},"aDo":{"ah":["Vn"]},"aDK":{"ah":["VA"]},"bjZ":{"ah":["VV"]},"bjs":{"ah":["Vl"]},"bct":{"au":[],"r":[]},"b63":{"au":[],"r":[]},"dA":{"au":[],"r":[]},"eQ":{"au":[],"r":[]},"av7":{"au":[],"r":[]},"fi":{"au":[],"r":[]},"F2":{"au":[],"r":[]},"US":{"ag":[],"r":[]},"aCL":{"ah":["US"]},"beI":{"aB":[]},"VY":{"ag":[],"r":[]},"bk2":{"ah":["VY"]},"VJ":{"ag":[],"r":[]},"UT":{"ag":[],"r":[]},"VB":{"ag":[],"r":[]},"bjP":{"ah":["VJ"]},"brb":{"aB":[]},"aCM":{"ah":["UT"]},"b9U":{"aB":[]},"bjM":{"ah":["VB"]},"bqK":{"aB":[]},"TW":{"ag":[],"r":[]},"UP":{"ag":[],"r":[]},"Vx":{"ag":[],"r":[]},"bis":{"ah":["TW"]},"b9i":{"aB":[]},"biU":{"ah":["UP"]},"bey":{"aB":[]},"bjL":{"ah":["Vx"]},"bq_":{"aB":[]}}'))
C.Ka(b.typeUniverse,JSON.parse('{"mB":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lV<w?>"),e8:w("d4"),G:w("w"),l:w("bk<n,n>"),J:w("bk<n,M>"),I:w("bk<n,H>"),R:w("eI<n>"),Z:w("a_"),M:w("O<da>"),f5:w("O<a2B>"),gh:w("O<aRe>"),h:w("O<a2F>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<S>"),dh:w("O<Hp>"),aJ:w("O<az<aC>>"),w:w("O<a_>"),Q:w("O<ai<w>>"),B:w("O<ai<Hp>>"),gO:w("O<ai<ai<M>>>"),bj:w("O<ai<n>>"),b:w("O<ai<M>>"),fA:w("O<ai<H?>>"),D:w("O<a4<n,aC>>"),g:w("O<u>"),bz:w("O<to>"),ds:w("O<a8e>"),v:w("O<hp>"),U:w("O<+(u,M)>"),ev:w("O<+(u,H)>"),K:w("O<+(n,n)>"),fT:w("O<+(M,r)>"),E:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a_)>"),e:w("O<+(n,M,M,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,M,M,a4<n,M>)>"),_:w("O<uK>"),q:w("O<cR>"),fQ:w("O<a9S>"),s:w("O<n>"),cF:w("O<as>"),X:w("O<w8>"),F:w("O<aaE>"),p:w("O<r>"),bL:w("O<aaZ>"),fH:w("O<lj>"),aq:w("O<b8W>"),a_:w("O<abc>"),cS:w("O<abj>"),cB:w("O<nj>"),ba:w("O<abt>"),d9:w("O<Pm>"),bi:w("O<abM>"),eW:w("O<Cb>"),fY:w("O<YS>"),aX:w("O<Fz>"),ea:w("O<acB>"),gB:w("O<ad6>"),ed:w("O<PD>"),g4:w("O<bkM>"),aS:w("O<a_o>"),ac:w("O<adp>"),cd:w("O<Cl>"),fr:w("O<aej>"),e4:w("O<a06>"),r:w("O<aeo>"),au:w("O<aHu>"),f7:w("O<R>"),n:w("O<M>"),t:w("O<H>"),dS:w("O<aB?>"),fs:w("O<to?>"),d4:w("O<n?>"),bN:w("O<H?>"),gJ:w("cs<aie>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<S>"),ew:w("ai<aC>"),j:w("ai<@>"),bW:w("ai<H>"),a:w("a4<n,@>"),f:w("a4<@,@>"),bd:w("K<eb,n>"),dv:w("K<n,n>"),fR:w("K<+(M,r),r>"),m:w("iA"),gA:w("z2"),gD:w("vJ"),P:w("cq"),C:w("aC"),W:w("to"),dV:w("eb"),g7:w("BU"),N:w("n"),bO:w("as"),k:w("kh"),Y:w("bp<M>"),cL:w("aaF"),gj:w("cx<n>"),aC:w("cx<H?>"),dg:w("e9<qG>"),e3:w("b9l"),a2:w("C7"),f3:w("qG"),es:w("FD"),gV:w("mZ"),y:w("R"),i:w("M"),z:w("@"),S:w("H"),L:w("ai<@>?"),fF:w("a4<@,@>?"),cK:w("aC?"),az:w("pT?"),T:w("n?"),cD:w("M?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWg=new C.da(0,0.85)
D.fxs=new C.x("Tap once to start the chain",null,K.Ty,null,null,null,null,null,null,null,null,null)
D.aVP=new C.bI(D.aWg,null,null,D.fxs,null)
D.aW6=new C.da(0,0.1)
D.aXa=new B.aRo(0,0,0)
D.K_=new B.aRo(0,0.5,0)
D.aXH=new C.ay(A.b2,1,A.q,-1)
D.aZa=new C.aY(0,1/0,0,290)
D.aZh=new C.aY(16,1/0,16,1/0)
D.eZE=new C.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzN=new C.x("\u26a1",null,D.eZE,null,null,null,null,null,null,null,null,null)
D.b3T=new C.cr(A.A,null,null,D.fzN,null)
D.aPQ=new C.G(!0,A.c1,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpQ=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aPQ,null,A.L,null,null,null,null,null,null,null)
D.e6Q=new C.D(A.nY,D.fpQ,null)
D.b41=new C.cr(A.A,null,null,D.e6Q,null)
D.ftv=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kG,null,A.L,null,null,null,null,null,null,null)
D.e6U=new C.D(A.nY,D.ftv,null)
D.b4m=new C.cr(A.A,null,null,D.e6U,null)
D.f9p=new C.G(!0,A.jd,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyc=new C.x("Draw anywhere",null,D.f9p,null,null,null,null,null,null,null,null,null)
D.b4q=new C.cr(A.A,null,null,D.fyc,null)
D.fg5=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aPQ,null,A.L,null,null,null,null,null,null,null)
D.e7B=new C.D(A.Fk,D.fg5,null)
D.b4J=new C.cr(A.A,null,null,D.e7B,null)
D.abD=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b7l=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b87=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.VR=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b8d=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b8i=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b8n=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.VT=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b9s=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b9x=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b9R=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.baZ=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.acX=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bbr=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.As=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.bce=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.adn=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bcQ=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bcX=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.ady=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.Wv=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bdq=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.adI=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.adV=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.WG=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bfb=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bfe=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bfi=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bfr=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.aem=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bfO=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.ED=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bgV=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bh2=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bh6=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bhh=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bhl=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bhs=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.va=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.afb=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.biy=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bjh=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bjK=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bk9=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.afC=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.boy=new C.b9(11e6)
D.bpz=new C.Q(0,0,8,6)
D.agz=new C.Q(0,0,9,0)
D.bq6=new C.Q(10,0,10,4)
D.bqb=new C.Q(10,10,10,6)
D.bqj=new C.Q(10,34,10,26)
D.bqr=new C.Q(10,6,10,2)
D.Y7=new C.Q(10,6,10,4)
D.bqt=new C.Q(10,8,0,10)
D.br3=new C.Q(12,8,8,8)
D.br8=new C.Q(14,0,14,22)
D.bra=new C.Q(14,0,14,30)
D.ah_=new C.Q(14,0,14,6)
D.ah6=new C.Q(14,10,8,12)
D.brH=new C.Q(14,8,14,6)
D.bs8=new C.Q(16,4,16,28)
D.bsi=new C.Q(16,8,16,12)
D.bun=new C.Q(26,12,26,58)
D.bva=new C.Q(4,4,6,2)
D.bvc=new C.Q(4,4,8,2)
D.bvM=new C.Q(8,14,8,12)
D.bvT=new C.Q(8,40,8,30)
D.bvX=new C.Q(8,6,16,0)
D.bvY=new C.Q(8,6,8,8)
D.bwi=new C.Q(0,0,1.5,0)
D.aWX=new C.GP(26,"saturation")
D.bwA=new C.yJ(A.cU,D.aWX,null,A.abB)
D.ff9=new C.x("REACTION LAB",null,Y.aQr,null,null,null,null,A.a2,null,1,null,null)
D.bwH=new C.bD(1,A.bh,D.ff9,null)
D.f6j=new C.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fii=new C.x("CORE PROTOCOL",null,D.f6j,null,null,null,null,null,null,null,null,null)
D.bwU=new C.bD(1,A.bh,D.fii,null)
D.fj0=new C.x("\ud83d\udce2 NGMY Ads",null,A.qo,null,null,null,null,A.eD,null,1,null,null)
D.bxA=new C.bD(1,A.bh,D.fj0,null)
D.fdS=new C.x("Wire selected",null,A.hs,null,null,null,null,null,null,null,null,null)
D.bxO=new C.bD(1,A.bh,D.fdS,null)
D.ake=new C.a_(62712,"MaterialIcons",!1)
D.bCG=new C.a_(62878,"MaterialIcons",!1)
D.a_p=new C.a_(62908,"MaterialIcons",!1)
D.bCJ=new C.a_(62918,"MaterialIcons",!1)
D.bCK=new C.a_(62931,"MaterialIcons",!1)
D.bCN=new C.a_(62951,"MaterialIcons",!1)
D.bD3=new C.a_(63064,"MaterialIcons",!1)
D.bD5=new C.a_(63070,"MaterialIcons",!1)
D.y3=new C.a_(63128,"MaterialIcons",!1)
D.G3=new C.a_(63726,"MaterialIcons",!1)
D.bEo=new C.a_(983122,"MaterialIcons",!1)
D.bED=new C.a_(983247,"MaterialIcons",!1)
D.bEP=new C.a_(983415,"MaterialIcons",!1)
D.bEQ=new C.a_(983417,"MaterialIcons",!1)
D.bER=new C.a_(983442,"MaterialIcons",!1)
D.bES=new C.a_(983443,"MaterialIcons",!1)
D.aly=new C.a_(983467,"MaterialIcons",!1)
D.bEY=new C.a_(983501,"MaterialIcons",!1)
D.bF8=new C.a_(983616,"MaterialIcons",!1)
D.bF9=new C.a_(983624,"MaterialIcons",!1)
D.bFm=new C.a_(983776,"MaterialIcons",!1)
D.bFD=new C.a_(984561,"MaterialIcons",!1)
D.bGd=new C.ae(A.r9,24,A.aM,null,null,null)
D.bGX=new C.ae(A.Nz,null,A.ad,null,null,null)
D.bHu=new C.ae(A.mu,21,A.ad,null,null,null)
D.bEn=new C.a_(983117,"MaterialIcons",!1)
D.bIR=new C.ae(D.bEn,28,A.c,null,null,null)
D.bJ6=new C.ae(A.jk,18,null,null,null,null)
D.bKR=new C.ae(A.e6,21,A.cf,null,null,null)
D.bL5=new C.ae(A.mv,null,A.ad,null,null,null)
D.bLf=new C.ae(A.a0i,21,A.ad,null,null,null)
D.bM4=new C.ae(A.eC,17,A.ad,null,null,null)
D.amY=new C.ae(A.eC,19,null,null,null,null)
D.mz=new C.ae(A.vG,21,A.ad,null,null,null)
D.bNx=new C.ae(A.N0,null,A.ad,null,null,null)
D.bOG=new C.ae(A.jk,21,A.ad,null,null,null)
D.bPy=new C.ae(A.fe,20,A.aA,null,null,null)
D.bQe=new C.ae(A.dW,null,A.aM,null,null,null)
D.bQz=new C.ae(A.k_,null,A.aA,null,null,null)
D.dbD=w([A.di,A.d3,A.di],x.O)
D.bTq=new C.a8(A.a3,A.a7,A.x,D.dbD,null,null)
D.cQI=w([A.bO,A.bk],x.O)
D.bTy=new C.a8(A.b_,A.b5,A.x,D.cQI,null,null)
D.bTJ=new C.a8(A.b_,A.b5,A.x,A.ax6,null,null)
D.cR3=w([A.fT,A.f6],x.O)
D.bTS=new C.a8(A.b_,A.b5,A.x,D.cR3,null,null)
D.ao_=new C.a8(A.b_,A.b5,A.x,M.a1Z,null,null)
D.cOv=w([A.os,A.i9],x.O)
D.bUv=new C.a8(A.b_,A.b5,A.x,D.cOv,null,null)
D.cQq=w([A.ee,A.az],x.O)
D.ao6=new C.a8(A.b_,A.b5,A.x,D.cQq,null,null)
D.d64=w([A.dA,A.iQ,A.bk],x.O)
D.bUN=new C.a8(A.a3,A.a7,A.x,D.d64,null,null)
D.d6a=w([A.je,A.cC],x.O)
D.bV6=new C.a8(A.b_,A.b5,A.x,D.d6a,null,null)
D.cni=w([A.bO,A.dA],x.O)
D.bVf=new C.a8(A.a3,A.a7,A.x,D.cni,null,null)
D.axM=w([A.ee,L.n_],x.O)
D.bVm=new C.a8(A.b_,A.b5,A.x,D.axM,null,null)
D.bVE=new C.a8(A.b_,A.b5,A.x,I.aot,null,null)
D.bdx=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b6K=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cLU=w([D.bdx,D.b6K],x.O)
D.bVR=new C.a8(A.b_,A.b5,A.x,D.cLU,null,null)
D.bWr=new C.a8(A.ax,A.aC,A.x,A.a1W,null,null)
D.bi_=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dh0=w([D.bi_,A.Kx],x.O)
D.bWy=new C.a8(A.b_,A.b5,A.x,D.dh0,null,null)
D.cZr=w([A.az,A.w],x.O)
D.bWD=new C.a8(A.b_,A.b5,A.x,D.cZr,null,null)
D.bWG=new C.a8(A.b_,A.b5,A.x,S.axa,null,null)
D.bhp=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bi8=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.czY=w([A.Li,D.bhp,D.bi8],x.O)
D.bWQ=new C.a8(A.b_,A.b5,A.x,D.czY,null,null)
D.cnC=w([A.d5,A.fy],x.O)
D.bX5=new C.a8(A.b_,A.b5,A.x,D.cnC,null,null)
D.bXb=new C.a8(A.ax,A.aC,A.x,A.a2J,null,null)
D.aov=w([0,2,4,6,7,9,11],x.t)
D.bXN=w([0,4,7],x.t)
D.aoA=w([0,4,7,12],x.t)
D.bXO=w([0,4,7,4],x.t)
D.awS=w([A.h2,A.pE],x.O)
D.awo=w([A.hw,A.cY],x.O)
D.auQ=w([A.bt,A.dQ],x.O)
D.cIu=w([A.aM,A.d5],x.O)
D.cOR=w([A.cf,A.eP],x.O)
D.d7g=w([A.bZ,A.lG],x.O)
D.auj=w([A.cs,A.jT],x.O)
D.cNs=w([A.bJ,A.aK],x.O)
D.bY7=w([D.awS,D.awo,A.a23,D.auQ,D.cIu,D.cOR,A.avX,D.d7g,D.auj,D.cNs],x.Q)
D.c1M=w([120,220,380],x.t)
D.c5w=w([12,16,19,24],x.t)
D.c5F=w([1400,800,450,2400],x.t)
D.c9W=w([0,0.6,1],x.n)
D.ce4=w([250,450,900,1500],x.t)
D.b7y=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bhL=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bfQ=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bkV=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bf1=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.atz=w([D.b7y,D.bhL,D.bfQ,D.bkV,D.bf1],x.O)
D.eAu=new C.z("type","Typewriter")
D.etl=new C.z("bounce","Bounce")
D.eBh=new C.z("wave","Wave")
D.eCm=new C.z("zoom","Zoom")
D.cuL=w([D.eAu,D.etl,D.eBh,A.a5R,I.aLM,D.eCm,I.aLO],x.K)
D.cuZ=w([50,25,75],x.t)
D.cAt=w([0,5,10,15,18,20,25],x.t)
D.euZ=new C.z("fish","Fish")
D.ev0=new C.z("fly","Fireflies")
D.etj=new C.z("bird","Birds")
D.cEG=w([D.euZ,D.ev0,D.etj],x.K)
D.cIL=w([900,500,250,1600],x.t)
D.cMi=w([0.78,1],x.n)
D.auR=w([0,2,4,7,9,12,14,16],x.t)
D.cMQ=w([A.bt,A.bA,A.b8,A.bt],x.O)
D.auW=w(["A","T","C","G"],x.s)
D.cMR=w(["A","U","C","G"],x.s)
D.a1T=w([A.ay,A.c7,A.bl,A.aR,A.nP],x.O)
D.cOa=w([A.az,A.ay,A.cs,A.c7,A.bl,A.cy,A.ce,A.bA,A.Kx],x.O)
D.a1X=w([0.04,0.17,0.3],x.n)
D.cON=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.GP=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eKp=new B.uK("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eKv=new B.uK("Medium engine","A good all-rounder.",0.3,0.9)
D.eKu=new B.uK("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.GQ=w([D.eKp,D.eKv,D.eKu],x._)
D.ejg=new C.z(6,"Easy")
D.ejV=new C.z(8,"Medium")
D.efp=new C.z(10,"Hard")
D.cPC=w([D.ejg,D.ejV,D.efp],x.E)
D.avf=w([0.55,0.78,1],x.n)
D.cR8=w([0.93,0.975,1],x.n)
D.avq=w([A.c,A.h3,A.ot,A.az],x.O)
D.fCL=new B.xV("Moon",1737,4291941851)
D.fCI=new B.xV("Earth",6371,4281908728)
D.fCM=new B.xV("Neptune",24622,4284524026)
D.fCN=new B.xV("Saturn",58232,4294829706)
D.fCJ=new B.xV("Jupiter",69911,4294677052)
D.fCO=new B.xV("Sun",696340,4294688548)
D.fCP=new B.xV("Sirius A",119e4,4290763774)
D.fCG=new B.xV("Arcturus",179e5,4294818420)
D.fCH=new B.xV("Betelgeuse",531e6,4294472049)
D.fCK=new B.xV("UY Scuti",667e6,4293870660)
D.PL=w([D.fCL,D.fCI,D.fCM,D.fCN,D.fCJ,D.fCO,D.fCP,D.fCG,D.fCH,D.fCK],C.ax("O<xV>"))
D.eFW=new C.bo("glow","Glow",A.a_r)
D.eDv=new C.bo("rainbow","Rainbow",A.nh)
D.eDS=new C.bo("stars","Stars",A.i2)
D.eDf=new C.bo("sparks","Sparks",A.dW)
D.eFc=new C.bo("fire","Fire",A.vH)
D.cSY=w([D.eFW,D.eDv,D.eDS,D.eDf,D.eFc],x.c)
D.avu=w([A.bl,A.ay,A.c7,A.d3],x.O)
D.cTY=w([0.2,1],x.n)
D.eKm=new B.uK("Radar","Shows your height above the ground.",0.1,0)
D.eKn=new B.uK("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eKk=new B.uK("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.avC=w([D.eKm,D.eKn,D.eKk],x._)
D.eEs=new C.bo("attract","Attract",A.yk)
D.eEe=new C.bo("scare","Scare",A.r7)
D.eDo=new C.bo("food","Food",A.tZ)
D.bEt=new C.a_(983158,"MaterialIcons",!1)
D.eEL=new C.bo("hunt","Hunt",D.bEt)
D.cUA=w([D.eEs,D.eEe,D.eDo,D.eEL],x.c)
D.cUZ=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cVd=w([47,100,220,470,1000],x.n)
D.avU=w([0,2,4,7,9],x.t)
D.HT={volts:0}
D.a3G=new C.bk(D.HT,[3],x.J)
D.If=new C.e7(["b","battery",0.2,0.3,D.a3G])
D.e2b={on:0}
D.dlH=new C.bk(D.e2b,[1],x.J)
D.D_=new C.e7(["s","switch",0.5,0.3,D.dlH])
D.eIv=new C.e7(["l","bulb",0.8,0.3,A.iZ])
D.cQP=w([D.If,D.D_,D.eIv],x.d)
D.CZ=new C.cC(["b",0,"s",0])
D.eHw=new C.cC(["s",1,"l",0])
D.aLS=new C.cC(["l",1,"b",1])
D.d6f=w([D.CZ,D.eHw,D.aLS],x.o)
D.cQi=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eeJ=new B.my("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cQP,D.d6f,D.cQi)
D.aG_={ohms:0}
D.aDz=new C.bk(D.aG_,[220],x.J)
D.eHZ=new C.e7(["r","resistor",0.5,0.3,D.aDz])
D.eIK=new C.e7(["d","led",0.8,0.3,A.iZ])
D.d9d=w([D.If,D.eHZ,D.eIK],x.d)
D.eGS=new C.cC(["b",0,"r",0])
D.eHq=new C.cC(["r",1,"d",0])
D.eGY=new C.cC(["d",1,"b",1])
D.dhu=w([D.eGS,D.eHq,D.eGY],x.o)
D.d9D=w(["led","diode","indicator"],x.s)
D.eeQ=new B.my("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d9d,D.dhu,D.d9D)
D.a4X={level:0}
D.dl3=new C.bk(D.a4X,[0.2],x.J)
D.eI4=new C.e7(["p","pot",0.5,0.3,D.dl3])
D.eI6=new C.e7(["m","motor",0.8,0.3,A.iZ])
D.cR6=w([D.If,D.eI4,D.eI6],x.d)
D.eGR=new C.cC(["b",0,"p",0])
D.eHm=new C.cC(["p",1,"m",0])
D.eHi=new C.cC(["m",1,"b",1])
D.ddx=w([D.eGR,D.eHm,D.eHi],x.o)
D.d5Z=w(["fan","motor","spin","dimmer"],x.s)
D.eeH=new B.my("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cR6,D.ddx,D.d5Z)
D.a3D=new C.bk(D.a4X,[0.9],x.J)
D.aLZ=new C.e7(["s","solar",0.25,0.3,D.a3D])
D.aLY=new C.e7(["l","bulb",0.75,0.3,A.iZ])
D.cTF=w([D.aLZ,D.aLY],x.d)
D.eHt=new C.cC(["s",0,"l",0])
D.eHh=new C.cC(["l",1,"s",1])
D.cRR=w([D.eHt,D.eHh],x.o)
D.de5=w(["solar","sun","without battery","no battery","free"],x.s)
D.eeK=new B.my("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cTF,D.cRR,D.de5)
D.eIN=new C.e7(["c","crank",0.25,0.3,D.a3D])
D.d4n=w([D.eIN,D.aLY],x.d)
D.eGV=new C.cC(["c",0,"l",0])
D.eHg=new C.cC(["l",1,"c",1])
D.d4V=w([D.eGV,D.eHg],x.o)
D.d4w=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eeG=new B.my("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d4n,D.d4V,D.d4w)
D.dl2=new C.bk(D.a4X,[0.7],x.J)
D.eI9=new C.e7(["t","turbine",0.25,0.3,D.dl2])
D.eHX=new C.e7(["m","motor",0.75,0.3,A.iZ])
D.d_3=w([D.eI9,D.eHX],x.d)
D.eHE=new C.cC(["t",0,"m",0])
D.eHj=new C.cC(["m",1,"t",1])
D.cZ5=w([D.eHE,D.eHj],x.o)
D.d3g=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eeD=new B.my("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d_3,D.cZ5,D.d3g)
D.aDw=new C.bk(D.HT,[9],x.J)
D.a5U=new C.e7(["b","battery",0.2,0.3,D.aDw])
D.aLX=new C.e7(["r","radio",0.8,0.3,A.iZ])
D.deE=w([D.a5U,D.D_,D.aLX],x.d)
D.eHy=new C.cC(["s",1,"r",0])
D.aLT=new C.cC(["r",1,"b",1])
D.bXv=w([D.CZ,D.eHy,D.aLT],x.o)
D.ddj=w(["radio","music","listen"],x.s)
D.eeP=new B.my("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.deE,D.bXv,D.ddj)
D.dm8=new C.bk(D.HT,[12],x.J)
D.aLW=new C.e7(["b","battery",0.2,0.3,D.dm8])
D.eIw=new C.e7(["t","tv",0.8,0.3,A.iZ])
D.cQQ=w([D.aLW,D.D_,D.eIw],x.d)
D.eHz=new C.cC(["s",1,"t",0])
D.aLU=new C.cC(["t",1,"b",1])
D.d7j=w([D.CZ,D.eHz,D.aLU],x.o)
D.deC=w(["tv","television","screen","watch"],x.s)
D.eeA=new B.my("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cQQ,D.d7j,D.deC)
D.eIm=new C.e7(["z","buzzer",0.8,0.3,A.iZ])
D.cxi=w([D.If,D.D_,D.eIm],x.d)
D.eHA=new C.cC(["s",1,"z",0])
D.eHS=new C.cC(["z",1,"b",1])
D.cM4=w([D.CZ,D.eHA,D.eHS],x.o)
D.dbI=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eeM=new B.my("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cxi,D.cM4,D.dbI)
D.eI5=new C.e7(["h","heater",0.8,0.3,A.iZ])
D.d1Z=w([D.a5U,D.D_,D.eI5],x.d)
D.eHv=new C.cC(["s",1,"h",0])
D.eH5=new C.cC(["h",1,"b",1])
D.cMM=w([D.CZ,D.eHv,D.eH5],x.o)
D.chl=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eeB=new B.my("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d1Z,D.cMM,D.chl)
D.eIy=new C.e7(["s","solar",0.2,0.25,D.a3D])
D.dmd=new C.bk(D.aG_,[100],x.J)
D.eIB=new C.e7(["r","resistor",0.55,0.25,D.dmd])
D.eII=new C.e7(["c","capacitor",0.85,0.25,A.iZ])
D.eI1=new C.e7(["q","resistor",0.55,0.6,D.aDz])
D.eIz=new C.e7(["d","led",0.85,0.6,A.iZ])
D.d6W=w([D.eIy,D.eIB,D.eII,D.eI1,D.eIz],x.d)
D.eHu=new C.cC(["s",0,"r",0])
D.eHp=new C.cC(["r",1,"c",0])
D.eGX=new C.cC(["c",1,"s",1])
D.eGW=new C.cC(["c",0,"q",0])
D.eHo=new C.cC(["q",1,"d",0])
D.eGZ=new C.cC(["d",1,"c",1])
D.cX5=w([D.eHu,D.eHp,D.eGX,D.eGW,D.eHo,D.eGZ],x.o)
D.d3L=w(["capacitor","store","charge","flash"],x.s)
D.eeO=new B.my("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d6W,D.cX5,D.d3L)
D.eIc=new C.e7(["b","battery",0.15,0.3,D.a3G])
D.eIO=new C.e7(["l1","bulb",0.5,0.3,A.iZ])
D.eIj=new C.e7(["l2","bulb",0.85,0.3,A.iZ])
D.cP4=w([D.eIc,D.eIO,D.eIj],x.d)
D.eGQ=new C.cC(["b",0,"l1",0])
D.eHd=new C.cC(["l1",1,"l2",0])
D.eHe=new C.cC(["l2",1,"b",1])
D.d_J=w([D.eGQ,D.eHd,D.eHe],x.o)
D.deo=w(["series","two bulbs","dim"],x.s)
D.eeE=new B.my("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cP4,D.d_J,D.deo)
D.e2p={volts:0,charge:1}
D.dmi=new C.bk(D.e2p,[1.5,0],x.J)
D.eIG=new C.e7(["b","battery",0.75,0.3,D.dmi])
D.cOw=w([D.aLZ,D.eIG],x.d)
D.eHs=new C.cC(["s",0,"b",0])
D.eGU=new C.cC(["b",1,"s",1])
D.cXm=w([D.eHs,D.eGU],x.o)
D.d3T=w(["charge","rechargeable","flat","recharge"],x.s)
D.eeC=new B.my("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cOw,D.cXm,D.d3T)
D.dm7=new C.bk(D.HT,[4.5],x.J)
D.eI7=new C.e7(["b","battery",0.2,0.3,D.dm7])
D.aLV=new C.e7(["p","phone",0.8,0.3,A.iZ])
D.cZU=w([D.eI7,D.D_,D.aLV],x.d)
D.eHx=new C.cC(["s",1,"p",0])
D.a5T=new C.cC(["p",1,"b",1])
D.daI=w([D.CZ,D.eHx,D.a5T],x.o)
D.dc6=w(["phone","charger","usb","mobile"],x.s)
D.eeI=new B.my("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cZU,D.daI,D.dc6)
D.eHU=new C.e7(["f","fan",0.8,0.3,A.iZ])
D.c9v=w([D.If,D.eHU],x.d)
D.eGP=new C.cC(["b",0,"f",0])
D.eH3=new C.cC(["f",1,"b",1])
D.cNg=w([D.eGP,D.eH3],x.o)
D.d5Y=w(["fan","cool","air","wind"],x.s)
D.eeR=new B.my("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c9v,D.cNg,D.d5Y)
D.eIq=new C.e7(["b","battery",0.15,0.2,D.a3G])
D.eHV=new C.e7(["a","ammeter",0.5,0.2,A.iZ])
D.eHT=new C.e7(["l","bulb",0.85,0.2,A.iZ])
D.eIs=new C.e7(["v","voltmeter",0.5,0.6,A.iZ])
D.d4b=w([D.eIq,D.eHV,D.eHT,D.eIs],x.d)
D.eGN=new C.cC(["b",0,"a",0])
D.eGM=new C.cC(["a",1,"l",0])
D.eHG=new C.cC(["v",0,"l",0])
D.eHH=new C.cC(["v",1,"l",1])
D.cXd=w([D.eGN,D.eGM,D.aLS,D.eHG,D.eHH],x.o)
D.dht=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eeN=new B.my("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d4b,D.cXd,D.dht)
D.eIR=new C.e7(["b","battery",0.15,0.2,D.aDw])
D.eIb=new C.e7(["t","tv",0.55,0.2,A.iZ])
D.aDx=new C.bk(D.HT,[5],x.J)
D.eI_=new C.e7(["c","buck",0.4,0.5,D.aDx])
D.eId=new C.e7(["p","phone",0.8,0.5,A.iZ])
D.cV0=w([D.eIR,D.eIb,D.eI_,D.eId],x.d)
D.eGT=new C.cC(["b",0,"t",0])
D.aLQ=new C.cC(["b",0,"c",0])
D.aLR=new C.cC(["c",1,"p",0])
D.cZR=w([D.eGT,D.aLU,D.aLQ,D.aLR,D.a5T],x.o)
D.cTe=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eeF=new B.my("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cV0,D.cZR,D.cTe)
D.eI0=new C.e7(["c","buck",0.5,0.3,D.aDx])
D.cMD=w([D.aLW,D.eI0,D.aLV],x.d)
D.cRf=w([D.aLQ,D.aLR,D.a5T],x.o)
D.ckK=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eez=new B.my("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cMD,D.cRf,D.ckK)
D.eIh=new C.e7(["d","diode",0.5,0.3,A.iZ])
D.d_W=w([D.a5U,D.eIh,D.aLX],x.d)
D.eGO=new C.cC(["b",0,"d",0])
D.eH_=new C.cC(["d",1,"r",0])
D.czO=w([D.eGO,D.eH_,D.aLT],x.o)
D.cSV=w(["diode","protect","backwards","one way"],x.s)
D.eeL=new B.my("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d_W,D.czO,D.cSV)
D.PO=w([D.eeJ,D.eeQ,D.eeH,D.eeK,D.eeG,D.eeD,D.eeP,D.eeA,D.eeM,D.eeB,D.eeO,D.eeE,D.eeC,D.eeI,D.eeR,D.eeN,D.eeF,D.eez,D.eeL],C.ax("O<my>"))
D.h_I=new B.FR("Moon",1.62,A.dA,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.h_G=new B.FR("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.h_J=new B.FR("Mercury",3.7,A.jS,"Mercury is small, so its gravity is like Mars.")
D.h_D=new B.FR("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.h_F=new B.FR("Earth",9.81,A.aR,"On Earth gravity is strong, and the air also slows you down.")
D.h_H=new B.FR("Neptune",11.15,A.d3,"Neptune pulls a little harder than Earth.")
D.h_E=new B.FR("Jupiter",24.79,A.cs,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rh=w([D.h_I,D.h_G,D.h_J,D.h_D,D.h_F,D.h_H,D.h_E],C.ax("O<FR>"))
D.cX3=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a2c=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cXK=w([0.2,0.5,0.8],x.n)
D.bCZ=new C.a_(63040,"MaterialIcons",!1)
D.eEi=new C.bo("peg","Peg",D.bCZ)
D.eDs=new C.bo("bar","Bar",V.BF)
D.eDV=new C.bo("erase","Erase",A.N4)
D.cXX=w([D.eEi,D.eDs,D.eDV],x.c)
D.eNf=new C.cR(A.bi,A.J,4)
D.cY7=w([D.eNf],x.q)
D.aw8=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aUW=new B.K9(0,"accordion")
D.cNy=w([A.jm,A.BG,A.Bu],x.w)
D.cUs=w(["Mail","SMS","Ad"],x.s)
D.cO2=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fYV=new B.Ao(D.aUW,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.awS,D.cNy,D.cUs,D.cO2)
D.a9m=new B.K9(1,"flip")
D.d3F=w([A.pW,A1.Ge,A.u_],x.w)
D.cZA=w(["Unlock","Verify","Secure"],x.s)
D.cMz=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fYU=new B.Ao(D.a9m,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.awo,D.d3F,D.cZA,D.cMz)
D.aUX=new B.K9(2,"towers")
D.cYp=w([A.yg,A.q_,A.hM],x.w)
D.cY2=w(["Save","Grow","Earn"],x.s)
D.cAC=w(["","",""],x.s)
D.fYW=new B.Ao(D.aUX,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a23,D.cYp,D.cY2,D.cAC)
D.a9n=new B.K9(3,"assemble")
D.d4z=w([A.nj,A.h8,A.dW],x.w)
D.cTR=w(["Launch","Charge","Shine"],x.s)
D.d1a=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fYY=new B.Ao(D.a9n,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.auQ,D.d4z,D.cTR,D.d1a)
D.aUY=new B.K9(4,"carousel")
D.d4o=w([A.b8,A.f7],x.O)
D.cUC=w([A.mu,A.akL,A.a0a],x.w)
D.cPs=w(["Explore","Discover","Learn"],x.s)
D.cZZ=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fYT=new B.Ao(D.aUY,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d4o,D.cUC,D.cPs,D.cZZ)
D.aUZ=new B.K9(5,"burst")
D.cXZ=w([A.j9,A.td],x.O)
D.cNY=w([A.lk,A.ms,A.i1],x.w)
D.cOi=w(["Cheer","Win","Love"],x.s)
D.cQo=w(["Make some noise","First place","Share the joy"],x.s)
D.fYX=new B.Ao(D.aUZ,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cXZ,D.cNY,D.cOi,D.cQo)
D.aw9=w([D.fYV,D.fYU,D.fYW,D.fYY,D.fYT,D.fYX],C.ax("O<Ao>"))
D.eEk=new C.bo("skin","Skin",A.akM)
D.eFI=new C.bo("muscle","Muscles",A.Ng)
D.eFq=new C.bo("organ","Organs",A.i1)
D.bCp=new C.a_(62747,"MaterialIcons",!1)
D.eFw=new C.bo("bone","Skeleton",D.bCp)
D.eFO=new C.bo("vessel","Blood vessels",A.q1)
D.cYv=w([D.eEk,D.eFI,D.eFq,D.eFw,D.eFO],x.c)
D.eKo=new B.uK("Simple legs","Light. Land gently.",0.15,0.2)
D.eKq=new B.uK("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eKt=new B.uK("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.C4=w([D.eKo,D.eKq,D.eKt],x._)
D.d_8=w([1.77,3.55,7.15,16.7],x.n)
D.d1z=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.ezY=new C.z("spiral","Spiral")
D.ejd=new C.z("barred","Barred spiral")
D.euu=new C.z("elliptical","Elliptical")
D.d2e=w([D.ezY,D.ejd,D.euu],x.K)
D.eGu=new C.cC(["beat",0.18,0.28,0])
D.eHB=new C.cC(["burst",0.7,0.2,0])
D.eHM=new C.cC(["delay",0.45,0.5,1])
D.eHl=new C.cC(["ripple",0.75,0.6,3])
D.cTA=w([D.eGu,D.eHB,D.eHM,D.eHl],x.e)
D.d34=w([N.l6,M.Ie,F.Sg],x.u)
D.fY9=new B.FD("First spark","A clock lights a burst and a ripple",D.cTA,D.d34)
D.eH2=new C.cC(["beat",0.15,0.3,1])
D.eG8=new C.cC(["ripple",0.62,0.15,0])
D.eHI=new C.cC(["delay",0.4,0.45,0])
D.eGJ=new C.cC(["ripple",0.7,0.45,0])
D.eGq=new C.cC(["delay",0.4,0.7,1])
D.eHn=new C.cC(["shake",0.75,0.75,0])
D.dfo=w([D.eH2,D.eG8,D.eHI,D.eGJ,D.eGq,D.eHn],x.e)
D.egm=new C.z(2,4)
D.aLG=new C.z(4,5)
D.cWV=w([N.l6,M.Ie,F.Sg,D.egm,D.aLG],x.u)
D.fYb=new B.FD("Heartbeat","Two thumps, then a shake",D.dfo,D.cWV)
D.eGz=new C.cC(["dice",0.15,0.7,1])
D.eHO=new C.cC(["echo",0.4,0.7,0])
D.eGH=new C.cC(["comet",0.7,0.5,4])
D.eHC=new C.cC(["burst",0.72,0.2,1])
D.eH0=new C.cC(["burst",0.3,0.25,0])
D.eGA=new C.cC(["pop",0.55,0.85,0])
D.cgV=w([D.eGz,D.eHO,D.eGH,D.eHC,D.eH0,D.eGA],x.e)
D.efM=new C.z(1,3)
D.efN=new C.z(1,4)
D.aLE=new C.z(0,5)
D.d4j=w([N.l6,W.uv,D.efM,D.efN,D.aLE],x.u)
D.fYa=new B.FD("Fireworks","Dice launch comets that burst in colour",D.cgV,D.d4j)
D.eGE=new C.cC(["beat",0.15,0.2,2])
D.eHa=new C.cC(["chance",0.4,0.2,0])
D.eGw=new C.cC(["ball",0.7,0.12,3])
D.eGj=new C.cC(["chance",0.4,0.5,1])
D.eHN=new C.cC(["ball",0.3,0.08,1])
D.eGc=new C.cC(["ripple",0.7,0.55,3])
D.c9X=w([D.eGE,D.eHa,D.eGw,D.eGj,D.eHN,D.eGc],x.e)
D.egn=new C.z(2,5)
D.cx2=w([N.l6,W.uv,M.a5N,F.Sh,D.egn],x.u)
D.fY8=new B.FD("Rain","Balls fall at random and splash",D.c9X,D.cx2)
D.eHb=new C.cC(["beat",0.12,0.45,2])
D.eHD=new C.cC(["toggle",0.38,0.2,0])
D.eHK=new C.cC(["wash",0.7,0.15,4])
D.eGy=new C.cC(["count3",0.38,0.45,0])
D.eHF=new C.cC(["burst",0.72,0.4,0])
D.eH1=new C.cC(["light",0.55,0.7,1])
D.eGk=new C.cC(["pop",0.8,0.8,4])
D.d6U=w([D.eHb,D.eHD,D.eHK,D.eGy,D.eHF,D.eH1,D.eGk],x.e)
D.egQ=new C.z(3,6)
D.cd4=w([N.l6,W.uv,M.a5N,F.Sh,D.aLE,D.egQ],x.u)
D.fY6=new B.FD("Disco","A beat drives lights, washes and bursts",D.d6U,D.cd4)
D.eHR=new C.cC(["button",0.12,0.2,0])
D.eGe=new C.cC(["delay",0.34,0.2,1])
D.eHQ=new C.cC(["light",0.56,0.2,1])
D.eHJ=new C.cC(["delay",0.56,0.45,1])
D.eHc=new C.cC(["ball",0.34,0.6,0])
D.eGi=new C.cC(["delay",0.34,0.8,1])
D.eG7=new C.cC(["burst",0.7,0.8,5])
D.bYa=w([D.eHR,D.eGe,D.eHQ,D.eHJ,D.eHc,D.eGi,D.eG7],x.e)
D.eiT=new C.z(5,6)
D.dbR=w([N.l6,W.uv,F.Sg,F.Sh,D.aLG,D.eiT],x.u)
D.fY7=new B.FD("Domino","Tap the button and watch it run down the line",D.bYa,D.dbR)
D.aws=w([D.fY9,D.fYb,D.fYa,D.fY8,D.fY6,D.fY7],C.ax("O<FD>"))
D.d2m=w([0.05,0.15,0.25],x.n)
D.d2A=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d3f=w([1.5,3,4.5,9,12],x.n)
D.eCZ=new C.bo("dice","Dice",A.mr)
D.eE1=new C.bo("coin","Coin",K.y9)
D.eFJ=new C.bo("num","Number",A.yi)
D.d3p=w([D.eCZ,D.eE1,D.eFJ],x.c)
D.d3s=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fCQ=new B.OS("Moon",1.62,0,4291941851)
D.fCR=new B.OS("Mars",3.71,0.01,4294472049)
D.fCS=new B.OS("Earth",9.81,1,4281908728)
D.fCU=new B.OS("Jupiter",24.79,1.4,4294677052)
D.fCT=new B.OS("Sun",274,2,4294688548)
D.yI=w([D.fCQ,D.fCR,D.fCS,D.fCU,D.fCT],C.ax("O<OS>"))
D.awz=w([A.cf,A.aM,A.b2,A.aR,A.bt,A.bZ,A.cs,A.hw],x.O)
D.e0L={H:0}
D.dlI=new C.bk(D.e0L,[2],x.I)
D.dng=new B.tb("Hydrogen","H\u2082",D.dlI,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.e0M={H:0,Cl:1}
D.dlV=new C.bk(D.e0M,[1,1],x.I)
D.dni=new B.tb("Hydrogen chloride","HCl",D.dlV,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.e0N={H:0,O:1}
D.dlq=new C.bk(D.e0N,[2,1],x.I)
D.dnj=new B.tb("Water","H\u2082O",D.dlq,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e1_={N:0,H:1}
D.dmh=new C.bk(D.e1_,[1,3],x.I)
D.dnr=new B.tb("Ammonia","NH\u2083",D.dmh,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a4W={C:0,H:1}
D.dmb=new C.bk(D.a4W,[1,4],x.I)
D.dnk=new B.tb("Methane","CH\u2084",D.dmb,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.e0O={H:0,S:1}
D.dky=new C.bk(D.e0O,[2,1],x.I)
D.dnq=new B.tb("Hydrogen sulfide","H\u2082S",D.dky,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e14={O:0}
D.dmf=new C.bk(D.e14,[2],x.I)
D.dns=new B.tb("Oxygen","O\u2082",D.dmf,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e0Z={N:0}
D.dlJ=new C.bk(D.e0Z,[2],x.I)
D.dnh=new B.tb("Nitrogen","N\u2082",D.dlJ,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.e0z={C:0,O:1}
D.dmn=new C.bk(D.e0z,[1,2],x.I)
D.dno=new B.tb("Carbon dioxide","CO\u2082",D.dmn,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aFX={C:0,H:1,O:2}
D.dkj=new C.bk(D.aFX,[1,2,1],x.I)
D.dnp=new B.tb("Formaldehyde","CH\u2082O",D.dkj,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dma=new C.bk(D.a4W,[2,4],x.I)
D.dnm=new B.tb("Ethene","C\u2082H\u2084",D.dma,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dm9=new C.bk(D.a4W,[2,6],x.I)
D.dnl=new B.tb("Ethane","C\u2082H\u2086",D.dm9,"Two carbons joined by a single bond, each holding three hydrogens.")
D.dkk=new C.bk(D.aFX,[1,4,1],x.I)
D.dnn=new B.tb("Methanol","CH\u2083OH",D.dkk,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a2s=w([D.dng,D.dni,D.dnj,D.dnr,D.dnk,D.dnq,D.dns,D.dnh,D.dno,D.dnp,D.dnm,D.dnl,D.dnn],C.ax("O<tb>"))
D.d4p=w([A.bZ,A.aR,A.dP,A.b2],x.O)
D.d5j=w([],x.h)
D.d5m=w([],x.B)
D.a2B=w([],x.F)
D.e8k=new B.eb("battery","Battery","\ud83d\udd0b",A.b2,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.e8q=new B.eb("solar","Solar panel","\u2600\ufe0f",A.c7,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e94=new B.eb("crank","Hand crank","\ud83d\udd04",A.cs,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.e8H=new B.eb("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aR,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e8c=new B.eb("buck","Step-down converter","\ud83d\udd3d",A.hw,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.e8F=new B.eb("regulator","5 V regulator","\ud83e\uddca",A.bJ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e99=new B.eb("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e8R=new B.eb("ldr","Light sensor","\ud83c\udf1e",A.dP,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.e8v=new B.eb("switch","Switch","\ud83c\udf9a\ufe0f",A.bt,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e96=new B.eb("fuse","Fuse","\ud83e\uddef",A.cf,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e84=new B.eb("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hw,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e8S=new B.eb("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e8U=new B.eb("bulb","Light bulb","\ud83d\udca1",A.dP,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.e8s=new B.eb("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.e8w=new B.eb("motor","Motor","\u2699\ufe0f",A.bJ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e8O=new B.eb("buzzer","Buzzer","\ud83d\udd14",A.bZ,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.e8l=new B.eb("heater","Heater","\ud83d\udd25",A.cs,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.e8J=new B.eb("capacitor","Capacitor","\ud83e\udeab",A.co,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.e8B=new B.eb("radio","Radio","\ud83d\udcfb",A.nP,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.e8y=new B.eb("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e8b=new B.eb("voltmeter","Voltmeter","\ud83e\udded",A.bu,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.e8i=new B.eb("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.e8o=new B.eb("fan","Fan","\ud83c\udf00",A.aR,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e9b=new B.eb("speaker","Speaker","\ud83d\udd0a",A.bZ,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e90=new B.eb("clock","Digital clock","\u23f0",A.b2,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.e8E=new B.eb("calculator","Calculator","\ud83e\uddee",A.Kq,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.e8h=new B.eb("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.co,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e9a=new B.eb("router","WiFi router","\ud83d\udcf6",A.hw,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e9d=new B.eb("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e87=new B.eb("toycar","Toy car","\ud83d\ude97",A.cs,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e9e=new B.eb("kettle","Kettle","\ud83e\uded6",A.mg,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e8f=new B.eb("lamp","Desk lamp","\ud83e\ude94",A.dP,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.e8r=new B.eb("lights","Party lights","\ud83c\udf84",A.nP,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.e8C=new B.eb("fridge","Fridge","\ud83e\uddca",A.fT,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e89=new B.eb("washer","Washing machine","\ud83e\udee7",A.co,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e91=new B.eb("blender","Blender","\ud83e\udd64",A.cf,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.e8z=new B.eb("drone","Drone","\ud83d\ude81",A.bJ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e8e=new B.eb("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.e8D=new B.eb("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e8Z=new B.eb("neon","Neon sign","\ud83e\udea7",A.bZ,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e8a=new B.eb("microwave","Microwave","\ud83c\udf72",A.cs,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e8T=new B.eb("doorbell","Doorbell","\ud83d\udd14",A.c7,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.e8n=new B.eb("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e8N=new B.eb("console","Game console","\ud83c\udfae",A.bt,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e93=new B.eb("heartmon","Heart monitor","\ud83e\ude7a",A.h1,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e88=new B.eb("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.e8I=new B.eb("lighthouse","Lighthouse","\ud83d\uddfc",A.dP,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e8Q=new B.eb("discoball","Disco ball","\ud83e\udea9",A.nP,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e98=new B.eb("robot","Robot","\ud83e\udd16",A.aR,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e86=new B.eb("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e9c=new B.eb("ledstrip","LED strip","\ud83c\udf08",A.bZ,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e8Y=new B.eb("pump","Water pump","\ud83d\udeb0",A.aR,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.e8K=new B.eb("hairdryer","Hair dryer","\ud83d\udca8",A.j9,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e8W=new B.eb("headphones","Headphones","\ud83c\udfa7",A.bt,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.e8g=new B.eb("smartwatch","Apple Watch Ultra","\u231a",A.bu,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e97=new B.eb("tablet","iPad Pro M5","\ud83d\udcf2",A.co,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e83=new B.eb("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h1,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.e8A=new B.eb("sonytv","Sony Bravia 9","\ud83d\udcfa",A.br,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.e8t=new B.eb("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e8P=new B.eb("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.ta,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e85=new B.eb("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.e8j=new B.eb("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d3,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e95=new B.eb("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cy,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.e8L=new B.eb("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bl,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.e8G=new B.eb("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cg,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e8X=new B.eb("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.e8u=new B.eb("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b2,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.e8M=new B.eb("honor","Honor Magic V5","\ud83d\udcf1",A.co,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e8V=new B.eb("vivo","vivo X300 Pro","\ud83d\udcf1",A.cs,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e9_=new B.eb("ereader","Kindle Scribe","\ud83d\udcd6",A.br,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e82=new B.eb("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ce,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.e8x=new B.eb("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cy,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.e8p=new B.eb("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e8d=new B.eb("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dP,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.e8m=new B.eb("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e92=new B.eb("vision","Apple Vision Pro","\ud83e\udd7d",A.bt,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Qc=w([D.e8k,D.e8q,D.e94,D.e8H,D.e8c,D.e8F,D.e99,D.e8R,D.e8v,D.e96,D.e84,D.e8S,D.e8U,D.e8s,D.e8w,D.e8O,D.e8l,D.e8J,D.e8B,D.e8y,D.e8b,D.e8i,D.e8o,D.e9b,D.e90,D.e8E,D.e8h,D.e9a,D.e9d,D.e87,D.e9e,D.e8f,D.e8r,D.e8C,D.e89,D.e91,D.e8z,D.e8e,D.e8D,D.e8Z,D.e8a,D.e8T,D.e8n,D.e8N,D.e93,D.e88,D.e8I,D.e8Q,D.e98,D.e86,D.e9c,D.e8Y,D.e8K,D.e8W,D.e8g,D.e97,D.e83,D.e8A,D.e8t,D.e8P,D.e85,D.e8j,D.e95,D.e8L,D.e8G,D.e8X,D.e8u,D.e8M,D.e8V,D.e9_,D.e82,D.e8x,D.e8p,D.e8d,D.e8m,D.e92],C.ax("O<eb>"))
D.d5J=w([0,0.46,0.82],x.n)
D.d5U=w([5,10,15,25,45,60],x.t)
D.d6d=w([-0.045,0.03,-0.015],x.n)
D.d6B=w([0.9,0.97,1],x.n)
D.awZ=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.u8=w([0.05,0.2,0.35],x.n)
D.cOm=w([D.ED,D.ED],x.O)
D.cTw=w([A.EN,A.M],x.O)
D.cSz=w([A.fk,A.hl],x.O)
D.cMw=w([A.f7,A.nO],x.O)
D.c9s=w([A.lG,A.dx],x.O)
D.ax_=w([D.cOm,D.cTw,D.cSz,D.cMw,D.c9s],x.Q)
D.fCE=new B.uY("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fCF=new B.uY("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fCw=new B.uY("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fCD=new B.uY("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fCB=new B.uY("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fCx=new B.uY("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fCC=new B.uY("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fCy=new B.uY("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fCA=new B.uY("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fCz=new B.uY("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Ca=w([D.fCE,D.fCF,D.fCw,D.fCD,D.fCB,D.fCx,D.fCC,D.fCy,D.fCA,D.fCz],C.ax("O<uY>"))
D.beI=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d7L=w([D.ED,D.beI,D.adn,A.acU],x.O)
D.b0H=new C.ac(0,A.G,A.hI,A.dE,6)
D.d8F=w([D.b0H],x.V)
D.ef7=new C.z(0,"AND")
D.efO=new C.z(1,"Adder")
D.ego=new C.z(2,"Blinker")
D.egR=new C.z(3,"Memory")
D.d9p=w([D.ef7,D.efO,D.ego,D.egR],x.E)
D.axb=w([-104,0,104],x.n)
D.axc=w([-14,3],x.n)
D.d9S=w([-16,16],x.n)
D.axe=w([-22,22],x.n)
D.da6=w([-8,0,8],x.n)
D.axi=w([-92,0,92],x.n)
D.das=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eKl=new B.uK("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eKs=new B.uK("Medium tank","Balanced.",0.35,1)
D.eKr=new B.uK("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Qp=w([D.eKl,D.eKs,D.eKr],x._)
D.nn=w([0.04,0.2,0.36],x.n)
D.axs=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eFp=new C.bo(D.aUW,"Fold",K.alI)
D.eEz=new C.bo(D.a9m,"Flip",A.FT)
D.bCI=new C.a_(62889,"MaterialIcons",!1)
D.eFH=new C.bo(D.aUX,"Rise",D.bCI)
D.alW=new C.a_(983870,"MaterialIcons",!1)
D.eCx=new C.bo(D.a9n,"Assemble",D.alW)
D.eCG=new C.bo(D.aUY,"Spin",D.ake)
D.eCD=new C.bo(D.aUZ,"Pop",A.lk)
D.dbO=w([D.eFp,D.eEz,D.eFH,D.eCx,D.eCG,D.eCD],C.ax("O<+(K9,n,a_)>"))
D.axx=w([A.bZ,A.dP,A.bu,A.aR,A.bt,A.cf],x.O)
D.dbZ=w([A.aR,A.cs,A.cs,A.b2],x.O)
D.dcb=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eBs=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.emq=new C.z("Make the output turn TWICE as fast.",2)
D.efY=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eA7=new C.z("Make the output turn 4 times faster.",4)
D.es1=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.ev4=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.etA=new C.z("Make the output turn 3 times faster.",3)
D.eul=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.axC=w([D.eBs,D.emq,D.efY,D.eA7,D.es1,D.ev4,D.etA,D.eul],C.ax("O<+(n,M)>"))
D.dd9=w([3,4.5,5,6,9],x.n)
D.b1e=new C.ac(0,A.G,A.aX,A.J,16)
D.ddB=w([D.b1e],x.V)
D.Qr=w([A.bZ,A.c7,A.b2,A.aR,A.bt,A.cf,A.c,A.cs],x.O)
D.de2=w(["solar","turbine","crank","pot"],x.s)
D.dem=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.des=w([0,0.35,0.75,1],x.n)
D.eCT=new C.bo("drop","Drop",D.aly)
D.eCV=new C.bo("weight","Weight",T.am_)
D.eFC=new C.bo("cannon","Newton's cannon",A.akY)
D.df5=w([D.eCT,D.eCV,D.eFC],x.c)
D.eyM=new C.z("piano","Piano")
D.eys=new C.z("organ","Organ")
D.eth=new C.z("bell","Bell")
D.eyO=new C.z("pluck","Pluck")
D.eA6=new C.z("synth","Synth")
D.ev_=new C.z("flute","Flute")
D.axU=w([D.eyM,D.eys,D.eth,D.eyO,D.eA6,D.ev_],x.K)
D.dfC=w(["volts","level","ohms","on"],x.s)
D.dgU=w([A.jm,A.BG,A.Bu,A.pW,A1.Ge,A.u_,A.yg,A.q_,A.hM,A.nj,A.h8,A.dW,A.i1,A.i2,A.ms,A.lQ,A.vN,A.re,A.lR,A.FL,A.tZ,A.Ni,A.Bw,A.alt,A.N8,A.yc,A.Ng,A.al7,S.alS,A.lk],x.w)
D.dhN=w([0.72,1],x.n)
D.dhY=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e2h={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dkd=new C.bk(D.e2h,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aFZ={A:0,T:1,C:2,G:3}
D.a3x=new C.bk(D.aFZ,["U","A","G","C"],x.l)
D.dkl=new C.bk(D.aFZ,["T","A","G","C"],x.l)
D.e0W={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d4t=w([0,2,4,5,7,9,11],x.t)
D.cNE=w([0,2,3,5,7,8,10],x.t)
D.d9B=w([0,3,5,6,7,10],x.t)
D.Cg=new C.bk(D.e0W,[D.avU,D.d4t,D.cNE,D.d9B,D.aov],C.ax("bk<n,ai<H>>"))
D.e24={A:0,T:1,U:2,C:3,G:4}
D.dkB=new C.bk(D.e24,[A.cf,A.co,A.co,A.aM,A.b2],C.ax("bk<n,w>"))
D.e0j={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fRR=new B.xX("Switch",F.NH,A.c7,0,"Tap it to turn it ON or OFF.")
D.fRN=new B.xX("Blinker",A.oO,A.bu,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fRO=new B.xX("AND",D.alW,A.co,2,"ON only when BOTH inputs are ON.")
D.bEb=new C.a_(63671,"MaterialIcons",!1)
D.fRM=new B.xX("OR",D.bEb,A.bt,2,"ON when EITHER input is ON.")
D.fRP=new B.xX("XOR",G.a_w,A.bZ,2,"ON when the inputs are DIFFERENT.")
D.fRJ=new B.xX("NAND",A.tO,A.aR,2,"OFF only when BOTH inputs are ON.")
D.bDi=new C.a_(63176,"MaterialIcons",!1)
D.fRK=new B.xX("NOR",D.bDi,A.hw,2,"ON only when BOTH inputs are OFF.")
D.fRL=new B.xX("NOT",A_.BH,A.cs,1,"Flips the signal: ON becomes OFF.")
D.fRQ=new B.xX("Light",A.r9,A.dP,1,"Glows when its input is ON.")
D.fRS=new B.xX("Buzzer",A.o2,A.cf,1,"Beeps while its input is ON.")
D.yV=new C.bk(D.e0j,[D.fRR,D.fRN,D.fRO,D.fRM,D.fRP,D.fRJ,D.fRK,D.fRL,D.fRQ,D.fRS],C.ax("bk<n,xX>"))
D.e21={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eDj=new C.bo(3,20,1.9)
D.eCO=new C.bo(33,90,1.6)
D.eG0=new C.bo(52,15,3.2)
D.eFZ=new C.bo(45,-100,1.8)
D.eEt=new C.bo(-15,-60,1.9)
D.eDX=new C.bo(-25,140,2.4)
D.eDO=new C.bo(-82,0,2.2)
D.aDl=new C.bk(D.e21,[D.eDj,D.eCO,D.eG0,D.eFZ,D.eEt,D.eDX,D.eDO],C.ax("bk<n,+(M,M,M)>"))
D.cN3=w([A.A],x.M)
D.cNm=w([A.ax,A.aC],x.M)
D.cW2=w([A.ax,A.A,A.aC],x.M)
D.cXs=w([A.ax,A.la,A.A,A.lA,A.aC],x.M)
D.d9l=w([A.ax,A.la,A.a3,A.a7,A.lA,A.aC],x.M)
D.dly=new C.dS([1,D.cN3,2,D.cNm,3,D.cW2,4,A.axZ,5,D.cXs,6,D.d9l],C.ax("dS<H,ai<da>>"))
D.e0X={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eEF=new C.bo(1,A.bO,"Hydrogen")
D.eDy=new C.bo(4,A.bk,"Carbon")
D.eCy=new C.bo(3,A.d3,"Nitrogen")
D.eEZ=new C.bo(2,A.ay,"Oxygen")
D.eEm=new C.bo(2,A.c7,"Sulfur")
D.eFz=new C.bo(1,A.bl,"Chlorine")
D.w1=new C.bk(D.e0X,[D.eEF,D.eDy,D.eCy,D.eEZ,D.eEm,D.eFz],C.ax("bk<n,+(H,w,n)>"))
D.e2n={Calm:0,Box:1,Sleep:2}
D.cuw=w([4,2,6,0],x.n)
D.cuD=w([4,4,4,4],x.n)
D.cuE=w([4,7,8,0],x.n)
D.QQ=new C.bk(D.e2n,[D.cuw,D.cuD,D.cuE],C.ax("bk<n,ai<M>>"))
D.e0s={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wF=new B.a_U(0,"source")
D.cWY=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fWN=new B.q_("Clock",A.oO,D.wF,A.bu,D.cWY)
D.fWJ=new B.q_("Button",A.yk,D.wF,A.aM,A.T)
D.ddl=w(["random","quick","slow"],x.s)
D.fWU=new B.q_("Dice",A.mr,D.wF,A.bZ,D.ddl)
D.bDR=new C.a_(63484,"MaterialIcons",!1)
D.DE=new B.a_U(1,"logic")
D.dhI=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fWQ=new B.q_("Delay",D.bDR,D.DE,A.co,D.dhI)
D.d60=w(["fast","mid","slow"],x.s)
D.fWV=new B.q_("Echo",A.aln,D.DE,A.bt,D.d60)
D.fWS=new B.q_("Every 2nd",A_.BH,D.DE,A.hw,A.T)
D.bDw=new C.a_(63309,"MaterialIcons",!1)
D.fWP=new B.q_("Every 3rd",D.bDw,D.DE,A.aR,A.T)
D.bFu=new C.a_(983902,"MaterialIcons",!1)
D.bXA=w(["50%","25%","75%"],x.s)
D.fWX=new B.q_("Chance",D.bFu,D.DE,A.cs,D.bXA)
D.qv=new B.a_U(2,"out")
D.fWL=new B.q_("Light",A.r9,D.qv,A.dP,A.T)
D.fWM=new B.q_("Burst",A.lk,D.qv,A.bZ,A.T)
D.fWK=new B.q_("Ripple",A.yo,D.qv,A.b8,A.T)
D.fWT=new B.q_("Ball",A.alA,D.qv,A.cs,A.T)
D.fWR=new B.q_("Comet",A.nj,D.qv,A.bt,A.T)
D.bFe=new C.a_(983669,"MaterialIcons",!1)
D.fWW=new B.q_("Shake",D.bFe,D.qv,A.cf,A.T)
D.fWY=new B.q_("Pop",A.FM,D.qv,A.b2,A.T)
D.fWO=new B.q_("Wash",A.Nl,D.qv,A.pt,A.T)
D.mB=new C.bk(D.e0s,[D.fWN,D.fWJ,D.fWU,D.fWQ,D.fWV,D.fWS,D.fWP,D.fWX,D.fWL,D.fWM,D.fWK,D.fWT,D.fWR,D.fWW,D.fWY,D.fWO],C.ax("bk<n,q_>"))
D.e25={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.Ch=new C.bk(D.e25,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.e0F={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zm=new B.J5(0,"tv")
D.eLR=new B.m4("Samsung Neo QLED 8K",D.zm,F.Eq,A.aR)
D.eLI=new B.m4("LG OLED evo G5",D.zm,A.ea,A.h1)
D.eLz=new B.m4("Sony Bravia 9",D.zm,A.qH,A.br)
D.eLD=new B.m4("Apple TV 4K",D.zm,A.e1,A.bO)
D.eLA=new B.m4("Bang and Olufsen Beovision",D.zm,F.E8,F.ta)
D.Ij=new B.J5(1,"iphone")
D.aMj=new B.m4("iPhone 18 Pro Max",D.Ij,D.afC,A.ce)
D.we=new B.J5(3,"fold")
D.bkF=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eLN=new B.m4("iPhone Fold",D.we,D.bkF,A.b7)
D.uy=new B.J5(2,"android")
D.eLO=new B.m4("Samsung Galaxy S26 Ultra",D.uy,F.abN,A.d3)
D.bef=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eLG=new B.m4("Samsung Galaxy Z Fold7",D.we,D.bef,A.cy)
D.eLC=new B.m4("Google Pixel 10 Pro XL",D.uy,A.dA,A.bl)
D.eLK=new B.m4("Xiaomi 16 Ultra",D.uy,A.lK,A.cg)
D.eLF=new B.m4("Huawei Mate 80 Pro Max",D.uy,A.eP,A.ay)
D.eLB=new B.m4("OPPO Find X9 Ultra",D.uy,A.dX,A.b2)
D.eLT=new B.m4("Honor Magic V5",D.we,A.di,A.co)
D.eLH=new B.m4("vivo X300 Pro",D.uy,A.hl,A.cs)
D.Sq=new B.J5(4,"tablet")
D.eLM=new B.m4("iPad Pro M5",D.Sq,A.dA,A.aR)
D.a62=new B.J5(5,"reader")
D.eLU=new B.m4("Kindle Scribe",D.a62,A.ee,A.br)
D.zn=new B.J5(6,"computer")
D.eLL=new B.m4("MacBook Pro M5 Max",D.zn,A.dA,A.ce)
D.eLQ=new B.m4("iMac 32 inch",D.zn,A.bO,A.cy)
D.eLJ=new B.m4("Pro Display XDR 8K",D.zn,A.lK,A.b8)
D.eLE=new B.m4("Sony Laser Projector",D.zn,A.cC,A.dP)
D.eLP=new B.m4("Luxury car touchscreen",D.zn,L.n_,A.ay)
D.eLS=new B.m4("Apple Vision Pro",D.zn,A.je,A.bt)
D.lY=new C.bk(D.e0F,[D.eLR,D.eLI,D.eLz,D.eLD,D.eLA,D.aMj,D.eLN,D.eLO,D.eLG,D.eLC,D.eLK,D.eLF,D.eLB,D.eLT,D.eLH,D.eLM,D.eLU,D.eLL,D.eLQ,D.eLJ,D.eLE,D.eLP,D.eLS],C.ax("bk<n,m4>"))
D.e0R={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bnc=new B.fK(20,4,13,!1)
D.bnD=new B.fK(14,5,13.5,!1)
D.bnu=new B.fK(9,2.4,10,!1)
D.bnI=new B.fK(7,5,12.5,!1)
D.bnx=new B.fK(8,3.5,12,!1)
D.bn8=new B.fK(15,2,6,!1)
D.bnG=new B.fK(45,6,13.5,!0)
D.bno=new B.fK(10,8,13.5,!1)
D.bng=new B.fK(25,3,12,!0)
D.bnm=new B.fK(35,4,12,!0)
D.bnn=new B.fK(40,4.5,9.5,!0)
D.bnp=new B.fK(55,3,9,!0)
D.bn9=new B.fK(18,3,9,!1)
D.bnF=new B.fK(22,4,13.5,!1)
D.bny=new B.fK(16,5,13.5,!1)
D.bnk=new B.fK(30,4,9,!0)
D.bnR=new B.fK(5,3.5,13,!1)
D.bns=new B.fK(25,3,13.5,!0)
D.bnB=new B.fK(14,2.5,9,!1)
D.bnr=new B.fK(6,6,13,!1)
D.bnJ=new B.fK(30,1.2,5,!0)
D.bnQ=new B.fK(35,3,4.5,!0)
D.bnM=new B.fK(20,4.5,7.5,!0)
D.bnq=new B.fK(55,5.5,13.5,!0)
D.bn7=new B.fK(45,5.5,13.5,!0)
D.bnC=new B.fK(40,5.5,13.5,!0)
D.bnP=new B.fK(60,6,13.5,!0)
D.ag2=new B.fK(28,4,7,!0)
D.F_=new B.fK(25,4,7,!0)
D.bnj=new B.fK(30,4,7,!0)
D.bne=new B.fK(22,4,7,!0)
D.bnf=new B.fK(24,4,7,!0)
D.bnt=new B.fK(60,3,5.5,!0)
D.bna=new B.fK(18,9,14,!0)
D.bnh=new B.fK(25,9,14,!0)
D.ag3=new B.fK(30,8,14,!0)
D.bnd=new B.fK(20,8,14,!0)
D.bnl=new B.fK(30,9,14,!0)
D.bnK=new B.fK(22,5,9.5,!0)
D.bnb=new B.fK(30,2.5,10.5,!0)
D.bnz=new B.fK(50,5.5,13.5,!0)
D.bnO=new B.fK(12,2,9.5,!1)
D.bnw=new B.fK(16,1.3,9.5,!0)
D.bnH=new B.fK(40,2.5,7,!0)
D.bnN=new B.fK(60,1.2,4.8,!0)
D.bnL=new B.fK(18,5,13.5,!0)
D.bnE=new B.fK(8,2,9.5,!1)
D.bnv=new B.fK(12,2.5,8,!1)
D.bni=new B.fK(20,3.5,13.5,!0)
D.bnA=new B.fK(3.5,3,13,!1)
D.yW=new C.bk(D.e0R,[D.bnc,D.bnD,D.bnu,D.bnI,D.bnx,D.bn8,D.bnG,D.bno,D.bng,D.bnm,D.bnn,D.bnp,D.bn9,D.bnF,D.bny,D.bnk,D.bnR,D.bns,D.bnB,D.bnr,D.bnJ,D.bnQ,D.bnM,D.bnq,D.bn7,D.bnC,D.bnP,D.ag2,D.F_,D.bnj,D.F_,D.bne,D.F_,D.bnf,D.ag2,D.F_,D.bnt,D.bna,D.bnh,D.ag3,D.bnd,D.bnl,D.bnK,D.bnb,D.bnz,D.bnO,D.bnw,D.bnH,D.bnN,D.F_,D.ag3,D.bnL,D.bnE,D.bnv,D.bni,D.bnA],C.ax("bk<n,fK>"))
D.e0r={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eC1=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eiQ=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eiL=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.euk=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.evg=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eug=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.egW=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.esh=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eCa=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.evB=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.elQ=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.egE=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.ekV=new C.z("Movement","They pull your legs together and help you balance.")
D.emK=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eiZ=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.ezI=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eAL=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.es2=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eAv=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eqL=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.evJ=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.egL=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.en6=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.evq=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.er4=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eAD=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.etM=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.egU=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ewh=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ezl=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.exC=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.efg=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.etu=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.ety=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.enM=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.ej9=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.emz=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.esr=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eyl=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eC7=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.evG=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ef3=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.esC=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.efH=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eyB=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.ezE=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.et1=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eyQ=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.egN=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eA9=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.ekk=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.ey0=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.ent=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.er_=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.ew_=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eAk=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eAb=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eAg=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ert=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.ewO=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.exz=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.ezZ=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.et0=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.epo=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eoc=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.etp=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.evT=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.epU=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eqz=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.ekG=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.ezA=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.els=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.efE=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.enL=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.efz=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.ejw=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.enQ=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.elB=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.ewd=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.emN=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eBP=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eol=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.ern=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.etU=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.elI=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.elu=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dmH=new C.bk(D.e0r,[D.eC1,D.eiQ,D.eiL,D.euk,D.evg,D.eug,D.egW,D.esh,D.eCa,D.evB,D.elQ,D.egE,D.ekV,D.emK,D.eiZ,D.ezI,D.eAL,D.es2,D.eAv,D.eqL,D.evJ,D.egL,D.en6,D.evq,D.er4,D.eAD,D.etM,D.egU,D.ewh,D.ezl,D.exC,D.efg,D.etu,D.ety,D.enM,D.ej9,D.emz,D.esr,D.eyl,D.eC7,D.evG,D.ef3,D.esC,D.efH,D.eyB,D.ezE,D.et1,D.eyQ,D.egN,D.eA9,D.ekk,D.ey0,D.ent,D.er_,D.ew_,D.eAk,D.eAb,D.eAg,D.ert,D.ewO,D.exz,D.ezZ,D.et0,D.epo,D.eoc,D.etp,D.evT,D.epU,D.eqz,D.ekG,D.ezA,D.els,D.efE,D.enL,D.efz,D.ejw,D.enQ,D.elB,D.ewd,D.emN,D.eBP,D.eol,D.ern,D.etU,D.elI,D.elu],C.ax("bk<n,+(n,n)>"))
D.dmJ=new C.hw(A.G,11)
D.dmO=new C.hw(A.G,30)
D.dpV=new B.TS(null)
D.dtJ=new B.TW(null)
D.dtK=new B.TX(null)
D.dtX=new B.TY(null)
D.dvY=new B.U_(null)
D.dvZ=new B.U0(null)
D.dw_=new B.U1(null)
D.dwN=new B.Un(null)
D.dwP=new B.UC(null)
D.dwQ=new B.UD(null)
D.dwS=new B.UE(null)
D.dxp=new B.UL(null)
D.dzk=new B.UP(null)
D.dzl=new B.UR(null)
D.dzm=new B.US(null)
D.dzo=new B.UT(null)
D.dAZ=new B.V9(null)
D.dB0=new B.Vb(null)
D.dB5=new B.Vl(null)
D.dBg=new B.Vm(null)
D.dBM=new B.Vn(null)
D.dDg=new B.Vp(null)
D.dEE=new B.Vr(null)
D.dEF=new B.Vs(null)
D.dG_=new B.Vv(null)
D.dVT=new B.Vw(null)
D.dVV=new B.Vx(null)
D.dVW=new B.VA(null)
D.dVX=new B.VB(null)
D.dXQ=new B.VJ(null)
D.dXR=new B.VK(null)
D.dXZ=new B.VR(null)
D.dY7=new B.VV(null)
D.dY8=new B.VW(null)
D.dY9=new B.a7S(null)
D.dYK=new B.VY(null)
D.e_c=new B.W1(null)
D.e2y=new C.u(0,118)
D.aG5=new C.u(0,13)
D.e2z=new C.u(0,17)
D.e2C=new C.u(0,330)
D.e2F=new C.u(0,-13)
D.aGb=new C.u(0,-14)
D.e2G=new C.u(0,-17)
D.e2H=new C.u(0,-18)
D.e2I=new C.u(0,-19)
D.e2J=new C.u(0,-20)
D.e2M=new C.u(0,-26)
D.e2N=new C.u(0,-28)
D.e2O=new C.u(0,-31)
D.e2P=new C.u(0,-32)
D.w8=new C.u(0,-6)
D.e2Q=new C.u(0,-6771)
D.e2R=new C.u(0,-9)
D.e2T=new C.u(-9.5,-11)
D.e2U=new C.u(10,20)
D.e2W=new C.u(10,-13)
D.e2X=new C.u(10,-22)
D.e2Y=new C.u(10,-4)
D.a5_=new C.u(11,8)
D.e3_=new C.u(12,2)
D.e30=new C.u(14,0)
D.e31=new C.u(14,12)
D.aGf=new C.u(14,8)
D.e32=new C.u(14,-17)
D.e33=new C.u(14,-18)
D.aGg=new C.u(14,-3)
D.aGh=new C.u(14,-4)
D.e34=new C.u(15,0)
D.e35=new C.u(15,-12)
D.e36=new C.u(16,-8)
D.e37=new C.u(18,14)
D.e38=new C.u(18,-12)
D.aGl=new C.u(20,0)
D.e3e=new C.u(20,15)
D.e3f=new C.u(20,-17)
D.e3g=new C.u(20,-3)
D.e3h=new C.u(21,8)
D.e3j=new C.u(22,10)
D.aGm=new C.u(22,8)
D.e3k=new C.u(24,0)
D.e3l=new C.u(24,2)
D.e3n=new C.u(24,-18)
D.e3o=new C.u(24,-22)
D.e3p=new C.u(25,8)
D.e3q=new C.u(26,0)
D.e3w=new C.u(28,-30)
D.e3B=new C.u(30,18)
D.e3C=new C.u(30,2)
D.e3D=new C.u(31,19)
D.e3E=new C.u(32,0)
D.aGp=new C.u(34,0)
D.aGq=new C.u(34,-32)
D.HU=new C.u(36,0)
D.e3J=new C.u(3,-1)
D.e3M=new C.u(40,3)
D.e3Q=new C.u(4,11)
D.e3T=new C.u(4,-2)
D.e3X=new C.u(5,0)
D.e3Y=new C.u(5,17)
D.e3Z=new C.u(5,6)
D.e42=new C.u(6,11)
D.e48=new C.u(8,7)
D.e49=new C.u(8,-10)
D.e4a=new C.u(8,-14)
D.e4b=new C.u(8,-3)
D.aGu=new C.u(9,0)
D.e4e=new C.u(-20.5,-17.6)
D.e4f=new C.u(-9,18.5)
D.e4i=new C.u(-2.6,-1)
D.e4j=new C.u(1.9,-0.8)
D.e4m=new C.u(-0.22,0.09)
D.e4r=new C.u(2.6,1)
D.e4y=new C.u(-9,12.2)
D.e4Q=new C.u(-9,20.5)
D.e57=new C.u(-10,0)
D.e58=new C.u(-10,12)
D.aGB=new C.u(-10,4)
D.e59=new C.u(-11,-2)
D.e5a=new C.u(-13,-5)
D.e5b=new C.u(-14,0)
D.e5c=new C.u(-14,13)
D.e5d=new C.u(-14,2)
D.e5e=new C.u(-14,-12)
D.e5f=new C.u(-14,-19)
D.e5g=new C.u(-14,-23)
D.e5h=new C.u(-15,6)
D.e5i=new C.u(-16,14)
D.e5j=new C.u(-16,-8)
D.e5k=new C.u(-17,10)
D.e5l=new C.u(-17,-18)
D.e5m=new C.u(-17,-8)
D.e5o=new C.u(-18,20)
D.e5p=new C.u(-18,-9)
D.aGD=new C.u(-20,0)
D.e5r=new C.u(-20,16)
D.e5s=new C.u(-20,-9)
D.RO=new C.u(-22,8)
D.e5t=new C.u(-22,-10)
D.e5u=new C.u(-22,-11)
D.e5v=new C.u(-24,10)
D.e5w=new C.u(-24,11)
D.e5x=new C.u(-24,14)
D.e5y=new C.u(-24,-22)
D.e5z=new C.u(-25,-11)
D.e5A=new C.u(-26,0)
D.e5B=new C.u(-26,-18)
D.e5C=new C.u(-2,9)
D.e5D=new C.u(-2,-10)
D.e5E=new C.u(-2,-20)
D.e5F=new C.u(-2,-9)
D.e5G=new C.u(-32,0)
D.aGF=new C.u(-34,0)
D.e5L=new C.u(-40,3)
D.e5N=new C.u(-4,11)
D.e5O=new C.u(-4,-17)
D.e5P=new C.u(-4,-2)
D.e5R=new C.u(-5,0)
D.e5S=new C.u(-5,20)
D.e5T=new C.u(-5,6)
D.e5U=new C.u(-6,26)
D.e5V=new C.u(-6,6)
D.e5W=new C.u(-6,-42)
D.e5X=new C.u(-7,-19)
D.e5Y=new C.u(-7,-24)
D.e5Z=new C.u(-8,-9)
D.a53=new C.u(-9,0)
D.e6_=new C.u(-9,1)
D.e60=new C.u(-9,-23)
D.ffQ=new C.x("Thinking\u2026",null,A.hf,null,null,null,null,null,null,null,null,null)
D.e6X=new C.D(A.kr,D.ffQ,null)
D.fvJ=new C.x("Start from a ready-made board",null,A.fO,null,null,null,null,null,null,null,null,null)
D.e76=new C.D(A9.vp,D.fvJ,null)
D.buZ=new C.Q(4,0,4,14)
D.fbd=new C.G(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgK=new C.x("Games and little helpers for a spare minute.",null,D.fbd,null,null,null,null,null,null,null,null,null)
D.e7g=new C.D(D.buZ,D.fgK,null)
D.fsA=new C.x("Tap to throw in a star",null,A.kG,null,null,null,null,null,null,null,null,null)
D.b4o=new C.cr(A.A,null,null,D.fsA,null)
D.eda=new C.cL(0,null,0,14,null,null,D.b4o,null)
D.d6z=w([A.iN,A.bk],x.O)
D.aLw=new C.bT(A.A,0.5,A.x,null,0,D.d6z,null,null)
D.edT=new C.bT(A.A,0.5,A.x,null,0,D.axM,null,null)
D.cZb=w([A.c,A.bJ],x.O)
D.edV=new C.bT(A.A,0.5,A.x,null,0,D.cZb,null,null)
D.edW=new C.bT(A.A,0.5,A.x,null,0,M.awR,null,null)
D.dee=w([A.bO,A.je],x.O)
D.aLx=new C.bT(A.A,0.5,A.x,null,0,D.dee,null,null)
D.cEf=w([A.c,A.bO],x.O)
D.ee_=new C.bT(A.rU,0.5,A.x,null,0,D.cEf,null,null)
D.bbI=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bh_=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cYe=w([D.bbI,D.afb,D.bh_],x.O)
D.d4D=w([0,0.7,1],x.n)
D.ee1=new C.bT(A.rU,0.5,A.x,null,0,D.cYe,D.d4D,null)
D.cuK=w([A.oB,A.aF,A.K],x.O)
D.db6=w([0.3,0.7,1],x.n)
D.ee3=new C.bT(A.A,0.5,A.x,null,0,D.cuK,D.db6,null)
D.bkI=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.dct=w([A.fa,D.bkI],x.O)
D.ee5=new C.bT(A.rU,0.5,A.x,null,0,D.dct,null,null)
D.cxx=w([A.dA,A.cC],x.O)
D.ee6=new C.bT(A.A,0.5,A.x,null,0,D.cxx,null,null)
D.cTG=w([A.oB,A.aF,A.fk],x.O)
D.ee7=new C.bT(A.A,0.5,A.x,null,0,D.cTG,null,null)
D.cM2=w([A.h3,A.aM,A.d5],x.O)
D.ee9=new C.bT(A.rU,0.5,A.x,null,0,D.cM2,null,null)
D.d75=w([A.je,L.n_],x.O)
D.eea=new C.bT(A.rU,0.5,A.x,null,0,D.d75,null,null)
D.bbW=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b9X=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cVV=w([D.bbW,D.b9X],x.O)
D.eec=new C.bT(A.A,0.5,A.x,null,0,D.cVV,null,null)
D.bgp=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.ben=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.ber=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dgu=w([D.bgp,D.ben,D.ber],x.O)
D.cSt=w([0,0.65,1],x.n)
D.eed=new C.bT(M.a9x,0.5,A.x,null,0,D.dgu,D.cSt,null)
D.eee=new C.bT(A.A,0.5,A.x,null,0,D.auj,null,null)
D.ddt=w([A.lH,A.aF,A.fk],x.O)
D.eej=new C.bT(A.A,0.5,A.x,null,0,D.ddt,null,null)
D.df0=w([A.je,A.hF],x.O)
D.eem=new C.bT(A.A,0.5,A.x,null,0,D.df0,null,null)
D.aLC=new C.aT(9,9)
D.eev=new C.aT(1.4,1.4)
D.efa=new C.z(0,-4)
D.ekh=new C.z(0.22,4)
D.erl=new C.z(0.8,-4)
D.eAc=new C.z(0.58,4)
D.eCX=new C.bo("Moon",1.62,4291941851)
D.eDw=new C.bo("Neptune",11.15,4284524026)
D.eE9=new C.bo("Sun",274,4294688548)
D.eEp=new C.bo("Mercury",3.7,4288455599)
D.eEv=new C.bo("Earth",9.81,4281908728)
D.eEx=new C.bo("Mars",3.71,4294472049)
D.eEQ=new C.bo("Venus",8.87,4294759245)
D.eEW=new C.bo("Saturn",10.44,4294829706)
D.eFi=new C.bo("Jupiter",24.79,4294677052)
D.eIT=new C.a9(10,-8,18,-2)
D.eIU=new C.a9(14,-14,20,14)
D.eIV=new C.a9(20,-2,30,2)
D.eIX=new C.a9(4,-13,30,-3)
D.eIZ=new C.a9(8,-7,12,7)
D.eJ4=new C.a9(-12,12,12,19)
D.eJ5=new C.a9(-12,14,12,22)
D.eJ6=new C.a9(-12,-22,12,8)
D.eJ7=new C.a9(-12,-25,12,19)
D.eJ8=new C.a9(-12,-26,12,-6)
D.eJ9=new C.a9(-12,-4,12,14)
D.eJa=new C.a9(-12,-6,10,6)
D.eJb=new C.a9(-14,20,14,24)
D.eJc=new C.a9(-14,6,14,10)
D.eJd=new C.a9(-14,-17,14,15)
D.eJe=new C.a9(-14,-26,14,18)
D.eJf=new C.a9(-14,-4,14,20)
D.eJg=new C.a9(-15,-29,15,25)
D.eJh=new C.a9(-16,-16,16,16)
D.eJi=new C.a9(-16,-22,-9,18)
D.eJj=new C.a9(-16,-24,16,-10)
D.eJk=new C.a9(-16,-2,16,20)
D.eJm=new C.a9(-18,20,18,24)
D.eJn=new C.a9(-18,-18,18,20)
D.eJo=new C.a9(-20,12,20,22)
D.eJp=new C.a9(-20,-28,20,26)
D.eJq=new C.a9(-22,14,22,18)
D.aM1=new C.a9(-22,-26,22,24)
D.eJr=new C.a9(-22,-3,22,3)
D.eJs=new C.a9(-22,-4,22,12)
D.eJt=new C.a9(-24,-12,10,22)
D.eJu=new C.a9(-24,-14,22,8)
D.eJv=new C.a9(-24,-6,24,20)
D.aM2=new C.a9(-24,-9,24,9)
D.eJw=new C.a9(-25,14,25,19)
D.eJx=new C.a9(-26,-14,14,8)
D.eJy=new C.a9(-26,-4,26,20)
D.eJz=new C.a9(-26,-6,4,6)
D.aM3=new C.a9(-28,-13,28,13)
D.eJA=new C.a9(-28,-16,28,16)
D.eJB=new C.a9(-28,-16,28,8)
D.eJC=new C.a9(-28,-22,28,22)
D.eJD=new C.a9(-30,-12,30,14)
D.eJE=new C.a9(-30,-14,0,14)
D.eJF=new C.a9(-30,-18,30,20)
D.eJG=new C.a9(-30,-28,30,14)
D.eJH=new C.a9(-30,-2,30,18)
D.eJI=new C.a9(-30,-4,30,18)
D.eJJ=new C.a9(-32,-17,32,17)
D.eJK=new C.a9(-32,-28,32,18)
D.eJL=new C.a9(-33,-21,33,17)
D.eJM=new C.a9(-34,14,34,26)
D.a5V=new C.a9(-34,-18,34,18)
D.eJN=new C.a9(-34,-4,34,7)
D.eJO=new C.a9(-36,-24,36,20)
D.eJP=new C.a9(-38,-22,38,22)
D.eJQ=new C.a9(-3,12,3,22)
D.eJR=new C.a9(-3,5,3,15)
D.eJT=new C.a9(-46,-34,46,28)
D.eJU=new C.a9(-48,-3,48,3)
D.eJX=new C.a9(-6,18,24,24)
D.eJY=new C.a9(-6,5,6,12)
D.eJZ=new C.a9(-6,-22,6,-15)
D.eK_=new C.a9(-9,-16,9,22)
D.eK0=new C.a9(-4.5,-24,4.5,-21.2)
D.eK2=new C.a9(14,-9,17.5,9)
D.e1Z={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aMV=new C.eI(D.e1Z,5,x.R)
D.e1B={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eMW=new C.eI(D.e1B,10,x.R)
D.eOV=new C.ar(24,44)
D.eP_=new C.ar(300,300)
D.ePj=new C.ar(54,38)
D.ePq=new C.ar(66,38)
D.b5I=new C.fj(2,null,null,null,null,A.bt,null,null,null,null)
D.eQn=new C.a7(16,16,D.b5I,null)
D.aNU=new C.hM(3,12,12,0.82,null)
D.fxo=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aO4=new C.b1(D.fxo,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.d78=w([A.cf,A.c7,A.b2,A.aR,A.pt,A.cf],x.O)
D.eWf=new C.fT(A.A,0,6.283185307179586,A.x,D.d78,null,null)
D.f4c=new C.G(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.PW,null,null,null)
D.eXu=new C.eq("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.f4c)
D.aQv=new C.G(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXv=new C.eq("What we see",null,null,A.cO,null,null,null,null,null,null,D.aQv)
D.f1B=new C.G(!0,A4.Kv,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXy=new C.eq("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.f1B)
D.f6p=new C.G(!0,A.kf,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXE=new C.eq("AI",null,null,A.cO,null,null,null,null,null,null,D.f6p)
D.f1m=new C.G(!0,A.c1,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXF=new C.eq("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.f1m)
D.aOT=new C.G(!0,A.c1,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXU=new C.G(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXW=new C.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYs=new C.G(!0,A.bi,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYL=new C.G(!0,A.co,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZf=new C.G(!0,A.c1,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZk=new C.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZA=new C.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_2=new C.G(!0,A.aS,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_p=new C.G(!0,A.c1,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_z=new C.G(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNs=new C.cR(A.hI,A.dE,6)
D.d0V=w([D.eNs],x.q)
D.f_T=new C.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d0V,null,null,null)
D.f_W=new C.G(!0,A.eu,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_Z=new C.G(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f00=new C.G(!0,A.c1,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0p=new C.G(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPf=new C.G(!0,A.c1,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0J=new C.G(!0,A.aA,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0K=new C.G(!0,A.c1,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1E=new C.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f28=new C.G(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2D=new C.G(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNv=new C.cR(A.aX,A.J,3)
D.ay1=w([D.eNv],x.q)
D.f2G=new C.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ay1,null,null,null)
D.f2L=new C.G(!0,A.c,null,null,null,null,12.5,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3r=new C.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.PW,null,null,null)
D.f3U=new C.G(!0,A.aA,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f41=new C.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4r=new C.G(!0,A.tk,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4H=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f51=new C.G(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f56=new C.G(!0,A.c1,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5b=new C.G(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5h=new C.G(!0,A.aA,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5I=new C.G(!0,A.c1,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5V=new C.G(!0,A.n2,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5W=new C.G(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6a=new C.G(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPV=new C.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6J=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNj=new C.cR(A.w,A.J,5)
D.cQ6=w([D.eNj],x.q)
D.f6K=new C.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cQ6,null,null,null)
D.f6P=new C.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ay1,null,null,null)
D.f73=new C.G(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f78=new C.G(!0,A.fy,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7p=new C.G(!0,A.c1,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7U=new C.G(!0,A.b2,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8r=new C.G(!0,A.c1,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f94=new C.G(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9d=new C.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQg=new C.G(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9G=new C.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9Q=new C.G(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9X=new C.G(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fag=new C.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQs=new C.G(!0,A.ad,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faj=new C.G(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb3=new C.G(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7T=new C.G(!0,A.c,null,null,null,null,13,A.a5,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbs=new C.G(!0,A.tk,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbM=new C.G(!0,A.b2,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f03=new C.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fca=new C.x("\u26a0\ufe0f ",null,D.f03,null,null,null,null,null,null,null,null,null)
D.fcm=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.zB,null,null,null,null,null,null,null,null,null)
D.fcN=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mK,null,null,null,null,null,null,null,null,null)
D.fdR=new C.x("Pick one, then change it and see what happens.",null,A.zB,null,null,null,null,null,null,null,null,null)
D.fdV=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f17=new C.G(!0,A.ad,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feP=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.f17,null,null,null,null,null,null,null,null,null)
D.ffc=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,U.a79,null,null,null,null,null,null,null,null,null)
D.fgm=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fgW=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fh0=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fhz=new C.x("Make it yours",null,A.k9,null,null,null,null,null,null,null,null,null)
D.fhO=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a7f,null,null,null,null,null,null,null,null,null)
D.f5m=new C.G(!0,A.jd,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk5=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.f5m,null,null,null,null,null,null,null,null,null)
D.fkl=new C.x("YOUR DECODING",null,Q.mK,null,null,null,null,null,null,null,null,null)
D.fkx=new C.x("5G",null,T.aPi,null,null,null,null,null,null,null,null,null)
D.f7F=new C.G(!0,A.c1,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flF=new C.x("WHAT HAPPENS",null,D.f7F,null,null,null,null,null,null,null,null,null)
D.fnn=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fo1=new C.x("Change the words and pictures on the three slabs.",null,A.zB,null,null,null,null,null,null,null,null,null)
D.foc=new C.x("All the parts and wires will be removed.",null,A.hD,null,null,null,null,null,null,null,null,null)
D.fox=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fp7=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fpZ=new C.x("INTERCEPTED",null,Q.mK,null,null,null,null,null,null,null,null,null)
D.fqi=new C.x("\ud83c\udfaf Challenges",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fqN=new C.x("Remove this part",null,U.aOW,null,null,null,null,null,null,null,null,null)
D.fr4=new C.x("Clear the board?",null,A.dn,null,null,null,null,null,null,null,null,null)
D.f79=new C.G(!0,A.bu,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frj=new C.x("How the Lab works",null,D.f79,null,null,null,null,null,null,null,null,null)
D.eZM=new C.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frC=new C.x("Electronics Lab",null,D.eZM,null,null,null,null,A.a2,null,1,null,null)
D.frF=new C.x("?",null,M.aQp,null,null,null,null,null,null,null,null,null)
D.f5g=new C.G(!0,A.aR,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frJ=new C.x("Planet Earth",null,D.f5g,null,null,null,null,null,null,null,null,null)
D.fsU=new C.x("Ready-made circuits",null,A.dm,null,null,null,null,null,null,null,null,null)
D.ftu=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.ftN=new C.x("UNIVERSE EXPLORER",null,I.a7e,null,null,null,null,null,null,null,null,null)
D.fwg=new C.x("SECRET VERSION",null,Q.mK,null,null,null,null,null,null,null,null,null)
D.fa_=new C.G(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwN=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.fa_,null,null,null,null,null,null,null,null,null)
D.fxZ=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,U.a79,null,null,null,null,null,null,null,null,null)
D.fyr=new C.x("NGMY",null,A.uH,null,null,null,null,null,null,null,null,null)
D.fyE=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.IZ,null,null,null,null,null,null,null,null,null)
D.fz0=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.kF,null,null,null,null,null,null,null,null,null)
D.fzY=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.zB,null,null,null,null,null,null,null,null,null)
D.fA_=new C.x("TOOLBOX",null,I.a7e,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hcs=null
$.hcr=null
$.hiv=0
$.hKm=C.T(x.N,x.k)
$.hKX=C.T(x.N,x.k)
$.hbN=null
$.hKI=C.T(x.N,x.k)
$.hLL=C.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"igd","bDn",()=>{var v="led"
return C.a([B.axy("Both together","Make the light glow only when BOTH switches are ON.",2,new B.feO(),v),B.axy("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.feP(),v),B.axy("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.feQ(),v),B.axy("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.feX(),v),B.axy("Not both","Make the light go OFF only when both switches are ON.",2,new B.feY(),v),B.axy("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.feZ(),"buzzer")],C.ax("O<ba3>"))})
w($,"igF","bDo",()=>C.a([B.ox("UNIVERSE","Earth, space and gravity",A.a0a,A.aR,new B.ffe()),B.ox("ELECTRONICS LAB","Batteries, wires, real circuits",Ai.a_y,A.aR,new B.fff()),B.ox("DISCOVERY LAB","Body Explorer: a real 3D human",D.a_p,A.b2,new B.ffg()),B.ox("TOOLBOX","Converter, clock, games",S.akq,A.cs,new B.ffr()),B.ox("MOLECULE MAKER","Join atoms into real molecules",A.N7,A.hw,new B.fft()),B.ox("DNA LAB","Copy DNA, build a protein",D.a_p,A.bZ,new B.ffu()),B.ox("ECOSYSTEM LAB","Grass, rabbits and foxes",A.yc,A.b2,new B.ffv()),B.ox("BALANCE LAB","Levers, weight and torque",D.bFm,A.aM,new B.ffw()),B.ox("GEAR LAB","Teeth, speed and force",A.BE,A.cs,new B.ffx()),B.ox("LASER MAZE","Bend the beam with mirrors",I.akP,A.ay,new B.ffy()),B.ox("LIGHT MIXER","Match colours with light",D.bD3,A.b8,new B.ffz()),B.ox("CIPHER LAB","Make and crack secret codes",A.yn,A.aR,new B.ffh()),B.ox("REACTION LAB","Wire parts together",A.yr,A.bu,new B.ffi()),B.ox("SPARK PAINTER","Paint with light",A.a_r,A.bZ,new B.ffj()),B.ox("ROCKET LANDER","Land softly on the pad",A.nj,A.aR,new B.ffk()),B.ox("ORBIT STUDIO","Slingshot planets",A.mu,A.cs,new B.ffl()),B.ox("SWARM STUDIO","A living school of fish",A.N7,A.b2,new B.ffm()),B.ox("CHAIN BURST","One tap, a whole chain",A.h8,A.bZ,new B.ffn()),B.ox("TITLE ANIMATOR","Make a moving title",A.yj,A.c7,new B.ffo()),B.ox("CIRCUIT LAB","Connect logic, learn it",A.a_S,A.co,new B.ffp()),B.ox("MARBLE MUSIC","Marbles ring the notes",D.bCJ,A.b8,new B.ffq()),B.ox("ORBIT SEQUENCER","Planets play the tune",D.bF9,A.bt,new B.ffs())],C.ax("O<brT>")))
w($,"ii9","qb",()=>{var v,u,t=C.T(x.N,x.dV)
for(v=0;v<76;++v){u=D.Qc[v]
t.n(0,u.a,u)}return t})
w($,"ige","ahq",()=>C.a([B.Fn("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.ff_()),B.Fn("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.ff0()),B.Fn("Spin the motor","A battery and a motor in a loop will make it spin.",new B.ff1()),B.Fn("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.ff2()),B.Fn("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.ff3()),B.Fn("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.feR()),B.Fn("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.feS()),B.Fn("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.feT()),B.Fn("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.feU()),B.Fn("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.feV()),B.Fn("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.feW())],C.ax("O<ba4>")))
w($,"igH","hqT",()=>C.a([B.a0p("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cg,new B.ffH()),B.a0p("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cf,A.bC,new B.ffI()),B.a0p("Breathe","Calm down in a minute","\ud83e\udee7",A.hw,A.cy,new B.ffJ()),B.a0p("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b7,new B.ffK()),B.a0p("Memory Match","Find the pairs","\ud83c\udccf",A.aR,A.ce,new B.ffL()),B.a0p("Simon Sounds","Copy the tune","\ud83c\udfb5",A.c7,A.bl,new B.ffM()),B.a0p("Tip & Split","Share the bill","\ud83e\uddfe",A.b2,A.aZ,new B.ffN()),B.a0p("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bt,A.aE,new B.ffO())],C.ax("O<btd>")))
w($,"igG","hqS",()=>C.a([B.aeK("EARTH GLOBE","Turn it, tap a country",A.mu,A.aR,new B.ffA()),B.aeK("SOLAR SYSTEM","The Sun and its worlds",D.bCN,A.aM,new B.ffB()),B.aeK("GRAVITY LAB","Drop, weigh, orbit",D.aly,A.cs,new B.ffC()),B.aeK("BLACK HOLE","Throw in a star",A.FB,A.bt,new B.ffD()),B.aeK("GALAXY","Build, tilt, collide",A.y0,A.h2,new B.ffE()),B.aeK("SIZE COMPARE","Earth next to a star",D.bD5,A.bZ,new B.ffF()),B.aeK("SEASONS & MOON","Why it is summer",A.vz,A.bu,new B.ffG())],C.ax("O<bt8>")))})()};
(a=>{a["uSVsb9vqQrYHZqQMPdIxMsb5HOE="]=a.current})($__dart_deferred_initializers__);