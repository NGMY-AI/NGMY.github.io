((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A9,A1,A2,I,P,A3,Aa,A4,A5,G,Ab,A6,Ac,Y,Ad,Ae,Q,N,Af,Ag,Z,O,V,Ah,Ai,R,M,Aj,W,K,S,Ak,E,F,L,B={
bzj(d){return B.hTG(d)},
hTG(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bzj=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qT(C.n7(""),d,A.hG,null,null).d8(0,A.Yy),$async$bzj)
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
return C.i($async$bzj,v)},
i4n(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Qi[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cT(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.h1(D.Qi,new B.fz4())
if(w==null)w=A.d.gI(D.Qi)
s=C.U(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.L)(r),++u){l=r[u].a
k=l[0]
l=$.qj().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.ajS(w.a,w.b,m,w,s,!1)},
hZ0(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.M(D.QL,new B.foW(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
icd(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cH(b2,"{")
v=A.a.oG(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.S.aL(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=C.u(J.q(q,"kind"))
o=C.u(J.q(q,"id"))
if(!$.qj().ai(0,p)||J.f4(s,o)||J.ad(t)>=8)continue
J.cf(s,o)
n=C.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dk3[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dU(J.q(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dU(J.q(q,"y")):0.25+A.k.am(r,3)*0.3,0.1,0.9)
J.cf(t,new C.e9([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.u(J.q(g,0))
e=C.u(J.q(g,2))
d=A.o.D(A.k.N(C.dU(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.dU(J.q(g,3))),0,1)
if(J.f4(s,f)&&J.f4(s,e)&&!J.A(f,e))J.cf(i,new C.cA([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cw:a0)
while(a0.C()){a2=a0.gR(a0)
J.cf(a1,C.u(a2))}a3=a1
a0=J.q(u,"title")
a0=C.u(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mC(a0,C.u(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.u(a5==null?"":a5)
return new B.ajS(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i2Y(d){var w,v,u=B.h8M()
d.B(u)
for(w=0;w<60;++w)u.v8(0,0.03333333333333333)
v=u.a
return A.d.b4(v,new B.fvQ(u))&&!A.d.d7(v,new B.fvR())},
i2X(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.qj().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.L)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.u(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dim,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aG(q,", ")+")"
s.push(C.u(p)+n+": "+o+", current "+A.k.ab(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.L)(w),++u){m=w[u]
l.push(C.u(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.u(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aG(s,"\n")+"\nWires: "+A.d.aG(l,"; ")},
hSe(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aG(v,"\n")+"\n\n"}v=A.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i4m(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qj().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.QL[u]
if(A.d.b4(w,new B.fz1(s)))if(!C.cT(r,s.b.toLowerCase(),0))v=C.cT(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a_(w,new B.fz2(e),C.S(w).k("a_<1>")).gan(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ab(A.d.cJ(w,0,new B.fz3())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qj().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajS:function ajS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fz4:function fz4(){},
foW:function foW(){},
fvQ:function fvQ(d){this.a=d},
fvR:function fvR(){},
fz1:function fz1(d){this.a=d},
fz2:function fz2(d){this.a=d},
fz3:function fz3(){},
Vq:function Vq(d,e){this.c=d
this.a=e},
bjW:function bjW(d,e,f,g,h){var _=this
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
e9n:function e9n(d){this.a=d},
e9o:function e9o(d,e,f){this.a=d
this.b=e
this.c=f},
e9p:function e9p(d){this.a=d},
e9A:function e9A(d){this.a=d},
e9B:function e9B(d,e){this.a=d
this.b=e},
e9w:function e9w(d){this.a=d},
e9u:function e9u(d,e){this.a=d
this.b=e},
e9v:function e9v(d,e,f){this.a=d
this.b=e
this.c=f},
e9x:function e9x(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e9s:function e9s(d){this.a=d},
e9t:function e9t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9y:function e9y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e9r:function e9r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9z:function e9z(d,e){this.a=d
this.b=e},
e9q:function e9q(d,e){this.a=d
this.b=e},
e9E:function e9E(d){this.a=d},
e9D:function e9D(d){this.a=d},
e9F:function e9F(d){this.a=d},
e9C:function e9C(d){this.a=d},
e9G:function e9G(d,e){this.a=d
this.b=e},
e9H:function e9H(d,e){this.a=d
this.b=e},
e9I:function e9I(d,e){this.a=d
this.b=e},
e9J:function e9J(d,e){this.a=d
this.b=e},
bzE(d,e,f){var w=null
return C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQy,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.N,0,A.p)},
hmf(d,e,f,g){var w=null,v=C.n(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.x(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zW,A.L,w,w),A.aB,C.bT(A.fK,g,A.bq,0,8)],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,w,new C.o(D.Wr,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
G5:function G5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uS:function uS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VT:function VT(d){this.a=d},
aEb:function aEb(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ft$=h
_.l7$=i
_.fX$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
epu:function epu(){},
epO:function epO(d){this.a=d},
epN:function epN(d,e){this.a=d
this.b=e},
epP:function epP(){},
epQ:function epQ(){},
epw:function epw(d,e,f){this.a=d
this.b=e
this.c=f},
epv:function epv(d,e){this.a=d
this.b=e},
epl:function epl(d){this.a=d},
epm:function epm(d){this.a=d},
epn:function epn(d){this.a=d},
epo:function epo(d){this.a=d},
epp:function epp(d){this.a=d},
epq:function epq(d){this.a=d},
epr:function epr(d){this.a=d},
eps:function eps(d){this.a=d},
ept:function ept(d){this.a=d},
epj:function epj(d){this.a=d},
epk:function epk(d){this.a=d},
epi:function epi(d){this.a=d},
epH:function epH(d,e){this.a=d
this.b=e},
epC:function epC(d){this.a=d},
epD:function epD(d){this.a=d},
epz:function epz(d){this.a=d},
epE:function epE(d){this.a=d},
epy:function epy(d){this.a=d},
epF:function epF(d){this.a=d},
epG:function epG(d){this.a=d},
epx:function epx(d){this.a=d},
epI:function epI(d,e){this.a=d
this.b=e},
epB:function epB(d,e){this.a=d
this.b=e},
epJ:function epJ(d){this.a=d},
epK:function epK(d){this.a=d},
epL:function epL(d){this.a=d},
epM:function epM(d){this.a=d},
epA:function epA(d){this.a=d},
bgV:function bgV(d,e){this.b=d
this.a=e},
aM2:function aM2(){},
bxi:function bxi(){},
cGq(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cGq=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qW().jI(0,"assets/data/body3d.bin"),$async$cGq)
case 3:d=a1
$.hhB=J.f1(A.dD.gaP(d),d.byteOffset,d.byteLength)
t=C.aSc(d)
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
e=D.d7h[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a33(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aZ1))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.ba1(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cGq,v)},
aS_:function aS_(d,e,f){this.a=d
this.b=e
this.c=f},
a33:function a33(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
ba1:function ba1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ug:function Ug(d){this.a=d},
aCB:function aCB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.ft$=s
_.l7$=t
_.fX$=u
_.fu$=v
_.bt$=w
_.a9$=a0
_.c=_.a=null},
dGm:function dGm(d){this.a=d},
dGl:function dGl(d,e){this.a=d
this.b=e},
dFZ:function dFZ(d,e){this.a=d
this.b=e},
dG_:function dG_(){},
dGn:function dGn(){},
dG0:function dG0(d,e){this.a=d
this.b=e},
dG1:function dG1(d){this.a=d},
dG2:function dG2(){},
dG3:function dG3(d){this.a=d},
dG5:function dG5(d,e){this.a=d
this.b=e},
dG4:function dG4(d){this.a=d},
dFW:function dFW(d,e,f){this.a=d
this.b=e
this.c=f},
dFX:function dFX(d){this.a=d},
dFY:function dFY(d){this.a=d},
dGc:function dGc(d){this.a=d},
dGd:function dGd(d,e){this.a=d
this.b=e},
dGe:function dGe(d,e){this.a=d
this.b=e},
dGf:function dGf(d){this.a=d},
dGb:function dGb(d,e){this.a=d
this.b=e},
dGg:function dGg(d,e){this.a=d
this.b=e},
dGa:function dGa(d,e){this.a=d
this.b=e},
dGh:function dGh(d){this.a=d},
dG9:function dG9(d){this.a=d},
dGi:function dGi(d){this.a=d},
dG8:function dG8(d){this.a=d},
dGj:function dGj(d){this.a=d},
dG7:function dG7(d){this.a=d},
dGk:function dGk(d){this.a=d},
dG6:function dG6(d){this.a=d},
aL4:function aL4(){},
aL5:function aL5(){},
c1C:function c1C(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c1D:function c1D(d,e){this.a=d
this.b=e},
c1E:function c1E(d){this.a=d},
ay5(d,e,f,g,h){return new B.baK(d,e,f,g,h)},
h_r(d,e,f,g,h,i){return $.hPC.ca(0,d+"|"+C.u(e)+"|"+f.l()+"|"+C.u(g),new B.cNc(d,e,f,i,g,h))},
y7:function y7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cn:function Cn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
no:function no(d,e,f){this.a=d
this.b=e
this.c=f},
baK:function baK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiy:function fiy(){},
fiz:function fiz(){},
fiA:function fiA(){},
fiH:function fiH(){},
fiI:function fiI(){},
fiJ:function fiJ(){},
Um:function Um(d){this.a=d},
aCE:function aCE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.ft$=m
_.l7$=n
_.fX$=o
_.fu$=p
_.bt$=q
_.a9$=r
_.c=_.a=null},
dIx:function dIx(d){this.a=d},
dIb:function dIb(d,e){this.a=d
this.b=e},
dIe:function dIe(){},
dIy:function dIy(){},
dI9:function dI9(d,e){this.a=d
this.b=e},
dIa:function dIa(d,e){this.a=d
this.b=e},
dIf:function dIf(d,e,f){this.a=d
this.b=e
this.c=f},
dI4:function dI4(){},
dI5:function dI5(){},
dI6:function dI6(d){this.a=d},
dI7:function dI7(d,e){this.a=d
this.b=e},
dI8:function dI8(d,e,f){this.a=d
this.b=e
this.c=f},
dIg:function dIg(){},
dIh:function dIh(d,e){this.a=d
this.b=e},
dIi:function dIi(d){this.a=d},
dId:function dId(d,e){this.a=d
this.b=e},
dIc:function dIc(d){this.a=d},
dI3:function dI3(d,e,f){this.a=d
this.b=e
this.c=f},
dIr:function dIr(d){this.a=d},
dIq:function dIq(d){this.a=d},
dIs:function dIs(d){this.a=d},
dIp:function dIp(d){this.a=d},
dIn:function dIn(d){this.a=d},
dIo:function dIo(d){this.a=d},
dIm:function dIm(d){this.a=d},
dIj:function dIj(d){this.a=d},
dIl:function dIl(d){this.a=d},
dIt:function dIt(d,e){this.a=d
this.b=e},
dIu:function dIu(d,e){this.a=d
this.b=e},
dIv:function dIv(d){this.a=d},
dIk:function dIk(d){this.a=d},
dIw:function dIw(d,e){this.a=d
this.b=e},
bb2:function bb2(d,e){this.b=d
this.a=e},
cNc:function cNc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLa:function aLa(){},
bx1:function bx1(){},
hGt(){return new B.Nl(null)},
oG(d,e,f,g,h){return new B.bsC(d,e,f,g,h)},
br1(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
h_X(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Nl:function Nl(d){this.a=d},
Ko:function Ko(d,e){this.a=d
this.b=e},
Az:function Az(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCV:function aCV(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dOn:function dOn(d,e){this.a=d
this.b=e},
dOm:function dOm(d){this.a=d},
dOp:function dOp(d,e){this.a=d
this.b=e},
dOo:function dOo(d){this.a=d},
bsC:function bsC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiZ:function fiZ(){},
fj_:function fj_(){},
fj0:function fj0(){},
fjb:function fjb(){},
fjd:function fjd(){},
fje:function fje(){},
fjf:function fjf(){},
fjg:function fjg(){},
fjh:function fjh(){},
fji:function fji(){},
fjj:function fjj(){},
fj1:function fj1(){},
fj2:function fj2(){},
fj3:function fj3(){},
fj4:function fj4(){},
fj5:function fj5(){},
fj6:function fj6(){},
fj7:function fj7(){},
fj8:function fj8(){},
fj9:function fj9(){},
fja:function fja(){},
fjc:function fjc(){},
br2:function br2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f_b:function f_b(d){this.a=d},
f_a:function f_a(d,e){this.a=d
this.b=e},
f_8:function f_8(d){this.a=d},
f_c:function f_c(d){this.a=d},
f_9:function f_9(d,e){this.a=d
this.b=e},
aeU:function aeU(d,e,f){this.c=d
this.d=e
this.a=f},
adM:function adM(d,e,f){this.c=d
this.d=e
this.a=f},
Q2:function Q2(d,e,f,g,h,i,j,k,l,m){var _=this
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
bs0:function bs0(d,e){this.b=d
this.a=e},
brw:function brw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9J:function b9J(d,e){this.b=d
this.a=e},
aHa:function aHa(d,e){this.c=d
this.a=e},
aHb:function aHb(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cR$=e
_.b5$=f
_.c=_.a=null},
eZS:function eZS(d){this.a=d},
eZR:function eZR(d){this.a=d},
eZQ:function eZQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZP:function eZP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZN:function eZN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZM:function eZM(d,e,f){this.a=d
this.b=e
this.c=f},
eZO:function eZO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eZL:function eZL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f__:function f__(d){this.a=d},
eZZ:function eZZ(d){this.a=d},
f_0:function f_0(d,e){this.a=d
this.b=e},
f_1:function f_1(d,e){this.a=d
this.b=e},
f_2:function f_2(d,e){this.a=d
this.b=e},
eZY:function eZY(d,e,f){this.a=d
this.b=e
this.c=f},
f_3:function f_3(d,e,f){this.a=d
this.b=e
this.c=f},
eZX:function eZX(d){this.a=d},
eZT:function eZT(d){this.a=d},
f_4:function f_4(d){this.a=d},
f_5:function f_5(d){this.a=d},
eZW:function eZW(d,e){this.a=d
this.b=e},
f_6:function f_6(d,e){this.a=d
this.b=e},
eZV:function eZV(d,e){this.a=d
this.b=e},
f_7:function f_7(d,e){this.a=d
this.b=e},
eZU:function eZU(d,e){this.a=d
this.b=e},
eZJ:function eZJ(){},
eZK:function eZK(){},
bqF:function bqF(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bq6:function bq6(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bao:function bao(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bq8:function bq8(d,e,f){this.b=d
this.c=e
this.a=f},
bu6:function bu6(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMU:function aMU(){},
hnF(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.v(w,0)),u=e.aC(0,new C.v(w,0)),t=1-f,s=3*t
return d.aH(0,t*t*t).ad(0,v.aH(0,s*t*f)).ad(0,u.aH(0,s*f*f)).ad(0,e.aH(0,f*f*f))},
bgU(d,e,f,g,h,i){return $.hQc.ca(0,d+"|"+C.u(e)+"|"+f.l()+"|"+C.u(g),new B.dib(d,e,f,i,g,h))},
a0h:function a0h(d,e){this.a=d
this.b=e},
q7:function q7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qN:function qN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Cr:function Cr(d,e){this.a=d
this.b=e},
Zf:function Zf(d,e){this.a=d
this.b=e},
aeK:function aeK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0u:function a0u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CB:function CB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abD:function abD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abU:function abU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adQ:function adQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgS:function bgS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bu$=_.bI$=0},
dif:function dif(d){this.a=d},
dig:function dig(d){this.a=d},
dic:function dic(d,e){this.a=d
this.b=e},
did:function did(d){this.a=d},
die:function die(d){this.a=d},
dih:function dih(d){this.a=d},
dii:function dii(d){this.a=d},
dij:function dij(d){this.a=d},
dik:function dik(d){this.a=d},
dil:function dil(d){this.a=d},
dim:function dim(d){this.a=d},
din:function din(d){this.a=d},
dio:function dio(d){this.a=d},
dip:function dip(d){this.a=d},
FR:function FR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VS:function VS(d){this.a=d},
aEa:function aEa(d,e,f,g,h,i,j){var _=this
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
_.bt$=i
_.a9$=j
_.c=_.a=null},
eoP:function eoP(d){this.a=d},
eoE:function eoE(d){this.a=d},
eoG:function eoG(){},
eoH:function eoH(){},
eoK:function eoK(){},
eoL:function eoL(d,e,f){this.a=d
this.b=e
this.c=f},
eoM:function eoM(d){this.a=d},
eoN:function eoN(d){this.a=d},
eoI:function eoI(){},
eoJ:function eoJ(d){this.a=d},
epe:function epe(d){this.a=d},
eoO:function eoO(){},
eoA:function eoA(d){this.a=d},
eoR:function eoR(d){this.a=d},
eoQ:function eoQ(d){this.a=d},
eoT:function eoT(){},
eoS:function eoS(d,e){this.a=d
this.b=e},
eoD:function eoD(){},
eoB:function eoB(d){this.a=d},
eoC:function eoC(d){this.a=d},
epc:function epc(d){this.a=d},
epb:function epb(d){this.a=d},
epd:function epd(d){this.a=d},
ep2:function ep2(d,e){this.a=d
this.b=e},
epa:function epa(d){this.a=d},
ep8:function ep8(d){this.a=d},
ep9:function ep9(d){this.a=d},
ep7:function ep7(d){this.a=d},
ep6:function ep6(d){this.a=d},
ep3:function ep3(d){this.a=d},
ep4:function ep4(d){this.a=d},
ep5:function ep5(d){this.a=d},
eoF:function eoF(){},
eoZ:function eoZ(d){this.a=d},
ep_:function ep_(d){this.a=d},
eoY:function eoY(d){this.a=d},
ep0:function ep0(d){this.a=d},
eoX:function eoX(d){this.a=d},
ep1:function ep1(d){this.a=d},
eoW:function eoW(d){this.a=d},
eoV:function eoV(d){this.a=d},
eoU:function eoU(d,e){this.a=d
this.b=e},
bgT:function bgT(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dib:function dib(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aM0:function aM0(){},
bls:function bls(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
PU:function PU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
W6:function W6(d){this.a=d},
bkw:function bkw(d,e,f,g,h,i,j,k){var _=this
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
_.bt$=j
_.a9$=k
_.c=_.a=null},
eAU:function eAU(d){this.a=d},
eAS:function eAS(d){this.a=d},
eAT:function eAT(){},
eAv:function eAv(){},
eAu:function eAu(){},
eAE:function eAE(d,e){this.a=d
this.b=e},
eAG:function eAG(d){this.a=d},
eAK:function eAK(d){this.a=d},
eAF:function eAF(d){this.a=d},
eAL:function eAL(d){this.a=d},
eAM:function eAM(d){this.a=d},
eAN:function eAN(d,e){this.a=d
this.b=e},
eAD:function eAD(d,e){this.a=d
this.b=e},
eAO:function eAO(d){this.a=d},
eAC:function eAC(d){this.a=d},
eAP:function eAP(d,e){this.a=d
this.b=e},
eAB:function eAB(d,e){this.a=d
this.b=e},
eAQ:function eAQ(d){this.a=d},
eAA:function eAA(d,e){this.a=d
this.b=e},
eAR:function eAR(d){this.a=d},
eAz:function eAz(d){this.a=d},
eAH:function eAH(d){this.a=d},
eAy:function eAy(d){this.a=d},
eAI:function eAI(d){this.a=d},
eAx:function eAx(d){this.a=d},
eAJ:function eAJ(d,e){this.a=d
this.b=e},
eAw:function eAw(d,e){this.a=d
this.b=e},
brW:function brW(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Wi:function Wi(d){this.a=d},
aEq:function aEq(d,e,f,g){var _=this
_.d=d
_.e=$
_.f=e
_.r="bounce"
_.w=3
_.x=56
_.y=0
_.z=!0
_.Q=0
_.bt$=f
_.a9$=g
_.c=_.a=null},
eHt:function eHt(d,e){this.a=d
this.b=e},
eHu:function eHu(d,e,f){this.a=d
this.b=e
this.c=f},
eHv:function eHv(d){this.a=d},
eHs:function eHs(){},
eHw:function eHw(d,e){this.a=d
this.b=e},
eHr:function eHr(d,e){this.a=d
this.b=e},
eHx:function eHx(d,e){this.a=d
this.b=e},
eHq:function eHq(d,e){this.a=d
this.b=e},
eHy:function eHy(d){this.a=d},
eHp:function eHp(d){this.a=d},
eHz:function eHz(d,e){this.a=d
this.b=e},
eHo:function eHo(d,e){this.a=d
this.b=e},
eHA:function eHA(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHn:function eHn(d,e){this.a=d
this.b=e},
aM9:function aM9(){},
aMf:function aMf(){},
a_M:function a_M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
VP:function VP(d){this.a=d},
aE2:function aE2(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ft$=h
_.l7$=i
_.fX$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
elk:function elk(d){this.a=d},
ell:function ell(d,e){this.a=d
this.b=e},
el8:function el8(d,e){this.a=d
this.b=e},
el9:function el9(d){this.a=d},
el6:function el6(d){this.a=d},
el7:function el7(d){this.a=d},
el5:function el5(d){this.a=d},
ela:function ela(d){this.a=d},
el4:function el4(d,e){this.a=d
this.b=e},
elc:function elc(d){this.a=d},
el3:function el3(d,e){this.a=d
this.b=e},
eld:function eld(d){this.a=d},
el2:function el2(d,e){this.a=d
this.b=e},
ele:function ele(d){this.a=d},
el1:function el1(d){this.a=d},
elf:function elf(d){this.a=d},
el0:function el0(d){this.a=d},
elg:function elg(d){this.a=d},
el_:function el_(d){this.a=d},
elh:function elh(d){this.a=d},
eli:function eli(d){this.a=d},
elj:function elj(d){this.a=d},
ekZ:function ekZ(d){this.a=d},
elb:function elb(d){this.a=d},
blf:function blf(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abK:function abK(d,e,f){this.a=d
this.b=e
this.c=f},
Wd:function Wd(d){this.a=d},
bkB:function bkB(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.ft$=i
_.l7$=j
_.fX$=k
_.fu$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
eGV:function eGV(d){this.a=d},
eGW:function eGW(d){this.a=d},
eGU:function eGU(d){this.a=d},
eGK:function eGK(d,e){this.a=d
this.b=e},
eGL:function eGL(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGJ:function eGJ(d){this.a=d},
eGH:function eGH(d){this.a=d},
eGA:function eGA(d){this.a=d},
eGB:function eGB(d){this.a=d},
eGz:function eGz(d){this.a=d},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGG:function eGG(d,e){this.a=d
this.b=e},
eGN:function eGN(d,e){this.a=d
this.b=e},
eGF:function eGF(d,e){this.a=d
this.b=e},
eGO:function eGO(d){this.a=d},
eGE:function eGE(d){this.a=d},
eGP:function eGP(d){this.a=d},
eGD:function eGD(d,e){this.a=d
this.b=e},
eGQ:function eGQ(d){this.a=d},
eGC:function eGC(d,e){this.a=d
this.b=e},
eGR:function eGR(d){this.a=d},
eGy:function eGy(d,e){this.a=d
this.b=e},
eGS:function eGS(d){this.a=d},
eGx:function eGx(d,e){this.a=d
this.b=e},
eGT:function eGT(d){this.a=d},
eGw:function eGw(d,e){this.a=d
this.b=e},
bsO:function bsO(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
acc:function acc(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Uk:function Uk(d){this.a=d},
aCD:function aCD(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.ft$=h
_.l7$=i
_.fX$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
dHG:function dHG(d){this.a=d},
dHF:function dHF(d,e){this.a=d
this.b=e},
dHH:function dHH(){},
dHI:function dHI(d){this.a=d},
dHw:function dHw(d,e){this.a=d
this.b=e},
dHz:function dHz(d){this.a=d},
dHy:function dHy(d,e){this.a=d
this.b=e},
dHx:function dHx(d,e){this.a=d
this.b=e},
dHD:function dHD(d,e,f){this.a=d
this.b=e
this.c=f},
dHC:function dHC(d){this.a=d},
dHA:function dHA(d){this.a=d},
dHB:function dHB(d){this.a=d},
dHE:function dHE(d){this.a=d},
baJ:function baJ(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cMK:function cMK(d){this.a=d},
aL8:function aL8(){},
bx0:function bx0(){},
aLY:function aLY(){},
bxh:function bxh(){},
aMc:function aMc(){},
bxp:function bxp(){},
FN:function FN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
ad1:function ad1(d,e,f){this.a=d
this.b=e
this.c=f},
VJ:function VJ(d){this.a=d},
bka:function bka(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.ft$=i
_.l7$=j
_.fX$=k
_.fu$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
egO:function egO(d,e){this.a=d
this.b=e},
ehc:function ehc(d){this.a=d},
eh1:function eh1(d){this.a=d},
egT:function egT(d){this.a=d},
eh2:function eh2(d,e){this.a=d
this.b=e},
eh3:function eh3(d){this.a=d},
egS:function egS(d){this.a=d},
eh_:function eh_(d){this.a=d},
eh0:function eh0(d){this.a=d},
egZ:function egZ(d){this.a=d},
eh4:function eh4(d,e){this.a=d
this.b=e},
egY:function egY(d,e){this.a=d
this.b=e},
eh5:function eh5(d,e){this.a=d
this.b=e},
egX:function egX(d,e){this.a=d
this.b=e},
eh6:function eh6(d,e){this.a=d
this.b=e},
egW:function egW(d,e){this.a=d
this.b=e},
eh7:function eh7(d){this.a=d},
egV:function egV(d,e){this.a=d
this.b=e},
eh8:function eh8(d){this.a=d},
egU:function egU(d){this.a=d},
eh9:function eh9(d){this.a=d},
egR:function egR(d){this.a=d},
eha:function eha(d){this.a=d},
egQ:function egQ(d){this.a=d},
ehb:function ehb(d){this.a=d},
egP:function egP(d){this.a=d},
bhN:function bhN(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
adx:function adx(d,e){this.a=d
this.b=e
this.c=-1000},
VO:function VO(d){this.a=d},
aE1:function aE1(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.ft$=h
_.l7$=i
_.fX$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
ekI:function ekI(d,e){this.a=d
this.b=e},
ekJ:function ekJ(d,e,f){this.a=d
this.b=e
this.c=f},
ekQ:function ekQ(d){this.a=d},
ekP:function ekP(d){this.a=d},
ekR:function ekR(d,e){this.a=d
this.b=e},
ekS:function ekS(d){this.a=d},
ekO:function ekO(d){this.a=d},
ekT:function ekT(d){this.a=d},
ekN:function ekN(d,e){this.a=d
this.b=e},
ekU:function ekU(d,e){this.a=d
this.b=e},
ekM:function ekM(d,e){this.a=d
this.b=e},
ekV:function ekV(d,e){this.a=d
this.b=e},
ekL:function ekL(d,e){this.a=d
this.b=e},
ekW:function ekW(d){this.a=d},
ekX:function ekX(d){this.a=d},
ekK:function ekK(d){this.a=d},
ekY:function ekY(d){this.a=d},
blg:function blg(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aLW:function aLW(){},
bxf:function bxf(){},
aLX:function aLX(){},
bxg:function bxg(){},
feQ(d,e,f){var w=null,v=e.j(0.12),u=C.n(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8P,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.i7,w,w,1/0)},
i4M(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.U(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.L)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdL(j),j=j.gae(j);j.C();){s=j.gR(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e5(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bM(0,new B.fzm(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.wh.h(0,d[n]).a)return!1
m=C.ew([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.L)(j),++u){k=j[u]
if(m.L(0,k))l.push(k)}return m.a===d.length},
h2x(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cH(w,v[0])*16+A.a.cH(w,v[1])*4+A.a.cH(w,v[2])]},
tl:function tl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9C:function b9C(d,e){this.a=d
this.b=e},
fzm:function fzm(d,e){this.a=d
this.b=e},
VM:function VM(d){this.a=d},
aE_:function aE_(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
ekc:function ekc(d){this.a=d},
ekb:function ekb(d,e){this.a=d
this.b=e},
ejZ:function ejZ(d,e){this.a=d
this.b=e},
ejT:function ejT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ejU:function ejU(d){this.a=d},
ejY:function ejY(d,e){this.a=d
this.b=e},
ejX:function ejX(d,e){this.a=d
this.b=e},
ejV:function ejV(d){this.a=d},
ejW:function ejW(d,e){this.a=d
this.b=e},
ek6:function ek6(){},
ek7:function ek7(d){this.a=d},
ek5:function ek5(d){this.a=d},
ek8:function ek8(d){this.a=d},
ek4:function ek4(d){this.a=d},
ek2:function ek2(d){this.a=d},
ek3:function ek3(d,e){this.a=d
this.b=e},
ek_:function ek_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ek1:function ek1(d){this.a=d},
ek9:function ek9(d,e){this.a=d
this.b=e},
ek0:function ek0(d,e){this.a=d
this.b=e},
eka:function eka(d,e){this.a=d
this.b=e},
biu:function biu(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dql:function dql(d,e){this.a=d
this.b=e},
UJ:function UJ(d){this.a=d},
bjq:function bjq(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dQr:function dQr(d){this.a=d},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQg:function dQg(d){this.a=d},
dQf:function dQf(){},
dQh:function dQh(d){this.a=d},
dQe:function dQe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQp:function dQp(){},
dQk:function dQk(){},
dQl:function dQl(d,e){this.a=d
this.b=e},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQm:function dQm(d){this.a=d},
dQi:function dQi(d){this.a=d},
dQn:function dQn(d,e){this.a=d
this.b=e},
dQo:function dQo(d,e){this.a=d
this.b=e},
UZ:function UZ(d){this.a=d},
aD6:function aD6(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bt$=g
_.a9$=h
_.c=_.a=null},
dTg:function dTg(d){this.a=d},
dTf:function dTf(d,e){this.a=d
this.b=e},
dT3:function dT3(){},
dT2:function dT2(d,e){this.a=d
this.b=e},
dT4:function dT4(d){this.a=d},
dT8:function dT8(d){this.a=d},
dT7:function dT7(d,e){this.a=d
this.b=e},
dT9:function dT9(d){this.a=d},
dT6:function dT6(d,e){this.a=d
this.b=e},
dTa:function dTa(d){this.a=d},
dT5:function dT5(d,e){this.a=d
this.b=e},
dTb:function dTb(d){this.a=d},
dTc:function dTc(d){this.a=d},
dTd:function dTd(d){this.a=d},
dTe:function dTe(d){this.a=d},
bdO:function bdO(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d5s:function d5s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d5u:function d5u(d,e,f){this.a=d
this.b=e
this.c=f},
d5t:function d5t(d,e){this.a=d
this.b=e},
aLm:function aLm(){},
bA9(d,e,f){var w=null,v=e.j(0.12),u=C.n(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8P,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.i7,w,w,1/0)},
fsn(d,e,f,g,h){var w,v,u=null,t=C.fZ(u,u,u,u,C.d0(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.c6,u,A.dO,A.c3)
t.en()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.v(v/2,w.gbc(w)/2))
t.a3(d,w)},
i1N(){var w,v,u,t,s,r,q,p,o=new C.eE()
o.dt(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.am(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.av(5)
if(r.L(0,p))q.push(new C.z(p,1+o.av(2+A.o.am(t,3))))}A.d.aZ(q,new B.ftn())
w.push(new B.aRQ(q))}return w},
a1I(d,e){var w,v,u,t
for(w=new C.Xl(d),v="";w.C();){u=C.jK(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jK(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
ieB(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Xl(d),v=0,u="";w.C();){t=C.jK(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.E(v,p)
u+=C.jK(65+A.o.E(A.o.E(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aRQ:function aRQ(d){this.a=d},
bG9:function bG9(){},
ftn:function ftn(){},
Ub:function Ub(d){this.a=d},
bj4:function bj4(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dDR:function dDR(){},
dE3:function dE3(d){this.a=d},
dE2:function dE2(d,e,f){this.a=d
this.b=e
this.c=f},
dE4:function dE4(d){this.a=d},
dE1:function dE1(d,e){this.a=d
this.b=e},
dDS:function dDS(d,e){this.a=d
this.b=e},
dDX:function dDX(){},
dDY:function dDY(d){this.a=d},
dDW:function dDW(d){this.a=d},
dDZ:function dDZ(d,e){this.a=d
this.b=e},
dDV:function dDV(d,e){this.a=d
this.b=e},
dE_:function dE_(d,e){this.a=d
this.b=e},
dDU:function dDU(d,e){this.a=d
this.b=e},
dE0:function dE0(d){this.a=d},
dDT:function dDT(d){this.a=d},
b9O:function b9O(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cFh:function cFh(d,e){this.a=d
this.b=e},
Vc:function Vc(d){this.a=d},
bjC:function bjC(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bt$=g
_.a9$=h
_.c=_.a=null},
dXj:function dXj(d){this.a=d},
dXi:function dXi(d,e){this.a=d
this.b=e},
dXk:function dXk(d){this.a=d},
dXh:function dXh(d,e){this.a=d
this.b=e},
dX9:function dX9(d,e,f){this.a=d
this.b=e
this.c=f},
dXd:function dXd(d){this.a=d},
dXc:function dXc(d){this.a=d},
dXe:function dXe(d,e){this.a=d
this.b=e},
dXb:function dXb(d,e){this.a=d
this.b=e},
dXf:function dXf(d){this.a=d},
dXa:function dXa(d,e){this.a=d
this.b=e},
dXg:function dXg(d,e){this.a=d
this.b=e},
bfh:function bfh(d,e,f){this.b=d
this.c=e
this.a=f},
dds:function dds(d,e){this.a=d
this.b=e},
ddt:function ddt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ul:function Ul(d){this.a=d},
bjh:function bjh(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dI2:function dI2(d){this.a=d},
dI1:function dI1(d,e){this.a=d
this.b=e},
dHL:function dHL(){},
dHU:function dHU(d){this.a=d},
dHT:function dHT(){},
dHV:function dHV(d){this.a=d},
dHS:function dHS(){},
dHW:function dHW(d){this.a=d},
dHR:function dHR(d){this.a=d},
dHX:function dHX(d){this.a=d},
dHQ:function dHQ(d){this.a=d},
dHY:function dHY(d){this.a=d},
dHP:function dHP(d){this.a=d},
dHZ:function dHZ(d,e){this.a=d
this.b=e},
dHO:function dHO(d,e){this.a=d
this.b=e},
dI_:function dI_(d){this.a=d},
dHN:function dHN(d,e){this.a=d
this.b=e},
dI0:function dI0(d){this.a=d},
dHM:function dHM(d,e){this.a=d
this.b=e},
aL0:function aL0(){},
aLu:function aLu(){},
hsK(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gcn()*0.1
return new C.v((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h8M(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a4p(w,v,u,A.cH,C.U(x.N,x.y))},
hAk(d,e,f){var w=d.c,v=e===0?-1:1
return new C.v(w*f.a+v*B.h8N(d),d.d*f.b)},
h8N(d){return 42+(D.m3.ai(0,d.b)?(d.ch-1)*38:0)},
ed:function ed(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ty:function ty(d,e,f,g){var _=this
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
aai:function aai(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abp:function abp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4p:function a4p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bMA:function bMA(){},
bML:function bML(d){this.a=d},
bMG:function bMG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMM:function bMM(d){this.a=d},
bMN:function bMN(d){this.a=d},
bMP:function bMP(d){this.a=d},
bMQ:function bMQ(d){this.a=d},
bMO:function bMO(d){this.a=d},
bMR:function bMR(d,e,f){this.a=d
this.b=e
this.c=f},
bMS:function bMS(d){this.a=d},
bMC:function bMC(d){this.a=d},
bMD:function bMD(d){this.a=d},
bMB:function bMB(d){this.a=d},
bME:function bME(d,e,f){this.a=d
this.b=e
this.c=f},
bMF:function bMF(d){this.a=d},
bMz:function bMz(d){this.a=d},
bMT:function bMT(d,e){this.a=d
this.b=e},
bMH:function bMH(d,e){this.a=d
this.b=e},
bMK:function bMK(d){this.a=d},
bMJ:function bMJ(d){this.a=d},
bMI:function bMI(d){this.a=d},
aiF:function aiF(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bHn:function bHn(){},
bHo:function bHo(){},
mC:function mC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
clY:function clY(d){this.a=d},
ic9(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fKJ(),c9=new B.fKL(),d0=new B.fKM(),d1=new B.fKK(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aE(w,d1.$3(new C.a8(w.a,w.b,w.c,w.d),A.bL,A.bK))
d3.bE(D.eaE,D.e8r,c9.$2(A.dB,1.4))
d3.bE(D.e8h,D.e8g,c9.$2(A.br,2.4))
d3.bE(D.e8i,Y.aHn,c9.$2(A.br,2.4))
if(c7){d2=c8.$1(A.f9.j(0.5))
d2.z=A.Ry
d3.af(D.e81,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new C.v(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aE(d0.$4(-22,-26,44,50),d1.$3(D.aNd,A.aQ,A.cr))
d3.af(A.cJ,16,c8.$1(A.br))
d3.af(A.cJ,13,c8.$1(c7?A.aO.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.jc(0,d4.y*0.6)
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
r.delete()}}d3.af(D.eaA,2.4,c8.$1(c7?A.bc:A.ak))
d3.af(D.ebh,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aE(d0.$5(-14,14,28,12,4),c8.$1(A.ee))
d2=$.W().r
t=x.v
q=new C.aO(d2,A.ao,c6,c6,C.a([],t))
q.F(new C.b5(-16,-26))
q.F(new C.ap(16,-26))
q.F(new C.ap(12,14))
q.F(new C.ap(-12,14))
q.F(new C.bE())
d3.aR(q,c8.$1(A.f9.j(0.35)))
if(c7){d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(-14,-10))
d2.F(new C.ap(14,-10))
d2.F(new C.ap(12,14))
d2.F(new C.ap(-12,14))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.av.j(0.7)))}d3.aR(q,c9.$2(A.ad,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.jc(0,d4.y)
d3.bE(D.a5S,D.aHD,c9.$2(A.bN,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f1).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aE(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.af(A.iu,3,c8.$1(c7?A.bc:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a3B[m]
r=c9.$2(A.br,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.by(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.ce(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(C.c_(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
w.F(new C.b5(-24,-12))
w.F(new C.ap(10,-12))
w.F(new C.ap(10,2))
w.F(new C.ap(-2,2))
w.F(new C.ap(-6,22))
w.F(new C.ap(-16,22))
w.F(new C.ap(-14,2))
w.F(new C.ap(-24,2))
w.F(new C.bE())
d3.aR(w,d1.$3(D.ePK,A.aM,A.d5))
d3.b_(D.eP9,c8.$1(A.dw))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.jc(0,d4.y*2)
d3.bE(A.J,D.e8l,c9.$2(A.bN,2.4))
d3.bE(A.a5R,D.e8k,c9.$2(A.hP,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dR.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(16,-6))
d2.F(new C.ap(52,-26))
d2.F(new C.ap(52,18))
d2.F(new C.ap(16,4))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.bM.j(0.35*v)))}d3.aE(d0.$5(-26,-6,30,12,3),d1.$3(D.ePQ,A.bn,A.cs))
k=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
k.F(new C.b5(4,-6))
k.F(new C.ap(18,-12))
k.F(new C.ap(18,12))
k.F(new C.ap(4,6))
k.F(new C.bE())
d3.aR(k,c8.$1(A.ee))
d3.af(D.e8p,7,c8.$1(c7?A.c:A.dw))
return!0
case"neon":d3.aE(d0.$5(-30,-14,60,28,6),c8.$1(L.mn))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bl(d5*17),3)!==0
else j=!1
i=j?A.bX:D.bj1
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bX.j(0.35))
t.z=A.lz
d3.aE(d2,t)}d3.aE(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.eaK,i,17)
return!0
case"microwave":d3.aE(d0.$4(-30,-18,60,38),d1.$3(D.ePW,A.bN,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.aE(d2,c8.$1(c7?A.bM.j(0.75):A.aw))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.jc(0,d4.y*0.5)
d3.hZ(C.ce(A.J,7,22),c8.$1(A.d5))
d2.restore()}d3.aE(d0.$5(15,-14,12,12,2),c8.$1(L.mn))
if(c7)d6.$5(d3,"0:"+A.a.aX(A.o.u(59-A.o.E(A.k.bl(d5),60)),2,"0"),D.e8q,A.b0,6.5)
d3.af(D.e8C,4,c8.$1(A.dw))
return!0
case"doorbell":d3.aE(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.af(A.Sn,10,c8.$1(c7?A.bH:A.br))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.jc(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.ebj,A.c,16)
d2.restore()
d3.af(A.ke,6,c8.$1(A.d_))
d3.af(A.ke,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bV(A.Sn,14+v*6+A.k.E(t,6))
r=c9.$2(A.bH.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c_(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bE(D.eaJ,D.ebf,c9.$2(A.br,4))
d2=d3.a
J.by(d2.save())
d3.jc(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aE(d0.$5(-24,-14,46,22,5),d1.$3(D.ePL,A.bN,A.ak))
d3.af(D.aHp,8,c8.$1(A.aw))
d3.af(D.aHp,4.5,c8.$1(c7?A.aO:A.cs))
d3.af(D.eaH,2.2,c8.$1(c7&&A.o.E(A.k.bl(d5*1.6),2)===0?A.av:A.ku))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eaS,A.av,9)
return!0
case"console":d3.aE(d0.$5(-28,-22,56,44,8),d1.$3(D.ePT,A.j0,A.fc))
d3.aE(d0.$5(-20,-17,40,22,3),c8.$1(A.dI))
if(c7){d2=d5*2.3
d3.af(new C.v(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.b_(new C.a8(-18,t,-15.6,t+8),c8.$1(A.b0))
d2=-9+Math.sin(d2-0.4)*6
d3.b_(new C.a8(15.6,d2,18,d2+8),c8.$1(A.bX))}d3.af(D.eaD,4,c8.$1(A.aW))
d3.af(D.e8m,2.4,c8.$1(A.av))
d3.af(D.e8z,2.4,c8.$1(A.bc))
return!0
case"heartmon":d3.aE(d0.$5(-30,-22,60,44,6),c8.$1(A.aw))
d3.aE(d0.$5(-26,-18,52,28,3),c8.$1(A.dI))
if(c7){d2=$.W()
t=C.a([],x.v)
h=new C.aO(d2.r,A.ao,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.E((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new C.b5(l,f)
t.push(s)
p=h.f
if(p!=null)s.bD(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bD(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aR(h,c9.$2(A.b0,1.8))
d6.$5(d3,"72",D.e8n,A.h5,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eaW,A.h5.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.af(D.eaM,3,c8.$1(c7?A.bc:A.br))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aE(d2,c8.$1(A.cA.j(c7?0.5:0.3)))
d3.aE(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.b_(D.ePN,c8.$1(F.tp))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.ti(0,-1,1)
d3.hZ(C.ce(A.J,8,14),c8.$1(A.ct))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,0))
d2.F(new C.ap(-12,-4))
d2.F(new C.ap(-12,4))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.cc))
d3.af(D.e93,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.E(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.E(v,2)
r=c9.$2(A.ad,1).H()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.W().r
t=x.v
e=new C.aO(d2,A.ao,c6,c6,C.a([],t))
e.F(new C.b5(-9,22))
e.F(new C.ap(-5,-16))
e.F(new C.ap(5,-16))
e.F(new C.ap(9,22))
e.F(new C.bE())
d3.aR(e,d1.$3(D.eQg,A.c,A.bz))
d3.b_(D.eQf,c8.$1(c7?A.dR:A.br))
s=new C.aO(d2,A.ao,c6,c6,C.a([],t))
s.F(new C.b5(-7,-22))
s.F(new C.ap(0,-29))
s.F(new C.ap(7,-22))
s.F(new C.bE())
d3.aR(s,c8.$1(A.es))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(0,-19))
t=d*34
d2.F(new C.ap(t,-26))
d2.F(new C.ap(t,-12))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.dR.j(0.45)))
d2=c8.$1(A.dR.j(0.35))
d2.z=A.Ry
d3.af(D.e82,14,d2)}return!0
case"discoball":d3.bE(D.e87,K.aHl,c9.$2(A.dw,1.4))
d3.af(A.J,16,d1.$3(D.ePy,A.aQ,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dr,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dr,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.E(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d8f[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aE(d0.$5(-14,-4,28,24,5),d1.$3(D.ePw,A.cr,A.ak))
d3.aE(d0.$5(-12,-26,24,20,5),d1.$3(D.ePp,A.aL,A.bK))
d3.bE(D.e86,D.e88,c9.$2(A.br,1.6))
d3.af(D.e89,2.2,c8.$1(c7?A.av:A.br))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a3D[m]
if(c7)t=a1?A.b8:A.f3
else t=A.cs
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.jc(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bE(A.J,D.a5O,c9.$2(A.bK,4))
d2.restore()
d3.bE(D.eaw,D.eaQ,c9.$2(A.bK,4))
d3.b_(D.eQe,c8.$1(c7?A.b8.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.ayl[m]+1,d2,10,14,2)
p=C.aq(A.bM,A.d5,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.er(s),r)
r.delete()}d3.aE(d0.$5(-24,-6,48,26,8),d1.$3(D.ePM,A.bN,A.bn))
for(m=0;m<2;++m){l=D.ayl[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fl:A.aw).H()
t.drawRRect(C.er(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.ct.j(0.5))
s.z=G.mJ
r=s.H()
t.drawRRect(C.er(d2),r)
r.delete()}}d3.bE(D.e8G,D.e8X,c9.$2(A.aw,3))
return!0
case"ledstrip":d3.aE(d0.$5(-34,-4,68,10,4),c8.$1(A.cs))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new H.mS(1,a3,0.8,1).iM():A.ee
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mJ
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aE(d0.$5(-40,-2,6,6,1),c8.$1(A.dw))
return!0
case"pump":d3.aE(d0.$5(-16,-2,32,22,6),d1.$3(D.ePB,A.cA,A.Li))
d3.af(D.eaX,8,c8.$1(A.qX))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.jc(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.f9,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
t.F(new C.b5(16,6))
t.F(new C.ap(26,6))
t.F(new C.ap(26,-20))
t.F(new C.ap(10,-20))
d3.aR(t,c9.$2(A.bK,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.E(t+v*0.2,1)
r=c8.$1(A.fX).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.af(D.e9v,3.2,c8.$1(A.fX.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.jc(0,-0.15)
d3.aE(d0.$5(-26,-14,40,22,10),d1.$3(D.ePO,A.iX,A.ts))
d3.aE(d0.$5(14,-10,12,14,3),c8.$1(A.cs))
d3.aE(d0.$5(-10,6,12,22,4),c8.$1(A.ee))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.ct.j(0.4))
d2.z=G.mJ
d3.af(D.e8B,8,d2)}return!0
case"headphones":d3.fa(C.ce(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.br,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.QY[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a8(s,0,s+14,20),A.bu,A.oK).H()
d2.drawRRect(C.er(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bV(new C.v(l,10),10+v*5+A.k.E(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eC.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c_(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.v(-4,-8-A.k.E(d5*14,8)),A.kp,12)
return!0
case"smartwatch":d3.aE(d0.$5(-8,-30,16,14,3),c8.$1(A.cs))
d3.aE(d0.$5(-8,14,16,14,3),c8.$1(A.cs))
d3.aE(d0.$5(-14,-17,28,32,8),d1.$3(D.ePu,A.dw,A.ee))
d3.aE(d0.$5(-11,-14,22,26,6),c8.$1(A.dI))
if(c7){a4=new C.T(Date.now(),0,!1)
d6.$5(d3,A.a.aX(A.o.u(C.dk(a4)),2,"0")+":"+A.a.aX(A.o.u(C.h4(a4)),2,"0"),D.e8d,A.b0,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.Ev,A.h5,g)
d2.toString
d6.$5(d3,"\u2665",new C.v(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bl(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aE(d0.$5(-30,-22,60,44,6),c8.$1(L.mn))
d3.aE(d0.$5(-30,-22,60,44,6),c9.$2(A.bK,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(a5),$.oP(),!0)
d2.translate(-27,-19)
E.Le(d3,D.eW3,d5,c6)
d2.restore()}else d3.aE(a5,c8.$1(D.vr))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aE(a6,d1.$3(new C.a8(a6.a,a6.b,a6.c,a6.d),A.dM,A.d8))
d3.aE(a6,c9.$2(A.aZ,1.2))
d3.af(D.aHK,9,c8.$1(A.aw))
d3.af(D.aHK,6,c9.$2(A.d5,2))
d3.aE(d0.$5(4,-2,14,10,2),c8.$1(A.aw))
d3.aE(d0.$5(-22,-19,44,12,2),c8.$1(A.dI))
d2=A.k.ab(d4.db,1)
t=A.k.ab(c7?d4.dx:d4.e,1)
s=c7?A.b0:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e9z,s,8.2)
d3.af(D.e8s,2.4,c8.$1(c7?A.bc:A.aJ))
d6.$5(d3,"IN",D.eaR,A.ad,6)
d6.$5(d3,"OUT",D.e9n,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bK,A.av,a7)
t.toString
d3.aE(d2,c8.$1(t))
d3.af(D.e83,3,c8.$1(A.aJ))
d3.aE(d0.$5(-12,-4,24,18,3),d1.$3(D.ePq,A.ee,A.hM))
d6.$5(d3,"7805",D.a5S,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.dei[m]-1
r=c8.$1(A.e3).H()
d2.drawRect(C.c_(new C.a8(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.ebi,A.bk,9)
return!0
case"diode":d3.bE(D.aHO,D.aHy,c9.$2(A.e3,2.4))
d3.aE(d0.$5(-14,-7,28,14,6),c8.$1(A.aF.j(0.85)))
d3.b_(D.ePf,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dR.j(0.4))
t.z=A.jw
d3.aE(d2,t)}d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,-4))
d2.F(new C.ap(-8,4))
d2.F(new C.ap(-1,0))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.eaF,A.aA,8)
return!0
case"ldr":d3.bE(D.aHO,D.a5S,c9.$2(A.e3,2.4))
d3.bE(D.aHD,D.aHy,c9.$2(A.e3,2.4))
d3.af(A.J,12,c8.$1(A.d5))
d3.af(A.J,12,c9.$2(A.tB,1.6))
d2=$.W()
t=C.a([],x.v)
a8=new C.aO(d2.r,A.ao,c6,c6,t)
a8.F(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bD(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aR(a8,c9.$2(A.bM,1.4))
d2=C.aq(A.br,A.dR,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.v(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.eax,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ed
break A}if("sonytv"===d2){t=A.qS
break A}if("appletv"===d2){t=A.e3
break A}t=F.Ex
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aE(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.by(p.save())
p.clipRRect(C.er(a5),$.oP(),!0)
p.translate(t,s)
E.h4W(d3,new C.as(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.af(D.e8Y,1.6,c8.$1(A.b0))}else{d3.aE(a5,c8.$1(D.vr))
p=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
p.F(new C.b5(t,s))
p.F(new C.ap(t+24,s))
p.F(new C.ap(t,s+22))
p.F(new C.bE())
d3.aR(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aE(d0.$5(-22,19,44,3,1.5),c8.$1(A.dw))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.l6[m]
s=$.W()
p=C.a([],t)
s=new C.aO(s.r,A.ao,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bE())
r=c8.$1(A.dw).H()
p=s.gbK().a.snapshot()
d2.drawPath((s.e=new C.cC(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.eaa,A.bN,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,18))
d2.F(new C.ap(8,18))
d2.F(new C.ap(12,25))
d2.F(new C.ap(-12,25))
d2.F(new C.bE())
d3.aR(d2,c8.$1(D.Xf))
d6.$5(d3,"Apple TV",D.e9A,A.br,4.8)
break
default:d3.aE(d0.$5(-34,19,68,7,3),c8.$1(D.bhw))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dr,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.ebe,F.tp,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.m3.h(0,d2)
b1=b0.b===D.wu
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
d3.aE(w,d1.$3(new C.a8(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.by(t.save())
t.clipRRect(C.er(a5),$.oP(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.Le(d3,new C.as(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aE(a5,c8.$1(D.vr))
if(b1){t=a5.b
s=a5.d
d3.bE(new C.v(0,t),new C.v(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aE(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.af(new C.v(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aE(d0.$5(-17,-28,34,52,4),c8.$1(A.ee))
d3.aE(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bN))
if(c7){d6.$5(d3,"NGMY",D.ebl,A.aw,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bn).H()
d2.drawRect(C.c_(new C.a8(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.af(A.aHj,1.6,c8.$1(A.aw))}return!0
case"laptop":d3.aE(d0.$5(-30,-28,60,42,4),d1.$3(D.ePX,A.cr,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b8),$.oP(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.Le(d3,new C.as(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aE(b8,c8.$1(D.vr))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-38,16))
d2.F(new C.ap(38,16))
d2.F(new C.ap(34,21))
d2.F(new C.ap(-34,21))
d2.F(new C.bE())
d3.aR(d2,c8.$1(D.Xf))
d3.aE(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.aE(d0.$5(-32,-28,64,46,5),d1.$3(D.eQ0,A.bL,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(b9),$.oP(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.Le(d3,new C.as(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aE(b9,c8.$1(D.vr))
d3.af(D.aHe,2,c8.$1(A.bK))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,18))
d2.F(new C.ap(6,18))
d2.F(new C.ap(10,26))
d2.F(new C.ap(-10,26))
d2.F(new C.bE())
d3.aR(d2,c8.$1(D.Xf))
return!0
case"monitor":d3.aE(d0.$5(-34,-28,68,40,3),c8.$1(A.ed))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c0),$.oP(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.Le(d3,new C.as(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aE(c0,c8.$1(D.vr))
d3.b_(D.eQ6,c8.$1(A.bn))
d3.aE(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dw))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(14,4))
d2.F(new C.ap(-32,-42))
d2.F(new C.ap(34,-42))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.dR.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c1),$.oP(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.Le(d3,new C.as(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aE(d0.$5(-26,-4,52,24,6),d1.$3(D.ePP,A.iE,A.dw))
d3.af(D.aHo,7,c8.$1(A.aw))
d3.af(D.aHo,4,c8.$1(c7?A.dR:A.cs))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dr,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aE(d0.$5(-34,-10,68,32,12),c8.$1(A.aw))
c2=d0.$5(-30,-20,60,28,8)
d3.aE(c2,c8.$1(L.mn))
d3.aE(c2,c9.$2(A.br,1.2))
if(c7){c3=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
c3.F(new C.b5(-26,4))
c3.F(new C.cW(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new C.ap(22,-16))
d3.aR(c3,c9.$2(A.aO,2.2))
d2=A.k.E(d5*6,48)
d3.af(new C.v(-26+d2,4-d2*0.1),2.4,c8.$1(A.b0))
d6.$5(d3,""+(88+A.o.E(A.k.bl(d5*2),5)),D.e9w,A.c,10)
d6.$5(d3,"km/h",D.e9t,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aE(c4,d1.$3(new C.a8(c4.a,c4.b,c4.c,c4.d),A.dw,A.ee))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.er(c5),$.oP(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.Le(d3,new C.as(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bu.j(0.2))
d2.z=A.lz
d3.af(A.J,26,d2)}else d3.aE(c5,c8.$1(A.M))
d3.bE(D.eb0,D.eb5,c9.$2(A.bn,4))
d3.bE(D.e8Z,D.e96,c9.$2(A.bn,4))
return!0}return!1},
fKJ:function fKJ(){},
fKL:function fKL(){},
fKM:function fKM(){},
fKK:function fKK(){},
h7C(d,e,f,g){return new B.aiD(d,g,f,e)},
FC(d,e,f){return new B.baL(d,e,f)},
aiD:function aiD(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aiE:function aiE(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.ft$=h
_.l7$=i
_.fX$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
bH1:function bH1(d,e){this.a=d
this.b=e},
bH2:function bH2(d){this.a=d},
bH0:function bH0(d){this.a=d},
bH3:function bH3(){},
bH4:function bH4(d){this.a=d},
bH5:function bH5(d,e,f){this.a=d
this.b=e
this.c=f},
bH_:function bH_(d,e){this.a=d
this.b=e},
bGY:function bGY(d,e){this.a=d
this.b=e},
bGZ:function bGZ(d,e,f){this.a=d
this.b=e
this.c=f},
bGS:function bGS(d,e){this.a=d
this.b=e},
bGT:function bGT(){},
bGU:function bGU(d,e){this.a=d
this.b=e},
bGV:function bGV(d,e){this.a=d
this.b=e},
bGW:function bGW(d){this.a=d},
bGX:function bGX(d){this.a=d},
bHk:function bHk(d){this.a=d},
bHl:function bHl(){},
bGv:function bGv(){},
bHm:function bHm(d,e){this.a=d
this.b=e},
bHj:function bHj(d,e,f){this.a=d
this.b=e
this.c=f},
bHe:function bHe(d){this.a=d},
bHb:function bHb(d,e,f){this.a=d
this.b=e
this.c=f},
bHc:function bHc(d,e){this.a=d
this.b=e},
bHf:function bHf(d){this.a=d},
bH9:function bH9(d,e){this.a=d
this.b=e},
bHa:function bHa(d,e){this.a=d
this.b=e},
bHd:function bHd(d){this.a=d},
bHg:function bHg(d){this.a=d},
bH7:function bH7(d,e){this.a=d
this.b=e},
bH8:function bH8(d,e){this.a=d
this.b=e},
bHh:function bHh(d){this.a=d},
bH6:function bH6(d){this.a=d},
bHi:function bHi(d){this.a=d},
bGw:function bGw(d,e){this.a=d
this.b=e},
bGP:function bGP(d,e){this.a=d
this.b=e},
bGR:function bGR(d,e){this.a=d
this.b=e},
bGQ:function bGQ(d,e){this.a=d
this.b=e},
bGC:function bGC(d,e){this.a=d
this.b=e},
bGD:function bGD(d){this.a=d},
bGB:function bGB(d){this.a=d},
bGE:function bGE(d,e,f){this.a=d
this.b=e
this.c=f},
bGA:function bGA(d,e){this.a=d
this.b=e},
bGH:function bGH(d,e){this.a=d
this.b=e},
bGI:function bGI(d,e){this.a=d
this.b=e},
bGJ:function bGJ(d,e){this.a=d
this.b=e},
bGK:function bGK(d,e,f){this.a=d
this.b=e
this.c=f},
bGz:function bGz(d,e){this.a=d
this.b=e},
bGL:function bGL(d,e,f){this.a=d
this.b=e
this.c=f},
bGy:function bGy(d,e){this.a=d
this.b=e},
bGM:function bGM(d,e,f){this.a=d
this.b=e
this.c=f},
bGx:function bGx(d,e){this.a=d
this.b=e},
bGN:function bGN(d){this.a=d},
bGO:function bGO(d){this.a=d},
bGF:function bGF(d){this.a=d},
bGG:function bGG(d){this.a=d},
baL:function baL(d,e,f){this.a=d
this.b=e
this.c=f},
fiK:function fiK(){},
fiL:function fiL(){},
fiM:function fiM(){},
fix:function fix(){},
fiN:function fiN(){},
fiw:function fiw(){},
fiO:function fiO(){},
fiB:function fiB(){},
fiv:function fiv(){},
fiC:function fiC(){},
fiu:function fiu(){},
fiD:function fiD(){},
fit:function fit(){},
fiE:function fiE(){},
fir:function fir(){},
fis:function fis(){},
fiF:function fiF(){},
fip:function fip(){},
fiq:function fiq(){},
fiG:function fiG(){},
fio:function fio(){},
V_:function V_(d){this.a=d},
aD7:function aD7(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dTo:function dTo(d,e){this.a=d
this.b=e},
dTx:function dTx(d){this.a=d},
dTy:function dTy(){},
dTz:function dTz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTA:function dTA(){},
dTn:function dTn(d){this.a=d},
dTm:function dTm(d,e,f){this.a=d
this.b=e
this.c=f},
dTl:function dTl(d,e){this.a=d
this.b=e},
dTj:function dTj(d){this.a=d},
dTk:function dTk(){},
dTw:function dTw(d){this.a=d},
dTv:function dTv(d){this.a=d},
dTt:function dTt(d,e){this.a=d
this.b=e},
dTr:function dTr(d){this.a=d},
dTs:function dTs(){},
dTu:function dTu(d,e,f){this.a=d
this.b=e
this.c=f},
dTp:function dTp(d,e){this.a=d
this.b=e},
dTq:function dTq(){},
dTC:function dTC(d){this.a=d},
dTD:function dTD(d,e){this.a=d
this.b=e},
dTB:function dTB(){},
dTE:function dTE(d,e){this.a=d
this.b=e},
dTF:function dTF(d){this.a=d},
dTG:function dTG(d){this.a=d},
axe:function axe(d,e){this.c=d
this.a=e},
b8X:function b8X(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
cCP:function cCP(d){this.a=d},
b8W:function b8W(d,e){this.b=d
this.a=e},
cCO:function cCO(d){this.a=d},
axx:function axx(){},
axy:function axy(){},
aJx:function aJx(){},
bx3:function bx3(){},
ica(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bV(A.wn,23)
$.W()
b8=C.N()
b8.r=A.aw.gp(0)
b9.af(A.wn,25,b8)
b8=C.N()
b8.sar(D.ejk.aw(0,v))
b9.af(A.wn,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.bk.gp(0)
o.c=A.o.E(u,5)===0?1.8:1
n=o.H()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.N()
r.r=A.bz.gp(0)
r.c=2
r.d=A.bT
b9.bE(A.wn,new C.v(b8*18,s*18-2),r)
r=C.N()
r.r=A.bk.gp(0)
b9.af(A.wn,3,r)
c2.$5(b9,w?"V":"A",D.eb8,A.bk,12)
c2.$5(b9,w?A.k.ab(m,1)+" V":""+A.k.V(m*1000)+" mA",D.eaC,A.aw,9.5)
return!0
case"fan":b8=C.bx(D.ePm,A.hI)
$.W()
s=C.N()
s.r=A.br.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.ak.gp(0)
b9.b_(D.eQ7,s)
s=C.N()
s.r=A.M.j(0.6).gp(0)
b9.af(D.wo,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.ce(A.aHi,18,10)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.fX.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c_(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bm.gp(0)
b9.af(D.wo,4,b8)
b8=C.N()
b8.b=A.ae
b8.c=2
b8.r=A.cr.gp(0)
b9.af(D.wo,22,b8)
b8=C.N()
b8.b=A.ae
b8.c=0.8
b8.r=A.jm.gp(0)
b9.af(D.wo,14,b8)
return!0
case"speaker":l=C.bx(D.aNd,A.uK)
$.W()
b8=C.N()
b8.sar(D.ap9.aw(0,new C.a8(l.a,l.b,l.c,l.d)))
b9.aE(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.sar(D.ejH.aw(0,C.bV(A.cC,15)))
b9.af(A.cC,14+k,b8)
b8=C.N()
b8.r=A.dw.gp(0)
b9.af(A.cC,5,b8)
b8=C.N()
b8.r=A.bn.gp(0)
b9.af(D.aHk,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bV(D.e8F,6+u*6+A.k.E(b8,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bX.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c_(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bx(D.eQ_,A.uK)
$.W()
b8=C.N()
b8.sar(D.bYE.aw(0,new C.a8(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bx(D.aNf,A.ix)
s=C.N()
s.r=A.hM.gp(0)
b9.aE(b8,s)
if(b7){i=new C.T(Date.now(),0,!1)
h=C.C_(i)<500?":":" "
g=A.a.aX(A.o.u(C.dk(i)),2,"0")
f=A.a.aX(A.o.u(C.h4(i)),2,"0")
b8=C.N()
b8.r=A.b0.j(0.12).gp(0)
b9.b_(D.aNf,b8)
c2.$5(b9,g+h+f,D.eaU,A.b0,21)}b8=C.N()
b8.r=A.cr.gp(0)
b9.af(D.eaT,2.4,b8)
b8=C.N()
b8.r=A.cr.gp(0)
b9.af(D.e8J,2.4,b8)
return!0
case"calculator":j=C.bx(D.ePG,A.hf)
$.W()
b8=C.N()
b8.sar(D.bYo.aw(0,new C.a8(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bx(D.ePA,A.he)
s=C.N()
s.r=(b7?A.Xr:D.bjz).gp(0)
b9.aE(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eaB,A.Wi,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bx(new C.a8(q,s,q+6,r),A.ST)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cc:A.bN).gp(0)
n=p.H()
b8.drawRRect(C.er(q),n)
n.delete()}return!0
case"phone":j=C.bx(D.ePx,A.hf)
$.W()
b8=C.N()
b8.r=L.mn.gp(0)
b9.aE(j,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.9
b8.r=D.agI.gp(0)
b9.aE(j,b8)
a0=C.bx(D.ePo,A.hI)
if(b7){b8=C.N()
b8.sar(D.bZX.aw(0,new C.a8(a0.a,a0.b,a0.c,a0.d)))
b9.aE(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.er(a0),$.oP(),!0)
b8.translate(-12,-25)
E.Le(b9,D.eVF,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=C.bx(D.ePl,A.he)
s=C.N()
s.r=A.aW.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.b0.gp(0)
b9.b_(new C.a8(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e9T,A.c,6)}else{b8=C.N()
b8.r=D.vr.gp(0)
b9.aE(a0,b8)}b8=C.bx(D.eQh,D.ejQ)
s=C.N()
s.r=A.w.gp(0)
b9.aE(b8,s)
return!0
case"router":j=C.bx(D.ePZ,A.qs)
$.W()
b8=C.N()
b8.sar(D.bYV.aw(0,new C.a8(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.QY[a2]
s=a3<0?-4:4
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.cs.gp(0)
r.c=4
r.d=A.bT
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.E(A.k.bl(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bc:A.aJ).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bV(D.wo,8+u*6+A.k.E(s,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hn.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c_(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bx(D.ePF,A.hI)
s=$.W()
r=C.N()
r.r=A.ee.gp(0)
b9.aE(b8,r)
if(b7){b8=C.N()
b8.r=A.av.j(0.5*a5).gp(0)
b8.z=A.zf
b9.af(A.wn,34,b8)}a6=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a6.F(new C.b5(-16,12))
a6.F(new C.ap(-16,-2))
a6.F(new C.cW(0,-30,16,-2))
a6.F(new C.ap(16,12))
a6.F(new C.bE())
b8=C.N()
b8.r=C.aq(A.es,D.bbP,a5).gp(0)
b9.aR(a6,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.4
b8.r=A.bU.gp(0)
b9.aR(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.jc(0,c1*7)
s=C.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bE(A.J,D.aHk,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.by(b8.save())
b8.translate(0,a7)
s=$.W().r
r=x.v
j=new C.aO(s,A.ao,b6,b6,C.a([],r))
j.F(new C.b5(-28,8))
j.F(new C.ap(-28,-2))
j.F(new C.ap(-16,-4))
j.F(new C.ap(-10,-16))
j.F(new C.ap(10,-16))
j.F(new C.ap(18,-4))
j.F(new C.ap(28,-2))
j.F(new C.ap(28,8))
j.F(new C.bE())
q=C.N()
q.sar(D.bX_.aw(0,D.ePS))
b9.aR(j,q)
q=new C.aO(s,A.ao,b6,b6,C.a([],r))
q.F(new C.b5(-8,-4))
q.F(new C.ap(-4,-13))
q.F(new C.ap(4,-13))
q.F(new C.ap(4,-4))
q.F(new C.bE())
p=C.N()
p.r=A.f9.gp(0)
b9.aR(q,p)
r=new C.aO(s,A.ao,b6,b6,C.a([],r))
r.F(new C.b5(8,-4))
r.F(new C.ap(8,-13))
r.F(new C.ap(11,-13))
r.F(new C.ap(15,-4))
r.F(new C.bE())
s=C.N()
s.r=A.f9.gp(0)
b9.aR(r,s)
for(a2=0;a2<2;++a2){a3=F.aym[a2]
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.aw.gp(0)
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
q.r=A.bN.gp(0)
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
j=new C.aO(b8,A.ao,b6,b6,C.a([],s))
j.F(new C.b5(-18,20))
j.F(new C.ap(-14,-12))
j.F(new C.cW(0,-20,14,-12))
j.F(new C.ap(18,20))
j.F(new C.bE())
r=C.N()
r.sar(D.bY4.aw(0,D.ePE))
b9.aR(j,r)
r=new C.aO(b8,A.ao,b6,b6,C.a([],s))
r.F(new C.b5(14,-10))
r.F(new C.ap(30,-22))
r.F(new C.ap(32,-18))
r.F(new C.ap(16,-4))
r.F(new C.bE())
q=C.N()
q.r=A.e3.gp(0)
b9.aR(r,q)
s=new C.aO(b8,A.ao,b6,b6,C.a([],s))
s.F(new C.b5(-14,-8))
s.F(new C.cW(-34,-6,-18,12))
b8=C.N()
b8.b=A.ae
b8.c=5
b8.r=A.aw.gp(0)
b9.aR(s,b8)
b8=C.N()
if(b7){s=C.aq(A.ct,A.tz,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ee
b8.r=s.gp(0)
b9.b_(D.ePD,b8)
if(b7){b8=C.N()
b8.r=A.ct.j(0.3).gp(0)
b8.z=A.lz
b9.af(A.aHg,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.aw.gp(0)
b9.af(D.e80,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aO($.W().r,A.ao,b6,b6,C.a([],x.v))
b8.F(new C.b5(-10,-14))
b8.F(new C.ap(-30,24))
b8.F(new C.ap(10,24))
b8.F(new C.ap(8,-14))
b8.F(new C.bE())
s=C.N()
s.r=A.dR.j(0.28*u).gp(0)
b9.aR(b8,s)
s=C.N()
s.r=A.dR.j(0.5*u).gp(0)
s.z=Z.HN
b9.af(D.eaY,24,s)}b8=C.bx(D.eQd,A.hI)
s=$.W()
r=C.N()
r.r=A.ee.gp(0)
b9.aE(b8,r)
r=C.N()
r.r=A.dw.gp(0)
r.c=3
r.d=A.bT
b9.bE(D.e8e,D.aHq,r)
r=C.N()
r.r=A.dw.gp(0)
r.c=3
r.d=A.bT
b9.bE(D.aHq,D.eaZ,r)
a9=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a9.F(new C.b5(-14,-16))
a9.F(new C.ap(6,-26))
a9.F(new C.ap(10,-12))
a9.F(new C.ap(-10,-6))
a9.F(new C.bE())
s=C.N()
s.r=(b7?A.aM:A.k1).gp(0)
b9.aR(a9,s)
b8=C.N()
b8.r=(b7?A.c:A.bn).gp(0)
b9.af(D.eb_,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aO(b8,A.ao,b6,b6,C.a([],s))
b0.F(new C.b5(-34,-6))
b0.F(new C.cW(0,22,34,-6))
r=C.N()
r.b=A.ae
r.c=2
r.r=A.hl.gp(0)
b9.aR(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.E(q+u*0.7,1.8)<1.1
if(b2){b3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a2F[u].j(0.6).gp(0)
b3.z=A.Ry
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aO(b8,A.ao,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cW(p,o+17,p-5,b5))
b3.push(new C.bE())
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a2F[u]
else{o=C.aq(D.a2F[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbK().a.snapshot()
r.drawPath((b4.e=new C.cC(p)).a,n)
n.delete()}return!0}return B.ic9(b9,c0,c1,c2)},
fP:function fP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h3_(d){var w=D.m3.h(0,d)
return(w==null?null:w.b)===D.zF},
idl(d,e,f){return C.a5(d,!1).cm(C.uL(null,!1,!0,!0,new B.fPp(e,f),A.eM,null,A.pV,new B.fPq(),x.H))},
Jl:function Jl(d,e){this.a=d
this.b=e},
m9:function m9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fPp:function fPp(d,e){this.a=d
this.b=e},
fPq:function fPq(){},
UH:function UH(d,e,f){this.c=d
this.d=e
this.a=f},
bjo:function bjo(d,e){var _=this
_.d=$
_.e=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
dPk:function dPk(d){this.a=d},
dPj:function dPj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPh:function dPh(){},
dPi:function dPi(d){this.a=d},
dPg:function dPg(d){this.a=d},
dPf:function dPf(d,e){this.a=d
this.b=e},
dPe:function dPe(d,e){this.a=d
this.b=e},
dPd:function dPd(d){this.a=d},
dPc:function dPc(d){this.a=d},
dP8:function dP8(d){this.a=d},
dP7:function dP7(d){this.a=d},
dPb:function dPb(d,e,f){this.a=d
this.b=e
this.c=f},
dPa:function dPa(d){this.a=d},
dP9:function dP9(d){this.a=d},
bv7:function bv7(d,e,f){this.b=d
this.c=e
this.a=f},
aeD:function aeD(d,e,f){this.b=d
this.c=e
this.a=f},
aLj:function aLj(){},
fnC(d,e,f,g){var w=null,v=C.n(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.x(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zW,A.L,w,w),A.aB,C.bT(A.fK,g,A.bq,0,8)],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,w,new C.o(D.Wr,w,u,v,w,w,A.n),w,w,w,A.ez,A.a9,w,w,w),w,w,w)},
h37(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eE()
b4.dt(b5*977+13)
w=A.o.D(1+A.o.am(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.av(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.U(u,t)
m=w
l=0
k=N.nz
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.av(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(A.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.hi()?new C.z(f,-g):new C.z(-f,g)
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
a8=A.o.D(2+A.o.am(b5,8),2,4)
a9=C.ew([A.d.gal(g)],u)
A.d.fp(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.L)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.L(0,a7)}b0=C.aX(u)
b1=3+A.o.am(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.av(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.L(0,a7)}}v=b5>=10?1:0
return new B.aWt(b0,a9,C.U(u,t),q,N.nz,w+v)}return new B.aWt(C.aX(u),C.ew([25],u),C.U(u,t),21,N.nz,1)},
hsD(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.E(n,7),l=A.o.am(n,7),k=d.f
p.push(n)
for(n=d.c,w=d.b,v=d.d,u=0;u<200;++u){t=k.a
m+=t
s=k.b
l+=s
if(m<0||l<0||m>=7||l>=7)break
r=l*7+m
if(w.t(0,r))break
p.push(r)
if(n.t(0,r))o.L(0,r)
q=e.h(0,r)
if(q==null)q=v.h(0,r)
if(q==="/")k=new C.z(-s,-t)
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bok(p,o)},
hnV(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aWt:function aWt(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Vv:function Vv(d){this.a=d},
bjY:function bjY(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.ft$=g
_.l7$=h
_.fX$=i
_.fu$=j
_.bt$=k
_.a9$=l
_.c=_.a=null},
ecn:function ecn(d){this.a=d},
ecm:function ecm(d,e){this.a=d
this.b=e},
eco:function eco(){},
ecd:function ecd(d,e){this.a=d
this.b=e},
ece:function ece(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ech:function ech(d,e){this.a=d
this.b=e},
ecf:function ecf(d){this.a=d},
ecg:function ecg(d){this.a=d},
eci:function eci(d){this.a=d},
ecj:function ecj(d){this.a=d},
eck:function eck(d){this.a=d},
ecl:function ecl(d,e){this.a=d
this.b=e},
bgY:function bgY(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
diy:function diy(d,e,f){this.a=d
this.b=e
this.c=f},
diB:function diB(d,e,f){this.a=d
this.b=e
this.c=f},
diz:function diz(d){this.a=d},
diA:function diA(d){this.a=d},
Vx:function Vx(d){this.a=d},
aDM:function aDM(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.ft$=g
_.l7$=h
_.fX$=i
_.fu$=j
_.bt$=k
_.a9$=l
_.c=_.a=null},
ecG:function ecG(d){this.a=d},
ecF:function ecF(d,e){this.a=d
this.b=e},
ecH:function ecH(){},
ecr:function ecr(){},
ecA:function ecA(d,e){this.a=d
this.b=e},
ecx:function ecx(d){this.a=d},
ect:function ect(d){this.a=d},
ecy:function ecy(d){this.a=d},
ecz:function ecz(d){this.a=d},
ecs:function ecs(d){this.a=d},
ecB:function ecB(d){this.a=d},
ecw:function ecw(d,e){this.a=d
this.b=e},
ecC:function ecC(d){this.a=d},
ecv:function ecv(d,e){this.a=d
this.b=e},
ecD:function ecD(d){this.a=d},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecE:function ecE(d){this.a=d},
bhc:function bhc(d,e){this.b=d
this.a=e},
aLL:function aLL(){},
bx8:function bx8(){},
aLM:function aLM(){},
bx9:function bx9(){},
a0N(d,e,f,g,h,i){return new B.btX(d,e,f,g,h,i)},
btX:function btX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fjr:function fjr(){},
fjs:function fjs(){},
fjt:function fjt(){},
fju:function fju(){},
fjv:function fjv(){},
fjw:function fjw(){},
fjx:function fjx(){},
fjy:function fjy(){},
a8h:function a8h(d){this.a=d},
cgB:function cgB(d){this.a=d},
cgC:function cgC(){},
cgA:function cgA(d,e){this.a=d
this.b=e},
cgz:function cgz(d){this.a=d},
Wo:function Wo(d){this.a=d},
aED:function aED(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.ft$=f
_.l7$=g
_.fX$=h
_.fu$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
eLW:function eLW(d){this.a=d},
eLS:function eLS(d){this.a=d},
eLR:function eLR(d,e){this.a=d
this.b=e},
eLU:function eLU(d,e){this.a=d
this.b=e},
eLT:function eLT(d,e){this.a=d
this.b=e},
eLV:function eLV(d){this.a=d},
bvj:function bvj(d,e,f){this.b=d
this.c=e
this.a=f},
V6:function V6(d){this.a=d},
bjx:function bjx(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.ft$=d
_.l7$=e
_.fX$=f
_.fu$=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dVC:function dVC(){},
dVD:function dVD(){},
dVx:function dVx(d,e){this.a=d
this.b=e},
dVz:function dVz(d,e){this.a=d
this.b=e},
dVA:function dVA(d){this.a=d},
dVy:function dVy(d){this.a=d},
dVB:function dVB(d){this.a=d},
bq7:function bq7(d,e,f){this.b=d
this.c=e
this.a=f},
Uh:function Uh(d){this.a=d},
bj9:function bj9(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.ft$=d
_.l7$=e
_.fX$=f
_.fu$=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dGt:function dGt(){},
dGu:function dGu(){},
dGo:function dGo(){},
dGr:function dGr(d,e){this.a=d
this.b=e},
dGq:function dGq(d,e){this.a=d
this.b=e},
dGs:function dGs(d){this.a=d},
dGp:function dGp(d){this.a=d},
aI1:function aI1(d,e,f){this.a=d
this.b=e
this.c=f},
UY:function UY(d){this.a=d},
bjr:function bjr(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dST:function dST(d,e){this.a=d
this.b=e},
dSU:function dSU(d){this.a=d},
dSS:function dSS(d,e){this.a=d
this.b=e},
dSV:function dSV(d){this.a=d},
dSR:function dSR(d,e){this.a=d
this.b=e},
dSW:function dSW(d){this.a=d},
dSQ:function dSQ(d,e){this.a=d
this.b=e},
dSX:function dSX(d,e){this.a=d
this.b=e},
dSP:function dSP(d,e){this.a=d
this.b=e},
dSY:function dSY(d){this.a=d},
dSO:function dSO(d,e){this.a=d
this.b=e},
dSZ:function dSZ(d){this.a=d},
dSN:function dSN(d){this.a=d},
dT_:function dT_(d){this.a=d},
dSM:function dSM(d){this.a=d},
dT0:function dT0(d){this.a=d},
dT1:function dT1(d){this.a=d},
dSL:function dSL(d){this.a=d},
blt:function blt(d,e,f){this.b=d
this.c=e
this.a=f},
VK:function VK(d){this.a=d},
aDW:function aDW(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ei2:function ei2(d,e){this.a=d
this.b=e},
ei3:function ei3(d,e,f){this.a=d
this.b=e
this.c=f},
ei1:function ei1(d,e,f){this.a=d
this.b=e
this.c=f},
ei4:function ei4(d){this.a=d},
ei0:function ei0(d){this.a=d},
ei8:function ei8(d){this.a=d},
ei7:function ei7(d,e){this.a=d
this.b=e},
ei6:function ei6(d,e){this.a=d
this.b=e},
ei9:function ei9(d,e){this.a=d
this.b=e},
ei5:function ei5(d,e){this.a=d
this.b=e},
eia:function eia(d){this.a=d},
VX:function VX(d){this.a=d},
aEh:function aEh(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
esW:function esW(d){this.a=d},
esX:function esX(d){this.a=d},
esU:function esU(d,e){this.a=d
this.b=e},
esV:function esV(d){this.a=d},
esT:function esT(d){this.a=d},
esY:function esY(d){this.a=d},
esZ:function esZ(d){this.a=d},
et_:function et_(d){this.a=d},
et0:function et0(d,e){this.a=d
this.b=e},
Wh:function Wh(d){this.a=d},
bkF:function bkF(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eHd:function eHd(){},
eHm:function eHm(){},
eHi:function eHi(d){this.a=d},
eHh:function eHh(){},
eHj:function eHj(d,e){this.a=d
this.b=e},
eHg:function eHg(d,e){this.a=d
this.b=e},
eHk:function eHk(d){this.a=d},
eHf:function eHf(d,e){this.a=d
this.b=e},
eHl:function eHl(d){this.a=d},
eHe:function eHe(d){this.a=d},
VI:function VI(d){this.a=d},
bk8:function bk8(d,e,f,g,h,i,j,k){var _=this
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
_.ft$=f
_.l7$=g
_.fX$=h
_.fu$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
egI:function egI(){},
egJ:function egJ(){},
egB:function egB(d){this.a=d},
egA:function egA(d){this.a=d},
egC:function egC(d){this.a=d},
egz:function egz(d){this.a=d},
egD:function egD(d){this.a=d},
egy:function egy(d){this.a=d},
egE:function egE(d,e){this.a=d
this.b=e},
egx:function egx(d,e){this.a=d
this.b=e},
egF:function egF(d){this.a=d},
egw:function egw(d,e){this.a=d
this.b=e},
egG:function egG(d){this.a=d},
egv:function egv(d,e){this.a=d
this.b=e},
egH:function egH(d){this.a=d},
egu:function egu(d,e){this.a=d
this.b=e},
bd9:function bd9(d,e,f){this.c=d
this.d=e
this.a=f},
aL6:function aL6(){},
bx_:function bx_(){},
aLp:function aLp(){},
bx4:function bx4(){},
aLU:function aLU(){},
bxe:function bxe(){},
aMn:function aMn(){},
bxq:function bxq(){},
jL(d,e,f,g,h,i){return new B.b6J(h,d,f,g,i,e,null)},
hss(d,e,f,g){var w=null
return C.ca(w,w,!0,w,new B.fTe(g,e,f),d,w,!0,!0,x.H)},
hH(d,e,f,g,h,i,j){return new B.avF(f,j,i,h,g,d,e,null)},
qV(d,e,f){return B.iea(d,e,f)},
iea(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qV=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.ak$.x.h(0,e)
n=n==null?null:n.gba()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.m3(2),$async$qV)
case 7:q=h
w=8
return C.b(q.hw(A.h2),$async$qV)
case 8:p=h
if(p==null){w=1
break}o=J.eX(A.dD.gaP(p))
w=9
return C.b(B.crx(C.a([B.hhm(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qV)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.K(x.gV).f.U(D.aPl)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qV,v)},
lk(d,e,f,g){var w,v=$.arN
if(v==="music")return E.dH(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dH(261.63*v,w,f,0,g,"sine")}return B.w2(v,e,f,g)},
w2(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dH(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dH(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dH(140+A.o.E(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dH(260+A.o.E(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dH(t,"",160,-0.7,g*0.4,w)
return E.dH(900,"",90,0,g*0.45,u)
case"zap":return E.dH(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dH(2600+A.o.E(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dH(320,"",220,-0.7,g*0.35,v)
return E.dH(1500,"",200,0,g*0.22,u)
case"organic":return E.dH(85+A.o.E(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dH(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dH(t,"",s,0,g*0.5,w)}},
BN(d,e,f,g){var w,v,u,t,s,r,q,p=$.arN
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.L)(e),++w)B.lk(d,e[w],f,g)
return}for(p=C.d9(e,0,C.dG(4,"count",x.S),C.S(e).c),v=p.$ti,p=new C.bQ(p,p.gM(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.lk(d,s,f,g)
else C.bM(new C.ba(1000*q),new B.cgx(d,s,f,g),u)}},
a8g(d,e){var w="sine",v="noise"
switch(d){case"kick":E.dH(95,"",200,1.8,e,w)
break
case"snare":E.dH(220,"",140,0,e*0.65,v)
break
case"hat":E.dH(5000,"",50,0,e*0.35,v)
break
case"open":E.dH(5200,"",220,0,e*0.35,v)
break
case"clap":E.dH(1100,"",100,0,e*0.5,v)
break
case"tom":E.dH(150,"",230,1,e,w)
break
case"low":E.dH(100,"",260,0.9,e,w)
break
case"rim":E.dH(1700,"",60,0,e*0.4,"square")
break
case"cow":E.dH(820,"",240,0,e*0.3,"square")
break
case"crash":E.dH(3200,"",650,0,e*0.4,v)
break
case"shake":E.dH(7000,"",90,0,e*0.3,v)
break
default:E.dH(60,"",300,0,e,w)}},
zA(d){return B.hJu(d)},
hJu(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$zA=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.ay(),$async$zA)
case 7:r=f
q=C.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.U(x.N,x.z)
w=1
break}p=A.S.aL(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.a2(p,o,n):C.U(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=C.U(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$zA,v)},
w_(d,e){return B.hJv(d,e)},
hJv(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$w_=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$w_)
case 6:s=g
w=7
return C.b(s.aq("String","ngmy_play_progress_v1_"+d,A.S.ao(e,null)),$async$w_)
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
return C.i($async$w_,v)},
b6J:function b6J(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ctw:function ctw(d){this.a=d},
ctx:function ctx(d,e){this.a=d
this.b=e},
fTe:function fTe(d,e,f){this.a=d
this.b=e
this.c=f},
fTd:function fTd(d){this.a=d},
dB:function dB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cts:function cts(d){this.a=d},
eV:function eV(d,e,f){this.c=d
this.d=e
this.a=f},
avF:function avF(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fj:function fj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctr:function ctr(d){this.a=d},
Fh:function Fh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cty:function cty(d){this.a=d},
mF:function mF(){},
ctt:function ctt(d,e,f){this.a=d
this.b=e
this.c=f},
ctv:function ctv(d){this.a=d},
ctu:function ctu(){},
cgx:function cgx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cw7(){var w=0,v=C.j(x.cL),u,t
var $async$cw7=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qW().bga("assets/data/world110.json"),$async$cw7)
case 3:u=t.hO3(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cw7,v)},
hO3(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.S.aL(0,a2,null)),a1=C.a([],x.F)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gR(w))
q=C.a([],s)
for(p=J.a4(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gR(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gR(l)
j=J.a4(k)
m.push(C.a([C.dU(j.h(k,0)),C.dU(j.h(k,1))],v))}q.push(m)}o=C.cO(p.h(r,"n"))
m=C.cO(p.h(r,"a"))
l=C.cO(p.h(r,"ct"))
j=C.cO(p.h(r,"sr"))
i=C.dU(p.h(r,"pop"))
h=C.dU(p.h(r,"gdp"))
g=C.cO(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aQk(g,f,"",0)
f=C.dU(J.q(p.h(r,"c"),0))
p=C.dU(J.q(p.h(r,"c"),1))
e=new B.ab4(o,m,l,j,i,h,g,f,p,q)
e.byx(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.ab5(a1)},
fwK(d){if(d>=1e12)return A.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ab(d/1e6,1)+" million"
if(d>=1000)return A.k.ab(d/1000,1)+" thousand"
return A.k.ab(d,0)},
GR(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.E(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
ab4:function ab4(d,e,f,g,h,i,j,k,l,m){var _=this
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
ab5:function ab5(d){this.a=d},
v5:function v5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
P8:function P8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y5:function y5(d,e,f){this.a=d
this.b=e
this.c=f},
P7:function P7(d){this.a=0
this.b=d
this.c=0},
hPX(d,e,f){return $.hPY.ca(0,d+"|"+C.u(e)+"|"+f.l(),new B.deh(d,e,f))},
Vd:function Vd(d){this.a=d},
aDi:function aDi(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ft$=j
_.l7$=k
_.fX$=l
_.fu$=m
_.bt$=n
_.a9$=o
_.c=_.a=null},
dYk:function dYk(d){this.a=d},
dYj:function dYj(d,e){this.a=d
this.b=e},
dXN:function dXN(d){this.a=d},
dXL:function dXL(d){this.a=d},
dXM:function dXM(d,e,f){this.a=d
this.b=e
this.c=f},
dXK:function dXK(d){this.a=d},
dXJ:function dXJ(){},
dXI:function dXI(d){this.a=d},
dY5:function dY5(d,e){this.a=d
this.b=e},
dY6:function dY6(d,e){this.a=d
this.b=e},
dXV:function dXV(d){this.a=d},
dXW:function dXW(d){this.a=d},
dXU:function dXU(d){this.a=d},
dXX:function dXX(d){this.a=d},
dXO:function dXO(d,e){this.a=d
this.b=e},
dXP:function dXP(d){this.a=d},
dY7:function dY7(d,e){this.a=d
this.b=e},
dXT:function dXT(d,e){this.a=d
this.b=e},
dYb:function dYb(d){this.a=d},
dY4:function dY4(d){this.a=d},
dYc:function dYc(d,e){this.a=d
this.b=e},
dY3:function dY3(d,e){this.a=d
this.b=e},
dYd:function dYd(d){this.a=d},
dY2:function dY2(d,e){this.a=d
this.b=e},
dYe:function dYe(d){this.a=d},
dY1:function dY1(d,e){this.a=d
this.b=e},
dYf:function dYf(d){this.a=d},
dY0:function dY0(d,e){this.a=d
this.b=e},
dYg:function dYg(d){this.a=d},
dY_:function dY_(d,e){this.a=d
this.b=e},
dYh:function dYh(d){this.a=d},
dXZ:function dXZ(d){this.a=d},
dYi:function dYi(d){this.a=d},
dXY:function dXY(d){this.a=d},
dY8:function dY8(d){this.a=d},
dXS:function dXS(d){this.a=d},
dY9:function dY9(d){this.a=d},
dXR:function dXR(d){this.a=d},
dYa:function dYa(d){this.a=d},
dXQ:function dXQ(d){this.a=d},
dXH:function dXH(){},
dXG:function dXG(d){this.a=d},
dXF:function dXF(d){this.a=d},
bfo:function bfo(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
deh:function deh(d,e,f){this.a=d
this.b=e
this.c=f},
dei:function dei(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLv:function aLv(){},
aLw:function aLw(){},
afa(d,e,f,g,h){return new B.btS(d,e,f,g,h)},
btS:function btS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fjk:function fjk(){},
fjl:function fjl(){},
fjm:function fjm(){},
fjn:function fjn(){},
fjo:function fjo(){},
fjp:function fjp(){},
fjq:function fjq(){},
Wk:function Wk(d){this.a=d},
bkJ:function bkJ(){this.d=$
this.c=this.a=null},
eI6:function eI6(d){this.a=d},
eI7:function eI7(d){this.a=d},
eI5:function eI5(d){this.a=d},
eI8:function eI8(){},
eI4:function eI4(d,e){this.a=d
this.b=e},
eI3:function eI3(d){this.a=d},
hQo(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eE()
v.dt(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eE()
v.dt(w+900)
u.push(2.2+v.aj())}return new B.bkv(new C.cs(null,x.A),new B.P7(A.cH),A.J,A.ax,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hQq(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hQp(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hiy(d,e,f){return $.hR0.ca(0,d+"|"+C.u(e)+"|"+f.l(),new B.f1u(d,e,f))},
W5:function W5(d){this.a=d},
bkv:function bkv(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ft$=j
_.l7$=k
_.fX$=l
_.fu$=m
_.bt$=n
_.a9$=o
_.c=_.a=null},
eA9:function eA9(d,e){this.a=d
this.b=e},
eAk:function eAk(d,e){this.a=d
this.b=e},
eAl:function eAl(d,e){this.a=d
this.b=e},
eAh:function eAh(d){this.a=d},
eAi:function eAi(d){this.a=d},
eAj:function eAj(d){this.a=d},
eAm:function eAm(d){this.a=d},
eAg:function eAg(d){this.a=d},
eAn:function eAn(d,e){this.a=d
this.b=e},
eAo:function eAo(d){this.a=d},
eAf:function eAf(d,e){this.a=d
this.b=e},
eAp:function eAp(d){this.a=d},
eAe:function eAe(d,e){this.a=d
this.b=e},
eAq:function eAq(d){this.a=d},
eAd:function eAd(d){this.a=d},
eAr:function eAr(d){this.a=d},
eAc:function eAc(d){this.a=d},
eAs:function eAs(d){this.a=d},
eAb:function eAb(d){this.a=d},
eAt:function eAt(d){this.a=d},
eAa:function eAa(d){this.a=d},
eA8:function eA8(){},
eA7:function eA7(){},
eA6:function eA6(d){this.a=d},
eA5:function eA5(d){this.a=d},
brU:function brU(d,e){this.b=d
this.a=e},
f1u:function f1u(d,e,f){this.a=d
this.b=e
this.c=f},
f1v:function f1v(){},
f1w:function f1w(){},
Ve:function Ve(d){this.a=d},
aDj:function aDj(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.ft$=k
_.l7$=l
_.fX$=m
_.fu$=n
_.bt$=o
_.a9$=p
_.c=_.a=null},
dYo:function dYo(){},
dYR:function dYR(){},
dYD:function dYD(d,e){this.a=d
this.b=e},
dYu:function dYu(d,e){this.a=d
this.b=e},
dYE:function dYE(d){this.a=d},
dYt:function dYt(d){this.a=d},
dYF:function dYF(d){this.a=d},
dYC:function dYC(d){this.a=d},
dYJ:function dYJ(d){this.a=d},
dYB:function dYB(d){this.a=d},
dYK:function dYK(d){this.a=d},
dYA:function dYA(d,e){this.a=d
this.b=e},
dYL:function dYL(d){this.a=d},
dYM:function dYM(d){this.a=d},
dYz:function dYz(d,e){this.a=d
this.b=e},
dYN:function dYN(d){this.a=d},
dYy:function dYy(d,e){this.a=d
this.b=e},
dYO:function dYO(d){this.a=d},
dYx:function dYx(d,e){this.a=d
this.b=e},
dYP:function dYP(d){this.a=d},
dYw:function dYw(d,e){this.a=d
this.b=e},
dYQ:function dYQ(d){this.a=d},
dYv:function dYv(d){this.a=d},
dYG:function dYG(d){this.a=d},
dYs:function dYs(d){this.a=d},
dYH:function dYH(d){this.a=d},
dYr:function dYr(d){this.a=d},
dYI:function dYI(d){this.a=d},
dYq:function dYq(d){this.a=d},
dYn:function dYn(d){this.a=d},
dYm:function dYm(){},
dYp:function dYp(d,e){this.a=d
this.b=e},
dYl:function dYl(d){this.a=d},
baA:function baA(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VY:function VY(d){this.a=d},
bks:function bks(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.ft$=e
_.l7$=f
_.fX$=g
_.fu$=h
_.bt$=i
_.a9$=j
_.c=_.a=null},
et3:function et3(d,e){this.a=d
this.b=e},
et4:function et4(d,e){this.a=d
this.b=e},
et2:function et2(d,e){this.a=d
this.b=e},
et5:function et5(d,e){this.a=d
this.b=e},
et1:function et1(d,e){this.a=d
this.b=e},
brs:function brs(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f_E:function f_E(d){this.a=d},
aLx:function aLx(){},
bx6:function bx6(){},
aM5:function aM5(){},
bxk:function bxk(){},
aM8:function aM8(){},
bxm:function bxm(){},
hQm(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eE()
v.dt(w)
v=v.aj()
u=new C.eE()
u.dt(w+500)
s.push(new C.v(v,u.aj()))}return new B.bj8(new C.cs(null,x.A),new B.P7(A.cH),t,A.ax,s,$,A.bx,0,C.a([],x.X),null,null)},
PC:function PC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Uf:function Uf(d){this.a=d},
bj8:function bj8(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.ft$=i
_.l7$=j
_.fX$=k
_.fu$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
dFV:function dFV(){},
dFJ:function dFJ(){},
dFK:function dFK(d,e){this.a=d
this.b=e},
dFL:function dFL(d,e){this.a=d
this.b=e},
dFI:function dFI(d){this.a=d},
dFH:function dFH(d){this.a=d},
dFN:function dFN(d){this.a=d},
dFG:function dFG(d,e){this.a=d
this.b=e},
dFO:function dFO(d){this.a=d},
dFF:function dFF(d){this.a=d},
dFP:function dFP(d){this.a=d},
dFE:function dFE(d){this.a=d},
dFQ:function dFQ(d){this.a=d},
dFD:function dFD(d){this.a=d},
dFR:function dFR(d){this.a=d},
dFC:function dFC(d){this.a=d},
dFS:function dFS(d){this.a=d},
dFB:function dFB(d){this.a=d},
dFT:function dFT(d){this.a=d},
dFA:function dFA(d){this.a=d},
dFU:function dFU(d){this.a=d},
dFz:function dFz(d){this.a=d},
dFM:function dFM(d){this.a=d},
dFy:function dFy(d){this.a=d},
b9Z:function b9Z(d,e){this.b=d
this.a=e},
aeP:function aeP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Va:function Va(d){this.a=d},
bjA:function bjA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.ft$=p
_.l7$=q
_.fX$=r
_.fu$=s
_.bt$=t
_.a9$=u
_.c=_.a=null},
dWW:function dWW(d){this.a=d},
dWM:function dWM(d,e){this.a=d
this.b=e},
dWN:function dWN(d,e){this.a=d
this.b=e},
dWL:function dWL(d,e){this.a=d
this.b=e},
dWO:function dWO(d){this.a=d},
dWK:function dWK(d){this.a=d},
dWP:function dWP(d){this.a=d},
dWJ:function dWJ(d,e){this.a=d
this.b=e},
dWQ:function dWQ(d){this.a=d},
dWI:function dWI(d,e){this.a=d
this.b=e},
dWR:function dWR(d){this.a=d},
dWH:function dWH(d,e){this.a=d
this.b=e},
dWS:function dWS(d){this.a=d},
dWG:function dWG(d,e){this.a=d
this.b=e},
dWT:function dWT(d){this.a=d},
dWF:function dWF(d){this.a=d},
dWU:function dWU(d){this.a=d},
dWE:function dWE(d){this.a=d},
dWV:function dWV(d){this.a=d},
dWD:function dWD(d){this.a=d},
bfe:function bfe(d,e){this.b=d
this.a=e},
dbp:function dbp(d){this.a=d},
VU:function VU(d){this.a=d},
bkr:function bkr(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.ft$=f
_.l7$=g
_.fX$=h
_.fu$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
esi:function esi(d,e){this.a=d
this.b=e},
esj:function esj(d){this.a=d},
esh:function esh(d){this.a=d},
esk:function esk(d){this.a=d},
esg:function esg(d){this.a=d},
esl:function esl(d){this.a=d},
esf:function esf(d){this.a=d},
esm:function esm(d){this.a=d},
ese:function ese(d){this.a=d},
esn:function esn(d){this.a=d},
esd:function esd(d,e){this.a=d
this.b=e},
eso:function eso(d){this.a=d},
esc:function esc(d,e){this.a=d
this.b=e},
esp:function esp(d){this.a=d},
esb:function esb(d,e){this.a=d
this.b=e},
esq:function esq(d){this.a=d},
esa:function esa(d,e){this.a=d
this.b=e},
bqI:function bqI(d,e){this.b=d
this.a=e},
aL3:function aL3(){},
bwZ:function bwZ(){},
aLs:function aLs(){},
bx5:function bx5(){},
aM4:function aM4(){},
bxj:function bxj(){},
hhm(d,e,f){var w,v
C.fW(0,0,!1)
w=new C.ln(e,f,$,null)
v=w.bIO(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
i35(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.L)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.o2(A.k.ab(p.c,4)),"y",C.o2(A.k.ab(p.d,4)),"v",p.e,"l",C.o2(A.k.ab(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.o2(A.k.ab(p.as,3)),"ch",p.at,"vc",C.o2(A.k.ab(p.z,3)),"s",C.o2(A.k.ab(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.C(f,C.a3(f).k("co.E"))
A.d.fq(l)
return A.S.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
icy(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.S.aL(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=C.a([],x.fs)
g=x.L
f=g.a(J.q(w,"parts"))
f=J.aV(f==null?A.cw:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=C.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.qj().ai(0,s)){J.cf(v,null)
continue}d=s
a0=C.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.ty(a2,d,a0,a1)
a3.apZ(a2,d,a0,a1)
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
d=C.jO(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.jO(J.q(t,"b"))
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
J.cf(v,r)}i=g.a(J.q(w,"wires"))
i=J.aV(i==null?A.cw:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=C.aJ(J.q(p,0))
o=f==null?a5:A.k.N(f)
f=C.aJ(J.q(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.aku(m,A.k.N(C.dU(J.q(p,1))),l,A.k.N(C.dU(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cw:h)
while(h.C()){j=h.gR(h)
J.cf(k,A.k.N(C.dU(j)))}return new C.bol(i,k)}catch(a4){return a5}},
fyH(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fyH=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.ay(),$async$fyH)
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
return C.i($async$fyH,v)},
bDI(d){return B.ie6(d)},
ie6(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bDI=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.ay(),$async$bDI)
case 7:w=6
return C.b(f.aq("String","ngmy_electronics_lab_v1",d),$async$bDI)
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
return C.i($async$bDI,v)},
crx(d,e){var w=0,v=C.j(x.g7),u
var $async$crx=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h5P().xe(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$crx,v)}},D,T,H,U,A_,A7,A8,Al,X
J=c[1]
C=c[0]
A=c[2]
A0=c[146]
A9=c[145]
A1=c[138]
A2=c[135]
I=c[127]
P=c[121]
A3=c[124]
Aa=c[140]
A4=c[109]
A5=c[100]
G=c[130]
Ab=c[139]
A6=c[143]
Ac=c[67]
Y=c[76]
Ad=c[84]
Ae=c[80]
Q=c[88]
N=c[115]
Af=c[119]
Ag=c[117]
Z=c[126]
O=c[128]
V=c[144]
Ah=c[71]
Ai=c[142]
R=c[134]
M=c[141]
Aj=c[95]
W=c[116]
K=c[133]
S=c[96]
Ak=c[24]
E=c[26]
F=c[93]
L=c[102]
B=a.updateHolder(c[17],B)
D=c[125]
T=c[137]
H=c[41]
U=c[131]
A_=c[104]
A7=c[136]
A8=c[129]
Al=c[132]
X=c[97]
B.ajS.prototype={}
B.Vq.prototype={
S(){return new B.bjW(C.U(x.N,x.i),new C.ar(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mD(0,null,null))}}
B.bjW.prototype={
gW5(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
this.ch.q()
this.a2()},
Nu(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$Nu=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jO()
p.bP(0,A.c9)
t.m(new B.e9n(t))
t.a.toString
p=t.gW5()
w=3
return C.b(B.bzj(B.hSe(q,B.i2X(p),o,t.ay)),$async$Nu)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.i4m(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e9o(t,o,r))
$.aW.x1$.push(new B.e9p(t))
case 1:return C.h(u,v)}})
return C.i($async$Nu,v)},
Y5(d){return this.bZW(d)},
aVJ(){return this.Y5(null)},
bZW(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Y5=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jO()
t.f.saW(0,o)
t.m(new B.e9A(t))
E.dH(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bzj(B.hZ0(o)),$async$Y5)
case 3:r=n.a=m.icd(f)
p.b=""
if(r!=null&&!B.i2Y(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.i4n(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajS(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e9B(p,t))
t.c4i(p.a)
case 1:return C.h(u,v)}})
return C.i($async$Y5,v)},
c4i(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
A.d.a8(w)
w=++m.as
v=m.gW5()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new B.e9w(m))
t=d.d
s=C.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e9u(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e9x(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.L)(r),++u){p.$2(o,new B.e9y(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e9z(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bu.j(0.1),g=C.n(16),f=C.I(A.bu.j(0.35),A.q,1)
if(m.x)j=C.B(C.a([D.eXa,A.be,C.E(C.d(m.Q,l,l,l,l,l,l,A.Je,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.flS
else{w=C.E(C.d(k.a,l,l,l,l,l,l,A.Ua,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f6U,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.D(A.vz,C.d(u,l,l,l,l,l,l,D.f9z,l,l,l),l))
w.push(A.cV)
w.push(C.d(k.b,l,l,l,l,l,l,F.DH,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.n(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.fbZ,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.i6,A.cp,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.D(A.Mm,new C.ci(A.aP,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.y(t,l,A.mb,l,l,l,l,l,l,l,l,l),A.bp,new C.bB(1,A.bg,new C.y(q,l,new C.H(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.L)(j),++p){o=j[p]
t=new C.aS(12,12)
s=new C.aS(12,12)
A.d.v(w,C.a([A.O,new C.bI(A.a8,l,l,C.p(l,new C.y(o.a,l,A.TS,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bu.j(0.3),l,l,new C.bn(t,t,t,t),l,l,A.n),l,l,l,l,A.fP,l,l,l),l),A.au,C.p(l,new C.y(o.b,l,D.fhi,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bn(s,s,s,s),l,l,A.n),l,l,l,l,A.bR,l,l,l)],v))}if(m.ax)w.push(D.ech)
j=C.cc(C.x(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ag)}w=x.p
g=C.x(C.a([C.ai7(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bsP,A.ek,l,l,1/0),A.bd,A.il),C.E(B.h7C(m.gW5(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dB("Ask about it",i,new B.e9E(m),l,A.bu,l),new B.dB("Invent something new",!i,new B.e9F(m),l,A.bu,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dgu[p]
i.push(new B.dB(n,!1,new B.e9G(m,n),l,A.bu,l))}f.push(new B.eV(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.d_D[p]
i.push(new B.dB(r,!1,new B.e9H(m,r),l,A.bu,l))}f.push(new B.eV(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.U,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.bs(l,new C.b4(4,C.n(16),A.Y),l,A.eR,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kK,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e9I(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dg,!0,A.a4,l,A.an,l,A.aQ3,l,l),1)
h=m.at
v=h&&j?D.bHE:A.dY
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.ab,new B.fj(v,j,new B.e9J(m,k),A.bu,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jL(A.bu,A.hc,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.x(f,A.m,l,A.e,A.N,0,A.p))}}
B.G5.prototype={}
B.uS.prototype={}
B.VT.prototype={
S(){return new B.aEb(A.J,A.J,A.ax,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aEb.prototype={
gaWY(){var w,v,u,t=this,s=D.Hg[t.cx],r=D.QZ[t.cy],q=D.Cs[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ec(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.awH[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cJ(p,0,new B.epu())},
ga2n(){return D.Hg[this.cx].d/this.gaWY()},
gaOc(){return 0.1*(D.Hg[this.cx].d/0.9)/D.QZ[this.cy].d},
Z(){this.a1()
this.ll()
B.zA("rocket_lander").bB(new B.epO(this),x.P)},
c4r(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cH.aj()*0.6
w.f=new C.v(0.15+A.cH.aj()*0.7,0.08)
w.r=new C.v((A.cH.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lD(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.epP())
return}w=D.rt[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.v(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2n()
v=v.ad(0,new C.v(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaOc())}if(m.dy){t=m.r
v=v.aC(0,t.aH(0,t.gcn()*6*D.ayE[m.d]))}t=m.r=m.r.ad(0,v.aH(0,d))
s=m.f=m.f.ad(0,t.aH(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.v(-t.a*0.4,t.b)
t=new C.v(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.v(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Cs[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.w_("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.BN("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2n()/(D.rt[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ab(m.ga2n()/(D.rt[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dH(80,"",500,0,0.6,"noise")
C.fH()}}if(m.Q&&m.x>0&&A.o.E(A.k.bl(m.CW*20),2)===0)E.dH(90,"",70,0,0.12,"noise")
m.m(new B.epQ())},
afF(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.f93,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dB(e[w].a,f.$1(w),new B.epw(this,g,w),v,h,v))
return new C.D(A.eK,C.x(C.a([u,A.cV,C.bT(A.bA,s,A.bq,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bDZ(d){var w,v,u,t,s=this,r=null,q=s.ga2n()/(D.rt[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaOc()),o=D.ayE[s.d],n=C.n(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,C.d(d.d+" Gravity here: "+C.u(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.U4,r,r,r),A.R,s.afF("ENGINE: "+D.Hg[s.cx].b,D.Hg,new B.epl(s),new B.epm(s),A.ct),s.afF("FUEL TANK: "+D.QZ[s.cy].b,D.QZ,new B.epn(s),new B.epo(s),A.b0),s.afF("LANDING GEAR: "+D.Cs[s.db].b,D.Cs,new B.epp(s),new B.epq(s),A.aO),s.afF("EXTRAS (tap to add)",D.awH,new B.epr(s),new B.eps(s),A.bu)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fE6)
o=(q?A.b0:A.c7).j(0.14)
w=C.n(12)
v=A.k.ab(s.gaWY(),2)
u=A.k.ab(s.ga2n()/(D.rt[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.Cs[s.db].d*100)+".",r,r,r,r,r,r,D.f9H,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.i6,A.bR,r,r,r))
m.push(A.R)
m.push(new C.bI(A.A,r,r,new B.fj(A.nq,"Launch",new B.ept(s),A.b0,r),r))
return C.av(C.p(r,C.cc(C.x(m,A.F,r,A.e,A.N,0,A.p),A.r,r,A.y,r,A.bP,r,r,A.ag),A.f,r,A.lI,new C.o(D.bj9,r,l,n,r,r,A.n),r,r,r,A.bR,r,r,r,r),r,r,r)},
aY5(d,e,f,g){var w=null,v=f?A.ct:A.c.j(0.1),u=C.n(18),t=C.I(A.aZ,A.q,1)
return C.oj(A.jJ,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.epi(e),new B.epj(e),w,w,w,w,new B.epk(e))},
aY4(d,e,f){return this.aY5(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cq(new B.epH(s,D.rt[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rt[w].a:"\ud83d\udd12"
o.push(new B.dB(v,s.d===w,new B.epI(s,w),r,D.rt[w].c,r))}v=C.a([s.aY4(F.amx,new B.epJ(s),s.y),A.be,s.aY5(A.vW,new B.epK(s),s.Q,130),A.be,s.aY4(A.O5,new B.epL(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aO:A.c.j(0.1)
t=C.n(18)
A.d.v(v,C.a([A.be,C.aC(r,C.p(r,D.bLT,A.f,r,r,new C.o(u,r,C.I(A.aZ,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.epM(s),r,r,r,r,r,r,!1,A.a6)],p))}return B.jL(A.ct,A.hc,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.x(C.a([new B.eV(o,"WORLD",r),C.B(v,A.m,r,A.b9,A.j,0,r,r)],p),A.m,r,A.e,A.N,0,A.p))}}
B.bgV.prototype={
a3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rt[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.N(),a0=j.c,a1=C.aq(D.blU,a0,0.25)
a1.toString
d.sar(new C.a9(A.b1,A.b5,A.x,C.a([F.ae9,a1],x.O),l,l).aw(0,new C.a8(0,0,g,f)))
a2.b_(new C.a8(0,0,g,f),d)
w=new C.eE()
w.dt(5)
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
r=new C.aO(e.r,A.ao,l,l,d)
r.F(new C.b5(0,s+14))
q=new C.eE()
q.dt(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bD(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.F(new C.ap(i,h))
r.F(new C.ap(0,h))
r.F(new C.bE())
e=$.W()
d=C.N()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aR(r,d)
o=C.ce(new C.v(k.ax*i,s+10),8,k.ay*i)
d=C.bx(o,A.ix)
a0=C.N()
a0.r=A.bc.gp(0)
a2.aE(d,a0)
a0=C.bx(o.cw(2),A.qs)
d=C.N()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aE(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.jc(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=A.ct.j(0.6).gp(0)
k.z=Z.HN
a2.af(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aO(i,A.ao,l,l,C.a([],f))
n.F(new C.b5(-8,18))
n.F(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.F(new C.ap(8,18))
n.F(new C.bE())
k=C.N()
k.r=A.aM.gp(0)
a2.aR(n,k)
i=new C.aO(i,A.ao,l,l,C.a([],f))
i.F(new C.b5(-4,18))
i.F(new C.ap(0,32))
i.F(new C.ap(4,18))
i.F(new C.bE())
k=C.N()
k.r=A.c.gp(0)
a2.aR(i,k)}k=e.r
m=new C.aO(k,A.ao,l,l,C.a([],f))
m.F(new C.b5(0,-26))
m.F(new C.cW(14,-10,11,18))
m.F(new C.ap(-11,18))
m.F(new C.cW(-14,-10,0,-26))
m.F(new C.bE())
i=C.N()
i.sar(D.bYx.aw(0,D.ePv))
a2.aR(m,i)
i=C.N()
i.r=A.aO.gp(0)
a2.af(D.wo,5,i)
i=new C.aO(k,A.ao,l,l,C.a([],f))
i.F(new C.b5(-11,6))
i.F(new C.ap(-20,20))
i.F(new C.ap(-11,18))
i.F(new C.bE())
h=C.N()
h.r=A.av.gp(0)
a2.aR(i,h)
f=new C.aO(k,A.ao,l,l,C.a([],f))
f.F(new C.b5(11,6))
f.F(new C.ap(20,20))
f.F(new C.ap(11,18))
f.F(new C.bE())
k=C.N()
k.r=A.av.gp(0)
a2.aR(f,k)
g.restore()},
au(d){return!0}}
B.aM2.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxi.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw1()}}
B.aS_.prototype={}
B.a33.prototype={}
B.ba1.prototype={}
B.Ug.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.ew(["skin"],x.N),o=new Float32Array(0)
return new B.aCB(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.Kv,D.Kv,A.ax,A.cH,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCB.prototype={
Z(){var w=this
w.a1()
w.ll()
w.as=new B.c1C(w.gccP())
new B.dGm(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.bv2()},
ccQ(d){var w,v=this
if(v.c==null)return
w=J.a4(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f_(0,C.F(["t","init","data",$.hhB],x.N,x.z))
v.at=!0
v.ax=""
v.ayC()
break
case"pick":v.m(new B.dFZ(v,d))
break
case"shot":v.ahx(C.u(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.u(w.h(d,"text")))
break}},
ayC(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.auD[q.CW]
v=new B.dG_()
u=q.ay
u=C.C(u,C.a3(u).k("co.E"))
A.d.fq(u)
t=x.N
s=C.F(["layers",u,"skinMode",q.ch,"tone","#"+C.u(v.$1(w.b))+C.u(v.$1(w.c))+C.u(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.S.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.U(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.f_(0,u)}},
ahx(d){return this.ctO(d)},
ctO(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ahx=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cG.aK(A.a.b6(d,A.a.cH(d,",")+1))
w=6
return C.b(B.crx(C.a([B.hhm(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$ahx)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.gV).f.U(D.aPl)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ahx,v)},
ay3(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lD(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bl(w)!==A.k.bl(v.ok)){B.a8g("kick",0.4)
v.a50(170,new B.dGn())}v.ok=w
return},
ahm(d){var w,v,u,t,s=this
s.m(new B.dG0(s,d))
if(d==null){s.fx=D.Kv
s.dy=1
w=s.as
if(w!=null)w.f_(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.S(w).k("a_<1>")
u=C.C(new C.a_(w,new B.dG1(d),v),v.k("J.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.L(0,t)
if(s.ch===2)s.ch=1}s.ayC()
w=s.as
if(w!=null)w.f_(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.cwe(t,d)
return},
cwe(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a8g("kick",0.8)
this.a50(260,new B.dG2())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dH(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a50(w*70,new B.dG3(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dH(110,"",360,0.7,0.3,"saw")
else B.w2("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dH(210+e.length*4,"",80,0.6,0.55,"tri")
E.dH(2400,"",20,0,0.3,v)
break
case"muscle":E.dH(70,"",150,1,0.6,"sine")
break
case"vessel":E.dH(300,"",380,0.4,0.22,v)
B.a8g("kick",0.3)
break
default:B.w2("organic",2+A.o.E(e.length,6),200,0.4)}},
cAQ(d){this.m(new B.dG5(this,d))},
aYo(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(p.ay3(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.L(0,s.a)}q=C.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.av(w)]
p.p4=""},
bVy(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dFW(u,w,d))
v=x.t
B.BN("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a50(1100,new B.dFX(u))
return}if(d==null){if(u.cx!=null)u.ahm(null)
return}u.ahm(d)},
bZf(d,e){var w,v=this,u=null,t=C.n(18),s=C.I(A.bX.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.f5q,u,u,u)}else if(d==null||e==null)w=D.fjp
else{w=x.p
w=C.B(C.a([C.E(C.x(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hK,u,u,u),A.cV,C.d(e.b,u,u,u,u,u,u,F.DH,u,u,u)],w),A.F,u,A.e,A.N,0,A.p),1),C.aH(u,u,u,u,D.bOj,u,u,u,new B.dFY(v),u,u,u,u,"Back to the whole body",A.ce)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.Wo,u,s,t,u,u,A.n),u,u,u,u,I.aia,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.drr.h(0,g)
i.ayC()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d9a
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(i.ay3(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mG,h,h,h,new B.dGc(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:C.DS(h,A.qq,q)}else q=A.kG
q=C.x(C.a([C.E(q,1),new C.D(F.YU,i.bZf(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.d19[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dB(l,n,new B.dGd(i,o),o.c,A.bX,h))}p=C.a([new B.eV(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.L)(w),++s){k=w[s]
n.push(new B.dB(k,k===i.cx,new B.dGe(i,k),h,A.aM,h))}p.push(new B.eV(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hH(A.c7,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dGf(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.Fh(D.auD[j],i.CW===j,new B.dGg(i,j),!1,h))
p.push(new B.eV(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dB("Spin",n,new B.dGh(i),D.alm,A.aO,h),new B.fj(A.k8,"Reset view",new B.dGi(i),A.c,h),new B.dB(l,m,new B.dGj(i),A.Gx,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dB("Heartbeat sound",i.k4,new B.dGk(i),A.oa,A.c7,h))
p.push(new B.eV(v,h,h))
return B.jL(A.bX,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.x(p,A.m,h,A.e,A.N,0,A.p))}}
B.aL4.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.aL5.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv1()}}
B.c1C.prototype={
kI(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hnE
$.hnE=v+1
u="ngmy-body-viewer-"+v
$.yI()
$.qi().pX(u,new B.c1D(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fN(v,"message",new B.c1E(t),!1,x.gA)
t.b=u},
f_(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bzg(w.contentWindow)
if(w!=null)J.fUX(w,e,"*")}}catch(v){}}}
B.y7.prototype={}
B.Cn.prototype={}
B.no.prototype={}
B.baK.prototype={}
B.Um.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new B.aCE(C.U(w,x.a2),C.a([],x.cB),C.U(w,v),C.U(w,v),C.U(w,u),A.ax,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCE.prototype={
Z(){var w=this
w.a1()
w.ll()
w.acn()
$.aW.x1$.push(new B.dIx(w))},
acn(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$acn=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$acn)
case 6:q=e.tg("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.m(new B.dIb(s,r))
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
return C.i($async$acn,v)},
acH(d){return this.c22(d)},
c22(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acH=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.L(0,d)
u=3
w=6
return C.b(C.ay(),$async$acH)
case 6:r=f
q=s.cx
p=C.a3(q).k("jT<co.E,m>")
q=C.C(new C.jT(q,new B.dIe(),p),p.k("J.E"))
r.aq("StringList","ngmy_circuit_passed_v1",q)
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
return C.i($async$acH,v)},
awM(d,e,f,g){var w="c"+this.y++,v=new B.Cn(w,e,f,g)
this.d.n(0,w,v)
return v},
mB(d,e,f){return this.awM(0,e,f,0)},
abJ(d,e){var w
if(D.zd.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.v(-36,w))},
tG(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aSg(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fX$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.dZ(m,D.cM8[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tG(p,0)&&n.tG(p,1)
break
case"or":p=q.a
o=n.tG(p,0)||n.tG(p,1)
break
case"xor":p=q.a
o=n.tG(p,0)!==n.tG(p,1)
break
case"nand":p=q.a
o=!(n.tG(p,0)&&n.tG(p,1))
break
case"nor":p=q.a
o=!(n.tG(p,0)||n.tG(p,1))
break
case"not":o=!n.tG(q.a,0)
break
default:o=n.tG(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bOc(){return this.aSg(null)},
lD(d){var w,v,u,t,s,r,q,p,o,n=this
n.bOc()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gae(0),v=new C.f2(w,new B.dIy()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fX$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fX$)
o=s+1
E.dH(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
awN(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
m5(d,e){var w=this.x
return new C.v(d*w.a,e*w.b)},
asZ(d){var w=this
if(w.x.A(0,A.ax)){$.aW.x1$.push(new B.dI9(w,d))
return}w.m(new B.dIa(w,d))},
cww(d){this.m(new B.dIf(this,d,$.bE3()[d]))},
c6I(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bE3()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a_<J.E>")
s=t.k("J.E")
r=C.C(new C.a_(new C.bc(v,u),new B.dI4(),t),s)
A.d.aZ(r,new B.dI5())
q=C.C(new C.a_(new C.bc(v,u),new B.dI6(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dI7(d,w))
return}u=d.r
p=C.dQ(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dC(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.h5(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aSg(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jK(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aG(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new B.dI8(d,o,a0))},
axA(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.S(s).k("dx<1>")
s=new C.dx(s,r)
s=new C.bQ(s,s.gM(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cfd(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.S(r).k("dx<1>")
r=new C.dx(r,q)
r=new C.bQ(r,r.gM(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bZ8(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zd.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abJ(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bN2(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abJ(p,o)
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
c6K(d){var w,v,u,t=this,s=t.axA(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eY()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dH(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new B.dIg())
return}u=t.bN2(d)
if(u!=null)t.m(new B.dIh(t,u))
else t.m(new B.dIi(t))},
avA(d){return this.c12(d)},
c12(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$avA=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.axA(d)
if(s==null){w=1
break}C.jl()
t.m(new B.dId(t,s))
case 1:return C.h(u,v)}})
return C.i($async$avA,v)},
bzP(d){if(this.x.A(0,A.ax))return
this.m(new B.dI3(this,d,A.cH))
C.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bE3()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.oa:O.ro,A.ad,h,h,h,21),h,h,h,new B.dIr(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.n(16)
s=A.cl.j(0.14)
r=C.I(A.cl.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.f4B,h,h,h),C.d(w.b,h,h,h,h,h,h,D.fcU,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.D(A.lS,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b0:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.E(C.x(q,A.F,h,A.e,A.j,0,A.p),1),C.bG(D.fut,i.gc6H(),C.bo(A.cl,h,h,h,h,h,h,h,h,h,h,A.ce))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,Y.Mw,D.bts,h,h,1/0))}u.push(C.E(C.cq(new B.dIs(i)),1))
if(f!=null){t=C.n(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.zd.h(0,r).a+": "+D.zd.h(0,r).e,h,h,h,h,h,h,A.rY,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A8.ahU,A.bR,h,h,1/0))}u=C.x(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.zd.gdL(D.zd),s=s.gae(s);s.C();){r=s.gR(s)
q=new C.aS(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.az(o.j(0.5),1,A.q,-1)
t.push(C.aC(h,C.p(h,C.x(C.a([C.X(p.b,o,h,h,h,20),A.bC,new C.y(p.a,h,D.aRc,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.N,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bn(q,q,q,q),h,h,A.n),h,h,h,A.fD,Aj.Ms,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dIt(i,r),h,h,h,h,h,h,!1,A.a6))}s=C.a([],g)
for(l=0;l<4;++l){k=D.ddu[l]
s.push(new B.fj(A.O6,k.b,new B.dIu(i,k),A.cl,h))}s.push(new B.fj(D.yj,"Clear",new B.dIv(i),A.c7,h))
r=C.a([],g)
for(j=0;q=$.bE3(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.e8:A.ls
o=i.ay
n=i.cx.t(0,j)?A.b0:A.bH
r.push(new B.dB(q.a,o===j,new B.dIw(i,j),p,n,h))}return B.jL(A.cl,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.x(C.a([new B.eV(t,"PARTS",h),new B.eV(s,"TRY",h),new B.eV(r,"TASKS",h)],g),A.m,h,A.e,A.N,0,A.p))}}
B.bb2.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.acG.gp(0)
a7.b_(new C.a8(0,0,0+a5,0+a6),w)
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
g=a5.abJ(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=C.a([],p)
d=new C.aO(l.r,A.ao,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pH(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.bH.j(0.28).gp(0)
l.z=G.mJ
s=l.H()
l=d.gbK().a.snapshot()
w.drawPath((d.e=new C.cC(l)).a,s)
s.delete()}l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bT
l.r=(f?A.dR:A.br).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cC(d.gbK().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.Ik)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aO($.W().r,A.ao,a4,a4,C.a([],p))
w=a3.b
p.F(new C.b5(a6,w))
r=g.b
p.F(new C.pH(a6+a0,w,a5-a0,r,a5,r))
r=C.N()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aR(p,r)}for(a5=new C.du(o,o.r,o.e);a5.C();)this.c6J(a7,a5.d)},
c6J(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zd.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.ce(a0.c,64,64)
s=C.bx(t,A.lc)
r=w.cy===v
q=s.eU(A.cC)
$.W()
p=C.N()
p.r=A.w.j(0.55).gp(0)
p.z=A.lz
d.aE(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.N()
p.sar(new C.bU(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).aw(0,C.bV(a0.c,52)))
d.af(q,52,p)}q=s.eU(A.cJ)
p=C.N()
o=e.c
p.r=C.aq(o,A.w,0.65).gp(0)
d.aE(q,p)
n=u?0.35:0
q=C.N()
p=C.aq(o,A.c,0.1+n)
p.toString
m=C.aq(o,A.w,u?0.2:0.45)
m.toString
q.sar(new C.a9(A.b1,A.b5,A.x,C.a([p,m],x.O),g,g).aw(0,t))
d.aE(s,q)
q=C.N()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aE(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.ug:D.bI9}else l=e.b
k=B.h_r(C.jK(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a3(d,v.aC(0,new C.v(p/2,q.gbc(q)/2)))
j=B.h_r(e.a,10.5,A.c,g,g,A.H)
j.a3(d,a0.c.ad(0,new C.v(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.h_r(f,9,u?A.dR:A.bU,g,g,A.u)
i.a3(d,a0.c.ad(0,new C.v(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aZ1(d,w.abJ(a0,h),o)
this.aZ1(d,a0.c.ad(0,D.Ik),o)},
aZ1(d,e,f){var w
$.W()
w=C.N()
w.r=D.acG.gp(0)
d.af(e,8.5,w)
w=C.N()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.af(e,8.5,w)
w=C.N()
w.r=A.c.gp(0)
d.af(e,3.2,w)},
au(d){return!0}}
B.aLa.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx1.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv7()}}
B.Nl.prototype={
S(){return new B.aCV(C.mD(0,null,null))}}
B.Ko.prototype={
a5(){return"_UnfoldStyle."+this.b}}
B.Az.prototype={}
B.aCV.prototype={
c6O(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dOn(w,e))},
c_W(){var w=this
w.e.q()
w.e=C.mD(w.f,null,null)
w.m(new B.dOm(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.os(t,C.c6(v,A.c_,t?new B.br2(w.e,w.gc6N(w),new B.dOo(d),v):new B.aHa(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dOp(w,u),x.C)}}
B.bsC.prototype={}
B.br2.prototype={
aZ2(d,e){var w=null
return new C.D(I.Zm,C.x(C.a([C.d(d,w,w,w,w,w,w,D.f5a,w,w,w),A.bC,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aH(v,v,v,v,S.nr,v,v,v,w.e,v,v,v,v,v,v),A.rS,D.bzj],u),A.m,v,A.e,A.j,0,v,v),s=w.aZ2("STUDIOS","Play, make things, and keep what you make")
$.bE4()
return C.bm(!0,C.x(C.a([new C.D(D.bym,t,v),C.E(C.vz(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ag,!1,C.a([new C.mb(s,v),new C.nU(A.hS,C.OV(new C.ov(new B.f_b(d),22,!0,!0,!0,0,C.t1(),v),D.aPa),v),new C.mb(w.aZ2("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nU(D.btz,C.OV(new C.ov(new B.f_c(w),6,!0,!0,!0,0,C.t1(),v),D.aPa),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.aeU.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.n(20),n=C.n(20),m=C.aq(F.n9,p,0.3)
m.toString
w=x.O
m=C.a([m,D.afw],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aF(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eH(C.x(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a9(A.az,A.aC,A.x,w,r,r),A.a5),r,44,r,r,r,r,r,44),A.O,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cV,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b9,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a9(A.az,A.aC,A.x,m,r,r),A.n),r,A.FP,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
B.adM.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.n(20),g=C.n(20),f=C.aq(F.n9,A.d.gI(i),0.24)
f.toString
w=x.O
f=C.a([f,D.afw],w)
v=C.I(A.d.gI(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cC,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aS(6,6)
m=C.a([A.d.gI(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aHJ,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bn(n,n,n,n),l,new C.a9(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new C.R(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.x(r,A.m,k,A.e,A.N,0,A.p)
u=C.aq(A.d.gI(i),A.d.gal(i),0.4)
u.toString
return C.aF(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eH(C.x(C.a([new C.a7(58,k,w,k),A.R,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.au,C.X(A.C6,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b9,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a9(A.az,A.aC,A.x,f,k,k),A.n),k,A.FP,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah)}}
B.Q2.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c0(j,new C.o(h,j,j,C.n(22),j,j,A.n),A.bf),j,j,2,2,8,j)
u=C.n(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.Sl,26),new C.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.J,30)],s)
q=C.n(22)
p=C.aq(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bW(0,C.c0(j,new C.o(j,j,j,j,j,new C.a9(A.az,A.aC,A.x,C.a([p,o,n,i],m),D.diO,j),A.n),A.bf),0,0,0),C.ao(j,C.c0(j,new C.o(j,j,j,j,j,new C.a9(A.b1,A.b5,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bf),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bW(0,C.b3(j,j,j,new B.bs0(i,j),A.ax),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a5),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.f6M,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.au,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Tx)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.D(A.fQ,C.B(C.a([s,A.ep,C.E(C.x(p,A.F,j,A.e,A.N,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bW(0,C.e1(C.en(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.n(22)
m.push(C.bW(0,C.e1(C.c0(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.bf),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bW(0,C.c0(C.bv(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bf),0,0,0)],l),j),j)}}
B.bs0.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a8(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbQ().a,v.gbQ().b)
d.jc(0,0.35)
t=C.ce(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.N()
s.sar(new C.a9(A.a3,A.a8,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aw(0,t))
d.b_(t,s)
u.restore()},
au(d){return d.b!==this.b}}
B.brw.prototype={
B(d){var w=null,v=C.n(22),u=C.a([D.bhg,D.aeI],x.O),t=this.e,s=C.I(A.d.gI(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.ke,24)],x.V),q=C.n(22),p=A.d.gI(t)
return new C.a7(this.c,this.d,C.c0(C.bv(q,C.b3(C.av(C.X(A.jt,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b9J(p,w),A.ax),A.aq),new C.o(w,w,s,v,r,new C.a9(A.az,A.aC,A.x,u,w,w),A.n),A.bf),w)}}
B.b9J.prototype={
a3(d,e){var w,v,u,t,s,r,q,p
$.W()
w=C.N()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ed(A.J)
$.W()
t=C.N()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.af(u,30,t)},
au(d){return!1}}
B.aHa.prototype={
S(){return new B.aHb(new C.cs(null,x.A),null,null)}}
B.aHb.prototype={
gu1(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.bqW,null,1,null,v)
w.cM(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gZq(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fO,null,1,null,v)
w.fh(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gawO(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc6L(){var w=this.w
if(w===$){w=C.C(this.a.c.d,x.G)
this.w=w}return w},
gaVs(){var w=this.x
if(w===$){w=C.C(this.a.c.e,x.Z)
this.x=w}return w},
gaWa(){var w=this.y
if(w===$){w=C.C(this.a.c.f,x.N)
this.y=w}return w},
gb6K(){var w=this.z
if(w===$){w=C.C(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a1()
var w=this.gu1()
w.dd()
w.dV$.L(0,this.gcwf())},
cwg(){var w,v,u,t,s,r,q,p=this,o=p.gu1().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gawO().a){case 0:w=D.nv
break
case 1:w=D.uo
break
case 2:w=D.a2J
break
case 3:w=D.nv
break
case 4:w=D.d68
break
case 5:w=D.uo
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aan)r=0.09
else r=s===D.aao?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dH(260+90*v,"",260,1.6,0.18,"tri")
u=D.c03[v]
B.lk("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.BN("bell",D.c8N,1400,0.35)}}p.ax=o},
q(){this.gu1().q()
this.gZq().q()
this.bx_()},
ag5(){var w=this
w.gu1().cVA(0,C.dE(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eZS(w))},
chf(){this.gu1().bR(0)
this.m(new B.eZR(this))},
adH(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$adH=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaWa(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){q=t[r]
l.push(new C.ar(new C.bb(q,A.b4,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb6K(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){p=t[r]
m.push(new C.ar(new C.bb(p,A.b4,A.aN),$.aw()))}o=C.C(u.gaVs(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bR(F.n9,null,new B.eZQ(u,l,m,o),t,!0,!0,!0,A.lB,!1,!1,x.H),$async$adH)
case 2:l=C.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$adH,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gawO(),f=i.a.c,e=f.b,d=i.gc6L(),a0=new B.Az(g,e,f.c,d,i.gaVs(),i.gaWa(),i.gb6K())
f=C.aq(A.d.gI(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.oa:O.ro,A.ad,h,h,h,21),h,h,h,new B.f__(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bRP,h,h,h,i.gc6M(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mG,h,h,h,new B.f_0(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c7(i.gZq(),new B.f_1(i,a0),h),C.cq(new B.f_2(i,a0))],g)
u=i.as
t=u?i.gche():i.gcjz()
u=u?D.bHp:A.ua
s=C.aq(A.d.gI(d),A.d.gal(d),0.4)
s.toString
t=C.B(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ce),C.E(C.c7(i.gu1(),new B.f_3(i,a1,a0),h),1),C.aH(h,h,h,h,D.bO9,h,h,h,new B.f_4(i),h,h,h,h,"Replay",A.ce)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ab(s,1)
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
s=B.hH(r,u+"x","Speed",2.5,0.4,new B.f_5(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.dg4[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dB(p.b,o===p.a,new B.f_6(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c0o[q]
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.aZ
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}j=new C.az(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.q,-1)
d.push(C.aC(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a9(A.az,A.aC,A.x,n,h,h),A.a5),h,l,h,D.ahE,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.f_7(i,n),h,h,h,h,h,h,!1,A.a6))}return B.jL(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ey(new C.an(A.W,h,A.b2,A.r,v,h),i.f),e,C.x(C.a([t,s,new B.eV(u,"STYLE",h),new B.eV(d,"THEME",h)],g),A.m,h,A.e,A.N,0,A.p))},
bz0(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nv[r]
p=A.k.D((1-A.ey.az(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nv[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nv[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dp()
l=n.a
l.$flags&2&&C.aj(l)
l[11]=0.0013
n.kb(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nv[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nv[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nv[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cL(0,r*118,0,f,f,f,new C.kI(q,new C.iJ(n,f,A.b1,!0,f,new B.Q2(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nv[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nv[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.mm(new B.bqF(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.ax,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bPG(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uo[r]
p=A.pR.az(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uo[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.uo[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dp()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jR(n,n,n,1)
m.fF(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.Q2(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dp()
k.fF(3.141592653589793)
k=new C.iJ(k,f,A.A,!0,f,new B.brw(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kI(q,new C.iJ(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cBm(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a2J[w]
l.push(A.cu.az(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bW(0,C.b3(n,n,n,new B.bu6(d.d,l,D.awk,m,B.br1(e,0.4,0.62),f,B.br1(e,0.45,0.7),n),A.ax),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.h_X(g,w)
q=D.awk[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kI(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.h_X(g,w)
r=D.a2J[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kI(A.k.D((e-q)/(r+0.25-q),0,1),new C.y(u[w],n,A.Ue,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bFf(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cu.az(0,B.br1(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bW(0,C.av(C.dX(C.b3(f,f,f,new B.bq6(A.d.gI(a1),B.br1(a3,0,0.2),a4,f),new C.as(a5*0.95,70)),D.e7T),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dC.az(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dp()
m=l.a
m.$flags&2&&C.aj(m)
m[11]=0.001
l.fF(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jR(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.E(r,1):-1
w.push(new C.z(o,new C.cL(0,0,0,0,f,f,new C.cp(A.A,f,f,new C.kI(k*(0.45+0.55*o),C.dX(new C.iJ(l,f,A.A,!0,f,new B.Q2(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.v(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new B.eZJ())
A.d.v(a0,new C.M(w,new B.eZK(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bEp(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uo[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mV.az(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uo[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.ayk[q]
k=C.dp()
k.mO(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jR(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uo[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,new C.kI(m,C.dX(new C.iJ(k,e,A.A,!0,e,new B.Q2(d,92,w,p,j,i,0,g*s,h,e),e),new C.v(0,l)),e),e),e))
l=D.uo[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,C.dX(new C.mm(new B.bao(w,f,q,e),e,new C.as(r,212),e,e),new C.v(0,D.ayk[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bBW(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.v(-b0,-150),new C.v(b0,-40),D.e7X],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nv[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cu.az(0,p)
q=D.ayt[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nv[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nv[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dp()
d=f.a
d.$flags&2&&C.aj(d)
d[11]=0.001
f.mO(l*h+D.da7[r]*o)
f.fF(l*0.9)
h=0.55+0.45*o
f.jR(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,new C.kI(g,C.dX(new C.iJ(f,a3,A.A,!0,a3,new B.Q2(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.v(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nv[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.ayt[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,C.dX(new C.mm(new B.bq8(A.d.gI(w),a2,a3),a3,new C.as(a4,30),a3,a3),new C.v(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bqF.prototype={
a3(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a8(w-v,0,w+v,e.b)
q=C.bx(u,A.he)
$.W()
t=C.N()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mJ
d.aE(q,t)
t=C.bx(u,A.he)
q=C.N()
q.r=A.c.j(s).gp(0)
d.aE(t,q)},
au(d){return d.c!==this.c||d.d!==this.d}}
B.bq6.prototype={
a3(d,e){var w,v,u=this.c,t=C.ce(e.ed(A.J),e.b*u,e.a*u)
$.W()
u=C.N()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Z.HN
d.hZ(t,u)
u=C.N()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hZ(t,u)
u=t.cw(-14)
v=C.N()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hZ(u,v)},
au(d){return!0}}
B.bao.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ed(A.J),f=this.c,e=A.cu.az(0,f)
$.W()
w=C.N()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.af(g,40+e*a0.a*0.42,w)
t=new C.eE()
t.dt(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.aj()*3.141592653589793*2
n=(40+t.aj()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.aj()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gI(u):A.c
j.r=i.j(A.k.D(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
au(d){return!0}}
B.bq8.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ed(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.ce(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c_(p),n)
n.delete()}},
au(d){return d.c!==this.c}}
B.bu6.prototype={
a3(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a8(0,d0,0+c5,d0+60)
$.W()
d0=C.N()
w=c1.b
v=x.O
d0.sar(new C.a9(A.b1,A.b5,A.x,C.a([A.d.gI(w).j(0.18),A.K],v),c2,c2).aw(0,d1))
d2.b_(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bE(new C.v(0,c4),new C.v(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.h_X(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lz
a4=a3.H()
t.drawOval(C.c_(new C.a8(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a8(d,a1,a3,a1+a0)
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gI(w),A.c,0.1)
a7.toString
a6.sar(new C.a9(A.b1,A.b5,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).aw(0,a5))
a4=a6.H()
t.drawRect(C.c_(a5),a4)
a4.delete()
a2=a2.r
a6=C.a([],n)
a8=new C.aO(a2,A.ao,c2,c2,a6)
a6.push(new C.b5(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a7,m))
a6.push(new C.ap(a3,c4))
a6.push(new C.bE())
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=C.aq(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbK().a.snapshot()
t.drawPath((a8.e=new C.cC(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aO(a2,A.ao,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bE())
a2=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=C.aq(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbK().a.snapshot()
t.drawPath((b0.e=new C.cC(a2)).a,a4)
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
t.drawPath((a2==null?a8.e=new C.cC(a8.gbK().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cC(b0.gbK().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bl(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bx(new C.a8(b7,a7,b7+r,b5),A.he)
$.W()
b9=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.er(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a8(d,a1,a3,a1+28)
J.by(t.save())
t.clipRect(C.c_(a5),$.nu()[1],!0)
$.W()
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.sar(new C.a9(A.b1,A.b5,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aw(0,c0))
a4=a1.H()
t.drawRect(C.c_(c0),a4)
a4.delete()
t.restore()}}},
au(d){return!0}}
B.aMU.prototype={
aT(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
B.a0h.prototype={
a5(){return"_Role."+this.b}}
B.q7.prototype={}
B.qN.prototype={}
B.Cr.prototype={}
B.Zf.prototype={}
B.aeK.prototype={}
B.a0u.prototype={
gY(d){return this.d}}
B.CB.prototype={}
B.abD.prototype={}
B.abU.prototype={}
B.adQ.prototype={}
B.bgS.prototype={
a2w(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dH(d,"",e,g,h,f)},
b7M(d,e,f){return this.a2w(d,e,f,0,0.55)},
aBn(d,e,f,g){return this.a2w(d,e,f,0,g)},
b7N(d,e,f,g){return this.a2w(d,e,f,g,0.55)},
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
w.aV()},
ajL(d,e,f,g){var w="n"+this.ay++,v=new B.qN(w,e,f,g)
this.a.n(0,w,v)
this.aV()
return v},
B4(d,e,f){return this.ajL(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.br(w.b,new B.dif(e))
A.d.br(w.c,new B.dig(e))
w.aV()},
bbB(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mI.h(0,v.b).c===D.wX)return!1
w=this.b
if(A.d.b4(w,new B.dic(d,e)))return!1
w.push(new B.Cr(d,e))
this.aV()
return!0},
bZT(d){var w
if(d.b==="beat")return D.c8X[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.av(500)
case 2:return 1400+w.av(2200)
default:return 450+w.av(2000)}},
aER(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.ayJ[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.CB(u,t,j.ax,90))
w.push(new B.CB(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a0u(u,new C.v(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b7M(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a0u(u,new C.v(o*p,n*p),m,3+w.aj()*4.5,1000+w.av(700),j.ax))}j.f.push(new B.CB(u,t,j.ax,120))
j.aBn(120,200,"noise",0.5)
j.b7M(261.63*Math.pow(2,([7,12,16,19][w.av(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.CB(u,t,j.ax,230))
w.push(new B.CB(u,t,j.ax+160,160))
w.push(new B.CB(u,t,j.ax+320,100))
j.b7N(180+j.at.av(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.abD(u,new C.v((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b7N(300+w.av(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.abU(u,u.ad(0,new C.v(Math.cos(q),Math.sin(q)).aH(0,260+w.aj()*200)),t,j.ax))
j.a2w(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fH()
j.a2w(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.adQ(u,D.ay7[v],t,j.ax))
j.aBn(261.63*Math.pow(2,([0,5,9,12][j.at.av(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aBn(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c52[A.o.E(w,3)]
for(k=1;k<=3;++k)j.crl(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new C.f2(w,new B.did(d));v.C();)j.azT(w.gR(0),j.ax+D.chm[A.o.E(g.d,4)])
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
case"chance":s=j.at.av(100)<D.cyk[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new C.f2(w,new B.die(d));v.C();)j.azT(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zf(w,0,v-700)},
crl(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Zf(e,"~"+d))},
azT(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.aeK(d.a,v,e,w))
u.push(new B.Zf(w,v))},
a6c(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aER(r)
u.n(0,r,o.ax+o.bZT(s))}}w=o.c
v=C.S(w).k("a_<1>")
q=C.C(new C.a_(w,new B.dih(o),v),v.k("J.E"))
if(q.length!==0){A.d.br(w,new B.dii(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b6(u,1)
for(u=A.d.gae(v),r=new C.f2(u,new B.dij(p));r.C();)o.azT(u.gR(0),o.ax)}else o.aER(u)}}A.d.br(o.d,new B.dik(o))
A.d.br(o.e,new B.dil(o))
A.d.br(o.f,new B.dim(o))
A.d.br(o.w,new B.din(o))
A.d.br(o.x,new B.dio(o))
A.d.br(o.r,new B.dip(o))
o.aV()},
v8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new C.v(q.a+o*e,q.b+p*e)
r.b=new C.v(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new C.v(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new C.v(l,o)
if(o>n){p=m.a=new C.v(l,n)
t=m.b=new C.v(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new C.v(-t.a*0.8,t.b)}},
ah(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=C.a([],x.D)
for(v=this.a,v=new C.du(v,v.r,v.e),u=x.N,t=x.C;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.F(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.L)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.S.ao(C.F(["nodes",m,"edges",v],u,x.ew),null)},
aF_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.S.aL(0,d,null))
k.a8(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=C.u(J.q(v,"k"))
if(!D.mI.ai(0,u))continue
t=C.u(J.q(v,"id"))
m.n(0,t,new B.qN(t,u,new C.v(C.dU(J.q(v,"x"))*k.cy.a,C.dU(J.q(v,"y"))*k.cy.b),A.k.N(C.dU(J.q(v,"p")))))
s=C.c8(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=C.u(J.q(r,0))
p=C.u(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.Cr(q,p))}k.aV()
return!0}catch(l){return!1}},
cQi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qN(n,r,new C.v(q*p.a,o*p.b),s))
l.aV()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bbB(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.FR.prototype={}
B.VS.prototype={
S(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aEa(new B.bgS(C.U(w,x.f3),v,u,t,s,r,q,p,o,C.U(w,n),C.U(w,n),C.U(w,n),C.U(w,n),A.cH,A.K,A.ax,$.aw()),A.bx,A.J,A.J,A.U,null,null)}}
B.aEa.prototype={
acg(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$acg=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.ay(),$async$acg)
case 6:q=n.jO(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.eoP(s))
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
return C.i($async$acg,v)},
a9b(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a9b=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.eoE(s))
u=3
w=6
return C.b(C.ay(),$async$a9b)
case 6:e.aq("Bool","ngmy_core_lab_coach_v1",!0)
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
return C.i($async$a9b,v)},
bLe(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cJ(0,0,new B.eoG())+"|"+A.d.cJ(o,0,new B.eoH())
if(v===p.ch)return p.CW
u=new B.eoK()
t=x.s
s=C.a([],t)
r=new B.eoL(p,s,u)
for(n=new C.bc(n,w).gae(0),w=new C.f2(n,new B.eoI());w.C();){q=n.gR(0)
if(!A.d.b4(o,new B.eoJ(q)))s.push(C.u(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.d9(s,0,C.dG(5,"count",x.S),x.N).dJ(0)},
Z(){var w,v=this
v.a1()
v.acg()
v.d.db=v.ay
w=v.qB(new B.epe(v))
w.hG(0)
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
w.bw_()},
abN(d){return this.bZl(d)},
bZl(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abN=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.ay(),$async$abN)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.aF_(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aWC(A.d.gI(D.axz))
if(s.c!=null)s.m(new B.eoO())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abN,v)},
aWC(d){this.d.cQi(0,d.c,d.d)
this.E8()},
E8(){var w=this.as
if(w!=null)w.a7(0)
this.as=C.cM(A.lR,new B.eoA(this))},
awP(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.S(s).k("dx<1>")
s=new C.dx(s,r)
s=new C.bQ(s,s.gM(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cfe(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.S(r).k("dx<1>")
r=new C.dx(r,q)
r=new C.bQ(r,r.gM(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bZ9(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mI.h(0,r.b).c===D.wX)continue
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
c6R(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hnF(new C.v(n.a+36,n.b+0),new C.v(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cz4(d){var w,v,u,t,s,r,q=this,p=q.awP(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eY()
u=v.b
if(u==="button"){w.aER(p)
return}if(q.r)return
t=D.mI.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qH)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aV()
q.E8()
return}if(q.r)return
r=q.c6R(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.aV()
q.E8()}},
cgx(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cfe(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.awP(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
cgy(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aV()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.v(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aV()}}},
b0L(){var w,v,u=this
if(u.z!=null){w=u.bZ9(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bbB(v,w)}else v=!1
if(v){C.jV()
u.E8()}u.z=null
u.d.aV()}else if(u.x!=null){if(u.at)u.E8()
u.x=null}},
act(d){return this.c13(d)},
c13(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$act=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.awP(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jl()
p=t.c
p.toString
w=3
return C.b(C.bR(F.n9,null,new B.eoR(q),p,!0,!0,!1,A.lB,!1,!1,x.y),$async$act)
case 3:if(f===!0){r.W(0,s)
t.E8()}case 1:return C.h(u,v)}})
return C.i($async$act,v)},
c6P(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B4(0,d,new C.v(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eY()
this.E8()},
agd(){var w=0,v=C.j(x.H),u=this,t,s
var $async$agd=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bR(F.n9,null,new B.eoT(),s,!0,!0,!0,A.lB,!1,!1,x.es),$async$agd)
case 2:t=e
if(t!=null)u.aWC(t)
return C.h(null,v)}})
return C.i($async$agd,v)},
adI(d){var w=0,v=C.j(x.H),u=this,t
var $async$adI=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.eoD(),t,null,!0,!0,x.y),$async$adI)
case 2:if(f===!0){u.d.a8(0)
u.E8()}return C.h(null,v)}})
return C.i($async$adI,v)},
B(d){var w=this,v=null,u=C.a([C.ai7(w.r?new C.bI(A.a3,v,v,new C.D(A.FQ,C.hn(D.bM8,D.fnm,new B.epc(w),v),v),v):w.c6S(),A.bd,A.iI),C.E(C.cq(new B.epd(w)),1)],x.p)
if(!w.r)u.push(w.ctR())
return C.c6(v,A.c_,C.bm(!0,C.x(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bGX(){var w=null,v=new B.eoF(),u=A.w.j(0.7),t=C.n(26),s=C.I(A.bv.j(0.5),A.q,1)
return C.bW(0,C.en(C.av(C.p(w,C.cc(C.x(C.a([D.fys,A.au,D.fG_,A.aB,v.$4(A.p_,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.C3,A.cl,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lr,A.bX,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.alz,A.bH,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fFj,new C.bI(A.a8,w,w,C.bK(!1,D.fvD,w,w,!0,w,w,this.gbGQ(),w,w),w)],x.p),A.F,w,A.e,A.N,0,A.p),A.r,w,A.y,w,w,w,w,A.ag),A.f,w,A.VM,new C.o(F.n9,w,s,t,w,w,A.n),w,w,w,A.fE,A8.aiT,w,w,w),w,w,w),u,!0),0,0,0)},
c6S(){var w=this,v=null,u=C.aH(v,v,v,v,S.nr,v,v,v,new B.eoZ(w),v,v,v,v,v,v),t=w.a8E(A.NV,"How it works",new B.ep_(w),!0),s=w.ay?A.oa:O.ro
return new C.D(D.bxC,C.B(C.a([u,D.bz5,t,w.a8E(s,"Sound",new B.ep0(w),!0),w.a8E(A.dY,"Ideas",w.gckh(),!0),w.a8E(D.yj,"Clear",w.gc6Q(w),!0),w.aNv(A.iM,"Show",new B.ep1(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aNv(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=C.n(14),t=C.n(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.D(Ac.vJ,C.aF(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hx(new C.D(new C.R(8,8,8,8),C.B(s,A.m,w,A.e,A.N,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ah),w)},
a8E(d,e,f,g){return this.aNv(d,e,f,g,!1)},
ctR(){var w=null,v=new B.eoV(this),u=A.c.j(0.08)
return C.p(w,C.cc(C.B(C.a([v.$2("START",D.wX),v.$2("CHANGE",D.E1),v.$2("REACT",D.qH)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP),A.f,w,w,new C.o(F.AQ,w,new C.bO(new C.az(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bsR,w,w,w)},
ctS(d){var w,v,u,t,s=null,r=D.mI.h(0,d)
r.toString
w=C.n(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.D(A.fD,C.aC(s,C.p(s,C.x(C.a([C.X(r.b,v,s,s,s,22),A.cV,C.d(r.a,s,1,A.a2,s,s,s,D.aRc,s,s,s)],x.p),A.m,s,A.e,A.N,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a9(A.b1,A.b5,A.x,u,s,s),A.n),s,s,s,s,A.hC,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.eoU(this,d),s,s,s,s,s,s,!1,A.a6),s)}}
B.bgT.prototype={
a3(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
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
b8.b_(new C.a8(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){l=w[m]
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
a0=new C.aO(e.r,A.ao,b4,b4,d)
d.push(new C.b5(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new C.pH(h+a1,i,f-a1,g,f,g))
a2=D.mI.h(0,k.b).d
a3=D.mI.h(0,j.b).d
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bT
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rA(new C.v(h,i),new C.v(f,g))
e.sar(new C.a9(A.a3,A.a8,A.x,d,b4,b4).aw(0,new C.a8(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbK().a.snapshot()
b7.drawPath((a0.e=new C.cC(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hnF(new C.v(i.a+36,i.b+0),new C.v(h.a-36,h.b),a5)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mJ
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.Ik)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aO($.W().r,A.ao,b4,b4,C.a([],o))
o=a8.b
a0.F(new C.b5(t,o))
i=a9.b
a0.F(new C.pH(t+a1,o,w-a1,i,w,i))
i=C.N()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aR(a0,i)
i=C.N()
i.r=A.c.gp(0)
b8.af(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dV.az(0,v)
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
h=C.ll(o,i,A.dV.az(0,v))
h.toString
i=C.ll(o,i,A.dV.az(0,A.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bT
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rA(i,h)
o.sar(new C.a9(A.a3,A.a8,A.x,f,b4,b4).aw(0,new C.a8(e.a-4,e.b-4,e.c+4,e.d+4)))
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
i.z=A.jw
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
i.z=A.jw
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.sar(new C.bU(P.pu,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).aw(0,C.bV(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bgU(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a3(b8,new C.v(t.a-o/2,t.b-(40+60*v+p.gbc(p)/2)))}for(b5=new C.du(n,n.r,n.e);b5.C();)b3.cg5(b8,b5.d,b6)
b7.restore()},
cg5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mI.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.ce(e.c,64,64)
t=C.bx(u,A.iw)
s=t.eU(A.cC)
$.W()
r=C.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.lz
d.aE(s,r)
if(v>0){s=t.cw(6)
r=C.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zf
d.aE(s,r)}s=t.eU(A.cJ)
r=C.N()
q=h.d
r.r=C.aq(q,A.w,0.65).gp(0)
d.aE(s,r)
r=C.N()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.w,0.35)
p.toString
r.sar(new C.a9(A.b1,A.b5,A.x,C.a([s,p],x.O),j,j).aw(0,u))
d.aE(t,r)
r=C.N()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aE(t,r)
r=h.b
p=e.c
o=B.bgU(C.jK(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a3(d,p.aC(0,new C.v(s/2,r.gbc(r)/2)))
n=B.bgU(h.a,11,A.c,j,j,A.H)
n.a3(d,e.c.ad(0,new C.v(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.ay7[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qH){s=e.c.ad(0,new C.v(0,62))
r=C.N()
r.r=D.ayJ[A.o.E(e.d,6)].gp(0)
d.af(s,5,r)}else if(m!=null){l=B.bgU(m,9.5,A.aA,j,j,A.P)
l.a3(d,e.c.ad(0,new C.v(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bgU(m,9.5,A.aA,j,j,A.P)
l.a3(d,e.c.ad(0,new C.v(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wX)k.b1A(d,e.c.aC(0,D.Ik),q)
k.b1A(d,e.c.ad(0,D.Ik),q)},
b1A(d,e,f){var w
$.W()
w=C.N()
w.r=A.c_.gp(0)
d.af(e,9,w)
w=C.N()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.af(e,9,w)
w=C.N()
w.r=A.c.gp(0)
d.af(e,3.5,w)},
au(d){return!0}}
B.aM0.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bls.prototype={}
B.PU.prototype={
gY(d){return this.d}}
B.W6.prototype={
S(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bkw(new C.cs(null,x.A),w,v,A.cH,A.bx,D.F2,null,null)}}
B.bkw.prototype={
b_i(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bl((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.awZ[A.o.E(v,5)]+12*A.o.am(v,5)+12
switch(t.z){case"glow":B.lk("synth",u,420,0.3)
break
case"rainbow":B.lk("bell",u,700,0.35)
break
case"stars":B.lk("pluck",u+12,400,0.4)
break
case"sparks":E.dH(2400+t.r.av(2000),"",60,0,0.18,"noise")
break
default:E.dH(110+t.r.av(60),"",140,0,0.22,"noise")}},
c9R(d){return this.b_i(d,!1)},
Z(){var w,v=this
v.a1()
w=v.qB(new B.eAU(v))
w.hG(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bw8()},
gb14(){var w=this.Q
return w<0?new H.mS(1,A.k.E(this.y*0.18,360),0.85,1).iM():D.R1[w]},
aRW(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb14(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.bH,A.av,v.aj())
m.toString
j.push(new B.PU(new C.v(u+(q-0.5)*p,t),new C.v((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.av(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.PU(d,new C.v(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.av(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.PU(d,new C.v(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aZ4(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb14()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bls(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aRW(e)
r.b_i(e,!0)
r.m(new B.eAv())},
aZ3(){this.ax=null
this.m(new B.eAu())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mG,n,n,n,new B.eAE(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.brW(k,o.f,o.y,o.at,n),A.ax)],m)
if(!o.ay&&k.length===0)j.push(D.b6m)
k=C.aC(A.c8,new C.an(A.W,n,A.b2,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eAF(o),new B.eAG(o),new B.eAK(o),n,n,n,n,n,n,n,n,n,new B.eAL(o),new B.eAM(o),n,n,n,!1,A.a6)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cWu[w]
j.push(new B.dB(v.b,o.z===v.a,new B.eAN(o,v),v.c,A.bX,n))}u=C.a([new B.Fh(A.c,o.Q<0,new B.eAO(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.Fh(D.R1[t],o.Q===t,new B.eAP(o,t),!1,n))
s=o.as
s=B.hH(A.bX,A.o.u(A.k.V(s)),"Size",36,4,new B.eAQ(o),s)
r=o.ch
q=r?A.oa:O.ro
q=C.a([new B.dB("Sound",r,new B.eAR(o),q,A.bX,n),new B.fj(A.rn,"Undo",new B.eAH(o),A.c,n),new B.fj(D.yj,"Clear",new B.eAI(o),A.c7,n)],m)
for(w=0;w<4;++w){p=D.dbO[w]
q.push(new B.Fh(p,o.at.A(0,p),new B.eAJ(o,p),!1,n))}return B.jL(A.bX,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ey(k,o.d),"SPARK PAINTER",C.x(C.a([new B.eV(j,"BRUSH",n),new B.eV(u,"COLOUR",n),s,new B.eV(q,n,n)],m),A.m,n,A.e,A.N,0,A.p))}}
B.brW.prototype={
a3(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.N()
v=a4.e
w.r=v.gp(v)
a6.b_(new C.a8(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aO(p.r,A.ao,a5,a5,o)
o.push(new C.b5(A.d.gI(q).a,A.d.gI(q).b))
for(p=C.S(q),m=p.k("nn<1>"),l=new C.nn(q,1,a5,m),l.zL(q,1,a5,p.c),l=new C.bQ(l,l.gM(0),m.k("bQ<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bD(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gI(q)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bT
q.e=A.fH
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hC(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bT
q.e=A.fH
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bT
q.e=A.fH
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbK().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mS(1,A.o.E(i*5,360),0.85,1).iM()
o=q[i-1]
m=q[i]
$.W()
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bT
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.L)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mS(1,A.o.E(a3*23,360),0.7,1).iM():l
a4.c6T(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.Rw
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c6T(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ao,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bD(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bD(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.F(new C.bE())
$.W()
p=C.N()
p.r=h.j(0.4).gp(0)
p.z=A.jw
d.aR(n,p)
p=C.N()
p.r=h.gp(0)
d.aR(n,p)},
au(d){return!0}}
B.Wi.prototype={
S(){return new B.aEq(new C.cs(null,x.A),new C.ar(new C.bb("NGMY",A.b4,A.aN),$.aw()),null,null)}}
B.aEq.prototype={
gIR(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tN,null,1,null,v)
w.cM(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
Z(){this.a1()
var w=this.gIR()
w.dd()
w.dV$.L(0,this.gbYh())},
bYi(){var w,v,u,t,s,r,q,p=this,o=p.gIR().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m7:new C.mc(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dH(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dH(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.lk(s,D.avW[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIR().q()
var w=this.f
w.T$=$.aw()
w.P$=0
this.bwe()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.mc(h)
w=C.C(h,C.a3(h).k("J.E"))}v=D.R1[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mG,j,j,j,new B.eHt(k,d),j,j,j,j,"Share",j)],h)
t=C.n(26)
s=D.ay8[k.y]
s=C.bv(t,C.c0(C.av(C.c7(k.gIR(),new B.eHu(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a9(A.az,A.aC,A.x,s,j,j),A.n),A.bf),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.U,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.bs(j,new C.b4(4,C.n(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.DG,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eHv(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hw,!0,A.a4,j,A.an,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cy6[r]
i.push(new B.dB(q.b,k.r===q.a,new B.eHw(k,q),j,A.bH,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.Fh(D.R1[o],k.w===o,new B.eHx(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.oa:O.ro
l=C.a([new B.dB(m,n,new B.eHy(k),l,A.bH,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.Fh(D.ay8[o][0],k.y===o,new B.eHz(k,o),!1,j))
n.push(A.bp)
n.push(new B.fj(A.mC,"Replay",new B.eHA(k),A.c,j))
m=k.x
return B.jL(A.bH,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.D(A.bB,new C.ey(s,k.d),j),"TITLE ANIMATOR",C.x(C.a([t,A.O,new B.eV(i,"MOVE",j),new B.eV(p,"COLOUR",j),new B.eV(l,"SOUND",j),new B.eV(n,"BACK",j),B.hH(A.bH,A.o.u(A.k.V(m)),"Size",96,28,new B.eHB(k),m)],h),A.m,j,A.e,A.N,0,A.p))},
c05(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cR(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bl(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.E(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
A.d.a8(p)
p.push(new C.cR(h,A.J,30*v))
p.push(new C.cR(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.E(A.k.bl(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b8
else w=u?A.bX:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mV.az(0,t)
w=h
m=t
break
case"rainbow":w=new H.mS(1,A.k.E(g*360+e*40,360),0.75,1).iM()
A.d.a8(p)
p.push(new C.cR(w.j(0.7),A.J,18))
break
default:w=h}return C.de(C.dX(C.ef(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.v(l,o)),m)}}
B.aM9.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.aMf.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.a_M.prototype={}
B.VP.prototype={
S(){var w=C.a([],x.aS)
return new B.aE2(new C.cs(null,x.A),w,A.cH,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.aE2.prototype={
gadJ(){var w=this.r
return new C.v(w.a/2,w.b/2)},
b2k(){return new H.mS(1,this.f.aj()*360,0.6,1).iM()},
arh(d,e,f,g){var w=this,v=w.gadJ().ad(0,new C.v(Math.cos(e),Math.sin(e)).aH(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_M(v,new C.v(-t,s).aH(0,r).aH(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b2k(),C.a([],x.g)))},
bGg(d,e,f){return this.arh(d,e,f,!1)},
bGf(d,e){return this.arh(d,e,1,!1)},
cwa(){var w,v,u,t=this
A.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bGf(40+w*u/5,v.aj()*3.141592653589793*2)},
bHb(){var w=this.r
this.bGg(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
Z(){this.a1()
this.ll()},
lD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.ax))return
w=a2.e
v=w.length
if(v===0&&a2.fX$<300)return
u=a2.gadJ()
t=a3*a2.x/4
for(s=u.a,r=u.b,q=0;q<4;++q,v=o)for(p=0;o=w.length,p<o;w.length===v||(0,C.L)(w),++p){n=w[p]
o=n.a
m=s-o.a
o=r-o.b
l=Math.max(m*m+o*o,400)
k=Math.sqrt(l)
j=1e6*a2.w/l
i=new C.v(m/k*j,o/k*j)
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
i=new C.v(i.a+f/m*d*a0,i.b+j/m*d*a0)}o=n.b
m=o.a+i.a*t
o=o.b+i.b*t
n.b=new C.v(m,o)
j=n.a
n.a=new C.v(j.a+m*t,j.b+o*t)}for(p=0;o=w.length,p<o;w.length===v||(0,C.L)(w),++p){n=w[p]
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
if(v.b<r)if(J.lY(v.a-s)!==J.lY(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fX$-n.r>250){n.r=a2.fX$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.lk("bell",D.avW[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a_(w,new B.elk(u),C.S(w).k("a_<1>")).gM(0)>0&&a2.ax)E.dH(70,"",300,0.6,0.8,"sine")
A.d.br(w,new B.ell(a2,u))},
cka(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gadJ()
for(w=j.a,v=j.b,u=e,t=d,s=0;s<220;++s){r=t.a
q=w-r
p=t.b
o=v-p
n=Math.max(q*q+o*o,400)
m=Math.sqrt(n)
l=1e6*this.w/n
q=u.a+q/m*l*0.016666666666666666
l=u.b+o/m*l*0.016666666666666666
u=new C.v(q,l)
t=new C.v(r+q*0.016666666666666666,p+l*0.016666666666666666)
if(A.o.E(s,3)===0)k.push(t)
if(m<16)break}return k},
gaWf(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aH(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mG,r,r,r,new B.el8(s,d),r,r,r,r,"Share",r)],q),o=C.cq(new B.el9(s)),n=s.w
n=B.hH(A.ct,A.k.ab(n,1)+"x","Sun mass",2.5,0.3,new B.ela(s),n)
w=s.x
w=B.hH(A.ct,A.k.ab(w,1)+"x","Time",3,0.2,new B.elc(s),w)
v=s.Q
v=B.hH(A.ct,A.o.u(A.k.V(v)),"Planet size",16,3,new B.eld(s),v)
u=s.ax
t=u?A.oa:O.ro
return B.jL(A.ct,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.x(C.a([n,w,v,new B.eV(C.a([new B.dB("Sound",u,new B.ele(s),t,A.ct,r),new B.dB("Trails",s.z,new B.elf(s),A.Ob,A.ct,r),new B.dB("Planets pull each other",s.y,new B.elg(s),A.yG,A.ct,r)],q),r,r),new B.eV(C.a([new B.fj(A.mB,"Solar system",new B.elh(s),A.ct,r),new B.fj(A.nq,"Comet",new B.eli(s),A.c,r),new B.fj(A.my,"Cluster",new B.elj(s),A.c,r),new B.fj(D.yj,"Clear",new B.elb(s),A.c7,r)],q),r,r)],q),A.m,r,A.e,A.N,0,A.p))}}
B.blf.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.N()
w.r=D.X4.gp(0)
d.b_(new C.a8(0,0,0+g,0+f),w)
v=new C.eE()
v.dt(5)
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
t.sar(new C.bU(A.A,0.5,A.x,h,0,C.a([A.ct.j(0.45),A.K],s),h,h).aw(0,C.bV(g,f)))
d.af(g,f,t)
t=C.N()
t.sar(D.ejE.aw(0,C.bV(g,o)))
d.af(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.c=2.2*l+0.4
j.d=A.bT
j.r=r.j(l*0.8).gp(0)
p=j.H()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k=m.d
q.r=k.j(0.3).gp(0)
q.z=G.mJ
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.sar(new C.bU(P.pu,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).aw(0,C.bV(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.N()
t.c=2
t.r=A.jm.gp(0)
d.bE(g,f,t)
t=C.N()
t.r=A.c.gp(0)
d.af(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
au(d){return!0}}
B.abK.prototype={}
B.Wd.prototype={
S(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bkB(new C.cs(null,x.A),w,v,A.cH,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.bkB.prototype={
Z(){this.a1()
this.ll()},
c6U(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.abK(new C.v(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.v(p*n,o*n),A.k.E(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.ax))return
a2.c6U()
w=a2.f
A.d.br(w,new B.eGV(a2))
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
r=new C.v(r.a+j,r.b+l)
l=m.b
q=new C.v(q.a+l.a,q.b+l.b)
if(h<676&&h>0.01){l=Math.sqrt(h)
h=26-Math.sqrt(h)
p=new C.v(p.a-i/l*h,p.b-k/l*h)}}}if(o>0){l=s.a
k=0.8*a2.y
j=s.b
i=1.6*a2.Q
g=7*a2.z
f=new C.v(0+(r.a/o-l.a)*k+(q.a/o-j.a)*i+p.a*g,0+(r.b/o-l.b)*k+(q.b/o-j.b)*i+p.b*g)}else f=A.J
l=s.a
k=l.a
if(k<40)f=new C.v(f.a+(40-k)*6,f.b+0)
j=a2.w
i=j.a-40
if(k>i)f=new C.v(f.a-(k-i)*6,f.b)
l=l.b
if(l<40)f=new C.v(f.a+0,f.b+(40-l)*6)
j=j.b-40
if(l>j)f=new C.v(f.a,f.b-(l-j)*6)
j=a2.ay
if(j!=null){k=j.a-k
l=j.b-l
e=Math.sqrt(k*k+l*l)
j=a2.at
if(j==="attract"&&e<260&&e>1)f=new C.v(f.a+k/e*420,f.b+l/e*420)
if(j==="scare"&&e<170&&e>1){i=170-e
f=new C.v(f.a-k/e*i*22,f.b-l/e*i*22)}if(j==="hunt"&&e<220&&e>1){j=220-e
f=new C.v(f.a-k/e*j*30,f.b-l/e*j*30)}}for(l=w.length,d=0;d<w.length;w.length===l||(0,C.L)(w),++d){k=w[d].a
j=s.a
i=k.a-j.a
j=k.b-j.b
e=Math.sqrt(i*i+j*j)
if(e<220&&e>1)f=new C.v(f.a+i/e*360,f.b+j/e*360)}l=s.b
k=l.a+f.a*a3
l=l.b+f.b*a3
s.b=new C.v(k,l)
a0=Math.sqrt(k*k+l*l)
l=a2.as
k=a2.at==="hunt"&&a2.ay!=null?1.5:1
if(a0>0.01){j=s.b
k=A.k.D(a0,l*0.5,l*k)
s.b=new C.v(j.a/a0*k,j.b/a0*k)}l=s.a
k=s.b
s.a=new C.v(l.a+k.a*a3,l.b+k.b*a3)}a1=w.length
A.d.br(w,new B.eGW(a2))
if(w.length<a1&&a2.ch)B.lk("bell",12+a2.r.av(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fX$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fX$
B.lk("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mG,l,l,l,new B.eGK(m,d),l,l,l,l,"Share",l)],k),i=C.cq(new B.eGL(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cY5[w]
h.push(new B.dB(v.b,m.at===v.a,new B.eGM(m,v),v.c,A.b0,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cI4[w]
u.push(new B.dB(t.b,m.ax===t.a,new B.eGN(m,t),l,A.b0,l))}s=m.ch
r=s?A.oa:O.ro
r=C.a([new B.dB("Sound",s,new B.eGO(m),r,A.b0,l)],k)
s=m.x
s=B.hH(A.b0,A.o.u(A.k.V(s)),"How many",150,15,new B.eGP(m),s)
q=B.hH(A.b0,l,"Together",2.5,0,new B.eGQ(m),m.y)
p=B.hH(A.b0,l,"Apart",2.5,0,new B.eGR(m),m.z)
o=B.hH(A.b0,l,"Same way",2.5,0,new B.eGS(m),m.Q)
n=m.as
return B.jL(A.b0,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.x(C.a([new B.eV(h,"TOUCH",l),new B.eV(u,"LOOK",l),new B.eV(r,l,l),s,q,p,o,B.hH(A.b0,A.o.u(A.k.V(n)),"Speed",280,50,new B.eGT(m),n)],k),A.m,l,A.e,A.N,0,A.p))}}
B.bsO.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.aex,D.bmj],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.db,U.LM],v):C.a([D.bjd,D.bai],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.N()
s.sar(new C.a9(A.b1,A.b5,A.x,w,a3,a3).aw(0,new C.a8(0,0,v,u)))
a5.b_(new C.a8(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){q=v[r].a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bH.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.bH.j(0.25).gp(0)
n.z=G.mJ
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mS(1,j,0.7,1).iM()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jw
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
d=new C.aO(t,A.ao,a3,a3,j)
j.push(new C.b5(8,0))
j.push(new C.ap(-6,-7-e))
j.push(new C.ap(-2,0))
j.push(new C.ap(-6,7+e))
j.push(new C.bE())
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=h.gp(0)
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cC(j)).a,o)
o.delete()
s.restore()
break
default:J.by(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=C.a([],m)
d=new C.aO(t,A.ao,a3,a3,j)
j.push(new C.b5(9,0))
j.push(new C.cW(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cW(0,6,9,0))
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cA,0.6)
f.toString
j.sar(new C.a9(A.a3,A.a8,A.x,C.a([h,f],q),a3,a3).aw(0,D.ePr))
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cC(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.c7
else a1=v==="scare"?A.bH:A.b0
v=u?12:22
u=C.N()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.af(a4,v,u)}},
au(d){return!0}}
B.acc.prototype={}
B.Uk.prototype={
S(){var w=C.a([],x.bi)
return new B.aCD(w,A.cH,A.ax,C.U(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCD.prototype={
gIb(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gacK(){return 54-8*(this.r/100)},
Z(){this.a1()
this.ll()
B.zA("chain_burst").bB(new B.dHG(this),x.P)},
aZ6(){return B.w_("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
azX(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.acc(new C.v(20+s*(r.a-40),20+q*(p.b-40)),new C.v(o*m,n*m),new H.mS(1,u.aj()*360,0.6,1).iM()))}},
Zr(d){var w,v=this
if(d==null)return 0
w=(v.fX$-d)/1000
if(w<0.4)return v.gacK()*A.dV.az(0,w/0.4)
if(w<1.1)return v.gacK()
if(w<1.5)return v.gacK()*(1-(w-1.1)/0.4)
return 0},
lD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.ax)||!j.Q)return
w=j.d
if(w.length===0)j.azX()
for(v=w.length,u=0;u<v;++u){t=w[u]
if(t.d!=null)continue
s=t.a
r=t.b
q=r.a
p=r.b
o=s.a+q*d
s=s.b+p*d
t.a=new C.v(o,s)
if(o<8||o>j.f.a-8)r=t.b=new C.v(-q,p)
if(s<8||s>j.f.b-8)t.b=new C.v(r.a,-r.b)}if(j.y){n=C.a([],x.U)
v=j.at
if(v!=null)n.push(new C.z(v,j.Zr(j.ax)))
for(v=A.d.gae(w),s=new C.f2(v,new B.dHH());s.C();){r=v.gR(0)
n.push(new C.z(r.a,j.Zr(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.L)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fX$
E.dH(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eY()
break}}}if(!(j.at!=null&&j.Zr(j.ax)>0||A.d.b4(w,new B.dHI(j)))&&j.fX$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gIb()){if(j.as>=j.gIb()*1.5)k=3
else k=j.as>=j.gIb()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.BN("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aZ6()}else E.dH(120,"",300,0,0.3,"saw")}}},
aZ5(d){this.m(new B.dHw(this,d))
this.aZ6()},
adK(){var w=0,v=C.j(x.H),u=this,t,s
var $async$adK=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dHz(u),s,null,!0,!0,x.S),$async$adK)
case 2:t=e
if(t!=null)u.aZ5(t)
return C.h(null,v)}})
return C.i($async$adK,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gIb(),t=w.x.h(0,""+w.r)
return B.jL(A.bX,A.hc,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cq(new B.dHD(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fj(A.rj,"Levels",w.gc6V(),A.bX,v),new B.fj(A.k8,"New board",new B.dHE(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
auN(d,e,f){var w=null
return C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQy,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bYM(d,e){return this.auN(d,e,A.c)}}
B.baJ.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.N()
w.r=D.F2.gp(0)
d.b_(new C.a8(0,0,0+e.a,0+e.b),w)
v=new B.cMK(d)
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
p.z=G.mJ
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
B.aL8.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx0.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv5()}}
B.aLY.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxh.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvX()}}
B.aMc.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxp.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bwb()}}
B.FN.prototype={
gcPy(){return this.a.aC(0,this.b).gcn()>4}}
B.ad1.prototype={}
B.VJ.prototype={
S(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bka(new C.cs(null,x.A),w,v,A.cH,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.bka.prototype={
aPw(d){return new H.mS(1,A.o.E(d*29,360),0.6,1).iM()},
a_b(d){var w,v=D.CF.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bl(d.a/s*t),0,t-1)
return v[A.o.E(w,u)]+12*A.o.dZ(w,u)},
aSb(d){A.d.br(this.e,new B.egO(this,d))},
cse(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gcn()
return d.aC(0,e.ad(0,w.aH(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gcn()},
ays(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
A.d.a8(f)
w=g.w
v=w.a
u=w.b
switch(d){case"stairs":for(w=u*0.045,t=v*0.5,s=0;s<7;++s){r=(s&1)===0
q=v*(r?0.08:0.42)
p=u*(0.2+s*0.1)
o=new C.v(q,p)
n=q+t
m=p+w
l=new C.v(n,m)
k=g.a_b(new C.v((q+n)/2,(p+m)/2))
p=r?o:new C.v(n,p)
r=r?l:new C.v(q,m)
f.push(new B.FN(p,r,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iM()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.v(v*(0.1+i*0.16+r),w)
k=g.a_b(h)
f.push(new B.FN(h,h,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iM()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.v(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.a_b(h)
f.push(new B.FN(h,h,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iM()))}}},
Z(){this.a1()
this.ll()},
c6X(d,e){var w,v=this.fX$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.lk(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.ax))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.ad1(new C.v(a2.w.a*(0.2+v.aj()*0.6),6),new C.v((v.aj()-0.5)*40,0),new H.mS(1,v.aj()*360,0.5,1).iM()))}if(u>3)a2.as=0
for(v=w.length,u=a2.e,t=a3/2,s=900*t,r=0;r<w.length;w.length===v||(0,C.L)(w),++r){q=w[r]
for(p=0;p<2;++p){o=q.b
n=o.a+0
o=o.b+s
m=q.b=new C.v(n,o)
l=q.a
k=l.a+n*t
l=l.b+o*t
j=q.a=new C.v(k,l)
if(k<7){m=q.a=new C.v(7,l)
o=q.b=new C.v(-n*0.6,o)
n=m}else{n=j
o=m}m=a2.w.a-7
if(n.a>m){q.a=new C.v(m,n.b)
q.b=new C.v(-o.a*0.6,o.b)}for(o=u.length,i=0;i<u.length;u.length===o||(0,C.L)(u),++i){h=u[i]
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
g=new C.v(m+l*e,j+n*e)
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
q.a=new C.v(m+l*j,k+n*j)
j=q.b
a1=j.a*l+j.b*n
if(a1<0){a2.c6X(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.v(m.a-l*k,m.b-n*k)}}}}}A.d.br(w,new B.ehc(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.oa:O.ro,A.ad,p,p,p,21),p,p,p,new B.eh1(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mG,p,p,p,new B.eh2(q,d),p,p,p,p,"Share",p)],o),m=C.cq(new B.eh3(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.d0y[w]
l.push(new B.dB(v.b,q.x===v.a,new B.eh4(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.CF.gef(D.CF));t.C();){s=t.gR(t)
u.push(new B.dB(s,q.y===s,new B.eh5(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.az4[w]
t.push(new B.dB(r.b,q.z===r.a,new B.eh6(q,r),p,A.b8,p))}s=q.Q
return B.jL(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.x(C.a([new B.eV(l,"TOOL",p),new B.eV(u,"SCALE",p),new B.eV(t,"SOUND",p),B.hH(A.b8,A.k.ab(s,1)+"/s","Marbles",4,0.3,new B.eh7(q),s),new B.eV(C.a([new B.fj(D.bHZ,"Stairs",new B.eh8(q),A.b8,p),new B.fj(Al.NU,"Pinball",new B.eh9(q),A.c,p),new B.fj(A.my,"Random",new B.eha(q),A.c,p),new B.fj(D.yj,"Clear",new B.ehb(q),A.c7,p)],o),p,p)],o),A.m,p,A.e,A.N,0,A.p))}}
B.bhN.prototype={
a3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.N()
w.sar(D.bZ7.aw(0,new C.a8(0,0,a0,a1)))
a2.b_(new C.a8(0,0,a0,a1),w)
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
q.d=A.bT
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.jw
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bT
q.c=6
q.r=C.aq(i,A.c,r*0.7).gp(0)
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=i.j(0.25+h).gp(0)
p.z=A.jw
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.sar(new C.bU(P.pu,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).aw(0,C.bV(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.N()
u.c=5
u.d=A.bT
u.r=A.aA.gp(0)
a2.bE(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.L)(a0),++t){f=a0[t]
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.rA
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.sar(new C.bU(P.pu,0.5,A.x,d,0,C.a([A.c,p],v),d,d).aw(0,C.bV(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
au(d){return!0}}
B.adx.prototype={}
B.VO.prototype={
S(){var w=C.a([],x.gB)
return new B.aE1(new C.cs(null,x.A),w,A.cH,A.ax,$,A.bx,0,C.a([],x.X),null,null)}}
B.aE1.prototype={
gaZ7(){var w=this.w
return new C.v(w.a/2,w.b/2)},
ayF(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
azS(d){var w=D.CF.h(0,this.y),v=5-d,u=w.length
return w[A.o.E(v,u)]+12*A.o.dZ(v,u)},
Z(){this.a1()
this.ll()},
aQW(){var w,v,u,t,s=this.e
A.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.adx(w,A.k.E(t/v+u,1)))}},
lD(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.ax))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fX$
if(p.Q){r=p.z
s=p.azS(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.lk(r,s+12,q,0.55)}}}},
c6Y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaZ7()),e=f.gcn()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.ayF(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.E((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=C.a(s.slice(0),C.S(s))
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
m=h.ayF(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.ekI(h,n).$0()
h.c.eg()
return}}h.m(new B.ekJ(g,h,t))
if(h.Q)B.lk(h.z,h.azS(g.a)+12,700,0.5)
C.eY()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.oa:O.ro,A.ad,q,q,q,21),q,q,q,new B.ekQ(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mG,q,q,q,new B.ekR(r,d),q,q,q,q,"Share",q)],p),n=C.cq(new B.ekS(r)),m=r.x
m=B.hH(A.bu,""+A.k.V(m),"Tempo",180,40,new B.ekT(r),m)
w=C.a([],p)
for(v=J.aV(D.CF.gef(D.CF));v.C();){u=v.gR(v)
w.push(new B.dB(u,r.y===u,new B.ekU(r,u),q,A.bu,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.az4[t]
v.push(new B.dB(s.b,r.z===s.a,new B.ekV(r,s),q,A.bu,q))}return B.jL(A.bu,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.x(C.a([m,new B.eV(w,"SCALE",q),new B.eV(v,"SOUND",q),new B.eV(C.a([new B.fj(A.dY,"Demo",new B.ekW(r),A.bu,q),new B.fj(A.my,"Random",new B.ekX(r),A.c,q),new B.fj(D.yj,"Clear",new B.ekY(r),A.c7,q)],p),q,q)],p),A.m,q,A.e,A.N,0,A.p))}}
B.blg.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.N()
w.r=D.X4.gp(0)
a5.b_(new C.a8(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aC(0,new C.v(0,u))
r=C.N()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.sar(new C.a9(A.b5,A.b1,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).aw(0,new C.a8(o,m,o+2,m+u)))
a5.bE(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mS(1,A.k.E(s.$1(l)*23,360),0.55,1).iM()
o=v.$1(l)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.diI[A.o.E(A.o.E(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.jM(new C.eu(o,a4,a4,A.cP,a4,a4,a4,a4,a4,a4,new C.H(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.c6,new C.jv(1),a4,a4,a4,a4,A.c3,a4)
i.en()
o=i.b.c
m=J.fUE(v.$1(l))
h=i.b.a.c
i.a3(a5,new C.v(p+-o/2,n+(m-h.gbc(h)-2)))}w=C.N()
w.sar(D.ejg.aw(0,C.bV(t,16)))
a5.af(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.L)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mS(1,A.k.E(s.$1(a0)*23,360),0.55,1).iM()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fUE(v.$1(a0))
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jw
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.sar(new C.bU(P.pu,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).aw(0,C.bV(new C.v(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
au(d){return!0}}
B.aLW.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxf.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvV()}}
B.aLX.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxg.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvW()}}
B.tl.prototype={}
B.b9C.prototype={}
B.VM.prototype={
S(){var w=x.S
return new B.aE_(C.a([],x.aq),C.U(w,w),C.aX(w),D.eVK)}}
B.aE_.prototype={
Z(){this.a1()
B.zA("molecule_maker").bB(new B.ekc(this),x.P)},
aji(d){var w={}
w.a=0
this.f.bM(0,new B.ejZ(w,d))
return w.a},
gaZd(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)t.push(w[u].a)
return B.i4M(t,this.f,D.a3e[this.d])},
c7e(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eE()
w.dt(t*7+3)
t=v.y
v.m(new B.ejT(v,e,t.a,w,t.b))
B.w2("pop",u.length,90,0.35)},
awT(d){return this.m(new B.ejU(this))},
aZe(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c7k(d){this.m(new B.ejY(this,this.aZe(d)))},
coE(){var w=this.r
if(w==null)return
this.m(new B.ejX(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a3e[k.d],h=k.gaZd()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.wh.h(0,w[u].a).a-k.aji(u)
w=i.c
w=w.gdL(w)
t=w.dz(w,new B.ek6(),x.N).aG(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b0:A.hn
r=x.p
s=C.x(C.a([new C.D(A.fP,B.feQ(w,s,h&&k.d<12?new B.fj(A.j4,"Next",new B.ek7(k),A.b0,j):j),j),C.E(C.cq(new B.ek8(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dB(p+D.a3e[u].b,k.d===u,new B.ek9(k,u),j,A.hn,j))}q=C.a([],r)
for(p=D.wh.gdL(D.wh),p=p.gae(p);p.C();){o=p.gR(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dw:m.b
q.push(new B.dB(n+" \xb7 "+m.a,!1,new B.eka(k,o),j,l,j))}return B.jL(A.hn,A.hc,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.x(C.a([new B.eV(w,"GOAL",j),new B.eV(q,"ADD",j),new B.eV(C.a([new B.dB("Remove selected atom",!1,k.gcoD(),A.e9,A.c7,j),new B.dB("Clear all",!1,k.gc7f(k),A.k8,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.N,0,A.p))}}
B.biu.prototype={
a3(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.E(t*37,10)
r=A.o.E(t*53,10)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hn.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bM(0,new B.dql(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.wh.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bV(j,26)
if(q===t){$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jw
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
h.sar(new C.bU(A.Kd,0.5,A.x,a3,0,C.a([f,g,e],r),I.ax7,a3).aw(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aw:A.c
d=new C.jM(new C.eu(n,a3,a3,A.cP,a3,a3,a3,a3,a3,a3,new C.H(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.c6,new C.jv(1),a3,a3,a3,a3,A.c3,a3)
d.en()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a3(a4,new C.v(n.a-h/2,n.b-j.gbc(j)/2))
n=k===0
a0=n?A.bc:A.aF
j=m.b
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.u(k)
a1=new C.jM(new C.eu(n,a3,a3,A.cP,a3,a3,a3,a3,a3,a3,A.nF),A.a4,A.c6,new C.jv(1),a3,a3,a3,a3,A.c3,a3)
a1.en()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a3(a4,new C.v(n.a+(20-h/2),n.b+(-20-j.gbc(j)/2)))}if(n===0){d=C.fZ(a3,a3,a3,a3,D.f3v,A.a4,A.c6,a3,A.dO,A.c3)
d.en()
d.a3(a4,new C.v((w-d.b.c)/2,v/2))}},
au(d){return!0}}
B.UJ.prototype={
S(){var w=x.s
return new B.bjq(C.a([],w),C.a([],w))}}
B.bjq.prototype={
Z(){this.a1()
this.awa()
B.zA("dna_lab").bB(new B.dQr(this),x.P)},
gb3z(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a4l.h(0,w[u])
t.toString
s.push(t)}return A.d.h3(s)},
ga9c(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb3z(),w,v))}return u},
awa(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eE()
k.dt(l.e*31+l.d*7+C.C_(new C.T(Date.now(),0,!1)))
w=new B.dQg(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mJ(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a4l.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.h3(r))}if(!A.d.b4(t,new B.dQf()))break}l.f=v
A.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b1h()},
b1h(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.h2x(s.ga9c()[r])
v=J.dJ(D.CG.gef(D.CG),new B.dQh(w)).dJ(0)
u=new C.eE()
u.dt(r+s.e)
A.d.fp(v,u)
u=C.a([w],x.s)
A.d.v(u,C.d9(v,0,C.dG(3,"count",x.S),C.S(v).c))
t=new C.eE()
t.dt(s.e*3+r)
A.d.fp(u,t)
s.z=u},
aZc(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.doY.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a4l.h(0,w.f[v])
u.toString
break A}u=B.h2x(w.ga9c()[v])
break A}w.m(new B.dQe(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dQp(),e=new B.dQk(),d=h.d===2?h.gb3z():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mR,g,g,g),A.au],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bX.j(0.18):A.K
q=new C.aS(10,10)
p=new C.az(t.length===s?A.bX:A.bD,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga9c()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.ci(A.aP,A.e,A.N,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bn(q,q,q,q),g,g,A.n),g,g,g,D.brX,A.el,g,g,g))}v.push(C.bT(A.bA,u,A.bq,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bT(A.bA,u,A.bq,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cp(A.A,g,g,C.X(Ah.O0,j<t.length?A.aA:A.bD,g,g,g,14),g),g))
A.d.v(v,C.a([new C.D(A.Mr,C.bT(A.bA,u,A.bq,0,0),g)],a0))}v.push(A.am)
v.push(C.d(w,g,g,g,g,g,g,Q.mR,g,g,g))
v.push(A.au)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b0.j(0.25):A.dn
q=new C.aS(12,12)
o=j<t.length
p=new C.az(o?A.b0:A.aZ,1,A.q,-1)
if(o){o=D.CG.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.bU
u.push(C.p(g,new C.y(o,g,new C.H(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bn(q,q,q,q),g,g,A.n),g,g,g,g,A.ek,g,g,g))}v.push(C.bT(A.bA,u,A.bq,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bT(A.bA,u,A.bq,0,0))}v.push(A.aB)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.feQ(u,t>=(h.d===2?3:9)?A.b0:A.bX,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.feQ(u,A.bX,g))}v.push(A.R)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.U7,g,g,g))
v=C.cc(C.x(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bB,g,g,A.ag)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dB(D.d6m[j],h.d===j,new B.dQl(h,j),g,A.bX,g))
u=C.a([new B.eV(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fj(A.k8,"New strand",new B.dQm(h),A.b0,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.L)(t),++l){i=t[l]
q=D.CG.h(0,i)
q.toString
a0.push(new B.fj(D.a0d,q,new B.dQn(h,i),A.bX,g))}u.push(C.bT(A.bA,a0,A.bq,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.aw0:D.cQd
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aS(14,14)
a0.push(C.aC(g,C.p(A.A,new C.y(k,g,D.f3K,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bn(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dQo(h,k),g,g,g,g,g,g,!1,A.a6))}u.push(C.B(a0,A.m,g,A.qh,A.j,0,g,g))}return B.jL(A.bX,A.hc,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.x(u,A.m,g,A.e,A.N,0,A.p))}}
B.UZ.prototype={
S(){return new B.aD6(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aD6.prototype={
Z(){var w,v=this
v.a1()
w=v.qB(v.gc7g())
w.hG(0)
v.d!==$&&C.aP()
v.d=w
B.zA("ecosystem").bB(new B.dTg(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bvk()},
gaMQ(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c7h(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cA(v,0)}if(m.gaMQ()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.E(A.k.bl(w),5)===0)B.w_("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dT3())},
aaq(d){this.m(new B.dT2(this,d))
B.w2("pop",3,120,0.4)},
c7j(){return this.m(new B.dT4(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.x(C.a([new C.D(D.YT,B.feQ(r,t.gaMQ()?A.b0:A.c7,s),s),C.E(new C.D(D.bsu,C.bv(C.n(18),C.b3(s,s,s,new B.bdO(t.f,t.r,t.w,s),A.f6),A.aq),s),1),new C.D(A.eK,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.faQ,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hH(A.b0,A.k.ab(w,1)+"\xd7","Grass growth",2,0.2,new B.dT8(t),w)
v=t.y
v=B.hH(A.bN,A.k.ab(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dT9(t),v)
u=t.z
return B.jL(A.b0,A.hc,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.x(C.a([w,v,B.hH(A.ct,A.k.ab(u,1)+"\xd7","Fox hunting",2,0.3,new B.dTa(t),u),new B.eV(C.a([new B.dB("Drought",!1,new B.dTb(t),A.yE,A.aM,s),new B.dB("Disease",!1,new B.dTc(t),D.bHR,A.bu,s),new B.dB("+ Foxes",!1,new B.dTd(t),s,A.ct,s),new B.dB("+ Rabbits",!1,new B.dTe(t),s,A.bN,s),new B.dB("Reset",!1,t.gc7i(),A.k8,A.aO,s)],q),s,s)],q),A.m,s,A.e,A.N,0,A.p))}}
B.bdO.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.N()
w.sar(D.bX8.aw(0,new C.a8(0,0,d,a0)))
a1.b_(new C.a8(0,0,d,a0),w)
w=h.b
a0=C.aq(A.vf,A.bc,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.N()
t.r=a0.gp(0)
a1.b_(new C.a8(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eE()
r.dt(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.hl.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d5s(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a8(10,a0,e,u)
t=C.N()
t.r=D.bf0.gp(0)
a1.b_(new C.a8(0,f,d,f+g),t)
i=C.N()
i.r=A.dn.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d5u(h,j,a1)
g.$3(0,100,A.bc)
g.$3(1,120,A.bN)
g.$3(2,24,A.ct)
g=new B.d5t(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bc,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bN,102)
g.$3("Foxes "+A.k.V(w[2]),A.ct,200)},
au(d){return!0}}
B.aLm.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.aRQ.prototype={
gv0(){return A.d.cJ(this.a,0,new B.bG9())}}
B.Ub.prototype={
S(){var w=x.S
return new B.bj4(B.i1N(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.bj4.prototype={
gvY(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cJ(t,0,new B.dDR())},
Z(){var w,v=this
v.a1()
w=v.qB(new B.dE3(v))
w.hG(0)
v.x!==$&&C.aP()
v.x=w
B.zA("balance_lab").bB(new B.dE4(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.buY()},
czh(d){var w,v=this
v.m(new B.dDS(v,d))
B.w2("click",v.f[d],60,0.4)
if(v.gvY()===v.d[v.e].gv0()&&v.r.L(0,v.e)){B.w2("zap",10,260,0.5)
w=v.r
w=C.C(w,C.a3(w).k("co.E"))
B.w_("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.M(k,new B.dDX(),C.S(k).k("M<1,m>")).aG(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aG(k," + ")
if(o.gvY()===m[o.e].gv0())s="\u2696\ufe0f Balanced! "+m[o.e].gv0()+" = "+o.gvY()+". The torques are equal, so the seesaw stays level."
else s=o.gvY()>m[o.e].gv0()?"The right side is too strong ("+o.gvY()+" vs "+m[o.e].gv0()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].gv0()+" vs "+o.gvY()+"). Add weight to the right, or place it further from the middle."
k=o.gvY()===m[o.e].gv0()?A.b0:A.aM
k=B.bA9(s,k,o.gvY()===m[o.e].gv0()&&o.e<m.length-1?new B.fj(A.j4,"Next",new B.dDY(o),A.b0,n):n)
w=C.E(C.cq(new B.dDZ(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].gv0(),n,n,n,n,n,n,D.aRJ,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.x(C.a([new C.D(D.YT,k,n),w,new C.D(D.ai4,C.B(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvY(),n,n,n,n,n,n,D.aRJ,A.dN,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dB(w+p,o.e===v,new B.dE_(o,v),n,A.aM,n))}return B.jL(A.aM,A.hc,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.x(C.a([new B.eV(u,"LEVEL",n),new B.eV(C.a([new B.dB("Clear right side",!1,new B.dE0(o),A.k8,A.c7,n)],q),n,n)],q),A.m,n,A.e,A.N,0,A.p))}}
B.b9O.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
i.F(new C.b5(h,f))
w=f+70
i.F(new C.ap(h-30,w))
i.F(new C.ap(h+30,w))
i.F(new C.bE())
v=C.N()
v.r=A.ak.gp(0)
d.aR(i,v)
v=h-120
i=C.N()
i.r=A.aJ.gp(0)
d.b_(new C.a8(v,w,v+240,w+8),i)
i=d.a
J.by(i.save())
i.translate(h,f)
d.jc(0,j.b)
u=g*5.8
t=C.bx(new C.a8(-u,-9,u,9),A.hf)
w=C.N()
w.sar(D.bZP.aw(0,new C.a8(t.a,t.b,t.c,t.d)))
d.aE(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hP.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fsn(d,""+Math.abs(s),new C.v(w,22),A.bU,10)}q=new B.cFh(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aO)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bX)
if(w[s]===0){l=C.bx(C.ce(new C.v(m,-22),22,v),A.hf)
$.W()
k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.aZ.gp(0)
r=k.H()
i.drawRRect(C.er(l),r)
r.delete()
B.fsn(d,"+",new C.v(m,-22),A.bU,14)}}i.restore()
$.W()
i=C.N()
i.r=(j.e?A.b0:A.aL).gp(0)
d.af(new C.v(h,f),7,i)},
au(d){return!0},
gjs(){return this.e}}
B.Vc.prototype={
S(){return new B.bjC(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.bjC.prototype={
ga0E(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gadT(){var w=this.ga0E(),v=this.r,u=D.ayO[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.dd(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a1()
w=v.qB(new B.dXj(v))
w.hG(0)
v.x!==$&&C.aP()
v.x=w
B.zA("gear_lab").bB(new B.dXk(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bvs()},
c7l(d,e){var w,v=this
v.m(new B.dX9(v,d,e))
if(v.gadT()&&v.w.L(0,v.r)){B.w2("zap",8,240,0.45)
w=v.w
w=C.C(w,C.a3(w).k("co.E"))
B.w_("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga0E(),n=r.ga0E(),m=D.ayO[r.r].a
m=r.gadT()?"\u2705 Done! Ratio "+A.k.ab(r.ga0E(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gadT()?A.b0:A.ct
v=r.d
u=x.p
n=C.x(C.a([new C.D(D.YT,B.bA9(m,w,r.gadT()&&r.r<7?new B.fj(A.j4,"Next",new B.dXd(r),A.b0,q):q),q),C.E(C.b3(q,q,q,new B.bfh(v,r.f,q),A.f6),1),new C.D(D.ai4,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.ab(r.ga0E(),2)+"   \xb7   Output "+A.k.ab(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.ab(1/n,2),q,q,q,q,q,q,R.a88,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dB(m+s,r.r===t,new B.dXe(r,t),q,A.ct,q))}p=r.e
u=C.a([new B.eV(o,"GOAL",q),B.hH(A.aO,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dXf(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.avF("Gear "+s+" teeth",p,new B.dXg(r,t),8,40,D.dgh[t],""+p,q))}return B.jL(A.ct,A.hc,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.x(u,A.m,q,A.e,A.N,0,A.p))}}
B.bfh.prototype={
bQF(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ao,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.ekz,D.eq5,D.eGv,D.exc],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b5(m,l)
j.push(p)
m=i.f
if(m!=null)p.bD(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ap(m,l)
j.push(p)
m=i.f
if(m!=null)p.bD(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}}}i.F(new C.bE())
return i},
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.n)
for(w=this.b,v=0;v<4;++v)g.push(w[v]*2.2)
u=g[0]
t=u+g[1]+6
s=g[2]
r=g[3]
q=t+s+r+6
p=-u-6
o=q+r+6
n=A.d.ff(g,A.pw)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.by(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bZ(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.dds(this,d)
h.$6$back(new C.v(t,0),g[2],r,i,A.d5,!0)
h.$5(new C.v(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cS)
h.$5(new C.v(0,0),g[0],w[0],j,A.n1)
h.$5(new C.v(t,0),g[1],w[1],i,A.fl)
s.restore()
s=new B.ddt(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aO)
s.$3("2+3 \xb7 shared axle",t,A.ct)
s.$3("4 \xb7 output",q,A.b0)},
au(d){return!0}}
B.Ul.prototype={
S(){var w=$.aw()
return new B.bjh(new C.ar(new C.bb("Meet me at noon",A.b4,A.aN),w),new C.ar(new C.bb("LEMON",A.b4,A.aN),w),C.aX(x.S))}}
B.bjh.prototype={
Z(){this.a1()
this.aXP()
B.zA("cipher_lab").bB(new B.dI2(this),x.P)},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
aXP(){this.y=1+A.cH.av(25)
this.z=0},
ga9G(){var w=this
return B.a1I(B.a1I(D.Hf[w.x],w.y),-w.z)===D.Hf[w.x]},
gaxR(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1I(u,v.w)
break A}if(1===t){w=new C.M(C.a(B.a1I(u,0).split(""),x.s),new B.dHL(),x.dv).h3(0)
break A}w=B.ieB(u,v.e.a.a)
break A}return w},
aT5(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d5(d.toUpperCase()),v=x.e8,w=new C.bQ(w,w.gM(0),v.k("bQ<bX.E>")),v=v.k("bX.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.ff(q,A.x8))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aS(2,2)
v.push(new C.bB(1,A.bg,C.x(C.a([C.p(r,r,A.f,r,r,new C.o(A.aO,r,r,new C.bn(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.MK,r,r,r,r),new C.y(C.jK(65+s),r,D.fcF,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.m2,A.j,0,A.p),r))}return new C.a7(r,70,C.B(v,A.dz,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.U,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kJ,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dHU(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.f6S,!0,A.a4,o,A.an,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.R,C.aM(o,A.U,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kJ,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dHV(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iS,!0,A.a4,o,A.an,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fDA)
w.push(A.au)
v=A.aO.j(0.12)
u=C.n(14)
t=C.I(A.aO.j(0.4),A.q,1)
w.push(C.p(o,C.zS(p.gaxR().length===0?"\u2026":p.gaxR(),D.fbE,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bB,o,o,o))
w.push(A.ac)
w.push(B.bA9(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aO,o))
w.push(A.ac)
w.push(D.fjQ)
w.push(A.au)
w.push(p.aT5(p.gaxR()))
w.push(A.au)
w.push(D.fme)
s=C.cw(w,o,A.bB,o,o,A.ag,!1)}else{w=B.bA9("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1I(D.Hf[p.x],p.y),o,o,o,o,o,o,D.fce,o,o,o)
u=(p.ga9G()?A.b0:A.aO).j(0.14)
t=C.n(14)
r=C.I((p.ga9G()?A.b0:A.aO).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fx4,v,A.R,D.frs,C.p(o,C.d(B.a1I(B.a1I(D.Hf[p.x],p.y),-p.z),o,o,o,o,o,o,D.fdH,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bB,o,o,o),A.ac,p.aT5(B.a1I(D.Hf[p.x],p.y)),A.O],x.p)
if(p.ga9G())t.push(B.bA9("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b0,new B.fj(A.k8,"Next",new B.dHW(p),A.b0,o)))
s=C.cw(t,o,A.bB,o,o,A.ag,!1)}w=p.f
v=x.p
w=C.a([new B.eV(C.a([new B.dB("Make a secret",w===0,new B.dHX(p),A.jt,A.aO,o),new B.dB("Crack a code",w===1,new B.dHY(p),A.q7,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dB(n[q],p.r===q,new B.dHZ(p,q),o,A.aO,o))
v=C.a([new B.eV(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hH(A.aO,""+u,"Shift",25,1,new B.dI_(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hH(A.aM,""+v,"Shift back",25,0,new B.dI0(p),v))}return B.jL(A.aO,A.hc,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.x(w,A.m,o,A.e,A.N,0,A.p))}}
B.aL0.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.aLu.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.ed.prototype={}
B.ty.prototype={
apZ(d,e,f,g){var w=this
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
B.aai.prototype={}
B.abp.prototype={}
B.a4p.prototype={
bdr(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hi()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.aai(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c3a(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new B.bMA())},
ajL(d,e,f,g){var w="p"+this.c++,v=new B.ty(w,e,f,g)
v.apZ(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.br(this.b,new B.bML(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cHo(d,e,f,g,h){return A.d.b4(this.b,new B.bMG(e,f,g,h))},
aku(d,e,f,g){var w
if(d===f||this.cHo(0,d,e,f,g))return null
w=new B.abp(d,e,f,g)
this.b.push(w)
return w},
aAq(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zH(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
an5(d){return this.LG(d)&&!d.x&&d.cx>this.zH(d)},
b6_(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
LG(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c7m(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.ze.h(0,v)
if(w!=null)return w.a
return 100},
v8(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c3a(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.S(v).k("a_<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a_(v,new B.bMM(a2),t).cJ(0,0,new B.bMN(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.U(x.N,u)
n=new B.bMP(o)
m=C.a([],x.t)
l=new B.bMO(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.U(u,u)
f=new B.bMR(g,l,n)
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
a2.b5W(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zH(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b5W(e,d,w,!0)
a2.bNv(a4)},
b5W(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.U(x.N,b3),b5=new B.bMC(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bMB(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bME(C.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.L)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=C.c2(b7,0,!1,b3)
v=x.W
k=C.U(v,b3)
j=C.U(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)C.b8(C.dK(g,null))
e=C.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=C.c2(b7,0,!1,b3)
a0=C.c2(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.L)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b6_(t)*(1+t.CW))
a4=b2.aAq(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c7m(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bQE(e,a0,b8)
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
bQE(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bNv(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aAq(o)/a1.b6_(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zH(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bFy(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bdr(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tN(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tN(o,"The "+$.qj().h(0,n).b+" got "+A.k.ab(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tN(o,"More than 1.5 amps went through the "+$.qj().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tN(o,"The regulator had to turn "+A.k.ab(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ab(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tN(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.ze.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qj().h(0,n).b
l=f.b
l=l===A.k.jd(l)?""+A.k.V(l):C.u(l)
g=f.c
g=g===A.k.jd(g)?""+A.k.V(g):C.u(g)
a1.tN(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ab(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eTr.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tN(o,"The bulb got "+A.k.ab(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tN(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tN(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tN(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tN(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tN(o,"The capacitor was charged to "+A.k.ab(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bFy(d){return A.d.b4(this.a,new B.bMz(d))},
tN(d,e){var w
d.x=!0
d.ay=e
this.bdr(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bi4(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aGA(d){var w=d.b
return D.aO9.t(0,w)||D.ze.ai(0,w)||w==="buck"||w==="regulator"},
beS(d){var w,v=!0
if(!this.LG(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.ze.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
UF(d,e){var w=this.b
return new C.a_(w,new B.bMT(d,e),C.S(w).k("a_<1>")).gM(0)},
Cu(d){var w,v
if(d.x)return!1
w=d.b
if(D.ze.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bcY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qj().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aGA(d)||i.Cu(d))return null
w=i.UF(d,0)
v=i.UF(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.S(u).k("a_<1>")
s=C.C(new C.a_(u,i.gcPS(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jd(r)?""+A.k.V(r):C.u(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ab(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.ze.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aGF("battery"),o=J.aV(t.a),t=new C.f2(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.UF(n,0)+i.UF(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aGF("switch"),o=J.aV(t.a),t=new C.f2(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qj().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zH(k))return"The "+$.qj().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ab(k.cx,2)+" amps, but it can only give about "+A.k.ab(i.zH(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b4(u,new B.bMH(i,d))
h=q.b
h=h===A.k.jd(h)?""+A.k.V(h):C.u(h)
u=A.k.ab(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ab(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ab(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aGF(d){var w=this.a
return new C.a_(w,new B.bMK(d),C.S(w).k("a_<1>"))},
aGd(d){return this.aGF(d).b4(0,new B.bMJ(0.35))},
pO(d,e){return A.d.b4(this.a,new B.bMI(e))}}
B.aiF.prototype={
a3(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.N()
w.r=F.AS.gp(0)
c0.b_(new C.a8(0,0,b8,b9),w)
v=C.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.m3.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.m3.ai(0,h.b)?(h.ch-1)*38:0
b4.cEm(c0,new C.v(k*b6+j*(42+i),l*b7),new C.v(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hAk(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.N()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bT
c0.bE(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.ae4.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zf
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mV.az(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.ch3(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zH(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.W().r
a3=C.a([],k)
a4=new C.aO(a2,A.ao,b5,b5,a3)
a5=f-13
a3.push(new C.b5(g,a5))
a6=g+13
a7=f+10
a3.push(new C.ap(a6,a7))
a8=g-13
a3.push(new C.ap(a8,a7))
a3.push(new C.bE())
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.av.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbK().a.snapshot()
w.drawPath((a4.e=new C.cC(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aO(a2,A.ao,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bE())
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbK().a.snapshot()
w.drawPath((a2.e=new C.cC(e)).a,s)
s.delete()
a9=new C.jM(new C.eu("!",b5,b5,A.cP,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.jv(1),b5,b5,b5,b5,A.c3,b5)
a9.en()
a9.a3(c0,new C.v(g+-3,f+-8))}if(!a0.x)g=(D.aO9.t(0,h)||D.ze.ai(0,h)||h==="buck"||h==="regulator")&&!r.Cu(a0)&&r.UF(a0,0)+r.UF(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aF.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.jM(new C.eu("!",b5,b5,A.cP,b5,b5,b5,b5,b5,b5,new C.H(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.jv(1),b5,b5,b5,b5,A.c3,b5)
a9.en()
a9.a3(c0,new C.v(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.m3.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.AS.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.beS(a0)?A.c7:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.beS(a0)){a9=new C.jM(new C.eu("+",b5,b5,A.cP,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c7,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.jv(1),b5,b5,b5,b5,A.c3,b5)
a9.en()
a9.a3(c0,new C.v(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.XL,F.XS,b2)
j.toString
i=b1.f
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bT
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.Rx
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b4(q,new B.bHn())){b3=A.d.cJ(q,0,new B.bHo())
$.W()
b7=C.N()
b7.r=D.ba3.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.b_(new C.a8(0,0,b8,b9),b7)
a9=C.fZ(b5,b5,b5,b5,D.f3o,A.a4,A.c6,b5,A.dO,A.c3)
a9.uE(b6-24)
a9.a3(c0,new C.v(12,10))}},
qn(d,e,f,g,h){var w=null,v=C.fZ(w,w,w,w,C.d0(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.c6,w,A.dO,A.c3)
v.en()
v.a3(d,f)},
cEm(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
d.F(new C.b5(a1.a,a1.b))
w=B.hsK(a1,a2,a3)
d.F(new C.cW(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.ae4,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aO,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bn
u=C.N()
u.b=A.ae
u.c=a4?7:5
u.d=A.bT
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aR(d,u)
u=C.N()
u.b=A.ae
u.c=2.4
u.d=A.bT
u.r=(a4?A.c:o).gp(0)
a0.aR(d,u)
if(q){n=new C.Sy(new C.vD(C.xb(d),!1,C.a([],x.f5))).gI(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jB()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jB()
h=t[u].b
h===$&&C.c()
h=A.k.E(j*22+i*m*l,h.a.length())
v.jB()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jB()
g=t[u].b
g===$&&C.c()
f=A.k.E(h+i,g.a.length())
v.jB()
i=t[u].MP(f).a
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
P_(d,e,f,g){var w,v,u,t
$.W()
w=C.N()
v=g?A.b1:A.a3
u=g?A.b5:A.a8
t=C.aq(e,A.w,0.3)
t.toString
w.sar(new C.a9(v,u,A.x,C.a([e,f,e,t],x.O),A.Hh,null).aw(0,d))
return w},
aw_(d,e,f){return this.P_(d,e,f,!0)},
c2M(d,e){return this.P_(d,A.bn,A.iE,e)},
ahj(d,e){var w,v,u
$.W()
w=C.N()
w.sar(D.aMF.aw(0,C.bV(e,4.2)))
d.af(e,4.2,w)
w=e.ad(0,D.e9D)
v=e.ad(0,D.e9M)
u=C.N()
u.r=A.ee.gp(0)
u.c=1.2
d.bE(w,v,u)},
ch3(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.N()
c0.sar(D.bWO.aw(0,D.eQa))
c0.c=3.4
c0.d=A.bT
w=C.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.mJ
c1.hZ(D.eQ2,w)
if(c3){w=C.bx(D.eQ9,A.kg)
v=C.N()
v.r=A.c.j(0.14).gp(0)
c1.aE(w,v)}u=B.h8N(c2)
c1.bE(new C.v(-u,0),D.eaV,c0)
c1.bE(D.e8L,new C.v(u,0),c0)
t=c2.x
w=c2.b
s=D.m3.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bZ(0,c2.ch)}switch(w){case"battery":b3.bCl(c1,c2)
break
case"solar":r=C.bx(D.eQ5,A.ix)
c1.aE(r,b3.P_(new C.a8(r.a,r.b,r.c,r.d),A.dw,A.bN,!1))
b9=C.N()
w=C.aq(D.bdr,A.d_,0.25+0.55*c2.f)
w.toString
v=C.aq(D.blr,A.mo,0.3+0.4*c2.f)
v.toString
b9.sar(new C.a9(A.az,A.aC,A.x,C.a([w,v],x.O),b4,b4).aw(0,D.a6O))
c1.b_(D.a6O,b9)
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
o.delete()}b9=new C.aO($.W().r,A.ao,b4,b4,C.a([],x.v))
b9.F(new C.b5(-34,18))
b9.F(new C.ap(-6+40*c2.f,-18))
b9.F(new C.ap(4+40*c2.f,-18))
b9.F(new C.ap(-24,18))
b9.F(new C.bE())
w=C.N()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aR(b9,w)
w=c2.f
b9=C.N()
b9.r=A.dR.j(0.9).gp(0)
c1.af(D.e8R,4+4*w,b9)
break
case"crank":n=C.bx(D.ePR,A.hg)
c1.aE(n,b3.aw_(new C.a8(n.a,n.b,n.c,n.d),A.br,A.bK))
b9=C.N()
b9.sar(D.aMG.aw(0,C.bV(A.J,12)))
c1.af(A.J,12,b9)
m=new C.v(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.N()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bT
c1.bE(A.J,m,b9)
b9=C.N()
b9.sar(D.ejz.aw(0,C.bV(m,7)))
c1.af(m,7,b9)
b3.ahj(c1,D.eaO)
b3.ahj(c1,D.e8E)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aO(b9,A.ao,b4,b4,C.a([],w))
v.F(new C.b5(-3,24))
v.F(new C.ap(3,24))
v.F(new C.ap(1.5,0))
v.F(new C.ap(-1.5,0))
v.F(new C.bE())
l=C.N()
l.r=A.bN.gp(0)
c1.aR(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.by(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aO(b9,A.ao,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cW(6,-14,2,-30))
l.push(new C.cW(-2,-14,0,-2))
l.push(new C.bE())
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbK().a.snapshot()
v.drawPath((j.e=new C.cC(l)).a,o)
o.delete()
v.restore()}b9=C.N()
b9.sar(D.ejf.aw(0,C.bV(A.J,4.5)))
c1.af(A.J,4.5,b9)
break
case"switch":n=C.bx(D.ePY,A.qs)
b9=C.N()
b9.sar(D.ap9.aw(0,new C.a8(n.a,n.b,n.c,n.d)))
c1.aE(n,b9)
b3.ahj(c1,D.Sq)
b3.ahj(c1,D.aHv)
i=c2.w?D.aHv:D.e8o
b9=C.N()
b9.r=A.aw.gp(0)
b9.c=6
b9.d=A.bT
c1.bE(D.Sq,i,b9)
b9=C.N()
b9.r=(c2.w?A.b0:A.bN).gp(0)
b9.c=4
b9.d=A.bT
c1.bE(D.Sq,i,b9)
b9=C.ll(D.Sq,i,0.85)
b9.toString
w=C.N()
w.r=A.av.gp(0)
c1.af(b9,5,w)
break
case"fuse":h=C.bx(D.aNe,D.aMK)
b9=C.N()
b9.r=A.f9.j(0.25).gp(0)
c1.aE(h,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.aA.gp(0)
c1.aE(h,b9)
if(!t){b9=C.N()
b9.c=1.6
b9.r=C.aq(A.bN,A.ct,c2.fx).gp(0)
c1.bE(D.aHM,D.aHu,b9)}else{b9=C.N()
b9.c=1.6
b9.r=A.bU.gp(0)
c1.bE(D.aHM,D.ebb,b9)
b9=C.N()
b9.c=1.6
b9.r=A.bU.gp(0)
c1.bE(D.e9h,D.aHu,b9)
b9=C.N()
b9.r=A.dB.gp(0)
c1.af(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.ce(new C.v(F.l6[g]*22,0),20,9)
w=C.bx(f,A.hI)
o=b3.P_(f,A.d5,A.oH,!0).H()
b9.drawRRect(C.er(w),o)
o.delete()}break
case"pot":b9=C.N()
b9.sar(D.ejr.aw(0,C.bV(A.J,21)))
c1.af(A.J,21,b9)
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
b9.sar(D.ejd.aw(0,C.bV(A.J,13)))
c1.af(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.N()
j.r=A.aM.gp(0)
j.c=3
j.d=A.bT
c1.bE(new C.v(b9*3,w*3),new C.v(v*12,l*12),j)
break
case"resistor":a1=C.bx(D.aNe,D.aMK)
b9=C.N()
b9.sar(D.c_6.aw(0,new C.a8(a1.a,a1.b,a1.c,a1.d)))
c1.aE(a1,b9)
b9=x.O
a2=C.F([47,C.a([C.b0(b5),C.b0(b6),A.w],b9),100,C.a([C.b0(b7),A.w,C.b0(b7)],b9),220,C.a([C.b0(b8),C.b0(b8),C.b0(b7)],b9),470,C.a([C.b0(b5),C.b0(b6),C.b0(b7)],b9),1000,C.a([C.b0(b7),A.w,C.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(C.c_(new C.a8(w,-9,w+4.5,9)),o)
o.delete()}b9=C.N()
b9.r=A.aM.gp(0)
c1.b_(D.eQj,b9)
b9=c2.r
b3.qn(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.eat,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.N()
v.r=A.dR.j(0.55*w).gp(0)
v.z=A.zf
c1.af(D.wo,34,v)}n=C.ce(D.e7U,12,18)
c1.aE(C.bx(n,A.hI),b3.P_(n,A.bn,A.e3,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dr.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.N()
if(t)v=A.Wx
else{v=C.aq(A.e3,A.i3,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.EX
else{l=C.aq(A.dw,A.dR,c2.fx)
l.toString}w.sar(new C.bU(A.t8,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aw(0,C.bV(A.rJ,17)))
c1.af(A.rJ,17,w)
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.af(A.rJ,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ao,b4,b4,C.a([],w))
l.F(new C.b5(-9,-12))
l.F(new C.cW(-12,-4,-9,0))
v=C.N()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aR(l,v)
v=C.N()
v.r=A.cX.gp(0)
v.c=1.4
c1.bE(D.eb7,D.eb9,v)
v=C.N()
v.r=A.cX.gp(0)
v.c=1.4
c1.bE(D.e9a,D.e9d,v)
w=C.a([],w)
a4=new C.aO(b9,A.ao,b4,b4,w)
a4.F(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bD(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.W()
b9=C.N()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aW
else{w=C.aq(A.dw,D.beg,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aR(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.N()
v.r=A.av.j(0.6*w).gp(0)
v.z=D.drt
c1.af(A.rJ,30,v)}w=C.N()
w.r=A.e3.gp(0)
w.c=2.4
c1.bE(D.ebd,D.ebc,w)
w=C.N()
w.r=A.e3.gp(0)
w.c=2.4
c1.bE(D.e9j,D.e9i,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ao,b4,b4,C.a([],w))
a6.F(new C.b5(-12,8))
a6.F(new C.ap(-12,-6))
a6.F(new C.cW(0,-26,12,-6))
a6.F(new C.ap(12,8))
a6.F(new C.bE())
v=C.N()
if(t)l=A.j3
else{l=C.aq(A.es,D.aeR,c2.fx)
l.toString}if(t)j=A.kw
else{j=C.aq(A.ku,A.av,c2.fx)
j.toString}v.sar(new C.a9(A.az,A.aC,A.x,C.a([l,j],x.O),b4,b4).aw(0,D.ePn))
c1.aR(a6,v)
v=C.N()
v.b=A.ae
v.c=1.2
v.r=A.jm.gp(0)
c1.aR(a6,v)
v=C.N()
v.r=A.eI.gp(0)
c1.b_(D.ePt,v)
w=new C.aO(b9,A.ao,b4,b4,C.a([],w))
w.F(new C.b5(-7,-4))
w.F(new C.cW(-6,-12,0,-15))
b9=C.N()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aR(w,b9)
break
case"motor":a7=new C.a8(-28,-14,20,14)
c1.aE(C.bx(a7,A.hf),b3.aw_(a7,A.ak,A.aL))
b9=C.N()
b9.r=A.cs.gp(0)
c1.b_(D.ePa,b9)
b9=C.N()
b9.r=A.cr.gp(0)
c1.b_(D.ePb,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.ce(D.e8b,15,7)
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.ct.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c_(w),o)
o.delete()
b9.restore()}w=C.N()
w.r=A.aw.gp(0)
c1.af(A.J,3,w)
b9.restore()
b3.qn(c1,"M",D.eaN,A.aw,14)
break
case"buzzer":a8=C.ce(A.J,42,42)
b9=C.N()
b9.sar(D.ejv.aw(0,a8))
c1.hZ(a8,b9)
b9=C.N()
b9.r=A.w.gp(0)
c1.af(A.J,6,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.aZ.gp(0)
c1.af(A.J,6,b9)
b3.qn(c1,"+",D.eaG,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=C.bV(A.J,24+k*5+l)
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bX.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c_(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bx(D.ePU,A.hf)
w=C.N()
w.sar(D.bXM.aw(0,new C.a8(n.a,n.b,n.c,n.d)))
c1.aE(n,w)
w=C.a([],x.v)
a9=new C.aO(b9.r,A.ao,b4,b4,w)
a9.F(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cW(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bD(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=C.N()
w.b=A.ae
w.c=10
w.r=D.beU.j(0.5*b9).gp(0)
w.z=A.jw
c1.aR(a9,w)}$.W()
b9=C.N()
b9.b=A.ae
b9.c=3.2
b9.d=A.bT
b9.r=C.aq(A.lN,A3.XA,c2.fx).gp(0)
c1.aR(a9,b9)
break
case"capacitor":a7=new C.a8(-16,-22,16,18)
b9=C.bx(a7,A.hf)
w=C.N()
w.sar(D.bWG.aw(0,a7))
c1.aE(b9,w)
w=C.N()
w.r=A.bN.gp(0)
c1.b_(D.ePz,w)
for(p=0;p<4;++p){b0=new C.jM(new C.eu("\u2212",b4,b4,A.cP,b4,b4,b4,b4,b4,b4,new C.H(!0,A.aw,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.c6,new C.jv(1),b4,b4,b4,b4,A.c3,b4)
b0.en()
b0.a3(c1,new C.v(-14,-18+p*9))}b1=new C.a8(-16,-24,16,-17)
c1.aE(C.bx(b1,A.hI),b3.c2M(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.N()
v.r=A.b0.j(0.5).gp(0)
c1.b_(new C.a8(-3,w,11,w+b9),v)
b3.qn(c1,"1F",D.wo,A.c,11)
break
case"radio":a1=C.bx(D.a6O,A.hg)
b9=C.N()
b9.sar(D.c_m.aw(0,new C.a8(a1.a,a1.b,a1.c,a1.d)))
c1.aE(a1,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.oH.j(0.6).gp(0)
c1.aE(a1,b9)
b9=C.bx(D.ePV,A.ix)
w=C.N()
w.r=A.dH.gp(0)
c1.aE(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lN.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.N()
w.r=(c2.fx>0?A.fL:A.nU).gp(0)
c1.b_(D.ePd,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=C.N()
v.r=A.bz.gp(0)
v.c=1.6
c1.bE(new C.v(w,-13),new C.v(w,-3),v)}w=C.N()
w.sar(D.aMG.aw(0,C.bV(D.a5O,6)))
c1.af(D.a5O,6,w)
w=C.N()
w.r=A.oH.gp(0)
c1.af(D.e8K,4,w)
w=C.N()
w.r=A.e3.gp(0)
w.c=1.8
c1.bE(D.e8I,D.aHz,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bV(D.aHz,4+k*5+A.k.E(w.d*8,5))
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nZ.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c_(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bx(D.eQ4,A.hf)
v=C.N()
v.r=L.mn.gp(0)
c1.aE(w,v)
b2=C.bx(D.eQ1,A.hI)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.er(b2),$.oP(),!0)
b9.translate(-33,-21)
E.h4W(c1,D.eWa,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.N()
b9.r=A.b0.gp(0)
c1.af(D.e8W,1.6,b9)}else{w=C.N()
w.r=D.vr.gp(0)
c1.aE(b2,w)
b9=new C.aO(b9.r,A.ao,b4,b4,C.a([],x.v))
b9.F(new C.b5(-33,-21))
b9.F(new C.ap(-10,-21))
b9.F(new C.ap(-33,0))
b9.F(new C.bE())
w=C.N()
w.r=A.c.j(0.05).gp(0)
c1.aR(b9,w)}b9=C.N()
b9.r=A.br.gp(0)
c1.b_(D.ePs,b9)
break}B.ica(c1,c2,b3.b.d,b3.gc7n())
if(t)b3.qn(c1,"\u2716",D.ebg,A.av,14)
if(s)c1.a.restore()},
bCl(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a8(-28,-13,28,13)
d.aE(C.bx(w,A.qs),m.aw_(w,A.dw,A.j_))
v=new C.a8(-22,-13,22,13)
$.W()
u=C.N()
u.sar(D.ap2.aw(0,v))
d.b_(v,u)
u=C.N()
u.r=A.dS.gp(0)
d.b_(D.ePI,u)
t=new C.a8(28,-5,34,5)
d.aE(C.bx(t,A.he),m.P_(t,A.dw,A.iE,!0))
m.qn(d,"+",D.e8t,A.aM,11)
m.qn(d,"\u2212",D.eaP,A.ad,11)
m.qn(d,C.u(l===A.k.jd(l)?A.k.V(l):l)+"V",D.eaz,A.aM,13)
if(l===1.5){u=C.N()
u.r=A.bD.gp(0)
d.b_(D.ePH,u)
u=e.as
s=C.N()
s.r=C.aq(A.av,A.b0,u).gp(0)
d.b_(new C.a8(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qn(d,"FLAT",D.eas,A.c7,9)}if(l>2){u=C.N()
u.r=A.aZ.gp(0)
u.c=1
d.bE(D.e8_,D.aHe,u)
m.qn(d,l>3?"3 cells":"2 cells",D.eay,A.aA,8)}}else if(l<=9){r=new C.a8(-22,-17,22,17)
u=C.bx(r,A.qs)
$.W()
s=C.N()
s.sar(D.bZU.aw(0,r))
d.aE(u,s)
s=C.N()
s.r=A.cS.gp(0)
d.b_(D.ePJ,s)
for(u=d.a,q=0;q<2;++q){p=F.ays[q]
s=p<0?5:3.6
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.sar(D.aMF.aw(0,C.bV(new C.v(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qn(d,"9V",D.eau,A.c,16)}else{r=new C.a8(-34,-16,34,16)
u=C.bx(r,A.ix)
$.W()
s=C.N()
s.sar(D.ap2.aw(0,r))
d.aE(u,s)
s=C.N()
s.r=A.bH.gp(0)
d.b_(D.eQ3,s)
for(u=d.a,q=0;q<2;++q){s=C.bx(C.ce(new C.v(F.a3B[q],-20),8,10),A.he)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cr.gp(0)
n=o.H()
u.drawRRect(C.er(s),n)
n.delete()}m.qn(d,"+",D.e8A,A.av,10)
m.qn(d,"12V",D.eav,A.aw,15)}},
au(d){return!0}}
B.mC.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=C.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.ty(o,r,q,p)
n.apZ(o,r,q,p)
k.push(n)
J.iw(s[4],new B.clY(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.aku(m,u[1],l,u[3])}}}
B.aiD.prototype={
S(){var w=x.N
return new B.aiE(A.J,A.ax,C.U(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aiE.prototype={
adW(d){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new B.bH1(w,d))
w.as=C.cM(A.lp,new B.bH2(w))},
q(){var w=this.as
if(w!=null)w.a7(0)
w=this.ch
if(w!=null)w.a7(0)
this.bsa()},
a_L(d,e){return this.cf_(d,e)},
b0e(d){return this.a_L(d,!1)},
cf_(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_L=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.r8:A.xI
p=d.b
w=3
return C.b(E.h5e(s,r,p,d.ax<3.2,q,$.qj().h(0,p).b),$async$a_L)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_L,v)},
crH(d){var w=this,v=new C.T(Date.now(),0,!1),u=w.at.ca(0,d.a,new B.bH3()),t=J.cF(u)
t.L(u,v)
t.br(u,new B.bH4(v))
if(t.gM(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a7(0)
w.a15(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=C.cM(A.kx,new B.bH5(w,u,d))}},
a_r(d){return this.cdn(d)},
cdn(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$a_r=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.idl(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_r)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$a_r,v)},
a15(d){return this.cph(d)},
cph(d){var w=0,v=C.j(x.H),u=this,t
var $async$a15=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bR(F.kT,null,new B.bH_(u,d),t,!0,!0,!1,A.jS,!1,!1,x.H),$async$a15)
case 2:return C.h(null,v)}})
return C.i($async$a15,v)},
Z(){this.a1()
this.bf1()
this.ll()},
bf1(){this.a.c.e=new B.bHk(this)},
lD(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v8(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=D.m3.h(0,s.b)
if((r==null?null:r.b)!==D.zF)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.L(0,s.a)
q.a_L(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dH(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dH(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cH.aj()<0.5
else u=!1
if(u)E.dH(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dH(900+A.cH.av(800),"",90,0,0.1,o)
if(A.cH.aj()<0.35)E.dH(300+A.cH.av(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cH.aj()<0.4
else u=!1
if(u)E.dH(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dH(330+A.o.E(110*A.k.bl(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dH((A.k.bl(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dH(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dH(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cH.aj()<0.5
else u=!1
if(u)E.dH(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)E.dH(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)E.dH(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new B.bHl())},
b7g(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.m3.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
b0V(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.S(w).k("dx<1>"),w=new C.dx(w,v),w=new C.bQ(w,w.gM(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.m3.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cEn(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.m3.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.m3.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hsK(new C.v(k,n),new C.v(i,l),p)
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
adU(){this.a.toString
this.m(new B.bGv())},
boU(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d0l[v]
if(!A.d.b4(p.a.c.a,new B.bHm(u,w))){o=new C.v(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.Im:o
s=s?K.Im:o
q=t.ajL(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dH(1200,"",50,0,0.3,"tri")
p.adU()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.QL[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.am(u+1,2)):w
r=t?A.d.fQ(w,A.o.am(w.length+1,2)):A.U
q=n.a.d
if(q!=null){w=C.a3(q).k("cu<1>")
w=C.C(new C.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.b0K(s,!0))
n.a.toString
if(t)w.push(n.b0K(r,!0))
w.push(C.E(C.cq(new B.bHj(n,q,m)),1))
return C.x(w,A.m,null,A.e,A.j,0,A.p)},
b0K(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.L)(d),++v){u=d[v]
t=$.qj()
s=t.h(0,u).d.j(0.14)
r=new C.aS(14,14)
q=new C.az(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aC(p,C.p(p,C.x(C.a([new C.y(t.h(0,u).c,p,A.zU,p,p,p,p,p,p,p,p,p),new C.y(t.h(0,u).b,p,A.nC,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b9,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bn(r,r,r,r),p,p,A.n),p,p,p,F.tP,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGw(this,u),p,p,p,p,p,p,!1,A.a6))}return C.p(p,C.cw(m,p,A.h8,p,p,A.aP,!1),A.f,p,p,new C.o(F.AQ,p,new C.bO(A.Y,A.Y,new C.az(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aZh(d){var w=null,v=C.n(18)
return C.p(w,d,A.f,w,w,new C.o(F.acK,w,C.I(A.bD,A.q,1),v,w,w,A.n),w,w,w,w,F.ai5,w,w,w)},
ch4(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qj().h(0,o),m=d.dy,l=d.fr,k=new B.bGP(q,n),j=C.d(n.c,p,p,p,p,p,p,A.Jq,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bNV,p,p,p,new B.bGC(q,d),p,p,p,p,"Remove part",A.ce),C.aH(p,p,p,p,A.GL,p,p,p,new B.bGD(q),p,p,p,p,p,A.ce)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.DH,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.fc3,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ab(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ab(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ab(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.au,w,A.am,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.c7:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bcY(d)
if(v!=null){l=(d.x?A.av:A.aF).j(0.14)
j=C.n(10)
i=C.I((d.x?A.av:A.aF).j(0.5),A.q,1)
m.push(new C.D(A.i6,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fiu,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cp,p,p,p),p))}if(B.h3_(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dB("CH "+t,d.at===u,new B.bGE(q,d,u),p,h,p))}l=C.bT(A.bA,l,A.bq,4,6)
l=C.a([A.am,l,A.au,C.d(q.a.c.Cu(d)?"Showing: "+F.Qj[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hh,p,p,p)],g)
if(q.a.c.Cu(d))l.push(new B.fj(A.Gk,"Open big screen",new B.bGH(q,d),h,p))
A.d.v(m,l)}if(D.m3.ai(0,o)&&!B.h3_(o)){l=C.a([A.am,C.d(q.a.c.Cu(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hh,p,p,p)],g)
if(q.a.c.Cu(d))l.push(new B.fj(A.O1,"Open the "+$.qj().h(0,o).b,new B.bGI(q,d),h,p))
A.d.v(m,l)}if(D.m3.ai(0,o))A.d.v(m,C.a([A.am,new B.fj(A.BZ,"Make it bigger (or tap it 4 times)",new B.bGJ(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ab(d.db,1)
if(q.a.c.Cu(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.am,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ab(i,1)+" V",p,p,p,p,p,p,D.fcT,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.dhr[s]
j=r===A.k.jd(r)?A.k.V(r):r
l.push(new B.dB(C.u(j)+" V out",d.e===r,new B.bGK(q,d,r),p,h,p))}i.push(new C.D(A.lS,C.bT(A.bA,l,A.bq,0,6),p))}if(o==="regulator")i.push(D.fAJ)
A.d.v(m,i)}if(q.a.c.LG(d)&&!d.x){l=A.k.ab(d.cx,2)
j=A.k.ab(q.a.c.zH(d),2)
i=q.a.c
w=i.an5(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.an5(d)?A.c7:A.et,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.n(4)
w=A.k.D(d.cx/q.a.c.zH(d),0,1)
i=q.a.c.an5(d)?A.av:A.b0
m.push(new C.D(A.i6,C.x(C.a([l,A.cV,C.bv(j,C.lB(A.bD,p,p,5,p,w,new C.m_(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.D(A.i6,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f6P,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d72[s]
j=r===1.5?"1.5 V (rechargeable)":C.u(r)+" V"
l.push(new B.dB(j,d.e===r,new B.bGL(q,d,r),p,h,p))}m.push(C.bT(A.bA,l,A.bq,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cYL[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dB(j,d.r===r,new B.bGM(q,d,r),p,h,p))}m.push(C.bT(A.bA,l,A.bq,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bGN(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bGO(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bGF(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bGG(d)))
if(o==="crank")m.push(D.fwc)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hh,p,p,p))
return q.aZh(new C.cS(D.b02,C.cc(C.x(m,A.F,p,A.e,A.N,0,A.p),A.r,p,A.y,p,p,p,p,A.ag),p))}}
B.baL.prototype={}
B.V_.prototype={
S(){return new B.aD7(B.h8M(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aD7.prototype={
Z(){this.a1()
$.aW.bY$.push(this)
this.adV()},
adV(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$adV=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fyH(),$async$adV)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.icy(t.d,r)
if(s!=null){t.m(new B.dTo(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$adV,v)},
EU(){var w,v=this
if(!v.as)return
w=B.i35(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bDI(w)},
j8(d){if(d!==A.fw)this.EU()},
q(){$.aW.hP(this)
this.EU()
this.a2()},
c7p(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.S(v).k("a_<1>")
t=new C.a_(v,new B.dTx(q),u).gM(0)
s=new C.a_(v,new B.dTy(),u).gM(0)
r=new C.a_(v,w.gcTm(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dTz(q,t,s,r))}if(A.o.E(q.w,45)===0)q.EU()
if(A.o.E(q.w,10)===0){w=q.f
$.ahR()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahR()[q.f].c.$1(q.d)){w.L(0,q.f)
B.BN("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dTA())
q.EU()
w=q.c
w.toString
w=C.Xn(w)
if(w!=null)w.U(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.ahR()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mq,p,p,p,p,p,p,p,p,p,p))}},
agA(){var w=0,v=C.j(x.H),u=this,t
var $async$agA=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dTn(u),t,null,!0,!0,x.H),$async$agA)
case 2:return C.h(null,v)}})
return C.i($async$agA,v)},
aZg(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.n(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aC(w,C.hx(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a6)},
aZf(d,e,f,g){return this.aZg(d,e,f,g,null)},
aqE(d,e,f,g){var w=null,v=f.j(0.1),u=C.n(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aC(w,C.p(w,C.B(C.a([C.X(d,f,w,w,w,15),A.eg,new C.dq(1,A.co,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b9,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a6),1)},
aeT(){var w=0,v=C.j(x.H),u=this,t
var $async$aeT=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a5(t,!1).cm(C.ea(new B.dTj(u),!1,null,x.H)),$async$aeT)
case 2:t=u.e.gbk()
if(t!=null)t.bf1()
if(u.c!=null)u.m(new B.dTk())
u.EU()
return C.h(null,v)}})
return C.i($async$aeT,v)},
bFr(){var w,v,u,t,s=null,r=this.f
$.ahR()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bc:A.av
u=C.n(9)
t=C.I(F.AQ,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wE,s,s,s),s,s,s),A.f,s,D.b09,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eS,s,s,s)},
ahG(){var w=0,v=C.j(x.H),u=this,t
var $async$ahG=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bR(F.kT,null,new B.dTw(u),t,!0,!0,!0,A.jS,!1,!1,x.H),$async$ahG)
case 2:return C.h(null,v)}})
return C.i($async$ahG,v)},
c7q(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aC(r,C.p(r,D.bP8,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a5),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dTC(d),r,r,r,r,r,r,!1,A.a6),o=C.n(11)
o=C.p(r,D.b5P,A.f,r,r,new C.o(A.bm,r,C.I(A.aO.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.x(C.a([C.B(C.a([p,A.ab,o,A.ab,C.E(C.x(C.a([D.fyM,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f1:A.fX,r,r,r,r,r,r,r,r,11.5,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.axe(s.gcd4(),r),A.rS,s.aZf(A.yi,"Construction Lab: real 3D wiring, plumbing and a house",A.ct,new B.dTD(s,d)),s.aZg(A.ls,"Challenges",A.aM,s.gcuj(),s.bFr()),s.aZf(A.NV,"How to play",A.aO,new B.dTE(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,C.B(C.a([s.aqE(A.o8,"Circuits",A.bu,s.gcn6()),A.bp,s.aqE(A.oW,"Repair",A.aM,new B.dTF(s)),A.bp,s.aqE(D.yj,"Clear",A.c7,new B.dTG(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.N,0,A.p),A.f,r,r,new C.o(F.AQ,r,new C.bO(A.Y,A.Y,new C.az(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.byn,r,r,r)},
B(d){var w=this,v=null
$.arN="tech"
return C.c6(v,A.c_,C.bm(!0,C.x(C.a([w.c7q(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h7C(w.d,w.e,w.gc7o(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.axe.prototype={
S(){return new B.b8X(null,null)}}
B.b8X.prototype={
gawU(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.T,null,1,null,v)
w.cM(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gawU().q()
this.btq()},
B(d){var w=null,v=this.a.c
return C.aC(w,C.hx(new C.a7(42,42,C.c7(this.gawU(),new B.cCP(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a6)}}
B.b8W.prototype={
a3(d,e){var w,v,u,t=null,s=e.ed(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.N()
w.r=A.b6.j(0.25+0.15*o).gp(0)
w.z=G.mJ
d.af(s,r+2+o*2,w)
w=C.N()
w.sar(D.ejq.aw(0,C.bV(s,r)))
d.af(s,r,w)
v=C.N()
v.b=A.ae
v.c=2.2
v.sar(new C.fY(A.A,0,6.283185307179586,A.x,D.cQc,t,new C.mq(p)).aw(0,C.bV(s,r)))
d.af(s,r,v)
p=new B.cCO(d)
p.$3(s.ad(0,A.rJ),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e9u),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.ebk),2.6,0.5+0.5*Math.cos(q))
u=C.fZ(t,t,t,t,D.f3u,A.a4,A.c6,t,A.dO,A.c3)
u.en()
u.a3(d,s.ad(0,new C.v(-u.b.c/2,5)))},
au(d){return d.b!==this.b}}
B.axx.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.axy.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bs9()}}
B.aJx.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx3.prototype={}
B.fP.prototype={}
B.Jl.prototype={
a5(){return"ScreenStyle."+this.b}}
B.m9.prototype={}
B.UH.prototype={
S(){return new B.bjo(null,null)}}
B.bjo.prototype={
ga99(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.o4,null,1,null,v)
w.cs(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga99().q()
this.bvg()},
gRM(){var w=this.ga99().y
w=w==null?null:A.o.am(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.m3.h(0,this.a.c)
if(v==null)v=D.aNv
return C.c6(w,U.LM,C.bm(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zG?this.bHD(v):this.cjR(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mF,w,w,w,new B.dPk(d),w,w,w,C.nE(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.f55,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c7r(d){var w
A:{if(D.IK===d){w=0.46153846153846156
break A}if(D.uO===d){w=0.45
break A}if(D.wu===d){w=0.9259259259259258
break A}if(D.T1===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cjR(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.IK
A:{if(D.IK===p){w=44
break A}if(D.uO===p){w=30
break A}if(D.wu===p){w=22
break A}if(D.T1===p){w=26
break A}w=14
break A}v=C.c7(this.ga99(),new B.dPj(this,w,d,o),q)
if(p===D.a6X)v=new C.Dp(D.bz_,v,q)
p=this.c7r(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.n(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fL(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.n(w-3),q,q,A.n),q,q,q,q,A2.FS,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a9(A.az,A.aC,A.x,r,q,q),A.n),q,q,q,D.bsH,new C.R(u,u,u,u),q,q,q),q)},
b6s(d){var w,v,u,t=null,s=new C.T(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bl(this.gRM()*0.4),0,100),q=d.b===D.IK,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aX(A.o.u(C.dk(s)),2,"0")+":"+A.a.aX(A.o.u(C.h4(s)),2,"0"),t,t,t,t,t,t,A.rZ,t,t,t),A.b7],x.p)
for(w=0;w<4;++w){v=new C.aS(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bn(v,v,v,v),t,t,A.n),t,4+w*2,t,D.byI,t,t,t,3))}n.push(A.dc)
n.push(D.frF)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.n(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.Bj(A.A,C.p(t,t,A.f,t,t,new C.o(A.b0,t,t,C.n(2),t,t,A.n),t,t,t,A2.FS,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qv)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.fiP,t,t,t))
return new C.D(new C.R(p,12,o,2),C.B(n,A.m,t,A.e,A.j,0,t,t),t)},
auP(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.n(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.dcI,new C.a9(A.az,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.au,C.d(d.a,v,1,A.a2,v,v,v,D.f9C,v,v,v)],w))
return C.aC(v,C.x(t,A.m,v,A.e,A.N,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dPf(this,d),v,v,v,v,v,v,!1,A.a6)},
bYS(d,e){return this.auP(d,e,!0)},
bYA(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.T1||n===D.wu,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.ks,0.5)
l.toString
l=C.a([k,A.dy,l],x.O)
k=p.b6s(d)
w=m?190:138
v=C.n(24)
u=C.I(A.aZ,A.q,1)
w=C.aC(o,C.p(o,C.bv(C.n(23),C.b3(o,o,o,new B.aeD(0,p.gRM(),o),A.f6),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hS,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dPd(p),o,o,o,o,o,o,!1,A.a6)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.ka[s]
t.push(new C.cp(A.A,o,o,p.bYS(r,m?58:54),o))}k=C.a([k,A.am,w,A.ac,C.E(C.m4(0.92,t,v,8,12,A7.vF,o,!1),1)],u)
if(n!==D.a6X){n=A.c.j(0.16)
w=C.n(28)
u=C.a([],u)
for(v=C.d9(F.ka,0,C.dG(4,"count",x.S),x.gD),t=v.$ti,v=new C.bQ(v,v.gM(0),t.k("bQ<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.auP(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.B(u,A.m,o,A.qh,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.btx,T.ajx,o,o,o))}return C.p(o,C.x(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a9(A.az,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bAZ(d,e){var w=null
return C.p(w,C.x(C.a([this.b6s(d),C.E(C.b3(w,w,w,new B.aeD(e,this.gRM(),w),A.f6),1),C.aC(w,C.p(w,C.av(C.d(F.ka[e].a,w,w,w,w,w,w,A.Jg,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dP8(this),w,w,w,w,w,w,!1,A.a6)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bHD(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.n(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fL(1.5384615384615383,C.p(t,C.c7(this.ga99(),new B.dPb(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a9(A.az,A.aC,A.x,w,t,t),A.n),t,t,t,D.byi,new C.R(8,8,8,s),t,t,t),t)}}
B.bv7.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.N()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.ks,0.4)
t.toString
w.sar(new C.a9(A.az,A.aC,A.x,C.a([u,A.dy,t],x.O),null,null).aw(0,new C.a8(0,0,n,m)))
d.b_(new C.a8(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.dry
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
au(d){return!0}}
B.aeD.prototype={
a3(d,e){return E.Rq(d,e,this.b,this.c)},
au(d){return!0}}
B.aLj.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.aWt.prototype={}
B.Vv.prototype={
S(){return new B.bjY(C.U(x.S,x.N),A.ax,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjY.prototype={
gvw(){var w=this.f
return w===$?this.f=B.h37(0):w},
Z(){this.a1()
this.ll()
B.zA("laser_maze").bB(new B.ecn(this),x.P)},
lD(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cA(w,v)}this.m(new B.eco())},
ae_(d){var w=this
w.m(new B.ecd(w,d))
B.w_("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c7H(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gdB()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bl((d.a-t)/v)
q=A.k.bl((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvw().b.t(0,p)||p===o.gvw().e||o.gvw().d.ai(0,p))return
o.m(new B.ece(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cq(new B.ech(t,B.hsD(t.gvw(),t.r))),q=x.p,p=C.a([new B.dB("Clear mirrors",!1,new B.eci(t),A.k8,A.aM,s),new B.dB("Skip",!1,new B.ecj(t),D.bHS,A.aO,s)],q)
if(t.d>0)p.push(new B.dB("Back",!1,new B.eck(t),D.bHT,A.aO,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dB(""+u,v===t.d,new B.ecl(t,v),s,A.av,s))}return B.jL(A.av,A.hc,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.x(C.a([new B.eV(p,s,s),new B.eV(w,"LEVEL",s)],q),A.m,s,A.e,A.N,0,A.p))}}
B.bgY.prototype={
a3(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gdB()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.diy(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bx(new C.a8(a5,a6,a8,a4),A.kg)
v=$.W()
u=C.N()
u.r=L.mn.gp(0)
a9.aE(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.dn.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.dn.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ec(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bx(C.ce(p,u,u),A.hg)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.sar(D.c_s.aw(0,C.ce(p,a3,a3)))
q=o.H()
w.drawRRect(C.er(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ao,a2,a2,u)
n.F(new C.b5(a7.$1(A.d.gI(a8)).a,a7.$1(A.d.gI(a8)).b))
for(a8=C.d9(a8,1,a2,C.S(a8).c),v=a8.$ti,a8=new C.bQ(a8,a8.gM(0),v.k("bQ<ak.E>")),v=v.k("ak.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bD(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.W()
a8=C.N()
a8.b=A.ae
a8.c=14
a8.e=A.fH
a8.r=A.av.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lz
a9.aR(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=4
a8.e=A.fH
a8.r=D.aeR.gp(0)
a9.aR(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=1.6
a8.e=A.fH
a8.r=A.c.gp(0)
a9.aR(n,a8)}for(a8=a4.c,a8=C.ec(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.CI
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.br).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.aA
i=new C.jM(new C.eu("\u2605",a2,a2,A.cP,a2,a2,a2,a2,a2,a2,new C.H(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.c6,new C.jv(1),a2,a2,a2,a2,A.c3,a2)
i.en()
j=i.b
h=j.c
j=j.a.c
i.a3(a9,new C.v(m-h/2,k-j.gbc(j)/2))}g=new B.diB(a7,a3,a9)
a1.c.bM(0,new B.diz(g))
a4.d.bM(0,new B.diA(g))
f=a7.$1(a4.e)
a4=C.bx(C.ce(f,o,a3*0.8),A.hg)
a8=C.N()
a8.r=A.av.gp(0)
a9.aE(a4,a8)
v=f.ad(0,new C.v(v,0))
a8=C.N()
a8.r=A.c.gp(0)
a9.af(v,5,a8)
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
B.Vx.prototype={
S(){var w=x.n
return new B.aDM(A.cH,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDM.prototype={
Z(){this.a1()
this.ll()
B.zA("light_mixer").bB(new B.ecG(this),x.P)},
lD(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aZm()
w.m(new B.ecH())},
awY(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.av(5)/4)
u.e=t
if(A.d.d7(t,new B.ecr()))u.e[w.av(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aZm(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hnV(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.w2(v,A.o.am(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.w_("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gczk(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cSf[A.o.E(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cq(new B.ecA(v,B.hnV(v.e,t))),r=t[0]
r=B.hH(A.av,""+A.k.V(r*100)+"%","Red",1,0,new B.ecB(v),r)
w=t[1]
w=B.hH(A.bc,""+A.k.V(w*100)+"%","Green",1,0,new B.ecC(v),w)
t=t[2]
return B.jL(A.b8,A.hc,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.x(C.a([r,w,B.hH(A.d_,""+A.k.V(t*100)+"%","Blue",1,0,new B.ecD(v),t),new C.bI(A.a8,u,u,new B.fj(A.hq,"Lock it in",new B.ecE(v),A.b0,u),u)],x.p),A.m,u,A.e,A.N,0,A.p))}}
B.bhc.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bx(new C.a8(0,0,n,m),A.qr)
$.W()
w=C.N()
w.r=A.w.gp(0)
d.aE(l,w)
w=d.a
J.by(w.save())
w.clipRRect(C.er(C.bx(new C.a8(0,0,n,m),A.qr)),$.oP(),!0)
v=e.gdB()*0.3
u=e.ed(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.v(0,l)),u.ad(0,new C.v(l,t)),u.ad(0,new C.v(v*0.55,t))]
r=[A.EE,I.adS,I.aei]
d.lj(new C.a8(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nK
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bx(new C.a8(0,0,n,m),A.qr)
m=C.N()
m.b=A.ae
m.c=2
m.r=A.aZ.gp(0)
d.aE(n,m)},
au(d){return!0}}
B.aLL.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx8.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvK()}}
B.aLM.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx9.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvL()}}
B.btX.prototype={}
B.a8h.prototype={
B(d){var w=null
return C.c6(C.eF(w,w,w,!0,!0,D.af3,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.ao1,w,w,w,new B.cgB(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fHo,w,w,w,1,w,!0),D.af3,C.cw(C.a([D.ecB,C.cq(new B.cgC())],x.p),w,D.bux,w,w,A.ag,!1),w,!1,!1,w,w)}}
B.Wo.prototype={
S(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aED(w,new C.ar(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aED.prototype={
Z(){this.a1()
this.ll()},
b4q(d){var w=this.d.length
return A.o.E(A.k.bl(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lD(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b4q(v.f)
if(w!==v.x){v.x=w
B.lk("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eLW(v))
B.BN("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c8E(){if(this.d.length<2)return
this.m(new B.eLS(this))},
aZI(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eLR(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc8D(),p=s.d,o=C.E(C.aC(r,C.b3(r,r,r,new B.bvj(p,s.f,r),A.f6),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a6),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.x(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.fgZ,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.axF[A.o.E(v,8)].j(0.9)
t=new C.aS(20,20)
o.push(C.aC(r,C.p(r,new C.y(p[v],r,D.fge,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bn(t,t,t,t),r,r,A.n),r,r,r,A.fD,A.h9,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eLU(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a6))}p=A.c.j(0.07)
return B.jL(A.aM,A.hc,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.x(C.a([new B.eV(o,r,r),C.B(C.a([C.E(C.aM(r,A.U,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.bs(r,new C.b4(4,C.n(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kK,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eLV(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dg,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new B.fj(A.hE,"Add",s.gc8B(s),A.c,r),A.bp,new B.fj(A.my,"Spin",q,A.b0,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.N,0,A.p))}}
B.bvj.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.v(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.N()
w.r=D.bbt.gp(0)
a1.af(d,f,w)
w=C.N()
w.b=A.ae
w.c=3
w.r=A.aM.gp(0)
a1.af(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bV(d,a0)
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.axF[A.o.E(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c_(o),n,s,!0,m])
m.delete()
o=C.bV(d,a0)
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
k=new C.jM(new C.eu(o,i,i,A.cP,i,i,i,i,i,i,D.f4h),A.a4,A.c6,new C.jv(1),i,i,i,i,A.c3,i)
k.en()
o=k.b
n=o.c
o=o.a.c
k.a3(a1,new C.v(a0-n-16,-o.gbc(o)/2))
f.restore()}f=C.N()
f.r=D.aeI.gp(0)
a1.af(d,20,f)
f=C.N()
f.b=A.ae
f.c=3
f.r=A.aM.gp(0)
a1.af(d,20,f)
j=new C.aO(h.r,A.ao,i,i,C.a([],x.v))
e-=a0
j.F(new C.b5(g,e+26))
e-=10
j.F(new C.ap(g-14,e))
j.F(new C.ap(g+14,e))
j.F(new C.bE())
e=C.N()
e.r=A.c.gp(0)
a1.aR(j,e)
e=C.N()
e.b=A.ae
e.c=2
e.r=A.aW.gp(0)
a1.aR(j,e)},
au(d){return!0}}
B.V6.prototype={
S(){return new B.bjx($,A.bx,0,C.a([],x.X),null,null)}}
B.bjx.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.BN("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a50(900,new B.dVC())}w.m(new B.dVD())},
aZK(d){return this.m(new B.dVx(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aX(A.o.u(A.k.am(m,60)),2,"0")
v=A.a.aX(A.o.u(A.o.E(A.k.dj(m),60)),2,"0")
m=C.b3(n,n,n,new B.bq7(l,A.c7,n),A.aOP)
u=C.d(w+":"+v,n,n,n,n,n,n,D.f8z,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.x(C.a([u,C.d(t,n,n,n,n,n,n,D.f7D,n,n,n),A.au,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.wA,n,n,n)],s),A.m,n,A.e,A.N,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d9M[r]
u.push(new B.dB(""+q+" min",o.d===q,new B.dVz(o,q),n,A.c7,n))}m=o.f
p=m?A1.yr:A.iM
m=m?"Pause":"Start"
return B.jL(A.c7,A.hc,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.x(C.a([new B.eV(u,n,n),new B.eV(C.a([new B.fj(p,m,new B.dVA(o),A.b0,n),new B.fj(A.k8,"Reset",new B.dVB(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.N,0,A.p))}}
B.bq7.prototype={
a3(d,e){var w,v,u,t,s=e.ed(A.J),r=e.a/2-14
$.W()
w=C.N()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.af(s,r,w)
w=C.bV(s,r)
v=C.N()
v.b=A.ae
v.c=16
v.d=A.bT
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.sar(new C.fY(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).aw(0,C.bV(s,r)))
d.fa(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
au(d){return d.b!==this.b}}
B.Uh.prototype={
S(){return new B.bj9($,A.bx,0,C.a([],x.X),null,null)}}
B.bj9.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Rq.h(0,p.d)
w.toString
v=A.d.ff(w,new B.dGt())
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
B.lk("flute",D.c04[t]+5,1400,0.35)}p.m(new B.dGu())},
gc8H(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.Kb("Press Start",0.5)
w=D.Rq.h(0,this.d)
w.toString
v=A.d.ff(w,new B.dGo())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.Kb("Breathe in",0.5+0.5*A.dC.az(0,p))
case 1:return new C.Kb("Hold",1)
case 2:return new C.Kb("Breathe out",1-0.5*A.dC.az(0,p))
default:return new C.Kb("Hold",0.5)}}}return new C.Kb("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc8H(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hn.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hn.j(0.35),A.J,40)],v):q,q,A.a5),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.DJ,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kK,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.Rq.gef(D.Rq));w.C();){v=w.gR(w)
o.push(new B.dB(v,r.d===v,new B.dGr(r,v),q,A.hn,q))}w=r.e
v=w?A.GA:A.iM
w=w?"Stop":"Start"
o.push(new B.fj(v,w,new B.dGs(r),A.b0,q))
return B.jL(A.hn,A.hc,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eV(o,q,q))}}
B.aI1.prototype={}
B.UY.prototype={
S(){return new B.bjr(new C.cs(null,x.A),C.a([],x.au),A.aw,A.c)}}
B.bjr.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mG,s,s,s,new B.dST(t,d),s,s,s,s,"Share",s)],r),p=C.bv(C.n(18),new C.ey(C.aC(s,C.b3(s,s,s,new B.blt(t.e,t.x,s),A.f6),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dSU(t),new B.dSV(t),s,s,s,s,s,s,s,s,s,new B.dSW(t),s,s,s,s,!1,A.a6),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cRD[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.Fh(v,u,new B.dSX(t,v),!1,s))}u=t.r
return B.jL(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.D(A.bR,p,s),"DRAW PAD",C.x(C.a([new B.eV(o,s,s),B.hH(A.bE,""+A.k.V(u),"Brush",30,2,new B.dSY(t),u),new B.eV(C.a([new B.dB("Eraser",t.w,new B.dSZ(t),A.Gc,A.bE,s),new B.fj(A.rn,"Undo",new B.dT_(t),A.c,s),new B.fj(A.e9,"Clear",new B.dT0(t),A.c,s),new B.fj(A.NR,"Paper",new B.dT1(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.N,0,A.p))}}
B.blt.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.N()
w.r=this.c.gp(0)
d.b_(new C.a8(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bT
p.e=A.fH
p.b=A.ae
m=r.c
if(m.length===1){q=A.d.gI(m)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aO(q.r,A.ao,null,null,o)
o.push(new C.b5(A.d.gI(m).a,A.d.gI(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.cW(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bD(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ap(A.d.gal(m).a,A.d.gal(m).b)
o.push(q)
o=k.f
if(o!=null)q.bD(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new C.cC(k.gbK().a.snapshot()):q).a,l)
l.delete()}}},
au(d){return!0}}
B.VK.prototype={
S(){var w=x.S
return new B.aDW(C.aX(w),C.aX(w))}}
B.aDW.prototype={
Z(){this.a1()
this.as9()},
as9(){var w,v,u=this,t=x.N,s=C.bp(D.deH,!0,t)
A.d.CN(s)
w=x.S
v=C.S(s).c
t=C.C(C.d9(s,0,C.dG(u.d,"count",w),v),t)
A.d.v(t,C.d9(s,0,C.dG(u.d,"count",w),v))
A.d.CN(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c8C(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lk("bell",12+A.o.E(d,9),150,0.35)
s.m(new B.ei2(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bM(A.ne,new B.ei3(s,v,u),t)
else{s.x=!0
C.bM(Ab.Fu,new B.ei4(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.U0,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.am(p,2)+" / "+o
o=x.p
p=C.x(C.a([new C.D(A.xS,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hH,A.j,0,q,q),q),C.E(C.im(!0,q,q,A.y,new C.hQ(v,8,8,1,q),new B.ei8(r),r.e.length,A.bl,q,A.ag,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cT5[t]
o.push(new B.dB(s.b,r.d===s.a,new B.ei9(r,s),q,A.aO,q))}o.push(new B.fj(D.bHQ,"New game",new B.eia(r),A.b0,q))
return B.jL(A.aO,A.hc,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eV(o,q,q))}}
B.VX.prototype={
S(){return new B.aEh(C.a([],x.t))}}
B.aEh.prototype={
c8G(d){A.d.a8(this.d)
this.w=!0
this.aZJ()},
aZJ(){this.d.push(A.cH.av(4))
this.e=0
this.ZR()},
ZR(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZR=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.esW(t))
s=x.H
w=3
return C.b(C.bM(A.lR,null,s),$async$ZR)
case 3:r=t.d,q=C.bp(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aSQ(n)
w=7
return C.b(C.bM(new C.ba(1000*Math.max(280,600-r.length*18)),null,s),$async$ZR)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.esX(t))
case 1:return C.h(u,v)}})
return C.i($async$ZR,v)},
aSQ(d){this.m(new B.esU(this,d))
B.lk("marimba",D.apE[d]+5,450,0.55)
C.bM(A.Fs,new B.esV(this),x.H)},
c8I(d){var w,v,u=this
if(!u.w||u.r)return
u.aSQ(d)
w=u.d
v=u.e
if(w[v]!==d){E.dH(90,"",600,0,0.5,"saw")
u.m(new B.esY(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.esZ(u))
C.bM(A.im,new B.et_(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.U7,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.fhl,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.awz[v]
u=u.j(q.f===v?1:0.35)
t=new C.aS(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.awz[v].j(0.8),A.J,30)],w):p
r=new C.az(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aC(p,C.df(p,p,p,p,A.bd,new C.o(u,p,new C.bO(r,r,r,r),new C.bn(t,t,t,t),s,p,A.n),A.jo,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.et0(q,v),p,p,p,p,p,p,!1,A.a6))}o=C.av(new C.D(A.a9,C.x(C.a([o,A.am,n,A.d7,new C.fL(1,C.m4(1,l,2,12,12,p,A.dT,!1),p)],m),A.m,p,A.b9,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jL(A.bH,A.hc,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eV(C.a([new B.fj(A.iM,n,q.gc8F(q),A.b0,p)],m),p,p))}}
B.Wh.prototype={
S(){return new B.bkF(new C.ar(A.as,$.aw()))}}
B.bkF.prototype={
avH(d){return C.oM(A.k.ab(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eHd(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d6(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eHm()
l=C.aM(m,A.U,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.bs(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.n(16),Aa.x2),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.n(16),D.aZA),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kJ,"Bill amount",!0,!0,!1,m,m,m,m,D.feU,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.dW,m,m,m,1,m,m,!1,"\u2022",m,new B.eHi(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aQi,!0,A.a4,m,A.an,m,m,m,m)
k=A.b0.j(0.1)
s=C.n(20)
r=C.I(A.b0.j(0.35),A.q,1)
q=x.p
s=C.cw(C.a([l,A.by,C.p(m,C.x(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.avH(w)),t.$2("Total","$"+n.avH(v)),X.Mc,t.$3$big("Each of "+n.f+" pays","$"+n.avH(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bP,m,m,m)],q),m,A.fE,m,m,A.ag,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cDT[p]
r.push(new B.dB(""+o+"%",A.k.V(n.e)===o,new B.eHj(n,o),m,A.b0,m))}l=n.f
return B.jL(A.b0,A.hc,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.x(C.a([new B.eV(r,"TIP",m),B.hH(A.aO,""+l,"People",20,1,new B.eHk(n),l),new B.eV(C.a([new B.dB("Round up",n.r,new B.eHl(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.N,0,A.p))}}
B.VI.prototype={
S(){var w=C.a([3,5],x.t)
return new B.bk8(w,A.cH,$,A.bx,0,C.a([],x.X),null,null)}}
B.bk8.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bl(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.av(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.av(6)+1)
u.f=t
B.a8g("snare",0.5)}u.m(new B.egI())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hi()
u.w=t
u.x=t?0:3.141592653589793
B.lk("bell",24,400,0.5)}u.m(new B.egJ())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bd9(v,o.r>0,n))}u=C.aC(n,C.av(C.bT(A.fK,m,A.bq,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.egB(o),n,n,n,n,n,n,!1,A.a6)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d5,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aC(n,C.av(C.ef(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fe8,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.eju,A.a5),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.egC(o),n,n,n,n,n,n,!1,A.a6)}else{m=o.as
u=C.aC(n,C.av(C.x(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.f3M,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kK,n,n,n)],x.p),A.m,n,A.e,A.N,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.egD(o),n,n,n,n,n,n,!1,A.a6)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d7e[r]
v.push(new B.dB(q.b,o.d===q.a,new B.egE(o,q),q.c,A.bu,n))}v=C.a([new B.eV(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hH(A.bu,""+s,"Dice",4,1,new B.egF(o),s))}if(o.d==="num"){s=o.z
s=B.hH(A.bu,""+s,"From",100,1,new B.egG(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hH(A.bu,""+p,"To",1000,2,new B.egH(o),p)],m))}return B.jL(A.bu,A.hc,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.x(v,A.m,n,A.e,A.N,0,A.p))}}
B.bd9.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cH.aj()-0.5)*0.6
else w=0
v=C.n(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cC,14)],x.V)
t=C.a([],x.p)
for(s=D.dqf.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.abK,p,18,p,p,p,p,p,18),p))
return C.eJ(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
B.aL6.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx_.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv3()}}
B.aLp.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx4.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvn()}}
B.aLU.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxe.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvT()}}
B.aMn.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxq.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bwm()}}
B.b6J.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aEw.h(0,t)
$.arN=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,S.nr,u,u,u,new B.ctw(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.NV,s,u,u,u,22),u,u,u,new B.ctx(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.D(D.bxA,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(F.AQ,u,new C.bO(new C.az(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.Fw,u,u,1/0))
return C.c6(u,A.c_,C.bm(!0,C.x(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dB.prototype={
B(d){var w,v,u,t=this,s=null,r=C.n(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aS,s,s,s,16),A.eg],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.D(F.tP,C.aC(s,C.df(s,C.B(v,A.m,s,A.e,A.N,0,s,s),s,s,A.bd,new C.o(p,s,o,r,s,s,A.n),A.eJ,s,s,s,A.h9,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.cts(t),s,s,s,s,s,s,!1,A.a6),s)}}
B.eV.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.cc(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP),1))
return new C.D(A.cv,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.avF.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.avd(d).cK0(q,A.bD,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.aa4(C.l1(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.B(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.ab(w,1):u,s,s,s,s,s,s,A.Jg,A.dN,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fj.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.D(F.tP,C.aF(!1,A.a1,!0,C.n(12),C.aL(!1,C.n(12),!0,new C.D(Ai.ahS,C.B(C.a([C.X(w.c,u,v,v,v,17),A.eg,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.ctr(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ah),v)}}
B.Fh.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.f25:u
w=t?A.c:A.aZ
w=C.I(w,A.q,t?2.5:1)
return C.aC(u,C.df(u,u,u,u,A.bd,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a5),A.hB,u,r,D.ahE,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.cty(v),u,u,u,u,u,u,!1,A.a6)}}
B.mF.prototype={
a50(d,e){var w=C.dj()
w.seL(C.cM(C.dE(0,0,0,d,0,0),new B.ctt(this,w,e)))
this.fu$.push(w.bj())},
ll(){var w=this,v=w.qB(new B.ctv(w))
v.hG(0)
w.ft$!==$&&C.aP()
w.ft$=v}}
B.ab4.prototype={
byx(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.L)(w),++q)for(p=A.d.gae(w[q]);p.C();){o=p.gR(0)
n=J.a4(o)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.L)(w),++q){for(v=A.d.gae(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gR(0)
n=J.a4(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aP()
g.ax=m
w=g.bBM()
g.ay!==$&&C.aP()
g.ay=w},
bBM(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
FA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.ab5.prototype={
cFV(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(r.FA(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.v5.prototype={}
B.P8.prototype={}
B.y5.prototype={}
B.P7.prototype={
fo(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.apy[w.av(7)]
w=w.hi()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
B.lk(u,v+w-12,2200,0.1)}}
B.Vd.prototype={
S(){var w=$.aw()
return new B.aDi(new C.cs(null,x.A),new C.ar(A.as,w),new B.P7(A.cH),D.d9e,A.ax,D.a3n,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDi.prototype={
Z(){var w,v=this
v.a1()
v.ll()
v.a.toString
w=$.hgW
if(w==null)w=$.hgW=B.cw7()
w.bB(new B.dYk(v),x.P)},
q(){var w=this.e
w.T$=$.aw()
w.P$=0
this.bvv()},
ctu(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n)q.push(new B.dXN(p[n]).$0())
w.push(q)}this.w=w},
gW2(){var w=this.fy
return w.A(0,A.ax)?100:Math.min(w.a,w.b)*0.43},
atk(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
axr(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.atk(d.x,d.w,105/Math.max(w,3))
C.eY()
B.lk("bell",(A.d.cH(D.a2Z,d.c)+1)*3+12,900,0.45)
E.dH(300,"",280,1.4,0.15,"tri")},
lD(d){var w,v,u,t,s,r,q,p=this
p.f.fo(0,d,p.db)
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
c9m(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.ax))return null
w=n.fy
v=n.gW2()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gW2()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cFV((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c9l(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dXL(w))
return}w.m(new B.dXM(w,v,A.a.i(d).toLowerCase()))},
bOP(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new B.dXJ(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bKw,n,n,n,o.gbOO(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mG,n,n,n,new B.dY5(o,d),n,n,n,n,"Share",n)],l),j=C.cq(new B.dY6(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.U,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.bs(n,new C.b4(4,C.n(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.DG,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bSG,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc9k(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iS,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
w.push(new B.dB(s.a,!1,new B.dY7(o,s),A.mA,A.aO,n))}i.push(new C.D(A.i6,new C.a7(n,38,C.cw(w,n,n,n,n,A.aP,!1),n),n))}i.push(A.am)
w=C.a([new B.dB("Whole Earth",!1,new B.dYb(o),A.hr,A.aO,n)],l)
for(v=D.aEv.gdL(D.aEv),v=v.gae(v);v.C();){u=v.gR(v)
w.push(new B.dB(u.a,!1,new B.dYc(o,u),n,A.aO,n))}w.push(new B.dB("Random",!1,new B.dYd(o),A.my,A.aO,n))
i.push(new B.eV(w,"GO TO",n))
w=o.z
i.push(B.hH(A.aO,A.k.ab(w,1)+"x","Zoom",16,0.8,new B.dYe(o),w))
w=o.dy
i.push(B.hH(A.bH,A.a.aX(A.o.u(A.k.bl(w)),2,"0")+":00","Time",24,0,new B.dYf(o),w))
w=o.fr
i.push(B.hH(A.b0,o.csb(),"Season",365,0,new B.dYg(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lX:D.Gt
i.push(new B.eV(C.a([new B.dB("Spin",w,new B.dYh(o),D.bFH,A.aO,n),new B.dB("Night",v,new B.dYi(o),A.vP,A.aO,n),new B.dB("Borders",u,new B.dY8(o),D.bFL,A.aO,n),new B.dB("Names",r,new B.dY9(o),X.BW,A.aO,n),new B.dB("Music",q,new B.dYa(o),p,A.aO,n)],l),n,n))
return B.jL(A.aO,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.x(i,A.m,n,A.e,A.N,0,A.p))},
csb(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.axe[u])v=u
return A.ir[v]+" "+(A.k.bl(w-D.axe[v])+1)},
c9j(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mS(1,A.o.E((A.d.cH(D.a2Z,t)+1)*47,360),0.55,1).iM()
r=new B.dXH()
q=C.n(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a5),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.de,j,j,j),1),C.aH(j,j,j,j,A.GL,j,j,j,new B.dXG(this),j,j,j,j,j,A.ce)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hh,j,j,j)
m=D.doO.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.ab,r.$2("PEOPLE",l?B.fwK(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.GR(i)+" km\xb2")
if(l)m=(w<10?A.k.ab(w,1):B.GR(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ab(u,3):A.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.x(C.a([n,t,A.O,v,A.O,m,A.O,C.B(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fwK(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.N,0,A.p),A.f,j,j,new C.o(D.Wo,j,p,q,j,j,A.n),j,j,j,j,D.aib,j,j,j)}}
B.bfo.prototype={
a3(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=C.N()
d7.r=D.AM.gp(0)
d8.b_(new C.a8(0,0,0+d4,0+d5),d7)
w=new C.eE()
w.dt(4)
for(d7=d8.a,v=0;v<90;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.25+w.aj()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.v(d4,d5)
o=d2.f
u=C.N()
t=x.O
u.sar(new C.bU(A.A,0.5,A.x,d3,0,C.a([A.K,A.aO.j(0.35),A.K],t),D.cUD,d3).aw(0,C.bV(p,o*1.1)))
d8.af(p,o*1.05,u)
n=C.bV(p,o)
u=C.N()
u.sar(D.ejy.aw(0,n))
d8.af(p,o,u)
J.by(d7.save())
u=x.v
d6=new C.aO(d6.r,A.ao,d3,d3,C.a([],u))
d6.F(new C.k6(n))
d8.qy(0,d6)
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
f=new B.dei(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bD(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cC(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bD(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cC(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.E((A.d.cH(D.a2Z,a7.c)+1)*47,360)
$.W()
b0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mS(1,a9,a3,a8?1:0.62).iM().gp(0)
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fH
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.L)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.W()
b7=C.a([],u)
b8=new C.aO(b6.r,A.ao,d3,d3,b7)
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
if(c8!=null)b6.bD(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bD(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bE()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bD(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cC(b8.gbK().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cC(b8.gbK().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.L)(a5),++b3){d=a5[b3]
$.W()
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.rA
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbK().a.snapshot()):s).a,q)
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
c9=B.hPX(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbc(b2)
c9.a3(d8,new C.v(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.W()
u=C.N()
u.sar(new C.bU(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b9i.j(0.78)],t),D.d9B,d3).aw(0,C.bV(new C.v(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.af(p,o,u)}$.W()
d4=C.N()
d4.sar(new C.bU(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dml,d3).aw(0,n))
d8.af(p,o,d4)
d7.restore()
d7=C.N()
d7.b=A.ae
d7.c=1.4
d7.r=A.fX.j(0.5).gp(0)
d8.af(p,o,d7)},
au(d){return!0}}
B.aLv.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.aLw.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvu()}}
B.btS.prototype={}
B.Wk.prototype={
S(){return new B.bkJ()}}
B.bkJ.prototype={
gaSo(){var w=this.d
if(w===$)w=this.d=A.cH.av(16)
return w},
B(d){var w=null,v=C.eF(w,w,w,!0,!0,D.AM,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.ao1,w,w,w,new B.eI6(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fB1,w,w,w,1,w,!0),u=C.n(18),t=A.aO.j(0.1),s=C.I(A.aO.j(0.35),A.q,1),r=x.p
return C.c6(v,D.AM,C.cw(C.a([C.p(w,C.B(C.a([D.bJe,A.at,C.E(C.d(D.cYw[this.gaSo()],w,w,w,w,w,w,D.a8P,w,w,w),1),C.aH(w,w,w,w,D.bTG,w,w,w,new B.eI7(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.aB,C.cq(new B.eI8())],r),w,A.Z6,w,w,A.ag,!1),w,!1,!1,w,w)}}
B.W5.prototype={
S(){return B.hQo()}}
B.bkv.prototype={
cjS(d){var w=d.c,v=B.hQq(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.v(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t=this
t.e.fo(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cjS(w)
u=new C.v(-v.a,-v.b).aH(0,t.w)
v=C.ll(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc9n(){var w=this.ch
return new C.v(w.a/2,w.b/2).ad(0,this.x)},
c9r(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.Cy[s]
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
b_4(d){this.m(new B.eA9(this,d))
C.eY()
B.lk("bell",D.dmy[A.o.E(A.d.cH(D.Cy,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mG,m,m,m,new B.eAk(n,d),m,m,m,m,"Share",m)],k),i=C.cq(new B.eAl(n,l)),h=C.a([new B.dB("All",!1,new B.eAm(n),A.a12,A.aM,m)],k)
for(w=0;w<10;++w){v=D.Cy[w]
h.push(new B.dB(v.a,n.z===v,new B.eAn(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ab(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hH(A.aM,s,"Time",1,0,new B.eAo(n),u/t)
u=n.w
u=B.hH(A.aM,A.k.ab(u,1)+"x","Zoom",9,0.5,new B.eAp(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lX:D.Gt
return B.jL(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.x(C.a([new B.eV(h,"GO TO",m),t,u,new B.eV(C.a([new B.dB("Orbits",s,new B.eAq(n),m,A.aM,m),new B.dB("Names",r,new B.eAr(n),m,A.aM,m),new B.dB("Asteroids",q,new B.eAs(n),m,A.aM,m),new B.dB("Music",p,new B.eAt(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.N,0,A.p))},
c9o(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.eA7(),m=C.n(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a5),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kj,r,r,r),1),C.aH(r,r,r,r,A.GL,r,r,r,new B.eA6(this),r,r,r,r,r,A.ce)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.DH,r,r,r)
v=n.$2("WIDTH",B.GR(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.u(p)+" AU ("+B.GR(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.eA8().$1(v))
t=d.f
v=C.B(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.ab(t/24,0)+" Earth days":A.k.ab(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.u(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ab(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ab(o,1)+" minutes":A.k.ab(o/60,1)+" hours"
return C.p(r,C.x(C.a([j,A.au,k,A.O,p,A.O,v,A.O,s,A.O,C.B(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.N,0,A.p),A.f,r,r,new C.o(D.Wo,r,l,m,r,r,A.n),r,r,r,r,D.aib,r,r,r)}}
B.brU.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.AM.gp(0)
a7.b_(new C.a8(0,0,0+a5,0+a6),w)
v=new C.eE()
v.dt(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc9n()
n=a5.w
if(a5.as)for(a6=A.d.gae(D.Cy),t=new C.f2(a6,new B.f1v()),s=o.a,r=o.b;t.C();){q=a6.gR(0).c
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
p.delete()}i=B.hQp(A.d.gI(D.Cy))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.sar(new C.bU(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).aw(0,C.bV(o,a6)))
a7.af(o,a6,t)
t=C.N()
t.sar(D.ejs.aw(0,C.bV(o,i)))
a7.af(o,i,t)
if(a5.at){h=B.hiy("Sun",10.5,A.ad)
h.a3(a7,o.ad(0,new C.v(-h.b.c/2,i+4)))}for(a6=A.d.gae(D.Cy),t=new C.f2(a6,new B.f1w()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gR(0)
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
a0=C.ce(A.J,j*1.3,j*4.2)
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bM.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c_(a0),p)
p.delete()
w.restore()}a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.rA
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.sar(new C.bU(P.pu,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a2B,a4).aw(0,C.bV(new C.v(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d2O[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.hiy(d,10.5,A.ad)
h.a3(a7,new C.v(g+-h.b.c/2,f+(j+4)))}}},
au(d){return!0}}
B.Ve.prototype={
S(){var w=x.i
return new B.aDj(new B.P7(A.cH),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDj.prototype={
cwJ(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c9q(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e8a
s.cy=new C.v(s.ay,0)
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
E.dH(150,"",400,0,0.5,"noise")
E.dH(90,"",300,1.5,0.6,"sine")
s.m(new B.dYo())},
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fo(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.z_[r]
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
if(q.a!=="Sun")E.dH(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.d7(s,new B.dYR()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
i.cy=new C.v(k,s)
k=p+k*w
s=t+s*w
i.cx=new C.v(k,s)
j=Math.sqrt(k*k+s*s)
s=i.cy
k=i.cx
t=-398600/(j*j*j)
p=k.a
k=k.b
i.cy=new C.v(s.a+p*t*v,s.b+k*t*v)
i.dy+=w
if(Math.sqrt(p*p+k*k)<6371){i.CW=!1
E.dH(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gal(v).aC(0,i.cx).gcn()>120)v.push(i.cx)
if(v.length>700)A.d.cA(v,0)
if(i.cx.gcn()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bMY()
else n=n==="weight"?p.cEb():p.bF2()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.djw[u]
v.push(new B.dB(t.b,p.d===t.a,new B.dYD(p,t),t.c,A.ct,o))}v=C.a([new B.eV(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dB("Hammer",!s,new B.dYE(p),Ag.Go,A.ct,o),new B.dB("Feather",s,new B.dYF(p),X.NA,A.ct,o),new B.dB(q,r,new B.dYJ(p),A.Gd,A.aO,o)],w)
q=p.w
A.d.v(v,C.a([new B.eV(r,o,o),B.hH(A.ct,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dYK(p),q),new B.eV(C.a([new B.fj(A.u1,"Drop!",new B.dYL(p),A.b0,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hH(A.ct,""+A.k.V(s)+" kg","Your weight",120,20,new B.dYM(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hH(A.ct,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dYN(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hH(A.ct,A.k.ab(s,1)+" km/s","Speed",13,0,new B.dYO(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hH(A.ct,A.k.ab(r,1)+"x out","View",8,0.5,new B.dYP(p),r),new B.eV(C.a([new B.fj(A.nq,"Fire!",p.gc9p(),A.b0,o),new B.fj(A.u1,"Falls",new B.dYQ(p),A.c,o),new B.fj(A.rf,"Orbit 7.7",new B.dYG(p),A.c,o),new B.fj(D.bIE,"Oval 9",new B.dYH(p),A.c,o),new B.fj(A.BZ,"Escape",new B.dYI(p),A.c,o)],w),o,o)],w))}return B.jL(A.ct,A.hc,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.x(v,A.m,o,A.e,A.N,0,A.p))},
bMY(){return new C.D(D.bsz,C.cq(new B.dYn(this)),null)},
cEb(){var w,v,u,t=null,s=[D.eJe,D.eKG,D.eKO,D.eL6,D.eKM,D.eLc,D.eJN,D.eLz,D.eKq],r=x.p,q=C.a([D.foT,A.R],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.D(A.cv,new C.ci(A.aP,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.y(v.a,t,new C.H(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bB(1,A.bg,new C.Bt(new B.dYp(this,v),t),t)],r),t),t))}q.push(A.au)
q.push(D.frd)
return C.cw(q,t,A.i7,t,t,A.ag,!1)},
bF2(){return C.cq(new B.dYl(this))}}
B.baA.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=C.N()
e.r=D.AM.gp(0)
d.b_(new C.a8(0,0,0+h,0+g),e)
w=new C.eE()
w.dt(2)
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
e.sar(new C.bU(A.A,0.5,A.x,i,0,C.a([A.K,A.aO.j(0.35),A.K],x.O),D.dav,i).aw(0,C.bV(g,p*1.1)))
d.af(g,p*1.06,e)
e=C.N()
e.sar(D.ejm.aw(0,C.bV(g,p)))
d.af(g,p,e)
o=g.ad(0,new C.v(0,-p))
f=f.r
e=x.v
n=new C.aO(f,A.ao,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.F(new C.b5(u-16,s))
n.F(new C.ap(u,t-400*h-4))
n.F(new C.ap(u+16,s))
n.F(new C.bE())
s=C.N()
s.r=A.ak.gp(0)
d.aR(n,s)
s=o.ad(0,new C.v(0,-400*h-6))
u=C.N()
u.r=A.c.gp(0)
d.af(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aO(f,A.ao,i,i,e)
f=g.a
t=g.b
m.F(new C.b5(f+A.d.gI(u).a*h,t+A.d.gI(u).b*h))
for(u=C.d9(u,1,i,C.S(u).c),s=u.$ti,u=new C.bQ(u,u.gM(0),s.k("bQ<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bD(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=C.N()
f.b=A.ae
f.c=2.4
f.d=A.bT
f.r=A.ct.j(0.9).gp(0)
d.aR(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.v(f.a*h,f.b*h))
h=C.N()
h.r=A.ct.j(0.4).gp(0)
h.z=G.mJ
d.af(k,7,h)
h=C.N()
h.r=A.c.gp(0)
d.af(k,4,h)}},
au(d){return!0}}
B.VY.prototype={
S(){return new B.bks(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.bks.prototype={
Z(){this.a1()
this.ll()},
lD(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Qf[l.e],i=D.Qf[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mG,k,k,k,new B.et3(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.brs(f,g,v,k),A.f6),1)
r=g.a
q=v<10?A.k.ab(v,1):B.GR(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hK,A.L,k,k)
o=B.GR(v*v*v)
n=A.a.cc(p,"s")?"":"s"
h=C.x(C.a([s,C.p(k,C.x(C.a([q,A.au,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A5.uT,A.L,k,k),A.bC,C.d(p+": "+B.GR(w*2)+" km wide. "+r+": "+B.GR(h*2)+" km wide.",k,k,k,k,k,k,A5.Jo,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.buH,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Qf[m]
r.push(new B.dB(w.a,l.e===m,new B.et4(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Qf[m]
w.push(new B.dB(s.a,l.f===m,new B.et5(l,m),k,C.b0(s.c),k))}return B.jL(A.bX,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ey(h,l.d),"SIZE COMPARE",C.x(C.a([new B.eV(r,"FIRST",k),new B.eV(w,"SECOND",k)],u),A.m,k,A.e,A.N,0,A.p))}}
B.brs.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.N()
w.r=D.X4.gp(0)
d.b_(new C.a8(0,0,0+h,0+g),w)
v=new C.eE()
v.dt(6)
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
m=new C.v(h,g)
w=new B.f_E(d)
t=this.c
w.$3(m,o,C.b0(t.c))
s=o-n
l=new C.v(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.b0(s.c))
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.ad.gp(0)
d.af(l,n+3,w)
k=C.fZ(i,i,i,i,C.d0(i,i,i,i,i,i,i,i,i,D.fan,s.a),A.a4,A.c6,i,A.dO,A.c3)
k.en()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbc(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbc(g)-6
h=g}k.a3(d,l.ad(0,new C.v(-w/2,h)))
j=C.fZ(i,i,i,i,C.d0(i,i,i,i,i,i,i,i,i,D.fdI,t.a),A.a4,A.c6,i,A.dO,A.c3)
j.en()
t=j.b
h=t.c
t=t.a.c
j.a3(d,m.ad(0,new C.v(-h/2,-t.gbc(t)/2)))},
au(d){return!0}}
B.aLx.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx6.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvw()}}
B.aM5.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxk.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw4()}}
B.aM8.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxm.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw7()}}
B.PC.prototype={}
B.Uf.prototype={
S(){return B.hQm()}}
B.bj8.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fo(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dH(70,"",500,0.3,0.5,"sine")}}A.d.br(w,new B.dFV())},
b_5(d){var w,v,u,t=this.Q
if(t.A(0,A.ax))return
w=this.gb84()
v=d.aC(0,new C.v(t.a/2,t.b*0.42))
u=A.k.D(v.gcn()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.PC(t,u,1.2,new C.vI(1,30+A.cH.aj()*40,0.9,0.7).iM()))
B.lk("bell",60+A.k.V(12-u)*2,400,0.35)},
gb84(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.M(m,new B.dFJ(),C.S(m).k("M<1,K>")).ff(0,A.vb),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mG,n,n,n,new B.dFK(o,d),n,n,n,n,"Share",n)],m)
v=C.cq(new B.dFL(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ab(s,0)+" Suns":B.fwK(s)+" Suns"
t=B.hH(A.bu,s,"Mass",1,0,new B.dFN(o),u/t)
u=C.a([new B.dB("Star (10)",!1,new B.dFO(o),n,A.bu,n),new B.dB("Cygnus X-1 (21)",!1,new B.dFP(o),n,A.bu,n),new B.dB("Milky Way core (4 million)",!1,new B.dFQ(o),n,A.bu,n),new B.dB("M87 (6.5 billion)",!1,new B.dFR(o),n,A.bu,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lX:D.Gt
return B.jL(A.bu,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.x(C.a([t,new B.eV(u,"LIKE",n),new B.eV(C.a([new B.dB("Glowing ring",s,new B.dFS(o),n,A.bu,n),new B.dB("Bent light",r,new B.dFT(o),n,A.bu,n),new B.dB("Music",q,new B.dFU(o),p,A.bu,n),new B.fj(A.k8,"Clear",new B.dFM(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.N,0,A.p))},
aeG(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.f6h,w,w,w),A.bC,C.d(e,w,2,w,w,w,w,L.zQ,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b9Z.prototype={
a3(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.N()
w.r=D.bhn.gp(0)
b2.b_(new C.a8(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.v(w,v)
t=this.b
s=t.gb84()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.L)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.v(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new C.v(w+k/h*g,v+j/h*g)}}k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.N()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=S.Rw
b2.af(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.vj,A.fl,d)
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
b1.sar(new C.bU(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cPE,null).aw(0,C.bV(u,b0)))
b2.af(u,b0,b1)
b1=C.N()
b1.r=A.w.gp(0)
b2.af(u,s,b1)
b1=C.N()
b1.b=A.ae
b1.c=1
b1.r=A.bu.j(0.55).gp(0)
b2.af(u,s,b1)
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
n.d=A.bT
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=k.j(0.2).gp(0)
o.z=G.mJ
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
au(d){return!0}}
B.aeP.prototype={}
B.Va.prototype={
S(){var w=x.r,v=x.g
return new B.bjA(new C.cs(null,x.A),new B.P7(A.cH),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjA.prototype={
Z(){this.a1()
this.a_3()
this.ll()},
a_3(){var w,v,u,t,s,r,q,p,o=this,n=new C.eE()
n.dt(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.aeP(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.av(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hi()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.aeP(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cwz(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e9E
k.cx=D.e9H
w=new C.eE()
w.dt(9)
v=k.cy
A.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.aeP(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
A.d.v(v,u)
u=x.g
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.L)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new C.v(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.L)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new C.v(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=C.a([],u)
for(s=k.ay,r=x.S,s=C.d9(s,0,C.dG(900,"count",r),C.S(s).c),o=s.$ti,s=new C.bQ(s,s.gM(0),o.k("bQ<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.v(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.d9(u,0,C.dG(900,"count",r),C.S(u).c),r=u.$ti,u=new C.bQ(u,u.gM(0),r.k("bQ<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.v(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dH(110,"",900,0.5,0.45,"sine")},
lD(d){var w,v,u,t,s,r,q,p=this
p.e.fo(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aC(0,p.fx)
s=Math.max(0.25,t.gcn())
r=t.eG(0,s).aH(0,0.9/(s*s))
w=p.fy.ad(0,r.aH(0,u))
p.fy=w
v=p.cx.aC(0,r.aH(0,u))
p.cx=v
w=p.fx.ad(0,w.aH(0,u))
p.fx=w
v=p.CW.ad(0,v.aH(0,u))
p.CW=v
q=new B.dWW(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mG,r,r,r,new B.dWM(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bfe(s,r),A.ax),n=A.w.j(0.5),m=C.n(14),l=C.I(A.bD,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ad.a83,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bR,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d6_[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dB(u.b,o,new B.dWN(s,u),r,A.h6,r))}l.push(new B.dB("Collide",s.ch,new B.dWO(s),A.yg,A.bX,r))
o=C.a([new B.eV(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hH(A.h6,""+n,"Arms",6,2,new B.dWP(s),n)
l=s.r
A.d.v(o,C.a([n,B.hH(A.h6,A.k.ab(l,1),"Winding",6,0.8,new B.dWQ(s),l)],q))}n=s.as
o.push(B.hH(A.h6,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dWR(s),n))
n=s.ax
o.push(B.hH(A.h6,A.k.ab(n,1)+"x","Speed",4,0,new B.dWS(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lX:D.Gt
o.push(new B.eV(C.a([new B.dB("Dark matter",n,new B.dWT(s),r,A.bu,r),new B.dB("You are here",l,new B.dWU(s),r,A.aM,r),new B.dB("Music",w,new B.dWV(s),t,A.h6,r)],q),r,r))
return B.jL(A.h6,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ey(new C.an(A.W,r,A.b2,A.r,m,r),s.d),"GALAXY",C.x(o,A.m,r,A.e,A.N,0,A.p))}}
B.bfe.prototype={
a3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.N()
w.r=D.bjs.gp(0)
a3.b_(new C.a8(0,0,0+a1,0+a2),w)
v=new C.eE()
v.dt(3)
for(w=a3.a,u=0;u<90;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.15+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.v(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.N()
t.sar(new C.bU(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.cdc,a0).aw(0,C.bV(o,a2)))
a3.af(o,a2,t)}m=new B.dbp(a1.as)
a2=n*0.3
t=C.N()
t.sar(new C.bU(A.A,0.5,A.x,a0,0,C.a([A.fL.j(0.85),A.aF.j(0.3),A.K],x.O),a0,a0).aw(0,C.bV(o,a2)))
a3.af(o,a2,t)
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
l.r=new H.mS(1,r,q>200?0.45:0.55,1).iM().j(0.35+(1-s)*0.5).gp(0)
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
a3.af(g,9,a2)
f=C.fZ(a0,a0,a0,a0,D.f3k,A.a4,A.c6,a0,A.dO,A.c3)
f.en()
f.a3(a3,g.ad(0,new C.v(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bkH.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bfv.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.N()
w.r=A.fL.gp(0)
a3.af(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.N()
w.r=A.iC.gp(0)
a3.af(a1,5,w)}},
au(d){return!0}}
B.VU.prototype={
S(){return new B.bkr(new C.cs(null,x.A),new B.P7(A.cH),$,A.bx,0,C.a([],x.X),null,null)}}
B.bkr.prototype={
Z(){this.a1()
this.ll()},
lD(d){var w,v,u,t=this
t.e.fo(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.E(t.r+d*0.04*v,1)
else{w=A.k.E(t.w+d*0.05*v,1)
t.w=w
u=A.k.bl(w*4)
if(u!==A.k.bl(t.as))B.lk("bell",60+u*4,500,0.35)
t.as=u}},
gcsa(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcis(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mG,q,q,q,new B.esi(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ey(C.b3(q,q,q,new B.bqI(r,q),A.f6),r.d),1)
if(r.f==="seasons")w=r.gcsa()
else{w=r.gcis()
v=A.k.am(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.x(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A6.TZ,A.L,q,q),A.f,q,q,q,q,q,q,q,K.ail,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A1.yr:A.iM
t=r.Q
s=t?A.lX:D.Gt
s=C.a([new B.eV(C.a([new B.dB("Seasons",n==="seasons",new B.esj(r),A.yE,A.bv,q),new B.dB("Moon phases",n==="moon",new B.esk(r),A.vP,A.bv,q),new B.dB(u,!1,new B.esl(r),v,A.bv,q),new B.dB("Music",t,new B.esm(r),s,A.bv,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hH(A.bv,D.d5j[A.o.E(A.k.bl(n*12),12)],"Month",1,0,new B.esn(r),n)
v=r.z
A.d.v(s,C.a([n,B.hH(A.bv,A.k.ab(v,1)+"\xb0","Tilt",90,0,new B.eso(r),v)],p))}else{p=r.w
s.push(B.hH(A.bv,""+(A.k.bl(p*29.5)+1),"Day of month",1,0,new B.esp(r),p))}p=r.y
s.push(B.hH(A.bv,A.k.ab(p,1)+"x","Speed",4,0.2,new B.esq(r),p))
return B.jL(A.bv,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.x(s,A.m,q,A.e,A.N,0,A.p))}}
B.bqI.prototype={
a3(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=C.N()
b8.r=D.AM.gp(0)
b9.b_(new C.a8(0,0,0+b5,0+b6),b8)
w=new C.eE()
w.dt(4)
for(b8=b9.a,v=0;v<70;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.aj()*0.4).gp(0)
q=r.H()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.v(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.ce(p,n*2,o*2)
t=C.N()
t.b=A.ae
t.c=1
t.r=A.aZ.gp(0)
b9.hZ(u,t)
t=C.N()
t.sar(D.ejo.aw(0,C.bV(p,34)))
b9.af(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.v(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).eG(0,p.aC(0,l).gcn())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.bhj.gp(0)
b9.af(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ao,b4,b4,C.a([],x.v))
b7.F(new C.k6(C.bV(A.J,k)))
b9.qy(0,b7)
b7=i.aH(0,k).aH(0,0.35)
s=k*1.1
b6=C.N()
b6.sar(D.ejx.aw(0,C.bV(A.J,s)))
b9.af(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.v(s,b6)
b7=new C.v(-s,-b6).aH(0,k).aH(0,1.7)
b5=h.aH(0,k).aH(0,1.7)
t=C.N()
t.c=2
t.r=A.c7.gp(0)
b9.bE(b7,b5,t)
t=h.aH(0,k).aH(0,1.7)
b5=C.N()
b5.r=A.c7.gp(0)
b9.af(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.fZ(b4,b4,b4,b4,C.d0(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aRN,b5),A.a4,A.c6,b4,A.dO,A.c3)
f.en()
f.a3(b9,l.ad(0,new C.v(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.N()
r.b=A.ae
r.c=1
r.r=A.aZ.gp(0)
b9.af(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.N()
r.sar(new C.bU(new C.dc(-0.5,0),1.1,A.x,b4,0,C.a([D.bcY,D.agh],x.O),D.cXt,b4).aw(0,C.bV(p,k)))
b9.af(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.v(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.bad.gp(0)
b9.af(a1,a2,r)
J.by(b8.save())
b7=b7.r
r=x.v
d=new C.aO(b7,A.ao,b4,b4,C.a([],r))
d.F(new C.k6(C.bV(a1,a2)))
b9.qy(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.N()
a3.r=A.bN.gp(0)
b9.b_(new C.a8(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).eG(0,a1.aC(0,p).gcn())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.atk[a5]
a7=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aO.j(0.45).gp(0)
a7.z=A.jw
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.v(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.N()
b6.r=D.ba8.gp(0)
b9.af(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.by(b8.save())
b6=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b6.F(new C.k6(C.bV(a8,a9)))
b9.qy(0,b6)
s=s.w
b1=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.F(new C.b5(u,b5))
b6=b2>0
b1.aCG(new C.v(u,t+a9),b6,new C.aS(a9,a9))
if(b0<0.5)b6=b2<0
b1.aCG(new C.v(u,b5),b6,new C.aS(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=A.bN.gp(0)
b9.aR(b1,b6)
b8.restore()
b8=C.N()
b8.b=A.ae
b8.c=1
b8.r=A.aZ.gp(0)
b9.af(a8,a9,b8)
b3=C.fZ(b4,b4,b4,b4,D.f3l,A.a4,A.c6,b4,A.dO,A.c3)
b3.en()
b3.a3(b9,a8.ad(0,new C.v(-b3.b.c/2,a9+6)))}},
au(d){return!0}}
B.aL3.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bwZ.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv0()}}
B.aLs.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bx5.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvq()}}
B.aM4.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
B.bxj.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw3()}}
var z=a.updateTypes(["~()","Q(ty)","Q(a4p)","aA<~>()","Q(Cr)","G(ty,G)","K(K,ty)","Q(Cn)","Q(Zf)","Q(abp)","Q(v5)","Q(a33)","Q(no)","Q(a_M)","Q(acc)","G(G)","Um()","UZ()","Ub()","Vc()","Vv()","Vx()","Ul()","VS()","W6()","VT()","VP()","Wd()","Uk()","Wi()","Q(mC)","VJ()","VO()","aeU(Y,G)","adM(Y,G)","~(a6<@,@>)","G(Cn,Cn)","m(ed)","Q(aeK)","Q(a0u)","Q(CB)","Q(abU)","Q(adQ)","Q(abD)","G(G,qN)","G(G,Cr)","m(qN)","~(qN,ai<m>,G)","qN?(Cr)","Q(qN)","t(m,a0h)","Q(PU)","~(Az)","Q(abK)","K(G?)","Wk()","Q(FN)","Q(ad1)","K(G)","V_()","K(PC)","Q(aai)","Ug()","a8h()","~(B8,m,v,w,K)","~(m,ty)","VM()","Vq(Y)","Nk(Y)","UH(Y,br<K>,br<K>)","Wo()","V6()","Uh()","UY()","VK()","VX()","Wh()","VI()","~(m)","cr(ab5)","Q(ab4)","Vd()","W5()","Ve()","Uf()","Va()","VY()","VU()","UJ()","Q(PC)","~(ba)"])
B.fz4.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.foW.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+37}
B.fvQ.prototype={
$1(d){var w
if(!this.a.LG(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fvR.prototype={
$1(d){return d.x},
$S:z+1}
B.fz1.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fz2.prototype={
$1(d){var w
if(!this.a.LG(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fz3.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e9n.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e9o.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e9p.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.me(v,A.dV,A.il)}},
$S:8}
B.e9A.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e9B.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e9w.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e9u.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dE(0,0,0,d,0,0),new B.e9v(w,this.b,e)))},
$S:1855}
B.e9v.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e9x.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gW5().ajL(0,u[1],u[2],u[3])
u[4].bM(0,new B.e9s(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dH(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e9t(w.a,v,w.f,w.r))},
$S:0}
B.e9s.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:180}
B.e9t.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bl(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e9y.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gW5().aku(t,u[1],s,u[3])
E.dH(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e9r(w.a,v,w.e,w.f))},
$S:0}
B.e9r.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bl(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e9z.prototype={
$0(){E.dH(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e9q(w,this.b))},
$S:0}
B.e9q.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e9E.prototype={
$0(){var w=this.a
return w.m(new B.e9D(w))},
$S:0}
B.e9D.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e9F.prototype={
$0(){var w=this.a
return w.m(new B.e9C(w))},
$S:0}
B.e9C.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e9G.prototype={
$0(){var w=this.a
w.f.saW(0,this.b)
w.Nu()},
$S:0}
B.e9H.prototype={
$0(){return this.a.Y5(this.b)},
$S:0}
B.e9I.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Nu():w.aVJ()},
$S:2}
B.e9J.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Nu():w.aVJ()},
$S:0}
B.epu.prototype={
$2(d,e){return d+e},
$S:1856}
B.epO.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.epN(w,d))},
$S:131}
B.epN.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.epP.prototype={
$0(){},
$S:0}
B.epQ.prototype={
$0(){},
$S:0}
B.epw.prototype={
$0(){return this.a.m(new B.epv(this.b,this.c))},
$S:0}
B.epv.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.epl.prototype={
$1(d){return this.a.cx===d},
$S:33}
B.epm.prototype={
$1(d){return this.a.cx=d},
$S:29}
B.epn.prototype={
$1(d){return this.a.cy===d},
$S:33}
B.epo.prototype={
$1(d){return this.a.cy=d},
$S:29}
B.epp.prototype={
$1(d){return this.a.db===d},
$S:33}
B.epq.prototype={
$1(d){return this.a.db=d},
$S:29}
B.epr.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:33}
B.eps.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.L(0,d)},
$S:29}
B.ept.prototype={
$0(){var w=this.a
return w.m(w.gawj())},
$S:0}
B.epj.prototype={
$1(d){return this.a.$1(!0)},
$S:83}
B.epk.prototype={
$1(d){return this.a.$1(!1)},
$S:137}
B.epi.prototype={
$1(d){return this.a.$1(!1)},
$S:185}
B.epH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.as(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bgV(o,p),n)
w=this.b
v=B.bzE("WORLD",w.a,w.c)
u=B.bzE("GRAVITY",C.u(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c7:A.b0
t=B.bzE("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.Cs[o.db].d?A.c7:A.c
q=x.p
s=C.a([v,u,t,B.bzE("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bzE("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.B(s,A.m,p,A.hH,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bDZ(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rt[w].a+".":"You landed on every world!"
v=C.a([new B.fj(A.mC,"Again",new B.epC(o),A.c,p),new B.fj(A.oW,"Rebuild",new B.epD(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fj(A.j4,"Next world",new B.epE(o),A.b0,p))
n.push(B.hmf("Perfect landing!",w,A.b0,v))}if(o.as==="crashed")n.push(B.hmf("Crash!",o.at,A.c7,C.a([new B.fj(A.mC,"Try again",new B.epF(o),A.b0,p),new B.fj(A.oW,"Rebuild",new B.epG(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b2,A.r,n,p)},
$S:64}
B.epC.prototype={
$0(){var w=this.a
return w.m(w.gawj())},
$S:0}
B.epD.prototype={
$0(){var w=this.a
return w.m(new B.epz(w))},
$S:0}
B.epz.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.epE.prototype={
$0(){var w=this.a
return w.m(new B.epy(w))},
$S:0}
B.epy.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.epF.prototype={
$0(){var w=this.a
return w.m(w.gawj())},
$S:0}
B.epG.prototype={
$0(){var w=this.a
return w.m(new B.epx(w))},
$S:0}
B.epx.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.epI.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.epB(v,w))},
$S:0}
B.epB.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.epJ.prototype={
$1(d){return this.a.y=d},
$S:9}
B.epK.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.epL.prototype={
$1(d){return this.a.z=d},
$S:9}
B.epM.prototype={
$0(){var w=this.a
return w.m(new B.epA(w))},
$S:0}
B.epA.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dGm.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hhA
if(q==null)q=$.hhA=B.cGq()
w=3
return C.b(C.iP(C.a([q,$.qW().bga("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kI(0,C.cO(J.q(s,1)))
q.m(new B.dGl(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:52}
B.dGl.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dFZ.prototype={
$0(){return this.a.bVy(C.aU(J.q(this.b,"group")))},
$S:0}
B.dG_.prototype={
$1(d){return A.a.aX(A.o.fY(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:277}
B.dGn.prototype={
$0(){return B.a8g("kick",0.25)},
$S:0}
B.dG0.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dG1.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dG2.prototype={
$0(){return B.a8g("kick",0.5)},
$S:0}
B.dG3.prototype={
$0(){return E.dH(1300+this.a.R8.av(900),"",40,0,0.2,"square")},
$S:0}
B.dG5.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.t(0,u))v.W(0,u)
else{v.L(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.b4(u.d.e,new B.dG4(u)))u.cx=null
u.go=0},
$S:0}
B.dG4.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.ay3(d)},
$S:z+11}
B.dFW.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dFX.prototype={
$0(){var w=this.a
return w.m(w.gc5_())},
$S:0}
B.dFY.prototype={
$0(){return this.a.ahm(null)},
$S:0}
B.dGc.prototype={
$0(){var w=this.a.as
return w==null?null:w.f_(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dGd.prototype={
$0(){return this.a.cAQ(this.b.a)},
$S:0}
B.dGe.prototype={
$0(){return this.a.ahm(this.b)},
$S:0}
B.dGf.prototype={
$1(d){var w=this.a
return w.m(new B.dGb(w,d))},
$S:6}
B.dGb.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dGg.prototype={
$0(){var w=this.a
return w.m(new B.dGa(w,this.b))},
$S:0}
B.dGa.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dGh.prototype={
$0(){var w=this.a
return w.m(new B.dG9(w))},
$S:0}
B.dG9.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dGi.prototype={
$0(){var w=this.a
return w.m(new B.dG8(w))},
$S:0}
B.dG8.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f_(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Kv},
$S:0}
B.dGj.prototype={
$0(){var w=this.a
return w.m(new B.dG7(w))},
$S:0}
B.dG7.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aYo()
else w.p2=null},
$S:0}
B.dGk.prototype={
$0(){var w=this.a
return w.m(new B.dG6(w))},
$S:0}
B.dG6.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.c1D.prototype={
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
$S:314}
B.c1E.prototype={
$1(d){var w=new C.rQ([],[]).pF(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:480}
B.fiy.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)},
$S:207}
B.fiz.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)||w.h(d,1)},
$S:207}
B.fiA.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)!==w.h(d,1)},
$S:207}
B.fiH.prototype={
$1(d){return!J.q(d,0)},
$S:207}
B.fiI.prototype={
$1(d){var w=J.a4(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:207}
B.fiJ.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:207}
B.dIx.prototype={
$1(d){return this.a.asZ(0)},
$S:8}
B.dIb.prototype={
$0(){var w=this.b
return this.a.cx=new C.M(w,C.i2A(),C.S(w).k("M<1,G>")).fP(0)},
$S:0}
B.dIe.prototype={
$1(d){return""+d},
$S:79}
B.dIy.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dI9.prototype={
$1(d){return this.a.asZ(this.b)},
$S:8}
B.dIa.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.awN(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mB(0,d,a1.m5(0.15,0.3))
u=a1.mB(0,d,a1.m5(0.15,0.62))
t=a1.mB(0,"and",a1.m5(0.48,0.46))
s=a1.mB(0,a0,a1.m5(0.82,0.46))
a1=t.a
w.push(new B.no(v.a,a1,0))
w.push(new B.no(u.a,a1,1))
w.push(new B.no(a1,s.a,0))
break
case 1:v=a1.mB(0,d,a1.m5(0.12,0.25))
u=a1.mB(0,d,a1.m5(0.12,0.65))
r=a1.mB(0,"xor",a1.m5(0.46,0.25))
q=a1.mB(0,"and",a1.m5(0.46,0.65))
p=a1.awM(0,a0,a1.m5(0.82,0.25),0)
o=a1.awM(0,a0,a1.m5(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.no(a1,n,0))
m=u.a
w.push(new B.no(m,n,1))
l=q.a
w.push(new B.no(a1,l,0))
w.push(new B.no(m,l,1))
w.push(new B.no(n,p.a,0))
w.push(new B.no(l,o.a,0))
break
case 2:k=a1.mB(0,"clock",a1.m5(0.15,0.4))
j=a1.mB(0,"not",a1.m5(0.45,0.65))
s=a1.mB(0,a0,a1.m5(0.82,0.3))
i=a1.mB(0,"buzzer",a1.m5(0.82,0.65))
a1=k.a
w.push(new B.no(a1,s.a,0))
n=j.a
w.push(new B.no(a1,n,0))
w.push(new B.no(n,i.a,0))
break
default:h=a1.mB(0,d,a1.m5(0.12,0.25))
g=a1.mB(0,d,a1.m5(0.12,0.7))
f=a1.mB(0,"nor",a1.m5(0.5,0.25))
e=a1.mB(0,"nor",a1.m5(0.5,0.7))
s=a1.mB(0,a0,a1.m5(0.86,0.25))
a1=f.a
w.push(new B.no(g.a,a1,0))
n=e.a
w.push(new B.no(n,a1,1))
w.push(new B.no(h.a,n,0))
w.push(new B.no(a1,n,1))
w.push(new B.no(a1,s.a,0))}},
$S:0}
B.dIf.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.awN(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.Cn(p,"switch",new C.v(0.14*q.a,r*q.b),0))}o.mB(0,w.e,o.m5(0.86,0.5))},
$S:0}
B.dI4.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dI5.prototype={
$2(d,e){return A.k.aM(d.c.b,e.c.b)},
$S:z+36}
B.dI6.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dI7.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dI8.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.acH(this.c)
if(v.ax)B.BN("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dH(140,"",250,0,0.3,"square")}},
$S:0}
B.dIg.prototype={
$0(){},
$S:0}
B.dIh.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
B.dIi.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dId.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.br(w.e,new B.dIc(v))
w.cy=null},
$S:0}
B.dIc.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dI3.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mB(0,this.b,new C.v(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dIr.prototype={
$0(){var w=this.a
return w.m(new B.dIq(w))},
$S:0}
B.dIq.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dIs.prototype={
$2(d,e){var w=null,v=this.a,u=new C.as(e.b,e.d)
v.x=u
return C.aC(A.c8,C.jA(C.b3(w,w,w,new B.bb2(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dIl(v),w,w,w,new B.dIm(v),new B.dIn(v),new B.dIo(v),w,w,w,w,w,w,w,w,w,w,new B.dIp(v),w,w,w,!1,A.a6)},
$S:36}
B.dIp.prototype={
$1(d){return this.a.c6K(d.b)},
$S:51}
B.dIn.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cfd(u)
if(t!=null){v.as=t
v.at=u
return}w=v.axA(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:44}
B.dIo.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.v(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dIm.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bZ8(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new B.dIj(w))
u=t.as
u.toString
v.push(new B.no(u,w.a,w.b))
C.jV()}}t.z=t.as=null},
$S:38}
B.dIj.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dIl.prototype={
$1(d){return this.a.avA(d.b)},
$S:281}
B.dIt.prototype={
$0(){return this.a.bzP(this.b.a)},
$S:0}
B.dIu.prototype={
$0(){return this.a.asZ(this.b.a)},
$S:0}
B.dIv.prototype={
$0(){var w=this.a
return w.m(new B.dIk(w))},
$S:0}
B.dIk.prototype={
$0(){var w=this.a
w.awN(0)
w.ay=null},
$S:0}
B.dIw.prototype={
$0(){return this.a.cww(this.b)},
$S:0}
B.cNc.prototype={
$0(){var w=this,v=null,u=C.fZ(v,v,v,v,C.d0(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c6,v,A.dO,A.c3)
u.en()
return u},
$S:343}
B.dOn.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dOm.prototype={
$0(){return this.a.d=null},
$S:0}
B.dOp.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c_W()},
$S:122}
B.dOo.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.fiZ.prototype={
$0(){return D.e2G},
$S:z+55}
B.fj_.prototype={
$0(){return D.dBO},
$S:z+59}
B.fj0.prototype={
$0(){return D.dyG},
$S:z+62}
B.fjb.prototype={
$0(){return D.e25},
$S:z+63}
B.fjd.prototype={
$0(){return D.dIc},
$S:z+66}
B.fje.prototype={
$0(){return D.dBJ},
$S:z+88}
B.fjf.prototype={
$0(){return D.dBM},
$S:z+17}
B.fjg.prototype={
$0(){return D.duQ},
$S:z+18}
B.fjh.prototype={
$0(){return D.dEh},
$S:z+19}
B.fji.prototype={
$0(){return D.dFV},
$S:z+20}
B.fjj.prototype={
$0(){return D.dFX},
$S:z+21}
B.fj1.prototype={
$0(){return D.dAV},
$S:z+22}
B.fj2.prototype={
$0(){return D.dKW},
$S:z+23}
B.fj3.prototype={
$0(){return D.e1N},
$S:z+24}
B.fj4.prototype={
$0(){return D.e_P},
$S:z+25}
B.fj5.prototype={
$0(){return D.dJB},
$S:z+26}
B.fj6.prototype={
$0(){return D.e1V},
$S:z+27}
B.fj7.prototype={
$0(){return D.dAU},
$S:z+28}
B.fj8.prototype={
$0(){return D.e24},
$S:z+29}
B.fj9.prototype={
$0(){return D.dAW},
$S:z+16}
B.fja.prototype={
$0(){return D.dGc},
$S:z+31}
B.fjc.prototype={
$0(){return D.dJA},
$S:z+32}
B.f_b.prototype={
$2(d,e){return new B.aeU($.bE4()[e],new B.f_a(e,this.a),null)},
$S:z+33}
B.f_a.prototype={
$0(){var w=this.a,v=F.aEw.h(0,$.bE4()[w].a)
$.arN=v==null?"music":v
C.a5(this.b,!1).cm(C.ea(new B.f_8(w),!1,null,x.H))},
$S:0}
B.f_8.prototype={
$1(d){return $.bE4()[this.a].e.$0()},
$S:40}
B.f_c.prototype={
$2(d,e){return new B.adM(D.axf[e],new B.f_9(this.a,e),null)},
$S:z+34}
B.f_9.prototype={
$0(){return this.a.d.$1(D.axf[this.b])},
$S:0}
B.eZS.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eZR.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eZQ.prototype={
$1(d){var w=this
return new C.e_(new B.eZP(w.a,w.b,w.c,w.d),null)},
$S:20}
B.eZP.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.foB,A.au,D.fv8,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aS(12,12)
m=new C.aS(12,12)
m=C.a([new C.bB(1,A.bg,C.aM(d,A.U,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e4(d,d,d,d,d,d,d,d,d,d,"Title",d,G.DG,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bn(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iS,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new C.bB(2,A.bg,C.aM(d,A.U,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e4(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.DG,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bn(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iS,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dlr[l]
j=new C.aS(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bD
f=new C.az(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aC(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aS,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bn(j,j,j,j),d,d,A.n),d,d,d,A.fD,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eZN(a3,p,u,k),d,d,d,d,d,d,!1,A.a6))}A.d.v(v,C.a([new C.y("SLAB "+o,d,D.fep,d,d,d,d,d,d,d,d,d),A.am,new C.ci(A.aP,A.e,A.j,A.m,d,A.p,d,0,m,d),A.O,new C.a7(d,44,C.cw(n,d,d,d,d,A.aP,!1),d),A.aB],w))}v.push(C.bG(A.wF,new B.eZO(t,r,q,u,a2),d))
return new C.D(new C.R(0,0,0,a1.f.d),C.bm(!0,new C.cS(new C.aY(0,1/0,0,a0.a.b*0.86),C.cw(v,d,A4.xT,d,d,A.ag,!0),d),!0,!1,A.af,!0,!0),d)},
$S:102}
B.eZN.prototype={
$0(){var w=this
return w.a.$1(new B.eZM(w.b,w.c,w.d))},
$S:0}
B.eZM.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eZO.prototype={
$0(){var w=this,v=w.a
v.m(new B.eZL(v,w.b,w.c,w.d))
C.a5(w.e,!1).O(null)},
$S:0}
B.eZL.prototype={
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
B.f__.prototype={
$0(){var w=this.a
return w.m(new B.eZZ(w))},
$S:0}
B.eZZ.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.f_0.prototype={
$0(){return B.qV(this.b,this.a.f,"scene")},
$S:0}
B.f_1.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gI(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZq().x
w===$&&C.c()
return C.c0(v,new C.o(v,v,v,v,v,new C.bU(D.aXM,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.c_],x.O),v,v),A.n),A.bf)},
$S:316}
B.f_2.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.eQ(A.A,C.c7(new C.hb(C.a([u.gu1(),u.gZq()],x.dS)),new B.eZY(u,this.b,v),w),A.f,A.e_),w,w,w)},
$S:242}
B.eZY.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gu1().x
r===$&&C.c()
w=r<0.9?1:1-B.br1(r,0.9,0.98)
v=s.gZq().x
v===$&&C.c()
u=A.dC.az(0,v)
switch(s.gawO().a){case 0:s=s.bz0(t.b,r,u,t.c)
break
case 1:s=s.bPG(t.b,r,u,t.c)
break
case 2:s=s.cBm(t.b,r,u,t.c)
break
case 3:s=s.bBW(t.b,r,u,t.c)
break
case 4:s=s.bFf(t.b,r,u,t.c)
break
case 5:s=s.bEp(t.b,r,u,t.c)
break
default:s=null}return C.de(s,w)},
$S:233}
B.f_3.prototype={
$2(d,e){var w=C.avd(this.b),v=this.c.d,u=C.aq(A.d.gI(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gI(v),A.d.gal(v),0.4)
v.toString
v=w.cJV(u,A.bD,v,3.5)
u=this.a
w=u.gu1().x
w===$&&C.c()
return C.aa4(C.l1(null,null,null,1,0,new B.eZX(u),A.k.D(w,0,1)),v)},
$S:1860}
B.eZX.prototype={
$1(d){var w=this.a
w.gu1().sp(0,d)
if(w.as)w.m(new B.eZT(w))},
$S:6}
B.eZT.prototype={
$0(){return this.a.as=!1},
$S:0}
B.f_4.prototype={
$0(){var w=this.a
w.gu1().sp(0,0)
w.ag5()},
$S:0}
B.f_5.prototype={
$1(d){var w=this.a
w.m(new B.eZW(w,d))
if(w.as)w.ag5()},
$S:6}
B.eZW.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.f_6.prototype={
$0(){var w=this.a
w.m(new B.eZV(w,this.b))
w.gu1().sp(0,0)
if(w.as)w.ag5()},
$S:0}
B.eZV.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.f_7.prototype={
$0(){var w=this.a
return w.m(new B.eZU(w,this.b))},
$S:0}
B.eZU.prototype={
$0(){var w=C.C(this.b,x.G)
return this.a.w=w},
$S:0}
B.eZJ.prototype={
$2(d,e){return A.k.aM(d.a,e.a)},
$S:1861}
B.eZK.prototype={
$1(d){return d.b},
$S:1862}
B.dif.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dig.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dic.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.did.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.die.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dih.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dii.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dij.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dik.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dil.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.dim.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.din.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.dio.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dip.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.eoP.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.eoE.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.eoG.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+44}
B.eoH.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+45}
B.eoK.prototype={
$1(d){var w=D.mI.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+46}
B.eoL.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.S(q),o=x.dg,n=C.C(new C.eb(new C.cP(new C.a_(q,new B.eoM(d),p.k("a_<1>")),new B.eoN(r),p.k("cP<1,qN?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.L)(n),++v){u=n[v]
if(w.length>=6)return
t=C.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.eoM.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.eoN.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.eoI.prototype={
$1(d){return D.mI.h(0,d.b).c===D.wX},
$S:z+49}
B.eoJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.epe.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v8(0,u)
w.a6c(A.o.am(v,1000))},
$S:8}
B.eoO.prototype={
$0(){},
$S:0}
B.eoA.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$$0)
case 6:e.aq("String","ngmy_core_reaction_lab_v1",s.a.d.ah())
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
B.eoR.prototype={
$1(d){var w=null,v=this.a.b
return C.bm(!0,C.x(C.a([A.O,C.dN(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mI.h(0,v).b,D.mI.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fGm,w,C.d(D.mI.h(0,v).a,w,w,w,w,w,w,A.hw,w,w,w),w,w,w),C.dN(!1,w,w,w,!0,w,w,w,!0,w,V.ao5,w,w,w,w,new B.eoQ(d),!1,w,w,w,w,w,w,w,D.fxV,w,w,w)],x.p),A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:24}
B.eoQ.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.eoT.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.ecr],x.p)
for(w=0;w<6;++w){v=D.axz[w]
s.push(C.dN(!1,u,u,u,!0,u,u,u,!0,u,D.bTl,u,u,u,u,new B.eoS(d,v),!1,u,u,u,u,u,new C.y(v.b,u,A.kJ,u,u,u,u,u,u,u,u,u),u,new C.y(v.a,u,A.hw,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bm(!0,new C.cS(new C.aY(0,1/0,0,t.a.b*0.7),C.cw(s,u,D.byb,u,u,A.ag,!0),u),!0,!1,A.af,!0,!0)},
$S:24}
B.eoS.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.eoD.prototype={
$1(d){var w=null
return C.em(C.a([C.bK(!1,A.dh,w,w,!0,w,w,new B.eoB(d),w,w),C.bK(!1,A.DL,w,w,!0,w,w,new B.eoC(d),w,w)],x.p),w,w,F.n9,D.fvj,w,w,w,w,D.fyc,w)},
$S:21}
B.eoB.prototype={
$0(){C.a5(this.a,!1).O(!1)
return null},
$S:0}
B.eoC.prototype={
$0(){C.a5(this.a,!1).O(!0)
return null},
$S:0}
B.epc.prototype={
$0(){var w=this.a
return w.m(new B.epb(w))},
$S:0}
B.epb.prototype={
$0(){return this.a.r=!1},
$S:0}
B.epd.prototype={
$2(d,e){var w,v,u,t=null,s=new C.as(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.mj(new B.ep2(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b6F:t
v=C.a([C.b3(u,t,t,new B.bgT(w,v,new B.ep3(r),new B.ep4(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e1(C.c7(w,new B.ep5(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bGX())
return C.aC(A.c8,C.jA(new C.an(A.W,t,A.b2,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.ep6(r),t,r.gcgw(),t,new B.ep7(r),new B.ep8(r),new B.ep9(r),t,t,t,t,t,t,t,t,t,t,new B.epa(r),t,t,t,!1,A.a6)},
$S:36}
B.ep2.prototype={
$0(){return this.a.abN(this.b)},
$S:0}
B.epa.prototype={
$1(d){return this.a.cz4(d.b)},
$S:51}
B.ep8.prototype={
$1(d){return this.a.cgx(d.b)},
$S:44}
B.ep9.prototype={
$1(d){return this.a.cgy(d.b)},
$S:18}
B.ep7.prototype={
$1(d){return this.a.b0L()},
$S:38}
B.ep6.prototype={
$1(d){return this.a.act(d.b)},
$S:281}
B.ep3.prototype={
$0(){return this.a.z},
$S:647}
B.ep4.prototype={
$0(){return this.a.Q},
$S:721}
B.ep5.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bLe()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=C.n(14)
u=C.I(A.bD,A.q,1)
t=C.a([D.fsN,A.cV],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.L)(p),++r)t.push(new C.y(p[r],q,D.fd8,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.x(t,A.F,q,A.e,A.N,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h9,q,q,q)},
$S:62}
B.eoF.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.n(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.D(A.e7,C.B(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.be,C.E(C.x(C.a([C.d(f,w,w,w,w,w,w,A6.TZ,w,w,w),A.bC,C.d(g,w,w,w,w,w,w,F.U4,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1864}
B.eoZ.prototype={
$0(){var w=this.a.c
w.toString
return C.a5(w,!1).ld()},
$S:0}
B.ep_.prototype={
$0(){var w=this.a
return w.m(new B.eoY(w))},
$S:0}
B.eoY.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.ep0.prototype={
$0(){var w=this.a
return w.m(new B.eoX(w))},
$S:0}
B.eoX.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.ep1.prototype={
$0(){var w=this.a
return w.m(new B.eoW(w))},
$S:0}
B.eoW.prototype={
$0(){return this.a.r=!0},
$S:0}
B.eoV.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mI.gdL(D.mI),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.L)(p),++r)u.push(s.ctS(p[r]))
return new C.D(I.ahB,C.x(C.a([new C.D(R.ajg,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.eoU.prototype={
$0(){return this.a.c6P(this.b)},
$S:0}
B.dib.prototype={
$0(){var w=this,v=null,u=C.fZ(v,v,v,v,C.d0(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c6,v,A.dO,A.c3)
u.en()
return u},
$S:343}
B.eAU.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.am(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.v(s.a+q*n,s.b+r*n)
t.b=new C.v(q*v,r*v)}A.d.br(o,new B.eAS(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.eAT())},
$S:8}
B.eAS.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.eAT.prototype={
$0(){},
$S:0}
B.eAv.prototype={
$0(){},
$S:0}
B.eAu.prototype={
$0(){},
$S:0}
B.eAE.prototype={
$0(){return B.qV(this.b,this.a.d,"spark-painter")},
$S:0}
B.eAG.prototype={
$1(d){return this.a.aZ4(0,d.b)},
$S:44}
B.eAK.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gcn()>2.5}else w=!1
if(w)t.a.push(u)
v.aRW(u)
v.c9R(u)
return null},
$S:18}
B.eAF.prototype={
$1(d){return this.a.aZ3()},
$S:38}
B.eAL.prototype={
$1(d){return this.a.aZ4(0,d.b)},
$S:23}
B.eAM.prototype={
$1(d){return this.a.aZ3()},
$S:51}
B.eAN.prototype={
$0(){var w=this.a
return w.m(new B.eAD(w,this.b))},
$S:0}
B.eAD.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eAO.prototype={
$0(){var w=this.a
return w.m(new B.eAC(w))},
$S:0}
B.eAC.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.eAP.prototype={
$0(){var w=this.a
return w.m(new B.eAB(w,this.b))},
$S:0}
B.eAB.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eAQ.prototype={
$1(d){var w=this.a
return w.m(new B.eAA(w,d))},
$S:6}
B.eAA.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.eAR.prototype={
$0(){var w=this.a
return w.m(new B.eAz(w))},
$S:0}
B.eAz.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eAH.prototype={
$0(){var w=this.a
return w.m(new B.eAy(w))},
$S:0}
B.eAy.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.eAI.prototype={
$0(){var w=this.a
return w.m(new B.eAx(w))},
$S:0}
B.eAx.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.eAJ.prototype={
$0(){var w=this.a
return w.m(new B.eAw(w,this.b))},
$S:0}
B.eAw.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eHt.prototype={
$0(){return B.qV(this.b,this.a.d,"title")},
$S:0}
B.eHu.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIR().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.c05(v[t],t,s,q,u))
return new C.D(A.fE,C.bT(A.fK,w,A.t5,0,0),null)},
$S:685}
B.eHv.prototype={
$1(d){return this.a.m(new B.eHs())},
$S:2}
B.eHs.prototype={
$0(){},
$S:0}
B.eHw.prototype={
$0(){var w=this.a
w.m(new B.eHr(w,this.b))
w=w.gIR()
w.iK(0,0)
w.cM(0)},
$S:0}
B.eHr.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eHx.prototype={
$0(){var w=this.a
return w.m(new B.eHq(w,this.b))},
$S:0}
B.eHq.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eHy.prototype={
$0(){var w=this.a
return w.m(new B.eHp(w))},
$S:0}
B.eHp.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eHz.prototype={
$0(){var w=this.a
return w.m(new B.eHo(w,this.b))},
$S:0}
B.eHo.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eHA.prototype={
$0(){var w=this.a.gIR()
w.iK(0,0)
w.cM(0)},
$S:0}
B.eHB.prototype={
$1(d){var w=this.a
return w.m(new B.eHn(w,d))},
$S:6}
B.eHn.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.elk.prototype={
$1(d){return d.a.aC(0,this.a).gcn()<16},
$S:z+13}
B.ell.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gcn()<16||d.a.aC(0,w).gcn()>this.a.r.gamu()*2.2},
$S:z+13}
B.el8.prototype={
$0(){return B.qV(this.b,this.a.d,"orbits")},
$S:0}
B.el9.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.as(e.b,e.d)
q.r=p
w=q.gadJ()
v=q.w
u=q.as
t=q.at
s=u==null?A.a3h:q.cka(u,q.gaWf())
return new C.ey(C.aC(A.c8,C.b3(r,r,r,new B.blf(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.el5(q),new B.el6(q),new B.el7(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a6),q.d)},
$S:197}
B.el6.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:44}
B.el7.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.el5.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gcn()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_M(u,v.gaWf(),v.Q,v.b2k(),C.a([],x.g)))
C.jV()
if(v.ax)E.dH(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:38}
B.ela.prototype={
$1(d){var w=this.a
return w.m(new B.el4(w,d))},
$S:6}
B.el4.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.elc.prototype={
$1(d){var w=this.a
return w.m(new B.el3(w,d))},
$S:6}
B.el3.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eld.prototype={
$1(d){var w=this.a
return w.m(new B.el2(w,d))},
$S:6}
B.el2.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ele.prototype={
$0(){var w=this.a
return w.m(new B.el1(w))},
$S:0}
B.el1.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.elf.prototype={
$0(){var w=this.a
return w.m(new B.el0(w))},
$S:0}
B.el0.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.elg.prototype={
$0(){var w=this.a
return w.m(new B.el_(w))},
$S:0}
B.el_.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.elh.prototype={
$0(){var w=this.a
return w.m(w.gcw9())},
$S:0}
B.eli.prototype={
$0(){var w=this.a
return w.m(w.gbHa())},
$S:0}
B.elj.prototype={
$0(){var w=this.a
return w.m(new B.ekZ(w))},
$S:0}
B.ekZ.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.arh(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hi())}},
$S:0}
B.elb.prototype={
$0(){var w=this.a
return w.m(A.d.grI(w.e))},
$S:0}
B.eGV.prototype={
$1(d){return this.a.fX$-d.b>6000},
$S:723}
B.eGW.prototype={
$1(d){var w=this.a.e
return new C.a_(w,new B.eGU(d),C.S(w).k("a_<1>")).gM(0)>=3},
$S:723}
B.eGU.prototype={
$1(d){return d.a.aC(0,this.a.a).gcn()<14},
$S:z+53}
B.eGK.prototype={
$0(){return B.qV(this.b,this.a.d,"swarm")},
$S:0}
B.eGL.prototype={
$2(d,e){var w=null,v=this.a,u=new C.as(e.b,e.d)
v.w=u
return new C.ey(C.aC(A.c8,C.b3(w,w,w,new B.bsO(v.e,v.f,v.ax,v.at,v.ay,v.fX$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eGH(v),new B.eGI(v),new B.eGJ(v),w,w,w,w,w,w,w,w,new B.eGz(v),new B.eGA(v),new B.eGB(v),w,w,w,!1,A.a6),v.d)},
$S:197}
B.eGI.prototype={
$1(d){return this.a.ay=d.b},
$S:44}
B.eGJ.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eGH.prototype={
$1(d){return this.a.ay=null},
$S:38}
B.eGA.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fX$))
if(w.ch)E.dH(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lk("flute",7,500,0.3)},
$S:23}
B.eGB.prototype={
$1(d){return this.a.ay=null},
$S:51}
B.eGz.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eGM.prototype={
$0(){var w=this.a
return w.m(new B.eGG(w,this.b))},
$S:0}
B.eGG.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eGN.prototype={
$0(){var w=this.a
return w.m(new B.eGF(w,this.b))},
$S:0}
B.eGF.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a8(w.e)},
$S:0}
B.eGO.prototype={
$0(){var w=this.a
return w.m(new B.eGE(w))},
$S:0}
B.eGE.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eGP.prototype={
$1(d){var w=this.a
return w.m(new B.eGD(w,d))},
$S:6}
B.eGD.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eGQ.prototype={
$1(d){var w=this.a
return w.m(new B.eGC(w,d))},
$S:6}
B.eGC.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eGR.prototype={
$1(d){var w=this.a
return w.m(new B.eGy(w,d))},
$S:6}
B.eGy.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eGS.prototype={
$1(d){var w=this.a
return w.m(new B.eGx(w,d))},
$S:6}
B.eGx.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eGT.prototype={
$1(d){var w=this.a
return w.m(new B.eGw(w,d))},
$S:6}
B.eGw.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dHG.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dHF(w,d))},
$S:131}
B.dHF.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.U(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jz(v==null?A.rz:v)
v=v.gae(v)
while(v.C()){u=v.gR(v)
t.n(0,C.u(u.a),A.k.N(C.dU(u.b)))}w.x=t
w.Q=!0
A.d.a8(w.d)},
$S:0}
B.dHH.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dHI.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Zr(w)>0},
$S:z+14}
B.dHw.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.azX()},
$S:0}
B.dHz.prototype={
$1(d){var w=null,v=C.n(22),u=this.a
return C.eL(w,F.kT,new C.D(A.bB,new C.a7(340,480,C.x(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.hK,w,w,w),A.R,C.E(C.im(!0,w,w,A.y,T.aP9,new B.dHy(u,d),100,w,w,A.ag,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d1,w,new C.b7(v,A.Y),w)},
$S:48}
B.dHy.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dHx(this.b,r):s
v=C.n(12)
if(p)q=r===q.r?A.bX:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.aZ:A.dn,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.jm
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aH("\u2605",n)+A.a.aH("\u2606",3-n),s,s,s,s,s,s,D.fgR,s,s,s))
return C.aC(s,C.p(s,C.x(o,A.m,s,A.b9,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a6)},
$S:77}
B.dHx.prototype={
$0(){C.a5(this.a,!1).O(this.b)
return null},
$S:0}
B.dHD.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.as(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gacK()
o=C.b3(q,q,q,new B.baJ(p.d,w,v,p.gc6W(),q),o)
v=p.bYM("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gIb()
t=p.as>=p.gIb()?A.b0:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.B(C.a([v,p.auN("GOAL",""+w+" / "+u,t),p.auN("STARS",A.a.aH("\u2605",s)+A.a.aH("\u2606",3-s),A.aM)],r),A.m,q,A.hH,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lL)
if(p.Q&&!p.y)s.push(D.aXu)
if(p.z){o=C.n(24)
w=this.c
v=C.I((w?A.b0:A.c7).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b0:A.c7,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.am,C.d("You blasted "+p.as+" dots. The goal was "+p.gIb()+".",q,q,q,q,q,q,A.hJ,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aH("\u2605",t==null?1:t),q,q,q,q,q,q,D.f7j,q,q,q))}u.push(A.aB)
t=C.a([new B.fj(A.mC,"Try again",new B.dHA(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fj(A.j4,"Next level",new B.dHB(p),A.b0,q))
u.push(C.B(t,A.m,q,A.e,A.N,0,q,q))
s.push(C.av(C.p(q,C.x(u,A.m,q,A.e,A.N,0,A.p),A.f,q,q,new C.o(D.Wr,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aC(A.c8,new C.an(A.W,q,A.b2,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dHC(p),q,q,q,q,!1,A.a6)},
$S:36}
B.dHC.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fX$
E.dH(180,"",200,1,0.4,"sine")
C.jl()},
$S:23}
B.dHA.prototype={
$0(){var w=this.a
return w.m(w.gb5_())},
$S:0}
B.dHB.prototype={
$0(){var w=this.a
return w.aZ5(w.r+1)},
$S:0}
B.dHE.prototype={
$0(){var w=this.a
return w.m(w.gb5_())},
$S:0}
B.cMK.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.W()
v=C.N()
v.r=f.j(0.18).gp(0)
w.af(d,e,v)
v=C.N()
v.b=A.ae
v.c=3
v.r=f.j(0.9).gp(0)
w.af(d,e,v)
v=C.N()
v.r=f.j(0.25).gp(0)
v.z=A.lz
w.af(d,e*0.5,v)},
$S:724}
B.egO.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcPy()?this.a.cse(w,v,d.b):w.aC(0,v).gcn())<24},
$S:z+56}
B.ehc.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.eh1.prototype={
$0(){var w=this.a
return w.m(new B.egT(w))},
$S:0}
B.egT.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eh2.prototype={
$0(){return B.qV(this.b,this.a.d,"marble-music")},
$S:0}
B.eh3.prototype={
$2(d,e){var w=null,v=this.a,u=new C.as(e.b,e.d)
v.w=u
return new C.ey(C.aC(A.c8,C.b3(w,w,w,new B.bhN(v.e,v.f,v.at,v.ax,v.fX$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.egZ(v),new B.eh_(v),new B.eh0(v),w,w,w,w,w,w,w,w,w,w,new B.egS(v),w,w,w,!1,A.a6),v.d)},
$S:197}
B.egS.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.a_b(w)
u.e.push(new B.FN(w,w,v,u.aPw(v)))
if(u.ay)B.lk(u.z,v+12,700,0.5)}if(u.x==="erase")u.aSb(d.b)},
$S:51}
B.eh_.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:44}
B.eh0.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aSb(d.b)},
$S:18}
B.egZ.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gcn()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.a_b(t.ad(0,w).eG(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.FN(w,t,v,u.aPw(v)))
if(u.ay)B.lk(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:38}
B.eh4.prototype={
$0(){var w=this.a
return w.m(new B.egY(w,this.b))},
$S:0}
B.egY.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.eh5.prototype={
$0(){var w=this.a
return w.m(new B.egX(w,this.b))},
$S:0}
B.egX.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eh6.prototype={
$0(){var w=this.a
return w.m(new B.egW(w,this.b))},
$S:0}
B.egW.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eh7.prototype={
$1(d){var w=this.a
return w.m(new B.egV(w,d))},
$S:6}
B.egV.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eh8.prototype={
$0(){var w=this.a
return w.m(new B.egU(w))},
$S:0}
B.egU.prototype={
$0(){return this.a.ays("stairs")},
$S:0}
B.eh9.prototype={
$0(){var w=this.a
return w.m(new B.egR(w))},
$S:0}
B.egR.prototype={
$0(){return this.a.ays("pinball")},
$S:0}
B.eha.prototype={
$0(){var w=this.a
return w.m(new B.egQ(w))},
$S:0}
B.egQ.prototype={
$0(){return this.a.ays("random")},
$S:0}
B.ehb.prototype={
$0(){var w=this.a
return w.m(new B.egP(w))},
$S:0}
B.egP.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.ekI.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.ekJ.prototype={
$0(){var w=this.b,v=new B.adx(this.a.a,this.c)
v.c=w.fX$
return w.e.push(v)},
$S:0}
B.ekQ.prototype={
$0(){var w=this.a
return w.m(new B.ekP(w))},
$S:0}
B.ekP.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ekR.prototype={
$0(){return B.qV(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.ekS.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.as(e.b,e.d)
if(!u.f){u.f=!0
u.aQW()}w=u.w
return new C.ey(C.aC(A.c8,C.b3(v,v,v,new B.blg(u.e,u.gaZ7(),6,u.gcmg(),u.gcsI(),u.fX$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ekO(u),v,v,v,!1,A.a6),u.d)},
$S:197}
B.ekO.prototype={
$1(d){return this.a.c6Y(d.b)},
$S:51}
B.ekT.prototype={
$1(d){var w=this.a
return w.m(new B.ekN(w,d))},
$S:6}
B.ekN.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ekU.prototype={
$0(){var w=this.a
return w.m(new B.ekM(w,this.b))},
$S:0}
B.ekM.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ekV.prototype={
$0(){var w=this.a
return w.m(new B.ekL(w,this.b))},
$S:0}
B.ekL.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ekW.prototype={
$0(){var w=this.a
return w.m(w.gbLa())},
$S:0}
B.ekX.prototype={
$0(){var w=this.a
return w.m(new B.ekK(w))},
$S:0}
B.ekK.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.adx(v.av(6),v.aj()))},
$S:0}
B.ekY.prototype={
$0(){var w=this.a
return w.m(A.d.grI(w.e))},
$S:0}
B.fzm.prototype={
$2(d,e){var w=A.o.am(d,100),v=A.o.E(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:140}
B.ekc.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.ekb(w,d))},
$S:131}
B.ekb.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cw:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.x.v(0,w)},
$S:0}
B.ejZ.prototype={
$2(d,e){var w=this.b
if(A.o.am(d,100)===w||A.o.E(d,100)===w)this.a.a+=e},
$S:140}
B.ejT.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b9C(w.b,new C.v(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.ejU.prototype={
$0(){var w=this.a
A.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
B.ejY.prototype={
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
p=D.wh.h(0,v[u].a).a
o=w.aji(u)
v=D.wh.h(0,v[t].a).a
n=w.aji(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.w2("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaZd()&&w.x.L(0,w.d)){B.w2("zap",12,300,0.5)
m=w.x
m=C.C(m,C.a3(m).k("co.E"))
B.w_("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.ejX.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a_<J.E>"),p=C.C(new C.a_(new C.cu(t,s),new B.ejV(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.L)(p),++w)t.W(0,p[w])
s=x.S
v=C.U(s,s)
t.bM(0,new B.ejW(r,v))
t.a8(0)
t.v(0,v)
A.d.cA(u.e,r)
u.r=null},
$S:0}
B.ejV.prototype={
$1(d){var w=this.a
return A.o.am(d,100)===w||A.o.E(d,100)===w},
$S:33}
B.ejW.prototype={
$2(d,e){var w=A.o.am(d,100),v=A.o.E(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:140}
B.ek6.prototype={
$1(d){return""+d.b+" "+D.wh.h(0,d.a).c.toLowerCase()},
$S:418}
B.ek7.prototype={
$0(){var w=this.a
return w.m(new B.ek5(w))},
$S:0}
B.ek5.prototype={
$0(){var w=this.a;++w.d
w.awT(0)},
$S:0}
B.ek8.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.as(e.b,e.d)
return C.aC(A.c8,C.b3(w,w,w,new B.biu(v.e,v.f,v.r,v.gcDw(),w),A.f6),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ek1(v),new B.ek2(v),new B.ek3(v,e),w,w,w,w,w,w,w,w,w,w,new B.ek4(v),w,w,w,!1,A.a6)},
$S:36}
B.ek4.prototype={
$1(d){return this.a.c7k(d.b)},
$S:51}
B.ek2.prototype={
$1(d){var w=this.a
return w.w=w.aZe(d.b)},
$S:44}
B.ek3.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.ek_(w,v,d,this.b))},
$S:18}
B.ek_.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.v(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.ek1.prototype={
$1(d){return this.a.w=null},
$S:38}
B.ek9.prototype={
$0(){var w=this.a
return w.m(new B.ek0(w,this.b))},
$S:0}
B.ek0.prototype={
$0(){var w=this.a
w.d=this.b
w.awT(0)},
$S:0}
B.eka.prototype={
$0(){return this.a.c7e(0,this.b.a)},
$S:0}
B.dql.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.am(d,100)].b,i=k[A.o.E(d,100)].b,h=i.aC(0,j),g=new C.v(-h.b,h.a).eG(0,Math.max(h.gcn(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.W()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.ad.gp(0)
m.c=4
m.d=A.bT
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:140}
B.dQr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dQq(w,d))},
$S:131}
B.dQq.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dQg.prototype={
$0(){var w,v,u=J.e5(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.aw0[w.av(4)]
return A.d.h3(u)},
$S:22}
B.dQf.prototype={
$1(d){return B.h2x(d)==="*"},
$S:3}
B.dQh.prototype={
$1(d){return d!==this.a},
$S:3}
B.dQe.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.w_("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.w2("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga9c()[r]+" codes for "+C.u(D.CG.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b1h()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u)r.push(D.CG.h(0,w[u]))
r="Protein built: "+A.d.aG(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.w2("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dQp.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dn:e,u=C.n(8),t=f?C.I(A.aZ,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.aZ:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.mv,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1868}
B.dQk.prototype={
$1(d){var w=D.dph.h(0,d)
return w==null?A.c:w},
$S:725}
B.dQl.prototype={
$0(){var w=this.a
return w.m(new B.dQj(w,this.b))},
$S:0}
B.dQj.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.awa()},
$S:0}
B.dQm.prototype={
$0(){var w=this.a
return w.m(new B.dQi(w))},
$S:0}
B.dQi.prototype={
$0(){var w=this.a;++w.e
w.awa()},
$S:0}
B.dQn.prototype={
$0(){return this.a.aZc(this.b)},
$S:0}
B.dQo.prototype={
$0(){return this.a.aZc(this.b)},
$S:0}
B.dTg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dTf(w,d))},
$S:131}
B.dTf.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dT3.prototype={
$0(){},
$S:0}
B.dT2.prototype={
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
B.dT4.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dT8.prototype={
$1(d){var w=this.a
return w.m(new B.dT7(w,d))},
$S:6}
B.dT7.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dT9.prototype={
$1(d){var w=this.a
return w.m(new B.dT6(w,d))},
$S:6}
B.dT6.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dTa.prototype={
$1(d){var w=this.a
return w.m(new B.dT5(w,d))},
$S:6}
B.dT5.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dTb.prototype={
$0(){return this.a.aaq("drought")},
$S:0}
B.dTc.prototype={
$0(){return this.a.aaq("disease")},
$S:0}
B.dTd.prototype={
$0(){return this.a.aaq("foxes")},
$S:0}
B.dTe.prototype={
$0(){return this.a.aaq("rabbits")},
$S:0}
B.d5s.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eE()
k.dt(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.E(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.jM(new C.eu(e,l,l,A.cP,l,l,l,l,l,l,new C.H(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.c6,new C.jv(1),l,l,l,l,A.c3,l)
n.en()
n.a3(w,new C.v(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1870}
B.d5u.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.W()
v=C.a([],x.v)
u=new C.aO(w.r,A.ao,null,null,v)
for(w=this.b,t=w.a,s=w.c-t,r=w.d,w=r-w.b,q=0;q<l.length;++q){p=t+s*q/159
o=r-w*A.k.D(l[q][d]/e,0,1)
if(q===0){n=new C.b5(p,o)
v.push(n)
m=u.f
if(m!=null)n.bD(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ap(p,o)
v.push(n)
m=u.f
if(m!=null)n.bD(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.W()
l=C.N()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fH
this.c.aR(u,l)},
$S:1871}
B.d5t.prototype={
$3(d,e,f){var w=null,v=C.fZ(w,w,w,w,C.d0(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.c6,w,A.dO,A.c3)
v.en()
v.a3(this.a,new C.v(f,this.b.b+2))},
$S:1872}
B.bG9.prototype={
$2(d,e){return d+e.a*e.b},
$S:1873}
B.ftn.prototype={
$2(d,e){return e.a-d.a},
$S:1874}
B.dDR.prototype={
$2(d,e){return d+e},
$S:73}
B.dE3.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dE2(v,A.k.D((v.gvY()-w[v.e].gv0())/Math.max(w[v.e].gv0(),8),-1,1)*0.32,u))},
$S:8}
B.dE2.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dE4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dE1(w,d))},
$S:131}
B.dE1.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cw:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.r.v(0,w)},
$S:0}
B.dDS.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.E(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dDX.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1875}
B.dDY.prototype={
$0(){var w=this.a
return w.m(new B.dDW(w))},
$S:0}
B.dDW.prototype={
$0(){var w=this.a;++w.e
A.d.h7(w.f,0,5,0)},
$S:0}
B.dDZ.prototype={
$2(d,e){var w=null,v=this.a
return C.aC(A.c8,C.b3(w,w,w,new B.b9O(v.w,this.b.a,v.f,v.gvY()===v.d[v.e].gv0(),w),A.f6),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dDV(v,e),w,w,w,!1,A.a6)},
$S:36}
B.dDV.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.czh(v-1)},
$S:51}
B.dE_.prototype={
$0(){var w=this.a
return w.m(new B.dDU(w,this.b))},
$S:0}
B.dDU.prototype={
$0(){var w=this.a
w.e=this.b
A.d.h7(w.f,0,5,0)},
$S:0}
B.dE0.prototype={
$0(){var w=this.a
return w.m(new B.dDT(w))},
$S:0}
B.dDT.prototype={
$0(){return A.d.h7(this.a.f,0,5,0)},
$S:0}
B.cFh.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bx(C.ce(new C.v(d,s),20,w),A.qs)
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
B.fsn(v,"1",new C.v(d,s),A.bk,11)}},
$S:1876}
B.dXj.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dXi(w,v))},
$S:8}
B.dXi.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dXk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dXh(w,d))},
$S:131}
B.dXh.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cw:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.w.v(0,w)},
$S:0}
B.dX9.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dXd.prototype={
$0(){var w=this.a
return w.m(new B.dXc(w))},
$S:0}
B.dXc.prototype={
$0(){return this.a.r++},
$S:0}
B.dXe.prototype={
$0(){var w=this.a
return w.m(new B.dXb(w,this.b))},
$S:0}
B.dXb.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dXf.prototype={
$1(d){var w=this.a
return w.m(new B.dXa(w,d))},
$S:6}
B.dXa.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dXg.prototype={
$1(d){return this.a.c7l(this.b,d)},
$S:6}
B.dds.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bQF(d,e,f,g),m=this.b
$.W()
w=C.N()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.sar(new C.bU(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).aw(0,C.bV(d,e+6)))
m.aR(n,w)
w=C.N()
w.b=A.ae
w.c=1.5
w.r=A.aW.gp(0)
m.aR(n,w)
w=C.N()
w.r=A.w.j(0.28).gp(0)
m.af(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.hP.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=A.aL.gp(0)
m.af(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1877}
B.ddt.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fsn(w.a,d,new C.v(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1878}
B.dI2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dI1(w,d))},
$S:131}
B.dI1.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cw:v)
while(v.C())w.push(A.k.N(C.dU(v.gR(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dHL.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jK(90-(w-65)):d},
$S:14}
B.dHU.prototype={
$1(d){return this.a.m(new B.dHT())},
$S:2}
B.dHT.prototype={
$0(){},
$S:0}
B.dHV.prototype={
$1(d){return this.a.m(new B.dHS())},
$S:2}
B.dHS.prototype={
$0(){},
$S:0}
B.dHW.prototype={
$0(){var w=this.a
return w.m(new B.dHR(w))},
$S:0}
B.dHR.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aXP()},
$S:0}
B.dHX.prototype={
$0(){var w=this.a
return w.m(new B.dHQ(w))},
$S:0}
B.dHQ.prototype={
$0(){return this.a.f=0},
$S:0}
B.dHY.prototype={
$0(){var w=this.a
return w.m(new B.dHP(w))},
$S:0}
B.dHP.prototype={
$0(){return this.a.f=1},
$S:0}
B.dHZ.prototype={
$0(){var w=this.a
return w.m(new B.dHO(w,this.b))},
$S:0}
B.dHO.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dI_.prototype={
$1(d){var w=this.a
return w.m(new B.dHN(w,d))},
$S:6}
B.dHN.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dI0.prototype={
$1(d){var w=this.a
w.m(new B.dHM(w,d))
if(w.ga9G()&&w.Q.L(0,w.x)){B.w2("zap",9,220,0.45)
w=w.Q
w=C.C(w,C.a3(w).k("co.E"))
B.w_("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dHM.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bMA.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bML.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bMG.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bMM.prototype={
$1(d){return this.a.LG(d)&&!d.x},
$S:z+1}
B.bMN.prototype={
$2(d,e){return Math.max(d,this.a.aAq(e))},
$S:z+6}
B.bMP.prototype={
$2(d,e){var w=this.a
return w.ca(0,d.a+"."+e,new B.bMQ(w))},
$S:z+5}
B.bMQ.prototype={
$0(){return this.a.a},
$S:100}
B.bMO.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bMR.prototype={
$2(d,e){var w=this.a
return w.ca(0,this.b.$1(this.c.$2(d,e)),new B.bMS(w))},
$S:z+5}
B.bMS.prototype={
$0(){return this.a.a},
$S:100}
B.bMC.prototype={
$2(d,e){var w=this.a
return w.ca(0,d.a+"."+e,new B.bMD(w))},
$S:z+5}
B.bMD.prototype={
$0(){return this.a.a},
$S:100}
B.bMB.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
B.bME.prototype={
$2(d,e){var w=this.a
return w.ca(0,this.b.$1(this.c.$2(d,e)),new B.bMF(w))},
$S:z+5}
B.bMF.prototype={
$0(){return this.a.a},
$S:100}
B.bMz.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bMT.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bMH.prototype={
$1(d){return d!==this.b&&this.a.aGA(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bMK.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bMJ.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bMI.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bHn.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bHo.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.clY.prototype={
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
$S:180}
B.fKJ.prototype={
$1(d){var w
$.W()
w=C.N()
w.r=d.gp(0)
return w},
$S:1879}
B.fKL.prototype={
$2(d,e){var w
$.W()
w=C.N()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bT
return w},
$S:1880}
B.fKM.prototype={
$5(d,e,f,g,h){return C.bx(new C.a8(d,e,d+f,e+g),new C.aS(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1881}
B.fKK.prototype={
$3(d,e,f){var w
$.W()
w=C.N()
w.sar(new C.a9(A.b1,A.b5,A.x,C.a([e,f],x.O),null,null).aw(0,d))
return w},
$S:1882}
B.bH1.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bH2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bH0(w))},
$S:0}
B.bH0.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bH3.prototype={
$0(){return C.a([],x.ey)},
$S:1883}
B.bH4.prototype={
$1(d){return this.a.bC(d).a>15e5},
$S:377}
B.bH5.prototype={
$0(){var w,v,u
J.bEd(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Cu(v))if(B.h3_(v.b))w.b0e(v)
else w.a_r(v)
else{u=w.a.c.bcY(v)
w.adW(u==null?"The "+$.qj().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bH_.prototype={
$1(d){return new C.e_(new B.bGY(this.a,this.b),null)},
$S:20}
B.bGY.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bGZ(this.a,v,e),t=$.qj(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kj,w,w,w),q=C.aH(w,w,w,w,D.bJZ,w,w,w,new B.bGU(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bm(!0,new C.D(A.xV,C.x(C.a([r,A.au,D.fHm,A.R,C.B(C.a([q,C.E(C.l1(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bQF,w,w,w,new B.bGV(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.B(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b7,C.bK(!1,D.fkY,w,w,!0,w,w,new B.bGW(u),w,w),C.bK(!1,A.wF,w,w,!0,w,w,new B.bGX(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:88}
B.bGZ.prototype={
$1(d){var w=this.a
w.m(new B.bGS(this.b,d))
this.c.$1(new B.bGT())
w.a.toString},
$S:6}
B.bGS.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bGT.prototype={
$0(){},
$S:0}
B.bGU.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bGV.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bGW.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bGX.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.bHk.prototype={
$2(d,e){var w
if(d==="short"){E.dH(1800,"",120,0,0.55,"noise")
E.dH(200,"",160,2.2,0.4,"saw")
C.fH()
w=this.a
if(w.c!=null)w.adW("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dH(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adW("\u26a0 Overloaded! The "+$.qj().h(0,e.b).b+" can only give about "+A.k.ab(w.a.c.zH(e),2)+" amps but your gadgets are asking for "+A.k.ab(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adW("Burnt out! "+e.ay)
E.dH(140,"",320,0,0.6,"noise")
E.dH(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bHl.prototype={
$0(){},
$S:0}
B.bGv.prototype={
$0(){},
$S:0}
B.bHm.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bHj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.as(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aC(A.c8,C.b3(p,p,p,new B.aiF(w,v,u,t,s,r==null?A.j7:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bHd(o),new B.bHe(o),new B.bHf(o),p,p,p,p,p,p,p,p,p,p,new B.bHg(o),p,p,p,!1,A.a6)],q)
if(o.a.c.a.length===0)n.push(D.b5Y)
w=o.Q
if(w!=null){v=C.n(14)
u=C.I(A.ct,A.q,1)
n.push(C.ao(p,C.aC(p,C.p(p,C.B(C.a([D.fjd,C.E(C.d(w,p,p,p,p,p,p,D.fbo,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.bbo,p,u,v,p,p,A.n),p,p,p,p,A.nj,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bHh(o),p,p,p,p,p,p,!1,A.a6),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aZh(C.B(C.a([D.bAg,new B.fj(A.Ge,"Cut wire",new B.bHi(o),A.c7,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.ch4(w),p,p,10,10,p,p))}return C.jA(new C.an(A.W,p,A.b2,A.r,n,p),A.r,p)},
$S:359}
B.bHe.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b7g(s)
if(r!=null){t.m(new B.bHb(t,r,d))
return}w=t.b0V(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.v(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bHc(t,w))}},
$S:44}
B.bHb.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bHc.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bHf.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bH9(w,d))
else if(w.w!=null)w.m(new B.bHa(w,d.b.ad(0,w.x)))},
$S:18}
B.bH9.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bHa.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bHd.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b7g(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.aku(u.a,u.b,v.a,v.b)!=null)E.dH(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adU()},
$S:38}
B.bHg.prototype={
$1(d){var w=this.a,v=d.b,u=w.b0V(v)
if(u!=null){w.m(new B.bH7(w,u))
if(D.m3.ai(0,u.b))w.crH(u)
w.a.toString
return}w.m(new B.bH8(w,w.cEn(v)))},
$S:51}
B.bH7.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dH(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dH(200,"",70,0,0.2,"saw")}},
$S:0}
B.bH8.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bHh.prototype={
$0(){var w=this.a
return w.m(new B.bH6(w))},
$S:0}
B.bH6.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bHi.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dH(300,"",50,0,0.35,"noise")
w.adU()},
$S:0}
B.bGw.prototype={
$0(){return this.a.boU(this.b)},
$S:0}
B.bGP.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.f5T,w,w,w),C.E(C.l1(this.b.d,w,w,g,h,new B.bGR(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1884}
B.bGR.prototype={
$1(d){var w=this.a
w.m(new B.bGQ(this.b,d))
w.a.toString},
$S:6}
B.bGQ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bGC.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dH(260,"",70,0,0.35,"noise")
w.adU()},
$S:0}
B.bGD.prototype={
$0(){var w=this.a
return w.m(new B.bGB(w))},
$S:0}
B.bGB.prototype={
$0(){return this.a.d=null},
$S:0}
B.bGE.prototype={
$0(){this.a.m(new B.bGA(this.b,this.c))
E.dH(900,"",40,0,0.3,"noise")},
$S:0}
B.bGA.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bGH.prototype={
$0(){return this.a.b0e(this.b)},
$S:0}
B.bGI.prototype={
$0(){return this.a.a_r(this.b)},
$S:0}
B.bGJ.prototype={
$0(){return this.a.a15(this.b)},
$S:0}
B.bGK.prototype={
$0(){var w=this.a
w.m(new B.bGz(this.b,this.c))
w.a.toString},
$S:0}
B.bGz.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bGL.prototype={
$0(){var w=this.a
w.m(new B.bGy(this.b,this.c))
w.a.toString},
$S:0}
B.bGy.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bGM.prototype={
$0(){var w=this.a
w.m(new B.bGx(this.b,this.c))
w.a.toString},
$S:0}
B.bGx.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bGN.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGO.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGF.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGG.prototype={
$1(d){return this.a.f=d},
$S:6}
B.fiK.prototype={
$1(d){return d.aGd("bulb")},
$S:z+2}
B.fiL.prototype={
$1(d){return d.pO(0,"switch")&&d.aGd("bulb")},
$S:z+2}
B.fiM.prototype={
$1(d){return A.d.b4(d.a,new B.fix())},
$S:z+2}
B.fix.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fiN.prototype={
$1(d){return d.pO(0,"resistor")&&A.d.b4(d.a,new B.fiw())},
$S:z+2}
B.fiw.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.fiO.prototype={
$1(d){return!d.pO(0,"battery")&&d.aGd("bulb")},
$S:z+2}
B.fiB.prototype={
$1(d){return A.d.b4(d.a,new B.fiv())},
$S:z+2}
B.fiv.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fiC.prototype={
$1(d){return A.d.b4(d.a,new B.fiu())},
$S:z+2}
B.fiu.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fiD.prototype={
$1(d){return A.d.b4(d.a,new B.fit())},
$S:z+2}
B.fit.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.fiE.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.fir())&&A.d.b4(w,new B.fis())&&d.pO(0,"buck")},
$S:z+2}
B.fir.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fis.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fiF.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.fip())&&A.d.b4(w,new B.fiq())},
$S:z+2}
B.fip.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.fiq.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fiG.prototype={
$1(d){return A.d.b4(d.a,new B.fio())},
$S:z+2}
B.fio.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dTo.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
B.dTx.prototype={
$1(d){var w=this.a.d
return w.aGA(d)&&w.Cu(d)},
$S:z+1}
B.dTy.prototype={
$1(d){return d.x},
$S:z+1}
B.dTz.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dTA.prototype={
$0(){},
$S:0}
B.dTn.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.n(22),o=x.p,n=C.a([D.fA6,A.au,D.fkU,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Qi[v]
t=A.c.j(0.06)
s=new C.aS(14,14)
r=new C.az(A.bD,1,A.q,-1)
n.push(C.aC(q,C.p(q,C.x(C.a([new C.y(u.a,q,A.ki,q,q,q,q,q,q,q,q,q),A.bC,new C.y(u.b,q,D.fc8,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bn(s,s,s,s),q,q,A.n),q,q,q,A.cv,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dTm(w,d,u),q,q,q,q,q,q,!1,A.a6))}return C.eL(q,F.kT,new C.D(A.bP,new C.a7(340,q,C.cw(n,q,q,q,q,A.ag,!0),q),q),q,q,q,q,A.d1,q,new C.b7(p,A.Y),q)},
$S:48}
B.dTm.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new B.dTl(w,this.c))
E.dH(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dTl.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bi4()},
$S:0}
B.dTj.prototype={
$1(d){return new B.Vq(this.a.d,null)},
$S:z+67}
B.dTk.prototype={
$0(){},
$S:0}
B.dTw.prototype={
$1(d){return new C.e_(new B.dTv(this.a),null)},
$S:20}
B.dTv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahR(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b0:A.aO
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.B(C.a([D.fxp,A.b7,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.O,C.bv(C.n(4),C.lB(A.bD,m,m,5,m,w.a/11,new C.m_(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fnY)
else{h=f.j(0.1)
t=C.n(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.TX,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.DH,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.x(C.a([r,A.au,q,new C.bI(A.a8,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dTt(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bl,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aS(12,12)
n=new C.az(o===l.f?f.j(0.6):A.dn,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(C.aC(m,C.p(m,new C.ci(A.aP,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.y(s,m,A.a8y,m,m,m,m,m,m,m,m,m),A.at,new C.bB(1,A.bg,new C.y(r.a,m,new C.H(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bn(t,t,t,t),m,m,A.n),m,m,m,A.eK,A.nj,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dTu(l,o,e),m,m,m,m,m,m,!1,A.a6))}return C.bm(!0,new C.cS(new C.aY(0,1/0,0,k.a.b*0.75),C.cw(u,m,A4.xT,m,m,A.ag,!0),m),!0,!1,A.af,!0,!0)},
$S:88}
B.dTt.prototype={
$0(){var w=this.a
w.m(new B.dTr(w))
this.b.$1(new B.dTs())
w.EU()},
$S:0}
B.dTr.prototype={
$0(){var w=this.a
$.ahR()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dTs.prototype={
$0(){},
$S:0}
B.dTu.prototype={
$0(){var w=this.a
w.m(new B.dTp(w,this.b))
this.c.$1(new B.dTq())
w.EU()},
$S:0}
B.dTp.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dTq.prototype={
$0(){},
$S:0}
B.dTC.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.dTD.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.mg("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a5(t.b,!1).cm(C.ea(new B.dTB(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dTB.prototype={
$1(d){C.lq("construction")
return Ak.hGs()},
$S:z+68}
B.dTE.prototype={
$0(){return B.hss(this.a,"ELECTRONICS LAB",this.b,A.aO)},
$S:0}
B.dTF.prototype={
$0(){var w=this.a
return w.m(w.d.gcVz())},
$S:0}
B.dTG.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grI(v))
w.EU()},
$S:0}
B.cCP.prototype={
$2(d,e){var w=null,v=this.a.gawU().x
v===$&&C.c()
return C.b3(w,w,w,new B.b8W(v,w),A.ax)},
$S:70}
B.cCO.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ao,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.F(new C.b5(v,t))
w.F(new C.cW(v,u,v+e,u))
w.F(new C.cW(v,u,v,u+e))
w.F(new C.cW(v,u,v-e,u))
w.F(new C.cW(v,u,v,t))
w.F(new C.bE())
t=C.N()
t.r=A.c.j(f).gp(0)
this.a.aR(w,t)},
$S:668}
B.fPp.prototype={
$3(d,e,f){return new B.UH(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fPq.prototype={
$4(d,e,f,g){var w=x.Y
return new C.d_(e,!1,C.is(A.A,g,null,new C.bf(C.cH(A.cu,e,null),new C.bq(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:32}
B.dPk.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.dPj.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bYA(o):q.bAZ(o,p),m=x.p
p=C.a([C.qm(new C.nh(n,new C.cx(p,x.aC)),A.pV,C.rW(),A.bd,A.bd,new B.dPh())],m)
n=t.d
if(n){w=A.k.E(q.gRM(),12)<4
v=w?150:96
u=C.n(16)
m=C.a([A.at],m)
if(w)m.push(D.bA1)
else m.push(A.b7)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b0:A.aw,s,s,s,s,s,A.a5),s,9,s,s,s,s,s,9))
m.push(A.at)
p.push(C.ao(s,C.av(C.df(s,C.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ey,new C.o(A.w,s,s,u,s,s,A.n),A.ne,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uO)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.KA,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wu)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.KA,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aC(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dPi(q),s,s,s,s,s,s,!1,A.a6),s,s,0,0,s,s))
return C.bv(r,new C.an(A.W,s,A.b2,A.r,p,s),A.aq)},
$S:334}
B.dPh.prototype={
$2(d,e){var w=x.Y
return new C.d_(e,!1,C.is(A.A,d,null,new C.bf(e,new C.bq(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:388}
B.dPi.prototype={
$0(){var w=this.a
return w.m(new B.dPg(w))},
$S:0}
B.dPg.prototype={
$0(){return this.a.e=null},
$S:0}
B.dPf.prototype={
$0(){var w=this.a
return w.m(new B.dPe(w,this.b))},
$S:0}
B.dPe.prototype={
$0(){return this.a.e=A.d.cH(F.ka,this.b)},
$S:0}
B.dPd.prototype={
$0(){var w=this.a
return w.m(new B.dPc(w))},
$S:0}
B.dPc.prototype={
$0(){return this.a.e=0},
$S:0}
B.dP8.prototype={
$0(){var w=this.a
return w.m(new B.dP7(w))},
$S:0}
B.dP7.prototype={
$0(){return this.a.e=null},
$S:0}
B.dPb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.n(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.B(C.a([D.fFN,A.at,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eG,p,p,p,D.fi5,p,p,p),1),C.d(A.a.aX(A.o.u(C.dk(new C.T(Date.now(),0,!1))),2,"0")+":"+A.a.aX(A.o.u(C.h4(new C.T(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qz,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kX,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.bv7(w.gRM(),this.c.d,p),A.ax)],l)
o=w.e
if(o!=null){u=C.n(10)
t=C.I(A.aZ,A.q,1)
s=C.n(10)
o=C.p(p,C.B(C.a([C.aC(p,C.p(p,p,A.f,p,p,A.abD,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dPa(w),p,p,p,p,p,p,!1,A.a6),A.eg,C.p(p,p,A.f,p,p,A.abJ,p,12,p,p,p,p,p,12),A.eg,C.p(p,p,A.f,p,p,D.b1n,p,12,p,p,p,p,p,12),A.at,C.E(C.d(F.ka[o].a,p,1,A.a2,p,p,p,A.a8p,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cs,p,p,p,24,p,p,A.fr,p,p,p)
r=w.e
r.toString
v.push(C.bW(0,new C.D(D.bwM,C.p(p,C.bv(s,C.x(C.a([o,C.E(C.b3(p,p,p,new B.aeD(r,w.gRM(),p),A.f6),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.dhT,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.n(18)
t=C.I(A.aZ,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.D(A.jr,w.auP(F.ka[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.B(s,A.m,p,A.e,A.N,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lq,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bv(n,C.p(p,C.x(C.a([m,C.E(new C.an(A.W,p,A.b2,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,U.LM,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:334}
B.dPa.prototype={
$0(){var w=this.a
return w.m(new B.dP9(w))},
$S:0}
B.dP9.prototype={
$0(){return this.a.e=null},
$S:0}
B.ecn.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.ecm(w,d))},
$S:131}
B.ecm.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.h37(v)},
$S:0}
B.eco.prototype={
$0(){},
$S:0}
B.ecd.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.h37(v)
w.r.a8(0)
w.x=!1},
$S:0}
B.ece.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvw().r){C.jV()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.w2("click",s.c+s.d,60,0.4)
if(B.hsD(r.gvw(),q).b.a===r.gvw().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.w_("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.BN("bell",D.apE,700,0.45)
for(q=r.gvw().c,q=C.ec(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.v((A.o.E(t,7)+0.5)*p+w,(A.o.am(t,7)+0.5)*p+v),0))}}},
$S:0}
B.ech.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.as(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aC(A.c8,C.b3(s,s,s,new B.bgY(r.gvw(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ecf(r),s,s,s,!1,A.a6),C.ao(s,C.e1(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aQJ,s,s,s),C.d(""+u.a+"/"+r.gvw().c.a+" \u2605   mirrors "+w.a+"/"+r.gvw().r,s,s,s,s,s,s,R.a86,s,s,s)],t),A.m,s,A.hH,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fnC("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b0,C.a([new B.fj(A.j4,"Next level",new B.ecg(r),A.b0,s)],t)))
return new C.an(A.W,s,A.b2,A.r,w,s)},
$S:64}
B.ecf.prototype={
$1(d){return this.a.c7H(d.b)},
$S:51}
B.ecg.prototype={
$0(){var w=this.a
return w.ae_(w.d+1)},
$S:0}
B.eci.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grI(v))},
$S:0}
B.ecj.prototype={
$0(){var w=this.a
return w.ae_(w.d+1)},
$S:0}
B.eck.prototype={
$0(){var w=this.a
return w.ae_(w.d-1)},
$S:0}
B.ecl.prototype={
$0(){return this.a.ae_(this.b)},
$S:0}
B.diy.prototype={
$1(d){var w=this.b
return new C.v(this.a+(A.o.E(d,7)+0.5)*w,this.c+(A.o.am(d,7)+0.5)*w)},
$S:726}
B.diB.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.v(r,s):new C.v(r,r),p=new C.v(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.N()
u.r=(f?A.fX:A.aL).gp(0)
u.c=7
u.d=A.bT
r.bE(w,v,u)
w=t.ad(0,q)
v=t.ad(0,p)
u=C.N()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bT
r.bE(w,v,u)},
$S:1886}
B.diz.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:449}
B.diA.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:449}
B.ecG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.ecF(w,d))},
$S:131}
B.ecF.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.ecH.prototype={
$0(){},
$S:0}
B.ecr.prototype={
$1(d){return d===0},
$S:111}
B.ecA.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.u(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a8h,s,s,s)
w=r.z==="play"?A.k.dj(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.c7:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,R.a86,s,s,s)],v),A.m,s,A.hH,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dn:p
t=C.n(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.aZ,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.x(C.a([new C.D(D.bu5,w,s),C.E(C.B(C.a([C.E(new C.D(A.bR,C.x(C.a([t,A.am,C.d(q?"TARGET":"TARGET: "+r.gczk(),s,s,s,s,s,s,D.aRy,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.D(A.bR,C.x(C.a([C.E(C.b3(s,s,s,new B.bhc(r.f,s),A.f6),1),A.am,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aRy,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fnC("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fj(A.iM,"Start",new B.ecx(r),A.b0,s)],v)))}if(r.z==="result")w.push(B.fnC(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fj(A.j4,"Next colour",new B.ecy(r),A.b0,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fnC("Finished! "+q,u,A.b0,C.a([new B.fj(A.mC,"Play again",new B.ecz(r),A.b0,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:64}
B.ecx.prototype={
$0(){var w=this.a
return w.m(new B.ect(w))},
$S:0}
B.ect.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awY()},
$S:0}
B.ecy.prototype={
$0(){var w=this.a
return w.m(w.gc7F())},
$S:0}
B.ecz.prototype={
$0(){var w=this.a
return w.m(new B.ecs(w))},
$S:0}
B.ecs.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awY()},
$S:0}
B.ecB.prototype={
$1(d){var w=this.a
return w.m(new B.ecw(w,d))},
$S:6}
B.ecw.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.ecC.prototype={
$1(d){var w=this.a
return w.m(new B.ecv(w,d))},
$S:6}
B.ecv.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.ecD.prototype={
$1(d){var w=this.a
return w.m(new B.ecu(w,d))},
$S:6}
B.ecu.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.ecE.prototype={
$0(){var w=this.a
return w.m(w.gc7G())},
$S:0}
B.fjr.prototype={
$0(){return D.e48},
$S:z+70}
B.fjs.prototype={
$0(){return D.dCl},
$S:z+71}
B.fjt.prototype={
$0(){return D.dyT},
$S:z+72}
B.fju.prototype={
$0(){return D.dBL},
$S:z+73}
B.fjv.prototype={
$0(){return D.dGI},
$S:z+74}
B.fjw.prototype={
$0(){return D.e_S},
$S:z+75}
B.fjx.prototype={
$0(){return D.e23},
$S:z+76}
B.fjy.prototype={
$0(){return D.dG1},
$S:z+77}
B.cgB.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.cgC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hw5(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aS(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dp,16)],t)
n=A.c.j(0.85)
j.push(C.aC(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.y(r.c,m,M.TW,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lG,m,m,C.x(C.a([new C.y(r.a,m,D.fgH,m,m,m,m,m,m,m,m,m),A.cV,new C.y(r.b,m,new C.H(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.N,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bn(q,q,q,q),p,new C.a9(A.az,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cgA(d,r),m,m,m,m,m,m,!1,A.a6))}return C.bT(A.bA,j,A.bq,14,14)},
$S:169}
B.cgA.prototype={
$0(){return C.a5(this.a,!1).cm(C.ea(new B.cgz(this.b),!1,null,x.H))},
$S:0}
B.cgz.prototype={
$1(d){return this.a.f.$0()},
$S:40}
B.eLW.prototype={
$0(){var w=this.a
return w.w=w.d[w.b4q(w.f)]},
$S:0}
B.eLS.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cH.aj()*7},
$S:0}
B.eLR.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.c9)
w.w=""},
$S:0}
B.eLU.prototype={
$0(){var w=this.a
return w.m(new B.eLT(w,this.b))},
$S:0}
B.eLT.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
B.eLV.prototype={
$1(d){return this.a.aZI(0)},
$S:2}
B.dVC.prototype={
$0(){return B.BN("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dVD.prototype={
$0(){},
$S:0}
B.dVx.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dVz.prototype={
$0(){return this.a.aZK(this.b)},
$S:0}
B.dVA.prototype={
$0(){var w=this.a
return w.m(new B.dVy(w))},
$S:0}
B.dVy.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dVB.prototype={
$0(){var w=this.a
return w.aZK(w.d)},
$S:0}
B.dGt.prototype={
$2(d,e){return d+e},
$S:89}
B.dGu.prototype={
$0(){},
$S:0}
B.dGo.prototype={
$2(d,e){return d+e},
$S:89}
B.dGr.prototype={
$0(){var w=this.a
return w.m(new B.dGq(w,this.b))},
$S:0}
B.dGq.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dGs.prototype={
$0(){var w=this.a
return w.m(new B.dGp(w))},
$S:0}
B.dGp.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dST.prototype={
$0(){return B.qV(this.b,this.a.d,"drawing")},
$S:0}
B.dSU.prototype={
$1(d){var w=this.a
return w.m(new B.dSS(w,d))},
$S:44}
B.dSS.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aI1(u,v,t))},
$S:0}
B.dSV.prototype={
$1(d){var w=this.a
return w.m(new B.dSR(w,d))},
$S:18}
B.dSR.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dSW.prototype={
$1(d){var w=this.a
return w.m(new B.dSQ(w,d))},
$S:23}
B.dSQ.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aI1(u,v,t))},
$S:0}
B.dSX.prototype={
$0(){var w=this.a
return w.m(new B.dSP(w,this.b))},
$S:0}
B.dSP.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dSY.prototype={
$1(d){var w=this.a
return w.m(new B.dSO(w,d))},
$S:6}
B.dSO.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dSZ.prototype={
$0(){var w=this.a
return w.m(new B.dSN(w))},
$S:0}
B.dSN.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dT_.prototype={
$0(){var w=this.a
return w.m(new B.dSM(w))},
$S:0}
B.dSM.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dT0.prototype={
$0(){var w=this.a
return w.m(A.d.grI(w.e))},
$S:0}
B.dT1.prototype={
$0(){var w=this.a
return w.m(new B.dSL(w))},
$S:0}
B.dSL.prototype={
$0(){var w=this.a
w.x=D.awv[A.o.E(A.d.cH(D.awv,w.x)+1,4)]},
$S:0}
B.ei2.prototype={
$0(){return this.a.f.L(0,this.b)},
$S:0}
B.ei3.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.BN("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.ei1(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.BN("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.ei1.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
B.ei4.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.ei0(w))},
$S:11}
B.ei0.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
B.ei8.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aC(w,C.mG(new B.ei6(v,e),w,A.bd,A.pV,w,w,new C.bq(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ei7(v,e),w,w,w,w,w,w,!1,A.a6)},
$S:77}
B.ei7.prototype={
$0(){return this.a.c8C(this.b)},
$S:0}
B.ei6.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dp(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fF(3.141592653589793*e)
m=C.n(16)
w=o?p:D.bZI
if(o)v=q.a.r.t(0,q.b)?A.b0.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b0:A.aZ,A.q,1)
if(o){r=C.dp()
r.fF(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fw(A.A,C.d(u[t],p,p,p,p,p,p,D.fe2,p,p,p),p,r,!0)
u=r}else u=D.fyP
return C.fw(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:134}
B.ei9.prototype={
$0(){var w=this.a
return w.m(new B.ei5(w,this.b))},
$S:0}
B.ei5.prototype={
$0(){var w=this.a
w.d=this.b.a
w.as9()},
$S:0}
B.eia.prototype={
$0(){var w=this.a
return w.m(w.gbJI())},
$S:0}
B.esW.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.esX.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.esU.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.esV.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.esT(w))},
$S:11}
B.esT.prototype={
$0(){return this.a.f=-1},
$S:0}
B.esY.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.esZ.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.et_.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aZJ()},
$S:11}
B.et0.prototype={
$0(){return this.a.c8I(this.b)},
$S:0}
B.eHd.prototype={
$1(d){return C.u(d.h(0,1))+","},
$S:68}
B.eHm.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.D(A.kW,C.B(C.a([v,A.ab,new C.dq(1,A.co,C.eQ(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e_),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1888}
B.eHi.prototype={
$1(d){return this.a.m(new B.eHh())},
$S:2}
B.eHh.prototype={
$0(){},
$S:0}
B.eHj.prototype={
$0(){var w=this.a
return w.m(new B.eHg(w,this.b))},
$S:0}
B.eHg.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eHk.prototype={
$1(d){var w=this.a
return w.m(new B.eHf(w,d))},
$S:6}
B.eHf.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eHl.prototype={
$0(){var w=this.a
return w.m(new B.eHe(w))},
$S:0}
B.eHe.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.egI.prototype={
$0(){},
$S:0}
B.egJ.prototype={
$0(){},
$S:0}
B.egB.prototype={
$0(){var w=this.a
return w.m(new B.egA(w))},
$S:0}
B.egA.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a8g("hat",0.6)},
$S:0}
B.egC.prototype={
$0(){var w=this.a
return w.m(new B.egz(w))},
$S:0}
B.egz.prototype={
$0(){this.a.y=1.1
B.lk("bell",36,200,0.4)},
$S:0}
B.egD.prototype={
$0(){var w=this.a
return w.m(new B.egy(w))},
$S:0}
B.egy.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.av(Math.max(v,u)-t+1)
w.as=u
B.lk("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
B.egE.prototype={
$0(){var w=this.a
return w.m(new B.egx(w,this.b))},
$S:0}
B.egx.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.egF.prototype={
$1(d){var w=this.a
return w.m(new B.egw(w,d))},
$S:6}
B.egw.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e5(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.egG.prototype={
$1(d){var w=this.a
return w.m(new B.egv(w,d))},
$S:6}
B.egv.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.egH.prototype={
$1(d){var w=this.a
return w.m(new B.egu(w,d))},
$S:6}
B.egu.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.ctw.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.ctx.prototype={
$0(){var w=this.a
return B.hss(this.b,w.c,w.e,w.d)},
$S:0}
B.fTe.prototype={
$1(d){var w,v=null,u=C.n(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.f6s,v,v,v)
return C.em(C.a([C.bK(!1,D.fo2,v,v,!0,v,v,new B.fTd(d),v,v)],x.p),v,v,F.n9,w,v,v,v,new C.b7(u,new C.az(s,1,A.q,-1)),t,v)},
$S:21}
B.fTd.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.cts.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.ctr.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.cty.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.ctt.prototype={
$0(){var w=this.a
A.d.W(w.fu$,this.b.bj())
if(w.c!=null)this.c.$0()},
$S:0}
B.ctv.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.l7$.a)/1e6,0,0.04)
w.l7$=d
w.fX$=A.o.am(v,1000)
w.lD(u)
if(w.c!=null)w.m(new B.ctu())},
$S:8}
B.ctu.prototype={
$0(){},
$S:0}
B.cgx.prototype={
$0(){var w=this
return B.lk(w.a,w.b,w.c,w.d)},
$S:1}
B.dYk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dYj(w,d))},
$S:z+79}
B.dYj.prototype={
$0(){return this.a.ctu(this.b)},
$S:0}
B.dXN.prototype={
$0(){var w,v,u,t=this.a,s=J.a4(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:692}
B.dXL.prototype={
$0(){return this.a.id=D.a3n},
$S:0}
B.dXM.prototype={
$0(){var w=this.b.a,v=C.S(w).k("a_<1>")
v=C.pj(new C.a_(w,new B.dXK(this.c),v),6,v.k("J.E"))
w=C.C(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dXK.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dXJ.prototype={
$1(d){var w=null,v=C.cc(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ag)
return C.em(C.a([C.bK(!1,A.po,w,w,!0,w,w,new B.dXI(d),w,w)],x.p),w,w,F.n9,v,w,w,w,w,D.fyU,w)},
$S:21}
B.dXI.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
B.dY5.prototype={
$0(){return B.qV(this.b,this.a.d,"earth")},
$S:0}
B.dY6.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.as(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gW2()
r=p.z
o=C.a([C.aC(A.c8,C.b3(q,q,q,new B.bfo(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dXU(p),new B.dXV(p),new B.dXW(p),q,q,q,q,q,q,q,new B.dXX(p),q,q,q,!1,A.a6)],x.p)
if(p.r==null)o.push(A9.acl)
w=this.b
if(w!=null)o.push(C.ao(8,p.c9j(w),q,q,10,10,q,q))
return new C.ey(new C.an(A.W,q,A.b2,A.r,o,q),p.d)},
$S:197}
B.dXV.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:261}
B.dXW.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gW2()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:220}
B.dXU.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gW2()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:759}
B.dXX.prototype={
$1(d){var w=this.a,v=w.c9m(d.b)
if(v!=null)w.m(new B.dXO(w,v))
else w.m(new B.dXP(w))},
$S:51}
B.dXO.prototype={
$0(){return this.a.axr(this.b)},
$S:0}
B.dXP.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dY7.prototype={
$0(){var w=this.a
w.e.bP(0,A.c9)
w.m(new B.dXT(w,this.b))},
$S:0}
B.dXT.prototype={
$0(){var w=this.a
w.id=D.a3n
w.axr(this.b)},
$S:0}
B.dYb.prototype={
$0(){var w=this.a
return w.m(new B.dY4(w))},
$S:0}
B.dY4.prototype={
$0(){var w=this.a
w.fx=null
w.atk(15,w.y,1)},
$S:0}
B.dYc.prototype={
$0(){var w=this.a
return w.m(new B.dY3(w,this.b))},
$S:0}
B.dY3.prototype={
$0(){var w=this.b.b
return this.a.atk(w.a,w.b,w.c)},
$S:0}
B.dYd.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dY2(w,v))},
$S:0}
B.dY2.prototype={
$0(){var w=this.b.a
return this.a.axr(w[A.cH.av(w.length)])},
$S:0}
B.dYe.prototype={
$1(d){var w=this.a
return w.m(new B.dY1(w,d))},
$S:6}
B.dY1.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dYf.prototype={
$1(d){var w=this.a
return w.m(new B.dY0(w,d))},
$S:6}
B.dY0.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dYg.prototype={
$1(d){var w=this.a
return w.m(new B.dY_(w,d))},
$S:6}
B.dY_.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dYh.prototype={
$0(){var w=this.a
return w.m(new B.dXZ(w))},
$S:0}
B.dXZ.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dYi.prototype={
$0(){var w=this.a
return w.m(new B.dXY(w))},
$S:0}
B.dXY.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dY8.prototype={
$0(){var w=this.a
return w.m(new B.dXS(w))},
$S:0}
B.dXS.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dY9.prototype={
$0(){var w=this.a
return w.m(new B.dXR(w))},
$S:0}
B.dXR.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dYa.prototype={
$0(){var w=this.a
return w.m(new B.dXQ(w))},
$S:0}
B.dXQ.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dXH.prototype={
$2(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQ9,w,w,w),A.uR,C.d(e,w,2,A.a2,w,w,w,A.Ud,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:130}
B.dXG.prototype={
$0(){var w=this.a
return w.m(new B.dXF(w))},
$S:0}
B.dXF.prototype={
$0(){return this.a.fx=null},
$S:0}
B.deh.prototype={
$0(){var w=null,v=C.fZ(w,w,w,w,C.d0(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d0K,w,w),this.a),A.a4,A.c6,w,A.dO,A.c3)
v.en()
return v},
$S:343}
B.dei.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.v(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1889}
B.fjk.prototype={
$0(){return D.dEi},
$S:z+81}
B.fjl.prototype={
$0(){return D.e1M},
$S:z+82}
B.fjm.prototype={
$0(){return D.dEk},
$S:z+83}
B.fjn.prototype={
$0(){return D.dyF},
$S:z+84}
B.fjo.prototype={
$0(){return D.dEg},
$S:z+85}
B.fjp.prototype={
$0(){return D.e_T},
$S:z+86}
B.fjq.prototype={
$0(){return D.e_R},
$S:z+87}
B.eI6.prototype={
$0(){return C.a5(this.a,!1).ld()},
$S:0}
B.eI7.prototype={
$0(){var w=this.a
return w.m(new B.eI5(w))},
$S:0}
B.eI5.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaSo()+1,16)},
$S:0}
B.eI8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hw4(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aS(18,18)
q=s.d
p=new C.az(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bjo],u)
k.push(C.aC(n,C.p(n,C.x(C.a([C.X(s.c,q,n,n,n,30),A.O,new C.y(s.a,n,D.faZ,n,A.L,n,n,n,n,2,n,n),A.cV,new C.y(s.b,n,D.fg5,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b9,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bn(r,r,r,r),n,new C.a9(A.az,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cp,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eI4(d,s),n,n,n,n,n,n,!1,A.a6))}return C.bT(A.fK,k,A.bq,10,10)},
$S:169}
B.eI4.prototype={
$0(){return C.a5(this.a,!1).cm(C.ea(new B.eI3(this.b),!1,null,x.H))},
$S:0}
B.eI3.prototype={
$1(d){return this.a.e.$0()},
$S:40}
B.eA9.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.eAk.prototype={
$0(){return B.qV(this.b,this.a.d,"solar-system")},
$S:0}
B.eAl.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.as(e.b,e.d)
u.ch=t
t=C.a([C.aC(A.c8,C.b3(v,v,v,new B.brU(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eAh(u),new B.eAi(u),v,v,v,v,v,v,v,new B.eAj(u),v,v,v,!1,A.a6)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c9o(w),v,v,10,10,v,v))
return new C.ey(new C.an(A.W,v,A.b2,A.r,t,v),u.d)},
$S:197}
B.eAh.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:261}
B.eAi.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:220}
B.eAj.prototype={
$1(d){var w=this.a,v=w.c9r(d.b)
if(v!=null)w.b_4(v)},
$S:51}
B.eAm.prototype={
$0(){var w=this.a
return w.m(new B.eAg(w))},
$S:0}
B.eAg.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.eAn.prototype={
$0(){return this.a.b_4(this.b)},
$S:0}
B.eAo.prototype={
$1(d){var w=this.a
return w.m(new B.eAf(w,d))},
$S:6}
B.eAf.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.eAp.prototype={
$1(d){var w=this.a
return w.m(new B.eAe(w,d))},
$S:6}
B.eAe.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eAq.prototype={
$0(){var w=this.a
return w.m(new B.eAd(w))},
$S:0}
B.eAd.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.eAr.prototype={
$0(){var w=this.a
return w.m(new B.eAc(w))},
$S:0}
B.eAc.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eAs.prototype={
$0(){var w=this.a
return w.m(new B.eAb(w))},
$S:0}
B.eAb.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.eAt.prototype={
$0(){var w=this.a
return w.m(new B.eAa(w))},
$S:0}
B.eAa.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eA8.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ab(d/365.25,w)+" Earth years"}else w=A.k.ab(d,0)+" Earth days"
return w},
$S:277}
B.eA7.prototype={
$2(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQ9,w,w,w),A.uR,C.d(e,w,2,A.a2,w,w,w,A.Ud,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:130}
B.eA6.prototype={
$0(){var w=this.a
return w.m(new B.eA5(w))},
$S:0}
B.eA5.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.f1u.prototype={
$0(){var w=null,v=C.fZ(w,w,w,w,C.d0(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.Qs,w,w),this.a),A.a4,A.c6,w,A.dO,A.c3)
v.en()
return v},
$S:343}
B.f1v.prototype={
$1(d){return d.c>0},
$S:z+10}
B.f1w.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dYo.prototype={
$0(){},
$S:0}
B.dYR.prototype={
$1(d){return d!=null},
$S:365}
B.dYD.prototype={
$0(){var w=this.a
return w.m(new B.dYu(w,this.b))},
$S:0}
B.dYu.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dYE.prototype={
$0(){var w=this.a
return w.m(new B.dYt(w))},
$S:0}
B.dYt.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dYF.prototype={
$0(){var w=this.a
return w.m(new B.dYC(w))},
$S:0}
B.dYC.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dYJ.prototype={
$0(){var w=this.a
return w.m(new B.dYB(w))},
$S:0}
B.dYB.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dYK.prototype={
$1(d){var w=this.a
return w.m(new B.dYA(w,d))},
$S:6}
B.dYA.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dYL.prototype={
$0(){var w=this.a
return w.m(w.gcwI())},
$S:0}
B.dYM.prototype={
$1(d){var w=this.a
return w.m(new B.dYz(w,d))},
$S:6}
B.dYz.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dYN.prototype={
$1(d){var w=this.a
return w.m(new B.dYy(w,d))},
$S:6}
B.dYy.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dYO.prototype={
$1(d){var w=this.a
return w.m(new B.dYx(w,d))},
$S:6}
B.dYx.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dYP.prototype={
$1(d){var w=this.a
return w.m(new B.dYw(w,d))},
$S:6}
B.dYw.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dYQ.prototype={
$0(){var w=this.a
return w.m(new B.dYv(w))},
$S:0}
B.dYv.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dYG.prototype={
$0(){var w=this.a
return w.m(new B.dYs(w))},
$S:0}
B.dYs.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dYH.prototype={
$0(){var w=this.a
return w.m(new B.dYr(w))},
$S:0}
B.dYr.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dYI.prototype={
$0(){var w=this.a
return w.m(new B.dYq(w))},
$S:0}
B.dYq.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dYn.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bW(0,C.c0(g,new C.o(D.bhU,g,g,C.n(20),g,g,A.n),A.bf),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.z_[q]
n=C.b0(o.d)
o=C.x(C.a([new C.y(o.a,g,new C.H(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.y(C.u(D.z_[q].b)+" m/s\xb2",g,D.ffs,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dn,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(X.NA,C.b0(D.z_[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.z_[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.z_[q].d).j(0.6),A.J,10)],u),g,A.a5),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.z_[q].d).j(0.6),g,g,g,3,g,A.fr,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.x(C.a([j,A.au,new C.y(i,g,A.rZ,g,g,g,g,g,g,g,g,g),new C.y(h,g,D.f7E,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d7(v,new B.dYm()))a1.push(D.b6i)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:64}
B.dYm.prototype={
$1(d){return d==null},
$S:365}
B.dYp.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.n(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.df(v,v,v,v,A.bd,new C.o(v,v,v,C.n(8),v,new C.a9(A.a3,A.a8,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.il,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ab(r,1):B.GR(r)
u=u.ax*9.81/s
u=u<10?A.k.ab(u,2):A.k.ab(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.fdN,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:64}
B.dYl.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.baA(new C.v(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.ax)
o=A.w.j(0.55)
p=C.n(14)
q=C.I(A.bD,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b0
else u=A.a.t(u,"escapes")?A.aO:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ab(Math.sqrt(58.86870477034412),1)
s=A.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.GR(A.k.D(r.cx.gcn()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b2,A.r,C.a([n,C.ao(v,C.p(v,C.x(C.a([u,A.bC,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aRP,v,v,v)],w),A.F,v,A.e,A.N,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bR,v,v,v),v,v,12,12,8,v)],w),v)},
$S:64}
B.et3.prototype={
$0(){return B.qV(this.b,this.a.d,"size-compare")},
$S:0}
B.et4.prototype={
$0(){var w=this.a
return w.m(new B.et2(w,this.b))},
$S:0}
B.et2.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.et5.prototype={
$0(){var w=this.a
return w.m(new B.et1(w,this.b))},
$S:0}
B.et1.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.f_E.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.N()
w.r=f.j(0.2).gp(0)
w.z=new C.hC(A.G,Math.max(2,e*0.18))
u.af(d,e*1.12,w)
w=C.N()
v=C.aq(f,A.w,0.6)
v.toString
w.sar(new C.bU(P.pu,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a2B,null).aw(0,C.bV(d,e)))
u.af(d,e,w)},
$S:724}
B.dFV.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dFJ.prototype={
$1(d){return d.b},
$S:z+60}
B.dFK.prototype={
$0(){return B.qV(this.b,this.a.d,"black-hole")},
$S:0}
B.dFL.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.as(e.b,e.d)
p.Q=o
o=C.aC(A.c8,C.b3(q,q,q,new B.b9Z(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dFH(p),q,q,q,q,q,q,q,q,q,new B.dFI(p),q,q,q,q,!1,A.a6)
w=A.w.j(0.55)
v=C.n(14)
u=C.I(A.bD,A.q,1)
t=p.r
if(t<1000)t=A.k.ab(t,t<10?1:0)+" Suns"
else t=B.fwK(t)+" Suns"
t=p.aeG("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.B(C.a([t,p.aeG("EDGE WIDTH",(s<100?A.k.ab(s,1):B.GR(s))+" km"),p.aeG("TIME",A.k.ab(this.b*100,0)+"%"),p.aeG("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bR,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.eiv)
return new C.ey(new C.an(A.W,q,A.b2,A.r,r,q),p.d)},
$S:197}
B.dFI.prototype={
$1(d){return this.a.b_5(d.b)},
$S:23}
B.dFH.prototype={
$1(d){if(A.cH.aj()<0.12)this.a.b_5(d.b)},
$S:18}
B.dFN.prototype={
$1(d){var w=this.a
return w.m(new B.dFG(w,d))},
$S:6}
B.dFG.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dFO.prototype={
$0(){var w=this.a
return w.m(new B.dFF(w))},
$S:0}
B.dFF.prototype={
$0(){return this.a.r=10},
$S:0}
B.dFP.prototype={
$0(){var w=this.a
return w.m(new B.dFE(w))},
$S:0}
B.dFE.prototype={
$0(){return this.a.r=21},
$S:0}
B.dFQ.prototype={
$0(){var w=this.a
return w.m(new B.dFD(w))},
$S:0}
B.dFD.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dFR.prototype={
$0(){var w=this.a
return w.m(new B.dFC(w))},
$S:0}
B.dFC.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dFS.prototype={
$0(){var w=this.a
return w.m(new B.dFB(w))},
$S:0}
B.dFB.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dFT.prototype={
$0(){var w=this.a
return w.m(new B.dFA(w))},
$S:0}
B.dFA.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dFU.prototype={
$0(){var w=this.a
return w.m(new B.dFz(w))},
$S:0}
B.dFz.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dFM.prototype={
$0(){var w=this.a
return w.m(new B.dFy(w))},
$S:0}
B.dFy.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
B.dWW.prototype={
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
e[r]=new C.v(p,i)
q=d[r]
d[r]=new C.v(q.a+p*s,q.b+i*s)}},
$S:1890}
B.dWM.prototype={
$0(){return B.qV(this.b,this.a.d,"galaxy")},
$S:0}
B.dWN.prototype={
$0(){var w=this.a
return w.m(new B.dWL(w,this.b))},
$S:0}
B.dWL.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.a_3()},
$S:0}
B.dWO.prototype={
$0(){var w=this.a
return w.m(new B.dWK(w))},
$S:0}
B.dWK.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.a_3()}w.cwz()},
$S:0}
B.dWP.prototype={
$1(d){var w=this.a
return w.m(new B.dWJ(w,d))},
$S:6}
B.dWJ.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.a_3()},
$S:0}
B.dWQ.prototype={
$1(d){var w=this.a
return w.m(new B.dWI(w,d))},
$S:6}
B.dWI.prototype={
$0(){var w=this.a
w.r=this.b
w.a_3()},
$S:0}
B.dWR.prototype={
$1(d){var w=this.a
return w.m(new B.dWH(w,d))},
$S:6}
B.dWH.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dWS.prototype={
$1(d){var w=this.a
return w.m(new B.dWG(w,d))},
$S:6}
B.dWG.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dWT.prototype={
$0(){var w=this.a
return w.m(new B.dWF(w))},
$S:0}
B.dWF.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dWU.prototype={
$0(){var w=this.a
return w.m(new B.dWE(w))},
$S:0}
B.dWE.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dWV.prototype={
$0(){var w=this.a
return w.m(new B.dWD(w))},
$S:0}
B.dWD.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dbp.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.v((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1891}
B.esi.prototype={
$0(){return B.qV(this.b,this.a.d,"seasons-moon")},
$S:0}
B.esj.prototype={
$0(){var w=this.a
return w.m(new B.esh(w))},
$S:0}
B.esh.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.esk.prototype={
$0(){var w=this.a
return w.m(new B.esg(w))},
$S:0}
B.esg.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.esl.prototype={
$0(){var w=this.a
return w.m(new B.esf(w))},
$S:0}
B.esf.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.esm.prototype={
$0(){var w=this.a
return w.m(new B.ese(w))},
$S:0}
B.ese.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.esn.prototype={
$1(d){var w=this.a
return w.m(new B.esd(w,d))},
$S:6}
B.esd.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.eso.prototype={
$1(d){var w=this.a
return w.m(new B.esc(w,d))},
$S:6}
B.esc.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.esp.prototype={
$1(d){var w=this.a
return w.m(new B.esb(w,d))},
$S:6}
B.esb.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.esq.prototype={
$1(d){var w=this.a
return w.m(new B.esa(w,d))},
$S:6}
B.esa.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aM2.prototype
w.bw1=w.q
w=B.aL4.prototype
w.bv1=w.q
w=B.aL5.prototype
w.bv2=w.q
w=B.aLa.prototype
w.bv7=w.q
w=B.aMU.prototype
w.bx_=w.q
w=B.aM0.prototype
w.bw_=w.q
w=B.aM9.prototype
w.bw8=w.q
w=B.aMf.prototype
w.bwe=w.q
w=B.aL8.prototype
w.bv5=w.q
w=B.aLY.prototype
w.bvX=w.q
w=B.aMc.prototype
w.bwb=w.q
w=B.aLW.prototype
w.bvV=w.q
w=B.aLX.prototype
w.bvW=w.q
w=B.aLm.prototype
w.bvk=w.q
w=B.aL0.prototype
w.buY=w.q
w=B.aLu.prototype
w.bvs=w.q
w=B.axx.prototype
w.bs9=w.q
w=B.axy.prototype
w.bsa=w.q
w=B.aJx.prototype
w.btq=w.q
w=B.aLj.prototype
w.bvg=w.q
w=B.aLL.prototype
w.bvK=w.q
w=B.aLM.prototype
w.bvL=w.q
w=B.aL6.prototype
w.bv3=w.q
w=B.aLp.prototype
w.bvn=w.q
w=B.aLU.prototype
w.bvT=w.q
w=B.aMn.prototype
w.bwm=w.q
w=B.aLv.prototype
w.bvu=w.q
w=B.aLw.prototype
w.bvv=w.q
w=B.aLx.prototype
w.bvw=w.q
w=B.aM5.prototype
w.bw4=w.q
w=B.aM8.prototype
w.bw7=w.q
w=B.aL3.prototype
w.bv0=w.q
w=B.aLs.prototype
w.bvq=w.q
w=B.aM4.prototype
w.bw3=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aEb.prototype,"gawj","c4r",0)
var r
v(r=B.aCB.prototype,"gccP","ccQ",35)
w(r,"gc5_","aYo",0)
w(B.aCE.prototype,"gc6H","c6I",0)
u(B.aCV.prototype,"gc6N","c6O",52)
w(r=B.aHb.prototype,"gcwf","cwg",0)
w(r,"gcjz","ag5",0)
w(r,"gche","chf",0)
w(r,"gc6M","adH",3)
w(r=B.aEa.prototype,"gbGQ","a9b",3)
w(r,"gcgw","b0L",0)
w(r,"gckh","agd",3)
t(r,"gc6Q","adI",3)
w(B.aEq.prototype,"gbYh","bYi",0)
w(r=B.aE2.prototype,"gcw9","cwa",0)
w(r,"gbHa","bHb",0)
w(r=B.aCD.prototype,"gb5_","azX",0)
v(r,"gc6W","Zr",54)
w(r,"gc6V","adK",3)
v(r=B.aE1.prototype,"gcmg","ayF",58)
v(r,"gcsI","azS",15)
w(r,"gbLa","aQW",0)
v(r=B.aE_.prototype,"gcDw","aji",15)
t(r,"gc7f","awT",0)
w(r,"gcoD","coE",0)
v(r=B.aD6.prototype,"gc7g","c7h",90)
w(r,"gc7i","c7j",0)
t(r=B.a4p.prototype,"grI","a8",0)
v(r,"gcTm","an5",1)
v(r,"gcPS","LG",1)
w(r,"gcVz","bi4",0)
s(B.aiF.prototype,"gc7n",0,5,null,["$5"],["qn"],64,0,0)
w(r=B.aD7.prototype,"gc7o","c7p",0)
w(r,"gcn6","agA",3)
w(r,"gcd4","aeT",3)
w(r,"gcuj","ahG",3)
w(r=B.aDM.prototype,"gc7F","awY",0)
w(r,"gc7G","aZm",0)
w(r=B.aED.prototype,"gc8D","c8E",0)
t(r,"gc8B","aZI",0)
w(B.aDW.prototype,"gbJI","as9",0)
t(B.aEh.prototype,"gc8F","c8G",0)
v(r=B.aDi.prototype,"gc9k","c9l",78)
w(r,"gbOO","bOP",0)
w(r=B.aDj.prototype,"gcwI","cwJ",0)
w(r,"gc9p","c9q",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aD,[B.ajS,B.G5,B.uS,B.aS_,B.a33,B.ba1,B.c1C,B.y7,B.Cn,B.no,B.baK,B.Az,B.bsC,B.q7,B.qN,B.Cr,B.Zf,B.aeK,B.a0u,B.CB,B.abD,B.abU,B.adQ,B.FR,B.bls,B.PU,B.a_M,B.abK,B.acc,B.FN,B.ad1,B.adx,B.tl,B.b9C,B.aRQ,B.ed,B.ty,B.aai,B.abp,B.a4p,B.mC,B.baL,B.fP,B.m9,B.aWt,B.btX,B.aI1,B.mF,B.ab4,B.ab5,B.v5,B.P8,B.y5,B.P7,B.btS,B.PC,B.aeP])
u(C.i0,[B.fz4,B.foW,B.fvQ,B.fvR,B.fz1,B.fz2,B.e9p,B.e9I,B.epO,B.epl,B.epm,B.epn,B.epo,B.epp,B.epq,B.epr,B.eps,B.epj,B.epk,B.epi,B.epJ,B.epK,B.epL,B.dG_,B.dG1,B.dG4,B.dGf,B.c1D,B.c1E,B.fiy,B.fiz,B.fiA,B.fiH,B.fiI,B.fiJ,B.dIx,B.dIe,B.dIy,B.dI9,B.dI4,B.dI6,B.dIc,B.dIp,B.dIn,B.dIo,B.dIm,B.dIj,B.dIl,B.f_8,B.eZQ,B.eZX,B.f_5,B.eZK,B.dif,B.dig,B.dic,B.did,B.die,B.dih,B.dii,B.dij,B.dik,B.dil,B.dim,B.din,B.dio,B.dip,B.eoK,B.eoL,B.eoM,B.eoN,B.eoI,B.eoJ,B.epe,B.eoR,B.eoT,B.eoD,B.epa,B.ep8,B.ep9,B.ep7,B.ep6,B.eoF,B.eAU,B.eAS,B.eAG,B.eAK,B.eAF,B.eAL,B.eAM,B.eAQ,B.eHv,B.eHB,B.elk,B.ell,B.el6,B.el7,B.el5,B.ela,B.elc,B.eld,B.eGV,B.eGW,B.eGU,B.eGI,B.eGJ,B.eGH,B.eGA,B.eGB,B.eGP,B.eGQ,B.eGR,B.eGS,B.eGT,B.dHG,B.dHH,B.dHI,B.dHz,B.dHC,B.cMK,B.egO,B.ehc,B.egS,B.eh_,B.eh0,B.egZ,B.eh7,B.ekO,B.ekT,B.ekc,B.ejV,B.ek6,B.ek4,B.ek2,B.ek3,B.ek1,B.dQr,B.dQf,B.dQh,B.dQp,B.dQk,B.dTg,B.dT8,B.dT9,B.dTa,B.d5s,B.d5u,B.d5t,B.dE3,B.dE4,B.dDX,B.dDV,B.cFh,B.dXj,B.dXk,B.dXf,B.dXg,B.dds,B.ddt,B.dI2,B.dHL,B.dHU,B.dHV,B.dI_,B.dI0,B.bMA,B.bML,B.bMG,B.bMM,B.bMO,B.bMB,B.bMz,B.bMT,B.bMH,B.bMK,B.bMJ,B.bMI,B.bHn,B.fKJ,B.fKM,B.fKK,B.bH4,B.bH_,B.bGZ,B.bHm,B.bHe,B.bHf,B.bHd,B.bHg,B.bGP,B.bGR,B.bGN,B.bGO,B.bGF,B.bGG,B.fiK,B.fiL,B.fiM,B.fix,B.fiN,B.fiw,B.fiO,B.fiB,B.fiv,B.fiC,B.fiu,B.fiD,B.fit,B.fiE,B.fir,B.fis,B.fiF,B.fip,B.fiq,B.fiG,B.fio,B.dTx,B.dTy,B.dTn,B.dTj,B.dTw,B.dTB,B.cCO,B.fPp,B.fPq,B.ecn,B.ecf,B.diy,B.diB,B.ecG,B.ecr,B.ecB,B.ecC,B.ecD,B.cgz,B.eLV,B.dSU,B.dSV,B.dSW,B.dSY,B.ei6,B.eHd,B.eHm,B.eHi,B.eHk,B.egF,B.egG,B.egH,B.fTe,B.ctv,B.dYk,B.dXK,B.dXJ,B.dXV,B.dXW,B.dXU,B.dXX,B.dYe,B.dYf,B.dYg,B.eI3,B.eAh,B.eAi,B.eAj,B.eAo,B.eAp,B.eA8,B.f1v,B.f1w,B.dYR,B.dYK,B.dYM,B.dYN,B.dYO,B.dYP,B.dYm,B.f_E,B.dFV,B.dFJ,B.dFI,B.dFH,B.dFN,B.dWW,B.dWP,B.dWQ,B.dWR,B.dWS,B.dbp,B.esn,B.eso,B.esp,B.esq])
u(C.kn,[B.fz3,B.e9u,B.e9s,B.epu,B.epH,B.dI5,B.dIs,B.dOp,B.f_b,B.f_c,B.eZP,B.f_1,B.f_2,B.eZY,B.f_3,B.eZJ,B.eoG,B.eoH,B.epd,B.ep5,B.eoV,B.eHu,B.el9,B.eGL,B.dHy,B.dHD,B.eh3,B.ekS,B.fzm,B.ejZ,B.ejW,B.ek8,B.dql,B.bG9,B.ftn,B.dDR,B.dDZ,B.bMN,B.bMP,B.bMR,B.bMC,B.bME,B.bHo,B.clY,B.fKL,B.bGY,B.bHk,B.bHj,B.dTv,B.cCP,B.dPj,B.dPh,B.dPb,B.ech,B.diz,B.diA,B.ecA,B.cgC,B.dGt,B.dGo,B.ei8,B.dY6,B.dXH,B.dei,B.eI8,B.eAl,B.eA7,B.dYn,B.dYp,B.dYl,B.dFL])
u(C.ag,[B.Vq,B.VT,B.Ug,B.Um,B.Nl,B.aHa,B.VS,B.W6,B.Wi,B.VP,B.Wd,B.Uk,B.VJ,B.VO,B.VM,B.UJ,B.UZ,B.Ub,B.Vc,B.Ul,B.aiD,B.V_,B.axe,B.UH,B.Vv,B.Vx,B.Wo,B.V6,B.Uh,B.UY,B.VK,B.VX,B.Wh,B.VI,B.Vd,B.Wk,B.W5,B.Ve,B.VY,B.Uf,B.Va,B.VU])
u(C.ah,[B.bjW,B.aM2,B.aL4,B.aLa,B.aCV,B.aMU,B.aM0,B.aM9,B.aMf,B.aLY,B.aMc,B.aL8,B.aLW,B.aLX,B.aE_,B.bjq,B.aLm,B.aL0,B.aLu,B.bjh,B.axx,B.bx3,B.aJx,B.aLj,B.aLL,B.aLM,B.aMn,B.aLp,B.aL6,B.bjr,B.aDW,B.aEh,B.bkF,B.aLU,B.aLv,B.bkJ,B.aM8,B.aLx,B.aM5,B.aL3,B.aLs,B.aM4])
u(C.ja,[B.e9n,B.e9o,B.e9A,B.e9B,B.e9w,B.e9v,B.e9x,B.e9t,B.e9y,B.e9r,B.e9z,B.e9q,B.e9E,B.e9D,B.e9F,B.e9C,B.e9G,B.e9H,B.e9J,B.epN,B.epP,B.epQ,B.epw,B.epv,B.ept,B.epC,B.epD,B.epz,B.epE,B.epy,B.epF,B.epG,B.epx,B.epI,B.epB,B.epM,B.epA,B.dGm,B.dGl,B.dFZ,B.dGn,B.dG0,B.dG2,B.dG3,B.dG5,B.dFW,B.dFX,B.dFY,B.dGc,B.dGd,B.dGe,B.dGb,B.dGg,B.dGa,B.dGh,B.dG9,B.dGi,B.dG8,B.dGj,B.dG7,B.dGk,B.dG6,B.dIb,B.dIa,B.dIf,B.dI7,B.dI8,B.dIg,B.dIh,B.dIi,B.dId,B.dI3,B.dIr,B.dIq,B.dIt,B.dIu,B.dIv,B.dIk,B.dIw,B.cNc,B.dOn,B.dOm,B.dOo,B.fiZ,B.fj_,B.fj0,B.fjb,B.fjd,B.fje,B.fjf,B.fjg,B.fjh,B.fji,B.fjj,B.fj1,B.fj2,B.fj3,B.fj4,B.fj5,B.fj6,B.fj7,B.fj8,B.fj9,B.fja,B.fjc,B.f_a,B.f_9,B.eZS,B.eZR,B.eZN,B.eZM,B.eZO,B.eZL,B.f__,B.eZZ,B.f_0,B.eZT,B.f_4,B.eZW,B.f_6,B.eZV,B.f_7,B.eZU,B.eoP,B.eoE,B.eoO,B.eoA,B.eoQ,B.eoS,B.eoB,B.eoC,B.epc,B.epb,B.ep2,B.ep3,B.ep4,B.eoZ,B.ep_,B.eoY,B.ep0,B.eoX,B.ep1,B.eoW,B.eoU,B.dib,B.eAT,B.eAv,B.eAu,B.eAE,B.eAN,B.eAD,B.eAO,B.eAC,B.eAP,B.eAB,B.eAA,B.eAR,B.eAz,B.eAH,B.eAy,B.eAI,B.eAx,B.eAJ,B.eAw,B.eHt,B.eHs,B.eHw,B.eHr,B.eHx,B.eHq,B.eHy,B.eHp,B.eHz,B.eHo,B.eHA,B.eHn,B.el8,B.el4,B.el3,B.el2,B.ele,B.el1,B.elf,B.el0,B.elg,B.el_,B.elh,B.eli,B.elj,B.ekZ,B.elb,B.eGK,B.eGz,B.eGM,B.eGG,B.eGN,B.eGF,B.eGO,B.eGE,B.eGD,B.eGC,B.eGy,B.eGx,B.eGw,B.dHF,B.dHw,B.dHx,B.dHA,B.dHB,B.dHE,B.eh1,B.egT,B.eh2,B.eh4,B.egY,B.eh5,B.egX,B.eh6,B.egW,B.egV,B.eh8,B.egU,B.eh9,B.egR,B.eha,B.egQ,B.ehb,B.egP,B.ekI,B.ekJ,B.ekQ,B.ekP,B.ekR,B.ekN,B.ekU,B.ekM,B.ekV,B.ekL,B.ekW,B.ekX,B.ekK,B.ekY,B.ekb,B.ejT,B.ejU,B.ejY,B.ejX,B.ek7,B.ek5,B.ek_,B.ek9,B.ek0,B.eka,B.dQq,B.dQg,B.dQe,B.dQl,B.dQj,B.dQm,B.dQi,B.dQn,B.dQo,B.dTf,B.dT3,B.dT2,B.dT4,B.dT7,B.dT6,B.dT5,B.dTb,B.dTc,B.dTd,B.dTe,B.dE2,B.dE1,B.dDS,B.dDY,B.dDW,B.dE_,B.dDU,B.dE0,B.dDT,B.dXi,B.dXh,B.dX9,B.dXd,B.dXc,B.dXe,B.dXb,B.dXa,B.dI1,B.dHT,B.dHS,B.dHW,B.dHR,B.dHX,B.dHQ,B.dHY,B.dHP,B.dHZ,B.dHO,B.dHN,B.dHM,B.bMQ,B.bMS,B.bMD,B.bMF,B.bH1,B.bH2,B.bH0,B.bH3,B.bH5,B.bGS,B.bGT,B.bGU,B.bGV,B.bGW,B.bGX,B.bHl,B.bGv,B.bHb,B.bHc,B.bH9,B.bHa,B.bH7,B.bH8,B.bHh,B.bH6,B.bHi,B.bGw,B.bGQ,B.bGC,B.bGD,B.bGB,B.bGE,B.bGA,B.bGH,B.bGI,B.bGJ,B.bGK,B.bGz,B.bGL,B.bGy,B.bGM,B.bGx,B.dTo,B.dTz,B.dTA,B.dTm,B.dTl,B.dTk,B.dTt,B.dTr,B.dTs,B.dTu,B.dTp,B.dTq,B.dTC,B.dTD,B.dTE,B.dTF,B.dTG,B.dPk,B.dPi,B.dPg,B.dPf,B.dPe,B.dPd,B.dPc,B.dP8,B.dP7,B.dPa,B.dP9,B.ecm,B.eco,B.ecd,B.ece,B.ecg,B.eci,B.ecj,B.eck,B.ecl,B.ecF,B.ecH,B.ecx,B.ect,B.ecy,B.ecz,B.ecs,B.ecw,B.ecv,B.ecu,B.ecE,B.fjr,B.fjs,B.fjt,B.fju,B.fjv,B.fjw,B.fjx,B.fjy,B.cgB,B.cgA,B.eLW,B.eLS,B.eLR,B.eLU,B.eLT,B.dVC,B.dVD,B.dVx,B.dVz,B.dVA,B.dVy,B.dVB,B.dGu,B.dGr,B.dGq,B.dGs,B.dGp,B.dST,B.dSS,B.dSR,B.dSQ,B.dSX,B.dSP,B.dSO,B.dSZ,B.dSN,B.dT_,B.dSM,B.dT0,B.dT1,B.dSL,B.ei2,B.ei3,B.ei1,B.ei4,B.ei0,B.ei7,B.ei9,B.ei5,B.eia,B.esW,B.esX,B.esU,B.esV,B.esT,B.esY,B.esZ,B.et_,B.et0,B.eHh,B.eHj,B.eHg,B.eHf,B.eHl,B.eHe,B.egI,B.egJ,B.egB,B.egA,B.egC,B.egz,B.egD,B.egy,B.egE,B.egx,B.egw,B.egv,B.egu,B.ctw,B.ctx,B.fTd,B.cts,B.ctr,B.cty,B.ctt,B.ctu,B.cgx,B.dYj,B.dXN,B.dXL,B.dXM,B.dXI,B.dY5,B.dXO,B.dXP,B.dY7,B.dXT,B.dYb,B.dY4,B.dYc,B.dY3,B.dYd,B.dY2,B.dY1,B.dY0,B.dY_,B.dYh,B.dXZ,B.dYi,B.dXY,B.dY8,B.dXS,B.dY9,B.dXR,B.dYa,B.dXQ,B.dXG,B.dXF,B.deh,B.fjk,B.fjl,B.fjm,B.fjn,B.fjo,B.fjp,B.fjq,B.eI6,B.eI7,B.eI5,B.eI4,B.eA9,B.eAk,B.eAm,B.eAg,B.eAn,B.eAf,B.eAe,B.eAq,B.eAd,B.eAr,B.eAc,B.eAs,B.eAb,B.eAt,B.eAa,B.eA6,B.eA5,B.f1u,B.dYo,B.dYD,B.dYu,B.dYE,B.dYt,B.dYF,B.dYC,B.dYJ,B.dYB,B.dYA,B.dYL,B.dYz,B.dYy,B.dYx,B.dYw,B.dYQ,B.dYv,B.dYG,B.dYs,B.dYH,B.dYr,B.dYI,B.dYq,B.et3,B.et4,B.et2,B.et5,B.et1,B.dFK,B.dFG,B.dFO,B.dFF,B.dFP,B.dFE,B.dFQ,B.dFD,B.dFR,B.dFC,B.dFS,B.dFB,B.dFT,B.dFA,B.dFU,B.dFz,B.dFM,B.dFy,B.dWM,B.dWN,B.dWL,B.dWO,B.dWK,B.dWJ,B.dWI,B.dWH,B.dWG,B.dWT,B.dWF,B.dWU,B.dWE,B.dWV,B.dWD,B.esi,B.esj,B.esh,B.esk,B.esg,B.esl,B.esf,B.esm,B.ese,B.esd,B.esc,B.esb,B.esa])
t(B.bxi,B.aM2)
t(B.aEb,B.bxi)
u(C.mP,[B.bgV,B.bb2,B.bs0,B.b9J,B.bqF,B.bq6,B.bao,B.bq8,B.bu6,B.bgT,B.brW,B.blf,B.bsO,B.baJ,B.bhN,B.blg,B.biu,B.bdO,B.b9O,B.bfh,B.aiF,B.b8W,B.bv7,B.aeD,B.bgY,B.bhc,B.bvj,B.bq7,B.blt,B.bfo,B.brU,B.baA,B.brs,B.b9Z,B.bfe,B.bqI])
t(B.aL5,B.aL4)
t(B.aCB,B.aL5)
t(B.bx1,B.aLa)
t(B.aCE,B.bx1)
u(C.md,[B.Ko,B.a0h,B.Jl])
u(C.au,[B.br2,B.aeU,B.adM,B.Q2,B.brw,B.a8h,B.bd9,B.b6J,B.dB,B.eV,B.avF,B.fj,B.Fh])
t(B.aHb,B.aMU)
t(B.bgS,C.oT)
t(B.aEa,B.aM0)
t(B.bkw,B.aM9)
t(B.aEq,B.aMf)
t(B.bxh,B.aLY)
t(B.aE2,B.bxh)
t(B.bxp,B.aMc)
t(B.bkB,B.bxp)
t(B.bx0,B.aL8)
t(B.aCD,B.bx0)
t(B.bxf,B.aLW)
t(B.bka,B.bxf)
t(B.bxg,B.aLX)
t(B.aE1,B.bxg)
t(B.aD6,B.aLm)
t(B.bj4,B.aL0)
t(B.bjC,B.aLu)
t(B.axy,B.axx)
t(B.aiE,B.axy)
t(B.aD7,B.bx3)
t(B.b8X,B.aJx)
t(B.bjo,B.aLj)
t(B.bx8,B.aLL)
t(B.bjY,B.bx8)
t(B.bx9,B.aLM)
t(B.aDM,B.bx9)
t(B.bxq,B.aMn)
t(B.aED,B.bxq)
t(B.bx4,B.aLp)
t(B.bjx,B.bx4)
t(B.bx_,B.aL6)
t(B.bj9,B.bx_)
t(B.bxe,B.aLU)
t(B.bk8,B.bxe)
t(B.aLw,B.aLv)
t(B.aDi,B.aLw)
t(B.bxm,B.aM8)
t(B.bkv,B.bxm)
t(B.bx6,B.aLx)
t(B.aDj,B.bx6)
t(B.bxk,B.aM5)
t(B.bks,B.bxk)
t(B.bwZ,B.aL3)
t(B.bj8,B.bwZ)
t(B.bx5,B.aLs)
t(B.bjA,B.bx5)
t(B.bxj,B.aM4)
t(B.bkr,B.bxj)
w(B.aM2,C.c9)
w(B.bxi,B.mF)
w(B.aL4,C.c9)
w(B.aL5,B.mF)
w(B.aLa,C.c9)
w(B.bx1,B.mF)
w(B.aMU,C.eW)
w(B.aM0,C.c9)
w(B.aM9,C.c9)
w(B.aMf,C.c9)
w(B.aL8,C.c9)
w(B.bx0,B.mF)
w(B.aLY,C.c9)
w(B.bxh,B.mF)
w(B.aMc,C.c9)
w(B.bxp,B.mF)
w(B.aLW,C.c9)
w(B.bxf,B.mF)
w(B.aLX,C.c9)
w(B.bxg,B.mF)
w(B.aLm,C.c9)
w(B.aL0,C.c9)
w(B.aLu,C.c9)
w(B.axx,C.c9)
w(B.axy,B.mF)
w(B.aJx,C.c9)
v(B.bx3,C.eB)
w(B.aLj,C.c9)
w(B.aLL,C.c9)
w(B.bx8,B.mF)
w(B.aLM,C.c9)
w(B.bx9,B.mF)
w(B.aL6,C.c9)
w(B.bx_,B.mF)
w(B.aLp,C.c9)
w(B.bx4,B.mF)
w(B.aLU,C.c9)
w(B.bxe,B.mF)
w(B.aMn,C.c9)
w(B.bxq,B.mF)
w(B.aLv,C.c9)
w(B.aLw,B.mF)
w(B.aLx,C.c9)
w(B.bx6,B.mF)
w(B.aM5,C.c9)
w(B.bxk,B.mF)
w(B.aM8,C.c9)
w(B.bxm,B.mF)
w(B.aL3,C.c9)
w(B.bwZ,B.mF)
w(B.aLs,C.c9)
w(B.bx5,B.mF)
w(B.aM4,C.c9)
w(B.bxj,B.mF)})()
C.k2(b.typeUniverse,JSON.parse('{"Vq":{"ag":[],"t":[]},"bjW":{"ah":["Vq"]},"VT":{"ag":[],"t":[]},"aEb":{"ah":["VT"]},"bgV":{"aB":[]},"Ug":{"ag":[],"t":[]},"aCB":{"ah":["Ug"]},"Um":{"ag":[],"t":[]},"aCE":{"ah":["Um"]},"bb2":{"aB":[]},"aeU":{"au":[],"t":[]},"adM":{"au":[],"t":[]},"aHa":{"ag":[],"t":[]},"Nl":{"ag":[],"t":[]},"aCV":{"ah":["Nl"]},"br2":{"au":[],"t":[]},"Q2":{"au":[],"t":[]},"bs0":{"aB":[]},"brw":{"au":[],"t":[]},"b9J":{"aB":[]},"aHb":{"ah":["aHa"]},"bqF":{"aB":[]},"bq6":{"aB":[]},"bao":{"aB":[]},"bq8":{"aB":[]},"bu6":{"aB":[]},"VS":{"ag":[],"t":[]},"bgS":{"aB":[]},"aEa":{"ah":["VS"]},"bgT":{"aB":[]},"W6":{"ag":[],"t":[]},"Wi":{"ag":[],"t":[]},"bkw":{"ah":["W6"]},"brW":{"aB":[]},"aEq":{"ah":["Wi"]},"VP":{"ag":[],"t":[]},"Wd":{"ag":[],"t":[]},"Uk":{"ag":[],"t":[]},"aE2":{"ah":["VP"]},"blf":{"aB":[]},"bkB":{"ah":["Wd"]},"bsO":{"aB":[]},"aCD":{"ah":["Uk"]},"baJ":{"aB":[]},"VJ":{"ag":[],"t":[]},"VO":{"ag":[],"t":[]},"bka":{"ah":["VJ"]},"bhN":{"aB":[]},"aE1":{"ah":["VO"]},"blg":{"aB":[]},"VM":{"ag":[],"t":[]},"UJ":{"ag":[],"t":[]},"UZ":{"ag":[],"t":[]},"aE_":{"ah":["VM"]},"biu":{"aB":[]},"bjq":{"ah":["UJ"]},"aD6":{"ah":["UZ"]},"bdO":{"aB":[]},"Ub":{"ag":[],"t":[]},"Vc":{"ag":[],"t":[]},"Ul":{"ag":[],"t":[]},"bj4":{"ah":["Ub"]},"b9O":{"aB":[]},"bjC":{"ah":["Vc"]},"bfh":{"aB":[]},"bjh":{"ah":["Ul"]},"aiF":{"aB":[]},"aiD":{"ag":[],"t":[]},"aiE":{"ah":["aiD"]},"V_":{"ag":[],"t":[]},"axe":{"ag":[],"t":[]},"aD7":{"ah":["V_"],"eB":[]},"b8X":{"ah":["axe"]},"b8W":{"aB":[]},"UH":{"ag":[],"t":[]},"bjo":{"ah":["UH"]},"bv7":{"aB":[]},"aeD":{"aB":[]},"Vv":{"ag":[],"t":[]},"Vx":{"ag":[],"t":[]},"bjY":{"ah":["Vv"]},"bgY":{"aB":[]},"aDM":{"ah":["Vx"]},"bhc":{"aB":[]},"a8h":{"au":[],"t":[]},"Wo":{"ag":[],"t":[]},"V6":{"ag":[],"t":[]},"Uh":{"ag":[],"t":[]},"UY":{"ag":[],"t":[]},"VK":{"ag":[],"t":[]},"VX":{"ag":[],"t":[]},"Wh":{"ag":[],"t":[]},"VI":{"ag":[],"t":[]},"aED":{"ah":["Wo"]},"bvj":{"aB":[]},"bjx":{"ah":["V6"]},"bq7":{"aB":[]},"bj9":{"ah":["Uh"]},"bjr":{"ah":["UY"]},"blt":{"aB":[]},"aDW":{"ah":["VK"]},"aEh":{"ah":["VX"]},"bkF":{"ah":["Wh"]},"bk8":{"ah":["VI"]},"bd9":{"au":[],"t":[]},"b6J":{"au":[],"t":[]},"dB":{"au":[],"t":[]},"eV":{"au":[],"t":[]},"avF":{"au":[],"t":[]},"fj":{"au":[],"t":[]},"Fh":{"au":[],"t":[]},"Vd":{"ag":[],"t":[]},"aDi":{"ah":["Vd"]},"bfo":{"aB":[]},"Wk":{"ag":[],"t":[]},"bkJ":{"ah":["Wk"]},"W5":{"ag":[],"t":[]},"Ve":{"ag":[],"t":[]},"VY":{"ag":[],"t":[]},"bkv":{"ah":["W5"]},"brU":{"aB":[]},"aDj":{"ah":["Ve"]},"baA":{"aB":[]},"bks":{"ah":["VY"]},"brs":{"aB":[]},"Uf":{"ag":[],"t":[]},"Va":{"ag":[],"t":[]},"VU":{"ag":[],"t":[]},"bj8":{"ah":["Uf"]},"b9Z":{"aB":[]},"bjA":{"ah":["Va"]},"bfe":{"aB":[]},"bkr":{"ah":["VU"]},"bqI":{"aB":[]}}'))
C.Kp(b.typeUniverse,JSON.parse('{"mF":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("m_<w?>"),e8:w("d5"),G:w("w"),l:w("bk<m,m>"),J:w("bk<m,K>"),I:w("bk<m,G>"),R:w("dD<m>"),Z:w("a0"),M:w("O<dc>"),f5:w("O<a3_>"),gh:w("O<aRQ>"),h:w("O<a33>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<T>"),dh:w("O<HG>"),aJ:w("O<aA<aD>>"),w:w("O<a0>"),Q:w("O<ai<w>>"),B:w("O<ai<HG>>"),gO:w("O<ai<ai<K>>>"),bj:w("O<ai<m>>"),b:w("O<ai<K>>"),fA:w("O<ai<G?>>"),D:w("O<a6<m,aD>>"),g:w("O<v>"),bz:w("O<ty>"),ds:w("O<a8E>"),v:w("O<hv>"),U:w("O<+(v,K)>"),ev:w("O<+(v,G)>"),K:w("O<+(m,m)>"),fT:w("O<+(K,t)>"),E:w("O<+(G,m)>"),u:w("O<+(G,G)>"),c:w("O<+(m,m,a0)>"),e:w("O<+(m,K,K,G)>"),o:w("O<+(m,G,m,G)>"),d:w("O<+(m,m,K,K,a6<m,K>)>"),_:w("O<uS>"),q:w("O<cR>"),fQ:w("O<aai>"),s:w("O<m>"),cF:w("O<ar>"),X:w("O<wh>"),F:w("O<ab4>"),p:w("O<t>"),bL:w("O<abp>"),fH:w("O<ln>"),aq:w("O<b9C>"),a_:w("O<abD>"),cS:w("O<abK>"),cB:w("O<no>"),ba:w("O<abU>"),d9:w("O<PC>"),bi:w("O<acc>"),eW:w("O<Cr>"),fY:w("O<Zf>"),aX:w("O<FN>"),ea:w("O<ad1>"),gB:w("O<adx>"),ed:w("O<PU>"),g4:w("O<bls>"),aS:w("O<a_M>"),ac:w("O<adQ>"),cd:w("O<CB>"),fr:w("O<aeK>"),e4:w("O<a0u>"),r:w("O<aeP>"),au:w("O<aI1>"),f7:w("O<Q>"),n:w("O<K>"),t:w("O<G>"),dS:w("O<aB?>"),fs:w("O<ty?>"),d4:w("O<m?>"),bN:w("O<G?>"),gJ:w("cs<aiE>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<T>"),ew:w("ai<aD>"),j:w("ai<@>"),bW:w("ai<G>"),a:w("a6<m,@>"),f:w("a6<@,@>"),bd:w("M<ed,m>"),dv:w("M<m,m>"),fR:w("M<+(K,t),t>"),m:w("iE"),gA:w("zg"),gD:w("vS"),P:w("cr"),C:w("aD"),W:w("ty"),dV:w("ed"),g7:w("C8"),N:w("m"),bO:w("ar"),k:w("jM"),Y:w("bq<K>"),cL:w("ab5"),gj:w("cx<m>"),aC:w("cx<G?>"),dg:w("eb<qN>"),e3:w("ba1"),a2:w("Cn"),f3:w("qN"),es:w("FR"),gV:w("n2"),y:w("Q"),i:w("K"),z:w("@"),S:w("G"),L:w("ai<@>?"),fF:w("a6<@,@>?"),cK:w("aD?"),az:w("q0?"),T:w("m?"),cD:w("K?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXW=new C.dc(0,0.85)
D.fEL=new C.y("Tap once to start the chain",null,K.U7,null,null,null,null,null,null,null,null,null)
D.aXu=new C.bI(D.aXW,null,null,D.fEL,null)
D.aXM=new C.dc(0,0.1)
D.aZ1=new B.aS_(0,0,0)
D.Kv=new B.aS_(0,0.5,0)
D.aZA=new C.az(A.b0,1,A.q,-1)
D.b02=new C.aY(0,1/0,0,290)
D.b09=new C.aY(16,1/0,16,1/0)
D.b1n=new C.o(A.bc,null,null,null,null,null,A.a5)
D.f5u=new C.H(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH8=new C.y("\u26a1",null,D.f5u,null,null,null,null,null,null,null,null,null)
D.b5P=new C.cp(A.A,null,null,D.fH8,null)
D.aR7=new C.H(!0,A.bU,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwW=new C.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aR7,null,A.L,null,null,null,null,null,null,null)
D.eca=new C.D(A.o5,D.fwW,null)
D.b5Y=new C.cp(A.A,null,null,D.eca,null)
D.fAK=new C.y("Press Drop! and watch them fall from 20 metres.",null,A.kK,null,A.L,null,null,null,null,null,null,null)
D.ece=new C.D(A.o5,D.fAK,null)
D.b6i=new C.cp(A.A,null,null,D.ece,null)
D.fgq=new C.H(!0,A.jm,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFy=new C.y("Draw anywhere",null,D.fgq,null,null,null,null,null,null,null,null,null)
D.b6m=new C.cp(A.A,null,null,D.fFy,null)
D.fn5=new C.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aR7,null,A.L,null,null,null,null,null,null,null)
D.ecW=new C.D(A.FJ,D.fn5,null)
D.b6F=new C.cp(A.A,null,null,D.ecW,null)
D.acG=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b9i=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.ba3=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Wo=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.ba8=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.bad=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.bai=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.Wr=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bbo=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.bbt=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.bbP=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bcY=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.ae4=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bdr=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.AM=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.beg=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.aex=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.beU=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bf0=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.aeI=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.X4=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bfv=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.aeR=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.af3=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.Xf=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bhg=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bhj=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bhn=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bhw=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.afw=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bhU=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.F2=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bj1=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bj9=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bjd=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bjo=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bjs=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bjz=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.vr=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.agh=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bkH=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.blr=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.blU=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bmj=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.agI=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bqW=new C.ba(11e6)
D.brX=new C.R(0,0,8,6)
D.ahE=new C.R(0,0,9,0)
D.bsu=new C.R(10,0,10,4)
D.bsz=new C.R(10,10,10,6)
D.bsH=new C.R(10,34,10,26)
D.bsP=new C.R(10,6,10,2)
D.YT=new C.R(10,6,10,4)
D.bsR=new C.R(10,8,0,10)
D.bts=new C.R(12,8,8,8)
D.btx=new C.R(14,0,14,22)
D.btz=new C.R(14,0,14,30)
D.ai4=new C.R(14,0,14,6)
D.aib=new C.R(14,10,8,12)
D.bu5=new C.R(14,8,14,6)
D.bux=new C.R(16,4,16,28)
D.buH=new C.R(16,8,16,12)
D.bwM=new C.R(26,12,26,58)
D.bxA=new C.R(4,4,6,2)
D.bxC=new C.R(4,4,8,2)
D.byb=new C.R(8,14,8,12)
D.byi=new C.R(8,40,8,30)
D.bym=new C.R(8,6,16,0)
D.byn=new C.R(8,6,8,8)
D.byI=new C.R(0,0,1.5,0)
D.aYO=new C.H4(26,"saturation")
D.bz_=new C.yY(A.cX,D.aYO,null,A.acE)
D.fmb=new C.y("REACTION LAB",null,Y.aRI,null,null,null,null,A.a2,null,1,null,null)
D.bz5=new C.bB(1,A.bg,D.fmb,null)
D.fdh=new C.H(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpn=new C.y("CORE PROTOCOL",null,D.fdh,null,null,null,null,null,null,null,null,null)
D.bzj=new C.bB(1,A.bg,D.fpn,null)
D.fq5=new C.y("\ud83d\udce2 NGMY Ads",null,A.qz,null,null,null,null,A.eG,null,1,null,null)
D.bA1=new C.bB(1,A.bg,D.fq5,null)
D.fkV=new C.y("Wire selected",null,A.hw,null,null,null,null,null,null,null,null,null)
D.bAg=new C.bB(1,A.bg,D.fkV,null)
D.alm=new C.a0(62712,"MaterialIcons",!1)
D.bFH=new C.a0(62878,"MaterialIcons",!1)
D.a0d=new C.a0(62908,"MaterialIcons",!1)
D.bFK=new C.a0(62918,"MaterialIcons",!1)
D.bFL=new C.a0(62931,"MaterialIcons",!1)
D.bFO=new C.a0(62951,"MaterialIcons",!1)
D.bG4=new C.a0(63064,"MaterialIcons",!1)
D.bG6=new C.a0(63070,"MaterialIcons",!1)
D.yj=new C.a0(63128,"MaterialIcons",!1)
D.Gt=new C.a0(63726,"MaterialIcons",!1)
D.bHp=new C.a0(983122,"MaterialIcons",!1)
D.bHE=new C.a0(983247,"MaterialIcons",!1)
D.bHQ=new C.a0(983415,"MaterialIcons",!1)
D.bHR=new C.a0(983417,"MaterialIcons",!1)
D.bHS=new C.a0(983442,"MaterialIcons",!1)
D.bHT=new C.a0(983443,"MaterialIcons",!1)
D.amG=new C.a0(983467,"MaterialIcons",!1)
D.bHZ=new C.a0(983501,"MaterialIcons",!1)
D.bI9=new C.a0(983616,"MaterialIcons",!1)
D.bIa=new C.a0(983624,"MaterialIcons",!1)
D.bIn=new C.a0(983776,"MaterialIcons",!1)
D.bIE=new C.a0(984561,"MaterialIcons",!1)
D.bJe=new C.ae(A.rk,24,A.aM,null,null,null)
D.bJZ=new C.ae(A.O4,null,A.ad,null,null,null)
D.bKw=new C.ae(A.mB,21,A.ad,null,null,null)
D.bHo=new C.a0(983117,"MaterialIcons",!1)
D.bLT=new C.ae(D.bHo,28,A.c,null,null,null)
D.bM8=new C.ae(A.js,18,null,null,null,null)
D.bNV=new C.ae(A.e9,21,A.c7,null,null,null)
D.bO9=new C.ae(A.mC,null,A.ad,null,null,null)
D.bOj=new C.ae(A.a12,21,A.ad,null,null,null)
D.bP8=new C.ae(A.eE,17,A.ad,null,null,null)
D.ao1=new C.ae(A.eE,19,null,null,null,null)
D.mG=new C.ae(A.vV,21,A.ad,null,null,null)
D.bQF=new C.ae(A.Nx,null,A.ad,null,null,null)
D.bRP=new C.ae(A.js,21,A.ad,null,null,null)
D.bSG=new C.ae(A.fg,20,A.aA,null,null,null)
D.bTl=new C.ae(A.dY,null,A.aM,null,null,null)
D.bTG=new C.ae(A.k8,null,A.aA,null,null,null)
D.dfT=w([A.d8,A.d_,A.d8],x.O)
D.bWG=new C.a9(A.a3,A.a8,A.x,D.dfT,null,null)
D.cUb=w([A.bN,A.bn],x.O)
D.bWO=new C.a9(A.b1,A.b5,A.x,D.cUb,null,null)
D.bX_=new C.a9(A.b1,A.b5,A.x,A.ayf,null,null)
D.cUy=w([A.fX,A.f9],x.O)
D.bX8=new C.a9(A.b1,A.b5,A.x,D.cUy,null,null)
D.ap2=new C.a9(A.b1,A.b5,A.x,M.a2L,null,null)
D.cRY=w([A.oF,A.ig],x.O)
D.bXM=new C.a9(A.b1,A.b5,A.x,D.cRY,null,null)
D.cTU=w([A.ee,A.aw],x.O)
D.ap9=new C.a9(A.b1,A.b5,A.x,D.cTU,null,null)
D.d9Y=w([A.dw,A.j_,A.bn],x.O)
D.bY4=new C.a9(A.a3,A.a8,A.x,D.d9Y,null,null)
D.da3=w([A.fB,A.cs],x.O)
D.bYo=new C.a9(A.b1,A.b5,A.x,D.da3,null,null)
D.cqD=w([A.bN,A.dw],x.O)
D.bYx=new C.a9(A.a3,A.a8,A.x,D.cqD,null,null)
D.ayX=w([A.ee,L.mn],x.O)
D.bYE=new C.a9(A.b1,A.b5,A.x,D.ayX,null,null)
D.bYV=new C.a9(A.b1,A.b5,A.x,I.apw,null,null)
D.bfC=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b8F=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cPh=w([D.bfC,D.b8F],x.O)
D.bZ7=new C.a9(A.b1,A.b5,A.x,D.cPh,null,null)
D.bZI=new C.a9(A.az,A.aC,A.x,A.a2I,null,null)
D.bk7=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dly=w([D.bk7,A.L1],x.O)
D.bZP=new C.a9(A.b1,A.b5,A.x,D.dly,null,null)
D.d24=w([A.aw,A.w],x.O)
D.bZU=new C.a9(A.b1,A.b5,A.x,D.d24,null,null)
D.bZX=new C.a9(A.b1,A.b5,A.x,T.ayj,null,null)
D.bjw=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bkh=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cDm=w([A.LP,D.bjw,D.bkh],x.O)
D.c_6=new C.a9(A.b1,A.b5,A.x,D.cDm,null,null)
D.cqX=w([A.d5,A.fA],x.O)
D.c_m=new C.a9(A.b1,A.b5,A.x,D.cqX,null,null)
D.c_s=new C.a9(A.az,A.aC,A.x,A.a3v,null,null)
D.apy=w([0,2,4,6,7,9,11],x.t)
D.c03=w([0,4,7],x.t)
D.apE=w([0,4,7,12],x.t)
D.c04=w([0,4,7,4],x.t)
D.ay_=w([A.h6,A.pN],x.O)
D.axv=w([A.hn,A.cT],x.O)
D.avV=w([A.bu,A.dP],x.O)
D.cLT=w([A.aM,A.d5],x.O)
D.cSj=w([A.c7,A.eI],x.O)
D.dbh=w([A.bX,A.lM],x.O)
D.avm=w([A.ct,A.k1],x.O)
D.cQS=w([A.bK,A.aJ],x.O)
D.c0o=w([D.ay_,D.axv,A.a2Q,D.avV,D.cLT,D.cSj,A.ax2,D.dbh,D.avm,D.cQS],x.Q)
D.c52=w([120,220,380],x.t)
D.c8N=w([12,16,19,24],x.t)
D.c8X=w([1400,800,450,2400],x.t)
D.cdc=w([0,0.6,1],x.n)
D.chm=w([250,450,900,1500],x.t)
D.b9u=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bjS=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bhW=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bn9=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bh6=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.auD=w([D.b9u,D.bjS,D.bhW,D.bn9,D.bh6],x.O)
D.eGN=new C.z("type","Typewriter")
D.ezg=new C.z("bounce","Bounce")
D.eHz=new C.z("wave","Wave")
D.eIF=new C.z("zoom","Zoom")
D.cy6=w([D.eGN,D.ezg,D.eHz,A.a6G,I.aMW,D.eIF,I.aN_],x.K)
D.cyk=w([50,25,75],x.t)
D.cDT=w([0,5,10,15,18,20,25],x.t)
D.eAV=new C.z("fish","Fish")
D.eAX=new C.z("fly","Fireflies")
D.eze=new C.z("bird","Birds")
D.cI4=w([D.eAV,D.eAX,D.eze],x.K)
D.cM8=w([900,500,250,1600],x.t)
D.cPE=w([0.78,1],x.n)
D.avW=w([0,2,4,7,9,12,14,16],x.t)
D.cQc=w([A.bu,A.bE,A.b8,A.bu],x.O)
D.aw0=w(["A","T","C","G"],x.s)
D.cQd=w(["A","U","C","G"],x.s)
D.a2F=w([A.av,A.bH,A.bc,A.aO,A.nZ],x.O)
D.cRD=w([A.aw,A.av,A.ct,A.bH,A.bc,A.cA,A.cb,A.bE,A.L1],x.O)
D.a2J=w([0.04,0.17,0.3],x.n)
D.cSf=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Hf=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eQG=new B.uS("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eQM=new B.uS("Medium engine","A good all-rounder.",0.3,0.9)
D.eQL=new B.uS("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Hg=w([D.eQG,D.eQM,D.eQL],x._)
D.eoY=new C.z(6,"Easy")
D.epF=new C.z(8,"Medium")
D.ekT=new C.z(10,"Hard")
D.cT5=w([D.eoY,D.epF,D.ekT],x.E)
D.awk=w([0.55,0.78,1],x.n)
D.cUD=w([0.93,0.975,1],x.n)
D.awv=w([A.c,A.fL,A.nR,A.aw],x.O)
D.fK9=new B.y5("Moon",1737,4291941851)
D.fK6=new B.y5("Earth",6371,4281908728)
D.fKa=new B.y5("Neptune",24622,4284524026)
D.fKb=new B.y5("Saturn",58232,4294829706)
D.fK7=new B.y5("Jupiter",69911,4294677052)
D.fKc=new B.y5("Sun",696340,4294688548)
D.fKd=new B.y5("Sirius A",119e4,4290763774)
D.fK4=new B.y5("Arcturus",179e5,4294818420)
D.fK5=new B.y5("Betelgeuse",531e6,4294472049)
D.fK8=new B.y5("UY Scuti",667e6,4293870660)
D.Qf=w([D.fK9,D.fK6,D.fKa,D.fKb,D.fK7,D.fKc,D.fKd,D.fK4,D.fK5,D.fK8],C.ax("O<y5>"))
D.eMc=new C.bl("glow","Glow",A.a0f)
D.eJM=new C.bl("rainbow","Rainbow",A.no)
D.eK8=new C.bl("stars","Stars",A.i9)
D.eJw=new C.bl("sparks","Sparks",A.dY)
D.eLt=new C.bl("fire","Fire",A.vW)
D.cWu=w([D.eMc,D.eJM,D.eK8,D.eJw,D.eLt],x.c)
D.awz=w([A.bc,A.av,A.bH,A.d_],x.O)
D.cXt=w([0.2,1],x.n)
D.eQD=new B.uS("Radar","Shows your height above the ground.",0.1,0)
D.eQE=new B.uS("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eQB=new B.uS("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.awH=w([D.eQD,D.eQE,D.eQB],x._)
D.eKJ=new C.bl("attract","Attract",A.yA)
D.eKv=new C.bl("scare","Scare",A.ri)
D.eJF=new C.bl("food","Food",A.ud)
D.bHu=new C.a0(983158,"MaterialIcons",!1)
D.eL1=new C.bl("hunt","Hunt",D.bHu)
D.cY5=w([D.eKJ,D.eKv,D.eJF,D.eL1],x.c)
D.cYw=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cYL=w([47,100,220,470,1000],x.n)
D.awZ=w([0,2,4,7,9],x.t)
D.Ij={volts:0}
D.a4u=new C.bk(D.Ij,[3],x.J)
D.IG=new C.e9(["b","battery",0.2,0.3,D.a4u])
D.e7r={on:0}
D.dqq=new C.bk(D.e7r,[1],x.J)
D.Do=new C.e9(["s","switch",0.5,0.3,D.dqq])
D.eOM=new C.e9(["l","bulb",0.8,0.3,A.j7])
D.cUi=w([D.IG,D.Do,D.eOM],x.d)
D.Dn=new C.cA(["b",0,"s",0])
D.eNN=new C.cA(["s",1,"l",0])
D.aN3=new C.cA(["l",1,"b",1])
D.da9=w([D.Dn,D.eNN,D.aN3],x.o)
D.cTM=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ek3=new B.mC("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cUi,D.da9,D.cTM)
D.aH8={ohms:0}
D.aEI=new C.bk(D.aH8,[220],x.J)
D.eOf=new C.e9(["r","resistor",0.5,0.3,D.aEI])
D.eP0=new C.e9(["d","led",0.8,0.3,A.j7])
D.ddi=w([D.IG,D.eOf,D.eP0],x.d)
D.eN8=new C.cA(["b",0,"r",0])
D.eNH=new C.cA(["r",1,"d",0])
D.eNe=new C.cA(["d",1,"b",1])
D.dm2=w([D.eN8,D.eNH,D.eNe],x.o)
D.ddI=w(["led","diode","indicator"],x.s)
D.eka=new B.mC("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.ddi,D.dm2,D.ddI)
D.a5L={level:0}
D.dpM=new C.bk(D.a5L,[0.2],x.J)
D.eOl=new C.e9(["p","pot",0.5,0.3,D.dpM])
D.eOn=new C.e9(["m","motor",0.8,0.3,A.j7])
D.cUB=w([D.IG,D.eOl,D.eOn],x.d)
D.eN7=new C.cA(["b",0,"p",0])
D.eND=new C.cA(["p",1,"m",0])
D.eNz=new C.cA(["m",1,"b",1])
D.dhP=w([D.eN7,D.eND,D.eNz],x.o)
D.d9R=w(["fan","motor","spin","dimmer"],x.s)
D.ek1=new B.mC("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cUB,D.dhP,D.d9R)
D.a4r=new C.bk(D.a5L,[0.9],x.J)
D.aNa=new C.e9(["s","solar",0.25,0.3,D.a4r])
D.aN9=new C.e9(["l","bulb",0.75,0.3,A.j7])
D.cXa=w([D.aNa,D.aN9],x.d)
D.eNK=new C.cA(["s",0,"l",0])
D.eNy=new C.cA(["l",1,"s",1])
D.cVl=w([D.eNK,D.eNy],x.o)
D.dip=w(["solar","sun","without battery","no battery","free"],x.s)
D.ek4=new B.mC("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cXa,D.cVl,D.dip)
D.eP3=new C.e9(["c","crank",0.25,0.3,D.a4r])
D.d8d=w([D.eP3,D.aN9],x.d)
D.eNb=new C.cA(["c",0,"l",0])
D.eNx=new C.cA(["l",1,"c",1])
D.d8M=w([D.eNb,D.eNx],x.o)
D.d8m=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ek0=new B.mC("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d8d,D.d8M,D.d8m)
D.dpL=new C.bk(D.a5L,[0.7],x.J)
D.eOq=new C.e9(["t","turbine",0.25,0.3,D.dpL])
D.eOd=new C.e9(["m","motor",0.75,0.3,A.j7])
D.d2J=w([D.eOq,D.eOd],x.d)
D.eNV=new C.cA(["t",0,"m",0])
D.eNA=new C.cA(["m",1,"t",1])
D.d1J=w([D.eNV,D.eNA],x.o)
D.d73=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ejY=new B.mC("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d2J,D.d1J,D.d73)
D.aEF=new C.bk(D.Ij,[9],x.J)
D.a6N=new C.e9(["b","battery",0.2,0.3,D.aEF])
D.aN8=new C.e9(["r","radio",0.8,0.3,A.j7])
D.dj1=w([D.a6N,D.Do,D.aN8],x.d)
D.eNP=new C.cA(["s",1,"r",0])
D.aN4=new C.cA(["r",1,"b",1])
D.c_N=w([D.Dn,D.eNP,D.aN4],x.o)
D.dhB=w(["radio","music","listen"],x.s)
D.ek9=new B.mC("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dj1,D.c_N,D.dhB)
D.dqS=new C.bk(D.Ij,[12],x.J)
D.aN7=new C.e9(["b","battery",0.2,0.3,D.dqS])
D.eON=new C.e9(["t","tv",0.8,0.3,A.j7])
D.cUk=w([D.aN7,D.Do,D.eON],x.d)
D.eNQ=new C.cA(["s",1,"t",0])
D.aN5=new C.cA(["t",1,"b",1])
D.dbk=w([D.Dn,D.eNQ,D.aN5],x.o)
D.diZ=w(["tv","television","screen","watch"],x.s)
D.ejV=new B.mC("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cUk,D.dbk,D.diZ)
D.eOD=new C.e9(["z","buzzer",0.8,0.3,A.j7])
D.cAE=w([D.IG,D.Do,D.eOD],x.d)
D.eNR=new C.cA(["s",1,"z",0])
D.eO8=new C.cA(["z",1,"b",1])
D.cPs=w([D.Dn,D.eNR,D.eO8],x.o)
D.dfZ=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ek6=new B.mC("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cAE,D.cPs,D.dfZ)
D.eOm=new C.e9(["h","heater",0.8,0.3,A.j7])
D.d5K=w([D.a6N,D.Do,D.eOm],x.d)
D.eNM=new C.cA(["s",1,"h",0])
D.eNm=new C.cA(["h",1,"b",1])
D.cQ8=w([D.Dn,D.eNM,D.eNm],x.o)
D.ckD=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ejW=new B.mC("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d5K,D.cQ8,D.ckD)
D.eOP=new C.e9(["s","solar",0.2,0.25,D.a4r])
D.dqZ=new C.bk(D.aH8,[100],x.J)
D.eOS=new C.e9(["r","resistor",0.55,0.25,D.dqZ])
D.eOZ=new C.e9(["c","capacitor",0.85,0.25,A.j7])
D.eOi=new C.e9(["q","resistor",0.55,0.6,D.aEI])
D.eOQ=new C.e9(["d","led",0.85,0.6,A.j7])
D.daR=w([D.eOP,D.eOS,D.eOZ,D.eOi,D.eOQ],x.d)
D.eNL=new C.cA(["s",0,"r",0])
D.eNG=new C.cA(["r",1,"c",0])
D.eNd=new C.cA(["c",1,"s",1])
D.eNc=new C.cA(["c",0,"q",0])
D.eNF=new C.cA(["q",1,"d",0])
D.eNf=new C.cA(["d",1,"c",1])
D.d_F=w([D.eNL,D.eNG,D.eNd,D.eNc,D.eNF,D.eNf],x.o)
D.d7A=w(["capacitor","store","charge","flash"],x.s)
D.ek8=new B.mC("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.daR,D.d_F,D.d7A)
D.eOt=new C.e9(["b","battery",0.15,0.3,D.a4u])
D.eP4=new C.e9(["l1","bulb",0.5,0.3,A.j7])
D.eOA=new C.e9(["l2","bulb",0.85,0.3,A.j7])
D.cSy=w([D.eOt,D.eP4,D.eOA],x.d)
D.eN6=new C.cA(["b",0,"l1",0])
D.eNu=new C.cA(["l1",1,"l2",0])
D.eNv=new C.cA(["l2",1,"b",1])
D.d3p=w([D.eN6,D.eNu,D.eNv],x.o)
D.diK=w(["series","two bulbs","dim"],x.s)
D.ejZ=new B.mC("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cSy,D.d3p,D.diK)
D.e7K={volts:0,charge:1}
D.dr3=new C.bk(D.e7K,[1.5,0],x.J)
D.eOX=new C.e9(["b","battery",0.75,0.3,D.dr3])
D.cRZ=w([D.aNa,D.eOX],x.d)
D.eNJ=new C.cA(["s",0,"b",0])
D.eNa=new C.cA(["b",1,"s",1])
D.d_X=w([D.eNJ,D.eNa],x.o)
D.d7J=w(["charge","rechargeable","flat","recharge"],x.s)
D.ejX=new B.mC("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cRZ,D.d_X,D.d7J)
D.dqR=new C.bk(D.Ij,[4.5],x.J)
D.eOo=new C.e9(["b","battery",0.2,0.3,D.dqR])
D.aN6=new C.e9(["p","phone",0.8,0.3,A.j7])
D.d2z=w([D.eOo,D.Do,D.aN6],x.d)
D.eNO=new C.cA(["s",1,"p",0])
D.a6M=new C.cA(["p",1,"b",1])
D.deY=w([D.Dn,D.eNO,D.a6M],x.o)
D.dgp=w(["phone","charger","usb","mobile"],x.s)
D.ek2=new B.mC("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d2z,D.deY,D.dgp)
D.eOa=new C.e9(["f","fan",0.8,0.3,A.j7])
D.ccM=w([D.IG,D.eOa],x.d)
D.eN5=new C.cA(["b",0,"f",0])
D.eNk=new C.cA(["f",1,"b",1])
D.cQF=w([D.eN5,D.eNk],x.o)
D.d9Q=w(["fan","cool","air","wind"],x.s)
D.ekb=new B.mC("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.ccM,D.cQF,D.d9Q)
D.eOH=new C.e9(["b","battery",0.15,0.2,D.a4u])
D.eOb=new C.e9(["a","ammeter",0.5,0.2,A.j7])
D.eO9=new C.e9(["l","bulb",0.85,0.2,A.j7])
D.eOJ=new C.e9(["v","voltmeter",0.5,0.6,A.j7])
D.d81=w([D.eOH,D.eOb,D.eO9,D.eOJ],x.d)
D.eN3=new C.cA(["b",0,"a",0])
D.eN2=new C.cA(["a",1,"l",0])
D.eNX=new C.cA(["v",0,"l",0])
D.eNY=new C.cA(["v",1,"l",1])
D.d_O=w([D.eN3,D.eN2,D.aN3,D.eNX,D.eNY],x.o)
D.dm1=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ek7=new B.mC("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d81,D.d_O,D.dm1)
D.eP7=new C.e9(["b","battery",0.15,0.2,D.aEF])
D.eOs=new C.e9(["t","tv",0.55,0.2,A.j7])
D.aEG=new C.bk(D.Ij,[5],x.J)
D.eOg=new C.e9(["c","buck",0.4,0.5,D.aEG])
D.eOu=new C.e9(["p","phone",0.8,0.5,A.j7])
D.cYy=w([D.eP7,D.eOs,D.eOg,D.eOu],x.d)
D.eN9=new C.cA(["b",0,"t",0])
D.aN1=new C.cA(["b",0,"c",0])
D.aN2=new C.cA(["c",1,"p",0])
D.d2w=w([D.eN9,D.aN5,D.aN1,D.aN2,D.a6M],x.o)
D.cWL=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ek_=new B.mC("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cYy,D.d2w,D.cWL)
D.eOh=new C.e9(["c","buck",0.5,0.3,D.aEG])
D.cQ_=w([D.aN7,D.eOh,D.aN6],x.d)
D.cUK=w([D.aN1,D.aN2,D.a6M],x.o)
D.co3=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ejU=new B.mC("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cQ_,D.cUK,D.co3)
D.eOy=new C.e9(["d","diode",0.5,0.3,A.j7])
D.d3C=w([D.a6N,D.eOy,D.aN8],x.d)
D.eN4=new C.cA(["b",0,"d",0])
D.eNg=new C.cA(["d",1,"r",0])
D.cDb=w([D.eN4,D.eNg,D.aN4],x.o)
D.cWr=w(["diode","protect","backwards","one way"],x.s)
D.ek5=new B.mC("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d3C,D.cDb,D.cWr)
D.Qi=w([D.ek3,D.eka,D.ek1,D.ek4,D.ek0,D.ejY,D.ek9,D.ejV,D.ek6,D.ejW,D.ek8,D.ejZ,D.ejX,D.ek2,D.ekb,D.ek7,D.ek_,D.ejU,D.ek5],C.ax("O<mC>"))
D.hcd=new B.G5("Moon",1.62,A.dw,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hcb=new B.G5("Mars",3.71,A.av,"Mars has about 38 percent of Earth's gravity.")
D.hce=new B.G5("Mercury",3.7,A.k0,"Mercury is small, so its gravity is like Mars.")
D.hc8=new B.G5("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.hca=new B.G5("Earth",9.81,A.aO,"On Earth gravity is strong, and the air also slows you down.")
D.hcc=new B.G5("Neptune",11.15,A.d_,"Neptune pulls a little harder than Earth.")
D.hc9=new B.G5("Jupiter",24.79,A.ct,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rt=w([D.hcd,D.hcb,D.hce,D.hc8,D.hca,D.hcc,D.hc9],C.ax("O<G5>"))
D.d_D=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a2Z=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d0l=w([0.2,0.5,0.8],x.n)
D.bG_=new C.a0(63040,"MaterialIcons",!1)
D.eKz=new C.bl("peg","Peg",D.bG_)
D.eJJ=new C.bl("bar","Bar",R.C1)
D.eKb=new C.bl("erase","Erase",A.NB)
D.d0y=w([D.eKz,D.eJJ,D.eKb],x.c)
D.eTQ=new C.cR(A.bk,A.J,4)
D.d0K=w([D.eTQ],x.q)
D.axe=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aWB=new B.Ko(0,"accordion")
D.cQY=w([A.ju,A.C2,A.BO],x.w)
D.cXY=w(["Mail","SMS","Ad"],x.s)
D.cRu=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.haq=new B.Az(D.aWB,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.ay_,D.cQY,D.cXY,D.cRu)
D.aan=new B.Ko(1,"flip")
D.d7u=w([A.q7,A0.GF,A.ue],x.w)
D.d2f=w(["Unlock","Verify","Secure"],x.s)
D.cPW=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hap=new B.Az(D.aan,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.axv,D.d7u,D.d2f,D.cPW)
D.aWC=new B.Ko(2,"towers")
D.d13=w([A.yw,A.qb,A.hU],x.w)
D.d0F=w(["Save","Grow","Earn"],x.s)
D.cE1=w(["","",""],x.s)
D.har=new B.Az(D.aWC,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a2Q,D.d13,D.d0F,D.cE1)
D.aao=new B.Ko(3,"assemble")
D.d8p=w([A.nq,A.ha,A.dY],x.w)
D.cXm=w(["Launch","Charge","Shine"],x.s)
D.d4T=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hat=new B.Az(D.aao,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.avV,D.d8p,D.cXm,D.d4T)
D.aWD=new B.Ko(4,"carousel")
D.d8e=w([A.b8,A.f3],x.O)
D.cY7=w([A.mB,A.alT,A.Oc],x.w)
D.cSW=w(["Explore","Discover","Learn"],x.s)
D.d2E=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hao=new B.Az(D.aWD,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d8e,D.cY7,D.cSW,D.d2E)
D.aWE=new B.Ko(5,"burst")
D.d0A=w([A.iX,A.ts],x.O)
D.cRp=w([A.lr,A.mz,A.i8],x.w)
D.cRL=w(["Cheer","Win","Love"],x.s)
D.cTS=w(["Make some noise","First place","Share the joy"],x.s)
D.has=new B.Az(D.aWE,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d0A,D.cRp,D.cRL,D.cTS)
D.axf=w([D.haq,D.hap,D.har,D.hat,D.hao,D.has],C.ax("O<Az>"))
D.eKB=new C.bl("skin","Skin",A.alU)
D.eLZ=new C.bl("muscle","Muscles",A.NN)
D.eLH=new C.bl("organ","Organs",A.i8)
D.bFq=new C.a0(62747,"MaterialIcons",!1)
D.eLN=new C.bl("bone","Skeleton",D.bFq)
D.eM4=new C.bl("vessel","Blood vessels",A.qd)
D.d19=w([D.eKB,D.eLZ,D.eLH,D.eLN,D.eM4],x.c)
D.eQF=new B.uS("Simple legs","Light. Land gently.",0.15,0.2)
D.eQH=new B.uS("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eQK=new B.uS("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Cs=w([D.eQF,D.eQH,D.eQK],x._)
D.d2O=w([1.77,3.55,7.15,16.7],x.n)
D.d5j=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eGg=new C.z("spiral","Spiral")
D.eoV=new C.z("barred","Barred spiral")
D.eAp=new C.z("elliptical","Elliptical")
D.d6_=w([D.eGg,D.eoV,D.eAp],x.K)
D.eML=new C.cA(["beat",0.18,0.28,0])
D.eNS=new C.cA(["burst",0.7,0.2,0])
D.eO2=new C.cA(["delay",0.45,0.5,1])
D.eNC=new C.cA(["ripple",0.75,0.6,3])
D.cX5=w([D.eML,D.eNS,D.eO2,D.eNC],x.e)
D.d6S=w([N.ld,M.IF,F.SU],x.u)
D.h9F=new B.FR("First spark","A clock lights a burst and a ripple",D.cX5,D.d6S)
D.eNj=new C.cA(["beat",0.15,0.3,1])
D.eMp=new C.cA(["ripple",0.62,0.15,0])
D.eNZ=new C.cA(["delay",0.4,0.45,0])
D.eN_=new C.cA(["ripple",0.7,0.45,0])
D.eMH=new C.cA(["delay",0.4,0.7,1])
D.eNE=new C.cA(["shake",0.75,0.75,0])
D.djQ=w([D.eNj,D.eMp,D.eNZ,D.eN_,D.eMH,D.eNE],x.e)
D.elS=new C.z(2,4)
D.aMP=new C.z(4,5)
D.d_t=w([N.ld,M.IF,F.SU,D.elS,D.aMP],x.u)
D.h9H=new B.FR("Heartbeat","Two thumps, then a shake",D.djQ,D.d_t)
D.eMQ=new C.cA(["dice",0.15,0.7,1])
D.eO4=new C.cA(["echo",0.4,0.7,0])
D.eMY=new C.cA(["comet",0.7,0.5,4])
D.eNT=new C.cA(["burst",0.72,0.2,1])
D.eNh=new C.cA(["burst",0.3,0.25,0])
D.eMR=new C.cA(["pop",0.55,0.85,0])
D.ckc=w([D.eMQ,D.eO4,D.eMY,D.eNT,D.eNh,D.eMR],x.e)
D.elh=new C.z(1,3)
D.eli=new C.z(1,4)
D.aMM=new C.z(0,5)
D.d89=w([N.ld,W.uL,D.elh,D.eli,D.aMM],x.u)
D.h9G=new B.FR("Fireworks","Dice launch comets that burst in colour",D.ckc,D.d89)
D.eMV=new C.cA(["beat",0.15,0.2,2])
D.eNr=new C.cA(["chance",0.4,0.2,0])
D.eMN=new C.cA(["ball",0.7,0.12,3])
D.eMA=new C.cA(["chance",0.4,0.5,1])
D.eO3=new C.cA(["ball",0.3,0.08,1])
D.eMt=new C.cA(["ripple",0.7,0.55,3])
D.cdd=w([D.eMV,D.eNr,D.eMN,D.eMA,D.eO3,D.eMt],x.e)
D.elT=new C.z(2,5)
D.cAo=w([N.ld,W.uL,M.a6B,F.SV,D.elT],x.u)
D.h9E=new B.FR("Rain","Balls fall at random and splash",D.cdd,D.cAo)
D.eNs=new C.cA(["beat",0.12,0.45,2])
D.eNU=new C.cA(["toggle",0.38,0.2,0])
D.eO0=new C.cA(["wash",0.7,0.15,4])
D.eMP=new C.cA(["count3",0.38,0.45,0])
D.eNW=new C.cA(["burst",0.72,0.4,0])
D.eNi=new C.cA(["light",0.55,0.7,1])
D.eMB=new C.cA(["pop",0.8,0.8,4])
D.daP=w([D.eNs,D.eNU,D.eO0,D.eMP,D.eNW,D.eNi,D.eMB],x.e)
D.emo=new C.z(3,6)
D.cgm=w([N.ld,W.uL,M.a6B,F.SV,D.aMM,D.emo],x.u)
D.h9C=new B.FR("Disco","A beat drives lights, washes and bursts",D.daP,D.cgm)
D.eO7=new C.cA(["button",0.12,0.2,0])
D.eMv=new C.cA(["delay",0.34,0.2,1])
D.eO6=new C.cA(["light",0.56,0.2,1])
D.eO_=new C.cA(["delay",0.56,0.45,1])
D.eNt=new C.cA(["ball",0.34,0.6,0])
D.eMz=new C.cA(["delay",0.34,0.8,1])
D.eMo=new C.cA(["burst",0.7,0.8,5])
D.c0r=w([D.eO7,D.eMv,D.eO6,D.eO_,D.eNt,D.eMz,D.eMo],x.e)
D.eow=new C.z(5,6)
D.dg7=w([N.ld,W.uL,F.SU,F.SV,D.aMP,D.eow],x.u)
D.h9D=new B.FR("Domino","Tap the button and watch it run down the line",D.c0r,D.dg7)
D.axz=w([D.h9F,D.h9H,D.h9G,D.h9E,D.h9C,D.h9D],C.ax("O<FR>"))
D.d68=w([0.05,0.15,0.25],x.n)
D.d6m=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d72=w([1.5,3,4.5,9,12],x.n)
D.eJg=new C.bl("dice","Dice",A.my)
D.eKi=new C.bl("coin","Coin",K.yp)
D.eM_=new C.bl("num","Number",A.yy)
D.d7e=w([D.eJg,D.eKi,D.eM_],x.c)
D.d7h=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fKe=new B.P8("Moon",1.62,0,4291941851)
D.fKf=new B.P8("Mars",3.71,0.01,4294472049)
D.fKg=new B.P8("Earth",9.81,1,4281908728)
D.fKi=new B.P8("Jupiter",24.79,1.4,4294677052)
D.fKh=new B.P8("Sun",274,2,4294688548)
D.z_=w([D.fKe,D.fKf,D.fKg,D.fKi,D.fKh],C.ax("O<P8>"))
D.axF=w([A.c7,A.aM,A.b0,A.aO,A.bu,A.bX,A.ct,A.hn],x.O)
D.e5J={H:0}
D.dqr=new C.bk(D.e5J,[2],x.I)
D.ds0=new B.tl("Hydrogen","H\u2082",D.dqr,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.e5K={H:0,Cl:1}
D.dqE=new C.bk(D.e5K,[1,1],x.I)
D.ds2=new B.tl("Hydrogen chloride","HCl",D.dqE,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.e5L={H:0,O:1}
D.dq8=new C.bk(D.e5L,[2,1],x.I)
D.ds3=new B.tl("Water","H\u2082O",D.dq8,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e5Z={N:0,H:1}
D.dr2=new C.bk(D.e5Z,[1,3],x.I)
D.dsb=new B.tl("Ammonia","NH\u2083",D.dr2,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a5K={C:0,H:1}
D.dqW=new C.bk(D.a5K,[1,4],x.I)
D.ds4=new B.tl("Methane","CH\u2084",D.dqW,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.e5M={H:0,S:1}
D.dpe=new C.bk(D.e5M,[2,1],x.I)
D.dsa=new B.tl("Hydrogen sulfide","H\u2082S",D.dpe,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e63={O:0}
D.dr0=new C.bk(D.e63,[2],x.I)
D.dsc=new B.tl("Oxygen","O\u2082",D.dr0,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e5Y={N:0}
D.dqs=new C.bk(D.e5Y,[2],x.I)
D.ds1=new B.tl("Nitrogen","N\u2082",D.dqs,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.e5y={C:0,O:1}
D.dr7=new C.bk(D.e5y,[1,2],x.I)
D.ds8=new B.tl("Carbon dioxide","CO\u2082",D.dr7,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aH5={C:0,H:1,O:2}
D.doW=new C.bk(D.aH5,[1,2,1],x.I)
D.ds9=new B.tl("Formaldehyde","CH\u2082O",D.doW,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dqV=new C.bk(D.a5K,[2,4],x.I)
D.ds6=new B.tl("Ethene","C\u2082H\u2084",D.dqV,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dqU=new C.bk(D.a5K,[2,6],x.I)
D.ds5=new B.tl("Ethane","C\u2082H\u2086",D.dqU,"Two carbons joined by a single bond, each holding three hydrogens.")
D.doX=new C.bk(D.aH5,[1,4,1],x.I)
D.ds7=new B.tl("Methanol","CH\u2083OH",D.doX,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a3e=w([D.ds0,D.ds2,D.ds3,D.dsb,D.ds4,D.dsa,D.dsc,D.ds1,D.ds8,D.ds9,D.ds6,D.ds5,D.ds7],C.ax("O<tl>"))
D.d8f=w([A.bX,A.aO,A.dR,A.b0],x.O)
D.d9a=w([],x.h)
D.d9e=w([],x.B)
D.a3n=w([],x.F)
D.edF=new B.ed("battery","Battery","\ud83d\udd0b",A.b0,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.edL=new B.ed("solar","Solar panel","\u2600\ufe0f",A.bH,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eep=new B.ed("crank","Hand crank","\ud83d\udd04",A.ct,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.ee1=new B.ed("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aO,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.edx=new B.ed("buck","Step-down converter","\ud83d\udd3d",A.hn,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.ee_=new B.ed("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eeu=new B.ed("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eeb=new B.ed("ldr","Light sensor","\ud83c\udf1e",A.dR,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.edQ=new B.ed("switch","Switch","\ud83c\udf9a\ufe0f",A.bu,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eer=new B.ed("fuse","Fuse","\ud83e\uddef",A.c7,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.edp=new B.ed("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hn,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eec=new B.ed("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eee=new B.ed("bulb","Light bulb","\ud83d\udca1",A.dR,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.edN=new B.ed("led","LED","\ud83d\udd34",A.av,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.edR=new B.ed("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.ee8=new B.ed("buzzer","Buzzer","\ud83d\udd14",A.bX,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.edG=new B.ed("heater","Heater","\ud83d\udd25",A.ct,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.ee3=new B.ed("capacitor","Capacitor","\ud83e\udeab",A.cl,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.edW=new B.ed("radio","Radio","\ud83d\udcfb",A.nZ,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.edT=new B.ed("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.edw=new B.ed("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.edD=new B.ed("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.edJ=new B.ed("fan","Fan","\ud83c\udf00",A.aO,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eew=new B.ed("speaker","Speaker","\ud83d\udd0a",A.bX,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eel=new B.ed("clock","Digital clock","\u23f0",A.b0,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.edZ=new B.ed("calculator","Calculator","\ud83e\uddee",A.KV,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.edC=new B.ed("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cl,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eev=new B.ed("router","WiFi router","\ud83d\udcf6",A.hn,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eey=new B.ed("siren","Siren","\ud83d\udea8",A.av,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eds=new B.ed("toycar","Toy car","\ud83d\ude97",A.ct,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eez=new B.ed("kettle","Kettle","\ud83e\uded6",A.mm,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.edA=new B.ed("lamp","Desk lamp","\ud83e\ude94",A.dR,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.edM=new B.ed("lights","Party lights","\ud83c\udf84",A.nZ,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.edX=new B.ed("fridge","Fridge","\ud83e\uddca",A.fX,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.edu=new B.ed("washer","Washing machine","\ud83e\udee7",A.cl,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eem=new B.ed("blender","Blender","\ud83e\udd64",A.c7,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.edU=new B.ed("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.edz=new B.ed("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.edY=new B.ed("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eej=new B.ed("neon","Neon sign","\ud83e\udea7",A.bX,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.edv=new B.ed("microwave","Microwave","\ud83c\udf72",A.ct,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eed=new B.ed("doorbell","Doorbell","\ud83d\udd14",A.bH,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.edI=new B.ed("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.ee7=new B.ed("console","Game console","\ud83c\udfae",A.bu,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eeo=new B.ed("heartmon","Heart monitor","\ud83e\ude7a",A.h5,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.edt=new B.ed("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.ee2=new B.ed("lighthouse","Lighthouse","\ud83d\uddfc",A.dR,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eea=new B.ed("discoball","Disco ball","\ud83e\udea9",A.nZ,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eet=new B.ed("robot","Robot","\ud83e\udd16",A.aO,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.edr=new B.ed("toaster","Toaster","\ud83c\udf5e",A.dS,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eex=new B.ed("ledstrip","LED strip","\ud83c\udf08",A.bX,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eei=new B.ed("pump","Water pump","\ud83d\udeb0",A.aO,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.ee4=new B.ed("hairdryer","Hair dryer","\ud83d\udca8",A.iX,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eeg=new B.ed("headphones","Headphones","\ud83c\udfa7",A.bu,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.edB=new B.ed("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.ees=new B.ed("tablet","iPad Pro M5","\ud83d\udcf2",A.cl,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.edo=new B.ed("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h5,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.edV=new B.ed("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bs,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.edO=new B.ed("appletv","Apple TV 4K","\ud83d\udcfa",A.bN,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.ee9=new B.ed("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tp,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.edq=new B.ed("iphonefold","iPhone Fold","\ud83d\udcf1",A.b6,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.edE=new B.ed("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d_,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eeq=new B.ed("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cA,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.ee5=new B.ed("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bc,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.ee0=new B.ed("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cc,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eeh=new B.ed("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.av,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.edP=new B.ed("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b0,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.ee6=new B.ed("honor","Honor Magic V5","\ud83d\udcf1",A.cl,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eef=new B.ed("vivo","vivo X300 Pro","\ud83d\udcf1",A.ct,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eek=new B.ed("ereader","Kindle Scribe","\ud83d\udcd6",A.bs,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.edn=new B.ed("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cb,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.edS=new B.ed("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cA,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.edK=new B.ed("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.edy=new B.ed("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dR,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.edH=new B.ed("carscreen","Luxury car touchscreen","\ud83d\ude98",A.av,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.een=new B.ed("vision","Apple Vision Pro","\ud83e\udd7d",A.bu,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.QL=w([D.edF,D.edL,D.eep,D.ee1,D.edx,D.ee_,D.eeu,D.eeb,D.edQ,D.eer,D.edp,D.eec,D.eee,D.edN,D.edR,D.ee8,D.edG,D.ee3,D.edW,D.edT,D.edw,D.edD,D.edJ,D.eew,D.eel,D.edZ,D.edC,D.eev,D.eey,D.eds,D.eez,D.edA,D.edM,D.edX,D.edu,D.eem,D.edU,D.edz,D.edY,D.eej,D.edv,D.eed,D.edI,D.ee7,D.eeo,D.edt,D.ee2,D.eea,D.eet,D.edr,D.eex,D.eei,D.ee4,D.eeg,D.edB,D.ees,D.edo,D.edV,D.edO,D.ee9,D.edq,D.edE,D.eeq,D.ee5,D.ee0,D.eeh,D.edP,D.ee6,D.eef,D.eek,D.edn,D.edS,D.edK,D.edy,D.edH,D.een],C.ax("O<ed>"))
D.d9B=w([0,0.46,0.82],x.n)
D.d9M=w([5,10,15,25,45,60],x.t)
D.da7=w([-0.045,0.03,-0.015],x.n)
D.dav=w([0.9,0.97,1],x.n)
D.ay7=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uo=w([0.05,0.2,0.35],x.n)
D.cRP=w([D.F2,D.F2],x.O)
D.cX1=w([A.Fc,A.M],x.O)
D.cW5=w([A.fl,A.hm],x.O)
D.cPS=w([A.f3,A.nY],x.O)
D.ccK=w([A.lM,A.dy],x.O)
D.ay8=w([D.cRP,D.cX1,D.cW5,D.cPS,D.ccK],x.Q)
D.fK2=new B.v5("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fK3=new B.v5("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fJV=new B.v5("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fK1=new B.v5("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fK_=new B.v5("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fJW=new B.v5("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fK0=new B.v5("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fJX=new B.v5("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fJZ=new B.v5("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fJY=new B.v5("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Cy=w([D.fK2,D.fK3,D.fJV,D.fK1,D.fK_,D.fJW,D.fK0,D.fJX,D.fJZ,D.fJY],C.ax("O<v5>"))
D.bgN=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.dbO=w([D.F2,D.bgN,D.aex,A.ae1],x.O)
D.b2C=new C.ac(0,A.G,A.hP,A.dE,6)
D.dcI=w([D.b2C],x.V)
D.ekv=new C.z(0,"AND")
D.elj=new C.z(1,"Adder")
D.elU=new C.z(2,"Blinker")
D.emp=new C.z(3,"Memory")
D.ddu=w([D.ekv,D.elj,D.elU,D.emp],x.E)
D.ayk=w([-104,0,104],x.n)
D.ayl=w([-14,3],x.n)
D.dei=w([-8,0,8],x.n)
D.ayt=w([-92,0,92],x.n)
D.deH=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eQC=new B.uS("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eQJ=new B.uS("Medium tank","Balanced.",0.35,1)
D.eQI=new B.uS("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.QZ=w([D.eQC,D.eQJ,D.eQI],x._)
D.nv=w([0.04,0.2,0.36],x.n)
D.ayE=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eLG=new C.bl(D.aWB,"Fold",K.amQ)
D.eKQ=new C.bl(D.aan,"Flip",A.Gi)
D.bFJ=new C.a0(62889,"MaterialIcons",!1)
D.eLY=new C.bl(D.aWC,"Rise",D.bFJ)
D.an3=new C.a0(983870,"MaterialIcons",!1)
D.eIP=new C.bl(D.aao,"Assemble",D.an3)
D.eIY=new C.bl(D.aWD,"Spin",D.alm)
D.eIV=new C.bl(D.aWE,"Pop",A.lr)
D.dg4=w([D.eLG,D.eKQ,D.eLY,D.eIP,D.eIY,D.eIV],C.ax("O<+(Ko,m,a0)>"))
D.ayJ=w([A.bX,A.dR,A.bv,A.aO,A.bu,A.c7],x.O)
D.dgh=w([A.aO,A.ct,A.ct,A.b0],x.O)
D.dgu=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eHL=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.esh=new C.z("Make the output turn TWICE as fast.",2)
D.elt=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eGq=new C.z("Make the output turn 4 times faster.",4)
D.exT=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.eB0=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.ezv=new C.z("Make the output turn 3 times faster.",3)
D.eAg=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.ayO=w([D.eHL,D.esh,D.elt,D.eGq,D.exT,D.eB0,D.ezv,D.eAg],C.ax("O<+(m,K)>"))
D.dhr=w([3,4.5,5,6,9],x.n)
D.b3a=new C.ac(0,A.G,A.aW,A.J,16)
D.dhT=w([D.b3a],x.V)
D.R1=w([A.bX,A.bH,A.b0,A.aO,A.bu,A.c7,A.c,A.ct],x.O)
D.dim=w(["solar","turbine","crank","pot"],x.s)
D.diI=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.diO=w([0,0.35,0.75,1],x.n)
D.eJa=new C.bl("drop","Drop",D.amG)
D.eJc=new C.bl("weight","Weight",U.an7)
D.eLT=new C.bl("cannon","Newton's cannon",A.am5)
D.djw=w([D.eJa,D.eJc,D.eLT],x.c)
D.eF4=new C.z("piano","Piano")
D.eEL=new C.z("organ","Organ")
D.ezc=new C.z("bell","Bell")
D.eF6=new C.z("pluck","Pluck")
D.eGp=new C.z("synth","Synth")
D.eAW=new C.z("flute","Flute")
D.az4=w([D.eF4,D.eEL,D.ezc,D.eF6,D.eGp,D.eAW],x.K)
D.dk3=w(["volts","level","ohms","on"],x.s)
D.dlr=w([A.ju,A.C2,A.BO,A.q7,A0.GF,A.ue,A.yw,A.qb,A.hU,A.nq,A.ha,A.dY,A.i8,A.i9,A.mz,A.lW,A.w1,A.rp,A.lX,A.Ga,A.ud,A.BU,A.BQ,A.amB,A.NF,A.ys,A.NN,A.amg,T.an_,A.lr],x.w)
D.dml=w([0.72,1],x.n)
D.dmy=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e7x={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.doO=new C.bk(D.e7x,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aH7={A:0,T:1,C:2,G:3}
D.a4l=new C.bk(D.aH7,["U","A","G","C"],x.l)
D.doY=new C.bk(D.aH7,["T","A","G","C"],x.l)
D.e5V={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d8j=w([0,2,4,5,7,9,11],x.t)
D.cR4=w([0,2,3,5,7,8,10],x.t)
D.ddG=w([0,3,5,6,7,10],x.t)
D.CF=new C.bk(D.e5V,[D.awZ,D.d8j,D.cR4,D.ddG,D.apy],C.ax("bk<m,ai<G>>"))
D.e7j={A:0,T:1,U:2,C:3,G:4}
D.dph=new C.bk(D.e7j,[A.c7,A.cl,A.cl,A.aM,A.b0],C.ax("bk<m,w>"))
D.e5g={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.h2V=new B.y7("Switch",F.ug,A.bH,0,"Tap it to turn it ON or OFF.")
D.h2R=new B.y7("Blinker",A.p_,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.h2S=new B.y7("AND",D.an3,A.cl,2,"ON only when BOTH inputs are ON.")
D.bHc=new C.a0(63671,"MaterialIcons",!1)
D.h2Q=new B.y7("OR",D.bHc,A.bu,2,"ON when EITHER input is ON.")
D.h2T=new B.y7("XOR",G.a0k,A.bX,2,"ON when the inputs are DIFFERENT.")
D.h2N=new B.y7("NAND",A.u2,A.aO,2,"OFF only when BOTH inputs are ON.")
D.bGj=new C.a0(63176,"MaterialIcons",!1)
D.h2O=new B.y7("NOR",D.bGj,A.hn,2,"ON only when BOTH inputs are OFF.")
D.h2P=new B.y7("NOT",A_.C3,A.ct,1,"Flips the signal: ON becomes OFF.")
D.h2U=new B.y7("Light",A.rk,A.dR,1,"Glows when its input is ON.")
D.h2W=new B.y7("Buzzer",A.oa,A.c7,1,"Beeps while its input is ON.")
D.zd=new C.bk(D.e5g,[D.h2V,D.h2R,D.h2S,D.h2Q,D.h2T,D.h2N,D.h2O,D.h2P,D.h2U,D.h2W],C.ax("bk<m,y7>"))
D.e7g={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eJA=new C.bl(3,20,1.9)
D.eJ5=new C.bl(33,90,1.6)
D.eMh=new C.bl(52,15,3.2)
D.eMf=new C.bl(45,-100,1.8)
D.eKK=new C.bl(-15,-60,1.9)
D.eKd=new C.bl(-25,140,2.4)
D.eK4=new C.bl(-82,0,2.2)
D.aEv=new C.bk(D.e7g,[D.eJA,D.eJ5,D.eMh,D.eMf,D.eKK,D.eKd,D.eK4],C.ax("bk<m,+(K,K,K)>"))
D.cQq=w([A.A],x.M)
D.cQL=w([A.az,A.aC],x.M)
D.cZy=w([A.az,A.A,A.aC],x.M)
D.d02=w([A.az,A.lg,A.A,A.lG,A.aC],x.M)
D.ddq=w([A.az,A.lg,A.a3,A.a8,A.lG,A.aC],x.M)
D.dqf=new C.dt([1,D.cQq,2,D.cQL,3,D.cZy,4,A.az9,5,D.d02,6,D.ddq],C.ax("dt<G,ai<dc>>"))
D.e5W={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eKW=new C.bl(1,A.bN,"Hydrogen")
D.eJP=new C.bl(4,A.bn,"Carbon")
D.eIQ=new C.bl(3,A.d_,"Nitrogen")
D.eLf=new C.bl(2,A.av,"Oxygen")
D.eKD=new C.bl(2,A.bH,"Sulfur")
D.eLQ=new C.bl(1,A.bc,"Chlorine")
D.wh=new C.bk(D.e5W,[D.eKW,D.eJP,D.eIQ,D.eLf,D.eKD,D.eLQ],C.ax("bk<m,+(G,w,m)>"))
D.e7I={Calm:0,Box:1,Sleep:2}
D.cxS=w([4,2,6,0],x.n)
D.cxZ=w([4,4,4,4],x.n)
D.cy_=w([4,7,8,0],x.n)
D.Rq=new C.bk(D.e7I,[D.cxS,D.cxZ,D.cy_],C.ax("bk<m,ai<K>>"))
D.e5q={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wX=new B.a0h(0,"source")
D.d_w=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.h8i=new B.q7("Clock",A.p_,D.wX,A.bv,D.d_w)
D.h8e=new B.q7("Button",A.yA,D.wX,A.aM,A.U)
D.dhD=w(["random","quick","slow"],x.s)
D.h8p=new B.q7("Dice",A.my,D.wX,A.bX,D.dhD)
D.bGS=new C.a0(63484,"MaterialIcons",!1)
D.E1=new B.a0h(1,"logic")
D.dmg=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.h8l=new B.q7("Delay",D.bGS,D.E1,A.cl,D.dmg)
D.d9T=w(["fast","mid","slow"],x.s)
D.h8q=new B.q7("Echo",A.amv,D.E1,A.bu,D.d9T)
D.h8n=new B.q7("Every 2nd",A_.C3,D.E1,A.hn,A.U)
D.bGx=new C.a0(63309,"MaterialIcons",!1)
D.h8k=new B.q7("Every 3rd",D.bGx,D.E1,A.aO,A.U)
D.bIv=new C.a0(983902,"MaterialIcons",!1)
D.c_S=w(["50%","25%","75%"],x.s)
D.h8s=new B.q7("Chance",D.bIv,D.E1,A.ct,D.c_S)
D.qH=new B.a0h(2,"out")
D.h8g=new B.q7("Light",A.rk,D.qH,A.dR,A.U)
D.h8h=new B.q7("Burst",A.lr,D.qH,A.bX,A.U)
D.h8f=new B.q7("Ripple",A.yD,D.qH,A.b8,A.U)
D.h8o=new B.q7("Ball",A.amI,D.qH,A.ct,A.U)
D.h8m=new B.q7("Comet",A.nq,D.qH,A.bu,A.U)
D.bIf=new C.a0(983669,"MaterialIcons",!1)
D.h8r=new B.q7("Shake",D.bIf,D.qH,A.c7,A.U)
D.h8t=new B.q7("Pop",A.Gb,D.qH,A.b0,A.U)
D.h8j=new B.q7("Wash",A.NR,D.qH,A.pD,A.U)
D.mI=new C.bk(D.e5q,[D.h8i,D.h8e,D.h8p,D.h8l,D.h8q,D.h8n,D.h8k,D.h8s,D.h8g,D.h8h,D.h8f,D.h8o,D.h8m,D.h8r,D.h8t,D.h8j],C.ax("bk<m,q7>"))
D.e7k={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.CG=new C.bk(D.e7k,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.e5D={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zF=new B.Jl(0,"tv")
D.eS9=new B.m9("Samsung Neo QLED 8K",D.zF,F.EQ,A.aO)
D.eS0=new B.m9("LG OLED evo G5",D.zF,A.ed,A.h5)
D.eRS=new B.m9("Sony Bravia 9",D.zF,A.qS,A.bs)
D.eRW=new B.m9("Apple TV 4K",D.zF,A.e3,A.bN)
D.eRT=new B.m9("Bang and Olufsen Beovision",D.zF,F.Ex,F.tp)
D.IK=new B.Jl(1,"iphone")
D.aNv=new B.m9("iPhone 18 Pro Max",D.IK,D.agI,A.cb)
D.wu=new B.Jl(3,"fold")
D.bmS=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eS5=new B.m9("iPhone Fold",D.wu,D.bmS,A.b6)
D.uO=new B.Jl(2,"android")
D.eS6=new B.m9("Samsung Galaxy S26 Ultra",D.uO,F.acR,A.d_)
D.bgl=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eRZ=new B.m9("Samsung Galaxy Z Fold7",D.wu,D.bgl,A.cA)
D.eRV=new B.m9("Google Pixel 10 Pro XL",D.uO,A.dw,A.bc)
D.eS2=new B.m9("Xiaomi 16 Ultra",D.uO,A.lP,A.cc)
D.eRY=new B.m9("Huawei Mate 80 Pro Max",D.uO,A.eI,A.av)
D.eRU=new B.m9("OPPO Find X9 Ultra",D.uO,A.dX,A.b0)
D.eSb=new B.m9("Honor Magic V5",D.wu,A.d8,A.cl)
D.eS_=new B.m9("vivo X300 Pro",D.uO,A.hm,A.ct)
D.T1=new B.Jl(4,"tablet")
D.eS4=new B.m9("iPad Pro M5",D.T1,A.dw,A.aO)
D.a6X=new B.Jl(5,"reader")
D.eSc=new B.m9("Kindle Scribe",D.a6X,A.ee,A.bs)
D.zG=new B.Jl(6,"computer")
D.eS3=new B.m9("MacBook Pro M5 Max",D.zG,A.dw,A.cb)
D.eS8=new B.m9("iMac 32 inch",D.zG,A.bN,A.cA)
D.eS1=new B.m9("Pro Display XDR 8K",D.zG,A.lP,A.b8)
D.eRX=new B.m9("Sony Laser Projector",D.zG,A.cs,A.dR)
D.eS7=new B.m9("Luxury car touchscreen",D.zG,L.mn,A.av)
D.eSa=new B.m9("Apple Vision Pro",D.zG,A.fB,A.bu)
D.m3=new C.bk(D.e5D,[D.eS9,D.eS0,D.eRS,D.eRW,D.eRT,D.aNv,D.eS5,D.eS6,D.eRZ,D.eRV,D.eS2,D.eRY,D.eRU,D.eSb,D.eS_,D.eS4,D.eSc,D.eS3,D.eS8,D.eS1,D.eRX,D.eS7,D.eSa],C.ax("bk<m,m9>"))
D.e5Q={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bpA=new B.fP(20,4,13,!1)
D.bq0=new B.fP(14,5,13.5,!1)
D.bpS=new B.fP(9,2.4,10,!1)
D.bq5=new B.fP(7,5,12.5,!1)
D.bpV=new B.fP(8,3.5,12,!1)
D.bpw=new B.fP(15,2,6,!1)
D.bq3=new B.fP(45,6,13.5,!0)
D.bpM=new B.fP(10,8,13.5,!1)
D.bpE=new B.fP(25,3,12,!0)
D.bpK=new B.fP(35,4,12,!0)
D.bpL=new B.fP(40,4.5,9.5,!0)
D.bpN=new B.fP(55,3,9,!0)
D.bpx=new B.fP(18,3,9,!1)
D.bq2=new B.fP(22,4,13.5,!1)
D.bpW=new B.fP(16,5,13.5,!1)
D.bpI=new B.fP(30,4,9,!0)
D.bqe=new B.fP(5,3.5,13,!1)
D.bpQ=new B.fP(25,3,13.5,!0)
D.bpZ=new B.fP(14,2.5,9,!1)
D.bpP=new B.fP(6,6,13,!1)
D.bq6=new B.fP(30,1.2,5,!0)
D.bqd=new B.fP(35,3,4.5,!0)
D.bq9=new B.fP(20,4.5,7.5,!0)
D.bpO=new B.fP(55,5.5,13.5,!0)
D.bpv=new B.fP(45,5.5,13.5,!0)
D.bq_=new B.fP(40,5.5,13.5,!0)
D.bqc=new B.fP(60,6,13.5,!0)
D.ah9=new B.fP(28,4,7,!0)
D.Fp=new B.fP(25,4,7,!0)
D.bpH=new B.fP(30,4,7,!0)
D.bpC=new B.fP(22,4,7,!0)
D.bpD=new B.fP(24,4,7,!0)
D.bpR=new B.fP(60,3,5.5,!0)
D.bpy=new B.fP(18,9,14,!0)
D.bpF=new B.fP(25,9,14,!0)
D.aha=new B.fP(30,8,14,!0)
D.bpB=new B.fP(20,8,14,!0)
D.bpJ=new B.fP(30,9,14,!0)
D.bq7=new B.fP(22,5,9.5,!0)
D.bpz=new B.fP(30,2.5,10.5,!0)
D.bpX=new B.fP(50,5.5,13.5,!0)
D.bqb=new B.fP(12,2,9.5,!1)
D.bpU=new B.fP(16,1.3,9.5,!0)
D.bq4=new B.fP(40,2.5,7,!0)
D.bqa=new B.fP(60,1.2,4.8,!0)
D.bq8=new B.fP(18,5,13.5,!0)
D.bq1=new B.fP(8,2,9.5,!1)
D.bpT=new B.fP(12,2.5,8,!1)
D.bpG=new B.fP(20,3.5,13.5,!0)
D.bpY=new B.fP(3.5,3,13,!1)
D.ze=new C.bk(D.e5Q,[D.bpA,D.bq0,D.bpS,D.bq5,D.bpV,D.bpw,D.bq3,D.bpM,D.bpE,D.bpK,D.bpL,D.bpN,D.bpx,D.bq2,D.bpW,D.bpI,D.bqe,D.bpQ,D.bpZ,D.bpP,D.bq6,D.bqd,D.bq9,D.bpO,D.bpv,D.bq_,D.bqc,D.ah9,D.Fp,D.bpH,D.Fp,D.bpC,D.Fp,D.bpD,D.ah9,D.Fp,D.bpR,D.bpy,D.bpF,D.aha,D.bpB,D.bpJ,D.bq7,D.bpz,D.bpX,D.bqb,D.bpU,D.bq4,D.bqa,D.Fp,D.aha,D.bq8,D.bq1,D.bpT,D.bpG,D.bpY],C.ax("bk<m,fP>"))
D.e5p={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eIl=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eot=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eoo=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eAf=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eBc=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eAb=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.emu=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eyb=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eIt=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eBw=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.erG=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.emb=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eqJ=new C.z("Movement","They pull your legs together and help you balance.")
D.esB=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eoC=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eG0=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eH2=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.exU=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eGO=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.ewC=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eBF=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.emj=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.esY=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eBl=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.ewW=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eGW=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.ezH=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.ems=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eCd=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eFE=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eDU=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.ekH=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.ezp=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.ezt=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.etE=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eoR=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.esq=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eyl=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eEE=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eIq=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eBC=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ekp=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eyw=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.elc=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eEU=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eFX=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eyW=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eF8=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eml=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eGs=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eq8=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eEj=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.etk=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.ewR=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eBW=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eGD=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eGu=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eGz=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.exk=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eCJ=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eDR=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eGh=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eyV=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.evf=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eu3=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.ezk=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eBP=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.evL=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.ewq=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.equ=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eFT=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.erg=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.el9=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.etD=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.el4=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.epf=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.etI=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.erp=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eC9=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.esE=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eI8=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.euc=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.exe=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.ezP=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.ery=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eri=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.drr=new C.bk(D.e5p,[D.eIl,D.eot,D.eoo,D.eAf,D.eBc,D.eAb,D.emu,D.eyb,D.eIt,D.eBw,D.erG,D.emb,D.eqJ,D.esB,D.eoC,D.eG0,D.eH2,D.exU,D.eGO,D.ewC,D.eBF,D.emj,D.esY,D.eBl,D.ewW,D.eGW,D.ezH,D.ems,D.eCd,D.eFE,D.eDU,D.ekH,D.ezp,D.ezt,D.etE,D.eoR,D.esq,D.eyl,D.eEE,D.eIq,D.eBC,D.ekp,D.eyw,D.elc,D.eEU,D.eFX,D.eyW,D.eF8,D.eml,D.eGs,D.eq8,D.eEj,D.etk,D.ewR,D.eBW,D.eGD,D.eGu,D.eGz,D.exk,D.eCJ,D.eDR,D.eGh,D.eyV,D.evf,D.eu3,D.ezk,D.eBP,D.evL,D.ewq,D.equ,D.eFT,D.erg,D.el9,D.etD,D.el4,D.epf,D.etI,D.erp,D.eC9,D.esE,D.eI8,D.euc,D.exe,D.ezP,D.ery,D.eri],C.ax("bk<m,+(m,m)>"))
D.drt=new C.hC(A.G,11)
D.dry=new C.hC(A.G,30)
D.duQ=new B.Ub(null)
D.dyF=new B.Uf(null)
D.dyG=new B.Ug(null)
D.dyT=new B.Uh(null)
D.dAU=new B.Uk(null)
D.dAV=new B.Ul(null)
D.dAW=new B.Um(null)
D.dBJ=new B.UJ(null)
D.dBL=new B.UY(null)
D.dBM=new B.UZ(null)
D.dBO=new B.V_(null)
D.dCl=new B.V6(null)
D.dEg=new B.Va(null)
D.dEh=new B.Vc(null)
D.dEi=new B.Vd(null)
D.dEk=new B.Ve(null)
D.dFV=new B.Vv(null)
D.dFX=new B.Vx(null)
D.dG1=new B.VI(null)
D.dGc=new B.VJ(null)
D.dGI=new B.VK(null)
D.dIc=new B.VM(null)
D.dJA=new B.VO(null)
D.dJB=new B.VP(null)
D.dKW=new B.VS(null)
D.e_P=new B.VT(null)
D.e_R=new B.VU(null)
D.e_S=new B.VX(null)
D.e_T=new B.VY(null)
D.e1M=new B.W5(null)
D.e1N=new B.W6(null)
D.e1V=new B.Wd(null)
D.e23=new B.Wh(null)
D.e24=new B.Wi(null)
D.e25=new B.a8h(null)
D.e2G=new B.Wk(null)
D.e48=new B.Wo(null)
D.e7T=new C.v(0,118)
D.aHe=new C.v(0,13)
D.e7U=new C.v(0,17)
D.e7X=new C.v(0,330)
D.e8_=new C.v(0,-13)
D.aHk=new C.v(0,-14)
D.e80=new C.v(0,-17)
D.e81=new C.v(0,-18)
D.e82=new C.v(0,-19)
D.e83=new C.v(0,-20)
D.e86=new C.v(0,-26)
D.e87=new C.v(0,-28)
D.e88=new C.v(0,-31)
D.e89=new C.v(0,-32)
D.wo=new C.v(0,-6)
D.e8a=new C.v(0,-6771)
D.e8b=new C.v(0,-9)
D.e8d=new C.v(-9.5,-11)
D.e8e=new C.v(10,20)
D.e8g=new C.v(10,-13)
D.e8h=new C.v(10,-22)
D.e8i=new C.v(10,-4)
D.a5O=new C.v(11,8)
D.e8k=new C.v(12,2)
D.e8l=new C.v(14,0)
D.e8m=new C.v(14,12)
D.aHo=new C.v(14,8)
D.e8n=new C.v(14,-17)
D.e8o=new C.v(14,-18)
D.aHp=new C.v(14,-3)
D.aHq=new C.v(14,-4)
D.e8p=new C.v(15,0)
D.e8q=new C.v(15,-12)
D.e8r=new C.v(16,-8)
D.e8s=new C.v(18,14)
D.e8t=new C.v(18,-12)
D.aHu=new C.v(20,0)
D.e8z=new C.v(20,15)
D.e8A=new C.v(20,-17)
D.e8B=new C.v(20,-3)
D.e8C=new C.v(21,8)
D.e8E=new C.v(22,10)
D.aHv=new C.v(22,8)
D.e8F=new C.v(24,0)
D.e8G=new C.v(24,2)
D.e8I=new C.v(24,-18)
D.e8J=new C.v(24,-22)
D.e8K=new C.v(25,8)
D.e8L=new C.v(26,0)
D.e8R=new C.v(28,-30)
D.e8W=new C.v(30,18)
D.e8X=new C.v(30,2)
D.e8Y=new C.v(31,19)
D.e8Z=new C.v(32,0)
D.aHy=new C.v(34,0)
D.aHz=new C.v(34,-32)
D.Ik=new C.v(36,0)
D.e93=new C.v(3,-1)
D.e96=new C.v(40,3)
D.e9a=new C.v(4,11)
D.e9d=new C.v(4,-2)
D.e9h=new C.v(5,0)
D.e9i=new C.v(5,17)
D.e9j=new C.v(5,6)
D.e9n=new C.v(6,11)
D.e9t=new C.v(8,7)
D.e9u=new C.v(8,-10)
D.e9v=new C.v(8,-14)
D.e9w=new C.v(8,-3)
D.aHD=new C.v(9,0)
D.e9z=new C.v(-20.5,-17.6)
D.e9A=new C.v(-9,18.5)
D.e9D=new C.v(-2.6,-1)
D.e9E=new C.v(1.9,-0.8)
D.e9H=new C.v(-0.22,0.09)
D.e9M=new C.v(2.6,1)
D.e9T=new C.v(-9,12.2)
D.eaa=new C.v(-9,20.5)
D.eas=new C.v(-10,0)
D.eat=new C.v(-10,12)
D.aHK=new C.v(-10,4)
D.eau=new C.v(-11,-2)
D.eav=new C.v(-13,-5)
D.eaw=new C.v(-14,0)
D.eax=new C.v(-14,13)
D.eay=new C.v(-14,2)
D.eaz=new C.v(-14,-12)
D.eaA=new C.v(-14,-19)
D.eaB=new C.v(-14,-23)
D.eaC=new C.v(-15,6)
D.eaD=new C.v(-16,14)
D.eaE=new C.v(-16,-8)
D.eaF=new C.v(-17,10)
D.eaG=new C.v(-17,-18)
D.eaH=new C.v(-17,-8)
D.eaJ=new C.v(-18,20)
D.eaK=new C.v(-18,-9)
D.aHM=new C.v(-20,0)
D.eaM=new C.v(-20,16)
D.eaN=new C.v(-20,-9)
D.Sq=new C.v(-22,8)
D.eaO=new C.v(-22,-10)
D.eaP=new C.v(-22,-11)
D.eaQ=new C.v(-24,10)
D.eaR=new C.v(-24,11)
D.eaS=new C.v(-24,14)
D.eaT=new C.v(-24,-22)
D.eaU=new C.v(-25,-11)
D.eaV=new C.v(-26,0)
D.eaW=new C.v(-26,-18)
D.eaX=new C.v(-2,9)
D.eaY=new C.v(-2,-10)
D.eaZ=new C.v(-2,-20)
D.eb_=new C.v(-2,-9)
D.eb0=new C.v(-32,0)
D.aHO=new C.v(-34,0)
D.eb5=new C.v(-40,3)
D.eb7=new C.v(-4,11)
D.eb8=new C.v(-4,-17)
D.eb9=new C.v(-4,-2)
D.ebb=new C.v(-5,0)
D.ebc=new C.v(-5,20)
D.ebd=new C.v(-5,6)
D.ebe=new C.v(-6,26)
D.ebf=new C.v(-6,6)
D.ebg=new C.v(-6,-42)
D.ebh=new C.v(-7,-19)
D.ebi=new C.v(-7,-24)
D.ebj=new C.v(-8,-9)
D.a5S=new C.v(-9,0)
D.ebk=new C.v(-9,1)
D.ebl=new C.v(-9,-23)
D.fmP=new C.y("Thinking\u2026",null,A.hh,null,null,null,null,null,null,null,null,null)
D.ech=new C.D(A.jI,D.fmP,null)
D.fD_=new C.y("Start from a ready-made board",null,A.fU,null,null,null,null,null,null,null,null,null)
D.ecr=new C.D(A7.vF,D.fD_,null)
D.bxo=new C.R(4,0,4,14)
D.fif=new C.H(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnL=new C.y("Games and little helpers for a spare minute.",null,D.fif,null,null,null,null,null,null,null,null,null)
D.ecB=new C.D(D.bxo,D.fnL,null)
D.fzL=new C.y("Tap to throw in a star",null,A.kK,null,null,null,null,null,null,null,null,null)
D.b6k=new C.cp(A.A,null,null,D.fzL,null)
D.eiv=new C.cL(0,null,0,14,null,null,D.b6k,null)
D.dat=w([A.iE,A.bn],x.O)
D.aMF=new C.bU(A.A,0.5,A.x,null,0,D.dat,null,null)
D.ejd=new C.bU(A.A,0.5,A.x,null,0,D.ayX,null,null)
D.d1P=w([A.c,A.bK],x.O)
D.ejf=new C.bU(A.A,0.5,A.x,null,0,D.d1P,null,null)
D.ejg=new C.bU(A.A,0.5,A.x,null,0,M.axZ,null,null)
D.diA=w([A.bN,A.fB],x.O)
D.aMG=new C.bU(A.A,0.5,A.x,null,0,D.diA,null,null)
D.cHG=w([A.c,A.bN],x.O)
D.ejk=new C.bU(A.t8,0.5,A.x,null,0,D.cHG,null,null)
D.bdJ=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bj6=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.d0R=w([D.bdJ,D.agh,D.bj6],x.O)
D.d8t=w([0,0.7,1],x.n)
D.ejm=new C.bU(A.t8,0.5,A.x,null,0,D.d0R,D.d8t,null)
D.cy5=w([A.oO,A.aF,A.K],x.O)
D.dfm=w([0.3,0.7,1],x.n)
D.ejo=new C.bU(A.A,0.5,A.x,null,0,D.cy5,D.dfm,null)
D.bmW=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.dgM=w([A.fc,D.bmW],x.O)
D.ejq=new C.bU(A.t8,0.5,A.x,null,0,D.dgM,null,null)
D.cAU=w([A.dw,A.cs],x.O)
D.ejr=new C.bU(A.A,0.5,A.x,null,0,D.cAU,null,null)
D.cXb=w([A.oO,A.aF,A.fl],x.O)
D.ejs=new C.bU(A.A,0.5,A.x,null,0,D.cXb,null,null)
D.cPq=w([A.fL,A.aM,A.d5],x.O)
D.eju=new C.bU(A.t8,0.5,A.x,null,0,D.cPq,null,null)
D.db4=w([A.fB,L.mn],x.O)
D.ejv=new C.bU(A.t8,0.5,A.x,null,0,D.db4,null,null)
D.bdX=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.bbV=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cZq=w([D.bdX,D.bbV],x.O)
D.ejx=new C.bU(A.A,0.5,A.x,null,0,D.cZq,null,null)
D.biv=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bgs=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bgw=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dl_=w([D.biv,D.bgs,D.bgw],x.O)
D.cW_=w([0,0.65,1],x.n)
D.ejy=new C.bU(M.aay,0.5,A.x,null,0,D.dl_,D.cW_,null)
D.ejz=new C.bU(A.A,0.5,A.x,null,0,D.avm,null,null)
D.dhL=w([A.ll,A.aF,A.fl],x.O)
D.ejE=new C.bU(A.A,0.5,A.x,null,0,D.dhL,null,null)
D.djr=w([A.fB,A.hM],x.O)
D.ejH=new C.bU(A.A,0.5,A.x,null,0,D.djr,null,null)
D.aMK=new C.aS(9,9)
D.ejQ=new C.aS(1.4,1.4)
D.ekz=new C.z(0,-4)
D.eq5=new C.z(0.22,4)
D.exc=new C.z(0.8,-4)
D.eGv=new C.z(0.58,4)
D.eJe=new C.bl("Moon",1.62,4291941851)
D.eJN=new C.bl("Neptune",11.15,4284524026)
D.eKq=new C.bl("Sun",274,4294688548)
D.eKG=new C.bl("Mercury",3.7,4288455599)
D.eKM=new C.bl("Earth",9.81,4281908728)
D.eKO=new C.bl("Mars",3.71,4294472049)
D.eL6=new C.bl("Venus",8.87,4294759245)
D.eLc=new C.bl("Saturn",10.44,4294829706)
D.eLz=new C.bl("Jupiter",24.79,4294677052)
D.eP9=new C.a8(10,-8,18,-2)
D.ePa=new C.a8(14,-14,20,14)
D.ePb=new C.a8(20,-2,30,2)
D.ePd=new C.a8(4,-13,30,-3)
D.ePf=new C.a8(8,-7,12,7)
D.ePl=new C.a8(-12,12,12,19)
D.ePm=new C.a8(-12,14,12,22)
D.ePn=new C.a8(-12,-22,12,8)
D.ePo=new C.a8(-12,-25,12,19)
D.ePp=new C.a8(-12,-26,12,-6)
D.ePq=new C.a8(-12,-4,12,14)
D.ePr=new C.a8(-12,-6,10,6)
D.ePs=new C.a8(-14,20,14,24)
D.ePt=new C.a8(-14,6,14,10)
D.ePu=new C.a8(-14,-17,14,15)
D.ePv=new C.a8(-14,-26,14,18)
D.ePw=new C.a8(-14,-4,14,20)
D.ePx=new C.a8(-15,-29,15,25)
D.ePy=new C.a8(-16,-16,16,16)
D.ePz=new C.a8(-16,-22,-9,18)
D.ePA=new C.a8(-16,-24,16,-10)
D.ePB=new C.a8(-16,-2,16,20)
D.ePD=new C.a8(-18,20,18,24)
D.ePE=new C.a8(-18,-18,18,20)
D.ePF=new C.a8(-20,12,20,22)
D.ePG=new C.a8(-20,-28,20,26)
D.ePH=new C.a8(-22,14,22,18)
D.aNd=new C.a8(-22,-26,22,24)
D.ePI=new C.a8(-22,-3,22,3)
D.ePJ=new C.a8(-22,-4,22,12)
D.ePK=new C.a8(-24,-12,10,22)
D.ePL=new C.a8(-24,-14,22,8)
D.ePM=new C.a8(-24,-6,24,20)
D.aNe=new C.a8(-24,-9,24,9)
D.ePN=new C.a8(-25,14,25,19)
D.ePO=new C.a8(-26,-14,14,8)
D.ePP=new C.a8(-26,-4,26,20)
D.ePQ=new C.a8(-26,-6,4,6)
D.aNf=new C.a8(-28,-13,28,13)
D.ePR=new C.a8(-28,-16,28,16)
D.ePS=new C.a8(-28,-16,28,8)
D.ePT=new C.a8(-28,-22,28,22)
D.ePU=new C.a8(-30,-12,30,14)
D.ePV=new C.a8(-30,-14,0,14)
D.ePW=new C.a8(-30,-18,30,20)
D.ePX=new C.a8(-30,-28,30,14)
D.ePY=new C.a8(-30,-2,30,18)
D.ePZ=new C.a8(-30,-4,30,18)
D.eQ_=new C.a8(-32,-17,32,17)
D.eQ0=new C.a8(-32,-28,32,18)
D.eQ1=new C.a8(-33,-21,33,17)
D.eQ2=new C.a8(-34,14,34,26)
D.a6O=new C.a8(-34,-18,34,18)
D.eQ3=new C.a8(-34,-4,34,7)
D.eQ4=new C.a8(-36,-24,36,20)
D.eQ5=new C.a8(-38,-22,38,22)
D.eQ6=new C.a8(-3,12,3,22)
D.eQ7=new C.a8(-3,5,3,15)
D.eQ9=new C.a8(-46,-34,46,28)
D.eQa=new C.a8(-48,-3,48,3)
D.eQd=new C.a8(-6,18,24,24)
D.eQe=new C.a8(-6,5,6,12)
D.eQf=new C.a8(-6,-22,6,-15)
D.eQg=new C.a8(-9,-16,9,22)
D.eQh=new C.a8(-4.5,-24,4.5,-21.2)
D.eQj=new C.a8(14,-9,17.5,9)
D.e76={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aO9=new C.dD(D.e76,5,x.R)
D.e6E={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eTr=new C.dD(D.e6E,10,x.R)
D.eVF=new C.as(24,44)
D.eVK=new C.as(300,300)
D.eW3=new C.as(54,38)
D.eWa=new C.as(66,38)
D.b7D=new C.fk(2,null,null,null,null,A.bu,null,null,null,null)
D.eXa=new C.a7(16,16,D.b7D,null)
D.aPa=new C.hQ(3,12,12,0.82,null)
D.fEH=new C.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aPl=new C.b1(D.fEH,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.db7=w([A.c7,A.bH,A.b0,A.aO,A.pD,A.c7],x.O)
D.f25=new C.fY(A.A,0,6.283185307179586,A.x,D.db7,null,null)
D.fb9=new C.H(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Qs,null,null,null)
D.f3k=new C.eu("You are here (Sun)",null,null,A.cP,null,null,null,null,null,null,D.fb9)
D.aRN=new C.H(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3l=new C.eu("What we see",null,null,A.cP,null,null,null,null,null,null,D.aRN)
D.f8v=new C.H(!0,A3.L_,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3o=new C.eu("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cP,null,null,null,null,null,null,D.f8v)
D.fdn=new C.H(!0,A.kp,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3u=new C.eu("AI",null,null,A.cP,null,null,null,null,null,null,D.fdn)
D.f8g=new C.H(!0,A.bU,null,null,null,null,15,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3v=new C.eu("Add atoms with the buttons below",null,null,A.cP,null,null,null,null,null,null,D.f8g)
D.aQ9=new C.H(!0,A.bU,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3K=new C.H(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3M=new C.H(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4h=new C.H(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4B=new C.H(!0,A.cl,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f55=new C.H(!0,A.bU,null,null,null,null,11,A.P,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5a=new C.H(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5q=new C.H(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5T=new C.H(!0,A.aS,null,null,null,null,12,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6h=new C.H(!0,A.bU,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6s=new C.H(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU3=new C.cR(A.hP,A.dE,6)
D.d4D=w([D.eU3],x.q)
D.f6M=new C.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d4D,null,null,null)
D.f6P=new C.H(!0,A.et,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6S=new C.H(!0,A.c,null,null,null,null,17,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6U=new C.H(!0,A.bU,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7j=new C.H(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQy=new C.H(!0,A.bU,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7D=new C.H(!0,A.aA,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7E=new C.H(!0,A.bU,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8z=new C.H(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f93=new C.H(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9z=new C.H(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU6=new C.cR(A.aW,A.J,3)
D.azb=w([D.eU6],x.q)
D.f9C=new C.H(!0,A.c,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.azb,null,null,null)
D.f9H=new C.H(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fan=new C.H(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Qs,null,null,null)
D.faQ=new C.H(!0,A.aA,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faZ=new C.H(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbo=new C.H(!0,A.tz,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbE=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbZ=new C.H(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc3=new C.H(!0,A.bU,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc8=new C.H(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fce=new C.H(!0,A.aA,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcF=new C.H(!0,A.bU,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcT=new C.H(!0,A.n8,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcU=new C.H(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd8=new C.H(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRc=new C.H(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdH=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTU=new C.cR(A.w,A.J,5)
D.cTA=w([D.eTU],x.q)
D.fdI=new C.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cTA,null,null,null)
D.fdN=new C.H(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.azb,null,null,null)
D.fe2=new C.H(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe8=new C.H(!0,A.fA,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fep=new C.H(!0,A.bU,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feU=new C.H(!0,A.b0,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffs=new C.H(!0,A.bU,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg5=new C.H(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fge=new C.H(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRy=new C.H(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgH=new C.H(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgR=new C.H(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgZ=new C.H(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhi=new C.H(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRJ=new C.H(!0,A.ad,null,null,null,null,12,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhl=new C.H(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi5=new C.H(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8P=new C.H(!0,A.c,null,null,null,null,13,A.a7,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiu=new C.H(!0,A.tz,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiP=new C.H(!0,A.b0,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6X=new C.H(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjd=new C.y("\u26a0\ufe0f ",null,D.f6X,null,null,null,null,null,null,null,null,null)
D.fjp=new C.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.wD,null,null,null,null,null,null,null,null,null)
D.fjQ=new C.y("LETTER COUNT OF THE SECRET VERSION",null,Q.mR,null,null,null,null,null,null,null,null,null)
D.fkU=new C.y("Pick one, then change it and see what happens.",null,A.wD,null,null,null,null,null,null,null,null,null)
D.fkY=new C.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f81=new C.H(!0,A.ad,null,null,null,null,null,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flS=new C.y("What do you want to invent? Type it below, or tap an idea.",null,D.f81,null,null,null,null,null,null,null,null,null)
D.fme=new C.y("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a84,null,null,null,null,null,null,null,null,null)
D.fnm=new C.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fnY=new C.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hw,null,null,null,null,null,null,null,null,null)
D.fo2=new C.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.foB=new C.y("Make it yours",null,A.kj,null,null,null,null,null,null,null,null,null)
D.foT=new C.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a8c,null,null,null,null,null,null,null,null,null)
D.fcj=new C.H(!0,A.jm,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frd=new C.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fcj,null,null,null,null,null,null,null,null,null)
D.frs=new C.y("YOUR DECODING",null,Q.mR,null,null,null,null,null,null,null,null,null)
D.frF=new C.y("5G",null,U.aQB,null,null,null,null,null,null,null,null,null)
D.feF=new C.H(!0,A.bU,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsN=new C.y("WHAT HAPPENS",null,D.feF,null,null,null,null,null,null,null,null,null)
D.fut=new C.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fv8=new C.y("Change the words and pictures on the three slabs.",null,A.wD,null,null,null,null,null,null,null,null,null)
D.fvj=new C.y("All the parts and wires will be removed.",null,A.hJ,null,null,null,null,null,null,null,null,null)
D.fvD=new C.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fwc=new C.y("Tap the crank on the board again and again to spin it faster.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fx4=new C.y("INTERCEPTED",null,Q.mR,null,null,null,null,null,null,null,null,null)
D.fxp=new C.y("\ud83c\udfaf Challenges",null,A.de,null,null,null,null,null,null,null,null,null)
D.fxV=new C.y("Remove this part",null,V.aQd,null,null,null,null,null,null,null,null,null)
D.fyc=new C.y("Clear the board?",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fe9=new C.H(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fys=new C.y("How the Lab works",null,D.fe9,null,null,null,null,null,null,null,null,null)
D.f5C=new C.H(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyM=new C.y("Electronics Lab",null,D.f5C,null,null,null,null,A.a2,null,1,null,null)
D.fyP=new C.y("?",null,M.aRH,null,null,null,null,null,null,null,null,null)
D.fcd=new C.H(!0,A.aO,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyU=new C.y("Planet Earth",null,D.fcd,null,null,null,null,null,null,null,null,null)
D.fA6=new C.y("Ready-made circuits",null,A.de,null,null,null,null,null,null,null,null,null)
D.fAJ=new C.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fB1=new C.y("UNIVERSE EXPLORER",null,I.a8a,null,null,null,null,null,null,null,null,null)
D.fDA=new C.y("SECRET VERSION",null,Q.mR,null,null,null,null,null,null,null,null,null)
D.fh1=new C.H(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE6=new C.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fh1,null,null,null,null,null,null,null,null,null)
D.fFj=new C.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a84,null,null,null,null,null,null,null,null,null)
D.fFN=new C.y("NGMY",null,A.uW,null,null,null,null,null,null,null,null,null)
D.fG_=new C.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.U6,null,null,null,null,null,null,null,null,null)
D.fGm=new C.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.kJ,null,null,null,null,null,null,null,null,null)
D.fHm=new C.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.wD,null,null,null,null,null,null,null,null,null)
D.fHo=new C.y("TOOLBOX",null,I.a8a,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hhB=null
$.hhA=null
$.hnE=0
$.hPC=C.U(x.N,x.k)
$.hQc=C.U(x.N,x.k)
$.hgW=null
$.hPY=C.U(x.N,x.k)
$.hR0=C.U(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ilD","bE3",()=>{var v="led"
return C.a([B.ay5("Both together","Make the light glow only when BOTH switches are ON.",2,new B.fiy(),v),B.ay5("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.fiz(),v),B.ay5("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.fiA(),v),B.ay5("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fiH(),v),B.ay5("Not both","Make the light go OFF only when both switches are ON.",2,new B.fiI(),v),B.ay5("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fiJ(),"buzzer")],C.ax("O<baK>"))})
w($,"im4","bE4",()=>C.a([B.oG("UNIVERSE","Earth, space and gravity",A.Oc,A.aO,new B.fiZ()),B.oG("ELECTRONICS LAB","Batteries, wires, real circuits",Af.BR,A.aO,new B.fj_()),B.oG("DISCOVERY LAB","Body Explorer: a real 3D human",D.a0d,A.b0,new B.fj0()),B.oG("TOOLBOX","Converter, clock, games",T.aly,A.ct,new B.fjb()),B.oG("MOLECULE MAKER","Join atoms into real molecules",A.NE,A.hn,new B.fjd()),B.oG("DNA LAB","Copy DNA, build a protein",D.a0d,A.bX,new B.fje()),B.oG("ECOSYSTEM LAB","Grass, rabbits and foxes",A.ys,A.b0,new B.fjf()),B.oG("BALANCE LAB","Levers, weight and torque",D.bIn,A.aM,new B.fjg()),B.oG("GEAR LAB","Teeth, speed and force",A.C0,A.ct,new B.fjh()),B.oG("LASER MAZE","Bend the beam with mirrors",I.alX,A.av,new B.fji()),B.oG("LIGHT MIXER","Match colours with light",D.bG4,A.b8,new B.fjj()),B.oG("CIPHER LAB","Make and crack secret codes",A.yC,A.aO,new B.fj1()),B.oG("REACTION LAB","Wire parts together",A.yG,A.bv,new B.fj2()),B.oG("SPARK PAINTER","Paint with light",A.a0f,A.bX,new B.fj3()),B.oG("ROCKET LANDER","Land softly on the pad",A.nq,A.aO,new B.fj4()),B.oG("ORBIT STUDIO","Slingshot planets",A.mB,A.ct,new B.fj5()),B.oG("SWARM STUDIO","A living school of fish",A.NE,A.b0,new B.fj6()),B.oG("CHAIN BURST","One tap, a whole chain",A.ha,A.bX,new B.fj7()),B.oG("TITLE ANIMATOR","Make a moving title",A.yz,A.bH,new B.fj8()),B.oG("CIRCUIT LAB","Connect logic, learn it",A.a0F,A.cl,new B.fj9()),B.oG("MARBLE MUSIC","Marbles ring the notes",D.bFK,A.b8,new B.fja()),B.oG("ORBIT SEQUENCER","Planets play the tune",D.bIa,A.bu,new B.fjc())],C.ax("O<bsC>")))
w($,"inC","qj",()=>{var v,u,t=C.U(x.N,x.dV)
for(v=0;v<76;++v){u=D.QL[v]
t.n(0,u.a,u)}return t})
w($,"ilE","ahR",()=>C.a([B.FC("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.fiK()),B.FC("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fiL()),B.FC("Spin the motor","A battery and a motor in a loop will make it spin.",new B.fiM()),B.FC("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fiN()),B.FC("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.fiO()),B.FC("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fiB()),B.FC("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.fiC()),B.FC("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fiD()),B.FC("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.fiE()),B.FC("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fiF()),B.FC("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fiG())],C.ax("O<baL>")))
w($,"im6","hw5",()=>C.a([B.a0N("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cc,new B.fjr()),B.a0N("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c7,A.bz,new B.fjs()),B.a0N("Breathe","Calm down in a minute","\ud83e\udee7",A.hn,A.cA,new B.fjt()),B.a0N("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b6,new B.fju()),B.a0N("Memory Match","Find the pairs","\ud83c\udccf",A.aO,A.cb,new B.fjv()),B.a0N("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bH,A.bc,new B.fjw()),B.a0N("Tip & Split","Share the bill","\ud83e\uddfe",A.b0,A.b_,new B.fjx()),B.a0N("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bu,A.aE,new B.fjy())],C.ax("O<btX>")))
w($,"im5","hw4",()=>C.a([B.afa("EARTH GLOBE","Turn it, tap a country",A.mB,A.aO,new B.fjk()),B.afa("SOLAR SYSTEM","The Sun and its worlds",D.bFO,A.aM,new B.fjl()),B.afa("GRAVITY LAB","Drop, weigh, orbit",D.amG,A.ct,new B.fjm()),B.afa("BLACK HOLE","Throw in a star",A.G0,A.bu,new B.fjn()),B.afa("GALAXY","Build, tilt, collide",A.yg,A.h6,new B.fjo()),B.afa("SIZE COMPARE","Earth next to a star",D.bG6,A.bX,new B.fjp()),B.afa("SEASONS & MOON","Why it is summer",A.vP,A.bv,new B.fjq())],C.ax("O<btS>")))})()};
(a=>{a["FNaXmoRR5C9dWFfUDJehMPIQgVo="]=a.current})($__dart_deferred_initializers__);