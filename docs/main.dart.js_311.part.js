((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A1,Ab,A2,A3,I,P,A4,Ac,A5,A6,G,Ad,Ae,A7,Af,Y,Ag,Ah,N,Q,Ai,Aj,Z,O,U,Ak,Al,V,M,A8,W,K,R,Am,E,F,L,B={
byA(d){return B.hOp(d)},
hOp(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
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
hZZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.PO[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cX(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.hQ(D.PO,new B.fub())
if(w==null)w=A.d.gK(D.PO)
s=C.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.L)(r),++u){l=r[u].a
k=l[0]
l=$.qb().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gK(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.ajq(w.a,w.b,m,w,s,!1)},
hTI(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.K(D.Qc,new B.fkH(),x.bd).aI(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i6Q(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
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
for(a9=0;a9<4;++a9){m=D.dfw[a9]
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
if(J.f0(s,f)&&J.f0(s,e)&&!J.A(f,e))J.ch(i,new C.cD([f,d,e,a0]))}if(J.ad(i)<2)return b1
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
hYz(d){var w,v,u=B.h3A()
d.B(u)
for(w=0;w<60;++w)u.v1(0,0.03333333333333333)
v=u.a
return A.d.b4(v,new B.fr9(u))&&!A.d.d7(v,new B.fra())},
hYy(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.qb().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.L)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.ddZ,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aI(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.L)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aI(s,"\n")+"\nWires: "+A.d.aI(l,"; ")},
hMV(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aI(v,"\n")+"\n\n"}v=A.d.aI(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hZY(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qb().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Qc[u]
if(A.d.b4(w,new B.fu8(s)))if(!C.cX(r,s.b.toLowerCase(),0))v=C.cX(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a1(w,new B.fu9(e),C.U(w).k("a1<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cI(w,0,new B.fua())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gK(w)
w=$.qb().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajq:function ajq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fub:function fub(){},
fkH:function fkH(){},
fr9:function fr9(d){this.a=d},
fra:function fra(){},
fu8:function fu8(d){this.a=d},
fu9:function fu9(d){this.a=d},
fua:function fua(){},
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
e5E:function e5E(d){this.a=d},
e5F:function e5F(d,e,f){this.a=d
this.b=e
this.c=f},
e5G:function e5G(d){this.a=d},
e5R:function e5R(d){this.a=d},
e5S:function e5S(d,e){this.a=d
this.b=e},
e5N:function e5N(d){this.a=d},
e5L:function e5L(d,e){this.a=d
this.b=e},
e5M:function e5M(d,e,f){this.a=d
this.b=e
this.c=f},
e5O:function e5O(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e5J:function e5J(d){this.a=d},
e5K:function e5K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5P:function e5P(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e5I:function e5I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5Q:function e5Q(d,e){this.a=d
this.b=e},
e5H:function e5H(d,e){this.a=d
this.b=e},
e5V:function e5V(d){this.a=d},
e5U:function e5U(d){this.a=d},
e5W:function e5W(d){this.a=d},
e5T:function e5T(d){this.a=d},
e5X:function e5X(d,e){this.a=d
this.b=e},
e5Y:function e5Y(d,e){this.a=d
this.b=e},
e5Z:function e5Z(d,e){this.a=d
this.b=e},
e6_:function e6_(d,e){this.a=d
this.b=e},
byW(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aPd,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hh2(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zB,A.L,w,w),A.aB,C.bV(A.fQ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.VT,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
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
elK:function elK(){},
em3:function em3(d){this.a=d},
em2:function em2(d,e){this.a=d
this.b=e},
em4:function em4(){},
em5:function em5(){},
elM:function elM(d,e,f){this.a=d
this.b=e
this.c=f},
elL:function elL(d,e){this.a=d
this.b=e},
elB:function elB(d){this.a=d},
elC:function elC(d){this.a=d},
elD:function elD(d){this.a=d},
elE:function elE(d){this.a=d},
elF:function elF(d){this.a=d},
elG:function elG(d){this.a=d},
elH:function elH(d){this.a=d},
elI:function elI(d){this.a=d},
elJ:function elJ(d){this.a=d},
elz:function elz(d){this.a=d},
elA:function elA(d){this.a=d},
ely:function ely(d){this.a=d},
elX:function elX(d,e){this.a=d
this.b=e},
elS:function elS(d){this.a=d},
elT:function elT(d){this.a=d},
elP:function elP(d){this.a=d},
elU:function elU(d){this.a=d},
elO:function elO(d){this.a=d},
elV:function elV(d){this.a=d},
elW:function elW(d){this.a=d},
elN:function elN(d){this.a=d},
elY:function elY(d,e){this.a=d
this.b=e},
elR:function elR(d,e){this.a=d
this.b=e},
elZ:function elZ(d){this.a=d},
em_:function em_(d){this.a=d},
em0:function em0(d){this.a=d},
em1:function em1(d){this.a=d},
elQ:function elQ(d){this.a=d},
bge:function bge(d,e){this.b=d
this.a=e},
aLv:function aLv(){},
bwy:function bwy(){},
cEv(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cEv=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qP().jx(0,"assets/data/body3d.bin"),$async$cEv)
case 3:d=a1
$.hco=J.eZ(A.dD.gaM(d),d.byteOffset,d.byteLength)
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
e=D.d3o[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2F(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aX6))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b9l(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cEv,v)},
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
dEr:function dEr(d){this.a=d},
dEq:function dEq(d,e){this.a=d
this.b=e},
dE3:function dE3(d,e){this.a=d
this.b=e},
dE4:function dE4(){},
dEs:function dEs(){},
dE5:function dE5(d,e){this.a=d
this.b=e},
dE6:function dE6(d){this.a=d},
dE7:function dE7(){},
dE8:function dE8(d){this.a=d},
dEa:function dEa(d,e){this.a=d
this.b=e},
dE9:function dE9(d){this.a=d},
dE0:function dE0(d,e,f){this.a=d
this.b=e
this.c=f},
dE1:function dE1(d){this.a=d},
dE2:function dE2(d){this.a=d},
dEh:function dEh(d){this.a=d},
dEi:function dEi(d,e){this.a=d
this.b=e},
dEj:function dEj(d,e){this.a=d
this.b=e},
dEk:function dEk(d){this.a=d},
dEg:function dEg(d,e){this.a=d
this.b=e},
dEl:function dEl(d,e){this.a=d
this.b=e},
dEf:function dEf(d,e){this.a=d
this.b=e},
dEm:function dEm(d){this.a=d},
dEe:function dEe(d){this.a=d},
dEn:function dEn(d){this.a=d},
dEd:function dEd(d){this.a=d},
dEo:function dEo(d){this.a=d},
dEc:function dEc(d){this.a=d},
dEp:function dEp(d){this.a=d},
dEb:function dEb(d){this.a=d},
aKx:function aKx(){},
aKy:function aKy(){},
c_P:function c_P(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c_Q:function c_Q(d,e){this.a=d
this.b=e},
c_R:function c_R(d){this.a=d},
axy(d,e,f,g,h){return new B.ba3(d,e,f,g,h)},
fVo(d,e,f,g,h,i){return $.hKi.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cLh(d,e,f,i,g,h))},
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
feL:function feL(){},
feM:function feM(){},
feN:function feN(){},
feU:function feU(){},
feV:function feV(){},
feW:function feW(){},
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
dGC:function dGC(d){this.a=d},
dGg:function dGg(d,e){this.a=d
this.b=e},
dGj:function dGj(){},
dGD:function dGD(){},
dGe:function dGe(d,e){this.a=d
this.b=e},
dGf:function dGf(d,e){this.a=d
this.b=e},
dGk:function dGk(d,e,f){this.a=d
this.b=e
this.c=f},
dG9:function dG9(){},
dGa:function dGa(){},
dGb:function dGb(d){this.a=d},
dGc:function dGc(d,e){this.a=d
this.b=e},
dGd:function dGd(d,e,f){this.a=d
this.b=e
this.c=f},
dGl:function dGl(){},
dGm:function dGm(d,e){this.a=d
this.b=e},
dGn:function dGn(d){this.a=d},
dGi:function dGi(d,e){this.a=d
this.b=e},
dGh:function dGh(d){this.a=d},
dG8:function dG8(d,e,f){this.a=d
this.b=e
this.c=f},
dGw:function dGw(d){this.a=d},
dGv:function dGv(d){this.a=d},
dGx:function dGx(d){this.a=d},
dGu:function dGu(d){this.a=d},
dGs:function dGs(d){this.a=d},
dGt:function dGt(d){this.a=d},
dGr:function dGr(d){this.a=d},
dGo:function dGo(d){this.a=d},
dGq:function dGq(d){this.a=d},
dGy:function dGy(d,e){this.a=d
this.b=e},
dGz:function dGz(d,e){this.a=d
this.b=e},
dGA:function dGA(d){this.a=d},
dGp:function dGp(d){this.a=d},
dGB:function dGB(d,e){this.a=d
this.b=e},
bam:function bam(d,e){this.b=d
this.a=e},
cLh:function cLh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKD:function aKD(){},
bwh:function bwh(){},
hB7(){return new B.N5(null)},
ox(d,e,f,g,h){return new B.brT(d,e,f,g,h)},
bqj(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fVU(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
N5:function N5(d){this.a=d},
Ka:function Ka(d,e){this.a=d
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
dMr:function dMr(d,e){this.a=d
this.b=e},
dMq:function dMq(d){this.a=d},
dMt:function dMt(d,e){this.a=d
this.b=e},
dMs:function dMs(d){this.a=d},
brT:function brT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffb:function ffb(){},
ffc:function ffc(){},
ffd:function ffd(){},
ffo:function ffo(){},
ffq:function ffq(){},
ffr:function ffr(){},
ffs:function ffs(){},
fft:function fft(){},
ffu:function ffu(){},
ffv:function ffv(){},
ffw:function ffw(){},
ffe:function ffe(){},
fff:function fff(){},
ffg:function ffg(){},
ffh:function ffh(){},
ffi:function ffi(){},
ffj:function ffj(){},
ffk:function ffk(){},
ffl:function ffl(){},
ffm:function ffm(){},
ffn:function ffn(){},
ffp:function ffp(){},
bqk:function bqk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eWp:function eWp(d){this.a=d},
eWo:function eWo(d,e){this.a=d
this.b=e},
eWm:function eWm(d){this.a=d},
eWq:function eWq(d){this.a=d},
eWn:function eWn(d,e){this.a=d
this.b=e},
aet:function aet(d,e,f){this.c=d
this.d=e
this.a=f},
adl:function adl(d,e,f){this.c=d
this.d=e
this.a=f},
PN:function PN(d,e,f,g,h,i,j,k,l,m){var _=this
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
eW5:function eW5(d){this.a=d},
eW4:function eW4(d){this.a=d},
eW3:function eW3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eW2:function eW2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eW0:function eW0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eW_:function eW_(d,e,f){this.a=d
this.b=e
this.c=f},
eW1:function eW1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eVZ:function eVZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWd:function eWd(d){this.a=d},
eWc:function eWc(d){this.a=d},
eWe:function eWe(d,e){this.a=d
this.b=e},
eWf:function eWf(d,e){this.a=d
this.b=e},
eWg:function eWg(d,e){this.a=d
this.b=e},
eWb:function eWb(d,e,f){this.a=d
this.b=e
this.c=f},
eWh:function eWh(d,e,f){this.a=d
this.b=e
this.c=f},
eWa:function eWa(d){this.a=d},
eW6:function eW6(d){this.a=d},
eWi:function eWi(d){this.a=d},
eWj:function eWj(d){this.a=d},
eW9:function eW9(d,e){this.a=d
this.b=e},
eWk:function eWk(d,e){this.a=d
this.b=e},
eW8:function eW8(d,e){this.a=d
this.b=e},
eWl:function eWl(d,e){this.a=d
this.b=e},
eW7:function eW7(d,e){this.a=d
this.b=e},
eVX:function eVX(){},
eVY:function eVY(){},
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
his(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.u(w,0)),u=e.aB(0,new C.u(w,0)),t=1-f,s=3*t
return d.aG(0,t*t*t).ad(0,v.aG(0,s*t*f)).ad(0,u.aG(0,s*f*f)).ad(0,e.aG(0,f*f*f))},
bgd(d,e,f,g,h,i){return $.hKT.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.dgf(d,e,f,i,g,h))},
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
dgj:function dgj(d){this.a=d},
dgk:function dgk(d){this.a=d},
dgg:function dgg(d,e){this.a=d
this.b=e},
dgh:function dgh(d){this.a=d},
dgi:function dgi(d){this.a=d},
dgl:function dgl(d){this.a=d},
dgm:function dgm(d){this.a=d},
dgn:function dgn(d){this.a=d},
dgo:function dgo(d){this.a=d},
dgp:function dgp(d){this.a=d},
dgq:function dgq(d){this.a=d},
dgr:function dgr(d){this.a=d},
dgs:function dgs(d){this.a=d},
dgt:function dgt(d){this.a=d},
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
el4:function el4(d){this.a=d},
ekU:function ekU(d){this.a=d},
ekW:function ekW(){},
ekX:function ekX(){},
el_:function el_(){},
el0:function el0(d,e,f){this.a=d
this.b=e
this.c=f},
el1:function el1(d){this.a=d},
el2:function el2(d){this.a=d},
ekY:function ekY(){},
ekZ:function ekZ(d){this.a=d},
elu:function elu(d){this.a=d},
el3:function el3(){},
ekQ:function ekQ(d){this.a=d},
el6:function el6(d){this.a=d},
el5:function el5(d){this.a=d},
el8:function el8(){},
el7:function el7(d,e){this.a=d
this.b=e},
ekT:function ekT(){},
ekR:function ekR(d){this.a=d},
ekS:function ekS(d){this.a=d},
els:function els(d){this.a=d},
elr:function elr(d){this.a=d},
elt:function elt(d){this.a=d},
eli:function eli(d,e){this.a=d
this.b=e},
elq:function elq(d){this.a=d},
elo:function elo(d){this.a=d},
elp:function elp(d){this.a=d},
eln:function eln(d){this.a=d},
elm:function elm(d){this.a=d},
elj:function elj(d){this.a=d},
elk:function elk(d){this.a=d},
ell:function ell(d){this.a=d},
ekV:function ekV(){},
ele:function ele(d){this.a=d},
elf:function elf(d){this.a=d},
eld:function eld(d){this.a=d},
elg:function elg(d){this.a=d},
elc:function elc(d){this.a=d},
elh:function elh(d){this.a=d},
elb:function elb(d){this.a=d},
ela:function ela(d){this.a=d},
el9:function el9(d,e){this.a=d
this.b=e},
bgc:function bgc(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dgf:function dgf(d,e,f,g,h,i){var _=this
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
PE:function PE(d,e,f,g,h,i){var _=this
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
ex8:function ex8(d){this.a=d},
ex6:function ex6(d){this.a=d},
ex7:function ex7(){},
ewK:function ewK(){},
ewJ:function ewJ(){},
ewT:function ewT(d,e){this.a=d
this.b=e},
ewV:function ewV(d){this.a=d},
ewZ:function ewZ(d){this.a=d},
ewU:function ewU(d){this.a=d},
ex_:function ex_(d){this.a=d},
ex0:function ex0(d){this.a=d},
ex1:function ex1(d,e){this.a=d
this.b=e},
ewS:function ewS(d,e){this.a=d
this.b=e},
ex2:function ex2(d){this.a=d},
ewR:function ewR(d){this.a=d},
ex3:function ex3(d,e){this.a=d
this.b=e},
ewQ:function ewQ(d,e){this.a=d
this.b=e},
ex4:function ex4(d){this.a=d},
ewP:function ewP(d,e){this.a=d
this.b=e},
ex5:function ex5(d){this.a=d},
ewO:function ewO(d){this.a=d},
ewW:function ewW(d){this.a=d},
ewN:function ewN(d){this.a=d},
ewX:function ewX(d){this.a=d},
ewM:function ewM(d){this.a=d},
ewY:function ewY(d,e){this.a=d
this.b=e},
ewL:function ewL(d,e){this.a=d
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
eDI:function eDI(d,e){this.a=d
this.b=e},
eDJ:function eDJ(d,e,f){this.a=d
this.b=e
this.c=f},
eDK:function eDK(d){this.a=d},
eDH:function eDH(){},
eDL:function eDL(d,e){this.a=d
this.b=e},
eDG:function eDG(d,e){this.a=d
this.b=e},
eDM:function eDM(d,e){this.a=d
this.b=e},
eDF:function eDF(d,e){this.a=d
this.b=e},
eDN:function eDN(d){this.a=d},
eDE:function eDE(d){this.a=d},
eDO:function eDO(d,e){this.a=d
this.b=e},
eDD:function eDD(d,e){this.a=d
this.b=e},
eDP:function eDP(d){this.a=d},
eDQ:function eDQ(d){this.a=d},
eDC:function eDC(d,e){this.a=d
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
ehB:function ehB(d){this.a=d},
ehC:function ehC(d,e){this.a=d
this.b=e},
ehp:function ehp(d,e){this.a=d
this.b=e},
ehq:function ehq(d){this.a=d},
ehn:function ehn(d){this.a=d},
eho:function eho(d){this.a=d},
ehm:function ehm(d){this.a=d},
ehr:function ehr(d){this.a=d},
ehl:function ehl(d,e){this.a=d
this.b=e},
eht:function eht(d){this.a=d},
ehk:function ehk(d,e){this.a=d
this.b=e},
ehu:function ehu(d){this.a=d},
ehj:function ehj(d,e){this.a=d
this.b=e},
ehv:function ehv(d){this.a=d},
ehi:function ehi(d){this.a=d},
ehw:function ehw(d){this.a=d},
ehh:function ehh(d){this.a=d},
ehx:function ehx(d){this.a=d},
ehg:function ehg(d){this.a=d},
ehy:function ehy(d){this.a=d},
ehz:function ehz(d){this.a=d},
ehA:function ehA(d){this.a=d},
ehf:function ehf(d){this.a=d},
ehs:function ehs(d){this.a=d},
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
eD9:function eD9(d){this.a=d},
eDa:function eDa(d){this.a=d},
eD8:function eD8(d){this.a=d},
eCZ:function eCZ(d,e){this.a=d
this.b=e},
eD_:function eD_(d){this.a=d},
eCX:function eCX(d){this.a=d},
eCY:function eCY(d){this.a=d},
eCW:function eCW(d){this.a=d},
eCP:function eCP(d){this.a=d},
eCQ:function eCQ(d){this.a=d},
eCO:function eCO(d){this.a=d},
eD0:function eD0(d,e){this.a=d
this.b=e},
eCV:function eCV(d,e){this.a=d
this.b=e},
eD1:function eD1(d,e){this.a=d
this.b=e},
eCU:function eCU(d,e){this.a=d
this.b=e},
eD2:function eD2(d){this.a=d},
eCT:function eCT(d){this.a=d},
eD3:function eD3(d){this.a=d},
eCS:function eCS(d,e){this.a=d
this.b=e},
eD4:function eD4(d){this.a=d},
eCR:function eCR(d,e){this.a=d
this.b=e},
eD5:function eD5(d){this.a=d},
eCN:function eCN(d,e){this.a=d
this.b=e},
eD6:function eD6(d){this.a=d},
eCM:function eCM(d,e){this.a=d
this.b=e},
eD7:function eD7(d){this.a=d},
eCL:function eCL(d,e){this.a=d
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
dFL:function dFL(d){this.a=d},
dFK:function dFK(d,e){this.a=d
this.b=e},
dFM:function dFM(){},
dFN:function dFN(d){this.a=d},
dFB:function dFB(d,e){this.a=d
this.b=e},
dFE:function dFE(d){this.a=d},
dFD:function dFD(d,e){this.a=d
this.b=e},
dFC:function dFC(d,e){this.a=d
this.b=e},
dFI:function dFI(d,e,f){this.a=d
this.b=e
this.c=f},
dFH:function dFH(d){this.a=d},
dFF:function dFF(d){this.a=d},
dFG:function dFG(d){this.a=d},
dFJ:function dFJ(d){this.a=d},
ba2:function ba2(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cKP:function cKP(d){this.a=d},
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
ed4:function ed4(d,e){this.a=d
this.b=e},
edt:function edt(d){this.a=d},
edi:function edi(d){this.a=d},
ed9:function ed9(d){this.a=d},
edj:function edj(d,e){this.a=d
this.b=e},
edk:function edk(d){this.a=d},
ed8:function ed8(d){this.a=d},
edg:function edg(d){this.a=d},
edh:function edh(d){this.a=d},
edf:function edf(d){this.a=d},
edl:function edl(d,e){this.a=d
this.b=e},
ede:function ede(d,e){this.a=d
this.b=e},
edm:function edm(d,e){this.a=d
this.b=e},
edd:function edd(d,e){this.a=d
this.b=e},
edn:function edn(d,e){this.a=d
this.b=e},
edc:function edc(d,e){this.a=d
this.b=e},
edo:function edo(d){this.a=d},
edb:function edb(d,e){this.a=d
this.b=e},
edp:function edp(d){this.a=d},
eda:function eda(d){this.a=d},
edq:function edq(d){this.a=d},
ed7:function ed7(d){this.a=d},
edr:function edr(d){this.a=d},
ed6:function ed6(d){this.a=d},
eds:function eds(d){this.a=d},
ed5:function ed5(d){this.a=d},
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
egZ:function egZ(d,e){this.a=d
this.b=e},
eh_:function eh_(d,e,f){this.a=d
this.b=e
this.c=f},
eh6:function eh6(d){this.a=d},
eh5:function eh5(d){this.a=d},
eh7:function eh7(d,e){this.a=d
this.b=e},
eh8:function eh8(d){this.a=d},
eh4:function eh4(d){this.a=d},
eh9:function eh9(d){this.a=d},
eh3:function eh3(d,e){this.a=d
this.b=e},
eha:function eha(d,e){this.a=d
this.b=e},
eh2:function eh2(d,e){this.a=d
this.b=e},
ehb:function ehb(d,e){this.a=d
this.b=e},
eh1:function eh1(d,e){this.a=d
this.b=e},
ehc:function ehc(d){this.a=d},
ehd:function ehd(d){this.a=d},
eh0:function eh0(d){this.a=d},
ehe:function ehe(d){this.a=d},
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
fb0(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7T,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.i_,w,w,1/0)},
i_n(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
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
e.bI(0,new B.fus(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.w0.h(0,d[n]).a)return!1
m=C.et([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.L)(j),++u){k=j[u]
if(m.J(0,k))l.push(k)}return m.a===d.length},
fYr(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cJ(w,v[0])*16+A.a.cJ(w,v[1])*4+A.a.cJ(w,v[2])]},
tb:function tb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8W:function b8W(d,e){this.a=d
this.b=e},
fus:function fus(d,e){this.a=d
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
egt:function egt(d){this.a=d},
egs:function egs(d,e){this.a=d
this.b=e},
egf:function egf(d,e){this.a=d
this.b=e},
eg9:function eg9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ega:function ega(d){this.a=d},
ege:function ege(d,e){this.a=d
this.b=e},
egd:function egd(d,e){this.a=d
this.b=e},
egb:function egb(d){this.a=d},
egc:function egc(d,e){this.a=d
this.b=e},
egn:function egn(){},
ego:function ego(d){this.a=d},
egm:function egm(d){this.a=d},
egp:function egp(d){this.a=d},
egl:function egl(d){this.a=d},
egj:function egj(d){this.a=d},
egk:function egk(d,e){this.a=d
this.b=e},
egg:function egg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egi:function egi(d){this.a=d},
egq:function egq(d,e){this.a=d
this.b=e},
egh:function egh(d,e){this.a=d
this.b=e},
egr:function egr(d,e){this.a=d
this.b=e},
bhO:function bhO(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dop:function dop(d,e){this.a=d
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
dOv:function dOv(d){this.a=d},
dOu:function dOu(d,e){this.a=d
this.b=e},
dOk:function dOk(d){this.a=d},
dOj:function dOj(){},
dOl:function dOl(d){this.a=d},
dOi:function dOi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOt:function dOt(){},
dOo:function dOo(){},
dOp:function dOp(d,e){this.a=d
this.b=e},
dOn:function dOn(d,e){this.a=d
this.b=e},
dOq:function dOq(d){this.a=d},
dOm:function dOm(d){this.a=d},
dOr:function dOr(d,e){this.a=d
this.b=e},
dOs:function dOs(d,e){this.a=d
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
dRk:function dRk(d){this.a=d},
dRj:function dRj(d,e){this.a=d
this.b=e},
dR7:function dR7(){},
dR6:function dR6(d,e){this.a=d
this.b=e},
dR8:function dR8(d){this.a=d},
dRc:function dRc(d){this.a=d},
dRb:function dRb(d,e){this.a=d
this.b=e},
dRd:function dRd(d){this.a=d},
dRa:function dRa(d,e){this.a=d
this.b=e},
dRe:function dRe(d){this.a=d},
dR9:function dR9(d,e){this.a=d
this.b=e},
dRf:function dRf(d){this.a=d},
dRg:function dRg(d){this.a=d},
dRh:function dRh(d){this.a=d},
dRi:function dRi(d){this.a=d},
bd7:function bd7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d3x:function d3x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3z:function d3z(d,e,f){this.a=d
this.b=e
this.c=f},
d3y:function d3y(d,e){this.a=d
this.b=e},
aKP:function aKP(){},
bzr(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a7T,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.i_,w,w,1/0)},
fo7(d,e,f,g,h){var w,v,u=null,t=C.hr(u,u,u,u,C.de(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.ca,u,A.e_,A.c8)
t.ex()
w=t.b
v=w.c
w=w.a.c
w=f.aB(0,new C.u(v/2,w.gbc(w)/2))
t.a4(d,w)},
hXs(){var w,v,u,t,s,r,q,p,o=new C.eM()
o.dB(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aC(5)
if(r.J(0,p))q.push(new C.z(p,1+o.aC(2+A.o.an(t,3))))}A.d.b0(q,new B.fp8())
w.push(new B.aRe(q))}return w},
a1j(d,e){var w,v,u,t
for(w=new C.WY(d),v="";w.C();){u=C.jJ(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jJ(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
i9a(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
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
fp8:function fp8(){},
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
dBW:function dBW(){},
dC8:function dC8(d){this.a=d},
dC7:function dC7(d,e,f){this.a=d
this.b=e
this.c=f},
dC9:function dC9(d){this.a=d},
dC6:function dC6(d,e){this.a=d
this.b=e},
dBX:function dBX(d,e){this.a=d
this.b=e},
dC1:function dC1(){},
dC2:function dC2(d){this.a=d},
dC0:function dC0(d){this.a=d},
dC3:function dC3(d,e){this.a=d
this.b=e},
dC_:function dC_(d,e){this.a=d
this.b=e},
dC4:function dC4(d,e){this.a=d
this.b=e},
dBZ:function dBZ(d,e){this.a=d
this.b=e},
dC5:function dC5(d){this.a=d},
dBY:function dBY(d){this.a=d},
b97:function b97(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cDm:function cDm(d,e){this.a=d
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
dVn:function dVn(d){this.a=d},
dVm:function dVm(d,e){this.a=d
this.b=e},
dVo:function dVo(d){this.a=d},
dVl:function dVl(d,e){this.a=d
this.b=e},
dVd:function dVd(d,e,f){this.a=d
this.b=e
this.c=f},
dVh:function dVh(d){this.a=d},
dVg:function dVg(d){this.a=d},
dVi:function dVi(d,e){this.a=d
this.b=e},
dVf:function dVf(d,e){this.a=d
this.b=e},
dVj:function dVj(d){this.a=d},
dVe:function dVe(d,e){this.a=d
this.b=e},
dVk:function dVk(d,e){this.a=d
this.b=e},
beB:function beB(d,e,f){this.b=d
this.c=e
this.a=f},
dbx:function dbx(d,e){this.a=d
this.b=e},
dby:function dby(d,e,f,g,h){var _=this
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
dG7:function dG7(d){this.a=d},
dG6:function dG6(d,e){this.a=d
this.b=e},
dFQ:function dFQ(){},
dFZ:function dFZ(d){this.a=d},
dFY:function dFY(){},
dG_:function dG_(d){this.a=d},
dFX:function dFX(){},
dG0:function dG0(d){this.a=d},
dFW:function dFW(d){this.a=d},
dG1:function dG1(d){this.a=d},
dFV:function dFV(d){this.a=d},
dG2:function dG2(d){this.a=d},
dFU:function dFU(d){this.a=d},
dG3:function dG3(d,e){this.a=d
this.b=e},
dFT:function dFT(d,e){this.a=d
this.b=e},
dG4:function dG4(d){this.a=d},
dFS:function dFS(d,e){this.a=d
this.b=e},
dG5:function dG5(d){this.a=d},
dFR:function dFR(d,e){this.a=d
this.b=e},
aKt:function aKt(){},
aKX:function aKX(){},
hnv(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aB(0,e).gcl()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h3A(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a41(w,v,u,A.cI,C.T(x.N,x.y))},
hv0(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.h3B(d),d.d*f.b)},
h3B(d){return 42+(D.lY.ai(0,d.b)?(d.ch-1)*38:0)},
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
bLu:function bLu(){},
bLF:function bLF(d){this.a=d},
bLA:function bLA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLG:function bLG(d){this.a=d},
bLH:function bLH(d){this.a=d},
bLJ:function bLJ(d){this.a=d},
bLK:function bLK(d){this.a=d},
bLI:function bLI(d){this.a=d},
bLL:function bLL(d,e,f){this.a=d
this.b=e
this.c=f},
bLM:function bLM(d){this.a=d},
bLw:function bLw(d){this.a=d},
bLx:function bLx(d){this.a=d},
bLv:function bLv(d){this.a=d},
bLy:function bLy(d,e,f){this.a=d
this.b=e
this.c=f},
bLz:function bLz(d){this.a=d},
bLt:function bLt(d){this.a=d},
bLN:function bLN(d,e){this.a=d
this.b=e},
bLB:function bLB(d,e){this.a=d
this.b=e},
bLE:function bLE(d){this.a=d},
bLD:function bLD(d){this.a=d},
bLC:function bLC(d){this.a=d},
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
ck8:function ck8(d){this.a=d},
i6M(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fFR(),c9=new B.fFT(),d0=new B.fFU(),d1=new B.fFS(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bK,A.bJ))
d3.bC(D.e5d,D.e30,c9.$2(A.dB,1.4))
d3.bC(D.e2R,D.e2Q,c9.$2(A.bv,2.4))
d3.bC(D.e2S,Y.aGc,c9.$2(A.bv,2.4))
if(c7){d2=c8.$1(A.f5.j(0.5))
d2.z=A.QX
d3.ae(D.e2B,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aM_,A.aP,A.cr))
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
r.delete()}}d3.ae(D.e59,2.4,c8.$1(c7?A.bk:A.ak))
d3.ae(D.e5R,2.4,c8.$1(A.ak))
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
d3.aP(q,c8.$1(A.f5.j(0.35)))
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
d3.bC(D.a53,D.aGs,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f3).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.ae(A.ik,3,c8.$1(c7?A.bk:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a2Q[m]
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
d3.aP(w,d1.$3(D.eJm,A.aM,A.d5))
d3.aY(D.eIM,c8.$1(A.dA))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.j1(0,d4.y*2)
d3.bC(A.J,D.e2V,c9.$2(A.bO,2.4))
d3.bC(A.a52,D.e2U,c9.$2(A.hI,1))
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
d3.aP(d2,c8.$1(A.bL.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eJs,A.bl,A.cC))
k=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
k.F(new C.b5(4,-6))
k.F(new C.ap(18,-12))
k.F(new C.ap(18,12))
k.F(new C.ap(4,6))
k.F(new C.bF())
d3.aP(k,c8.$1(A.ee))
d3.ae(D.e2Z,7,c8.$1(c7?A.c:A.dA))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(L.n_))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bv(d5*17),3)!==0
else j=!1
i=j?A.bZ:D.bgS
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bZ.j(0.35))
t.z=A.lt
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e5j,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eJy,A.bO,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bL.j(0.75):A.az))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.j1(0,d4.y*0.5)
d3.hO(C.cl(A.J,7,22),c8.$1(A.d5))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(L.n_))
if(c7)d6.$5(d3,"0:"+A.a.aT(A.o.u(59-A.o.E(A.k.bv(d5),60)),2,"0"),D.e3_,A.b2,6.5)
d3.ae(D.e3b,4,c8.$1(A.dA))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ae(A.RL,10,c8.$1(c7?A.c7:A.bv))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.j1(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e5T,A.c,16)
d2.restore()
d3.ae(A.k4,6,c8.$1(A.d3))
d3.ae(A.k4,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.RL,14+v*6+A.k.E(t,6))
r=c9.$2(A.c7.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c_(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bC(D.e5i,D.e5P,c9.$2(A.bv,4))
d2=d3.a
J.by(d2.save())
d3.j1(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eJn,A.bO,A.ak))
d3.ae(D.aGe,8,c8.$1(A.az))
d3.ae(D.aGe,4.5,c8.$1(c7?A.aR:A.cC))
d3.ae(D.e5g,2.2,c8.$1(c7&&A.o.E(A.k.bv(d5*1.6),2)===0?A.ay:A.kl))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e5r,A.ay,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eJv,A.iR,A.fa))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dL))
if(c7){d2=d5*2.3
d3.ae(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aY(new C.a9(-18,t,-15.6,t+8),c8.$1(A.b2))
d2=-9+Math.sin(d2-0.4)*6
d3.aY(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bZ))}d3.ae(D.e5c,4,c8.$1(A.aX))
d3.ae(D.e2W,2.4,c8.$1(A.ay))
d3.ae(D.e38,2.4,c8.$1(A.bk))
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
d6.$5(d3,"72",D.e2X,A.h1,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e5v,A.h1.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ae(D.e5l,3,c8.$1(c7?A.bk:A.bv))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cy.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aY(D.eJp,c8.$1(F.t9))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.t9(0,-1,1)
d3.hO(C.cl(A.J,8,14),c8.$1(A.cs))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,0))
d2.F(new C.ap(-12,-4))
d2.F(new C.ap(-12,4))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.cg))
d3.ae(D.e3D,1.2,c8.$1(A.w))
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
d3.aP(e,d1.$3(D.eJT,A.c,A.bC))
d3.aY(D.eJS,c8.$1(c7?A.dP:A.bv))
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
d3.ae(D.e2C,14,d2)}return!0
case"discoball":d3.bC(D.e2H,K.aGa,c9.$2(A.dA,1.4))
d3.ae(A.J,16,d1.$3(D.eJa,A.aP,A.ak))
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
r=c8.$1(D.d4l[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eJ8,A.cr,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eJ1,A.aL,A.bJ))
d3.bC(D.e2G,D.e2I,c9.$2(A.bv,1.6))
d3.ae(D.e2J,2.2,c8.$1(c7?A.ay:A.bv))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a2S[m]
if(c7)t=a1?A.b8:A.f6
else t=A.cC
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.j1(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bC(A.J,D.a5_,c9.$2(A.bJ,4))
d2.restore()
d3.bC(D.e55,D.e5p,c9.$2(A.bJ,4))
d3.aY(D.eJR,c8.$1(c7?A.b8.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.ax9[m]+1,d2,10,14,2)
p=C.aq(A.bL,A.d5,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.er(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eJo,A.bO,A.bl))
for(m=0;m<2;++m){l=D.ax9[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fk:A.az).H()
t.drawRRect(C.er(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cs.j(0.5))
s.z=G.mC
r=s.H()
t.drawRRect(C.er(d2),r)
r.delete()}}d3.bC(D.e3f,D.e3w,c9.$2(A.az,3))
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
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eJd,A.cy,A.KO))
d3.ae(D.e5w,8,c8.$1(A.qM))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.j1(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.f5,2.4).H()
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
r.delete()}d3.ae(D.e44,3.2,c8.$1(A.fT.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.j1(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eJq,A.j9,A.tc))
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
d3.ae(D.e3a,8,d2)}return!0
case"headphones":d3.f6(C.cl(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bv,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.axb[m]
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
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eJ6,A.dA,A.ee))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dL))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aT(A.o.u(C.dl(a4)),2,"0")+":"+A.a.aT(A.o.u(C.fZ(a4)),2,"0"),D.e2N,A.b2,9.5)
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
E.KZ(d3,D.ePc,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.v9))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dN,A.di))
d3.aD(a6,c9.$2(A.b3,1.2))
d3.ae(D.aGz,9,c8.$1(A.az))
d3.ae(D.aGz,6,c9.$2(A.d5,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.az))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dL))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.b2:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e48,s,8.2)
d3.ae(D.e31,2.4,c8.$1(c7?A.bk:A.aK))
d6.$5(d3,"IN",D.e5q,A.ad,6)
d6.$5(d3,"OUT",D.e3X,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bJ,A.ay,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.ae(D.e2D,3,c8.$1(A.aK))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eJ2,A.ee,A.hF))
d6.$5(d3,"7805",D.a53,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.da0[m]-1
r=c8.$1(A.e1).H()
d2.drawRect(C.c_(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e5S,A.bi,9)
return!0
case"diode":d3.bC(D.aGD,D.aGn,c9.$2(A.e1,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aF.j(0.85)))
d3.aY(D.eIS,c8.$1(A.bi))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dP.j(0.4))
t.z=A.jo
d3.aD(d2,t)}d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,-4))
d2.F(new C.ap(-8,4))
d2.F(new C.ap(-1,0))
d2.F(new C.bF())
d3.aP(d2,c8.$1(A.aX))
d6.$5(d3,"one way",D.e5e,A.aA,8)
return!0
case"ldr":d3.bC(D.aGD,D.a53,c9.$2(A.e1,2.4))
d3.bC(D.aGs,D.aGn,c9.$2(A.e1,2.4))
d3.ae(A.J,12,c8.$1(A.d5))
d3.ae(A.J,12,c9.$2(A.tl,1.6))
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
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e56,A.ad,8.5)
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
E.h_O(d3,new C.ar(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ae(D.e3x,1.6,c8.$1(A.b2))}else{d3.aD(a5,c8.$1(D.v9))
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
r.delete()}d6.$5(d3,"SONY",D.e4K,A.bO,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,18))
d2.F(new C.ap(8,18))
d2.F(new C.ap(12,25))
d2.F(new C.ap(-12,25))
d2.F(new C.bF())
d3.aP(d2,c8.$1(D.WG))
d6.$5(d3,"Apple TV",D.e49,A.bv,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bfn))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dq,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e5O,F.t9,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lY.h(0,d2)
b1=b0.b===D.wd
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
E.KZ(d3,new C.ar(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.v9))
if(b1){t=a5.b
s=a5.d
d3.bC(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ae(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.ee))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.e5V,A.az,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bl).H()
d2.drawRect(C.c_(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ae(A.aG8,1.6,c8.$1(A.az))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eJz,A.cr,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b8),$.pr(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.KZ(d3,new C.ar(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.v9))
d2=new C.aO($.W().r,A.ap,c6,c6,C.a([],x.v))
d2.F(new C.b5(-38,16))
d2.F(new C.ap(38,16))
d2.F(new C.ap(34,21))
d2.F(new C.ap(-34,21))
d2.F(new C.bF())
d3.aP(d2,c8.$1(D.WG))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eJD,A.bK,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b9),$.pr(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.KZ(d3,new C.ar(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.v9))
d3.ae(D.aG3,2,c8.$1(A.bJ))
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
E.KZ(d3,new C.ar(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.v9))
d3.aY(D.eJJ,c8.$1(A.bl))
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
E.KZ(d3,new C.ar(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eJr,A.iN,A.dA))
d3.ae(D.aGd,7,c8.$1(A.az))
d3.ae(D.aGd,4,c8.$1(c7?A.dP:A.cC))
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
d6.$5(d3,""+(88+A.o.E(A.k.bv(d5*2),5)),D.e45,A.c,10)
d6.$5(d3,"km/h",D.e42,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dA,A.ee))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c5),$.pr(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.KZ(d3,new C.ar(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bt.j(0.2))
d2.z=A.lt
d3.ae(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bC(D.e5A,D.e5F,c9.$2(A.bl,4))
d3.bC(D.e3y,D.e3G,c9.$2(A.bl,4))
return!0}return!1},
fFR:function fFR(){},
fFT:function fFT(){},
fFU:function fFU(){},
fFS:function fFS(){},
h2s(d,e,f,g){return new B.aid(d,g,f,e)},
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
feX:function feX(){},
feY:function feY(){},
feZ:function feZ(){},
feK:function feK(){},
ff_:function ff_(){},
feJ:function feJ(){},
ff0:function ff0(){},
feO:function feO(){},
feI:function feI(){},
feP:function feP(){},
feH:function feH(){},
feQ:function feQ(){},
feG:function feG(){},
feR:function feR(){},
feE:function feE(){},
feF:function feF(){},
feS:function feS(){},
feC:function feC(){},
feD:function feD(){},
feT:function feT(){},
feB:function feB(){},
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
dRs:function dRs(d,e){this.a=d
this.b=e},
dRB:function dRB(d){this.a=d},
dRC:function dRC(){},
dRD:function dRD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRE:function dRE(){},
dRr:function dRr(d){this.a=d},
dRq:function dRq(d,e,f){this.a=d
this.b=e
this.c=f},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRn:function dRn(d){this.a=d},
dRo:function dRo(){},
dRA:function dRA(d){this.a=d},
dRz:function dRz(d){this.a=d},
dRx:function dRx(d,e){this.a=d
this.b=e},
dRv:function dRv(d){this.a=d},
dRw:function dRw(){},
dRy:function dRy(d,e,f){this.a=d
this.b=e
this.c=f},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRu:function dRu(){},
dRG:function dRG(d){this.a=d},
dRH:function dRH(d,e){this.a=d
this.b=e},
dRF:function dRF(){},
dRI:function dRI(d,e){this.a=d
this.b=e},
dRJ:function dRJ(d){this.a=d},
dRK:function dRK(d){this.a=d},
awH:function awH(d,e){this.c=d
this.a=e},
b8g:function b8g(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
cAU:function cAU(d){this.a=d},
b8f:function b8f(d,e){this.b=d
this.a=e},
cAT:function cAT(d){this.a=d},
ax_:function ax_(){},
ax0:function ax0(){},
aJ_:function aJ_(){},
bwj:function bwj(){},
i6N(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.w6,23)
$.W()
b8=C.N()
b8.r=A.az.gp(0)
b9.ae(A.w6,25,b8)
b8=C.N()
b8.saq(D.edU.av(0,v))
b9.ae(A.w6,23,b8)
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
b9.bC(A.w6,new C.u(b8*18,s*18-2),r)
r=C.N()
r.r=A.bi.gp(0)
b9.ae(A.w6,3,r)
c2.$5(b9,w?"V":"A",D.e5I,A.bi,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e5b,A.az,9.5)
return!0
case"fan":b8=C.bx(D.eIZ,A.hC)
$.W()
s=C.N()
s.r=A.bv.gp(0)
b9.aD(b8,s)
s=C.N()
s.r=A.ak.gp(0)
b9.aY(D.eJK,s)
s=C.N()
s.r=A.M.j(0.6).gp(0)
b9.ae(D.w7,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cl(A.aG7,18,10)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.fT.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c_(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bo.gp(0)
b9.ae(D.w7,4,b8)
b8=C.N()
b8.b=A.ae
b8.c=2
b8.r=A.cr.gp(0)
b9.ae(D.w7,22,b8)
b8=C.N()
b8.b=A.ae
b8.c=0.8
b8.r=A.jd.gp(0)
b9.ae(D.w7,14,b8)
return!0
case"speaker":l=C.bx(D.aM_,A.uu)
$.W()
b8=C.N()
b8.saq(D.ao4.av(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.saq(D.eeg.av(0,C.bU(A.cB,15)))
b9.ae(A.cB,14+k,b8)
b8=C.N()
b8.r=A.dA.gp(0)
b9.ae(A.cB,5,b8)
b8=C.N()
b8.r=A.bl.gp(0)
b9.ae(D.aG9,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.e3e,6+u*6+A.k.E(b8,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bZ.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c_(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bx(D.eJC,A.uu)
$.W()
b8=C.N()
b8.saq(D.bVj.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bx(D.aM1,A.im)
s=C.N()
s.r=A.hF.gp(0)
b9.aD(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.BL(i)<500?":":" "
g=A.a.aT(A.o.u(C.dl(i)),2,"0")
f=A.a.aT(A.o.u(C.fZ(i)),2,"0")
b8=C.N()
b8.r=A.b2.j(0.12).gp(0)
b9.aY(D.aM1,b8)
c2.$5(b9,g+h+f,D.e5t,A.b2,21)}b8=C.N()
b8.r=A.cr.gp(0)
b9.ae(D.e5s,2.4,b8)
b8=C.N()
b8.r=A.cr.gp(0)
b9.ae(D.e3i,2.4,b8)
return!0
case"calculator":j=C.bx(D.eJi,A.hd)
$.W()
b8=C.N()
b8.saq(D.bV3.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bx(D.eJc,A.hc)
s=C.N()
s.r=(b7?A.WS:D.bhp).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e5a,A.VL,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bx(new C.a9(q,s,q+6,r),A.Sf)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cg:A.bO).gp(0)
n=p.H()
b8.drawRRect(C.er(q),n)
n.delete()}return!0
case"phone":j=C.bx(D.eJ9,A.hd)
$.W()
b8=C.N()
b8.r=L.n_.gp(0)
b9.aD(j,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.9
b8.r=D.afB.gp(0)
b9.aD(j,b8)
a0=C.bx(D.eJ0,A.hC)
if(b7){b8=C.N()
b8.saq(D.bWD.av(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.er(a0),$.pr(),!0)
b8.translate(-12,-25)
E.KZ(b9,D.eOO,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=C.bx(D.eIY,A.hc)
s=C.N()
s.r=A.aX.gp(0)
b9.aD(b8,s)
s=C.N()
s.r=A.b2.gp(0)
b9.aY(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e4s,A.c,6)}else{b8=C.N()
b8.r=D.v9.gp(0)
b9.aD(a0,b8)}b8=C.bx(D.eJU,D.eep)
s=C.N()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=C.bx(D.eJB,A.ry)
$.W()
b8=C.N()
b8.saq(D.bVB.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.axb[a2]
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
s.r=(a4?A.bk:A.aK).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bU(D.w7,8+u*6+A.k.E(s,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hw.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c_(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bx(D.eJh,A.hC)
s=$.W()
r=C.N()
r.r=A.ee.gp(0)
b9.aD(b8,r)
if(b7){b8=C.N()
b8.r=A.ay.j(0.5*a5).gp(0)
b8.z=A.yW
b9.ae(A.w6,34,b8)}a6=new C.aO(s.r,A.ap,b6,b6,C.a([],x.v))
a6.F(new C.b5(-16,12))
a6.F(new C.ap(-16,-2))
a6.F(new C.cU(0,-30,16,-2))
a6.F(new C.ap(16,12))
a6.F(new C.bF())
b8=C.N()
b8.r=C.aq(A.ep,D.b9P,a5).gp(0)
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
b9.bC(A.J,D.aG9,s)
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
q.saq(D.bTG.av(0,D.eJu))
b9.aP(j,q)
q=new C.aO(s,A.ap,b6,b6,C.a([],r))
q.F(new C.b5(-8,-4))
q.F(new C.ap(-4,-13))
q.F(new C.ap(4,-13))
q.F(new C.ap(4,-4))
q.F(new C.bF())
p=C.N()
p.r=A.f5.gp(0)
b9.aP(q,p)
r=new C.aO(s,A.ap,b6,b6,C.a([],r))
r.F(new C.b5(8,-4))
r.F(new C.ap(8,-13))
r.F(new C.ap(11,-13))
r.F(new C.ap(15,-4))
r.F(new C.bF())
s=C.N()
s.r=A.f5.gp(0)
b9.aP(r,s)
for(a2=0;a2<2;++a2){a3=D.d9O[a2]
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
r.saq(D.bUK.av(0,D.eJg))
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
if(b7){s=C.aq(A.cs,A.tj,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ee
b8.r=s.gp(0)
b9.aY(D.eJf,b8)
if(b7){b8=C.N()
b8.r=A.cs.j(0.3).gp(0)
b8.z=A.lt
b9.ae(A.aG5,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.az.gp(0)
b9.ae(D.e2A,3,b8)
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
b9.ae(D.e5x,24,s)}b8=C.bx(D.eJQ,A.hC)
s=$.W()
r=C.N()
r.r=A.ee.gp(0)
b9.aD(b8,r)
r=C.N()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bP
b9.bC(D.e2O,D.aGf,r)
r=C.N()
r.r=A.dA.gp(0)
r.c=3
r.d=A.bP
b9.bC(D.aGf,D.e5y,r)
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
b8.r=(b7?A.c:A.bl).gp(0)
b9.ae(D.e5z,4,b8)
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
n.delete()}return!0}return B.i6M(b9,c0,c1,c2)},
fK:function fK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYU(d){var w=D.lY.h(0,d)
return(w==null?null:w.b)===D.zl},
i7V(d,e,f){return C.a5(d,!1).c5(C.uC(null,!1,!0,!0,new B.fKv(e,f),A.eJ,null,A.pK,new B.fKw(),x.H))},
J6:function J6(d,e){this.a=d
this.b=e},
m4:function m4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKv:function fKv(d,e){this.a=d
this.b=e},
fKw:function fKw(){},
Ul:function Ul(d,e,f){this.c=d
this.d=e
this.a=f},
biI:function biI(d,e){var _=this
_.d=$
_.e=null
_.bs$=d
_.a8$=e
_.c=_.a=null},
dNo:function dNo(d){this.a=d},
dNn:function dNn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNl:function dNl(){},
dNm:function dNm(d){this.a=d},
dNk:function dNk(d){this.a=d},
dNj:function dNj(d,e){this.a=d
this.b=e},
dNi:function dNi(d,e){this.a=d
this.b=e},
dNh:function dNh(d){this.a=d},
dNg:function dNg(d){this.a=d},
dNc:function dNc(d){this.a=d},
dNb:function dNb(d){this.a=d},
dNf:function dNf(d,e,f){this.a=d
this.b=e
this.c=f},
dNe:function dNe(d){this.a=d},
dNd:function dNd(d){this.a=d},
buo:function buo(d,e,f){this.b=d
this.c=e
this.a=f},
aec:function aec(d,e,f){this.b=d
this.c=e
this.a=f},
aKM:function aKM(){},
fjo(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zB,A.L,w,w),A.aB,C.bV(A.fQ,g,A.bq,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.VT,w,u,v,w,w,A.n),w,w,w,A.ex,A.a9,w,w,w),w,w,w)},
fZ_(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eM()
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
a9.J(0,a7)}b0=C.aX(u)
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
b0.J(0,a7)}}v=b5>=10?1:0
return new B.aVQ(b0,a9,C.T(u,t),q,N.mF,w+v)}return new B.aVQ(C.aX(u),C.et([25],u),C.T(u,t),21,N.mF,1)},
hnm(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.E(n,7),l=A.o.an(n,7),k=d.f
p.push(n)
for(n=d.c,w=d.b,v=d.d,u=0;u<200;++u){t=k.a
m+=t
s=k.b
l+=s
if(m<0||l<0||m>=7||l>=7)break
r=l*7+m
if(w.t(0,r))break
p.push(r)
if(n.t(0,r))o.J(0,r)
q=e.h(0,r)
if(q==null)q=v.h(0,r)
if(q==="/")k=new C.z(-s,-t)
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bnE(p,o)},
hiI(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
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
e8E:function e8E(d){this.a=d},
e8D:function e8D(d,e){this.a=d
this.b=e},
e8F:function e8F(){},
e8u:function e8u(d,e){this.a=d
this.b=e},
e8v:function e8v(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e8y:function e8y(d,e){this.a=d
this.b=e},
e8w:function e8w(d){this.a=d},
e8x:function e8x(d){this.a=d},
e8z:function e8z(d){this.a=d},
e8A:function e8A(d){this.a=d},
e8B:function e8B(d){this.a=d},
e8C:function e8C(d,e){this.a=d
this.b=e},
bgh:function bgh(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dgC:function dgC(d,e,f){this.a=d
this.b=e
this.c=f},
dgF:function dgF(d,e,f){this.a=d
this.b=e
this.c=f},
dgD:function dgD(d){this.a=d},
dgE:function dgE(d){this.a=d},
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
e8X:function e8X(d){this.a=d},
e8W:function e8W(d,e){this.a=d
this.b=e},
e8Y:function e8Y(){},
e8I:function e8I(){},
e8R:function e8R(d,e){this.a=d
this.b=e},
e8O:function e8O(d){this.a=d},
e8K:function e8K(d){this.a=d},
e8P:function e8P(d){this.a=d},
e8Q:function e8Q(d){this.a=d},
e8J:function e8J(d){this.a=d},
e8S:function e8S(d){this.a=d},
e8N:function e8N(d,e){this.a=d
this.b=e},
e8T:function e8T(d){this.a=d},
e8M:function e8M(d,e){this.a=d
this.b=e},
e8U:function e8U(d){this.a=d},
e8L:function e8L(d,e){this.a=d
this.b=e},
e8V:function e8V(d){this.a=d},
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
ffE:function ffE(){},
ffF:function ffF(){},
ffG:function ffG(){},
ffH:function ffH(){},
ffI:function ffI(){},
ffJ:function ffJ(){},
ffK:function ffK(){},
ffL:function ffL(){},
a7S:function a7S(d){this.a=d},
ceM:function ceM(d){this.a=d},
ceN:function ceN(){},
ceL:function ceL(d,e){this.a=d
this.b=e},
ceK:function ceK(d){this.a=d},
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
eIa:function eIa(d){this.a=d},
eI6:function eI6(d){this.a=d},
eI5:function eI5(d,e){this.a=d
this.b=e},
eI8:function eI8(d,e){this.a=d
this.b=e},
eI7:function eI7(d,e){this.a=d
this.b=e},
eI9:function eI9(d){this.a=d},
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
dTG:function dTG(){},
dTH:function dTH(){},
dTB:function dTB(d,e){this.a=d
this.b=e},
dTD:function dTD(d,e){this.a=d
this.b=e},
dTE:function dTE(d){this.a=d},
dTC:function dTC(d){this.a=d},
dTF:function dTF(d){this.a=d},
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
dEy:function dEy(){},
dEz:function dEz(){},
dEt:function dEt(){},
dEw:function dEw(d,e){this.a=d
this.b=e},
dEv:function dEv(d,e){this.a=d
this.b=e},
dEx:function dEx(d){this.a=d},
dEu:function dEu(d){this.a=d},
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
dQX:function dQX(d,e){this.a=d
this.b=e},
dQY:function dQY(d){this.a=d},
dQW:function dQW(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d){this.a=d},
dQV:function dQV(d,e){this.a=d
this.b=e},
dR_:function dR_(d){this.a=d},
dQU:function dQU(d,e){this.a=d
this.b=e},
dR0:function dR0(d,e){this.a=d
this.b=e},
dQT:function dQT(d,e){this.a=d
this.b=e},
dR1:function dR1(d){this.a=d},
dQS:function dQS(d,e){this.a=d
this.b=e},
dR2:function dR2(d){this.a=d},
dQR:function dQR(d){this.a=d},
dR3:function dR3(d){this.a=d},
dQQ:function dQQ(d){this.a=d},
dR4:function dR4(d){this.a=d},
dR5:function dR5(d){this.a=d},
dQP:function dQP(d){this.a=d},
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
eej:function eej(d,e){this.a=d
this.b=e},
eek:function eek(d,e,f){this.a=d
this.b=e
this.c=f},
eei:function eei(d,e,f){this.a=d
this.b=e
this.c=f},
eel:function eel(d){this.a=d},
eeh:function eeh(d){this.a=d},
eep:function eep(d){this.a=d},
eeo:function eeo(d,e){this.a=d
this.b=e},
een:function een(d,e){this.a=d
this.b=e},
eeq:function eeq(d,e){this.a=d
this.b=e},
eem:function eem(d,e){this.a=d
this.b=e},
eer:function eer(d){this.a=d},
VA:function VA(d){this.a=d},
aDK:function aDK(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
epa:function epa(d){this.a=d},
epb:function epb(d){this.a=d},
ep8:function ep8(d,e){this.a=d
this.b=e},
ep9:function ep9(d){this.a=d},
ep7:function ep7(d){this.a=d},
epc:function epc(d){this.a=d},
epd:function epd(d){this.a=d},
epe:function epe(d){this.a=d},
epf:function epf(d,e){this.a=d
this.b=e},
VV:function VV(d){this.a=d},
bjZ:function bjZ(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eDs:function eDs(){},
eDB:function eDB(){},
eDx:function eDx(d){this.a=d},
eDw:function eDw(){},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDv:function eDv(d,e){this.a=d
this.b=e},
eDz:function eDz(d){this.a=d},
eDu:function eDu(d,e){this.a=d
this.b=e},
eDA:function eDA(d){this.a=d},
eDt:function eDt(d){this.a=d},
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
ecZ:function ecZ(){},
ed_:function ed_(){},
ecS:function ecS(d){this.a=d},
ecR:function ecR(d){this.a=d},
ecT:function ecT(d){this.a=d},
ecQ:function ecQ(d){this.a=d},
ecU:function ecU(d){this.a=d},
ecP:function ecP(d){this.a=d},
ecV:function ecV(d,e){this.a=d
this.b=e},
ecO:function ecO(d,e){this.a=d
this.b=e},
ecW:function ecW(d){this.a=d},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecX:function ecX(d){this.a=d},
ecM:function ecM(d,e){this.a=d
this.b=e},
ecY:function ecY(d){this.a=d},
ecL:function ecL(d,e){this.a=d
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
hnc(d,e,f,g){var w=null
return C.ca(w,w,!0,w,new B.fOk(g,e,f),d,w,!0,!0,x.H)},
hB(d,e,f,g,h,i,j){return new B.av7(f,j,i,h,g,d,e,null)},
qO(d,e,f){return B.i8K(d,e,f)},
i8K(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
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
return C.b(B.cpH(C.a([B.hc9(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qO)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.T(D.aO2)
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
return E.dF(261.63*v,w,f,0,g,"sine")}return B.vT(v,e,f,g)},
vT(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
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
else C.bN(new C.b9(1000*q),new B.ceI(d,s,f,g),u)}},
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
zm(d){return B.hEa(d)},
hEa(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
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
vQ(d,e){return B.hEb(d,e)},
hEb(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vQ=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$vQ)
case 6:s=g
w=7
return C.b(s.ar("String","ngmy_play_progress_v1_"+d,A.R.ao(e,null)),$async$vQ)
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
return C.i($async$vQ,v)},
b63:function b63(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
crG:function crG(d){this.a=d},
crH:function crH(d,e){this.a=d
this.b=e},
fOk:function fOk(d,e,f){this.a=d
this.b=e
this.c=f},
fOj:function fOj(d){this.a=d},
dA:function dA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
crC:function crC(d){this.a=d},
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
crB:function crB(d){this.a=d},
F2:function F2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
crI:function crI(d){this.a=d},
mB:function mB(){},
crD:function crD(d,e,f){this.a=d
this.b=e
this.c=f},
crF:function crF(d){this.a=d},
crE:function crE(){},
ceI:function ceI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuh(){var w=0,v=C.j(x.cL),u,t
var $async$cuh=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qP().beP("assets/data/world110.json"),$async$cuh)
case 3:u=t.hIK(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cuh,v)},
hIK(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aH(0,a2,null)),a1=C.a([],x.F)
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
e.bx4(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aaF(a1)},
fs1(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
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
OT:function OT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xV:function xV(d,e,f){this.a=d
this.b=e
this.c=f},
OS:function OS(d){this.a=0
this.b=d
this.c=0},
hKD(d,e,f){return $.hKE.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.dcm(d,e,f))},
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
dWo:function dWo(d){this.a=d},
dWn:function dWn(d,e){this.a=d
this.b=e},
dVR:function dVR(d){this.a=d},
dVP:function dVP(d){this.a=d},
dVQ:function dVQ(d,e,f){this.a=d
this.b=e
this.c=f},
dVO:function dVO(d){this.a=d},
dVN:function dVN(){},
dVM:function dVM(d){this.a=d},
dW9:function dW9(d,e){this.a=d
this.b=e},
dWa:function dWa(d,e){this.a=d
this.b=e},
dVZ:function dVZ(d){this.a=d},
dW_:function dW_(d){this.a=d},
dVY:function dVY(d){this.a=d},
dW0:function dW0(d){this.a=d},
dVS:function dVS(d,e){this.a=d
this.b=e},
dVT:function dVT(d){this.a=d},
dWb:function dWb(d,e){this.a=d
this.b=e},
dVX:function dVX(d,e){this.a=d
this.b=e},
dWf:function dWf(d){this.a=d},
dW8:function dW8(d){this.a=d},
dWg:function dWg(d,e){this.a=d
this.b=e},
dW7:function dW7(d,e){this.a=d
this.b=e},
dWh:function dWh(d){this.a=d},
dW6:function dW6(d,e){this.a=d
this.b=e},
dWi:function dWi(d){this.a=d},
dW5:function dW5(d,e){this.a=d
this.b=e},
dWj:function dWj(d){this.a=d},
dW4:function dW4(d,e){this.a=d
this.b=e},
dWk:function dWk(d){this.a=d},
dW3:function dW3(d,e){this.a=d
this.b=e},
dWl:function dWl(d){this.a=d},
dW2:function dW2(d){this.a=d},
dWm:function dWm(d){this.a=d},
dW1:function dW1(d){this.a=d},
dWc:function dWc(d){this.a=d},
dVW:function dVW(d){this.a=d},
dWd:function dWd(d){this.a=d},
dVV:function dVV(d){this.a=d},
dWe:function dWe(d){this.a=d},
dVU:function dVU(d){this.a=d},
dVL:function dVL(){},
dVK:function dVK(d){this.a=d},
dVJ:function dVJ(d){this.a=d},
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
dcm:function dcm(d,e,f){this.a=d
this.b=e
this.c=f},
dcn:function dcn(d,e,f,g,h){var _=this
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
ffx:function ffx(){},
ffy:function ffy(){},
ffz:function ffz(){},
ffA:function ffA(){},
ffB:function ffB(){},
ffC:function ffC(){},
ffD:function ffD(){},
VY:function VY(d){this.a=d},
bk2:function bk2(){this.d=$
this.c=this.a=null},
eEl:function eEl(d){this.a=d},
eEm:function eEm(d){this.a=d},
eEk:function eEk(d){this.a=d},
eEn:function eEn(){},
eEj:function eEj(d,e){this.a=d
this.b=e},
eEi:function eEi(d){this.a=d},
hL4(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eM()
v.dB(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eM()
v.dB(w+900)
u.push(2.2+v.aj())}return new B.bjP(new C.cs(null,x.A),new B.OS(A.cI),A.J,A.au,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hL6(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hL5(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hdl(d,e,f){return $.hLH.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.eYI(d,e,f))},
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
ewo:function ewo(d,e){this.a=d
this.b=e},
ewz:function ewz(d,e){this.a=d
this.b=e},
ewA:function ewA(d,e){this.a=d
this.b=e},
eww:function eww(d){this.a=d},
ewx:function ewx(d){this.a=d},
ewy:function ewy(d){this.a=d},
ewB:function ewB(d){this.a=d},
ewv:function ewv(d){this.a=d},
ewC:function ewC(d,e){this.a=d
this.b=e},
ewD:function ewD(d){this.a=d},
ewu:function ewu(d,e){this.a=d
this.b=e},
ewE:function ewE(d){this.a=d},
ewt:function ewt(d,e){this.a=d
this.b=e},
ewF:function ewF(d){this.a=d},
ews:function ews(d){this.a=d},
ewG:function ewG(d){this.a=d},
ewr:function ewr(d){this.a=d},
ewH:function ewH(d){this.a=d},
ewq:function ewq(d){this.a=d},
ewI:function ewI(d){this.a=d},
ewp:function ewp(d){this.a=d},
ewn:function ewn(){},
ewm:function ewm(){},
ewl:function ewl(d){this.a=d},
ewk:function ewk(d){this.a=d},
brb:function brb(d,e){this.b=d
this.a=e},
eYI:function eYI(d,e,f){this.a=d
this.b=e
this.c=f},
eYJ:function eYJ(){},
eYK:function eYK(){},
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
dWs:function dWs(){},
dWV:function dWV(){},
dWH:function dWH(d,e){this.a=d
this.b=e},
dWy:function dWy(d,e){this.a=d
this.b=e},
dWI:function dWI(d){this.a=d},
dWx:function dWx(d){this.a=d},
dWJ:function dWJ(d){this.a=d},
dWG:function dWG(d){this.a=d},
dWN:function dWN(d){this.a=d},
dWF:function dWF(d){this.a=d},
dWO:function dWO(d){this.a=d},
dWE:function dWE(d,e){this.a=d
this.b=e},
dWP:function dWP(d){this.a=d},
dWQ:function dWQ(d){this.a=d},
dWD:function dWD(d,e){this.a=d
this.b=e},
dWR:function dWR(d){this.a=d},
dWC:function dWC(d,e){this.a=d
this.b=e},
dWS:function dWS(d){this.a=d},
dWB:function dWB(d,e){this.a=d
this.b=e},
dWT:function dWT(d){this.a=d},
dWA:function dWA(d,e){this.a=d
this.b=e},
dWU:function dWU(d){this.a=d},
dWz:function dWz(d){this.a=d},
dWK:function dWK(d){this.a=d},
dWw:function dWw(d){this.a=d},
dWL:function dWL(d){this.a=d},
dWv:function dWv(d){this.a=d},
dWM:function dWM(d){this.a=d},
dWu:function dWu(d){this.a=d},
dWr:function dWr(d){this.a=d},
dWq:function dWq(){},
dWt:function dWt(d,e){this.a=d
this.b=e},
dWp:function dWp(d){this.a=d},
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
epi:function epi(d,e){this.a=d
this.b=e},
epj:function epj(d,e){this.a=d
this.b=e},
eph:function eph(d,e){this.a=d
this.b=e},
epk:function epk(d,e){this.a=d
this.b=e},
epg:function epg(d,e){this.a=d
this.b=e},
bqK:function bqK(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eWS:function eWS(d){this.a=d},
aL_:function aL_(){},
bwm:function bwm(){},
aLy:function aLy(){},
bwA:function bwA(){},
aLB:function aLB(){},
bwC:function bwC(){},
hL2(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eM()
v.dB(w)
v=v.aj()
u=new C.eM()
u.dB(w+500)
s.push(new C.u(v,u.aj()))}return new B.bis(new C.cs(null,x.A),new B.OS(A.cI),t,A.au,s,$,A.bx,0,C.a([],x.X),null,null)},
Pn:function Pn(d,e,f,g){var _=this
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
dE_:function dE_(){},
dDO:function dDO(){},
dDP:function dDP(d,e){this.a=d
this.b=e},
dDQ:function dDQ(d,e){this.a=d
this.b=e},
dDN:function dDN(d){this.a=d},
dDM:function dDM(d){this.a=d},
dDS:function dDS(d){this.a=d},
dDL:function dDL(d,e){this.a=d
this.b=e},
dDT:function dDT(d){this.a=d},
dDK:function dDK(d){this.a=d},
dDU:function dDU(d){this.a=d},
dDJ:function dDJ(d){this.a=d},
dDV:function dDV(d){this.a=d},
dDI:function dDI(d){this.a=d},
dDW:function dDW(d){this.a=d},
dDH:function dDH(d){this.a=d},
dDX:function dDX(d){this.a=d},
dDG:function dDG(d){this.a=d},
dDY:function dDY(d){this.a=d},
dDF:function dDF(d){this.a=d},
dDZ:function dDZ(d){this.a=d},
dDE:function dDE(d){this.a=d},
dDR:function dDR(d){this.a=d},
dDD:function dDD(d){this.a=d},
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
dV_:function dV_(d){this.a=d},
dUQ:function dUQ(d,e){this.a=d
this.b=e},
dUR:function dUR(d,e){this.a=d
this.b=e},
dUP:function dUP(d,e){this.a=d
this.b=e},
dUS:function dUS(d){this.a=d},
dUO:function dUO(d){this.a=d},
dUT:function dUT(d){this.a=d},
dUN:function dUN(d,e){this.a=d
this.b=e},
dUU:function dUU(d){this.a=d},
dUM:function dUM(d,e){this.a=d
this.b=e},
dUV:function dUV(d){this.a=d},
dUL:function dUL(d,e){this.a=d
this.b=e},
dUW:function dUW(d){this.a=d},
dUK:function dUK(d,e){this.a=d
this.b=e},
dUX:function dUX(d){this.a=d},
dUJ:function dUJ(d){this.a=d},
dUY:function dUY(d){this.a=d},
dUI:function dUI(d){this.a=d},
dUZ:function dUZ(d){this.a=d},
dUH:function dUH(d){this.a=d},
bey:function bey(d,e){this.b=d
this.a=e},
d9u:function d9u(d){this.a=d},
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
eox:function eox(d,e){this.a=d
this.b=e},
eoy:function eoy(d){this.a=d},
eow:function eow(d){this.a=d},
eoz:function eoz(d){this.a=d},
eov:function eov(d){this.a=d},
eoA:function eoA(d){this.a=d},
eou:function eou(d){this.a=d},
eoB:function eoB(d){this.a=d},
eot:function eot(d){this.a=d},
eoC:function eoC(d){this.a=d},
eos:function eos(d,e){this.a=d
this.b=e},
eoD:function eoD(d){this.a=d},
eor:function eor(d,e){this.a=d
this.b=e},
eoE:function eoE(d){this.a=d},
eoq:function eoq(d,e){this.a=d
this.b=e},
eoF:function eoF(d){this.a=d},
eop:function eop(d,e){this.a=d
this.b=e},
bq_:function bq_(d,e){this.b=d
this.a=e},
aKw:function aKw(){},
bwe:function bwe(){},
aKV:function aKV(){},
bwl:function bwl(){},
aLx:function aLx(){},
bwz:function bwz(){},
hc9(d,e,f){var w,v
C.fQ(0,0,!1)
w=new C.lj(e,f,$,null)
v=w.bHc(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hYH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.L)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.nV(A.k.aa(p.c,4)),"y",C.nV(A.k.aa(p.d,4)),"v",p.e,"l",C.nV(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nV(A.k.aa(p.as,3)),"ch",p.at,"vc",C.nV(A.k.aa(p.z,3)),"s",C.nV(A.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.C(f,C.a3(f).k("co.E"))
A.d.fm(l)
return A.R.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i77(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
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
ftO(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$ftO=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.aA(),$async$ftO)
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
return C.i($async$ftO,v)},
bD1(d){return B.i8G(d)},
i8G(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
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
cpH(d,e){var w=0,v=C.j(x.g7),u
var $async$cpH=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h0F().x6(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cpH,v)}},D,S,H,T,A_,A9,Aa,An,X
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
if(s!=null)s.jD()
p.bO(0,A.c5)
t.m(new B.e5E(t))
t.a.toString
p=t.gVK()
w=3
return C.b(B.byA(B.hMV(q,B.hYy(p),o,t.ay)),$async$N9)
case 3:s=e
r=s==null?null:J.iV(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.hZY(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e5F(t,o,r))
$.aW.x1$.push(new B.e5G(t))
case 1:return C.h(u,v)}})
return C.i($async$N9,v)},
XJ(d){return this.bY7(d)},
aUK(){return this.XJ(null)},
bY7(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$XJ=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jD()
t.f.saV(0,o)
t.m(new B.e5R(t))
E.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.byA(B.hTI(o)),$async$XJ)
case 3:r=n.a=m.i6Q(f)
p.b=""
if(r!=null&&!B.hYz(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.hZZ(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajq(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e5S(p,t))
t.c2s(p.a)
case 1:return C.h(u,v)}})
return C.i($async$XJ,v)},
c2s(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
A.d.a9(w)
w=++m.as
v=m.gVK()
A.d.a9(v.a)
A.d.a9(v.b)
m.e.a9(0)
m.m(new B.e5N(m))
t=d.d
s=C.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e5L(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e5O(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.L)(r),++u){p.$2(o,new B.e5P(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e5Q(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bt.j(0.1),g=C.m(16),f=C.I(A.bt.j(0.35),A.q,1)
if(m.x)j=C.B(C.a([D.eQg,A.bd,C.E(C.d(m.Q,l,l,l,l,l,l,A.Ta,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.feI
else{w=C.E(C.d(k.a,l,l,l,l,l,l,Ad.TB,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f_U,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.D(A.vi,C.d(u,l,l,l,l,l,l,D.f2w,l,l,l),l))
w.push(A.cV)
w.push(C.d(k.b,l,l,l,l,l,l,F.Dj,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.f4V,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.hZ,A.cp,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.D(A.LP,new C.cm(A.aO,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.m5,l,l,l,l,l,l,l,l,l),A.bp,new C.bD(1,A.bh,new C.x(q,l,new C.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.L)(j),++p){o=j[p]
t=new C.aT(12,12)
s=new C.aT(12,12)
A.d.v(w,C.a([A.N,new C.bI(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a7g,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bt.j(0.3),l,l,new C.bq(t,t,t,t),l,l,A.n),l,l,l,l,A.fI,l,l,l),l),A.at,C.p(l,new C.x(o.b,l,D.fa9,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bq(s,s,s,s),l,l,A.n),l,l,l,l,A.bU,l,l,l)],v))}if(m.ax)w.push(D.e6R)
j=C.cd(C.v(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=C.v(C.a([C.ahI(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bqo,A.ej,l,l,1/0),A.bc,A.id),C.E(B.h2s(m.gVK(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dA("Ask about it",i,new B.e5V(m),l,A.bt,l),new B.dA("Invent something new",!i,new B.e5W(m),l,A.bt,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dc5[p]
i.push(new B.dA(n,!1,new B.e5X(m,n),l,A.bt,l))}f.push(new B.eQ(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cWZ[p]
i.push(new B.dA(r,!1,new B.e5Y(m,r),l,A.bt,l))}f.push(new B.eQ(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.T,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.bs(l,new C.b4(4,C.m(16),A.Y),l,A.eQ,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kG,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e5Z(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dn,!0,A.a4,l,A.an,l,A.aOL,l,l),1)
h=m.at
v=h&&j?D.bEA:A.dW
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.ab,new B.fi(v,j,new B.e6_(m,k),A.bt,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jK(A.bt,A.ha,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.FR.prototype={}
B.uK.prototype={}
B.Vw.prototype={
R(){return new B.aDE(A.J,A.J,A.au,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDE.prototype={
gaVV(){var w,v,u,t=this,s=D.GQ[t.cx],r=D.Qp[t.cy],q=D.C4[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ea(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.avz[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new B.elK())},
ga1X(){return D.GQ[this.cx].d/this.gaVV()},
gaNk(){return 0.1*(D.GQ[this.cx].d/0.9)/D.Qp[this.cy].d},
a_(){this.a1()
this.lc()
B.zm("rocket_lander").bz(new B.em3(this),x.P)},
c2B(){var w=this
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
if(m.as!=="flying"){m.m(new B.em4())
return}w=D.rg[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga1X()
v=v.ad(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaNk())}if(m.dy){t=m.r
v=v.aB(0,t.aG(0,t.gcl()*6*D.axq[m.d]))}t=m.r=m.r.ad(0,v.aG(0,d))
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
B.vQ("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.By("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga1X()/(D.rg[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga1X()/(D.rg[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dF(80,"",500,0,0.6,"noise")
C.fH()}}if(m.Q&&m.x>0&&A.o.E(A.k.bv(m.CW*20),2)===0)E.dF(90,"",70,0,0.12,"noise")
m.m(new B.em5())},
af5(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.f21,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dA(e[w].a,f.$1(w),new B.elM(this,g,w),v,h,v))
return new C.D(A.eK,C.v(C.a([u,A.cV,C.bV(A.bz,s,A.bq,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bCr(d){var w,v,u,t,s=this,r=null,q=s.ga1X()/(D.rg[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaNk()),o=D.axq[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.Tw,r,r,r),A.S,s.af5("ENGINE: "+D.GQ[s.cx].b,D.GQ,new B.elB(s),new B.elC(s),A.cs),s.af5("FUEL TANK: "+D.Qp[s.cy].b,D.Qp,new B.elD(s),new B.elE(s),A.b2),s.af5("LANDING GEAR: "+D.C4[s.db].b,D.C4,new B.elF(s),new B.elG(s),A.aR),s.af5("EXTRAS (tap to add)",D.avz,new B.elH(s),new B.elI(s),A.bt)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fwG)
o=(q?A.b2:A.cf).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaVV(),2)
u=A.k.aa(s.ga1X()/(D.rg[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.C4[s.db].d*100)+".",r,r,r,r,r,r,D.f2E,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.hZ,A.bU,r,r,r))
m.push(A.S)
m.push(new C.bI(A.A,r,r,new B.fi(A.nj,"Launch",new B.elJ(s),A.b2,r),r))
return C.av(C.p(r,C.cd(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.r,r,A.y,r,A.bR,r,r,A.ah),A.f,r,A.lC,new C.o(D.bh_,r,l,n,r,r,A.n),r,r,r,A.bU,r,r,r,r),r,r,r)},
aX2(d,e,f,g){var w=null,v=f?A.cs:A.c.j(0.1),u=C.m(18),t=C.I(A.b3,A.q,1)
return C.oa(A.jB,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.ely(e),new B.elz(e),w,w,w,w,new B.elA(e))},
aX1(d,e,f){return this.aX2(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cp(new B.elX(s,D.rg[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rg[w].a:"\ud83d\udd12"
o.push(new B.dA(v,s.d===w,new B.elY(s,w),r,D.rg[w].c,r))}v=C.a([s.aX1(F.aln,new B.elZ(s),s.y),A.bd,s.aX2(A.vG,new B.em_(s),s.Q,130),A.bd,s.aX1(A.NA,new B.em0(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aR:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bd,C.aE(r,C.p(r,D.bIO,A.f,r,r,new C.o(u,r,C.I(A.b3,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.em1(s),r,r,r,r,r,r,!1,A.a8)],p))}return B.jK(A.cs,A.ha,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eQ(o,"WORLD",r),C.B(v,A.m,r,A.bb,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.bge.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rg[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.N(),a0=j.c,a1=C.aq(D.bjH,a0,0.25)
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
a0.r=A.bk.gp(0)
a2.aD(d,a0)
a0=C.bx(o.cB(2),A.ry)
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
i.saq(D.bVc.av(0,D.eJ7))
a2.aP(m,i)
i=C.N()
i.r=A.aR.gp(0)
a2.ae(D.w7,5,i)
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
this.buA()}}
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
w.as=new B.c_P(w.gcaS())
new B.dEr(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.btB()},
caT(d){var w,v=this
if(v.c==null)return
w=J.a6(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eU(0,C.F(["t","init","data",$.hco],x.N,x.z))
v.at=!0
v.ax=""
v.axS()
break
case"pick":v.m(new B.dE3(v,d))
break
case"shot":v.agY(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
axS(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.atx[q.CW]
v=new B.dE4()
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
v.eU(0,u)}},
agY(d){return this.crD(d)},
crD(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$agY=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cG.aJ(A.a.b2(d,A.a.cJ(d,",")+1))
w=6
return C.b(B.cpH(C.a([B.hc9(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$agY)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.T(D.aO2)
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
v.a4y(170,new B.dEs())}v.ok=w
return},
agN(d){var w,v,u,t,s=this
s.m(new B.dE5(s,d))
if(d==null){s.fx=D.K_
s.dy=1
w=s.as
if(w!=null)w.eU(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a1<1>")
u=C.C(new C.a1(w,new B.dE6(d),v),v.k("J.E"))
t=A.d.gK(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.J(0,t)
if(s.ch===2)s.ch=1}s.axS()
w=s.as
if(w!=null)w.eU(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.cu4(t,d)
return},
cu4(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a7R("kick",0.8)
this.a4y(260,new B.dE7())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4y(w*70,new B.dE8(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dF(110,"",360,0.7,0.3,"saw")
else B.vT("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dF(210+e.length*4,"",80,0.6,0.55,"tri")
E.dF(2400,"",20,0,0.3,v)
break
case"muscle":E.dF(70,"",150,1,0.6,"sine")
break
case"vessel":E.dF(300,"",380,0.4,0.22,v)
B.a7R("kick",0.3)
break
default:B.vT("organic",2+A.o.E(e.length,6),200,0.4)}},
cyx(d){this.m(new B.dEa(this,d))},
aXk(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(p.axj(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=C.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aC(w)]
p.p4=""},
bTJ(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dE0(u,w,d))
v=x.t
B.By("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4y(1100,new B.dE1(u))
return}if(d==null){if(u.cx!=null)u.agN(null)
return}u.agN(d)},
bXr(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bZ.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eZt,u,u,u)}else if(d==null||e==null)w=D.fcf
else{w=x.p
w=C.B(C.a([C.E(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.i7,u,u,u),A.cV,C.d(e.b,u,u,u,u,u,u,F.Dj,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aH(u,u,u,u,D.bLc,u,u,u,new B.dE2(v),u,u,u,u,"Back to the whole body",A.cc)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.VR,u,s,t,u,u,A.n),u,u,u,u,I.ah4,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dmB.h(0,g)
i.axS()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d5f
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(i.axj(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mz,h,h,h,new B.dEh(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:C.DG(h,A.qd,q)}else q=A.kC
q=C.v(C.a([C.E(q,1),new C.D(F.Y8,i.bXr(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cYr[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dA(l,n,new B.dEi(i,o),o.c,A.bZ,h))}p=C.a([new B.eQ(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.L)(w),++s){k=w[s]
n.push(new B.dA(k,k===i.cx,new B.dEj(i,k),h,A.aM,h))}p.push(new B.eQ(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hB(A.cf,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dEk(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.F2(D.atx[j],i.CW===j,new B.dEl(i,j),!1,h))
p.push(new B.eQ(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dA("Spin",n,new B.dEm(i),D.akd,A.aR,h),new B.fi(A.k_,"Reset view",new B.dEn(i),A.c,h),new B.dA(l,m,new B.dEo(i),A.G6,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dA("Heartbeat sound",i.k4,new B.dEp(i),A.o2,A.cf,h))
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
this.btA()}}
B.c_P.prototype={
kz(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hir
$.hir=v+1
u="ngmy-body-viewer-"+v
$.yu()
$.qa().pT(u,new B.c_Q(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fI(v,"message",new B.c_R(t),!1,x.gA)
t.b=u},
eU(d,e){var w,v
try{w=this.c
if(w!=null){w=C.byx(w.contentWindow)
if(w!=null)J.fQ_(w,e,"*")}}catch(v){}}}
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
$.aW.x1$.push(new B.dGC(w))},
abP(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$abP=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aA(),$async$abP)
case 6:q=e.t6("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dGg(s,r))
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
ac8(d){return this.c0c(d)},
c0c(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ac8=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return C.b(C.aA(),$async$ac8)
case 6:r=f
q=s.cx
p=C.a3(q).k("jP<co.E,n>")
q=C.C(new C.jP(q,new B.dGj(),p),p.k("J.E"))
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
if(D.yU.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.u(-36,w))},
ty(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aRk(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fS$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e4(m,D.cIG[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.ty(p,0)&&n.ty(p,1)
break
case"or":p=q.a
o=n.ty(p,0)||n.ty(p,1)
break
case"xor":p=q.a
o=n.ty(p,0)!==n.ty(p,1)
break
case"nand":p=q.a
o=!(n.ty(p,0)&&n.ty(p,1))
break
case"nor":p=q.a
o=!(n.ty(p,0)||n.ty(p,1))
break
case"not":o=!n.ty(q.a,0)
break
default:o=n.ty(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bMs(){return this.aRk(null)},
lv(d){var w,v,u,t,s,r,q,p,o,n=this
n.bMs()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gaf(0),v=new C.f6(w,new B.dGD()),u=n.f,t=n.w,s=0;v.C();){r=w.gS(0).a
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
if(w.x.A(0,A.au)){$.aW.x1$.push(new B.dGe(w,d))
return}w.m(new B.dGf(w,d))},
cum(d){this.m(new B.dGk(this,d,$.bDn()[d]))},
c4L(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bDn()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a1<J.E>")
s=t.k("J.E")
r=C.C(new C.a1(new C.bc(v,u),new B.dG9(),t),s)
A.d.b0(r,new B.dGa())
q=C.C(new C.a1(new C.bc(v,u),new B.dGb(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dGc(d,w))
return}u=d.r
p=C.dW(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.h0(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aRk(0)
h=m.h(0,A.d.gK(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jJ(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aI(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a9(0)
u.v(0,p)
d.m(new B.dGd(d,o,a0))},
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
cdf(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
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
bXk(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yU.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aba(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bLn(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
c4N(d){var w,v,u,t=this,s=t.awQ(d)
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
t.m(new B.dGl())
return}u=t.bLn(d)
if(u!=null)t.m(new B.dGm(t,u))
else t.m(new B.dGn(t))},
auS(d){return this.c_d(d)},
c_d(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$auS=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.awQ(d)
if(s==null){w=1
break}C.jl()
t.m(new B.dGi(t,s))
case 1:return C.h(u,v)}})
return C.i($async$auS,v)},
byk(d){if(this.x.A(0,A.au))return
this.m(new B.dG8(this,d,A.cI))
C.eU()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bDn()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.o2:O.rc,A.ad,h,h,h,21),h,h,h,new B.dGw(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.co.j(0.14)
r=C.I(A.co.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eYE,h,h,h),C.d(w.b,h,h,h,h,h,h,D.f5P,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.D(A.mn,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b2:A.f3,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.E(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bG(D.fng,i.gc4K(),C.bm(A.co,h,h,h,h,h,h,h,h,h,h,A.cc))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,Y.LY,D.br0,h,h,1/0))}u.push(C.E(C.cp(new B.dGx(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yU.h(0,r).a+": "+D.yU.h(0,r).e,h,h,h,h,h,h,A.rK,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,Aa.agN,A.bU,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.yU.gdK(D.yU),s=s.gaf(s);s.C();){r=s.gS(s)
q=new C.aT(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ay(o.j(0.5),1,A.q,-1)
t.push(C.aE(h,C.p(h,C.v(C.a([C.X(p.b,o,h,h,h,20),A.bB,new C.x(p.a,h,D.aPT,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bq(q,q,q,q),h,h,A.n),h,h,h,A.fz,A8.LU,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dGy(i,r),h,h,h,h,h,h,!1,A.a8))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d9l[l]
s.push(new B.fi(A.NB,k.b,new B.dGz(i,k),A.co,h))}s.push(new B.fi(D.y2,"Clear",new B.dGA(i),A.cf,h))
r=C.a([],g)
for(j=0;q=$.bDn(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.eg:A.ll
o=i.ay
n=i.cx.t(0,j)?A.b2:A.c7
r.push(new B.dA(q.a,o===j,new B.dGB(i,j),p,n,h))}return B.jK(A.co,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eQ(t,"PARTS",h),new B.eQ(s,"TRY",h),new B.eQ(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
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
a7.aP(p,r)}for(a5=new C.dt(o,o.r,o.e);a5.C();)this.c4M(a7,a5.d)},
c4M(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yU.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cl(a0.c,64,64)
s=C.bx(t,A.l5)
r=w.cy===v
q=s.eP(A.cB)
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
d.ae(q,52,p)}q=s.eP(A.cJ)
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
l=v===!0?F.NH:D.bF5}else l=e.b
k=B.fVo(C.jJ(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aB(0,new C.u(p/2,q.gbc(q)/2)))
j=B.fVo(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.ad(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fVo(f,9,u?A.dP:A.c1,g,g,A.u)
i.a4(d,a0.c.ad(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aXS(d,w.aba(a0,h),o)
this.aXS(d,a0.c.ad(0,D.HU),o)},
aXS(d,e,f){var w
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
this.btG()}}
B.N5.prototype={
R(){return new B.aCn(C.mz(0,null,null))}}
B.Ka.prototype={
a5(){return"_UnfoldStyle."+this.b}}
B.Ao.prototype={}
B.aCn.prototype={
c4R(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dMr(w,e))},
bZ6(){var w=this
w.e.q()
w.e=C.mz(w.f,null,null)
w.m(new B.dMq(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.oi(t,C.c8(v,A.bX,t?new B.bqk(w.e,w.gc4Q(w),new B.dMs(d),v):new B.aGD(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dMt(w,u),x.C)}}
B.brT.prototype={}
B.bqk.prototype={
aXT(d,e){var w=null
return new C.D(I.Yz,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eZd,w,w,w),A.bB,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aH(v,v,v,v,R.nk,v,v,v,w.e,v,v,v,v,v,v),A.rF,D.bwR],u),A.m,v,A.e,A.j,0,v,v),s=w.aXT("STUDIOS","Play, make things, and keep what you make")
$.bDo()
return C.bl(!0,C.v(C.a([new C.D(D.bvU,t,v),C.E(C.vr(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,C.a([new C.m6(s,v),new C.nN(A.hL,C.OF(new C.ol(new B.eWp(d),22,!0,!0,!0,0,C.rS(),v),D.aNS),v),new C.m6(w.aXT("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nN(D.br7,C.OF(new C.ol(new B.eWq(w),6,!0,!0,!0,0,C.rS(),v),D.aNS),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
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
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.n3,A.d.gK(i),0.24)
f.toString
w=x.O
f=C.a([f,D.aem],w)
v=C.I(A.d.gK(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cB,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aT(6,6)
m=C.a([A.d.gK(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aGy,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bq(n,n,n,n),l,new C.a8(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gK(i),A.d.gal(i),0.4)
u.toString
return C.aG(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eE(C.v(C.a([new C.a7(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.at,C.X(A.BJ,A.d.gK(i),k,k,k,18)],s),A.m,k,A.bb,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a8(A.ax,A.aC,A.x,f,k,k),A.n),k,A.Fp,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag)}}
B.PN.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c0(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.be),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.RJ,26),new C.ac(-6,A.G,A.d.gK(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gK(i),A.c,0.14)
p.toString
o=A.d.gK(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.c0(j,new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,C.a([p,o,n,i],m),D.deo,j),A.n),A.be),0,0,0),C.ao(j,C.c0(j,new C.o(j,j,j,j,j,new C.a8(A.b_,A.b5,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.be),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.bri(i,j),A.au),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.f_M,j,j,j)],l)
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
B(d){var w=null,v=C.m(22),u=C.a([D.bf7,D.ady],x.O),t=this.e,s=C.I(A.d.gK(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.k4,24)],x.V),q=C.m(22),p=A.d.gK(t)
return new C.a7(this.c,this.d,C.c0(C.bw(q,C.b3(C.av(C.X(A.jl,A.d.gK(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b92(p,w),A.au),A.aq),new C.o(w,w,s,v,r,new C.a8(A.ax,A.aC,A.x,u,w,w),A.n),A.be),w)}}
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
if(u===$){w=C.bj(null,D.bov,null,1,null,v)
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
gc4O(){var w=this.w
if(w===$){w=C.C(this.a.c.d,x.G)
this.w=w}return w},
gaUt(){var w=this.x
if(w===$){w=C.C(this.a.c.e,x.Z)
this.x=w}return w},
gaV7(){var w=this.y
if(w===$){w=C.C(this.a.c.f,x.N)
this.y=w}return w},
gb5v(){var w=this.z
if(w===$){w=C.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtU()
w.da()
w.dS$.J(0,this.gcu5())},
cu6(){var w,v,u,t,s,r,q,p=this,o=p.gtU().x
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
case 4:w=D.d2i
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
u=D.bXK[v]
B.lg("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.By("bell",D.c5t,1400,0.35)}}p.ax=o},
q(){this.gtU().q()
this.gZ1().q()
this.bvy()},
afw(){var w=this
w.gtU().cTc(0,C.dC(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eW5(w))},
cfh(){this.gtU().bY(0)
this.m(new B.eW4(this))},
ad6(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ad6=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaV7(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){q=t[r]
l.push(new C.as(new C.bb(q,A.b4,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb5v(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){p=t[r]
m.push(new C.as(new C.bb(p,A.b4,A.aN),$.aw()))}o=C.C(u.gaUt(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bQ(F.n3,null,new B.eW3(u,l,m,o),t,!0,!0,!0,A.lv,!1,!1,x.H),$async$ad6)
case 2:l=C.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$ad6,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaw3(),f=i.a.c,e=f.b,d=i.gc4O(),a0=new B.Ao(g,e,f.c,d,i.gaUt(),i.gaV7(),i.gb5v())
f=C.aq(A.d.gK(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.o2:O.rc,A.ad,h,h,h,21),h,h,h,new B.eWd(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bOD,h,h,h,i.gc4P(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mz,h,h,h,new B.eWe(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gZ1(),new B.eWf(i,a0),h),C.cp(new B.eWg(i,a0))],g)
u=i.as
t=u?i.gcfg():i.gchz()
u=u?D.bEl:A.tW
s=C.aq(A.d.gK(d),A.d.gal(d),0.4)
s.toString
t=C.B(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cc),C.E(C.c6(i.gtU(),new B.eWh(i,a1,a0),h),1),C.aH(h,h,h,h,D.bL2,h,h,h,new B.eWi(i),h,h,h,h,"Replay",A.cc)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gK(d),A.d.gal(d),0.4)
r.toString
s=B.hB(r,u+"x","Speed",2.5,0.4,new B.eWj(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.dbI[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gK(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dA(p.b,o===p.a,new B.eWk(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bY4[q]
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}m=A.d.gK(o).A(0,A.d.gK(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}l=A.d.gK(o).A(0,A.d.gK(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}k=A.d.gK(o).A(0,A.d.gK(n))?A.c:A.b3
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}j=new C.ay(k,A.d.gK(o).A(0,A.d.gK(n))?2.5:1,A.q,-1)
d.push(C.aE(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a8(A.ax,A.aC,A.x,n,h,h),A.a6),h,l,h,D.agy,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eWl(i,n),h,h,h,h,h,h,!1,A.a8))}return B.jK(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ev(new C.an(A.W,h,A.b0,A.r,v,h),i.f),e,C.v(C.a([t,s,new B.eQ(u,"STYLE",h),new B.eQ(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bxw(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
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
n.jY(p)
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
e.push(new C.cL(0,r*118,0,f,f,f,new C.kF(q,new C.iG(n,f,A.b_,!0,f,new B.PN(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nn[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gK(w)
v=D.nn[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.mh(new B.bpX(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.au,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bNU(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
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
g=new B.PN(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dp()
k.fB(3.141592653589793)
k=new C.iG(k,f,A.A,!0,f,new B.bqO(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kF(q,new C.iG(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cz2(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a1X[w]
l.push(A.ct.aw(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.btn(d.d,l,D.avc,m,B.bqj(e,0.4,0.62),f,B.bqj(e,0.45,0.7),n),A.au),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fVU(g,w)
q=D.avc[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kF(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fVU(g,w)
r=D.a1X[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kF(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.TF,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bDF(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.aw(0,B.bqj(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.av(C.dU(C.b3(f,f,f,new B.bpo(A.d.gK(a1),B.bqj(a3,0,0.2),a4,f),new C.ar(a5*0.95,70)),D.e2s),f,f,f),0,0,0))
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
w.push(new C.z(o,new C.cL(0,0,0,0,f,f,new C.cr(A.A,f,f,new C.kF(k*(0.45+0.55*o),C.dU(new C.iG(l,f,A.A,!0,f,new B.PN(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b0(w,new B.eVX())
A.d.v(a0,new C.K(w,new B.eVY(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bCS(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.u8[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mO.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.u8[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.ax8[q]
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
a0.push(new C.cL(0,0,0,0,e,e,new C.cr(A.A,e,e,new C.kF(m,C.dU(new C.iG(k,e,A.A,!0,e,new B.PN(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.u8[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cr(A.A,e,e,C.dU(new C.mh(new B.b9I(w,f,q,e),e,new C.ar(r,212),e,e),new C.u(0,D.ax8[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bAr(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.e2w],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nn[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.ct.aw(0,p)
q=D.axf[r]
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
f.mL(l*h+D.d69[r]*o)
f.fB(l*0.9)
h=0.55+0.45*o
f.jI(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,new C.kF(g,C.dU(new C.iG(f,a3,A.A,!0,a3,new B.PN(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nn[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.axf[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,C.dU(new C.mh(new B.bpq(A.d.gK(w),a2,a3),a3,new C.ar(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
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
d.hO(t,u)
u=C.N()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hO(t,u)
u=t.cB(-14)
v=C.N()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hO(u,v)},
au(d){return!0}}
B.b9I.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ea(A.J),f=this.c,e=A.ct.aw(0,f)
$.W()
w=C.N()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gK(u).j(0.6*v).gp(0)
d.ae(g,40+e*a0.a*0.42,w)
t=new C.eM()
t.dB(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.aj()*3.141592653589793*2
n=(40+t.aj()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.aj()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gK(u):A.c
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
d0.saq(new C.a8(A.b_,A.b5,A.x,C.a([A.d.gK(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.aY(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bC(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fVU(c5,f)
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
a7=C.aq(A.d.gK(w),A.c,0.1)
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
a2.r=C.aq(A.d.gK(w),A.c,0.45).gp(0)
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
b6v(d,e,f){return this.a25(d,e,f,0,0.55)},
aAC(d,e,f,g){return this.a25(d,e,f,0,g)},
b6w(d,e,f,g){return this.a25(d,e,f,g,0.55)},
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
A.d.bo(w.b,new B.dgj(e))
A.d.bo(w.c,new B.dgk(e))
w.aW()},
bai(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mB.h(0,v.b).c===D.wE)return!1
w=this.b
if(A.d.b4(w,new B.dgg(d,e)))return!1
w.push(new B.Cb(d,e))
this.aW()
return!0},
bY4(d){var w
if(d.b==="beat")return D.c5C[A.o.E(d.d,4)]
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
t=D.axv[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.Cl(u,t,j.ax,90))
w.push(new B.Cl(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a06(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b6v(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a06(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aC(700),j.ax))}j.f.push(new B.Cl(u,t,j.ax,120))
j.aAC(120,200,"noise",0.5)
j.b6v(261.63*Math.pow(2,([7,12,16,19][w.aC(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.Cl(u,t,j.ax,230))
w.push(new B.Cl(u,t,j.ax+160,160))
w.push(new B.Cl(u,t,j.ax+320,100))
j.b6w(180+j.at.aC(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.abc(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b6w(300+w.aC(300),110,h,0.8)
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
case"pop":j.x.push(new B.adp(u,D.awW[v],t,j.ax))
j.aAC(261.63*Math.pow(2,([0,5,9,12][j.at.aC(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aAC(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c1J[A.o.E(w,3)]
for(k=1;k<=3;++k)j.cpf(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new C.f6(w,new B.dgh(d));v.C();)j.az8(w.gS(0),j.ax+D.ce1[A.o.E(g.d,4)])
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
case"chance":s=j.at.aC(100)<D.cuV[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new C.f6(w,new B.dgi(d));v.C();)j.az8(w.gS(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.z8(w,0,v-700)},
cpf(d,e,f){var w=this.c
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
u.n(0,r,o.ax+o.bY4(s))}}w=o.c
v=C.U(w).k("a1<1>")
q=C.C(new C.a1(w,new B.dgl(o),v),v.k("J.E"))
if(q.length!==0){A.d.bo(w,new B.dgm(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gaf(v),r=new C.f6(u,new B.dgn(p));r.C();)o.az8(u.gS(0),o.ax)}else o.aE3(u)}}A.d.bo(o.d,new B.dgo(o))
A.d.bo(o.e,new B.dgp(o))
A.d.bo(o.f,new B.dgq(o))
A.d.bo(o.w,new B.dgr(o))
A.d.bo(o.x,new B.dgs(o))
A.d.bo(o.r,new B.dgt(o))
o.aW()},
v1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
cKT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
cNW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
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
l.bai(w[m.a],w[m.b])}},
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
if(!r&&s.c!=null)s.m(new B.el4(s))
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
w=u}for(;;)switch(w){case 0:s.m(new B.ekU(s))
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
bJD(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cI(0,0,new B.ekW())+"|"+A.d.cI(o,0,new B.ekX())
if(v===p.ch)return p.CW
u=new B.el_()
t=x.s
s=C.a([],t)
r=new B.el0(p,s,u)
for(n=new C.bc(n,w).gaf(0),w=new C.f6(n,new B.ekY());w.C();){q=n.gS(0)
if(!A.d.b4(o,new B.ekZ(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dd(s,0,C.dJ(5,"count",x.S),x.N).dH(0)},
a_(){var w,v=this
v.a1()
v.abI()
v.d.db=v.ay
w=v.qx(new B.elu(v))
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
w.buy()},
abe(d){return this.bXx(d)},
bXx(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
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
if(q!=null&&q.length!==0)r=o.cKT(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aVz(A.d.gK(D.awp))
if(s.c!=null)s.m(new B.el3())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abe,v)},
aVz(d){this.d.cNW(0,d.c,d.d)
this.E_()},
E_(){var w=this.as
if(w!=null)w.a7(0)
this.as=C.cM(A.lM,new B.ekQ(this))},
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
cdg(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
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
bXl(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mB.h(0,r.b).c===D.wE)continue
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
c4U(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.his(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cwO(d){var w,v,u,t,s,r,q=this,p=q.aw4(d)
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
r=q.c4U(d)
if(r!=null){w=q.d
A.d.cC(w.b,r)
w.aW()
q.E_()}},
cez(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cdg(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aw4(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aB(0,d)}},
ceA(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aW()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aW()}}},
b_z(){var w,v,u=this
if(u.z!=null){w=u.bXl(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bai(v,w)}else v=!1
if(v){C.jR()
u.E_()}u.z=null
u.d.aW()}else if(u.x!=null){if(u.at)u.E_()
u.x=null}},
abV(d){return this.c_e(d)},
c_e(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
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
return C.b(C.bQ(F.n3,null,new B.el6(q),p,!0,!0,!1,A.lv,!1,!1,x.y),$async$abV)
case 3:if(f===!0){r.W(0,s)
t.E_()}case 1:return C.h(u,v)}})
return C.i($async$abV,v)},
c4S(d){var w,v,u
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
return C.b(C.bQ(F.n3,null,new B.el8(),s,!0,!0,!0,A.lv,!1,!1,x.es),$async$afE)
case 2:t=e
if(t!=null)u.aVz(t)
return C.h(null,v)}})
return C.i($async$afE,v)},
ad7(d){var w=0,v=C.j(x.H),u=this,t
var $async$ad7=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.ekT(),t,null,!0,!0,x.y),$async$ad7)
case 2:if(f===!0){u.d.a9(0)
u.E_()}return C.h(null,v)}})
return C.i($async$ad7,v)},
B(d){var w=this,v=null,u=C.a([C.ahI(w.r?new C.bI(A.a3,v,v,new C.D(A.Fq,C.hg(D.bJ3,D.fgf,new B.els(w),v),v),v):w.c4V(),A.bc,A.iy),C.E(C.cp(new B.elt(w)),1)],x.p)
if(!w.r)u.push(w.crG())
return C.c8(v,A.bX,C.bl(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bFl(){var w=null,v=new B.ekV(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bu.j(0.5),A.q,1)
return C.bZ(0,C.el(C.av(C.p(w,C.cd(C.v(C.a([D.frc,A.at,D.fyx,A.aB,v.$4(A.oO,A.bu,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.BH,A.co,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lk,A.bZ,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.akq,A.c7,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fxS,new C.bI(A.a7,w,w,C.bK(!1,D.fop,w,w,!0,w,w,this.gbFe(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),A.f,w,A.Vc,new C.o(F.n3,w,s,t,w,w,A.n),w,w,w,A.fA,Aa.ahN,w,w,w),w,w,w),u,!0),0,0,0)},
c4V(){var w=this,v=null,u=C.aH(v,v,v,v,R.nk,v,v,v,new B.ele(w),v,v,v,v,v,v),t=w.a88(A.Np,"How it works",new B.elf(w),!0),s=w.ay?A.o2:O.rc
return new C.D(D.bv9,C.B(C.a([u,D.bwE,t,w.a88(s,"Sound",new B.elg(w),!0),w.a88(A.dW,"Ideas",w.gcih(),!0),w.a88(D.y2,"Clear",w.gc4T(w),!0),w.aMD(A.iW,"Show",new B.elh(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aMD(d,e,f,g,h){var w=null,v=h?A.bu:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.D(Af.vt,C.aG(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hs(new C.D(new C.Q(8,8,8,8),C.B(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ag),w)},
a88(d,e,f,g){return this.aMD(d,e,f,g,!1)},
crG(){var w=null,v=new B.ela(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.B(C.a([v.$2("START",D.wE),v.$2("CHANGE",D.DE),v.$2("REACT",D.qv)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),A.f,w,w,new C.o(F.Ax,w,new C.bO(new C.ay(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bqq,w,w,w)},
crH(d){var w,v,u,t,s=null,r=D.mB.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.D(A.fz,C.aE(s,C.p(s,C.v(C.a([C.X(r.b,v,s,s,s,22),A.cV,C.d(r.a,s,1,A.a2,s,s,s,D.aPT,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a8(A.b_,A.b5,A.x,u,s,s),A.n),s,s,s,s,A.hK,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.el9(this,d),s,s,s,s,s,s,!1,A.a8),s)}}
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
a6=B.his(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
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
b2.a4(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbc(p)/2)))}for(b5=new C.dt(n,n.r,n.e);b5.C();)b3.ce7(b8,b5.d,b6)
b7.restore()},
ce7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mB.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cl(e.c,64,64)
t=C.bx(u,A.jJ)
s=t.eP(A.cB)
$.W()
r=C.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.lt
d.aD(s,r)
if(v>0){s=t.cB(6)
r=C.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.yW
d.aD(s,r)}s=t.eP(A.cJ)
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
else m=i==="pop"?D.awW[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qv){s=e.c.ad(0,new C.u(0,62))
r=C.N()
r.r=D.axv[A.o.E(e.d,6)].gp(0)
d.ae(s,5,r)}else if(m!=null){l=B.bgd(m,9.5,A.aA,j,j,A.O)
l.a4(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bgd(m,9.5,A.aA,j,j,A.O)
l.a4(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wE)k.b0o(d,e.c.aB(0,D.HU),q)
k.b0o(d,e.c.ad(0,D.HU),q)},
b0o(d,e,f){var w
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
B.PE.prototype={
gZ(d){return this.d}}
B.VK.prototype={
R(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bjQ(new C.cs(null,x.A),w,v,A.cI,A.bx,D.ED,null,null)}}
B.bjQ.prototype={
aZ7(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bv((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.avR[A.o.E(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.lg("synth",u,420,0.3)
break
case"rainbow":B.lg("bell",u,700,0.35)
break
case"stars":B.lg("pluck",u+12,400,0.4)
break
case"sparks":E.dF(2400+t.r.aC(2000),"",60,0,0.18,"noise")
break
default:E.dF(110+t.r.aC(60),"",140,0,0.22,"noise")}},
c7U(d){return this.aZ7(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qx(new B.ex8(v))
w.iT(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.buH()},
gb_T(){var w=this.Q
return w<0?new H.mO(1,A.k.E(this.y*0.18,360),0.85,1).iB():D.Qr[w]},
aR_(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb_T(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.c7,A.ay,v.aj())
m.toString
j.push(new B.PE(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aC(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.PE(d,new C.u(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aC(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.PE(d,new C.u(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aXV(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb_T()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bkM(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aR_(e)
r.aZ7(e,!0)
r.m(new B.ewK())},
aXU(){this.ax=null
this.m(new B.ewJ())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mz,n,n,n,new B.ewT(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.brd(k,o.f,o.y,o.at,n),A.au)],m)
if(!o.ay&&k.length===0)j.push(D.b4m)
k=C.aE(A.c4,new C.an(A.W,n,A.b0,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ewU(o),new B.ewV(o),new B.ewZ(o),n,n,n,n,n,n,n,n,n,new B.ex_(o),new B.ex0(o),n,n,n,!1,A.a8)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cST[w]
j.push(new B.dA(v.b,o.z===v.a,new B.ex1(o,v),v.c,A.bZ,n))}u=C.a([new B.F2(A.c,o.Q<0,new B.ex2(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.F2(D.Qr[t],o.Q===t,new B.ex3(o,t),!1,n))
s=o.as
s=B.hB(A.bZ,A.o.u(A.k.V(s)),"Size",36,4,new B.ex4(o),s)
r=o.ch
q=r?A.o2:O.rc
q=C.a([new B.dA("Sound",r,new B.ex5(o),q,A.bZ,n),new B.fi(A.rb,"Undo",new B.ewW(o),A.c,n),new B.fi(D.y2,"Clear",new B.ewX(o),A.cf,n)],m)
for(w=0;w<4;++w){p=D.d7H[w]
q.push(new B.F2(p,o.at.A(0,p),new B.ewY(o,p),!1,n))}return B.jK(A.bZ,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ev(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eQ(j,"BRUSH",n),new B.eQ(u,"COLOUR",n),s,new B.eQ(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
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
o.push(new C.b5(A.d.gK(q).a,A.d.gK(q).b))
for(p=C.U(q),m=p.k("om<1>"),l=new C.om(q,1,a5,m),l.CP(q,1,a5,p.c),l=new C.bS(l,l.gM(0),m.k("bS<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bA(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gK(q)
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
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gK(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mO(1,A.o.E(a3*23,360),0.7,1).iB():l
a4.c4W(a6,a0,o,e*0.5,a1)
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
c4W(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ap,null,null,o)
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
w.dS$.J(0,this.gbWs())},
bWt(){var w,v,u,t,s,r,q,p=this,o=p.gIB().x
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
B.lg(s,D.auO[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIB().q()
var w=this.f
w.U$=$.aw()
w.P$=0
this.buN()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m7(h)
w=C.C(h,C.a3(h).k("J.E"))}v=D.Qr[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mz,j,j,j,new B.eDI(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.awX[k.y]
s=C.bw(t,C.c0(C.av(C.c6(k.gIB(),new B.eDJ(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,s,j,j),A.n),A.be),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.T,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.bs(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.Di,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eDK(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hs,!0,A.a4,j,A.an,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cuH[r]
i.push(new B.dA(q.b,k.r===q.a,new B.eDL(k,q),j,A.c7,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.F2(D.Qr[o],k.w===o,new B.eDM(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.o2:O.rc
l=C.a([new B.dA(m,n,new B.eDN(k),l,A.c7,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.F2(D.awX[o][0],k.y===o,new B.eDO(k,o),!1,j))
n.push(A.bp)
n.push(new B.fi(A.mv,"Replay",new B.eDP(k),A.c,j))
m=k.x
return B.jK(A.c7,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.D(A.bD,new C.ev(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.N,new B.eQ(i,"MOVE",j),new B.eQ(p,"COLOUR",j),new B.eQ(l,"SOUND",j),new B.eQ(n,"BACK",j),B.hB(A.c7,A.o.u(A.k.V(m)),"Size",96,28,new B.eDQ(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bZh(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cR(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
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
b18(){return new H.mO(1,this.f.aj()*360,0.6,1).iB()},
aqD(d,e,f,g){var w=this,v=w.gad8().ad(0,new C.u(Math.cos(e),Math.sin(e)).aG(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_o(v,new C.u(-t,s).aG(0,r).aG(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b18(),C.a([],x.g)))},
bEG(d,e,f){return this.aqD(d,e,f,!1)},
bEF(d,e){return this.aqD(d,e,1,!1)},
cu0(){var w,v,u,t=this
A.d.a9(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bEF(40+w*u/5,v.aj()*3.141592653589793*2)},
bFA(){var w=this.r
this.bEG(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
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
B.lg("bell",D.auO[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a1(w,new B.ehB(u),C.U(w).k("a1<1>")).gM(0)>0&&a2.ax)E.dF(70,"",300,0.6,0.8,"sine")
A.d.bo(w,new B.ehC(a2,u))},
cia(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gad8()
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
gaVc(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aB(0,w).aG(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mz,r,r,r,new B.ehp(s,d),r,r,r,r,"Share",r)],q),o=C.cp(new B.ehq(s)),n=s.w
n=B.hB(A.cs,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.ehr(s),n)
w=s.x
w=B.hB(A.cs,A.k.aa(w,1)+"x","Time",3,0.2,new B.eht(s),w)
v=s.Q
v=B.hB(A.cs,A.o.u(A.k.V(v)),"Planet size",16,3,new B.ehu(s),v)
u=s.ax
t=u?A.o2:O.rc
return B.jK(A.cs,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eQ(C.a([new B.dA("Sound",u,new B.ehv(s),t,A.cs,r),new B.dA("Trails",s.z,new B.ehw(s),A.NG,A.cs,r),new B.dA("Planets pull each other",s.y,new B.ehx(s),A.yq,A.cs,r)],q),r,r),new B.eQ(C.a([new B.fi(A.mu,"Solar system",new B.ehy(s),A.cs,r),new B.fi(A.nj,"Comet",new B.ehz(s),A.c,r),new B.fi(A.mr,"Cluster",new B.ehA(s),A.c,r),new B.fi(D.y2,"Clear",new B.ehs(s),A.cf,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
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
t.saq(D.eed.av(0,C.bU(g,o)))
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
c4X(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
a2.c4X()
w=a2.f
A.d.bo(w,new B.eD9(a2))
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
A.d.bo(w,new B.eDa(a2))
if(w.length<a1&&a2.ch)B.lg("bell",12+a2.r.aC(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fS$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fS$
B.lg("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mz,l,l,l,new B.eCZ(m,d),l,l,l,l,"Share",l)],k),i=C.cp(new B.eD_(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cUv[w]
h.push(new B.dA(v.b,m.at===v.a,new B.eD0(m,v),v.c,A.b2,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cEB[w]
u.push(new B.dA(t.b,m.ax===t.a,new B.eD1(m,t),l,A.b2,l))}s=m.ch
r=s?A.o2:O.rc
r=C.a([new B.dA("Sound",s,new B.eD2(m),r,A.b2,l)],k)
s=m.x
s=B.hB(A.b2,A.o.u(A.k.V(s)),"How many",150,15,new B.eD3(m),s)
q=B.hB(A.b2,l,"Together",2.5,0,new B.eD4(m),m.y)
p=B.hB(A.b2,l,"Apart",2.5,0,new B.eD5(m),m.z)
o=B.hB(A.b2,l,"Same way",2.5,0,new B.eD6(m),m.Q)
n=m.as
return B.jK(A.b2,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eQ(h,"TOUCH",l),new B.eQ(u,"LOOK",l),new B.eQ(r,l,l),s,q,p,o,B.hB(A.b2,A.o.u(A.k.V(n)),"Speed",280,50,new B.eD7(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.bs4.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.adn,D.bk6],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.d9,T.Lf],v):C.a([D.bh3,D.b8l],v)}v=0+a6.a
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
j.saq(new C.a8(A.a3,A.a7,A.x,C.a([h,f],q),a3,a3).av(0,D.eJ3))
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
B.zm("chain_burst").bz(new B.dFL(this),x.P)},
aXX(){return B.vQ("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
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
for(v=A.d.gaf(w),s=new C.f6(v,new B.dFM());s.C();){r=v.gS(0)
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
break}}}if(!(j.at!=null&&j.Z2(j.ax)>0||A.d.b4(w,new B.dFN(j)))&&j.fS$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gHY()){if(j.as>=j.gHY()*1.5)k=3
else k=j.as>=j.gHY()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.By("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aXX()}else E.dF(120,"",300,0,0.3,"saw")}}},
aXW(d){this.m(new B.dFB(this,d))
this.aXX()},
ad9(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ad9=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dFE(u),s,null,!0,!0,x.S),$async$ad9)
case 2:t=e
if(t!=null)u.aXW(t)
return C.h(null,v)}})
return C.i($async$ad9,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gHY(),t=w.x.h(0,""+w.r)
return B.jK(A.bZ,A.ha,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cp(new B.dFI(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fi(A.r7,"Levels",w.gc4Y(),A.bZ,v),new B.fi(A.k_,"New board",new B.dFJ(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
au7(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aPd,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bWY(d,e){return this.au7(d,e,A.c)}}
B.ba2.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.N()
w.r=D.ED.gp(0)
d.aY(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cKP(d)
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
this.btE()}}
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
this.buv()}}
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
this.buK()}}
B.Fz.prototype={
gcNa(){return this.a.aB(0,this.b).gcl()>4}}
B.acB.prototype={}
B.Vm.prototype={
R(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bju(new C.cs(null,x.A),w,v,A.cI,A.au,$,A.bx,0,C.a([],x.X),null,null)}}
B.bju.prototype={
aOD(d){return new H.mO(1,A.o.E(d*29,360),0.6,1).iB()},
ZN(d){var w,v=D.Cg.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bv(d.a/s*t),0,t-1)
return v[A.o.E(w,u)]+12*A.o.e4(w,u)},
aRf(d){A.d.bo(this.e,new B.ed4(this,d))},
cq7(d,e,f){var w=f.aB(0,e),v=w.a,u=w.b,t=v*v+u*u
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
c5_(d,e){var w,v=this.fS$
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
if(a1<0){a2.c5_(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bo(w,new B.edt(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.o2:O.rc,A.ad,p,p,p,21),p,p,p,new B.edi(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mz,p,p,p,new B.edj(q,d),p,p,p,p,"Share",p)],o),m=C.cp(new B.edk(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cXT[w]
l.push(new B.dA(v.b,q.x===v.a,new B.edl(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.Cg.gec(D.Cg));t.C();){s=t.gS(t)
u.push(new B.dA(s,q.y===s,new B.edm(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.axS[w]
t.push(new B.dA(r.b,q.z===r.a,new B.edn(q,r),p,A.b8,p))}s=q.Q
return B.jK(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eQ(l,"TOOL",p),new B.eQ(u,"SCALE",p),new B.eQ(t,"SOUND",p),B.hB(A.b8,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.edo(q),s),new B.eQ(C.a([new B.fi(D.bEV,"Stairs",new B.edp(q),A.b8,p),new B.fi(An.No,"Pinball",new B.edq(q),A.c,p),new B.fi(A.mr,"Random",new B.edr(q),A.c,p),new B.fi(D.y2,"Clear",new B.eds(q),A.cf,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bh6.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.N()
w.saq(D.bVO.av(0,new C.a9(0,0,a0,a1)))
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
q.z=A.rm
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
gaXY(){var w=this.w
return new C.u(w.a/2,w.b/2)},
axV(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
az7(d){var w=D.Cg.h(0,this.y),v=5-d,u=w.length
return w[A.o.E(v,u)]+12*A.o.e4(v,u)},
a_(){this.a1()
this.lc()},
aQ_(){var w,v,u,t,s=this.e
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
c50(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aB(0,h.gaXY()),e=f.gcl()
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
if(Math.sqrt(j*j+m*m)<24){new B.egZ(h,n).$0()
h.c.e9()
return}}h.m(new B.eh_(g,h,t))
if(h.Q)B.lg(h.z,h.az7(g.a)+12,700,0.5)
C.eU()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.o2:O.rc,A.ad,q,q,q,21),q,q,q,new B.eh6(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mz,q,q,q,new B.eh7(r,d),q,q,q,q,"Share",q)],p),n=C.cp(new B.eh8(r)),m=r.x
m=B.hB(A.bt,""+A.k.V(m),"Tempo",180,40,new B.eh9(r),m)
w=C.a([],p)
for(v=J.aV(D.Cg.gec(D.Cg));v.C();){u=v.gS(v)
w.push(new B.dA(u,r.y===u,new B.eha(r,u),q,A.bt,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.axS[t]
v.push(new B.dA(s.b,r.z===s.a,new B.ehb(r,s),q,A.bt,q))}return B.jK(A.bt,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eQ(w,"SCALE",q),new B.eQ(v,"SOUND",q),new B.eQ(C.a([new B.fi(A.dW,"Demo",new B.ehc(r),A.bt,q),new B.fi(A.mr,"Random",new B.ehd(r),A.c,q),new B.fi(D.y2,"Clear",new B.ehe(r),A.cf,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
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
o=D.dei[A.o.E(A.o.E(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kh(new C.eq(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.G(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.ca,new C.ju(1),a4,a4,a4,a4,A.c8,a4)
i.ex()
o=i.b.c
m=J.fPH(v.$1(l))
h=i.b.a.c
i.a4(a5,new C.u(p+-o/2,n+(m-h.gbc(h)-2)))}w=C.N()
w.saq(D.edQ.av(0,C.bU(t,16)))
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
if(a2>0){d=J.fPH(v.$1(a0))
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
this.but()}}
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
this.buu()}}
B.tb.prototype={}
B.b8W.prototype={}
B.Vp.prototype={
R(){var w=x.S
return new B.aDs(C.a([],x.aq),C.T(w,w),C.aX(w),D.eOT)}}
B.aDs.prototype={
a_(){this.a1()
B.zm("molecule_maker").bz(new B.egt(this),x.P)},
aiJ(d){var w={}
w.a=0
this.f.bI(0,new B.egf(w,d))
return w.a},
gaY3(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)t.push(w[u].a)
return B.i_n(t,this.f,D.a2s[this.d])},
c5h(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eM()
w.dB(t*7+3)
t=v.y
v.m(new B.eg9(v,e,t.a,w,t.b))
B.vT("pop",u.length,90,0.35)},
aw8(d){return this.m(new B.ega(this))},
aY4(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c5n(d){this.m(new B.ege(this,this.aY4(d)))},
cmC(){var w=this.r
if(w==null)return
this.m(new B.egd(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a2s[k.d],h=k.gaY3()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.w0.h(0,w[u].a).a-k.aiJ(u)
w=i.c
w=w.gdK(w)
t=w.dt(w,new B.egn(),x.N).aI(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b2:A.hw
r=x.p
s=C.v(C.a([new C.D(A.fI,B.fb0(w,s,h&&k.d<12?new B.fi(A.iV,"Next",new B.ego(k),A.b2,j):j),j),C.E(C.cp(new B.egp(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dA(p+D.a2s[u].b,k.d===u,new B.egq(k,u),j,A.hw,j))}q=C.a([],r)
for(p=D.w0.gdK(D.w0),p=p.gaf(p);p.C();){o=p.gS(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dA:m.b
q.push(new B.dA(n+" \xb7 "+m.a,!1,new B.egr(k,o),j,l,j))}return B.jK(A.hw,A.ha,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eQ(w,"GOAL",j),new B.eQ(q,"ADD",j),new B.eQ(C.a([new B.dA("Remove selected atom",!1,k.gcmB(),A.e6,A.cf,j),new B.dA("Clear all",!1,k.gc5i(k),A.k_,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bhO.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.E(t*37,10)
r=A.o.E(t*53,10)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hw.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bI(0,new B.dop(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.w0.h(0,n)
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
h.saq(new C.bT(A.JI,0.5,A.x,a3,0,C.a([f,g,e],r),I.avZ,a3).av(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.az:A.c
d=new C.kh(new C.eq(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.G(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.ca,new C.ju(1),a3,a3,a3,a3,A.c8,a3)
d.ex()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a4(a4,new C.u(n.a-h/2,n.b-j.gbc(j)/2))
n=k===0
a0=n?A.bk:A.aF
j=m.b
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.kh(new C.eq(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.nv),A.a4,A.ca,new C.ju(1),a3,a3,a3,a3,A.c8,a3)
a1.ex()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a4(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbc(j)/2)))}if(n===0){d=C.hr(a3,a3,a3,a3,D.eXy,A.a4,A.ca,a3,A.e_,A.c8)
d.ex()
d.a4(a4,new C.u((w-d.b.c)/2,v/2))}},
au(d){return!0}}
B.Un.prototype={
R(){var w=x.s
return new B.biK(C.a([],w),C.a([],w))}}
B.biK.prototype={
a_(){this.a1()
this.avs()
B.zm("dna_lab").bz(new B.dOv(this),x.P)},
gb2m(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a3x.h(0,w[u])
t.toString
s.push(t)}return A.d.fZ(s)},
ga8H(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb2m(),w,v))}return u},
avs(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eM()
k.dB(l.e*31+l.d*7+C.BL(new C.S(Date.now(),0,!1)))
w=new B.dOk(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mF(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a3x.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fZ(r))}if(!A.d.b4(t,new B.dOj()))break}l.f=v
A.d.a9(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b05()},
b05(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fYr(s.ga8H()[r])
v=J.dH(D.Ch.gec(D.Ch),new B.dOl(w)).dH(0)
u=new C.eM()
u.dB(r+s.e)
A.d.fv(v,u)
u=C.a([w],x.s)
A.d.v(u,C.dd(v,0,C.dJ(3,"count",x.S),C.U(v).c))
t=new C.eM()
t.dB(s.e*3+r)
A.d.fv(u,t)
s.z=u},
aY2(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dkf.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a3x.h(0,w.f[v])
u.toString
break A}u=B.fYr(w.ga8H()[v])
break A}w.m(new B.dOi(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dOt(),e=new B.dOo(),d=h.d===2?h.gb2m():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
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
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cm(A.aO,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bq(q,q,q,q),g,g,A.n),g,g,g,D.bpw,A.eq,g,g,g))}v.push(C.bV(A.bz,u,A.bq,0,0))}else{u=C.a([],a0)
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
v.push(B.fb0(u,t>=(h.d===2?3:9)?A.b2:A.bZ,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.fb0(u,A.bZ,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.Ty,g,g,g))
v=C.cd(C.v(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bD,g,g,A.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dA(D.d2w[j],h.d===j,new B.dOp(h,j),g,A.bZ,g))
u=C.a([new B.eQ(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fi(A.k_,"New strand",new B.dOq(h),A.b2,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.L)(t),++l){i=t[l]
q=D.Ch.h(0,i)
q.toString
a0.push(new B.fi(D.a_p,q,new B.dOr(h,i),A.bZ,g))}u.push(C.bV(A.bz,a0,A.bq,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.auT:D.cMM
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aT(14,14)
a0.push(C.aE(g,C.p(A.A,new C.x(k,g,D.eXN,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bq(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dOs(h,k),g,g,g,g,g,g,!1,A.a8))}u.push(C.B(a0,A.m,g,A.q4,A.j,0,g,g))}return B.jK(A.bZ,A.ha,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.UD.prototype={
R(){return new B.aCz(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aCz.prototype={
a_(){var w,v=this
v.a1()
w=v.qx(v.gc5j())
w.iT(0)
v.d!==$&&C.aP()
v.d=w
B.zm("ecosystem").bz(new B.dRk(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.btT()},
gaLY(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c5k(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cC(v,0)}if(m.gaLY()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.E(A.k.bv(w),5)===0)B.vQ("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dR7())},
a9T(d){this.m(new B.dR6(this,d))
B.vT("pop",3,120,0.4)},
c5m(){return this.m(new B.dR8(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.D(D.Y7,B.fb0(r,t.gaLY()?A.b2:A.cf,s),s),C.E(new C.D(D.bq3,C.bw(C.m(18),C.b3(s,s,s,new B.bd7(t.f,t.r,t.w,s),A.f1),A.aq),s),1),new C.D(A.eK,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.f3N,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hB(A.b2,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dRc(t),w)
v=t.y
v=B.hB(A.bO,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dRd(t),v)
u=t.z
return B.jK(A.b2,A.ha,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hB(A.cs,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dRe(t),u),new B.eQ(C.a([new B.dA("Drought",!1,new B.dRf(t),A.yo,A.aM,s),new B.dA("Disease",!1,new B.dRg(t),D.bEN,A.bt,s),new B.dA("+ Foxes",!1,new B.dRh(t),s,A.cs,s),new B.dA("+ Rabbits",!1,new B.dRi(t),s,A.bO,s),new B.dA("Reset",!1,t.gc5l(),A.k_,A.aR,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bd7.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.N()
w.saq(D.bTP.av(0,new C.a9(0,0,d,a0)))
a1.aY(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.v0,A.bk,A.k.D(w[0]/100,0,1))
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
l.delete()}k=new B.d3x(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.N()
t.r=D.bcU.gp(0)
a1.aY(new C.a9(0,f,d,f+g),t)
i=C.N()
i.r=A.dr.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d3z(h,j,a1)
g.$3(0,100,A.bk)
g.$3(1,120,A.bO)
g.$3(2,24,A.cs)
g=new B.d3y(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bk,16)
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
return new B.bio(B.hXs(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.bio.prototype={
gvS(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cI(t,0,new B.dBW())},
a_(){var w,v=this
v.a1()
w=v.qx(new B.dC8(v))
w.iT(0)
v.x!==$&&C.aP()
v.x=w
B.zm("balance_lab").bz(new B.dC9(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.btw()},
cx0(d){var w,v=this
v.m(new B.dBX(v,d))
B.vT("click",v.f[d],60,0.4)
if(v.gvS()===v.d[v.e].guT()&&v.r.J(0,v.e)){B.vT("zap",10,260,0.5)
w=v.r
w=C.C(w,C.a3(w).k("co.E"))
B.vQ("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.K(k,new B.dC1(),C.U(k).k("K<1,n>")).aI(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aI(k," + ")
if(o.gvS()===m[o.e].guT())s="\u2696\ufe0f Balanced! "+m[o.e].guT()+" = "+o.gvS()+". The torques are equal, so the seesaw stays level."
else s=o.gvS()>m[o.e].guT()?"The right side is too strong ("+o.gvS()+" vs "+m[o.e].guT()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guT()+" vs "+o.gvS()+"). Add weight to the right, or place it further from the middle."
k=o.gvS()===m[o.e].guT()?A.b2:A.aM
k=B.bzr(s,k,o.gvS()===m[o.e].guT()&&o.e<m.length-1?new B.fi(A.iV,"Next",new B.dC2(o),A.b2,n):n)
w=C.E(C.cp(new B.dC3(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].guT(),n,n,n,n,n,n,D.aQq,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.D(D.Y7,k,n),w,new C.D(D.agZ,C.B(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvS(),n,n,n,n,n,n,D.aQq,A.dM,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dA(w+p,o.e===v,new B.dC4(o,v),n,A.aM,n))}return B.jK(A.aM,A.ha,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eQ(u,"LEVEL",n),new B.eQ(C.a([new B.dA("Clear right side",!1,new B.dC5(o),A.k_,A.cf,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
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
w.saq(D.bWv.av(0,new C.a9(t.a,t.b,t.c,t.d)))
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
B.fo7(d,""+Math.abs(s),new C.u(w,22),A.c1,10)}q=new B.cDm(g,d)
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
B.fo7(d,"+",new C.u(m,-22),A.c1,14)}}i.restore()
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
gadj(){var w=this.ga0f(),v=this.r,u=D.axA[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.db(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qx(new B.dVn(v))
w.iT(0)
v.x!==$&&C.aP()
v.x=w
B.zm("gear_lab").bz(new B.dVo(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bu0()},
c5o(d,e){var w,v=this
v.m(new B.dVd(v,d,e))
if(v.gadj()&&v.w.J(0,v.r)){B.vT("zap",8,240,0.45)
w=v.w
w=C.C(w,C.a3(w).k("co.E"))
B.vQ("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga0f(),n=r.ga0f(),m=D.axA[r.r].a
m=r.gadj()?"\u2705 Done! Ratio "+A.k.aa(r.ga0f(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gadj()?A.b2:A.cs
v=r.d
u=x.p
n=C.v(C.a([new C.D(D.Y7,B.bzr(m,w,r.gadj()&&r.r<7?new B.fi(A.iV,"Next",new B.dVh(r),A.b2,q):q),q),C.E(C.b3(q,q,q,new B.beB(v,r.f,q),A.f1),1),new C.D(D.agZ,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.ga0f(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,A8.Tc,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dA(m+s,r.r===t,new B.dVi(r,t),q,A.cs,q))}p=r.e
u=C.a([new B.eQ(o,"GOAL",q),B.hB(A.aR,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dVj(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.av7("Gear "+s+" teeth",p,new B.dVk(r,t),8,40,D.dbT[t],""+p,q))}return B.jK(A.cs,A.ha,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.beB.prototype={
bOS(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ap,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.ef4,D.ekb,D.eA6,D.erf],s=v===0,r=0;r<4;++r){q=t[r]
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
h=new B.dbx(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.d5,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cZ)
h.$5(new C.u(0,0),g[0],w[0],j,A.mV)
h.$5(new C.u(t,0),g[1],w[1],i,A.fk)
s.restore()
s=new B.dby(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aR)
s.$3("2+3 \xb7 shared axle",t,A.cs)
s.$3("4 \xb7 output",q,A.b2)},
au(d){return!0}}
B.U0.prototype={
R(){var w=$.aw()
return new B.biB(new C.as(new C.bb("Meet me at noon",A.b4,A.aN),w),new C.as(new C.bb("LEMON",A.b4,A.aN),w),C.aX(x.S))}}
B.biB.prototype={
a_(){this.a1()
this.aWM()
B.zm("cipher_lab").bz(new B.dG7(this),x.P)},
q(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a2()},
aWM(){this.y=1+A.cI.aC(25)
this.z=0},
ga9a(){var w=this
return B.a1j(B.a1j(D.GP[w.x],w.y),-w.z)===D.GP[w.x]},
gax6(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1j(u,v.w)
break A}if(1===t){w=new C.K(C.a(B.a1j(u,0).split(""),x.s),new B.dFQ(),x.dv).fZ(0)
break A}w=B.i9a(u,v.e.a.a)
break A}return w},
aS8(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d4(d.toUpperCase()),v=x.e8,w=new C.bS(w,w.gM(0),v.k("bS<bW.E>")),v=v.k("bW.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fb(q,A.A6))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aT(2,2)
v.push(new C.bD(1,A.bh,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aR,r,r,new C.bq(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.Mc,r,r,r,r),new C.x(C.jJ(65+s),r,D.f5B,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.lX,A.j,0,A.p),r))}return new C.a7(r,70,C.B(v,A.dz,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kF,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dFZ(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.f_S,!0,A.a4,o,A.an,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kF,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dG_(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iH,!0,A.a4,o,A.an,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fw9)
w.push(A.at)
v=A.aR.j(0.12)
u=C.m(14)
t=C.I(A.aR.j(0.4),A.q,1)
w.push(C.p(o,C.zG(p.gax6().length===0?"\u2026":p.gax6(),D.f4A,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bD,o,o,o))
w.push(A.ac)
w.push(B.bzr(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aR,o))
w.push(A.ac)
w.push(D.fcG)
w.push(A.at)
w.push(p.aS8(p.gax6()))
w.push(A.at)
w.push(D.ff5)
s=C.cz(w,o,A.bD,o,o,A.ah,!1)}else{w=B.bzr("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1j(D.GP[p.x],p.y),o,o,o,o,o,o,D.f5a,o,o,o)
u=(p.ga9a()?A.b2:A.aR).j(0.14)
t=C.m(14)
r=C.I((p.ga9a()?A.b2:A.aR).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fpS,v,A.S,D.fke,C.p(o,C.d(B.a1j(B.a1j(D.GP[p.x],p.y),-p.z),o,o,o,o,o,o,D.f6C,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bD,o,o,o),A.ac,p.aS8(B.a1j(D.GP[p.x],p.y)),A.N],x.p)
if(p.ga9a())t.push(B.bzr("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b2,new B.fi(A.k_,"Next",new B.dG0(p),A.b2,o)))
s=C.cz(t,o,A.bD,o,o,A.ah,!1)}w=p.f
v=x.p
w=C.a([new B.eQ(C.a([new B.dA("Make a secret",w===0,new B.dG1(p),A.jl,A.aR,o),new B.dA("Crack a code",w===1,new B.dG2(p),A.pW,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dA(n[q],p.r===q,new B.dG3(p,q),o,A.aR,o))
v=C.a([new B.eQ(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hB(A.aR,""+u,"Shift",25,1,new B.dG4(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hB(A.aM,""+v,"Shift back",25,0,new B.dG5(p),v))}return B.jK(A.aR,A.ha,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
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
bc7(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hc()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a9S(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c1k(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bo(w,new B.bLu())},
aja(d,e,f,g){var w="p"+this.c++,v=new B.to(w,e,f,g)
v.apm(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bo(this.b,new B.bLF(e))},
a9(d){A.d.a9(this.a)
A.d.a9(this.b)},
cF_(d,e,f,g,h){return A.d.b4(this.b,new B.bLA(e,f,g,h))},
ajX(d,e,f,g){var w
if(d===f||this.cF_(0,d,e,f,g))return null
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
b4M(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Lo(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c5p(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yV.h(0,v)
if(w!=null)return w.a
return 100},
v1(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c1k(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.U(v).k("a1<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a1(v,new B.bLG(a2),t).cI(0,0,new B.bLH(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.T(x.N,u)
n=new B.bLJ(o)
m=C.a([],x.t)
l=new B.bLI(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.T(u,u)
f=new B.bLL(g,l,n)
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
a2.b4I(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zA(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b4I(e,d,w,!0)
a2.bLO(a4)},
b4I(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.T(x.N,b3),b5=new B.bLw(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bLv(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bLy(C.T(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b4M(t)*(1+t.CW))
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
a3=a5?1e-9:i}else a3=1/b2.c5p(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bOR(e,a0,b8)
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
bOR(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bLO(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.azG(o)/a1.b4M(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zA(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bDY(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bc7(o,3,260)
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
if(i>1.5)a1.tF(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yV.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qb().h(0,n).b
l=f.b
l=l===A.k.jZ(l)?""+A.k.V(l):C.t(l)
g=f.c
g=g===A.k.jZ(g)?""+A.k.V(g):C.t(g)
a1.tF(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eMP.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
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
bDY(d){return A.d.b4(this.a,new B.bLt(d))},
tF(d,e){var w
d.x=!0
d.ay=e
this.bc7(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bgI(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a9(0)},
aFK(d){var w=d.b
return D.aMT.t(0,w)||D.yV.ai(0,w)||w==="buck"||w==="regulator"},
bdv(d){var w,v=!0
if(!this.Lo(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yV.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Uj(d,e){var w=this.b
return new C.a1(w,new B.bLN(d,e),C.U(w).k("a1<1>")).gM(0)},
Ck(d){var w,v
if(d.x)return!1
w=d.b
if(D.yV.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bbE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qb().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aFK(d)||i.Ck(d))return null
w=i.Uj(d,0)
v=i.Uj(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.U(u).k("a1<1>")
s=C.C(new C.a1(u,i.gcNu(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jZ(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yV.h(0,h)
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
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zA(k))return"The "+$.qb().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.zA(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b4(u,new B.bLB(i,d))
h=q.b
h=h===A.k.jZ(h)?""+A.k.V(h):C.t(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aFP(d){var w=this.a
return new C.a1(w,new B.bLE(d),C.U(w).k("a1<1>"))},
aFn(d){return this.aFP(d).b4(0,new B.bLD(0.35))},
pK(d,e){return A.d.b4(this.a,new B.bLC(e))}}
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
b4.cBX(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hv0(q.a,q.b,c1)
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
g.z=A.yW
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mO.aw(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cf5(c0,a0,a0===o)
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
a9.ex()
a9.a4(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aMT.t(0,h)||D.yV.ai(0,h)||h==="buck"||h==="regulator")&&!r.Ck(a0)&&r.Uj(a0,0)+r.Uj(a0,1)>0
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
a9.ex()
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
j.r=(i&&r.bdv(a0)?A.cf:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bdv(a0)){a9=new C.kh(new C.eq("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.cf,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.ca,new C.ju(1),b5,b5,b5,b5,A.c8,b5)
a9.ex()
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
b7.r=D.b86.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aY(new C.a9(0,0,b8,b9),b7)
a9=C.hr(b5,b5,b5,b5,D.eXr,A.a4,A.ca,b5,A.e_,A.c8)
a9.wC(b6-24)
a9.a4(c0,new C.u(12,10))}},
qj(d,e,f,g,h){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.ca,w,A.e_,A.c8)
v.ex()
v.a4(d,f)},
cBX(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ap,null,null,C.a([],x.v))
d.F(new C.b5(a1.a,a1.b))
w=B.hnv(a1,a2,a3)
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
o=u}else o=A.bl
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
if(q){n=new C.Sg(new C.vu(C.x1(d),!1,C.a([],x.f5))).gK(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jp()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jp()
h=t[u].b
h===$&&C.c()
h=A.k.E(j*22+i*m*l,h.a.length())
v.jp()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jp()
g=t[u].b
g===$&&C.c()
f=A.k.E(h+i,g.a.length())
v.jp()
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
c0W(d,e){return this.OF(d,A.bl,A.iN,e)},
agK(d,e){var w,v,u
$.W()
w=C.N()
w.saq(D.aLu.av(0,C.bU(e,4.2)))
d.ae(e,4.2,w)
w=e.ad(0,D.e4c)
v=e.ad(0,D.e4l)
u=C.N()
u.r=A.ee.gp(0)
u.c=1.2
d.bC(w,v,u)},
cf5(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.N()
c0.saq(D.bTv.av(0,D.eJN))
c0.c=3.4
c0.d=A.bP
w=C.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.mC
c1.hO(D.eJF,w)
if(c3){w=C.bx(D.eJM,A.kA)
v=C.N()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=B.h3B(c2)
c1.bC(new C.u(-u,0),D.e5u,c0)
c1.bC(D.e3k,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lY.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bX(0,c2.ch)}switch(w){case"battery":b3.bAR(c1,c2)
break
case"solar":r=C.bx(D.eJI,A.im)
c1.aD(r,b3.OF(new C.a9(r.a,r.b,r.c,r.d),A.dA,A.bO,!1))
b9=C.N()
w=C.aq(D.bbo,A.d3,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bje,A.mh,0.3+0.4*c2.f)
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
c1.ae(D.e3q,4+4*w,b9)
break
case"crank":n=C.bx(D.eJt,A.he)
c1.aD(n,b3.avi(new C.a9(n.a,n.b,n.c,n.d),A.bv,A.bJ))
b9=C.N()
b9.saq(D.aLv.av(0,C.bU(A.J,12)))
c1.ae(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.N()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bP
c1.bC(A.J,m,b9)
b9=C.N()
b9.saq(D.ee8.av(0,C.bU(m,7)))
c1.ae(m,7,b9)
b3.agK(c1,D.e5n)
b3.agK(c1,D.e3d)
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
b9.saq(D.edP.av(0,C.bU(A.J,4.5)))
c1.ae(A.J,4.5,b9)
break
case"switch":n=C.bx(D.eJA,A.ry)
b9=C.N()
b9.saq(D.ao4.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.agK(c1,D.RO)
b3.agK(c1,D.aGk)
i=c2.w?D.aGk:D.e2Y
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
case"fuse":h=C.bx(D.aM0,D.aLA)
b9=C.N()
b9.r=A.f5.j(0.25).gp(0)
c1.aD(h,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.aA.gp(0)
c1.aD(h,b9)
if(!t){b9=C.N()
b9.c=1.6
b9.r=C.aq(A.bO,A.cs,c2.fx).gp(0)
c1.bC(D.aGB,D.aGj,b9)}else{b9=C.N()
b9.c=1.6
b9.r=A.c1.gp(0)
c1.bC(D.aGB,D.e5L,b9)
b9=C.N()
b9.c=1.6
b9.r=A.c1.gp(0)
c1.bC(D.e3R,D.aGj,b9)
b9=C.N()
b9.r=A.dB.gp(0)
c1.ae(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cl(new C.u(F.oY[g]*22,0),20,9)
w=C.bx(f,A.hC)
o=b3.OF(f,A.d5,A.ou,!0).H()
b9.drawRRect(C.er(w),o)
o.delete()}break
case"pot":b9=C.N()
b9.saq(D.ee0.av(0,C.bU(A.J,21)))
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
b9.saq(D.edN.av(0,C.bU(A.J,13)))
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
case"resistor":a1=C.bx(D.aM0,D.aLA)
b9=C.N()
b9.saq(D.bWN.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
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
c1.aY(D.eJW,b9)
b9=c2.r
b3.qj(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e52,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.N()
v.r=A.dP.j(0.55*w).gp(0)
v.z=A.yW
c1.ae(D.w7,34,v)}n=C.cl(D.e2t,12,18)
c1.aD(C.bx(n,A.hC),b3.OF(n,A.bl,A.e1,!0))
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
l.toString}w.saq(new C.bT(A.rT,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,C.bU(A.rv,17)))
c1.ae(A.rv,17,w)
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ae(A.rv,17,w)
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
c1.bC(D.e5H,D.e5J,v)
v=C.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bC(D.e3K,D.e3N,v)
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
else{w=C.aq(A.dA,D.bcb,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aP(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.N()
v.r=A.ay.j(0.6*w).gp(0)
v.z=D.dmD
c1.ae(A.rv,30,v)}w=C.N()
w.r=A.e1.gp(0)
w.c=2.4
c1.bC(D.e5N,D.e5M,w)
w=C.N()
w.r=A.e1.gp(0)
w.c=2.4
c1.bC(D.e3T,D.e3S,w)
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
j.toString}v.saq(new C.a8(A.ax,A.aC,A.x,C.a([l,j],x.O),b4,b4).av(0,D.eJ_))
c1.aP(a6,v)
v=C.N()
v.b=A.ae
v.c=1.2
v.r=A.jd.gp(0)
c1.aP(a6,v)
v=C.N()
v.r=A.eP.gp(0)
c1.aY(D.eJ5,v)
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
c1.aY(D.eIN,b9)
b9=C.N()
b9.r=A.cr.gp(0)
c1.aY(D.eIO,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cl(D.e2L,15,7)
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cs.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c_(w),o)
o.delete()
b9.restore()}w=C.N()
w.r=A.az.gp(0)
c1.ae(A.J,3,w)
b9.restore()
b3.qj(c1,"M",D.e5m,A.az,14)
break
case"buzzer":a8=C.cl(A.J,42,42)
b9=C.N()
b9.saq(D.ee4.av(0,a8))
c1.hO(a8,b9)
b9=C.N()
b9.r=A.w.gp(0)
c1.ae(A.J,6,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.b3.gp(0)
c1.ae(A.J,6,b9)
b3.qj(c1,"+",D.e5f,A.ad,12)
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
case"heater":n=C.bx(D.eJw,A.hd)
w=C.N()
w.saq(D.bUs.av(0,new C.a9(n.a,n.b,n.c,n.d)))
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
w.r=D.bcN.j(0.5*b9).gp(0)
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
w.saq(D.bTn.av(0,a7))
c1.aD(b9,w)
w=C.N()
w.r=A.bO.gp(0)
c1.aY(D.eJb,w)
for(p=0;p<4;++p){b0=new C.kh(new C.eq("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.G(!0,A.az,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.ca,new C.ju(1),b4,b4,b4,b4,A.c8,b4)
b0.ex()
b0.a4(c1,new C.u(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aD(C.bx(b1,A.hC),b3.c0W(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.N()
v.r=A.b2.j(0.5).gp(0)
c1.aY(new C.a9(-3,w,11,w+b9),v)
b3.qj(c1,"1F",D.w7,A.c,11)
break
case"radio":a1=C.bx(D.a5V,A.he)
b9=C.N()
b9.saq(D.bX2.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.ou.j(0.6).gp(0)
c1.aD(a1,b9)
b9=C.bx(D.eJx,A.im)
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
c1.aY(D.eIQ,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=C.N()
v.r=A.bC.gp(0)
v.c=1.6
c1.bC(new C.u(w,-13),new C.u(w,-3),v)}w=C.N()
w.saq(D.aLv.av(0,C.bU(D.a5_,6)))
c1.ae(D.a5_,6,w)
w=C.N()
w.r=A.ou.gp(0)
c1.ae(D.e3j,4,w)
w=C.N()
w.r=A.e1.gp(0)
w.c=1.8
c1.bC(D.e3h,D.aGo,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aGo,4+k*5+A.k.E(w.d*8,5))
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nP.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c_(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bx(D.eJH,A.hd)
v=C.N()
v.r=L.n_.gp(0)
c1.aD(w,v)
b2=C.bx(D.eJE,A.hC)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.er(b2),$.pr(),!0)
b9.translate(-33,-21)
E.h_O(c1,D.ePj,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.N()
b9.r=A.b2.gp(0)
c1.ae(D.e3v,1.6,b9)}else{w=C.N()
w.r=D.v9.gp(0)
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
c1.aY(D.eJ4,b9)
break}B.i6N(c1,c2,b3.b.d,b3.gc5q())
if(t)b3.qj(c1,"\u2716",D.e5Q,A.ay,14)
if(s)c1.a.restore()},
bAR(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aD(C.bx(w,A.ry),m.avi(w,A.dA,A.iQ))
v=new C.a9(-22,-13,22,13)
$.W()
u=C.N()
u.saq(D.anY.av(0,v))
d.aY(v,u)
u=C.N()
u.r=A.dT.gp(0)
d.aY(D.eJk,u)
t=new C.a9(28,-5,34,5)
d.aD(C.bx(t,A.hc),m.OF(t,A.dA,A.iN,!0))
m.qj(d,"+",D.e32,A.aM,11)
m.qj(d,"\u2212",D.e5o,A.ad,11)
m.qj(d,C.t(l===A.k.jZ(l)?A.k.V(l):l)+"V",D.e58,A.aM,13)
if(l===1.5){u=C.N()
u.r=A.bG.gp(0)
d.aY(D.eJj,u)
u=e.as
s=C.N()
s.r=C.aq(A.ay,A.b2,u).gp(0)
d.aY(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qj(d,"FLAT",D.e51,A.cf,9)}if(l>2){u=C.N()
u.r=A.b3.gp(0)
u.c=1
d.bC(D.e2z,D.aG3,u)
m.qj(d,l>3?"3 cells":"2 cells",D.e57,A.aA,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bx(r,A.ry)
$.W()
s=C.N()
s.saq(D.bWA.av(0,r))
d.aD(u,s)
s=C.N()
s.r=A.cZ.gp(0)
d.aY(D.eJl,s)
for(u=d.a,q=0;q<2;++q){p=F.axe[q]
s=p<0?5:3.6
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.aLu.av(0,C.bU(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qj(d,"9V",D.e53,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bx(r,A.im)
$.W()
s=C.N()
s.saq(D.anY.av(0,r))
d.aD(u,s)
s=C.N()
s.r=A.c7.gp(0)
d.aY(D.eJG,s)
for(u=d.a,q=0;q<2;++q){s=C.bx(C.cl(new C.u(F.a2Q[q],-20),8,10),A.hc)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cr.gp(0)
n=o.H()
u.drawRRect(C.er(s),n)
n.delete()}m.qj(d,"+",D.e39,A.ay,10)
m.qj(d,"12V",D.e54,A.az,15)}},
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
J.iq(s[4],new B.ck8(n))
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
this.bqJ()},
a_m(d,e){return this.cd2(d,e)},
b_2(d){return this.a_m(d,!1)},
cd2(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_m=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qY:A.xr
p=d.b
w=3
return C.b(E.h05(s,r,p,d.ax<3.2,q,$.qb().h(0,p).b),$async$a_m)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_m,v)},
cpB(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.cg(0,d.a,new B.bGk()),t=J.cG(u)
t.J(u,v)
t.bo(u,new B.bGl(v))
if(t.gM(u)>=4){t.a9(u)
t=w.ch
if(t!=null)t.a7(0)
w.a0H(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=C.cM(A.kq,new B.bGm(w,u,d))}},
a_2(d){return this.cbq(d)},
cbq(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$a_2=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i7V(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_2)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$a_2,v)},
a0H(d){return this.cnf(d)},
cnf(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0H=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bQ(F.kk,null,new B.bGg(u,d),t,!0,!0,!1,A.k6,!1,!1,x.H),$async$a0H)
case 2:return C.h(null,v)}})
return C.i($async$a0H,v)},
a_(){this.a1()
this.bdG()
this.lc()},
bdG(){this.a.c.e=new B.bGB(this)},
lv(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v1(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=D.lY.h(0,s.b)
if((r==null?null:r.b)!==D.zl)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.J(0,s.a)
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
b6_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
b_J(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.U(w).k("dz<1>"),w=new C.dz(w,v),w=new C.bS(w,w.gM(0),v.k("bS<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lY.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cBY(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=B.hnv(new C.u(k,n),new C.u(i,l),p)
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
bnw(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cXF[v]
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
w.push(n.b_y(s,!0))
n.a.toString
if(t)w.push(n.b_y(r,!0))
w.push(C.E(C.cp(new B.bGA(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
b_y(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.L)(d),++v){u=d[v]
t=$.qb()
s=t.h(0,u).d.j(0.14)
r=new C.aT(14,14)
q=new C.ay(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aE(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.zz,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.nt,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.bb,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bq(r,r,r,r),p,p,A.n),p,p,p,F.tA,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFN(this,u),p,p,p,p,p,p,!1,A.a8))}return C.p(p,C.cz(m,p,A.h6,p,p,A.aO,!1),A.f,p,p,new C.o(F.Ax,p,new C.bO(A.Y,A.Y,new C.ay(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aY7(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.abH,w,C.I(A.bG,A.q,1),v,w,w,A.n),w,w,w,w,F.ah_,w,w,w)},
cf6(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qb().h(0,o),m=d.dy,l=d.fr,k=new B.bG5(q,n),j=C.d(n.c,p,p,p,p,p,p,A.IX,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bKO,p,p,p,new B.bFT(q,d),p,p,p,p,"Remove part",A.cc),C.aH(p,p,p,p,A.Gk,p,p,p,new B.bFU(q),p,p,p,p,p,A.cc)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.Dj,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.f5_,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.at,w,A.am,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cf:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bbE(d)
if(v!=null){l=(d.x?A.ay:A.aF).j(0.14)
j=C.m(10)
i=C.I((d.x?A.ay:A.aF).j(0.5),A.q,1)
m.push(new C.D(A.hZ,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fbl,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cp,p,p,p),p))}if(B.fYU(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dA("CH "+t,d.at===u,new B.bFV(q,d,u),p,h,p))}l=C.bV(A.bz,l,A.bq,4,6)
l=C.a([A.am,l,A.at,C.d(q.a.c.Ck(d)?"Showing: "+F.PP[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hf,p,p,p)],g)
if(q.a.c.Ck(d))l.push(new B.fi(A.FV,"Open big screen",new B.bFY(q,d),h,p))
A.d.v(m,l)}if(D.lY.ai(0,o)&&!B.fYU(o)){l=C.a([A.am,C.d(q.a.c.Ck(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hf,p,p,p)],g)
if(q.a.c.Ck(d))l.push(new B.fi(A.Nx,"Open the "+$.qb().h(0,o).b,new B.bFZ(q,d),h,p))
A.d.v(m,l)}if(D.lY.ai(0,o))A.d.v(m,C.a([A.am,new B.fi(A.BC,"Make it bigger (or tap it 4 times)",new B.bG_(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.Ck(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.am,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.f5O,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.dd3[s]
j=r===A.k.jZ(r)?A.k.V(r):r
l.push(new B.dA(C.t(j)+" V out",d.e===r,new B.bG0(q,d,r),p,h,p))}i.push(new C.D(A.mn,C.bV(A.bz,l,A.bq,0,6),p))}if(o==="regulator")i.push(D.ftn)
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
m.push(new C.D(A.hZ,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f_P,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d3b[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dA(j,d.e===r,new B.bG1(q,d,r),p,h,p))}m.push(C.bV(A.bz,l,A.bq,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cV8[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dA(j,d.r===r,new B.bG2(q,d,r),p,h,p))}m.push(C.bV(A.bz,l,A.bq,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bG3(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bG4(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bFW(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bFX(d)))
if(o==="crank")m.push(D.fp0)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hf,p,p,p))
return q.aY7(new C.cS(D.aZ6,C.cd(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.r,p,A.y,p,p,p,p,A.ah),p))}}
B.ba4.prototype={}
B.UE.prototype={
R(){return new B.aCA(B.h3A(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aCA.prototype={
a_(){this.a1()
$.aW.c2$.push(this)
this.adl()},
adl(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$adl=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.ftO(),$async$adl)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i77(t.d,r)
if(s!=null){t.m(new B.dRs(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$adl,v)},
EL(){var w,v=this
if(!v.as)return
w=B.hYH(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bD1(w)},
iY(d){if(d!==A.fv)this.EL()},
q(){$.aW.hF(this)
this.EL()
this.a2()},
c5s(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.U(v).k("a1<1>")
t=new C.a1(v,new B.dRB(q),u).gM(0)
s=new C.a1(v,new B.dRC(),u).gM(0)
r=new C.a1(v,w.gcR_(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dRD(q,t,s,r))}if(A.o.E(q.w,45)===0)q.EL()
if(A.o.E(q.w,10)===0){w=q.f
$.ahq()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahq()[q.f].c.$1(q.d)){w.J(0,q.f)
B.By("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dRE())
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
return C.b(C.ca(null,null,!0,null,new B.dRr(u),t,null,!0,!0,x.H),$async$ag0)
case 2:return C.h(null,v)}})
return C.i($async$ag0,v)},
aY6(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aE(w,C.hs(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8)},
aY5(d,e,f,g){return this.aY6(d,e,f,g,null)},
aq0(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aE(w,C.p(w,C.B(C.a([C.X(d,f,w,w,w,15),A.ec,new C.dq(1,A.cn,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.bb,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),1)},
aej(){var w=0,v=C.j(x.H),u=this,t
var $async$aej=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a5(t,!1).c5(C.e8(new B.dRn(u),!1,null,x.H)),$async$aej)
case 2:t=u.e.gbh()
if(t!=null)t.bdG()
if(u.c!=null)u.m(new B.dRo())
u.EL()
return C.h(null,v)}})
return C.i($async$aej,v)},
bDR(){var w,v,u,t,s=null,r=this.f
$.ahq()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bk:A.ay
u=C.m(9)
t=C.I(F.Ax,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wl,s,s,s),s,s,s),A.f,s,D.aZd,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eR,s,s,s)},
ah6(){var w=0,v=C.j(x.H),u=this,t
var $async$ah6=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bQ(F.kk,null,new B.dRA(u),t,!0,!0,!0,A.k6,!1,!1,x.H),$async$ah6)
case 2:return C.h(null,v)}})
return C.i($async$ah6,v)},
c5t(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aE(r,C.p(r,D.bM1,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dRG(d),r,r,r,r,r,r,!1,A.a8),o=C.m(11)
o=C.p(r,D.b3P,A.f,r,r,new C.o(A.bo,r,C.I(A.aR.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.B(C.a([p,A.ab,o,A.ab,C.E(C.v(C.a([D.frv,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f3:A.fT,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.awH(s.gcb7(),r),A.rF,s.aY5(A.y1,"Construction Lab: real 3D wiring, plumbing and a house",A.cs,new B.dRH(s,d)),s.aY6(A.ll,"Challenges",A.aM,s.gcs8(),s.bDR()),s.aY5(A.Np,"How to play",A.aR,new B.dRI(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,C.B(C.a([s.aq0(A.o0,"Circuits",A.bt,s.gcl3()),A.bp,s.aq0(A.oK,"Repair",A.aM,new B.dRJ(s)),A.bp,s.aq0(D.y2,"Clear",A.cf,new B.dRK(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(F.Ax,r,new C.bO(A.Y,A.Y,new C.ay(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.bvV,r,r,r)},
B(d){var w=this,v=null
$.arg="tech"
return C.c8(v,A.bX,C.bl(!0,C.v(C.a([w.c5t(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h2s(w.d,w.e,w.gc5r(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
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
this.brZ()},
B(d){var w=null,v=this.a.c
return C.aE(w,C.hs(new C.a7(42,42,C.c6(this.gaw9(),new B.cAU(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
B.b8f.prototype={
a4(d,e){var w,v,u,t=null,s=e.ea(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.N()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.z=G.mC
d.ae(s,r+2+o*2,w)
w=C.N()
w.saq(D.ee_.av(0,C.bU(s,r)))
d.ae(s,r,w)
v=C.N()
v.b=A.ae
v.c=2.2
v.saq(new C.fS(A.A,0,6.283185307179586,A.x,D.cML,t,new C.ml(p)).av(0,C.bU(s,r)))
d.ae(s,r,v)
p=new B.cAT(d)
p.$3(s.ad(0,A.rv),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e43),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.e5U),2.6,0.5+0.5*Math.cos(q))
u=C.hr(t,t,t,t,D.eXx,A.a4,A.ca,t,A.e_,A.c8)
u.ex()
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
this.bqI()}}
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
B.J6.prototype={
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
this.btP()},
gRq(){var w=this.ga8E().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lY.h(0,this.a.c)
if(v==null)v=D.aMh
return C.c8(w,T.Lf,C.bl(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zm?this.bG1(v):this.chR(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.my,w,w,w,new B.dNo(d),w,w,w,C.nx(w,A.aX,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eZ8,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c5u(d){var w
A:{if(D.Ij===d){w=0.46153846153846156
break A}if(D.uy===d){w=0.45
break A}if(D.wd===d){w=0.9259259259259258
break A}if(D.Sq===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
chR(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.Ij
A:{if(D.Ij===p){w=44
break A}if(D.uy===p){w=30
break A}if(D.wd===p){w=22
break A}if(D.Sq===p){w=26
break A}w=14
break A}v=C.c6(this.ga8E(),new B.dNn(this,w,d,o),q)
if(p===D.a62)v=new C.Dc(D.bwx,v,q)
p=this.c5u(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fG(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A3.Fs,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a8(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.bqg,new C.Q(u,u,u,u),q,q,q),q)},
b5d(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bv(this.gRq()*0.4),0,100),q=d.b===D.Ij,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aT(A.o.u(C.dl(s)),2,"0")+":"+A.a.aT(A.o.u(C.fZ(s)),2,"0"),t,t,t,t,t,t,A.rL,t,t,t),A.b6],x.p)
for(w=0;w<4;++w){v=new C.aT(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bq(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bwf,t,t,t,3))}n.push(A.db)
n.push(D.fkq)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.m(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.DE(A.A,C.p(t,t,A.f,t,t,new C.o(A.b2,t,t,C.m(2),t,t,A.n),t,t,t,A3.Fs,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qh)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.fbF,t,t,t))
return new C.D(new C.Q(p,12,o,2),C.B(n,A.m,t,A.e,A.j,0,t,t),t)},
au9(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d8B,new C.a8(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.at,C.d(d.a,v,1,A.a2,v,v,v,D.f2z,v,v,v)],w))
return C.aE(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dNj(this,d),v,v,v,v,v,v,!1,A.a8)},
bX3(d,e){return this.au9(d,e,!0)},
bWL(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.Sq||n===D.wd,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.ki,0.5)
l.toString
l=C.a([k,A.dx,l],x.O)
k=p.b5d(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b3,A.q,1)
w=C.aE(o,C.p(o,C.bw(C.m(23),C.b3(o,o,o,new B.aec(0,p.gRq(),o),A.f1),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hL,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dNh(p),o,o,o,o,o,o,!1,A.a8)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.k1[s]
t.push(new C.cr(A.A,o,o,p.bX3(r,m?58:54),o))}k=C.a([k,A.am,w,A.ac,C.E(C.lZ(0.92,t,v,8,12,A9.vo,o,!1),1)],u)
if(n!==D.a62){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.dd(F.k1,0,C.dJ(4,"count",x.S),x.gD),t=v.$ti,v=new C.bS(v,v.gM(0),t.k("bS<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.au9(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.B(u,A.m,o,A.q4,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.br5,S.air,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a8(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bzu(d,e){var w=null
return C.p(w,C.v(C.a([this.b5d(d),C.E(C.b3(w,w,w,new B.aec(e,this.gRq(),w),A.f1),1),C.aE(w,C.p(w,C.av(C.d(F.k1[e].a,w,w,w,w,w,w,A0.IN,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dNc(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bG1(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fG(1.5384615384615383,C.p(t,C.c6(this.ga8E(),new B.dNf(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a8(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.bvQ,new C.Q(8,8,8,s),t,t,t),t)}}
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
r.z=D.dmI
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
gvp(){var w=this.f
return w===$?this.f=B.fZ_(0):w},
a_(){this.a1()
this.lc()
B.zm("laser_maze").bz(new B.e8E(this),x.P)},
lv(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cC(w,v)}this.m(new B.e8F())},
adq(d){var w=this
w.m(new B.e8u(w,d))
B.vQ("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c5K(d){var w,v,u,t,s,r,q,p,o=this
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
if(o.gvp().b.t(0,p)||p===o.gvp().e||o.gvp().d.ai(0,p))return
o.m(new B.e8v(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cp(new B.e8y(t,B.hnm(t.gvp(),t.r))),q=x.p,p=C.a([new B.dA("Clear mirrors",!1,new B.e8z(t),A.k_,A.aM,s),new B.dA("Skip",!1,new B.e8A(t),D.bEO,A.aR,s)],q)
if(t.d>0)p.push(new B.dA("Back",!1,new B.e8B(t),D.bEP,A.aR,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dA(""+u,v===t.d,new B.e8C(t,v),s,A.ay,s))}return B.jK(A.ay,A.ha,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eQ(p,s,s),new B.eQ(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bgh.prototype={
a4(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gdO()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dgC(a5,a3,a6),a8=a5+a4
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
o.saq(D.bX8.av(0,C.cl(p,a3,a3)))
q=o.H()
w.drawRRect(C.er(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ap,a2,a2,u)
n.F(new C.b5(a7.$1(A.d.gK(a8)).a,a7.$1(A.d.gK(a8)).b))
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
i.ex()
j=i.b
h=j.c
j=j.a.c
i.a4(a9,new C.u(m-h/2,k-j.gbc(j)/2))}g=new B.dgF(a7,a3,a9)
a1.c.bI(0,new B.dgD(g))
a4.d.bI(0,new B.dgE(g))
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
B.zm("light_mixer").bz(new B.e8X(this),x.P)},
lv(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aYb()
w.m(new B.e8Y())},
awd(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aC(5)/4)
u.e=t
if(A.d.d7(t,new B.e8I()))u.e[w.aC(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aYb(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hiI(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vT(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vQ("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcx3(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cOI[A.o.E(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cp(new B.e8R(v,B.hiI(v.e,t))),r=t[0]
r=B.hB(A.ay,""+A.k.V(r*100)+"%","Red",1,0,new B.e8S(v),r)
w=t[1]
w=B.hB(A.bk,""+A.k.V(w*100)+"%","Green",1,0,new B.e8T(v),w)
t=t[2]
return B.jK(A.b8,A.ha,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hB(A.d3,""+A.k.V(t*100)+"%","Blue",1,0,new B.e8U(v),t),new C.bI(A.a7,u,u,new B.fi(A.hz,"Lock it in",new B.e8V(v),A.b2,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
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
this.bui()}}
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
this.buj()}}
B.btd.prototype={}
B.a7S.prototype={
B(d){var w=null
return C.c8(C.eC(w,w,w,!0,!0,D.adV,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.amW,w,w,w,new B.ceM(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fzT,w,w,w,1,w,!0),D.adV,C.cz(C.a([D.e7a,C.cp(new B.ceN())],x.p),w,D.bs5,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.W1.prototype={
R(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aE5(w,new C.as(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aE5.prototype={
a_(){this.a1()
this.lc()},
b3d(d){var w=this.d.length
return A.o.E(A.k.bv(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lv(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b3d(v.f)
if(w!==v.x){v.x=w
B.lg("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eIa(v))
B.By("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c6H(){if(this.d.length<2)return
this.m(new B.eI6(this))},
aYx(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eI5(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc6G(),p=s.d,o=C.E(C.aE(r,C.b3(r,r,r,new B.buA(p,s.f,r),A.f1),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.f9Q,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.aww[A.o.E(v,8)].j(0.9)
t=new C.aT(20,20)
o.push(C.aE(r,C.p(r,new C.x(p[v],r,D.f96,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bq(t,t,t,t),r,r,A.n),r,r,r,A.fz,A.h7,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eI8(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8))}p=A.c.j(0.07)
return B.jK(A.aM,A.ha,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eQ(o,r,r),C.B(C.a([C.E(C.aM(r,A.T,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.bs(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kG,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eI9(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dn,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new B.fi(A.hy,"Add",s.gc6E(s),A.c,r),A.bp,new B.fi(A.mr,"Spin",q,A.b2,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.buA.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.N()
w.r=D.b9v.gp(0)
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
n.r=D.aww[A.o.E(q,8)].gp(0)
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
k=new C.kh(new C.eq(o,i,i,A.cO,i,i,i,i,i,i,D.eYl),A.a4,A.ca,new C.ju(1),i,i,i,i,A.c8,i)
k.ex()
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
w.a4y(900,new B.dTG())}w.m(new B.dTH())},
aYz(d){return this.m(new B.dTB(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.E(A.k.dw(m),60)),2,"0")
m=C.b3(n,n,n,new B.bpp(l,A.cf,n),A.aNw)
u=C.d(w+":"+v,n,n,n,n,n,n,D.f1x,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.f0C,n,n,n),A.at,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.zy,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d5Q[r]
u.push(new B.dA(""+q+" min",o.d===q,new B.dTD(o,q),n,A.cf,n))}m=o.f
p=m?A2.ya:A.iW
m=m?"Pause":"Start"
return B.jK(A.cf,A.ha,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eQ(u,n,n),new B.eQ(C.a([new B.fi(p,m,new B.dTE(o),A.b2,n),new B.fi(A.k_,"Reset",new B.dTF(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
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
v.saq(new C.fS(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).av(0,C.bU(s,r)))
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
v=A.d.fb(w,new B.dEy())
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
B.lg("flute",D.bXL[t]+5,1400,0.35)}p.m(new B.dEz())},
gc6K(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.JY("Press Start",0.5)
w=D.QQ.h(0,this.d)
w.toString
v=A.d.fb(w,new B.dEt())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.JY("Breathe in",0.5+0.5*A.dC.aw(0,p))
case 1:return new C.JY("Hold",1)
case 2:return new C.JY("Breathe out",1-0.5*A.dC.aw(0,p))
default:return new C.JY("Hold",0.5)}}}return new C.JY("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc6K(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hw.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hw.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.zC,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kG,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.QQ.gec(D.QQ));w.C();){v=w.gS(w)
o.push(new B.dA(v,r.d===v,new B.dEw(r,v),q,A.hw,q))}w=r.e
v=w?A.a08:A.iW
w=w?"Stop":"Start"
o.push(new B.fi(v,w,new B.dEx(r),A.b2,q))
return B.jK(A.hw,A.ha,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eQ(o,q,q))}}
B.aHu.prototype={}
B.UC.prototype={
R(){return new B.biL(new C.cs(null,x.A),C.a([],x.au),A.az,A.c)}}
B.biL.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mz,s,s,s,new B.dQX(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.m(18),new C.ev(C.aE(s,C.b3(s,s,s,new B.bkN(t.e,t.x,s),A.f1),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dQY(t),new B.dQZ(t),s,s,s,s,s,s,s,s,s,new B.dR_(t),s,s,s,s,!1,A.a8),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cO5[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.F2(v,u,new B.dR0(t,v),!1,s))}u=t.r
return B.jK(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.D(A.bU,p,s),"DRAW PAD",C.v(C.a([new B.eQ(o,s,s),B.hB(A.bA,""+A.k.V(u),"Brush",30,2,new B.dR1(t),u),new B.eQ(C.a([new B.dA("Eraser",t.w,new B.dR2(t),A.FN,A.bA,s),new B.fi(A.rb,"Undo",new B.dR3(t),A.c,s),new B.fi(A.e6,"Clear",new B.dR4(t),A.c,s),new B.fi(A.Nl,"Paper",new B.dR5(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
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
if(m.length===1){q=A.d.gK(m)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aO(q.r,A.ap,null,null,o)
o.push(new C.b5(A.d.gK(m).a,A.d.gK(m).b))
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
arv(){var w,v,u=this,t=x.N,s=C.bn(D.dam,!0,t)
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
c6F(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lg("bell",12+A.o.E(d,9),150,0.35)
s.m(new B.eej(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gK(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.n8,new B.eek(s,v,u),t)
else{s.x=!0
C.bN(Ae.F5,new B.eel(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.Tr,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.D(A.xC,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hB,A.j,0,q,q),q),C.E(C.ig(!0,q,q,A.y,new C.hM(v,8,8,1,q),new B.eep(r),r.e.length,A.bm,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cPy[t]
o.push(new B.dA(s.b,r.d===s.a,new B.eeq(r,s),q,A.aR,q))}o.push(new B.fi(D.bEM,"New game",new B.eer(r),A.b2,q))
return B.jK(A.aR,A.ha,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eQ(o,q,q))}}
B.VA.prototype={
R(){return new B.aDK(C.a([],x.t))}}
B.aDK.prototype={
c6J(d){A.d.a9(this.d)
this.w=!0
this.aYy()},
aYy(){this.d.push(A.cI.aC(4))
this.e=0
this.Zs()},
Zs(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zs=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.epa(t))
s=x.H
w=3
return C.b(C.bN(A.lM,null,s),$async$Zs)
case 3:r=t.d,q=C.bn(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aRT(n)
w=7
return C.b(C.bN(new C.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$Zs)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.epb(t))
case 1:return C.h(u,v)}})
return C.i($async$Zs,v)},
aRT(d){this.m(new B.ep8(this,d))
B.lg("marimba",D.aoy[d]+5,450,0.55)
C.bN(A.F3,new B.ep9(this),x.H)},
c6L(d){var w,v,u=this
if(!u.w||u.r)return
u.aRT(d)
w=u.d
v=u.e
if(w[v]!==d){E.dF(90,"",600,0,0.5,"saw")
u.m(new B.epc(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.epd(u))
C.bN(A.ie,new B.epe(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.Ty,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.fac,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.avr[v]
u=u.j(q.f===v?1:0.35)
t=new C.aT(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.avr[v].j(0.8),A.J,30)],w):p
r=new C.ay(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aE(p,C.dk(p,p,p,p,A.bc,new C.o(u,p,new C.bO(r,r,r,r),new C.bq(t,t,t,t),s,p,A.n),A.jf,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.epf(q,v),p,p,p,p,p,p,!1,A.a8))}o=C.av(new C.D(A.a9,C.v(C.a([o,A.am,n,A.d7,new C.fG(1,C.lZ(1,l,2,12,12,p,A.dR,!1),p)],m),A.m,p,A.bb,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jK(A.c7,A.ha,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eQ(C.a([new B.fi(A.iW,n,q.gc6I(q),A.b2,p)],m),p,p))}}
B.VV.prototype={
R(){return new B.bjZ(new C.as(A.as,$.aw()))}}
B.bjZ.prototype={
auZ(d){return C.oD(A.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eDs(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d5(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eDB()
l=C.aM(m,A.T,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.bs(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),Ac.wK),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aXD),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kF,"Bill amount",!0,!0,!1,m,m,m,m,D.f7N,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dV,m,m,m,1,m,m,!1,"\u2022",m,new B.eDx(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aOZ,!0,A.a4,m,A.an,m,m,m,m)
k=A.b2.j(0.1)
s=C.m(20)
r=C.I(A.b2.j(0.35),A.q,1)
q=x.p
s=C.cz(C.a([l,A.by,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.auZ(w)),t.$2("Total","$"+n.auZ(v)),X.F0,t.$3$big("Each of "+n.f+" pays","$"+n.auZ(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bR,m,m,m)],q),m,A.fA,m,m,A.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cAp[p]
r.push(new B.dA(""+o+"%",A.k.V(n.e)===o,new B.eDy(n,o),m,A.b2,m))}l=n.f
return B.jK(A.b2,A.ha,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eQ(r,"TIP",m),B.hB(A.aR,""+l,"People",20,1,new B.eDz(n),l),new B.eQ(C.a([new B.dA("Round up",n.r,new B.eDA(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
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
B.a7R("snare",0.5)}u.m(new B.ecZ())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hc()
u.w=t
u.x=t?0:3.141592653589793
B.lg("bell",24,400,0.5)}u.m(new B.ed_())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bct(v,o.r>0,n))}u=C.aE(n,C.av(C.bV(A.fQ,m,A.bq,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ecS(o),n,n,n,n,n,n,!1,A.a8)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d5,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aE(n,C.av(C.ed(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.f71,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.ee3,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ecT(o),n,n,n,n,n,n,!1,A.a8)}else{m=o.as
u=C.aE(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eXP,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kG,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ecU(o),n,n,n,n,n,n,!1,A.a8)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d3l[r]
v.push(new B.dA(q.b,o.d===q.a,new B.ecV(o,q),q.c,A.bt,n))}v=C.a([new B.eQ(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hB(A.bt,""+s,"Dice",4,1,new B.ecW(o),s))}if(o.d==="num"){s=o.z
s=B.hB(A.bt,""+s,"From",100,1,new B.ecX(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hB(A.bt,""+p,"To",1000,2,new B.ecY(o),p)],m))}return B.jK(A.bt,A.ha,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bct.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cI.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cB,14)],x.V)
t=C.a([],x.p)
for(s=D.dls.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.aaH,p,18,p,p,p,p,p,18),p))
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
this.btC()}}
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
this.btW()}}
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
this.bur()}}
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
this.buV()}}
B.b63.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aDk.h(0,t)
$.arg=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,R.nk,u,u,u,new B.crG(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.Np,s,u,u,u,22),u,u,u,new B.crH(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.D(D.bv7,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
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
return new C.D(F.tA,C.aE(s,C.dk(s,C.B(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bc,new C.o(p,s,o,r,s,s,A.n),A.eF,s,s,s,A.h7,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.crC(t),s,s,s,s,s,s,!1,A.a8),s)}}
B.eQ.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.cd(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),1))
return new C.D(A.cz,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.av7.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.auH(d).cHD(q,A.bG,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.a9E(C.kZ(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.B(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A0.IN,A.dM,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fi.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.D(F.tA,C.aG(!1,A.a1,!0,C.m(12),C.aL(!1,C.m(12),!0,new C.D(Al.agL,C.B(C.a([C.X(w.c,u,v,v,v,17),A.ec,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.crB(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ag),v)}}
B.F2.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eW8:u
w=t?A.c:A.b3
w=C.I(w,A.q,t?2.5:1)
return C.aE(u,C.dk(u,u,u,u,A.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hY,u,r,D.agy,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.crI(v),u,u,u,u,u,u,!1,A.a8)}}
B.mB.prototype={
a4y(d,e){var w=C.dj()
w.seF(C.cM(C.dC(0,0,0,d,0,0),new B.crD(this,w,e)))
this.fp$.push(w.bg())},
lc(){var w=this,v=w.qx(new B.crF(w))
v.iT(0)
w.fo$!==$&&C.aP()
w.fo$=v}}
B.aaE.prototype={
bx4(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
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
w=g.bAh()
g.ay!==$&&C.aP()
g.ay=w},
bAh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
cDw(d,e){var w,v,u,t,s,r,q,p
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
B.OT.prototype={}
B.xV.prototype={}
B.OS.prototype={
fk(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.aot[w.aC(7)]
w=w.hc()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
B.lg(u,v+w-12,2200,0.1)}}
B.US.prototype={
R(){var w=$.aw()
return new B.aCL(new C.cs(null,x.A),new C.as(A.as,w),new B.OS(A.cI),D.d5i,A.au,D.a2B,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCL.prototype={
a_(){var w,v=this
v.a1()
v.lc()
v.a.toString
w=$.hbJ
if(w==null)w=$.hbJ=B.cuh()
w.bz(new B.dWo(v),x.P)},
q(){var w=this.e
w.U$=$.aw()
w.P$=0
this.bu3()},
crj(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n)q.push(new B.dVR(p[n]).$0())
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
c7p(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
return m.cDw((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c7o(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dVP(w))
return}w.m(new B.dVQ(w,v,A.a.i(d).toLowerCase()))},
bN2(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new B.dVN(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bHr,n,n,n,o.gbN1(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mz,n,n,n,new B.dW9(o,d),n,n,n,n,"Share",n)],l),j=C.cp(new B.dWa(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.T,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.bs(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.Di,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bPv,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc7n(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iH,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
w.push(new B.dA(s.a,!1,new B.dWb(o,s),A.mt,A.aR,n))}i.push(new C.D(A.hZ,new C.a7(n,38,C.cz(w,n,n,n,n,A.aO,!1),n),n))}i.push(A.am)
w=C.a([new B.dA("Whole Earth",!1,new B.dWf(o),A.hn,A.aR,n)],l)
for(v=D.aDj.gdK(D.aDj),v=v.gaf(v);v.C();){u=v.gS(v)
w.push(new B.dA(u.a,!1,new B.dWg(o,u),n,A.aR,n))}w.push(new B.dA("Random",!1,new B.dWh(o),A.mr,A.aR,n))
i.push(new B.eQ(w,"GO TO",n))
w=o.z
i.push(B.hB(A.aR,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dWi(o),w))
w=o.dy
i.push(B.hB(A.c7,A.a.aT(A.o.u(A.k.bv(w)),2,"0")+":00","Time",24,0,new B.dWj(o),w))
w=o.fr
i.push(B.hB(A.b2,o.cq4(),"Season",365,0,new B.dWk(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lR:D.G3
i.push(new B.eQ(C.a([new B.dA("Spin",w,new B.dWl(o),D.bCC,A.aR,n),new B.dA("Night",v,new B.dWm(o),A.vy,A.aR,n),new B.dA("Borders",u,new B.dWc(o),D.bCG,A.aR,n),new B.dA("Names",r,new B.dWd(o),X.Nt,A.aR,n),new B.dA("Music",q,new B.dWe(o),p,A.aR,n)],l),n,n))
return B.jK(A.aR,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
cq4(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.aw5[u])v=u
return A.ih[v]+" "+(A.k.bv(w-D.aw5[v])+1)},
c7m(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mO(1,A.o.E((A.d.cJ(D.a2c,t)+1)*47,360),0.55,1).iB()
r=new B.dVL()
q=C.m(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.dm,j,j,j),1),C.aH(j,j,j,j,A.Gk,j,j,j,new B.dVK(this),j,j,j,j,j,A.cc)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hf,j,j,j)
m=D.dk7.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.ab,r.$2("PEOPLE",l?B.fs1(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.GC(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.GC(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.N,v,A.N,m,A.N,C.B(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fs1(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.VR,j,p,q,j,j,A.n),j,j,j,j,D.ah5,j,j,j)}}
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
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.aR.j(0.35),A.K],t),D.cR4,d3).av(0,C.bU(p,o*1.1)))
d8.ae(p,o*1.05,u)
n=C.bU(p,o)
u=C.N()
u.saq(D.ee7.av(0,n))
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
f=new B.dcn(l,k,j,p,o)
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
s.z=A.rm
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
c9=B.hKD(a7.a,a3,b2)
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
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b7j.j(0.78)],t),D.d5F,d3).av(0,C.bU(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ae(p,o,u)}$.W()
d4=C.N()
d4.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dhH,d3).av(0,n))
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
this.bu2()}}
B.bt8.prototype={}
B.VY.prototype={
R(){return new B.bk2()}}
B.bk2.prototype={
gaRs(){var w=this.d
if(w===$)w=this.d=A.cI.aC(16)
return w},
B(d){var w=null,v=C.eC(w,w,w,!0,!0,D.As,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.amW,w,w,w,new B.eEl(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.ftG,w,w,w,1,w,!0),u=C.m(18),t=A.aR.j(0.1),s=C.I(A.aR.j(0.35),A.q,1),r=x.p
return C.c8(v,D.As,C.cz(C.a([C.p(w,C.B(C.a([D.bGa,A.av,C.E(C.d(D.cUU[this.gaRs()],w,w,w,w,w,w,D.a7T,w,w,w),1),C.aH(w,w,w,w,D.bQw,w,w,w,new B.eEm(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bD,w,w,w),A.aB,C.cp(new B.eEn())],r),w,A.Yk,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.VJ.prototype={
R(){return B.hL4()}}
B.bjP.prototype={
chS(d){var w=d.c,v=B.hL6(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.lc()},
lv(d){var w,v,u,t=this
t.e.fk(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.chS(w)
u=new C.u(-v.a,-v.b).aG(0,t.w)
v=C.lh(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc7q(){var w=this.ch
return new C.u(w.a/2,w.b/2).ad(0,this.x)},
c7u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
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
aYU(d){this.m(new B.ewo(this,d))
C.eU()
B.lg("bell",D.dhS[A.o.E(A.d.cJ(D.Ca,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mz,m,m,m,new B.ewz(n,d),m,m,m,m,"Share",m)],k),i=C.cp(new B.ewA(n,l)),h=C.a([new B.dA("All",!1,new B.ewB(n),A.a0i,A.aM,m)],k)
for(w=0;w<10;++w){v=D.Ca[w]
h.push(new B.dA(v.a,n.z===v,new B.ewC(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hB(A.aM,s,"Time",1,0,new B.ewD(n),u/t)
u=n.w
u=B.hB(A.aM,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.ewE(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lR:D.G3
return B.jK(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eQ(h,"GO TO",m),t,u,new B.eQ(C.a([new B.dA("Orbits",s,new B.ewF(n),m,A.aM,m),new B.dA("Names",r,new B.ewG(n),m,A.aM,m),new B.dA("Asteroids",q,new B.ewH(n),m,A.aM,m),new B.dA("Music",p,new B.ewI(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c7r(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.ewm(),m=C.m(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.k9,r,r,r),1),C.aH(r,r,r,r,A.Gk,r,r,r,new B.ewl(this),r,r,r,r,r,A.cc)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.Dj,r,r,r)
v=n.$2("WIDTH",B.GC(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.GC(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.ewn().$1(v))
t=d.f
v=C.B(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.at,k,A.N,p,A.N,v,A.N,s,A.N,C.B(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.VR,r,l,m,r,r,A.n),r,r,r,r,D.ah5,r,r,r)}}
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
o=a5.gc7q()
n=a5.w
if(a5.as)for(a6=A.d.gaf(D.Ca),t=new C.f6(a6,new B.eYJ()),s=o.a,r=o.b;t.C();){q=a6.gS(0).c
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
p.delete()}i=B.hL5(A.d.gK(D.Ca))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.saq(new C.bT(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).av(0,C.bU(o,a6)))
a7.ae(o,a6,t)
t=C.N()
t.saq(D.ee1.av(0,C.bU(o,i)))
a7.ae(o,i,t)
if(a5.at){h=B.hdl("Sun",10.5,A.ad)
h.a4(a7,o.ad(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gaf(D.Ca),t=new C.f6(a6,new B.eYK()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gS(0)
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
a0.z=A.rm
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d_4[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.hdl(d,10.5,A.ad)
h.a4(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
au(d){return!0}}
B.UT.prototype={
R(){var w=x.i
return new B.aCM(new B.OS(A.cI),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCM.prototype={
cuy(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c7t(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e2K
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
s.m(new B.dWs())},
a_(){this.a1()
this.lc()},
lv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fk(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yH[r]
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
break}}}if(A.d.d7(s,new B.dWV()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(n==="drop")n=p.bLi()
else n=n==="weight"?p.cBN():p.bDt()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.df0[u]
v.push(new B.dA(t.b,p.d===t.a,new B.dWH(p,t),t.c,A.cs,o))}v=C.a([new B.eQ(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dA("Hammer",!s,new B.dWI(p),Aj.FZ,A.cs,o),new B.dA("Feather",s,new B.dWJ(p),X.N3,A.cs,o),new B.dA(q,r,new B.dWN(p),A.FO,A.aR,o)],w)
q=p.w
A.d.v(v,C.a([new B.eQ(r,o,o),B.hB(A.cs,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dWO(p),q),new B.eQ(C.a([new B.fi(A.tN,"Drop!",new B.dWP(p),A.b2,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hB(A.cs,""+A.k.V(s)+" kg","Your weight",120,20,new B.dWQ(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hB(A.cs,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dWR(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hB(A.cs,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dWS(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hB(A.cs,A.k.aa(r,1)+"x out","View",8,0.5,new B.dWT(p),r),new B.eQ(C.a([new B.fi(A.nj,"Fire!",p.gc7s(),A.b2,o),new B.fi(A.tN,"Falls",new B.dWU(p),A.c,o),new B.fi(A.r3,"Orbit 7.7",new B.dWK(p),A.c,o),new B.fi(D.bFA,"Oval 9",new B.dWL(p),A.c,o),new B.fi(A.BC,"Escape",new B.dWM(p),A.c,o)],w),o,o)],w))}return B.jK(A.cs,A.ha,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bLi(){return new C.D(D.bq8,C.cp(new B.dWr(this)),null)},
cBN(){var w,v,u,t=null,s=[D.eCQ,D.eEi,D.eEq,D.eEJ,D.eEo,D.eEP,D.eDp,D.eFb,D.eE2],r=x.p,q=C.a([D.fhH,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.D(A.cz,new C.cm(A.aO,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.x(v.a,t,new C.G(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bD(1,A.bh,new C.Be(new B.dWt(this,v),t),t)],r),t),t))}q.push(A.at)
q.push(D.fjZ)
return C.cz(q,t,A.i_,t,t,A.ah,!1)},
bDt(){return C.cp(new B.dWp(this))}}
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
e.saq(new C.bT(A.A,0.5,A.x,i,0,C.a([A.K,A.aR.j(0.35),A.K],x.O),D.d6x,i).av(0,C.bU(g,p*1.1)))
d.ae(g,p*1.06,e)
e=C.N()
e.saq(D.edW.av(0,C.bU(g,p)))
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
m.F(new C.b5(f+A.d.gK(u).a*h,t+A.d.gK(u).b*h))
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
t=C.a([C.aH(k,k,k,k,D.mz,k,k,k,new B.epi(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.bqK(f,g,v,k),A.f1),1)
r=g.a
q=v<10?A.k.aa(v,1):B.GC(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.i7,A.L,k,k)
o=B.GC(v*v*v)
n=A.a.cb(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.at,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A6.IQ,A.L,k,k),A.bB,C.d(p+": "+B.GC(w*2)+" km wide. "+r+": "+B.GC(h*2)+" km wide.",k,k,k,k,k,k,A6.De,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bsf,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.PL[m]
r.push(new B.dA(w.a,l.e===m,new B.epj(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.PL[m]
w.push(new B.dA(s.a,l.f===m,new B.epk(l,m),k,C.b0(s.c),k))}return B.jK(A.bZ,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ev(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eQ(r,"FIRST",k),new B.eQ(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
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
w=new B.eWS(d)
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
k=C.hr(i,i,i,i,C.de(i,i,i,i,i,i,i,i,i,D.f3k,s.a),A.a4,A.ca,i,A.e_,A.c8)
k.ex()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbc(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbc(g)-6
h=g}k.a4(d,l.ad(0,new C.u(-w/2,h)))
j=C.hr(i,i,i,i,C.de(i,i,i,i,i,i,i,i,i,D.f6D,t.a),A.a4,A.ca,i,A.e_,A.c8)
j.ex()
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
this.bu4()}}
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
this.buD()}}
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
this.buG()}}
B.Pn.prototype={}
B.TW.prototype={
R(){return B.hL2()}}
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
E.dF(70,"",500,0.3,0.5,"sine")}}A.d.bo(w,new B.dE_())},
aYV(d){var w,v,u,t=this.Q
if(t.A(0,A.au))return
w=this.gb6O()
v=d.aB(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcl()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.Pn(t,u,1.2,new C.vz(1,30+A.cI.aj()*40,0.9,0.7).iB()))
B.lg("bell",60+A.k.V(12-u)*2,400,0.35)},
gb6O(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.K(m,new B.dDO(),C.U(m).k("K<1,M>")).fb(0,A.uX),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mz,n,n,n,new B.dDP(o,d),n,n,n,n,"Share",n)],m)
v=C.cp(new B.dDQ(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fs1(s)+" Suns"
t=B.hB(A.bt,s,"Mass",1,0,new B.dDS(o),u/t)
u=C.a([new B.dA("Star (10)",!1,new B.dDT(o),n,A.bt,n),new B.dA("Cygnus X-1 (21)",!1,new B.dDU(o),n,A.bt,n),new B.dA("Milky Way core (4 million)",!1,new B.dDV(o),n,A.bt,n),new B.dA("M87 (6.5 billion)",!1,new B.dDW(o),n,A.bt,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lR:D.G3
return B.jK(A.bt,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eQ(u,"LIKE",n),new B.eQ(C.a([new B.dA("Glowing ring",s,new B.dDX(o),n,A.bt,n),new B.dA("Bent light",r,new B.dDY(o),n,A.bt,n),new B.dA("Music",q,new B.dDZ(o),p,A.bt,n),new B.fi(A.k_,"Clear",new B.dDR(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
ae6(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.f_i,w,w,w),A.bB,C.d(e,w,2,w,w,w,w,L.zw,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b9i.prototype={
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.N()
w.r=D.bfe.gp(0)
b2.aY(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb6O()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
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
n=C.aq(A.v4,A.fk,d)
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
b1.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cMd,null).av(0,C.bU(u,b0)))
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
return new B.biU(new C.cs(null,x.A),new B.OS(A.cI),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
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
cup(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e4d
k.cx=D.e4g
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
r=t.ey(0,s).aG(0,0.9/(s*s))
w=p.fy.ad(0,r.aG(0,u))
p.fy=w
v=p.cx.aB(0,r.aG(0,u))
p.cx=v
w=p.fx.ad(0,w.aG(0,u))
p.fx=w
v=p.CW.ad(0,v.aG(0,u))
p.CW=v
q=new B.dV_(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mz,r,r,r,new B.dUQ(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bey(s,r),A.au),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bG,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ag.a78,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bU,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d2a[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dA(u.b,o,new B.dUR(s,u),r,A.h2,r))}l.push(new B.dA("Collide",s.ch,new B.dUS(s),A.y_,A.bZ,r))
o=C.a([new B.eQ(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hB(A.h2,""+n,"Arms",6,2,new B.dUT(s),n)
l=s.r
A.d.v(o,C.a([n,B.hB(A.h2,A.k.aa(l,1),"Winding",6,0.8,new B.dUU(s),l)],q))}n=s.as
o.push(B.hB(A.h2,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dUV(s),n))
n=s.ax
o.push(B.hB(A.h2,A.k.aa(n,1)+"x","Speed",4,0,new B.dUW(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lR:D.G3
o.push(new B.eQ(C.a([new B.dA("Dark matter",n,new B.dUX(s),r,A.bt,r),new B.dA("You are here",l,new B.dUY(s),r,A.aM,r),new B.dA("Music",w,new B.dUZ(s),t,A.h2,r)],q),r,r))
return B.jK(A.h2,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ev(new C.an(A.W,r,A.b0,A.r,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.bey.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.N()
w.r=D.bhi.gp(0)
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
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.c9T,a0).av(0,C.bU(o,a2)))
a3.ae(o,a2,t)}m=new B.d9u(a1.as)
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
f=C.hr(a0,a0,a0,a0,D.eXn,A.a4,A.ca,a0,A.e_,A.c8)
f.ex()
f.a4(a3,g.ad(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.biv.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bdn.j(0.6).gp(0)
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
R(){return new B.bjL(new C.cs(null,x.A),new B.OS(A.cI),$,A.bx,0,C.a([],x.X),null,null)}}
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
gcq3(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcgu(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mz,q,q,q,new B.eox(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ev(C.b3(q,q,q,new B.bq_(r,q),A.f1),r.d),1)
if(r.f==="seasons")w=r.gcq3()
else{w=r.gcgu()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A7.Tp,A.L,q,q),A.f,q,q,q,q,q,q,q,K.ahf,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A2.ya:A.iW
t=r.Q
s=t?A.lR:D.G3
s=C.a([new B.eQ(C.a([new B.dA("Seasons",n==="seasons",new B.eoy(r),A.yo,A.bu,q),new B.dA("Moon phases",n==="moon",new B.eoz(r),A.vy,A.bu,q),new B.dA(u,!1,new B.eoA(r),v,A.bu,q),new B.dA("Music",t,new B.eoB(r),s,A.bu,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hB(A.bu,D.d1v[A.o.E(A.k.bv(n*12),12)],"Month",1,0,new B.eoC(r),n)
v=r.z
A.d.v(s,C.a([n,B.hB(A.bu,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.eoD(r),v)],p))}else{p=r.w
s.push(B.hB(A.bu,""+(A.k.bv(p*29.5)+1),"Day of month",1,0,new B.eoE(r),p))}p=r.y
s.push(B.hB(A.bu,A.k.aa(p,1)+"x","Speed",4,0.2,new B.eoF(r),p))
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
b9.hO(u,t)
t=C.N()
t.saq(D.edY.av(0,C.bU(p,34)))
b9.ae(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aB(0,l).ey(0,p.aB(0,l).gcl())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.bfa.gp(0)
b9.ae(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ap,b4,b4,C.a([],x.v))
b7.F(new C.k1(C.bU(A.J,k)))
b9.qu(0,b7)
b7=i.aG(0,k).aG(0,0.35)
s=k*1.1
b6=C.N()
b6.saq(D.ee6.av(0,C.bU(A.J,s)))
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
f=C.hr(b4,b4,b4,b4,C.de(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aQt,b5),A.a4,A.ca,b4,A.e_,A.c8)
f.ex()
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
r.saq(new C.bT(new C.da(-0.5,0),1.1,A.x,b4,0,C.a([D.baW,D.afa],x.O),D.cTT,b4).av(0,C.bU(p,k)))
b9.ae(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.b8g.gp(0)
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
a4=a1.aB(0,p).ey(0,a1.aB(0,p).gcl())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.ase[a5]
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
b6.r=D.b8b.gp(0)
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
b3=C.hr(b4,b4,b4,b4,D.eXo,A.a4,A.ca,b4,A.e_,A.c8)
b3.ex()
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
this.btz()}}
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
this.btZ()}}
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
this.buC()}}
var z=a.updateTypes(["~()","R(to)","R(a41)","az<~>()","R(Cb)","H(to,H)","M(M,to)","R(C7)","R(YS)","R(aaZ)","R(uY)","R(a2F)","R(nj)","R(a_o)","R(abM)","H(H)","U1()","UD()","TS()","UR()","V9()","Vb()","U0()","Vv()","VK()","Vw()","Vs()","VR()","U_()","VW()","R(my)","Vm()","Vr()","aet(Y,H)","adl(Y,H)","~(a4<@,@>)","H(C7,C7)","n(eb)","R(aej)","R(a06)","R(Cl)","R(abt)","R(adp)","R(abc)","H(H,qG)","H(H,Cb)","n(qG)","~(qG,ai<n>,H)","qG?(Cb)","R(qG)","r(n,a_U)","R(PE)","~(Ao)","R(abj)","M(H?)","VY()","R(Fz)","R(acB)","M(H)","UE()","M(Pn)","R(a9S)","TX()","a7S()","~(AW,n,u,w,M)","~(n,to)","Vp()","V4(Y)","N4(Y)","Ul(Y,br<M>,br<M>)","W1()","UL()","TY()","UC()","Vn()","VA()","VV()","Vl()","~(n)","cq(aaF)","R(aaE)","US()","VJ()","UT()","TW()","UP()","VB()","Vx()","Un()","R(Pn)","~(b9)"])
B.fub.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fkH.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gK(d.e.split(". "))+"."},
$S:z+37}
B.fr9.prototype={
$1(d){var w
if(!this.a.Lo(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fra.prototype={
$1(d){return d.x},
$S:z+1}
B.fu8.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fu9.prototype={
$1(d){var w
if(!this.a.Lo(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fua.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e5E.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e5F.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e5G.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m9(v,A.dU,A.id)}},
$S:9}
B.e5R.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a9(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e5S.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e5N.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e5L.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dC(0,0,0,d,0,0),new B.e5M(w,this.b,e)))},
$S:1834}
B.e5M.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e5O.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVK().aja(0,u[1],u[2],u[3])
u[4].bI(0,new B.e5J(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e5K(w.a,v,w.f,w.r))},
$S:0}
B.e5J.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:181}
B.e5K.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bv(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e5P.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVK().ajX(t,u[1],s,u[3])
E.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e5I(w.a,v,w.e,w.f))},
$S:0}
B.e5I.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bv(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e5Q.prototype={
$0(){E.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e5H(w,this.b))},
$S:0}
B.e5H.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e5V.prototype={
$0(){var w=this.a
return w.m(new B.e5U(w))},
$S:0}
B.e5U.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e5W.prototype={
$0(){var w=this.a
return w.m(new B.e5T(w))},
$S:0}
B.e5T.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e5X.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.N9()},
$S:0}
B.e5Y.prototype={
$0(){return this.a.XJ(this.b)},
$S:0}
B.e5Z.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.N9():w.aUK()},
$S:2}
B.e6_.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.N9():w.aUK()},
$S:0}
B.elK.prototype={
$2(d,e){return d+e},
$S:1835}
B.em3.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.em2(w,d))},
$S:126}
B.em2.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.em4.prototype={
$0(){},
$S:0}
B.em5.prototype={
$0(){},
$S:0}
B.elM.prototype={
$0(){return this.a.m(new B.elL(this.b,this.c))},
$S:0}
B.elL.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.elB.prototype={
$1(d){return this.a.cx===d},
$S:32}
B.elC.prototype={
$1(d){return this.a.cx=d},
$S:27}
B.elD.prototype={
$1(d){return this.a.cy===d},
$S:32}
B.elE.prototype={
$1(d){return this.a.cy=d},
$S:27}
B.elF.prototype={
$1(d){return this.a.db===d},
$S:32}
B.elG.prototype={
$1(d){return this.a.db=d},
$S:27}
B.elH.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:32}
B.elI.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.J(0,d)},
$S:27}
B.elJ.prototype={
$0(){var w=this.a
return w.m(w.gavB())},
$S:0}
B.elz.prototype={
$1(d){return this.a.$1(!0)},
$S:81}
B.elA.prototype={
$1(d){return this.a.$1(!1)},
$S:138}
B.ely.prototype={
$1(d){return this.a.$1(!1)},
$S:199}
B.elX.prototype={
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
if(o.as==="ready")n.push(o.bCr(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rg[w].a+".":"You landed on every world!"
v=C.a([new B.fi(A.mv,"Again",new B.elS(o),A.c,p),new B.fi(A.oK,"Rebuild",new B.elT(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fi(A.iV,"Next world",new B.elU(o),A.b2,p))
n.push(B.hh2("Perfect landing!",w,A.b2,v))}if(o.as==="crashed")n.push(B.hh2("Crash!",o.at,A.cf,C.a([new B.fi(A.mv,"Try again",new B.elV(o),A.b2,p),new B.fi(A.oK,"Rebuild",new B.elW(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b0,A.r,n,p)},
$S:61}
B.elS.prototype={
$0(){var w=this.a
return w.m(w.gavB())},
$S:0}
B.elT.prototype={
$0(){var w=this.a
return w.m(new B.elP(w))},
$S:0}
B.elP.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.elU.prototype={
$0(){var w=this.a
return w.m(new B.elO(w))},
$S:0}
B.elO.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.elV.prototype={
$0(){var w=this.a
return w.m(w.gavB())},
$S:0}
B.elW.prototype={
$0(){var w=this.a
return w.m(new B.elN(w))},
$S:0}
B.elN.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.elY.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.elR(v,w))},
$S:0}
B.elR.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.elZ.prototype={
$1(d){return this.a.y=d},
$S:8}
B.em_.prototype={
$1(d){return this.a.Q=d},
$S:8}
B.em0.prototype={
$1(d){return this.a.z=d},
$S:8}
B.em1.prototype={
$0(){var w=this.a
return w.m(new B.elQ(w))},
$S:0}
B.elQ.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dEr.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hcn
if(q==null)q=$.hcn=B.cEv()
w=3
return C.b(C.iL(C.a([q,$.qP().beP("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kz(0,C.cP(J.q(s,1)))
q.m(new B.dEq(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:50}
B.dEq.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dE3.prototype={
$0(){return this.a.bTJ(C.aU(J.q(this.b,"group")))},
$S:0}
B.dE4.prototype={
$1(d){return A.a.aT(A.o.fT(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:295}
B.dEs.prototype={
$0(){return B.a7R("kick",0.25)},
$S:0}
B.dE5.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dE6.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dE7.prototype={
$0(){return B.a7R("kick",0.5)},
$S:0}
B.dE8.prototype={
$0(){return E.dF(1300+this.a.R8.aC(900),"",40,0,0.2,"square")},
$S:0}
B.dEa.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.t(0,u))v.W(0,u)
else{v.J(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.b4(u.d.e,new B.dE9(u)))u.cx=null
u.go=0},
$S:0}
B.dE9.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.axj(d)},
$S:z+11}
B.dE0.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dE1.prototype={
$0(){var w=this.a
return w.m(w.gc36())},
$S:0}
B.dE2.prototype={
$0(){return this.a.agN(null)},
$S:0}
B.dEh.prototype={
$0(){var w=this.a.as
return w==null?null:w.eU(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dEi.prototype={
$0(){return this.a.cyx(this.b.a)},
$S:0}
B.dEj.prototype={
$0(){return this.a.agN(this.b)},
$S:0}
B.dEk.prototype={
$1(d){var w=this.a
return w.m(new B.dEg(w,d))},
$S:6}
B.dEg.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dEl.prototype={
$0(){var w=this.a
return w.m(new B.dEf(w,this.b))},
$S:0}
B.dEf.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dEm.prototype={
$0(){var w=this.a
return w.m(new B.dEe(w))},
$S:0}
B.dEe.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dEn.prototype={
$0(){var w=this.a
return w.m(new B.dEd(w))},
$S:0}
B.dEd.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eU(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.K_},
$S:0}
B.dEo.prototype={
$0(){var w=this.a
return w.m(new B.dEc(w))},
$S:0}
B.dEc.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aXk()
else w.p2=null},
$S:0}
B.dEp.prototype={
$0(){var w=this.a
return w.m(new B.dEb(w))},
$S:0}
B.dEb.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.c_Q.prototype={
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
B.c_R.prototype={
$1(d){var w=new C.rH([],[]).pA(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:678}
B.feL.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)},
$S:217}
B.feM.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)||w.h(d,1)},
$S:217}
B.feN.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)!==w.h(d,1)},
$S:217}
B.feU.prototype={
$1(d){return!J.q(d,0)},
$S:217}
B.feV.prototype={
$1(d){var w=J.a6(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:217}
B.feW.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:217}
B.dGC.prototype={
$1(d){return this.a.ask(0)},
$S:9}
B.dGg.prototype={
$0(){var w=this.b
return this.a.cx=new C.K(w,C.hYc(),C.U(w).k("K<1,H>")).fL(0)},
$S:0}
B.dGj.prototype={
$1(d){return""+d},
$S:82}
B.dGD.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dGe.prototype={
$1(d){return this.a.ask(this.b)},
$S:9}
B.dGf.prototype={
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
B.dGk.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aw2(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.C7(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.my(0,w.e,o.m0(0.86,0.5))},
$S:0}
B.dG9.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dGa.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dGb.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dGc.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dGd.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.ac8(this.c)
if(v.ax)B.By("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gK(w)
v.CW=!1
if(v.ax)E.dF(140,"",250,0,0.3,"square")}},
$S:0}
B.dGl.prototype={
$0(){},
$S:0}
B.dGm.prototype={
$0(){return A.d.cC(this.a.e,this.b)},
$S:0}
B.dGn.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dGi.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bo(w.e,new B.dGh(v))
w.cy=null},
$S:0}
B.dGh.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dG8.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.my(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dGw.prototype={
$0(){var w=this.a
return w.m(new B.dGv(w))},
$S:0}
B.dGv.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dGx.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.x=u
return C.aE(A.c4,C.jz(C.b3(w,w,w,new B.bam(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dGq(v),w,w,w,new B.dGr(v),new B.dGs(v),new B.dGt(v),w,w,w,w,w,w,w,w,w,w,new B.dGu(v),w,w,w,!1,A.a8)},
$S:35}
B.dGu.prototype={
$1(d){return this.a.c4N(d.b)},
$S:49}
B.dGs.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cdf(u)
if(t!=null){v.as=t
v.at=u
return}w=v.awQ(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aB(0,u)}},
$S:44}
B.dGt.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dGr.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bXk(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bo(v,new B.dGo(w))
u=t.as
u.toString
v.push(new B.nj(u,w.a,w.b))
C.jR()}}t.z=t.as=null},
$S:37}
B.dGo.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dGq.prototype={
$1(d){return this.a.auS(d.b)},
$S:299}
B.dGy.prototype={
$0(){return this.a.byk(this.b.a)},
$S:0}
B.dGz.prototype={
$0(){return this.a.ask(this.b.a)},
$S:0}
B.dGA.prototype={
$0(){var w=this.a
return w.m(new B.dGp(w))},
$S:0}
B.dGp.prototype={
$0(){var w=this.a
w.aw2(0)
w.ay=null},
$S:0}
B.dGB.prototype={
$0(){return this.a.cum(this.b)},
$S:0}
B.cLh.prototype={
$0(){var w=this,v=null,u=C.hr(v,v,v,v,C.de(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.ca,v,A.e_,A.c8)
u.ex()
return u},
$S:310}
B.dMr.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dMq.prototype={
$0(){return this.a.d=null},
$S:0}
B.dMt.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bZ6()},
$S:123}
B.dMs.prototype={
$0(){return C.a5(this.a,!1).lR()},
$S:0}
B.ffb.prototype={
$0(){return D.dYE},
$S:z+55}
B.ffc.prototype={
$0(){return D.dwM},
$S:z+59}
B.ffd.prototype={
$0(){return D.dtE},
$S:z+62}
B.ffo.prototype={
$0(){return D.dY3},
$S:z+63}
B.ffq.prototype={
$0(){return D.dDa},
$S:z+66}
B.ffr.prototype={
$0(){return D.dwH},
$S:z+88}
B.ffs.prototype={
$0(){return D.dwK},
$S:z+17}
B.fft.prototype={
$0(){return D.dpP},
$S:z+18}
B.ffu.prototype={
$0(){return D.dzf},
$S:z+19}
B.ffv.prototype={
$0(){return D.dAT},
$S:z+20}
B.ffw.prototype={
$0(){return D.dAV},
$S:z+21}
B.ffe.prototype={
$0(){return D.dvT},
$S:z+22}
B.fff.prototype={
$0(){return D.dFU},
$S:z+23}
B.ffg.prototype={
$0(){return D.dXL},
$S:z+24}
B.ffh.prototype={
$0(){return D.dVN},
$S:z+25}
B.ffi.prototype={
$0(){return D.dEz},
$S:z+26}
B.ffj.prototype={
$0(){return D.dXT},
$S:z+27}
B.ffk.prototype={
$0(){return D.dvS},
$S:z+28}
B.ffl.prototype={
$0(){return D.dY2},
$S:z+29}
B.ffm.prototype={
$0(){return D.dvU},
$S:z+16}
B.ffn.prototype={
$0(){return D.dBa},
$S:z+31}
B.ffp.prototype={
$0(){return D.dEy},
$S:z+32}
B.eWp.prototype={
$2(d,e){return new B.aet($.bDo()[e],new B.eWo(e,this.a),null)},
$S:z+33}
B.eWo.prototype={
$0(){var w=this.a,v=F.aDk.h(0,$.bDo()[w].a)
$.arg=v==null?"music":v
C.a5(this.b,!1).c5(C.e8(new B.eWm(w),!1,null,x.H))},
$S:0}
B.eWm.prototype={
$1(d){return $.bDo()[this.a].e.$0()},
$S:39}
B.eWq.prototype={
$2(d,e){return new B.adl(D.aw6[e],new B.eWn(this.a,e),null)},
$S:z+34}
B.eWn.prototype={
$0(){return this.a.d.$1(D.aw6[this.b])},
$S:0}
B.eW5.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eW4.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eW3.prototype={
$1(d){var w=this
return new C.e0(new B.eW2(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eW2.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fhs,A.at,D.fnV,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aT(12,12)
m=new C.aT(12,12)
m=C.a([new C.bD(1,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.Di,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bq(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iH,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new C.bD(2,A.bh,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.Di,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bq(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iH,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dgO[l]
j=new C.aT(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}h=A.d.gK(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}g=A.d.gK(i)}else g=A.bG
f=new C.ay(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aE(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aS,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bq(j,j,j,j),d,d,A.n),d,d,d,A.fz,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eW0(a3,p,u,k),d,d,d,d,d,d,!1,A.a8))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.f7i,d,d,d,d,d,d,d,d,d),A.am,new C.cm(A.aO,A.e,A.j,A.m,d,A.p,d,0,m,d),A.N,new C.a7(d,44,C.cz(n,d,d,d,d,A.aO,!1),d),A.aB],w))}v.push(C.bG(A.zE,new B.eW1(t,r,q,u,a2),d))
return new C.D(new C.Q(0,0,0,a1.f.d),C.bl(!0,new C.cS(new C.aY(0,1/0,0,a0.a.b*0.86),C.cz(v,d,A5.vp,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:107}
B.eW0.prototype={
$0(){var w=this
return w.a.$1(new B.eW_(w.b,w.c,w.d))},
$S:0}
B.eW_.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eW1.prototype={
$0(){var w=this,v=w.a
v.m(new B.eVZ(v,w.b,w.c,w.d))
C.a5(w.e,!1).O(null)},
$S:0}
B.eVZ.prototype={
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
B.eWd.prototype={
$0(){var w=this.a
return w.m(new B.eWc(w))},
$S:0}
B.eWc.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eWe.prototype={
$0(){return B.qO(this.b,this.a.f,"scene")},
$S:0}
B.eWf.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gK(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZ1().x
w===$&&C.c()
return C.c0(v,new C.o(v,v,v,v,v,new C.bT(D.aW2,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bX],x.O),v,v),A.n),A.be)},
$S:326}
B.eWg.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f4(A.A,C.c6(new C.h5(C.a([u.gtU(),u.gZ1()],x.dS)),new B.eWb(u,this.b,v),w),A.f,A.ei),w,w,w)},
$S:259}
B.eWb.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtU().x
r===$&&C.c()
w=r<0.9?1:1-B.bqj(r,0.9,0.98)
v=s.gZ1().x
v===$&&C.c()
u=A.dC.aw(0,v)
switch(s.gaw3().a){case 0:s=s.bxw(t.b,r,u,t.c)
break
case 1:s=s.bNU(t.b,r,u,t.c)
break
case 2:s=s.cz2(t.b,r,u,t.c)
break
case 3:s=s.bAr(t.b,r,u,t.c)
break
case 4:s=s.bDF(t.b,r,u,t.c)
break
case 5:s=s.bCS(t.b,r,u,t.c)
break
default:s=null}return C.dc(s,w)},
$S:235}
B.eWh.prototype={
$2(d,e){var w=C.auH(this.b),v=this.c.d,u=C.aq(A.d.gK(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gK(v),A.d.gal(v),0.4)
v.toString
v=w.cHx(u,A.bG,v,3.5)
u=this.a
w=u.gtU().x
w===$&&C.c()
return C.a9E(C.kZ(null,null,null,1,0,new B.eWa(u),A.k.D(w,0,1)),v)},
$S:1839}
B.eWa.prototype={
$1(d){var w=this.a
w.gtU().sp(0,d)
if(w.as)w.m(new B.eW6(w))},
$S:6}
B.eW6.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eWi.prototype={
$0(){var w=this.a
w.gtU().sp(0,0)
w.afw()},
$S:0}
B.eWj.prototype={
$1(d){var w=this.a
w.m(new B.eW9(w,d))
if(w.as)w.afw()},
$S:6}
B.eW9.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eWk.prototype={
$0(){var w=this.a
w.m(new B.eW8(w,this.b))
w.gtU().sp(0,0)
if(w.as)w.afw()},
$S:0}
B.eW8.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eWl.prototype={
$0(){var w=this.a
return w.m(new B.eW7(w,this.b))},
$S:0}
B.eW7.prototype={
$0(){var w=C.C(this.b,x.G)
return this.a.w=w},
$S:0}
B.eVX.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1840}
B.eVY.prototype={
$1(d){return d.b},
$S:1841}
B.dgj.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dgk.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dgg.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dgh.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgi.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgl.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgm.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgn.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgo.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dgp.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.dgq.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.dgr.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.dgs.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dgt.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.el4.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.ekU.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.ekW.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+44}
B.ekX.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+45}
B.el_.prototype={
$1(d){var w=D.mB.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+46}
B.el0.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.C(new C.e9(new C.cQ(new C.a1(q,new B.el1(d),p.k("a1<1>")),new B.el2(r),p.k("cQ<1,qG?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aI(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.L)(n),++v){u=n[v]
if(w.length>=6)return
t=C.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.el1.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.el2.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.ekY.prototype={
$1(d){return D.mB.h(0,d.b).c===D.wE},
$S:z+49}
B.ekZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.elu.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v1(0,u)
w.aHp(A.o.an(v,1000))},
$S:9}
B.el3.prototype={
$0(){},
$S:0}
B.ekQ.prototype={
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
B.el6.prototype={
$1(d){var w=null,v=this.a.b
return C.bl(!0,C.v(C.a([A.N,C.dL(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mB.h(0,v).b,D.mB.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fyU,w,C.d(D.mB.h(0,v).a,w,w,w,w,w,w,A.hs,w,w,w),w,w,w),C.dL(!1,w,w,w,!0,w,w,w,!0,w,U.an_,w,w,w,w,new B.el5(d),!1,w,w,w,w,w,w,w,D.fqG,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
B.el5.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.el8.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e70],x.p)
for(w=0;w<6;++w){v=D.awp[w]
s.push(C.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bQb,u,u,u,u,new B.el7(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.kF,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.hs,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bl(!0,new C.cS(new C.aY(0,1/0,0,t.a.b*0.7),C.cz(s,u,D.bvJ,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:26}
B.el7.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.ekT.prototype={
$1(d){var w=null
return C.ek(C.a([C.bK(!1,A.de,w,w,!0,w,w,new B.ekR(d),w,w),C.bK(!1,A.Dn,w,w,!0,w,w,new B.ekS(d),w,w)],x.p),w,w,F.n3,D.fo5,w,w,w,w,D.fqY,w)},
$S:19}
B.ekR.prototype={
$0(){C.a5(this.a,!1).O(!1)
return null},
$S:0}
B.ekS.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.els.prototype={
$0(){var w=this.a
return w.m(new B.elr(w))},
$S:0}
B.elr.prototype={
$0(){return this.a.r=!1},
$S:0}
B.elt.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ar(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.me(new B.eli(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b4F:t
v=C.a([C.b3(u,t,t,new B.bgc(w,v,new B.elj(r),new B.elk(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e1(C.c6(w,new B.ell(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bFl())
return C.aE(A.c4,C.jz(new C.an(A.W,t,A.b0,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.elm(r),t,r.gcey(),t,new B.eln(r),new B.elo(r),new B.elp(r),t,t,t,t,t,t,t,t,t,t,new B.elq(r),t,t,t,!1,A.a8)},
$S:35}
B.eli.prototype={
$0(){return this.a.abe(this.b)},
$S:0}
B.elq.prototype={
$1(d){return this.a.cwO(d.b)},
$S:49}
B.elo.prototype={
$1(d){return this.a.cez(d.b)},
$S:44}
B.elp.prototype={
$1(d){return this.a.ceA(d.b)},
$S:18}
B.eln.prototype={
$1(d){return this.a.b_z()},
$S:37}
B.elm.prototype={
$1(d){return this.a.abV(d.b)},
$S:299}
B.elj.prototype={
$0(){return this.a.z},
$S:573}
B.elk.prototype={
$0(){return this.a.Q},
$S:696}
B.ell.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bJD()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bG,A.q,1)
t=C.a([D.fly,A.cV],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.L)(p),++r)t.push(new C.x(p[r],q,D.f63,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h7,q,q,q)},
$S:58}
B.ekV.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.D(A.e5,C.B(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,C.E(C.v(C.a([C.d(f,w,w,w,w,w,w,A7.Tp,w,w,w),A.bB,C.d(g,w,w,w,w,w,w,F.Tw,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1843}
B.ele.prototype={
$0(){var w=this.a.c
w.toString
return C.a5(w,!1).lR()},
$S:0}
B.elf.prototype={
$0(){var w=this.a
return w.m(new B.eld(w))},
$S:0}
B.eld.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.elg.prototype={
$0(){var w=this.a
return w.m(new B.elc(w))},
$S:0}
B.elc.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.elh.prototype={
$0(){var w=this.a
return w.m(new B.elb(w))},
$S:0}
B.elb.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ela.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mB.gdK(D.mB),w=w.gaf(w);w.C();){v=w.gS(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.L)(p),++r)u.push(s.crH(p[r]))
return new C.D(I.agv,C.v(C.a([new C.D(V.ai9,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.el9.prototype={
$0(){return this.a.c4S(this.b)},
$S:0}
B.dgf.prototype={
$0(){var w=this,v=null,u=C.hr(v,v,v,v,C.de(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.ca,v,A.e_,A.c8)
u.ex()
return u},
$S:310}
B.ex8.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bo(o,new B.ex6(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.ex7())},
$S:9}
B.ex6.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.ex7.prototype={
$0(){},
$S:0}
B.ewK.prototype={
$0(){},
$S:0}
B.ewJ.prototype={
$0(){},
$S:0}
B.ewT.prototype={
$0(){return B.qO(this.b,this.a.d,"spark-painter")},
$S:0}
B.ewV.prototype={
$1(d){return this.a.aXV(0,d.b)},
$S:44}
B.ewZ.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aB(0,u).gcl()>2.5}else w=!1
if(w)t.a.push(u)
v.aR_(u)
v.c7U(u)
return null},
$S:18}
B.ewU.prototype={
$1(d){return this.a.aXU()},
$S:37}
B.ex_.prototype={
$1(d){return this.a.aXV(0,d.b)},
$S:22}
B.ex0.prototype={
$1(d){return this.a.aXU()},
$S:49}
B.ex1.prototype={
$0(){var w=this.a
return w.m(new B.ewS(w,this.b))},
$S:0}
B.ewS.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ex2.prototype={
$0(){var w=this.a
return w.m(new B.ewR(w))},
$S:0}
B.ewR.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.ex3.prototype={
$0(){var w=this.a
return w.m(new B.ewQ(w,this.b))},
$S:0}
B.ewQ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ex4.prototype={
$1(d){var w=this.a
return w.m(new B.ewP(w,d))},
$S:6}
B.ewP.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ex5.prototype={
$0(){var w=this.a
return w.m(new B.ewO(w))},
$S:0}
B.ewO.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.ewW.prototype={
$0(){var w=this.a
return w.m(new B.ewN(w))},
$S:0}
B.ewN.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.ewX.prototype={
$0(){var w=this.a
return w.m(new B.ewM(w))},
$S:0}
B.ewM.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.ewY.prototype={
$0(){var w=this.a
return w.m(new B.ewL(w,this.b))},
$S:0}
B.ewL.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eDI.prototype={
$0(){return B.qO(this.b,this.a.d,"title")},
$S:0}
B.eDJ.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIB().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bZh(v[t],t,s,q,u))
return new C.D(A.fA,C.bV(A.fQ,w,A.rQ,0,0),null)},
$S:547}
B.eDK.prototype={
$1(d){return this.a.m(new B.eDH())},
$S:2}
B.eDH.prototype={
$0(){},
$S:0}
B.eDL.prototype={
$0(){var w=this.a
w.m(new B.eDG(w,this.b))
w=w.gIB()
w.iz(0,0)
w.cH(0)},
$S:0}
B.eDG.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eDM.prototype={
$0(){var w=this.a
return w.m(new B.eDF(w,this.b))},
$S:0}
B.eDF.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eDN.prototype={
$0(){var w=this.a
return w.m(new B.eDE(w))},
$S:0}
B.eDE.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eDO.prototype={
$0(){var w=this.a
return w.m(new B.eDD(w,this.b))},
$S:0}
B.eDD.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eDP.prototype={
$0(){var w=this.a.gIB()
w.iz(0,0)
w.cH(0)},
$S:0}
B.eDQ.prototype={
$1(d){var w=this.a
return w.m(new B.eDC(w,d))},
$S:6}
B.eDC.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ehB.prototype={
$1(d){return d.a.aB(0,this.a).gcl()<16},
$S:z+13}
B.ehC.prototype={
$1(d){var w=this.b
return d.a.aB(0,w).gcl()<16||d.a.aB(0,w).gcl()>this.a.r.galX()*2.2},
$S:z+13}
B.ehp.prototype={
$0(){return B.qO(this.b,this.a.d,"orbits")},
$S:0}
B.ehq.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ar(e.b,e.d)
q.r=p
w=q.gad8()
v=q.w
u=q.as
t=q.at
s=u==null?A.a2v:q.cia(u,q.gaVc())
return new C.ev(C.aE(A.c4,C.b3(r,r,r,new B.bkz(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.ehm(q),new B.ehn(q),new B.eho(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8),q.d)},
$S:195}
B.ehn.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:44}
B.eho.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.ehm.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aB(0,w).gcl()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_o(u,v.gaVc(),v.Q,v.b18(),C.a([],x.g)))
C.jR()
if(v.ax)E.dF(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.ehr.prototype={
$1(d){var w=this.a
return w.m(new B.ehl(w,d))},
$S:6}
B.ehl.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eht.prototype={
$1(d){var w=this.a
return w.m(new B.ehk(w,d))},
$S:6}
B.ehk.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ehu.prototype={
$1(d){var w=this.a
return w.m(new B.ehj(w,d))},
$S:6}
B.ehj.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ehv.prototype={
$0(){var w=this.a
return w.m(new B.ehi(w))},
$S:0}
B.ehi.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ehw.prototype={
$0(){var w=this.a
return w.m(new B.ehh(w))},
$S:0}
B.ehh.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.ehx.prototype={
$0(){var w=this.a
return w.m(new B.ehg(w))},
$S:0}
B.ehg.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.ehy.prototype={
$0(){var w=this.a
return w.m(w.gcu_())},
$S:0}
B.ehz.prototype={
$0(){var w=this.a
return w.m(w.gbFz())},
$S:0}
B.ehA.prototype={
$0(){var w=this.a
return w.m(new B.ehf(w))},
$S:0}
B.ehf.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.aqD(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hc())}},
$S:0}
B.ehs.prototype={
$0(){var w=this.a
return w.m(A.d.grz(w.e))},
$S:0}
B.eD9.prototype={
$1(d){return this.a.fS$-d.b>6000},
$S:695}
B.eDa.prototype={
$1(d){var w=this.a.e
return new C.a1(w,new B.eD8(d),C.U(w).k("a1<1>")).gM(0)>=3},
$S:695}
B.eD8.prototype={
$1(d){return d.a.aB(0,this.a.a).gcl()<14},
$S:z+53}
B.eCZ.prototype={
$0(){return B.qO(this.b,this.a.d,"swarm")},
$S:0}
B.eD_.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ev(C.aE(A.c4,C.b3(w,w,w,new B.bs4(v.e,v.f,v.ax,v.at,v.ay,v.fS$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eCW(v),new B.eCX(v),new B.eCY(v),w,w,w,w,w,w,w,w,new B.eCO(v),new B.eCP(v),new B.eCQ(v),w,w,w,!1,A.a8),v.d)},
$S:195}
B.eCX.prototype={
$1(d){return this.a.ay=d.b},
$S:44}
B.eCY.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eCW.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.eCP.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fS$))
if(w.ch)E.dF(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lg("flute",7,500,0.3)},
$S:22}
B.eCQ.prototype={
$1(d){return this.a.ay=null},
$S:49}
B.eCO.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eD0.prototype={
$0(){var w=this.a
return w.m(new B.eCV(w,this.b))},
$S:0}
B.eCV.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eD1.prototype={
$0(){var w=this.a
return w.m(new B.eCU(w,this.b))},
$S:0}
B.eCU.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a9(w.e)},
$S:0}
B.eD2.prototype={
$0(){var w=this.a
return w.m(new B.eCT(w))},
$S:0}
B.eCT.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eD3.prototype={
$1(d){var w=this.a
return w.m(new B.eCS(w,d))},
$S:6}
B.eCS.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eD4.prototype={
$1(d){var w=this.a
return w.m(new B.eCR(w,d))},
$S:6}
B.eCR.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eD5.prototype={
$1(d){var w=this.a
return w.m(new B.eCN(w,d))},
$S:6}
B.eCN.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eD6.prototype={
$1(d){var w=this.a
return w.m(new B.eCM(w,d))},
$S:6}
B.eCM.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eD7.prototype={
$1(d){var w=this.a
return w.m(new B.eCL(w,d))},
$S:6}
B.eCL.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dFL.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dFK(w,d))},
$S:126}
B.dFK.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jy(v==null?A.rl:v)
v=v.gaf(v)
while(v.C()){u=v.gS(v)
t.n(0,C.t(u.a),A.k.N(C.dQ(u.b)))}w.x=t
w.Q=!0
A.d.a9(w.d)},
$S:0}
B.dFM.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dFN.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Z2(w)>0},
$S:z+14}
B.dFB.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.azc()},
$S:0}
B.dFE.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eJ(w,F.kk,new C.D(A.bD,new C.a7(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.i7,w,w,w),A.S,C.E(C.ig(!0,w,w,A.y,S.aNR,new B.dFD(u,d),100,w,w,A.ah,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d0,w,new C.b7(v,A.Y),w)},
$S:47}
B.dFD.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dFC(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bZ:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b3:A.dr,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.jd
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aG("\u2605",n)+A.a.aG("\u2606",3-n),s,s,s,s,s,s,D.f9J,s,s,s))
return C.aE(s,C.p(s,C.v(o,A.m,s,A.bb,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a8)},
$S:74}
B.dFC.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.dFI.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gacb()
o=C.b3(q,q,q,new B.ba2(p.d,w,v,p.gc4Z(),q),o)
v=p.bWY("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gHY()
t=p.as>=p.gHY()?A.b2:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.B(C.a([v,p.au7("GOAL",""+w+" / "+u,t),p.au7("STARS",A.a.aG("\u2605",s)+A.a.aG("\u2606",3-s),A.aM)],r),A.m,q,A.hB,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lF)
if(p.Q&&!p.y)s.push(D.aVL)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.b2:A.cf).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b2:A.cf,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.am,C.d("You blasted "+p.as+" dots. The goal was "+p.gHY()+".",q,q,q,q,q,q,A.hD,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aG("\u2605",t==null?1:t),q,q,q,q,q,q,D.f0i,q,q,q))}u.push(A.aB)
t=C.a([new B.fi(A.mv,"Try again",new B.dFF(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fi(A.iV,"Next level",new B.dFG(p),A.b2,q))
u.push(C.B(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.VT,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aE(A.c4,new C.an(A.W,q,A.b0,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dFH(p),q,q,q,q,!1,A.a8)},
$S:35}
B.dFH.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fS$
E.dF(180,"",200,1,0.4,"sine")
C.jl()},
$S:22}
B.dFF.prototype={
$0(){var w=this.a
return w.m(w.gb3N())},
$S:0}
B.dFG.prototype={
$0(){var w=this.a
return w.aXW(w.r+1)},
$S:0}
B.dFJ.prototype={
$0(){var w=this.a
return w.m(w.gb3N())},
$S:0}
B.cKP.prototype={
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
$S:693}
B.ed4.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcNa()?this.a.cq7(w,v,d.b):w.aB(0,v).gcl())<24},
$S:z+56}
B.edt.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.edi.prototype={
$0(){var w=this.a
return w.m(new B.ed9(w))},
$S:0}
B.ed9.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.edj.prototype={
$0(){return B.qO(this.b,this.a.d,"marble-music")},
$S:0}
B.edk.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ev(C.aE(A.c4,C.b3(w,w,w,new B.bh6(v.e,v.f,v.at,v.ax,v.fS$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.edf(v),new B.edg(v),new B.edh(v),w,w,w,w,w,w,w,w,w,w,new B.ed8(v),w,w,w,!1,A.a8),v.d)},
$S:195}
B.ed8.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.ZN(w)
u.e.push(new B.Fz(w,w,v,u.aOD(v)))
if(u.ay)B.lg(u.z,v+12,700,0.5)}if(u.x==="erase")u.aRf(d.b)},
$S:49}
B.edg.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:44}
B.edh.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aRf(d.b)},
$S:18}
B.edf.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aB(0,w).gcl()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.ZN(t.ad(0,w).ey(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.Fz(w,t,v,u.aOD(v)))
if(u.ay)B.lg(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.edl.prototype={
$0(){var w=this.a
return w.m(new B.ede(w,this.b))},
$S:0}
B.ede.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.edm.prototype={
$0(){var w=this.a
return w.m(new B.edd(w,this.b))},
$S:0}
B.edd.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.edn.prototype={
$0(){var w=this.a
return w.m(new B.edc(w,this.b))},
$S:0}
B.edc.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.edo.prototype={
$1(d){var w=this.a
return w.m(new B.edb(w,d))},
$S:6}
B.edb.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.edp.prototype={
$0(){var w=this.a
return w.m(new B.eda(w))},
$S:0}
B.eda.prototype={
$0(){return this.a.axI("stairs")},
$S:0}
B.edq.prototype={
$0(){var w=this.a
return w.m(new B.ed7(w))},
$S:0}
B.ed7.prototype={
$0(){return this.a.axI("pinball")},
$S:0}
B.edr.prototype={
$0(){var w=this.a
return w.m(new B.ed6(w))},
$S:0}
B.ed6.prototype={
$0(){return this.a.axI("random")},
$S:0}
B.eds.prototype={
$0(){var w=this.a
return w.m(new B.ed5(w))},
$S:0}
B.ed5.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.egZ.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.eh_.prototype={
$0(){var w=this.b,v=new B.ad6(this.a.a,this.c)
v.c=w.fS$
return w.e.push(v)},
$S:0}
B.eh6.prototype={
$0(){var w=this.a
return w.m(new B.eh5(w))},
$S:0}
B.eh5.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.eh7.prototype={
$0(){return B.qO(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.eh8.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ar(e.b,e.d)
if(!u.f){u.f=!0
u.aQ_()}w=u.w
return new C.ev(C.aE(A.c4,C.b3(v,v,v,new B.bkA(u.e,u.gaXY(),6,u.gckf(),u.gcqA(),u.fS$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eh4(u),v,v,v,!1,A.a8),u.d)},
$S:195}
B.eh4.prototype={
$1(d){return this.a.c50(d.b)},
$S:49}
B.eh9.prototype={
$1(d){var w=this.a
return w.m(new B.eh3(w,d))},
$S:6}
B.eh3.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eha.prototype={
$0(){var w=this.a
return w.m(new B.eh2(w,this.b))},
$S:0}
B.eh2.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ehb.prototype={
$0(){var w=this.a
return w.m(new B.eh1(w,this.b))},
$S:0}
B.eh1.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ehc.prototype={
$0(){var w=this.a
return w.m(w.gbJz())},
$S:0}
B.ehd.prototype={
$0(){var w=this.a
return w.m(new B.eh0(w))},
$S:0}
B.eh0.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a9(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.ad6(v.aC(6),v.aj()))},
$S:0}
B.ehe.prototype={
$0(){var w=this.a
return w.m(A.d.grz(w.e))},
$S:0}
B.fus.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:142}
B.egt.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.egs(w,d))},
$S:126}
B.egs.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.x.v(0,w)},
$S:0}
B.egf.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.E(d,100)===w)this.a.a+=e},
$S:142}
B.eg9.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b8W(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.ega.prototype={
$0(){var w=this.a
A.d.a9(w.e)
w.f.a9(0)
w.r=null},
$S:0}
B.ege.prototype={
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
p=D.w0.h(0,v[u].a).a
o=w.aiJ(u)
v=D.w0.h(0,v[t].a).a
n=w.aiJ(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vT("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaY3()&&w.x.J(0,w.d)){B.vT("zap",12,300,0.5)
m=w.x
m=C.C(m,C.a3(m).k("co.E"))
B.vQ("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.egd.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a1<J.E>"),p=C.C(new C.a1(new C.cu(t,s),new B.egb(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.L)(p),++w)t.W(0,p[w])
s=x.S
v=C.T(s,s)
t.bI(0,new B.egc(r,v))
t.a9(0)
t.v(0,v)
A.d.cC(u.e,r)
u.r=null},
$S:0}
B.egb.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.E(d,100)===w},
$S:32}
B.egc.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:142}
B.egn.prototype={
$1(d){return""+d.b+" "+D.w0.h(0,d.a).c.toLowerCase()},
$S:403}
B.ego.prototype={
$0(){var w=this.a
return w.m(new B.egm(w))},
$S:0}
B.egm.prototype={
$0(){var w=this.a;++w.d
w.aw8(0)},
$S:0}
B.egp.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ar(e.b,e.d)
return C.aE(A.c4,C.b3(w,w,w,new B.bhO(v.e,v.f,v.r,v.gcB8(),w),A.f1),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.egi(v),new B.egj(v),new B.egk(v,e),w,w,w,w,w,w,w,w,w,w,new B.egl(v),w,w,w,!1,A.a8)},
$S:35}
B.egl.prototype={
$1(d){return this.a.c5n(d.b)},
$S:49}
B.egj.prototype={
$1(d){var w=this.a
return w.w=w.aY4(d.b)},
$S:44}
B.egk.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.egg(w,v,d,this.b))},
$S:18}
B.egg.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.egi.prototype={
$1(d){return this.a.w=null},
$S:37}
B.egq.prototype={
$0(){var w=this.a
return w.m(new B.egh(w,this.b))},
$S:0}
B.egh.prototype={
$0(){var w=this.a
w.d=this.b
w.aw8(0)},
$S:0}
B.egr.prototype={
$0(){return this.a.c5h(0,this.b.a)},
$S:0}
B.dop.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.E(d,100)].b,h=i.aB(0,j),g=new C.u(-h.b,h.a).ey(0,Math.max(h.gcl(),1))
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
$S:142}
B.dOv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dOu(w,d))},
$S:126}
B.dOu.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dOk.prototype={
$0(){var w,v,u=J.e3(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.auT[w.aC(4)]
return A.d.fZ(u)},
$S:23}
B.dOj.prototype={
$1(d){return B.fYr(d)==="*"},
$S:3}
B.dOl.prototype={
$1(d){return d!==this.a},
$S:3}
B.dOi.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vQ("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.vT("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga8H()[r]+" codes for "+C.t(D.Ch.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b05()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u)r.push(D.Ch.h(0,w[u]))
r="Protein built: "+A.d.aI(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vT("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dOt.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dr:e,u=C.m(8),t=f?C.I(A.b3,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b3:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.nd,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1847}
B.dOo.prototype={
$1(d){var w=D.dkv.h(0,d)
return w==null?A.c:w},
$S:670}
B.dOp.prototype={
$0(){var w=this.a
return w.m(new B.dOn(w,this.b))},
$S:0}
B.dOn.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.avs()},
$S:0}
B.dOq.prototype={
$0(){var w=this.a
return w.m(new B.dOm(w))},
$S:0}
B.dOm.prototype={
$0(){var w=this.a;++w.e
w.avs()},
$S:0}
B.dOr.prototype={
$0(){return this.a.aY2(this.b)},
$S:0}
B.dOs.prototype={
$0(){return this.a.aY2(this.b)},
$S:0}
B.dRk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dRj(w,d))},
$S:126}
B.dRj.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dR7.prototype={
$0(){},
$S:0}
B.dR6.prototype={
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
B.dR8.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a9(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dRc.prototype={
$1(d){var w=this.a
return w.m(new B.dRb(w,d))},
$S:6}
B.dRb.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dRd.prototype={
$1(d){var w=this.a
return w.m(new B.dRa(w,d))},
$S:6}
B.dRa.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dRe.prototype={
$1(d){var w=this.a
return w.m(new B.dR9(w,d))},
$S:6}
B.dR9.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dRf.prototype={
$0(){return this.a.a9T("drought")},
$S:0}
B.dRg.prototype={
$0(){return this.a.a9T("disease")},
$S:0}
B.dRh.prototype={
$0(){return this.a.a9T("foxes")},
$S:0}
B.dRi.prototype={
$0(){return this.a.a9T("rabbits")},
$S:0}
B.d3x.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eM()
k.dB(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.E(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.kh(new C.eq(e,l,l,A.cO,l,l,l,l,l,l,new C.G(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.ca,new C.ju(1),l,l,l,l,A.c8,l)
n.ex()
n.a4(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1849}
B.d3z.prototype={
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
$S:1850}
B.d3y.prototype={
$3(d,e,f){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.ca,w,A.e_,A.c8)
v.ex()
v.a4(this.a,new C.u(f,this.b.b+2))},
$S:1851}
B.bFs.prototype={
$2(d,e){return d+e.a*e.b},
$S:1852}
B.fp8.prototype={
$2(d,e){return e.a-d.a},
$S:1853}
B.dBW.prototype={
$2(d,e){return d+e},
$S:71}
B.dC8.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dC7(v,A.k.D((v.gvS()-w[v.e].guT())/Math.max(w[v.e].guT(),8),-1,1)*0.32,u))},
$S:9}
B.dC7.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dC9.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dC6(w,d))},
$S:126}
B.dC6.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.r.v(0,w)},
$S:0}
B.dBX.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.E(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dC1.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1854}
B.dC2.prototype={
$0(){var w=this.a
return w.m(new B.dC0(w))},
$S:0}
B.dC0.prototype={
$0(){var w=this.a;++w.e
A.d.h1(w.f,0,5,0)},
$S:0}
B.dC3.prototype={
$2(d,e){var w=null,v=this.a
return C.aE(A.c4,C.b3(w,w,w,new B.b97(v.w,this.b.a,v.f,v.gvS()===v.d[v.e].guT(),w),A.f1),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dC_(v,e),w,w,w,!1,A.a8)},
$S:35}
B.dC_.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cx0(v-1)},
$S:49}
B.dC4.prototype={
$0(){var w=this.a
return w.m(new B.dBZ(w,this.b))},
$S:0}
B.dBZ.prototype={
$0(){var w=this.a
w.e=this.b
A.d.h1(w.f,0,5,0)},
$S:0}
B.dC5.prototype={
$0(){var w=this.a
return w.m(new B.dBY(w))},
$S:0}
B.dBY.prototype={
$0(){return A.d.h1(this.a.f,0,5,0)},
$S:0}
B.cDm.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bx(C.cl(new C.u(d,s),20,w),A.ry)
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
B.fo7(v,"1",new C.u(d,s),A.bi,11)}},
$S:1855}
B.dVn.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dVm(w,v))},
$S:9}
B.dVm.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dVo.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dVl(w,d))},
$S:126}
B.dVl.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.w.v(0,w)},
$S:0}
B.dVd.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dVh.prototype={
$0(){var w=this.a
return w.m(new B.dVg(w))},
$S:0}
B.dVg.prototype={
$0(){return this.a.r++},
$S:0}
B.dVi.prototype={
$0(){var w=this.a
return w.m(new B.dVf(w,this.b))},
$S:0}
B.dVf.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dVj.prototype={
$1(d){var w=this.a
return w.m(new B.dVe(w,d))},
$S:6}
B.dVe.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dVk.prototype={
$1(d){return this.a.c5o(this.b,d)},
$S:6}
B.dbx.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bOS(d,e,f,g),m=this.b
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
$S:1856}
B.dby.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fo7(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1857}
B.dG7.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dG6(w,d))},
$S:126}
B.dG6.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dFQ.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jJ(90-(w-65)):d},
$S:14}
B.dFZ.prototype={
$1(d){return this.a.m(new B.dFY())},
$S:2}
B.dFY.prototype={
$0(){},
$S:0}
B.dG_.prototype={
$1(d){return this.a.m(new B.dFX())},
$S:2}
B.dFX.prototype={
$0(){},
$S:0}
B.dG0.prototype={
$0(){var w=this.a
return w.m(new B.dFW(w))},
$S:0}
B.dFW.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aWM()},
$S:0}
B.dG1.prototype={
$0(){var w=this.a
return w.m(new B.dFV(w))},
$S:0}
B.dFV.prototype={
$0(){return this.a.f=0},
$S:0}
B.dG2.prototype={
$0(){var w=this.a
return w.m(new B.dFU(w))},
$S:0}
B.dFU.prototype={
$0(){return this.a.f=1},
$S:0}
B.dG3.prototype={
$0(){var w=this.a
return w.m(new B.dFT(w,this.b))},
$S:0}
B.dFT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dG4.prototype={
$1(d){var w=this.a
return w.m(new B.dFS(w,d))},
$S:6}
B.dFS.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dG5.prototype={
$1(d){var w=this.a
w.m(new B.dFR(w,d))
if(w.ga9a()&&w.Q.J(0,w.x)){B.vT("zap",9,220,0.45)
w=w.Q
w=C.C(w,C.a3(w).k("co.E"))
B.vQ("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dFR.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bLu.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bLF.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bLA.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bLG.prototype={
$1(d){return this.a.Lo(d)&&!d.x},
$S:z+1}
B.bLH.prototype={
$2(d,e){return Math.max(d,this.a.azG(e))},
$S:z+6}
B.bLJ.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bLK(w))},
$S:z+5}
B.bLK.prototype={
$0(){return this.a.a},
$S:109}
B.bLI.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:75}
B.bLL.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bLM(w))},
$S:z+5}
B.bLM.prototype={
$0(){return this.a.a},
$S:109}
B.bLw.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bLx(w))},
$S:z+5}
B.bLx.prototype={
$0(){return this.a.a},
$S:109}
B.bLv.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:75}
B.bLy.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bLz(w))},
$S:z+5}
B.bLz.prototype={
$0(){return this.a.a},
$S:109}
B.bLt.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bLN.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bLB.prototype={
$1(d){return d!==this.b&&this.a.aFK(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bLE.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bLD.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bLC.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bGE.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bGF.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.ck8.prototype={
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
$S:181}
B.fFR.prototype={
$1(d){var w
$.W()
w=C.N()
w.r=d.gp(0)
return w},
$S:1858}
B.fFT.prototype={
$2(d,e){var w
$.W()
w=C.N()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bP
return w},
$S:1859}
B.fFU.prototype={
$5(d,e,f,g,h){return C.bx(new C.a9(d,e,d+f,e+g),new C.aT(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1860}
B.fFS.prototype={
$3(d,e,f){var w
$.W()
w=C.N()
w.saq(new C.a8(A.b_,A.b5,A.x,C.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1861}
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
$S:1862}
B.bGl.prototype={
$1(d){return this.a.bB(d).a>15e5},
$S:406}
B.bGm.prototype={
$0(){var w,v,u
J.bDw(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Ck(v))if(B.fYU(v.b))w.b_2(v)
else w.a_2(v)
else{u=w.a.c.bbE(v)
w.adm(u==null?"The "+$.qb().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bGg.prototype={
$1(d){return new C.e0(new B.bGe(this.a,this.b),null)},
$S:21}
B.bGe.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bGf(this.a,v,e),t=$.qb(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.k9,w,w,w),q=C.aH(w,w,w,w,D.bGU,w,w,w,new B.bGa(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bl(!0,new C.D(A.xE,C.v(C.a([r,A.at,D.fzR,A.S,C.B(C.a([q,C.E(C.kZ(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bNu,w,w,w,new B.bGb(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.B(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b6,C.bK(!1,D.fdO,w,w,!0,w,w,new B.bGc(u),w,w),C.bK(!1,A.zE,w,w,!0,w,w,new B.bGd(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:84}
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
if(o.a.c.a.length===0)n.push(D.b3Y)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.cs,A.q,1)
n.push(C.ao(p,C.aE(p,C.p(p,C.B(C.a([D.fc3,C.E(C.d(w,p,p,p,p,p,p,D.f4k,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b9q,p,u,v,p,p,A.n),p,p,p,p,A.nX,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGy(o),p,p,p,p,p,p,!1,A.a8),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aY7(C.B(C.a([D.bxL,new B.fi(A.FP,"Cut wire",new B.bGz(o),A.cf,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cf6(w),p,p,10,10,p,p))}return C.jz(new C.an(A.W,p,A.b0,A.r,n,p),A.r,p)},
$S:345}
B.bGv.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b6_(s)
if(r!=null){t.m(new B.bGs(t,r,d))
return}w=t.b_J(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aB(0,s)
t.m(new B.bGt(t,w))}},
$S:44}
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
v=t.b6_(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ajX(u.a,u.b,v.a,v.b)!=null)E.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adk()},
$S:37}
B.bGx.prototype={
$1(d){var w=this.a,v=d.b,u=w.b_J(v)
if(u!=null){w.m(new B.bGo(w,u))
if(D.lY.ai(0,u.b))w.cpB(u)
w.a.toString
return}w.m(new B.bGp(w,w.cBY(v)))},
$S:49}
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
$0(){return this.a.bnw(this.b)},
$S:0}
B.bG5.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.eZW,w,w,w),C.E(C.kZ(this.b.d,w,w,g,h,new B.bG7(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1863}
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
$0(){return this.a.b_2(this.b)},
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
B.feX.prototype={
$1(d){return d.aFn("bulb")},
$S:z+2}
B.feY.prototype={
$1(d){return d.pK(0,"switch")&&d.aFn("bulb")},
$S:z+2}
B.feZ.prototype={
$1(d){return A.d.b4(d.a,new B.feK())},
$S:z+2}
B.feK.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.ff_.prototype={
$1(d){return d.pK(0,"resistor")&&A.d.b4(d.a,new B.feJ())},
$S:z+2}
B.feJ.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.ff0.prototype={
$1(d){return!d.pK(0,"battery")&&d.aFn("bulb")},
$S:z+2}
B.feO.prototype={
$1(d){return A.d.b4(d.a,new B.feI())},
$S:z+2}
B.feI.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.feP.prototype={
$1(d){return A.d.b4(d.a,new B.feH())},
$S:z+2}
B.feH.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.feQ.prototype={
$1(d){return A.d.b4(d.a,new B.feG())},
$S:z+2}
B.feG.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.feR.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.feE())&&A.d.b4(w,new B.feF())&&d.pK(0,"buck")},
$S:z+2}
B.feE.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.feF.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.feS.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.feC())&&A.d.b4(w,new B.feD())},
$S:z+2}
B.feC.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.feD.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.feT.prototype={
$1(d){return A.d.b4(d.a,new B.feB())},
$S:z+2}
B.feB.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dRs.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a9(0)
w.v(0,v.b)},
$S:0}
B.dRB.prototype={
$1(d){var w=this.a.d
return w.aFK(d)&&w.Ck(d)},
$S:z+1}
B.dRC.prototype={
$1(d){return d.x},
$S:z+1}
B.dRD.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dRE.prototype={
$0(){},
$S:0}
B.dRr.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fsN,A.at,D.fdK,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.PO[v]
t=A.c.j(0.06)
s=new C.aT(14,14)
r=new C.ay(A.bG,1,A.q,-1)
n.push(C.aE(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.k8,q,q,q,q,q,q,q,q,q),A.bB,new C.x(u.b,q,D.f54,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bq(s,s,s,s),q,q,A.n),q,q,q,A.cz,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dRq(w,d,u),q,q,q,q,q,q,!1,A.a8))}return C.eJ(q,F.kk,new C.D(A.bR,new C.a7(340,q,C.cz(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d0,q,new C.b7(p,A.Y),q)},
$S:47}
B.dRq.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new B.dRp(w,this.c))
E.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dRp.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bgI()},
$S:0}
B.dRn.prototype={
$1(d){return new B.V4(this.a.d,null)},
$S:z+67}
B.dRo.prototype={
$0(){},
$S:0}
B.dRA.prototype={
$1(d){return new C.e0(new B.dRz(this.a),null)},
$S:21}
B.dRz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahq(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b2:A.aR
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.B(C.a([D.fqb,A.b6,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.N,C.bw(C.m(4),C.m1(A.bG,m,m,5,m,w.a/11,new C.lV(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fgP)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ah.Tn,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.Dj,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.at,q,new C.bI(A.a7,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dRx(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bm,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aT(12,12)
n=new C.ay(o===l.f?f.j(0.6):A.dr,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(C.aE(m,C.p(m,new C.cm(A.aO,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a7C,m,m,m,m,m,m,m,m,m),A.av,new C.bD(1,A.bh,new C.x(r.a,m,new C.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bq(t,t,t,t),m,m,A.n),m,m,m,A.eK,A.nX,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dRy(l,o,e),m,m,m,m,m,m,!1,A.a8))}return C.bl(!0,new C.cS(new C.aY(0,1/0,0,k.a.b*0.75),C.cz(u,m,A5.vp,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:84}
B.dRx.prototype={
$0(){var w=this.a
w.m(new B.dRv(w))
this.b.$1(new B.dRw())
w.EL()},
$S:0}
B.dRv.prototype={
$0(){var w=this.a
$.ahq()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dRw.prototype={
$0(){},
$S:0}
B.dRy.prototype={
$0(){var w=this.a
w.m(new B.dRt(w,this.b))
this.c.$1(new B.dRu())
w.EL()},
$S:0}
B.dRt.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dRu.prototype={
$0(){},
$S:0}
B.dRG.prototype={
$0(){return C.a5(this.a,!1).lR()},
$S:0}
B.dRH.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.mb("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a5(t.b,!1).c5(C.e8(new B.dRF(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dRF.prototype={
$1(d){C.ln("construction")
return Am.hB6()},
$S:z+68}
B.dRI.prototype={
$0(){return B.hnc(this.a,"ELECTRONICS LAB",this.b,A.aR)},
$S:0}
B.dRJ.prototype={
$0(){var w=this.a
return w.m(w.d.gcTb())},
$S:0}
B.dRK.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grz(v))
w.EL()},
$S:0}
B.cAU.prototype={
$2(d,e){var w=null,v=this.a.gaw9().x
v===$&&C.c()
return C.b3(w,w,w,new B.b8f(v,w),A.au)},
$S:70}
B.cAT.prototype={
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
$S:559}
B.fKv.prototype={
$3(d,e,f){return new B.Ul(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fKw.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cZ(e,!1,C.il(A.A,g,null,new C.bf(C.cI(A.ct,e,null),new C.bp(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
B.dNo.prototype={
$0(){return C.a5(this.a,!1).lR()},
$S:0}
B.dNn.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bWL(o):q.bzu(o,p),m=x.p
p=C.a([C.qe(new C.nd(n,new C.cx(p,x.aC)),A.pK,C.rN(),A.bc,A.bc,new B.dNl())],m)
n=t.d
if(n){w=A.k.E(q.gRq(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.av],m)
if(w)m.push(D.bxx)
else m.push(A.b6)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b2:A.az,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.av)
p.push(C.ao(s,C.av(C.dk(s,C.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ew,new C.o(A.w,s,s,u,s,s,A.n),A.n8,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uy)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.K5,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wd)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.K5,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aE(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dNm(q),s,s,s,s,s,s,!1,A.a8),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b0,A.r,p,s),A.aq)},
$S:305}
B.dNl.prototype={
$2(d,e){var w=x.Y
return new C.cZ(e,!1,C.il(A.A,d,null,new C.bf(e,new C.bp(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:381}
B.dNm.prototype={
$0(){var w=this.a
return w.m(new B.dNk(w))},
$S:0}
B.dNk.prototype={
$0(){return this.a.e=null},
$S:0}
B.dNj.prototype={
$0(){var w=this.a
return w.m(new B.dNi(w,this.b))},
$S:0}
B.dNi.prototype={
$0(){return this.a.e=A.d.cJ(F.k1,this.b)},
$S:0}
B.dNh.prototype={
$0(){var w=this.a
return w.m(new B.dNg(w))},
$S:0}
B.dNg.prototype={
$0(){return this.a.e=0},
$S:0}
B.dNc.prototype={
$0(){var w=this.a
return w.m(new B.dNb(w))},
$S:0}
B.dNb.prototype={
$0(){return this.a.e=null},
$S:0}
B.dNf.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.B(C.a([D.fyk,A.av,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eD,p,p,p,D.faX,p,p,p),1),C.d(A.a.aT(A.o.u(C.dl(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aT(A.o.u(C.fZ(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qo,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kS,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.buo(w.gRq(),this.c.d,p),A.au)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b3,A.q,1)
s=C.m(10)
o=C.p(p,C.B(C.a([C.aE(p,C.p(p,p,A.f,p,p,A.K4,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dNe(w),p,p,p,p,p,p,!1,A.a8),A.ec,C.p(p,p,A.f,p,p,A.aaG,p,12,p,p,p,p,p,12),A.ec,C.p(p,p,A.f,p,p,F.Vf,p,12,p,p,p,p,p,12),A.av,C.E(C.d(F.k1[o].a,p,1,A.a2,p,p,p,A.a7t,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cC,p,p,p,24,p,p,A.fr,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.D(D.buk,C.p(p,C.bw(s,C.v(C.a([o,C.E(C.b3(p,p,p,new B.aec(r,w.gRq(),p),A.f1),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.ddv,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b3,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.D(A.ji,w.au9(F.k1[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.B(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lj,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.v(C.a([m,C.E(new C.an(A.W,p,A.b0,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,T.Lf,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:305}
B.dNe.prototype={
$0(){var w=this.a
return w.m(new B.dNd(w))},
$S:0}
B.dNd.prototype={
$0(){return this.a.e=null},
$S:0}
B.e8E.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e8D(w,d))},
$S:126}
B.e8D.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.fZ_(v)},
$S:0}
B.e8F.prototype={
$0(){},
$S:0}
B.e8u.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fZ_(v)
w.r.a9(0)
w.x=!1},
$S:0}
B.e8v.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvp().r){C.jR()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vT("click",s.c+s.d,60,0.4)
if(B.hnm(r.gvp(),q).b.a===r.gvp().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vQ("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.By("bell",D.aoy,700,0.45)
for(q=r.gvp().c,q=C.ea(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.u((A.o.E(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e8y.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ar(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aE(A.c4,C.b3(s,s,s,new B.bgh(r.gvp(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e8w(r),s,s,s,!1,A.a8),C.ao(s,C.e1(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aPo,s,s,s),C.d(""+u.a+"/"+r.gvp().c.a+" \u2605   mirrors "+w.a+"/"+r.gvp().r,s,s,s,s,s,s,V.a7b,s,s,s)],t),A.m,s,A.hB,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fjo("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b2,C.a([new B.fi(A.iV,"Next level",new B.e8x(r),A.b2,s)],t)))
return new C.an(A.W,s,A.b0,A.r,w,s)},
$S:61}
B.e8w.prototype={
$1(d){return this.a.c5K(d.b)},
$S:49}
B.e8x.prototype={
$0(){var w=this.a
return w.adq(w.d+1)},
$S:0}
B.e8z.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grz(v))},
$S:0}
B.e8A.prototype={
$0(){var w=this.a
return w.adq(w.d+1)},
$S:0}
B.e8B.prototype={
$0(){var w=this.a
return w.adq(w.d-1)},
$S:0}
B.e8C.prototype={
$0(){return this.a.adq(this.b)},
$S:0}
B.dgC.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.E(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:662}
B.dgF.prototype={
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
$S:1865}
B.dgD.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:459}
B.dgE.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:459}
B.e8X.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e8W(w,d))},
$S:126}
B.e8W.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e8Y.prototype={
$0(){},
$S:0}
B.e8I.prototype={
$1(d){return d===0},
$S:118}
B.e8R.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a7l,s,s,s)
w=r.z==="play"?A.k.dw(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cf:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,V.a7b,s,s,s)],v),A.m,s,A.hB,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dr:p
t=C.m(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b3,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.D(D.brE,w,s),C.E(C.B(C.a([C.E(new C.D(A.bU,C.v(C.a([t,A.am,C.d(q?"TARGET":"TARGET: "+r.gcx3(),s,s,s,s,s,s,D.aQe,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.D(A.bU,C.v(C.a([C.E(C.b3(s,s,s,new B.bgw(r.f,s),A.f1),1),A.am,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aQe,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fjo("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fi(A.iW,"Start",new B.e8O(r),A.b2,s)],v)))}if(r.z==="result")w.push(B.fjo(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fi(A.iV,"Next colour",new B.e8P(r),A.b2,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fjo("Finished! "+q,u,A.b2,C.a([new B.fi(A.mv,"Play again",new B.e8Q(r),A.b2,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:61}
B.e8O.prototype={
$0(){var w=this.a
return w.m(new B.e8K(w))},
$S:0}
B.e8K.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awd()},
$S:0}
B.e8P.prototype={
$0(){var w=this.a
return w.m(w.gc5I())},
$S:0}
B.e8Q.prototype={
$0(){var w=this.a
return w.m(new B.e8J(w))},
$S:0}
B.e8J.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awd()},
$S:0}
B.e8S.prototype={
$1(d){var w=this.a
return w.m(new B.e8N(w,d))},
$S:6}
B.e8N.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e8T.prototype={
$1(d){var w=this.a
return w.m(new B.e8M(w,d))},
$S:6}
B.e8M.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e8U.prototype={
$1(d){var w=this.a
return w.m(new B.e8L(w,d))},
$S:6}
B.e8L.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e8V.prototype={
$0(){var w=this.a
return w.m(w.gc5J())},
$S:0}
B.ffE.prototype={
$0(){return D.e_6},
$S:z+70}
B.ffF.prototype={
$0(){return D.dxj},
$S:z+71}
B.ffG.prototype={
$0(){return D.dtR},
$S:z+72}
B.ffH.prototype={
$0(){return D.dwJ},
$S:z+73}
B.ffI.prototype={
$0(){return D.dBG},
$S:z+74}
B.ffJ.prototype={
$0(){return D.dVQ},
$S:z+75}
B.ffK.prototype={
$0(){return D.dY1},
$S:z+76}
B.ffL.prototype={
$0(){return D.dB_},
$S:z+77}
B.ceM.prototype={
$0(){return C.a5(this.a,!1).lR()},
$S:0}
B.ceN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hqP(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aT(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dl,16)],t)
n=A.c.j(0.85)
j.push(C.aE(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.x(r.c,m,M.Tm,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lA,m,m,C.v(C.a([new C.x(r.a,m,D.f9z,m,m,m,m,m,m,m,m,m),A.cV,new C.x(r.b,m,new C.G(!0,n,m,m,m,m,12,A.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bq(q,q,q,q),p,new C.a8(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bD,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.ceL(d,r),m,m,m,m,m,m,!1,A.a8))}return C.bV(A.bz,j,A.bq,14,14)},
$S:173}
B.ceL.prototype={
$0(){return C.a5(this.a,!1).c5(C.e8(new B.ceK(this.b),!1,null,x.H))},
$S:0}
B.ceK.prototype={
$1(d){return this.a.f.$0()},
$S:39}
B.eIa.prototype={
$0(){var w=this.a
return w.w=w.d[w.b3d(w.f)]},
$S:0}
B.eI6.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cI.aj()*7},
$S:0}
B.eI5.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bO(0,A.c5)
w.w=""},
$S:0}
B.eI8.prototype={
$0(){var w=this.a
return w.m(new B.eI7(w,this.b))},
$S:0}
B.eI7.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cC(w,this.b)},
$S:0}
B.eI9.prototype={
$1(d){return this.a.aYx(0)},
$S:2}
B.dTG.prototype={
$0(){return B.By("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dTH.prototype={
$0(){},
$S:0}
B.dTB.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dTD.prototype={
$0(){return this.a.aYz(this.b)},
$S:0}
B.dTE.prototype={
$0(){var w=this.a
return w.m(new B.dTC(w))},
$S:0}
B.dTC.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dTF.prototype={
$0(){var w=this.a
return w.aYz(w.d)},
$S:0}
B.dEy.prototype={
$2(d,e){return d+e},
$S:86}
B.dEz.prototype={
$0(){},
$S:0}
B.dEt.prototype={
$2(d,e){return d+e},
$S:86}
B.dEw.prototype={
$0(){var w=this.a
return w.m(new B.dEv(w,this.b))},
$S:0}
B.dEv.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dEx.prototype={
$0(){var w=this.a
return w.m(new B.dEu(w))},
$S:0}
B.dEu.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dQX.prototype={
$0(){return B.qO(this.b,this.a.d,"drawing")},
$S:0}
B.dQY.prototype={
$1(d){var w=this.a
return w.m(new B.dQW(w,d))},
$S:44}
B.dQW.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHu(u,v,t))},
$S:0}
B.dQZ.prototype={
$1(d){var w=this.a
return w.m(new B.dQV(w,d))},
$S:18}
B.dQV.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dR_.prototype={
$1(d){var w=this.a
return w.m(new B.dQU(w,d))},
$S:22}
B.dQU.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHu(u,v,t))},
$S:0}
B.dR0.prototype={
$0(){var w=this.a
return w.m(new B.dQT(w,this.b))},
$S:0}
B.dQT.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dR1.prototype={
$1(d){var w=this.a
return w.m(new B.dQS(w,d))},
$S:6}
B.dQS.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dR2.prototype={
$0(){var w=this.a
return w.m(new B.dQR(w))},
$S:0}
B.dQR.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dR3.prototype={
$0(){var w=this.a
return w.m(new B.dQQ(w))},
$S:0}
B.dQQ.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dR4.prototype={
$0(){var w=this.a
return w.m(A.d.grz(w.e))},
$S:0}
B.dR5.prototype={
$0(){var w=this.a
return w.m(new B.dQP(w))},
$S:0}
B.dQP.prototype={
$0(){var w=this.a
w.x=D.avn[A.o.E(A.d.cJ(D.avn,w.x)+1,4)]},
$S:0}
B.eej.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
B.eek.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.By("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.eei(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.By("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.eei.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a9(0)},
$S:0}
B.eel.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.eeh(w))},
$S:11}
B.eeh.prototype={
$0(){var w=this.a
w.f.a9(0)
w.x=!1},
$S:0}
B.eep.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aE(w,C.mC(new B.een(v,e),w,A.bc,A.pK,w,w,new C.bp(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eeo(v,e),w,w,w,w,w,w,!1,A.a8)},
$S:74}
B.eeo.prototype={
$0(){return this.a.c6F(this.b)},
$S:0}
B.een.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dp(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fB(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bWo
if(o)v=q.a.r.t(0,q.b)?A.b2.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b2:A.b3,A.q,1)
if(o){r=C.dp()
r.fB(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fs(A.A,C.d(u[t],p,p,p,p,p,p,D.f6X,p,p,p),p,r,!0)
u=r}else u=D.fry
return C.fs(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:130}
B.eeq.prototype={
$0(){var w=this.a
return w.m(new B.eem(w,this.b))},
$S:0}
B.eem.prototype={
$0(){var w=this.a
w.d=this.b.a
w.arv()},
$S:0}
B.eer.prototype={
$0(){var w=this.a
return w.m(w.gbI6())},
$S:0}
B.epa.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.epb.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.ep8.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.ep9.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.ep7(w))},
$S:11}
B.ep7.prototype={
$0(){return this.a.f=-1},
$S:0}
B.epc.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.epd.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.epe.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aYy()},
$S:11}
B.epf.prototype={
$0(){return this.a.c6L(this.b)},
$S:0}
B.eDs.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:68}
B.eDB.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.D(A.kR,C.B(C.a([v,A.ab,new C.dq(1,A.cn,C.f4(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.ei),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1867}
B.eDx.prototype={
$1(d){return this.a.m(new B.eDw())},
$S:2}
B.eDw.prototype={
$0(){},
$S:0}
B.eDy.prototype={
$0(){var w=this.a
return w.m(new B.eDv(w,this.b))},
$S:0}
B.eDv.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eDz.prototype={
$1(d){var w=this.a
return w.m(new B.eDu(w,d))},
$S:6}
B.eDu.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eDA.prototype={
$0(){var w=this.a
return w.m(new B.eDt(w))},
$S:0}
B.eDt.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.ecZ.prototype={
$0(){},
$S:0}
B.ed_.prototype={
$0(){},
$S:0}
B.ecS.prototype={
$0(){var w=this.a
return w.m(new B.ecR(w))},
$S:0}
B.ecR.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a7R("hat",0.6)},
$S:0}
B.ecT.prototype={
$0(){var w=this.a
return w.m(new B.ecQ(w))},
$S:0}
B.ecQ.prototype={
$0(){this.a.y=1.1
B.lg("bell",36,200,0.4)},
$S:0}
B.ecU.prototype={
$0(){var w=this.a
return w.m(new B.ecP(w))},
$S:0}
B.ecP.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aC(Math.max(v,u)-t+1)
w.as=u
B.lg("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
B.ecV.prototype={
$0(){var w=this.a
return w.m(new B.ecO(w,this.b))},
$S:0}
B.ecO.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.ecW.prototype={
$1(d){var w=this.a
return w.m(new B.ecN(w,d))},
$S:6}
B.ecN.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.ecX.prototype={
$1(d){var w=this.a
return w.m(new B.ecM(w,d))},
$S:6}
B.ecM.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.ecY.prototype={
$1(d){var w=this.a
return w.m(new B.ecL(w,d))},
$S:6}
B.ecL.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.crG.prototype={
$0(){return C.a5(this.a,!1).lR()},
$S:0}
B.crH.prototype={
$0(){var w=this.a
return B.hnc(this.b,w.c,w.e,w.d)},
$S:0}
B.fOk.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.f_s,v,v,v)
return C.ek(C.a([C.bK(!1,D.fgU,v,v,!0,v,v,new B.fOj(d),v,v)],x.p),v,v,F.n3,w,v,v,v,new C.b7(u,new C.ay(s,1,A.q,-1)),t,v)},
$S:19}
B.fOj.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.crC.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crB.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crI.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crD.prototype={
$0(){var w=this.a
A.d.W(w.fp$,this.b.bg())
if(w.c!=null)this.c.$0()},
$S:0}
B.crF.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.kZ$.a)/1e6,0,0.04)
w.kZ$=d
w.fS$=A.o.an(v,1000)
w.lv(u)
if(w.c!=null)w.m(new B.crE())},
$S:9}
B.crE.prototype={
$0(){},
$S:0}
B.ceI.prototype={
$0(){var w=this
return B.lg(w.a,w.b,w.c,w.d)},
$S:1}
B.dWo.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dWn(w,d))},
$S:z+79}
B.dWn.prototype={
$0(){return this.a.crj(this.b)},
$S:0}
B.dVR.prototype={
$0(){var w,v,u,t=this.a,s=J.a6(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:539}
B.dVP.prototype={
$0(){return this.a.id=D.a2B},
$S:0}
B.dVQ.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a1<1>")
v=C.pb(new C.a1(w,new B.dVO(this.c),v),6,v.k("J.E"))
w=C.C(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dVO.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dVN.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ah)
return C.ek(C.a([C.bK(!1,A.pe,w,w,!0,w,w,new B.dVM(d),w,w)],x.p),w,w,F.n3,v,w,w,w,w,D.frC,w)},
$S:19}
B.dVM.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.dW9.prototype={
$0(){return B.qO(this.b,this.a.d,"earth")},
$S:0}
B.dWa.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVH()
r=p.z
o=C.a([C.aE(A.c4,C.b3(q,q,q,new B.beI(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dVY(p),new B.dVZ(p),new B.dW_(p),q,q,q,q,q,q,q,new B.dW0(p),q,q,q,!1,A.a8)],x.p)
if(p.r==null)o.push(Ab.abi)
w=this.b
if(w!=null)o.push(C.ao(8,p.c7m(w),q,q,10,10,q,q))
return new C.ev(new C.an(A.W,q,A.b0,A.r,o,q),p.d)},
$S:195}
B.dVZ.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:243}
B.dW_.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVH()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:206}
B.dVY.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVH()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:505}
B.dW0.prototype={
$1(d){var w=this.a,v=w.c7p(d.b)
if(v!=null)w.m(new B.dVS(w,v))
else w.m(new B.dVT(w))},
$S:49}
B.dVS.prototype={
$0(){return this.a.awH(this.b)},
$S:0}
B.dVT.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dWb.prototype={
$0(){var w=this.a
w.e.bO(0,A.c5)
w.m(new B.dVX(w,this.b))},
$S:0}
B.dVX.prototype={
$0(){var w=this.a
w.id=D.a2B
w.awH(this.b)},
$S:0}
B.dWf.prototype={
$0(){var w=this.a
return w.m(new B.dW8(w))},
$S:0}
B.dW8.prototype={
$0(){var w=this.a
w.fx=null
w.asF(15,w.y,1)},
$S:0}
B.dWg.prototype={
$0(){var w=this.a
return w.m(new B.dW7(w,this.b))},
$S:0}
B.dW7.prototype={
$0(){var w=this.b.b
return this.a.asF(w.a,w.b,w.c)},
$S:0}
B.dWh.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dW6(w,v))},
$S:0}
B.dW6.prototype={
$0(){var w=this.b.a
return this.a.awH(w[A.cI.aC(w.length)])},
$S:0}
B.dWi.prototype={
$1(d){var w=this.a
return w.m(new B.dW5(w,d))},
$S:6}
B.dW5.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dWj.prototype={
$1(d){var w=this.a
return w.m(new B.dW4(w,d))},
$S:6}
B.dW4.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dWk.prototype={
$1(d){var w=this.a
return w.m(new B.dW3(w,d))},
$S:6}
B.dW3.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dWl.prototype={
$0(){var w=this.a
return w.m(new B.dW2(w))},
$S:0}
B.dW2.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dWm.prototype={
$0(){var w=this.a
return w.m(new B.dW1(w))},
$S:0}
B.dW1.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dWc.prototype={
$0(){var w=this.a
return w.m(new B.dVW(w))},
$S:0}
B.dVW.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dWd.prototype={
$0(){var w=this.a
return w.m(new B.dVV(w))},
$S:0}
B.dVV.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dWe.prototype={
$0(){var w=this.a
return w.m(new B.dVU(w))},
$S:0}
B.dVU.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dVL.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOR,w,w,w),A.uB,C.d(e,w,2,A.a2,w,w,w,A.TE,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:135}
B.dVK.prototype={
$0(){var w=this.a
return w.m(new B.dVJ(w))},
$S:0}
B.dVJ.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dcm.prototype={
$0(){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.cY3,w,w),this.a),A.a4,A.ca,w,A.e_,A.c8)
v.ex()
return v},
$S:310}
B.dcn.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1868}
B.ffx.prototype={
$0(){return D.dzg},
$S:z+81}
B.ffy.prototype={
$0(){return D.dXK},
$S:z+82}
B.ffz.prototype={
$0(){return D.dzi},
$S:z+83}
B.ffA.prototype={
$0(){return D.dtD},
$S:z+84}
B.ffB.prototype={
$0(){return D.dze},
$S:z+85}
B.ffC.prototype={
$0(){return D.dVR},
$S:z+86}
B.ffD.prototype={
$0(){return D.dVP},
$S:z+87}
B.eEl.prototype={
$0(){return C.a5(this.a,!1).lR()},
$S:0}
B.eEm.prototype={
$0(){var w=this.a
return w.m(new B.eEk(w))},
$S:0}
B.eEk.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaRs()+1,16)},
$S:0}
B.eEn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hqO(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aT(18,18)
q=s.d
p=new C.ay(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bhe],u)
k.push(C.aE(n,C.p(n,C.v(C.a([C.X(s.c,q,n,n,n,30),A.N,new C.x(s.a,n,D.f3V,n,A.L,n,n,n,n,2,n,n),A.cV,new C.x(s.b,n,D.f8Y,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.bb,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bq(r,r,r,r),n,new C.a8(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cp,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eEj(d,s),n,n,n,n,n,n,!1,A.a8))}return C.bV(A.fQ,k,A.bq,10,10)},
$S:173}
B.eEj.prototype={
$0(){return C.a5(this.a,!1).c5(C.e8(new B.eEi(this.b),!1,null,x.H))},
$S:0}
B.eEi.prototype={
$1(d){return this.a.e.$0()},
$S:39}
B.ewo.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.ewz.prototype={
$0(){return B.qO(this.b,this.a.d,"solar-system")},
$S:0}
B.ewA.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ar(e.b,e.d)
u.ch=t
t=C.a([C.aE(A.c4,C.b3(v,v,v,new B.brb(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eww(u),new B.ewx(u),v,v,v,v,v,v,v,new B.ewy(u),v,v,v,!1,A.a8)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c7r(w),v,v,10,10,v,v))
return new C.ev(new C.an(A.W,v,A.b0,A.r,t,v),u.d)},
$S:195}
B.eww.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:243}
B.ewx.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:206}
B.ewy.prototype={
$1(d){var w=this.a,v=w.c7u(d.b)
if(v!=null)w.aYU(v)},
$S:49}
B.ewB.prototype={
$0(){var w=this.a
return w.m(new B.ewv(w))},
$S:0}
B.ewv.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.ewC.prototype={
$0(){return this.a.aYU(this.b)},
$S:0}
B.ewD.prototype={
$1(d){var w=this.a
return w.m(new B.ewu(w,d))},
$S:6}
B.ewu.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.ewE.prototype={
$1(d){var w=this.a
return w.m(new B.ewt(w,d))},
$S:6}
B.ewt.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ewF.prototype={
$0(){var w=this.a
return w.m(new B.ews(w))},
$S:0}
B.ews.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.ewG.prototype={
$0(){var w=this.a
return w.m(new B.ewr(w))},
$S:0}
B.ewr.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.ewH.prototype={
$0(){var w=this.a
return w.m(new B.ewq(w))},
$S:0}
B.ewq.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ewI.prototype={
$0(){var w=this.a
return w.m(new B.ewp(w))},
$S:0}
B.ewp.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.ewn.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:295}
B.ewm.prototype={
$2(d,e){var w=null
return C.E(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOR,w,w,w),A.uB,C.d(e,w,2,A.a2,w,w,w,A.TE,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:135}
B.ewl.prototype={
$0(){var w=this.a
return w.m(new B.ewk(w))},
$S:0}
B.ewk.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eYI.prototype={
$0(){var w=null,v=C.hr(w,w,w,w,C.de(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.PW,w,w),this.a),A.a4,A.ca,w,A.e_,A.c8)
v.ex()
return v},
$S:310}
B.eYJ.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eYK.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dWs.prototype={
$0(){},
$S:0}
B.dWV.prototype={
$1(d){return d!=null},
$S:441}
B.dWH.prototype={
$0(){var w=this.a
return w.m(new B.dWy(w,this.b))},
$S:0}
B.dWy.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dWI.prototype={
$0(){var w=this.a
return w.m(new B.dWx(w))},
$S:0}
B.dWx.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dWJ.prototype={
$0(){var w=this.a
return w.m(new B.dWG(w))},
$S:0}
B.dWG.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dWN.prototype={
$0(){var w=this.a
return w.m(new B.dWF(w))},
$S:0}
B.dWF.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dWO.prototype={
$1(d){var w=this.a
return w.m(new B.dWE(w,d))},
$S:6}
B.dWE.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dWP.prototype={
$0(){var w=this.a
return w.m(w.gcux())},
$S:0}
B.dWQ.prototype={
$1(d){var w=this.a
return w.m(new B.dWD(w,d))},
$S:6}
B.dWD.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dWR.prototype={
$1(d){var w=this.a
return w.m(new B.dWC(w,d))},
$S:6}
B.dWC.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dWS.prototype={
$1(d){var w=this.a
return w.m(new B.dWB(w,d))},
$S:6}
B.dWB.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dWT.prototype={
$1(d){var w=this.a
return w.m(new B.dWA(w,d))},
$S:6}
B.dWA.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dWU.prototype={
$0(){var w=this.a
return w.m(new B.dWz(w))},
$S:0}
B.dWz.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dWK.prototype={
$0(){var w=this.a
return w.m(new B.dWw(w))},
$S:0}
B.dWw.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dWL.prototype={
$0(){var w=this.a
return w.m(new B.dWv(w))},
$S:0}
B.dWv.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dWM.prototype={
$0(){var w=this.a
return w.m(new B.dWu(w))},
$S:0}
B.dWu.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dWr.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.c0(g,new C.o(D.bfK,g,g,C.m(20),g,g,A.n),A.be),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yH[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.G(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.yH[q].b)+" m/s\xb2",g,D.f8k,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dr,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(X.N3,C.b0(D.yH[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yH[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yH[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yH[q].d).j(0.6),g,g,g,3,g,A.fr,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.v(C.a([j,A.at,new C.x(i,g,A.rL,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.f0D,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d7(v,new B.dWq()))a1.push(D.b4i)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:61}
B.dWq.prototype={
$1(d){return d==null},
$S:441}
B.dWt.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dk(v,v,v,v,A.bc,new C.o(v,v,v,C.m(8),v,new C.a8(A.a3,A.a7,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.id,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.GC(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.f6I,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:61}
B.dWp.prototype={
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
return new C.an(A.W,v,A.b0,A.r,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,A.bB,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aQv,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bU,v,v,v),v,v,12,12,8,v)],w),v)},
$S:61}
B.epi.prototype={
$0(){return B.qO(this.b,this.a.d,"size-compare")},
$S:0}
B.epj.prototype={
$0(){var w=this.a
return w.m(new B.eph(w,this.b))},
$S:0}
B.eph.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.epk.prototype={
$0(){var w=this.a
return w.m(new B.epg(w,this.b))},
$S:0}
B.epg.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eWS.prototype={
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
$S:693}
B.dE_.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dDO.prototype={
$1(d){return d.b},
$S:z+60}
B.dDP.prototype={
$0(){return B.qO(this.b,this.a.d,"black-hole")},
$S:0}
B.dDQ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.Q=o
o=C.aE(A.c4,C.b3(q,q,q,new B.b9i(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dDM(p),q,q,q,q,q,q,q,q,q,new B.dDN(p),q,q,q,q,!1,A.a8)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bG,A.q,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fs1(t)+" Suns"
t=p.ae6("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.B(C.a([t,p.ae6("EDGE WIDTH",(s<100?A.k.aa(s,1):B.GC(s))+" km"),p.ae6("TIME",A.k.aa(this.b*100,0)+"%"),p.ae6("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bU,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.ed4)
return new C.ev(new C.an(A.W,q,A.b0,A.r,r,q),p.d)},
$S:195}
B.dDN.prototype={
$1(d){return this.a.aYV(d.b)},
$S:22}
B.dDM.prototype={
$1(d){if(A.cI.aj()<0.12)this.a.aYV(d.b)},
$S:18}
B.dDS.prototype={
$1(d){var w=this.a
return w.m(new B.dDL(w,d))},
$S:6}
B.dDL.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dDT.prototype={
$0(){var w=this.a
return w.m(new B.dDK(w))},
$S:0}
B.dDK.prototype={
$0(){return this.a.r=10},
$S:0}
B.dDU.prototype={
$0(){var w=this.a
return w.m(new B.dDJ(w))},
$S:0}
B.dDJ.prototype={
$0(){return this.a.r=21},
$S:0}
B.dDV.prototype={
$0(){var w=this.a
return w.m(new B.dDI(w))},
$S:0}
B.dDI.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dDW.prototype={
$0(){var w=this.a
return w.m(new B.dDH(w))},
$S:0}
B.dDH.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dDX.prototype={
$0(){var w=this.a
return w.m(new B.dDG(w))},
$S:0}
B.dDG.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dDY.prototype={
$0(){var w=this.a
return w.m(new B.dDF(w))},
$S:0}
B.dDF.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dDZ.prototype={
$0(){var w=this.a
return w.m(new B.dDE(w))},
$S:0}
B.dDE.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dDR.prototype={
$0(){var w=this.a
return w.m(new B.dDD(w))},
$S:0}
B.dDD.prototype={
$0(){var w=this.a
A.d.a9(w.z)
w.as=0},
$S:0}
B.dV_.prototype={
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
$S:1869}
B.dUQ.prototype={
$0(){return B.qO(this.b,this.a.d,"galaxy")},
$S:0}
B.dUR.prototype={
$0(){var w=this.a
return w.m(new B.dUP(w,this.b))},
$S:0}
B.dUP.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.ZF()},
$S:0}
B.dUS.prototype={
$0(){var w=this.a
return w.m(new B.dUO(w))},
$S:0}
B.dUO.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.ZF()}w.cup()},
$S:0}
B.dUT.prototype={
$1(d){var w=this.a
return w.m(new B.dUN(w,d))},
$S:6}
B.dUN.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.ZF()},
$S:0}
B.dUU.prototype={
$1(d){var w=this.a
return w.m(new B.dUM(w,d))},
$S:6}
B.dUM.prototype={
$0(){var w=this.a
w.r=this.b
w.ZF()},
$S:0}
B.dUV.prototype={
$1(d){var w=this.a
return w.m(new B.dUL(w,d))},
$S:6}
B.dUL.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dUW.prototype={
$1(d){var w=this.a
return w.m(new B.dUK(w,d))},
$S:6}
B.dUK.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dUX.prototype={
$0(){var w=this.a
return w.m(new B.dUJ(w))},
$S:0}
B.dUJ.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dUY.prototype={
$0(){var w=this.a
return w.m(new B.dUI(w))},
$S:0}
B.dUI.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dUZ.prototype={
$0(){var w=this.a
return w.m(new B.dUH(w))},
$S:0}
B.dUH.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d9u.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1870}
B.eox.prototype={
$0(){return B.qO(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eoy.prototype={
$0(){var w=this.a
return w.m(new B.eow(w))},
$S:0}
B.eow.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.eoz.prototype={
$0(){var w=this.a
return w.m(new B.eov(w))},
$S:0}
B.eov.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.eoA.prototype={
$0(){var w=this.a
return w.m(new B.eou(w))},
$S:0}
B.eou.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.eoB.prototype={
$0(){var w=this.a
return w.m(new B.eot(w))},
$S:0}
B.eot.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.eoC.prototype={
$1(d){var w=this.a
return w.m(new B.eos(w,d))},
$S:6}
B.eos.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.eoD.prototype={
$1(d){var w=this.a
return w.m(new B.eor(w,d))},
$S:6}
B.eor.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eoE.prototype={
$1(d){var w=this.a
return w.m(new B.eoq(w,d))},
$S:6}
B.eoq.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eoF.prototype={
$1(d){var w=this.a
return w.m(new B.eop(w,d))},
$S:6}
B.eop.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aLv.prototype
w.buA=w.q
w=B.aKx.prototype
w.btA=w.q
w=B.aKy.prototype
w.btB=w.q
w=B.aKD.prototype
w.btG=w.q
w=B.aMm.prototype
w.bvy=w.q
w=B.aLt.prototype
w.buy=w.q
w=B.aLC.prototype
w.buH=w.q
w=B.aLI.prototype
w.buN=w.q
w=B.aKB.prototype
w.btE=w.q
w=B.aLq.prototype
w.buv=w.q
w=B.aLF.prototype
w.buK=w.q
w=B.aLo.prototype
w.but=w.q
w=B.aLp.prototype
w.buu=w.q
w=B.aKP.prototype
w.btT=w.q
w=B.aKt.prototype
w.btw=w.q
w=B.aKX.prototype
w.bu0=w.q
w=B.ax_.prototype
w.bqI=w.q
w=B.ax0.prototype
w.bqJ=w.q
w=B.aJ_.prototype
w.brZ=w.q
w=B.aKM.prototype
w.btP=w.q
w=B.aLd.prototype
w.bui=w.q
w=B.aLe.prototype
w.buj=w.q
w=B.aKz.prototype
w.btC=w.q
w=B.aKS.prototype
w.btW=w.q
w=B.aLm.prototype
w.bur=w.q
w=B.aLQ.prototype
w.buV=w.q
w=B.aKY.prototype
w.bu2=w.q
w=B.aKZ.prototype
w.bu3=w.q
w=B.aL_.prototype
w.bu4=w.q
w=B.aLy.prototype
w.buD=w.q
w=B.aLB.prototype
w.buG=w.q
w=B.aKw.prototype
w.btz=w.q
w=B.aKV.prototype
w.btZ=w.q
w=B.aLx.prototype
w.buC=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aDE.prototype,"gavB","c2B",0)
var r
v(r=B.aC3.prototype,"gcaS","caT",35)
w(r,"gc36","aXk",0)
w(B.aC6.prototype,"gc4K","c4L",0)
u(B.aCn.prototype,"gc4Q","c4R",52)
w(r=B.aGE.prototype,"gcu5","cu6",0)
w(r,"gchz","afw",0)
w(r,"gcfg","cfh",0)
w(r,"gc4P","ad6",3)
w(r=B.aDD.prototype,"gbFe","a8G",3)
w(r,"gcey","b_z",0)
w(r,"gcih","afE",3)
t(r,"gc4T","ad7",3)
w(B.aDT.prototype,"gbWs","bWt",0)
w(r=B.aDv.prototype,"gcu_","cu0",0)
w(r,"gbFz","bFA",0)
w(r=B.aC5.prototype,"gb3N","azc",0)
v(r,"gc4Z","Z2",54)
w(r,"gc4Y","ad9",3)
v(r=B.aDu.prototype,"gckf","axV",58)
v(r,"gcqA","az7",15)
w(r,"gbJz","aQ_",0)
v(r=B.aDs.prototype,"gcB8","aiJ",15)
t(r,"gc5i","aw8",0)
w(r,"gcmB","cmC",0)
v(r=B.aCz.prototype,"gc5j","c5k",90)
w(r,"gc5l","c5m",0)
t(r=B.a41.prototype,"grz","a9",0)
v(r,"gcR_","amx",1)
v(r,"gcNu","Lo",1)
w(r,"gcTb","bgI",0)
s(B.aif.prototype,"gc5q",0,5,null,["$5"],["qj"],64,0,0)
w(r=B.aCA.prototype,"gc5r","c5s",0)
w(r,"gcl3","ag0",3)
w(r,"gcb7","aej",3)
w(r,"gcs8","ah6",3)
w(r=B.aDe.prototype,"gc5I","awd",0)
w(r,"gc5J","aYb",0)
w(r=B.aE5.prototype,"gc6G","c6H",0)
t(r,"gc6E","aYx",0)
w(B.aDo.prototype,"gbI6","arv",0)
t(B.aDK.prototype,"gc6I","c6J",0)
v(r=B.aCL.prototype,"gc7n","c7o",78)
w(r,"gbN1","bN2",0)
w(r=B.aCM.prototype,"gcux","cuy",0)
w(r,"gc7s","c7t",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.ajq,B.FR,B.uK,B.aRo,B.a2F,B.b9l,B.c_P,B.xX,B.C7,B.nj,B.ba3,B.Ao,B.brT,B.q_,B.qG,B.Cb,B.YS,B.aej,B.a06,B.Cl,B.abc,B.abt,B.adp,B.FD,B.bkM,B.PE,B.a_o,B.abj,B.abM,B.Fz,B.acB,B.ad6,B.tb,B.b8W,B.aRe,B.eb,B.to,B.a9S,B.aaZ,B.a41,B.my,B.ba4,B.fK,B.m4,B.aVQ,B.btd,B.aHu,B.mB,B.aaE,B.aaF,B.uY,B.OT,B.xV,B.OS,B.bt8,B.Pn,B.aeo])
u(C.hV,[B.fub,B.fkH,B.fr9,B.fra,B.fu8,B.fu9,B.e5G,B.e5Z,B.em3,B.elB,B.elC,B.elD,B.elE,B.elF,B.elG,B.elH,B.elI,B.elz,B.elA,B.ely,B.elZ,B.em_,B.em0,B.dE4,B.dE6,B.dE9,B.dEk,B.c_Q,B.c_R,B.feL,B.feM,B.feN,B.feU,B.feV,B.feW,B.dGC,B.dGj,B.dGD,B.dGe,B.dG9,B.dGb,B.dGh,B.dGu,B.dGs,B.dGt,B.dGr,B.dGo,B.dGq,B.eWm,B.eW3,B.eWa,B.eWj,B.eVY,B.dgj,B.dgk,B.dgg,B.dgh,B.dgi,B.dgl,B.dgm,B.dgn,B.dgo,B.dgp,B.dgq,B.dgr,B.dgs,B.dgt,B.el_,B.el0,B.el1,B.el2,B.ekY,B.ekZ,B.elu,B.el6,B.el8,B.ekT,B.elq,B.elo,B.elp,B.eln,B.elm,B.ekV,B.ex8,B.ex6,B.ewV,B.ewZ,B.ewU,B.ex_,B.ex0,B.ex4,B.eDK,B.eDQ,B.ehB,B.ehC,B.ehn,B.eho,B.ehm,B.ehr,B.eht,B.ehu,B.eD9,B.eDa,B.eD8,B.eCX,B.eCY,B.eCW,B.eCP,B.eCQ,B.eD3,B.eD4,B.eD5,B.eD6,B.eD7,B.dFL,B.dFM,B.dFN,B.dFE,B.dFH,B.cKP,B.ed4,B.edt,B.ed8,B.edg,B.edh,B.edf,B.edo,B.eh4,B.eh9,B.egt,B.egb,B.egn,B.egl,B.egj,B.egk,B.egi,B.dOv,B.dOj,B.dOl,B.dOt,B.dOo,B.dRk,B.dRc,B.dRd,B.dRe,B.d3x,B.d3z,B.d3y,B.dC8,B.dC9,B.dC1,B.dC_,B.cDm,B.dVn,B.dVo,B.dVj,B.dVk,B.dbx,B.dby,B.dG7,B.dFQ,B.dFZ,B.dG_,B.dG4,B.dG5,B.bLu,B.bLF,B.bLA,B.bLG,B.bLI,B.bLv,B.bLt,B.bLN,B.bLB,B.bLE,B.bLD,B.bLC,B.bGE,B.fFR,B.fFU,B.fFS,B.bGl,B.bGg,B.bGf,B.bGD,B.bGv,B.bGw,B.bGu,B.bGx,B.bG5,B.bG7,B.bG3,B.bG4,B.bFW,B.bFX,B.feX,B.feY,B.feZ,B.feK,B.ff_,B.feJ,B.ff0,B.feO,B.feI,B.feP,B.feH,B.feQ,B.feG,B.feR,B.feE,B.feF,B.feS,B.feC,B.feD,B.feT,B.feB,B.dRB,B.dRC,B.dRr,B.dRn,B.dRA,B.dRF,B.cAT,B.fKv,B.fKw,B.e8E,B.e8w,B.dgC,B.dgF,B.e8X,B.e8I,B.e8S,B.e8T,B.e8U,B.ceK,B.eI9,B.dQY,B.dQZ,B.dR_,B.dR1,B.een,B.eDs,B.eDB,B.eDx,B.eDz,B.ecW,B.ecX,B.ecY,B.fOk,B.crF,B.dWo,B.dVO,B.dVN,B.dVZ,B.dW_,B.dVY,B.dW0,B.dWi,B.dWj,B.dWk,B.eEi,B.eww,B.ewx,B.ewy,B.ewD,B.ewE,B.ewn,B.eYJ,B.eYK,B.dWV,B.dWO,B.dWQ,B.dWR,B.dWS,B.dWT,B.dWq,B.eWS,B.dE_,B.dDO,B.dDN,B.dDM,B.dDS,B.dV_,B.dUT,B.dUU,B.dUV,B.dUW,B.d9u,B.eoC,B.eoD,B.eoE,B.eoF])
u(C.kk,[B.fua,B.e5L,B.e5J,B.elK,B.elX,B.dGa,B.dGx,B.dMt,B.eWp,B.eWq,B.eW2,B.eWf,B.eWg,B.eWb,B.eWh,B.eVX,B.ekW,B.ekX,B.elt,B.ell,B.ela,B.eDJ,B.ehq,B.eD_,B.dFD,B.dFI,B.edk,B.eh8,B.fus,B.egf,B.egc,B.egp,B.dop,B.bFs,B.fp8,B.dBW,B.dC3,B.bLH,B.bLJ,B.bLL,B.bLw,B.bLy,B.bGF,B.ck8,B.fFT,B.bGe,B.bGB,B.bGA,B.dRz,B.cAU,B.dNn,B.dNl,B.dNf,B.e8y,B.dgD,B.dgE,B.e8R,B.ceN,B.dEy,B.dEt,B.eep,B.dWa,B.dVL,B.dcn,B.eEn,B.ewA,B.ewm,B.dWr,B.dWt,B.dWp,B.dDQ])
u(C.ag,[B.V4,B.Vw,B.TX,B.U1,B.N5,B.aGD,B.Vv,B.VK,B.VW,B.Vs,B.VR,B.U_,B.Vm,B.Vr,B.Vp,B.Un,B.UD,B.TS,B.UR,B.U0,B.aid,B.UE,B.awH,B.Ul,B.V9,B.Vb,B.W1,B.UL,B.TY,B.UC,B.Vn,B.VA,B.VV,B.Vl,B.US,B.VY,B.VJ,B.UT,B.VB,B.TW,B.UP,B.Vx])
u(C.ah,[B.bjf,B.aLv,B.aKx,B.aKD,B.aCn,B.aMm,B.aLt,B.aLC,B.aLI,B.aLq,B.aLF,B.aKB,B.aLo,B.aLp,B.aDs,B.biK,B.aKP,B.aKt,B.aKX,B.biB,B.ax_,B.bwj,B.aJ_,B.aKM,B.aLd,B.aLe,B.aLQ,B.aKS,B.aKz,B.biL,B.aDo,B.aDK,B.bjZ,B.aLm,B.aKY,B.bk2,B.aLB,B.aL_,B.aLy,B.aKw,B.aKV,B.aLx])
u(C.j8,[B.e5E,B.e5F,B.e5R,B.e5S,B.e5N,B.e5M,B.e5O,B.e5K,B.e5P,B.e5I,B.e5Q,B.e5H,B.e5V,B.e5U,B.e5W,B.e5T,B.e5X,B.e5Y,B.e6_,B.em2,B.em4,B.em5,B.elM,B.elL,B.elJ,B.elS,B.elT,B.elP,B.elU,B.elO,B.elV,B.elW,B.elN,B.elY,B.elR,B.em1,B.elQ,B.dEr,B.dEq,B.dE3,B.dEs,B.dE5,B.dE7,B.dE8,B.dEa,B.dE0,B.dE1,B.dE2,B.dEh,B.dEi,B.dEj,B.dEg,B.dEl,B.dEf,B.dEm,B.dEe,B.dEn,B.dEd,B.dEo,B.dEc,B.dEp,B.dEb,B.dGg,B.dGf,B.dGk,B.dGc,B.dGd,B.dGl,B.dGm,B.dGn,B.dGi,B.dG8,B.dGw,B.dGv,B.dGy,B.dGz,B.dGA,B.dGp,B.dGB,B.cLh,B.dMr,B.dMq,B.dMs,B.ffb,B.ffc,B.ffd,B.ffo,B.ffq,B.ffr,B.ffs,B.fft,B.ffu,B.ffv,B.ffw,B.ffe,B.fff,B.ffg,B.ffh,B.ffi,B.ffj,B.ffk,B.ffl,B.ffm,B.ffn,B.ffp,B.eWo,B.eWn,B.eW5,B.eW4,B.eW0,B.eW_,B.eW1,B.eVZ,B.eWd,B.eWc,B.eWe,B.eW6,B.eWi,B.eW9,B.eWk,B.eW8,B.eWl,B.eW7,B.el4,B.ekU,B.el3,B.ekQ,B.el5,B.el7,B.ekR,B.ekS,B.els,B.elr,B.eli,B.elj,B.elk,B.ele,B.elf,B.eld,B.elg,B.elc,B.elh,B.elb,B.el9,B.dgf,B.ex7,B.ewK,B.ewJ,B.ewT,B.ex1,B.ewS,B.ex2,B.ewR,B.ex3,B.ewQ,B.ewP,B.ex5,B.ewO,B.ewW,B.ewN,B.ewX,B.ewM,B.ewY,B.ewL,B.eDI,B.eDH,B.eDL,B.eDG,B.eDM,B.eDF,B.eDN,B.eDE,B.eDO,B.eDD,B.eDP,B.eDC,B.ehp,B.ehl,B.ehk,B.ehj,B.ehv,B.ehi,B.ehw,B.ehh,B.ehx,B.ehg,B.ehy,B.ehz,B.ehA,B.ehf,B.ehs,B.eCZ,B.eCO,B.eD0,B.eCV,B.eD1,B.eCU,B.eD2,B.eCT,B.eCS,B.eCR,B.eCN,B.eCM,B.eCL,B.dFK,B.dFB,B.dFC,B.dFF,B.dFG,B.dFJ,B.edi,B.ed9,B.edj,B.edl,B.ede,B.edm,B.edd,B.edn,B.edc,B.edb,B.edp,B.eda,B.edq,B.ed7,B.edr,B.ed6,B.eds,B.ed5,B.egZ,B.eh_,B.eh6,B.eh5,B.eh7,B.eh3,B.eha,B.eh2,B.ehb,B.eh1,B.ehc,B.ehd,B.eh0,B.ehe,B.egs,B.eg9,B.ega,B.ege,B.egd,B.ego,B.egm,B.egg,B.egq,B.egh,B.egr,B.dOu,B.dOk,B.dOi,B.dOp,B.dOn,B.dOq,B.dOm,B.dOr,B.dOs,B.dRj,B.dR7,B.dR6,B.dR8,B.dRb,B.dRa,B.dR9,B.dRf,B.dRg,B.dRh,B.dRi,B.dC7,B.dC6,B.dBX,B.dC2,B.dC0,B.dC4,B.dBZ,B.dC5,B.dBY,B.dVm,B.dVl,B.dVd,B.dVh,B.dVg,B.dVi,B.dVf,B.dVe,B.dG6,B.dFY,B.dFX,B.dG0,B.dFW,B.dG1,B.dFV,B.dG2,B.dFU,B.dG3,B.dFT,B.dFS,B.dFR,B.bLK,B.bLM,B.bLx,B.bLz,B.bGi,B.bGj,B.bGh,B.bGk,B.bGm,B.bG8,B.bG9,B.bGa,B.bGb,B.bGc,B.bGd,B.bGC,B.bFM,B.bGs,B.bGt,B.bGq,B.bGr,B.bGo,B.bGp,B.bGy,B.bGn,B.bGz,B.bFN,B.bG6,B.bFT,B.bFU,B.bFS,B.bFV,B.bFR,B.bFY,B.bFZ,B.bG_,B.bG0,B.bFQ,B.bG1,B.bFP,B.bG2,B.bFO,B.dRs,B.dRD,B.dRE,B.dRq,B.dRp,B.dRo,B.dRx,B.dRv,B.dRw,B.dRy,B.dRt,B.dRu,B.dRG,B.dRH,B.dRI,B.dRJ,B.dRK,B.dNo,B.dNm,B.dNk,B.dNj,B.dNi,B.dNh,B.dNg,B.dNc,B.dNb,B.dNe,B.dNd,B.e8D,B.e8F,B.e8u,B.e8v,B.e8x,B.e8z,B.e8A,B.e8B,B.e8C,B.e8W,B.e8Y,B.e8O,B.e8K,B.e8P,B.e8Q,B.e8J,B.e8N,B.e8M,B.e8L,B.e8V,B.ffE,B.ffF,B.ffG,B.ffH,B.ffI,B.ffJ,B.ffK,B.ffL,B.ceM,B.ceL,B.eIa,B.eI6,B.eI5,B.eI8,B.eI7,B.dTG,B.dTH,B.dTB,B.dTD,B.dTE,B.dTC,B.dTF,B.dEz,B.dEw,B.dEv,B.dEx,B.dEu,B.dQX,B.dQW,B.dQV,B.dQU,B.dR0,B.dQT,B.dQS,B.dR2,B.dQR,B.dR3,B.dQQ,B.dR4,B.dR5,B.dQP,B.eej,B.eek,B.eei,B.eel,B.eeh,B.eeo,B.eeq,B.eem,B.eer,B.epa,B.epb,B.ep8,B.ep9,B.ep7,B.epc,B.epd,B.epe,B.epf,B.eDw,B.eDy,B.eDv,B.eDu,B.eDA,B.eDt,B.ecZ,B.ed_,B.ecS,B.ecR,B.ecT,B.ecQ,B.ecU,B.ecP,B.ecV,B.ecO,B.ecN,B.ecM,B.ecL,B.crG,B.crH,B.fOj,B.crC,B.crB,B.crI,B.crD,B.crE,B.ceI,B.dWn,B.dVR,B.dVP,B.dVQ,B.dVM,B.dW9,B.dVS,B.dVT,B.dWb,B.dVX,B.dWf,B.dW8,B.dWg,B.dW7,B.dWh,B.dW6,B.dW5,B.dW4,B.dW3,B.dWl,B.dW2,B.dWm,B.dW1,B.dWc,B.dVW,B.dWd,B.dVV,B.dWe,B.dVU,B.dVK,B.dVJ,B.dcm,B.ffx,B.ffy,B.ffz,B.ffA,B.ffB,B.ffC,B.ffD,B.eEl,B.eEm,B.eEk,B.eEj,B.ewo,B.ewz,B.ewB,B.ewv,B.ewC,B.ewu,B.ewt,B.ewF,B.ews,B.ewG,B.ewr,B.ewH,B.ewq,B.ewI,B.ewp,B.ewl,B.ewk,B.eYI,B.dWs,B.dWH,B.dWy,B.dWI,B.dWx,B.dWJ,B.dWG,B.dWN,B.dWF,B.dWE,B.dWP,B.dWD,B.dWC,B.dWB,B.dWA,B.dWU,B.dWz,B.dWK,B.dWw,B.dWL,B.dWv,B.dWM,B.dWu,B.epi,B.epj,B.eph,B.epk,B.epg,B.dDP,B.dDL,B.dDT,B.dDK,B.dDU,B.dDJ,B.dDV,B.dDI,B.dDW,B.dDH,B.dDX,B.dDG,B.dDY,B.dDF,B.dDZ,B.dDE,B.dDR,B.dDD,B.dUQ,B.dUR,B.dUP,B.dUS,B.dUO,B.dUN,B.dUM,B.dUL,B.dUK,B.dUX,B.dUJ,B.dUY,B.dUI,B.dUZ,B.dUH,B.eox,B.eoy,B.eow,B.eoz,B.eov,B.eoA,B.eou,B.eoB,B.eot,B.eos,B.eor,B.eoq,B.eop])
t(B.bwy,B.aLv)
t(B.aDE,B.bwy)
u(C.mL,[B.bge,B.bam,B.bri,B.b92,B.bpX,B.bpo,B.b9I,B.bpq,B.btn,B.bgc,B.brd,B.bkz,B.bs4,B.ba2,B.bh6,B.bkA,B.bhO,B.bd7,B.b97,B.beB,B.aif,B.b8f,B.buo,B.aec,B.bgh,B.bgw,B.buA,B.bpp,B.bkN,B.beI,B.brb,B.b9U,B.bqK,B.b9i,B.bey,B.bq_])
t(B.aKy,B.aKx)
t(B.aC3,B.aKy)
t(B.bwh,B.aKD)
t(B.aC6,B.bwh)
u(C.m8,[B.Ka,B.a_U,B.J6])
u(C.au,[B.bqk,B.aet,B.adl,B.PN,B.bqO,B.a7S,B.bct,B.b63,B.dA,B.eQ,B.av7,B.fi,B.F2])
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
C.jY(b.typeUniverse,JSON.parse('{"V4":{"ag":[],"r":[]},"bjf":{"ah":["V4"]},"Vw":{"ag":[],"r":[]},"aDE":{"ah":["Vw"]},"bge":{"aB":[]},"TX":{"ag":[],"r":[]},"aC3":{"ah":["TX"]},"U1":{"ag":[],"r":[]},"aC6":{"ah":["U1"]},"bam":{"aB":[]},"aet":{"au":[],"r":[]},"adl":{"au":[],"r":[]},"aGD":{"ag":[],"r":[]},"N5":{"ag":[],"r":[]},"aCn":{"ah":["N5"]},"bqk":{"au":[],"r":[]},"PN":{"au":[],"r":[]},"bri":{"aB":[]},"bqO":{"au":[],"r":[]},"b92":{"aB":[]},"aGE":{"ah":["aGD"]},"bpX":{"aB":[]},"bpo":{"aB":[]},"b9I":{"aB":[]},"bpq":{"aB":[]},"btn":{"aB":[]},"Vv":{"ag":[],"r":[]},"bgb":{"aB":[]},"aDD":{"ah":["Vv"]},"bgc":{"aB":[]},"VK":{"ag":[],"r":[]},"VW":{"ag":[],"r":[]},"bjQ":{"ah":["VK"]},"brd":{"aB":[]},"aDT":{"ah":["VW"]},"Vs":{"ag":[],"r":[]},"VR":{"ag":[],"r":[]},"U_":{"ag":[],"r":[]},"aDv":{"ah":["Vs"]},"bkz":{"aB":[]},"bjV":{"ah":["VR"]},"bs4":{"aB":[]},"aC5":{"ah":["U_"]},"ba2":{"aB":[]},"Vm":{"ag":[],"r":[]},"Vr":{"ag":[],"r":[]},"bju":{"ah":["Vm"]},"bh6":{"aB":[]},"aDu":{"ah":["Vr"]},"bkA":{"aB":[]},"Vp":{"ag":[],"r":[]},"Un":{"ag":[],"r":[]},"UD":{"ag":[],"r":[]},"aDs":{"ah":["Vp"]},"bhO":{"aB":[]},"biK":{"ah":["Un"]},"aCz":{"ah":["UD"]},"bd7":{"aB":[]},"TS":{"ag":[],"r":[]},"UR":{"ag":[],"r":[]},"U0":{"ag":[],"r":[]},"bio":{"ah":["TS"]},"b97":{"aB":[]},"biW":{"ah":["UR"]},"beB":{"aB":[]},"biB":{"ah":["U0"]},"aif":{"aB":[]},"aid":{"ag":[],"r":[]},"aie":{"ah":["aid"]},"UE":{"ag":[],"r":[]},"awH":{"ag":[],"r":[]},"aCA":{"ah":["UE"],"ez":[]},"b8g":{"ah":["awH"]},"b8f":{"aB":[]},"Ul":{"ag":[],"r":[]},"biI":{"ah":["Ul"]},"buo":{"aB":[]},"aec":{"aB":[]},"V9":{"ag":[],"r":[]},"Vb":{"ag":[],"r":[]},"bjh":{"ah":["V9"]},"bgh":{"aB":[]},"aDe":{"ah":["Vb"]},"bgw":{"aB":[]},"a7S":{"au":[],"r":[]},"W1":{"ag":[],"r":[]},"UL":{"ag":[],"r":[]},"TY":{"ag":[],"r":[]},"UC":{"ag":[],"r":[]},"Vn":{"ag":[],"r":[]},"VA":{"ag":[],"r":[]},"VV":{"ag":[],"r":[]},"Vl":{"ag":[],"r":[]},"aE5":{"ah":["W1"]},"buA":{"aB":[]},"biR":{"ah":["UL"]},"bpp":{"aB":[]},"bit":{"ah":["TY"]},"biL":{"ah":["UC"]},"bkN":{"aB":[]},"aDo":{"ah":["Vn"]},"aDK":{"ah":["VA"]},"bjZ":{"ah":["VV"]},"bjs":{"ah":["Vl"]},"bct":{"au":[],"r":[]},"b63":{"au":[],"r":[]},"dA":{"au":[],"r":[]},"eQ":{"au":[],"r":[]},"av7":{"au":[],"r":[]},"fi":{"au":[],"r":[]},"F2":{"au":[],"r":[]},"US":{"ag":[],"r":[]},"aCL":{"ah":["US"]},"beI":{"aB":[]},"VY":{"ag":[],"r":[]},"bk2":{"ah":["VY"]},"VJ":{"ag":[],"r":[]},"UT":{"ag":[],"r":[]},"VB":{"ag":[],"r":[]},"bjP":{"ah":["VJ"]},"brb":{"aB":[]},"aCM":{"ah":["UT"]},"b9U":{"aB":[]},"bjM":{"ah":["VB"]},"bqK":{"aB":[]},"TW":{"ag":[],"r":[]},"UP":{"ag":[],"r":[]},"Vx":{"ag":[],"r":[]},"bis":{"ah":["TW"]},"b9i":{"aB":[]},"biU":{"ah":["UP"]},"bey":{"aB":[]},"bjL":{"ah":["Vx"]},"bq_":{"aB":[]}}'))
C.Kb(b.typeUniverse,JSON.parse('{"mB":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lV<w?>"),e8:w("d4"),G:w("w"),l:w("bk<n,n>"),J:w("bk<n,M>"),I:w("bk<n,H>"),R:w("eI<n>"),Z:w("a_"),M:w("O<da>"),f5:w("O<a2B>"),gh:w("O<aRe>"),h:w("O<a2F>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<S>"),dh:w("O<Hq>"),aJ:w("O<az<aC>>"),w:w("O<a_>"),Q:w("O<ai<w>>"),B:w("O<ai<Hq>>"),gO:w("O<ai<ai<M>>>"),bj:w("O<ai<n>>"),b:w("O<ai<M>>"),fA:w("O<ai<H?>>"),D:w("O<a4<n,aC>>"),g:w("O<u>"),bz:w("O<to>"),ds:w("O<a8e>"),v:w("O<hp>"),U:w("O<+(u,M)>"),ev:w("O<+(u,H)>"),K:w("O<+(n,n)>"),fT:w("O<+(M,r)>"),E:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a_)>"),e:w("O<+(n,M,M,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,M,M,a4<n,M>)>"),_:w("O<uK>"),q:w("O<cR>"),fQ:w("O<a9S>"),s:w("O<n>"),cF:w("O<as>"),X:w("O<w7>"),F:w("O<aaE>"),p:w("O<r>"),bL:w("O<aaZ>"),fH:w("O<lj>"),aq:w("O<b8W>"),a_:w("O<abc>"),cS:w("O<abj>"),cB:w("O<nj>"),ba:w("O<abt>"),d9:w("O<Pn>"),bi:w("O<abM>"),eW:w("O<Cb>"),fY:w("O<YS>"),aX:w("O<Fz>"),ea:w("O<acB>"),gB:w("O<ad6>"),ed:w("O<PE>"),g4:w("O<bkM>"),aS:w("O<a_o>"),ac:w("O<adp>"),cd:w("O<Cl>"),fr:w("O<aej>"),e4:w("O<a06>"),r:w("O<aeo>"),au:w("O<aHu>"),f7:w("O<R>"),n:w("O<M>"),t:w("O<H>"),dS:w("O<aB?>"),fs:w("O<to?>"),d4:w("O<n?>"),bN:w("O<H?>"),gJ:w("cs<aie>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<S>"),ew:w("ai<aC>"),j:w("ai<@>"),bW:w("ai<H>"),a:w("a4<n,@>"),f:w("a4<@,@>"),bd:w("K<eb,n>"),dv:w("K<n,n>"),fR:w("K<+(M,r),r>"),m:w("iA"),gA:w("z2"),gD:w("vI"),P:w("cq"),C:w("aC"),W:w("to"),dV:w("eb"),g7:w("BU"),N:w("n"),bO:w("as"),k:w("kh"),Y:w("bp<M>"),cL:w("aaF"),gj:w("cx<n>"),aC:w("cx<H?>"),dg:w("e9<qG>"),e3:w("b9l"),a2:w("C7"),f3:w("qG"),es:w("FD"),gV:w("mZ"),y:w("R"),i:w("M"),z:w("@"),S:w("H"),L:w("ai<@>?"),fF:w("a4<@,@>?"),cK:w("aC?"),az:w("pT?"),T:w("n?"),cD:w("M?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWc=new C.da(0,0.85)
D.fxl=new C.x("Tap once to start the chain",null,K.Ty,null,null,null,null,null,null,null,null,null)
D.aVL=new C.bI(D.aWc,null,null,D.fxl,null)
D.aW2=new C.da(0,0.1)
D.aX6=new B.aRo(0,0,0)
D.K_=new B.aRo(0,0.5,0)
D.aXD=new C.ay(A.b2,1,A.q,-1)
D.aZ6=new C.aY(0,1/0,0,290)
D.aZd=new C.aY(16,1/0,16,1/0)
D.eZx=new C.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzG=new C.x("\u26a1",null,D.eZx,null,null,null,null,null,null,null,null,null)
D.b3P=new C.cr(A.A,null,null,D.fzG,null)
D.aPO=new C.G(!0,A.c1,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpJ=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aPO,null,A.L,null,null,null,null,null,null,null)
D.e6K=new C.D(A.nY,D.fpJ,null)
D.b3Y=new C.cr(A.A,null,null,D.e6K,null)
D.fto=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kG,null,A.L,null,null,null,null,null,null,null)
D.e6O=new C.D(A.nY,D.fto,null)
D.b4i=new C.cr(A.A,null,null,D.e6O,null)
D.f9i=new C.G(!0,A.jd,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy5=new C.x("Draw anywhere",null,D.f9i,null,null,null,null,null,null,null,null,null)
D.b4m=new C.cr(A.A,null,null,D.fy5,null)
D.ffZ=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aPO,null,A.L,null,null,null,null,null,null,null)
D.e7v=new C.D(A.Fk,D.ffZ,null)
D.b4F=new C.cr(A.A,null,null,D.e7v,null)
D.abD=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b7j=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b86=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.VR=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b8b=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b8g=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b8l=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.VT=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b9q=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b9v=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b9P=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.baW=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.acX=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bbo=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.As=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.bcb=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.adn=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bcN=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bcU=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.ady=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.Wv=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bdn=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.adI=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.adV=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.WG=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bf7=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bfa=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bfe=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bfn=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.aem=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bfK=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.ED=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bgS=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bh_=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bh3=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bhe=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bhi=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bhp=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.v9=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.afa=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.biv=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bje=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bjH=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bk6=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.afB=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bov=new C.b9(11e6)
D.bpw=new C.Q(0,0,8,6)
D.agy=new C.Q(0,0,9,0)
D.bq3=new C.Q(10,0,10,4)
D.bq8=new C.Q(10,10,10,6)
D.bqg=new C.Q(10,34,10,26)
D.bqo=new C.Q(10,6,10,2)
D.Y7=new C.Q(10,6,10,4)
D.bqq=new C.Q(10,8,0,10)
D.br0=new C.Q(12,8,8,8)
D.br5=new C.Q(14,0,14,22)
D.br7=new C.Q(14,0,14,30)
D.agZ=new C.Q(14,0,14,6)
D.ah5=new C.Q(14,10,8,12)
D.brE=new C.Q(14,8,14,6)
D.bs5=new C.Q(16,4,16,28)
D.bsf=new C.Q(16,8,16,12)
D.buk=new C.Q(26,12,26,58)
D.bv7=new C.Q(4,4,6,2)
D.bv9=new C.Q(4,4,8,2)
D.bvJ=new C.Q(8,14,8,12)
D.bvQ=new C.Q(8,40,8,30)
D.bvU=new C.Q(8,6,16,0)
D.bvV=new C.Q(8,6,8,8)
D.bwf=new C.Q(0,0,1.5,0)
D.aWT=new C.GP(26,"saturation")
D.bwx=new C.yJ(A.cU,D.aWT,null,A.abB)
D.ff2=new C.x("REACTION LAB",null,Y.aQp,null,null,null,null,A.a2,null,1,null,null)
D.bwE=new C.bD(1,A.bh,D.ff2,null)
D.f6c=new C.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fib=new C.x("CORE PROTOCOL",null,D.f6c,null,null,null,null,null,null,null,null,null)
D.bwR=new C.bD(1,A.bh,D.fib,null)
D.fiU=new C.x("\ud83d\udce2 NGMY Ads",null,A.qo,null,null,null,null,A.eD,null,1,null,null)
D.bxx=new C.bD(1,A.bh,D.fiU,null)
D.fdL=new C.x("Wire selected",null,A.hs,null,null,null,null,null,null,null,null,null)
D.bxL=new C.bD(1,A.bh,D.fdL,null)
D.akd=new C.a_(62712,"MaterialIcons",!1)
D.bCC=new C.a_(62878,"MaterialIcons",!1)
D.a_p=new C.a_(62908,"MaterialIcons",!1)
D.bCF=new C.a_(62918,"MaterialIcons",!1)
D.bCG=new C.a_(62931,"MaterialIcons",!1)
D.bCJ=new C.a_(62951,"MaterialIcons",!1)
D.bD_=new C.a_(63064,"MaterialIcons",!1)
D.bD1=new C.a_(63070,"MaterialIcons",!1)
D.y2=new C.a_(63128,"MaterialIcons",!1)
D.G3=new C.a_(63726,"MaterialIcons",!1)
D.bEl=new C.a_(983122,"MaterialIcons",!1)
D.bEA=new C.a_(983247,"MaterialIcons",!1)
D.bEM=new C.a_(983415,"MaterialIcons",!1)
D.bEN=new C.a_(983417,"MaterialIcons",!1)
D.bEO=new C.a_(983442,"MaterialIcons",!1)
D.bEP=new C.a_(983443,"MaterialIcons",!1)
D.alw=new C.a_(983467,"MaterialIcons",!1)
D.bEV=new C.a_(983501,"MaterialIcons",!1)
D.bF5=new C.a_(983616,"MaterialIcons",!1)
D.bF6=new C.a_(983624,"MaterialIcons",!1)
D.bFj=new C.a_(983776,"MaterialIcons",!1)
D.bFA=new C.a_(984561,"MaterialIcons",!1)
D.bGa=new C.ae(A.r8,24,A.aM,null,null,null)
D.bGU=new C.ae(A.Nz,null,A.ad,null,null,null)
D.bHr=new C.ae(A.mu,21,A.ad,null,null,null)
D.bEk=new C.a_(983117,"MaterialIcons",!1)
D.bIO=new C.ae(D.bEk,28,A.c,null,null,null)
D.bJ3=new C.ae(A.jk,18,null,null,null,null)
D.bKO=new C.ae(A.e6,21,A.cf,null,null,null)
D.bL2=new C.ae(A.mv,null,A.ad,null,null,null)
D.bLc=new C.ae(A.a0i,21,A.ad,null,null,null)
D.bM1=new C.ae(A.eC,17,A.ad,null,null,null)
D.amW=new C.ae(A.eC,19,null,null,null,null)
D.mz=new C.ae(A.vF,21,A.ad,null,null,null)
D.bNu=new C.ae(A.N0,null,A.ad,null,null,null)
D.bOD=new C.ae(A.jk,21,A.ad,null,null,null)
D.bPv=new C.ae(A.fe,20,A.aA,null,null,null)
D.bQb=new C.ae(A.dW,null,A.aM,null,null,null)
D.bQw=new C.ae(A.k_,null,A.aA,null,null,null)
D.dbx=w([A.di,A.d3,A.di],x.O)
D.bTn=new C.a8(A.a3,A.a7,A.x,D.dbx,null,null)
D.cQE=w([A.bO,A.bl],x.O)
D.bTv=new C.a8(A.b_,A.b5,A.x,D.cQE,null,null)
D.bTG=new C.a8(A.b_,A.b5,A.x,A.ax3,null,null)
D.cR_=w([A.fT,A.f5],x.O)
D.bTP=new C.a8(A.b_,A.b5,A.x,D.cR_,null,null)
D.anY=new C.a8(A.b_,A.b5,A.x,M.a1Z,null,null)
D.cOq=w([A.os,A.i9],x.O)
D.bUs=new C.a8(A.b_,A.b5,A.x,D.cOq,null,null)
D.cQm=w([A.ee,A.az],x.O)
D.ao4=new C.a8(A.b_,A.b5,A.x,D.cQm,null,null)
D.d60=w([A.dA,A.iQ,A.bl],x.O)
D.bUK=new C.a8(A.a3,A.a7,A.x,D.d60,null,null)
D.d66=w([A.je,A.cC],x.O)
D.bV3=new C.a8(A.b_,A.b5,A.x,D.d66,null,null)
D.cne=w([A.bO,A.dA],x.O)
D.bVc=new C.a8(A.a3,A.a7,A.x,D.cne,null,null)
D.axK=w([A.ee,L.n_],x.O)
D.bVj=new C.a8(A.b_,A.b5,A.x,D.axK,null,null)
D.bVB=new C.a8(A.b_,A.b5,A.x,I.aor,null,null)
D.bdu=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b6I=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cLP=w([D.bdu,D.b6I],x.O)
D.bVO=new C.a8(A.b_,A.b5,A.x,D.cLP,null,null)
D.bWo=new C.a8(A.ax,A.aC,A.x,A.a1W,null,null)
D.bhX=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dgV=w([D.bhX,A.Kx],x.O)
D.bWv=new C.a8(A.b_,A.b5,A.x,D.dgV,null,null)
D.cZn=w([A.az,A.w],x.O)
D.bWA=new C.a8(A.b_,A.b5,A.x,D.cZn,null,null)
D.bWD=new C.a8(A.b_,A.b5,A.x,S.ax7,null,null)
D.bhm=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bi5=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.czU=w([A.Li,D.bhm,D.bi5],x.O)
D.bWN=new C.a8(A.b_,A.b5,A.x,D.czU,null,null)
D.cny=w([A.d5,A.fy],x.O)
D.bX2=new C.a8(A.b_,A.b5,A.x,D.cny,null,null)
D.bX8=new C.a8(A.ax,A.aC,A.x,A.a2K,null,null)
D.aot=w([0,2,4,6,7,9,11],x.t)
D.bXK=w([0,4,7],x.t)
D.aoy=w([0,4,7,12],x.t)
D.bXL=w([0,4,7,4],x.t)
D.awP=w([A.h2,A.pE],x.O)
D.awl=w([A.hw,A.cY],x.O)
D.auN=w([A.bt,A.dQ],x.O)
D.cIp=w([A.aM,A.d5],x.O)
D.cOM=w([A.cf,A.eP],x.O)
D.d7c=w([A.bZ,A.lG],x.O)
D.auh=w([A.cs,A.jT],x.O)
D.cNn=w([A.bJ,A.aK],x.O)
D.bY4=w([D.awP,D.awl,A.a23,D.auN,D.cIp,D.cOM,A.avU,D.d7c,D.auh,D.cNn],x.Q)
D.c1J=w([120,220,380],x.t)
D.c5t=w([12,16,19,24],x.t)
D.c5C=w([1400,800,450,2400],x.t)
D.c9T=w([0,0.6,1],x.n)
D.ce1=w([250,450,900,1500],x.t)
D.b7w=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bhI=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bfM=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bkS=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.beY=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.atx=w([D.b7w,D.bhI,D.bfM,D.bkS,D.beY],x.O)
D.eAo=new C.z("type","Typewriter")
D.etf=new C.z("bounce","Bounce")
D.eBb=new C.z("wave","Wave")
D.eCg=new C.z("zoom","Zoom")
D.cuH=w([D.eAo,D.etf,D.eBb,A.a5R,I.aLK,D.eCg,I.aLM],x.K)
D.cuV=w([50,25,75],x.t)
D.cAp=w([0,5,10,15,18,20,25],x.t)
D.euT=new C.z("fish","Fish")
D.euV=new C.z("fly","Fireflies")
D.etd=new C.z("bird","Birds")
D.cEB=w([D.euT,D.euV,D.etd],x.K)
D.cIG=w([900,500,250,1600],x.t)
D.cMd=w([0.78,1],x.n)
D.auO=w([0,2,4,7,9,12,14,16],x.t)
D.cML=w([A.bt,A.bA,A.b8,A.bt],x.O)
D.auT=w(["A","T","C","G"],x.s)
D.cMM=w(["A","U","C","G"],x.s)
D.a1T=w([A.ay,A.c7,A.bk,A.aR,A.nP],x.O)
D.cO5=w([A.az,A.ay,A.cs,A.c7,A.bk,A.cy,A.ce,A.bA,A.Kx],x.O)
D.a1X=w([0.04,0.17,0.3],x.n)
D.cOI=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.GP=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eKi=new B.uK("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eKo=new B.uK("Medium engine","A good all-rounder.",0.3,0.9)
D.eKn=new B.uK("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.GQ=w([D.eKi,D.eKo,D.eKn],x._)
D.ejb=new C.z(6,"Easy")
D.ejP=new C.z(8,"Medium")
D.efj=new C.z(10,"Hard")
D.cPy=w([D.ejb,D.ejP,D.efj],x.E)
D.avc=w([0.55,0.78,1],x.n)
D.cR4=w([0.93,0.975,1],x.n)
D.avn=w([A.c,A.h3,A.ot,A.az],x.O)
D.fCE=new B.xV("Moon",1737,4291941851)
D.fCB=new B.xV("Earth",6371,4281908728)
D.fCF=new B.xV("Neptune",24622,4284524026)
D.fCG=new B.xV("Saturn",58232,4294829706)
D.fCC=new B.xV("Jupiter",69911,4294677052)
D.fCH=new B.xV("Sun",696340,4294688548)
D.fCI=new B.xV("Sirius A",119e4,4290763774)
D.fCz=new B.xV("Arcturus",179e5,4294818420)
D.fCA=new B.xV("Betelgeuse",531e6,4294472049)
D.fCD=new B.xV("UY Scuti",667e6,4293870660)
D.PL=w([D.fCE,D.fCB,D.fCF,D.fCG,D.fCC,D.fCH,D.fCI,D.fCz,D.fCA,D.fCD],C.ax("O<xV>"))
D.eFP=new C.bo("glow","Glow",A.a_r)
D.eDo=new C.bo("rainbow","Rainbow",A.nh)
D.eDL=new C.bo("stars","Stars",A.i2)
D.eD8=new C.bo("sparks","Sparks",A.dW)
D.eF5=new C.bo("fire","Fire",A.vG)
D.cST=w([D.eFP,D.eDo,D.eDL,D.eD8,D.eF5],x.c)
D.avr=w([A.bk,A.ay,A.c7,A.d3],x.O)
D.cTT=w([0.2,1],x.n)
D.eKf=new B.uK("Radar","Shows your height above the ground.",0.1,0)
D.eKg=new B.uK("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eKd=new B.uK("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.avz=w([D.eKf,D.eKg,D.eKd],x._)
D.eEl=new C.bo("attract","Attract",A.yj)
D.eE7=new C.bo("scare","Scare",A.r6)
D.eDh=new C.bo("food","Food",A.tZ)
D.bEq=new C.a_(983158,"MaterialIcons",!1)
D.eEE=new C.bo("hunt","Hunt",D.bEq)
D.cUv=w([D.eEl,D.eE7,D.eDh,D.eEE],x.c)
D.cUU=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cV8=w([47,100,220,470,1000],x.n)
D.avR=w([0,2,4,7,9],x.t)
D.HT={volts:0}
D.a3G=new C.bk(D.HT,[3],x.J)
D.If=new C.e7(["b","battery",0.2,0.3,D.a3G])
D.e26={on:0}
D.dlB=new C.bk(D.e26,[1],x.J)
D.D_=new C.e7(["s","switch",0.5,0.3,D.dlB])
D.eIo=new C.e7(["l","bulb",0.8,0.3,A.iZ])
D.cQL=w([D.If,D.D_,D.eIo],x.d)
D.CZ=new C.cD(["b",0,"s",0])
D.eHp=new C.cD(["s",1,"l",0])
D.aLQ=new C.cD(["l",1,"b",1])
D.d6b=w([D.CZ,D.eHp,D.aLQ],x.o)
D.cQe=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eeD=new B.my("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cQL,D.d6b,D.cQe)
D.aFY={ohms:0}
D.aDx=new C.bk(D.aFY,[220],x.J)
D.eHS=new C.e7(["r","resistor",0.5,0.3,D.aDx])
D.eID=new C.e7(["d","led",0.8,0.3,A.iZ])
D.d99=w([D.If,D.eHS,D.eID],x.d)
D.eGL=new C.cD(["b",0,"r",0])
D.eHj=new C.cD(["r",1,"d",0])
D.eGR=new C.cD(["d",1,"b",1])
D.dho=w([D.eGL,D.eHj,D.eGR],x.o)
D.d9z=w(["led","diode","indicator"],x.s)
D.eeK=new B.my("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d99,D.dho,D.d9z)
D.a4X={level:0}
D.dkY=new C.bk(D.a4X,[0.2],x.J)
D.eHY=new C.e7(["p","pot",0.5,0.3,D.dkY])
D.eI_=new C.e7(["m","motor",0.8,0.3,A.iZ])
D.cR2=w([D.If,D.eHY,D.eI_],x.d)
D.eGK=new C.cD(["b",0,"p",0])
D.eHf=new C.cD(["p",1,"m",0])
D.eHb=new C.cD(["m",1,"b",1])
D.ddr=w([D.eGK,D.eHf,D.eHb],x.o)
D.d5V=w(["fan","motor","spin","dimmer"],x.s)
D.eeB=new B.my("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cR2,D.ddr,D.d5V)
D.a3D=new C.bk(D.a4X,[0.9],x.J)
D.aLX=new C.e7(["s","solar",0.25,0.3,D.a3D])
D.aLW=new C.e7(["l","bulb",0.75,0.3,A.iZ])
D.cTA=w([D.aLX,D.aLW],x.d)
D.eHm=new C.cD(["s",0,"l",0])
D.eHa=new C.cD(["l",1,"s",1])
D.cRM=w([D.eHm,D.eHa],x.o)
D.de1=w(["solar","sun","without battery","no battery","free"],x.s)
D.eeE=new B.my("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cTA,D.cRM,D.de1)
D.eIG=new C.e7(["c","crank",0.25,0.3,D.a3D])
D.d4j=w([D.eIG,D.aLW],x.d)
D.eGO=new C.cD(["c",0,"l",0])
D.eH9=new C.cD(["l",1,"c",1])
D.d4R=w([D.eGO,D.eH9],x.o)
D.d4s=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eeA=new B.my("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d4j,D.d4R,D.d4s)
D.dkX=new C.bk(D.a4X,[0.7],x.J)
D.eI2=new C.e7(["t","turbine",0.25,0.3,D.dkX])
D.eHQ=new C.e7(["m","motor",0.75,0.3,A.iZ])
D.d__=w([D.eI2,D.eHQ],x.d)
D.eHx=new C.cD(["t",0,"m",0])
D.eHc=new C.cD(["m",1,"t",1])
D.cZ1=w([D.eHx,D.eHc],x.o)
D.d3c=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eex=new B.my("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d__,D.cZ1,D.d3c)
D.aDu=new C.bk(D.HT,[9],x.J)
D.a5U=new C.e7(["b","battery",0.2,0.3,D.aDu])
D.aLV=new C.e7(["r","radio",0.8,0.3,A.iZ])
D.deA=w([D.a5U,D.D_,D.aLV],x.d)
D.eHr=new C.cD(["s",1,"r",0])
D.aLR=new C.cD(["r",1,"b",1])
D.bXs=w([D.CZ,D.eHr,D.aLR],x.o)
D.ddd=w(["radio","music","listen"],x.s)
D.eeJ=new B.my("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.deA,D.bXs,D.ddd)
D.dm2=new C.bk(D.HT,[12],x.J)
D.aLU=new C.e7(["b","battery",0.2,0.3,D.dm2])
D.eIp=new C.e7(["t","tv",0.8,0.3,A.iZ])
D.cQM=w([D.aLU,D.D_,D.eIp],x.d)
D.eHs=new C.cD(["s",1,"t",0])
D.aLS=new C.cD(["t",1,"b",1])
D.d7f=w([D.CZ,D.eHs,D.aLS],x.o)
D.dey=w(["tv","television","screen","watch"],x.s)
D.eeu=new B.my("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cQM,D.d7f,D.dey)
D.eIf=new C.e7(["z","buzzer",0.8,0.3,A.iZ])
D.cxe=w([D.If,D.D_,D.eIf],x.d)
D.eHt=new C.cD(["s",1,"z",0])
D.eHL=new C.cD(["z",1,"b",1])
D.cM_=w([D.CZ,D.eHt,D.eHL],x.o)
D.dbC=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eeG=new B.my("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cxe,D.cM_,D.dbC)
D.eHZ=new C.e7(["h","heater",0.8,0.3,A.iZ])
D.d1V=w([D.a5U,D.D_,D.eHZ],x.d)
D.eHo=new C.cD(["s",1,"h",0])
D.eGZ=new C.cD(["h",1,"b",1])
D.cMH=w([D.CZ,D.eHo,D.eGZ],x.o)
D.chi=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eev=new B.my("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d1V,D.cMH,D.chi)
D.eIr=new C.e7(["s","solar",0.2,0.25,D.a3D])
D.dm7=new C.bk(D.aFY,[100],x.J)
D.eIu=new C.e7(["r","resistor",0.55,0.25,D.dm7])
D.eIB=new C.e7(["c","capacitor",0.85,0.25,A.iZ])
D.eHV=new C.e7(["q","resistor",0.55,0.6,D.aDx])
D.eIs=new C.e7(["d","led",0.85,0.6,A.iZ])
D.d6S=w([D.eIr,D.eIu,D.eIB,D.eHV,D.eIs],x.d)
D.eHn=new C.cD(["s",0,"r",0])
D.eHi=new C.cD(["r",1,"c",0])
D.eGQ=new C.cD(["c",1,"s",1])
D.eGP=new C.cD(["c",0,"q",0])
D.eHh=new C.cD(["q",1,"d",0])
D.eGS=new C.cD(["d",1,"c",1])
D.cX0=w([D.eHn,D.eHi,D.eGQ,D.eGP,D.eHh,D.eGS],x.o)
D.d3H=w(["capacitor","store","charge","flash"],x.s)
D.eeI=new B.my("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d6S,D.cX0,D.d3H)
D.eI5=new C.e7(["b","battery",0.15,0.3,D.a3G])
D.eIH=new C.e7(["l1","bulb",0.5,0.3,A.iZ])
D.eIc=new C.e7(["l2","bulb",0.85,0.3,A.iZ])
D.cP_=w([D.eI5,D.eIH,D.eIc],x.d)
D.eGJ=new C.cD(["b",0,"l1",0])
D.eH6=new C.cD(["l1",1,"l2",0])
D.eH7=new C.cD(["l2",1,"b",1])
D.d_F=w([D.eGJ,D.eH6,D.eH7],x.o)
D.dek=w(["series","two bulbs","dim"],x.s)
D.eey=new B.my("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cP_,D.d_F,D.dek)
D.e2j={volts:0,charge:1}
D.dmc=new C.bk(D.e2j,[1.5,0],x.J)
D.eIz=new C.e7(["b","battery",0.75,0.3,D.dmc])
D.cOr=w([D.aLX,D.eIz],x.d)
D.eHl=new C.cD(["s",0,"b",0])
D.eGN=new C.cD(["b",1,"s",1])
D.cXh=w([D.eHl,D.eGN],x.o)
D.d3P=w(["charge","rechargeable","flat","recharge"],x.s)
D.eew=new B.my("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cOr,D.cXh,D.d3P)
D.dm1=new C.bk(D.HT,[4.5],x.J)
D.eI0=new C.e7(["b","battery",0.2,0.3,D.dm1])
D.aLT=new C.e7(["p","phone",0.8,0.3,A.iZ])
D.cZQ=w([D.eI0,D.D_,D.aLT],x.d)
D.eHq=new C.cD(["s",1,"p",0])
D.a5T=new C.cD(["p",1,"b",1])
D.daC=w([D.CZ,D.eHq,D.a5T],x.o)
D.dc0=w(["phone","charger","usb","mobile"],x.s)
D.eeC=new B.my("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cZQ,D.daC,D.dc0)
D.eHN=new C.e7(["f","fan",0.8,0.3,A.iZ])
D.c9s=w([D.If,D.eHN],x.d)
D.eGI=new C.cD(["b",0,"f",0])
D.eGX=new C.cD(["f",1,"b",1])
D.cNb=w([D.eGI,D.eGX],x.o)
D.d5U=w(["fan","cool","air","wind"],x.s)
D.eeL=new B.my("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c9s,D.cNb,D.d5U)
D.eIj=new C.e7(["b","battery",0.15,0.2,D.a3G])
D.eHO=new C.e7(["a","ammeter",0.5,0.2,A.iZ])
D.eHM=new C.e7(["l","bulb",0.85,0.2,A.iZ])
D.eIl=new C.e7(["v","voltmeter",0.5,0.6,A.iZ])
D.d47=w([D.eIj,D.eHO,D.eHM,D.eIl],x.d)
D.eGG=new C.cD(["b",0,"a",0])
D.eGF=new C.cD(["a",1,"l",0])
D.eHz=new C.cD(["v",0,"l",0])
D.eHA=new C.cD(["v",1,"l",1])
D.cX8=w([D.eGG,D.eGF,D.aLQ,D.eHz,D.eHA],x.o)
D.dhn=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eeH=new B.my("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d47,D.cX8,D.dhn)
D.eIK=new C.e7(["b","battery",0.15,0.2,D.aDu])
D.eI4=new C.e7(["t","tv",0.55,0.2,A.iZ])
D.aDv=new C.bk(D.HT,[5],x.J)
D.eHT=new C.e7(["c","buck",0.4,0.5,D.aDv])
D.eI6=new C.e7(["p","phone",0.8,0.5,A.iZ])
D.cUW=w([D.eIK,D.eI4,D.eHT,D.eI6],x.d)
D.eGM=new C.cD(["b",0,"t",0])
D.aLO=new C.cD(["b",0,"c",0])
D.aLP=new C.cD(["c",1,"p",0])
D.cZN=w([D.eGM,D.aLS,D.aLO,D.aLP,D.a5T],x.o)
D.cT9=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eez=new B.my("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cUW,D.cZN,D.cT9)
D.eHU=new C.e7(["c","buck",0.5,0.3,D.aDv])
D.cMy=w([D.aLU,D.eHU,D.aLT],x.d)
D.cRb=w([D.aLO,D.aLP,D.a5T],x.o)
D.ckH=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eet=new B.my("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cMy,D.cRb,D.ckH)
D.eIa=new C.e7(["d","diode",0.5,0.3,A.iZ])
D.d_S=w([D.a5U,D.eIa,D.aLV],x.d)
D.eGH=new C.cD(["b",0,"d",0])
D.eGT=new C.cD(["d",1,"r",0])
D.czK=w([D.eGH,D.eGT,D.aLR],x.o)
D.cSQ=w(["diode","protect","backwards","one way"],x.s)
D.eeF=new B.my("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d_S,D.czK,D.cSQ)
D.PO=w([D.eeD,D.eeK,D.eeB,D.eeE,D.eeA,D.eex,D.eeJ,D.eeu,D.eeG,D.eev,D.eeI,D.eey,D.eew,D.eeC,D.eeL,D.eeH,D.eez,D.eet,D.eeF],C.ax("O<my>"))
D.h_z=new B.FR("Moon",1.62,A.dA,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.h_x=new B.FR("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.h_A=new B.FR("Mercury",3.7,A.jS,"Mercury is small, so its gravity is like Mars.")
D.h_u=new B.FR("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.h_w=new B.FR("Earth",9.81,A.aR,"On Earth gravity is strong, and the air also slows you down.")
D.h_y=new B.FR("Neptune",11.15,A.d3,"Neptune pulls a little harder than Earth.")
D.h_v=new B.FR("Jupiter",24.79,A.cs,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rg=w([D.h_z,D.h_x,D.h_A,D.h_u,D.h_w,D.h_y,D.h_v],C.ax("O<FR>"))
D.cWZ=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a2c=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cXF=w([0.2,0.5,0.8],x.n)
D.bCV=new C.a_(63040,"MaterialIcons",!1)
D.eEb=new C.bo("peg","Peg",D.bCV)
D.eDl=new C.bo("bar","Bar",V.BF)
D.eDO=new C.bo("erase","Erase",A.N4)
D.cXT=w([D.eEb,D.eDl,D.eDO],x.c)
D.eN8=new C.cR(A.bi,A.J,4)
D.cY3=w([D.eN8],x.q)
D.aw5=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aUS=new B.Ka(0,"accordion")
D.cNt=w([A.jm,A.BG,A.Bu],x.w)
D.cUn=w(["Mail","SMS","Ad"],x.s)
D.cNY=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fYM=new B.Ao(D.aUS,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.awP,D.cNt,D.cUn,D.cNY)
D.a9m=new B.Ka(1,"flip")
D.d3B=w([A.pW,A1.Ge,A.u_],x.w)
D.cZw=w(["Unlock","Verify","Secure"],x.s)
D.cMu=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fYL=new B.Ao(D.a9m,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.awl,D.d3B,D.cZw,D.cMu)
D.aUT=new B.Ka(2,"towers")
D.cYl=w([A.yf,A.q_,A.hM],x.w)
D.cXZ=w(["Save","Grow","Earn"],x.s)
D.cAy=w(["","",""],x.s)
D.fYN=new B.Ao(D.aUT,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a23,D.cYl,D.cXZ,D.cAy)
D.a9n=new B.Ka(3,"assemble")
D.d4v=w([A.nj,A.h8,A.dW],x.w)
D.cTM=w(["Launch","Charge","Shine"],x.s)
D.d16=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fYP=new B.Ao(D.a9n,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.auN,D.d4v,D.cTM,D.d16)
D.aUU=new B.Ka(4,"carousel")
D.d4k=w([A.b8,A.f6],x.O)
D.cUx=w([A.mu,A.akJ,A.a0a],x.w)
D.cPo=w(["Explore","Discover","Learn"],x.s)
D.cZV=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fYK=new B.Ao(D.aUU,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d4k,D.cUx,D.cPo,D.cZV)
D.aUV=new B.Ka(5,"burst")
D.cXV=w([A.j9,A.tc],x.O)
D.cNT=w([A.lk,A.ms,A.i1],x.w)
D.cOd=w(["Cheer","Win","Love"],x.s)
D.cQk=w(["Make some noise","First place","Share the joy"],x.s)
D.fYO=new B.Ao(D.aUV,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cXV,D.cNT,D.cOd,D.cQk)
D.aw6=w([D.fYM,D.fYL,D.fYN,D.fYP,D.fYK,D.fYO],C.ax("O<Ao>"))
D.eEd=new C.bo("skin","Skin",A.akK)
D.eFB=new C.bo("muscle","Muscles",A.Ng)
D.eFj=new C.bo("organ","Organs",A.i1)
D.bCl=new C.a_(62747,"MaterialIcons",!1)
D.eFp=new C.bo("bone","Skeleton",D.bCl)
D.eFH=new C.bo("vessel","Blood vessels",A.q1)
D.cYr=w([D.eEd,D.eFB,D.eFj,D.eFp,D.eFH],x.c)
D.eKh=new B.uK("Simple legs","Light. Land gently.",0.15,0.2)
D.eKj=new B.uK("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eKm=new B.uK("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.C4=w([D.eKh,D.eKj,D.eKm],x._)
D.d_4=w([1.77,3.55,7.15,16.7],x.n)
D.d1v=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.ezS=new C.z("spiral","Spiral")
D.ej8=new C.z("barred","Barred spiral")
D.euo=new C.z("elliptical","Elliptical")
D.d2a=w([D.ezS,D.ej8,D.euo],x.K)
D.eGn=new C.cD(["beat",0.18,0.28,0])
D.eHu=new C.cD(["burst",0.7,0.2,0])
D.eHF=new C.cD(["delay",0.45,0.5,1])
D.eHe=new C.cD(["ripple",0.75,0.6,3])
D.cTv=w([D.eGn,D.eHu,D.eHF,D.eHe],x.e)
D.d30=w([N.l6,M.Ie,F.Sg],x.u)
D.fY0=new B.FD("First spark","A clock lights a burst and a ripple",D.cTv,D.d30)
D.eGW=new C.cD(["beat",0.15,0.3,1])
D.eG1=new C.cD(["ripple",0.62,0.15,0])
D.eHB=new C.cD(["delay",0.4,0.45,0])
D.eGC=new C.cD(["ripple",0.7,0.45,0])
D.eGj=new C.cD(["delay",0.4,0.7,1])
D.eHg=new C.cD(["shake",0.75,0.75,0])
D.dfi=w([D.eGW,D.eG1,D.eHB,D.eGC,D.eGj,D.eHg],x.e)
D.egg=new C.z(2,4)
D.aLE=new C.z(4,5)
D.cWQ=w([N.l6,M.Ie,F.Sg,D.egg,D.aLE],x.u)
D.fY2=new B.FD("Heartbeat","Two thumps, then a shake",D.dfi,D.cWQ)
D.eGs=new C.cD(["dice",0.15,0.7,1])
D.eHH=new C.cD(["echo",0.4,0.7,0])
D.eGA=new C.cD(["comet",0.7,0.5,4])
D.eHv=new C.cD(["burst",0.72,0.2,1])
D.eGU=new C.cD(["burst",0.3,0.25,0])
D.eGt=new C.cD(["pop",0.55,0.85,0])
D.cgS=w([D.eGs,D.eHH,D.eGA,D.eHv,D.eGU,D.eGt],x.e)
D.efG=new C.z(1,3)
D.efH=new C.z(1,4)
D.aLC=new C.z(0,5)
D.d4f=w([N.l6,W.uv,D.efG,D.efH,D.aLC],x.u)
D.fY1=new B.FD("Fireworks","Dice launch comets that burst in colour",D.cgS,D.d4f)
D.eGx=new C.cD(["beat",0.15,0.2,2])
D.eH3=new C.cD(["chance",0.4,0.2,0])
D.eGp=new C.cD(["ball",0.7,0.12,3])
D.eGc=new C.cD(["chance",0.4,0.5,1])
D.eHG=new C.cD(["ball",0.3,0.08,1])
D.eG5=new C.cD(["ripple",0.7,0.55,3])
D.c9U=w([D.eGx,D.eH3,D.eGp,D.eGc,D.eHG,D.eG5],x.e)
D.egh=new C.z(2,5)
D.cwZ=w([N.l6,W.uv,M.a5N,F.Sh,D.egh],x.u)
D.fY_=new B.FD("Rain","Balls fall at random and splash",D.c9U,D.cwZ)
D.eH4=new C.cD(["beat",0.12,0.45,2])
D.eHw=new C.cD(["toggle",0.38,0.2,0])
D.eHD=new C.cD(["wash",0.7,0.15,4])
D.eGr=new C.cD(["count3",0.38,0.45,0])
D.eHy=new C.cD(["burst",0.72,0.4,0])
D.eGV=new C.cD(["light",0.55,0.7,1])
D.eGd=new C.cD(["pop",0.8,0.8,4])
D.d6Q=w([D.eH4,D.eHw,D.eHD,D.eGr,D.eHy,D.eGV,D.eGd],x.e)
D.egK=new C.z(3,6)
D.cd1=w([N.l6,W.uv,M.a5N,F.Sh,D.aLC,D.egK],x.u)
D.fXY=new B.FD("Disco","A beat drives lights, washes and bursts",D.d6Q,D.cd1)
D.eHK=new C.cD(["button",0.12,0.2,0])
D.eG7=new C.cD(["delay",0.34,0.2,1])
D.eHJ=new C.cD(["light",0.56,0.2,1])
D.eHC=new C.cD(["delay",0.56,0.45,1])
D.eH5=new C.cD(["ball",0.34,0.6,0])
D.eGb=new C.cD(["delay",0.34,0.8,1])
D.eG0=new C.cD(["burst",0.7,0.8,5])
D.bY7=w([D.eHK,D.eG7,D.eHJ,D.eHC,D.eH5,D.eGb,D.eG0],x.e)
D.eiN=new C.z(5,6)
D.dbL=w([N.l6,W.uv,F.Sg,F.Sh,D.aLE,D.eiN],x.u)
D.fXZ=new B.FD("Domino","Tap the button and watch it run down the line",D.bY7,D.dbL)
D.awp=w([D.fY0,D.fY2,D.fY1,D.fY_,D.fXY,D.fXZ],C.ax("O<FD>"))
D.d2i=w([0.05,0.15,0.25],x.n)
D.d2w=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d3b=w([1.5,3,4.5,9,12],x.n)
D.eCS=new C.bo("dice","Dice",A.mr)
D.eDV=new C.bo("coin","Coin",K.y8)
D.eFC=new C.bo("num","Number",A.yh)
D.d3l=w([D.eCS,D.eDV,D.eFC],x.c)
D.d3o=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fCJ=new B.OT("Moon",1.62,0,4291941851)
D.fCK=new B.OT("Mars",3.71,0.01,4294472049)
D.fCL=new B.OT("Earth",9.81,1,4281908728)
D.fCN=new B.OT("Jupiter",24.79,1.4,4294677052)
D.fCM=new B.OT("Sun",274,2,4294688548)
D.yH=w([D.fCJ,D.fCK,D.fCL,D.fCN,D.fCM],C.ax("O<OT>"))
D.aww=w([A.cf,A.aM,A.b2,A.aR,A.bt,A.bZ,A.cs,A.hw],x.O)
D.e0F={H:0}
D.dlC=new C.bk(D.e0F,[2],x.I)
D.dna=new B.tb("Hydrogen","H\u2082",D.dlC,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.e0G={H:0,Cl:1}
D.dlP=new C.bk(D.e0G,[1,1],x.I)
D.dnc=new B.tb("Hydrogen chloride","HCl",D.dlP,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.e0H={H:0,O:1}
D.dlk=new C.bk(D.e0H,[2,1],x.I)
D.dnd=new B.tb("Water","H\u2082O",D.dlk,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e0V={N:0,H:1}
D.dmb=new C.bk(D.e0V,[1,3],x.I)
D.dnl=new B.tb("Ammonia","NH\u2083",D.dmb,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a4W={C:0,H:1}
D.dm5=new C.bk(D.a4W,[1,4],x.I)
D.dne=new B.tb("Methane","CH\u2084",D.dm5,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.e0I={H:0,S:1}
D.dks=new C.bk(D.e0I,[2,1],x.I)
D.dnk=new B.tb("Hydrogen sulfide","H\u2082S",D.dks,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e1_={O:0}
D.dm9=new C.bk(D.e1_,[2],x.I)
D.dnm=new B.tb("Oxygen","O\u2082",D.dm9,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e0U={N:0}
D.dlD=new C.bk(D.e0U,[2],x.I)
D.dnb=new B.tb("Nitrogen","N\u2082",D.dlD,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.e0t={C:0,O:1}
D.dmh=new C.bk(D.e0t,[1,2],x.I)
D.dni=new B.tb("Carbon dioxide","CO\u2082",D.dmh,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aFV={C:0,H:1,O:2}
D.dkd=new C.bk(D.aFV,[1,2,1],x.I)
D.dnj=new B.tb("Formaldehyde","CH\u2082O",D.dkd,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dm4=new C.bk(D.a4W,[2,4],x.I)
D.dng=new B.tb("Ethene","C\u2082H\u2084",D.dm4,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dm3=new C.bk(D.a4W,[2,6],x.I)
D.dnf=new B.tb("Ethane","C\u2082H\u2086",D.dm3,"Two carbons joined by a single bond, each holding three hydrogens.")
D.dke=new C.bk(D.aFV,[1,4,1],x.I)
D.dnh=new B.tb("Methanol","CH\u2083OH",D.dke,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a2s=w([D.dna,D.dnc,D.dnd,D.dnl,D.dne,D.dnk,D.dnm,D.dnb,D.dni,D.dnj,D.dng,D.dnf,D.dnh],C.ax("O<tb>"))
D.d4l=w([A.bZ,A.aR,A.dP,A.b2],x.O)
D.d5f=w([],x.h)
D.d5i=w([],x.B)
D.a2B=w([],x.F)
D.e8e=new B.eb("battery","Battery","\ud83d\udd0b",A.b2,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.e8k=new B.eb("solar","Solar panel","\u2600\ufe0f",A.c7,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e8Z=new B.eb("crank","Hand crank","\ud83d\udd04",A.cs,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.e8B=new B.eb("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aR,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e86=new B.eb("buck","Step-down converter","\ud83d\udd3d",A.hw,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.e8z=new B.eb("regulator","5 V regulator","\ud83e\uddca",A.bJ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e93=new B.eb("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e8L=new B.eb("ldr","Light sensor","\ud83c\udf1e",A.dP,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.e8p=new B.eb("switch","Switch","\ud83c\udf9a\ufe0f",A.bt,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e90=new B.eb("fuse","Fuse","\ud83e\uddef",A.cf,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e7Z=new B.eb("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hw,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e8M=new B.eb("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e8O=new B.eb("bulb","Light bulb","\ud83d\udca1",A.dP,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.e8m=new B.eb("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.e8q=new B.eb("motor","Motor","\u2699\ufe0f",A.bJ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e8I=new B.eb("buzzer","Buzzer","\ud83d\udd14",A.bZ,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.e8f=new B.eb("heater","Heater","\ud83d\udd25",A.cs,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.e8D=new B.eb("capacitor","Capacitor","\ud83e\udeab",A.co,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.e8v=new B.eb("radio","Radio","\ud83d\udcfb",A.nP,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.e8s=new B.eb("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e85=new B.eb("voltmeter","Voltmeter","\ud83e\udded",A.bu,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.e8c=new B.eb("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.e8i=new B.eb("fan","Fan","\ud83c\udf00",A.aR,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e95=new B.eb("speaker","Speaker","\ud83d\udd0a",A.bZ,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e8V=new B.eb("clock","Digital clock","\u23f0",A.b2,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.e8y=new B.eb("calculator","Calculator","\ud83e\uddee",A.Kq,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.e8b=new B.eb("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.co,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e94=new B.eb("router","WiFi router","\ud83d\udcf6",A.hw,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e97=new B.eb("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e81=new B.eb("toycar","Toy car","\ud83d\ude97",A.cs,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e98=new B.eb("kettle","Kettle","\ud83e\uded6",A.mg,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e89=new B.eb("lamp","Desk lamp","\ud83e\ude94",A.dP,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.e8l=new B.eb("lights","Party lights","\ud83c\udf84",A.nP,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.e8w=new B.eb("fridge","Fridge","\ud83e\uddca",A.fT,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e83=new B.eb("washer","Washing machine","\ud83e\udee7",A.co,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e8W=new B.eb("blender","Blender","\ud83e\udd64",A.cf,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.e8t=new B.eb("drone","Drone","\ud83d\ude81",A.bJ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e88=new B.eb("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.e8x=new B.eb("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e8T=new B.eb("neon","Neon sign","\ud83e\udea7",A.bZ,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e84=new B.eb("microwave","Microwave","\ud83c\udf72",A.cs,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e8N=new B.eb("doorbell","Doorbell","\ud83d\udd14",A.c7,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.e8h=new B.eb("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e8H=new B.eb("console","Game console","\ud83c\udfae",A.bt,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e8Y=new B.eb("heartmon","Heart monitor","\ud83e\ude7a",A.h1,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e82=new B.eb("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.e8C=new B.eb("lighthouse","Lighthouse","\ud83d\uddfc",A.dP,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e8K=new B.eb("discoball","Disco ball","\ud83e\udea9",A.nP,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e92=new B.eb("robot","Robot","\ud83e\udd16",A.aR,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e80=new B.eb("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e96=new B.eb("ledstrip","LED strip","\ud83c\udf08",A.bZ,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e8S=new B.eb("pump","Water pump","\ud83d\udeb0",A.aR,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.e8E=new B.eb("hairdryer","Hair dryer","\ud83d\udca8",A.j9,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e8Q=new B.eb("headphones","Headphones","\ud83c\udfa7",A.bt,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.e8a=new B.eb("smartwatch","Apple Watch Ultra","\u231a",A.bu,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e91=new B.eb("tablet","iPad Pro M5","\ud83d\udcf2",A.co,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e7Y=new B.eb("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h1,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.e8u=new B.eb("sonytv","Sony Bravia 9","\ud83d\udcfa",A.br,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.e8n=new B.eb("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e8J=new B.eb("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.t9,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e8_=new B.eb("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.e8d=new B.eb("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d3,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e9_=new B.eb("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cy,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.e8F=new B.eb("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bk,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.e8A=new B.eb("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cg,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e8R=new B.eb("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.e8o=new B.eb("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b2,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.e8G=new B.eb("honor","Honor Magic V5","\ud83d\udcf1",A.co,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e8P=new B.eb("vivo","vivo X300 Pro","\ud83d\udcf1",A.cs,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e8U=new B.eb("ereader","Kindle Scribe","\ud83d\udcd6",A.br,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e7X=new B.eb("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ce,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.e8r=new B.eb("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cy,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.e8j=new B.eb("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e87=new B.eb("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dP,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.e8g=new B.eb("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e8X=new B.eb("vision","Apple Vision Pro","\ud83e\udd7d",A.bt,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Qc=w([D.e8e,D.e8k,D.e8Z,D.e8B,D.e86,D.e8z,D.e93,D.e8L,D.e8p,D.e90,D.e7Z,D.e8M,D.e8O,D.e8m,D.e8q,D.e8I,D.e8f,D.e8D,D.e8v,D.e8s,D.e85,D.e8c,D.e8i,D.e95,D.e8V,D.e8y,D.e8b,D.e94,D.e97,D.e81,D.e98,D.e89,D.e8l,D.e8w,D.e83,D.e8W,D.e8t,D.e88,D.e8x,D.e8T,D.e84,D.e8N,D.e8h,D.e8H,D.e8Y,D.e82,D.e8C,D.e8K,D.e92,D.e80,D.e96,D.e8S,D.e8E,D.e8Q,D.e8a,D.e91,D.e7Y,D.e8u,D.e8n,D.e8J,D.e8_,D.e8d,D.e9_,D.e8F,D.e8A,D.e8R,D.e8o,D.e8G,D.e8P,D.e8U,D.e7X,D.e8r,D.e8j,D.e87,D.e8g,D.e8X],C.ax("O<eb>"))
D.d5F=w([0,0.46,0.82],x.n)
D.d5Q=w([5,10,15,25,45,60],x.t)
D.d69=w([-0.045,0.03,-0.015],x.n)
D.d6x=w([0.9,0.97,1],x.n)
D.awW=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.u8=w([0.05,0.2,0.35],x.n)
D.cOh=w([D.ED,D.ED],x.O)
D.cTr=w([A.EN,A.M],x.O)
D.cSu=w([A.fk,A.hl],x.O)
D.cMr=w([A.f6,A.nO],x.O)
D.c9p=w([A.lG,A.dx],x.O)
D.awX=w([D.cOh,D.cTr,D.cSu,D.cMr,D.c9p],x.Q)
D.fCx=new B.uY("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fCy=new B.uY("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fCp=new B.uY("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fCw=new B.uY("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fCu=new B.uY("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fCq=new B.uY("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fCv=new B.uY("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fCr=new B.uY("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fCt=new B.uY("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fCs=new B.uY("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Ca=w([D.fCx,D.fCy,D.fCp,D.fCw,D.fCu,D.fCq,D.fCv,D.fCr,D.fCt,D.fCs],C.ax("O<uY>"))
D.beE=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d7H=w([D.ED,D.beE,D.adn,A.acU],x.O)
D.b0D=new C.ac(0,A.G,A.hI,A.dE,6)
D.d8B=w([D.b0D],x.V)
D.ef1=new C.z(0,"AND")
D.efI=new C.z(1,"Adder")
D.egi=new C.z(2,"Blinker")
D.egL=new C.z(3,"Memory")
D.d9l=w([D.ef1,D.efI,D.egi,D.egL],x.E)
D.ax8=w([-104,0,104],x.n)
D.ax9=w([-14,3],x.n)
D.d9O=w([-16,16],x.n)
D.axb=w([-22,22],x.n)
D.da0=w([-8,0,8],x.n)
D.axf=w([-92,0,92],x.n)
D.dam=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eKe=new B.uK("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eKl=new B.uK("Medium tank","Balanced.",0.35,1)
D.eKk=new B.uK("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Qp=w([D.eKe,D.eKl,D.eKk],x._)
D.nn=w([0.04,0.2,0.36],x.n)
D.axq=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eFi=new C.bo(D.aUS,"Fold",K.alG)
D.eEs=new C.bo(D.a9m,"Flip",A.FT)
D.bCE=new C.a_(62889,"MaterialIcons",!1)
D.eFA=new C.bo(D.aUT,"Rise",D.bCE)
D.alU=new C.a_(983870,"MaterialIcons",!1)
D.eCq=new C.bo(D.a9n,"Assemble",D.alU)
D.eCz=new C.bo(D.aUU,"Spin",D.akd)
D.eCw=new C.bo(D.aUV,"Pop",A.lk)
D.dbI=w([D.eFi,D.eEs,D.eFA,D.eCq,D.eCz,D.eCw],C.ax("O<+(Ka,n,a_)>"))
D.axv=w([A.bZ,A.dP,A.bu,A.aR,A.bt,A.cf],x.O)
D.dbT=w([A.aR,A.cs,A.cs,A.b2],x.O)
D.dc5=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eBm=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.emk=new C.z("Make the output turn TWICE as fast.",2)
D.efS=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eA1=new C.z("Make the output turn 4 times faster.",4)
D.erW=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.euZ=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.etu=new C.z("Make the output turn 3 times faster.",3)
D.euf=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.axA=w([D.eBm,D.emk,D.efS,D.eA1,D.erW,D.euZ,D.etu,D.euf],C.ax("O<+(n,M)>"))
D.dd3=w([3,4.5,5,6,9],x.n)
D.b1a=new C.ac(0,A.G,A.aX,A.J,16)
D.ddv=w([D.b1a],x.V)
D.Qr=w([A.bZ,A.c7,A.b2,A.aR,A.bt,A.cf,A.c,A.cs],x.O)
D.ddZ=w(["solar","turbine","crank","pot"],x.s)
D.dei=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.deo=w([0,0.35,0.75,1],x.n)
D.eCM=new C.bo("drop","Drop",D.alw)
D.eCO=new C.bo("weight","Weight",T.alY)
D.eFv=new C.bo("cannon","Newton's cannon",A.akW)
D.df0=w([D.eCM,D.eCO,D.eFv],x.c)
D.eyG=new C.z("piano","Piano")
D.eym=new C.z("organ","Organ")
D.etb=new C.z("bell","Bell")
D.eyI=new C.z("pluck","Pluck")
D.eA0=new C.z("synth","Synth")
D.euU=new C.z("flute","Flute")
D.axS=w([D.eyG,D.eym,D.etb,D.eyI,D.eA0,D.euU],x.K)
D.dfw=w(["volts","level","ohms","on"],x.s)
D.dgO=w([A.jm,A.BG,A.Bu,A.pW,A1.Ge,A.u_,A.yf,A.q_,A.hM,A.nj,A.h8,A.dW,A.i1,A.i2,A.ms,A.lQ,A.vM,A.rd,A.lR,A.FL,A.tZ,A.Ni,A.Bw,A.alr,A.N8,A.yb,A.Ng,A.al5,S.alQ,A.lk],x.w)
D.dhH=w([0.72,1],x.n)
D.dhS=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e2b={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dk7=new C.bk(D.e2b,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aFX={A:0,T:1,C:2,G:3}
D.a3x=new C.bk(D.aFX,["U","A","G","C"],x.l)
D.dkf=new C.bk(D.aFX,["T","A","G","C"],x.l)
D.e0R={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d4p=w([0,2,4,5,7,9,11],x.t)
D.cNz=w([0,2,3,5,7,8,10],x.t)
D.d9x=w([0,3,5,6,7,10],x.t)
D.Cg=new C.bk(D.e0R,[D.avR,D.d4p,D.cNz,D.d9x,D.aot],C.ax("bk<n,ai<H>>"))
D.e2_={A:0,T:1,U:2,C:3,G:4}
D.dkv=new C.bk(D.e2_,[A.cf,A.co,A.co,A.aM,A.b2],C.ax("bk<n,w>"))
D.e0d={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fRI=new B.xX("Switch",F.NH,A.c7,0,"Tap it to turn it ON or OFF.")
D.fRE=new B.xX("Blinker",A.oO,A.bu,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fRF=new B.xX("AND",D.alU,A.co,2,"ON only when BOTH inputs are ON.")
D.bE8=new C.a_(63671,"MaterialIcons",!1)
D.fRD=new B.xX("OR",D.bE8,A.bt,2,"ON when EITHER input is ON.")
D.fRG=new B.xX("XOR",G.a_w,A.bZ,2,"ON when the inputs are DIFFERENT.")
D.fRA=new B.xX("NAND",A.tO,A.aR,2,"OFF only when BOTH inputs are ON.")
D.bDe=new C.a_(63176,"MaterialIcons",!1)
D.fRB=new B.xX("NOR",D.bDe,A.hw,2,"ON only when BOTH inputs are OFF.")
D.fRC=new B.xX("NOT",A_.BH,A.cs,1,"Flips the signal: ON becomes OFF.")
D.fRH=new B.xX("Light",A.r8,A.dP,1,"Glows when its input is ON.")
D.fRJ=new B.xX("Buzzer",A.o2,A.cf,1,"Beeps while its input is ON.")
D.yU=new C.bk(D.e0d,[D.fRI,D.fRE,D.fRF,D.fRD,D.fRG,D.fRA,D.fRB,D.fRC,D.fRH,D.fRJ],C.ax("bk<n,xX>"))
D.e1X={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eDc=new C.bo(3,20,1.9)
D.eCH=new C.bo(33,90,1.6)
D.eFU=new C.bo(52,15,3.2)
D.eFS=new C.bo(45,-100,1.8)
D.eEm=new C.bo(-15,-60,1.9)
D.eDQ=new C.bo(-25,140,2.4)
D.eDH=new C.bo(-82,0,2.2)
D.aDj=new C.bk(D.e1X,[D.eDc,D.eCH,D.eFU,D.eFS,D.eEm,D.eDQ,D.eDH],C.ax("bk<n,+(M,M,M)>"))
D.cMZ=w([A.A],x.M)
D.cNh=w([A.ax,A.aC],x.M)
D.cVY=w([A.ax,A.A,A.aC],x.M)
D.cXn=w([A.ax,A.la,A.A,A.lA,A.aC],x.M)
D.d9h=w([A.ax,A.la,A.a3,A.a7,A.lA,A.aC],x.M)
D.dls=new C.dS([1,D.cMZ,2,D.cNh,3,D.cVY,4,A.axX,5,D.cXn,6,D.d9h],C.ax("dS<H,ai<da>>"))
D.e0S={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eEy=new C.bo(1,A.bO,"Hydrogen")
D.eDr=new C.bo(4,A.bl,"Carbon")
D.eCr=new C.bo(3,A.d3,"Nitrogen")
D.eES=new C.bo(2,A.ay,"Oxygen")
D.eEf=new C.bo(2,A.c7,"Sulfur")
D.eFs=new C.bo(1,A.bk,"Chlorine")
D.w0=new C.bk(D.e0S,[D.eEy,D.eDr,D.eCr,D.eES,D.eEf,D.eFs],C.ax("bk<n,+(H,w,n)>"))
D.e2h={Calm:0,Box:1,Sleep:2}
D.cus=w([4,2,6,0],x.n)
D.cuz=w([4,4,4,4],x.n)
D.cuA=w([4,7,8,0],x.n)
D.QQ=new C.bk(D.e2h,[D.cus,D.cuz,D.cuA],C.ax("bk<n,ai<M>>"))
D.e0m={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wE=new B.a_U(0,"source")
D.cWT=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fWE=new B.q_("Clock",A.oO,D.wE,A.bu,D.cWT)
D.fWA=new B.q_("Button",A.yj,D.wE,A.aM,A.T)
D.ddf=w(["random","quick","slow"],x.s)
D.fWL=new B.q_("Dice",A.mr,D.wE,A.bZ,D.ddf)
D.bDO=new C.a_(63484,"MaterialIcons",!1)
D.DE=new B.a_U(1,"logic")
D.dhC=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fWH=new B.q_("Delay",D.bDO,D.DE,A.co,D.dhC)
D.d5X=w(["fast","mid","slow"],x.s)
D.fWM=new B.q_("Echo",A.all,D.DE,A.bt,D.d5X)
D.fWJ=new B.q_("Every 2nd",A_.BH,D.DE,A.hw,A.T)
D.bDt=new C.a_(63309,"MaterialIcons",!1)
D.fWG=new B.q_("Every 3rd",D.bDt,D.DE,A.aR,A.T)
D.bFr=new C.a_(983902,"MaterialIcons",!1)
D.bXx=w(["50%","25%","75%"],x.s)
D.fWO=new B.q_("Chance",D.bFr,D.DE,A.cs,D.bXx)
D.qv=new B.a_U(2,"out")
D.fWC=new B.q_("Light",A.r8,D.qv,A.dP,A.T)
D.fWD=new B.q_("Burst",A.lk,D.qv,A.bZ,A.T)
D.fWB=new B.q_("Ripple",A.yn,D.qv,A.b8,A.T)
D.fWK=new B.q_("Ball",A.aly,D.qv,A.cs,A.T)
D.fWI=new B.q_("Comet",A.nj,D.qv,A.bt,A.T)
D.bFb=new C.a_(983669,"MaterialIcons",!1)
D.fWN=new B.q_("Shake",D.bFb,D.qv,A.cf,A.T)
D.fWP=new B.q_("Pop",A.FM,D.qv,A.b2,A.T)
D.fWF=new B.q_("Wash",A.Nl,D.qv,A.pt,A.T)
D.mB=new C.bk(D.e0m,[D.fWE,D.fWA,D.fWL,D.fWH,D.fWM,D.fWJ,D.fWG,D.fWO,D.fWC,D.fWD,D.fWB,D.fWK,D.fWI,D.fWN,D.fWP,D.fWF],C.ax("bk<n,q_>"))
D.e20={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.Ch=new C.bk(D.e20,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.e0z={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zl=new B.J6(0,"tv")
D.eLK=new B.m4("Samsung Neo QLED 8K",D.zl,F.Eq,A.aR)
D.eLB=new B.m4("LG OLED evo G5",D.zl,A.ea,A.h1)
D.eLs=new B.m4("Sony Bravia 9",D.zl,A.qH,A.br)
D.eLw=new B.m4("Apple TV 4K",D.zl,A.e1,A.bO)
D.eLt=new B.m4("Bang and Olufsen Beovision",D.zl,F.E8,F.t9)
D.Ij=new B.J6(1,"iphone")
D.aMh=new B.m4("iPhone 18 Pro Max",D.Ij,D.afB,A.ce)
D.wd=new B.J6(3,"fold")
D.bkC=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eLG=new B.m4("iPhone Fold",D.wd,D.bkC,A.b7)
D.uy=new B.J6(2,"android")
D.eLH=new B.m4("Samsung Galaxy S26 Ultra",D.uy,F.abN,A.d3)
D.beb=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eLz=new B.m4("Samsung Galaxy Z Fold7",D.wd,D.beb,A.cy)
D.eLv=new B.m4("Google Pixel 10 Pro XL",D.uy,A.dA,A.bk)
D.eLD=new B.m4("Xiaomi 16 Ultra",D.uy,A.lK,A.cg)
D.eLy=new B.m4("Huawei Mate 80 Pro Max",D.uy,A.eP,A.ay)
D.eLu=new B.m4("OPPO Find X9 Ultra",D.uy,A.dX,A.b2)
D.eLM=new B.m4("Honor Magic V5",D.wd,A.di,A.co)
D.eLA=new B.m4("vivo X300 Pro",D.uy,A.hl,A.cs)
D.Sq=new B.J6(4,"tablet")
D.eLF=new B.m4("iPad Pro M5",D.Sq,A.dA,A.aR)
D.a62=new B.J6(5,"reader")
D.eLN=new B.m4("Kindle Scribe",D.a62,A.ee,A.br)
D.zm=new B.J6(6,"computer")
D.eLE=new B.m4("MacBook Pro M5 Max",D.zm,A.dA,A.ce)
D.eLJ=new B.m4("iMac 32 inch",D.zm,A.bO,A.cy)
D.eLC=new B.m4("Pro Display XDR 8K",D.zm,A.lK,A.b8)
D.eLx=new B.m4("Sony Laser Projector",D.zm,A.cC,A.dP)
D.eLI=new B.m4("Luxury car touchscreen",D.zm,L.n_,A.ay)
D.eLL=new B.m4("Apple Vision Pro",D.zm,A.je,A.bt)
D.lY=new C.bk(D.e0z,[D.eLK,D.eLB,D.eLs,D.eLw,D.eLt,D.aMh,D.eLG,D.eLH,D.eLz,D.eLv,D.eLD,D.eLy,D.eLu,D.eLM,D.eLA,D.eLF,D.eLN,D.eLE,D.eLJ,D.eLC,D.eLx,D.eLI,D.eLL],C.ax("bk<n,m4>"))
D.e0M={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bn9=new B.fK(20,4,13,!1)
D.bnA=new B.fK(14,5,13.5,!1)
D.bnr=new B.fK(9,2.4,10,!1)
D.bnF=new B.fK(7,5,12.5,!1)
D.bnu=new B.fK(8,3.5,12,!1)
D.bn5=new B.fK(15,2,6,!1)
D.bnD=new B.fK(45,6,13.5,!0)
D.bnl=new B.fK(10,8,13.5,!1)
D.bnd=new B.fK(25,3,12,!0)
D.bnj=new B.fK(35,4,12,!0)
D.bnk=new B.fK(40,4.5,9.5,!0)
D.bnm=new B.fK(55,3,9,!0)
D.bn6=new B.fK(18,3,9,!1)
D.bnC=new B.fK(22,4,13.5,!1)
D.bnv=new B.fK(16,5,13.5,!1)
D.bnh=new B.fK(30,4,9,!0)
D.bnO=new B.fK(5,3.5,13,!1)
D.bnp=new B.fK(25,3,13.5,!0)
D.bny=new B.fK(14,2.5,9,!1)
D.bno=new B.fK(6,6,13,!1)
D.bnG=new B.fK(30,1.2,5,!0)
D.bnN=new B.fK(35,3,4.5,!0)
D.bnJ=new B.fK(20,4.5,7.5,!0)
D.bnn=new B.fK(55,5.5,13.5,!0)
D.bn4=new B.fK(45,5.5,13.5,!0)
D.bnz=new B.fK(40,5.5,13.5,!0)
D.bnM=new B.fK(60,6,13.5,!0)
D.ag1=new B.fK(28,4,7,!0)
D.F_=new B.fK(25,4,7,!0)
D.bng=new B.fK(30,4,7,!0)
D.bnb=new B.fK(22,4,7,!0)
D.bnc=new B.fK(24,4,7,!0)
D.bnq=new B.fK(60,3,5.5,!0)
D.bn7=new B.fK(18,9,14,!0)
D.bne=new B.fK(25,9,14,!0)
D.ag2=new B.fK(30,8,14,!0)
D.bna=new B.fK(20,8,14,!0)
D.bni=new B.fK(30,9,14,!0)
D.bnH=new B.fK(22,5,9.5,!0)
D.bn8=new B.fK(30,2.5,10.5,!0)
D.bnw=new B.fK(50,5.5,13.5,!0)
D.bnL=new B.fK(12,2,9.5,!1)
D.bnt=new B.fK(16,1.3,9.5,!0)
D.bnE=new B.fK(40,2.5,7,!0)
D.bnK=new B.fK(60,1.2,4.8,!0)
D.bnI=new B.fK(18,5,13.5,!0)
D.bnB=new B.fK(8,2,9.5,!1)
D.bns=new B.fK(12,2.5,8,!1)
D.bnf=new B.fK(20,3.5,13.5,!0)
D.bnx=new B.fK(3.5,3,13,!1)
D.yV=new C.bk(D.e0M,[D.bn9,D.bnA,D.bnr,D.bnF,D.bnu,D.bn5,D.bnD,D.bnl,D.bnd,D.bnj,D.bnk,D.bnm,D.bn6,D.bnC,D.bnv,D.bnh,D.bnO,D.bnp,D.bny,D.bno,D.bnG,D.bnN,D.bnJ,D.bnn,D.bn4,D.bnz,D.bnM,D.ag1,D.F_,D.bng,D.F_,D.bnb,D.F_,D.bnc,D.ag1,D.F_,D.bnq,D.bn7,D.bne,D.ag2,D.bna,D.bni,D.bnH,D.bn8,D.bnw,D.bnL,D.bnt,D.bnE,D.bnK,D.F_,D.ag2,D.bnI,D.bnB,D.bns,D.bnf,D.bnx],C.ax("bk<n,fK>"))
D.e0l={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eBW=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eiK=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eiF=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eue=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eva=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eua=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.egQ=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.esb=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eC4=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.evv=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.elK=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.egy=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.ekP=new C.z("Movement","They pull your legs together and help you balance.")
D.emE=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eiT=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.ezC=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eAF=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.erX=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eAp=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eqF=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.evD=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.egF=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.en0=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.evk=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eqZ=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eAx=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.etG=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.egO=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ewb=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ezf=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.exw=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.efa=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eto=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.ets=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.enG=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.ej4=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.emt=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.esl=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eyf=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eC1=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.evA=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eeY=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.esw=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.efB=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eyv=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.ezy=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.esW=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eyK=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.egH=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eA3=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eke=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.exV=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.enn=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eqU=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.evU=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eAe=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eA5=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eAa=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ern=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.ewI=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.ext=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.ezT=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.esV=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.epi=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eo6=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.etj=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.evN=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.epO=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eqt=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.ekA=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.ezu=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.elm=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.efy=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.enF=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eft=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.ejr=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.enK=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.elv=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.ew7=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.emH=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eBJ=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eof=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.erh=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.etO=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.elC=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.elo=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dmB=new C.bk(D.e0l,[D.eBW,D.eiK,D.eiF,D.eue,D.eva,D.eua,D.egQ,D.esb,D.eC4,D.evv,D.elK,D.egy,D.ekP,D.emE,D.eiT,D.ezC,D.eAF,D.erX,D.eAp,D.eqF,D.evD,D.egF,D.en0,D.evk,D.eqZ,D.eAx,D.etG,D.egO,D.ewb,D.ezf,D.exw,D.efa,D.eto,D.ets,D.enG,D.ej4,D.emt,D.esl,D.eyf,D.eC1,D.evA,D.eeY,D.esw,D.efB,D.eyv,D.ezy,D.esW,D.eyK,D.egH,D.eA3,D.eke,D.exV,D.enn,D.eqU,D.evU,D.eAe,D.eA5,D.eAa,D.ern,D.ewI,D.ext,D.ezT,D.esV,D.epi,D.eo6,D.etj,D.evN,D.epO,D.eqt,D.ekA,D.ezu,D.elm,D.efy,D.enF,D.eft,D.ejr,D.enK,D.elv,D.ew7,D.emH,D.eBJ,D.eof,D.erh,D.etO,D.elC,D.elo],C.ax("bk<n,+(n,n)>"))
D.dmD=new C.hw(A.G,11)
D.dmI=new C.hw(A.G,30)
D.dpP=new B.TS(null)
D.dtD=new B.TW(null)
D.dtE=new B.TX(null)
D.dtR=new B.TY(null)
D.dvS=new B.U_(null)
D.dvT=new B.U0(null)
D.dvU=new B.U1(null)
D.dwH=new B.Un(null)
D.dwJ=new B.UC(null)
D.dwK=new B.UD(null)
D.dwM=new B.UE(null)
D.dxj=new B.UL(null)
D.dze=new B.UP(null)
D.dzf=new B.UR(null)
D.dzg=new B.US(null)
D.dzi=new B.UT(null)
D.dAT=new B.V9(null)
D.dAV=new B.Vb(null)
D.dB_=new B.Vl(null)
D.dBa=new B.Vm(null)
D.dBG=new B.Vn(null)
D.dDa=new B.Vp(null)
D.dEy=new B.Vr(null)
D.dEz=new B.Vs(null)
D.dFU=new B.Vv(null)
D.dVN=new B.Vw(null)
D.dVP=new B.Vx(null)
D.dVQ=new B.VA(null)
D.dVR=new B.VB(null)
D.dXK=new B.VJ(null)
D.dXL=new B.VK(null)
D.dXT=new B.VR(null)
D.dY1=new B.VV(null)
D.dY2=new B.VW(null)
D.dY3=new B.a7S(null)
D.dYE=new B.VY(null)
D.e_6=new B.W1(null)
D.e2s=new C.u(0,118)
D.aG3=new C.u(0,13)
D.e2t=new C.u(0,17)
D.e2w=new C.u(0,330)
D.e2z=new C.u(0,-13)
D.aG9=new C.u(0,-14)
D.e2A=new C.u(0,-17)
D.e2B=new C.u(0,-18)
D.e2C=new C.u(0,-19)
D.e2D=new C.u(0,-20)
D.e2G=new C.u(0,-26)
D.e2H=new C.u(0,-28)
D.e2I=new C.u(0,-31)
D.e2J=new C.u(0,-32)
D.w7=new C.u(0,-6)
D.e2K=new C.u(0,-6771)
D.e2L=new C.u(0,-9)
D.e2N=new C.u(-9.5,-11)
D.e2O=new C.u(10,20)
D.e2Q=new C.u(10,-13)
D.e2R=new C.u(10,-22)
D.e2S=new C.u(10,-4)
D.a5_=new C.u(11,8)
D.e2U=new C.u(12,2)
D.e2V=new C.u(14,0)
D.e2W=new C.u(14,12)
D.aGd=new C.u(14,8)
D.e2X=new C.u(14,-17)
D.e2Y=new C.u(14,-18)
D.aGe=new C.u(14,-3)
D.aGf=new C.u(14,-4)
D.e2Z=new C.u(15,0)
D.e3_=new C.u(15,-12)
D.e30=new C.u(16,-8)
D.e31=new C.u(18,14)
D.e32=new C.u(18,-12)
D.aGj=new C.u(20,0)
D.e38=new C.u(20,15)
D.e39=new C.u(20,-17)
D.e3a=new C.u(20,-3)
D.e3b=new C.u(21,8)
D.e3d=new C.u(22,10)
D.aGk=new C.u(22,8)
D.e3e=new C.u(24,0)
D.e3f=new C.u(24,2)
D.e3h=new C.u(24,-18)
D.e3i=new C.u(24,-22)
D.e3j=new C.u(25,8)
D.e3k=new C.u(26,0)
D.e3q=new C.u(28,-30)
D.e3v=new C.u(30,18)
D.e3w=new C.u(30,2)
D.e3x=new C.u(31,19)
D.e3y=new C.u(32,0)
D.aGn=new C.u(34,0)
D.aGo=new C.u(34,-32)
D.HU=new C.u(36,0)
D.e3D=new C.u(3,-1)
D.e3G=new C.u(40,3)
D.e3K=new C.u(4,11)
D.e3N=new C.u(4,-2)
D.e3R=new C.u(5,0)
D.e3S=new C.u(5,17)
D.e3T=new C.u(5,6)
D.e3X=new C.u(6,11)
D.e42=new C.u(8,7)
D.e43=new C.u(8,-10)
D.e44=new C.u(8,-14)
D.e45=new C.u(8,-3)
D.aGs=new C.u(9,0)
D.e48=new C.u(-20.5,-17.6)
D.e49=new C.u(-9,18.5)
D.e4c=new C.u(-2.6,-1)
D.e4d=new C.u(1.9,-0.8)
D.e4g=new C.u(-0.22,0.09)
D.e4l=new C.u(2.6,1)
D.e4s=new C.u(-9,12.2)
D.e4K=new C.u(-9,20.5)
D.e51=new C.u(-10,0)
D.e52=new C.u(-10,12)
D.aGz=new C.u(-10,4)
D.e53=new C.u(-11,-2)
D.e54=new C.u(-13,-5)
D.e55=new C.u(-14,0)
D.e56=new C.u(-14,13)
D.e57=new C.u(-14,2)
D.e58=new C.u(-14,-12)
D.e59=new C.u(-14,-19)
D.e5a=new C.u(-14,-23)
D.e5b=new C.u(-15,6)
D.e5c=new C.u(-16,14)
D.e5d=new C.u(-16,-8)
D.e5e=new C.u(-17,10)
D.e5f=new C.u(-17,-18)
D.e5g=new C.u(-17,-8)
D.e5i=new C.u(-18,20)
D.e5j=new C.u(-18,-9)
D.aGB=new C.u(-20,0)
D.e5l=new C.u(-20,16)
D.e5m=new C.u(-20,-9)
D.RO=new C.u(-22,8)
D.e5n=new C.u(-22,-10)
D.e5o=new C.u(-22,-11)
D.e5p=new C.u(-24,10)
D.e5q=new C.u(-24,11)
D.e5r=new C.u(-24,14)
D.e5s=new C.u(-24,-22)
D.e5t=new C.u(-25,-11)
D.e5u=new C.u(-26,0)
D.e5v=new C.u(-26,-18)
D.e5w=new C.u(-2,9)
D.e5x=new C.u(-2,-10)
D.e5y=new C.u(-2,-20)
D.e5z=new C.u(-2,-9)
D.e5A=new C.u(-32,0)
D.aGD=new C.u(-34,0)
D.e5F=new C.u(-40,3)
D.e5H=new C.u(-4,11)
D.e5I=new C.u(-4,-17)
D.e5J=new C.u(-4,-2)
D.e5L=new C.u(-5,0)
D.e5M=new C.u(-5,20)
D.e5N=new C.u(-5,6)
D.e5O=new C.u(-6,26)
D.e5P=new C.u(-6,6)
D.e5Q=new C.u(-6,-42)
D.e5R=new C.u(-7,-19)
D.e5S=new C.u(-7,-24)
D.e5T=new C.u(-8,-9)
D.a53=new C.u(-9,0)
D.e5U=new C.u(-9,1)
D.e5V=new C.u(-9,-23)
D.ffJ=new C.x("Thinking\u2026",null,A.hf,null,null,null,null,null,null,null,null,null)
D.e6R=new C.D(A.kr,D.ffJ,null)
D.fvC=new C.x("Start from a ready-made board",null,A.fO,null,null,null,null,null,null,null,null,null)
D.e70=new C.D(A9.vo,D.fvC,null)
D.buW=new C.Q(4,0,4,14)
D.fb6=new C.G(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgD=new C.x("Games and little helpers for a spare minute.",null,D.fb6,null,null,null,null,null,null,null,null,null)
D.e7a=new C.D(D.buW,D.fgD,null)
D.fst=new C.x("Tap to throw in a star",null,A.kG,null,null,null,null,null,null,null,null,null)
D.b4k=new C.cr(A.A,null,null,D.fst,null)
D.ed4=new C.cL(0,null,0,14,null,null,D.b4k,null)
D.d6v=w([A.iN,A.bl],x.O)
D.aLu=new C.bT(A.A,0.5,A.x,null,0,D.d6v,null,null)
D.edN=new C.bT(A.A,0.5,A.x,null,0,D.axK,null,null)
D.cZ7=w([A.c,A.bJ],x.O)
D.edP=new C.bT(A.A,0.5,A.x,null,0,D.cZ7,null,null)
D.edQ=new C.bT(A.A,0.5,A.x,null,0,M.awO,null,null)
D.dea=w([A.bO,A.je],x.O)
D.aLv=new C.bT(A.A,0.5,A.x,null,0,D.dea,null,null)
D.cEb=w([A.c,A.bO],x.O)
D.edU=new C.bT(A.rT,0.5,A.x,null,0,D.cEb,null,null)
D.bbF=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bgX=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cYa=w([D.bbF,D.afa,D.bgX],x.O)
D.d4z=w([0,0.7,1],x.n)
D.edW=new C.bT(A.rT,0.5,A.x,null,0,D.cYa,D.d4z,null)
D.cuG=w([A.oB,A.aF,A.K],x.O)
D.db0=w([0.3,0.7,1],x.n)
D.edY=new C.bT(A.A,0.5,A.x,null,0,D.cuG,D.db0,null)
D.bkF=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.dcn=w([A.fa,D.bkF],x.O)
D.ee_=new C.bT(A.rT,0.5,A.x,null,0,D.dcn,null,null)
D.cxt=w([A.dA,A.cC],x.O)
D.ee0=new C.bT(A.A,0.5,A.x,null,0,D.cxt,null,null)
D.cTB=w([A.oB,A.aF,A.fk],x.O)
D.ee1=new C.bT(A.A,0.5,A.x,null,0,D.cTB,null,null)
D.cLY=w([A.h3,A.aM,A.d5],x.O)
D.ee3=new C.bT(A.rT,0.5,A.x,null,0,D.cLY,null,null)
D.d71=w([A.je,L.n_],x.O)
D.ee4=new C.bT(A.rT,0.5,A.x,null,0,D.d71,null,null)
D.bbT=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b9V=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cVQ=w([D.bbT,D.b9V],x.O)
D.ee6=new C.bT(A.A,0.5,A.x,null,0,D.cVQ,null,null)
D.bgl=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bej=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.ben=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dgo=w([D.bgl,D.bej,D.ben],x.O)
D.cSo=w([0,0.65,1],x.n)
D.ee7=new C.bT(M.a9x,0.5,A.x,null,0,D.dgo,D.cSo,null)
D.ee8=new C.bT(A.A,0.5,A.x,null,0,D.auh,null,null)
D.ddn=w([A.lH,A.aF,A.fk],x.O)
D.eed=new C.bT(A.A,0.5,A.x,null,0,D.ddn,null,null)
D.deW=w([A.je,A.hF],x.O)
D.eeg=new C.bT(A.A,0.5,A.x,null,0,D.deW,null,null)
D.aLA=new C.aT(9,9)
D.eep=new C.aT(1.4,1.4)
D.ef4=new C.z(0,-4)
D.ekb=new C.z(0.22,4)
D.erf=new C.z(0.8,-4)
D.eA6=new C.z(0.58,4)
D.eCQ=new C.bo("Moon",1.62,4291941851)
D.eDp=new C.bo("Neptune",11.15,4284524026)
D.eE2=new C.bo("Sun",274,4294688548)
D.eEi=new C.bo("Mercury",3.7,4288455599)
D.eEo=new C.bo("Earth",9.81,4281908728)
D.eEq=new C.bo("Mars",3.71,4294472049)
D.eEJ=new C.bo("Venus",8.87,4294759245)
D.eEP=new C.bo("Saturn",10.44,4294829706)
D.eFb=new C.bo("Jupiter",24.79,4294677052)
D.eIM=new C.a9(10,-8,18,-2)
D.eIN=new C.a9(14,-14,20,14)
D.eIO=new C.a9(20,-2,30,2)
D.eIQ=new C.a9(4,-13,30,-3)
D.eIS=new C.a9(8,-7,12,7)
D.eIY=new C.a9(-12,12,12,19)
D.eIZ=new C.a9(-12,14,12,22)
D.eJ_=new C.a9(-12,-22,12,8)
D.eJ0=new C.a9(-12,-25,12,19)
D.eJ1=new C.a9(-12,-26,12,-6)
D.eJ2=new C.a9(-12,-4,12,14)
D.eJ3=new C.a9(-12,-6,10,6)
D.eJ4=new C.a9(-14,20,14,24)
D.eJ5=new C.a9(-14,6,14,10)
D.eJ6=new C.a9(-14,-17,14,15)
D.eJ7=new C.a9(-14,-26,14,18)
D.eJ8=new C.a9(-14,-4,14,20)
D.eJ9=new C.a9(-15,-29,15,25)
D.eJa=new C.a9(-16,-16,16,16)
D.eJb=new C.a9(-16,-22,-9,18)
D.eJc=new C.a9(-16,-24,16,-10)
D.eJd=new C.a9(-16,-2,16,20)
D.eJf=new C.a9(-18,20,18,24)
D.eJg=new C.a9(-18,-18,18,20)
D.eJh=new C.a9(-20,12,20,22)
D.eJi=new C.a9(-20,-28,20,26)
D.eJj=new C.a9(-22,14,22,18)
D.aM_=new C.a9(-22,-26,22,24)
D.eJk=new C.a9(-22,-3,22,3)
D.eJl=new C.a9(-22,-4,22,12)
D.eJm=new C.a9(-24,-12,10,22)
D.eJn=new C.a9(-24,-14,22,8)
D.eJo=new C.a9(-24,-6,24,20)
D.aM0=new C.a9(-24,-9,24,9)
D.eJp=new C.a9(-25,14,25,19)
D.eJq=new C.a9(-26,-14,14,8)
D.eJr=new C.a9(-26,-4,26,20)
D.eJs=new C.a9(-26,-6,4,6)
D.aM1=new C.a9(-28,-13,28,13)
D.eJt=new C.a9(-28,-16,28,16)
D.eJu=new C.a9(-28,-16,28,8)
D.eJv=new C.a9(-28,-22,28,22)
D.eJw=new C.a9(-30,-12,30,14)
D.eJx=new C.a9(-30,-14,0,14)
D.eJy=new C.a9(-30,-18,30,20)
D.eJz=new C.a9(-30,-28,30,14)
D.eJA=new C.a9(-30,-2,30,18)
D.eJB=new C.a9(-30,-4,30,18)
D.eJC=new C.a9(-32,-17,32,17)
D.eJD=new C.a9(-32,-28,32,18)
D.eJE=new C.a9(-33,-21,33,17)
D.eJF=new C.a9(-34,14,34,26)
D.a5V=new C.a9(-34,-18,34,18)
D.eJG=new C.a9(-34,-4,34,7)
D.eJH=new C.a9(-36,-24,36,20)
D.eJI=new C.a9(-38,-22,38,22)
D.eJJ=new C.a9(-3,12,3,22)
D.eJK=new C.a9(-3,5,3,15)
D.eJM=new C.a9(-46,-34,46,28)
D.eJN=new C.a9(-48,-3,48,3)
D.eJQ=new C.a9(-6,18,24,24)
D.eJR=new C.a9(-6,5,6,12)
D.eJS=new C.a9(-6,-22,6,-15)
D.eJT=new C.a9(-9,-16,9,22)
D.eJU=new C.a9(-4.5,-24,4.5,-21.2)
D.eJW=new C.a9(14,-9,17.5,9)
D.e1U={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aMT=new C.eI(D.e1U,5,x.R)
D.e1w={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eMP=new C.eI(D.e1w,10,x.R)
D.eOO=new C.ar(24,44)
D.eOT=new C.ar(300,300)
D.ePc=new C.ar(54,38)
D.ePj=new C.ar(66,38)
D.b5E=new C.fj(2,null,null,null,null,A.bt,null,null,null,null)
D.eQg=new C.a7(16,16,D.b5E,null)
D.aNS=new C.hM(3,12,12,0.82,null)
D.fxh=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aO2=new C.b1(D.fxh,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.d74=w([A.cf,A.c7,A.b2,A.aR,A.pt,A.cf],x.O)
D.eW8=new C.fS(A.A,0,6.283185307179586,A.x,D.d74,null,null)
D.f45=new C.G(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.PW,null,null,null)
D.eXn=new C.eq("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.f45)
D.aQt=new C.G(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXo=new C.eq("What we see",null,null,A.cO,null,null,null,null,null,null,D.aQt)
D.f1u=new C.G(!0,A4.Kv,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXr=new C.eq("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.f1u)
D.f6i=new C.G(!0,A.kf,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXx=new C.eq("AI",null,null,A.cO,null,null,null,null,null,null,D.f6i)
D.f1f=new C.G(!0,A.c1,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXy=new C.eq("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.f1f)
D.aOR=new C.G(!0,A.c1,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXN=new C.G(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXP=new C.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYl=new C.G(!0,A.bi,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYE=new C.G(!0,A.co,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ8=new C.G(!0,A.c1,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZd=new C.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZt=new C.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZW=new C.G(!0,A.aS,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_i=new C.G(!0,A.c1,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_s=new C.G(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNl=new C.cR(A.hI,A.dE,6)
D.d0R=w([D.eNl],x.q)
D.f_M=new C.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d0R,null,null,null)
D.f_P=new C.G(!0,A.eu,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_S=new C.G(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_U=new C.G(!0,A.c1,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0i=new C.G(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPd=new C.G(!0,A.c1,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0C=new C.G(!0,A.aA,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0D=new C.G(!0,A.c1,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1x=new C.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f21=new C.G(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2w=new C.G(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNo=new C.cR(A.aX,A.J,3)
D.ay_=w([D.eNo],x.q)
D.f2z=new C.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ay_,null,null,null)
D.f2E=new C.G(!0,A.c,null,null,null,null,12.5,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3k=new C.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.PW,null,null,null)
D.f3N=new C.G(!0,A.aA,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3V=new C.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4k=new C.G(!0,A.tj,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4A=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4V=new C.G(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5_=new C.G(!0,A.c1,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f54=new C.G(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5a=new C.G(!0,A.aA,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5B=new C.G(!0,A.c1,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5O=new C.G(!0,A.n2,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5P=new C.G(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f63=new C.G(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPT=new C.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6C=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNc=new C.cR(A.w,A.J,5)
D.cQ2=w([D.eNc],x.q)
D.f6D=new C.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cQ2,null,null,null)
D.f6I=new C.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ay_,null,null,null)
D.f6X=new C.G(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f71=new C.G(!0,A.fy,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7i=new C.G(!0,A.c1,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7N=new C.G(!0,A.b2,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8k=new C.G(!0,A.c1,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8Y=new C.G(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f96=new C.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQe=new C.G(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9z=new C.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9J=new C.G(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9Q=new C.G(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa9=new C.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQq=new C.G(!0,A.ad,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fac=new C.G(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faX=new C.G(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7T=new C.G(!0,A.c,null,null,null,null,13,A.a5,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbl=new C.G(!0,A.tj,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbF=new C.G(!0,A.b2,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_X=new C.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc3=new C.x("\u26a0\ufe0f ",null,D.f_X,null,null,null,null,null,null,null,null,null)
D.fcf=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.zA,null,null,null,null,null,null,null,null,null)
D.fcG=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mK,null,null,null,null,null,null,null,null,null)
D.fdK=new C.x("Pick one, then change it and see what happens.",null,A.zA,null,null,null,null,null,null,null,null,null)
D.fdO=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f10=new C.G(!0,A.ad,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feI=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.f10,null,null,null,null,null,null,null,null,null)
D.ff5=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,U.a79,null,null,null,null,null,null,null,null,null)
D.fgf=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fgP=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fgU=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fhs=new C.x("Make it yours",null,A.k9,null,null,null,null,null,null,null,null,null)
D.fhH=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a7f,null,null,null,null,null,null,null,null,null)
D.f5f=new C.G(!0,A.jd,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjZ=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.f5f,null,null,null,null,null,null,null,null,null)
D.fke=new C.x("YOUR DECODING",null,Q.mK,null,null,null,null,null,null,null,null,null)
D.fkq=new C.x("5G",null,T.aPg,null,null,null,null,null,null,null,null,null)
D.f7y=new C.G(!0,A.c1,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fly=new C.x("WHAT HAPPENS",null,D.f7y,null,null,null,null,null,null,null,null,null)
D.fng=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fnV=new C.x("Change the words and pictures on the three slabs.",null,A.zA,null,null,null,null,null,null,null,null,null)
D.fo5=new C.x("All the parts and wires will be removed.",null,A.hD,null,null,null,null,null,null,null,null,null)
D.fop=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fp0=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fpS=new C.x("INTERCEPTED",null,Q.mK,null,null,null,null,null,null,null,null,null)
D.fqb=new C.x("\ud83c\udfaf Challenges",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fqG=new C.x("Remove this part",null,U.aOU,null,null,null,null,null,null,null,null,null)
D.fqY=new C.x("Clear the board?",null,A.dn,null,null,null,null,null,null,null,null,null)
D.f72=new C.G(!0,A.bu,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frc=new C.x("How the Lab works",null,D.f72,null,null,null,null,null,null,null,null,null)
D.eZF=new C.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frv=new C.x("Electronics Lab",null,D.eZF,null,null,null,null,A.a2,null,1,null,null)
D.fry=new C.x("?",null,M.aQn,null,null,null,null,null,null,null,null,null)
D.f59=new C.G(!0,A.aR,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frC=new C.x("Planet Earth",null,D.f59,null,null,null,null,null,null,null,null,null)
D.fsN=new C.x("Ready-made circuits",null,A.dm,null,null,null,null,null,null,null,null,null)
D.ftn=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.ftG=new C.x("UNIVERSE EXPLORER",null,I.a7e,null,null,null,null,null,null,null,null,null)
D.fw9=new C.x("SECRET VERSION",null,Q.mK,null,null,null,null,null,null,null,null,null)
D.f9T=new C.G(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwG=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.f9T,null,null,null,null,null,null,null,null,null)
D.fxS=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,U.a79,null,null,null,null,null,null,null,null,null)
D.fyk=new C.x("NGMY",null,A.uH,null,null,null,null,null,null,null,null,null)
D.fyx=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.IZ,null,null,null,null,null,null,null,null,null)
D.fyU=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.kF,null,null,null,null,null,null,null,null,null)
D.fzR=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.zA,null,null,null,null,null,null,null,null,null)
D.fzT=new C.x("TOOLBOX",null,I.a7e,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hco=null
$.hcn=null
$.hir=0
$.hKi=C.T(x.N,x.k)
$.hKT=C.T(x.N,x.k)
$.hbJ=null
$.hKE=C.T(x.N,x.k)
$.hLH=C.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ig9","bDn",()=>{var v="led"
return C.a([B.axy("Both together","Make the light glow only when BOTH switches are ON.",2,new B.feL(),v),B.axy("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.feM(),v),B.axy("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.feN(),v),B.axy("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.feU(),v),B.axy("Not both","Make the light go OFF only when both switches are ON.",2,new B.feV(),v),B.axy("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.feW(),"buzzer")],C.ax("O<ba3>"))})
w($,"igB","bDo",()=>C.a([B.ox("UNIVERSE","Earth, space and gravity",A.a0a,A.aR,new B.ffb()),B.ox("ELECTRONICS LAB","Batteries, wires, real circuits",Ai.a_y,A.aR,new B.ffc()),B.ox("DISCOVERY LAB","Body Explorer: a real 3D human",D.a_p,A.b2,new B.ffd()),B.ox("TOOLBOX","Converter, clock, games",S.akp,A.cs,new B.ffo()),B.ox("MOLECULE MAKER","Join atoms into real molecules",A.N7,A.hw,new B.ffq()),B.ox("DNA LAB","Copy DNA, build a protein",D.a_p,A.bZ,new B.ffr()),B.ox("ECOSYSTEM LAB","Grass, rabbits and foxes",A.yb,A.b2,new B.ffs()),B.ox("BALANCE LAB","Levers, weight and torque",D.bFj,A.aM,new B.fft()),B.ox("GEAR LAB","Teeth, speed and force",A.BE,A.cs,new B.ffu()),B.ox("LASER MAZE","Bend the beam with mirrors",I.akN,A.ay,new B.ffv()),B.ox("LIGHT MIXER","Match colours with light",D.bD_,A.b8,new B.ffw()),B.ox("CIPHER LAB","Make and crack secret codes",A.ym,A.aR,new B.ffe()),B.ox("REACTION LAB","Wire parts together",A.yq,A.bu,new B.fff()),B.ox("SPARK PAINTER","Paint with light",A.a_r,A.bZ,new B.ffg()),B.ox("ROCKET LANDER","Land softly on the pad",A.nj,A.aR,new B.ffh()),B.ox("ORBIT STUDIO","Slingshot planets",A.mu,A.cs,new B.ffi()),B.ox("SWARM STUDIO","A living school of fish",A.N7,A.b2,new B.ffj()),B.ox("CHAIN BURST","One tap, a whole chain",A.h8,A.bZ,new B.ffk()),B.ox("TITLE ANIMATOR","Make a moving title",A.yi,A.c7,new B.ffl()),B.ox("CIRCUIT LAB","Connect logic, learn it",A.a_S,A.co,new B.ffm()),B.ox("MARBLE MUSIC","Marbles ring the notes",D.bCF,A.b8,new B.ffn()),B.ox("ORBIT SEQUENCER","Planets play the tune",D.bF6,A.bt,new B.ffp())],C.ax("O<brT>")))
w($,"ii5","qb",()=>{var v,u,t=C.T(x.N,x.dV)
for(v=0;v<76;++v){u=D.Qc[v]
t.n(0,u.a,u)}return t})
w($,"iga","ahq",()=>C.a([B.Fn("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.feX()),B.Fn("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.feY()),B.Fn("Spin the motor","A battery and a motor in a loop will make it spin.",new B.feZ()),B.Fn("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.ff_()),B.Fn("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.ff0()),B.Fn("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.feO()),B.Fn("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.feP()),B.Fn("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.feQ()),B.Fn("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.feR()),B.Fn("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.feS()),B.Fn("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.feT())],C.ax("O<ba4>")))
w($,"igD","hqP",()=>C.a([B.a0p("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cg,new B.ffE()),B.a0p("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cf,A.bC,new B.ffF()),B.a0p("Breathe","Calm down in a minute","\ud83e\udee7",A.hw,A.cy,new B.ffG()),B.a0p("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b7,new B.ffH()),B.a0p("Memory Match","Find the pairs","\ud83c\udccf",A.aR,A.ce,new B.ffI()),B.a0p("Simon Sounds","Copy the tune","\ud83c\udfb5",A.c7,A.bk,new B.ffJ()),B.a0p("Tip & Split","Share the bill","\ud83e\uddfe",A.b2,A.aZ,new B.ffK()),B.a0p("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bt,A.aE,new B.ffL())],C.ax("O<btd>")))
w($,"igC","hqO",()=>C.a([B.aeK("EARTH GLOBE","Turn it, tap a country",A.mu,A.aR,new B.ffx()),B.aeK("SOLAR SYSTEM","The Sun and its worlds",D.bCJ,A.aM,new B.ffy()),B.aeK("GRAVITY LAB","Drop, weigh, orbit",D.alw,A.cs,new B.ffz()),B.aeK("BLACK HOLE","Throw in a star",A.FB,A.bt,new B.ffA()),B.aeK("GALAXY","Build, tilt, collide",A.y_,A.h2,new B.ffB()),B.aeK("SIZE COMPARE","Earth next to a star",D.bD1,A.bZ,new B.ffC()),B.aeK("SEASONS & MOON","Why it is summer",A.vy,A.bu,new B.ffD())],C.ax("O<bt8>")))})()};
(a=>{a["BNqTr3NwTvBsKf41a3EMAAMyfSg="]=a.current})($__dart_deferred_initializers__);